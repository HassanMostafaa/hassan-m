import type { Schema, Struct } from '@strapi/strapi';

export interface BaseComponentsBrandLogo extends Struct.ComponentSchema {
  collectionName: 'components_base_components_brand_logos';
  info: {
    displayName: 'BrandLogo';
  };
  attributes: {
    Logo: Schema.Attribute.Media<'images'>;
    LogoSmall: Schema.Attribute.Media<'images'>;
  };
}

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
    ExternalUrl: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    Style: Schema.Attribute.Enumeration<['Primary', 'Secondary']> &
      Schema.Attribute.DefaultTo<'Secondary'>;
    Variant: Schema.Attribute.Enumeration<['Button', 'Link']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Button'>;
  };
}

export interface HeaderComponenetsHeaderNavigations
  extends Struct.ComponentSchema {
  collectionName: 'components_header_componenets_header_navigations';
  info: {
    displayName: 'HeaderNavigations';
  };
  attributes: {
    Items: Schema.Attribute.Component<'base-components.button', true>;
  };
}

declare module '@strapi/strapi' {
  export namespace Public {
    export interface ComponentSchemas {
      'base-components.brand-logo': BaseComponentsBrandLogo;
      'base-components.button': BaseComponentsButton;
      'header-componenets.header-navigations': HeaderComponenetsHeaderNavigations;
    }
  }
}
