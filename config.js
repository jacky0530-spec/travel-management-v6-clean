/**
 * Clean 系統專用設定。
 * 只可放 Supabase publishable/anon public key；禁止放 service_role 或 secret key。
 * 未來更新共用核心時，保留此檔，不要用正式系統 config.js 覆蓋。
 */
window.APP_CONFIG = {
  instanceId: 'travel-management-v6-clean',
  companyName: 'YOUR TRAVEL COMPANY',
  systemName: '旅遊訂單、司機名冊與出車系統',
  supabaseUrl: 'https://zgxedhghwtxjknqngtwk.supabase.co',
  supabaseAnonKey: 'sb_publishable_ZVKGtMvMza1LOgnOv5QS7w_IZKQ6j3W',
  baseCurrency: 'AUD',
  defaultAccountingFx: 23,
  orderPrefix: 'AU',
  dispatchPrefix: 'DS',
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
