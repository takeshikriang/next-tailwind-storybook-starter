import '../styles/globals.css'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  backgrounds: {
    default: 'bg-white',
    values: [
      {
        name: 'bg-white',
        value: '#fff'
      },
      {
        name: 'bg-slate-100',
        value: '#f1f5f9'
      },
      {
        name: 'bg-slate-700',
        value: '#334155'
      }
    ]
  },
  controls: {
    hideNoControlsWarning: true,
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  },
  viewport: {
    viewports: {
      XS: {
        name: 'XS: @media (min-width: 475px)',
        styles: {
          width: '475px',
          height: '100%'
        }
      },
      SM: {
        name: 'SM: @media (min-width: 640px)',
        styles: {
          width: '640px',
          height: '100%'
        }
      },
      MD: {
        name: 'MD: @media (min-width: 768px)',
        styles: {
          width: '768px',
          height: '100%'
        }
      },
      LG: {
        name: 'LG: @media (min-width: 1024px)',
        styles: {
          width: '1024px',
          height: '100%'
        }
      },
      XL: {
        name: 'XL: @media (min-width: 1280px)',
        styles: {
          width: '1280px',
          height: '100%'
        }
      },
      '2XL': {
        name: '2XL: @media (min-width: 1536px)',
        styles: {
          width: '1536px',
          height: '100%'
        }
      }
    }
  }
}
