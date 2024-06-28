import React from 'react';

export default function HardReloadLink() {
  const navigateWithHardReload = (url) => {
    // This will cause a full page reload to the specified URL
    window.location.href = url;
  };

  return (
    <div>
      <button onClick={() => navigateWithHardReload('/kontakt')}>
        hard-reload-kontakt
      </button>
    </div>
  );
};
