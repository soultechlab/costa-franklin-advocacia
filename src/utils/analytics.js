/**
 * Dispara evento de conversão do Google Ads quando um botão do WhatsApp é clicado
 */
export const trackWhatsAppConversion = () => {
  if (window.gtag) {
    window.gtag('event', 'conversion', {
      'send_to': 'AW-17777210461/QwywCOie9ssbEN3o6pxC'
    });
  }
};
