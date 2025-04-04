/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface GithubRepoCard {
        "owner": string;
        "repo": string;
    }
    interface MyComponent {
        /**
          * The first name
         */
        "first": string;
        /**
          * The last name
         */
        "last": string;
        /**
          * The middle name
         */
        "middle": string;
    }
}
declare global {
    interface HTMLGithubRepoCardElement extends Components.GithubRepoCard, HTMLStencilElement {
    }
    var HTMLGithubRepoCardElement: {
        prototype: HTMLGithubRepoCardElement;
        new (): HTMLGithubRepoCardElement;
    };
    interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {
    }
    var HTMLMyComponentElement: {
        prototype: HTMLMyComponentElement;
        new (): HTMLMyComponentElement;
    };
    interface HTMLElementTagNameMap {
        "github-repo-card": HTMLGithubRepoCardElement;
        "my-component": HTMLMyComponentElement;
    }
}
declare namespace LocalJSX {
    interface GithubRepoCard {
        "owner"?: string;
        "repo"?: string;
    }
    interface MyComponent {
        /**
          * The first name
         */
        "first"?: string;
        /**
          * The last name
         */
        "last"?: string;
        /**
          * The middle name
         */
        "middle"?: string;
    }
    interface IntrinsicElements {
        "github-repo-card": GithubRepoCard;
        "my-component": MyComponent;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "github-repo-card": LocalJSX.GithubRepoCard & JSXBase.HTMLAttributes<HTMLGithubRepoCardElement>;
            "my-component": LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
        }
    }
}
