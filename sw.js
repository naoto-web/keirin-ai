// sw.js — インストール用の最小サービスワーカー（キャッシュはしない＝常に最新を取りに行く）
self.addEventListener('install', e => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', () => {});
