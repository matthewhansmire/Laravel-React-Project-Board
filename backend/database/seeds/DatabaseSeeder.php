<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call([
          AnnouncementLastsForsSeeder::class,
          AnnouncementTagsSeeder::class,
          LanguageSeeder::class,
          ProjectAccessRolesSeeder::class,
          ProjectCategoriesSeeder::class,
          ProjectColorsSeeder::class,
          ProjectStatusesSeeder::class,
          ProjectTabsSeeder::class,
          RemindersSeeder::class,
          TaskLabelsSeeder::class,
          TasklistTagsSeeder::class,
          TaskProgressesSeeder::class,
          TaskStagesSeeder::class,
          TaskWorkflowsSeeder::class,
          TimeStatusesSeeder::class,
          TimezoneSeeder::class
        ]);
    }
}
