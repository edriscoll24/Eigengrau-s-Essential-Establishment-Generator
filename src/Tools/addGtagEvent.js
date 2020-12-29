setup.addGtagEvent = (options = {
  event_category: 'passage',
  event_action: 'loaded',
  event_label: passage()
}) => {
  if (window['ga-disable-UA-119249239-1'] !== true && typeof gtag === 'function') {
    gtag('event', 'passage', options)
    gtag('event', 'passage', {
      event_category: 'seed',
      event_action: 'used',
      event_label: location.hash
    })
  }
}
