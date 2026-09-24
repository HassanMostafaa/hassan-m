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
    buttonText: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Button'>;
    buttonUrl: Schema.Attribute.String;
    endIcon: Schema.Attribute.Media<'images'>;
    isExternalUrl: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    startIcon: Schema.Attribute.Media<'images'>;
    style: Schema.Attribute.Enumeration<['Primary', 'Secondary']> &
      Schema.Attribute.DefaultTo<'Secondary'>;
    variant: Schema.Attribute.Enumeration<['Button', 'Link']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Button'>;
    withIcons: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
  };
}

export interface BaseComponentsProjectTeaserCard
  extends Struct.ComponentSchema {
  collectionName: 'components_base_components_project_teaser_cards';
  info: {
    displayName: 'ProjectTeaserCard';
  };
  attributes: {
    description: Schema.Attribute.String;
    Image: Schema.Attribute.Media<'images'>;
    projectUrl: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'/work/'>;
    title: Schema.Attribute.String;
  };
}

export interface BaseComponentsSimpleCard extends Struct.ComponentSchema {
  collectionName: 'components_base_components_simple_cards';
  info: {
    displayName: 'SimpleCard';
  };
  attributes: {
    Action: Schema.Attribute.Component<'base-components.button', false>;
    Description: Schema.Attribute.Blocks;
    Title: Schema.Attribute.String;
  };
}

export interface ComponentsFeaturedProjects extends Struct.ComponentSchema {
  collectionName: 'components_components_featured_projects';
  info: {
    displayName: 'FeaturedProjects';
    icon: 'bulletList';
  };
  attributes: {
    Items: Schema.Attribute.Component<
      'base-components.project-teaser-card',
      true
    >;
    seeAllButton: Schema.Attribute.Component<'base-components.button', false>;
    title: Schema.Attribute.String;
  };
}

export interface ComponentsGridCards extends Struct.ComponentSchema {
  collectionName: 'components_components_grid_cards';
  info: {
    displayName: 'GridCards';
    icon: 'bulletList';
  };
  attributes: {
    Items: Schema.Attribute.Component<'base-components.simple-card', true>;
  };
}

export interface ComponentsHeroSection extends Struct.ComponentSchema {
  collectionName: 'components_components_hero_sections';
  info: {
    displayName: 'HeroSection';
    icon: 'bulletList';
  };
  attributes: {
    CallToAction: Schema.Attribute.Component<'base-components.button', false>;
    Subtitle: Schema.Attribute.Blocks;
    tag: Schema.Attribute.String;
    Title: Schema.Attribute.String;
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

export interface MetaComponentsSeo extends Struct.ComponentSchema {
  collectionName: 'components_meta_components_seos';
  info: {
    displayName: 'Seo';
  };
  attributes: {
    canonicalUrl: Schema.Attribute.String;
    metaDescription: Schema.Attribute.String;
    metaImage: Schema.Attribute.Media<'images'>;
    metaTitle: Schema.Attribute.String;
    noIndex: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
  };
}

declare module '@strapi/strapi' {
  export namespace Public {
    export interface ComponentSchemas {
      'base-components.brand-logo': BaseComponentsBrandLogo;
      'base-components.button': BaseComponentsButton;
      'base-components.project-teaser-card': BaseComponentsProjectTeaserCard;
      'base-components.simple-card': BaseComponentsSimpleCard;
      'components.featured-projects': ComponentsFeaturedProjects;
      'components.grid-cards': ComponentsGridCards;
      'components.hero-section': ComponentsHeroSection;
      'header-componenets.header-navigations': HeaderComponenetsHeaderNavigations;
      'meta-components.seo': MetaComponentsSeo;
    }
  }
}
