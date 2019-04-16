'use strict';



;define("location-demo/app", ["exports", "location-demo/resolver", "ember-load-initializers", "location-demo/config/environment"], function (_exports, _resolver, _emberLoadInitializers, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  const App = Ember.Application.extend({
    modulePrefix: _environment.default.modulePrefix,
    podModulePrefix: _environment.default.podModulePrefix,
    Resolver: _resolver.default
  });
  (0, _emberLoadInitializers.default)(App, _environment.default.modulePrefix);
  var _default = App;
  _exports.default = _default;
});
;define("location-demo/components/file-input", ["exports", "ember-semantic-ui/components/file-input"], function (_exports, _fileInput) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _fileInput.default;
    }
  });
});
;define("location-demo/components/region-show", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Component.extend({
    actions: {
      resetSearch() {
        this.searchOptions.setProperties({
          province_id: '',
          city_id: '',
          area_id: ''
        });
      }

    },
    region: Ember.inject.service(),
    provinceOptions: Ember.computed.alias('region.provinceOptions'),
    province: Ember.computed('searchOptions.province_id', {
      get() {
        let id = Ember.getWithDefault(this, 'searchOptions.province_id', '');
        return this.get('region').getProvinceObject(id);
      }

    }),
    city: Ember.computed('searchOptions.city_id', {
      get() {
        let id = Ember.getWithDefault(this, 'searchOptions.city_id', '');
        return this.get('region').getCityObject(id);
      }

    }),
    area: Ember.computed('searchOptions.area_id', {
      get() {
        let id = Ember.getWithDefault(this, 'searchOptions.area_id', '');
        return this.get('region').getAreaObject(id);
      }

    }),
    cityOptions: null,
    areaOptions: null,
    provinceChange: Ember.observer('searchOptions.province_id', function () {
      let provinceId = this.get('searchOptions.province_id');
      this.set('cityOptions', this.get('region').getCity(provinceId));
      this.set('areaOptions', []);
      this.get('searchOptions').setProperties({
        city_id: '',
        area_id: ''
      });
    }),
    cityChange: Ember.observer('searchOptions.city_id', function () {
      let cityId = this.get('searchOptions.city_id');
      this.set('areaOptions', this.get('region').getArea(cityId));
      this.get('searchOptions').setProperties({
        area_id: ''
      });
    }),

    initRegion() {
      let provinceId = this.get('searchOptions.province_id');
      this.set('cityOptions', this.get('region').getCity(provinceId));
      let cityId = this.get('searchOptions.city_id');
      this.set('areaOptions', this.get('region').getArea(cityId));
    },

    init() {
      this._super(...arguments);

      this.initRegion();
      this.set('cityOptions', []);
      this.set('areaOptions', []);
      this.set('searchOptions', Ember.Object.create({
        province_id: '',
        city_id: '',
        area_id: '',
        tag: ''
      }));
    }

  });

  _exports.default = _default;
});
;define("location-demo/components/ui-animated-button", ["exports", "ember-semantic-ui/components/ui-animated-button"], function (_exports, _uiAnimatedButton) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _uiAnimatedButton.default;
    }
  });
});
;define("location-demo/components/ui-button", ["exports", "ember-semantic-ui/components/ui-button"], function (_exports, _uiButton) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _uiButton.default;
    }
  });
});
;define("location-demo/components/ui-checkbox-group", ["exports", "ember-semantic-ui/components/ui-checkbox-group"], function (_exports, _uiCheckboxGroup) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _uiCheckboxGroup.default;
    }
  });
});
;define("location-demo/components/ui-checkbox", ["exports", "ember-semantic-ui/components/ui-checkbox"], function (_exports, _uiCheckbox) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _uiCheckbox.default;
    }
  });
});
;define("location-demo/components/ui-column", ["exports", "ember-semantic-ui/components/ui-column"], function (_exports, _uiColumn) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _uiColumn.default;
    }
  });
});
;define("location-demo/components/ui-container", ["exports", "ember-semantic-ui/components/ui-container"], function (_exports, _uiContainer) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _uiContainer.default;
    }
  });
});
;define("location-demo/components/ui-date-input", ["exports", "ember-semantic-ui/components/ui-date-input"], function (_exports, _uiDateInput) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _uiDateInput.default;
    }
  });
});
;define("location-demo/components/ui-date-time-input", ["exports", "ember-semantic-ui/components/ui-date-time-input"], function (_exports, _uiDateTimeInput) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _uiDateTimeInput.default;
    }
  });
});
;define("location-demo/components/ui-dropdown-menu", ["exports", "ember-semantic-ui/components/ui-dropdown-menu"], function (_exports, _uiDropdownMenu) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _uiDropdownMenu.default;
    }
  });
});
;define("location-demo/components/ui-form-input", ["exports", "ember-semantic-ui/components/ui-form-input"], function (_exports, _uiFormInput) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _uiFormInput.default;
    }
  });
});
;define("location-demo/components/ui-form", ["exports", "ember-semantic-ui/components/ui-form"], function (_exports, _uiForm) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _uiForm.default;
    }
  });
});
;define("location-demo/components/ui-grid", ["exports", "ember-semantic-ui/components/ui-grid"], function (_exports, _uiGrid) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _uiGrid.default;
    }
  });
});
;define("location-demo/components/ui-input-tags", ["exports", "ember-semantic-ui/components/ui-input-tags"], function (_exports, _uiInputTags) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _uiInputTags.default;
    }
  });
});
;define("location-demo/components/ui-input", ["exports", "ember-semantic-ui/components/ui-input"], function (_exports, _uiInput) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _uiInput.default;
    }
  });
});
;define("location-demo/components/ui-label", ["exports", "ember-semantic-ui/components/ui-label"], function (_exports, _uiLabel) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _uiLabel.default;
    }
  });
});
;define("location-demo/components/ui-labeled-button", ["exports", "ember-semantic-ui/components/ui-labeled-button"], function (_exports, _uiLabeledButton) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _uiLabeledButton.default;
    }
  });
});
;define("location-demo/components/ui-labeled-input", ["exports", "ember-semantic-ui/components/ui-labeled-input"], function (_exports, _uiLabeledInput) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _uiLabeledInput.default;
    }
  });
});
;define("location-demo/components/ui-left-labeled-button", ["exports", "ember-semantic-ui/components/ui-left-labeled-button"], function (_exports, _uiLeftLabeledButton) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _uiLeftLabeledButton.default;
    }
  });
});
;define("location-demo/components/ui-menu", ["exports", "ember-semantic-ui/components/ui-menu"], function (_exports, _uiMenu) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _uiMenu.default;
    }
  });
});
;define("location-demo/components/ui-message", ["exports", "ember-semantic-ui/components/ui-message"], function (_exports, _uiMessage) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _uiMessage.default;
    }
  });
});
;define("location-demo/components/ui-modal-content", ["exports", "ember-semantic-ui/components/ui-modal-content"], function (_exports, _uiModalContent) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _uiModalContent.default;
    }
  });
});
;define("location-demo/components/ui-modal-foot", ["exports", "ember-semantic-ui/components/ui-modal-foot"], function (_exports, _uiModalFoot) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _uiModalFoot.default;
    }
  });
});
;define("location-demo/components/ui-modal-title", ["exports", "ember-semantic-ui/components/ui-modal-title"], function (_exports, _uiModalTitle) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _uiModalTitle.default;
    }
  });
});
;define("location-demo/components/ui-modal", ["exports", "ember-semantic-ui/components/ui-modal"], function (_exports, _uiModal) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _uiModal.default;
    }
  });
});
;define("location-demo/components/ui-multi-select", ["exports", "ember-semantic-ui/components/ui-multi-select"], function (_exports, _uiMultiSelect) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _uiMultiSelect.default;
    }
  });
});
;define("location-demo/components/ui-pointing-label", ["exports", "ember-semantic-ui/components/ui-pointing-label"], function (_exports, _uiPointingLabel) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _uiPointingLabel.default;
    }
  });
});
;define("location-demo/components/ui-popup-content", ["exports", "ember-semantic-ui/components/ui-popup-content"], function (_exports, _uiPopupContent) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _uiPopupContent.default;
    }
  });
});
;define("location-demo/components/ui-popup", ["exports", "ember-semantic-ui/components/ui-popup"], function (_exports, _uiPopup) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _uiPopup.default;
    }
  });
});
;define("location-demo/components/ui-progress", ["exports", "ember-semantic-ui/components/ui-progress"], function (_exports, _uiProgress) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _uiProgress.default;
    }
  });
});
;define("location-demo/components/ui-radio-group", ["exports", "ember-semantic-ui/components/ui-radio-group"], function (_exports, _uiRadioGroup) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _uiRadioGroup.default;
    }
  });
});
;define("location-demo/components/ui-radio", ["exports", "ember-semantic-ui/components/ui-radio"], function (_exports, _uiRadio) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _uiRadio.default;
    }
  });
});
;define("location-demo/components/ui-row", ["exports", "ember-semantic-ui/components/ui-row"], function (_exports, _uiRow) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _uiRow.default;
    }
  });
});
;define("location-demo/components/ui-segment", ["exports", "ember-semantic-ui/components/ui-segment"], function (_exports, _uiSegment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _uiSegment.default;
    }
  });
});
;define("location-demo/components/ui-select", ["exports", "ember-semantic-ui/components/ui-select"], function (_exports, _uiSelect) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _uiSelect.default;
    }
  });
});
;define("location-demo/components/ui-tab-menu", ["exports", "ember-semantic-ui/components/ui-tab-menu"], function (_exports, _uiTabMenu) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _uiTabMenu.default;
    }
  });
});
;define("location-demo/components/ui-tab-segment", ["exports", "ember-semantic-ui/components/ui-tab-segment"], function (_exports, _uiTabSegment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _uiTabSegment.default;
    }
  });
});
;define("location-demo/components/ui-text-container", ["exports", "ember-semantic-ui/components/ui-text-container"], function (_exports, _uiTextContainer) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _uiTextContainer.default;
    }
  });
});
;define("location-demo/components/ui-uploader", ["exports", "ember-semantic-ui/components/ui-uploader"], function (_exports, _uiUploader) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _uiUploader.default;
    }
  });
});
;define("location-demo/components/ui-vertical-menu", ["exports", "ember-semantic-ui/components/ui-vertical-menu"], function (_exports, _uiVerticalMenu) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _uiVerticalMenu.default;
    }
  });
});
;define("location-demo/components/welcome-page", ["exports", "ember-welcome-page/components/welcome-page"], function (_exports, _welcomePage) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _welcomePage.default;
    }
  });
});
;define("location-demo/helpers/app-version", ["exports", "location-demo/config/environment", "ember-cli-app-version/utils/regexp"], function (_exports, _environment, _regexp) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.appVersion = appVersion;
  _exports.default = void 0;

  function appVersion(_, hash = {}) {
    const version = _environment.default.APP.version; // e.g. 1.0.0-alpha.1+4jds75hf
    // Allow use of 'hideSha' and 'hideVersion' For backwards compatibility

    let versionOnly = hash.versionOnly || hash.hideSha;
    let shaOnly = hash.shaOnly || hash.hideVersion;
    let match = null;

    if (versionOnly) {
      if (hash.showExtended) {
        match = version.match(_regexp.versionExtendedRegExp); // 1.0.0-alpha.1
      } // Fallback to just version


      if (!match) {
        match = version.match(_regexp.versionRegExp); // 1.0.0
      }
    }

    if (shaOnly) {
      match = version.match(_regexp.shaRegExp); // 4jds75hf
    }

    return match ? match[0] : version;
  }

  var _default = Ember.Helper.helper(appVersion);

  _exports.default = _default;
});
;define("location-demo/helpers/pluralize", ["exports", "ember-inflector/lib/helpers/pluralize"], function (_exports, _pluralize) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _pluralize.default;
  _exports.default = _default;
});
;define("location-demo/helpers/singularize", ["exports", "ember-inflector/lib/helpers/singularize"], function (_exports, _singularize) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _singularize.default;
  _exports.default = _default;
});
;define("location-demo/initializers/app-version", ["exports", "ember-cli-app-version/initializer-factory", "location-demo/config/environment"], function (_exports, _initializerFactory, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  let name, version;

  if (_environment.default.APP) {
    name = _environment.default.APP.name;
    version = _environment.default.APP.version;
  }

  var _default = {
    name: 'App Version',
    initialize: (0, _initializerFactory.default)(name, version)
  };
  _exports.default = _default;
});
;define("location-demo/initializers/container-debug-adapter", ["exports", "ember-resolver/resolvers/classic/container-debug-adapter"], function (_exports, _containerDebugAdapter) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = {
    name: 'container-debug-adapter',

    initialize() {
      let app = arguments[1] || arguments[0];
      app.register('container-debug-adapter:main', _containerDebugAdapter.default);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }

  };
  _exports.default = _default;
});
;define("location-demo/initializers/ember-data", ["exports", "ember-data/setup-container", "ember-data"], function (_exports, _setupContainer, _emberData) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /*
  
    This code initializes Ember-Data onto an Ember application.
  
    If an Ember.js developer defines a subclass of DS.Store on their application,
    as `App.StoreService` (or via a module system that resolves to `service:store`)
    this code will automatically instantiate it and make it available on the
    router.
  
    Additionally, after an application's controllers have been injected, they will
    each have the store made available to them.
  
    For example, imagine an Ember.js application with the following classes:
  
    ```app/services/store.js
    import DS from 'ember-data';
  
    export default DS.Store.extend({
      adapter: 'custom'
    });
    ```
  
    ```app/controllers/posts.js
    import { Controller } from '@ember/controller';
  
    export default Controller.extend({
      // ...
    });
  
    When the application is initialized, `ApplicationStore` will automatically be
    instantiated, and the instance of `PostsController` will have its `store`
    property set to that instance.
  
    Note that this code will only be run if the `ember-application` package is
    loaded. If Ember Data is being used in an environment other than a
    typical application (e.g., node.js where only `ember-runtime` is available),
    this code will be ignored.
  */
  var _default = {
    name: 'ember-data',
    initialize: _setupContainer.default
  };
  _exports.default = _default;
});
;define("location-demo/initializers/export-application-global", ["exports", "location-demo/config/environment"], function (_exports, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.initialize = initialize;
  _exports.default = void 0;

  function initialize() {
    var application = arguments[1] || arguments[0];

    if (_environment.default.exportApplicationGlobal !== false) {
      var theGlobal;

      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _environment.default.exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = Ember.String.classify(_environment.default.modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;
        application.reopen({
          willDestroy: function () {
            this._super.apply(this, arguments);

            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  var _default = {
    name: 'export-application-global',
    initialize: initialize
  };
  _exports.default = _default;
});
;define("location-demo/instance-initializers/ember-data", ["exports", "ember-data/initialize-store-service"], function (_exports, _initializeStoreService) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = {
    name: 'ember-data',
    initialize: _initializeStoreService.default
  };
  _exports.default = _default;
});
;define("location-demo/regions/city", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.city = void 0;
  let city = {
    "110000000000": [{
      "province": "北京市",
      "name": "市辖区",
      "id": "110100000000"
    }],
    "120000000000": [{
      "province": "天津市",
      "name": "市辖区",
      "id": "120100000000"
    }],
    "130000000000": [{
      "province": "河北省",
      "name": "石家庄市",
      "id": "130100000000"
    }, {
      "province": "河北省",
      "name": "唐山市",
      "id": "130200000000"
    }, {
      "province": "河北省",
      "name": "秦皇岛市",
      "id": "130300000000"
    }, {
      "province": "河北省",
      "name": "邯郸市",
      "id": "130400000000"
    }, {
      "province": "河北省",
      "name": "邢台市",
      "id": "130500000000"
    }, {
      "province": "河北省",
      "name": "保定市",
      "id": "130600000000"
    }, {
      "province": "河北省",
      "name": "张家口市",
      "id": "130700000000"
    }, {
      "province": "河北省",
      "name": "承德市",
      "id": "130800000000"
    }, {
      "province": "河北省",
      "name": "沧州市",
      "id": "130900000000"
    }, {
      "province": "河北省",
      "name": "廊坊市",
      "id": "131000000000"
    }, {
      "province": "河北省",
      "name": "衡水市",
      "id": "131100000000"
    }],
    "140000000000": [{
      "province": "山西省",
      "name": "太原市",
      "id": "140100000000"
    }, {
      "province": "山西省",
      "name": "大同市",
      "id": "140200000000"
    }, {
      "province": "山西省",
      "name": "阳泉市",
      "id": "140300000000"
    }, {
      "province": "山西省",
      "name": "长治市",
      "id": "140400000000"
    }, {
      "province": "山西省",
      "name": "晋城市",
      "id": "140500000000"
    }, {
      "province": "山西省",
      "name": "朔州市",
      "id": "140600000000"
    }, {
      "province": "山西省",
      "name": "晋中市",
      "id": "140700000000"
    }, {
      "province": "山西省",
      "name": "运城市",
      "id": "140800000000"
    }, {
      "province": "山西省",
      "name": "忻州市",
      "id": "140900000000"
    }, {
      "province": "山西省",
      "name": "临汾市",
      "id": "141000000000"
    }, {
      "province": "山西省",
      "name": "吕梁市",
      "id": "141100000000"
    }],
    "150000000000": [{
      "province": "内蒙古自治区",
      "name": "呼和浩特市",
      "id": "150100000000"
    }, {
      "province": "内蒙古自治区",
      "name": "包头市",
      "id": "150200000000"
    }, {
      "province": "内蒙古自治区",
      "name": "乌海市",
      "id": "150300000000"
    }, {
      "province": "内蒙古自治区",
      "name": "赤峰市",
      "id": "150400000000"
    }, {
      "province": "内蒙古自治区",
      "name": "通辽市",
      "id": "150500000000"
    }, {
      "province": "内蒙古自治区",
      "name": "鄂尔多斯市",
      "id": "150600000000"
    }, {
      "province": "内蒙古自治区",
      "name": "呼伦贝尔市",
      "id": "150700000000"
    }, {
      "province": "内蒙古自治区",
      "name": "巴彦淖尔市",
      "id": "150800000000"
    }, {
      "province": "内蒙古自治区",
      "name": "乌兰察布市",
      "id": "150900000000"
    }, {
      "province": "内蒙古自治区",
      "name": "兴安盟",
      "id": "152200000000"
    }, {
      "province": "内蒙古自治区",
      "name": "锡林郭勒盟",
      "id": "152500000000"
    }, {
      "province": "内蒙古自治区",
      "name": "阿拉善盟",
      "id": "152900000000"
    }],
    "210000000000": [{
      "province": "辽宁省",
      "name": "沈阳市",
      "id": "210100000000"
    }, {
      "province": "辽宁省",
      "name": "大连市",
      "id": "210200000000"
    }, {
      "province": "辽宁省",
      "name": "鞍山市",
      "id": "210300000000"
    }, {
      "province": "辽宁省",
      "name": "抚顺市",
      "id": "210400000000"
    }, {
      "province": "辽宁省",
      "name": "本溪市",
      "id": "210500000000"
    }, {
      "province": "辽宁省",
      "name": "丹东市",
      "id": "210600000000"
    }, {
      "province": "辽宁省",
      "name": "锦州市",
      "id": "210700000000"
    }, {
      "province": "辽宁省",
      "name": "营口市",
      "id": "210800000000"
    }, {
      "province": "辽宁省",
      "name": "阜新市",
      "id": "210900000000"
    }, {
      "province": "辽宁省",
      "name": "辽阳市",
      "id": "211000000000"
    }, {
      "province": "辽宁省",
      "name": "盘锦市",
      "id": "211100000000"
    }, {
      "province": "辽宁省",
      "name": "铁岭市",
      "id": "211200000000"
    }, {
      "province": "辽宁省",
      "name": "朝阳市",
      "id": "211300000000"
    }, {
      "province": "辽宁省",
      "name": "葫芦岛市",
      "id": "211400000000"
    }],
    "220000000000": [{
      "province": "吉林省",
      "name": "长春市",
      "id": "220100000000"
    }, {
      "province": "吉林省",
      "name": "吉林市",
      "id": "220200000000"
    }, {
      "province": "吉林省",
      "name": "四平市",
      "id": "220300000000"
    }, {
      "province": "吉林省",
      "name": "辽源市",
      "id": "220400000000"
    }, {
      "province": "吉林省",
      "name": "通化市",
      "id": "220500000000"
    }, {
      "province": "吉林省",
      "name": "白山市",
      "id": "220600000000"
    }, {
      "province": "吉林省",
      "name": "松原市",
      "id": "220700000000"
    }, {
      "province": "吉林省",
      "name": "白城市",
      "id": "220800000000"
    }, {
      "province": "吉林省",
      "name": "延边朝鲜族自治州",
      "id": "222400000000"
    }],
    "230000000000": [{
      "province": "黑龙江省",
      "name": "哈尔滨市",
      "id": "230100000000"
    }, {
      "province": "黑龙江省",
      "name": "齐齐哈尔市",
      "id": "230200000000"
    }, {
      "province": "黑龙江省",
      "name": "鸡西市",
      "id": "230300000000"
    }, {
      "province": "黑龙江省",
      "name": "鹤岗市",
      "id": "230400000000"
    }, {
      "province": "黑龙江省",
      "name": "双鸭山市",
      "id": "230500000000"
    }, {
      "province": "黑龙江省",
      "name": "大庆市",
      "id": "230600000000"
    }, {
      "province": "黑龙江省",
      "name": "伊春市",
      "id": "230700000000"
    }, {
      "province": "黑龙江省",
      "name": "佳木斯市",
      "id": "230800000000"
    }, {
      "province": "黑龙江省",
      "name": "七台河市",
      "id": "230900000000"
    }, {
      "province": "黑龙江省",
      "name": "牡丹江市",
      "id": "231000000000"
    }, {
      "province": "黑龙江省",
      "name": "黑河市",
      "id": "231100000000"
    }, {
      "province": "黑龙江省",
      "name": "绥化市",
      "id": "231200000000"
    }, {
      "province": "黑龙江省",
      "name": "大兴安岭地区",
      "id": "232700000000"
    }],
    "310000000000": [{
      "province": "上海市",
      "name": "市辖区",
      "id": "310100000000"
    }],
    "320000000000": [{
      "province": "江苏省",
      "name": "南京市",
      "id": "320100000000"
    }, {
      "province": "江苏省",
      "name": "无锡市",
      "id": "320200000000"
    }, {
      "province": "江苏省",
      "name": "徐州市",
      "id": "320300000000"
    }, {
      "province": "江苏省",
      "name": "常州市",
      "id": "320400000000"
    }, {
      "province": "江苏省",
      "name": "苏州市",
      "id": "320500000000"
    }, {
      "province": "江苏省",
      "name": "南通市",
      "id": "320600000000"
    }, {
      "province": "江苏省",
      "name": "连云港市",
      "id": "320700000000"
    }, {
      "province": "江苏省",
      "name": "淮安市",
      "id": "320800000000"
    }, {
      "province": "江苏省",
      "name": "盐城市",
      "id": "320900000000"
    }, {
      "province": "江苏省",
      "name": "扬州市",
      "id": "321000000000"
    }, {
      "province": "江苏省",
      "name": "镇江市",
      "id": "321100000000"
    }, {
      "province": "江苏省",
      "name": "泰州市",
      "id": "321200000000"
    }, {
      "province": "江苏省",
      "name": "宿迁市",
      "id": "321300000000"
    }],
    "330000000000": [{
      "province": "浙江省",
      "name": "杭州市",
      "id": "330100000000"
    }, {
      "province": "浙江省",
      "name": "宁波市",
      "id": "330200000000"
    }, {
      "province": "浙江省",
      "name": "温州市",
      "id": "330300000000"
    }, {
      "province": "浙江省",
      "name": "嘉兴市",
      "id": "330400000000"
    }, {
      "province": "浙江省",
      "name": "湖州市",
      "id": "330500000000"
    }, {
      "province": "浙江省",
      "name": "绍兴市",
      "id": "330600000000"
    }, {
      "province": "浙江省",
      "name": "金华市",
      "id": "330700000000"
    }, {
      "province": "浙江省",
      "name": "衢州市",
      "id": "330800000000"
    }, {
      "province": "浙江省",
      "name": "舟山市",
      "id": "330900000000"
    }, {
      "province": "浙江省",
      "name": "台州市",
      "id": "331000000000"
    }, {
      "province": "浙江省",
      "name": "丽水市",
      "id": "331100000000"
    }],
    "340000000000": [{
      "province": "安徽省",
      "name": "合肥市",
      "id": "340100000000"
    }, {
      "province": "安徽省",
      "name": "芜湖市",
      "id": "340200000000"
    }, {
      "province": "安徽省",
      "name": "蚌埠市",
      "id": "340300000000"
    }, {
      "province": "安徽省",
      "name": "淮南市",
      "id": "340400000000"
    }, {
      "province": "安徽省",
      "name": "马鞍山市",
      "id": "340500000000"
    }, {
      "province": "安徽省",
      "name": "淮北市",
      "id": "340600000000"
    }, {
      "province": "安徽省",
      "name": "铜陵市",
      "id": "340700000000"
    }, {
      "province": "安徽省",
      "name": "安庆市",
      "id": "340800000000"
    }, {
      "province": "安徽省",
      "name": "黄山市",
      "id": "341000000000"
    }, {
      "province": "安徽省",
      "name": "滁州市",
      "id": "341100000000"
    }, {
      "province": "安徽省",
      "name": "阜阳市",
      "id": "341200000000"
    }, {
      "province": "安徽省",
      "name": "宿州市",
      "id": "341300000000"
    }, {
      "province": "安徽省",
      "name": "六安市",
      "id": "341500000000"
    }, {
      "province": "安徽省",
      "name": "亳州市",
      "id": "341600000000"
    }, {
      "province": "安徽省",
      "name": "池州市",
      "id": "341700000000"
    }, {
      "province": "安徽省",
      "name": "宣城市",
      "id": "341800000000"
    }],
    "350000000000": [{
      "province": "福建省",
      "name": "福州市",
      "id": "350100000000"
    }, {
      "province": "福建省",
      "name": "厦门市",
      "id": "350200000000"
    }, {
      "province": "福建省",
      "name": "莆田市",
      "id": "350300000000"
    }, {
      "province": "福建省",
      "name": "三明市",
      "id": "350400000000"
    }, {
      "province": "福建省",
      "name": "泉州市",
      "id": "350500000000"
    }, {
      "province": "福建省",
      "name": "漳州市",
      "id": "350600000000"
    }, {
      "province": "福建省",
      "name": "南平市",
      "id": "350700000000"
    }, {
      "province": "福建省",
      "name": "龙岩市",
      "id": "350800000000"
    }, {
      "province": "福建省",
      "name": "宁德市",
      "id": "350900000000"
    }],
    "360000000000": [{
      "province": "江西省",
      "name": "南昌市",
      "id": "360100000000"
    }, {
      "province": "江西省",
      "name": "景德镇市",
      "id": "360200000000"
    }, {
      "province": "江西省",
      "name": "萍乡市",
      "id": "360300000000"
    }, {
      "province": "江西省",
      "name": "九江市",
      "id": "360400000000"
    }, {
      "province": "江西省",
      "name": "新余市",
      "id": "360500000000"
    }, {
      "province": "江西省",
      "name": "鹰潭市",
      "id": "360600000000"
    }, {
      "province": "江西省",
      "name": "赣州市",
      "id": "360700000000"
    }, {
      "province": "江西省",
      "name": "吉安市",
      "id": "360800000000"
    }, {
      "province": "江西省",
      "name": "宜春市",
      "id": "360900000000"
    }, {
      "province": "江西省",
      "name": "抚州市",
      "id": "361000000000"
    }, {
      "province": "江西省",
      "name": "上饶市",
      "id": "361100000000"
    }],
    "370000000000": [{
      "province": "山东省",
      "name": "济南市",
      "id": "370100000000"
    }, {
      "province": "山东省",
      "name": "青岛市",
      "id": "370200000000"
    }, {
      "province": "山东省",
      "name": "淄博市",
      "id": "370300000000"
    }, {
      "province": "山东省",
      "name": "枣庄市",
      "id": "370400000000"
    }, {
      "province": "山东省",
      "name": "东营市",
      "id": "370500000000"
    }, {
      "province": "山东省",
      "name": "烟台市",
      "id": "370600000000"
    }, {
      "province": "山东省",
      "name": "潍坊市",
      "id": "370700000000"
    }, {
      "province": "山东省",
      "name": "济宁市",
      "id": "370800000000"
    }, {
      "province": "山东省",
      "name": "泰安市",
      "id": "370900000000"
    }, {
      "province": "山东省",
      "name": "威海市",
      "id": "371000000000"
    }, {
      "province": "山东省",
      "name": "日照市",
      "id": "371100000000"
    }, {
      "province": "山东省",
      "name": "莱芜市",
      "id": "371200000000"
    }, {
      "province": "山东省",
      "name": "临沂市",
      "id": "371300000000"
    }, {
      "province": "山东省",
      "name": "德州市",
      "id": "371400000000"
    }, {
      "province": "山东省",
      "name": "聊城市",
      "id": "371500000000"
    }, {
      "province": "山东省",
      "name": "滨州市",
      "id": "371600000000"
    }, {
      "province": "山东省",
      "name": "菏泽市",
      "id": "371700000000"
    }],
    "410000000000": [{
      "province": "河南省",
      "name": "郑州市",
      "id": "410100000000"
    }, {
      "province": "河南省",
      "name": "开封市",
      "id": "410200000000"
    }, {
      "province": "河南省",
      "name": "洛阳市",
      "id": "410300000000"
    }, {
      "province": "河南省",
      "name": "平顶山市",
      "id": "410400000000"
    }, {
      "province": "河南省",
      "name": "安阳市",
      "id": "410500000000"
    }, {
      "province": "河南省",
      "name": "鹤壁市",
      "id": "410600000000"
    }, {
      "province": "河南省",
      "name": "新乡市",
      "id": "410700000000"
    }, {
      "province": "河南省",
      "name": "焦作市",
      "id": "410800000000"
    }, {
      "province": "河南省",
      "name": "濮阳市",
      "id": "410900000000"
    }, {
      "province": "河南省",
      "name": "许昌市",
      "id": "411000000000"
    }, {
      "province": "河南省",
      "name": "漯河市",
      "id": "411100000000"
    }, {
      "province": "河南省",
      "name": "三门峡市",
      "id": "411200000000"
    }, {
      "province": "河南省",
      "name": "南阳市",
      "id": "411300000000"
    }, {
      "province": "河南省",
      "name": "商丘市",
      "id": "411400000000"
    }, {
      "province": "河南省",
      "name": "信阳市",
      "id": "411500000000"
    }, {
      "province": "河南省",
      "name": "周口市",
      "id": "411600000000"
    }, {
      "province": "河南省",
      "name": "驻马店市",
      "id": "411700000000"
    }, {
      "province": "河南省",
      "name": "省直辖县级行政区划",
      "id": "419000000000"
    }],
    "420000000000": [{
      "province": "湖北省",
      "name": "武汉市",
      "id": "420100000000"
    }, {
      "province": "湖北省",
      "name": "黄石市",
      "id": "420200000000"
    }, {
      "province": "湖北省",
      "name": "十堰市",
      "id": "420300000000"
    }, {
      "province": "湖北省",
      "name": "宜昌市",
      "id": "420500000000"
    }, {
      "province": "湖北省",
      "name": "襄阳市",
      "id": "420600000000"
    }, {
      "province": "湖北省",
      "name": "鄂州市",
      "id": "420700000000"
    }, {
      "province": "湖北省",
      "name": "荆门市",
      "id": "420800000000"
    }, {
      "province": "湖北省",
      "name": "孝感市",
      "id": "420900000000"
    }, {
      "province": "湖北省",
      "name": "荆州市",
      "id": "421000000000"
    }, {
      "province": "湖北省",
      "name": "黄冈市",
      "id": "421100000000"
    }, {
      "province": "湖北省",
      "name": "咸宁市",
      "id": "421200000000"
    }, {
      "province": "湖北省",
      "name": "随州市",
      "id": "421300000000"
    }, {
      "province": "湖北省",
      "name": "恩施土家族苗族自治州",
      "id": "422800000000"
    }, {
      "province": "湖北省",
      "name": "省直辖县级行政区划",
      "id": "429000000000"
    }],
    "430000000000": [{
      "province": "湖南省",
      "name": "长沙市",
      "id": "430100000000"
    }, {
      "province": "湖南省",
      "name": "株洲市",
      "id": "430200000000"
    }, {
      "province": "湖南省",
      "name": "湘潭市",
      "id": "430300000000"
    }, {
      "province": "湖南省",
      "name": "衡阳市",
      "id": "430400000000"
    }, {
      "province": "湖南省",
      "name": "邵阳市",
      "id": "430500000000"
    }, {
      "province": "湖南省",
      "name": "岳阳市",
      "id": "430600000000"
    }, {
      "province": "湖南省",
      "name": "常德市",
      "id": "430700000000"
    }, {
      "province": "湖南省",
      "name": "张家界市",
      "id": "430800000000"
    }, {
      "province": "湖南省",
      "name": "益阳市",
      "id": "430900000000"
    }, {
      "province": "湖南省",
      "name": "郴州市",
      "id": "431000000000"
    }, {
      "province": "湖南省",
      "name": "永州市",
      "id": "431100000000"
    }, {
      "province": "湖南省",
      "name": "怀化市",
      "id": "431200000000"
    }, {
      "province": "湖南省",
      "name": "娄底市",
      "id": "431300000000"
    }, {
      "province": "湖南省",
      "name": "湘西土家族苗族自治州",
      "id": "433100000000"
    }],
    "440000000000": [{
      "province": "广东省",
      "name": "广州市",
      "id": "440100000000"
    }, {
      "province": "广东省",
      "name": "韶关市",
      "id": "440200000000"
    }, {
      "province": "广东省",
      "name": "深圳市",
      "id": "440300000000"
    }, {
      "province": "广东省",
      "name": "珠海市",
      "id": "440400000000"
    }, {
      "province": "广东省",
      "name": "汕头市",
      "id": "440500000000"
    }, {
      "province": "广东省",
      "name": "佛山市",
      "id": "440600000000"
    }, {
      "province": "广东省",
      "name": "江门市",
      "id": "440700000000"
    }, {
      "province": "广东省",
      "name": "湛江市",
      "id": "440800000000"
    }, {
      "province": "广东省",
      "name": "茂名市",
      "id": "440900000000"
    }, {
      "province": "广东省",
      "name": "肇庆市",
      "id": "441200000000"
    }, {
      "province": "广东省",
      "name": "惠州市",
      "id": "441300000000"
    }, {
      "province": "广东省",
      "name": "梅州市",
      "id": "441400000000"
    }, {
      "province": "广东省",
      "name": "汕尾市",
      "id": "441500000000"
    }, {
      "province": "广东省",
      "name": "河源市",
      "id": "441600000000"
    }, {
      "province": "广东省",
      "name": "阳江市",
      "id": "441700000000"
    }, {
      "province": "广东省",
      "name": "清远市",
      "id": "441800000000"
    }, {
      "province": "广东省",
      "name": "东莞市",
      "id": "441900000000"
    }, {
      "province": "广东省",
      "name": "中山市",
      "id": "442000000000"
    }, {
      "province": "广东省",
      "name": "潮州市",
      "id": "445100000000"
    }, {
      "province": "广东省",
      "name": "揭阳市",
      "id": "445200000000"
    }, {
      "province": "广东省",
      "name": "云浮市",
      "id": "445300000000"
    }],
    "450000000000": [{
      "province": "广西壮族自治区",
      "name": "南宁市",
      "id": "450100000000"
    }, {
      "province": "广西壮族自治区",
      "name": "柳州市",
      "id": "450200000000"
    }, {
      "province": "广西壮族自治区",
      "name": "桂林市",
      "id": "450300000000"
    }, {
      "province": "广西壮族自治区",
      "name": "梧州市",
      "id": "450400000000"
    }, {
      "province": "广西壮族自治区",
      "name": "北海市",
      "id": "450500000000"
    }, {
      "province": "广西壮族自治区",
      "name": "防城港市",
      "id": "450600000000"
    }, {
      "province": "广西壮族自治区",
      "name": "钦州市",
      "id": "450700000000"
    }, {
      "province": "广西壮族自治区",
      "name": "贵港市",
      "id": "450800000000"
    }, {
      "province": "广西壮族自治区",
      "name": "玉林市",
      "id": "450900000000"
    }, {
      "province": "广西壮族自治区",
      "name": "百色市",
      "id": "451000000000"
    }, {
      "province": "广西壮族自治区",
      "name": "贺州市",
      "id": "451100000000"
    }, {
      "province": "广西壮族自治区",
      "name": "河池市",
      "id": "451200000000"
    }, {
      "province": "广西壮族自治区",
      "name": "来宾市",
      "id": "451300000000"
    }, {
      "province": "广西壮族自治区",
      "name": "崇左市",
      "id": "451400000000"
    }],
    "460000000000": [{
      "province": "海南省",
      "name": "海口市",
      "id": "460100000000"
    }, {
      "province": "海南省",
      "name": "三亚市",
      "id": "460200000000"
    }, {
      "province": "海南省",
      "name": "三沙市",
      "id": "460300000000"
    }, {
      "province": "海南省",
      "name": "儋州市",
      "id": "460400000000"
    }, {
      "province": "海南省",
      "name": "省直辖县级行政区划",
      "id": "469000000000"
    }],
    "500000000000": [{
      "province": "重庆市",
      "name": "市辖区",
      "id": "500100000000"
    }, {
      "province": "重庆市",
      "name": "县",
      "id": "500200000000"
    }],
    "510000000000": [{
      "province": "四川省",
      "name": "成都市",
      "id": "510100000000"
    }, {
      "province": "四川省",
      "name": "自贡市",
      "id": "510300000000"
    }, {
      "province": "四川省",
      "name": "攀枝花市",
      "id": "510400000000"
    }, {
      "province": "四川省",
      "name": "泸州市",
      "id": "510500000000"
    }, {
      "province": "四川省",
      "name": "德阳市",
      "id": "510600000000"
    }, {
      "province": "四川省",
      "name": "绵阳市",
      "id": "510700000000"
    }, {
      "province": "四川省",
      "name": "广元市",
      "id": "510800000000"
    }, {
      "province": "四川省",
      "name": "遂宁市",
      "id": "510900000000"
    }, {
      "province": "四川省",
      "name": "内江市",
      "id": "511000000000"
    }, {
      "province": "四川省",
      "name": "乐山市",
      "id": "511100000000"
    }, {
      "province": "四川省",
      "name": "南充市",
      "id": "511300000000"
    }, {
      "province": "四川省",
      "name": "眉山市",
      "id": "511400000000"
    }, {
      "province": "四川省",
      "name": "宜宾市",
      "id": "511500000000"
    }, {
      "province": "四川省",
      "name": "广安市",
      "id": "511600000000"
    }, {
      "province": "四川省",
      "name": "达州市",
      "id": "511700000000"
    }, {
      "province": "四川省",
      "name": "雅安市",
      "id": "511800000000"
    }, {
      "province": "四川省",
      "name": "巴中市",
      "id": "511900000000"
    }, {
      "province": "四川省",
      "name": "资阳市",
      "id": "512000000000"
    }, {
      "province": "四川省",
      "name": "阿坝藏族羌族自治州",
      "id": "513200000000"
    }, {
      "province": "四川省",
      "name": "甘孜藏族自治州",
      "id": "513300000000"
    }, {
      "province": "四川省",
      "name": "凉山彝族自治州",
      "id": "513400000000"
    }],
    "520000000000": [{
      "province": "贵州省",
      "name": "贵阳市",
      "id": "520100000000"
    }, {
      "province": "贵州省",
      "name": "六盘水市",
      "id": "520200000000"
    }, {
      "province": "贵州省",
      "name": "遵义市",
      "id": "520300000000"
    }, {
      "province": "贵州省",
      "name": "安顺市",
      "id": "520400000000"
    }, {
      "province": "贵州省",
      "name": "毕节市",
      "id": "520500000000"
    }, {
      "province": "贵州省",
      "name": "铜仁市",
      "id": "520600000000"
    }, {
      "province": "贵州省",
      "name": "黔西南布依族苗族自治州",
      "id": "522300000000"
    }, {
      "province": "贵州省",
      "name": "黔东南苗族侗族自治州",
      "id": "522600000000"
    }, {
      "province": "贵州省",
      "name": "黔南布依族苗族自治州",
      "id": "522700000000"
    }],
    "530000000000": [{
      "province": "云南省",
      "name": "昆明市",
      "id": "530100000000"
    }, {
      "province": "云南省",
      "name": "曲靖市",
      "id": "530300000000"
    }, {
      "province": "云南省",
      "name": "玉溪市",
      "id": "530400000000"
    }, {
      "province": "云南省",
      "name": "保山市",
      "id": "530500000000"
    }, {
      "province": "云南省",
      "name": "昭通市",
      "id": "530600000000"
    }, {
      "province": "云南省",
      "name": "丽江市",
      "id": "530700000000"
    }, {
      "province": "云南省",
      "name": "普洱市",
      "id": "530800000000"
    }, {
      "province": "云南省",
      "name": "临沧市",
      "id": "530900000000"
    }, {
      "province": "云南省",
      "name": "楚雄彝族自治州",
      "id": "532300000000"
    }, {
      "province": "云南省",
      "name": "红河哈尼族彝族自治州",
      "id": "532500000000"
    }, {
      "province": "云南省",
      "name": "文山壮族苗族自治州",
      "id": "532600000000"
    }, {
      "province": "云南省",
      "name": "西双版纳傣族自治州",
      "id": "532800000000"
    }, {
      "province": "云南省",
      "name": "大理白族自治州",
      "id": "532900000000"
    }, {
      "province": "云南省",
      "name": "德宏傣族景颇族自治州",
      "id": "533100000000"
    }, {
      "province": "云南省",
      "name": "怒江傈僳族自治州",
      "id": "533300000000"
    }, {
      "province": "云南省",
      "name": "迪庆藏族自治州",
      "id": "533400000000"
    }],
    "540000000000": [{
      "province": "西藏自治区",
      "name": "拉萨市",
      "id": "540100000000"
    }, {
      "province": "西藏自治区",
      "name": "日喀则市",
      "id": "540200000000"
    }, {
      "province": "西藏自治区",
      "name": "昌都市",
      "id": "540300000000"
    }, {
      "province": "西藏自治区",
      "name": "林芝市",
      "id": "540400000000"
    }, {
      "province": "西藏自治区",
      "name": "山南市",
      "id": "540500000000"
    }, {
      "province": "西藏自治区",
      "name": "那曲市",
      "id": "540600000000"
    }, {
      "province": "西藏自治区",
      "name": "阿里地区",
      "id": "542500000000"
    }],
    "610000000000": [{
      "province": "陕西省",
      "name": "西安市",
      "id": "610100000000"
    }, {
      "province": "陕西省",
      "name": "铜川市",
      "id": "610200000000"
    }, {
      "province": "陕西省",
      "name": "宝鸡市",
      "id": "610300000000"
    }, {
      "province": "陕西省",
      "name": "咸阳市",
      "id": "610400000000"
    }, {
      "province": "陕西省",
      "name": "渭南市",
      "id": "610500000000"
    }, {
      "province": "陕西省",
      "name": "延安市",
      "id": "610600000000"
    }, {
      "province": "陕西省",
      "name": "汉中市",
      "id": "610700000000"
    }, {
      "province": "陕西省",
      "name": "榆林市",
      "id": "610800000000"
    }, {
      "province": "陕西省",
      "name": "安康市",
      "id": "610900000000"
    }, {
      "province": "陕西省",
      "name": "商洛市",
      "id": "611000000000"
    }],
    "620000000000": [{
      "province": "甘肃省",
      "name": "兰州市",
      "id": "620100000000"
    }, {
      "province": "甘肃省",
      "name": "嘉峪关市",
      "id": "620200000000"
    }, {
      "province": "甘肃省",
      "name": "金昌市",
      "id": "620300000000"
    }, {
      "province": "甘肃省",
      "name": "白银市",
      "id": "620400000000"
    }, {
      "province": "甘肃省",
      "name": "天水市",
      "id": "620500000000"
    }, {
      "province": "甘肃省",
      "name": "武威市",
      "id": "620600000000"
    }, {
      "province": "甘肃省",
      "name": "张掖市",
      "id": "620700000000"
    }, {
      "province": "甘肃省",
      "name": "平凉市",
      "id": "620800000000"
    }, {
      "province": "甘肃省",
      "name": "酒泉市",
      "id": "620900000000"
    }, {
      "province": "甘肃省",
      "name": "庆阳市",
      "id": "621000000000"
    }, {
      "province": "甘肃省",
      "name": "定西市",
      "id": "621100000000"
    }, {
      "province": "甘肃省",
      "name": "陇南市",
      "id": "621200000000"
    }, {
      "province": "甘肃省",
      "name": "临夏回族自治州",
      "id": "622900000000"
    }, {
      "province": "甘肃省",
      "name": "甘南藏族自治州",
      "id": "623000000000"
    }],
    "630000000000": [{
      "province": "青海省",
      "name": "西宁市",
      "id": "630100000000"
    }, {
      "province": "青海省",
      "name": "海东市",
      "id": "630200000000"
    }, {
      "province": "青海省",
      "name": "海北藏族自治州",
      "id": "632200000000"
    }, {
      "province": "青海省",
      "name": "黄南藏族自治州",
      "id": "632300000000"
    }, {
      "province": "青海省",
      "name": "海南藏族自治州",
      "id": "632500000000"
    }, {
      "province": "青海省",
      "name": "果洛藏族自治州",
      "id": "632600000000"
    }, {
      "province": "青海省",
      "name": "玉树藏族自治州",
      "id": "632700000000"
    }, {
      "province": "青海省",
      "name": "海西蒙古族藏族自治州",
      "id": "632800000000"
    }],
    "640000000000": [{
      "province": "宁夏回族自治区",
      "name": "银川市",
      "id": "640100000000"
    }, {
      "province": "宁夏回族自治区",
      "name": "石嘴山市",
      "id": "640200000000"
    }, {
      "province": "宁夏回族自治区",
      "name": "吴忠市",
      "id": "640300000000"
    }, {
      "province": "宁夏回族自治区",
      "name": "固原市",
      "id": "640400000000"
    }, {
      "province": "宁夏回族自治区",
      "name": "中卫市",
      "id": "640500000000"
    }],
    "650000000000": [{
      "province": "新疆维吾尔自治区",
      "name": "乌鲁木齐市",
      "id": "650100000000"
    }, {
      "province": "新疆维吾尔自治区",
      "name": "克拉玛依市",
      "id": "650200000000"
    }, {
      "province": "新疆维吾尔自治区",
      "name": "吐鲁番市",
      "id": "650400000000"
    }, {
      "province": "新疆维吾尔自治区",
      "name": "哈密市",
      "id": "650500000000"
    }, {
      "province": "新疆维吾尔自治区",
      "name": "昌吉回族自治州",
      "id": "652300000000"
    }, {
      "province": "新疆维吾尔自治区",
      "name": "博尔塔拉蒙古自治州",
      "id": "652700000000"
    }, {
      "province": "新疆维吾尔自治区",
      "name": "巴音郭楞蒙古自治州",
      "id": "652800000000"
    }, {
      "province": "新疆维吾尔自治区",
      "name": "阿克苏地区",
      "id": "652900000000"
    }, {
      "province": "新疆维吾尔自治区",
      "name": "克孜勒苏柯尔克孜自治州",
      "id": "653000000000"
    }, {
      "province": "新疆维吾尔自治区",
      "name": "喀什地区",
      "id": "653100000000"
    }, {
      "province": "新疆维吾尔自治区",
      "name": "和田地区",
      "id": "653200000000"
    }, {
      "province": "新疆维吾尔自治区",
      "name": "伊犁哈萨克自治州",
      "id": "654000000000"
    }, {
      "province": "新疆维吾尔自治区",
      "name": "塔城地区",
      "id": "654200000000"
    }, {
      "province": "新疆维吾尔自治区",
      "name": "阿勒泰地区",
      "id": "654300000000"
    }, {
      "province": "新疆维吾尔自治区",
      "name": "自治区直辖县级行政区划",
      "id": "659000000000"
    }]
  };
  _exports.city = city;
});
;define("location-demo/regions/city_object", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.city_object = void 0;
  let city_object = {
    "110100000000": {
      "province": "北京市",
      "name": "市辖区",
      "id": "110100000000"
    },
    "120100000000": {
      "province": "天津市",
      "name": "市辖区",
      "id": "120100000000"
    },
    "130100000000": {
      "province": "河北省",
      "name": "石家庄市",
      "id": "130100000000"
    },
    "130200000000": {
      "province": "河北省",
      "name": "唐山市",
      "id": "130200000000"
    },
    "130300000000": {
      "province": "河北省",
      "name": "秦皇岛市",
      "id": "130300000000"
    },
    "130400000000": {
      "province": "河北省",
      "name": "邯郸市",
      "id": "130400000000"
    },
    "130500000000": {
      "province": "河北省",
      "name": "邢台市",
      "id": "130500000000"
    },
    "130600000000": {
      "province": "河北省",
      "name": "保定市",
      "id": "130600000000"
    },
    "130700000000": {
      "province": "河北省",
      "name": "张家口市",
      "id": "130700000000"
    },
    "130800000000": {
      "province": "河北省",
      "name": "承德市",
      "id": "130800000000"
    },
    "130900000000": {
      "province": "河北省",
      "name": "沧州市",
      "id": "130900000000"
    },
    "131000000000": {
      "province": "河北省",
      "name": "廊坊市",
      "id": "131000000000"
    },
    "131100000000": {
      "province": "河北省",
      "name": "衡水市",
      "id": "131100000000"
    },
    "140100000000": {
      "province": "山西省",
      "name": "太原市",
      "id": "140100000000"
    },
    "140200000000": {
      "province": "山西省",
      "name": "大同市",
      "id": "140200000000"
    },
    "140300000000": {
      "province": "山西省",
      "name": "阳泉市",
      "id": "140300000000"
    },
    "140400000000": {
      "province": "山西省",
      "name": "长治市",
      "id": "140400000000"
    },
    "140500000000": {
      "province": "山西省",
      "name": "晋城市",
      "id": "140500000000"
    },
    "140600000000": {
      "province": "山西省",
      "name": "朔州市",
      "id": "140600000000"
    },
    "140700000000": {
      "province": "山西省",
      "name": "晋中市",
      "id": "140700000000"
    },
    "140800000000": {
      "province": "山西省",
      "name": "运城市",
      "id": "140800000000"
    },
    "140900000000": {
      "province": "山西省",
      "name": "忻州市",
      "id": "140900000000"
    },
    "141000000000": {
      "province": "山西省",
      "name": "临汾市",
      "id": "141000000000"
    },
    "141100000000": {
      "province": "山西省",
      "name": "吕梁市",
      "id": "141100000000"
    },
    "150100000000": {
      "province": "内蒙古自治区",
      "name": "呼和浩特市",
      "id": "150100000000"
    },
    "150200000000": {
      "province": "内蒙古自治区",
      "name": "包头市",
      "id": "150200000000"
    },
    "150300000000": {
      "province": "内蒙古自治区",
      "name": "乌海市",
      "id": "150300000000"
    },
    "150400000000": {
      "province": "内蒙古自治区",
      "name": "赤峰市",
      "id": "150400000000"
    },
    "150500000000": {
      "province": "内蒙古自治区",
      "name": "通辽市",
      "id": "150500000000"
    },
    "150600000000": {
      "province": "内蒙古自治区",
      "name": "鄂尔多斯市",
      "id": "150600000000"
    },
    "150700000000": {
      "province": "内蒙古自治区",
      "name": "呼伦贝尔市",
      "id": "150700000000"
    },
    "150800000000": {
      "province": "内蒙古自治区",
      "name": "巴彦淖尔市",
      "id": "150800000000"
    },
    "150900000000": {
      "province": "内蒙古自治区",
      "name": "乌兰察布市",
      "id": "150900000000"
    },
    "152200000000": {
      "province": "内蒙古自治区",
      "name": "兴安盟",
      "id": "152200000000"
    },
    "152500000000": {
      "province": "内蒙古自治区",
      "name": "锡林郭勒盟",
      "id": "152500000000"
    },
    "152900000000": {
      "province": "内蒙古自治区",
      "name": "阿拉善盟",
      "id": "152900000000"
    },
    "210100000000": {
      "province": "辽宁省",
      "name": "沈阳市",
      "id": "210100000000"
    },
    "210200000000": {
      "province": "辽宁省",
      "name": "大连市",
      "id": "210200000000"
    },
    "210300000000": {
      "province": "辽宁省",
      "name": "鞍山市",
      "id": "210300000000"
    },
    "210400000000": {
      "province": "辽宁省",
      "name": "抚顺市",
      "id": "210400000000"
    },
    "210500000000": {
      "province": "辽宁省",
      "name": "本溪市",
      "id": "210500000000"
    },
    "210600000000": {
      "province": "辽宁省",
      "name": "丹东市",
      "id": "210600000000"
    },
    "210700000000": {
      "province": "辽宁省",
      "name": "锦州市",
      "id": "210700000000"
    },
    "210800000000": {
      "province": "辽宁省",
      "name": "营口市",
      "id": "210800000000"
    },
    "210900000000": {
      "province": "辽宁省",
      "name": "阜新市",
      "id": "210900000000"
    },
    "211000000000": {
      "province": "辽宁省",
      "name": "辽阳市",
      "id": "211000000000"
    },
    "211100000000": {
      "province": "辽宁省",
      "name": "盘锦市",
      "id": "211100000000"
    },
    "211200000000": {
      "province": "辽宁省",
      "name": "铁岭市",
      "id": "211200000000"
    },
    "211300000000": {
      "province": "辽宁省",
      "name": "朝阳市",
      "id": "211300000000"
    },
    "211400000000": {
      "province": "辽宁省",
      "name": "葫芦岛市",
      "id": "211400000000"
    },
    "220100000000": {
      "province": "吉林省",
      "name": "长春市",
      "id": "220100000000"
    },
    "220200000000": {
      "province": "吉林省",
      "name": "吉林市",
      "id": "220200000000"
    },
    "220300000000": {
      "province": "吉林省",
      "name": "四平市",
      "id": "220300000000"
    },
    "220400000000": {
      "province": "吉林省",
      "name": "辽源市",
      "id": "220400000000"
    },
    "220500000000": {
      "province": "吉林省",
      "name": "通化市",
      "id": "220500000000"
    },
    "220600000000": {
      "province": "吉林省",
      "name": "白山市",
      "id": "220600000000"
    },
    "220700000000": {
      "province": "吉林省",
      "name": "松原市",
      "id": "220700000000"
    },
    "220800000000": {
      "province": "吉林省",
      "name": "白城市",
      "id": "220800000000"
    },
    "222400000000": {
      "province": "吉林省",
      "name": "延边朝鲜族自治州",
      "id": "222400000000"
    },
    "230100000000": {
      "province": "黑龙江省",
      "name": "哈尔滨市",
      "id": "230100000000"
    },
    "230200000000": {
      "province": "黑龙江省",
      "name": "齐齐哈尔市",
      "id": "230200000000"
    },
    "230300000000": {
      "province": "黑龙江省",
      "name": "鸡西市",
      "id": "230300000000"
    },
    "230400000000": {
      "province": "黑龙江省",
      "name": "鹤岗市",
      "id": "230400000000"
    },
    "230500000000": {
      "province": "黑龙江省",
      "name": "双鸭山市",
      "id": "230500000000"
    },
    "230600000000": {
      "province": "黑龙江省",
      "name": "大庆市",
      "id": "230600000000"
    },
    "230700000000": {
      "province": "黑龙江省",
      "name": "伊春市",
      "id": "230700000000"
    },
    "230800000000": {
      "province": "黑龙江省",
      "name": "佳木斯市",
      "id": "230800000000"
    },
    "230900000000": {
      "province": "黑龙江省",
      "name": "七台河市",
      "id": "230900000000"
    },
    "231000000000": {
      "province": "黑龙江省",
      "name": "牡丹江市",
      "id": "231000000000"
    },
    "231100000000": {
      "province": "黑龙江省",
      "name": "黑河市",
      "id": "231100000000"
    },
    "231200000000": {
      "province": "黑龙江省",
      "name": "绥化市",
      "id": "231200000000"
    },
    "232700000000": {
      "province": "黑龙江省",
      "name": "大兴安岭地区",
      "id": "232700000000"
    },
    "310100000000": {
      "province": "上海市",
      "name": "市辖区",
      "id": "310100000000"
    },
    "320100000000": {
      "province": "江苏省",
      "name": "南京市",
      "id": "320100000000"
    },
    "320200000000": {
      "province": "江苏省",
      "name": "无锡市",
      "id": "320200000000"
    },
    "320300000000": {
      "province": "江苏省",
      "name": "徐州市",
      "id": "320300000000"
    },
    "320400000000": {
      "province": "江苏省",
      "name": "常州市",
      "id": "320400000000"
    },
    "320500000000": {
      "province": "江苏省",
      "name": "苏州市",
      "id": "320500000000"
    },
    "320600000000": {
      "province": "江苏省",
      "name": "南通市",
      "id": "320600000000"
    },
    "320700000000": {
      "province": "江苏省",
      "name": "连云港市",
      "id": "320700000000"
    },
    "320800000000": {
      "province": "江苏省",
      "name": "淮安市",
      "id": "320800000000"
    },
    "320900000000": {
      "province": "江苏省",
      "name": "盐城市",
      "id": "320900000000"
    },
    "321000000000": {
      "province": "江苏省",
      "name": "扬州市",
      "id": "321000000000"
    },
    "321100000000": {
      "province": "江苏省",
      "name": "镇江市",
      "id": "321100000000"
    },
    "321200000000": {
      "province": "江苏省",
      "name": "泰州市",
      "id": "321200000000"
    },
    "321300000000": {
      "province": "江苏省",
      "name": "宿迁市",
      "id": "321300000000"
    },
    "330100000000": {
      "province": "浙江省",
      "name": "杭州市",
      "id": "330100000000"
    },
    "330200000000": {
      "province": "浙江省",
      "name": "宁波市",
      "id": "330200000000"
    },
    "330300000000": {
      "province": "浙江省",
      "name": "温州市",
      "id": "330300000000"
    },
    "330400000000": {
      "province": "浙江省",
      "name": "嘉兴市",
      "id": "330400000000"
    },
    "330500000000": {
      "province": "浙江省",
      "name": "湖州市",
      "id": "330500000000"
    },
    "330600000000": {
      "province": "浙江省",
      "name": "绍兴市",
      "id": "330600000000"
    },
    "330700000000": {
      "province": "浙江省",
      "name": "金华市",
      "id": "330700000000"
    },
    "330800000000": {
      "province": "浙江省",
      "name": "衢州市",
      "id": "330800000000"
    },
    "330900000000": {
      "province": "浙江省",
      "name": "舟山市",
      "id": "330900000000"
    },
    "331000000000": {
      "province": "浙江省",
      "name": "台州市",
      "id": "331000000000"
    },
    "331100000000": {
      "province": "浙江省",
      "name": "丽水市",
      "id": "331100000000"
    },
    "340100000000": {
      "province": "安徽省",
      "name": "合肥市",
      "id": "340100000000"
    },
    "340200000000": {
      "province": "安徽省",
      "name": "芜湖市",
      "id": "340200000000"
    },
    "340300000000": {
      "province": "安徽省",
      "name": "蚌埠市",
      "id": "340300000000"
    },
    "340400000000": {
      "province": "安徽省",
      "name": "淮南市",
      "id": "340400000000"
    },
    "340500000000": {
      "province": "安徽省",
      "name": "马鞍山市",
      "id": "340500000000"
    },
    "340600000000": {
      "province": "安徽省",
      "name": "淮北市",
      "id": "340600000000"
    },
    "340700000000": {
      "province": "安徽省",
      "name": "铜陵市",
      "id": "340700000000"
    },
    "340800000000": {
      "province": "安徽省",
      "name": "安庆市",
      "id": "340800000000"
    },
    "341000000000": {
      "province": "安徽省",
      "name": "黄山市",
      "id": "341000000000"
    },
    "341100000000": {
      "province": "安徽省",
      "name": "滁州市",
      "id": "341100000000"
    },
    "341200000000": {
      "province": "安徽省",
      "name": "阜阳市",
      "id": "341200000000"
    },
    "341300000000": {
      "province": "安徽省",
      "name": "宿州市",
      "id": "341300000000"
    },
    "341500000000": {
      "province": "安徽省",
      "name": "六安市",
      "id": "341500000000"
    },
    "341600000000": {
      "province": "安徽省",
      "name": "亳州市",
      "id": "341600000000"
    },
    "341700000000": {
      "province": "安徽省",
      "name": "池州市",
      "id": "341700000000"
    },
    "341800000000": {
      "province": "安徽省",
      "name": "宣城市",
      "id": "341800000000"
    },
    "350100000000": {
      "province": "福建省",
      "name": "福州市",
      "id": "350100000000"
    },
    "350200000000": {
      "province": "福建省",
      "name": "厦门市",
      "id": "350200000000"
    },
    "350300000000": {
      "province": "福建省",
      "name": "莆田市",
      "id": "350300000000"
    },
    "350400000000": {
      "province": "福建省",
      "name": "三明市",
      "id": "350400000000"
    },
    "350500000000": {
      "province": "福建省",
      "name": "泉州市",
      "id": "350500000000"
    },
    "350600000000": {
      "province": "福建省",
      "name": "漳州市",
      "id": "350600000000"
    },
    "350700000000": {
      "province": "福建省",
      "name": "南平市",
      "id": "350700000000"
    },
    "350800000000": {
      "province": "福建省",
      "name": "龙岩市",
      "id": "350800000000"
    },
    "350900000000": {
      "province": "福建省",
      "name": "宁德市",
      "id": "350900000000"
    },
    "360100000000": {
      "province": "江西省",
      "name": "南昌市",
      "id": "360100000000"
    },
    "360200000000": {
      "province": "江西省",
      "name": "景德镇市",
      "id": "360200000000"
    },
    "360300000000": {
      "province": "江西省",
      "name": "萍乡市",
      "id": "360300000000"
    },
    "360400000000": {
      "province": "江西省",
      "name": "九江市",
      "id": "360400000000"
    },
    "360500000000": {
      "province": "江西省",
      "name": "新余市",
      "id": "360500000000"
    },
    "360600000000": {
      "province": "江西省",
      "name": "鹰潭市",
      "id": "360600000000"
    },
    "360700000000": {
      "province": "江西省",
      "name": "赣州市",
      "id": "360700000000"
    },
    "360800000000": {
      "province": "江西省",
      "name": "吉安市",
      "id": "360800000000"
    },
    "360900000000": {
      "province": "江西省",
      "name": "宜春市",
      "id": "360900000000"
    },
    "361000000000": {
      "province": "江西省",
      "name": "抚州市",
      "id": "361000000000"
    },
    "361100000000": {
      "province": "江西省",
      "name": "上饶市",
      "id": "361100000000"
    },
    "370100000000": {
      "province": "山东省",
      "name": "济南市",
      "id": "370100000000"
    },
    "370200000000": {
      "province": "山东省",
      "name": "青岛市",
      "id": "370200000000"
    },
    "370300000000": {
      "province": "山东省",
      "name": "淄博市",
      "id": "370300000000"
    },
    "370400000000": {
      "province": "山东省",
      "name": "枣庄市",
      "id": "370400000000"
    },
    "370500000000": {
      "province": "山东省",
      "name": "东营市",
      "id": "370500000000"
    },
    "370600000000": {
      "province": "山东省",
      "name": "烟台市",
      "id": "370600000000"
    },
    "370700000000": {
      "province": "山东省",
      "name": "潍坊市",
      "id": "370700000000"
    },
    "370800000000": {
      "province": "山东省",
      "name": "济宁市",
      "id": "370800000000"
    },
    "370900000000": {
      "province": "山东省",
      "name": "泰安市",
      "id": "370900000000"
    },
    "371000000000": {
      "province": "山东省",
      "name": "威海市",
      "id": "371000000000"
    },
    "371100000000": {
      "province": "山东省",
      "name": "日照市",
      "id": "371100000000"
    },
    "371200000000": {
      "province": "山东省",
      "name": "莱芜市",
      "id": "371200000000"
    },
    "371300000000": {
      "province": "山东省",
      "name": "临沂市",
      "id": "371300000000"
    },
    "371400000000": {
      "province": "山东省",
      "name": "德州市",
      "id": "371400000000"
    },
    "371500000000": {
      "province": "山东省",
      "name": "聊城市",
      "id": "371500000000"
    },
    "371600000000": {
      "province": "山东省",
      "name": "滨州市",
      "id": "371600000000"
    },
    "371700000000": {
      "province": "山东省",
      "name": "菏泽市",
      "id": "371700000000"
    },
    "410100000000": {
      "province": "河南省",
      "name": "郑州市",
      "id": "410100000000"
    },
    "410200000000": {
      "province": "河南省",
      "name": "开封市",
      "id": "410200000000"
    },
    "410300000000": {
      "province": "河南省",
      "name": "洛阳市",
      "id": "410300000000"
    },
    "410400000000": {
      "province": "河南省",
      "name": "平顶山市",
      "id": "410400000000"
    },
    "410500000000": {
      "province": "河南省",
      "name": "安阳市",
      "id": "410500000000"
    },
    "410600000000": {
      "province": "河南省",
      "name": "鹤壁市",
      "id": "410600000000"
    },
    "410700000000": {
      "province": "河南省",
      "name": "新乡市",
      "id": "410700000000"
    },
    "410800000000": {
      "province": "河南省",
      "name": "焦作市",
      "id": "410800000000"
    },
    "410900000000": {
      "province": "河南省",
      "name": "濮阳市",
      "id": "410900000000"
    },
    "411000000000": {
      "province": "河南省",
      "name": "许昌市",
      "id": "411000000000"
    },
    "411100000000": {
      "province": "河南省",
      "name": "漯河市",
      "id": "411100000000"
    },
    "411200000000": {
      "province": "河南省",
      "name": "三门峡市",
      "id": "411200000000"
    },
    "411300000000": {
      "province": "河南省",
      "name": "南阳市",
      "id": "411300000000"
    },
    "411400000000": {
      "province": "河南省",
      "name": "商丘市",
      "id": "411400000000"
    },
    "411500000000": {
      "province": "河南省",
      "name": "信阳市",
      "id": "411500000000"
    },
    "411600000000": {
      "province": "河南省",
      "name": "周口市",
      "id": "411600000000"
    },
    "411700000000": {
      "province": "河南省",
      "name": "驻马店市",
      "id": "411700000000"
    },
    "419000000000": {
      "province": "河南省",
      "name": "省直辖县级行政区划",
      "id": "419000000000"
    },
    "420100000000": {
      "province": "湖北省",
      "name": "武汉市",
      "id": "420100000000"
    },
    "420200000000": {
      "province": "湖北省",
      "name": "黄石市",
      "id": "420200000000"
    },
    "420300000000": {
      "province": "湖北省",
      "name": "十堰市",
      "id": "420300000000"
    },
    "420500000000": {
      "province": "湖北省",
      "name": "宜昌市",
      "id": "420500000000"
    },
    "420600000000": {
      "province": "湖北省",
      "name": "襄阳市",
      "id": "420600000000"
    },
    "420700000000": {
      "province": "湖北省",
      "name": "鄂州市",
      "id": "420700000000"
    },
    "420800000000": {
      "province": "湖北省",
      "name": "荆门市",
      "id": "420800000000"
    },
    "420900000000": {
      "province": "湖北省",
      "name": "孝感市",
      "id": "420900000000"
    },
    "421000000000": {
      "province": "湖北省",
      "name": "荆州市",
      "id": "421000000000"
    },
    "421100000000": {
      "province": "湖北省",
      "name": "黄冈市",
      "id": "421100000000"
    },
    "421200000000": {
      "province": "湖北省",
      "name": "咸宁市",
      "id": "421200000000"
    },
    "421300000000": {
      "province": "湖北省",
      "name": "随州市",
      "id": "421300000000"
    },
    "422800000000": {
      "province": "湖北省",
      "name": "恩施土家族苗族自治州",
      "id": "422800000000"
    },
    "429000000000": {
      "province": "湖北省",
      "name": "省直辖县级行政区划",
      "id": "429000000000"
    },
    "430100000000": {
      "province": "湖南省",
      "name": "长沙市",
      "id": "430100000000"
    },
    "430200000000": {
      "province": "湖南省",
      "name": "株洲市",
      "id": "430200000000"
    },
    "430300000000": {
      "province": "湖南省",
      "name": "湘潭市",
      "id": "430300000000"
    },
    "430400000000": {
      "province": "湖南省",
      "name": "衡阳市",
      "id": "430400000000"
    },
    "430500000000": {
      "province": "湖南省",
      "name": "邵阳市",
      "id": "430500000000"
    },
    "430600000000": {
      "province": "湖南省",
      "name": "岳阳市",
      "id": "430600000000"
    },
    "430700000000": {
      "province": "湖南省",
      "name": "常德市",
      "id": "430700000000"
    },
    "430800000000": {
      "province": "湖南省",
      "name": "张家界市",
      "id": "430800000000"
    },
    "430900000000": {
      "province": "湖南省",
      "name": "益阳市",
      "id": "430900000000"
    },
    "431000000000": {
      "province": "湖南省",
      "name": "郴州市",
      "id": "431000000000"
    },
    "431100000000": {
      "province": "湖南省",
      "name": "永州市",
      "id": "431100000000"
    },
    "431200000000": {
      "province": "湖南省",
      "name": "怀化市",
      "id": "431200000000"
    },
    "431300000000": {
      "province": "湖南省",
      "name": "娄底市",
      "id": "431300000000"
    },
    "433100000000": {
      "province": "湖南省",
      "name": "湘西土家族苗族自治州",
      "id": "433100000000"
    },
    "440100000000": {
      "province": "广东省",
      "name": "广州市",
      "id": "440100000000"
    },
    "440200000000": {
      "province": "广东省",
      "name": "韶关市",
      "id": "440200000000"
    },
    "440300000000": {
      "province": "广东省",
      "name": "深圳市",
      "id": "440300000000"
    },
    "440400000000": {
      "province": "广东省",
      "name": "珠海市",
      "id": "440400000000"
    },
    "440500000000": {
      "province": "广东省",
      "name": "汕头市",
      "id": "440500000000"
    },
    "440600000000": {
      "province": "广东省",
      "name": "佛山市",
      "id": "440600000000"
    },
    "440700000000": {
      "province": "广东省",
      "name": "江门市",
      "id": "440700000000"
    },
    "440800000000": {
      "province": "广东省",
      "name": "湛江市",
      "id": "440800000000"
    },
    "440900000000": {
      "province": "广东省",
      "name": "茂名市",
      "id": "440900000000"
    },
    "441200000000": {
      "province": "广东省",
      "name": "肇庆市",
      "id": "441200000000"
    },
    "441300000000": {
      "province": "广东省",
      "name": "惠州市",
      "id": "441300000000"
    },
    "441400000000": {
      "province": "广东省",
      "name": "梅州市",
      "id": "441400000000"
    },
    "441500000000": {
      "province": "广东省",
      "name": "汕尾市",
      "id": "441500000000"
    },
    "441600000000": {
      "province": "广东省",
      "name": "河源市",
      "id": "441600000000"
    },
    "441700000000": {
      "province": "广东省",
      "name": "阳江市",
      "id": "441700000000"
    },
    "441800000000": {
      "province": "广东省",
      "name": "清远市",
      "id": "441800000000"
    },
    "441900000000": {
      "province": "广东省",
      "name": "东莞市",
      "id": "441900000000"
    },
    "442000000000": {
      "province": "广东省",
      "name": "中山市",
      "id": "442000000000"
    },
    "445100000000": {
      "province": "广东省",
      "name": "潮州市",
      "id": "445100000000"
    },
    "445200000000": {
      "province": "广东省",
      "name": "揭阳市",
      "id": "445200000000"
    },
    "445300000000": {
      "province": "广东省",
      "name": "云浮市",
      "id": "445300000000"
    },
    "450100000000": {
      "province": "广西壮族自治区",
      "name": "南宁市",
      "id": "450100000000"
    },
    "450200000000": {
      "province": "广西壮族自治区",
      "name": "柳州市",
      "id": "450200000000"
    },
    "450300000000": {
      "province": "广西壮族自治区",
      "name": "桂林市",
      "id": "450300000000"
    },
    "450400000000": {
      "province": "广西壮族自治区",
      "name": "梧州市",
      "id": "450400000000"
    },
    "450500000000": {
      "province": "广西壮族自治区",
      "name": "北海市",
      "id": "450500000000"
    },
    "450600000000": {
      "province": "广西壮族自治区",
      "name": "防城港市",
      "id": "450600000000"
    },
    "450700000000": {
      "province": "广西壮族自治区",
      "name": "钦州市",
      "id": "450700000000"
    },
    "450800000000": {
      "province": "广西壮族自治区",
      "name": "贵港市",
      "id": "450800000000"
    },
    "450900000000": {
      "province": "广西壮族自治区",
      "name": "玉林市",
      "id": "450900000000"
    },
    "451000000000": {
      "province": "广西壮族自治区",
      "name": "百色市",
      "id": "451000000000"
    },
    "451100000000": {
      "province": "广西壮族自治区",
      "name": "贺州市",
      "id": "451100000000"
    },
    "451200000000": {
      "province": "广西壮族自治区",
      "name": "河池市",
      "id": "451200000000"
    },
    "451300000000": {
      "province": "广西壮族自治区",
      "name": "来宾市",
      "id": "451300000000"
    },
    "451400000000": {
      "province": "广西壮族自治区",
      "name": "崇左市",
      "id": "451400000000"
    },
    "460100000000": {
      "province": "海南省",
      "name": "海口市",
      "id": "460100000000"
    },
    "460200000000": {
      "province": "海南省",
      "name": "三亚市",
      "id": "460200000000"
    },
    "460300000000": {
      "province": "海南省",
      "name": "三沙市",
      "id": "460300000000"
    },
    "460400000000": {
      "province": "海南省",
      "name": "儋州市",
      "id": "460400000000"
    },
    "469000000000": {
      "province": "海南省",
      "name": "省直辖县级行政区划",
      "id": "469000000000"
    },
    "500100000000": {
      "province": "重庆市",
      "name": "市辖区",
      "id": "500100000000"
    },
    "500200000000": {
      "province": "重庆市",
      "name": "县",
      "id": "500200000000"
    },
    "510100000000": {
      "province": "四川省",
      "name": "成都市",
      "id": "510100000000"
    },
    "510300000000": {
      "province": "四川省",
      "name": "自贡市",
      "id": "510300000000"
    },
    "510400000000": {
      "province": "四川省",
      "name": "攀枝花市",
      "id": "510400000000"
    },
    "510500000000": {
      "province": "四川省",
      "name": "泸州市",
      "id": "510500000000"
    },
    "510600000000": {
      "province": "四川省",
      "name": "德阳市",
      "id": "510600000000"
    },
    "510700000000": {
      "province": "四川省",
      "name": "绵阳市",
      "id": "510700000000"
    },
    "510800000000": {
      "province": "四川省",
      "name": "广元市",
      "id": "510800000000"
    },
    "510900000000": {
      "province": "四川省",
      "name": "遂宁市",
      "id": "510900000000"
    },
    "511000000000": {
      "province": "四川省",
      "name": "内江市",
      "id": "511000000000"
    },
    "511100000000": {
      "province": "四川省",
      "name": "乐山市",
      "id": "511100000000"
    },
    "511300000000": {
      "province": "四川省",
      "name": "南充市",
      "id": "511300000000"
    },
    "511400000000": {
      "province": "四川省",
      "name": "眉山市",
      "id": "511400000000"
    },
    "511500000000": {
      "province": "四川省",
      "name": "宜宾市",
      "id": "511500000000"
    },
    "511600000000": {
      "province": "四川省",
      "name": "广安市",
      "id": "511600000000"
    },
    "511700000000": {
      "province": "四川省",
      "name": "达州市",
      "id": "511700000000"
    },
    "511800000000": {
      "province": "四川省",
      "name": "雅安市",
      "id": "511800000000"
    },
    "511900000000": {
      "province": "四川省",
      "name": "巴中市",
      "id": "511900000000"
    },
    "512000000000": {
      "province": "四川省",
      "name": "资阳市",
      "id": "512000000000"
    },
    "513200000000": {
      "province": "四川省",
      "name": "阿坝藏族羌族自治州",
      "id": "513200000000"
    },
    "513300000000": {
      "province": "四川省",
      "name": "甘孜藏族自治州",
      "id": "513300000000"
    },
    "513400000000": {
      "province": "四川省",
      "name": "凉山彝族自治州",
      "id": "513400000000"
    },
    "520100000000": {
      "province": "贵州省",
      "name": "贵阳市",
      "id": "520100000000"
    },
    "520200000000": {
      "province": "贵州省",
      "name": "六盘水市",
      "id": "520200000000"
    },
    "520300000000": {
      "province": "贵州省",
      "name": "遵义市",
      "id": "520300000000"
    },
    "520400000000": {
      "province": "贵州省",
      "name": "安顺市",
      "id": "520400000000"
    },
    "520500000000": {
      "province": "贵州省",
      "name": "毕节市",
      "id": "520500000000"
    },
    "520600000000": {
      "province": "贵州省",
      "name": "铜仁市",
      "id": "520600000000"
    },
    "522300000000": {
      "province": "贵州省",
      "name": "黔西南布依族苗族自治州",
      "id": "522300000000"
    },
    "522600000000": {
      "province": "贵州省",
      "name": "黔东南苗族侗族自治州",
      "id": "522600000000"
    },
    "522700000000": {
      "province": "贵州省",
      "name": "黔南布依族苗族自治州",
      "id": "522700000000"
    },
    "530100000000": {
      "province": "云南省",
      "name": "昆明市",
      "id": "530100000000"
    },
    "530300000000": {
      "province": "云南省",
      "name": "曲靖市",
      "id": "530300000000"
    },
    "530400000000": {
      "province": "云南省",
      "name": "玉溪市",
      "id": "530400000000"
    },
    "530500000000": {
      "province": "云南省",
      "name": "保山市",
      "id": "530500000000"
    },
    "530600000000": {
      "province": "云南省",
      "name": "昭通市",
      "id": "530600000000"
    },
    "530700000000": {
      "province": "云南省",
      "name": "丽江市",
      "id": "530700000000"
    },
    "530800000000": {
      "province": "云南省",
      "name": "普洱市",
      "id": "530800000000"
    },
    "530900000000": {
      "province": "云南省",
      "name": "临沧市",
      "id": "530900000000"
    },
    "532300000000": {
      "province": "云南省",
      "name": "楚雄彝族自治州",
      "id": "532300000000"
    },
    "532500000000": {
      "province": "云南省",
      "name": "红河哈尼族彝族自治州",
      "id": "532500000000"
    },
    "532600000000": {
      "province": "云南省",
      "name": "文山壮族苗族自治州",
      "id": "532600000000"
    },
    "532800000000": {
      "province": "云南省",
      "name": "西双版纳傣族自治州",
      "id": "532800000000"
    },
    "532900000000": {
      "province": "云南省",
      "name": "大理白族自治州",
      "id": "532900000000"
    },
    "533100000000": {
      "province": "云南省",
      "name": "德宏傣族景颇族自治州",
      "id": "533100000000"
    },
    "533300000000": {
      "province": "云南省",
      "name": "怒江傈僳族自治州",
      "id": "533300000000"
    },
    "533400000000": {
      "province": "云南省",
      "name": "迪庆藏族自治州",
      "id": "533400000000"
    },
    "540100000000": {
      "province": "西藏自治区",
      "name": "拉萨市",
      "id": "540100000000"
    },
    "540200000000": {
      "province": "西藏自治区",
      "name": "日喀则市",
      "id": "540200000000"
    },
    "540300000000": {
      "province": "西藏自治区",
      "name": "昌都市",
      "id": "540300000000"
    },
    "540400000000": {
      "province": "西藏自治区",
      "name": "林芝市",
      "id": "540400000000"
    },
    "540500000000": {
      "province": "西藏自治区",
      "name": "山南市",
      "id": "540500000000"
    },
    "540600000000": {
      "province": "西藏自治区",
      "name": "那曲市",
      "id": "540600000000"
    },
    "542500000000": {
      "province": "西藏自治区",
      "name": "阿里地区",
      "id": "542500000000"
    },
    "610100000000": {
      "province": "陕西省",
      "name": "西安市",
      "id": "610100000000"
    },
    "610200000000": {
      "province": "陕西省",
      "name": "铜川市",
      "id": "610200000000"
    },
    "610300000000": {
      "province": "陕西省",
      "name": "宝鸡市",
      "id": "610300000000"
    },
    "610400000000": {
      "province": "陕西省",
      "name": "咸阳市",
      "id": "610400000000"
    },
    "610500000000": {
      "province": "陕西省",
      "name": "渭南市",
      "id": "610500000000"
    },
    "610600000000": {
      "province": "陕西省",
      "name": "延安市",
      "id": "610600000000"
    },
    "610700000000": {
      "province": "陕西省",
      "name": "汉中市",
      "id": "610700000000"
    },
    "610800000000": {
      "province": "陕西省",
      "name": "榆林市",
      "id": "610800000000"
    },
    "610900000000": {
      "province": "陕西省",
      "name": "安康市",
      "id": "610900000000"
    },
    "611000000000": {
      "province": "陕西省",
      "name": "商洛市",
      "id": "611000000000"
    },
    "620100000000": {
      "province": "甘肃省",
      "name": "兰州市",
      "id": "620100000000"
    },
    "620200000000": {
      "province": "甘肃省",
      "name": "嘉峪关市",
      "id": "620200000000"
    },
    "620300000000": {
      "province": "甘肃省",
      "name": "金昌市",
      "id": "620300000000"
    },
    "620400000000": {
      "province": "甘肃省",
      "name": "白银市",
      "id": "620400000000"
    },
    "620500000000": {
      "province": "甘肃省",
      "name": "天水市",
      "id": "620500000000"
    },
    "620600000000": {
      "province": "甘肃省",
      "name": "武威市",
      "id": "620600000000"
    },
    "620700000000": {
      "province": "甘肃省",
      "name": "张掖市",
      "id": "620700000000"
    },
    "620800000000": {
      "province": "甘肃省",
      "name": "平凉市",
      "id": "620800000000"
    },
    "620900000000": {
      "province": "甘肃省",
      "name": "酒泉市",
      "id": "620900000000"
    },
    "621000000000": {
      "province": "甘肃省",
      "name": "庆阳市",
      "id": "621000000000"
    },
    "621100000000": {
      "province": "甘肃省",
      "name": "定西市",
      "id": "621100000000"
    },
    "621200000000": {
      "province": "甘肃省",
      "name": "陇南市",
      "id": "621200000000"
    },
    "622900000000": {
      "province": "甘肃省",
      "name": "临夏回族自治州",
      "id": "622900000000"
    },
    "623000000000": {
      "province": "甘肃省",
      "name": "甘南藏族自治州",
      "id": "623000000000"
    },
    "630100000000": {
      "province": "青海省",
      "name": "西宁市",
      "id": "630100000000"
    },
    "630200000000": {
      "province": "青海省",
      "name": "海东市",
      "id": "630200000000"
    },
    "632200000000": {
      "province": "青海省",
      "name": "海北藏族自治州",
      "id": "632200000000"
    },
    "632300000000": {
      "province": "青海省",
      "name": "黄南藏族自治州",
      "id": "632300000000"
    },
    "632500000000": {
      "province": "青海省",
      "name": "海南藏族自治州",
      "id": "632500000000"
    },
    "632600000000": {
      "province": "青海省",
      "name": "果洛藏族自治州",
      "id": "632600000000"
    },
    "632700000000": {
      "province": "青海省",
      "name": "玉树藏族自治州",
      "id": "632700000000"
    },
    "632800000000": {
      "province": "青海省",
      "name": "海西蒙古族藏族自治州",
      "id": "632800000000"
    },
    "640100000000": {
      "province": "宁夏回族自治区",
      "name": "银川市",
      "id": "640100000000"
    },
    "640200000000": {
      "province": "宁夏回族自治区",
      "name": "石嘴山市",
      "id": "640200000000"
    },
    "640300000000": {
      "province": "宁夏回族自治区",
      "name": "吴忠市",
      "id": "640300000000"
    },
    "640400000000": {
      "province": "宁夏回族自治区",
      "name": "固原市",
      "id": "640400000000"
    },
    "640500000000": {
      "province": "宁夏回族自治区",
      "name": "中卫市",
      "id": "640500000000"
    },
    "650100000000": {
      "province": "新疆维吾尔自治区",
      "name": "乌鲁木齐市",
      "id": "650100000000"
    },
    "650200000000": {
      "province": "新疆维吾尔自治区",
      "name": "克拉玛依市",
      "id": "650200000000"
    },
    "650400000000": {
      "province": "新疆维吾尔自治区",
      "name": "吐鲁番市",
      "id": "650400000000"
    },
    "650500000000": {
      "province": "新疆维吾尔自治区",
      "name": "哈密市",
      "id": "650500000000"
    },
    "652300000000": {
      "province": "新疆维吾尔自治区",
      "name": "昌吉回族自治州",
      "id": "652300000000"
    },
    "652700000000": {
      "province": "新疆维吾尔自治区",
      "name": "博尔塔拉蒙古自治州",
      "id": "652700000000"
    },
    "652800000000": {
      "province": "新疆维吾尔自治区",
      "name": "巴音郭楞蒙古自治州",
      "id": "652800000000"
    },
    "652900000000": {
      "province": "新疆维吾尔自治区",
      "name": "阿克苏地区",
      "id": "652900000000"
    },
    "653000000000": {
      "province": "新疆维吾尔自治区",
      "name": "克孜勒苏柯尔克孜自治州",
      "id": "653000000000"
    },
    "653100000000": {
      "province": "新疆维吾尔自治区",
      "name": "喀什地区",
      "id": "653100000000"
    },
    "653200000000": {
      "province": "新疆维吾尔自治区",
      "name": "和田地区",
      "id": "653200000000"
    },
    "654000000000": {
      "province": "新疆维吾尔自治区",
      "name": "伊犁哈萨克自治州",
      "id": "654000000000"
    },
    "654200000000": {
      "province": "新疆维吾尔自治区",
      "name": "塔城地区",
      "id": "654200000000"
    },
    "654300000000": {
      "province": "新疆维吾尔自治区",
      "name": "阿勒泰地区",
      "id": "654300000000"
    },
    "659000000000": {
      "province": "新疆维吾尔自治区",
      "name": "自治区直辖县级行政区划",
      "id": "659000000000"
    }
  };
  _exports.city_object = city_object;
});
;define("location-demo/regions/country", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.country = void 0;
  let country = {
    "110100000000": [{
      "city": "市辖区",
      "name": "东城区",
      "id": "110101000000"
    }, {
      "city": "市辖区",
      "name": "西城区",
      "id": "110102000000"
    }, {
      "city": "市辖区",
      "name": "朝阳区",
      "id": "110105000000"
    }, {
      "city": "市辖区",
      "name": "丰台区",
      "id": "110106000000"
    }, {
      "city": "市辖区",
      "name": "石景山区",
      "id": "110107000000"
    }, {
      "city": "市辖区",
      "name": "海淀区",
      "id": "110108000000"
    }, {
      "city": "市辖区",
      "name": "门头沟区",
      "id": "110109000000"
    }, {
      "city": "市辖区",
      "name": "房山区",
      "id": "110111000000"
    }, {
      "city": "市辖区",
      "name": "通州区",
      "id": "110112000000"
    }, {
      "city": "市辖区",
      "name": "顺义区",
      "id": "110113000000"
    }, {
      "city": "市辖区",
      "name": "昌平区",
      "id": "110114000000"
    }, {
      "city": "市辖区",
      "name": "大兴区",
      "id": "110115000000"
    }, {
      "city": "市辖区",
      "name": "怀柔区",
      "id": "110116000000"
    }, {
      "city": "市辖区",
      "name": "平谷区",
      "id": "110117000000"
    }, {
      "city": "市辖区",
      "name": "密云区",
      "id": "110118000000"
    }, {
      "city": "市辖区",
      "name": "延庆区",
      "id": "110119000000"
    }],
    "120100000000": [{
      "city": "市辖区",
      "name": "和平区",
      "id": "120101000000"
    }, {
      "city": "市辖区",
      "name": "河东区",
      "id": "120102000000"
    }, {
      "city": "市辖区",
      "name": "河西区",
      "id": "120103000000"
    }, {
      "city": "市辖区",
      "name": "南开区",
      "id": "120104000000"
    }, {
      "city": "市辖区",
      "name": "河北区",
      "id": "120105000000"
    }, {
      "city": "市辖区",
      "name": "红桥区",
      "id": "120106000000"
    }, {
      "city": "市辖区",
      "name": "东丽区",
      "id": "120110000000"
    }, {
      "city": "市辖区",
      "name": "西青区",
      "id": "120111000000"
    }, {
      "city": "市辖区",
      "name": "津南区",
      "id": "120112000000"
    }, {
      "city": "市辖区",
      "name": "北辰区",
      "id": "120113000000"
    }, {
      "city": "市辖区",
      "name": "武清区",
      "id": "120114000000"
    }, {
      "city": "市辖区",
      "name": "宝坻区",
      "id": "120115000000"
    }, {
      "city": "市辖区",
      "name": "滨海新区",
      "id": "120116000000"
    }, {
      "city": "市辖区",
      "name": "宁河区",
      "id": "120117000000"
    }, {
      "city": "市辖区",
      "name": "静海区",
      "id": "120118000000"
    }, {
      "city": "市辖区",
      "name": "蓟州区",
      "id": "120119000000"
    }],
    "130100000000": [{
      "city": "石家庄市",
      "name": "市辖区",
      "id": "130101000000"
    }, {
      "city": "石家庄市",
      "name": "长安区",
      "id": "130102000000"
    }, {
      "city": "石家庄市",
      "name": "桥西区",
      "id": "130104000000"
    }, {
      "city": "石家庄市",
      "name": "新华区",
      "id": "130105000000"
    }, {
      "city": "石家庄市",
      "name": "井陉矿区",
      "id": "130107000000"
    }, {
      "city": "石家庄市",
      "name": "裕华区",
      "id": "130108000000"
    }, {
      "city": "石家庄市",
      "name": "藁城区",
      "id": "130109000000"
    }, {
      "city": "石家庄市",
      "name": "鹿泉区",
      "id": "130110000000"
    }, {
      "city": "石家庄市",
      "name": "栾城区",
      "id": "130111000000"
    }, {
      "city": "石家庄市",
      "name": "井陉县",
      "id": "130121000000"
    }, {
      "city": "石家庄市",
      "name": "正定县",
      "id": "130123000000"
    }, {
      "city": "石家庄市",
      "name": "行唐县",
      "id": "130125000000"
    }, {
      "city": "石家庄市",
      "name": "灵寿县",
      "id": "130126000000"
    }, {
      "city": "石家庄市",
      "name": "高邑县",
      "id": "130127000000"
    }, {
      "city": "石家庄市",
      "name": "深泽县",
      "id": "130128000000"
    }, {
      "city": "石家庄市",
      "name": "赞皇县",
      "id": "130129000000"
    }, {
      "city": "石家庄市",
      "name": "无极县",
      "id": "130130000000"
    }, {
      "city": "石家庄市",
      "name": "平山县",
      "id": "130131000000"
    }, {
      "city": "石家庄市",
      "name": "元氏县",
      "id": "130132000000"
    }, {
      "city": "石家庄市",
      "name": "赵县",
      "id": "130133000000"
    }, {
      "city": "石家庄市",
      "name": "石家庄高新技术产业开发区",
      "id": "130171000000"
    }, {
      "city": "石家庄市",
      "name": "石家庄循环化工园区",
      "id": "130172000000"
    }, {
      "city": "石家庄市",
      "name": "辛集市",
      "id": "130181000000"
    }, {
      "city": "石家庄市",
      "name": "晋州市",
      "id": "130183000000"
    }, {
      "city": "石家庄市",
      "name": "新乐市",
      "id": "130184000000"
    }],
    "130200000000": [{
      "city": "唐山市",
      "name": "市辖区",
      "id": "130201000000"
    }, {
      "city": "唐山市",
      "name": "路南区",
      "id": "130202000000"
    }, {
      "city": "唐山市",
      "name": "路北区",
      "id": "130203000000"
    }, {
      "city": "唐山市",
      "name": "古冶区",
      "id": "130204000000"
    }, {
      "city": "唐山市",
      "name": "开平区",
      "id": "130205000000"
    }, {
      "city": "唐山市",
      "name": "丰南区",
      "id": "130207000000"
    }, {
      "city": "唐山市",
      "name": "丰润区",
      "id": "130208000000"
    }, {
      "city": "唐山市",
      "name": "曹妃甸区",
      "id": "130209000000"
    }, {
      "city": "唐山市",
      "name": "滦南县",
      "id": "130224000000"
    }, {
      "city": "唐山市",
      "name": "乐亭县",
      "id": "130225000000"
    }, {
      "city": "唐山市",
      "name": "迁西县",
      "id": "130227000000"
    }, {
      "city": "唐山市",
      "name": "玉田县",
      "id": "130229000000"
    }, {
      "city": "唐山市",
      "name": "唐山市芦台经济技术开发区",
      "id": "130271000000"
    }, {
      "city": "唐山市",
      "name": "唐山市汉沽管理区",
      "id": "130272000000"
    }, {
      "city": "唐山市",
      "name": "唐山高新技术产业开发区",
      "id": "130273000000"
    }, {
      "city": "唐山市",
      "name": "河北唐山海港经济开发区",
      "id": "130274000000"
    }, {
      "city": "唐山市",
      "name": "遵化市",
      "id": "130281000000"
    }, {
      "city": "唐山市",
      "name": "迁安市",
      "id": "130283000000"
    }, {
      "city": "唐山市",
      "name": "滦州市",
      "id": "130284000000"
    }],
    "130300000000": [{
      "city": "秦皇岛市",
      "name": "市辖区",
      "id": "130301000000"
    }, {
      "city": "秦皇岛市",
      "name": "海港区",
      "id": "130302000000"
    }, {
      "city": "秦皇岛市",
      "name": "山海关区",
      "id": "130303000000"
    }, {
      "city": "秦皇岛市",
      "name": "北戴河区",
      "id": "130304000000"
    }, {
      "city": "秦皇岛市",
      "name": "抚宁区",
      "id": "130306000000"
    }, {
      "city": "秦皇岛市",
      "name": "青龙满族自治县",
      "id": "130321000000"
    }, {
      "city": "秦皇岛市",
      "name": "昌黎县",
      "id": "130322000000"
    }, {
      "city": "秦皇岛市",
      "name": "卢龙县",
      "id": "130324000000"
    }, {
      "city": "秦皇岛市",
      "name": "秦皇岛市经济技术开发区",
      "id": "130371000000"
    }, {
      "city": "秦皇岛市",
      "name": "北戴河新区",
      "id": "130372000000"
    }],
    "130400000000": [{
      "city": "邯郸市",
      "name": "市辖区",
      "id": "130401000000"
    }, {
      "city": "邯郸市",
      "name": "邯山区",
      "id": "130402000000"
    }, {
      "city": "邯郸市",
      "name": "丛台区",
      "id": "130403000000"
    }, {
      "city": "邯郸市",
      "name": "复兴区",
      "id": "130404000000"
    }, {
      "city": "邯郸市",
      "name": "峰峰矿区",
      "id": "130406000000"
    }, {
      "city": "邯郸市",
      "name": "肥乡区",
      "id": "130407000000"
    }, {
      "city": "邯郸市",
      "name": "永年区",
      "id": "130408000000"
    }, {
      "city": "邯郸市",
      "name": "临漳县",
      "id": "130423000000"
    }, {
      "city": "邯郸市",
      "name": "成安县",
      "id": "130424000000"
    }, {
      "city": "邯郸市",
      "name": "大名县",
      "id": "130425000000"
    }, {
      "city": "邯郸市",
      "name": "涉县",
      "id": "130426000000"
    }, {
      "city": "邯郸市",
      "name": "磁县",
      "id": "130427000000"
    }, {
      "city": "邯郸市",
      "name": "邱县",
      "id": "130430000000"
    }, {
      "city": "邯郸市",
      "name": "鸡泽县",
      "id": "130431000000"
    }, {
      "city": "邯郸市",
      "name": "广平县",
      "id": "130432000000"
    }, {
      "city": "邯郸市",
      "name": "馆陶县",
      "id": "130433000000"
    }, {
      "city": "邯郸市",
      "name": "魏县",
      "id": "130434000000"
    }, {
      "city": "邯郸市",
      "name": "曲周县",
      "id": "130435000000"
    }, {
      "city": "邯郸市",
      "name": "邯郸经济技术开发区",
      "id": "130471000000"
    }, {
      "city": "邯郸市",
      "name": "邯郸冀南新区",
      "id": "130473000000"
    }, {
      "city": "邯郸市",
      "name": "武安市",
      "id": "130481000000"
    }],
    "130500000000": [{
      "city": "邢台市",
      "name": "市辖区",
      "id": "130501000000"
    }, {
      "city": "邢台市",
      "name": "桥东区",
      "id": "130502000000"
    }, {
      "city": "邢台市",
      "name": "桥西区",
      "id": "130503000000"
    }, {
      "city": "邢台市",
      "name": "邢台县",
      "id": "130521000000"
    }, {
      "city": "邢台市",
      "name": "临城县",
      "id": "130522000000"
    }, {
      "city": "邢台市",
      "name": "内丘县",
      "id": "130523000000"
    }, {
      "city": "邢台市",
      "name": "柏乡县",
      "id": "130524000000"
    }, {
      "city": "邢台市",
      "name": "隆尧县",
      "id": "130525000000"
    }, {
      "city": "邢台市",
      "name": "任县",
      "id": "130526000000"
    }, {
      "city": "邢台市",
      "name": "南和县",
      "id": "130527000000"
    }, {
      "city": "邢台市",
      "name": "宁晋县",
      "id": "130528000000"
    }, {
      "city": "邢台市",
      "name": "巨鹿县",
      "id": "130529000000"
    }, {
      "city": "邢台市",
      "name": "新河县",
      "id": "130530000000"
    }, {
      "city": "邢台市",
      "name": "广宗县",
      "id": "130531000000"
    }, {
      "city": "邢台市",
      "name": "平乡县",
      "id": "130532000000"
    }, {
      "city": "邢台市",
      "name": "威县",
      "id": "130533000000"
    }, {
      "city": "邢台市",
      "name": "清河县",
      "id": "130534000000"
    }, {
      "city": "邢台市",
      "name": "临西县",
      "id": "130535000000"
    }, {
      "city": "邢台市",
      "name": "河北邢台经济开发区",
      "id": "130571000000"
    }, {
      "city": "邢台市",
      "name": "南宫市",
      "id": "130581000000"
    }, {
      "city": "邢台市",
      "name": "沙河市",
      "id": "130582000000"
    }],
    "130600000000": [{
      "city": "保定市",
      "name": "市辖区",
      "id": "130601000000"
    }, {
      "city": "保定市",
      "name": "竞秀区",
      "id": "130602000000"
    }, {
      "city": "保定市",
      "name": "莲池区",
      "id": "130606000000"
    }, {
      "city": "保定市",
      "name": "满城区",
      "id": "130607000000"
    }, {
      "city": "保定市",
      "name": "清苑区",
      "id": "130608000000"
    }, {
      "city": "保定市",
      "name": "徐水区",
      "id": "130609000000"
    }, {
      "city": "保定市",
      "name": "涞水县",
      "id": "130623000000"
    }, {
      "city": "保定市",
      "name": "阜平县",
      "id": "130624000000"
    }, {
      "city": "保定市",
      "name": "定兴县",
      "id": "130626000000"
    }, {
      "city": "保定市",
      "name": "唐县",
      "id": "130627000000"
    }, {
      "city": "保定市",
      "name": "高阳县",
      "id": "130628000000"
    }, {
      "city": "保定市",
      "name": "容城县",
      "id": "130629000000"
    }, {
      "city": "保定市",
      "name": "涞源县",
      "id": "130630000000"
    }, {
      "city": "保定市",
      "name": "望都县",
      "id": "130631000000"
    }, {
      "city": "保定市",
      "name": "安新县",
      "id": "130632000000"
    }, {
      "city": "保定市",
      "name": "易县",
      "id": "130633000000"
    }, {
      "city": "保定市",
      "name": "曲阳县",
      "id": "130634000000"
    }, {
      "city": "保定市",
      "name": "蠡县",
      "id": "130635000000"
    }, {
      "city": "保定市",
      "name": "顺平县",
      "id": "130636000000"
    }, {
      "city": "保定市",
      "name": "博野县",
      "id": "130637000000"
    }, {
      "city": "保定市",
      "name": "雄县",
      "id": "130638000000"
    }, {
      "city": "保定市",
      "name": "保定高新技术产业开发区",
      "id": "130671000000"
    }, {
      "city": "保定市",
      "name": "保定白沟新城",
      "id": "130672000000"
    }, {
      "city": "保定市",
      "name": "涿州市",
      "id": "130681000000"
    }, {
      "city": "保定市",
      "name": "定州市",
      "id": "130682000000"
    }, {
      "city": "保定市",
      "name": "安国市",
      "id": "130683000000"
    }, {
      "city": "保定市",
      "name": "高碑店市",
      "id": "130684000000"
    }],
    "130700000000": [{
      "city": "张家口市",
      "name": "市辖区",
      "id": "130701000000"
    }, {
      "city": "张家口市",
      "name": "桥东区",
      "id": "130702000000"
    }, {
      "city": "张家口市",
      "name": "桥西区",
      "id": "130703000000"
    }, {
      "city": "张家口市",
      "name": "宣化区",
      "id": "130705000000"
    }, {
      "city": "张家口市",
      "name": "下花园区",
      "id": "130706000000"
    }, {
      "city": "张家口市",
      "name": "万全区",
      "id": "130708000000"
    }, {
      "city": "张家口市",
      "name": "崇礼区",
      "id": "130709000000"
    }, {
      "city": "张家口市",
      "name": "张北县",
      "id": "130722000000"
    }, {
      "city": "张家口市",
      "name": "康保县",
      "id": "130723000000"
    }, {
      "city": "张家口市",
      "name": "沽源县",
      "id": "130724000000"
    }, {
      "city": "张家口市",
      "name": "尚义县",
      "id": "130725000000"
    }, {
      "city": "张家口市",
      "name": "蔚县",
      "id": "130726000000"
    }, {
      "city": "张家口市",
      "name": "阳原县",
      "id": "130727000000"
    }, {
      "city": "张家口市",
      "name": "怀安县",
      "id": "130728000000"
    }, {
      "city": "张家口市",
      "name": "怀来县",
      "id": "130730000000"
    }, {
      "city": "张家口市",
      "name": "涿鹿县",
      "id": "130731000000"
    }, {
      "city": "张家口市",
      "name": "赤城县",
      "id": "130732000000"
    }, {
      "city": "张家口市",
      "name": "张家口市高新技术产业开发区",
      "id": "130771000000"
    }, {
      "city": "张家口市",
      "name": "张家口市察北管理区",
      "id": "130772000000"
    }, {
      "city": "张家口市",
      "name": "张家口市塞北管理区",
      "id": "130773000000"
    }],
    "130800000000": [{
      "city": "承德市",
      "name": "市辖区",
      "id": "130801000000"
    }, {
      "city": "承德市",
      "name": "双桥区",
      "id": "130802000000"
    }, {
      "city": "承德市",
      "name": "双滦区",
      "id": "130803000000"
    }, {
      "city": "承德市",
      "name": "鹰手营子矿区",
      "id": "130804000000"
    }, {
      "city": "承德市",
      "name": "承德县",
      "id": "130821000000"
    }, {
      "city": "承德市",
      "name": "兴隆县",
      "id": "130822000000"
    }, {
      "city": "承德市",
      "name": "滦平县",
      "id": "130824000000"
    }, {
      "city": "承德市",
      "name": "隆化县",
      "id": "130825000000"
    }, {
      "city": "承德市",
      "name": "丰宁满族自治县",
      "id": "130826000000"
    }, {
      "city": "承德市",
      "name": "宽城满族自治县",
      "id": "130827000000"
    }, {
      "city": "承德市",
      "name": "围场满族蒙古族自治县",
      "id": "130828000000"
    }, {
      "city": "承德市",
      "name": "承德高新技术产业开发区",
      "id": "130871000000"
    }, {
      "city": "承德市",
      "name": "平泉市",
      "id": "130881000000"
    }],
    "130900000000": [{
      "city": "沧州市",
      "name": "市辖区",
      "id": "130901000000"
    }, {
      "city": "沧州市",
      "name": "新华区",
      "id": "130902000000"
    }, {
      "city": "沧州市",
      "name": "运河区",
      "id": "130903000000"
    }, {
      "city": "沧州市",
      "name": "沧县",
      "id": "130921000000"
    }, {
      "city": "沧州市",
      "name": "青县",
      "id": "130922000000"
    }, {
      "city": "沧州市",
      "name": "东光县",
      "id": "130923000000"
    }, {
      "city": "沧州市",
      "name": "海兴县",
      "id": "130924000000"
    }, {
      "city": "沧州市",
      "name": "盐山县",
      "id": "130925000000"
    }, {
      "city": "沧州市",
      "name": "肃宁县",
      "id": "130926000000"
    }, {
      "city": "沧州市",
      "name": "南皮县",
      "id": "130927000000"
    }, {
      "city": "沧州市",
      "name": "吴桥县",
      "id": "130928000000"
    }, {
      "city": "沧州市",
      "name": "献县",
      "id": "130929000000"
    }, {
      "city": "沧州市",
      "name": "孟村回族自治县",
      "id": "130930000000"
    }, {
      "city": "沧州市",
      "name": "河北沧州经济开发区",
      "id": "130971000000"
    }, {
      "city": "沧州市",
      "name": "沧州高新技术产业开发区",
      "id": "130972000000"
    }, {
      "city": "沧州市",
      "name": "沧州渤海新区",
      "id": "130973000000"
    }, {
      "city": "沧州市",
      "name": "泊头市",
      "id": "130981000000"
    }, {
      "city": "沧州市",
      "name": "任丘市",
      "id": "130982000000"
    }, {
      "city": "沧州市",
      "name": "黄骅市",
      "id": "130983000000"
    }, {
      "city": "沧州市",
      "name": "河间市",
      "id": "130984000000"
    }],
    "131000000000": [{
      "city": "廊坊市",
      "name": "市辖区",
      "id": "131001000000"
    }, {
      "city": "廊坊市",
      "name": "安次区",
      "id": "131002000000"
    }, {
      "city": "廊坊市",
      "name": "广阳区",
      "id": "131003000000"
    }, {
      "city": "廊坊市",
      "name": "固安县",
      "id": "131022000000"
    }, {
      "city": "廊坊市",
      "name": "永清县",
      "id": "131023000000"
    }, {
      "city": "廊坊市",
      "name": "香河县",
      "id": "131024000000"
    }, {
      "city": "廊坊市",
      "name": "大城县",
      "id": "131025000000"
    }, {
      "city": "廊坊市",
      "name": "文安县",
      "id": "131026000000"
    }, {
      "city": "廊坊市",
      "name": "大厂回族自治县",
      "id": "131028000000"
    }, {
      "city": "廊坊市",
      "name": "廊坊经济技术开发区",
      "id": "131071000000"
    }, {
      "city": "廊坊市",
      "name": "霸州市",
      "id": "131081000000"
    }, {
      "city": "廊坊市",
      "name": "三河市",
      "id": "131082000000"
    }],
    "131100000000": [{
      "city": "衡水市",
      "name": "市辖区",
      "id": "131101000000"
    }, {
      "city": "衡水市",
      "name": "桃城区",
      "id": "131102000000"
    }, {
      "city": "衡水市",
      "name": "冀州区",
      "id": "131103000000"
    }, {
      "city": "衡水市",
      "name": "枣强县",
      "id": "131121000000"
    }, {
      "city": "衡水市",
      "name": "武邑县",
      "id": "131122000000"
    }, {
      "city": "衡水市",
      "name": "武强县",
      "id": "131123000000"
    }, {
      "city": "衡水市",
      "name": "饶阳县",
      "id": "131124000000"
    }, {
      "city": "衡水市",
      "name": "安平县",
      "id": "131125000000"
    }, {
      "city": "衡水市",
      "name": "故城县",
      "id": "131126000000"
    }, {
      "city": "衡水市",
      "name": "景县",
      "id": "131127000000"
    }, {
      "city": "衡水市",
      "name": "阜城县",
      "id": "131128000000"
    }, {
      "city": "衡水市",
      "name": "河北衡水高新技术产业开发区",
      "id": "131171000000"
    }, {
      "city": "衡水市",
      "name": "衡水滨湖新区",
      "id": "131172000000"
    }, {
      "city": "衡水市",
      "name": "深州市",
      "id": "131182000000"
    }],
    "140100000000": [{
      "city": "太原市",
      "name": "市辖区",
      "id": "140101000000"
    }, {
      "city": "太原市",
      "name": "小店区",
      "id": "140105000000"
    }, {
      "city": "太原市",
      "name": "迎泽区",
      "id": "140106000000"
    }, {
      "city": "太原市",
      "name": "杏花岭区",
      "id": "140107000000"
    }, {
      "city": "太原市",
      "name": "尖草坪区",
      "id": "140108000000"
    }, {
      "city": "太原市",
      "name": "万柏林区",
      "id": "140109000000"
    }, {
      "city": "太原市",
      "name": "晋源区",
      "id": "140110000000"
    }, {
      "city": "太原市",
      "name": "清徐县",
      "id": "140121000000"
    }, {
      "city": "太原市",
      "name": "阳曲县",
      "id": "140122000000"
    }, {
      "city": "太原市",
      "name": "娄烦县",
      "id": "140123000000"
    }, {
      "city": "太原市",
      "name": "山西转型综合改革示范区",
      "id": "140171000000"
    }, {
      "city": "太原市",
      "name": "古交市",
      "id": "140181000000"
    }],
    "140200000000": [{
      "city": "大同市",
      "name": "市辖区",
      "id": "140201000000"
    }, {
      "city": "大同市",
      "name": "新荣区",
      "id": "140212000000"
    }, {
      "city": "大同市",
      "name": "平城区",
      "id": "140213000000"
    }, {
      "city": "大同市",
      "name": "云冈区",
      "id": "140214000000"
    }, {
      "city": "大同市",
      "name": "云州区",
      "id": "140215000000"
    }, {
      "city": "大同市",
      "name": "阳高县",
      "id": "140221000000"
    }, {
      "city": "大同市",
      "name": "天镇县",
      "id": "140222000000"
    }, {
      "city": "大同市",
      "name": "广灵县",
      "id": "140223000000"
    }, {
      "city": "大同市",
      "name": "灵丘县",
      "id": "140224000000"
    }, {
      "city": "大同市",
      "name": "浑源县",
      "id": "140225000000"
    }, {
      "city": "大同市",
      "name": "左云县",
      "id": "140226000000"
    }, {
      "city": "大同市",
      "name": "山西大同经济开发区",
      "id": "140271000000"
    }],
    "140300000000": [{
      "city": "阳泉市",
      "name": "市辖区",
      "id": "140301000000"
    }, {
      "city": "阳泉市",
      "name": "城区",
      "id": "140302000000"
    }, {
      "city": "阳泉市",
      "name": "矿区",
      "id": "140303000000"
    }, {
      "city": "阳泉市",
      "name": "郊区",
      "id": "140311000000"
    }, {
      "city": "阳泉市",
      "name": "平定县",
      "id": "140321000000"
    }, {
      "city": "阳泉市",
      "name": "盂县",
      "id": "140322000000"
    }],
    "140400000000": [{
      "city": "长治市",
      "name": "市辖区",
      "id": "140401000000"
    }, {
      "city": "长治市",
      "name": "潞州区",
      "id": "140412000000"
    }, {
      "city": "长治市",
      "name": "上党区",
      "id": "140413000000"
    }, {
      "city": "长治市",
      "name": "屯留区",
      "id": "140414000000"
    }, {
      "city": "长治市",
      "name": "潞城区",
      "id": "140415000000"
    }, {
      "city": "长治市",
      "name": "襄垣县",
      "id": "140423000000"
    }, {
      "city": "长治市",
      "name": "平顺县",
      "id": "140425000000"
    }, {
      "city": "长治市",
      "name": "黎城县",
      "id": "140426000000"
    }, {
      "city": "长治市",
      "name": "壶关县",
      "id": "140427000000"
    }, {
      "city": "长治市",
      "name": "长子县",
      "id": "140428000000"
    }, {
      "city": "长治市",
      "name": "武乡县",
      "id": "140429000000"
    }, {
      "city": "长治市",
      "name": "沁县",
      "id": "140430000000"
    }, {
      "city": "长治市",
      "name": "沁源县",
      "id": "140431000000"
    }, {
      "city": "长治市",
      "name": "山西长治高新技术产业园区",
      "id": "140471000000"
    }],
    "140500000000": [{
      "city": "晋城市",
      "name": "市辖区",
      "id": "140501000000"
    }, {
      "city": "晋城市",
      "name": "城区",
      "id": "140502000000"
    }, {
      "city": "晋城市",
      "name": "沁水县",
      "id": "140521000000"
    }, {
      "city": "晋城市",
      "name": "阳城县",
      "id": "140522000000"
    }, {
      "city": "晋城市",
      "name": "陵川县",
      "id": "140524000000"
    }, {
      "city": "晋城市",
      "name": "泽州县",
      "id": "140525000000"
    }, {
      "city": "晋城市",
      "name": "高平市",
      "id": "140581000000"
    }],
    "140600000000": [{
      "city": "朔州市",
      "name": "市辖区",
      "id": "140601000000"
    }, {
      "city": "朔州市",
      "name": "朔城区",
      "id": "140602000000"
    }, {
      "city": "朔州市",
      "name": "平鲁区",
      "id": "140603000000"
    }, {
      "city": "朔州市",
      "name": "山阴县",
      "id": "140621000000"
    }, {
      "city": "朔州市",
      "name": "应县",
      "id": "140622000000"
    }, {
      "city": "朔州市",
      "name": "右玉县",
      "id": "140623000000"
    }, {
      "city": "朔州市",
      "name": "山西朔州经济开发区",
      "id": "140671000000"
    }, {
      "city": "朔州市",
      "name": "怀仁市",
      "id": "140681000000"
    }],
    "140700000000": [{
      "city": "晋中市",
      "name": "市辖区",
      "id": "140701000000"
    }, {
      "city": "晋中市",
      "name": "榆次区",
      "id": "140702000000"
    }, {
      "city": "晋中市",
      "name": "榆社县",
      "id": "140721000000"
    }, {
      "city": "晋中市",
      "name": "左权县",
      "id": "140722000000"
    }, {
      "city": "晋中市",
      "name": "和顺县",
      "id": "140723000000"
    }, {
      "city": "晋中市",
      "name": "昔阳县",
      "id": "140724000000"
    }, {
      "city": "晋中市",
      "name": "寿阳县",
      "id": "140725000000"
    }, {
      "city": "晋中市",
      "name": "太谷县",
      "id": "140726000000"
    }, {
      "city": "晋中市",
      "name": "祁县",
      "id": "140727000000"
    }, {
      "city": "晋中市",
      "name": "平遥县",
      "id": "140728000000"
    }, {
      "city": "晋中市",
      "name": "灵石县",
      "id": "140729000000"
    }, {
      "city": "晋中市",
      "name": "介休市",
      "id": "140781000000"
    }],
    "140800000000": [{
      "city": "运城市",
      "name": "市辖区",
      "id": "140801000000"
    }, {
      "city": "运城市",
      "name": "盐湖区",
      "id": "140802000000"
    }, {
      "city": "运城市",
      "name": "临猗县",
      "id": "140821000000"
    }, {
      "city": "运城市",
      "name": "万荣县",
      "id": "140822000000"
    }, {
      "city": "运城市",
      "name": "闻喜县",
      "id": "140823000000"
    }, {
      "city": "运城市",
      "name": "稷山县",
      "id": "140824000000"
    }, {
      "city": "运城市",
      "name": "新绛县",
      "id": "140825000000"
    }, {
      "city": "运城市",
      "name": "绛县",
      "id": "140826000000"
    }, {
      "city": "运城市",
      "name": "垣曲县",
      "id": "140827000000"
    }, {
      "city": "运城市",
      "name": "夏县",
      "id": "140828000000"
    }, {
      "city": "运城市",
      "name": "平陆县",
      "id": "140829000000"
    }, {
      "city": "运城市",
      "name": "芮城县",
      "id": "140830000000"
    }, {
      "city": "运城市",
      "name": "永济市",
      "id": "140881000000"
    }, {
      "city": "运城市",
      "name": "河津市",
      "id": "140882000000"
    }],
    "140900000000": [{
      "city": "忻州市",
      "name": "市辖区",
      "id": "140901000000"
    }, {
      "city": "忻州市",
      "name": "忻府区",
      "id": "140902000000"
    }, {
      "city": "忻州市",
      "name": "定襄县",
      "id": "140921000000"
    }, {
      "city": "忻州市",
      "name": "五台县",
      "id": "140922000000"
    }, {
      "city": "忻州市",
      "name": "代县",
      "id": "140923000000"
    }, {
      "city": "忻州市",
      "name": "繁峙县",
      "id": "140924000000"
    }, {
      "city": "忻州市",
      "name": "宁武县",
      "id": "140925000000"
    }, {
      "city": "忻州市",
      "name": "静乐县",
      "id": "140926000000"
    }, {
      "city": "忻州市",
      "name": "神池县",
      "id": "140927000000"
    }, {
      "city": "忻州市",
      "name": "五寨县",
      "id": "140928000000"
    }, {
      "city": "忻州市",
      "name": "岢岚县",
      "id": "140929000000"
    }, {
      "city": "忻州市",
      "name": "河曲县",
      "id": "140930000000"
    }, {
      "city": "忻州市",
      "name": "保德县",
      "id": "140931000000"
    }, {
      "city": "忻州市",
      "name": "偏关县",
      "id": "140932000000"
    }, {
      "city": "忻州市",
      "name": "五台山风景名胜区",
      "id": "140971000000"
    }, {
      "city": "忻州市",
      "name": "原平市",
      "id": "140981000000"
    }],
    "141000000000": [{
      "city": "临汾市",
      "name": "市辖区",
      "id": "141001000000"
    }, {
      "city": "临汾市",
      "name": "尧都区",
      "id": "141002000000"
    }, {
      "city": "临汾市",
      "name": "曲沃县",
      "id": "141021000000"
    }, {
      "city": "临汾市",
      "name": "翼城县",
      "id": "141022000000"
    }, {
      "city": "临汾市",
      "name": "襄汾县",
      "id": "141023000000"
    }, {
      "city": "临汾市",
      "name": "洪洞县",
      "id": "141024000000"
    }, {
      "city": "临汾市",
      "name": "古县",
      "id": "141025000000"
    }, {
      "city": "临汾市",
      "name": "安泽县",
      "id": "141026000000"
    }, {
      "city": "临汾市",
      "name": "浮山县",
      "id": "141027000000"
    }, {
      "city": "临汾市",
      "name": "吉县",
      "id": "141028000000"
    }, {
      "city": "临汾市",
      "name": "乡宁县",
      "id": "141029000000"
    }, {
      "city": "临汾市",
      "name": "大宁县",
      "id": "141030000000"
    }, {
      "city": "临汾市",
      "name": "隰县",
      "id": "141031000000"
    }, {
      "city": "临汾市",
      "name": "永和县",
      "id": "141032000000"
    }, {
      "city": "临汾市",
      "name": "蒲县",
      "id": "141033000000"
    }, {
      "city": "临汾市",
      "name": "汾西县",
      "id": "141034000000"
    }, {
      "city": "临汾市",
      "name": "侯马市",
      "id": "141081000000"
    }, {
      "city": "临汾市",
      "name": "霍州市",
      "id": "141082000000"
    }],
    "141100000000": [{
      "city": "吕梁市",
      "name": "市辖区",
      "id": "141101000000"
    }, {
      "city": "吕梁市",
      "name": "离石区",
      "id": "141102000000"
    }, {
      "city": "吕梁市",
      "name": "文水县",
      "id": "141121000000"
    }, {
      "city": "吕梁市",
      "name": "交城县",
      "id": "141122000000"
    }, {
      "city": "吕梁市",
      "name": "兴县",
      "id": "141123000000"
    }, {
      "city": "吕梁市",
      "name": "临县",
      "id": "141124000000"
    }, {
      "city": "吕梁市",
      "name": "柳林县",
      "id": "141125000000"
    }, {
      "city": "吕梁市",
      "name": "石楼县",
      "id": "141126000000"
    }, {
      "city": "吕梁市",
      "name": "岚县",
      "id": "141127000000"
    }, {
      "city": "吕梁市",
      "name": "方山县",
      "id": "141128000000"
    }, {
      "city": "吕梁市",
      "name": "中阳县",
      "id": "141129000000"
    }, {
      "city": "吕梁市",
      "name": "交口县",
      "id": "141130000000"
    }, {
      "city": "吕梁市",
      "name": "孝义市",
      "id": "141181000000"
    }, {
      "city": "吕梁市",
      "name": "汾阳市",
      "id": "141182000000"
    }],
    "150100000000": [{
      "city": "呼和浩特市",
      "name": "市辖区",
      "id": "150101000000"
    }, {
      "city": "呼和浩特市",
      "name": "新城区",
      "id": "150102000000"
    }, {
      "city": "呼和浩特市",
      "name": "回民区",
      "id": "150103000000"
    }, {
      "city": "呼和浩特市",
      "name": "玉泉区",
      "id": "150104000000"
    }, {
      "city": "呼和浩特市",
      "name": "赛罕区",
      "id": "150105000000"
    }, {
      "city": "呼和浩特市",
      "name": "土默特左旗",
      "id": "150121000000"
    }, {
      "city": "呼和浩特市",
      "name": "托克托县",
      "id": "150122000000"
    }, {
      "city": "呼和浩特市",
      "name": "和林格尔县",
      "id": "150123000000"
    }, {
      "city": "呼和浩特市",
      "name": "清水河县",
      "id": "150124000000"
    }, {
      "city": "呼和浩特市",
      "name": "武川县",
      "id": "150125000000"
    }, {
      "city": "呼和浩特市",
      "name": "呼和浩特金海工业园区",
      "id": "150171000000"
    }, {
      "city": "呼和浩特市",
      "name": "呼和浩特经济技术开发区",
      "id": "150172000000"
    }],
    "150200000000": [{
      "city": "包头市",
      "name": "市辖区",
      "id": "150201000000"
    }, {
      "city": "包头市",
      "name": "东河区",
      "id": "150202000000"
    }, {
      "city": "包头市",
      "name": "昆都仑区",
      "id": "150203000000"
    }, {
      "city": "包头市",
      "name": "青山区",
      "id": "150204000000"
    }, {
      "city": "包头市",
      "name": "石拐区",
      "id": "150205000000"
    }, {
      "city": "包头市",
      "name": "白云鄂博矿区",
      "id": "150206000000"
    }, {
      "city": "包头市",
      "name": "九原区",
      "id": "150207000000"
    }, {
      "city": "包头市",
      "name": "土默特右旗",
      "id": "150221000000"
    }, {
      "city": "包头市",
      "name": "固阳县",
      "id": "150222000000"
    }, {
      "city": "包头市",
      "name": "达尔罕茂明安联合旗",
      "id": "150223000000"
    }, {
      "city": "包头市",
      "name": "包头稀土高新技术产业开发区",
      "id": "150271000000"
    }],
    "150300000000": [{
      "city": "乌海市",
      "name": "市辖区",
      "id": "150301000000"
    }, {
      "city": "乌海市",
      "name": "海勃湾区",
      "id": "150302000000"
    }, {
      "city": "乌海市",
      "name": "海南区",
      "id": "150303000000"
    }, {
      "city": "乌海市",
      "name": "乌达区",
      "id": "150304000000"
    }],
    "150400000000": [{
      "city": "赤峰市",
      "name": "市辖区",
      "id": "150401000000"
    }, {
      "city": "赤峰市",
      "name": "红山区",
      "id": "150402000000"
    }, {
      "city": "赤峰市",
      "name": "元宝山区",
      "id": "150403000000"
    }, {
      "city": "赤峰市",
      "name": "松山区",
      "id": "150404000000"
    }, {
      "city": "赤峰市",
      "name": "阿鲁科尔沁旗",
      "id": "150421000000"
    }, {
      "city": "赤峰市",
      "name": "巴林左旗",
      "id": "150422000000"
    }, {
      "city": "赤峰市",
      "name": "巴林右旗",
      "id": "150423000000"
    }, {
      "city": "赤峰市",
      "name": "林西县",
      "id": "150424000000"
    }, {
      "city": "赤峰市",
      "name": "克什克腾旗",
      "id": "150425000000"
    }, {
      "city": "赤峰市",
      "name": "翁牛特旗",
      "id": "150426000000"
    }, {
      "city": "赤峰市",
      "name": "喀喇沁旗",
      "id": "150428000000"
    }, {
      "city": "赤峰市",
      "name": "宁城县",
      "id": "150429000000"
    }, {
      "city": "赤峰市",
      "name": "敖汉旗",
      "id": "150430000000"
    }],
    "150500000000": [{
      "city": "通辽市",
      "name": "市辖区",
      "id": "150501000000"
    }, {
      "city": "通辽市",
      "name": "科尔沁区",
      "id": "150502000000"
    }, {
      "city": "通辽市",
      "name": "科尔沁左翼中旗",
      "id": "150521000000"
    }, {
      "city": "通辽市",
      "name": "科尔沁左翼后旗",
      "id": "150522000000"
    }, {
      "city": "通辽市",
      "name": "开鲁县",
      "id": "150523000000"
    }, {
      "city": "通辽市",
      "name": "库伦旗",
      "id": "150524000000"
    }, {
      "city": "通辽市",
      "name": "奈曼旗",
      "id": "150525000000"
    }, {
      "city": "通辽市",
      "name": "扎鲁特旗",
      "id": "150526000000"
    }, {
      "city": "通辽市",
      "name": "通辽经济技术开发区",
      "id": "150571000000"
    }, {
      "city": "通辽市",
      "name": "霍林郭勒市",
      "id": "150581000000"
    }],
    "150600000000": [{
      "city": "鄂尔多斯市",
      "name": "市辖区",
      "id": "150601000000"
    }, {
      "city": "鄂尔多斯市",
      "name": "东胜区",
      "id": "150602000000"
    }, {
      "city": "鄂尔多斯市",
      "name": "康巴什区",
      "id": "150603000000"
    }, {
      "city": "鄂尔多斯市",
      "name": "达拉特旗",
      "id": "150621000000"
    }, {
      "city": "鄂尔多斯市",
      "name": "准格尔旗",
      "id": "150622000000"
    }, {
      "city": "鄂尔多斯市",
      "name": "鄂托克前旗",
      "id": "150623000000"
    }, {
      "city": "鄂尔多斯市",
      "name": "鄂托克旗",
      "id": "150624000000"
    }, {
      "city": "鄂尔多斯市",
      "name": "杭锦旗",
      "id": "150625000000"
    }, {
      "city": "鄂尔多斯市",
      "name": "乌审旗",
      "id": "150626000000"
    }, {
      "city": "鄂尔多斯市",
      "name": "伊金霍洛旗",
      "id": "150627000000"
    }],
    "150700000000": [{
      "city": "呼伦贝尔市",
      "name": "市辖区",
      "id": "150701000000"
    }, {
      "city": "呼伦贝尔市",
      "name": "海拉尔区",
      "id": "150702000000"
    }, {
      "city": "呼伦贝尔市",
      "name": "扎赉诺尔区",
      "id": "150703000000"
    }, {
      "city": "呼伦贝尔市",
      "name": "阿荣旗",
      "id": "150721000000"
    }, {
      "city": "呼伦贝尔市",
      "name": "莫力达瓦达斡尔族自治旗",
      "id": "150722000000"
    }, {
      "city": "呼伦贝尔市",
      "name": "鄂伦春自治旗",
      "id": "150723000000"
    }, {
      "city": "呼伦贝尔市",
      "name": "鄂温克族自治旗",
      "id": "150724000000"
    }, {
      "city": "呼伦贝尔市",
      "name": "陈巴尔虎旗",
      "id": "150725000000"
    }, {
      "city": "呼伦贝尔市",
      "name": "新巴尔虎左旗",
      "id": "150726000000"
    }, {
      "city": "呼伦贝尔市",
      "name": "新巴尔虎右旗",
      "id": "150727000000"
    }, {
      "city": "呼伦贝尔市",
      "name": "满洲里市",
      "id": "150781000000"
    }, {
      "city": "呼伦贝尔市",
      "name": "牙克石市",
      "id": "150782000000"
    }, {
      "city": "呼伦贝尔市",
      "name": "扎兰屯市",
      "id": "150783000000"
    }, {
      "city": "呼伦贝尔市",
      "name": "额尔古纳市",
      "id": "150784000000"
    }, {
      "city": "呼伦贝尔市",
      "name": "根河市",
      "id": "150785000000"
    }],
    "150800000000": [{
      "city": "巴彦淖尔市",
      "name": "市辖区",
      "id": "150801000000"
    }, {
      "city": "巴彦淖尔市",
      "name": "临河区",
      "id": "150802000000"
    }, {
      "city": "巴彦淖尔市",
      "name": "五原县",
      "id": "150821000000"
    }, {
      "city": "巴彦淖尔市",
      "name": "磴口县",
      "id": "150822000000"
    }, {
      "city": "巴彦淖尔市",
      "name": "乌拉特前旗",
      "id": "150823000000"
    }, {
      "city": "巴彦淖尔市",
      "name": "乌拉特中旗",
      "id": "150824000000"
    }, {
      "city": "巴彦淖尔市",
      "name": "乌拉特后旗",
      "id": "150825000000"
    }, {
      "city": "巴彦淖尔市",
      "name": "杭锦后旗",
      "id": "150826000000"
    }],
    "150900000000": [{
      "city": "乌兰察布市",
      "name": "市辖区",
      "id": "150901000000"
    }, {
      "city": "乌兰察布市",
      "name": "集宁区",
      "id": "150902000000"
    }, {
      "city": "乌兰察布市",
      "name": "卓资县",
      "id": "150921000000"
    }, {
      "city": "乌兰察布市",
      "name": "化德县",
      "id": "150922000000"
    }, {
      "city": "乌兰察布市",
      "name": "商都县",
      "id": "150923000000"
    }, {
      "city": "乌兰察布市",
      "name": "兴和县",
      "id": "150924000000"
    }, {
      "city": "乌兰察布市",
      "name": "凉城县",
      "id": "150925000000"
    }, {
      "city": "乌兰察布市",
      "name": "察哈尔右翼前旗",
      "id": "150926000000"
    }, {
      "city": "乌兰察布市",
      "name": "察哈尔右翼中旗",
      "id": "150927000000"
    }, {
      "city": "乌兰察布市",
      "name": "察哈尔右翼后旗",
      "id": "150928000000"
    }, {
      "city": "乌兰察布市",
      "name": "四子王旗",
      "id": "150929000000"
    }, {
      "city": "乌兰察布市",
      "name": "丰镇市",
      "id": "150981000000"
    }],
    "152200000000": [{
      "city": "兴安盟",
      "name": "乌兰浩特市",
      "id": "152201000000"
    }, {
      "city": "兴安盟",
      "name": "阿尔山市",
      "id": "152202000000"
    }, {
      "city": "兴安盟",
      "name": "科尔沁右翼前旗",
      "id": "152221000000"
    }, {
      "city": "兴安盟",
      "name": "科尔沁右翼中旗",
      "id": "152222000000"
    }, {
      "city": "兴安盟",
      "name": "扎赉特旗",
      "id": "152223000000"
    }, {
      "city": "兴安盟",
      "name": "突泉县",
      "id": "152224000000"
    }],
    "152500000000": [{
      "city": "锡林郭勒盟",
      "name": "二连浩特市",
      "id": "152501000000"
    }, {
      "city": "锡林郭勒盟",
      "name": "锡林浩特市",
      "id": "152502000000"
    }, {
      "city": "锡林郭勒盟",
      "name": "阿巴嘎旗",
      "id": "152522000000"
    }, {
      "city": "锡林郭勒盟",
      "name": "苏尼特左旗",
      "id": "152523000000"
    }, {
      "city": "锡林郭勒盟",
      "name": "苏尼特右旗",
      "id": "152524000000"
    }, {
      "city": "锡林郭勒盟",
      "name": "东乌珠穆沁旗",
      "id": "152525000000"
    }, {
      "city": "锡林郭勒盟",
      "name": "西乌珠穆沁旗",
      "id": "152526000000"
    }, {
      "city": "锡林郭勒盟",
      "name": "太仆寺旗",
      "id": "152527000000"
    }, {
      "city": "锡林郭勒盟",
      "name": "镶黄旗",
      "id": "152528000000"
    }, {
      "city": "锡林郭勒盟",
      "name": "正镶白旗",
      "id": "152529000000"
    }, {
      "city": "锡林郭勒盟",
      "name": "正蓝旗",
      "id": "152530000000"
    }, {
      "city": "锡林郭勒盟",
      "name": "多伦县",
      "id": "152531000000"
    }, {
      "city": "锡林郭勒盟",
      "name": "乌拉盖管委会",
      "id": "152571000000"
    }],
    "152900000000": [{
      "city": "阿拉善盟",
      "name": "阿拉善左旗",
      "id": "152921000000"
    }, {
      "city": "阿拉善盟",
      "name": "阿拉善右旗",
      "id": "152922000000"
    }, {
      "city": "阿拉善盟",
      "name": "额济纳旗",
      "id": "152923000000"
    }, {
      "city": "阿拉善盟",
      "name": "内蒙古阿拉善经济开发区",
      "id": "152971000000"
    }],
    "210100000000": [{
      "city": "沈阳市",
      "name": "市辖区",
      "id": "210101000000"
    }, {
      "city": "沈阳市",
      "name": "和平区",
      "id": "210102000000"
    }, {
      "city": "沈阳市",
      "name": "沈河区",
      "id": "210103000000"
    }, {
      "city": "沈阳市",
      "name": "大东区",
      "id": "210104000000"
    }, {
      "city": "沈阳市",
      "name": "皇姑区",
      "id": "210105000000"
    }, {
      "city": "沈阳市",
      "name": "铁西区",
      "id": "210106000000"
    }, {
      "city": "沈阳市",
      "name": "苏家屯区",
      "id": "210111000000"
    }, {
      "city": "沈阳市",
      "name": "浑南区",
      "id": "210112000000"
    }, {
      "city": "沈阳市",
      "name": "沈北新区",
      "id": "210113000000"
    }, {
      "city": "沈阳市",
      "name": "于洪区",
      "id": "210114000000"
    }, {
      "city": "沈阳市",
      "name": "辽中区",
      "id": "210115000000"
    }, {
      "city": "沈阳市",
      "name": "康平县",
      "id": "210123000000"
    }, {
      "city": "沈阳市",
      "name": "法库县",
      "id": "210124000000"
    }, {
      "city": "沈阳市",
      "name": "新民市",
      "id": "210181000000"
    }],
    "210200000000": [{
      "city": "大连市",
      "name": "市辖区",
      "id": "210201000000"
    }, {
      "city": "大连市",
      "name": "中山区",
      "id": "210202000000"
    }, {
      "city": "大连市",
      "name": "西岗区",
      "id": "210203000000"
    }, {
      "city": "大连市",
      "name": "沙河口区",
      "id": "210204000000"
    }, {
      "city": "大连市",
      "name": "甘井子区",
      "id": "210211000000"
    }, {
      "city": "大连市",
      "name": "旅顺口区",
      "id": "210212000000"
    }, {
      "city": "大连市",
      "name": "金州区",
      "id": "210213000000"
    }, {
      "city": "大连市",
      "name": "普兰店区",
      "id": "210214000000"
    }, {
      "city": "大连市",
      "name": "长海县",
      "id": "210224000000"
    }, {
      "city": "大连市",
      "name": "瓦房店市",
      "id": "210281000000"
    }, {
      "city": "大连市",
      "name": "庄河市",
      "id": "210283000000"
    }],
    "210300000000": [{
      "city": "鞍山市",
      "name": "市辖区",
      "id": "210301000000"
    }, {
      "city": "鞍山市",
      "name": "铁东区",
      "id": "210302000000"
    }, {
      "city": "鞍山市",
      "name": "铁西区",
      "id": "210303000000"
    }, {
      "city": "鞍山市",
      "name": "立山区",
      "id": "210304000000"
    }, {
      "city": "鞍山市",
      "name": "千山区",
      "id": "210311000000"
    }, {
      "city": "鞍山市",
      "name": "台安县",
      "id": "210321000000"
    }, {
      "city": "鞍山市",
      "name": "岫岩满族自治县",
      "id": "210323000000"
    }, {
      "city": "鞍山市",
      "name": "海城市",
      "id": "210381000000"
    }],
    "210400000000": [{
      "city": "抚顺市",
      "name": "市辖区",
      "id": "210401000000"
    }, {
      "city": "抚顺市",
      "name": "新抚区",
      "id": "210402000000"
    }, {
      "city": "抚顺市",
      "name": "东洲区",
      "id": "210403000000"
    }, {
      "city": "抚顺市",
      "name": "望花区",
      "id": "210404000000"
    }, {
      "city": "抚顺市",
      "name": "顺城区",
      "id": "210411000000"
    }, {
      "city": "抚顺市",
      "name": "抚顺县",
      "id": "210421000000"
    }, {
      "city": "抚顺市",
      "name": "新宾满族自治县",
      "id": "210422000000"
    }, {
      "city": "抚顺市",
      "name": "清原满族自治县",
      "id": "210423000000"
    }],
    "210500000000": [{
      "city": "本溪市",
      "name": "市辖区",
      "id": "210501000000"
    }, {
      "city": "本溪市",
      "name": "平山区",
      "id": "210502000000"
    }, {
      "city": "本溪市",
      "name": "溪湖区",
      "id": "210503000000"
    }, {
      "city": "本溪市",
      "name": "明山区",
      "id": "210504000000"
    }, {
      "city": "本溪市",
      "name": "南芬区",
      "id": "210505000000"
    }, {
      "city": "本溪市",
      "name": "本溪满族自治县",
      "id": "210521000000"
    }, {
      "city": "本溪市",
      "name": "桓仁满族自治县",
      "id": "210522000000"
    }],
    "210600000000": [{
      "city": "丹东市",
      "name": "市辖区",
      "id": "210601000000"
    }, {
      "city": "丹东市",
      "name": "元宝区",
      "id": "210602000000"
    }, {
      "city": "丹东市",
      "name": "振兴区",
      "id": "210603000000"
    }, {
      "city": "丹东市",
      "name": "振安区",
      "id": "210604000000"
    }, {
      "city": "丹东市",
      "name": "宽甸满族自治县",
      "id": "210624000000"
    }, {
      "city": "丹东市",
      "name": "东港市",
      "id": "210681000000"
    }, {
      "city": "丹东市",
      "name": "凤城市",
      "id": "210682000000"
    }],
    "210700000000": [{
      "city": "锦州市",
      "name": "市辖区",
      "id": "210701000000"
    }, {
      "city": "锦州市",
      "name": "古塔区",
      "id": "210702000000"
    }, {
      "city": "锦州市",
      "name": "凌河区",
      "id": "210703000000"
    }, {
      "city": "锦州市",
      "name": "太和区",
      "id": "210711000000"
    }, {
      "city": "锦州市",
      "name": "黑山县",
      "id": "210726000000"
    }, {
      "city": "锦州市",
      "name": "义县",
      "id": "210727000000"
    }, {
      "city": "锦州市",
      "name": "凌海市",
      "id": "210781000000"
    }, {
      "city": "锦州市",
      "name": "北镇市",
      "id": "210782000000"
    }],
    "210800000000": [{
      "city": "营口市",
      "name": "市辖区",
      "id": "210801000000"
    }, {
      "city": "营口市",
      "name": "站前区",
      "id": "210802000000"
    }, {
      "city": "营口市",
      "name": "西市区",
      "id": "210803000000"
    }, {
      "city": "营口市",
      "name": "鲅鱼圈区",
      "id": "210804000000"
    }, {
      "city": "营口市",
      "name": "老边区",
      "id": "210811000000"
    }, {
      "city": "营口市",
      "name": "盖州市",
      "id": "210881000000"
    }, {
      "city": "营口市",
      "name": "大石桥市",
      "id": "210882000000"
    }],
    "210900000000": [{
      "city": "阜新市",
      "name": "市辖区",
      "id": "210901000000"
    }, {
      "city": "阜新市",
      "name": "海州区",
      "id": "210902000000"
    }, {
      "city": "阜新市",
      "name": "新邱区",
      "id": "210903000000"
    }, {
      "city": "阜新市",
      "name": "太平区",
      "id": "210904000000"
    }, {
      "city": "阜新市",
      "name": "清河门区",
      "id": "210905000000"
    }, {
      "city": "阜新市",
      "name": "细河区",
      "id": "210911000000"
    }, {
      "city": "阜新市",
      "name": "阜新蒙古族自治县",
      "id": "210921000000"
    }, {
      "city": "阜新市",
      "name": "彰武县",
      "id": "210922000000"
    }],
    "211000000000": [{
      "city": "辽阳市",
      "name": "市辖区",
      "id": "211001000000"
    }, {
      "city": "辽阳市",
      "name": "白塔区",
      "id": "211002000000"
    }, {
      "city": "辽阳市",
      "name": "文圣区",
      "id": "211003000000"
    }, {
      "city": "辽阳市",
      "name": "宏伟区",
      "id": "211004000000"
    }, {
      "city": "辽阳市",
      "name": "弓长岭区",
      "id": "211005000000"
    }, {
      "city": "辽阳市",
      "name": "太子河区",
      "id": "211011000000"
    }, {
      "city": "辽阳市",
      "name": "辽阳县",
      "id": "211021000000"
    }, {
      "city": "辽阳市",
      "name": "灯塔市",
      "id": "211081000000"
    }],
    "211100000000": [{
      "city": "盘锦市",
      "name": "市辖区",
      "id": "211101000000"
    }, {
      "city": "盘锦市",
      "name": "双台子区",
      "id": "211102000000"
    }, {
      "city": "盘锦市",
      "name": "兴隆台区",
      "id": "211103000000"
    }, {
      "city": "盘锦市",
      "name": "大洼区",
      "id": "211104000000"
    }, {
      "city": "盘锦市",
      "name": "盘山县",
      "id": "211122000000"
    }],
    "211200000000": [{
      "city": "铁岭市",
      "name": "市辖区",
      "id": "211201000000"
    }, {
      "city": "铁岭市",
      "name": "银州区",
      "id": "211202000000"
    }, {
      "city": "铁岭市",
      "name": "清河区",
      "id": "211204000000"
    }, {
      "city": "铁岭市",
      "name": "铁岭县",
      "id": "211221000000"
    }, {
      "city": "铁岭市",
      "name": "西丰县",
      "id": "211223000000"
    }, {
      "city": "铁岭市",
      "name": "昌图县",
      "id": "211224000000"
    }, {
      "city": "铁岭市",
      "name": "调兵山市",
      "id": "211281000000"
    }, {
      "city": "铁岭市",
      "name": "开原市",
      "id": "211282000000"
    }],
    "211300000000": [{
      "city": "朝阳市",
      "name": "市辖区",
      "id": "211301000000"
    }, {
      "city": "朝阳市",
      "name": "双塔区",
      "id": "211302000000"
    }, {
      "city": "朝阳市",
      "name": "龙城区",
      "id": "211303000000"
    }, {
      "city": "朝阳市",
      "name": "朝阳县",
      "id": "211321000000"
    }, {
      "city": "朝阳市",
      "name": "建平县",
      "id": "211322000000"
    }, {
      "city": "朝阳市",
      "name": "喀喇沁左翼蒙古族自治县",
      "id": "211324000000"
    }, {
      "city": "朝阳市",
      "name": "北票市",
      "id": "211381000000"
    }, {
      "city": "朝阳市",
      "name": "凌源市",
      "id": "211382000000"
    }],
    "211400000000": [{
      "city": "葫芦岛市",
      "name": "市辖区",
      "id": "211401000000"
    }, {
      "city": "葫芦岛市",
      "name": "连山区",
      "id": "211402000000"
    }, {
      "city": "葫芦岛市",
      "name": "龙港区",
      "id": "211403000000"
    }, {
      "city": "葫芦岛市",
      "name": "南票区",
      "id": "211404000000"
    }, {
      "city": "葫芦岛市",
      "name": "绥中县",
      "id": "211421000000"
    }, {
      "city": "葫芦岛市",
      "name": "建昌县",
      "id": "211422000000"
    }, {
      "city": "葫芦岛市",
      "name": "兴城市",
      "id": "211481000000"
    }],
    "220100000000": [{
      "city": "长春市",
      "name": "市辖区",
      "id": "220101000000"
    }, {
      "city": "长春市",
      "name": "南关区",
      "id": "220102000000"
    }, {
      "city": "长春市",
      "name": "宽城区",
      "id": "220103000000"
    }, {
      "city": "长春市",
      "name": "朝阳区",
      "id": "220104000000"
    }, {
      "city": "长春市",
      "name": "二道区",
      "id": "220105000000"
    }, {
      "city": "长春市",
      "name": "绿园区",
      "id": "220106000000"
    }, {
      "city": "长春市",
      "name": "双阳区",
      "id": "220112000000"
    }, {
      "city": "长春市",
      "name": "九台区",
      "id": "220113000000"
    }, {
      "city": "长春市",
      "name": "农安县",
      "id": "220122000000"
    }, {
      "city": "长春市",
      "name": "长春经济技术开发区",
      "id": "220171000000"
    }, {
      "city": "长春市",
      "name": "长春净月高新技术产业开发区",
      "id": "220172000000"
    }, {
      "city": "长春市",
      "name": "长春高新技术产业开发区",
      "id": "220173000000"
    }, {
      "city": "长春市",
      "name": "长春汽车经济技术开发区",
      "id": "220174000000"
    }, {
      "city": "长春市",
      "name": "榆树市",
      "id": "220182000000"
    }, {
      "city": "长春市",
      "name": "德惠市",
      "id": "220183000000"
    }],
    "220200000000": [{
      "city": "吉林市",
      "name": "市辖区",
      "id": "220201000000"
    }, {
      "city": "吉林市",
      "name": "昌邑区",
      "id": "220202000000"
    }, {
      "city": "吉林市",
      "name": "龙潭区",
      "id": "220203000000"
    }, {
      "city": "吉林市",
      "name": "船营区",
      "id": "220204000000"
    }, {
      "city": "吉林市",
      "name": "丰满区",
      "id": "220211000000"
    }, {
      "city": "吉林市",
      "name": "永吉县",
      "id": "220221000000"
    }, {
      "city": "吉林市",
      "name": "吉林经济开发区",
      "id": "220271000000"
    }, {
      "city": "吉林市",
      "name": "吉林高新技术产业开发区",
      "id": "220272000000"
    }, {
      "city": "吉林市",
      "name": "吉林中国新加坡食品区",
      "id": "220273000000"
    }, {
      "city": "吉林市",
      "name": "蛟河市",
      "id": "220281000000"
    }, {
      "city": "吉林市",
      "name": "桦甸市",
      "id": "220282000000"
    }, {
      "city": "吉林市",
      "name": "舒兰市",
      "id": "220283000000"
    }, {
      "city": "吉林市",
      "name": "磐石市",
      "id": "220284000000"
    }],
    "220300000000": [{
      "city": "四平市",
      "name": "市辖区",
      "id": "220301000000"
    }, {
      "city": "四平市",
      "name": "铁西区",
      "id": "220302000000"
    }, {
      "city": "四平市",
      "name": "铁东区",
      "id": "220303000000"
    }, {
      "city": "四平市",
      "name": "梨树县",
      "id": "220322000000"
    }, {
      "city": "四平市",
      "name": "伊通满族自治县",
      "id": "220323000000"
    }, {
      "city": "四平市",
      "name": "公主岭市",
      "id": "220381000000"
    }, {
      "city": "四平市",
      "name": "双辽市",
      "id": "220382000000"
    }],
    "220400000000": [{
      "city": "辽源市",
      "name": "市辖区",
      "id": "220401000000"
    }, {
      "city": "辽源市",
      "name": "龙山区",
      "id": "220402000000"
    }, {
      "city": "辽源市",
      "name": "西安区",
      "id": "220403000000"
    }, {
      "city": "辽源市",
      "name": "东丰县",
      "id": "220421000000"
    }, {
      "city": "辽源市",
      "name": "东辽县",
      "id": "220422000000"
    }],
    "220500000000": [{
      "city": "通化市",
      "name": "市辖区",
      "id": "220501000000"
    }, {
      "city": "通化市",
      "name": "东昌区",
      "id": "220502000000"
    }, {
      "city": "通化市",
      "name": "二道江区",
      "id": "220503000000"
    }, {
      "city": "通化市",
      "name": "通化县",
      "id": "220521000000"
    }, {
      "city": "通化市",
      "name": "辉南县",
      "id": "220523000000"
    }, {
      "city": "通化市",
      "name": "柳河县",
      "id": "220524000000"
    }, {
      "city": "通化市",
      "name": "梅河口市",
      "id": "220581000000"
    }, {
      "city": "通化市",
      "name": "集安市",
      "id": "220582000000"
    }],
    "220600000000": [{
      "city": "白山市",
      "name": "市辖区",
      "id": "220601000000"
    }, {
      "city": "白山市",
      "name": "浑江区",
      "id": "220602000000"
    }, {
      "city": "白山市",
      "name": "江源区",
      "id": "220605000000"
    }, {
      "city": "白山市",
      "name": "抚松县",
      "id": "220621000000"
    }, {
      "city": "白山市",
      "name": "靖宇县",
      "id": "220622000000"
    }, {
      "city": "白山市",
      "name": "长白朝鲜族自治县",
      "id": "220623000000"
    }, {
      "city": "白山市",
      "name": "临江市",
      "id": "220681000000"
    }],
    "220700000000": [{
      "city": "松原市",
      "name": "市辖区",
      "id": "220701000000"
    }, {
      "city": "松原市",
      "name": "宁江区",
      "id": "220702000000"
    }, {
      "city": "松原市",
      "name": "前郭尔罗斯蒙古族自治县",
      "id": "220721000000"
    }, {
      "city": "松原市",
      "name": "长岭县",
      "id": "220722000000"
    }, {
      "city": "松原市",
      "name": "乾安县",
      "id": "220723000000"
    }, {
      "city": "松原市",
      "name": "吉林松原经济开发区",
      "id": "220771000000"
    }, {
      "city": "松原市",
      "name": "扶余市",
      "id": "220781000000"
    }],
    "220800000000": [{
      "city": "白城市",
      "name": "市辖区",
      "id": "220801000000"
    }, {
      "city": "白城市",
      "name": "洮北区",
      "id": "220802000000"
    }, {
      "city": "白城市",
      "name": "镇赉县",
      "id": "220821000000"
    }, {
      "city": "白城市",
      "name": "通榆县",
      "id": "220822000000"
    }, {
      "city": "白城市",
      "name": "吉林白城经济开发区",
      "id": "220871000000"
    }, {
      "city": "白城市",
      "name": "洮南市",
      "id": "220881000000"
    }, {
      "city": "白城市",
      "name": "大安市",
      "id": "220882000000"
    }],
    "222400000000": [{
      "city": "延边朝鲜族自治州",
      "name": "延吉市",
      "id": "222401000000"
    }, {
      "city": "延边朝鲜族自治州",
      "name": "图们市",
      "id": "222402000000"
    }, {
      "city": "延边朝鲜族自治州",
      "name": "敦化市",
      "id": "222403000000"
    }, {
      "city": "延边朝鲜族自治州",
      "name": "珲春市",
      "id": "222404000000"
    }, {
      "city": "延边朝鲜族自治州",
      "name": "龙井市",
      "id": "222405000000"
    }, {
      "city": "延边朝鲜族自治州",
      "name": "和龙市",
      "id": "222406000000"
    }, {
      "city": "延边朝鲜族自治州",
      "name": "汪清县",
      "id": "222424000000"
    }, {
      "city": "延边朝鲜族自治州",
      "name": "安图县",
      "id": "222426000000"
    }],
    "230100000000": [{
      "city": "哈尔滨市",
      "name": "市辖区",
      "id": "230101000000"
    }, {
      "city": "哈尔滨市",
      "name": "道里区",
      "id": "230102000000"
    }, {
      "city": "哈尔滨市",
      "name": "南岗区",
      "id": "230103000000"
    }, {
      "city": "哈尔滨市",
      "name": "道外区",
      "id": "230104000000"
    }, {
      "city": "哈尔滨市",
      "name": "平房区",
      "id": "230108000000"
    }, {
      "city": "哈尔滨市",
      "name": "松北区",
      "id": "230109000000"
    }, {
      "city": "哈尔滨市",
      "name": "香坊区",
      "id": "230110000000"
    }, {
      "city": "哈尔滨市",
      "name": "呼兰区",
      "id": "230111000000"
    }, {
      "city": "哈尔滨市",
      "name": "阿城区",
      "id": "230112000000"
    }, {
      "city": "哈尔滨市",
      "name": "双城区",
      "id": "230113000000"
    }, {
      "city": "哈尔滨市",
      "name": "依兰县",
      "id": "230123000000"
    }, {
      "city": "哈尔滨市",
      "name": "方正县",
      "id": "230124000000"
    }, {
      "city": "哈尔滨市",
      "name": "宾县",
      "id": "230125000000"
    }, {
      "city": "哈尔滨市",
      "name": "巴彦县",
      "id": "230126000000"
    }, {
      "city": "哈尔滨市",
      "name": "木兰县",
      "id": "230127000000"
    }, {
      "city": "哈尔滨市",
      "name": "通河县",
      "id": "230128000000"
    }, {
      "city": "哈尔滨市",
      "name": "延寿县",
      "id": "230129000000"
    }, {
      "city": "哈尔滨市",
      "name": "尚志市",
      "id": "230183000000"
    }, {
      "city": "哈尔滨市",
      "name": "五常市",
      "id": "230184000000"
    }],
    "230200000000": [{
      "city": "齐齐哈尔市",
      "name": "市辖区",
      "id": "230201000000"
    }, {
      "city": "齐齐哈尔市",
      "name": "龙沙区",
      "id": "230202000000"
    }, {
      "city": "齐齐哈尔市",
      "name": "建华区",
      "id": "230203000000"
    }, {
      "city": "齐齐哈尔市",
      "name": "铁锋区",
      "id": "230204000000"
    }, {
      "city": "齐齐哈尔市",
      "name": "昂昂溪区",
      "id": "230205000000"
    }, {
      "city": "齐齐哈尔市",
      "name": "富拉尔基区",
      "id": "230206000000"
    }, {
      "city": "齐齐哈尔市",
      "name": "碾子山区",
      "id": "230207000000"
    }, {
      "city": "齐齐哈尔市",
      "name": "梅里斯达斡尔族区",
      "id": "230208000000"
    }, {
      "city": "齐齐哈尔市",
      "name": "龙江县",
      "id": "230221000000"
    }, {
      "city": "齐齐哈尔市",
      "name": "依安县",
      "id": "230223000000"
    }, {
      "city": "齐齐哈尔市",
      "name": "泰来县",
      "id": "230224000000"
    }, {
      "city": "齐齐哈尔市",
      "name": "甘南县",
      "id": "230225000000"
    }, {
      "city": "齐齐哈尔市",
      "name": "富裕县",
      "id": "230227000000"
    }, {
      "city": "齐齐哈尔市",
      "name": "克山县",
      "id": "230229000000"
    }, {
      "city": "齐齐哈尔市",
      "name": "克东县",
      "id": "230230000000"
    }, {
      "city": "齐齐哈尔市",
      "name": "拜泉县",
      "id": "230231000000"
    }, {
      "city": "齐齐哈尔市",
      "name": "讷河市",
      "id": "230281000000"
    }],
    "230300000000": [{
      "city": "鸡西市",
      "name": "市辖区",
      "id": "230301000000"
    }, {
      "city": "鸡西市",
      "name": "鸡冠区",
      "id": "230302000000"
    }, {
      "city": "鸡西市",
      "name": "恒山区",
      "id": "230303000000"
    }, {
      "city": "鸡西市",
      "name": "滴道区",
      "id": "230304000000"
    }, {
      "city": "鸡西市",
      "name": "梨树区",
      "id": "230305000000"
    }, {
      "city": "鸡西市",
      "name": "城子河区",
      "id": "230306000000"
    }, {
      "city": "鸡西市",
      "name": "麻山区",
      "id": "230307000000"
    }, {
      "city": "鸡西市",
      "name": "鸡东县",
      "id": "230321000000"
    }, {
      "city": "鸡西市",
      "name": "虎林市",
      "id": "230381000000"
    }, {
      "city": "鸡西市",
      "name": "密山市",
      "id": "230382000000"
    }],
    "230400000000": [{
      "city": "鹤岗市",
      "name": "市辖区",
      "id": "230401000000"
    }, {
      "city": "鹤岗市",
      "name": "向阳区",
      "id": "230402000000"
    }, {
      "city": "鹤岗市",
      "name": "工农区",
      "id": "230403000000"
    }, {
      "city": "鹤岗市",
      "name": "南山区",
      "id": "230404000000"
    }, {
      "city": "鹤岗市",
      "name": "兴安区",
      "id": "230405000000"
    }, {
      "city": "鹤岗市",
      "name": "东山区",
      "id": "230406000000"
    }, {
      "city": "鹤岗市",
      "name": "兴山区",
      "id": "230407000000"
    }, {
      "city": "鹤岗市",
      "name": "萝北县",
      "id": "230421000000"
    }, {
      "city": "鹤岗市",
      "name": "绥滨县",
      "id": "230422000000"
    }],
    "230500000000": [{
      "city": "双鸭山市",
      "name": "市辖区",
      "id": "230501000000"
    }, {
      "city": "双鸭山市",
      "name": "尖山区",
      "id": "230502000000"
    }, {
      "city": "双鸭山市",
      "name": "岭东区",
      "id": "230503000000"
    }, {
      "city": "双鸭山市",
      "name": "四方台区",
      "id": "230505000000"
    }, {
      "city": "双鸭山市",
      "name": "宝山区",
      "id": "230506000000"
    }, {
      "city": "双鸭山市",
      "name": "集贤县",
      "id": "230521000000"
    }, {
      "city": "双鸭山市",
      "name": "友谊县",
      "id": "230522000000"
    }, {
      "city": "双鸭山市",
      "name": "宝清县",
      "id": "230523000000"
    }, {
      "city": "双鸭山市",
      "name": "饶河县",
      "id": "230524000000"
    }],
    "230600000000": [{
      "city": "大庆市",
      "name": "市辖区",
      "id": "230601000000"
    }, {
      "city": "大庆市",
      "name": "萨尔图区",
      "id": "230602000000"
    }, {
      "city": "大庆市",
      "name": "龙凤区",
      "id": "230603000000"
    }, {
      "city": "大庆市",
      "name": "让胡路区",
      "id": "230604000000"
    }, {
      "city": "大庆市",
      "name": "红岗区",
      "id": "230605000000"
    }, {
      "city": "大庆市",
      "name": "大同区",
      "id": "230606000000"
    }, {
      "city": "大庆市",
      "name": "肇州县",
      "id": "230621000000"
    }, {
      "city": "大庆市",
      "name": "肇源县",
      "id": "230622000000"
    }, {
      "city": "大庆市",
      "name": "林甸县",
      "id": "230623000000"
    }, {
      "city": "大庆市",
      "name": "杜尔伯特蒙古族自治县",
      "id": "230624000000"
    }, {
      "city": "大庆市",
      "name": "大庆高新技术产业开发区",
      "id": "230671000000"
    }],
    "230700000000": [{
      "city": "伊春市",
      "name": "市辖区",
      "id": "230701000000"
    }, {
      "city": "伊春市",
      "name": "伊春区",
      "id": "230702000000"
    }, {
      "city": "伊春市",
      "name": "南岔区",
      "id": "230703000000"
    }, {
      "city": "伊春市",
      "name": "友好区",
      "id": "230704000000"
    }, {
      "city": "伊春市",
      "name": "西林区",
      "id": "230705000000"
    }, {
      "city": "伊春市",
      "name": "翠峦区",
      "id": "230706000000"
    }, {
      "city": "伊春市",
      "name": "新青区",
      "id": "230707000000"
    }, {
      "city": "伊春市",
      "name": "美溪区",
      "id": "230708000000"
    }, {
      "city": "伊春市",
      "name": "金山屯区",
      "id": "230709000000"
    }, {
      "city": "伊春市",
      "name": "五营区",
      "id": "230710000000"
    }, {
      "city": "伊春市",
      "name": "乌马河区",
      "id": "230711000000"
    }, {
      "city": "伊春市",
      "name": "汤旺河区",
      "id": "230712000000"
    }, {
      "city": "伊春市",
      "name": "带岭区",
      "id": "230713000000"
    }, {
      "city": "伊春市",
      "name": "乌伊岭区",
      "id": "230714000000"
    }, {
      "city": "伊春市",
      "name": "红星区",
      "id": "230715000000"
    }, {
      "city": "伊春市",
      "name": "上甘岭区",
      "id": "230716000000"
    }, {
      "city": "伊春市",
      "name": "嘉荫县",
      "id": "230722000000"
    }, {
      "city": "伊春市",
      "name": "铁力市",
      "id": "230781000000"
    }],
    "230800000000": [{
      "city": "佳木斯市",
      "name": "市辖区",
      "id": "230801000000"
    }, {
      "city": "佳木斯市",
      "name": "向阳区",
      "id": "230803000000"
    }, {
      "city": "佳木斯市",
      "name": "前进区",
      "id": "230804000000"
    }, {
      "city": "佳木斯市",
      "name": "东风区",
      "id": "230805000000"
    }, {
      "city": "佳木斯市",
      "name": "郊区",
      "id": "230811000000"
    }, {
      "city": "佳木斯市",
      "name": "桦南县",
      "id": "230822000000"
    }, {
      "city": "佳木斯市",
      "name": "桦川县",
      "id": "230826000000"
    }, {
      "city": "佳木斯市",
      "name": "汤原县",
      "id": "230828000000"
    }, {
      "city": "佳木斯市",
      "name": "同江市",
      "id": "230881000000"
    }, {
      "city": "佳木斯市",
      "name": "富锦市",
      "id": "230882000000"
    }, {
      "city": "佳木斯市",
      "name": "抚远市",
      "id": "230883000000"
    }],
    "230900000000": [{
      "city": "七台河市",
      "name": "市辖区",
      "id": "230901000000"
    }, {
      "city": "七台河市",
      "name": "新兴区",
      "id": "230902000000"
    }, {
      "city": "七台河市",
      "name": "桃山区",
      "id": "230903000000"
    }, {
      "city": "七台河市",
      "name": "茄子河区",
      "id": "230904000000"
    }, {
      "city": "七台河市",
      "name": "勃利县",
      "id": "230921000000"
    }],
    "231000000000": [{
      "city": "牡丹江市",
      "name": "市辖区",
      "id": "231001000000"
    }, {
      "city": "牡丹江市",
      "name": "东安区",
      "id": "231002000000"
    }, {
      "city": "牡丹江市",
      "name": "阳明区",
      "id": "231003000000"
    }, {
      "city": "牡丹江市",
      "name": "爱民区",
      "id": "231004000000"
    }, {
      "city": "牡丹江市",
      "name": "西安区",
      "id": "231005000000"
    }, {
      "city": "牡丹江市",
      "name": "林口县",
      "id": "231025000000"
    }, {
      "city": "牡丹江市",
      "name": "牡丹江经济技术开发区",
      "id": "231071000000"
    }, {
      "city": "牡丹江市",
      "name": "绥芬河市",
      "id": "231081000000"
    }, {
      "city": "牡丹江市",
      "name": "海林市",
      "id": "231083000000"
    }, {
      "city": "牡丹江市",
      "name": "宁安市",
      "id": "231084000000"
    }, {
      "city": "牡丹江市",
      "name": "穆棱市",
      "id": "231085000000"
    }, {
      "city": "牡丹江市",
      "name": "东宁市",
      "id": "231086000000"
    }],
    "231100000000": [{
      "city": "黑河市",
      "name": "市辖区",
      "id": "231101000000"
    }, {
      "city": "黑河市",
      "name": "爱辉区",
      "id": "231102000000"
    }, {
      "city": "黑河市",
      "name": "嫩江县",
      "id": "231121000000"
    }, {
      "city": "黑河市",
      "name": "逊克县",
      "id": "231123000000"
    }, {
      "city": "黑河市",
      "name": "孙吴县",
      "id": "231124000000"
    }, {
      "city": "黑河市",
      "name": "北安市",
      "id": "231181000000"
    }, {
      "city": "黑河市",
      "name": "五大连池市",
      "id": "231182000000"
    }],
    "231200000000": [{
      "city": "绥化市",
      "name": "市辖区",
      "id": "231201000000"
    }, {
      "city": "绥化市",
      "name": "北林区",
      "id": "231202000000"
    }, {
      "city": "绥化市",
      "name": "望奎县",
      "id": "231221000000"
    }, {
      "city": "绥化市",
      "name": "兰西县",
      "id": "231222000000"
    }, {
      "city": "绥化市",
      "name": "青冈县",
      "id": "231223000000"
    }, {
      "city": "绥化市",
      "name": "庆安县",
      "id": "231224000000"
    }, {
      "city": "绥化市",
      "name": "明水县",
      "id": "231225000000"
    }, {
      "city": "绥化市",
      "name": "绥棱县",
      "id": "231226000000"
    }, {
      "city": "绥化市",
      "name": "安达市",
      "id": "231281000000"
    }, {
      "city": "绥化市",
      "name": "肇东市",
      "id": "231282000000"
    }, {
      "city": "绥化市",
      "name": "海伦市",
      "id": "231283000000"
    }],
    "232700000000": [{
      "city": "大兴安岭地区",
      "name": "漠河市",
      "id": "232701000000"
    }, {
      "city": "大兴安岭地区",
      "name": "呼玛县",
      "id": "232721000000"
    }, {
      "city": "大兴安岭地区",
      "name": "塔河县",
      "id": "232722000000"
    }, {
      "city": "大兴安岭地区",
      "name": "加格达奇区",
      "id": "232761000000"
    }, {
      "city": "大兴安岭地区",
      "name": "松岭区",
      "id": "232762000000"
    }, {
      "city": "大兴安岭地区",
      "name": "新林区",
      "id": "232763000000"
    }, {
      "city": "大兴安岭地区",
      "name": "呼中区",
      "id": "232764000000"
    }],
    "310100000000": [{
      "city": "市辖区",
      "name": "黄浦区",
      "id": "310101000000"
    }, {
      "city": "市辖区",
      "name": "徐汇区",
      "id": "310104000000"
    }, {
      "city": "市辖区",
      "name": "长宁区",
      "id": "310105000000"
    }, {
      "city": "市辖区",
      "name": "静安区",
      "id": "310106000000"
    }, {
      "city": "市辖区",
      "name": "普陀区",
      "id": "310107000000"
    }, {
      "city": "市辖区",
      "name": "虹口区",
      "id": "310109000000"
    }, {
      "city": "市辖区",
      "name": "杨浦区",
      "id": "310110000000"
    }, {
      "city": "市辖区",
      "name": "闵行区",
      "id": "310112000000"
    }, {
      "city": "市辖区",
      "name": "宝山区",
      "id": "310113000000"
    }, {
      "city": "市辖区",
      "name": "嘉定区",
      "id": "310114000000"
    }, {
      "city": "市辖区",
      "name": "浦东新区",
      "id": "310115000000"
    }, {
      "city": "市辖区",
      "name": "金山区",
      "id": "310116000000"
    }, {
      "city": "市辖区",
      "name": "松江区",
      "id": "310117000000"
    }, {
      "city": "市辖区",
      "name": "青浦区",
      "id": "310118000000"
    }, {
      "city": "市辖区",
      "name": "奉贤区",
      "id": "310120000000"
    }, {
      "city": "市辖区",
      "name": "崇明区",
      "id": "310151000000"
    }],
    "320100000000": [{
      "city": "南京市",
      "name": "市辖区",
      "id": "320101000000"
    }, {
      "city": "南京市",
      "name": "玄武区",
      "id": "320102000000"
    }, {
      "city": "南京市",
      "name": "秦淮区",
      "id": "320104000000"
    }, {
      "city": "南京市",
      "name": "建邺区",
      "id": "320105000000"
    }, {
      "city": "南京市",
      "name": "鼓楼区",
      "id": "320106000000"
    }, {
      "city": "南京市",
      "name": "浦口区",
      "id": "320111000000"
    }, {
      "city": "南京市",
      "name": "栖霞区",
      "id": "320113000000"
    }, {
      "city": "南京市",
      "name": "雨花台区",
      "id": "320114000000"
    }, {
      "city": "南京市",
      "name": "江宁区",
      "id": "320115000000"
    }, {
      "city": "南京市",
      "name": "六合区",
      "id": "320116000000"
    }, {
      "city": "南京市",
      "name": "溧水区",
      "id": "320117000000"
    }, {
      "city": "南京市",
      "name": "高淳区",
      "id": "320118000000"
    }],
    "320200000000": [{
      "city": "无锡市",
      "name": "市辖区",
      "id": "320201000000"
    }, {
      "city": "无锡市",
      "name": "锡山区",
      "id": "320205000000"
    }, {
      "city": "无锡市",
      "name": "惠山区",
      "id": "320206000000"
    }, {
      "city": "无锡市",
      "name": "滨湖区",
      "id": "320211000000"
    }, {
      "city": "无锡市",
      "name": "梁溪区",
      "id": "320213000000"
    }, {
      "city": "无锡市",
      "name": "新吴区",
      "id": "320214000000"
    }, {
      "city": "无锡市",
      "name": "江阴市",
      "id": "320281000000"
    }, {
      "city": "无锡市",
      "name": "宜兴市",
      "id": "320282000000"
    }],
    "320300000000": [{
      "city": "徐州市",
      "name": "市辖区",
      "id": "320301000000"
    }, {
      "city": "徐州市",
      "name": "鼓楼区",
      "id": "320302000000"
    }, {
      "city": "徐州市",
      "name": "云龙区",
      "id": "320303000000"
    }, {
      "city": "徐州市",
      "name": "贾汪区",
      "id": "320305000000"
    }, {
      "city": "徐州市",
      "name": "泉山区",
      "id": "320311000000"
    }, {
      "city": "徐州市",
      "name": "铜山区",
      "id": "320312000000"
    }, {
      "city": "徐州市",
      "name": "丰县",
      "id": "320321000000"
    }, {
      "city": "徐州市",
      "name": "沛县",
      "id": "320322000000"
    }, {
      "city": "徐州市",
      "name": "睢宁县",
      "id": "320324000000"
    }, {
      "city": "徐州市",
      "name": "徐州经济技术开发区",
      "id": "320371000000"
    }, {
      "city": "徐州市",
      "name": "新沂市",
      "id": "320381000000"
    }, {
      "city": "徐州市",
      "name": "邳州市",
      "id": "320382000000"
    }],
    "320400000000": [{
      "city": "常州市",
      "name": "市辖区",
      "id": "320401000000"
    }, {
      "city": "常州市",
      "name": "天宁区",
      "id": "320402000000"
    }, {
      "city": "常州市",
      "name": "钟楼区",
      "id": "320404000000"
    }, {
      "city": "常州市",
      "name": "新北区",
      "id": "320411000000"
    }, {
      "city": "常州市",
      "name": "武进区",
      "id": "320412000000"
    }, {
      "city": "常州市",
      "name": "金坛区",
      "id": "320413000000"
    }, {
      "city": "常州市",
      "name": "溧阳市",
      "id": "320481000000"
    }],
    "320500000000": [{
      "city": "苏州市",
      "name": "市辖区",
      "id": "320501000000"
    }, {
      "city": "苏州市",
      "name": "虎丘区",
      "id": "320505000000"
    }, {
      "city": "苏州市",
      "name": "吴中区",
      "id": "320506000000"
    }, {
      "city": "苏州市",
      "name": "相城区",
      "id": "320507000000"
    }, {
      "city": "苏州市",
      "name": "姑苏区",
      "id": "320508000000"
    }, {
      "city": "苏州市",
      "name": "吴江区",
      "id": "320509000000"
    }, {
      "city": "苏州市",
      "name": "苏州工业园区",
      "id": "320571000000"
    }, {
      "city": "苏州市",
      "name": "常熟市",
      "id": "320581000000"
    }, {
      "city": "苏州市",
      "name": "张家港市",
      "id": "320582000000"
    }, {
      "city": "苏州市",
      "name": "昆山市",
      "id": "320583000000"
    }, {
      "city": "苏州市",
      "name": "太仓市",
      "id": "320585000000"
    }],
    "320600000000": [{
      "city": "南通市",
      "name": "市辖区",
      "id": "320601000000"
    }, {
      "city": "南通市",
      "name": "崇川区",
      "id": "320602000000"
    }, {
      "city": "南通市",
      "name": "港闸区",
      "id": "320611000000"
    }, {
      "city": "南通市",
      "name": "通州区",
      "id": "320612000000"
    }, {
      "city": "南通市",
      "name": "如东县",
      "id": "320623000000"
    }, {
      "city": "南通市",
      "name": "南通经济技术开发区",
      "id": "320671000000"
    }, {
      "city": "南通市",
      "name": "启东市",
      "id": "320681000000"
    }, {
      "city": "南通市",
      "name": "如皋市",
      "id": "320682000000"
    }, {
      "city": "南通市",
      "name": "海门市",
      "id": "320684000000"
    }, {
      "city": "南通市",
      "name": "海安市",
      "id": "320685000000"
    }],
    "320700000000": [{
      "city": "连云港市",
      "name": "市辖区",
      "id": "320701000000"
    }, {
      "city": "连云港市",
      "name": "连云区",
      "id": "320703000000"
    }, {
      "city": "连云港市",
      "name": "海州区",
      "id": "320706000000"
    }, {
      "city": "连云港市",
      "name": "赣榆区",
      "id": "320707000000"
    }, {
      "city": "连云港市",
      "name": "东海县",
      "id": "320722000000"
    }, {
      "city": "连云港市",
      "name": "灌云县",
      "id": "320723000000"
    }, {
      "city": "连云港市",
      "name": "灌南县",
      "id": "320724000000"
    }, {
      "city": "连云港市",
      "name": "连云港经济技术开发区",
      "id": "320771000000"
    }, {
      "city": "连云港市",
      "name": "连云港高新技术产业开发区",
      "id": "320772000000"
    }],
    "320800000000": [{
      "city": "淮安市",
      "name": "市辖区",
      "id": "320801000000"
    }, {
      "city": "淮安市",
      "name": "淮安区",
      "id": "320803000000"
    }, {
      "city": "淮安市",
      "name": "淮阴区",
      "id": "320804000000"
    }, {
      "city": "淮安市",
      "name": "清江浦区",
      "id": "320812000000"
    }, {
      "city": "淮安市",
      "name": "洪泽区",
      "id": "320813000000"
    }, {
      "city": "淮安市",
      "name": "涟水县",
      "id": "320826000000"
    }, {
      "city": "淮安市",
      "name": "盱眙县",
      "id": "320830000000"
    }, {
      "city": "淮安市",
      "name": "金湖县",
      "id": "320831000000"
    }, {
      "city": "淮安市",
      "name": "淮安经济技术开发区",
      "id": "320871000000"
    }],
    "320900000000": [{
      "city": "盐城市",
      "name": "市辖区",
      "id": "320901000000"
    }, {
      "city": "盐城市",
      "name": "亭湖区",
      "id": "320902000000"
    }, {
      "city": "盐城市",
      "name": "盐都区",
      "id": "320903000000"
    }, {
      "city": "盐城市",
      "name": "大丰区",
      "id": "320904000000"
    }, {
      "city": "盐城市",
      "name": "响水县",
      "id": "320921000000"
    }, {
      "city": "盐城市",
      "name": "滨海县",
      "id": "320922000000"
    }, {
      "city": "盐城市",
      "name": "阜宁县",
      "id": "320923000000"
    }, {
      "city": "盐城市",
      "name": "射阳县",
      "id": "320924000000"
    }, {
      "city": "盐城市",
      "name": "建湖县",
      "id": "320925000000"
    }, {
      "city": "盐城市",
      "name": "盐城经济技术开发区",
      "id": "320971000000"
    }, {
      "city": "盐城市",
      "name": "东台市",
      "id": "320981000000"
    }],
    "321000000000": [{
      "city": "扬州市",
      "name": "市辖区",
      "id": "321001000000"
    }, {
      "city": "扬州市",
      "name": "广陵区",
      "id": "321002000000"
    }, {
      "city": "扬州市",
      "name": "邗江区",
      "id": "321003000000"
    }, {
      "city": "扬州市",
      "name": "江都区",
      "id": "321012000000"
    }, {
      "city": "扬州市",
      "name": "宝应县",
      "id": "321023000000"
    }, {
      "city": "扬州市",
      "name": "扬州经济技术开发区",
      "id": "321071000000"
    }, {
      "city": "扬州市",
      "name": "仪征市",
      "id": "321081000000"
    }, {
      "city": "扬州市",
      "name": "高邮市",
      "id": "321084000000"
    }],
    "321100000000": [{
      "city": "镇江市",
      "name": "市辖区",
      "id": "321101000000"
    }, {
      "city": "镇江市",
      "name": "京口区",
      "id": "321102000000"
    }, {
      "city": "镇江市",
      "name": "润州区",
      "id": "321111000000"
    }, {
      "city": "镇江市",
      "name": "丹徒区",
      "id": "321112000000"
    }, {
      "city": "镇江市",
      "name": "镇江新区",
      "id": "321171000000"
    }, {
      "city": "镇江市",
      "name": "丹阳市",
      "id": "321181000000"
    }, {
      "city": "镇江市",
      "name": "扬中市",
      "id": "321182000000"
    }, {
      "city": "镇江市",
      "name": "句容市",
      "id": "321183000000"
    }],
    "321200000000": [{
      "city": "泰州市",
      "name": "市辖区",
      "id": "321201000000"
    }, {
      "city": "泰州市",
      "name": "海陵区",
      "id": "321202000000"
    }, {
      "city": "泰州市",
      "name": "高港区",
      "id": "321203000000"
    }, {
      "city": "泰州市",
      "name": "姜堰区",
      "id": "321204000000"
    }, {
      "city": "泰州市",
      "name": "泰州医药高新技术产业开发区",
      "id": "321271000000"
    }, {
      "city": "泰州市",
      "name": "兴化市",
      "id": "321281000000"
    }, {
      "city": "泰州市",
      "name": "靖江市",
      "id": "321282000000"
    }, {
      "city": "泰州市",
      "name": "泰兴市",
      "id": "321283000000"
    }],
    "321300000000": [{
      "city": "宿迁市",
      "name": "市辖区",
      "id": "321301000000"
    }, {
      "city": "宿迁市",
      "name": "宿城区",
      "id": "321302000000"
    }, {
      "city": "宿迁市",
      "name": "宿豫区",
      "id": "321311000000"
    }, {
      "city": "宿迁市",
      "name": "沭阳县",
      "id": "321322000000"
    }, {
      "city": "宿迁市",
      "name": "泗阳县",
      "id": "321323000000"
    }, {
      "city": "宿迁市",
      "name": "泗洪县",
      "id": "321324000000"
    }, {
      "city": "宿迁市",
      "name": "宿迁经济技术开发区",
      "id": "321371000000"
    }],
    "330100000000": [{
      "city": "杭州市",
      "name": "市辖区",
      "id": "330101000000"
    }, {
      "city": "杭州市",
      "name": "上城区",
      "id": "330102000000"
    }, {
      "city": "杭州市",
      "name": "下城区",
      "id": "330103000000"
    }, {
      "city": "杭州市",
      "name": "江干区",
      "id": "330104000000"
    }, {
      "city": "杭州市",
      "name": "拱墅区",
      "id": "330105000000"
    }, {
      "city": "杭州市",
      "name": "西湖区",
      "id": "330106000000"
    }, {
      "city": "杭州市",
      "name": "滨江区",
      "id": "330108000000"
    }, {
      "city": "杭州市",
      "name": "萧山区",
      "id": "330109000000"
    }, {
      "city": "杭州市",
      "name": "余杭区",
      "id": "330110000000"
    }, {
      "city": "杭州市",
      "name": "富阳区",
      "id": "330111000000"
    }, {
      "city": "杭州市",
      "name": "临安区",
      "id": "330112000000"
    }, {
      "city": "杭州市",
      "name": "桐庐县",
      "id": "330122000000"
    }, {
      "city": "杭州市",
      "name": "淳安县",
      "id": "330127000000"
    }, {
      "city": "杭州市",
      "name": "建德市",
      "id": "330182000000"
    }],
    "330200000000": [{
      "city": "宁波市",
      "name": "市辖区",
      "id": "330201000000"
    }, {
      "city": "宁波市",
      "name": "海曙区",
      "id": "330203000000"
    }, {
      "city": "宁波市",
      "name": "江北区",
      "id": "330205000000"
    }, {
      "city": "宁波市",
      "name": "北仑区",
      "id": "330206000000"
    }, {
      "city": "宁波市",
      "name": "镇海区",
      "id": "330211000000"
    }, {
      "city": "宁波市",
      "name": "鄞州区",
      "id": "330212000000"
    }, {
      "city": "宁波市",
      "name": "奉化区",
      "id": "330213000000"
    }, {
      "city": "宁波市",
      "name": "象山县",
      "id": "330225000000"
    }, {
      "city": "宁波市",
      "name": "宁海县",
      "id": "330226000000"
    }, {
      "city": "宁波市",
      "name": "余姚市",
      "id": "330281000000"
    }, {
      "city": "宁波市",
      "name": "慈溪市",
      "id": "330282000000"
    }],
    "330300000000": [{
      "city": "温州市",
      "name": "市辖区",
      "id": "330301000000"
    }, {
      "city": "温州市",
      "name": "鹿城区",
      "id": "330302000000"
    }, {
      "city": "温州市",
      "name": "龙湾区",
      "id": "330303000000"
    }, {
      "city": "温州市",
      "name": "瓯海区",
      "id": "330304000000"
    }, {
      "city": "温州市",
      "name": "洞头区",
      "id": "330305000000"
    }, {
      "city": "温州市",
      "name": "永嘉县",
      "id": "330324000000"
    }, {
      "city": "温州市",
      "name": "平阳县",
      "id": "330326000000"
    }, {
      "city": "温州市",
      "name": "苍南县",
      "id": "330327000000"
    }, {
      "city": "温州市",
      "name": "文成县",
      "id": "330328000000"
    }, {
      "city": "温州市",
      "name": "泰顺县",
      "id": "330329000000"
    }, {
      "city": "温州市",
      "name": "温州经济技术开发区",
      "id": "330371000000"
    }, {
      "city": "温州市",
      "name": "瑞安市",
      "id": "330381000000"
    }, {
      "city": "温州市",
      "name": "乐清市",
      "id": "330382000000"
    }],
    "330400000000": [{
      "city": "嘉兴市",
      "name": "市辖区",
      "id": "330401000000"
    }, {
      "city": "嘉兴市",
      "name": "南湖区",
      "id": "330402000000"
    }, {
      "city": "嘉兴市",
      "name": "秀洲区",
      "id": "330411000000"
    }, {
      "city": "嘉兴市",
      "name": "嘉善县",
      "id": "330421000000"
    }, {
      "city": "嘉兴市",
      "name": "海盐县",
      "id": "330424000000"
    }, {
      "city": "嘉兴市",
      "name": "海宁市",
      "id": "330481000000"
    }, {
      "city": "嘉兴市",
      "name": "平湖市",
      "id": "330482000000"
    }, {
      "city": "嘉兴市",
      "name": "桐乡市",
      "id": "330483000000"
    }],
    "330500000000": [{
      "city": "湖州市",
      "name": "市辖区",
      "id": "330501000000"
    }, {
      "city": "湖州市",
      "name": "吴兴区",
      "id": "330502000000"
    }, {
      "city": "湖州市",
      "name": "南浔区",
      "id": "330503000000"
    }, {
      "city": "湖州市",
      "name": "德清县",
      "id": "330521000000"
    }, {
      "city": "湖州市",
      "name": "长兴县",
      "id": "330522000000"
    }, {
      "city": "湖州市",
      "name": "安吉县",
      "id": "330523000000"
    }],
    "330600000000": [{
      "city": "绍兴市",
      "name": "市辖区",
      "id": "330601000000"
    }, {
      "city": "绍兴市",
      "name": "越城区",
      "id": "330602000000"
    }, {
      "city": "绍兴市",
      "name": "柯桥区",
      "id": "330603000000"
    }, {
      "city": "绍兴市",
      "name": "上虞区",
      "id": "330604000000"
    }, {
      "city": "绍兴市",
      "name": "新昌县",
      "id": "330624000000"
    }, {
      "city": "绍兴市",
      "name": "诸暨市",
      "id": "330681000000"
    }, {
      "city": "绍兴市",
      "name": "嵊州市",
      "id": "330683000000"
    }],
    "330700000000": [{
      "city": "金华市",
      "name": "市辖区",
      "id": "330701000000"
    }, {
      "city": "金华市",
      "name": "婺城区",
      "id": "330702000000"
    }, {
      "city": "金华市",
      "name": "金东区",
      "id": "330703000000"
    }, {
      "city": "金华市",
      "name": "武义县",
      "id": "330723000000"
    }, {
      "city": "金华市",
      "name": "浦江县",
      "id": "330726000000"
    }, {
      "city": "金华市",
      "name": "磐安县",
      "id": "330727000000"
    }, {
      "city": "金华市",
      "name": "兰溪市",
      "id": "330781000000"
    }, {
      "city": "金华市",
      "name": "义乌市",
      "id": "330782000000"
    }, {
      "city": "金华市",
      "name": "东阳市",
      "id": "330783000000"
    }, {
      "city": "金华市",
      "name": "永康市",
      "id": "330784000000"
    }],
    "330800000000": [{
      "city": "衢州市",
      "name": "市辖区",
      "id": "330801000000"
    }, {
      "city": "衢州市",
      "name": "柯城区",
      "id": "330802000000"
    }, {
      "city": "衢州市",
      "name": "衢江区",
      "id": "330803000000"
    }, {
      "city": "衢州市",
      "name": "常山县",
      "id": "330822000000"
    }, {
      "city": "衢州市",
      "name": "开化县",
      "id": "330824000000"
    }, {
      "city": "衢州市",
      "name": "龙游县",
      "id": "330825000000"
    }, {
      "city": "衢州市",
      "name": "江山市",
      "id": "330881000000"
    }],
    "330900000000": [{
      "city": "舟山市",
      "name": "市辖区",
      "id": "330901000000"
    }, {
      "city": "舟山市",
      "name": "定海区",
      "id": "330902000000"
    }, {
      "city": "舟山市",
      "name": "普陀区",
      "id": "330903000000"
    }, {
      "city": "舟山市",
      "name": "岱山县",
      "id": "330921000000"
    }, {
      "city": "舟山市",
      "name": "嵊泗县",
      "id": "330922000000"
    }],
    "331000000000": [{
      "city": "台州市",
      "name": "市辖区",
      "id": "331001000000"
    }, {
      "city": "台州市",
      "name": "椒江区",
      "id": "331002000000"
    }, {
      "city": "台州市",
      "name": "黄岩区",
      "id": "331003000000"
    }, {
      "city": "台州市",
      "name": "路桥区",
      "id": "331004000000"
    }, {
      "city": "台州市",
      "name": "三门县",
      "id": "331022000000"
    }, {
      "city": "台州市",
      "name": "天台县",
      "id": "331023000000"
    }, {
      "city": "台州市",
      "name": "仙居县",
      "id": "331024000000"
    }, {
      "city": "台州市",
      "name": "温岭市",
      "id": "331081000000"
    }, {
      "city": "台州市",
      "name": "临海市",
      "id": "331082000000"
    }, {
      "city": "台州市",
      "name": "玉环市",
      "id": "331083000000"
    }],
    "331100000000": [{
      "city": "丽水市",
      "name": "市辖区",
      "id": "331101000000"
    }, {
      "city": "丽水市",
      "name": "莲都区",
      "id": "331102000000"
    }, {
      "city": "丽水市",
      "name": "青田县",
      "id": "331121000000"
    }, {
      "city": "丽水市",
      "name": "缙云县",
      "id": "331122000000"
    }, {
      "city": "丽水市",
      "name": "遂昌县",
      "id": "331123000000"
    }, {
      "city": "丽水市",
      "name": "松阳县",
      "id": "331124000000"
    }, {
      "city": "丽水市",
      "name": "云和县",
      "id": "331125000000"
    }, {
      "city": "丽水市",
      "name": "庆元县",
      "id": "331126000000"
    }, {
      "city": "丽水市",
      "name": "景宁畲族自治县",
      "id": "331127000000"
    }, {
      "city": "丽水市",
      "name": "龙泉市",
      "id": "331181000000"
    }],
    "340100000000": [{
      "city": "合肥市",
      "name": "市辖区",
      "id": "340101000000"
    }, {
      "city": "合肥市",
      "name": "瑶海区",
      "id": "340102000000"
    }, {
      "city": "合肥市",
      "name": "庐阳区",
      "id": "340103000000"
    }, {
      "city": "合肥市",
      "name": "蜀山区",
      "id": "340104000000"
    }, {
      "city": "合肥市",
      "name": "包河区",
      "id": "340111000000"
    }, {
      "city": "合肥市",
      "name": "长丰县",
      "id": "340121000000"
    }, {
      "city": "合肥市",
      "name": "肥东县",
      "id": "340122000000"
    }, {
      "city": "合肥市",
      "name": "肥西县",
      "id": "340123000000"
    }, {
      "city": "合肥市",
      "name": "庐江县",
      "id": "340124000000"
    }, {
      "city": "合肥市",
      "name": "合肥高新技术产业开发区",
      "id": "340171000000"
    }, {
      "city": "合肥市",
      "name": "合肥经济技术开发区",
      "id": "340172000000"
    }, {
      "city": "合肥市",
      "name": "合肥新站高新技术产业开发区",
      "id": "340173000000"
    }, {
      "city": "合肥市",
      "name": "巢湖市",
      "id": "340181000000"
    }],
    "340200000000": [{
      "city": "芜湖市",
      "name": "市辖区",
      "id": "340201000000"
    }, {
      "city": "芜湖市",
      "name": "镜湖区",
      "id": "340202000000"
    }, {
      "city": "芜湖市",
      "name": "弋江区",
      "id": "340203000000"
    }, {
      "city": "芜湖市",
      "name": "鸠江区",
      "id": "340207000000"
    }, {
      "city": "芜湖市",
      "name": "三山区",
      "id": "340208000000"
    }, {
      "city": "芜湖市",
      "name": "芜湖县",
      "id": "340221000000"
    }, {
      "city": "芜湖市",
      "name": "繁昌县",
      "id": "340222000000"
    }, {
      "city": "芜湖市",
      "name": "南陵县",
      "id": "340223000000"
    }, {
      "city": "芜湖市",
      "name": "无为县",
      "id": "340225000000"
    }, {
      "city": "芜湖市",
      "name": "芜湖经济技术开发区",
      "id": "340271000000"
    }, {
      "city": "芜湖市",
      "name": "安徽芜湖长江大桥经济开发区",
      "id": "340272000000"
    }],
    "340300000000": [{
      "city": "蚌埠市",
      "name": "市辖区",
      "id": "340301000000"
    }, {
      "city": "蚌埠市",
      "name": "龙子湖区",
      "id": "340302000000"
    }, {
      "city": "蚌埠市",
      "name": "蚌山区",
      "id": "340303000000"
    }, {
      "city": "蚌埠市",
      "name": "禹会区",
      "id": "340304000000"
    }, {
      "city": "蚌埠市",
      "name": "淮上区",
      "id": "340311000000"
    }, {
      "city": "蚌埠市",
      "name": "怀远县",
      "id": "340321000000"
    }, {
      "city": "蚌埠市",
      "name": "五河县",
      "id": "340322000000"
    }, {
      "city": "蚌埠市",
      "name": "固镇县",
      "id": "340323000000"
    }, {
      "city": "蚌埠市",
      "name": "蚌埠市高新技术开发区",
      "id": "340371000000"
    }, {
      "city": "蚌埠市",
      "name": "蚌埠市经济开发区",
      "id": "340372000000"
    }],
    "340400000000": [{
      "city": "淮南市",
      "name": "市辖区",
      "id": "340401000000"
    }, {
      "city": "淮南市",
      "name": "大通区",
      "id": "340402000000"
    }, {
      "city": "淮南市",
      "name": "田家庵区",
      "id": "340403000000"
    }, {
      "city": "淮南市",
      "name": "谢家集区",
      "id": "340404000000"
    }, {
      "city": "淮南市",
      "name": "八公山区",
      "id": "340405000000"
    }, {
      "city": "淮南市",
      "name": "潘集区",
      "id": "340406000000"
    }, {
      "city": "淮南市",
      "name": "凤台县",
      "id": "340421000000"
    }, {
      "city": "淮南市",
      "name": "寿县",
      "id": "340422000000"
    }],
    "340500000000": [{
      "city": "马鞍山市",
      "name": "市辖区",
      "id": "340501000000"
    }, {
      "city": "马鞍山市",
      "name": "花山区",
      "id": "340503000000"
    }, {
      "city": "马鞍山市",
      "name": "雨山区",
      "id": "340504000000"
    }, {
      "city": "马鞍山市",
      "name": "博望区",
      "id": "340506000000"
    }, {
      "city": "马鞍山市",
      "name": "当涂县",
      "id": "340521000000"
    }, {
      "city": "马鞍山市",
      "name": "含山县",
      "id": "340522000000"
    }, {
      "city": "马鞍山市",
      "name": "和县",
      "id": "340523000000"
    }],
    "340600000000": [{
      "city": "淮北市",
      "name": "市辖区",
      "id": "340601000000"
    }, {
      "city": "淮北市",
      "name": "杜集区",
      "id": "340602000000"
    }, {
      "city": "淮北市",
      "name": "相山区",
      "id": "340603000000"
    }, {
      "city": "淮北市",
      "name": "烈山区",
      "id": "340604000000"
    }, {
      "city": "淮北市",
      "name": "濉溪县",
      "id": "340621000000"
    }],
    "340700000000": [{
      "city": "铜陵市",
      "name": "市辖区",
      "id": "340701000000"
    }, {
      "city": "铜陵市",
      "name": "铜官区",
      "id": "340705000000"
    }, {
      "city": "铜陵市",
      "name": "义安区",
      "id": "340706000000"
    }, {
      "city": "铜陵市",
      "name": "郊区",
      "id": "340711000000"
    }, {
      "city": "铜陵市",
      "name": "枞阳县",
      "id": "340722000000"
    }],
    "340800000000": [{
      "city": "安庆市",
      "name": "市辖区",
      "id": "340801000000"
    }, {
      "city": "安庆市",
      "name": "迎江区",
      "id": "340802000000"
    }, {
      "city": "安庆市",
      "name": "大观区",
      "id": "340803000000"
    }, {
      "city": "安庆市",
      "name": "宜秀区",
      "id": "340811000000"
    }, {
      "city": "安庆市",
      "name": "怀宁县",
      "id": "340822000000"
    }, {
      "city": "安庆市",
      "name": "太湖县",
      "id": "340825000000"
    }, {
      "city": "安庆市",
      "name": "宿松县",
      "id": "340826000000"
    }, {
      "city": "安庆市",
      "name": "望江县",
      "id": "340827000000"
    }, {
      "city": "安庆市",
      "name": "岳西县",
      "id": "340828000000"
    }, {
      "city": "安庆市",
      "name": "安徽安庆经济开发区",
      "id": "340871000000"
    }, {
      "city": "安庆市",
      "name": "桐城市",
      "id": "340881000000"
    }, {
      "city": "安庆市",
      "name": "潜山市",
      "id": "340882000000"
    }],
    "341000000000": [{
      "city": "黄山市",
      "name": "市辖区",
      "id": "341001000000"
    }, {
      "city": "黄山市",
      "name": "屯溪区",
      "id": "341002000000"
    }, {
      "city": "黄山市",
      "name": "黄山区",
      "id": "341003000000"
    }, {
      "city": "黄山市",
      "name": "徽州区",
      "id": "341004000000"
    }, {
      "city": "黄山市",
      "name": "歙县",
      "id": "341021000000"
    }, {
      "city": "黄山市",
      "name": "休宁县",
      "id": "341022000000"
    }, {
      "city": "黄山市",
      "name": "黟县",
      "id": "341023000000"
    }, {
      "city": "黄山市",
      "name": "祁门县",
      "id": "341024000000"
    }],
    "341100000000": [{
      "city": "滁州市",
      "name": "市辖区",
      "id": "341101000000"
    }, {
      "city": "滁州市",
      "name": "琅琊区",
      "id": "341102000000"
    }, {
      "city": "滁州市",
      "name": "南谯区",
      "id": "341103000000"
    }, {
      "city": "滁州市",
      "name": "来安县",
      "id": "341122000000"
    }, {
      "city": "滁州市",
      "name": "全椒县",
      "id": "341124000000"
    }, {
      "city": "滁州市",
      "name": "定远县",
      "id": "341125000000"
    }, {
      "city": "滁州市",
      "name": "凤阳县",
      "id": "341126000000"
    }, {
      "city": "滁州市",
      "name": "苏滁现代产业园",
      "id": "341171000000"
    }, {
      "city": "滁州市",
      "name": "滁州经济技术开发区",
      "id": "341172000000"
    }, {
      "city": "滁州市",
      "name": "天长市",
      "id": "341181000000"
    }, {
      "city": "滁州市",
      "name": "明光市",
      "id": "341182000000"
    }],
    "341200000000": [{
      "city": "阜阳市",
      "name": "市辖区",
      "id": "341201000000"
    }, {
      "city": "阜阳市",
      "name": "颍州区",
      "id": "341202000000"
    }, {
      "city": "阜阳市",
      "name": "颍东区",
      "id": "341203000000"
    }, {
      "city": "阜阳市",
      "name": "颍泉区",
      "id": "341204000000"
    }, {
      "city": "阜阳市",
      "name": "临泉县",
      "id": "341221000000"
    }, {
      "city": "阜阳市",
      "name": "太和县",
      "id": "341222000000"
    }, {
      "city": "阜阳市",
      "name": "阜南县",
      "id": "341225000000"
    }, {
      "city": "阜阳市",
      "name": "颍上县",
      "id": "341226000000"
    }, {
      "city": "阜阳市",
      "name": "阜阳合肥现代产业园区",
      "id": "341271000000"
    }, {
      "city": "阜阳市",
      "name": "阜阳经济技术开发区",
      "id": "341272000000"
    }, {
      "city": "阜阳市",
      "name": "界首市",
      "id": "341282000000"
    }],
    "341300000000": [{
      "city": "宿州市",
      "name": "市辖区",
      "id": "341301000000"
    }, {
      "city": "宿州市",
      "name": "埇桥区",
      "id": "341302000000"
    }, {
      "city": "宿州市",
      "name": "砀山县",
      "id": "341321000000"
    }, {
      "city": "宿州市",
      "name": "萧县",
      "id": "341322000000"
    }, {
      "city": "宿州市",
      "name": "灵璧县",
      "id": "341323000000"
    }, {
      "city": "宿州市",
      "name": "泗县",
      "id": "341324000000"
    }, {
      "city": "宿州市",
      "name": "宿州马鞍山现代产业园区",
      "id": "341371000000"
    }, {
      "city": "宿州市",
      "name": "宿州经济技术开发区",
      "id": "341372000000"
    }],
    "341500000000": [{
      "city": "六安市",
      "name": "市辖区",
      "id": "341501000000"
    }, {
      "city": "六安市",
      "name": "金安区",
      "id": "341502000000"
    }, {
      "city": "六安市",
      "name": "裕安区",
      "id": "341503000000"
    }, {
      "city": "六安市",
      "name": "叶集区",
      "id": "341504000000"
    }, {
      "city": "六安市",
      "name": "霍邱县",
      "id": "341522000000"
    }, {
      "city": "六安市",
      "name": "舒城县",
      "id": "341523000000"
    }, {
      "city": "六安市",
      "name": "金寨县",
      "id": "341524000000"
    }, {
      "city": "六安市",
      "name": "霍山县",
      "id": "341525000000"
    }],
    "341600000000": [{
      "city": "亳州市",
      "name": "市辖区",
      "id": "341601000000"
    }, {
      "city": "亳州市",
      "name": "谯城区",
      "id": "341602000000"
    }, {
      "city": "亳州市",
      "name": "涡阳县",
      "id": "341621000000"
    }, {
      "city": "亳州市",
      "name": "蒙城县",
      "id": "341622000000"
    }, {
      "city": "亳州市",
      "name": "利辛县",
      "id": "341623000000"
    }],
    "341700000000": [{
      "city": "池州市",
      "name": "市辖区",
      "id": "341701000000"
    }, {
      "city": "池州市",
      "name": "贵池区",
      "id": "341702000000"
    }, {
      "city": "池州市",
      "name": "东至县",
      "id": "341721000000"
    }, {
      "city": "池州市",
      "name": "石台县",
      "id": "341722000000"
    }, {
      "city": "池州市",
      "name": "青阳县",
      "id": "341723000000"
    }],
    "341800000000": [{
      "city": "宣城市",
      "name": "市辖区",
      "id": "341801000000"
    }, {
      "city": "宣城市",
      "name": "宣州区",
      "id": "341802000000"
    }, {
      "city": "宣城市",
      "name": "郎溪县",
      "id": "341821000000"
    }, {
      "city": "宣城市",
      "name": "广德县",
      "id": "341822000000"
    }, {
      "city": "宣城市",
      "name": "泾县",
      "id": "341823000000"
    }, {
      "city": "宣城市",
      "name": "绩溪县",
      "id": "341824000000"
    }, {
      "city": "宣城市",
      "name": "旌德县",
      "id": "341825000000"
    }, {
      "city": "宣城市",
      "name": "宣城市经济开发区",
      "id": "341871000000"
    }, {
      "city": "宣城市",
      "name": "宁国市",
      "id": "341881000000"
    }],
    "350100000000": [{
      "city": "福州市",
      "name": "市辖区",
      "id": "350101000000"
    }, {
      "city": "福州市",
      "name": "鼓楼区",
      "id": "350102000000"
    }, {
      "city": "福州市",
      "name": "台江区",
      "id": "350103000000"
    }, {
      "city": "福州市",
      "name": "仓山区",
      "id": "350104000000"
    }, {
      "city": "福州市",
      "name": "马尾区",
      "id": "350105000000"
    }, {
      "city": "福州市",
      "name": "晋安区",
      "id": "350111000000"
    }, {
      "city": "福州市",
      "name": "长乐区",
      "id": "350112000000"
    }, {
      "city": "福州市",
      "name": "闽侯县",
      "id": "350121000000"
    }, {
      "city": "福州市",
      "name": "连江县",
      "id": "350122000000"
    }, {
      "city": "福州市",
      "name": "罗源县",
      "id": "350123000000"
    }, {
      "city": "福州市",
      "name": "闽清县",
      "id": "350124000000"
    }, {
      "city": "福州市",
      "name": "永泰县",
      "id": "350125000000"
    }, {
      "city": "福州市",
      "name": "平潭县",
      "id": "350128000000"
    }, {
      "city": "福州市",
      "name": "福清市",
      "id": "350181000000"
    }],
    "350200000000": [{
      "city": "厦门市",
      "name": "市辖区",
      "id": "350201000000"
    }, {
      "city": "厦门市",
      "name": "思明区",
      "id": "350203000000"
    }, {
      "city": "厦门市",
      "name": "海沧区",
      "id": "350205000000"
    }, {
      "city": "厦门市",
      "name": "湖里区",
      "id": "350206000000"
    }, {
      "city": "厦门市",
      "name": "集美区",
      "id": "350211000000"
    }, {
      "city": "厦门市",
      "name": "同安区",
      "id": "350212000000"
    }, {
      "city": "厦门市",
      "name": "翔安区",
      "id": "350213000000"
    }],
    "350300000000": [{
      "city": "莆田市",
      "name": "市辖区",
      "id": "350301000000"
    }, {
      "city": "莆田市",
      "name": "城厢区",
      "id": "350302000000"
    }, {
      "city": "莆田市",
      "name": "涵江区",
      "id": "350303000000"
    }, {
      "city": "莆田市",
      "name": "荔城区",
      "id": "350304000000"
    }, {
      "city": "莆田市",
      "name": "秀屿区",
      "id": "350305000000"
    }, {
      "city": "莆田市",
      "name": "仙游县",
      "id": "350322000000"
    }],
    "350400000000": [{
      "city": "三明市",
      "name": "市辖区",
      "id": "350401000000"
    }, {
      "city": "三明市",
      "name": "梅列区",
      "id": "350402000000"
    }, {
      "city": "三明市",
      "name": "三元区",
      "id": "350403000000"
    }, {
      "city": "三明市",
      "name": "明溪县",
      "id": "350421000000"
    }, {
      "city": "三明市",
      "name": "清流县",
      "id": "350423000000"
    }, {
      "city": "三明市",
      "name": "宁化县",
      "id": "350424000000"
    }, {
      "city": "三明市",
      "name": "大田县",
      "id": "350425000000"
    }, {
      "city": "三明市",
      "name": "尤溪县",
      "id": "350426000000"
    }, {
      "city": "三明市",
      "name": "沙县",
      "id": "350427000000"
    }, {
      "city": "三明市",
      "name": "将乐县",
      "id": "350428000000"
    }, {
      "city": "三明市",
      "name": "泰宁县",
      "id": "350429000000"
    }, {
      "city": "三明市",
      "name": "建宁县",
      "id": "350430000000"
    }, {
      "city": "三明市",
      "name": "永安市",
      "id": "350481000000"
    }],
    "350500000000": [{
      "city": "泉州市",
      "name": "市辖区",
      "id": "350501000000"
    }, {
      "city": "泉州市",
      "name": "鲤城区",
      "id": "350502000000"
    }, {
      "city": "泉州市",
      "name": "丰泽区",
      "id": "350503000000"
    }, {
      "city": "泉州市",
      "name": "洛江区",
      "id": "350504000000"
    }, {
      "city": "泉州市",
      "name": "泉港区",
      "id": "350505000000"
    }, {
      "city": "泉州市",
      "name": "惠安县",
      "id": "350521000000"
    }, {
      "city": "泉州市",
      "name": "安溪县",
      "id": "350524000000"
    }, {
      "city": "泉州市",
      "name": "永春县",
      "id": "350525000000"
    }, {
      "city": "泉州市",
      "name": "德化县",
      "id": "350526000000"
    }, {
      "city": "泉州市",
      "name": "金门县",
      "id": "350527000000"
    }, {
      "city": "泉州市",
      "name": "石狮市",
      "id": "350581000000"
    }, {
      "city": "泉州市",
      "name": "晋江市",
      "id": "350582000000"
    }, {
      "city": "泉州市",
      "name": "南安市",
      "id": "350583000000"
    }],
    "350600000000": [{
      "city": "漳州市",
      "name": "市辖区",
      "id": "350601000000"
    }, {
      "city": "漳州市",
      "name": "芗城区",
      "id": "350602000000"
    }, {
      "city": "漳州市",
      "name": "龙文区",
      "id": "350603000000"
    }, {
      "city": "漳州市",
      "name": "云霄县",
      "id": "350622000000"
    }, {
      "city": "漳州市",
      "name": "漳浦县",
      "id": "350623000000"
    }, {
      "city": "漳州市",
      "name": "诏安县",
      "id": "350624000000"
    }, {
      "city": "漳州市",
      "name": "长泰县",
      "id": "350625000000"
    }, {
      "city": "漳州市",
      "name": "东山县",
      "id": "350626000000"
    }, {
      "city": "漳州市",
      "name": "南靖县",
      "id": "350627000000"
    }, {
      "city": "漳州市",
      "name": "平和县",
      "id": "350628000000"
    }, {
      "city": "漳州市",
      "name": "华安县",
      "id": "350629000000"
    }, {
      "city": "漳州市",
      "name": "龙海市",
      "id": "350681000000"
    }],
    "350700000000": [{
      "city": "南平市",
      "name": "市辖区",
      "id": "350701000000"
    }, {
      "city": "南平市",
      "name": "延平区",
      "id": "350702000000"
    }, {
      "city": "南平市",
      "name": "建阳区",
      "id": "350703000000"
    }, {
      "city": "南平市",
      "name": "顺昌县",
      "id": "350721000000"
    }, {
      "city": "南平市",
      "name": "浦城县",
      "id": "350722000000"
    }, {
      "city": "南平市",
      "name": "光泽县",
      "id": "350723000000"
    }, {
      "city": "南平市",
      "name": "松溪县",
      "id": "350724000000"
    }, {
      "city": "南平市",
      "name": "政和县",
      "id": "350725000000"
    }, {
      "city": "南平市",
      "name": "邵武市",
      "id": "350781000000"
    }, {
      "city": "南平市",
      "name": "武夷山市",
      "id": "350782000000"
    }, {
      "city": "南平市",
      "name": "建瓯市",
      "id": "350783000000"
    }],
    "350800000000": [{
      "city": "龙岩市",
      "name": "市辖区",
      "id": "350801000000"
    }, {
      "city": "龙岩市",
      "name": "新罗区",
      "id": "350802000000"
    }, {
      "city": "龙岩市",
      "name": "永定区",
      "id": "350803000000"
    }, {
      "city": "龙岩市",
      "name": "长汀县",
      "id": "350821000000"
    }, {
      "city": "龙岩市",
      "name": "上杭县",
      "id": "350823000000"
    }, {
      "city": "龙岩市",
      "name": "武平县",
      "id": "350824000000"
    }, {
      "city": "龙岩市",
      "name": "连城县",
      "id": "350825000000"
    }, {
      "city": "龙岩市",
      "name": "漳平市",
      "id": "350881000000"
    }],
    "350900000000": [{
      "city": "宁德市",
      "name": "市辖区",
      "id": "350901000000"
    }, {
      "city": "宁德市",
      "name": "蕉城区",
      "id": "350902000000"
    }, {
      "city": "宁德市",
      "name": "霞浦县",
      "id": "350921000000"
    }, {
      "city": "宁德市",
      "name": "古田县",
      "id": "350922000000"
    }, {
      "city": "宁德市",
      "name": "屏南县",
      "id": "350923000000"
    }, {
      "city": "宁德市",
      "name": "寿宁县",
      "id": "350924000000"
    }, {
      "city": "宁德市",
      "name": "周宁县",
      "id": "350925000000"
    }, {
      "city": "宁德市",
      "name": "柘荣县",
      "id": "350926000000"
    }, {
      "city": "宁德市",
      "name": "福安市",
      "id": "350981000000"
    }, {
      "city": "宁德市",
      "name": "福鼎市",
      "id": "350982000000"
    }],
    "360100000000": [{
      "city": "南昌市",
      "name": "市辖区",
      "id": "360101000000"
    }, {
      "city": "南昌市",
      "name": "东湖区",
      "id": "360102000000"
    }, {
      "city": "南昌市",
      "name": "西湖区",
      "id": "360103000000"
    }, {
      "city": "南昌市",
      "name": "青云谱区",
      "id": "360104000000"
    }, {
      "city": "南昌市",
      "name": "湾里区",
      "id": "360105000000"
    }, {
      "city": "南昌市",
      "name": "青山湖区",
      "id": "360111000000"
    }, {
      "city": "南昌市",
      "name": "新建区",
      "id": "360112000000"
    }, {
      "city": "南昌市",
      "name": "南昌县",
      "id": "360121000000"
    }, {
      "city": "南昌市",
      "name": "安义县",
      "id": "360123000000"
    }, {
      "city": "南昌市",
      "name": "进贤县",
      "id": "360124000000"
    }],
    "360200000000": [{
      "city": "景德镇市",
      "name": "市辖区",
      "id": "360201000000"
    }, {
      "city": "景德镇市",
      "name": "昌江区",
      "id": "360202000000"
    }, {
      "city": "景德镇市",
      "name": "珠山区",
      "id": "360203000000"
    }, {
      "city": "景德镇市",
      "name": "浮梁县",
      "id": "360222000000"
    }, {
      "city": "景德镇市",
      "name": "乐平市",
      "id": "360281000000"
    }],
    "360300000000": [{
      "city": "萍乡市",
      "name": "市辖区",
      "id": "360301000000"
    }, {
      "city": "萍乡市",
      "name": "安源区",
      "id": "360302000000"
    }, {
      "city": "萍乡市",
      "name": "湘东区",
      "id": "360313000000"
    }, {
      "city": "萍乡市",
      "name": "莲花县",
      "id": "360321000000"
    }, {
      "city": "萍乡市",
      "name": "上栗县",
      "id": "360322000000"
    }, {
      "city": "萍乡市",
      "name": "芦溪县",
      "id": "360323000000"
    }],
    "360400000000": [{
      "city": "九江市",
      "name": "市辖区",
      "id": "360401000000"
    }, {
      "city": "九江市",
      "name": "濂溪区",
      "id": "360402000000"
    }, {
      "city": "九江市",
      "name": "浔阳区",
      "id": "360403000000"
    }, {
      "city": "九江市",
      "name": "柴桑区",
      "id": "360404000000"
    }, {
      "city": "九江市",
      "name": "武宁县",
      "id": "360423000000"
    }, {
      "city": "九江市",
      "name": "修水县",
      "id": "360424000000"
    }, {
      "city": "九江市",
      "name": "永修县",
      "id": "360425000000"
    }, {
      "city": "九江市",
      "name": "德安县",
      "id": "360426000000"
    }, {
      "city": "九江市",
      "name": "都昌县",
      "id": "360428000000"
    }, {
      "city": "九江市",
      "name": "湖口县",
      "id": "360429000000"
    }, {
      "city": "九江市",
      "name": "彭泽县",
      "id": "360430000000"
    }, {
      "city": "九江市",
      "name": "瑞昌市",
      "id": "360481000000"
    }, {
      "city": "九江市",
      "name": "共青城市",
      "id": "360482000000"
    }, {
      "city": "九江市",
      "name": "庐山市",
      "id": "360483000000"
    }],
    "360500000000": [{
      "city": "新余市",
      "name": "市辖区",
      "id": "360501000000"
    }, {
      "city": "新余市",
      "name": "渝水区",
      "id": "360502000000"
    }, {
      "city": "新余市",
      "name": "分宜县",
      "id": "360521000000"
    }],
    "360600000000": [{
      "city": "鹰潭市",
      "name": "市辖区",
      "id": "360601000000"
    }, {
      "city": "鹰潭市",
      "name": "月湖区",
      "id": "360602000000"
    }, {
      "city": "鹰潭市",
      "name": "余江区",
      "id": "360603000000"
    }, {
      "city": "鹰潭市",
      "name": "贵溪市",
      "id": "360681000000"
    }],
    "360700000000": [{
      "city": "赣州市",
      "name": "市辖区",
      "id": "360701000000"
    }, {
      "city": "赣州市",
      "name": "章贡区",
      "id": "360702000000"
    }, {
      "city": "赣州市",
      "name": "南康区",
      "id": "360703000000"
    }, {
      "city": "赣州市",
      "name": "赣县区",
      "id": "360704000000"
    }, {
      "city": "赣州市",
      "name": "信丰县",
      "id": "360722000000"
    }, {
      "city": "赣州市",
      "name": "大余县",
      "id": "360723000000"
    }, {
      "city": "赣州市",
      "name": "上犹县",
      "id": "360724000000"
    }, {
      "city": "赣州市",
      "name": "崇义县",
      "id": "360725000000"
    }, {
      "city": "赣州市",
      "name": "安远县",
      "id": "360726000000"
    }, {
      "city": "赣州市",
      "name": "龙南县",
      "id": "360727000000"
    }, {
      "city": "赣州市",
      "name": "定南县",
      "id": "360728000000"
    }, {
      "city": "赣州市",
      "name": "全南县",
      "id": "360729000000"
    }, {
      "city": "赣州市",
      "name": "宁都县",
      "id": "360730000000"
    }, {
      "city": "赣州市",
      "name": "于都县",
      "id": "360731000000"
    }, {
      "city": "赣州市",
      "name": "兴国县",
      "id": "360732000000"
    }, {
      "city": "赣州市",
      "name": "会昌县",
      "id": "360733000000"
    }, {
      "city": "赣州市",
      "name": "寻乌县",
      "id": "360734000000"
    }, {
      "city": "赣州市",
      "name": "石城县",
      "id": "360735000000"
    }, {
      "city": "赣州市",
      "name": "瑞金市",
      "id": "360781000000"
    }],
    "360800000000": [{
      "city": "吉安市",
      "name": "市辖区",
      "id": "360801000000"
    }, {
      "city": "吉安市",
      "name": "吉州区",
      "id": "360802000000"
    }, {
      "city": "吉安市",
      "name": "青原区",
      "id": "360803000000"
    }, {
      "city": "吉安市",
      "name": "吉安县",
      "id": "360821000000"
    }, {
      "city": "吉安市",
      "name": "吉水县",
      "id": "360822000000"
    }, {
      "city": "吉安市",
      "name": "峡江县",
      "id": "360823000000"
    }, {
      "city": "吉安市",
      "name": "新干县",
      "id": "360824000000"
    }, {
      "city": "吉安市",
      "name": "永丰县",
      "id": "360825000000"
    }, {
      "city": "吉安市",
      "name": "泰和县",
      "id": "360826000000"
    }, {
      "city": "吉安市",
      "name": "遂川县",
      "id": "360827000000"
    }, {
      "city": "吉安市",
      "name": "万安县",
      "id": "360828000000"
    }, {
      "city": "吉安市",
      "name": "安福县",
      "id": "360829000000"
    }, {
      "city": "吉安市",
      "name": "永新县",
      "id": "360830000000"
    }, {
      "city": "吉安市",
      "name": "井冈山市",
      "id": "360881000000"
    }],
    "360900000000": [{
      "city": "宜春市",
      "name": "市辖区",
      "id": "360901000000"
    }, {
      "city": "宜春市",
      "name": "袁州区",
      "id": "360902000000"
    }, {
      "city": "宜春市",
      "name": "奉新县",
      "id": "360921000000"
    }, {
      "city": "宜春市",
      "name": "万载县",
      "id": "360922000000"
    }, {
      "city": "宜春市",
      "name": "上高县",
      "id": "360923000000"
    }, {
      "city": "宜春市",
      "name": "宜丰县",
      "id": "360924000000"
    }, {
      "city": "宜春市",
      "name": "靖安县",
      "id": "360925000000"
    }, {
      "city": "宜春市",
      "name": "铜鼓县",
      "id": "360926000000"
    }, {
      "city": "宜春市",
      "name": "丰城市",
      "id": "360981000000"
    }, {
      "city": "宜春市",
      "name": "樟树市",
      "id": "360982000000"
    }, {
      "city": "宜春市",
      "name": "高安市",
      "id": "360983000000"
    }],
    "361000000000": [{
      "city": "抚州市",
      "name": "市辖区",
      "id": "361001000000"
    }, {
      "city": "抚州市",
      "name": "临川区",
      "id": "361002000000"
    }, {
      "city": "抚州市",
      "name": "东乡区",
      "id": "361003000000"
    }, {
      "city": "抚州市",
      "name": "南城县",
      "id": "361021000000"
    }, {
      "city": "抚州市",
      "name": "黎川县",
      "id": "361022000000"
    }, {
      "city": "抚州市",
      "name": "南丰县",
      "id": "361023000000"
    }, {
      "city": "抚州市",
      "name": "崇仁县",
      "id": "361024000000"
    }, {
      "city": "抚州市",
      "name": "乐安县",
      "id": "361025000000"
    }, {
      "city": "抚州市",
      "name": "宜黄县",
      "id": "361026000000"
    }, {
      "city": "抚州市",
      "name": "金溪县",
      "id": "361027000000"
    }, {
      "city": "抚州市",
      "name": "资溪县",
      "id": "361028000000"
    }, {
      "city": "抚州市",
      "name": "广昌县",
      "id": "361030000000"
    }],
    "361100000000": [{
      "city": "上饶市",
      "name": "市辖区",
      "id": "361101000000"
    }, {
      "city": "上饶市",
      "name": "信州区",
      "id": "361102000000"
    }, {
      "city": "上饶市",
      "name": "广丰区",
      "id": "361103000000"
    }, {
      "city": "上饶市",
      "name": "上饶县",
      "id": "361121000000"
    }, {
      "city": "上饶市",
      "name": "玉山县",
      "id": "361123000000"
    }, {
      "city": "上饶市",
      "name": "铅山县",
      "id": "361124000000"
    }, {
      "city": "上饶市",
      "name": "横峰县",
      "id": "361125000000"
    }, {
      "city": "上饶市",
      "name": "弋阳县",
      "id": "361126000000"
    }, {
      "city": "上饶市",
      "name": "余干县",
      "id": "361127000000"
    }, {
      "city": "上饶市",
      "name": "鄱阳县",
      "id": "361128000000"
    }, {
      "city": "上饶市",
      "name": "万年县",
      "id": "361129000000"
    }, {
      "city": "上饶市",
      "name": "婺源县",
      "id": "361130000000"
    }, {
      "city": "上饶市",
      "name": "德兴市",
      "id": "361181000000"
    }],
    "370100000000": [{
      "city": "济南市",
      "name": "市辖区",
      "id": "370101000000"
    }, {
      "city": "济南市",
      "name": "历下区",
      "id": "370102000000"
    }, {
      "city": "济南市",
      "name": "市中区",
      "id": "370103000000"
    }, {
      "city": "济南市",
      "name": "槐荫区",
      "id": "370104000000"
    }, {
      "city": "济南市",
      "name": "天桥区",
      "id": "370105000000"
    }, {
      "city": "济南市",
      "name": "历城区",
      "id": "370112000000"
    }, {
      "city": "济南市",
      "name": "长清区",
      "id": "370113000000"
    }, {
      "city": "济南市",
      "name": "章丘区",
      "id": "370114000000"
    }, {
      "city": "济南市",
      "name": "济阳区",
      "id": "370115000000"
    }, {
      "city": "济南市",
      "name": "平阴县",
      "id": "370124000000"
    }, {
      "city": "济南市",
      "name": "商河县",
      "id": "370126000000"
    }, {
      "city": "济南市",
      "name": "济南高新技术产业开发区",
      "id": "370171000000"
    }],
    "370200000000": [{
      "city": "青岛市",
      "name": "市辖区",
      "id": "370201000000"
    }, {
      "city": "青岛市",
      "name": "市南区",
      "id": "370202000000"
    }, {
      "city": "青岛市",
      "name": "市北区",
      "id": "370203000000"
    }, {
      "city": "青岛市",
      "name": "黄岛区",
      "id": "370211000000"
    }, {
      "city": "青岛市",
      "name": "崂山区",
      "id": "370212000000"
    }, {
      "city": "青岛市",
      "name": "李沧区",
      "id": "370213000000"
    }, {
      "city": "青岛市",
      "name": "城阳区",
      "id": "370214000000"
    }, {
      "city": "青岛市",
      "name": "即墨区",
      "id": "370215000000"
    }, {
      "city": "青岛市",
      "name": "青岛高新技术产业开发区",
      "id": "370271000000"
    }, {
      "city": "青岛市",
      "name": "胶州市",
      "id": "370281000000"
    }, {
      "city": "青岛市",
      "name": "平度市",
      "id": "370283000000"
    }, {
      "city": "青岛市",
      "name": "莱西市",
      "id": "370285000000"
    }],
    "370300000000": [{
      "city": "淄博市",
      "name": "市辖区",
      "id": "370301000000"
    }, {
      "city": "淄博市",
      "name": "淄川区",
      "id": "370302000000"
    }, {
      "city": "淄博市",
      "name": "张店区",
      "id": "370303000000"
    }, {
      "city": "淄博市",
      "name": "博山区",
      "id": "370304000000"
    }, {
      "city": "淄博市",
      "name": "临淄区",
      "id": "370305000000"
    }, {
      "city": "淄博市",
      "name": "周村区",
      "id": "370306000000"
    }, {
      "city": "淄博市",
      "name": "桓台县",
      "id": "370321000000"
    }, {
      "city": "淄博市",
      "name": "高青县",
      "id": "370322000000"
    }, {
      "city": "淄博市",
      "name": "沂源县",
      "id": "370323000000"
    }],
    "370400000000": [{
      "city": "枣庄市",
      "name": "市辖区",
      "id": "370401000000"
    }, {
      "city": "枣庄市",
      "name": "市中区",
      "id": "370402000000"
    }, {
      "city": "枣庄市",
      "name": "薛城区",
      "id": "370403000000"
    }, {
      "city": "枣庄市",
      "name": "峄城区",
      "id": "370404000000"
    }, {
      "city": "枣庄市",
      "name": "台儿庄区",
      "id": "370405000000"
    }, {
      "city": "枣庄市",
      "name": "山亭区",
      "id": "370406000000"
    }, {
      "city": "枣庄市",
      "name": "滕州市",
      "id": "370481000000"
    }],
    "370500000000": [{
      "city": "东营市",
      "name": "市辖区",
      "id": "370501000000"
    }, {
      "city": "东营市",
      "name": "东营区",
      "id": "370502000000"
    }, {
      "city": "东营市",
      "name": "河口区",
      "id": "370503000000"
    }, {
      "city": "东营市",
      "name": "垦利区",
      "id": "370505000000"
    }, {
      "city": "东营市",
      "name": "利津县",
      "id": "370522000000"
    }, {
      "city": "东营市",
      "name": "广饶县",
      "id": "370523000000"
    }, {
      "city": "东营市",
      "name": "东营经济技术开发区",
      "id": "370571000000"
    }, {
      "city": "东营市",
      "name": "东营港经济开发区",
      "id": "370572000000"
    }],
    "370600000000": [{
      "city": "烟台市",
      "name": "市辖区",
      "id": "370601000000"
    }, {
      "city": "烟台市",
      "name": "芝罘区",
      "id": "370602000000"
    }, {
      "city": "烟台市",
      "name": "福山区",
      "id": "370611000000"
    }, {
      "city": "烟台市",
      "name": "牟平区",
      "id": "370612000000"
    }, {
      "city": "烟台市",
      "name": "莱山区",
      "id": "370613000000"
    }, {
      "city": "烟台市",
      "name": "长岛县",
      "id": "370634000000"
    }, {
      "city": "烟台市",
      "name": "烟台高新技术产业开发区",
      "id": "370671000000"
    }, {
      "city": "烟台市",
      "name": "烟台经济技术开发区",
      "id": "370672000000"
    }, {
      "city": "烟台市",
      "name": "龙口市",
      "id": "370681000000"
    }, {
      "city": "烟台市",
      "name": "莱阳市",
      "id": "370682000000"
    }, {
      "city": "烟台市",
      "name": "莱州市",
      "id": "370683000000"
    }, {
      "city": "烟台市",
      "name": "蓬莱市",
      "id": "370684000000"
    }, {
      "city": "烟台市",
      "name": "招远市",
      "id": "370685000000"
    }, {
      "city": "烟台市",
      "name": "栖霞市",
      "id": "370686000000"
    }, {
      "city": "烟台市",
      "name": "海阳市",
      "id": "370687000000"
    }],
    "370700000000": [{
      "city": "潍坊市",
      "name": "市辖区",
      "id": "370701000000"
    }, {
      "city": "潍坊市",
      "name": "潍城区",
      "id": "370702000000"
    }, {
      "city": "潍坊市",
      "name": "寒亭区",
      "id": "370703000000"
    }, {
      "city": "潍坊市",
      "name": "坊子区",
      "id": "370704000000"
    }, {
      "city": "潍坊市",
      "name": "奎文区",
      "id": "370705000000"
    }, {
      "city": "潍坊市",
      "name": "临朐县",
      "id": "370724000000"
    }, {
      "city": "潍坊市",
      "name": "昌乐县",
      "id": "370725000000"
    }, {
      "city": "潍坊市",
      "name": "潍坊滨海经济技术开发区",
      "id": "370772000000"
    }, {
      "city": "潍坊市",
      "name": "青州市",
      "id": "370781000000"
    }, {
      "city": "潍坊市",
      "name": "诸城市",
      "id": "370782000000"
    }, {
      "city": "潍坊市",
      "name": "寿光市",
      "id": "370783000000"
    }, {
      "city": "潍坊市",
      "name": "安丘市",
      "id": "370784000000"
    }, {
      "city": "潍坊市",
      "name": "高密市",
      "id": "370785000000"
    }, {
      "city": "潍坊市",
      "name": "昌邑市",
      "id": "370786000000"
    }],
    "370800000000": [{
      "city": "济宁市",
      "name": "市辖区",
      "id": "370801000000"
    }, {
      "city": "济宁市",
      "name": "任城区",
      "id": "370811000000"
    }, {
      "city": "济宁市",
      "name": "兖州区",
      "id": "370812000000"
    }, {
      "city": "济宁市",
      "name": "微山县",
      "id": "370826000000"
    }, {
      "city": "济宁市",
      "name": "鱼台县",
      "id": "370827000000"
    }, {
      "city": "济宁市",
      "name": "金乡县",
      "id": "370828000000"
    }, {
      "city": "济宁市",
      "name": "嘉祥县",
      "id": "370829000000"
    }, {
      "city": "济宁市",
      "name": "汶上县",
      "id": "370830000000"
    }, {
      "city": "济宁市",
      "name": "泗水县",
      "id": "370831000000"
    }, {
      "city": "济宁市",
      "name": "梁山县",
      "id": "370832000000"
    }, {
      "city": "济宁市",
      "name": "济宁高新技术产业开发区",
      "id": "370871000000"
    }, {
      "city": "济宁市",
      "name": "曲阜市",
      "id": "370881000000"
    }, {
      "city": "济宁市",
      "name": "邹城市",
      "id": "370883000000"
    }],
    "370900000000": [{
      "city": "泰安市",
      "name": "市辖区",
      "id": "370901000000"
    }, {
      "city": "泰安市",
      "name": "泰山区",
      "id": "370902000000"
    }, {
      "city": "泰安市",
      "name": "岱岳区",
      "id": "370911000000"
    }, {
      "city": "泰安市",
      "name": "宁阳县",
      "id": "370921000000"
    }, {
      "city": "泰安市",
      "name": "东平县",
      "id": "370923000000"
    }, {
      "city": "泰安市",
      "name": "新泰市",
      "id": "370982000000"
    }, {
      "city": "泰安市",
      "name": "肥城市",
      "id": "370983000000"
    }],
    "371000000000": [{
      "city": "威海市",
      "name": "市辖区",
      "id": "371001000000"
    }, {
      "city": "威海市",
      "name": "环翠区",
      "id": "371002000000"
    }, {
      "city": "威海市",
      "name": "文登区",
      "id": "371003000000"
    }, {
      "city": "威海市",
      "name": "威海火炬高技术产业开发区",
      "id": "371071000000"
    }, {
      "city": "威海市",
      "name": "威海经济技术开发区",
      "id": "371072000000"
    }, {
      "city": "威海市",
      "name": "威海临港经济技术开发区",
      "id": "371073000000"
    }, {
      "city": "威海市",
      "name": "荣成市",
      "id": "371082000000"
    }, {
      "city": "威海市",
      "name": "乳山市",
      "id": "371083000000"
    }],
    "371100000000": [{
      "city": "日照市",
      "name": "市辖区",
      "id": "371101000000"
    }, {
      "city": "日照市",
      "name": "东港区",
      "id": "371102000000"
    }, {
      "city": "日照市",
      "name": "岚山区",
      "id": "371103000000"
    }, {
      "city": "日照市",
      "name": "五莲县",
      "id": "371121000000"
    }, {
      "city": "日照市",
      "name": "莒县",
      "id": "371122000000"
    }, {
      "city": "日照市",
      "name": "日照经济技术开发区",
      "id": "371171000000"
    }],
    "371200000000": [{
      "city": "莱芜市",
      "name": "市辖区",
      "id": "371201000000"
    }, {
      "city": "莱芜市",
      "name": "莱城区",
      "id": "371202000000"
    }, {
      "city": "莱芜市",
      "name": "钢城区",
      "id": "371203000000"
    }],
    "371300000000": [{
      "city": "临沂市",
      "name": "市辖区",
      "id": "371301000000"
    }, {
      "city": "临沂市",
      "name": "兰山区",
      "id": "371302000000"
    }, {
      "city": "临沂市",
      "name": "罗庄区",
      "id": "371311000000"
    }, {
      "city": "临沂市",
      "name": "河东区",
      "id": "371312000000"
    }, {
      "city": "临沂市",
      "name": "沂南县",
      "id": "371321000000"
    }, {
      "city": "临沂市",
      "name": "郯城县",
      "id": "371322000000"
    }, {
      "city": "临沂市",
      "name": "沂水县",
      "id": "371323000000"
    }, {
      "city": "临沂市",
      "name": "兰陵县",
      "id": "371324000000"
    }, {
      "city": "临沂市",
      "name": "费县",
      "id": "371325000000"
    }, {
      "city": "临沂市",
      "name": "平邑县",
      "id": "371326000000"
    }, {
      "city": "临沂市",
      "name": "莒南县",
      "id": "371327000000"
    }, {
      "city": "临沂市",
      "name": "蒙阴县",
      "id": "371328000000"
    }, {
      "city": "临沂市",
      "name": "临沭县",
      "id": "371329000000"
    }, {
      "city": "临沂市",
      "name": "临沂高新技术产业开发区",
      "id": "371371000000"
    }, {
      "city": "临沂市",
      "name": "临沂经济技术开发区",
      "id": "371372000000"
    }, {
      "city": "临沂市",
      "name": "临沂临港经济开发区",
      "id": "371373000000"
    }],
    "371400000000": [{
      "city": "德州市",
      "name": "市辖区",
      "id": "371401000000"
    }, {
      "city": "德州市",
      "name": "德城区",
      "id": "371402000000"
    }, {
      "city": "德州市",
      "name": "陵城区",
      "id": "371403000000"
    }, {
      "city": "德州市",
      "name": "宁津县",
      "id": "371422000000"
    }, {
      "city": "德州市",
      "name": "庆云县",
      "id": "371423000000"
    }, {
      "city": "德州市",
      "name": "临邑县",
      "id": "371424000000"
    }, {
      "city": "德州市",
      "name": "齐河县",
      "id": "371425000000"
    }, {
      "city": "德州市",
      "name": "平原县",
      "id": "371426000000"
    }, {
      "city": "德州市",
      "name": "夏津县",
      "id": "371427000000"
    }, {
      "city": "德州市",
      "name": "武城县",
      "id": "371428000000"
    }, {
      "city": "德州市",
      "name": "德州经济技术开发区",
      "id": "371471000000"
    }, {
      "city": "德州市",
      "name": "德州运河经济开发区",
      "id": "371472000000"
    }, {
      "city": "德州市",
      "name": "乐陵市",
      "id": "371481000000"
    }, {
      "city": "德州市",
      "name": "禹城市",
      "id": "371482000000"
    }],
    "371500000000": [{
      "city": "聊城市",
      "name": "市辖区",
      "id": "371501000000"
    }, {
      "city": "聊城市",
      "name": "东昌府区",
      "id": "371502000000"
    }, {
      "city": "聊城市",
      "name": "阳谷县",
      "id": "371521000000"
    }, {
      "city": "聊城市",
      "name": "莘县",
      "id": "371522000000"
    }, {
      "city": "聊城市",
      "name": "茌平县",
      "id": "371523000000"
    }, {
      "city": "聊城市",
      "name": "东阿县",
      "id": "371524000000"
    }, {
      "city": "聊城市",
      "name": "冠县",
      "id": "371525000000"
    }, {
      "city": "聊城市",
      "name": "高唐县",
      "id": "371526000000"
    }, {
      "city": "聊城市",
      "name": "临清市",
      "id": "371581000000"
    }],
    "371600000000": [{
      "city": "滨州市",
      "name": "市辖区",
      "id": "371601000000"
    }, {
      "city": "滨州市",
      "name": "滨城区",
      "id": "371602000000"
    }, {
      "city": "滨州市",
      "name": "沾化区",
      "id": "371603000000"
    }, {
      "city": "滨州市",
      "name": "惠民县",
      "id": "371621000000"
    }, {
      "city": "滨州市",
      "name": "阳信县",
      "id": "371622000000"
    }, {
      "city": "滨州市",
      "name": "无棣县",
      "id": "371623000000"
    }, {
      "city": "滨州市",
      "name": "博兴县",
      "id": "371625000000"
    }, {
      "city": "滨州市",
      "name": "邹平市",
      "id": "371681000000"
    }],
    "371700000000": [{
      "city": "菏泽市",
      "name": "市辖区",
      "id": "371701000000"
    }, {
      "city": "菏泽市",
      "name": "牡丹区",
      "id": "371702000000"
    }, {
      "city": "菏泽市",
      "name": "定陶区",
      "id": "371703000000"
    }, {
      "city": "菏泽市",
      "name": "曹县",
      "id": "371721000000"
    }, {
      "city": "菏泽市",
      "name": "单县",
      "id": "371722000000"
    }, {
      "city": "菏泽市",
      "name": "成武县",
      "id": "371723000000"
    }, {
      "city": "菏泽市",
      "name": "巨野县",
      "id": "371724000000"
    }, {
      "city": "菏泽市",
      "name": "郓城县",
      "id": "371725000000"
    }, {
      "city": "菏泽市",
      "name": "鄄城县",
      "id": "371726000000"
    }, {
      "city": "菏泽市",
      "name": "东明县",
      "id": "371728000000"
    }, {
      "city": "菏泽市",
      "name": "菏泽经济技术开发区",
      "id": "371771000000"
    }, {
      "city": "菏泽市",
      "name": "菏泽高新技术开发区",
      "id": "371772000000"
    }],
    "410100000000": [{
      "city": "郑州市",
      "name": "市辖区",
      "id": "410101000000"
    }, {
      "city": "郑州市",
      "name": "中原区",
      "id": "410102000000"
    }, {
      "city": "郑州市",
      "name": "二七区",
      "id": "410103000000"
    }, {
      "city": "郑州市",
      "name": "管城回族区",
      "id": "410104000000"
    }, {
      "city": "郑州市",
      "name": "金水区",
      "id": "410105000000"
    }, {
      "city": "郑州市",
      "name": "上街区",
      "id": "410106000000"
    }, {
      "city": "郑州市",
      "name": "惠济区",
      "id": "410108000000"
    }, {
      "city": "郑州市",
      "name": "中牟县",
      "id": "410122000000"
    }, {
      "city": "郑州市",
      "name": "郑州经济技术开发区",
      "id": "410171000000"
    }, {
      "city": "郑州市",
      "name": "郑州高新技术产业开发区",
      "id": "410172000000"
    }, {
      "city": "郑州市",
      "name": "郑州航空港经济综合实验区",
      "id": "410173000000"
    }, {
      "city": "郑州市",
      "name": "巩义市",
      "id": "410181000000"
    }, {
      "city": "郑州市",
      "name": "荥阳市",
      "id": "410182000000"
    }, {
      "city": "郑州市",
      "name": "新密市",
      "id": "410183000000"
    }, {
      "city": "郑州市",
      "name": "新郑市",
      "id": "410184000000"
    }, {
      "city": "郑州市",
      "name": "登封市",
      "id": "410185000000"
    }],
    "410200000000": [{
      "city": "开封市",
      "name": "市辖区",
      "id": "410201000000"
    }, {
      "city": "开封市",
      "name": "龙亭区",
      "id": "410202000000"
    }, {
      "city": "开封市",
      "name": "顺河回族区",
      "id": "410203000000"
    }, {
      "city": "开封市",
      "name": "鼓楼区",
      "id": "410204000000"
    }, {
      "city": "开封市",
      "name": "禹王台区",
      "id": "410205000000"
    }, {
      "city": "开封市",
      "name": "祥符区",
      "id": "410212000000"
    }, {
      "city": "开封市",
      "name": "杞县",
      "id": "410221000000"
    }, {
      "city": "开封市",
      "name": "通许县",
      "id": "410222000000"
    }, {
      "city": "开封市",
      "name": "尉氏县",
      "id": "410223000000"
    }, {
      "city": "开封市",
      "name": "兰考县",
      "id": "410225000000"
    }],
    "410300000000": [{
      "city": "洛阳市",
      "name": "市辖区",
      "id": "410301000000"
    }, {
      "city": "洛阳市",
      "name": "老城区",
      "id": "410302000000"
    }, {
      "city": "洛阳市",
      "name": "西工区",
      "id": "410303000000"
    }, {
      "city": "洛阳市",
      "name": "瀍河回族区",
      "id": "410304000000"
    }, {
      "city": "洛阳市",
      "name": "涧西区",
      "id": "410305000000"
    }, {
      "city": "洛阳市",
      "name": "吉利区",
      "id": "410306000000"
    }, {
      "city": "洛阳市",
      "name": "洛龙区",
      "id": "410311000000"
    }, {
      "city": "洛阳市",
      "name": "孟津县",
      "id": "410322000000"
    }, {
      "city": "洛阳市",
      "name": "新安县",
      "id": "410323000000"
    }, {
      "city": "洛阳市",
      "name": "栾川县",
      "id": "410324000000"
    }, {
      "city": "洛阳市",
      "name": "嵩县",
      "id": "410325000000"
    }, {
      "city": "洛阳市",
      "name": "汝阳县",
      "id": "410326000000"
    }, {
      "city": "洛阳市",
      "name": "宜阳县",
      "id": "410327000000"
    }, {
      "city": "洛阳市",
      "name": "洛宁县",
      "id": "410328000000"
    }, {
      "city": "洛阳市",
      "name": "伊川县",
      "id": "410329000000"
    }, {
      "city": "洛阳市",
      "name": "洛阳高新技术产业开发区",
      "id": "410371000000"
    }, {
      "city": "洛阳市",
      "name": "偃师市",
      "id": "410381000000"
    }],
    "410400000000": [{
      "city": "平顶山市",
      "name": "市辖区",
      "id": "410401000000"
    }, {
      "city": "平顶山市",
      "name": "新华区",
      "id": "410402000000"
    }, {
      "city": "平顶山市",
      "name": "卫东区",
      "id": "410403000000"
    }, {
      "city": "平顶山市",
      "name": "石龙区",
      "id": "410404000000"
    }, {
      "city": "平顶山市",
      "name": "湛河区",
      "id": "410411000000"
    }, {
      "city": "平顶山市",
      "name": "宝丰县",
      "id": "410421000000"
    }, {
      "city": "平顶山市",
      "name": "叶县",
      "id": "410422000000"
    }, {
      "city": "平顶山市",
      "name": "鲁山县",
      "id": "410423000000"
    }, {
      "city": "平顶山市",
      "name": "郏县",
      "id": "410425000000"
    }, {
      "city": "平顶山市",
      "name": "平顶山高新技术产业开发区",
      "id": "410471000000"
    }, {
      "city": "平顶山市",
      "name": "平顶山市新城区",
      "id": "410472000000"
    }, {
      "city": "平顶山市",
      "name": "舞钢市",
      "id": "410481000000"
    }, {
      "city": "平顶山市",
      "name": "汝州市",
      "id": "410482000000"
    }],
    "410500000000": [{
      "city": "安阳市",
      "name": "市辖区",
      "id": "410501000000"
    }, {
      "city": "安阳市",
      "name": "文峰区",
      "id": "410502000000"
    }, {
      "city": "安阳市",
      "name": "北关区",
      "id": "410503000000"
    }, {
      "city": "安阳市",
      "name": "殷都区",
      "id": "410505000000"
    }, {
      "city": "安阳市",
      "name": "龙安区",
      "id": "410506000000"
    }, {
      "city": "安阳市",
      "name": "安阳县",
      "id": "410522000000"
    }, {
      "city": "安阳市",
      "name": "汤阴县",
      "id": "410523000000"
    }, {
      "city": "安阳市",
      "name": "滑县",
      "id": "410526000000"
    }, {
      "city": "安阳市",
      "name": "内黄县",
      "id": "410527000000"
    }, {
      "city": "安阳市",
      "name": "安阳高新技术产业开发区",
      "id": "410571000000"
    }, {
      "city": "安阳市",
      "name": "林州市",
      "id": "410581000000"
    }],
    "410600000000": [{
      "city": "鹤壁市",
      "name": "市辖区",
      "id": "410601000000"
    }, {
      "city": "鹤壁市",
      "name": "鹤山区",
      "id": "410602000000"
    }, {
      "city": "鹤壁市",
      "name": "山城区",
      "id": "410603000000"
    }, {
      "city": "鹤壁市",
      "name": "淇滨区",
      "id": "410611000000"
    }, {
      "city": "鹤壁市",
      "name": "浚县",
      "id": "410621000000"
    }, {
      "city": "鹤壁市",
      "name": "淇县",
      "id": "410622000000"
    }, {
      "city": "鹤壁市",
      "name": "鹤壁经济技术开发区",
      "id": "410671000000"
    }],
    "410700000000": [{
      "city": "新乡市",
      "name": "市辖区",
      "id": "410701000000"
    }, {
      "city": "新乡市",
      "name": "红旗区",
      "id": "410702000000"
    }, {
      "city": "新乡市",
      "name": "卫滨区",
      "id": "410703000000"
    }, {
      "city": "新乡市",
      "name": "凤泉区",
      "id": "410704000000"
    }, {
      "city": "新乡市",
      "name": "牧野区",
      "id": "410711000000"
    }, {
      "city": "新乡市",
      "name": "新乡县",
      "id": "410721000000"
    }, {
      "city": "新乡市",
      "name": "获嘉县",
      "id": "410724000000"
    }, {
      "city": "新乡市",
      "name": "原阳县",
      "id": "410725000000"
    }, {
      "city": "新乡市",
      "name": "延津县",
      "id": "410726000000"
    }, {
      "city": "新乡市",
      "name": "封丘县",
      "id": "410727000000"
    }, {
      "city": "新乡市",
      "name": "长垣县",
      "id": "410728000000"
    }, {
      "city": "新乡市",
      "name": "新乡高新技术产业开发区",
      "id": "410771000000"
    }, {
      "city": "新乡市",
      "name": "新乡经济技术开发区",
      "id": "410772000000"
    }, {
      "city": "新乡市",
      "name": "新乡市平原城乡一体化示范区",
      "id": "410773000000"
    }, {
      "city": "新乡市",
      "name": "卫辉市",
      "id": "410781000000"
    }, {
      "city": "新乡市",
      "name": "辉县市",
      "id": "410782000000"
    }],
    "410800000000": [{
      "city": "焦作市",
      "name": "市辖区",
      "id": "410801000000"
    }, {
      "city": "焦作市",
      "name": "解放区",
      "id": "410802000000"
    }, {
      "city": "焦作市",
      "name": "中站区",
      "id": "410803000000"
    }, {
      "city": "焦作市",
      "name": "马村区",
      "id": "410804000000"
    }, {
      "city": "焦作市",
      "name": "山阳区",
      "id": "410811000000"
    }, {
      "city": "焦作市",
      "name": "修武县",
      "id": "410821000000"
    }, {
      "city": "焦作市",
      "name": "博爱县",
      "id": "410822000000"
    }, {
      "city": "焦作市",
      "name": "武陟县",
      "id": "410823000000"
    }, {
      "city": "焦作市",
      "name": "温县",
      "id": "410825000000"
    }, {
      "city": "焦作市",
      "name": "焦作城乡一体化示范区",
      "id": "410871000000"
    }, {
      "city": "焦作市",
      "name": "沁阳市",
      "id": "410882000000"
    }, {
      "city": "焦作市",
      "name": "孟州市",
      "id": "410883000000"
    }],
    "410900000000": [{
      "city": "濮阳市",
      "name": "市辖区",
      "id": "410901000000"
    }, {
      "city": "濮阳市",
      "name": "华龙区",
      "id": "410902000000"
    }, {
      "city": "濮阳市",
      "name": "清丰县",
      "id": "410922000000"
    }, {
      "city": "濮阳市",
      "name": "南乐县",
      "id": "410923000000"
    }, {
      "city": "濮阳市",
      "name": "范县",
      "id": "410926000000"
    }, {
      "city": "濮阳市",
      "name": "台前县",
      "id": "410927000000"
    }, {
      "city": "濮阳市",
      "name": "濮阳县",
      "id": "410928000000"
    }, {
      "city": "濮阳市",
      "name": "河南濮阳工业园区",
      "id": "410971000000"
    }, {
      "city": "濮阳市",
      "name": "濮阳经济技术开发区",
      "id": "410972000000"
    }],
    "411000000000": [{
      "city": "许昌市",
      "name": "市辖区",
      "id": "411001000000"
    }, {
      "city": "许昌市",
      "name": "魏都区",
      "id": "411002000000"
    }, {
      "city": "许昌市",
      "name": "建安区",
      "id": "411003000000"
    }, {
      "city": "许昌市",
      "name": "鄢陵县",
      "id": "411024000000"
    }, {
      "city": "许昌市",
      "name": "襄城县",
      "id": "411025000000"
    }, {
      "city": "许昌市",
      "name": "许昌经济技术开发区",
      "id": "411071000000"
    }, {
      "city": "许昌市",
      "name": "禹州市",
      "id": "411081000000"
    }, {
      "city": "许昌市",
      "name": "长葛市",
      "id": "411082000000"
    }],
    "411100000000": [{
      "city": "漯河市",
      "name": "市辖区",
      "id": "411101000000"
    }, {
      "city": "漯河市",
      "name": "源汇区",
      "id": "411102000000"
    }, {
      "city": "漯河市",
      "name": "郾城区",
      "id": "411103000000"
    }, {
      "city": "漯河市",
      "name": "召陵区",
      "id": "411104000000"
    }, {
      "city": "漯河市",
      "name": "舞阳县",
      "id": "411121000000"
    }, {
      "city": "漯河市",
      "name": "临颍县",
      "id": "411122000000"
    }, {
      "city": "漯河市",
      "name": "漯河经济技术开发区",
      "id": "411171000000"
    }],
    "411200000000": [{
      "city": "三门峡市",
      "name": "市辖区",
      "id": "411201000000"
    }, {
      "city": "三门峡市",
      "name": "湖滨区",
      "id": "411202000000"
    }, {
      "city": "三门峡市",
      "name": "陕州区",
      "id": "411203000000"
    }, {
      "city": "三门峡市",
      "name": "渑池县",
      "id": "411221000000"
    }, {
      "city": "三门峡市",
      "name": "卢氏县",
      "id": "411224000000"
    }, {
      "city": "三门峡市",
      "name": "河南三门峡经济开发区",
      "id": "411271000000"
    }, {
      "city": "三门峡市",
      "name": "义马市",
      "id": "411281000000"
    }, {
      "city": "三门峡市",
      "name": "灵宝市",
      "id": "411282000000"
    }],
    "411300000000": [{
      "city": "南阳市",
      "name": "市辖区",
      "id": "411301000000"
    }, {
      "city": "南阳市",
      "name": "宛城区",
      "id": "411302000000"
    }, {
      "city": "南阳市",
      "name": "卧龙区",
      "id": "411303000000"
    }, {
      "city": "南阳市",
      "name": "南召县",
      "id": "411321000000"
    }, {
      "city": "南阳市",
      "name": "方城县",
      "id": "411322000000"
    }, {
      "city": "南阳市",
      "name": "西峡县",
      "id": "411323000000"
    }, {
      "city": "南阳市",
      "name": "镇平县",
      "id": "411324000000"
    }, {
      "city": "南阳市",
      "name": "内乡县",
      "id": "411325000000"
    }, {
      "city": "南阳市",
      "name": "淅川县",
      "id": "411326000000"
    }, {
      "city": "南阳市",
      "name": "社旗县",
      "id": "411327000000"
    }, {
      "city": "南阳市",
      "name": "唐河县",
      "id": "411328000000"
    }, {
      "city": "南阳市",
      "name": "新野县",
      "id": "411329000000"
    }, {
      "city": "南阳市",
      "name": "桐柏县",
      "id": "411330000000"
    }, {
      "city": "南阳市",
      "name": "南阳高新技术产业开发区",
      "id": "411371000000"
    }, {
      "city": "南阳市",
      "name": "南阳市城乡一体化示范区",
      "id": "411372000000"
    }, {
      "city": "南阳市",
      "name": "邓州市",
      "id": "411381000000"
    }],
    "411400000000": [{
      "city": "商丘市",
      "name": "市辖区",
      "id": "411401000000"
    }, {
      "city": "商丘市",
      "name": "梁园区",
      "id": "411402000000"
    }, {
      "city": "商丘市",
      "name": "睢阳区",
      "id": "411403000000"
    }, {
      "city": "商丘市",
      "name": "民权县",
      "id": "411421000000"
    }, {
      "city": "商丘市",
      "name": "睢县",
      "id": "411422000000"
    }, {
      "city": "商丘市",
      "name": "宁陵县",
      "id": "411423000000"
    }, {
      "city": "商丘市",
      "name": "柘城县",
      "id": "411424000000"
    }, {
      "city": "商丘市",
      "name": "虞城县",
      "id": "411425000000"
    }, {
      "city": "商丘市",
      "name": "夏邑县",
      "id": "411426000000"
    }, {
      "city": "商丘市",
      "name": "豫东综合物流产业聚集区",
      "id": "411471000000"
    }, {
      "city": "商丘市",
      "name": "河南商丘经济开发区",
      "id": "411472000000"
    }, {
      "city": "商丘市",
      "name": "永城市",
      "id": "411481000000"
    }],
    "411500000000": [{
      "city": "信阳市",
      "name": "市辖区",
      "id": "411501000000"
    }, {
      "city": "信阳市",
      "name": "浉河区",
      "id": "411502000000"
    }, {
      "city": "信阳市",
      "name": "平桥区",
      "id": "411503000000"
    }, {
      "city": "信阳市",
      "name": "罗山县",
      "id": "411521000000"
    }, {
      "city": "信阳市",
      "name": "光山县",
      "id": "411522000000"
    }, {
      "city": "信阳市",
      "name": "新县",
      "id": "411523000000"
    }, {
      "city": "信阳市",
      "name": "商城县",
      "id": "411524000000"
    }, {
      "city": "信阳市",
      "name": "固始县",
      "id": "411525000000"
    }, {
      "city": "信阳市",
      "name": "潢川县",
      "id": "411526000000"
    }, {
      "city": "信阳市",
      "name": "淮滨县",
      "id": "411527000000"
    }, {
      "city": "信阳市",
      "name": "息县",
      "id": "411528000000"
    }, {
      "city": "信阳市",
      "name": "信阳高新技术产业开发区",
      "id": "411571000000"
    }],
    "411600000000": [{
      "city": "周口市",
      "name": "市辖区",
      "id": "411601000000"
    }, {
      "city": "周口市",
      "name": "川汇区",
      "id": "411602000000"
    }, {
      "city": "周口市",
      "name": "扶沟县",
      "id": "411621000000"
    }, {
      "city": "周口市",
      "name": "西华县",
      "id": "411622000000"
    }, {
      "city": "周口市",
      "name": "商水县",
      "id": "411623000000"
    }, {
      "city": "周口市",
      "name": "沈丘县",
      "id": "411624000000"
    }, {
      "city": "周口市",
      "name": "郸城县",
      "id": "411625000000"
    }, {
      "city": "周口市",
      "name": "淮阳县",
      "id": "411626000000"
    }, {
      "city": "周口市",
      "name": "太康县",
      "id": "411627000000"
    }, {
      "city": "周口市",
      "name": "鹿邑县",
      "id": "411628000000"
    }, {
      "city": "周口市",
      "name": "河南周口经济开发区",
      "id": "411671000000"
    }, {
      "city": "周口市",
      "name": "项城市",
      "id": "411681000000"
    }],
    "411700000000": [{
      "city": "驻马店市",
      "name": "市辖区",
      "id": "411701000000"
    }, {
      "city": "驻马店市",
      "name": "驿城区",
      "id": "411702000000"
    }, {
      "city": "驻马店市",
      "name": "西平县",
      "id": "411721000000"
    }, {
      "city": "驻马店市",
      "name": "上蔡县",
      "id": "411722000000"
    }, {
      "city": "驻马店市",
      "name": "平舆县",
      "id": "411723000000"
    }, {
      "city": "驻马店市",
      "name": "正阳县",
      "id": "411724000000"
    }, {
      "city": "驻马店市",
      "name": "确山县",
      "id": "411725000000"
    }, {
      "city": "驻马店市",
      "name": "泌阳县",
      "id": "411726000000"
    }, {
      "city": "驻马店市",
      "name": "汝南县",
      "id": "411727000000"
    }, {
      "city": "驻马店市",
      "name": "遂平县",
      "id": "411728000000"
    }, {
      "city": "驻马店市",
      "name": "新蔡县",
      "id": "411729000000"
    }, {
      "city": "驻马店市",
      "name": "河南驻马店经济开发区",
      "id": "411771000000"
    }],
    "419000000000": [{
      "city": "省直辖县级行政区划",
      "name": "济源市",
      "id": "419001000000"
    }],
    "420100000000": [{
      "city": "武汉市",
      "name": "市辖区",
      "id": "420101000000"
    }, {
      "city": "武汉市",
      "name": "江岸区",
      "id": "420102000000"
    }, {
      "city": "武汉市",
      "name": "江汉区",
      "id": "420103000000"
    }, {
      "city": "武汉市",
      "name": "硚口区",
      "id": "420104000000"
    }, {
      "city": "武汉市",
      "name": "汉阳区",
      "id": "420105000000"
    }, {
      "city": "武汉市",
      "name": "武昌区",
      "id": "420106000000"
    }, {
      "city": "武汉市",
      "name": "青山区",
      "id": "420107000000"
    }, {
      "city": "武汉市",
      "name": "洪山区",
      "id": "420111000000"
    }, {
      "city": "武汉市",
      "name": "东西湖区",
      "id": "420112000000"
    }, {
      "city": "武汉市",
      "name": "汉南区",
      "id": "420113000000"
    }, {
      "city": "武汉市",
      "name": "蔡甸区",
      "id": "420114000000"
    }, {
      "city": "武汉市",
      "name": "江夏区",
      "id": "420115000000"
    }, {
      "city": "武汉市",
      "name": "黄陂区",
      "id": "420116000000"
    }, {
      "city": "武汉市",
      "name": "新洲区",
      "id": "420117000000"
    }],
    "420200000000": [{
      "city": "黄石市",
      "name": "市辖区",
      "id": "420201000000"
    }, {
      "city": "黄石市",
      "name": "黄石港区",
      "id": "420202000000"
    }, {
      "city": "黄石市",
      "name": "西塞山区",
      "id": "420203000000"
    }, {
      "city": "黄石市",
      "name": "下陆区",
      "id": "420204000000"
    }, {
      "city": "黄石市",
      "name": "铁山区",
      "id": "420205000000"
    }, {
      "city": "黄石市",
      "name": "阳新县",
      "id": "420222000000"
    }, {
      "city": "黄石市",
      "name": "大冶市",
      "id": "420281000000"
    }],
    "420300000000": [{
      "city": "十堰市",
      "name": "市辖区",
      "id": "420301000000"
    }, {
      "city": "十堰市",
      "name": "茅箭区",
      "id": "420302000000"
    }, {
      "city": "十堰市",
      "name": "张湾区",
      "id": "420303000000"
    }, {
      "city": "十堰市",
      "name": "郧阳区",
      "id": "420304000000"
    }, {
      "city": "十堰市",
      "name": "郧西县",
      "id": "420322000000"
    }, {
      "city": "十堰市",
      "name": "竹山县",
      "id": "420323000000"
    }, {
      "city": "十堰市",
      "name": "竹溪县",
      "id": "420324000000"
    }, {
      "city": "十堰市",
      "name": "房县",
      "id": "420325000000"
    }, {
      "city": "十堰市",
      "name": "丹江口市",
      "id": "420381000000"
    }],
    "420500000000": [{
      "city": "宜昌市",
      "name": "市辖区",
      "id": "420501000000"
    }, {
      "city": "宜昌市",
      "name": "西陵区",
      "id": "420502000000"
    }, {
      "city": "宜昌市",
      "name": "伍家岗区",
      "id": "420503000000"
    }, {
      "city": "宜昌市",
      "name": "点军区",
      "id": "420504000000"
    }, {
      "city": "宜昌市",
      "name": "猇亭区",
      "id": "420505000000"
    }, {
      "city": "宜昌市",
      "name": "夷陵区",
      "id": "420506000000"
    }, {
      "city": "宜昌市",
      "name": "远安县",
      "id": "420525000000"
    }, {
      "city": "宜昌市",
      "name": "兴山县",
      "id": "420526000000"
    }, {
      "city": "宜昌市",
      "name": "秭归县",
      "id": "420527000000"
    }, {
      "city": "宜昌市",
      "name": "长阳土家族自治县",
      "id": "420528000000"
    }, {
      "city": "宜昌市",
      "name": "五峰土家族自治县",
      "id": "420529000000"
    }, {
      "city": "宜昌市",
      "name": "宜都市",
      "id": "420581000000"
    }, {
      "city": "宜昌市",
      "name": "当阳市",
      "id": "420582000000"
    }, {
      "city": "宜昌市",
      "name": "枝江市",
      "id": "420583000000"
    }],
    "420600000000": [{
      "city": "襄阳市",
      "name": "市辖区",
      "id": "420601000000"
    }, {
      "city": "襄阳市",
      "name": "襄城区",
      "id": "420602000000"
    }, {
      "city": "襄阳市",
      "name": "樊城区",
      "id": "420606000000"
    }, {
      "city": "襄阳市",
      "name": "襄州区",
      "id": "420607000000"
    }, {
      "city": "襄阳市",
      "name": "南漳县",
      "id": "420624000000"
    }, {
      "city": "襄阳市",
      "name": "谷城县",
      "id": "420625000000"
    }, {
      "city": "襄阳市",
      "name": "保康县",
      "id": "420626000000"
    }, {
      "city": "襄阳市",
      "name": "老河口市",
      "id": "420682000000"
    }, {
      "city": "襄阳市",
      "name": "枣阳市",
      "id": "420683000000"
    }, {
      "city": "襄阳市",
      "name": "宜城市",
      "id": "420684000000"
    }],
    "420700000000": [{
      "city": "鄂州市",
      "name": "市辖区",
      "id": "420701000000"
    }, {
      "city": "鄂州市",
      "name": "梁子湖区",
      "id": "420702000000"
    }, {
      "city": "鄂州市",
      "name": "华容区",
      "id": "420703000000"
    }, {
      "city": "鄂州市",
      "name": "鄂城区",
      "id": "420704000000"
    }],
    "420800000000": [{
      "city": "荆门市",
      "name": "市辖区",
      "id": "420801000000"
    }, {
      "city": "荆门市",
      "name": "东宝区",
      "id": "420802000000"
    }, {
      "city": "荆门市",
      "name": "掇刀区",
      "id": "420804000000"
    }, {
      "city": "荆门市",
      "name": "沙洋县",
      "id": "420822000000"
    }, {
      "city": "荆门市",
      "name": "钟祥市",
      "id": "420881000000"
    }, {
      "city": "荆门市",
      "name": "京山市",
      "id": "420882000000"
    }],
    "420900000000": [{
      "city": "孝感市",
      "name": "市辖区",
      "id": "420901000000"
    }, {
      "city": "孝感市",
      "name": "孝南区",
      "id": "420902000000"
    }, {
      "city": "孝感市",
      "name": "孝昌县",
      "id": "420921000000"
    }, {
      "city": "孝感市",
      "name": "大悟县",
      "id": "420922000000"
    }, {
      "city": "孝感市",
      "name": "云梦县",
      "id": "420923000000"
    }, {
      "city": "孝感市",
      "name": "应城市",
      "id": "420981000000"
    }, {
      "city": "孝感市",
      "name": "安陆市",
      "id": "420982000000"
    }, {
      "city": "孝感市",
      "name": "汉川市",
      "id": "420984000000"
    }],
    "421000000000": [{
      "city": "荆州市",
      "name": "市辖区",
      "id": "421001000000"
    }, {
      "city": "荆州市",
      "name": "沙市区",
      "id": "421002000000"
    }, {
      "city": "荆州市",
      "name": "荆州区",
      "id": "421003000000"
    }, {
      "city": "荆州市",
      "name": "公安县",
      "id": "421022000000"
    }, {
      "city": "荆州市",
      "name": "监利县",
      "id": "421023000000"
    }, {
      "city": "荆州市",
      "name": "江陵县",
      "id": "421024000000"
    }, {
      "city": "荆州市",
      "name": "荆州经济技术开发区",
      "id": "421071000000"
    }, {
      "city": "荆州市",
      "name": "石首市",
      "id": "421081000000"
    }, {
      "city": "荆州市",
      "name": "洪湖市",
      "id": "421083000000"
    }, {
      "city": "荆州市",
      "name": "松滋市",
      "id": "421087000000"
    }],
    "421100000000": [{
      "city": "黄冈市",
      "name": "市辖区",
      "id": "421101000000"
    }, {
      "city": "黄冈市",
      "name": "黄州区",
      "id": "421102000000"
    }, {
      "city": "黄冈市",
      "name": "团风县",
      "id": "421121000000"
    }, {
      "city": "黄冈市",
      "name": "红安县",
      "id": "421122000000"
    }, {
      "city": "黄冈市",
      "name": "罗田县",
      "id": "421123000000"
    }, {
      "city": "黄冈市",
      "name": "英山县",
      "id": "421124000000"
    }, {
      "city": "黄冈市",
      "name": "浠水县",
      "id": "421125000000"
    }, {
      "city": "黄冈市",
      "name": "蕲春县",
      "id": "421126000000"
    }, {
      "city": "黄冈市",
      "name": "黄梅县",
      "id": "421127000000"
    }, {
      "city": "黄冈市",
      "name": "龙感湖管理区",
      "id": "421171000000"
    }, {
      "city": "黄冈市",
      "name": "麻城市",
      "id": "421181000000"
    }, {
      "city": "黄冈市",
      "name": "武穴市",
      "id": "421182000000"
    }],
    "421200000000": [{
      "city": "咸宁市",
      "name": "市辖区",
      "id": "421201000000"
    }, {
      "city": "咸宁市",
      "name": "咸安区",
      "id": "421202000000"
    }, {
      "city": "咸宁市",
      "name": "嘉鱼县",
      "id": "421221000000"
    }, {
      "city": "咸宁市",
      "name": "通城县",
      "id": "421222000000"
    }, {
      "city": "咸宁市",
      "name": "崇阳县",
      "id": "421223000000"
    }, {
      "city": "咸宁市",
      "name": "通山县",
      "id": "421224000000"
    }, {
      "city": "咸宁市",
      "name": "赤壁市",
      "id": "421281000000"
    }],
    "421300000000": [{
      "city": "随州市",
      "name": "市辖区",
      "id": "421301000000"
    }, {
      "city": "随州市",
      "name": "曾都区",
      "id": "421303000000"
    }, {
      "city": "随州市",
      "name": "随县",
      "id": "421321000000"
    }, {
      "city": "随州市",
      "name": "广水市",
      "id": "421381000000"
    }],
    "422800000000": [{
      "city": "恩施土家族苗族自治州",
      "name": "恩施市",
      "id": "422801000000"
    }, {
      "city": "恩施土家族苗族自治州",
      "name": "利川市",
      "id": "422802000000"
    }, {
      "city": "恩施土家族苗族自治州",
      "name": "建始县",
      "id": "422822000000"
    }, {
      "city": "恩施土家族苗族自治州",
      "name": "巴东县",
      "id": "422823000000"
    }, {
      "city": "恩施土家族苗族自治州",
      "name": "宣恩县",
      "id": "422825000000"
    }, {
      "city": "恩施土家族苗族自治州",
      "name": "咸丰县",
      "id": "422826000000"
    }, {
      "city": "恩施土家族苗族自治州",
      "name": "来凤县",
      "id": "422827000000"
    }, {
      "city": "恩施土家族苗族自治州",
      "name": "鹤峰县",
      "id": "422828000000"
    }],
    "429000000000": [{
      "city": "省直辖县级行政区划",
      "name": "仙桃市",
      "id": "429004000000"
    }, {
      "city": "省直辖县级行政区划",
      "name": "潜江市",
      "id": "429005000000"
    }, {
      "city": "省直辖县级行政区划",
      "name": "天门市",
      "id": "429006000000"
    }, {
      "city": "省直辖县级行政区划",
      "name": "神农架林区",
      "id": "429021000000"
    }],
    "430100000000": [{
      "city": "长沙市",
      "name": "市辖区",
      "id": "430101000000"
    }, {
      "city": "长沙市",
      "name": "芙蓉区",
      "id": "430102000000"
    }, {
      "city": "长沙市",
      "name": "天心区",
      "id": "430103000000"
    }, {
      "city": "长沙市",
      "name": "岳麓区",
      "id": "430104000000"
    }, {
      "city": "长沙市",
      "name": "开福区",
      "id": "430105000000"
    }, {
      "city": "长沙市",
      "name": "雨花区",
      "id": "430111000000"
    }, {
      "city": "长沙市",
      "name": "望城区",
      "id": "430112000000"
    }, {
      "city": "长沙市",
      "name": "长沙县",
      "id": "430121000000"
    }, {
      "city": "长沙市",
      "name": "浏阳市",
      "id": "430181000000"
    }, {
      "city": "长沙市",
      "name": "宁乡市",
      "id": "430182000000"
    }],
    "430200000000": [{
      "city": "株洲市",
      "name": "市辖区",
      "id": "430201000000"
    }, {
      "city": "株洲市",
      "name": "荷塘区",
      "id": "430202000000"
    }, {
      "city": "株洲市",
      "name": "芦淞区",
      "id": "430203000000"
    }, {
      "city": "株洲市",
      "name": "石峰区",
      "id": "430204000000"
    }, {
      "city": "株洲市",
      "name": "天元区",
      "id": "430211000000"
    }, {
      "city": "株洲市",
      "name": "渌口区",
      "id": "430212000000"
    }, {
      "city": "株洲市",
      "name": "攸县",
      "id": "430223000000"
    }, {
      "city": "株洲市",
      "name": "茶陵县",
      "id": "430224000000"
    }, {
      "city": "株洲市",
      "name": "炎陵县",
      "id": "430225000000"
    }, {
      "city": "株洲市",
      "name": "云龙示范区",
      "id": "430271000000"
    }, {
      "city": "株洲市",
      "name": "醴陵市",
      "id": "430281000000"
    }],
    "430300000000": [{
      "city": "湘潭市",
      "name": "市辖区",
      "id": "430301000000"
    }, {
      "city": "湘潭市",
      "name": "雨湖区",
      "id": "430302000000"
    }, {
      "city": "湘潭市",
      "name": "岳塘区",
      "id": "430304000000"
    }, {
      "city": "湘潭市",
      "name": "湘潭县",
      "id": "430321000000"
    }, {
      "city": "湘潭市",
      "name": "湖南湘潭高新技术产业园区",
      "id": "430371000000"
    }, {
      "city": "湘潭市",
      "name": "湘潭昭山示范区",
      "id": "430372000000"
    }, {
      "city": "湘潭市",
      "name": "湘潭九华示范区",
      "id": "430373000000"
    }, {
      "city": "湘潭市",
      "name": "湘乡市",
      "id": "430381000000"
    }, {
      "city": "湘潭市",
      "name": "韶山市",
      "id": "430382000000"
    }],
    "430400000000": [{
      "city": "衡阳市",
      "name": "市辖区",
      "id": "430401000000"
    }, {
      "city": "衡阳市",
      "name": "珠晖区",
      "id": "430405000000"
    }, {
      "city": "衡阳市",
      "name": "雁峰区",
      "id": "430406000000"
    }, {
      "city": "衡阳市",
      "name": "石鼓区",
      "id": "430407000000"
    }, {
      "city": "衡阳市",
      "name": "蒸湘区",
      "id": "430408000000"
    }, {
      "city": "衡阳市",
      "name": "南岳区",
      "id": "430412000000"
    }, {
      "city": "衡阳市",
      "name": "衡阳县",
      "id": "430421000000"
    }, {
      "city": "衡阳市",
      "name": "衡南县",
      "id": "430422000000"
    }, {
      "city": "衡阳市",
      "name": "衡山县",
      "id": "430423000000"
    }, {
      "city": "衡阳市",
      "name": "衡东县",
      "id": "430424000000"
    }, {
      "city": "衡阳市",
      "name": "祁东县",
      "id": "430426000000"
    }, {
      "city": "衡阳市",
      "name": "衡阳综合保税区",
      "id": "430471000000"
    }, {
      "city": "衡阳市",
      "name": "湖南衡阳高新技术产业园区",
      "id": "430472000000"
    }, {
      "city": "衡阳市",
      "name": "湖南衡阳松木经济开发区",
      "id": "430473000000"
    }, {
      "city": "衡阳市",
      "name": "耒阳市",
      "id": "430481000000"
    }, {
      "city": "衡阳市",
      "name": "常宁市",
      "id": "430482000000"
    }],
    "430500000000": [{
      "city": "邵阳市",
      "name": "市辖区",
      "id": "430501000000"
    }, {
      "city": "邵阳市",
      "name": "双清区",
      "id": "430502000000"
    }, {
      "city": "邵阳市",
      "name": "大祥区",
      "id": "430503000000"
    }, {
      "city": "邵阳市",
      "name": "北塔区",
      "id": "430511000000"
    }, {
      "city": "邵阳市",
      "name": "邵东县",
      "id": "430521000000"
    }, {
      "city": "邵阳市",
      "name": "新邵县",
      "id": "430522000000"
    }, {
      "city": "邵阳市",
      "name": "邵阳县",
      "id": "430523000000"
    }, {
      "city": "邵阳市",
      "name": "隆回县",
      "id": "430524000000"
    }, {
      "city": "邵阳市",
      "name": "洞口县",
      "id": "430525000000"
    }, {
      "city": "邵阳市",
      "name": "绥宁县",
      "id": "430527000000"
    }, {
      "city": "邵阳市",
      "name": "新宁县",
      "id": "430528000000"
    }, {
      "city": "邵阳市",
      "name": "城步苗族自治县",
      "id": "430529000000"
    }, {
      "city": "邵阳市",
      "name": "武冈市",
      "id": "430581000000"
    }],
    "430600000000": [{
      "city": "岳阳市",
      "name": "市辖区",
      "id": "430601000000"
    }, {
      "city": "岳阳市",
      "name": "岳阳楼区",
      "id": "430602000000"
    }, {
      "city": "岳阳市",
      "name": "云溪区",
      "id": "430603000000"
    }, {
      "city": "岳阳市",
      "name": "君山区",
      "id": "430611000000"
    }, {
      "city": "岳阳市",
      "name": "岳阳县",
      "id": "430621000000"
    }, {
      "city": "岳阳市",
      "name": "华容县",
      "id": "430623000000"
    }, {
      "city": "岳阳市",
      "name": "湘阴县",
      "id": "430624000000"
    }, {
      "city": "岳阳市",
      "name": "平江县",
      "id": "430626000000"
    }, {
      "city": "岳阳市",
      "name": "岳阳市屈原管理区",
      "id": "430671000000"
    }, {
      "city": "岳阳市",
      "name": "汨罗市",
      "id": "430681000000"
    }, {
      "city": "岳阳市",
      "name": "临湘市",
      "id": "430682000000"
    }],
    "430700000000": [{
      "city": "常德市",
      "name": "市辖区",
      "id": "430701000000"
    }, {
      "city": "常德市",
      "name": "武陵区",
      "id": "430702000000"
    }, {
      "city": "常德市",
      "name": "鼎城区",
      "id": "430703000000"
    }, {
      "city": "常德市",
      "name": "安乡县",
      "id": "430721000000"
    }, {
      "city": "常德市",
      "name": "汉寿县",
      "id": "430722000000"
    }, {
      "city": "常德市",
      "name": "澧县",
      "id": "430723000000"
    }, {
      "city": "常德市",
      "name": "临澧县",
      "id": "430724000000"
    }, {
      "city": "常德市",
      "name": "桃源县",
      "id": "430725000000"
    }, {
      "city": "常德市",
      "name": "石门县",
      "id": "430726000000"
    }, {
      "city": "常德市",
      "name": "常德市西洞庭管理区",
      "id": "430771000000"
    }, {
      "city": "常德市",
      "name": "津市市",
      "id": "430781000000"
    }],
    "430800000000": [{
      "city": "张家界市",
      "name": "市辖区",
      "id": "430801000000"
    }, {
      "city": "张家界市",
      "name": "永定区",
      "id": "430802000000"
    }, {
      "city": "张家界市",
      "name": "武陵源区",
      "id": "430811000000"
    }, {
      "city": "张家界市",
      "name": "慈利县",
      "id": "430821000000"
    }, {
      "city": "张家界市",
      "name": "桑植县",
      "id": "430822000000"
    }],
    "430900000000": [{
      "city": "益阳市",
      "name": "市辖区",
      "id": "430901000000"
    }, {
      "city": "益阳市",
      "name": "资阳区",
      "id": "430902000000"
    }, {
      "city": "益阳市",
      "name": "赫山区",
      "id": "430903000000"
    }, {
      "city": "益阳市",
      "name": "南县",
      "id": "430921000000"
    }, {
      "city": "益阳市",
      "name": "桃江县",
      "id": "430922000000"
    }, {
      "city": "益阳市",
      "name": "安化县",
      "id": "430923000000"
    }, {
      "city": "益阳市",
      "name": "益阳市大通湖管理区",
      "id": "430971000000"
    }, {
      "city": "益阳市",
      "name": "湖南益阳高新技术产业园区",
      "id": "430972000000"
    }, {
      "city": "益阳市",
      "name": "沅江市",
      "id": "430981000000"
    }],
    "431000000000": [{
      "city": "郴州市",
      "name": "市辖区",
      "id": "431001000000"
    }, {
      "city": "郴州市",
      "name": "北湖区",
      "id": "431002000000"
    }, {
      "city": "郴州市",
      "name": "苏仙区",
      "id": "431003000000"
    }, {
      "city": "郴州市",
      "name": "桂阳县",
      "id": "431021000000"
    }, {
      "city": "郴州市",
      "name": "宜章县",
      "id": "431022000000"
    }, {
      "city": "郴州市",
      "name": "永兴县",
      "id": "431023000000"
    }, {
      "city": "郴州市",
      "name": "嘉禾县",
      "id": "431024000000"
    }, {
      "city": "郴州市",
      "name": "临武县",
      "id": "431025000000"
    }, {
      "city": "郴州市",
      "name": "汝城县",
      "id": "431026000000"
    }, {
      "city": "郴州市",
      "name": "桂东县",
      "id": "431027000000"
    }, {
      "city": "郴州市",
      "name": "安仁县",
      "id": "431028000000"
    }, {
      "city": "郴州市",
      "name": "资兴市",
      "id": "431081000000"
    }],
    "431100000000": [{
      "city": "永州市",
      "name": "市辖区",
      "id": "431101000000"
    }, {
      "city": "永州市",
      "name": "零陵区",
      "id": "431102000000"
    }, {
      "city": "永州市",
      "name": "冷水滩区",
      "id": "431103000000"
    }, {
      "city": "永州市",
      "name": "祁阳县",
      "id": "431121000000"
    }, {
      "city": "永州市",
      "name": "东安县",
      "id": "431122000000"
    }, {
      "city": "永州市",
      "name": "双牌县",
      "id": "431123000000"
    }, {
      "city": "永州市",
      "name": "道县",
      "id": "431124000000"
    }, {
      "city": "永州市",
      "name": "江永县",
      "id": "431125000000"
    }, {
      "city": "永州市",
      "name": "宁远县",
      "id": "431126000000"
    }, {
      "city": "永州市",
      "name": "蓝山县",
      "id": "431127000000"
    }, {
      "city": "永州市",
      "name": "新田县",
      "id": "431128000000"
    }, {
      "city": "永州市",
      "name": "江华瑶族自治县",
      "id": "431129000000"
    }, {
      "city": "永州市",
      "name": "永州经济技术开发区",
      "id": "431171000000"
    }, {
      "city": "永州市",
      "name": "永州市金洞管理区",
      "id": "431172000000"
    }, {
      "city": "永州市",
      "name": "永州市回龙圩管理区",
      "id": "431173000000"
    }],
    "431200000000": [{
      "city": "怀化市",
      "name": "市辖区",
      "id": "431201000000"
    }, {
      "city": "怀化市",
      "name": "鹤城区",
      "id": "431202000000"
    }, {
      "city": "怀化市",
      "name": "中方县",
      "id": "431221000000"
    }, {
      "city": "怀化市",
      "name": "沅陵县",
      "id": "431222000000"
    }, {
      "city": "怀化市",
      "name": "辰溪县",
      "id": "431223000000"
    }, {
      "city": "怀化市",
      "name": "溆浦县",
      "id": "431224000000"
    }, {
      "city": "怀化市",
      "name": "会同县",
      "id": "431225000000"
    }, {
      "city": "怀化市",
      "name": "麻阳苗族自治县",
      "id": "431226000000"
    }, {
      "city": "怀化市",
      "name": "新晃侗族自治县",
      "id": "431227000000"
    }, {
      "city": "怀化市",
      "name": "芷江侗族自治县",
      "id": "431228000000"
    }, {
      "city": "怀化市",
      "name": "靖州苗族侗族自治县",
      "id": "431229000000"
    }, {
      "city": "怀化市",
      "name": "通道侗族自治县",
      "id": "431230000000"
    }, {
      "city": "怀化市",
      "name": "怀化市洪江管理区",
      "id": "431271000000"
    }, {
      "city": "怀化市",
      "name": "洪江市",
      "id": "431281000000"
    }],
    "431300000000": [{
      "city": "娄底市",
      "name": "市辖区",
      "id": "431301000000"
    }, {
      "city": "娄底市",
      "name": "娄星区",
      "id": "431302000000"
    }, {
      "city": "娄底市",
      "name": "双峰县",
      "id": "431321000000"
    }, {
      "city": "娄底市",
      "name": "新化县",
      "id": "431322000000"
    }, {
      "city": "娄底市",
      "name": "冷水江市",
      "id": "431381000000"
    }, {
      "city": "娄底市",
      "name": "涟源市",
      "id": "431382000000"
    }],
    "433100000000": [{
      "city": "湘西土家族苗族自治州",
      "name": "吉首市",
      "id": "433101000000"
    }, {
      "city": "湘西土家族苗族自治州",
      "name": "泸溪县",
      "id": "433122000000"
    }, {
      "city": "湘西土家族苗族自治州",
      "name": "凤凰县",
      "id": "433123000000"
    }, {
      "city": "湘西土家族苗族自治州",
      "name": "花垣县",
      "id": "433124000000"
    }, {
      "city": "湘西土家族苗族自治州",
      "name": "保靖县",
      "id": "433125000000"
    }, {
      "city": "湘西土家族苗族自治州",
      "name": "古丈县",
      "id": "433126000000"
    }, {
      "city": "湘西土家族苗族自治州",
      "name": "永顺县",
      "id": "433127000000"
    }, {
      "city": "湘西土家族苗族自治州",
      "name": "龙山县",
      "id": "433130000000"
    }, {
      "city": "湘西土家族苗族自治州",
      "name": "湖南吉首经济开发区",
      "id": "433172000000"
    }, {
      "city": "湘西土家族苗族自治州",
      "name": "湖南永顺经济开发区",
      "id": "433173000000"
    }],
    "440100000000": [{
      "city": "广州市",
      "name": "市辖区",
      "id": "440101000000"
    }, {
      "city": "广州市",
      "name": "荔湾区",
      "id": "440103000000"
    }, {
      "city": "广州市",
      "name": "越秀区",
      "id": "440104000000"
    }, {
      "city": "广州市",
      "name": "海珠区",
      "id": "440105000000"
    }, {
      "city": "广州市",
      "name": "天河区",
      "id": "440106000000"
    }, {
      "city": "广州市",
      "name": "白云区",
      "id": "440111000000"
    }, {
      "city": "广州市",
      "name": "黄埔区",
      "id": "440112000000"
    }, {
      "city": "广州市",
      "name": "番禺区",
      "id": "440113000000"
    }, {
      "city": "广州市",
      "name": "花都区",
      "id": "440114000000"
    }, {
      "city": "广州市",
      "name": "南沙区",
      "id": "440115000000"
    }, {
      "city": "广州市",
      "name": "从化区",
      "id": "440117000000"
    }, {
      "city": "广州市",
      "name": "增城区",
      "id": "440118000000"
    }],
    "440200000000": [{
      "city": "韶关市",
      "name": "市辖区",
      "id": "440201000000"
    }, {
      "city": "韶关市",
      "name": "武江区",
      "id": "440203000000"
    }, {
      "city": "韶关市",
      "name": "浈江区",
      "id": "440204000000"
    }, {
      "city": "韶关市",
      "name": "曲江区",
      "id": "440205000000"
    }, {
      "city": "韶关市",
      "name": "始兴县",
      "id": "440222000000"
    }, {
      "city": "韶关市",
      "name": "仁化县",
      "id": "440224000000"
    }, {
      "city": "韶关市",
      "name": "翁源县",
      "id": "440229000000"
    }, {
      "city": "韶关市",
      "name": "乳源瑶族自治县",
      "id": "440232000000"
    }, {
      "city": "韶关市",
      "name": "新丰县",
      "id": "440233000000"
    }, {
      "city": "韶关市",
      "name": "乐昌市",
      "id": "440281000000"
    }, {
      "city": "韶关市",
      "name": "南雄市",
      "id": "440282000000"
    }],
    "440300000000": [{
      "city": "深圳市",
      "name": "市辖区",
      "id": "440301000000"
    }, {
      "city": "深圳市",
      "name": "罗湖区",
      "id": "440303000000"
    }, {
      "city": "深圳市",
      "name": "福田区",
      "id": "440304000000"
    }, {
      "city": "深圳市",
      "name": "南山区",
      "id": "440305000000"
    }, {
      "city": "深圳市",
      "name": "宝安区",
      "id": "440306000000"
    }, {
      "city": "深圳市",
      "name": "龙岗区",
      "id": "440307000000"
    }, {
      "city": "深圳市",
      "name": "盐田区",
      "id": "440308000000"
    }, {
      "city": "深圳市",
      "name": "龙华区",
      "id": "440309000000"
    }, {
      "city": "深圳市",
      "name": "坪山区",
      "id": "440310000000"
    }, {
      "city": "深圳市",
      "name": "光明区",
      "id": "440311000000"
    }],
    "440400000000": [{
      "city": "珠海市",
      "name": "市辖区",
      "id": "440401000000"
    }, {
      "city": "珠海市",
      "name": "香洲区",
      "id": "440402000000"
    }, {
      "city": "珠海市",
      "name": "斗门区",
      "id": "440403000000"
    }, {
      "city": "珠海市",
      "name": "金湾区",
      "id": "440404000000"
    }],
    "440500000000": [{
      "city": "汕头市",
      "name": "市辖区",
      "id": "440501000000"
    }, {
      "city": "汕头市",
      "name": "龙湖区",
      "id": "440507000000"
    }, {
      "city": "汕头市",
      "name": "金平区",
      "id": "440511000000"
    }, {
      "city": "汕头市",
      "name": "濠江区",
      "id": "440512000000"
    }, {
      "city": "汕头市",
      "name": "潮阳区",
      "id": "440513000000"
    }, {
      "city": "汕头市",
      "name": "潮南区",
      "id": "440514000000"
    }, {
      "city": "汕头市",
      "name": "澄海区",
      "id": "440515000000"
    }, {
      "city": "汕头市",
      "name": "南澳县",
      "id": "440523000000"
    }],
    "440600000000": [{
      "city": "佛山市",
      "name": "市辖区",
      "id": "440601000000"
    }, {
      "city": "佛山市",
      "name": "禅城区",
      "id": "440604000000"
    }, {
      "city": "佛山市",
      "name": "南海区",
      "id": "440605000000"
    }, {
      "city": "佛山市",
      "name": "顺德区",
      "id": "440606000000"
    }, {
      "city": "佛山市",
      "name": "三水区",
      "id": "440607000000"
    }, {
      "city": "佛山市",
      "name": "高明区",
      "id": "440608000000"
    }],
    "440700000000": [{
      "city": "江门市",
      "name": "市辖区",
      "id": "440701000000"
    }, {
      "city": "江门市",
      "name": "蓬江区",
      "id": "440703000000"
    }, {
      "city": "江门市",
      "name": "江海区",
      "id": "440704000000"
    }, {
      "city": "江门市",
      "name": "新会区",
      "id": "440705000000"
    }, {
      "city": "江门市",
      "name": "台山市",
      "id": "440781000000"
    }, {
      "city": "江门市",
      "name": "开平市",
      "id": "440783000000"
    }, {
      "city": "江门市",
      "name": "鹤山市",
      "id": "440784000000"
    }, {
      "city": "江门市",
      "name": "恩平市",
      "id": "440785000000"
    }],
    "440800000000": [{
      "city": "湛江市",
      "name": "市辖区",
      "id": "440801000000"
    }, {
      "city": "湛江市",
      "name": "赤坎区",
      "id": "440802000000"
    }, {
      "city": "湛江市",
      "name": "霞山区",
      "id": "440803000000"
    }, {
      "city": "湛江市",
      "name": "坡头区",
      "id": "440804000000"
    }, {
      "city": "湛江市",
      "name": "麻章区",
      "id": "440811000000"
    }, {
      "city": "湛江市",
      "name": "遂溪县",
      "id": "440823000000"
    }, {
      "city": "湛江市",
      "name": "徐闻县",
      "id": "440825000000"
    }, {
      "city": "湛江市",
      "name": "廉江市",
      "id": "440881000000"
    }, {
      "city": "湛江市",
      "name": "雷州市",
      "id": "440882000000"
    }, {
      "city": "湛江市",
      "name": "吴川市",
      "id": "440883000000"
    }],
    "440900000000": [{
      "city": "茂名市",
      "name": "市辖区",
      "id": "440901000000"
    }, {
      "city": "茂名市",
      "name": "茂南区",
      "id": "440902000000"
    }, {
      "city": "茂名市",
      "name": "电白区",
      "id": "440904000000"
    }, {
      "city": "茂名市",
      "name": "高州市",
      "id": "440981000000"
    }, {
      "city": "茂名市",
      "name": "化州市",
      "id": "440982000000"
    }, {
      "city": "茂名市",
      "name": "信宜市",
      "id": "440983000000"
    }],
    "441200000000": [{
      "city": "肇庆市",
      "name": "市辖区",
      "id": "441201000000"
    }, {
      "city": "肇庆市",
      "name": "端州区",
      "id": "441202000000"
    }, {
      "city": "肇庆市",
      "name": "鼎湖区",
      "id": "441203000000"
    }, {
      "city": "肇庆市",
      "name": "高要区",
      "id": "441204000000"
    }, {
      "city": "肇庆市",
      "name": "广宁县",
      "id": "441223000000"
    }, {
      "city": "肇庆市",
      "name": "怀集县",
      "id": "441224000000"
    }, {
      "city": "肇庆市",
      "name": "封开县",
      "id": "441225000000"
    }, {
      "city": "肇庆市",
      "name": "德庆县",
      "id": "441226000000"
    }, {
      "city": "肇庆市",
      "name": "四会市",
      "id": "441284000000"
    }],
    "441300000000": [{
      "city": "惠州市",
      "name": "市辖区",
      "id": "441301000000"
    }, {
      "city": "惠州市",
      "name": "惠城区",
      "id": "441302000000"
    }, {
      "city": "惠州市",
      "name": "惠阳区",
      "id": "441303000000"
    }, {
      "city": "惠州市",
      "name": "博罗县",
      "id": "441322000000"
    }, {
      "city": "惠州市",
      "name": "惠东县",
      "id": "441323000000"
    }, {
      "city": "惠州市",
      "name": "龙门县",
      "id": "441324000000"
    }],
    "441400000000": [{
      "city": "梅州市",
      "name": "市辖区",
      "id": "441401000000"
    }, {
      "city": "梅州市",
      "name": "梅江区",
      "id": "441402000000"
    }, {
      "city": "梅州市",
      "name": "梅县区",
      "id": "441403000000"
    }, {
      "city": "梅州市",
      "name": "大埔县",
      "id": "441422000000"
    }, {
      "city": "梅州市",
      "name": "丰顺县",
      "id": "441423000000"
    }, {
      "city": "梅州市",
      "name": "五华县",
      "id": "441424000000"
    }, {
      "city": "梅州市",
      "name": "平远县",
      "id": "441426000000"
    }, {
      "city": "梅州市",
      "name": "蕉岭县",
      "id": "441427000000"
    }, {
      "city": "梅州市",
      "name": "兴宁市",
      "id": "441481000000"
    }],
    "441500000000": [{
      "city": "汕尾市",
      "name": "市辖区",
      "id": "441501000000"
    }, {
      "city": "汕尾市",
      "name": "城区",
      "id": "441502000000"
    }, {
      "city": "汕尾市",
      "name": "海丰县",
      "id": "441521000000"
    }, {
      "city": "汕尾市",
      "name": "陆河县",
      "id": "441523000000"
    }, {
      "city": "汕尾市",
      "name": "陆丰市",
      "id": "441581000000"
    }],
    "441600000000": [{
      "city": "河源市",
      "name": "市辖区",
      "id": "441601000000"
    }, {
      "city": "河源市",
      "name": "源城区",
      "id": "441602000000"
    }, {
      "city": "河源市",
      "name": "紫金县",
      "id": "441621000000"
    }, {
      "city": "河源市",
      "name": "龙川县",
      "id": "441622000000"
    }, {
      "city": "河源市",
      "name": "连平县",
      "id": "441623000000"
    }, {
      "city": "河源市",
      "name": "和平县",
      "id": "441624000000"
    }, {
      "city": "河源市",
      "name": "东源县",
      "id": "441625000000"
    }],
    "441700000000": [{
      "city": "阳江市",
      "name": "市辖区",
      "id": "441701000000"
    }, {
      "city": "阳江市",
      "name": "江城区",
      "id": "441702000000"
    }, {
      "city": "阳江市",
      "name": "阳东区",
      "id": "441704000000"
    }, {
      "city": "阳江市",
      "name": "阳西县",
      "id": "441721000000"
    }, {
      "city": "阳江市",
      "name": "阳春市",
      "id": "441781000000"
    }],
    "441800000000": [{
      "city": "清远市",
      "name": "市辖区",
      "id": "441801000000"
    }, {
      "city": "清远市",
      "name": "清城区",
      "id": "441802000000"
    }, {
      "city": "清远市",
      "name": "清新区",
      "id": "441803000000"
    }, {
      "city": "清远市",
      "name": "佛冈县",
      "id": "441821000000"
    }, {
      "city": "清远市",
      "name": "阳山县",
      "id": "441823000000"
    }, {
      "city": "清远市",
      "name": "连山壮族瑶族自治县",
      "id": "441825000000"
    }, {
      "city": "清远市",
      "name": "连南瑶族自治县",
      "id": "441826000000"
    }, {
      "city": "清远市",
      "name": "英德市",
      "id": "441881000000"
    }, {
      "city": "清远市",
      "name": "连州市",
      "id": "441882000000"
    }],
    "445100000000": [{
      "city": "潮州市",
      "name": "市辖区",
      "id": "445101000000"
    }, {
      "city": "潮州市",
      "name": "湘桥区",
      "id": "445102000000"
    }, {
      "city": "潮州市",
      "name": "潮安区",
      "id": "445103000000"
    }, {
      "city": "潮州市",
      "name": "饶平县",
      "id": "445122000000"
    }],
    "445200000000": [{
      "city": "揭阳市",
      "name": "市辖区",
      "id": "445201000000"
    }, {
      "city": "揭阳市",
      "name": "榕城区",
      "id": "445202000000"
    }, {
      "city": "揭阳市",
      "name": "揭东区",
      "id": "445203000000"
    }, {
      "city": "揭阳市",
      "name": "揭西县",
      "id": "445222000000"
    }, {
      "city": "揭阳市",
      "name": "惠来县",
      "id": "445224000000"
    }, {
      "city": "揭阳市",
      "name": "普宁市",
      "id": "445281000000"
    }],
    "445300000000": [{
      "city": "云浮市",
      "name": "市辖区",
      "id": "445301000000"
    }, {
      "city": "云浮市",
      "name": "云城区",
      "id": "445302000000"
    }, {
      "city": "云浮市",
      "name": "云安区",
      "id": "445303000000"
    }, {
      "city": "云浮市",
      "name": "新兴县",
      "id": "445321000000"
    }, {
      "city": "云浮市",
      "name": "郁南县",
      "id": "445322000000"
    }, {
      "city": "云浮市",
      "name": "罗定市",
      "id": "445381000000"
    }],
    "450100000000": [{
      "city": "南宁市",
      "name": "市辖区",
      "id": "450101000000"
    }, {
      "city": "南宁市",
      "name": "兴宁区",
      "id": "450102000000"
    }, {
      "city": "南宁市",
      "name": "青秀区",
      "id": "450103000000"
    }, {
      "city": "南宁市",
      "name": "江南区",
      "id": "450105000000"
    }, {
      "city": "南宁市",
      "name": "西乡塘区",
      "id": "450107000000"
    }, {
      "city": "南宁市",
      "name": "良庆区",
      "id": "450108000000"
    }, {
      "city": "南宁市",
      "name": "邕宁区",
      "id": "450109000000"
    }, {
      "city": "南宁市",
      "name": "武鸣区",
      "id": "450110000000"
    }, {
      "city": "南宁市",
      "name": "隆安县",
      "id": "450123000000"
    }, {
      "city": "南宁市",
      "name": "马山县",
      "id": "450124000000"
    }, {
      "city": "南宁市",
      "name": "上林县",
      "id": "450125000000"
    }, {
      "city": "南宁市",
      "name": "宾阳县",
      "id": "450126000000"
    }, {
      "city": "南宁市",
      "name": "横县",
      "id": "450127000000"
    }],
    "450200000000": [{
      "city": "柳州市",
      "name": "市辖区",
      "id": "450201000000"
    }, {
      "city": "柳州市",
      "name": "城中区",
      "id": "450202000000"
    }, {
      "city": "柳州市",
      "name": "鱼峰区",
      "id": "450203000000"
    }, {
      "city": "柳州市",
      "name": "柳南区",
      "id": "450204000000"
    }, {
      "city": "柳州市",
      "name": "柳北区",
      "id": "450205000000"
    }, {
      "city": "柳州市",
      "name": "柳江区",
      "id": "450206000000"
    }, {
      "city": "柳州市",
      "name": "柳城县",
      "id": "450222000000"
    }, {
      "city": "柳州市",
      "name": "鹿寨县",
      "id": "450223000000"
    }, {
      "city": "柳州市",
      "name": "融安县",
      "id": "450224000000"
    }, {
      "city": "柳州市",
      "name": "融水苗族自治县",
      "id": "450225000000"
    }, {
      "city": "柳州市",
      "name": "三江侗族自治县",
      "id": "450226000000"
    }],
    "450300000000": [{
      "city": "桂林市",
      "name": "市辖区",
      "id": "450301000000"
    }, {
      "city": "桂林市",
      "name": "秀峰区",
      "id": "450302000000"
    }, {
      "city": "桂林市",
      "name": "叠彩区",
      "id": "450303000000"
    }, {
      "city": "桂林市",
      "name": "象山区",
      "id": "450304000000"
    }, {
      "city": "桂林市",
      "name": "七星区",
      "id": "450305000000"
    }, {
      "city": "桂林市",
      "name": "雁山区",
      "id": "450311000000"
    }, {
      "city": "桂林市",
      "name": "临桂区",
      "id": "450312000000"
    }, {
      "city": "桂林市",
      "name": "阳朔县",
      "id": "450321000000"
    }, {
      "city": "桂林市",
      "name": "灵川县",
      "id": "450323000000"
    }, {
      "city": "桂林市",
      "name": "全州县",
      "id": "450324000000"
    }, {
      "city": "桂林市",
      "name": "兴安县",
      "id": "450325000000"
    }, {
      "city": "桂林市",
      "name": "永福县",
      "id": "450326000000"
    }, {
      "city": "桂林市",
      "name": "灌阳县",
      "id": "450327000000"
    }, {
      "city": "桂林市",
      "name": "龙胜各族自治县",
      "id": "450328000000"
    }, {
      "city": "桂林市",
      "name": "资源县",
      "id": "450329000000"
    }, {
      "city": "桂林市",
      "name": "平乐县",
      "id": "450330000000"
    }, {
      "city": "桂林市",
      "name": "恭城瑶族自治县",
      "id": "450332000000"
    }, {
      "city": "桂林市",
      "name": "荔浦市",
      "id": "450381000000"
    }],
    "450400000000": [{
      "city": "梧州市",
      "name": "市辖区",
      "id": "450401000000"
    }, {
      "city": "梧州市",
      "name": "万秀区",
      "id": "450403000000"
    }, {
      "city": "梧州市",
      "name": "长洲区",
      "id": "450405000000"
    }, {
      "city": "梧州市",
      "name": "龙圩区",
      "id": "450406000000"
    }, {
      "city": "梧州市",
      "name": "苍梧县",
      "id": "450421000000"
    }, {
      "city": "梧州市",
      "name": "藤县",
      "id": "450422000000"
    }, {
      "city": "梧州市",
      "name": "蒙山县",
      "id": "450423000000"
    }, {
      "city": "梧州市",
      "name": "岑溪市",
      "id": "450481000000"
    }],
    "450500000000": [{
      "city": "北海市",
      "name": "市辖区",
      "id": "450501000000"
    }, {
      "city": "北海市",
      "name": "海城区",
      "id": "450502000000"
    }, {
      "city": "北海市",
      "name": "银海区",
      "id": "450503000000"
    }, {
      "city": "北海市",
      "name": "铁山港区",
      "id": "450512000000"
    }, {
      "city": "北海市",
      "name": "合浦县",
      "id": "450521000000"
    }],
    "450600000000": [{
      "city": "防城港市",
      "name": "市辖区",
      "id": "450601000000"
    }, {
      "city": "防城港市",
      "name": "港口区",
      "id": "450602000000"
    }, {
      "city": "防城港市",
      "name": "防城区",
      "id": "450603000000"
    }, {
      "city": "防城港市",
      "name": "上思县",
      "id": "450621000000"
    }, {
      "city": "防城港市",
      "name": "东兴市",
      "id": "450681000000"
    }],
    "450700000000": [{
      "city": "钦州市",
      "name": "市辖区",
      "id": "450701000000"
    }, {
      "city": "钦州市",
      "name": "钦南区",
      "id": "450702000000"
    }, {
      "city": "钦州市",
      "name": "钦北区",
      "id": "450703000000"
    }, {
      "city": "钦州市",
      "name": "灵山县",
      "id": "450721000000"
    }, {
      "city": "钦州市",
      "name": "浦北县",
      "id": "450722000000"
    }],
    "450800000000": [{
      "city": "贵港市",
      "name": "市辖区",
      "id": "450801000000"
    }, {
      "city": "贵港市",
      "name": "港北区",
      "id": "450802000000"
    }, {
      "city": "贵港市",
      "name": "港南区",
      "id": "450803000000"
    }, {
      "city": "贵港市",
      "name": "覃塘区",
      "id": "450804000000"
    }, {
      "city": "贵港市",
      "name": "平南县",
      "id": "450821000000"
    }, {
      "city": "贵港市",
      "name": "桂平市",
      "id": "450881000000"
    }],
    "450900000000": [{
      "city": "玉林市",
      "name": "市辖区",
      "id": "450901000000"
    }, {
      "city": "玉林市",
      "name": "玉州区",
      "id": "450902000000"
    }, {
      "city": "玉林市",
      "name": "福绵区",
      "id": "450903000000"
    }, {
      "city": "玉林市",
      "name": "容县",
      "id": "450921000000"
    }, {
      "city": "玉林市",
      "name": "陆川县",
      "id": "450922000000"
    }, {
      "city": "玉林市",
      "name": "博白县",
      "id": "450923000000"
    }, {
      "city": "玉林市",
      "name": "兴业县",
      "id": "450924000000"
    }, {
      "city": "玉林市",
      "name": "北流市",
      "id": "450981000000"
    }],
    "451000000000": [{
      "city": "百色市",
      "name": "市辖区",
      "id": "451001000000"
    }, {
      "city": "百色市",
      "name": "右江区",
      "id": "451002000000"
    }, {
      "city": "百色市",
      "name": "田阳县",
      "id": "451021000000"
    }, {
      "city": "百色市",
      "name": "田东县",
      "id": "451022000000"
    }, {
      "city": "百色市",
      "name": "平果县",
      "id": "451023000000"
    }, {
      "city": "百色市",
      "name": "德保县",
      "id": "451024000000"
    }, {
      "city": "百色市",
      "name": "那坡县",
      "id": "451026000000"
    }, {
      "city": "百色市",
      "name": "凌云县",
      "id": "451027000000"
    }, {
      "city": "百色市",
      "name": "乐业县",
      "id": "451028000000"
    }, {
      "city": "百色市",
      "name": "田林县",
      "id": "451029000000"
    }, {
      "city": "百色市",
      "name": "西林县",
      "id": "451030000000"
    }, {
      "city": "百色市",
      "name": "隆林各族自治县",
      "id": "451031000000"
    }, {
      "city": "百色市",
      "name": "靖西市",
      "id": "451081000000"
    }],
    "451100000000": [{
      "city": "贺州市",
      "name": "市辖区",
      "id": "451101000000"
    }, {
      "city": "贺州市",
      "name": "八步区",
      "id": "451102000000"
    }, {
      "city": "贺州市",
      "name": "平桂区",
      "id": "451103000000"
    }, {
      "city": "贺州市",
      "name": "昭平县",
      "id": "451121000000"
    }, {
      "city": "贺州市",
      "name": "钟山县",
      "id": "451122000000"
    }, {
      "city": "贺州市",
      "name": "富川瑶族自治县",
      "id": "451123000000"
    }],
    "451200000000": [{
      "city": "河池市",
      "name": "市辖区",
      "id": "451201000000"
    }, {
      "city": "河池市",
      "name": "金城江区",
      "id": "451202000000"
    }, {
      "city": "河池市",
      "name": "宜州区",
      "id": "451203000000"
    }, {
      "city": "河池市",
      "name": "南丹县",
      "id": "451221000000"
    }, {
      "city": "河池市",
      "name": "天峨县",
      "id": "451222000000"
    }, {
      "city": "河池市",
      "name": "凤山县",
      "id": "451223000000"
    }, {
      "city": "河池市",
      "name": "东兰县",
      "id": "451224000000"
    }, {
      "city": "河池市",
      "name": "罗城仫佬族自治县",
      "id": "451225000000"
    }, {
      "city": "河池市",
      "name": "环江毛南族自治县",
      "id": "451226000000"
    }, {
      "city": "河池市",
      "name": "巴马瑶族自治县",
      "id": "451227000000"
    }, {
      "city": "河池市",
      "name": "都安瑶族自治县",
      "id": "451228000000"
    }, {
      "city": "河池市",
      "name": "大化瑶族自治县",
      "id": "451229000000"
    }],
    "451300000000": [{
      "city": "来宾市",
      "name": "市辖区",
      "id": "451301000000"
    }, {
      "city": "来宾市",
      "name": "兴宾区",
      "id": "451302000000"
    }, {
      "city": "来宾市",
      "name": "忻城县",
      "id": "451321000000"
    }, {
      "city": "来宾市",
      "name": "象州县",
      "id": "451322000000"
    }, {
      "city": "来宾市",
      "name": "武宣县",
      "id": "451323000000"
    }, {
      "city": "来宾市",
      "name": "金秀瑶族自治县",
      "id": "451324000000"
    }, {
      "city": "来宾市",
      "name": "合山市",
      "id": "451381000000"
    }],
    "451400000000": [{
      "city": "崇左市",
      "name": "市辖区",
      "id": "451401000000"
    }, {
      "city": "崇左市",
      "name": "江州区",
      "id": "451402000000"
    }, {
      "city": "崇左市",
      "name": "扶绥县",
      "id": "451421000000"
    }, {
      "city": "崇左市",
      "name": "宁明县",
      "id": "451422000000"
    }, {
      "city": "崇左市",
      "name": "龙州县",
      "id": "451423000000"
    }, {
      "city": "崇左市",
      "name": "大新县",
      "id": "451424000000"
    }, {
      "city": "崇左市",
      "name": "天等县",
      "id": "451425000000"
    }, {
      "city": "崇左市",
      "name": "凭祥市",
      "id": "451481000000"
    }],
    "460100000000": [{
      "city": "海口市",
      "name": "市辖区",
      "id": "460101000000"
    }, {
      "city": "海口市",
      "name": "秀英区",
      "id": "460105000000"
    }, {
      "city": "海口市",
      "name": "龙华区",
      "id": "460106000000"
    }, {
      "city": "海口市",
      "name": "琼山区",
      "id": "460107000000"
    }, {
      "city": "海口市",
      "name": "美兰区",
      "id": "460108000000"
    }],
    "460200000000": [{
      "city": "三亚市",
      "name": "市辖区",
      "id": "460201000000"
    }, {
      "city": "三亚市",
      "name": "海棠区",
      "id": "460202000000"
    }, {
      "city": "三亚市",
      "name": "吉阳区",
      "id": "460203000000"
    }, {
      "city": "三亚市",
      "name": "天涯区",
      "id": "460204000000"
    }, {
      "city": "三亚市",
      "name": "崖州区",
      "id": "460205000000"
    }],
    "460300000000": [{
      "city": "三沙市",
      "name": "西沙群岛",
      "id": "460321000000"
    }, {
      "city": "三沙市",
      "name": "南沙群岛",
      "id": "460322000000"
    }, {
      "city": "三沙市",
      "name": "中沙群岛的岛礁及其海域",
      "id": "460323000000"
    }],
    "469000000000": [{
      "city": "省直辖县级行政区划",
      "name": "五指山市",
      "id": "469001000000"
    }, {
      "city": "省直辖县级行政区划",
      "name": "琼海市",
      "id": "469002000000"
    }, {
      "city": "省直辖县级行政区划",
      "name": "文昌市",
      "id": "469005000000"
    }, {
      "city": "省直辖县级行政区划",
      "name": "万宁市",
      "id": "469006000000"
    }, {
      "city": "省直辖县级行政区划",
      "name": "东方市",
      "id": "469007000000"
    }, {
      "city": "省直辖县级行政区划",
      "name": "定安县",
      "id": "469021000000"
    }, {
      "city": "省直辖县级行政区划",
      "name": "屯昌县",
      "id": "469022000000"
    }, {
      "city": "省直辖县级行政区划",
      "name": "澄迈县",
      "id": "469023000000"
    }, {
      "city": "省直辖县级行政区划",
      "name": "临高县",
      "id": "469024000000"
    }, {
      "city": "省直辖县级行政区划",
      "name": "白沙黎族自治县",
      "id": "469025000000"
    }, {
      "city": "省直辖县级行政区划",
      "name": "昌江黎族自治县",
      "id": "469026000000"
    }, {
      "city": "省直辖县级行政区划",
      "name": "乐东黎族自治县",
      "id": "469027000000"
    }, {
      "city": "省直辖县级行政区划",
      "name": "陵水黎族自治县",
      "id": "469028000000"
    }, {
      "city": "省直辖县级行政区划",
      "name": "保亭黎族苗族自治县",
      "id": "469029000000"
    }, {
      "city": "省直辖县级行政区划",
      "name": "琼中黎族苗族自治县",
      "id": "469030000000"
    }],
    "500100000000": [{
      "city": "市辖区",
      "name": "万州区",
      "id": "500101000000"
    }, {
      "city": "市辖区",
      "name": "涪陵区",
      "id": "500102000000"
    }, {
      "city": "市辖区",
      "name": "渝中区",
      "id": "500103000000"
    }, {
      "city": "市辖区",
      "name": "大渡口区",
      "id": "500104000000"
    }, {
      "city": "市辖区",
      "name": "江北区",
      "id": "500105000000"
    }, {
      "city": "市辖区",
      "name": "沙坪坝区",
      "id": "500106000000"
    }, {
      "city": "市辖区",
      "name": "九龙坡区",
      "id": "500107000000"
    }, {
      "city": "市辖区",
      "name": "南岸区",
      "id": "500108000000"
    }, {
      "city": "市辖区",
      "name": "北碚区",
      "id": "500109000000"
    }, {
      "city": "市辖区",
      "name": "綦江区",
      "id": "500110000000"
    }, {
      "city": "市辖区",
      "name": "大足区",
      "id": "500111000000"
    }, {
      "city": "市辖区",
      "name": "渝北区",
      "id": "500112000000"
    }, {
      "city": "市辖区",
      "name": "巴南区",
      "id": "500113000000"
    }, {
      "city": "市辖区",
      "name": "黔江区",
      "id": "500114000000"
    }, {
      "city": "市辖区",
      "name": "长寿区",
      "id": "500115000000"
    }, {
      "city": "市辖区",
      "name": "江津区",
      "id": "500116000000"
    }, {
      "city": "市辖区",
      "name": "合川区",
      "id": "500117000000"
    }, {
      "city": "市辖区",
      "name": "永川区",
      "id": "500118000000"
    }, {
      "city": "市辖区",
      "name": "南川区",
      "id": "500119000000"
    }, {
      "city": "市辖区",
      "name": "璧山区",
      "id": "500120000000"
    }, {
      "city": "市辖区",
      "name": "铜梁区",
      "id": "500151000000"
    }, {
      "city": "市辖区",
      "name": "潼南区",
      "id": "500152000000"
    }, {
      "city": "市辖区",
      "name": "荣昌区",
      "id": "500153000000"
    }, {
      "city": "市辖区",
      "name": "开州区",
      "id": "500154000000"
    }, {
      "city": "市辖区",
      "name": "梁平区",
      "id": "500155000000"
    }, {
      "city": "市辖区",
      "name": "武隆区",
      "id": "500156000000"
    }],
    "500200000000": [{
      "city": "县",
      "name": "城口县",
      "id": "500229000000"
    }, {
      "city": "县",
      "name": "丰都县",
      "id": "500230000000"
    }, {
      "city": "县",
      "name": "垫江县",
      "id": "500231000000"
    }, {
      "city": "县",
      "name": "忠县",
      "id": "500233000000"
    }, {
      "city": "县",
      "name": "云阳县",
      "id": "500235000000"
    }, {
      "city": "县",
      "name": "奉节县",
      "id": "500236000000"
    }, {
      "city": "县",
      "name": "巫山县",
      "id": "500237000000"
    }, {
      "city": "县",
      "name": "巫溪县",
      "id": "500238000000"
    }, {
      "city": "县",
      "name": "石柱土家族自治县",
      "id": "500240000000"
    }, {
      "city": "县",
      "name": "秀山土家族苗族自治县",
      "id": "500241000000"
    }, {
      "city": "县",
      "name": "酉阳土家族苗族自治县",
      "id": "500242000000"
    }, {
      "city": "县",
      "name": "彭水苗族土家族自治县",
      "id": "500243000000"
    }],
    "510100000000": [{
      "city": "成都市",
      "name": "市辖区",
      "id": "510101000000"
    }, {
      "city": "成都市",
      "name": "锦江区",
      "id": "510104000000"
    }, {
      "city": "成都市",
      "name": "青羊区",
      "id": "510105000000"
    }, {
      "city": "成都市",
      "name": "金牛区",
      "id": "510106000000"
    }, {
      "city": "成都市",
      "name": "武侯区",
      "id": "510107000000"
    }, {
      "city": "成都市",
      "name": "成华区",
      "id": "510108000000"
    }, {
      "city": "成都市",
      "name": "龙泉驿区",
      "id": "510112000000"
    }, {
      "city": "成都市",
      "name": "青白江区",
      "id": "510113000000"
    }, {
      "city": "成都市",
      "name": "新都区",
      "id": "510114000000"
    }, {
      "city": "成都市",
      "name": "温江区",
      "id": "510115000000"
    }, {
      "city": "成都市",
      "name": "双流区",
      "id": "510116000000"
    }, {
      "city": "成都市",
      "name": "郫都区",
      "id": "510117000000"
    }, {
      "city": "成都市",
      "name": "金堂县",
      "id": "510121000000"
    }, {
      "city": "成都市",
      "name": "大邑县",
      "id": "510129000000"
    }, {
      "city": "成都市",
      "name": "蒲江县",
      "id": "510131000000"
    }, {
      "city": "成都市",
      "name": "新津县",
      "id": "510132000000"
    }, {
      "city": "成都市",
      "name": "都江堰市",
      "id": "510181000000"
    }, {
      "city": "成都市",
      "name": "彭州市",
      "id": "510182000000"
    }, {
      "city": "成都市",
      "name": "邛崃市",
      "id": "510183000000"
    }, {
      "city": "成都市",
      "name": "崇州市",
      "id": "510184000000"
    }, {
      "city": "成都市",
      "name": "简阳市",
      "id": "510185000000"
    }],
    "510300000000": [{
      "city": "自贡市",
      "name": "市辖区",
      "id": "510301000000"
    }, {
      "city": "自贡市",
      "name": "自流井区",
      "id": "510302000000"
    }, {
      "city": "自贡市",
      "name": "贡井区",
      "id": "510303000000"
    }, {
      "city": "自贡市",
      "name": "大安区",
      "id": "510304000000"
    }, {
      "city": "自贡市",
      "name": "沿滩区",
      "id": "510311000000"
    }, {
      "city": "自贡市",
      "name": "荣县",
      "id": "510321000000"
    }, {
      "city": "自贡市",
      "name": "富顺县",
      "id": "510322000000"
    }],
    "510400000000": [{
      "city": "攀枝花市",
      "name": "市辖区",
      "id": "510401000000"
    }, {
      "city": "攀枝花市",
      "name": "东区",
      "id": "510402000000"
    }, {
      "city": "攀枝花市",
      "name": "西区",
      "id": "510403000000"
    }, {
      "city": "攀枝花市",
      "name": "仁和区",
      "id": "510411000000"
    }, {
      "city": "攀枝花市",
      "name": "米易县",
      "id": "510421000000"
    }, {
      "city": "攀枝花市",
      "name": "盐边县",
      "id": "510422000000"
    }],
    "510500000000": [{
      "city": "泸州市",
      "name": "市辖区",
      "id": "510501000000"
    }, {
      "city": "泸州市",
      "name": "江阳区",
      "id": "510502000000"
    }, {
      "city": "泸州市",
      "name": "纳溪区",
      "id": "510503000000"
    }, {
      "city": "泸州市",
      "name": "龙马潭区",
      "id": "510504000000"
    }, {
      "city": "泸州市",
      "name": "泸县",
      "id": "510521000000"
    }, {
      "city": "泸州市",
      "name": "合江县",
      "id": "510522000000"
    }, {
      "city": "泸州市",
      "name": "叙永县",
      "id": "510524000000"
    }, {
      "city": "泸州市",
      "name": "古蔺县",
      "id": "510525000000"
    }],
    "510600000000": [{
      "city": "德阳市",
      "name": "市辖区",
      "id": "510601000000"
    }, {
      "city": "德阳市",
      "name": "旌阳区",
      "id": "510603000000"
    }, {
      "city": "德阳市",
      "name": "罗江区",
      "id": "510604000000"
    }, {
      "city": "德阳市",
      "name": "中江县",
      "id": "510623000000"
    }, {
      "city": "德阳市",
      "name": "广汉市",
      "id": "510681000000"
    }, {
      "city": "德阳市",
      "name": "什邡市",
      "id": "510682000000"
    }, {
      "city": "德阳市",
      "name": "绵竹市",
      "id": "510683000000"
    }],
    "510700000000": [{
      "city": "绵阳市",
      "name": "市辖区",
      "id": "510701000000"
    }, {
      "city": "绵阳市",
      "name": "涪城区",
      "id": "510703000000"
    }, {
      "city": "绵阳市",
      "name": "游仙区",
      "id": "510704000000"
    }, {
      "city": "绵阳市",
      "name": "安州区",
      "id": "510705000000"
    }, {
      "city": "绵阳市",
      "name": "三台县",
      "id": "510722000000"
    }, {
      "city": "绵阳市",
      "name": "盐亭县",
      "id": "510723000000"
    }, {
      "city": "绵阳市",
      "name": "梓潼县",
      "id": "510725000000"
    }, {
      "city": "绵阳市",
      "name": "北川羌族自治县",
      "id": "510726000000"
    }, {
      "city": "绵阳市",
      "name": "平武县",
      "id": "510727000000"
    }, {
      "city": "绵阳市",
      "name": "江油市",
      "id": "510781000000"
    }],
    "510800000000": [{
      "city": "广元市",
      "name": "市辖区",
      "id": "510801000000"
    }, {
      "city": "广元市",
      "name": "利州区",
      "id": "510802000000"
    }, {
      "city": "广元市",
      "name": "昭化区",
      "id": "510811000000"
    }, {
      "city": "广元市",
      "name": "朝天区",
      "id": "510812000000"
    }, {
      "city": "广元市",
      "name": "旺苍县",
      "id": "510821000000"
    }, {
      "city": "广元市",
      "name": "青川县",
      "id": "510822000000"
    }, {
      "city": "广元市",
      "name": "剑阁县",
      "id": "510823000000"
    }, {
      "city": "广元市",
      "name": "苍溪县",
      "id": "510824000000"
    }],
    "510900000000": [{
      "city": "遂宁市",
      "name": "市辖区",
      "id": "510901000000"
    }, {
      "city": "遂宁市",
      "name": "船山区",
      "id": "510903000000"
    }, {
      "city": "遂宁市",
      "name": "安居区",
      "id": "510904000000"
    }, {
      "city": "遂宁市",
      "name": "蓬溪县",
      "id": "510921000000"
    }, {
      "city": "遂宁市",
      "name": "射洪县",
      "id": "510922000000"
    }, {
      "city": "遂宁市",
      "name": "大英县",
      "id": "510923000000"
    }],
    "511000000000": [{
      "city": "内江市",
      "name": "市辖区",
      "id": "511001000000"
    }, {
      "city": "内江市",
      "name": "市中区",
      "id": "511002000000"
    }, {
      "city": "内江市",
      "name": "东兴区",
      "id": "511011000000"
    }, {
      "city": "内江市",
      "name": "威远县",
      "id": "511024000000"
    }, {
      "city": "内江市",
      "name": "资中县",
      "id": "511025000000"
    }, {
      "city": "内江市",
      "name": "内江经济开发区",
      "id": "511071000000"
    }, {
      "city": "内江市",
      "name": "隆昌市",
      "id": "511083000000"
    }],
    "511100000000": [{
      "city": "乐山市",
      "name": "市辖区",
      "id": "511101000000"
    }, {
      "city": "乐山市",
      "name": "市中区",
      "id": "511102000000"
    }, {
      "city": "乐山市",
      "name": "沙湾区",
      "id": "511111000000"
    }, {
      "city": "乐山市",
      "name": "五通桥区",
      "id": "511112000000"
    }, {
      "city": "乐山市",
      "name": "金口河区",
      "id": "511113000000"
    }, {
      "city": "乐山市",
      "name": "犍为县",
      "id": "511123000000"
    }, {
      "city": "乐山市",
      "name": "井研县",
      "id": "511124000000"
    }, {
      "city": "乐山市",
      "name": "夹江县",
      "id": "511126000000"
    }, {
      "city": "乐山市",
      "name": "沐川县",
      "id": "511129000000"
    }, {
      "city": "乐山市",
      "name": "峨边彝族自治县",
      "id": "511132000000"
    }, {
      "city": "乐山市",
      "name": "马边彝族自治县",
      "id": "511133000000"
    }, {
      "city": "乐山市",
      "name": "峨眉山市",
      "id": "511181000000"
    }],
    "511300000000": [{
      "city": "南充市",
      "name": "市辖区",
      "id": "511301000000"
    }, {
      "city": "南充市",
      "name": "顺庆区",
      "id": "511302000000"
    }, {
      "city": "南充市",
      "name": "高坪区",
      "id": "511303000000"
    }, {
      "city": "南充市",
      "name": "嘉陵区",
      "id": "511304000000"
    }, {
      "city": "南充市",
      "name": "南部县",
      "id": "511321000000"
    }, {
      "city": "南充市",
      "name": "营山县",
      "id": "511322000000"
    }, {
      "city": "南充市",
      "name": "蓬安县",
      "id": "511323000000"
    }, {
      "city": "南充市",
      "name": "仪陇县",
      "id": "511324000000"
    }, {
      "city": "南充市",
      "name": "西充县",
      "id": "511325000000"
    }, {
      "city": "南充市",
      "name": "阆中市",
      "id": "511381000000"
    }],
    "511400000000": [{
      "city": "眉山市",
      "name": "市辖区",
      "id": "511401000000"
    }, {
      "city": "眉山市",
      "name": "东坡区",
      "id": "511402000000"
    }, {
      "city": "眉山市",
      "name": "彭山区",
      "id": "511403000000"
    }, {
      "city": "眉山市",
      "name": "仁寿县",
      "id": "511421000000"
    }, {
      "city": "眉山市",
      "name": "洪雅县",
      "id": "511423000000"
    }, {
      "city": "眉山市",
      "name": "丹棱县",
      "id": "511424000000"
    }, {
      "city": "眉山市",
      "name": "青神县",
      "id": "511425000000"
    }],
    "511500000000": [{
      "city": "宜宾市",
      "name": "市辖区",
      "id": "511501000000"
    }, {
      "city": "宜宾市",
      "name": "翠屏区",
      "id": "511502000000"
    }, {
      "city": "宜宾市",
      "name": "南溪区",
      "id": "511503000000"
    }, {
      "city": "宜宾市",
      "name": "叙州区",
      "id": "511504000000"
    }, {
      "city": "宜宾市",
      "name": "江安县",
      "id": "511523000000"
    }, {
      "city": "宜宾市",
      "name": "长宁县",
      "id": "511524000000"
    }, {
      "city": "宜宾市",
      "name": "高县",
      "id": "511525000000"
    }, {
      "city": "宜宾市",
      "name": "珙县",
      "id": "511526000000"
    }, {
      "city": "宜宾市",
      "name": "筠连县",
      "id": "511527000000"
    }, {
      "city": "宜宾市",
      "name": "兴文县",
      "id": "511528000000"
    }, {
      "city": "宜宾市",
      "name": "屏山县",
      "id": "511529000000"
    }],
    "511600000000": [{
      "city": "广安市",
      "name": "市辖区",
      "id": "511601000000"
    }, {
      "city": "广安市",
      "name": "广安区",
      "id": "511602000000"
    }, {
      "city": "广安市",
      "name": "前锋区",
      "id": "511603000000"
    }, {
      "city": "广安市",
      "name": "岳池县",
      "id": "511621000000"
    }, {
      "city": "广安市",
      "name": "武胜县",
      "id": "511622000000"
    }, {
      "city": "广安市",
      "name": "邻水县",
      "id": "511623000000"
    }, {
      "city": "广安市",
      "name": "华蓥市",
      "id": "511681000000"
    }],
    "511700000000": [{
      "city": "达州市",
      "name": "市辖区",
      "id": "511701000000"
    }, {
      "city": "达州市",
      "name": "通川区",
      "id": "511702000000"
    }, {
      "city": "达州市",
      "name": "达川区",
      "id": "511703000000"
    }, {
      "city": "达州市",
      "name": "宣汉县",
      "id": "511722000000"
    }, {
      "city": "达州市",
      "name": "开江县",
      "id": "511723000000"
    }, {
      "city": "达州市",
      "name": "大竹县",
      "id": "511724000000"
    }, {
      "city": "达州市",
      "name": "渠县",
      "id": "511725000000"
    }, {
      "city": "达州市",
      "name": "达州经济开发区",
      "id": "511771000000"
    }, {
      "city": "达州市",
      "name": "万源市",
      "id": "511781000000"
    }],
    "511800000000": [{
      "city": "雅安市",
      "name": "市辖区",
      "id": "511801000000"
    }, {
      "city": "雅安市",
      "name": "雨城区",
      "id": "511802000000"
    }, {
      "city": "雅安市",
      "name": "名山区",
      "id": "511803000000"
    }, {
      "city": "雅安市",
      "name": "荥经县",
      "id": "511822000000"
    }, {
      "city": "雅安市",
      "name": "汉源县",
      "id": "511823000000"
    }, {
      "city": "雅安市",
      "name": "石棉县",
      "id": "511824000000"
    }, {
      "city": "雅安市",
      "name": "天全县",
      "id": "511825000000"
    }, {
      "city": "雅安市",
      "name": "芦山县",
      "id": "511826000000"
    }, {
      "city": "雅安市",
      "name": "宝兴县",
      "id": "511827000000"
    }],
    "511900000000": [{
      "city": "巴中市",
      "name": "市辖区",
      "id": "511901000000"
    }, {
      "city": "巴中市",
      "name": "巴州区",
      "id": "511902000000"
    }, {
      "city": "巴中市",
      "name": "恩阳区",
      "id": "511903000000"
    }, {
      "city": "巴中市",
      "name": "通江县",
      "id": "511921000000"
    }, {
      "city": "巴中市",
      "name": "南江县",
      "id": "511922000000"
    }, {
      "city": "巴中市",
      "name": "平昌县",
      "id": "511923000000"
    }, {
      "city": "巴中市",
      "name": "巴中经济开发区",
      "id": "511971000000"
    }],
    "512000000000": [{
      "city": "资阳市",
      "name": "市辖区",
      "id": "512001000000"
    }, {
      "city": "资阳市",
      "name": "雁江区",
      "id": "512002000000"
    }, {
      "city": "资阳市",
      "name": "安岳县",
      "id": "512021000000"
    }, {
      "city": "资阳市",
      "name": "乐至县",
      "id": "512022000000"
    }],
    "513200000000": [{
      "city": "阿坝藏族羌族自治州",
      "name": "马尔康市",
      "id": "513201000000"
    }, {
      "city": "阿坝藏族羌族自治州",
      "name": "汶川县",
      "id": "513221000000"
    }, {
      "city": "阿坝藏族羌族自治州",
      "name": "理县",
      "id": "513222000000"
    }, {
      "city": "阿坝藏族羌族自治州",
      "name": "茂县",
      "id": "513223000000"
    }, {
      "city": "阿坝藏族羌族自治州",
      "name": "松潘县",
      "id": "513224000000"
    }, {
      "city": "阿坝藏族羌族自治州",
      "name": "九寨沟县",
      "id": "513225000000"
    }, {
      "city": "阿坝藏族羌族自治州",
      "name": "金川县",
      "id": "513226000000"
    }, {
      "city": "阿坝藏族羌族自治州",
      "name": "小金县",
      "id": "513227000000"
    }, {
      "city": "阿坝藏族羌族自治州",
      "name": "黑水县",
      "id": "513228000000"
    }, {
      "city": "阿坝藏族羌族自治州",
      "name": "壤塘县",
      "id": "513230000000"
    }, {
      "city": "阿坝藏族羌族自治州",
      "name": "阿坝县",
      "id": "513231000000"
    }, {
      "city": "阿坝藏族羌族自治州",
      "name": "若尔盖县",
      "id": "513232000000"
    }, {
      "city": "阿坝藏族羌族自治州",
      "name": "红原县",
      "id": "513233000000"
    }],
    "513300000000": [{
      "city": "甘孜藏族自治州",
      "name": "康定市",
      "id": "513301000000"
    }, {
      "city": "甘孜藏族自治州",
      "name": "泸定县",
      "id": "513322000000"
    }, {
      "city": "甘孜藏族自治州",
      "name": "丹巴县",
      "id": "513323000000"
    }, {
      "city": "甘孜藏族自治州",
      "name": "九龙县",
      "id": "513324000000"
    }, {
      "city": "甘孜藏族自治州",
      "name": "雅江县",
      "id": "513325000000"
    }, {
      "city": "甘孜藏族自治州",
      "name": "道孚县",
      "id": "513326000000"
    }, {
      "city": "甘孜藏族自治州",
      "name": "炉霍县",
      "id": "513327000000"
    }, {
      "city": "甘孜藏族自治州",
      "name": "甘孜县",
      "id": "513328000000"
    }, {
      "city": "甘孜藏族自治州",
      "name": "新龙县",
      "id": "513329000000"
    }, {
      "city": "甘孜藏族自治州",
      "name": "德格县",
      "id": "513330000000"
    }, {
      "city": "甘孜藏族自治州",
      "name": "白玉县",
      "id": "513331000000"
    }, {
      "city": "甘孜藏族自治州",
      "name": "石渠县",
      "id": "513332000000"
    }, {
      "city": "甘孜藏族自治州",
      "name": "色达县",
      "id": "513333000000"
    }, {
      "city": "甘孜藏族自治州",
      "name": "理塘县",
      "id": "513334000000"
    }, {
      "city": "甘孜藏族自治州",
      "name": "巴塘县",
      "id": "513335000000"
    }, {
      "city": "甘孜藏族自治州",
      "name": "乡城县",
      "id": "513336000000"
    }, {
      "city": "甘孜藏族自治州",
      "name": "稻城县",
      "id": "513337000000"
    }, {
      "city": "甘孜藏族自治州",
      "name": "得荣县",
      "id": "513338000000"
    }],
    "513400000000": [{
      "city": "凉山彝族自治州",
      "name": "西昌市",
      "id": "513401000000"
    }, {
      "city": "凉山彝族自治州",
      "name": "木里藏族自治县",
      "id": "513422000000"
    }, {
      "city": "凉山彝族自治州",
      "name": "盐源县",
      "id": "513423000000"
    }, {
      "city": "凉山彝族自治州",
      "name": "德昌县",
      "id": "513424000000"
    }, {
      "city": "凉山彝族自治州",
      "name": "会理县",
      "id": "513425000000"
    }, {
      "city": "凉山彝族自治州",
      "name": "会东县",
      "id": "513426000000"
    }, {
      "city": "凉山彝族自治州",
      "name": "宁南县",
      "id": "513427000000"
    }, {
      "city": "凉山彝族自治州",
      "name": "普格县",
      "id": "513428000000"
    }, {
      "city": "凉山彝族自治州",
      "name": "布拖县",
      "id": "513429000000"
    }, {
      "city": "凉山彝族自治州",
      "name": "金阳县",
      "id": "513430000000"
    }, {
      "city": "凉山彝族自治州",
      "name": "昭觉县",
      "id": "513431000000"
    }, {
      "city": "凉山彝族自治州",
      "name": "喜德县",
      "id": "513432000000"
    }, {
      "city": "凉山彝族自治州",
      "name": "冕宁县",
      "id": "513433000000"
    }, {
      "city": "凉山彝族自治州",
      "name": "越西县",
      "id": "513434000000"
    }, {
      "city": "凉山彝族自治州",
      "name": "甘洛县",
      "id": "513435000000"
    }, {
      "city": "凉山彝族自治州",
      "name": "美姑县",
      "id": "513436000000"
    }, {
      "city": "凉山彝族自治州",
      "name": "雷波县",
      "id": "513437000000"
    }],
    "520100000000": [{
      "city": "贵阳市",
      "name": "市辖区",
      "id": "520101000000"
    }, {
      "city": "贵阳市",
      "name": "南明区",
      "id": "520102000000"
    }, {
      "city": "贵阳市",
      "name": "云岩区",
      "id": "520103000000"
    }, {
      "city": "贵阳市",
      "name": "花溪区",
      "id": "520111000000"
    }, {
      "city": "贵阳市",
      "name": "乌当区",
      "id": "520112000000"
    }, {
      "city": "贵阳市",
      "name": "白云区",
      "id": "520113000000"
    }, {
      "city": "贵阳市",
      "name": "观山湖区",
      "id": "520115000000"
    }, {
      "city": "贵阳市",
      "name": "开阳县",
      "id": "520121000000"
    }, {
      "city": "贵阳市",
      "name": "息烽县",
      "id": "520122000000"
    }, {
      "city": "贵阳市",
      "name": "修文县",
      "id": "520123000000"
    }, {
      "city": "贵阳市",
      "name": "清镇市",
      "id": "520181000000"
    }],
    "520200000000": [{
      "city": "六盘水市",
      "name": "钟山区",
      "id": "520201000000"
    }, {
      "city": "六盘水市",
      "name": "六枝特区",
      "id": "520203000000"
    }, {
      "city": "六盘水市",
      "name": "水城县",
      "id": "520221000000"
    }, {
      "city": "六盘水市",
      "name": "盘州市",
      "id": "520281000000"
    }],
    "520300000000": [{
      "city": "遵义市",
      "name": "市辖区",
      "id": "520301000000"
    }, {
      "city": "遵义市",
      "name": "红花岗区",
      "id": "520302000000"
    }, {
      "city": "遵义市",
      "name": "汇川区",
      "id": "520303000000"
    }, {
      "city": "遵义市",
      "name": "播州区",
      "id": "520304000000"
    }, {
      "city": "遵义市",
      "name": "桐梓县",
      "id": "520322000000"
    }, {
      "city": "遵义市",
      "name": "绥阳县",
      "id": "520323000000"
    }, {
      "city": "遵义市",
      "name": "正安县",
      "id": "520324000000"
    }, {
      "city": "遵义市",
      "name": "道真仡佬族苗族自治县",
      "id": "520325000000"
    }, {
      "city": "遵义市",
      "name": "务川仡佬族苗族自治县",
      "id": "520326000000"
    }, {
      "city": "遵义市",
      "name": "凤冈县",
      "id": "520327000000"
    }, {
      "city": "遵义市",
      "name": "湄潭县",
      "id": "520328000000"
    }, {
      "city": "遵义市",
      "name": "余庆县",
      "id": "520329000000"
    }, {
      "city": "遵义市",
      "name": "习水县",
      "id": "520330000000"
    }, {
      "city": "遵义市",
      "name": "赤水市",
      "id": "520381000000"
    }, {
      "city": "遵义市",
      "name": "仁怀市",
      "id": "520382000000"
    }],
    "520400000000": [{
      "city": "安顺市",
      "name": "市辖区",
      "id": "520401000000"
    }, {
      "city": "安顺市",
      "name": "西秀区",
      "id": "520402000000"
    }, {
      "city": "安顺市",
      "name": "平坝区",
      "id": "520403000000"
    }, {
      "city": "安顺市",
      "name": "普定县",
      "id": "520422000000"
    }, {
      "city": "安顺市",
      "name": "镇宁布依族苗族自治县",
      "id": "520423000000"
    }, {
      "city": "安顺市",
      "name": "关岭布依族苗族自治县",
      "id": "520424000000"
    }, {
      "city": "安顺市",
      "name": "紫云苗族布依族自治县",
      "id": "520425000000"
    }],
    "520500000000": [{
      "city": "毕节市",
      "name": "市辖区",
      "id": "520501000000"
    }, {
      "city": "毕节市",
      "name": "七星关区",
      "id": "520502000000"
    }, {
      "city": "毕节市",
      "name": "大方县",
      "id": "520521000000"
    }, {
      "city": "毕节市",
      "name": "黔西县",
      "id": "520522000000"
    }, {
      "city": "毕节市",
      "name": "金沙县",
      "id": "520523000000"
    }, {
      "city": "毕节市",
      "name": "织金县",
      "id": "520524000000"
    }, {
      "city": "毕节市",
      "name": "纳雍县",
      "id": "520525000000"
    }, {
      "city": "毕节市",
      "name": "威宁彝族回族苗族自治县",
      "id": "520526000000"
    }, {
      "city": "毕节市",
      "name": "赫章县",
      "id": "520527000000"
    }],
    "520600000000": [{
      "city": "铜仁市",
      "name": "市辖区",
      "id": "520601000000"
    }, {
      "city": "铜仁市",
      "name": "碧江区",
      "id": "520602000000"
    }, {
      "city": "铜仁市",
      "name": "万山区",
      "id": "520603000000"
    }, {
      "city": "铜仁市",
      "name": "江口县",
      "id": "520621000000"
    }, {
      "city": "铜仁市",
      "name": "玉屏侗族自治县",
      "id": "520622000000"
    }, {
      "city": "铜仁市",
      "name": "石阡县",
      "id": "520623000000"
    }, {
      "city": "铜仁市",
      "name": "思南县",
      "id": "520624000000"
    }, {
      "city": "铜仁市",
      "name": "印江土家族苗族自治县",
      "id": "520625000000"
    }, {
      "city": "铜仁市",
      "name": "德江县",
      "id": "520626000000"
    }, {
      "city": "铜仁市",
      "name": "沿河土家族自治县",
      "id": "520627000000"
    }, {
      "city": "铜仁市",
      "name": "松桃苗族自治县",
      "id": "520628000000"
    }],
    "522300000000": [{
      "city": "黔西南布依族苗族自治州",
      "name": "兴义市",
      "id": "522301000000"
    }, {
      "city": "黔西南布依族苗族自治州",
      "name": "兴仁市",
      "id": "522302000000"
    }, {
      "city": "黔西南布依族苗族自治州",
      "name": "普安县",
      "id": "522323000000"
    }, {
      "city": "黔西南布依族苗族自治州",
      "name": "晴隆县",
      "id": "522324000000"
    }, {
      "city": "黔西南布依族苗族自治州",
      "name": "贞丰县",
      "id": "522325000000"
    }, {
      "city": "黔西南布依族苗族自治州",
      "name": "望谟县",
      "id": "522326000000"
    }, {
      "city": "黔西南布依族苗族自治州",
      "name": "册亨县",
      "id": "522327000000"
    }, {
      "city": "黔西南布依族苗族自治州",
      "name": "安龙县",
      "id": "522328000000"
    }],
    "522600000000": [{
      "city": "黔东南苗族侗族自治州",
      "name": "凯里市",
      "id": "522601000000"
    }, {
      "city": "黔东南苗族侗族自治州",
      "name": "黄平县",
      "id": "522622000000"
    }, {
      "city": "黔东南苗族侗族自治州",
      "name": "施秉县",
      "id": "522623000000"
    }, {
      "city": "黔东南苗族侗族自治州",
      "name": "三穗县",
      "id": "522624000000"
    }, {
      "city": "黔东南苗族侗族自治州",
      "name": "镇远县",
      "id": "522625000000"
    }, {
      "city": "黔东南苗族侗族自治州",
      "name": "岑巩县",
      "id": "522626000000"
    }, {
      "city": "黔东南苗族侗族自治州",
      "name": "天柱县",
      "id": "522627000000"
    }, {
      "city": "黔东南苗族侗族自治州",
      "name": "锦屏县",
      "id": "522628000000"
    }, {
      "city": "黔东南苗族侗族自治州",
      "name": "剑河县",
      "id": "522629000000"
    }, {
      "city": "黔东南苗族侗族自治州",
      "name": "台江县",
      "id": "522630000000"
    }, {
      "city": "黔东南苗族侗族自治州",
      "name": "黎平县",
      "id": "522631000000"
    }, {
      "city": "黔东南苗族侗族自治州",
      "name": "榕江县",
      "id": "522632000000"
    }, {
      "city": "黔东南苗族侗族自治州",
      "name": "从江县",
      "id": "522633000000"
    }, {
      "city": "黔东南苗族侗族自治州",
      "name": "雷山县",
      "id": "522634000000"
    }, {
      "city": "黔东南苗族侗族自治州",
      "name": "麻江县",
      "id": "522635000000"
    }, {
      "city": "黔东南苗族侗族自治州",
      "name": "丹寨县",
      "id": "522636000000"
    }],
    "522700000000": [{
      "city": "黔南布依族苗族自治州",
      "name": "都匀市",
      "id": "522701000000"
    }, {
      "city": "黔南布依族苗族自治州",
      "name": "福泉市",
      "id": "522702000000"
    }, {
      "city": "黔南布依族苗族自治州",
      "name": "荔波县",
      "id": "522722000000"
    }, {
      "city": "黔南布依族苗族自治州",
      "name": "贵定县",
      "id": "522723000000"
    }, {
      "city": "黔南布依族苗族自治州",
      "name": "瓮安县",
      "id": "522725000000"
    }, {
      "city": "黔南布依族苗族自治州",
      "name": "独山县",
      "id": "522726000000"
    }, {
      "city": "黔南布依族苗族自治州",
      "name": "平塘县",
      "id": "522727000000"
    }, {
      "city": "黔南布依族苗族自治州",
      "name": "罗甸县",
      "id": "522728000000"
    }, {
      "city": "黔南布依族苗族自治州",
      "name": "长顺县",
      "id": "522729000000"
    }, {
      "city": "黔南布依族苗族自治州",
      "name": "龙里县",
      "id": "522730000000"
    }, {
      "city": "黔南布依族苗族自治州",
      "name": "惠水县",
      "id": "522731000000"
    }, {
      "city": "黔南布依族苗族自治州",
      "name": "三都水族自治县",
      "id": "522732000000"
    }],
    "530100000000": [{
      "city": "昆明市",
      "name": "市辖区",
      "id": "530101000000"
    }, {
      "city": "昆明市",
      "name": "五华区",
      "id": "530102000000"
    }, {
      "city": "昆明市",
      "name": "盘龙区",
      "id": "530103000000"
    }, {
      "city": "昆明市",
      "name": "官渡区",
      "id": "530111000000"
    }, {
      "city": "昆明市",
      "name": "西山区",
      "id": "530112000000"
    }, {
      "city": "昆明市",
      "name": "东川区",
      "id": "530113000000"
    }, {
      "city": "昆明市",
      "name": "呈贡区",
      "id": "530114000000"
    }, {
      "city": "昆明市",
      "name": "晋宁区",
      "id": "530115000000"
    }, {
      "city": "昆明市",
      "name": "富民县",
      "id": "530124000000"
    }, {
      "city": "昆明市",
      "name": "宜良县",
      "id": "530125000000"
    }, {
      "city": "昆明市",
      "name": "石林彝族自治县",
      "id": "530126000000"
    }, {
      "city": "昆明市",
      "name": "嵩明县",
      "id": "530127000000"
    }, {
      "city": "昆明市",
      "name": "禄劝彝族苗族自治县",
      "id": "530128000000"
    }, {
      "city": "昆明市",
      "name": "寻甸回族彝族自治县",
      "id": "530129000000"
    }, {
      "city": "昆明市",
      "name": "安宁市",
      "id": "530181000000"
    }],
    "530300000000": [{
      "city": "曲靖市",
      "name": "市辖区",
      "id": "530301000000"
    }, {
      "city": "曲靖市",
      "name": "麒麟区",
      "id": "530302000000"
    }, {
      "city": "曲靖市",
      "name": "沾益区",
      "id": "530303000000"
    }, {
      "city": "曲靖市",
      "name": "马龙区",
      "id": "530304000000"
    }, {
      "city": "曲靖市",
      "name": "陆良县",
      "id": "530322000000"
    }, {
      "city": "曲靖市",
      "name": "师宗县",
      "id": "530323000000"
    }, {
      "city": "曲靖市",
      "name": "罗平县",
      "id": "530324000000"
    }, {
      "city": "曲靖市",
      "name": "富源县",
      "id": "530325000000"
    }, {
      "city": "曲靖市",
      "name": "会泽县",
      "id": "530326000000"
    }, {
      "city": "曲靖市",
      "name": "宣威市",
      "id": "530381000000"
    }],
    "530400000000": [{
      "city": "玉溪市",
      "name": "市辖区",
      "id": "530401000000"
    }, {
      "city": "玉溪市",
      "name": "红塔区",
      "id": "530402000000"
    }, {
      "city": "玉溪市",
      "name": "江川区",
      "id": "530403000000"
    }, {
      "city": "玉溪市",
      "name": "澄江县",
      "id": "530422000000"
    }, {
      "city": "玉溪市",
      "name": "通海县",
      "id": "530423000000"
    }, {
      "city": "玉溪市",
      "name": "华宁县",
      "id": "530424000000"
    }, {
      "city": "玉溪市",
      "name": "易门县",
      "id": "530425000000"
    }, {
      "city": "玉溪市",
      "name": "峨山彝族自治县",
      "id": "530426000000"
    }, {
      "city": "玉溪市",
      "name": "新平彝族傣族自治县",
      "id": "530427000000"
    }, {
      "city": "玉溪市",
      "name": "元江哈尼族彝族傣族自治县",
      "id": "530428000000"
    }],
    "530500000000": [{
      "city": "保山市",
      "name": "市辖区",
      "id": "530501000000"
    }, {
      "city": "保山市",
      "name": "隆阳区",
      "id": "530502000000"
    }, {
      "city": "保山市",
      "name": "施甸县",
      "id": "530521000000"
    }, {
      "city": "保山市",
      "name": "龙陵县",
      "id": "530523000000"
    }, {
      "city": "保山市",
      "name": "昌宁县",
      "id": "530524000000"
    }, {
      "city": "保山市",
      "name": "腾冲市",
      "id": "530581000000"
    }],
    "530600000000": [{
      "city": "昭通市",
      "name": "市辖区",
      "id": "530601000000"
    }, {
      "city": "昭通市",
      "name": "昭阳区",
      "id": "530602000000"
    }, {
      "city": "昭通市",
      "name": "鲁甸县",
      "id": "530621000000"
    }, {
      "city": "昭通市",
      "name": "巧家县",
      "id": "530622000000"
    }, {
      "city": "昭通市",
      "name": "盐津县",
      "id": "530623000000"
    }, {
      "city": "昭通市",
      "name": "大关县",
      "id": "530624000000"
    }, {
      "city": "昭通市",
      "name": "永善县",
      "id": "530625000000"
    }, {
      "city": "昭通市",
      "name": "绥江县",
      "id": "530626000000"
    }, {
      "city": "昭通市",
      "name": "镇雄县",
      "id": "530627000000"
    }, {
      "city": "昭通市",
      "name": "彝良县",
      "id": "530628000000"
    }, {
      "city": "昭通市",
      "name": "威信县",
      "id": "530629000000"
    }, {
      "city": "昭通市",
      "name": "水富市",
      "id": "530681000000"
    }],
    "530700000000": [{
      "city": "丽江市",
      "name": "市辖区",
      "id": "530701000000"
    }, {
      "city": "丽江市",
      "name": "古城区",
      "id": "530702000000"
    }, {
      "city": "丽江市",
      "name": "玉龙纳西族自治县",
      "id": "530721000000"
    }, {
      "city": "丽江市",
      "name": "永胜县",
      "id": "530722000000"
    }, {
      "city": "丽江市",
      "name": "华坪县",
      "id": "530723000000"
    }, {
      "city": "丽江市",
      "name": "宁蒗彝族自治县",
      "id": "530724000000"
    }],
    "530800000000": [{
      "city": "普洱市",
      "name": "市辖区",
      "id": "530801000000"
    }, {
      "city": "普洱市",
      "name": "思茅区",
      "id": "530802000000"
    }, {
      "city": "普洱市",
      "name": "宁洱哈尼族彝族自治县",
      "id": "530821000000"
    }, {
      "city": "普洱市",
      "name": "墨江哈尼族自治县",
      "id": "530822000000"
    }, {
      "city": "普洱市",
      "name": "景东彝族自治县",
      "id": "530823000000"
    }, {
      "city": "普洱市",
      "name": "景谷傣族彝族自治县",
      "id": "530824000000"
    }, {
      "city": "普洱市",
      "name": "镇沅彝族哈尼族拉祜族自治县",
      "id": "530825000000"
    }, {
      "city": "普洱市",
      "name": "江城哈尼族彝族自治县",
      "id": "530826000000"
    }, {
      "city": "普洱市",
      "name": "孟连傣族拉祜族佤族自治县",
      "id": "530827000000"
    }, {
      "city": "普洱市",
      "name": "澜沧拉祜族自治县",
      "id": "530828000000"
    }, {
      "city": "普洱市",
      "name": "西盟佤族自治县",
      "id": "530829000000"
    }],
    "530900000000": [{
      "city": "临沧市",
      "name": "市辖区",
      "id": "530901000000"
    }, {
      "city": "临沧市",
      "name": "临翔区",
      "id": "530902000000"
    }, {
      "city": "临沧市",
      "name": "凤庆县",
      "id": "530921000000"
    }, {
      "city": "临沧市",
      "name": "云县",
      "id": "530922000000"
    }, {
      "city": "临沧市",
      "name": "永德县",
      "id": "530923000000"
    }, {
      "city": "临沧市",
      "name": "镇康县",
      "id": "530924000000"
    }, {
      "city": "临沧市",
      "name": "双江拉祜族佤族布朗族傣族自治县",
      "id": "530925000000"
    }, {
      "city": "临沧市",
      "name": "耿马傣族佤族自治县",
      "id": "530926000000"
    }, {
      "city": "临沧市",
      "name": "沧源佤族自治县",
      "id": "530927000000"
    }],
    "532300000000": [{
      "city": "楚雄彝族自治州",
      "name": "楚雄市",
      "id": "532301000000"
    }, {
      "city": "楚雄彝族自治州",
      "name": "双柏县",
      "id": "532322000000"
    }, {
      "city": "楚雄彝族自治州",
      "name": "牟定县",
      "id": "532323000000"
    }, {
      "city": "楚雄彝族自治州",
      "name": "南华县",
      "id": "532324000000"
    }, {
      "city": "楚雄彝族自治州",
      "name": "姚安县",
      "id": "532325000000"
    }, {
      "city": "楚雄彝族自治州",
      "name": "大姚县",
      "id": "532326000000"
    }, {
      "city": "楚雄彝族自治州",
      "name": "永仁县",
      "id": "532327000000"
    }, {
      "city": "楚雄彝族自治州",
      "name": "元谋县",
      "id": "532328000000"
    }, {
      "city": "楚雄彝族自治州",
      "name": "武定县",
      "id": "532329000000"
    }, {
      "city": "楚雄彝族自治州",
      "name": "禄丰县",
      "id": "532331000000"
    }],
    "532500000000": [{
      "city": "红河哈尼族彝族自治州",
      "name": "个旧市",
      "id": "532501000000"
    }, {
      "city": "红河哈尼族彝族自治州",
      "name": "开远市",
      "id": "532502000000"
    }, {
      "city": "红河哈尼族彝族自治州",
      "name": "蒙自市",
      "id": "532503000000"
    }, {
      "city": "红河哈尼族彝族自治州",
      "name": "弥勒市",
      "id": "532504000000"
    }, {
      "city": "红河哈尼族彝族自治州",
      "name": "屏边苗族自治县",
      "id": "532523000000"
    }, {
      "city": "红河哈尼族彝族自治州",
      "name": "建水县",
      "id": "532524000000"
    }, {
      "city": "红河哈尼族彝族自治州",
      "name": "石屏县",
      "id": "532525000000"
    }, {
      "city": "红河哈尼族彝族自治州",
      "name": "泸西县",
      "id": "532527000000"
    }, {
      "city": "红河哈尼族彝族自治州",
      "name": "元阳县",
      "id": "532528000000"
    }, {
      "city": "红河哈尼族彝族自治州",
      "name": "红河县",
      "id": "532529000000"
    }, {
      "city": "红河哈尼族彝族自治州",
      "name": "金平苗族瑶族傣族自治县",
      "id": "532530000000"
    }, {
      "city": "红河哈尼族彝族自治州",
      "name": "绿春县",
      "id": "532531000000"
    }, {
      "city": "红河哈尼族彝族自治州",
      "name": "河口瑶族自治县",
      "id": "532532000000"
    }],
    "532600000000": [{
      "city": "文山壮族苗族自治州",
      "name": "文山市",
      "id": "532601000000"
    }, {
      "city": "文山壮族苗族自治州",
      "name": "砚山县",
      "id": "532622000000"
    }, {
      "city": "文山壮族苗族自治州",
      "name": "西畴县",
      "id": "532623000000"
    }, {
      "city": "文山壮族苗族自治州",
      "name": "麻栗坡县",
      "id": "532624000000"
    }, {
      "city": "文山壮族苗族自治州",
      "name": "马关县",
      "id": "532625000000"
    }, {
      "city": "文山壮族苗族自治州",
      "name": "丘北县",
      "id": "532626000000"
    }, {
      "city": "文山壮族苗族自治州",
      "name": "广南县",
      "id": "532627000000"
    }, {
      "city": "文山壮族苗族自治州",
      "name": "富宁县",
      "id": "532628000000"
    }],
    "532800000000": [{
      "city": "西双版纳傣族自治州",
      "name": "景洪市",
      "id": "532801000000"
    }, {
      "city": "西双版纳傣族自治州",
      "name": "勐海县",
      "id": "532822000000"
    }, {
      "city": "西双版纳傣族自治州",
      "name": "勐腊县",
      "id": "532823000000"
    }],
    "532900000000": [{
      "city": "大理白族自治州",
      "name": "大理市",
      "id": "532901000000"
    }, {
      "city": "大理白族自治州",
      "name": "漾濞彝族自治县",
      "id": "532922000000"
    }, {
      "city": "大理白族自治州",
      "name": "祥云县",
      "id": "532923000000"
    }, {
      "city": "大理白族自治州",
      "name": "宾川县",
      "id": "532924000000"
    }, {
      "city": "大理白族自治州",
      "name": "弥渡县",
      "id": "532925000000"
    }, {
      "city": "大理白族自治州",
      "name": "南涧彝族自治县",
      "id": "532926000000"
    }, {
      "city": "大理白族自治州",
      "name": "巍山彝族回族自治县",
      "id": "532927000000"
    }, {
      "city": "大理白族自治州",
      "name": "永平县",
      "id": "532928000000"
    }, {
      "city": "大理白族自治州",
      "name": "云龙县",
      "id": "532929000000"
    }, {
      "city": "大理白族自治州",
      "name": "洱源县",
      "id": "532930000000"
    }, {
      "city": "大理白族自治州",
      "name": "剑川县",
      "id": "532931000000"
    }, {
      "city": "大理白族自治州",
      "name": "鹤庆县",
      "id": "532932000000"
    }],
    "533100000000": [{
      "city": "德宏傣族景颇族自治州",
      "name": "瑞丽市",
      "id": "533102000000"
    }, {
      "city": "德宏傣族景颇族自治州",
      "name": "芒市",
      "id": "533103000000"
    }, {
      "city": "德宏傣族景颇族自治州",
      "name": "梁河县",
      "id": "533122000000"
    }, {
      "city": "德宏傣族景颇族自治州",
      "name": "盈江县",
      "id": "533123000000"
    }, {
      "city": "德宏傣族景颇族自治州",
      "name": "陇川县",
      "id": "533124000000"
    }],
    "533300000000": [{
      "city": "怒江傈僳族自治州",
      "name": "泸水市",
      "id": "533301000000"
    }, {
      "city": "怒江傈僳族自治州",
      "name": "福贡县",
      "id": "533323000000"
    }, {
      "city": "怒江傈僳族自治州",
      "name": "贡山独龙族怒族自治县",
      "id": "533324000000"
    }, {
      "city": "怒江傈僳族自治州",
      "name": "兰坪白族普米族自治县",
      "id": "533325000000"
    }],
    "533400000000": [{
      "city": "迪庆藏族自治州",
      "name": "香格里拉市",
      "id": "533401000000"
    }, {
      "city": "迪庆藏族自治州",
      "name": "德钦县",
      "id": "533422000000"
    }, {
      "city": "迪庆藏族自治州",
      "name": "维西傈僳族自治县",
      "id": "533423000000"
    }],
    "540100000000": [{
      "city": "拉萨市",
      "name": "市辖区",
      "id": "540101000000"
    }, {
      "city": "拉萨市",
      "name": "城关区",
      "id": "540102000000"
    }, {
      "city": "拉萨市",
      "name": "堆龙德庆区",
      "id": "540103000000"
    }, {
      "city": "拉萨市",
      "name": "达孜区",
      "id": "540104000000"
    }, {
      "city": "拉萨市",
      "name": "林周县",
      "id": "540121000000"
    }, {
      "city": "拉萨市",
      "name": "当雄县",
      "id": "540122000000"
    }, {
      "city": "拉萨市",
      "name": "尼木县",
      "id": "540123000000"
    }, {
      "city": "拉萨市",
      "name": "曲水县",
      "id": "540124000000"
    }, {
      "city": "拉萨市",
      "name": "墨竹工卡县",
      "id": "540127000000"
    }, {
      "city": "拉萨市",
      "name": "格尔木藏青工业园区",
      "id": "540171000000"
    }, {
      "city": "拉萨市",
      "name": "拉萨经济技术开发区",
      "id": "540172000000"
    }, {
      "city": "拉萨市",
      "name": "西藏文化旅游创意园区",
      "id": "540173000000"
    }, {
      "city": "拉萨市",
      "name": "达孜工业园区",
      "id": "540174000000"
    }],
    "540200000000": [{
      "city": "日喀则市",
      "name": "桑珠孜区",
      "id": "540202000000"
    }, {
      "city": "日喀则市",
      "name": "南木林县",
      "id": "540221000000"
    }, {
      "city": "日喀则市",
      "name": "江孜县",
      "id": "540222000000"
    }, {
      "city": "日喀则市",
      "name": "定日县",
      "id": "540223000000"
    }, {
      "city": "日喀则市",
      "name": "萨迦县",
      "id": "540224000000"
    }, {
      "city": "日喀则市",
      "name": "拉孜县",
      "id": "540225000000"
    }, {
      "city": "日喀则市",
      "name": "昂仁县",
      "id": "540226000000"
    }, {
      "city": "日喀则市",
      "name": "谢通门县",
      "id": "540227000000"
    }, {
      "city": "日喀则市",
      "name": "白朗县",
      "id": "540228000000"
    }, {
      "city": "日喀则市",
      "name": "仁布县",
      "id": "540229000000"
    }, {
      "city": "日喀则市",
      "name": "康马县",
      "id": "540230000000"
    }, {
      "city": "日喀则市",
      "name": "定结县",
      "id": "540231000000"
    }, {
      "city": "日喀则市",
      "name": "仲巴县",
      "id": "540232000000"
    }, {
      "city": "日喀则市",
      "name": "亚东县",
      "id": "540233000000"
    }, {
      "city": "日喀则市",
      "name": "吉隆县",
      "id": "540234000000"
    }, {
      "city": "日喀则市",
      "name": "聂拉木县",
      "id": "540235000000"
    }, {
      "city": "日喀则市",
      "name": "萨嘎县",
      "id": "540236000000"
    }, {
      "city": "日喀则市",
      "name": "岗巴县",
      "id": "540237000000"
    }],
    "540300000000": [{
      "city": "昌都市",
      "name": "卡若区",
      "id": "540302000000"
    }, {
      "city": "昌都市",
      "name": "江达县",
      "id": "540321000000"
    }, {
      "city": "昌都市",
      "name": "贡觉县",
      "id": "540322000000"
    }, {
      "city": "昌都市",
      "name": "类乌齐县",
      "id": "540323000000"
    }, {
      "city": "昌都市",
      "name": "丁青县",
      "id": "540324000000"
    }, {
      "city": "昌都市",
      "name": "察雅县",
      "id": "540325000000"
    }, {
      "city": "昌都市",
      "name": "八宿县",
      "id": "540326000000"
    }, {
      "city": "昌都市",
      "name": "左贡县",
      "id": "540327000000"
    }, {
      "city": "昌都市",
      "name": "芒康县",
      "id": "540328000000"
    }, {
      "city": "昌都市",
      "name": "洛隆县",
      "id": "540329000000"
    }, {
      "city": "昌都市",
      "name": "边坝县",
      "id": "540330000000"
    }],
    "540400000000": [{
      "city": "林芝市",
      "name": "巴宜区",
      "id": "540402000000"
    }, {
      "city": "林芝市",
      "name": "工布江达县",
      "id": "540421000000"
    }, {
      "city": "林芝市",
      "name": "米林县",
      "id": "540422000000"
    }, {
      "city": "林芝市",
      "name": "墨脱县",
      "id": "540423000000"
    }, {
      "city": "林芝市",
      "name": "波密县",
      "id": "540424000000"
    }, {
      "city": "林芝市",
      "name": "察隅县",
      "id": "540425000000"
    }, {
      "city": "林芝市",
      "name": "朗县",
      "id": "540426000000"
    }],
    "540500000000": [{
      "city": "山南市",
      "name": "市辖区",
      "id": "540501000000"
    }, {
      "city": "山南市",
      "name": "乃东区",
      "id": "540502000000"
    }, {
      "city": "山南市",
      "name": "扎囊县",
      "id": "540521000000"
    }, {
      "city": "山南市",
      "name": "贡嘎县",
      "id": "540522000000"
    }, {
      "city": "山南市",
      "name": "桑日县",
      "id": "540523000000"
    }, {
      "city": "山南市",
      "name": "琼结县",
      "id": "540524000000"
    }, {
      "city": "山南市",
      "name": "曲松县",
      "id": "540525000000"
    }, {
      "city": "山南市",
      "name": "措美县",
      "id": "540526000000"
    }, {
      "city": "山南市",
      "name": "洛扎县",
      "id": "540527000000"
    }, {
      "city": "山南市",
      "name": "加查县",
      "id": "540528000000"
    }, {
      "city": "山南市",
      "name": "隆子县",
      "id": "540529000000"
    }, {
      "city": "山南市",
      "name": "错那县",
      "id": "540530000000"
    }, {
      "city": "山南市",
      "name": "浪卡子县",
      "id": "540531000000"
    }],
    "540600000000": [{
      "city": "那曲市",
      "name": "色尼区",
      "id": "540602000000"
    }, {
      "city": "那曲市",
      "name": "嘉黎县",
      "id": "540621000000"
    }, {
      "city": "那曲市",
      "name": "比如县",
      "id": "540622000000"
    }, {
      "city": "那曲市",
      "name": "聂荣县",
      "id": "540623000000"
    }, {
      "city": "那曲市",
      "name": "安多县",
      "id": "540624000000"
    }, {
      "city": "那曲市",
      "name": "申扎县",
      "id": "540625000000"
    }, {
      "city": "那曲市",
      "name": "索县",
      "id": "540626000000"
    }, {
      "city": "那曲市",
      "name": "班戈县",
      "id": "540627000000"
    }, {
      "city": "那曲市",
      "name": "巴青县",
      "id": "540628000000"
    }, {
      "city": "那曲市",
      "name": "尼玛县",
      "id": "540629000000"
    }, {
      "city": "那曲市",
      "name": "双湖县",
      "id": "540630000000"
    }],
    "542500000000": [{
      "city": "阿里地区",
      "name": "普兰县",
      "id": "542521000000"
    }, {
      "city": "阿里地区",
      "name": "札达县",
      "id": "542522000000"
    }, {
      "city": "阿里地区",
      "name": "噶尔县",
      "id": "542523000000"
    }, {
      "city": "阿里地区",
      "name": "日土县",
      "id": "542524000000"
    }, {
      "city": "阿里地区",
      "name": "革吉县",
      "id": "542525000000"
    }, {
      "city": "阿里地区",
      "name": "改则县",
      "id": "542526000000"
    }, {
      "city": "阿里地区",
      "name": "措勤县",
      "id": "542527000000"
    }],
    "610100000000": [{
      "city": "西安市",
      "name": "市辖区",
      "id": "610101000000"
    }, {
      "city": "西安市",
      "name": "新城区",
      "id": "610102000000"
    }, {
      "city": "西安市",
      "name": "碑林区",
      "id": "610103000000"
    }, {
      "city": "西安市",
      "name": "莲湖区",
      "id": "610104000000"
    }, {
      "city": "西安市",
      "name": "灞桥区",
      "id": "610111000000"
    }, {
      "city": "西安市",
      "name": "未央区",
      "id": "610112000000"
    }, {
      "city": "西安市",
      "name": "雁塔区",
      "id": "610113000000"
    }, {
      "city": "西安市",
      "name": "阎良区",
      "id": "610114000000"
    }, {
      "city": "西安市",
      "name": "临潼区",
      "id": "610115000000"
    }, {
      "city": "西安市",
      "name": "长安区",
      "id": "610116000000"
    }, {
      "city": "西安市",
      "name": "高陵区",
      "id": "610117000000"
    }, {
      "city": "西安市",
      "name": "鄠邑区",
      "id": "610118000000"
    }, {
      "city": "西安市",
      "name": "蓝田县",
      "id": "610122000000"
    }, {
      "city": "西安市",
      "name": "周至县",
      "id": "610124000000"
    }],
    "610200000000": [{
      "city": "铜川市",
      "name": "市辖区",
      "id": "610201000000"
    }, {
      "city": "铜川市",
      "name": "王益区",
      "id": "610202000000"
    }, {
      "city": "铜川市",
      "name": "印台区",
      "id": "610203000000"
    }, {
      "city": "铜川市",
      "name": "耀州区",
      "id": "610204000000"
    }, {
      "city": "铜川市",
      "name": "宜君县",
      "id": "610222000000"
    }],
    "610300000000": [{
      "city": "宝鸡市",
      "name": "市辖区",
      "id": "610301000000"
    }, {
      "city": "宝鸡市",
      "name": "渭滨区",
      "id": "610302000000"
    }, {
      "city": "宝鸡市",
      "name": "金台区",
      "id": "610303000000"
    }, {
      "city": "宝鸡市",
      "name": "陈仓区",
      "id": "610304000000"
    }, {
      "city": "宝鸡市",
      "name": "凤翔县",
      "id": "610322000000"
    }, {
      "city": "宝鸡市",
      "name": "岐山县",
      "id": "610323000000"
    }, {
      "city": "宝鸡市",
      "name": "扶风县",
      "id": "610324000000"
    }, {
      "city": "宝鸡市",
      "name": "眉县",
      "id": "610326000000"
    }, {
      "city": "宝鸡市",
      "name": "陇县",
      "id": "610327000000"
    }, {
      "city": "宝鸡市",
      "name": "千阳县",
      "id": "610328000000"
    }, {
      "city": "宝鸡市",
      "name": "麟游县",
      "id": "610329000000"
    }, {
      "city": "宝鸡市",
      "name": "凤县",
      "id": "610330000000"
    }, {
      "city": "宝鸡市",
      "name": "太白县",
      "id": "610331000000"
    }],
    "610400000000": [{
      "city": "咸阳市",
      "name": "市辖区",
      "id": "610401000000"
    }, {
      "city": "咸阳市",
      "name": "秦都区",
      "id": "610402000000"
    }, {
      "city": "咸阳市",
      "name": "杨陵区",
      "id": "610403000000"
    }, {
      "city": "咸阳市",
      "name": "渭城区",
      "id": "610404000000"
    }, {
      "city": "咸阳市",
      "name": "三原县",
      "id": "610422000000"
    }, {
      "city": "咸阳市",
      "name": "泾阳县",
      "id": "610423000000"
    }, {
      "city": "咸阳市",
      "name": "乾县",
      "id": "610424000000"
    }, {
      "city": "咸阳市",
      "name": "礼泉县",
      "id": "610425000000"
    }, {
      "city": "咸阳市",
      "name": "永寿县",
      "id": "610426000000"
    }, {
      "city": "咸阳市",
      "name": "长武县",
      "id": "610428000000"
    }, {
      "city": "咸阳市",
      "name": "旬邑县",
      "id": "610429000000"
    }, {
      "city": "咸阳市",
      "name": "淳化县",
      "id": "610430000000"
    }, {
      "city": "咸阳市",
      "name": "武功县",
      "id": "610431000000"
    }, {
      "city": "咸阳市",
      "name": "兴平市",
      "id": "610481000000"
    }, {
      "city": "咸阳市",
      "name": "彬州市",
      "id": "610482000000"
    }],
    "610500000000": [{
      "city": "渭南市",
      "name": "市辖区",
      "id": "610501000000"
    }, {
      "city": "渭南市",
      "name": "临渭区",
      "id": "610502000000"
    }, {
      "city": "渭南市",
      "name": "华州区",
      "id": "610503000000"
    }, {
      "city": "渭南市",
      "name": "潼关县",
      "id": "610522000000"
    }, {
      "city": "渭南市",
      "name": "大荔县",
      "id": "610523000000"
    }, {
      "city": "渭南市",
      "name": "合阳县",
      "id": "610524000000"
    }, {
      "city": "渭南市",
      "name": "澄城县",
      "id": "610525000000"
    }, {
      "city": "渭南市",
      "name": "蒲城县",
      "id": "610526000000"
    }, {
      "city": "渭南市",
      "name": "白水县",
      "id": "610527000000"
    }, {
      "city": "渭南市",
      "name": "富平县",
      "id": "610528000000"
    }, {
      "city": "渭南市",
      "name": "韩城市",
      "id": "610581000000"
    }, {
      "city": "渭南市",
      "name": "华阴市",
      "id": "610582000000"
    }],
    "610600000000": [{
      "city": "延安市",
      "name": "市辖区",
      "id": "610601000000"
    }, {
      "city": "延安市",
      "name": "宝塔区",
      "id": "610602000000"
    }, {
      "city": "延安市",
      "name": "安塞区",
      "id": "610603000000"
    }, {
      "city": "延安市",
      "name": "延长县",
      "id": "610621000000"
    }, {
      "city": "延安市",
      "name": "延川县",
      "id": "610622000000"
    }, {
      "city": "延安市",
      "name": "子长县",
      "id": "610623000000"
    }, {
      "city": "延安市",
      "name": "志丹县",
      "id": "610625000000"
    }, {
      "city": "延安市",
      "name": "吴起县",
      "id": "610626000000"
    }, {
      "city": "延安市",
      "name": "甘泉县",
      "id": "610627000000"
    }, {
      "city": "延安市",
      "name": "富县",
      "id": "610628000000"
    }, {
      "city": "延安市",
      "name": "洛川县",
      "id": "610629000000"
    }, {
      "city": "延安市",
      "name": "宜川县",
      "id": "610630000000"
    }, {
      "city": "延安市",
      "name": "黄龙县",
      "id": "610631000000"
    }, {
      "city": "延安市",
      "name": "黄陵县",
      "id": "610632000000"
    }],
    "610700000000": [{
      "city": "汉中市",
      "name": "市辖区",
      "id": "610701000000"
    }, {
      "city": "汉中市",
      "name": "汉台区",
      "id": "610702000000"
    }, {
      "city": "汉中市",
      "name": "南郑区",
      "id": "610703000000"
    }, {
      "city": "汉中市",
      "name": "城固县",
      "id": "610722000000"
    }, {
      "city": "汉中市",
      "name": "洋县",
      "id": "610723000000"
    }, {
      "city": "汉中市",
      "name": "西乡县",
      "id": "610724000000"
    }, {
      "city": "汉中市",
      "name": "勉县",
      "id": "610725000000"
    }, {
      "city": "汉中市",
      "name": "宁强县",
      "id": "610726000000"
    }, {
      "city": "汉中市",
      "name": "略阳县",
      "id": "610727000000"
    }, {
      "city": "汉中市",
      "name": "镇巴县",
      "id": "610728000000"
    }, {
      "city": "汉中市",
      "name": "留坝县",
      "id": "610729000000"
    }, {
      "city": "汉中市",
      "name": "佛坪县",
      "id": "610730000000"
    }],
    "610800000000": [{
      "city": "榆林市",
      "name": "市辖区",
      "id": "610801000000"
    }, {
      "city": "榆林市",
      "name": "榆阳区",
      "id": "610802000000"
    }, {
      "city": "榆林市",
      "name": "横山区",
      "id": "610803000000"
    }, {
      "city": "榆林市",
      "name": "府谷县",
      "id": "610822000000"
    }, {
      "city": "榆林市",
      "name": "靖边县",
      "id": "610824000000"
    }, {
      "city": "榆林市",
      "name": "定边县",
      "id": "610825000000"
    }, {
      "city": "榆林市",
      "name": "绥德县",
      "id": "610826000000"
    }, {
      "city": "榆林市",
      "name": "米脂县",
      "id": "610827000000"
    }, {
      "city": "榆林市",
      "name": "佳县",
      "id": "610828000000"
    }, {
      "city": "榆林市",
      "name": "吴堡县",
      "id": "610829000000"
    }, {
      "city": "榆林市",
      "name": "清涧县",
      "id": "610830000000"
    }, {
      "city": "榆林市",
      "name": "子洲县",
      "id": "610831000000"
    }, {
      "city": "榆林市",
      "name": "神木市",
      "id": "610881000000"
    }],
    "610900000000": [{
      "city": "安康市",
      "name": "市辖区",
      "id": "610901000000"
    }, {
      "city": "安康市",
      "name": "汉滨区",
      "id": "610902000000"
    }, {
      "city": "安康市",
      "name": "汉阴县",
      "id": "610921000000"
    }, {
      "city": "安康市",
      "name": "石泉县",
      "id": "610922000000"
    }, {
      "city": "安康市",
      "name": "宁陕县",
      "id": "610923000000"
    }, {
      "city": "安康市",
      "name": "紫阳县",
      "id": "610924000000"
    }, {
      "city": "安康市",
      "name": "岚皋县",
      "id": "610925000000"
    }, {
      "city": "安康市",
      "name": "平利县",
      "id": "610926000000"
    }, {
      "city": "安康市",
      "name": "镇坪县",
      "id": "610927000000"
    }, {
      "city": "安康市",
      "name": "旬阳县",
      "id": "610928000000"
    }, {
      "city": "安康市",
      "name": "白河县",
      "id": "610929000000"
    }],
    "611000000000": [{
      "city": "商洛市",
      "name": "市辖区",
      "id": "611001000000"
    }, {
      "city": "商洛市",
      "name": "商州区",
      "id": "611002000000"
    }, {
      "city": "商洛市",
      "name": "洛南县",
      "id": "611021000000"
    }, {
      "city": "商洛市",
      "name": "丹凤县",
      "id": "611022000000"
    }, {
      "city": "商洛市",
      "name": "商南县",
      "id": "611023000000"
    }, {
      "city": "商洛市",
      "name": "山阳县",
      "id": "611024000000"
    }, {
      "city": "商洛市",
      "name": "镇安县",
      "id": "611025000000"
    }, {
      "city": "商洛市",
      "name": "柞水县",
      "id": "611026000000"
    }],
    "620100000000": [{
      "city": "兰州市",
      "name": "市辖区",
      "id": "620101000000"
    }, {
      "city": "兰州市",
      "name": "城关区",
      "id": "620102000000"
    }, {
      "city": "兰州市",
      "name": "七里河区",
      "id": "620103000000"
    }, {
      "city": "兰州市",
      "name": "西固区",
      "id": "620104000000"
    }, {
      "city": "兰州市",
      "name": "安宁区",
      "id": "620105000000"
    }, {
      "city": "兰州市",
      "name": "红古区",
      "id": "620111000000"
    }, {
      "city": "兰州市",
      "name": "永登县",
      "id": "620121000000"
    }, {
      "city": "兰州市",
      "name": "皋兰县",
      "id": "620122000000"
    }, {
      "city": "兰州市",
      "name": "榆中县",
      "id": "620123000000"
    }, {
      "city": "兰州市",
      "name": "兰州新区",
      "id": "620171000000"
    }],
    "620200000000": [{
      "city": "嘉峪关市",
      "name": "市辖区",
      "id": "620201000000"
    }],
    "620300000000": [{
      "city": "金昌市",
      "name": "市辖区",
      "id": "620301000000"
    }, {
      "city": "金昌市",
      "name": "金川区",
      "id": "620302000000"
    }, {
      "city": "金昌市",
      "name": "永昌县",
      "id": "620321000000"
    }],
    "620400000000": [{
      "city": "白银市",
      "name": "市辖区",
      "id": "620401000000"
    }, {
      "city": "白银市",
      "name": "白银区",
      "id": "620402000000"
    }, {
      "city": "白银市",
      "name": "平川区",
      "id": "620403000000"
    }, {
      "city": "白银市",
      "name": "靖远县",
      "id": "620421000000"
    }, {
      "city": "白银市",
      "name": "会宁县",
      "id": "620422000000"
    }, {
      "city": "白银市",
      "name": "景泰县",
      "id": "620423000000"
    }],
    "620500000000": [{
      "city": "天水市",
      "name": "市辖区",
      "id": "620501000000"
    }, {
      "city": "天水市",
      "name": "秦州区",
      "id": "620502000000"
    }, {
      "city": "天水市",
      "name": "麦积区",
      "id": "620503000000"
    }, {
      "city": "天水市",
      "name": "清水县",
      "id": "620521000000"
    }, {
      "city": "天水市",
      "name": "秦安县",
      "id": "620522000000"
    }, {
      "city": "天水市",
      "name": "甘谷县",
      "id": "620523000000"
    }, {
      "city": "天水市",
      "name": "武山县",
      "id": "620524000000"
    }, {
      "city": "天水市",
      "name": "张家川回族自治县",
      "id": "620525000000"
    }],
    "620600000000": [{
      "city": "武威市",
      "name": "市辖区",
      "id": "620601000000"
    }, {
      "city": "武威市",
      "name": "凉州区",
      "id": "620602000000"
    }, {
      "city": "武威市",
      "name": "民勤县",
      "id": "620621000000"
    }, {
      "city": "武威市",
      "name": "古浪县",
      "id": "620622000000"
    }, {
      "city": "武威市",
      "name": "天祝藏族自治县",
      "id": "620623000000"
    }],
    "620700000000": [{
      "city": "张掖市",
      "name": "市辖区",
      "id": "620701000000"
    }, {
      "city": "张掖市",
      "name": "甘州区",
      "id": "620702000000"
    }, {
      "city": "张掖市",
      "name": "肃南裕固族自治县",
      "id": "620721000000"
    }, {
      "city": "张掖市",
      "name": "民乐县",
      "id": "620722000000"
    }, {
      "city": "张掖市",
      "name": "临泽县",
      "id": "620723000000"
    }, {
      "city": "张掖市",
      "name": "高台县",
      "id": "620724000000"
    }, {
      "city": "张掖市",
      "name": "山丹县",
      "id": "620725000000"
    }],
    "620800000000": [{
      "city": "平凉市",
      "name": "市辖区",
      "id": "620801000000"
    }, {
      "city": "平凉市",
      "name": "崆峒区",
      "id": "620802000000"
    }, {
      "city": "平凉市",
      "name": "泾川县",
      "id": "620821000000"
    }, {
      "city": "平凉市",
      "name": "灵台县",
      "id": "620822000000"
    }, {
      "city": "平凉市",
      "name": "崇信县",
      "id": "620823000000"
    }, {
      "city": "平凉市",
      "name": "庄浪县",
      "id": "620825000000"
    }, {
      "city": "平凉市",
      "name": "静宁县",
      "id": "620826000000"
    }, {
      "city": "平凉市",
      "name": "华亭市",
      "id": "620881000000"
    }],
    "620900000000": [{
      "city": "酒泉市",
      "name": "市辖区",
      "id": "620901000000"
    }, {
      "city": "酒泉市",
      "name": "肃州区",
      "id": "620902000000"
    }, {
      "city": "酒泉市",
      "name": "金塔县",
      "id": "620921000000"
    }, {
      "city": "酒泉市",
      "name": "瓜州县",
      "id": "620922000000"
    }, {
      "city": "酒泉市",
      "name": "肃北蒙古族自治县",
      "id": "620923000000"
    }, {
      "city": "酒泉市",
      "name": "阿克塞哈萨克族自治县",
      "id": "620924000000"
    }, {
      "city": "酒泉市",
      "name": "玉门市",
      "id": "620981000000"
    }, {
      "city": "酒泉市",
      "name": "敦煌市",
      "id": "620982000000"
    }],
    "621000000000": [{
      "city": "庆阳市",
      "name": "市辖区",
      "id": "621001000000"
    }, {
      "city": "庆阳市",
      "name": "西峰区",
      "id": "621002000000"
    }, {
      "city": "庆阳市",
      "name": "庆城县",
      "id": "621021000000"
    }, {
      "city": "庆阳市",
      "name": "环县",
      "id": "621022000000"
    }, {
      "city": "庆阳市",
      "name": "华池县",
      "id": "621023000000"
    }, {
      "city": "庆阳市",
      "name": "合水县",
      "id": "621024000000"
    }, {
      "city": "庆阳市",
      "name": "正宁县",
      "id": "621025000000"
    }, {
      "city": "庆阳市",
      "name": "宁县",
      "id": "621026000000"
    }, {
      "city": "庆阳市",
      "name": "镇原县",
      "id": "621027000000"
    }],
    "621100000000": [{
      "city": "定西市",
      "name": "市辖区",
      "id": "621101000000"
    }, {
      "city": "定西市",
      "name": "安定区",
      "id": "621102000000"
    }, {
      "city": "定西市",
      "name": "通渭县",
      "id": "621121000000"
    }, {
      "city": "定西市",
      "name": "陇西县",
      "id": "621122000000"
    }, {
      "city": "定西市",
      "name": "渭源县",
      "id": "621123000000"
    }, {
      "city": "定西市",
      "name": "临洮县",
      "id": "621124000000"
    }, {
      "city": "定西市",
      "name": "漳县",
      "id": "621125000000"
    }, {
      "city": "定西市",
      "name": "岷县",
      "id": "621126000000"
    }],
    "621200000000": [{
      "city": "陇南市",
      "name": "市辖区",
      "id": "621201000000"
    }, {
      "city": "陇南市",
      "name": "武都区",
      "id": "621202000000"
    }, {
      "city": "陇南市",
      "name": "成县",
      "id": "621221000000"
    }, {
      "city": "陇南市",
      "name": "文县",
      "id": "621222000000"
    }, {
      "city": "陇南市",
      "name": "宕昌县",
      "id": "621223000000"
    }, {
      "city": "陇南市",
      "name": "康县",
      "id": "621224000000"
    }, {
      "city": "陇南市",
      "name": "西和县",
      "id": "621225000000"
    }, {
      "city": "陇南市",
      "name": "礼县",
      "id": "621226000000"
    }, {
      "city": "陇南市",
      "name": "徽县",
      "id": "621227000000"
    }, {
      "city": "陇南市",
      "name": "两当县",
      "id": "621228000000"
    }],
    "622900000000": [{
      "city": "临夏回族自治州",
      "name": "临夏市",
      "id": "622901000000"
    }, {
      "city": "临夏回族自治州",
      "name": "临夏县",
      "id": "622921000000"
    }, {
      "city": "临夏回族自治州",
      "name": "康乐县",
      "id": "622922000000"
    }, {
      "city": "临夏回族自治州",
      "name": "永靖县",
      "id": "622923000000"
    }, {
      "city": "临夏回族自治州",
      "name": "广河县",
      "id": "622924000000"
    }, {
      "city": "临夏回族自治州",
      "name": "和政县",
      "id": "622925000000"
    }, {
      "city": "临夏回族自治州",
      "name": "东乡族自治县",
      "id": "622926000000"
    }, {
      "city": "临夏回族自治州",
      "name": "积石山保安族东乡族撒拉族自治县",
      "id": "622927000000"
    }],
    "623000000000": [{
      "city": "甘南藏族自治州",
      "name": "合作市",
      "id": "623001000000"
    }, {
      "city": "甘南藏族自治州",
      "name": "临潭县",
      "id": "623021000000"
    }, {
      "city": "甘南藏族自治州",
      "name": "卓尼县",
      "id": "623022000000"
    }, {
      "city": "甘南藏族自治州",
      "name": "舟曲县",
      "id": "623023000000"
    }, {
      "city": "甘南藏族自治州",
      "name": "迭部县",
      "id": "623024000000"
    }, {
      "city": "甘南藏族自治州",
      "name": "玛曲县",
      "id": "623025000000"
    }, {
      "city": "甘南藏族自治州",
      "name": "碌曲县",
      "id": "623026000000"
    }, {
      "city": "甘南藏族自治州",
      "name": "夏河县",
      "id": "623027000000"
    }],
    "630100000000": [{
      "city": "西宁市",
      "name": "市辖区",
      "id": "630101000000"
    }, {
      "city": "西宁市",
      "name": "城东区",
      "id": "630102000000"
    }, {
      "city": "西宁市",
      "name": "城中区",
      "id": "630103000000"
    }, {
      "city": "西宁市",
      "name": "城西区",
      "id": "630104000000"
    }, {
      "city": "西宁市",
      "name": "城北区",
      "id": "630105000000"
    }, {
      "city": "西宁市",
      "name": "大通回族土族自治县",
      "id": "630121000000"
    }, {
      "city": "西宁市",
      "name": "湟中县",
      "id": "630122000000"
    }, {
      "city": "西宁市",
      "name": "湟源县",
      "id": "630123000000"
    }],
    "630200000000": [{
      "city": "海东市",
      "name": "乐都区",
      "id": "630202000000"
    }, {
      "city": "海东市",
      "name": "平安区",
      "id": "630203000000"
    }, {
      "city": "海东市",
      "name": "民和回族土族自治县",
      "id": "630222000000"
    }, {
      "city": "海东市",
      "name": "互助土族自治县",
      "id": "630223000000"
    }, {
      "city": "海东市",
      "name": "化隆回族自治县",
      "id": "630224000000"
    }, {
      "city": "海东市",
      "name": "循化撒拉族自治县",
      "id": "630225000000"
    }],
    "632200000000": [{
      "city": "海北藏族自治州",
      "name": "门源回族自治县",
      "id": "632221000000"
    }, {
      "city": "海北藏族自治州",
      "name": "祁连县",
      "id": "632222000000"
    }, {
      "city": "海北藏族自治州",
      "name": "海晏县",
      "id": "632223000000"
    }, {
      "city": "海北藏族自治州",
      "name": "刚察县",
      "id": "632224000000"
    }],
    "632300000000": [{
      "city": "黄南藏族自治州",
      "name": "同仁县",
      "id": "632321000000"
    }, {
      "city": "黄南藏族自治州",
      "name": "尖扎县",
      "id": "632322000000"
    }, {
      "city": "黄南藏族自治州",
      "name": "泽库县",
      "id": "632323000000"
    }, {
      "city": "黄南藏族自治州",
      "name": "河南蒙古族自治县",
      "id": "632324000000"
    }],
    "632500000000": [{
      "city": "海南藏族自治州",
      "name": "共和县",
      "id": "632521000000"
    }, {
      "city": "海南藏族自治州",
      "name": "同德县",
      "id": "632522000000"
    }, {
      "city": "海南藏族自治州",
      "name": "贵德县",
      "id": "632523000000"
    }, {
      "city": "海南藏族自治州",
      "name": "兴海县",
      "id": "632524000000"
    }, {
      "city": "海南藏族自治州",
      "name": "贵南县",
      "id": "632525000000"
    }],
    "632600000000": [{
      "city": "果洛藏族自治州",
      "name": "玛沁县",
      "id": "632621000000"
    }, {
      "city": "果洛藏族自治州",
      "name": "班玛县",
      "id": "632622000000"
    }, {
      "city": "果洛藏族自治州",
      "name": "甘德县",
      "id": "632623000000"
    }, {
      "city": "果洛藏族自治州",
      "name": "达日县",
      "id": "632624000000"
    }, {
      "city": "果洛藏族自治州",
      "name": "久治县",
      "id": "632625000000"
    }, {
      "city": "果洛藏族自治州",
      "name": "玛多县",
      "id": "632626000000"
    }],
    "632700000000": [{
      "city": "玉树藏族自治州",
      "name": "玉树市",
      "id": "632701000000"
    }, {
      "city": "玉树藏族自治州",
      "name": "杂多县",
      "id": "632722000000"
    }, {
      "city": "玉树藏族自治州",
      "name": "称多县",
      "id": "632723000000"
    }, {
      "city": "玉树藏族自治州",
      "name": "治多县",
      "id": "632724000000"
    }, {
      "city": "玉树藏族自治州",
      "name": "囊谦县",
      "id": "632725000000"
    }, {
      "city": "玉树藏族自治州",
      "name": "曲麻莱县",
      "id": "632726000000"
    }],
    "632800000000": [{
      "city": "海西蒙古族藏族自治州",
      "name": "格尔木市",
      "id": "632801000000"
    }, {
      "city": "海西蒙古族藏族自治州",
      "name": "德令哈市",
      "id": "632802000000"
    }, {
      "city": "海西蒙古族藏族自治州",
      "name": "茫崖市",
      "id": "632803000000"
    }, {
      "city": "海西蒙古族藏族自治州",
      "name": "乌兰县",
      "id": "632821000000"
    }, {
      "city": "海西蒙古族藏族自治州",
      "name": "都兰县",
      "id": "632822000000"
    }, {
      "city": "海西蒙古族藏族自治州",
      "name": "天峻县",
      "id": "632823000000"
    }, {
      "city": "海西蒙古族藏族自治州",
      "name": "大柴旦行政委员会",
      "id": "632857000000"
    }],
    "640100000000": [{
      "city": "银川市",
      "name": "市辖区",
      "id": "640101000000"
    }, {
      "city": "银川市",
      "name": "兴庆区",
      "id": "640104000000"
    }, {
      "city": "银川市",
      "name": "西夏区",
      "id": "640105000000"
    }, {
      "city": "银川市",
      "name": "金凤区",
      "id": "640106000000"
    }, {
      "city": "银川市",
      "name": "永宁县",
      "id": "640121000000"
    }, {
      "city": "银川市",
      "name": "贺兰县",
      "id": "640122000000"
    }, {
      "city": "银川市",
      "name": "灵武市",
      "id": "640181000000"
    }],
    "640200000000": [{
      "city": "石嘴山市",
      "name": "市辖区",
      "id": "640201000000"
    }, {
      "city": "石嘴山市",
      "name": "大武口区",
      "id": "640202000000"
    }, {
      "city": "石嘴山市",
      "name": "惠农区",
      "id": "640205000000"
    }, {
      "city": "石嘴山市",
      "name": "平罗县",
      "id": "640221000000"
    }],
    "640300000000": [{
      "city": "吴忠市",
      "name": "市辖区",
      "id": "640301000000"
    }, {
      "city": "吴忠市",
      "name": "利通区",
      "id": "640302000000"
    }, {
      "city": "吴忠市",
      "name": "红寺堡区",
      "id": "640303000000"
    }, {
      "city": "吴忠市",
      "name": "盐池县",
      "id": "640323000000"
    }, {
      "city": "吴忠市",
      "name": "同心县",
      "id": "640324000000"
    }, {
      "city": "吴忠市",
      "name": "青铜峡市",
      "id": "640381000000"
    }],
    "640400000000": [{
      "city": "固原市",
      "name": "市辖区",
      "id": "640401000000"
    }, {
      "city": "固原市",
      "name": "原州区",
      "id": "640402000000"
    }, {
      "city": "固原市",
      "name": "西吉县",
      "id": "640422000000"
    }, {
      "city": "固原市",
      "name": "隆德县",
      "id": "640423000000"
    }, {
      "city": "固原市",
      "name": "泾源县",
      "id": "640424000000"
    }, {
      "city": "固原市",
      "name": "彭阳县",
      "id": "640425000000"
    }],
    "640500000000": [{
      "city": "中卫市",
      "name": "市辖区",
      "id": "640501000000"
    }, {
      "city": "中卫市",
      "name": "沙坡头区",
      "id": "640502000000"
    }, {
      "city": "中卫市",
      "name": "中宁县",
      "id": "640521000000"
    }, {
      "city": "中卫市",
      "name": "海原县",
      "id": "640522000000"
    }],
    "650100000000": [{
      "city": "乌鲁木齐市",
      "name": "市辖区",
      "id": "650101000000"
    }, {
      "city": "乌鲁木齐市",
      "name": "天山区",
      "id": "650102000000"
    }, {
      "city": "乌鲁木齐市",
      "name": "沙依巴克区",
      "id": "650103000000"
    }, {
      "city": "乌鲁木齐市",
      "name": "新市区",
      "id": "650104000000"
    }, {
      "city": "乌鲁木齐市",
      "name": "水磨沟区",
      "id": "650105000000"
    }, {
      "city": "乌鲁木齐市",
      "name": "头屯河区",
      "id": "650106000000"
    }, {
      "city": "乌鲁木齐市",
      "name": "达坂城区",
      "id": "650107000000"
    }, {
      "city": "乌鲁木齐市",
      "name": "米东区",
      "id": "650109000000"
    }, {
      "city": "乌鲁木齐市",
      "name": "乌鲁木齐县",
      "id": "650121000000"
    }, {
      "city": "乌鲁木齐市",
      "name": "乌鲁木齐经济技术开发区",
      "id": "650171000000"
    }, {
      "city": "乌鲁木齐市",
      "name": "乌鲁木齐高新技术产业开发区",
      "id": "650172000000"
    }],
    "650200000000": [{
      "city": "克拉玛依市",
      "name": "市辖区",
      "id": "650201000000"
    }, {
      "city": "克拉玛依市",
      "name": "独山子区",
      "id": "650202000000"
    }, {
      "city": "克拉玛依市",
      "name": "克拉玛依区",
      "id": "650203000000"
    }, {
      "city": "克拉玛依市",
      "name": "白碱滩区",
      "id": "650204000000"
    }, {
      "city": "克拉玛依市",
      "name": "乌尔禾区",
      "id": "650205000000"
    }],
    "650400000000": [{
      "city": "吐鲁番市",
      "name": "高昌区",
      "id": "650402000000"
    }, {
      "city": "吐鲁番市",
      "name": "鄯善县",
      "id": "650421000000"
    }, {
      "city": "吐鲁番市",
      "name": "托克逊县",
      "id": "650422000000"
    }],
    "650500000000": [{
      "city": "哈密市",
      "name": "伊州区",
      "id": "650502000000"
    }, {
      "city": "哈密市",
      "name": "巴里坤哈萨克自治县",
      "id": "650521000000"
    }, {
      "city": "哈密市",
      "name": "伊吾县",
      "id": "650522000000"
    }],
    "652300000000": [{
      "city": "昌吉回族自治州",
      "name": "昌吉市",
      "id": "652301000000"
    }, {
      "city": "昌吉回族自治州",
      "name": "阜康市",
      "id": "652302000000"
    }, {
      "city": "昌吉回族自治州",
      "name": "呼图壁县",
      "id": "652323000000"
    }, {
      "city": "昌吉回族自治州",
      "name": "玛纳斯县",
      "id": "652324000000"
    }, {
      "city": "昌吉回族自治州",
      "name": "奇台县",
      "id": "652325000000"
    }, {
      "city": "昌吉回族自治州",
      "name": "吉木萨尔县",
      "id": "652327000000"
    }, {
      "city": "昌吉回族自治州",
      "name": "木垒哈萨克自治县",
      "id": "652328000000"
    }],
    "652700000000": [{
      "city": "博尔塔拉蒙古自治州",
      "name": "博乐市",
      "id": "652701000000"
    }, {
      "city": "博尔塔拉蒙古自治州",
      "name": "阿拉山口市",
      "id": "652702000000"
    }, {
      "city": "博尔塔拉蒙古自治州",
      "name": "精河县",
      "id": "652722000000"
    }, {
      "city": "博尔塔拉蒙古自治州",
      "name": "温泉县",
      "id": "652723000000"
    }],
    "652800000000": [{
      "city": "巴音郭楞蒙古自治州",
      "name": "库尔勒市",
      "id": "652801000000"
    }, {
      "city": "巴音郭楞蒙古自治州",
      "name": "轮台县",
      "id": "652822000000"
    }, {
      "city": "巴音郭楞蒙古自治州",
      "name": "尉犁县",
      "id": "652823000000"
    }, {
      "city": "巴音郭楞蒙古自治州",
      "name": "若羌县",
      "id": "652824000000"
    }, {
      "city": "巴音郭楞蒙古自治州",
      "name": "且末县",
      "id": "652825000000"
    }, {
      "city": "巴音郭楞蒙古自治州",
      "name": "焉耆回族自治县",
      "id": "652826000000"
    }, {
      "city": "巴音郭楞蒙古自治州",
      "name": "和静县",
      "id": "652827000000"
    }, {
      "city": "巴音郭楞蒙古自治州",
      "name": "和硕县",
      "id": "652828000000"
    }, {
      "city": "巴音郭楞蒙古自治州",
      "name": "博湖县",
      "id": "652829000000"
    }, {
      "city": "巴音郭楞蒙古自治州",
      "name": "库尔勒经济技术开发区",
      "id": "652871000000"
    }],
    "652900000000": [{
      "city": "阿克苏地区",
      "name": "阿克苏市",
      "id": "652901000000"
    }, {
      "city": "阿克苏地区",
      "name": "温宿县",
      "id": "652922000000"
    }, {
      "city": "阿克苏地区",
      "name": "库车县",
      "id": "652923000000"
    }, {
      "city": "阿克苏地区",
      "name": "沙雅县",
      "id": "652924000000"
    }, {
      "city": "阿克苏地区",
      "name": "新和县",
      "id": "652925000000"
    }, {
      "city": "阿克苏地区",
      "name": "拜城县",
      "id": "652926000000"
    }, {
      "city": "阿克苏地区",
      "name": "乌什县",
      "id": "652927000000"
    }, {
      "city": "阿克苏地区",
      "name": "阿瓦提县",
      "id": "652928000000"
    }, {
      "city": "阿克苏地区",
      "name": "柯坪县",
      "id": "652929000000"
    }],
    "653000000000": [{
      "city": "克孜勒苏柯尔克孜自治州",
      "name": "阿图什市",
      "id": "653001000000"
    }, {
      "city": "克孜勒苏柯尔克孜自治州",
      "name": "阿克陶县",
      "id": "653022000000"
    }, {
      "city": "克孜勒苏柯尔克孜自治州",
      "name": "阿合奇县",
      "id": "653023000000"
    }, {
      "city": "克孜勒苏柯尔克孜自治州",
      "name": "乌恰县",
      "id": "653024000000"
    }],
    "653100000000": [{
      "city": "喀什地区",
      "name": "喀什市",
      "id": "653101000000"
    }, {
      "city": "喀什地区",
      "name": "疏附县",
      "id": "653121000000"
    }, {
      "city": "喀什地区",
      "name": "疏勒县",
      "id": "653122000000"
    }, {
      "city": "喀什地区",
      "name": "英吉沙县",
      "id": "653123000000"
    }, {
      "city": "喀什地区",
      "name": "泽普县",
      "id": "653124000000"
    }, {
      "city": "喀什地区",
      "name": "莎车县",
      "id": "653125000000"
    }, {
      "city": "喀什地区",
      "name": "叶城县",
      "id": "653126000000"
    }, {
      "city": "喀什地区",
      "name": "麦盖提县",
      "id": "653127000000"
    }, {
      "city": "喀什地区",
      "name": "岳普湖县",
      "id": "653128000000"
    }, {
      "city": "喀什地区",
      "name": "伽师县",
      "id": "653129000000"
    }, {
      "city": "喀什地区",
      "name": "巴楚县",
      "id": "653130000000"
    }, {
      "city": "喀什地区",
      "name": "塔什库尔干塔吉克自治县",
      "id": "653131000000"
    }],
    "653200000000": [{
      "city": "和田地区",
      "name": "和田市",
      "id": "653201000000"
    }, {
      "city": "和田地区",
      "name": "和田县",
      "id": "653221000000"
    }, {
      "city": "和田地区",
      "name": "墨玉县",
      "id": "653222000000"
    }, {
      "city": "和田地区",
      "name": "皮山县",
      "id": "653223000000"
    }, {
      "city": "和田地区",
      "name": "洛浦县",
      "id": "653224000000"
    }, {
      "city": "和田地区",
      "name": "策勒县",
      "id": "653225000000"
    }, {
      "city": "和田地区",
      "name": "于田县",
      "id": "653226000000"
    }, {
      "city": "和田地区",
      "name": "民丰县",
      "id": "653227000000"
    }],
    "654000000000": [{
      "city": "伊犁哈萨克自治州",
      "name": "伊宁市",
      "id": "654002000000"
    }, {
      "city": "伊犁哈萨克自治州",
      "name": "奎屯市",
      "id": "654003000000"
    }, {
      "city": "伊犁哈萨克自治州",
      "name": "霍尔果斯市",
      "id": "654004000000"
    }, {
      "city": "伊犁哈萨克自治州",
      "name": "伊宁县",
      "id": "654021000000"
    }, {
      "city": "伊犁哈萨克自治州",
      "name": "察布查尔锡伯自治县",
      "id": "654022000000"
    }, {
      "city": "伊犁哈萨克自治州",
      "name": "霍城县",
      "id": "654023000000"
    }, {
      "city": "伊犁哈萨克自治州",
      "name": "巩留县",
      "id": "654024000000"
    }, {
      "city": "伊犁哈萨克自治州",
      "name": "新源县",
      "id": "654025000000"
    }, {
      "city": "伊犁哈萨克自治州",
      "name": "昭苏县",
      "id": "654026000000"
    }, {
      "city": "伊犁哈萨克自治州",
      "name": "特克斯县",
      "id": "654027000000"
    }, {
      "city": "伊犁哈萨克自治州",
      "name": "尼勒克县",
      "id": "654028000000"
    }],
    "654200000000": [{
      "city": "塔城地区",
      "name": "塔城市",
      "id": "654201000000"
    }, {
      "city": "塔城地区",
      "name": "乌苏市",
      "id": "654202000000"
    }, {
      "city": "塔城地区",
      "name": "额敏县",
      "id": "654221000000"
    }, {
      "city": "塔城地区",
      "name": "沙湾县",
      "id": "654223000000"
    }, {
      "city": "塔城地区",
      "name": "托里县",
      "id": "654224000000"
    }, {
      "city": "塔城地区",
      "name": "裕民县",
      "id": "654225000000"
    }, {
      "city": "塔城地区",
      "name": "和布克赛尔蒙古自治县",
      "id": "654226000000"
    }],
    "654300000000": [{
      "city": "阿勒泰地区",
      "name": "阿勒泰市",
      "id": "654301000000"
    }, {
      "city": "阿勒泰地区",
      "name": "布尔津县",
      "id": "654321000000"
    }, {
      "city": "阿勒泰地区",
      "name": "富蕴县",
      "id": "654322000000"
    }, {
      "city": "阿勒泰地区",
      "name": "福海县",
      "id": "654323000000"
    }, {
      "city": "阿勒泰地区",
      "name": "哈巴河县",
      "id": "654324000000"
    }, {
      "city": "阿勒泰地区",
      "name": "青河县",
      "id": "654325000000"
    }, {
      "city": "阿勒泰地区",
      "name": "吉木乃县",
      "id": "654326000000"
    }],
    "659000000000": [{
      "city": "自治区直辖县级行政区划",
      "name": "石河子市",
      "id": "659001000000"
    }, {
      "city": "自治区直辖县级行政区划",
      "name": "阿拉尔市",
      "id": "659002000000"
    }, {
      "city": "自治区直辖县级行政区划",
      "name": "图木舒克市",
      "id": "659003000000"
    }, {
      "city": "自治区直辖县级行政区划",
      "name": "五家渠市",
      "id": "659004000000"
    }, {
      "city": "自治区直辖县级行政区划",
      "name": "铁门关市",
      "id": "659006000000"
    }]
  };
  _exports.country = country;
});
;define("location-demo/regions/country_object", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.country_object = void 0;
  let country_object = {
    "110101000000": {
      "city": "市辖区",
      "name": "东城区",
      "id": "110101000000"
    },
    "110102000000": {
      "city": "市辖区",
      "name": "西城区",
      "id": "110102000000"
    },
    "110105000000": {
      "city": "市辖区",
      "name": "朝阳区",
      "id": "110105000000"
    },
    "110106000000": {
      "city": "市辖区",
      "name": "丰台区",
      "id": "110106000000"
    },
    "110107000000": {
      "city": "市辖区",
      "name": "石景山区",
      "id": "110107000000"
    },
    "110108000000": {
      "city": "市辖区",
      "name": "海淀区",
      "id": "110108000000"
    },
    "110109000000": {
      "city": "市辖区",
      "name": "门头沟区",
      "id": "110109000000"
    },
    "110111000000": {
      "city": "市辖区",
      "name": "房山区",
      "id": "110111000000"
    },
    "110112000000": {
      "city": "市辖区",
      "name": "通州区",
      "id": "110112000000"
    },
    "110113000000": {
      "city": "市辖区",
      "name": "顺义区",
      "id": "110113000000"
    },
    "110114000000": {
      "city": "市辖区",
      "name": "昌平区",
      "id": "110114000000"
    },
    "110115000000": {
      "city": "市辖区",
      "name": "大兴区",
      "id": "110115000000"
    },
    "110116000000": {
      "city": "市辖区",
      "name": "怀柔区",
      "id": "110116000000"
    },
    "110117000000": {
      "city": "市辖区",
      "name": "平谷区",
      "id": "110117000000"
    },
    "110118000000": {
      "city": "市辖区",
      "name": "密云区",
      "id": "110118000000"
    },
    "110119000000": {
      "city": "市辖区",
      "name": "延庆区",
      "id": "110119000000"
    },
    "120101000000": {
      "city": "市辖区",
      "name": "和平区",
      "id": "120101000000"
    },
    "120102000000": {
      "city": "市辖区",
      "name": "河东区",
      "id": "120102000000"
    },
    "120103000000": {
      "city": "市辖区",
      "name": "河西区",
      "id": "120103000000"
    },
    "120104000000": {
      "city": "市辖区",
      "name": "南开区",
      "id": "120104000000"
    },
    "120105000000": {
      "city": "市辖区",
      "name": "河北区",
      "id": "120105000000"
    },
    "120106000000": {
      "city": "市辖区",
      "name": "红桥区",
      "id": "120106000000"
    },
    "120110000000": {
      "city": "市辖区",
      "name": "东丽区",
      "id": "120110000000"
    },
    "120111000000": {
      "city": "市辖区",
      "name": "西青区",
      "id": "120111000000"
    },
    "120112000000": {
      "city": "市辖区",
      "name": "津南区",
      "id": "120112000000"
    },
    "120113000000": {
      "city": "市辖区",
      "name": "北辰区",
      "id": "120113000000"
    },
    "120114000000": {
      "city": "市辖区",
      "name": "武清区",
      "id": "120114000000"
    },
    "120115000000": {
      "city": "市辖区",
      "name": "宝坻区",
      "id": "120115000000"
    },
    "120116000000": {
      "city": "市辖区",
      "name": "滨海新区",
      "id": "120116000000"
    },
    "120117000000": {
      "city": "市辖区",
      "name": "宁河区",
      "id": "120117000000"
    },
    "120118000000": {
      "city": "市辖区",
      "name": "静海区",
      "id": "120118000000"
    },
    "120119000000": {
      "city": "市辖区",
      "name": "蓟州区",
      "id": "120119000000"
    },
    "130101000000": {
      "city": "石家庄市",
      "name": "市辖区",
      "id": "130101000000"
    },
    "130102000000": {
      "city": "石家庄市",
      "name": "长安区",
      "id": "130102000000"
    },
    "130104000000": {
      "city": "石家庄市",
      "name": "桥西区",
      "id": "130104000000"
    },
    "130105000000": {
      "city": "石家庄市",
      "name": "新华区",
      "id": "130105000000"
    },
    "130107000000": {
      "city": "石家庄市",
      "name": "井陉矿区",
      "id": "130107000000"
    },
    "130108000000": {
      "city": "石家庄市",
      "name": "裕华区",
      "id": "130108000000"
    },
    "130109000000": {
      "city": "石家庄市",
      "name": "藁城区",
      "id": "130109000000"
    },
    "130110000000": {
      "city": "石家庄市",
      "name": "鹿泉区",
      "id": "130110000000"
    },
    "130111000000": {
      "city": "石家庄市",
      "name": "栾城区",
      "id": "130111000000"
    },
    "130121000000": {
      "city": "石家庄市",
      "name": "井陉县",
      "id": "130121000000"
    },
    "130123000000": {
      "city": "石家庄市",
      "name": "正定县",
      "id": "130123000000"
    },
    "130125000000": {
      "city": "石家庄市",
      "name": "行唐县",
      "id": "130125000000"
    },
    "130126000000": {
      "city": "石家庄市",
      "name": "灵寿县",
      "id": "130126000000"
    },
    "130127000000": {
      "city": "石家庄市",
      "name": "高邑县",
      "id": "130127000000"
    },
    "130128000000": {
      "city": "石家庄市",
      "name": "深泽县",
      "id": "130128000000"
    },
    "130129000000": {
      "city": "石家庄市",
      "name": "赞皇县",
      "id": "130129000000"
    },
    "130130000000": {
      "city": "石家庄市",
      "name": "无极县",
      "id": "130130000000"
    },
    "130131000000": {
      "city": "石家庄市",
      "name": "平山县",
      "id": "130131000000"
    },
    "130132000000": {
      "city": "石家庄市",
      "name": "元氏县",
      "id": "130132000000"
    },
    "130133000000": {
      "city": "石家庄市",
      "name": "赵县",
      "id": "130133000000"
    },
    "130171000000": {
      "city": "石家庄市",
      "name": "石家庄高新技术产业开发区",
      "id": "130171000000"
    },
    "130172000000": {
      "city": "石家庄市",
      "name": "石家庄循环化工园区",
      "id": "130172000000"
    },
    "130181000000": {
      "city": "石家庄市",
      "name": "辛集市",
      "id": "130181000000"
    },
    "130183000000": {
      "city": "石家庄市",
      "name": "晋州市",
      "id": "130183000000"
    },
    "130184000000": {
      "city": "石家庄市",
      "name": "新乐市",
      "id": "130184000000"
    },
    "130201000000": {
      "city": "唐山市",
      "name": "市辖区",
      "id": "130201000000"
    },
    "130202000000": {
      "city": "唐山市",
      "name": "路南区",
      "id": "130202000000"
    },
    "130203000000": {
      "city": "唐山市",
      "name": "路北区",
      "id": "130203000000"
    },
    "130204000000": {
      "city": "唐山市",
      "name": "古冶区",
      "id": "130204000000"
    },
    "130205000000": {
      "city": "唐山市",
      "name": "开平区",
      "id": "130205000000"
    },
    "130207000000": {
      "city": "唐山市",
      "name": "丰南区",
      "id": "130207000000"
    },
    "130208000000": {
      "city": "唐山市",
      "name": "丰润区",
      "id": "130208000000"
    },
    "130209000000": {
      "city": "唐山市",
      "name": "曹妃甸区",
      "id": "130209000000"
    },
    "130224000000": {
      "city": "唐山市",
      "name": "滦南县",
      "id": "130224000000"
    },
    "130225000000": {
      "city": "唐山市",
      "name": "乐亭县",
      "id": "130225000000"
    },
    "130227000000": {
      "city": "唐山市",
      "name": "迁西县",
      "id": "130227000000"
    },
    "130229000000": {
      "city": "唐山市",
      "name": "玉田县",
      "id": "130229000000"
    },
    "130271000000": {
      "city": "唐山市",
      "name": "唐山市芦台经济技术开发区",
      "id": "130271000000"
    },
    "130272000000": {
      "city": "唐山市",
      "name": "唐山市汉沽管理区",
      "id": "130272000000"
    },
    "130273000000": {
      "city": "唐山市",
      "name": "唐山高新技术产业开发区",
      "id": "130273000000"
    },
    "130274000000": {
      "city": "唐山市",
      "name": "河北唐山海港经济开发区",
      "id": "130274000000"
    },
    "130281000000": {
      "city": "唐山市",
      "name": "遵化市",
      "id": "130281000000"
    },
    "130283000000": {
      "city": "唐山市",
      "name": "迁安市",
      "id": "130283000000"
    },
    "130284000000": {
      "city": "唐山市",
      "name": "滦州市",
      "id": "130284000000"
    },
    "130301000000": {
      "city": "秦皇岛市",
      "name": "市辖区",
      "id": "130301000000"
    },
    "130302000000": {
      "city": "秦皇岛市",
      "name": "海港区",
      "id": "130302000000"
    },
    "130303000000": {
      "city": "秦皇岛市",
      "name": "山海关区",
      "id": "130303000000"
    },
    "130304000000": {
      "city": "秦皇岛市",
      "name": "北戴河区",
      "id": "130304000000"
    },
    "130306000000": {
      "city": "秦皇岛市",
      "name": "抚宁区",
      "id": "130306000000"
    },
    "130321000000": {
      "city": "秦皇岛市",
      "name": "青龙满族自治县",
      "id": "130321000000"
    },
    "130322000000": {
      "city": "秦皇岛市",
      "name": "昌黎县",
      "id": "130322000000"
    },
    "130324000000": {
      "city": "秦皇岛市",
      "name": "卢龙县",
      "id": "130324000000"
    },
    "130371000000": {
      "city": "秦皇岛市",
      "name": "秦皇岛市经济技术开发区",
      "id": "130371000000"
    },
    "130372000000": {
      "city": "秦皇岛市",
      "name": "北戴河新区",
      "id": "130372000000"
    },
    "130401000000": {
      "city": "邯郸市",
      "name": "市辖区",
      "id": "130401000000"
    },
    "130402000000": {
      "city": "邯郸市",
      "name": "邯山区",
      "id": "130402000000"
    },
    "130403000000": {
      "city": "邯郸市",
      "name": "丛台区",
      "id": "130403000000"
    },
    "130404000000": {
      "city": "邯郸市",
      "name": "复兴区",
      "id": "130404000000"
    },
    "130406000000": {
      "city": "邯郸市",
      "name": "峰峰矿区",
      "id": "130406000000"
    },
    "130407000000": {
      "city": "邯郸市",
      "name": "肥乡区",
      "id": "130407000000"
    },
    "130408000000": {
      "city": "邯郸市",
      "name": "永年区",
      "id": "130408000000"
    },
    "130423000000": {
      "city": "邯郸市",
      "name": "临漳县",
      "id": "130423000000"
    },
    "130424000000": {
      "city": "邯郸市",
      "name": "成安县",
      "id": "130424000000"
    },
    "130425000000": {
      "city": "邯郸市",
      "name": "大名县",
      "id": "130425000000"
    },
    "130426000000": {
      "city": "邯郸市",
      "name": "涉县",
      "id": "130426000000"
    },
    "130427000000": {
      "city": "邯郸市",
      "name": "磁县",
      "id": "130427000000"
    },
    "130430000000": {
      "city": "邯郸市",
      "name": "邱县",
      "id": "130430000000"
    },
    "130431000000": {
      "city": "邯郸市",
      "name": "鸡泽县",
      "id": "130431000000"
    },
    "130432000000": {
      "city": "邯郸市",
      "name": "广平县",
      "id": "130432000000"
    },
    "130433000000": {
      "city": "邯郸市",
      "name": "馆陶县",
      "id": "130433000000"
    },
    "130434000000": {
      "city": "邯郸市",
      "name": "魏县",
      "id": "130434000000"
    },
    "130435000000": {
      "city": "邯郸市",
      "name": "曲周县",
      "id": "130435000000"
    },
    "130471000000": {
      "city": "邯郸市",
      "name": "邯郸经济技术开发区",
      "id": "130471000000"
    },
    "130473000000": {
      "city": "邯郸市",
      "name": "邯郸冀南新区",
      "id": "130473000000"
    },
    "130481000000": {
      "city": "邯郸市",
      "name": "武安市",
      "id": "130481000000"
    },
    "130501000000": {
      "city": "邢台市",
      "name": "市辖区",
      "id": "130501000000"
    },
    "130502000000": {
      "city": "邢台市",
      "name": "桥东区",
      "id": "130502000000"
    },
    "130503000000": {
      "city": "邢台市",
      "name": "桥西区",
      "id": "130503000000"
    },
    "130521000000": {
      "city": "邢台市",
      "name": "邢台县",
      "id": "130521000000"
    },
    "130522000000": {
      "city": "邢台市",
      "name": "临城县",
      "id": "130522000000"
    },
    "130523000000": {
      "city": "邢台市",
      "name": "内丘县",
      "id": "130523000000"
    },
    "130524000000": {
      "city": "邢台市",
      "name": "柏乡县",
      "id": "130524000000"
    },
    "130525000000": {
      "city": "邢台市",
      "name": "隆尧县",
      "id": "130525000000"
    },
    "130526000000": {
      "city": "邢台市",
      "name": "任县",
      "id": "130526000000"
    },
    "130527000000": {
      "city": "邢台市",
      "name": "南和县",
      "id": "130527000000"
    },
    "130528000000": {
      "city": "邢台市",
      "name": "宁晋县",
      "id": "130528000000"
    },
    "130529000000": {
      "city": "邢台市",
      "name": "巨鹿县",
      "id": "130529000000"
    },
    "130530000000": {
      "city": "邢台市",
      "name": "新河县",
      "id": "130530000000"
    },
    "130531000000": {
      "city": "邢台市",
      "name": "广宗县",
      "id": "130531000000"
    },
    "130532000000": {
      "city": "邢台市",
      "name": "平乡县",
      "id": "130532000000"
    },
    "130533000000": {
      "city": "邢台市",
      "name": "威县",
      "id": "130533000000"
    },
    "130534000000": {
      "city": "邢台市",
      "name": "清河县",
      "id": "130534000000"
    },
    "130535000000": {
      "city": "邢台市",
      "name": "临西县",
      "id": "130535000000"
    },
    "130571000000": {
      "city": "邢台市",
      "name": "河北邢台经济开发区",
      "id": "130571000000"
    },
    "130581000000": {
      "city": "邢台市",
      "name": "南宫市",
      "id": "130581000000"
    },
    "130582000000": {
      "city": "邢台市",
      "name": "沙河市",
      "id": "130582000000"
    },
    "130601000000": {
      "city": "保定市",
      "name": "市辖区",
      "id": "130601000000"
    },
    "130602000000": {
      "city": "保定市",
      "name": "竞秀区",
      "id": "130602000000"
    },
    "130606000000": {
      "city": "保定市",
      "name": "莲池区",
      "id": "130606000000"
    },
    "130607000000": {
      "city": "保定市",
      "name": "满城区",
      "id": "130607000000"
    },
    "130608000000": {
      "city": "保定市",
      "name": "清苑区",
      "id": "130608000000"
    },
    "130609000000": {
      "city": "保定市",
      "name": "徐水区",
      "id": "130609000000"
    },
    "130623000000": {
      "city": "保定市",
      "name": "涞水县",
      "id": "130623000000"
    },
    "130624000000": {
      "city": "保定市",
      "name": "阜平县",
      "id": "130624000000"
    },
    "130626000000": {
      "city": "保定市",
      "name": "定兴县",
      "id": "130626000000"
    },
    "130627000000": {
      "city": "保定市",
      "name": "唐县",
      "id": "130627000000"
    },
    "130628000000": {
      "city": "保定市",
      "name": "高阳县",
      "id": "130628000000"
    },
    "130629000000": {
      "city": "保定市",
      "name": "容城县",
      "id": "130629000000"
    },
    "130630000000": {
      "city": "保定市",
      "name": "涞源县",
      "id": "130630000000"
    },
    "130631000000": {
      "city": "保定市",
      "name": "望都县",
      "id": "130631000000"
    },
    "130632000000": {
      "city": "保定市",
      "name": "安新县",
      "id": "130632000000"
    },
    "130633000000": {
      "city": "保定市",
      "name": "易县",
      "id": "130633000000"
    },
    "130634000000": {
      "city": "保定市",
      "name": "曲阳县",
      "id": "130634000000"
    },
    "130635000000": {
      "city": "保定市",
      "name": "蠡县",
      "id": "130635000000"
    },
    "130636000000": {
      "city": "保定市",
      "name": "顺平县",
      "id": "130636000000"
    },
    "130637000000": {
      "city": "保定市",
      "name": "博野县",
      "id": "130637000000"
    },
    "130638000000": {
      "city": "保定市",
      "name": "雄县",
      "id": "130638000000"
    },
    "130671000000": {
      "city": "保定市",
      "name": "保定高新技术产业开发区",
      "id": "130671000000"
    },
    "130672000000": {
      "city": "保定市",
      "name": "保定白沟新城",
      "id": "130672000000"
    },
    "130681000000": {
      "city": "保定市",
      "name": "涿州市",
      "id": "130681000000"
    },
    "130682000000": {
      "city": "保定市",
      "name": "定州市",
      "id": "130682000000"
    },
    "130683000000": {
      "city": "保定市",
      "name": "安国市",
      "id": "130683000000"
    },
    "130684000000": {
      "city": "保定市",
      "name": "高碑店市",
      "id": "130684000000"
    },
    "130701000000": {
      "city": "张家口市",
      "name": "市辖区",
      "id": "130701000000"
    },
    "130702000000": {
      "city": "张家口市",
      "name": "桥东区",
      "id": "130702000000"
    },
    "130703000000": {
      "city": "张家口市",
      "name": "桥西区",
      "id": "130703000000"
    },
    "130705000000": {
      "city": "张家口市",
      "name": "宣化区",
      "id": "130705000000"
    },
    "130706000000": {
      "city": "张家口市",
      "name": "下花园区",
      "id": "130706000000"
    },
    "130708000000": {
      "city": "张家口市",
      "name": "万全区",
      "id": "130708000000"
    },
    "130709000000": {
      "city": "张家口市",
      "name": "崇礼区",
      "id": "130709000000"
    },
    "130722000000": {
      "city": "张家口市",
      "name": "张北县",
      "id": "130722000000"
    },
    "130723000000": {
      "city": "张家口市",
      "name": "康保县",
      "id": "130723000000"
    },
    "130724000000": {
      "city": "张家口市",
      "name": "沽源县",
      "id": "130724000000"
    },
    "130725000000": {
      "city": "张家口市",
      "name": "尚义县",
      "id": "130725000000"
    },
    "130726000000": {
      "city": "张家口市",
      "name": "蔚县",
      "id": "130726000000"
    },
    "130727000000": {
      "city": "张家口市",
      "name": "阳原县",
      "id": "130727000000"
    },
    "130728000000": {
      "city": "张家口市",
      "name": "怀安县",
      "id": "130728000000"
    },
    "130730000000": {
      "city": "张家口市",
      "name": "怀来县",
      "id": "130730000000"
    },
    "130731000000": {
      "city": "张家口市",
      "name": "涿鹿县",
      "id": "130731000000"
    },
    "130732000000": {
      "city": "张家口市",
      "name": "赤城县",
      "id": "130732000000"
    },
    "130771000000": {
      "city": "张家口市",
      "name": "张家口市高新技术产业开发区",
      "id": "130771000000"
    },
    "130772000000": {
      "city": "张家口市",
      "name": "张家口市察北管理区",
      "id": "130772000000"
    },
    "130773000000": {
      "city": "张家口市",
      "name": "张家口市塞北管理区",
      "id": "130773000000"
    },
    "130801000000": {
      "city": "承德市",
      "name": "市辖区",
      "id": "130801000000"
    },
    "130802000000": {
      "city": "承德市",
      "name": "双桥区",
      "id": "130802000000"
    },
    "130803000000": {
      "city": "承德市",
      "name": "双滦区",
      "id": "130803000000"
    },
    "130804000000": {
      "city": "承德市",
      "name": "鹰手营子矿区",
      "id": "130804000000"
    },
    "130821000000": {
      "city": "承德市",
      "name": "承德县",
      "id": "130821000000"
    },
    "130822000000": {
      "city": "承德市",
      "name": "兴隆县",
      "id": "130822000000"
    },
    "130824000000": {
      "city": "承德市",
      "name": "滦平县",
      "id": "130824000000"
    },
    "130825000000": {
      "city": "承德市",
      "name": "隆化县",
      "id": "130825000000"
    },
    "130826000000": {
      "city": "承德市",
      "name": "丰宁满族自治县",
      "id": "130826000000"
    },
    "130827000000": {
      "city": "承德市",
      "name": "宽城满族自治县",
      "id": "130827000000"
    },
    "130828000000": {
      "city": "承德市",
      "name": "围场满族蒙古族自治县",
      "id": "130828000000"
    },
    "130871000000": {
      "city": "承德市",
      "name": "承德高新技术产业开发区",
      "id": "130871000000"
    },
    "130881000000": {
      "city": "承德市",
      "name": "平泉市",
      "id": "130881000000"
    },
    "130901000000": {
      "city": "沧州市",
      "name": "市辖区",
      "id": "130901000000"
    },
    "130902000000": {
      "city": "沧州市",
      "name": "新华区",
      "id": "130902000000"
    },
    "130903000000": {
      "city": "沧州市",
      "name": "运河区",
      "id": "130903000000"
    },
    "130921000000": {
      "city": "沧州市",
      "name": "沧县",
      "id": "130921000000"
    },
    "130922000000": {
      "city": "沧州市",
      "name": "青县",
      "id": "130922000000"
    },
    "130923000000": {
      "city": "沧州市",
      "name": "东光县",
      "id": "130923000000"
    },
    "130924000000": {
      "city": "沧州市",
      "name": "海兴县",
      "id": "130924000000"
    },
    "130925000000": {
      "city": "沧州市",
      "name": "盐山县",
      "id": "130925000000"
    },
    "130926000000": {
      "city": "沧州市",
      "name": "肃宁县",
      "id": "130926000000"
    },
    "130927000000": {
      "city": "沧州市",
      "name": "南皮县",
      "id": "130927000000"
    },
    "130928000000": {
      "city": "沧州市",
      "name": "吴桥县",
      "id": "130928000000"
    },
    "130929000000": {
      "city": "沧州市",
      "name": "献县",
      "id": "130929000000"
    },
    "130930000000": {
      "city": "沧州市",
      "name": "孟村回族自治县",
      "id": "130930000000"
    },
    "130971000000": {
      "city": "沧州市",
      "name": "河北沧州经济开发区",
      "id": "130971000000"
    },
    "130972000000": {
      "city": "沧州市",
      "name": "沧州高新技术产业开发区",
      "id": "130972000000"
    },
    "130973000000": {
      "city": "沧州市",
      "name": "沧州渤海新区",
      "id": "130973000000"
    },
    "130981000000": {
      "city": "沧州市",
      "name": "泊头市",
      "id": "130981000000"
    },
    "130982000000": {
      "city": "沧州市",
      "name": "任丘市",
      "id": "130982000000"
    },
    "130983000000": {
      "city": "沧州市",
      "name": "黄骅市",
      "id": "130983000000"
    },
    "130984000000": {
      "city": "沧州市",
      "name": "河间市",
      "id": "130984000000"
    },
    "131001000000": {
      "city": "廊坊市",
      "name": "市辖区",
      "id": "131001000000"
    },
    "131002000000": {
      "city": "廊坊市",
      "name": "安次区",
      "id": "131002000000"
    },
    "131003000000": {
      "city": "廊坊市",
      "name": "广阳区",
      "id": "131003000000"
    },
    "131022000000": {
      "city": "廊坊市",
      "name": "固安县",
      "id": "131022000000"
    },
    "131023000000": {
      "city": "廊坊市",
      "name": "永清县",
      "id": "131023000000"
    },
    "131024000000": {
      "city": "廊坊市",
      "name": "香河县",
      "id": "131024000000"
    },
    "131025000000": {
      "city": "廊坊市",
      "name": "大城县",
      "id": "131025000000"
    },
    "131026000000": {
      "city": "廊坊市",
      "name": "文安县",
      "id": "131026000000"
    },
    "131028000000": {
      "city": "廊坊市",
      "name": "大厂回族自治县",
      "id": "131028000000"
    },
    "131071000000": {
      "city": "廊坊市",
      "name": "廊坊经济技术开发区",
      "id": "131071000000"
    },
    "131081000000": {
      "city": "廊坊市",
      "name": "霸州市",
      "id": "131081000000"
    },
    "131082000000": {
      "city": "廊坊市",
      "name": "三河市",
      "id": "131082000000"
    },
    "131101000000": {
      "city": "衡水市",
      "name": "市辖区",
      "id": "131101000000"
    },
    "131102000000": {
      "city": "衡水市",
      "name": "桃城区",
      "id": "131102000000"
    },
    "131103000000": {
      "city": "衡水市",
      "name": "冀州区",
      "id": "131103000000"
    },
    "131121000000": {
      "city": "衡水市",
      "name": "枣强县",
      "id": "131121000000"
    },
    "131122000000": {
      "city": "衡水市",
      "name": "武邑县",
      "id": "131122000000"
    },
    "131123000000": {
      "city": "衡水市",
      "name": "武强县",
      "id": "131123000000"
    },
    "131124000000": {
      "city": "衡水市",
      "name": "饶阳县",
      "id": "131124000000"
    },
    "131125000000": {
      "city": "衡水市",
      "name": "安平县",
      "id": "131125000000"
    },
    "131126000000": {
      "city": "衡水市",
      "name": "故城县",
      "id": "131126000000"
    },
    "131127000000": {
      "city": "衡水市",
      "name": "景县",
      "id": "131127000000"
    },
    "131128000000": {
      "city": "衡水市",
      "name": "阜城县",
      "id": "131128000000"
    },
    "131171000000": {
      "city": "衡水市",
      "name": "河北衡水高新技术产业开发区",
      "id": "131171000000"
    },
    "131172000000": {
      "city": "衡水市",
      "name": "衡水滨湖新区",
      "id": "131172000000"
    },
    "131182000000": {
      "city": "衡水市",
      "name": "深州市",
      "id": "131182000000"
    },
    "140101000000": {
      "city": "太原市",
      "name": "市辖区",
      "id": "140101000000"
    },
    "140105000000": {
      "city": "太原市",
      "name": "小店区",
      "id": "140105000000"
    },
    "140106000000": {
      "city": "太原市",
      "name": "迎泽区",
      "id": "140106000000"
    },
    "140107000000": {
      "city": "太原市",
      "name": "杏花岭区",
      "id": "140107000000"
    },
    "140108000000": {
      "city": "太原市",
      "name": "尖草坪区",
      "id": "140108000000"
    },
    "140109000000": {
      "city": "太原市",
      "name": "万柏林区",
      "id": "140109000000"
    },
    "140110000000": {
      "city": "太原市",
      "name": "晋源区",
      "id": "140110000000"
    },
    "140121000000": {
      "city": "太原市",
      "name": "清徐县",
      "id": "140121000000"
    },
    "140122000000": {
      "city": "太原市",
      "name": "阳曲县",
      "id": "140122000000"
    },
    "140123000000": {
      "city": "太原市",
      "name": "娄烦县",
      "id": "140123000000"
    },
    "140171000000": {
      "city": "太原市",
      "name": "山西转型综合改革示范区",
      "id": "140171000000"
    },
    "140181000000": {
      "city": "太原市",
      "name": "古交市",
      "id": "140181000000"
    },
    "140201000000": {
      "city": "大同市",
      "name": "市辖区",
      "id": "140201000000"
    },
    "140212000000": {
      "city": "大同市",
      "name": "新荣区",
      "id": "140212000000"
    },
    "140213000000": {
      "city": "大同市",
      "name": "平城区",
      "id": "140213000000"
    },
    "140214000000": {
      "city": "大同市",
      "name": "云冈区",
      "id": "140214000000"
    },
    "140215000000": {
      "city": "大同市",
      "name": "云州区",
      "id": "140215000000"
    },
    "140221000000": {
      "city": "大同市",
      "name": "阳高县",
      "id": "140221000000"
    },
    "140222000000": {
      "city": "大同市",
      "name": "天镇县",
      "id": "140222000000"
    },
    "140223000000": {
      "city": "大同市",
      "name": "广灵县",
      "id": "140223000000"
    },
    "140224000000": {
      "city": "大同市",
      "name": "灵丘县",
      "id": "140224000000"
    },
    "140225000000": {
      "city": "大同市",
      "name": "浑源县",
      "id": "140225000000"
    },
    "140226000000": {
      "city": "大同市",
      "name": "左云县",
      "id": "140226000000"
    },
    "140271000000": {
      "city": "大同市",
      "name": "山西大同经济开发区",
      "id": "140271000000"
    },
    "140301000000": {
      "city": "阳泉市",
      "name": "市辖区",
      "id": "140301000000"
    },
    "140302000000": {
      "city": "阳泉市",
      "name": "城区",
      "id": "140302000000"
    },
    "140303000000": {
      "city": "阳泉市",
      "name": "矿区",
      "id": "140303000000"
    },
    "140311000000": {
      "city": "阳泉市",
      "name": "郊区",
      "id": "140311000000"
    },
    "140321000000": {
      "city": "阳泉市",
      "name": "平定县",
      "id": "140321000000"
    },
    "140322000000": {
      "city": "阳泉市",
      "name": "盂县",
      "id": "140322000000"
    },
    "140401000000": {
      "city": "长治市",
      "name": "市辖区",
      "id": "140401000000"
    },
    "140412000000": {
      "city": "长治市",
      "name": "潞州区",
      "id": "140412000000"
    },
    "140413000000": {
      "city": "长治市",
      "name": "上党区",
      "id": "140413000000"
    },
    "140414000000": {
      "city": "长治市",
      "name": "屯留区",
      "id": "140414000000"
    },
    "140415000000": {
      "city": "长治市",
      "name": "潞城区",
      "id": "140415000000"
    },
    "140423000000": {
      "city": "长治市",
      "name": "襄垣县",
      "id": "140423000000"
    },
    "140425000000": {
      "city": "长治市",
      "name": "平顺县",
      "id": "140425000000"
    },
    "140426000000": {
      "city": "长治市",
      "name": "黎城县",
      "id": "140426000000"
    },
    "140427000000": {
      "city": "长治市",
      "name": "壶关县",
      "id": "140427000000"
    },
    "140428000000": {
      "city": "长治市",
      "name": "长子县",
      "id": "140428000000"
    },
    "140429000000": {
      "city": "长治市",
      "name": "武乡县",
      "id": "140429000000"
    },
    "140430000000": {
      "city": "长治市",
      "name": "沁县",
      "id": "140430000000"
    },
    "140431000000": {
      "city": "长治市",
      "name": "沁源县",
      "id": "140431000000"
    },
    "140471000000": {
      "city": "长治市",
      "name": "山西长治高新技术产业园区",
      "id": "140471000000"
    },
    "140501000000": {
      "city": "晋城市",
      "name": "市辖区",
      "id": "140501000000"
    },
    "140502000000": {
      "city": "晋城市",
      "name": "城区",
      "id": "140502000000"
    },
    "140521000000": {
      "city": "晋城市",
      "name": "沁水县",
      "id": "140521000000"
    },
    "140522000000": {
      "city": "晋城市",
      "name": "阳城县",
      "id": "140522000000"
    },
    "140524000000": {
      "city": "晋城市",
      "name": "陵川县",
      "id": "140524000000"
    },
    "140525000000": {
      "city": "晋城市",
      "name": "泽州县",
      "id": "140525000000"
    },
    "140581000000": {
      "city": "晋城市",
      "name": "高平市",
      "id": "140581000000"
    },
    "140601000000": {
      "city": "朔州市",
      "name": "市辖区",
      "id": "140601000000"
    },
    "140602000000": {
      "city": "朔州市",
      "name": "朔城区",
      "id": "140602000000"
    },
    "140603000000": {
      "city": "朔州市",
      "name": "平鲁区",
      "id": "140603000000"
    },
    "140621000000": {
      "city": "朔州市",
      "name": "山阴县",
      "id": "140621000000"
    },
    "140622000000": {
      "city": "朔州市",
      "name": "应县",
      "id": "140622000000"
    },
    "140623000000": {
      "city": "朔州市",
      "name": "右玉县",
      "id": "140623000000"
    },
    "140671000000": {
      "city": "朔州市",
      "name": "山西朔州经济开发区",
      "id": "140671000000"
    },
    "140681000000": {
      "city": "朔州市",
      "name": "怀仁市",
      "id": "140681000000"
    },
    "140701000000": {
      "city": "晋中市",
      "name": "市辖区",
      "id": "140701000000"
    },
    "140702000000": {
      "city": "晋中市",
      "name": "榆次区",
      "id": "140702000000"
    },
    "140721000000": {
      "city": "晋中市",
      "name": "榆社县",
      "id": "140721000000"
    },
    "140722000000": {
      "city": "晋中市",
      "name": "左权县",
      "id": "140722000000"
    },
    "140723000000": {
      "city": "晋中市",
      "name": "和顺县",
      "id": "140723000000"
    },
    "140724000000": {
      "city": "晋中市",
      "name": "昔阳县",
      "id": "140724000000"
    },
    "140725000000": {
      "city": "晋中市",
      "name": "寿阳县",
      "id": "140725000000"
    },
    "140726000000": {
      "city": "晋中市",
      "name": "太谷县",
      "id": "140726000000"
    },
    "140727000000": {
      "city": "晋中市",
      "name": "祁县",
      "id": "140727000000"
    },
    "140728000000": {
      "city": "晋中市",
      "name": "平遥县",
      "id": "140728000000"
    },
    "140729000000": {
      "city": "晋中市",
      "name": "灵石县",
      "id": "140729000000"
    },
    "140781000000": {
      "city": "晋中市",
      "name": "介休市",
      "id": "140781000000"
    },
    "140801000000": {
      "city": "运城市",
      "name": "市辖区",
      "id": "140801000000"
    },
    "140802000000": {
      "city": "运城市",
      "name": "盐湖区",
      "id": "140802000000"
    },
    "140821000000": {
      "city": "运城市",
      "name": "临猗县",
      "id": "140821000000"
    },
    "140822000000": {
      "city": "运城市",
      "name": "万荣县",
      "id": "140822000000"
    },
    "140823000000": {
      "city": "运城市",
      "name": "闻喜县",
      "id": "140823000000"
    },
    "140824000000": {
      "city": "运城市",
      "name": "稷山县",
      "id": "140824000000"
    },
    "140825000000": {
      "city": "运城市",
      "name": "新绛县",
      "id": "140825000000"
    },
    "140826000000": {
      "city": "运城市",
      "name": "绛县",
      "id": "140826000000"
    },
    "140827000000": {
      "city": "运城市",
      "name": "垣曲县",
      "id": "140827000000"
    },
    "140828000000": {
      "city": "运城市",
      "name": "夏县",
      "id": "140828000000"
    },
    "140829000000": {
      "city": "运城市",
      "name": "平陆县",
      "id": "140829000000"
    },
    "140830000000": {
      "city": "运城市",
      "name": "芮城县",
      "id": "140830000000"
    },
    "140881000000": {
      "city": "运城市",
      "name": "永济市",
      "id": "140881000000"
    },
    "140882000000": {
      "city": "运城市",
      "name": "河津市",
      "id": "140882000000"
    },
    "140901000000": {
      "city": "忻州市",
      "name": "市辖区",
      "id": "140901000000"
    },
    "140902000000": {
      "city": "忻州市",
      "name": "忻府区",
      "id": "140902000000"
    },
    "140921000000": {
      "city": "忻州市",
      "name": "定襄县",
      "id": "140921000000"
    },
    "140922000000": {
      "city": "忻州市",
      "name": "五台县",
      "id": "140922000000"
    },
    "140923000000": {
      "city": "忻州市",
      "name": "代县",
      "id": "140923000000"
    },
    "140924000000": {
      "city": "忻州市",
      "name": "繁峙县",
      "id": "140924000000"
    },
    "140925000000": {
      "city": "忻州市",
      "name": "宁武县",
      "id": "140925000000"
    },
    "140926000000": {
      "city": "忻州市",
      "name": "静乐县",
      "id": "140926000000"
    },
    "140927000000": {
      "city": "忻州市",
      "name": "神池县",
      "id": "140927000000"
    },
    "140928000000": {
      "city": "忻州市",
      "name": "五寨县",
      "id": "140928000000"
    },
    "140929000000": {
      "city": "忻州市",
      "name": "岢岚县",
      "id": "140929000000"
    },
    "140930000000": {
      "city": "忻州市",
      "name": "河曲县",
      "id": "140930000000"
    },
    "140931000000": {
      "city": "忻州市",
      "name": "保德县",
      "id": "140931000000"
    },
    "140932000000": {
      "city": "忻州市",
      "name": "偏关县",
      "id": "140932000000"
    },
    "140971000000": {
      "city": "忻州市",
      "name": "五台山风景名胜区",
      "id": "140971000000"
    },
    "140981000000": {
      "city": "忻州市",
      "name": "原平市",
      "id": "140981000000"
    },
    "141001000000": {
      "city": "临汾市",
      "name": "市辖区",
      "id": "141001000000"
    },
    "141002000000": {
      "city": "临汾市",
      "name": "尧都区",
      "id": "141002000000"
    },
    "141021000000": {
      "city": "临汾市",
      "name": "曲沃县",
      "id": "141021000000"
    },
    "141022000000": {
      "city": "临汾市",
      "name": "翼城县",
      "id": "141022000000"
    },
    "141023000000": {
      "city": "临汾市",
      "name": "襄汾县",
      "id": "141023000000"
    },
    "141024000000": {
      "city": "临汾市",
      "name": "洪洞县",
      "id": "141024000000"
    },
    "141025000000": {
      "city": "临汾市",
      "name": "古县",
      "id": "141025000000"
    },
    "141026000000": {
      "city": "临汾市",
      "name": "安泽县",
      "id": "141026000000"
    },
    "141027000000": {
      "city": "临汾市",
      "name": "浮山县",
      "id": "141027000000"
    },
    "141028000000": {
      "city": "临汾市",
      "name": "吉县",
      "id": "141028000000"
    },
    "141029000000": {
      "city": "临汾市",
      "name": "乡宁县",
      "id": "141029000000"
    },
    "141030000000": {
      "city": "临汾市",
      "name": "大宁县",
      "id": "141030000000"
    },
    "141031000000": {
      "city": "临汾市",
      "name": "隰县",
      "id": "141031000000"
    },
    "141032000000": {
      "city": "临汾市",
      "name": "永和县",
      "id": "141032000000"
    },
    "141033000000": {
      "city": "临汾市",
      "name": "蒲县",
      "id": "141033000000"
    },
    "141034000000": {
      "city": "临汾市",
      "name": "汾西县",
      "id": "141034000000"
    },
    "141081000000": {
      "city": "临汾市",
      "name": "侯马市",
      "id": "141081000000"
    },
    "141082000000": {
      "city": "临汾市",
      "name": "霍州市",
      "id": "141082000000"
    },
    "141101000000": {
      "city": "吕梁市",
      "name": "市辖区",
      "id": "141101000000"
    },
    "141102000000": {
      "city": "吕梁市",
      "name": "离石区",
      "id": "141102000000"
    },
    "141121000000": {
      "city": "吕梁市",
      "name": "文水县",
      "id": "141121000000"
    },
    "141122000000": {
      "city": "吕梁市",
      "name": "交城县",
      "id": "141122000000"
    },
    "141123000000": {
      "city": "吕梁市",
      "name": "兴县",
      "id": "141123000000"
    },
    "141124000000": {
      "city": "吕梁市",
      "name": "临县",
      "id": "141124000000"
    },
    "141125000000": {
      "city": "吕梁市",
      "name": "柳林县",
      "id": "141125000000"
    },
    "141126000000": {
      "city": "吕梁市",
      "name": "石楼县",
      "id": "141126000000"
    },
    "141127000000": {
      "city": "吕梁市",
      "name": "岚县",
      "id": "141127000000"
    },
    "141128000000": {
      "city": "吕梁市",
      "name": "方山县",
      "id": "141128000000"
    },
    "141129000000": {
      "city": "吕梁市",
      "name": "中阳县",
      "id": "141129000000"
    },
    "141130000000": {
      "city": "吕梁市",
      "name": "交口县",
      "id": "141130000000"
    },
    "141181000000": {
      "city": "吕梁市",
      "name": "孝义市",
      "id": "141181000000"
    },
    "141182000000": {
      "city": "吕梁市",
      "name": "汾阳市",
      "id": "141182000000"
    },
    "150101000000": {
      "city": "呼和浩特市",
      "name": "市辖区",
      "id": "150101000000"
    },
    "150102000000": {
      "city": "呼和浩特市",
      "name": "新城区",
      "id": "150102000000"
    },
    "150103000000": {
      "city": "呼和浩特市",
      "name": "回民区",
      "id": "150103000000"
    },
    "150104000000": {
      "city": "呼和浩特市",
      "name": "玉泉区",
      "id": "150104000000"
    },
    "150105000000": {
      "city": "呼和浩特市",
      "name": "赛罕区",
      "id": "150105000000"
    },
    "150121000000": {
      "city": "呼和浩特市",
      "name": "土默特左旗",
      "id": "150121000000"
    },
    "150122000000": {
      "city": "呼和浩特市",
      "name": "托克托县",
      "id": "150122000000"
    },
    "150123000000": {
      "city": "呼和浩特市",
      "name": "和林格尔县",
      "id": "150123000000"
    },
    "150124000000": {
      "city": "呼和浩特市",
      "name": "清水河县",
      "id": "150124000000"
    },
    "150125000000": {
      "city": "呼和浩特市",
      "name": "武川县",
      "id": "150125000000"
    },
    "150171000000": {
      "city": "呼和浩特市",
      "name": "呼和浩特金海工业园区",
      "id": "150171000000"
    },
    "150172000000": {
      "city": "呼和浩特市",
      "name": "呼和浩特经济技术开发区",
      "id": "150172000000"
    },
    "150201000000": {
      "city": "包头市",
      "name": "市辖区",
      "id": "150201000000"
    },
    "150202000000": {
      "city": "包头市",
      "name": "东河区",
      "id": "150202000000"
    },
    "150203000000": {
      "city": "包头市",
      "name": "昆都仑区",
      "id": "150203000000"
    },
    "150204000000": {
      "city": "包头市",
      "name": "青山区",
      "id": "150204000000"
    },
    "150205000000": {
      "city": "包头市",
      "name": "石拐区",
      "id": "150205000000"
    },
    "150206000000": {
      "city": "包头市",
      "name": "白云鄂博矿区",
      "id": "150206000000"
    },
    "150207000000": {
      "city": "包头市",
      "name": "九原区",
      "id": "150207000000"
    },
    "150221000000": {
      "city": "包头市",
      "name": "土默特右旗",
      "id": "150221000000"
    },
    "150222000000": {
      "city": "包头市",
      "name": "固阳县",
      "id": "150222000000"
    },
    "150223000000": {
      "city": "包头市",
      "name": "达尔罕茂明安联合旗",
      "id": "150223000000"
    },
    "150271000000": {
      "city": "包头市",
      "name": "包头稀土高新技术产业开发区",
      "id": "150271000000"
    },
    "150301000000": {
      "city": "乌海市",
      "name": "市辖区",
      "id": "150301000000"
    },
    "150302000000": {
      "city": "乌海市",
      "name": "海勃湾区",
      "id": "150302000000"
    },
    "150303000000": {
      "city": "乌海市",
      "name": "海南区",
      "id": "150303000000"
    },
    "150304000000": {
      "city": "乌海市",
      "name": "乌达区",
      "id": "150304000000"
    },
    "150401000000": {
      "city": "赤峰市",
      "name": "市辖区",
      "id": "150401000000"
    },
    "150402000000": {
      "city": "赤峰市",
      "name": "红山区",
      "id": "150402000000"
    },
    "150403000000": {
      "city": "赤峰市",
      "name": "元宝山区",
      "id": "150403000000"
    },
    "150404000000": {
      "city": "赤峰市",
      "name": "松山区",
      "id": "150404000000"
    },
    "150421000000": {
      "city": "赤峰市",
      "name": "阿鲁科尔沁旗",
      "id": "150421000000"
    },
    "150422000000": {
      "city": "赤峰市",
      "name": "巴林左旗",
      "id": "150422000000"
    },
    "150423000000": {
      "city": "赤峰市",
      "name": "巴林右旗",
      "id": "150423000000"
    },
    "150424000000": {
      "city": "赤峰市",
      "name": "林西县",
      "id": "150424000000"
    },
    "150425000000": {
      "city": "赤峰市",
      "name": "克什克腾旗",
      "id": "150425000000"
    },
    "150426000000": {
      "city": "赤峰市",
      "name": "翁牛特旗",
      "id": "150426000000"
    },
    "150428000000": {
      "city": "赤峰市",
      "name": "喀喇沁旗",
      "id": "150428000000"
    },
    "150429000000": {
      "city": "赤峰市",
      "name": "宁城县",
      "id": "150429000000"
    },
    "150430000000": {
      "city": "赤峰市",
      "name": "敖汉旗",
      "id": "150430000000"
    },
    "150501000000": {
      "city": "通辽市",
      "name": "市辖区",
      "id": "150501000000"
    },
    "150502000000": {
      "city": "通辽市",
      "name": "科尔沁区",
      "id": "150502000000"
    },
    "150521000000": {
      "city": "通辽市",
      "name": "科尔沁左翼中旗",
      "id": "150521000000"
    },
    "150522000000": {
      "city": "通辽市",
      "name": "科尔沁左翼后旗",
      "id": "150522000000"
    },
    "150523000000": {
      "city": "通辽市",
      "name": "开鲁县",
      "id": "150523000000"
    },
    "150524000000": {
      "city": "通辽市",
      "name": "库伦旗",
      "id": "150524000000"
    },
    "150525000000": {
      "city": "通辽市",
      "name": "奈曼旗",
      "id": "150525000000"
    },
    "150526000000": {
      "city": "通辽市",
      "name": "扎鲁特旗",
      "id": "150526000000"
    },
    "150571000000": {
      "city": "通辽市",
      "name": "通辽经济技术开发区",
      "id": "150571000000"
    },
    "150581000000": {
      "city": "通辽市",
      "name": "霍林郭勒市",
      "id": "150581000000"
    },
    "150601000000": {
      "city": "鄂尔多斯市",
      "name": "市辖区",
      "id": "150601000000"
    },
    "150602000000": {
      "city": "鄂尔多斯市",
      "name": "东胜区",
      "id": "150602000000"
    },
    "150603000000": {
      "city": "鄂尔多斯市",
      "name": "康巴什区",
      "id": "150603000000"
    },
    "150621000000": {
      "city": "鄂尔多斯市",
      "name": "达拉特旗",
      "id": "150621000000"
    },
    "150622000000": {
      "city": "鄂尔多斯市",
      "name": "准格尔旗",
      "id": "150622000000"
    },
    "150623000000": {
      "city": "鄂尔多斯市",
      "name": "鄂托克前旗",
      "id": "150623000000"
    },
    "150624000000": {
      "city": "鄂尔多斯市",
      "name": "鄂托克旗",
      "id": "150624000000"
    },
    "150625000000": {
      "city": "鄂尔多斯市",
      "name": "杭锦旗",
      "id": "150625000000"
    },
    "150626000000": {
      "city": "鄂尔多斯市",
      "name": "乌审旗",
      "id": "150626000000"
    },
    "150627000000": {
      "city": "鄂尔多斯市",
      "name": "伊金霍洛旗",
      "id": "150627000000"
    },
    "150701000000": {
      "city": "呼伦贝尔市",
      "name": "市辖区",
      "id": "150701000000"
    },
    "150702000000": {
      "city": "呼伦贝尔市",
      "name": "海拉尔区",
      "id": "150702000000"
    },
    "150703000000": {
      "city": "呼伦贝尔市",
      "name": "扎赉诺尔区",
      "id": "150703000000"
    },
    "150721000000": {
      "city": "呼伦贝尔市",
      "name": "阿荣旗",
      "id": "150721000000"
    },
    "150722000000": {
      "city": "呼伦贝尔市",
      "name": "莫力达瓦达斡尔族自治旗",
      "id": "150722000000"
    },
    "150723000000": {
      "city": "呼伦贝尔市",
      "name": "鄂伦春自治旗",
      "id": "150723000000"
    },
    "150724000000": {
      "city": "呼伦贝尔市",
      "name": "鄂温克族自治旗",
      "id": "150724000000"
    },
    "150725000000": {
      "city": "呼伦贝尔市",
      "name": "陈巴尔虎旗",
      "id": "150725000000"
    },
    "150726000000": {
      "city": "呼伦贝尔市",
      "name": "新巴尔虎左旗",
      "id": "150726000000"
    },
    "150727000000": {
      "city": "呼伦贝尔市",
      "name": "新巴尔虎右旗",
      "id": "150727000000"
    },
    "150781000000": {
      "city": "呼伦贝尔市",
      "name": "满洲里市",
      "id": "150781000000"
    },
    "150782000000": {
      "city": "呼伦贝尔市",
      "name": "牙克石市",
      "id": "150782000000"
    },
    "150783000000": {
      "city": "呼伦贝尔市",
      "name": "扎兰屯市",
      "id": "150783000000"
    },
    "150784000000": {
      "city": "呼伦贝尔市",
      "name": "额尔古纳市",
      "id": "150784000000"
    },
    "150785000000": {
      "city": "呼伦贝尔市",
      "name": "根河市",
      "id": "150785000000"
    },
    "150801000000": {
      "city": "巴彦淖尔市",
      "name": "市辖区",
      "id": "150801000000"
    },
    "150802000000": {
      "city": "巴彦淖尔市",
      "name": "临河区",
      "id": "150802000000"
    },
    "150821000000": {
      "city": "巴彦淖尔市",
      "name": "五原县",
      "id": "150821000000"
    },
    "150822000000": {
      "city": "巴彦淖尔市",
      "name": "磴口县",
      "id": "150822000000"
    },
    "150823000000": {
      "city": "巴彦淖尔市",
      "name": "乌拉特前旗",
      "id": "150823000000"
    },
    "150824000000": {
      "city": "巴彦淖尔市",
      "name": "乌拉特中旗",
      "id": "150824000000"
    },
    "150825000000": {
      "city": "巴彦淖尔市",
      "name": "乌拉特后旗",
      "id": "150825000000"
    },
    "150826000000": {
      "city": "巴彦淖尔市",
      "name": "杭锦后旗",
      "id": "150826000000"
    },
    "150901000000": {
      "city": "乌兰察布市",
      "name": "市辖区",
      "id": "150901000000"
    },
    "150902000000": {
      "city": "乌兰察布市",
      "name": "集宁区",
      "id": "150902000000"
    },
    "150921000000": {
      "city": "乌兰察布市",
      "name": "卓资县",
      "id": "150921000000"
    },
    "150922000000": {
      "city": "乌兰察布市",
      "name": "化德县",
      "id": "150922000000"
    },
    "150923000000": {
      "city": "乌兰察布市",
      "name": "商都县",
      "id": "150923000000"
    },
    "150924000000": {
      "city": "乌兰察布市",
      "name": "兴和县",
      "id": "150924000000"
    },
    "150925000000": {
      "city": "乌兰察布市",
      "name": "凉城县",
      "id": "150925000000"
    },
    "150926000000": {
      "city": "乌兰察布市",
      "name": "察哈尔右翼前旗",
      "id": "150926000000"
    },
    "150927000000": {
      "city": "乌兰察布市",
      "name": "察哈尔右翼中旗",
      "id": "150927000000"
    },
    "150928000000": {
      "city": "乌兰察布市",
      "name": "察哈尔右翼后旗",
      "id": "150928000000"
    },
    "150929000000": {
      "city": "乌兰察布市",
      "name": "四子王旗",
      "id": "150929000000"
    },
    "150981000000": {
      "city": "乌兰察布市",
      "name": "丰镇市",
      "id": "150981000000"
    },
    "152201000000": {
      "city": "兴安盟",
      "name": "乌兰浩特市",
      "id": "152201000000"
    },
    "152202000000": {
      "city": "兴安盟",
      "name": "阿尔山市",
      "id": "152202000000"
    },
    "152221000000": {
      "city": "兴安盟",
      "name": "科尔沁右翼前旗",
      "id": "152221000000"
    },
    "152222000000": {
      "city": "兴安盟",
      "name": "科尔沁右翼中旗",
      "id": "152222000000"
    },
    "152223000000": {
      "city": "兴安盟",
      "name": "扎赉特旗",
      "id": "152223000000"
    },
    "152224000000": {
      "city": "兴安盟",
      "name": "突泉县",
      "id": "152224000000"
    },
    "152501000000": {
      "city": "锡林郭勒盟",
      "name": "二连浩特市",
      "id": "152501000000"
    },
    "152502000000": {
      "city": "锡林郭勒盟",
      "name": "锡林浩特市",
      "id": "152502000000"
    },
    "152522000000": {
      "city": "锡林郭勒盟",
      "name": "阿巴嘎旗",
      "id": "152522000000"
    },
    "152523000000": {
      "city": "锡林郭勒盟",
      "name": "苏尼特左旗",
      "id": "152523000000"
    },
    "152524000000": {
      "city": "锡林郭勒盟",
      "name": "苏尼特右旗",
      "id": "152524000000"
    },
    "152525000000": {
      "city": "锡林郭勒盟",
      "name": "东乌珠穆沁旗",
      "id": "152525000000"
    },
    "152526000000": {
      "city": "锡林郭勒盟",
      "name": "西乌珠穆沁旗",
      "id": "152526000000"
    },
    "152527000000": {
      "city": "锡林郭勒盟",
      "name": "太仆寺旗",
      "id": "152527000000"
    },
    "152528000000": {
      "city": "锡林郭勒盟",
      "name": "镶黄旗",
      "id": "152528000000"
    },
    "152529000000": {
      "city": "锡林郭勒盟",
      "name": "正镶白旗",
      "id": "152529000000"
    },
    "152530000000": {
      "city": "锡林郭勒盟",
      "name": "正蓝旗",
      "id": "152530000000"
    },
    "152531000000": {
      "city": "锡林郭勒盟",
      "name": "多伦县",
      "id": "152531000000"
    },
    "152571000000": {
      "city": "锡林郭勒盟",
      "name": "乌拉盖管委会",
      "id": "152571000000"
    },
    "152921000000": {
      "city": "阿拉善盟",
      "name": "阿拉善左旗",
      "id": "152921000000"
    },
    "152922000000": {
      "city": "阿拉善盟",
      "name": "阿拉善右旗",
      "id": "152922000000"
    },
    "152923000000": {
      "city": "阿拉善盟",
      "name": "额济纳旗",
      "id": "152923000000"
    },
    "152971000000": {
      "city": "阿拉善盟",
      "name": "内蒙古阿拉善经济开发区",
      "id": "152971000000"
    },
    "210101000000": {
      "city": "沈阳市",
      "name": "市辖区",
      "id": "210101000000"
    },
    "210102000000": {
      "city": "沈阳市",
      "name": "和平区",
      "id": "210102000000"
    },
    "210103000000": {
      "city": "沈阳市",
      "name": "沈河区",
      "id": "210103000000"
    },
    "210104000000": {
      "city": "沈阳市",
      "name": "大东区",
      "id": "210104000000"
    },
    "210105000000": {
      "city": "沈阳市",
      "name": "皇姑区",
      "id": "210105000000"
    },
    "210106000000": {
      "city": "沈阳市",
      "name": "铁西区",
      "id": "210106000000"
    },
    "210111000000": {
      "city": "沈阳市",
      "name": "苏家屯区",
      "id": "210111000000"
    },
    "210112000000": {
      "city": "沈阳市",
      "name": "浑南区",
      "id": "210112000000"
    },
    "210113000000": {
      "city": "沈阳市",
      "name": "沈北新区",
      "id": "210113000000"
    },
    "210114000000": {
      "city": "沈阳市",
      "name": "于洪区",
      "id": "210114000000"
    },
    "210115000000": {
      "city": "沈阳市",
      "name": "辽中区",
      "id": "210115000000"
    },
    "210123000000": {
      "city": "沈阳市",
      "name": "康平县",
      "id": "210123000000"
    },
    "210124000000": {
      "city": "沈阳市",
      "name": "法库县",
      "id": "210124000000"
    },
    "210181000000": {
      "city": "沈阳市",
      "name": "新民市",
      "id": "210181000000"
    },
    "210201000000": {
      "city": "大连市",
      "name": "市辖区",
      "id": "210201000000"
    },
    "210202000000": {
      "city": "大连市",
      "name": "中山区",
      "id": "210202000000"
    },
    "210203000000": {
      "city": "大连市",
      "name": "西岗区",
      "id": "210203000000"
    },
    "210204000000": {
      "city": "大连市",
      "name": "沙河口区",
      "id": "210204000000"
    },
    "210211000000": {
      "city": "大连市",
      "name": "甘井子区",
      "id": "210211000000"
    },
    "210212000000": {
      "city": "大连市",
      "name": "旅顺口区",
      "id": "210212000000"
    },
    "210213000000": {
      "city": "大连市",
      "name": "金州区",
      "id": "210213000000"
    },
    "210214000000": {
      "city": "大连市",
      "name": "普兰店区",
      "id": "210214000000"
    },
    "210224000000": {
      "city": "大连市",
      "name": "长海县",
      "id": "210224000000"
    },
    "210281000000": {
      "city": "大连市",
      "name": "瓦房店市",
      "id": "210281000000"
    },
    "210283000000": {
      "city": "大连市",
      "name": "庄河市",
      "id": "210283000000"
    },
    "210301000000": {
      "city": "鞍山市",
      "name": "市辖区",
      "id": "210301000000"
    },
    "210302000000": {
      "city": "鞍山市",
      "name": "铁东区",
      "id": "210302000000"
    },
    "210303000000": {
      "city": "鞍山市",
      "name": "铁西区",
      "id": "210303000000"
    },
    "210304000000": {
      "city": "鞍山市",
      "name": "立山区",
      "id": "210304000000"
    },
    "210311000000": {
      "city": "鞍山市",
      "name": "千山区",
      "id": "210311000000"
    },
    "210321000000": {
      "city": "鞍山市",
      "name": "台安县",
      "id": "210321000000"
    },
    "210323000000": {
      "city": "鞍山市",
      "name": "岫岩满族自治县",
      "id": "210323000000"
    },
    "210381000000": {
      "city": "鞍山市",
      "name": "海城市",
      "id": "210381000000"
    },
    "210401000000": {
      "city": "抚顺市",
      "name": "市辖区",
      "id": "210401000000"
    },
    "210402000000": {
      "city": "抚顺市",
      "name": "新抚区",
      "id": "210402000000"
    },
    "210403000000": {
      "city": "抚顺市",
      "name": "东洲区",
      "id": "210403000000"
    },
    "210404000000": {
      "city": "抚顺市",
      "name": "望花区",
      "id": "210404000000"
    },
    "210411000000": {
      "city": "抚顺市",
      "name": "顺城区",
      "id": "210411000000"
    },
    "210421000000": {
      "city": "抚顺市",
      "name": "抚顺县",
      "id": "210421000000"
    },
    "210422000000": {
      "city": "抚顺市",
      "name": "新宾满族自治县",
      "id": "210422000000"
    },
    "210423000000": {
      "city": "抚顺市",
      "name": "清原满族自治县",
      "id": "210423000000"
    },
    "210501000000": {
      "city": "本溪市",
      "name": "市辖区",
      "id": "210501000000"
    },
    "210502000000": {
      "city": "本溪市",
      "name": "平山区",
      "id": "210502000000"
    },
    "210503000000": {
      "city": "本溪市",
      "name": "溪湖区",
      "id": "210503000000"
    },
    "210504000000": {
      "city": "本溪市",
      "name": "明山区",
      "id": "210504000000"
    },
    "210505000000": {
      "city": "本溪市",
      "name": "南芬区",
      "id": "210505000000"
    },
    "210521000000": {
      "city": "本溪市",
      "name": "本溪满族自治县",
      "id": "210521000000"
    },
    "210522000000": {
      "city": "本溪市",
      "name": "桓仁满族自治县",
      "id": "210522000000"
    },
    "210601000000": {
      "city": "丹东市",
      "name": "市辖区",
      "id": "210601000000"
    },
    "210602000000": {
      "city": "丹东市",
      "name": "元宝区",
      "id": "210602000000"
    },
    "210603000000": {
      "city": "丹东市",
      "name": "振兴区",
      "id": "210603000000"
    },
    "210604000000": {
      "city": "丹东市",
      "name": "振安区",
      "id": "210604000000"
    },
    "210624000000": {
      "city": "丹东市",
      "name": "宽甸满族自治县",
      "id": "210624000000"
    },
    "210681000000": {
      "city": "丹东市",
      "name": "东港市",
      "id": "210681000000"
    },
    "210682000000": {
      "city": "丹东市",
      "name": "凤城市",
      "id": "210682000000"
    },
    "210701000000": {
      "city": "锦州市",
      "name": "市辖区",
      "id": "210701000000"
    },
    "210702000000": {
      "city": "锦州市",
      "name": "古塔区",
      "id": "210702000000"
    },
    "210703000000": {
      "city": "锦州市",
      "name": "凌河区",
      "id": "210703000000"
    },
    "210711000000": {
      "city": "锦州市",
      "name": "太和区",
      "id": "210711000000"
    },
    "210726000000": {
      "city": "锦州市",
      "name": "黑山县",
      "id": "210726000000"
    },
    "210727000000": {
      "city": "锦州市",
      "name": "义县",
      "id": "210727000000"
    },
    "210781000000": {
      "city": "锦州市",
      "name": "凌海市",
      "id": "210781000000"
    },
    "210782000000": {
      "city": "锦州市",
      "name": "北镇市",
      "id": "210782000000"
    },
    "210801000000": {
      "city": "营口市",
      "name": "市辖区",
      "id": "210801000000"
    },
    "210802000000": {
      "city": "营口市",
      "name": "站前区",
      "id": "210802000000"
    },
    "210803000000": {
      "city": "营口市",
      "name": "西市区",
      "id": "210803000000"
    },
    "210804000000": {
      "city": "营口市",
      "name": "鲅鱼圈区",
      "id": "210804000000"
    },
    "210811000000": {
      "city": "营口市",
      "name": "老边区",
      "id": "210811000000"
    },
    "210881000000": {
      "city": "营口市",
      "name": "盖州市",
      "id": "210881000000"
    },
    "210882000000": {
      "city": "营口市",
      "name": "大石桥市",
      "id": "210882000000"
    },
    "210901000000": {
      "city": "阜新市",
      "name": "市辖区",
      "id": "210901000000"
    },
    "210902000000": {
      "city": "阜新市",
      "name": "海州区",
      "id": "210902000000"
    },
    "210903000000": {
      "city": "阜新市",
      "name": "新邱区",
      "id": "210903000000"
    },
    "210904000000": {
      "city": "阜新市",
      "name": "太平区",
      "id": "210904000000"
    },
    "210905000000": {
      "city": "阜新市",
      "name": "清河门区",
      "id": "210905000000"
    },
    "210911000000": {
      "city": "阜新市",
      "name": "细河区",
      "id": "210911000000"
    },
    "210921000000": {
      "city": "阜新市",
      "name": "阜新蒙古族自治县",
      "id": "210921000000"
    },
    "210922000000": {
      "city": "阜新市",
      "name": "彰武县",
      "id": "210922000000"
    },
    "211001000000": {
      "city": "辽阳市",
      "name": "市辖区",
      "id": "211001000000"
    },
    "211002000000": {
      "city": "辽阳市",
      "name": "白塔区",
      "id": "211002000000"
    },
    "211003000000": {
      "city": "辽阳市",
      "name": "文圣区",
      "id": "211003000000"
    },
    "211004000000": {
      "city": "辽阳市",
      "name": "宏伟区",
      "id": "211004000000"
    },
    "211005000000": {
      "city": "辽阳市",
      "name": "弓长岭区",
      "id": "211005000000"
    },
    "211011000000": {
      "city": "辽阳市",
      "name": "太子河区",
      "id": "211011000000"
    },
    "211021000000": {
      "city": "辽阳市",
      "name": "辽阳县",
      "id": "211021000000"
    },
    "211081000000": {
      "city": "辽阳市",
      "name": "灯塔市",
      "id": "211081000000"
    },
    "211101000000": {
      "city": "盘锦市",
      "name": "市辖区",
      "id": "211101000000"
    },
    "211102000000": {
      "city": "盘锦市",
      "name": "双台子区",
      "id": "211102000000"
    },
    "211103000000": {
      "city": "盘锦市",
      "name": "兴隆台区",
      "id": "211103000000"
    },
    "211104000000": {
      "city": "盘锦市",
      "name": "大洼区",
      "id": "211104000000"
    },
    "211122000000": {
      "city": "盘锦市",
      "name": "盘山县",
      "id": "211122000000"
    },
    "211201000000": {
      "city": "铁岭市",
      "name": "市辖区",
      "id": "211201000000"
    },
    "211202000000": {
      "city": "铁岭市",
      "name": "银州区",
      "id": "211202000000"
    },
    "211204000000": {
      "city": "铁岭市",
      "name": "清河区",
      "id": "211204000000"
    },
    "211221000000": {
      "city": "铁岭市",
      "name": "铁岭县",
      "id": "211221000000"
    },
    "211223000000": {
      "city": "铁岭市",
      "name": "西丰县",
      "id": "211223000000"
    },
    "211224000000": {
      "city": "铁岭市",
      "name": "昌图县",
      "id": "211224000000"
    },
    "211281000000": {
      "city": "铁岭市",
      "name": "调兵山市",
      "id": "211281000000"
    },
    "211282000000": {
      "city": "铁岭市",
      "name": "开原市",
      "id": "211282000000"
    },
    "211301000000": {
      "city": "朝阳市",
      "name": "市辖区",
      "id": "211301000000"
    },
    "211302000000": {
      "city": "朝阳市",
      "name": "双塔区",
      "id": "211302000000"
    },
    "211303000000": {
      "city": "朝阳市",
      "name": "龙城区",
      "id": "211303000000"
    },
    "211321000000": {
      "city": "朝阳市",
      "name": "朝阳县",
      "id": "211321000000"
    },
    "211322000000": {
      "city": "朝阳市",
      "name": "建平县",
      "id": "211322000000"
    },
    "211324000000": {
      "city": "朝阳市",
      "name": "喀喇沁左翼蒙古族自治县",
      "id": "211324000000"
    },
    "211381000000": {
      "city": "朝阳市",
      "name": "北票市",
      "id": "211381000000"
    },
    "211382000000": {
      "city": "朝阳市",
      "name": "凌源市",
      "id": "211382000000"
    },
    "211401000000": {
      "city": "葫芦岛市",
      "name": "市辖区",
      "id": "211401000000"
    },
    "211402000000": {
      "city": "葫芦岛市",
      "name": "连山区",
      "id": "211402000000"
    },
    "211403000000": {
      "city": "葫芦岛市",
      "name": "龙港区",
      "id": "211403000000"
    },
    "211404000000": {
      "city": "葫芦岛市",
      "name": "南票区",
      "id": "211404000000"
    },
    "211421000000": {
      "city": "葫芦岛市",
      "name": "绥中县",
      "id": "211421000000"
    },
    "211422000000": {
      "city": "葫芦岛市",
      "name": "建昌县",
      "id": "211422000000"
    },
    "211481000000": {
      "city": "葫芦岛市",
      "name": "兴城市",
      "id": "211481000000"
    },
    "220101000000": {
      "city": "长春市",
      "name": "市辖区",
      "id": "220101000000"
    },
    "220102000000": {
      "city": "长春市",
      "name": "南关区",
      "id": "220102000000"
    },
    "220103000000": {
      "city": "长春市",
      "name": "宽城区",
      "id": "220103000000"
    },
    "220104000000": {
      "city": "长春市",
      "name": "朝阳区",
      "id": "220104000000"
    },
    "220105000000": {
      "city": "长春市",
      "name": "二道区",
      "id": "220105000000"
    },
    "220106000000": {
      "city": "长春市",
      "name": "绿园区",
      "id": "220106000000"
    },
    "220112000000": {
      "city": "长春市",
      "name": "双阳区",
      "id": "220112000000"
    },
    "220113000000": {
      "city": "长春市",
      "name": "九台区",
      "id": "220113000000"
    },
    "220122000000": {
      "city": "长春市",
      "name": "农安县",
      "id": "220122000000"
    },
    "220171000000": {
      "city": "长春市",
      "name": "长春经济技术开发区",
      "id": "220171000000"
    },
    "220172000000": {
      "city": "长春市",
      "name": "长春净月高新技术产业开发区",
      "id": "220172000000"
    },
    "220173000000": {
      "city": "长春市",
      "name": "长春高新技术产业开发区",
      "id": "220173000000"
    },
    "220174000000": {
      "city": "长春市",
      "name": "长春汽车经济技术开发区",
      "id": "220174000000"
    },
    "220182000000": {
      "city": "长春市",
      "name": "榆树市",
      "id": "220182000000"
    },
    "220183000000": {
      "city": "长春市",
      "name": "德惠市",
      "id": "220183000000"
    },
    "220201000000": {
      "city": "吉林市",
      "name": "市辖区",
      "id": "220201000000"
    },
    "220202000000": {
      "city": "吉林市",
      "name": "昌邑区",
      "id": "220202000000"
    },
    "220203000000": {
      "city": "吉林市",
      "name": "龙潭区",
      "id": "220203000000"
    },
    "220204000000": {
      "city": "吉林市",
      "name": "船营区",
      "id": "220204000000"
    },
    "220211000000": {
      "city": "吉林市",
      "name": "丰满区",
      "id": "220211000000"
    },
    "220221000000": {
      "city": "吉林市",
      "name": "永吉县",
      "id": "220221000000"
    },
    "220271000000": {
      "city": "吉林市",
      "name": "吉林经济开发区",
      "id": "220271000000"
    },
    "220272000000": {
      "city": "吉林市",
      "name": "吉林高新技术产业开发区",
      "id": "220272000000"
    },
    "220273000000": {
      "city": "吉林市",
      "name": "吉林中国新加坡食品区",
      "id": "220273000000"
    },
    "220281000000": {
      "city": "吉林市",
      "name": "蛟河市",
      "id": "220281000000"
    },
    "220282000000": {
      "city": "吉林市",
      "name": "桦甸市",
      "id": "220282000000"
    },
    "220283000000": {
      "city": "吉林市",
      "name": "舒兰市",
      "id": "220283000000"
    },
    "220284000000": {
      "city": "吉林市",
      "name": "磐石市",
      "id": "220284000000"
    },
    "220301000000": {
      "city": "四平市",
      "name": "市辖区",
      "id": "220301000000"
    },
    "220302000000": {
      "city": "四平市",
      "name": "铁西区",
      "id": "220302000000"
    },
    "220303000000": {
      "city": "四平市",
      "name": "铁东区",
      "id": "220303000000"
    },
    "220322000000": {
      "city": "四平市",
      "name": "梨树县",
      "id": "220322000000"
    },
    "220323000000": {
      "city": "四平市",
      "name": "伊通满族自治县",
      "id": "220323000000"
    },
    "220381000000": {
      "city": "四平市",
      "name": "公主岭市",
      "id": "220381000000"
    },
    "220382000000": {
      "city": "四平市",
      "name": "双辽市",
      "id": "220382000000"
    },
    "220401000000": {
      "city": "辽源市",
      "name": "市辖区",
      "id": "220401000000"
    },
    "220402000000": {
      "city": "辽源市",
      "name": "龙山区",
      "id": "220402000000"
    },
    "220403000000": {
      "city": "辽源市",
      "name": "西安区",
      "id": "220403000000"
    },
    "220421000000": {
      "city": "辽源市",
      "name": "东丰县",
      "id": "220421000000"
    },
    "220422000000": {
      "city": "辽源市",
      "name": "东辽县",
      "id": "220422000000"
    },
    "220501000000": {
      "city": "通化市",
      "name": "市辖区",
      "id": "220501000000"
    },
    "220502000000": {
      "city": "通化市",
      "name": "东昌区",
      "id": "220502000000"
    },
    "220503000000": {
      "city": "通化市",
      "name": "二道江区",
      "id": "220503000000"
    },
    "220521000000": {
      "city": "通化市",
      "name": "通化县",
      "id": "220521000000"
    },
    "220523000000": {
      "city": "通化市",
      "name": "辉南县",
      "id": "220523000000"
    },
    "220524000000": {
      "city": "通化市",
      "name": "柳河县",
      "id": "220524000000"
    },
    "220581000000": {
      "city": "通化市",
      "name": "梅河口市",
      "id": "220581000000"
    },
    "220582000000": {
      "city": "通化市",
      "name": "集安市",
      "id": "220582000000"
    },
    "220601000000": {
      "city": "白山市",
      "name": "市辖区",
      "id": "220601000000"
    },
    "220602000000": {
      "city": "白山市",
      "name": "浑江区",
      "id": "220602000000"
    },
    "220605000000": {
      "city": "白山市",
      "name": "江源区",
      "id": "220605000000"
    },
    "220621000000": {
      "city": "白山市",
      "name": "抚松县",
      "id": "220621000000"
    },
    "220622000000": {
      "city": "白山市",
      "name": "靖宇县",
      "id": "220622000000"
    },
    "220623000000": {
      "city": "白山市",
      "name": "长白朝鲜族自治县",
      "id": "220623000000"
    },
    "220681000000": {
      "city": "白山市",
      "name": "临江市",
      "id": "220681000000"
    },
    "220701000000": {
      "city": "松原市",
      "name": "市辖区",
      "id": "220701000000"
    },
    "220702000000": {
      "city": "松原市",
      "name": "宁江区",
      "id": "220702000000"
    },
    "220721000000": {
      "city": "松原市",
      "name": "前郭尔罗斯蒙古族自治县",
      "id": "220721000000"
    },
    "220722000000": {
      "city": "松原市",
      "name": "长岭县",
      "id": "220722000000"
    },
    "220723000000": {
      "city": "松原市",
      "name": "乾安县",
      "id": "220723000000"
    },
    "220771000000": {
      "city": "松原市",
      "name": "吉林松原经济开发区",
      "id": "220771000000"
    },
    "220781000000": {
      "city": "松原市",
      "name": "扶余市",
      "id": "220781000000"
    },
    "220801000000": {
      "city": "白城市",
      "name": "市辖区",
      "id": "220801000000"
    },
    "220802000000": {
      "city": "白城市",
      "name": "洮北区",
      "id": "220802000000"
    },
    "220821000000": {
      "city": "白城市",
      "name": "镇赉县",
      "id": "220821000000"
    },
    "220822000000": {
      "city": "白城市",
      "name": "通榆县",
      "id": "220822000000"
    },
    "220871000000": {
      "city": "白城市",
      "name": "吉林白城经济开发区",
      "id": "220871000000"
    },
    "220881000000": {
      "city": "白城市",
      "name": "洮南市",
      "id": "220881000000"
    },
    "220882000000": {
      "city": "白城市",
      "name": "大安市",
      "id": "220882000000"
    },
    "222401000000": {
      "city": "延边朝鲜族自治州",
      "name": "延吉市",
      "id": "222401000000"
    },
    "222402000000": {
      "city": "延边朝鲜族自治州",
      "name": "图们市",
      "id": "222402000000"
    },
    "222403000000": {
      "city": "延边朝鲜族自治州",
      "name": "敦化市",
      "id": "222403000000"
    },
    "222404000000": {
      "city": "延边朝鲜族自治州",
      "name": "珲春市",
      "id": "222404000000"
    },
    "222405000000": {
      "city": "延边朝鲜族自治州",
      "name": "龙井市",
      "id": "222405000000"
    },
    "222406000000": {
      "city": "延边朝鲜族自治州",
      "name": "和龙市",
      "id": "222406000000"
    },
    "222424000000": {
      "city": "延边朝鲜族自治州",
      "name": "汪清县",
      "id": "222424000000"
    },
    "222426000000": {
      "city": "延边朝鲜族自治州",
      "name": "安图县",
      "id": "222426000000"
    },
    "230101000000": {
      "city": "哈尔滨市",
      "name": "市辖区",
      "id": "230101000000"
    },
    "230102000000": {
      "city": "哈尔滨市",
      "name": "道里区",
      "id": "230102000000"
    },
    "230103000000": {
      "city": "哈尔滨市",
      "name": "南岗区",
      "id": "230103000000"
    },
    "230104000000": {
      "city": "哈尔滨市",
      "name": "道外区",
      "id": "230104000000"
    },
    "230108000000": {
      "city": "哈尔滨市",
      "name": "平房区",
      "id": "230108000000"
    },
    "230109000000": {
      "city": "哈尔滨市",
      "name": "松北区",
      "id": "230109000000"
    },
    "230110000000": {
      "city": "哈尔滨市",
      "name": "香坊区",
      "id": "230110000000"
    },
    "230111000000": {
      "city": "哈尔滨市",
      "name": "呼兰区",
      "id": "230111000000"
    },
    "230112000000": {
      "city": "哈尔滨市",
      "name": "阿城区",
      "id": "230112000000"
    },
    "230113000000": {
      "city": "哈尔滨市",
      "name": "双城区",
      "id": "230113000000"
    },
    "230123000000": {
      "city": "哈尔滨市",
      "name": "依兰县",
      "id": "230123000000"
    },
    "230124000000": {
      "city": "哈尔滨市",
      "name": "方正县",
      "id": "230124000000"
    },
    "230125000000": {
      "city": "哈尔滨市",
      "name": "宾县",
      "id": "230125000000"
    },
    "230126000000": {
      "city": "哈尔滨市",
      "name": "巴彦县",
      "id": "230126000000"
    },
    "230127000000": {
      "city": "哈尔滨市",
      "name": "木兰县",
      "id": "230127000000"
    },
    "230128000000": {
      "city": "哈尔滨市",
      "name": "通河县",
      "id": "230128000000"
    },
    "230129000000": {
      "city": "哈尔滨市",
      "name": "延寿县",
      "id": "230129000000"
    },
    "230183000000": {
      "city": "哈尔滨市",
      "name": "尚志市",
      "id": "230183000000"
    },
    "230184000000": {
      "city": "哈尔滨市",
      "name": "五常市",
      "id": "230184000000"
    },
    "230201000000": {
      "city": "齐齐哈尔市",
      "name": "市辖区",
      "id": "230201000000"
    },
    "230202000000": {
      "city": "齐齐哈尔市",
      "name": "龙沙区",
      "id": "230202000000"
    },
    "230203000000": {
      "city": "齐齐哈尔市",
      "name": "建华区",
      "id": "230203000000"
    },
    "230204000000": {
      "city": "齐齐哈尔市",
      "name": "铁锋区",
      "id": "230204000000"
    },
    "230205000000": {
      "city": "齐齐哈尔市",
      "name": "昂昂溪区",
      "id": "230205000000"
    },
    "230206000000": {
      "city": "齐齐哈尔市",
      "name": "富拉尔基区",
      "id": "230206000000"
    },
    "230207000000": {
      "city": "齐齐哈尔市",
      "name": "碾子山区",
      "id": "230207000000"
    },
    "230208000000": {
      "city": "齐齐哈尔市",
      "name": "梅里斯达斡尔族区",
      "id": "230208000000"
    },
    "230221000000": {
      "city": "齐齐哈尔市",
      "name": "龙江县",
      "id": "230221000000"
    },
    "230223000000": {
      "city": "齐齐哈尔市",
      "name": "依安县",
      "id": "230223000000"
    },
    "230224000000": {
      "city": "齐齐哈尔市",
      "name": "泰来县",
      "id": "230224000000"
    },
    "230225000000": {
      "city": "齐齐哈尔市",
      "name": "甘南县",
      "id": "230225000000"
    },
    "230227000000": {
      "city": "齐齐哈尔市",
      "name": "富裕县",
      "id": "230227000000"
    },
    "230229000000": {
      "city": "齐齐哈尔市",
      "name": "克山县",
      "id": "230229000000"
    },
    "230230000000": {
      "city": "齐齐哈尔市",
      "name": "克东县",
      "id": "230230000000"
    },
    "230231000000": {
      "city": "齐齐哈尔市",
      "name": "拜泉县",
      "id": "230231000000"
    },
    "230281000000": {
      "city": "齐齐哈尔市",
      "name": "讷河市",
      "id": "230281000000"
    },
    "230301000000": {
      "city": "鸡西市",
      "name": "市辖区",
      "id": "230301000000"
    },
    "230302000000": {
      "city": "鸡西市",
      "name": "鸡冠区",
      "id": "230302000000"
    },
    "230303000000": {
      "city": "鸡西市",
      "name": "恒山区",
      "id": "230303000000"
    },
    "230304000000": {
      "city": "鸡西市",
      "name": "滴道区",
      "id": "230304000000"
    },
    "230305000000": {
      "city": "鸡西市",
      "name": "梨树区",
      "id": "230305000000"
    },
    "230306000000": {
      "city": "鸡西市",
      "name": "城子河区",
      "id": "230306000000"
    },
    "230307000000": {
      "city": "鸡西市",
      "name": "麻山区",
      "id": "230307000000"
    },
    "230321000000": {
      "city": "鸡西市",
      "name": "鸡东县",
      "id": "230321000000"
    },
    "230381000000": {
      "city": "鸡西市",
      "name": "虎林市",
      "id": "230381000000"
    },
    "230382000000": {
      "city": "鸡西市",
      "name": "密山市",
      "id": "230382000000"
    },
    "230401000000": {
      "city": "鹤岗市",
      "name": "市辖区",
      "id": "230401000000"
    },
    "230402000000": {
      "city": "鹤岗市",
      "name": "向阳区",
      "id": "230402000000"
    },
    "230403000000": {
      "city": "鹤岗市",
      "name": "工农区",
      "id": "230403000000"
    },
    "230404000000": {
      "city": "鹤岗市",
      "name": "南山区",
      "id": "230404000000"
    },
    "230405000000": {
      "city": "鹤岗市",
      "name": "兴安区",
      "id": "230405000000"
    },
    "230406000000": {
      "city": "鹤岗市",
      "name": "东山区",
      "id": "230406000000"
    },
    "230407000000": {
      "city": "鹤岗市",
      "name": "兴山区",
      "id": "230407000000"
    },
    "230421000000": {
      "city": "鹤岗市",
      "name": "萝北县",
      "id": "230421000000"
    },
    "230422000000": {
      "city": "鹤岗市",
      "name": "绥滨县",
      "id": "230422000000"
    },
    "230501000000": {
      "city": "双鸭山市",
      "name": "市辖区",
      "id": "230501000000"
    },
    "230502000000": {
      "city": "双鸭山市",
      "name": "尖山区",
      "id": "230502000000"
    },
    "230503000000": {
      "city": "双鸭山市",
      "name": "岭东区",
      "id": "230503000000"
    },
    "230505000000": {
      "city": "双鸭山市",
      "name": "四方台区",
      "id": "230505000000"
    },
    "230506000000": {
      "city": "双鸭山市",
      "name": "宝山区",
      "id": "230506000000"
    },
    "230521000000": {
      "city": "双鸭山市",
      "name": "集贤县",
      "id": "230521000000"
    },
    "230522000000": {
      "city": "双鸭山市",
      "name": "友谊县",
      "id": "230522000000"
    },
    "230523000000": {
      "city": "双鸭山市",
      "name": "宝清县",
      "id": "230523000000"
    },
    "230524000000": {
      "city": "双鸭山市",
      "name": "饶河县",
      "id": "230524000000"
    },
    "230601000000": {
      "city": "大庆市",
      "name": "市辖区",
      "id": "230601000000"
    },
    "230602000000": {
      "city": "大庆市",
      "name": "萨尔图区",
      "id": "230602000000"
    },
    "230603000000": {
      "city": "大庆市",
      "name": "龙凤区",
      "id": "230603000000"
    },
    "230604000000": {
      "city": "大庆市",
      "name": "让胡路区",
      "id": "230604000000"
    },
    "230605000000": {
      "city": "大庆市",
      "name": "红岗区",
      "id": "230605000000"
    },
    "230606000000": {
      "city": "大庆市",
      "name": "大同区",
      "id": "230606000000"
    },
    "230621000000": {
      "city": "大庆市",
      "name": "肇州县",
      "id": "230621000000"
    },
    "230622000000": {
      "city": "大庆市",
      "name": "肇源县",
      "id": "230622000000"
    },
    "230623000000": {
      "city": "大庆市",
      "name": "林甸县",
      "id": "230623000000"
    },
    "230624000000": {
      "city": "大庆市",
      "name": "杜尔伯特蒙古族自治县",
      "id": "230624000000"
    },
    "230671000000": {
      "city": "大庆市",
      "name": "大庆高新技术产业开发区",
      "id": "230671000000"
    },
    "230701000000": {
      "city": "伊春市",
      "name": "市辖区",
      "id": "230701000000"
    },
    "230702000000": {
      "city": "伊春市",
      "name": "伊春区",
      "id": "230702000000"
    },
    "230703000000": {
      "city": "伊春市",
      "name": "南岔区",
      "id": "230703000000"
    },
    "230704000000": {
      "city": "伊春市",
      "name": "友好区",
      "id": "230704000000"
    },
    "230705000000": {
      "city": "伊春市",
      "name": "西林区",
      "id": "230705000000"
    },
    "230706000000": {
      "city": "伊春市",
      "name": "翠峦区",
      "id": "230706000000"
    },
    "230707000000": {
      "city": "伊春市",
      "name": "新青区",
      "id": "230707000000"
    },
    "230708000000": {
      "city": "伊春市",
      "name": "美溪区",
      "id": "230708000000"
    },
    "230709000000": {
      "city": "伊春市",
      "name": "金山屯区",
      "id": "230709000000"
    },
    "230710000000": {
      "city": "伊春市",
      "name": "五营区",
      "id": "230710000000"
    },
    "230711000000": {
      "city": "伊春市",
      "name": "乌马河区",
      "id": "230711000000"
    },
    "230712000000": {
      "city": "伊春市",
      "name": "汤旺河区",
      "id": "230712000000"
    },
    "230713000000": {
      "city": "伊春市",
      "name": "带岭区",
      "id": "230713000000"
    },
    "230714000000": {
      "city": "伊春市",
      "name": "乌伊岭区",
      "id": "230714000000"
    },
    "230715000000": {
      "city": "伊春市",
      "name": "红星区",
      "id": "230715000000"
    },
    "230716000000": {
      "city": "伊春市",
      "name": "上甘岭区",
      "id": "230716000000"
    },
    "230722000000": {
      "city": "伊春市",
      "name": "嘉荫县",
      "id": "230722000000"
    },
    "230781000000": {
      "city": "伊春市",
      "name": "铁力市",
      "id": "230781000000"
    },
    "230801000000": {
      "city": "佳木斯市",
      "name": "市辖区",
      "id": "230801000000"
    },
    "230803000000": {
      "city": "佳木斯市",
      "name": "向阳区",
      "id": "230803000000"
    },
    "230804000000": {
      "city": "佳木斯市",
      "name": "前进区",
      "id": "230804000000"
    },
    "230805000000": {
      "city": "佳木斯市",
      "name": "东风区",
      "id": "230805000000"
    },
    "230811000000": {
      "city": "佳木斯市",
      "name": "郊区",
      "id": "230811000000"
    },
    "230822000000": {
      "city": "佳木斯市",
      "name": "桦南县",
      "id": "230822000000"
    },
    "230826000000": {
      "city": "佳木斯市",
      "name": "桦川县",
      "id": "230826000000"
    },
    "230828000000": {
      "city": "佳木斯市",
      "name": "汤原县",
      "id": "230828000000"
    },
    "230881000000": {
      "city": "佳木斯市",
      "name": "同江市",
      "id": "230881000000"
    },
    "230882000000": {
      "city": "佳木斯市",
      "name": "富锦市",
      "id": "230882000000"
    },
    "230883000000": {
      "city": "佳木斯市",
      "name": "抚远市",
      "id": "230883000000"
    },
    "230901000000": {
      "city": "七台河市",
      "name": "市辖区",
      "id": "230901000000"
    },
    "230902000000": {
      "city": "七台河市",
      "name": "新兴区",
      "id": "230902000000"
    },
    "230903000000": {
      "city": "七台河市",
      "name": "桃山区",
      "id": "230903000000"
    },
    "230904000000": {
      "city": "七台河市",
      "name": "茄子河区",
      "id": "230904000000"
    },
    "230921000000": {
      "city": "七台河市",
      "name": "勃利县",
      "id": "230921000000"
    },
    "231001000000": {
      "city": "牡丹江市",
      "name": "市辖区",
      "id": "231001000000"
    },
    "231002000000": {
      "city": "牡丹江市",
      "name": "东安区",
      "id": "231002000000"
    },
    "231003000000": {
      "city": "牡丹江市",
      "name": "阳明区",
      "id": "231003000000"
    },
    "231004000000": {
      "city": "牡丹江市",
      "name": "爱民区",
      "id": "231004000000"
    },
    "231005000000": {
      "city": "牡丹江市",
      "name": "西安区",
      "id": "231005000000"
    },
    "231025000000": {
      "city": "牡丹江市",
      "name": "林口县",
      "id": "231025000000"
    },
    "231071000000": {
      "city": "牡丹江市",
      "name": "牡丹江经济技术开发区",
      "id": "231071000000"
    },
    "231081000000": {
      "city": "牡丹江市",
      "name": "绥芬河市",
      "id": "231081000000"
    },
    "231083000000": {
      "city": "牡丹江市",
      "name": "海林市",
      "id": "231083000000"
    },
    "231084000000": {
      "city": "牡丹江市",
      "name": "宁安市",
      "id": "231084000000"
    },
    "231085000000": {
      "city": "牡丹江市",
      "name": "穆棱市",
      "id": "231085000000"
    },
    "231086000000": {
      "city": "牡丹江市",
      "name": "东宁市",
      "id": "231086000000"
    },
    "231101000000": {
      "city": "黑河市",
      "name": "市辖区",
      "id": "231101000000"
    },
    "231102000000": {
      "city": "黑河市",
      "name": "爱辉区",
      "id": "231102000000"
    },
    "231121000000": {
      "city": "黑河市",
      "name": "嫩江县",
      "id": "231121000000"
    },
    "231123000000": {
      "city": "黑河市",
      "name": "逊克县",
      "id": "231123000000"
    },
    "231124000000": {
      "city": "黑河市",
      "name": "孙吴县",
      "id": "231124000000"
    },
    "231181000000": {
      "city": "黑河市",
      "name": "北安市",
      "id": "231181000000"
    },
    "231182000000": {
      "city": "黑河市",
      "name": "五大连池市",
      "id": "231182000000"
    },
    "231201000000": {
      "city": "绥化市",
      "name": "市辖区",
      "id": "231201000000"
    },
    "231202000000": {
      "city": "绥化市",
      "name": "北林区",
      "id": "231202000000"
    },
    "231221000000": {
      "city": "绥化市",
      "name": "望奎县",
      "id": "231221000000"
    },
    "231222000000": {
      "city": "绥化市",
      "name": "兰西县",
      "id": "231222000000"
    },
    "231223000000": {
      "city": "绥化市",
      "name": "青冈县",
      "id": "231223000000"
    },
    "231224000000": {
      "city": "绥化市",
      "name": "庆安县",
      "id": "231224000000"
    },
    "231225000000": {
      "city": "绥化市",
      "name": "明水县",
      "id": "231225000000"
    },
    "231226000000": {
      "city": "绥化市",
      "name": "绥棱县",
      "id": "231226000000"
    },
    "231281000000": {
      "city": "绥化市",
      "name": "安达市",
      "id": "231281000000"
    },
    "231282000000": {
      "city": "绥化市",
      "name": "肇东市",
      "id": "231282000000"
    },
    "231283000000": {
      "city": "绥化市",
      "name": "海伦市",
      "id": "231283000000"
    },
    "232701000000": {
      "city": "大兴安岭地区",
      "name": "漠河市",
      "id": "232701000000"
    },
    "232721000000": {
      "city": "大兴安岭地区",
      "name": "呼玛县",
      "id": "232721000000"
    },
    "232722000000": {
      "city": "大兴安岭地区",
      "name": "塔河县",
      "id": "232722000000"
    },
    "232761000000": {
      "city": "大兴安岭地区",
      "name": "加格达奇区",
      "id": "232761000000"
    },
    "232762000000": {
      "city": "大兴安岭地区",
      "name": "松岭区",
      "id": "232762000000"
    },
    "232763000000": {
      "city": "大兴安岭地区",
      "name": "新林区",
      "id": "232763000000"
    },
    "232764000000": {
      "city": "大兴安岭地区",
      "name": "呼中区",
      "id": "232764000000"
    },
    "310101000000": {
      "city": "市辖区",
      "name": "黄浦区",
      "id": "310101000000"
    },
    "310104000000": {
      "city": "市辖区",
      "name": "徐汇区",
      "id": "310104000000"
    },
    "310105000000": {
      "city": "市辖区",
      "name": "长宁区",
      "id": "310105000000"
    },
    "310106000000": {
      "city": "市辖区",
      "name": "静安区",
      "id": "310106000000"
    },
    "310107000000": {
      "city": "市辖区",
      "name": "普陀区",
      "id": "310107000000"
    },
    "310109000000": {
      "city": "市辖区",
      "name": "虹口区",
      "id": "310109000000"
    },
    "310110000000": {
      "city": "市辖区",
      "name": "杨浦区",
      "id": "310110000000"
    },
    "310112000000": {
      "city": "市辖区",
      "name": "闵行区",
      "id": "310112000000"
    },
    "310113000000": {
      "city": "市辖区",
      "name": "宝山区",
      "id": "310113000000"
    },
    "310114000000": {
      "city": "市辖区",
      "name": "嘉定区",
      "id": "310114000000"
    },
    "310115000000": {
      "city": "市辖区",
      "name": "浦东新区",
      "id": "310115000000"
    },
    "310116000000": {
      "city": "市辖区",
      "name": "金山区",
      "id": "310116000000"
    },
    "310117000000": {
      "city": "市辖区",
      "name": "松江区",
      "id": "310117000000"
    },
    "310118000000": {
      "city": "市辖区",
      "name": "青浦区",
      "id": "310118000000"
    },
    "310120000000": {
      "city": "市辖区",
      "name": "奉贤区",
      "id": "310120000000"
    },
    "310151000000": {
      "city": "市辖区",
      "name": "崇明区",
      "id": "310151000000"
    },
    "320101000000": {
      "city": "南京市",
      "name": "市辖区",
      "id": "320101000000"
    },
    "320102000000": {
      "city": "南京市",
      "name": "玄武区",
      "id": "320102000000"
    },
    "320104000000": {
      "city": "南京市",
      "name": "秦淮区",
      "id": "320104000000"
    },
    "320105000000": {
      "city": "南京市",
      "name": "建邺区",
      "id": "320105000000"
    },
    "320106000000": {
      "city": "南京市",
      "name": "鼓楼区",
      "id": "320106000000"
    },
    "320111000000": {
      "city": "南京市",
      "name": "浦口区",
      "id": "320111000000"
    },
    "320113000000": {
      "city": "南京市",
      "name": "栖霞区",
      "id": "320113000000"
    },
    "320114000000": {
      "city": "南京市",
      "name": "雨花台区",
      "id": "320114000000"
    },
    "320115000000": {
      "city": "南京市",
      "name": "江宁区",
      "id": "320115000000"
    },
    "320116000000": {
      "city": "南京市",
      "name": "六合区",
      "id": "320116000000"
    },
    "320117000000": {
      "city": "南京市",
      "name": "溧水区",
      "id": "320117000000"
    },
    "320118000000": {
      "city": "南京市",
      "name": "高淳区",
      "id": "320118000000"
    },
    "320201000000": {
      "city": "无锡市",
      "name": "市辖区",
      "id": "320201000000"
    },
    "320205000000": {
      "city": "无锡市",
      "name": "锡山区",
      "id": "320205000000"
    },
    "320206000000": {
      "city": "无锡市",
      "name": "惠山区",
      "id": "320206000000"
    },
    "320211000000": {
      "city": "无锡市",
      "name": "滨湖区",
      "id": "320211000000"
    },
    "320213000000": {
      "city": "无锡市",
      "name": "梁溪区",
      "id": "320213000000"
    },
    "320214000000": {
      "city": "无锡市",
      "name": "新吴区",
      "id": "320214000000"
    },
    "320281000000": {
      "city": "无锡市",
      "name": "江阴市",
      "id": "320281000000"
    },
    "320282000000": {
      "city": "无锡市",
      "name": "宜兴市",
      "id": "320282000000"
    },
    "320301000000": {
      "city": "徐州市",
      "name": "市辖区",
      "id": "320301000000"
    },
    "320302000000": {
      "city": "徐州市",
      "name": "鼓楼区",
      "id": "320302000000"
    },
    "320303000000": {
      "city": "徐州市",
      "name": "云龙区",
      "id": "320303000000"
    },
    "320305000000": {
      "city": "徐州市",
      "name": "贾汪区",
      "id": "320305000000"
    },
    "320311000000": {
      "city": "徐州市",
      "name": "泉山区",
      "id": "320311000000"
    },
    "320312000000": {
      "city": "徐州市",
      "name": "铜山区",
      "id": "320312000000"
    },
    "320321000000": {
      "city": "徐州市",
      "name": "丰县",
      "id": "320321000000"
    },
    "320322000000": {
      "city": "徐州市",
      "name": "沛县",
      "id": "320322000000"
    },
    "320324000000": {
      "city": "徐州市",
      "name": "睢宁县",
      "id": "320324000000"
    },
    "320371000000": {
      "city": "徐州市",
      "name": "徐州经济技术开发区",
      "id": "320371000000"
    },
    "320381000000": {
      "city": "徐州市",
      "name": "新沂市",
      "id": "320381000000"
    },
    "320382000000": {
      "city": "徐州市",
      "name": "邳州市",
      "id": "320382000000"
    },
    "320401000000": {
      "city": "常州市",
      "name": "市辖区",
      "id": "320401000000"
    },
    "320402000000": {
      "city": "常州市",
      "name": "天宁区",
      "id": "320402000000"
    },
    "320404000000": {
      "city": "常州市",
      "name": "钟楼区",
      "id": "320404000000"
    },
    "320411000000": {
      "city": "常州市",
      "name": "新北区",
      "id": "320411000000"
    },
    "320412000000": {
      "city": "常州市",
      "name": "武进区",
      "id": "320412000000"
    },
    "320413000000": {
      "city": "常州市",
      "name": "金坛区",
      "id": "320413000000"
    },
    "320481000000": {
      "city": "常州市",
      "name": "溧阳市",
      "id": "320481000000"
    },
    "320501000000": {
      "city": "苏州市",
      "name": "市辖区",
      "id": "320501000000"
    },
    "320505000000": {
      "city": "苏州市",
      "name": "虎丘区",
      "id": "320505000000"
    },
    "320506000000": {
      "city": "苏州市",
      "name": "吴中区",
      "id": "320506000000"
    },
    "320507000000": {
      "city": "苏州市",
      "name": "相城区",
      "id": "320507000000"
    },
    "320508000000": {
      "city": "苏州市",
      "name": "姑苏区",
      "id": "320508000000"
    },
    "320509000000": {
      "city": "苏州市",
      "name": "吴江区",
      "id": "320509000000"
    },
    "320571000000": {
      "city": "苏州市",
      "name": "苏州工业园区",
      "id": "320571000000"
    },
    "320581000000": {
      "city": "苏州市",
      "name": "常熟市",
      "id": "320581000000"
    },
    "320582000000": {
      "city": "苏州市",
      "name": "张家港市",
      "id": "320582000000"
    },
    "320583000000": {
      "city": "苏州市",
      "name": "昆山市",
      "id": "320583000000"
    },
    "320585000000": {
      "city": "苏州市",
      "name": "太仓市",
      "id": "320585000000"
    },
    "320601000000": {
      "city": "南通市",
      "name": "市辖区",
      "id": "320601000000"
    },
    "320602000000": {
      "city": "南通市",
      "name": "崇川区",
      "id": "320602000000"
    },
    "320611000000": {
      "city": "南通市",
      "name": "港闸区",
      "id": "320611000000"
    },
    "320612000000": {
      "city": "南通市",
      "name": "通州区",
      "id": "320612000000"
    },
    "320623000000": {
      "city": "南通市",
      "name": "如东县",
      "id": "320623000000"
    },
    "320671000000": {
      "city": "南通市",
      "name": "南通经济技术开发区",
      "id": "320671000000"
    },
    "320681000000": {
      "city": "南通市",
      "name": "启东市",
      "id": "320681000000"
    },
    "320682000000": {
      "city": "南通市",
      "name": "如皋市",
      "id": "320682000000"
    },
    "320684000000": {
      "city": "南通市",
      "name": "海门市",
      "id": "320684000000"
    },
    "320685000000": {
      "city": "南通市",
      "name": "海安市",
      "id": "320685000000"
    },
    "320701000000": {
      "city": "连云港市",
      "name": "市辖区",
      "id": "320701000000"
    },
    "320703000000": {
      "city": "连云港市",
      "name": "连云区",
      "id": "320703000000"
    },
    "320706000000": {
      "city": "连云港市",
      "name": "海州区",
      "id": "320706000000"
    },
    "320707000000": {
      "city": "连云港市",
      "name": "赣榆区",
      "id": "320707000000"
    },
    "320722000000": {
      "city": "连云港市",
      "name": "东海县",
      "id": "320722000000"
    },
    "320723000000": {
      "city": "连云港市",
      "name": "灌云县",
      "id": "320723000000"
    },
    "320724000000": {
      "city": "连云港市",
      "name": "灌南县",
      "id": "320724000000"
    },
    "320771000000": {
      "city": "连云港市",
      "name": "连云港经济技术开发区",
      "id": "320771000000"
    },
    "320772000000": {
      "city": "连云港市",
      "name": "连云港高新技术产业开发区",
      "id": "320772000000"
    },
    "320801000000": {
      "city": "淮安市",
      "name": "市辖区",
      "id": "320801000000"
    },
    "320803000000": {
      "city": "淮安市",
      "name": "淮安区",
      "id": "320803000000"
    },
    "320804000000": {
      "city": "淮安市",
      "name": "淮阴区",
      "id": "320804000000"
    },
    "320812000000": {
      "city": "淮安市",
      "name": "清江浦区",
      "id": "320812000000"
    },
    "320813000000": {
      "city": "淮安市",
      "name": "洪泽区",
      "id": "320813000000"
    },
    "320826000000": {
      "city": "淮安市",
      "name": "涟水县",
      "id": "320826000000"
    },
    "320830000000": {
      "city": "淮安市",
      "name": "盱眙县",
      "id": "320830000000"
    },
    "320831000000": {
      "city": "淮安市",
      "name": "金湖县",
      "id": "320831000000"
    },
    "320871000000": {
      "city": "淮安市",
      "name": "淮安经济技术开发区",
      "id": "320871000000"
    },
    "320901000000": {
      "city": "盐城市",
      "name": "市辖区",
      "id": "320901000000"
    },
    "320902000000": {
      "city": "盐城市",
      "name": "亭湖区",
      "id": "320902000000"
    },
    "320903000000": {
      "city": "盐城市",
      "name": "盐都区",
      "id": "320903000000"
    },
    "320904000000": {
      "city": "盐城市",
      "name": "大丰区",
      "id": "320904000000"
    },
    "320921000000": {
      "city": "盐城市",
      "name": "响水县",
      "id": "320921000000"
    },
    "320922000000": {
      "city": "盐城市",
      "name": "滨海县",
      "id": "320922000000"
    },
    "320923000000": {
      "city": "盐城市",
      "name": "阜宁县",
      "id": "320923000000"
    },
    "320924000000": {
      "city": "盐城市",
      "name": "射阳县",
      "id": "320924000000"
    },
    "320925000000": {
      "city": "盐城市",
      "name": "建湖县",
      "id": "320925000000"
    },
    "320971000000": {
      "city": "盐城市",
      "name": "盐城经济技术开发区",
      "id": "320971000000"
    },
    "320981000000": {
      "city": "盐城市",
      "name": "东台市",
      "id": "320981000000"
    },
    "321001000000": {
      "city": "扬州市",
      "name": "市辖区",
      "id": "321001000000"
    },
    "321002000000": {
      "city": "扬州市",
      "name": "广陵区",
      "id": "321002000000"
    },
    "321003000000": {
      "city": "扬州市",
      "name": "邗江区",
      "id": "321003000000"
    },
    "321012000000": {
      "city": "扬州市",
      "name": "江都区",
      "id": "321012000000"
    },
    "321023000000": {
      "city": "扬州市",
      "name": "宝应县",
      "id": "321023000000"
    },
    "321071000000": {
      "city": "扬州市",
      "name": "扬州经济技术开发区",
      "id": "321071000000"
    },
    "321081000000": {
      "city": "扬州市",
      "name": "仪征市",
      "id": "321081000000"
    },
    "321084000000": {
      "city": "扬州市",
      "name": "高邮市",
      "id": "321084000000"
    },
    "321101000000": {
      "city": "镇江市",
      "name": "市辖区",
      "id": "321101000000"
    },
    "321102000000": {
      "city": "镇江市",
      "name": "京口区",
      "id": "321102000000"
    },
    "321111000000": {
      "city": "镇江市",
      "name": "润州区",
      "id": "321111000000"
    },
    "321112000000": {
      "city": "镇江市",
      "name": "丹徒区",
      "id": "321112000000"
    },
    "321171000000": {
      "city": "镇江市",
      "name": "镇江新区",
      "id": "321171000000"
    },
    "321181000000": {
      "city": "镇江市",
      "name": "丹阳市",
      "id": "321181000000"
    },
    "321182000000": {
      "city": "镇江市",
      "name": "扬中市",
      "id": "321182000000"
    },
    "321183000000": {
      "city": "镇江市",
      "name": "句容市",
      "id": "321183000000"
    },
    "321201000000": {
      "city": "泰州市",
      "name": "市辖区",
      "id": "321201000000"
    },
    "321202000000": {
      "city": "泰州市",
      "name": "海陵区",
      "id": "321202000000"
    },
    "321203000000": {
      "city": "泰州市",
      "name": "高港区",
      "id": "321203000000"
    },
    "321204000000": {
      "city": "泰州市",
      "name": "姜堰区",
      "id": "321204000000"
    },
    "321271000000": {
      "city": "泰州市",
      "name": "泰州医药高新技术产业开发区",
      "id": "321271000000"
    },
    "321281000000": {
      "city": "泰州市",
      "name": "兴化市",
      "id": "321281000000"
    },
    "321282000000": {
      "city": "泰州市",
      "name": "靖江市",
      "id": "321282000000"
    },
    "321283000000": {
      "city": "泰州市",
      "name": "泰兴市",
      "id": "321283000000"
    },
    "321301000000": {
      "city": "宿迁市",
      "name": "市辖区",
      "id": "321301000000"
    },
    "321302000000": {
      "city": "宿迁市",
      "name": "宿城区",
      "id": "321302000000"
    },
    "321311000000": {
      "city": "宿迁市",
      "name": "宿豫区",
      "id": "321311000000"
    },
    "321322000000": {
      "city": "宿迁市",
      "name": "沭阳县",
      "id": "321322000000"
    },
    "321323000000": {
      "city": "宿迁市",
      "name": "泗阳县",
      "id": "321323000000"
    },
    "321324000000": {
      "city": "宿迁市",
      "name": "泗洪县",
      "id": "321324000000"
    },
    "321371000000": {
      "city": "宿迁市",
      "name": "宿迁经济技术开发区",
      "id": "321371000000"
    },
    "330101000000": {
      "city": "杭州市",
      "name": "市辖区",
      "id": "330101000000"
    },
    "330102000000": {
      "city": "杭州市",
      "name": "上城区",
      "id": "330102000000"
    },
    "330103000000": {
      "city": "杭州市",
      "name": "下城区",
      "id": "330103000000"
    },
    "330104000000": {
      "city": "杭州市",
      "name": "江干区",
      "id": "330104000000"
    },
    "330105000000": {
      "city": "杭州市",
      "name": "拱墅区",
      "id": "330105000000"
    },
    "330106000000": {
      "city": "杭州市",
      "name": "西湖区",
      "id": "330106000000"
    },
    "330108000000": {
      "city": "杭州市",
      "name": "滨江区",
      "id": "330108000000"
    },
    "330109000000": {
      "city": "杭州市",
      "name": "萧山区",
      "id": "330109000000"
    },
    "330110000000": {
      "city": "杭州市",
      "name": "余杭区",
      "id": "330110000000"
    },
    "330111000000": {
      "city": "杭州市",
      "name": "富阳区",
      "id": "330111000000"
    },
    "330112000000": {
      "city": "杭州市",
      "name": "临安区",
      "id": "330112000000"
    },
    "330122000000": {
      "city": "杭州市",
      "name": "桐庐县",
      "id": "330122000000"
    },
    "330127000000": {
      "city": "杭州市",
      "name": "淳安县",
      "id": "330127000000"
    },
    "330182000000": {
      "city": "杭州市",
      "name": "建德市",
      "id": "330182000000"
    },
    "330201000000": {
      "city": "宁波市",
      "name": "市辖区",
      "id": "330201000000"
    },
    "330203000000": {
      "city": "宁波市",
      "name": "海曙区",
      "id": "330203000000"
    },
    "330205000000": {
      "city": "宁波市",
      "name": "江北区",
      "id": "330205000000"
    },
    "330206000000": {
      "city": "宁波市",
      "name": "北仑区",
      "id": "330206000000"
    },
    "330211000000": {
      "city": "宁波市",
      "name": "镇海区",
      "id": "330211000000"
    },
    "330212000000": {
      "city": "宁波市",
      "name": "鄞州区",
      "id": "330212000000"
    },
    "330213000000": {
      "city": "宁波市",
      "name": "奉化区",
      "id": "330213000000"
    },
    "330225000000": {
      "city": "宁波市",
      "name": "象山县",
      "id": "330225000000"
    },
    "330226000000": {
      "city": "宁波市",
      "name": "宁海县",
      "id": "330226000000"
    },
    "330281000000": {
      "city": "宁波市",
      "name": "余姚市",
      "id": "330281000000"
    },
    "330282000000": {
      "city": "宁波市",
      "name": "慈溪市",
      "id": "330282000000"
    },
    "330301000000": {
      "city": "温州市",
      "name": "市辖区",
      "id": "330301000000"
    },
    "330302000000": {
      "city": "温州市",
      "name": "鹿城区",
      "id": "330302000000"
    },
    "330303000000": {
      "city": "温州市",
      "name": "龙湾区",
      "id": "330303000000"
    },
    "330304000000": {
      "city": "温州市",
      "name": "瓯海区",
      "id": "330304000000"
    },
    "330305000000": {
      "city": "温州市",
      "name": "洞头区",
      "id": "330305000000"
    },
    "330324000000": {
      "city": "温州市",
      "name": "永嘉县",
      "id": "330324000000"
    },
    "330326000000": {
      "city": "温州市",
      "name": "平阳县",
      "id": "330326000000"
    },
    "330327000000": {
      "city": "温州市",
      "name": "苍南县",
      "id": "330327000000"
    },
    "330328000000": {
      "city": "温州市",
      "name": "文成县",
      "id": "330328000000"
    },
    "330329000000": {
      "city": "温州市",
      "name": "泰顺县",
      "id": "330329000000"
    },
    "330371000000": {
      "city": "温州市",
      "name": "温州经济技术开发区",
      "id": "330371000000"
    },
    "330381000000": {
      "city": "温州市",
      "name": "瑞安市",
      "id": "330381000000"
    },
    "330382000000": {
      "city": "温州市",
      "name": "乐清市",
      "id": "330382000000"
    },
    "330401000000": {
      "city": "嘉兴市",
      "name": "市辖区",
      "id": "330401000000"
    },
    "330402000000": {
      "city": "嘉兴市",
      "name": "南湖区",
      "id": "330402000000"
    },
    "330411000000": {
      "city": "嘉兴市",
      "name": "秀洲区",
      "id": "330411000000"
    },
    "330421000000": {
      "city": "嘉兴市",
      "name": "嘉善县",
      "id": "330421000000"
    },
    "330424000000": {
      "city": "嘉兴市",
      "name": "海盐县",
      "id": "330424000000"
    },
    "330481000000": {
      "city": "嘉兴市",
      "name": "海宁市",
      "id": "330481000000"
    },
    "330482000000": {
      "city": "嘉兴市",
      "name": "平湖市",
      "id": "330482000000"
    },
    "330483000000": {
      "city": "嘉兴市",
      "name": "桐乡市",
      "id": "330483000000"
    },
    "330501000000": {
      "city": "湖州市",
      "name": "市辖区",
      "id": "330501000000"
    },
    "330502000000": {
      "city": "湖州市",
      "name": "吴兴区",
      "id": "330502000000"
    },
    "330503000000": {
      "city": "湖州市",
      "name": "南浔区",
      "id": "330503000000"
    },
    "330521000000": {
      "city": "湖州市",
      "name": "德清县",
      "id": "330521000000"
    },
    "330522000000": {
      "city": "湖州市",
      "name": "长兴县",
      "id": "330522000000"
    },
    "330523000000": {
      "city": "湖州市",
      "name": "安吉县",
      "id": "330523000000"
    },
    "330601000000": {
      "city": "绍兴市",
      "name": "市辖区",
      "id": "330601000000"
    },
    "330602000000": {
      "city": "绍兴市",
      "name": "越城区",
      "id": "330602000000"
    },
    "330603000000": {
      "city": "绍兴市",
      "name": "柯桥区",
      "id": "330603000000"
    },
    "330604000000": {
      "city": "绍兴市",
      "name": "上虞区",
      "id": "330604000000"
    },
    "330624000000": {
      "city": "绍兴市",
      "name": "新昌县",
      "id": "330624000000"
    },
    "330681000000": {
      "city": "绍兴市",
      "name": "诸暨市",
      "id": "330681000000"
    },
    "330683000000": {
      "city": "绍兴市",
      "name": "嵊州市",
      "id": "330683000000"
    },
    "330701000000": {
      "city": "金华市",
      "name": "市辖区",
      "id": "330701000000"
    },
    "330702000000": {
      "city": "金华市",
      "name": "婺城区",
      "id": "330702000000"
    },
    "330703000000": {
      "city": "金华市",
      "name": "金东区",
      "id": "330703000000"
    },
    "330723000000": {
      "city": "金华市",
      "name": "武义县",
      "id": "330723000000"
    },
    "330726000000": {
      "city": "金华市",
      "name": "浦江县",
      "id": "330726000000"
    },
    "330727000000": {
      "city": "金华市",
      "name": "磐安县",
      "id": "330727000000"
    },
    "330781000000": {
      "city": "金华市",
      "name": "兰溪市",
      "id": "330781000000"
    },
    "330782000000": {
      "city": "金华市",
      "name": "义乌市",
      "id": "330782000000"
    },
    "330783000000": {
      "city": "金华市",
      "name": "东阳市",
      "id": "330783000000"
    },
    "330784000000": {
      "city": "金华市",
      "name": "永康市",
      "id": "330784000000"
    },
    "330801000000": {
      "city": "衢州市",
      "name": "市辖区",
      "id": "330801000000"
    },
    "330802000000": {
      "city": "衢州市",
      "name": "柯城区",
      "id": "330802000000"
    },
    "330803000000": {
      "city": "衢州市",
      "name": "衢江区",
      "id": "330803000000"
    },
    "330822000000": {
      "city": "衢州市",
      "name": "常山县",
      "id": "330822000000"
    },
    "330824000000": {
      "city": "衢州市",
      "name": "开化县",
      "id": "330824000000"
    },
    "330825000000": {
      "city": "衢州市",
      "name": "龙游县",
      "id": "330825000000"
    },
    "330881000000": {
      "city": "衢州市",
      "name": "江山市",
      "id": "330881000000"
    },
    "330901000000": {
      "city": "舟山市",
      "name": "市辖区",
      "id": "330901000000"
    },
    "330902000000": {
      "city": "舟山市",
      "name": "定海区",
      "id": "330902000000"
    },
    "330903000000": {
      "city": "舟山市",
      "name": "普陀区",
      "id": "330903000000"
    },
    "330921000000": {
      "city": "舟山市",
      "name": "岱山县",
      "id": "330921000000"
    },
    "330922000000": {
      "city": "舟山市",
      "name": "嵊泗县",
      "id": "330922000000"
    },
    "331001000000": {
      "city": "台州市",
      "name": "市辖区",
      "id": "331001000000"
    },
    "331002000000": {
      "city": "台州市",
      "name": "椒江区",
      "id": "331002000000"
    },
    "331003000000": {
      "city": "台州市",
      "name": "黄岩区",
      "id": "331003000000"
    },
    "331004000000": {
      "city": "台州市",
      "name": "路桥区",
      "id": "331004000000"
    },
    "331022000000": {
      "city": "台州市",
      "name": "三门县",
      "id": "331022000000"
    },
    "331023000000": {
      "city": "台州市",
      "name": "天台县",
      "id": "331023000000"
    },
    "331024000000": {
      "city": "台州市",
      "name": "仙居县",
      "id": "331024000000"
    },
    "331081000000": {
      "city": "台州市",
      "name": "温岭市",
      "id": "331081000000"
    },
    "331082000000": {
      "city": "台州市",
      "name": "临海市",
      "id": "331082000000"
    },
    "331083000000": {
      "city": "台州市",
      "name": "玉环市",
      "id": "331083000000"
    },
    "331101000000": {
      "city": "丽水市",
      "name": "市辖区",
      "id": "331101000000"
    },
    "331102000000": {
      "city": "丽水市",
      "name": "莲都区",
      "id": "331102000000"
    },
    "331121000000": {
      "city": "丽水市",
      "name": "青田县",
      "id": "331121000000"
    },
    "331122000000": {
      "city": "丽水市",
      "name": "缙云县",
      "id": "331122000000"
    },
    "331123000000": {
      "city": "丽水市",
      "name": "遂昌县",
      "id": "331123000000"
    },
    "331124000000": {
      "city": "丽水市",
      "name": "松阳县",
      "id": "331124000000"
    },
    "331125000000": {
      "city": "丽水市",
      "name": "云和县",
      "id": "331125000000"
    },
    "331126000000": {
      "city": "丽水市",
      "name": "庆元县",
      "id": "331126000000"
    },
    "331127000000": {
      "city": "丽水市",
      "name": "景宁畲族自治县",
      "id": "331127000000"
    },
    "331181000000": {
      "city": "丽水市",
      "name": "龙泉市",
      "id": "331181000000"
    },
    "340101000000": {
      "city": "合肥市",
      "name": "市辖区",
      "id": "340101000000"
    },
    "340102000000": {
      "city": "合肥市",
      "name": "瑶海区",
      "id": "340102000000"
    },
    "340103000000": {
      "city": "合肥市",
      "name": "庐阳区",
      "id": "340103000000"
    },
    "340104000000": {
      "city": "合肥市",
      "name": "蜀山区",
      "id": "340104000000"
    },
    "340111000000": {
      "city": "合肥市",
      "name": "包河区",
      "id": "340111000000"
    },
    "340121000000": {
      "city": "合肥市",
      "name": "长丰县",
      "id": "340121000000"
    },
    "340122000000": {
      "city": "合肥市",
      "name": "肥东县",
      "id": "340122000000"
    },
    "340123000000": {
      "city": "合肥市",
      "name": "肥西县",
      "id": "340123000000"
    },
    "340124000000": {
      "city": "合肥市",
      "name": "庐江县",
      "id": "340124000000"
    },
    "340171000000": {
      "city": "合肥市",
      "name": "合肥高新技术产业开发区",
      "id": "340171000000"
    },
    "340172000000": {
      "city": "合肥市",
      "name": "合肥经济技术开发区",
      "id": "340172000000"
    },
    "340173000000": {
      "city": "合肥市",
      "name": "合肥新站高新技术产业开发区",
      "id": "340173000000"
    },
    "340181000000": {
      "city": "合肥市",
      "name": "巢湖市",
      "id": "340181000000"
    },
    "340201000000": {
      "city": "芜湖市",
      "name": "市辖区",
      "id": "340201000000"
    },
    "340202000000": {
      "city": "芜湖市",
      "name": "镜湖区",
      "id": "340202000000"
    },
    "340203000000": {
      "city": "芜湖市",
      "name": "弋江区",
      "id": "340203000000"
    },
    "340207000000": {
      "city": "芜湖市",
      "name": "鸠江区",
      "id": "340207000000"
    },
    "340208000000": {
      "city": "芜湖市",
      "name": "三山区",
      "id": "340208000000"
    },
    "340221000000": {
      "city": "芜湖市",
      "name": "芜湖县",
      "id": "340221000000"
    },
    "340222000000": {
      "city": "芜湖市",
      "name": "繁昌县",
      "id": "340222000000"
    },
    "340223000000": {
      "city": "芜湖市",
      "name": "南陵县",
      "id": "340223000000"
    },
    "340225000000": {
      "city": "芜湖市",
      "name": "无为县",
      "id": "340225000000"
    },
    "340271000000": {
      "city": "芜湖市",
      "name": "芜湖经济技术开发区",
      "id": "340271000000"
    },
    "340272000000": {
      "city": "芜湖市",
      "name": "安徽芜湖长江大桥经济开发区",
      "id": "340272000000"
    },
    "340301000000": {
      "city": "蚌埠市",
      "name": "市辖区",
      "id": "340301000000"
    },
    "340302000000": {
      "city": "蚌埠市",
      "name": "龙子湖区",
      "id": "340302000000"
    },
    "340303000000": {
      "city": "蚌埠市",
      "name": "蚌山区",
      "id": "340303000000"
    },
    "340304000000": {
      "city": "蚌埠市",
      "name": "禹会区",
      "id": "340304000000"
    },
    "340311000000": {
      "city": "蚌埠市",
      "name": "淮上区",
      "id": "340311000000"
    },
    "340321000000": {
      "city": "蚌埠市",
      "name": "怀远县",
      "id": "340321000000"
    },
    "340322000000": {
      "city": "蚌埠市",
      "name": "五河县",
      "id": "340322000000"
    },
    "340323000000": {
      "city": "蚌埠市",
      "name": "固镇县",
      "id": "340323000000"
    },
    "340371000000": {
      "city": "蚌埠市",
      "name": "蚌埠市高新技术开发区",
      "id": "340371000000"
    },
    "340372000000": {
      "city": "蚌埠市",
      "name": "蚌埠市经济开发区",
      "id": "340372000000"
    },
    "340401000000": {
      "city": "淮南市",
      "name": "市辖区",
      "id": "340401000000"
    },
    "340402000000": {
      "city": "淮南市",
      "name": "大通区",
      "id": "340402000000"
    },
    "340403000000": {
      "city": "淮南市",
      "name": "田家庵区",
      "id": "340403000000"
    },
    "340404000000": {
      "city": "淮南市",
      "name": "谢家集区",
      "id": "340404000000"
    },
    "340405000000": {
      "city": "淮南市",
      "name": "八公山区",
      "id": "340405000000"
    },
    "340406000000": {
      "city": "淮南市",
      "name": "潘集区",
      "id": "340406000000"
    },
    "340421000000": {
      "city": "淮南市",
      "name": "凤台县",
      "id": "340421000000"
    },
    "340422000000": {
      "city": "淮南市",
      "name": "寿县",
      "id": "340422000000"
    },
    "340501000000": {
      "city": "马鞍山市",
      "name": "市辖区",
      "id": "340501000000"
    },
    "340503000000": {
      "city": "马鞍山市",
      "name": "花山区",
      "id": "340503000000"
    },
    "340504000000": {
      "city": "马鞍山市",
      "name": "雨山区",
      "id": "340504000000"
    },
    "340506000000": {
      "city": "马鞍山市",
      "name": "博望区",
      "id": "340506000000"
    },
    "340521000000": {
      "city": "马鞍山市",
      "name": "当涂县",
      "id": "340521000000"
    },
    "340522000000": {
      "city": "马鞍山市",
      "name": "含山县",
      "id": "340522000000"
    },
    "340523000000": {
      "city": "马鞍山市",
      "name": "和县",
      "id": "340523000000"
    },
    "340601000000": {
      "city": "淮北市",
      "name": "市辖区",
      "id": "340601000000"
    },
    "340602000000": {
      "city": "淮北市",
      "name": "杜集区",
      "id": "340602000000"
    },
    "340603000000": {
      "city": "淮北市",
      "name": "相山区",
      "id": "340603000000"
    },
    "340604000000": {
      "city": "淮北市",
      "name": "烈山区",
      "id": "340604000000"
    },
    "340621000000": {
      "city": "淮北市",
      "name": "濉溪县",
      "id": "340621000000"
    },
    "340701000000": {
      "city": "铜陵市",
      "name": "市辖区",
      "id": "340701000000"
    },
    "340705000000": {
      "city": "铜陵市",
      "name": "铜官区",
      "id": "340705000000"
    },
    "340706000000": {
      "city": "铜陵市",
      "name": "义安区",
      "id": "340706000000"
    },
    "340711000000": {
      "city": "铜陵市",
      "name": "郊区",
      "id": "340711000000"
    },
    "340722000000": {
      "city": "铜陵市",
      "name": "枞阳县",
      "id": "340722000000"
    },
    "340801000000": {
      "city": "安庆市",
      "name": "市辖区",
      "id": "340801000000"
    },
    "340802000000": {
      "city": "安庆市",
      "name": "迎江区",
      "id": "340802000000"
    },
    "340803000000": {
      "city": "安庆市",
      "name": "大观区",
      "id": "340803000000"
    },
    "340811000000": {
      "city": "安庆市",
      "name": "宜秀区",
      "id": "340811000000"
    },
    "340822000000": {
      "city": "安庆市",
      "name": "怀宁县",
      "id": "340822000000"
    },
    "340825000000": {
      "city": "安庆市",
      "name": "太湖县",
      "id": "340825000000"
    },
    "340826000000": {
      "city": "安庆市",
      "name": "宿松县",
      "id": "340826000000"
    },
    "340827000000": {
      "city": "安庆市",
      "name": "望江县",
      "id": "340827000000"
    },
    "340828000000": {
      "city": "安庆市",
      "name": "岳西县",
      "id": "340828000000"
    },
    "340871000000": {
      "city": "安庆市",
      "name": "安徽安庆经济开发区",
      "id": "340871000000"
    },
    "340881000000": {
      "city": "安庆市",
      "name": "桐城市",
      "id": "340881000000"
    },
    "340882000000": {
      "city": "安庆市",
      "name": "潜山市",
      "id": "340882000000"
    },
    "341001000000": {
      "city": "黄山市",
      "name": "市辖区",
      "id": "341001000000"
    },
    "341002000000": {
      "city": "黄山市",
      "name": "屯溪区",
      "id": "341002000000"
    },
    "341003000000": {
      "city": "黄山市",
      "name": "黄山区",
      "id": "341003000000"
    },
    "341004000000": {
      "city": "黄山市",
      "name": "徽州区",
      "id": "341004000000"
    },
    "341021000000": {
      "city": "黄山市",
      "name": "歙县",
      "id": "341021000000"
    },
    "341022000000": {
      "city": "黄山市",
      "name": "休宁县",
      "id": "341022000000"
    },
    "341023000000": {
      "city": "黄山市",
      "name": "黟县",
      "id": "341023000000"
    },
    "341024000000": {
      "city": "黄山市",
      "name": "祁门县",
      "id": "341024000000"
    },
    "341101000000": {
      "city": "滁州市",
      "name": "市辖区",
      "id": "341101000000"
    },
    "341102000000": {
      "city": "滁州市",
      "name": "琅琊区",
      "id": "341102000000"
    },
    "341103000000": {
      "city": "滁州市",
      "name": "南谯区",
      "id": "341103000000"
    },
    "341122000000": {
      "city": "滁州市",
      "name": "来安县",
      "id": "341122000000"
    },
    "341124000000": {
      "city": "滁州市",
      "name": "全椒县",
      "id": "341124000000"
    },
    "341125000000": {
      "city": "滁州市",
      "name": "定远县",
      "id": "341125000000"
    },
    "341126000000": {
      "city": "滁州市",
      "name": "凤阳县",
      "id": "341126000000"
    },
    "341171000000": {
      "city": "滁州市",
      "name": "苏滁现代产业园",
      "id": "341171000000"
    },
    "341172000000": {
      "city": "滁州市",
      "name": "滁州经济技术开发区",
      "id": "341172000000"
    },
    "341181000000": {
      "city": "滁州市",
      "name": "天长市",
      "id": "341181000000"
    },
    "341182000000": {
      "city": "滁州市",
      "name": "明光市",
      "id": "341182000000"
    },
    "341201000000": {
      "city": "阜阳市",
      "name": "市辖区",
      "id": "341201000000"
    },
    "341202000000": {
      "city": "阜阳市",
      "name": "颍州区",
      "id": "341202000000"
    },
    "341203000000": {
      "city": "阜阳市",
      "name": "颍东区",
      "id": "341203000000"
    },
    "341204000000": {
      "city": "阜阳市",
      "name": "颍泉区",
      "id": "341204000000"
    },
    "341221000000": {
      "city": "阜阳市",
      "name": "临泉县",
      "id": "341221000000"
    },
    "341222000000": {
      "city": "阜阳市",
      "name": "太和县",
      "id": "341222000000"
    },
    "341225000000": {
      "city": "阜阳市",
      "name": "阜南县",
      "id": "341225000000"
    },
    "341226000000": {
      "city": "阜阳市",
      "name": "颍上县",
      "id": "341226000000"
    },
    "341271000000": {
      "city": "阜阳市",
      "name": "阜阳合肥现代产业园区",
      "id": "341271000000"
    },
    "341272000000": {
      "city": "阜阳市",
      "name": "阜阳经济技术开发区",
      "id": "341272000000"
    },
    "341282000000": {
      "city": "阜阳市",
      "name": "界首市",
      "id": "341282000000"
    },
    "341301000000": {
      "city": "宿州市",
      "name": "市辖区",
      "id": "341301000000"
    },
    "341302000000": {
      "city": "宿州市",
      "name": "埇桥区",
      "id": "341302000000"
    },
    "341321000000": {
      "city": "宿州市",
      "name": "砀山县",
      "id": "341321000000"
    },
    "341322000000": {
      "city": "宿州市",
      "name": "萧县",
      "id": "341322000000"
    },
    "341323000000": {
      "city": "宿州市",
      "name": "灵璧县",
      "id": "341323000000"
    },
    "341324000000": {
      "city": "宿州市",
      "name": "泗县",
      "id": "341324000000"
    },
    "341371000000": {
      "city": "宿州市",
      "name": "宿州马鞍山现代产业园区",
      "id": "341371000000"
    },
    "341372000000": {
      "city": "宿州市",
      "name": "宿州经济技术开发区",
      "id": "341372000000"
    },
    "341501000000": {
      "city": "六安市",
      "name": "市辖区",
      "id": "341501000000"
    },
    "341502000000": {
      "city": "六安市",
      "name": "金安区",
      "id": "341502000000"
    },
    "341503000000": {
      "city": "六安市",
      "name": "裕安区",
      "id": "341503000000"
    },
    "341504000000": {
      "city": "六安市",
      "name": "叶集区",
      "id": "341504000000"
    },
    "341522000000": {
      "city": "六安市",
      "name": "霍邱县",
      "id": "341522000000"
    },
    "341523000000": {
      "city": "六安市",
      "name": "舒城县",
      "id": "341523000000"
    },
    "341524000000": {
      "city": "六安市",
      "name": "金寨县",
      "id": "341524000000"
    },
    "341525000000": {
      "city": "六安市",
      "name": "霍山县",
      "id": "341525000000"
    },
    "341601000000": {
      "city": "亳州市",
      "name": "市辖区",
      "id": "341601000000"
    },
    "341602000000": {
      "city": "亳州市",
      "name": "谯城区",
      "id": "341602000000"
    },
    "341621000000": {
      "city": "亳州市",
      "name": "涡阳县",
      "id": "341621000000"
    },
    "341622000000": {
      "city": "亳州市",
      "name": "蒙城县",
      "id": "341622000000"
    },
    "341623000000": {
      "city": "亳州市",
      "name": "利辛县",
      "id": "341623000000"
    },
    "341701000000": {
      "city": "池州市",
      "name": "市辖区",
      "id": "341701000000"
    },
    "341702000000": {
      "city": "池州市",
      "name": "贵池区",
      "id": "341702000000"
    },
    "341721000000": {
      "city": "池州市",
      "name": "东至县",
      "id": "341721000000"
    },
    "341722000000": {
      "city": "池州市",
      "name": "石台县",
      "id": "341722000000"
    },
    "341723000000": {
      "city": "池州市",
      "name": "青阳县",
      "id": "341723000000"
    },
    "341801000000": {
      "city": "宣城市",
      "name": "市辖区",
      "id": "341801000000"
    },
    "341802000000": {
      "city": "宣城市",
      "name": "宣州区",
      "id": "341802000000"
    },
    "341821000000": {
      "city": "宣城市",
      "name": "郎溪县",
      "id": "341821000000"
    },
    "341822000000": {
      "city": "宣城市",
      "name": "广德县",
      "id": "341822000000"
    },
    "341823000000": {
      "city": "宣城市",
      "name": "泾县",
      "id": "341823000000"
    },
    "341824000000": {
      "city": "宣城市",
      "name": "绩溪县",
      "id": "341824000000"
    },
    "341825000000": {
      "city": "宣城市",
      "name": "旌德县",
      "id": "341825000000"
    },
    "341871000000": {
      "city": "宣城市",
      "name": "宣城市经济开发区",
      "id": "341871000000"
    },
    "341881000000": {
      "city": "宣城市",
      "name": "宁国市",
      "id": "341881000000"
    },
    "350101000000": {
      "city": "福州市",
      "name": "市辖区",
      "id": "350101000000"
    },
    "350102000000": {
      "city": "福州市",
      "name": "鼓楼区",
      "id": "350102000000"
    },
    "350103000000": {
      "city": "福州市",
      "name": "台江区",
      "id": "350103000000"
    },
    "350104000000": {
      "city": "福州市",
      "name": "仓山区",
      "id": "350104000000"
    },
    "350105000000": {
      "city": "福州市",
      "name": "马尾区",
      "id": "350105000000"
    },
    "350111000000": {
      "city": "福州市",
      "name": "晋安区",
      "id": "350111000000"
    },
    "350112000000": {
      "city": "福州市",
      "name": "长乐区",
      "id": "350112000000"
    },
    "350121000000": {
      "city": "福州市",
      "name": "闽侯县",
      "id": "350121000000"
    },
    "350122000000": {
      "city": "福州市",
      "name": "连江县",
      "id": "350122000000"
    },
    "350123000000": {
      "city": "福州市",
      "name": "罗源县",
      "id": "350123000000"
    },
    "350124000000": {
      "city": "福州市",
      "name": "闽清县",
      "id": "350124000000"
    },
    "350125000000": {
      "city": "福州市",
      "name": "永泰县",
      "id": "350125000000"
    },
    "350128000000": {
      "city": "福州市",
      "name": "平潭县",
      "id": "350128000000"
    },
    "350181000000": {
      "city": "福州市",
      "name": "福清市",
      "id": "350181000000"
    },
    "350201000000": {
      "city": "厦门市",
      "name": "市辖区",
      "id": "350201000000"
    },
    "350203000000": {
      "city": "厦门市",
      "name": "思明区",
      "id": "350203000000"
    },
    "350205000000": {
      "city": "厦门市",
      "name": "海沧区",
      "id": "350205000000"
    },
    "350206000000": {
      "city": "厦门市",
      "name": "湖里区",
      "id": "350206000000"
    },
    "350211000000": {
      "city": "厦门市",
      "name": "集美区",
      "id": "350211000000"
    },
    "350212000000": {
      "city": "厦门市",
      "name": "同安区",
      "id": "350212000000"
    },
    "350213000000": {
      "city": "厦门市",
      "name": "翔安区",
      "id": "350213000000"
    },
    "350301000000": {
      "city": "莆田市",
      "name": "市辖区",
      "id": "350301000000"
    },
    "350302000000": {
      "city": "莆田市",
      "name": "城厢区",
      "id": "350302000000"
    },
    "350303000000": {
      "city": "莆田市",
      "name": "涵江区",
      "id": "350303000000"
    },
    "350304000000": {
      "city": "莆田市",
      "name": "荔城区",
      "id": "350304000000"
    },
    "350305000000": {
      "city": "莆田市",
      "name": "秀屿区",
      "id": "350305000000"
    },
    "350322000000": {
      "city": "莆田市",
      "name": "仙游县",
      "id": "350322000000"
    },
    "350401000000": {
      "city": "三明市",
      "name": "市辖区",
      "id": "350401000000"
    },
    "350402000000": {
      "city": "三明市",
      "name": "梅列区",
      "id": "350402000000"
    },
    "350403000000": {
      "city": "三明市",
      "name": "三元区",
      "id": "350403000000"
    },
    "350421000000": {
      "city": "三明市",
      "name": "明溪县",
      "id": "350421000000"
    },
    "350423000000": {
      "city": "三明市",
      "name": "清流县",
      "id": "350423000000"
    },
    "350424000000": {
      "city": "三明市",
      "name": "宁化县",
      "id": "350424000000"
    },
    "350425000000": {
      "city": "三明市",
      "name": "大田县",
      "id": "350425000000"
    },
    "350426000000": {
      "city": "三明市",
      "name": "尤溪县",
      "id": "350426000000"
    },
    "350427000000": {
      "city": "三明市",
      "name": "沙县",
      "id": "350427000000"
    },
    "350428000000": {
      "city": "三明市",
      "name": "将乐县",
      "id": "350428000000"
    },
    "350429000000": {
      "city": "三明市",
      "name": "泰宁县",
      "id": "350429000000"
    },
    "350430000000": {
      "city": "三明市",
      "name": "建宁县",
      "id": "350430000000"
    },
    "350481000000": {
      "city": "三明市",
      "name": "永安市",
      "id": "350481000000"
    },
    "350501000000": {
      "city": "泉州市",
      "name": "市辖区",
      "id": "350501000000"
    },
    "350502000000": {
      "city": "泉州市",
      "name": "鲤城区",
      "id": "350502000000"
    },
    "350503000000": {
      "city": "泉州市",
      "name": "丰泽区",
      "id": "350503000000"
    },
    "350504000000": {
      "city": "泉州市",
      "name": "洛江区",
      "id": "350504000000"
    },
    "350505000000": {
      "city": "泉州市",
      "name": "泉港区",
      "id": "350505000000"
    },
    "350521000000": {
      "city": "泉州市",
      "name": "惠安县",
      "id": "350521000000"
    },
    "350524000000": {
      "city": "泉州市",
      "name": "安溪县",
      "id": "350524000000"
    },
    "350525000000": {
      "city": "泉州市",
      "name": "永春县",
      "id": "350525000000"
    },
    "350526000000": {
      "city": "泉州市",
      "name": "德化县",
      "id": "350526000000"
    },
    "350527000000": {
      "city": "泉州市",
      "name": "金门县",
      "id": "350527000000"
    },
    "350581000000": {
      "city": "泉州市",
      "name": "石狮市",
      "id": "350581000000"
    },
    "350582000000": {
      "city": "泉州市",
      "name": "晋江市",
      "id": "350582000000"
    },
    "350583000000": {
      "city": "泉州市",
      "name": "南安市",
      "id": "350583000000"
    },
    "350601000000": {
      "city": "漳州市",
      "name": "市辖区",
      "id": "350601000000"
    },
    "350602000000": {
      "city": "漳州市",
      "name": "芗城区",
      "id": "350602000000"
    },
    "350603000000": {
      "city": "漳州市",
      "name": "龙文区",
      "id": "350603000000"
    },
    "350622000000": {
      "city": "漳州市",
      "name": "云霄县",
      "id": "350622000000"
    },
    "350623000000": {
      "city": "漳州市",
      "name": "漳浦县",
      "id": "350623000000"
    },
    "350624000000": {
      "city": "漳州市",
      "name": "诏安县",
      "id": "350624000000"
    },
    "350625000000": {
      "city": "漳州市",
      "name": "长泰县",
      "id": "350625000000"
    },
    "350626000000": {
      "city": "漳州市",
      "name": "东山县",
      "id": "350626000000"
    },
    "350627000000": {
      "city": "漳州市",
      "name": "南靖县",
      "id": "350627000000"
    },
    "350628000000": {
      "city": "漳州市",
      "name": "平和县",
      "id": "350628000000"
    },
    "350629000000": {
      "city": "漳州市",
      "name": "华安县",
      "id": "350629000000"
    },
    "350681000000": {
      "city": "漳州市",
      "name": "龙海市",
      "id": "350681000000"
    },
    "350701000000": {
      "city": "南平市",
      "name": "市辖区",
      "id": "350701000000"
    },
    "350702000000": {
      "city": "南平市",
      "name": "延平区",
      "id": "350702000000"
    },
    "350703000000": {
      "city": "南平市",
      "name": "建阳区",
      "id": "350703000000"
    },
    "350721000000": {
      "city": "南平市",
      "name": "顺昌县",
      "id": "350721000000"
    },
    "350722000000": {
      "city": "南平市",
      "name": "浦城县",
      "id": "350722000000"
    },
    "350723000000": {
      "city": "南平市",
      "name": "光泽县",
      "id": "350723000000"
    },
    "350724000000": {
      "city": "南平市",
      "name": "松溪县",
      "id": "350724000000"
    },
    "350725000000": {
      "city": "南平市",
      "name": "政和县",
      "id": "350725000000"
    },
    "350781000000": {
      "city": "南平市",
      "name": "邵武市",
      "id": "350781000000"
    },
    "350782000000": {
      "city": "南平市",
      "name": "武夷山市",
      "id": "350782000000"
    },
    "350783000000": {
      "city": "南平市",
      "name": "建瓯市",
      "id": "350783000000"
    },
    "350801000000": {
      "city": "龙岩市",
      "name": "市辖区",
      "id": "350801000000"
    },
    "350802000000": {
      "city": "龙岩市",
      "name": "新罗区",
      "id": "350802000000"
    },
    "350803000000": {
      "city": "龙岩市",
      "name": "永定区",
      "id": "350803000000"
    },
    "350821000000": {
      "city": "龙岩市",
      "name": "长汀县",
      "id": "350821000000"
    },
    "350823000000": {
      "city": "龙岩市",
      "name": "上杭县",
      "id": "350823000000"
    },
    "350824000000": {
      "city": "龙岩市",
      "name": "武平县",
      "id": "350824000000"
    },
    "350825000000": {
      "city": "龙岩市",
      "name": "连城县",
      "id": "350825000000"
    },
    "350881000000": {
      "city": "龙岩市",
      "name": "漳平市",
      "id": "350881000000"
    },
    "350901000000": {
      "city": "宁德市",
      "name": "市辖区",
      "id": "350901000000"
    },
    "350902000000": {
      "city": "宁德市",
      "name": "蕉城区",
      "id": "350902000000"
    },
    "350921000000": {
      "city": "宁德市",
      "name": "霞浦县",
      "id": "350921000000"
    },
    "350922000000": {
      "city": "宁德市",
      "name": "古田县",
      "id": "350922000000"
    },
    "350923000000": {
      "city": "宁德市",
      "name": "屏南县",
      "id": "350923000000"
    },
    "350924000000": {
      "city": "宁德市",
      "name": "寿宁县",
      "id": "350924000000"
    },
    "350925000000": {
      "city": "宁德市",
      "name": "周宁县",
      "id": "350925000000"
    },
    "350926000000": {
      "city": "宁德市",
      "name": "柘荣县",
      "id": "350926000000"
    },
    "350981000000": {
      "city": "宁德市",
      "name": "福安市",
      "id": "350981000000"
    },
    "350982000000": {
      "city": "宁德市",
      "name": "福鼎市",
      "id": "350982000000"
    },
    "360101000000": {
      "city": "南昌市",
      "name": "市辖区",
      "id": "360101000000"
    },
    "360102000000": {
      "city": "南昌市",
      "name": "东湖区",
      "id": "360102000000"
    },
    "360103000000": {
      "city": "南昌市",
      "name": "西湖区",
      "id": "360103000000"
    },
    "360104000000": {
      "city": "南昌市",
      "name": "青云谱区",
      "id": "360104000000"
    },
    "360105000000": {
      "city": "南昌市",
      "name": "湾里区",
      "id": "360105000000"
    },
    "360111000000": {
      "city": "南昌市",
      "name": "青山湖区",
      "id": "360111000000"
    },
    "360112000000": {
      "city": "南昌市",
      "name": "新建区",
      "id": "360112000000"
    },
    "360121000000": {
      "city": "南昌市",
      "name": "南昌县",
      "id": "360121000000"
    },
    "360123000000": {
      "city": "南昌市",
      "name": "安义县",
      "id": "360123000000"
    },
    "360124000000": {
      "city": "南昌市",
      "name": "进贤县",
      "id": "360124000000"
    },
    "360201000000": {
      "city": "景德镇市",
      "name": "市辖区",
      "id": "360201000000"
    },
    "360202000000": {
      "city": "景德镇市",
      "name": "昌江区",
      "id": "360202000000"
    },
    "360203000000": {
      "city": "景德镇市",
      "name": "珠山区",
      "id": "360203000000"
    },
    "360222000000": {
      "city": "景德镇市",
      "name": "浮梁县",
      "id": "360222000000"
    },
    "360281000000": {
      "city": "景德镇市",
      "name": "乐平市",
      "id": "360281000000"
    },
    "360301000000": {
      "city": "萍乡市",
      "name": "市辖区",
      "id": "360301000000"
    },
    "360302000000": {
      "city": "萍乡市",
      "name": "安源区",
      "id": "360302000000"
    },
    "360313000000": {
      "city": "萍乡市",
      "name": "湘东区",
      "id": "360313000000"
    },
    "360321000000": {
      "city": "萍乡市",
      "name": "莲花县",
      "id": "360321000000"
    },
    "360322000000": {
      "city": "萍乡市",
      "name": "上栗县",
      "id": "360322000000"
    },
    "360323000000": {
      "city": "萍乡市",
      "name": "芦溪县",
      "id": "360323000000"
    },
    "360401000000": {
      "city": "九江市",
      "name": "市辖区",
      "id": "360401000000"
    },
    "360402000000": {
      "city": "九江市",
      "name": "濂溪区",
      "id": "360402000000"
    },
    "360403000000": {
      "city": "九江市",
      "name": "浔阳区",
      "id": "360403000000"
    },
    "360404000000": {
      "city": "九江市",
      "name": "柴桑区",
      "id": "360404000000"
    },
    "360423000000": {
      "city": "九江市",
      "name": "武宁县",
      "id": "360423000000"
    },
    "360424000000": {
      "city": "九江市",
      "name": "修水县",
      "id": "360424000000"
    },
    "360425000000": {
      "city": "九江市",
      "name": "永修县",
      "id": "360425000000"
    },
    "360426000000": {
      "city": "九江市",
      "name": "德安县",
      "id": "360426000000"
    },
    "360428000000": {
      "city": "九江市",
      "name": "都昌县",
      "id": "360428000000"
    },
    "360429000000": {
      "city": "九江市",
      "name": "湖口县",
      "id": "360429000000"
    },
    "360430000000": {
      "city": "九江市",
      "name": "彭泽县",
      "id": "360430000000"
    },
    "360481000000": {
      "city": "九江市",
      "name": "瑞昌市",
      "id": "360481000000"
    },
    "360482000000": {
      "city": "九江市",
      "name": "共青城市",
      "id": "360482000000"
    },
    "360483000000": {
      "city": "九江市",
      "name": "庐山市",
      "id": "360483000000"
    },
    "360501000000": {
      "city": "新余市",
      "name": "市辖区",
      "id": "360501000000"
    },
    "360502000000": {
      "city": "新余市",
      "name": "渝水区",
      "id": "360502000000"
    },
    "360521000000": {
      "city": "新余市",
      "name": "分宜县",
      "id": "360521000000"
    },
    "360601000000": {
      "city": "鹰潭市",
      "name": "市辖区",
      "id": "360601000000"
    },
    "360602000000": {
      "city": "鹰潭市",
      "name": "月湖区",
      "id": "360602000000"
    },
    "360603000000": {
      "city": "鹰潭市",
      "name": "余江区",
      "id": "360603000000"
    },
    "360681000000": {
      "city": "鹰潭市",
      "name": "贵溪市",
      "id": "360681000000"
    },
    "360701000000": {
      "city": "赣州市",
      "name": "市辖区",
      "id": "360701000000"
    },
    "360702000000": {
      "city": "赣州市",
      "name": "章贡区",
      "id": "360702000000"
    },
    "360703000000": {
      "city": "赣州市",
      "name": "南康区",
      "id": "360703000000"
    },
    "360704000000": {
      "city": "赣州市",
      "name": "赣县区",
      "id": "360704000000"
    },
    "360722000000": {
      "city": "赣州市",
      "name": "信丰县",
      "id": "360722000000"
    },
    "360723000000": {
      "city": "赣州市",
      "name": "大余县",
      "id": "360723000000"
    },
    "360724000000": {
      "city": "赣州市",
      "name": "上犹县",
      "id": "360724000000"
    },
    "360725000000": {
      "city": "赣州市",
      "name": "崇义县",
      "id": "360725000000"
    },
    "360726000000": {
      "city": "赣州市",
      "name": "安远县",
      "id": "360726000000"
    },
    "360727000000": {
      "city": "赣州市",
      "name": "龙南县",
      "id": "360727000000"
    },
    "360728000000": {
      "city": "赣州市",
      "name": "定南县",
      "id": "360728000000"
    },
    "360729000000": {
      "city": "赣州市",
      "name": "全南县",
      "id": "360729000000"
    },
    "360730000000": {
      "city": "赣州市",
      "name": "宁都县",
      "id": "360730000000"
    },
    "360731000000": {
      "city": "赣州市",
      "name": "于都县",
      "id": "360731000000"
    },
    "360732000000": {
      "city": "赣州市",
      "name": "兴国县",
      "id": "360732000000"
    },
    "360733000000": {
      "city": "赣州市",
      "name": "会昌县",
      "id": "360733000000"
    },
    "360734000000": {
      "city": "赣州市",
      "name": "寻乌县",
      "id": "360734000000"
    },
    "360735000000": {
      "city": "赣州市",
      "name": "石城县",
      "id": "360735000000"
    },
    "360781000000": {
      "city": "赣州市",
      "name": "瑞金市",
      "id": "360781000000"
    },
    "360801000000": {
      "city": "吉安市",
      "name": "市辖区",
      "id": "360801000000"
    },
    "360802000000": {
      "city": "吉安市",
      "name": "吉州区",
      "id": "360802000000"
    },
    "360803000000": {
      "city": "吉安市",
      "name": "青原区",
      "id": "360803000000"
    },
    "360821000000": {
      "city": "吉安市",
      "name": "吉安县",
      "id": "360821000000"
    },
    "360822000000": {
      "city": "吉安市",
      "name": "吉水县",
      "id": "360822000000"
    },
    "360823000000": {
      "city": "吉安市",
      "name": "峡江县",
      "id": "360823000000"
    },
    "360824000000": {
      "city": "吉安市",
      "name": "新干县",
      "id": "360824000000"
    },
    "360825000000": {
      "city": "吉安市",
      "name": "永丰县",
      "id": "360825000000"
    },
    "360826000000": {
      "city": "吉安市",
      "name": "泰和县",
      "id": "360826000000"
    },
    "360827000000": {
      "city": "吉安市",
      "name": "遂川县",
      "id": "360827000000"
    },
    "360828000000": {
      "city": "吉安市",
      "name": "万安县",
      "id": "360828000000"
    },
    "360829000000": {
      "city": "吉安市",
      "name": "安福县",
      "id": "360829000000"
    },
    "360830000000": {
      "city": "吉安市",
      "name": "永新县",
      "id": "360830000000"
    },
    "360881000000": {
      "city": "吉安市",
      "name": "井冈山市",
      "id": "360881000000"
    },
    "360901000000": {
      "city": "宜春市",
      "name": "市辖区",
      "id": "360901000000"
    },
    "360902000000": {
      "city": "宜春市",
      "name": "袁州区",
      "id": "360902000000"
    },
    "360921000000": {
      "city": "宜春市",
      "name": "奉新县",
      "id": "360921000000"
    },
    "360922000000": {
      "city": "宜春市",
      "name": "万载县",
      "id": "360922000000"
    },
    "360923000000": {
      "city": "宜春市",
      "name": "上高县",
      "id": "360923000000"
    },
    "360924000000": {
      "city": "宜春市",
      "name": "宜丰县",
      "id": "360924000000"
    },
    "360925000000": {
      "city": "宜春市",
      "name": "靖安县",
      "id": "360925000000"
    },
    "360926000000": {
      "city": "宜春市",
      "name": "铜鼓县",
      "id": "360926000000"
    },
    "360981000000": {
      "city": "宜春市",
      "name": "丰城市",
      "id": "360981000000"
    },
    "360982000000": {
      "city": "宜春市",
      "name": "樟树市",
      "id": "360982000000"
    },
    "360983000000": {
      "city": "宜春市",
      "name": "高安市",
      "id": "360983000000"
    },
    "361001000000": {
      "city": "抚州市",
      "name": "市辖区",
      "id": "361001000000"
    },
    "361002000000": {
      "city": "抚州市",
      "name": "临川区",
      "id": "361002000000"
    },
    "361003000000": {
      "city": "抚州市",
      "name": "东乡区",
      "id": "361003000000"
    },
    "361021000000": {
      "city": "抚州市",
      "name": "南城县",
      "id": "361021000000"
    },
    "361022000000": {
      "city": "抚州市",
      "name": "黎川县",
      "id": "361022000000"
    },
    "361023000000": {
      "city": "抚州市",
      "name": "南丰县",
      "id": "361023000000"
    },
    "361024000000": {
      "city": "抚州市",
      "name": "崇仁县",
      "id": "361024000000"
    },
    "361025000000": {
      "city": "抚州市",
      "name": "乐安县",
      "id": "361025000000"
    },
    "361026000000": {
      "city": "抚州市",
      "name": "宜黄县",
      "id": "361026000000"
    },
    "361027000000": {
      "city": "抚州市",
      "name": "金溪县",
      "id": "361027000000"
    },
    "361028000000": {
      "city": "抚州市",
      "name": "资溪县",
      "id": "361028000000"
    },
    "361030000000": {
      "city": "抚州市",
      "name": "广昌县",
      "id": "361030000000"
    },
    "361101000000": {
      "city": "上饶市",
      "name": "市辖区",
      "id": "361101000000"
    },
    "361102000000": {
      "city": "上饶市",
      "name": "信州区",
      "id": "361102000000"
    },
    "361103000000": {
      "city": "上饶市",
      "name": "广丰区",
      "id": "361103000000"
    },
    "361121000000": {
      "city": "上饶市",
      "name": "上饶县",
      "id": "361121000000"
    },
    "361123000000": {
      "city": "上饶市",
      "name": "玉山县",
      "id": "361123000000"
    },
    "361124000000": {
      "city": "上饶市",
      "name": "铅山县",
      "id": "361124000000"
    },
    "361125000000": {
      "city": "上饶市",
      "name": "横峰县",
      "id": "361125000000"
    },
    "361126000000": {
      "city": "上饶市",
      "name": "弋阳县",
      "id": "361126000000"
    },
    "361127000000": {
      "city": "上饶市",
      "name": "余干县",
      "id": "361127000000"
    },
    "361128000000": {
      "city": "上饶市",
      "name": "鄱阳县",
      "id": "361128000000"
    },
    "361129000000": {
      "city": "上饶市",
      "name": "万年县",
      "id": "361129000000"
    },
    "361130000000": {
      "city": "上饶市",
      "name": "婺源县",
      "id": "361130000000"
    },
    "361181000000": {
      "city": "上饶市",
      "name": "德兴市",
      "id": "361181000000"
    },
    "370101000000": {
      "city": "济南市",
      "name": "市辖区",
      "id": "370101000000"
    },
    "370102000000": {
      "city": "济南市",
      "name": "历下区",
      "id": "370102000000"
    },
    "370103000000": {
      "city": "济南市",
      "name": "市中区",
      "id": "370103000000"
    },
    "370104000000": {
      "city": "济南市",
      "name": "槐荫区",
      "id": "370104000000"
    },
    "370105000000": {
      "city": "济南市",
      "name": "天桥区",
      "id": "370105000000"
    },
    "370112000000": {
      "city": "济南市",
      "name": "历城区",
      "id": "370112000000"
    },
    "370113000000": {
      "city": "济南市",
      "name": "长清区",
      "id": "370113000000"
    },
    "370114000000": {
      "city": "济南市",
      "name": "章丘区",
      "id": "370114000000"
    },
    "370115000000": {
      "city": "济南市",
      "name": "济阳区",
      "id": "370115000000"
    },
    "370124000000": {
      "city": "济南市",
      "name": "平阴县",
      "id": "370124000000"
    },
    "370126000000": {
      "city": "济南市",
      "name": "商河县",
      "id": "370126000000"
    },
    "370171000000": {
      "city": "济南市",
      "name": "济南高新技术产业开发区",
      "id": "370171000000"
    },
    "370201000000": {
      "city": "青岛市",
      "name": "市辖区",
      "id": "370201000000"
    },
    "370202000000": {
      "city": "青岛市",
      "name": "市南区",
      "id": "370202000000"
    },
    "370203000000": {
      "city": "青岛市",
      "name": "市北区",
      "id": "370203000000"
    },
    "370211000000": {
      "city": "青岛市",
      "name": "黄岛区",
      "id": "370211000000"
    },
    "370212000000": {
      "city": "青岛市",
      "name": "崂山区",
      "id": "370212000000"
    },
    "370213000000": {
      "city": "青岛市",
      "name": "李沧区",
      "id": "370213000000"
    },
    "370214000000": {
      "city": "青岛市",
      "name": "城阳区",
      "id": "370214000000"
    },
    "370215000000": {
      "city": "青岛市",
      "name": "即墨区",
      "id": "370215000000"
    },
    "370271000000": {
      "city": "青岛市",
      "name": "青岛高新技术产业开发区",
      "id": "370271000000"
    },
    "370281000000": {
      "city": "青岛市",
      "name": "胶州市",
      "id": "370281000000"
    },
    "370283000000": {
      "city": "青岛市",
      "name": "平度市",
      "id": "370283000000"
    },
    "370285000000": {
      "city": "青岛市",
      "name": "莱西市",
      "id": "370285000000"
    },
    "370301000000": {
      "city": "淄博市",
      "name": "市辖区",
      "id": "370301000000"
    },
    "370302000000": {
      "city": "淄博市",
      "name": "淄川区",
      "id": "370302000000"
    },
    "370303000000": {
      "city": "淄博市",
      "name": "张店区",
      "id": "370303000000"
    },
    "370304000000": {
      "city": "淄博市",
      "name": "博山区",
      "id": "370304000000"
    },
    "370305000000": {
      "city": "淄博市",
      "name": "临淄区",
      "id": "370305000000"
    },
    "370306000000": {
      "city": "淄博市",
      "name": "周村区",
      "id": "370306000000"
    },
    "370321000000": {
      "city": "淄博市",
      "name": "桓台县",
      "id": "370321000000"
    },
    "370322000000": {
      "city": "淄博市",
      "name": "高青县",
      "id": "370322000000"
    },
    "370323000000": {
      "city": "淄博市",
      "name": "沂源县",
      "id": "370323000000"
    },
    "370401000000": {
      "city": "枣庄市",
      "name": "市辖区",
      "id": "370401000000"
    },
    "370402000000": {
      "city": "枣庄市",
      "name": "市中区",
      "id": "370402000000"
    },
    "370403000000": {
      "city": "枣庄市",
      "name": "薛城区",
      "id": "370403000000"
    },
    "370404000000": {
      "city": "枣庄市",
      "name": "峄城区",
      "id": "370404000000"
    },
    "370405000000": {
      "city": "枣庄市",
      "name": "台儿庄区",
      "id": "370405000000"
    },
    "370406000000": {
      "city": "枣庄市",
      "name": "山亭区",
      "id": "370406000000"
    },
    "370481000000": {
      "city": "枣庄市",
      "name": "滕州市",
      "id": "370481000000"
    },
    "370501000000": {
      "city": "东营市",
      "name": "市辖区",
      "id": "370501000000"
    },
    "370502000000": {
      "city": "东营市",
      "name": "东营区",
      "id": "370502000000"
    },
    "370503000000": {
      "city": "东营市",
      "name": "河口区",
      "id": "370503000000"
    },
    "370505000000": {
      "city": "东营市",
      "name": "垦利区",
      "id": "370505000000"
    },
    "370522000000": {
      "city": "东营市",
      "name": "利津县",
      "id": "370522000000"
    },
    "370523000000": {
      "city": "东营市",
      "name": "广饶县",
      "id": "370523000000"
    },
    "370571000000": {
      "city": "东营市",
      "name": "东营经济技术开发区",
      "id": "370571000000"
    },
    "370572000000": {
      "city": "东营市",
      "name": "东营港经济开发区",
      "id": "370572000000"
    },
    "370601000000": {
      "city": "烟台市",
      "name": "市辖区",
      "id": "370601000000"
    },
    "370602000000": {
      "city": "烟台市",
      "name": "芝罘区",
      "id": "370602000000"
    },
    "370611000000": {
      "city": "烟台市",
      "name": "福山区",
      "id": "370611000000"
    },
    "370612000000": {
      "city": "烟台市",
      "name": "牟平区",
      "id": "370612000000"
    },
    "370613000000": {
      "city": "烟台市",
      "name": "莱山区",
      "id": "370613000000"
    },
    "370634000000": {
      "city": "烟台市",
      "name": "长岛县",
      "id": "370634000000"
    },
    "370671000000": {
      "city": "烟台市",
      "name": "烟台高新技术产业开发区",
      "id": "370671000000"
    },
    "370672000000": {
      "city": "烟台市",
      "name": "烟台经济技术开发区",
      "id": "370672000000"
    },
    "370681000000": {
      "city": "烟台市",
      "name": "龙口市",
      "id": "370681000000"
    },
    "370682000000": {
      "city": "烟台市",
      "name": "莱阳市",
      "id": "370682000000"
    },
    "370683000000": {
      "city": "烟台市",
      "name": "莱州市",
      "id": "370683000000"
    },
    "370684000000": {
      "city": "烟台市",
      "name": "蓬莱市",
      "id": "370684000000"
    },
    "370685000000": {
      "city": "烟台市",
      "name": "招远市",
      "id": "370685000000"
    },
    "370686000000": {
      "city": "烟台市",
      "name": "栖霞市",
      "id": "370686000000"
    },
    "370687000000": {
      "city": "烟台市",
      "name": "海阳市",
      "id": "370687000000"
    },
    "370701000000": {
      "city": "潍坊市",
      "name": "市辖区",
      "id": "370701000000"
    },
    "370702000000": {
      "city": "潍坊市",
      "name": "潍城区",
      "id": "370702000000"
    },
    "370703000000": {
      "city": "潍坊市",
      "name": "寒亭区",
      "id": "370703000000"
    },
    "370704000000": {
      "city": "潍坊市",
      "name": "坊子区",
      "id": "370704000000"
    },
    "370705000000": {
      "city": "潍坊市",
      "name": "奎文区",
      "id": "370705000000"
    },
    "370724000000": {
      "city": "潍坊市",
      "name": "临朐县",
      "id": "370724000000"
    },
    "370725000000": {
      "city": "潍坊市",
      "name": "昌乐县",
      "id": "370725000000"
    },
    "370772000000": {
      "city": "潍坊市",
      "name": "潍坊滨海经济技术开发区",
      "id": "370772000000"
    },
    "370781000000": {
      "city": "潍坊市",
      "name": "青州市",
      "id": "370781000000"
    },
    "370782000000": {
      "city": "潍坊市",
      "name": "诸城市",
      "id": "370782000000"
    },
    "370783000000": {
      "city": "潍坊市",
      "name": "寿光市",
      "id": "370783000000"
    },
    "370784000000": {
      "city": "潍坊市",
      "name": "安丘市",
      "id": "370784000000"
    },
    "370785000000": {
      "city": "潍坊市",
      "name": "高密市",
      "id": "370785000000"
    },
    "370786000000": {
      "city": "潍坊市",
      "name": "昌邑市",
      "id": "370786000000"
    },
    "370801000000": {
      "city": "济宁市",
      "name": "市辖区",
      "id": "370801000000"
    },
    "370811000000": {
      "city": "济宁市",
      "name": "任城区",
      "id": "370811000000"
    },
    "370812000000": {
      "city": "济宁市",
      "name": "兖州区",
      "id": "370812000000"
    },
    "370826000000": {
      "city": "济宁市",
      "name": "微山县",
      "id": "370826000000"
    },
    "370827000000": {
      "city": "济宁市",
      "name": "鱼台县",
      "id": "370827000000"
    },
    "370828000000": {
      "city": "济宁市",
      "name": "金乡县",
      "id": "370828000000"
    },
    "370829000000": {
      "city": "济宁市",
      "name": "嘉祥县",
      "id": "370829000000"
    },
    "370830000000": {
      "city": "济宁市",
      "name": "汶上县",
      "id": "370830000000"
    },
    "370831000000": {
      "city": "济宁市",
      "name": "泗水县",
      "id": "370831000000"
    },
    "370832000000": {
      "city": "济宁市",
      "name": "梁山县",
      "id": "370832000000"
    },
    "370871000000": {
      "city": "济宁市",
      "name": "济宁高新技术产业开发区",
      "id": "370871000000"
    },
    "370881000000": {
      "city": "济宁市",
      "name": "曲阜市",
      "id": "370881000000"
    },
    "370883000000": {
      "city": "济宁市",
      "name": "邹城市",
      "id": "370883000000"
    },
    "370901000000": {
      "city": "泰安市",
      "name": "市辖区",
      "id": "370901000000"
    },
    "370902000000": {
      "city": "泰安市",
      "name": "泰山区",
      "id": "370902000000"
    },
    "370911000000": {
      "city": "泰安市",
      "name": "岱岳区",
      "id": "370911000000"
    },
    "370921000000": {
      "city": "泰安市",
      "name": "宁阳县",
      "id": "370921000000"
    },
    "370923000000": {
      "city": "泰安市",
      "name": "东平县",
      "id": "370923000000"
    },
    "370982000000": {
      "city": "泰安市",
      "name": "新泰市",
      "id": "370982000000"
    },
    "370983000000": {
      "city": "泰安市",
      "name": "肥城市",
      "id": "370983000000"
    },
    "371001000000": {
      "city": "威海市",
      "name": "市辖区",
      "id": "371001000000"
    },
    "371002000000": {
      "city": "威海市",
      "name": "环翠区",
      "id": "371002000000"
    },
    "371003000000": {
      "city": "威海市",
      "name": "文登区",
      "id": "371003000000"
    },
    "371071000000": {
      "city": "威海市",
      "name": "威海火炬高技术产业开发区",
      "id": "371071000000"
    },
    "371072000000": {
      "city": "威海市",
      "name": "威海经济技术开发区",
      "id": "371072000000"
    },
    "371073000000": {
      "city": "威海市",
      "name": "威海临港经济技术开发区",
      "id": "371073000000"
    },
    "371082000000": {
      "city": "威海市",
      "name": "荣成市",
      "id": "371082000000"
    },
    "371083000000": {
      "city": "威海市",
      "name": "乳山市",
      "id": "371083000000"
    },
    "371101000000": {
      "city": "日照市",
      "name": "市辖区",
      "id": "371101000000"
    },
    "371102000000": {
      "city": "日照市",
      "name": "东港区",
      "id": "371102000000"
    },
    "371103000000": {
      "city": "日照市",
      "name": "岚山区",
      "id": "371103000000"
    },
    "371121000000": {
      "city": "日照市",
      "name": "五莲县",
      "id": "371121000000"
    },
    "371122000000": {
      "city": "日照市",
      "name": "莒县",
      "id": "371122000000"
    },
    "371171000000": {
      "city": "日照市",
      "name": "日照经济技术开发区",
      "id": "371171000000"
    },
    "371201000000": {
      "city": "莱芜市",
      "name": "市辖区",
      "id": "371201000000"
    },
    "371202000000": {
      "city": "莱芜市",
      "name": "莱城区",
      "id": "371202000000"
    },
    "371203000000": {
      "city": "莱芜市",
      "name": "钢城区",
      "id": "371203000000"
    },
    "371301000000": {
      "city": "临沂市",
      "name": "市辖区",
      "id": "371301000000"
    },
    "371302000000": {
      "city": "临沂市",
      "name": "兰山区",
      "id": "371302000000"
    },
    "371311000000": {
      "city": "临沂市",
      "name": "罗庄区",
      "id": "371311000000"
    },
    "371312000000": {
      "city": "临沂市",
      "name": "河东区",
      "id": "371312000000"
    },
    "371321000000": {
      "city": "临沂市",
      "name": "沂南县",
      "id": "371321000000"
    },
    "371322000000": {
      "city": "临沂市",
      "name": "郯城县",
      "id": "371322000000"
    },
    "371323000000": {
      "city": "临沂市",
      "name": "沂水县",
      "id": "371323000000"
    },
    "371324000000": {
      "city": "临沂市",
      "name": "兰陵县",
      "id": "371324000000"
    },
    "371325000000": {
      "city": "临沂市",
      "name": "费县",
      "id": "371325000000"
    },
    "371326000000": {
      "city": "临沂市",
      "name": "平邑县",
      "id": "371326000000"
    },
    "371327000000": {
      "city": "临沂市",
      "name": "莒南县",
      "id": "371327000000"
    },
    "371328000000": {
      "city": "临沂市",
      "name": "蒙阴县",
      "id": "371328000000"
    },
    "371329000000": {
      "city": "临沂市",
      "name": "临沭县",
      "id": "371329000000"
    },
    "371371000000": {
      "city": "临沂市",
      "name": "临沂高新技术产业开发区",
      "id": "371371000000"
    },
    "371372000000": {
      "city": "临沂市",
      "name": "临沂经济技术开发区",
      "id": "371372000000"
    },
    "371373000000": {
      "city": "临沂市",
      "name": "临沂临港经济开发区",
      "id": "371373000000"
    },
    "371401000000": {
      "city": "德州市",
      "name": "市辖区",
      "id": "371401000000"
    },
    "371402000000": {
      "city": "德州市",
      "name": "德城区",
      "id": "371402000000"
    },
    "371403000000": {
      "city": "德州市",
      "name": "陵城区",
      "id": "371403000000"
    },
    "371422000000": {
      "city": "德州市",
      "name": "宁津县",
      "id": "371422000000"
    },
    "371423000000": {
      "city": "德州市",
      "name": "庆云县",
      "id": "371423000000"
    },
    "371424000000": {
      "city": "德州市",
      "name": "临邑县",
      "id": "371424000000"
    },
    "371425000000": {
      "city": "德州市",
      "name": "齐河县",
      "id": "371425000000"
    },
    "371426000000": {
      "city": "德州市",
      "name": "平原县",
      "id": "371426000000"
    },
    "371427000000": {
      "city": "德州市",
      "name": "夏津县",
      "id": "371427000000"
    },
    "371428000000": {
      "city": "德州市",
      "name": "武城县",
      "id": "371428000000"
    },
    "371471000000": {
      "city": "德州市",
      "name": "德州经济技术开发区",
      "id": "371471000000"
    },
    "371472000000": {
      "city": "德州市",
      "name": "德州运河经济开发区",
      "id": "371472000000"
    },
    "371481000000": {
      "city": "德州市",
      "name": "乐陵市",
      "id": "371481000000"
    },
    "371482000000": {
      "city": "德州市",
      "name": "禹城市",
      "id": "371482000000"
    },
    "371501000000": {
      "city": "聊城市",
      "name": "市辖区",
      "id": "371501000000"
    },
    "371502000000": {
      "city": "聊城市",
      "name": "东昌府区",
      "id": "371502000000"
    },
    "371521000000": {
      "city": "聊城市",
      "name": "阳谷县",
      "id": "371521000000"
    },
    "371522000000": {
      "city": "聊城市",
      "name": "莘县",
      "id": "371522000000"
    },
    "371523000000": {
      "city": "聊城市",
      "name": "茌平县",
      "id": "371523000000"
    },
    "371524000000": {
      "city": "聊城市",
      "name": "东阿县",
      "id": "371524000000"
    },
    "371525000000": {
      "city": "聊城市",
      "name": "冠县",
      "id": "371525000000"
    },
    "371526000000": {
      "city": "聊城市",
      "name": "高唐县",
      "id": "371526000000"
    },
    "371581000000": {
      "city": "聊城市",
      "name": "临清市",
      "id": "371581000000"
    },
    "371601000000": {
      "city": "滨州市",
      "name": "市辖区",
      "id": "371601000000"
    },
    "371602000000": {
      "city": "滨州市",
      "name": "滨城区",
      "id": "371602000000"
    },
    "371603000000": {
      "city": "滨州市",
      "name": "沾化区",
      "id": "371603000000"
    },
    "371621000000": {
      "city": "滨州市",
      "name": "惠民县",
      "id": "371621000000"
    },
    "371622000000": {
      "city": "滨州市",
      "name": "阳信县",
      "id": "371622000000"
    },
    "371623000000": {
      "city": "滨州市",
      "name": "无棣县",
      "id": "371623000000"
    },
    "371625000000": {
      "city": "滨州市",
      "name": "博兴县",
      "id": "371625000000"
    },
    "371681000000": {
      "city": "滨州市",
      "name": "邹平市",
      "id": "371681000000"
    },
    "371701000000": {
      "city": "菏泽市",
      "name": "市辖区",
      "id": "371701000000"
    },
    "371702000000": {
      "city": "菏泽市",
      "name": "牡丹区",
      "id": "371702000000"
    },
    "371703000000": {
      "city": "菏泽市",
      "name": "定陶区",
      "id": "371703000000"
    },
    "371721000000": {
      "city": "菏泽市",
      "name": "曹县",
      "id": "371721000000"
    },
    "371722000000": {
      "city": "菏泽市",
      "name": "单县",
      "id": "371722000000"
    },
    "371723000000": {
      "city": "菏泽市",
      "name": "成武县",
      "id": "371723000000"
    },
    "371724000000": {
      "city": "菏泽市",
      "name": "巨野县",
      "id": "371724000000"
    },
    "371725000000": {
      "city": "菏泽市",
      "name": "郓城县",
      "id": "371725000000"
    },
    "371726000000": {
      "city": "菏泽市",
      "name": "鄄城县",
      "id": "371726000000"
    },
    "371728000000": {
      "city": "菏泽市",
      "name": "东明县",
      "id": "371728000000"
    },
    "371771000000": {
      "city": "菏泽市",
      "name": "菏泽经济技术开发区",
      "id": "371771000000"
    },
    "371772000000": {
      "city": "菏泽市",
      "name": "菏泽高新技术开发区",
      "id": "371772000000"
    },
    "410101000000": {
      "city": "郑州市",
      "name": "市辖区",
      "id": "410101000000"
    },
    "410102000000": {
      "city": "郑州市",
      "name": "中原区",
      "id": "410102000000"
    },
    "410103000000": {
      "city": "郑州市",
      "name": "二七区",
      "id": "410103000000"
    },
    "410104000000": {
      "city": "郑州市",
      "name": "管城回族区",
      "id": "410104000000"
    },
    "410105000000": {
      "city": "郑州市",
      "name": "金水区",
      "id": "410105000000"
    },
    "410106000000": {
      "city": "郑州市",
      "name": "上街区",
      "id": "410106000000"
    },
    "410108000000": {
      "city": "郑州市",
      "name": "惠济区",
      "id": "410108000000"
    },
    "410122000000": {
      "city": "郑州市",
      "name": "中牟县",
      "id": "410122000000"
    },
    "410171000000": {
      "city": "郑州市",
      "name": "郑州经济技术开发区",
      "id": "410171000000"
    },
    "410172000000": {
      "city": "郑州市",
      "name": "郑州高新技术产业开发区",
      "id": "410172000000"
    },
    "410173000000": {
      "city": "郑州市",
      "name": "郑州航空港经济综合实验区",
      "id": "410173000000"
    },
    "410181000000": {
      "city": "郑州市",
      "name": "巩义市",
      "id": "410181000000"
    },
    "410182000000": {
      "city": "郑州市",
      "name": "荥阳市",
      "id": "410182000000"
    },
    "410183000000": {
      "city": "郑州市",
      "name": "新密市",
      "id": "410183000000"
    },
    "410184000000": {
      "city": "郑州市",
      "name": "新郑市",
      "id": "410184000000"
    },
    "410185000000": {
      "city": "郑州市",
      "name": "登封市",
      "id": "410185000000"
    },
    "410201000000": {
      "city": "开封市",
      "name": "市辖区",
      "id": "410201000000"
    },
    "410202000000": {
      "city": "开封市",
      "name": "龙亭区",
      "id": "410202000000"
    },
    "410203000000": {
      "city": "开封市",
      "name": "顺河回族区",
      "id": "410203000000"
    },
    "410204000000": {
      "city": "开封市",
      "name": "鼓楼区",
      "id": "410204000000"
    },
    "410205000000": {
      "city": "开封市",
      "name": "禹王台区",
      "id": "410205000000"
    },
    "410212000000": {
      "city": "开封市",
      "name": "祥符区",
      "id": "410212000000"
    },
    "410221000000": {
      "city": "开封市",
      "name": "杞县",
      "id": "410221000000"
    },
    "410222000000": {
      "city": "开封市",
      "name": "通许县",
      "id": "410222000000"
    },
    "410223000000": {
      "city": "开封市",
      "name": "尉氏县",
      "id": "410223000000"
    },
    "410225000000": {
      "city": "开封市",
      "name": "兰考县",
      "id": "410225000000"
    },
    "410301000000": {
      "city": "洛阳市",
      "name": "市辖区",
      "id": "410301000000"
    },
    "410302000000": {
      "city": "洛阳市",
      "name": "老城区",
      "id": "410302000000"
    },
    "410303000000": {
      "city": "洛阳市",
      "name": "西工区",
      "id": "410303000000"
    },
    "410304000000": {
      "city": "洛阳市",
      "name": "瀍河回族区",
      "id": "410304000000"
    },
    "410305000000": {
      "city": "洛阳市",
      "name": "涧西区",
      "id": "410305000000"
    },
    "410306000000": {
      "city": "洛阳市",
      "name": "吉利区",
      "id": "410306000000"
    },
    "410311000000": {
      "city": "洛阳市",
      "name": "洛龙区",
      "id": "410311000000"
    },
    "410322000000": {
      "city": "洛阳市",
      "name": "孟津县",
      "id": "410322000000"
    },
    "410323000000": {
      "city": "洛阳市",
      "name": "新安县",
      "id": "410323000000"
    },
    "410324000000": {
      "city": "洛阳市",
      "name": "栾川县",
      "id": "410324000000"
    },
    "410325000000": {
      "city": "洛阳市",
      "name": "嵩县",
      "id": "410325000000"
    },
    "410326000000": {
      "city": "洛阳市",
      "name": "汝阳县",
      "id": "410326000000"
    },
    "410327000000": {
      "city": "洛阳市",
      "name": "宜阳县",
      "id": "410327000000"
    },
    "410328000000": {
      "city": "洛阳市",
      "name": "洛宁县",
      "id": "410328000000"
    },
    "410329000000": {
      "city": "洛阳市",
      "name": "伊川县",
      "id": "410329000000"
    },
    "410371000000": {
      "city": "洛阳市",
      "name": "洛阳高新技术产业开发区",
      "id": "410371000000"
    },
    "410381000000": {
      "city": "洛阳市",
      "name": "偃师市",
      "id": "410381000000"
    },
    "410401000000": {
      "city": "平顶山市",
      "name": "市辖区",
      "id": "410401000000"
    },
    "410402000000": {
      "city": "平顶山市",
      "name": "新华区",
      "id": "410402000000"
    },
    "410403000000": {
      "city": "平顶山市",
      "name": "卫东区",
      "id": "410403000000"
    },
    "410404000000": {
      "city": "平顶山市",
      "name": "石龙区",
      "id": "410404000000"
    },
    "410411000000": {
      "city": "平顶山市",
      "name": "湛河区",
      "id": "410411000000"
    },
    "410421000000": {
      "city": "平顶山市",
      "name": "宝丰县",
      "id": "410421000000"
    },
    "410422000000": {
      "city": "平顶山市",
      "name": "叶县",
      "id": "410422000000"
    },
    "410423000000": {
      "city": "平顶山市",
      "name": "鲁山县",
      "id": "410423000000"
    },
    "410425000000": {
      "city": "平顶山市",
      "name": "郏县",
      "id": "410425000000"
    },
    "410471000000": {
      "city": "平顶山市",
      "name": "平顶山高新技术产业开发区",
      "id": "410471000000"
    },
    "410472000000": {
      "city": "平顶山市",
      "name": "平顶山市新城区",
      "id": "410472000000"
    },
    "410481000000": {
      "city": "平顶山市",
      "name": "舞钢市",
      "id": "410481000000"
    },
    "410482000000": {
      "city": "平顶山市",
      "name": "汝州市",
      "id": "410482000000"
    },
    "410501000000": {
      "city": "安阳市",
      "name": "市辖区",
      "id": "410501000000"
    },
    "410502000000": {
      "city": "安阳市",
      "name": "文峰区",
      "id": "410502000000"
    },
    "410503000000": {
      "city": "安阳市",
      "name": "北关区",
      "id": "410503000000"
    },
    "410505000000": {
      "city": "安阳市",
      "name": "殷都区",
      "id": "410505000000"
    },
    "410506000000": {
      "city": "安阳市",
      "name": "龙安区",
      "id": "410506000000"
    },
    "410522000000": {
      "city": "安阳市",
      "name": "安阳县",
      "id": "410522000000"
    },
    "410523000000": {
      "city": "安阳市",
      "name": "汤阴县",
      "id": "410523000000"
    },
    "410526000000": {
      "city": "安阳市",
      "name": "滑县",
      "id": "410526000000"
    },
    "410527000000": {
      "city": "安阳市",
      "name": "内黄县",
      "id": "410527000000"
    },
    "410571000000": {
      "city": "安阳市",
      "name": "安阳高新技术产业开发区",
      "id": "410571000000"
    },
    "410581000000": {
      "city": "安阳市",
      "name": "林州市",
      "id": "410581000000"
    },
    "410601000000": {
      "city": "鹤壁市",
      "name": "市辖区",
      "id": "410601000000"
    },
    "410602000000": {
      "city": "鹤壁市",
      "name": "鹤山区",
      "id": "410602000000"
    },
    "410603000000": {
      "city": "鹤壁市",
      "name": "山城区",
      "id": "410603000000"
    },
    "410611000000": {
      "city": "鹤壁市",
      "name": "淇滨区",
      "id": "410611000000"
    },
    "410621000000": {
      "city": "鹤壁市",
      "name": "浚县",
      "id": "410621000000"
    },
    "410622000000": {
      "city": "鹤壁市",
      "name": "淇县",
      "id": "410622000000"
    },
    "410671000000": {
      "city": "鹤壁市",
      "name": "鹤壁经济技术开发区",
      "id": "410671000000"
    },
    "410701000000": {
      "city": "新乡市",
      "name": "市辖区",
      "id": "410701000000"
    },
    "410702000000": {
      "city": "新乡市",
      "name": "红旗区",
      "id": "410702000000"
    },
    "410703000000": {
      "city": "新乡市",
      "name": "卫滨区",
      "id": "410703000000"
    },
    "410704000000": {
      "city": "新乡市",
      "name": "凤泉区",
      "id": "410704000000"
    },
    "410711000000": {
      "city": "新乡市",
      "name": "牧野区",
      "id": "410711000000"
    },
    "410721000000": {
      "city": "新乡市",
      "name": "新乡县",
      "id": "410721000000"
    },
    "410724000000": {
      "city": "新乡市",
      "name": "获嘉县",
      "id": "410724000000"
    },
    "410725000000": {
      "city": "新乡市",
      "name": "原阳县",
      "id": "410725000000"
    },
    "410726000000": {
      "city": "新乡市",
      "name": "延津县",
      "id": "410726000000"
    },
    "410727000000": {
      "city": "新乡市",
      "name": "封丘县",
      "id": "410727000000"
    },
    "410728000000": {
      "city": "新乡市",
      "name": "长垣县",
      "id": "410728000000"
    },
    "410771000000": {
      "city": "新乡市",
      "name": "新乡高新技术产业开发区",
      "id": "410771000000"
    },
    "410772000000": {
      "city": "新乡市",
      "name": "新乡经济技术开发区",
      "id": "410772000000"
    },
    "410773000000": {
      "city": "新乡市",
      "name": "新乡市平原城乡一体化示范区",
      "id": "410773000000"
    },
    "410781000000": {
      "city": "新乡市",
      "name": "卫辉市",
      "id": "410781000000"
    },
    "410782000000": {
      "city": "新乡市",
      "name": "辉县市",
      "id": "410782000000"
    },
    "410801000000": {
      "city": "焦作市",
      "name": "市辖区",
      "id": "410801000000"
    },
    "410802000000": {
      "city": "焦作市",
      "name": "解放区",
      "id": "410802000000"
    },
    "410803000000": {
      "city": "焦作市",
      "name": "中站区",
      "id": "410803000000"
    },
    "410804000000": {
      "city": "焦作市",
      "name": "马村区",
      "id": "410804000000"
    },
    "410811000000": {
      "city": "焦作市",
      "name": "山阳区",
      "id": "410811000000"
    },
    "410821000000": {
      "city": "焦作市",
      "name": "修武县",
      "id": "410821000000"
    },
    "410822000000": {
      "city": "焦作市",
      "name": "博爱县",
      "id": "410822000000"
    },
    "410823000000": {
      "city": "焦作市",
      "name": "武陟县",
      "id": "410823000000"
    },
    "410825000000": {
      "city": "焦作市",
      "name": "温县",
      "id": "410825000000"
    },
    "410871000000": {
      "city": "焦作市",
      "name": "焦作城乡一体化示范区",
      "id": "410871000000"
    },
    "410882000000": {
      "city": "焦作市",
      "name": "沁阳市",
      "id": "410882000000"
    },
    "410883000000": {
      "city": "焦作市",
      "name": "孟州市",
      "id": "410883000000"
    },
    "410901000000": {
      "city": "濮阳市",
      "name": "市辖区",
      "id": "410901000000"
    },
    "410902000000": {
      "city": "濮阳市",
      "name": "华龙区",
      "id": "410902000000"
    },
    "410922000000": {
      "city": "濮阳市",
      "name": "清丰县",
      "id": "410922000000"
    },
    "410923000000": {
      "city": "濮阳市",
      "name": "南乐县",
      "id": "410923000000"
    },
    "410926000000": {
      "city": "濮阳市",
      "name": "范县",
      "id": "410926000000"
    },
    "410927000000": {
      "city": "濮阳市",
      "name": "台前县",
      "id": "410927000000"
    },
    "410928000000": {
      "city": "濮阳市",
      "name": "濮阳县",
      "id": "410928000000"
    },
    "410971000000": {
      "city": "濮阳市",
      "name": "河南濮阳工业园区",
      "id": "410971000000"
    },
    "410972000000": {
      "city": "濮阳市",
      "name": "濮阳经济技术开发区",
      "id": "410972000000"
    },
    "411001000000": {
      "city": "许昌市",
      "name": "市辖区",
      "id": "411001000000"
    },
    "411002000000": {
      "city": "许昌市",
      "name": "魏都区",
      "id": "411002000000"
    },
    "411003000000": {
      "city": "许昌市",
      "name": "建安区",
      "id": "411003000000"
    },
    "411024000000": {
      "city": "许昌市",
      "name": "鄢陵县",
      "id": "411024000000"
    },
    "411025000000": {
      "city": "许昌市",
      "name": "襄城县",
      "id": "411025000000"
    },
    "411071000000": {
      "city": "许昌市",
      "name": "许昌经济技术开发区",
      "id": "411071000000"
    },
    "411081000000": {
      "city": "许昌市",
      "name": "禹州市",
      "id": "411081000000"
    },
    "411082000000": {
      "city": "许昌市",
      "name": "长葛市",
      "id": "411082000000"
    },
    "411101000000": {
      "city": "漯河市",
      "name": "市辖区",
      "id": "411101000000"
    },
    "411102000000": {
      "city": "漯河市",
      "name": "源汇区",
      "id": "411102000000"
    },
    "411103000000": {
      "city": "漯河市",
      "name": "郾城区",
      "id": "411103000000"
    },
    "411104000000": {
      "city": "漯河市",
      "name": "召陵区",
      "id": "411104000000"
    },
    "411121000000": {
      "city": "漯河市",
      "name": "舞阳县",
      "id": "411121000000"
    },
    "411122000000": {
      "city": "漯河市",
      "name": "临颍县",
      "id": "411122000000"
    },
    "411171000000": {
      "city": "漯河市",
      "name": "漯河经济技术开发区",
      "id": "411171000000"
    },
    "411201000000": {
      "city": "三门峡市",
      "name": "市辖区",
      "id": "411201000000"
    },
    "411202000000": {
      "city": "三门峡市",
      "name": "湖滨区",
      "id": "411202000000"
    },
    "411203000000": {
      "city": "三门峡市",
      "name": "陕州区",
      "id": "411203000000"
    },
    "411221000000": {
      "city": "三门峡市",
      "name": "渑池县",
      "id": "411221000000"
    },
    "411224000000": {
      "city": "三门峡市",
      "name": "卢氏县",
      "id": "411224000000"
    },
    "411271000000": {
      "city": "三门峡市",
      "name": "河南三门峡经济开发区",
      "id": "411271000000"
    },
    "411281000000": {
      "city": "三门峡市",
      "name": "义马市",
      "id": "411281000000"
    },
    "411282000000": {
      "city": "三门峡市",
      "name": "灵宝市",
      "id": "411282000000"
    },
    "411301000000": {
      "city": "南阳市",
      "name": "市辖区",
      "id": "411301000000"
    },
    "411302000000": {
      "city": "南阳市",
      "name": "宛城区",
      "id": "411302000000"
    },
    "411303000000": {
      "city": "南阳市",
      "name": "卧龙区",
      "id": "411303000000"
    },
    "411321000000": {
      "city": "南阳市",
      "name": "南召县",
      "id": "411321000000"
    },
    "411322000000": {
      "city": "南阳市",
      "name": "方城县",
      "id": "411322000000"
    },
    "411323000000": {
      "city": "南阳市",
      "name": "西峡县",
      "id": "411323000000"
    },
    "411324000000": {
      "city": "南阳市",
      "name": "镇平县",
      "id": "411324000000"
    },
    "411325000000": {
      "city": "南阳市",
      "name": "内乡县",
      "id": "411325000000"
    },
    "411326000000": {
      "city": "南阳市",
      "name": "淅川县",
      "id": "411326000000"
    },
    "411327000000": {
      "city": "南阳市",
      "name": "社旗县",
      "id": "411327000000"
    },
    "411328000000": {
      "city": "南阳市",
      "name": "唐河县",
      "id": "411328000000"
    },
    "411329000000": {
      "city": "南阳市",
      "name": "新野县",
      "id": "411329000000"
    },
    "411330000000": {
      "city": "南阳市",
      "name": "桐柏县",
      "id": "411330000000"
    },
    "411371000000": {
      "city": "南阳市",
      "name": "南阳高新技术产业开发区",
      "id": "411371000000"
    },
    "411372000000": {
      "city": "南阳市",
      "name": "南阳市城乡一体化示范区",
      "id": "411372000000"
    },
    "411381000000": {
      "city": "南阳市",
      "name": "邓州市",
      "id": "411381000000"
    },
    "411401000000": {
      "city": "商丘市",
      "name": "市辖区",
      "id": "411401000000"
    },
    "411402000000": {
      "city": "商丘市",
      "name": "梁园区",
      "id": "411402000000"
    },
    "411403000000": {
      "city": "商丘市",
      "name": "睢阳区",
      "id": "411403000000"
    },
    "411421000000": {
      "city": "商丘市",
      "name": "民权县",
      "id": "411421000000"
    },
    "411422000000": {
      "city": "商丘市",
      "name": "睢县",
      "id": "411422000000"
    },
    "411423000000": {
      "city": "商丘市",
      "name": "宁陵县",
      "id": "411423000000"
    },
    "411424000000": {
      "city": "商丘市",
      "name": "柘城县",
      "id": "411424000000"
    },
    "411425000000": {
      "city": "商丘市",
      "name": "虞城县",
      "id": "411425000000"
    },
    "411426000000": {
      "city": "商丘市",
      "name": "夏邑县",
      "id": "411426000000"
    },
    "411471000000": {
      "city": "商丘市",
      "name": "豫东综合物流产业聚集区",
      "id": "411471000000"
    },
    "411472000000": {
      "city": "商丘市",
      "name": "河南商丘经济开发区",
      "id": "411472000000"
    },
    "411481000000": {
      "city": "商丘市",
      "name": "永城市",
      "id": "411481000000"
    },
    "411501000000": {
      "city": "信阳市",
      "name": "市辖区",
      "id": "411501000000"
    },
    "411502000000": {
      "city": "信阳市",
      "name": "浉河区",
      "id": "411502000000"
    },
    "411503000000": {
      "city": "信阳市",
      "name": "平桥区",
      "id": "411503000000"
    },
    "411521000000": {
      "city": "信阳市",
      "name": "罗山县",
      "id": "411521000000"
    },
    "411522000000": {
      "city": "信阳市",
      "name": "光山县",
      "id": "411522000000"
    },
    "411523000000": {
      "city": "信阳市",
      "name": "新县",
      "id": "411523000000"
    },
    "411524000000": {
      "city": "信阳市",
      "name": "商城县",
      "id": "411524000000"
    },
    "411525000000": {
      "city": "信阳市",
      "name": "固始县",
      "id": "411525000000"
    },
    "411526000000": {
      "city": "信阳市",
      "name": "潢川县",
      "id": "411526000000"
    },
    "411527000000": {
      "city": "信阳市",
      "name": "淮滨县",
      "id": "411527000000"
    },
    "411528000000": {
      "city": "信阳市",
      "name": "息县",
      "id": "411528000000"
    },
    "411571000000": {
      "city": "信阳市",
      "name": "信阳高新技术产业开发区",
      "id": "411571000000"
    },
    "411601000000": {
      "city": "周口市",
      "name": "市辖区",
      "id": "411601000000"
    },
    "411602000000": {
      "city": "周口市",
      "name": "川汇区",
      "id": "411602000000"
    },
    "411621000000": {
      "city": "周口市",
      "name": "扶沟县",
      "id": "411621000000"
    },
    "411622000000": {
      "city": "周口市",
      "name": "西华县",
      "id": "411622000000"
    },
    "411623000000": {
      "city": "周口市",
      "name": "商水县",
      "id": "411623000000"
    },
    "411624000000": {
      "city": "周口市",
      "name": "沈丘县",
      "id": "411624000000"
    },
    "411625000000": {
      "city": "周口市",
      "name": "郸城县",
      "id": "411625000000"
    },
    "411626000000": {
      "city": "周口市",
      "name": "淮阳县",
      "id": "411626000000"
    },
    "411627000000": {
      "city": "周口市",
      "name": "太康县",
      "id": "411627000000"
    },
    "411628000000": {
      "city": "周口市",
      "name": "鹿邑县",
      "id": "411628000000"
    },
    "411671000000": {
      "city": "周口市",
      "name": "河南周口经济开发区",
      "id": "411671000000"
    },
    "411681000000": {
      "city": "周口市",
      "name": "项城市",
      "id": "411681000000"
    },
    "411701000000": {
      "city": "驻马店市",
      "name": "市辖区",
      "id": "411701000000"
    },
    "411702000000": {
      "city": "驻马店市",
      "name": "驿城区",
      "id": "411702000000"
    },
    "411721000000": {
      "city": "驻马店市",
      "name": "西平县",
      "id": "411721000000"
    },
    "411722000000": {
      "city": "驻马店市",
      "name": "上蔡县",
      "id": "411722000000"
    },
    "411723000000": {
      "city": "驻马店市",
      "name": "平舆县",
      "id": "411723000000"
    },
    "411724000000": {
      "city": "驻马店市",
      "name": "正阳县",
      "id": "411724000000"
    },
    "411725000000": {
      "city": "驻马店市",
      "name": "确山县",
      "id": "411725000000"
    },
    "411726000000": {
      "city": "驻马店市",
      "name": "泌阳县",
      "id": "411726000000"
    },
    "411727000000": {
      "city": "驻马店市",
      "name": "汝南县",
      "id": "411727000000"
    },
    "411728000000": {
      "city": "驻马店市",
      "name": "遂平县",
      "id": "411728000000"
    },
    "411729000000": {
      "city": "驻马店市",
      "name": "新蔡县",
      "id": "411729000000"
    },
    "411771000000": {
      "city": "驻马店市",
      "name": "河南驻马店经济开发区",
      "id": "411771000000"
    },
    "419001000000": {
      "city": "省直辖县级行政区划",
      "name": "济源市",
      "id": "419001000000"
    },
    "420101000000": {
      "city": "武汉市",
      "name": "市辖区",
      "id": "420101000000"
    },
    "420102000000": {
      "city": "武汉市",
      "name": "江岸区",
      "id": "420102000000"
    },
    "420103000000": {
      "city": "武汉市",
      "name": "江汉区",
      "id": "420103000000"
    },
    "420104000000": {
      "city": "武汉市",
      "name": "硚口区",
      "id": "420104000000"
    },
    "420105000000": {
      "city": "武汉市",
      "name": "汉阳区",
      "id": "420105000000"
    },
    "420106000000": {
      "city": "武汉市",
      "name": "武昌区",
      "id": "420106000000"
    },
    "420107000000": {
      "city": "武汉市",
      "name": "青山区",
      "id": "420107000000"
    },
    "420111000000": {
      "city": "武汉市",
      "name": "洪山区",
      "id": "420111000000"
    },
    "420112000000": {
      "city": "武汉市",
      "name": "东西湖区",
      "id": "420112000000"
    },
    "420113000000": {
      "city": "武汉市",
      "name": "汉南区",
      "id": "420113000000"
    },
    "420114000000": {
      "city": "武汉市",
      "name": "蔡甸区",
      "id": "420114000000"
    },
    "420115000000": {
      "city": "武汉市",
      "name": "江夏区",
      "id": "420115000000"
    },
    "420116000000": {
      "city": "武汉市",
      "name": "黄陂区",
      "id": "420116000000"
    },
    "420117000000": {
      "city": "武汉市",
      "name": "新洲区",
      "id": "420117000000"
    },
    "420201000000": {
      "city": "黄石市",
      "name": "市辖区",
      "id": "420201000000"
    },
    "420202000000": {
      "city": "黄石市",
      "name": "黄石港区",
      "id": "420202000000"
    },
    "420203000000": {
      "city": "黄石市",
      "name": "西塞山区",
      "id": "420203000000"
    },
    "420204000000": {
      "city": "黄石市",
      "name": "下陆区",
      "id": "420204000000"
    },
    "420205000000": {
      "city": "黄石市",
      "name": "铁山区",
      "id": "420205000000"
    },
    "420222000000": {
      "city": "黄石市",
      "name": "阳新县",
      "id": "420222000000"
    },
    "420281000000": {
      "city": "黄石市",
      "name": "大冶市",
      "id": "420281000000"
    },
    "420301000000": {
      "city": "十堰市",
      "name": "市辖区",
      "id": "420301000000"
    },
    "420302000000": {
      "city": "十堰市",
      "name": "茅箭区",
      "id": "420302000000"
    },
    "420303000000": {
      "city": "十堰市",
      "name": "张湾区",
      "id": "420303000000"
    },
    "420304000000": {
      "city": "十堰市",
      "name": "郧阳区",
      "id": "420304000000"
    },
    "420322000000": {
      "city": "十堰市",
      "name": "郧西县",
      "id": "420322000000"
    },
    "420323000000": {
      "city": "十堰市",
      "name": "竹山县",
      "id": "420323000000"
    },
    "420324000000": {
      "city": "十堰市",
      "name": "竹溪县",
      "id": "420324000000"
    },
    "420325000000": {
      "city": "十堰市",
      "name": "房县",
      "id": "420325000000"
    },
    "420381000000": {
      "city": "十堰市",
      "name": "丹江口市",
      "id": "420381000000"
    },
    "420501000000": {
      "city": "宜昌市",
      "name": "市辖区",
      "id": "420501000000"
    },
    "420502000000": {
      "city": "宜昌市",
      "name": "西陵区",
      "id": "420502000000"
    },
    "420503000000": {
      "city": "宜昌市",
      "name": "伍家岗区",
      "id": "420503000000"
    },
    "420504000000": {
      "city": "宜昌市",
      "name": "点军区",
      "id": "420504000000"
    },
    "420505000000": {
      "city": "宜昌市",
      "name": "猇亭区",
      "id": "420505000000"
    },
    "420506000000": {
      "city": "宜昌市",
      "name": "夷陵区",
      "id": "420506000000"
    },
    "420525000000": {
      "city": "宜昌市",
      "name": "远安县",
      "id": "420525000000"
    },
    "420526000000": {
      "city": "宜昌市",
      "name": "兴山县",
      "id": "420526000000"
    },
    "420527000000": {
      "city": "宜昌市",
      "name": "秭归县",
      "id": "420527000000"
    },
    "420528000000": {
      "city": "宜昌市",
      "name": "长阳土家族自治县",
      "id": "420528000000"
    },
    "420529000000": {
      "city": "宜昌市",
      "name": "五峰土家族自治县",
      "id": "420529000000"
    },
    "420581000000": {
      "city": "宜昌市",
      "name": "宜都市",
      "id": "420581000000"
    },
    "420582000000": {
      "city": "宜昌市",
      "name": "当阳市",
      "id": "420582000000"
    },
    "420583000000": {
      "city": "宜昌市",
      "name": "枝江市",
      "id": "420583000000"
    },
    "420601000000": {
      "city": "襄阳市",
      "name": "市辖区",
      "id": "420601000000"
    },
    "420602000000": {
      "city": "襄阳市",
      "name": "襄城区",
      "id": "420602000000"
    },
    "420606000000": {
      "city": "襄阳市",
      "name": "樊城区",
      "id": "420606000000"
    },
    "420607000000": {
      "city": "襄阳市",
      "name": "襄州区",
      "id": "420607000000"
    },
    "420624000000": {
      "city": "襄阳市",
      "name": "南漳县",
      "id": "420624000000"
    },
    "420625000000": {
      "city": "襄阳市",
      "name": "谷城县",
      "id": "420625000000"
    },
    "420626000000": {
      "city": "襄阳市",
      "name": "保康县",
      "id": "420626000000"
    },
    "420682000000": {
      "city": "襄阳市",
      "name": "老河口市",
      "id": "420682000000"
    },
    "420683000000": {
      "city": "襄阳市",
      "name": "枣阳市",
      "id": "420683000000"
    },
    "420684000000": {
      "city": "襄阳市",
      "name": "宜城市",
      "id": "420684000000"
    },
    "420701000000": {
      "city": "鄂州市",
      "name": "市辖区",
      "id": "420701000000"
    },
    "420702000000": {
      "city": "鄂州市",
      "name": "梁子湖区",
      "id": "420702000000"
    },
    "420703000000": {
      "city": "鄂州市",
      "name": "华容区",
      "id": "420703000000"
    },
    "420704000000": {
      "city": "鄂州市",
      "name": "鄂城区",
      "id": "420704000000"
    },
    "420801000000": {
      "city": "荆门市",
      "name": "市辖区",
      "id": "420801000000"
    },
    "420802000000": {
      "city": "荆门市",
      "name": "东宝区",
      "id": "420802000000"
    },
    "420804000000": {
      "city": "荆门市",
      "name": "掇刀区",
      "id": "420804000000"
    },
    "420822000000": {
      "city": "荆门市",
      "name": "沙洋县",
      "id": "420822000000"
    },
    "420881000000": {
      "city": "荆门市",
      "name": "钟祥市",
      "id": "420881000000"
    },
    "420882000000": {
      "city": "荆门市",
      "name": "京山市",
      "id": "420882000000"
    },
    "420901000000": {
      "city": "孝感市",
      "name": "市辖区",
      "id": "420901000000"
    },
    "420902000000": {
      "city": "孝感市",
      "name": "孝南区",
      "id": "420902000000"
    },
    "420921000000": {
      "city": "孝感市",
      "name": "孝昌县",
      "id": "420921000000"
    },
    "420922000000": {
      "city": "孝感市",
      "name": "大悟县",
      "id": "420922000000"
    },
    "420923000000": {
      "city": "孝感市",
      "name": "云梦县",
      "id": "420923000000"
    },
    "420981000000": {
      "city": "孝感市",
      "name": "应城市",
      "id": "420981000000"
    },
    "420982000000": {
      "city": "孝感市",
      "name": "安陆市",
      "id": "420982000000"
    },
    "420984000000": {
      "city": "孝感市",
      "name": "汉川市",
      "id": "420984000000"
    },
    "421001000000": {
      "city": "荆州市",
      "name": "市辖区",
      "id": "421001000000"
    },
    "421002000000": {
      "city": "荆州市",
      "name": "沙市区",
      "id": "421002000000"
    },
    "421003000000": {
      "city": "荆州市",
      "name": "荆州区",
      "id": "421003000000"
    },
    "421022000000": {
      "city": "荆州市",
      "name": "公安县",
      "id": "421022000000"
    },
    "421023000000": {
      "city": "荆州市",
      "name": "监利县",
      "id": "421023000000"
    },
    "421024000000": {
      "city": "荆州市",
      "name": "江陵县",
      "id": "421024000000"
    },
    "421071000000": {
      "city": "荆州市",
      "name": "荆州经济技术开发区",
      "id": "421071000000"
    },
    "421081000000": {
      "city": "荆州市",
      "name": "石首市",
      "id": "421081000000"
    },
    "421083000000": {
      "city": "荆州市",
      "name": "洪湖市",
      "id": "421083000000"
    },
    "421087000000": {
      "city": "荆州市",
      "name": "松滋市",
      "id": "421087000000"
    },
    "421101000000": {
      "city": "黄冈市",
      "name": "市辖区",
      "id": "421101000000"
    },
    "421102000000": {
      "city": "黄冈市",
      "name": "黄州区",
      "id": "421102000000"
    },
    "421121000000": {
      "city": "黄冈市",
      "name": "团风县",
      "id": "421121000000"
    },
    "421122000000": {
      "city": "黄冈市",
      "name": "红安县",
      "id": "421122000000"
    },
    "421123000000": {
      "city": "黄冈市",
      "name": "罗田县",
      "id": "421123000000"
    },
    "421124000000": {
      "city": "黄冈市",
      "name": "英山县",
      "id": "421124000000"
    },
    "421125000000": {
      "city": "黄冈市",
      "name": "浠水县",
      "id": "421125000000"
    },
    "421126000000": {
      "city": "黄冈市",
      "name": "蕲春县",
      "id": "421126000000"
    },
    "421127000000": {
      "city": "黄冈市",
      "name": "黄梅县",
      "id": "421127000000"
    },
    "421171000000": {
      "city": "黄冈市",
      "name": "龙感湖管理区",
      "id": "421171000000"
    },
    "421181000000": {
      "city": "黄冈市",
      "name": "麻城市",
      "id": "421181000000"
    },
    "421182000000": {
      "city": "黄冈市",
      "name": "武穴市",
      "id": "421182000000"
    },
    "421201000000": {
      "city": "咸宁市",
      "name": "市辖区",
      "id": "421201000000"
    },
    "421202000000": {
      "city": "咸宁市",
      "name": "咸安区",
      "id": "421202000000"
    },
    "421221000000": {
      "city": "咸宁市",
      "name": "嘉鱼县",
      "id": "421221000000"
    },
    "421222000000": {
      "city": "咸宁市",
      "name": "通城县",
      "id": "421222000000"
    },
    "421223000000": {
      "city": "咸宁市",
      "name": "崇阳县",
      "id": "421223000000"
    },
    "421224000000": {
      "city": "咸宁市",
      "name": "通山县",
      "id": "421224000000"
    },
    "421281000000": {
      "city": "咸宁市",
      "name": "赤壁市",
      "id": "421281000000"
    },
    "421301000000": {
      "city": "随州市",
      "name": "市辖区",
      "id": "421301000000"
    },
    "421303000000": {
      "city": "随州市",
      "name": "曾都区",
      "id": "421303000000"
    },
    "421321000000": {
      "city": "随州市",
      "name": "随县",
      "id": "421321000000"
    },
    "421381000000": {
      "city": "随州市",
      "name": "广水市",
      "id": "421381000000"
    },
    "422801000000": {
      "city": "恩施土家族苗族自治州",
      "name": "恩施市",
      "id": "422801000000"
    },
    "422802000000": {
      "city": "恩施土家族苗族自治州",
      "name": "利川市",
      "id": "422802000000"
    },
    "422822000000": {
      "city": "恩施土家族苗族自治州",
      "name": "建始县",
      "id": "422822000000"
    },
    "422823000000": {
      "city": "恩施土家族苗族自治州",
      "name": "巴东县",
      "id": "422823000000"
    },
    "422825000000": {
      "city": "恩施土家族苗族自治州",
      "name": "宣恩县",
      "id": "422825000000"
    },
    "422826000000": {
      "city": "恩施土家族苗族自治州",
      "name": "咸丰县",
      "id": "422826000000"
    },
    "422827000000": {
      "city": "恩施土家族苗族自治州",
      "name": "来凤县",
      "id": "422827000000"
    },
    "422828000000": {
      "city": "恩施土家族苗族自治州",
      "name": "鹤峰县",
      "id": "422828000000"
    },
    "429004000000": {
      "city": "省直辖县级行政区划",
      "name": "仙桃市",
      "id": "429004000000"
    },
    "429005000000": {
      "city": "省直辖县级行政区划",
      "name": "潜江市",
      "id": "429005000000"
    },
    "429006000000": {
      "city": "省直辖县级行政区划",
      "name": "天门市",
      "id": "429006000000"
    },
    "429021000000": {
      "city": "省直辖县级行政区划",
      "name": "神农架林区",
      "id": "429021000000"
    },
    "430101000000": {
      "city": "长沙市",
      "name": "市辖区",
      "id": "430101000000"
    },
    "430102000000": {
      "city": "长沙市",
      "name": "芙蓉区",
      "id": "430102000000"
    },
    "430103000000": {
      "city": "长沙市",
      "name": "天心区",
      "id": "430103000000"
    },
    "430104000000": {
      "city": "长沙市",
      "name": "岳麓区",
      "id": "430104000000"
    },
    "430105000000": {
      "city": "长沙市",
      "name": "开福区",
      "id": "430105000000"
    },
    "430111000000": {
      "city": "长沙市",
      "name": "雨花区",
      "id": "430111000000"
    },
    "430112000000": {
      "city": "长沙市",
      "name": "望城区",
      "id": "430112000000"
    },
    "430121000000": {
      "city": "长沙市",
      "name": "长沙县",
      "id": "430121000000"
    },
    "430181000000": {
      "city": "长沙市",
      "name": "浏阳市",
      "id": "430181000000"
    },
    "430182000000": {
      "city": "长沙市",
      "name": "宁乡市",
      "id": "430182000000"
    },
    "430201000000": {
      "city": "株洲市",
      "name": "市辖区",
      "id": "430201000000"
    },
    "430202000000": {
      "city": "株洲市",
      "name": "荷塘区",
      "id": "430202000000"
    },
    "430203000000": {
      "city": "株洲市",
      "name": "芦淞区",
      "id": "430203000000"
    },
    "430204000000": {
      "city": "株洲市",
      "name": "石峰区",
      "id": "430204000000"
    },
    "430211000000": {
      "city": "株洲市",
      "name": "天元区",
      "id": "430211000000"
    },
    "430212000000": {
      "city": "株洲市",
      "name": "渌口区",
      "id": "430212000000"
    },
    "430223000000": {
      "city": "株洲市",
      "name": "攸县",
      "id": "430223000000"
    },
    "430224000000": {
      "city": "株洲市",
      "name": "茶陵县",
      "id": "430224000000"
    },
    "430225000000": {
      "city": "株洲市",
      "name": "炎陵县",
      "id": "430225000000"
    },
    "430271000000": {
      "city": "株洲市",
      "name": "云龙示范区",
      "id": "430271000000"
    },
    "430281000000": {
      "city": "株洲市",
      "name": "醴陵市",
      "id": "430281000000"
    },
    "430301000000": {
      "city": "湘潭市",
      "name": "市辖区",
      "id": "430301000000"
    },
    "430302000000": {
      "city": "湘潭市",
      "name": "雨湖区",
      "id": "430302000000"
    },
    "430304000000": {
      "city": "湘潭市",
      "name": "岳塘区",
      "id": "430304000000"
    },
    "430321000000": {
      "city": "湘潭市",
      "name": "湘潭县",
      "id": "430321000000"
    },
    "430371000000": {
      "city": "湘潭市",
      "name": "湖南湘潭高新技术产业园区",
      "id": "430371000000"
    },
    "430372000000": {
      "city": "湘潭市",
      "name": "湘潭昭山示范区",
      "id": "430372000000"
    },
    "430373000000": {
      "city": "湘潭市",
      "name": "湘潭九华示范区",
      "id": "430373000000"
    },
    "430381000000": {
      "city": "湘潭市",
      "name": "湘乡市",
      "id": "430381000000"
    },
    "430382000000": {
      "city": "湘潭市",
      "name": "韶山市",
      "id": "430382000000"
    },
    "430401000000": {
      "city": "衡阳市",
      "name": "市辖区",
      "id": "430401000000"
    },
    "430405000000": {
      "city": "衡阳市",
      "name": "珠晖区",
      "id": "430405000000"
    },
    "430406000000": {
      "city": "衡阳市",
      "name": "雁峰区",
      "id": "430406000000"
    },
    "430407000000": {
      "city": "衡阳市",
      "name": "石鼓区",
      "id": "430407000000"
    },
    "430408000000": {
      "city": "衡阳市",
      "name": "蒸湘区",
      "id": "430408000000"
    },
    "430412000000": {
      "city": "衡阳市",
      "name": "南岳区",
      "id": "430412000000"
    },
    "430421000000": {
      "city": "衡阳市",
      "name": "衡阳县",
      "id": "430421000000"
    },
    "430422000000": {
      "city": "衡阳市",
      "name": "衡南县",
      "id": "430422000000"
    },
    "430423000000": {
      "city": "衡阳市",
      "name": "衡山县",
      "id": "430423000000"
    },
    "430424000000": {
      "city": "衡阳市",
      "name": "衡东县",
      "id": "430424000000"
    },
    "430426000000": {
      "city": "衡阳市",
      "name": "祁东县",
      "id": "430426000000"
    },
    "430471000000": {
      "city": "衡阳市",
      "name": "衡阳综合保税区",
      "id": "430471000000"
    },
    "430472000000": {
      "city": "衡阳市",
      "name": "湖南衡阳高新技术产业园区",
      "id": "430472000000"
    },
    "430473000000": {
      "city": "衡阳市",
      "name": "湖南衡阳松木经济开发区",
      "id": "430473000000"
    },
    "430481000000": {
      "city": "衡阳市",
      "name": "耒阳市",
      "id": "430481000000"
    },
    "430482000000": {
      "city": "衡阳市",
      "name": "常宁市",
      "id": "430482000000"
    },
    "430501000000": {
      "city": "邵阳市",
      "name": "市辖区",
      "id": "430501000000"
    },
    "430502000000": {
      "city": "邵阳市",
      "name": "双清区",
      "id": "430502000000"
    },
    "430503000000": {
      "city": "邵阳市",
      "name": "大祥区",
      "id": "430503000000"
    },
    "430511000000": {
      "city": "邵阳市",
      "name": "北塔区",
      "id": "430511000000"
    },
    "430521000000": {
      "city": "邵阳市",
      "name": "邵东县",
      "id": "430521000000"
    },
    "430522000000": {
      "city": "邵阳市",
      "name": "新邵县",
      "id": "430522000000"
    },
    "430523000000": {
      "city": "邵阳市",
      "name": "邵阳县",
      "id": "430523000000"
    },
    "430524000000": {
      "city": "邵阳市",
      "name": "隆回县",
      "id": "430524000000"
    },
    "430525000000": {
      "city": "邵阳市",
      "name": "洞口县",
      "id": "430525000000"
    },
    "430527000000": {
      "city": "邵阳市",
      "name": "绥宁县",
      "id": "430527000000"
    },
    "430528000000": {
      "city": "邵阳市",
      "name": "新宁县",
      "id": "430528000000"
    },
    "430529000000": {
      "city": "邵阳市",
      "name": "城步苗族自治县",
      "id": "430529000000"
    },
    "430581000000": {
      "city": "邵阳市",
      "name": "武冈市",
      "id": "430581000000"
    },
    "430601000000": {
      "city": "岳阳市",
      "name": "市辖区",
      "id": "430601000000"
    },
    "430602000000": {
      "city": "岳阳市",
      "name": "岳阳楼区",
      "id": "430602000000"
    },
    "430603000000": {
      "city": "岳阳市",
      "name": "云溪区",
      "id": "430603000000"
    },
    "430611000000": {
      "city": "岳阳市",
      "name": "君山区",
      "id": "430611000000"
    },
    "430621000000": {
      "city": "岳阳市",
      "name": "岳阳县",
      "id": "430621000000"
    },
    "430623000000": {
      "city": "岳阳市",
      "name": "华容县",
      "id": "430623000000"
    },
    "430624000000": {
      "city": "岳阳市",
      "name": "湘阴县",
      "id": "430624000000"
    },
    "430626000000": {
      "city": "岳阳市",
      "name": "平江县",
      "id": "430626000000"
    },
    "430671000000": {
      "city": "岳阳市",
      "name": "岳阳市屈原管理区",
      "id": "430671000000"
    },
    "430681000000": {
      "city": "岳阳市",
      "name": "汨罗市",
      "id": "430681000000"
    },
    "430682000000": {
      "city": "岳阳市",
      "name": "临湘市",
      "id": "430682000000"
    },
    "430701000000": {
      "city": "常德市",
      "name": "市辖区",
      "id": "430701000000"
    },
    "430702000000": {
      "city": "常德市",
      "name": "武陵区",
      "id": "430702000000"
    },
    "430703000000": {
      "city": "常德市",
      "name": "鼎城区",
      "id": "430703000000"
    },
    "430721000000": {
      "city": "常德市",
      "name": "安乡县",
      "id": "430721000000"
    },
    "430722000000": {
      "city": "常德市",
      "name": "汉寿县",
      "id": "430722000000"
    },
    "430723000000": {
      "city": "常德市",
      "name": "澧县",
      "id": "430723000000"
    },
    "430724000000": {
      "city": "常德市",
      "name": "临澧县",
      "id": "430724000000"
    },
    "430725000000": {
      "city": "常德市",
      "name": "桃源县",
      "id": "430725000000"
    },
    "430726000000": {
      "city": "常德市",
      "name": "石门县",
      "id": "430726000000"
    },
    "430771000000": {
      "city": "常德市",
      "name": "常德市西洞庭管理区",
      "id": "430771000000"
    },
    "430781000000": {
      "city": "常德市",
      "name": "津市市",
      "id": "430781000000"
    },
    "430801000000": {
      "city": "张家界市",
      "name": "市辖区",
      "id": "430801000000"
    },
    "430802000000": {
      "city": "张家界市",
      "name": "永定区",
      "id": "430802000000"
    },
    "430811000000": {
      "city": "张家界市",
      "name": "武陵源区",
      "id": "430811000000"
    },
    "430821000000": {
      "city": "张家界市",
      "name": "慈利县",
      "id": "430821000000"
    },
    "430822000000": {
      "city": "张家界市",
      "name": "桑植县",
      "id": "430822000000"
    },
    "430901000000": {
      "city": "益阳市",
      "name": "市辖区",
      "id": "430901000000"
    },
    "430902000000": {
      "city": "益阳市",
      "name": "资阳区",
      "id": "430902000000"
    },
    "430903000000": {
      "city": "益阳市",
      "name": "赫山区",
      "id": "430903000000"
    },
    "430921000000": {
      "city": "益阳市",
      "name": "南县",
      "id": "430921000000"
    },
    "430922000000": {
      "city": "益阳市",
      "name": "桃江县",
      "id": "430922000000"
    },
    "430923000000": {
      "city": "益阳市",
      "name": "安化县",
      "id": "430923000000"
    },
    "430971000000": {
      "city": "益阳市",
      "name": "益阳市大通湖管理区",
      "id": "430971000000"
    },
    "430972000000": {
      "city": "益阳市",
      "name": "湖南益阳高新技术产业园区",
      "id": "430972000000"
    },
    "430981000000": {
      "city": "益阳市",
      "name": "沅江市",
      "id": "430981000000"
    },
    "431001000000": {
      "city": "郴州市",
      "name": "市辖区",
      "id": "431001000000"
    },
    "431002000000": {
      "city": "郴州市",
      "name": "北湖区",
      "id": "431002000000"
    },
    "431003000000": {
      "city": "郴州市",
      "name": "苏仙区",
      "id": "431003000000"
    },
    "431021000000": {
      "city": "郴州市",
      "name": "桂阳县",
      "id": "431021000000"
    },
    "431022000000": {
      "city": "郴州市",
      "name": "宜章县",
      "id": "431022000000"
    },
    "431023000000": {
      "city": "郴州市",
      "name": "永兴县",
      "id": "431023000000"
    },
    "431024000000": {
      "city": "郴州市",
      "name": "嘉禾县",
      "id": "431024000000"
    },
    "431025000000": {
      "city": "郴州市",
      "name": "临武县",
      "id": "431025000000"
    },
    "431026000000": {
      "city": "郴州市",
      "name": "汝城县",
      "id": "431026000000"
    },
    "431027000000": {
      "city": "郴州市",
      "name": "桂东县",
      "id": "431027000000"
    },
    "431028000000": {
      "city": "郴州市",
      "name": "安仁县",
      "id": "431028000000"
    },
    "431081000000": {
      "city": "郴州市",
      "name": "资兴市",
      "id": "431081000000"
    },
    "431101000000": {
      "city": "永州市",
      "name": "市辖区",
      "id": "431101000000"
    },
    "431102000000": {
      "city": "永州市",
      "name": "零陵区",
      "id": "431102000000"
    },
    "431103000000": {
      "city": "永州市",
      "name": "冷水滩区",
      "id": "431103000000"
    },
    "431121000000": {
      "city": "永州市",
      "name": "祁阳县",
      "id": "431121000000"
    },
    "431122000000": {
      "city": "永州市",
      "name": "东安县",
      "id": "431122000000"
    },
    "431123000000": {
      "city": "永州市",
      "name": "双牌县",
      "id": "431123000000"
    },
    "431124000000": {
      "city": "永州市",
      "name": "道县",
      "id": "431124000000"
    },
    "431125000000": {
      "city": "永州市",
      "name": "江永县",
      "id": "431125000000"
    },
    "431126000000": {
      "city": "永州市",
      "name": "宁远县",
      "id": "431126000000"
    },
    "431127000000": {
      "city": "永州市",
      "name": "蓝山县",
      "id": "431127000000"
    },
    "431128000000": {
      "city": "永州市",
      "name": "新田县",
      "id": "431128000000"
    },
    "431129000000": {
      "city": "永州市",
      "name": "江华瑶族自治县",
      "id": "431129000000"
    },
    "431171000000": {
      "city": "永州市",
      "name": "永州经济技术开发区",
      "id": "431171000000"
    },
    "431172000000": {
      "city": "永州市",
      "name": "永州市金洞管理区",
      "id": "431172000000"
    },
    "431173000000": {
      "city": "永州市",
      "name": "永州市回龙圩管理区",
      "id": "431173000000"
    },
    "431201000000": {
      "city": "怀化市",
      "name": "市辖区",
      "id": "431201000000"
    },
    "431202000000": {
      "city": "怀化市",
      "name": "鹤城区",
      "id": "431202000000"
    },
    "431221000000": {
      "city": "怀化市",
      "name": "中方县",
      "id": "431221000000"
    },
    "431222000000": {
      "city": "怀化市",
      "name": "沅陵县",
      "id": "431222000000"
    },
    "431223000000": {
      "city": "怀化市",
      "name": "辰溪县",
      "id": "431223000000"
    },
    "431224000000": {
      "city": "怀化市",
      "name": "溆浦县",
      "id": "431224000000"
    },
    "431225000000": {
      "city": "怀化市",
      "name": "会同县",
      "id": "431225000000"
    },
    "431226000000": {
      "city": "怀化市",
      "name": "麻阳苗族自治县",
      "id": "431226000000"
    },
    "431227000000": {
      "city": "怀化市",
      "name": "新晃侗族自治县",
      "id": "431227000000"
    },
    "431228000000": {
      "city": "怀化市",
      "name": "芷江侗族自治县",
      "id": "431228000000"
    },
    "431229000000": {
      "city": "怀化市",
      "name": "靖州苗族侗族自治县",
      "id": "431229000000"
    },
    "431230000000": {
      "city": "怀化市",
      "name": "通道侗族自治县",
      "id": "431230000000"
    },
    "431271000000": {
      "city": "怀化市",
      "name": "怀化市洪江管理区",
      "id": "431271000000"
    },
    "431281000000": {
      "city": "怀化市",
      "name": "洪江市",
      "id": "431281000000"
    },
    "431301000000": {
      "city": "娄底市",
      "name": "市辖区",
      "id": "431301000000"
    },
    "431302000000": {
      "city": "娄底市",
      "name": "娄星区",
      "id": "431302000000"
    },
    "431321000000": {
      "city": "娄底市",
      "name": "双峰县",
      "id": "431321000000"
    },
    "431322000000": {
      "city": "娄底市",
      "name": "新化县",
      "id": "431322000000"
    },
    "431381000000": {
      "city": "娄底市",
      "name": "冷水江市",
      "id": "431381000000"
    },
    "431382000000": {
      "city": "娄底市",
      "name": "涟源市",
      "id": "431382000000"
    },
    "433101000000": {
      "city": "湘西土家族苗族自治州",
      "name": "吉首市",
      "id": "433101000000"
    },
    "433122000000": {
      "city": "湘西土家族苗族自治州",
      "name": "泸溪县",
      "id": "433122000000"
    },
    "433123000000": {
      "city": "湘西土家族苗族自治州",
      "name": "凤凰县",
      "id": "433123000000"
    },
    "433124000000": {
      "city": "湘西土家族苗族自治州",
      "name": "花垣县",
      "id": "433124000000"
    },
    "433125000000": {
      "city": "湘西土家族苗族自治州",
      "name": "保靖县",
      "id": "433125000000"
    },
    "433126000000": {
      "city": "湘西土家族苗族自治州",
      "name": "古丈县",
      "id": "433126000000"
    },
    "433127000000": {
      "city": "湘西土家族苗族自治州",
      "name": "永顺县",
      "id": "433127000000"
    },
    "433130000000": {
      "city": "湘西土家族苗族自治州",
      "name": "龙山县",
      "id": "433130000000"
    },
    "433172000000": {
      "city": "湘西土家族苗族自治州",
      "name": "湖南吉首经济开发区",
      "id": "433172000000"
    },
    "433173000000": {
      "city": "湘西土家族苗族自治州",
      "name": "湖南永顺经济开发区",
      "id": "433173000000"
    },
    "440101000000": {
      "city": "广州市",
      "name": "市辖区",
      "id": "440101000000"
    },
    "440103000000": {
      "city": "广州市",
      "name": "荔湾区",
      "id": "440103000000"
    },
    "440104000000": {
      "city": "广州市",
      "name": "越秀区",
      "id": "440104000000"
    },
    "440105000000": {
      "city": "广州市",
      "name": "海珠区",
      "id": "440105000000"
    },
    "440106000000": {
      "city": "广州市",
      "name": "天河区",
      "id": "440106000000"
    },
    "440111000000": {
      "city": "广州市",
      "name": "白云区",
      "id": "440111000000"
    },
    "440112000000": {
      "city": "广州市",
      "name": "黄埔区",
      "id": "440112000000"
    },
    "440113000000": {
      "city": "广州市",
      "name": "番禺区",
      "id": "440113000000"
    },
    "440114000000": {
      "city": "广州市",
      "name": "花都区",
      "id": "440114000000"
    },
    "440115000000": {
      "city": "广州市",
      "name": "南沙区",
      "id": "440115000000"
    },
    "440117000000": {
      "city": "广州市",
      "name": "从化区",
      "id": "440117000000"
    },
    "440118000000": {
      "city": "广州市",
      "name": "增城区",
      "id": "440118000000"
    },
    "440201000000": {
      "city": "韶关市",
      "name": "市辖区",
      "id": "440201000000"
    },
    "440203000000": {
      "city": "韶关市",
      "name": "武江区",
      "id": "440203000000"
    },
    "440204000000": {
      "city": "韶关市",
      "name": "浈江区",
      "id": "440204000000"
    },
    "440205000000": {
      "city": "韶关市",
      "name": "曲江区",
      "id": "440205000000"
    },
    "440222000000": {
      "city": "韶关市",
      "name": "始兴县",
      "id": "440222000000"
    },
    "440224000000": {
      "city": "韶关市",
      "name": "仁化县",
      "id": "440224000000"
    },
    "440229000000": {
      "city": "韶关市",
      "name": "翁源县",
      "id": "440229000000"
    },
    "440232000000": {
      "city": "韶关市",
      "name": "乳源瑶族自治县",
      "id": "440232000000"
    },
    "440233000000": {
      "city": "韶关市",
      "name": "新丰县",
      "id": "440233000000"
    },
    "440281000000": {
      "city": "韶关市",
      "name": "乐昌市",
      "id": "440281000000"
    },
    "440282000000": {
      "city": "韶关市",
      "name": "南雄市",
      "id": "440282000000"
    },
    "440301000000": {
      "city": "深圳市",
      "name": "市辖区",
      "id": "440301000000"
    },
    "440303000000": {
      "city": "深圳市",
      "name": "罗湖区",
      "id": "440303000000"
    },
    "440304000000": {
      "city": "深圳市",
      "name": "福田区",
      "id": "440304000000"
    },
    "440305000000": {
      "city": "深圳市",
      "name": "南山区",
      "id": "440305000000"
    },
    "440306000000": {
      "city": "深圳市",
      "name": "宝安区",
      "id": "440306000000"
    },
    "440307000000": {
      "city": "深圳市",
      "name": "龙岗区",
      "id": "440307000000"
    },
    "440308000000": {
      "city": "深圳市",
      "name": "盐田区",
      "id": "440308000000"
    },
    "440309000000": {
      "city": "深圳市",
      "name": "龙华区",
      "id": "440309000000"
    },
    "440310000000": {
      "city": "深圳市",
      "name": "坪山区",
      "id": "440310000000"
    },
    "440311000000": {
      "city": "深圳市",
      "name": "光明区",
      "id": "440311000000"
    },
    "440401000000": {
      "city": "珠海市",
      "name": "市辖区",
      "id": "440401000000"
    },
    "440402000000": {
      "city": "珠海市",
      "name": "香洲区",
      "id": "440402000000"
    },
    "440403000000": {
      "city": "珠海市",
      "name": "斗门区",
      "id": "440403000000"
    },
    "440404000000": {
      "city": "珠海市",
      "name": "金湾区",
      "id": "440404000000"
    },
    "440501000000": {
      "city": "汕头市",
      "name": "市辖区",
      "id": "440501000000"
    },
    "440507000000": {
      "city": "汕头市",
      "name": "龙湖区",
      "id": "440507000000"
    },
    "440511000000": {
      "city": "汕头市",
      "name": "金平区",
      "id": "440511000000"
    },
    "440512000000": {
      "city": "汕头市",
      "name": "濠江区",
      "id": "440512000000"
    },
    "440513000000": {
      "city": "汕头市",
      "name": "潮阳区",
      "id": "440513000000"
    },
    "440514000000": {
      "city": "汕头市",
      "name": "潮南区",
      "id": "440514000000"
    },
    "440515000000": {
      "city": "汕头市",
      "name": "澄海区",
      "id": "440515000000"
    },
    "440523000000": {
      "city": "汕头市",
      "name": "南澳县",
      "id": "440523000000"
    },
    "440601000000": {
      "city": "佛山市",
      "name": "市辖区",
      "id": "440601000000"
    },
    "440604000000": {
      "city": "佛山市",
      "name": "禅城区",
      "id": "440604000000"
    },
    "440605000000": {
      "city": "佛山市",
      "name": "南海区",
      "id": "440605000000"
    },
    "440606000000": {
      "city": "佛山市",
      "name": "顺德区",
      "id": "440606000000"
    },
    "440607000000": {
      "city": "佛山市",
      "name": "三水区",
      "id": "440607000000"
    },
    "440608000000": {
      "city": "佛山市",
      "name": "高明区",
      "id": "440608000000"
    },
    "440701000000": {
      "city": "江门市",
      "name": "市辖区",
      "id": "440701000000"
    },
    "440703000000": {
      "city": "江门市",
      "name": "蓬江区",
      "id": "440703000000"
    },
    "440704000000": {
      "city": "江门市",
      "name": "江海区",
      "id": "440704000000"
    },
    "440705000000": {
      "city": "江门市",
      "name": "新会区",
      "id": "440705000000"
    },
    "440781000000": {
      "city": "江门市",
      "name": "台山市",
      "id": "440781000000"
    },
    "440783000000": {
      "city": "江门市",
      "name": "开平市",
      "id": "440783000000"
    },
    "440784000000": {
      "city": "江门市",
      "name": "鹤山市",
      "id": "440784000000"
    },
    "440785000000": {
      "city": "江门市",
      "name": "恩平市",
      "id": "440785000000"
    },
    "440801000000": {
      "city": "湛江市",
      "name": "市辖区",
      "id": "440801000000"
    },
    "440802000000": {
      "city": "湛江市",
      "name": "赤坎区",
      "id": "440802000000"
    },
    "440803000000": {
      "city": "湛江市",
      "name": "霞山区",
      "id": "440803000000"
    },
    "440804000000": {
      "city": "湛江市",
      "name": "坡头区",
      "id": "440804000000"
    },
    "440811000000": {
      "city": "湛江市",
      "name": "麻章区",
      "id": "440811000000"
    },
    "440823000000": {
      "city": "湛江市",
      "name": "遂溪县",
      "id": "440823000000"
    },
    "440825000000": {
      "city": "湛江市",
      "name": "徐闻县",
      "id": "440825000000"
    },
    "440881000000": {
      "city": "湛江市",
      "name": "廉江市",
      "id": "440881000000"
    },
    "440882000000": {
      "city": "湛江市",
      "name": "雷州市",
      "id": "440882000000"
    },
    "440883000000": {
      "city": "湛江市",
      "name": "吴川市",
      "id": "440883000000"
    },
    "440901000000": {
      "city": "茂名市",
      "name": "市辖区",
      "id": "440901000000"
    },
    "440902000000": {
      "city": "茂名市",
      "name": "茂南区",
      "id": "440902000000"
    },
    "440904000000": {
      "city": "茂名市",
      "name": "电白区",
      "id": "440904000000"
    },
    "440981000000": {
      "city": "茂名市",
      "name": "高州市",
      "id": "440981000000"
    },
    "440982000000": {
      "city": "茂名市",
      "name": "化州市",
      "id": "440982000000"
    },
    "440983000000": {
      "city": "茂名市",
      "name": "信宜市",
      "id": "440983000000"
    },
    "441201000000": {
      "city": "肇庆市",
      "name": "市辖区",
      "id": "441201000000"
    },
    "441202000000": {
      "city": "肇庆市",
      "name": "端州区",
      "id": "441202000000"
    },
    "441203000000": {
      "city": "肇庆市",
      "name": "鼎湖区",
      "id": "441203000000"
    },
    "441204000000": {
      "city": "肇庆市",
      "name": "高要区",
      "id": "441204000000"
    },
    "441223000000": {
      "city": "肇庆市",
      "name": "广宁县",
      "id": "441223000000"
    },
    "441224000000": {
      "city": "肇庆市",
      "name": "怀集县",
      "id": "441224000000"
    },
    "441225000000": {
      "city": "肇庆市",
      "name": "封开县",
      "id": "441225000000"
    },
    "441226000000": {
      "city": "肇庆市",
      "name": "德庆县",
      "id": "441226000000"
    },
    "441284000000": {
      "city": "肇庆市",
      "name": "四会市",
      "id": "441284000000"
    },
    "441301000000": {
      "city": "惠州市",
      "name": "市辖区",
      "id": "441301000000"
    },
    "441302000000": {
      "city": "惠州市",
      "name": "惠城区",
      "id": "441302000000"
    },
    "441303000000": {
      "city": "惠州市",
      "name": "惠阳区",
      "id": "441303000000"
    },
    "441322000000": {
      "city": "惠州市",
      "name": "博罗县",
      "id": "441322000000"
    },
    "441323000000": {
      "city": "惠州市",
      "name": "惠东县",
      "id": "441323000000"
    },
    "441324000000": {
      "city": "惠州市",
      "name": "龙门县",
      "id": "441324000000"
    },
    "441401000000": {
      "city": "梅州市",
      "name": "市辖区",
      "id": "441401000000"
    },
    "441402000000": {
      "city": "梅州市",
      "name": "梅江区",
      "id": "441402000000"
    },
    "441403000000": {
      "city": "梅州市",
      "name": "梅县区",
      "id": "441403000000"
    },
    "441422000000": {
      "city": "梅州市",
      "name": "大埔县",
      "id": "441422000000"
    },
    "441423000000": {
      "city": "梅州市",
      "name": "丰顺县",
      "id": "441423000000"
    },
    "441424000000": {
      "city": "梅州市",
      "name": "五华县",
      "id": "441424000000"
    },
    "441426000000": {
      "city": "梅州市",
      "name": "平远县",
      "id": "441426000000"
    },
    "441427000000": {
      "city": "梅州市",
      "name": "蕉岭县",
      "id": "441427000000"
    },
    "441481000000": {
      "city": "梅州市",
      "name": "兴宁市",
      "id": "441481000000"
    },
    "441501000000": {
      "city": "汕尾市",
      "name": "市辖区",
      "id": "441501000000"
    },
    "441502000000": {
      "city": "汕尾市",
      "name": "城区",
      "id": "441502000000"
    },
    "441521000000": {
      "city": "汕尾市",
      "name": "海丰县",
      "id": "441521000000"
    },
    "441523000000": {
      "city": "汕尾市",
      "name": "陆河县",
      "id": "441523000000"
    },
    "441581000000": {
      "city": "汕尾市",
      "name": "陆丰市",
      "id": "441581000000"
    },
    "441601000000": {
      "city": "河源市",
      "name": "市辖区",
      "id": "441601000000"
    },
    "441602000000": {
      "city": "河源市",
      "name": "源城区",
      "id": "441602000000"
    },
    "441621000000": {
      "city": "河源市",
      "name": "紫金县",
      "id": "441621000000"
    },
    "441622000000": {
      "city": "河源市",
      "name": "龙川县",
      "id": "441622000000"
    },
    "441623000000": {
      "city": "河源市",
      "name": "连平县",
      "id": "441623000000"
    },
    "441624000000": {
      "city": "河源市",
      "name": "和平县",
      "id": "441624000000"
    },
    "441625000000": {
      "city": "河源市",
      "name": "东源县",
      "id": "441625000000"
    },
    "441701000000": {
      "city": "阳江市",
      "name": "市辖区",
      "id": "441701000000"
    },
    "441702000000": {
      "city": "阳江市",
      "name": "江城区",
      "id": "441702000000"
    },
    "441704000000": {
      "city": "阳江市",
      "name": "阳东区",
      "id": "441704000000"
    },
    "441721000000": {
      "city": "阳江市",
      "name": "阳西县",
      "id": "441721000000"
    },
    "441781000000": {
      "city": "阳江市",
      "name": "阳春市",
      "id": "441781000000"
    },
    "441801000000": {
      "city": "清远市",
      "name": "市辖区",
      "id": "441801000000"
    },
    "441802000000": {
      "city": "清远市",
      "name": "清城区",
      "id": "441802000000"
    },
    "441803000000": {
      "city": "清远市",
      "name": "清新区",
      "id": "441803000000"
    },
    "441821000000": {
      "city": "清远市",
      "name": "佛冈县",
      "id": "441821000000"
    },
    "441823000000": {
      "city": "清远市",
      "name": "阳山县",
      "id": "441823000000"
    },
    "441825000000": {
      "city": "清远市",
      "name": "连山壮族瑶族自治县",
      "id": "441825000000"
    },
    "441826000000": {
      "city": "清远市",
      "name": "连南瑶族自治县",
      "id": "441826000000"
    },
    "441881000000": {
      "city": "清远市",
      "name": "英德市",
      "id": "441881000000"
    },
    "441882000000": {
      "city": "清远市",
      "name": "连州市",
      "id": "441882000000"
    },
    "445101000000": {
      "city": "潮州市",
      "name": "市辖区",
      "id": "445101000000"
    },
    "445102000000": {
      "city": "潮州市",
      "name": "湘桥区",
      "id": "445102000000"
    },
    "445103000000": {
      "city": "潮州市",
      "name": "潮安区",
      "id": "445103000000"
    },
    "445122000000": {
      "city": "潮州市",
      "name": "饶平县",
      "id": "445122000000"
    },
    "445201000000": {
      "city": "揭阳市",
      "name": "市辖区",
      "id": "445201000000"
    },
    "445202000000": {
      "city": "揭阳市",
      "name": "榕城区",
      "id": "445202000000"
    },
    "445203000000": {
      "city": "揭阳市",
      "name": "揭东区",
      "id": "445203000000"
    },
    "445222000000": {
      "city": "揭阳市",
      "name": "揭西县",
      "id": "445222000000"
    },
    "445224000000": {
      "city": "揭阳市",
      "name": "惠来县",
      "id": "445224000000"
    },
    "445281000000": {
      "city": "揭阳市",
      "name": "普宁市",
      "id": "445281000000"
    },
    "445301000000": {
      "city": "云浮市",
      "name": "市辖区",
      "id": "445301000000"
    },
    "445302000000": {
      "city": "云浮市",
      "name": "云城区",
      "id": "445302000000"
    },
    "445303000000": {
      "city": "云浮市",
      "name": "云安区",
      "id": "445303000000"
    },
    "445321000000": {
      "city": "云浮市",
      "name": "新兴县",
      "id": "445321000000"
    },
    "445322000000": {
      "city": "云浮市",
      "name": "郁南县",
      "id": "445322000000"
    },
    "445381000000": {
      "city": "云浮市",
      "name": "罗定市",
      "id": "445381000000"
    },
    "450101000000": {
      "city": "南宁市",
      "name": "市辖区",
      "id": "450101000000"
    },
    "450102000000": {
      "city": "南宁市",
      "name": "兴宁区",
      "id": "450102000000"
    },
    "450103000000": {
      "city": "南宁市",
      "name": "青秀区",
      "id": "450103000000"
    },
    "450105000000": {
      "city": "南宁市",
      "name": "江南区",
      "id": "450105000000"
    },
    "450107000000": {
      "city": "南宁市",
      "name": "西乡塘区",
      "id": "450107000000"
    },
    "450108000000": {
      "city": "南宁市",
      "name": "良庆区",
      "id": "450108000000"
    },
    "450109000000": {
      "city": "南宁市",
      "name": "邕宁区",
      "id": "450109000000"
    },
    "450110000000": {
      "city": "南宁市",
      "name": "武鸣区",
      "id": "450110000000"
    },
    "450123000000": {
      "city": "南宁市",
      "name": "隆安县",
      "id": "450123000000"
    },
    "450124000000": {
      "city": "南宁市",
      "name": "马山县",
      "id": "450124000000"
    },
    "450125000000": {
      "city": "南宁市",
      "name": "上林县",
      "id": "450125000000"
    },
    "450126000000": {
      "city": "南宁市",
      "name": "宾阳县",
      "id": "450126000000"
    },
    "450127000000": {
      "city": "南宁市",
      "name": "横县",
      "id": "450127000000"
    },
    "450201000000": {
      "city": "柳州市",
      "name": "市辖区",
      "id": "450201000000"
    },
    "450202000000": {
      "city": "柳州市",
      "name": "城中区",
      "id": "450202000000"
    },
    "450203000000": {
      "city": "柳州市",
      "name": "鱼峰区",
      "id": "450203000000"
    },
    "450204000000": {
      "city": "柳州市",
      "name": "柳南区",
      "id": "450204000000"
    },
    "450205000000": {
      "city": "柳州市",
      "name": "柳北区",
      "id": "450205000000"
    },
    "450206000000": {
      "city": "柳州市",
      "name": "柳江区",
      "id": "450206000000"
    },
    "450222000000": {
      "city": "柳州市",
      "name": "柳城县",
      "id": "450222000000"
    },
    "450223000000": {
      "city": "柳州市",
      "name": "鹿寨县",
      "id": "450223000000"
    },
    "450224000000": {
      "city": "柳州市",
      "name": "融安县",
      "id": "450224000000"
    },
    "450225000000": {
      "city": "柳州市",
      "name": "融水苗族自治县",
      "id": "450225000000"
    },
    "450226000000": {
      "city": "柳州市",
      "name": "三江侗族自治县",
      "id": "450226000000"
    },
    "450301000000": {
      "city": "桂林市",
      "name": "市辖区",
      "id": "450301000000"
    },
    "450302000000": {
      "city": "桂林市",
      "name": "秀峰区",
      "id": "450302000000"
    },
    "450303000000": {
      "city": "桂林市",
      "name": "叠彩区",
      "id": "450303000000"
    },
    "450304000000": {
      "city": "桂林市",
      "name": "象山区",
      "id": "450304000000"
    },
    "450305000000": {
      "city": "桂林市",
      "name": "七星区",
      "id": "450305000000"
    },
    "450311000000": {
      "city": "桂林市",
      "name": "雁山区",
      "id": "450311000000"
    },
    "450312000000": {
      "city": "桂林市",
      "name": "临桂区",
      "id": "450312000000"
    },
    "450321000000": {
      "city": "桂林市",
      "name": "阳朔县",
      "id": "450321000000"
    },
    "450323000000": {
      "city": "桂林市",
      "name": "灵川县",
      "id": "450323000000"
    },
    "450324000000": {
      "city": "桂林市",
      "name": "全州县",
      "id": "450324000000"
    },
    "450325000000": {
      "city": "桂林市",
      "name": "兴安县",
      "id": "450325000000"
    },
    "450326000000": {
      "city": "桂林市",
      "name": "永福县",
      "id": "450326000000"
    },
    "450327000000": {
      "city": "桂林市",
      "name": "灌阳县",
      "id": "450327000000"
    },
    "450328000000": {
      "city": "桂林市",
      "name": "龙胜各族自治县",
      "id": "450328000000"
    },
    "450329000000": {
      "city": "桂林市",
      "name": "资源县",
      "id": "450329000000"
    },
    "450330000000": {
      "city": "桂林市",
      "name": "平乐县",
      "id": "450330000000"
    },
    "450332000000": {
      "city": "桂林市",
      "name": "恭城瑶族自治县",
      "id": "450332000000"
    },
    "450381000000": {
      "city": "桂林市",
      "name": "荔浦市",
      "id": "450381000000"
    },
    "450401000000": {
      "city": "梧州市",
      "name": "市辖区",
      "id": "450401000000"
    },
    "450403000000": {
      "city": "梧州市",
      "name": "万秀区",
      "id": "450403000000"
    },
    "450405000000": {
      "city": "梧州市",
      "name": "长洲区",
      "id": "450405000000"
    },
    "450406000000": {
      "city": "梧州市",
      "name": "龙圩区",
      "id": "450406000000"
    },
    "450421000000": {
      "city": "梧州市",
      "name": "苍梧县",
      "id": "450421000000"
    },
    "450422000000": {
      "city": "梧州市",
      "name": "藤县",
      "id": "450422000000"
    },
    "450423000000": {
      "city": "梧州市",
      "name": "蒙山县",
      "id": "450423000000"
    },
    "450481000000": {
      "city": "梧州市",
      "name": "岑溪市",
      "id": "450481000000"
    },
    "450501000000": {
      "city": "北海市",
      "name": "市辖区",
      "id": "450501000000"
    },
    "450502000000": {
      "city": "北海市",
      "name": "海城区",
      "id": "450502000000"
    },
    "450503000000": {
      "city": "北海市",
      "name": "银海区",
      "id": "450503000000"
    },
    "450512000000": {
      "city": "北海市",
      "name": "铁山港区",
      "id": "450512000000"
    },
    "450521000000": {
      "city": "北海市",
      "name": "合浦县",
      "id": "450521000000"
    },
    "450601000000": {
      "city": "防城港市",
      "name": "市辖区",
      "id": "450601000000"
    },
    "450602000000": {
      "city": "防城港市",
      "name": "港口区",
      "id": "450602000000"
    },
    "450603000000": {
      "city": "防城港市",
      "name": "防城区",
      "id": "450603000000"
    },
    "450621000000": {
      "city": "防城港市",
      "name": "上思县",
      "id": "450621000000"
    },
    "450681000000": {
      "city": "防城港市",
      "name": "东兴市",
      "id": "450681000000"
    },
    "450701000000": {
      "city": "钦州市",
      "name": "市辖区",
      "id": "450701000000"
    },
    "450702000000": {
      "city": "钦州市",
      "name": "钦南区",
      "id": "450702000000"
    },
    "450703000000": {
      "city": "钦州市",
      "name": "钦北区",
      "id": "450703000000"
    },
    "450721000000": {
      "city": "钦州市",
      "name": "灵山县",
      "id": "450721000000"
    },
    "450722000000": {
      "city": "钦州市",
      "name": "浦北县",
      "id": "450722000000"
    },
    "450801000000": {
      "city": "贵港市",
      "name": "市辖区",
      "id": "450801000000"
    },
    "450802000000": {
      "city": "贵港市",
      "name": "港北区",
      "id": "450802000000"
    },
    "450803000000": {
      "city": "贵港市",
      "name": "港南区",
      "id": "450803000000"
    },
    "450804000000": {
      "city": "贵港市",
      "name": "覃塘区",
      "id": "450804000000"
    },
    "450821000000": {
      "city": "贵港市",
      "name": "平南县",
      "id": "450821000000"
    },
    "450881000000": {
      "city": "贵港市",
      "name": "桂平市",
      "id": "450881000000"
    },
    "450901000000": {
      "city": "玉林市",
      "name": "市辖区",
      "id": "450901000000"
    },
    "450902000000": {
      "city": "玉林市",
      "name": "玉州区",
      "id": "450902000000"
    },
    "450903000000": {
      "city": "玉林市",
      "name": "福绵区",
      "id": "450903000000"
    },
    "450921000000": {
      "city": "玉林市",
      "name": "容县",
      "id": "450921000000"
    },
    "450922000000": {
      "city": "玉林市",
      "name": "陆川县",
      "id": "450922000000"
    },
    "450923000000": {
      "city": "玉林市",
      "name": "博白县",
      "id": "450923000000"
    },
    "450924000000": {
      "city": "玉林市",
      "name": "兴业县",
      "id": "450924000000"
    },
    "450981000000": {
      "city": "玉林市",
      "name": "北流市",
      "id": "450981000000"
    },
    "451001000000": {
      "city": "百色市",
      "name": "市辖区",
      "id": "451001000000"
    },
    "451002000000": {
      "city": "百色市",
      "name": "右江区",
      "id": "451002000000"
    },
    "451021000000": {
      "city": "百色市",
      "name": "田阳县",
      "id": "451021000000"
    },
    "451022000000": {
      "city": "百色市",
      "name": "田东县",
      "id": "451022000000"
    },
    "451023000000": {
      "city": "百色市",
      "name": "平果县",
      "id": "451023000000"
    },
    "451024000000": {
      "city": "百色市",
      "name": "德保县",
      "id": "451024000000"
    },
    "451026000000": {
      "city": "百色市",
      "name": "那坡县",
      "id": "451026000000"
    },
    "451027000000": {
      "city": "百色市",
      "name": "凌云县",
      "id": "451027000000"
    },
    "451028000000": {
      "city": "百色市",
      "name": "乐业县",
      "id": "451028000000"
    },
    "451029000000": {
      "city": "百色市",
      "name": "田林县",
      "id": "451029000000"
    },
    "451030000000": {
      "city": "百色市",
      "name": "西林县",
      "id": "451030000000"
    },
    "451031000000": {
      "city": "百色市",
      "name": "隆林各族自治县",
      "id": "451031000000"
    },
    "451081000000": {
      "city": "百色市",
      "name": "靖西市",
      "id": "451081000000"
    },
    "451101000000": {
      "city": "贺州市",
      "name": "市辖区",
      "id": "451101000000"
    },
    "451102000000": {
      "city": "贺州市",
      "name": "八步区",
      "id": "451102000000"
    },
    "451103000000": {
      "city": "贺州市",
      "name": "平桂区",
      "id": "451103000000"
    },
    "451121000000": {
      "city": "贺州市",
      "name": "昭平县",
      "id": "451121000000"
    },
    "451122000000": {
      "city": "贺州市",
      "name": "钟山县",
      "id": "451122000000"
    },
    "451123000000": {
      "city": "贺州市",
      "name": "富川瑶族自治县",
      "id": "451123000000"
    },
    "451201000000": {
      "city": "河池市",
      "name": "市辖区",
      "id": "451201000000"
    },
    "451202000000": {
      "city": "河池市",
      "name": "金城江区",
      "id": "451202000000"
    },
    "451203000000": {
      "city": "河池市",
      "name": "宜州区",
      "id": "451203000000"
    },
    "451221000000": {
      "city": "河池市",
      "name": "南丹县",
      "id": "451221000000"
    },
    "451222000000": {
      "city": "河池市",
      "name": "天峨县",
      "id": "451222000000"
    },
    "451223000000": {
      "city": "河池市",
      "name": "凤山县",
      "id": "451223000000"
    },
    "451224000000": {
      "city": "河池市",
      "name": "东兰县",
      "id": "451224000000"
    },
    "451225000000": {
      "city": "河池市",
      "name": "罗城仫佬族自治县",
      "id": "451225000000"
    },
    "451226000000": {
      "city": "河池市",
      "name": "环江毛南族自治县",
      "id": "451226000000"
    },
    "451227000000": {
      "city": "河池市",
      "name": "巴马瑶族自治县",
      "id": "451227000000"
    },
    "451228000000": {
      "city": "河池市",
      "name": "都安瑶族自治县",
      "id": "451228000000"
    },
    "451229000000": {
      "city": "河池市",
      "name": "大化瑶族自治县",
      "id": "451229000000"
    },
    "451301000000": {
      "city": "来宾市",
      "name": "市辖区",
      "id": "451301000000"
    },
    "451302000000": {
      "city": "来宾市",
      "name": "兴宾区",
      "id": "451302000000"
    },
    "451321000000": {
      "city": "来宾市",
      "name": "忻城县",
      "id": "451321000000"
    },
    "451322000000": {
      "city": "来宾市",
      "name": "象州县",
      "id": "451322000000"
    },
    "451323000000": {
      "city": "来宾市",
      "name": "武宣县",
      "id": "451323000000"
    },
    "451324000000": {
      "city": "来宾市",
      "name": "金秀瑶族自治县",
      "id": "451324000000"
    },
    "451381000000": {
      "city": "来宾市",
      "name": "合山市",
      "id": "451381000000"
    },
    "451401000000": {
      "city": "崇左市",
      "name": "市辖区",
      "id": "451401000000"
    },
    "451402000000": {
      "city": "崇左市",
      "name": "江州区",
      "id": "451402000000"
    },
    "451421000000": {
      "city": "崇左市",
      "name": "扶绥县",
      "id": "451421000000"
    },
    "451422000000": {
      "city": "崇左市",
      "name": "宁明县",
      "id": "451422000000"
    },
    "451423000000": {
      "city": "崇左市",
      "name": "龙州县",
      "id": "451423000000"
    },
    "451424000000": {
      "city": "崇左市",
      "name": "大新县",
      "id": "451424000000"
    },
    "451425000000": {
      "city": "崇左市",
      "name": "天等县",
      "id": "451425000000"
    },
    "451481000000": {
      "city": "崇左市",
      "name": "凭祥市",
      "id": "451481000000"
    },
    "460101000000": {
      "city": "海口市",
      "name": "市辖区",
      "id": "460101000000"
    },
    "460105000000": {
      "city": "海口市",
      "name": "秀英区",
      "id": "460105000000"
    },
    "460106000000": {
      "city": "海口市",
      "name": "龙华区",
      "id": "460106000000"
    },
    "460107000000": {
      "city": "海口市",
      "name": "琼山区",
      "id": "460107000000"
    },
    "460108000000": {
      "city": "海口市",
      "name": "美兰区",
      "id": "460108000000"
    },
    "460201000000": {
      "city": "三亚市",
      "name": "市辖区",
      "id": "460201000000"
    },
    "460202000000": {
      "city": "三亚市",
      "name": "海棠区",
      "id": "460202000000"
    },
    "460203000000": {
      "city": "三亚市",
      "name": "吉阳区",
      "id": "460203000000"
    },
    "460204000000": {
      "city": "三亚市",
      "name": "天涯区",
      "id": "460204000000"
    },
    "460205000000": {
      "city": "三亚市",
      "name": "崖州区",
      "id": "460205000000"
    },
    "460321000000": {
      "city": "三沙市",
      "name": "西沙群岛",
      "id": "460321000000"
    },
    "460322000000": {
      "city": "三沙市",
      "name": "南沙群岛",
      "id": "460322000000"
    },
    "460323000000": {
      "city": "三沙市",
      "name": "中沙群岛的岛礁及其海域",
      "id": "460323000000"
    },
    "469001000000": {
      "city": "省直辖县级行政区划",
      "name": "五指山市",
      "id": "469001000000"
    },
    "469002000000": {
      "city": "省直辖县级行政区划",
      "name": "琼海市",
      "id": "469002000000"
    },
    "469005000000": {
      "city": "省直辖县级行政区划",
      "name": "文昌市",
      "id": "469005000000"
    },
    "469006000000": {
      "city": "省直辖县级行政区划",
      "name": "万宁市",
      "id": "469006000000"
    },
    "469007000000": {
      "city": "省直辖县级行政区划",
      "name": "东方市",
      "id": "469007000000"
    },
    "469021000000": {
      "city": "省直辖县级行政区划",
      "name": "定安县",
      "id": "469021000000"
    },
    "469022000000": {
      "city": "省直辖县级行政区划",
      "name": "屯昌县",
      "id": "469022000000"
    },
    "469023000000": {
      "city": "省直辖县级行政区划",
      "name": "澄迈县",
      "id": "469023000000"
    },
    "469024000000": {
      "city": "省直辖县级行政区划",
      "name": "临高县",
      "id": "469024000000"
    },
    "469025000000": {
      "city": "省直辖县级行政区划",
      "name": "白沙黎族自治县",
      "id": "469025000000"
    },
    "469026000000": {
      "city": "省直辖县级行政区划",
      "name": "昌江黎族自治县",
      "id": "469026000000"
    },
    "469027000000": {
      "city": "省直辖县级行政区划",
      "name": "乐东黎族自治县",
      "id": "469027000000"
    },
    "469028000000": {
      "city": "省直辖县级行政区划",
      "name": "陵水黎族自治县",
      "id": "469028000000"
    },
    "469029000000": {
      "city": "省直辖县级行政区划",
      "name": "保亭黎族苗族自治县",
      "id": "469029000000"
    },
    "469030000000": {
      "city": "省直辖县级行政区划",
      "name": "琼中黎族苗族自治县",
      "id": "469030000000"
    },
    "500101000000": {
      "city": "市辖区",
      "name": "万州区",
      "id": "500101000000"
    },
    "500102000000": {
      "city": "市辖区",
      "name": "涪陵区",
      "id": "500102000000"
    },
    "500103000000": {
      "city": "市辖区",
      "name": "渝中区",
      "id": "500103000000"
    },
    "500104000000": {
      "city": "市辖区",
      "name": "大渡口区",
      "id": "500104000000"
    },
    "500105000000": {
      "city": "市辖区",
      "name": "江北区",
      "id": "500105000000"
    },
    "500106000000": {
      "city": "市辖区",
      "name": "沙坪坝区",
      "id": "500106000000"
    },
    "500107000000": {
      "city": "市辖区",
      "name": "九龙坡区",
      "id": "500107000000"
    },
    "500108000000": {
      "city": "市辖区",
      "name": "南岸区",
      "id": "500108000000"
    },
    "500109000000": {
      "city": "市辖区",
      "name": "北碚区",
      "id": "500109000000"
    },
    "500110000000": {
      "city": "市辖区",
      "name": "綦江区",
      "id": "500110000000"
    },
    "500111000000": {
      "city": "市辖区",
      "name": "大足区",
      "id": "500111000000"
    },
    "500112000000": {
      "city": "市辖区",
      "name": "渝北区",
      "id": "500112000000"
    },
    "500113000000": {
      "city": "市辖区",
      "name": "巴南区",
      "id": "500113000000"
    },
    "500114000000": {
      "city": "市辖区",
      "name": "黔江区",
      "id": "500114000000"
    },
    "500115000000": {
      "city": "市辖区",
      "name": "长寿区",
      "id": "500115000000"
    },
    "500116000000": {
      "city": "市辖区",
      "name": "江津区",
      "id": "500116000000"
    },
    "500117000000": {
      "city": "市辖区",
      "name": "合川区",
      "id": "500117000000"
    },
    "500118000000": {
      "city": "市辖区",
      "name": "永川区",
      "id": "500118000000"
    },
    "500119000000": {
      "city": "市辖区",
      "name": "南川区",
      "id": "500119000000"
    },
    "500120000000": {
      "city": "市辖区",
      "name": "璧山区",
      "id": "500120000000"
    },
    "500151000000": {
      "city": "市辖区",
      "name": "铜梁区",
      "id": "500151000000"
    },
    "500152000000": {
      "city": "市辖区",
      "name": "潼南区",
      "id": "500152000000"
    },
    "500153000000": {
      "city": "市辖区",
      "name": "荣昌区",
      "id": "500153000000"
    },
    "500154000000": {
      "city": "市辖区",
      "name": "开州区",
      "id": "500154000000"
    },
    "500155000000": {
      "city": "市辖区",
      "name": "梁平区",
      "id": "500155000000"
    },
    "500156000000": {
      "city": "市辖区",
      "name": "武隆区",
      "id": "500156000000"
    },
    "500229000000": {
      "city": "县",
      "name": "城口县",
      "id": "500229000000"
    },
    "500230000000": {
      "city": "县",
      "name": "丰都县",
      "id": "500230000000"
    },
    "500231000000": {
      "city": "县",
      "name": "垫江县",
      "id": "500231000000"
    },
    "500233000000": {
      "city": "县",
      "name": "忠县",
      "id": "500233000000"
    },
    "500235000000": {
      "city": "县",
      "name": "云阳县",
      "id": "500235000000"
    },
    "500236000000": {
      "city": "县",
      "name": "奉节县",
      "id": "500236000000"
    },
    "500237000000": {
      "city": "县",
      "name": "巫山县",
      "id": "500237000000"
    },
    "500238000000": {
      "city": "县",
      "name": "巫溪县",
      "id": "500238000000"
    },
    "500240000000": {
      "city": "县",
      "name": "石柱土家族自治县",
      "id": "500240000000"
    },
    "500241000000": {
      "city": "县",
      "name": "秀山土家族苗族自治县",
      "id": "500241000000"
    },
    "500242000000": {
      "city": "县",
      "name": "酉阳土家族苗族自治县",
      "id": "500242000000"
    },
    "500243000000": {
      "city": "县",
      "name": "彭水苗族土家族自治县",
      "id": "500243000000"
    },
    "510101000000": {
      "city": "成都市",
      "name": "市辖区",
      "id": "510101000000"
    },
    "510104000000": {
      "city": "成都市",
      "name": "锦江区",
      "id": "510104000000"
    },
    "510105000000": {
      "city": "成都市",
      "name": "青羊区",
      "id": "510105000000"
    },
    "510106000000": {
      "city": "成都市",
      "name": "金牛区",
      "id": "510106000000"
    },
    "510107000000": {
      "city": "成都市",
      "name": "武侯区",
      "id": "510107000000"
    },
    "510108000000": {
      "city": "成都市",
      "name": "成华区",
      "id": "510108000000"
    },
    "510112000000": {
      "city": "成都市",
      "name": "龙泉驿区",
      "id": "510112000000"
    },
    "510113000000": {
      "city": "成都市",
      "name": "青白江区",
      "id": "510113000000"
    },
    "510114000000": {
      "city": "成都市",
      "name": "新都区",
      "id": "510114000000"
    },
    "510115000000": {
      "city": "成都市",
      "name": "温江区",
      "id": "510115000000"
    },
    "510116000000": {
      "city": "成都市",
      "name": "双流区",
      "id": "510116000000"
    },
    "510117000000": {
      "city": "成都市",
      "name": "郫都区",
      "id": "510117000000"
    },
    "510121000000": {
      "city": "成都市",
      "name": "金堂县",
      "id": "510121000000"
    },
    "510129000000": {
      "city": "成都市",
      "name": "大邑县",
      "id": "510129000000"
    },
    "510131000000": {
      "city": "成都市",
      "name": "蒲江县",
      "id": "510131000000"
    },
    "510132000000": {
      "city": "成都市",
      "name": "新津县",
      "id": "510132000000"
    },
    "510181000000": {
      "city": "成都市",
      "name": "都江堰市",
      "id": "510181000000"
    },
    "510182000000": {
      "city": "成都市",
      "name": "彭州市",
      "id": "510182000000"
    },
    "510183000000": {
      "city": "成都市",
      "name": "邛崃市",
      "id": "510183000000"
    },
    "510184000000": {
      "city": "成都市",
      "name": "崇州市",
      "id": "510184000000"
    },
    "510185000000": {
      "city": "成都市",
      "name": "简阳市",
      "id": "510185000000"
    },
    "510301000000": {
      "city": "自贡市",
      "name": "市辖区",
      "id": "510301000000"
    },
    "510302000000": {
      "city": "自贡市",
      "name": "自流井区",
      "id": "510302000000"
    },
    "510303000000": {
      "city": "自贡市",
      "name": "贡井区",
      "id": "510303000000"
    },
    "510304000000": {
      "city": "自贡市",
      "name": "大安区",
      "id": "510304000000"
    },
    "510311000000": {
      "city": "自贡市",
      "name": "沿滩区",
      "id": "510311000000"
    },
    "510321000000": {
      "city": "自贡市",
      "name": "荣县",
      "id": "510321000000"
    },
    "510322000000": {
      "city": "自贡市",
      "name": "富顺县",
      "id": "510322000000"
    },
    "510401000000": {
      "city": "攀枝花市",
      "name": "市辖区",
      "id": "510401000000"
    },
    "510402000000": {
      "city": "攀枝花市",
      "name": "东区",
      "id": "510402000000"
    },
    "510403000000": {
      "city": "攀枝花市",
      "name": "西区",
      "id": "510403000000"
    },
    "510411000000": {
      "city": "攀枝花市",
      "name": "仁和区",
      "id": "510411000000"
    },
    "510421000000": {
      "city": "攀枝花市",
      "name": "米易县",
      "id": "510421000000"
    },
    "510422000000": {
      "city": "攀枝花市",
      "name": "盐边县",
      "id": "510422000000"
    },
    "510501000000": {
      "city": "泸州市",
      "name": "市辖区",
      "id": "510501000000"
    },
    "510502000000": {
      "city": "泸州市",
      "name": "江阳区",
      "id": "510502000000"
    },
    "510503000000": {
      "city": "泸州市",
      "name": "纳溪区",
      "id": "510503000000"
    },
    "510504000000": {
      "city": "泸州市",
      "name": "龙马潭区",
      "id": "510504000000"
    },
    "510521000000": {
      "city": "泸州市",
      "name": "泸县",
      "id": "510521000000"
    },
    "510522000000": {
      "city": "泸州市",
      "name": "合江县",
      "id": "510522000000"
    },
    "510524000000": {
      "city": "泸州市",
      "name": "叙永县",
      "id": "510524000000"
    },
    "510525000000": {
      "city": "泸州市",
      "name": "古蔺县",
      "id": "510525000000"
    },
    "510601000000": {
      "city": "德阳市",
      "name": "市辖区",
      "id": "510601000000"
    },
    "510603000000": {
      "city": "德阳市",
      "name": "旌阳区",
      "id": "510603000000"
    },
    "510604000000": {
      "city": "德阳市",
      "name": "罗江区",
      "id": "510604000000"
    },
    "510623000000": {
      "city": "德阳市",
      "name": "中江县",
      "id": "510623000000"
    },
    "510681000000": {
      "city": "德阳市",
      "name": "广汉市",
      "id": "510681000000"
    },
    "510682000000": {
      "city": "德阳市",
      "name": "什邡市",
      "id": "510682000000"
    },
    "510683000000": {
      "city": "德阳市",
      "name": "绵竹市",
      "id": "510683000000"
    },
    "510701000000": {
      "city": "绵阳市",
      "name": "市辖区",
      "id": "510701000000"
    },
    "510703000000": {
      "city": "绵阳市",
      "name": "涪城区",
      "id": "510703000000"
    },
    "510704000000": {
      "city": "绵阳市",
      "name": "游仙区",
      "id": "510704000000"
    },
    "510705000000": {
      "city": "绵阳市",
      "name": "安州区",
      "id": "510705000000"
    },
    "510722000000": {
      "city": "绵阳市",
      "name": "三台县",
      "id": "510722000000"
    },
    "510723000000": {
      "city": "绵阳市",
      "name": "盐亭县",
      "id": "510723000000"
    },
    "510725000000": {
      "city": "绵阳市",
      "name": "梓潼县",
      "id": "510725000000"
    },
    "510726000000": {
      "city": "绵阳市",
      "name": "北川羌族自治县",
      "id": "510726000000"
    },
    "510727000000": {
      "city": "绵阳市",
      "name": "平武县",
      "id": "510727000000"
    },
    "510781000000": {
      "city": "绵阳市",
      "name": "江油市",
      "id": "510781000000"
    },
    "510801000000": {
      "city": "广元市",
      "name": "市辖区",
      "id": "510801000000"
    },
    "510802000000": {
      "city": "广元市",
      "name": "利州区",
      "id": "510802000000"
    },
    "510811000000": {
      "city": "广元市",
      "name": "昭化区",
      "id": "510811000000"
    },
    "510812000000": {
      "city": "广元市",
      "name": "朝天区",
      "id": "510812000000"
    },
    "510821000000": {
      "city": "广元市",
      "name": "旺苍县",
      "id": "510821000000"
    },
    "510822000000": {
      "city": "广元市",
      "name": "青川县",
      "id": "510822000000"
    },
    "510823000000": {
      "city": "广元市",
      "name": "剑阁县",
      "id": "510823000000"
    },
    "510824000000": {
      "city": "广元市",
      "name": "苍溪县",
      "id": "510824000000"
    },
    "510901000000": {
      "city": "遂宁市",
      "name": "市辖区",
      "id": "510901000000"
    },
    "510903000000": {
      "city": "遂宁市",
      "name": "船山区",
      "id": "510903000000"
    },
    "510904000000": {
      "city": "遂宁市",
      "name": "安居区",
      "id": "510904000000"
    },
    "510921000000": {
      "city": "遂宁市",
      "name": "蓬溪县",
      "id": "510921000000"
    },
    "510922000000": {
      "city": "遂宁市",
      "name": "射洪县",
      "id": "510922000000"
    },
    "510923000000": {
      "city": "遂宁市",
      "name": "大英县",
      "id": "510923000000"
    },
    "511001000000": {
      "city": "内江市",
      "name": "市辖区",
      "id": "511001000000"
    },
    "511002000000": {
      "city": "内江市",
      "name": "市中区",
      "id": "511002000000"
    },
    "511011000000": {
      "city": "内江市",
      "name": "东兴区",
      "id": "511011000000"
    },
    "511024000000": {
      "city": "内江市",
      "name": "威远县",
      "id": "511024000000"
    },
    "511025000000": {
      "city": "内江市",
      "name": "资中县",
      "id": "511025000000"
    },
    "511071000000": {
      "city": "内江市",
      "name": "内江经济开发区",
      "id": "511071000000"
    },
    "511083000000": {
      "city": "内江市",
      "name": "隆昌市",
      "id": "511083000000"
    },
    "511101000000": {
      "city": "乐山市",
      "name": "市辖区",
      "id": "511101000000"
    },
    "511102000000": {
      "city": "乐山市",
      "name": "市中区",
      "id": "511102000000"
    },
    "511111000000": {
      "city": "乐山市",
      "name": "沙湾区",
      "id": "511111000000"
    },
    "511112000000": {
      "city": "乐山市",
      "name": "五通桥区",
      "id": "511112000000"
    },
    "511113000000": {
      "city": "乐山市",
      "name": "金口河区",
      "id": "511113000000"
    },
    "511123000000": {
      "city": "乐山市",
      "name": "犍为县",
      "id": "511123000000"
    },
    "511124000000": {
      "city": "乐山市",
      "name": "井研县",
      "id": "511124000000"
    },
    "511126000000": {
      "city": "乐山市",
      "name": "夹江县",
      "id": "511126000000"
    },
    "511129000000": {
      "city": "乐山市",
      "name": "沐川县",
      "id": "511129000000"
    },
    "511132000000": {
      "city": "乐山市",
      "name": "峨边彝族自治县",
      "id": "511132000000"
    },
    "511133000000": {
      "city": "乐山市",
      "name": "马边彝族自治县",
      "id": "511133000000"
    },
    "511181000000": {
      "city": "乐山市",
      "name": "峨眉山市",
      "id": "511181000000"
    },
    "511301000000": {
      "city": "南充市",
      "name": "市辖区",
      "id": "511301000000"
    },
    "511302000000": {
      "city": "南充市",
      "name": "顺庆区",
      "id": "511302000000"
    },
    "511303000000": {
      "city": "南充市",
      "name": "高坪区",
      "id": "511303000000"
    },
    "511304000000": {
      "city": "南充市",
      "name": "嘉陵区",
      "id": "511304000000"
    },
    "511321000000": {
      "city": "南充市",
      "name": "南部县",
      "id": "511321000000"
    },
    "511322000000": {
      "city": "南充市",
      "name": "营山县",
      "id": "511322000000"
    },
    "511323000000": {
      "city": "南充市",
      "name": "蓬安县",
      "id": "511323000000"
    },
    "511324000000": {
      "city": "南充市",
      "name": "仪陇县",
      "id": "511324000000"
    },
    "511325000000": {
      "city": "南充市",
      "name": "西充县",
      "id": "511325000000"
    },
    "511381000000": {
      "city": "南充市",
      "name": "阆中市",
      "id": "511381000000"
    },
    "511401000000": {
      "city": "眉山市",
      "name": "市辖区",
      "id": "511401000000"
    },
    "511402000000": {
      "city": "眉山市",
      "name": "东坡区",
      "id": "511402000000"
    },
    "511403000000": {
      "city": "眉山市",
      "name": "彭山区",
      "id": "511403000000"
    },
    "511421000000": {
      "city": "眉山市",
      "name": "仁寿县",
      "id": "511421000000"
    },
    "511423000000": {
      "city": "眉山市",
      "name": "洪雅县",
      "id": "511423000000"
    },
    "511424000000": {
      "city": "眉山市",
      "name": "丹棱县",
      "id": "511424000000"
    },
    "511425000000": {
      "city": "眉山市",
      "name": "青神县",
      "id": "511425000000"
    },
    "511501000000": {
      "city": "宜宾市",
      "name": "市辖区",
      "id": "511501000000"
    },
    "511502000000": {
      "city": "宜宾市",
      "name": "翠屏区",
      "id": "511502000000"
    },
    "511503000000": {
      "city": "宜宾市",
      "name": "南溪区",
      "id": "511503000000"
    },
    "511504000000": {
      "city": "宜宾市",
      "name": "叙州区",
      "id": "511504000000"
    },
    "511523000000": {
      "city": "宜宾市",
      "name": "江安县",
      "id": "511523000000"
    },
    "511524000000": {
      "city": "宜宾市",
      "name": "长宁县",
      "id": "511524000000"
    },
    "511525000000": {
      "city": "宜宾市",
      "name": "高县",
      "id": "511525000000"
    },
    "511526000000": {
      "city": "宜宾市",
      "name": "珙县",
      "id": "511526000000"
    },
    "511527000000": {
      "city": "宜宾市",
      "name": "筠连县",
      "id": "511527000000"
    },
    "511528000000": {
      "city": "宜宾市",
      "name": "兴文县",
      "id": "511528000000"
    },
    "511529000000": {
      "city": "宜宾市",
      "name": "屏山县",
      "id": "511529000000"
    },
    "511601000000": {
      "city": "广安市",
      "name": "市辖区",
      "id": "511601000000"
    },
    "511602000000": {
      "city": "广安市",
      "name": "广安区",
      "id": "511602000000"
    },
    "511603000000": {
      "city": "广安市",
      "name": "前锋区",
      "id": "511603000000"
    },
    "511621000000": {
      "city": "广安市",
      "name": "岳池县",
      "id": "511621000000"
    },
    "511622000000": {
      "city": "广安市",
      "name": "武胜县",
      "id": "511622000000"
    },
    "511623000000": {
      "city": "广安市",
      "name": "邻水县",
      "id": "511623000000"
    },
    "511681000000": {
      "city": "广安市",
      "name": "华蓥市",
      "id": "511681000000"
    },
    "511701000000": {
      "city": "达州市",
      "name": "市辖区",
      "id": "511701000000"
    },
    "511702000000": {
      "city": "达州市",
      "name": "通川区",
      "id": "511702000000"
    },
    "511703000000": {
      "city": "达州市",
      "name": "达川区",
      "id": "511703000000"
    },
    "511722000000": {
      "city": "达州市",
      "name": "宣汉县",
      "id": "511722000000"
    },
    "511723000000": {
      "city": "达州市",
      "name": "开江县",
      "id": "511723000000"
    },
    "511724000000": {
      "city": "达州市",
      "name": "大竹县",
      "id": "511724000000"
    },
    "511725000000": {
      "city": "达州市",
      "name": "渠县",
      "id": "511725000000"
    },
    "511771000000": {
      "city": "达州市",
      "name": "达州经济开发区",
      "id": "511771000000"
    },
    "511781000000": {
      "city": "达州市",
      "name": "万源市",
      "id": "511781000000"
    },
    "511801000000": {
      "city": "雅安市",
      "name": "市辖区",
      "id": "511801000000"
    },
    "511802000000": {
      "city": "雅安市",
      "name": "雨城区",
      "id": "511802000000"
    },
    "511803000000": {
      "city": "雅安市",
      "name": "名山区",
      "id": "511803000000"
    },
    "511822000000": {
      "city": "雅安市",
      "name": "荥经县",
      "id": "511822000000"
    },
    "511823000000": {
      "city": "雅安市",
      "name": "汉源县",
      "id": "511823000000"
    },
    "511824000000": {
      "city": "雅安市",
      "name": "石棉县",
      "id": "511824000000"
    },
    "511825000000": {
      "city": "雅安市",
      "name": "天全县",
      "id": "511825000000"
    },
    "511826000000": {
      "city": "雅安市",
      "name": "芦山县",
      "id": "511826000000"
    },
    "511827000000": {
      "city": "雅安市",
      "name": "宝兴县",
      "id": "511827000000"
    },
    "511901000000": {
      "city": "巴中市",
      "name": "市辖区",
      "id": "511901000000"
    },
    "511902000000": {
      "city": "巴中市",
      "name": "巴州区",
      "id": "511902000000"
    },
    "511903000000": {
      "city": "巴中市",
      "name": "恩阳区",
      "id": "511903000000"
    },
    "511921000000": {
      "city": "巴中市",
      "name": "通江县",
      "id": "511921000000"
    },
    "511922000000": {
      "city": "巴中市",
      "name": "南江县",
      "id": "511922000000"
    },
    "511923000000": {
      "city": "巴中市",
      "name": "平昌县",
      "id": "511923000000"
    },
    "511971000000": {
      "city": "巴中市",
      "name": "巴中经济开发区",
      "id": "511971000000"
    },
    "512001000000": {
      "city": "资阳市",
      "name": "市辖区",
      "id": "512001000000"
    },
    "512002000000": {
      "city": "资阳市",
      "name": "雁江区",
      "id": "512002000000"
    },
    "512021000000": {
      "city": "资阳市",
      "name": "安岳县",
      "id": "512021000000"
    },
    "512022000000": {
      "city": "资阳市",
      "name": "乐至县",
      "id": "512022000000"
    },
    "513201000000": {
      "city": "阿坝藏族羌族自治州",
      "name": "马尔康市",
      "id": "513201000000"
    },
    "513221000000": {
      "city": "阿坝藏族羌族自治州",
      "name": "汶川县",
      "id": "513221000000"
    },
    "513222000000": {
      "city": "阿坝藏族羌族自治州",
      "name": "理县",
      "id": "513222000000"
    },
    "513223000000": {
      "city": "阿坝藏族羌族自治州",
      "name": "茂县",
      "id": "513223000000"
    },
    "513224000000": {
      "city": "阿坝藏族羌族自治州",
      "name": "松潘县",
      "id": "513224000000"
    },
    "513225000000": {
      "city": "阿坝藏族羌族自治州",
      "name": "九寨沟县",
      "id": "513225000000"
    },
    "513226000000": {
      "city": "阿坝藏族羌族自治州",
      "name": "金川县",
      "id": "513226000000"
    },
    "513227000000": {
      "city": "阿坝藏族羌族自治州",
      "name": "小金县",
      "id": "513227000000"
    },
    "513228000000": {
      "city": "阿坝藏族羌族自治州",
      "name": "黑水县",
      "id": "513228000000"
    },
    "513230000000": {
      "city": "阿坝藏族羌族自治州",
      "name": "壤塘县",
      "id": "513230000000"
    },
    "513231000000": {
      "city": "阿坝藏族羌族自治州",
      "name": "阿坝县",
      "id": "513231000000"
    },
    "513232000000": {
      "city": "阿坝藏族羌族自治州",
      "name": "若尔盖县",
      "id": "513232000000"
    },
    "513233000000": {
      "city": "阿坝藏族羌族自治州",
      "name": "红原县",
      "id": "513233000000"
    },
    "513301000000": {
      "city": "甘孜藏族自治州",
      "name": "康定市",
      "id": "513301000000"
    },
    "513322000000": {
      "city": "甘孜藏族自治州",
      "name": "泸定县",
      "id": "513322000000"
    },
    "513323000000": {
      "city": "甘孜藏族自治州",
      "name": "丹巴县",
      "id": "513323000000"
    },
    "513324000000": {
      "city": "甘孜藏族自治州",
      "name": "九龙县",
      "id": "513324000000"
    },
    "513325000000": {
      "city": "甘孜藏族自治州",
      "name": "雅江县",
      "id": "513325000000"
    },
    "513326000000": {
      "city": "甘孜藏族自治州",
      "name": "道孚县",
      "id": "513326000000"
    },
    "513327000000": {
      "city": "甘孜藏族自治州",
      "name": "炉霍县",
      "id": "513327000000"
    },
    "513328000000": {
      "city": "甘孜藏族自治州",
      "name": "甘孜县",
      "id": "513328000000"
    },
    "513329000000": {
      "city": "甘孜藏族自治州",
      "name": "新龙县",
      "id": "513329000000"
    },
    "513330000000": {
      "city": "甘孜藏族自治州",
      "name": "德格县",
      "id": "513330000000"
    },
    "513331000000": {
      "city": "甘孜藏族自治州",
      "name": "白玉县",
      "id": "513331000000"
    },
    "513332000000": {
      "city": "甘孜藏族自治州",
      "name": "石渠县",
      "id": "513332000000"
    },
    "513333000000": {
      "city": "甘孜藏族自治州",
      "name": "色达县",
      "id": "513333000000"
    },
    "513334000000": {
      "city": "甘孜藏族自治州",
      "name": "理塘县",
      "id": "513334000000"
    },
    "513335000000": {
      "city": "甘孜藏族自治州",
      "name": "巴塘县",
      "id": "513335000000"
    },
    "513336000000": {
      "city": "甘孜藏族自治州",
      "name": "乡城县",
      "id": "513336000000"
    },
    "513337000000": {
      "city": "甘孜藏族自治州",
      "name": "稻城县",
      "id": "513337000000"
    },
    "513338000000": {
      "city": "甘孜藏族自治州",
      "name": "得荣县",
      "id": "513338000000"
    },
    "513401000000": {
      "city": "凉山彝族自治州",
      "name": "西昌市",
      "id": "513401000000"
    },
    "513422000000": {
      "city": "凉山彝族自治州",
      "name": "木里藏族自治县",
      "id": "513422000000"
    },
    "513423000000": {
      "city": "凉山彝族自治州",
      "name": "盐源县",
      "id": "513423000000"
    },
    "513424000000": {
      "city": "凉山彝族自治州",
      "name": "德昌县",
      "id": "513424000000"
    },
    "513425000000": {
      "city": "凉山彝族自治州",
      "name": "会理县",
      "id": "513425000000"
    },
    "513426000000": {
      "city": "凉山彝族自治州",
      "name": "会东县",
      "id": "513426000000"
    },
    "513427000000": {
      "city": "凉山彝族自治州",
      "name": "宁南县",
      "id": "513427000000"
    },
    "513428000000": {
      "city": "凉山彝族自治州",
      "name": "普格县",
      "id": "513428000000"
    },
    "513429000000": {
      "city": "凉山彝族自治州",
      "name": "布拖县",
      "id": "513429000000"
    },
    "513430000000": {
      "city": "凉山彝族自治州",
      "name": "金阳县",
      "id": "513430000000"
    },
    "513431000000": {
      "city": "凉山彝族自治州",
      "name": "昭觉县",
      "id": "513431000000"
    },
    "513432000000": {
      "city": "凉山彝族自治州",
      "name": "喜德县",
      "id": "513432000000"
    },
    "513433000000": {
      "city": "凉山彝族自治州",
      "name": "冕宁县",
      "id": "513433000000"
    },
    "513434000000": {
      "city": "凉山彝族自治州",
      "name": "越西县",
      "id": "513434000000"
    },
    "513435000000": {
      "city": "凉山彝族自治州",
      "name": "甘洛县",
      "id": "513435000000"
    },
    "513436000000": {
      "city": "凉山彝族自治州",
      "name": "美姑县",
      "id": "513436000000"
    },
    "513437000000": {
      "city": "凉山彝族自治州",
      "name": "雷波县",
      "id": "513437000000"
    },
    "520101000000": {
      "city": "贵阳市",
      "name": "市辖区",
      "id": "520101000000"
    },
    "520102000000": {
      "city": "贵阳市",
      "name": "南明区",
      "id": "520102000000"
    },
    "520103000000": {
      "city": "贵阳市",
      "name": "云岩区",
      "id": "520103000000"
    },
    "520111000000": {
      "city": "贵阳市",
      "name": "花溪区",
      "id": "520111000000"
    },
    "520112000000": {
      "city": "贵阳市",
      "name": "乌当区",
      "id": "520112000000"
    },
    "520113000000": {
      "city": "贵阳市",
      "name": "白云区",
      "id": "520113000000"
    },
    "520115000000": {
      "city": "贵阳市",
      "name": "观山湖区",
      "id": "520115000000"
    },
    "520121000000": {
      "city": "贵阳市",
      "name": "开阳县",
      "id": "520121000000"
    },
    "520122000000": {
      "city": "贵阳市",
      "name": "息烽县",
      "id": "520122000000"
    },
    "520123000000": {
      "city": "贵阳市",
      "name": "修文县",
      "id": "520123000000"
    },
    "520181000000": {
      "city": "贵阳市",
      "name": "清镇市",
      "id": "520181000000"
    },
    "520201000000": {
      "city": "六盘水市",
      "name": "钟山区",
      "id": "520201000000"
    },
    "520203000000": {
      "city": "六盘水市",
      "name": "六枝特区",
      "id": "520203000000"
    },
    "520221000000": {
      "city": "六盘水市",
      "name": "水城县",
      "id": "520221000000"
    },
    "520281000000": {
      "city": "六盘水市",
      "name": "盘州市",
      "id": "520281000000"
    },
    "520301000000": {
      "city": "遵义市",
      "name": "市辖区",
      "id": "520301000000"
    },
    "520302000000": {
      "city": "遵义市",
      "name": "红花岗区",
      "id": "520302000000"
    },
    "520303000000": {
      "city": "遵义市",
      "name": "汇川区",
      "id": "520303000000"
    },
    "520304000000": {
      "city": "遵义市",
      "name": "播州区",
      "id": "520304000000"
    },
    "520322000000": {
      "city": "遵义市",
      "name": "桐梓县",
      "id": "520322000000"
    },
    "520323000000": {
      "city": "遵义市",
      "name": "绥阳县",
      "id": "520323000000"
    },
    "520324000000": {
      "city": "遵义市",
      "name": "正安县",
      "id": "520324000000"
    },
    "520325000000": {
      "city": "遵义市",
      "name": "道真仡佬族苗族自治县",
      "id": "520325000000"
    },
    "520326000000": {
      "city": "遵义市",
      "name": "务川仡佬族苗族自治县",
      "id": "520326000000"
    },
    "520327000000": {
      "city": "遵义市",
      "name": "凤冈县",
      "id": "520327000000"
    },
    "520328000000": {
      "city": "遵义市",
      "name": "湄潭县",
      "id": "520328000000"
    },
    "520329000000": {
      "city": "遵义市",
      "name": "余庆县",
      "id": "520329000000"
    },
    "520330000000": {
      "city": "遵义市",
      "name": "习水县",
      "id": "520330000000"
    },
    "520381000000": {
      "city": "遵义市",
      "name": "赤水市",
      "id": "520381000000"
    },
    "520382000000": {
      "city": "遵义市",
      "name": "仁怀市",
      "id": "520382000000"
    },
    "520401000000": {
      "city": "安顺市",
      "name": "市辖区",
      "id": "520401000000"
    },
    "520402000000": {
      "city": "安顺市",
      "name": "西秀区",
      "id": "520402000000"
    },
    "520403000000": {
      "city": "安顺市",
      "name": "平坝区",
      "id": "520403000000"
    },
    "520422000000": {
      "city": "安顺市",
      "name": "普定县",
      "id": "520422000000"
    },
    "520423000000": {
      "city": "安顺市",
      "name": "镇宁布依族苗族自治县",
      "id": "520423000000"
    },
    "520424000000": {
      "city": "安顺市",
      "name": "关岭布依族苗族自治县",
      "id": "520424000000"
    },
    "520425000000": {
      "city": "安顺市",
      "name": "紫云苗族布依族自治县",
      "id": "520425000000"
    },
    "520501000000": {
      "city": "毕节市",
      "name": "市辖区",
      "id": "520501000000"
    },
    "520502000000": {
      "city": "毕节市",
      "name": "七星关区",
      "id": "520502000000"
    },
    "520521000000": {
      "city": "毕节市",
      "name": "大方县",
      "id": "520521000000"
    },
    "520522000000": {
      "city": "毕节市",
      "name": "黔西县",
      "id": "520522000000"
    },
    "520523000000": {
      "city": "毕节市",
      "name": "金沙县",
      "id": "520523000000"
    },
    "520524000000": {
      "city": "毕节市",
      "name": "织金县",
      "id": "520524000000"
    },
    "520525000000": {
      "city": "毕节市",
      "name": "纳雍县",
      "id": "520525000000"
    },
    "520526000000": {
      "city": "毕节市",
      "name": "威宁彝族回族苗族自治县",
      "id": "520526000000"
    },
    "520527000000": {
      "city": "毕节市",
      "name": "赫章县",
      "id": "520527000000"
    },
    "520601000000": {
      "city": "铜仁市",
      "name": "市辖区",
      "id": "520601000000"
    },
    "520602000000": {
      "city": "铜仁市",
      "name": "碧江区",
      "id": "520602000000"
    },
    "520603000000": {
      "city": "铜仁市",
      "name": "万山区",
      "id": "520603000000"
    },
    "520621000000": {
      "city": "铜仁市",
      "name": "江口县",
      "id": "520621000000"
    },
    "520622000000": {
      "city": "铜仁市",
      "name": "玉屏侗族自治县",
      "id": "520622000000"
    },
    "520623000000": {
      "city": "铜仁市",
      "name": "石阡县",
      "id": "520623000000"
    },
    "520624000000": {
      "city": "铜仁市",
      "name": "思南县",
      "id": "520624000000"
    },
    "520625000000": {
      "city": "铜仁市",
      "name": "印江土家族苗族自治县",
      "id": "520625000000"
    },
    "520626000000": {
      "city": "铜仁市",
      "name": "德江县",
      "id": "520626000000"
    },
    "520627000000": {
      "city": "铜仁市",
      "name": "沿河土家族自治县",
      "id": "520627000000"
    },
    "520628000000": {
      "city": "铜仁市",
      "name": "松桃苗族自治县",
      "id": "520628000000"
    },
    "522301000000": {
      "city": "黔西南布依族苗族自治州",
      "name": "兴义市",
      "id": "522301000000"
    },
    "522302000000": {
      "city": "黔西南布依族苗族自治州",
      "name": "兴仁市",
      "id": "522302000000"
    },
    "522323000000": {
      "city": "黔西南布依族苗族自治州",
      "name": "普安县",
      "id": "522323000000"
    },
    "522324000000": {
      "city": "黔西南布依族苗族自治州",
      "name": "晴隆县",
      "id": "522324000000"
    },
    "522325000000": {
      "city": "黔西南布依族苗族自治州",
      "name": "贞丰县",
      "id": "522325000000"
    },
    "522326000000": {
      "city": "黔西南布依族苗族自治州",
      "name": "望谟县",
      "id": "522326000000"
    },
    "522327000000": {
      "city": "黔西南布依族苗族自治州",
      "name": "册亨县",
      "id": "522327000000"
    },
    "522328000000": {
      "city": "黔西南布依族苗族自治州",
      "name": "安龙县",
      "id": "522328000000"
    },
    "522601000000": {
      "city": "黔东南苗族侗族自治州",
      "name": "凯里市",
      "id": "522601000000"
    },
    "522622000000": {
      "city": "黔东南苗族侗族自治州",
      "name": "黄平县",
      "id": "522622000000"
    },
    "522623000000": {
      "city": "黔东南苗族侗族自治州",
      "name": "施秉县",
      "id": "522623000000"
    },
    "522624000000": {
      "city": "黔东南苗族侗族自治州",
      "name": "三穗县",
      "id": "522624000000"
    },
    "522625000000": {
      "city": "黔东南苗族侗族自治州",
      "name": "镇远县",
      "id": "522625000000"
    },
    "522626000000": {
      "city": "黔东南苗族侗族自治州",
      "name": "岑巩县",
      "id": "522626000000"
    },
    "522627000000": {
      "city": "黔东南苗族侗族自治州",
      "name": "天柱县",
      "id": "522627000000"
    },
    "522628000000": {
      "city": "黔东南苗族侗族自治州",
      "name": "锦屏县",
      "id": "522628000000"
    },
    "522629000000": {
      "city": "黔东南苗族侗族自治州",
      "name": "剑河县",
      "id": "522629000000"
    },
    "522630000000": {
      "city": "黔东南苗族侗族自治州",
      "name": "台江县",
      "id": "522630000000"
    },
    "522631000000": {
      "city": "黔东南苗族侗族自治州",
      "name": "黎平县",
      "id": "522631000000"
    },
    "522632000000": {
      "city": "黔东南苗族侗族自治州",
      "name": "榕江县",
      "id": "522632000000"
    },
    "522633000000": {
      "city": "黔东南苗族侗族自治州",
      "name": "从江县",
      "id": "522633000000"
    },
    "522634000000": {
      "city": "黔东南苗族侗族自治州",
      "name": "雷山县",
      "id": "522634000000"
    },
    "522635000000": {
      "city": "黔东南苗族侗族自治州",
      "name": "麻江县",
      "id": "522635000000"
    },
    "522636000000": {
      "city": "黔东南苗族侗族自治州",
      "name": "丹寨县",
      "id": "522636000000"
    },
    "522701000000": {
      "city": "黔南布依族苗族自治州",
      "name": "都匀市",
      "id": "522701000000"
    },
    "522702000000": {
      "city": "黔南布依族苗族自治州",
      "name": "福泉市",
      "id": "522702000000"
    },
    "522722000000": {
      "city": "黔南布依族苗族自治州",
      "name": "荔波县",
      "id": "522722000000"
    },
    "522723000000": {
      "city": "黔南布依族苗族自治州",
      "name": "贵定县",
      "id": "522723000000"
    },
    "522725000000": {
      "city": "黔南布依族苗族自治州",
      "name": "瓮安县",
      "id": "522725000000"
    },
    "522726000000": {
      "city": "黔南布依族苗族自治州",
      "name": "独山县",
      "id": "522726000000"
    },
    "522727000000": {
      "city": "黔南布依族苗族自治州",
      "name": "平塘县",
      "id": "522727000000"
    },
    "522728000000": {
      "city": "黔南布依族苗族自治州",
      "name": "罗甸县",
      "id": "522728000000"
    },
    "522729000000": {
      "city": "黔南布依族苗族自治州",
      "name": "长顺县",
      "id": "522729000000"
    },
    "522730000000": {
      "city": "黔南布依族苗族自治州",
      "name": "龙里县",
      "id": "522730000000"
    },
    "522731000000": {
      "city": "黔南布依族苗族自治州",
      "name": "惠水县",
      "id": "522731000000"
    },
    "522732000000": {
      "city": "黔南布依族苗族自治州",
      "name": "三都水族自治县",
      "id": "522732000000"
    },
    "530101000000": {
      "city": "昆明市",
      "name": "市辖区",
      "id": "530101000000"
    },
    "530102000000": {
      "city": "昆明市",
      "name": "五华区",
      "id": "530102000000"
    },
    "530103000000": {
      "city": "昆明市",
      "name": "盘龙区",
      "id": "530103000000"
    },
    "530111000000": {
      "city": "昆明市",
      "name": "官渡区",
      "id": "530111000000"
    },
    "530112000000": {
      "city": "昆明市",
      "name": "西山区",
      "id": "530112000000"
    },
    "530113000000": {
      "city": "昆明市",
      "name": "东川区",
      "id": "530113000000"
    },
    "530114000000": {
      "city": "昆明市",
      "name": "呈贡区",
      "id": "530114000000"
    },
    "530115000000": {
      "city": "昆明市",
      "name": "晋宁区",
      "id": "530115000000"
    },
    "530124000000": {
      "city": "昆明市",
      "name": "富民县",
      "id": "530124000000"
    },
    "530125000000": {
      "city": "昆明市",
      "name": "宜良县",
      "id": "530125000000"
    },
    "530126000000": {
      "city": "昆明市",
      "name": "石林彝族自治县",
      "id": "530126000000"
    },
    "530127000000": {
      "city": "昆明市",
      "name": "嵩明县",
      "id": "530127000000"
    },
    "530128000000": {
      "city": "昆明市",
      "name": "禄劝彝族苗族自治县",
      "id": "530128000000"
    },
    "530129000000": {
      "city": "昆明市",
      "name": "寻甸回族彝族自治县",
      "id": "530129000000"
    },
    "530181000000": {
      "city": "昆明市",
      "name": "安宁市",
      "id": "530181000000"
    },
    "530301000000": {
      "city": "曲靖市",
      "name": "市辖区",
      "id": "530301000000"
    },
    "530302000000": {
      "city": "曲靖市",
      "name": "麒麟区",
      "id": "530302000000"
    },
    "530303000000": {
      "city": "曲靖市",
      "name": "沾益区",
      "id": "530303000000"
    },
    "530304000000": {
      "city": "曲靖市",
      "name": "马龙区",
      "id": "530304000000"
    },
    "530322000000": {
      "city": "曲靖市",
      "name": "陆良县",
      "id": "530322000000"
    },
    "530323000000": {
      "city": "曲靖市",
      "name": "师宗县",
      "id": "530323000000"
    },
    "530324000000": {
      "city": "曲靖市",
      "name": "罗平县",
      "id": "530324000000"
    },
    "530325000000": {
      "city": "曲靖市",
      "name": "富源县",
      "id": "530325000000"
    },
    "530326000000": {
      "city": "曲靖市",
      "name": "会泽县",
      "id": "530326000000"
    },
    "530381000000": {
      "city": "曲靖市",
      "name": "宣威市",
      "id": "530381000000"
    },
    "530401000000": {
      "city": "玉溪市",
      "name": "市辖区",
      "id": "530401000000"
    },
    "530402000000": {
      "city": "玉溪市",
      "name": "红塔区",
      "id": "530402000000"
    },
    "530403000000": {
      "city": "玉溪市",
      "name": "江川区",
      "id": "530403000000"
    },
    "530422000000": {
      "city": "玉溪市",
      "name": "澄江县",
      "id": "530422000000"
    },
    "530423000000": {
      "city": "玉溪市",
      "name": "通海县",
      "id": "530423000000"
    },
    "530424000000": {
      "city": "玉溪市",
      "name": "华宁县",
      "id": "530424000000"
    },
    "530425000000": {
      "city": "玉溪市",
      "name": "易门县",
      "id": "530425000000"
    },
    "530426000000": {
      "city": "玉溪市",
      "name": "峨山彝族自治县",
      "id": "530426000000"
    },
    "530427000000": {
      "city": "玉溪市",
      "name": "新平彝族傣族自治县",
      "id": "530427000000"
    },
    "530428000000": {
      "city": "玉溪市",
      "name": "元江哈尼族彝族傣族自治县",
      "id": "530428000000"
    },
    "530501000000": {
      "city": "保山市",
      "name": "市辖区",
      "id": "530501000000"
    },
    "530502000000": {
      "city": "保山市",
      "name": "隆阳区",
      "id": "530502000000"
    },
    "530521000000": {
      "city": "保山市",
      "name": "施甸县",
      "id": "530521000000"
    },
    "530523000000": {
      "city": "保山市",
      "name": "龙陵县",
      "id": "530523000000"
    },
    "530524000000": {
      "city": "保山市",
      "name": "昌宁县",
      "id": "530524000000"
    },
    "530581000000": {
      "city": "保山市",
      "name": "腾冲市",
      "id": "530581000000"
    },
    "530601000000": {
      "city": "昭通市",
      "name": "市辖区",
      "id": "530601000000"
    },
    "530602000000": {
      "city": "昭通市",
      "name": "昭阳区",
      "id": "530602000000"
    },
    "530621000000": {
      "city": "昭通市",
      "name": "鲁甸县",
      "id": "530621000000"
    },
    "530622000000": {
      "city": "昭通市",
      "name": "巧家县",
      "id": "530622000000"
    },
    "530623000000": {
      "city": "昭通市",
      "name": "盐津县",
      "id": "530623000000"
    },
    "530624000000": {
      "city": "昭通市",
      "name": "大关县",
      "id": "530624000000"
    },
    "530625000000": {
      "city": "昭通市",
      "name": "永善县",
      "id": "530625000000"
    },
    "530626000000": {
      "city": "昭通市",
      "name": "绥江县",
      "id": "530626000000"
    },
    "530627000000": {
      "city": "昭通市",
      "name": "镇雄县",
      "id": "530627000000"
    },
    "530628000000": {
      "city": "昭通市",
      "name": "彝良县",
      "id": "530628000000"
    },
    "530629000000": {
      "city": "昭通市",
      "name": "威信县",
      "id": "530629000000"
    },
    "530681000000": {
      "city": "昭通市",
      "name": "水富市",
      "id": "530681000000"
    },
    "530701000000": {
      "city": "丽江市",
      "name": "市辖区",
      "id": "530701000000"
    },
    "530702000000": {
      "city": "丽江市",
      "name": "古城区",
      "id": "530702000000"
    },
    "530721000000": {
      "city": "丽江市",
      "name": "玉龙纳西族自治县",
      "id": "530721000000"
    },
    "530722000000": {
      "city": "丽江市",
      "name": "永胜县",
      "id": "530722000000"
    },
    "530723000000": {
      "city": "丽江市",
      "name": "华坪县",
      "id": "530723000000"
    },
    "530724000000": {
      "city": "丽江市",
      "name": "宁蒗彝族自治县",
      "id": "530724000000"
    },
    "530801000000": {
      "city": "普洱市",
      "name": "市辖区",
      "id": "530801000000"
    },
    "530802000000": {
      "city": "普洱市",
      "name": "思茅区",
      "id": "530802000000"
    },
    "530821000000": {
      "city": "普洱市",
      "name": "宁洱哈尼族彝族自治县",
      "id": "530821000000"
    },
    "530822000000": {
      "city": "普洱市",
      "name": "墨江哈尼族自治县",
      "id": "530822000000"
    },
    "530823000000": {
      "city": "普洱市",
      "name": "景东彝族自治县",
      "id": "530823000000"
    },
    "530824000000": {
      "city": "普洱市",
      "name": "景谷傣族彝族自治县",
      "id": "530824000000"
    },
    "530825000000": {
      "city": "普洱市",
      "name": "镇沅彝族哈尼族拉祜族自治县",
      "id": "530825000000"
    },
    "530826000000": {
      "city": "普洱市",
      "name": "江城哈尼族彝族自治县",
      "id": "530826000000"
    },
    "530827000000": {
      "city": "普洱市",
      "name": "孟连傣族拉祜族佤族自治县",
      "id": "530827000000"
    },
    "530828000000": {
      "city": "普洱市",
      "name": "澜沧拉祜族自治县",
      "id": "530828000000"
    },
    "530829000000": {
      "city": "普洱市",
      "name": "西盟佤族自治县",
      "id": "530829000000"
    },
    "530901000000": {
      "city": "临沧市",
      "name": "市辖区",
      "id": "530901000000"
    },
    "530902000000": {
      "city": "临沧市",
      "name": "临翔区",
      "id": "530902000000"
    },
    "530921000000": {
      "city": "临沧市",
      "name": "凤庆县",
      "id": "530921000000"
    },
    "530922000000": {
      "city": "临沧市",
      "name": "云县",
      "id": "530922000000"
    },
    "530923000000": {
      "city": "临沧市",
      "name": "永德县",
      "id": "530923000000"
    },
    "530924000000": {
      "city": "临沧市",
      "name": "镇康县",
      "id": "530924000000"
    },
    "530925000000": {
      "city": "临沧市",
      "name": "双江拉祜族佤族布朗族傣族自治县",
      "id": "530925000000"
    },
    "530926000000": {
      "city": "临沧市",
      "name": "耿马傣族佤族自治县",
      "id": "530926000000"
    },
    "530927000000": {
      "city": "临沧市",
      "name": "沧源佤族自治县",
      "id": "530927000000"
    },
    "532301000000": {
      "city": "楚雄彝族自治州",
      "name": "楚雄市",
      "id": "532301000000"
    },
    "532322000000": {
      "city": "楚雄彝族自治州",
      "name": "双柏县",
      "id": "532322000000"
    },
    "532323000000": {
      "city": "楚雄彝族自治州",
      "name": "牟定县",
      "id": "532323000000"
    },
    "532324000000": {
      "city": "楚雄彝族自治州",
      "name": "南华县",
      "id": "532324000000"
    },
    "532325000000": {
      "city": "楚雄彝族自治州",
      "name": "姚安县",
      "id": "532325000000"
    },
    "532326000000": {
      "city": "楚雄彝族自治州",
      "name": "大姚县",
      "id": "532326000000"
    },
    "532327000000": {
      "city": "楚雄彝族自治州",
      "name": "永仁县",
      "id": "532327000000"
    },
    "532328000000": {
      "city": "楚雄彝族自治州",
      "name": "元谋县",
      "id": "532328000000"
    },
    "532329000000": {
      "city": "楚雄彝族自治州",
      "name": "武定县",
      "id": "532329000000"
    },
    "532331000000": {
      "city": "楚雄彝族自治州",
      "name": "禄丰县",
      "id": "532331000000"
    },
    "532501000000": {
      "city": "红河哈尼族彝族自治州",
      "name": "个旧市",
      "id": "532501000000"
    },
    "532502000000": {
      "city": "红河哈尼族彝族自治州",
      "name": "开远市",
      "id": "532502000000"
    },
    "532503000000": {
      "city": "红河哈尼族彝族自治州",
      "name": "蒙自市",
      "id": "532503000000"
    },
    "532504000000": {
      "city": "红河哈尼族彝族自治州",
      "name": "弥勒市",
      "id": "532504000000"
    },
    "532523000000": {
      "city": "红河哈尼族彝族自治州",
      "name": "屏边苗族自治县",
      "id": "532523000000"
    },
    "532524000000": {
      "city": "红河哈尼族彝族自治州",
      "name": "建水县",
      "id": "532524000000"
    },
    "532525000000": {
      "city": "红河哈尼族彝族自治州",
      "name": "石屏县",
      "id": "532525000000"
    },
    "532527000000": {
      "city": "红河哈尼族彝族自治州",
      "name": "泸西县",
      "id": "532527000000"
    },
    "532528000000": {
      "city": "红河哈尼族彝族自治州",
      "name": "元阳县",
      "id": "532528000000"
    },
    "532529000000": {
      "city": "红河哈尼族彝族自治州",
      "name": "红河县",
      "id": "532529000000"
    },
    "532530000000": {
      "city": "红河哈尼族彝族自治州",
      "name": "金平苗族瑶族傣族自治县",
      "id": "532530000000"
    },
    "532531000000": {
      "city": "红河哈尼族彝族自治州",
      "name": "绿春县",
      "id": "532531000000"
    },
    "532532000000": {
      "city": "红河哈尼族彝族自治州",
      "name": "河口瑶族自治县",
      "id": "532532000000"
    },
    "532601000000": {
      "city": "文山壮族苗族自治州",
      "name": "文山市",
      "id": "532601000000"
    },
    "532622000000": {
      "city": "文山壮族苗族自治州",
      "name": "砚山县",
      "id": "532622000000"
    },
    "532623000000": {
      "city": "文山壮族苗族自治州",
      "name": "西畴县",
      "id": "532623000000"
    },
    "532624000000": {
      "city": "文山壮族苗族自治州",
      "name": "麻栗坡县",
      "id": "532624000000"
    },
    "532625000000": {
      "city": "文山壮族苗族自治州",
      "name": "马关县",
      "id": "532625000000"
    },
    "532626000000": {
      "city": "文山壮族苗族自治州",
      "name": "丘北县",
      "id": "532626000000"
    },
    "532627000000": {
      "city": "文山壮族苗族自治州",
      "name": "广南县",
      "id": "532627000000"
    },
    "532628000000": {
      "city": "文山壮族苗族自治州",
      "name": "富宁县",
      "id": "532628000000"
    },
    "532801000000": {
      "city": "西双版纳傣族自治州",
      "name": "景洪市",
      "id": "532801000000"
    },
    "532822000000": {
      "city": "西双版纳傣族自治州",
      "name": "勐海县",
      "id": "532822000000"
    },
    "532823000000": {
      "city": "西双版纳傣族自治州",
      "name": "勐腊县",
      "id": "532823000000"
    },
    "532901000000": {
      "city": "大理白族自治州",
      "name": "大理市",
      "id": "532901000000"
    },
    "532922000000": {
      "city": "大理白族自治州",
      "name": "漾濞彝族自治县",
      "id": "532922000000"
    },
    "532923000000": {
      "city": "大理白族自治州",
      "name": "祥云县",
      "id": "532923000000"
    },
    "532924000000": {
      "city": "大理白族自治州",
      "name": "宾川县",
      "id": "532924000000"
    },
    "532925000000": {
      "city": "大理白族自治州",
      "name": "弥渡县",
      "id": "532925000000"
    },
    "532926000000": {
      "city": "大理白族自治州",
      "name": "南涧彝族自治县",
      "id": "532926000000"
    },
    "532927000000": {
      "city": "大理白族自治州",
      "name": "巍山彝族回族自治县",
      "id": "532927000000"
    },
    "532928000000": {
      "city": "大理白族自治州",
      "name": "永平县",
      "id": "532928000000"
    },
    "532929000000": {
      "city": "大理白族自治州",
      "name": "云龙县",
      "id": "532929000000"
    },
    "532930000000": {
      "city": "大理白族自治州",
      "name": "洱源县",
      "id": "532930000000"
    },
    "532931000000": {
      "city": "大理白族自治州",
      "name": "剑川县",
      "id": "532931000000"
    },
    "532932000000": {
      "city": "大理白族自治州",
      "name": "鹤庆县",
      "id": "532932000000"
    },
    "533102000000": {
      "city": "德宏傣族景颇族自治州",
      "name": "瑞丽市",
      "id": "533102000000"
    },
    "533103000000": {
      "city": "德宏傣族景颇族自治州",
      "name": "芒市",
      "id": "533103000000"
    },
    "533122000000": {
      "city": "德宏傣族景颇族自治州",
      "name": "梁河县",
      "id": "533122000000"
    },
    "533123000000": {
      "city": "德宏傣族景颇族自治州",
      "name": "盈江县",
      "id": "533123000000"
    },
    "533124000000": {
      "city": "德宏傣族景颇族自治州",
      "name": "陇川县",
      "id": "533124000000"
    },
    "533301000000": {
      "city": "怒江傈僳族自治州",
      "name": "泸水市",
      "id": "533301000000"
    },
    "533323000000": {
      "city": "怒江傈僳族自治州",
      "name": "福贡县",
      "id": "533323000000"
    },
    "533324000000": {
      "city": "怒江傈僳族自治州",
      "name": "贡山独龙族怒族自治县",
      "id": "533324000000"
    },
    "533325000000": {
      "city": "怒江傈僳族自治州",
      "name": "兰坪白族普米族自治县",
      "id": "533325000000"
    },
    "533401000000": {
      "city": "迪庆藏族自治州",
      "name": "香格里拉市",
      "id": "533401000000"
    },
    "533422000000": {
      "city": "迪庆藏族自治州",
      "name": "德钦县",
      "id": "533422000000"
    },
    "533423000000": {
      "city": "迪庆藏族自治州",
      "name": "维西傈僳族自治县",
      "id": "533423000000"
    },
    "540101000000": {
      "city": "拉萨市",
      "name": "市辖区",
      "id": "540101000000"
    },
    "540102000000": {
      "city": "拉萨市",
      "name": "城关区",
      "id": "540102000000"
    },
    "540103000000": {
      "city": "拉萨市",
      "name": "堆龙德庆区",
      "id": "540103000000"
    },
    "540104000000": {
      "city": "拉萨市",
      "name": "达孜区",
      "id": "540104000000"
    },
    "540121000000": {
      "city": "拉萨市",
      "name": "林周县",
      "id": "540121000000"
    },
    "540122000000": {
      "city": "拉萨市",
      "name": "当雄县",
      "id": "540122000000"
    },
    "540123000000": {
      "city": "拉萨市",
      "name": "尼木县",
      "id": "540123000000"
    },
    "540124000000": {
      "city": "拉萨市",
      "name": "曲水县",
      "id": "540124000000"
    },
    "540127000000": {
      "city": "拉萨市",
      "name": "墨竹工卡县",
      "id": "540127000000"
    },
    "540171000000": {
      "city": "拉萨市",
      "name": "格尔木藏青工业园区",
      "id": "540171000000"
    },
    "540172000000": {
      "city": "拉萨市",
      "name": "拉萨经济技术开发区",
      "id": "540172000000"
    },
    "540173000000": {
      "city": "拉萨市",
      "name": "西藏文化旅游创意园区",
      "id": "540173000000"
    },
    "540174000000": {
      "city": "拉萨市",
      "name": "达孜工业园区",
      "id": "540174000000"
    },
    "540202000000": {
      "city": "日喀则市",
      "name": "桑珠孜区",
      "id": "540202000000"
    },
    "540221000000": {
      "city": "日喀则市",
      "name": "南木林县",
      "id": "540221000000"
    },
    "540222000000": {
      "city": "日喀则市",
      "name": "江孜县",
      "id": "540222000000"
    },
    "540223000000": {
      "city": "日喀则市",
      "name": "定日县",
      "id": "540223000000"
    },
    "540224000000": {
      "city": "日喀则市",
      "name": "萨迦县",
      "id": "540224000000"
    },
    "540225000000": {
      "city": "日喀则市",
      "name": "拉孜县",
      "id": "540225000000"
    },
    "540226000000": {
      "city": "日喀则市",
      "name": "昂仁县",
      "id": "540226000000"
    },
    "540227000000": {
      "city": "日喀则市",
      "name": "谢通门县",
      "id": "540227000000"
    },
    "540228000000": {
      "city": "日喀则市",
      "name": "白朗县",
      "id": "540228000000"
    },
    "540229000000": {
      "city": "日喀则市",
      "name": "仁布县",
      "id": "540229000000"
    },
    "540230000000": {
      "city": "日喀则市",
      "name": "康马县",
      "id": "540230000000"
    },
    "540231000000": {
      "city": "日喀则市",
      "name": "定结县",
      "id": "540231000000"
    },
    "540232000000": {
      "city": "日喀则市",
      "name": "仲巴县",
      "id": "540232000000"
    },
    "540233000000": {
      "city": "日喀则市",
      "name": "亚东县",
      "id": "540233000000"
    },
    "540234000000": {
      "city": "日喀则市",
      "name": "吉隆县",
      "id": "540234000000"
    },
    "540235000000": {
      "city": "日喀则市",
      "name": "聂拉木县",
      "id": "540235000000"
    },
    "540236000000": {
      "city": "日喀则市",
      "name": "萨嘎县",
      "id": "540236000000"
    },
    "540237000000": {
      "city": "日喀则市",
      "name": "岗巴县",
      "id": "540237000000"
    },
    "540302000000": {
      "city": "昌都市",
      "name": "卡若区",
      "id": "540302000000"
    },
    "540321000000": {
      "city": "昌都市",
      "name": "江达县",
      "id": "540321000000"
    },
    "540322000000": {
      "city": "昌都市",
      "name": "贡觉县",
      "id": "540322000000"
    },
    "540323000000": {
      "city": "昌都市",
      "name": "类乌齐县",
      "id": "540323000000"
    },
    "540324000000": {
      "city": "昌都市",
      "name": "丁青县",
      "id": "540324000000"
    },
    "540325000000": {
      "city": "昌都市",
      "name": "察雅县",
      "id": "540325000000"
    },
    "540326000000": {
      "city": "昌都市",
      "name": "八宿县",
      "id": "540326000000"
    },
    "540327000000": {
      "city": "昌都市",
      "name": "左贡县",
      "id": "540327000000"
    },
    "540328000000": {
      "city": "昌都市",
      "name": "芒康县",
      "id": "540328000000"
    },
    "540329000000": {
      "city": "昌都市",
      "name": "洛隆县",
      "id": "540329000000"
    },
    "540330000000": {
      "city": "昌都市",
      "name": "边坝县",
      "id": "540330000000"
    },
    "540402000000": {
      "city": "林芝市",
      "name": "巴宜区",
      "id": "540402000000"
    },
    "540421000000": {
      "city": "林芝市",
      "name": "工布江达县",
      "id": "540421000000"
    },
    "540422000000": {
      "city": "林芝市",
      "name": "米林县",
      "id": "540422000000"
    },
    "540423000000": {
      "city": "林芝市",
      "name": "墨脱县",
      "id": "540423000000"
    },
    "540424000000": {
      "city": "林芝市",
      "name": "波密县",
      "id": "540424000000"
    },
    "540425000000": {
      "city": "林芝市",
      "name": "察隅县",
      "id": "540425000000"
    },
    "540426000000": {
      "city": "林芝市",
      "name": "朗县",
      "id": "540426000000"
    },
    "540501000000": {
      "city": "山南市",
      "name": "市辖区",
      "id": "540501000000"
    },
    "540502000000": {
      "city": "山南市",
      "name": "乃东区",
      "id": "540502000000"
    },
    "540521000000": {
      "city": "山南市",
      "name": "扎囊县",
      "id": "540521000000"
    },
    "540522000000": {
      "city": "山南市",
      "name": "贡嘎县",
      "id": "540522000000"
    },
    "540523000000": {
      "city": "山南市",
      "name": "桑日县",
      "id": "540523000000"
    },
    "540524000000": {
      "city": "山南市",
      "name": "琼结县",
      "id": "540524000000"
    },
    "540525000000": {
      "city": "山南市",
      "name": "曲松县",
      "id": "540525000000"
    },
    "540526000000": {
      "city": "山南市",
      "name": "措美县",
      "id": "540526000000"
    },
    "540527000000": {
      "city": "山南市",
      "name": "洛扎县",
      "id": "540527000000"
    },
    "540528000000": {
      "city": "山南市",
      "name": "加查县",
      "id": "540528000000"
    },
    "540529000000": {
      "city": "山南市",
      "name": "隆子县",
      "id": "540529000000"
    },
    "540530000000": {
      "city": "山南市",
      "name": "错那县",
      "id": "540530000000"
    },
    "540531000000": {
      "city": "山南市",
      "name": "浪卡子县",
      "id": "540531000000"
    },
    "540602000000": {
      "city": "那曲市",
      "name": "色尼区",
      "id": "540602000000"
    },
    "540621000000": {
      "city": "那曲市",
      "name": "嘉黎县",
      "id": "540621000000"
    },
    "540622000000": {
      "city": "那曲市",
      "name": "比如县",
      "id": "540622000000"
    },
    "540623000000": {
      "city": "那曲市",
      "name": "聂荣县",
      "id": "540623000000"
    },
    "540624000000": {
      "city": "那曲市",
      "name": "安多县",
      "id": "540624000000"
    },
    "540625000000": {
      "city": "那曲市",
      "name": "申扎县",
      "id": "540625000000"
    },
    "540626000000": {
      "city": "那曲市",
      "name": "索县",
      "id": "540626000000"
    },
    "540627000000": {
      "city": "那曲市",
      "name": "班戈县",
      "id": "540627000000"
    },
    "540628000000": {
      "city": "那曲市",
      "name": "巴青县",
      "id": "540628000000"
    },
    "540629000000": {
      "city": "那曲市",
      "name": "尼玛县",
      "id": "540629000000"
    },
    "540630000000": {
      "city": "那曲市",
      "name": "双湖县",
      "id": "540630000000"
    },
    "542521000000": {
      "city": "阿里地区",
      "name": "普兰县",
      "id": "542521000000"
    },
    "542522000000": {
      "city": "阿里地区",
      "name": "札达县",
      "id": "542522000000"
    },
    "542523000000": {
      "city": "阿里地区",
      "name": "噶尔县",
      "id": "542523000000"
    },
    "542524000000": {
      "city": "阿里地区",
      "name": "日土县",
      "id": "542524000000"
    },
    "542525000000": {
      "city": "阿里地区",
      "name": "革吉县",
      "id": "542525000000"
    },
    "542526000000": {
      "city": "阿里地区",
      "name": "改则县",
      "id": "542526000000"
    },
    "542527000000": {
      "city": "阿里地区",
      "name": "措勤县",
      "id": "542527000000"
    },
    "610101000000": {
      "city": "西安市",
      "name": "市辖区",
      "id": "610101000000"
    },
    "610102000000": {
      "city": "西安市",
      "name": "新城区",
      "id": "610102000000"
    },
    "610103000000": {
      "city": "西安市",
      "name": "碑林区",
      "id": "610103000000"
    },
    "610104000000": {
      "city": "西安市",
      "name": "莲湖区",
      "id": "610104000000"
    },
    "610111000000": {
      "city": "西安市",
      "name": "灞桥区",
      "id": "610111000000"
    },
    "610112000000": {
      "city": "西安市",
      "name": "未央区",
      "id": "610112000000"
    },
    "610113000000": {
      "city": "西安市",
      "name": "雁塔区",
      "id": "610113000000"
    },
    "610114000000": {
      "city": "西安市",
      "name": "阎良区",
      "id": "610114000000"
    },
    "610115000000": {
      "city": "西安市",
      "name": "临潼区",
      "id": "610115000000"
    },
    "610116000000": {
      "city": "西安市",
      "name": "长安区",
      "id": "610116000000"
    },
    "610117000000": {
      "city": "西安市",
      "name": "高陵区",
      "id": "610117000000"
    },
    "610118000000": {
      "city": "西安市",
      "name": "鄠邑区",
      "id": "610118000000"
    },
    "610122000000": {
      "city": "西安市",
      "name": "蓝田县",
      "id": "610122000000"
    },
    "610124000000": {
      "city": "西安市",
      "name": "周至县",
      "id": "610124000000"
    },
    "610201000000": {
      "city": "铜川市",
      "name": "市辖区",
      "id": "610201000000"
    },
    "610202000000": {
      "city": "铜川市",
      "name": "王益区",
      "id": "610202000000"
    },
    "610203000000": {
      "city": "铜川市",
      "name": "印台区",
      "id": "610203000000"
    },
    "610204000000": {
      "city": "铜川市",
      "name": "耀州区",
      "id": "610204000000"
    },
    "610222000000": {
      "city": "铜川市",
      "name": "宜君县",
      "id": "610222000000"
    },
    "610301000000": {
      "city": "宝鸡市",
      "name": "市辖区",
      "id": "610301000000"
    },
    "610302000000": {
      "city": "宝鸡市",
      "name": "渭滨区",
      "id": "610302000000"
    },
    "610303000000": {
      "city": "宝鸡市",
      "name": "金台区",
      "id": "610303000000"
    },
    "610304000000": {
      "city": "宝鸡市",
      "name": "陈仓区",
      "id": "610304000000"
    },
    "610322000000": {
      "city": "宝鸡市",
      "name": "凤翔县",
      "id": "610322000000"
    },
    "610323000000": {
      "city": "宝鸡市",
      "name": "岐山县",
      "id": "610323000000"
    },
    "610324000000": {
      "city": "宝鸡市",
      "name": "扶风县",
      "id": "610324000000"
    },
    "610326000000": {
      "city": "宝鸡市",
      "name": "眉县",
      "id": "610326000000"
    },
    "610327000000": {
      "city": "宝鸡市",
      "name": "陇县",
      "id": "610327000000"
    },
    "610328000000": {
      "city": "宝鸡市",
      "name": "千阳县",
      "id": "610328000000"
    },
    "610329000000": {
      "city": "宝鸡市",
      "name": "麟游县",
      "id": "610329000000"
    },
    "610330000000": {
      "city": "宝鸡市",
      "name": "凤县",
      "id": "610330000000"
    },
    "610331000000": {
      "city": "宝鸡市",
      "name": "太白县",
      "id": "610331000000"
    },
    "610401000000": {
      "city": "咸阳市",
      "name": "市辖区",
      "id": "610401000000"
    },
    "610402000000": {
      "city": "咸阳市",
      "name": "秦都区",
      "id": "610402000000"
    },
    "610403000000": {
      "city": "咸阳市",
      "name": "杨陵区",
      "id": "610403000000"
    },
    "610404000000": {
      "city": "咸阳市",
      "name": "渭城区",
      "id": "610404000000"
    },
    "610422000000": {
      "city": "咸阳市",
      "name": "三原县",
      "id": "610422000000"
    },
    "610423000000": {
      "city": "咸阳市",
      "name": "泾阳县",
      "id": "610423000000"
    },
    "610424000000": {
      "city": "咸阳市",
      "name": "乾县",
      "id": "610424000000"
    },
    "610425000000": {
      "city": "咸阳市",
      "name": "礼泉县",
      "id": "610425000000"
    },
    "610426000000": {
      "city": "咸阳市",
      "name": "永寿县",
      "id": "610426000000"
    },
    "610428000000": {
      "city": "咸阳市",
      "name": "长武县",
      "id": "610428000000"
    },
    "610429000000": {
      "city": "咸阳市",
      "name": "旬邑县",
      "id": "610429000000"
    },
    "610430000000": {
      "city": "咸阳市",
      "name": "淳化县",
      "id": "610430000000"
    },
    "610431000000": {
      "city": "咸阳市",
      "name": "武功县",
      "id": "610431000000"
    },
    "610481000000": {
      "city": "咸阳市",
      "name": "兴平市",
      "id": "610481000000"
    },
    "610482000000": {
      "city": "咸阳市",
      "name": "彬州市",
      "id": "610482000000"
    },
    "610501000000": {
      "city": "渭南市",
      "name": "市辖区",
      "id": "610501000000"
    },
    "610502000000": {
      "city": "渭南市",
      "name": "临渭区",
      "id": "610502000000"
    },
    "610503000000": {
      "city": "渭南市",
      "name": "华州区",
      "id": "610503000000"
    },
    "610522000000": {
      "city": "渭南市",
      "name": "潼关县",
      "id": "610522000000"
    },
    "610523000000": {
      "city": "渭南市",
      "name": "大荔县",
      "id": "610523000000"
    },
    "610524000000": {
      "city": "渭南市",
      "name": "合阳县",
      "id": "610524000000"
    },
    "610525000000": {
      "city": "渭南市",
      "name": "澄城县",
      "id": "610525000000"
    },
    "610526000000": {
      "city": "渭南市",
      "name": "蒲城县",
      "id": "610526000000"
    },
    "610527000000": {
      "city": "渭南市",
      "name": "白水县",
      "id": "610527000000"
    },
    "610528000000": {
      "city": "渭南市",
      "name": "富平县",
      "id": "610528000000"
    },
    "610581000000": {
      "city": "渭南市",
      "name": "韩城市",
      "id": "610581000000"
    },
    "610582000000": {
      "city": "渭南市",
      "name": "华阴市",
      "id": "610582000000"
    },
    "610601000000": {
      "city": "延安市",
      "name": "市辖区",
      "id": "610601000000"
    },
    "610602000000": {
      "city": "延安市",
      "name": "宝塔区",
      "id": "610602000000"
    },
    "610603000000": {
      "city": "延安市",
      "name": "安塞区",
      "id": "610603000000"
    },
    "610621000000": {
      "city": "延安市",
      "name": "延长县",
      "id": "610621000000"
    },
    "610622000000": {
      "city": "延安市",
      "name": "延川县",
      "id": "610622000000"
    },
    "610623000000": {
      "city": "延安市",
      "name": "子长县",
      "id": "610623000000"
    },
    "610625000000": {
      "city": "延安市",
      "name": "志丹县",
      "id": "610625000000"
    },
    "610626000000": {
      "city": "延安市",
      "name": "吴起县",
      "id": "610626000000"
    },
    "610627000000": {
      "city": "延安市",
      "name": "甘泉县",
      "id": "610627000000"
    },
    "610628000000": {
      "city": "延安市",
      "name": "富县",
      "id": "610628000000"
    },
    "610629000000": {
      "city": "延安市",
      "name": "洛川县",
      "id": "610629000000"
    },
    "610630000000": {
      "city": "延安市",
      "name": "宜川县",
      "id": "610630000000"
    },
    "610631000000": {
      "city": "延安市",
      "name": "黄龙县",
      "id": "610631000000"
    },
    "610632000000": {
      "city": "延安市",
      "name": "黄陵县",
      "id": "610632000000"
    },
    "610701000000": {
      "city": "汉中市",
      "name": "市辖区",
      "id": "610701000000"
    },
    "610702000000": {
      "city": "汉中市",
      "name": "汉台区",
      "id": "610702000000"
    },
    "610703000000": {
      "city": "汉中市",
      "name": "南郑区",
      "id": "610703000000"
    },
    "610722000000": {
      "city": "汉中市",
      "name": "城固县",
      "id": "610722000000"
    },
    "610723000000": {
      "city": "汉中市",
      "name": "洋县",
      "id": "610723000000"
    },
    "610724000000": {
      "city": "汉中市",
      "name": "西乡县",
      "id": "610724000000"
    },
    "610725000000": {
      "city": "汉中市",
      "name": "勉县",
      "id": "610725000000"
    },
    "610726000000": {
      "city": "汉中市",
      "name": "宁强县",
      "id": "610726000000"
    },
    "610727000000": {
      "city": "汉中市",
      "name": "略阳县",
      "id": "610727000000"
    },
    "610728000000": {
      "city": "汉中市",
      "name": "镇巴县",
      "id": "610728000000"
    },
    "610729000000": {
      "city": "汉中市",
      "name": "留坝县",
      "id": "610729000000"
    },
    "610730000000": {
      "city": "汉中市",
      "name": "佛坪县",
      "id": "610730000000"
    },
    "610801000000": {
      "city": "榆林市",
      "name": "市辖区",
      "id": "610801000000"
    },
    "610802000000": {
      "city": "榆林市",
      "name": "榆阳区",
      "id": "610802000000"
    },
    "610803000000": {
      "city": "榆林市",
      "name": "横山区",
      "id": "610803000000"
    },
    "610822000000": {
      "city": "榆林市",
      "name": "府谷县",
      "id": "610822000000"
    },
    "610824000000": {
      "city": "榆林市",
      "name": "靖边县",
      "id": "610824000000"
    },
    "610825000000": {
      "city": "榆林市",
      "name": "定边县",
      "id": "610825000000"
    },
    "610826000000": {
      "city": "榆林市",
      "name": "绥德县",
      "id": "610826000000"
    },
    "610827000000": {
      "city": "榆林市",
      "name": "米脂县",
      "id": "610827000000"
    },
    "610828000000": {
      "city": "榆林市",
      "name": "佳县",
      "id": "610828000000"
    },
    "610829000000": {
      "city": "榆林市",
      "name": "吴堡县",
      "id": "610829000000"
    },
    "610830000000": {
      "city": "榆林市",
      "name": "清涧县",
      "id": "610830000000"
    },
    "610831000000": {
      "city": "榆林市",
      "name": "子洲县",
      "id": "610831000000"
    },
    "610881000000": {
      "city": "榆林市",
      "name": "神木市",
      "id": "610881000000"
    },
    "610901000000": {
      "city": "安康市",
      "name": "市辖区",
      "id": "610901000000"
    },
    "610902000000": {
      "city": "安康市",
      "name": "汉滨区",
      "id": "610902000000"
    },
    "610921000000": {
      "city": "安康市",
      "name": "汉阴县",
      "id": "610921000000"
    },
    "610922000000": {
      "city": "安康市",
      "name": "石泉县",
      "id": "610922000000"
    },
    "610923000000": {
      "city": "安康市",
      "name": "宁陕县",
      "id": "610923000000"
    },
    "610924000000": {
      "city": "安康市",
      "name": "紫阳县",
      "id": "610924000000"
    },
    "610925000000": {
      "city": "安康市",
      "name": "岚皋县",
      "id": "610925000000"
    },
    "610926000000": {
      "city": "安康市",
      "name": "平利县",
      "id": "610926000000"
    },
    "610927000000": {
      "city": "安康市",
      "name": "镇坪县",
      "id": "610927000000"
    },
    "610928000000": {
      "city": "安康市",
      "name": "旬阳县",
      "id": "610928000000"
    },
    "610929000000": {
      "city": "安康市",
      "name": "白河县",
      "id": "610929000000"
    },
    "611001000000": {
      "city": "商洛市",
      "name": "市辖区",
      "id": "611001000000"
    },
    "611002000000": {
      "city": "商洛市",
      "name": "商州区",
      "id": "611002000000"
    },
    "611021000000": {
      "city": "商洛市",
      "name": "洛南县",
      "id": "611021000000"
    },
    "611022000000": {
      "city": "商洛市",
      "name": "丹凤县",
      "id": "611022000000"
    },
    "611023000000": {
      "city": "商洛市",
      "name": "商南县",
      "id": "611023000000"
    },
    "611024000000": {
      "city": "商洛市",
      "name": "山阳县",
      "id": "611024000000"
    },
    "611025000000": {
      "city": "商洛市",
      "name": "镇安县",
      "id": "611025000000"
    },
    "611026000000": {
      "city": "商洛市",
      "name": "柞水县",
      "id": "611026000000"
    },
    "620101000000": {
      "city": "兰州市",
      "name": "市辖区",
      "id": "620101000000"
    },
    "620102000000": {
      "city": "兰州市",
      "name": "城关区",
      "id": "620102000000"
    },
    "620103000000": {
      "city": "兰州市",
      "name": "七里河区",
      "id": "620103000000"
    },
    "620104000000": {
      "city": "兰州市",
      "name": "西固区",
      "id": "620104000000"
    },
    "620105000000": {
      "city": "兰州市",
      "name": "安宁区",
      "id": "620105000000"
    },
    "620111000000": {
      "city": "兰州市",
      "name": "红古区",
      "id": "620111000000"
    },
    "620121000000": {
      "city": "兰州市",
      "name": "永登县",
      "id": "620121000000"
    },
    "620122000000": {
      "city": "兰州市",
      "name": "皋兰县",
      "id": "620122000000"
    },
    "620123000000": {
      "city": "兰州市",
      "name": "榆中县",
      "id": "620123000000"
    },
    "620171000000": {
      "city": "兰州市",
      "name": "兰州新区",
      "id": "620171000000"
    },
    "620201000000": {
      "city": "嘉峪关市",
      "name": "市辖区",
      "id": "620201000000"
    },
    "620301000000": {
      "city": "金昌市",
      "name": "市辖区",
      "id": "620301000000"
    },
    "620302000000": {
      "city": "金昌市",
      "name": "金川区",
      "id": "620302000000"
    },
    "620321000000": {
      "city": "金昌市",
      "name": "永昌县",
      "id": "620321000000"
    },
    "620401000000": {
      "city": "白银市",
      "name": "市辖区",
      "id": "620401000000"
    },
    "620402000000": {
      "city": "白银市",
      "name": "白银区",
      "id": "620402000000"
    },
    "620403000000": {
      "city": "白银市",
      "name": "平川区",
      "id": "620403000000"
    },
    "620421000000": {
      "city": "白银市",
      "name": "靖远县",
      "id": "620421000000"
    },
    "620422000000": {
      "city": "白银市",
      "name": "会宁县",
      "id": "620422000000"
    },
    "620423000000": {
      "city": "白银市",
      "name": "景泰县",
      "id": "620423000000"
    },
    "620501000000": {
      "city": "天水市",
      "name": "市辖区",
      "id": "620501000000"
    },
    "620502000000": {
      "city": "天水市",
      "name": "秦州区",
      "id": "620502000000"
    },
    "620503000000": {
      "city": "天水市",
      "name": "麦积区",
      "id": "620503000000"
    },
    "620521000000": {
      "city": "天水市",
      "name": "清水县",
      "id": "620521000000"
    },
    "620522000000": {
      "city": "天水市",
      "name": "秦安县",
      "id": "620522000000"
    },
    "620523000000": {
      "city": "天水市",
      "name": "甘谷县",
      "id": "620523000000"
    },
    "620524000000": {
      "city": "天水市",
      "name": "武山县",
      "id": "620524000000"
    },
    "620525000000": {
      "city": "天水市",
      "name": "张家川回族自治县",
      "id": "620525000000"
    },
    "620601000000": {
      "city": "武威市",
      "name": "市辖区",
      "id": "620601000000"
    },
    "620602000000": {
      "city": "武威市",
      "name": "凉州区",
      "id": "620602000000"
    },
    "620621000000": {
      "city": "武威市",
      "name": "民勤县",
      "id": "620621000000"
    },
    "620622000000": {
      "city": "武威市",
      "name": "古浪县",
      "id": "620622000000"
    },
    "620623000000": {
      "city": "武威市",
      "name": "天祝藏族自治县",
      "id": "620623000000"
    },
    "620701000000": {
      "city": "张掖市",
      "name": "市辖区",
      "id": "620701000000"
    },
    "620702000000": {
      "city": "张掖市",
      "name": "甘州区",
      "id": "620702000000"
    },
    "620721000000": {
      "city": "张掖市",
      "name": "肃南裕固族自治县",
      "id": "620721000000"
    },
    "620722000000": {
      "city": "张掖市",
      "name": "民乐县",
      "id": "620722000000"
    },
    "620723000000": {
      "city": "张掖市",
      "name": "临泽县",
      "id": "620723000000"
    },
    "620724000000": {
      "city": "张掖市",
      "name": "高台县",
      "id": "620724000000"
    },
    "620725000000": {
      "city": "张掖市",
      "name": "山丹县",
      "id": "620725000000"
    },
    "620801000000": {
      "city": "平凉市",
      "name": "市辖区",
      "id": "620801000000"
    },
    "620802000000": {
      "city": "平凉市",
      "name": "崆峒区",
      "id": "620802000000"
    },
    "620821000000": {
      "city": "平凉市",
      "name": "泾川县",
      "id": "620821000000"
    },
    "620822000000": {
      "city": "平凉市",
      "name": "灵台县",
      "id": "620822000000"
    },
    "620823000000": {
      "city": "平凉市",
      "name": "崇信县",
      "id": "620823000000"
    },
    "620825000000": {
      "city": "平凉市",
      "name": "庄浪县",
      "id": "620825000000"
    },
    "620826000000": {
      "city": "平凉市",
      "name": "静宁县",
      "id": "620826000000"
    },
    "620881000000": {
      "city": "平凉市",
      "name": "华亭市",
      "id": "620881000000"
    },
    "620901000000": {
      "city": "酒泉市",
      "name": "市辖区",
      "id": "620901000000"
    },
    "620902000000": {
      "city": "酒泉市",
      "name": "肃州区",
      "id": "620902000000"
    },
    "620921000000": {
      "city": "酒泉市",
      "name": "金塔县",
      "id": "620921000000"
    },
    "620922000000": {
      "city": "酒泉市",
      "name": "瓜州县",
      "id": "620922000000"
    },
    "620923000000": {
      "city": "酒泉市",
      "name": "肃北蒙古族自治县",
      "id": "620923000000"
    },
    "620924000000": {
      "city": "酒泉市",
      "name": "阿克塞哈萨克族自治县",
      "id": "620924000000"
    },
    "620981000000": {
      "city": "酒泉市",
      "name": "玉门市",
      "id": "620981000000"
    },
    "620982000000": {
      "city": "酒泉市",
      "name": "敦煌市",
      "id": "620982000000"
    },
    "621001000000": {
      "city": "庆阳市",
      "name": "市辖区",
      "id": "621001000000"
    },
    "621002000000": {
      "city": "庆阳市",
      "name": "西峰区",
      "id": "621002000000"
    },
    "621021000000": {
      "city": "庆阳市",
      "name": "庆城县",
      "id": "621021000000"
    },
    "621022000000": {
      "city": "庆阳市",
      "name": "环县",
      "id": "621022000000"
    },
    "621023000000": {
      "city": "庆阳市",
      "name": "华池县",
      "id": "621023000000"
    },
    "621024000000": {
      "city": "庆阳市",
      "name": "合水县",
      "id": "621024000000"
    },
    "621025000000": {
      "city": "庆阳市",
      "name": "正宁县",
      "id": "621025000000"
    },
    "621026000000": {
      "city": "庆阳市",
      "name": "宁县",
      "id": "621026000000"
    },
    "621027000000": {
      "city": "庆阳市",
      "name": "镇原县",
      "id": "621027000000"
    },
    "621101000000": {
      "city": "定西市",
      "name": "市辖区",
      "id": "621101000000"
    },
    "621102000000": {
      "city": "定西市",
      "name": "安定区",
      "id": "621102000000"
    },
    "621121000000": {
      "city": "定西市",
      "name": "通渭县",
      "id": "621121000000"
    },
    "621122000000": {
      "city": "定西市",
      "name": "陇西县",
      "id": "621122000000"
    },
    "621123000000": {
      "city": "定西市",
      "name": "渭源县",
      "id": "621123000000"
    },
    "621124000000": {
      "city": "定西市",
      "name": "临洮县",
      "id": "621124000000"
    },
    "621125000000": {
      "city": "定西市",
      "name": "漳县",
      "id": "621125000000"
    },
    "621126000000": {
      "city": "定西市",
      "name": "岷县",
      "id": "621126000000"
    },
    "621201000000": {
      "city": "陇南市",
      "name": "市辖区",
      "id": "621201000000"
    },
    "621202000000": {
      "city": "陇南市",
      "name": "武都区",
      "id": "621202000000"
    },
    "621221000000": {
      "city": "陇南市",
      "name": "成县",
      "id": "621221000000"
    },
    "621222000000": {
      "city": "陇南市",
      "name": "文县",
      "id": "621222000000"
    },
    "621223000000": {
      "city": "陇南市",
      "name": "宕昌县",
      "id": "621223000000"
    },
    "621224000000": {
      "city": "陇南市",
      "name": "康县",
      "id": "621224000000"
    },
    "621225000000": {
      "city": "陇南市",
      "name": "西和县",
      "id": "621225000000"
    },
    "621226000000": {
      "city": "陇南市",
      "name": "礼县",
      "id": "621226000000"
    },
    "621227000000": {
      "city": "陇南市",
      "name": "徽县",
      "id": "621227000000"
    },
    "621228000000": {
      "city": "陇南市",
      "name": "两当县",
      "id": "621228000000"
    },
    "622901000000": {
      "city": "临夏回族自治州",
      "name": "临夏市",
      "id": "622901000000"
    },
    "622921000000": {
      "city": "临夏回族自治州",
      "name": "临夏县",
      "id": "622921000000"
    },
    "622922000000": {
      "city": "临夏回族自治州",
      "name": "康乐县",
      "id": "622922000000"
    },
    "622923000000": {
      "city": "临夏回族自治州",
      "name": "永靖县",
      "id": "622923000000"
    },
    "622924000000": {
      "city": "临夏回族自治州",
      "name": "广河县",
      "id": "622924000000"
    },
    "622925000000": {
      "city": "临夏回族自治州",
      "name": "和政县",
      "id": "622925000000"
    },
    "622926000000": {
      "city": "临夏回族自治州",
      "name": "东乡族自治县",
      "id": "622926000000"
    },
    "622927000000": {
      "city": "临夏回族自治州",
      "name": "积石山保安族东乡族撒拉族自治县",
      "id": "622927000000"
    },
    "623001000000": {
      "city": "甘南藏族自治州",
      "name": "合作市",
      "id": "623001000000"
    },
    "623021000000": {
      "city": "甘南藏族自治州",
      "name": "临潭县",
      "id": "623021000000"
    },
    "623022000000": {
      "city": "甘南藏族自治州",
      "name": "卓尼县",
      "id": "623022000000"
    },
    "623023000000": {
      "city": "甘南藏族自治州",
      "name": "舟曲县",
      "id": "623023000000"
    },
    "623024000000": {
      "city": "甘南藏族自治州",
      "name": "迭部县",
      "id": "623024000000"
    },
    "623025000000": {
      "city": "甘南藏族自治州",
      "name": "玛曲县",
      "id": "623025000000"
    },
    "623026000000": {
      "city": "甘南藏族自治州",
      "name": "碌曲县",
      "id": "623026000000"
    },
    "623027000000": {
      "city": "甘南藏族自治州",
      "name": "夏河县",
      "id": "623027000000"
    },
    "630101000000": {
      "city": "西宁市",
      "name": "市辖区",
      "id": "630101000000"
    },
    "630102000000": {
      "city": "西宁市",
      "name": "城东区",
      "id": "630102000000"
    },
    "630103000000": {
      "city": "西宁市",
      "name": "城中区",
      "id": "630103000000"
    },
    "630104000000": {
      "city": "西宁市",
      "name": "城西区",
      "id": "630104000000"
    },
    "630105000000": {
      "city": "西宁市",
      "name": "城北区",
      "id": "630105000000"
    },
    "630121000000": {
      "city": "西宁市",
      "name": "大通回族土族自治县",
      "id": "630121000000"
    },
    "630122000000": {
      "city": "西宁市",
      "name": "湟中县",
      "id": "630122000000"
    },
    "630123000000": {
      "city": "西宁市",
      "name": "湟源县",
      "id": "630123000000"
    },
    "630202000000": {
      "city": "海东市",
      "name": "乐都区",
      "id": "630202000000"
    },
    "630203000000": {
      "city": "海东市",
      "name": "平安区",
      "id": "630203000000"
    },
    "630222000000": {
      "city": "海东市",
      "name": "民和回族土族自治县",
      "id": "630222000000"
    },
    "630223000000": {
      "city": "海东市",
      "name": "互助土族自治县",
      "id": "630223000000"
    },
    "630224000000": {
      "city": "海东市",
      "name": "化隆回族自治县",
      "id": "630224000000"
    },
    "630225000000": {
      "city": "海东市",
      "name": "循化撒拉族自治县",
      "id": "630225000000"
    },
    "632221000000": {
      "city": "海北藏族自治州",
      "name": "门源回族自治县",
      "id": "632221000000"
    },
    "632222000000": {
      "city": "海北藏族自治州",
      "name": "祁连县",
      "id": "632222000000"
    },
    "632223000000": {
      "city": "海北藏族自治州",
      "name": "海晏县",
      "id": "632223000000"
    },
    "632224000000": {
      "city": "海北藏族自治州",
      "name": "刚察县",
      "id": "632224000000"
    },
    "632321000000": {
      "city": "黄南藏族自治州",
      "name": "同仁县",
      "id": "632321000000"
    },
    "632322000000": {
      "city": "黄南藏族自治州",
      "name": "尖扎县",
      "id": "632322000000"
    },
    "632323000000": {
      "city": "黄南藏族自治州",
      "name": "泽库县",
      "id": "632323000000"
    },
    "632324000000": {
      "city": "黄南藏族自治州",
      "name": "河南蒙古族自治县",
      "id": "632324000000"
    },
    "632521000000": {
      "city": "海南藏族自治州",
      "name": "共和县",
      "id": "632521000000"
    },
    "632522000000": {
      "city": "海南藏族自治州",
      "name": "同德县",
      "id": "632522000000"
    },
    "632523000000": {
      "city": "海南藏族自治州",
      "name": "贵德县",
      "id": "632523000000"
    },
    "632524000000": {
      "city": "海南藏族自治州",
      "name": "兴海县",
      "id": "632524000000"
    },
    "632525000000": {
      "city": "海南藏族自治州",
      "name": "贵南县",
      "id": "632525000000"
    },
    "632621000000": {
      "city": "果洛藏族自治州",
      "name": "玛沁县",
      "id": "632621000000"
    },
    "632622000000": {
      "city": "果洛藏族自治州",
      "name": "班玛县",
      "id": "632622000000"
    },
    "632623000000": {
      "city": "果洛藏族自治州",
      "name": "甘德县",
      "id": "632623000000"
    },
    "632624000000": {
      "city": "果洛藏族自治州",
      "name": "达日县",
      "id": "632624000000"
    },
    "632625000000": {
      "city": "果洛藏族自治州",
      "name": "久治县",
      "id": "632625000000"
    },
    "632626000000": {
      "city": "果洛藏族自治州",
      "name": "玛多县",
      "id": "632626000000"
    },
    "632701000000": {
      "city": "玉树藏族自治州",
      "name": "玉树市",
      "id": "632701000000"
    },
    "632722000000": {
      "city": "玉树藏族自治州",
      "name": "杂多县",
      "id": "632722000000"
    },
    "632723000000": {
      "city": "玉树藏族自治州",
      "name": "称多县",
      "id": "632723000000"
    },
    "632724000000": {
      "city": "玉树藏族自治州",
      "name": "治多县",
      "id": "632724000000"
    },
    "632725000000": {
      "city": "玉树藏族自治州",
      "name": "囊谦县",
      "id": "632725000000"
    },
    "632726000000": {
      "city": "玉树藏族自治州",
      "name": "曲麻莱县",
      "id": "632726000000"
    },
    "632801000000": {
      "city": "海西蒙古族藏族自治州",
      "name": "格尔木市",
      "id": "632801000000"
    },
    "632802000000": {
      "city": "海西蒙古族藏族自治州",
      "name": "德令哈市",
      "id": "632802000000"
    },
    "632803000000": {
      "city": "海西蒙古族藏族自治州",
      "name": "茫崖市",
      "id": "632803000000"
    },
    "632821000000": {
      "city": "海西蒙古族藏族自治州",
      "name": "乌兰县",
      "id": "632821000000"
    },
    "632822000000": {
      "city": "海西蒙古族藏族自治州",
      "name": "都兰县",
      "id": "632822000000"
    },
    "632823000000": {
      "city": "海西蒙古族藏族自治州",
      "name": "天峻县",
      "id": "632823000000"
    },
    "632857000000": {
      "city": "海西蒙古族藏族自治州",
      "name": "大柴旦行政委员会",
      "id": "632857000000"
    },
    "640101000000": {
      "city": "银川市",
      "name": "市辖区",
      "id": "640101000000"
    },
    "640104000000": {
      "city": "银川市",
      "name": "兴庆区",
      "id": "640104000000"
    },
    "640105000000": {
      "city": "银川市",
      "name": "西夏区",
      "id": "640105000000"
    },
    "640106000000": {
      "city": "银川市",
      "name": "金凤区",
      "id": "640106000000"
    },
    "640121000000": {
      "city": "银川市",
      "name": "永宁县",
      "id": "640121000000"
    },
    "640122000000": {
      "city": "银川市",
      "name": "贺兰县",
      "id": "640122000000"
    },
    "640181000000": {
      "city": "银川市",
      "name": "灵武市",
      "id": "640181000000"
    },
    "640201000000": {
      "city": "石嘴山市",
      "name": "市辖区",
      "id": "640201000000"
    },
    "640202000000": {
      "city": "石嘴山市",
      "name": "大武口区",
      "id": "640202000000"
    },
    "640205000000": {
      "city": "石嘴山市",
      "name": "惠农区",
      "id": "640205000000"
    },
    "640221000000": {
      "city": "石嘴山市",
      "name": "平罗县",
      "id": "640221000000"
    },
    "640301000000": {
      "city": "吴忠市",
      "name": "市辖区",
      "id": "640301000000"
    },
    "640302000000": {
      "city": "吴忠市",
      "name": "利通区",
      "id": "640302000000"
    },
    "640303000000": {
      "city": "吴忠市",
      "name": "红寺堡区",
      "id": "640303000000"
    },
    "640323000000": {
      "city": "吴忠市",
      "name": "盐池县",
      "id": "640323000000"
    },
    "640324000000": {
      "city": "吴忠市",
      "name": "同心县",
      "id": "640324000000"
    },
    "640381000000": {
      "city": "吴忠市",
      "name": "青铜峡市",
      "id": "640381000000"
    },
    "640401000000": {
      "city": "固原市",
      "name": "市辖区",
      "id": "640401000000"
    },
    "640402000000": {
      "city": "固原市",
      "name": "原州区",
      "id": "640402000000"
    },
    "640422000000": {
      "city": "固原市",
      "name": "西吉县",
      "id": "640422000000"
    },
    "640423000000": {
      "city": "固原市",
      "name": "隆德县",
      "id": "640423000000"
    },
    "640424000000": {
      "city": "固原市",
      "name": "泾源县",
      "id": "640424000000"
    },
    "640425000000": {
      "city": "固原市",
      "name": "彭阳县",
      "id": "640425000000"
    },
    "640501000000": {
      "city": "中卫市",
      "name": "市辖区",
      "id": "640501000000"
    },
    "640502000000": {
      "city": "中卫市",
      "name": "沙坡头区",
      "id": "640502000000"
    },
    "640521000000": {
      "city": "中卫市",
      "name": "中宁县",
      "id": "640521000000"
    },
    "640522000000": {
      "city": "中卫市",
      "name": "海原县",
      "id": "640522000000"
    },
    "650101000000": {
      "city": "乌鲁木齐市",
      "name": "市辖区",
      "id": "650101000000"
    },
    "650102000000": {
      "city": "乌鲁木齐市",
      "name": "天山区",
      "id": "650102000000"
    },
    "650103000000": {
      "city": "乌鲁木齐市",
      "name": "沙依巴克区",
      "id": "650103000000"
    },
    "650104000000": {
      "city": "乌鲁木齐市",
      "name": "新市区",
      "id": "650104000000"
    },
    "650105000000": {
      "city": "乌鲁木齐市",
      "name": "水磨沟区",
      "id": "650105000000"
    },
    "650106000000": {
      "city": "乌鲁木齐市",
      "name": "头屯河区",
      "id": "650106000000"
    },
    "650107000000": {
      "city": "乌鲁木齐市",
      "name": "达坂城区",
      "id": "650107000000"
    },
    "650109000000": {
      "city": "乌鲁木齐市",
      "name": "米东区",
      "id": "650109000000"
    },
    "650121000000": {
      "city": "乌鲁木齐市",
      "name": "乌鲁木齐县",
      "id": "650121000000"
    },
    "650171000000": {
      "city": "乌鲁木齐市",
      "name": "乌鲁木齐经济技术开发区",
      "id": "650171000000"
    },
    "650172000000": {
      "city": "乌鲁木齐市",
      "name": "乌鲁木齐高新技术产业开发区",
      "id": "650172000000"
    },
    "650201000000": {
      "city": "克拉玛依市",
      "name": "市辖区",
      "id": "650201000000"
    },
    "650202000000": {
      "city": "克拉玛依市",
      "name": "独山子区",
      "id": "650202000000"
    },
    "650203000000": {
      "city": "克拉玛依市",
      "name": "克拉玛依区",
      "id": "650203000000"
    },
    "650204000000": {
      "city": "克拉玛依市",
      "name": "白碱滩区",
      "id": "650204000000"
    },
    "650205000000": {
      "city": "克拉玛依市",
      "name": "乌尔禾区",
      "id": "650205000000"
    },
    "650402000000": {
      "city": "吐鲁番市",
      "name": "高昌区",
      "id": "650402000000"
    },
    "650421000000": {
      "city": "吐鲁番市",
      "name": "鄯善县",
      "id": "650421000000"
    },
    "650422000000": {
      "city": "吐鲁番市",
      "name": "托克逊县",
      "id": "650422000000"
    },
    "650502000000": {
      "city": "哈密市",
      "name": "伊州区",
      "id": "650502000000"
    },
    "650521000000": {
      "city": "哈密市",
      "name": "巴里坤哈萨克自治县",
      "id": "650521000000"
    },
    "650522000000": {
      "city": "哈密市",
      "name": "伊吾县",
      "id": "650522000000"
    },
    "652301000000": {
      "city": "昌吉回族自治州",
      "name": "昌吉市",
      "id": "652301000000"
    },
    "652302000000": {
      "city": "昌吉回族自治州",
      "name": "阜康市",
      "id": "652302000000"
    },
    "652323000000": {
      "city": "昌吉回族自治州",
      "name": "呼图壁县",
      "id": "652323000000"
    },
    "652324000000": {
      "city": "昌吉回族自治州",
      "name": "玛纳斯县",
      "id": "652324000000"
    },
    "652325000000": {
      "city": "昌吉回族自治州",
      "name": "奇台县",
      "id": "652325000000"
    },
    "652327000000": {
      "city": "昌吉回族自治州",
      "name": "吉木萨尔县",
      "id": "652327000000"
    },
    "652328000000": {
      "city": "昌吉回族自治州",
      "name": "木垒哈萨克自治县",
      "id": "652328000000"
    },
    "652701000000": {
      "city": "博尔塔拉蒙古自治州",
      "name": "博乐市",
      "id": "652701000000"
    },
    "652702000000": {
      "city": "博尔塔拉蒙古自治州",
      "name": "阿拉山口市",
      "id": "652702000000"
    },
    "652722000000": {
      "city": "博尔塔拉蒙古自治州",
      "name": "精河县",
      "id": "652722000000"
    },
    "652723000000": {
      "city": "博尔塔拉蒙古自治州",
      "name": "温泉县",
      "id": "652723000000"
    },
    "652801000000": {
      "city": "巴音郭楞蒙古自治州",
      "name": "库尔勒市",
      "id": "652801000000"
    },
    "652822000000": {
      "city": "巴音郭楞蒙古自治州",
      "name": "轮台县",
      "id": "652822000000"
    },
    "652823000000": {
      "city": "巴音郭楞蒙古自治州",
      "name": "尉犁县",
      "id": "652823000000"
    },
    "652824000000": {
      "city": "巴音郭楞蒙古自治州",
      "name": "若羌县",
      "id": "652824000000"
    },
    "652825000000": {
      "city": "巴音郭楞蒙古自治州",
      "name": "且末县",
      "id": "652825000000"
    },
    "652826000000": {
      "city": "巴音郭楞蒙古自治州",
      "name": "焉耆回族自治县",
      "id": "652826000000"
    },
    "652827000000": {
      "city": "巴音郭楞蒙古自治州",
      "name": "和静县",
      "id": "652827000000"
    },
    "652828000000": {
      "city": "巴音郭楞蒙古自治州",
      "name": "和硕县",
      "id": "652828000000"
    },
    "652829000000": {
      "city": "巴音郭楞蒙古自治州",
      "name": "博湖县",
      "id": "652829000000"
    },
    "652871000000": {
      "city": "巴音郭楞蒙古自治州",
      "name": "库尔勒经济技术开发区",
      "id": "652871000000"
    },
    "652901000000": {
      "city": "阿克苏地区",
      "name": "阿克苏市",
      "id": "652901000000"
    },
    "652922000000": {
      "city": "阿克苏地区",
      "name": "温宿县",
      "id": "652922000000"
    },
    "652923000000": {
      "city": "阿克苏地区",
      "name": "库车县",
      "id": "652923000000"
    },
    "652924000000": {
      "city": "阿克苏地区",
      "name": "沙雅县",
      "id": "652924000000"
    },
    "652925000000": {
      "city": "阿克苏地区",
      "name": "新和县",
      "id": "652925000000"
    },
    "652926000000": {
      "city": "阿克苏地区",
      "name": "拜城县",
      "id": "652926000000"
    },
    "652927000000": {
      "city": "阿克苏地区",
      "name": "乌什县",
      "id": "652927000000"
    },
    "652928000000": {
      "city": "阿克苏地区",
      "name": "阿瓦提县",
      "id": "652928000000"
    },
    "652929000000": {
      "city": "阿克苏地区",
      "name": "柯坪县",
      "id": "652929000000"
    },
    "653001000000": {
      "city": "克孜勒苏柯尔克孜自治州",
      "name": "阿图什市",
      "id": "653001000000"
    },
    "653022000000": {
      "city": "克孜勒苏柯尔克孜自治州",
      "name": "阿克陶县",
      "id": "653022000000"
    },
    "653023000000": {
      "city": "克孜勒苏柯尔克孜自治州",
      "name": "阿合奇县",
      "id": "653023000000"
    },
    "653024000000": {
      "city": "克孜勒苏柯尔克孜自治州",
      "name": "乌恰县",
      "id": "653024000000"
    },
    "653101000000": {
      "city": "喀什地区",
      "name": "喀什市",
      "id": "653101000000"
    },
    "653121000000": {
      "city": "喀什地区",
      "name": "疏附县",
      "id": "653121000000"
    },
    "653122000000": {
      "city": "喀什地区",
      "name": "疏勒县",
      "id": "653122000000"
    },
    "653123000000": {
      "city": "喀什地区",
      "name": "英吉沙县",
      "id": "653123000000"
    },
    "653124000000": {
      "city": "喀什地区",
      "name": "泽普县",
      "id": "653124000000"
    },
    "653125000000": {
      "city": "喀什地区",
      "name": "莎车县",
      "id": "653125000000"
    },
    "653126000000": {
      "city": "喀什地区",
      "name": "叶城县",
      "id": "653126000000"
    },
    "653127000000": {
      "city": "喀什地区",
      "name": "麦盖提县",
      "id": "653127000000"
    },
    "653128000000": {
      "city": "喀什地区",
      "name": "岳普湖县",
      "id": "653128000000"
    },
    "653129000000": {
      "city": "喀什地区",
      "name": "伽师县",
      "id": "653129000000"
    },
    "653130000000": {
      "city": "喀什地区",
      "name": "巴楚县",
      "id": "653130000000"
    },
    "653131000000": {
      "city": "喀什地区",
      "name": "塔什库尔干塔吉克自治县",
      "id": "653131000000"
    },
    "653201000000": {
      "city": "和田地区",
      "name": "和田市",
      "id": "653201000000"
    },
    "653221000000": {
      "city": "和田地区",
      "name": "和田县",
      "id": "653221000000"
    },
    "653222000000": {
      "city": "和田地区",
      "name": "墨玉县",
      "id": "653222000000"
    },
    "653223000000": {
      "city": "和田地区",
      "name": "皮山县",
      "id": "653223000000"
    },
    "653224000000": {
      "city": "和田地区",
      "name": "洛浦县",
      "id": "653224000000"
    },
    "653225000000": {
      "city": "和田地区",
      "name": "策勒县",
      "id": "653225000000"
    },
    "653226000000": {
      "city": "和田地区",
      "name": "于田县",
      "id": "653226000000"
    },
    "653227000000": {
      "city": "和田地区",
      "name": "民丰县",
      "id": "653227000000"
    },
    "654002000000": {
      "city": "伊犁哈萨克自治州",
      "name": "伊宁市",
      "id": "654002000000"
    },
    "654003000000": {
      "city": "伊犁哈萨克自治州",
      "name": "奎屯市",
      "id": "654003000000"
    },
    "654004000000": {
      "city": "伊犁哈萨克自治州",
      "name": "霍尔果斯市",
      "id": "654004000000"
    },
    "654021000000": {
      "city": "伊犁哈萨克自治州",
      "name": "伊宁县",
      "id": "654021000000"
    },
    "654022000000": {
      "city": "伊犁哈萨克自治州",
      "name": "察布查尔锡伯自治县",
      "id": "654022000000"
    },
    "654023000000": {
      "city": "伊犁哈萨克自治州",
      "name": "霍城县",
      "id": "654023000000"
    },
    "654024000000": {
      "city": "伊犁哈萨克自治州",
      "name": "巩留县",
      "id": "654024000000"
    },
    "654025000000": {
      "city": "伊犁哈萨克自治州",
      "name": "新源县",
      "id": "654025000000"
    },
    "654026000000": {
      "city": "伊犁哈萨克自治州",
      "name": "昭苏县",
      "id": "654026000000"
    },
    "654027000000": {
      "city": "伊犁哈萨克自治州",
      "name": "特克斯县",
      "id": "654027000000"
    },
    "654028000000": {
      "city": "伊犁哈萨克自治州",
      "name": "尼勒克县",
      "id": "654028000000"
    },
    "654201000000": {
      "city": "塔城地区",
      "name": "塔城市",
      "id": "654201000000"
    },
    "654202000000": {
      "city": "塔城地区",
      "name": "乌苏市",
      "id": "654202000000"
    },
    "654221000000": {
      "city": "塔城地区",
      "name": "额敏县",
      "id": "654221000000"
    },
    "654223000000": {
      "city": "塔城地区",
      "name": "沙湾县",
      "id": "654223000000"
    },
    "654224000000": {
      "city": "塔城地区",
      "name": "托里县",
      "id": "654224000000"
    },
    "654225000000": {
      "city": "塔城地区",
      "name": "裕民县",
      "id": "654225000000"
    },
    "654226000000": {
      "city": "塔城地区",
      "name": "和布克赛尔蒙古自治县",
      "id": "654226000000"
    },
    "654301000000": {
      "city": "阿勒泰地区",
      "name": "阿勒泰市",
      "id": "654301000000"
    },
    "654321000000": {
      "city": "阿勒泰地区",
      "name": "布尔津县",
      "id": "654321000000"
    },
    "654322000000": {
      "city": "阿勒泰地区",
      "name": "富蕴县",
      "id": "654322000000"
    },
    "654323000000": {
      "city": "阿勒泰地区",
      "name": "福海县",
      "id": "654323000000"
    },
    "654324000000": {
      "city": "阿勒泰地区",
      "name": "哈巴河县",
      "id": "654324000000"
    },
    "654325000000": {
      "city": "阿勒泰地区",
      "name": "青河县",
      "id": "654325000000"
    },
    "654326000000": {
      "city": "阿勒泰地区",
      "name": "吉木乃县",
      "id": "654326000000"
    },
    "659001000000": {
      "city": "自治区直辖县级行政区划",
      "name": "石河子市",
      "id": "659001000000"
    },
    "659002000000": {
      "city": "自治区直辖县级行政区划",
      "name": "阿拉尔市",
      "id": "659002000000"
    },
    "659003000000": {
      "city": "自治区直辖县级行政区划",
      "name": "图木舒克市",
      "id": "659003000000"
    },
    "659004000000": {
      "city": "自治区直辖县级行政区划",
      "name": "五家渠市",
      "id": "659004000000"
    },
    "659006000000": {
      "city": "自治区直辖县级行政区划",
      "name": "铁门关市",
      "id": "659006000000"
    }
  };
  _exports.country_object = country_object;
});
;define("location-demo/regions/province", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.province = void 0;
  let province = [{
    "name": "北京市",
    "id": "110000000000"
  }, {
    "name": "天津市",
    "id": "120000000000"
  }, {
    "name": "河北省",
    "id": "130000000000"
  }, {
    "name": "山西省",
    "id": "140000000000"
  }, {
    "name": "内蒙古自治区",
    "id": "150000000000"
  }, {
    "name": "辽宁省",
    "id": "210000000000"
  }, {
    "name": "吉林省",
    "id": "220000000000"
  }, {
    "name": "黑龙江省",
    "id": "230000000000"
  }, {
    "name": "上海市",
    "id": "310000000000"
  }, {
    "name": "江苏省",
    "id": "320000000000"
  }, {
    "name": "浙江省",
    "id": "330000000000"
  }, {
    "name": "安徽省",
    "id": "340000000000"
  }, {
    "name": "福建省",
    "id": "350000000000"
  }, {
    "name": "江西省",
    "id": "360000000000"
  }, {
    "name": "山东省",
    "id": "370000000000"
  }, {
    "name": "河南省",
    "id": "410000000000"
  }, {
    "name": "湖北省",
    "id": "420000000000"
  }, {
    "name": "湖南省",
    "id": "430000000000"
  }, {
    "name": "广东省",
    "id": "440000000000"
  }, {
    "name": "广西壮族自治区",
    "id": "450000000000"
  }, {
    "name": "海南省",
    "id": "460000000000"
  }, {
    "name": "重庆市",
    "id": "500000000000"
  }, {
    "name": "四川省",
    "id": "510000000000"
  }, {
    "name": "贵州省",
    "id": "520000000000"
  }, {
    "name": "云南省",
    "id": "530000000000"
  }, {
    "name": "西藏自治区",
    "id": "540000000000"
  }, {
    "name": "陕西省",
    "id": "610000000000"
  }, {
    "name": "甘肃省",
    "id": "620000000000"
  }, {
    "name": "青海省",
    "id": "630000000000"
  }, {
    "name": "宁夏回族自治区",
    "id": "640000000000"
  }, {
    "name": "新疆维吾尔自治区",
    "id": "650000000000"
  }];
  _exports.province = province;
});
;define("location-demo/regions/province_object", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.province_object = void 0;
  let province_object = {
    "110000000000": {
      "name": "北京市",
      "id": "110000000000"
    },
    "120000000000": {
      "name": "天津市",
      "id": "120000000000"
    },
    "130000000000": {
      "name": "河北省",
      "id": "130000000000"
    },
    "140000000000": {
      "name": "山西省",
      "id": "140000000000"
    },
    "150000000000": {
      "name": "内蒙古自治区",
      "id": "150000000000"
    },
    "210000000000": {
      "name": "辽宁省",
      "id": "210000000000"
    },
    "220000000000": {
      "name": "吉林省",
      "id": "220000000000"
    },
    "230000000000": {
      "name": "黑龙江省",
      "id": "230000000000"
    },
    "310000000000": {
      "name": "上海市",
      "id": "310000000000"
    },
    "320000000000": {
      "name": "江苏省",
      "id": "320000000000"
    },
    "330000000000": {
      "name": "浙江省",
      "id": "330000000000"
    },
    "340000000000": {
      "name": "安徽省",
      "id": "340000000000"
    },
    "350000000000": {
      "name": "福建省",
      "id": "350000000000"
    },
    "360000000000": {
      "name": "江西省",
      "id": "360000000000"
    },
    "370000000000": {
      "name": "山东省",
      "id": "370000000000"
    },
    "410000000000": {
      "name": "河南省",
      "id": "410000000000"
    },
    "420000000000": {
      "name": "湖北省",
      "id": "420000000000"
    },
    "430000000000": {
      "name": "湖南省",
      "id": "430000000000"
    },
    "440000000000": {
      "name": "广东省",
      "id": "440000000000"
    },
    "450000000000": {
      "name": "广西壮族自治区",
      "id": "450000000000"
    },
    "460000000000": {
      "name": "海南省",
      "id": "460000000000"
    },
    "500000000000": {
      "name": "重庆市",
      "id": "500000000000"
    },
    "510000000000": {
      "name": "四川省",
      "id": "510000000000"
    },
    "520000000000": {
      "name": "贵州省",
      "id": "520000000000"
    },
    "530000000000": {
      "name": "云南省",
      "id": "530000000000"
    },
    "540000000000": {
      "name": "西藏自治区",
      "id": "540000000000"
    },
    "610000000000": {
      "name": "陕西省",
      "id": "610000000000"
    },
    "620000000000": {
      "name": "甘肃省",
      "id": "620000000000"
    },
    "630000000000": {
      "name": "青海省",
      "id": "630000000000"
    },
    "640000000000": {
      "name": "宁夏回族自治区",
      "id": "640000000000"
    },
    "650000000000": {
      "name": "新疆维吾尔自治区",
      "id": "650000000000"
    }
  };
  _exports.province_object = province_object;
});
;define("location-demo/resolver", ["exports", "ember-resolver"], function (_exports, _emberResolver) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _emberResolver.default;
  _exports.default = _default;
});
;define("location-demo/router", ["exports", "location-demo/config/environment"], function (_exports, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  const Router = Ember.Router.extend({
    location: _environment.default.locationType,
    rootURL: _environment.default.rootURL
  });
  Router.map(function () {});
  var _default = Router;
  _exports.default = _default;
});
;define("location-demo/services/ajax", ["exports", "ember-ajax/services/ajax"], function (_exports, _ajax) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _ajax.default;
    }
  });
});
;define("location-demo/services/region", ["exports", "location-demo/regions/country", "location-demo/regions/province", "location-demo/regions/city", "location-demo/regions/country_object", "location-demo/regions/province_object", "location-demo/regions/city_object"], function (_exports, _country, _province, _city, _country_object, _province_object, _city_object) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Service.extend({
    provinceOptions: _province.province,
    cityOptions: _city.city,
    areaOptions: _country.country,

    getCity(provinceId) {
      return provinceId ? _city.city[provinceId] : [];
    },

    getArea(cityId) {
      return cityId ? _country.country[cityId] : [];
    },

    getProvinceObject(id) {
      return _province_object.province_object[id] || '';
    },

    getCityObject(id) {
      return _city_object.city_object[id] || '';
    },

    getAreaObject(id) {
      return _country_object.country_object[id] || '';
    }

  });

  _exports.default = _default;
});
;define("location-demo/templates/application", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "MybWHHni",
    "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[0,\"\\n\"],[7,\"div\"],[11,\"class\",\"ui container\"],[9],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"ui centered grid\"],[9],[0,\"\\n        \"],[7,\"div\"],[11,\"class\",\"row\"],[9],[10],[0,\"\\n        \"],[7,\"div\"],[11,\"class\",\"row\"],[9],[10],[0,\"\\n        \"],[7,\"div\"],[11,\"class\",\"row\"],[9],[10],[0,\"\\n        \"],[7,\"div\"],[11,\"class\",\"row\"],[9],[0,\"\\n            \"],[7,\"a\"],[11,\"href\",\"https://github.com/wecatch/china_regions\"],[11,\"class\",\"ui large green button\"],[9],[0,\"Github\"],[10],[0,\"\\n            \"],[7,\"a\"],[11,\"href\",\"http://wecatch.me/\"],[11,\"class\",\"ui large green button\"],[9],[0,\"Wecatch\"],[10],[0,\"\\n        \"],[10],[0,\"\\n        \"],[7,\"div\"],[11,\"class\",\"row\"],[9],[10],[0,\"\\n        \"],[7,\"div\"],[11,\"class\",\"row\"],[9],[10],[0,\"\\n        \"],[7,\"div\"],[11,\"class\",\"row\"],[9],[0,\"\\n            \"],[4,\"region-show\",null,null,{\"statements\":[],\"parameters\":[]},null],[0,\"\\n        \"],[10],[0,\"\\n    \"],[10],[0,\"\\n\"],[10],[0,\"\\n\"],[7,\"div\"],[11,\"class\",\"ui text container\"],[9],[0,\"\\n    \"],[7,\"p\"],[11,\"style\",\"text-align:center;margin-top:250px;border-top:1px solid #eee;padding-top:1.1429em;\"],[9],[0,\"\\n        Powered by \"],[7,\"a\"],[11,\"href\",\"http://wecatch.me\"],[9],[0,\"wecatch\"],[10],[0,\"\\n    \"],[10],[0,\"\\n\"],[10],[0,\"\\n\"]],\"hasEval\":false}",
    "meta": {
      "moduleName": "location-demo/templates/application.hbs"
    }
  });

  _exports.default = _default;
});
;define("location-demo/templates/components/region-show", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "gpAHvyhN",
    "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[7,\"div\"],[11,\"class\",\"ui form\"],[9],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"inline fields\"],[9],[0,\"\\n        \"],[4,\"ui-select\",null,[[\"options\",\"search\",\"value\",\"placeholder\",\"namePath\",\"valuePath\"],[[25,[\"provinceOptions\"]],true,[29,\"mut\",[[25,[\"searchOptions\",\"province_id\"]]],null],\"省\",\"name\",\"id\"]],{\"statements\":[],\"parameters\":[]},null],[0,\"\\n        \"],[4,\"ui-select\",null,[[\"options\",\"placeholder\",\"search\",\"value\",\"namePath\",\"valuePath\"],[[25,[\"cityOptions\"]],\"市\",true,[29,\"mut\",[[25,[\"searchOptions\",\"city_id\"]]],null],\"name\",\"id\"]],{\"statements\":[],\"parameters\":[]},null],[0,\"\\n        \"],[4,\"ui-select\",null,[[\"options\",\"placeholder\",\"search\",\"value\",\"namePath\",\"valuePath\"],[[25,[\"areaOptions\"]],\"地区\",true,[29,\"mut\",[[25,[\"searchOptions\",\"area_id\"]]],null],\"name\",\"id\"]],{\"statements\":[],\"parameters\":[]},null],[0,\"\\n    \"],[10],[0,\"\\n    \"],[7,\"p\"],[9],[0,\"\\n        \"],[1,[25,[\"province\",\"name\"]],false],[0,\"\\n        \"],[1,[25,[\"city\",\"name\"]],false],[0,\"\\n        \"],[1,[25,[\"area\",\"name\"]],false],[0,\"\\n    \"],[10],[0,\"\\n    \"],[7,\"button\"],[11,\"class\",\"ui primary button\"],[9],[0,\"重置\"],[3,\"action\",[[24,0,[]],\"resetSearch\"]],[10],[0,\"\\n\"],[10],[0,\"\\n\\n\\n\"]],\"hasEval\":false}",
    "meta": {
      "moduleName": "location-demo/templates/components/region-show.hbs"
    }
  });

  _exports.default = _default;
});
;define("location-demo/utils/ember-uploader", ["exports", "ember-semantic-ui/utils/ember-uploader"], function (_exports, _emberUploader) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _emberUploader.default;
    }
  });
});
;define("location-demo/utils/file-object", ["exports", "ember-semantic-ui/utils/file-object"], function (_exports, _fileObject) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _fileObject.default;
    }
  });
});
;

;define('location-demo/config/environment', [], function() {
  var prefix = 'location-demo';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(decodeURIComponent(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

;
          if (!runningTests) {
            require("location-demo/app")["default"].create({"name":"location-demo","version":"0.0.0+53a2e374"});
          }
        
