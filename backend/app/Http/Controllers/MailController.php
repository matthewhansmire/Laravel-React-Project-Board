<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use App\Mail\InvitePerson;
use Illuminate\Support\Facades\Log;

class MailController extends Controller
{
    public function sendInviteEmail(Request $request) {

        $from = $request->from;
        $sender = $request->sender;
        $to = $request->to;
        $receiver = $request->receiver;

        $password = $request->password ? $request->password : '123456';
        $user_id = $request->user_id;
        $role_id = $request->role_id;
        $language_id = $request->language_id;
        $timezone_id = $request->timezone_id;
        $title = $request->title;

        $serviceHost = env('APP_SERVICE_URL', '');
   
        $mailData = [
            'title' => 'You are invited by '.$sender,                        
            'receiver' => $receiver,
            'url' => $serviceHost.'/api/acceptedby?email='.$to.'&password='.$password.'&name='.$receiver.'&user_id='.$user_id.'&role_id='.$role_id.'&language_id='.$language_id.'&timezone_id='.$timezone_id.'&title='.$title            
        ];
        
        Mail::to($to)->send(new InvitePerson($mailData));
        return response(['message' => 'Email has been sent.'], 200);
    }   
}
