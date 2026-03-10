import { Button } from '../components/Button';
import figma from '@figma/code-connect';
import { ArrowRightIcon, ArrowLeftIcon } from '@phosphor-icons/react';

/**
 * -- This file was created manually to bypass Figma API permission issues --
 * 
 * To connect this component to Figma:
 * 1. Ensure the URL below points to the correct component in your Figma file
 * 2. Map the Figma properties to your React component props
 * 3. Run `npx figma connect publish` when your token issues are resolved
 */

figma.connect(
  Button,
  "https://www.figma.com/design/48JkisNElq2VtYF49kQaVm/PAUL--Pattern---Asset-UI-Library-?node-id=92-3184&m=dev",
  {
    props: {
      label: figma.string('Label'),
      variant: figma.enum('Type', {
        Fill: 'primary',
        Outline: 'outlined',
      }),
      size: figma.enum('Size', {
        xl: 'xl',
        lg: 'lg',
        md: 'md',
        sm: 'sm',
      }),
      disabled: figma.enum('state', {
        disabled: true,
        rest: false,
        hover: false,
      }),
      icon: figma.enum('Icon', {
        Right: 'right',
        Left: 'left',
      }),
    },
    example: (props) => {
      const iconSize = props.size === 'sm' ? 16 : props.size === 'md' ? 20 : 24;
      return (
        <Button
          {...props}
          leftIcon={props.icon === 'left' ? <ArrowLeftIcon size={iconSize} /> : undefined}
          rightIcon={props.icon === 'right' ? <ArrowRightIcon size={iconSize} /> : undefined}
        />
      );
    },
  }
);
