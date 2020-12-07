<style>
  div.btn-line {
    display: flex
  }
</style>

@component('mail::layout')

  @slot('header')
    @component('mail::header', ['url' => config('app.url')])
        <!-- header here -->
    @endcomponent
  @endslot

# Welcome, {{$mailData['receiver']}}! 

{{$mailData['title']}}

<div class="btn-line">
  @component('mail::button', ['url' => ''])
  Ignore
  @endcomponent

  @component('mail::button', ['url' => $mailData['url']])
  Accept
  @endcomponent
</div>

Thanks,<br>
ProjHub Team

@slot('footer')
    @component('mail::footer')
        <!-- footer here -->
    @endcomponent
  @endslot

@endcomponent