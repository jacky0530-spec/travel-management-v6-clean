/**
 * Travel Management & Accounting System V6.0 Clean Deployment
 * Public frontend configuration only.
 * NEVER put a Supabase secret key / service_role key in this file.
 */
window.TRAVEL_CONFIG = Object.freeze({
  version: "6.0.0",
  companyName: "YOUR TRAVEL COMPANY",
  systemName: "Travel Management & Accounting System V6.0 Clean Deployment",
  logo: "✈️",

  // New Supabase project only. Use the project's publishable key (sb_publishable_...).
  supabaseUrl: "https://zgxedhghwtxjknqngtwk.supabase.co",
  supabasePublishableKey: "sb_publishable_ZVKGtMvMza1LOgnOv5QS7w_IZKQ6j3W",

  // Optional legacy compatibility only. Leave blank for a new project.
  supabaseAnonKey: "",

  baseCurrency: "AUD",
  defaultAccountingFxTwdPerAud: 23,
  orderNumberPrefix: "AU",
  dispatchNumberPrefix: "DS",

  companyEmail: "",
  companyPhone: "",

  enable401: true,
  enableDrivers: true,
  enableAgentCosts: true
});
