import { html, css, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import { defineComponents, IgcButtonComponent, IgcExpansionPanelComponent, IgcIconComponent, IgcRippleComponent, IgcTabsComponent } from 'igniteui-webcomponents';

defineComponents(IgcButtonComponent, IgcRippleComponent, IgcExpansionPanelComponent, IgcTabsComponent, IgcIconComponent);

@customElement('app-master-view')
export default class MasterView extends LitElement {
  static styles = css`
    :host {
      height: 100%;
      display: flex;
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
    }
    .column-layout {
      display: flex;
      flex-direction: column;
    }
    .group {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      gap: 16px;
      position: relative;
      padding: 16px;
      min-width: 50px;
      min-height: 50px;
      flex-grow: 1;
      flex-basis: 0;
    }
    .accordion {
      overflow-y: auto;
      flex-shrink: 0;
    }
    .group_1 {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      position: relative;
      padding: 16px;
      min-width: 50px;
      min-height: 50px;
      flex-grow: 1;
      flex-basis: 0;
    }
    .tabs {
      min-width: 0;
      min-height: 0;
      flex-grow: 1;
      flex-basis: 0;
    }
    .button {
      height: max-content;
      min-width: min-content;
    }
    .row-layout {
      display: flex;
    }
    .tab-item-content {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      overflow: auto;
      position: absolute;
      height: 100%;
      min-width: 100%;
      min-height: 50px;
    }
    .text {
      height: max-content;
      min-width: min-content;
    }
  `;

  render() {
    return html`
      <link href='https://fonts.googleapis.com/icon?family=Material+Icons' rel='stylesheet'>
      <link href='https://fonts.googleapis.com/css?family=Titillium+Web' rel='stylesheet'>
      <link rel='stylesheet' href='../../ig-theme.css'>
      <div class="column-layout group">
        <igc-button class="button">
          Button
          <igc-ripple></igc-ripple>
        </igc-button>
        <igc-button variant="outlined" class="button">
          Button
          <igc-ripple></igc-ripple>
        </igc-button>
        <igc-button variant="flat" class="button">
          Button
          <igc-ripple></igc-ripple>
        </igc-button>
        <igc-accordion ?single-expand="${false}" class="accordion">
          <igc-expansion-panel>
            <p class="typography__body-1 text"></p>
            <igc-button class="button">
              Button
              <igc-ripple></igc-ripple>
            </igc-button>
            <span slot="title">Title goes here...</span>
          </igc-expansion-panel>
          <igc-expansion-panel>
            <p class="typography__body-1 text"></p>
            <span slot="title">Title goes here...</span>
          </igc-expansion-panel>
          <igc-expansion-panel>
            <p class="typography__body-1 text"></p>
            <span slot="title">Title goes here...</span>
          </igc-expansion-panel>
        </igc-accordion>
      </div>
      <div class="column-layout group_1">
        <igc-tabs class="tabs">
          <igc-tab-panel class="row-layout tab-item-content"></igc-tab-panel>
          <igc-tab ?selected="${true}">
            <span class="material-icons">info</span>
            Label
          </igc-tab>
          <igc-tab-panel class="row-layout tab-item-content"></igc-tab-panel>
          <igc-tab>
            <span class="material-icons">info</span>
            Label
          </igc-tab>
        </igc-tabs>
        <igc-tabs class="tabs">
          <igc-tab-panel class="row-layout tab-item-content"></igc-tab-panel>
          <igc-tab ?selected="${true}">
            <span class="material-icons">info</span>
            Label
          </igc-tab>
          <igc-tab-panel class="row-layout tab-item-content"></igc-tab-panel>
          <igc-tab>
            <span class="material-icons">info</span>
            Label
          </igc-tab>
        </igc-tabs>
      </div>
    `;
  }
}
