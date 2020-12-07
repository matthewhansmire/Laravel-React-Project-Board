<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUserPreferencesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('user_preferences', function (Blueprint $table) {
            $table->id();
            $table->boolean('activity_desktop_sound');
            $table->boolean('activity_notification');
            $table->boolean('chat_desktop_sound');
            $table->boolean('chat_notification');
            $table->enum('nav_bar_position', ['left', 'top'])->default('left');
            $table->enum('project_progress', [
                'Never send me project progress report',
                'Send me project progress report daily',
                'Send me project progress report weekly',
                'Send me project progress report monthly'
            ]);
            $table->boolean('email_copy')->default(false);
            $table->boolean('email_daily')->default(false);
            $table->boolean('email_product')->default(false);
            $table->enum('account_activity', [
                'Never send me email notifications',
                'Send me email digest after every one hour',
                'Send me email digest after every four hours',
                'Immediately send me email notifications'
            ]);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('user_preferences');
    }
}
