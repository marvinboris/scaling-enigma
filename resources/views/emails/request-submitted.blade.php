<div
    style="background-color: white; width: 100%; font-size: 1.2rem; font-family: Poppins, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;">
    <div style="margin-bottom: .5rem;">
        Hello dear <strong>{{$request->name}}</strong>,<br><br>

        <div style="text-align: justify;">
            We are happy to inform you that your request was submitted successfully.
            You will be notified by the email <strong>{{$request->email}}</strong>, we kindly count on your patience as
            request normally have to go through several verification and may take up to 72 hours
            maximum. If you don't receive any notification from the support within that period,
            please kindly contact us asap at <strong>support@git-sa.net</strong>. We sent the below request ID
            to your mail. Keep it safe, it will help you check if your issue was solved.
        </div>
    </div>
    <div style="margin-bottom: .5rem;">
        Your request ID is : <strong>{{$request->reqid}}</strong>
    </div>
    <div style="margin-top: 2rem;">
        Kind regards,<br>
        From <strong>Global Investment Trading Support</strong>
    </div>
</div>