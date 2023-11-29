const VCard = '.v-card{border-color:rgba(var(--v-border-color),var(--v-border-opacity));border-radius:4px;border-style:solid;border-width:0;display:block;overflow:hidden;overflow-wrap:break-word;padding:0;position:relative;text-decoration:none;transition-duration:.28s;transition-property:box-shadow,opacity,background;transition-timing-function:cubic-bezier(.4,0,.2,1);z-index:0}.v-card--border{border-width:thin;box-shadow:none}.v-card--absolute{position:absolute}.v-card--fixed{position:fixed}.v-card:hover>.v-card__overlay{opacity:calc(var(--v-hover-opacity)*var(--v-theme-overlay-multiplier))}.v-card:focus-visible>.v-card__overlay{opacity:calc(var(--v-focus-opacity)*var(--v-theme-overlay-multiplier))}@supports not selector(:focus-visible){.v-card:focus>.v-card__overlay{opacity:calc(var(--v-focus-opacity)*var(--v-theme-overlay-multiplier))}}.v-card--active>.v-card__overlay,.v-card[aria-haspopup=menu][aria-expanded=true]>.v-card__overlay{opacity:calc(var(--v-activated-opacity)*var(--v-theme-overlay-multiplier))}.v-card--active:hover>.v-card__overlay,.v-card[aria-haspopup=menu][aria-expanded=true]:hover>.v-card__overlay{opacity:calc((var(--v-activated-opacity) + var(--v-hover-opacity))*var(--v-theme-overlay-multiplier))}.v-card--active:focus-visible>.v-card__overlay,.v-card[aria-haspopup=menu][aria-expanded=true]:focus-visible>.v-card__overlay{opacity:calc((var(--v-activated-opacity) + var(--v-focus-opacity))*var(--v-theme-overlay-multiplier))}@supports not selector(:focus-visible){.v-card--active:focus>.v-card__overlay,.v-card[aria-haspopup=menu][aria-expanded=true]:focus>.v-card__overlay{opacity:calc((var(--v-activated-opacity) + var(--v-focus-opacity))*var(--v-theme-overlay-multiplier))}}.v-card--variant-outlined,.v-card--variant-plain,.v-card--variant-text,.v-card--variant-tonal{background:transparent;color:inherit}.v-card--variant-plain{opacity:.62}.v-card--variant-plain:focus,.v-card--variant-plain:hover{opacity:1}.v-card--variant-plain .v-card__overlay{display:none}.v-card--variant-elevated,.v-card--variant-flat{background:rgb(var(--v-theme-surface));color:rgba(var(--v-theme-on-surface),var(--v-high-emphasis-opacity))}.v-card--variant-elevated{box-shadow:0 2px 1px -1px var(--v-shadow-key-umbra-opacity,rgba(0,0,0,.2)),0 1px 1px 0 var(--v-shadow-key-penumbra-opacity,rgba(0,0,0,.14)),0 1px 3px 0 var(--v-shadow-key-penumbra-opacity,rgba(0,0,0,.12))}.v-card--variant-flat{box-shadow:0 0 0 0 var(--v-shadow-key-umbra-opacity,rgba(0,0,0,.2)),0 0 0 0 var(--v-shadow-key-penumbra-opacity,rgba(0,0,0,.14)),0 0 0 0 var(--v-shadow-key-penumbra-opacity,rgba(0,0,0,.12))}.v-card--variant-outlined{border:thin solid}.v-card--variant-text .v-card__overlay{background:currentColor}.v-card--variant-tonal .v-card__underlay{background:currentColor;border-radius:inherit;bottom:0;left:0;opacity:var(--v-activated-opacity);pointer-events:none;position:absolute;right:0;top:0}.v-card--disabled{pointer-events:none;-webkit-user-select:none;-moz-user-select:none;user-select:none}.v-card--disabled>:not(.v-card__loader){opacity:.6}.v-card--flat{box-shadow:none}.v-card--hover{cursor:pointer}.v-card--hover:after,.v-card--hover:before{border-radius:inherit;bottom:0;content:"";display:block;left:0;pointer-events:none;position:absolute;right:0;top:0;transition:inherit}.v-card--hover:before{box-shadow:0 2px 1px -1px var(--v-shadow-key-umbra-opacity,rgba(0,0,0,.2)),0 1px 1px 0 var(--v-shadow-key-penumbra-opacity,rgba(0,0,0,.14)),0 1px 3px 0 var(--v-shadow-key-penumbra-opacity,rgba(0,0,0,.12));opacity:1;z-index:-1}.v-card--hover:after{box-shadow:0 5px 5px -3px var(--v-shadow-key-umbra-opacity,rgba(0,0,0,.2)),0 8px 10px 1px var(--v-shadow-key-penumbra-opacity,rgba(0,0,0,.14)),0 3px 14px 2px var(--v-shadow-key-penumbra-opacity,rgba(0,0,0,.12));opacity:0;z-index:1}.v-card--hover:hover:after{opacity:1}.v-card--hover:hover:before{opacity:0}.v-card--hover:hover{box-shadow:0 5px 5px -3px var(--v-shadow-key-umbra-opacity,rgba(0,0,0,.2)),0 8px 10px 1px var(--v-shadow-key-penumbra-opacity,rgba(0,0,0,.14)),0 3px 14px 2px var(--v-shadow-key-penumbra-opacity,rgba(0,0,0,.12))}.v-card--link{cursor:pointer}.v-card-actions{align-items:center;display:flex;flex:none;min-height:52px;padding:.5rem}.v-card-item{align-items:center;display:grid;flex:none;grid-template-areas:"prepend content append";grid-template-columns:max-content auto max-content;padding:.625rem 1rem}.v-card-item+.v-card-text{padding-top:0}.v-card-item__prepend{grid-area:prepend;padding-inline-end:1rem}.v-card-item__append{grid-area:append;padding-inline-start:1rem}.v-card-item__content{align-self:center;grid-area:content;overflow:hidden}.v-card-title{word-wrap:break-word;display:block;flex:none;font-size:1.25rem;font-weight:500;-webkit-hyphens:auto;hyphens:auto;letter-spacing:.0125em;min-width:0;overflow:hidden;overflow-wrap:normal;padding:.5rem 1rem;text-overflow:ellipsis;text-transform:none;white-space:nowrap;word-break:normal}.v-card .v-card-title{line-height:2rem}.v-card--density-comfortable .v-card-title{line-height:1.75rem}.v-card--density-compact .v-card-title{line-height:1.55rem}.v-card-item .v-card-title{padding:0}.v-card-title+.v-card-actions,.v-card-title+.v-card-text{padding-top:0}.v-card-subtitle{display:block;flex:none;font-size:.875rem;font-weight:400;letter-spacing:.0178571429em;opacity:var(--v-medium-emphasis-opacity);overflow:hidden;padding:0 1rem;text-overflow:ellipsis;text-transform:none;white-space:nowrap}.v-card .v-card-subtitle{line-height:1.25rem}.v-card--density-comfortable .v-card-subtitle{line-height:1.125rem}.v-card--density-compact .v-card-subtitle{line-height:1rem}.v-card-item .v-card-subtitle{padding:0 0 .25rem}.v-card-text{flex:1 1 auto;font-size:.875rem;font-weight:400;letter-spacing:.0178571429em;padding:1rem;text-transform:none}.v-card .v-card-text{line-height:1.25rem}.v-card--density-comfortable .v-card-text{line-height:1.2rem}.v-card--density-compact .v-card-text{line-height:1.15rem}.v-card__image{display:flex;flex:1 1 auto;height:100%;left:0;overflow:hidden;position:absolute;top:0;width:100%;z-index:-1}.v-card__content{border-radius:inherit;overflow:hidden;position:relative}.v-card__loader{bottom:auto;width:100%;z-index:1}.v-card__loader,.v-card__overlay{left:0;position:absolute;right:0;top:0}.v-card__overlay{background-color:currentColor;border-radius:inherit;bottom:0;opacity:0;pointer-events:none;transition:opacity .2s ease-in-out}';
export {
  VCard as default
};
//# sourceMappingURL=entry-styles-42.mjs-30174b8f.js.map
