import { colors } from '@kierico-ui/tokens'
import { getContrast } from 'polished'

export function ColorsGrid() {
  return Object.entries(colors).map(([key, color]) => {
    return (
      <div key={key} style={{ backgroundColor: color, padding: '2rem' }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            fontFamily: 'monospace',
            /** calculo de cores com o Polished */
            color: getContrast(color, '#fff') < 3.5 ? '#000' : '#fff',
          }}
        >
          {/** $ para saber que isso é um token */}
          <strong>${key}</strong>
          <span>{color}</span>
        </div>
      </div>
    )
  })
}
