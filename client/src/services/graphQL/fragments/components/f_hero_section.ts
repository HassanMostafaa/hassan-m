import { gql } from "@apollo/client";
import { f_button } from "../base-components/f_button";

export const f_hero_section = gql`
  ${f_button}
  fragment f_hero_section on ComponentComponentsHeroSection {
    id
    tag
    Title
    Subtitle
    CallToAction {
      ...f_button
    }
  }
`;
