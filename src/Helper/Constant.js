export const AppStrings = {
  welcome_message: "Hi, Welcome back",
  // Auth Pages
  term_and_conditon: "I agree to the terms and conditions",
  forgot_password: "Forgot Password?",
  dont_have_acc: "Don’t have an account?",
  already_have_acc: "Already have an account?",
  login_statement: "Please enter your email id  and password",
  forgot_statement: "No worries, we’ll send you reset instructions.",
  reset_statement: "Enter a new password below & we’ll log you in asap!",
  reset_title: "Set New Password ",
  Enter_OTP: "Enter OTP",
  send_OTP: "Send OTP",

  // Input Label
  email: "Email",
  email_Id: "Email Id",
  password: "Password",
  FullName: "Name",
  FirstName: "FirstName",
  LastName: "LastName",
  address: "Address",
  contact_number: "Contact Number",
  reset_password: "Reset Password",

  //  Input Placholders
  email_placeholder: "Enter your email address",
  FirstName_placeholder: "FirstName",
  LastName_placeholder: "LastName",
  password_placeholder: "New Password ",
  confirm_password_placeholder: "Confirm New Password",
  address_placeholder: "Enter your address",
  contact_number_placeholder: "Enter your contact number",
  FullName_placeholder: "Enter your FullName",
  gender_placeholder: "Select your gender",
  search_here: "Search here",

  // BtnInnerText
  login: "Login",
  register: "Register",
  done: "Done",
  create: "Create",
  cancel: "Cancel",
  deactivate: "Deactivate",
  Add_user: "Add User",
  submit: "Submit",
  update: "Update",
  successful: "Successful",
  pending: "Pending",
  created_notification: "Created Notification",
  all_notification: "All Notification",
  back: "Back",
  active: "Active",
  notification: "Notification",

  // Dahbaord
  monthly_subscription: "Monthly Subscription",
  total_user: "Total Users",
  newly_e_books: "Newly Added E-books",
  total_institutes: "Total Institutes",
  subscription_buying_users: "Subscription Buying users",
  graph_users_overview: "Users Overview",
  Total: "Total",
  overviewLable_1: "Total Active Users",
  overviewLable_2: "Total Inactive Users",
  subscriptionLabel_1: "Monthly",
  subscriptionLabel_2: "Monthly",
  subscriptionLabel_3: "Monthly",
  topCategoriesOverviewLabel_1: "Investment",
  topCategoriesOverviewLabel_2: "Comedy",
  topCategoriesOverviewLabel_3: "Travel",
  topCategoriesOverviewLabel_4: "Inspiration",
  topCategoriesOverviewLabel_5: "Horror",
  active_deactive_users: "Active Deactive users",
  top_categories_title: "Top 5 categories",
  top_categories_desc: "Users reading this categories books most",
  create_notification: "Create Notification",

  payment_tracking: "Payment Tracking",

  // Messages
  confirmation_deactive_user:
    "Are you sure do you want to deactivate the user?",

  notification_update_messge: "Notification has been added successfully!",

  // user page
  Add_new_user: "Add New User",
  user_added_message: "User has been added successfully!",
  profile_info_updation_message:
    "User information has been updated successfully!",

  // institutes page
  add_institute: "Add Institute",
  add_new_institute: "Add new institute",
  Account_created_on: "Account Created on",
  institute_users: "Institute users",
  subscribed: "Subscribed",
  unsubscribed: "Unsubscribed",
  institute_name: "Institute Name",
  institute_edit_success: "Institute has been edited successfully!",
  edit_profile: "Edit institute",
  institute_Add: "Institute has been added successfully!",
  // e-book
  e_books: "E-books",
  all_e_books: "All E-books",
  Add_new_e_book: "Add new E-book",
  Categories: "Categories",
  add_category: "Add Category",
  e_book_added_success_message: "E-book has been edited successfully!",
  add_new_category: "Add new Category",
  category_name: "Category Name",
  category_added_success_message: "Category has been added successfully!",
  e_book_delete_confirmation_message:
    "Are you sure  you want to delete the E-book ?",
  book_image: "Book Image",
  Category: "Category",
  author_Name: "Author Name",
  book_name: "Book Name",
  Video: "Video",
  youtube_link: "Youtube Link",
  add_e_book: "Add E-book",
  all_categories: "All Categories",

  // subscription
  add_plans: "Add Plans",
  subscription: "Subscription",
  Add_new_subscription_plan: "Add new subscription plan",
  Subscription_Name: "Subscription Name",
  Duration: "Duration",
  rate: "Rate",
  features: "Features",
  delete_subscription_messgae:
    "Are you sure  you want to delete the subscription?",
  edit_subcription_message: "Subscription has been edited successfully!",
  added_subsription_message_success:
    "Subscription has been added successfully!",

  // Quiz
  Quiz: "Quiz",
  all_quize: "All Quiz",
  add_new_quize: "Add New Quiz",
  add_quize: "Add Quiz",
  quiz_name: "Quiz Name",
  add_question: "Add question",
  description: "Description",
  answer_key: "Answer key",
  delete_quize_confirm_message: "Are you sure do you want to delete this quiz?",
  added_quize_message: "Quiz has been added successfully!",
};

export const colorCodes = {
  PRIMARY_COLOR: "#FE6B01",
  PRIMARY_COLOR_100: "#FFF0E6",
  PRIMARY_COLOR_200: "#FFE9D9",
  PRIMARY_COLOR_300: "#FFD1B0",
  PRIMARY_COLOR_400: "#FE6B01",
  PRIMARY_COLOR_500: "#E56001",
  PRIMARY_COLOR_600: "#CB5601",
  PRIMARY_COLOR_700: "#FE6B01",
  PRIMARY_COLOR_800: "#984001",
  PRIMARY_COLOR_900: "#723000",

  SECONDARY_COLOR: "#480D9B",
  SECONDARY_COLOR_100: "#EDE7F5",
  SECONDARY_COLOR_200: "#C6B4E0",
  SECONDARY_COLOR_300: "#AB90D1",
  SECONDARY_COLOR_400: "#845DBC",
  SECONDARY_COLOR_500: "#6D3DAF",
  SECONDARY_COLOR_600: "#480D9B",
  SECONDARY_COLOR_700: "#420C8D",
  SECONDARY_COLOR_800: "#33096E",
  SECONDARY_COLOR_900: "#280755",

  GRAY_SHAD_100: "#B0B0B0",
  GRAY_SHAD_200: "#8A8A8A",
  GRAY_SHAD_300: "#545454",
  GRAY_SHAD_400: "#333333",
  GRAY_SHAD_500: "#000000",
};

const adminMenus = [
  {
    id: 1,
    icon: "",
    name: "Dashboard",
    path: "/Dashboard",
  },
  {
    id: 2,
    icon: "",
    name: "User",
    path: "/User",
  },
  {
    id: 3,
    icon: "",
    name: "Payment Tracking",
    path: "/Payments",
  },
];

const superAdminMenus = [
  {
    id: 1,
    icon: "",
    name: "Dashboard",
    path: "/Dashboard",
  },
  {
    id: 2,
    icon: "",
    name: "User",
    path: "/User",
  },
  {
    id: 3,
    icon: "",
    name: "Institute",
    path: "/Institute",
  },
  {
    id: 4,
    icon: "",
    name: "E-Books",
    path: "/E-books",
  },
  {
    id: 5,
    icon: "",
    name: "Subscription",
    path: "/Subscription",
  },
  {
    id: 6,
    icon: "",
    name: "Quiz",
    path: "/Quiz",
  },
];
