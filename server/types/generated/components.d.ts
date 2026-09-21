import type { Schema, Struct } from '@strapi/strapi';

export interface BaseComponentsButton extends Struct.ComponentSchema {
  collectionName: 'components_base_components_buttons';
  info: {
    displayName: 'Button';
  };
  attributes: {
    ButtonText: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Button'>;
    ButtonUrl: Schema.Attribute.String;
  };
}

export interface HeaderComponenetsLink extends Struct.ComponentSchema {
  collectionName: 'components_header_componenets_links';
  info: {
    displayName: 'Link';
  };
  attributes: {
    linkText: Schema.Attribute.String;
    LinkUrl: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export namespace Public {
    export interface ComponentSchemas {
      'base-components.button': BaseComponentsButton;
      'header-componenets.link': HeaderComponenetsLink;
    }
  }
}
