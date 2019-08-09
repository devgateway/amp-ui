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

var BASE_REST_URL = '/rest';

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
  BASE_REST_URL: BASE_REST_URL,
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

/* eslint-disable class-methods-use-this */

var CurrencyRatesManager = function () {
  function CurrencyRatesManager(currencyRates, baseCurrency, translate, dateUtils, errorNotificationHelper) {
    classCallCheck(this, CurrencyRatesManager);

    this._currencyRates = currencyRates;
    this._baseCurrency = baseCurrency;
    this._currnciesWithExchangeRates = this._getCurrenciesWithExchangeRates();
    this._translate = translate;
    this._dateUtils = dateUtils;
    this._errorNotificationHelper = errorNotificationHelper;
  }

  /**
   * Set of currencies that has at least one exchange rate
   * @return {Set<any> | *}
   */


  createClass(CurrencyRatesManager, [{
    key: 'convertCurrency',


    /**
     * Currency conversion utility. If we have the direct rate it will convert from currencyFrom to currencyTo in the
     * given date. If we don't have the said currency it will try to search the inverse rate and use 1/x. If the inverse
     * rate is also not Available an error will be thrown
     * @param currencyFrom currency code from the currency we are converting from
     * @param currencyTo currency code from the currency we are converting to
     * @param dateToFind date for which we are doing the conversion. It is expected in yyyy-mm-dd
     * @returns {*|Promise.<TResult>}
     */
    value: function convertCurrency(currencyFrom, currencyTo, dateToFind, fixedExchangeRate) {
      if (currencyFrom === currencyTo) {
        return Constants.RATE_SAME_CURRENCY;
      }
      if (fixedExchangeRate && fixedExchangeRate > 0) {
        return this.convertCurrency(this._baseCurrency, currencyTo, dateToFind, null) / fixedExchangeRate;
      }
      var timeDateToFind = new Date(dateToFind + ' ' + Constants.CURRENCY_HOUR).getTime();
      if (this._currencyRates) {
        var currenciesToSearchDirect = this._currencyRates.find(function (item) {
          return item[Constants.CURRENCY_PAIR].from === currencyFrom && item[Constants.CURRENCY_PAIR].to === currencyTo;
        });
        if (currenciesToSearchDirect) {
          return this.getExchangeRate(currenciesToSearchDirect, timeDateToFind);
        } else {
          // direct not found
          var currenciesToSearchInverse = this._currencyRates.find(function (item) {
            return item[Constants.CURRENCY_PAIR].from === currencyTo && item[Constants.CURRENCY_PAIR].to === currencyFrom;
          });
          if (currenciesToSearchInverse) {
            return 1 / this.getExchangeRate(currenciesToSearchInverse, timeDateToFind);
          } else {
            return this.convertViaBaseCurrency(currencyFrom, currencyTo, timeDateToFind);
          }
        }
      } else {
        throw this._getCurrencyError('CurrencyRatesNotInitialized');
      }
    }
  }, {
    key: 'convertFundingDetailsToCurrency',
    value: function convertFundingDetailsToCurrency(fundingDetails, currencyTo) {
      var _this = this;

      var total = 0;
      fundingDetails.forEach(function (fd) {
        total += _this.convertTransactionAmountToCurrency(fd, currencyTo);
      });

      return total;
    }
  }, {
    key: 'convertTransactionAmountToBaseCurrency',
    value: function convertTransactionAmountToBaseCurrency(fundingDetail) {
      return this.convertTransactionAmountToCurrency(fundingDetail, this._baseCurrency);
    }
  }, {
    key: 'convertAmountToCurrency',
    value: function convertAmountToCurrency(amount, currencyFrom, date, fixedExchangeRate, currencyTo) {
      var currencyRate = this.convertCurrency(currencyFrom, currencyTo, this._dateUtils.formatDateForAPI(date), fixedExchangeRate);
      return amount * currencyRate;
    }
  }, {
    key: 'convertTransactionAmountToCurrency',
    value: function convertTransactionAmountToCurrency(fundingDetail, currencyTo) {
      var fixedExchangeRate = fundingDetail[ActivityConstants.FIXED_EXCHANGE_RATE];
      var currencyFrom = fundingDetail[ActivityConstants.CURRENCY].value;
      var transactionDate = fundingDetail[ActivityConstants.TRANSACTION_DATE];
      var transactionAmount = fundingDetail[ActivityConstants.TRANSACTION_AMOUNT];
      return this.convertAmountToCurrency(transactionAmount, currencyFrom, transactionDate, fixedExchangeRate, currencyTo);
    }
  }, {
    key: 'getExchangeRate',
    value: function getExchangeRate(currenciesToSearch, timeDateToFind) {
      var lowerEnd = 0;
      var higherEnd = currenciesToSearch.rates.length - 1;
      while (lowerEnd < higherEnd) {
        var middle = Math.floor((lowerEnd + higherEnd) / 2);
        var difference = Math.abs(new Date(currenciesToSearch.rates[middle].date + '  ' + Constants.CURRENCY_HOUR) - timeDateToFind);
        var difference1 = Math.abs(new Date(currenciesToSearch.rates[middle + 1].date + '  ' + Constants.CURRENCY_HOUR) - timeDateToFind);
        if (difference1 <= difference) {
          lowerEnd = middle + 1;
        } else {
          higherEnd = middle;
        }
      }
      return currenciesToSearch.rates[higherEnd].rate;
    }
  }, {
    key: '_getCurrencyError',
    value: function _getCurrencyError(errorMesage) {
      var notifErrorCurrency = this._errorNotificationHelper.createNotification({
        message: this._translate(errorMesage),
        origin: ErrorConstants.NOTIFICATION_ORIGIN_CURRENCY_MANAGER
      });
      return notifErrorCurrency;
    }
  }, {
    key: 'convertViaBaseCurrency',
    value: function convertViaBaseCurrency(currencyFrom, currencyTo, timeDateToFind) {
      var _this2 = this;

      var rateFromToBase = this._currencyRates.find(function (item) {
        return item[Constants.CURRENCY_PAIR].from === currencyFrom && item[Constants.CURRENCY_PAIR].to === _this2._baseCurrency;
      });
      var rateBaseToTo = this._currencyRates.find(function (item) {
        return item[Constants.CURRENCY_PAIR].from === _this2._baseCurrency && item[Constants.CURRENCY_PAIR].to === currencyTo;
      });
      if (rateFromToBase && rateBaseToTo) {
        // if we have both currencies we just return the product of ech rate
        return this.getExchangeRate(rateFromToBase, timeDateToFind) * this.getExchangeRate(rateBaseToTo, timeDateToFind);
      } else if (rateFromToBase) {
        // if either of them is not found we try to find the inverse
        // we get the inverse of rateBaseToTo
        var rateToToBase = this._currencyRates.find(function (item) {
          return item[Constants.CURRENCY_PAIR].from === currencyTo && item[Constants.CURRENCY_PAIR].to === _this2._baseCurrency;
        });
        if (rateToToBase) {
          return this.getExchangeRate(rateFromToBase, timeDateToFind) * (1 / this.getExchangeRate(rateToToBase, timeDateToFind));
        } else {
          return ErrorConstants.RATE_CURRENCY_NOT_FOUND;
        }
      } else if (rateBaseToTo) {
        var rateBaseToFrom = this._currencyRates.find(function (item) {
          return item[Constants.CURRENCY_PAIR].from === _this2._baseCurrency && item[Constants.CURRENCY_PAIR].to === currencyFrom;
        });
        // we try to get the inverse of rateFromToBase
        if (rateBaseToFrom) {
          return 1 / this.getExchangeRate(rateBaseToFrom, timeDateToFind) * this.getExchangeRate(rateBaseToTo, timeDateToFind);
        } else {
          return ErrorConstants.RATE_CURRENCY_NOT_FOUND;
        }
      } else {
        return ErrorConstants.RATE_CURRENCY_NOT_FOUND;
      }
    }
  }, {
    key: '_getCurrenciesWithExchangeRates',
    value: function _getCurrenciesWithExchangeRates() {
      var cs = new Set();
      if (this._currencyRates) {
        this._currencyRates.forEach(function (exchangeRates) {
          cs.add(exchangeRates[Constants.CURRENCY_PAIR].from);
          cs.add(exchangeRates[Constants.CURRENCY_PAIR].to);
        });
      }
      return cs;
    }
  }, {
    key: 'currenciesWithExchangeRates',
    get: function get$$1() {
      return this._currnciesWithExchangeRates;
    }
  }]);
  return CurrencyRatesManager;
}();

var index = {
  TestAPField: TestAPField,
  TestingSection: TestingSection,
  Constants: Constants,
  ActivityConstants: ActivityConstants,
  FeatureManagerConstants: FeatureManagerConstants,
  ErrorConstants: ErrorConstants,
  CurrencyRatesManager: CurrencyRatesManager
};

export default index;
export { TestAPField, TestingSection, Constants, ActivityConstants, FeatureManagerConstants, ErrorConstants, CurrencyRatesManager };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguZXMuanMiLCJzb3VyY2VzIjpbIi4uL25vZGVfbW9kdWxlcy9zdHlsZS1pbmplY3QvZGlzdC9zdHlsZS1pbmplY3QuZXMuanMiLCIuLi9zcmMvYWN0aXZpdHlQcmV2aWV3L2NvbXBvbmVudHMvVGVzdEFQRmllbGQuanMiLCIuLi9zcmMvYWN0aXZpdHlQcmV2aWV3L2NvbXBvbmVudHMvVGVzdGluZ1NlY3Rpb24uanMiLCIuLi9zcmMvdXRpbHMvQ29uc3RhbnRzLmpzIiwiLi4vc3JjL21vZHVsZXMvdXRpbC9GZWF0dXJlTWFuYWdlckNvbnN0YW50cy5qcyIsIi4uL3NyYy9tb2R1bGVzL3V0aWwvQWN0aXZpdHlDb25zdGFudHMuanMiLCIuLi9zcmMvdXRpbHMvY29uc3RhbnRzL0Vycm9yQ29uc3RhbnRzLmpzIiwiLi4vc3JjL21vZHVsZXMvdXRpbC9DdXJyZW5jeVJhdGVzTWFuYWdlci5qcyIsIi4uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBzdHlsZUluamVjdChjc3MsIHJlZikge1xuICBpZiAoIHJlZiA9PT0gdm9pZCAwICkgcmVmID0ge307XG4gIHZhciBpbnNlcnRBdCA9IHJlZi5pbnNlcnRBdDtcblxuICBpZiAoIWNzcyB8fCB0eXBlb2YgZG9jdW1lbnQgPT09ICd1bmRlZmluZWQnKSB7IHJldHVybjsgfVxuXG4gIHZhciBoZWFkID0gZG9jdW1lbnQuaGVhZCB8fCBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZCcpWzBdO1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICBzdHlsZS50eXBlID0gJ3RleHQvY3NzJztcblxuICBpZiAoaW5zZXJ0QXQgPT09ICd0b3AnKSB7XG4gICAgaWYgKGhlYWQuZmlyc3RDaGlsZCkge1xuICAgICAgaGVhZC5pbnNlcnRCZWZvcmUoc3R5bGUsIGhlYWQuZmlyc3RDaGlsZCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGhlYWQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBoZWFkLmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHN0eWxlSW5qZWN0O1xuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uLy4uL2FjdGl2aXR5QXNzZXRzL3N0eWxlc2hlZXRzL0FjdGl2aXR5UHJldmlldy5jc3MnO1xuXG5cbi8qKlxuICogU2ltcGxlIEZpZWxkIGNvbXBvbmVudCB0aGF0IGNvbnNpc3RzIG9mIGEgZmllbGQgdGl0bGUgYW5kIGZpZWxkIHZhbHVlXG4gKiBAYXV0aG9yIE5hZGVqZGEgTWFuZHJlc2N1XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRlc3RBUEZpZWxkIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgLyoqXG4gICAqIEdldHMgYW4gaW5zdGFuY2Ugb2YgU2ltcGxlIEZpZWxkXG4gICAqIEBwYXJhbSB0cm5MYWJlbCB0aGUgbGFiZWwgdG8gdHJhbnNsYXRlIGFuZCB1c2UgYXMgYSB0aXRsZS4gVGhpcyBsYWJlbCBpcyBhbHNvIHVzZWQgYXMgdGhlIGNvbXBvbmVudCBrZXkuXG4gICAqIEBwYXJhbSB2YWx1ZSB0aGUgZmllbGQgdmFsdWVcbiAgICogQHBhcmFtIGlubGluZSBzaG93IHRpdGxlIGFuZCB2YWx1ZSBpbiB0aGUgc2FtZSByb3cuXG4gICAqIEBwYXJhbSBzZXBhcmF0b3IgYWRkIG9yIG5vdCBhbiA8aHI+IHRhZy5cbiAgICogQHBhcmFtIG5hbWVDbGFzcyBjc3MgY2xhc3MgZm9yIHRoZSBmaWVsZCBsYWJlbFxuICAgKiBAcGFyYW0gdmFsdWVDbGFzcyBjc3MgY2xhc3MgZm9yIHRoZSBmaWVsZCB2YWx1ZVxuICAgKiBAcmV0dXJuIHtTaW1wbGVGaWVsZH1cbiAgICovXG4gIHN0YXRpYyBpbnN0YW5jZSh0cm5MYWJlbCwgdmFsdWUsIGlubGluZSA9IGZhbHNlLCBzZXBhcmF0b3IgPSBmYWxzZSwgbmFtZUNsYXNzLCB2YWx1ZUNsYXNzKSB7XG4gICAgcmV0dXJuICg8VGVzdEFQRmllbGRcbiAgICAgIGtleT17dHJuTGFiZWx9IHRpdGxlPXt0aGlzLnByb3BzLnRyYW5zbGF0ZSh0cm5MYWJlbCl9IHZhbHVlPXt2YWx1ZX0gaW5saW5lPXtpbmxpbmV9IHNlcGFyYXRvcj17c2VwYXJhdG9yfVxuICAgICAgZmllbGROYW1lQ2xhc3M9e25hbWVDbGFzc30gZmllbGRWYWx1ZUNsYXNzPXt2YWx1ZUNsYXNzfSAvPik7XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnByb3BzLmFtcExvZ2dlci5sb2coJ2NvbnN0cnVjdG9yZScpO1xuICAgIHRoaXMudXNlU2VwYXJhdG9yID0gdGhpcy5wcm9wcy5zZXBhcmF0b3IgIT09IGZhbHNlO1xuICAgIHRoaXMuZGlzcGxheUNsYXNzID0gdGhpcy5wcm9wcy5maWVsZENsYXNzIHx8ICh0aGlzLnByb3BzLmlubGluZSA9PT0gdHJ1ZSA/IHN0eWxlcy5pbmxpbmUgOiBzdHlsZXMuYmxvY2spO1xuICB9XG5cbiAgX2dldFZhbHVlKCkge1xuICAgIGNvbnN0IGNsYXNzTmFtZXMgPSBgJHt0aGlzLnByb3BzLmZpZWxkVmFsdWVDbGFzc30gJHt0aGlzLmRpc3BsYXlDbGFzc31gO1xuICAgIC8vIFRvIGhhbmRsZSBib29sZWFuIGZpZWxkcyB3ZSBkb250IHdhbnQgdG8gc2hvdyAnZmFsc2UnIGFzICdObyBEYXRhJy5cbiAgICBjb25zdCB2YWx1ZSA9ICh0aGlzLnByb3BzLnZhbHVlIHx8IHRoaXMucHJvcHMudmFsdWUgPT09IGZhbHNlKSA/IHRoaXMucHJvcHMudmFsdWUgOiB0aGlzLnByb3BzLnRyYW5zbGF0ZSgnTm8gRGF0YScpO1xuICAgIGxldCBkaXNwbGF5VmFsdWU7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICBpZiAodmFsdWVbMF0gaW5zdGFuY2VvZiBPYmplY3QpIHtcbiAgICAgICAgZGlzcGxheVZhbHVlID0gW107XG4gICAgICAgIHZhbHVlLmZvckVhY2godiA9PiBkaXNwbGF5VmFsdWUucHVzaCh2KSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkaXNwbGF5VmFsdWUgPSB2YWx1ZS5zb3J0KCkuam9pbignLCAnKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgICBkaXNwbGF5VmFsdWUgPSB2YWx1ZSA9PT0gdHJ1ZSA/IHRoaXMucHJvcHMudHJhbnNsYXRlKCdZZXMnKSA6IHRoaXMucHJvcHMudHJhbnNsYXRlKCdObycpO1xuICAgIH0gZWxzZSB7XG4gICAgICBkaXNwbGF5VmFsdWUgPSAodGhpcy5wcm9wcy5pbmxpbmUgJiYgdGhpcy5wcm9wcy52YWx1ZSBpbnN0YW5jZW9mIFN0cmluZykgPyBgJHt2YWx1ZX0gYCA6IHZhbHVlO1xuICAgIH1cbiAgICBpZiAodGhpcy5wcm9wcy51c2VJbm5lckhUTUwpIHtcbiAgICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lc30gZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBkaXNwbGF5VmFsdWUgfX0gLz47XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lc30+e2Rpc3BsYXlWYWx1ZX08L2Rpdj47XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IGNsYXNzTmFtZXMgPSBgJHt0aGlzLnByb3BzLmZpZWxkTmFtZUNsYXNzfSAke3RoaXMuZGlzcGxheUNsYXNzfWA7XG4gICAgcmV0dXJuICg8ZGl2IGNsYXNzTmFtZT17dGhpcy5kaXNwbGF5Q2xhc3N9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZXN9Pnt0aGlzLnByb3BzLnRpdGxlfTwvZGl2PlxuICAgICAge3RoaXMuX2dldFZhbHVlKCl9XG4gICAgICB7dGhpcy51c2VTZXBhcmF0b3IgPyA8aHIgLz4gOiAnJ31cbiAgICA8L2Rpdj4pO1xuICB9XG59XG5cblRlc3RBUEZpZWxkLnByb3BUeXBlcyA9IHtcbiAgdGl0bGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHZhbHVlOiBQcm9wVHlwZXMuYW55LFxuICBpbmxpbmU6IFByb3BUeXBlcy5ib29sLFxuICB1c2VJbm5lckhUTUw6IFByb3BUeXBlcy5ib29sLFxuICBmaWVsZENsYXNzOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBmaWVsZE5hbWVDbGFzczogUHJvcFR5cGVzLnN0cmluZyxcbiAgZmllbGRWYWx1ZUNsYXNzOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBzZXBhcmF0b3I6IFByb3BUeXBlcy5ib29sLFxuICBhbXBMb2dnZXI6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgdHJhbnNsYXRlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkXG59O1xuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgVGVzdEFQRmllbGQgZnJvbSAnLi9UZXN0QVBGaWVsZCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRlc3RpbmdTZWN0aW9uIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8aDI+dGVzdGluZyBjb21wb25lbnQ8L2gyPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIHRlc3QgdHJhbnNsYXRpb246IGBERVNLVE9QID0ge3RoaXMucHJvcHMudHJhbnNsYXRlKCdERVNLVE9QJyl9YFxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICB0ZXN0IEFQRmllbGQ6XG4gICAgICAgICAgPFRlc3RBUEZpZWxkIGFtcExvZ2dlcj17dGhpcy5wcm9wcy5hbXBMb2dnZXJ9IHRyYW5zbGF0ZT17dGhpcy5wcm9wcy50cmFuc2xhdGV9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+KTtcbiAgfVxufVxuVGVzdGluZ1NlY3Rpb24ucHJvcFR5cGVzID0ge1xuICBhbXBMb2dnZXI6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgdHJhbnNsYXRlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkXG59O1xuIiwiXG5jb25zdCBCQVNFX1JFU1RfVVJMID0gJy9yZXN0JztcblxuXG5jb25zdCBDT05ORUNUSU9OX1RJTUVPVVQgPSAyNTAwMDtcbmNvbnN0IENPTk5FQ1RJT05fRk9SQ0VEX1RJTUVPVVQgPSBDT05ORUNUSU9OX1RJTUVPVVQgKyA1MDAwO1xuY29uc3QgVElNRU9VVF9DSEVDS19JTlRFUlZBTCA9IDUwMDA7XG5jb25zdCBNQVhfUkVUUllfQVRFTVBUUyA9IDU7XG5jb25zdCBFUlJPUlNfVE9fUkVUUlkgPSBbJ0VTT0NLRVRUSU1FRE9VVCcsICdFVElNRURPVVQnLCAnRUNPTk5SRVNFVCcsICdFQUlfQUdBSU4nXTtcbmNvbnN0IEVSUk9SU19OT19BTVBfU0VSVkVSID0gWydFQ09OTlJFRlVTRUQnLCAnRU5FVFVOUkVBQ0gnLCAnRU5PRU5UJywgJ0VOT1RGT1VORCcsICdFTkVURE9XTicsICdFSE9TVERPV04nLFxuICAnRUhPU1RVTlJFQUNIJywgJ0VOT05FVCddO1xuY29uc3QgQ09OTkVDVElWSVRZX0NIRUNLX0lOVEVSVkFMID0gJzYwMDAwJzsgLy8gMSBtaW51dGVzXG5cbmNvbnN0IFdPUktTUEFDRV9VUkwgPSAnL3dvcmtzcGFjZSc7XG5jb25zdCBMT0dJTl9VUkwgPSAnLyc7XG5jb25zdCBERVNLVE9QX1VSTCA9ICcvZGVza3RvcCc7XG5jb25zdCBERVNLVE9QX0NVUlJFTlRfVVJMID0gJy9kZXNrdG9wL2N1cnJlbnQnO1xuY29uc3QgU1lOQ1VQX1JFRElSRUNUX1VSTCA9ICcvc3luY1VwL3N5bmMnO1xuY29uc3QgU1lOQ1VQX0hJU1RPUllfVEFSR0VUID0gJ2hpc3RvcnknO1xuY29uc3QgU1lOQ1VQX1NVTU1BUllfVVJMID0gJy9zeW5jVXBTdW1tYXJ5JztcbmNvbnN0IEFDVElWSVRZX1BSRVZJRVdfVVJMID0gJy9hY3Rpdml0eS9wcmV2aWV3JztcbmNvbnN0IEFDVElWSVRZX0VESVRfVVJMID0gJy9hY3Rpdml0eS9lZGl0JztcbmNvbnN0IFVQREFURV9VUkwgPSAnL3VwZGF0ZSc7XG5jb25zdCBTRVRVUF9VUkwgPSAnL3NldHVwJztcbmNvbnN0IFNFVFRJTkdTX1VSTCA9ICcvc2V0dGluZ3MnO1xuXG5jb25zdCBDT0xMRUNUSU9OX1VTRVJTID0gJ3VzZXJzJztcbmNvbnN0IENPTExFQ1RJT05fV09SS1BBQ0VTID0gJ3dvcmtzcGFjZXMnO1xuY29uc3QgQ09MTEVDVElPTl9URUFNTUVNQkVSUyA9ICd0ZWFtbWVtYmVycyc7XG5jb25zdCBDT0xMRUNUSU9OX0NMSUVOVF9TRVRUSU5HUyA9ICdjbGllbnQtc2V0dGluZ3MnO1xuY29uc3QgQ09MTEVDVElPTl9HTE9CQUxfU0VUVElOR1MgPSAnZ2xvYmFsLXNldHRpbmdzJztcbmNvbnN0IENPTExFQ1RJT05fQUNUSVZJVElFUyA9ICdhY3Rpdml0aWVzJztcbmNvbnN0IENPTExFQ1RJT05fRklFTERTID0gJ2ZpZWxkcyc7XG5jb25zdCBDT0xMRUNUSU9OX1BPU1NJQkxFX1ZBTFVFUyA9ICdwb3NzaWJsZS12YWx1ZXMnO1xuY29uc3QgQ09MTEVDVElPTl9TWU5DVVBfTE9HID0gJ3N5bmN1cC1sb2cnO1xuY29uc3QgQ09MTEVDVElPTl9MQU5HUyA9ICdsYW5ndWFnZXMnO1xuY29uc3QgQ09MTEVDVElPTl9XU19TRVRUSU5HUyA9ICd3b3Jrc3BhY2Utc2V0dGluZ3MnO1xuY29uc3QgQ09MTEVDVElPTl9DVVJSRU5DWV9SQVRFUyA9ICdjdXJyZW5jeS1yYXRlcyc7XG5jb25zdCBDT0xMRUNUSU9OX0ZFQVRVUkVfTUFOQUdFUiA9ICdmZWF0dXJlLW1hbmFnZXInO1xuY29uc3QgQ09MTEVDVElPTl9DT05UQUNUUyA9ICdjb250YWN0cyc7XG5jb25zdCBDT0xMRUNUSU9OX1JFU09VUkNFUyA9ICdyZXNvdXJjZXMnO1xuY29uc3QgQ09MTEVDVElPTl9SRVBPU0lUT1JZID0gJ3JlcG9zaXRvcnknO1xuY29uc3QgQ09MTEVDVElPTl9HQVpFVFRFRVIgPSAnZ2F6ZXR0ZWVyJztcbmNvbnN0IENPTExFQ1RJT05fQ0FMRU5EQVJTID0gJ2NhbGVuZGFycyc7XG5jb25zdCBDT0xMRUNUSU9OX0NIQU5HRVNFVFMgPSAnY2hhbmdlc2V0cyc7XG5cbmNvbnN0IEdBWkVUVEVFUl9ESVNUQU5DRV9ESVZJREUgPSAzO1xuXG5jb25zdCBEQl9GSUxFX1BSRUZJWCA9ICdkYXRhYmFzZSc7XG5jb25zdCBEQl9GSUxFX0VYVEVOU0lPTiA9ICcuZGInO1xuY29uc3QgREJfQ09NTU9OX0RBVEFTVE9SRV9PUFRJT05TID0geyBhdXRvbG9hZDogZmFsc2UsIGNvcnJ1cHRBbGVydFRocmVzaG9sZDogMCB9O1xuY29uc3QgREJfQVVUT0NPTVBBQ1RfSU5URVJWQUxfTUlMSVNFQ09ORFMgPSA2MDAwMDtcbmNvbnN0IERCX0RFRkFVTFRfUVVFUllfTElNSVQgPSA5OTk5OTk5OTk7XG5cbmNvbnN0IExBTkdVQUdFX0VOR0xJU0ggPSAnZW4nO1xuY29uc3QgRlNfTE9DQUxFU19ESVJFQ1RPUlkgPSAnbGFuZyc7XG5jb25zdCBMQU5HVUFHRV9NQVNURVJfVFJBTlNMQVRJT05TX0ZJTEUgPSAnbWFzdGVyLXRyYW5zbGF0aW9ucyc7XG5jb25zdCBMQU5HVUFHRV9UUkFOU0xBVElPTlNfRklMRSA9ICd0cmFuc2xhdGlvbnMnO1xuY29uc3QgTEFOR1VBR0VfTkVXX1RSQU5TTEFUSU9OU19NVVNUX1NZTkMgPSAnbXVzdF9zeW5jX3RyYW5zbGF0aW9uLmpzb24nO1xuXG5jb25zdCBBU0FSX0RJUiA9ICdhcHAuYXNhcic7XG5jb25zdCBBUFBfRElSRUNUT1JZID0gJ2FwcCc7XG5jb25zdCBURVNUX0RJUkVDVE9SWSA9ICd0ZXN0JztcbmNvbnN0IFNUQVRJQ19ESVIgPSAnc3RhdGljJztcbmNvbnN0IElNQUdFU19ESVIgPSAnaW1hZ2VzJztcbmNvbnN0IERPQ19JQ09OUyA9ICdkb2MtaWNvbnMnO1xuY29uc3QgREJfU1RBVElDX0RJUiA9ICdkYic7XG5jb25zdCBNSUdSQVRJT05TX0RJUiA9ICdjaGFuZ2Vsb2cnO1xuXG5jb25zdCBIQVNIX0lURVJBVElPTlMgPSAxMDA7XG5jb25zdCBESUdFU1RfQUxHT1JJVEhNX1NIQTEgPSAnU0hBLTEnO1xuY29uc3QgRElHRVNUX0FMR09SSVRITV9TSEEyNTYgPSAnU0hBLTI1Nic7XG5cbmNvbnN0IEFDVElWSVRZX0VESVQgPSAnQUNUSVZJVFlfRURJVCc7XG5jb25zdCBBQ1RJVklUWV9WSUVXID0gJ0FDVElWSVRZX1ZJRVcnO1xuXG5jb25zdCBTWU5DVVBfRk9SQ0VfREFZUyA9IDE0O1xuY29uc3QgU1lOQ1VQX0JFU1RfQkVGT1JFX0RBWVMgPSA3O1xuY29uc3QgU1lOQ1VQX05PX0RBVEUgPSAnMTkwMC0wMS0wMVQwMDowMDowMC4wMDArMDAwMCc7XG5jb25zdCBTWU5DVVBfVFlQRV9UUkFOU0xBVElPTlMgPSAndHJhbnNsYXRpb25zJztcbmNvbnN0IFNZTkNVUF9UWVBFX1VTRVJTID0gJ3VzZXJzJztcbmNvbnN0IFNZTkNVUF9UWVBFX0FTU0VUUyA9ICdhc3NldHMnO1xuY29uc3QgU1lOQ1VQX1RZUEVfV09SS1NQQUNFUyA9ICd3b3Jrc3BhY2VzJztcbmNvbnN0IFNZTkNVUF9UWVBFX0dTID0gJ2dsb2JhbC1zZXR0aW5ncyc7XG5jb25zdCBTWU5DVVBfVFlQRV9FWENIQU5HRV9SQVRFUyA9ICdleGNoYW5nZS1yYXRlcyc7XG5jb25zdCBTWU5DVVBfVFlQRV9GRUFUVVJFX01BTkFHRVIgPSAnZmVhdHVyZS1tYW5hZ2VyJztcbmNvbnN0IFNZTkNVUF9UWVBFX1dPUktTUEFDRV9NRU1CRVJTID0gJ3dvcmtzcGFjZS1tZW1iZXJzJztcbmNvbnN0IFNZTkNVUF9UWVBFX0FMTF9GSUVMRFMgPSAnZmllbGRzJztcbmNvbnN0IFNZTkNVUF9UWVBFX0FDVElWSVRJRVNfUFVMTCA9ICdhY3Rpdml0aWVzJztcbmNvbnN0IFNZTkNVUF9UWVBFX0FDVElWSVRJRVNfUFVTSCA9ICdhY3Rpdml0aWVzLXB1c2gnO1xuY29uc3QgU1lOQ1VQX1RZUEVfQUNUSVZJVFlfRklFTERTID0gJ2FjdGl2aXR5LWZpZWxkcyc7XG5jb25zdCBTWU5DVVBfVFlQRV9BQ1RJVklUWV9GSUVMRFNfU1RSVUNUVVJBTF9DSEFOR0VTID0gJ2FjdGl2aXR5LWZpZWxkcy1zdHJ1Y3R1cmFsLWNoYW5nZXMnO1xuY29uc3QgU1lOQ1VQX1RZUEVfQ09OVEFDVFNfUFVMTCA9ICdjb250YWN0cyc7XG5jb25zdCBTWU5DVVBfVFlQRV9DT05UQUNUU19QVVNIID0gJ2NvbnRhY3RzLXB1c2gnO1xuY29uc3QgU1lOQ1VQX1RZUEVfQUNUSVZJVFlfUE9TU0lCTEVfVkFMVUVTID0gJ2FjdGl2aXR5LXBvc3NpYmxlLXZhbHVlcy1maWVsZHMnO1xuY29uc3QgU1lOQ1VQX1RZUEVfQ09OVEFDVF9GSUVMRFMgPSAnY29udGFjdC1maWVsZHMnO1xuY29uc3QgU1lOQ1VQX1RZUEVfQ09OVEFDVF9GSUVMRFNfU1RSVUNUVVJBTF9DSEFOR0VTID0gJ2NvbnRhY3QtZmllbGRzLXN0cnVjdHVyYWwtY2hhbmdlcyc7XG5jb25zdCBTWU5DVVBfVFlQRV9DT05UQUNUX1BPU1NJQkxFX1ZBTFVFUyA9ICdjb250YWN0LXBvc3NpYmxlLXZhbHVlcy1maWVsZHMnO1xuY29uc3QgU1lOQ1VQX1RZUEVfUkVTT1VSQ0VTX1BVTEwgPSAncmVzb3VyY2VzJztcbmNvbnN0IFNZTkNVUF9UWVBFX1JFU09VUkNFU19QVVNIID0gJ3Jlc291cmNlcy1wdXNoJztcbmNvbnN0IFNZTkNVUF9UWVBFX1JFU09VUkNFX0ZJRUxEUyA9ICdyZXNvdXJjZS1maWVsZHMnO1xuY29uc3QgU1lOQ1VQX1RZUEVfUkVTT1VSQ0VfRklFTERTX1NUUlVDVFVSQUxfQ0hBTkdFUyA9ICdyZXNvdXJjZS1maWVsZHMtc3RydWN0dXJhbC1jaGFuZ2VzJztcbmNvbnN0IFNZTkNVUF9UWVBFX1JFU09VUkNFX1BPU1NJQkxFX1ZBTFVFUyA9ICdyZXNvdXJjZS1wb3NzaWJsZS12YWx1ZXMtZmllbGRzJztcbmNvbnN0IFNZTkNVUF9UWVBFX0NPTU1PTl9QT1NTSUJMRV9WQUxVRVMgPSAnY29tbW9uLXBvc3NpYmxlLXZhbHVlcy1maWVsZHMnO1xuY29uc3QgU1lOQ1VQX1RZUEVfV09SS1NQQUNFX1NFVFRJTkdTID0gJ3dvcmtzcGFjZS1zZXR0aW5ncyc7XG5jb25zdCBTWU5DVVBfVFlQRV9NQVBfVElMRVMgPSAnbWFwLXRpbGVzJztcbmNvbnN0IFNZTkNVUF9UWVBFX0dBWkVUVEVFUiA9ICdsb2NhdG9ycyc7XG5jb25zdCBTWU5DVVBfVFlQRV9DQUxFTkRBUlMgPSAnY2FsZW5kYXJzJztcblxuY29uc3QgU1lOQ1VQX1NUQVRVU19TVUNDRVNTID0gJ1NVQ0NFU1MnO1xuY29uc3QgU1lOQ1VQX1NUQVRVU19GQUlMID0gJ0ZBSUwnO1xuY29uc3QgU1lOQ1VQX1NUQVRVU19QQVJUSUFMID0gJ1BBUlRJQUwnO1xuY29uc3QgU1lOQ1VQX1NUQVRVU19DQU5DRUxFRCA9ICdDQU5DRUxFRCc7XG5jb25zdCBTWU5DVVBfU1lOQ19SRVFVRVNURURfQVQgPSAnc3luYy1kYXRlJztcbmNvbnN0IFNZTkNVUF9TWU5DX1JFUVVFU1RFRF9CWSA9ICdyZXF1ZXN0ZWQtYnknO1xuY29uc3QgU1lOQ1VQX0RBVEVUSU1FX0ZJRUxEID0gJ3RpbWVzdGFtcCc7XG5jb25zdCBTWU5DVVBfRElGRl9MRUZUT1ZFUiA9ICdzeW5jdXAtZGlmZi1sZWZ0b3Zlcic7XG5jb25zdCBTWU5DVVBfREVQRU5ERU5DWV9DSEVDS19JTlRFUlZBTCA9IDEwO1xuY29uc3QgU1lOQ1VQX0RFVEFJTFNfU1lOQ0VEID0gJ3N5bmNlZCc7XG5jb25zdCBTWU5DVVBfREVUQUlMU19VTlNZTkNFRCA9ICd1bnN5bmNlZCc7XG5jb25zdCBTWU5DVVBfUkVTT1VSQ0VfUFVMTF9CQVRDSF9TSVpFID0gMTAwO1xuY29uc3QgU1lOQ1VQX0FDVElWSVRJRVNfUFVMTF9CQVRDSF9TSVpFID0gMTAwO1xuY29uc3QgU1lOQ1VQX0NPTlRBQ1RTX1BVTExfQkFUQ0hfU0laRSA9IDEwMDtcblxuY29uc3QgQUNUSVZJVFlfU1RBVFVTX0RSQUZUID0gJ0FDVElWSVRZX1NUQVRVU19EUkFGVCc7XG5jb25zdCBBQ1RJVklUWV9TVEFUVVNfVU5WQUxJREFURUQgPSAnQUNUSVZJVFlfU1RBVFVTX1VOVkFMSURBVEVEJztcbmNvbnN0IEFDVElWSVRZX1NUQVRVU19WQUxJREFURUQgPSAnQUNUSVZJVFlfU1RBVFVTX1ZBTElEQVRFRCc7XG5cbmNvbnN0IENVUlJFTkNZX0hPVVIgPSAnMDA6MDAnO1xuY29uc3QgREVGQVVMVF9DVVJSRU5DWSA9ICdVU0QnO1xuY29uc3QgUkFURV9TQU1FX0NVUlJFTkNZID0gMTtcbmNvbnN0IFJBVEVfQ1VSUkVOQ1lfTk9UX0ZPVU5EID0gMTtcbmNvbnN0IENVUlJFTkNZX1BBSVIgPSAnY3VycmVuY3ktcGFpcic7XG5jb25zdCBWRVJTSU9OX1BBVFRFUk4gPSAvKFxcZCspXFwuKFxcZCspKFxcLihcXGQrKSk/KC1cXHcrKT8vO1xuY29uc3QgVkVSU0lPTl9QQVRURVJOX0dST1VQU19UT19FWFRSQUNUID0gWzEsIDIsIDQsIDVdO1xuY29uc3QgQU1QX0NPVU5UUllfTE9HTyA9ICdhbXBDb3VudHJ5RmxhZy5wbmcnO1xuY29uc3QgQVNTRVRTX0RJUkVDVE9SWSA9ICdhc3NldHMnO1xuY29uc3QgQkFTRV82NF9QTkdfUFJFRklYID0gJ2RhdGE6aW1hZ2UvcG5nO2Jhc2U2NCwnO1xuLy8gSG9sZHMgdGhlIEJBU0U2NCByZXByZXNlbnRhdGlvbiBvZiBhIGEgdHJhbnNwYXJlbnQgaW1hZ2UgMXgxIGluIGNhc2Ugd2UgZG9uJ3QgeWV0IGhhdmUgdGhlIGNvdW50cnkgZmxhZ1xuY29uc3RcbiAgVFJBTlNQQVJFTlRfRkxBRyA9ICdpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQUVBQUFBQkNBUUFBQUMxSEF3Q0FBQUFDMGxFUVZSNG5HUDZ6d0FBQWdjQkFwb2NNWEVBQUFBQVNVVk9SSzVDWUlJPSc7XG5jb25zdCBIRUxQX1BERl9GSUxFTkFNRSA9ICdhbXAtaGVscCc7XG5jb25zdCBIRUxQX0RJUiA9ICdoZWxwJztcbmNvbnN0IEVORFNfV0lUSF9QVU5DVFVBVElPTl9SRUdFWCA9IC9bLiE/LDs6XSQvO1xuXG5jb25zdCBNQVBfVElMRVNfRElSID0gJ21hcC10aWxlcyc7XG5jb25zdCBUSUxFU19aSVBfRklMRSA9ICdtYXAtdGlsZXMuemlwJztcblxuLyogZXNsaW50LWRpc2FibGUgbWF4LWxlbiAqL1xuY29uc3QgTUFQX01BUktFUl9JTUFHRSA9ICdkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUJrQUFBQXBDQVlBQUFEQWs0TE9BQUFGZ1VsRVFWUjRBYTFYQTVCaldSVE4yb1cxN2QzWWFadHIyOTYySFV6YkROcGpzelcyNG1SdDI4cDQ3djd6cS9iWFp0cnAvbFduWHIzMzdqM25QQ2U4NU5jeXBnU0ZkdWdDcFc1WW9EQU1SYUlNcVJpNmFLcTVFM1lxRFFPM3FBd2pWV3JEOE5jcS9SQnB5a2Q4b1pVYi9rYUp1dG93OHIxYVA5SUkwV21MS0xJc0p5djF3L2txdzlDaDJNWWRCKysxMk9ueGVlL1FNd3ZmNC9Eay9MZnAvaTRueFRYdE9vUTRwVzVBajd3cGljaTFBOWVyZEFOMk9INjR4OE9TUDlqM0Z0M2I3YVdrVGcvRm05MXNpVHJhMGY5b241c1FyOUlOZWpINkNVVVVwYXZqRk5xMUIrT2FkaHhtbmZhOFJmRW1OOFZOQXNRaFBxRjU1eEhrTXp6M2pTbUNoV1U2ZjcvWFpLTkgrOStoQkxPSFlvenVLUVB4eU1QVUtrclgvSzB1V25mRmFKR1MxUVBSdFpzT1B0cjNOc1cwdXloNk5OQ09rVTNZeitiWGJUM0k4RzN4RTVFWExYdENYYmJxd0NPOXpQUVlQUlRaNXZJRFhEN1UrdzdyRkRFb1VVZjdpYkhJUjR5NmJMVlBYcno4SlZaRXFsMTN0cnh3dWUvdURpdmQzZmtXUmJTNi9JQTJiSUQ0dWswVXBGMU44cUxsYkJsWHM0RWU3SExUZlYxajU0QVB2T0RuU2ZPV0JxdEtWdmpnTEt6RjVZZEVrNWV3UmtHbEswaTMzRW9mZmZjN0hUNTZqRDcvNlUrcUgzQ3g3U0JMTm50SDVZSVB2T0RueWZJWFpZUlZEUHFnSHRMczVBQkhEM1l6THVlc3BiN3Q3OUZZMzREak13clZyY1R1d2xUNTVZTVB2T0JuUnJKNFZYVGRObll1ZzV1Y0hMQmpFcHQzMDcwMUEzVHMrSEVhNzN1NmRUM0ZOV3dmbFk4NmVNSFBrK1l1K2k2cHpVcFJyVzdTTkRnNUpIUjRLYXBtTTVXdjJFOFRmY2IxSG9xcUhNSFUrdVdERDd6ZzU0bXo1LzJCU25pemk5VDFEZzRRUVhMVG9HTkNrYjZ0YjFOVStRQWxHcjErK2VBRHJ6aG4vdThRMllaaFFWbFo1K0NBT3RxZmJobWFVQ1MxZXpORlZtMmltRGJQbVBuZzV3bXorZ3doK29IRGNlMGVVdFE2T0dESXlSMHVVaFVzb08zdmZEbW1nT2V6SDBtWk41OXg3TUJpKytXREwxZy9lRWlVM2F2bGlkTzY3MWJrTGZ3Ync1WFYyUDhQem8weWR5NHQyLzBldTMzeFlTT01PRDhoVGY0Q3JCdEdNU29YZlBMY2hYK0owcnVTZVB3M0xaZUswanVQSmJZenJoa0gwaW83QjNrMTY0aGlHdmF3aE9LTUxrclFMeVZwWmc4ckhGVzdFMnVIT0w4ODhJQlBsTloxRlB6c3RTSk02OTRmV3I2UndwdmNKSzYwKzBIQ0lMVEJ6WkxGTmR0QXpKYW9oemU2MFQ4cUJ6eWg1WnVPZzVlN3V3UXBwb2ZFbWYyKytEWXZteVNxR0J1S2FpY0YxYmxRamh1SGR2Q0lNdnA4d2hUVGZaekk3UmxkcHd0U3pMK0YxK3drZFoyVEJPVzJnSUY4OFBCVHpEL2dwZVJFQU1FYnhuSmNhSkhOSHJwemppMGdRQ1M2aGRrRWVZdDlERi8ycVBjRUM4Uk0yOEh3bXIzc2ROeWh0MDBieUF1dDJrM2d1ZldOdGd0T0VPRkdVd2NYV05EYmROYnBnQkd4RXZLa09Rc3hpdkp4MzNpb3cwVnc1UzZTVlRycFZxMTF5c0EyUnA3Z1RmUGZrdGM2emh0WEJCQythZFJMc2hmNnNHMlJmSFBaNUVBYzRzVlo4M3lDTjAwRmsvNGtnZ3U0MFpUdklFbTVnMjRxdFU0S2pCcngvQlRUSDhpZlZBU0FHN2dLcm5XeEpEY1U3eDhYNkVjY3pobTNvNllpY3ZzTFhXZmgzQ2gxVzBrOHgwblhGKzBmRnhndDRwaHo4UXZ5cGl3Q0NGS01xWENucVhFeGpxMTBiZUgrVVVBNytuRzZtZEcvUHUwZjNMZ0ZjR3JsMnMwa05OanBtb0o5bzRCMjlDTU84ZE1UNFE1b3g4dWl0RjZmcXNySk9yOHFud05iUnp2NmhTbkc1d1ArNjRDN2g5bHAzMGhLTnRLZFdqdGRrYnVQQTE5bko3VHozelIvaWJnQVJiaGI0QWxoYXZjQmVibVRIY0ZsMmZ2WUVuVzBveDl4TXhLQlM4YnRKK0tpRWJxOXpBNFJ0aFFYRGhQYTBUOVRFZTY5Z1d1cHdjNnVCVXBocXVYZ2YrL0ZySWp3ZUhRUzQvcGR1TWU1RVJVTUhVZDl4djhaUjk4Q3hrUzRGMm4zRVVyVVoxMEVZTnc3QldtOXgxR2lQc3NpM0dnaUdSREtXUllaZlhsT04rZGZOYk0rR2dJd1lkd0FBQUFBU1VWT1JLNUNZSUk9JztcbmNvbnN0IE1BUF9NQVJLRVJfU0hBRE9XID0gJ2RhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQ2tBQUFBcENBUUFBQUFDYWNoOUFBQUNNVWxFUVZSNEFlM1NoWTdqUUJBRTBBb3ovZjkvSFRNemhnMXpyZEtVckpiZHgrS2QybkQ4Vk51ZGZzTC9UaC8vL2R5UU4yVEg2ZjN5L0JHcEMzNzlyVitTK3FxZXRCT3hJbU5RWEw4SkNBcjJWNGlNUVhIR05KeGVDZlpYaFNSQmNRTWZ2a09XVWR0ZnpsTGdBRU5tWkRjbW8yVFZtdDhPU00yZVh4QnAzRGpIU01GdXRxUzdTYm1lbXpCaVIreHBLQ05VSVJrZGtrWXhoQWt5R29CdnlRRkVKRWVmd1NtbXZCZkp1SjZhS3FLV25Ba3ZHWk9hWlhUVWdGcVlVTFdOU0hVY2tadVIxSElJaW1VRXh1dFJ4d3pPTFJPSUc0dkttQ0tRdDM2NG1JbGhTeXpBZjFtOWxIWkhKWnJsQU9NTXp0UlJpS2ltcC9ycGRKRGM5QXdyeTV4VFpDdGU3Rkh0dVM4d0pnZVlHcmV4Mjh4TlRkMDg2RGlrN3ZVTXNjUU9hOHk0RG9HdENDU2tBS2xOd3BnTnRwaGpyQzZNSUhVa1I2WVd4eHM2U2M1eHFuMjIybW1DUkZ6SXQ4bEVkS3graWtDdGc5MXFTMldwd1ZmQmVsSkNpUUp3dnppeGZJOWN4WlFXZ2lTSmVsS253QkVsS1l0RE9iMk1GYmhtVWlnYlJlUUJWMENnNCtxTVhTeFhTeUdVbjRVYkY4bCs3cWRTR25UQzBYTENtYWhJZ1VITGhMT2hwVkN0dzRDellYdkxRV1FiSk5teG9Dc09LQXhTZ0JKbm83NWF2b2xrUnc4aUlBRmNzZGMwMmU5aXlDZDh0SHdtZVNTb0tUb3dJZ3ZzY1NHWlVPQTdQdUNONWIyQlg5bVFNN1Mwd1loTU5VNzR6Z3NQQmozSFU3d2d1QWZueHhqRlFHQkU2cHdOK0dqTUU5ekhZN3pHcDh3VnhNU2hZWDlOWHZFV0QzSGJ3SmY0Z2lPNENGSVF4WFNjSDEvVE0rMDRra0JpQUFBQUFFbEZUa1N1UW1DQyc7XG5jb25zdCBNQVBfTUFSS0VSX0NJUkNMRV9SRUQgPSAnZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFCUUFBQUFVQ0FZQUFBQ05pUjBOQUFBQUJHZEJUVUVBQUxHUEMveGhCUUFBQUNCalNGSk5BQUI2SmdBQWdJUUFBUG9BQUFDQTZBQUFkVEFBQU9wZ0FBQTZtQUFBRjNDY3VsRThBQUFBQm1KTFIwUUEvd0QvQVArZ3ZhZVRBQUFBQjNSSlRVVUg0Z2NiRndvZ2VvaGhFQUFBQTFsSlJFRlVPTXVsbGMxckhHVWN4eisvWjJaMjB6R0U3bHV5UWJ5SWRpRXhyZTZhTnZTeVNFQkJLQjcxVkFJNW1HSkE5ZzhRcFI0OGFWR0s2SzE2MHB0WUQ3V3hoNENVa0pyRkdwS3lLV2dRbW5YZmFadDl5V2FlZVR6c1RFeGoxWU8vMC9ETXpHZCtiOS92Q0VIOGN1NTFqc1FRa0FFbWdGUndWZ00yZ1JMUU8vend5YXRmQXlDUGdVV0FWNEE1WUFaSUFuWnd6d1Bxd0Fwd0JmZ2U2QitHeWhGWUduZ1hPQSs0QUJqemFONGk0VlVIK0JKNEQ2aUVoL1lSMkdmQWF3Y2dZMUJQdUZqRHd3RG8zVjM4ZG1jQUZYR0JCV0FjZURPRWhzQklrTmtBNXZzNHlRU3gyVHdqcDNQWThkaWczbWFMKzZ0cnRHNHM0OVVib0JUQk8yWGdiYUJ2WGNnOEIvQXE4RDdnNFBzTVBmTTBUeFhld3MwK3p4OTM3dkQ3OG85VU56YlJqazNxcFR3akw1eWsrK3MyWHFNWnRtQUMrQm5Zc29OcHpnRXV4dUFrRXp4NVlaNitZMU44NXlLMTlRMk01dzNhWjl1a3BpYkpGaFlaWDVqbnR3OCtoR1lyTEg4T1dGTEJhc3lFZll2TjVySEdSaWxldWt5bGVCdU1RU3dMc1N3d2hrcnhOc1ZMbDdIVG8wVHpaK2w2SHNHWVpvQ01DdEpOaGdNWU9aMmp2UG9UdGZVTmxHMGQzVTJVYlZGYjM2QnlhNDM0bVdscUNqb0RhQktZVU1IUzJnRFc4REIyUEVacjYrNUJtWThMNDNrMFMxdTR5UVMrZTR5ZFRwdU8xclpBeXViL2hnZzk3Vkh1dGprZWlhSVl5TWtMOTh4cnRvaGxua1hzZi82VzJEYnh6QW02OVFiOUJ3OFJFWHBhNzFkNzNhcGlvTTA2SXZqdER2ZFgxeGlmZnBIVTFDUytwLzhHOHoxTmFtcVM5SFNPZXpkWDJHKzNRUVNCdXNDbVlpRDBsVEQ5MW8xbGRLVkt0ckRJV1BZVWlHQzB4bWdOSW94bFQ1RXJMTEs3VTJiNzJ0SmhLYTQ0U3BWQ0xaOER2Z0xjY0xISEYrYXgwNk5VYnEzUkxHMEJFTStjSUQyZFkzZW56TnBIbjlBczNVVUdhbWxiSW0vNHhud1hBaVBBeDRFMndmY2hFU2VhUDB2OHpEUnVNZ0ZBdDk3ZzNzMFZ0cTh0MGFuV1FoZ0NuMFl0cStBYjB6L3NObVBBNTRmTm9ldDUxQlQ0N2pFUW9mL2c0Vjg5QzBvVitNWVN0V0F3RllVODRqWVZCcTVSQnM0ajRycU9ROHJ6MktrMTZHa1BFVG5JQ21nTGZHR0p1dWhqS3I0eHhJZWkvMjJ3QXNtdTF2Wk90MDFQNjMwSkRGYUpYSEdVdXI3diszMXREUEZJbEpkL3VNckJpUDd0RnlDUWF2VDNxUGE2VllGTlI2blNudFo3amxJWTRIZ2t3dXoxYndINEU1bUNYSUJMUTVIbkFBQUFKWFJGV0hSa1lYUmxPbU55WldGMFpRQXlNREU0TFRBM0xUSTNWREl4T2pFd09qTXlLekF5T2pBdzdxNkdud0FBQUNWMFJWaDBaR0YwWlRwdGIyUnBabmtBTWpBeE9DMHdOeTB5TjFReU1Ub3hNRG96TWlzd01qb3dNSi96UGlNQUFBQUFTVVZPUks1Q1lJST0nO1xuY29uc3QgTUFQX01BUktFUl9DSVJDTEVfR1JFRU4gPSAnZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFCUUFBQUFVQ0FZQUFBQ05pUjBOQUFBQUJtSkxSMFFBL3dEL0FQK2d2YWVUQUFBQUNYQklXWE1BQUFzVEFBQUxFd0VBbXB3WUFBQUFCM1JKVFVVSDRnY2JGQmc2L1ZoVzRBQUFBNVZKUkVGVU9NdWxsVUZvSEZVWXgzL3Z6ZXhrdThWa2R6UHJwZ3BXTkpvbTRKbzBOYVNuSWtIckpSYjFVRkFzWG1xM0tsaXZKcUNIaEo0cXNRZHRta3NWRktRZ1lrVGEwRXJ4VUNNaGFkMUNRclEwRGJhSjI5MWtkOTFrSnJzN004OURacG8wQkJUOHoyVjQ3L0Y3My9mZTkvK2V3RmVtOXpDYjFUOFlEUU10UUJ1UThJZHp3RFF3TzlCWFhOdThQalg2RFFCaUs2eC9NR29BQjRHM2dHN0FCSFIvMmdIeXdEaHdEcmc0MEZlc2JvYUtMYkFtNENQZ0NCQUI4UEFlaUZ3aWcxOEwrQkw0ZUtDdm1OMllmeEIyQmtnREVZLzFMeUoza0F5WkpFTW1FYm1EWU56Zk1BME05dzlHa3dGSFpIb1BCMmwrNmkvQXc2TXhGS01udHArdStoUnh2UUdBWmFmRVJPa0dsd3RYeVR1RnpkR2VBZDRmNkN0V2c3TTU2S2VKaDBkemVEZkhIMzJkcE5iSXhHS0dTNFdmQVdpSk5kTzc2M202NmxOOGZ2ZHJicTdOQjlBandJL0FxSGc1Y3l3TWZBVzhHa1QyNFdOcDlLckcwTlFJbWZ3TWp1Y0FvRXVkbE5uS2liMUhxZW9WVHM2ZFpabFNBUDBXZUVQNnBkRWR4TjRUMjA5U2EyUm9hb1RKN0hXVVVtaENReE1hU2lrbXM5Y1ptaHFoU1grWUEzWDdjRzBISlJRK28wWDZkV1lHRjlCVm4rTFh4V3RrOGpQbzBtQ3JkR21ReWM4d2tmMk43bmdISXVmaVdEV1VVQ2JRSnYyaTFRRWUwbllTMXh2NG96QjNQODN0NUhnT3Z5L2Z3b3pFaVhoaHJJVXludVhxU3FpRTVIOUtJbkFyRHRaZlpXcExGWFRmVGc1Z2xOMVZscDBTTGJGbWRLbWpsTm9Xb2t1ZHArTlBrTE9YS05YS0NDRndiYWRtVjFmdVNkK2JlWW5FOG13bVNqZDRibGVLbE5tSzQxVzNTYmRLeW15bHE2bWRYKzVPc2xxekVFcUFKQTlNUzJEVzl5WUFsd3RYeWJwTG5OaDdsTTVrKy9ydXlzVlZMa0lJT3BQdGZORDVOZ3NyV1M3Y3ZySU9XOWU0TkxSWjdmeWRadWVubnJBTkhCS0kwS3BuYzh2K2s0NkdQZlR1Zm9Fbm80L3p5TTRrejVoN2VPV3BsM2l6N1RVS2F5Vk9UUTR6WDc2REZCSmdWVWpSZjN6bzc1bkFLUmQ5bzZjbGtwdHI4NXljTzh1QnVuMTB4enQ0TnRHMjNydnNKYzdQL3NDRjIxZkkycmtONjBtK2tJWTJGcEp5bzl2NEJoOEdEZ1VXZEcwSGtYT0plR0VrZ2xLdGZQL01oQkFCN0R1aHFmUjdwNjJzUkd5NDIyOUJ4M3lqV3hLSkhnbWhFaG81ZDVrRks0dmwyRWhrQUZ0RjhwblFWUHJkMDFiV1ZZcG9uZkh2RFZZSlpicTJvOXVMSzdpMlUvTnZjMXdJY1U0YTJ0ZzduNVNxcmxMRWpUcGV2RFNLK0M5UGdCSXFVVnVxWU9kVzdnSFQwdEJtMDZlS2xaQ1VLQ0JxR1BTTWZRL0FQeTFYZzJ2NktJc0ZBQUFBQUVsRlRrU3VRbUNDJztcbi8qIGVzbGludC1lbmFibGUgbWF4LWxlbiAqL1xuY29uc3QgUE9MWUdPTl9CQVNFX0NPTE9SID0gJyMzMzg4ZmYnO1xuXG5jb25zdCBER19DT01QQU5ZX05BTUUgPSAnRGV2ZWxvcG1lbnQgR2F0ZXdheSc7XG5jb25zdCBER19BRERSRVNTXzEgPSAnMTExMCBWZXJtb250IEF2ZSwgTlcsIFN1aXRlIDUwMCc7XG5jb25zdCBER19BRERSRVNTXzIgPSAnV2FzaGluZ3RvbiwgREMgMjAwMDUgVVNBJztcbmNvbnN0IERHX0NPTlRBQ1RfSU5GTyA9ICdpbmZvQGRldmVsb3BtZW50Z2F0ZXdheS5vcmcsIFRlbDogKzEuMjAyLjU3Mi45MjAwLCBGYXg6ICsxIDIwMi41NzIuOTI5MCc7XG5cbmNvbnN0IExPR19ESVIgPSAnbG9ncyc7XG5jb25zdCBMT0dfRklMRV9OQU1FID0gJ2FtcG9mZmxpbmUnO1xuY29uc3QgTE9HX0ZJTEVfRVhURU5TSU9OID0gJ2xvZyc7XG5cbi8vIE1lc3NhZ2UgY29uc3RhbnRzXG4vLyB0b3RhbCBhbW91bnQgb2YgdGltZSB0aGUgbWVzc2FnZSBzdGF5cyB2aXNpYmxlXG5jb25zdCBNRVNTQUdFX1RJTUVPVVQgPSAxMCAqIDEwMDA7XG4vLyB3aGVuIGl0J3MgdGhpcyBhbW91bnQgb2YgdGltZSBsZWZ0LCB3ZSBub2ZpdHkgdGhlIHVzZXIgdGhhdCB0aGUgbWVzc2FnZSBpcyBhYm91dCB0byBkaXNhcHBlYXJcbmNvbnN0IE1FU1NBR0VfRElTQVBQRUFSX1RJTUVPVVQgPSBNRVNTQUdFX1RJTUVPVVQgLyA1O1xuY29uc3QgTUVTU0FHRV9DSEVDS19JTlRFUlZBTCA9IDEwMDtcbi8vIGhvdyBsb25nIHNob3VsZCB0aGUgZW50ZXIvbGVhdmUgYW5pbWF0aW9uIHJ1bihtcylcbi8vIChpZiB5b3UgY2hhbmdlIHRoaXMgeW91J2xsIHdhbm5hIGNoYW5nZSBpdCBpbiBzdHlsZS5jc3MsIHRvbylcbmNvbnN0IE1FU1NBR0VfQU5JTUFUSU9OX0RVUkFUSU9OID0gNTAwO1xuXG4vLyB0aGlzIGlzIHRoZSBpbnRlcm5hbCBkYXRlIGZvcm1hdCB1c2VkIHRvIHN0b3JlIGFuZCBzeW5jIHVwIGRhdGVzXG5jb25zdCBJTlRFUk5BTF9EQVRFX0ZPUk1BVCA9ICdZWVlZLU1NLUREVEhIOm1tOnNzLlNTU1onO1xuLy8gY3VycmVudGx5IHN1cHBvcnRlZCBtYXggJiBtaW4geWVhcnMgaW4gQU1QLCBpLmUuIGZyb20gMTk3MC0wMS0wMSB0aWxsIDIwNTAtMTItMzFcbmNvbnN0IE1JTl9TVVBQT1JURURfWUVBUiA9IDE5NzA7XG5jb25zdCBNQVhfU1VQUE9SVEVEX1lFQVIgPSAyMDUwO1xuXG5jb25zdCBVUERBVEVTX0RJUiA9ICd1cGRhdGVzJztcbmNvbnN0IENPTlRFTlRfRElTUE9TSVRJT05fSEVBREVSID0gJ0NvbnRlbnQtRGlzcG9zaXRpb24nO1xuY29uc3QgVVBEQVRFX1RNUF9GSUxFID0gJ2FtcC1vZmZsaW5lLWluc3RhbGxlci50bXAnO1xuXG5jb25zdCBPVEhFUl9JRCA9IDk5OTk5OTk5OTtcbmNvbnN0IE5SX1NZTkNfSElTVE9SWV9FTlRSSUVTID0gMjA7XG5jb25zdCBOUl9MT0dfRklMRVMgPSAxMDA7XG4vLyBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9JU09fODYwMSNEdXJhdGlvbnMsIGV4YW1wbGU6IFwiUDFZMk0xMERUMkgzME1cIlxuY29uc3QgT0xEX1NZTkNfTE9HU19EVVJBVElPTl9JU09fODYwMSA9ICdQNk0nO1xuY29uc3QgTlJfT0xEX1NZTkNfTE9HU19UT19LRUVQX01JTklNVU0gPSBOUl9TWU5DX0hJU1RPUllfRU5UUklFUztcblxuY29uc3QgTUFTVEVSX0JSQU5DSCA9ICdtYXN0ZXInO1xuY29uc3QgREVWRUxPUF9CUkFOQ0ggPSAnZGV2ZWxvcCc7XG5jb25zdCBSRUxFQVNFX0JSQU5DSF9SRUdFWCA9IC9yZWxlYXNlXFwvLztcbmNvbnN0IFJFTEVBU0VfQlJBTkNIRVMgPSBbTUFTVEVSX0JSQU5DSCwgUkVMRUFTRV9CUkFOQ0hfUkVHRVhdO1xuXG5jb25zdCBESVNBQkxFX0NIQU5HRUxPR1MgPSAnRElTQUJMRV9DSEFOR0VMT0dTJztcblxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuZnJlZXplKHtcbiAgQkFTRV9SRVNUX1VSTCxcbiAgQ09OTkVDVElPTl9USU1FT1VULFxuICBDT05ORUNUSU9OX0ZPUkNFRF9USU1FT1VULFxuICBUSU1FT1VUX0NIRUNLX0lOVEVSVkFMLFxuICBNQVhfUkVUUllfQVRFTVBUUyxcbiAgRVJST1JTX1RPX1JFVFJZLFxuICBFUlJPUlNfTk9fQU1QX1NFUlZFUixcbiAgQ09OTkVDVElWSVRZX0NIRUNLX0lOVEVSVkFMLFxuICBXT1JLU1BBQ0VfVVJMLFxuICBMT0dJTl9VUkwsXG4gIERFU0tUT1BfVVJMLFxuICBERVNLVE9QX0NVUlJFTlRfVVJMLFxuICBTWU5DVVBfUkVESVJFQ1RfVVJMLFxuICBTWU5DVVBfSElTVE9SWV9UQVJHRVQsXG4gIFNZTkNVUF9TVU1NQVJZX1VSTCxcbiAgQUNUSVZJVFlfUFJFVklFV19VUkwsXG4gIEFDVElWSVRZX0VESVRfVVJMLFxuICBVUERBVEVfVVJMLFxuICBTRVRVUF9VUkwsXG4gIFNFVFRJTkdTX1VSTCxcbiAgQ09MTEVDVElPTl9VU0VSUyxcbiAgQ09MTEVDVElPTl9XT1JLUEFDRVMsXG4gIENPTExFQ1RJT05fVEVBTU1FTUJFUlMsXG4gIENPTExFQ1RJT05fQ0xJRU5UX1NFVFRJTkdTLFxuICBDT0xMRUNUSU9OX0dMT0JBTF9TRVRUSU5HUyxcbiAgQ09MTEVDVElPTl9BQ1RJVklUSUVTLFxuICBDT0xMRUNUSU9OX0ZJRUxEUyxcbiAgQ09MTEVDVElPTl9QT1NTSUJMRV9WQUxVRVMsXG4gIENPTExFQ1RJT05fU1lOQ1VQX0xPRyxcbiAgQ09MTEVDVElPTl9MQU5HUyxcbiAgQ09MTEVDVElPTl9XU19TRVRUSU5HUyxcbiAgQ09MTEVDVElPTl9DVVJSRU5DWV9SQVRFUyxcbiAgQ09MTEVDVElPTl9GRUFUVVJFX01BTkFHRVIsXG4gIENPTExFQ1RJT05fQ09OVEFDVFMsXG4gIENPTExFQ1RJT05fUkVTT1VSQ0VTLFxuICBDT0xMRUNUSU9OX1JFUE9TSVRPUlksXG4gIENPTExFQ1RJT05fR0FaRVRURUVSLFxuICBDT0xMRUNUSU9OX0NBTEVOREFSUyxcbiAgQ09MTEVDVElPTl9DSEFOR0VTRVRTLFxuICBHQVpFVFRFRVJfRElTVEFOQ0VfRElWSURFLFxuICBEQl9GSUxFX1BSRUZJWCxcbiAgREJfRklMRV9FWFRFTlNJT04sXG4gIERCX0NPTU1PTl9EQVRBU1RPUkVfT1BUSU9OUyxcbiAgREJfQVVUT0NPTVBBQ1RfSU5URVJWQUxfTUlMSVNFQ09ORFMsXG4gIERCX0RFRkFVTFRfUVVFUllfTElNSVQsXG4gIExBTkdVQUdFX0VOR0xJU0gsXG4gIEZTX0xPQ0FMRVNfRElSRUNUT1JZLFxuICBMQU5HVUFHRV9NQVNURVJfVFJBTlNMQVRJT05TX0ZJTEUsXG4gIExBTkdVQUdFX1RSQU5TTEFUSU9OU19GSUxFLFxuICBMQU5HVUFHRV9ORVdfVFJBTlNMQVRJT05TX01VU1RfU1lOQyxcbiAgQVNBUl9ESVIsXG4gIEFQUF9ESVJFQ1RPUlksXG4gIFRFU1RfRElSRUNUT1JZLFxuICBTVEFUSUNfRElSLFxuICBJTUFHRVNfRElSLFxuICBET0NfSUNPTlMsXG4gIERCX1NUQVRJQ19ESVIsXG4gIE1JR1JBVElPTlNfRElSLFxuICBIQVNIX0lURVJBVElPTlMsXG4gIERJR0VTVF9BTEdPUklUSE1fU0hBMSxcbiAgRElHRVNUX0FMR09SSVRITV9TSEEyNTYsXG4gIEFDVElWSVRZX0VESVQsXG4gIEFDVElWSVRZX1ZJRVcsXG4gIFNZTkNVUF9GT1JDRV9EQVlTLFxuICBTWU5DVVBfQkVTVF9CRUZPUkVfREFZUyxcbiAgU1lOQ1VQX05PX0RBVEUsXG4gIFNZTkNVUF9UWVBFX1RSQU5TTEFUSU9OUyxcbiAgU1lOQ1VQX1RZUEVfVVNFUlMsXG4gIFNZTkNVUF9UWVBFX0FTU0VUUyxcbiAgU1lOQ1VQX1RZUEVfV09SS1NQQUNFUyxcbiAgU1lOQ1VQX1RZUEVfR1MsXG4gIFNZTkNVUF9UWVBFX0VYQ0hBTkdFX1JBVEVTLFxuICBTWU5DVVBfVFlQRV9GRUFUVVJFX01BTkFHRVIsXG4gIFNZTkNVUF9UWVBFX1dPUktTUEFDRV9NRU1CRVJTLFxuICBTWU5DVVBfVFlQRV9BTExfRklFTERTLFxuICBTWU5DVVBfVFlQRV9BQ1RJVklUSUVTX1BVTEwsXG4gIFNZTkNVUF9UWVBFX0FDVElWSVRJRVNfUFVTSCxcbiAgU1lOQ1VQX1RZUEVfQUNUSVZJVFlfRklFTERTLFxuICBTWU5DVVBfVFlQRV9BQ1RJVklUWV9GSUVMRFNfU1RSVUNUVVJBTF9DSEFOR0VTLFxuICBTWU5DVVBfVFlQRV9DT05UQUNUU19QVUxMLFxuICBTWU5DVVBfVFlQRV9DT05UQUNUU19QVVNILFxuICBTWU5DVVBfVFlQRV9BQ1RJVklUWV9QT1NTSUJMRV9WQUxVRVMsXG4gIFNZTkNVUF9UWVBFX0NPTlRBQ1RfRklFTERTLFxuICBTWU5DVVBfVFlQRV9DT05UQUNUX0ZJRUxEU19TVFJVQ1RVUkFMX0NIQU5HRVMsXG4gIFNZTkNVUF9UWVBFX0NPTlRBQ1RfUE9TU0lCTEVfVkFMVUVTLFxuICBTWU5DVVBfVFlQRV9SRVNPVVJDRVNfUFVMTCxcbiAgU1lOQ1VQX1RZUEVfUkVTT1VSQ0VTX1BVU0gsXG4gIFNZTkNVUF9UWVBFX1JFU09VUkNFX0ZJRUxEUyxcbiAgU1lOQ1VQX1RZUEVfUkVTT1VSQ0VfRklFTERTX1NUUlVDVFVSQUxfQ0hBTkdFUyxcbiAgU1lOQ1VQX1RZUEVfUkVTT1VSQ0VfUE9TU0lCTEVfVkFMVUVTLFxuICBTWU5DVVBfVFlQRV9DT01NT05fUE9TU0lCTEVfVkFMVUVTLFxuICBTWU5DVVBfVFlQRV9XT1JLU1BBQ0VfU0VUVElOR1MsXG4gIFNZTkNVUF9UWVBFX01BUF9USUxFUyxcbiAgU1lOQ1VQX1RZUEVfR0FaRVRURUVSLFxuICBTWU5DVVBfVFlQRV9DQUxFTkRBUlMsXG4gIFNZTkNVUF9TVEFUVVNfU1VDQ0VTUyxcbiAgU1lOQ1VQX1NUQVRVU19GQUlMLFxuICBTWU5DVVBfU1RBVFVTX1BBUlRJQUwsXG4gIFNZTkNVUF9TVEFUVVNfQ0FOQ0VMRUQsXG4gIFNZTkNVUF9TWU5DX1JFUVVFU1RFRF9BVCxcbiAgU1lOQ1VQX1NZTkNfUkVRVUVTVEVEX0JZLFxuICBTWU5DVVBfREFURVRJTUVfRklFTEQsXG4gIFNZTkNVUF9ESUZGX0xFRlRPVkVSLFxuICBTWU5DVVBfREVQRU5ERU5DWV9DSEVDS19JTlRFUlZBTCxcbiAgU1lOQ1VQX0RFVEFJTFNfU1lOQ0VELFxuICBTWU5DVVBfREVUQUlMU19VTlNZTkNFRCxcbiAgU1lOQ1VQX1JFU09VUkNFX1BVTExfQkFUQ0hfU0laRSxcbiAgU1lOQ1VQX0FDVElWSVRJRVNfUFVMTF9CQVRDSF9TSVpFLFxuICBTWU5DVVBfQ09OVEFDVFNfUFVMTF9CQVRDSF9TSVpFLFxuICBBQ1RJVklUWV9TVEFUVVNfRFJBRlQsXG4gIEFDVElWSVRZX1NUQVRVU19VTlZBTElEQVRFRCxcbiAgQUNUSVZJVFlfU1RBVFVTX1ZBTElEQVRFRCxcbiAgQ1VSUkVOQ1lfSE9VUixcbiAgREVGQVVMVF9DVVJSRU5DWSxcbiAgUkFURV9TQU1FX0NVUlJFTkNZLFxuICBSQVRFX0NVUlJFTkNZX05PVF9GT1VORCxcbiAgQ1VSUkVOQ1lfUEFJUixcbiAgVkVSU0lPTl9QQVRURVJOLFxuICBWRVJTSU9OX1BBVFRFUk5fR1JPVVBTX1RPX0VYVFJBQ1QsXG4gIEFNUF9DT1VOVFJZX0xPR08sXG4gIEFTU0VUU19ESVJFQ1RPUlksXG4gIEJBU0VfNjRfUE5HX1BSRUZJWCxcbiAgVFJBTlNQQVJFTlRfRkxBRyxcbiAgSEVMUF9QREZfRklMRU5BTUUsXG4gIEhFTFBfRElSLFxuICBFTkRTX1dJVEhfUFVOQ1RVQVRJT05fUkVHRVgsXG4gIE1BUF9USUxFU19ESVIsXG4gIFRJTEVTX1pJUF9GSUxFLFxuICBNQVBfTUFSS0VSX0lNQUdFLFxuICBNQVBfTUFSS0VSX1NIQURPVyxcbiAgTUFQX01BUktFUl9DSVJDTEVfUkVELFxuICBNQVBfTUFSS0VSX0NJUkNMRV9HUkVFTixcbiAgUE9MWUdPTl9CQVNFX0NPTE9SLFxuICBER19DT01QQU5ZX05BTUUsXG4gIERHX0FERFJFU1NfMSxcbiAgREdfQUREUkVTU18yLFxuICBER19DT05UQUNUX0lORk8sXG4gIExPR19ESVIsXG4gIExPR19GSUxFX05BTUUsXG4gIExPR19GSUxFX0VYVEVOU0lPTixcbiAgTUVTU0FHRV9USU1FT1VULFxuICBNRVNTQUdFX0RJU0FQUEVBUl9USU1FT1VULFxuICBNRVNTQUdFX0NIRUNLX0lOVEVSVkFMLFxuICBNRVNTQUdFX0FOSU1BVElPTl9EVVJBVElPTixcbiAgSU5URVJOQUxfREFURV9GT1JNQVQsXG4gIE1JTl9TVVBQT1JURURfWUVBUixcbiAgTUFYX1NVUFBPUlRFRF9ZRUFSLFxuICBVUERBVEVTX0RJUixcbiAgQ09OVEVOVF9ESVNQT1NJVElPTl9IRUFERVIsXG4gIFVQREFURV9UTVBfRklMRSxcbiAgT1RIRVJfSUQsXG4gIE5SX1NZTkNfSElTVE9SWV9FTlRSSUVTLFxuICBOUl9MT0dfRklMRVMsXG4gIE9MRF9TWU5DX0xPR1NfRFVSQVRJT05fSVNPXzg2MDEsXG4gIE5SX09MRF9TWU5DX0xPR1NfVE9fS0VFUF9NSU5JTVVNLFxuICBNQVNURVJfQlJBTkNILFxuICBERVZFTE9QX0JSQU5DSCxcbiAgUkVMRUFTRV9CUkFOQ0hfUkVHRVgsXG4gIFJFTEVBU0VfQlJBTkNIRVMsXG4gIERJU0FCTEVfQ0hBTkdFTE9HU1xufSk7XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBtYXgtbGVuICovXG5cbi8qKlxuICogQGF1dGhvciBOYWRlamRhIE1hbmRyZXNjdVxuICovXG5cbmNvbnN0IFBVQkxJQ19WSUVXX0NIQU5HRV9QQVNTV09SRCA9ICcvUFVCTElDIFZJRVcvTG9naW4gLSBVc2VyIE1hbmFnZW1lbnQvQ2hhbmdlIFBhc3N3b3JkJztcbmNvbnN0IFBVQkxJQ19WSUVXX1RST1VCTEVfU0lHTl9JTiA9ICcvUFVCTElDIFZJRVcvTG9naW4gLSBVc2VyIE1hbmFnZW1lbnQvVHJvdWJsZSBzaWduaW5nIGluJztcbmNvbnN0IEFDVElWSVRZX0RFTElWRVJZX1JBVEUgPSAnL1BST0pFQ1QgTUFOQUdFTUVOVC9GdW5kaW5nL0Z1bmRpbmcgSW5mb3JtYXRpb24vRGVsaXZlcnkgcmF0ZSc7XG5jb25zdCBBQ1RJVklUWV9QUk9KRUNUX0lEX0FORF9QTEFOTklORyA9ICcvUFJPSkVDVCBNQU5BR0VNRU5UL1Byb2plY3QgSUQgYW5kIFBsYW5uaW5nJztcbmNvbnN0IEFDVElWSVRZX0RVUkFUSU9OX09GX1BST0pFQ1QgPSAnL1BST0pFQ1QgTUFOQUdFTUVOVC9Qcm9qZWN0IElEIGFuZCBQbGFubmluZy9QbGFubmluZy9EdXJhdGlvbiBvZiBQcm9qZWN0JztcbmNvbnN0IEFDVElWSVRZX1RFQU1fTEVBREVSID0gJy9QUk9KRUNUIE1BTkFHRU1FTlQvUHJvamVjdCBJRCBhbmQgUGxhbm5pbmcvSWRlbnRpZmljYXRpb24vRGF0YSBUZWFtIExlYWRlcic7XG5jb25zdCBBQ1RJVklUWV9TQU1FX0FTX1BST1BPU0VEX1NUQVJUX0RBVEUgPVxuICAnL0FjdGl2aXR5IEZvcm0vUGxhbm5pbmcvQWN0dWFsIFN0YXJ0IERhdGUvU2FtZSBBcyBQcm9wb3NlZCBTdGFydCBEYXRlJztcbmNvbnN0IEFDVElWSVRZX1NBTUVfQVNfUFJPUE9TRURfQVBQUk9WQUxfREFURSA9XG4gICcvQWN0aXZpdHkgRm9ybS9QbGFubmluZy9BY3R1YWwgQXBwcm92YWwgRGF0ZS9TYW1lIEFzIFByb3Bvc2VkIEFwcHJvdmFsIERhdGUnO1xuY29uc3QgQUNUSVZJVFlfSURFTlRJRklDQVRJT04gPSAnL0FjdGl2aXR5IEZvcm0vSWRlbnRpZmljYXRpb24nO1xuY29uc3QgQUNUSVZJVFlfTEFTVF9VUERBVEVEX0JZID0gJy9BY3Rpdml0eSBGb3JtL0lkZW50aWZpY2F0aW9uL0FjdGl2aXR5IExhc3QgVXBkYXRlZCBieSc7XG5jb25zdCBBQ1RJVklUWV9MQVNUX1VQREFURURfT04gPSAnL0FjdGl2aXR5IEZvcm0vSWRlbnRpZmljYXRpb24vQWN0aXZpdHkgVXBkYXRlZCBPbic7XG5jb25zdCBBQ1RJVklUWV9GVU5ESU5HID0gJy9BY3Rpdml0eSBGb3JtL0Z1bmRpbmcnO1xuY29uc3QgQUZfRlVORElOR19GVU5ESU5HR1JPVVBfRlVORElOR0lURU0gPSBgJHtBQ1RJVklUWV9GVU5ESU5HfS9GdW5kaW5nIEdyb3VwL0Z1bmRpbmcgSXRlbWA7XG5jb25zdCBBQ1RJVklUWV9TRUNUT1JTID0gJy9BY3Rpdml0eSBGb3JtL1NlY3RvcnMnO1xuY29uc3QgQUNUSVZJVFlfUFJJTUFSWV9TRUNUT1JTID0gJy9BY3Rpdml0eSBGb3JtL1NlY3RvcnMvUHJpbWFyeSBTZWN0b3JzJztcbmNvbnN0IEFDVElWSVRZX1NFQ09OREFSWV9TRUNUT1JTID0gJy9BY3Rpdml0eSBGb3JtL1NlY3RvcnMvU2Vjb25kYXJ5IFNlY3RvcnMnO1xuXG5jb25zdCBBQ1RJVklUWV9TVFJVQ1RVUkVTID0gJy9BY3Rpdml0eSBGb3JtL1N0cnVjdHVyZXMnO1xuY29uc3QgQUNUSVZJVFlfU1RSVUNUVVJFU19BRERfU1RSVUNUVVJFID0gYCR7QUNUSVZJVFlfU1RSVUNUVVJFU30vQWRkIFN0cnVjdHVyZWA7XG5cbmNvbnN0IEFDVElWSVRZX09SR0FOSVpBVElPTlMgPSAnL0FjdGl2aXR5IEZvcm0vT3JnYW5pemF0aW9ucyc7XG5jb25zdCBBQ1RJVklUWV9PUkdBTklaQVRJT05TX0RPTk9SX09SR0FOSVpBVElPTiA9IGAke0FDVElWSVRZX09SR0FOSVpBVElPTlN9L0Rvbm9yIE9yZ2FuaXphdGlvbmA7XG5jb25zdCBBQ1RJVklUWV9PUkdBTklaQVRJT05TX0JFTkVGSUNJQVJZX0FHRU5DWSA9IGAke0FDVElWSVRZX09SR0FOSVpBVElPTlN9L0JlbmVmaWNpYXJ5IEFnZW5jeWA7XG5jb25zdCBBQ1RJVklUWV9PUkdBTklaQVRJT05TX0NPTlRSQUNUSU5HX0FHRU5DWSA9IGAke0FDVElWSVRZX09SR0FOSVpBVElPTlN9L0NvbnRyYWN0aW5nIEFnZW5jeWA7XG5jb25zdCBBQ1RJVklUWV9PUkdBTklaQVRJT05TX0VYRUNVVElOR19BR0VOQ1kgPSBgJHtBQ1RJVklUWV9PUkdBTklaQVRJT05TfS9FeGVjdXRpbmcgQWdlbmN5YDtcbmNvbnN0IEFDVElWSVRZX09SR0FOSVpBVElPTlNfSU1QTEVNRU5USU5HX0FHRU5DWSA9IGAke0FDVElWSVRZX09SR0FOSVpBVElPTlN9L0ltcGxlbWVudGluZyBBZ2VuY3lgO1xuY29uc3QgQUNUSVZJVFlfT1JHQU5JWkFUSU9OU19SRUdJT05BTF9HUk9VUCA9IGAke0FDVElWSVRZX09SR0FOSVpBVElPTlN9L1JlZ2lvbmFsIEdyb3VwYDtcbmNvbnN0IEFDVElWSVRZX09SR0FOSVpBVElPTlNfUkVMQVRFRF9HT1ZFUk5NRU5UX09SR0FOSVpBVElPTiA9IGAke0FDVElWSVRZX09SR0FOSVpBVElPTlN9L1JlbGF0ZWQgR292ZXJubWVudCBPcmdhbml6YXRpb25gO1xuY29uc3QgQUNUSVZJVFlfT1JHQU5JWkFUSU9OU19TRUNUT1JfR1JPVVAgPSBgJHtBQ1RJVklUWV9PUkdBTklaQVRJT05TfS9TZWN0b3IgR3JvdXBgO1xuXG5jb25zdCBBRERfRlVORElOR19BVVRPID0gJ0FkZCBGdW5kaW5nIEl0ZW0gQXV0b21hdGljYWxseSc7XG5jb25zdCBBQ1RJVklUWV9PUkdBTklaQVRJT05TX0JFTkVGSUNJQVJZX0FHRU5DWV9BRERfRlVORElOR19BVVRPID0gYCR7QUNUSVZJVFlfT1JHQU5JWkFUSU9OU19CRU5FRklDSUFSWV9BR0VOQ1l9LyR7QUREX0ZVTkRJTkdfQVVUT31gO1xuY29uc3QgQUNUSVZJVFlfT1JHQU5JWkFUSU9OU19DT05UUkFDVElOR19BR0VOQ1lfQUREX0ZVTkRJTkdfQVVUTyA9IGAke0FDVElWSVRZX09SR0FOSVpBVElPTlNfQ09OVFJBQ1RJTkdfQUdFTkNZfS8ke0FERF9GVU5ESU5HX0FVVE99YDtcbmNvbnN0IEFDVElWSVRZX09SR0FOSVpBVElPTlNfRE9OT1JfT1JHQU5JWkFUSU9OX0FERF9GVU5ESU5HX0FVVE8gPSBgJHtBQ1RJVklUWV9PUkdBTklaQVRJT05TX0RPTk9SX09SR0FOSVpBVElPTn0vJHtBRERfRlVORElOR19BVVRPfWA7XG5jb25zdCBBQ1RJVklUWV9PUkdBTklaQVRJT05TX0VYRUNVVElOR19BR0VOQ1lfQUREX0ZVTkRJTkdfQVVUTyA9IGAke0FDVElWSVRZX09SR0FOSVpBVElPTlNfRVhFQ1VUSU5HX0FHRU5DWX0vJHtBRERfRlVORElOR19BVVRPfWA7XG5jb25zdCBBQ1RJVklUWV9PUkdBTklaQVRJT05TX0lNUExFTUVOVElOR19BR0VOQ1lfQUREX0ZVTkRJTkdfQVVUTyA9IGAke0FDVElWSVRZX09SR0FOSVpBVElPTlNfSU1QTEVNRU5USU5HX0FHRU5DWX0vJHtBRERfRlVORElOR19BVVRPfWA7XG5jb25zdCBBQ1RJVklUWV9PUkdBTklaQVRJT05TX1JFR0lPTkFMX0dST1VQX0FERF9GVU5ESU5HX0FVVE8gPSBgJHtBQ1RJVklUWV9PUkdBTklaQVRJT05TX1JFR0lPTkFMX0dST1VQfS8ke0FERF9GVU5ESU5HX0FVVE99YDtcbmNvbnN0IEFDVElWSVRZX09SR0FOSVpBVElPTlNfUkVTUE9OU0lCTEVfT1JHQU5JWkFUSU9OX0FERF9GVU5ESU5HX0FVVE8gPSBgJHtBQ1RJVklUWV9PUkdBTklaQVRJT05TX1JFTEFURURfR09WRVJOTUVOVF9PUkdBTklaQVRJT059LyR7QUREX0ZVTkRJTkdfQVVUT31gO1xuY29uc3QgQUNUSVZJVFlfT1JHQU5JWkFUSU9OU19TRUNUT1JfR1JPVVBfQUREX0ZVTkRJTkdfQVVUTyA9IGAke0FDVElWSVRZX09SR0FOSVpBVElPTlNfU0VDVE9SX0dST1VQfS8ke0FERF9GVU5ESU5HX0FVVE99YDtcblxuY29uc3QgQUNUSVZJVFlfRlVORElOR19TRUFSQ0ggPSBgJHtBQ1RJVklUWV9GVU5ESU5HfS9TZWFyY2ggRnVuZGluZyBPcmdhbml6YXRpb25zYDtcbmNvbnN0IEFDVElWSVRZX0ZVTkRJTkdfU0VBUkNIX09SR0FOSVpBVElPTiA9IGAke0FDVElWSVRZX0ZVTkRJTkdfU0VBUkNIfS9TZWFyY2ggT3JnYW5pemF0aW9uc2A7XG5jb25zdCBBQ1RJVklUWV9GVU5ESU5HX1NFTEVDVF9PUkdfVFlQRSA9IGAke0FDVElWSVRZX0ZVTkRJTkdfU0VBUkNIfS9TZWxlY3QgT3JnYW5pemF0aW9uIFR5cGVgO1xuXG5jb25zdCBBQ1RJVklUWV9QUk9HUkFNID0gJy9BY3Rpdml0eSBGb3JtL1Byb2dyYW0nO1xuY29uc3QgQUNUSVZJVFlfUExBTk5JTkcgPSAnL0FjdGl2aXR5IEZvcm0vUGxhbm5pbmcnO1xuXG5jb25zdCBBQ1RJVklUWV9DT05UQUNUID0gJy9BY3Rpdml0eSBGb3JtL0NvbnRhY3RzJztcbmNvbnN0IEFDVElWSVRZX0RPQ1VNRU5UU19BRERfRE9DVU1FTlQgPSAnL0FjdGl2aXR5IEZvcm0vUmVsYXRlZCBEb2N1bWVudHMvQWRkIE5ldyBEb2N1bWVudCc7XG5jb25zdCBBQ1RJVklUWV9ET0NVTUVOVFNfQUREX1dFQkxJTksgPSAnL0FjdGl2aXR5IEZvcm0vUmVsYXRlZCBEb2N1bWVudHMvQWRkIE5ldyBXZWIgTGluayc7XG5cbmNvbnN0IEFDVElWSVRZX0lTU1VFU19BRERfSVNTVUUgPSAnL0FjdGl2aXR5IEZvcm0vSXNzdWVzIFNlY3Rpb24vQWRkIElzc3VlJztcbmNvbnN0IEFDVElWSVRZX0lTU1VFU19ERUxFVEVfSVNTVUUgPSAnL0FjdGl2aXR5IEZvcm0vSXNzdWVzIFNlY3Rpb24vSXNzdWUvRGVsZXRlIEl0ZW0nO1xuY29uc3QgQUNUSVZJVFlfSVNTVUVTX0FERF9NRUFTVVJFID0gJy9BY3Rpdml0eSBGb3JtL0lzc3VlcyBTZWN0aW9uL0lzc3VlL0FkZCBJdGVtJztcbmNvbnN0IEFDVElWSVRZX0lTU1VFU19ERUxFVEVfTUVBU1VSRSA9ICcvQWN0aXZpdHkgRm9ybS9Jc3N1ZXMgU2VjdGlvbi9Jc3N1ZS9NZWFzdXJlL0RlbGV0ZSBJdGVtJztcbmNvbnN0IEFDVElWSVRZX0lTU1VFU19BRERfQUNUT1IgPSAnL0FjdGl2aXR5IEZvcm0vSXNzdWVzIFNlY3Rpb24vSXNzdWUvTWVhc3VyZS9BZGQgSXRlbSc7XG5jb25zdCBBQ1RJVklUWV9JU1NVRVNfREVMRVRFX0FDVE9SID0gJy9BY3Rpdml0eSBGb3JtL0lzc3VlcyBTZWN0aW9uL0lzc3VlL01lYXN1cmUvQWN0b3IvRGVsZXRlIEl0ZW0nO1xuXG5jb25zdCBBQ1RJVklUWV9ESVNCVVJTRU1FTlRTX0ZVTkRJTkdfRkxPV1NfT1JHUk9MRV9BRERfSU1QTEVNRU5USU5HX0FHRU5DWSA9XG4gIGAke0FGX0ZVTkRJTkdfRlVORElOR0dST1VQX0ZVTkRJTkdJVEVNfS9EaXNidXJzZW1lbnRzL0Rpc2J1cnNlbWVudHMgVGFibGUvRnVuZGluZyBGbG93cyBPcmdSb2xlIFNlbGVjdG9yL0FkZCBJbXBsZW1lbnRpbmcgQWdlbmN5YDtcbmNvbnN0IEFDVElWSVRZX0RJU0JVUlNFTUVOVFNfRlVORElOR19GTE9XU19PUkdST0xFX0FERF9DT05UUkFDVElOR19BR0VOQ1kgPVxuICBgJHtBRl9GVU5ESU5HX0ZVTkRJTkdHUk9VUF9GVU5ESU5HSVRFTX0vRGlzYnVyc2VtZW50cy9EaXNidXJzZW1lbnRzIFRhYmxlL0Z1bmRpbmcgRmxvd3MgT3JnUm9sZSBTZWxlY3Rvci9BZGQgQ29udHJhY3RpbmcgQWdlbmN5YDtcbmNvbnN0IEFDVElWSVRZX0RJU0JVUlNFTUVOVFNfRlVORElOR19GTE9XU19PUkdST0xFX0FERF9CRU5FRklDSUFSWV9BR0VOQ1kgPVxuICBgJHtBRl9GVU5ESU5HX0ZVTkRJTkdHUk9VUF9GVU5ESU5HSVRFTX0vRGlzYnVyc2VtZW50cy9EaXNidXJzZW1lbnRzIFRhYmxlL0Z1bmRpbmcgRmxvd3MgT3JnUm9sZSBTZWxlY3Rvci9BZGQgQmVuZWZpY2lhcnkgQWdlbmN5YDtcbmNvbnN0IEFDVElWSVRZX0RJU0JVUlNFTUVOVFNfRlVORElOR19GTE9XU19PUkdST0xFX0FERF9ET05PUl9PUkdBTklaQVRJT04gPVxuICBgJHtBRl9GVU5ESU5HX0ZVTkRJTkdHUk9VUF9GVU5ESU5HSVRFTX0vRGlzYnVyc2VtZW50cy9EaXNidXJzZW1lbnRzIFRhYmxlL0Z1bmRpbmcgRmxvd3MgT3JnUm9sZSBTZWxlY3Rvci9BZGQgRG9ub3IgT3JnYW5pemF0aW9uYDtcbmNvbnN0IEFDVElWSVRZX0RJU0JVUlNFTUVOVFNfRlVORElOR19GTE9XU19PUkdST0xFX0FERF9FWEVDVVRJTkdfQUdFTkNZID1cbiAgYCR7QUZfRlVORElOR19GVU5ESU5HR1JPVVBfRlVORElOR0lURU19L0Rpc2J1cnNlbWVudHMvRGlzYnVyc2VtZW50cyBUYWJsZS9GdW5kaW5nIEZsb3dzIE9yZ1JvbGUgU2VsZWN0b3IvQWRkIEV4ZWN1dGluZyBBZ2VuY3lgO1xuY29uc3QgQUNUSVZJVFlfRElTQlVSU0VNRU5UU19GVU5ESU5HX0ZMT1dTX09SR1JPTEVfQUREX1JFR0lPTkFMX0dST1VQID1cbiAgYCR7QUZfRlVORElOR19GVU5ESU5HR1JPVVBfRlVORElOR0lURU19L0Rpc2J1cnNlbWVudHMvRGlzYnVyc2VtZW50cyBUYWJsZS9GdW5kaW5nIEZsb3dzIE9yZ1JvbGUgU2VsZWN0b3IvQWRkIFJlZ2lvbmFsIEdyb3VwYDtcbmNvbnN0IEFDVElWSVRZX0RJU0JVUlNFTUVOVFNfRlVORElOR19GTE9XU19PUkdST0xFX0FERF9SRVNQT05TSUJMRV9PUkdBTklaQVRJT04gPVxuICBgJHtBRl9GVU5ESU5HX0ZVTkRJTkdHUk9VUF9GVU5ESU5HSVRFTX0vRGlzYnVyc2VtZW50cy9EaXNidXJzZW1lbnRzIFRhYmxlL0Z1bmRpbmcgRmxvd3MgT3JnUm9sZSBTZWxlY3Rvci9BZGQgUmVzcG9uc2libGUgT3JnYW5pemF0aW9uYDtcbmNvbnN0IEFDVElWSVRZX0RJU0JVUlNFTUVOVFNfRlVORElOR19GTE9XU19PUkdST0xFX0FERF9TRUNUT1JfR1JPVVAgPVxuICBgJHtBRl9GVU5ESU5HX0ZVTkRJTkdHUk9VUF9GVU5ESU5HSVRFTX0vRGlzYnVyc2VtZW50cy9EaXNidXJzZW1lbnRzIFRhYmxlL0Z1bmRpbmcgRmxvd3MgT3JnUm9sZSBTZWxlY3Rvci9BZGQgU2VjdG9yIEdyb3VwYDtcblxuY29uc3QgQUNUSVZJVFlfQ09NTUlUTUVOVFNfRlVORElOR19GTE9XU19PUkdST0xFX0FERF9JTVBMRU1FTlRJTkdfQUdFTkNZID1cbiAgYCR7QUZfRlVORElOR19GVU5ESU5HR1JPVVBfRlVORElOR0lURU19L0NvbW1pdG1lbnRzL0NvbW1pdG1lbnRzIFRhYmxlL0Z1bmRpbmcgRmxvd3MgT3JnUm9sZSBTZWxlY3Rvci9BZGQgSW1wbGVtZW50aW5nIEFnZW5jeWA7XG5jb25zdCBBQ1RJVklUWV9DT01NSVRNRU5UU19GVU5ESU5HX0ZMT1dTX09SR1JPTEVfQUREX0NPTlRSQUNUSU5HX0FHRU5DWSA9XG4gIGAke0FGX0ZVTkRJTkdfRlVORElOR0dST1VQX0ZVTkRJTkdJVEVNfS9Db21taXRtZW50cy9Db21taXRtZW50cyBUYWJsZS9GdW5kaW5nIEZsb3dzIE9yZ1JvbGUgU2VsZWN0b3IvQWRkIENvbnRyYWN0aW5nIEFnZW5jeWA7XG5jb25zdCBBQ1RJVklUWV9DT01NSVRNRU5UU19GVU5ESU5HX0ZMT1dTX09SR1JPTEVfQUREX0JFTkVGSUNJQVJZX0FHRU5DWSA9XG4gIGAke0FGX0ZVTkRJTkdfRlVORElOR0dST1VQX0ZVTkRJTkdJVEVNfS9Db21taXRtZW50cy9Db21taXRtZW50cyBUYWJsZS9GdW5kaW5nIEZsb3dzIE9yZ1JvbGUgU2VsZWN0b3IvQWRkIEJlbmVmaWNpYXJ5IEFnZW5jeWA7XG5jb25zdCBBQ1RJVklUWV9DT01NSVRNRU5UU19GVU5ESU5HX0ZMT1dTX09SR1JPTEVfQUREX0RPTk9SX09SR0FOSVpBVElPTiA9XG4gIGAke0FGX0ZVTkRJTkdfRlVORElOR0dST1VQX0ZVTkRJTkdJVEVNfS9Db21taXRtZW50cy9Db21taXRtZW50cyBUYWJsZS9GdW5kaW5nIEZsb3dzIE9yZ1JvbGUgU2VsZWN0b3IvQWRkIERvbm9yIE9yZ2FuaXphdGlvbmA7XG5jb25zdCBBQ1RJVklUWV9DT01NSVRNRU5UU19GVU5ESU5HX0ZMT1dTX09SR1JPTEVfQUREX0VYRUNVVElOR19BR0VOQ1kgPVxuICBgJHtBRl9GVU5ESU5HX0ZVTkRJTkdHUk9VUF9GVU5ESU5HSVRFTX0vQ29tbWl0bWVudHMvQ29tbWl0bWVudHMgVGFibGUvRnVuZGluZyBGbG93cyBPcmdSb2xlIFNlbGVjdG9yL0FkZCBFeGVjdXRpbmcgQWdlbmN5YDtcbmNvbnN0IEFDVElWSVRZX0NPTU1JVE1FTlRTX0ZVTkRJTkdfRkxPV1NfT1JHUk9MRV9BRERfUkVHSU9OQUxfR1JPVVAgPVxuICBgJHtBRl9GVU5ESU5HX0ZVTkRJTkdHUk9VUF9GVU5ESU5HSVRFTX0vQ29tbWl0bWVudHMvQ29tbWl0bWVudHMgVGFibGUvRnVuZGluZyBGbG93cyBPcmdSb2xlIFNlbGVjdG9yL0FkZCBSZWdpb25hbCBHcm91cGA7XG5jb25zdCBBQ1RJVklUWV9DT01NSVRNRU5UU19GVU5ESU5HX0ZMT1dTX09SR1JPTEVfQUREX1JFU1BPTlNJQkxFX09SR0FOSVpBVElPTiA9XG4gIGAke0FGX0ZVTkRJTkdfRlVORElOR0dST1VQX0ZVTkRJTkdJVEVNfS9Db21taXRtZW50cy9Db21taXRtZW50cyBUYWJsZS9GdW5kaW5nIEZsb3dzIE9yZ1JvbGUgU2VsZWN0b3IvQWRkIFJlc3BvbnNpYmxlIE9yZ2FuaXphdGlvbmA7XG5jb25zdCBBQ1RJVklUWV9DT01NSVRNRU5UU19GVU5ESU5HX0ZMT1dTX09SR1JPTEVfQUREX1NFQ1RPUl9HUk9VUCA9XG4gIGAke0FGX0ZVTkRJTkdfRlVORElOR0dST1VQX0ZVTkRJTkdJVEVNfS9Db21taXRtZW50cy9Db21taXRtZW50cyBUYWJsZS9GdW5kaW5nIEZsb3dzIE9yZ1JvbGUgU2VsZWN0b3IvQWRkIFNlY3RvciBHcm91cGA7XG5cbmNvbnN0IEFDVElWSVRZX0VYUEVORElUVVJFU19GVU5ESU5HX0ZMT1dTX09SR1JPTEVfQUREX0lNUExFTUVOVElOR19BR0VOQ1kgPVxuICBgJHtBRl9GVU5ESU5HX0ZVTkRJTkdHUk9VUF9GVU5ESU5HSVRFTX0vRXhwZW5kaXR1cmVzL0V4cGVuZGl0dXJlcyBUYWJsZS9GdW5kaW5nIEZsb3dzIE9yZ1JvbGUgU2VsZWN0b3IvQWRkIEltcGxlbWVudGluZyBBZ2VuY3lgO1xuY29uc3QgQUNUSVZJVFlfRVhQRU5ESVRVUkVTX0ZVTkRJTkdfRkxPV1NfT1JHUk9MRV9BRERfQ09OVFJBQ1RJTkdfQUdFTkNZID1cbiAgYCR7QUZfRlVORElOR19GVU5ESU5HR1JPVVBfRlVORElOR0lURU19L0V4cGVuZGl0dXJlcy9FeHBlbmRpdHVyZXMgVGFibGUvRnVuZGluZyBGbG93cyBPcmdSb2xlIFNlbGVjdG9yL0FkZCBDb250cmFjdGluZyBBZ2VuY3lgO1xuY29uc3QgQUNUSVZJVFlfRVhQRU5ESVRVUkVTX0ZVTkRJTkdfRkxPV1NfT1JHUk9MRV9BRERfQkVORUZJQ0lBUllfQUdFTkNZID1cbiAgYCR7QUZfRlVORElOR19GVU5ESU5HR1JPVVBfRlVORElOR0lURU19L0V4cGVuZGl0dXJlcy9FeHBlbmRpdHVyZXMgVGFibGUvRnVuZGluZyBGbG93cyBPcmdSb2xlIFNlbGVjdG9yL0FkZCBCZW5lZmljaWFyeSBBZ2VuY3lgO1xuY29uc3QgQUNUSVZJVFlfRVhQRU5ESVRVUkVTX0ZVTkRJTkdfRkxPV1NfT1JHUk9MRV9BRERfRE9OT1JfT1JHQU5JWkFUSU9OID1cbiAgYCR7QUZfRlVORElOR19GVU5ESU5HR1JPVVBfRlVORElOR0lURU19L0V4cGVuZGl0dXJlcy9FeHBlbmRpdHVyZXMgVGFibGUvRnVuZGluZyBGbG93cyBPcmdSb2xlIFNlbGVjdG9yL0FkZCBEb25vciBPcmdhbml6YXRpb25gO1xuY29uc3QgQUNUSVZJVFlfRVhQRU5ESVRVUkVTX0ZVTkRJTkdfRkxPV1NfT1JHUk9MRV9BRERfRVhFQ1VUSU5HX0FHRU5DWSA9XG4gIGAke0FGX0ZVTkRJTkdfRlVORElOR0dST1VQX0ZVTkRJTkdJVEVNfS9FeHBlbmRpdHVyZXMvRXhwZW5kaXR1cmVzIFRhYmxlL0Z1bmRpbmcgRmxvd3MgT3JnUm9sZSBTZWxlY3Rvci9BZGQgRXhlY3V0aW5nIEFnZW5jeWA7XG5jb25zdCBBQ1RJVklUWV9FWFBFTkRJVFVSRVNfRlVORElOR19GTE9XU19PUkdST0xFX0FERF9SRUdJT05BTF9HUk9VUCA9XG4gIGAke0FGX0ZVTkRJTkdfRlVORElOR0dST1VQX0ZVTkRJTkdJVEVNfS9FeHBlbmRpdHVyZXMvRXhwZW5kaXR1cmVzIFRhYmxlL0Z1bmRpbmcgRmxvd3MgT3JnUm9sZSBTZWxlY3Rvci9BZGQgUmVnaW9uYWwgR3JvdXBgO1xuY29uc3QgQUNUSVZJVFlfRVhQRU5ESVRVUkVTX0ZVTkRJTkdfRkxPV1NfT1JHUk9MRV9BRERfUkVTUE9OU0lCTEVfT1JHQU5JWkFUSU9OID1cbiAgYCR7QUZfRlVORElOR19GVU5ESU5HR1JPVVBfRlVORElOR0lURU19L0V4cGVuZGl0dXJlcy9FeHBlbmRpdHVyZXMgVGFibGUvRnVuZGluZyBGbG93cyBPcmdSb2xlIFNlbGVjdG9yL0FkZCBSZXNwb25zaWJsZSBPcmdhbml6YXRpb25gO1xuY29uc3QgQUNUSVZJVFlfRVhQRU5ESVRVUkVTX0ZVTkRJTkdfRkxPV1NfT1JHUk9MRV9BRERfU0VDVE9SX0dST1VQID1cbiAgYCR7QUZfRlVORElOR19GVU5ESU5HR1JPVVBfRlVORElOR0lURU19L0V4cGVuZGl0dXJlcy9FeHBlbmRpdHVyZXMgVGFibGUvRnVuZGluZyBGbG93cyBPcmdSb2xlIFNlbGVjdG9yL0FkZCBTZWN0b3IgR3JvdXBgO1xuXG5jb25zdCBNVEVGX1BST0pFQ1RJT05TID0gYCR7QUZfRlVORElOR19GVU5ESU5HR1JPVVBfRlVORElOR0lURU19L01URUYgUHJvamVjdGlvbnNgO1xuY29uc3QgTVRFRl9QUk9KRUNUSU9OU19BTU9VTlQgPVxuICBgJHtBRl9GVU5ESU5HX0ZVTkRJTkdHUk9VUF9GVU5ESU5HSVRFTX0vTVRFRiBQcm9qZWN0aW9ucy9NVEVGIFByb2plY3Rpb25zIFRhYmxlL0Ftb3VudGA7XG5jb25zdCBNVEVGX1BST0pFQ1RJT05TX0NVUlJFTkNZID1cbiAgYCR7QUZfRlVORElOR19GVU5ESU5HR1JPVVBfRlVORElOR0lURU19L01URUYgUHJvamVjdGlvbnMvTVRFRiBQcm9qZWN0aW9ucyBUYWJsZS9DdXJyZW5jeWA7XG5jb25zdCBNVEVGX1BST0pFQ1RJT05TX1BST0pFQ1RJT04gPVxuICBgJHtBRl9GVU5ESU5HX0ZVTkRJTkdHUk9VUF9GVU5ESU5HSVRFTX0vTVRFRiBQcm9qZWN0aW9ucy9NVEVGIFByb2plY3Rpb25zIFRhYmxlL01URUYgUHJvamVjdGlvbmA7XG5jb25zdCBNVEVGX1BST0pFQ1RJT05TX0RBVEUgPVxuICBgJHtBRl9GVU5ESU5HX0ZVTkRJTkdHUk9VUF9GVU5ESU5HSVRFTX0vTVRFRiBQcm9qZWN0aW9ucy9NVEVGIFByb2plY3Rpb25zIFRhYmxlL1Byb2plY3Rpb24gRGF0ZWA7XG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmZyZWV6ZSh7XG4gIFBVQkxJQ19WSUVXX0NIQU5HRV9QQVNTV09SRCxcbiAgUFVCTElDX1ZJRVdfVFJPVUJMRV9TSUdOX0lOLFxuICBBQ1RJVklUWV9ERUxJVkVSWV9SQVRFLFxuICBBQ1RJVklUWV9QUk9KRUNUX0lEX0FORF9QTEFOTklORyxcbiAgQUNUSVZJVFlfRFVSQVRJT05fT0ZfUFJPSkVDVCxcbiAgQUNUSVZJVFlfVEVBTV9MRUFERVIsXG4gIEFDVElWSVRZX1NBTUVfQVNfUFJPUE9TRURfU1RBUlRfREFURSxcbiAgQUNUSVZJVFlfU0FNRV9BU19QUk9QT1NFRF9BUFBST1ZBTF9EQVRFLFxuICBBQ1RJVklUWV9JREVOVElGSUNBVElPTixcbiAgQUNUSVZJVFlfTEFTVF9VUERBVEVEX0JZLFxuICBBQ1RJVklUWV9MQVNUX1VQREFURURfT04sXG4gIEFDVElWSVRZX1NFQ1RPUlMsXG4gIEFDVElWSVRZX1BSSU1BUllfU0VDVE9SUyxcbiAgQUNUSVZJVFlfU0VDT05EQVJZX1NFQ1RPUlMsXG4gIEFDVElWSVRZX1NUUlVDVFVSRVMsXG4gIEFDVElWSVRZX1NUUlVDVFVSRVNfQUREX1NUUlVDVFVSRSxcbiAgQUNUSVZJVFlfT1JHQU5JWkFUSU9OUyxcbiAgQUNUSVZJVFlfT1JHQU5JWkFUSU9OU19ET05PUl9PUkdBTklaQVRJT04sXG4gIEFDVElWSVRZX09SR0FOSVpBVElPTlNfQkVORUZJQ0lBUllfQUdFTkNZLFxuICBBQ1RJVklUWV9PUkdBTklaQVRJT05TX0NPTlRSQUNUSU5HX0FHRU5DWSxcbiAgQUNUSVZJVFlfT1JHQU5JWkFUSU9OU19FWEVDVVRJTkdfQUdFTkNZLFxuICBBQ1RJVklUWV9PUkdBTklaQVRJT05TX0lNUExFTUVOVElOR19BR0VOQ1ksXG4gIEFDVElWSVRZX09SR0FOSVpBVElPTlNfUkVHSU9OQUxfR1JPVVAsXG4gIEFDVElWSVRZX09SR0FOSVpBVElPTlNfUkVMQVRFRF9HT1ZFUk5NRU5UX09SR0FOSVpBVElPTixcbiAgQUNUSVZJVFlfT1JHQU5JWkFUSU9OU19TRUNUT1JfR1JPVVAsXG4gIEFDVElWSVRZX09SR0FOSVpBVElPTlNfQkVORUZJQ0lBUllfQUdFTkNZX0FERF9GVU5ESU5HX0FVVE8sXG4gIEFDVElWSVRZX09SR0FOSVpBVElPTlNfQ09OVFJBQ1RJTkdfQUdFTkNZX0FERF9GVU5ESU5HX0FVVE8sXG4gIEFDVElWSVRZX09SR0FOSVpBVElPTlNfRE9OT1JfT1JHQU5JWkFUSU9OX0FERF9GVU5ESU5HX0FVVE8sXG4gIEFDVElWSVRZX09SR0FOSVpBVElPTlNfRVhFQ1VUSU5HX0FHRU5DWV9BRERfRlVORElOR19BVVRPLFxuICBBQ1RJVklUWV9PUkdBTklaQVRJT05TX0lNUExFTUVOVElOR19BR0VOQ1lfQUREX0ZVTkRJTkdfQVVUTyxcbiAgQUNUSVZJVFlfT1JHQU5JWkFUSU9OU19SRUdJT05BTF9HUk9VUF9BRERfRlVORElOR19BVVRPLFxuICBBQ1RJVklUWV9PUkdBTklaQVRJT05TX1JFU1BPTlNJQkxFX09SR0FOSVpBVElPTl9BRERfRlVORElOR19BVVRPLFxuICBBQ1RJVklUWV9PUkdBTklaQVRJT05TX1NFQ1RPUl9HUk9VUF9BRERfRlVORElOR19BVVRPLFxuICBBQ1RJVklUWV9GVU5ESU5HX1NFQVJDSCxcbiAgQUNUSVZJVFlfRlVORElOR19TRUFSQ0hfT1JHQU5JWkFUSU9OLFxuICBBQ1RJVklUWV9GVU5ESU5HX1NFTEVDVF9PUkdfVFlQRSxcbiAgQUNUSVZJVFlfUFJPR1JBTSxcbiAgQUNUSVZJVFlfUExBTk5JTkcsXG4gIEFDVElWSVRZX0NPTlRBQ1QsXG4gIEFDVElWSVRZX0RPQ1VNRU5UU19BRERfRE9DVU1FTlQsXG4gIEFDVElWSVRZX0RPQ1VNRU5UU19BRERfV0VCTElOSyxcbiAgQUNUSVZJVFlfSVNTVUVTX0FERF9JU1NVRSxcbiAgQUNUSVZJVFlfSVNTVUVTX0RFTEVURV9JU1NVRSxcbiAgQUNUSVZJVFlfSVNTVUVTX0FERF9NRUFTVVJFLFxuICBBQ1RJVklUWV9JU1NVRVNfREVMRVRFX01FQVNVUkUsXG4gIEFDVElWSVRZX0lTU1VFU19BRERfQUNUT1IsXG4gIEFDVElWSVRZX0lTU1VFU19ERUxFVEVfQUNUT1IsXG4gIEFDVElWSVRZX0RJU0JVUlNFTUVOVFNfRlVORElOR19GTE9XU19PUkdST0xFX0FERF9JTVBMRU1FTlRJTkdfQUdFTkNZLFxuICBBQ1RJVklUWV9ESVNCVVJTRU1FTlRTX0ZVTkRJTkdfRkxPV1NfT1JHUk9MRV9BRERfQ09OVFJBQ1RJTkdfQUdFTkNZLFxuICBBQ1RJVklUWV9ESVNCVVJTRU1FTlRTX0ZVTkRJTkdfRkxPV1NfT1JHUk9MRV9BRERfQkVORUZJQ0lBUllfQUdFTkNZLFxuICBBQ1RJVklUWV9ESVNCVVJTRU1FTlRTX0ZVTkRJTkdfRkxPV1NfT1JHUk9MRV9BRERfRE9OT1JfT1JHQU5JWkFUSU9OLFxuICBBQ1RJVklUWV9ESVNCVVJTRU1FTlRTX0ZVTkRJTkdfRkxPV1NfT1JHUk9MRV9BRERfRVhFQ1VUSU5HX0FHRU5DWSxcbiAgQUNUSVZJVFlfRElTQlVSU0VNRU5UU19GVU5ESU5HX0ZMT1dTX09SR1JPTEVfQUREX1JFR0lPTkFMX0dST1VQLFxuICBBQ1RJVklUWV9ESVNCVVJTRU1FTlRTX0ZVTkRJTkdfRkxPV1NfT1JHUk9MRV9BRERfUkVTUE9OU0lCTEVfT1JHQU5JWkFUSU9OLFxuICBBQ1RJVklUWV9ESVNCVVJTRU1FTlRTX0ZVTkRJTkdfRkxPV1NfT1JHUk9MRV9BRERfU0VDVE9SX0dST1VQLFxuICBBQ1RJVklUWV9DT01NSVRNRU5UU19GVU5ESU5HX0ZMT1dTX09SR1JPTEVfQUREX0lNUExFTUVOVElOR19BR0VOQ1ksXG4gIEFDVElWSVRZX0NPTU1JVE1FTlRTX0ZVTkRJTkdfRkxPV1NfT1JHUk9MRV9BRERfQ09OVFJBQ1RJTkdfQUdFTkNZLFxuICBBQ1RJVklUWV9DT01NSVRNRU5UU19GVU5ESU5HX0ZMT1dTX09SR1JPTEVfQUREX0JFTkVGSUNJQVJZX0FHRU5DWSxcbiAgQUNUSVZJVFlfQ09NTUlUTUVOVFNfRlVORElOR19GTE9XU19PUkdST0xFX0FERF9ET05PUl9PUkdBTklaQVRJT04sXG4gIEFDVElWSVRZX0NPTU1JVE1FTlRTX0ZVTkRJTkdfRkxPV1NfT1JHUk9MRV9BRERfRVhFQ1VUSU5HX0FHRU5DWSxcbiAgQUNUSVZJVFlfQ09NTUlUTUVOVFNfRlVORElOR19GTE9XU19PUkdST0xFX0FERF9SRUdJT05BTF9HUk9VUCxcbiAgQUNUSVZJVFlfQ09NTUlUTUVOVFNfRlVORElOR19GTE9XU19PUkdST0xFX0FERF9SRVNQT05TSUJMRV9PUkdBTklaQVRJT04sXG4gIEFDVElWSVRZX0NPTU1JVE1FTlRTX0ZVTkRJTkdfRkxPV1NfT1JHUk9MRV9BRERfU0VDVE9SX0dST1VQLFxuICBBQ1RJVklUWV9FWFBFTkRJVFVSRVNfRlVORElOR19GTE9XU19PUkdST0xFX0FERF9JTVBMRU1FTlRJTkdfQUdFTkNZLFxuICBBQ1RJVklUWV9FWFBFTkRJVFVSRVNfRlVORElOR19GTE9XU19PUkdST0xFX0FERF9DT05UUkFDVElOR19BR0VOQ1ksXG4gIEFDVElWSVRZX0VYUEVORElUVVJFU19GVU5ESU5HX0ZMT1dTX09SR1JPTEVfQUREX0JFTkVGSUNJQVJZX0FHRU5DWSxcbiAgQUNUSVZJVFlfRVhQRU5ESVRVUkVTX0ZVTkRJTkdfRkxPV1NfT1JHUk9MRV9BRERfRE9OT1JfT1JHQU5JWkFUSU9OLFxuICBBQ1RJVklUWV9FWFBFTkRJVFVSRVNfRlVORElOR19GTE9XU19PUkdST0xFX0FERF9FWEVDVVRJTkdfQUdFTkNZLFxuICBBQ1RJVklUWV9FWFBFTkRJVFVSRVNfRlVORElOR19GTE9XU19PUkdST0xFX0FERF9SRUdJT05BTF9HUk9VUCxcbiAgQUNUSVZJVFlfRVhQRU5ESVRVUkVTX0ZVTkRJTkdfRkxPV1NfT1JHUk9MRV9BRERfUkVTUE9OU0lCTEVfT1JHQU5JWkFUSU9OLFxuICBBQ1RJVklUWV9FWFBFTkRJVFVSRVNfRlVORElOR19GTE9XU19PUkdST0xFX0FERF9TRUNUT1JfR1JPVVAsXG4gIE1URUZfUFJPSkVDVElPTlMsXG4gIE1URUZfUFJPSkVDVElPTlNfQU1PVU5ULFxuICBNVEVGX1BST0pFQ1RJT05TX0NVUlJFTkNZLFxuICBNVEVGX1BST0pFQ1RJT05TX1BST0pFQ1RJT04sXG4gIE1URUZfUFJPSkVDVElPTlNfREFURSxcbn0pO1xuIiwiaW1wb3J0IEZNQyBmcm9tICcuL0ZlYXR1cmVNYW5hZ2VyQ29uc3RhbnRzJztcblxuLyoqXG4gKiBAYXV0aG9yIE5hZGVqZGEgTWFuZHJlc2N1XG4gKi9cblxuLy8gQWN0aXZpdHkgZmllbGRzXG5jb25zdCBBQ1RJVklUWV9CVURHRVQgPSAnYWN0aXZpdHlfYnVkZ2V0JztcbmNvbnN0IEFDVElWSVRZX1NUQVRVUyA9ICdhY3Rpdml0eV9zdGF0dXMnO1xuY29uc3QgU1RBVFVTX1JFQVNPTiA9ICdzdGF0dXNfcmVhc29uJztcbmNvbnN0IEZJTkFOQ0lBTF9JTlNUUlVNRU5UID0gJ2ZpbmFuY2lhbF9pbnN0cnVtZW50JztcbmNvbnN0IFRZUEVfT0ZfSU1QTEVNRU5UQVRJT04gPSAndHlwZV9vZl9pbXBsZW1lbnRhdGlvbic7XG5jb25zdCBPQkpFQ1RJVkUgPSAnb2JqZWN0aXZlJztcbmNvbnN0IFJFU1VMVFMgPSAncmVzdWx0cyc7XG5jb25zdCBCVURHRVRfQ09ERV9QUk9KRUNUX0lEID0gJ2J1ZGdldF9jb2RlX3Byb2plY3RfaWQnO1xuY29uc3QgQUNUVUFMX0FQUFJPVkFMX0RBVEUgPSAnYWN0dWFsX2FwcHJvdmFsX2RhdGUnO1xuY29uc3QgRlVORElOR1MgPSAnZnVuZGluZ3MnO1xuY29uc3QgRlVORElOR19ET05PUl9PUkdfSUQgPSAnZG9ub3Jfb3JnYW5pemF0aW9uX2lkJztcbmNvbnN0IElTX0RSQUZUID0gJ2lzX2RyYWZ0JztcbmNvbnN0IE9SR19ST0xFX09SR19JRCA9ICdvcmdhbml6YXRpb24nO1xuY29uc3QgQURESVRJT05BTF9JTkZPID0gJ2FkZGl0aW9uYWxfaW5mbyc7XG5jb25zdCBQUklNQVJZX1NFQ1RPUlMgPSAncHJpbWFyeV9zZWN0b3JzJztcbmNvbnN0IFNFQ09OREFSWV9TRUNUT1JTID0gJ3NlY29uZGFyeV9zZWN0b3JzJztcbmNvbnN0IFRFUlRJQVJZX1NFQ1RPUlMgPSAndGVydGlhcnlfc2VjdG9ycyc7XG5jb25zdCBUQUdfU0VDVE9SUyA9ICd0YWdfc2VjdG9ycyc7XG5jb25zdCBTRUNUT1IgPSAnc2VjdG9yJztcbmNvbnN0IFNFQ1RPUl9QRVJDRU5UQUdFID0gJ3NlY3Rvcl9wZXJjZW50YWdlJztcbmNvbnN0IEZJTkFOQ0lOR19JTlNUUlVNRU5UID0gJ2ZpbmFuY2luZ19pbnN0cnVtZW50JztcbmNvbnN0IE1PREFMSVRJRVMgPSAnbW9kYWxpdGllcyc7XG5jb25zdCBMSU5FX01JTklTVFJZX1JBTksgPSAnbGluZV9taW5pc3RyeV9yYW5rJztcbmNvbnN0IEdPVkVSTk1FTlRfQUdSRUVNRU5UX05VTUJFUiA9ICdnb3Zlcm5tZW50X2FncmVlbWVudF9udW1iZXInO1xuY29uc3QgRlVORElOR19TVEFUVVMgPSAnZnVuZGluZ19zdGF0dXMnO1xuY29uc3QgTE9DQVRJT05TID0gJ2xvY2F0aW9ucyc7XG5jb25zdCBMT0NBVElPTiA9ICdsb2NhdGlvbic7XG5jb25zdCBMT0NBVElPTl9QRVJDRU5UQUdFID0gJ2xvY2F0aW9uX3BlcmNlbnRhZ2UnO1xuY29uc3QgSU1QTEVNRU5UQVRJT05fTE9DQVRJT04gPSAnaW1wbGVtZW50YXRpb25fbG9jYXRpb24nO1xuY29uc3QgSU1QTEVNRU5UQVRJT05fTEVWRUwgPSAnaW1wbGVtZW50YXRpb25fbGV2ZWwnO1xuY29uc3QgQVBQUk9WQUxfU1RBVFVTID0gJ2FwcHJvdmFsX3N0YXR1cyc7XG5jb25zdCBBUFBST1ZFRF9CWSA9ICdhcHByb3ZlZF9ieSc7XG5jb25zdCBBUFBST1ZBTF9EQVRFID0gJ2FwcHJvdmFsX2RhdGUnO1xuY29uc3QgVFlQRV9PRl9BU1NJU1RBTkNFID0gJ3R5cGVfb2ZfYXNzaXN0YW5jZSc7XG5jb25zdCBFWFBFTkRJVFVSRV9DTEFTUyA9ICdleHBlbmRpdHVyZV9jbGFzcyc7XG5jb25zdCBGVU5ESU5HX0RFVEFJTFMgPSAnZnVuZGluZ19kZXRhaWxzJztcbmNvbnN0IE1PREVfT0ZfUEFZTUVOVCA9ICdtb2RlX29mX3BheW1lbnQnO1xuY29uc3QgRlVORElOR19DTEFTU0lGSUNBVElPTl9EQVRFID0gJ2Z1bmRpbmdfY2xhc3NpZmljYXRpb25fZGF0ZSc7XG5jb25zdCBBR1JFRU1FTlQgPSAnYWdyZWVtZW50JztcbmNvbnN0IERPTk9SX09CSkVDVElWRSA9ICdkb25vcl9vYmplY3RpdmUnO1xuY29uc3QgQ09ORElUSU9OUyA9ICdjb25kaXRpb25zJztcbmNvbnN0IEFHUkVFTUVOVF9DT0RFID0gJ2NvZGUnO1xuY29uc3QgQUdSRUVNRU5UX1RJVExFID0gJ3RpdGxlJztcbmNvbnN0IFBST0pFQ1RfQ0FURUdPUlkgPSAncHJvamVjdF9jYXRlZ29yeSc7XG5jb25zdCBQUk9KRUNUX0lNUExFTUVOVElOR19VTklUID0gJ3Byb2plY3RfaW1wbGVtZW50aW5nX3VuaXQnO1xuY29uc3QgT1JHQU5JWkFUSU9OID0gJ29yZ2FuaXphdGlvbic7XG5jb25zdCBQRVJDRU5UQUdFID0gJ3BlcmNlbnRhZ2UnO1xuY29uc3QgQU1QX09SR0FOSVpBVElPTl9ST0xFX0lEID0gJ2FtcF9vcmdhbml6YXRpb25fcm9sZV9pZCc7XG5jb25zdCBST0xFID0gJ3JvbGUnO1xuY29uc3QgRVhFQ1VUSU5HX0FHRU5DWSA9ICdleGVjdXRpbmdfYWdlbmN5JztcbmNvbnN0IENPTlRSQUNUSU5HX0FHRU5DWSA9ICdjb250cmFjdGluZ19hZ2VuY3knO1xuY29uc3QgQkVORUZJQ0lBUllfQUdFTkNZID0gJ2JlbmVmaWNpYXJ5X2FnZW5jeSc7XG5jb25zdCBJTVBMRU1FTlRJTkdfQUdFTkNZID0gJ2ltcGxlbWVudGluZ19hZ2VuY3knO1xuY29uc3QgUkVTUE9OU0lCTEVfT1JHQU5JWkFUSU9OID0gJ3Jlc3BvbnNpYmxlX29yZ2FuaXphdGlvbic7XG5jb25zdCBET05PUl9PUkdBTklaQVRJT04gPSAnZG9ub3Jfb3JnYW5pemF0aW9uJztcbmNvbnN0IFJFR0lPTkFMX0dST1VQID0gJ3JlZ2lvbmFsX2dyb3VwJztcbmNvbnN0IFNFQ1RPUl9HUk9VUCA9ICdzZWN0b3JfZ3JvdXAnO1xuY29uc3QgQlVER0VUUyA9ICdidWRnZXRzJztcbmNvbnN0IEJVREdFVF9DT0RFID0gJ2J1ZGdldF9jb2RlJztcbmNvbnN0IEJVREdFVF9PUkdBTklaQVRJT05fQ09ERSA9ICdidWRnZXRfb3JnYW5pemF0aW9uX2NvZGUnO1xuY29uc3QgQVJDSElWRUQgPSAnYXJjaGl2ZWQnO1xuY29uc3QgVFJBTlNBQ1RJT05fREFURSA9ICd0cmFuc2FjdGlvbl9kYXRlJztcbmNvbnN0IFRSQU5TQUNUSU9OX1RZUEUgPSAndHJhbnNhY3Rpb25fdHlwZSc7XG5jb25zdCBDT01NSVRNRU5UUyA9ICdjb21taXRtZW50cyc7XG5jb25zdCBESVNCVVJTRU1FTlRTID0gJ2Rpc2J1cnNlbWVudHMnO1xuY29uc3QgRVhQRU5ESVRVUkVTID0gJ2V4cGVuZGl0dXJlcyc7XG5jb25zdCBFU1RJTUFURURfRElTQlVSU0VNRU5UUyA9ICdlc3RpbWF0ZWRfZGlzYnVyc2VtZW50cyc7XG5jb25zdCBUUkFOU0FDVElPTl9BTU9VTlQgPSAndHJhbnNhY3Rpb25fYW1vdW50JztcbmNvbnN0IEFESlVTVE1FTlRfVFlQRSA9ICdhZGp1c3RtZW50X3R5cGUnO1xuY29uc3QgQUNUVUFMX1NUQVJUX0RBVEUgPSAnYWN0dWFsX3N0YXJ0X2RhdGUnO1xuY29uc3QgUFJPUE9TRURfU1RBUlRfREFURSA9ICdwcm9wb3NlZF9zdGFydF9kYXRlJztcbmNvbnN0IEFDVFVBTF9DT01QTEVUSU9OX0RBVEUgPSAnYWN0dWFsX2NvbXBsZXRpb25fZGF0ZSc7XG5jb25zdCBDT05UUkFDVElOR19EQVRFID0gJ2NvbnRyYWN0aW5nX2RhdGUnO1xuY29uc3QgRElTQlVSU0VNRU5UX0RBVEUgPSAnZGlzYnVyc2VtZW50X2RhdGUnO1xuY29uc3QgUFJPUE9TRURfQVBQUk9WQUxfREFURSA9ICdwcm9wb3NlZF9hcHByb3ZhbF9kYXRlJztcbmNvbnN0IE9SSUdJTkFMX0NPTVBMRVRJT05fREFURSA9ICdvcmlnaW5hbF9jb21wbGV0aW9uX2RhdGUnO1xuY29uc3QgUFJPUE9TRURfQ09NUExFVElPTl9EQVRFID0gJ3Byb3Bvc2VkX2NvbXBsZXRpb25fZGF0ZSc7XG5jb25zdCBGSU5BTF9EQVRFX0ZPUl9ESVNCVVJTRU1FTlRTID0gJ2ZpbmFsX2RhdGVfZm9yX2Rpc2J1cnNlbWVudHMnO1xuY29uc3QgRklOQUxfREFURV9GT1JfQ09OVFJBQ1RJTkcgPSAnZmluYWxfZGF0ZV9mb3JfY29udHJhY3RpbmcnO1xuY29uc3QgRUZGRUNUSVZFX0ZVTkRJTkdfREFURSA9ICdlZmZlY3RpdmVfZnVuZGluZ19kYXRlJztcbmNvbnN0IEZVTkRJTkdfQ0xPU0lOR19EQVRFID0gJ2Z1bmRpbmdfY2xvc2luZ19kYXRlJztcbmNvbnN0IFJBVElGSUNBVElPTl9EQVRFID0gJ3JhdGlmaWNhdGlvbl9kYXRlJztcbmNvbnN0IE1BVFVSSVRZID0gJ21hdHVyaXR5JztcbmNvbnN0IExBU1RfQVVESVRfREFURSA9ICdsYXN0X2F1ZGl0X2RhdGUnO1xuY29uc3QgU0lHTkFUVVJFX0RBVEUgPSAnc2lnbmF0dXJlX2RhdGUnO1xuY29uc3QgSFVNQU5JVEFSSUFOX0FJRCA9ICdodW1hbml0YXJpYW5fYWlkJztcbmNvbnN0IERJU0FTVEVSX1JFU1BPTlNFID0gJ2Rpc2FzdGVyX3Jlc3BvbnNlJztcbmNvbnN0IFBST0dSQU0gPSAncHJvZ3JhbSc7XG5jb25zdCBQUk9HUkFNX1BFUkNFTlRBR0UgPSAncHJvZ3JhbV9wZXJjZW50YWdlJztcbmNvbnN0IFBST0dSQU1fU0VUVElOR1MgPSAncHJvZ3JhbV9zZXR0aW5ncyc7XG5jb25zdCBOQVRJT05BTF9QTEFOX09CSkVDVElWRSA9ICduYXRpb25hbF9wbGFuX29iamVjdGl2ZSc7XG5jb25zdCBQUklNQVJZX1BST0dSQU1TID0gJ3ByaW1hcnlfcHJvZ3JhbXMnO1xuY29uc3QgU0VDT05EQVJZX1BST0dSQU1TID0gJ3NlY29uZGFyeV9wcm9ncmFtcyc7XG5jb25zdCBURVJUSUFSX1BST0dSQU1TID0gJ3RlcnRpYXJ5X3Byb2dyYW1zJztcbmNvbnN0IEdPVkVSTk1FTlRfQVBQUk9WQUxfUFJPQ0VEVVJFUyA9ICdnb3Zlcm5tZW50X2FwcHJvdmFsX3Byb2NlZHVyZXMnO1xuY29uc3QgSk9JTlRfQ1JJVEVSSUEgPSAnam9pbnRfY3JpdGVyaWEnO1xuY29uc3QgVEVBTSA9ICd0ZWFtJztcbmNvbnN0IFJFSkVDVEVEX0lEID0gJ3JlamVjdGVkSWQnO1xuY29uc3QgSU5URVJOQUxfSUQgPSAnaW50ZXJuYWxfaWQnO1xuY29uc3QgQU1QX0lEID0gJ2FtcF9pZCc7XG5jb25zdCBQUk9KRUNUX1RJVExFID0gJ3Byb2plY3RfdGl0bGUnO1xuY29uc3QgREVTQ1JJUFRJT04gPSAnZGVzY3JpcHRpb24nO1xuY29uc3QgTU9ESUZJRURfQlkgPSAnbW9kaWZpZWRfYnknO1xuY29uc3QgTU9ESUZJRURfT04gPSAndXBkYXRlX2RhdGUnO1xuY29uc3QgQ1JFQVRFRF9CWSA9ICdjcmVhdGVkX2J5JztcbmNvbnN0IENSRUFURURfT04gPSAnY3JlYXRpb25fZGF0ZSc7XG5jb25zdCBMQVNUX0lNUE9SVEVEX0JZID0gJ2xhc3RfaW1wb3J0ZWRfYnknO1xuY29uc3QgQ0xJRU5UX0NIQU5HRV9JRCA9ICdjbGllbnQtY2hhbmdlLWlkJztcbmNvbnN0IENMSUVOVF9DUkVBVEVEX09OID0gJ2NsaWVudC1jcmVhdGVkLW9uJztcbmNvbnN0IENMSUVOVF9VUERBVEVEX09OID0gJ2NsaWVudC11cGRhdGVkLW9uJztcbmNvbnN0IElTX1BVU0hFRCA9ICdpcy1wdXNoZWQnO1xuY29uc3QgQUNUSVZJVFlfR1JPVVAgPSAnYWN0aXZpdHlfZ3JvdXAnO1xuY29uc3QgVkVSU0lPTiA9ICd2ZXJzaW9uJztcbmNvbnN0IFBST0pFQ1RfQ09NTUVOVFMgPSAncHJvamVjdF9jb21tZW50cyc7XG5jb25zdCBMRVNTT05TX0xFQVJORUQgPSAnbGVzc29uc19sZWFybmVkJztcbmNvbnN0IFBST0pFQ1RfSU1QQUNUID0gJ3Byb2plY3RfaW1wYWN0JztcbmNvbnN0IEFDVElWSVRZX1NVTU1BUlkgPSAnYWN0aXZpdHlfc3VtbWFyeSc7XG5jb25zdCBDT05ESVRJT05BTElUSUVTID0gJ2NvbmRpdGlvbmFsaXRpZXMnO1xuY29uc3QgUFJPSkVDVF9NQU5BR0VNRU5UID0gJ3Byb2plY3RfbWFuYWdlbWVudCc7XG5jb25zdCBBX0NfQ0hBUFRFUiA9ICdhX2NfY2hhcHRlcic7XG5jb25zdCBDUklTX05VTUJFUiA9ICdjcmlzX251bWJlcic7XG5jb25zdCBJQVRJX0lERU5USUZJRVIgPSAnaWF0aV9pZGVudGlmaWVyJztcbmNvbnN0IEFDVElWSVRZX0lOVEVSTkFMX0lEUyA9ICdhY3Rpdml0eV9pbnRlcm5hbF9pZHMnO1xuY29uc3QgSElFUkFSQ0hJQ0FMX1ZBTFVFID0gJ2hpZXJhcmNoaWNhbF92YWx1ZSc7XG5jb25zdCBISUVSQVJDSElDQUxfVkFMVUVfUEFSVFMgPSAnaGllcmFyY2hpY2FsX3ZhbHVlX3BhcnRzJztcbmNvbnN0IEhJRVJBUkNISUNBTF9WQUxVRV9ERVBUSCA9ICdoaWVyYXJjaGljYWxfdmFsdWVfZGVwdGgnO1xuY29uc3QgUFBDX0FNT1VOVCA9ICdwcGNfYW1vdW50JztcbmNvbnN0IFJQQ19BTU9VTlQgPSAncnBjX2Ftb3VudCc7XG5jb25zdCBQUENfQU5OVUFMX0JVREdFVFMgPSAncHBjX2FubnVhbF9idWRnZXRzJztcbmNvbnN0IEFNT1VOVCA9ICdhbW91bnQnO1xuY29uc3QgQ1VSUkVOQ1kgPSAnY3VycmVuY3knO1xuY29uc3QgRlVORElOR19EQVRFID0gJ2Z1bmRpbmdfZGF0ZSc7XG5jb25zdCBDT01QT05FTlRTID0gJ2NvbXBvbmVudHMnO1xuY29uc3QgVE9UQUxfTlVNQkVSX09GX0ZVTkRJTkdfU09VUkNFUyA9ICd0b3RhbF9udW1iZXJfb2ZfZnVuZGluZ19zb3VyY2VzJztcbmNvbnN0IFNPVVJDRV9ST0xFID0gJ3NvdXJjZV9yb2xlJztcbmNvbnN0IEFNUF9GVU5ESU5HX0lEID0gJ2Z1bmRpbmdfaWQnO1xuY29uc3QgSVNTVUVTID0gJ2lzc3Vlcyc7XG5jb25zdCBJU1NVRV9EQVRFID0gJ2lzc3VlX2RhdGUnO1xuY29uc3QgSVNTVUVfTkFNRSA9ICduYW1lJztcbmNvbnN0IE1FQVNVUkVTID0gJ21lYXN1cmVzJztcbmNvbnN0IE1FQVNVUkVfTkFNRSA9ICduYW1lJztcbmNvbnN0IE1FQVNVUkVfREFURSA9ICdtZWFzdXJlX2RhdGUnO1xuY29uc3QgQUNUT1JTID0gJ2FjdG9ycyc7XG5jb25zdCBBQ1RPUl9OQU1FID0gJ25hbWUnO1xuY29uc3QgU1RSVUNUVVJFUyA9ICdzdHJ1Y3R1cmVzJztcbmNvbnN0IFNUUlVDVFVSRVNfVElUTEUgPSAndGl0bGUnO1xuY29uc3QgU1RSVUNUVVJFU19ERVNDUklQVElPTiA9ICdkZXNjcmlwdGlvbic7XG5jb25zdCBTVFJVQ1RVUkVTX0xBVElUVURFID0gJ2xhdGl0dWRlJztcbmNvbnN0IFNUUlVDVFVSRVNfTE9OR0lUVURFID0gJ2xvbmdpdHVkZSc7XG5jb25zdCBTVFJVQ1RVUkVTX0NPTE9SID0gJ3N0cnVjdHVyZV9jb2xvcic7XG5jb25zdCBTVFJVQ1RVUkVTX0xBVCA9ICdsYXQnO1xuY29uc3QgU1RSVUNUVVJFU19MTkcgPSAnbG5nJztcbmNvbnN0IFNUUlVDVFVSRVNfU0hBUEUgPSAnc2hhcGUnO1xuY29uc3QgU1RSVUNUVVJFU19QT0lOVCA9ICdQb2ludCc7XG5jb25zdCBTVFJVQ1RVUkVTX1BPTFlHT04gPSAnUG9seWdvbic7XG5jb25zdCBTVFJVQ1RVUkVTX1BPTFlMSU5FID0gJ1BvbHlsaW5lJztcbmNvbnN0IFNUUlVDVFVSRVNfQ09PUkRJTkFURVMgPSAnY29vcmRpbmF0ZXMnO1xuY29uc3QgQ09NUE9ORU5UX1RZUEUgPSAnY29tcG9uZW50X3R5cGUnO1xuY29uc3QgQ09NUE9ORU5UX1RJVExFID0gJ2NvbXBvbmVudF90aXRsZSc7XG5jb25zdCBDT01QT05FTlRfRlVORElORyA9ICdmdW5kaW5nJztcbmNvbnN0IENPTVBPTkVOVF9ERVNDUklQVElPTiA9ICdkZXNjcmlwdGlvbic7XG5jb25zdCBDT01QT05FTlRfT1JHQU5JWkFUSU9OID0gJ2NvbXBvbmVudF9vcmdhbml6YXRpb24nO1xuY29uc3QgRlVORElOR19BTU9VTlRfSUQgPSAnYW1wX2Z1bmRpbmdfYW1vdW50X2lkJztcbmNvbnN0IEVYVFJBX0lORk8gPSAnZXh0cmFfaW5mbyc7XG5jb25zdCBWQUxVRSA9ICd2YWx1ZSc7XG5jb25zdCBBQ1JPTllNID0gJ2Fjcm9ueW0nO1xuY29uc3QgVFlQRV9PRl9DT09QRVJBVElPTiA9ICd0eXBlX29mX2Nvb3BlcmF0aW9uJztcbmNvbnN0IEFOTlVBTF9QUk9KRUNUX0JVREdFVF9JRCA9ICdhbm51YWxfcHJvamVjdF9idWRnZXRfaWQnO1xuY29uc3QgVFlQRSA9ICd0eXBlJztcbmNvbnN0IFlFQVIgPSAneWVhcic7XG5jb25zdCBHUk9VUF9WRVJTSU9ORURfRlVORElORyA9ICdncm91cF92ZXJzaW9uZWRfZnVuZGluZyc7XG5jb25zdCBBQ1RJVkVfTElTVCA9ICdhY3RpdmVfbGlzdCc7XG5jb25zdCBBQ1RJVkUgPSAnYWN0aXZlJztcbmNvbnN0IERFTEVHQVRFRF9DT09QRVJBVElPTiA9ICdkZWxlZ2F0ZWRfY29vcGVyYXRpb24nO1xuY29uc3QgREVMRUdBVEVEX1BBUlRORVIgPSAnZGVsZWdhdGVkX3BhcnRuZXInO1xuY29uc3QgRklOQU5DSU5HX0lEID0gJ2ZpbmFuY2luZ19pZCc7XG5jb25zdCBESVNCVVJTRU1FTlRfT1JERVJfSUQgPSAnZGlzYnVyc2VtZW50X29yZGVyX2lkJztcbmNvbnN0IFBMRURHRSA9ICdwbGVkZ2UnO1xuY29uc3QgQ0FQSVRBTF9TUEVORElOR19QRVJDRU5UQUdFID0gJ2NhcGl0YWxfc3BlbmRpbmdfcGVyY2VudGFnZSc7XG5jb25zdCBSRVBPUlRJTkdfREFURSA9ICdyZXBvcnRpbmdfZGF0ZSc7XG5jb25zdCBSRUNJUElFTlRfUk9MRSA9ICdyZWNpcGllbnRfcm9sZSc7XG5jb25zdCBSRUNJUElFTlRfT1JHQU5JWkFUSU9OID0gJ3JlY2lwaWVudF9vcmdhbml6YXRpb24nO1xuY29uc3QgVEVNUE9SQUxfSUQgPSAnX3RlbXBvcmFsX2lkJztcbmNvbnN0IE1JTklTVFJZX0NPREUgPSAnbWluaXN0cnlfY29kZSc7XG5jb25zdCBQUk9KRUNUX0NPREUgPSAncHJvamVjdF9jb2RlJztcbmNvbnN0IEZZID0gJ2Z5JztcbmNvbnN0IElORElSRUNUX09OX0JVREdFVCA9ICdpbmRpcmVjdF9vbl9idWRnZXQnO1xuY29uc3QgSU1QTEVNRU5UQVRJT05fTEVWRUxTX0VYVFJBX0lORk8gPSAnaW1wbGVtZW50YXRpb24tbGV2ZWxzJztcbmNvbnN0IElNUExFTUVOVEFUSU9OX0xPQ0FUSU9OX0VYVFJBX0lORk8gPSAnaW1wbGVtZW50YXRpb25fbG9jYXRpb25fbmFtZSc7XG5jb25zdCBET05PUl9DT05UQUNUID0gJ2Rvbm9yX2NvbnRhY3RfaW5mb3JtYXRpb24nO1xuY29uc3QgUFJPSkVDVF9DT09SRElOQVRPUl9DT05UQUNUID0gJ3Byb2plY3RfY29vcmRpbmF0b3JfY29udGFjdF9pbmZvcm1hdGlvbic7XG5jb25zdCBTRUNUT1JfTUlOSVNUUllfQ09OVEFDVCA9ICdzZWN0b3JfbWluaXN0cnlfY29udGFjdF9pbmZvcm1hdGlvbic7XG5jb25zdCBNT0ZFRF9DT05UQUNUID0gJ21vZmVkX2NvbnRhY3RfaW5mb3JtYXRpb24nO1xuY29uc3QgSU1QTEVNRU5USU5HX0VYRUNVVElOR19BR0VOQ1lfQ09OVEFDVCA9ICdpbXBsZW1lbnRpbmcvZXhlY3V0aW5nX2FnZW5jeV9jb250YWN0X2luZm9ybWF0aW9uJztcbmNvbnN0IENPTlRBQ1QgPSAnY29udGFjdCc7XG5jb25zdCBPUkdBTklaQVRJT05fR1JPVVAgPSAnb3JnYW5pemF0aW9uX2dyb3VwJztcbmNvbnN0IEZJWEVEX0VYQ0hBTkdFX1JBVEUgPSAnZml4ZWRfZXhjaGFuZ2VfcmF0ZSc7XG5jb25zdCBQUklNQVJZX0NPTlRBQ1QgPSAnbWFya19hc19wcmltYXJ5JztcbmNvbnN0IEFDVElWSVRZX0RPQ1VNRU5UUyA9ICdhY3Rpdml0eV9kb2N1bWVudHMnO1xuY29uc3QgRE9DVU1FTlRfVFlQRSA9ICdkb2N1bWVudF90eXBlJztcbmNvbnN0IElTTzIgPSAnaXNvMic7XG5jb25zdCBNVEVGX1BST0pFQ1RJT05TID0gJ210ZWZfcHJvamVjdGlvbnMnO1xuY29uc3QgUFJPSkVDVElPTiA9ICdwcm9qZWN0aW9uJztcbmNvbnN0IFBJUEVMSU5FID0gJ3BpcGVsaW5lJztcbmNvbnN0IFBST0pFQ1RJT05fREFURSA9ICdwcm9qZWN0aW9uX2RhdGUnO1xuXG4vLyBBY3Rpdml0eSBsYWJlbHMgKHVzdWFsbHkgdGhvc2UgdGhhdCBkb24ndCBjb21lIGFzIHBhcnQgb2YgRmllbGRzIERlZiBFUClcbmNvbnN0IFNBTUVfQVNfUFJPUE9TRURfU1RBUlRfREFURV9MQUJFTCA9ICdTYW1lIGFzIFByb3Bvc2VkIFN0YXJ0IERhdGUnO1xuY29uc3QgU0FNRV9BU19QUk9QT1NFRF9BUFBST1ZBTF9EQVRFX0xBQkVMID0gJ1NhbWUgYXMgUHJvcG9zZWQgQXBwcm92YWwgRGF0ZSc7XG5cbi8vIEFjdGl2aXR5IHZhbGlkYXRpb24gcnVsZXNcbmNvbnN0IERFUEVOREVOQ1lfSU1QTEVNRU5UQVRJT05fTEVWRUxfUFJFU0VOVCA9ICdpbXBsZW1lbnRhdGlvbl9sZXZlbF9wcmVzZW50JztcbmNvbnN0IERFUEVOREVOQ1lfSU1QTEVNRU5UQVRJT05fTEVWRUxfVkFMSUQgPSAnaW1wbGVtZW50YXRpb25fbGV2ZWxfdmFsaWQnO1xuY29uc3QgREVQRU5ERU5DWV9JTVBMRU1FTlRBVElPTl9MT0NBVElPTl9QUkVTRU5UID0gJ2ltcGxlbWVudGF0aW9uX2xvY2F0aW9uX3ByZXNlbnQnO1xuY29uc3QgREVQRU5ERU5DWV9JTVBMRU1FTlRBVElPTl9MT0NBVElPTl9WQUxJRCA9ICdpbXBsZW1lbnRhdGlvbl9sb2NhdGlvbl92YWxpZCc7XG5jb25zdCBERVBFTkRFTkNZX1BST0pFQ1RfQ09ERV9PTl9CVURHRVQgPSAncHJvamVjdF9jb2RlX29uX2J1ZGdldCc7XG5jb25zdCBERVBFTkRFTkNZX09OX0JVREdFVCA9ICdvbl9idWRnZXQnO1xuY29uc3QgREVQRU5ERU5DWV9UUkFOU0FDVElPTl9QUkVTRU5UID0gJ3RyYW5zYWN0aW9uX3ByZXNlbnQnO1xuY29uc3QgREVQRU5ERU5DWV9DT01QT05FTlRfRlVORElOR19PUkdfVkFMSUQgPSAnb3JnYW5pemF0aW9uX3ByZXNlbnQnO1xuXG4vKiogSURzIGZvciBBUCBzZWN0aW9ucyAqKi9cbmNvbnN0IEFQX1NFQ1RJT05fSURTID1cbiAgW3sga2V5OiAnQVBJZGVudGlmaWNhdGlvbicsIGhhc2g6ICcjQVBJZGVudGlmaWNhdGlvbicsIHZhbHVlOiAnSWRlbnRpZmljYXRpb24nLCBmbVBhdGg6IEZNQy5BQ1RJVklUWV9JREVOVElGSUNBVElPTiB9LFxuICAgIHsga2V5OiAnQVBJbnRlcm5hbElkcycsIGhhc2g6ICcjQVBJbnRlcm5hbElkcycsIHZhbHVlOiAnQWdlbmN5IEludGVybmFsIElEcycsIHNlY3Rpb25QYXRoOiBBQ1RJVklUWV9JTlRFUk5BTF9JRFMgfSxcbiAgICB7IGtleTogJ0FQUGxhbm5pbmcnLCBoYXNoOiAnI0FQUGxhbm5pbmcnLCB2YWx1ZTogJ1BsYW5uaW5nJywgZm1QYXRoOiBGTUMuQUNUSVZJVFlfUExBTk5JTkcgfSxcbiAgICB7IGtleTogJ0FQTG9jYXRpb24nLCBoYXNoOiAnI0FQTG9jYXRpb24nLCB2YWx1ZTogJ0xvY2F0aW9uJywgc2VjdGlvblBhdGg6IExPQ0FUSU9OUyB9LFxuICAgIHsga2V5OiAnQVBQcm9ncmFtJywgaGFzaDogJyNBUFByb2dyYW0nLCB2YWx1ZTogJ1Byb2dyYW0nLCBmbVBhdGg6IEZNQy5BQ1RJVklUWV9QUk9HUkFNIH0sXG4gICAgeyBrZXk6ICdBUFNlY3RvcicsIGhhc2g6ICcjQVBTZWN0b3InLCB2YWx1ZTogJ1NlY3RvcnMnLCBmbVBhdGg6IEZNQy5BQ1RJVklUWV9TRUNUT1JTIH0sXG4gICAge1xuICAgICAga2V5OiAnQVBGdW5kaW5nU291cmNlcycsXG4gICAgICBoYXNoOiAnI0FQRnVuZGluZ1NvdXJjZXMnLFxuICAgICAgdmFsdWU6ICdGdW5kaW5nIFNvdXJjZXMnLFxuICAgICAgc2VjdGlvblBhdGg6IFRPVEFMX05VTUJFUl9PRl9GVU5ESU5HX1NPVVJDRVNcbiAgICB9LFxuICAgIHsga2V5OiAnQVBGdW5kaW5nJywgaGFzaDogJyNBUEZ1bmRpbmcnLCB2YWx1ZTogJ0Z1bmRpbmcnLCBzZWN0aW9uUGF0aDogRlVORElOR1MgfSxcbiAgICB7XG4gICAgICBrZXk6ICdBUFJlbGF0ZWRPcmdhbml6YXRpb25zJyxcbiAgICAgIGhhc2g6ICcjQVBSZWxhdGVkT3JnYW5pemF0aW9ucycsXG4gICAgICB2YWx1ZTogJ1JlbGF0ZWQgT3JnYW5pemF0aW9ucycsXG4gICAgICBmbVBhdGg6IEZNQy5BQ1RJVklUWV9PUkdBTklaQVRJT05TXG4gICAgfSxcbiAgICB7IGtleTogJ0FQSXNzdWVzJywgaGFzaDogJyNBUElzc3VlcycsIHZhbHVlOiAnSXNzdWVzJywgc2VjdGlvblBhdGg6IElTU1VFUyB9LFxuICAgIHsga2V5OiAnQVBDb250YWN0JywgaGFzaDogJyNBUENvbnRhY3QnLCB2YWx1ZTogJ0NvbnRhY3QgSW5mb3JtYXRpb24nLCBmbVBhdGg6IEZNQy5BQ1RJVklUWV9DT05UQUNUIH0sXG4gICAgeyBrZXk6ICdBUFN0cnVjdHVyZXMnLCBoYXNoOiAnI0FQU3RydWN0dXJlcycsIHZhbHVlOiAnU3RydWN0dXJlcycsIHNlY3Rpb25QYXRoOiBTVFJVQ1RVUkVTIH0sXG4gICAgeyBrZXk6ICdBUERvY3VtZW50JywgaGFzaDogJyNBUERvY3VtZW50JywgdmFsdWU6ICdSZWxhdGVkIERvY3VtZW50cycsIHNlY3Rpb25QYXRoOiBBQ1RJVklUWV9ET0NVTUVOVFMgfSxcbiAgXTtcblxuLyoqIENvbHVtbiBjb3VudHMgZm9yIGVhY2ggc2VjdGlvbiAqKi9cbmNvbnN0IEFDVElWSVRZX0lOVEVSTkFMX0lEU19DT0xTID0gMztcbmNvbnN0IEFDVElWSVRZX1BMQU5OSU5HX0NPTFMgPSAyO1xuY29uc3QgQUNUSVZJVFlfTE9DQVRJT05fQ09MUyA9IDM7XG5jb25zdCBBQ1RJVklUWV9GVU5ESU5HX0NPTFMgPSAyO1xuY29uc3QgQUNUSVZJVFlfQ09OVEFDVF9DT0xTID0gMjtcbmNvbnN0IEFQX0ZVTkRJTkdTX1RBQkxFX0NPTFMgPSA0O1xuXG5jb25zdCBNVUxUSV9TRUxFQ1RfTUlOX1NJWkUgPSA4O1xuY29uc3QgTVVMVElfU0VMRUNUX01BWF9TSVpFID0gODtcblxuLy8gVE9ETzogbW92ZSB0aGVzZSBmdW5jdGlvbnMgdG8gYW4gVXRpbHMgY2xhc3MuXG5jb25zdCB0b0ZpZWxkTmFtZXMgPSBmdW5jdGlvbiAobGlzdE9mTmFtZXMpIHtcbiAgcmV0dXJuIGxpc3RPZk5hbWVzLm1hcChuYW1lID0+IHRvRmllbGROYW1lKG5hbWUpKTtcbn07XG5cbi8qKlxuICogQ29udmVydHMgdGhlIG9yaWdpbmFsIG5vbi10cmFuc2xhdGVkIGxhYmVsIHRvIGludGVybmFsIGZpZWxkIG5hbWVcbiAqIEBwYXJhbSBuYW1lXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cbmNvbnN0IHRvRmllbGROYW1lID0gZnVuY3Rpb24gKG5hbWU6IHN0cmluZykge1xuICByZXR1cm4gbmFtZS50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoJyAnLCAnXycpO1xufTtcblxuLyoqXG4gKiBDb252ZXJ0cyB0aGUgaW50ZXJuYWwgZmllbGQgbmFtZSB0byB0aGUgT3JpZ2luYWwgbm9uLXRyYW5zbGF0ZWQgbGFiZWxcbiAqIEBwYXJhbSBmaWVsZE5hbWVcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xuY29uc3QgdG9PcmlnaW5hbExhYmVsID0gZnVuY3Rpb24gKGZpZWxkTmFtZTogc3RyaW5nKSB7XG4gIHJldHVybiBjYXBpdGFsaXplKGZpZWxkTmFtZS5yZXBsYWNlKCdfJywgJyAnKSk7XG59O1xuXG4vLyBUT0RPOiBtb3ZlIGFnYWluIGluc2lkZSBhIHNoYXJlZCBVdGlscyBjbGFzcyBiZWNhdXNlIHRoaXMgaXMgYSBjb3B5IGZyb20gVXRpbHMuanNcbmNvbnN0IGNhcGl0YWxpemUgPSBmdW5jdGlvbiAodGV4dDogc3RyaW5nKSB7XG4gIHJldHVybiB0ZXh0LnJlcGxhY2UoLyg/Ol58XFxzKVxcUy9nLCBjaGFyID0+IGNoYXIudG9VcHBlckNhc2UoKSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBPYmplY3QuZnJlZXplKHtcbiAgQUNUSVZJVFlfQlVER0VULFxuICBBQ1RJVklUWV9TVEFUVVMsXG4gIFNUQVRVU19SRUFTT04sXG4gIEZJTkFOQ0lBTF9JTlNUUlVNRU5ULFxuICBUWVBFX09GX0lNUExFTUVOVEFUSU9OLFxuICBPQkpFQ1RJVkUsXG4gIFJFU1VMVFMsXG4gIEJVREdFVF9DT0RFX1BST0pFQ1RfSUQsXG4gIEFDVFVBTF9BUFBST1ZBTF9EQVRFLFxuICBGVU5ESU5HUyxcbiAgRlVORElOR19ET05PUl9PUkdfSUQsXG4gIElTX0RSQUZULFxuICBPUkdfUk9MRV9PUkdfSUQsXG4gIEFERElUSU9OQUxfSU5GTyxcbiAgUFJJTUFSWV9TRUNUT1JTLFxuICBTRUNPTkRBUllfU0VDVE9SUyxcbiAgVEVSVElBUllfU0VDVE9SUyxcbiAgVEFHX1NFQ1RPUlMsXG4gIFNFQ1RPUixcbiAgU0VDVE9SX1BFUkNFTlRBR0UsXG4gIEZJTkFOQ0lOR19JTlNUUlVNRU5ULFxuICBNT0RBTElUSUVTLFxuICBMSU5FX01JTklTVFJZX1JBTkssXG4gIEdPVkVSTk1FTlRfQUdSRUVNRU5UX05VTUJFUixcbiAgRlVORElOR19TVEFUVVMsXG4gIExPQ0FUSU9OUyxcbiAgTE9DQVRJT04sXG4gIExPQ0FUSU9OX1BFUkNFTlRBR0UsXG4gIElNUExFTUVOVEFUSU9OX0xPQ0FUSU9OLFxuICBJTVBMRU1FTlRBVElPTl9MRVZFTCxcbiAgQVBQUk9WQUxfU1RBVFVTLFxuICBBUFBST1ZFRF9CWSxcbiAgQVBQUk9WQUxfREFURSxcbiAgVFlQRV9PRl9BU1NJU1RBTkNFLFxuICBFWFBFTkRJVFVSRV9DTEFTUyxcbiAgRlVORElOR19ERVRBSUxTLFxuICBNT0RFX09GX1BBWU1FTlQsXG4gIEZVTkRJTkdfQ0xBU1NJRklDQVRJT05fREFURSxcbiAgQUdSRUVNRU5ULFxuICBET05PUl9PQkpFQ1RJVkUsXG4gIENPTkRJVElPTlMsXG4gIEFHUkVFTUVOVF9DT0RFLFxuICBBR1JFRU1FTlRfVElUTEUsXG4gIFBST0pFQ1RfQ0FURUdPUlksXG4gIFBST0pFQ1RfSU1QTEVNRU5USU5HX1VOSVQsXG4gIE9SR0FOSVpBVElPTixcbiAgUEVSQ0VOVEFHRSxcbiAgQU1QX09SR0FOSVpBVElPTl9ST0xFX0lELFxuICBST0xFLFxuICBFWEVDVVRJTkdfQUdFTkNZLFxuICBDT05UUkFDVElOR19BR0VOQ1ksXG4gIEJFTkVGSUNJQVJZX0FHRU5DWSxcbiAgSU1QTEVNRU5USU5HX0FHRU5DWSxcbiAgUkVTUE9OU0lCTEVfT1JHQU5JWkFUSU9OLFxuICBET05PUl9PUkdBTklaQVRJT04sXG4gIFJFR0lPTkFMX0dST1VQLFxuICBTRUNUT1JfR1JPVVAsXG4gIEJVREdFVFMsXG4gIEJVREdFVF9DT0RFLFxuICBCVURHRVRfT1JHQU5JWkFUSU9OX0NPREUsXG4gIEFSQ0hJVkVELFxuICBUUkFOU0FDVElPTl9EQVRFLFxuICBUUkFOU0FDVElPTl9UWVBFLFxuICBDT01NSVRNRU5UUyxcbiAgRElTQlVSU0VNRU5UUyxcbiAgRVhQRU5ESVRVUkVTLFxuICBFU1RJTUFURURfRElTQlVSU0VNRU5UUyxcbiAgVFJBTlNBQ1RJT05fQU1PVU5ULFxuICBBREpVU1RNRU5UX1RZUEUsXG4gIEFDVFVBTF9TVEFSVF9EQVRFLFxuICBQUk9QT1NFRF9TVEFSVF9EQVRFLFxuICBBQ1RVQUxfQ09NUExFVElPTl9EQVRFLFxuICBDT05UUkFDVElOR19EQVRFLFxuICBESVNCVVJTRU1FTlRfREFURSxcbiAgUFJPUE9TRURfQVBQUk9WQUxfREFURSxcbiAgT1JJR0lOQUxfQ09NUExFVElPTl9EQVRFLFxuICBQUk9QT1NFRF9DT01QTEVUSU9OX0RBVEUsXG4gIEZJTkFMX0RBVEVfRk9SX0RJU0JVUlNFTUVOVFMsXG4gIEZJTkFMX0RBVEVfRk9SX0NPTlRSQUNUSU5HLFxuICBFRkZFQ1RJVkVfRlVORElOR19EQVRFLFxuICBGVU5ESU5HX0NMT1NJTkdfREFURSxcbiAgUkFUSUZJQ0FUSU9OX0RBVEUsXG4gIE1BVFVSSVRZLFxuICBMQVNUX0FVRElUX0RBVEUsXG4gIFNJR05BVFVSRV9EQVRFLFxuICBIVU1BTklUQVJJQU5fQUlELFxuICBESVNBU1RFUl9SRVNQT05TRSxcbiAgUFJPR1JBTSxcbiAgUFJPR1JBTV9QRVJDRU5UQUdFLFxuICBQUk9HUkFNX1NFVFRJTkdTLFxuICBOQVRJT05BTF9QTEFOX09CSkVDVElWRSxcbiAgUFJJTUFSWV9QUk9HUkFNUyxcbiAgU0VDT05EQVJZX1BST0dSQU1TLFxuICBURVJUSUFSX1BST0dSQU1TLFxuICBHT1ZFUk5NRU5UX0FQUFJPVkFMX1BST0NFRFVSRVMsXG4gIEpPSU5UX0NSSVRFUklBLFxuICBURUFNLFxuICBSRUpFQ1RFRF9JRCxcbiAgSU5URVJOQUxfSUQsXG4gIEFNUF9JRCxcbiAgUFJPSkVDVF9USVRMRSxcbiAgREVTQ1JJUFRJT04sXG4gIE1PRElGSUVEX0JZLFxuICBNT0RJRklFRF9PTixcbiAgQ1JFQVRFRF9CWSxcbiAgQ1JFQVRFRF9PTixcbiAgTEFTVF9JTVBPUlRFRF9CWSxcbiAgQ0xJRU5UX0NIQU5HRV9JRCxcbiAgQ0xJRU5UX0NSRUFURURfT04sXG4gIENMSUVOVF9VUERBVEVEX09OLFxuICBJU19QVVNIRUQsXG4gIEFDVElWSVRZX0dST1VQLFxuICBWRVJTSU9OLFxuICBQUk9KRUNUX0NPTU1FTlRTLFxuICBMRVNTT05TX0xFQVJORUQsXG4gIFBST0pFQ1RfSU1QQUNULFxuICBBQ1RJVklUWV9TVU1NQVJZLFxuICBDT05ESVRJT05BTElUSUVTLFxuICBQUk9KRUNUX01BTkFHRU1FTlQsXG4gIEFfQ19DSEFQVEVSLFxuICBDUklTX05VTUJFUixcbiAgSUFUSV9JREVOVElGSUVSLFxuICBBQ1RJVklUWV9JTlRFUk5BTF9JRFMsXG4gIEhJRVJBUkNISUNBTF9WQUxVRSxcbiAgSElFUkFSQ0hJQ0FMX1ZBTFVFX1BBUlRTLFxuICBISUVSQVJDSElDQUxfVkFMVUVfREVQVEgsXG4gIFBQQ19BTU9VTlQsXG4gIFJQQ19BTU9VTlQsXG4gIFBQQ19BTk5VQUxfQlVER0VUUyxcbiAgQU1PVU5ULFxuICBDVVJSRU5DWSxcbiAgRlVORElOR19EQVRFLFxuICBDT01QT05FTlRTLFxuICBUT1RBTF9OVU1CRVJfT0ZfRlVORElOR19TT1VSQ0VTLFxuICBTT1VSQ0VfUk9MRSxcbiAgQU1QX0ZVTkRJTkdfSUQsXG4gIElTU1VFUyxcbiAgSVNTVUVfREFURSxcbiAgSVNTVUVfTkFNRSxcbiAgTUVBU1VSRVMsXG4gIE1FQVNVUkVfTkFNRSxcbiAgTUVBU1VSRV9EQVRFLFxuICBBQ1RPUlMsXG4gIEFDVE9SX05BTUUsXG4gIFNUUlVDVFVSRVMsXG4gIFNUUlVDVFVSRVNfVElUTEUsXG4gIFNUUlVDVFVSRVNfREVTQ1JJUFRJT04sXG4gIFNUUlVDVFVSRVNfTEFUSVRVREUsXG4gIFNUUlVDVFVSRVNfTE9OR0lUVURFLFxuICBTVFJVQ1RVUkVTX0NPTE9SLFxuICBTVFJVQ1RVUkVTX0xBVCxcbiAgU1RSVUNUVVJFU19MTkcsXG4gIFNUUlVDVFVSRVNfU0hBUEUsXG4gIFNUUlVDVFVSRVNfUE9JTlQsXG4gIFNUUlVDVFVSRVNfUE9MWUdPTixcbiAgU1RSVUNUVVJFU19QT0xZTElORSxcbiAgU1RSVUNUVVJFU19DT09SRElOQVRFUyxcbiAgQ09NUE9ORU5UX1RZUEUsXG4gIENPTVBPTkVOVF9USVRMRSxcbiAgQ09NUE9ORU5UX0ZVTkRJTkcsXG4gIENPTVBPTkVOVF9ERVNDUklQVElPTixcbiAgQ09NUE9ORU5UX09SR0FOSVpBVElPTixcbiAgRlVORElOR19BTU9VTlRfSUQsXG4gIEVYVFJBX0lORk8sXG4gIFZBTFVFLFxuICBBQ1JPTllNLFxuICBUWVBFX09GX0NPT1BFUkFUSU9OLFxuICBBTk5VQUxfUFJPSkVDVF9CVURHRVRfSUQsXG4gIFRZUEUsXG4gIFlFQVIsXG4gIEdST1VQX1ZFUlNJT05FRF9GVU5ESU5HLFxuICBBQ1RJVkVfTElTVCxcbiAgQUNUSVZFLFxuICBERUxFR0FURURfQ09PUEVSQVRJT04sXG4gIERFTEVHQVRFRF9QQVJUTkVSLFxuICBGSU5BTkNJTkdfSUQsXG4gIERJU0JVUlNFTUVOVF9PUkRFUl9JRCxcbiAgUExFREdFLFxuICBDQVBJVEFMX1NQRU5ESU5HX1BFUkNFTlRBR0UsXG4gIFJFUE9SVElOR19EQVRFLFxuICBSRUNJUElFTlRfUk9MRSxcbiAgUkVDSVBJRU5UX09SR0FOSVpBVElPTixcbiAgVEVNUE9SQUxfSUQsXG4gIE1JTklTVFJZX0NPREUsXG4gIFBST0pFQ1RfQ09ERSxcbiAgRlksXG4gIElORElSRUNUX09OX0JVREdFVCxcbiAgSU1QTEVNRU5UQVRJT05fTEVWRUxTX0VYVFJBX0lORk8sXG4gIElNUExFTUVOVEFUSU9OX0xPQ0FUSU9OX0VYVFJBX0lORk8sXG4gIERPTk9SX0NPTlRBQ1QsXG4gIFBST0pFQ1RfQ09PUkRJTkFUT1JfQ09OVEFDVCxcbiAgU0VDVE9SX01JTklTVFJZX0NPTlRBQ1QsXG4gIE1PRkVEX0NPTlRBQ1QsXG4gIElNUExFTUVOVElOR19FWEVDVVRJTkdfQUdFTkNZX0NPTlRBQ1QsXG4gIENPTlRBQ1QsXG4gIE9SR0FOSVpBVElPTl9HUk9VUCxcbiAgRklYRURfRVhDSEFOR0VfUkFURSxcbiAgUFJJTUFSWV9DT05UQUNULFxuICBBQ1RJVklUWV9ET0NVTUVOVFMsXG4gIERPQ1VNRU5UX1RZUEUsXG4gIElTTzIsXG4gIE1URUZfUFJPSkVDVElPTlMsXG4gIFBST0pFQ1RJT04sXG4gIFBJUEVMSU5FLFxuICBQUk9KRUNUSU9OX0RBVEUsXG4gIFNBTUVfQVNfUFJPUE9TRURfU1RBUlRfREFURV9MQUJFTCxcbiAgU0FNRV9BU19QUk9QT1NFRF9BUFBST1ZBTF9EQVRFX0xBQkVMLFxuICBERVBFTkRFTkNZX0lNUExFTUVOVEFUSU9OX0xFVkVMX1BSRVNFTlQsXG4gIERFUEVOREVOQ1lfSU1QTEVNRU5UQVRJT05fTEVWRUxfVkFMSUQsXG4gIERFUEVOREVOQ1lfSU1QTEVNRU5UQVRJT05fTE9DQVRJT05fUFJFU0VOVCxcbiAgREVQRU5ERU5DWV9JTVBMRU1FTlRBVElPTl9MT0NBVElPTl9WQUxJRCxcbiAgREVQRU5ERU5DWV9QUk9KRUNUX0NPREVfT05fQlVER0VULFxuICBERVBFTkRFTkNZX09OX0JVREdFVCxcbiAgREVQRU5ERU5DWV9UUkFOU0FDVElPTl9QUkVTRU5ULFxuICBERVBFTkRFTkNZX0NPTVBPTkVOVF9GVU5ESU5HX09SR19WQUxJRCxcbiAgQVBfU0VDVElPTl9JRFMsXG4gIEFDVElWSVRZX0lOVEVSTkFMX0lEU19DT0xTLFxuICBBQ1RJVklUWV9QTEFOTklOR19DT0xTLFxuICBBQ1RJVklUWV9MT0NBVElPTl9DT0xTLFxuICBBQ1RJVklUWV9GVU5ESU5HX0NPTFMsXG4gIEFDVElWSVRZX0NPTlRBQ1RfQ09MUyxcbiAgQVBfRlVORElOR1NfVEFCTEVfQ09MUyxcbiAgTVVMVElfU0VMRUNUX01JTl9TSVpFLFxuICBNVUxUSV9TRUxFQ1RfTUFYX1NJWkUsXG4gIHRvRmllbGROYW1lcyxcbiAgdG9GaWVsZE5hbWUsXG4gIHRvT3JpZ2luYWxMYWJlbCxcbiAgY2FwaXRhbGl6ZVxufSk7XG4iLCJjb25zdCBOT1RJRklDQVRJT05fT1JJR0lOX0FQSV9TRUNVUklUWSA9ICdOT1RJRklDQVRJT05fT1JJR0lOX0FQSV9TRUNVUklUWSc7XG5jb25zdCBOT1RJRklDQVRJT05fT1JJR0lOX0FQSV9ORVRXT1JLID0gJ05PVElGSUNBVElPTl9PUklHSU5fQVBJX05FVFdPUksnO1xuY29uc3QgTk9USUZJQ0FUSU9OX09SSUdJTl9BUElfU1lOQ1VQID0gJ05PVElGSUNBVElPTl9PUklHSU5fQVBJX1NZTkNVUCc7XG5jb25zdCBOT1RJRklDQVRJT05fT1JJR0lOX0FQSV9HRU5FUkFMID0gJ05PVElGSUNBVElPTl9PUklHSU5fQVBJX0dFTkVSQUwnO1xuY29uc3QgTk9USUZJQ0FUSU9OX09SSUdJTl9EQVRBQkFTRSA9ICdOT1RJRklDQVRJT05fT1JJR0lOX0RBVEFCQVNFJztcbmNvbnN0IE5PVElGSUNBVElPTl9PUklHSU5fQVVUSEVOVElDQVRJT04gPSAnTk9USUZJQ0FUSU9OX09SSUdJTl9BVVRIRU5USUNBVElPTic7XG5jb25zdCBOT1RJRklDQVRJT05fT1JJR0lOX1dPUktTUEFDRV9GSUxURVIgPSAnTk9USUZJQ0FUSU9OX09SSUdJTl9XT1JLU1BBQ0VfRklMVEVSJztcbmNvbnN0IE5PVElGSUNBVElPTl9PUklHSU5fV09SS1NQQUNFID0gJ05PVElGSUNBVElPTl9PUklHSU5fV09SS1NQQUNFJztcbmNvbnN0IE5PVElGSUNBVElPTl9PUklHSU5fU1lOQ1VQX1BST0NFU1MgPSAnTk9USUZJQ0FUSU9OX09SSUdJTl9TWU5DVVBfUFJPQ0VTUyc7XG5jb25zdCBOT1RJRklDQVRJT05fT1JJR0lOX0NVUlJFTkNZX01BTkFHRVIgPSAnTk9USUZJQ0FUSU9OX09SSUdJTl9DVVJSRU5DWV9NQU5BR0VSJztcbmNvbnN0IE5PVElGSUNBVElPTl9PUklHSU5fREFURVMgPSAnTk9USUZJQ0FUSU9OX09SSUdJTl9EQVRFUyc7XG5jb25zdCBOT1RJRklDQVRJT05fT1JJR0lOX0FDVElWSVRZID0gJ05PVElGSUNBVElPTl9PUklHSU5fQUNUSVZJVFknO1xuY29uc3QgTk9USUZJQ0FUSU9OX09SSUdJTl9SRVNPVVJDRSA9ICdOT1RJRklDQVRJT05fT1JJR0lOX1JFU09VUkNFJztcbmNvbnN0IE5PVElGSUNBVElPTl9PUklHSU5fSTE4TkVYVCA9ICdOT1RJRklDQVRJT05fT1JJR0lOX0kxOE5FWFQnO1xuY29uc3QgTk9USUZJQ0FUSU9OX09SSUdJTl9VUERBVEVfQ0hFQ0sgPSAnTk9USUZJQ0FUSU9OX09SSUdJTl9VUERBVEVfQ0hFQ0snO1xuY29uc3QgTk9USUZJQ0FUSU9OX09SSUdJTl9VUERBVEUgPSAnTk9USUZJQ0FUSU9OX09SSUdJTl9VUERBVEUnO1xuY29uc3QgTk9USUZJQ0FUSU9OX09SSUdJTl9TRVRVUCA9ICdOT1RJRklDQVRJT05fT1JJR0lOX1NFVFVQJztcbmNvbnN0IE5PVElGSUNBVElPTl9PUklHSU5fU0VUVElOR1MgPSAnTk9USUZJQ0FUSU9OX09SSUdJTl9TRVRUSU5HUyc7XG5cbmNvbnN0IE5PVElGSUNBVElPTl9TRVZFUklUWV9XQVJOSU5HID0gJ05PVElGSUNBVElPTl9TRVZFUklUWV9XQVJOSU5HJztcbmNvbnN0IE5PVElGSUNBVElPTl9TRVZFUklUWV9JTkZPID0gJ05PVElGSUNBVElPTl9TRVZFUklUWV9JTkZPJztcbmNvbnN0IE5PVElGSUNBVElPTl9TRVZFUklUWV9FUlJPUiA9ICdOT1RJRklDQVRJT05fU0VWRVJJVFlfRVJST1InO1xuXG5jb25zdCBOT1RJRklDQVRJT05fRVJST1JfTEVWRUxfTUlOT1IgPSAnTk9USUZJQ0FUSU9OX0VSUk9SX0xFVkVMX01JTk9SJztcbmNvbnN0IE5PVElGSUNBVElPTl9FUlJPUl9MRVZFTF9CTE9DS0VSID0gJ05PVElGSUNBVElPTl9FUlJPUl9MRVZFTF9CTE9DS0VSJztcblxuY29uc3QgTk9USUZJQ0FUSU9OX09SSUdJTl9XUk9OR19NRVRIT0RfVVNBR0UgPSAnTk9USUZJQ0FUSU9OX09SSUdJTl9XUk9OR19NRVRIT0RfVVNBR0UnO1xuXG5jb25zdCBFUlJPUl9DT0RFX05PX0NPTk5FQ1RJVklUWSA9ICdOT19DT05ORUNUSVZJVFknO1xuY29uc3QgRVJST1JfQ09ERV9BQ0NFU1NfREVOSUVEID0gJ0FDQ0VTU19ERU5JRUQnO1xuXG5cbmNvbnN0IE1TR19JTlZBTElEX1VSTCA9ICdpbnZhbGlkVXJsJztcbmNvbnN0IE1TR19USU1FT1VUID0gJ3RpbWVvdXRFcnJvcic7XG5jb25zdCBNU0dfVU5LTk9XTl9ORVRXT1JLX0VSUk9SID0gJ3Vua25vd25OZXR3b3JrRXJyb3InO1xuY29uc3QgTVNHX0FNUF9VTlJFQUNIQUJMRSA9ICdBTVBVbnJlYWNoYWJsZUVycm9yJztcbmNvbnN0IEdFTkVSQUxfQ09OTkVDVElPTl9FUlJPUlMgPSBbTVNHX0lOVkFMSURfVVJMLCBNU0dfVElNRU9VVCwgTVNHX1VOS05PV05fTkVUV09SS19FUlJPUiwgTVNHX0FNUF9VTlJFQUNIQUJMRV07XG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmZyZWV6ZSh7XG4gIE5PVElGSUNBVElPTl9PUklHSU5fQVBJX1NFQ1VSSVRZLFxuICBOT1RJRklDQVRJT05fT1JJR0lOX0FQSV9ORVRXT1JLLFxuICBOT1RJRklDQVRJT05fT1JJR0lOX0FQSV9TWU5DVVAsXG4gIE5PVElGSUNBVElPTl9PUklHSU5fQVBJX0dFTkVSQUwsXG4gIE5PVElGSUNBVElPTl9PUklHSU5fREFUQUJBU0UsXG4gIE5PVElGSUNBVElPTl9PUklHSU5fQVVUSEVOVElDQVRJT04sXG4gIE5PVElGSUNBVElPTl9PUklHSU5fV09SS1NQQUNFX0ZJTFRFUixcbiAgTk9USUZJQ0FUSU9OX09SSUdJTl9XT1JLU1BBQ0UsXG4gIE5PVElGSUNBVElPTl9PUklHSU5fU1lOQ1VQX1BST0NFU1MsXG4gIE5PVElGSUNBVElPTl9PUklHSU5fQ1VSUkVOQ1lfTUFOQUdFUixcbiAgTk9USUZJQ0FUSU9OX09SSUdJTl9EQVRFUyxcbiAgTk9USUZJQ0FUSU9OX09SSUdJTl9BQ1RJVklUWSxcbiAgTk9USUZJQ0FUSU9OX09SSUdJTl9SRVNPVVJDRSxcbiAgTk9USUZJQ0FUSU9OX09SSUdJTl9JMThORVhULFxuICBOT1RJRklDQVRJT05fT1JJR0lOX1VQREFURV9DSEVDSyxcbiAgTk9USUZJQ0FUSU9OX09SSUdJTl9VUERBVEUsXG4gIE5PVElGSUNBVElPTl9PUklHSU5fU0VUVVAsXG4gIE5PVElGSUNBVElPTl9PUklHSU5fU0VUVElOR1MsXG5cbiAgTk9USUZJQ0FUSU9OX1NFVkVSSVRZX1dBUk5JTkcsXG4gIE5PVElGSUNBVElPTl9TRVZFUklUWV9JTkZPLFxuICBOT1RJRklDQVRJT05fU0VWRVJJVFlfRVJST1IsXG5cbiAgTk9USUZJQ0FUSU9OX0VSUk9SX0xFVkVMX01JTk9SLFxuICBOT1RJRklDQVRJT05fRVJST1JfTEVWRUxfQkxPQ0tFUixcblxuICBOT1RJRklDQVRJT05fT1JJR0lOX1dST05HX01FVEhPRF9VU0FHRSxcblxuICBFUlJPUl9DT0RFX05PX0NPTk5FQ1RJVklUWSxcbiAgRVJST1JfQ09ERV9BQ0NFU1NfREVOSUVELFxuXG5cbiAgTVNHX0lOVkFMSURfVVJMLFxuICBNU0dfVElNRU9VVCxcbiAgTVNHX1VOS05PV05fTkVUV09SS19FUlJPUixcbiAgTVNHX0FNUF9VTlJFQUNIQUJMRSxcbiAgR0VORVJBTF9DT05ORUNUSU9OX0VSUk9SU1xufSlcbjtcbiIsIi8qIGVzbGludC1kaXNhYmxlIGNsYXNzLW1ldGhvZHMtdXNlLXRoaXMgKi9cbmltcG9ydCBBY3Rpdml0eUNvbnN0YW50cyBmcm9tICcuLi91dGlsL0FjdGl2aXR5Q29uc3RhbnRzJztcbmltcG9ydCBFcnJvckNvbnN0YW50cyBmcm9tICcuLi8uLi91dGlscy9jb25zdGFudHMvRXJyb3JDb25zdGFudHMnO1xuaW1wb3J0IENvbnN0YW50cyBmcm9tICcuLi8uLi91dGlscy9Db25zdGFudHMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDdXJyZW5jeVJhdGVzTWFuYWdlciB7XG4gIGNvbnN0cnVjdG9yKGN1cnJlbmN5UmF0ZXMsIGJhc2VDdXJyZW5jeSwgdHJhbnNsYXRlLCBkYXRlVXRpbHMsIGVycm9yTm90aWZpY2F0aW9uSGVscGVyKSB7XG4gICAgdGhpcy5fY3VycmVuY3lSYXRlcyA9IGN1cnJlbmN5UmF0ZXM7XG4gICAgdGhpcy5fYmFzZUN1cnJlbmN5ID0gYmFzZUN1cnJlbmN5O1xuICAgIHRoaXMuX2N1cnJuY2llc1dpdGhFeGNoYW5nZVJhdGVzID0gdGhpcy5fZ2V0Q3VycmVuY2llc1dpdGhFeGNoYW5nZVJhdGVzKCk7XG4gICAgdGhpcy5fdHJhbnNsYXRlID0gdHJhbnNsYXRlO1xuICAgIHRoaXMuX2RhdGVVdGlscyA9IGRhdGVVdGlscztcbiAgICB0aGlzLl9lcnJvck5vdGlmaWNhdGlvbkhlbHBlciA9IGVycm9yTm90aWZpY2F0aW9uSGVscGVyO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCBvZiBjdXJyZW5jaWVzIHRoYXQgaGFzIGF0IGxlYXN0IG9uZSBleGNoYW5nZSByYXRlXG4gICAqIEByZXR1cm4ge1NldDxhbnk+IHwgKn1cbiAgICovXG4gIGdldCBjdXJyZW5jaWVzV2l0aEV4Y2hhbmdlUmF0ZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2N1cnJuY2llc1dpdGhFeGNoYW5nZVJhdGVzO1xuICB9XG5cbiAgLyoqXG4gICAqIEN1cnJlbmN5IGNvbnZlcnNpb24gdXRpbGl0eS4gSWYgd2UgaGF2ZSB0aGUgZGlyZWN0IHJhdGUgaXQgd2lsbCBjb252ZXJ0IGZyb20gY3VycmVuY3lGcm9tIHRvIGN1cnJlbmN5VG8gaW4gdGhlXG4gICAqIGdpdmVuIGRhdGUuIElmIHdlIGRvbid0IGhhdmUgdGhlIHNhaWQgY3VycmVuY3kgaXQgd2lsbCB0cnkgdG8gc2VhcmNoIHRoZSBpbnZlcnNlIHJhdGUgYW5kIHVzZSAxL3guIElmIHRoZSBpbnZlcnNlXG4gICAqIHJhdGUgaXMgYWxzbyBub3QgQXZhaWxhYmxlIGFuIGVycm9yIHdpbGwgYmUgdGhyb3duXG4gICAqIEBwYXJhbSBjdXJyZW5jeUZyb20gY3VycmVuY3kgY29kZSBmcm9tIHRoZSBjdXJyZW5jeSB3ZSBhcmUgY29udmVydGluZyBmcm9tXG4gICAqIEBwYXJhbSBjdXJyZW5jeVRvIGN1cnJlbmN5IGNvZGUgZnJvbSB0aGUgY3VycmVuY3kgd2UgYXJlIGNvbnZlcnRpbmcgdG9cbiAgICogQHBhcmFtIGRhdGVUb0ZpbmQgZGF0ZSBmb3Igd2hpY2ggd2UgYXJlIGRvaW5nIHRoZSBjb252ZXJzaW9uLiBJdCBpcyBleHBlY3RlZCBpbiB5eXl5LW1tLWRkXG4gICAqIEByZXR1cm5zIHsqfFByb21pc2UuPFRSZXN1bHQ+fVxuICAgKi9cbiAgY29udmVydEN1cnJlbmN5KGN1cnJlbmN5RnJvbSwgY3VycmVuY3lUbywgZGF0ZVRvRmluZCwgZml4ZWRFeGNoYW5nZVJhdGUpIHtcbiAgICBpZiAoY3VycmVuY3lGcm9tID09PSBjdXJyZW5jeVRvKSB7XG4gICAgICByZXR1cm4gQ29uc3RhbnRzLlJBVEVfU0FNRV9DVVJSRU5DWTtcbiAgICB9XG4gICAgaWYgKGZpeGVkRXhjaGFuZ2VSYXRlICYmIGZpeGVkRXhjaGFuZ2VSYXRlID4gMCkge1xuICAgICAgcmV0dXJuICh0aGlzLmNvbnZlcnRDdXJyZW5jeSh0aGlzLl9iYXNlQ3VycmVuY3ksIGN1cnJlbmN5VG8sIGRhdGVUb0ZpbmQsIG51bGwpIC9cbiAgICAgICAgZml4ZWRFeGNoYW5nZVJhdGUpO1xuICAgIH1cbiAgICBjb25zdCB0aW1lRGF0ZVRvRmluZCA9IChuZXcgRGF0ZShgJHtkYXRlVG9GaW5kfSAke0NvbnN0YW50cy5DVVJSRU5DWV9IT1VSfWApKS5nZXRUaW1lKCk7XG4gICAgaWYgKHRoaXMuX2N1cnJlbmN5UmF0ZXMpIHtcbiAgICAgIGNvbnN0IGN1cnJlbmNpZXNUb1NlYXJjaERpcmVjdCA9IHRoaXMuX2N1cnJlbmN5UmF0ZXMuZmluZCgoaXRlbSkgPT5cbiAgICAgICAgaXRlbVtDb25zdGFudHMuQ1VSUkVOQ1lfUEFJUl0uZnJvbSA9PT0gY3VycmVuY3lGcm9tICYmIGl0ZW1bQ29uc3RhbnRzLkNVUlJFTkNZX1BBSVJdLnRvID09PSBjdXJyZW5jeVRvXG4gICAgICApO1xuICAgICAgaWYgKGN1cnJlbmNpZXNUb1NlYXJjaERpcmVjdCkge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRFeGNoYW5nZVJhdGUoY3VycmVuY2llc1RvU2VhcmNoRGlyZWN0LCB0aW1lRGF0ZVRvRmluZCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBkaXJlY3Qgbm90IGZvdW5kXG4gICAgICAgIGNvbnN0IGN1cnJlbmNpZXNUb1NlYXJjaEludmVyc2UgPVxuICAgICAgICAgIHRoaXMuX2N1cnJlbmN5UmF0ZXMuZmluZCgoaXRlbSkgPT5cbiAgICAgICAgICAgIGl0ZW1bQ29uc3RhbnRzLkNVUlJFTkNZX1BBSVJdLmZyb20gPT09IGN1cnJlbmN5VG8gJiYgaXRlbVtDb25zdGFudHMuQ1VSUkVOQ1lfUEFJUl0udG8gPT09XG4gICAgICAgICAgICBjdXJyZW5jeUZyb20pO1xuICAgICAgICBpZiAoY3VycmVuY2llc1RvU2VhcmNoSW52ZXJzZSkge1xuICAgICAgICAgIHJldHVybiAxIC8gdGhpcy5nZXRFeGNoYW5nZVJhdGUoY3VycmVuY2llc1RvU2VhcmNoSW52ZXJzZSwgdGltZURhdGVUb0ZpbmQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmNvbnZlcnRWaWFCYXNlQ3VycmVuY3koY3VycmVuY3lGcm9tLCBjdXJyZW5jeVRvLCB0aW1lRGF0ZVRvRmluZCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgdGhpcy5fZ2V0Q3VycmVuY3lFcnJvcignQ3VycmVuY3lSYXRlc05vdEluaXRpYWxpemVkJyk7XG4gICAgfVxuICB9XG5cbiAgY29udmVydEZ1bmRpbmdEZXRhaWxzVG9DdXJyZW5jeShmdW5kaW5nRGV0YWlscywgY3VycmVuY3lUbykge1xuICAgIGxldCB0b3RhbCA9IDA7XG4gICAgZnVuZGluZ0RldGFpbHMuZm9yRWFjaChmZCA9PiB7XG4gICAgICB0b3RhbCArPSB0aGlzLmNvbnZlcnRUcmFuc2FjdGlvbkFtb3VudFRvQ3VycmVuY3koZmQsIGN1cnJlbmN5VG8pO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHRvdGFsO1xuICB9XG5cbiAgY29udmVydFRyYW5zYWN0aW9uQW1vdW50VG9CYXNlQ3VycmVuY3koZnVuZGluZ0RldGFpbCkge1xuICAgIHJldHVybiB0aGlzLmNvbnZlcnRUcmFuc2FjdGlvbkFtb3VudFRvQ3VycmVuY3koZnVuZGluZ0RldGFpbCwgdGhpcy5fYmFzZUN1cnJlbmN5KTtcbiAgfVxuXG4gIGNvbnZlcnRBbW91bnRUb0N1cnJlbmN5KGFtb3VudCwgY3VycmVuY3lGcm9tLCBkYXRlLCBmaXhlZEV4Y2hhbmdlUmF0ZSwgY3VycmVuY3lUbykge1xuICAgIGNvbnN0IGN1cnJlbmN5UmF0ZSA9IHRoaXMuY29udmVydEN1cnJlbmN5KGN1cnJlbmN5RnJvbSwgY3VycmVuY3lUbyxcbiAgICAgIHRoaXMuX2RhdGVVdGlscy5mb3JtYXREYXRlRm9yQVBJKGRhdGUpLCBmaXhlZEV4Y2hhbmdlUmF0ZSk7XG4gICAgcmV0dXJuIGFtb3VudCAqIGN1cnJlbmN5UmF0ZTtcbiAgfVxuXG4gIGNvbnZlcnRUcmFuc2FjdGlvbkFtb3VudFRvQ3VycmVuY3koZnVuZGluZ0RldGFpbCwgY3VycmVuY3lUbykge1xuICAgIGNvbnN0IGZpeGVkRXhjaGFuZ2VSYXRlID0gZnVuZGluZ0RldGFpbFtBY3Rpdml0eUNvbnN0YW50cy5GSVhFRF9FWENIQU5HRV9SQVRFXTtcbiAgICBjb25zdCBjdXJyZW5jeUZyb20gPSBmdW5kaW5nRGV0YWlsW0FjdGl2aXR5Q29uc3RhbnRzLkNVUlJFTkNZXS52YWx1ZTtcbiAgICBjb25zdCB0cmFuc2FjdGlvbkRhdGUgPSBmdW5kaW5nRGV0YWlsW0FjdGl2aXR5Q29uc3RhbnRzLlRSQU5TQUNUSU9OX0RBVEVdO1xuICAgIGNvbnN0IHRyYW5zYWN0aW9uQW1vdW50ID0gZnVuZGluZ0RldGFpbFtBY3Rpdml0eUNvbnN0YW50cy5UUkFOU0FDVElPTl9BTU9VTlRdO1xuICAgIHJldHVybiB0aGlzLmNvbnZlcnRBbW91bnRUb0N1cnJlbmN5KHRyYW5zYWN0aW9uQW1vdW50LCBjdXJyZW5jeUZyb20sIHRyYW5zYWN0aW9uRGF0ZSwgZml4ZWRFeGNoYW5nZVJhdGUsXG4gICAgICBjdXJyZW5jeVRvKTtcbiAgfVxuXG4gIGdldEV4Y2hhbmdlUmF0ZShjdXJyZW5jaWVzVG9TZWFyY2gsIHRpbWVEYXRlVG9GaW5kKSB7XG4gICAgbGV0IGxvd2VyRW5kID0gMDtcbiAgICBsZXQgaGlnaGVyRW5kID0gY3VycmVuY2llc1RvU2VhcmNoLnJhdGVzLmxlbmd0aCAtIDE7XG4gICAgd2hpbGUgKGxvd2VyRW5kIDwgaGlnaGVyRW5kKSB7XG4gICAgICBjb25zdCBtaWRkbGUgPSBNYXRoLmZsb29yKChsb3dlckVuZCArIGhpZ2hlckVuZCkgLyAyKTtcbiAgICAgIGNvbnN0IGRpZmZlcmVuY2UgPSBNYXRoLmFicygobmV3IERhdGUoXG4gICAgICAgIGAke2N1cnJlbmNpZXNUb1NlYXJjaC5yYXRlc1ttaWRkbGVdLmRhdGV9ICAke0NvbnN0YW50cy5DVVJSRU5DWV9IT1VSfWApKVxuICAgICAgICAtIHRpbWVEYXRlVG9GaW5kKTtcbiAgICAgIGNvbnN0IGRpZmZlcmVuY2UxID0gTWF0aC5hYnMoKG5ldyBEYXRlKFxuICAgICAgICBgJHtjdXJyZW5jaWVzVG9TZWFyY2gucmF0ZXNbbWlkZGxlICsgMV0uZGF0ZX0gICR7Q29uc3RhbnRzLkNVUlJFTkNZX0hPVVJ9YCkpXG4gICAgICAgIC0gdGltZURhdGVUb0ZpbmQpO1xuICAgICAgaWYgKGRpZmZlcmVuY2UxIDw9IGRpZmZlcmVuY2UpIHtcbiAgICAgICAgbG93ZXJFbmQgPSBtaWRkbGUgKyAxO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaGlnaGVyRW5kID0gbWlkZGxlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gY3VycmVuY2llc1RvU2VhcmNoLnJhdGVzW2hpZ2hlckVuZF0ucmF0ZTtcbiAgfVxuXG4gIF9nZXRDdXJyZW5jeUVycm9yKGVycm9yTWVzYWdlKSB7XG4gICAgY29uc3Qgbm90aWZFcnJvckN1cnJlbmN5ID0gdGhpcy5fZXJyb3JOb3RpZmljYXRpb25IZWxwZXIuY3JlYXRlTm90aWZpY2F0aW9uKHtcbiAgICAgIG1lc3NhZ2U6IHRoaXMuX3RyYW5zbGF0ZShlcnJvck1lc2FnZSksXG4gICAgICBvcmlnaW46IEVycm9yQ29uc3RhbnRzLk5PVElGSUNBVElPTl9PUklHSU5fQ1VSUkVOQ1lfTUFOQUdFUlxuICAgIH0pO1xuICAgIHJldHVybiBub3RpZkVycm9yQ3VycmVuY3k7XG4gIH1cblxuICBjb252ZXJ0VmlhQmFzZUN1cnJlbmN5KGN1cnJlbmN5RnJvbSwgY3VycmVuY3lUbywgdGltZURhdGVUb0ZpbmQpIHtcbiAgICBjb25zdCByYXRlRnJvbVRvQmFzZSA9IHRoaXMuX2N1cnJlbmN5UmF0ZXMuZmluZCgoaXRlbSkgPT5cbiAgICAgIGl0ZW1bQ29uc3RhbnRzLkNVUlJFTkNZX1BBSVJdLmZyb20gPT09IGN1cnJlbmN5RnJvbSAmJiBpdGVtW0NvbnN0YW50cy5DVVJSRU5DWV9QQUlSXS50byA9PT1cbiAgICAgIHRoaXMuX2Jhc2VDdXJyZW5jeVxuICAgICk7XG4gICAgY29uc3QgcmF0ZUJhc2VUb1RvID0gdGhpcy5fY3VycmVuY3lSYXRlcy5maW5kKChpdGVtKSA9PlxuICAgICAgaXRlbVtDb25zdGFudHMuQ1VSUkVOQ1lfUEFJUl0uZnJvbSA9PT0gdGhpcy5fYmFzZUN1cnJlbmN5ICYmIGl0ZW1bQ29uc3RhbnRzLkNVUlJFTkNZX1BBSVJdLnRvID09PVxuICAgICAgY3VycmVuY3lUb1xuICAgICk7XG4gICAgaWYgKHJhdGVGcm9tVG9CYXNlICYmIHJhdGVCYXNlVG9Ubykge1xuICAgICAgLy8gaWYgd2UgaGF2ZSBib3RoIGN1cnJlbmNpZXMgd2UganVzdCByZXR1cm4gdGhlIHByb2R1Y3Qgb2YgZWNoIHJhdGVcbiAgICAgIHJldHVybiB0aGlzLmdldEV4Y2hhbmdlUmF0ZShyYXRlRnJvbVRvQmFzZSwgdGltZURhdGVUb0ZpbmQpICogdGhpcy5nZXRFeGNoYW5nZVJhdGUocmF0ZUJhc2VUb1RvLCB0aW1lRGF0ZVRvRmluZCk7XG4gICAgfSBlbHNlIGlmIChyYXRlRnJvbVRvQmFzZSkge1xuICAgICAgLy8gaWYgZWl0aGVyIG9mIHRoZW0gaXMgbm90IGZvdW5kIHdlIHRyeSB0byBmaW5kIHRoZSBpbnZlcnNlXG4gICAgICAvLyB3ZSBnZXQgdGhlIGludmVyc2Ugb2YgcmF0ZUJhc2VUb1RvXG4gICAgICBjb25zdCByYXRlVG9Ub0Jhc2UgPSB0aGlzLl9jdXJyZW5jeVJhdGVzLmZpbmQoKGl0ZW0pID0+XG4gICAgICAgIGl0ZW1bQ29uc3RhbnRzLkNVUlJFTkNZX1BBSVJdLmZyb20gPT09IGN1cnJlbmN5VG8gJiYgaXRlbVtDb25zdGFudHMuQ1VSUkVOQ1lfUEFJUl0udG8gPT09XG4gICAgICAgIHRoaXMuX2Jhc2VDdXJyZW5jeVxuICAgICAgKTtcbiAgICAgIGlmIChyYXRlVG9Ub0Jhc2UpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0RXhjaGFuZ2VSYXRlKHJhdGVGcm9tVG9CYXNlLCB0aW1lRGF0ZVRvRmluZClcbiAgICAgICAgICAqICgxIC8gdGhpcy5nZXRFeGNoYW5nZVJhdGUocmF0ZVRvVG9CYXNlLCB0aW1lRGF0ZVRvRmluZCkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIEVycm9yQ29uc3RhbnRzLlJBVEVfQ1VSUkVOQ1lfTk9UX0ZPVU5EO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAocmF0ZUJhc2VUb1RvKSB7XG4gICAgICBjb25zdCByYXRlQmFzZVRvRnJvbSA9IHRoaXMuX2N1cnJlbmN5UmF0ZXMuZmluZCgoaXRlbSkgPT5cbiAgICAgICAgaXRlbVtDb25zdGFudHMuQ1VSUkVOQ1lfUEFJUl0uZnJvbSA9PT0gdGhpcy5fYmFzZUN1cnJlbmN5ICYmIGl0ZW1bQ29uc3RhbnRzLkNVUlJFTkNZX1BBSVJdLnRvID09PVxuICAgICAgICBjdXJyZW5jeUZyb21cbiAgICAgICk7XG4gICAgICAvLyB3ZSB0cnkgdG8gZ2V0IHRoZSBpbnZlcnNlIG9mIHJhdGVGcm9tVG9CYXNlXG4gICAgICBpZiAocmF0ZUJhc2VUb0Zyb20pIHtcbiAgICAgICAgcmV0dXJuICgxIC8gdGhpcy5nZXRFeGNoYW5nZVJhdGUocmF0ZUJhc2VUb0Zyb20sIHRpbWVEYXRlVG9GaW5kKSlcbiAgICAgICAgICAqIHRoaXMuZ2V0RXhjaGFuZ2VSYXRlKHJhdGVCYXNlVG9UbywgdGltZURhdGVUb0ZpbmQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIEVycm9yQ29uc3RhbnRzLlJBVEVfQ1VSUkVOQ1lfTk9UX0ZPVU5EO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gRXJyb3JDb25zdGFudHMuUkFURV9DVVJSRU5DWV9OT1RfRk9VTkQ7XG4gICAgfVxuICB9XG5cbiAgX2dldEN1cnJlbmNpZXNXaXRoRXhjaGFuZ2VSYXRlcygpIHtcbiAgICBjb25zdCBjcyA9IG5ldyBTZXQoKTtcbiAgICBpZiAodGhpcy5fY3VycmVuY3lSYXRlcykge1xuICAgICAgdGhpcy5fY3VycmVuY3lSYXRlcy5mb3JFYWNoKGV4Y2hhbmdlUmF0ZXMgPT4ge1xuICAgICAgICBjcy5hZGQoZXhjaGFuZ2VSYXRlc1tDb25zdGFudHMuQ1VSUkVOQ1lfUEFJUl0uZnJvbSk7XG4gICAgICAgIGNzLmFkZChleGNoYW5nZVJhdGVzW0NvbnN0YW50cy5DVVJSRU5DWV9QQUlSXS50byk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIGNzO1xuICB9XG59XG4iLCJpbXBvcnQgVGVzdEFQRmllbGQgZnJvbSAnLi9hY3Rpdml0eVByZXZpZXcvY29tcG9uZW50cy9UZXN0QVBGaWVsZCc7XG5pbXBvcnQgVGVzdGluZ1NlY3Rpb24gZnJvbSAnLi9hY3Rpdml0eVByZXZpZXcvY29tcG9uZW50cy9UZXN0aW5nU2VjdGlvbic7XG5pbXBvcnQgQ29uc3RhbnRzIGZyb20gJy4vdXRpbHMvQ29uc3RhbnRzJztcbmltcG9ydCBBY3Rpdml0eUNvbnN0YW50cyBmcm9tICcuL21vZHVsZXMvdXRpbC9BY3Rpdml0eUNvbnN0YW50cyc7XG5pbXBvcnQgRmVhdHVyZU1hbmFnZXJDb25zdGFudHMgZnJvbSAnLi9tb2R1bGVzL3V0aWwvRmVhdHVyZU1hbmFnZXJDb25zdGFudHMnO1xuaW1wb3J0IEVycm9yQ29uc3RhbnRzIGZyb20gJy4vdXRpbHMvY29uc3RhbnRzL0Vycm9yQ29uc3RhbnRzJztcbmltcG9ydCBDdXJyZW5jeVJhdGVzTWFuYWdlciBmcm9tICcuL21vZHVsZXMvdXRpbC9DdXJyZW5jeVJhdGVzTWFuYWdlcic7XG5cblxuZXhwb3J0IHtcbiAgVGVzdEFQRmllbGQsIFRlc3RpbmdTZWN0aW9uLCBDb25zdGFudHMsIEFjdGl2aXR5Q29uc3RhbnRzLCBGZWF0dXJlTWFuYWdlckNvbnN0YW50cywgRXJyb3JDb25zdGFudHMsXG4gIEN1cnJlbmN5UmF0ZXNNYW5hZ2VyXG59O1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIFRlc3RBUEZpZWxkLFxuICBUZXN0aW5nU2VjdGlvbixcbiAgQ29uc3RhbnRzLFxuICBBY3Rpdml0eUNvbnN0YW50cyxcbiAgRmVhdHVyZU1hbmFnZXJDb25zdGFudHMsXG4gIEVycm9yQ29uc3RhbnRzLFxuICBDdXJyZW5jeVJhdGVzTWFuYWdlclxufTtcbiJdLCJuYW1lcyI6WyJUZXN0QVBGaWVsZCIsInRybkxhYmVsIiwidmFsdWUiLCJpbmxpbmUiLCJzZXBhcmF0b3IiLCJuYW1lQ2xhc3MiLCJ2YWx1ZUNsYXNzIiwicHJvcHMiLCJ0cmFuc2xhdGUiLCJhbXBMb2dnZXIiLCJsb2ciLCJ1c2VTZXBhcmF0b3IiLCJkaXNwbGF5Q2xhc3MiLCJmaWVsZENsYXNzIiwic3R5bGVzIiwiYmxvY2siLCJjbGFzc05hbWVzIiwiZmllbGRWYWx1ZUNsYXNzIiwiZGlzcGxheVZhbHVlIiwiQXJyYXkiLCJpc0FycmF5IiwiT2JqZWN0IiwiZm9yRWFjaCIsInB1c2giLCJ2Iiwic29ydCIsImpvaW4iLCJTdHJpbmciLCJ1c2VJbm5lckhUTUwiLCJfX2h0bWwiLCJmaWVsZE5hbWVDbGFzcyIsInRpdGxlIiwiX2dldFZhbHVlIiwiQ29tcG9uZW50IiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwiYW55IiwiYm9vbCIsIm9iamVjdCIsImlzUmVxdWlyZWQiLCJmdW5jIiwiVGVzdGluZ1NlY3Rpb24iLCJCQVNFX1JFU1RfVVJMIiwiQ09OTkVDVElPTl9USU1FT1VUIiwiQ09OTkVDVElPTl9GT1JDRURfVElNRU9VVCIsIlRJTUVPVVRfQ0hFQ0tfSU5URVJWQUwiLCJNQVhfUkVUUllfQVRFTVBUUyIsIkVSUk9SU19UT19SRVRSWSIsIkVSUk9SU19OT19BTVBfU0VSVkVSIiwiQ09OTkVDVElWSVRZX0NIRUNLX0lOVEVSVkFMIiwiV09SS1NQQUNFX1VSTCIsIkxPR0lOX1VSTCIsIkRFU0tUT1BfVVJMIiwiREVTS1RPUF9DVVJSRU5UX1VSTCIsIlNZTkNVUF9SRURJUkVDVF9VUkwiLCJTWU5DVVBfSElTVE9SWV9UQVJHRVQiLCJTWU5DVVBfU1VNTUFSWV9VUkwiLCJBQ1RJVklUWV9QUkVWSUVXX1VSTCIsIkFDVElWSVRZX0VESVRfVVJMIiwiVVBEQVRFX1VSTCIsIlNFVFVQX1VSTCIsIlNFVFRJTkdTX1VSTCIsIkNPTExFQ1RJT05fVVNFUlMiLCJDT0xMRUNUSU9OX1dPUktQQUNFUyIsIkNPTExFQ1RJT05fVEVBTU1FTUJFUlMiLCJDT0xMRUNUSU9OX0NMSUVOVF9TRVRUSU5HUyIsIkNPTExFQ1RJT05fR0xPQkFMX1NFVFRJTkdTIiwiQ09MTEVDVElPTl9BQ1RJVklUSUVTIiwiQ09MTEVDVElPTl9GSUVMRFMiLCJDT0xMRUNUSU9OX1BPU1NJQkxFX1ZBTFVFUyIsIkNPTExFQ1RJT05fU1lOQ1VQX0xPRyIsIkNPTExFQ1RJT05fTEFOR1MiLCJDT0xMRUNUSU9OX1dTX1NFVFRJTkdTIiwiQ09MTEVDVElPTl9DVVJSRU5DWV9SQVRFUyIsIkNPTExFQ1RJT05fRkVBVFVSRV9NQU5BR0VSIiwiQ09MTEVDVElPTl9DT05UQUNUUyIsIkNPTExFQ1RJT05fUkVTT1VSQ0VTIiwiQ09MTEVDVElPTl9SRVBPU0lUT1JZIiwiQ09MTEVDVElPTl9HQVpFVFRFRVIiLCJDT0xMRUNUSU9OX0NBTEVOREFSUyIsIkNPTExFQ1RJT05fQ0hBTkdFU0VUUyIsIkdBWkVUVEVFUl9ESVNUQU5DRV9ESVZJREUiLCJEQl9GSUxFX1BSRUZJWCIsIkRCX0ZJTEVfRVhURU5TSU9OIiwiREJfQ09NTU9OX0RBVEFTVE9SRV9PUFRJT05TIiwiYXV0b2xvYWQiLCJjb3JydXB0QWxlcnRUaHJlc2hvbGQiLCJEQl9BVVRPQ09NUEFDVF9JTlRFUlZBTF9NSUxJU0VDT05EUyIsIkRCX0RFRkFVTFRfUVVFUllfTElNSVQiLCJMQU5HVUFHRV9FTkdMSVNIIiwiRlNfTE9DQUxFU19ESVJFQ1RPUlkiLCJMQU5HVUFHRV9NQVNURVJfVFJBTlNMQVRJT05TX0ZJTEUiLCJMQU5HVUFHRV9UUkFOU0xBVElPTlNfRklMRSIsIkxBTkdVQUdFX05FV19UUkFOU0xBVElPTlNfTVVTVF9TWU5DIiwiQVNBUl9ESVIiLCJBUFBfRElSRUNUT1JZIiwiVEVTVF9ESVJFQ1RPUlkiLCJTVEFUSUNfRElSIiwiSU1BR0VTX0RJUiIsIkRPQ19JQ09OUyIsIkRCX1NUQVRJQ19ESVIiLCJNSUdSQVRJT05TX0RJUiIsIkhBU0hfSVRFUkFUSU9OUyIsIkRJR0VTVF9BTEdPUklUSE1fU0hBMSIsIkRJR0VTVF9BTEdPUklUSE1fU0hBMjU2IiwiQUNUSVZJVFlfRURJVCIsIkFDVElWSVRZX1ZJRVciLCJTWU5DVVBfRk9SQ0VfREFZUyIsIlNZTkNVUF9CRVNUX0JFRk9SRV9EQVlTIiwiU1lOQ1VQX05PX0RBVEUiLCJTWU5DVVBfVFlQRV9UUkFOU0xBVElPTlMiLCJTWU5DVVBfVFlQRV9VU0VSUyIsIlNZTkNVUF9UWVBFX0FTU0VUUyIsIlNZTkNVUF9UWVBFX1dPUktTUEFDRVMiLCJTWU5DVVBfVFlQRV9HUyIsIlNZTkNVUF9UWVBFX0VYQ0hBTkdFX1JBVEVTIiwiU1lOQ1VQX1RZUEVfRkVBVFVSRV9NQU5BR0VSIiwiU1lOQ1VQX1RZUEVfV09SS1NQQUNFX01FTUJFUlMiLCJTWU5DVVBfVFlQRV9BTExfRklFTERTIiwiU1lOQ1VQX1RZUEVfQUNUSVZJVElFU19QVUxMIiwiU1lOQ1VQX1RZUEVfQUNUSVZJVElFU19QVVNIIiwiU1lOQ1VQX1RZUEVfQUNUSVZJVFlfRklFTERTIiwiU1lOQ1VQX1RZUEVfQUNUSVZJVFlfRklFTERTX1NUUlVDVFVSQUxfQ0hBTkdFUyIsIlNZTkNVUF9UWVBFX0NPTlRBQ1RTX1BVTEwiLCJTWU5DVVBfVFlQRV9DT05UQUNUU19QVVNIIiwiU1lOQ1VQX1RZUEVfQUNUSVZJVFlfUE9TU0lCTEVfVkFMVUVTIiwiU1lOQ1VQX1RZUEVfQ09OVEFDVF9GSUVMRFMiLCJTWU5DVVBfVFlQRV9DT05UQUNUX0ZJRUxEU19TVFJVQ1RVUkFMX0NIQU5HRVMiLCJTWU5DVVBfVFlQRV9DT05UQUNUX1BPU1NJQkxFX1ZBTFVFUyIsIlNZTkNVUF9UWVBFX1JFU09VUkNFU19QVUxMIiwiU1lOQ1VQX1RZUEVfUkVTT1VSQ0VTX1BVU0giLCJTWU5DVVBfVFlQRV9SRVNPVVJDRV9GSUVMRFMiLCJTWU5DVVBfVFlQRV9SRVNPVVJDRV9GSUVMRFNfU1RSVUNUVVJBTF9DSEFOR0VTIiwiU1lOQ1VQX1RZUEVfUkVTT1VSQ0VfUE9TU0lCTEVfVkFMVUVTIiwiU1lOQ1VQX1RZUEVfQ09NTU9OX1BPU1NJQkxFX1ZBTFVFUyIsIlNZTkNVUF9UWVBFX1dPUktTUEFDRV9TRVRUSU5HUyIsIlNZTkNVUF9UWVBFX01BUF9USUxFUyIsIlNZTkNVUF9UWVBFX0dBWkVUVEVFUiIsIlNZTkNVUF9UWVBFX0NBTEVOREFSUyIsIlNZTkNVUF9TVEFUVVNfU1VDQ0VTUyIsIlNZTkNVUF9TVEFUVVNfRkFJTCIsIlNZTkNVUF9TVEFUVVNfUEFSVElBTCIsIlNZTkNVUF9TVEFUVVNfQ0FOQ0VMRUQiLCJTWU5DVVBfU1lOQ19SRVFVRVNURURfQVQiLCJTWU5DVVBfU1lOQ19SRVFVRVNURURfQlkiLCJTWU5DVVBfREFURVRJTUVfRklFTEQiLCJTWU5DVVBfRElGRl9MRUZUT1ZFUiIsIlNZTkNVUF9ERVBFTkRFTkNZX0NIRUNLX0lOVEVSVkFMIiwiU1lOQ1VQX0RFVEFJTFNfU1lOQ0VEIiwiU1lOQ1VQX0RFVEFJTFNfVU5TWU5DRUQiLCJTWU5DVVBfUkVTT1VSQ0VfUFVMTF9CQVRDSF9TSVpFIiwiU1lOQ1VQX0FDVElWSVRJRVNfUFVMTF9CQVRDSF9TSVpFIiwiU1lOQ1VQX0NPTlRBQ1RTX1BVTExfQkFUQ0hfU0laRSIsIkFDVElWSVRZX1NUQVRVU19EUkFGVCIsIkFDVElWSVRZX1NUQVRVU19VTlZBTElEQVRFRCIsIkFDVElWSVRZX1NUQVRVU19WQUxJREFURUQiLCJDVVJSRU5DWV9IT1VSIiwiREVGQVVMVF9DVVJSRU5DWSIsIlJBVEVfU0FNRV9DVVJSRU5DWSIsIlJBVEVfQ1VSUkVOQ1lfTk9UX0ZPVU5EIiwiQ1VSUkVOQ1lfUEFJUiIsIlZFUlNJT05fUEFUVEVSTiIsIlZFUlNJT05fUEFUVEVSTl9HUk9VUFNfVE9fRVhUUkFDVCIsIkFNUF9DT1VOVFJZX0xPR08iLCJBU1NFVFNfRElSRUNUT1JZIiwiQkFTRV82NF9QTkdfUFJFRklYIiwiVFJBTlNQQVJFTlRfRkxBRyIsIkhFTFBfUERGX0ZJTEVOQU1FIiwiSEVMUF9ESVIiLCJFTkRTX1dJVEhfUFVOQ1RVQVRJT05fUkVHRVgiLCJNQVBfVElMRVNfRElSIiwiVElMRVNfWklQX0ZJTEUiLCJNQVBfTUFSS0VSX0lNQUdFIiwiTUFQX01BUktFUl9TSEFET1ciLCJNQVBfTUFSS0VSX0NJUkNMRV9SRUQiLCJNQVBfTUFSS0VSX0NJUkNMRV9HUkVFTiIsIlBPTFlHT05fQkFTRV9DT0xPUiIsIkRHX0NPTVBBTllfTkFNRSIsIkRHX0FERFJFU1NfMSIsIkRHX0FERFJFU1NfMiIsIkRHX0NPTlRBQ1RfSU5GTyIsIkxPR19ESVIiLCJMT0dfRklMRV9OQU1FIiwiTE9HX0ZJTEVfRVhURU5TSU9OIiwiTUVTU0FHRV9USU1FT1VUIiwiTUVTU0FHRV9ESVNBUFBFQVJfVElNRU9VVCIsIk1FU1NBR0VfQ0hFQ0tfSU5URVJWQUwiLCJNRVNTQUdFX0FOSU1BVElPTl9EVVJBVElPTiIsIklOVEVSTkFMX0RBVEVfRk9STUFUIiwiTUlOX1NVUFBPUlRFRF9ZRUFSIiwiTUFYX1NVUFBPUlRFRF9ZRUFSIiwiVVBEQVRFU19ESVIiLCJDT05URU5UX0RJU1BPU0lUSU9OX0hFQURFUiIsIlVQREFURV9UTVBfRklMRSIsIk9USEVSX0lEIiwiTlJfU1lOQ19ISVNUT1JZX0VOVFJJRVMiLCJOUl9MT0dfRklMRVMiLCJPTERfU1lOQ19MT0dTX0RVUkFUSU9OX0lTT184NjAxIiwiTlJfT0xEX1NZTkNfTE9HU19UT19LRUVQX01JTklNVU0iLCJNQVNURVJfQlJBTkNIIiwiREVWRUxPUF9CUkFOQ0giLCJSRUxFQVNFX0JSQU5DSF9SRUdFWCIsIlJFTEVBU0VfQlJBTkNIRVMiLCJESVNBQkxFX0NIQU5HRUxPR1MiLCJtb2R1bGUiLCJmcmVlemUiLCJQVUJMSUNfVklFV19DSEFOR0VfUEFTU1dPUkQiLCJQVUJMSUNfVklFV19UUk9VQkxFX1NJR05fSU4iLCJBQ1RJVklUWV9ERUxJVkVSWV9SQVRFIiwiQUNUSVZJVFlfUFJPSkVDVF9JRF9BTkRfUExBTk5JTkciLCJBQ1RJVklUWV9EVVJBVElPTl9PRl9QUk9KRUNUIiwiQUNUSVZJVFlfVEVBTV9MRUFERVIiLCJBQ1RJVklUWV9TQU1FX0FTX1BST1BPU0VEX1NUQVJUX0RBVEUiLCJBQ1RJVklUWV9TQU1FX0FTX1BST1BPU0VEX0FQUFJPVkFMX0RBVEUiLCJBQ1RJVklUWV9JREVOVElGSUNBVElPTiIsIkFDVElWSVRZX0xBU1RfVVBEQVRFRF9CWSIsIkFDVElWSVRZX0xBU1RfVVBEQVRFRF9PTiIsIkFDVElWSVRZX0ZVTkRJTkciLCJBRl9GVU5ESU5HX0ZVTkRJTkdHUk9VUF9GVU5ESU5HSVRFTSIsIkFDVElWSVRZX1NFQ1RPUlMiLCJBQ1RJVklUWV9QUklNQVJZX1NFQ1RPUlMiLCJBQ1RJVklUWV9TRUNPTkRBUllfU0VDVE9SUyIsIkFDVElWSVRZX1NUUlVDVFVSRVMiLCJBQ1RJVklUWV9TVFJVQ1RVUkVTX0FERF9TVFJVQ1RVUkUiLCJBQ1RJVklUWV9PUkdBTklaQVRJT05TIiwiQUNUSVZJVFlfT1JHQU5JWkFUSU9OU19ET05PUl9PUkdBTklaQVRJT04iLCJBQ1RJVklUWV9PUkdBTklaQVRJT05TX0JFTkVGSUNJQVJZX0FHRU5DWSIsIkFDVElWSVRZX09SR0FOSVpBVElPTlNfQ09OVFJBQ1RJTkdfQUdFTkNZIiwiQUNUSVZJVFlfT1JHQU5JWkFUSU9OU19FWEVDVVRJTkdfQUdFTkNZIiwiQUNUSVZJVFlfT1JHQU5JWkFUSU9OU19JTVBMRU1FTlRJTkdfQUdFTkNZIiwiQUNUSVZJVFlfT1JHQU5JWkFUSU9OU19SRUdJT05BTF9HUk9VUCIsIkFDVElWSVRZX09SR0FOSVpBVElPTlNfUkVMQVRFRF9HT1ZFUk5NRU5UX09SR0FOSVpBVElPTiIsIkFDVElWSVRZX09SR0FOSVpBVElPTlNfU0VDVE9SX0dST1VQIiwiQUREX0ZVTkRJTkdfQVVUTyIsIkFDVElWSVRZX09SR0FOSVpBVElPTlNfQkVORUZJQ0lBUllfQUdFTkNZX0FERF9GVU5ESU5HX0FVVE8iLCJBQ1RJVklUWV9PUkdBTklaQVRJT05TX0NPTlRSQUNUSU5HX0FHRU5DWV9BRERfRlVORElOR19BVVRPIiwiQUNUSVZJVFlfT1JHQU5JWkFUSU9OU19ET05PUl9PUkdBTklaQVRJT05fQUREX0ZVTkRJTkdfQVVUTyIsIkFDVElWSVRZX09SR0FOSVpBVElPTlNfRVhFQ1VUSU5HX0FHRU5DWV9BRERfRlVORElOR19BVVRPIiwiQUNUSVZJVFlfT1JHQU5JWkFUSU9OU19JTVBMRU1FTlRJTkdfQUdFTkNZX0FERF9GVU5ESU5HX0FVVE8iLCJBQ1RJVklUWV9PUkdBTklaQVRJT05TX1JFR0lPTkFMX0dST1VQX0FERF9GVU5ESU5HX0FVVE8iLCJBQ1RJVklUWV9PUkdBTklaQVRJT05TX1JFU1BPTlNJQkxFX09SR0FOSVpBVElPTl9BRERfRlVORElOR19BVVRPIiwiQUNUSVZJVFlfT1JHQU5JWkFUSU9OU19TRUNUT1JfR1JPVVBfQUREX0ZVTkRJTkdfQVVUTyIsIkFDVElWSVRZX0ZVTkRJTkdfU0VBUkNIIiwiQUNUSVZJVFlfRlVORElOR19TRUFSQ0hfT1JHQU5JWkFUSU9OIiwiQUNUSVZJVFlfRlVORElOR19TRUxFQ1RfT1JHX1RZUEUiLCJBQ1RJVklUWV9QUk9HUkFNIiwiQUNUSVZJVFlfUExBTk5JTkciLCJBQ1RJVklUWV9DT05UQUNUIiwiQUNUSVZJVFlfRE9DVU1FTlRTX0FERF9ET0NVTUVOVCIsIkFDVElWSVRZX0RPQ1VNRU5UU19BRERfV0VCTElOSyIsIkFDVElWSVRZX0lTU1VFU19BRERfSVNTVUUiLCJBQ1RJVklUWV9JU1NVRVNfREVMRVRFX0lTU1VFIiwiQUNUSVZJVFlfSVNTVUVTX0FERF9NRUFTVVJFIiwiQUNUSVZJVFlfSVNTVUVTX0RFTEVURV9NRUFTVVJFIiwiQUNUSVZJVFlfSVNTVUVTX0FERF9BQ1RPUiIsIkFDVElWSVRZX0lTU1VFU19ERUxFVEVfQUNUT1IiLCJBQ1RJVklUWV9ESVNCVVJTRU1FTlRTX0ZVTkRJTkdfRkxPV1NfT1JHUk9MRV9BRERfSU1QTEVNRU5USU5HX0FHRU5DWSIsIkFDVElWSVRZX0RJU0JVUlNFTUVOVFNfRlVORElOR19GTE9XU19PUkdST0xFX0FERF9DT05UUkFDVElOR19BR0VOQ1kiLCJBQ1RJVklUWV9ESVNCVVJTRU1FTlRTX0ZVTkRJTkdfRkxPV1NfT1JHUk9MRV9BRERfQkVORUZJQ0lBUllfQUdFTkNZIiwiQUNUSVZJVFlfRElTQlVSU0VNRU5UU19GVU5ESU5HX0ZMT1dTX09SR1JPTEVfQUREX0RPTk9SX09SR0FOSVpBVElPTiIsIkFDVElWSVRZX0RJU0JVUlNFTUVOVFNfRlVORElOR19GTE9XU19PUkdST0xFX0FERF9FWEVDVVRJTkdfQUdFTkNZIiwiQUNUSVZJVFlfRElTQlVSU0VNRU5UU19GVU5ESU5HX0ZMT1dTX09SR1JPTEVfQUREX1JFR0lPTkFMX0dST1VQIiwiQUNUSVZJVFlfRElTQlVSU0VNRU5UU19GVU5ESU5HX0ZMT1dTX09SR1JPTEVfQUREX1JFU1BPTlNJQkxFX09SR0FOSVpBVElPTiIsIkFDVElWSVRZX0RJU0JVUlNFTUVOVFNfRlVORElOR19GTE9XU19PUkdST0xFX0FERF9TRUNUT1JfR1JPVVAiLCJBQ1RJVklUWV9DT01NSVRNRU5UU19GVU5ESU5HX0ZMT1dTX09SR1JPTEVfQUREX0lNUExFTUVOVElOR19BR0VOQ1kiLCJBQ1RJVklUWV9DT01NSVRNRU5UU19GVU5ESU5HX0ZMT1dTX09SR1JPTEVfQUREX0NPTlRSQUNUSU5HX0FHRU5DWSIsIkFDVElWSVRZX0NPTU1JVE1FTlRTX0ZVTkRJTkdfRkxPV1NfT1JHUk9MRV9BRERfQkVORUZJQ0lBUllfQUdFTkNZIiwiQUNUSVZJVFlfQ09NTUlUTUVOVFNfRlVORElOR19GTE9XU19PUkdST0xFX0FERF9ET05PUl9PUkdBTklaQVRJT04iLCJBQ1RJVklUWV9DT01NSVRNRU5UU19GVU5ESU5HX0ZMT1dTX09SR1JPTEVfQUREX0VYRUNVVElOR19BR0VOQ1kiLCJBQ1RJVklUWV9DT01NSVRNRU5UU19GVU5ESU5HX0ZMT1dTX09SR1JPTEVfQUREX1JFR0lPTkFMX0dST1VQIiwiQUNUSVZJVFlfQ09NTUlUTUVOVFNfRlVORElOR19GTE9XU19PUkdST0xFX0FERF9SRVNQT05TSUJMRV9PUkdBTklaQVRJT04iLCJBQ1RJVklUWV9DT01NSVRNRU5UU19GVU5ESU5HX0ZMT1dTX09SR1JPTEVfQUREX1NFQ1RPUl9HUk9VUCIsIkFDVElWSVRZX0VYUEVORElUVVJFU19GVU5ESU5HX0ZMT1dTX09SR1JPTEVfQUREX0lNUExFTUVOVElOR19BR0VOQ1kiLCJBQ1RJVklUWV9FWFBFTkRJVFVSRVNfRlVORElOR19GTE9XU19PUkdST0xFX0FERF9DT05UUkFDVElOR19BR0VOQ1kiLCJBQ1RJVklUWV9FWFBFTkRJVFVSRVNfRlVORElOR19GTE9XU19PUkdST0xFX0FERF9CRU5FRklDSUFSWV9BR0VOQ1kiLCJBQ1RJVklUWV9FWFBFTkRJVFVSRVNfRlVORElOR19GTE9XU19PUkdST0xFX0FERF9ET05PUl9PUkdBTklaQVRJT04iLCJBQ1RJVklUWV9FWFBFTkRJVFVSRVNfRlVORElOR19GTE9XU19PUkdST0xFX0FERF9FWEVDVVRJTkdfQUdFTkNZIiwiQUNUSVZJVFlfRVhQRU5ESVRVUkVTX0ZVTkRJTkdfRkxPV1NfT1JHUk9MRV9BRERfUkVHSU9OQUxfR1JPVVAiLCJBQ1RJVklUWV9FWFBFTkRJVFVSRVNfRlVORElOR19GTE9XU19PUkdST0xFX0FERF9SRVNQT05TSUJMRV9PUkdBTklaQVRJT04iLCJBQ1RJVklUWV9FWFBFTkRJVFVSRVNfRlVORElOR19GTE9XU19PUkdST0xFX0FERF9TRUNUT1JfR1JPVVAiLCJNVEVGX1BST0pFQ1RJT05TIiwiTVRFRl9QUk9KRUNUSU9OU19BTU9VTlQiLCJNVEVGX1BST0pFQ1RJT05TX0NVUlJFTkNZIiwiTVRFRl9QUk9KRUNUSU9OU19QUk9KRUNUSU9OIiwiTVRFRl9QUk9KRUNUSU9OU19EQVRFIiwiQUNUSVZJVFlfQlVER0VUIiwiQUNUSVZJVFlfU1RBVFVTIiwiU1RBVFVTX1JFQVNPTiIsIkZJTkFOQ0lBTF9JTlNUUlVNRU5UIiwiVFlQRV9PRl9JTVBMRU1FTlRBVElPTiIsIk9CSkVDVElWRSIsIlJFU1VMVFMiLCJCVURHRVRfQ09ERV9QUk9KRUNUX0lEIiwiQUNUVUFMX0FQUFJPVkFMX0RBVEUiLCJGVU5ESU5HUyIsIkZVTkRJTkdfRE9OT1JfT1JHX0lEIiwiSVNfRFJBRlQiLCJPUkdfUk9MRV9PUkdfSUQiLCJBRERJVElPTkFMX0lORk8iLCJQUklNQVJZX1NFQ1RPUlMiLCJTRUNPTkRBUllfU0VDVE9SUyIsIlRFUlRJQVJZX1NFQ1RPUlMiLCJUQUdfU0VDVE9SUyIsIlNFQ1RPUiIsIlNFQ1RPUl9QRVJDRU5UQUdFIiwiRklOQU5DSU5HX0lOU1RSVU1FTlQiLCJNT0RBTElUSUVTIiwiTElORV9NSU5JU1RSWV9SQU5LIiwiR09WRVJOTUVOVF9BR1JFRU1FTlRfTlVNQkVSIiwiRlVORElOR19TVEFUVVMiLCJMT0NBVElPTlMiLCJMT0NBVElPTiIsIkxPQ0FUSU9OX1BFUkNFTlRBR0UiLCJJTVBMRU1FTlRBVElPTl9MT0NBVElPTiIsIklNUExFTUVOVEFUSU9OX0xFVkVMIiwiQVBQUk9WQUxfU1RBVFVTIiwiQVBQUk9WRURfQlkiLCJBUFBST1ZBTF9EQVRFIiwiVFlQRV9PRl9BU1NJU1RBTkNFIiwiRVhQRU5ESVRVUkVfQ0xBU1MiLCJGVU5ESU5HX0RFVEFJTFMiLCJNT0RFX09GX1BBWU1FTlQiLCJGVU5ESU5HX0NMQVNTSUZJQ0FUSU9OX0RBVEUiLCJBR1JFRU1FTlQiLCJET05PUl9PQkpFQ1RJVkUiLCJDT05ESVRJT05TIiwiQUdSRUVNRU5UX0NPREUiLCJBR1JFRU1FTlRfVElUTEUiLCJQUk9KRUNUX0NBVEVHT1JZIiwiUFJPSkVDVF9JTVBMRU1FTlRJTkdfVU5JVCIsIk9SR0FOSVpBVElPTiIsIlBFUkNFTlRBR0UiLCJBTVBfT1JHQU5JWkFUSU9OX1JPTEVfSUQiLCJST0xFIiwiRVhFQ1VUSU5HX0FHRU5DWSIsIkNPTlRSQUNUSU5HX0FHRU5DWSIsIkJFTkVGSUNJQVJZX0FHRU5DWSIsIklNUExFTUVOVElOR19BR0VOQ1kiLCJSRVNQT05TSUJMRV9PUkdBTklaQVRJT04iLCJET05PUl9PUkdBTklaQVRJT04iLCJSRUdJT05BTF9HUk9VUCIsIlNFQ1RPUl9HUk9VUCIsIkJVREdFVFMiLCJCVURHRVRfQ09ERSIsIkJVREdFVF9PUkdBTklaQVRJT05fQ09ERSIsIkFSQ0hJVkVEIiwiVFJBTlNBQ1RJT05fREFURSIsIlRSQU5TQUNUSU9OX1RZUEUiLCJDT01NSVRNRU5UUyIsIkRJU0JVUlNFTUVOVFMiLCJFWFBFTkRJVFVSRVMiLCJFU1RJTUFURURfRElTQlVSU0VNRU5UUyIsIlRSQU5TQUNUSU9OX0FNT1VOVCIsIkFESlVTVE1FTlRfVFlQRSIsIkFDVFVBTF9TVEFSVF9EQVRFIiwiUFJPUE9TRURfU1RBUlRfREFURSIsIkFDVFVBTF9DT01QTEVUSU9OX0RBVEUiLCJDT05UUkFDVElOR19EQVRFIiwiRElTQlVSU0VNRU5UX0RBVEUiLCJQUk9QT1NFRF9BUFBST1ZBTF9EQVRFIiwiT1JJR0lOQUxfQ09NUExFVElPTl9EQVRFIiwiUFJPUE9TRURfQ09NUExFVElPTl9EQVRFIiwiRklOQUxfREFURV9GT1JfRElTQlVSU0VNRU5UUyIsIkZJTkFMX0RBVEVfRk9SX0NPTlRSQUNUSU5HIiwiRUZGRUNUSVZFX0ZVTkRJTkdfREFURSIsIkZVTkRJTkdfQ0xPU0lOR19EQVRFIiwiUkFUSUZJQ0FUSU9OX0RBVEUiLCJNQVRVUklUWSIsIkxBU1RfQVVESVRfREFURSIsIlNJR05BVFVSRV9EQVRFIiwiSFVNQU5JVEFSSUFOX0FJRCIsIkRJU0FTVEVSX1JFU1BPTlNFIiwiUFJPR1JBTSIsIlBST0dSQU1fUEVSQ0VOVEFHRSIsIlBST0dSQU1fU0VUVElOR1MiLCJOQVRJT05BTF9QTEFOX09CSkVDVElWRSIsIlBSSU1BUllfUFJPR1JBTVMiLCJTRUNPTkRBUllfUFJPR1JBTVMiLCJURVJUSUFSX1BST0dSQU1TIiwiR09WRVJOTUVOVF9BUFBST1ZBTF9QUk9DRURVUkVTIiwiSk9JTlRfQ1JJVEVSSUEiLCJURUFNIiwiUkVKRUNURURfSUQiLCJJTlRFUk5BTF9JRCIsIkFNUF9JRCIsIlBST0pFQ1RfVElUTEUiLCJERVNDUklQVElPTiIsIk1PRElGSUVEX0JZIiwiTU9ESUZJRURfT04iLCJDUkVBVEVEX0JZIiwiQ1JFQVRFRF9PTiIsIkxBU1RfSU1QT1JURURfQlkiLCJDTElFTlRfQ0hBTkdFX0lEIiwiQ0xJRU5UX0NSRUFURURfT04iLCJDTElFTlRfVVBEQVRFRF9PTiIsIklTX1BVU0hFRCIsIkFDVElWSVRZX0dST1VQIiwiVkVSU0lPTiIsIlBST0pFQ1RfQ09NTUVOVFMiLCJMRVNTT05TX0xFQVJORUQiLCJQUk9KRUNUX0lNUEFDVCIsIkFDVElWSVRZX1NVTU1BUlkiLCJDT05ESVRJT05BTElUSUVTIiwiUFJPSkVDVF9NQU5BR0VNRU5UIiwiQV9DX0NIQVBURVIiLCJDUklTX05VTUJFUiIsIklBVElfSURFTlRJRklFUiIsIkFDVElWSVRZX0lOVEVSTkFMX0lEUyIsIkhJRVJBUkNISUNBTF9WQUxVRSIsIkhJRVJBUkNISUNBTF9WQUxVRV9QQVJUUyIsIkhJRVJBUkNISUNBTF9WQUxVRV9ERVBUSCIsIlBQQ19BTU9VTlQiLCJSUENfQU1PVU5UIiwiUFBDX0FOTlVBTF9CVURHRVRTIiwiQU1PVU5UIiwiQ1VSUkVOQ1kiLCJGVU5ESU5HX0RBVEUiLCJDT01QT05FTlRTIiwiVE9UQUxfTlVNQkVSX09GX0ZVTkRJTkdfU09VUkNFUyIsIlNPVVJDRV9ST0xFIiwiQU1QX0ZVTkRJTkdfSUQiLCJJU1NVRVMiLCJJU1NVRV9EQVRFIiwiSVNTVUVfTkFNRSIsIk1FQVNVUkVTIiwiTUVBU1VSRV9OQU1FIiwiTUVBU1VSRV9EQVRFIiwiQUNUT1JTIiwiQUNUT1JfTkFNRSIsIlNUUlVDVFVSRVMiLCJTVFJVQ1RVUkVTX1RJVExFIiwiU1RSVUNUVVJFU19ERVNDUklQVElPTiIsIlNUUlVDVFVSRVNfTEFUSVRVREUiLCJTVFJVQ1RVUkVTX0xPTkdJVFVERSIsIlNUUlVDVFVSRVNfQ09MT1IiLCJTVFJVQ1RVUkVTX0xBVCIsIlNUUlVDVFVSRVNfTE5HIiwiU1RSVUNUVVJFU19TSEFQRSIsIlNUUlVDVFVSRVNfUE9JTlQiLCJTVFJVQ1RVUkVTX1BPTFlHT04iLCJTVFJVQ1RVUkVTX1BPTFlMSU5FIiwiU1RSVUNUVVJFU19DT09SRElOQVRFUyIsIkNPTVBPTkVOVF9UWVBFIiwiQ09NUE9ORU5UX1RJVExFIiwiQ09NUE9ORU5UX0ZVTkRJTkciLCJDT01QT05FTlRfREVTQ1JJUFRJT04iLCJDT01QT05FTlRfT1JHQU5JWkFUSU9OIiwiRlVORElOR19BTU9VTlRfSUQiLCJFWFRSQV9JTkZPIiwiVkFMVUUiLCJBQ1JPTllNIiwiVFlQRV9PRl9DT09QRVJBVElPTiIsIkFOTlVBTF9QUk9KRUNUX0JVREdFVF9JRCIsIlRZUEUiLCJZRUFSIiwiR1JPVVBfVkVSU0lPTkVEX0ZVTkRJTkciLCJBQ1RJVkVfTElTVCIsIkFDVElWRSIsIkRFTEVHQVRFRF9DT09QRVJBVElPTiIsIkRFTEVHQVRFRF9QQVJUTkVSIiwiRklOQU5DSU5HX0lEIiwiRElTQlVSU0VNRU5UX09SREVSX0lEIiwiUExFREdFIiwiQ0FQSVRBTF9TUEVORElOR19QRVJDRU5UQUdFIiwiUkVQT1JUSU5HX0RBVEUiLCJSRUNJUElFTlRfUk9MRSIsIlJFQ0lQSUVOVF9PUkdBTklaQVRJT04iLCJURU1QT1JBTF9JRCIsIk1JTklTVFJZX0NPREUiLCJQUk9KRUNUX0NPREUiLCJGWSIsIklORElSRUNUX09OX0JVREdFVCIsIklNUExFTUVOVEFUSU9OX0xFVkVMU19FWFRSQV9JTkZPIiwiSU1QTEVNRU5UQVRJT05fTE9DQVRJT05fRVhUUkFfSU5GTyIsIkRPTk9SX0NPTlRBQ1QiLCJQUk9KRUNUX0NPT1JESU5BVE9SX0NPTlRBQ1QiLCJTRUNUT1JfTUlOSVNUUllfQ09OVEFDVCIsIk1PRkVEX0NPTlRBQ1QiLCJJTVBMRU1FTlRJTkdfRVhFQ1VUSU5HX0FHRU5DWV9DT05UQUNUIiwiQ09OVEFDVCIsIk9SR0FOSVpBVElPTl9HUk9VUCIsIkZJWEVEX0VYQ0hBTkdFX1JBVEUiLCJQUklNQVJZX0NPTlRBQ1QiLCJBQ1RJVklUWV9ET0NVTUVOVFMiLCJET0NVTUVOVF9UWVBFIiwiSVNPMiIsIlBST0pFQ1RJT04iLCJQSVBFTElORSIsIlBST0pFQ1RJT05fREFURSIsIlNBTUVfQVNfUFJPUE9TRURfU1RBUlRfREFURV9MQUJFTCIsIlNBTUVfQVNfUFJPUE9TRURfQVBQUk9WQUxfREFURV9MQUJFTCIsIkRFUEVOREVOQ1lfSU1QTEVNRU5UQVRJT05fTEVWRUxfUFJFU0VOVCIsIkRFUEVOREVOQ1lfSU1QTEVNRU5UQVRJT05fTEVWRUxfVkFMSUQiLCJERVBFTkRFTkNZX0lNUExFTUVOVEFUSU9OX0xPQ0FUSU9OX1BSRVNFTlQiLCJERVBFTkRFTkNZX0lNUExFTUVOVEFUSU9OX0xPQ0FUSU9OX1ZBTElEIiwiREVQRU5ERU5DWV9QUk9KRUNUX0NPREVfT05fQlVER0VUIiwiREVQRU5ERU5DWV9PTl9CVURHRVQiLCJERVBFTkRFTkNZX1RSQU5TQUNUSU9OX1BSRVNFTlQiLCJERVBFTkRFTkNZX0NPTVBPTkVOVF9GVU5ESU5HX09SR19WQUxJRCIsIkFQX1NFQ1RJT05fSURTIiwia2V5IiwiaGFzaCIsImZtUGF0aCIsIkZNQyIsInNlY3Rpb25QYXRoIiwiQUNUSVZJVFlfSU5URVJOQUxfSURTX0NPTFMiLCJBQ1RJVklUWV9QTEFOTklOR19DT0xTIiwiQUNUSVZJVFlfTE9DQVRJT05fQ09MUyIsIkFDVElWSVRZX0ZVTkRJTkdfQ09MUyIsIkFDVElWSVRZX0NPTlRBQ1RfQ09MUyIsIkFQX0ZVTkRJTkdTX1RBQkxFX0NPTFMiLCJNVUxUSV9TRUxFQ1RfTUlOX1NJWkUiLCJNVUxUSV9TRUxFQ1RfTUFYX1NJWkUiLCJ0b0ZpZWxkTmFtZXMiLCJsaXN0T2ZOYW1lcyIsIm1hcCIsInRvRmllbGROYW1lIiwibmFtZSIsInRvTG93ZXJDYXNlIiwicmVwbGFjZSIsInRvT3JpZ2luYWxMYWJlbCIsImZpZWxkTmFtZSIsImNhcGl0YWxpemUiLCJ0ZXh0IiwiY2hhciIsInRvVXBwZXJDYXNlIiwiTk9USUZJQ0FUSU9OX09SSUdJTl9BUElfU0VDVVJJVFkiLCJOT1RJRklDQVRJT05fT1JJR0lOX0FQSV9ORVRXT1JLIiwiTk9USUZJQ0FUSU9OX09SSUdJTl9BUElfU1lOQ1VQIiwiTk9USUZJQ0FUSU9OX09SSUdJTl9BUElfR0VORVJBTCIsIk5PVElGSUNBVElPTl9PUklHSU5fREFUQUJBU0UiLCJOT1RJRklDQVRJT05fT1JJR0lOX0FVVEhFTlRJQ0FUSU9OIiwiTk9USUZJQ0FUSU9OX09SSUdJTl9XT1JLU1BBQ0VfRklMVEVSIiwiTk9USUZJQ0FUSU9OX09SSUdJTl9XT1JLU1BBQ0UiLCJOT1RJRklDQVRJT05fT1JJR0lOX1NZTkNVUF9QUk9DRVNTIiwiTk9USUZJQ0FUSU9OX09SSUdJTl9DVVJSRU5DWV9NQU5BR0VSIiwiTk9USUZJQ0FUSU9OX09SSUdJTl9EQVRFUyIsIk5PVElGSUNBVElPTl9PUklHSU5fQUNUSVZJVFkiLCJOT1RJRklDQVRJT05fT1JJR0lOX1JFU09VUkNFIiwiTk9USUZJQ0FUSU9OX09SSUdJTl9JMThORVhUIiwiTk9USUZJQ0FUSU9OX09SSUdJTl9VUERBVEVfQ0hFQ0siLCJOT1RJRklDQVRJT05fT1JJR0lOX1VQREFURSIsIk5PVElGSUNBVElPTl9PUklHSU5fU0VUVVAiLCJOT1RJRklDQVRJT05fT1JJR0lOX1NFVFRJTkdTIiwiTk9USUZJQ0FUSU9OX1NFVkVSSVRZX1dBUk5JTkciLCJOT1RJRklDQVRJT05fU0VWRVJJVFlfSU5GTyIsIk5PVElGSUNBVElPTl9TRVZFUklUWV9FUlJPUiIsIk5PVElGSUNBVElPTl9FUlJPUl9MRVZFTF9NSU5PUiIsIk5PVElGSUNBVElPTl9FUlJPUl9MRVZFTF9CTE9DS0VSIiwiTk9USUZJQ0FUSU9OX09SSUdJTl9XUk9OR19NRVRIT0RfVVNBR0UiLCJFUlJPUl9DT0RFX05PX0NPTk5FQ1RJVklUWSIsIkVSUk9SX0NPREVfQUNDRVNTX0RFTklFRCIsIk1TR19JTlZBTElEX1VSTCIsIk1TR19USU1FT1VUIiwiTVNHX1VOS05PV05fTkVUV09SS19FUlJPUiIsIk1TR19BTVBfVU5SRUFDSEFCTEUiLCJHRU5FUkFMX0NPTk5FQ1RJT05fRVJST1JTIiwiQ3VycmVuY3lSYXRlc01hbmFnZXIiLCJjdXJyZW5jeVJhdGVzIiwiYmFzZUN1cnJlbmN5IiwiZGF0ZVV0aWxzIiwiZXJyb3JOb3RpZmljYXRpb25IZWxwZXIiLCJfY3VycmVuY3lSYXRlcyIsIl9iYXNlQ3VycmVuY3kiLCJfY3Vycm5jaWVzV2l0aEV4Y2hhbmdlUmF0ZXMiLCJfZ2V0Q3VycmVuY2llc1dpdGhFeGNoYW5nZVJhdGVzIiwiX3RyYW5zbGF0ZSIsIl9kYXRlVXRpbHMiLCJfZXJyb3JOb3RpZmljYXRpb25IZWxwZXIiLCJjdXJyZW5jeUZyb20iLCJjdXJyZW5jeVRvIiwiZGF0ZVRvRmluZCIsImZpeGVkRXhjaGFuZ2VSYXRlIiwiQ29uc3RhbnRzIiwiY29udmVydEN1cnJlbmN5IiwidGltZURhdGVUb0ZpbmQiLCJEYXRlIiwiZ2V0VGltZSIsImN1cnJlbmNpZXNUb1NlYXJjaERpcmVjdCIsImZpbmQiLCJpdGVtIiwiZnJvbSIsInRvIiwiZ2V0RXhjaGFuZ2VSYXRlIiwiY3VycmVuY2llc1RvU2VhcmNoSW52ZXJzZSIsImNvbnZlcnRWaWFCYXNlQ3VycmVuY3kiLCJfZ2V0Q3VycmVuY3lFcnJvciIsImZ1bmRpbmdEZXRhaWxzIiwidG90YWwiLCJjb252ZXJ0VHJhbnNhY3Rpb25BbW91bnRUb0N1cnJlbmN5IiwiZmQiLCJmdW5kaW5nRGV0YWlsIiwiYW1vdW50IiwiZGF0ZSIsImN1cnJlbmN5UmF0ZSIsImZvcm1hdERhdGVGb3JBUEkiLCJBY3Rpdml0eUNvbnN0YW50cyIsInRyYW5zYWN0aW9uRGF0ZSIsInRyYW5zYWN0aW9uQW1vdW50IiwiY29udmVydEFtb3VudFRvQ3VycmVuY3kiLCJjdXJyZW5jaWVzVG9TZWFyY2giLCJsb3dlckVuZCIsImhpZ2hlckVuZCIsInJhdGVzIiwibGVuZ3RoIiwibWlkZGxlIiwiTWF0aCIsImZsb29yIiwiZGlmZmVyZW5jZSIsImFicyIsImRpZmZlcmVuY2UxIiwicmF0ZSIsImVycm9yTWVzYWdlIiwibm90aWZFcnJvckN1cnJlbmN5IiwiY3JlYXRlTm90aWZpY2F0aW9uIiwiRXJyb3JDb25zdGFudHMiLCJyYXRlRnJvbVRvQmFzZSIsInJhdGVCYXNlVG9UbyIsInJhdGVUb1RvQmFzZSIsInJhdGVCYXNlVG9Gcm9tIiwiY3MiLCJTZXQiLCJhZGQiLCJleGNoYW5nZVJhdGVzIl0sIm1hcHBpbmdzIjoiOzs7QUFBQSxTQUFTLFdBQVcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFO0VBQzdCLEtBQUssR0FBRyxLQUFLLEtBQUssQ0FBQyxHQUFHLEdBQUcsR0FBRyxFQUFFLENBQUM7RUFDL0IsSUFBSSxRQUFRLEdBQUcsR0FBRyxDQUFDLFFBQVEsQ0FBQzs7RUFFNUIsSUFBSSxDQUFDLEdBQUcsSUFBSSxPQUFPLFFBQVEsS0FBSyxXQUFXLEVBQUUsRUFBRSxPQUFPLEVBQUU7O0VBRXhELElBQUksSUFBSSxHQUFHLFFBQVEsQ0FBQyxJQUFJLElBQUksUUFBUSxDQUFDLG9CQUFvQixDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0VBQ3JFLElBQUksS0FBSyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7RUFDNUMsS0FBSyxDQUFDLElBQUksR0FBRyxVQUFVLENBQUM7O0VBRXhCLElBQUksUUFBUSxLQUFLLEtBQUssRUFBRTtJQUN0QixJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7TUFDbkIsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLEVB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
