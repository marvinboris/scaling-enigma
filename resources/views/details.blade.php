<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Laravel') }}</title>

    <!-- Fonts -->
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    <link rel="apple-touch-icon" sizes="57x57" href="{{ asset('favicon/apple-icon-57x57.png') }}">
    <link rel="apple-touch-icon" sizes="60x60" href="{{ asset('favicon/apple-icon-60x60.png') }}">
    <link rel="apple-touch-icon" sizes="72x72" href="{{ asset('favicon/apple-icon-72x72.png') }}">
    <link rel="apple-touch-icon" sizes="76x76" href="{{ asset('favicon/apple-icon-76x76.png') }}">
    <link rel="apple-touch-icon" sizes="114x114" href="{{ asset('favicon/apple-icon-114x114.png') }}">
    <link rel="apple-touch-icon" sizes="120x120" href="{{ asset('favicon/apple-icon-120x120.png') }}">
    <link rel="apple-touch-icon" sizes="144x144" href="{{ asset('favicon/apple-icon-144x144.png') }}">
    <link rel="apple-touch-icon" sizes="152x152" href="{{ asset('favicon/apple-icon-152x152.png') }}">
    <link rel="apple-touch-icon" sizes="180x180" href="{{ asset('favicon/apple-icon-180x180.png') }}">
    <link rel="icon" type="image/png" sizes="192x192"  href="{{ asset('favicon/android-icon-192x192.png') }}">
    <link rel="icon" type="image/png" sizes="32x32" href="{{ asset('favicon/favicon-32x32.png') }}">
    <link rel="icon" type="image/png" sizes="96x96" href="{{ asset('favicon/favicon-96x96.png') }}">
    <link rel="icon" type="image/png" sizes="16x16" href="{{ asset('favicon/favicon-16x16.png') }}">
    <link rel="manifest" href="{{ asset('favicon/manifest.json') }}">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="msapplication-TileImage" content="{{ asset('favicon/ms-icon-144x144.png') }}">
    <meta name="theme-color" content="#ffffff">

    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
</head>
<body>
    <main>
        @if ($request['status'] == 0 || $request['status'] == 1)
        <div class="container">
            <div class="row m-0 mt-4 p-3 rounded bg-green-20">
                <div class="col-12">
                    <div class="text-green text-700 mb-2">
                        User info Gathering
                    </div>
                
                    <hr />
                </div>

                <div class="pb-3 col-lg-6">
                    <span>Full Name:</span> <span class="text-green text-500">{{ $request['name'] }}</span>
                </div>
                <div class="pb-3 col-lg-6">
                    <span>Platform:</span> <span class="text-green text-500">{{ $request['platform'] }}</span>
                </div>
                <div class="pb-3 col-lg-6">
                    <span>E-Mail Address:</span> <span class="text-green text-500">{{ $request['email'] }}</span>
                </div>
                <div class="pb-3 col-lg-6">
                    <span>User ID:</span> <span class="text-green text-500">{{ $request['ref'] }}</span>
                </div>
                <div class="pb-3 col-lg-6">
                    <span>Country:</span> <span class="text-green text-500">{{ $request['country'] }}</span>
                </div>
                <div class="pb-3 col-lg-6">
                    <span>Phone Number:</span> <span class="text-green text-500">{{ $request['phone'] }}</span>
                </div>
                <div class="pb-3 col-lg-6">
                    <span>Issue:</span> <span class="text-green text-500">{{ $request['issue'] }}</span>
                </div>
                {!!$request['hash'] ?? '
                <div class="pb-3 col-lg-6">
                    <span>Hash:</span> <span class="text-green text-500">'.$request['hash'].'</span>
                </div>
                '!!}
                {!!$request['pack_ids'] ?? '
                <div class="pb-3 col-lg-6">
                    <span>Package IDs:</span> <span class="text-green text-500">'.$request['pack_ids'].'</span>
                </div>
                '!!}
            </div>

            <div class="row m-0 mt-4 p-3 rounded bg-orange-20">
                <div class="col-12">
                    <div class="text-orange text-700 mb-2">
                        User documents
                    </div>
                
                    <hr />
                </div>

                @php
                    $documentsContent = '';

                    foreach ($request['documents'] as $doc) {
                        if ($doc) {
                            $arr1 = explode('.', $doc);
                            $format = end($arr1);

                            $arr2 = explode('/', $doc);
                            $arr3 = explode('.', end($arr2));
                            $formatlessNameArr = [];
                            foreach ($arr3 as $i => $n) {
                                if ($i < count($arr3) - 1) $formatlessNameArr[] = $n;
                            }
                            $formatlessName = implode('.', $formatlessNameArr);

                            $content = null;
                            switch (strtolower($format)) {
                                case 'pdf':
                                    $content = 'PDF';
                                    break;
                                default:
                                    $content = '<div class="embed-responsive embed-responsive-1by1 position-absolute" style="background: url(\'' . url($doc) . '\') no-repeat center; background-size: cover; top: 50%; left: 50%; transform: translate(-50%,-50%)"></div>';
                                    break;
                            }

                            $documentsContent .= '
                                <div class="col-xl-3 pr-0" style="min-width: 100px">
                                    <a target="_blank" href="'.url($doc) . '" class="rounded-4 overflow-hidden p-2 bg-light d-flex justify-content-center align-items-center text-nowrap text-transparent shadow position-relative embed-responsive embed-responsive-1by1">
                                        '.$content.'
                                    </a>    
                                    <div class="text-uppercase text-truncate pt-3 text-darkblue">
                                        '.$formatlessName.'
                                    </div>
                                </div>
                            ';
                        }
                    }
                @endphp

                <div class="col-12">
                    <div class="row">
                        {!! $documentsContent !!}
                    </div>
                </div>
            </div>

            <div class="row m-0 mt-4 p-3 rounded bg-soft">
                <div class="col-12">
                    <div class="text-black text-700 mb-2">
                        Issue description
                    </div>
                
                    <hr />
                </div>

                @php
                    $issueFilesContent = '';

                    foreach ($request['issue_files'] as $issue_file) {
                        if ($issue_file) {
                            $arr1 = explode('.', $issue_file);
                            $format = end($arr1);

                            $arr2 = explode('/', $issue_file);
                            $arr3 = explode('.', end($arr2));
                            $formatlessNameArr = [];
                            foreach ($arr3 as $i => $n) {
                                if ($i < count($arr3) - 1) $formatlessNameArr[] = $n;
                            }
                            $formatlessName = implode('.', $formatlessNameArr);

                            $icon = null;
                            switch (strtolower($format)) {
                                case 'pdf':
                                    $icon = 'PDF';
                                    break;
                                default:
                                    $icon = 'IMG';
                                    break;
                            }

                            $issueFilesContent .= '
                                <div class="pr-3 d-inline-block" style="max-width: 200px">
                                    <a target="_blank" href="'.url($issue_file) . '" class="text-decoration-none">
                                        <div class="rounded-2 p-2 bg-light text-darkblue text-uppercase text-truncate text-nowrap">
                                            '.$icon.' '.$formatlessName.'
                                        </div>
                                    </a>
                                </div>
                            ';
                        }
                    }
                @endphp

                <div class="pb-3 text-break">
                    {!! $request['description'] !!}
                </div>

                <div class="col-12">
                    <div class="row">
                        {!! $issueFilesContent !!}
                    </div>
                </div>
            </div>

        </div>
        @else
            @if ($request['status'] == 2)
                <h1 class="text-red text-center py-5">This request has been cancelled</h1>
            @else
                <h1 class="text-green text-center py-5">This request has been solved</h1>
            @endif
        @endif
    </main>
</body>
</html>