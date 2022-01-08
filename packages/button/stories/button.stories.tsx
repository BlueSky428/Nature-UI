import { SearchIcon } from '@nature-ui/icons';
import { Stack } from '@nature-ui/layout';
import { Meta, Story } from '@storybook/react/types-6-0';
import * as React from 'react';
import { IoLogoGithub } from 'react-icons/io';
import { Button, ButtonProps, ButtonSpinner } from '../src';

export default {
  title: 'Button/Buttons',
  component: Button,
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Click me',
};

export const Outlined = Template.bind({});
Outlined.args = {
  color: 'blue-500',
  variant: 'outline',
  children: 'Click me!',
};

export const Ghost = Template.bind({});
Ghost.args = {
  text: 'blue-500',
  variant: 'ghost',
  children: 'Hover me!',
};

export const Link = Template.bind({});
Link.args = {
  color: 'blue-500',
  variant: 'link',
  children: 'Click me!',
};

export const Sizes = () => {
  return (
    <Stack row>
      <Button size='xs' color='blue-500' variant='solid'>
        Button
      </Button>
      <Button size='sm' color='blue-500' variant='solid'>
        Button
      </Button>
      <Button size='md' color='blue-500' variant='solid'>
        Button
      </Button>
      <Button size='lg' color='blue-500' variant='solid'>
        Button
      </Button>
    </Stack>
  );
};

export const IsDisabled = Template.bind({});

IsDisabled.args = {
  isDisabled: true,
  children: 'Disabled',
};

export const IsLoading = () => {
  return (
    <>
      <Button
        color='blue-500'
        variant='outline'
        isLoading
        loadingText='Submitting...'
        size='md'
      >
        Button
      </Button>
      <Button
        color='blue-500'
        variant='solid'
        isLoading
        loadingText='loading...'
        size='md'
        className='ml-4'
      >
        Button
      </Button>
      <Button color='blue-500' variant='solid' isLoading className='ml-4'>
        Email
      </Button>
    </>
  );
};

export const Red = () => {
  return (
    <Button color='red-500' variant='solid'>
      Button
    </Button>
  );
};

export const buttonSpinner = () => {
  return <ButtonSpinner />;
};

export const WithIcon = () => {
  return (
    <Stack row>
      <Button leftIcon={<SearchIcon />} variant='solid'>
        Search
      </Button>
      <Button rightIcon={<IoLogoGithub />} variant='ghost' text='teal-600'>
        Github
      </Button>
    </Stack>
  );
};
