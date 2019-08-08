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

/* eslint-disable max-len */

/**
 * @author Nadejda Mandrescu
 */

var PUBLIC_VIEW_CHANGE_PASSWORD = '/PUBLIC VIEW/Login - User Management/Change Password';
var PUBLIC_VIEW_TROUBLE_SIGN_IN = '/PUBLIC VIEW/Login - User Management/Trouble signing in';
var ACTIVITY_DELIVERY_RATE = '/PROJECT MANAGEMENT/Funding/Funding Information/Delivery rate';
var ACTIVITY_PROJECT_ID_AND_PLANNING = '/PROJECT MANAGEMENT/Project ID and Planning';
var ACTIVITY_DURATION_OF_PROJECT = '/PROJECT MANAGEMENT/Project ID and Planning/Planning/Duration of Project';
var ACTIVITY_TEAM_LEADER = '/PROJECT MANAGEMENT/Project ID and Planning/Identification/Data Team Leader';
var ACTIVITY_SAME_AS_PROPOSED_START_DATE = '/Activity Form/Planning/Actual Start Date/Same As Proposed Start Date';
var ACTIVITY_SAME_AS_PROPOSED_APPROVAL_DATE = '/Activity Form/Planning/Actual Approval Date/Same As Proposed Approval Date';
var ACTIVITY_IDENTIFICATION = '/Activity Form/Identification';
var ACTIVITY_LAST_UPDATED_BY = '/Activity Form/Identification/Activity Last Updated by';
var ACTIVITY_LAST_UPDATED_ON = '/Activity Form/Identification/Activity Updated On';
var ACTIVITY_FUNDING = '/Activity Form/Funding';
var AF_FUNDING_FUNDINGGROUP_FUNDINGITEM = ACTIVITY_FUNDING + '/Funding Group/Funding Item';
var ACTIVITY_SECTORS = '/Activity Form/Sectors';
var ACTIVITY_PRIMARY_SECTORS = '/Activity Form/Sectors/Primary Sectors';
var ACTIVITY_SECONDARY_SECTORS = '/Activity Form/Sectors/Secondary Sectors';

var ACTIVITY_STRUCTURES = '/Activity Form/Structures';
var ACTIVITY_STRUCTURES_ADD_STRUCTURE = ACTIVITY_STRUCTURES + '/Add Structure';

var ACTIVITY_ORGANIZATIONS = '/Activity Form/Organizations';
var ACTIVITY_ORGANIZATIONS_DONOR_ORGANIZATION = ACTIVITY_ORGANIZATIONS + '/Donor Organization';
var ACTIVITY_ORGANIZATIONS_BENEFICIARY_AGENCY = ACTIVITY_ORGANIZATIONS + '/Beneficiary Agency';
var ACTIVITY_ORGANIZATIONS_CONTRACTING_AGENCY = ACTIVITY_ORGANIZATIONS + '/Contracting Agency';
var ACTIVITY_ORGANIZATIONS_EXECUTING_AGENCY = ACTIVITY_ORGANIZATIONS + '/Executing Agency';
var ACTIVITY_ORGANIZATIONS_IMPLEMENTING_AGENCY = ACTIVITY_ORGANIZATIONS + '/Implementing Agency';
var ACTIVITY_ORGANIZATIONS_REGIONAL_GROUP = ACTIVITY_ORGANIZATIONS + '/Regional Group';
var ACTIVITY_ORGANIZATIONS_RELATED_GOVERNMENT_ORGANIZATION = ACTIVITY_ORGANIZATIONS + '/Related Government Organization';
var ACTIVITY_ORGANIZATIONS_SECTOR_GROUP = ACTIVITY_ORGANIZATIONS + '/Sector Group';

var ADD_FUNDING_AUTO = 'Add Funding Item Automatically';
var ACTIVITY_ORGANIZATIONS_BENEFICIARY_AGENCY_ADD_FUNDING_AUTO = ACTIVITY_ORGANIZATIONS_BENEFICIARY_AGENCY + '/' + ADD_FUNDING_AUTO;
var ACTIVITY_ORGANIZATIONS_CONTRACTING_AGENCY_ADD_FUNDING_AUTO = ACTIVITY_ORGANIZATIONS_CONTRACTING_AGENCY + '/' + ADD_FUNDING_AUTO;
var ACTIVITY_ORGANIZATIONS_DONOR_ORGANIZATION_ADD_FUNDING_AUTO = ACTIVITY_ORGANIZATIONS_DONOR_ORGANIZATION + '/' + ADD_FUNDING_AUTO;
var ACTIVITY_ORGANIZATIONS_EXECUTING_AGENCY_ADD_FUNDING_AUTO = ACTIVITY_ORGANIZATIONS_EXECUTING_AGENCY + '/' + ADD_FUNDING_AUTO;
var ACTIVITY_ORGANIZATIONS_IMPLEMENTING_AGENCY_ADD_FUNDING_AUTO = ACTIVITY_ORGANIZATIONS_IMPLEMENTING_AGENCY + '/' + ADD_FUNDING_AUTO;
var ACTIVITY_ORGANIZATIONS_REGIONAL_GROUP_ADD_FUNDING_AUTO = ACTIVITY_ORGANIZATIONS_REGIONAL_GROUP + '/' + ADD_FUNDING_AUTO;
var ACTIVITY_ORGANIZATIONS_RESPONSIBLE_ORGANIZATION_ADD_FUNDING_AUTO = ACTIVITY_ORGANIZATIONS_RELATED_GOVERNMENT_ORGANIZATION + '/' + ADD_FUNDING_AUTO;
var ACTIVITY_ORGANIZATIONS_SECTOR_GROUP_ADD_FUNDING_AUTO = ACTIVITY_ORGANIZATIONS_SECTOR_GROUP + '/' + ADD_FUNDING_AUTO;

var ACTIVITY_FUNDING_SEARCH = ACTIVITY_FUNDING + '/Search Funding Organizations';
var ACTIVITY_FUNDING_SEARCH_ORGANIZATION = ACTIVITY_FUNDING_SEARCH + '/Search Organizations';
var ACTIVITY_FUNDING_SELECT_ORG_TYPE = ACTIVITY_FUNDING_SEARCH + '/Select Organization Type';

var ACTIVITY_PROGRAM = '/Activity Form/Program';
var ACTIVITY_PLANNING = '/Activity Form/Planning';

var ACTIVITY_CONTACT = '/Activity Form/Contacts';
var ACTIVITY_DOCUMENTS_ADD_DOCUMENT = '/Activity Form/Related Documents/Add New Document';
var ACTIVITY_DOCUMENTS_ADD_WEBLINK = '/Activity Form/Related Documents/Add New Web Link';

var ACTIVITY_ISSUES_ADD_ISSUE = '/Activity Form/Issues Section/Add Issue';
var ACTIVITY_ISSUES_DELETE_ISSUE = '/Activity Form/Issues Section/Issue/Delete Item';
var ACTIVITY_ISSUES_ADD_MEASURE = '/Activity Form/Issues Section/Issue/Add Item';
var ACTIVITY_ISSUES_DELETE_MEASURE = '/Activity Form/Issues Section/Issue/Measure/Delete Item';
var ACTIVITY_ISSUES_ADD_ACTOR = '/Activity Form/Issues Section/Issue/Measure/Add Item';
var ACTIVITY_ISSUES_DELETE_ACTOR = '/Activity Form/Issues Section/Issue/Measure/Actor/Delete Item';

var ACTIVITY_DISBURSEMENTS_FUNDING_FLOWS_ORGROLE_ADD_IMPLEMENTING_AGENCY = AF_FUNDING_FUNDINGGROUP_FUNDINGITEM + '/Disbursements/Disbursements Table/Funding Flows OrgRole Selector/Add Implementing Agency';
var ACTIVITY_DISBURSEMENTS_FUNDING_FLOWS_ORGROLE_ADD_CONTRACTING_AGENCY = AF_FUNDING_FUNDINGGROUP_FUNDINGITEM + '/Disbursements/Disbursements Table/Funding Flows OrgRole Selector/Add Contracting Agency';
var ACTIVITY_DISBURSEMENTS_FUNDING_FLOWS_ORGROLE_ADD_BENEFICIARY_AGENCY = AF_FUNDING_FUNDINGGROUP_FUNDINGITEM + '/Disbursements/Disbursements Table/Funding Flows OrgRole Selector/Add Beneficiary Agency';
var ACTIVITY_DISBURSEMENTS_FUNDING_FLOWS_ORGROLE_ADD_DONOR_ORGANIZATION = AF_FUNDING_FUNDINGGROUP_FUNDINGITEM + '/Disbursements/Disbursements Table/Funding Flows OrgRole Selector/Add Donor Organization';
var ACTIVITY_DISBURSEMENTS_FUNDING_FLOWS_ORGROLE_ADD_EXECUTING_AGENCY = AF_FUNDING_FUNDINGGROUP_FUNDINGITEM + '/Disbursements/Disbursements Table/Funding Flows OrgRole Selector/Add Executing Agency';
var ACTIVITY_DISBURSEMENTS_FUNDING_FLOWS_ORGROLE_ADD_REGIONAL_GROUP = AF_FUNDING_FUNDINGGROUP_FUNDINGITEM + '/Disbursements/Disbursements Table/Funding Flows OrgRole Selector/Add Regional Group';
var ACTIVITY_DISBURSEMENTS_FUNDING_FLOWS_ORGROLE_ADD_RESPONSIBLE_ORGANIZATION = AF_FUNDING_FUNDINGGROUP_FUNDINGITEM + '/Disbursements/Disbursements Table/Funding Flows OrgRole Selector/Add Responsible Organization';
var ACTIVITY_DISBURSEMENTS_FUNDING_FLOWS_ORGROLE_ADD_SECTOR_GROUP = AF_FUNDING_FUNDINGGROUP_FUNDINGITEM + '/Disbursements/Disbursements Table/Funding Flows OrgRole Selector/Add Sector Group';

var ACTIVITY_COMMITMENTS_FUNDING_FLOWS_ORGROLE_ADD_IMPLEMENTING_AGENCY = AF_FUNDING_FUNDINGGROUP_FUNDINGITEM + '/Commitments/Commitments Table/Funding Flows OrgRole Selector/Add Implementing Agency';
var ACTIVITY_COMMITMENTS_FUNDING_FLOWS_ORGROLE_ADD_CONTRACTING_AGENCY = AF_FUNDING_FUNDINGGROUP_FUNDINGITEM + '/Commitments/Commitments Table/Funding Flows OrgRole Selector/Add Contracting Agency';
var ACTIVITY_COMMITMENTS_FUNDING_FLOWS_ORGROLE_ADD_BENEFICIARY_AGENCY = AF_FUNDING_FUNDINGGROUP_FUNDINGITEM + '/Commitments/Commitments Table/Funding Flows OrgRole Selector/Add Beneficiary Agency';
var ACTIVITY_COMMITMENTS_FUNDING_FLOWS_ORGROLE_ADD_DONOR_ORGANIZATION = AF_FUNDING_FUNDINGGROUP_FUNDINGITEM + '/Commitments/Commitments Table/Funding Flows OrgRole Selector/Add Donor Organization';
var ACTIVITY_COMMITMENTS_FUNDING_FLOWS_ORGROLE_ADD_EXECUTING_AGENCY = AF_FUNDING_FUNDINGGROUP_FUNDINGITEM + '/Commitments/Commitments Table/Funding Flows OrgRole Selector/Add Executing Agency';
var ACTIVITY_COMMITMENTS_FUNDING_FLOWS_ORGROLE_ADD_REGIONAL_GROUP = AF_FUNDING_FUNDINGGROUP_FUNDINGITEM + '/Commitments/Commitments Table/Funding Flows OrgRole Selector/Add Regional Group';
var ACTIVITY_COMMITMENTS_FUNDING_FLOWS_ORGROLE_ADD_RESPONSIBLE_ORGANIZATION = AF_FUNDING_FUNDINGGROUP_FUNDINGITEM + '/Commitments/Commitments Table/Funding Flows OrgRole Selector/Add Responsible Organization';
var ACTIVITY_COMMITMENTS_FUNDING_FLOWS_ORGROLE_ADD_SECTOR_GROUP = AF_FUNDING_FUNDINGGROUP_FUNDINGITEM + '/Commitments/Commitments Table/Funding Flows OrgRole Selector/Add Sector Group';

var ACTIVITY_EXPENDITURES_FUNDING_FLOWS_ORGROLE_ADD_IMPLEMENTING_AGENCY = AF_FUNDING_FUNDINGGROUP_FUNDINGITEM + '/Expenditures/Expenditures Table/Funding Flows OrgRole Selector/Add Implementing Agency';
var ACTIVITY_EXPENDITURES_FUNDING_FLOWS_ORGROLE_ADD_CONTRACTING_AGENCY = AF_FUNDING_FUNDINGGROUP_FUNDINGITEM + '/Expenditures/Expenditures Table/Funding Flows OrgRole Selector/Add Contracting Agency';
var ACTIVITY_EXPENDITURES_FUNDING_FLOWS_ORGROLE_ADD_BENEFICIARY_AGENCY = AF_FUNDING_FUNDINGGROUP_FUNDINGITEM + '/Expenditures/Expenditures Table/Funding Flows OrgRole Selector/Add Beneficiary Agency';
var ACTIVITY_EXPENDITURES_FUNDING_FLOWS_ORGROLE_ADD_DONOR_ORGANIZATION = AF_FUNDING_FUNDINGGROUP_FUNDINGITEM + '/Expenditures/Expenditures Table/Funding Flows OrgRole Selector/Add Donor Organization';
var ACTIVITY_EXPENDITURES_FUNDING_FLOWS_ORGROLE_ADD_EXECUTING_AGENCY = AF_FUNDING_FUNDINGGROUP_FUNDINGITEM + '/Expenditures/Expenditures Table/Funding Flows OrgRole Selector/Add Executing Agency';
var ACTIVITY_EXPENDITURES_FUNDING_FLOWS_ORGROLE_ADD_REGIONAL_GROUP = AF_FUNDING_FUNDINGGROUP_FUNDINGITEM + '/Expenditures/Expenditures Table/Funding Flows OrgRole Selector/Add Regional Group';
var ACTIVITY_EXPENDITURES_FUNDING_FLOWS_ORGROLE_ADD_RESPONSIBLE_ORGANIZATION = AF_FUNDING_FUNDINGGROUP_FUNDINGITEM + '/Expenditures/Expenditures Table/Funding Flows OrgRole Selector/Add Responsible Organization';
var ACTIVITY_EXPENDITURES_FUNDING_FLOWS_ORGROLE_ADD_SECTOR_GROUP = AF_FUNDING_FUNDINGGROUP_FUNDINGITEM + '/Expenditures/Expenditures Table/Funding Flows OrgRole Selector/Add Sector Group';

var MTEF_PROJECTIONS = AF_FUNDING_FUNDINGGROUP_FUNDINGITEM + '/MTEF Projections';
var MTEF_PROJECTIONS_AMOUNT = AF_FUNDING_FUNDINGGROUP_FUNDINGITEM + '/MTEF Projections/MTEF Projections Table/Amount';
var MTEF_PROJECTIONS_CURRENCY = AF_FUNDING_FUNDINGGROUP_FUNDINGITEM + '/MTEF Projections/MTEF Projections Table/Currency';
var MTEF_PROJECTIONS_PROJECTION = AF_FUNDING_FUNDINGGROUP_FUNDINGITEM + '/MTEF Projections/MTEF Projections Table/MTEF Projection';
var MTEF_PROJECTIONS_DATE = AF_FUNDING_FUNDINGGROUP_FUNDINGITEM + '/MTEF Projections/MTEF Projections Table/Projection Date';

var FeatureManagerConstants = Object.freeze({
  PUBLIC_VIEW_CHANGE_PASSWORD: PUBLIC_VIEW_CHANGE_PASSWORD,
  PUBLIC_VIEW_TROUBLE_SIGN_IN: PUBLIC_VIEW_TROUBLE_SIGN_IN,
  ACTIVITY_DELIVERY_RATE: ACTIVITY_DELIVERY_RATE,
  ACTIVITY_PROJECT_ID_AND_PLANNING: ACTIVITY_PROJECT_ID_AND_PLANNING,
  ACTIVITY_DURATION_OF_PROJECT: ACTIVITY_DURATION_OF_PROJECT,
  ACTIVITY_TEAM_LEADER: ACTIVITY_TEAM_LEADER,
  ACTIVITY_SAME_AS_PROPOSED_START_DATE: ACTIVITY_SAME_AS_PROPOSED_START_DATE,
  ACTIVITY_SAME_AS_PROPOSED_APPROVAL_DATE: ACTIVITY_SAME_AS_PROPOSED_APPROVAL_DATE,
  ACTIVITY_IDENTIFICATION: ACTIVITY_IDENTIFICATION,
  ACTIVITY_LAST_UPDATED_BY: ACTIVITY_LAST_UPDATED_BY,
  ACTIVITY_LAST_UPDATED_ON: ACTIVITY_LAST_UPDATED_ON,
  ACTIVITY_FUNDING: ACTIVITY_FUNDING,
  AF_FUNDING_FUNDINGGROUP_FUNDINGITEM: AF_FUNDING_FUNDINGGROUP_FUNDINGITEM,
  ACTIVITY_SECTORS: ACTIVITY_SECTORS,
  ACTIVITY_PRIMARY_SECTORS: ACTIVITY_PRIMARY_SECTORS,
  ACTIVITY_SECONDARY_SECTORS: ACTIVITY_SECONDARY_SECTORS,
  ACTIVITY_STRUCTURES: ACTIVITY_STRUCTURES,
  ACTIVITY_STRUCTURES_ADD_STRUCTURE: ACTIVITY_STRUCTURES_ADD_STRUCTURE,
  ACTIVITY_ORGANIZATIONS: ACTIVITY_ORGANIZATIONS,
  ACTIVITY_ORGANIZATIONS_DONOR_ORGANIZATION: ACTIVITY_ORGANIZATIONS_DONOR_ORGANIZATION,
  ACTIVITY_ORGANIZATIONS_BENEFICIARY_AGENCY: ACTIVITY_ORGANIZATIONS_BENEFICIARY_AGENCY,
  ACTIVITY_ORGANIZATIONS_CONTRACTING_AGENCY: ACTIVITY_ORGANIZATIONS_CONTRACTING_AGENCY,
  ACTIVITY_ORGANIZATIONS_EXECUTING_AGENCY: ACTIVITY_ORGANIZATIONS_EXECUTING_AGENCY,
  ACTIVITY_ORGANIZATIONS_IMPLEMENTING_AGENCY: ACTIVITY_ORGANIZATIONS_IMPLEMENTING_AGENCY,
  ACTIVITY_ORGANIZATIONS_REGIONAL_GROUP: ACTIVITY_ORGANIZATIONS_REGIONAL_GROUP,
  ACTIVITY_ORGANIZATIONS_RELATED_GOVERNMENT_ORGANIZATION: ACTIVITY_ORGANIZATIONS_RELATED_GOVERNMENT_ORGANIZATION,
  ACTIVITY_ORGANIZATIONS_SECTOR_GROUP: ACTIVITY_ORGANIZATIONS_SECTOR_GROUP,
  ADD_FUNDING_AUTO: ADD_FUNDING_AUTO,
  ACTIVITY_ORGANIZATIONS_BENEFICIARY_AGENCY_ADD_FUNDING_AUTO: ACTIVITY_ORGANIZATIONS_BENEFICIARY_AGENCY_ADD_FUNDING_AUTO,
  ACTIVITY_ORGANIZATIONS_CONTRACTING_AGENCY_ADD_FUNDING_AUTO: ACTIVITY_ORGANIZATIONS_CONTRACTING_AGENCY_ADD_FUNDING_AUTO,
  ACTIVITY_ORGANIZATIONS_DONOR_ORGANIZATION_ADD_FUNDING_AUTO: ACTIVITY_ORGANIZATIONS_DONOR_ORGANIZATION_ADD_FUNDING_AUTO,
  ACTIVITY_ORGANIZATIONS_EXECUTING_AGENCY_ADD_FUNDING_AUTO: ACTIVITY_ORGANIZATIONS_EXECUTING_AGENCY_ADD_FUNDING_AUTO,
  ACTIVITY_ORGANIZATIONS_IMPLEMENTING_AGENCY_ADD_FUNDING_AUTO: ACTIVITY_ORGANIZATIONS_IMPLEMENTING_AGENCY_ADD_FUNDING_AUTO,
  ACTIVITY_ORGANIZATIONS_REGIONAL_GROUP_ADD_FUNDING_AUTO: ACTIVITY_ORGANIZATIONS_REGIONAL_GROUP_ADD_FUNDING_AUTO,
  ACTIVITY_ORGANIZATIONS_RESPONSIBLE_ORGANIZATION_ADD_FUNDING_AUTO: ACTIVITY_ORGANIZATIONS_RESPONSIBLE_ORGANIZATION_ADD_FUNDING_AUTO,
  ACTIVITY_ORGANIZATIONS_SECTOR_GROUP_ADD_FUNDING_AUTO: ACTIVITY_ORGANIZATIONS_SECTOR_GROUP_ADD_FUNDING_AUTO,
  ACTIVITY_FUNDING_SEARCH: ACTIVITY_FUNDING_SEARCH,
  ACTIVITY_FUNDING_SEARCH_ORGANIZATION: ACTIVITY_FUNDING_SEARCH_ORGANIZATION,
  ACTIVITY_FUNDING_SELECT_ORG_TYPE: ACTIVITY_FUNDING_SELECT_ORG_TYPE,
  ACTIVITY_PROGRAM: ACTIVITY_PROGRAM,
  ACTIVITY_PLANNING: ACTIVITY_PLANNING,
  ACTIVITY_CONTACT: ACTIVITY_CONTACT,
  ACTIVITY_DOCUMENTS_ADD_DOCUMENT: ACTIVITY_DOCUMENTS_ADD_DOCUMENT,
  ACTIVITY_DOCUMENTS_ADD_WEBLINK: ACTIVITY_DOCUMENTS_ADD_WEBLINK,
  ACTIVITY_ISSUES_ADD_ISSUE: ACTIVITY_ISSUES_ADD_ISSUE,
  ACTIVITY_ISSUES_DELETE_ISSUE: ACTIVITY_ISSUES_DELETE_ISSUE,
  ACTIVITY_ISSUES_ADD_MEASURE: ACTIVITY_ISSUES_ADD_MEASURE,
  ACTIVITY_ISSUES_DELETE_MEASURE: ACTIVITY_ISSUES_DELETE_MEASURE,
  ACTIVITY_ISSUES_ADD_ACTOR: ACTIVITY_ISSUES_ADD_ACTOR,
  ACTIVITY_ISSUES_DELETE_ACTOR: ACTIVITY_ISSUES_DELETE_ACTOR,
  ACTIVITY_DISBURSEMENTS_FUNDING_FLOWS_ORGROLE_ADD_IMPLEMENTING_AGENCY: ACTIVITY_DISBURSEMENTS_FUNDING_FLOWS_ORGROLE_ADD_IMPLEMENTING_AGENCY,
  ACTIVITY_DISBURSEMENTS_FUNDING_FLOWS_ORGROLE_ADD_CONTRACTING_AGENCY: ACTIVITY_DISBURSEMENTS_FUNDING_FLOWS_ORGROLE_ADD_CONTRACTING_AGENCY,
  ACTIVITY_DISBURSEMENTS_FUNDING_FLOWS_ORGROLE_ADD_BENEFICIARY_AGENCY: ACTIVITY_DISBURSEMENTS_FUNDING_FLOWS_ORGROLE_ADD_BENEFICIARY_AGENCY,
  ACTIVITY_DISBURSEMENTS_FUNDING_FLOWS_ORGROLE_ADD_DONOR_ORGANIZATION: ACTIVITY_DISBURSEMENTS_FUNDING_FLOWS_ORGROLE_ADD_DONOR_ORGANIZATION,
  ACTIVITY_DISBURSEMENTS_FUNDING_FLOWS_ORGROLE_ADD_EXECUTING_AGENCY: ACTIVITY_DISBURSEMENTS_FUNDING_FLOWS_ORGROLE_ADD_EXECUTING_AGENCY,
  ACTIVITY_DISBURSEMENTS_FUNDING_FLOWS_ORGROLE_ADD_REGIONAL_GROUP: ACTIVITY_DISBURSEMENTS_FUNDING_FLOWS_ORGROLE_ADD_REGIONAL_GROUP,
  ACTIVITY_DISBURSEMENTS_FUNDING_FLOWS_ORGROLE_ADD_RESPONSIBLE_ORGANIZATION: ACTIVITY_DISBURSEMENTS_FUNDING_FLOWS_ORGROLE_ADD_RESPONSIBLE_ORGANIZATION,
  ACTIVITY_DISBURSEMENTS_FUNDING_FLOWS_ORGROLE_ADD_SECTOR_GROUP: ACTIVITY_DISBURSEMENTS_FUNDING_FLOWS_ORGROLE_ADD_SECTOR_GROUP,
  ACTIVITY_COMMITMENTS_FUNDING_FLOWS_ORGROLE_ADD_IMPLEMENTING_AGENCY: ACTIVITY_COMMITMENTS_FUNDING_FLOWS_ORGROLE_ADD_IMPLEMENTING_AGENCY,
  ACTIVITY_COMMITMENTS_FUNDING_FLOWS_ORGROLE_ADD_CONTRACTING_AGENCY: ACTIVITY_COMMITMENTS_FUNDING_FLOWS_ORGROLE_ADD_CONTRACTING_AGENCY,
  ACTIVITY_COMMITMENTS_FUNDING_FLOWS_ORGROLE_ADD_BENEFICIARY_AGENCY: ACTIVITY_COMMITMENTS_FUNDING_FLOWS_ORGROLE_ADD_BENEFICIARY_AGENCY,
  ACTIVITY_COMMITMENTS_FUNDING_FLOWS_ORGROLE_ADD_DONOR_ORGANIZATION: ACTIVITY_COMMITMENTS_FUNDING_FLOWS_ORGROLE_ADD_DONOR_ORGANIZATION,
  ACTIVITY_COMMITMENTS_FUNDING_FLOWS_ORGROLE_ADD_EXECUTING_AGENCY: ACTIVITY_COMMITMENTS_FUNDING_FLOWS_ORGROLE_ADD_EXECUTING_AGENCY,
  ACTIVITY_COMMITMENTS_FUNDING_FLOWS_ORGROLE_ADD_REGIONAL_GROUP: ACTIVITY_COMMITMENTS_FUNDING_FLOWS_ORGROLE_ADD_REGIONAL_GROUP,
  ACTIVITY_COMMITMENTS_FUNDING_FLOWS_ORGROLE_ADD_RESPONSIBLE_ORGANIZATION: ACTIVITY_COMMITMENTS_FUNDING_FLOWS_ORGROLE_ADD_RESPONSIBLE_ORGANIZATION,
  ACTIVITY_COMMITMENTS_FUNDING_FLOWS_ORGROLE_ADD_SECTOR_GROUP: ACTIVITY_COMMITMENTS_FUNDING_FLOWS_ORGROLE_ADD_SECTOR_GROUP,
  ACTIVITY_EXPENDITURES_FUNDING_FLOWS_ORGROLE_ADD_IMPLEMENTING_AGENCY: ACTIVITY_EXPENDITURES_FUNDING_FLOWS_ORGROLE_ADD_IMPLEMENTING_AGENCY,
  ACTIVITY_EXPENDITURES_FUNDING_FLOWS_ORGROLE_ADD_CONTRACTING_AGENCY: ACTIVITY_EXPENDITURES_FUNDING_FLOWS_ORGROLE_ADD_CONTRACTING_AGENCY,
  ACTIVITY_EXPENDITURES_FUNDING_FLOWS_ORGROLE_ADD_BENEFICIARY_AGENCY: ACTIVITY_EXPENDITURES_FUNDING_FLOWS_ORGROLE_ADD_BENEFICIARY_AGENCY,
  ACTIVITY_EXPENDITURES_FUNDING_FLOWS_ORGROLE_ADD_DONOR_ORGANIZATION: ACTIVITY_EXPENDITURES_FUNDING_FLOWS_ORGROLE_ADD_DONOR_ORGANIZATION,
  ACTIVITY_EXPENDITURES_FUNDING_FLOWS_ORGROLE_ADD_EXECUTING_AGENCY: ACTIVITY_EXPENDITURES_FUNDING_FLOWS_ORGROLE_ADD_EXECUTING_AGENCY,
  ACTIVITY_EXPENDITURES_FUNDING_FLOWS_ORGROLE_ADD_REGIONAL_GROUP: ACTIVITY_EXPENDITURES_FUNDING_FLOWS_ORGROLE_ADD_REGIONAL_GROUP,
  ACTIVITY_EXPENDITURES_FUNDING_FLOWS_ORGROLE_ADD_RESPONSIBLE_ORGANIZATION: ACTIVITY_EXPENDITURES_FUNDING_FLOWS_ORGROLE_ADD_RESPONSIBLE_ORGANIZATION,
  ACTIVITY_EXPENDITURES_FUNDING_FLOWS_ORGROLE_ADD_SECTOR_GROUP: ACTIVITY_EXPENDITURES_FUNDING_FLOWS_ORGROLE_ADD_SECTOR_GROUP,
  MTEF_PROJECTIONS: MTEF_PROJECTIONS,
  MTEF_PROJECTIONS_AMOUNT: MTEF_PROJECTIONS_AMOUNT,
  MTEF_PROJECTIONS_CURRENCY: MTEF_PROJECTIONS_CURRENCY,
  MTEF_PROJECTIONS_PROJECTION: MTEF_PROJECTIONS_PROJECTION,
  MTEF_PROJECTIONS_DATE: MTEF_PROJECTIONS_DATE
});

/**
 * @author Nadejda Mandrescu
 */

// Activity fields
var ACTIVITY_BUDGET = 'activity_budget';
var ACTIVITY_STATUS = 'activity_status';
var STATUS_REASON = 'status_reason';
var FINANCIAL_INSTRUMENT = 'financial_instrument';
var TYPE_OF_IMPLEMENTATION = 'type_of_implementation';
var OBJECTIVE = 'objective';
var RESULTS = 'results';
var BUDGET_CODE_PROJECT_ID = 'budget_code_project_id';
var ACTUAL_APPROVAL_DATE = 'actual_approval_date';
var FUNDINGS = 'fundings';
var FUNDING_DONOR_ORG_ID = 'donor_organization_id';
var IS_DRAFT = 'is_draft';
var ORG_ROLE_ORG_ID = 'organization';
var ADDITIONAL_INFO = 'additional_info';
var PRIMARY_SECTORS = 'primary_sectors';
var SECONDARY_SECTORS = 'secondary_sectors';
var TERTIARY_SECTORS = 'tertiary_sectors';
var TAG_SECTORS = 'tag_sectors';
var SECTOR = 'sector';
var SECTOR_PERCENTAGE = 'sector_percentage';
var FINANCING_INSTRUMENT = 'financing_instrument';
var MODALITIES = 'modalities';
var LINE_MINISTRY_RANK = 'line_ministry_rank';
var GOVERNMENT_AGREEMENT_NUMBER = 'government_agreement_number';
var FUNDING_STATUS = 'funding_status';
var LOCATIONS = 'locations';
var LOCATION = 'location';
var LOCATION_PERCENTAGE = 'location_percentage';
var IMPLEMENTATION_LOCATION = 'implementation_location';
var IMPLEMENTATION_LEVEL = 'implementation_level';
var APPROVAL_STATUS = 'approval_status';
var APPROVED_BY = 'approved_by';
var APPROVAL_DATE = 'approval_date';
var TYPE_OF_ASSISTANCE = 'type_of_assistance';
var EXPENDITURE_CLASS = 'expenditure_class';
var FUNDING_DETAILS = 'funding_details';
var MODE_OF_PAYMENT = 'mode_of_payment';
var FUNDING_CLASSIFICATION_DATE = 'funding_classification_date';
var AGREEMENT = 'agreement';
var DONOR_OBJECTIVE = 'donor_objective';
var CONDITIONS = 'conditions';
var AGREEMENT_CODE = 'code';
var AGREEMENT_TITLE = 'title';
var PROJECT_CATEGORY = 'project_category';
var PROJECT_IMPLEMENTING_UNIT = 'project_implementing_unit';
var ORGANIZATION = 'organization';
var PERCENTAGE = 'percentage';
var AMP_ORGANIZATION_ROLE_ID = 'amp_organization_role_id';
var ROLE = 'role';
var EXECUTING_AGENCY = 'executing_agency';
var CONTRACTING_AGENCY = 'contracting_agency';
var BENEFICIARY_AGENCY = 'beneficiary_agency';
var IMPLEMENTING_AGENCY = 'implementing_agency';
var RESPONSIBLE_ORGANIZATION = 'responsible_organization';
var DONOR_ORGANIZATION = 'donor_organization';
var REGIONAL_GROUP = 'regional_group';
var SECTOR_GROUP = 'sector_group';
var BUDGETS = 'budgets';
var BUDGET_CODE = 'budget_code';
var BUDGET_ORGANIZATION_CODE = 'budget_organization_code';
var ARCHIVED = 'archived';
var TRANSACTION_DATE = 'transaction_date';
var TRANSACTION_TYPE = 'transaction_type';
var COMMITMENTS = 'commitments';
var DISBURSEMENTS = 'disbursements';
var EXPENDITURES = 'expenditures';
var ESTIMATED_DISBURSEMENTS = 'estimated_disbursements';
var TRANSACTION_AMOUNT = 'transaction_amount';
var ADJUSTMENT_TYPE = 'adjustment_type';
var ACTUAL_START_DATE = 'actual_start_date';
var PROPOSED_START_DATE = 'proposed_start_date';
var ACTUAL_COMPLETION_DATE = 'actual_completion_date';
var CONTRACTING_DATE = 'contracting_date';
var DISBURSEMENT_DATE = 'disbursement_date';
var PROPOSED_APPROVAL_DATE = 'proposed_approval_date';
var ORIGINAL_COMPLETION_DATE = 'original_completion_date';
var PROPOSED_COMPLETION_DATE = 'proposed_completion_date';
var FINAL_DATE_FOR_DISBURSEMENTS = 'final_date_for_disbursements';
var FINAL_DATE_FOR_CONTRACTING = 'final_date_for_contracting';
var EFFECTIVE_FUNDING_DATE = 'effective_funding_date';
var FUNDING_CLOSING_DATE = 'funding_closing_date';
var RATIFICATION_DATE = 'ratification_date';
var MATURITY = 'maturity';
var LAST_AUDIT_DATE = 'last_audit_date';
var SIGNATURE_DATE = 'signature_date';
var HUMANITARIAN_AID = 'humanitarian_aid';
var DISASTER_RESPONSE = 'disaster_response';
var PROGRAM = 'program';
var PROGRAM_PERCENTAGE = 'program_percentage';
var PROGRAM_SETTINGS = 'program_settings';
var NATIONAL_PLAN_OBJECTIVE = 'national_plan_objective';
var PRIMARY_PROGRAMS = 'primary_programs';
var SECONDARY_PROGRAMS = 'secondary_programs';
var TERTIAR_PROGRAMS = 'tertiary_programs';
var GOVERNMENT_APPROVAL_PROCEDURES = 'government_approval_procedures';
var JOINT_CRITERIA = 'joint_criteria';
var TEAM = 'team';
var REJECTED_ID = 'rejectedId';
var INTERNAL_ID = 'internal_id';
var AMP_ID = 'amp_id';
var PROJECT_TITLE = 'project_title';
var DESCRIPTION = 'description';
var MODIFIED_BY = 'modified_by';
var MODIFIED_ON = 'update_date';
var CREATED_BY = 'created_by';
var CREATED_ON = 'creation_date';
var LAST_IMPORTED_BY = 'last_imported_by';
var CLIENT_CHANGE_ID = 'client-change-id';
var CLIENT_CREATED_ON = 'client-created-on';
var CLIENT_UPDATED_ON = 'client-updated-on';
var IS_PUSHED = 'is-pushed';
var ACTIVITY_GROUP = 'activity_group';
var VERSION = 'version';
var PROJECT_COMMENTS = 'project_comments';
var LESSONS_LEARNED = 'lessons_learned';
var PROJECT_IMPACT = 'project_impact';
var ACTIVITY_SUMMARY = 'activity_summary';
var CONDITIONALITIES = 'conditionalities';
var PROJECT_MANAGEMENT = 'project_management';
var A_C_CHAPTER = 'a_c_chapter';
var CRIS_NUMBER = 'cris_number';
var IATI_IDENTIFIER = 'iati_identifier';
var ACTIVITY_INTERNAL_IDS = 'activity_internal_ids';
var HIERARCHICAL_VALUE = 'hierarchical_value';
var HIERARCHICAL_VALUE_PARTS = 'hierarchical_value_parts';
var HIERARCHICAL_VALUE_DEPTH = 'hierarchical_value_depth';
var PPC_AMOUNT = 'ppc_amount';
var RPC_AMOUNT = 'rpc_amount';
var PPC_ANNUAL_BUDGETS = 'ppc_annual_budgets';
var AMOUNT = 'amount';
var CURRENCY = 'currency';
var FUNDING_DATE = 'funding_date';
var COMPONENTS = 'components';
var TOTAL_NUMBER_OF_FUNDING_SOURCES = 'total_number_of_funding_sources';
var SOURCE_ROLE = 'source_role';
var AMP_FUNDING_ID = 'funding_id';
var ISSUES = 'issues';
var ISSUE_DATE = 'issue_date';
var ISSUE_NAME = 'name';
var MEASURES = 'measures';
var MEASURE_NAME = 'name';
var MEASURE_DATE = 'measure_date';
var ACTORS = 'actors';
var ACTOR_NAME = 'name';
var STRUCTURES = 'structures';
var STRUCTURES_TITLE = 'title';
var STRUCTURES_DESCRIPTION = 'description';
var STRUCTURES_LATITUDE = 'latitude';
var STRUCTURES_LONGITUDE = 'longitude';
var STRUCTURES_COLOR = 'structure_color';
var STRUCTURES_LAT = 'lat';
var STRUCTURES_LNG = 'lng';
var STRUCTURES_SHAPE = 'shape';
var STRUCTURES_POINT = 'Point';
var STRUCTURES_POLYGON = 'Polygon';
var STRUCTURES_POLYLINE = 'Polyline';
var STRUCTURES_COORDINATES = 'coordinates';
var COMPONENT_TYPE = 'component_type';
var COMPONENT_TITLE = 'component_title';
var COMPONENT_FUNDING = 'funding';
var COMPONENT_DESCRIPTION = 'description';
var COMPONENT_ORGANIZATION = 'component_organization';
var FUNDING_AMOUNT_ID = 'amp_funding_amount_id';
var EXTRA_INFO = 'extra_info';
var VALUE = 'value';
var ACRONYM = 'acronym';
var TYPE_OF_COOPERATION = 'type_of_cooperation';
var ANNUAL_PROJECT_BUDGET_ID = 'annual_project_budget_id';
var TYPE = 'type';
var YEAR = 'year';
var GROUP_VERSIONED_FUNDING = 'group_versioned_funding';
var ACTIVE_LIST = 'active_list';
var ACTIVE = 'active';
var DELEGATED_COOPERATION = 'delegated_cooperation';
var DELEGATED_PARTNER = 'delegated_partner';
var FINANCING_ID = 'financing_id';
var DISBURSEMENT_ORDER_ID = 'disbursement_order_id';
var PLEDGE = 'pledge';
var CAPITAL_SPENDING_PERCENTAGE = 'capital_spending_percentage';
var REPORTING_DATE = 'reporting_date';
var RECIPIENT_ROLE = 'recipient_role';
var RECIPIENT_ORGANIZATION = 'recipient_organization';
var TEMPORAL_ID = '_temporal_id';
var MINISTRY_CODE = 'ministry_code';
var PROJECT_CODE = 'project_code';
var FY = 'fy';
var INDIRECT_ON_BUDGET = 'indirect_on_budget';
var IMPLEMENTATION_LEVELS_EXTRA_INFO = 'implementation-levels';
var IMPLEMENTATION_LOCATION_EXTRA_INFO = 'implementation_location_name';
var DONOR_CONTACT = 'donor_contact_information';
var PROJECT_COORDINATOR_CONTACT = 'project_coordinator_contact_information';
var SECTOR_MINISTRY_CONTACT = 'sector_ministry_contact_information';
var MOFED_CONTACT = 'mofed_contact_information';
var IMPLEMENTING_EXECUTING_AGENCY_CONTACT = 'implementing/executing_agency_contact_information';
var CONTACT = 'contact';
var ORGANIZATION_GROUP = 'organization_group';
var FIXED_EXCHANGE_RATE = 'fixed_exchange_rate';
var PRIMARY_CONTACT = 'mark_as_primary';
var ACTIVITY_DOCUMENTS = 'activity_documents';
var DOCUMENT_TYPE = 'document_type';
var ISO2 = 'iso2';
var MTEF_PROJECTIONS$1 = 'mtef_projections';
var PROJECTION = 'projection';
var PIPELINE = 'pipeline';
var PROJECTION_DATE = 'projection_date';

// Activity labels (usually those that don't come as part of Fields Def EP)
var SAME_AS_PROPOSED_START_DATE_LABEL = 'Same as Proposed Start Date';
var SAME_AS_PROPOSED_APPROVAL_DATE_LABEL = 'Same as Proposed Approval Date';

// Activity validation rules
var DEPENDENCY_IMPLEMENTATION_LEVEL_PRESENT = 'implementation_level_present';
var DEPENDENCY_IMPLEMENTATION_LEVEL_VALID = 'implementation_level_valid';
var DEPENDENCY_IMPLEMENTATION_LOCATION_PRESENT = 'implementation_location_present';
var DEPENDENCY_IMPLEMENTATION_LOCATION_VALID = 'implementation_location_valid';
var DEPENDENCY_PROJECT_CODE_ON_BUDGET = 'project_code_on_budget';
var DEPENDENCY_ON_BUDGET = 'on_budget';
var DEPENDENCY_TRANSACTION_PRESENT = 'transaction_present';
var DEPENDENCY_COMPONENT_FUNDING_ORG_VALID = 'organization_present';

/** IDs for AP sections **/
var AP_SECTION_IDS = [{ key: 'APIdentification', hash: '#APIdentification', value: 'Identification', fmPath: FeatureManagerConstants.ACTIVITY_IDENTIFICATION }, { key: 'APInternalIds', hash: '#APInternalIds', value: 'Agency Internal IDs', sectionPath: ACTIVITY_INTERNAL_IDS }, { key: 'APPlanning', hash: '#APPlanning', value: 'Planning', fmPath: FeatureManagerConstants.ACTIVITY_PLANNING }, { key: 'APLocation', hash: '#APLocation', value: 'Location', sectionPath: LOCATIONS }, { key: 'APProgram', hash: '#APProgram', value: 'Program', fmPath: FeatureManagerConstants.ACTIVITY_PROGRAM }, { key: 'APSector', hash: '#APSector', value: 'Sectors', fmPath: FeatureManagerConstants.ACTIVITY_SECTORS }, {
  key: 'APFundingSources',
  hash: '#APFundingSources',
  value: 'Funding Sources',
  sectionPath: TOTAL_NUMBER_OF_FUNDING_SOURCES
}, { key: 'APFunding', hash: '#APFunding', value: 'Funding', sectionPath: FUNDINGS }, {
  key: 'APRelatedOrganizations',
  hash: '#APRelatedOrganizations',
  value: 'Related Organizations',
  fmPath: FeatureManagerConstants.ACTIVITY_ORGANIZATIONS
}, { key: 'APIssues', hash: '#APIssues', value: 'Issues', sectionPath: ISSUES }, { key: 'APContact', hash: '#APContact', value: 'Contact Information', fmPath: FeatureManagerConstants.ACTIVITY_CONTACT }, { key: 'APStructures', hash: '#APStructures', value: 'Structures', sectionPath: STRUCTURES }, { key: 'APDocument', hash: '#APDocument', value: 'Related Documents', sectionPath: ACTIVITY_DOCUMENTS }];

/** Column counts for each section **/
var ACTIVITY_INTERNAL_IDS_COLS = 3;
var ACTIVITY_PLANNING_COLS = 2;
var ACTIVITY_LOCATION_COLS = 3;
var ACTIVITY_FUNDING_COLS = 2;
var ACTIVITY_CONTACT_COLS = 2;
var AP_FUNDINGS_TABLE_COLS = 4;

var MULTI_SELECT_MIN_SIZE = 8;
var MULTI_SELECT_MAX_SIZE = 8;

// TODO: move these functions to an Utils class.
var toFieldNames = function toFieldNames(listOfNames) {
  return listOfNames.map(function (name) {
    return toFieldName(name);
  });
};

/**
 * Converts the original non-translated label to internal field name
 * @param name
 * @return {string}
 */
var toFieldName = function toFieldName(name) {
  return name.toLowerCase().replace(' ', '_');
};

/**
 * Converts the internal field name to the Original non-translated label
 * @param fieldName
 * @return {string}
 */
var toOriginalLabel = function toOriginalLabel(fieldName) {
  return capitalize(fieldName.replace('_', ' '));
};

// TODO: move again inside a shared Utils class because this is a copy from Utils.js
var capitalize = function capitalize(text) {
  return text.replace(/(?:^|\s)\S/g, function (char) {
    return char.toUpperCase();
  });
};

var ActivityConstants = Object.freeze({
  ACTIVITY_BUDGET: ACTIVITY_BUDGET,
  ACTIVITY_STATUS: ACTIVITY_STATUS,
  STATUS_REASON: STATUS_REASON,
  FINANCIAL_INSTRUMENT: FINANCIAL_INSTRUMENT,
  TYPE_OF_IMPLEMENTATION: TYPE_OF_IMPLEMENTATION,
  OBJECTIVE: OBJECTIVE,
  RESULTS: RESULTS,
  BUDGET_CODE_PROJECT_ID: BUDGET_CODE_PROJECT_ID,
  ACTUAL_APPROVAL_DATE: ACTUAL_APPROVAL_DATE,
  FUNDINGS: FUNDINGS,
  FUNDING_DONOR_ORG_ID: FUNDING_DONOR_ORG_ID,
  IS_DRAFT: IS_DRAFT,
  ORG_ROLE_ORG_ID: ORG_ROLE_ORG_ID,
  ADDITIONAL_INFO: ADDITIONAL_INFO,
  PRIMARY_SECTORS: PRIMARY_SECTORS,
  SECONDARY_SECTORS: SECONDARY_SECTORS,
  TERTIARY_SECTORS: TERTIARY_SECTORS,
  TAG_SECTORS: TAG_SECTORS,
  SECTOR: SECTOR,
  SECTOR_PERCENTAGE: SECTOR_PERCENTAGE,
  FINANCING_INSTRUMENT: FINANCING_INSTRUMENT,
  MODALITIES: MODALITIES,
  LINE_MINISTRY_RANK: LINE_MINISTRY_RANK,
  GOVERNMENT_AGREEMENT_NUMBER: GOVERNMENT_AGREEMENT_NUMBER,
  FUNDING_STATUS: FUNDING_STATUS,
  LOCATIONS: LOCATIONS,
  LOCATION: LOCATION,
  LOCATION_PERCENTAGE: LOCATION_PERCENTAGE,
  IMPLEMENTATION_LOCATION: IMPLEMENTATION_LOCATION,
  IMPLEMENTATION_LEVEL: IMPLEMENTATION_LEVEL,
  APPROVAL_STATUS: APPROVAL_STATUS,
  APPROVED_BY: APPROVED_BY,
  APPROVAL_DATE: APPROVAL_DATE,
  TYPE_OF_ASSISTANCE: TYPE_OF_ASSISTANCE,
  EXPENDITURE_CLASS: EXPENDITURE_CLASS,
  FUNDING_DETAILS: FUNDING_DETAILS,
  MODE_OF_PAYMENT: MODE_OF_PAYMENT,
  FUNDING_CLASSIFICATION_DATE: FUNDING_CLASSIFICATION_DATE,
  AGREEMENT: AGREEMENT,
  DONOR_OBJECTIVE: DONOR_OBJECTIVE,
  CONDITIONS: CONDITIONS,
  AGREEMENT_CODE: AGREEMENT_CODE,
  AGREEMENT_TITLE: AGREEMENT_TITLE,
  PROJECT_CATEGORY: PROJECT_CATEGORY,
  PROJECT_IMPLEMENTING_UNIT: PROJECT_IMPLEMENTING_UNIT,
  ORGANIZATION: ORGANIZATION,
  PERCENTAGE: PERCENTAGE,
  AMP_ORGANIZATION_ROLE_ID: AMP_ORGANIZATION_ROLE_ID,
  ROLE: ROLE,
  EXECUTING_AGENCY: EXECUTING_AGENCY,
  CONTRACTING_AGENCY: CONTRACTING_AGENCY,
  BENEFICIARY_AGENCY: BENEFICIARY_AGENCY,
  IMPLEMENTING_AGENCY: IMPLEMENTING_AGENCY,
  RESPONSIBLE_ORGANIZATION: RESPONSIBLE_ORGANIZATION,
  DONOR_ORGANIZATION: DONOR_ORGANIZATION,
  REGIONAL_GROUP: REGIONAL_GROUP,
  SECTOR_GROUP: SECTOR_GROUP,
  BUDGETS: BUDGETS,
  BUDGET_CODE: BUDGET_CODE,
  BUDGET_ORGANIZATION_CODE: BUDGET_ORGANIZATION_CODE,
  ARCHIVED: ARCHIVED,
  TRANSACTION_DATE: TRANSACTION_DATE,
  TRANSACTION_TYPE: TRANSACTION_TYPE,
  COMMITMENTS: COMMITMENTS,
  DISBURSEMENTS: DISBURSEMENTS,
  EXPENDITURES: EXPENDITURES,
  ESTIMATED_DISBURSEMENTS: ESTIMATED_DISBURSEMENTS,
  TRANSACTION_AMOUNT: TRANSACTION_AMOUNT,
  ADJUSTMENT_TYPE: ADJUSTMENT_TYPE,
  ACTUAL_START_DATE: ACTUAL_START_DATE,
  PROPOSED_START_DATE: PROPOSED_START_DATE,
  ACTUAL_COMPLETION_DATE: ACTUAL_COMPLETION_DATE,
  CONTRACTING_DATE: CONTRACTING_DATE,
  DISBURSEMENT_DATE: DISBURSEMENT_DATE,
  PROPOSED_APPROVAL_DATE: PROPOSED_APPROVAL_DATE,
  ORIGINAL_COMPLETION_DATE: ORIGINAL_COMPLETION_DATE,
  PROPOSED_COMPLETION_DATE: PROPOSED_COMPLETION_DATE,
  FINAL_DATE_FOR_DISBURSEMENTS: FINAL_DATE_FOR_DISBURSEMENTS,
  FINAL_DATE_FOR_CONTRACTING: FINAL_DATE_FOR_CONTRACTING,
  EFFECTIVE_FUNDING_DATE: EFFECTIVE_FUNDING_DATE,
  FUNDING_CLOSING_DATE: FUNDING_CLOSING_DATE,
  RATIFICATION_DATE: RATIFICATION_DATE,
  MATURITY: MATURITY,
  LAST_AUDIT_DATE: LAST_AUDIT_DATE,
  SIGNATURE_DATE: SIGNATURE_DATE,
  HUMANITARIAN_AID: HUMANITARIAN_AID,
  DISASTER_RESPONSE: DISASTER_RESPONSE,
  PROGRAM: PROGRAM,
  PROGRAM_PERCENTAGE: PROGRAM_PERCENTAGE,
  PROGRAM_SETTINGS: PROGRAM_SETTINGS,
  NATIONAL_PLAN_OBJECTIVE: NATIONAL_PLAN_OBJECTIVE,
  PRIMARY_PROGRAMS: PRIMARY_PROGRAMS,
  SECONDARY_PROGRAMS: SECONDARY_PROGRAMS,
  TERTIAR_PROGRAMS: TERTIAR_PROGRAMS,
  GOVERNMENT_APPROVAL_PROCEDURES: GOVERNMENT_APPROVAL_PROCEDURES,
  JOINT_CRITERIA: JOINT_CRITERIA,
  TEAM: TEAM,
  REJECTED_ID: REJECTED_ID,
  INTERNAL_ID: INTERNAL_ID,
  AMP_ID: AMP_ID,
  PROJECT_TITLE: PROJECT_TITLE,
  DESCRIPTION: DESCRIPTION,
  MODIFIED_BY: MODIFIED_BY,
  MODIFIED_ON: MODIFIED_ON,
  CREATED_BY: CREATED_BY,
  CREATED_ON: CREATED_ON,
  LAST_IMPORTED_BY: LAST_IMPORTED_BY,
  CLIENT_CHANGE_ID: CLIENT_CHANGE_ID,
  CLIENT_CREATED_ON: CLIENT_CREATED_ON,
  CLIENT_UPDATED_ON: CLIENT_UPDATED_ON,
  IS_PUSHED: IS_PUSHED,
  ACTIVITY_GROUP: ACTIVITY_GROUP,
  VERSION: VERSION,
  PROJECT_COMMENTS: PROJECT_COMMENTS,
  LESSONS_LEARNED: LESSONS_LEARNED,
  PROJECT_IMPACT: PROJECT_IMPACT,
  ACTIVITY_SUMMARY: ACTIVITY_SUMMARY,
  CONDITIONALITIES: CONDITIONALITIES,
  PROJECT_MANAGEMENT: PROJECT_MANAGEMENT,
  A_C_CHAPTER: A_C_CHAPTER,
  CRIS_NUMBER: CRIS_NUMBER,
  IATI_IDENTIFIER: IATI_IDENTIFIER,
  ACTIVITY_INTERNAL_IDS: ACTIVITY_INTERNAL_IDS,
  HIERARCHICAL_VALUE: HIERARCHICAL_VALUE,
  HIERARCHICAL_VALUE_PARTS: HIERARCHICAL_VALUE_PARTS,
  HIERARCHICAL_VALUE_DEPTH: HIERARCHICAL_VALUE_DEPTH,
  PPC_AMOUNT: PPC_AMOUNT,
  RPC_AMOUNT: RPC_AMOUNT,
  PPC_ANNUAL_BUDGETS: PPC_ANNUAL_BUDGETS,
  AMOUNT: AMOUNT,
  CURRENCY: CURRENCY,
  FUNDING_DATE: FUNDING_DATE,
  COMPONENTS: COMPONENTS,
  TOTAL_NUMBER_OF_FUNDING_SOURCES: TOTAL_NUMBER_OF_FUNDING_SOURCES,
  SOURCE_ROLE: SOURCE_ROLE,
  AMP_FUNDING_ID: AMP_FUNDING_ID,
  ISSUES: ISSUES,
  ISSUE_DATE: ISSUE_DATE,
  ISSUE_NAME: ISSUE_NAME,
  MEASURES: MEASURES,
  MEASURE_NAME: MEASURE_NAME,
  MEASURE_DATE: MEASURE_DATE,
  ACTORS: ACTORS,
  ACTOR_NAME: ACTOR_NAME,
  STRUCTURES: STRUCTURES,
  STRUCTURES_TITLE: STRUCTURES_TITLE,
  STRUCTURES_DESCRIPTION: STRUCTURES_DESCRIPTION,
  STRUCTURES_LATITUDE: STRUCTURES_LATITUDE,
  STRUCTURES_LONGITUDE: STRUCTURES_LONGITUDE,
  STRUCTURES_COLOR: STRUCTURES_COLOR,
  STRUCTURES_LAT: STRUCTURES_LAT,
  STRUCTURES_LNG: STRUCTURES_LNG,
  STRUCTURES_SHAPE: STRUCTURES_SHAPE,
  STRUCTURES_POINT: STRUCTURES_POINT,
  STRUCTURES_POLYGON: STRUCTURES_POLYGON,
  STRUCTURES_POLYLINE: STRUCTURES_POLYLINE,
  STRUCTURES_COORDINATES: STRUCTURES_COORDINATES,
  COMPONENT_TYPE: COMPONENT_TYPE,
  COMPONENT_TITLE: COMPONENT_TITLE,
  COMPONENT_FUNDING: COMPONENT_FUNDING,
  COMPONENT_DESCRIPTION: COMPONENT_DESCRIPTION,
  COMPONENT_ORGANIZATION: COMPONENT_ORGANIZATION,
  FUNDING_AMOUNT_ID: FUNDING_AMOUNT_ID,
  EXTRA_INFO: EXTRA_INFO,
  VALUE: VALUE,
  ACRONYM: ACRONYM,
  TYPE_OF_COOPERATION: TYPE_OF_COOPERATION,
  ANNUAL_PROJECT_BUDGET_ID: ANNUAL_PROJECT_BUDGET_ID,
  TYPE: TYPE,
  YEAR: YEAR,
  GROUP_VERSIONED_FUNDING: GROUP_VERSIONED_FUNDING,
  ACTIVE_LIST: ACTIVE_LIST,
  ACTIVE: ACTIVE,
  DELEGATED_COOPERATION: DELEGATED_COOPERATION,
  DELEGATED_PARTNER: DELEGATED_PARTNER,
  FINANCING_ID: FINANCING_ID,
  DISBURSEMENT_ORDER_ID: DISBURSEMENT_ORDER_ID,
  PLEDGE: PLEDGE,
  CAPITAL_SPENDING_PERCENTAGE: CAPITAL_SPENDING_PERCENTAGE,
  REPORTING_DATE: REPORTING_DATE,
  RECIPIENT_ROLE: RECIPIENT_ROLE,
  RECIPIENT_ORGANIZATION: RECIPIENT_ORGANIZATION,
  TEMPORAL_ID: TEMPORAL_ID,
  MINISTRY_CODE: MINISTRY_CODE,
  PROJECT_CODE: PROJECT_CODE,
  FY: FY,
  INDIRECT_ON_BUDGET: INDIRECT_ON_BUDGET,
  IMPLEMENTATION_LEVELS_EXTRA_INFO: IMPLEMENTATION_LEVELS_EXTRA_INFO,
  IMPLEMENTATION_LOCATION_EXTRA_INFO: IMPLEMENTATION_LOCATION_EXTRA_INFO,
  DONOR_CONTACT: DONOR_CONTACT,
  PROJECT_COORDINATOR_CONTACT: PROJECT_COORDINATOR_CONTACT,
  SECTOR_MINISTRY_CONTACT: SECTOR_MINISTRY_CONTACT,
  MOFED_CONTACT: MOFED_CONTACT,
  IMPLEMENTING_EXECUTING_AGENCY_CONTACT: IMPLEMENTING_EXECUTING_AGENCY_CONTACT,
  CONTACT: CONTACT,
  ORGANIZATION_GROUP: ORGANIZATION_GROUP,
  FIXED_EXCHANGE_RATE: FIXED_EXCHANGE_RATE,
  PRIMARY_CONTACT: PRIMARY_CONTACT,
  ACTIVITY_DOCUMENTS: ACTIVITY_DOCUMENTS,
  DOCUMENT_TYPE: DOCUMENT_TYPE,
  ISO2: ISO2,
  MTEF_PROJECTIONS: MTEF_PROJECTIONS$1,
  PROJECTION: PROJECTION,
  PIPELINE: PIPELINE,
  PROJECTION_DATE: PROJECTION_DATE,
  SAME_AS_PROPOSED_START_DATE_LABEL: SAME_AS_PROPOSED_START_DATE_LABEL,
  SAME_AS_PROPOSED_APPROVAL_DATE_LABEL: SAME_AS_PROPOSED_APPROVAL_DATE_LABEL,
  DEPENDENCY_IMPLEMENTATION_LEVEL_PRESENT: DEPENDENCY_IMPLEMENTATION_LEVEL_PRESENT,
  DEPENDENCY_IMPLEMENTATION_LEVEL_VALID: DEPENDENCY_IMPLEMENTATION_LEVEL_VALID,
  DEPENDENCY_IMPLEMENTATION_LOCATION_PRESENT: DEPENDENCY_IMPLEMENTATION_LOCATION_PRESENT,
  DEPENDENCY_IMPLEMENTATION_LOCATION_VALID: DEPENDENCY_IMPLEMENTATION_LOCATION_VALID,
  DEPENDENCY_PROJECT_CODE_ON_BUDGET: DEPENDENCY_PROJECT_CODE_ON_BUDGET,
  DEPENDENCY_ON_BUDGET: DEPENDENCY_ON_BUDGET,
  DEPENDENCY_TRANSACTION_PRESENT: DEPENDENCY_TRANSACTION_PRESENT,
  DEPENDENCY_COMPONENT_FUNDING_ORG_VALID: DEPENDENCY_COMPONENT_FUNDING_ORG_VALID,
  AP_SECTION_IDS: AP_SECTION_IDS,
  ACTIVITY_INTERNAL_IDS_COLS: ACTIVITY_INTERNAL_IDS_COLS,
  ACTIVITY_PLANNING_COLS: ACTIVITY_PLANNING_COLS,
  ACTIVITY_LOCATION_COLS: ACTIVITY_LOCATION_COLS,
  ACTIVITY_FUNDING_COLS: ACTIVITY_FUNDING_COLS,
  ACTIVITY_CONTACT_COLS: ACTIVITY_CONTACT_COLS,
  AP_FUNDINGS_TABLE_COLS: AP_FUNDINGS_TABLE_COLS,
  MULTI_SELECT_MIN_SIZE: MULTI_SELECT_MIN_SIZE,
  MULTI_SELECT_MAX_SIZE: MULTI_SELECT_MAX_SIZE,
  toFieldNames: toFieldNames,
  toFieldName: toFieldName,
  toOriginalLabel: toOriginalLabel,
  capitalize: capitalize
});

var NOTIFICATION_ORIGIN_API_SECURITY = 'NOTIFICATION_ORIGIN_API_SECURITY';
var NOTIFICATION_ORIGIN_API_NETWORK = 'NOTIFICATION_ORIGIN_API_NETWORK';
var NOTIFICATION_ORIGIN_API_SYNCUP = 'NOTIFICATION_ORIGIN_API_SYNCUP';
var NOTIFICATION_ORIGIN_API_GENERAL = 'NOTIFICATION_ORIGIN_API_GENERAL';
var NOTIFICATION_ORIGIN_DATABASE = 'NOTIFICATION_ORIGIN_DATABASE';
var NOTIFICATION_ORIGIN_AUTHENTICATION = 'NOTIFICATION_ORIGIN_AUTHENTICATION';
var NOTIFICATION_ORIGIN_WORKSPACE_FILTER = 'NOTIFICATION_ORIGIN_WORKSPACE_FILTER';
var NOTIFICATION_ORIGIN_WORKSPACE = 'NOTIFICATION_ORIGIN_WORKSPACE';
var NOTIFICATION_ORIGIN_SYNCUP_PROCESS = 'NOTIFICATION_ORIGIN_SYNCUP_PROCESS';
var NOTIFICATION_ORIGIN_CURRENCY_MANAGER = 'NOTIFICATION_ORIGIN_CURRENCY_MANAGER';
var NOTIFICATION_ORIGIN_DATES = 'NOTIFICATION_ORIGIN_DATES';
var NOTIFICATION_ORIGIN_ACTIVITY = 'NOTIFICATION_ORIGIN_ACTIVITY';
var NOTIFICATION_ORIGIN_RESOURCE = 'NOTIFICATION_ORIGIN_RESOURCE';
var NOTIFICATION_ORIGIN_I18NEXT = 'NOTIFICATION_ORIGIN_I18NEXT';
var NOTIFICATION_ORIGIN_UPDATE_CHECK = 'NOTIFICATION_ORIGIN_UPDATE_CHECK';
var NOTIFICATION_ORIGIN_UPDATE = 'NOTIFICATION_ORIGIN_UPDATE';
var NOTIFICATION_ORIGIN_SETUP = 'NOTIFICATION_ORIGIN_SETUP';
var NOTIFICATION_ORIGIN_SETTINGS = 'NOTIFICATION_ORIGIN_SETTINGS';

var NOTIFICATION_SEVERITY_WARNING = 'NOTIFICATION_SEVERITY_WARNING';
var NOTIFICATION_SEVERITY_INFO = 'NOTIFICATION_SEVERITY_INFO';
var NOTIFICATION_SEVERITY_ERROR = 'NOTIFICATION_SEVERITY_ERROR';

var NOTIFICATION_ERROR_LEVEL_MINOR = 'NOTIFICATION_ERROR_LEVEL_MINOR';
var NOTIFICATION_ERROR_LEVEL_BLOCKER = 'NOTIFICATION_ERROR_LEVEL_BLOCKER';

var NOTIFICATION_ORIGIN_WRONG_METHOD_USAGE = 'NOTIFICATION_ORIGIN_WRONG_METHOD_USAGE';

var ERROR_CODE_NO_CONNECTIVITY = 'NO_CONNECTIVITY';
var ERROR_CODE_ACCESS_DENIED = 'ACCESS_DENIED';

var MSG_INVALID_URL = 'invalidUrl';
var MSG_TIMEOUT = 'timeoutError';
var MSG_UNKNOWN_NETWORK_ERROR = 'unknownNetworkError';
var MSG_AMP_UNREACHABLE = 'AMPUnreachableError';
var GENERAL_CONNECTION_ERRORS = [MSG_INVALID_URL, MSG_TIMEOUT, MSG_UNKNOWN_NETWORK_ERROR, MSG_AMP_UNREACHABLE];

var ErrorConstants = Object.freeze({
  NOTIFICATION_ORIGIN_API_SECURITY: NOTIFICATION_ORIGIN_API_SECURITY,
  NOTIFICATION_ORIGIN_API_NETWORK: NOTIFICATION_ORIGIN_API_NETWORK,
  NOTIFICATION_ORIGIN_API_SYNCUP: NOTIFICATION_ORIGIN_API_SYNCUP,
  NOTIFICATION_ORIGIN_API_GENERAL: NOTIFICATION_ORIGIN_API_GENERAL,
  NOTIFICATION_ORIGIN_DATABASE: NOTIFICATION_ORIGIN_DATABASE,
  NOTIFICATION_ORIGIN_AUTHENTICATION: NOTIFICATION_ORIGIN_AUTHENTICATION,
  NOTIFICATION_ORIGIN_WORKSPACE_FILTER: NOTIFICATION_ORIGIN_WORKSPACE_FILTER,
  NOTIFICATION_ORIGIN_WORKSPACE: NOTIFICATION_ORIGIN_WORKSPACE,
  NOTIFICATION_ORIGIN_SYNCUP_PROCESS: NOTIFICATION_ORIGIN_SYNCUP_PROCESS,
  NOTIFICATION_ORIGIN_CURRENCY_MANAGER: NOTIFICATION_ORIGIN_CURRENCY_MANAGER,
  NOTIFICATION_ORIGIN_DATES: NOTIFICATION_ORIGIN_DATES,
  NOTIFICATION_ORIGIN_ACTIVITY: NOTIFICATION_ORIGIN_ACTIVITY,
  NOTIFICATION_ORIGIN_RESOURCE: NOTIFICATION_ORIGIN_RESOURCE,
  NOTIFICATION_ORIGIN_I18NEXT: NOTIFICATION_ORIGIN_I18NEXT,
  NOTIFICATION_ORIGIN_UPDATE_CHECK: NOTIFICATION_ORIGIN_UPDATE_CHECK,
  NOTIFICATION_ORIGIN_UPDATE: NOTIFICATION_ORIGIN_UPDATE,
  NOTIFICATION_ORIGIN_SETUP: NOTIFICATION_ORIGIN_SETUP,
  NOTIFICATION_ORIGIN_SETTINGS: NOTIFICATION_ORIGIN_SETTINGS,

  NOTIFICATION_SEVERITY_WARNING: NOTIFICATION_SEVERITY_WARNING,
  NOTIFICATION_SEVERITY_INFO: NOTIFICATION_SEVERITY_INFO,
  NOTIFICATION_SEVERITY_ERROR: NOTIFICATION_SEVERITY_ERROR,

  NOTIFICATION_ERROR_LEVEL_MINOR: NOTIFICATION_ERROR_LEVEL_MINOR,
  NOTIFICATION_ERROR_LEVEL_BLOCKER: NOTIFICATION_ERROR_LEVEL_BLOCKER,

  NOTIFICATION_ORIGIN_WRONG_METHOD_USAGE: NOTIFICATION_ORIGIN_WRONG_METHOD_USAGE,

  ERROR_CODE_NO_CONNECTIVITY: ERROR_CODE_NO_CONNECTIVITY,
  ERROR_CODE_ACCESS_DENIED: ERROR_CODE_ACCESS_DENIED,

  MSG_INVALID_URL: MSG_INVALID_URL,
  MSG_TIMEOUT: MSG_TIMEOUT,
  MSG_UNKNOWN_NETWORK_ERROR: MSG_UNKNOWN_NETWORK_ERROR,
  MSG_AMP_UNREACHABLE: MSG_AMP_UNREACHABLE,
  GENERAL_CONNECTION_ERRORS: GENERAL_CONNECTION_ERRORS
});

var index = { TestAPField: TestAPField, TestingSection: TestingSection, Constants: Constants, ActivityConstants: ActivityConstants, FeatureManagerConstants: FeatureManagerConstants, ErrorConstants: ErrorConstants };

export default index;
export { TestAPField, TestingSection, Constants, ActivityConstants, FeatureManagerConstants, ErrorConstants };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguZXMuanMiLCJzb3VyY2VzIjpbIi4uL25vZGVfbW9kdWxlcy9zdHlsZS1pbmplY3QvZGlzdC9zdHlsZS1pbmplY3QuZXMuanMiLCIuLi9zcmMvYWN0aXZpdHlQcmV2aWV3L2NvbXBvbmVudHMvVGVzdEFQRmllbGQuanMiLCIuLi9zcmMvYWN0aXZpdHlQcmV2aWV3L2NvbXBvbmVudHMvVGVzdGluZ1NlY3Rpb24uanMiLCIuLi9zcmMvdXRpbHMvQ29uc3RhbnRzLmpzIiwiLi4vc3JjL21vZHVsZXMvdXRpbC9GZWF0dXJlTWFuYWdlckNvbnN0YW50cy5qcyIsIi4uL3NyYy9tb2R1bGVzL3V0aWwvQWN0aXZpdHlDb25zdGFudHMuanMiLCIuLi9zcmMvdXRpbHMvY29uc3RhbnRzL0Vycm9yQ29uc3RhbnRzLmpzIiwiLi4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIHN0eWxlSW5qZWN0KGNzcywgcmVmKSB7XG4gIGlmICggcmVmID09PSB2b2lkIDAgKSByZWYgPSB7fTtcbiAgdmFyIGluc2VydEF0ID0gcmVmLmluc2VydEF0O1xuXG4gIGlmICghY3NzIHx8IHR5cGVvZiBkb2N1bWVudCA9PT0gJ3VuZGVmaW5lZCcpIHsgcmV0dXJuOyB9XG5cbiAgdmFyIGhlYWQgPSBkb2N1bWVudC5oZWFkIHx8IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF07XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gIHN0eWxlLnR5cGUgPSAndGV4dC9jc3MnO1xuXG4gIGlmIChpbnNlcnRBdCA9PT0gJ3RvcCcpIHtcbiAgICBpZiAoaGVhZC5maXJzdENoaWxkKSB7XG4gICAgICBoZWFkLmluc2VydEJlZm9yZShzdHlsZSwgaGVhZC5maXJzdENoaWxkKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaGVhZC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGhlYWQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9XG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgc3R5bGVJbmplY3Q7XG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vLi4vYWN0aXZpdHlBc3NldHMvc3R5bGVzaGVldHMvQWN0aXZpdHlQcmV2aWV3LmNzcyc7XG5cblxuLyoqXG4gKiBTaW1wbGUgRmllbGQgY29tcG9uZW50IHRoYXQgY29uc2lzdHMgb2YgYSBmaWVsZCB0aXRsZSBhbmQgZmllbGQgdmFsdWVcbiAqIEBhdXRob3IgTmFkZWpkYSBNYW5kcmVzY3VcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGVzdEFQRmllbGQgZXh0ZW5kcyBDb21wb25lbnQge1xuICAvKipcbiAgICogR2V0cyBhbiBpbnN0YW5jZSBvZiBTaW1wbGUgRmllbGRcbiAgICogQHBhcmFtIHRybkxhYmVsIHRoZSBsYWJlbCB0byB0cmFuc2xhdGUgYW5kIHVzZSBhcyBhIHRpdGxlLiBUaGlzIGxhYmVsIGlzIGFsc28gdXNlZCBhcyB0aGUgY29tcG9uZW50IGtleS5cbiAgICogQHBhcmFtIHZhbHVlIHRoZSBmaWVsZCB2YWx1ZVxuICAgKiBAcGFyYW0gaW5saW5lIHNob3cgdGl0bGUgYW5kIHZhbHVlIGluIHRoZSBzYW1lIHJvdy5cbiAgICogQHBhcmFtIHNlcGFyYXRvciBhZGQgb3Igbm90IGFuIDxocj4gdGFnLlxuICAgKiBAcGFyYW0gbmFtZUNsYXNzIGNzcyBjbGFzcyBmb3IgdGhlIGZpZWxkIGxhYmVsXG4gICAqIEBwYXJhbSB2YWx1ZUNsYXNzIGNzcyBjbGFzcyBmb3IgdGhlIGZpZWxkIHZhbHVlXG4gICAqIEByZXR1cm4ge1NpbXBsZUZpZWxkfVxuICAgKi9cbiAgc3RhdGljIGluc3RhbmNlKHRybkxhYmVsLCB2YWx1ZSwgaW5saW5lID0gZmFsc2UsIHNlcGFyYXRvciA9IGZhbHNlLCBuYW1lQ2xhc3MsIHZhbHVlQ2xhc3MpIHtcbiAgICByZXR1cm4gKDxUZXN0QVBGaWVsZFxuICAgICAga2V5PXt0cm5MYWJlbH0gdGl0bGU9e3RoaXMucHJvcHMudHJhbnNsYXRlKHRybkxhYmVsKX0gdmFsdWU9e3ZhbHVlfSBpbmxpbmU9e2lubGluZX0gc2VwYXJhdG9yPXtzZXBhcmF0b3J9XG4gICAgICBmaWVsZE5hbWVDbGFzcz17bmFtZUNsYXNzfSBmaWVsZFZhbHVlQ2xhc3M9e3ZhbHVlQ2xhc3N9IC8+KTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMucHJvcHMuYW1wTG9nZ2VyLmxvZygnY29uc3RydWN0b3JlJyk7XG4gICAgdGhpcy51c2VTZXBhcmF0b3IgPSB0aGlzLnByb3BzLnNlcGFyYXRvciAhPT0gZmFsc2U7XG4gICAgdGhpcy5kaXNwbGF5Q2xhc3MgPSB0aGlzLnByb3BzLmZpZWxkQ2xhc3MgfHwgKHRoaXMucHJvcHMuaW5saW5lID09PSB0cnVlID8gc3R5bGVzLmlubGluZSA6IHN0eWxlcy5ibG9jayk7XG4gIH1cblxuICBfZ2V0VmFsdWUoKSB7XG4gICAgY29uc3QgY2xhc3NOYW1lcyA9IGAke3RoaXMucHJvcHMuZmllbGRWYWx1ZUNsYXNzfSAke3RoaXMuZGlzcGxheUNsYXNzfWA7XG4gICAgLy8gVG8gaGFuZGxlIGJvb2xlYW4gZmllbGRzIHdlIGRvbnQgd2FudCB0byBzaG93ICdmYWxzZScgYXMgJ05vIERhdGEnLlxuICAgIGNvbnN0IHZhbHVlID0gKHRoaXMucHJvcHMudmFsdWUgfHwgdGhpcy5wcm9wcy52YWx1ZSA9PT0gZmFsc2UpID8gdGhpcy5wcm9wcy52YWx1ZSA6IHRoaXMucHJvcHMudHJhbnNsYXRlKCdObyBEYXRhJyk7XG4gICAgbGV0IGRpc3BsYXlWYWx1ZTtcbiAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgIGlmICh2YWx1ZVswXSBpbnN0YW5jZW9mIE9iamVjdCkge1xuICAgICAgICBkaXNwbGF5VmFsdWUgPSBbXTtcbiAgICAgICAgdmFsdWUuZm9yRWFjaCh2ID0+IGRpc3BsYXlWYWx1ZS5wdXNoKHYpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRpc3BsYXlWYWx1ZSA9IHZhbHVlLnNvcnQoKS5qb2luKCcsICcpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodHlwZW9mIHZhbHVlID09PSAnYm9vbGVhbicpIHtcbiAgICAgIGRpc3BsYXlWYWx1ZSA9IHZhbHVlID09PSB0cnVlID8gdGhpcy5wcm9wcy50cmFuc2xhdGUoJ1llcycpIDogdGhpcy5wcm9wcy50cmFuc2xhdGUoJ05vJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRpc3BsYXlWYWx1ZSA9ICh0aGlzLnByb3BzLmlubGluZSAmJiB0aGlzLnByb3BzLnZhbHVlIGluc3RhbmNlb2YgU3RyaW5nKSA/IGAke3ZhbHVlfSBgIDogdmFsdWU7XG4gICAgfVxuICAgIGlmICh0aGlzLnByb3BzLnVzZUlubmVySFRNTCkge1xuICAgICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWVzfSBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IGRpc3BsYXlWYWx1ZSB9fSAvPjtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWVzfT57ZGlzcGxheVZhbHVlfTwvZGl2PjtcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgY2xhc3NOYW1lcyA9IGAke3RoaXMucHJvcHMuZmllbGROYW1lQ2xhc3N9ICR7dGhpcy5kaXNwbGF5Q2xhc3N9YDtcbiAgICByZXR1cm4gKDxkaXYgY2xhc3NOYW1lPXt0aGlzLmRpc3BsYXlDbGFzc30+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lc30+e3RoaXMucHJvcHMudGl0bGV9PC9kaXY+XG4gICAgICB7dGhpcy5fZ2V0VmFsdWUoKX1cbiAgICAgIHt0aGlzLnVzZVNlcGFyYXRvciA/IDxociAvPiA6ICcnfVxuICAgIDwvZGl2Pik7XG4gIH1cbn1cblxuVGVzdEFQRmllbGQucHJvcFR5cGVzID0ge1xuICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgdmFsdWU6IFByb3BUeXBlcy5hbnksXG4gIGlubGluZTogUHJvcFR5cGVzLmJvb2wsXG4gIHVzZUlubmVySFRNTDogUHJvcFR5cGVzLmJvb2wsXG4gIGZpZWxkQ2xhc3M6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGZpZWxkTmFtZUNsYXNzOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBmaWVsZFZhbHVlQ2xhc3M6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHNlcGFyYXRvcjogUHJvcFR5cGVzLmJvb2wsXG4gIGFtcExvZ2dlcjogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICB0cmFuc2xhdGU6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWRcbn07XG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBUZXN0QVBGaWVsZCBmcm9tICcuL1Rlc3RBUEZpZWxkJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGVzdGluZ1NlY3Rpb24gZXh0ZW5kcyBDb21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxoMj50ZXN0aW5nIGNvbXBvbmVudDwvaDI+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgdGVzdCB0cmFuc2xhdGlvbjogYERFU0tUT1AgPSB7dGhpcy5wcm9wcy50cmFuc2xhdGUoJ0RFU0tUT1AnKX1gXG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIHRlc3QgQVBGaWVsZDpcbiAgICAgICAgICA8VGVzdEFQRmllbGQgYW1wTG9nZ2VyPXt0aGlzLnByb3BzLmFtcExvZ2dlcn0gdHJhbnNsYXRlPXt0aGlzLnByb3BzLnRyYW5zbGF0ZX0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj4pO1xuICB9XG59XG5UZXN0aW5nU2VjdGlvbi5wcm9wVHlwZXMgPSB7XG4gIGFtcExvZ2dlcjogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICB0cmFuc2xhdGU6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWRcbn07XG4iLCJjb25zdCBTRVJWRVJfVVJMID0gJ19fU0VSVkVSX1VSTF9fJztcbmNvbnN0IEJBU0VfUkVTVF9VUkwgPSAnL3Jlc3QnO1xuY29uc3QgUFJPVE9DT0wgPSAnX19TRVJWRVJfUFJPVE9DT0xfXyc7XG5jb25zdCBCQVNFX1BPUlQgPSAnX19TRVJWRVJfUE9SVF9fJztcblxuY29uc3QgQ09OTkVDVElPTl9USU1FT1VUID0gMjUwMDA7XG5jb25zdCBDT05ORUNUSU9OX0ZPUkNFRF9USU1FT1VUID0gQ09OTkVDVElPTl9USU1FT1VUICsgNTAwMDtcbmNvbnN0IFRJTUVPVVRfQ0hFQ0tfSU5URVJWQUwgPSA1MDAwO1xuY29uc3QgTUFYX1JFVFJZX0FURU1QVFMgPSA1O1xuY29uc3QgRVJST1JTX1RPX1JFVFJZID0gWydFU09DS0VUVElNRURPVVQnLCAnRVRJTUVET1VUJywgJ0VDT05OUkVTRVQnLCAnRUFJX0FHQUlOJ107XG5jb25zdCBFUlJPUlNfTk9fQU1QX1NFUlZFUiA9IFsnRUNPTk5SRUZVU0VEJywgJ0VORVRVTlJFQUNIJywgJ0VOT0VOVCcsICdFTk9URk9VTkQnLCAnRU5FVERPV04nLCAnRUhPU1RET1dOJyxcbiAgJ0VIT1NUVU5SRUFDSCcsICdFTk9ORVQnXTtcbmNvbnN0IENPTk5FQ1RJVklUWV9DSEVDS19JTlRFUlZBTCA9ICc2MDAwMCc7IC8vIDEgbWludXRlc1xuXG5jb25zdCBXT1JLU1BBQ0VfVVJMID0gJy93b3Jrc3BhY2UnO1xuY29uc3QgTE9HSU5fVVJMID0gJy8nO1xuY29uc3QgREVTS1RPUF9VUkwgPSAnL2Rlc2t0b3AnO1xuY29uc3QgREVTS1RPUF9DVVJSRU5UX1VSTCA9ICcvZGVza3RvcC9jdXJyZW50JztcbmNvbnN0IFNZTkNVUF9SRURJUkVDVF9VUkwgPSAnL3N5bmNVcC9zeW5jJztcbmNvbnN0IFNZTkNVUF9ISVNUT1JZX1RBUkdFVCA9ICdoaXN0b3J5JztcbmNvbnN0IFNZTkNVUF9TVU1NQVJZX1VSTCA9ICcvc3luY1VwU3VtbWFyeSc7XG5jb25zdCBBQ1RJVklUWV9QUkVWSUVXX1VSTCA9ICcvYWN0aXZpdHkvcHJldmlldyc7XG5jb25zdCBBQ1RJVklUWV9FRElUX1VSTCA9ICcvYWN0aXZpdHkvZWRpdCc7XG5jb25zdCBVUERBVEVfVVJMID0gJy91cGRhdGUnO1xuY29uc3QgU0VUVVBfVVJMID0gJy9zZXR1cCc7XG5jb25zdCBTRVRUSU5HU19VUkwgPSAnL3NldHRpbmdzJztcblxuY29uc3QgQ09MTEVDVElPTl9VU0VSUyA9ICd1c2Vycyc7XG5jb25zdCBDT0xMRUNUSU9OX1dPUktQQUNFUyA9ICd3b3Jrc3BhY2VzJztcbmNvbnN0IENPTExFQ1RJT05fVEVBTU1FTUJFUlMgPSAndGVhbW1lbWJlcnMnO1xuY29uc3QgQ09MTEVDVElPTl9DTElFTlRfU0VUVElOR1MgPSAnY2xpZW50LXNldHRpbmdzJztcbmNvbnN0IENPTExFQ1RJT05fR0xPQkFMX1NFVFRJTkdTID0gJ2dsb2JhbC1zZXR0aW5ncyc7XG5jb25zdCBDT0xMRUNUSU9OX0FDVElWSVRJRVMgPSAnYWN0aXZpdGllcyc7XG5jb25zdCBDT0xMRUNUSU9OX0ZJRUxEUyA9ICdmaWVsZHMnO1xuY29uc3QgQ09MTEVDVElPTl9QT1NTSUJMRV9WQUxVRVMgPSAncG9zc2libGUtdmFsdWVzJztcbmNvbnN0IENPTExFQ1RJT05fU1lOQ1VQX0xPRyA9ICdzeW5jdXAtbG9nJztcbmNvbnN0IENPTExFQ1RJT05fTEFOR1MgPSAnbGFuZ3VhZ2VzJztcbmNvbnN0IENPTExFQ1RJT05fV1NfU0VUVElOR1MgPSAnd29ya3NwYWNlLXNldHRpbmdzJztcbmNvbnN0IENPTExFQ1RJT05fQ1VSUkVOQ1lfUkFURVMgPSAnY3VycmVuY3ktcmF0ZXMnO1xuY29uc3QgQ09MTEVDVElPTl9GRUFUVVJFX01BTkFHRVIgPSAnZmVhdHVyZS1tYW5hZ2VyJztcbmNvbnN0IENPTExFQ1RJT05fQ09OVEFDVFMgPSAnY29udGFjdHMnO1xuY29uc3QgQ09MTEVDVElPTl9SRVNPVVJDRVMgPSAncmVzb3VyY2VzJztcbmNvbnN0IENPTExFQ1RJT05fUkVQT1NJVE9SWSA9ICdyZXBvc2l0b3J5JztcbmNvbnN0IENPTExFQ1RJT05fR0FaRVRURUVSID0gJ2dhemV0dGVlcic7XG5jb25zdCBDT0xMRUNUSU9OX0NBTEVOREFSUyA9ICdjYWxlbmRhcnMnO1xuY29uc3QgQ09MTEVDVElPTl9DSEFOR0VTRVRTID0gJ2NoYW5nZXNldHMnO1xuXG5jb25zdCBHQVpFVFRFRVJfRElTVEFOQ0VfRElWSURFID0gMztcblxuY29uc3QgREJfRklMRV9QUkVGSVggPSAnZGF0YWJhc2UnO1xuY29uc3QgREJfRklMRV9FWFRFTlNJT04gPSAnLmRiJztcbmNvbnN0IERCX0NPTU1PTl9EQVRBU1RPUkVfT1BUSU9OUyA9IHsgYXV0b2xvYWQ6IGZhbHNlLCBjb3JydXB0QWxlcnRUaHJlc2hvbGQ6IDAgfTtcbmNvbnN0IERCX0FVVE9DT01QQUNUX0lOVEVSVkFMX01JTElTRUNPTkRTID0gNjAwMDA7XG5jb25zdCBEQl9ERUZBVUxUX1FVRVJZX0xJTUlUID0gOTk5OTk5OTk5O1xuXG5jb25zdCBMQU5HVUFHRV9FTkdMSVNIID0gJ2VuJztcbmNvbnN0IEZTX0xPQ0FMRVNfRElSRUNUT1JZID0gJ2xhbmcnO1xuY29uc3QgTEFOR1VBR0VfTUFTVEVSX1RSQU5TTEFUSU9OU19GSUxFID0gJ21hc3Rlci10cmFuc2xhdGlvbnMnO1xuY29uc3QgTEFOR1VBR0VfVFJBTlNMQVRJT05TX0ZJTEUgPSAndHJhbnNsYXRpb25zJztcbmNvbnN0IExBTkdVQUdFX05FV19UUkFOU0xBVElPTlNfTVVTVF9TWU5DID0gJ211c3Rfc3luY190cmFuc2xhdGlvbi5qc29uJztcblxuY29uc3QgQVNBUl9ESVIgPSAnYXBwLmFzYXInO1xuY29uc3QgQVBQX0RJUkVDVE9SWSA9ICdhcHAnO1xuY29uc3QgVEVTVF9ESVJFQ1RPUlkgPSAndGVzdCc7XG5jb25zdCBTVEFUSUNfRElSID0gJ3N0YXRpYyc7XG5jb25zdCBJTUFHRVNfRElSID0gJ2ltYWdlcyc7XG5jb25zdCBET0NfSUNPTlMgPSAnZG9jLWljb25zJztcbmNvbnN0IERCX1NUQVRJQ19ESVIgPSAnZGInO1xuY29uc3QgTUlHUkFUSU9OU19ESVIgPSAnY2hhbmdlbG9nJztcblxuY29uc3QgSEFTSF9JVEVSQVRJT05TID0gMTAwO1xuY29uc3QgRElHRVNUX0FMR09SSVRITV9TSEExID0gJ1NIQS0xJztcbmNvbnN0IERJR0VTVF9BTEdPUklUSE1fU0hBMjU2ID0gJ1NIQS0yNTYnO1xuXG5jb25zdCBBQ1RJVklUWV9FRElUID0gJ0FDVElWSVRZX0VESVQnO1xuY29uc3QgQUNUSVZJVFlfVklFVyA9ICdBQ1RJVklUWV9WSUVXJztcblxuY29uc3QgU1lOQ1VQX0ZPUkNFX0RBWVMgPSAxNDtcbmNvbnN0IFNZTkNVUF9CRVNUX0JFRk9SRV9EQVlTID0gNztcbmNvbnN0IFNZTkNVUF9OT19EQVRFID0gJzE5MDAtMDEtMDFUMDA6MDA6MDAuMDAwKzAwMDAnO1xuY29uc3QgU1lOQ1VQX1RZUEVfVFJBTlNMQVRJT05TID0gJ3RyYW5zbGF0aW9ucyc7XG5jb25zdCBTWU5DVVBfVFlQRV9VU0VSUyA9ICd1c2Vycyc7XG5jb25zdCBTWU5DVVBfVFlQRV9BU1NFVFMgPSAnYXNzZXRzJztcbmNvbnN0IFNZTkNVUF9UWVBFX1dPUktTUEFDRVMgPSAnd29ya3NwYWNlcyc7XG5jb25zdCBTWU5DVVBfVFlQRV9HUyA9ICdnbG9iYWwtc2V0dGluZ3MnO1xuY29uc3QgU1lOQ1VQX1RZUEVfRVhDSEFOR0VfUkFURVMgPSAnZXhjaGFuZ2UtcmF0ZXMnO1xuY29uc3QgU1lOQ1VQX1RZUEVfRkVBVFVSRV9NQU5BR0VSID0gJ2ZlYXR1cmUtbWFuYWdlcic7XG5jb25zdCBTWU5DVVBfVFlQRV9XT1JLU1BBQ0VfTUVNQkVSUyA9ICd3b3Jrc3BhY2UtbWVtYmVycyc7XG5jb25zdCBTWU5DVVBfVFlQRV9BTExfRklFTERTID0gJ2ZpZWxkcyc7XG5jb25zdCBTWU5DVVBfVFlQRV9BQ1RJVklUSUVTX1BVTEwgPSAnYWN0aXZpdGllcyc7XG5jb25zdCBTWU5DVVBfVFlQRV9BQ1RJVklUSUVTX1BVU0ggPSAnYWN0aXZpdGllcy1wdXNoJztcbmNvbnN0IFNZTkNVUF9UWVBFX0FDVElWSVRZX0ZJRUxEUyA9ICdhY3Rpdml0eS1maWVsZHMnO1xuY29uc3QgU1lOQ1VQX1RZUEVfQUNUSVZJVFlfRklFTERTX1NUUlVDVFVSQUxfQ0hBTkdFUyA9ICdhY3Rpdml0eS1maWVsZHMtc3RydWN0dXJhbC1jaGFuZ2VzJztcbmNvbnN0IFNZTkNVUF9UWVBFX0NPTlRBQ1RTX1BVTEwgPSAnY29udGFjdHMnO1xuY29uc3QgU1lOQ1VQX1RZUEVfQ09OVEFDVFNfUFVTSCA9ICdjb250YWN0cy1wdXNoJztcbmNvbnN0IFNZTkNVUF9UWVBFX0FDVElWSVRZX1BPU1NJQkxFX1ZBTFVFUyA9ICdhY3Rpdml0eS1wb3NzaWJsZS12YWx1ZXMtZmllbGRzJztcbmNvbnN0IFNZTkNVUF9UWVBFX0NPTlRBQ1RfRklFTERTID0gJ2NvbnRhY3QtZmllbGRzJztcbmNvbnN0IFNZTkNVUF9UWVBFX0NPTlRBQ1RfRklFTERTX1NUUlVDVFVSQUxfQ0hBTkdFUyA9ICdjb250YWN0LWZpZWxkcy1zdHJ1Y3R1cmFsLWNoYW5nZXMnO1xuY29uc3QgU1lOQ1VQX1RZUEVfQ09OVEFDVF9QT1NTSUJMRV9WQUxVRVMgPSAnY29udGFjdC1wb3NzaWJsZS12YWx1ZXMtZmllbGRzJztcbmNvbnN0IFNZTkNVUF9UWVBFX1JFU09VUkNFU19QVUxMID0gJ3Jlc291cmNlcyc7XG5jb25zdCBTWU5DVVBfVFlQRV9SRVNPVVJDRVNfUFVTSCA9ICdyZXNvdXJjZXMtcHVzaCc7XG5jb25zdCBTWU5DVVBfVFlQRV9SRVNPVVJDRV9GSUVMRFMgPSAncmVzb3VyY2UtZmllbGRzJztcbmNvbnN0IFNZTkNVUF9UWVBFX1JFU09VUkNFX0ZJRUxEU19TVFJVQ1RVUkFMX0NIQU5HRVMgPSAncmVzb3VyY2UtZmllbGRzLXN0cnVjdHVyYWwtY2hhbmdlcyc7XG5jb25zdCBTWU5DVVBfVFlQRV9SRVNPVVJDRV9QT1NTSUJMRV9WQUxVRVMgPSAncmVzb3VyY2UtcG9zc2libGUtdmFsdWVzLWZpZWxkcyc7XG5jb25zdCBTWU5DVVBfVFlQRV9DT01NT05fUE9TU0lCTEVfVkFMVUVTID0gJ2NvbW1vbi1wb3NzaWJsZS12YWx1ZXMtZmllbGRzJztcbmNvbnN0IFNZTkNVUF9UWVBFX1dPUktTUEFDRV9TRVRUSU5HUyA9ICd3b3Jrc3BhY2Utc2V0dGluZ3MnO1xuY29uc3QgU1lOQ1VQX1RZUEVfTUFQX1RJTEVTID0gJ21hcC10aWxlcyc7XG5jb25zdCBTWU5DVVBfVFlQRV9HQVpFVFRFRVIgPSAnbG9jYXRvcnMnO1xuY29uc3QgU1lOQ1VQX1RZUEVfQ0FMRU5EQVJTID0gJ2NhbGVuZGFycyc7XG5cbmNvbnN0IFNZTkNVUF9TVEFUVVNfU1VDQ0VTUyA9ICdTVUNDRVNTJztcbmNvbnN0IFNZTkNVUF9TVEFUVVNfRkFJTCA9ICdGQUlMJztcbmNvbnN0IFNZTkNVUF9TVEFUVVNfUEFSVElBTCA9ICdQQVJUSUFMJztcbmNvbnN0IFNZTkNVUF9TVEFUVVNfQ0FOQ0VMRUQgPSAnQ0FOQ0VMRUQnO1xuY29uc3QgU1lOQ1VQX1NZTkNfUkVRVUVTVEVEX0FUID0gJ3N5bmMtZGF0ZSc7XG5jb25zdCBTWU5DVVBfU1lOQ19SRVFVRVNURURfQlkgPSAncmVxdWVzdGVkLWJ5JztcbmNvbnN0IFNZTkNVUF9EQVRFVElNRV9GSUVMRCA9ICd0aW1lc3RhbXAnO1xuY29uc3QgU1lOQ1VQX0RJRkZfTEVGVE9WRVIgPSAnc3luY3VwLWRpZmYtbGVmdG92ZXInO1xuY29uc3QgU1lOQ1VQX0RFUEVOREVOQ1lfQ0hFQ0tfSU5URVJWQUwgPSAxMDtcbmNvbnN0IFNZTkNVUF9ERVRBSUxTX1NZTkNFRCA9ICdzeW5jZWQnO1xuY29uc3QgU1lOQ1VQX0RFVEFJTFNfVU5TWU5DRUQgPSAndW5zeW5jZWQnO1xuY29uc3QgU1lOQ1VQX1JFU09VUkNFX1BVTExfQkFUQ0hfU0laRSA9IDEwMDtcbmNvbnN0IFNZTkNVUF9BQ1RJVklUSUVTX1BVTExfQkFUQ0hfU0laRSA9IDEwMDtcbmNvbnN0IFNZTkNVUF9DT05UQUNUU19QVUxMX0JBVENIX1NJWkUgPSAxMDA7XG5cbmNvbnN0IEFDVElWSVRZX1NUQVRVU19EUkFGVCA9ICdBQ1RJVklUWV9TVEFUVVNfRFJBRlQnO1xuY29uc3QgQUNUSVZJVFlfU1RBVFVTX1VOVkFMSURBVEVEID0gJ0FDVElWSVRZX1NUQVRVU19VTlZBTElEQVRFRCc7XG5jb25zdCBBQ1RJVklUWV9TVEFUVVNfVkFMSURBVEVEID0gJ0FDVElWSVRZX1NUQVRVU19WQUxJREFURUQnO1xuXG5jb25zdCBDVVJSRU5DWV9IT1VSID0gJzAwOjAwJztcbmNvbnN0IERFRkFVTFRfQ1VSUkVOQ1kgPSAnVVNEJztcbmNvbnN0IFJBVEVfU0FNRV9DVVJSRU5DWSA9IDE7XG5jb25zdCBSQVRFX0NVUlJFTkNZX05PVF9GT1VORCA9IDE7XG5jb25zdCBDVVJSRU5DWV9QQUlSID0gJ2N1cnJlbmN5LXBhaXInO1xuY29uc3QgVkVSU0lPTl9QQVRURVJOID0gLyhcXGQrKVxcLihcXGQrKShcXC4oXFxkKykpPygtXFx3Kyk/LztcbmNvbnN0IFZFUlNJT05fUEFUVEVSTl9HUk9VUFNfVE9fRVhUUkFDVCA9IFsxLCAyLCA0LCA1XTtcbmNvbnN0IEFNUF9DT1VOVFJZX0xPR08gPSAnYW1wQ291bnRyeUZsYWcucG5nJztcbmNvbnN0IEFTU0VUU19ESVJFQ1RPUlkgPSAnYXNzZXRzJztcbmNvbnN0IEJBU0VfNjRfUE5HX1BSRUZJWCA9ICdkYXRhOmltYWdlL3BuZztiYXNlNjQsJztcbi8vIEhvbGRzIHRoZSBCQVNFNjQgcmVwcmVzZW50YXRpb24gb2YgYSBhIHRyYW5zcGFyZW50IGltYWdlIDF4MSBpbiBjYXNlIHdlIGRvbid0IHlldCBoYXZlIHRoZSBjb3VudHJ5IGZsYWdcbmNvbnN0XG4gIFRSQU5TUEFSRU5UX0ZMQUcgPSAnaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFFQUFBQUJDQVFBQUFDMUhBd0NBQUFBQzBsRVFWUjRuR1A2endBQUFnY0JBcG9jTVhFQUFBQUFTVVZPUks1Q1lJST0nO1xuY29uc3QgSEVMUF9QREZfRklMRU5BTUUgPSAnYW1wLWhlbHAnO1xuY29uc3QgSEVMUF9ESVIgPSAnaGVscCc7XG5jb25zdCBFTkRTX1dJVEhfUFVOQ1RVQVRJT05fUkVHRVggPSAvWy4hPyw7Ol0kLztcblxuY29uc3QgTUFQX1RJTEVTX0RJUiA9ICdtYXAtdGlsZXMnO1xuY29uc3QgVElMRVNfWklQX0ZJTEUgPSAnbWFwLXRpbGVzLnppcCc7XG5cbi8qIGVzbGludC1kaXNhYmxlIG1heC1sZW4gKi9cbmNvbnN0IE1BUF9NQVJLRVJfSU1BR0UgPSAnZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFCa0FBQUFwQ0FZQUFBREFrNExPQUFBRmdVbEVRVlI0QWExWEE1QmpXUlROMm9XMTdkM1lhWnRyMjk2MkhVemJETnBqc3pXMjRtUnQyOHA0N3Y3enEvYlhadHJwL2xXblhyMzM3ajNuUENlODVOY3lwZ1NGZHVnQ3BXNVlvREFNUmFJTXFSaTZhS3E1RTNZcURRTzNxQXdqVldyRDhOY3EvUkJweWtkOG9aVWIva2FKdXRvdzhyMWFQOUlJMFdtTEtMSXNKeXYxdy9rcXc5Q2gyTVlkQisrMTJPbnhlZS9RTXd2ZjQvRGsvTGZwL2k0bnhUWHRPb1E0cFc1QWo3d3BpY2kxQTllcmRBTjJPSDY0eDhPU1A5ajNGdDNiN2FXa1RnL0ZtOTFzaVRyYTBmOW9uNXNRcjlJTmVqSDZDVVVVcGF2akZOcTFCK09hZGh4bW5mYThSZkVtTjhWTkFzUWhQcUY1NXhIa016ejNqU21DaFdVNmY3L1haS05IKzkraEJMT0hZb3p1S1FQeHlNUFVLa3JYL0swdVduZkZhSkdTMVFQUnRac09QdHIzTnNXMHV5aDZOTkNPa1UzWXorYlhiVDNJOEczeEU1RVhMWHRDWGJicXdDTzl6UFFZUFJUWjV2SURYRDdVK3c3ckZERW9VVWY3aWJISVI0eTZiTFZQWHJ6OEpWWkVxbDEzdHJ4d3VlL3VEaXZkM2ZrV1JiUzYvSUEyYklENHVrMFVwRjFOOHFMbGJCbFhzNEVlN0hMVGZWMWo1NEFQdk9EblNmT1dCcXRLVnZqZ0xLekY1WWRFazVld1JrR2xLMGkzM0VvZmZmYzdIVDU2akQ3LzZVK3FIM0N4N1NCTE5udEg1WUlQdk9EbnlmSVhaWVJWRFBxZ0h0THM1QUJIRDNZekx1ZXNwYjd0NzlGWTM0RGpNd3JWcmNUdXdsVDU1WU1Qdk9CblJySjRWWFRkTm5ZdWc1dWNITEJqRXB0MzA3MDFBM1RzK0hFYTczdTZkVDNGTld3ZmxZODZlTUhQaytZdStpNnB6VXBSclc3U05EZzVKSFI0S2FwbU01V3YyRThUZmNiMUhvcXFITUhVK3VXREQ3emc1NG16NS8yQlNuaXppOVQxRGc0UVFYTFRvR05Da2I2dGIxTlUrUUFsR3IxKytlQURyemhuL3U4UTJZWmhRVmxaNStDQU90cWZiaG1hVUNTMWV6TkZWbTJpbURiUG1Qbmc1d216K2d3aCtvSERjZTBlVXRRNk9HREl5UjB1VWhVc29PM3ZmRG1tZ09lekgwbVpONTl4N01CaSsrV0RMMWcvZUVpVTNhdmxpZE82NzFia0xmd2J3NVhWMlA4UHpvMHlkeTR0Mi8wZXUzM3hZU09NT0Q4aFRmNENyQnRHTVNvWGZQTGNoWCtKMHJ1U2VQdzNMWmVLMGp1UEpiWXpyaGtIMGlvN0IzazE2NGhpR3Zhd2hPS01Ma3JRTHlWcFpnOHJIRlc3RTJ1SE9MODg4SUJQbE5aMUZQenN0U0pNNjk0ZldyNlJ3cHZjSks2MCswSENJTFRCelpMRk5kdEF6SmFvaHplNjBUOHFCenloNVp1T2c1ZTd1d1FwcG9mRW1mMisrRFl2bXlTcUdCdUthaWNGMWJsUWpodUhkdkNJTXZwOHdoVFRmWnpJN1JsZHB3dFN6TCtGMSt3a2RaMlRCT1cyZ0lGODhQQlR6RC9ncGVSRUFNRWJ4bkpjYUpITkhycHpqaTBnUUNTNmhka0VlWXQ5REYvMnFQY0VDOFJNMjhId21yM3NkTnlodDAwYnlBdXQyazNndWZXTnRndE9FT0ZHVXdjWFdORGJkTmJwZ0JHeEV2S2tPUXN4aXZKeDMzaW93MFZ3NVM2U1ZUcnBWcTExeXNBMlJwN2dUZlBma3RjNnpodFhCQkMrYWRSTHNoZjZzRzJSZkhQWjVFQWM0c1ZaODN5Q04wMEZrLzRrZ2d1NDBaVHZJRW01ZzI0cXRVNEtqQnJ4L0JUVEg4aWZWQVNBRzdnS3JuV3hKRGNVN3g4WDZFY2N6aG0zbzZZaWN2c0xYV2ZoM0NoMVcwazh4MG5YRiswZkZ4Z3Q0cGh6OFF2eXBpd0NDRktNcVhDbnFYRXhqcTEwYmVIK1VVQTcrbkc2bWRHL1B1MGYzTGdGY0dybDJzMGtOTmpwbW9KOW80QjI5Q01POGRNVDRRNW94OHVpdEY2ZnFzckpPcjhxbndOYlJ6djZoU25HNXdQKzY0QzdoOWxwMzBoS050S2RXanRka2J1UEExOW5KN1R6M3pSL2liZ0FSYmhiNEFsaGF2Y0JlYm1USGNGbDJmdllFblcwb3g5eE14S0JTOGJ0SitLaUVicTl6QTRSdGhRWERoUGEwVDlURWU2OWdXdXB3YzZ1QlVwaHF1WGdmKy9Gcklqd2VIUVM0L3BkdU1lNUVSVU1IVWQ5eHY4WlI5OEN4a1M0RjJuM0VVclVaMTBFWU53N0JXbTl4MUdpUHNzaTNHZ2lHUkRLV1JZWmZYbE9OK2RmTmJNK0dnSXdZZHdBQUFBQVNVVk9SSzVDWUlJPSc7XG5jb25zdCBNQVBfTUFSS0VSX1NIQURPVyA9ICdkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUNrQUFBQXBDQVFBQUFBQ2FjaDlBQUFDTVVsRVFWUjRBZTNTaFk3alFCQUUwQW96L2Y5L0hUTXpoZzF6cmRLVXJKYmR4K0tkMm5EOFZOdWRmc0wvVGgvLy9keVFOMlRINmYzeS9CR3BDMzc5clYrUytxcWV0Qk94SW1OUVhMOEpDQXIyVjRpTVFYSEdOSnhlQ2ZaWGhTUkJjUU1mdmtPV1VkdGZ6bExnQUVObVpEY21vMlRWbXQ4T1NNMmVYeEJwM0RqSFNNRnV0cVM3U2JtZW16QmlSK3hwS0NOVUlSa2Rra1l4aEFreUdvQnZ5UUZFSkVlZndTbW12QmZKdUo2YUtxS1duQWt2R1pPYVpYVFVnRnFZVUxXTlNIVWNrWnVSMUhJSWltVUV4dXRSeHd6T0xST0lHNHZLbUNLUXQzNjRtSWxoU3l6QWYxbTlsSFpISlpybEFPTU16dFJSaUtpbXAvcnBkSkRjOUF3cnk1eFRaQ3RlN0ZIdHVTOHdKZ2VZR3JleDI4eE5UZDA4NkRpazd2VU1zY1FPYTh5NERvR3RDQ1NrQUtsTndwZ050cGhqckM2TUlIVWtSNllXeHhzNlNjNXhxbjIyMm1tQ1JGekl0OGxFZEt4K2lrQ3RnOTFxUzJXcHdWZkJlbEpDaVFKd3Z6aXhmSTljeFpRV2dpU0plbEtud0JFbEtZdERPYjJNRmJobVVpZ2JSZVFCVjBDZzQrcU1YU3hYU3lHVW40VWJGOGwrN3FkU0duVEMwWExDbWFoSWdVSExoTE9ocFZDdHc0Q3pZWHZMUVdRYkpObXhvQ3NPS0F4U2dCSm5vNzVhdm9sa1J3OGlJQUZjc2RjMDJlOWl5Q2Q4dEh3bWVTU29LVG93SWd2c2NTR1pVT0E3UHVDTjViMkJYOW1RTTdTMHdZaE1OVTc0emdzUEJqM0hVN3dndUFmbnh4akZRR0JFNnB3TitHak1FOXpIWTd6R3A4d1Z4TVNoWVg5Tlh2RVdEM0hid0pmNGdpTzRDRklReFhTY0gxL1RNKzA0a2tCaUFBQUFBRWxGVGtTdVFtQ0MnO1xuY29uc3QgTUFQX01BUktFUl9DSVJDTEVfUkVEID0gJ2RhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQlFBQUFBVUNBWUFBQUNOaVIwTkFBQUFCR2RCVFVFQUFMR1BDL3hoQlFBQUFDQmpTRkpOQUFCNkpnQUFnSVFBQVBvQUFBQ0E2QUFBZFRBQUFPcGdBQUE2bUFBQUYzQ2N1bEU4QUFBQUJtSkxSMFFBL3dEL0FQK2d2YWVUQUFBQUIzUkpUVVVINGdjYkZ3b2dlb2hoRUFBQUExbEpSRUZVT011bGxjMXJIR1VjeHorL1oyWjIwekdFN2x1eVFieUlkaUV4cmU2YU52U3lTRUJCS0I3MVZBSTVtR0pBOWc4UXBSNDhhVkdLNksxNjBwdFlEN1d4aDRDVWtKckZHcEt5S1dnUW1uWGZhWnQ5eVdhZWVUenNURXhqMVlPLzAvRE16R2QrYjkvdkNFSDhjdTUxanNRUWtBRW1nRlJ3VmdNMmdSTFFPL3p3eWF0ZkF5Q1BnVVdBVjRBNVlBWklBblp3endQcXdBcHdCZmdlNkIrR3loRllHbmdYT0ErNEFCanphTjRpNFZVSCtCSjRENmlFaC9ZUjJHZkFhd2NnWTFCUHVGakR3d0RvM1YzOGRtY0FGWEdCQldBY2VET0Voc0JJa05rQTV2czR5UVN4MlR3anAzUFk4ZGlnM21hTCs2dHJ0RzRzNDlVYm9CVEJPMlhnYmFCdlhjZzhCL0FxOEQ3ZzRQc01QZk0wVHhYZXdzMCt6eDkzN3ZENzhvOVVOemJSamszcXBUd2pMNXlrKytzMlhxTVp0bUFDK0JuWXNvTnB6Z0V1eHVBa0V6eDVZWjYrWTFOODV5SzE5UTJNNXczYVo5dWtwaWJKRmhZWlg1am50dzgraEdZckxIOE9XRkxCYXN5RWZZdk41ckhHUmlsZXVreWxlQnVNUVN3THNTd3doa3J4TnNWTGw3SFRvMFR6WitsNkhzR1lab0NNQ3RKTmhnTVlPWjJqdlBvVHRmVU5sRzBkM1UyVWJWRmIzNkJ5YTQzNG1XbHFDam9EYUJLWVVNSFMyZ0RXOERCMlBFWnI2KzVCbVk4TDQzazBTMXU0eVFTK2U0eWRUcHVPMXJaQXl1Yi9oZ2c5N1ZIdXRqa2VpYUlZeU1rTDk4eHJ0b2hsbmtYc2YvNlcyRGJ4ekFtNjlRYjlCdzhSRVhwYTcxZDczYXBpb00wNkl2anREdmRYMXhpZmZwSFUxQ1MrcC84Rzh6MU5hbXFTOUhTT2V6ZFgyRyszUVFTQnVzQ21ZaUQwbFREOTFvMWxkS1ZLdHJESVdQWVVpR0MweG1nTklveGxUNUVyTExLN1UyYjcydEpoS2E0NFNwVkNMWjhEdmdMY2NMSEhGK2F4MDZOVWJxM1JMRzBCRU0rY0lEMmRZM2Vuek5wSG45QXMzVVVHYW1sYkltLzR4bndYQWlQQXg0RTJ3ZmNoRVNlYVAwdjh6RFJ1TWdGQXQ5N2czczBWdHE4dDBhbldRaGdDbjBZdHErQWIwei9zTm1QQTU0Zk5vZXQ1MUJUNDdqRVFvZi9nNFY4OUMwb1YrTVlTdFdBd0ZZVTg0allWQnE1UkJzNGo0cnFPUThyejJLazE2R2tQRVRuSUNtZ0xmR0dKdXVoaktyNHh4SWVpLzIyd0FzbXUxdlpPdDAxUDYzMEpERmFKWEhHVXVyN3YrMzF0RFBGSWxKZC91TXJCaVA3dEZ5Q1FhdlQzcVBhNlZZRk5SNm5TbnRaN2psSVk0SGdrd3V6MWJ3SDRFNW1DWElCTFE1SG5BQUFBSlhSRldIUmtZWFJsT21OeVpXRjBaUUF5TURFNExUQTNMVEkzVkRJeE9qRXdPak15S3pBeU9qQXc3cTZHbndBQUFDVjBSVmgwWkdGMFpUcHRiMlJwWm5rQU1qQXhPQzB3TnkweU4xUXlNVG94TURvek1pc3dNam93TUovelBpTUFBQUFBU1VWT1JLNUNZSUk9JztcbmNvbnN0IE1BUF9NQVJLRVJfQ0lSQ0xFX0dSRUVOID0gJ2RhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQlFBQUFBVUNBWUFBQUNOaVIwTkFBQUFCbUpMUjBRQS93RC9BUCtndmFlVEFBQUFDWEJJV1hNQUFBc1RBQUFMRXdFQW1wd1lBQUFBQjNSSlRVVUg0Z2NiRkJnNi9WaFc0QUFBQTVWSlJFRlVPTXVsbFVGb0hGVVl4My92emV4a3U4VmtkelBycGdwV05Kb200Sm8wTmFTbklrSHJKUmIxVUZBc1htcTNLbGl2SnFDSGhKNHFzUWR0bWtzVkZLUWdZa1RhMEVyeFVDTWhhZDFDUXJRMERiYUoyOTFrZDkxa0pyczdNODlEWnBvMEJCVDh6MlY0Ny9GNzMvZmU5Lytld0ZlbTl6Q2IxVDhZRFFNdFFCdVE4SWR6d0RRd085QlhYTnU4UGpYNkRRQmlLNngvTUdvQUI0RzNnRzdBQkhSLzJnSHl3RGh3RHJnNDBGZXNib2FLTGJBbTRDUGdDQkFCOFBBZWlGd2lnMThMK0JMNGVLQ3ZtTjJZZnhCMkJrZ0RFWS8xTHlKM2tBeVpKRU1tRWJtRFlOemZNQTBNOXc5R2t3RkhaSG9QQjJsKzZpL0F3Nk14RktNbnRwK3UraFJ4dlFHQVphZkVST2tHbHd0WHlUdUZ6ZEdlQWQ0ZjZDdFdnN001NktlSmgwZHplRGZISDMyZHBOYkl4R0tHUzRXZkFXaUpOZE83NjNtNjZsTjhmdmRyYnE3TkI5QWp3SS9BcUhnNWN5d01mQVc4R2tUMjRXTnA5S3JHME5RSW1md01qdWNBb0V1ZGxObktpYjFIcWVvVlRzNmRaWmxTQVAwV2VFUDZwZEVkeE40VDIwOVNhMlJvYW9USjdIV1VVbWhDUXhNYVNpa21zOWNabWhxaFNYK1lBM1g3Y0cwSEpSUStvMFg2ZFdZR0Y5QlZuK0xYeFd0azhqUG8wbUNyZEdtUXljOHdrZjJON25nSEl1ZmlXRFdVVUNiUUp2MmkxUUVlMG5ZUzF4djRvekIzUDgzdDVIZ092eS9md296RWlYaGhySVV5bnVYcVNxaUU1SDlLSW5BckR0WmZaV3BMRlhUZlRnNWdsTjFWbHAwU0xiRm1kS21qbE5vV29rdWRwK05Qa0xPWEtOWEtDQ0Z3YmFkbVYxZnVTZCtiZVluRThtd21TamQ0YmxlS2xObUs0MVczU2JkS3lteWxxNm1kWCs1T3NscXpFRXFBSkE5TVMyRFc5eVlBbHd0WHlicExuTmg3bE01aysvcnV5c1ZWTGtJSU9wUHRmTkQ1TmdzcldTN2N2cklPVzllNE5MUlo3ZnlkWnVlbm5yQU5IQktJMEtwbmM4ditrNDZHUGZUdWZvRW5vNC96eU00a3o1aDdlT1dwbDNpejdUVUtheVZPVFE0elg3NkRGQkpnVlVqUmYzem83NW5BS1JkOW82Y2xrcHRyODV5Y084dUJ1bjEweHp0NE50RzIzcnZzSmM3UC9zQ0YyMWZJMnJrTjYwbStrSVkyRnBKeW85djRCaDhHRGdVV2RHMEhrWE9KZUdFa2dsS3RmUC9NaEJBQjdEdWhxZlI3cDYyc1JHeTQyMjlCeDN5ald4S0pIZ21oRWhvNWQ1a0ZLNHZsMkVoa0FGdEY4cG5RVlByZDAxYldWWXBvbmZIdkRWWUpaYnEybzl1TEs3aTJVL052YzF3SWNVNGEydGc3bjVTcXJsTEVqVHBldkRTSytDOVBnQklxVVZ1cVlPZFc3Z0hUMHRCbTA2ZUtsWkNVS0NCcUdQU01mUS9BUHkxWGcydjZLSXNGQUFBQUFFbEZUa1N1UW1DQyc7XG4vKiBlc2xpbnQtZW5hYmxlIG1heC1sZW4gKi9cbmNvbnN0IFBPTFlHT05fQkFTRV9DT0xPUiA9ICcjMzM4OGZmJztcblxuY29uc3QgREdfQ09NUEFOWV9OQU1FID0gJ0RldmVsb3BtZW50IEdhdGV3YXknO1xuY29uc3QgREdfQUREUkVTU18xID0gJzExMTAgVmVybW9udCBBdmUsIE5XLCBTdWl0ZSA1MDAnO1xuY29uc3QgREdfQUREUkVTU18yID0gJ1dhc2hpbmd0b24sIERDIDIwMDA1IFVTQSc7XG5jb25zdCBER19DT05UQUNUX0lORk8gPSAnaW5mb0BkZXZlbG9wbWVudGdhdGV3YXkub3JnLCBUZWw6ICsxLjIwMi41NzIuOTIwMCwgRmF4OiArMSAyMDIuNTcyLjkyOTAnO1xuXG5jb25zdCBMT0dfRElSID0gJ2xvZ3MnO1xuY29uc3QgTE9HX0ZJTEVfTkFNRSA9ICdhbXBvZmZsaW5lJztcbmNvbnN0IExPR19GSUxFX0VYVEVOU0lPTiA9ICdsb2cnO1xuXG4vLyBNZXNzYWdlIGNvbnN0YW50c1xuLy8gdG90YWwgYW1vdW50IG9mIHRpbWUgdGhlIG1lc3NhZ2Ugc3RheXMgdmlzaWJsZVxuY29uc3QgTUVTU0FHRV9USU1FT1VUID0gMTAgKiAxMDAwO1xuLy8gd2hlbiBpdCdzIHRoaXMgYW1vdW50IG9mIHRpbWUgbGVmdCwgd2Ugbm9maXR5IHRoZSB1c2VyIHRoYXQgdGhlIG1lc3NhZ2UgaXMgYWJvdXQgdG8gZGlzYXBwZWFyXG5jb25zdCBNRVNTQUdFX0RJU0FQUEVBUl9USU1FT1VUID0gTUVTU0FHRV9USU1FT1VUIC8gNTtcbmNvbnN0IE1FU1NBR0VfQ0hFQ0tfSU5URVJWQUwgPSAxMDA7XG4vLyBob3cgbG9uZyBzaG91bGQgdGhlIGVudGVyL2xlYXZlIGFuaW1hdGlvbiBydW4obXMpXG4vLyAoaWYgeW91IGNoYW5nZSB0aGlzIHlvdSdsbCB3YW5uYSBjaGFuZ2UgaXQgaW4gc3R5bGUuY3NzLCB0b28pXG5jb25zdCBNRVNTQUdFX0FOSU1BVElPTl9EVVJBVElPTiA9IDUwMDtcblxuLy8gdGhpcyBpcyB0aGUgaW50ZXJuYWwgZGF0ZSBmb3JtYXQgdXNlZCB0byBzdG9yZSBhbmQgc3luYyB1cCBkYXRlc1xuY29uc3QgSU5URVJOQUxfREFURV9GT1JNQVQgPSAnWVlZWS1NTS1ERFRISDptbTpzcy5TU1NaJztcbi8vIGN1cnJlbnRseSBzdXBwb3J0ZWQgbWF4ICYgbWluIHllYXJzIGluIEFNUCwgaS5lLiBmcm9tIDE5NzAtMDEtMDEgdGlsbCAyMDUwLTEyLTMxXG5jb25zdCBNSU5fU1VQUE9SVEVEX1lFQVIgPSAxOTcwO1xuY29uc3QgTUFYX1NVUFBPUlRFRF9ZRUFSID0gMjA1MDtcblxuY29uc3QgVVBEQVRFU19ESVIgPSAndXBkYXRlcyc7XG5jb25zdCBDT05URU5UX0RJU1BPU0lUSU9OX0hFQURFUiA9ICdDb250ZW50LURpc3Bvc2l0aW9uJztcbmNvbnN0IFVQREFURV9UTVBfRklMRSA9ICdhbXAtb2ZmbGluZS1pbnN0YWxsZXIudG1wJztcblxuY29uc3QgT1RIRVJfSUQgPSA5OTk5OTk5OTk7XG5jb25zdCBOUl9TWU5DX0hJU1RPUllfRU5UUklFUyA9IDIwO1xuY29uc3QgTlJfTE9HX0ZJTEVTID0gMTAwO1xuLy8gaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvSVNPXzg2MDEjRHVyYXRpb25zLCBleGFtcGxlOiBcIlAxWTJNMTBEVDJIMzBNXCJcbmNvbnN0IE9MRF9TWU5DX0xPR1NfRFVSQVRJT05fSVNPXzg2MDEgPSAnUDZNJztcbmNvbnN0IE5SX09MRF9TWU5DX0xPR1NfVE9fS0VFUF9NSU5JTVVNID0gTlJfU1lOQ19ISVNUT1JZX0VOVFJJRVM7XG5cbmNvbnN0IE1BU1RFUl9CUkFOQ0ggPSAnbWFzdGVyJztcbmNvbnN0IERFVkVMT1BfQlJBTkNIID0gJ2RldmVsb3AnO1xuY29uc3QgUkVMRUFTRV9CUkFOQ0hfUkVHRVggPSAvcmVsZWFzZVxcLy87XG5jb25zdCBSRUxFQVNFX0JSQU5DSEVTID0gW01BU1RFUl9CUkFOQ0gsIFJFTEVBU0VfQlJBTkNIX1JFR0VYXTtcblxuY29uc3QgRElTQUJMRV9DSEFOR0VMT0dTID0gJ0RJU0FCTEVfQ0hBTkdFTE9HUyc7XG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmZyZWV6ZSh7XG4gIFNFUlZFUl9VUkwsXG4gIEJBU0VfUkVTVF9VUkwsXG4gIFBST1RPQ09MLFxuICBCQVNFX1BPUlQsXG4gIENPTk5FQ1RJT05fVElNRU9VVCxcbiAgQ09OTkVDVElPTl9GT1JDRURfVElNRU9VVCxcbiAgVElNRU9VVF9DSEVDS19JTlRFUlZBTCxcbiAgTUFYX1JFVFJZX0FURU1QVFMsXG4gIEVSUk9SU19UT19SRVRSWSxcbiAgRVJST1JTX05PX0FNUF9TRVJWRVIsXG4gIENPTk5FQ1RJVklUWV9DSEVDS19JTlRFUlZBTCxcbiAgV09SS1NQQUNFX1VSTCxcbiAgTE9HSU5fVVJMLFxuICBERVNLVE9QX1VSTCxcbiAgREVTS1RPUF9DVVJSRU5UX1VSTCxcbiAgU1lOQ1VQX1JFRElSRUNUX1VSTCxcbiAgU1lOQ1VQX0hJU1RPUllfVEFSR0VULFxuICBTWU5DVVBfU1VNTUFSWV9VUkwsXG4gIEFDVElWSVRZX1BSRVZJRVdfVVJMLFxuICBBQ1RJVklUWV9FRElUX1VSTCxcbiAgVVBEQVRFX1VSTCxcbiAgU0VUVVBfVVJMLFxuICBTRVRUSU5HU19VUkwsXG4gIENPTExFQ1RJT05fVVNFUlMsXG4gIENPTExFQ1RJT05fV09SS1BBQ0VTLFxuICBDT0xMRUNUSU9OX1RFQU1NRU1CRVJTLFxuICBDT0xMRUNUSU9OX0NMSUVOVF9TRVRUSU5HUyxcbiAgQ09MTEVDVElPTl9HTE9CQUxfU0VUVElOR1MsXG4gIENPTExFQ1RJT05fQUNUSVZJVElFUyxcbiAgQ09MTEVDVElPTl9GSUVMRFMsXG4gIENPTExFQ1RJT05fUE9TU0lCTEVfVkFMVUVTLFxuICBDT0xMRUNUSU9OX1NZTkNVUF9MT0csXG4gIENPTExFQ1RJT05fTEFOR1MsXG4gIENPTExFQ1RJT05fV1NfU0VUVElOR1MsXG4gIENPTExFQ1RJT05fQ1VSUkVOQ1lfUkFURVMsXG4gIENPTExFQ1RJT05fRkVBVFVSRV9NQU5BR0VSLFxuICBDT0xMRUNUSU9OX0NPTlRBQ1RTLFxuICBDT0xMRUNUSU9OX1JFU09VUkNFUyxcbiAgQ09MTEVDVElPTl9SRVBPU0lUT1JZLFxuICBDT0xMRUNUSU9OX0dBWkVUVEVFUixcbiAgQ09MTEVDVElPTl9DQUxFTkRBUlMsXG4gIENPTExFQ1RJT05fQ0hBTkdFU0VUUyxcbiAgR0FaRVRURUVSX0RJU1RBTkNFX0RJVklERSxcbiAgREJfRklMRV9QUkVGSVgsXG4gIERCX0ZJTEVfRVhURU5TSU9OLFxuICBEQl9DT01NT05fREFUQVNUT1JFX09QVElPTlMsXG4gIERCX0FVVE9DT01QQUNUX0lOVEVSVkFMX01JTElTRUNPTkRTLFxuICBEQl9ERUZBVUxUX1FVRVJZX0xJTUlULFxuICBMQU5HVUFHRV9FTkdMSVNILFxuICBGU19MT0NBTEVTX0RJUkVDVE9SWSxcbiAgTEFOR1VBR0VfTUFTVEVSX1RSQU5TTEFUSU9OU19GSUxFLFxuICBMQU5HVUFHRV9UUkFOU0xBVElPTlNfRklMRSxcbiAgTEFOR1VBR0VfTkVXX1RSQU5TTEFUSU9OU19NVVNUX1NZTkMsXG4gIEFTQVJfRElSLFxuICBBUFBfRElSRUNUT1JZLFxuICBURVNUX0RJUkVDVE9SWSxcbiAgU1RBVElDX0RJUixcbiAgSU1BR0VTX0RJUixcbiAgRE9DX0lDT05TLFxuICBEQl9TVEFUSUNfRElSLFxuICBNSUdSQVRJT05TX0RJUixcbiAgSEFTSF9JVEVSQVRJT05TLFxuICBESUdFU1RfQUxHT1JJVEhNX1NIQTEsXG4gIERJR0VTVF9BTEdPUklUSE1fU0hBMjU2LFxuICBBQ1RJVklUWV9FRElULFxuICBBQ1RJVklUWV9WSUVXLFxuICBTWU5DVVBfRk9SQ0VfREFZUyxcbiAgU1lOQ1VQX0JFU1RfQkVGT1JFX0RBWVMsXG4gIFNZTkNVUF9OT19EQVRFLFxuICBTWU5DVVBfVFlQRV9UUkFOU0xBVElPTlMsXG4gIFNZTkNVUF9UWVBFX1VTRVJTLFxuICBTWU5DVVBfVFlQRV9BU1NFVFMsXG4gIFNZTkNVUF9UWVBFX1dPUktTUEFDRVMsXG4gIFNZTkNVUF9UWVBFX0dTLFxuICBTWU5DVVBfVFlQRV9FWENIQU5HRV9SQVRFUyxcbiAgU1lOQ1VQX1RZUEVfRkVBVFVSRV9NQU5BR0VSLFxuICBTWU5DVVBfVFlQRV9XT1JLU1BBQ0VfTUVNQkVSUyxcbiAgU1lOQ1VQX1RZUEVfQUxMX0ZJRUxEUyxcbiAgU1lOQ1VQX1RZUEVfQUNUSVZJVElFU19QVUxMLFxuICBTWU5DVVBfVFlQRV9BQ1RJVklUSUVTX1BVU0gsXG4gIFNZTkNVUF9UWVBFX0FDVElWSVRZX0ZJRUxEUyxcbiAgU1lOQ1VQX1RZUEVfQUNUSVZJVFlfRklFTERTX1NUUlVDVFVSQUxfQ0hBTkdFUyxcbiAgU1lOQ1VQX1RZUEVfQ09OVEFDVFNfUFVMTCxcbiAgU1lOQ1VQX1RZUEVfQ09OVEFDVFNfUFVTSCxcbiAgU1lOQ1VQX1RZUEVfQUNUSVZJVFlfUE9TU0lCTEVfVkFMVUVTLFxuICBTWU5DVVBfVFlQRV9DT05UQUNUX0ZJRUxEUyxcbiAgU1lOQ1VQX1RZUEVfQ09OVEFDVF9GSUVMRFNfU1RSVUNUVVJBTF9DSEFOR0VTLFxuICBTWU5DVVBfVFlQRV9DT05UQUNUX1BPU1NJQkxFX1ZBTFVFUyxcbiAgU1lOQ1VQX1RZUEVfUkVTT1VSQ0VTX1BVTEwsXG4gIFNZTkNVUF9UWVBFX1JFU09VUkNFU19QVVNILFxuICBTWU5DVVBfVFlQRV9SRVNPVVJDRV9GSUVMRFMsXG4gIFNZTkNVUF9UWVBFX1JFU09VUkNFX0ZJRUxEU19TVFJVQ1RVUkFMX0NIQU5HRVMsXG4gIFNZTkNVUF9UWVBFX1JFU09VUkNFX1BPU1NJQkxFX1ZBTFVFUyxcbiAgU1lOQ1VQX1RZUEVfQ09NTU9OX1BPU1NJQkxFX1ZBTFVFUyxcbiAgU1lOQ1VQX1RZUEVfV09SS1NQQUNFX1NFVFRJTkdTLFxuICBTWU5DVVBfVFlQRV9NQVBfVElMRVMsXG4gIFNZTkNVUF9UWVBFX0dBWkVUVEVFUixcbiAgU1lOQ1VQX1RZUEVfQ0FMRU5EQVJTLFxuICBTWU5DVVBfU1RBVFVTX1NVQ0NFU1MsXG4gIFNZTkNVUF9TVEFUVVNfRkFJTCxcbiAgU1lOQ1VQX1NUQVRVU19QQVJUSUFMLFxuICBTWU5DVVBfU1RBVFVTX0NBTkNFTEVELFxuICBTWU5DVVBfU1lOQ19SRVFVRVNURURfQVQsXG4gIFNZTkNVUF9TWU5DX1JFUVVFU1RFRF9CWSxcbiAgU1lOQ1VQX0RBVEVUSU1FX0ZJRUxELFxuICBTWU5DVVBfRElGRl9MRUZUT1ZFUixcbiAgU1lOQ1VQX0RFUEVOREVOQ1lfQ0hFQ0tfSU5URVJWQUwsXG4gIFNZTkNVUF9ERVRBSUxTX1NZTkNFRCxcbiAgU1lOQ1VQX0RFVEFJTFNfVU5TWU5DRUQsXG4gIFNZTkNVUF9SRVNPVVJDRV9QVUxMX0JBVENIX1NJWkUsXG4gIFNZTkNVUF9BQ1RJVklUSUVTX1BVTExfQkFUQ0hfU0laRSxcbiAgU1lOQ1VQX0NPTlRBQ1RTX1BVTExfQkFUQ0hfU0laRSxcbiAgQUNUSVZJVFlfU1RBVFVTX0RSQUZULFxuICBBQ1RJVklUWV9TVEFUVVNfVU5WQUxJREFURUQsXG4gIEFDVElWSVRZX1NUQVRVU19WQUxJREFURUQsXG4gIENVUlJFTkNZX0hPVVIsXG4gIERFRkFVTFRfQ1VSUkVOQ1ksXG4gIFJBVEVfU0FNRV9DVVJSRU5DWSxcbiAgUkFURV9DVVJSRU5DWV9OT1RfRk9VTkQsXG4gIENVUlJFTkNZX1BBSVIsXG4gIFZFUlNJT05fUEFUVEVSTixcbiAgVkVSU0lPTl9QQVRURVJOX0dST1VQU19UT19FWFRSQUNULFxuICBBTVBfQ09VTlRSWV9MT0dPLFxuICBBU1NFVFNfRElSRUNUT1JZLFxuICBCQVNFXzY0X1BOR19QUkVGSVgsXG4gIFRSQU5TUEFSRU5UX0ZMQUcsXG4gIEhFTFBfUERGX0ZJTEVOQU1FLFxuICBIRUxQX0RJUixcbiAgRU5EU19XSVRIX1BVTkNUVUFUSU9OX1JFR0VYLFxuICBNQVBfVElMRVNfRElSLFxuICBUSUxFU19aSVBfRklMRSxcbiAgTUFQX01BUktFUl9JTUFHRSxcbiAgTUFQX01BUktFUl9TSEFET1csXG4gIE1BUF9NQVJLRVJfQ0lSQ0xFX1JFRCxcbiAgTUFQX01BUktFUl9DSVJDTEVfR1JFRU4sXG4gIFBPTFlHT05fQkFTRV9DT0xPUixcbiAgREdfQ09NUEFOWV9OQU1FLFxuICBER19BRERSRVNTXzEsXG4gIERHX0FERFJFU1NfMixcbiAgREdfQ09OVEFDVF9JTkZPLFxuICBMT0dfRElSLFxuICBMT0dfRklMRV9OQU1FLFxuICBMT0dfRklMRV9FWFRFTlNJT04sXG4gIE1FU1NBR0VfVElNRU9VVCxcbiAgTUVTU0FHRV9ESVNBUFBFQVJfVElNRU9VVCxcbiAgTUVTU0FHRV9DSEVDS19JTlRFUlZBTCxcbiAgTUVTU0FHRV9BTklNQVRJT05fRFVSQVRJT04sXG4gIElOVEVSTkFMX0RBVEVfRk9STUFULFxuICBNSU5fU1VQUE9SVEVEX1lFQVIsXG4gIE1BWF9TVVBQT1JURURfWUVBUixcbiAgVVBEQVRFU19ESVIsXG4gIENPTlRFTlRfRElTUE9TSVRJT05fSEVBREVSLFxuICBVUERBVEVfVE1QX0ZJTEUsXG4gIE9USEVSX0lELFxuICBOUl9TWU5DX0hJU1RPUllfRU5UUklFUyxcbiAgTlJfTE9HX0ZJTEVTLFxuICBPTERfU1lOQ19MT0dTX0RVUkFUSU9OX0lTT184NjAxLFxuICBOUl9PTERfU1lOQ19MT0dTX1RPX0tFRVBfTUlOSU1VTSxcbiAgTUFTVEVSX0JSQU5DSCxcbiAgREVWRUxPUF9CUkFOQ0gsXG4gIFJFTEVBU0VfQlJBTkNIX1JFR0VYLFxuICBSRUxFQVNFX0JSQU5DSEVTLFxuICBESVNBQkxFX0NIQU5HRUxPR1Ncbn0pO1xuIiwiLyogZXNsaW50LWRpc2FibGUgbWF4LWxlbiAqL1xuXG4vKipcbiAqIEBhdXRob3IgTmFkZWpkYSBNYW5kcmVzY3VcbiAqL1xuXG5jb25zdCBQVUJMSUNfVklFV19DSEFOR0VfUEFTU1dPUkQgPSAnL1BVQkxJQyBWSUVXL0xvZ2luIC0gVXNlciBNYW5hZ2VtZW50L0NoYW5nZSBQYXNzd29yZCc7XG5jb25zdCBQVUJMSUNfVklFV19UUk9VQkxFX1NJR05fSU4gPSAnL1BVQkxJQyBWSUVXL0xvZ2luIC0gVXNlciBNYW5hZ2VtZW50L1Ryb3VibGUgc2lnbmluZyBpbic7XG5jb25zdCBBQ1RJVklUWV9ERUxJVkVSWV9SQVRFID0gJy9QUk9KRUNUIE1BTkFHRU1FTlQvRnVuZGluZy9GdW5kaW5nIEluZm9ybWF0aW9uL0RlbGl2ZXJ5IHJhdGUnO1xuY29uc3QgQUNUSVZJVFlfUFJPSkVDVF9JRF9BTkRfUExBTk5JTkcgPSAnL1BST0pFQ1QgTUFOQUdFTUVOVC9Qcm9qZWN0IElEIGFuZCBQbGFubmluZyc7XG5jb25zdCBBQ1RJVklUWV9EVVJBVElPTl9PRl9QUk9KRUNUID0gJy9QUk9KRUNUIE1BTkFHRU1FTlQvUHJvamVjdCBJRCBhbmQgUGxhbm5pbmcvUGxhbm5pbmcvRHVyYXRpb24gb2YgUHJvamVjdCc7XG5jb25zdCBBQ1RJVklUWV9URUFNX0xFQURFUiA9ICcvUFJPSkVDVCBNQU5BR0VNRU5UL1Byb2plY3QgSUQgYW5kIFBsYW5uaW5nL0lkZW50aWZpY2F0aW9uL0RhdGEgVGVhbSBMZWFkZXInO1xuY29uc3QgQUNUSVZJVFlfU0FNRV9BU19QUk9QT1NFRF9TVEFSVF9EQVRFID1cbiAgJy9BY3Rpdml0eSBGb3JtL1BsYW5uaW5nL0FjdHVhbCBTdGFydCBEYXRlL1NhbWUgQXMgUHJvcG9zZWQgU3RhcnQgRGF0ZSc7XG5jb25zdCBBQ1RJVklUWV9TQU1FX0FTX1BST1BPU0VEX0FQUFJPVkFMX0RBVEUgPVxuICAnL0FjdGl2aXR5IEZvcm0vUGxhbm5pbmcvQWN0dWFsIEFwcHJvdmFsIERhdGUvU2FtZSBBcyBQcm9wb3NlZCBBcHByb3ZhbCBEYXRlJztcbmNvbnN0IEFDVElWSVRZX0lERU5USUZJQ0FUSU9OID0gJy9BY3Rpdml0eSBGb3JtL0lkZW50aWZpY2F0aW9uJztcbmNvbnN0IEFDVElWSVRZX0xBU1RfVVBEQVRFRF9CWSA9ICcvQWN0aXZpdHkgRm9ybS9JZGVudGlmaWNhdGlvbi9BY3Rpdml0eSBMYXN0IFVwZGF0ZWQgYnknO1xuY29uc3QgQUNUSVZJVFlfTEFTVF9VUERBVEVEX09OID0gJy9BY3Rpdml0eSBGb3JtL0lkZW50aWZpY2F0aW9uL0FjdGl2aXR5IFVwZGF0ZWQgT24nO1xuY29uc3QgQUNUSVZJVFlfRlVORElORyA9ICcvQWN0aXZpdHkgRm9ybS9GdW5kaW5nJztcbmNvbnN0IEFGX0ZVTkRJTkdfRlVORElOR0dST1VQX0ZVTkRJTkdJVEVNID0gYCR7QUNUSVZJVFlfRlVORElOR30vRnVuZGluZyBHcm91cC9GdW5kaW5nIEl0ZW1gO1xuY29uc3QgQUNUSVZJVFlfU0VDVE9SUyA9ICcvQWN0aXZpdHkgRm9ybS9TZWN0b3JzJztcbmNvbnN0IEFDVElWSVRZX1BSSU1BUllfU0VDVE9SUyA9ICcvQWN0aXZpdHkgRm9ybS9TZWN0b3JzL1ByaW1hcnkgU2VjdG9ycyc7XG5jb25zdCBBQ1RJVklUWV9TRUNPTkRBUllfU0VDVE9SUyA9ICcvQWN0aXZpdHkgRm9ybS9TZWN0b3JzL1NlY29uZGFyeSBTZWN0b3JzJztcblxuY29uc3QgQUNUSVZJVFlfU1RSVUNUVVJFUyA9ICcvQWN0aXZpdHkgRm9ybS9TdHJ1Y3R1cmVzJztcbmNvbnN0IEFDVElWSVRZX1NUUlVDVFVSRVNfQUREX1NUUlVDVFVSRSA9IGAke0FDVElWSVRZX1NUUlVDVFVSRVN9L0FkZCBTdHJ1Y3R1cmVgO1xuXG5jb25zdCBBQ1RJVklUWV9PUkdBTklaQVRJT05TID0gJy9BY3Rpdml0eSBGb3JtL09yZ2FuaXphdGlvbnMnO1xuY29uc3QgQUNUSVZJVFlfT1JHQU5JWkFUSU9OU19ET05PUl9PUkdBTklaQVRJT04gPSBgJHtBQ1RJVklUWV9PUkdBTklaQVRJT05TfS9Eb25vciBPcmdhbml6YXRpb25gO1xuY29uc3QgQUNUSVZJVFlfT1JHQU5JWkFUSU9OU19CRU5FRklDSUFSWV9BR0VOQ1kgPSBgJHtBQ1RJVklUWV9PUkdBTklaQVRJT05TfS9CZW5lZmljaWFyeSBBZ2VuY3lgO1xuY29uc3QgQUNUSVZJVFlfT1JHQU5JWkFUSU9OU19DT05UUkFDVElOR19BR0VOQ1kgPSBgJHtBQ1RJVklUWV9PUkdBTklaQVRJT05TfS9Db250cmFjdGluZyBBZ2VuY3lgO1xuY29uc3QgQUNUSVZJVFlfT1JHQU5JWkFUSU9OU19FWEVDVVRJTkdfQUdFTkNZID0gYCR7QUNUSVZJVFlfT1JHQU5JWkFUSU9OU30vRXhlY3V0aW5nIEFnZW5jeWA7XG5jb25zdCBBQ1RJVklUWV9PUkdBTklaQVRJT05TX0lNUExFTUVOVElOR19BR0VOQ1kgPSBgJHtBQ1RJVklUWV9PUkdBTklaQVRJT05TfS9JbXBsZW1lbnRpbmcgQWdlbmN5YDtcbmNvbnN0IEFDVElWSVRZX09SR0FOSVpBVElPTlNfUkVHSU9OQUxfR1JPVVAgPSBgJHtBQ1RJVklUWV9PUkdBTklaQVRJT05TfS9SZWdpb25hbCBHcm91cGA7XG5jb25zdCBBQ1RJVklUWV9PUkdBTklaQVRJT05TX1JFTEFURURfR09WRVJOTUVOVF9PUkdBTklaQVRJT04gPSBgJHtBQ1RJVklUWV9PUkdBTklaQVRJT05TfS9SZWxhdGVkIEdvdmVybm1lbnQgT3JnYW5pemF0aW9uYDtcbmNvbnN0IEFDVElWSVRZX09SR0FOSVpBVElPTlNfU0VDVE9SX0dST1VQID0gYCR7QUNUSVZJVFlfT1JHQU5JWkFUSU9OU30vU2VjdG9yIEdyb3VwYDtcblxuY29uc3QgQUREX0ZVTkRJTkdfQVVUTyA9ICdBZGQgRnVuZGluZyBJdGVtIEF1dG9tYXRpY2FsbHknO1xuY29uc3QgQUNUSVZJVFlfT1JHQU5JWkFUSU9OU19CRU5FRklDSUFSWV9BR0VOQ1lfQUREX0ZVTkRJTkdfQVVUTyA9IGAke0FDVElWSVRZX09SR0FOSVpBVElPTlNfQkVORUZJQ0lBUllfQUdFTkNZfS8ke0FERF9GVU5ESU5HX0FVVE99YDtcbmNvbnN0IEFDVElWSVRZX09SR0FOSVpBVElPTlNfQ09OVFJBQ1RJTkdfQUdFTkNZX0FERF9GVU5ESU5HX0FVVE8gPSBgJHtBQ1RJVklUWV9PUkdBTklaQVRJT05TX0NPTlRSQUNUSU5HX0FHRU5DWX0vJHtBRERfRlVORElOR19BVVRPfWA7XG5jb25zdCBBQ1RJVklUWV9PUkdBTklaQVRJT05TX0RPTk9SX09SR0FOSVpBVElPTl9BRERfRlVORElOR19BVVRPID0gYCR7QUNUSVZJVFlfT1JHQU5JWkFUSU9OU19ET05PUl9PUkdBTklaQVRJT059LyR7QUREX0ZVTkRJTkdfQVVUT31gO1xuY29uc3QgQUNUSVZJVFlfT1JHQU5JWkFUSU9OU19FWEVDVVRJTkdfQUdFTkNZX0FERF9GVU5ESU5HX0FVVE8gPSBgJHtBQ1RJVklUWV9PUkdBTklaQVRJT05TX0VYRUNVVElOR19BR0VOQ1l9LyR7QUREX0ZVTkRJTkdfQVVUT31gO1xuY29uc3QgQUNUSVZJVFlfT1JHQU5JWkFUSU9OU19JTVBMRU1FTlRJTkdfQUdFTkNZX0FERF9GVU5ESU5HX0FVVE8gPSBgJHtBQ1RJVklUWV9PUkdBTklaQVRJT05TX0lNUExFTUVOVElOR19BR0VOQ1l9LyR7QUREX0ZVTkRJTkdfQVVUT31gO1xuY29uc3QgQUNUSVZJVFlfT1JHQU5JWkFUSU9OU19SRUdJT05BTF9HUk9VUF9BRERfRlVORElOR19BVVRPID0gYCR7QUNUSVZJVFlfT1JHQU5JWkFUSU9OU19SRUdJT05BTF9HUk9VUH0vJHtBRERfRlVORElOR19BVVRPfWA7XG5jb25zdCBBQ1RJVklUWV9PUkdBTklaQVRJT05TX1JFU1BPTlNJQkxFX09SR0FOSVpBVElPTl9BRERfRlVORElOR19BVVRPID0gYCR7QUNUSVZJVFlfT1JHQU5JWkFUSU9OU19SRUxBVEVEX0dPVkVSTk1FTlRfT1JHQU5JWkFUSU9OfS8ke0FERF9GVU5ESU5HX0FVVE99YDtcbmNvbnN0IEFDVElWSVRZX09SR0FOSVpBVElPTlNfU0VDVE9SX0dST1VQX0FERF9GVU5ESU5HX0FVVE8gPSBgJHtBQ1RJVklUWV9PUkdBTklaQVRJT05TX1NFQ1RPUl9HUk9VUH0vJHtBRERfRlVORElOR19BVVRPfWA7XG5cbmNvbnN0IEFDVElWSVRZX0ZVTkRJTkdfU0VBUkNIID0gYCR7QUNUSVZJVFlfRlVORElOR30vU2VhcmNoIEZ1bmRpbmcgT3JnYW5pemF0aW9uc2A7XG5jb25zdCBBQ1RJVklUWV9GVU5ESU5HX1NFQVJDSF9PUkdBTklaQVRJT04gPSBgJHtBQ1RJVklUWV9GVU5ESU5HX1NFQVJDSH0vU2VhcmNoIE9yZ2FuaXphdGlvbnNgO1xuY29uc3QgQUNUSVZJVFlfRlVORElOR19TRUxFQ1RfT1JHX1RZUEUgPSBgJHtBQ1RJVklUWV9GVU5ESU5HX1NFQVJDSH0vU2VsZWN0IE9yZ2FuaXphdGlvbiBUeXBlYDtcblxuY29uc3QgQUNUSVZJVFlfUFJPR1JBTSA9ICcvQWN0aXZpdHkgRm9ybS9Qcm9ncmFtJztcbmNvbnN0IEFDVElWSVRZX1BMQU5OSU5HID0gJy9BY3Rpdml0eSBGb3JtL1BsYW5uaW5nJztcblxuY29uc3QgQUNUSVZJVFlfQ09OVEFDVCA9ICcvQWN0aXZpdHkgRm9ybS9Db250YWN0cyc7XG5jb25zdCBBQ1RJVklUWV9ET0NVTUVOVFNfQUREX0RPQ1VNRU5UID0gJy9BY3Rpdml0eSBGb3JtL1JlbGF0ZWQgRG9jdW1lbnRzL0FkZCBOZXcgRG9jdW1lbnQnO1xuY29uc3QgQUNUSVZJVFlfRE9DVU1FTlRTX0FERF9XRUJMSU5LID0gJy9BY3Rpdml0eSBGb3JtL1JlbGF0ZWQgRG9jdW1lbnRzL0FkZCBOZXcgV2ViIExpbmsnO1xuXG5jb25zdCBBQ1RJVklUWV9JU1NVRVNfQUREX0lTU1VFID0gJy9BY3Rpdml0eSBGb3JtL0lzc3VlcyBTZWN0aW9uL0FkZCBJc3N1ZSc7XG5jb25zdCBBQ1RJVklUWV9JU1NVRVNfREVMRVRFX0lTU1VFID0gJy9BY3Rpdml0eSBGb3JtL0lzc3VlcyBTZWN0aW9uL0lzc3VlL0RlbGV0ZSBJdGVtJztcbmNvbnN0IEFDVElWSVRZX0lTU1VFU19BRERfTUVBU1VSRSA9ICcvQWN0aXZpdHkgRm9ybS9Jc3N1ZXMgU2VjdGlvbi9Jc3N1ZS9BZGQgSXRlbSc7XG5jb25zdCBBQ1RJVklUWV9JU1NVRVNfREVMRVRFX01FQVNVUkUgPSAnL0FjdGl2aXR5IEZvcm0vSXNzdWVzIFNlY3Rpb24vSXNzdWUvTWVhc3VyZS9EZWxldGUgSXRlbSc7XG5jb25zdCBBQ1RJVklUWV9JU1NVRVNfQUREX0FDVE9SID0gJy9BY3Rpdml0eSBGb3JtL0lzc3VlcyBTZWN0aW9uL0lzc3VlL01lYXN1cmUvQWRkIEl0ZW0nO1xuY29uc3QgQUNUSVZJVFlfSVNTVUVTX0RFTEVURV9BQ1RPUiA9ICcvQWN0aXZpdHkgRm9ybS9Jc3N1ZXMgU2VjdGlvbi9Jc3N1ZS9NZWFzdXJlL0FjdG9yL0RlbGV0ZSBJdGVtJztcblxuY29uc3QgQUNUSVZJVFlfRElTQlVSU0VNRU5UU19GVU5ESU5HX0ZMT1dTX09SR1JPTEVfQUREX0lNUExFTUVOVElOR19BR0VOQ1kgPVxuICBgJHtBRl9GVU5ESU5HX0ZVTkRJTkdHUk9VUF9GVU5ESU5HSVRFTX0vRGlzYnVyc2VtZW50cy9EaXNidXJzZW1lbnRzIFRhYmxlL0Z1bmRpbmcgRmxvd3MgT3JnUm9sZSBTZWxlY3Rvci9BZGQgSW1wbGVtZW50aW5nIEFnZW5jeWA7XG5jb25zdCBBQ1RJVklUWV9ESVNCVVJTRU1FTlRTX0ZVTkRJTkdfRkxPV1NfT1JHUk9MRV9BRERfQ09OVFJBQ1RJTkdfQUdFTkNZID1cbiAgYCR7QUZfRlVORElOR19GVU5ESU5HR1JPVVBfRlVORElOR0lURU19L0Rpc2J1cnNlbWVudHMvRGlzYnVyc2VtZW50cyBUYWJsZS9GdW5kaW5nIEZsb3dzIE9yZ1JvbGUgU2VsZWN0b3IvQWRkIENvbnRyYWN0aW5nIEFnZW5jeWA7XG5jb25zdCBBQ1RJVklUWV9ESVNCVVJTRU1FTlRTX0ZVTkRJTkdfRkxPV1NfT1JHUk9MRV9BRERfQkVORUZJQ0lBUllfQUdFTkNZID1cbiAgYCR7QUZfRlVORElOR19GVU5ESU5HR1JPVVBfRlVORElOR0lURU19L0Rpc2J1cnNlbWVudHMvRGlzYnVyc2VtZW50cyBUYWJsZS9GdW5kaW5nIEZsb3dzIE9yZ1JvbGUgU2VsZWN0b3IvQWRkIEJlbmVmaWNpYXJ5IEFnZW5jeWA7XG5jb25zdCBBQ1RJVklUWV9ESVNCVVJTRU1FTlRTX0ZVTkRJTkdfRkxPV1NfT1JHUk9MRV9BRERfRE9OT1JfT1JHQU5JWkFUSU9OID1cbiAgYCR7QUZfRlVORElOR19GVU5ESU5HR1JPVVBfRlVORElOR0lURU19L0Rpc2J1cnNlbWVudHMvRGlzYnVyc2VtZW50cyBUYWJsZS9GdW5kaW5nIEZsb3dzIE9yZ1JvbGUgU2VsZWN0b3IvQWRkIERvbm9yIE9yZ2FuaXphdGlvbmA7XG5jb25zdCBBQ1RJVklUWV9ESVNCVVJTRU1FTlRTX0ZVTkRJTkdfRkxPV1NfT1JHUk9MRV9BRERfRVhFQ1VUSU5HX0FHRU5DWSA9XG4gIGAke0FGX0ZVTkRJTkdfRlVORElOR0dST1VQX0ZVTkRJTkdJVEVNfS9EaXNidXJzZW1lbnRzL0Rpc2J1cnNlbWVudHMgVGFibGUvRnVuZGluZyBGbG93cyBPcmdSb2xlIFNlbGVjdG9yL0FkZCBFeGVjdXRpbmcgQWdlbmN5YDtcbmNvbnN0IEFDVElWSVRZX0RJU0JVUlNFTUVOVFNfRlVORElOR19GTE9XU19PUkdST0xFX0FERF9SRUdJT05BTF9HUk9VUCA9XG4gIGAke0FGX0ZVTkRJTkdfRlVORElOR0dST1VQX0ZVTkRJTkdJVEVNfS9EaXNidXJzZW1lbnRzL0Rpc2J1cnNlbWVudHMgVGFibGUvRnVuZGluZyBGbG93cyBPcmdSb2xlIFNlbGVjdG9yL0FkZCBSZWdpb25hbCBHcm91cGA7XG5jb25zdCBBQ1RJVklUWV9ESVNCVVJTRU1FTlRTX0ZVTkRJTkdfRkxPV1NfT1JHUk9MRV9BRERfUkVTUE9OU0lCTEVfT1JHQU5JWkFUSU9OID1cbiAgYCR7QUZfRlVORElOR19GVU5ESU5HR1JPVVBfRlVORElOR0lURU19L0Rpc2J1cnNlbWVudHMvRGlzYnVyc2VtZW50cyBUYWJsZS9GdW5kaW5nIEZsb3dzIE9yZ1JvbGUgU2VsZWN0b3IvQWRkIFJlc3BvbnNpYmxlIE9yZ2FuaXphdGlvbmA7XG5jb25zdCBBQ1RJVklUWV9ESVNCVVJTRU1FTlRTX0ZVTkRJTkdfRkxPV1NfT1JHUk9MRV9BRERfU0VDVE9SX0dST1VQID1cbiAgYCR7QUZfRlVORElOR19GVU5ESU5HR1JPVVBfRlVORElOR0lURU19L0Rpc2J1cnNlbWVudHMvRGlzYnVyc2VtZW50cyBUYWJsZS9GdW5kaW5nIEZsb3dzIE9yZ1JvbGUgU2VsZWN0b3IvQWRkIFNlY3RvciBHcm91cGA7XG5cbmNvbnN0IEFDVElWSVRZX0NPTU1JVE1FTlRTX0ZVTkRJTkdfRkxPV1NfT1JHUk9MRV9BRERfSU1QTEVNRU5USU5HX0FHRU5DWSA9XG4gIGAke0FGX0ZVTkRJTkdfRlVORElOR0dST1VQX0ZVTkRJTkdJVEVNfS9Db21taXRtZW50cy9Db21taXRtZW50cyBUYWJsZS9GdW5kaW5nIEZsb3dzIE9yZ1JvbGUgU2VsZWN0b3IvQWRkIEltcGxlbWVudGluZyBBZ2VuY3lgO1xuY29uc3QgQUNUSVZJVFlfQ09NTUlUTUVOVFNfRlVORElOR19GTE9XU19PUkdST0xFX0FERF9DT05UUkFDVElOR19BR0VOQ1kgPVxuICBgJHtBRl9GVU5ESU5HX0ZVTkRJTkdHUk9VUF9GVU5ESU5HSVRFTX0vQ29tbWl0bWVudHMvQ29tbWl0bWVudHMgVGFibGUvRnVuZGluZyBGbG93cyBPcmdSb2xlIFNlbGVjdG9yL0FkZCBDb250cmFjdGluZyBBZ2VuY3lgO1xuY29uc3QgQUNUSVZJVFlfQ09NTUlUTUVOVFNfRlVORElOR19GTE9XU19PUkdST0xFX0FERF9CRU5FRklDSUFSWV9BR0VOQ1kgPVxuICBgJHtBRl9GVU5ESU5HX0ZVTkRJTkdHUk9VUF9GVU5ESU5HSVRFTX0vQ29tbWl0bWVudHMvQ29tbWl0bWVudHMgVGFibGUvRnVuZGluZyBGbG93cyBPcmdSb2xlIFNlbGVjdG9yL0FkZCBCZW5lZmljaWFyeSBBZ2VuY3lgO1xuY29uc3QgQUNUSVZJVFlfQ09NTUlUTUVOVFNfRlVORElOR19GTE9XU19PUkdST0xFX0FERF9ET05PUl9PUkdBTklaQVRJT04gPVxuICBgJHtBRl9GVU5ESU5HX0ZVTkRJTkdHUk9VUF9GVU5ESU5HSVRFTX0vQ29tbWl0bWVudHMvQ29tbWl0bWVudHMgVGFibGUvRnVuZGluZyBGbG93cyBPcmdSb2xlIFNlbGVjdG9yL0FkZCBEb25vciBPcmdhbml6YXRpb25gO1xuY29uc3QgQUNUSVZJVFlfQ09NTUlUTUVOVFNfRlVORElOR19GTE9XU19PUkdST0xFX0FERF9FWEVDVVRJTkdfQUdFTkNZID1cbiAgYCR7QUZfRlVORElOR19GVU5ESU5HR1JPVVBfRlVORElOR0lURU19L0NvbW1pdG1lbnRzL0NvbW1pdG1lbnRzIFRhYmxlL0Z1bmRpbmcgRmxvd3MgT3JnUm9sZSBTZWxlY3Rvci9BZGQgRXhlY3V0aW5nIEFnZW5jeWA7XG5jb25zdCBBQ1RJVklUWV9DT01NSVRNRU5UU19GVU5ESU5HX0ZMT1dTX09SR1JPTEVfQUREX1JFR0lPTkFMX0dST1VQID1cbiAgYCR7QUZfRlVORElOR19GVU5ESU5HR1JPVVBfRlVORElOR0lURU19L0NvbW1pdG1lbnRzL0NvbW1pdG1lbnRzIFRhYmxlL0Z1bmRpbmcgRmxvd3MgT3JnUm9sZSBTZWxlY3Rvci9BZGQgUmVnaW9uYWwgR3JvdXBgO1xuY29uc3QgQUNUSVZJVFlfQ09NTUlUTUVOVFNfRlVORElOR19GTE9XU19PUkdST0xFX0FERF9SRVNQT05TSUJMRV9PUkdBTklaQVRJT04gPVxuICBgJHtBRl9GVU5ESU5HX0ZVTkRJTkdHUk9VUF9GVU5ESU5HSVRFTX0vQ29tbWl0bWVudHMvQ29tbWl0bWVudHMgVGFibGUvRnVuZGluZyBGbG93cyBPcmdSb2xlIFNlbGVjdG9yL0FkZCBSZXNwb25zaWJsZSBPcmdhbml6YXRpb25gO1xuY29uc3QgQUNUSVZJVFlfQ09NTUlUTUVOVFNfRlVORElOR19GTE9XU19PUkdST0xFX0FERF9TRUNUT1JfR1JPVVAgPVxuICBgJHtBRl9GVU5ESU5HX0ZVTkRJTkdHUk9VUF9GVU5ESU5HSVRFTX0vQ29tbWl0bWVudHMvQ29tbWl0bWVudHMgVGFibGUvRnVuZGluZyBGbG93cyBPcmdSb2xlIFNlbGVjdG9yL0FkZCBTZWN0b3IgR3JvdXBgO1xuXG5jb25zdCBBQ1RJVklUWV9FWFBFTkRJVFVSRVNfRlVORElOR19GTE9XU19PUkdST0xFX0FERF9JTVBMRU1FTlRJTkdfQUdFTkNZID1cbiAgYCR7QUZfRlVORElOR19GVU5ESU5HR1JPVVBfRlVORElOR0lURU19L0V4cGVuZGl0dXJlcy9FeHBlbmRpdHVyZXMgVGFibGUvRnVuZGluZyBGbG93cyBPcmdSb2xlIFNlbGVjdG9yL0FkZCBJbXBsZW1lbnRpbmcgQWdlbmN5YDtcbmNvbnN0IEFDVElWSVRZX0VYUEVORElUVVJFU19GVU5ESU5HX0ZMT1dTX09SR1JPTEVfQUREX0NPTlRSQUNUSU5HX0FHRU5DWSA9XG4gIGAke0FGX0ZVTkRJTkdfRlVORElOR0dST1VQX0ZVTkRJTkdJVEVNfS9FeHBlbmRpdHVyZXMvRXhwZW5kaXR1cmVzIFRhYmxlL0Z1bmRpbmcgRmxvd3MgT3JnUm9sZSBTZWxlY3Rvci9BZGQgQ29udHJhY3RpbmcgQWdlbmN5YDtcbmNvbnN0IEFDVElWSVRZX0VYUEVORElUVVJFU19GVU5ESU5HX0ZMT1dTX09SR1JPTEVfQUREX0JFTkVGSUNJQVJZX0FHRU5DWSA9XG4gIGAke0FGX0ZVTkRJTkdfRlVORElOR0dST1VQX0ZVTkRJTkdJVEVNfS9FeHBlbmRpdHVyZXMvRXhwZW5kaXR1cmVzIFRhYmxlL0Z1bmRpbmcgRmxvd3MgT3JnUm9sZSBTZWxlY3Rvci9BZGQgQmVuZWZpY2lhcnkgQWdlbmN5YDtcbmNvbnN0IEFDVElWSVRZX0VYUEVORElUVVJFU19GVU5ESU5HX0ZMT1dTX09SR1JPTEVfQUREX0RPTk9SX09SR0FOSVpBVElPTiA9XG4gIGAke0FGX0ZVTkRJTkdfRlVORElOR0dST1VQX0ZVTkRJTkdJVEVNfS9FeHBlbmRpdHVyZXMvRXhwZW5kaXR1cmVzIFRhYmxlL0Z1bmRpbmcgRmxvd3MgT3JnUm9sZSBTZWxlY3Rvci9BZGQgRG9ub3IgT3JnYW5pemF0aW9uYDtcbmNvbnN0IEFDVElWSVRZX0VYUEVORElUVVJFU19GVU5ESU5HX0ZMT1dTX09SR1JPTEVfQUREX0VYRUNVVElOR19BR0VOQ1kgPVxuICBgJHtBRl9GVU5ESU5HX0ZVTkRJTkdHUk9VUF9GVU5ESU5HSVRFTX0vRXhwZW5kaXR1cmVzL0V4cGVuZGl0dXJlcyBUYWJsZS9GdW5kaW5nIEZsb3dzIE9yZ1JvbGUgU2VsZWN0b3IvQWRkIEV4ZWN1dGluZyBBZ2VuY3lgO1xuY29uc3QgQUNUSVZJVFlfRVhQRU5ESVRVUkVTX0ZVTkRJTkdfRkxPV1NfT1JHUk9MRV9BRERfUkVHSU9OQUxfR1JPVVAgPVxuICBgJHtBRl9GVU5ESU5HX0ZVTkRJTkdHUk9VUF9GVU5ESU5HSVRFTX0vRXhwZW5kaXR1cmVzL0V4cGVuZGl0dXJlcyBUYWJsZS9GdW5kaW5nIEZsb3dzIE9yZ1JvbGUgU2VsZWN0b3IvQWRkIFJlZ2lvbmFsIEdyb3VwYDtcbmNvbnN0IEFDVElWSVRZX0VYUEVORElUVVJFU19GVU5ESU5HX0ZMT1dTX09SR1JPTEVfQUREX1JFU1BPTlNJQkxFX09SR0FOSVpBVElPTiA9XG4gIGAke0FGX0ZVTkRJTkdfRlVORElOR0dST1VQX0ZVTkRJTkdJVEVNfS9FeHBlbmRpdHVyZXMvRXhwZW5kaXR1cmVzIFRhYmxlL0Z1bmRpbmcgRmxvd3MgT3JnUm9sZSBTZWxlY3Rvci9BZGQgUmVzcG9uc2libGUgT3JnYW5pemF0aW9uYDtcbmNvbnN0IEFDVElWSVRZX0VYUEVORElUVVJFU19GVU5ESU5HX0ZMT1dTX09SR1JPTEVfQUREX1NFQ1RPUl9HUk9VUCA9XG4gIGAke0FGX0ZVTkRJTkdfRlVORElOR0dST1VQX0ZVTkRJTkdJVEVNfS9FeHBlbmRpdHVyZXMvRXhwZW5kaXR1cmVzIFRhYmxlL0Z1bmRpbmcgRmxvd3MgT3JnUm9sZSBTZWxlY3Rvci9BZGQgU2VjdG9yIEdyb3VwYDtcblxuY29uc3QgTVRFRl9QUk9KRUNUSU9OUyA9IGAke0FGX0ZVTkRJTkdfRlVORElOR0dST1VQX0ZVTkRJTkdJVEVNfS9NVEVGIFByb2plY3Rpb25zYDtcbmNvbnN0IE1URUZfUFJPSkVDVElPTlNfQU1PVU5UID1cbiAgYCR7QUZfRlVORElOR19GVU5ESU5HR1JPVVBfRlVORElOR0lURU19L01URUYgUHJvamVjdGlvbnMvTVRFRiBQcm9qZWN0aW9ucyBUYWJsZS9BbW91bnRgO1xuY29uc3QgTVRFRl9QUk9KRUNUSU9OU19DVVJSRU5DWSA9XG4gIGAke0FGX0ZVTkRJTkdfRlVORElOR0dST1VQX0ZVTkRJTkdJVEVNfS9NVEVGIFByb2plY3Rpb25zL01URUYgUHJvamVjdGlvbnMgVGFibGUvQ3VycmVuY3lgO1xuY29uc3QgTVRFRl9QUk9KRUNUSU9OU19QUk9KRUNUSU9OID1cbiAgYCR7QUZfRlVORElOR19GVU5ESU5HR1JPVVBfRlVORElOR0lURU19L01URUYgUHJvamVjdGlvbnMvTVRFRiBQcm9qZWN0aW9ucyBUYWJsZS9NVEVGIFByb2plY3Rpb25gO1xuY29uc3QgTVRFRl9QUk9KRUNUSU9OU19EQVRFID1cbiAgYCR7QUZfRlVORElOR19GVU5ESU5HR1JPVVBfRlVORElOR0lURU19L01URUYgUHJvamVjdGlvbnMvTVRFRiBQcm9qZWN0aW9ucyBUYWJsZS9Qcm9qZWN0aW9uIERhdGVgO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5mcmVlemUoe1xuICBQVUJMSUNfVklFV19DSEFOR0VfUEFTU1dPUkQsXG4gIFBVQkxJQ19WSUVXX1RST1VCTEVfU0lHTl9JTixcbiAgQUNUSVZJVFlfREVMSVZFUllfUkFURSxcbiAgQUNUSVZJVFlfUFJPSkVDVF9JRF9BTkRfUExBTk5JTkcsXG4gIEFDVElWSVRZX0RVUkFUSU9OX09GX1BST0pFQ1QsXG4gIEFDVElWSVRZX1RFQU1fTEVBREVSLFxuICBBQ1RJVklUWV9TQU1FX0FTX1BST1BPU0VEX1NUQVJUX0RBVEUsXG4gIEFDVElWSVRZX1NBTUVfQVNfUFJPUE9TRURfQVBQUk9WQUxfREFURSxcbiAgQUNUSVZJVFlfSURFTlRJRklDQVRJT04sXG4gIEFDVElWSVRZX0xBU1RfVVBEQVRFRF9CWSxcbiAgQUNUSVZJVFlfTEFTVF9VUERBVEVEX09OLFxuICBBQ1RJVklUWV9GVU5ESU5HLFxuICBBRl9GVU5ESU5HX0ZVTkRJTkdHUk9VUF9GVU5ESU5HSVRFTSxcbiAgQUNUSVZJVFlfU0VDVE9SUyxcbiAgQUNUSVZJVFlfUFJJTUFSWV9TRUNUT1JTLFxuICBBQ1RJVklUWV9TRUNPTkRBUllfU0VDVE9SUyxcbiAgQUNUSVZJVFlfU1RSVUNUVVJFUyxcbiAgQUNUSVZJVFlfU1RSVUNUVVJFU19BRERfU1RSVUNUVVJFLFxuICBBQ1RJVklUWV9PUkdBTklaQVRJT05TLFxuICBBQ1RJVklUWV9PUkdBTklaQVRJT05TX0RPTk9SX09SR0FOSVpBVElPTixcbiAgQUNUSVZJVFlfT1JHQU5JWkFUSU9OU19CRU5FRklDSUFSWV9BR0VOQ1ksXG4gIEFDVElWSVRZX09SR0FOSVpBVElPTlNfQ09OVFJBQ1RJTkdfQUdFTkNZLFxuICBBQ1RJVklUWV9PUkdBTklaQVRJT05TX0VYRUNVVElOR19BR0VOQ1ksXG4gIEFDVElWSVRZX09SR0FOSVpBVElPTlNfSU1QTEVNRU5USU5HX0FHRU5DWSxcbiAgQUNUSVZJVFlfT1JHQU5JWkFUSU9OU19SRUdJT05BTF9HUk9VUCxcbiAgQUNUSVZJVFlfT1JHQU5JWkFUSU9OU19SRUxBVEVEX0dPVkVSTk1FTlRfT1JHQU5JWkFUSU9OLFxuICBBQ1RJVklUWV9PUkdBTklaQVRJT05TX1NFQ1RPUl9HUk9VUCxcbiAgQUREX0ZVTkRJTkdfQVVUTyxcbiAgQUNUSVZJVFlfT1JHQU5JWkFUSU9OU19CRU5FRklDSUFSWV9BR0VOQ1lfQUREX0ZVTkRJTkdfQVVUTyxcbiAgQUNUSVZJVFlfT1JHQU5JWkFUSU9OU19DT05UUkFDVElOR19BR0VOQ1lfQUREX0ZVTkRJTkdfQVVUTyxcbiAgQUNUSVZJVFlfT1JHQU5JWkFUSU9OU19ET05PUl9PUkdBTklaQVRJT05fQUREX0ZVTkRJTkdfQVVUTyxcbiAgQUNUSVZJVFlfT1JHQU5JWkFUSU9OU19FWEVDVVRJTkdfQUdFTkNZX0FERF9GVU5ESU5HX0FVVE8sXG4gIEFDVElWSVRZX09SR0FOSVpBVElPTlNfSU1QTEVNRU5USU5HX0FHRU5DWV9BRERfRlVORElOR19BVVRPLFxuICBBQ1RJVklUWV9PUkdBTklaQVRJT05TX1JFR0lPTkFMX0dST1VQX0FERF9GVU5ESU5HX0FVVE8sXG4gIEFDVElWSVRZX09SR0FOSVpBVElPTlNfUkVTUE9OU0lCTEVfT1JHQU5JWkFUSU9OX0FERF9GVU5ESU5HX0FVVE8sXG4gIEFDVElWSVRZX09SR0FOSVpBVElPTlNfU0VDVE9SX0dST1VQX0FERF9GVU5ESU5HX0FVVE8sXG4gIEFDVElWSVRZX0ZVTkRJTkdfU0VBUkNILFxuICBBQ1RJVklUWV9GVU5ESU5HX1NFQVJDSF9PUkdBTklaQVRJT04sXG4gIEFDVElWSVRZX0ZVTkRJTkdfU0VMRUNUX09SR19UWVBFLFxuICBBQ1RJVklUWV9QUk9HUkFNLFxuICBBQ1RJVklUWV9QTEFOTklORyxcbiAgQUNUSVZJVFlfQ09OVEFDVCxcbiAgQUNUSVZJVFlfRE9DVU1FTlRTX0FERF9ET0NVTUVOVCxcbiAgQUNUSVZJVFlfRE9DVU1FTlRTX0FERF9XRUJMSU5LLFxuICBBQ1RJVklUWV9JU1NVRVNfQUREX0lTU1VFLFxuICBBQ1RJVklUWV9JU1NVRVNfREVMRVRFX0lTU1VFLFxuICBBQ1RJVklUWV9JU1NVRVNfQUREX01FQVNVUkUsXG4gIEFDVElWSVRZX0lTU1VFU19ERUxFVEVfTUVBU1VSRSxcbiAgQUNUSVZJVFlfSVNTVUVTX0FERF9BQ1RPUixcbiAgQUNUSVZJVFlfSVNTVUVTX0RFTEVURV9BQ1RPUixcbiAgQUNUSVZJVFlfRElTQlVSU0VNRU5UU19GVU5ESU5HX0ZMT1dTX09SR1JPTEVfQUREX0lNUExFTUVOVElOR19BR0VOQ1ksXG4gIEFDVElWSVRZX0RJU0JVUlNFTUVOVFNfRlVORElOR19GTE9XU19PUkdST0xFX0FERF9DT05UUkFDVElOR19BR0VOQ1ksXG4gIEFDVElWSVRZX0RJU0JVUlNFTUVOVFNfRlVORElOR19GTE9XU19PUkdST0xFX0FERF9CRU5FRklDSUFSWV9BR0VOQ1ksXG4gIEFDVElWSVRZX0RJU0JVUlNFTUVOVFNfRlVORElOR19GTE9XU19PUkdST0xFX0FERF9ET05PUl9PUkdBTklaQVRJT04sXG4gIEFDVElWSVRZX0RJU0JVUlNFTUVOVFNfRlVORElOR19GTE9XU19PUkdST0xFX0FERF9FWEVDVVRJTkdfQUdFTkNZLFxuICBBQ1RJVklUWV9ESVNCVVJTRU1FTlRTX0ZVTkRJTkdfRkxPV1NfT1JHUk9MRV9BRERfUkVHSU9OQUxfR1JPVVAsXG4gIEFDVElWSVRZX0RJU0JVUlNFTUVOVFNfRlVORElOR19GTE9XU19PUkdST0xFX0FERF9SRVNQT05TSUJMRV9PUkdBTklaQVRJT04sXG4gIEFDVElWSVRZX0RJU0JVUlNFTUVOVFNfRlVORElOR19GTE9XU19PUkdST0xFX0FERF9TRUNUT1JfR1JPVVAsXG4gIEFDVElWSVRZX0NPTU1JVE1FTlRTX0ZVTkRJTkdfRkxPV1NfT1JHUk9MRV9BRERfSU1QTEVNRU5USU5HX0FHRU5DWSxcbiAgQUNUSVZJVFlfQ09NTUlUTUVOVFNfRlVORElOR19GTE9XU19PUkdST0xFX0FERF9DT05UUkFDVElOR19BR0VOQ1ksXG4gIEFDVElWSVRZX0NPTU1JVE1FTlRTX0ZVTkRJTkdfRkxPV1NfT1JHUk9MRV9BRERfQkVORUZJQ0lBUllfQUdFTkNZLFxuICBBQ1RJVklUWV9DT01NSVRNRU5UU19GVU5ESU5HX0ZMT1dTX09SR1JPTEVfQUREX0RPTk9SX09SR0FOSVpBVElPTixcbiAgQUNUSVZJVFlfQ09NTUlUTUVOVFNfRlVORElOR19GTE9XU19PUkdST0xFX0FERF9FWEVDVVRJTkdfQUdFTkNZLFxuICBBQ1RJVklUWV9DT01NSVRNRU5UU19GVU5ESU5HX0ZMT1dTX09SR1JPTEVfQUREX1JFR0lPTkFMX0dST1VQLFxuICBBQ1RJVklUWV9DT01NSVRNRU5UU19GVU5ESU5HX0ZMT1dTX09SR1JPTEVfQUREX1JFU1BPTlNJQkxFX09SR0FOSVpBVElPTixcbiAgQUNUSVZJVFlfQ09NTUlUTUVOVFNfRlVORElOR19GTE9XU19PUkdST0xFX0FERF9TRUNUT1JfR1JPVVAsXG4gIEFDVElWSVRZX0VYUEVORElUVVJFU19GVU5ESU5HX0ZMT1dTX09SR1JPTEVfQUREX0lNUExFTUVOVElOR19BR0VOQ1ksXG4gIEFDVElWSVRZX0VYUEVORElUVVJFU19GVU5ESU5HX0ZMT1dTX09SR1JPTEVfQUREX0NPTlRSQUNUSU5HX0FHRU5DWSxcbiAgQUNUSVZJVFlfRVhQRU5ESVRVUkVTX0ZVTkRJTkdfRkxPV1NfT1JHUk9MRV9BRERfQkVORUZJQ0lBUllfQUdFTkNZLFxuICBBQ1RJVklUWV9FWFBFTkRJVFVSRVNfRlVORElOR19GTE9XU19PUkdST0xFX0FERF9ET05PUl9PUkdBTklaQVRJT04sXG4gIEFDVElWSVRZX0VYUEVORElUVVJFU19GVU5ESU5HX0ZMT1dTX09SR1JPTEVfQUREX0VYRUNVVElOR19BR0VOQ1ksXG4gIEFDVElWSVRZX0VYUEVORElUVVJFU19GVU5ESU5HX0ZMT1dTX09SR1JPTEVfQUREX1JFR0lPTkFMX0dST1VQLFxuICBBQ1RJVklUWV9FWFBFTkRJVFVSRVNfRlVORElOR19GTE9XU19PUkdST0xFX0FERF9SRVNQT05TSUJMRV9PUkdBTklaQVRJT04sXG4gIEFDVElWSVRZX0VYUEVORElUVVJFU19GVU5ESU5HX0ZMT1dTX09SR1JPTEVfQUREX1NFQ1RPUl9HUk9VUCxcbiAgTVRFRl9QUk9KRUNUSU9OUyxcbiAgTVRFRl9QUk9KRUNUSU9OU19BTU9VTlQsXG4gIE1URUZfUFJPSkVDVElPTlNfQ1VSUkVOQ1ksXG4gIE1URUZfUFJPSkVDVElPTlNfUFJPSkVDVElPTixcbiAgTVRFRl9QUk9KRUNUSU9OU19EQVRFLFxufSk7XG4iLCJpbXBvcnQgRk1DIGZyb20gJy4vRmVhdHVyZU1hbmFnZXJDb25zdGFudHMnO1xuXG4vKipcbiAqIEBhdXRob3IgTmFkZWpkYSBNYW5kcmVzY3VcbiAqL1xuXG4vLyBBY3Rpdml0eSBmaWVsZHNcbmNvbnN0IEFDVElWSVRZX0JVREdFVCA9ICdhY3Rpdml0eV9idWRnZXQnO1xuY29uc3QgQUNUSVZJVFlfU1RBVFVTID0gJ2FjdGl2aXR5X3N0YXR1cyc7XG5jb25zdCBTVEFUVVNfUkVBU09OID0gJ3N0YXR1c19yZWFzb24nO1xuY29uc3QgRklOQU5DSUFMX0lOU1RSVU1FTlQgPSAnZmluYW5jaWFsX2luc3RydW1lbnQnO1xuY29uc3QgVFlQRV9PRl9JTVBMRU1FTlRBVElPTiA9ICd0eXBlX29mX2ltcGxlbWVudGF0aW9uJztcbmNvbnN0IE9CSkVDVElWRSA9ICdvYmplY3RpdmUnO1xuY29uc3QgUkVTVUxUUyA9ICdyZXN1bHRzJztcbmNvbnN0IEJVREdFVF9DT0RFX1BST0pFQ1RfSUQgPSAnYnVkZ2V0X2NvZGVfcHJvamVjdF9pZCc7XG5jb25zdCBBQ1RVQUxfQVBQUk9WQUxfREFURSA9ICdhY3R1YWxfYXBwcm92YWxfZGF0ZSc7XG5jb25zdCBGVU5ESU5HUyA9ICdmdW5kaW5ncyc7XG5jb25zdCBGVU5ESU5HX0RPTk9SX09SR19JRCA9ICdkb25vcl9vcmdhbml6YXRpb25faWQnO1xuY29uc3QgSVNfRFJBRlQgPSAnaXNfZHJhZnQnO1xuY29uc3QgT1JHX1JPTEVfT1JHX0lEID0gJ29yZ2FuaXphdGlvbic7XG5jb25zdCBBRERJVElPTkFMX0lORk8gPSAnYWRkaXRpb25hbF9pbmZvJztcbmNvbnN0IFBSSU1BUllfU0VDVE9SUyA9ICdwcmltYXJ5X3NlY3RvcnMnO1xuY29uc3QgU0VDT05EQVJZX1NFQ1RPUlMgPSAnc2Vjb25kYXJ5X3NlY3RvcnMnO1xuY29uc3QgVEVSVElBUllfU0VDVE9SUyA9ICd0ZXJ0aWFyeV9zZWN0b3JzJztcbmNvbnN0IFRBR19TRUNUT1JTID0gJ3RhZ19zZWN0b3JzJztcbmNvbnN0IFNFQ1RPUiA9ICdzZWN0b3InO1xuY29uc3QgU0VDVE9SX1BFUkNFTlRBR0UgPSAnc2VjdG9yX3BlcmNlbnRhZ2UnO1xuY29uc3QgRklOQU5DSU5HX0lOU1RSVU1FTlQgPSAnZmluYW5jaW5nX2luc3RydW1lbnQnO1xuY29uc3QgTU9EQUxJVElFUyA9ICdtb2RhbGl0aWVzJztcbmNvbnN0IExJTkVfTUlOSVNUUllfUkFOSyA9ICdsaW5lX21pbmlzdHJ5X3JhbmsnO1xuY29uc3QgR09WRVJOTUVOVF9BR1JFRU1FTlRfTlVNQkVSID0gJ2dvdmVybm1lbnRfYWdyZWVtZW50X251bWJlcic7XG5jb25zdCBGVU5ESU5HX1NUQVRVUyA9ICdmdW5kaW5nX3N0YXR1cyc7XG5jb25zdCBMT0NBVElPTlMgPSAnbG9jYXRpb25zJztcbmNvbnN0IExPQ0FUSU9OID0gJ2xvY2F0aW9uJztcbmNvbnN0IExPQ0FUSU9OX1BFUkNFTlRBR0UgPSAnbG9jYXRpb25fcGVyY2VudGFnZSc7XG5jb25zdCBJTVBMRU1FTlRBVElPTl9MT0NBVElPTiA9ICdpbXBsZW1lbnRhdGlvbl9sb2NhdGlvbic7XG5jb25zdCBJTVBMRU1FTlRBVElPTl9MRVZFTCA9ICdpbXBsZW1lbnRhdGlvbl9sZXZlbCc7XG5jb25zdCBBUFBST1ZBTF9TVEFUVVMgPSAnYXBwcm92YWxfc3RhdHVzJztcbmNvbnN0IEFQUFJPVkVEX0JZID0gJ2FwcHJvdmVkX2J5JztcbmNvbnN0IEFQUFJPVkFMX0RBVEUgPSAnYXBwcm92YWxfZGF0ZSc7XG5jb25zdCBUWVBFX09GX0FTU0lTVEFOQ0UgPSAndHlwZV9vZl9hc3Npc3RhbmNlJztcbmNvbnN0IEVYUEVORElUVVJFX0NMQVNTID0gJ2V4cGVuZGl0dXJlX2NsYXNzJztcbmNvbnN0IEZVTkRJTkdfREVUQUlMUyA9ICdmdW5kaW5nX2RldGFpbHMnO1xuY29uc3QgTU9ERV9PRl9QQVlNRU5UID0gJ21vZGVfb2ZfcGF5bWVudCc7XG5jb25zdCBGVU5ESU5HX0NMQVNTSUZJQ0FUSU9OX0RBVEUgPSAnZnVuZGluZ19jbGFzc2lmaWNhdGlvbl9kYXRlJztcbmNvbnN0IEFHUkVFTUVOVCA9ICdhZ3JlZW1lbnQnO1xuY29uc3QgRE9OT1JfT0JKRUNUSVZFID0gJ2Rvbm9yX29iamVjdGl2ZSc7XG5jb25zdCBDT05ESVRJT05TID0gJ2NvbmRpdGlvbnMnO1xuY29uc3QgQUdSRUVNRU5UX0NPREUgPSAnY29kZSc7XG5jb25zdCBBR1JFRU1FTlRfVElUTEUgPSAndGl0bGUnO1xuY29uc3QgUFJPSkVDVF9DQVRFR09SWSA9ICdwcm9qZWN0X2NhdGVnb3J5JztcbmNvbnN0IFBST0pFQ1RfSU1QTEVNRU5USU5HX1VOSVQgPSAncHJvamVjdF9pbXBsZW1lbnRpbmdfdW5pdCc7XG5jb25zdCBPUkdBTklaQVRJT04gPSAnb3JnYW5pemF0aW9uJztcbmNvbnN0IFBFUkNFTlRBR0UgPSAncGVyY2VudGFnZSc7XG5jb25zdCBBTVBfT1JHQU5JWkFUSU9OX1JPTEVfSUQgPSAnYW1wX29yZ2FuaXphdGlvbl9yb2xlX2lkJztcbmNvbnN0IFJPTEUgPSAncm9sZSc7XG5jb25zdCBFWEVDVVRJTkdfQUdFTkNZID0gJ2V4ZWN1dGluZ19hZ2VuY3knO1xuY29uc3QgQ09OVFJBQ1RJTkdfQUdFTkNZID0gJ2NvbnRyYWN0aW5nX2FnZW5jeSc7XG5jb25zdCBCRU5FRklDSUFSWV9BR0VOQ1kgPSAnYmVuZWZpY2lhcnlfYWdlbmN5JztcbmNvbnN0IElNUExFTUVOVElOR19BR0VOQ1kgPSAnaW1wbGVtZW50aW5nX2FnZW5jeSc7XG5jb25zdCBSRVNQT05TSUJMRV9PUkdBTklaQVRJT04gPSAncmVzcG9uc2libGVfb3JnYW5pemF0aW9uJztcbmNvbnN0IERPTk9SX09SR0FOSVpBVElPTiA9ICdkb25vcl9vcmdhbml6YXRpb24nO1xuY29uc3QgUkVHSU9OQUxfR1JPVVAgPSAncmVnaW9uYWxfZ3JvdXAnO1xuY29uc3QgU0VDVE9SX0dST1VQID0gJ3NlY3Rvcl9ncm91cCc7XG5jb25zdCBCVURHRVRTID0gJ2J1ZGdldHMnO1xuY29uc3QgQlVER0VUX0NPREUgPSAnYnVkZ2V0X2NvZGUnO1xuY29uc3QgQlVER0VUX09SR0FOSVpBVElPTl9DT0RFID0gJ2J1ZGdldF9vcmdhbml6YXRpb25fY29kZSc7XG5jb25zdCBBUkNISVZFRCA9ICdhcmNoaXZlZCc7XG5jb25zdCBUUkFOU0FDVElPTl9EQVRFID0gJ3RyYW5zYWN0aW9uX2RhdGUnO1xuY29uc3QgVFJBTlNBQ1RJT05fVFlQRSA9ICd0cmFuc2FjdGlvbl90eXBlJztcbmNvbnN0IENPTU1JVE1FTlRTID0gJ2NvbW1pdG1lbnRzJztcbmNvbnN0IERJU0JVUlNFTUVOVFMgPSAnZGlzYnVyc2VtZW50cyc7XG5jb25zdCBFWFBFTkRJVFVSRVMgPSAnZXhwZW5kaXR1cmVzJztcbmNvbnN0IEVTVElNQVRFRF9ESVNCVVJTRU1FTlRTID0gJ2VzdGltYXRlZF9kaXNidXJzZW1lbnRzJztcbmNvbnN0IFRSQU5TQUNUSU9OX0FNT1VOVCA9ICd0cmFuc2FjdGlvbl9hbW91bnQnO1xuY29uc3QgQURKVVNUTUVOVF9UWVBFID0gJ2FkanVzdG1lbnRfdHlwZSc7XG5jb25zdCBBQ1RVQUxfU1RBUlRfREFURSA9ICdhY3R1YWxfc3RhcnRfZGF0ZSc7XG5jb25zdCBQUk9QT1NFRF9TVEFSVF9EQVRFID0gJ3Byb3Bvc2VkX3N0YXJ0X2RhdGUnO1xuY29uc3QgQUNUVUFMX0NPTVBMRVRJT05fREFURSA9ICdhY3R1YWxfY29tcGxldGlvbl9kYXRlJztcbmNvbnN0IENPTlRSQUNUSU5HX0RBVEUgPSAnY29udHJhY3RpbmdfZGF0ZSc7XG5jb25zdCBESVNCVVJTRU1FTlRfREFURSA9ICdkaXNidXJzZW1lbnRfZGF0ZSc7XG5jb25zdCBQUk9QT1NFRF9BUFBST1ZBTF9EQVRFID0gJ3Byb3Bvc2VkX2FwcHJvdmFsX2RhdGUnO1xuY29uc3QgT1JJR0lOQUxfQ09NUExFVElPTl9EQVRFID0gJ29yaWdpbmFsX2NvbXBsZXRpb25fZGF0ZSc7XG5jb25zdCBQUk9QT1NFRF9DT01QTEVUSU9OX0RBVEUgPSAncHJvcG9zZWRfY29tcGxldGlvbl9kYXRlJztcbmNvbnN0IEZJTkFMX0RBVEVfRk9SX0RJU0JVUlNFTUVOVFMgPSAnZmluYWxfZGF0ZV9mb3JfZGlzYnVyc2VtZW50cyc7XG5jb25zdCBGSU5BTF9EQVRFX0ZPUl9DT05UUkFDVElORyA9ICdmaW5hbF9kYXRlX2Zvcl9jb250cmFjdGluZyc7XG5jb25zdCBFRkZFQ1RJVkVfRlVORElOR19EQVRFID0gJ2VmZmVjdGl2ZV9mdW5kaW5nX2RhdGUnO1xuY29uc3QgRlVORElOR19DTE9TSU5HX0RBVEUgPSAnZnVuZGluZ19jbG9zaW5nX2RhdGUnO1xuY29uc3QgUkFUSUZJQ0FUSU9OX0RBVEUgPSAncmF0aWZpY2F0aW9uX2RhdGUnO1xuY29uc3QgTUFUVVJJVFkgPSAnbWF0dXJpdHknO1xuY29uc3QgTEFTVF9BVURJVF9EQVRFID0gJ2xhc3RfYXVkaXRfZGF0ZSc7XG5jb25zdCBTSUdOQVRVUkVfREFURSA9ICdzaWduYXR1cmVfZGF0ZSc7XG5jb25zdCBIVU1BTklUQVJJQU5fQUlEID0gJ2h1bWFuaXRhcmlhbl9haWQnO1xuY29uc3QgRElTQVNURVJfUkVTUE9OU0UgPSAnZGlzYXN0ZXJfcmVzcG9uc2UnO1xuY29uc3QgUFJPR1JBTSA9ICdwcm9ncmFtJztcbmNvbnN0IFBST0dSQU1fUEVSQ0VOVEFHRSA9ICdwcm9ncmFtX3BlcmNlbnRhZ2UnO1xuY29uc3QgUFJPR1JBTV9TRVRUSU5HUyA9ICdwcm9ncmFtX3NldHRpbmdzJztcbmNvbnN0IE5BVElPTkFMX1BMQU5fT0JKRUNUSVZFID0gJ25hdGlvbmFsX3BsYW5fb2JqZWN0aXZlJztcbmNvbnN0IFBSSU1BUllfUFJPR1JBTVMgPSAncHJpbWFyeV9wcm9ncmFtcyc7XG5jb25zdCBTRUNPTkRBUllfUFJPR1JBTVMgPSAnc2Vjb25kYXJ5X3Byb2dyYW1zJztcbmNvbnN0IFRFUlRJQVJfUFJPR1JBTVMgPSAndGVydGlhcnlfcHJvZ3JhbXMnO1xuY29uc3QgR09WRVJOTUVOVF9BUFBST1ZBTF9QUk9DRURVUkVTID0gJ2dvdmVybm1lbnRfYXBwcm92YWxfcHJvY2VkdXJlcyc7XG5jb25zdCBKT0lOVF9DUklURVJJQSA9ICdqb2ludF9jcml0ZXJpYSc7XG5jb25zdCBURUFNID0gJ3RlYW0nO1xuY29uc3QgUkVKRUNURURfSUQgPSAncmVqZWN0ZWRJZCc7XG5jb25zdCBJTlRFUk5BTF9JRCA9ICdpbnRlcm5hbF9pZCc7XG5jb25zdCBBTVBfSUQgPSAnYW1wX2lkJztcbmNvbnN0IFBST0pFQ1RfVElUTEUgPSAncHJvamVjdF90aXRsZSc7XG5jb25zdCBERVNDUklQVElPTiA9ICdkZXNjcmlwdGlvbic7XG5jb25zdCBNT0RJRklFRF9CWSA9ICdtb2RpZmllZF9ieSc7XG5jb25zdCBNT0RJRklFRF9PTiA9ICd1cGRhdGVfZGF0ZSc7XG5jb25zdCBDUkVBVEVEX0JZID0gJ2NyZWF0ZWRfYnknO1xuY29uc3QgQ1JFQVRFRF9PTiA9ICdjcmVhdGlvbl9kYXRlJztcbmNvbnN0IExBU1RfSU1QT1JURURfQlkgPSAnbGFzdF9pbXBvcnRlZF9ieSc7XG5jb25zdCBDTElFTlRfQ0hBTkdFX0lEID0gJ2NsaWVudC1jaGFuZ2UtaWQnO1xuY29uc3QgQ0xJRU5UX0NSRUFURURfT04gPSAnY2xpZW50LWNyZWF0ZWQtb24nO1xuY29uc3QgQ0xJRU5UX1VQREFURURfT04gPSAnY2xpZW50LXVwZGF0ZWQtb24nO1xuY29uc3QgSVNfUFVTSEVEID0gJ2lzLXB1c2hlZCc7XG5jb25zdCBBQ1RJVklUWV9HUk9VUCA9ICdhY3Rpdml0eV9ncm91cCc7XG5jb25zdCBWRVJTSU9OID0gJ3ZlcnNpb24nO1xuY29uc3QgUFJPSkVDVF9DT01NRU5UUyA9ICdwcm9qZWN0X2NvbW1lbnRzJztcbmNvbnN0IExFU1NPTlNfTEVBUk5FRCA9ICdsZXNzb25zX2xlYXJuZWQnO1xuY29uc3QgUFJPSkVDVF9JTVBBQ1QgPSAncHJvamVjdF9pbXBhY3QnO1xuY29uc3QgQUNUSVZJVFlfU1VNTUFSWSA9ICdhY3Rpdml0eV9zdW1tYXJ5JztcbmNvbnN0IENPTkRJVElPTkFMSVRJRVMgPSAnY29uZGl0aW9uYWxpdGllcyc7XG5jb25zdCBQUk9KRUNUX01BTkFHRU1FTlQgPSAncHJvamVjdF9tYW5hZ2VtZW50JztcbmNvbnN0IEFfQ19DSEFQVEVSID0gJ2FfY19jaGFwdGVyJztcbmNvbnN0IENSSVNfTlVNQkVSID0gJ2NyaXNfbnVtYmVyJztcbmNvbnN0IElBVElfSURFTlRJRklFUiA9ICdpYXRpX2lkZW50aWZpZXInO1xuY29uc3QgQUNUSVZJVFlfSU5URVJOQUxfSURTID0gJ2FjdGl2aXR5X2ludGVybmFsX2lkcyc7XG5jb25zdCBISUVSQVJDSElDQUxfVkFMVUUgPSAnaGllcmFyY2hpY2FsX3ZhbHVlJztcbmNvbnN0IEhJRVJBUkNISUNBTF9WQUxVRV9QQVJUUyA9ICdoaWVyYXJjaGljYWxfdmFsdWVfcGFydHMnO1xuY29uc3QgSElFUkFSQ0hJQ0FMX1ZBTFVFX0RFUFRIID0gJ2hpZXJhcmNoaWNhbF92YWx1ZV9kZXB0aCc7XG5jb25zdCBQUENfQU1PVU5UID0gJ3BwY19hbW91bnQnO1xuY29uc3QgUlBDX0FNT1VOVCA9ICdycGNfYW1vdW50JztcbmNvbnN0IFBQQ19BTk5VQUxfQlVER0VUUyA9ICdwcGNfYW5udWFsX2J1ZGdldHMnO1xuY29uc3QgQU1PVU5UID0gJ2Ftb3VudCc7XG5jb25zdCBDVVJSRU5DWSA9ICdjdXJyZW5jeSc7XG5jb25zdCBGVU5ESU5HX0RBVEUgPSAnZnVuZGluZ19kYXRlJztcbmNvbnN0IENPTVBPTkVOVFMgPSAnY29tcG9uZW50cyc7XG5jb25zdCBUT1RBTF9OVU1CRVJfT0ZfRlVORElOR19TT1VSQ0VTID0gJ3RvdGFsX251bWJlcl9vZl9mdW5kaW5nX3NvdXJjZXMnO1xuY29uc3QgU09VUkNFX1JPTEUgPSAnc291cmNlX3JvbGUnO1xuY29uc3QgQU1QX0ZVTkRJTkdfSUQgPSAnZnVuZGluZ19pZCc7XG5jb25zdCBJU1NVRVMgPSAnaXNzdWVzJztcbmNvbnN0IElTU1VFX0RBVEUgPSAnaXNzdWVfZGF0ZSc7XG5jb25zdCBJU1NVRV9OQU1FID0gJ25hbWUnO1xuY29uc3QgTUVBU1VSRVMgPSAnbWVhc3VyZXMnO1xuY29uc3QgTUVBU1VSRV9OQU1FID0gJ25hbWUnO1xuY29uc3QgTUVBU1VSRV9EQVRFID0gJ21lYXN1cmVfZGF0ZSc7XG5jb25zdCBBQ1RPUlMgPSAnYWN0b3JzJztcbmNvbnN0IEFDVE9SX05BTUUgPSAnbmFtZSc7XG5jb25zdCBTVFJVQ1RVUkVTID0gJ3N0cnVjdHVyZXMnO1xuY29uc3QgU1RSVUNUVVJFU19USVRMRSA9ICd0aXRsZSc7XG5jb25zdCBTVFJVQ1RVUkVTX0RFU0NSSVBUSU9OID0gJ2Rlc2NyaXB0aW9uJztcbmNvbnN0IFNUUlVDVFVSRVNfTEFUSVRVREUgPSAnbGF0aXR1ZGUnO1xuY29uc3QgU1RSVUNUVVJFU19MT05HSVRVREUgPSAnbG9uZ2l0dWRlJztcbmNvbnN0IFNUUlVDVFVSRVNfQ09MT1IgPSAnc3RydWN0dXJlX2NvbG9yJztcbmNvbnN0IFNUUlVDVFVSRVNfTEFUID0gJ2xhdCc7XG5jb25zdCBTVFJVQ1RVUkVTX0xORyA9ICdsbmcnO1xuY29uc3QgU1RSVUNUVVJFU19TSEFQRSA9ICdzaGFwZSc7XG5jb25zdCBTVFJVQ1RVUkVTX1BPSU5UID0gJ1BvaW50JztcbmNvbnN0IFNUUlVDVFVSRVNfUE9MWUdPTiA9ICdQb2x5Z29uJztcbmNvbnN0IFNUUlVDVFVSRVNfUE9MWUxJTkUgPSAnUG9seWxpbmUnO1xuY29uc3QgU1RSVUNUVVJFU19DT09SRElOQVRFUyA9ICdjb29yZGluYXRlcyc7XG5jb25zdCBDT01QT05FTlRfVFlQRSA9ICdjb21wb25lbnRfdHlwZSc7XG5jb25zdCBDT01QT05FTlRfVElUTEUgPSAnY29tcG9uZW50X3RpdGxlJztcbmNvbnN0IENPTVBPTkVOVF9GVU5ESU5HID0gJ2Z1bmRpbmcnO1xuY29uc3QgQ09NUE9ORU5UX0RFU0NSSVBUSU9OID0gJ2Rlc2NyaXB0aW9uJztcbmNvbnN0IENPTVBPTkVOVF9PUkdBTklaQVRJT04gPSAnY29tcG9uZW50X29yZ2FuaXphdGlvbic7XG5jb25zdCBGVU5ESU5HX0FNT1VOVF9JRCA9ICdhbXBfZnVuZGluZ19hbW91bnRfaWQnO1xuY29uc3QgRVhUUkFfSU5GTyA9ICdleHRyYV9pbmZvJztcbmNvbnN0IFZBTFVFID0gJ3ZhbHVlJztcbmNvbnN0IEFDUk9OWU0gPSAnYWNyb255bSc7XG5jb25zdCBUWVBFX09GX0NPT1BFUkFUSU9OID0gJ3R5cGVfb2ZfY29vcGVyYXRpb24nO1xuY29uc3QgQU5OVUFMX1BST0pFQ1RfQlVER0VUX0lEID0gJ2FubnVhbF9wcm9qZWN0X2J1ZGdldF9pZCc7XG5jb25zdCBUWVBFID0gJ3R5cGUnO1xuY29uc3QgWUVBUiA9ICd5ZWFyJztcbmNvbnN0IEdST1VQX1ZFUlNJT05FRF9GVU5ESU5HID0gJ2dyb3VwX3ZlcnNpb25lZF9mdW5kaW5nJztcbmNvbnN0IEFDVElWRV9MSVNUID0gJ2FjdGl2ZV9saXN0JztcbmNvbnN0IEFDVElWRSA9ICdhY3RpdmUnO1xuY29uc3QgREVMRUdBVEVEX0NPT1BFUkFUSU9OID0gJ2RlbGVnYXRlZF9jb29wZXJhdGlvbic7XG5jb25zdCBERUxFR0FURURfUEFSVE5FUiA9ICdkZWxlZ2F0ZWRfcGFydG5lcic7XG5jb25zdCBGSU5BTkNJTkdfSUQgPSAnZmluYW5jaW5nX2lkJztcbmNvbnN0IERJU0JVUlNFTUVOVF9PUkRFUl9JRCA9ICdkaXNidXJzZW1lbnRfb3JkZXJfaWQnO1xuY29uc3QgUExFREdFID0gJ3BsZWRnZSc7XG5jb25zdCBDQVBJVEFMX1NQRU5ESU5HX1BFUkNFTlRBR0UgPSAnY2FwaXRhbF9zcGVuZGluZ19wZXJjZW50YWdlJztcbmNvbnN0IFJFUE9SVElOR19EQVRFID0gJ3JlcG9ydGluZ19kYXRlJztcbmNvbnN0IFJFQ0lQSUVOVF9ST0xFID0gJ3JlY2lwaWVudF9yb2xlJztcbmNvbnN0IFJFQ0lQSUVOVF9PUkdBTklaQVRJT04gPSAncmVjaXBpZW50X29yZ2FuaXphdGlvbic7XG5jb25zdCBURU1QT1JBTF9JRCA9ICdfdGVtcG9yYWxfaWQnO1xuY29uc3QgTUlOSVNUUllfQ09ERSA9ICdtaW5pc3RyeV9jb2RlJztcbmNvbnN0IFBST0pFQ1RfQ09ERSA9ICdwcm9qZWN0X2NvZGUnO1xuY29uc3QgRlkgPSAnZnknO1xuY29uc3QgSU5ESVJFQ1RfT05fQlVER0VUID0gJ2luZGlyZWN0X29uX2J1ZGdldCc7XG5jb25zdCBJTVBMRU1FTlRBVElPTl9MRVZFTFNfRVhUUkFfSU5GTyA9ICdpbXBsZW1lbnRhdGlvbi1sZXZlbHMnO1xuY29uc3QgSU1QTEVNRU5UQVRJT05fTE9DQVRJT05fRVhUUkFfSU5GTyA9ICdpbXBsZW1lbnRhdGlvbl9sb2NhdGlvbl9uYW1lJztcbmNvbnN0IERPTk9SX0NPTlRBQ1QgPSAnZG9ub3JfY29udGFjdF9pbmZvcm1hdGlvbic7XG5jb25zdCBQUk9KRUNUX0NPT1JESU5BVE9SX0NPTlRBQ1QgPSAncHJvamVjdF9jb29yZGluYXRvcl9jb250YWN0X2luZm9ybWF0aW9uJztcbmNvbnN0IFNFQ1RPUl9NSU5JU1RSWV9DT05UQUNUID0gJ3NlY3Rvcl9taW5pc3RyeV9jb250YWN0X2luZm9ybWF0aW9uJztcbmNvbnN0IE1PRkVEX0NPTlRBQ1QgPSAnbW9mZWRfY29udGFjdF9pbmZvcm1hdGlvbic7XG5jb25zdCBJTVBMRU1FTlRJTkdfRVhFQ1VUSU5HX0FHRU5DWV9DT05UQUNUID0gJ2ltcGxlbWVudGluZy9leGVjdXRpbmdfYWdlbmN5X2NvbnRhY3RfaW5mb3JtYXRpb24nO1xuY29uc3QgQ09OVEFDVCA9ICdjb250YWN0JztcbmNvbnN0IE9SR0FOSVpBVElPTl9HUk9VUCA9ICdvcmdhbml6YXRpb25fZ3JvdXAnO1xuY29uc3QgRklYRURfRVhDSEFOR0VfUkFURSA9ICdmaXhlZF9leGNoYW5nZV9yYXRlJztcbmNvbnN0IFBSSU1BUllfQ09OVEFDVCA9ICdtYXJrX2FzX3ByaW1hcnknO1xuY29uc3QgQUNUSVZJVFlfRE9DVU1FTlRTID0gJ2FjdGl2aXR5X2RvY3VtZW50cyc7XG5jb25zdCBET0NVTUVOVF9UWVBFID0gJ2RvY3VtZW50X3R5cGUnO1xuY29uc3QgSVNPMiA9ICdpc28yJztcbmNvbnN0IE1URUZfUFJPSkVDVElPTlMgPSAnbXRlZl9wcm9qZWN0aW9ucyc7XG5jb25zdCBQUk9KRUNUSU9OID0gJ3Byb2plY3Rpb24nO1xuY29uc3QgUElQRUxJTkUgPSAncGlwZWxpbmUnO1xuY29uc3QgUFJPSkVDVElPTl9EQVRFID0gJ3Byb2plY3Rpb25fZGF0ZSc7XG5cbi8vIEFjdGl2aXR5IGxhYmVscyAodXN1YWxseSB0aG9zZSB0aGF0IGRvbid0IGNvbWUgYXMgcGFydCBvZiBGaWVsZHMgRGVmIEVQKVxuY29uc3QgU0FNRV9BU19QUk9QT1NFRF9TVEFSVF9EQVRFX0xBQkVMID0gJ1NhbWUgYXMgUHJvcG9zZWQgU3RhcnQgRGF0ZSc7XG5jb25zdCBTQU1FX0FTX1BST1BPU0VEX0FQUFJPVkFMX0RBVEVfTEFCRUwgPSAnU2FtZSBhcyBQcm9wb3NlZCBBcHByb3ZhbCBEYXRlJztcblxuLy8gQWN0aXZpdHkgdmFsaWRhdGlvbiBydWxlc1xuY29uc3QgREVQRU5ERU5DWV9JTVBMRU1FTlRBVElPTl9MRVZFTF9QUkVTRU5UID0gJ2ltcGxlbWVudGF0aW9uX2xldmVsX3ByZXNlbnQnO1xuY29uc3QgREVQRU5ERU5DWV9JTVBMRU1FTlRBVElPTl9MRVZFTF9WQUxJRCA9ICdpbXBsZW1lbnRhdGlvbl9sZXZlbF92YWxpZCc7XG5jb25zdCBERVBFTkRFTkNZX0lNUExFTUVOVEFUSU9OX0xPQ0FUSU9OX1BSRVNFTlQgPSAnaW1wbGVtZW50YXRpb25fbG9jYXRpb25fcHJlc2VudCc7XG5jb25zdCBERVBFTkRFTkNZX0lNUExFTUVOVEFUSU9OX0xPQ0FUSU9OX1ZBTElEID0gJ2ltcGxlbWVudGF0aW9uX2xvY2F0aW9uX3ZhbGlkJztcbmNvbnN0IERFUEVOREVOQ1lfUFJPSkVDVF9DT0RFX09OX0JVREdFVCA9ICdwcm9qZWN0X2NvZGVfb25fYnVkZ2V0JztcbmNvbnN0IERFUEVOREVOQ1lfT05fQlVER0VUID0gJ29uX2J1ZGdldCc7XG5jb25zdCBERVBFTkRFTkNZX1RSQU5TQUNUSU9OX1BSRVNFTlQgPSAndHJhbnNhY3Rpb25fcHJlc2VudCc7XG5jb25zdCBERVBFTkRFTkNZX0NPTVBPTkVOVF9GVU5ESU5HX09SR19WQUxJRCA9ICdvcmdhbml6YXRpb25fcHJlc2VudCc7XG5cbi8qKiBJRHMgZm9yIEFQIHNlY3Rpb25zICoqL1xuY29uc3QgQVBfU0VDVElPTl9JRFMgPVxuICBbeyBrZXk6ICdBUElkZW50aWZpY2F0aW9uJywgaGFzaDogJyNBUElkZW50aWZpY2F0aW9uJywgdmFsdWU6ICdJZGVudGlmaWNhdGlvbicsIGZtUGF0aDogRk1DLkFDVElWSVRZX0lERU5USUZJQ0FUSU9OIH0sXG4gICAgeyBrZXk6ICdBUEludGVybmFsSWRzJywgaGFzaDogJyNBUEludGVybmFsSWRzJywgdmFsdWU6ICdBZ2VuY3kgSW50ZXJuYWwgSURzJywgc2VjdGlvblBhdGg6IEFDVElWSVRZX0lOVEVSTkFMX0lEUyB9LFxuICAgIHsga2V5OiAnQVBQbGFubmluZycsIGhhc2g6ICcjQVBQbGFubmluZycsIHZhbHVlOiAnUGxhbm5pbmcnLCBmbVBhdGg6IEZNQy5BQ1RJVklUWV9QTEFOTklORyB9LFxuICAgIHsga2V5OiAnQVBMb2NhdGlvbicsIGhhc2g6ICcjQVBMb2NhdGlvbicsIHZhbHVlOiAnTG9jYXRpb24nLCBzZWN0aW9uUGF0aDogTE9DQVRJT05TIH0sXG4gICAgeyBrZXk6ICdBUFByb2dyYW0nLCBoYXNoOiAnI0FQUHJvZ3JhbScsIHZhbHVlOiAnUHJvZ3JhbScsIGZtUGF0aDogRk1DLkFDVElWSVRZX1BST0dSQU0gfSxcbiAgICB7IGtleTogJ0FQU2VjdG9yJywgaGFzaDogJyNBUFNlY3RvcicsIHZhbHVlOiAnU2VjdG9ycycsIGZtUGF0aDogRk1DLkFDVElWSVRZX1NFQ1RPUlMgfSxcbiAgICB7XG4gICAgICBrZXk6ICdBUEZ1bmRpbmdTb3VyY2VzJyxcbiAgICAgIGhhc2g6ICcjQVBGdW5kaW5nU291cmNlcycsXG4gICAgICB2YWx1ZTogJ0Z1bmRpbmcgU291cmNlcycsXG4gICAgICBzZWN0aW9uUGF0aDogVE9UQUxfTlVNQkVSX09GX0ZVTkRJTkdfU09VUkNFU1xuICAgIH0sXG4gICAgeyBrZXk6ICdBUEZ1bmRpbmcnLCBoYXNoOiAnI0FQRnVuZGluZycsIHZhbHVlOiAnRnVuZGluZycsIHNlY3Rpb25QYXRoOiBGVU5ESU5HUyB9LFxuICAgIHtcbiAgICAgIGtleTogJ0FQUmVsYXRlZE9yZ2FuaXphdGlvbnMnLFxuICAgICAgaGFzaDogJyNBUFJlbGF0ZWRPcmdhbml6YXRpb25zJyxcbiAgICAgIHZhbHVlOiAnUmVsYXRlZCBPcmdhbml6YXRpb25zJyxcbiAgICAgIGZtUGF0aDogRk1DLkFDVElWSVRZX09SR0FOSVpBVElPTlNcbiAgICB9LFxuICAgIHsga2V5OiAnQVBJc3N1ZXMnLCBoYXNoOiAnI0FQSXNzdWVzJywgdmFsdWU6ICdJc3N1ZXMnLCBzZWN0aW9uUGF0aDogSVNTVUVTIH0sXG4gICAgeyBrZXk6ICdBUENvbnRhY3QnLCBoYXNoOiAnI0FQQ29udGFjdCcsIHZhbHVlOiAnQ29udGFjdCBJbmZvcm1hdGlvbicsIGZtUGF0aDogRk1DLkFDVElWSVRZX0NPTlRBQ1QgfSxcbiAgICB7IGtleTogJ0FQU3RydWN0dXJlcycsIGhhc2g6ICcjQVBTdHJ1Y3R1cmVzJywgdmFsdWU6ICdTdHJ1Y3R1cmVzJywgc2VjdGlvblBhdGg6IFNUUlVDVFVSRVMgfSxcbiAgICB7IGtleTogJ0FQRG9jdW1lbnQnLCBoYXNoOiAnI0FQRG9jdW1lbnQnLCB2YWx1ZTogJ1JlbGF0ZWQgRG9jdW1lbnRzJywgc2VjdGlvblBhdGg6IEFDVElWSVRZX0RPQ1VNRU5UUyB9LFxuICBdO1xuXG4vKiogQ29sdW1uIGNvdW50cyBmb3IgZWFjaCBzZWN0aW9uICoqL1xuY29uc3QgQUNUSVZJVFlfSU5URVJOQUxfSURTX0NPTFMgPSAzO1xuY29uc3QgQUNUSVZJVFlfUExBTk5JTkdfQ09MUyA9IDI7XG5jb25zdCBBQ1RJVklUWV9MT0NBVElPTl9DT0xTID0gMztcbmNvbnN0IEFDVElWSVRZX0ZVTkRJTkdfQ09MUyA9IDI7XG5jb25zdCBBQ1RJVklUWV9DT05UQUNUX0NPTFMgPSAyO1xuY29uc3QgQVBfRlVORElOR1NfVEFCTEVfQ09MUyA9IDQ7XG5cbmNvbnN0IE1VTFRJX1NFTEVDVF9NSU5fU0laRSA9IDg7XG5jb25zdCBNVUxUSV9TRUxFQ1RfTUFYX1NJWkUgPSA4O1xuXG4vLyBUT0RPOiBtb3ZlIHRoZXNlIGZ1bmN0aW9ucyB0byBhbiBVdGlscyBjbGFzcy5cbmNvbnN0IHRvRmllbGROYW1lcyA9IGZ1bmN0aW9uIChsaXN0T2ZOYW1lcykge1xuICByZXR1cm4gbGlzdE9mTmFtZXMubWFwKG5hbWUgPT4gdG9GaWVsZE5hbWUobmFtZSkpO1xufTtcblxuLyoqXG4gKiBDb252ZXJ0cyB0aGUgb3JpZ2luYWwgbm9uLXRyYW5zbGF0ZWQgbGFiZWwgdG8gaW50ZXJuYWwgZmllbGQgbmFtZVxuICogQHBhcmFtIG5hbWVcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xuY29uc3QgdG9GaWVsZE5hbWUgPSBmdW5jdGlvbiAobmFtZTogc3RyaW5nKSB7XG4gIHJldHVybiBuYW1lLnRvTG93ZXJDYXNlKCkucmVwbGFjZSgnICcsICdfJyk7XG59O1xuXG4vKipcbiAqIENvbnZlcnRzIHRoZSBpbnRlcm5hbCBmaWVsZCBuYW1lIHRvIHRoZSBPcmlnaW5hbCBub24tdHJhbnNsYXRlZCBsYWJlbFxuICogQHBhcmFtIGZpZWxkTmFtZVxuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5jb25zdCB0b09yaWdpbmFsTGFiZWwgPSBmdW5jdGlvbiAoZmllbGROYW1lOiBzdHJpbmcpIHtcbiAgcmV0dXJuIGNhcGl0YWxpemUoZmllbGROYW1lLnJlcGxhY2UoJ18nLCAnICcpKTtcbn07XG5cbi8vIFRPRE86IG1vdmUgYWdhaW4gaW5zaWRlIGEgc2hhcmVkIFV0aWxzIGNsYXNzIGJlY2F1c2UgdGhpcyBpcyBhIGNvcHkgZnJvbSBVdGlscy5qc1xuY29uc3QgY2FwaXRhbGl6ZSA9IGZ1bmN0aW9uICh0ZXh0OiBzdHJpbmcpIHtcbiAgcmV0dXJuIHRleHQucmVwbGFjZSgvKD86XnxcXHMpXFxTL2csIGNoYXIgPT4gY2hhci50b1VwcGVyQ2FzZSgpKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE9iamVjdC5mcmVlemUoe1xuICBBQ1RJVklUWV9CVURHRVQsXG4gIEFDVElWSVRZX1NUQVRVUyxcbiAgU1RBVFVTX1JFQVNPTixcbiAgRklOQU5DSUFMX0lOU1RSVU1FTlQsXG4gIFRZUEVfT0ZfSU1QTEVNRU5UQVRJT04sXG4gIE9CSkVDVElWRSxcbiAgUkVTVUxUUyxcbiAgQlVER0VUX0NPREVfUFJPSkVDVF9JRCxcbiAgQUNUVUFMX0FQUFJPVkFMX0RBVEUsXG4gIEZVTkRJTkdTLFxuICBGVU5ESU5HX0RPTk9SX09SR19JRCxcbiAgSVNfRFJBRlQsXG4gIE9SR19ST0xFX09SR19JRCxcbiAgQURESVRJT05BTF9JTkZPLFxuICBQUklNQVJZX1NFQ1RPUlMsXG4gIFNFQ09OREFSWV9TRUNUT1JTLFxuICBURVJUSUFSWV9TRUNUT1JTLFxuICBUQUdfU0VDVE9SUyxcbiAgU0VDVE9SLFxuICBTRUNUT1JfUEVSQ0VOVEFHRSxcbiAgRklOQU5DSU5HX0lOU1RSVU1FTlQsXG4gIE1PREFMSVRJRVMsXG4gIExJTkVfTUlOSVNUUllfUkFOSyxcbiAgR09WRVJOTUVOVF9BR1JFRU1FTlRfTlVNQkVSLFxuICBGVU5ESU5HX1NUQVRVUyxcbiAgTE9DQVRJT05TLFxuICBMT0NBVElPTixcbiAgTE9DQVRJT05fUEVSQ0VOVEFHRSxcbiAgSU1QTEVNRU5UQVRJT05fTE9DQVRJT04sXG4gIElNUExFTUVOVEFUSU9OX0xFVkVMLFxuICBBUFBST1ZBTF9TVEFUVVMsXG4gIEFQUFJPVkVEX0JZLFxuICBBUFBST1ZBTF9EQVRFLFxuICBUWVBFX09GX0FTU0lTVEFOQ0UsXG4gIEVYUEVORElUVVJFX0NMQVNTLFxuICBGVU5ESU5HX0RFVEFJTFMsXG4gIE1PREVfT0ZfUEFZTUVOVCxcbiAgRlVORElOR19DTEFTU0lGSUNBVElPTl9EQVRFLFxuICBBR1JFRU1FTlQsXG4gIERPTk9SX09CSkVDVElWRSxcbiAgQ09ORElUSU9OUyxcbiAgQUdSRUVNRU5UX0NPREUsXG4gIEFHUkVFTUVOVF9USVRMRSxcbiAgUFJPSkVDVF9DQVRFR09SWSxcbiAgUFJPSkVDVF9JTVBMRU1FTlRJTkdfVU5JVCxcbiAgT1JHQU5JWkFUSU9OLFxuICBQRVJDRU5UQUdFLFxuICBBTVBfT1JHQU5JWkFUSU9OX1JPTEVfSUQsXG4gIFJPTEUsXG4gIEVYRUNVVElOR19BR0VOQ1ksXG4gIENPTlRSQUNUSU5HX0FHRU5DWSxcbiAgQkVORUZJQ0lBUllfQUdFTkNZLFxuICBJTVBMRU1FTlRJTkdfQUdFTkNZLFxuICBSRVNQT05TSUJMRV9PUkdBTklaQVRJT04sXG4gIERPTk9SX09SR0FOSVpBVElPTixcbiAgUkVHSU9OQUxfR1JPVVAsXG4gIFNFQ1RPUl9HUk9VUCxcbiAgQlVER0VUUyxcbiAgQlVER0VUX0NPREUsXG4gIEJVREdFVF9PUkdBTklaQVRJT05fQ09ERSxcbiAgQVJDSElWRUQsXG4gIFRSQU5TQUNUSU9OX0RBVEUsXG4gIFRSQU5TQUNUSU9OX1RZUEUsXG4gIENPTU1JVE1FTlRTLFxuICBESVNCVVJTRU1FTlRTLFxuICBFWFBFTkRJVFVSRVMsXG4gIEVTVElNQVRFRF9ESVNCVVJTRU1FTlRTLFxuICBUUkFOU0FDVElPTl9BTU9VTlQsXG4gIEFESlVTVE1FTlRfVFlQRSxcbiAgQUNUVUFMX1NUQVJUX0RBVEUsXG4gIFBST1BPU0VEX1NUQVJUX0RBVEUsXG4gIEFDVFVBTF9DT01QTEVUSU9OX0RBVEUsXG4gIENPTlRSQUNUSU5HX0RBVEUsXG4gIERJU0JVUlNFTUVOVF9EQVRFLFxuICBQUk9QT1NFRF9BUFBST1ZBTF9EQVRFLFxuICBPUklHSU5BTF9DT01QTEVUSU9OX0RBVEUsXG4gIFBST1BPU0VEX0NPTVBMRVRJT05fREFURSxcbiAgRklOQUxfREFURV9GT1JfRElTQlVSU0VNRU5UUyxcbiAgRklOQUxfREFURV9GT1JfQ09OVFJBQ1RJTkcsXG4gIEVGRkVDVElWRV9GVU5ESU5HX0RBVEUsXG4gIEZVTkRJTkdfQ0xPU0lOR19EQVRFLFxuICBSQVRJRklDQVRJT05fREFURSxcbiAgTUFUVVJJVFksXG4gIExBU1RfQVVESVRfREFURSxcbiAgU0lHTkFUVVJFX0RBVEUsXG4gIEhVTUFOSVRBUklBTl9BSUQsXG4gIERJU0FTVEVSX1JFU1BPTlNFLFxuICBQUk9HUkFNLFxuICBQUk9HUkFNX1BFUkNFTlRBR0UsXG4gIFBST0dSQU1fU0VUVElOR1MsXG4gIE5BVElPTkFMX1BMQU5fT0JKRUNUSVZFLFxuICBQUklNQVJZX1BST0dSQU1TLFxuICBTRUNPTkRBUllfUFJPR1JBTVMsXG4gIFRFUlRJQVJfUFJPR1JBTVMsXG4gIEdPVkVSTk1FTlRfQVBQUk9WQUxfUFJPQ0VEVVJFUyxcbiAgSk9JTlRfQ1JJVEVSSUEsXG4gIFRFQU0sXG4gIFJFSkVDVEVEX0lELFxuICBJTlRFUk5BTF9JRCxcbiAgQU1QX0lELFxuICBQUk9KRUNUX1RJVExFLFxuICBERVNDUklQVElPTixcbiAgTU9ESUZJRURfQlksXG4gIE1PRElGSUVEX09OLFxuICBDUkVBVEVEX0JZLFxuICBDUkVBVEVEX09OLFxuICBMQVNUX0lNUE9SVEVEX0JZLFxuICBDTElFTlRfQ0hBTkdFX0lELFxuICBDTElFTlRfQ1JFQVRFRF9PTixcbiAgQ0xJRU5UX1VQREFURURfT04sXG4gIElTX1BVU0hFRCxcbiAgQUNUSVZJVFlfR1JPVVAsXG4gIFZFUlNJT04sXG4gIFBST0pFQ1RfQ09NTUVOVFMsXG4gIExFU1NPTlNfTEVBUk5FRCxcbiAgUFJPSkVDVF9JTVBBQ1QsXG4gIEFDVElWSVRZX1NVTU1BUlksXG4gIENPTkRJVElPTkFMSVRJRVMsXG4gIFBST0pFQ1RfTUFOQUdFTUVOVCxcbiAgQV9DX0NIQVBURVIsXG4gIENSSVNfTlVNQkVSLFxuICBJQVRJX0lERU5USUZJRVIsXG4gIEFDVElWSVRZX0lOVEVSTkFMX0lEUyxcbiAgSElFUkFSQ0hJQ0FMX1ZBTFVFLFxuICBISUVSQVJDSElDQUxfVkFMVUVfUEFSVFMsXG4gIEhJRVJBUkNISUNBTF9WQUxVRV9ERVBUSCxcbiAgUFBDX0FNT1VOVCxcbiAgUlBDX0FNT1VOVCxcbiAgUFBDX0FOTlVBTF9CVURHRVRTLFxuICBBTU9VTlQsXG4gIENVUlJFTkNZLFxuICBGVU5ESU5HX0RBVEUsXG4gIENPTVBPTkVOVFMsXG4gIFRPVEFMX05VTUJFUl9PRl9GVU5ESU5HX1NPVVJDRVMsXG4gIFNPVVJDRV9ST0xFLFxuICBBTVBfRlVORElOR19JRCxcbiAgSVNTVUVTLFxuICBJU1NVRV9EQVRFLFxuICBJU1NVRV9OQU1FLFxuICBNRUFTVVJFUyxcbiAgTUVBU1VSRV9OQU1FLFxuICBNRUFTVVJFX0RBVEUsXG4gIEFDVE9SUyxcbiAgQUNUT1JfTkFNRSxcbiAgU1RSVUNUVVJFUyxcbiAgU1RSVUNUVVJFU19USVRMRSxcbiAgU1RSVUNUVVJFU19ERVNDUklQVElPTixcbiAgU1RSVUNUVVJFU19MQVRJVFVERSxcbiAgU1RSVUNUVVJFU19MT05HSVRVREUsXG4gIFNUUlVDVFVSRVNfQ09MT1IsXG4gIFNUUlVDVFVSRVNfTEFULFxuICBTVFJVQ1RVUkVTX0xORyxcbiAgU1RSVUNUVVJFU19TSEFQRSxcbiAgU1RSVUNUVVJFU19QT0lOVCxcbiAgU1RSVUNUVVJFU19QT0xZR09OLFxuICBTVFJVQ1RVUkVTX1BPTFlMSU5FLFxuICBTVFJVQ1RVUkVTX0NPT1JESU5BVEVTLFxuICBDT01QT05FTlRfVFlQRSxcbiAgQ09NUE9ORU5UX1RJVExFLFxuICBDT01QT05FTlRfRlVORElORyxcbiAgQ09NUE9ORU5UX0RFU0NSSVBUSU9OLFxuICBDT01QT05FTlRfT1JHQU5JWkFUSU9OLFxuICBGVU5ESU5HX0FNT1VOVF9JRCxcbiAgRVhUUkFfSU5GTyxcbiAgVkFMVUUsXG4gIEFDUk9OWU0sXG4gIFRZUEVfT0ZfQ09PUEVSQVRJT04sXG4gIEFOTlVBTF9QUk9KRUNUX0JVREdFVF9JRCxcbiAgVFlQRSxcbiAgWUVBUixcbiAgR1JPVVBfVkVSU0lPTkVEX0ZVTkRJTkcsXG4gIEFDVElWRV9MSVNULFxuICBBQ1RJVkUsXG4gIERFTEVHQVRFRF9DT09QRVJBVElPTixcbiAgREVMRUdBVEVEX1BBUlRORVIsXG4gIEZJTkFOQ0lOR19JRCxcbiAgRElTQlVSU0VNRU5UX09SREVSX0lELFxuICBQTEVER0UsXG4gIENBUElUQUxfU1BFTkRJTkdfUEVSQ0VOVEFHRSxcbiAgUkVQT1JUSU5HX0RBVEUsXG4gIFJFQ0lQSUVOVF9ST0xFLFxuICBSRUNJUElFTlRfT1JHQU5JWkFUSU9OLFxuICBURU1QT1JBTF9JRCxcbiAgTUlOSVNUUllfQ09ERSxcbiAgUFJPSkVDVF9DT0RFLFxuICBGWSxcbiAgSU5ESVJFQ1RfT05fQlVER0VULFxuICBJTVBMRU1FTlRBVElPTl9MRVZFTFNfRVhUUkFfSU5GTyxcbiAgSU1QTEVNRU5UQVRJT05fTE9DQVRJT05fRVhUUkFfSU5GTyxcbiAgRE9OT1JfQ09OVEFDVCxcbiAgUFJPSkVDVF9DT09SRElOQVRPUl9DT05UQUNULFxuICBTRUNUT1JfTUlOSVNUUllfQ09OVEFDVCxcbiAgTU9GRURfQ09OVEFDVCxcbiAgSU1QTEVNRU5USU5HX0VYRUNVVElOR19BR0VOQ1lfQ09OVEFDVCxcbiAgQ09OVEFDVCxcbiAgT1JHQU5JWkFUSU9OX0dST1VQLFxuICBGSVhFRF9FWENIQU5HRV9SQVRFLFxuICBQUklNQVJZX0NPTlRBQ1QsXG4gIEFDVElWSVRZX0RPQ1VNRU5UUyxcbiAgRE9DVU1FTlRfVFlQRSxcbiAgSVNPMixcbiAgTVRFRl9QUk9KRUNUSU9OUyxcbiAgUFJPSkVDVElPTixcbiAgUElQRUxJTkUsXG4gIFBST0pFQ1RJT05fREFURSxcbiAgU0FNRV9BU19QUk9QT1NFRF9TVEFSVF9EQVRFX0xBQkVMLFxuICBTQU1FX0FTX1BST1BPU0VEX0FQUFJPVkFMX0RBVEVfTEFCRUwsXG4gIERFUEVOREVOQ1lfSU1QTEVNRU5UQVRJT05fTEVWRUxfUFJFU0VOVCxcbiAgREVQRU5ERU5DWV9JTVBMRU1FTlRBVElPTl9MRVZFTF9WQUxJRCxcbiAgREVQRU5ERU5DWV9JTVBMRU1FTlRBVElPTl9MT0NBVElPTl9QUkVTRU5ULFxuICBERVBFTkRFTkNZX0lNUExFTUVOVEFUSU9OX0xPQ0FUSU9OX1ZBTElELFxuICBERVBFTkRFTkNZX1BST0pFQ1RfQ09ERV9PTl9CVURHRVQsXG4gIERFUEVOREVOQ1lfT05fQlVER0VULFxuICBERVBFTkRFTkNZX1RSQU5TQUNUSU9OX1BSRVNFTlQsXG4gIERFUEVOREVOQ1lfQ09NUE9ORU5UX0ZVTkRJTkdfT1JHX1ZBTElELFxuICBBUF9TRUNUSU9OX0lEUyxcbiAgQUNUSVZJVFlfSU5URVJOQUxfSURTX0NPTFMsXG4gIEFDVElWSVRZX1BMQU5OSU5HX0NPTFMsXG4gIEFDVElWSVRZX0xPQ0FUSU9OX0NPTFMsXG4gIEFDVElWSVRZX0ZVTkRJTkdfQ09MUyxcbiAgQUNUSVZJVFlfQ09OVEFDVF9DT0xTLFxuICBBUF9GVU5ESU5HU19UQUJMRV9DT0xTLFxuICBNVUxUSV9TRUxFQ1RfTUlOX1NJWkUsXG4gIE1VTFRJX1NFTEVDVF9NQVhfU0laRSxcbiAgdG9GaWVsZE5hbWVzLFxuICB0b0ZpZWxkTmFtZSxcbiAgdG9PcmlnaW5hbExhYmVsLFxuICBjYXBpdGFsaXplXG59KTtcbiIsImNvbnN0IE5PVElGSUNBVElPTl9PUklHSU5fQVBJX1NFQ1VSSVRZID0gJ05PVElGSUNBVElPTl9PUklHSU5fQVBJX1NFQ1VSSVRZJztcbmNvbnN0IE5PVElGSUNBVElPTl9PUklHSU5fQVBJX05FVFdPUksgPSAnTk9USUZJQ0FUSU9OX09SSUdJTl9BUElfTkVUV09SSyc7XG5jb25zdCBOT1RJRklDQVRJT05fT1JJR0lOX0FQSV9TWU5DVVAgPSAnTk9USUZJQ0FUSU9OX09SSUdJTl9BUElfU1lOQ1VQJztcbmNvbnN0IE5PVElGSUNBVElPTl9PUklHSU5fQVBJX0dFTkVSQUwgPSAnTk9USUZJQ0FUSU9OX09SSUdJTl9BUElfR0VORVJBTCc7XG5jb25zdCBOT1RJRklDQVRJT05fT1JJR0lOX0RBVEFCQVNFID0gJ05PVElGSUNBVElPTl9PUklHSU5fREFUQUJBU0UnO1xuY29uc3QgTk9USUZJQ0FUSU9OX09SSUdJTl9BVVRIRU5USUNBVElPTiA9ICdOT1RJRklDQVRJT05fT1JJR0lOX0FVVEhFTlRJQ0FUSU9OJztcbmNvbnN0IE5PVElGSUNBVElPTl9PUklHSU5fV09SS1NQQUNFX0ZJTFRFUiA9ICdOT1RJRklDQVRJT05fT1JJR0lOX1dPUktTUEFDRV9GSUxURVInO1xuY29uc3QgTk9USUZJQ0FUSU9OX09SSUdJTl9XT1JLU1BBQ0UgPSAnTk9USUZJQ0FUSU9OX09SSUdJTl9XT1JLU1BBQ0UnO1xuY29uc3QgTk9USUZJQ0FUSU9OX09SSUdJTl9TWU5DVVBfUFJPQ0VTUyA9ICdOT1RJRklDQVRJT05fT1JJR0lOX1NZTkNVUF9QUk9DRVNTJztcbmNvbnN0IE5PVElGSUNBVElPTl9PUklHSU5fQ1VSUkVOQ1lfTUFOQUdFUiA9ICdOT1RJRklDQVRJT05fT1JJR0lOX0NVUlJFTkNZX01BTkFHRVInO1xuY29uc3QgTk9USUZJQ0FUSU9OX09SSUdJTl9EQVRFUyA9ICdOT1RJRklDQVRJT05fT1JJR0lOX0RBVEVTJztcbmNvbnN0IE5PVElGSUNBVElPTl9PUklHSU5fQUNUSVZJVFkgPSAnTk9USUZJQ0FUSU9OX09SSUdJTl9BQ1RJVklUWSc7XG5jb25zdCBOT1RJRklDQVRJT05fT1JJR0lOX1JFU09VUkNFID0gJ05PVElGSUNBVElPTl9PUklHSU5fUkVTT1VSQ0UnO1xuY29uc3QgTk9USUZJQ0FUSU9OX09SSUdJTl9JMThORVhUID0gJ05PVElGSUNBVElPTl9PUklHSU5fSTE4TkVYVCc7XG5jb25zdCBOT1RJRklDQVRJT05fT1JJR0lOX1VQREFURV9DSEVDSyA9ICdOT1RJRklDQVRJT05fT1JJR0lOX1VQREFURV9DSEVDSyc7XG5jb25zdCBOT1RJRklDQVRJT05fT1JJR0lOX1VQREFURSA9ICdOT1RJRklDQVRJT05fT1JJR0lOX1VQREFURSc7XG5jb25zdCBOT1RJRklDQVRJT05fT1JJR0lOX1NFVFVQID0gJ05PVElGSUNBVElPTl9PUklHSU5fU0VUVVAnO1xuY29uc3QgTk9USUZJQ0FUSU9OX09SSUdJTl9TRVRUSU5HUyA9ICdOT1RJRklDQVRJT05fT1JJR0lOX1NFVFRJTkdTJztcblxuY29uc3QgTk9USUZJQ0FUSU9OX1NFVkVSSVRZX1dBUk5JTkcgPSAnTk9USUZJQ0FUSU9OX1NFVkVSSVRZX1dBUk5JTkcnO1xuY29uc3QgTk9USUZJQ0FUSU9OX1NFVkVSSVRZX0lORk8gPSAnTk9USUZJQ0FUSU9OX1NFVkVSSVRZX0lORk8nO1xuY29uc3QgTk9USUZJQ0FUSU9OX1NFVkVSSVRZX0VSUk9SID0gJ05PVElGSUNBVElPTl9TRVZFUklUWV9FUlJPUic7XG5cbmNvbnN0IE5PVElGSUNBVElPTl9FUlJPUl9MRVZFTF9NSU5PUiA9ICdOT1RJRklDQVRJT05fRVJST1JfTEVWRUxfTUlOT1InO1xuY29uc3QgTk9USUZJQ0FUSU9OX0VSUk9SX0xFVkVMX0JMT0NLRVIgPSAnTk9USUZJQ0FUSU9OX0VSUk9SX0xFVkVMX0JMT0NLRVInO1xuXG5jb25zdCBOT1RJRklDQVRJT05fT1JJR0lOX1dST05HX01FVEhPRF9VU0FHRSA9ICdOT1RJRklDQVRJT05fT1JJR0lOX1dST05HX01FVEhPRF9VU0FHRSc7XG5cbmNvbnN0IEVSUk9SX0NPREVfTk9fQ09OTkVDVElWSVRZID0gJ05PX0NPTk5FQ1RJVklUWSc7XG5jb25zdCBFUlJPUl9DT0RFX0FDQ0VTU19ERU5JRUQgPSAnQUNDRVNTX0RFTklFRCc7XG5cblxuY29uc3QgTVNHX0lOVkFMSURfVVJMID0gJ2ludmFsaWRVcmwnO1xuY29uc3QgTVNHX1RJTUVPVVQgPSAndGltZW91dEVycm9yJztcbmNvbnN0IE1TR19VTktOT1dOX05FVFdPUktfRVJST1IgPSAndW5rbm93bk5ldHdvcmtFcnJvcic7XG5jb25zdCBNU0dfQU1QX1VOUkVBQ0hBQkxFID0gJ0FNUFVucmVhY2hhYmxlRXJyb3InO1xuY29uc3QgR0VORVJBTF9DT05ORUNUSU9OX0VSUk9SUyA9IFtNU0dfSU5WQUxJRF9VUkwsIE1TR19USU1FT1VULCBNU0dfVU5LTk9XTl9ORVRXT1JLX0VSUk9SLCBNU0dfQU1QX1VOUkVBQ0hBQkxFXTtcblxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuZnJlZXplKHtcbiAgTk9USUZJQ0FUSU9OX09SSUdJTl9BUElfU0VDVVJJVFksXG4gIE5PVElGSUNBVElPTl9PUklHSU5fQVBJX05FVFdPUkssXG4gIE5PVElGSUNBVElPTl9PUklHSU5fQVBJX1NZTkNVUCxcbiAgTk9USUZJQ0FUSU9OX09SSUdJTl9BUElfR0VORVJBTCxcbiAgTk9USUZJQ0FUSU9OX09SSUdJTl9EQVRBQkFTRSxcbiAgTk9USUZJQ0FUSU9OX09SSUdJTl9BVVRIRU5USUNBVElPTixcbiAgTk9USUZJQ0FUSU9OX09SSUdJTl9XT1JLU1BBQ0VfRklMVEVSLFxuICBOT1RJRklDQVRJT05fT1JJR0lOX1dPUktTUEFDRSxcbiAgTk9USUZJQ0FUSU9OX09SSUdJTl9TWU5DVVBfUFJPQ0VTUyxcbiAgTk9USUZJQ0FUSU9OX09SSUdJTl9DVVJSRU5DWV9NQU5BR0VSLFxuICBOT1RJRklDQVRJT05fT1JJR0lOX0RBVEVTLFxuICBOT1RJRklDQVRJT05fT1JJR0lOX0FDVElWSVRZLFxuICBOT1RJRklDQVRJT05fT1JJR0lOX1JFU09VUkNFLFxuICBOT1RJRklDQVRJT05fT1JJR0lOX0kxOE5FWFQsXG4gIE5PVElGSUNBVElPTl9PUklHSU5fVVBEQVRFX0NIRUNLLFxuICBOT1RJRklDQVRJT05fT1JJR0lOX1VQREFURSxcbiAgTk9USUZJQ0FUSU9OX09SSUdJTl9TRVRVUCxcbiAgTk9USUZJQ0FUSU9OX09SSUdJTl9TRVRUSU5HUyxcblxuICBOT1RJRklDQVRJT05fU0VWRVJJVFlfV0FSTklORyxcbiAgTk9USUZJQ0FUSU9OX1NFVkVSSVRZX0lORk8sXG4gIE5PVElGSUNBVElPTl9TRVZFUklUWV9FUlJPUixcblxuICBOT1RJRklDQVRJT05fRVJST1JfTEVWRUxfTUlOT1IsXG4gIE5PVElGSUNBVElPTl9FUlJPUl9MRVZFTF9CTE9DS0VSLFxuXG4gIE5PVElGSUNBVElPTl9PUklHSU5fV1JPTkdfTUVUSE9EX1VTQUdFLFxuXG4gIEVSUk9SX0NPREVfTk9fQ09OTkVDVElWSVRZLFxuICBFUlJPUl9DT0RFX0FDQ0VTU19ERU5JRUQsXG5cblxuICBNU0dfSU5WQUxJRF9VUkwsXG4gIE1TR19USU1FT1VULFxuICBNU0dfVU5LTk9XTl9ORVRXT1JLX0VSUk9SLFxuICBNU0dfQU1QX1VOUkVBQ0hBQkxFLFxuICBHRU5FUkFMX0NPTk5FQ1RJT05fRVJST1JTXG59KVxuO1xuIiwiaW1wb3J0IFRlc3RBUEZpZWxkIGZyb20gJy4vYWN0aXZpdHlQcmV2aWV3L2NvbXBvbmVudHMvVGVzdEFQRmllbGQnO1xuaW1wb3J0IFRlc3RpbmdTZWN0aW9uIGZyb20gJy4vYWN0aXZpdHlQcmV2aWV3L2NvbXBvbmVudHMvVGVzdGluZ1NlY3Rpb24nO1xuaW1wb3J0IENvbnN0YW50cyBmcm9tICcuL3V0aWxzL0NvbnN0YW50cyc7XG5pbXBvcnQgQWN0aXZpdHlDb25zdGFudHMgZnJvbSAnLi9tb2R1bGVzL3V0aWwvQWN0aXZpdHlDb25zdGFudHMnO1xuaW1wb3J0IEZlYXR1cmVNYW5hZ2VyQ29uc3RhbnRzIGZyb20gJy4vbW9kdWxlcy91dGlsL0ZlYXR1cmVNYW5hZ2VyQ29uc3RhbnRzJztcbmltcG9ydCBFcnJvckNvbnN0YW50cyBmcm9tICcuL3V0aWxzL2NvbnN0YW50cy9FcnJvckNvbnN0YW50cyc7XG5cbmV4cG9ydCB7IFRlc3RBUEZpZWxkLCBUZXN0aW5nU2VjdGlvbiwgQ29uc3RhbnRzLCBBY3Rpdml0eUNvbnN0YW50cywgRmVhdHVyZU1hbmFnZXJDb25zdGFudHMsIEVycm9yQ29uc3RhbnRzIH07XG5cbmV4cG9ydCBkZWZhdWx0IHsgVGVzdEFQRmllbGQsIFRlc3RpbmdTZWN0aW9uLCBDb25zdGFudHMsIEFjdGl2aXR5Q29uc3RhbnRzLCBGZWF0dXJlTWFuYWdlckNvbnN0YW50cywgRXJyb3JDb25zdGFudHMgfTtcbiJdLCJuYW1lcyI6WyJUZXN0QVBGaWVsZCIsInRybkxhYmVsIiwidmFsdWUiLCJpbmxpbmUiLCJzZXBhcmF0b3IiLCJuYW1lQ2xhc3MiLCJ2YWx1ZUNsYXNzIiwicHJvcHMiLCJ0cmFuc2xhdGUiLCJhbXBMb2dnZXIiLCJsb2ciLCJ1c2VTZXBhcmF0b3IiLCJkaXNwbGF5Q2xhc3MiLCJmaWVsZENsYXNzIiwic3R5bGVzIiwiYmxvY2siLCJjbGFzc05hbWVzIiwiZmllbGRWYWx1ZUNsYXNzIiwiZGlzcGxheVZhbHVlIiwiQXJyYXkiLCJpc0FycmF5IiwiT2JqZWN0IiwiZm9yRWFjaCIsInB1c2giLCJ2Iiwic29ydCIsImpvaW4iLCJTdHJpbmciLCJ1c2VJbm5lckhUTUwiLCJfX2h0bWwiLCJmaWVsZE5hbWVDbGFzcyIsInRpdGxlIiwiX2dldFZhbHVlIiwiQ29tcG9uZW50IiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwiYW55IiwiYm9vbCIsIm9iamVjdCIsImlzUmVxdWlyZWQiLCJmdW5jIiwiVGVzdGluZ1NlY3Rpb24iLCJTRVJWRVJfVVJMIiwiQkFTRV9SRVNUX1VSTCIsIlBST1RPQ09MIiwiQkFTRV9QT1JUIiwiQ09OTkVDVElPTl9USU1FT1VUIiwiQ09OTkVDVElPTl9GT1JDRURfVElNRU9VVCIsIlRJTUVPVVRfQ0hFQ0tfSU5URVJWQUwiLCJNQVhfUkVUUllfQVRFTVBUUyIsIkVSUk9SU19UT19SRVRSWSIsIkVSUk9SU19OT19BTVBfU0VSVkVSIiwiQ09OTkVDVElWSVRZX0NIRUNLX0lOVEVSVkFMIiwiV09SS1NQQUNFX1VSTCIsIkxPR0lOX1VSTCIsIkRFU0tUT1BfVVJMIiwiREVTS1RPUF9DVVJSRU5UX1VSTCIsIlNZTkNVUF9SRURJUkVDVF9VUkwiLCJTWU5DVVBfSElTVE9SWV9UQVJHRVQiLCJTWU5DVVBfU1VNTUFSWV9VUkwiLCJBQ1RJVklUWV9QUkVWSUVXX1VSTCIsIkFDVElWSVRZX0VESVRfVVJMIiwiVVBEQVRFX1VSTCIsIlNFVFVQX1VSTCIsIlNFVFRJTkdTX1VSTCIsIkNPTExFQ1RJT05fVVNFUlMiLCJDT0xMRUNUSU9OX1dPUktQQUNFUyIsIkNPTExFQ1RJT05fVEVBTU1FTUJFUlMiLCJDT0xMRUNUSU9OX0NMSUVOVF9TRVRUSU5HUyIsIkNPTExFQ1RJT05fR0xPQkFMX1NFVFRJTkdTIiwiQ09MTEVDVElPTl9BQ1RJVklUSUVTIiwiQ09MTEVDVElPTl9GSUVMRFMiLCJDT0xMRUNUSU9OX1BPU1NJQkxFX1ZBTFVFUyIsIkNPTExFQ1RJT05fU1lOQ1VQX0xPRyIsIkNPTExFQ1RJT05fTEFOR1MiLCJDT0xMRUNUSU9OX1dTX1NFVFRJTkdTIiwiQ09MTEVDVElPTl9DVVJSRU5DWV9SQVRFUyIsIkNPTExFQ1RJT05fRkVBVFVSRV9NQU5BR0VSIiwiQ09MTEVDVElPTl9DT05UQUNUUyIsIkNPTExFQ1RJT05fUkVTT1VSQ0VTIiwiQ09MTEVDVElPTl9SRVBPU0lUT1JZIiwiQ09MTEVDVElPTl9HQVpFVFRFRVIiLCJDT0xMRUNUSU9OX0NBTEVOREFSUyIsIkNPTExFQ1RJT05fQ0hBTkdFU0VUUyIsIkdBWkVUVEVFUl9ESVNUQU5DRV9ESVZJREUiLCJEQl9GSUxFX1BSRUZJWCIsIkRCX0ZJTEVfRVhURU5TSU9OIiwiREJfQ09NTU9OX0RBVEFTVE9SRV9PUFRJT05TIiwiYXV0b2xvYWQiLCJjb3JydXB0QWxlcnRUaHJlc2hvbGQiLCJEQl9BVVRPQ09NUEFDVF9JTlRFUlZBTF9NSUxJU0VDT05EUyIsIkRCX0RFRkFVTFRfUVVFUllfTElNSVQiLCJMQU5HVUFHRV9FTkdMSVNIIiwiRlNfTE9DQUxFU19ESVJFQ1RPUlkiLCJMQU5HVUFHRV9NQVNURVJfVFJBTlNMQVRJT05TX0ZJTEUiLCJMQU5HVUFHRV9UUkFOU0xBVElPTlNfRklMRSIsIkxBTkdVQUdFX05FV19UUkFOU0xBVElPTlNfTVVTVF9TWU5DIiwiQVNBUl9ESVIiLCJBUFBfRElSRUNUT1JZIiwiVEVTVF9ESVJFQ1RPUlkiLCJTVEFUSUNfRElSIiwiSU1BR0VTX0RJUiIsIkRPQ19JQ09OUyIsIkRCX1NUQVRJQ19ESVIiLCJNSUdSQVRJT05TX0RJUiIsIkhBU0hfSVRFUkFUSU9OUyIsIkRJR0VTVF9BTEdPUklUSE1fU0hBMSIsIkRJR0VTVF9BTEdPUklUSE1fU0hBMjU2IiwiQUNUSVZJVFlfRURJVCIsIkFDVElWSVRZX1ZJRVciLCJTWU5DVVBfRk9SQ0VfREFZUyIsIlNZTkNVUF9CRVNUX0JFRk9SRV9EQVlTIiwiU1lOQ1VQX05PX0RBVEUiLCJTWU5DVVBfVFlQRV9UUkFOU0xBVElPTlMiLCJTWU5DVVBfVFlQRV9VU0VSUyIsIlNZTkNVUF9UWVBFX0FTU0VUUyIsIlNZTkNVUF9UWVBFX1dPUktTUEFDRVMiLCJTWU5DVVBfVFlQRV9HUyIsIlNZTkNVUF9UWVBFX0VYQ0hBTkdFX1JBVEVTIiwiU1lOQ1VQX1RZUEVfRkVBVFVSRV9NQU5BR0VSIiwiU1lOQ1VQX1RZUEVfV09SS1NQQUNFX01FTUJFUlMiLCJTWU5DVVBfVFlQRV9BTExfRklFTERTIiwiU1lOQ1VQX1RZUEVfQUNUSVZJVElFU19QVUxMIiwiU1lOQ1VQX1RZUEVfQUNUSVZJVElFU19QVVNIIiwiU1lOQ1VQX1RZUEVfQUNUSVZJVFlfRklFTERTIiwiU1lOQ1VQX1RZUEVfQUNUSVZJVFlfRklFTERTX1NUUlVDVFVSQUxfQ0hBTkdFUyIsIlNZTkNVUF9UWVBFX0NPTlRBQ1RTX1BVTEwiLCJTWU5DVVBfVFlQRV9DT05UQUNUU19QVVNIIiwiU1lOQ1VQX1RZUEVfQUNUSVZJVFlfUE9TU0lCTEVfVkFMVUVTIiwiU1lOQ1VQX1RZUEVfQ09OVEFDVF9GSUVMRFMiLCJTWU5DVVBfVFlQRV9DT05UQUNUX0ZJRUxEU19TVFJVQ1RVUkFMX0NIQU5HRVMiLCJTWU5DVVBfVFlQRV9DT05UQUNUX1BPU1NJQkxFX1ZBTFVFUyIsIlNZTkNVUF9UWVBFX1JFU09VUkNFU19QVUxMIiwiU1lOQ1VQX1RZUEVfUkVTT1VSQ0VTX1BVU0giLCJTWU5DVVBfVFlQRV9SRVNPVVJDRV9GSUVMRFMiLCJTWU5DVVBfVFlQRV9SRVNPVVJDRV9GSUVMRFNfU1RSVUNUVVJBTF9DSEFOR0VTIiwiU1lOQ1VQX1RZUEVfUkVTT1VSQ0VfUE9TU0lCTEVfVkFMVUVTIiwiU1lOQ1VQX1RZUEVfQ09NTU9OX1BPU1NJQkxFX1ZBTFVFUyIsIlNZTkNVUF9UWVBFX1dPUktTUEFDRV9TRVRUSU5HUyIsIlNZTkNVUF9UWVBFX01BUF9USUxFUyIsIlNZTkNVUF9UWVBFX0dBWkVUVEVFUiIsIlNZTkNVUF9UWVBFX0NBTEVOREFSUyIsIlNZTkNVUF9TVEFUVVNfU1VDQ0VTUyIsIlNZTkNVUF9TVEFUVVNfRkFJTCIsIlNZTkNVUF9TVEFUVVNfUEFSVElBTCIsIlNZTkNVUF9TVEFUVVNfQ0FOQ0VMRUQiLCJTWU5DVVBfU1lOQ19SRVFVRVNURURfQVQiLCJTWU5DVVBfU1lOQ19SRVFVRVNURURfQlkiLCJTWU5DVVBfREFURVRJTUVfRklFTEQiLCJTWU5DVVBfRElGRl9MRUZUT1ZFUiIsIlNZTkNVUF9ERVBFTkRFTkNZX0NIRUNLX0lOVEVSVkFMIiwiU1lOQ1VQX0RFVEFJTFNfU1lOQ0VEIiwiU1lOQ1VQX0RFVEFJTFNfVU5TWU5DRUQiLCJTWU5DVVBfUkVTT1VSQ0VfUFVMTF9CQVRDSF9TSVpFIiwiU1lOQ1VQX0FDVElWSVRJRVNfUFVMTF9CQVRDSF9TSVpFIiwiU1lOQ1VQX0NPTlRBQ1RTX1BVTExfQkFUQ0hfU0laRSIsIkFDVElWSVRZX1NUQVRVU19EUkFGVCIsIkFDVElWSVRZX1NUQVRVU19VTlZBTElEQVRFRCIsIkFDVElWSVRZX1NUQVRVU19WQUxJREFURUQiLCJDVVJSRU5DWV9IT1VSIiwiREVGQVVMVF9DVVJSRU5DWSIsIlJBVEVfU0FNRV9DVVJSRU5DWSIsIlJBVEVfQ1VSUkVOQ1lfTk9UX0ZPVU5EIiwiQ1VSUkVOQ1lfUEFJUiIsIlZFUlNJT05fUEFUVEVSTiIsIlZFUlNJT05fUEFUVEVSTl9HUk9VUFNfVE9fRVhUUkFDVCIsIkFNUF9DT1VOVFJZX0xPR08iLCJBU1NFVFNfRElSRUNUT1JZIiwiQkFTRV82NF9QTkdfUFJFRklYIiwiVFJBTlNQQVJFTlRfRkxBRyIsIkhFTFBfUERGX0ZJTEVOQU1FIiwiSEVMUF9ESVIiLCJFTkRTX1dJVEhfUFVOQ1RVQVRJT05fUkVHRVgiLCJNQVBfVElMRVNfRElSIiwiVElMRVNfWklQX0ZJTEUiLCJNQVBfTUFSS0VSX0lNQUdFIiwiTUFQX01BUktFUl9TSEFET1ciLCJNQVBfTUFSS0VSX0NJUkNMRV9SRUQiLCJNQVBfTUFSS0VSX0NJUkNMRV9HUkVFTiIsIlBPTFlHT05fQkFTRV9DT0xPUiIsIkRHX0NPTVBBTllfTkFNRSIsIkRHX0FERFJFU1NfMSIsIkRHX0FERFJFU1NfMiIsIkRHX0NPTlRBQ1RfSU5GTyIsIkxPR19ESVIiLCJMT0dfRklMRV9OQU1FIiwiTE9HX0ZJTEVfRVhURU5TSU9OIiwiTUVTU0FHRV9USU1FT1VUIiwiTUVTU0FHRV9ESVNBUFBFQVJfVElNRU9VVCIsIk1FU1NBR0VfQ0hFQ0tfSU5URVJWQUwiLCJNRVNTQUdFX0FOSU1BVElPTl9EVVJBVElPTiIsIklOVEVSTkFMX0RBVEVfRk9STUFUIiwiTUlOX1NVUFBPUlRFRF9ZRUFSIiwiTUFYX1NVUFBPUlRFRF9ZRUFSIiwiVVBEQVRFU19ESVIiLCJDT05URU5UX0RJU1BPU0lUSU9OX0hFQURFUiIsIlVQREFURV9UTVBfRklMRSIsIk9USEVSX0lEIiwiTlJfU1lOQ19ISVNUT1JZX0VOVFJJRVMiLCJOUl9MT0dfRklMRVMiLCJPTERfU1lOQ19MT0dTX0RVUkFUSU9OX0lTT184NjAxIiwiTlJfT0xEX1NZTkNfTE9HU19UT19LRUVQX01JTklNVU0iLCJNQVNURVJfQlJBTkNIIiwiREVWRUxPUF9CUkFOQ0giLCJSRUxFQVNFX0JSQU5DSF9SRUdFWCIsIlJFTEVBU0VfQlJBTkNIRVMiLCJESVNBQkxFX0NIQU5HRUxPR1MiLCJtb2R1bGUiLCJmcmVlemUiLCJQVUJMSUNfVklFV19DSEFOR0VfUEFTU1dPUkQiLCJQVUJMSUNfVklFV19UUk9VQkxFX1NJR05fSU4iLCJBQ1RJVklUWV9ERUxJVkVSWV9SQVRFIiwiQUNUSVZJVFlfUFJPSkVDVF9JRF9BTkRfUExBTk5JTkciLCJBQ1RJVklUWV9EVVJBVElPTl9PRl9QUk9KRUNUIiwiQUNUSVZJVFlfVEVBTV9MRUFERVIiLCJBQ1RJVklUWV9TQU1FX0FTX1BST1BPU0VEX1NUQVJUX0RBVEUiLCJBQ1RJVklUWV9TQU1FX0FTX1BST1BPU0VEX0FQUFJPVkFMX0RBVEUiLCJBQ1RJVklUWV9JREVOVElGSUNBVElPTiIsIkFDVElWSVRZX0xBU1RfVVBEQVRFRF9CWSIsIkFDVElWSVRZX0xBU1RfVVBEQVRFRF9PTiIsIkFDVElWSVRZX0ZVTkRJTkciLCJBRl9GVU5ESU5HX0ZVTkRJTkdHUk9VUF9GVU5ESU5HSVRFTSIsIkFDVElWSVRZX1NFQ1RPUlMiLCJBQ1RJVklUWV9QUklNQVJZX1NFQ1RPUlMiLCJBQ1RJVklUWV9TRUNPTkRBUllfU0VDVE9SUyIsIkFDVElWSVRZX1NUUlVDVFVSRVMiLCJBQ1RJVklUWV9TVFJVQ1RVUkVTX0FERF9TVFJVQ1RVUkUiLCJBQ1RJVklUWV9PUkdBTklaQVRJT05TIiwiQUNUSVZJVFlfT1JHQU5JWkFUSU9OU19ET05PUl9PUkdBTklaQVRJT04iLCJBQ1RJVklUWV9PUkdBTklaQVRJT05TX0JFTkVGSUNJQVJZX0FHRU5DWSIsIkFDVElWSVRZX09SR0FOSVpBVElPTlNfQ09OVFJBQ1RJTkdfQUdFTkNZIiwiQUNUSVZJVFlfT1JHQU5JWkFUSU9OU19FWEVDVVRJTkdfQUdFTkNZIiwiQUNUSVZJVFlfT1JHQU5JWkFUSU9OU19JTVBMRU1FTlRJTkdfQUdFTkNZIiwiQUNUSVZJVFlfT1JHQU5JWkFUSU9OU19SRUdJT05BTF9HUk9VUCIsIkFDVElWSVRZX09SR0FOSVpBVElPTlNfUkVMQVRFRF9HT1ZFUk5NRU5UX09SR0FOSVpBVElPTiIsIkFDVElWSVRZX09SR0FOSVpBVElPTlNfU0VDVE9SX0dST1VQIiwiQUREX0ZVTkRJTkdfQVVUTyIsIkFDVElWSVRZX09SR0FOSVpBVElPTlNfQkVORUZJQ0lBUllfQUdFTkNZX0FERF9GVU5ESU5HX0FVVE8iLCJBQ1RJVklUWV9PUkdBTklaQVRJT05TX0NPTlRSQUNUSU5HX0FHRU5DWV9BRERfRlVORElOR19BVVRPIiwiQUNUSVZJVFlfT1JHQU5JWkFUSU9OU19ET05PUl9PUkdBTklaQVRJT05fQUREX0ZVTkRJTkdfQVVUTyIsIkFDVElWSVRZX09SR0FOSVpBVElPTlNfRVhFQ1VUSU5HX0FHRU5DWV9BRERfRlVORElOR19BVVRPIiwiQUNUSVZJVFlfT1JHQU5JWkFUSU9OU19JTVBMRU1FTlRJTkdfQUdFTkNZX0FERF9GVU5ESU5HX0FVVE8iLCJBQ1RJVklUWV9PUkdBTklaQVRJT05TX1JFR0lPTkFMX0dST1VQX0FERF9GVU5ESU5HX0FVVE8iLCJBQ1RJVklUWV9PUkdBTklaQVRJT05TX1JFU1BPTlNJQkxFX09SR0FOSVpBVElPTl9BRERfRlVORElOR19BVVRPIiwiQUNUSVZJVFlfT1JHQU5JWkFUSU9OU19TRUNUT1JfR1JPVVBfQUREX0ZVTkRJTkdfQVVUTyIsIkFDVElWSVRZX0ZVTkRJTkdfU0VBUkNIIiwiQUNUSVZJVFlfRlVORElOR19TRUFSQ0hfT1JHQU5JWkFUSU9OIiwiQUNUSVZJVFlfRlVORElOR19TRUxFQ1RfT1JHX1RZUEUiLCJBQ1RJVklUWV9QUk9HUkFNIiwiQUNUSVZJVFlfUExBTk5JTkciLCJBQ1RJVklUWV9DT05UQUNUIiwiQUNUSVZJVFlfRE9DVU1FTlRTX0FERF9ET0NVTUVOVCIsIkFDVElWSVRZX0RPQ1VNRU5UU19BRERfV0VCTElOSyIsIkFDVElWSVRZX0lTU1VFU19BRERfSVNTVUUiLCJBQ1RJVklUWV9JU1NVRVNfREVMRVRFX0lTU1VFIiwiQUNUSVZJVFlfSVNTVUVTX0FERF9NRUFTVVJFIiwiQUNUSVZJVFlfSVNTVUVTX0RFTEVURV9NRUFTVVJFIiwiQUNUSVZJVFlfSVNTVUVTX0FERF9BQ1RPUiIsIkFDVElWSVRZX0lTU1VFU19ERUxFVEVfQUNUT1IiLCJBQ1RJVklUWV9ESVNCVVJTRU1FTlRTX0ZVTkRJTkdfRkxPV1NfT1JHUk9MRV9BRERfSU1QTEVNRU5USU5HX0FHRU5DWSIsIkFDVElWSVRZX0RJU0JVUlNFTUVOVFNfRlVORElOR19GTE9XU19PUkdST0xFX0FERF9DT05UUkFDVElOR19BR0VOQ1kiLCJBQ1RJVklUWV9ESVNCVVJTRU1FTlRTX0ZVTkRJTkdfRkxPV1NfT1JHUk9MRV9BRERfQkVORUZJQ0lBUllfQUdFTkNZIiwiQUNUSVZJVFlfRElTQlVSU0VNRU5UU19GVU5ESU5HX0ZMT1dTX09SR1JPTEVfQUREX0RPTk9SX09SR0FOSVpBVElPTiIsIkFDVElWSVRZX0RJU0JVUlNFTUVOVFNfRlVORElOR19GTE9XU19PUkdST0xFX0FERF9FWEVDVVRJTkdfQUdFTkNZIiwiQUNUSVZJVFlfRElTQlVSU0VNRU5UU19GVU5ESU5HX0ZMT1dTX09SR1JPTEVfQUREX1JFR0lPTkFMX0dST1VQIiwiQUNUSVZJVFlfRElTQlVSU0VNRU5UU19GVU5ESU5HX0ZMT1dTX09SR1JPTEVfQUREX1JFU1BPTlNJQkxFX09SR0FOSVpBVElPTiIsIkFDVElWSVRZX0RJU0JVUlNFTUVOVFNfRlVORElOR19GTE9XU19PUkdST0xFX0FERF9TRUNUT1JfR1JPVVAiLCJBQ1RJVklUWV9DT01NSVRNRU5UU19GVU5ESU5HX0ZMT1dTX09SR1JPTEVfQUREX0lNUExFTUVOVElOR19BR0VOQ1kiLCJBQ1RJVklUWV9DT01NSVRNRU5UU19GVU5ESU5HX0ZMT1dTX09SR1JPTEVfQUREX0NPTlRSQUNUSU5HX0FHRU5DWSIsIkFDVElWSVRZX0NPTU1JVE1FTlRTX0ZVTkRJTkdfRkxPV1NfT1JHUk9MRV9BRERfQkVORUZJQ0lBUllfQUdFTkNZIiwiQUNUSVZJVFlfQ09NTUlUTUVOVFNfRlVORElOR19GTE9XU19PUkdST0xFX0FERF9ET05PUl9PUkdBTklaQVRJT04iLCJBQ1RJVklUWV9DT01NSVRNRU5UU19GVU5ESU5HX0ZMT1dTX09SR1JPTEVfQUREX0VYRUNVVElOR19BR0VOQ1kiLCJBQ1RJVklUWV9DT01NSVRNRU5UU19GVU5ESU5HX0ZMT1dTX09SR1JPTEVfQUREX1JFR0lPTkFMX0dST1VQIiwiQUNUSVZJVFlfQ09NTUlUTUVOVFNfRlVORElOR19GTE9XU19PUkdST0xFX0FERF9SRVNQT05TSUJMRV9PUkdBTklaQVRJT04iLCJBQ1RJVklUWV9DT01NSVRNRU5UU19GVU5ESU5HX0ZMT1dTX09SR1JPTEVfQUREX1NFQ1RPUl9HUk9VUCIsIkFDVElWSVRZX0VYUEVORElUVVJFU19GVU5ESU5HX0ZMT1dTX09SR1JPTEVfQUREX0lNUExFTUVOVElOR19BR0VOQ1kiLCJBQ1RJVklUWV9FWFBFTkRJVFVSRVNfRlVORElOR19GTE9XU19PUkdST0xFX0FERF9DT05UUkFDVElOR19BR0VOQ1kiLCJBQ1RJVklUWV9FWFBFTkRJVFVSRVNfRlVORElOR19GTE9XU19PUkdST0xFX0FERF9CRU5FRklDSUFSWV9BR0VOQ1kiLCJBQ1RJVklUWV9FWFBFTkRJVFVSRVNfRlVORElOR19GTE9XU19PUkdST0xFX0FERF9ET05PUl9PUkdBTklaQVRJT04iLCJBQ1RJVklUWV9FWFBFTkRJVFVSRVNfRlVORElOR19GTE9XU19PUkdST0xFX0FERF9FWEVDVVRJTkdfQUdFTkNZIiwiQUNUSVZJVFlfRVhQRU5ESVRVUkVTX0ZVTkRJTkdfRkxPV1NfT1JHUk9MRV9BRERfUkVHSU9OQUxfR1JPVVAiLCJBQ1RJVklUWV9FWFBFTkRJVFVSRVNfRlVORElOR19GTE9XU19PUkdST0xFX0FERF9SRVNQT05TSUJMRV9PUkdBTklaQVRJT04iLCJBQ1RJVklUWV9FWFBFTkRJVFVSRVNfRlVORElOR19GTE9XU19PUkdST0xFX0FERF9TRUNUT1JfR1JPVVAiLCJNVEVGX1BST0pFQ1RJT05TIiwiTVRFRl9QUk9KRUNUSU9OU19BTU9VTlQiLCJNVEVGX1BST0pFQ1RJT05TX0NVUlJFTkNZIiwiTVRFRl9QUk9KRUNUSU9OU19QUk9KRUNUSU9OIiwiTVRFRl9QUk9KRUNUSU9OU19EQVRFIiwiQUNUSVZJVFlfQlVER0VUIiwiQUNUSVZJVFlfU1RBVFVTIiwiU1RBVFVTX1JFQVNPTiIsIkZJTkFOQ0lBTF9JTlNUUlVNRU5UIiwiVFlQRV9PRl9JTVBMRU1FTlRBVElPTiIsIk9CSkVDVElWRSIsIlJFU1VMVFMiLCJCVURHRVRfQ09ERV9QUk9KRUNUX0lEIiwiQUNUVUFMX0FQUFJPVkFMX0RBVEUiLCJGVU5ESU5HUyIsIkZVTkRJTkdfRE9OT1JfT1JHX0lEIiwiSVNfRFJBRlQiLCJPUkdfUk9MRV9PUkdfSUQiLCJBRERJVElPTkFMX0lORk8iLCJQUklNQVJZX1NFQ1RPUlMiLCJTRUNPTkRBUllfU0VDVE9SUyIsIlRFUlRJQVJZX1NFQ1RPUlMiLCJUQUdfU0VDVE9SUyIsIlNFQ1RPUiIsIlNFQ1RPUl9QRVJDRU5UQUdFIiwiRklOQU5DSU5HX0lOU1RSVU1FTlQiLCJNT0RBTElUSUVTIiwiTElORV9NSU5JU1RSWV9SQU5LIiwiR09WRVJOTUVOVF9BR1JFRU1FTlRfTlVNQkVSIiwiRlVORElOR19TVEFUVVMiLCJMT0NBVElPTlMiLCJMT0NBVElPTiIsIkxPQ0FUSU9OX1BFUkNFTlRBR0UiLCJJTVBMRU1FTlRBVElPTl9MT0NBVElPTiIsIklNUExFTUVOVEFUSU9OX0xFVkVMIiwiQVBQUk9WQUxfU1RBVFVTIiwiQVBQUk9WRURfQlkiLCJBUFBST1ZBTF9EQVRFIiwiVFlQRV9PRl9BU1NJU1RBTkNFIiwiRVhQRU5ESVRVUkVfQ0xBU1MiLCJGVU5ESU5HX0RFVEFJTFMiLCJNT0RFX09GX1BBWU1FTlQiLCJGVU5ESU5HX0NMQVNTSUZJQ0FUSU9OX0RBVEUiLCJBR1JFRU1FTlQiLCJET05PUl9PQkpFQ1RJVkUiLCJDT05ESVRJT05TIiwiQUdSRUVNRU5UX0NPREUiLCJBR1JFRU1FTlRfVElUTEUiLCJQUk9KRUNUX0NBVEVHT1JZIiwiUFJPSkVDVF9JTVBMRU1FTlRJTkdfVU5JVCIsIk9SR0FOSVpBVElPTiIsIlBFUkNFTlRBR0UiLCJBTVBfT1JHQU5JWkFUSU9OX1JPTEVfSUQiLCJST0xFIiwiRVhFQ1VUSU5HX0FHRU5DWSIsIkNPTlRSQUNUSU5HX0FHRU5DWSIsIkJFTkVGSUNJQVJZX0FHRU5DWSIsIklNUExFTUVOVElOR19BR0VOQ1kiLCJSRVNQT05TSUJMRV9PUkdBTklaQVRJT04iLCJET05PUl9PUkdBTklaQVRJT04iLCJSRUdJT05BTF9HUk9VUCIsIlNFQ1RPUl9HUk9VUCIsIkJVREdFVFMiLCJCVURHRVRfQ09ERSIsIkJVREdFVF9PUkdBTklaQVRJT05fQ09ERSIsIkFSQ0hJVkVEIiwiVFJBTlNBQ1RJT05fREFURSIsIlRSQU5TQUNUSU9OX1RZUEUiLCJDT01NSVRNRU5UUyIsIkRJU0JVUlNFTUVOVFMiLCJFWFBFTkRJVFVSRVMiLCJFU1RJTUFURURfRElTQlVSU0VNRU5UUyIsIlRSQU5TQUNUSU9OX0FNT1VOVCIsIkFESlVTVE1FTlRfVFlQRSIsIkFDVFVBTF9TVEFSVF9EQVRFIiwiUFJPUE9TRURfU1RBUlRfREFURSIsIkFDVFVBTF9DT01QTEVUSU9OX0RBVEUiLCJDT05UUkFDVElOR19EQVRFIiwiRElTQlVSU0VNRU5UX0RBVEUiLCJQUk9QT1NFRF9BUFBST1ZBTF9EQVRFIiwiT1JJR0lOQUxfQ09NUExFVElPTl9EQVRFIiwiUFJPUE9TRURfQ09NUExFVElPTl9EQVRFIiwiRklOQUxfREFURV9GT1JfRElTQlVSU0VNRU5UUyIsIkZJTkFMX0RBVEVfRk9SX0NPTlRSQUNUSU5HIiwiRUZGRUNUSVZFX0ZVTkRJTkdfREFURSIsIkZVTkRJTkdfQ0xPU0lOR19EQVRFIiwiUkFUSUZJQ0FUSU9OX0RBVEUiLCJNQVRVUklUWSIsIkxBU1RfQVVESVRfREFURSIsIlNJR05BVFVSRV9EQVRFIiwiSFVNQU5JVEFSSUFOX0FJRCIsIkRJU0FTVEVSX1JFU1BPTlNFIiwiUFJPR1JBTSIsIlBST0dSQU1fUEVSQ0VOVEFHRSIsIlBST0dSQU1fU0VUVElOR1MiLCJOQVRJT05BTF9QTEFOX09CSkVDVElWRSIsIlBSSU1BUllfUFJPR1JBTVMiLCJTRUNPTkRBUllfUFJPR1JBTVMiLCJURVJUSUFSX1BST0dSQU1TIiwiR09WRVJOTUVOVF9BUFBST1ZBTF9QUk9DRURVUkVTIiwiSk9JTlRfQ1JJVEVSSUEiLCJURUFNIiwiUkVKRUNURURfSUQiLCJJTlRFUk5BTF9JRCIsIkFNUF9JRCIsIlBST0pFQ1RfVElUTEUiLCJERVNDUklQVElPTiIsIk1PRElGSUVEX0JZIiwiTU9ESUZJRURfT04iLCJDUkVBVEVEX0JZIiwiQ1JFQVRFRF9PTiIsIkxBU1RfSU1QT1JURURfQlkiLCJDTElFTlRfQ0hBTkdFX0lEIiwiQ0xJRU5UX0NSRUFURURfT04iLCJDTElFTlRfVVBEQVRFRF9PTiIsIklTX1BVU0hFRCIsIkFDVElWSVRZX0dST1VQIiwiVkVSU0lPTiIsIlBST0pFQ1RfQ09NTUVOVFMiLCJMRVNTT05TX0xFQVJORUQiLCJQUk9KRUNUX0lNUEFDVCIsIkFDVElWSVRZX1NVTU1BUlkiLCJDT05ESVRJT05BTElUSUVTIiwiUFJPSkVDVF9NQU5BR0VNRU5UIiwiQV9DX0NIQVBURVIiLCJDUklTX05VTUJFUiIsIklBVElfSURFTlRJRklFUiIsIkFDVElWSVRZX0lOVEVSTkFMX0lEUyIsIkhJRVJBUkNISUNBTF9WQUxVRSIsIkhJRVJBUkNISUNBTF9WQUxVRV9QQVJUUyIsIkhJRVJBUkNISUNBTF9WQUxVRV9ERVBUSCIsIlBQQ19BTU9VTlQiLCJSUENfQU1PVU5UIiwiUFBDX0FOTlVBTF9CVURHRVRTIiwiQU1PVU5UIiwiQ1VSUkVOQ1kiLCJGVU5ESU5HX0RBVEUiLCJDT01QT05FTlRTIiwiVE9UQUxfTlVNQkVSX09GX0ZVTkRJTkdfU09VUkNFUyIsIlNPVVJDRV9ST0xFIiwiQU1QX0ZVTkRJTkdfSUQiLCJJU1NVRVMiLCJJU1NVRV9EQVRFIiwiSVNTVUVfTkFNRSIsIk1FQVNVUkVTIiwiTUVBU1VSRV9OQU1FIiwiTUVBU1VSRV9EQVRFIiwiQUNUT1JTIiwiQUNUT1JfTkFNRSIsIlNUUlVDVFVSRVMiLCJTVFJVQ1RVUkVTX1RJVExFIiwiU1RSVUNUVVJFU19ERVNDUklQVElPTiIsIlNUUlVDVFVSRVNfTEFUSVRVREUiLCJTVFJVQ1RVUkVTX0xPTkdJVFVERSIsIlNUUlVDVFVSRVNfQ09MT1IiLCJTVFJVQ1RVUkVTX0xBVCIsIlNUUlVDVFVSRVNfTE5HIiwiU1RSVUNUVVJFU19TSEFQRSIsIlNUUlVDVFVSRVNfUE9JTlQiLCJTVFJVQ1RVUkVTX1BPTFlHT04iLCJTVFJVQ1RVUkVTX1BPTFlMSU5FIiwiU1RSVUNUVVJFU19DT09SRElOQVRFUyIsIkNPTVBPTkVOVF9UWVBFIiwiQ09NUE9ORU5UX1RJVExFIiwiQ09NUE9ORU5UX0ZVTkRJTkciLCJDT01QT05FTlRfREVTQ1JJUFRJT04iLCJDT01QT05FTlRfT1JHQU5JWkFUSU9OIiwiRlVORElOR19BTU9VTlRfSUQiLCJFWFRSQV9JTkZPIiwiVkFMVUUiLCJBQ1JPTllNIiwiVFlQRV9PRl9DT09QRVJBVElPTiIsIkFOTlVBTF9QUk9KRUNUX0JVREdFVF9JRCIsIlRZUEUiLCJZRUFSIiwiR1JPVVBfVkVSU0lPTkVEX0ZVTkRJTkciLCJBQ1RJVkVfTElTVCIsIkFDVElWRSIsIkRFTEVHQVRFRF9DT09QRVJBVElPTiIsIkRFTEVHQVRFRF9QQVJUTkVSIiwiRklOQU5DSU5HX0lEIiwiRElTQlVSU0VNRU5UX09SREVSX0lEIiwiUExFREdFIiwiQ0FQSVRBTF9TUEVORElOR19QRVJDRU5UQUdFIiwiUkVQT1JUSU5HX0RBVEUiLCJSRUNJUElFTlRfUk9MRSIsIlJFQ0lQSUVOVF9PUkdBTklaQVRJT04iLCJURU1QT1JBTF9JRCIsIk1JTklTVFJZX0NPREUiLCJQUk9KRUNUX0NPREUiLCJGWSIsIklORElSRUNUX09OX0JVREdFVCIsIklNUExFTUVOVEFUSU9OX0xFVkVMU19FWFRSQV9JTkZPIiwiSU1QTEVNRU5UQVRJT05fTE9DQVRJT05fRVhUUkFfSU5GTyIsIkRPTk9SX0NPTlRBQ1QiLCJQUk9KRUNUX0NPT1JESU5BVE9SX0NPTlRBQ1QiLCJTRUNUT1JfTUlOSVNUUllfQ09OVEFDVCIsIk1PRkVEX0NPTlRBQ1QiLCJJTVBMRU1FTlRJTkdfRVhFQ1VUSU5HX0FHRU5DWV9DT05UQUNUIiwiQ09OVEFDVCIsIk9SR0FOSVpBVElPTl9HUk9VUCIsIkZJWEVEX0VYQ0hBTkdFX1JBVEUiLCJQUklNQVJZX0NPTlRBQ1QiLCJBQ1RJVklUWV9ET0NVTUVOVFMiLCJET0NVTUVOVF9UWVBFIiwiSVNPMiIsIlBST0pFQ1RJT04iLCJQSVBFTElORSIsIlBST0pFQ1RJT05fREFURSIsIlNBTUVfQVNfUFJPUE9TRURfU1RBUlRfREFURV9MQUJFTCIsIlNBTUVfQVNfUFJPUE9TRURfQVBQUk9WQUxfREFURV9MQUJFTCIsIkRFUEVOREVOQ1lfSU1QTEVNRU5UQVRJT05fTEVWRUxfUFJFU0VOVCIsIkRFUEVOREVOQ1lfSU1QTEVNRU5UQVRJT05fTEVWRUxfVkFMSUQiLCJERVBFTkRFTkNZX0lNUExFTUVOVEFUSU9OX0xPQ0FUSU9OX1BSRVNFTlQiLCJERVBFTkRFTkNZX0lNUExFTUVOVEFUSU9OX0xPQ0FUSU9OX1ZBTElEIiwiREVQRU5ERU5DWV9QUk9KRUNUX0NPREVfT05fQlVER0VUIiwiREVQRU5ERU5DWV9PTl9CVURHRVQiLCJERVBFTkRFTkNZX1RSQU5TQUNUSU9OX1BSRVNFTlQiLCJERVBFTkRFTkNZX0NPTVBPTkVOVF9GVU5ESU5HX09SR19WQUxJRCIsIkFQX1NFQ1RJT05fSURTIiwia2V5IiwiaGFzaCIsImZtUGF0aCIsIkZNQyIsInNlY3Rpb25QYXRoIiwiQUNUSVZJVFlfSU5URVJOQUxfSURTX0NPTFMiLCJBQ1RJVklUWV9QTEFOTklOR19DT0xTIiwiQUNUSVZJVFlfTE9DQVRJT05fQ09MUyIsIkFDVElWSVRZX0ZVTkRJTkdfQ09MUyIsIkFDVElWSVRZX0NPTlRBQ1RfQ09MUyIsIkFQX0ZVTkRJTkdTX1RBQkxFX0NPTFMiLCJNVUxUSV9TRUxFQ1RfTUlOX1NJWkUiLCJNVUxUSV9TRUxFQ1RfTUFYX1NJWkUiLCJ0b0ZpZWxkTmFtZXMiLCJsaXN0T2ZOYW1lcyIsIm1hcCIsInRvRmllbGROYW1lIiwibmFtZSIsInRvTG93ZXJDYXNlIiwicmVwbGFjZSIsInRvT3JpZ2luYWxMYWJlbCIsImZpZWxkTmFtZSIsImNhcGl0YWxpemUiLCJ0ZXh0IiwiY2hhciIsInRvVXBwZXJDYXNlIiwiTk9USUZJQ0FUSU9OX09SSUdJTl9BUElfU0VDVVJJVFkiLCJOT1RJRklDQVRJT05fT1JJR0lOX0FQSV9ORVRXT1JLIiwiTk9USUZJQ0FUSU9OX09SSUdJTl9BUElfU1lOQ1VQIiwiTk9USUZJQ0FUSU9OX09SSUdJTl9BUElfR0VORVJBTCIsIk5PVElGSUNBVElPTl9PUklHSU5fREFUQUJBU0UiLCJOT1RJRklDQVRJT05fT1JJR0lOX0FVVEhFTlRJQ0FUSU9OIiwiTk9USUZJQ0FUSU9OX09SSUdJTl9XT1JLU1BBQ0VfRklMVEVSIiwiTk9USUZJQ0FUSU9OX09SSUdJTl9XT1JLU1BBQ0UiLCJOT1RJRklDQVRJT05fT1JJR0lOX1NZTkNVUF9QUk9DRVNTIiwiTk9USUZJQ0FUSU9OX09SSUdJTl9DVVJSRU5DWV9NQU5BR0VSIiwiTk9USUZJQ0FUSU9OX09SSUdJTl9EQVRFUyIsIk5PVElGSUNBVElPTl9PUklHSU5fQUNUSVZJVFkiLCJOT1RJRklDQVRJT05fT1JJR0lOX1JFU09VUkNFIiwiTk9USUZJQ0FUSU9OX09SSUdJTl9JMThORVhUIiwiTk9USUZJQ0FUSU9OX09SSUdJTl9VUERBVEVfQ0hFQ0siLCJOT1RJRklDQVRJT05fT1JJR0lOX1VQREFURSIsIk5PVElGSUNBVElPTl9PUklHSU5fU0VUVVAiLCJOT1RJRklDQVRJT05fT1JJR0lOX1NFVFRJTkdTIiwiTk9USUZJQ0FUSU9OX1NFVkVSSVRZX1dBUk5JTkciLCJOT1RJRklDQVRJT05fU0VWRVJJVFlfSU5GTyIsIk5PVElGSUNBVElPTl9TRVZFUklUWV9FUlJPUiIsIk5PVElGSUNBVElPTl9FUlJPUl9MRVZFTF9NSU5PUiIsIk5PVElGSUNBVElPTl9FUlJPUl9MRVZFTF9CTE9DS0VSIiwiTk9USUZJQ0FUSU9OX09SSUdJTl9XUk9OR19NRVRIT0RfVVNBR0UiLCJFUlJPUl9DT0RFX05PX0NPTk5FQ1RJVklUWSIsIkVSUk9SX0NPREVfQUNDRVNTX0RFTklFRCIsIk1TR19JTlZBTElEX1VSTCIsIk1TR19USU1FT1VUIiwiTVNHX1VOS05PV05fTkVUV09SS19FUlJPUiIsIk1TR19BTVBfVU5SRUFDSEFCTEUiLCJHRU5FUkFMX0NPTk5FQ1RJT05fRVJST1JTIiwiQ29uc3RhbnRzIiwiQWN0aXZpdHlDb25zdGFudHMiLCJGZWF0dXJlTWFuYWdlckNvbnN0YW50cyIsIkVycm9yQ29uc3RhbnRzIl0sIm1hcHBpbmdzIjoiOzs7QUFBQSxTQUFTLFdBQVcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFO0VBQzdCLEtBQUssR0FBRyxLQUFLLEtBQUssQ0FBQyxHQUFHLEdBQUcsR0FBRyxFQUFFLENBQUM7RUFDL0IsSUFBSSxRQUFRLEdBQUcsR0FBRyxDQUFDLFFBQVEsQ0FBQzs7RUFFNUIsSUFBSSxDQUFDLEdBQUcsSUFBSSxPQUFPLFFBQVEsS0FBSyxXQUFXLEVBQUUsRUFBRSxPQUFPLEVBQUU7O0VBRXhELElBQUksSUFBSSxHQUFHLFFBQVEsQ0FBQyxJQUFJLElBQUksUUFBUSxDQUFDLG9CQUFvQixDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0VBQ3JFLElBQUksS0FBSyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7RUFDNUMsS0FBSyxDQUFDLElBQUksR0FBRyxVQUFVLENBQUM7O0VBRXhCLElBQUksUUFBUSxLQUFLLEtBQUssRUFBRTtJQUN0QixJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7TUFDbkIsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0tBQzNDLE1BQU07TUFDTCxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxD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
