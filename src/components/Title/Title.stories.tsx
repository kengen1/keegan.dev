import React from 'react'
import { Meta, StoryFn } from '@storybook/react'
import WebpageTitle from './Title'

// Define the props (if any) for WebpageTitle
type WebpageTitleProps = {}

// Storybook metadata
export default {
  title: 'Components/Title',
  component: WebpageTitle,
} as Meta<typeof WebpageTitle>

// Template for the story
const Template: StoryFn<WebpageTitleProps> = (args) => <WebpageTitle {...args} />

// Default Story
export const Default = Template.bind({})
Default.args = {}
