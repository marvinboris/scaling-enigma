<div
    style="background-color: white; width: 100%; font-size: 1.2rem; font-family: Poppins, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;">
    <div style="margin-bottom: .5rem;">
        Hello dear <strong>{{ $request->name }}</strong>,<br><br>
        <div style="text-align: justify;">
            @switch($request->status)
                @case(1)
                    Thank you for your patience. We are hereby informing you that your request <strong>{{ $request->reqid }}</strong> is being under process. You will be notified shortly.
                    @break
                @case(2)
                    Your request <strong>{{ $request->reqid }}</strong> has been cancelled. Please check below to find the reason. <br><br>
                    <div style="background-color: rgba(245, 163, 0, .25); padding: 1rem 1.25rem; border-radius: .25rem;">"{{ $request->comments }}"</div>
                    @break
                @case(3)
                    We are informing you that your request <strong>{{ $request->reqid }}</strong> has been solved. Thanks for your patience. Come back to us if you have any queries.
                    @break
            @endswitch
        </div>
    </div>
    <div style="margin-top: 2rem;">
        Kind regards,<br>
        From <strong>Global Investment Trading Support</strong>
    </div>
</div>