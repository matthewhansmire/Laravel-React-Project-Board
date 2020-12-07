/*
 Navicat Premium Data Transfer

 Source Server         : projhub
 Source Server Type    : MySQL
 Source Server Version : 100411
 Source Host           : localhost:3306
 Source Schema         : projhub

 Target Server Type    : MySQL
 Target Server Version : 100411
 File Encoding         : 65001

 Date: 30/11/2020 14:22:28
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for activities
-- ----------------------------
DROP TABLE IF EXISTS `activities`;
CREATE TABLE `activities`  (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `act_kind` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `act` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `act_detail` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `creator_id` int(10) UNSIGNED NOT NULL,
  `act_kind_id` int(10) UNSIGNED NOT NULL,
  `created_at` timestamp(0) NULL DEFAULT NULL,
  `updated_at` timestamp(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 2 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of activities
-- ----------------------------
INSERT INTO `activities` VALUES (1, 'task', 'added', 'task in checklist', 1, 1, '2020-11-03 17:46:03', NULL);

-- ----------------------------
-- Table structure for announcement_lastsfor
-- ----------------------------
DROP TABLE IF EXISTS `announcement_lastsfor`;
CREATE TABLE `announcement_lastsfor`  (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 5 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of announcement_lastsfor
-- ----------------------------
INSERT INTO `announcement_lastsfor` VALUES (1, '24 hours');
INSERT INTO `announcement_lastsfor` VALUES (2, '48 hours');
INSERT INTO `announcement_lastsfor` VALUES (3, 'A week');
INSERT INTO `announcement_lastsfor` VALUES (4, 'Forever');

-- ----------------------------
-- Table structure for announcement_tags
-- ----------------------------
DROP TABLE IF EXISTS `announcement_tags`;
CREATE TABLE `announcement_tags`  (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 5 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of announcement_tags
-- ----------------------------
INSERT INTO `announcement_tags` VALUES (1, 'Keep subscribers hidden');
INSERT INTO `announcement_tags` VALUES (2, 'Allow comments');
INSERT INTO `announcement_tags` VALUES (3, 'Pin to top');
INSERT INTO `announcement_tags` VALUES (4, 'Schedule for future');

-- ----------------------------
-- Table structure for announcements
-- ----------------------------
DROP TABLE IF EXISTS `announcements`;
CREATE TABLE `announcements`  (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `desc` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `creator_id` int(10) UNSIGNED NOT NULL,
  `attached_file` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `lasts_for_id` int(10) UNSIGNED NOT NULL,
  `created_at` timestamp(0) NULL DEFAULT NULL,
  `updated_at` timestamp(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 2 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of announcements
-- ----------------------------
INSERT INTO `announcements` VALUES (1, 'happy birthday', 'today is Segunfunmi\'s birthday', 2, NULL, 1, NULL, NULL);

-- ----------------------------
-- Table structure for announcements_match_tags
-- ----------------------------
DROP TABLE IF EXISTS `announcements_match_tags`;
CREATE TABLE `announcements_match_tags`  (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `announcement_id` int(10) UNSIGNED NOT NULL,
  `tag_id` int(10) UNSIGNED NOT NULL,
  `created_at` timestamp(0) NULL DEFAULT NULL,
  `updated_at` timestamp(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for events
-- ----------------------------
DROP TABLE IF EXISTS `events`;
CREATE TABLE `events`  (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `desc` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL,
  `start` datetime(0) NOT NULL,
  `end` datetime(0) NOT NULL,
  `creator_id` int(10) UNSIGNED NOT NULL,
  `project_id` int(10) UNSIGNED NOT NULL,
  `timezone_id` int(10) UNSIGNED NOT NULL,
  `repeat_id` int(10) UNSIGNED NULL DEFAULT NULL,
  `reminder_id` int(10) UNSIGNED NULL DEFAULT NULL,
  `mark_private` tinyint(1) NOT NULL DEFAULT 0,
  `created_at` timestamp(0) NULL DEFAULT NULL,
  `updated_at` timestamp(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 2 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of events
-- ----------------------------
INSERT INTO `events` VALUES (1, 'test event', 'this is test event', '2020-11-10 00:00:00', '2020-11-18 09:18:26', 1, 1, 1, 0, 0, 0, NULL, NULL);

-- ----------------------------
-- Table structure for events_match_attendees
-- ----------------------------
DROP TABLE IF EXISTS `events_match_attendees`;
CREATE TABLE `events_match_attendees`  (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `event_id` int(10) UNSIGNED NOT NULL,
  `attendee_id` int(10) NULL DEFAULT NULL,
  `created_at` timestamp(0) NULL DEFAULT NULL,
  `updated_at` timestamp(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for groups
-- ----------------------------
DROP TABLE IF EXISTS `groups`;
CREATE TABLE `groups`  (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` int(10) UNSIGNED NOT NULL,
  `created_at` timestamp(0) NULL DEFAULT NULL,
  `updated_at` timestamp(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for groups_match_assignees
-- ----------------------------
DROP TABLE IF EXISTS `groups_match_assignees`;
CREATE TABLE `groups_match_assignees`  (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `group_id` int(10) UNSIGNED NOT NULL,
  `assignee_id` int(10) NULL DEFAULT NULL,
  `created_at` timestamp(0) NULL DEFAULT NULL,
  `updated_at` timestamp(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for languages
-- ----------------------------
DROP TABLE IF EXISTS `languages`;
CREATE TABLE `languages`  (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 9 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of languages
-- ----------------------------
INSERT INTO `languages` VALUES (1, 'English');
INSERT INTO `languages` VALUES (2, 'French');
INSERT INTO `languages` VALUES (3, 'German');
INSERT INTO `languages` VALUES (4, 'Italian');
INSERT INTO `languages` VALUES (5, 'Polish');
INSERT INTO `languages` VALUES (6, 'Portuguese');
INSERT INTO `languages` VALUES (7, 'Russian');
INSERT INTO `languages` VALUES (8, 'Spanish');

-- ----------------------------
-- Table structure for migrations
-- ----------------------------
DROP TABLE IF EXISTS `migrations`;
CREATE TABLE `migrations`  (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `migration` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 226 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of migrations
-- ----------------------------
INSERT INTO `migrations` VALUES (9, '2020_10_27_131147_create_project_colors_table', 3);
INSERT INTO `migrations` VALUES (10, '2020_10_27_131303_create_project_tabs_table', 3);
INSERT INTO `migrations` VALUES (14, '2020_10_27_133717_create_tasklist_workflows_table', 3);
INSERT INTO `migrations` VALUES (17, '2020_10_27_134013_create_tasklist_tags_table', 3);
INSERT INTO `migrations` VALUES (23, '2020_10_27_135245_create_task_match_labels_table', 3);
INSERT INTO `migrations` VALUES (24, '2020_10_27_135418_create_task_repeats_table', 3);
INSERT INTO `migrations` VALUES (32, '2016_06_01_000001_create_oauth_auth_codes_table', 8);
INSERT INTO `migrations` VALUES (33, '2016_06_01_000002_create_oauth_access_tokens_table', 8);
INSERT INTO `migrations` VALUES (34, '2016_06_01_000003_create_oauth_refresh_tokens_table', 8);
INSERT INTO `migrations` VALUES (35, '2016_06_01_000004_create_oauth_clients_table', 8);
INSERT INTO `migrations` VALUES (36, '2016_06_01_000005_create_oauth_personal_access_clients_table', 8);
INSERT INTO `migrations` VALUES (64, '2020_11_06_124248_create_tasklist_tasklist_match_tags_table', 26);
INSERT INTO `migrations` VALUES (72, '2020_11_06_133408_create_project_projects_match_assignees_table', 32);
INSERT INTO `migrations` VALUES (77, '2020_11_06_134817_create_tasklist_tasklists_match_tags_table', 36);
INSERT INTO `migrations` VALUES (82, '2020_11_06_184916_create_announcement_lastsfor_table', 39);
INSERT INTO `migrations` VALUES (84, '2020_11_06_190033_create_announcement_tags_table', 40);
INSERT INTO `migrations` VALUES (85, '2020_11_06_190152_create_announcement_announcements_match_tags_table', 41);
INSERT INTO `migrations` VALUES (90, '2020_11_06_214617_create_languages_table', 44);
INSERT INTO `migrations` VALUES (98, '2020_11_07_020717_create_task_tasks_match_labels_table', 49);
INSERT INTO `migrations` VALUES (100, '2020_11_07_092738_create_activities_table', 51);
INSERT INTO `migrations` VALUES (106, '2020_11_08_032122_create_project_projects_match_tasklists_table', 55);
INSERT INTO `migrations` VALUES (108, '2020_11_07_014226_create_tasklist_subscribers_table', 56);
INSERT INTO `migrations` VALUES (119, '2020_11_04_083530_create_projects_table', 62);
INSERT INTO `migrations` VALUES (120, '2020_11_04_181911_create_project_assignees_table', 63);
INSERT INTO `migrations` VALUES (121, '2020_11_13_155712_create_project_templates_table', 64);
INSERT INTO `migrations` VALUES (122, '2020_11_13_161855_create_project_template_assignees_table', 65);
INSERT INTO `migrations` VALUES (123, '2020_11_06_190817_create_timezones_table', 66);
INSERT INTO `migrations` VALUES (131, '2020_11_06_121425_create_tasklist_stages_table', 71);
INSERT INTO `migrations` VALUES (133, '2020_11_07_013235_create_tasklists_table', 73);
INSERT INTO `migrations` VALUES (134, '2020_11_15_183256_create_labels_table', 74);
INSERT INTO `migrations` VALUES (135, '2020_11_15_183612_create_project_projects_match_labels_table', 75);
INSERT INTO `migrations` VALUES (138, '2020_11_06_185619_create_announcements_table', 78);
INSERT INTO `migrations` VALUES (139, '2020_11_07_025034_create_tasks_table', 79);
INSERT INTO `migrations` VALUES (140, '2020_11_08_042114_create_task_assignees_table', 80);
INSERT INTO `migrations` VALUES (142, '2020_11_16_144950_create_timesheet_subscribers_table', 81);
INSERT INTO `migrations` VALUES (145, '2020_11_06_190522_create_milestones_table', 84);
INSERT INTO `migrations` VALUES (146, '2020_11_17_005723_create_events_table', 85);
INSERT INTO `migrations` VALUES (147, '2020_11_17_010058_create_event_attendees_table', 86);
INSERT INTO `migrations` VALUES (149, '2020_11_17_010517_create_reminders_table', 87);
INSERT INTO `migrations` VALUES (150, '2020_11_17_010848_create_milestone_assignees_table', 87);
INSERT INTO `migrations` VALUES (151, '2020_11_18_182746_create_time_statuses_table', 88);
INSERT INTO `migrations` VALUES (155, '2020_11_16_145140_create_times_table', 90);
INSERT INTO `migrations` VALUES (157, '2020_11_16_144239_create_timesheets_table', 91);
INSERT INTO `migrations` VALUES (158, '2020_10_27_210512_create_user_preferences_table', 92);
INSERT INTO `migrations` VALUES (162, '2020_11_23_014031_create_user_groups_table', 94);
INSERT INTO `migrations` VALUES (164, '2020_11_23_014507_create_user_project_categories_table', 94);
INSERT INTO `migrations` VALUES (165, '2020_11_23_014525_create_user_project_statuses_table', 94);
INSERT INTO `migrations` VALUES (166, '2020_11_23_014546_create_user_project_access_roles_table', 94);
INSERT INTO `migrations` VALUES (167, '2020_10_30_103408_create_users_table', 95);
INSERT INTO `migrations` VALUES (169, '2020_11_23_014154_create_group_assignees_table', 96);
INSERT INTO `migrations` VALUES (173, '2020_11_23_004858_create_people_table', 97);
INSERT INTO `migrations` VALUES (174, '2020_11_26_053215_add_is_template_to_projects_table', 98);
INSERT INTO `migrations` VALUES (176, '2020_11_26_054211_delete_project_template_assignees_table', 98);
INSERT INTO `migrations` VALUES (177, '2020_11_26_053941_delete_project_templates_table', 99);
INSERT INTO `migrations` VALUES (178, '2020_11_26_070657_rename_project_assignees_table', 100);
INSERT INTO `migrations` VALUES (179, '2020_11_26_071841_rename_project_projects_match_tasklists_table', 101);
INSERT INTO `migrations` VALUES (180, '2020_11_26_071928_rename_project_projects_match_labels_table', 102);
INSERT INTO `migrations` VALUES (181, '2020_11_26_072045_reorder_projects_match_assignees_table', 103);
INSERT INTO `migrations` VALUES (182, '2020_11_26_080921_rename_task_assignees_table', 104);
INSERT INTO `migrations` VALUES (183, '2020_11_26_081048_reorder_tasks_match_assignees_table', 105);
INSERT INTO `migrations` VALUES (184, '2020_11_26_081214_rename_task_tasks_match_labels_table', 106);
INSERT INTO `migrations` VALUES (185, '2020_11_26_081326_rename_tasklist_tasklists_match_tags_table', 107);
INSERT INTO `migrations` VALUES (186, '2020_11_26_121725_rename_timesheet_subscribers_table', 108);
INSERT INTO `migrations` VALUES (187, '2020_11_26_121825_reorder_timesheets_match_subscribers_table', 108);
INSERT INTO `migrations` VALUES (188, '2020_11_26_122040_rename_milestone_assignees_table', 109);
INSERT INTO `migrations` VALUES (189, '2020_11_26_122135_reorder_milestones_match_assignees_table', 109);
INSERT INTO `migrations` VALUES (190, '2020_11_26_122345_rename_group_assignees_table', 110);
INSERT INTO `migrations` VALUES (191, '2020_11_26_122422_reorder_groups_match_assignees_table', 110);
INSERT INTO `migrations` VALUES (192, '2020_11_26_122620_rename_user_groups_table', 111);
INSERT INTO `migrations` VALUES (193, '2020_11_26_122731_rename_event_attendees_table', 112);
INSERT INTO `migrations` VALUES (194, '2020_11_26_122820_reorder_events_match_attendees_table', 112);
INSERT INTO `migrations` VALUES (195, '2020_11_26_123101_rename_announcement_announcements_match_tags_table', 113);
INSERT INTO `migrations` VALUES (196, '2020_11_27_023657_rename_tasklist_workflows_table', 114);
INSERT INTO `migrations` VALUES (197, '2020_11_27_024538_rename_tasklist_stages_table', 115);
INSERT INTO `migrations` VALUES (198, '2020_11_27_024729_add_workflow_id_to_user_tasklist_default_stages_table', 116);
INSERT INTO `migrations` VALUES (199, '2020_11_27_025420_create_user_project_default_categories_table', 117);
INSERT INTO `migrations` VALUES (200, '2020_11_27_025733_create_user_project_default_statuses_table', 118);
INSERT INTO `migrations` VALUES (201, '2020_11_27_030623_rename_some_default_tables', 119);
INSERT INTO `migrations` VALUES (202, '2020_11_27_031113_rename_project_colors_table', 120);
INSERT INTO `migrations` VALUES (203, '2020_11_27_031419_rename_tasklist_tags_table', 121);
INSERT INTO `migrations` VALUES (204, '2020_11_27_054601_create_user_default_project_access_roles_table', 122);
INSERT INTO `migrations` VALUES (205, '2020_11_27_055141_create_user_tasklist_workflows_table', 123);
INSERT INTO `migrations` VALUES (206, '2020_11_27_055345_create_user_tasklist_stages_table', 124);
INSERT INTO `migrations` VALUES (207, '2020_11_28_062232_add_hours_minutes_to_tasks_table', 125);
INSERT INTO `migrations` VALUES (208, '2020_11_28_062642_reorder_tasks_table', 126);
INSERT INTO `migrations` VALUES (209, '2020_11_28_083105_rename_user_default_tasklist_stages_table', 127);
INSERT INTO `migrations` VALUES (210, '2020_11_28_083611_rename_user_tasklist_stages_table', 128);
INSERT INTO `migrations` VALUES (211, '2020_11_28_084148_rename_column_tasklist_stage_id_to_tasks_table', 129);
INSERT INTO `migrations` VALUES (213, '2020_11_28_102356_rename_user_default_tasklist_workflows_table', 130);
INSERT INTO `migrations` VALUES (214, '2020_11_28_102235_rename_user_tasklist_workflows_table', 131);
INSERT INTO `migrations` VALUES (216, '2020_11_28_131009_create_subtasks_table', 132);
INSERT INTO `migrations` VALUES (217, '2020_11_28_131951_create_subtasks_match_assignees_table', 133);
INSERT INTO `migrations` VALUES (218, '2020_11_28_132636_create_subtasks_match_labels_table', 134);
INSERT INTO `migrations` VALUES (221, '2020_11_29_150028_add_progress_id_to_tasks_table', 135);
INSERT INTO `migrations` VALUES (222, '2020_11_29_150117_reorder_tasks_table_progress_id', 136);
INSERT INTO `migrations` VALUES (223, '2020_11_29_150356_create_system_const_task_progresses_table', 137);
INSERT INTO `migrations` VALUES (224, '2020_11_30_002925_rename_labels_table', 138);
INSERT INTO `migrations` VALUES (225, '2020_11_30_003413_create_user_task_labels_table', 139);

-- ----------------------------
-- Table structure for milestones
-- ----------------------------
DROP TABLE IF EXISTS `milestones`;
CREATE TABLE `milestones`  (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `desc` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL,
  `date` date NULL DEFAULT NULL,
  `creator_id` int(10) UNSIGNED NOT NULL,
  `project_id` int(10) UNSIGNED NOT NULL,
  `tasklist_id` int(10) UNSIGNED NOT NULL,
  `timezone_id` int(10) UNSIGNED NOT NULL,
  `reminder_id` int(10) UNSIGNED NULL DEFAULT NULL,
  `mark_private` tinyint(1) NOT NULL DEFAULT 0,
  `isCompleted` tinyint(1) NOT NULL DEFAULT 0,
  `created_at` timestamp(0) NULL DEFAULT NULL,
  `updated_at` timestamp(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 2 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for milestones_match_assignees
-- ----------------------------
DROP TABLE IF EXISTS `milestones_match_assignees`;
CREATE TABLE `milestones_match_assignees`  (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `milestone_id` int(10) UNSIGNED NOT NULL,
  `assignee_id` int(10) NULL DEFAULT NULL,
  `created_at` timestamp(0) NULL DEFAULT NULL,
  `updated_at` timestamp(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for oauth_access_tokens
-- ----------------------------
DROP TABLE IF EXISTS `oauth_access_tokens`;
CREATE TABLE `oauth_access_tokens`  (
  `id` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` bigint(20) UNSIGNED NULL DEFAULT NULL,
  `client_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `scopes` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL,
  `revoked` tinyint(1) NOT NULL,
  `created_at` timestamp(0) NULL DEFAULT NULL,
  `updated_at` timestamp(0) NULL DEFAULT NULL,
  `expires_at` datetime(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `oauth_access_tokens_user_id_index`(`user_id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of oauth_access_tokens
-- ----------------------------
INSERT INTO `oauth_access_tokens` VALUES ('000b75e34571a70bc910a1fb7a00c43f25f88c5880d4625a38d239d2a99a332bd200f3ba68d0c250', 1, 1, 'Laravel Password Grant Client', '[]', 0, '2020-11-03 01:19:27', '2020-11-03 01:19:27', '2021-11-03 01:19:27');
INSERT INTO `oauth_access_tokens` VALUES ('0053e18e53fba4b1ed728603c967b7abd9967aa491a444ea22c6ecf8d194ba11949756a3610a3e17', 4, 5, 'Laravel Password Grant Client', '[]', 0, '2020-11-23 10:18:48', '2020-11-23 10:18:48', '2021-11-23 10:18:48');
INSERT INTO `oauth_access_tokens` VALUES ('017a50168ebf9753849a37da27853b20442e27629f5b3da35bd76b4b1775a83e2c8061a2d6dd6d69', 1, 5, 'Laravel Password Grant Client', '[]', 0, '2020-11-16 17:30:39', '2020-11-16 17:30:39', '2021-11-16 17:30:39');
INSERT INTO `oauth_access_tokens` VALUES ('01dc1a2f087692ad09f04cb4182dd234df7327ba883db69d5cf3e463712bbb44cb7d58163889ee18', 1, 5, 'Laravel Password Grant Client', '[]', 0, '2020-11-09 12:30:20', '2020-11-09 12:30:20', '2021-11-09 12:30:20');
INSERT INTO `oauth_access_tokens` VALUES ('03bedc143f274f9068c312de4fb695a55c5eb3ba3a480aa3fe5af9019e13521d45f4f0a8256ae081', 1, 5, 'Laravel Password Grant Client', '[]', 0, '2020-11-16 17:31:58', '2020-11-16 17:31:58', '2021-11-16 17:31:58');
INSERT INTO `oauth_access_tokens` VALUES ('052e8a0e4a8059984f26aa48b68ac27c9f216a30b4ce9fc796fda2e7b06b63e6fd2b96baced29e91', 1, 5, 'Laravel Password Grant Client', '[]', 0, '2020-11-16 17:31:59', '2020-11-16 17:31:59', '2021-11-16 17:31:59');
INSERT INTO `oauth_access_tokens` VALUES ('05f94ad1f0ee84e4745e55568d002a8691bf2e32fa7094165f24eb5836f6828b61e1b8004187f1b7', 1, 5, 'Laravel Password Grant Client', '[]', 0, '2020-11-23 11:41:52', '2020-11-23 11:41:52', '2021-11-23 11:41:52');
INSERT INTO `oauth_access_tokens` VALUES ('09cd62e7e717b1f9e468803ddef39a1eb1c155b87df62f9982639e0c00d70ddd7d150e0dfdeb2f49', 1, 5, 'Laravel Password Grant Client', '[]', 0, '2020-11-05 13:45:08', '2020-11-05 13:45:08', '2021-11-05 13:45:08');
INSERT INTO `oauth_access_tokens` VALUES ('09e92d9319cbe0bbef73808107e656b45cfa88f5676c6f2dc89f5bc71297b04404eac42766df3642', 1, 5, 'Laravel Password Grant Client', '[]', 0, '2020-11-16 17:30:48', '2020-11-16 17:30:48', '2021-11-16 17:30:48');
INSERT INTO `oauth_access_tokens` VALUES ('0a062c396638fdcae7b4d8bc19042f66e1ef860b9b248cc691494bf2c04474efb3fa2d32219c0ff2', 1, 1, 'Laravel Password Grant Client', '[]', 0, '2020-11-03 01:01:09', '2020-11-03 01:01:09', '2021-11-03 01:01:09');
INSERT INTO `oauth_access_tokens` VALUES ('0a786b4832b0fbb7dea72d295e2b7f4e6868b7a2e03f9c2939f1c280aefc3b1e2c6635ce12fccf23', 1, 5, 'Laravel Password Grant Client', '[]', 0, '2020-11-16 17:31:56', '2020-11-16 17:31:56', '2021-11-16 17:31:56');
INSERT INTO `oauth_access_tokens` VALUES ('0bf6d54e60785b8dbd41f0211a09613aa496073b6eee507eadc68473e169be8474937b52cc88069a', 1, 5, 'Laravel Password Grant Client', '[]', 0, '2020-11-23 09:34:22', '2020-11-23 09:34:22', '2021-11-23 09:34:22');
INSERT INTO `oauth_access_tokens` VALUES ('0c19ef0cd3cbfb00fd65432d4336fa970e8ef1f19b76c09f3f087348792ecb4cc1f61eab5f0062a6', 8, 1, 'Laravel Password Grant Client', '[]', 0, '2020-10-30 09:24:41', '2020-10-30 09:24:41', '2021-10-30 09:24:41');
INSERT INTO `oauth_access_tokens` VALUES ('0c420928aef444c46d06b8cf3b4d6424cdac0056410d0f25bc59e2e7a8c3637a64c197f750d587db', 3, 1, 'Laravel Password Grant Client', '[]', 0, '2020-10-30 10:40:26', '2020-10-30 10:40:26', '2021-10-30 10:40:26');
INSERT INTO `oauth_access_tokens` VALUES ('0d93dc6c7f992332c7b57a0f712cd75401169989ae23c93a11bb47ef57a862faa99035aa61fa4e1c', 1, 5, 'Laravel Password Grant Client', '[]', 0, '2020-11-23 09:38:00', '2020-11-23 09:38:00', '2021-11-23 09:38:00');
INSERT INTO `oauth_access_tokens` VALUES ('0ed1a24ff3871b0581625fad8a4bd02cf66055e9cc273059a17a5739193a6d7832f158acdd5e3faf', 4, 5, 'Laravel Password Grant Client', '[]', 0, '2020-11-23 04:48:25', '2020-11-23 04:48:25', '2021-11-23 04:48:25');
INSERT INTO `oauth_access_tokens` VALUES ('0f92db34710c8c24cc1e044f771ad6958133e03b52a1e431096a9207ede8ab4aa10827b5f0d10cb1', 1, 5, 'Laravel Password Grant Client', '[]', 0, '2020-11-11 06:21:14', '2020-11-11 06:21:14', '2021-11-11 06:21:14');
INSERT INTO `oauth_access_tokens` VALUES ('10cfb4a7a7ffb11d90e1942eca10dcee04349131fed0f147e7d2e2d50d880c710bf4c5ee50e69920', 19, 5, 'Laravel Password Grant Client', '[]', 0, '2020-11-23 14:47:47', '2020-11-23 14:47:47', '2021-11-23 14:47:47');
INSERT INTO `oauth_access_tokens` VALUES ('11cd488b0df74fc112d81179a4d3a58a35cb28b9d7e61cac0b1585e36370d05597a7d1b0724f4140', 25, 5, 'Laravel Password Grant Client', '[]', 0, '2020-11-25 10:02:22', '2020-11-25 10:02:22', '2021-11-25 10:02:22');
INSERT INTO `oauth_access_tokens` VALUES ('127c6c1aca1f18ac4da6fb941866392c5fd397f30d3dc532634728f13df21806b7b2aa3e3cdb7cf0', 1, 5, 'Laravel Password Grant Client', '[]', 0, '2020-11-05 14:17:13', '2020-11-05 14:17:13', '2021-11-05 14:17:13');
INSERT INTO `oauth_access_tokens` VALUES ('18e60ecd21b81ffd6d3d1479500e8ef88617caa09330a0a168e2b1eaabccf676315fdaf7599fabee', 1, 5, 'Laravel Password Grant Client', '[]', 0, '2020-11-23 09:58:43', '2020-11-23 09:58:43', '2021-11-23 09:58:43');
INSERT INTO `oauth_access_tokens` VALUES ('1948a6db3229e8aed97503b311d68ba0ec3d3affe20d4b3c054acedf340018524b3fe2a26458c2de', 39, 5, 'Laravel Password Grant Client', '[]', 0, '2020-11-27 12:23:11', '2020-11-27 12:23:11', '2021-11-27 12:23:11');
INSERT INTO `oauth_access_tokens` VALUES ('1a8462080e19203ffd5060773f7f141f24b1f1c05a6acb14ca29666f8fd166e22c9e48695361e9ea', 1, 5, 'Laravel Password Grant Client', '[]', 0, '2020-11-16 17:31:54', '2020-11-16 17:31:54', '2021-11-16 17:31:54');
INSERT INTO `oauth_access_tokens` VALUES ('1b47b154153c82ded99f99ec0fae318b042150040eb03ce43edb6638f45d69dc8156ef70150c0152', 4, 5, 'Laravel Password Grant Client', '[]', 0, '2020-11-23 03:45:35', '2020-11-23 03:45:35', '2021-11-23 03:45:35');
INSERT INTO `oauth_access_tokens` VALUES ('1ddbb2696b834e9e06053c67a3472161e388dffb33a716b1dcb4b3fcaf22d3b7dcc5e735b5cc24f1', 1, 5, 'Laravel Password Grant Client', '[]', 0, '2020-11-05 07:22:57', '2020-11-05 07:22:57', '2021-11-05 07:22:57');
INSERT INTO `oauth_access_tokens` VALUES ('1f0d271b6b78038d307057a1ed9ad49e9f010f7fcf45fdcbf8589cb058569e0019ba579bd2c8b424', 1, 5, 'Laravel Password Grant Client', '[]', 0, '2020-11-16 17:31:21', '2020-11-16 17:31:21', '2021-11-16 17:31:21');
INSERT INTO `oauth_access_tokens` VALUES ('206f319fb8ac95ff4bd2c376bdfbca76f23a697968ce11ad8396ad580123497bbba0902b93e4f279', 1, 5, 'Laravel Password Grant Client', '[]', 0, '2020-11-16 17:31:55', '2020-11-16 17:31:55', '2021-11-16 17:31:55');
INSERT INTO `oauth_access_tokens` VALUES ('211e10283169ee6d5a553e837bfec84df0dedfd407fa2750c4f82616dd748b614e1a212ee7239069', 1, 5, 'Laravel Password Grant Client', '[]', 0, '2020-11-16 17:31:52', '2020-11-16 17:31:52', '2021-11-16 17:31:52');
INSERT INTO `oauth_access_tokens` VALUES ('24c57d31a759bd8aa477d3673818831a932411643ca0c72cdd27fe49b08c784a984efdb702229b35', 19, 5, 'Laravel Password Grant Client', '[]', 0, '2020-11-23 12:02:54', '2020-11-23 12:02:54', '2021-11-23 12:02:54');
INSERT INTO `oauth_access_tokens` VALUES ('2501446f7ea6c8ce714f00143c6f408a80d60cce4fe79f1ea150bcc6970e6bbad899f5487acef05c', 1, 5, 'Laravel Password Grant Client', '[]', 0, '2020-11-16 17:32:00', '2020-11-16 17:32:00', '2021-11-16 17:32:00');
INSERT INTO `oauth_access_tokens` VALUES ('28c298583184ee359550fad66638d268c9ada9f91c9fbef3b4969d48762b81ca2e04e7b88ff55464', 38, 5, 'Laravel Password Grant Client', '[]', 0, '2020-11-27 10:49:52', '2020-11-27 10:49:52', '2021-11-27 10:49:52');
INSERT INTO `oauth_access_tokens` VALUES ('295bcc114616c6a171abea9e7b624248cc523a67595ed0f3c590f7ffe4aa020e8634967abd59020f', 1, 5, 'Laravel Password Grant Client', '[]', 0, '2020-11-16 17:31:54', '2020-11-16 17:31:54', '2021-11-16 17:31:54');
INSERT INTO `oauth_access_tokens` VALUES ('29bade03f82ba1259a14e4e1ce102677a4843c7a55a3de7d271ac3bd396ba7281e8eca54e57beee4', 2, 1, 'Laravel Password Grant Client', '[]', 0, '2020-10-30 14:51:15', '2020-10-30 14:51:15', '2021-10-30 14:51:15');
INSERT INTO `oauth_access_tokens` VALUES ('2a292656cedd4852261c4726fab217a4f5dcbe2c00589ec88bc6d20c8a096ee2521b0ad410fe82fe', 1, 5, 'Laravel Password Grant Client', '[]', 0, '2020-11-10 01:32:28', '2020-11-10 01:32:28', '2021-11-10 01:32:28');
INSERT INTO `oauth_access_tokens` VALUES ('2ada4d8b8b49c14584546431a513cc4bd2a53309d804686a75b58b1705dd573e7fa5646f49e07a77', 1, 5, 'Laravel Password Grant Client', '[]', 0, '2020-11-16 17:31:59', '2020-11-16 17:31:59', '2021-11-16 17:31:59');
INSERT INTO `oauth_access_tokens` VALUES ('2b498799e41458b6feda10606e779163dd9d23ffa497d2931b0d0afcd680146642caae428ed0074b', 1, 5, 'Laravel Password Grant Client', '[]', 0, '2020-11-16 17:31:58', '2020-11-16 17:31:58', '2021-11-16 17:31:58');
INSERT INTO `oauth_access_tokens` VALUES ('2cc94ff09b62f493c6de98dfae1b5adb8fb26983934db485d818340cba9ab16d2909f892e7ed49bd', 1, 5, 'Laravel Password Grant Client', '[]', 0, '2020-11-10 01:32:12', '2020-11-10 01:32:12', '2021-11-10 01:32:12');
INSERT INTO `oauth_access_tokens` VALUES ('2ccca65e2d27a0f1e628f06e091f87f9abe1bb7fd8b842c3ba00f14dbab11a6c80a9fa7bdae6bd88', 1, 1, 'Laravel Password Grant Client', '[]', 0, '2020-11-03 01:18:50', '2020-11-03 01:18:50', '2021-11-03 01:18:50');
INSERT INTO `oauth_access_tokens` VALUES ('2d7eef581ef5892aaa69d04f7693a4d737223124904af8969a592edc865055603844b0de9935e425', 23, 5, 'Laravel Password Grant Client', '[]', 0, '2020-11-23 14:48:50', '2020-11-23 14:48:50', '2021-11-23 14:48:50');
INSERT INTO `oauth_access_tokens` VALUES ('2e0f1bee288ab2725cd7391bfe6c262a508f8d8f9c3b92337a4fcb432ac6a29c5949c0f2dee146ba', 1, 5, 'Laravel Password Grant Client', '[]', 0, '2020-11-10 01:40:06', '2020-11-10 01:40:06', '2021-11-10 01:40:06');
INSERT INTO `oauth_access_tokens` VALUES ('30b8b470d8ca14421cc3091c36e6a5ce21ce4f0d56ac7085c70c5974420fff7ea6de92e13bbde5ac', 6, 1, 'Laravel Password Grant Client', '[]', 0, '2020-10-30 09:21:18', '2020-10-30 09:21:18', '2021-10-30 09:21:18');
INSERT INTO `oauth_access_tokens` VALUES ('32c4af41d16c801cf0ce0c5b2ee641ce99b41b83cceb22fa30e981c8cd6eca3ea9bbf33c73289195', 1, 5, 'Laravel Password Grant Client', '[]', 0, '2020-11-13 05:00:54', '2020-11-13 05:00:54', '2021-11-13 05:00:54');
INSERT INTO `oauth_access_tokens` VALUES ('3411301005047afd9cd14819d705a5ba8d21c9bd85d3c777031554f398c5e14dd8852b327bfb4021', 1, 5, 'Laravel Password Grant Client', '[]', 0, '2020-11-16 17:31:22', '2020-11-16 17:31:22', '2021-11-16 17:31:22');
INSERT INTO `oauth_access_tokens` VALUES ('3493e9e5ed8305155004b461bc61965393edb328d4618c594d2947c4e222d067f3d10fe76430ab13', 1, 5, 'Laravel Password Grant Client', '[]', 0, '2020-11-05 13:44:36', '2020-11-05 13:44:36', '2021-11-05 13:44:36');
INSERT INTO `oauth_access_tokens` VALUES ('3842f03f5970c29c0c7df532f087afb129ac20d8d7b33edfdab8f581860af73cc7bd5a3eb9cedf40', 19, 5, 'Laravel Password Grant Client', '[]', 0, '2020-11-26 15:08:38', '2020-11-26 15:08:38', '2021-11-26 15:08:38');
INSERT INTO `oauth_access_tokens` VALUES ('39fc497714f35dfb7e9498d6c08d9c13c7ea6162c2fe302f955e5b71dc3d11c2c3edb7bf2ff4b130', 19, 5, 'Laravel Password Grant Client', '[]', 0, '2020-11-23 11:47:08', '2020-11-23 11:47:08', '2021-11-23 11:47:08');
INSERT INTO `oauth_access_tokens` VALUES ('3aad46dcd49b0c193cae7aef2229e622a4db2fd81406904105702b23c9d3b9663e5507a028fd8d94', 1, 5, 'Laravel Password Grant Client', '[]', 0, '2020-11-09 20:39:25', '2020-11-09 20:39:25', '2021-11-09 20:39:25');
INSERT INTO `oauth_access_tokens` VALUES ('3b7c2fb1e00592ec4dcc6702e076ef55a3fd3d1655c14e716ab05399235cef0057d0748a11a8176e', 3, 1, 'Laravel Password Grant Client', '[]', 0, '2020-10-30 15:11:57', '2020-10-30 15:11:57', '2021-10-30 15:11:57');
INSERT INTO `oauth_access_tokens` VALUES ('3c29ecb3b94fe1d9681a2f905deb890b9eb8739984191794025f885fb91a0ed5fb33e503a9b3e70a', 1, 5, 'Laravel Password Grant Client', '[]', 0, '2020-11-16 17:30:37', '2020-11-16 17:30:37', '2021-11-16 17:30:37');
INSERT INTO `oauth_access_tokens` VALUES ('3c90137c144d22304a2007e97eccc793c924092e470e746e9856d2aab3e8ea016acf5b936cbc2f05', 19, 5, 'Laravel Password Grant Client', '[]', 0, '2020-11-23 11:46:09', '2020-11-23 11:46:09', '2021-11-23 11:46:09');
INSERT INTO `oauth_access_tokens` VALUES ('3d40a7c8dfc82cf94667300c84cba0dfbedce8d83043b6fbe71b30c6d8ab24121c72847777a6a6fa', 1, 5, 'Laravel Password Grant Client', '[]', 0, '2020-11-16 17:30:30', '2020-11-16 17:30:30', '2021-11-16 17:30:30');
INSERT INTO `oauth_access_tokens` VALUES ('3dad999d8447c85a7207aca6dd410536291ab84824c5736278a9d0662817f0cea1a94e80eeb6a0e3', 19, 5, 'Laravel Password Grant Client', '[]', 0, '2020-11-23 14:35:41', '2020-11-23 14:35:41', '2021-11-23 14:35:41');
INSERT INTO `oauth_access_tokens` VALUES ('3f54a508d70c88fd5894585a0d24a208bb1429ac6f4b970eb59a557a81d1391b9ac93e2cb92884d8', 19, 5, 'Laravel Password Grant Client', '[]', 0, '2020-11-23 12:14:27', '2020-11-23 12:14:27', '2021-11-23 12:14:27');
INSERT INTO `oauth_access_tokens` VALUES ('3f5642279b4b871964fc70c4d100a0096bc3bd793e4d9d384d94f35901c2ab39692772802c931507', 1, 5, 'Laravel Password Grant Client', '[]', 0, '2020-11-16 17:31:18', '2020-11-16 17:31:18', '2021-11-16 17:31:18');
INSERT INTO `oauth_access_tokens` VALUES ('40b7b4002517d850e210223667855f10cc85f47dbf4951b3d47f30c0dba9588fea418f23c33eb6b9', 1, 1, 'Laravel Password Grant Client', '[]', 0, '2020-10-30 15:30:55', '2020-10-30 15:30:55', '2021-10-30 15:30:55');
INSERT INTO `oauth_access_tokens` VALUES ('436d84c519e7a86ecdba876f80ef8fb880de8b10798560d71b5ed69388f9fd20740551085cbd47a8', 1, 5, 'Laravel Password Grant Client', '[]', 0, '2020-11-16 17:32:00', '2020-11-16 17:32:00', '2021-11-16 17:32:00');
INSERT INTO `oauth_access_tokens` VALUES ('4654e33cd20a6599cfde0fecb839ab247e959f39ebd6e710d2fa07a41a9af2e6f917fdd783b5bfcb', 19, 5, 'Laravel Password Grant Client', '[]', 0, '2020-11-25 03:53:48', '2020-11-25 03:53:48', '2021-11-25 03:53:48');
INSERT INTO `oauth_access_tokens` VALUES ('4709cb0eaff211800916caa813f2d759b7e68980981725323ae7d663e5c965407774745846fa2bc1', 1, 5, 'Laravel Password Grant Client', '[]', 0, '2020-11-16 17:30:37', '2020-11-16 17:30:37', '2021-11-16 17:30:37');
INSERT INTO `oauth_access_tokens` VALUES ('47a4b8e245858dcf0be3bdd97a148b58d243d4d97bbcad94a81756d0e9976bd35d15b9c1a63fbffe', 19, 5, 'Laravel Password Grant Client', '[]', 0, '2020-11-23 14:34:15', '2020-11-23 14:34:15', '2021-11-23 14:34:15');
INSERT INTO `oauth_access_tokens` VALUES ('4991a30c50a26f0935e2076b0fd41971ac3bed7f57e90640b4e5a0e6db2427d2cd6121f222c6a00a', 23, 7, 'Laravel Password Grant Client', '[]', 0, '2020-11-29 14:05:01', '2020-11-29 14:05:01', '2021-11-29 14:05:01');
INSERT INTO `oauth_access_tokens` VALUES ('4ddec8411de18193bf962f6b9fe6c84af5062ceacad9be004c202fdf2d8f5fb903fd03b561c33cc0', 20, 5, 'Laravel Password Grant Client', '[]', 0, '2020-11-23 12:14:16', '2020-11-23 12:14:16', '2021-11-23 12:14:16');
INSERT INTO `oauth_access_tokens` VALUES ('4e48d0eae969538da01fed3e502f59751b1fc358127b4a4cfd8988760e1f1ed86750c62c7199c481', 33, 5, 'Laravel Password Grant Client', '[]', 0, '2020-11-26 13:04:11', '2020-11-26 13:04:11', '2021-11-26 13:04:11');
INSERT INTO `oauth_access_tokens` VALUES ('4ebec4909f6b44087c021fbb1977358dc45018fd5a7c63212d94a1ed38e8d140552bde90b482a60a', 1, 5, 'Laravel Password Grant Client', '[]', 0, '2020-11-05 13:42:28', '2020-11-05 13:42:28', '2021-11-05 13:42:28');
INSERT INTO `oauth_access_tokens` VALUES ('51cbe3a188024bbda55fcb594e25e1aba3d3472fd65e9c84b2a6f3b9283860805b3142456f36b844', 25, 5, 'Laravel Password Grant Client', '[]', 0, '2020-11-25 10:02:01', '2020-11-25 10:02:01', '2021-11-25 10:02:01');
INSERT INTO `oauth_access_tokens` VALUES ('537736d788879ca2f63c514659a87be8267730a7fba07ce263c5b48297f183c523eb939672374d3c', 19, 5, 'Laravel Password Grant Client', '[]', 0, '2020-11-25 04:08:35', '2020-11-25 04:08:35', '2021-11-25 04:08:35');
INSERT INTO `oauth_access_tokens` VALUES ('53bffa1322c5e1a53f260899ee7b26691a546a61c061a183a2303fdaf8989128ba26c5a2dea38ff6', 25, 5, 'Laravel Password Grant Client', '[]', 0, '2020-11-25 04:14:45', '2020-11-25 04:14:45', '2021-11-25 04:14:45');
INSERT INTO `oauth_access_tokens` VALUES ('54203b897e8c6d411e5ce934b4964dbd700923c38d907185732f4300750141bc2c42be21778e069c', 5, 1, 'Laravel Password Grant Client', '[]', 0, '2020-10-30 15:13:19', '2020-10-30 15:13:19', '2021-10-30 15:13:19');
INSERT INTO `oauth_access_tokens` VALUES ('5491f6e8cec3e97d6516dcfb089f40725d933e52c2c69af5356efa15c58c75c631a79d469fbdcd1f', 7, 1, 'Laravel Password Grant Client', '[]', 0, '2020-10-30 09:22:06', '2020-10-30 09:22:06', '2021-10-30 09:22:06');
INSERT INTO `oauth_access_tokens` VALUES ('5508e1ce7057406887c8432de547a95941d7307696aabd0fcc07fc9180cad82018249c0e8b5e9632', 19, 5, 'Laravel Password Grant Client', '[]', 0, '2020-11-25 04:03:13', '2020-11-25 04:03:13', '2021-11-25 04:03:13');
INSERT INTO `oauth_access_tokens` VALUES ('56f2caa8c4ca04f8abc6cfe5893c29f99b0b897bfad9d99339a388c1d48db7abd941785cd28d094a', 25, 5, 'Laravel Password Grant Client', '[]', 0, '2020-11-25 10:09:49', '2020-11-25 10:09:49', '2021-11-25 10:09:49');
INSERT INTO `oauth_access_tokens` VALUES ('585c8396949eb12b1b28cf7e23c7c45cda9ee831e2fe0fceab1b8e874d3deba6193faf4ed58128d1', 1, 5, 'Laravel Password Grant Client', '[]', 0, '2020-11-09 20:41:48', '2020-11-09 20:41:48', '2021-11-09 20:41:48');
INSERT INTO `oauth_access_tokens` VALUES ('5d9d95aebfb5518a7a71fc2f7d3d71464172d3a7557e4d67664475c55f8fa95c6f2b7ed6ff84104b', 25, 5, 'Laravel Password Grant Client', '[]', 0, '2020-11-25 04:10:31', '2020-11-25 04:10:31', '2021-11-25 04:10:31');
INSERT INTO `oauth_access_tokens` VALUES ('5e3e0f03d88727ce842acc5808e65dc08461dde76d21d3833a0c3a51c9466452da75469a27823743', 1, 5, 'Laravel Password Grant Client', '[]', 0, '2020-11-05 13:44:29', '2020-11-05 13:44:29', '2021-11-05 13:44:29');
INSERT INTO `oauth_access_tokens` VALUES ('5f1e25859fc3a07519dfe7c98aa5285cd99b95c93a08f81eb2899cc842fd617dcfda8c481b8f2637', 1, 5, 'Laravel Password Grant Client', '[]', 0, '2020-11-16 17:30:39', '2020-11-16 17:30:39', '2021-11-16 17:30:39');
INSERT INTO `oauth_access_tokens` VALUES ('5f439582cabb5f2ad2b28da3e41763a893fa37224c07b96504d54c79d5dff7e3e57874300b0f445a', 1, 1, 'Laravel Password Grant Client', '[]', 0, '2020-11-01 16:56:16', '2020-11-01 16:56:16', '2021-11-01 16:56:16');
INSERT INTO `oauth_access_tokens` VALUES ('5f7ba71d1920b35d634dc21e388c22d55ae2a4fe8e65ea43eb58de10942ec679945a2bdc8568ce28', 23, 5, 'Laravel Password Grant Client', '[]', 0, '2020-11-26 14:06:58', '2020-11-26 14:06:58', '2021-11-26 14:06:58');
INSERT INTO `oauth_access_tokens` VALUES ('6239cb18dc617cb83aa203c57cf859a35f6c5eb802cb58c146b2474018a8a0ddfb44b653fb21b97d', 1, 5, 'Laravel Password Grant Client', '[]', 0, '2020-11-10 01:32:16', '2020-11-10 01:32:16', '2021-11-10 01:32:16');
INSERT INTO `oauth_access_tokens` VALUES ('63553de0deb2c76ba925488bf37c0cd8f4a58239988c7ec9347b084e688e016ca1147d6929ce4bd1', 1, 5, 'Laravel Password Grant Client', '[]', 0, '2020-11-16 17:31:58', '2020-11-16 17:31:58', '2021-11-16 17:31:58');
INSERT INTO `oauth_access_tokens` VALUES ('64045e467e5b73d8586bce0943cca48f4bd5039a075fc2224e928df8ad663bc5969e4fb0e34c87d3', 1, 5, 'Laravel Password Grant Client', '[]', 0, '2020-11-16 17:31:22', '2020-11-16 17:31:22', '2021-11-16 17:31:22');
INSERT INTO `oauth_access_tokens` VALUES ('64b4b1ac89a170c7a15c5641d655068e0eba98808d8a6d48b1ef266a65f7f4ac296cc5d159bd54fb', 5, 1, 'Laravel Password Grant Client', '[]', 0, '2020-10-30 15:31:45', '2020-10-30 15:31:45', '2021-10-30 15:31:45');
INSERT INTO `oauth_access_tokens` VALUES ('64b93b5f96db2758214c07a1916ed32aa182229f6a7435f2ee65a33f3cddd79c05c1da5f01677086', 1, 5, 'Laravel Password Grant Client', '[]', 0, '2020-11-05 13:44:27', '2020-11-05 13:44:27', '2021-11-05 13:44:27');
INSERT INTO `oauth_access_tokens` VALUES ('658f3a5b2318cf13cfc250409eb6c2cac78fa46d055403ebd1e7ae61627d66eb358e5206730aeacb', 25, 5, 'Laravel Password Grant Client', '[]', 0, '2020-11-25 10:09:42', '2020-11-25 10:09:42', '2021-11-25 10:09:42');
INSERT INTO `oauth_access_tokens` VALUES ('6634fc1ebe559a9204a448f2d88cb9f8780d1d8cb67b7aa1c1dee27b57179f591691d5e3efff646f', 1, 5, 'Laravel Password Grant Client', '[]', 0, '2020-11-05 07:22:52', '2020-11-05 07:22:52', '2021-11-05 07:22:52');
INSERT INTO `oauth_access_tokens` VALUES ('663776c67b7066e54dd39e8ba9696a7a144584d943a8ca5a4efdbc2ac94d461070558631654fb126', 1, 5, 'Laravel Password Grant Client', '[]', 0, '2020-11-16 17:46:53', '2020-11-16 17:46:53', '2021-11-16 17:46:53');
INSERT INTO `oauth_access_tokens` VALUES ('6750cad3317453cc99ed4e031318421385c6841585988e696ec6fdf5d69bfa70bbf0540f29f11372', 1, 5, 'Laravel Password Grant Client', '[]', 0, '2020-11-05 13:44:28', '2020-11-05 13:44:28', '2021-11-05 13:44:28');
INSERT INTO `oauth_access_tokens` VALUES ('693b406b1124e084396f5b7dba4fb24f093fe42dd8def975fb0d03c0bd5eb0c1c668f0b294c52005', 19, 5, 'Laravel Password Grant Client', '[]', 0, '2020-11-23 14:49:19', '2020-11-23 14:49:19', '2021-11-23 14:49:19');
INSERT INTO `oauth_access_tokens` VALUES ('69433ced889e396ae26d032b51c53b16ac75c4e09484bda9179a705b29c3296a0f777d9eeccf2e34', 1, 5, 'Laravel Password Grant Client', '[]', 0, '2020-11-16 17:30:39', '2020-11-16 17:30:39', '2021-11-16 17:30:39');
INSERT INTO `oauth_access_tokens` VALUES ('6a795363ef942910565d8e6bbba726f175719951ff1d29c66e96e892531ea95dbd18318e3b0289a7', 1, 5, 'Laravel Password Grant Client', '[]', 0, '2020-11-05 07:22:55', '2020-11-05 07:22:55', '2021-11-05 07:22:55');
INSERT INTO `oauth_access_tokens` VALUES ('6b0bf7944b3d0560de94d727675e7b23d5be5d5e20d2a7d3093fd98d2cec6d294eb8a04814ce7f46', 1, 5, 'Laravel Password Grant Client', '[]', 0, '2020-11-09 12:28:35', '2020-11-09 12:28:35', '2021-11-09 12:28:35');
INSERT INTO `oauth_access_tokens` VALUES ('6bf78c8b43903ed6e69248315f1d24c540a91c129e57af7d5207fbe4eb9a36f73b93fc131bfea698', 1, 5, 'Laravel Password Grant Client', '[]', 0, '2020-11-16 17:30:38', '2020-11-16 17:30:38', '2021-11-16 17:30:38');
INSERT INTO `oauth_access_tokens` VALUES ('6cd9bf53dd1188c8f47f207fb4d837a3328916fe71ffa9325525a3e821b52a599e15cd5a9f4cfa4a', 27, 7, 'Laravel Password Grant Client', '[]', 0, '2020-11-29 14:02:12', '2020-11-29 14:02:12', '2021-11-29 14:02:12');
INSERT INTO `oauth_access_tokens` VALUES ('6d26baaa98d1d397f03b81d19cad3e28fcc1d6f6e371e1b949b0c525cbc14956b3e5972fc4e05a27', 1, 5, 'Laravel Password Grant Client', '[]', 0, '2020-11-16 17:31:21', '2020-11-16 17:31:21', '2021-11-16 17:31:21');
INSERT INTO `oauth_access_tokens` VALUES ('6d483208d2946ed1627f51fa95c3db507332ec0eefa2c701788a3d7c66b257c7733e037ff9a3b34e', 1, 5, 'Laravel Password Grant Client', '[]', 0, '2020-11-16 17:31:56', '2020-11-16 17:31:56', '2021-11-16 17:31:56');
INSERT INTO `oauth_access_tokens` VALUES ('6da3979d24ef1862c004303b0c63c02b49d7bffc3ad5a1e779e03575fb0af95c6f58056bb6e39eef', 1, 5, 'Laravel Password Grant Client', '[]', 0, '2020-11-16 17:31:58', '2020-11-16 17:31:58', '2021-11-16 17:31:58');
INSERT INTO `oauth_access_tokens` VALUES ('6e3d2e1c95d97f9f460a38033027afca31481aba7df4e8edafc748cc50c9fefc29ef38a8d869f5d0', 1, 1, 'Laravel Password Grant Client', '[]', 0, '2020-10-30 13:58:08', '2020-10-30 13:58:08', '2021-10-30 13:58:08');
INSERT INTO `oauth_access_tokens` VALUES ('6ebafa84e67c0a6de13c9a5fa56e69083774fc0c4dc7be7cac2d49934784141eca5df05319b50fc9', 3, 5, 'Laravel Password Grant Client', '[]', 0, '2020-11-23 03:14:21', '2020-11-23 03:14:21', '2021-11-23 03:14:21');
INSERT INTO `oauth_access_tokens` VALUES ('6ec6dccea17bb0403fe25abe3090e5445790182114f223831d19729d8685e7a45d571fa02864463a', 1, 5, 'Laravel Password Grant Client', '[]', 0, '2020-11-05 13:44:29', '2020-11-05 13:44:29', '2021-11-05 13:44:29');
INSERT INTO `oauth_access_tokens` VALUES ('6f04a166b02d6ceb7828b721356b49400cf0d5fc73a14df78a4aeae170a7f30e10e2940d6b826b8b', 1, 5, 'Laravel Password Grant Client', '[]', 0, '2020-11-16 17:30:38', '2020-11-16 17:30:38', '2021-11-16 17:30:38');
INSERT INTO `oauth_access_tokens` VALUES ('6f35dea34b33f58d9e045443b5c11146c4ed7b72bb216f75f0a9eb14a490e39688eb63e58c191e69', 1, 5, 'Laravel Password Grant Client', '[]', 0, '2020-11-16 17:46:32', '2020-11-16 17:46:32', '2021-11-16 17:46:32');
INSERT INTO `oauth_access_tokens` VALUES ('70d7ba074f67b9f9dce277565eea86df344aee3c7f2c1ccb5082331f2505cd5908699e8b91bd8dce', 1, 5, 'Laravel Password Grant Client', '[]', 0, '2020-11-05 07:22:55', '2020-11-05 07:22:55', '2021-11-05 07:22:55');
INSERT INTO `oauth_access_tokens` VALUES ('71a0b7771cb535e9339d97d42fb3efd1464a00e68dab8af928358dd4252bcccfe35629b66eee6b33', 27, 5, 'Laravel Password Grant Client', '[]', 0, '2020-11-25 10:21:51', '2020-11-25 10:21:51', '2021-11-25 10:21:51');
INSERT INTO `oauth_access_tokens` VALUES ('7226e1717d8e099cad69fd5eb86b8edb6d6ce79f3f25ef66c33161a0f740b3b1c462d9467ab19d18', 25, 5, 'Laravel Password Grant Client', '[]', 0, '2020-11-25 04:09:40', '2020-11-25 04:09:40', '2021-11-25 04:09:40');
INSERT INTO `oauth_access_tokens` VALUES ('74b5d7b568ec198140e5d95085a160b4a91d35e64de0a4297dc3fd299030f7845e54642472559b38', 19, 5, 'Laravel Password Grant Client', '[]', 0, '2020-11-23 14:31:08', '2020-11-23 14:31:08', '2021-11-23 14:31:08');
INSERT INTO `oauth_access_tokens` VALUES ('7645cd98b8225dcccace7ef0300eb249a1312b967d15f3220d09d8376a4ea9d1ac1a5ea40256e523', 1, 5, 'Laravel Password Grant Client', '[]', 0, '2020-11-13 05:00:58', '2020-11-13 05:00:58', '2021-11-13 05:00:58');
INSERT INTO `oauth_access_tokens` VALUES ('7796517e993e5a4529ca021e74af29e40fe34fe9a076c9f1df7fdf05a5062debfef24a99d8d17000', 2, 5, 'Laravel Password Grant Client', '[]', 0, '2020-11-23 03:12:06', '2020-11-23 03:12:06', '2021-11-23 03:12:06');
INSERT INTO `oauth_access_tokens` VALUES ('78359658c5f1138edc30dc9cae09a6cfc51bbba3f6b65b7c40f9fc909584706e306d0e69c32a5f4c', 1, 5, 'Laravel Password Grant Client', '[]', 0, '2020-11-23 10:52:01', '2020-11-23 10:52:01', '2021-11-23 10:52:01');
INSERT INTO `oauth_access_tokens` VALUES ('79350e0adbdead85a21ad8618d516c75c36e6967df8260ee43b99275acb5cbcefbb86e7eba60de73', 1, 5, 'Laravel Password Grant Client', '[]', 0, '2020-11-16 17:37:07', '2020-11-16 17:37:07', '2021-11-16 17:37:07');
INSERT INTO `oauth_access_tokens` VALUES ('7937871332dc79418789eabff9be28acd643d5bfaafdd87d3979a5066102b99748d73736c06356b7', 1, 5, 'Laravel Password Grant Client', '[]', 0, '2020-11-05 13:59:26', '2020-11-05 13:59:26', '2021-11-05 13:59:26');
INSERT INTO `oauth_access_tokens` VALUES ('7938aafdb2b4cd06475575589bf5b76ed38fd597bde2624c8ff7fe74fee3d11020660265787b49f6', 1, 5, 'Laravel Password Grant Client', '[]', 0, '2020-11-05 13:44:22', '2020-11-05 13:44:22', '2021-11-05 13:44:22');
INSERT INTO `oauth_access_tokens` VALUES ('79fb07298ecb06660b343ba192f0d58cb7abecbea37b1bb9ac678a0f4e8ae0a5d8d8478ceaa5d75f', 1, 5, 'Laravel Password Grant Client', '[]', 0, '2020-11-05 13:44:28', '2020-11-05 13:44:28', '2021-11-05 13:44:28');
INSERT INTO `oauth_access_tokens` VALUES ('7a998345a58213fd114393ac46747ccbd92a883d161c06be9c1d83c6e68d3db9a75a81e7be187eb2', 1, 5, 'Laravel Password Grant Client', '[]', 0, '2020-11-10 12:13:57', '2020-11-10 12:13:57', '2021-11-10 12:13:57');
INSERT INTO `oauth_access_tokens` VALUES ('7abede3126ba0b7bc8241b070b6d879ed4e24c39af9f6eccdb6bf49ce4313d63bb6545cab99f3261', 1, 5, 'Laravel Password Grant Client', '[]', 0, '2020-11-05 13:44:29', '2020-11-05 13:44:29', '2021-11-05 13:44:29');
INSERT INTO `oauth_access_tokens` VALUES ('7d167876c8b13c0ea437b89cd31bbbee71556069609cc5cfa137882f38df633d186cc52f83637b03', 1, 5, 'Laravel Password Grant Client', '[]', 0, '2020-11-16 17:30:42', '2020-11-16 17:30:42', '2021-11-16 17:30:42');
INSERT INTO `oauth_access_tokens` VALUES ('7e4bdba32647b3d65f0003b0ceccff60705ef6336cc00d2cff68f11ddbd2405e51f18d747ba195e2', 1, 5, 'Laravel Password Grant Client', '[]', 0, '2020-11-23 10:44:17', '2020-11-23 10:44:17', '2021-11-23 10:44:17');
INSERT INTO `oauth_access_tokens` VALUES ('7efc0719629114542770f0b77e276de4238113ddf8cb7f5bb82d0750dd41bbd70d1e91d813fc1628', 1, 5, 'Laravel Password Grant Client', '[]', 0, '2020-11-09 20:10:28', '2020-11-09 20:10:28', '2021-11-09 20:10:28');
INSERT INTO `oauth_access_tokens` VALUES ('7fb409c9c456561555b20fb87babacc5c5bb5ee9f1289bda6c36e587cd2ccf2e50e32419a9e88839', 5, 1, 'Laravel Password Grant Client', '[]', 0, '2020-10-30 09:18:08', '2020-10-30 09:18:08', '2021-10-30 09:18:08');
INSERT INTO `oauth_access_tokens` VALUES ('805b37ab0afc4789aadfb219680288672e06dded2de414c708ca0561e8a73596a12e292e086deef0', 9, 1, 'Laravel Password Grant Client', '[]', 0, '2020-10-30 09:26:28', '2020-10-30 09:26:28', '2021-10-30 09:26:28');
INSERT INTO `oauth_access_tokens` VALUES ('8080b0df393b497a326d8d58896239ba6ca709790c688284e013b2fa466d4839ec00a303025e5ad3', 19, 5, 'Laravel Password Grant Client', '[]', 0, '2020-11-23 13:39:03', '2020-11-23 13:39:03', '2021-11-23 13:39:03');
INSERT INTO `oauth_access_tokens` VALUES ('8133b05595dc5b48db1882be2ea7ab23a8dfd4a782bda57d22c2b3859066b1006ce50612dc2931d0', 1, 1, 'Laravel Password Grant Client', '[]', 0, '2020-10-30 08:37:33', '2020-10-30 08:37:33', '2021-10-30 08:37:33');
INSERT INTO `oauth_access_tokens` VALUES ('82e31bf89409c17e7b89a4b8898bc735e82c2864864d7fe6064bea907f4fc85fc6dba99787ee3513', 1, 5, 'Laravel Password Grant Client', '[]', 0, '2020-11-05 07:22:56', '2020-11-05 07:22:56', '2021-11-05 07:22:56');
INSERT INTO `oauth_access_tokens` VALUES ('8306c0aa4e1b71533124e4ddd48ed7817edbf6163a72497a9a40bf1449c6d4387dc2058429c9694e', 1, 1, 'Laravel Password Grant Client', '[]', 0, '2020-11-03 03:34:12', '2020-11-03 03:34:12', '2021-11-03 03:34:12');
INSERT INTO `oauth_access_tokens` VALUES ('83d9e6a023ec365aab7717e4bb7936b73202b7d0368b985d4b605ccb5e7d4bf7727d6cf7d150b4a7', 36, 5, 'Laravel Password Grant Client', '[]', 0, '2020-11-27 09:17:53', '2020-11-27 09:17:53', '2021-11-27 09:17:53');
INSERT INTO `oauth_access_tokens` VALUES ('8464e15fa269f29eac1be11b1a5577a05ee7f0b6494d5b7454ce9ad01d8d4d1e1bc53b1876a60400', 1, 5, 'Laravel Password Grant Client', '[]', 0, '2020-11-16 17:31:56', '2020-11-16 17:31:56', '2021-11-16 17:31:56');
INSERT INTO `oauth_access_tokens` VALUES ('8571fd8daf7da048739eb03cb4fa456e30c62e0dc670d92078f23aeff55472d2d80da72d66b9811d', 2, 1, 'Laravel Password Grant Client', '[]', 0, '2020-10-30 10:40:11', '2020-10-30 10:40:11', '2021-10-30 10:40:11');
INSERT INTO `oauth_access_tokens` VALUES ('85914ea2b91b805370bef3b58d53f591fd23fd916d765c00ea7d22153942ee7884e078bfd6b296d1', 1, 5, 'Laravel Password Grant Client', '[]', 0, '2020-11-13 05:00:55', '2020-11-13 05:00:55', '2021-11-13 05:00:55');
INSERT INTO `oauth_access_tokens` VALUES ('8772bb3dc8bfd4949fd955694c630a98cf2c2ea96dfd57209c4229bbe9540a30357caf91b5ab8742', 1, 5, 'Laravel Password Grant Client', '[]', 0, '2020-11-07 13:17:22', '2020-11-07 13:17:22', '2021-11-07 13:17:22');
INSERT INTO `oauth_access_tokens` VALUES ('8778ed984e5584ff54e30a61c7f7c3dfd9d083edc2bb06c12d210f2c55101b8ebf8c5ccf576c5710', 4, 5, 'Laravel Password Grant Client', '[]', 0, '2020-11-23 09:41:12', '2020-11-23 09:41:12', '2021-11-23 09:41:12');
INSERT INTO `oauth_access_tokens` VALUES ('87ce85fbfd2b4ce67650103cb84e676df714428275c70cd88081f140a190fe974ca43fa491cad198', 4, 1, 'Laravel Password Grant Client', '[]', 0, '2020-10-30 09:05:34', '2020-10-30 09:05:34', '2021-10-30 09:05:34');
INSERT INTO `oauth_access_tokens` VALUES ('888a377fdcfe9c77250855712d598740b9edb0a7e3ea5c0cd408f8f7b2580f3a9a26b03821e53f1d', 1, 1, 'Laravel Password Grant Client', '[]', 0, '2020-10-29 05:12:22', '2020-10-29 05:12:22', '2021-10-29 05:12:22');
INSERT INTO `oauth_access_tokens` VALUES ('88f9342d5fa83995a697a41a059391f7ca17f6c878229a6aaa4e01c898e4b3717ee04d45373f30ac', 1, 5, 'Laravel Password Grant Client', '[]', 0, '2020-11-16 17:30:34', '2020-11-16 17:30:34', '2021-11-16 17:30:34');
INSERT INTO `oauth_access_tokens` VALUES ('8a1c4cfa1f18e9f4dab957633c877f8b3fd6702dee8b5dcd343baee8a977e302b9a814f89c060684', 23, 5, 'Laravel Password Grant Client', '[]', 0, '2020-11-26 15:53:27', '2020-11-26 15:53:27', '2021-11-26 15:53:27');
INSERT INTO `oauth_access_tokens` VALUES ('8e6003f1423f1ff216d0b7152fa2dff6c5f10d3aa534d259f0df64e108cc4328f70627a1c12cdc28', 3, 1, 'Laravel Password Grant Client', '[]', 0, '2020-10-30 09:04:53', '2020-10-30 09:04:53', '2021-10-30 09:04:53');
INSERT INTO `oauth_access_tokens` VALUES ('8e97cdae1e33402404e74487ff21b5d2e83362479d51faf06c9336491e8b233f959ce90573c4b03d', 18, 5, 'Laravel Password Grant Client', '[]', 0, '2020-11-23 09:10:58', '2020-11-23 09:10:58', '2021-11-23 09:10:58');
INSERT INTO `oauth_access_tokens` VALUES ('954edee79aa38e95329027e4eaf4b3ba696f259c72d01bbd1ef0f43b7b217232b57439f1b3cf97ce', 23, 5, 'Laravel Password Grant Client', '[]', 0, '2020-11-26 15:53:55', '2020-11-26 15:53:55', '2021-11-26 15:53:55');
INSERT INTO `oauth_access_tokens` VALUES ('96edf21706ae96f5767e4c7a1de89fcfce072e4dd609d12854a9d0974aff3f5ba5631e7dbf214eb9', 1, 5, 'Laravel Password Grant Client', '[]', 0, '2020-11-05 07:22:57', '2020-11-05 07:22:57', '2021-11-05 07:22:57');
INSERT INTO `oauth_access_tokens` VALUES ('96fec90a3484e4c14bc67795448d589cc220fc8ed26f0dbbfe2ed92d64cef572c16ca6ea0ad03fa9', 51, 7, 'Laravel Password Grant Client', '[]', 0, '2020-11-30 00:48:40', '2020-11-30 00:48:40', '2021-11-30 00:48:40');
INSERT INTO `oauth_access_tokens` VALUES ('97deacc7b7ea5795b137749bf68b4d998f5f22d6edfbc3e5f143dddf9bc961d64dc0944070fc4e85', 21, 5, 'Laravel Password Grant Client', '[]', 0, '2020-11-23 13:45:19', '2020-11-23 13:45:19', '2021-11-23 13:45:19');
INSERT INTO `oauth_access_tokens` VALUES ('998b955136a523c403aad665c30e4db2e384ee694a9fe09202262bdf5606c05410507972f7355402', 3, 1, 'Laravel Password Grant Client', '[]', 0, '2020-10-30 10:41:44', '2020-10-30 10:41:44', '2021-10-30 10:41:44');
INSERT INTO `oauth_access_tokens` VALUES ('9a98b3a6180d99b8dac704c2bd4f3f41663a3f5b243a9b1171960cd4b6f594660a5bff8fc0c262e9', 1, 5, 'Laravel Password Grant Client', '[]', 0, '2020-11-05 07:22:56', '2020-11-05 07:22:56', '2021-11-05 07:22:56');
INSERT INTO `oauth_access_tokens` VALUES ('9a9a211c05368a798c8c93c7e48b244c407d559c0392198b0533d008a4f1d976daa8009ee13717d9', 20, 5, 'Laravel Password Grant Client', '[]', 0, '2020-11-23 12:49:51', '2020-11-23 12:49:51', '2021-11-23 12:49:51');
INSERT INTO `oauth_access_tokens` VALUES ('9b8e58e1a88e1d812db41da7875c8339096433854109596d7fa8bb032770c3ba74f43251f760ee85', 1, 5, 'Laravel Password Grant Client', '[]', 0, '2020-11-05 14:11:40', '2020-11-05 14:11:40', '2021-11-05 14:11:40');
INSERT INTO `oauth_access_tokens` VALUES ('9c2a7138790e4573006abf9caa633ade15355d5a264016fef5667722911bf3159ccced394d731f86', 4, 1, 'Laravel Password Grant Client', '[]', 0, '2020-10-30 14:52:11', '2020-10-30 14:52:11', '2021-10-30 14:52:11');
INSERT INTO `oauth_access_tokens` VALUES ('9cd13a2262824fa0a234ed85ae859dec851815f53f13ca50376f29007be93ef52aee24da1cadd4c1', 1, 4, 'Laravel Password Grant Client', '[]', 0, '2020-11-03 15:53:13', '2020-11-03 15:53:13', '2021-11-03 15:53:13');
INSERT INTO `oauth_access_tokens` VALUES ('9de602b9caa4917c71b5e3de3cb3f986a83ba972ecd2eb9d967f91b83c826a61194689354243ab2f', 5, 5, 'Laravel Password Grant Client', '[]', 0, '2020-11-23 11:48:48', '2020-11-23 11:48:48', '2021-11-23 11:48:48');
INSERT INTO `oauth_access_tokens` VALUES ('9ed24464e14d477da801fc35d1376121109df06c2137babd6bb5201e12e70a3e9cb3671dbd5e2622', 1, 5, 'Laravel Password Grant Client', '[]', 0, '2020-11-09 12:29:17', '2020-11-09 12:29:17', '2021-11-09 12:29:17');
INSERT INTO `oauth_access_tokens` VALUES ('9f42fb52b71517cbc35afedc6767fdde17c25b06a6541d48d71c99ef90b77bd738aca49ddcba0061', 1, 5, 'Laravel Password Grant Client', '[]', 0, '2020-11-16 17:31:54', '2020-11-16 17:31:54', '2021-11-16 17:31:54');
INSERT INTO `oauth_access_tokens` VALUES ('9f5ccaefdd56c5f990997961f6f49f3660e0fe3301ab4c87ed86d6fd54a45f32cecba0547445df06', 27, 5, 'Laravel Password Grant Client', '[]', 0, '2020-11-26 09:28:21', '2020-11-26 09:28:21', '2021-11-26 09:28:21');
INSERT INTO `oauth_access_tokens` VALUES ('a08c172c3545c47b8f67bd503c66fd09511ff41cca3a396427eebd5be86ba48fc5e5d96d5f07473c', 50, 7, 'Laravel Password Grant Client', '[]', 0, '2020-11-28 13:08:36', '2020-11-28 13:08:36', '2021-11-28 13:08:36');
INSERT INTO `oauth_access_tokens` VALUES ('a23ae2b47e2ecdf97a861987ebcb7d647e5ec2ee1d45d7fb403681272b800d87e94b10da119be0ae', 1, 5, 'Laravel Password Grant Client', '[]', 0, '2020-11-16 17:31:55', '2020-11-16 17:31:55', '2021-11-16 17:31:55');
INSERT INTO `oauth_access_tokens` VALUES ('a284b0f4262df75c283200b19c10f27a256d611ec2569499cc1dc4015311c4418806561a5b8198f5', 1, 5, 'Laravel Password Grant Client', '[]', 0, '2020-11-23 10:17:40', '2020-11-23 10:17:40', '2021-11-23 10:17:40');
INSERT INTO `oauth_access_tokens` VALUES ('a6356c48b62d41c2753021cbdeb9b10b68a1191f2e2dc928c0f90ee7bbf915cecf56ca8ff542793b', 1, 5, 'Laravel Password Grant Client', '[]', 0, '2020-11-08 19:12:35', '2020-11-08 19:12:35', '2021-11-08 19:12:35');
INSERT INTO `oauth_access_tokens` VALUES ('a75c110f59d6637f20415cfa882cdad3ecf5bf9ad1b0ffa5e5716bdc9f978b80f7e4d0bb30ced0f2', 1, 5, 'Laravel Password Grant Client', '[]', 0, '2020-11-05 13:44:27', '2020-11-05 13:44:27', '2021-11-05 13:44:27');
INSERT INTO `oauth_access_tokens` VALUES ('a768b3e5c2125ccf39c7d576cfd8e72d9c00243d27e39f27062c5b1be06c11f68bc68ca315bc4f02', 1, 5, 'Laravel Password Grant Client', '[]', 0, '2020-11-12 14:47:07', '2020-11-12 14:47:07', '2021-11-12 14:47:07');
INSERT INTO `oauth_access_tokens` VALUES ('aba2a73eed9b30822da820a7babdeac72f45478b2bf7dc373d1548e188f67a6a29ed9f44c43dd49d', 25, 5, 'Laravel Password Grant Client', '[]', 0, '2020-11-25 10:07:21', '2020-11-25 10:07:21', '2021-11-25 10:07:21');
INSERT INTO `oauth_access_tokens` VALUES ('acb610f256727bf4488ff70606499f76d068b66997110e42e1bee09b681115eeb24a143e498c82af', 19, 5, 'Laravel Password Grant Client', '[]', 0, '2020-11-23 12:16:50', '2020-11-23 12:16:50', '2021-11-23 12:16:50');
INSERT INTO `oauth_access_tokens` VALUES ('ae1e9a88f289d1bed726b23ea9f9b41ddae54388db62eb7bf8aef06fe5f21efa59fc7e5178bef849', 1, 1, 'Laravel Password Grant Client', '[]', 0, '2020-10-29 05:08:24', '2020-10-29 05:08:24', '2021-10-29 05:08:24');
INSERT INTO `oauth_access_tokens` VALUES ('af26ec4ea7f0e8dbadfa8ed5a2e6418ccc81c44226a0a2b774c059202b25fe14602f4f9522c764e0', 1, 5, 'Laravel Password Grant Client', '[]', 0, '2020-11-16 17:30:38', '2020-11-16 17:30:38', '2021-11-16 17:30:38');
INSERT INTO `oauth_access_tokens` VALUES ('b0b1047690e2b8ac03a1cfc82da6f4ff5f923a36b3f3b1e3d5c665f0610ae93d2344db2d976f7d7a', 19, 5, 'Laravel Password Grant Client', '[]', 0, '2020-11-23 13:44:01', '2020-11-23 13:44:01', '2021-11-23 13:44:01');
INSERT INTO `oauth_access_tokens` VALUES ('b432546efc30149612d49bad939fe5ef190ce0faff91618f08ea825af16d47be1d95a8dcd0e2ba4d', 1, 5, 'Laravel Password Grant Client', '[]', 0, '2020-11-05 13:36:57', '2020-11-05 13:36:57', '2021-11-05 13:36:57');
INSERT INTO `oauth_access_tokens` VALUES ('b44321b9bc22663f340095fcd31d0038624855c33144d9610abb01b637ae177941c9087f16ddd1ea', 5, 5, 'Laravel Password Grant Client', '[]', 0, '2020-11-25 02:27:24', '2020-11-25 02:27:24', '2021-11-25 02:27:24');
INSERT INTO `oauth_access_tokens` VALUES ('b502677afcd0a3fa762171ee2c5c00e0dd40a7d94044b096977562359d9bbf4f8f1a46cd8cef355e', 6, 1, 'Laravel Password Grant Client', '[]', 0, '2020-10-30 15:33:10', '2020-10-30 15:33:10', '2021-10-30 15:33:10');
INSERT INTO `oauth_access_tokens` VALUES ('b660ad4ae5f90db3dc8ae64922758c985e43794172b0b7179bbd8142ab527b69b228e71533d3f4c0', 25, 5, 'Laravel Password Grant Client', '[]', 0, '2020-11-25 04:15:31', '2020-11-25 04:15:31', '2021-11-25 04:15:31');
INSERT INTO `oauth_access_tokens` VALUES ('ba4b119d18e69912ff517472bdbb3eef04f8f7733784fc457e44e36485765484435a309ac885a124', 1, 5, 'Laravel Password Grant Client', '[]', 0, '2020-11-10 01:32:10', '2020-11-10 01:32:10', '2021-11-10 01:32:10');
INSERT INTO `oauth_access_tokens` VALUES ('ba705ad4cbaf3254fe93d55389e717494ff6ea252c625ae210a0b720129f0e8b62b16e37740dbd49', 22, 5, 'Laravel Password Grant Client', '[]', 0, '2020-11-23 14:35:05', '2020-11-23 14:35:05', '2021-11-23 14:35:05');
INSERT INTO `oauth_access_tokens` VALUES ('ba8ff02f44ee6e7fad5dbb2b458fb61b57a825c4051705b1d235c8100e3f7a459825922541ffd9fe', 1, 5, 'Laravel Password Grant Client', '[]', 0, '2020-11-23 09:44:43', '2020-11-23 09:44:43', '2021-11-23 09:44:43');
INSERT INTO `oauth_access_tokens` VALUES ('bb1c2eca2cf13aa6c66b0bf42009c2ad625c02e9dbb17fb5091a7e462a594203f949af2925a03c44', 1, 1, 'Laravel Password Grant Client', '[]', 0, '2020-10-30 08:48:27', '2020-10-30 08:48:27', '2021-10-30 08:48:27');
INSERT INTO `oauth_access_tokens` VALUES ('bb93fed4cc29396fb867da28ebf88138c09ec3dd0862e61cfb8e8a95a3b8883e9b5171c0c25be4cb', 23, 7, 'Laravel Password Grant Client', '[]', 0, '2020-11-29 13:56:04', '2020-11-29 13:56:04', '2021-11-29 13:56:04');
INSERT INTO `oauth_access_tokens` VALUES ('bd7ca5a2a3c6b63f2074f784c970989b267b26afdca4d52de2d1660dede65920d4e8a2ba7cf0e271', 1, 5, 'Laravel Password Grant Client', '[]', 0, '2020-11-07 13:17:34', '2020-11-07 13:17:34', '2021-11-07 13:17:34');
INSERT INTO `oauth_access_tokens` VALUES ('bd7cfb253305a8645be7995375bd01bec9573f34c961fd70da6144fc749183c6e57fe140a1e26cae', 40, 5, 'Laravel Password Grant Client', '[]', 0, '2020-11-27 12:40:58', '2020-11-27 12:40:58', '2021-11-27 12:40:58');
INSERT INTO `oauth_access_tokens` VALUES ('bd9d38ba8d3dd77c906452996038dc4f025cdc147a61ccef97e09e37be97d84da0a5b0bb5b661a6c', 2, 1, 'Laravel Password Grant Client', '[]', 0, '2020-10-30 08:59:25', '2020-10-30 08:59:25', '2021-10-30 08:59:25');
INSERT INTO `oauth_access_tokens` VALUES ('bf69747da08694a9fd12256c1b43a1e649277105268d8ec2c27fb628ee8b8c97ae367f18103609e5', 1, 5, 'Laravel Password Grant Client', '[]', 0, '2020-11-05 07:22:56', '2020-11-05 07:22:56', '2021-11-05 07:22:56');
INSERT INTO `oauth_access_tokens` VALUES ('c0d1d6656c68093f33333de20f93606ab47a1056aea78703742258fdb3eef53a0cd488a88c002616', 1, 5, 'Laravel Password Grant Client', '[]', 0, '2020-11-16 17:31:57', '2020-11-16 17:31:57', '2021-11-16 17:31:57');
INSERT INTO `oauth_access_tokens` VALUES ('c1e15f0b1bcd97920ea9c9404a9325ab45ffb4dce6703b520379370fa5c3994c2164fc8d5d19930b', 1, 5, 'Laravel Password Grant Client', '[]', 0, '2020-11-09 08:04:45', '2020-11-09 08:04:45', '2021-11-09 08:04:45');
INSERT INTO `oauth_access_tokens` VALUES ('c2d3665175cf7a27ad3335dcabd3fb07d41098271bf334d433ea79b1ae6f9e230e587fbabd67271b', 1, 1, 'Laravel Password Grant Client', '[]', 0, '2020-11-03 01:54:09', '2020-11-03 01:54:09', '2021-11-03 01:54:09');
INSERT INTO `oauth_access_tokens` VALUES ('c4138e08690bfc9384c6d8636093765d3c1f72693ffbdf52da3c447bc9e832af146a98de87fca8b4', 1, 5, 'Laravel Password Grant Client', '[]', 0, '2020-11-12 01:52:15', '2020-11-12 01:52:15', '2021-11-12 01:52:15');
INSERT INTO `oauth_access_tokens` VALUES ('c480e9a73c346098adbb43c096e9f7ab536dd1367cba51bceff5d611baca95b30c2ac1bc53c77de7', 6, 1, 'Laravel Password Grant Client', '[]', 0, '2020-10-30 15:33:36', '2020-10-30 15:33:36', '2021-10-30 15:33:36');
INSERT INTO `oauth_access_tokens` VALUES ('c4e39c2150ef2b9b90f11d9db588b233399e3f64b56a690639d77fc15a7358de1a57f6b89dcc9b02', 1, 5, 'Laravel Password Grant Client', '[]', 0, '2020-11-16 17:31:22', '2020-11-16 17:31:22', '2021-11-16 17:31:22');
INSERT INTO `oauth_access_tokens` VALUES ('c4e3c098450d7f66fc6775934cd45eec2dde6d0a212739084ddee9ad8c6f31d828778a374dbac8cb', 25, 5, 'Laravel Password Grant Client', '[]', 0, '2020-11-25 10:03:15', '2020-11-25 10:03:15', '2021-11-25 10:03:15');
INSERT INTO `oauth_access_tokens` VALUES ('c5697cfce8cdbf32f4a290281c9ef2ee08e75a9140db62c69bb482f3aaae62086e001e1f631dd212', 1, 5, 'Laravel Password Grant Client', '[]', 0, '2020-11-10 21:44:30', '2020-11-10 21:44:30', '2021-11-10 21:44:30');
INSERT INTO `oauth_access_tokens` VALUES ('c5f4b43b2ca2faf60afbecf72732c0b629335ff29e70ca2bacf763d75539d966ce17ce3ff2320d00', 1, 5, 'Laravel Password Grant Client', '[]', 0, '2020-11-10 01:23:22', '2020-11-10 01:23:22', '2021-11-10 01:23:22');
INSERT INTO `oauth_access_tokens` VALUES ('c745edcb401b1e246dff750b46450b619e41de634867f684c7d7514398d7f54cda6f3a90a2b09aa9', 19, 5, 'Laravel Password Grant Client', '[]', 0, '2020-11-25 04:03:37', '2020-11-25 04:03:37', '2021-11-25 04:03:37');
INSERT INTO `oauth_access_tokens` VALUES ('c765f952dfae158861e43ef1d4d9b9fd0d0427f75e284c20a0c8e0c3032a250203b3e9b91fc988b7', 1, 5, 'Laravel Password Grant Client', '[]', 0, '2020-11-10 16:44:42', '2020-11-10 16:44:42', '2021-11-10 16:44:42');
INSERT INTO `oauth_access_tokens` VALUES ('c781e4d6e464176b7d08c06403dd4cd1bc19930c624c4adb2ded0da531d91a7e316a03850eb7e89a', 4, 5, 'Laravel Password Grant Client', '[]', 0, '2020-11-23 04:54:31', '2020-11-23 04:54:31', '2021-11-23 04:54:31');
INSERT INTO `oauth_access_tokens` VALUES ('c8365a66bc8a4b5c13b70fd510d579cf69fa8442f6ff938ecbbbaa48d9527887e5c1dd8b1edb1634', 37, 5, 'Laravel Password Grant Client', '[]', 0, '2020-11-27 10:44:15', '2020-11-27 10:44:15', '2021-11-27 10:44:15');
INSERT INTO `oauth_access_tokens` VALUES ('c8f18584ac9985d24beace85ad536a6d2f17e2b439540f2e16849e968fcf1a62b91130c8e47b74e3', 1, 1, 'Laravel Password Grant Client', '[]', 0, '2020-11-03 01:43:13', '2020-11-03 01:43:13', '2021-11-03 01:43:13');
INSERT INTO `oauth_access_tokens` VALUES ('c9705c1e5617e113faec23aea77c82ce452cab735032cf93b6a348c1eb51f4ac128ac410b0e3b116', 1, 5, 'Laravel Password Grant Client', '[]', 0, '2020-11-05 13:35:25', '2020-11-05 13:35:25', '2021-11-05 13:35:25');
INSERT INTO `oauth_access_tokens` VALUES ('cc44684b306ce195aa0b168c57fdae1669ce8c4d807189a29e6b9ca50cdc65bd8e578fcae3b4427e', 4, 5, 'Laravel Password Grant Client', '[]', 0, '2020-11-23 09:50:44', '2020-11-23 09:50:44', '2021-11-23 09:50:44');
INSERT INTO `oauth_access_tokens` VALUES ('cca67da8d40390eb9bd01f2029092702ed386c714c39c4ef6944ef20b2f404be579caf9a0a49c94e', 1, 5, 'Laravel Password Grant Client', '[]', 0, '2020-11-12 15:55:36', '2020-11-12 15:55:36', '2021-11-12 15:55:36');
INSERT INTO `oauth_access_tokens` VALUES ('ce0f0a8a9acc959f7eb790031520e6875c8055983f5c2990704f11c75f84003614cf12e93fbf3d32', 25, 5, 'Laravel Password Grant Client', '[]', 0, '2020-11-25 10:09:03', '2020-11-25 10:09:03', '2021-11-25 10:09:03');
INSERT INTO `oauth_access_tokens` VALUES ('cfc30833d4d8a9b9144a0327fc95488ae32be2f5d253b7aa5552110f77f85cc06b26467242950372', 17, 5, 'Laravel Password Grant Client', '[]', 0, '2020-11-23 09:00:45', '2020-11-23 09:00:45', '2021-11-23 09:00:45');
INSERT INTO `oauth_access_tokens` VALUES ('d02f7037b0dda4b80f63bb1360eadcca3f710a6e25fab94aea324b55a88ae28981f27d6a53d02da5', 1, 5, 'Laravel Password Grant Client', '[]', 0, '2020-11-16 17:31:55', '2020-11-16 17:31:55', '2021-11-16 17:31:55');
INSERT INTO `oauth_access_tokens` VALUES ('d0a5f043b2fdf13a31d1d4ff8fb03abb90dba60bb2bccc7be997da560997431c10662e79cb1578e4', 1, 1, 'Laravel Password Grant Client', '[]', 0, '2020-11-03 15:29:34', '2020-11-03 15:29:34', '2021-11-03 15:29:34');
INSERT INTO `oauth_access_tokens` VALUES ('d3bb02a039abceddbb50ef2dfa7361a2688ee3fda5f45d2065de327a2aa407786485ff778b513f60', 1, 5, 'Laravel Password Grant Client', '[]', 0, '2020-11-23 11:30:45', '2020-11-23 11:30:45', '2021-11-23 11:30:45');
INSERT INTO `oauth_access_tokens` VALUES ('d3c74042024980954a4888c520be7af2083ff75485b3a9d3753f2c08f54e947ef1ddac5f65c303e1', 1, 5, 'Laravel Password Grant Client', '[]', 0, '2020-11-16 17:31:55', '2020-11-16 17:31:55', '2021-11-16 17:31:55');
INSERT INTO `oauth_access_tokens` VALUES ('d560c06ceb5413122c5cbf191a33dbb6e8ee4fe188490c7254c13360ee692a2c22bc7f3f84103af8', 1, 5, 'Laravel Password Grant Client', '[]', 0, '2020-11-12 14:47:04', '2020-11-12 14:47:04', '2021-11-12 14:47:04');
INSERT INTO `oauth_access_tokens` VALUES ('d566a711e4a4226ba863d7b71c7e9af1d34112e2e84bb60d836117fa40465eb042ee8a2a66e9de52', 25, 5, 'Laravel Password Grant Client', '[]', 0, '2020-11-25 10:09:26', '2020-11-25 10:09:26', '2021-11-25 10:09:26');
INSERT INTO `oauth_access_tokens` VALUES ('d63c820add4257cead0fdad6e4c5978b12ba238359e23b39d71ab83037c1fc4a5f6d75fa0604c0f0', 41, 5, 'Laravel Password Grant Client', '[]', 0, '2020-11-28 08:39:08', '2020-11-28 08:39:08', '2021-11-28 08:39:08');
INSERT INTO `oauth_access_tokens` VALUES ('d6877e53b31b5fa4c325c29048988c8e0bedd869168d5f66a9f08c9eac9bc8f5929032537176cbca', 4, 5, 'Laravel Password Grant Client', '[]', 0, '2020-11-23 03:52:21', '2020-11-23 03:52:21', '2021-11-23 03:52:21');
INSERT INTO `oauth_access_tokens` VALUES ('d7c25d0c26070f104d3d184b0565add77976cde994da3b9f2d408c923138cb97f333cc279744cc77', 1, 5, 'Laravel Password Grant Client', '[]', 0, '2020-11-16 17:47:06', '2020-11-16 17:47:06', '2021-11-16 17:47:06');
INSERT INTO `oauth_access_tokens` VALUES ('d7cb3ac5d09dd092abcb43eb32952d6f8c99da35aaa432262c0040c3622fa7077b3bd74b8e4cbee6', 4, 5, 'Laravel Password Grant Client', '[]', 0, '2020-11-23 03:23:41', '2020-11-23 03:23:41', '2021-11-23 03:23:41');
INSERT INTO `oauth_access_tokens` VALUES ('d81fb22306dcad3c2e355a796386d69b6bf2708d4a704efeb73c149cf3b76c8026416f81385ef8b8', 1, 5, 'Laravel Password Grant Client', '[]', 0, '2020-11-05 07:22:57', '2020-11-05 07:22:57', '2021-11-05 07:22:57');
INSERT INTO `oauth_access_tokens` VALUES ('d9573e8f528e72aaf0ea1182ec73d2b090eca7af2b29607a3304baed4208dfd308d65b6d1d0086a5', 25, 5, 'Laravel Password Grant Client', '[]', 0, '2020-11-25 10:03:59', '2020-11-25 10:03:59', '2021-11-25 10:03:59');
INSERT INTO `oauth_access_tokens` VALUES ('d972cd517adc0afb1585407c3a6b691413f276d33cbab2b90d7965f4ac20a0cda6f44aa094c0c76f', 1, 5, 'Laravel Password Grant Client', '[]', 0, '2020-11-09 20:38:58', '2020-11-09 20:38:58', '2021-11-09 20:38:58');
INSERT INTO `oauth_access_tokens` VALUES ('d9be7bca3bb7dbacbed59ecf2e8226e7879b65d925f7b19ffd9af81d8c3f949d4089a03cfbfc27f1', 1, 5, 'Laravel Password Grant Client', '[]', 0, '2020-11-16 17:30:39', '2020-11-16 17:30:39', '2021-11-16 17:30:39');
INSERT INTO `oauth_access_tokens` VALUES ('db0e14d166f8641de0c961fad01a003b95d922218daa663f552a0b422425e6d9c8ea32bde2d7a764', 1, 5, 'Laravel Password Grant Client', '[]', 0, '2020-11-05 13:46:18', '2020-11-05 13:46:18', '2021-11-05 13:46:18');
INSERT INTO `oauth_access_tokens` VALUES ('db68057a4ce5b1f6ba9fa0b5176188ff0c00fe46f28f38fdc9cf7bf9ca562b3e08f8d11c5f9dc954', 1, 5, 'Laravel Password Grant Client', '[]', 0, '2020-11-05 07:22:56', '2020-11-05 07:22:56', '2021-11-05 07:22:56');
INSERT INTO `oauth_access_tokens` VALUES ('dc7963e12835d5549f02cdb5c12c9c0bc9bdca4b27d2faea17e73546a6e24b96c4e1432a72b3ccfd', 1, 5, 'Laravel Password Grant Client', '[]', 0, '2020-11-05 07:22:55', '2020-11-05 07:22:55', '2021-11-05 07:22:55');
INSERT INTO `oauth_access_tokens` VALUES ('dd15fbd77c26907465b631bc89a25331b78a91f68ab60f85341717ee0a00e620d010a542613dbf0e', 19, 5, 'Laravel Password Grant Client', '[]', 0, '2020-11-25 04:05:57', '2020-11-25 04:05:57', '2021-11-25 04:05:57');
INSERT INTO `oauth_access_tokens` VALUES ('de485c677eb31bfa29c90821257f8a60f6ae809ae41a8177aae7442a5c5e25437639aaf736d28c4f', 1, 1, 'Laravel Password Grant Client', '[]', 0, '2020-10-30 13:56:52', '2020-10-30 13:56:52', '2021-10-30 13:56:52');
INSERT INTO `oauth_access_tokens` VALUES ('de59459475b86131384d0da7be41cd88353b8007e9143ffd115773f7c727dea2273ce24242d16e82', 4, 5, 'Laravel Password Grant Client', '[]', 0, '2020-11-23 03:21:02', '2020-11-23 03:21:02', '2021-11-23 03:21:02');
INSERT INTO `oauth_access_tokens` VALUES ('e2975a2c63f24bec566c9fd9b3183696218c074a09ecad0f43e0c4812a0bf60b67b9f5a2804df523', 25, 5, 'Laravel Password Grant Client', '[]', 0, '2020-11-25 04:15:29', '2020-11-25 04:15:29', '2021-11-25 04:15:29');
INSERT INTO `oauth_access_tokens` VALUES ('e43df70c95c4f01bc5e9b2fa564c8e6abb2e7ebd8c5e96b7d4432d45f3c31b8eb0a02d54ef3f0547', 1, 1, 'Laravel Password Grant Client', '[]', 0, '2020-11-01 16:52:52', '2020-11-01 16:52:52', '2021-11-01 16:52:52');
INSERT INTO `oauth_access_tokens` VALUES ('e44e447e53bbb0859328843ec410a94ebd5c9074486c600e6eb81d488874b8b3bda813320328b49b', 23, 5, 'Laravel Password Grant Client', '[]', 0, '2020-11-26 15:08:48', '2020-11-26 15:08:48', '2021-11-26 15:08:48');
INSERT INTO `oauth_access_tokens` VALUES ('ea166bfb08ecccb9b3262c1482d4a1e3deea4317c9733dd3c21427bee685bacef7628db3ba76f4c8', 1, 5, 'Laravel Password Grant Client', '[]', 0, '2020-11-05 13:41:08', '2020-11-05 13:41:08', '2021-11-05 13:41:08');
INSERT INTO `oauth_access_tokens` VALUES ('ea3cf1078634e8101830f11fd09d8962b2b313a8248d19e295cde83d06722c95ea9dd3fa9957e783', 26, 5, 'Laravel Password Grant Client', '[]', 0, '2020-11-25 10:19:16', '2020-11-25 10:19:16', '2021-11-25 10:19:16');
INSERT INTO `oauth_access_tokens` VALUES ('eaf4d4ea887fa76fabb11c91225961168fe323be04ff8af0458ee7f758bb11d38f58cc98ec0b6970', 19, 5, 'Laravel Password Grant Client', '[]', 0, '2020-11-23 11:49:14', '2020-11-23 11:49:14', '2021-11-23 11:49:14');
INSERT INTO `oauth_access_tokens` VALUES ('eaf88ba48d9a6af2190972b7f51dcb49602a5659badca340728fe5693ddb148fa060b0f8d13b3e0c', 24, 5, 'Laravel Password Grant Client', '[]', 0, '2020-11-25 01:36:46', '2020-11-25 01:36:46', '2021-11-25 01:36:46');
INSERT INTO `oauth_access_tokens` VALUES ('eba78efb0e8ba755f9884b51c891b4d5d4dd14d001fcb1c988630d796b9487e2cfc5de52bd2ffcc0', 1, 5, 'Laravel Password Grant Client', '[]', 0, '2020-11-16 17:31:56', '2020-11-16 17:31:56', '2021-11-16 17:31:56');
INSERT INTO `oauth_access_tokens` VALUES ('ebde44ade331d79f4d85fb803231cbb3e9a1d50eca2e7649974c2753028e7ffd5e49864156128b83', 1, 5, 'Laravel Password Grant Client', '[]', 0, '2020-11-10 21:44:28', '2020-11-10 21:44:28', '2021-11-10 21:44:28');
INSERT INTO `oauth_access_tokens` VALUES ('ed990e2136f80e9a5f370355cfccfcab4141fd652527f262402afc7120b72d5c80a91a3cb8d5e06f', 1, 5, 'Laravel Password Grant Client', '[]', 0, '2020-11-16 17:31:01', '2020-11-16 17:31:01', '2021-11-16 17:31:01');
INSERT INTO `oauth_access_tokens` VALUES ('edea32a84dd6f2cc64de521540c8e2f000b1c2d9b7406f9eeca275d207909015c0b119578283ca1d', 1, 1, 'Laravel Password Grant Client', '[]', 0, '2020-11-03 02:11:47', '2020-11-03 02:11:47', '2021-11-03 02:11:47');
INSERT INTO `oauth_access_tokens` VALUES ('ee42579b76f7b3c0d3313f2da60c17e24c7086cad4f9db4b8a4501e76a7206eefd57f24006626b74', 1, 5, 'Laravel Password Grant Client', '[]', 0, '2020-11-16 17:34:32', '2020-11-16 17:34:32', '2021-11-16 17:34:32');
INSERT INTO `oauth_access_tokens` VALUES ('ee51c938e784b311c4e1ba99c77ed070289539f8151150671ce5fc68cc95f867c23e50977dd57acd', 1, 5, 'Laravel Password Grant Client', '[]', 0, '2020-11-10 01:32:15', '2020-11-10 01:32:15', '2021-11-10 01:32:15');
INSERT INTO `oauth_access_tokens` VALUES ('ee8cc489d7ee4a6dd2b0b277d247a2d0cb52d23a67dcb9b28ba5bebf3fe716f1b70741f4f7123dec', 23, 5, 'Laravel Password Grant Client', '[]', 0, '2020-11-26 14:00:38', '2020-11-26 14:00:38', '2021-11-26 14:00:38');
INSERT INTO `oauth_access_tokens` VALUES ('eec33891a73fbbb6616244d9d2d5a631e21539eda76c98379e353a7d65a9b041e06511fcf71f86c5', 1, 5, 'Laravel Password Grant Client', '[]', 0, '2020-11-16 17:31:57', '2020-11-16 17:31:57', '2021-11-16 17:31:57');
INSERT INTO `oauth_access_tokens` VALUES ('efe4f71c0de7a150a2026b2fb1335a79e98b18400933cd8347fa99beb528421eca43716db4f3e167', 1, 5, 'Laravel Password Grant Client', '[]', 0, '2020-11-09 05:01:22', '2020-11-09 05:01:22', '2021-11-09 05:01:22');
INSERT INTO `oauth_access_tokens` VALUES ('f12245d1346ba1e09fc67a93c3d1d0c4a7482ab499b48f255a344a7acb04158f2001ef0ee422fd09', 1, 5, 'Laravel Password Grant Client', '[]', 0, '2020-11-05 13:44:28', '2020-11-05 13:44:28', '2021-11-05 13:44:28');
INSERT INTO `oauth_access_tokens` VALUES ('f298874ff22cbdca358fef13644f21178452e28a884d3ea15e77c7b26f3d7d303f53a70bcceca1ae', 22, 5, 'Laravel Password Grant Client', '[]', 0, '2020-11-23 14:35:30', '2020-11-23 14:35:30', '2021-11-23 14:35:30');
INSERT INTO `oauth_access_tokens` VALUES ('f329a81587389753e18e8ec727cb48e6a1c7adc7e44ba2f1ef014ec2e30f788afd6e97bd85bf383f', 4, 5, 'Laravel Password Grant Client', '[]', 0, '2020-11-23 09:55:40', '2020-11-23 09:55:40', '2021-11-23 09:55:40');
INSERT INTO `oauth_access_tokens` VALUES ('f379c026f75780a5a4dc8d8ff689aa26fff5c46fb73e4958542a8af628df8b3a8f049caf2470e0a9', 1, 5, 'Laravel Password Grant Client', '[]', 0, '2020-11-16 17:31:22', '2020-11-16 17:31:22', '2021-11-16 17:31:22');
INSERT INTO `oauth_access_tokens` VALUES ('f397862371568965d11f93e955d8f129def1f01e53cd86613671bd084cbdebadfec406983a9ac455', 20, 5, 'Laravel Password Grant Client', '[]', 0, '2020-11-23 12:12:57', '2020-11-23 12:12:57', '2021-11-23 12:12:57');
INSERT INTO `oauth_access_tokens` VALUES ('f45b80ec119d6c829f535c2988480f1f57e720ce1c7721ec66019a9a1b0138b8b2bd67e745c6546a', 1, 5, 'Laravel Password Grant Client', '[]', 0, '2020-11-05 13:45:10', '2020-11-05 13:45:10', '2021-11-05 13:45:10');
INSERT INTO `oauth_access_tokens` VALUES ('f47200dc26c165ca67c64e30f80634ce90d544a53c71d2051ef77d7f98e673bb36f50721976e0441', 25, 5, 'Laravel Password Grant Client', '[]', 0, '2020-11-25 10:08:42', '2020-11-25 10:08:42', '2021-11-25 10:08:42');
INSERT INTO `oauth_access_tokens` VALUES ('f73a7aa2c0036d4b30ffda79412024ec025d6bc5dec96bc4364f0006bcbf198b425106c5e065692c', 1, 5, 'Laravel Password Grant Client', '[]', 0, '2020-11-09 05:01:29', '2020-11-09 05:01:29', '2021-11-09 05:01:29');
INSERT INTO `oauth_access_tokens` VALUES ('f75a301b2dca0cf3777dff99e80448a1f2e052c390af32c072ebb96447ca1c5a798b8f5b5b52458f', 1, 5, 'Laravel Password Grant Client', '[]', 0, '2020-11-23 10:10:22', '2020-11-23 10:10:22', '2021-11-23 10:10:22');
INSERT INTO `oauth_access_tokens` VALUES ('f85703fe906112addea4d65a0a4362ddb3ea3b198be71e6d3521ff4e247bdff597e6d86446e0b7b1', 20, 5, 'Laravel Password Grant Client', '[]', 0, '2020-11-23 13:35:36', '2020-11-23 13:35:36', '2021-11-23 13:35:36');
INSERT INTO `oauth_access_tokens` VALUES ('f90b060932a13080889e549e96bdd52527225a85e759b63fa9a79e966cd04168ae99ec25beb219fa', 1, 1, 'Laravel Password Grant Client', '[]', 0, '2020-10-30 10:36:29', '2020-10-30 10:36:29', '2021-10-30 10:36:29');
INSERT INTO `oauth_access_tokens` VALUES ('f985c62a0bde56ea0f3e2ffa1e3c66fb11c7bfe81a26e554aefb0d1c326a2983e05bb481f4599ae6', 25, 5, 'Laravel Password Grant Client', '[]', 0, '2020-11-25 08:21:54', '2020-11-25 08:21:54', '2021-11-25 08:21:54');
INSERT INTO `oauth_access_tokens` VALUES ('fa1b84817fce82ce10994b15e8d8f4f7567206461f8d5591cc9d7aefee4f05f0e601064f9567f9c9', 1, 5, 'Laravel Password Grant Client', '[]', 0, '2020-11-11 06:09:58', '2020-11-11 06:09:58', '2021-11-11 06:09:58');
INSERT INTO `oauth_access_tokens` VALUES ('fa9ad3b6a6727a9e900c989d39b9ef58472bd810cfc0e5aab2c44ee9beea4642a3c05be98d26d99c', 23, 5, 'Laravel Password Grant Client', '[]', 0, '2020-11-23 14:49:08', '2020-11-23 14:49:08', '2021-11-23 14:49:08');
INSERT INTO `oauth_access_tokens` VALUES ('fc85866f823e221aecb8c494137df9b0576ec1ed14ecb70db4afd13c7a6c808c57df57a2260d8d62', 1, 1, 'Laravel Password Grant Client', '[]', 0, '2020-11-03 01:43:09', '2020-11-03 01:43:09', '2021-11-03 01:43:09');

-- ----------------------------
-- Table structure for oauth_auth_codes
-- ----------------------------
DROP TABLE IF EXISTS `oauth_auth_codes`;
CREATE TABLE `oauth_auth_codes`  (
  `id` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `client_id` bigint(20) UNSIGNED NOT NULL,
  `scopes` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL,
  `revoked` tinyint(1) NOT NULL,
  `expires_at` datetime(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `oauth_auth_codes_user_id_index`(`user_id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for oauth_clients
-- ----------------------------
DROP TABLE IF EXISTS `oauth_clients`;
CREATE TABLE `oauth_clients`  (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `user_id` bigint(20) UNSIGNED NULL DEFAULT NULL,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `secret` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `provider` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `redirect` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `personal_access_client` tinyint(1) NOT NULL,
  `password_client` tinyint(1) NOT NULL,
  `revoked` tinyint(1) NOT NULL,
  `created_at` timestamp(0) NULL DEFAULT NULL,
  `updated_at` timestamp(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `oauth_clients_user_id_index`(`user_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 8 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of oauth_clients
-- ----------------------------
INSERT INTO `oauth_clients` VALUES (1, NULL, 'Laravel Personal Access Client', 'Jk6xnZvtWq6VhGhMKftYbppur1eGG78iyph7aahQ', NULL, 'http://localhost', 1, 0, 0, '2020-10-28 23:49:32', '2020-10-28 23:49:32');
INSERT INTO `oauth_clients` VALUES (2, NULL, 'Laravel Password Grant Client', 'sVYrIWoK7oMaBn3DtLjZqXfv4lmUkPvCztjBRz60', 'users', 'http://localhost', 0, 1, 0, '2020-10-28 23:49:32', '2020-10-28 23:49:32');
INSERT INTO `oauth_clients` VALUES (3, 1, 'projhub client', '$2y$10$l5hZoc5HYoRSsNid4at1SubmruVQRZt3d/E8ErDPyruX7zR5ehEp2', NULL, 'http://localhost/auth/callback', 0, 0, 0, '2020-10-29 00:30:43', '2020-10-29 00:30:43');
INSERT INTO `oauth_clients` VALUES (4, NULL, 'Laravel Personal Access Client', 'pLHIiPAu2G4HBtNEtxawr4dHo1OHbPQFA50dXv0l', NULL, 'http://localhost', 1, 0, 0, '2020-11-03 15:35:12', '2020-11-03 15:35:12');
INSERT INTO `oauth_clients` VALUES (5, NULL, 'Laravel Personal Access Client', 'nKsp2hGOTXFLwe3AVaAoCgN9YLyIrFWG2UsA3avS', NULL, 'http://localhost', 1, 0, 0, '2020-11-03 16:09:17', '2020-11-03 16:09:17');
INSERT INTO `oauth_clients` VALUES (6, NULL, 'Laravel Password Grant Client', 'S8uhnp3ORIVOABNrtVcmfqLvqVWrVpBixCqjHSn7', 'users', 'http://localhost', 0, 1, 0, '2020-11-03 16:09:17', '2020-11-03 16:09:17');
INSERT INTO `oauth_clients` VALUES (7, NULL, 'Laravel Personal Access Client', '0geVP3rMbyrAtKQIOrQgxf0Zx9kl1kkrisyKEfPB', NULL, 'http://localhost', 1, 0, 0, '2020-11-28 10:42:34', '2020-11-28 10:42:34');

-- ----------------------------
-- Table structure for oauth_personal_access_clients
-- ----------------------------
DROP TABLE IF EXISTS `oauth_personal_access_clients`;
CREATE TABLE `oauth_personal_access_clients`  (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `client_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp(0) NULL DEFAULT NULL,
  `updated_at` timestamp(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 5 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of oauth_personal_access_clients
-- ----------------------------
INSERT INTO `oauth_personal_access_clients` VALUES (1, 1, '2020-10-28 23:49:32', '2020-10-28 23:49:32');
INSERT INTO `oauth_personal_access_clients` VALUES (2, 4, '2020-11-03 15:35:12', '2020-11-03 15:35:12');
INSERT INTO `oauth_personal_access_clients` VALUES (3, 5, '2020-11-03 16:09:17', '2020-11-03 16:09:17');
INSERT INTO `oauth_personal_access_clients` VALUES (4, 7, '2020-11-28 10:42:34', '2020-11-28 10:42:34');

-- ----------------------------
-- Table structure for oauth_refresh_tokens
-- ----------------------------
DROP TABLE IF EXISTS `oauth_refresh_tokens`;
CREATE TABLE `oauth_refresh_tokens`  (
  `id` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `access_token_id` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `revoked` tinyint(1) NOT NULL,
  `expires_at` datetime(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `oauth_refresh_tokens_access_token_id_index`(`access_token_id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for people
-- ----------------------------
DROP TABLE IF EXISTS `people`;
CREATE TABLE `people`  (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `photo` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `user_id` int(10) UNSIGNED NOT NULL,
  `role_id` int(10) UNSIGNED NULL DEFAULT NULL,
  `language_id` int(10) UNSIGNED NULL DEFAULT NULL,
  `timezone_id` int(10) UNSIGNED NULL DEFAULT NULL,
  `title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `status` enum('Active','Suspend') CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'Active',
  `created_at` timestamp(0) NULL DEFAULT NULL,
  `updated_at` timestamp(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 52 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of people
-- ----------------------------
INSERT INTO `people` VALUES (19, 'Segunfunmi Oyedele', 'eastsea1020n@gmail.com', '$2y$10$uaopEhu9HzXqnucyVcOa9OqxOV1v4GuY5bxj9zcKi1OKVSx.tR5fe', NULL, 5, NULL, NULL, NULL, NULL, 'Active', '2020-11-23 11:46:09', '2020-11-23 11:46:09');
INSERT INTO `people` VALUES (23, 'dave matrix', 'dave20170118@gmail.com', '$2y$10$OeU0DuAZeLVGbvcfVGiEv.7zozXKZD691PaTC1LqfVdZgVwHlNbaG', NULL, 5, 9, 1, 1, NULL, 'Active', '2020-11-23 14:48:48', '2020-11-23 14:48:48');
INSERT INTO `people` VALUES (27, 'kinnnyann', 'user3@gmail.com', '$2y$10$zWy7C.CiZ/Mwot/N.BFvSeBisc2wsaL270NkhE/2uM.j1qAyKAi..', NULL, 5, 9, NULL, NULL, NULL, 'Active', '2020-11-25 10:21:49', '2020-11-25 10:21:49');
INSERT INTO `people` VALUES (36, 'common user', 'user7@gmail.com', '$2y$10$Fzm3mSio5k4lYc2IH.PBLewkQQw248e.oZZ0xWtd05EIaC5hrMJFu', NULL, 7, NULL, NULL, NULL, NULL, 'Active', '2020-11-27 09:17:52', '2020-11-27 09:17:52');
INSERT INTO `people` VALUES (37, 'common user', 'user8@gmail.com', '$2y$10$NnCTRGAp/TlButfoiyG/wOh28LLRZmjEFiXfj..KEun9EC.MqY.7a', NULL, 8, NULL, NULL, NULL, NULL, 'Active', '2020-11-27 10:44:15', '2020-11-27 10:44:15');
INSERT INTO `people` VALUES (38, 'common user', 'user9@gmail.com', '$2y$10$wKHNNGuOmO5JIJvQPBsYBOB.ER8whEMDgzuOxjj2K.Qgzb/K.jHOS', NULL, 9, NULL, NULL, NULL, NULL, 'Active', '2020-11-27 10:49:52', '2020-11-27 10:49:52');
INSERT INTO `people` VALUES (39, 'common user', 'user10@gmail.com', '$2y$10$c5qUuQMhxfNiQoQ1jrDb4OaEx3KhjrxkCAElVLn42pFdyGoXU.Lu2', NULL, 10, NULL, NULL, NULL, NULL, 'Active', '2020-11-27 12:23:11', '2020-11-27 12:23:11');
INSERT INTO `people` VALUES (40, 'common user', 'user11@gmail.com', '$2y$10$mKtCBCuHIMX7x12yZrceN.IMWpC7e4Nn92MtlP/BeBy/PUNecDP5i', NULL, 11, NULL, NULL, NULL, NULL, 'Active', '2020-11-27 12:40:58', '2020-11-27 12:40:58');
INSERT INTO `people` VALUES (41, 'common user', 'user12@gmail.com', '$2y$10$4Hvnh6NX/OrQzHXsusyqMu1vpwtLNo1Mcp/j9y7ruu6S5c6Z35916', NULL, 12, NULL, NULL, NULL, NULL, 'Active', '2020-11-28 08:39:08', '2020-11-28 08:39:08');
INSERT INTO `people` VALUES (42, 'common user', 'user13@gmail.com', '$2y$10$okdXskQDpA/pcD5MnRdrsOMgUKUo6Em5ZGXn2/rhS/Xqfs975bYu2', NULL, 15, NULL, NULL, NULL, NULL, 'Active', '2020-11-28 10:32:49', '2020-11-28 10:32:49');
INSERT INTO `people` VALUES (43, 'common user', 'user14@gmail.com', '$2y$10$5.3v5m5eJ95fY9.HniYGTOBHL2X3tpEjjSzHZXD0QIF76AJO64u7a', NULL, 16, NULL, NULL, NULL, NULL, 'Active', '2020-11-28 10:34:57', '2020-11-28 10:34:57');
INSERT INTO `people` VALUES (44, 'common user', 'user16@gmail.com', '$2y$10$tcaswG2VeFsW2S2GkFwjh.g6suzwri4/MfjawBX7jBtkzIVZ0hDLm', NULL, 17, NULL, NULL, NULL, NULL, 'Active', '2020-11-28 10:37:43', '2020-11-28 10:37:43');
INSERT INTO `people` VALUES (45, 'common user', 'user17@gmail.com', '$2y$10$YmcNaqeKJCJUEYx95Z87F.vU9lZuHtlFRybLIqL9X12VfWc9xLGES', NULL, 18, NULL, NULL, NULL, NULL, 'Active', '2020-11-28 10:39:04', '2020-11-28 10:39:04');
INSERT INTO `people` VALUES (46, 'common user', 'user18@gmail.com', '$2y$10$nnjZfJZRHzHVlOfy10UiN./Uf9gQOrL2LXJ68gzZjW8OPVm90bley', NULL, 19, NULL, NULL, NULL, NULL, 'Active', '2020-11-28 10:42:52', '2020-11-28 10:42:52');
INSERT INTO `people` VALUES (47, 'common user', 'user19@gmail.com', '$2y$10$615Mxo46OgPGjj3KQbOIheF8itSV7XOaSwBDzMwBiqtNYQpdIaZG2', NULL, 20, NULL, NULL, NULL, NULL, 'Active', '2020-11-28 10:44:24', '2020-11-28 10:44:24');
INSERT INTO `people` VALUES (48, 'common user', 'user20@gmail.com', '$2y$10$s/rm7gFMjmzhhIh2GP4J6OwE34Mp.8I4uLd/9vqkaWh8Y5Ma4lxSu', NULL, 21, NULL, NULL, NULL, NULL, 'Active', '2020-11-28 13:04:21', '2020-11-28 13:04:21');
INSERT INTO `people` VALUES (49, 'common user', 'user21@gmail.com', '$2y$10$qtzy1//2BEartrA9Rq8OeOfZq/8ElX9MEtjz22PyA.wuwjNORuXEi', NULL, 22, NULL, NULL, NULL, NULL, 'Active', '2020-11-28 13:05:46', '2020-11-28 13:05:46');
INSERT INTO `people` VALUES (50, 'common user', 'user22@gmail.com', '$2y$10$Oe5tQIa37FkY7Dvu09SV0uTi9RTB8n61Yys5RcOATcUE4.OM.ffTO', NULL, 23, NULL, NULL, NULL, NULL, 'Active', '2020-11-28 13:08:35', '2020-11-28 13:08:35');
INSERT INTO `people` VALUES (51, 'common user', 'user24@gmail.com', '$2y$10$0qEl8lncwreFcmeHiSfg6OshzcOK5dkDa64j97cZQNBKW5jttpkyK', NULL, 25, NULL, NULL, NULL, NULL, 'Active', '2020-11-30 00:48:40', '2020-11-30 00:48:40');

-- ----------------------------
-- Table structure for project_tabs
-- ----------------------------
DROP TABLE IF EXISTS `project_tabs`;
CREATE TABLE `project_tabs`  (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 22 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of project_tabs
-- ----------------------------
INSERT INTO `project_tabs` VALUES (15, 'Discussions');
INSERT INTO `project_tabs` VALUES (16, 'Tasks');
INSERT INTO `project_tabs` VALUES (17, 'Gantt');
INSERT INTO `project_tabs` VALUES (18, 'Calendar');
INSERT INTO `project_tabs` VALUES (19, 'Notes');
INSERT INTO `project_tabs` VALUES (20, 'Files');
INSERT INTO `project_tabs` VALUES (21, 'Time');

-- ----------------------------
-- Table structure for projects
-- ----------------------------
DROP TABLE IF EXISTS `projects`;
CREATE TABLE `projects`  (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `desc` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL,
  `creator_id` int(10) UNSIGNED NOT NULL,
  `manager_id` int(10) UNSIGNED NULL DEFAULT NULL,
  `start_date` date NULL DEFAULT NULL,
  `end_date` date NULL DEFAULT NULL,
  `category_id` int(10) UNSIGNED NULL DEFAULT NULL,
  `status_id` int(10) UNSIGNED NULL DEFAULT NULL,
  `color_id` int(10) UNSIGNED NULL DEFAULT NULL,
  `created_at` timestamp(0) NULL DEFAULT NULL,
  `updated_at` timestamp(0) NULL DEFAULT NULL,
  `is_template` tinyint(1) NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 59 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of projects
-- ----------------------------
INSERT INTO `projects` VALUES (54, 'test project', 'this is test project', 19, NULL, '2020-11-17', '2020-11-24', NULL, NULL, 35, '2020-11-23 12:48:44', '2020-11-23 12:48:44', 0);
INSERT INTO `projects` VALUES (55, 'test template', 'this is test template', 27, 23, '2020-11-04', '2020-11-27', NULL, NULL, 33, '2020-11-26 05:50:52', '2020-11-26 05:50:52', 1);
INSERT INTO `projects` VALUES (56, 'test projects', 'asdfsd', 23, 19, NULL, NULL, 1, 1, 37, '2020-11-26 06:14:55', '2020-11-26 06:14:55', 0);
INSERT INTO `projects` VALUES (58, 'project from template', 'this is test project from template', 23, 23, NULL, NULL, 22, 2, 36, '2020-11-30 05:02:11', '2020-11-30 05:02:11', 0);

-- ----------------------------
-- Table structure for projects_match_assignees
-- ----------------------------
DROP TABLE IF EXISTS `projects_match_assignees`;
CREATE TABLE `projects_match_assignees`  (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `project_id` int(10) UNSIGNED NOT NULL,
  `assignee_id` int(10) NULL DEFAULT NULL,
  `created_at` timestamp(0) NULL DEFAULT NULL,
  `updated_at` timestamp(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 34 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of projects_match_assignees
-- ----------------------------
INSERT INTO `projects_match_assignees` VALUES (25, 54, 19, NULL, NULL);
INSERT INTO `projects_match_assignees` VALUES (27, 55, 23, NULL, NULL);
INSERT INTO `projects_match_assignees` VALUES (28, 55, 25, NULL, NULL);
INSERT INTO `projects_match_assignees` VALUES (29, 56, 19, NULL, NULL);
INSERT INTO `projects_match_assignees` VALUES (30, 56, 23, NULL, NULL);
INSERT INTO `projects_match_assignees` VALUES (31, 56, 25, NULL, NULL);
INSERT INTO `projects_match_assignees` VALUES (32, 58, 23, NULL, NULL);
INSERT INTO `projects_match_assignees` VALUES (33, 58, 27, NULL, NULL);

-- ----------------------------
-- Table structure for projects_match_labels
-- ----------------------------
DROP TABLE IF EXISTS `projects_match_labels`;
CREATE TABLE `projects_match_labels`  (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `project_id` int(10) UNSIGNED NOT NULL,
  `label_id` int(10) UNSIGNED NOT NULL,
  `created_at` timestamp(0) NULL DEFAULT NULL,
  `updated_at` timestamp(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 15 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for projects_match_tasklists
-- ----------------------------
DROP TABLE IF EXISTS `projects_match_tasklists`;
CREATE TABLE `projects_match_tasklists`  (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `project_id` int(10) UNSIGNED NOT NULL,
  `tasklist_id` int(10) UNSIGNED NOT NULL,
  `created_at` timestamp(0) NULL DEFAULT NULL,
  `updated_at` timestamp(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 3 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for reminders
-- ----------------------------
DROP TABLE IF EXISTS `reminders`;
CREATE TABLE `reminders`  (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 19 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of reminders
-- ----------------------------
INSERT INTO `reminders` VALUES (1, 'None');
INSERT INTO `reminders` VALUES (2, 'At start time');
INSERT INTO `reminders` VALUES (3, '5 minutes before start');
INSERT INTO `reminders` VALUES (4, '15 minutes before start');
INSERT INTO `reminders` VALUES (5, '30 minutes before start');
INSERT INTO `reminders` VALUES (6, '1 hour before start');
INSERT INTO `reminders` VALUES (7, '1.5 hours before start');
INSERT INTO `reminders` VALUES (8, '2 hours before start');
INSERT INTO `reminders` VALUES (9, '3 hours before start');
INSERT INTO `reminders` VALUES (10, '6 hours before start');
INSERT INTO `reminders` VALUES (11, '12 hours before start');
INSERT INTO `reminders` VALUES (12, '1 day before start');
INSERT INTO `reminders` VALUES (13, '2 days before start');
INSERT INTO `reminders` VALUES (14, '3 days before start');
INSERT INTO `reminders` VALUES (15, '4 days before start');
INSERT INTO `reminders` VALUES (16, '5 days before start');
INSERT INTO `reminders` VALUES (17, '1 week before start');
INSERT INTO `reminders` VALUES (18, '2 weeks before start');

-- ----------------------------
-- Table structure for subtasks
-- ----------------------------
DROP TABLE IF EXISTS `subtasks`;
CREATE TABLE `subtasks`  (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `desc` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL,
  `creator_id` int(10) UNSIGNED NOT NULL,
  `task_id` int(10) UNSIGNED NOT NULL,
  `stage_id` int(10) UNSIGNED NULL DEFAULT NULL,
  `start_date` date NULL DEFAULT NULL,
  `end_date` date NULL DEFAULT NULL,
  `hours` int(11) NULL DEFAULT NULL,
  `minutes` int(11) NULL DEFAULT NULL,
  `created_at` timestamp(0) NULL DEFAULT NULL,
  `updated_at` timestamp(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 3 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of subtasks
-- ----------------------------
INSERT INTO `subtasks` VALUES (1, 'subtask1', 'this is subtask1', 23, 9, NULL, NULL, NULL, NULL, NULL, '2020-11-29 00:30:49', '2020-11-29 00:30:49');
INSERT INTO `subtasks` VALUES (2, 'subtask2', 'this is subtask2', 23, 9, NULL, NULL, NULL, NULL, NULL, '2020-11-29 22:52:24', '2020-11-29 22:52:24');

-- ----------------------------
-- Table structure for subtasks_match_assignees
-- ----------------------------
DROP TABLE IF EXISTS `subtasks_match_assignees`;
CREATE TABLE `subtasks_match_assignees`  (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `subtask_id` int(10) UNSIGNED NOT NULL,
  `assignee_id` int(10) UNSIGNED NOT NULL,
  `stage_id` int(10) UNSIGNED NULL DEFAULT NULL,
  `created_at` timestamp(0) NULL DEFAULT NULL,
  `updated_at` timestamp(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 4 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of subtasks_match_assignees
-- ----------------------------
INSERT INTO `subtasks_match_assignees` VALUES (1, 2, 27, NULL, NULL, NULL);
INSERT INTO `subtasks_match_assignees` VALUES (2, 2, 23, NULL, NULL, NULL);
INSERT INTO `subtasks_match_assignees` VALUES (3, 2, 19, NULL, NULL, NULL);

-- ----------------------------
-- Table structure for subtasks_match_labels
-- ----------------------------
DROP TABLE IF EXISTS `subtasks_match_labels`;
CREATE TABLE `subtasks_match_labels`  (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `subtask_id` int(10) UNSIGNED NOT NULL,
  `label_id` int(10) UNSIGNED NOT NULL,
  `created_at` timestamp(0) NULL DEFAULT NULL,
  `updated_at` timestamp(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for system_const_project_colors
-- ----------------------------
DROP TABLE IF EXISTS `system_const_project_colors`;
CREATE TABLE `system_const_project_colors`  (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `code` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 46 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of system_const_project_colors
-- ----------------------------
INSERT INTO `system_const_project_colors` VALUES (31, NULL, '#e8423c');
INSERT INTO `system_const_project_colors` VALUES (32, NULL, '#ee4884');
INSERT INTO `system_const_project_colors` VALUES (33, NULL, '#b200ff');
INSERT INTO `system_const_project_colors` VALUES (34, NULL, '#8860c8');
INSERT INTO `system_const_project_colors` VALUES (35, NULL, '#6675c6');
INSERT INTO `system_const_project_colors` VALUES (36, NULL, '#2192e8');
INSERT INTO `system_const_project_colors` VALUES (37, NULL, '#009385');
INSERT INTO `system_const_project_colors` VALUES (38, NULL, '#3f9843');
INSERT INTO `system_const_project_colors` VALUES (39, NULL, '#f9b128');
INSERT INTO `system_const_project_colors` VALUES (40, NULL, '#ff7b4b');
INSERT INTO `system_const_project_colors` VALUES (41, NULL, '#795548');
INSERT INTO `system_const_project_colors` VALUES (42, NULL, '#607d8b');
INSERT INTO `system_const_project_colors` VALUES (43, NULL, '#829aa5');
INSERT INTO `system_const_project_colors` VALUES (44, NULL, '#4a4a4a');
INSERT INTO `system_const_project_colors` VALUES (45, NULL, '#cddc39');

-- ----------------------------
-- Table structure for system_const_task_progresses
-- ----------------------------
DROP TABLE IF EXISTS `system_const_task_progresses`;
CREATE TABLE `system_const_task_progresses`  (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `value` int(11) NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 12 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of system_const_task_progresses
-- ----------------------------
INSERT INTO `system_const_task_progresses` VALUES (1, '0%', 0);
INSERT INTO `system_const_task_progresses` VALUES (2, '10%', 10);
INSERT INTO `system_const_task_progresses` VALUES (3, '20%', 20);
INSERT INTO `system_const_task_progresses` VALUES (4, '30%', 30);
INSERT INTO `system_const_task_progresses` VALUES (5, '40%', 40);
INSERT INTO `system_const_task_progresses` VALUES (6, '50%', 50);
INSERT INTO `system_const_task_progresses` VALUES (7, '60%', 60);
INSERT INTO `system_const_task_progresses` VALUES (8, '70%', 70);
INSERT INTO `system_const_task_progresses` VALUES (9, '80%', 80);
INSERT INTO `system_const_task_progresses` VALUES (10, '90%', 90);
INSERT INTO `system_const_task_progresses` VALUES (11, '100%', 100);

-- ----------------------------
-- Table structure for system_const_tasklist_tags
-- ----------------------------
DROP TABLE IF EXISTS `system_const_tasklist_tags`;
CREATE TABLE `system_const_tasklist_tags`  (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 13 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of system_const_tasklist_tags
-- ----------------------------
INSERT INTO `system_const_tasklist_tags` VALUES (9, 'Mark as private');
INSERT INTO `system_const_tasklist_tags` VALUES (10, 'Display list in Gantt chart');
INSERT INTO `system_const_tasklist_tags` VALUES (11, 'Enable time tracking');
INSERT INTO `system_const_tasklist_tags` VALUES (12, 'Associate a milestone');

-- ----------------------------
-- Table structure for task_repeats
-- ----------------------------
DROP TABLE IF EXISTS `task_repeats`;
CREATE TABLE `task_repeats`  (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for tasklists
-- ----------------------------
DROP TABLE IF EXISTS `tasklists`;
CREATE TABLE `tasklists`  (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `project_id` int(10) UNSIGNED NOT NULL,
  `workflow_id` int(10) UNSIGNED NOT NULL,
  `created_at` timestamp(0) NULL DEFAULT NULL,
  `updated_at` timestamp(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 3 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of tasklists
-- ----------------------------
INSERT INTO `tasklists` VALUES (1, 'test tasklist', 54, 1, NULL, NULL);

-- ----------------------------
-- Table structure for tasklists_match_tags
-- ----------------------------
DROP TABLE IF EXISTS `tasklists_match_tags`;
CREATE TABLE `tasklists_match_tags`  (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `tasklist_id` int(10) UNSIGNED NOT NULL,
  `tag_id` int(10) UNSIGNED NOT NULL,
  `created_at` timestamp(0) NULL DEFAULT NULL,
  `updated_at` timestamp(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for tasks
-- ----------------------------
DROP TABLE IF EXISTS `tasks`;
CREATE TABLE `tasks`  (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `desc` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL,
  `creator_id` int(10) UNSIGNED NOT NULL,
  `project_id` int(10) UNSIGNED NOT NULL,
  `tasklist_id` int(10) UNSIGNED NOT NULL,
  `stage_id` int(10) UNSIGNED NULL DEFAULT NULL,
  `start_date` date NULL DEFAULT NULL,
  `end_date` date NULL DEFAULT NULL,
  `hours` int(10) NULL DEFAULT NULL,
  `minutes` int(10) NULL DEFAULT NULL,
  `progress_id` int(10) NULL DEFAULT NULL,
  `repeat_id` int(10) UNSIGNED NULL DEFAULT NULL,
  `created_at` timestamp(0) NULL DEFAULT NULL,
  `updated_at` timestamp(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 11 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of tasks
-- ----------------------------
INSERT INTO `tasks` VALUES (9, 'test task update 123', 'this is test task updated', 23, 54, 1, 1, '2020-11-17', '2020-11-25', 0, 20, 3, NULL, '2020-11-23 13:17:54', '2020-11-29 18:05:54');
INSERT INTO `tasks` VALUES (10, 'first task', 'this is first task', 23, 54, 1, 2, '2020-11-17', '2020-11-27', 3, NULL, 4, NULL, '2020-11-26 15:39:02', '2020-11-26 15:39:02');

-- ----------------------------
-- Table structure for tasks_match_assignees
-- ----------------------------
DROP TABLE IF EXISTS `tasks_match_assignees`;
CREATE TABLE `tasks_match_assignees`  (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `task_id` int(10) UNSIGNED NOT NULL,
  `assignee_id` int(10) NULL DEFAULT NULL,
  `stage_id` int(10) UNSIGNED NULL DEFAULT NULL,
  `created_at` timestamp(0) NULL DEFAULT NULL,
  `updated_at` timestamp(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 8 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of tasks_match_assignees
-- ----------------------------
INSERT INTO `tasks_match_assignees` VALUES (5, 9, 20, NULL, NULL, NULL);
INSERT INTO `tasks_match_assignees` VALUES (6, 10, 19, NULL, NULL, NULL);
INSERT INTO `tasks_match_assignees` VALUES (7, 10, 23, NULL, NULL, NULL);

-- ----------------------------
-- Table structure for tasks_match_labels
-- ----------------------------
DROP TABLE IF EXISTS `tasks_match_labels`;
CREATE TABLE `tasks_match_labels`  (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `task_id` int(10) UNSIGNED NOT NULL,
  `label_id` int(10) UNSIGNED NOT NULL,
  `created_at` timestamp(0) NULL DEFAULT NULL,
  `updated_at` timestamp(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 8 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for time_statuses
-- ----------------------------
DROP TABLE IF EXISTS `time_statuses`;
CREATE TABLE `time_statuses`  (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 6 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of time_statuses
-- ----------------------------
INSERT INTO `time_statuses` VALUES (1, 'None');
INSERT INTO `time_statuses` VALUES (2, 'Billed');
INSERT INTO `time_statuses` VALUES (3, 'Billable');
INSERT INTO `time_statuses` VALUES (4, 'Non-billable');
INSERT INTO `time_statuses` VALUES (5, 'Void');

-- ----------------------------
-- Table structure for times
-- ----------------------------
DROP TABLE IF EXISTS `times`;
CREATE TABLE `times`  (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `date` date NOT NULL,
  `hours` int(11) NOT NULL,
  `minutes` int(11) NOT NULL,
  `desc` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `creator_id` int(10) UNSIGNED NOT NULL,
  `project_id` int(10) UNSIGNED NOT NULL,
  `timesheet_id` int(10) UNSIGNED NOT NULL,
  `tasklist_id` int(10) UNSIGNED NULL DEFAULT NULL,
  `task_id` int(10) UNSIGNED NULL DEFAULT NULL,
  `subtask_id` int(10) UNSIGNED NULL DEFAULT NULL,
  `status_id` int(10) UNSIGNED NOT NULL,
  `created_at` timestamp(0) NULL DEFAULT NULL,
  `updated_at` timestamp(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 6 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of times
-- ----------------------------
INSERT INTO `times` VALUES (5, '2020-11-30', 2, 20, 'this is second time', 23, 56, 7, NULL, NULL, NULL, 1, '2020-11-30 04:58:08', '2020-11-30 04:58:08');

-- ----------------------------
-- Table structure for timesheets
-- ----------------------------
DROP TABLE IF EXISTS `timesheets`;
CREATE TABLE `timesheets`  (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `hours` int(11) NULL DEFAULT NULL,
  `minutes` int(11) NULL DEFAULT NULL,
  `creator_id` int(10) UNSIGNED NOT NULL,
  `project_id` int(10) UNSIGNED NOT NULL,
  `mark_private` tinyint(1) NOT NULL DEFAULT 0,
  `status` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `created_at` timestamp(0) NULL DEFAULT NULL,
  `updated_at` timestamp(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 8 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of timesheets
-- ----------------------------
INSERT INTO `timesheets` VALUES (6, 'test timesheet', 5, 40, 23, 56, 0, 'active', '2020-11-30 04:40:03', '2020-11-30 04:40:03');
INSERT INTO `timesheets` VALUES (7, 'second timesheet', 4, 40, 23, 56, 0, 'active', '2020-11-30 04:42:16', '2020-11-30 04:42:16');

-- ----------------------------
-- Table structure for timesheets_match_subscribers
-- ----------------------------
DROP TABLE IF EXISTS `timesheets_match_subscribers`;
CREATE TABLE `timesheets_match_subscribers`  (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `timesheet_id` int(10) UNSIGNED NOT NULL,
  `subscriber_id` int(10) NULL DEFAULT NULL,
  `created_at` timestamp(0) NULL DEFAULT NULL,
  `updated_at` timestamp(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for timezones
-- ----------------------------
DROP TABLE IF EXISTS `timezones`;
CREATE TABLE `timezones`  (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 141 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of timezones
-- ----------------------------
INSERT INTO `timezones` VALUES (1, 'Indiana');
INSERT INTO `timezones` VALUES (2, 'Midway Island');
INSERT INTO `timezones` VALUES (3, 'Samoa');
INSERT INTO `timezones` VALUES (4, 'Hawaii');
INSERT INTO `timezones` VALUES (5, 'Alaska');
INSERT INTO `timezones` VALUES (6, 'Pacific Time');
INSERT INTO `timezones` VALUES (7, 'Tijuana');
INSERT INTO `timezones` VALUES (8, 'Arizona');
INSERT INTO `timezones` VALUES (9, 'Chihuahua');
INSERT INTO `timezones` VALUES (10, 'Mazatlan');
INSERT INTO `timezones` VALUES (11, 'Mountain Time');
INSERT INTO `timezones` VALUES (12, 'Central America');
INSERT INTO `timezones` VALUES (13, 'Central Time');
INSERT INTO `timezones` VALUES (14, 'Guadalajara');
INSERT INTO `timezones` VALUES (15, 'Mexico City');
INSERT INTO `timezones` VALUES (16, 'Monterrey');
INSERT INTO `timezones` VALUES (17, 'Saskatchewan');
INSERT INTO `timezones` VALUES (18, 'Bogota');
INSERT INTO `timezones` VALUES (19, 'Eastern Standard Time');
INSERT INTO `timezones` VALUES (20, 'Lima');
INSERT INTO `timezones` VALUES (21, 'Caracas');
INSERT INTO `timezones` VALUES (22, 'Atlantic Time');
INSERT INTO `timezones` VALUES (23, 'La Paz');
INSERT INTO `timezones` VALUES (24, 'Santiago');
INSERT INTO `timezones` VALUES (25, 'Newfoundland');
INSERT INTO `timezones` VALUES (26, 'Buenos Aires');
INSERT INTO `timezones` VALUES (27, 'Georgetown');
INSERT INTO `timezones` VALUES (28, 'Greenland');
INSERT INTO `timezones` VALUES (29, 'Mid-Atlantic');
INSERT INTO `timezones` VALUES (30, 'Azores');
INSERT INTO `timezones` VALUES (31, 'Cape Verde Is');
INSERT INTO `timezones` VALUES (32, 'Casablanca');
INSERT INTO `timezones` VALUES (33, 'Dublin');
INSERT INTO `timezones` VALUES (34, 'Edinburgh');
INSERT INTO `timezones` VALUES (35, 'Lisbon');
INSERT INTO `timezones` VALUES (36, 'London');
INSERT INTO `timezones` VALUES (37, 'Monrovia');
INSERT INTO `timezones` VALUES (38, 'UTC');
INSERT INTO `timezones` VALUES (39, 'Amsterdam');
INSERT INTO `timezones` VALUES (40, 'Belgrade');
INSERT INTO `timezones` VALUES (41, 'Berlin');
INSERT INTO `timezones` VALUES (42, 'Bern');
INSERT INTO `timezones` VALUES (43, 'Bratislava');
INSERT INTO `timezones` VALUES (44, 'Brussels');
INSERT INTO `timezones` VALUES (45, 'Budapest');
INSERT INTO `timezones` VALUES (46, 'Copenhagen');
INSERT INTO `timezones` VALUES (47, 'Ljubljana');
INSERT INTO `timezones` VALUES (48, 'Madrid');
INSERT INTO `timezones` VALUES (49, 'Paris');
INSERT INTO `timezones` VALUES (50, 'Prague');
INSERT INTO `timezones` VALUES (51, 'Rome');
INSERT INTO `timezones` VALUES (52, 'Sarajevo');
INSERT INTO `timezones` VALUES (53, 'Skopje');
INSERT INTO `timezones` VALUES (54, 'Stockholm');
INSERT INTO `timezones` VALUES (55, 'Vienna');
INSERT INTO `timezones` VALUES (56, 'Warsaw');
INSERT INTO `timezones` VALUES (57, 'West Central Africa');
INSERT INTO `timezones` VALUES (58, 'Zagreb');
INSERT INTO `timezones` VALUES (59, 'Athens');
INSERT INTO `timezones` VALUES (60, 'Bucharest');
INSERT INTO `timezones` VALUES (61, 'Cairo');
INSERT INTO `timezones` VALUES (62, 'Harare');
INSERT INTO `timezones` VALUES (63, 'Helsinki');
INSERT INTO `timezones` VALUES (64, 'Istanbul');
INSERT INTO `timezones` VALUES (65, 'Jerusalem');
INSERT INTO `timezones` VALUES (66, 'Kyev');
INSERT INTO `timezones` VALUES (67, 'Minsk');
INSERT INTO `timezones` VALUES (68, 'Pretoria');
INSERT INTO `timezones` VALUES (69, 'Riga');
INSERT INTO `timezones` VALUES (70, 'Sofia');
INSERT INTO `timezones` VALUES (71, 'Tallinn');
INSERT INTO `timezones` VALUES (72, 'Vilnius');
INSERT INTO `timezones` VALUES (73, 'Baghdad');
INSERT INTO `timezones` VALUES (74, 'Kuwait');
INSERT INTO `timezones` VALUES (75, 'Moscow');
INSERT INTO `timezones` VALUES (76, 'Nairobi');
INSERT INTO `timezones` VALUES (77, 'Riyadh');
INSERT INTO `timezones` VALUES (78, 'St.Petersburg');
INSERT INTO `timezones` VALUES (79, 'Volgograd');
INSERT INTO `timezones` VALUES (80, 'Tehran');
INSERT INTO `timezones` VALUES (81, 'Abu Dhabi');
INSERT INTO `timezones` VALUES (82, 'Baku');
INSERT INTO `timezones` VALUES (83, 'Muscat');
INSERT INTO `timezones` VALUES (84, 'Tbilisi');
INSERT INTO `timezones` VALUES (85, 'Yerevan');
INSERT INTO `timezones` VALUES (86, 'Kabul');
INSERT INTO `timezones` VALUES (87, 'Ekaterinburg');
INSERT INTO `timezones` VALUES (88, 'Islamabad');
INSERT INTO `timezones` VALUES (89, 'Karachi');
INSERT INTO `timezones` VALUES (90, 'Tashkent');
INSERT INTO `timezones` VALUES (91, 'Chennai');
INSERT INTO `timezones` VALUES (92, 'Kolkata');
INSERT INTO `timezones` VALUES (93, 'Mumbai');
INSERT INTO `timezones` VALUES (94, 'New Delhi');
INSERT INTO `timezones` VALUES (95, 'Sri Jayawardenepura');
INSERT INTO `timezones` VALUES (96, 'Kathmandu');
INSERT INTO `timezones` VALUES (97, 'Almaty');
INSERT INTO `timezones` VALUES (98, 'Astana');
INSERT INTO `timezones` VALUES (99, 'Dhaka');
INSERT INTO `timezones` VALUES (100, 'Novosibirsk');
INSERT INTO `timezones` VALUES (101, 'Rangoon');
INSERT INTO `timezones` VALUES (102, 'Bangkok');
INSERT INTO `timezones` VALUES (103, 'Hanoi');
INSERT INTO `timezones` VALUES (104, 'Jakarta');
INSERT INTO `timezones` VALUES (105, 'Krasnoyarsk');
INSERT INTO `timezones` VALUES (106, 'Beijing');
INSERT INTO `timezones` VALUES (107, 'Chongqing');
INSERT INTO `timezones` VALUES (108, 'Hong Kong');
INSERT INTO `timezones` VALUES (109, 'Irkutsk');
INSERT INTO `timezones` VALUES (110, 'Kuala Lumpur');
INSERT INTO `timezones` VALUES (111, 'Perth');
INSERT INTO `timezones` VALUES (112, 'Singapore');
INSERT INTO `timezones` VALUES (113, 'Taipei');
INSERT INTO `timezones` VALUES (114, 'Ulaan Bataar');
INSERT INTO `timezones` VALUES (115, 'Urumqi');
INSERT INTO `timezones` VALUES (116, 'Osaka');
INSERT INTO `timezones` VALUES (117, 'Sapporo');
INSERT INTO `timezones` VALUES (118, 'Seoul');
INSERT INTO `timezones` VALUES (119, 'Tokyo');
INSERT INTO `timezones` VALUES (120, 'Yakutsk');
INSERT INTO `timezones` VALUES (121, 'Adelaide');
INSERT INTO `timezones` VALUES (122, 'Darwin');
INSERT INTO `timezones` VALUES (123, 'Brisbane');
INSERT INTO `timezones` VALUES (124, 'Canberra');
INSERT INTO `timezones` VALUES (125, 'Guam');
INSERT INTO `timezones` VALUES (126, 'Hobart');
INSERT INTO `timezones` VALUES (127, 'Melbourne');
INSERT INTO `timezones` VALUES (128, 'Port Moresby');
INSERT INTO `timezones` VALUES (129, 'Sydney');
INSERT INTO `timezones` VALUES (130, 'Vladivostok');
INSERT INTO `timezones` VALUES (131, 'Magadan');
INSERT INTO `timezones` VALUES (132, 'New Caledonia');
INSERT INTO `timezones` VALUES (133, 'Solomon Is');
INSERT INTO `timezones` VALUES (134, 'Auckland');
INSERT INTO `timezones` VALUES (135, 'Fiji');
INSERT INTO `timezones` VALUES (136, 'Kamchatka');
INSERT INTO `timezones` VALUES (137, 'Marshall');
INSERT INTO `timezones` VALUES (138, 'Wellington');
INSERT INTO `timezones` VALUES (139, 'Nuku alofa');
INSERT INTO `timezones` VALUES (140, 'South Australia');

-- ----------------------------
-- Table structure for user_default_project_access_roles
-- ----------------------------
DROP TABLE IF EXISTS `user_default_project_access_roles`;
CREATE TABLE `user_default_project_access_roles`  (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 3 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of user_default_project_access_roles
-- ----------------------------
INSERT INTO `user_default_project_access_roles` VALUES (1, 'Normal User');
INSERT INTO `user_default_project_access_roles` VALUES (2, 'Admin User');

-- ----------------------------
-- Table structure for user_default_project_categories
-- ----------------------------
DROP TABLE IF EXISTS `user_default_project_categories`;
CREATE TABLE `user_default_project_categories`  (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 2 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of user_default_project_categories
-- ----------------------------
INSERT INTO `user_default_project_categories` VALUES (1, 'Uncategorized');

-- ----------------------------
-- Table structure for user_default_project_statuses
-- ----------------------------
DROP TABLE IF EXISTS `user_default_project_statuses`;
CREATE TABLE `user_default_project_statuses`  (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 2 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of user_default_project_statuses
-- ----------------------------
INSERT INTO `user_default_project_statuses` VALUES (1, 'Active');

-- ----------------------------
-- Table structure for user_default_task_labels
-- ----------------------------
DROP TABLE IF EXISTS `user_default_task_labels`;
CREATE TABLE `user_default_task_labels`  (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `code` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 6 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of user_default_task_labels
-- ----------------------------
INSERT INTO `user_default_task_labels` VALUES (1, 'High', '#BF0000');
INSERT INTO `user_default_task_labels` VALUES (2, 'In-progress', '#149E60');
INSERT INTO `user_default_task_labels` VALUES (3, 'Low', '#999999');
INSERT INTO `user_default_task_labels` VALUES (4, 'Medium', '#FBB008');
INSERT INTO `user_default_task_labels` VALUES (5, 'Urgent', '#FF6600');

-- ----------------------------
-- Table structure for user_default_task_stages
-- ----------------------------
DROP TABLE IF EXISTS `user_default_task_stages`;
CREATE TABLE `user_default_task_stages`  (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `code` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `workflow_id` int(10) UNSIGNED NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 11 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of user_default_task_stages
-- ----------------------------
INSERT INTO `user_default_task_stages` VALUES (6, 'To-Do', '#3C4856', 1);
INSERT INTO `user_default_task_stages` VALUES (7, 'Done', '#14b112', 1);
INSERT INTO `user_default_task_stages` VALUES (8, 'Backlog', '#2DAE6E', 2);
INSERT INTO `user_default_task_stages` VALUES (9, 'In progress', '#149E60', 2);
INSERT INTO `user_default_task_stages` VALUES (10, 'Complete', '#AE2D45', 2);

-- ----------------------------
-- Table structure for user_default_task_workflows
-- ----------------------------
DROP TABLE IF EXISTS `user_default_task_workflows`;
CREATE TABLE `user_default_task_workflows`  (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 10 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of user_default_task_workflows
-- ----------------------------
INSERT INTO `user_default_task_workflows` VALUES (1, 'Basic workflow');
INSERT INTO `user_default_task_workflows` VALUES (2, '3-stage Kanban workflow');

-- ----------------------------
-- Table structure for user_preferences
-- ----------------------------
DROP TABLE IF EXISTS `user_preferences`;
CREATE TABLE `user_preferences`  (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `activity_desktop_sound` tinyint(1) NOT NULL,
  `activity_notification` tinyint(1) NOT NULL,
  `chat_desktop_sound` tinyint(1) NOT NULL,
  `chat_notification` tinyint(1) NOT NULL,
  `nav_bar_position` enum('left','top') CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'left',
  `project_progress` enum('Never send me project progress report','Send me project progress report daily','Send me project progress report weekly','Send me project progress report monthly') CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_copy` tinyint(1) NOT NULL DEFAULT 0,
  `email_daily` tinyint(1) NOT NULL DEFAULT 0,
  `email_product` tinyint(1) NOT NULL DEFAULT 0,
  `account_activity` enum('Never send me email notifications','Send me email digest after every one hour','Send me email digest after every four hours','Immediately send me email notifications') CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for user_project_access_roles
-- ----------------------------
DROP TABLE IF EXISTS `user_project_access_roles`;
CREATE TABLE `user_project_access_roles`  (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` int(10) UNSIGNED NOT NULL,
  `created_at` timestamp(0) NULL DEFAULT NULL,
  `updated_at` timestamp(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 47 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of user_project_access_roles
-- ----------------------------
INSERT INTO `user_project_access_roles` VALUES (9, 'Normal User', 5, '2020-11-23 11:46:08', '2020-11-23 11:46:08');
INSERT INTO `user_project_access_roles` VALUES (10, 'Admin User', 5, '2020-11-23 11:46:08', '2020-11-23 11:46:08');
INSERT INTO `user_project_access_roles` VALUES (13, 'Normal User', 11, NULL, NULL);
INSERT INTO `user_project_access_roles` VALUES (14, 'Admin User', 11, NULL, NULL);
INSERT INTO `user_project_access_roles` VALUES (15, 'Normal User', 10, NULL, NULL);
INSERT INTO `user_project_access_roles` VALUES (16, 'Admin User', 10, NULL, NULL);
INSERT INTO `user_project_access_roles` VALUES (17, 'Normal User', 11, NULL, NULL);
INSERT INTO `user_project_access_roles` VALUES (18, 'Admin User', 11, NULL, NULL);
INSERT INTO `user_project_access_roles` VALUES (19, 'Normal User', 12, NULL, NULL);
INSERT INTO `user_project_access_roles` VALUES (20, 'Admin User', 12, NULL, NULL);
INSERT INTO `user_project_access_roles` VALUES (21, 'Normal User', 13, NULL, NULL);
INSERT INTO `user_project_access_roles` VALUES (22, 'Admin User', 13, NULL, NULL);
INSERT INTO `user_project_access_roles` VALUES (23, 'Normal User', 14, NULL, NULL);
INSERT INTO `user_project_access_roles` VALUES (24, 'Admin User', 14, NULL, NULL);
INSERT INTO `user_project_access_roles` VALUES (25, 'Normal User', 15, NULL, NULL);
INSERT INTO `user_project_access_roles` VALUES (26, 'Admin User', 15, NULL, NULL);
INSERT INTO `user_project_access_roles` VALUES (27, 'Normal User', 16, NULL, NULL);
INSERT INTO `user_project_access_roles` VALUES (28, 'Admin User', 16, NULL, NULL);
INSERT INTO `user_project_access_roles` VALUES (29, 'Normal User', 17, NULL, NULL);
INSERT INTO `user_project_access_roles` VALUES (30, 'Admin User', 17, NULL, NULL);
INSERT INTO `user_project_access_roles` VALUES (31, 'Normal User', 18, NULL, NULL);
INSERT INTO `user_project_access_roles` VALUES (32, 'Admin User', 18, NULL, NULL);
INSERT INTO `user_project_access_roles` VALUES (33, 'Normal User', 19, NULL, NULL);
INSERT INTO `user_project_access_roles` VALUES (34, 'Admin User', 19, NULL, NULL);
INSERT INTO `user_project_access_roles` VALUES (35, 'Normal User', 20, NULL, NULL);
INSERT INTO `user_project_access_roles` VALUES (36, 'Admin User', 20, NULL, NULL);
INSERT INTO `user_project_access_roles` VALUES (37, 'Normal User', 21, NULL, NULL);
INSERT INTO `user_project_access_roles` VALUES (38, 'Admin User', 21, NULL, NULL);
INSERT INTO `user_project_access_roles` VALUES (39, 'Normal User', 22, NULL, NULL);
INSERT INTO `user_project_access_roles` VALUES (40, 'Admin User', 22, NULL, NULL);
INSERT INTO `user_project_access_roles` VALUES (41, 'Normal User', 23, NULL, NULL);
INSERT INTO `user_project_access_roles` VALUES (42, 'Admin User', 23, NULL, NULL);
INSERT INTO `user_project_access_roles` VALUES (43, 'Normal User', 24, NULL, NULL);
INSERT INTO `user_project_access_roles` VALUES (44, 'Admin User', 24, NULL, NULL);
INSERT INTO `user_project_access_roles` VALUES (45, 'Normal User', 25, NULL, NULL);
INSERT INTO `user_project_access_roles` VALUES (46, 'Admin User', 25, NULL, NULL);

-- ----------------------------
-- Table structure for user_project_categories
-- ----------------------------
DROP TABLE IF EXISTS `user_project_categories`;
CREATE TABLE `user_project_categories`  (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` int(10) UNSIGNED NOT NULL,
  `created_at` timestamp(0) NULL DEFAULT NULL,
  `updated_at` timestamp(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 23 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of user_project_categories
-- ----------------------------
INSERT INTO `user_project_categories` VALUES (1, 'Uncategorized', 5, '2020-11-25 18:22:44', '2020-11-25 18:22:44');
INSERT INTO `user_project_categories` VALUES (2, 'Categorized', 5, '2020-11-25 19:27:29', '2020-11-25 19:27:29');
INSERT INTO `user_project_categories` VALUES (5, 'Uncategorized', 11, NULL, NULL);
INSERT INTO `user_project_categories` VALUES (6, 'Uncategorized', 10, NULL, NULL);
INSERT INTO `user_project_categories` VALUES (7, 'Uncategorized', 11, NULL, NULL);
INSERT INTO `user_project_categories` VALUES (8, 'Uncategorized', 12, NULL, NULL);
INSERT INTO `user_project_categories` VALUES (9, 'Uncategorized', 13, NULL, NULL);
INSERT INTO `user_project_categories` VALUES (10, 'Uncategorized', 14, NULL, NULL);
INSERT INTO `user_project_categories` VALUES (11, 'Uncategorized', 15, NULL, NULL);
INSERT INTO `user_project_categories` VALUES (12, 'Uncategorized', 16, NULL, NULL);
INSERT INTO `user_project_categories` VALUES (13, 'Uncategorized', 17, NULL, NULL);
INSERT INTO `user_project_categories` VALUES (14, 'Uncategorized', 18, NULL, NULL);
INSERT INTO `user_project_categories` VALUES (15, 'Uncategorized', 19, NULL, NULL);
INSERT INTO `user_project_categories` VALUES (16, 'Uncategorized', 20, NULL, NULL);
INSERT INTO `user_project_categories` VALUES (17, 'Uncategorized', 21, NULL, NULL);
INSERT INTO `user_project_categories` VALUES (18, 'Uncategorized', 22, NULL, NULL);
INSERT INTO `user_project_categories` VALUES (19, 'Uncategorized', 23, NULL, NULL);
INSERT INTO `user_project_categories` VALUES (20, 'Uncategorized', 24, NULL, NULL);
INSERT INTO `user_project_categories` VALUES (21, 'Uncategorized', 25, NULL, NULL);
INSERT INTO `user_project_categories` VALUES (22, 'main category', 5, '2020-11-30 05:01:53', '2020-11-30 05:01:53');

-- ----------------------------
-- Table structure for user_project_statuses
-- ----------------------------
DROP TABLE IF EXISTS `user_project_statuses`;
CREATE TABLE `user_project_statuses`  (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` int(10) UNSIGNED NOT NULL,
  `created_at` timestamp(0) NULL DEFAULT NULL,
  `updated_at` timestamp(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 27 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of user_project_statuses
-- ----------------------------
INSERT INTO `user_project_statuses` VALUES (1, 'Active', 5, '2020-11-25 19:57:29', '2020-11-25 19:57:29');
INSERT INTO `user_project_statuses` VALUES (2, 'Inactive', 5, '2020-11-25 20:18:58', '2020-11-25 20:18:58');
INSERT INTO `user_project_statuses` VALUES (10, 'Active', 11, NULL, NULL);
INSERT INTO `user_project_statuses` VALUES (11, 'Active', 10, NULL, NULL);
INSERT INTO `user_project_statuses` VALUES (12, 'Active', 11, NULL, NULL);
INSERT INTO `user_project_statuses` VALUES (13, 'Active', 12, NULL, NULL);
INSERT INTO `user_project_statuses` VALUES (14, 'Active', 13, NULL, NULL);
INSERT INTO `user_project_statuses` VALUES (15, 'Active', 14, NULL, NULL);
INSERT INTO `user_project_statuses` VALUES (16, 'Active', 15, NULL, NULL);
INSERT INTO `user_project_statuses` VALUES (17, 'Active', 16, NULL, NULL);
INSERT INTO `user_project_statuses` VALUES (18, 'Active', 17, NULL, NULL);
INSERT INTO `user_project_statuses` VALUES (19, 'Active', 18, NULL, NULL);
INSERT INTO `user_project_statuses` VALUES (20, 'Active', 19, NULL, NULL);
INSERT INTO `user_project_statuses` VALUES (21, 'Active', 20, NULL, NULL);
INSERT INTO `user_project_statuses` VALUES (22, 'Active', 21, NULL, NULL);
INSERT INTO `user_project_statuses` VALUES (23, 'Active', 22, NULL, NULL);
INSERT INTO `user_project_statuses` VALUES (24, 'Active', 23, NULL, NULL);
INSERT INTO `user_project_statuses` VALUES (25, 'Active', 24, NULL, NULL);
INSERT INTO `user_project_statuses` VALUES (26, 'Active', 25, NULL, NULL);

-- ----------------------------
-- Table structure for user_task_labels
-- ----------------------------
DROP TABLE IF EXISTS `user_task_labels`;
CREATE TABLE `user_task_labels`  (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `code` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` int(10) UNSIGNED NOT NULL,
  `type` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `created_at` timestamp(0) NULL DEFAULT NULL,
  `updated_at` timestamp(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 6 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of user_task_labels
-- ----------------------------
INSERT INTO `user_task_labels` VALUES (1, 'High', '#BF0000', 5, 'Default', NULL, NULL);
INSERT INTO `user_task_labels` VALUES (2, 'In-progress', '#149E60', 5, 'Default', NULL, NULL);
INSERT INTO `user_task_labels` VALUES (3, 'Low', '#999999', 5, 'Default', NULL, NULL);
INSERT INTO `user_task_labels` VALUES (4, 'Medium', '#FBB008', 5, 'Default', NULL, NULL);
INSERT INTO `user_task_labels` VALUES (5, 'Urgent', '#FF6600', 5, 'Default', NULL, NULL);

-- ----------------------------
-- Table structure for user_task_stages
-- ----------------------------
DROP TABLE IF EXISTS `user_task_stages`;
CREATE TABLE `user_task_stages`  (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` int(10) UNSIGNED NOT NULL,
  `workflow_id` int(10) UNSIGNED NOT NULL,
  `type` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `created_at` timestamp(0) NULL DEFAULT NULL,
  `updated_at` timestamp(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 71 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of user_task_stages
-- ----------------------------
INSERT INTO `user_task_stages` VALUES (1, 'To-Do', 5, 1, 'Default', NULL, NULL);
INSERT INTO `user_task_stages` VALUES (2, 'Done', 5, 1, 'Default', NULL, NULL);
INSERT INTO `user_task_stages` VALUES (3, 'Backlog', 5, 2, 'Default', NULL, NULL);
INSERT INTO `user_task_stages` VALUES (4, 'In progress', 5, 2, 'Default', NULL, NULL);
INSERT INTO `user_task_stages` VALUES (5, 'Complete', 5, 2, 'Default', NULL, NULL);
INSERT INTO `user_task_stages` VALUES (6, 'To-Do', 11, 3, 'Default', NULL, NULL);
INSERT INTO `user_task_stages` VALUES (7, 'Done', 11, 3, 'Default', NULL, NULL);
INSERT INTO `user_task_stages` VALUES (8, 'Backlog', 11, 4, 'Default', NULL, NULL);
INSERT INTO `user_task_stages` VALUES (9, 'In progress', 11, 4, 'Default', NULL, NULL);
INSERT INTO `user_task_stages` VALUES (10, 'Complete', 11, 4, 'Default', NULL, NULL);
INSERT INTO `user_task_stages` VALUES (11, 'To-Do', 12, 5, 'Default', NULL, NULL);
INSERT INTO `user_task_stages` VALUES (12, 'Done', 12, 5, 'Default', NULL, NULL);
INSERT INTO `user_task_stages` VALUES (13, 'Backlog', 12, 6, 'Default', NULL, NULL);
INSERT INTO `user_task_stages` VALUES (14, 'In progress', 12, 6, 'Default', NULL, NULL);
INSERT INTO `user_task_stages` VALUES (15, 'Complete', 12, 6, 'Default', NULL, NULL);
INSERT INTO `user_task_stages` VALUES (16, 'To-Do', 15, 7, 'Default', NULL, NULL);
INSERT INTO `user_task_stages` VALUES (17, 'Done', 15, 7, 'Default', NULL, NULL);
INSERT INTO `user_task_stages` VALUES (18, 'Backlog', 15, 8, 'Default', NULL, NULL);
INSERT INTO `user_task_stages` VALUES (19, 'In progress', 15, 8, 'Default', NULL, NULL);
INSERT INTO `user_task_stages` VALUES (20, 'Complete', 15, 8, 'Default', NULL, NULL);
INSERT INTO `user_task_stages` VALUES (21, 'To-Do', 16, 9, 'Default', NULL, NULL);
INSERT INTO `user_task_stages` VALUES (22, 'Done', 16, 9, 'Default', NULL, NULL);
INSERT INTO `user_task_stages` VALUES (23, 'Backlog', 16, 10, 'Default', NULL, NULL);
INSERT INTO `user_task_stages` VALUES (24, 'In progress', 16, 10, 'Default', NULL, NULL);
INSERT INTO `user_task_stages` VALUES (25, 'Complete', 16, 10, 'Default', NULL, NULL);
INSERT INTO `user_task_stages` VALUES (26, 'To-Do', 17, 11, 'Default', NULL, NULL);
INSERT INTO `user_task_stages` VALUES (27, 'Done', 17, 11, 'Default', NULL, NULL);
INSERT INTO `user_task_stages` VALUES (28, 'Backlog', 17, 12, 'Default', NULL, NULL);
INSERT INTO `user_task_stages` VALUES (29, 'In progress', 17, 12, 'Default', NULL, NULL);
INSERT INTO `user_task_stages` VALUES (30, 'Complete', 17, 12, 'Default', NULL, NULL);
INSERT INTO `user_task_stages` VALUES (31, 'To-Do', 18, 13, 'Default', NULL, NULL);
INSERT INTO `user_task_stages` VALUES (32, 'Done', 18, 13, 'Default', NULL, NULL);
INSERT INTO `user_task_stages` VALUES (33, 'Backlog', 18, 14, 'Default', NULL, NULL);
INSERT INTO `user_task_stages` VALUES (34, 'In progress', 18, 14, 'Default', NULL, NULL);
INSERT INTO `user_task_stages` VALUES (35, 'Complete', 18, 14, 'Default', NULL, NULL);
INSERT INTO `user_task_stages` VALUES (36, 'To-Do', 19, 15, 'Default', NULL, NULL);
INSERT INTO `user_task_stages` VALUES (37, 'Done', 19, 15, 'Default', NULL, NULL);
INSERT INTO `user_task_stages` VALUES (38, 'Backlog', 19, 16, 'Default', NULL, NULL);
INSERT INTO `user_task_stages` VALUES (39, 'In progress', 19, 16, 'Default', NULL, NULL);
INSERT INTO `user_task_stages` VALUES (40, 'Complete', 19, 16, 'Default', NULL, NULL);
INSERT INTO `user_task_stages` VALUES (41, 'To-Do', 20, 17, 'Default', NULL, NULL);
INSERT INTO `user_task_stages` VALUES (42, 'Done', 20, 17, 'Default', NULL, NULL);
INSERT INTO `user_task_stages` VALUES (43, 'Backlog', 20, 18, 'Default', NULL, NULL);
INSERT INTO `user_task_stages` VALUES (44, 'In progress', 20, 18, 'Default', NULL, NULL);
INSERT INTO `user_task_stages` VALUES (45, 'Complete', 20, 18, 'Default', NULL, NULL);
INSERT INTO `user_task_stages` VALUES (46, 'To-Do', 21, 19, 'Default', NULL, NULL);
INSERT INTO `user_task_stages` VALUES (47, 'Done', 21, 19, 'Default', NULL, NULL);
INSERT INTO `user_task_stages` VALUES (48, 'Backlog', 21, 20, 'Default', NULL, NULL);
INSERT INTO `user_task_stages` VALUES (49, 'In progress', 21, 20, 'Default', NULL, NULL);
INSERT INTO `user_task_stages` VALUES (50, 'Complete', 21, 20, 'Default', NULL, NULL);
INSERT INTO `user_task_stages` VALUES (51, 'To-Do', 22, 21, 'Default', NULL, NULL);
INSERT INTO `user_task_stages` VALUES (52, 'Done', 22, 21, 'Default', NULL, NULL);
INSERT INTO `user_task_stages` VALUES (53, 'Backlog', 22, 22, 'Default', NULL, NULL);
INSERT INTO `user_task_stages` VALUES (54, 'In progress', 22, 22, 'Default', NULL, NULL);
INSERT INTO `user_task_stages` VALUES (55, 'Complete', 22, 22, 'Default', NULL, NULL);
INSERT INTO `user_task_stages` VALUES (56, 'To-Do', 23, 23, 'Default', NULL, NULL);
INSERT INTO `user_task_stages` VALUES (57, 'Done', 23, 23, 'Default', NULL, NULL);
INSERT INTO `user_task_stages` VALUES (58, 'Backlog', 23, 24, 'Default', NULL, NULL);
INSERT INTO `user_task_stages` VALUES (59, 'In progress', 23, 24, 'Default', NULL, NULL);
INSERT INTO `user_task_stages` VALUES (60, 'Complete', 23, 24, 'Default', NULL, NULL);
INSERT INTO `user_task_stages` VALUES (61, 'To-Do', 24, 25, 'Default', NULL, NULL);
INSERT INTO `user_task_stages` VALUES (62, 'Done', 24, 25, 'Default', NULL, NULL);
INSERT INTO `user_task_stages` VALUES (63, 'Backlog', 24, 26, 'Default', NULL, NULL);
INSERT INTO `user_task_stages` VALUES (64, 'In progress', 24, 26, 'Default', NULL, NULL);
INSERT INTO `user_task_stages` VALUES (65, 'Complete', 24, 26, 'Default', NULL, NULL);
INSERT INTO `user_task_stages` VALUES (66, 'To-Do', 25, 27, 'Default', NULL, NULL);
INSERT INTO `user_task_stages` VALUES (67, 'Done', 25, 27, 'Default', NULL, NULL);
INSERT INTO `user_task_stages` VALUES (68, 'Backlog', 25, 28, 'Default', NULL, NULL);
INSERT INTO `user_task_stages` VALUES (69, 'In progress', 25, 28, 'Default', NULL, NULL);
INSERT INTO `user_task_stages` VALUES (70, 'Complete', 25, 28, 'Default', NULL, NULL);

-- ----------------------------
-- Table structure for user_task_workflows
-- ----------------------------
DROP TABLE IF EXISTS `user_task_workflows`;
CREATE TABLE `user_task_workflows`  (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` int(10) UNSIGNED NOT NULL,
  `type` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `created_at` timestamp(0) NULL DEFAULT NULL,
  `updated_at` timestamp(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 29 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of user_task_workflows
-- ----------------------------
INSERT INTO `user_task_workflows` VALUES (1, 'Basic workflow', 5, 'Default', NULL, NULL);
INSERT INTO `user_task_workflows` VALUES (2, '3-stage Kanban workflow', 5, 'Default', NULL, NULL);
INSERT INTO `user_task_workflows` VALUES (3, 'Basic workflow', 11, 'Default', NULL, NULL);
INSERT INTO `user_task_workflows` VALUES (4, '3-stage Kanban workflow', 11, 'Default', NULL, NULL);
INSERT INTO `user_task_workflows` VALUES (5, 'Basic workflow', 12, 'Default', NULL, NULL);
INSERT INTO `user_task_workflows` VALUES (6, '3-stage Kanban workflow', 12, 'Default', NULL, NULL);
INSERT INTO `user_task_workflows` VALUES (7, 'Basic workflow', 15, 'Default', NULL, NULL);
INSERT INTO `user_task_workflows` VALUES (8, '3-stage Kanban workflow', 15, 'Default', NULL, NULL);
INSERT INTO `user_task_workflows` VALUES (9, 'Basic workflow', 16, 'Default', NULL, NULL);
INSERT INTO `user_task_workflows` VALUES (10, '3-stage Kanban workflow', 16, 'Default', NULL, NULL);
INSERT INTO `user_task_workflows` VALUES (11, 'Basic workflow', 17, 'Default', NULL, NULL);
INSERT INTO `user_task_workflows` VALUES (12, '3-stage Kanban workflow', 17, 'Default', NULL, NULL);
INSERT INTO `user_task_workflows` VALUES (13, 'Basic workflow', 18, 'Default', NULL, NULL);
INSERT INTO `user_task_workflows` VALUES (14, '3-stage Kanban workflow', 18, 'Default', NULL, NULL);
INSERT INTO `user_task_workflows` VALUES (15, 'Basic workflow', 19, 'Default', NULL, NULL);
INSERT INTO `user_task_workflows` VALUES (16, '3-stage Kanban workflow', 19, 'Default', NULL, NULL);
INSERT INTO `user_task_workflows` VALUES (17, 'Basic workflow', 20, 'Default', NULL, NULL);
INSERT INTO `user_task_workflows` VALUES (18, '3-stage Kanban workflow', 20, 'Default', NULL, NULL);
INSERT INTO `user_task_workflows` VALUES (19, 'Basic workflow', 21, 'Default', NULL, NULL);
INSERT INTO `user_task_workflows` VALUES (20, '3-stage Kanban workflow', 21, 'Default', NULL, NULL);
INSERT INTO `user_task_workflows` VALUES (21, 'Basic workflow', 22, 'Default', NULL, NULL);
INSERT INTO `user_task_workflows` VALUES (22, '3-stage Kanban workflow', 22, 'Default', NULL, NULL);
INSERT INTO `user_task_workflows` VALUES (23, 'Basic workflow', 23, 'Default', NULL, NULL);
INSERT INTO `user_task_workflows` VALUES (24, '3-stage Kanban workflow', 23, 'Default', NULL, NULL);
INSERT INTO `user_task_workflows` VALUES (25, 'Basic workflow', 24, 'Default', NULL, NULL);
INSERT INTO `user_task_workflows` VALUES (26, '3-stage Kanban workflow', 24, 'Default', NULL, NULL);
INSERT INTO `user_task_workflows` VALUES (27, 'Basic workflow', 25, 'Default', NULL, NULL);
INSERT INTO `user_task_workflows` VALUES (28, '3-stage Kanban workflow', 25, 'Default', NULL, NULL);

-- ----------------------------
-- Table structure for users
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users`  (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `photo` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `domain` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `role` enum('Admin','User') CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'User',
  `created_at` timestamp(0) NULL DEFAULT NULL,
  `updated_at` timestamp(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 26 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of users
-- ----------------------------
INSERT INTO `users` VALUES (5, 'Segunfunmi Oyedele', 'eastsea1020n@gmail.com', '$2y$10$uaopEhu9HzXqnucyVcOa9OqxOV1v4GuY5bxj9zcKi1OKVSx.tR5fe', NULL, 'segunoye.projhub.com', 'User', '2020-11-23 11:46:08', '2020-11-23 11:46:08');
INSERT INTO `users` VALUES (6, 'common user', 'user6@gmail.com', '$2y$10$BZGNtcl5eI8QPfHxYjloXeVvnXEUqnUk6jYBegxo3Du2tT7cZsCFq', NULL, 'user6.projhub.com', 'User', '2020-11-27 09:17:22', '2020-11-27 09:17:22');
INSERT INTO `users` VALUES (7, 'common user', 'user7@gmail.com', '$2y$10$Fzm3mSio5k4lYc2IH.PBLewkQQw248e.oZZ0xWtd05EIaC5hrMJFu', NULL, 'user7.projhub.com', 'User', '2020-11-27 09:17:52', '2020-11-27 09:17:52');
INSERT INTO `users` VALUES (8, 'common user', 'user8@gmail.com', '$2y$10$NnCTRGAp/TlButfoiyG/wOh28LLRZmjEFiXfj..KEun9EC.MqY.7a', NULL, 'user8.projhub.com', 'User', '2020-11-27 10:44:15', '2020-11-27 10:44:15');
INSERT INTO `users` VALUES (9, 'common user', 'user9@gmail.com', '$2y$10$wKHNNGuOmO5JIJvQPBsYBOB.ER8whEMDgzuOxjj2K.Qgzb/K.jHOS', NULL, 'user9.projhub.com', 'User', '2020-11-27 10:49:52', '2020-11-27 10:49:52');
INSERT INTO `users` VALUES (10, 'common user', 'user10@gmail.com', '$2y$10$c5qUuQMhxfNiQoQ1jrDb4OaEx3KhjrxkCAElVLn42pFdyGoXU.Lu2', NULL, 'user10.projhub.com', 'User', '2020-11-27 12:23:11', '2020-11-27 12:23:11');
INSERT INTO `users` VALUES (11, 'common user', 'user11@gmail.com', '$2y$10$mKtCBCuHIMX7x12yZrceN.IMWpC7e4Nn92MtlP/BeBy/PUNecDP5i', NULL, 'user11.projhub.com', 'User', '2020-11-27 12:40:57', '2020-11-27 12:40:57');
INSERT INTO `users` VALUES (12, 'common user', 'user12@gmail.com', '$2y$10$4Hvnh6NX/OrQzHXsusyqMu1vpwtLNo1Mcp/j9y7ruu6S5c6Z35916', NULL, 'user12.projhub.com', 'User', '2020-11-28 08:39:07', '2020-11-28 08:39:07');
INSERT INTO `users` VALUES (15, 'common user', 'user13@gmail.com', '$2y$10$okdXskQDpA/pcD5MnRdrsOMgUKUo6Em5ZGXn2/rhS/Xqfs975bYu2', NULL, 'user13.projhub.com', 'User', '2020-11-28 10:32:49', '2020-11-28 10:32:49');
INSERT INTO `users` VALUES (16, 'common user', 'user14@gmail.com', '$2y$10$5.3v5m5eJ95fY9.HniYGTOBHL2X3tpEjjSzHZXD0QIF76AJO64u7a', NULL, 'user14.projhub.com', 'User', '2020-11-28 10:34:57', '2020-11-28 10:34:57');
INSERT INTO `users` VALUES (17, 'common user', 'user16@gmail.com', '$2y$10$tcaswG2VeFsW2S2GkFwjh.g6suzwri4/MfjawBX7jBtkzIVZ0hDLm', NULL, 'user16.projhub.com', 'User', '2020-11-28 10:37:43', '2020-11-28 10:37:43');
INSERT INTO `users` VALUES (18, 'common user', 'user17@gmail.com', '$2y$10$YmcNaqeKJCJUEYx95Z87F.vU9lZuHtlFRybLIqL9X12VfWc9xLGES', NULL, 'user17.projhub.com', 'User', '2020-11-28 10:39:04', '2020-11-28 10:39:04');
INSERT INTO `users` VALUES (19, 'common user', 'user18@gmail.com', '$2y$10$nnjZfJZRHzHVlOfy10UiN./Uf9gQOrL2LXJ68gzZjW8OPVm90bley', NULL, 'user18.projhub.com', 'User', '2020-11-28 10:42:51', '2020-11-28 10:42:51');
INSERT INTO `users` VALUES (20, 'common user', 'user19@gmail.com', '$2y$10$615Mxo46OgPGjj3KQbOIheF8itSV7XOaSwBDzMwBiqtNYQpdIaZG2', NULL, 'user19.projhub.com', 'User', '2020-11-28 10:44:24', '2020-11-28 10:44:24');
INSERT INTO `users` VALUES (21, 'common user', 'user20@gmail.com', '$2y$10$s/rm7gFMjmzhhIh2GP4J6OwE34Mp.8I4uLd/9vqkaWh8Y5Ma4lxSu', NULL, 'user20.projhub.com', 'User', '2020-11-28 13:04:21', '2020-11-28 13:04:21');
INSERT INTO `users` VALUES (22, 'common user', 'user21@gmail.com', '$2y$10$qtzy1//2BEartrA9Rq8OeOfZq/8ElX9MEtjz22PyA.wuwjNORuXEi', NULL, 'user21.projhub.com', 'User', '2020-11-28 13:05:46', '2020-11-28 13:05:46');
INSERT INTO `users` VALUES (23, 'common user', 'user22@gmail.com', '$2y$10$Oe5tQIa37FkY7Dvu09SV0uTi9RTB8n61Yys5RcOATcUE4.OM.ffTO', NULL, 'user22.projhub.com', 'User', '2020-11-28 13:08:35', '2020-11-28 13:08:35');
INSERT INTO `users` VALUES (24, 'common user', 'user23@gmail.com', '$2y$10$esfLytc5I66ET6gd1aU53urYrl.NYAucTHLTehF9VuvH8yZH6qIUC', NULL, 'user23.projhub.com', 'User', '2020-11-30 00:47:38', '2020-11-30 00:47:38');
INSERT INTO `users` VALUES (25, 'common user', 'user24@gmail.com', '$2y$10$0qEl8lncwreFcmeHiSfg6OshzcOK5dkDa64j97cZQNBKW5jttpkyK', NULL, 'user24.projhub.com', 'User', '2020-11-30 00:48:40', '2020-11-30 00:48:40');

SET FOREIGN_KEY_CHECKS = 1;
