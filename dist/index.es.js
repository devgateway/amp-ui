import React, { Component } from 'react';
import PropTypes from 'prop-types';

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css = ".ActivityPreview_preview_container__3tai0 {\n  font-family: 'open_sansregular', sans-serif;\n  margin-left: 30px;\n  margin-right: 50px;\n}\n\n.ActivityPreview_preview_title__1GDjY {\n  margin-left: 10px;\n  background-color: #FFFFFF;\n  color: #000000;\n  font-size: 1.5em;\n  font-weight: bold;\n  padding: 5px;\n  height: auto;\n  display: inline-block;\n}\n\n.ActivityPreview_preview_icons__3i4Vs {\n  display: inline-block;\n}\n\n.ActivityPreview_preview_icons__3i4Vs img {\n  height: 20px;\n  width: 20px;\n}\n\n.ActivityPreview_preview_icons__3i4Vs object {\n  height: 20px;\n  width: 20px;\n}\n\n.ActivityPreview_preview_icons__3i4Vs ul {\n  margin-left: 30px;\n  columns: 5;\n  column-rule: 1px solid #ebebeb;\n}\n\n.ActivityPreview_preview_icons__3i4Vs ul li {\n  list-style-type: none;\n  margin-left: 10px;\n  margin-right: 10px;\n  cursor: pointer;\n}\n\n.ActivityPreview_preview_status_container__2Thby {\n  margin-left: 10px;\n  margin-top: 20px;\n  padding: 10px;\n  background-color: #f5faff;\n}\n\n.ActivityPreview_inline_flex__1pvo5 {\n  display: inline-flex;\n}\n\n.ActivityPreview_preview_status_title__27GZY {\n  margin-left: 10px;\n  margin-right: 5px;\n}\n\n.ActivityPreview_preview_status_detail__D9NiA {\n  font-family: 'open_sansextrabold', sans-serif;\n  margin-right: 20px;\n}\n\n.ActivityPreview_status_title_class__1Bw1H {\n\n}\n\n.ActivityPreview_status_group_class__213C2 {\n\n}\n\n.ActivityPreview_preview_categories__1YrSS {\n  margin-top: 20px;\n  margin-left: 15px;\n  border-bottom: 1px solid #ebebeb;\n}\n\n.ActivityPreview_preview_categories__1YrSS ul {\n  columns: 5;\n  column-rule: 1px solid #ebebeb;\n  line-height: 150%;\n}\n\n.ActivityPreview_preview_categories__1YrSS ul li {\n  list-style-type: none;\n  font-size: 0.9em;\n  font-weight: bold;\n  color: #778293;\n  margin-left: 20px;\n  padding-left: 4px;\n  cursor: pointer;\n}\n\n.ActivityPreview_preview_categories__1YrSS ul li:hover {\n  color: #1d2531;\n  background-color: #f8f8f8;\n  position: relative;\n}\n\n.ActivityPreview_preview_categories__1YrSS ul li:hover:after {\n  /* content: url('../../../assets/images/arrow.svg'); */\n  height: 14px;\n  width: 14px;\n  display: block;\n  position: absolute;\n  left: -13px;\n  top: 2px;\n}\n\n.ActivityPreview_preview_category_selected__2gHPF {\n  color: #1d2531;\n  /* background-color: #f8f8f8; */\n  position: relative;\n}\n\n.ActivityPreview_preview_category_selected__2gHPF:after {\n  /* content: url('../../../assets/images/arrow.svg'); */\n  height: 14px;\n  width: 14px;\n  display: block;\n  position: absolute;\n  left: -13px;\n  top: 2px;\n}\n\n.ActivityPreview_preview_content__3ndG2 {\n  vertical-align: top;\n}\n\n.ActivityPreview_preview_summary__2M11Q {\n  width: 300px;\n}\n\n.ActivityPreview_summary_container__3c2Lt {\n  margin-top: 30px;\n  padding-right: 20px;\n}\n\n.ActivityPreview_summary_section_title__2yAmt {\n  background-color: #3a84b3;\n  color: #FFFFFF;\n  font-size: 1.3em;\n  margin-bottom: 15px;\n  margin-top: 30px;\n  padding-top: 15px;\n  padding-bottom: 10px;\n  padding-left: 20px;\n  padding-right: 20px;\n  border-top-left-radius: 5px;\n  border-top-right-radius: 5px;\n  display: block;\n}\n\n.ActivityPreview_summary_section_group__1prJe {\n  background-color: #f5faff;\n  margin-top: 15px;\n  padding-bottom: 10px;\n}\n\n.ActivityPreview_summary_field_name__2ii3f {\n  padding-left: 15px;\n}\n\n.ActivityPreview_summary_field_value__16N-w {\n  padding-left: 15px;\n  font-family: 'open_sansextrabold', sans-serif;\n  margin-bottom: 15px;\n}\n\n.ActivityPreview_main_group_container__4QVQf {\n  margin-top: 30px;\n}\n\n.ActivityPreview_section_title_class__1t12o {\n  font-size: 1.3em;\n  font-weight: bold;\n  margin-bottom: 15px;\n  margin-top: 30px;\n}\n\n.ActivityPreview_section_group_class__3WIHL {\n  margin-right: 10px;\n  margin-bottom: 20px;\n}\n\n.ActivityPreview_section_subtitle_class__1RBXN {\n  font-size: 1.1em;\n  font-weight: bold;\n  padding-bottom: 15px;\n  padding-top: 15px;\n  width: 100%;\n}\n\n.ActivityPreview_section_field_name__2mQY7 {\n  font-size: 0.85em;\n  color: #767676;\n  font-weight: bold;\n  margin-bottom: 5px;\n}\n\n.ActivityPreview_section_field_value__3h0kd {\n  font-weight: bold;\n  border-bottom: 1px solid #ebebeb;\n  margin-bottom: 10px;\n  padding-bottom: 10px;\n}\n\n.ActivityPreview_box_container__Xe8ey {\n  border: 1px solid #ebebeb;\n}\n\n.ActivityPreview_box_table__1zo_q {\n  border-top: 1px solid #ebebeb;\n  border-bottom: 1px solid #ebebeb;\n  border-collapse: collapse;\n  width: 100%;\n}\n\n.ActivityPreview_box_table__1zo_q td {\n  width: 33%;\n  padding-left: 20px;\n  border-bottom: 1px solid #ebebeb;\n}\n\n.ActivityPreview_box_table__1zo_q tr td:nth-child(2) {\n  border: 1px solid #ebebeb;\n}\n\n.ActivityPreview_two_box_table__2w-_w {\n  border-top: 1px solid #ebebeb;\n  border-bottom: 1px solid #ebebeb;\n  width: 100%;\n}\n\n.ActivityPreview_two_box_table__2w-_w td {\n  width: 50%;\n  padding-left: 20px;\n}\n\n.ActivityPreview_two_box_table__2w-_w tr td:first-child {\n  border-right: 1px solid #ebebeb;\n}\n\n.ActivityPreview_box_field_name__1rDaU {\n  font-size: 0.85em;\n  color: #767676;\n  font-weight: bold;\n  padding-top: 10px;\n  padding-bottom: 5px;\n}\n\n.ActivityPreview_box_field_value__1j3If {\n  font-weight: bold;\n  padding-bottom: 10px;\n}\n\n.ActivityPreview_box_field_value_tight__1D_p0 {\n  font-weight: bold;\n}\n\n.ActivityPreview_percent_field_name__2pqpU {\n  display: inline-block;\n  font-weight: bold;\n  padding-top: 10px;\n  padding-bottom: 5px;\n  margin-left: 10px;\n  width: 70%;\n}\n\n.ActivityPreview_percent_field_value__2FOrM {\n  display: inline-block;\n  color: #3a84b3;\n  font-weight: bold;\n  width: 15%;\n  padding-left: 5%;\n  padding-top: 10px;\n  vertical-align: top;\n}\n\n.ActivityPreview_project_cost_left__eDeh4 {\n  display: inline-block;\n  width: 55%;\n  background-color: #f8fff5;\n  margin-left: 10px;\n  padding-left: 20px;\n  padding-top: 10px;\n  border-top: 1px solid #ebebeb;\n  border-bottom: 1px solid #ebebeb;\n  border-right: 1px solid #ebebeb;\n}\n\n.ActivityPreview_project_cost_right__Y_NyF {\n  display: inline-block;\n  width: 43%;\n  padding-left: 20px;\n  padding-top: 10px;\n  border-top: 1px solid #ebebeb;\n  border-bottom: 1px solid #ebebeb;\n}\n\n.ActivityPreview_project_cost_title__1FhPK {\n  display: block;\n  font-size: 0.85em;\n  color: #767676;\n  font-weight: bold;\n  margin-bottom: 5px\n}\n\n.ActivityPreview_project_cost_currency__3Kqw4 {\n  display: block;\n  width: 100%;\n  font-size: 2em;\n  text-align: right;\n  padding-bottom: 10px;\n  padding-right: 10px;\n}\n\n.ActivityPreview_project_cost_date__1FQIr {\n  display: block;\n  width: 100%;\n  padding-bottom: 10px;\n  padding-top: 10px;\n  font-weight: bold;\n  line-height: 30px;\n}\n\n.ActivityPreview_sector_title__2C01I {\n  background-color: #f4f4f4;\n  color: #9d9d9d;\n  border-top: 1px solid #ebebeb;\n  border-bottom: 1px solid #ebebeb;\n  padding: 8px;\n  margin-bottom: 15px;\n  font-size: 0.85em;\n  font-weight: bold;\n}\n\n.ActivityPreview_inline__24u9t {\n  display: inline;\n}\n\n.ActivityPreview_block__1Thcz {\n  display: block;\n}\n\n.ActivityPreview_flex__cqbOH {\n  display: flex;\n}\n\n.ActivityPreview_hidden__2fpOd {\n  display: none;\n}\n\n.ActivityPreview_table_raw__30FeG {\n  display: table-row;\n}\n\n\n.ActivityPreview_alignRight__3vSRs {\n  text-align: right;\n}\n\n.ActivityPreview_tableCell__ePAEq {\n  padding-left: 10px;\n}\n\n.ActivityPreview_tableValue__2rOMc {\n  width: 100%;\n  float: left;\n  font-weight: bold;\n}\n\n.ActivityPreview_paddingBottom__xqyvT {\n  padding-bottom: 10px;\n}\n\n.ActivityPreview_paddingBottomLarge__3uVPO {\n  padding-bottom: 20px;\n}\n\n.ActivityPreview_box_table2__11qOl {\n  width: 100%;\n}\n\n.ActivityPreview_box_table2__11qOl td {\n  width: 33%;\n  padding-left: 20px;\n}\n\n.ActivityPreview_box_table2__11qOl tr td:nth-child(2) {\n  border-left: 1px solid #ebebeb;\n  border-right: 1px solid #ebebeb;\n}\n\n.ActivityPreview_tablify_inner_cell__2bfUh {\n  display: inline-block;\n  padding-bottom: 5px;\n  border-left: 1px solid #ebebeb;\n  border-bottom: 1px solid #ebebeb;\n}\n\n.ActivityPreview_tablify_outer_cell__F_Nuk {\n  display: inline-block;\n  padding-bottom: 5px;\n  border-bottom: 1px solid #ebebeb;\n}\n\n.ActivityPreview_nodata__I-8qU {\n  padding-left: 10px;\n  padding-bottom: 10px;\n  vertical-align: top;\n  font-weight: bold;\n}\n\n.ActivityPreview_noborder__1sM6U {\n  border: 0;\n}\n\n.ActivityPreview_top_warning_text__360ag {\n  color: red;\n  margin-left: 10px;\n  padding: 5px;\n  display: inline-block;\n  width: 100%;\n}\n\n.ActivityPreview_structure_title__3pAlL {\n  background-color: #f4f4f4;\n  color: #3a84b3;\n  border: 1px solid #ebebeb;\n  padding: 8px;\n  margin-bottom: 15px;\n  font-size: 1.2em;\n  font-weight: bold;\n  border-radius: 5px;\n  margin-top: 10px;\n}\n\n.ActivityPreview_structures_coordinates_table__kBTDh {\n  width: 50%;\n}\n\n.ActivityPreview_structures_coordinates_value__3cFsq {\n  border: none;\n  font-weight: bold;\n}\n";
var styles = { "preview_container": "ActivityPreview_preview_container__3tai0", "preview_title": "ActivityPreview_preview_title__1GDjY", "preview_icons": "ActivityPreview_preview_icons__3i4Vs", "preview_status_container": "ActivityPreview_preview_status_container__2Thby", "inline_flex": "ActivityPreview_inline_flex__1pvo5", "preview_status_title": "ActivityPreview_preview_status_title__27GZY", "preview_status_detail": "ActivityPreview_preview_status_detail__D9NiA", "status_title_class": "ActivityPreview_status_title_class__1Bw1H", "status_group_class": "ActivityPreview_status_group_class__213C2", "preview_categories": "ActivityPreview_preview_categories__1YrSS", "preview_category_selected": "ActivityPreview_preview_category_selected__2gHPF", "preview_content": "ActivityPreview_preview_content__3ndG2", "preview_summary": "ActivityPreview_preview_summary__2M11Q", "summary_container": "ActivityPreview_summary_container__3c2Lt", "summary_section_title": "ActivityPreview_summary_section_title__2yAmt", "summary_section_group": "ActivityPreview_summary_section_group__1prJe", "summary_field_name": "ActivityPreview_summary_field_name__2ii3f", "summary_field_value": "ActivityPreview_summary_field_value__16N-w", "main_group_container": "ActivityPreview_main_group_container__4QVQf", "section_title_class": "ActivityPreview_section_title_class__1t12o", "section_group_class": "ActivityPreview_section_group_class__3WIHL", "section_subtitle_class": "ActivityPreview_section_subtitle_class__1RBXN", "section_field_name": "ActivityPreview_section_field_name__2mQY7", "section_field_value": "ActivityPreview_section_field_value__3h0kd", "box_container": "ActivityPreview_box_container__Xe8ey", "box_table": "ActivityPreview_box_table__1zo_q", "two_box_table": "ActivityPreview_two_box_table__2w-_w", "box_field_name": "ActivityPreview_box_field_name__1rDaU", "box_field_value": "ActivityPreview_box_field_value__1j3If", "box_field_value_tight": "ActivityPreview_box_field_value_tight__1D_p0", "percent_field_name": "ActivityPreview_percent_field_name__2pqpU", "percent_field_value": "ActivityPreview_percent_field_value__2FOrM", "project_cost_left": "ActivityPreview_project_cost_left__eDeh4", "project_cost_right": "ActivityPreview_project_cost_right__Y_NyF", "project_cost_title": "ActivityPreview_project_cost_title__1FhPK", "project_cost_currency": "ActivityPreview_project_cost_currency__3Kqw4", "project_cost_date": "ActivityPreview_project_cost_date__1FQIr", "sector_title": "ActivityPreview_sector_title__2C01I", "inline": "ActivityPreview_inline__24u9t", "block": "ActivityPreview_block__1Thcz", "flex": "ActivityPreview_flex__cqbOH", "hidden": "ActivityPreview_hidden__2fpOd", "table_raw": "ActivityPreview_table_raw__30FeG", "alignRight": "ActivityPreview_alignRight__3vSRs", "tableCell": "ActivityPreview_tableCell__ePAEq", "tableValue": "ActivityPreview_tableValue__2rOMc", "paddingBottom": "ActivityPreview_paddingBottom__xqyvT", "paddingBottomLarge": "ActivityPreview_paddingBottomLarge__3uVPO", "box_table2": "ActivityPreview_box_table2__11qOl", "tablify_inner_cell": "ActivityPreview_tablify_inner_cell__2bfUh", "tablify_outer_cell": "ActivityPreview_tablify_outer_cell__F_Nuk", "nodata": "ActivityPreview_nodata__I-8qU", "noborder": "ActivityPreview_noborder__1sM6U", "top_warning_text": "ActivityPreview_top_warning_text__360ag", "structure_title": "ActivityPreview_structure_title__3pAlL", "structures_coordinates_table": "ActivityPreview_structures_coordinates_table__kBTDh", "structures_coordinates_value": "ActivityPreview_structures_coordinates_value__3cFsq" };
styleInject(css);

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};

var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

/**
 * Simple Field component that consists of a field title and field value
 * @author Nadejda Mandrescu
 */

var TestAPField = function (_Component) {
  inherits(TestAPField, _Component);
  createClass(TestAPField, null, [{
    key: 'instance',

    /**
     * Gets an instance of Simple Field
     * @param trnLabel the label to translate and use as a title. This label is also used as the component key.
     * @param value the field value
     * @param inline show title and value in the same row.
     * @param separator add or not an <hr> tag.
     * @param nameClass css class for the field label
     * @param valueClass css class for the field value
     * @return {SimpleField}
     */
    value: function instance(trnLabel, value) {
      var inline = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var separator = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
      var nameClass = arguments[4];
      var valueClass = arguments[5];

      return React.createElement(TestAPField, {
        key: trnLabel, title: this.props.translate(trnLabel), value: value, inline: inline, separator: separator,
        fieldNameClass: nameClass, fieldValueClass: valueClass });
    }
  }]);

  function TestAPField(props) {
    classCallCheck(this, TestAPField);

    var _this = possibleConstructorReturn(this, (TestAPField.__proto__ || Object.getPrototypeOf(TestAPField)).call(this, props));

    _this.props.ampLogger.log('constructore');
    _this.useSeparator = _this.props.separator !== false;
    _this.displayClass = _this.props.fieldClass || (_this.props.inline === true ? styles.inline : styles.block);
    return _this;
  }

  createClass(TestAPField, [{
    key: '_getValue',
    value: function _getValue() {
      var classNames = this.props.fieldValueClass + ' ' + this.displayClass;
      // To handle boolean fields we dont want to show 'false' as 'No Data'.
      var value = this.props.value || this.props.value === false ? this.props.value : this.props.translate('No Data');
      var displayValue = void 0;
      if (Array.isArray(value)) {
        if (value[0] instanceof Object) {
          displayValue = [];
          value.forEach(function (v) {
            return displayValue.push(v);
          });
        } else {
          displayValue = value.sort().join(', ');
        }
      } else if (typeof value === 'boolean') {
        displayValue = value === true ? this.props.translate('Yes') : this.props.translate('No');
      } else {
        displayValue = this.props.inline && this.props.value instanceof String ? value + ' ' : value;
      }
      if (this.props.useInnerHTML) {
        return React.createElement('div', { className: classNames, dangerouslySetInnerHTML: { __html: displayValue } });
      } else {
        return React.createElement(
          'div',
          { className: classNames },
          displayValue
        );
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var classNames = this.props.fieldNameClass + ' ' + this.displayClass;
      return React.createElement(
        'div',
        { className: this.displayClass },
        React.createElement(
          'div',
          { className: classNames },
          this.props.title
        ),
        this._getValue(),
        this.useSeparator ? React.createElement('hr', null) : ''
      );
    }
  }]);
  return TestAPField;
}(Component);


TestAPField.propTypes = {
  title: PropTypes.string,
  value: PropTypes.any,
  inline: PropTypes.bool,
  useInnerHTML: PropTypes.bool,
  fieldClass: PropTypes.string,
  fieldNameClass: PropTypes.string,
  fieldValueClass: PropTypes.string,
  separator: PropTypes.bool,
  ampLogger: PropTypes.object.isRequired,
  translate: PropTypes.func.isRequired
};

var TestingSection = function (_Component) {
  inherits(TestingSection, _Component);

  function TestingSection() {
    classCallCheck(this, TestingSection);
    return possibleConstructorReturn(this, (TestingSection.__proto__ || Object.getPrototypeOf(TestingSection)).apply(this, arguments));
  }

  createClass(TestingSection, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(
          'h2',
          null,
          'testing component'
        ),
        React.createElement(
          'div',
          null,
          'test translation: `DESKTOP = ',
          this.props.translate('DESKTOP'),
          '`'
        ),
        React.createElement(
          'div',
          null,
          'test APField:',
          React.createElement(TestAPField, { ampLogger: this.props.ampLogger, translate: this.props.translate })
        )
      );
    }
  }]);
  return TestingSection;
}(Component);

TestingSection.propTypes = {
  ampLogger: PropTypes.object.isRequired,
  translate: PropTypes.func.isRequired
};

var SERVER_URL = '__SERVER_URL__';
var BASE_REST_URL = '/rest';
var PROTOCOL = '__SERVER_PROTOCOL__';
var BASE_PORT = '__SERVER_PORT__';

var CONNECTION_TIMEOUT = 25000;
var CONNECTION_FORCED_TIMEOUT = CONNECTION_TIMEOUT + 5000;
var TIMEOUT_CHECK_INTERVAL = 5000;
var MAX_RETRY_ATEMPTS = 5;
var ERRORS_TO_RETRY = ['ESOCKETTIMEDOUT', 'ETIMEDOUT', 'ECONNRESET', 'EAI_AGAIN'];
var ERRORS_NO_AMP_SERVER = ['ECONNREFUSED', 'ENETUNREACH', 'ENOENT', 'ENOTFOUND', 'ENETDOWN', 'EHOSTDOWN', 'EHOSTUNREACH', 'ENONET'];
var CONNECTIVITY_CHECK_INTERVAL = '60000'; // 1 minutes

var WORKSPACE_URL = '/workspace';
var LOGIN_URL = '/';
var DESKTOP_URL = '/desktop';
var DESKTOP_CURRENT_URL = '/desktop/current';
var SYNCUP_REDIRECT_URL = '/syncUp/sync';
var SYNCUP_HISTORY_TARGET = 'history';
var SYNCUP_SUMMARY_URL = '/syncUpSummary';
var ACTIVITY_PREVIEW_URL = '/activity/preview';
var ACTIVITY_EDIT_URL = '/activity/edit';
var UPDATE_URL = '/update';
var SETUP_URL = '/setup';
var SETTINGS_URL = '/settings';

var COLLECTION_USERS = 'users';
var COLLECTION_WORKPACES = 'workspaces';
var COLLECTION_TEAMMEMBERS = 'teammembers';
var COLLECTION_CLIENT_SETTINGS = 'client-settings';
var COLLECTION_GLOBAL_SETTINGS = 'global-settings';
var COLLECTION_ACTIVITIES = 'activities';
var COLLECTION_FIELDS = 'fields';
var COLLECTION_POSSIBLE_VALUES = 'possible-values';
var COLLECTION_SYNCUP_LOG = 'syncup-log';
var COLLECTION_LANGS = 'languages';
var COLLECTION_WS_SETTINGS = 'workspace-settings';
var COLLECTION_CURRENCY_RATES = 'currency-rates';
var COLLECTION_FEATURE_MANAGER = 'feature-manager';
var COLLECTION_CONTACTS = 'contacts';
var COLLECTION_RESOURCES = 'resources';
var COLLECTION_REPOSITORY = 'repository';
var COLLECTION_GAZETTEER = 'gazetteer';
var COLLECTION_CALENDARS = 'calendars';
var COLLECTION_CHANGESETS = 'changesets';

var GAZETTEER_DISTANCE_DIVIDE = 3;

var DB_FILE_PREFIX = 'database';
var DB_FILE_EXTENSION = '.db';
var DB_COMMON_DATASTORE_OPTIONS = { autoload: false, corruptAlertThreshold: 0 };
var DB_AUTOCOMPACT_INTERVAL_MILISECONDS = 60000;
var DB_DEFAULT_QUERY_LIMIT = 999999999;

var LANGUAGE_ENGLISH = 'en';
var FS_LOCALES_DIRECTORY = 'lang';
var LANGUAGE_MASTER_TRANSLATIONS_FILE = 'master-translations';
var LANGUAGE_TRANSLATIONS_FILE = 'translations';
var LANGUAGE_NEW_TRANSLATIONS_MUST_SYNC = 'must_sync_translation.json';

var ASAR_DIR = 'app.asar';
var APP_DIRECTORY = 'app';
var TEST_DIRECTORY = 'test';
var STATIC_DIR = 'static';
var IMAGES_DIR = 'images';
var DOC_ICONS = 'doc-icons';
var DB_STATIC_DIR = 'db';
var MIGRATIONS_DIR = 'changelog';

var HASH_ITERATIONS = 100;
var DIGEST_ALGORITHM_SHA1 = 'SHA-1';
var DIGEST_ALGORITHM_SHA256 = 'SHA-256';

var ACTIVITY_EDIT = 'ACTIVITY_EDIT';
var ACTIVITY_VIEW = 'ACTIVITY_VIEW';

var SYNCUP_FORCE_DAYS = 14;
var SYNCUP_BEST_BEFORE_DAYS = 7;
var SYNCUP_NO_DATE = '1900-01-01T00:00:00.000+0000';
var SYNCUP_TYPE_TRANSLATIONS = 'translations';
var SYNCUP_TYPE_USERS = 'users';
var SYNCUP_TYPE_ASSETS = 'assets';
var SYNCUP_TYPE_WORKSPACES = 'workspaces';
var SYNCUP_TYPE_GS = 'global-settings';
var SYNCUP_TYPE_EXCHANGE_RATES = 'exchange-rates';
var SYNCUP_TYPE_FEATURE_MANAGER = 'feature-manager';
var SYNCUP_TYPE_WORKSPACE_MEMBERS = 'workspace-members';
var SYNCUP_TYPE_ALL_FIELDS = 'fields';
var SYNCUP_TYPE_ACTIVITIES_PULL = 'activities';
var SYNCUP_TYPE_ACTIVITIES_PUSH = 'activities-push';
var SYNCUP_TYPE_ACTIVITY_FIELDS = 'activity-fields';
var SYNCUP_TYPE_ACTIVITY_FIELDS_STRUCTURAL_CHANGES = 'activity-fields-structural-changes';
var SYNCUP_TYPE_CONTACTS_PULL = 'contacts';
var SYNCUP_TYPE_CONTACTS_PUSH = 'contacts-push';
var SYNCUP_TYPE_ACTIVITY_POSSIBLE_VALUES = 'activity-possible-values-fields';
var SYNCUP_TYPE_CONTACT_FIELDS = 'contact-fields';
var SYNCUP_TYPE_CONTACT_FIELDS_STRUCTURAL_CHANGES = 'contact-fields-structural-changes';
var SYNCUP_TYPE_CONTACT_POSSIBLE_VALUES = 'contact-possible-values-fields';
var SYNCUP_TYPE_RESOURCES_PULL = 'resources';
var SYNCUP_TYPE_RESOURCES_PUSH = 'resources-push';
var SYNCUP_TYPE_RESOURCE_FIELDS = 'resource-fields';
var SYNCUP_TYPE_RESOURCE_FIELDS_STRUCTURAL_CHANGES = 'resource-fields-structural-changes';
var SYNCUP_TYPE_RESOURCE_POSSIBLE_VALUES = 'resource-possible-values-fields';
var SYNCUP_TYPE_COMMON_POSSIBLE_VALUES = 'common-possible-values-fields';
var SYNCUP_TYPE_WORKSPACE_SETTINGS = 'workspace-settings';
var SYNCUP_TYPE_MAP_TILES = 'map-tiles';
var SYNCUP_TYPE_GAZETTEER = 'locators';
var SYNCUP_TYPE_CALENDARS = 'calendars';

var SYNCUP_STATUS_SUCCESS = 'SUCCESS';
var SYNCUP_STATUS_FAIL = 'FAIL';
var SYNCUP_STATUS_PARTIAL = 'PARTIAL';
var SYNCUP_STATUS_CANCELED = 'CANCELED';
var SYNCUP_SYNC_REQUESTED_AT = 'sync-date';
var SYNCUP_SYNC_REQUESTED_BY = 'requested-by';
var SYNCUP_DATETIME_FIELD = 'timestamp';
var SYNCUP_DIFF_LEFTOVER = 'syncup-diff-leftover';
var SYNCUP_DEPENDENCY_CHECK_INTERVAL = 10;
var SYNCUP_DETAILS_SYNCED = 'synced';
var SYNCUP_DETAILS_UNSYNCED = 'unsynced';
var SYNCUP_RESOURCE_PULL_BATCH_SIZE = 100;
var SYNCUP_ACTIVITIES_PULL_BATCH_SIZE = 100;
var SYNCUP_CONTACTS_PULL_BATCH_SIZE = 100;

var ACTIVITY_STATUS_DRAFT = 'ACTIVITY_STATUS_DRAFT';
var ACTIVITY_STATUS_UNVALIDATED = 'ACTIVITY_STATUS_UNVALIDATED';
var ACTIVITY_STATUS_VALIDATED = 'ACTIVITY_STATUS_VALIDATED';

var CURRENCY_HOUR = '00:00';
var DEFAULT_CURRENCY = 'USD';
var RATE_SAME_CURRENCY = 1;
var RATE_CURRENCY_NOT_FOUND = 1;
var CURRENCY_PAIR = 'currency-pair';
var VERSION_PATTERN = /(\d+)\.(\d+)(\.(\d+))?(-\w+)?/;
var VERSION_PATTERN_GROUPS_TO_EXTRACT = [1, 2, 4, 5];
var AMP_COUNTRY_LOGO = 'ampCountryFlag.png';
var ASSETS_DIRECTORY = 'assets';
var BASE_64_PNG_PREFIX = 'data:image/png;base64,';
// Holds the BASE64 representation of a a transparent image 1x1 in case we don't yet have the country flag
var TRANSPARENT_FLAG = 'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR4nGP6zwAAAgcBApocMXEAAAAASUVORK5CYII=';
var HELP_PDF_FILENAME = 'amp-help';
var HELP_DIR = 'help';
var ENDS_WITH_PUNCTUATION_REGEX = /[.!?,;:]$/;

var MAP_TILES_DIR = 'map-tiles';
var TILES_ZIP_FILE = 'map-tiles.zip';

/* eslint-disable max-len */
var MAP_MARKER_IMAGE = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAApCAYAAADAk4LOAAAFgUlEQVR4Aa1XA5BjWRTN2oW17d3YaZtr2962HUzbDNpjszW24mRt28p47v7zq/bXZtrp/lWnXr337j3nPCe85NcypgSFdugCpW5YoDAMRaIMqRi6aKq5E3YqDQO3qAwjVWrD8Ncq/RBpykd8oZUb/kaJutow8r1aP9II0WmLKLIsJyv1w/kqw9Ch2MYdB++12Onxee/QMwvf4/Dk/Lfp/i4nxTXtOoQ4pW5Aj7wpici1A9erdAN2OH64x8OSP9j3Ft3b7aWkTg/Fm91siTra0f9on5sQr9INejH6CUUUpavjFNq1B+Oadhxmnfa8RfEmN8VNAsQhPqF55xHkMzz3jSmChWU6f7/XZKNH+9+hBLOHYozuKQPxyMPUKkrX/K0uWnfFaJGS1QPRtZsOPtr3NsW0uyh6NNCOkU3Yz+bXbT3I8G3xE5EXLXtCXbbqwCO9zPQYPRTZ5vIDXD7U+w7rFDEoUUf7ibHIR4y6bLVPXrz8JVZEql13trxwue/uDivd3fkWRbS6/IA2bID4uk0UpF1N8qLlbBlXs4Ee7HLTfV1j54APvODnSfOWBqtKVvjgLKzF5YdEk5ewRkGlK0i33Eofffc7HT56jD7/6U+qH3Cx7SBLNntH5YIPvODnyfIXZYRVDPqgHtLs5ABHD3YzLuespb7t79FY34DjMwrVrcTuwlT55YMPvOBnRrJ4VXTdNnYug5ucHLBjEpt30701A3Ts+HEa73u6dT3FNWwflY86eMHPk+Yu+i6pzUpRrW7SNDg5JHR4KapmM5Wv2E8Tfcb1HoqqHMHU+uWDD7zg54mz5/2BSnizi9T1Dg4QQXLToGNCkb6tb1NU+QAlGr1++eADrzhn/u8Q2YZhQVlZ5+CAOtqfbhmaUCS1ezNFVm2imDbPmPng5wmz+gwh+oHDce0eUtQ6OGDIyR0uUhUsoO3vfDmmgOezH0mZN59x7MBi++WDL1g/eEiU3avlidO671bkLfwbw5XV2P8Pzo0ydy4t2/0eu33xYSOMOD8hTf4CrBtGMSoXfPLchX+J0ruSePw3LZeK0juPJbYzrhkH0io7B3k164hiGvawhOKMLkrQLyVpZg8rHFW7E2uHOL888IBPlNZ1FPzstSJM694fWr6RwpvcJK60+0HCILTBzZLFNdtAzJaohze60T8qBzyh5ZuOg5e7uwQppofEmf2++DYvmySqGBuKaicF1blQjhuHdvCIMvp8whTTfZzI7RldpwtSzL+F1+wkdZ2TBOW2gIF88PBTzD/gpeREAMEbxnJcaJHNHrpzji0gQCS6hdkEeYt9DF/2qPcEC8RM28Hwmr3sdNyht00byAut2k3gufWNtgtOEOFGUwcXWNDbdNbpgBGxEvKkOQsxivJx33iow0Vw5S6SVTrpVq11ysA2Rp7gTfPfktc6zhtXBBC+adRLshf6sG2RfHPZ5EAc4sVZ83yCN00Fk/4kggu40ZTvIEm5g24qtU4KjBrx/BTTH8ifVASAG7gKrnWxJDcU7x8X6Ecczhm3o6YicvsLXWfh3Ch1W0k8x0nXF+0fFxgt4phz8QvypiwCCFKMqXCnqXExjq10beH+UUA7+nG6mdG/Pu0f3LgFcGrl2s0kNNjpmoJ9o4B29CMO8dMT4Q5ox8uitF6fqsrJOr8qnwNbRzv6hSnG5wP+64C7h9lp30hKNtKdWjtdkbuPA19nJ7Tz3zR/ibgARbhb4AlhavcBebmTHcFl2fvYEnW0ox9xMxKBS8btJ+KiEbq9zA4RthQXDhPa0T9TEe69gWupwc6uBUphquXgf+/FrIjweHQS4/pduMe5ERUMHUd9xv8ZR98CxkS4F2n3EUrUZ10EYNw7BWm9x1GiPssi3GgiGRDKWRYZfXlON+dfNbM+GgIwYdwAAAAASUVORK5CYII=';
var MAP_MARKER_SHADOW = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACkAAAApCAQAAAACach9AAACMUlEQVR4Ae3ShY7jQBAE0Aoz/f9/HTMzhg1zrdKUrJbdx+Kd2nD8VNudfsL/Th///dyQN2TH6f3y/BGpC379rV+S+qqetBOxImNQXL8JCAr2V4iMQXHGNJxeCfZXhSRBcQMfvkOWUdtfzlLgAENmZDcmo2TVmt8OSM2eXxBp3DjHSMFutqS7SbmemzBiR+xpKCNUIRkdkkYxhAkyGoBvyQFEJEefwSmmvBfJuJ6aKqKWnAkvGZOaZXTUgFqYULWNSHUckZuR1HIIimUExutRxwzOLROIG4vKmCKQt364mIlhSyzAf1m9lHZHJZrlAOMMztRRiKimp/rpdJDc9Awry5xTZCte7FHtuS8wJgeYGrex28xNTd086Dik7vUMscQOa8y4DoGtCCSkAKlNwpgNtphjrC6MIHUkR6YWxxs6Sc5xqn222mmCRFzIt8lEdKx+ikCtg91qS2WpwVfBelJCiQJwvzixfI9cxZQWgiSJelKnwBElKYtDOb2MFbhmUigbReQBV0Cg4+qMXSxXSyGUn4UbF8l+7qdSGnTC0XLCmahIgUHLhLOhpVCtw4CzYXvLQWQbJNmxoCsOKAxSgBJno75avolkRw8iIAFcsdc02e9iyCd8tHwmeSSoKTowIgvscSGZUOA7PuCN5b2BX9mQM7S0wYhMNU74zgsPBj3HU7wguAfnxxjFQGBE6pwN+GjME9zHY7zGp8wVxMShYX9NXvEWD3HbwJf4giO4CFIQxXScH1/TM+04kkBiAAAAAElFTkSuQmCC';
var MAP_MARKER_CIRCLE_RED = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QA/wD/AP+gvaeTAAAAB3RJTUUH4gcbFwogeohhEAAAA1lJREFUOMullc1rHGUcxz+/Z2Z20zGE7luyQbyIdiExre6aNvSySEBBKB71VAI5mGJA9g8QpR48aVGK6K160ptYD7Wxh4CUkJrFGpKyKWgQmnXfaZt9yWaeeTzsTExj1YO/0/DMzGd+b9/vCEH8cu51jsQQkAEmgFRwVgM2gRLQO/zwyatfAyCPgUWAV4A5YAZIAnZwzwPqwApwBfge6B+GyhFYGngXOA+4ABjzaN4i4VUH+BJ4D6iEh/YR2GfAawcgY1BPuFjDwwDo3V38dmcAFXGBBWAceDOEhsBIkNkA5vs4yQSx2Twjp3PY8dig3maL+6trtG4s49UboBTBO2XgbaBvXcg8B/Aq8D7g4PsMPfM0TxXews0+zx937vD78o9UNzbRjk3qpTwjL5yk++s2XqMZtmAC+BnYsoNpzgEuxuAkEzx5YZ6+Y1N85yK19Q2M5w3aZ9ukpibJFhYZX5jntw8+hGYrLH8OWFLBasyEfYvN5rHGRileukyleBuMQSwLsSwwhkrxNsVLl7HTo0TzZ+l6HsGYZoCMCtJNhgMYOZ2jvPoTtfUNlG0d3U2UbVFb36Bya434mWlqCjoDaBKYUMHS2gDW8DB2PEZr6+5BmY8L43k0S1u4yQS+e4ydTpuO1rZAyub/hgg97VHutjkeiaIYyMkL98xrtohlnkXsf/6W2DbxzAm69Qb9Bw8REXpa71d73apioM06IvjtDvdX1xiffpHU1CS+p/8G8z1NamqS9HSOezdX2G+3QQSBusCmYiD0lTD91o1ldKVKtrDIWPYUiGC0xmgNIoxlT5ErLLK7U2b72tJhKa44SpVCLZ8DvgLccLHHF+ax06NUbq3RLG0BEM+cID2dY3enzNpHn9As3UUGamlbIm/4xnwXAiPAx4E2wfchESeaP0v8zDRuMgFAt97g3s0Vtq8t0anWQhgCn0Ytq+Ab0z/sNmPA54fNoet51BT47jEQof/g4V89C0oV+MYStWAwFYU84jYVBq5RBs4j4rqOQ8rz2Kk16GkPETnICmgLfGGJuuhjKr4xxIei/22wAsmu1vZOt01P630JDFaJXHGUur7v+31tDPFIlJd/uMrBiP7tFyCQavT3qPa6VYFNR6nSntZ7jlIY4Hgkwuz1bwH4E5mCXIBLQ5HnAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDE4LTA3LTI3VDIxOjEwOjMyKzAyOjAw7q6GnwAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxOC0wNy0yN1QyMToxMDozMiswMjowMJ/zPiMAAAAASUVORK5CYII=';
var MAP_MARKER_CIRCLE_GREEN = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4gcbFBg6/VhW4AAAA5VJREFUOMullUFoHFUYx3/vzexku8VkdzPrpgpWNJom4Jo0NaSnIkHrJRb1UFAsXmq3KlivJqCHhJ4qsQdtmksVFKQgYkTa0ErxUCMhad1CQrQ0DbaJ291kd91kJrs7M89DZpo0BBT8z2V47/F73/fe9/+ewFem9zCb1T8YDQMtQBuQ8IdzwDQwO9BXXNu8PjX6DQBiK6x/MGoAB4G3gG7ABHR/2gHywDhwDrg40FesboaKLbAm4CPgCBAB8PAeiFwig18L+BL4eKCvmN2YfxB2BkgDEY/1LyJ3kAyZJEMmEbmDYNzfMA0M9w9GkwFHZHoPB2l+6i/Aw6MxFKMntp+u+hRxvQGAZafEROkGlwtXyTuFzdGeAd4f6CtWg7M56KeJh0dzeDfHH32dpNbIxGKGS4WfAWiJNdO763m66lN8fvdrbq7NB9AjwI/AqHg5cywMfAW8GkT24WNp9KrG0NQImfwMjucAoEudlNnKib1HqeoVTs6dZZlSAP0WeEP6pdEdxN4T209Sa2RoaoTJ7HWUUmhCQxMaSikms9cZmhqhSX+YA3X7cG0HJRQ+o0X6dWYGF9BVn+LXxWtk8jPo0mCrdGmQyc8wkf2N7ngHIufiWDWUUCbQJv2i1QEe0nYS1xv4ozB3P83t5HgOvy/fwozEiXhhrIUynuXqSqiE5H9KInArDtZfZWpLFXTfTg5glN1Vlp0SLbFmdKmjlNoWokudp+NPkLOXKNXKCCFwbadmV1fuSd+beYnE8mwmSjd4bleKlNmK41W3SbdKymylq6mdX+5OslqzEEqAJA9MS2DW9yYAlwtXybpLnNh7lM5k+/ruysVVLkIIOpPtfND5NgsrWS7cvrIOW9e4NLRZ7fydZuennrANHBKI0Kpnc8v+k46GPfTufoEno4/zyM4kz5h7eOWpl3iz7TUKayVOTQ4zX76DFBJgVUjRf3zo75nAKRd9o6clkptr85ycO8uBun10xzt4NtG23rvsJc7P/sCF21fI2rkN60m+kIY2FpJyo9v4Bh8GDgUWdG0HkXOJeGEkglKtfP/MhBAB7DuhqfR7p62sRGy4229Bx3yjWxKJHgmhEho5d5kFK4vl2EhkAFtF8pnQVPrd01bWVYponfHvDVYJZbq2o9uLK7i2U/Nvc1wIcU4a2tg7n5SqrlLEjTpevDSK+C9PgBIqUVuqYOdW7gHT0tBm06eKlZCUKCBqGPSMfQ/APy1Xg2v6KIsFAAAAAElFTkSuQmCC';
/* eslint-enable max-len */
var POLYGON_BASE_COLOR = '#3388ff';

var DG_COMPANY_NAME = 'Development Gateway';
var DG_ADDRESS_1 = '1110 Vermont Ave, NW, Suite 500';
var DG_ADDRESS_2 = 'Washington, DC 20005 USA';
var DG_CONTACT_INFO = 'info@developmentgateway.org, Tel: +1.202.572.9200, Fax: +1 202.572.9290';

var LOG_DIR = 'logs';
var LOG_FILE_NAME = 'ampoffline';
var LOG_FILE_EXTENSION = 'log';

// Message constants
// total amount of time the message stays visible
var MESSAGE_TIMEOUT = 10 * 1000;
// when it's this amount of time left, we nofity the user that the message is about to disappear
var MESSAGE_DISAPPEAR_TIMEOUT = MESSAGE_TIMEOUT / 5;
var MESSAGE_CHECK_INTERVAL = 100;
// how long should the enter/leave animation run(ms)
// (if you change this you'll wanna change it in style.css, too)
var MESSAGE_ANIMATION_DURATION = 500;

// this is the internal date format used to store and sync up dates
var INTERNAL_DATE_FORMAT = 'YYYY-MM-DDTHH:mm:ss.SSSZ';
// currently supported max & min years in AMP, i.e. from 1970-01-01 till 2050-12-31
var MIN_SUPPORTED_YEAR = 1970;
var MAX_SUPPORTED_YEAR = 2050;

var UPDATES_DIR = 'updates';
var CONTENT_DISPOSITION_HEADER = 'Content-Disposition';
var UPDATE_TMP_FILE = 'amp-offline-installer.tmp';

var OTHER_ID = 999999999;
var NR_SYNC_HISTORY_ENTRIES = 20;
var NR_LOG_FILES = 100;
// https://en.wikipedia.org/wiki/ISO_8601#Durations, example: "P1Y2M10DT2H30M"
var OLD_SYNC_LOGS_DURATION_ISO_8601 = 'P6M';
var NR_OLD_SYNC_LOGS_TO_KEEP_MINIMUM = NR_SYNC_HISTORY_ENTRIES;

var MASTER_BRANCH = 'master';
var DEVELOP_BRANCH = 'develop';
var RELEASE_BRANCH_REGEX = /release\//;
var RELEASE_BRANCHES = [MASTER_BRANCH, RELEASE_BRANCH_REGEX];

var DISABLE_CHANGELOGS = 'DISABLE_CHANGELOGS';

var Constants = Object.freeze({
  SERVER_URL: SERVER_URL,
  BASE_REST_URL: BASE_REST_URL,
  PROTOCOL: PROTOCOL,
  BASE_PORT: BASE_PORT,
  CONNECTION_TIMEOUT: CONNECTION_TIMEOUT,
  CONNECTION_FORCED_TIMEOUT: CONNECTION_FORCED_TIMEOUT,
  TIMEOUT_CHECK_INTERVAL: TIMEOUT_CHECK_INTERVAL,
  MAX_RETRY_ATEMPTS: MAX_RETRY_ATEMPTS,
  ERRORS_TO_RETRY: ERRORS_TO_RETRY,
  ERRORS_NO_AMP_SERVER: ERRORS_NO_AMP_SERVER,
  CONNECTIVITY_CHECK_INTERVAL: CONNECTIVITY_CHECK_INTERVAL,
  WORKSPACE_URL: WORKSPACE_URL,
  LOGIN_URL: LOGIN_URL,
  DESKTOP_URL: DESKTOP_URL,
  DESKTOP_CURRENT_URL: DESKTOP_CURRENT_URL,
  SYNCUP_REDIRECT_URL: SYNCUP_REDIRECT_URL,
  SYNCUP_HISTORY_TARGET: SYNCUP_HISTORY_TARGET,
  SYNCUP_SUMMARY_URL: SYNCUP_SUMMARY_URL,
  ACTIVITY_PREVIEW_URL: ACTIVITY_PREVIEW_URL,
  ACTIVITY_EDIT_URL: ACTIVITY_EDIT_URL,
  UPDATE_URL: UPDATE_URL,
  SETUP_URL: SETUP_URL,
  SETTINGS_URL: SETTINGS_URL,
  COLLECTION_USERS: COLLECTION_USERS,
  COLLECTION_WORKPACES: COLLECTION_WORKPACES,
  COLLECTION_TEAMMEMBERS: COLLECTION_TEAMMEMBERS,
  COLLECTION_CLIENT_SETTINGS: COLLECTION_CLIENT_SETTINGS,
  COLLECTION_GLOBAL_SETTINGS: COLLECTION_GLOBAL_SETTINGS,
  COLLECTION_ACTIVITIES: COLLECTION_ACTIVITIES,
  COLLECTION_FIELDS: COLLECTION_FIELDS,
  COLLECTION_POSSIBLE_VALUES: COLLECTION_POSSIBLE_VALUES,
  COLLECTION_SYNCUP_LOG: COLLECTION_SYNCUP_LOG,
  COLLECTION_LANGS: COLLECTION_LANGS,
  COLLECTION_WS_SETTINGS: COLLECTION_WS_SETTINGS,
  COLLECTION_CURRENCY_RATES: COLLECTION_CURRENCY_RATES,
  COLLECTION_FEATURE_MANAGER: COLLECTION_FEATURE_MANAGER,
  COLLECTION_CONTACTS: COLLECTION_CONTACTS,
  COLLECTION_RESOURCES: COLLECTION_RESOURCES,
  COLLECTION_REPOSITORY: COLLECTION_REPOSITORY,
  COLLECTION_GAZETTEER: COLLECTION_GAZETTEER,
  COLLECTION_CALENDARS: COLLECTION_CALENDARS,
  COLLECTION_CHANGESETS: COLLECTION_CHANGESETS,
  GAZETTEER_DISTANCE_DIVIDE: GAZETTEER_DISTANCE_DIVIDE,
  DB_FILE_PREFIX: DB_FILE_PREFIX,
  DB_FILE_EXTENSION: DB_FILE_EXTENSION,
  DB_COMMON_DATASTORE_OPTIONS: DB_COMMON_DATASTORE_OPTIONS,
  DB_AUTOCOMPACT_INTERVAL_MILISECONDS: DB_AUTOCOMPACT_INTERVAL_MILISECONDS,
  DB_DEFAULT_QUERY_LIMIT: DB_DEFAULT_QUERY_LIMIT,
  LANGUAGE_ENGLISH: LANGUAGE_ENGLISH,
  FS_LOCALES_DIRECTORY: FS_LOCALES_DIRECTORY,
  LANGUAGE_MASTER_TRANSLATIONS_FILE: LANGUAGE_MASTER_TRANSLATIONS_FILE,
  LANGUAGE_TRANSLATIONS_FILE: LANGUAGE_TRANSLATIONS_FILE,
  LANGUAGE_NEW_TRANSLATIONS_MUST_SYNC: LANGUAGE_NEW_TRANSLATIONS_MUST_SYNC,
  ASAR_DIR: ASAR_DIR,
  APP_DIRECTORY: APP_DIRECTORY,
  TEST_DIRECTORY: TEST_DIRECTORY,
  STATIC_DIR: STATIC_DIR,
  IMAGES_DIR: IMAGES_DIR,
  DOC_ICONS: DOC_ICONS,
  DB_STATIC_DIR: DB_STATIC_DIR,
  MIGRATIONS_DIR: MIGRATIONS_DIR,
  HASH_ITERATIONS: HASH_ITERATIONS,
  DIGEST_ALGORITHM_SHA1: DIGEST_ALGORITHM_SHA1,
  DIGEST_ALGORITHM_SHA256: DIGEST_ALGORITHM_SHA256,
  ACTIVITY_EDIT: ACTIVITY_EDIT,
  ACTIVITY_VIEW: ACTIVITY_VIEW,
  SYNCUP_FORCE_DAYS: SYNCUP_FORCE_DAYS,
  SYNCUP_BEST_BEFORE_DAYS: SYNCUP_BEST_BEFORE_DAYS,
  SYNCUP_NO_DATE: SYNCUP_NO_DATE,
  SYNCUP_TYPE_TRANSLATIONS: SYNCUP_TYPE_TRANSLATIONS,
  SYNCUP_TYPE_USERS: SYNCUP_TYPE_USERS,
  SYNCUP_TYPE_ASSETS: SYNCUP_TYPE_ASSETS,
  SYNCUP_TYPE_WORKSPACES: SYNCUP_TYPE_WORKSPACES,
  SYNCUP_TYPE_GS: SYNCUP_TYPE_GS,
  SYNCUP_TYPE_EXCHANGE_RATES: SYNCUP_TYPE_EXCHANGE_RATES,
  SYNCUP_TYPE_FEATURE_MANAGER: SYNCUP_TYPE_FEATURE_MANAGER,
  SYNCUP_TYPE_WORKSPACE_MEMBERS: SYNCUP_TYPE_WORKSPACE_MEMBERS,
  SYNCUP_TYPE_ALL_FIELDS: SYNCUP_TYPE_ALL_FIELDS,
  SYNCUP_TYPE_ACTIVITIES_PULL: SYNCUP_TYPE_ACTIVITIES_PULL,
  SYNCUP_TYPE_ACTIVITIES_PUSH: SYNCUP_TYPE_ACTIVITIES_PUSH,
  SYNCUP_TYPE_ACTIVITY_FIELDS: SYNCUP_TYPE_ACTIVITY_FIELDS,
  SYNCUP_TYPE_ACTIVITY_FIELDS_STRUCTURAL_CHANGES: SYNCUP_TYPE_ACTIVITY_FIELDS_STRUCTURAL_CHANGES,
  SYNCUP_TYPE_CONTACTS_PULL: SYNCUP_TYPE_CONTACTS_PULL,
  SYNCUP_TYPE_CONTACTS_PUSH: SYNCUP_TYPE_CONTACTS_PUSH,
  SYNCUP_TYPE_ACTIVITY_POSSIBLE_VALUES: SYNCUP_TYPE_ACTIVITY_POSSIBLE_VALUES,
  SYNCUP_TYPE_CONTACT_FIELDS: SYNCUP_TYPE_CONTACT_FIELDS,
  SYNCUP_TYPE_CONTACT_FIELDS_STRUCTURAL_CHANGES: SYNCUP_TYPE_CONTACT_FIELDS_STRUCTURAL_CHANGES,
  SYNCUP_TYPE_CONTACT_POSSIBLE_VALUES: SYNCUP_TYPE_CONTACT_POSSIBLE_VALUES,
  SYNCUP_TYPE_RESOURCES_PULL: SYNCUP_TYPE_RESOURCES_PULL,
  SYNCUP_TYPE_RESOURCES_PUSH: SYNCUP_TYPE_RESOURCES_PUSH,
  SYNCUP_TYPE_RESOURCE_FIELDS: SYNCUP_TYPE_RESOURCE_FIELDS,
  SYNCUP_TYPE_RESOURCE_FIELDS_STRUCTURAL_CHANGES: SYNCUP_TYPE_RESOURCE_FIELDS_STRUCTURAL_CHANGES,
  SYNCUP_TYPE_RESOURCE_POSSIBLE_VALUES: SYNCUP_TYPE_RESOURCE_POSSIBLE_VALUES,
  SYNCUP_TYPE_COMMON_POSSIBLE_VALUES: SYNCUP_TYPE_COMMON_POSSIBLE_VALUES,
  SYNCUP_TYPE_WORKSPACE_SETTINGS: SYNCUP_TYPE_WORKSPACE_SETTINGS,
  SYNCUP_TYPE_MAP_TILES: SYNCUP_TYPE_MAP_TILES,
  SYNCUP_TYPE_GAZETTEER: SYNCUP_TYPE_GAZETTEER,
  SYNCUP_TYPE_CALENDARS: SYNCUP_TYPE_CALENDARS,
  SYNCUP_STATUS_SUCCESS: SYNCUP_STATUS_SUCCESS,
  SYNCUP_STATUS_FAIL: SYNCUP_STATUS_FAIL,
  SYNCUP_STATUS_PARTIAL: SYNCUP_STATUS_PARTIAL,
  SYNCUP_STATUS_CANCELED: SYNCUP_STATUS_CANCELED,
  SYNCUP_SYNC_REQUESTED_AT: SYNCUP_SYNC_REQUESTED_AT,
  SYNCUP_SYNC_REQUESTED_BY: SYNCUP_SYNC_REQUESTED_BY,
  SYNCUP_DATETIME_FIELD: SYNCUP_DATETIME_FIELD,
  SYNCUP_DIFF_LEFTOVER: SYNCUP_DIFF_LEFTOVER,
  SYNCUP_DEPENDENCY_CHECK_INTERVAL: SYNCUP_DEPENDENCY_CHECK_INTERVAL,
  SYNCUP_DETAILS_SYNCED: SYNCUP_DETAILS_SYNCED,
  SYNCUP_DETAILS_UNSYNCED: SYNCUP_DETAILS_UNSYNCED,
  SYNCUP_RESOURCE_PULL_BATCH_SIZE: SYNCUP_RESOURCE_PULL_BATCH_SIZE,
  SYNCUP_ACTIVITIES_PULL_BATCH_SIZE: SYNCUP_ACTIVITIES_PULL_BATCH_SIZE,
  SYNCUP_CONTACTS_PULL_BATCH_SIZE: SYNCUP_CONTACTS_PULL_BATCH_SIZE,
  ACTIVITY_STATUS_DRAFT: ACTIVITY_STATUS_DRAFT,
  ACTIVITY_STATUS_UNVALIDATED: ACTIVITY_STATUS_UNVALIDATED,
  ACTIVITY_STATUS_VALIDATED: ACTIVITY_STATUS_VALIDATED,
  CURRENCY_HOUR: CURRENCY_HOUR,
  DEFAULT_CURRENCY: DEFAULT_CURRENCY,
  RATE_SAME_CURRENCY: RATE_SAME_CURRENCY,
  RATE_CURRENCY_NOT_FOUND: RATE_CURRENCY_NOT_FOUND,
  CURRENCY_PAIR: CURRENCY_PAIR,
  VERSION_PATTERN: VERSION_PATTERN,
  VERSION_PATTERN_GROUPS_TO_EXTRACT: VERSION_PATTERN_GROUPS_TO_EXTRACT,
  AMP_COUNTRY_LOGO: AMP_COUNTRY_LOGO,
  ASSETS_DIRECTORY: ASSETS_DIRECTORY,
  BASE_64_PNG_PREFIX: BASE_64_PNG_PREFIX,
  TRANSPARENT_FLAG: TRANSPARENT_FLAG,
  HELP_PDF_FILENAME: HELP_PDF_FILENAME,
  HELP_DIR: HELP_DIR,
  ENDS_WITH_PUNCTUATION_REGEX: ENDS_WITH_PUNCTUATION_REGEX,
  MAP_TILES_DIR: MAP_TILES_DIR,
  TILES_ZIP_FILE: TILES_ZIP_FILE,
  MAP_MARKER_IMAGE: MAP_MARKER_IMAGE,
  MAP_MARKER_SHADOW: MAP_MARKER_SHADOW,
  MAP_MARKER_CIRCLE_RED: MAP_MARKER_CIRCLE_RED,
  MAP_MARKER_CIRCLE_GREEN: MAP_MARKER_CIRCLE_GREEN,
  POLYGON_BASE_COLOR: POLYGON_BASE_COLOR,
  DG_COMPANY_NAME: DG_COMPANY_NAME,
  DG_ADDRESS_1: DG_ADDRESS_1,
  DG_ADDRESS_2: DG_ADDRESS_2,
  DG_CONTACT_INFO: DG_CONTACT_INFO,
  LOG_DIR: LOG_DIR,
  LOG_FILE_NAME: LOG_FILE_NAME,
  LOG_FILE_EXTENSION: LOG_FILE_EXTENSION,
  MESSAGE_TIMEOUT: MESSAGE_TIMEOUT,
  MESSAGE_DISAPPEAR_TIMEOUT: MESSAGE_DISAPPEAR_TIMEOUT,
  MESSAGE_CHECK_INTERVAL: MESSAGE_CHECK_INTERVAL,
  MESSAGE_ANIMATION_DURATION: MESSAGE_ANIMATION_DURATION,
  INTERNAL_DATE_FORMAT: INTERNAL_DATE_FORMAT,
  MIN_SUPPORTED_YEAR: MIN_SUPPORTED_YEAR,
  MAX_SUPPORTED_YEAR: MAX_SUPPORTED_YEAR,
  UPDATES_DIR: UPDATES_DIR,
  CONTENT_DISPOSITION_HEADER: CONTENT_DISPOSITION_HEADER,
  UPDATE_TMP_FILE: UPDATE_TMP_FILE,
  OTHER_ID: OTHER_ID,
  NR_SYNC_HISTORY_ENTRIES: NR_SYNC_HISTORY_ENTRIES,
  NR_LOG_FILES: NR_LOG_FILES,
  OLD_SYNC_LOGS_DURATION_ISO_8601: OLD_SYNC_LOGS_DURATION_ISO_8601,
  NR_OLD_SYNC_LOGS_TO_KEEP_MINIMUM: NR_OLD_SYNC_LOGS_TO_KEEP_MINIMUM,
  MASTER_BRANCH: MASTER_BRANCH,
  DEVELOP_BRANCH: DEVELOP_BRANCH,
  RELEASE_BRANCH_REGEX: RELEASE_BRANCH_REGEX,
  RELEASE_BRANCHES: RELEASE_BRANCHES,
  DISABLE_CHANGELOGS: DISABLE_CHANGELOGS
});

var index = { TestAPField: TestAPField, TestingSection: TestingSection, Constants: Constants };

export default index;
export { TestAPField, TestingSection, Constants };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguZXMuanMiLCJzb3VyY2VzIjpbIi4uL25vZGVfbW9kdWxlcy9zdHlsZS1pbmplY3QvZGlzdC9zdHlsZS1pbmplY3QuZXMuanMiLCIuLi9zcmMvYWN0aXZpdHlQcmV2aWV3L2NvbXBvbmVudHMvVGVzdEFQRmllbGQuanMiLCIuLi9zcmMvYWN0aXZpdHlQcmV2aWV3L2NvbXBvbmVudHMvVGVzdGluZ1NlY3Rpb24uanMiLCIuLi9zcmMvdXRpbHMvQ29uc3RhbnRzLmpzIiwiLi4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIHN0eWxlSW5qZWN0KGNzcywgcmVmKSB7XG4gIGlmICggcmVmID09PSB2b2lkIDAgKSByZWYgPSB7fTtcbiAgdmFyIGluc2VydEF0ID0gcmVmLmluc2VydEF0O1xuXG4gIGlmICghY3NzIHx8IHR5cGVvZiBkb2N1bWVudCA9PT0gJ3VuZGVmaW5lZCcpIHsgcmV0dXJuOyB9XG5cbiAgdmFyIGhlYWQgPSBkb2N1bWVudC5oZWFkIHx8IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF07XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gIHN0eWxlLnR5cGUgPSAndGV4dC9jc3MnO1xuXG4gIGlmIChpbnNlcnRBdCA9PT0gJ3RvcCcpIHtcbiAgICBpZiAoaGVhZC5maXJzdENoaWxkKSB7XG4gICAgICBoZWFkLmluc2VydEJlZm9yZShzdHlsZSwgaGVhZC5maXJzdENoaWxkKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaGVhZC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGhlYWQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9XG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgc3R5bGVJbmplY3Q7XG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vLi4vYWN0aXZpdHlBc3NldHMvc3R5bGVzaGVldHMvQWN0aXZpdHlQcmV2aWV3LmNzcyc7XG5cblxuLyoqXG4gKiBTaW1wbGUgRmllbGQgY29tcG9uZW50IHRoYXQgY29uc2lzdHMgb2YgYSBmaWVsZCB0aXRsZSBhbmQgZmllbGQgdmFsdWVcbiAqIEBhdXRob3IgTmFkZWpkYSBNYW5kcmVzY3VcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGVzdEFQRmllbGQgZXh0ZW5kcyBDb21wb25lbnQge1xuICAvKipcbiAgICogR2V0cyBhbiBpbnN0YW5jZSBvZiBTaW1wbGUgRmllbGRcbiAgICogQHBhcmFtIHRybkxhYmVsIHRoZSBsYWJlbCB0byB0cmFuc2xhdGUgYW5kIHVzZSBhcyBhIHRpdGxlLiBUaGlzIGxhYmVsIGlzIGFsc28gdXNlZCBhcyB0aGUgY29tcG9uZW50IGtleS5cbiAgICogQHBhcmFtIHZhbHVlIHRoZSBmaWVsZCB2YWx1ZVxuICAgKiBAcGFyYW0gaW5saW5lIHNob3cgdGl0bGUgYW5kIHZhbHVlIGluIHRoZSBzYW1lIHJvdy5cbiAgICogQHBhcmFtIHNlcGFyYXRvciBhZGQgb3Igbm90IGFuIDxocj4gdGFnLlxuICAgKiBAcGFyYW0gbmFtZUNsYXNzIGNzcyBjbGFzcyBmb3IgdGhlIGZpZWxkIGxhYmVsXG4gICAqIEBwYXJhbSB2YWx1ZUNsYXNzIGNzcyBjbGFzcyBmb3IgdGhlIGZpZWxkIHZhbHVlXG4gICAqIEByZXR1cm4ge1NpbXBsZUZpZWxkfVxuICAgKi9cbiAgc3RhdGljIGluc3RhbmNlKHRybkxhYmVsLCB2YWx1ZSwgaW5saW5lID0gZmFsc2UsIHNlcGFyYXRvciA9IGZhbHNlLCBuYW1lQ2xhc3MsIHZhbHVlQ2xhc3MpIHtcbiAgICByZXR1cm4gKDxUZXN0QVBGaWVsZFxuICAgICAga2V5PXt0cm5MYWJlbH0gdGl0bGU9e3RoaXMucHJvcHMudHJhbnNsYXRlKHRybkxhYmVsKX0gdmFsdWU9e3ZhbHVlfSBpbmxpbmU9e2lubGluZX0gc2VwYXJhdG9yPXtzZXBhcmF0b3J9XG4gICAgICBmaWVsZE5hbWVDbGFzcz17bmFtZUNsYXNzfSBmaWVsZFZhbHVlQ2xhc3M9e3ZhbHVlQ2xhc3N9IC8+KTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMucHJvcHMuYW1wTG9nZ2VyLmxvZygnY29uc3RydWN0b3JlJyk7XG4gICAgdGhpcy51c2VTZXBhcmF0b3IgPSB0aGlzLnByb3BzLnNlcGFyYXRvciAhPT0gZmFsc2U7XG4gICAgdGhpcy5kaXNwbGF5Q2xhc3MgPSB0aGlzLnByb3BzLmZpZWxkQ2xhc3MgfHwgKHRoaXMucHJvcHMuaW5saW5lID09PSB0cnVlID8gc3R5bGVzLmlubGluZSA6IHN0eWxlcy5ibG9jayk7XG4gIH1cblxuICBfZ2V0VmFsdWUoKSB7XG4gICAgY29uc3QgY2xhc3NOYW1lcyA9IGAke3RoaXMucHJvcHMuZmllbGRWYWx1ZUNsYXNzfSAke3RoaXMuZGlzcGxheUNsYXNzfWA7XG4gICAgLy8gVG8gaGFuZGxlIGJvb2xlYW4gZmllbGRzIHdlIGRvbnQgd2FudCB0byBzaG93ICdmYWxzZScgYXMgJ05vIERhdGEnLlxuICAgIGNvbnN0IHZhbHVlID0gKHRoaXMucHJvcHMudmFsdWUgfHwgdGhpcy5wcm9wcy52YWx1ZSA9PT0gZmFsc2UpID8gdGhpcy5wcm9wcy52YWx1ZSA6IHRoaXMucHJvcHMudHJhbnNsYXRlKCdObyBEYXRhJyk7XG4gICAgbGV0IGRpc3BsYXlWYWx1ZTtcbiAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgIGlmICh2YWx1ZVswXSBpbnN0YW5jZW9mIE9iamVjdCkge1xuICAgICAgICBkaXNwbGF5VmFsdWUgPSBbXTtcbiAgICAgICAgdmFsdWUuZm9yRWFjaCh2ID0+IGRpc3BsYXlWYWx1ZS5wdXNoKHYpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRpc3BsYXlWYWx1ZSA9IHZhbHVlLnNvcnQoKS5qb2luKCcsICcpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodHlwZW9mIHZhbHVlID09PSAnYm9vbGVhbicpIHtcbiAgICAgIGRpc3BsYXlWYWx1ZSA9IHZhbHVlID09PSB0cnVlID8gdGhpcy5wcm9wcy50cmFuc2xhdGUoJ1llcycpIDogdGhpcy5wcm9wcy50cmFuc2xhdGUoJ05vJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRpc3BsYXlWYWx1ZSA9ICh0aGlzLnByb3BzLmlubGluZSAmJiB0aGlzLnByb3BzLnZhbHVlIGluc3RhbmNlb2YgU3RyaW5nKSA/IGAke3ZhbHVlfSBgIDogdmFsdWU7XG4gICAgfVxuICAgIGlmICh0aGlzLnByb3BzLnVzZUlubmVySFRNTCkge1xuICAgICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWVzfSBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IGRpc3BsYXlWYWx1ZSB9fSAvPjtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWVzfT57ZGlzcGxheVZhbHVlfTwvZGl2PjtcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgY2xhc3NOYW1lcyA9IGAke3RoaXMucHJvcHMuZmllbGROYW1lQ2xhc3N9ICR7dGhpcy5kaXNwbGF5Q2xhc3N9YDtcbiAgICByZXR1cm4gKDxkaXYgY2xhc3NOYW1lPXt0aGlzLmRpc3BsYXlDbGFzc30+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lc30+e3RoaXMucHJvcHMudGl0bGV9PC9kaXY+XG4gICAgICB7dGhpcy5fZ2V0VmFsdWUoKX1cbiAgICAgIHt0aGlzLnVzZVNlcGFyYXRvciA/IDxociAvPiA6ICcnfVxuICAgIDwvZGl2Pik7XG4gIH1cbn1cblxuVGVzdEFQRmllbGQucHJvcFR5cGVzID0ge1xuICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgdmFsdWU6IFByb3BUeXBlcy5hbnksXG4gIGlubGluZTogUHJvcFR5cGVzLmJvb2wsXG4gIHVzZUlubmVySFRNTDogUHJvcFR5cGVzLmJvb2wsXG4gIGZpZWxkQ2xhc3M6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGZpZWxkTmFtZUNsYXNzOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBmaWVsZFZhbHVlQ2xhc3M6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHNlcGFyYXRvcjogUHJvcFR5cGVzLmJvb2wsXG4gIGFtcExvZ2dlcjogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICB0cmFuc2xhdGU6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWRcbn07XG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBUZXN0QVBGaWVsZCBmcm9tICcuL1Rlc3RBUEZpZWxkJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGVzdGluZ1NlY3Rpb24gZXh0ZW5kcyBDb21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxoMj50ZXN0aW5nIGNvbXBvbmVudDwvaDI+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgdGVzdCB0cmFuc2xhdGlvbjogYERFU0tUT1AgPSB7dGhpcy5wcm9wcy50cmFuc2xhdGUoJ0RFU0tUT1AnKX1gXG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIHRlc3QgQVBGaWVsZDpcbiAgICAgICAgICA8VGVzdEFQRmllbGQgYW1wTG9nZ2VyPXt0aGlzLnByb3BzLmFtcExvZ2dlcn0gdHJhbnNsYXRlPXt0aGlzLnByb3BzLnRyYW5zbGF0ZX0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj4pO1xuICB9XG59XG5UZXN0aW5nU2VjdGlvbi5wcm9wVHlwZXMgPSB7XG4gIGFtcExvZ2dlcjogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICB0cmFuc2xhdGU6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWRcbn07XG4iLCJjb25zdCBTRVJWRVJfVVJMID0gJ19fU0VSVkVSX1VSTF9fJztcbmNvbnN0IEJBU0VfUkVTVF9VUkwgPSAnL3Jlc3QnO1xuY29uc3QgUFJPVE9DT0wgPSAnX19TRVJWRVJfUFJPVE9DT0xfXyc7XG5jb25zdCBCQVNFX1BPUlQgPSAnX19TRVJWRVJfUE9SVF9fJztcblxuY29uc3QgQ09OTkVDVElPTl9USU1FT1VUID0gMjUwMDA7XG5jb25zdCBDT05ORUNUSU9OX0ZPUkNFRF9USU1FT1VUID0gQ09OTkVDVElPTl9USU1FT1VUICsgNTAwMDtcbmNvbnN0IFRJTUVPVVRfQ0hFQ0tfSU5URVJWQUwgPSA1MDAwO1xuY29uc3QgTUFYX1JFVFJZX0FURU1QVFMgPSA1O1xuY29uc3QgRVJST1JTX1RPX1JFVFJZID0gWydFU09DS0VUVElNRURPVVQnLCAnRVRJTUVET1VUJywgJ0VDT05OUkVTRVQnLCAnRUFJX0FHQUlOJ107XG5jb25zdCBFUlJPUlNfTk9fQU1QX1NFUlZFUiA9IFsnRUNPTk5SRUZVU0VEJywgJ0VORVRVTlJFQUNIJywgJ0VOT0VOVCcsICdFTk9URk9VTkQnLCAnRU5FVERPV04nLCAnRUhPU1RET1dOJyxcbiAgJ0VIT1NUVU5SRUFDSCcsICdFTk9ORVQnXTtcbmNvbnN0IENPTk5FQ1RJVklUWV9DSEVDS19JTlRFUlZBTCA9ICc2MDAwMCc7IC8vIDEgbWludXRlc1xuXG5jb25zdCBXT1JLU1BBQ0VfVVJMID0gJy93b3Jrc3BhY2UnO1xuY29uc3QgTE9HSU5fVVJMID0gJy8nO1xuY29uc3QgREVTS1RPUF9VUkwgPSAnL2Rlc2t0b3AnO1xuY29uc3QgREVTS1RPUF9DVVJSRU5UX1VSTCA9ICcvZGVza3RvcC9jdXJyZW50JztcbmNvbnN0IFNZTkNVUF9SRURJUkVDVF9VUkwgPSAnL3N5bmNVcC9zeW5jJztcbmNvbnN0IFNZTkNVUF9ISVNUT1JZX1RBUkdFVCA9ICdoaXN0b3J5JztcbmNvbnN0IFNZTkNVUF9TVU1NQVJZX1VSTCA9ICcvc3luY1VwU3VtbWFyeSc7XG5jb25zdCBBQ1RJVklUWV9QUkVWSUVXX1VSTCA9ICcvYWN0aXZpdHkvcHJldmlldyc7XG5jb25zdCBBQ1RJVklUWV9FRElUX1VSTCA9ICcvYWN0aXZpdHkvZWRpdCc7XG5jb25zdCBVUERBVEVfVVJMID0gJy91cGRhdGUnO1xuY29uc3QgU0VUVVBfVVJMID0gJy9zZXR1cCc7XG5jb25zdCBTRVRUSU5HU19VUkwgPSAnL3NldHRpbmdzJztcblxuY29uc3QgQ09MTEVDVElPTl9VU0VSUyA9ICd1c2Vycyc7XG5jb25zdCBDT0xMRUNUSU9OX1dPUktQQUNFUyA9ICd3b3Jrc3BhY2VzJztcbmNvbnN0IENPTExFQ1RJT05fVEVBTU1FTUJFUlMgPSAndGVhbW1lbWJlcnMnO1xuY29uc3QgQ09MTEVDVElPTl9DTElFTlRfU0VUVElOR1MgPSAnY2xpZW50LXNldHRpbmdzJztcbmNvbnN0IENPTExFQ1RJT05fR0xPQkFMX1NFVFRJTkdTID0gJ2dsb2JhbC1zZXR0aW5ncyc7XG5jb25zdCBDT0xMRUNUSU9OX0FDVElWSVRJRVMgPSAnYWN0aXZpdGllcyc7XG5jb25zdCBDT0xMRUNUSU9OX0ZJRUxEUyA9ICdmaWVsZHMnO1xuY29uc3QgQ09MTEVDVElPTl9QT1NTSUJMRV9WQUxVRVMgPSAncG9zc2libGUtdmFsdWVzJztcbmNvbnN0IENPTExFQ1RJT05fU1lOQ1VQX0xPRyA9ICdzeW5jdXAtbG9nJztcbmNvbnN0IENPTExFQ1RJT05fTEFOR1MgPSAnbGFuZ3VhZ2VzJztcbmNvbnN0IENPTExFQ1RJT05fV1NfU0VUVElOR1MgPSAnd29ya3NwYWNlLXNldHRpbmdzJztcbmNvbnN0IENPTExFQ1RJT05fQ1VSUkVOQ1lfUkFURVMgPSAnY3VycmVuY3ktcmF0ZXMnO1xuY29uc3QgQ09MTEVDVElPTl9GRUFUVVJFX01BTkFHRVIgPSAnZmVhdHVyZS1tYW5hZ2VyJztcbmNvbnN0IENPTExFQ1RJT05fQ09OVEFDVFMgPSAnY29udGFjdHMnO1xuY29uc3QgQ09MTEVDVElPTl9SRVNPVVJDRVMgPSAncmVzb3VyY2VzJztcbmNvbnN0IENPTExFQ1RJT05fUkVQT1NJVE9SWSA9ICdyZXBvc2l0b3J5JztcbmNvbnN0IENPTExFQ1RJT05fR0FaRVRURUVSID0gJ2dhemV0dGVlcic7XG5jb25zdCBDT0xMRUNUSU9OX0NBTEVOREFSUyA9ICdjYWxlbmRhcnMnO1xuY29uc3QgQ09MTEVDVElPTl9DSEFOR0VTRVRTID0gJ2NoYW5nZXNldHMnO1xuXG5jb25zdCBHQVpFVFRFRVJfRElTVEFOQ0VfRElWSURFID0gMztcblxuY29uc3QgREJfRklMRV9QUkVGSVggPSAnZGF0YWJhc2UnO1xuY29uc3QgREJfRklMRV9FWFRFTlNJT04gPSAnLmRiJztcbmNvbnN0IERCX0NPTU1PTl9EQVRBU1RPUkVfT1BUSU9OUyA9IHsgYXV0b2xvYWQ6IGZhbHNlLCBjb3JydXB0QWxlcnRUaHJlc2hvbGQ6IDAgfTtcbmNvbnN0IERCX0FVVE9DT01QQUNUX0lOVEVSVkFMX01JTElTRUNPTkRTID0gNjAwMDA7XG5jb25zdCBEQl9ERUZBVUxUX1FVRVJZX0xJTUlUID0gOTk5OTk5OTk5O1xuXG5jb25zdCBMQU5HVUFHRV9FTkdMSVNIID0gJ2VuJztcbmNvbnN0IEZTX0xPQ0FMRVNfRElSRUNUT1JZID0gJ2xhbmcnO1xuY29uc3QgTEFOR1VBR0VfTUFTVEVSX1RSQU5TTEFUSU9OU19GSUxFID0gJ21hc3Rlci10cmFuc2xhdGlvbnMnO1xuY29uc3QgTEFOR1VBR0VfVFJBTlNMQVRJT05TX0ZJTEUgPSAndHJhbnNsYXRpb25zJztcbmNvbnN0IExBTkdVQUdFX05FV19UUkFOU0xBVElPTlNfTVVTVF9TWU5DID0gJ211c3Rfc3luY190cmFuc2xhdGlvbi5qc29uJztcblxuY29uc3QgQVNBUl9ESVIgPSAnYXBwLmFzYXInO1xuY29uc3QgQVBQX0RJUkVDVE9SWSA9ICdhcHAnO1xuY29uc3QgVEVTVF9ESVJFQ1RPUlkgPSAndGVzdCc7XG5jb25zdCBTVEFUSUNfRElSID0gJ3N0YXRpYyc7XG5jb25zdCBJTUFHRVNfRElSID0gJ2ltYWdlcyc7XG5jb25zdCBET0NfSUNPTlMgPSAnZG9jLWljb25zJztcbmNvbnN0IERCX1NUQVRJQ19ESVIgPSAnZGInO1xuY29uc3QgTUlHUkFUSU9OU19ESVIgPSAnY2hhbmdlbG9nJztcblxuY29uc3QgSEFTSF9JVEVSQVRJT05TID0gMTAwO1xuY29uc3QgRElHRVNUX0FMR09SSVRITV9TSEExID0gJ1NIQS0xJztcbmNvbnN0IERJR0VTVF9BTEdPUklUSE1fU0hBMjU2ID0gJ1NIQS0yNTYnO1xuXG5jb25zdCBBQ1RJVklUWV9FRElUID0gJ0FDVElWSVRZX0VESVQnO1xuY29uc3QgQUNUSVZJVFlfVklFVyA9ICdBQ1RJVklUWV9WSUVXJztcblxuY29uc3QgU1lOQ1VQX0ZPUkNFX0RBWVMgPSAxNDtcbmNvbnN0IFNZTkNVUF9CRVNUX0JFRk9SRV9EQVlTID0gNztcbmNvbnN0IFNZTkNVUF9OT19EQVRFID0gJzE5MDAtMDEtMDFUMDA6MDA6MDAuMDAwKzAwMDAnO1xuY29uc3QgU1lOQ1VQX1RZUEVfVFJBTlNMQVRJT05TID0gJ3RyYW5zbGF0aW9ucyc7XG5jb25zdCBTWU5DVVBfVFlQRV9VU0VSUyA9ICd1c2Vycyc7XG5jb25zdCBTWU5DVVBfVFlQRV9BU1NFVFMgPSAnYXNzZXRzJztcbmNvbnN0IFNZTkNVUF9UWVBFX1dPUktTUEFDRVMgPSAnd29ya3NwYWNlcyc7XG5jb25zdCBTWU5DVVBfVFlQRV9HUyA9ICdnbG9iYWwtc2V0dGluZ3MnO1xuY29uc3QgU1lOQ1VQX1RZUEVfRVhDSEFOR0VfUkFURVMgPSAnZXhjaGFuZ2UtcmF0ZXMnO1xuY29uc3QgU1lOQ1VQX1RZUEVfRkVBVFVSRV9NQU5BR0VSID0gJ2ZlYXR1cmUtbWFuYWdlcic7XG5jb25zdCBTWU5DVVBfVFlQRV9XT1JLU1BBQ0VfTUVNQkVSUyA9ICd3b3Jrc3BhY2UtbWVtYmVycyc7XG5jb25zdCBTWU5DVVBfVFlQRV9BTExfRklFTERTID0gJ2ZpZWxkcyc7XG5jb25zdCBTWU5DVVBfVFlQRV9BQ1RJVklUSUVTX1BVTEwgPSAnYWN0aXZpdGllcyc7XG5jb25zdCBTWU5DVVBfVFlQRV9BQ1RJVklUSUVTX1BVU0ggPSAnYWN0aXZpdGllcy1wdXNoJztcbmNvbnN0IFNZTkNVUF9UWVBFX0FDVElWSVRZX0ZJRUxEUyA9ICdhY3Rpdml0eS1maWVsZHMnO1xuY29uc3QgU1lOQ1VQX1RZUEVfQUNUSVZJVFlfRklFTERTX1NUUlVDVFVSQUxfQ0hBTkdFUyA9ICdhY3Rpdml0eS1maWVsZHMtc3RydWN0dXJhbC1jaGFuZ2VzJztcbmNvbnN0IFNZTkNVUF9UWVBFX0NPTlRBQ1RTX1BVTEwgPSAnY29udGFjdHMnO1xuY29uc3QgU1lOQ1VQX1RZUEVfQ09OVEFDVFNfUFVTSCA9ICdjb250YWN0cy1wdXNoJztcbmNvbnN0IFNZTkNVUF9UWVBFX0FDVElWSVRZX1BPU1NJQkxFX1ZBTFVFUyA9ICdhY3Rpdml0eS1wb3NzaWJsZS12YWx1ZXMtZmllbGRzJztcbmNvbnN0IFNZTkNVUF9UWVBFX0NPTlRBQ1RfRklFTERTID0gJ2NvbnRhY3QtZmllbGRzJztcbmNvbnN0IFNZTkNVUF9UWVBFX0NPTlRBQ1RfRklFTERTX1NUUlVDVFVSQUxfQ0hBTkdFUyA9ICdjb250YWN0LWZpZWxkcy1zdHJ1Y3R1cmFsLWNoYW5nZXMnO1xuY29uc3QgU1lOQ1VQX1RZUEVfQ09OVEFDVF9QT1NTSUJMRV9WQUxVRVMgPSAnY29udGFjdC1wb3NzaWJsZS12YWx1ZXMtZmllbGRzJztcbmNvbnN0IFNZTkNVUF9UWVBFX1JFU09VUkNFU19QVUxMID0gJ3Jlc291cmNlcyc7XG5jb25zdCBTWU5DVVBfVFlQRV9SRVNPVVJDRVNfUFVTSCA9ICdyZXNvdXJjZXMtcHVzaCc7XG5jb25zdCBTWU5DVVBfVFlQRV9SRVNPVVJDRV9GSUVMRFMgPSAncmVzb3VyY2UtZmllbGRzJztcbmNvbnN0IFNZTkNVUF9UWVBFX1JFU09VUkNFX0ZJRUxEU19TVFJVQ1RVUkFMX0NIQU5HRVMgPSAncmVzb3VyY2UtZmllbGRzLXN0cnVjdHVyYWwtY2hhbmdlcyc7XG5jb25zdCBTWU5DVVBfVFlQRV9SRVNPVVJDRV9QT1NTSUJMRV9WQUxVRVMgPSAncmVzb3VyY2UtcG9zc2libGUtdmFsdWVzLWZpZWxkcyc7XG5jb25zdCBTWU5DVVBfVFlQRV9DT01NT05fUE9TU0lCTEVfVkFMVUVTID0gJ2NvbW1vbi1wb3NzaWJsZS12YWx1ZXMtZmllbGRzJztcbmNvbnN0IFNZTkNVUF9UWVBFX1dPUktTUEFDRV9TRVRUSU5HUyA9ICd3b3Jrc3BhY2Utc2V0dGluZ3MnO1xuY29uc3QgU1lOQ1VQX1RZUEVfTUFQX1RJTEVTID0gJ21hcC10aWxlcyc7XG5jb25zdCBTWU5DVVBfVFlQRV9HQVpFVFRFRVIgPSAnbG9jYXRvcnMnO1xuY29uc3QgU1lOQ1VQX1RZUEVfQ0FMRU5EQVJTID0gJ2NhbGVuZGFycyc7XG5cbmNvbnN0IFNZTkNVUF9TVEFUVVNfU1VDQ0VTUyA9ICdTVUNDRVNTJztcbmNvbnN0IFNZTkNVUF9TVEFUVVNfRkFJTCA9ICdGQUlMJztcbmNvbnN0IFNZTkNVUF9TVEFUVVNfUEFSVElBTCA9ICdQQVJUSUFMJztcbmNvbnN0IFNZTkNVUF9TVEFUVVNfQ0FOQ0VMRUQgPSAnQ0FOQ0VMRUQnO1xuY29uc3QgU1lOQ1VQX1NZTkNfUkVRVUVTVEVEX0FUID0gJ3N5bmMtZGF0ZSc7XG5jb25zdCBTWU5DVVBfU1lOQ19SRVFVRVNURURfQlkgPSAncmVxdWVzdGVkLWJ5JztcbmNvbnN0IFNZTkNVUF9EQVRFVElNRV9GSUVMRCA9ICd0aW1lc3RhbXAnO1xuY29uc3QgU1lOQ1VQX0RJRkZfTEVGVE9WRVIgPSAnc3luY3VwLWRpZmYtbGVmdG92ZXInO1xuY29uc3QgU1lOQ1VQX0RFUEVOREVOQ1lfQ0hFQ0tfSU5URVJWQUwgPSAxMDtcbmNvbnN0IFNZTkNVUF9ERVRBSUxTX1NZTkNFRCA9ICdzeW5jZWQnO1xuY29uc3QgU1lOQ1VQX0RFVEFJTFNfVU5TWU5DRUQgPSAndW5zeW5jZWQnO1xuY29uc3QgU1lOQ1VQX1JFU09VUkNFX1BVTExfQkFUQ0hfU0laRSA9IDEwMDtcbmNvbnN0IFNZTkNVUF9BQ1RJVklUSUVTX1BVTExfQkFUQ0hfU0laRSA9IDEwMDtcbmNvbnN0IFNZTkNVUF9DT05UQUNUU19QVUxMX0JBVENIX1NJWkUgPSAxMDA7XG5cbmNvbnN0IEFDVElWSVRZX1NUQVRVU19EUkFGVCA9ICdBQ1RJVklUWV9TVEFUVVNfRFJBRlQnO1xuY29uc3QgQUNUSVZJVFlfU1RBVFVTX1VOVkFMSURBVEVEID0gJ0FDVElWSVRZX1NUQVRVU19VTlZBTElEQVRFRCc7XG5jb25zdCBBQ1RJVklUWV9TVEFUVVNfVkFMSURBVEVEID0gJ0FDVElWSVRZX1NUQVRVU19WQUxJREFURUQnO1xuXG5jb25zdCBDVVJSRU5DWV9IT1VSID0gJzAwOjAwJztcbmNvbnN0IERFRkFVTFRfQ1VSUkVOQ1kgPSAnVVNEJztcbmNvbnN0IFJBVEVfU0FNRV9DVVJSRU5DWSA9IDE7XG5jb25zdCBSQVRFX0NVUlJFTkNZX05PVF9GT1VORCA9IDE7XG5jb25zdCBDVVJSRU5DWV9QQUlSID0gJ2N1cnJlbmN5LXBhaXInO1xuY29uc3QgVkVSU0lPTl9QQVRURVJOID0gLyhcXGQrKVxcLihcXGQrKShcXC4oXFxkKykpPygtXFx3Kyk/LztcbmNvbnN0IFZFUlNJT05fUEFUVEVSTl9HUk9VUFNfVE9fRVhUUkFDVCA9IFsxLCAyLCA0LCA1XTtcbmNvbnN0IEFNUF9DT1VOVFJZX0xPR08gPSAnYW1wQ291bnRyeUZsYWcucG5nJztcbmNvbnN0IEFTU0VUU19ESVJFQ1RPUlkgPSAnYXNzZXRzJztcbmNvbnN0IEJBU0VfNjRfUE5HX1BSRUZJWCA9ICdkYXRhOmltYWdlL3BuZztiYXNlNjQsJztcbi8vIEhvbGRzIHRoZSBCQVNFNjQgcmVwcmVzZW50YXRpb24gb2YgYSBhIHRyYW5zcGFyZW50IGltYWdlIDF4MSBpbiBjYXNlIHdlIGRvbid0IHlldCBoYXZlIHRoZSBjb3VudHJ5IGZsYWdcbmNvbnN0XG4gIFRSQU5TUEFSRU5UX0ZMQUcgPSAnaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFFQUFBQUJDQVFBQUFDMUhBd0NBQUFBQzBsRVFWUjRuR1A2endBQUFnY0JBcG9jTVhFQUFBQUFTVVZPUks1Q1lJST0nO1xuY29uc3QgSEVMUF9QREZfRklMRU5BTUUgPSAnYW1wLWhlbHAnO1xuY29uc3QgSEVMUF9ESVIgPSAnaGVscCc7XG5jb25zdCBFTkRTX1dJVEhfUFVOQ1RVQVRJT05fUkVHRVggPSAvWy4hPyw7Ol0kLztcblxuY29uc3QgTUFQX1RJTEVTX0RJUiA9ICdtYXAtdGlsZXMnO1xuY29uc3QgVElMRVNfWklQX0ZJTEUgPSAnbWFwLXRpbGVzLnppcCc7XG5cbi8qIGVzbGludC1kaXNhYmxlIG1heC1sZW4gKi9cbmNvbnN0IE1BUF9NQVJLRVJfSU1BR0UgPSAnZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFCa0FBQUFwQ0FZQUFBREFrNExPQUFBRmdVbEVRVlI0QWExWEE1QmpXUlROMm9XMTdkM1lhWnRyMjk2MkhVemJETnBqc3pXMjRtUnQyOHA0N3Y3enEvYlhadHJwL2xXblhyMzM3ajNuUENlODVOY3lwZ1NGZHVnQ3BXNVlvREFNUmFJTXFSaTZhS3E1RTNZcURRTzNxQXdqVldyRDhOY3EvUkJweWtkOG9aVWIva2FKdXRvdzhyMWFQOUlJMFdtTEtMSXNKeXYxdy9rcXc5Q2gyTVlkQisrMTJPbnhlZS9RTXd2ZjQvRGsvTGZwL2k0bnhUWHRPb1E0cFc1QWo3d3BpY2kxQTllcmRBTjJPSDY0eDhPU1A5ajNGdDNiN2FXa1RnL0ZtOTFzaVRyYTBmOW9uNXNRcjlJTmVqSDZDVVVVcGF2akZOcTFCK09hZGh4bW5mYThSZkVtTjhWTkFzUWhQcUY1NXhIa016ejNqU21DaFdVNmY3L1haS05IKzkraEJMT0hZb3p1S1FQeHlNUFVLa3JYL0swdVduZkZhSkdTMVFQUnRac09QdHIzTnNXMHV5aDZOTkNPa1UzWXorYlhiVDNJOEczeEU1RVhMWHRDWGJicXdDTzl6UFFZUFJUWjV2SURYRDdVK3c3ckZERW9VVWY3aWJISVI0eTZiTFZQWHJ6OEpWWkVxbDEzdHJ4d3VlL3VEaXZkM2ZrV1JiUzYvSUEyYklENHVrMFVwRjFOOHFMbGJCbFhzNEVlN0hMVGZWMWo1NEFQdk9EblNmT1dCcXRLVnZqZ0xLekY1WWRFazVld1JrR2xLMGkzM0VvZmZmYzdIVDU2akQ3LzZVK3FIM0N4N1NCTE5udEg1WUlQdk9EbnlmSVhaWVJWRFBxZ0h0THM1QUJIRDNZekx1ZXNwYjd0NzlGWTM0RGpNd3JWcmNUdXdsVDU1WU1Qdk9CblJySjRWWFRkTm5ZdWc1dWNITEJqRXB0MzA3MDFBM1RzK0hFYTczdTZkVDNGTld3ZmxZODZlTUhQaytZdStpNnB6VXBSclc3U05EZzVKSFI0S2FwbU01V3YyRThUZmNiMUhvcXFITUhVK3VXREQ3emc1NG16NS8yQlNuaXppOVQxRGc0UVFYTFRvR05Da2I2dGIxTlUrUUFsR3IxKytlQURyemhuL3U4UTJZWmhRVmxaNStDQU90cWZiaG1hVUNTMWV6TkZWbTJpbURiUG1Qbmc1d216K2d3aCtvSERjZTBlVXRRNk9HREl5UjB1VWhVc29PM3ZmRG1tZ09lekgwbVpONTl4N01CaSsrV0RMMWcvZUVpVTNhdmxpZE82NzFia0xmd2J3NVhWMlA4UHpvMHlkeTR0Mi8wZXUzM3hZU09NT0Q4aFRmNENyQnRHTVNvWGZQTGNoWCtKMHJ1U2VQdzNMWmVLMGp1UEpiWXpyaGtIMGlvN0IzazE2NGhpR3Zhd2hPS01Ma3JRTHlWcFpnOHJIRlc3RTJ1SE9MODg4SUJQbE5aMUZQenN0U0pNNjk0ZldyNlJ3cHZjSks2MCswSENJTFRCelpMRk5kdEF6SmFvaHplNjBUOHFCenloNVp1T2c1ZTd1d1FwcG9mRW1mMisrRFl2bXlTcUdCdUthaWNGMWJsUWpodUhkdkNJTXZwOHdoVFRmWnpJN1JsZHB3dFN6TCtGMSt3a2RaMlRCT1cyZ0lGODhQQlR6RC9ncGVSRUFNRWJ4bkpjYUpITkhycHpqaTBnUUNTNmhka0VlWXQ5REYvMnFQY0VDOFJNMjhId21yM3NkTnlodDAwYnlBdXQyazNndWZXTnRndE9FT0ZHVXdjWFdORGJkTmJwZ0JHeEV2S2tPUXN4aXZKeDMzaW93MFZ3NVM2U1ZUcnBWcTExeXNBMlJwN2dUZlBma3RjNnpodFhCQkMrYWRSTHNoZjZzRzJSZkhQWjVFQWM0c1ZaODN5Q04wMEZrLzRrZ2d1NDBaVHZJRW01ZzI0cXRVNEtqQnJ4L0JUVEg4aWZWQVNBRzdnS3JuV3hKRGNVN3g4WDZFY2N6aG0zbzZZaWN2c0xYV2ZoM0NoMVcwazh4MG5YRiswZkZ4Z3Q0cGh6OFF2eXBpd0NDRktNcVhDbnFYRXhqcTEwYmVIK1VVQTcrbkc2bWRHL1B1MGYzTGdGY0dybDJzMGtOTmpwbW9KOW80QjI5Q01POGRNVDRRNW94OHVpdEY2ZnFzckpPcjhxbndOYlJ6djZoU25HNXdQKzY0QzdoOWxwMzBoS050S2RXanRka2J1UEExOW5KN1R6M3pSL2liZ0FSYmhiNEFsaGF2Y0JlYm1USGNGbDJmdllFblcwb3g5eE14S0JTOGJ0SitLaUVicTl6QTRSdGhRWERoUGEwVDlURWU2OWdXdXB3YzZ1QlVwaHF1WGdmKy9Gcklqd2VIUVM0L3BkdU1lNUVSVU1IVWQ5eHY4WlI5OEN4a1M0RjJuM0VVclVaMTBFWU53N0JXbTl4MUdpUHNzaTNHZ2lHUkRLV1JZWmZYbE9OK2RmTmJNK0dnSXdZZHdBQUFBQVNVVk9SSzVDWUlJPSc7XG5jb25zdCBNQVBfTUFSS0VSX1NIQURPVyA9ICdkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUNrQUFBQXBDQVFBQUFBQ2FjaDlBQUFDTVVsRVFWUjRBZTNTaFk3alFCQUUwQW96L2Y5L0hUTXpoZzF6cmRLVXJKYmR4K0tkMm5EOFZOdWRmc0wvVGgvLy9keVFOMlRINmYzeS9CR3BDMzc5clYrUytxcWV0Qk94SW1OUVhMOEpDQXIyVjRpTVFYSEdOSnhlQ2ZaWGhTUkJjUU1mdmtPV1VkdGZ6bExnQUVObVpEY21vMlRWbXQ4T1NNMmVYeEJwM0RqSFNNRnV0cVM3U2JtZW16QmlSK3hwS0NOVUlSa2Rra1l4aEFreUdvQnZ5UUZFSkVlZndTbW12QmZKdUo2YUtxS1duQWt2R1pPYVpYVFVnRnFZVUxXTlNIVWNrWnVSMUhJSWltVUV4dXRSeHd6T0xST0lHNHZLbUNLUXQzNjRtSWxoU3l6QWYxbTlsSFpISlpybEFPTU16dFJSaUtpbXAvcnBkSkRjOUF3cnk1eFRaQ3RlN0ZIdHVTOHdKZ2VZR3JleDI4eE5UZDA4NkRpazd2VU1zY1FPYTh5NERvR3RDQ1NrQUtsTndwZ050cGhqckM2TUlIVWtSNllXeHhzNlNjNXhxbjIyMm1tQ1JGekl0OGxFZEt4K2lrQ3RnOTFxUzJXcHdWZkJlbEpDaVFKd3Z6aXhmSTljeFpRV2dpU0plbEtud0JFbEtZdERPYjJNRmJobVVpZ2JSZVFCVjBDZzQrcU1YU3hYU3lHVW40VWJGOGwrN3FkU0duVEMwWExDbWFoSWdVSExoTE9ocFZDdHc0Q3pZWHZMUVdRYkpObXhvQ3NPS0F4U2dCSm5vNzVhdm9sa1J3OGlJQUZjc2RjMDJlOWl5Q2Q4dEh3bWVTU29LVG93SWd2c2NTR1pVT0E3UHVDTjViMkJYOW1RTTdTMHdZaE1OVTc0emdzUEJqM0hVN3dndUFmbnh4akZRR0JFNnB3TitHak1FOXpIWTd6R3A4d1Z4TVNoWVg5Tlh2RVdEM0hid0pmNGdpTzRDRklReFhTY0gxL1RNKzA0a2tCaUFBQUFBRWxGVGtTdVFtQ0MnO1xuY29uc3QgTUFQX01BUktFUl9DSVJDTEVfUkVEID0gJ2RhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQlFBQUFBVUNBWUFBQUNOaVIwTkFBQUFCR2RCVFVFQUFMR1BDL3hoQlFBQUFDQmpTRkpOQUFCNkpnQUFnSVFBQVBvQUFBQ0E2QUFBZFRBQUFPcGdBQUE2bUFBQUYzQ2N1bEU4QUFBQUJtSkxSMFFBL3dEL0FQK2d2YWVUQUFBQUIzUkpUVVVINGdjYkZ3b2dlb2hoRUFBQUExbEpSRUZVT011bGxjMXJIR1VjeHorL1oyWjIwekdFN2x1eVFieUlkaUV4cmU2YU52U3lTRUJCS0I3MVZBSTVtR0pBOWc4UXBSNDhhVkdLNksxNjBwdFlEN1d4aDRDVWtKckZHcEt5S1dnUW1uWGZhWnQ5eVdhZWVUenNURXhqMVlPLzAvRE16R2QrYjkvdkNFSDhjdTUxanNRUWtBRW1nRlJ3VmdNMmdSTFFPL3p3eWF0ZkF5Q1BnVVdBVjRBNVlBWklBblp3endQcXdBcHdCZmdlNkIrR3loRllHbmdYT0ErNEFCanphTjRpNFZVSCtCSjRENmlFaC9ZUjJHZkFhd2NnWTFCUHVGakR3d0RvM1YzOGRtY0FGWEdCQldBY2VET0Voc0JJa05rQTV2czR5UVN4MlR3anAzUFk4ZGlnM21hTCs2dHJ0RzRzNDlVYm9CVEJPMlhnYmFCdlhjZzhCL0FxOEQ3ZzRQc01QZk0wVHhYZXdzMCt6eDkzN3ZENzhvOVVOemJSamszcXBUd2pMNXlrKytzMlhxTVp0bUFDK0JuWXNvTnB6Z0V1eHVBa0V6eDVZWjYrWTFOODV5SzE5UTJNNXczYVo5dWtwaWJKRmhZWlg1am50dzgraEdZckxIOE9XRkxCYXN5RWZZdk41ckhHUmlsZXVreWxlQnVNUVN3THNTd3doa3J4TnNWTGw3SFRvMFR6WitsNkhzR1lab0NNQ3RKTmhnTVlPWjJqdlBvVHRmVU5sRzBkM1UyVWJWRmIzNkJ5YTQzNG1XbHFDam9EYUJLWVVNSFMyZ0RXOERCMlBFWnI2KzVCbVk4TDQzazBTMXU0eVFTK2U0eWRUcHVPMXJaQXl1Yi9oZ2c5N1ZIdXRqa2VpYUlZeU1rTDk4eHJ0b2hsbmtYc2YvNlcyRGJ4ekFtNjlRYjlCdzhSRVhwYTcxZDczYXBpb00wNkl2anREdmRYMXhpZmZwSFUxQ1MrcC84Rzh6MU5hbXFTOUhTT2V6ZFgyRyszUVFTQnVzQ21ZaUQwbFREOTFvMWxkS1ZLdHJESVdQWVVpR0MweG1nTklveGxUNUVyTExLN1UyYjcydEpoS2E0NFNwVkNMWjhEdmdMY2NMSEhGK2F4MDZOVWJxM1JMRzBCRU0rY0lEMmRZM2Vuek5wSG45QXMzVVVHYW1sYkltLzR4bndYQWlQQXg0RTJ3ZmNoRVNlYVAwdjh6RFJ1TWdGQXQ5N2czczBWdHE4dDBhbldRaGdDbjBZdHErQWIwei9zTm1QQTU0Zk5vZXQ1MUJUNDdqRVFvZi9nNFY4OUMwb1YrTVlTdFdBd0ZZVTg0allWQnE1UkJzNGo0cnFPUThyejJLazE2R2tQRVRuSUNtZ0xmR0dKdXVoaktyNHh4SWVpLzIyd0FzbXUxdlpPdDAxUDYzMEpERmFKWEhHVXVyN3YrMzF0RFBGSWxKZC91TXJCaVA3dEZ5Q1FhdlQzcVBhNlZZRk5SNm5TbnRaN2psSVk0SGdrd3V6MWJ3SDRFNW1DWElCTFE1SG5BQUFBSlhSRldIUmtZWFJsT21OeVpXRjBaUUF5TURFNExUQTNMVEkzVkRJeE9qRXdPak15S3pBeU9qQXc3cTZHbndBQUFDVjBSVmgwWkdGMFpUcHRiMlJwWm5rQU1qQXhPQzB3TnkweU4xUXlNVG94TURvek1pc3dNam93TUovelBpTUFBQUFBU1VWT1JLNUNZSUk9JztcbmNvbnN0IE1BUF9NQVJLRVJfQ0lSQ0xFX0dSRUVOID0gJ2RhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQlFBQUFBVUNBWUFBQUNOaVIwTkFBQUFCbUpMUjBRQS93RC9BUCtndmFlVEFBQUFDWEJJV1hNQUFBc1RBQUFMRXdFQW1wd1lBQUFBQjNSSlRVVUg0Z2NiRkJnNi9WaFc0QUFBQTVWSlJFRlVPTXVsbFVGb0hGVVl4My92emV4a3U4VmtkelBycGdwV05Kb200Sm8wTmFTbklrSHJKUmIxVUZBc1htcTNLbGl2SnFDSGhKNHFzUWR0bWtzVkZLUWdZa1RhMEVyeFVDTWhhZDFDUXJRMERiYUoyOTFrZDkxa0pyczdNODlEWnBvMEJCVDh6MlY0Ny9GNzMvZmU5Lytld0ZlbTl6Q2IxVDhZRFFNdFFCdVE4SWR6d0RRd085QlhYTnU4UGpYNkRRQmlLNngvTUdvQUI0RzNnRzdBQkhSLzJnSHl3RGh3RHJnNDBGZXNib2FLTGJBbTRDUGdDQkFCOFBBZWlGd2lnMThMK0JMNGVLQ3ZtTjJZZnhCMkJrZ0RFWS8xTHlKM2tBeVpKRU1tRWJtRFlOemZNQTBNOXc5R2t3RkhaSG9QQjJsKzZpL0F3Nk14RktNbnRwK3UraFJ4dlFHQVphZkVST2tHbHd0WHlUdUZ6ZEdlQWQ0ZjZDdFdnN001NktlSmgwZHplRGZISDMyZHBOYkl4R0tHUzRXZkFXaUpOZE83NjNtNjZsTjhmdmRyYnE3TkI5QWp3SS9BcUhnNWN5d01mQVc4R2tUMjRXTnA5S3JHME5RSW1md01qdWNBb0V1ZGxObktpYjFIcWVvVlRzNmRaWmxTQVAwV2VFUDZwZEVkeE40VDIwOVNhMlJvYW9USjdIV1VVbWhDUXhNYVNpa21zOWNabWhxaFNYK1lBM1g3Y0cwSEpSUStvMFg2ZFdZR0Y5QlZuK0xYeFd0azhqUG8wbUNyZEdtUXljOHdrZjJON25nSEl1ZmlXRFdVVUNiUUp2MmkxUUVlMG5ZUzF4djRvekIzUDgzdDVIZ092eS9md296RWlYaGhySVV5bnVYcVNxaUU1SDlLSW5BckR0WmZaV3BMRlhUZlRnNWdsTjFWbHAwU0xiRm1kS21qbE5vV29rdWRwK05Qa0xPWEtOWEtDQ0Z3YmFkbVYxZnVTZCtiZVluRThtd21TamQ0YmxlS2xObUs0MVczU2JkS3lteWxxNm1kWCs1T3NscXpFRXFBSkE5TVMyRFc5eVlBbHd0WHlicExuTmg3bE01aysvcnV5c1ZWTGtJSU9wUHRmTkQ1TmdzcldTN2N2cklPVzllNE5MUlo3ZnlkWnVlbm5yQU5IQktJMEtwbmM4ditrNDZHUGZUdWZvRW5vNC96eU00a3o1aDdlT1dwbDNpejdUVUtheVZPVFE0elg3NkRGQkpnVlVqUmYzem83NW5BS1JkOW82Y2xrcHRyODV5Y084dUJ1bjEweHp0NE50RzIzcnZzSmM3UC9zQ0YyMWZJMnJrTjYwbStrSVkyRnBKeW85djRCaDhHRGdVV2RHMEhrWE9KZUdFa2dsS3RmUC9NaEJBQjdEdWhxZlI3cDYyc1JHeTQyMjlCeDN5ald4S0pIZ21oRWhvNWQ1a0ZLNHZsMkVoa0FGdEY4cG5RVlByZDAxYldWWXBvbmZIdkRWWUpaYnEybzl1TEs3aTJVL052YzF3SWNVNGEydGc3bjVTcXJsTEVqVHBldkRTSytDOVBnQklxVVZ1cVlPZFc3Z0hUMHRCbTA2ZUtsWkNVS0NCcUdQU01mUS9BUHkxWGcydjZLSXNGQUFBQUFFbEZUa1N1UW1DQyc7XG4vKiBlc2xpbnQtZW5hYmxlIG1heC1sZW4gKi9cbmNvbnN0IFBPTFlHT05fQkFTRV9DT0xPUiA9ICcjMzM4OGZmJztcblxuY29uc3QgREdfQ09NUEFOWV9OQU1FID0gJ0RldmVsb3BtZW50IEdhdGV3YXknO1xuY29uc3QgREdfQUREUkVTU18xID0gJzExMTAgVmVybW9udCBBdmUsIE5XLCBTdWl0ZSA1MDAnO1xuY29uc3QgREdfQUREUkVTU18yID0gJ1dhc2hpbmd0b24sIERDIDIwMDA1IFVTQSc7XG5jb25zdCBER19DT05UQUNUX0lORk8gPSAnaW5mb0BkZXZlbG9wbWVudGdhdGV3YXkub3JnLCBUZWw6ICsxLjIwMi41NzIuOTIwMCwgRmF4OiArMSAyMDIuNTcyLjkyOTAnO1xuXG5jb25zdCBMT0dfRElSID0gJ2xvZ3MnO1xuY29uc3QgTE9HX0ZJTEVfTkFNRSA9ICdhbXBvZmZsaW5lJztcbmNvbnN0IExPR19GSUxFX0VYVEVOU0lPTiA9ICdsb2cnO1xuXG4vLyBNZXNzYWdlIGNvbnN0YW50c1xuLy8gdG90YWwgYW1vdW50IG9mIHRpbWUgdGhlIG1lc3NhZ2Ugc3RheXMgdmlzaWJsZVxuY29uc3QgTUVTU0FHRV9USU1FT1VUID0gMTAgKiAxMDAwO1xuLy8gd2hlbiBpdCdzIHRoaXMgYW1vdW50IG9mIHRpbWUgbGVmdCwgd2Ugbm9maXR5IHRoZSB1c2VyIHRoYXQgdGhlIG1lc3NhZ2UgaXMgYWJvdXQgdG8gZGlzYXBwZWFyXG5jb25zdCBNRVNTQUdFX0RJU0FQUEVBUl9USU1FT1VUID0gTUVTU0FHRV9USU1FT1VUIC8gNTtcbmNvbnN0IE1FU1NBR0VfQ0hFQ0tfSU5URVJWQUwgPSAxMDA7XG4vLyBob3cgbG9uZyBzaG91bGQgdGhlIGVudGVyL2xlYXZlIGFuaW1hdGlvbiBydW4obXMpXG4vLyAoaWYgeW91IGNoYW5nZSB0aGlzIHlvdSdsbCB3YW5uYSBjaGFuZ2UgaXQgaW4gc3R5bGUuY3NzLCB0b28pXG5jb25zdCBNRVNTQUdFX0FOSU1BVElPTl9EVVJBVElPTiA9IDUwMDtcblxuLy8gdGhpcyBpcyB0aGUgaW50ZXJuYWwgZGF0ZSBmb3JtYXQgdXNlZCB0byBzdG9yZSBhbmQgc3luYyB1cCBkYXRlc1xuY29uc3QgSU5URVJOQUxfREFURV9GT1JNQVQgPSAnWVlZWS1NTS1ERFRISDptbTpzcy5TU1NaJztcbi8vIGN1cnJlbnRseSBzdXBwb3J0ZWQgbWF4ICYgbWluIHllYXJzIGluIEFNUCwgaS5lLiBmcm9tIDE5NzAtMDEtMDEgdGlsbCAyMDUwLTEyLTMxXG5jb25zdCBNSU5fU1VQUE9SVEVEX1lFQVIgPSAxOTcwO1xuY29uc3QgTUFYX1NVUFBPUlRFRF9ZRUFSID0gMjA1MDtcblxuY29uc3QgVVBEQVRFU19ESVIgPSAndXBkYXRlcyc7XG5jb25zdCBDT05URU5UX0RJU1BPU0lUSU9OX0hFQURFUiA9ICdDb250ZW50LURpc3Bvc2l0aW9uJztcbmNvbnN0IFVQREFURV9UTVBfRklMRSA9ICdhbXAtb2ZmbGluZS1pbnN0YWxsZXIudG1wJztcblxuY29uc3QgT1RIRVJfSUQgPSA5OTk5OTk5OTk7XG5jb25zdCBOUl9TWU5DX0hJU1RPUllfRU5UUklFUyA9IDIwO1xuY29uc3QgTlJfTE9HX0ZJTEVTID0gMTAwO1xuLy8gaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvSVNPXzg2MDEjRHVyYXRpb25zLCBleGFtcGxlOiBcIlAxWTJNMTBEVDJIMzBNXCJcbmNvbnN0IE9MRF9TWU5DX0xPR1NfRFVSQVRJT05fSVNPXzg2MDEgPSAnUDZNJztcbmNvbnN0IE5SX09MRF9TWU5DX0xPR1NfVE9fS0VFUF9NSU5JTVVNID0gTlJfU1lOQ19ISVNUT1JZX0VOVFJJRVM7XG5cbmNvbnN0IE1BU1RFUl9CUkFOQ0ggPSAnbWFzdGVyJztcbmNvbnN0IERFVkVMT1BfQlJBTkNIID0gJ2RldmVsb3AnO1xuY29uc3QgUkVMRUFTRV9CUkFOQ0hfUkVHRVggPSAvcmVsZWFzZVxcLy87XG5jb25zdCBSRUxFQVNFX0JSQU5DSEVTID0gW01BU1RFUl9CUkFOQ0gsIFJFTEVBU0VfQlJBTkNIX1JFR0VYXTtcblxuY29uc3QgRElTQUJMRV9DSEFOR0VMT0dTID0gJ0RJU0FCTEVfQ0hBTkdFTE9HUyc7XG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmZyZWV6ZSh7XG4gIFNFUlZFUl9VUkwsXG4gIEJBU0VfUkVTVF9VUkwsXG4gIFBST1RPQ09MLFxuICBCQVNFX1BPUlQsXG4gIENPTk5FQ1RJT05fVElNRU9VVCxcbiAgQ09OTkVDVElPTl9GT1JDRURfVElNRU9VVCxcbiAgVElNRU9VVF9DSEVDS19JTlRFUlZBTCxcbiAgTUFYX1JFVFJZX0FURU1QVFMsXG4gIEVSUk9SU19UT19SRVRSWSxcbiAgRVJST1JTX05PX0FNUF9TRVJWRVIsXG4gIENPTk5FQ1RJVklUWV9DSEVDS19JTlRFUlZBTCxcbiAgV09SS1NQQUNFX1VSTCxcbiAgTE9HSU5fVVJMLFxuICBERVNLVE9QX1VSTCxcbiAgREVTS1RPUF9DVVJSRU5UX1VSTCxcbiAgU1lOQ1VQX1JFRElSRUNUX1VSTCxcbiAgU1lOQ1VQX0hJU1RPUllfVEFSR0VULFxuICBTWU5DVVBfU1VNTUFSWV9VUkwsXG4gIEFDVElWSVRZX1BSRVZJRVdfVVJMLFxuICBBQ1RJVklUWV9FRElUX1VSTCxcbiAgVVBEQVRFX1VSTCxcbiAgU0VUVVBfVVJMLFxuICBTRVRUSU5HU19VUkwsXG4gIENPTExFQ1RJT05fVVNFUlMsXG4gIENPTExFQ1RJT05fV09SS1BBQ0VTLFxuICBDT0xMRUNUSU9OX1RFQU1NRU1CRVJTLFxuICBDT0xMRUNUSU9OX0NMSUVOVF9TRVRUSU5HUyxcbiAgQ09MTEVDVElPTl9HTE9CQUxfU0VUVElOR1MsXG4gIENPTExFQ1RJT05fQUNUSVZJVElFUyxcbiAgQ09MTEVDVElPTl9GSUVMRFMsXG4gIENPTExFQ1RJT05fUE9TU0lCTEVfVkFMVUVTLFxuICBDT0xMRUNUSU9OX1NZTkNVUF9MT0csXG4gIENPTExFQ1RJT05fTEFOR1MsXG4gIENPTExFQ1RJT05fV1NfU0VUVElOR1MsXG4gIENPTExFQ1RJT05fQ1VSUkVOQ1lfUkFURVMsXG4gIENPTExFQ1RJT05fRkVBVFVSRV9NQU5BR0VSLFxuICBDT0xMRUNUSU9OX0NPTlRBQ1RTLFxuICBDT0xMRUNUSU9OX1JFU09VUkNFUyxcbiAgQ09MTEVDVElPTl9SRVBPU0lUT1JZLFxuICBDT0xMRUNUSU9OX0dBWkVUVEVFUixcbiAgQ09MTEVDVElPTl9DQUxFTkRBUlMsXG4gIENPTExFQ1RJT05fQ0hBTkdFU0VUUyxcbiAgR0FaRVRURUVSX0RJU1RBTkNFX0RJVklERSxcbiAgREJfRklMRV9QUkVGSVgsXG4gIERCX0ZJTEVfRVhURU5TSU9OLFxuICBEQl9DT01NT05fREFUQVNUT1JFX09QVElPTlMsXG4gIERCX0FVVE9DT01QQUNUX0lOVEVSVkFMX01JTElTRUNPTkRTLFxuICBEQl9ERUZBVUxUX1FVRVJZX0xJTUlULFxuICBMQU5HVUFHRV9FTkdMSVNILFxuICBGU19MT0NBTEVTX0RJUkVDVE9SWSxcbiAgTEFOR1VBR0VfTUFTVEVSX1RSQU5TTEFUSU9OU19GSUxFLFxuICBMQU5HVUFHRV9UUkFOU0xBVElPTlNfRklMRSxcbiAgTEFOR1VBR0VfTkVXX1RSQU5TTEFUSU9OU19NVVNUX1NZTkMsXG4gIEFTQVJfRElSLFxuICBBUFBfRElSRUNUT1JZLFxuICBURVNUX0RJUkVDVE9SWSxcbiAgU1RBVElDX0RJUixcbiAgSU1BR0VTX0RJUixcbiAgRE9DX0lDT05TLFxuICBEQl9TVEFUSUNfRElSLFxuICBNSUdSQVRJT05TX0RJUixcbiAgSEFTSF9JVEVSQVRJT05TLFxuICBESUdFU1RfQUxHT1JJVEhNX1NIQTEsXG4gIERJR0VTVF9BTEdPUklUSE1fU0hBMjU2LFxuICBBQ1RJVklUWV9FRElULFxuICBBQ1RJVklUWV9WSUVXLFxuICBTWU5DVVBfRk9SQ0VfREFZUyxcbiAgU1lOQ1VQX0JFU1RfQkVGT1JFX0RBWVMsXG4gIFNZTkNVUF9OT19EQVRFLFxuICBTWU5DVVBfVFlQRV9UUkFOU0xBVElPTlMsXG4gIFNZTkNVUF9UWVBFX1VTRVJTLFxuICBTWU5DVVBfVFlQRV9BU1NFVFMsXG4gIFNZTkNVUF9UWVBFX1dPUktTUEFDRVMsXG4gIFNZTkNVUF9UWVBFX0dTLFxuICBTWU5DVVBfVFlQRV9FWENIQU5HRV9SQVRFUyxcbiAgU1lOQ1VQX1RZUEVfRkVBVFVSRV9NQU5BR0VSLFxuICBTWU5DVVBfVFlQRV9XT1JLU1BBQ0VfTUVNQkVSUyxcbiAgU1lOQ1VQX1RZUEVfQUxMX0ZJRUxEUyxcbiAgU1lOQ1VQX1RZUEVfQUNUSVZJVElFU19QVUxMLFxuICBTWU5DVVBfVFlQRV9BQ1RJVklUSUVTX1BVU0gsXG4gIFNZTkNVUF9UWVBFX0FDVElWSVRZX0ZJRUxEUyxcbiAgU1lOQ1VQX1RZUEVfQUNUSVZJVFlfRklFTERTX1NUUlVDVFVSQUxfQ0hBTkdFUyxcbiAgU1lOQ1VQX1RZUEVfQ09OVEFDVFNfUFVMTCxcbiAgU1lOQ1VQX1RZUEVfQ09OVEFDVFNfUFVTSCxcbiAgU1lOQ1VQX1RZUEVfQUNUSVZJVFlfUE9TU0lCTEVfVkFMVUVTLFxuICBTWU5DVVBfVFlQRV9DT05UQUNUX0ZJRUxEUyxcbiAgU1lOQ1VQX1RZUEVfQ09OVEFDVF9GSUVMRFNfU1RSVUNUVVJBTF9DSEFOR0VTLFxuICBTWU5DVVBfVFlQRV9DT05UQUNUX1BPU1NJQkxFX1ZBTFVFUyxcbiAgU1lOQ1VQX1RZUEVfUkVTT1VSQ0VTX1BVTEwsXG4gIFNZTkNVUF9UWVBFX1JFU09VUkNFU19QVVNILFxuICBTWU5DVVBfVFlQRV9SRVNPVVJDRV9GSUVMRFMsXG4gIFNZTkNVUF9UWVBFX1JFU09VUkNFX0ZJRUxEU19TVFJVQ1RVUkFMX0NIQU5HRVMsXG4gIFNZTkNVUF9UWVBFX1JFU09VUkNFX1BPU1NJQkxFX1ZBTFVFUyxcbiAgU1lOQ1VQX1RZUEVfQ09NTU9OX1BPU1NJQkxFX1ZBTFVFUyxcbiAgU1lOQ1VQX1RZUEVfV09SS1NQQUNFX1NFVFRJTkdTLFxuICBTWU5DVVBfVFlQRV9NQVBfVElMRVMsXG4gIFNZTkNVUF9UWVBFX0dBWkVUVEVFUixcbiAgU1lOQ1VQX1RZUEVfQ0FMRU5EQVJTLFxuICBTWU5DVVBfU1RBVFVTX1NVQ0NFU1MsXG4gIFNZTkNVUF9TVEFUVVNfRkFJTCxcbiAgU1lOQ1VQX1NUQVRVU19QQVJUSUFMLFxuICBTWU5DVVBfU1RBVFVTX0NBTkNFTEVELFxuICBTWU5DVVBfU1lOQ19SRVFVRVNURURfQVQsXG4gIFNZTkNVUF9TWU5DX1JFUVVFU1RFRF9CWSxcbiAgU1lOQ1VQX0RBVEVUSU1FX0ZJRUxELFxuICBTWU5DVVBfRElGRl9MRUZUT1ZFUixcbiAgU1lOQ1VQX0RFUEVOREVOQ1lfQ0hFQ0tfSU5URVJWQUwsXG4gIFNZTkNVUF9ERVRBSUxTX1NZTkNFRCxcbiAgU1lOQ1VQX0RFVEFJTFNfVU5TWU5DRUQsXG4gIFNZTkNVUF9SRVNPVVJDRV9QVUxMX0JBVENIX1NJWkUsXG4gIFNZTkNVUF9BQ1RJVklUSUVTX1BVTExfQkFUQ0hfU0laRSxcbiAgU1lOQ1VQX0NPTlRBQ1RTX1BVTExfQkFUQ0hfU0laRSxcbiAgQUNUSVZJVFlfU1RBVFVTX0RSQUZULFxuICBBQ1RJVklUWV9TVEFUVVNfVU5WQUxJREFURUQsXG4gIEFDVElWSVRZX1NUQVRVU19WQUxJREFURUQsXG4gIENVUlJFTkNZX0hPVVIsXG4gIERFRkFVTFRfQ1VSUkVOQ1ksXG4gIFJBVEVfU0FNRV9DVVJSRU5DWSxcbiAgUkFURV9DVVJSRU5DWV9OT1RfRk9VTkQsXG4gIENVUlJFTkNZX1BBSVIsXG4gIFZFUlNJT05fUEFUVEVSTixcbiAgVkVSU0lPTl9QQVRURVJOX0dST1VQU19UT19FWFRSQUNULFxuICBBTVBfQ09VTlRSWV9MT0dPLFxuICBBU1NFVFNfRElSRUNUT1JZLFxuICBCQVNFXzY0X1BOR19QUkVGSVgsXG4gIFRSQU5TUEFSRU5UX0ZMQUcsXG4gIEhFTFBfUERGX0ZJTEVOQU1FLFxuICBIRUxQX0RJUixcbiAgRU5EU19XSVRIX1BVTkNUVUFUSU9OX1JFR0VYLFxuICBNQVBfVElMRVNfRElSLFxuICBUSUxFU19aSVBfRklMRSxcbiAgTUFQX01BUktFUl9JTUFHRSxcbiAgTUFQX01BUktFUl9TSEFET1csXG4gIE1BUF9NQVJLRVJfQ0lSQ0xFX1JFRCxcbiAgTUFQX01BUktFUl9DSVJDTEVfR1JFRU4sXG4gIFBPTFlHT05fQkFTRV9DT0xPUixcbiAgREdfQ09NUEFOWV9OQU1FLFxuICBER19BRERSRVNTXzEsXG4gIERHX0FERFJFU1NfMixcbiAgREdfQ09OVEFDVF9JTkZPLFxuICBMT0dfRElSLFxuICBMT0dfRklMRV9OQU1FLFxuICBMT0dfRklMRV9FWFRFTlNJT04sXG4gIE1FU1NBR0VfVElNRU9VVCxcbiAgTUVTU0FHRV9ESVNBUFBFQVJfVElNRU9VVCxcbiAgTUVTU0FHRV9DSEVDS19JTlRFUlZBTCxcbiAgTUVTU0FHRV9BTklNQVRJT05fRFVSQVRJT04sXG4gIElOVEVSTkFMX0RBVEVfRk9STUFULFxuICBNSU5fU1VQUE9SVEVEX1lFQVIsXG4gIE1BWF9TVVBQT1JURURfWUVBUixcbiAgVVBEQVRFU19ESVIsXG4gIENPTlRFTlRfRElTUE9TSVRJT05fSEVBREVSLFxuICBVUERBVEVfVE1QX0ZJTEUsXG4gIE9USEVSX0lELFxuICBOUl9TWU5DX0hJU1RPUllfRU5UUklFUyxcbiAgTlJfTE9HX0ZJTEVTLFxuICBPTERfU1lOQ19MT0dTX0RVUkFUSU9OX0lTT184NjAxLFxuICBOUl9PTERfU1lOQ19MT0dTX1RPX0tFRVBfTUlOSU1VTSxcbiAgTUFTVEVSX0JSQU5DSCxcbiAgREVWRUxPUF9CUkFOQ0gsXG4gIFJFTEVBU0VfQlJBTkNIX1JFR0VYLFxuICBSRUxFQVNFX0JSQU5DSEVTLFxuICBESVNBQkxFX0NIQU5HRUxPR1Ncbn0pO1xuIiwiaW1wb3J0IFRlc3RBUEZpZWxkIGZyb20gJy4vYWN0aXZpdHlQcmV2aWV3L2NvbXBvbmVudHMvVGVzdEFQRmllbGQnO1xuaW1wb3J0IFRlc3RpbmdTZWN0aW9uIGZyb20gJy4vYWN0aXZpdHlQcmV2aWV3L2NvbXBvbmVudHMvVGVzdGluZ1NlY3Rpb24nO1xuaW1wb3J0IENvbnN0YW50cyBmcm9tICcuL3V0aWxzL0NvbnN0YW50cyc7XG5cbmV4cG9ydCB7IFRlc3RBUEZpZWxkLCBUZXN0aW5nU2VjdGlvbiwgQ29uc3RhbnRzIH07XG5cbmV4cG9ydCBkZWZhdWx0IHsgVGVzdEFQRmllbGQsIFRlc3RpbmdTZWN0aW9uLCBDb25zdGFudHMgfTtcbiJdLCJuYW1lcyI6WyJUZXN0QVBGaWVsZCIsInRybkxhYmVsIiwidmFsdWUiLCJpbmxpbmUiLCJzZXBhcmF0b3IiLCJuYW1lQ2xhc3MiLCJ2YWx1ZUNsYXNzIiwicHJvcHMiLCJ0cmFuc2xhdGUiLCJhbXBMb2dnZXIiLCJsb2ciLCJ1c2VTZXBhcmF0b3IiLCJkaXNwbGF5Q2xhc3MiLCJmaWVsZENsYXNzIiwic3R5bGVzIiwiYmxvY2siLCJjbGFzc05hbWVzIiwiZmllbGRWYWx1ZUNsYXNzIiwiZGlzcGxheVZhbHVlIiwiQXJyYXkiLCJpc0FycmF5IiwiT2JqZWN0IiwiZm9yRWFjaCIsInB1c2giLCJ2Iiwic29ydCIsImpvaW4iLCJTdHJpbmciLCJ1c2VJbm5lckhUTUwiLCJfX2h0bWwiLCJmaWVsZE5hbWVDbGFzcyIsInRpdGxlIiwiX2dldFZhbHVlIiwiQ29tcG9uZW50IiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwiYW55IiwiYm9vbCIsIm9iamVjdCIsImlzUmVxdWlyZWQiLCJmdW5jIiwiVGVzdGluZ1NlY3Rpb24iLCJTRVJWRVJfVVJMIiwiQkFTRV9SRVNUX1VSTCIsIlBST1RPQ09MIiwiQkFTRV9QT1JUIiwiQ09OTkVDVElPTl9USU1FT1VUIiwiQ09OTkVDVElPTl9GT1JDRURfVElNRU9VVCIsIlRJTUVPVVRfQ0hFQ0tfSU5URVJWQUwiLCJNQVhfUkVUUllfQVRFTVBUUyIsIkVSUk9SU19UT19SRVRSWSIsIkVSUk9SU19OT19BTVBfU0VSVkVSIiwiQ09OTkVDVElWSVRZX0NIRUNLX0lOVEVSVkFMIiwiV09SS1NQQUNFX1VSTCIsIkxPR0lOX1VSTCIsIkRFU0tUT1BfVVJMIiwiREVTS1RPUF9DVVJSRU5UX1VSTCIsIlNZTkNVUF9SRURJUkVDVF9VUkwiLCJTWU5DVVBfSElTVE9SWV9UQVJHRVQiLCJTWU5DVVBfU1VNTUFSWV9VUkwiLCJBQ1RJVklUWV9QUkVWSUVXX1VSTCIsIkFDVElWSVRZX0VESVRfVVJMIiwiVVBEQVRFX1VSTCIsIlNFVFVQX1VSTCIsIlNFVFRJTkdTX1VSTCIsIkNPTExFQ1RJT05fVVNFUlMiLCJDT0xMRUNUSU9OX1dPUktQQUNFUyIsIkNPTExFQ1RJT05fVEVBTU1FTUJFUlMiLCJDT0xMRUNUSU9OX0NMSUVOVF9TRVRUSU5HUyIsIkNPTExFQ1RJT05fR0xPQkFMX1NFVFRJTkdTIiwiQ09MTEVDVElPTl9BQ1RJVklUSUVTIiwiQ09MTEVDVElPTl9GSUVMRFMiLCJDT0xMRUNUSU9OX1BPU1NJQkxFX1ZBTFVFUyIsIkNPTExFQ1RJT05fU1lOQ1VQX0xPRyIsIkNPTExFQ1RJT05fTEFOR1MiLCJDT0xMRUNUSU9OX1dTX1NFVFRJTkdTIiwiQ09MTEVDVElPTl9DVVJSRU5DWV9SQVRFUyIsIkNPTExFQ1RJT05fRkVBVFVSRV9NQU5BR0VSIiwiQ09MTEVDVElPTl9DT05UQUNUUyIsIkNPTExFQ1RJT05fUkVTT1VSQ0VTIiwiQ09MTEVDVElPTl9SRVBPU0lUT1JZIiwiQ09MTEVDVElPTl9HQVpFVFRFRVIiLCJDT0xMRUNUSU9OX0NBTEVOREFSUyIsIkNPTExFQ1RJT05fQ0hBTkdFU0VUUyIsIkdBWkVUVEVFUl9ESVNUQU5DRV9ESVZJREUiLCJEQl9GSUxFX1BSRUZJWCIsIkRCX0ZJTEVfRVhURU5TSU9OIiwiREJfQ09NTU9OX0RBVEFTVE9SRV9PUFRJT05TIiwiYXV0b2xvYWQiLCJjb3JydXB0QWxlcnRUaHJlc2hvbGQiLCJEQl9BVVRPQ09NUEFDVF9JTlRFUlZBTF9NSUxJU0VDT05EUyIsIkRCX0RFRkFVTFRfUVVFUllfTElNSVQiLCJMQU5HVUFHRV9FTkdMSVNIIiwiRlNfTE9DQUxFU19ESVJFQ1RPUlkiLCJMQU5HVUFHRV9NQVNURVJfVFJBTlNMQVRJT05TX0ZJTEUiLCJMQU5HVUFHRV9UUkFOU0xBVElPTlNfRklMRSIsIkxBTkdVQUdFX05FV19UUkFOU0xBVElPTlNfTVVTVF9TWU5DIiwiQVNBUl9ESVIiLCJBUFBfRElSRUNUT1JZIiwiVEVTVF9ESVJFQ1RPUlkiLCJTVEFUSUNfRElSIiwiSU1BR0VTX0RJUiIsIkRPQ19JQ09OUyIsIkRCX1NUQVRJQ19ESVIiLCJNSUdSQVRJT05TX0RJUiIsIkhBU0hfSVRFUkFUSU9OUyIsIkRJR0VTVF9BTEdPUklUSE1fU0hBMSIsIkRJR0VTVF9BTEdPUklUSE1fU0hBMjU2IiwiQUNUSVZJVFlfRURJVCIsIkFDVElWSVRZX1ZJRVciLCJTWU5DVVBfRk9SQ0VfREFZUyIsIlNZTkNVUF9CRVNUX0JFRk9SRV9EQVlTIiwiU1lOQ1VQX05PX0RBVEUiLCJTWU5DVVBfVFlQRV9UUkFOU0xBVElPTlMiLCJTWU5DVVBfVFlQRV9VU0VSUyIsIlNZTkNVUF9UWVBFX0FTU0VUUyIsIlNZTkNVUF9UWVBFX1dPUktTUEFDRVMiLCJTWU5DVVBfVFlQRV9HUyIsIlNZTkNVUF9UWVBFX0VYQ0hBTkdFX1JBVEVTIiwiU1lOQ1VQX1RZUEVfRkVBVFVSRV9NQU5BR0VSIiwiU1lOQ1VQX1RZUEVfV09SS1NQQUNFX01FTUJFUlMiLCJTWU5DVVBfVFlQRV9BTExfRklFTERTIiwiU1lOQ1VQX1RZUEVfQUNUSVZJVElFU19QVUxMIiwiU1lOQ1VQX1RZUEVfQUNUSVZJVElFU19QVVNIIiwiU1lOQ1VQX1RZUEVfQUNUSVZJVFlfRklFTERTIiwiU1lOQ1VQX1RZUEVfQUNUSVZJVFlfRklFTERTX1NUUlVDVFVSQUxfQ0hBTkdFUyIsIlNZTkNVUF9UWVBFX0NPTlRBQ1RTX1BVTEwiLCJTWU5DVVBfVFlQRV9DT05UQUNUU19QVVNIIiwiU1lOQ1VQX1RZUEVfQUNUSVZJVFlfUE9TU0lCTEVfVkFMVUVTIiwiU1lOQ1VQX1RZUEVfQ09OVEFDVF9GSUVMRFMiLCJTWU5DVVBfVFlQRV9DT05UQUNUX0ZJRUxEU19TVFJVQ1RVUkFMX0NIQU5HRVMiLCJTWU5DVVBfVFlQRV9DT05UQUNUX1BPU1NJQkxFX1ZBTFVFUyIsIlNZTkNVUF9UWVBFX1JFU09VUkNFU19QVUxMIiwiU1lOQ1VQX1RZUEVfUkVTT1VSQ0VTX1BVU0giLCJTWU5DVVBfVFlQRV9SRVNPVVJDRV9GSUVMRFMiLCJTWU5DVVBfVFlQRV9SRVNPVVJDRV9GSUVMRFNfU1RSVUNUVVJBTF9DSEFOR0VTIiwiU1lOQ1VQX1RZUEVfUkVTT1VSQ0VfUE9TU0lCTEVfVkFMVUVTIiwiU1lOQ1VQX1RZUEVfQ09NTU9OX1BPU1NJQkxFX1ZBTFVFUyIsIlNZTkNVUF9UWVBFX1dPUktTUEFDRV9TRVRUSU5HUyIsIlNZTkNVUF9UWVBFX01BUF9USUxFUyIsIlNZTkNVUF9UWVBFX0dBWkVUVEVFUiIsIlNZTkNVUF9UWVBFX0NBTEVOREFSUyIsIlNZTkNVUF9TVEFUVVNfU1VDQ0VTUyIsIlNZTkNVUF9TVEFUVVNfRkFJTCIsIlNZTkNVUF9TVEFUVVNfUEFSVElBTCIsIlNZTkNVUF9TVEFUVVNfQ0FOQ0VMRUQiLCJTWU5DVVBfU1lOQ19SRVFVRVNURURfQVQiLCJTWU5DVVBfU1lOQ19SRVFVRVNURURfQlkiLCJTWU5DVVBfREFURVRJTUVfRklFTEQiLCJTWU5DVVBfRElGRl9MRUZUT1ZFUiIsIlNZTkNVUF9ERVBFTkRFTkNZX0NIRUNLX0lOVEVSVkFMIiwiU1lOQ1VQX0RFVEFJTFNfU1lOQ0VEIiwiU1lOQ1VQX0RFVEFJTFNfVU5TWU5DRUQiLCJTWU5DVVBfUkVTT1VSQ0VfUFVMTF9CQVRDSF9TSVpFIiwiU1lOQ1VQX0FDVElWSVRJRVNfUFVMTF9CQVRDSF9TSVpFIiwiU1lOQ1VQX0NPTlRBQ1RTX1BVTExfQkFUQ0hfU0laRSIsIkFDVElWSVRZX1NUQVRVU19EUkFGVCIsIkFDVElWSVRZX1NUQVRVU19VTlZBTElEQVRFRCIsIkFDVElWSVRZX1NUQVRVU19WQUxJREFURUQiLCJDVVJSRU5DWV9IT1VSIiwiREVGQVVMVF9DVVJSRU5DWSIsIlJBVEVfU0FNRV9DVVJSRU5DWSIsIlJBVEVfQ1VSUkVOQ1lfTk9UX0ZPVU5EIiwiQ1VSUkVOQ1lfUEFJUiIsIlZFUlNJT05fUEFUVEVSTiIsIlZFUlNJT05fUEFUVEVSTl9HUk9VUFNfVE9fRVhUUkFDVCIsIkFNUF9DT1VOVFJZX0xPR08iLCJBU1NFVFNfRElSRUNUT1JZIiwiQkFTRV82NF9QTkdfUFJFRklYIiwiVFJBTlNQQVJFTlRfRkxBRyIsIkhFTFBfUERGX0ZJTEVOQU1FIiwiSEVMUF9ESVIiLCJFTkRTX1dJVEhfUFVOQ1RVQVRJT05fUkVHRVgiLCJNQVBfVElMRVNfRElSIiwiVElMRVNfWklQX0ZJTEUiLCJNQVBfTUFSS0VSX0lNQUdFIiwiTUFQX01BUktFUl9TSEFET1ciLCJNQVBfTUFSS0VSX0NJUkNMRV9SRUQiLCJNQVBfTUFSS0VSX0NJUkNMRV9HUkVFTiIsIlBPTFlHT05fQkFTRV9DT0xPUiIsIkRHX0NPTVBBTllfTkFNRSIsIkRHX0FERFJFU1NfMSIsIkRHX0FERFJFU1NfMiIsIkRHX0NPTlRBQ1RfSU5GTyIsIkxPR19ESVIiLCJMT0dfRklMRV9OQU1FIiwiTE9HX0ZJTEVfRVhURU5TSU9OIiwiTUVTU0FHRV9USU1FT1VUIiwiTUVTU0FHRV9ESVNBUFBFQVJfVElNRU9VVCIsIk1FU1NBR0VfQ0hFQ0tfSU5URVJWQUwiLCJNRVNTQUdFX0FOSU1BVElPTl9EVVJBVElPTiIsIklOVEVSTkFMX0RBVEVfRk9STUFUIiwiTUlOX1NVUFBPUlRFRF9ZRUFSIiwiTUFYX1NVUFBPUlRFRF9ZRUFSIiwiVVBEQVRFU19ESVIiLCJDT05URU5UX0RJU1BPU0lUSU9OX0hFQURFUiIsIlVQREFURV9UTVBfRklMRSIsIk9USEVSX0lEIiwiTlJfU1lOQ19ISVNUT1JZX0VOVFJJRVMiLCJOUl9MT0dfRklMRVMiLCJPTERfU1lOQ19MT0dTX0RVUkFUSU9OX0lTT184NjAxIiwiTlJfT0xEX1NZTkNfTE9HU19UT19LRUVQX01JTklNVU0iLCJNQVNURVJfQlJBTkNIIiwiREVWRUxPUF9CUkFOQ0giLCJSRUxFQVNFX0JSQU5DSF9SRUdFWCIsIlJFTEVBU0VfQlJBTkNIRVMiLCJESVNBQkxFX0NIQU5HRUxPR1MiLCJtb2R1bGUiLCJmcmVlemUiLCJDb25zdGFudHMiXSwibWFwcGluZ3MiOiI7OztBQUFBLFNBQVMsV0FBVyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUU7RUFDN0IsS0FBSyxHQUFHLEtBQUssS0FBSyxDQUFDLEdBQUcsR0FBRyxHQUFHLEVBQUUsQ0FBQztFQUMvQixJQUFJLFFBQVEsR0FBRyxHQUFHLENBQUMsUUFBUSxDQUFDOztFQUU1QixJQUFJLENBQUMsR0FBRyxJQUFJLE9BQU8sUUFBUSxLQUFLLFdBQVcs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
