// 正式系統專用設定。未來更新共用核心時，保留此檔，不要用其他公司的 config.js 覆蓋。
window.APP_CONFIG = {
  instanceId: 'aus-travel-accounting-prod',
  companyName: '澳洲旅遊',
  systemName: '旅遊訂單、司機名冊與出車系統',
  supabaseUrl: 'https://ohnedzeglswvrcrzasiq.supabase.co',
  supabaseAnonKey: 'sb_publishable_F6algA8-eFCJubSGC58pFg_jCbV86Kz',
  baseCurrency: 'AUD',
  defaultAccountingFx: 23,
  orderPrefix: 'AU',
  dispatchPrefix: 'CAR',
  legacyAuthStorageKey: 'au_travel_auth_session_v5514',
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
