/**
 * Travel Management & Accounting System V6.0.1 - Clean Instance
 * 這是每家公司獨立的公開前端設定檔。
 * 只可放 Supabase publishable/anon public key；禁止放 service_role 或 secret key。
 */
window.APP_CONFIG = {
  // 每一套系統必須唯一，用於隔離瀏覽器登入 Session 與本機顯示設定。
  instanceId: 'travel-management-v6-clean',

  // 左上角預設公司名稱；登入後可由使用者在畫面直接自訂顯示名稱。
  companyName: 'YOUR TRAVEL COMPANY',
  systemName: '旅遊訂單、司機名冊與出車系統',

  // Clean 系統自己的 Supabase 專案，不是原正式系統。
  supabaseUrl: 'https://zgxedhghwtxjknqngtwk.supabase.co',
  supabaseAnonKey: 'sb_publishable_ZVKGtMvMza1LOgnOv5QS7w_IZKQ6j3W',

  baseCurrency: 'AUD',
  defaultAccountingFx: 23,
  orderPrefix: 'AU',
  dispatchPrefix: 'DS',

  // Clean 新系統不承接舊系統 Session。
  legacyAuthStorageKey: '',

  features: {
    orders: true,
    tourCosts: true,
    drivers: true,
    dispatch: true,
    reports: true,
    finance: true,
    userManagement: true
  }
};
