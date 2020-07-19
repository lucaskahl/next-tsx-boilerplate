import Main from '.'
import { withKnobs, text } from '@storybook/addon-knobs'

export default {
  title: 'Main',
  component: Main,
  decorators: [withKnobs]
}

export const Basic = () => (
  <Main
    title={text('Title', 'Custom Next Typescript')}
    description={text(
      'Description',
      'Typescript, ReactJS, NextJS and Styled Components'
    )}
  />
)
