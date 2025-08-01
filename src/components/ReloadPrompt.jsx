// src/components/ReloadPrompt.jsx

import React from 'react'
import { useRegisterSW } from 'virtual:pwa-register/react'

function ReloadPrompt() {
  const {
    offlineReady: [offlineReady, setOfflineReady],
    needRefresh: [needRefresh, setNeedRefresh],
    updateServiceWorker,
  } = useRegisterSW({
    onRegistered(r) {
      console.log('SW Registered: ' + r)
    },
    onRegisterError(error) {
      console.log('SW registration error', error)
    },
  })

  const close = () => {
    setOfflineReady(false)
    setNeedRefresh(false)
  }

  if (needRefresh) {
    return (
      <div className="p-4 bg-gray-800 text-white fixed bottom-4 right-4 rounded-lg shadow-xl z-50">
        <div className="mb-2">
          <span>New content available, click on reload button to update.</span>
        </div>
        <button onClick={() => updateServiceWorker(true)} className="px-4 py-2 bg-blue-500 rounded hover:bg-blue-600 mr-2">
          Reload
        </button>
        <button onClick={() => close()} className="px-4 py-2 border rounded">
          Close
        </button>
      </div>
    )
  }

  return null
}

export default ReloadPrompt