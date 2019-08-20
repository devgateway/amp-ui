import React, { Component, PropTypes as PropTypes$1 } from 'react';
import PropTypes from 'prop-types';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';

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

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

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

var toConsumableArray = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  } else {
    return Array.from(arr);
  }
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

var UIUtils = function () {
  function UIUtils() {
    classCallCheck(this, UIUtils);
  }

  createClass(UIUtils, null, [{
    key: 'stringToId',
    value: function stringToId(string) {
      string = string || '';
      var hash = 5381;
      for (var i = string.length - 1; i >= 0; i--) {
        /* eslint-disable no-bitwise */
        hash = hash * 33 ^ string.charCodeAt(i);
      }
      return hash >>> 0;
      /* eslint-enable no-bitwise */
    }

    /**
     * Generates a unique id for each call, over the same string
     * @param string
     * @return {string}
     */

  }, {
    key: 'stringToUniqueId',
    value: function stringToUniqueId(string) {
      return this.stringToId(string) + '-' + Date.now() + '-' + Math.random().toString().substring(2);
    }
  }, {
    key: 'numberRandom',
    value: function numberRandom() {
      return Math.trunc(Math.random() * 1000000);
    }
  }, {
    key: 'capitalize',
    value: function capitalize(text) {
      return text.replace(/(?:^|\s)\S/g, function (char) {
        return char.toUpperCase();
      });
    }
  }, {
    key: 'cloneDeep',
    value: function cloneDeep(obj) {
      return JSON.parse(JSON.stringify(obj));
    }
  }]);
  return UIUtils;
}();

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
  return UIUtils.capitalize(fieldName.replace('_', ' '));
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
  toOriginalLabel: toOriginalLabel
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

/**
 * @author Nadejda Mandrescu
 */

var DONOR_ORGANIZATION$1 = 'Donor Organization';
var RESPONSIBLE_ORGANIZATION$1 = 'Responsible Organization';
var EXECUTING_AGENCY$1 = 'Executing Agency';
var IMPLEMENTING_AGENCY$1 = 'Implementing Agency';
var BENEFICIARY_AGENCY$1 = 'Beneficiary Agency';
var CONTRACTING_AGENCY$1 = 'Contracting Agency';
var DONOR_AGENCY = 'Donor';
var REGIONAL_GROUP$1 = 'Regional Group';
var SECTOR_GROUP$1 = 'Sector Group';

var ORG_ROLE_NAMES = [DONOR_ORGANIZATION$1, RESPONSIBLE_ORGANIZATION$1, EXECUTING_AGENCY$1, IMPLEMENTING_AGENCY$1, BENEFICIARY_AGENCY$1, CONTRACTING_AGENCY$1, REGIONAL_GROUP$1, SECTOR_GROUP$1];

var ACTUAL = 'Actual';
var PLANNED = 'Planned';
var COMMITMENTS$1 = 'Commitments';
var DISBURSEMENTS$1 = 'Disbursements';
var EXPENDITURES$1 = 'Expenditures';
var ACTUAL_COMMITMENTS = ACTUAL + ' ' + ActivityConstants.COMMITMENTS;
var ACTUAL_DISBURSEMENTS = ACTUAL + ' ' + ActivityConstants.DISBURSEMENTS;
var ACTUAL_EXPENDITURES = ACTUAL + ' ' + ActivityConstants.EXPENDITURES;
var PLANNED_COMMITMENTS = PLANNED + ' ' + ActivityConstants.COMMITMENTS;
var PLANNED_DISBURSEMENTS = PLANNED + ' ' + ActivityConstants.DISBURSEMENTS;
var PLANNED_EXPENDITURES = PLANNED + ' ' + ActivityConstants.EXPENDITURES;
var UNALLOCATED_DISBURSEMENTS = 'Unallocated Disbursements';
var DELIVERY_RATE = 'Delivery rate';
var MTEF_PROJECTIONS$2 = 'MTEF Projections';

var ADJUSTMENT_TYPES = [ACTUAL, PLANNED];
var ADJUSTMENT_TYPES_AP_ORDER = [PLANNED, ACTUAL];

var NEW_ACTIVITY_ID = '0';

var PROPOSED_PROJECT_COST = 'ppc';
var REVISED_PROJECT_COST = 'rpc';

var ACRONYM_DONOR_ORGANIZATION = 'DN';
var ACRONYM_EXECUTING_AGENCY = 'EA';
var ACRONYM_IMPLEMENTING_AGENCY = 'IA';
var ACRONYM_BENEFICIARY_AGENCY = 'BA';
var ACRONYM_RESPONSIBLE_ORGANIZATION = 'RO';

/** Approval status untranslated values **/
var APPROVAL_STATUS_CREATED = 'created';
var APPROVAL_STATUS_APPROVED = 'approved';
var APPROVAL_STATUS_EDITED = 'edited';
var APPROVAL_STATUS_STARTED_APPROVED = 'startedapproved';
var APPROVAL_STATUS_STARTED = 'started';
var APPROVAL_STATUS_NOT_APPROVED = 'not_approved';
var APPROVAL_STATUS_REJECTED = 'rejected';

var ON_BUDGET = 'On Budget';

var INTERNATIONAL = 'International';
var COUNTRY = 'Country';

var RELATED_DOCUMENTS = 'Related Documents';

var TMP_ENTITY_VALIDATOR = 'entity-validator';

/** Required status */
var ALWAYS_REQUIRED = 'Y';

var ValueConstants = Object.freeze({
  DONOR_ORGANIZATION: DONOR_ORGANIZATION$1,
  RESPONSIBLE_ORGANIZATION: RESPONSIBLE_ORGANIZATION$1,
  EXECUTING_AGENCY: EXECUTING_AGENCY$1,
  IMPLEMENTING_AGENCY: IMPLEMENTING_AGENCY$1,
  BENEFICIARY_AGENCY: BENEFICIARY_AGENCY$1,
  CONTRACTING_AGENCY: CONTRACTING_AGENCY$1,
  DONOR_AGENCY: DONOR_AGENCY,
  REGIONAL_GROUP: REGIONAL_GROUP$1,
  SECTOR_GROUP: SECTOR_GROUP$1,
  ORG_ROLE_NAMES: ORG_ROLE_NAMES,
  ACTUAL: ACTUAL,
  PLANNED: PLANNED,
  COMMITMENTS: COMMITMENTS$1,
  DISBURSEMENTS: DISBURSEMENTS$1,
  EXPENDITURES: EXPENDITURES$1,
  ACTUAL_COMMITMENTS: ACTUAL_COMMITMENTS,
  ACTUAL_DISBURSEMENTS: ACTUAL_DISBURSEMENTS,
  ACTUAL_EXPENDITURES: ACTUAL_EXPENDITURES,
  PLANNED_COMMITMENTS: PLANNED_COMMITMENTS,
  PLANNED_DISBURSEMENTS: PLANNED_DISBURSEMENTS,
  PLANNED_EXPENDITURES: PLANNED_EXPENDITURES,
  UNALLOCATED_DISBURSEMENTS: UNALLOCATED_DISBURSEMENTS,
  DELIVERY_RATE: DELIVERY_RATE,
  MTEF_PROJECTIONS: MTEF_PROJECTIONS$2,
  ADJUSTMENT_TYPES: ADJUSTMENT_TYPES,
  ADJUSTMENT_TYPES_AP_ORDER: ADJUSTMENT_TYPES_AP_ORDER,
  NEW_ACTIVITY_ID: NEW_ACTIVITY_ID,
  PROPOSED_PROJECT_COST: PROPOSED_PROJECT_COST,
  REVISED_PROJECT_COST: REVISED_PROJECT_COST,
  ACRONYM_DONOR_ORGANIZATION: ACRONYM_DONOR_ORGANIZATION,
  ACRONYM_EXECUTING_AGENCY: ACRONYM_EXECUTING_AGENCY,
  ACRONYM_IMPLEMENTING_AGENCY: ACRONYM_IMPLEMENTING_AGENCY,
  ACRONYM_BENEFICIARY_AGENCY: ACRONYM_BENEFICIARY_AGENCY,
  ACRONYM_RESPONSIBLE_ORGANIZATION: ACRONYM_RESPONSIBLE_ORGANIZATION,
  APPROVAL_STATUS_CREATED: APPROVAL_STATUS_CREATED,
  APPROVAL_STATUS_APPROVED: APPROVAL_STATUS_APPROVED,
  APPROVAL_STATUS_EDITED: APPROVAL_STATUS_EDITED,
  APPROVAL_STATUS_STARTED_APPROVED: APPROVAL_STATUS_STARTED_APPROVED,
  APPROVAL_STATUS_STARTED: APPROVAL_STATUS_STARTED,
  APPROVAL_STATUS_NOT_APPROVED: APPROVAL_STATUS_NOT_APPROVED,
  APPROVAL_STATUS_REJECTED: APPROVAL_STATUS_REJECTED,
  ON_BUDGET: ON_BUDGET,
  INTERNATIONAL: INTERNATIONAL,
  COUNTRY: COUNTRY,
  RELATED_DOCUMENTS: RELATED_DOCUMENTS,
  TMP_ENTITY_VALIDATOR: TMP_ENTITY_VALIDATOR,
  ALWAYS_REQUIRED: ALWAYS_REQUIRED
});

/**
 * This is a set of field paths that are used for frequent needs
 * @author Nadejda Mandrescu
 */

var FUNDING_ACTIVE_LIST = 'fundings~active_list';
var FUNDING_TYPE_OF_ASSISTANCE = ActivityConstants.FUNDINGS + '~' + ActivityConstants.TYPE_OF_ASSISTANCE;
var FUNDING_DETAILS_PATH = ActivityConstants.FUNDINGS + '~' + ActivityConstants.FUNDING_DETAILS;
/**
 * Legacy funding currency path used for data migration
 * @deprecated since 1.4
 */
var FUNDING_CURRENCY_PATH = FUNDING_DETAILS_PATH + '~' + ActivityConstants.CURRENCY;
var MTEF_CURRENCY_PATH = ActivityConstants.FUNDINGS + '~' + ActivityConstants.MTEF_PROJECTIONS + '~' + ActivityConstants.CURRENCY;
var PPC_CURRENCY_PATH = ActivityConstants.PPC_AMOUNT + '~' + ActivityConstants.CURRENCY;
var RPC_CURRENCY_PATH = ActivityConstants.RPC_AMOUNT + '~' + ActivityConstants.CURRENCY;
var COMPONENT_CURRENCY_PATH = ActivityConstants.COMPONENTS + '~' + ActivityConstants.COMPONENT_FUNDING + '~' + ActivityConstants.CURRENCY;
var DISBURSEMENTS_PATH = ActivityConstants.FUNDINGS + '~' + ActivityConstants.DISBURSEMENTS;
var ACTIVITY_INTERNAL_IDS_INTERNAL_ID_PATH = 'activity_internal_ids~internal_id';
var ACTIVITY_INTERNAL_IDS_ORGANIZATION_PATH = 'activity_internal_ids~organization';
var LOCATION_PATH = 'locations~location';
var NATIONAL_PLAN_OBJECTIVE_PATH = 'national_plan_objective~program';
var PRIMARY_PROGRAM_PATH = 'primary_programs~program';
var SECONDARY_PROGRAM_PATH = 'secondary_programs~program';
var PRIMARY_SECTOR_PATH = 'primary_sectors~sector';
var SECONDARY_SECTOR_PATH = 'secondary_sectors~sector';
var TERTIARY_SECTOR_PATH = 'tertiary_sectors~sector';
var DONOR_ORGANIZATIONS_PATH = 'donor_organization~organization';
var RESPONSIBLE_ORGANIZATION_BUDGETS_PATH = ActivityConstants.RESPONSIBLE_ORGANIZATION + '~' + ActivityConstants.BUDGETS;

var RELATED_ORGS_PATHS = ValueConstants.ORG_ROLE_NAMES.map(function (orgRole) {
  return ActivityConstants.toFieldName(orgRole);
});
var RELATED_ORGS_ORGANIZATION_PATHS = ValueConstants.ORG_ROLE_NAMES.map(function (orgRole) {
  return ActivityConstants.toFieldName(orgRole) + '~' + ActivityConstants.ORGANIZATION;
});

var RICH_TEXT_FIELDS = new Set([ActivityConstants.STATUS_REASON, ActivityConstants.OBJECTIVE, ActivityConstants.DESCRIPTION, ActivityConstants.PROJECT_COMMENTS, ActivityConstants.LESSONS_LEARNED, ActivityConstants.PROJECT_IMPACT, ActivityConstants.ACTIVITY_SUMMARY, ActivityConstants.CONDITIONALITIES, ActivityConstants.PROJECT_MANAGEMENT, ActivityConstants.RESULTS]);

var PATHS_WITH_TREE_STRUCTURE = new Set([NATIONAL_PLAN_OBJECTIVE_PATH, PRIMARY_PROGRAM_PATH, SECONDARY_PROGRAM_PATH, PRIMARY_SECTOR_PATH, SECONDARY_SECTOR_PATH, TERTIARY_SECTOR_PATH]);

var PATHS_WITH_HIERARCHICAL_VALUES = new Set([NATIONAL_PLAN_OBJECTIVE_PATH, PRIMARY_PROGRAM_PATH, SECONDARY_PROGRAM_PATH, PRIMARY_SECTOR_PATH, SECONDARY_SECTOR_PATH, TERTIARY_SECTOR_PATH, LOCATION_PATH]);

var ACTIVITY_CONTACT_PATHS = [ActivityConstants.DONOR_CONTACT, ActivityConstants.PROJECT_COORDINATOR_CONTACT, ActivityConstants.SECTOR_MINISTRY_CONTACT, ActivityConstants.MOFED_CONTACT, ActivityConstants.IMPLEMENTING_EXECUTING_AGENCY_CONTACT];

var TRANSACTION_TYPES = [ActivityConstants.COMMITMENTS, ActivityConstants.DISBURSEMENTS, ActivityConstants.EXPENDITURES];
var TRANSACTION_TYPES_ORDERED = TRANSACTION_TYPES;
var FUNDING_TRANSACTION_TYPES = [].concat(TRANSACTION_TYPES, [ActivityConstants.ESTIMATED_DISBURSEMENTS]);
var ADJUSTMENT_TYPE_PATHS = FUNDING_TRANSACTION_TYPES.map(function (tt) {
  return ActivityConstants.FUNDINGS + '~' + tt + '~' + ActivityConstants.ADJUSTMENT_TYPE;
});
var FUNDING_CURRENCY_PATHS = TRANSACTION_TYPES.map(function (tt) {
  return ActivityConstants.FUNDINGS + '~' + tt + '~' + ActivityConstants.CURRENCY;
});

var PATHS_FOR_ACTIVITY_CURRENCY = [FUNDING_CURRENCY_PATH, MTEF_CURRENCY_PATH, COMPONENT_CURRENCY_PATH, PPC_CURRENCY_PATH, RPC_CURRENCY_PATH].concat(toConsumableArray(FUNDING_CURRENCY_PATHS));

var PATHS_FOR_CURRENCY = new Set([ActivityConstants.CURRENCY].concat(toConsumableArray(PATHS_FOR_ACTIVITY_CURRENCY)));

var DO_NOT_HYDRATE_FIELDS_LIST = [ActivityConstants.APPROVAL_STATUS];

/* Fields paths alternative values location */
var ALTERNATE_VALUE_PATH = {};
ALTERNATE_VALUE_PATH[ActivityConstants.CREATED_ON] = ActivityConstants.CLIENT_CREATED_ON;
ALTERNATE_VALUE_PATH[ActivityConstants.MODIFIED_ON] = ActivityConstants.CLIENT_UPDATED_ON;

/* FM paths for some activity fields that are always present in fields def, but may be hidden from display through FM */
var ACTIVITY_FIELDS_FM_PATH = {};
ACTIVITY_FIELDS_FM_PATH[ActivityConstants.MODIFIED_BY] = FeatureManagerConstants.ACTIVITY_LAST_UPDATED_BY;
ACTIVITY_FIELDS_FM_PATH[ActivityConstants.MODIFIED_ON] = FeatureManagerConstants.ACTIVITY_LAST_UPDATED_ON;

/* Possible Options fields path prefixes */
var PREFIX_ACTIVITY = null;
var PREFIX_CONTACT = 'contact';
var PREFIX_RESOURCE = 'resource';
var PREFIX_COMMON = 'common';
var PREFIX_LIST = [PREFIX_ACTIVITY, PREFIX_CONTACT, PREFIX_RESOURCE, PREFIX_COMMON];

var FIELD_PATH = 'field-path';
var FIELD_OPTIONS = 'possible-options';
var FIELD_OPTION_USABLE = 'option-usable';
var LIST_MAX_SIZE = 'size-limit';
var REGEX_PATTERN = 'regex-pattern';
var FIELD_NAME = 'field_name';
var FIELD_LABEL = 'field_label';
var FIELD_REQUIRED = 'required';
var FIELD_UNIQUE_CONSTRAINT = 'unique_constraint';
var FIELD_TYPE = 'field_type';
var FIELD_LENGTH = 'field_length';
var FIELD_PERCENTAGE = 'percentage';
var FIELD_PERCENTAGE_CONSTRAINT = 'percentage_constraint';
var FIELD_ITEM_TYPE = 'item-type';
var FIELD_IMPORTABLE = 'importable';
var FIELD_ID_ONLY = 'id_only';
var FIELD_MULTIPLE_VALUES_ALLOWED = 'multiple_values';
var FIELD_TREE_COLLECTION = 'tree_collection';
var FIELD_CHILDREN = 'children';
var FIELD_DEPENDENCIES = 'dependencies';

var FIELD_TYPE_LIST = 'list';
var FIELD_TYPE_OBJECT = 'object';
var FIELD_TYPE_STRING = 'string';
var FIELD_TYPE_LONG = 'long';
var FIELD_TYPE_FLOAT = 'float';
var FIELD_TYPE_BOOLEAN = 'boolean';
var FIELD_TYPE_DATE = 'date';
var FIELD_TYPE_TIMESTAMP = 'timestamp';

var FieldPathConstants = Object.freeze({
  FUNDING_ACTIVE_LIST: FUNDING_ACTIVE_LIST,
  FUNDING_DETAILS_PATH: FUNDING_DETAILS_PATH,
  FUNDING_CURRENCY_PATH: FUNDING_CURRENCY_PATH,
  MTEF_CURRENCY_PATH: MTEF_CURRENCY_PATH,
  PPC_CURRENCY_PATH: PPC_CURRENCY_PATH,
  RPC_CURRENCY_PATH: RPC_CURRENCY_PATH,
  COMPONENT_CURRENCY_PATH: COMPONENT_CURRENCY_PATH,
  DISBURSEMENTS_PATH: DISBURSEMENTS_PATH,
  ACTIVITY_INTERNAL_IDS_INTERNAL_ID_PATH: ACTIVITY_INTERNAL_IDS_INTERNAL_ID_PATH,
  ACTIVITY_INTERNAL_IDS_ORGANIZATION_PATH: ACTIVITY_INTERNAL_IDS_ORGANIZATION_PATH,
  LOCATION_PATH: LOCATION_PATH,
  NATIONAL_PLAN_OBJECTIVE_PATH: NATIONAL_PLAN_OBJECTIVE_PATH,
  PRIMARY_PROGRAM_PATH: PRIMARY_PROGRAM_PATH,
  SECONDARY_PROGRAM_PATH: SECONDARY_PROGRAM_PATH,
  PRIMARY_SECTOR_PATH: PRIMARY_SECTOR_PATH,
  SECONDARY_SECTOR_PATH: SECONDARY_SECTOR_PATH,
  TERTIARY_SECTOR_PATH: TERTIARY_SECTOR_PATH,
  DONOR_ORGANIZATIONS_PATH: DONOR_ORGANIZATIONS_PATH,
  RESPONSIBLE_ORGANIZATION_BUDGETS_PATH: RESPONSIBLE_ORGANIZATION_BUDGETS_PATH,
  RELATED_ORGS_PATHS: RELATED_ORGS_PATHS,
  RELATED_ORGS_ORGANIZATION_PATHS: RELATED_ORGS_ORGANIZATION_PATHS,
  RICH_TEXT_FIELDS: RICH_TEXT_FIELDS,
  PATHS_WITH_TREE_STRUCTURE: PATHS_WITH_TREE_STRUCTURE,
  PATHS_WITH_HIERARCHICAL_VALUES: PATHS_WITH_HIERARCHICAL_VALUES,
  ACTIVITY_CONTACT_PATHS: ACTIVITY_CONTACT_PATHS,
  TRANSACTION_TYPES: TRANSACTION_TYPES,
  TRANSACTION_TYPES_ORDERED: TRANSACTION_TYPES_ORDERED,
  FUNDING_TRANSACTION_TYPES: FUNDING_TRANSACTION_TYPES,
  ADJUSTMENT_TYPE_PATHS: ADJUSTMENT_TYPE_PATHS,
  FUNDING_CURRENCY_PATHS: FUNDING_CURRENCY_PATHS,
  PATHS_FOR_ACTIVITY_CURRENCY: PATHS_FOR_ACTIVITY_CURRENCY,
  PATHS_FOR_CURRENCY: PATHS_FOR_CURRENCY,
  DO_NOT_HYDRATE_FIELDS_LIST: DO_NOT_HYDRATE_FIELDS_LIST,
  ALTERNATE_VALUE_PATH: ALTERNATE_VALUE_PATH,
  ACTIVITY_FIELDS_FM_PATH: ACTIVITY_FIELDS_FM_PATH,
  PREFIX_ACTIVITY: PREFIX_ACTIVITY,
  PREFIX_CONTACT: PREFIX_CONTACT,
  PREFIX_RESOURCE: PREFIX_RESOURCE,
  PREFIX_COMMON: PREFIX_COMMON,
  PREFIX_LIST: PREFIX_LIST,
  FIELD_PATH: FIELD_PATH,
  FIELD_OPTIONS: FIELD_OPTIONS,
  FIELD_OPTION_USABLE: FIELD_OPTION_USABLE,
  LIST_MAX_SIZE: LIST_MAX_SIZE,
  REGEX_PATTERN: REGEX_PATTERN,
  FIELD_NAME: FIELD_NAME,
  FIELD_LABEL: FIELD_LABEL,
  FIELD_REQUIRED: FIELD_REQUIRED,
  FIELD_UNIQUE_CONSTRAINT: FIELD_UNIQUE_CONSTRAINT,
  FIELD_TYPE: FIELD_TYPE,
  FIELD_LENGTH: FIELD_LENGTH,
  FIELD_PERCENTAGE: FIELD_PERCENTAGE,
  FIELD_PERCENTAGE_CONSTRAINT: FIELD_PERCENTAGE_CONSTRAINT,
  FIELD_ITEM_TYPE: FIELD_ITEM_TYPE,
  FIELD_IMPORTABLE: FIELD_IMPORTABLE,
  FIELD_ID_ONLY: FIELD_ID_ONLY,
  FIELD_MULTIPLE_VALUES_ALLOWED: FIELD_MULTIPLE_VALUES_ALLOWED,
  FIELD_TREE_COLLECTION: FIELD_TREE_COLLECTION,
  FIELD_CHILDREN: FIELD_CHILDREN,
  FIELD_DEPENDENCIES: FIELD_DEPENDENCIES,
  FIELD_TYPE_LIST: FIELD_TYPE_LIST,
  FIELD_TYPE_OBJECT: FIELD_TYPE_OBJECT,
  FIELD_TYPE_STRING: FIELD_TYPE_STRING,
  FIELD_TYPE_LONG: FIELD_TYPE_LONG,
  FIELD_TYPE_FLOAT: FIELD_TYPE_FLOAT,
  FIELD_TYPE_BOOLEAN: FIELD_TYPE_BOOLEAN,
  FIELD_TYPE_DATE: FIELD_TYPE_DATE,
  FIELD_TYPE_TIMESTAMP: FIELD_TYPE_TIMESTAMP
});

/* eslint-disable class-methods-use-this */

var logger = null;

/**
 * This is a helper class for checking fields status, getting field options translations and the like.
 *
 * @author Nadejda Mandrescu
 */

var FieldsManager = function () {
  createClass(FieldsManager, null, [{
    key: 'clone',

    /**
     * Shallow clone of another newFieldsManager
     * @param fieldsManager
     * @return {FieldsManager}
     */
    value: function clone(fieldsManager, LoggerManager) {
      var newFieldsManager = new FieldsManager([], [], null, LoggerManager);
      Object.assign(newFieldsManager, fieldsManager);
      return newFieldsManager;
    }
  }]);

  function FieldsManager(fieldsDef, possibleValuesCollection, currentLanguage, LoggerManager) {
    var _this = this;

    classCallCheck(this, FieldsManager);

    // TODO remove cache
    logger = new LoggerManager('Fields manager');
    logger.debug('constructor');
    this._fieldsDef = fieldsDef;
    this._possibleValuesMap = {};
    possibleValuesCollection.forEach(function (pv) {
      _this._possibleValuesMap[pv.id] = pv[FIELD_OPTIONS];
    });
    this._fieldPathsEnabledStatusMap = {};
    this._lang = currentLanguage || Constants.LANGUAGE_ENGLISH;
    this._defaultLang = Constants.LANGUAGE_ENGLISH;
    this.cleanup(fieldsDef);
  }

  createClass(FieldsManager, [{
    key: 'cleanup',
    value: function cleanup(fieldsDef) {
      var _this2 = this;

      // TODO decide either to keep cleanup (here or anywhere else) or check if we need to standardize API
      fieldsDef.forEach(function (fd) {
        if (fd.children) {
          _this2.cleanup(fd.children);
        }
        if (fd.field_label) {
          Object.keys(fd.field_label).forEach(function (lang) {
            fd.field_label[lang.toLowerCase()] = fd.field_label[lang];
          });
        }
      });
    }
  }, {
    key: 'getPossibleValuesOptions',
    value: function getPossibleValuesOptions(fieldPath) {
      return Object.values(this._possibleValuesMap[fieldPath]);
    }
  }, {
    key: 'isFieldPathByPartsEnabled',
    value: function isFieldPathByPartsEnabled() {
      for (var _len = arguments.length, pathParts = Array(_len), _key = 0; _key < _len; _key++) {
        pathParts[_key] = arguments[_key];
      }

      return this.isFieldPathEnabled(pathParts.join('~'));
    }

    /**
     * Checks if the specified field path is enabled in AMP FM
     * @param fieldPath
     * @return {boolean}
     */

  }, {
    key: 'isFieldPathEnabled',
    value: function isFieldPathEnabled(fieldPath) {
      if (this._fieldPathsEnabledStatusMap[fieldPath] === undefined) {
        this._buildFieldPathStatus(fieldPath);
      }
      return this._fieldPathsEnabledStatusMap[fieldPath];
    }
  }, {
    key: '_buildFieldPathStatus',
    value: function _buildFieldPathStatus(fieldPath) {
      var pathParts = fieldPath.split('~');
      var currentTree = this._fieldsDef;
      var isDisabled = pathParts.some(function (part) {
        currentTree = currentTree.find(function (field) {
          return field.field_name === part;
        });
        if (currentTree && (currentTree[FIELD_TYPE] === FIELD_TYPE_LIST && currentTree[FIELD_ITEM_TYPE] === FIELD_TYPE_OBJECT || currentTree[FIELD_TYPE] === FIELD_TYPE_OBJECT)) {
          currentTree = currentTree.children;
        }
        return !currentTree;
      });
      this._fieldPathsEnabledStatusMap[fieldPath] = !isDisabled;
    }

    /**
     * Find the translation for the original value for the given field path, if found, otherwise returns null
     * @param fieldPath
     * @param origValue
     * @return {string|null}
     */

  }, {
    key: 'getValueTranslation',
    value: function getValueTranslation(fieldPath, origValue) {
      // fallback to original untranslated value
      var trnValue = origValue;
      var options = this._possibleValuesMap[fieldPath];
      if (options) {
        var option = Object.values(options).find(function (opt) {
          return opt.value === origValue;
        });
        if (option !== undefined) {
          var translations = option['translated-value'];
          if (translations) {
            trnValue = translations[this._lang] || translations[this._defaultLang] || trnValue;
          }
        }
      }
      return trnValue;
    }
  }, {
    key: 'getFieldLabelTranslation',
    value: function getFieldLabelTranslation(fieldPath) {
      var trnLabel = null;
      var fieldsDef = this.getFieldDef(fieldPath);
      if (fieldsDef !== undefined) {
        trnLabel = fieldsDef.field_label[this._lang] || fieldsDef.field_label[this._defaultLang] || null;
      }
      return trnLabel;
    }
  }, {
    key: 'getFieldDef',
    value: function getFieldDef(fieldPath) {
      var fieldsDef = this._fieldsDef;
      if (fieldPath) {
        fieldPath.split('~').some(function (part) {
          if (!(fieldsDef instanceof Array)) {
            fieldsDef = fieldsDef.children;
          }
          fieldsDef = fieldsDef.find(function (fd) {
            return fd.field_name === part;
          });
          return fieldsDef === undefined;
        });
      } else {
        fieldsDef = { children: fieldsDef };
      }
      return fieldsDef;
    }
  }, {
    key: 'getFieldPathsByDependencies',
    value: function getFieldPathsByDependencies(dependencies) {
      var fieldPaths = [];
      this._getFieldPathsByDependencies(dependencies, this._fieldsDef, '', fieldPaths);
      return fieldPaths;
    }
  }, {
    key: '_getFieldPathsByDependencies',
    value: function _getFieldPathsByDependencies(dependencies, fieldsDef, currentPath, fieldPaths) {
      var _this3 = this;

      if (!(fieldsDef instanceof Array)) {
        fieldsDef = fieldsDef.children;
      }
      fieldsDef.forEach(function (fd) {
        var hasDependency = fd.dependencies && fd.dependencies.some(function (dep) {
          return dependencies.includes(dep);
        });
        if (fd.children || hasDependency) {
          var fieldPath = '' + currentPath + fd.field_name;
          if (hasDependency) {
            fieldPaths.push(fieldPath);
          }
          if (fd.children) {
            _this3._getFieldPathsByDependencies(dependencies, fd.children, fieldPath + '~', fieldPaths);
          }
        }
      });
    }
  }, {
    key: 'getValue',
    value: function getValue(object, fieldPath, getOptionTranslation) {
      return FieldsManager.getValue(object, fieldPath, getOptionTranslation);
    }
  }, {
    key: 'currentLanguageCode',
    set: function set$$1(lang) {
      this._lang = lang;
    }
  }, {
    key: 'defaultLanguageCode',
    set: function set$$1(lang) {
      this._defaultLang = lang;
    }
  }, {
    key: 'fieldsDef',
    get: function get$$1() {
      return this._fieldsDef;
    }
  }, {
    key: 'possibleValuesMap',
    get: function get$$1() {
      return this._possibleValuesMap;
    }
  }], [{
    key: 'getValue',
    value: function getValue(object, fieldPath, getOptionTranslation) {
      var _this4 = this;

      var parts = fieldPath ? fieldPath.split('~') : [];
      var value = object;
      parts.some(function (part) {
        if (value instanceof Array) {
          var newList = [];
          value.forEach(function (current) {
            var newElement = current[part];
            if (newElement !== undefined && newElement !== null) {
              newList.push(newElement);
            }
          });
          value = newList;
        } else {
          value = value[part];
        }
        return value === undefined || value === null || value.length === 0;
      });
      if (value !== undefined && value !== null && value.length !== 0) {
        var values = [].concat(value);
        values = values.map(function (val) {
          if (val.value === undefined) {
            return val;
          }
          return getOptionTranslation(val, _this4._lang, _this4._defaultLang);
        });
        value = value instanceof Array ? values : values[0];
      }
      return value;
    }
  }]);
  return FieldsManager;
}();

var CLIENT_CHANGE_ID$1 = 'amp-offline-contact-change-id';
var CLIENT_CHANGE_ID_PREFIX = 'amp-offline-contact-id';
var NAME = 'name';
var LAST_NAME = 'last_name';
var TITLE = 'title';
var ORGANIZATION_NAME = 'organization_name';
var FUNCTION = 'function';
var OFFICE_ADDRESS = 'office_address';
var CREATOR = 'creator';
var ORGANISATION_CONTACTS = 'organisation_contacts';
var ORGANISATION = 'organisation';
var EMAIL = 'email';
var VALUE$1 = 'value';
var PHONE = 'phone';
var EXTENSION_VALUE = 'extension_value';
var TYPE$1 = 'type';
var FAX = 'fax';

var TMP_FORM_ID = 'form-id';
var TMP_UNIQUE_ID = 'uniqueId';
var TMP_HYDRATED = 'hydrated';
var TMP_ERRORS = 'errors';
var TMP_CONTACT_LOADED = 'isContactLoaded';
var TMP_CONTACT_LOADING = 'isContactLoading';
var TMP_ENTITY_VALIDATOR$1 = ValueConstants.TMP_ENTITY_VALIDATOR;
var TMP_FIELDS = [TMP_FORM_ID, TMP_UNIQUE_ID, TMP_HYDRATED, TMP_ERRORS, TMP_ENTITY_VALIDATOR$1, TMP_CONTACT_LOADED, TMP_CONTACT_LOADING];

var ContactConstants = Object.freeze({
  CLIENT_CHANGE_ID: CLIENT_CHANGE_ID$1,
  CLIENT_CHANGE_ID_PREFIX: CLIENT_CHANGE_ID_PREFIX,
  NAME: NAME,
  LAST_NAME: LAST_NAME,
  TITLE: TITLE,
  ORGANIZATION_NAME: ORGANIZATION_NAME,
  FUNCTION: FUNCTION,
  OFFICE_ADDRESS: OFFICE_ADDRESS,
  CREATOR: CREATOR,
  ORGANISATION_CONTACTS: ORGANISATION_CONTACTS,
  ORGANISATION: ORGANISATION,
  EMAIL: EMAIL,
  VALUE: VALUE$1,
  PHONE: PHONE,
  EXTENSION_VALUE: EXTENSION_VALUE,
  TYPE: TYPE$1,
  FAX: FAX,
  TMP_FORM_ID: TMP_FORM_ID,
  TMP_UNIQUE_ID: TMP_UNIQUE_ID,
  TMP_HYDRATED: TMP_HYDRATED,
  TMP_ERRORS: TMP_ERRORS,
  TMP_CONTACT_LOADED: TMP_CONTACT_LOADED,
  TMP_CONTACT_LOADING: TMP_CONTACT_LOADING,
  TMP_ENTITY_VALIDATOR: TMP_ENTITY_VALIDATOR$1,
  TMP_FIELDS: TMP_FIELDS
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

/**
 * Possible Values manager that allows to fill in additional information and transformations
 * @author Nadejda Mandrescu
 */

var PossibleValuesManager = function () {
  function PossibleValuesManager() {
    classCallCheck(this, PossibleValuesManager);
  }

  createClass(PossibleValuesManager, null, [{
    key: 'setLangState',
    value: function setLangState(langState) {
      PossibleValuesManager._langState = langState;
    }
  }, {
    key: 'setLogger',
    value: function setLogger(Logger) {
      PossibleValuesManager._logger = new Logger('Possible values manager');
    }
  }, {
    key: 'buildFormattedHierarchicalValues',
    value: function buildFormattedHierarchicalValues(options) {
      // TODO optimize
      var hOptions = {};
      Object.values(options).forEach(function (option) {
        hOptions[option.id] = PossibleValuesManager.buildHierarchicalData(options, option.id);
      });
      return hOptions;
    }
  }, {
    key: 'buildHierarchicalData',
    value: function buildHierarchicalData(options, selectedId) {
      var option = Object.assign({}, options[selectedId]);
      var valueParts = PossibleValuesManager.getHierarchicalValue(options, selectedId);
      option[ActivityConstants.HIERARCHICAL_VALUE] = PossibleValuesManager.formatValueParts(valueParts);
      option[ActivityConstants.HIERARCHICAL_VALUE_DEPTH] = valueParts && valueParts instanceof Array ? valueParts.length : 0;
      return option;
    }
  }, {
    key: 'getHierarchicalValue',
    value: function getHierarchicalValue(options, selectedId) {
      var nameParts = [];
      var current = options[selectedId];
      while (current) {
        nameParts.push(PossibleValuesManager.getOptionTranslation(current));
        current = options[current.parentId];
      }
      return nameParts;
    }
  }, {
    key: 'formatValueParts',
    value: function formatValueParts(valueParts) {
      return valueParts && valueParts instanceof Array ? '[' + valueParts.reverse().join('][') + ']' : valueParts;
    }

    /**
     * Fills hierarchical depth of each option
     * @param options
     */

  }, {
    key: 'fillHierarchicalDepth',
    value: function fillHierarchicalDepth(options) {
      Object.values(options).forEach(function (option) {
        PossibleValuesManager._fillHierarchicalDepth(options, option);
      });
      return options;
    }
  }, {
    key: '_fillHierarchicalDepth',
    value: function _fillHierarchicalDepth(options, option) {
      if (!option) {
        PossibleValuesManager._logger.error('option is unspecified: ' + option);
        return 0;
      }
      var depth = option[ActivityConstants.HIERARCHICAL_VALUE_DEPTH];
      if (depth === undefined) {
        // So far it is based on the current locations extra info approach
        if (option.parentId) {
          var parent = options[option.parentId];
          depth = 1 + PossibleValuesManager._fillHierarchicalDepth(options, parent);
        } else {
          depth = 0;
        }
        option[ActivityConstants.HIERARCHICAL_VALUE_DEPTH] = depth;
      }
      return depth;
    }
  }, {
    key: 'findOption',
    value: function findOption(options, id) {
      return Object.values(options).find(function (o) {
        return o.id === id;
      });
    }
  }, {
    key: 'findOptionByValue',
    value: function findOptionByValue(options, value) {
      return Object.values(options).find(function (o) {
        return o.value === value;
      });
    }
  }, {
    key: 'getOptionTranslation',
    value: function getOptionTranslation(option) {
      var resVal = option.value;
      var translations = option['translated-value'];
      if (translations !== undefined) {
        var langState = PossibleValuesManager._langState;
        resVal = translations[langState.lang] || translations[langState.defaultLang] || resVal;
      }
      return resVal;
    }
  }, {
    key: 'setVisibility',
    value: function setVisibility(options, fieldPath, currencyRatesManager, filters) {
      var isORFilter = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
      var selectedId = arguments[5];

      var isLocations = LOCATION_PATH === fieldPath;
      var isCurrency = PATHS_FOR_CURRENCY.has(fieldPath);
      options = _extends({}, options);
      Object.values(options).forEach(function (option) {
        option.visible = !isORFilter;
        if (isLocations) {
          option.displayHierarchicalValue = true;
        } else if (isCurrency) {
          option[FIELD_OPTION_USABLE] = PossibleValuesManager.isCurrencyOptionUsable(option, currencyRatesManager);
          if (!option[FIELD_OPTION_USABLE]) {
            option.visible = option.id === selectedId;
          }
        }
      });
      if (filters) {
        filters.forEach(function (filter) {
          var filterBy = filter.value;
          Object.values(options).forEach(function (option) {
            var optionDataToCheck = FieldsManager.getValue(option, filter.path);
            if ((isORFilter || option.visible) && optionDataToCheck && (optionDataToCheck instanceof Array && optionDataToCheck.includes(filterBy) || optionDataToCheck === filterBy)) {
              option.visible = true;
            } else if (isORFilter) ; else {
              option.visible = false;
            }
          });
        });
      }
      return options;
    }
  }, {
    key: 'isCurrencyOptionUsable',
    value: function isCurrencyOptionUsable(option, currencyRatesManager) {
      var hasExchangeRates = currencyRatesManager.currenciesWithExchangeRates.has(option.value);
      var isActive = option.extra_info && option.extra_info.active;
      return isActive && hasExchangeRates;
    }
  }, {
    key: 'getTreeSortedOptionsList',
    value: function getTreeSortedOptionsList(optionsObj, reverseSortOptions) {
      var added = new Set();
      var optionsList = [];
      var idsStack = Object.values(optionsObj).filter(function (o) {
        return !o.parentId;
      }).sort(reverseSortOptions).map(function (o) {
        return o.id;
      });
      while (idsStack.length) {
        var id = idsStack.pop();
        if (!added.has(id)) {
          var option = optionsObj[id];
          if (option.reverseSortedChildren) {
            idsStack.push.apply(idsStack, toConsumableArray(option.reverseSortedChildren));
          }
          added.add(id);
          optionsList.push(option);
        }
      }
      return optionsList;
    }
  }]);
  return PossibleValuesManager;
}();

PossibleValuesManager._langState = {
  lang: Constants.LANGUAGE_ENGLISH,
  defaultLang: Constants.LANGUAGE_ENGLISH
};

/* eslint-disable class-methods-use-this */
var FEATURE_MANAGER = 'Feature manager';

/**
 * Feature Manager
 * @author Nadejda Mandrescu
 */

var FeatureManager = function () {
  function FeatureManager(fmTree, LoggerManager) {
    classCallCheck(this, FeatureManager);

    this._fmTree = fmTree;
    if (LoggerManager) {
      this.loggerManager = LoggerManager;
    }
  }
  // eslint-disable-next-line no-undef


  createClass(FeatureManager, [{
    key: 'isFMSettingEnabled',
    value: function isFMSettingEnabled(fmPath, onlyLastSegment) {
      this._loggerManager.debug('isFMSettingEnabled');
      if (this._fmTree) {
        var lastFMSubTree = this._fmTree;
        var segments = this._getPathSegments(fmPath);
        var foundLastFMSubTree = segments.every(function (segment) {
          lastFMSubTree = lastFMSubTree[segment];
          return lastFMSubTree !== undefined && (lastFMSubTree.__enabled || onlyLastSegment);
        });
        return foundLastFMSubTree && lastFMSubTree.__enabled;
      }
      return false;
    }
  }, {
    key: 'hasFMSetting',
    value: function hasFMSetting(fmPath) {
      var fmSetting = this.findFMSetting(fmPath);
      return fmSetting && fmSetting.__enabled !== undefined;
    }
  }, {
    key: 'findFMSetting',
    value: function findFMSetting(fmPath) {
      var segments = this._getPathSegments(fmPath);
      return segments.reduce(function (currentFMSetting, segment) {
        return currentFMSetting && currentFMSetting[segment];
      }, this._fmTree || {});
    }
  }, {
    key: 'setFMSetting',
    value: function setFMSetting(fmPath, enabled) {
      if (this._fmTree) {
        var segments = this._getPathSegments(fmPath);
        var lastFMSubTree = segments.reduce(function (currentFMTree, segment) {
          var segmentFM = currentFMTree[segment];
          if (segmentFM === undefined) {
            segmentFM = {};
            currentFMTree[segment] = segmentFM;
          }
          return segmentFM;
        }, this._fmTree);
        lastFMSubTree.__enabled = enabled;
      }
    }
  }, {
    key: '_getPathSegments',
    value: function _getPathSegments(fmPath) {
      // ignore first "/" to exclude empty string from the split
      return fmPath.substring(1).split('/');
    }
  }, {
    key: 'fmTree',
    set: function set$$1(fmTree) {
      this._fmTree = fmTree;
    }
  }, {
    key: 'loggerManager',
    set: function set$$1(LoggerManager) {
      this._loggerManager = new LoggerManager(FEATURE_MANAGER);
    }
  }], [{
    key: 'setLoggerManager',
    value: function setLoggerManager(LoggerManager) {
      FeatureManager._currentFM.loggerManager = LoggerManager;
    }
  }, {
    key: 'setFMTree',
    value: function setFMTree(fmTree) {
      FeatureManager._currentFM.fmTree = fmTree;
    }

    /**
     * Checks if the given FM path is fully enabled or only last segment is enabled
     * @param fmPath the FM path, e.g. '/PROJECT MANAGEMENT/Funding/Funding Information/Delivery rate'
     * @param onlyLastSegment specifies if to check if only the last segment is enabled (the AMP behavior for some cases)
     * @return {boolean}
     */

  }, {
    key: 'isFMSettingEnabled',
    value: function isFMSettingEnabled(fmPath, onlyLastSegment) {
      return FeatureManager._currentFM.isFMSettingEnabled(fmPath, onlyLastSegment);
    }
  }, {
    key: 'hasFMSetting',
    value: function hasFMSetting(fmPath) {
      return FeatureManager._currentFM.hasFMSetting(fmPath);
    }
  }]);
  return FeatureManager;
}();

FeatureManager._currentFM = new FeatureManager();

var logger$1 = null;

var APLabel = function (_Component) {
  inherits(APLabel, _Component);

  function APLabel(props) {
    classCallCheck(this, APLabel);

    var _this = possibleConstructorReturn(this, (APLabel.__proto__ || Object.getPrototypeOf(APLabel)).call(this, props));

    var Logger = _this.props.Logger;

    logger$1 = new Logger('AP Label');
    logger$1.debug('constructor');
    return _this;
  }

  createClass(APLabel, [{
    key: 'getContent',
    value: function getContent() {
      var translate = this.props.translate;

      var label = this.props.dontTranslate === true ? this.props.label : translate(this.props.label);
      var labelClass = this.props.labelClass ? this.props.labelClass : '';
      return React.createElement(
        'div',
        { className: labelClass },
        React.createElement(
          'span',
          null,
          label
        ),
        this.props.separator ? React.createElement('hr', null) : ''
      );
    }
  }, {
    key: 'tooltip',
    value: function tooltip() {
      var _props = this.props,
          tooltip = _props.tooltip,
          dontTranslate = _props.dontTranslate,
          translate = _props.translate;

      return React.createElement(
        Tooltip,
        { id: 'tooltip' },
        dontTranslate ? tooltip : translate(this.props.tooltip)
      );
    }
  }, {
    key: 'render',
    value: function render() {
      if (this.props.tooltip) {
        return React.createElement(
          OverlayTrigger,
          { placement: 'right', overlay: this.tooltip() },
          this.getContent()
        );
      } else {
        return this.getContent();
      }
    }
  }]);
  return APLabel;
}(Component);

APLabel.propTypes = {
  label: PropTypes$1.string.isRequired,
  dontTranslate: PropTypes$1.bool,
  labelClass: PropTypes$1.string,
  /* decorator: PropTypes.func, // TODO: To be implemented. */
  separator: PropTypes$1.bool,
  tooltip: PropTypes$1.string
};

var css$1 = ".ActivityPreview_preview_container__1LGrB {\n  font-family: 'open_sansregular', sans-serif;\n  margin-left: 30px;\n  margin-right: 50px;\n}\n\n.ActivityPreview_preview_title__uRjjt {\n  margin-left: 10px;\n  background-color: #FFFFFF;\n  color: #000000;\n  font-size: 1.5em;\n  font-weight: bold;\n  padding: 5px;\n  height: auto;\n  display: inline-block;\n}\n\n.ActivityPreview_preview_icons__1lBrL {\n  display: inline-block;\n}\n\n.ActivityPreview_preview_icons__1lBrL img {\n  height: 20px;\n  width: 20px;\n}\n\n.ActivityPreview_preview_icons__1lBrL object {\n  height: 20px;\n  width: 20px;\n}\n\n.ActivityPreview_preview_icons__1lBrL ul {\n  margin-left: 30px;\n  columns: 5;\n  column-rule: 1px solid #ebebeb;\n}\n\n.ActivityPreview_preview_icons__1lBrL ul li {\n  list-style-type: none;\n  margin-left: 10px;\n  margin-right: 10px;\n  cursor: pointer;\n}\n\n.ActivityPreview_preview_status_container__1HinM {\n  margin-left: 10px;\n  margin-top: 20px;\n  padding: 10px;\n  background-color: #f5faff;\n}\n\n.ActivityPreview_inline_flex__3wThV {\n  display: inline-flex;\n}\n\n.ActivityPreview_preview_status_title__3D29a {\n  margin-left: 10px;\n  margin-right: 5px;\n}\n\n.ActivityPreview_preview_status_detail__1qlPG {\n  font-family: 'open_sansextrabold', sans-serif;\n  margin-right: 20px;\n}\n\n.ActivityPreview_status_title_class__2GzI5 {\n\n}\n\n.ActivityPreview_status_group_class__1E1xM {\n\n}\n\n.ActivityPreview_preview_categories__36Zqn {\n  margin-top: 20px;\n  margin-left: 15px;\n  border-bottom: 1px solid #ebebeb;\n}\n\n.ActivityPreview_preview_categories__36Zqn ul {\n  columns: 5;\n  column-rule: 1px solid #ebebeb;\n  line-height: 150%;\n}\n\n.ActivityPreview_preview_categories__36Zqn ul li {\n  list-style-type: none;\n  font-size: 0.9em;\n  font-weight: bold;\n  color: #778293;\n  margin-left: 20px;\n  padding-left: 4px;\n  cursor: pointer;\n}\n\n.ActivityPreview_preview_categories__36Zqn ul li:hover {\n  color: #1d2531;\n  background-color: #f8f8f8;\n  position: relative;\n}\n\n.ActivityPreview_preview_categories__36Zqn ul li:hover:after {\n  /* content: url('../../../assets/images/arrow.svg'); */\n  height: 14px;\n  width: 14px;\n  display: block;\n  position: absolute;\n  left: -13px;\n  top: 2px;\n}\n\n.ActivityPreview_preview_category_selected__3__Py {\n  color: #1d2531;\n  /* background-color: #f8f8f8; */\n  position: relative;\n}\n\n.ActivityPreview_preview_category_selected__3__Py:after {\n  /* content: url('../../../assets/images/arrow.svg'); */\n  height: 14px;\n  width: 14px;\n  display: block;\n  position: absolute;\n  left: -13px;\n  top: 2px;\n}\n\n.ActivityPreview_preview_content__3Tcic {\n  vertical-align: top;\n}\n\n.ActivityPreview_preview_summary__2dz4C {\n  width: 300px;\n}\n\n.ActivityPreview_summary_container__67F1x {\n  margin-top: 30px;\n  padding-right: 20px;\n}\n\n.ActivityPreview_summary_section_title__1N_El {\n  background-color: #3a84b3;\n  color: #FFFFFF;\n  font-size: 1.3em;\n  margin-bottom: 15px;\n  margin-top: 30px;\n  padding-top: 15px;\n  padding-bottom: 10px;\n  padding-left: 20px;\n  padding-right: 20px;\n  border-top-left-radius: 5px;\n  border-top-right-radius: 5px;\n  display: block;\n}\n\n.ActivityPreview_summary_section_group__1tEx2 {\n  background-color: #f5faff;\n  margin-top: 15px;\n  padding-bottom: 10px;\n}\n\n.ActivityPreview_summary_field_name__3dhpq {\n  padding-left: 15px;\n}\n\n.ActivityPreview_summary_field_value__Ju6sE {\n  padding-left: 15px;\n  font-family: 'open_sansextrabold', sans-serif;\n  margin-bottom: 15px;\n}\n\n.ActivityPreview_main_group_container__3goI9 {\n  margin-top: 30px;\n}\n\n.ActivityPreview_section_title_class__2nd28 {\n  font-size: 1.3em;\n  font-weight: bold;\n  margin-bottom: 15px;\n  margin-top: 30px;\n}\n\n.ActivityPreview_section_group_class__31xyk {\n  margin-right: 10px;\n  margin-bottom: 20px;\n}\n\n.ActivityPreview_section_subtitle_class__34GnZ {\n  font-size: 1.1em;\n  font-weight: bold;\n  padding-bottom: 15px;\n  padding-top: 15px;\n  width: 100%;\n}\n\n.ActivityPreview_section_field_name__1O_Kg {\n  font-size: 0.85em;\n  color: #767676;\n  font-weight: bold;\n  margin-bottom: 5px;\n}\n\n.ActivityPreview_section_field_value__X9FTN {\n  font-weight: bold;\n  border-bottom: 1px solid #ebebeb;\n  margin-bottom: 10px;\n  padding-bottom: 10px;\n}\n\n.ActivityPreview_box_container__2Q6KF {\n  border: 1px solid #ebebeb;\n}\n\n.ActivityPreview_box_table__39dkc {\n  border-top: 1px solid #ebebeb;\n  border-bottom: 1px solid #ebebeb;\n  border-collapse: collapse;\n  width: 100%;\n}\n\n.ActivityPreview_box_table__39dkc td {\n  width: 33%;\n  padding-left: 20px;\n  border-bottom: 1px solid #ebebeb;\n}\n\n.ActivityPreview_box_table__39dkc tr td:nth-child(2) {\n  border: 1px solid #ebebeb;\n}\n\n.ActivityPreview_two_box_table__3Brzk {\n  border-top: 1px solid #ebebeb;\n  border-bottom: 1px solid #ebebeb;\n  width: 100%;\n}\n\n.ActivityPreview_two_box_table__3Brzk td {\n  width: 50%;\n  padding-left: 20px;\n}\n\n.ActivityPreview_two_box_table__3Brzk tr td:first-child {\n  border-right: 1px solid #ebebeb;\n}\n\n.ActivityPreview_box_field_name__22YmB {\n  font-size: 0.85em;\n  color: #767676;\n  font-weight: bold;\n  padding-top: 10px;\n  padding-bottom: 5px;\n}\n\n.ActivityPreview_box_field_value__-O8Yl {\n  font-weight: bold;\n  padding-bottom: 10px;\n}\n\n.ActivityPreview_box_field_value_tight__vYQNU {\n  font-weight: bold;\n}\n\n.ActivityPreview_percent_field_name__200lD {\n  display: inline-block;\n  font-weight: bold;\n  padding-top: 10px;\n  padding-bottom: 5px;\n  margin-left: 10px;\n  width: 70%;\n}\n\n.ActivityPreview_percent_field_value__o3aHW {\n  display: inline-block;\n  color: #3a84b3;\n  font-weight: bold;\n  width: 15%;\n  padding-left: 5%;\n  padding-top: 10px;\n  vertical-align: top;\n}\n\n.ActivityPreview_project_cost_left__36wwp {\n  display: inline-block;\n  width: 55%;\n  background-color: #f8fff5;\n  margin-left: 10px;\n  padding-left: 20px;\n  padding-top: 10px;\n  border-top: 1px solid #ebebeb;\n  border-bottom: 1px solid #ebebeb;\n  border-right: 1px solid #ebebeb;\n}\n\n.ActivityPreview_project_cost_right__3cRRw {\n  display: inline-block;\n  width: 43%;\n  padding-left: 20px;\n  padding-top: 10px;\n  border-top: 1px solid #ebebeb;\n  border-bottom: 1px solid #ebebeb;\n}\n\n.ActivityPreview_project_cost_title__1_6ht {\n  display: block;\n  font-size: 0.85em;\n  color: #767676;\n  font-weight: bold;\n  margin-bottom: 5px\n}\n\n.ActivityPreview_project_cost_currency__H3Kv- {\n  display: block;\n  width: 100%;\n  font-size: 2em;\n  text-align: right;\n  padding-bottom: 10px;\n  padding-right: 10px;\n}\n\n.ActivityPreview_project_cost_date__OO0eE {\n  display: block;\n  width: 100%;\n  padding-bottom: 10px;\n  padding-top: 10px;\n  font-weight: bold;\n  line-height: 30px;\n}\n\n.ActivityPreview_sector_title__U2dSa {\n  background-color: #f4f4f4;\n  color: #9d9d9d;\n  border-top: 1px solid #ebebeb;\n  border-bottom: 1px solid #ebebeb;\n  padding: 8px;\n  margin-bottom: 15px;\n  font-size: 0.85em;\n  font-weight: bold;\n}\n\n.ActivityPreview_inline__vfRr8 {\n  display: inline;\n}\n\n.ActivityPreview_block__1Hvq2 {\n  display: block;\n}\n\n.ActivityPreview_flex__2ybx- {\n  display: flex;\n}\n\n.ActivityPreview_hidden__5WQ6_ {\n  display: none;\n}\n\n.ActivityPreview_table_raw__2dpBx {\n  display: table-row;\n}\n\n\n.ActivityPreview_alignRight__3VvbU {\n  text-align: right;\n}\n\n.ActivityPreview_tableCell__KHoJx {\n  padding-left: 10px;\n}\n\n.ActivityPreview_tableValue__3IHV- {\n  width: 100%;\n  float: left;\n  font-weight: bold;\n}\n\n.ActivityPreview_paddingBottom__2Fm60 {\n  padding-bottom: 10px;\n}\n\n.ActivityPreview_paddingBottomLarge__2YK8I {\n  padding-bottom: 20px;\n}\n\n.ActivityPreview_box_table2__2CnHv {\n  width: 100%;\n}\n\n.ActivityPreview_box_table2__2CnHv td {\n  width: 33%;\n  padding-left: 20px;\n}\n\n.ActivityPreview_box_table2__2CnHv tr td:nth-child(2) {\n  border-left: 1px solid #ebebeb;\n  border-right: 1px solid #ebebeb;\n}\n\n.ActivityPreview_tablify_inner_cell__r4tTo {\n  display: inline-block;\n  padding-bottom: 5px;\n  border-left: 1px solid #ebebeb;\n  border-bottom: 1px solid #ebebeb;\n}\n\n.ActivityPreview_tablify_outer_cell__5akw5 {\n  display: inline-block;\n  padding-bottom: 5px;\n  border-bottom: 1px solid #ebebeb;\n}\n\n.ActivityPreview_nodata__1zNpF {\n  padding-left: 10px;\n  padding-bottom: 10px;\n  vertical-align: top;\n  font-weight: bold;\n}\n\n.ActivityPreview_noborder__1s8AZ {\n  border: 0;\n}\n\n.ActivityPreview_top_warning_text__kQuPV {\n  color: red;\n  margin-left: 10px;\n  padding: 5px;\n  display: inline-block;\n  width: 100%;\n}\n\n.ActivityPreview_structure_title__2UUP_ {\n  background-color: #f4f4f4;\n  color: #3a84b3;\n  border: 1px solid #ebebeb;\n  padding: 8px;\n  margin-bottom: 15px;\n  font-size: 1.2em;\n  font-weight: bold;\n  border-radius: 5px;\n  margin-top: 10px;\n}\n\n.ActivityPreview_structures_coordinates_table__1LgUt {\n  width: 50%;\n}\n\n.ActivityPreview_structures_coordinates_value__2mhL9 {\n  border: none;\n  font-weight: bold;\n}\n";
var styles$1 = { "preview_container": "ActivityPreview_preview_container__1LGrB", "preview_title": "ActivityPreview_preview_title__uRjjt", "preview_icons": "ActivityPreview_preview_icons__1lBrL", "preview_status_container": "ActivityPreview_preview_status_container__1HinM", "inline_flex": "ActivityPreview_inline_flex__3wThV", "preview_status_title": "ActivityPreview_preview_status_title__3D29a", "preview_status_detail": "ActivityPreview_preview_status_detail__1qlPG", "status_title_class": "ActivityPreview_status_title_class__2GzI5", "status_group_class": "ActivityPreview_status_group_class__1E1xM", "preview_categories": "ActivityPreview_preview_categories__36Zqn", "preview_category_selected": "ActivityPreview_preview_category_selected__3__Py", "preview_content": "ActivityPreview_preview_content__3Tcic", "preview_summary": "ActivityPreview_preview_summary__2dz4C", "summary_container": "ActivityPreview_summary_container__67F1x", "summary_section_title": "ActivityPreview_summary_section_title__1N_El", "summary_section_group": "ActivityPreview_summary_section_group__1tEx2", "summary_field_name": "ActivityPreview_summary_field_name__3dhpq", "summary_field_value": "ActivityPreview_summary_field_value__Ju6sE", "main_group_container": "ActivityPreview_main_group_container__3goI9", "section_title_class": "ActivityPreview_section_title_class__2nd28", "section_group_class": "ActivityPreview_section_group_class__31xyk", "section_subtitle_class": "ActivityPreview_section_subtitle_class__34GnZ", "section_field_name": "ActivityPreview_section_field_name__1O_Kg", "section_field_value": "ActivityPreview_section_field_value__X9FTN", "box_container": "ActivityPreview_box_container__2Q6KF", "box_table": "ActivityPreview_box_table__39dkc", "two_box_table": "ActivityPreview_two_box_table__3Brzk", "box_field_name": "ActivityPreview_box_field_name__22YmB", "box_field_value": "ActivityPreview_box_field_value__-O8Yl", "box_field_value_tight": "ActivityPreview_box_field_value_tight__vYQNU", "percent_field_name": "ActivityPreview_percent_field_name__200lD", "percent_field_value": "ActivityPreview_percent_field_value__o3aHW", "project_cost_left": "ActivityPreview_project_cost_left__36wwp", "project_cost_right": "ActivityPreview_project_cost_right__3cRRw", "project_cost_title": "ActivityPreview_project_cost_title__1_6ht", "project_cost_currency": "ActivityPreview_project_cost_currency__H3Kv-", "project_cost_date": "ActivityPreview_project_cost_date__OO0eE", "sector_title": "ActivityPreview_sector_title__U2dSa", "inline": "ActivityPreview_inline__vfRr8", "block": "ActivityPreview_block__1Hvq2", "flex": "ActivityPreview_flex__2ybx-", "hidden": "ActivityPreview_hidden__5WQ6_", "table_raw": "ActivityPreview_table_raw__2dpBx", "alignRight": "ActivityPreview_alignRight__3VvbU", "tableCell": "ActivityPreview_tableCell__KHoJx", "tableValue": "ActivityPreview_tableValue__3IHV-", "paddingBottom": "ActivityPreview_paddingBottom__2Fm60", "paddingBottomLarge": "ActivityPreview_paddingBottomLarge__2YK8I", "box_table2": "ActivityPreview_box_table2__2CnHv", "tablify_inner_cell": "ActivityPreview_tablify_inner_cell__r4tTo", "tablify_outer_cell": "ActivityPreview_tablify_outer_cell__5akw5", "nodata": "ActivityPreview_nodata__1zNpF", "noborder": "ActivityPreview_noborder__1s8AZ", "top_warning_text": "ActivityPreview_top_warning_text__kQuPV", "structure_title": "ActivityPreview_structure_title__2UUP_", "structures_coordinates_table": "ActivityPreview_structures_coordinates_table__1LgUt", "structures_coordinates_value": "ActivityPreview_structures_coordinates_value__2mhL9" };
styleInject(css$1);

var logger$2 = null;

/**
 * Simple Field component that consists of a field title and field value
 * @author Nadejda Mandrescu
 */

var APField = function (_Component) {
  inherits(APField, _Component);
  createClass(APField, null, [{
    key: 'instance',


    /**
     * Gets an instance of Simple Field
     * @param trnLabel the label to translate and use as a title. This label is also used as the component key.
     * @param value the field value
     * @param inline show title and value in the same row.
     * @param separator add or not an <hr> tag.
     * @param nameClass css class for the field label
     * @param valueClass css class for the field value
     * @param translate the translation function
     * @param logger the LoggerManager
     * @return {SimpleField}
     */
    value: function instance(trnLabel, value) {
      var inline = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var separator = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
      var nameClass = arguments[4];
      var valueClass = arguments[5];
      var translate = arguments[6];
      var logger = arguments[7];

      return React.createElement(APField, {
        key: trnLabel, title: translate(trnLabel), value: value, inline: inline, separator: separator,
        fieldNameClass: nameClass, fieldValueClass: valueClass, translate: translate, Logger: logger });
    }
  }]);

  function APField(props) {
    classCallCheck(this, APField);

    var _this = possibleConstructorReturn(this, (APField.__proto__ || Object.getPrototypeOf(APField)).call(this, props));

    var Logger = _this.props.Logger;

    logger$2 = new Logger('AP field');
    logger$2.log('constructor');
    _this.useSeparator = _this.props.separator !== false;
    _this.displayClass = _this.props.fieldClass || (_this.props.inline === true ? styles$1.inline : styles$1.block);
    return _this;
  }

  createClass(APField, [{
    key: '_getValue',
    value: function _getValue() {
      var translate = this.props.translate;

      var classNames = this.props.fieldValueClass + ' ' + this.displayClass;
      // To handle boolean fields we dont want to show 'false' as 'No Data'.
      var value = this.props.value || this.props.value === false ? this.props.value : translate('No Data');
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
        displayValue = value === true ? translate('Yes') : translate('No');
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
  return APField;
}(Component);

APField.propTypes = {
  title: PropTypes$1.string,
  value: PropTypes$1.any,
  inline: PropTypes$1.bool,
  useInnerHTML: PropTypes$1.bool,
  fieldClass: PropTypes$1.string,
  fieldNameClass: PropTypes$1.string,
  fieldValueClass: PropTypes$1.string,
  separator: PropTypes$1.bool
};

var logger$3 = null;

/**
 * Component for converting content to table form
 * @author Anya Marshall
 */

var Tablify = function (_Component) {
  inherits(Tablify, _Component);
  createClass(Tablify, null, [{
    key: 'addRows',


    /**
     * Takes an array and turns it into table rows and columns.
     * @author Anya Marshall
     * @param content content for table
     * @param cols number of columns
     */
    value: function addRows(content, cols) {
      // Remove undefined cells.
      content = content.filter(function (c) {
        return c;
      });
      // Decrease number of cols if we dont have enough elements.
      if (content.length < cols) {
        cols = content.length;
      }
      var rows = Math.ceil(content.length / cols);
      var tableContent = [];

      for (var i = 0; i < rows; i++) {
        var rowContent = [];
        for (var j = 0; j < cols; j++) {
          rowContent.push(React.createElement(
            'td',
            { key: UIUtils.stringToUniqueId() },
            content.pop()
          ));
        }
        tableContent.push(React.createElement(
          'tr',
          { key: UIUtils.stringToUniqueId() },
          rowContent
        ));
      }
      return tableContent;
    }
  }]);

  function Tablify(props) {
    classCallCheck(this, Tablify);

    var _this = possibleConstructorReturn(this, (Tablify.__proto__ || Object.getPrototypeOf(Tablify)).call(this, props));

    var Logger = _this.props.Logger;

    logger$3 = new Logger('tablify');
    logger$3.log('constructor');
    return _this;
  }

  createClass(Tablify, [{
    key: 'render',
    value: function render() {
      var columns = this.props.columns >= this.props.content.length ? this.props.content.length : this.props.columns;
      var cellWidth = 100 / columns + '%';
      var cellwidthStyle = {
        width: cellWidth
      };
      var rows = Math.ceil(this.props.content.length / columns);
      var tableContent = [];
      for (var i = 0; i < rows; i++) {
        var rowContent = [];
        rowContent.push(React.createElement(
          'div',
          { key: UIUtils.stringToUniqueId(), style: cellwidthStyle,
            className: styles$1.tablify_outer_cell },
          this.props.content.pop()
        ));
        for (var j = 1; j < this.props.columns && this.props.content.length > 0; j++) {
          var key = UIUtils.stringToUniqueId();
          rowContent.push(React.createElement(
            'div',
            { key: key, style: cellwidthStyle, className: styles$1.tablify_inner_cell },
            this.props.content.pop()
          ));
        }
        tableContent.push(React.createElement(
          'div',
          { key: UIUtils.stringToUniqueId(), className: styles$1.flex },
          rowContent
        ));
      }
      return React.createElement(
        'div',
        null,
        tableContent
      );
    }
  }]);
  return Tablify;
}(Component);

Tablify.propTypes = {
  content: PropTypes.any,
  columns: PropTypes.number
};

var logger$4 = null;

/**
 * Percentage Field component
 * @author Nadejda Mandrescu
 */

var APPercentageField = function (_Component) {
  inherits(APPercentageField, _Component);

  function APPercentageField(props) {
    classCallCheck(this, APPercentageField);

    var _this = possibleConstructorReturn(this, (APPercentageField.__proto__ || Object.getPrototypeOf(APPercentageField)).call(this, props));

    var Logger = _this.props.Logger;

    logger$4 = new Logger('AP percentage field');
    logger$4.log('constructor');
    return _this;
  }

  createClass(APPercentageField, [{
    key: 'render',
    value: function render() {
      var rawNumberToFormattedString = this.props.rawNumberToFormattedString;

      var percentage = this.props.value !== undefined && this.props.value !== null ? rawNumberToFormattedString(this.props.value, true) + '%' : null;
      return React.createElement(
        'div',
        null,
        React.createElement(
          'span',
          { className: this.props.titleClass },
          this.props.title,
          ' '
        ),
        React.createElement(
          'span',
          { className: this.props.valueClass + ' ' + styles$1.alignRight },
          percentage
        )
      );
    }
  }]);
  return APPercentageField;
}(Component);

APPercentageField.propTypes = {
  title: PropTypes$1.string.isRequired,
  value: PropTypes$1.number,
  titleClass: PropTypes$1.string,
  valueClass: PropTypes$1.string,
  Logger: PropTypes$1.func.isRequired,
  rawNumberToFormattedString: PropTypes$1.func.isRequired
};

var logger$5 = null;

/**
 * Activity Preview Percentage List type section
 * @author Nadejda Mandrescu
 */
var APPercentageList = function APPercentageList(listField, valueField, percentageField) {
  var _class, _temp;

  var listTitle = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
  return _temp = _class = function (_Component) {
    inherits(_class, _Component);

    function _class(props) {
      classCallCheck(this, _class);

      var _this = possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props));

      var Logger = _this.props.Logger;

      logger$5 = new Logger('AP percentage list');
      logger$5.debug('constructor');
      return _this;
    }

    createClass(_class, [{
      key: 'getItemTitle',
      value: function getItemTitle(item) {
        if (this.props.getItemTitle) {
          return this.props.getItemTitle(item);
        }
        var obj = item[valueField];
        return obj[ActivityConstants.HIERARCHICAL_VALUE] ? obj[ActivityConstants.HIERARCHICAL_VALUE] : PossibleValuesManager.getOptionTranslation(obj);
      }
    }, {
      key: 'render',
      value: function render() {
        var _this2 = this;

        var _props = this.props,
            translate = _props.translate,
            activityFieldsManager = _props.activityFieldsManager,
            percentTitleClass = _props.percentTitleClass,
            fmPath = _props.fmPath,
            activity = _props.activity,
            columns = _props.columns,
            tablify = _props.tablify,
            percentValueClass = _props.percentValueClass,
            fieldNameClass = _props.fieldNameClass,
            fieldValueClass = _props.fieldValueClass,
            Logger = _props.Logger,
            rawNumberToFormattedString = _props.rawNumberToFormattedString;

        var title = listTitle ? translate(listTitle) : null;
        var items = activity[listField];
        var content = null;
        var isListEnabled = activityFieldsManager.isFieldPathEnabled(listField) === true;
        if (fmPath) {
          isListEnabled = FeatureManager.isFMSettingEnabled(fmPath) ? isListEnabled : false;
        }
        if (isListEnabled) {
          if (items && items.length) {
            items = items.map(function (item) {
              return {
                itemTitle: _this2.getItemTitle(item),
                percentage: item[percentageField]
              };
            }).sort(function (a, b) {
              return a.itemTitle.localeCompare(b.itemTitle);
            });
            content = items.map(function (_ref) {
              var itemTitle = _ref.itemTitle,
                  percentage = _ref.percentage;
              return React.createElement(APPercentageField, {
                key: UIUtils.stringToUniqueId(itemTitle), title: itemTitle, value: percentage,
                titleClass: percentTitleClass, valueClass: percentValueClass, translate: translate,
                Logger: Logger, rawNumberToFormattedString: rawNumberToFormattedString });
            });
            if (tablify) {
              content = React.createElement(Tablify, { content: content, columns: columns, Logger: Logger });
            }
            content = React.createElement(APField, {
              key: listField, title: title, value: content, separator: false, inline: tablify === true,
              fieldNameClass: fieldNameClass, fieldValueClass: fieldValueClass,
              translate: translate, Logger: Logger });
          } else {
            content = React.createElement(APField, {
              key: listField, title: title, value: translate('No Data'), separator: false,
              inline: tablify === true,
              fieldNameClass: fieldNameClass, fieldValueClass: styles$1.nodata,
              translate: translate, Logger: Logger });
          }
        }
        return content;
      }
    }]);
    return _class;
  }(Component), _class.propTypes = {
    activity: PropTypes.object.isRequired,
    activityFieldsManager: PropTypes.instanceOf(FieldsManager).isRequired,
    fieldNameClass: PropTypes.string,
    fieldValueClass: PropTypes.string,
    percentTitleClass: PropTypes.string,
    percentValueClass: PropTypes.string,
    tablify: PropTypes.bool,
    columns: PropTypes.number,
    fmPath: PropTypes.string,
    getItemTitle: PropTypes.func,
    Logger: PropTypes.func.isRequired,
    translate: PropTypes.func.isRequired
  }, _temp;
};

var logger$6 = null;

/**
 * Generic activity preview section class
 * @author Nadejda Mandrescu
 */
// const Section = (ComposedSection, SectionTitle = null, useEncapsulateHeader = true, sID) => class extends Component {
var Section = function Section(ComposedSection, params) {
  var _class, _temp;

  return _temp = _class = function (_Component) {
    inherits(_class, _Component);

    function _class(props, context) {
      classCallCheck(this, _class);

      var _this = possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props, context));

      if (_this.context) {
        params.Logger = _this.context.Logger;
        params.DateUtils = _this.context.DateUtils;
        params.translate = _this.context.translate;
      }
      params.useEncapsulateHeader = !params.useEncapsulateHeader ? true : params.useEncapsulateHeader;
      logger$6 = new params.Logger('AP section');
      logger$6.debug('constructor');
      return _this;
    }

    /**
     * Renders field data if it is enabled in FM. If renabled, but value is not available, then it will not be rendered,
     * unless it is requested via showIfNotAvailable flag.
     * @param path field path
     * @param showIfNotAvailable flag to forcibly display the field when no value is provided
     * @param NAOptions optional set of values that should be treated as undefined
     * @param inline optional flag to render name and values on the same line
     * @param parent optional object where we look for the path (instead of the activity root).
     * @param fieldsManager (optional) custom fields manager. Activity Fields Manager used by default.
     * @return {null|APField}
     */


    createClass(_class, [{
      key: 'buildSimpleField',
      value: function buildSimpleField(path, showIfNotAvailable, NAOptions) {
        var inline = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
        var parent = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
        var fieldsManager = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : null;
        var options = arguments[6];

        var options_ = options || {};
        var fmPath = FieldPathConstants.ACTIVITY_FIELDS_FM_PATH[path];
        fieldsManager = fieldsManager || this.context.activityFieldsManager;
        if (fieldsManager.isFieldPathEnabled(path) && (!fmPath || FeatureManager.isFMSettingEnabled(fmPath, false))) {
          var title = options_.noTitle ? '' : fieldsManager.getFieldLabelTranslation(path);
          var valuePath = path;
          if (parent) {
            var fieldPathParts = path.split('~');
            valuePath = fieldPathParts[fieldPathParts.length - 1];
          }
          var alternatePath = FieldPathConstants.ALTERNATE_VALUE_PATH[valuePath];
          var value = fieldsManager.getValue(parent || this.context.activity, valuePath, PossibleValuesManager.getOptionTranslation);
          if ((value === null || value === undefined) && alternatePath) {
            value = fieldsManager.getValue(this.context.activity, alternatePath, PossibleValuesManager.getOptionTranslation);
          }
          var fieldDef = fieldsManager.getFieldDef(path);
          if (fieldDef.field_type === FieldPathConstants.FIELD_TYPE_DATE) {
            value = params.DateUtils.createFormattedDate(value);
          } else if (fieldDef.field_type === FieldPathConstants.FIELD_TYPE_TIMESTAMP) {
            // matching AP online to format as date for now
            value = params.DateUtils.createFormattedDate(value);
          } else if (Array.isArray(value) && !value.length) {
            value = null;
          }
          value = NAOptions && NAOptions.has(value) ? null : value;

          var re = /^\s?$/; // check for whitespace
          if (re.test(value)) value = value.trim(); // check for whitespace
          if (value === '' || value === null) {
            value = params.translate('No Data');
          }
          if (showIfNotAvailable === true || value !== undefined && value !== null) {
            var useInnerHTML = FieldPathConstants.RICH_TEXT_FIELDS.has(path);
            return React.createElement(APField, {
              key: UIUtils.stringToUniqueId(path), title: title, value: value, useInnerHTML: useInnerHTML,
              inline: inline,
              separator: false,
              fieldClass: options_.fieldClass || this.props.fieldClass,
              fieldNameClass: this.props.fieldNameClass,
              fieldValueClass: options_.fieldValueClass || this.props.fieldValueClass,
              translate: params.translate, Logger: params.Logger });
          }
        }
      }
    }, {
      key: 'render',
      value: function render() {
        if (this.props.sectionPath && !this.context.activityFieldsManager.isFieldPathEnabled(this.props.sectionPath)) {
          return null;
        }
        if (this.props.fmPath && !FeatureManager.isFMSettingEnabled(this.props.fmPath)) {
          return null;
        }
        var composedSection = React.createElement(ComposedSection, _extends({}, this.props, this.state, this.context, { buildSimpleField: this.buildSimpleField.bind(this) }));
        if (params.useEncapsulateHeader === false) {
          return composedSection;
        }
        // TODO iteration 2+ section toggle (TDC based on desgin + VG)
        return React.createElement(
          'div',
          { key: params.SectionTitle, className: this.props.groupClass, id: params.sID },
          React.createElement(
            'div',
            { className: this.props.titleClass },
            React.createElement(
              'span',
              null,
              params.translate(params.SectionTitle),
              ' '
            ),
            React.createElement(
              'span',
              null,
              this.props.titleDetails
            )
          ),
          React.createElement(
            'div',
            { className: this.props.composedClass },
            composedSection
          )
        );
      }
    }]);
    return _class;
  }(Component), _class.propTypes = {
    titleDetails: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    sectionPath: PropTypes.string,
    titleClass: PropTypes.string,
    groupClass: PropTypes.string,
    composedClass: PropTypes.string,
    fieldNameClass: PropTypes.string,
    fieldValueClass: PropTypes.string,
    fmPath: PropTypes.string,
    fieldClass: PropTypes.string
  }, _class.contextTypes = {
    activity: PropTypes.object.isRequired,
    activityFieldsManager: PropTypes.instanceOf(FieldsManager).isRequired,
    contactFieldsManager: PropTypes.instanceOf(FieldsManager),
    contactsByIds: PropTypes.object.isRequired,
    activityFundingTotals: PropTypes.object.isRequired, // Will change this if ActivityFundingTotals is migrated
    // PropTypes.instanceOf(params.ActivityFundingTotals).isRequired,
    activityWorkspace: PropTypes.object.isRequired,
    activityWSManager: PropTypes.object.isRequired,
    resourceReducer: PropTypes.object.isRequired,
    Logger: PropTypes.func,
    translate: PropTypes.func,
    DateUtils: PropTypes.func
  }, _class.defaultProps = {
    titleClass: styles$1.section_title_class,
    groupClass: styles$1.section_group_class,
    fieldNameClass: styles$1.section_field_name,
    fieldValueClass: styles$1.section_field_value
  }, _temp;
};

var logger$7 = null;

/* eslint-disable class-methods-use-this */

/**
 * Funding Totals Summary section
 * @author Nadejda Mandrescu
 */

var FundingSummary = function (_Component) {
  inherits(FundingSummary, _Component);

  function FundingSummary(props) {
    classCallCheck(this, FundingSummary);

    var _this = possibleConstructorReturn(this, (FundingSummary.__proto__ || Object.getPrototypeOf(FundingSummary)).call(this, props));

    var Logger = _this.props.Logger;

    logger$7 = new Logger('Funding summary');
    logger$7.debug('constructor');
    return _this;
  }

  /**
   * Builds "Funding Information" section by following AMP Activity Preview rules
   * @return {Section}
   * @private
   */


  createClass(FundingSummary, [{
    key: '_buildFundingInformation',
    value: function _buildFundingInformation() {
      var _this2 = this;

      var measuresTotals = {};
      var activityFieldsManager = this.props.activityFieldsManager;

      var acEnabled = false;
      var adEnabled = false;
      // Commitments, Disbursements, Expenditures
      FieldPathConstants.TRANSACTION_TYPES.forEach(function (trnType) {
        if (activityFieldsManager.isFieldPathByPartsEnabled(ActivityConstants.FUNDINGS, trnType)) {
          var trnAdjOptPath = ActivityConstants.FUNDINGS + '~' + trnType + '~' + ActivityConstants.ADJUSTMENT_TYPE;
          var atOptions = activityFieldsManager.getPossibleValuesOptions(trnAdjOptPath);
          acEnabled = acEnabled || trnType === ActivityConstants.COMMITMENTS && !!atOptions.find(function (o) {
            return o.value === ValueConstants.ACTUAL;
          });
          adEnabled = adEnabled || trnType === ActivityConstants.DISBURSEMENTS && !!atOptions.find(function (o) {
            return o.value === ValueConstants.ACTUAL;
          });
          // Actual, Planned
          atOptions.forEach(function (adjType) {
            var value = _this2.props.activityFundingTotals.getTotals(adjType.id, trnType, {});
            measuresTotals[adjType.value + ' ' + trnType] = value;
          });
        }
      });
      // Other measures: "Unallocated Disbursements".
      var adjTypeActualTrn = this.props.activityFieldsManager.getValue(FieldPathConstants.DISBURSEMENTS_PATH, ValueConstants.ACTUAL, PossibleValuesManager.getOptionTranslation);
      var expendituresAreEnabled = activityFieldsManager.isFieldPathByPartsEnabled(ActivityConstants.FUNDINGS, ActivityConstants.EXPENDITURES);
      if (adjTypeActualTrn && expendituresAreEnabled) {
        var ub = ValueConstants.UNALLOCATED_DISBURSEMENTS;
        measuresTotals[ub] = this.props.activityFundingTotals.getTotals(ub, {});
      }
      // Other measures: "Total MTEF Projections".
      if (FeatureManager.isFMSettingEnabled(FeatureManagerConstants.MTEF_PROJECTIONS)) {
        measuresTotals[ValueConstants.MTEF_PROJECTIONS] = this.props.activityFundingTotals.getMTEFTotal();
      }
      // Other measures: "Delivery rate".
      if (FeatureManager.isFMSettingEnabled(FeatureManagerConstants.ACTIVITY_DELIVERY_RATE)) {
        var actualCommitments = measuresTotals[ValueConstants.ACTUAL + ' ' + ActivityConstants.COMMITMENTS];
        var actualDisbursements = measuresTotals[ValueConstants.ACTUAL + ' ' + ActivityConstants.DISBURSEMENTS];
        var value = 0;
        if (actualCommitments && actualDisbursements && acEnabled && adEnabled) {
          value = actualDisbursements / actualCommitments * 100;
        }
        measuresTotals[ValueConstants.DELIVERY_RATE] = value;
      }

      return this._buildTotalFields(measuresTotals);
    }
  }, {
    key: '_buildTotalFields',
    value: function _buildTotalFields(measuresTotals) {
      var _this3 = this;

      var translate = this.props.translate;

      var measuresOrder = [{ trn: ValueConstants.ACTUAL_COMMITMENTS, total: true }, { trn: ValueConstants.PLANNED_COMMITMENTS, total: true }, { trn: ValueConstants.ACTUAL_DISBURSEMENTS, total: true }, { trn: ValueConstants.PLANNED_DISBURSEMENTS, total: true }, { trn: ValueConstants.ACTUAL_EXPENDITURES, total: true }, { trn: ValueConstants.UNALLOCATED_DISBURSEMENTS, total: false }, { trn: ValueConstants.PLANNED_EXPENDITURES, total: true }, { trn: ValueConstants.MTEF_PROJECTIONS, total: true }, { trn: ValueConstants.DELIVERY_RATE, total: false, isPercentage: true }];
      var fundingInfoSummary = [];
      measuresOrder.forEach(function (measure) {
        var value = measuresTotals[measure.trn];
        if (value !== undefined) {
          value = _this3.props.activityFundingTotals.formatAmount(value, measure.isPercentage);
          var title = measure.trn;
          if (measure.total) {
            title = 'Total ' + title;
          }
          title = translate(title);
          var key = 'Summary-Total-' + measure.trn;
          fundingInfoSummary.push(React.createElement(APField, {
            key: key, title: title, value: value, separator: false,
            fieldNameClass: _this3.props.fieldNameClass, fieldValueClass: _this3.props.fieldValueClass,
            translate: translate, Logger: _this3.props.Logger }));
        }
      });
      return fundingInfoSummary;
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        this._buildFundingInformation()
      );
    }
  }]);
  return FundingSummary;
}(Component);

FundingSummary.propTypes = {
  activityFieldsManager: PropTypes.instanceOf(FieldsManager).isRequired,
  activityFundingTotals: PropTypes.object.isRequired, // PropTypes.instanceOf(ActivityFundingTotals).isRequired,
  fieldNameClass: PropTypes.string,
  fieldValueClass: PropTypes.string,
  Logger: PropTypes.func.isRequired,
  translate: PropTypes.func.isRequired,
  DateUtils: PropTypes.func.isRequired
};


var FundingSummary$1 = Section(FundingSummary, {
  SectionTitle: 'fundingInformation'
});

var logger$8 = null;

/**
 * Identification section
 * @author Nadejda Mandrescu
 */

var APIdentification = function (_Component) {
  inherits(APIdentification, _Component);

  function APIdentification(props) {
    classCallCheck(this, APIdentification);

    var _this = possibleConstructorReturn(this, (APIdentification.__proto__ || Object.getPrototypeOf(APIdentification)).call(this, props));

    var Logger = _this.props.Logger;

    logger$8 = new Logger('AP Identification');
    logger$8.debug('constructor');
    return _this;
  }

  createClass(APIdentification, [{
    key: 'render',
    value: function render() {
      var buildSimpleField = this.props.buildSimpleField;

      var fieldPaths = [ActivityConstants.STATUS_REASON, ActivityConstants.TYPE_OF_COOPERATION, ActivityConstants.TYPE_OF_IMPLEMENTATION, ActivityConstants.MODALITIES, ActivityConstants.OBJECTIVE, ActivityConstants.DESCRIPTION, ActivityConstants.PROJECT_COMMENTS, ActivityConstants.RESULTS, ActivityConstants.LESSONS_LEARNED, ActivityConstants.PROJECT_IMPACT, ActivityConstants.ACTIVITY_SUMMARY, ActivityConstants.CONDITIONALITIES, ActivityConstants.PROJECT_MANAGEMENT, ActivityConstants.BUDGET_CODE_PROJECT_ID, ActivityConstants.A_C_CHAPTER, ActivityConstants.CRIS_NUMBER, ActivityConstants.ACTIVITY_BUDGET, ActivityConstants.GOVERNMENT_AGREEMENT_NUMBER, ActivityConstants.GOVERNMENT_APPROVAL_PROCEDURES, ActivityConstants.JOINT_CRITERIA, ActivityConstants.HUMANITARIAN_AID];
      // Show budget extras fields like ministry_code, etc only when activity_budget is enabled and has value 'On Budget'.
      if (this.props.activityFieldsManager.isFieldPathEnabled(ActivityConstants.ACTIVITY_BUDGET) && this.props.activity[ActivityConstants.ACTIVITY_BUDGET] && this.props.activity[ActivityConstants.ACTIVITY_BUDGET].value === ValueConstants.ON_BUDGET) {
        fieldPaths.push(ActivityConstants.INDIRECT_ON_BUDGET);
        fieldPaths.push(ActivityConstants.FY);
        fieldPaths.push(ActivityConstants.MINISTRY_CODE);
        fieldPaths.push(ActivityConstants.PROJECT_CODE);
      }
      fieldPaths.push.apply(fieldPaths, [ActivityConstants.FINANCIAL_INSTRUMENT, ActivityConstants.IATI_IDENTIFIER]);
      return React.createElement(
        'div',
        null,
        fieldPaths.map(function (fieldPath) {
          return buildSimpleField(fieldPath, true);
        })
      );
    }
  }]);
  return APIdentification;
}(Component);

APIdentification.propTypes = {
  buildSimpleField: PropTypes.func.isRequired,
  activityFieldsManager: PropTypes.instanceOf(FieldsManager).isRequired,
  activity: PropTypes.object.isRequired,
  Logger: PropTypes.func.isRequired
};


var APIdentification$1 = Section(APIdentification, { SectionTitle: 'Identification',
  useEncapsulateHeader: true,
  sID: 'APIdentification'
});

/** WS validation **/
var WS_VALIDATION_OFF = 'validationOff';
var WS_VALIDATION_ALL_EDIT = 'allEdits';
var WS_VALIDATION_NEW_ONLY = 'newOnly';
var WS_VALIDATION_FIELD = 'validation';
var CROSS_TEAM_VALIDATION = 'is-cross-team-validation';
var WS_ACCESS_TYPE_MANAGEMENT = 'Management';
var WS_ACCESS_TYPE_TEAM = 'Team';

/** Roles (from WorkspaceMemberRoleConstants.java) **/
var ROLE_TEAM_MEMBER_WS_MANAGER = 1;
var ROLE_TEAM_MEMBER_WS_MEMBER = 2;
var ROLE_TEAM_MEMBER_WS_APPROVER = 3;

/** Other fields **/
var WORKSPACE_ID = 'workspace-id';
var ROLE_ID = 'role-id';
var WORKSPACE_LEAD_ID = 'workspace-lead-id';
var ACCESS_TYPE = 'access-type';
var IS_COMPUTED = 'is-computed';
var IS_PRIVATE = 'is-private';

var WorkspaceConstants = Object.freeze({
  WS_VALIDATION_OFF: WS_VALIDATION_OFF,
  WS_VALIDATION_ALL_EDIT: WS_VALIDATION_ALL_EDIT,
  WS_VALIDATION_NEW_ONLY: WS_VALIDATION_NEW_ONLY,
  WS_VALIDATION_FIELD: WS_VALIDATION_FIELD,
  CROSS_TEAM_VALIDATION: CROSS_TEAM_VALIDATION,
  WS_ACCESS_TYPE_MANAGEMENT: WS_ACCESS_TYPE_MANAGEMENT,
  WS_ACCESS_TYPE_TEAM: WS_ACCESS_TYPE_TEAM,
  ROLE_TEAM_MEMBER_WS_MANAGER: ROLE_TEAM_MEMBER_WS_MANAGER,
  ROLE_TEAM_MEMBER_WS_MEMBER: ROLE_TEAM_MEMBER_WS_MEMBER,
  ROLE_TEAM_MEMBER_WS_APPROVER: ROLE_TEAM_MEMBER_WS_APPROVER,
  WORKSPACE_ID: WORKSPACE_ID,
  ROLE_ID: ROLE_ID,
  WORKSPACE_LEAD_ID: WORKSPACE_LEAD_ID,
  ACCESS_TYPE: ACCESS_TYPE,
  IS_COMPUTED: IS_COMPUTED,
  IS_PRIVATE: IS_PRIVATE
});

/* User constants */
var FIRST_NAME = 'first-name';
var LAST_NAME$1 = 'last-name';
var EMAIL$1 = 'email';

/* Team member constants */
var TEAM_MEMBER_USER_ID = 'user-id';

var UserConstants = Object.freeze({
  FIRST_NAME: FIRST_NAME,
  LAST_NAME: LAST_NAME$1,
  EMAIL: EMAIL$1,
  TEAM_MEMBER_USER_ID: TEAM_MEMBER_USER_ID
});

var logger$9 = null;

/**
 * Additional Info summary section
 * @author Nadejda Mandrecsu
 */

var AdditionalInfo = function (_Component) {
  inherits(AdditionalInfo, _Component);

  function AdditionalInfo(props) {
    classCallCheck(this, AdditionalInfo);

    var _this = possibleConstructorReturn(this, (AdditionalInfo.__proto__ || Object.getPrototypeOf(AdditionalInfo)).call(this, props));

    var Logger = _this.props.Logger;

    logger$9 = new Logger('AP Additional info');
    logger$9.debug('constructor');
    return _this;
  }

  createClass(AdditionalInfo, [{
    key: '_getWorkspaceLeadData',
    value: function _getWorkspaceLeadData() {
      var activityWSManager = this.props.activityWSManager;

      if (!activityWSManager) {
        return null;
      }
      return activityWSManager[UserConstants.FIRST_NAME] + ' ' + activityWSManager[UserConstants.LAST_NAME] + ' ' + activityWSManager[UserConstants.EMAIL];
    }
  }, {
    key: '_buildAdditionalInfo',
    value: function _buildAdditionalInfo() {
      var _props = this.props,
          translate = _props.translate,
          activityWorkspace = _props.activityWorkspace,
          activityFieldsManager = _props.activityFieldsManager,
          buildSimpleField = _props.buildSimpleField,
          fieldNameClass = _props.fieldNameClass,
          fieldValueClass = _props.fieldValueClass,
          activity = _props.activity,
          Logger = _props.Logger;

      var additionalInfo = [];
      var teamName = activityFieldsManager.getValue(activity, ActivityConstants.TEAM, PossibleValuesManager.getOptionTranslation);
      // no need to export repeating translation for the access type through workspaces EP
      var accessType = translate(activityWorkspace[WorkspaceConstants.ACCESS_TYPE]);
      var isComputedTeam = activityWorkspace[WorkspaceConstants.IS_COMPUTED] === true ? translate('Yes') : translate('No');

      // TODO: the right value as defined in AMP-25403 will be shown after AMP-26295.
      additionalInfo.push(buildSimpleField(ActivityConstants.CREATED_BY, true));
      additionalInfo.push(buildSimpleField(ActivityConstants.CREATED_ON, true));
      additionalInfo.push(buildSimpleField(ActivityConstants.MODIFIED_BY, true));
      additionalInfo.push(buildSimpleField(ActivityConstants.MODIFIED_ON, true));
      additionalInfo.push(APField.instance('createdInWorkspace', teamName + ' - ' + accessType, false, false, fieldNameClass, fieldValueClass, translate, Logger));

      additionalInfo.push(APField.instance('workspaceManager', this._getWorkspaceLeadData(), false, false, fieldNameClass, fieldValueClass, translate, Logger));

      additionalInfo.push(APField.instance('computation', isComputedTeam, false, false, fieldNameClass, fieldValueClass, translate, Logger));

      return additionalInfo;
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        this._buildAdditionalInfo()
      );
    }
  }]);
  return AdditionalInfo;
}(Component);

AdditionalInfo.propTypes = {
  activity: PropTypes.object.isRequired,
  activityWorkspace: PropTypes.object.isRequired,
  activityWSManager: PropTypes.object.isRequired,
  buildSimpleField: PropTypes.func.isRequired,
  fieldNameClass: PropTypes.string,
  fieldValueClass: PropTypes.string,
  activityFieldsManager: PropTypes.instanceOf(FieldsManager).isRequired,
  Logger: PropTypes.func.isRequired,
  translate: PropTypes.func.isRequired
};


var AdditionalInfo$1 = Section(AdditionalInfo, {
  SectionTitle: 'additionalInfo'
});

/* eslint-disable class-methods-use-this */

var logger$a = null;

/**
 * Organizations and project ids section
 * @author Nadejda Mandrescu
 */
var APInternalIdsSection = function APInternalIdsSection(isSeparateSection) {
  var _class, _temp;

  return _temp = _class = function (_Component) {
    inherits(_class, _Component);

    function _class(props) {
      classCallCheck(this, _class);

      var _this = possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props));

      var Logger = _this.props.Logger;

      logger$a = new Logger('AP Internal ids');
      logger$a.log('constructor');
      return _this;
    }

    createClass(_class, [{
      key: '_getActInternalIdContent',
      value: function _getActInternalIdContent(actIntId, showInternalId) {
        var intId = void 0;
        if (showInternalId) {
          intId = React.createElement(
            'span',
            { className: styles$1.tableValue },
            actIntId.internal_id
          );
        }
        return React.createElement(
          'div',
          { key: actIntId.organization.value },
          React.createElement(
            'span',
            null,
            '[',
            actIntId.organization.value,
            ']'
          ),
          intId
        );
      }
    }, {
      key: 'buildContent',
      value: function buildContent() {
        var _this2 = this;

        var orgIds = void 0;
        if (this.props.activityFieldsManager.isFieldPathEnabled(ActivityConstants.ACTIVITY_INTERNAL_IDS)) {
          var showInternalId = this.props.activityFieldsManager.isFieldPathEnabled(FieldPathConstants.ACTIVITY_INTERNAL_IDS_INTERNAL_ID_PATH);
          orgIds = [];
          var actIntIds = this.props.activityFieldsManager.getValue(this.props.activity, ActivityConstants.ACTIVITY_INTERNAL_IDS, PossibleValuesManager.getOptionTranslation);
          if (actIntIds && actIntIds.length > 0) {
            actIntIds.forEach(function (actIntId) {
              return orgIds.push(_this2._getActInternalIdContent(actIntId, showInternalId));
            });
          }
        }
        return orgIds && orgIds.length > 0 ? orgIds : null;
      }
    }, {
      key: 'render',
      value: function render() {
        var translate = this.props.translate;

        var content = this.buildContent();
        if (isSeparateSection === true) {
          // make sure content exists before formatting
          var noData = React.createElement(
            'tr',
            null,
            React.createElement(
              'td',
              null,
              translate('No Data')
            )
          );
          var tableContent = content ? Tablify.addRows(content, ActivityConstants.ACTIVITY_INTERNAL_IDS_COLS) : noData;
          content = React.createElement(
            'div',
            null,
            React.createElement(
              'table',
              { className: styles$1.box_table },
              React.createElement(
                'tbody',
                null,
                tableContent
              )
            )
          );
        } else if (content || this.props.showIfEmpty) {
          return React.createElement(
            'div',
            { key: 'InternalIdsFromIdentificationSection' },
            React.createElement(
              'ul',
              null,
              content && content.map(function (orgData) {
                return React.createElement(
                  'li',
                  { key: orgData.key },
                  orgData
                );
              })
            )
          );
        }
        return content;
      }
    }]);
    return _class;
  }(Component), _class.propTypes = {
    activity: PropTypes$1.object.isRequired,
    activityFieldsManager: PropTypes$1.instanceOf(FieldsManager).isRequired,
    showIfEmpty: PropTypes$1.bool, /* only makes sense if isSeparateSection is true, will render
                                  if there are no org ids*/
    Logger: PropTypes$1.func.isRequired,
    translate: PropTypes$1.func.isRequired
  }, _temp;
};
var APInternalIds = Section(APInternalIdsSection(true), { SectionTitle: 'Agency Internal IDs',
  useEncapsulateHeader: true,
  sID: 'APInternalIds'
});

var css$2 = ".APComponents_title__3f7BH {\n  font-weight: bold;\n}\n\n.APComponents_table__1aOvU {\n  width: 50%;\n}\n";
var styles$2 = { "title": "APComponents_title__3f7BH", "table": "APComponents_table__1aOvU" };
styleInject(css$2);

var logger$b = null;

/**
 * @author Gabriel Inchauspe
 */

var APComponents = function (_Component) {
  inherits(APComponents, _Component);
  createClass(APComponents, null, [{
    key: '_extractYear',

    /* eslint-enable react/no-unused-prop-types */

    value: function _extractYear(dateString) {
      return new Date(Date.parse(dateString)).getFullYear();
    }
    /* eslint-disable react/no-unused-prop-types */

  }, {
    key: '_extractGroups',
    value: function _extractGroups(funding, trnType) {
      var groups = [];
      var auxFd = {
        adjType: funding[ActivityConstants.ADJUSTMENT_TYPE],
        trnType: trnType,
        key: funding.id,
        currency: funding[ActivityConstants.CURRENCY],
        amount: funding[ActivityConstants.AMOUNT],
        year: APComponents._extractYear(funding[ActivityConstants.TRANSACTION_DATE])
      };
      var group = groups.find(function (o) {
        return o.adjType.id === auxFd.adjType.id && o.trnType === auxFd.trnType && o.year === auxFd.year;
      });
      if (!group) {
        groups.push(auxFd);
      } else {
        // TODO: we need currency conversion here.
        group.amount += auxFd.amount;
      }
      return groups;
    }
  }, {
    key: '_buildDetail',
    value: function _buildDetail(component, translate, rawNumberToFormattedString) {
      var content = [];
      // TODO: Apply currency conversion to show all fundings in the same currency
      FieldPathConstants.TRANSACTION_TYPES.forEach(function (trnType) {
        var fundings = component[trnType];
        if (fundings && fundings.length) {
          var groups = APComponents._extractGroups(fundings, trnType);
          groups.forEach(function (group) {
            // TODO: Add the current currency.
            // TODO: Translate a single phrase instead of a combination of words (AMPOFFLINE-477).
            content.push(React.createElement(
              'tr',
              null,
              React.createElement(
                'td',
                null,
                group.year
              ),
              React.createElement(
                'td',
                null,
                translate(group.adjType.value + ' ' + group.trnType)
              ),
              React.createElement(
                'td',
                null,
                rawNumberToFormattedString(group.amount)
              )
            ));
          });
        }
      });
      var table = React.createElement(
        'div',
        null,
        React.createElement(
          'table',
          { className: styles$2.table },
          React.createElement(
            'tbody',
            null,
            content
          )
        )
      );
      return table;
    }
  }]);

  function APComponents(props) {
    classCallCheck(this, APComponents);

    var _this = possibleConstructorReturn(this, (APComponents.__proto__ || Object.getPrototypeOf(APComponents)).call(this, props));

    var Logger = _this.props.Logger;

    logger$b = new Logger('AP Components');
    logger$b.debug('constructor');
    return _this;
  }

  createClass(APComponents, [{
    key: '_buildComponents',
    value: function _buildComponents() {
      var _this2 = this;

      var content = [];
      this.props.activity[ActivityConstants.COMPONENTS].forEach(function (component) {
        if (_this2.props.activityFieldsManager.isFieldPathEnabled(ActivityConstants.COMPONENT_TITLE)) {
          content.push(React.createElement(
            'div',
            { className: styles$2.title },
            component[ActivityConstants.COMPONENT_TITLE]
          ));
        }
        if (_this2.props.activityFieldsManager.isFieldPathEnabled(ActivityConstants.COMPONENT_TYPE)) {
          content.push(React.createElement(
            'div',
            { className: styles$2.title },
            component[ActivityConstants.COMPONENT_TYPE].value
          ));
        }
        if (_this2.props.activityFieldsManager.isFieldPathEnabled(ActivityConstants.COMPONENT_DESCRIPTION)) {
          content.push(React.createElement(
            'div',
            null,
            component.description
          ));
        }
        content.push(React.createElement(
          'div',
          null,
          _this2.props.translate('Finance of the component')
        ));
        content.push(APComponents._buildDetail(component, _this2.props.translate, _this2.props.rawNumberToFormattedString));
        content.push(React.createElement('hr', null));
      });
      return content;
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        this._buildComponents()
      );
    }
  }]);
  return APComponents;
}(Component);

APComponents.propTypes = {
  activity: PropTypes.object.isRequired,
  activityFieldsManager: PropTypes.instanceOf(FieldsManager).isRequired,
  Logger: PropTypes.func.isRequired,
  translate: PropTypes.func.isRequired,
  rawNumberToFormattedString: PropTypes.func.isRequired
};


var APComponents$1 = Section(APComponents, { SectionTitle: 'Components'
});

/* eslint-disable class-methods-use-this */

/**
 * Activity Preview Contact section
 *
 * @author Nadejda Mandrescu
 */

var APContact = function (_Component) {
  inherits(APContact, _Component);

  function APContact() {
    classCallCheck(this, APContact);
    return possibleConstructorReturn(this, (APContact.__proto__ || Object.getPrototypeOf(APContact)).apply(this, arguments));
  }

  createClass(APContact, [{
    key: 'getHydratedContacts',
    value: function getHydratedContacts() {
      // Contacts will be hydrated and received by props
      // Both in amp_offline and amp_online so we just need to get
      // Activity Con
      var _props = this.props,
          activity = _props.activity,
          contactsByIds = _props.contactsByIds,
          getActivityContactIds = _props.getActivityContactIds;

      var contactIds = getActivityContactIds(activity);
      var hydratedContactsByIds = {};
      contactIds.forEach(function (cId) {
        var c = contactsByIds[cId] || {};
        if (c[ContactConstants.TMP_HYDRATED]) {
          hydratedContactsByIds[cId] = c;
        }
      });
      return hydratedContactsByIds;
    }
  }, {
    key: 'renderContact',
    value: function renderContact(contact) {
      var _props2 = this.props,
          contactFieldsManager = _props2.contactFieldsManager,
          buildSimpleField = _props2.buildSimpleField;

      return React.createElement(
        'div',
        { key: contact.id, className: styles$1.paddingBottomLarge },
        React.createElement(
          'div',
          null,
          contact[ContactConstants.NAME] + ' ' + contact[ContactConstants.LAST_NAME]
        ),
        contact[ContactConstants.EMAIL].map(function (email) {
          return buildSimpleField(ContactConstants.EMAIL + '~\n          ' + ContactConstants.VALUE, true, null, false, email, contactFieldsManager);
        }),
        contact[ContactConstants.PHONE].map(function (phone) {
          return buildSimpleField(ContactConstants.PHONE + '~\n          ' + ContactConstants.VALUE, true, null, false, phone, contactFieldsManager);
        })
      );
    }
  }, {
    key: 'renderNoContacts',
    value: function renderNoContacts() {
      var _props3 = this.props,
          Logger = _props3.Logger,
          translate = _props3.translate;

      return React.createElement(APField, {
        fieldNameClass: styles$1.hidden, fieldValueClass: styles$1.nodata, fieldClass: styles$1.flex, separator: false,
        value: translate('No Data'), translate: translate, Logger: Logger });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var Logger = this.props.Logger;
      var _props4 = this.props,
          activity = _props4.activity,
          activityFieldsManager = _props4.activityFieldsManager;

      var hydratedContactsByIds = this.getHydratedContacts();
      var contactGroups = FieldPathConstants.ACTIVITY_CONTACT_PATHS.filter(function (acp) {
        return activityFieldsManager.isFieldPathEnabled(acp);
      }).map(function (acp) {
        var title = activityFieldsManager.getFieldLabelTranslation(acp);
        var contacts = (activity[acp] || []).map(function (c) {
          var hydratedC = hydratedContactsByIds[c[ActivityConstants.CONTACT].id];
          return hydratedC ? _this2.renderContact(hydratedC) : null;
        });
        var content = contacts.length ? contacts : _this2.renderNoContacts();
        var contentClass = contacts.length ? styles$1.tableCell : null;

        return React.createElement(
          'div',
          { key: 'contact-group' },
          React.createElement(
            'div',
            { key: 'title', className: styles$1.sector_title },
            title
          ),
          React.createElement(
            'div',
            { key: 'contacts', className: contentClass },
            content
          )
        );
      })
      // TODO tablify must not reverses the order
      .reverse();
      return React.createElement(Tablify, {
        key: 'contact-info', content: contactGroups, columns: ActivityConstants.ACTIVITY_CONTACT_COLS,
        Logger: Logger });
    }
  }]);
  return APContact;
}(Component);

APContact.propTypes = {
  activity: PropTypes$1.object.isRequired,
  activityFieldsManager: PropTypes$1.instanceOf(FieldsManager).isRequired,
  contactFieldsManager: PropTypes$1.instanceOf(FieldsManager),
  contactsByIds: PropTypes$1.object,
  buildSimpleField: PropTypes$1.func.isRequired,
  getActivityContactIds: PropTypes$1.func.isRequired,
  Logger: PropTypes$1.func,
  translate: PropTypes$1.func
};


var APContact$1 = Section(APContact, { SectionTitle: 'Contact Information',
  useEncapsulateHeader: true,
  sID: 'APContact'
});

// Disable rule because it fails with destructing syntax.
/* eslint "import/prefer-default-export": 0*/

var WORKSPACES_GROUPS = [{ type: 'Donor' }, { type: 'Government' }, { type: 'Line Ministries' }, { type: 'Other' }];

var WorkspaceGroupsConstants = Object.freeze({
  WORKSPACES_GROUPS: WORKSPACES_GROUPS
});

var index = {
  TestAPField: TestAPField,
  TestingSection: TestingSection,
  Constants: Constants,
  ActivityConstants: ActivityConstants,
  FeatureManagerConstants: FeatureManagerConstants,
  ErrorConstants: ErrorConstants,
  CurrencyRatesManager: CurrencyRatesManager,
  FieldsManager: FieldsManager,
  FieldPathConstants: FieldPathConstants,
  ValueConstants: ValueConstants,
  ContactConstants: ContactConstants,
  FeatureManager: FeatureManager,
  APLabel: APLabel,
  APField: APField,
  Tablify: Tablify,
  APPercentageField: APPercentageField,
  APPercentageList: APPercentageList,
  Section: Section,
  FundingSummary: FundingSummary$1,
  UIUtils: UIUtils,
  AdditionalInfo: AdditionalInfo$1,
  UserConstants: UserConstants,
  WorkspaceConstants: WorkspaceConstants,
  WorkspaceGroupsConstants: WorkspaceGroupsConstants,
  APIdentification: APIdentification$1,
  APComponents: APComponents$1,
  APInternalIds: APInternalIds,
  APContact: APContact$1
};

export default index;
export { TestAPField, TestingSection, Constants, ActivityConstants, FeatureManagerConstants, ErrorConstants, CurrencyRatesManager, FieldsManager, FieldPathConstants, ValueConstants, PossibleValuesManager, FeatureManager, APLabel, APField, Tablify, APPercentageField, APPercentageList, UIUtils, Section, FundingSummary$1 as FundingSummary, AdditionalInfo$1 as AdditionalInfo, UserConstants, ContactConstants, WorkspaceConstants, WorkspaceGroupsConstants, APIdentification$1 as APIdentification, APInternalIds, APComponents$1 as APComponents, APContact$1 as APContact };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguZXMuanMiLCJzb3VyY2VzIjpbIi4uL25vZGVfbW9kdWxlcy9zdHlsZS1pbmplY3QvZGlzdC9zdHlsZS1pbmplY3QuZXMuanMiLCIuLi9zcmMvYWN0aXZpdHlQcmV2aWV3L2NvbXBvbmVudHMvVGVzdEFQRmllbGQuanMiLCIuLi9zcmMvYWN0aXZpdHlQcmV2aWV3L2NvbXBvbmVudHMvVGVzdGluZ1NlY3Rpb24uanMiLCIuLi9zcmMvdXRpbHMvQ29uc3RhbnRzLmpzIiwiLi4vc3JjL21vZHVsZXMvdXRpbC9GZWF0dXJlTWFuYWdlckNvbnN0YW50cy5qcyIsIi4uL3NyYy91dGlscy9VSVV0aWxzLmpzIiwiLi4vc3JjL21vZHVsZXMvdXRpbC9BY3Rpdml0eUNvbnN0YW50cy5qcyIsIi4uL3NyYy91dGlscy9jb25zdGFudHMvRXJyb3JDb25zdGFudHMuanMiLCIuLi9zcmMvdXRpbHMvVmFsdWVDb25zdGFudHMuanMiLCIuLi9zcmMvdXRpbHMvRmllbGRQYXRoQ29uc3RhbnRzLmpzIiwiLi4vc3JjL21vZHVsZXMvZmllbGQvRmllbGRzTWFuYWdlci5qcyIsIi4uL3NyYy9tb2R1bGVzL3V0aWwvQ29udGFjdENvbnN0YW50cy5qcyIsIi4uL3NyYy9tb2R1bGVzL3V0aWwvQ3VycmVuY3lSYXRlc01hbmFnZXIuanMiLCIuLi9zcmMvbW9kdWxlcy9maWVsZC9Qb3NzaWJsZVZhbHVlc01hbmFnZXIuanMiLCIuLi9zcmMvbW9kdWxlcy91dGlsL0ZlYXR1cmVNYW5hZ2VyLmpzIiwiLi4vc3JjL2FjdGl2aXR5L3ByZXZpZXcvY29tcG9uZW50cy9BUExhYmVsLmpzeCIsIi4uL3NyYy9hY3Rpdml0eS9wcmV2aWV3L2NvbXBvbmVudHMvQVBGaWVsZC5qc3giLCIuLi9zcmMvYWN0aXZpdHkvcHJldmlldy9jb21wb25lbnRzL1RhYmxpZnkuanN4IiwiLi4vc3JjL2FjdGl2aXR5L3ByZXZpZXcvY29tcG9uZW50cy9BUFBlcmNlbnRhZ2VGaWVsZC5qc3giLCIuLi9zcmMvYWN0aXZpdHkvcHJldmlldy9jb21wb25lbnRzL0FQUGVyY2VudGFnZUxpc3QuanN4IiwiLi4vc3JjL2FjdGl2aXR5L3ByZXZpZXcvc2VjdGlvbnMvU2VjdGlvbi5qc3giLCIuLi9zcmMvYWN0aXZpdHkvcHJldmlldy9zZWN0aW9ucy9GdW5kaW5nU3VtbWFyeS5qc3giLCIuLi9zcmMvYWN0aXZpdHkvcHJldmlldy9zZWN0aW9ucy9BUElkZW50aWZpY2F0aW9uLmpzeCIsIi4uL3NyYy91dGlscy9jb25zdGFudHMvV29ya3NwYWNlQ29uc3RhbnRzLmpzIiwiLi4vc3JjL3V0aWxzL2NvbnN0YW50cy9Vc2VyQ29uc3RhbnRzLmpzIiwiLi4vc3JjL2FjdGl2aXR5L3ByZXZpZXcvc2VjdGlvbnMvQWRkaXRpb25hbEluZm8uanN4IiwiLi4vc3JjL2FjdGl2aXR5L3ByZXZpZXcvc2VjdGlvbnMvQVBJbnRlcm5hbElkcy5qc3giLCIuLi9zcmMvYWN0aXZpdHkvcHJldmlldy9zZWN0aW9ucy9BUENvbXBvbmVudHMuanN4IiwiLi4vc3JjL2FjdGl2aXR5L3ByZXZpZXcvc2VjdGlvbnMvQVBDb250YWN0LmpzeCIsIi4uL3NyYy91dGlscy9jb25zdGFudHMvV29ya3NwYWNlR3JvdXBzQ29uc3RhbnRzLmpzIiwiLi4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIHN0eWxlSW5qZWN0KGNzcywgcmVmKSB7XG4gIGlmICggcmVmID09PSB2b2lkIDAgKSByZWYgPSB7fTtcbiAgdmFyIGluc2VydEF0ID0gcmVmLmluc2VydEF0O1xuXG4gIGlmICghY3NzIHx8IHR5cGVvZiBkb2N1bWVudCA9PT0gJ3VuZGVmaW5lZCcpIHsgcmV0dXJuOyB9XG5cbiAgdmFyIGhlYWQgPSBkb2N1bWVudC5oZWFkIHx8IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF07XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gIHN0eWxlLnR5cGUgPSAndGV4dC9jc3MnO1xuXG4gIGlmIChpbnNlcnRBdCA9PT0gJ3RvcCcpIHtcbiAgICBpZiAoaGVhZC5maXJzdENoaWxkKSB7XG4gICAgICBoZWFkLmluc2VydEJlZm9yZShzdHlsZSwgaGVhZC5maXJzdENoaWxkKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaGVhZC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGhlYWQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9XG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgc3R5bGVJbmplY3Q7XG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vLi4vYWN0aXZpdHlBc3NldHMvc3R5bGVzaGVldHMvQWN0aXZpdHlQcmV2aWV3LmNzcyc7XG5cblxuLyoqXG4gKiBTaW1wbGUgRmllbGQgY29tcG9uZW50IHRoYXQgY29uc2lzdHMgb2YgYSBmaWVsZCB0aXRsZSBhbmQgZmllbGQgdmFsdWVcbiAqIEBhdXRob3IgTmFkZWpkYSBNYW5kcmVzY3VcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGVzdEFQRmllbGQgZXh0ZW5kcyBDb21wb25lbnQge1xuICAvKipcbiAgICogR2V0cyBhbiBpbnN0YW5jZSBvZiBTaW1wbGUgRmllbGRcbiAgICogQHBhcmFtIHRybkxhYmVsIHRoZSBsYWJlbCB0byB0cmFuc2xhdGUgYW5kIHVzZSBhcyBhIHRpdGxlLiBUaGlzIGxhYmVsIGlzIGFsc28gdXNlZCBhcyB0aGUgY29tcG9uZW50IGtleS5cbiAgICogQHBhcmFtIHZhbHVlIHRoZSBmaWVsZCB2YWx1ZVxuICAgKiBAcGFyYW0gaW5saW5lIHNob3cgdGl0bGUgYW5kIHZhbHVlIGluIHRoZSBzYW1lIHJvdy5cbiAgICogQHBhcmFtIHNlcGFyYXRvciBhZGQgb3Igbm90IGFuIDxocj4gdGFnLlxuICAgKiBAcGFyYW0gbmFtZUNsYXNzIGNzcyBjbGFzcyBmb3IgdGhlIGZpZWxkIGxhYmVsXG4gICAqIEBwYXJhbSB2YWx1ZUNsYXNzIGNzcyBjbGFzcyBmb3IgdGhlIGZpZWxkIHZhbHVlXG4gICAqIEByZXR1cm4ge1NpbXBsZUZpZWxkfVxuICAgKi9cbiAgc3RhdGljIGluc3RhbmNlKHRybkxhYmVsLCB2YWx1ZSwgaW5saW5lID0gZmFsc2UsIHNlcGFyYXRvciA9IGZhbHNlLCBuYW1lQ2xhc3MsIHZhbHVlQ2xhc3MpIHtcbiAgICByZXR1cm4gKDxUZXN0QVBGaWVsZFxuICAgICAga2V5PXt0cm5MYWJlbH0gdGl0bGU9e3RoaXMucHJvcHMudHJhbnNsYXRlKHRybkxhYmVsKX0gdmFsdWU9e3ZhbHVlfSBpbmxpbmU9e2lubGluZX0gc2VwYXJhdG9yPXtzZXBhcmF0b3J9XG4gICAgICBmaWVsZE5hbWVDbGFzcz17bmFtZUNsYXNzfSBmaWVsZFZhbHVlQ2xhc3M9e3ZhbHVlQ2xhc3N9IC8+KTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMucHJvcHMuYW1wTG9nZ2VyLmxvZygnY29uc3RydWN0b3JlJyk7XG4gICAgdGhpcy51c2VTZXBhcmF0b3IgPSB0aGlzLnByb3BzLnNlcGFyYXRvciAhPT0gZmFsc2U7XG4gICAgdGhpcy5kaXNwbGF5Q2xhc3MgPSB0aGlzLnByb3BzLmZpZWxkQ2xhc3MgfHwgKHRoaXMucHJvcHMuaW5saW5lID09PSB0cnVlID8gc3R5bGVzLmlubGluZSA6IHN0eWxlcy5ibG9jayk7XG4gIH1cblxuICBfZ2V0VmFsdWUoKSB7XG4gICAgY29uc3QgY2xhc3NOYW1lcyA9IGAke3RoaXMucHJvcHMuZmllbGRWYWx1ZUNsYXNzfSAke3RoaXMuZGlzcGxheUNsYXNzfWA7XG4gICAgLy8gVG8gaGFuZGxlIGJvb2xlYW4gZmllbGRzIHdlIGRvbnQgd2FudCB0byBzaG93ICdmYWxzZScgYXMgJ05vIERhdGEnLlxuICAgIGNvbnN0IHZhbHVlID0gKHRoaXMucHJvcHMudmFsdWUgfHwgdGhpcy5wcm9wcy52YWx1ZSA9PT0gZmFsc2UpID8gdGhpcy5wcm9wcy52YWx1ZSA6IHRoaXMucHJvcHMudHJhbnNsYXRlKCdObyBEYXRhJyk7XG4gICAgbGV0IGRpc3BsYXlWYWx1ZTtcbiAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgIGlmICh2YWx1ZVswXSBpbnN0YW5jZW9mIE9iamVjdCkge1xuICAgICAgICBkaXNwbGF5VmFsdWUgPSBbXTtcbiAgICAgICAgdmFsdWUuZm9yRWFjaCh2ID0+IGRpc3BsYXlWYWx1ZS5wdXNoKHYpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRpc3BsYXlWYWx1ZSA9IHZhbHVlLnNvcnQoKS5qb2luKCcsICcpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodHlwZW9mIHZhbHVlID09PSAnYm9vbGVhbicpIHtcbiAgICAgIGRpc3BsYXlWYWx1ZSA9IHZhbHVlID09PSB0cnVlID8gdGhpcy5wcm9wcy50cmFuc2xhdGUoJ1llcycpIDogdGhpcy5wcm9wcy50cmFuc2xhdGUoJ05vJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRpc3BsYXlWYWx1ZSA9ICh0aGlzLnByb3BzLmlubGluZSAmJiB0aGlzLnByb3BzLnZhbHVlIGluc3RhbmNlb2YgU3RyaW5nKSA/IGAke3ZhbHVlfSBgIDogdmFsdWU7XG4gICAgfVxuICAgIGlmICh0aGlzLnByb3BzLnVzZUlubmVySFRNTCkge1xuICAgICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWVzfSBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IGRpc3BsYXlWYWx1ZSB9fSAvPjtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWVzfT57ZGlzcGxheVZhbHVlfTwvZGl2PjtcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgY2xhc3NOYW1lcyA9IGAke3RoaXMucHJvcHMuZmllbGROYW1lQ2xhc3N9ICR7dGhpcy5kaXNwbGF5Q2xhc3N9YDtcbiAgICByZXR1cm4gKDxkaXYgY2xhc3NOYW1lPXt0aGlzLmRpc3BsYXlDbGFzc30+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lc30+e3RoaXMucHJvcHMudGl0bGV9PC9kaXY+XG4gICAgICB7dGhpcy5fZ2V0VmFsdWUoKX1cbiAgICAgIHt0aGlzLnVzZVNlcGFyYXRvciA/IDxociAvPiA6ICcnfVxuICAgIDwvZGl2Pik7XG4gIH1cbn1cblxuVGVzdEFQRmllbGQucHJvcFR5cGVzID0ge1xuICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgdmFsdWU6IFByb3BUeXBlcy5hbnksXG4gIGlubGluZTogUHJvcFR5cGVzLmJvb2wsXG4gIHVzZUlubmVySFRNTDogUHJvcFR5cGVzLmJvb2wsXG4gIGZpZWxkQ2xhc3M6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGZpZWxkTmFtZUNsYXNzOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBmaWVsZFZhbHVlQ2xhc3M6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHNlcGFyYXRvcjogUHJvcFR5cGVzLmJvb2wsXG4gIGFtcExvZ2dlcjogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICB0cmFuc2xhdGU6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWRcbn07XG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBUZXN0QVBGaWVsZCBmcm9tICcuL1Rlc3RBUEZpZWxkJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGVzdGluZ1NlY3Rpb24gZXh0ZW5kcyBDb21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxoMj50ZXN0aW5nIGNvbXBvbmVudDwvaDI+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgdGVzdCB0cmFuc2xhdGlvbjogYERFU0tUT1AgPSB7dGhpcy5wcm9wcy50cmFuc2xhdGUoJ0RFU0tUT1AnKX1gXG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIHRlc3QgQVBGaWVsZDpcbiAgICAgICAgICA8VGVzdEFQRmllbGQgYW1wTG9nZ2VyPXt0aGlzLnByb3BzLmFtcExvZ2dlcn0gdHJhbnNsYXRlPXt0aGlzLnByb3BzLnRyYW5zbGF0ZX0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj4pO1xuICB9XG59XG5UZXN0aW5nU2VjdGlvbi5wcm9wVHlwZXMgPSB7XG4gIGFtcExvZ2dlcjogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICB0cmFuc2xhdGU6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWRcbn07XG4iLCJcbmNvbnN0IEJBU0VfUkVTVF9VUkwgPSAnL3Jlc3QnO1xuXG5cbmNvbnN0IENPTk5FQ1RJT05fVElNRU9VVCA9IDI1MDAwO1xuY29uc3QgQ09OTkVDVElPTl9GT1JDRURfVElNRU9VVCA9IENPTk5FQ1RJT05fVElNRU9VVCArIDUwMDA7XG5jb25zdCBUSU1FT1VUX0NIRUNLX0lOVEVSVkFMID0gNTAwMDtcbmNvbnN0IE1BWF9SRVRSWV9BVEVNUFRTID0gNTtcbmNvbnN0IEVSUk9SU19UT19SRVRSWSA9IFsnRVNPQ0tFVFRJTUVET1VUJywgJ0VUSU1FRE9VVCcsICdFQ09OTlJFU0VUJywgJ0VBSV9BR0FJTiddO1xuY29uc3QgRVJST1JTX05PX0FNUF9TRVJWRVIgPSBbJ0VDT05OUkVGVVNFRCcsICdFTkVUVU5SRUFDSCcsICdFTk9FTlQnLCAnRU5PVEZPVU5EJywgJ0VORVRET1dOJywgJ0VIT1NURE9XTicsXG4gICdFSE9TVFVOUkVBQ0gnLCAnRU5PTkVUJ107XG5jb25zdCBDT05ORUNUSVZJVFlfQ0hFQ0tfSU5URVJWQUwgPSAnNjAwMDAnOyAvLyAxIG1pbnV0ZXNcblxuY29uc3QgV09SS1NQQUNFX1VSTCA9ICcvd29ya3NwYWNlJztcbmNvbnN0IExPR0lOX1VSTCA9ICcvJztcbmNvbnN0IERFU0tUT1BfVVJMID0gJy9kZXNrdG9wJztcbmNvbnN0IERFU0tUT1BfQ1VSUkVOVF9VUkwgPSAnL2Rlc2t0b3AvY3VycmVudCc7XG5jb25zdCBTWU5DVVBfUkVESVJFQ1RfVVJMID0gJy9zeW5jVXAvc3luYyc7XG5jb25zdCBTWU5DVVBfSElTVE9SWV9UQVJHRVQgPSAnaGlzdG9yeSc7XG5jb25zdCBTWU5DVVBfU1VNTUFSWV9VUkwgPSAnL3N5bmNVcFN1bW1hcnknO1xuY29uc3QgQUNUSVZJVFlfUFJFVklFV19VUkwgPSAnL2FjdGl2aXR5L3ByZXZpZXcnO1xuY29uc3QgQUNUSVZJVFlfRURJVF9VUkwgPSAnL2FjdGl2aXR5L2VkaXQnO1xuY29uc3QgVVBEQVRFX1VSTCA9ICcvdXBkYXRlJztcbmNvbnN0IFNFVFVQX1VSTCA9ICcvc2V0dXAnO1xuY29uc3QgU0VUVElOR1NfVVJMID0gJy9zZXR0aW5ncyc7XG5cbmNvbnN0IENPTExFQ1RJT05fVVNFUlMgPSAndXNlcnMnO1xuY29uc3QgQ09MTEVDVElPTl9XT1JLUEFDRVMgPSAnd29ya3NwYWNlcyc7XG5jb25zdCBDT0xMRUNUSU9OX1RFQU1NRU1CRVJTID0gJ3RlYW1tZW1iZXJzJztcbmNvbnN0IENPTExFQ1RJT05fQ0xJRU5UX1NFVFRJTkdTID0gJ2NsaWVudC1zZXR0aW5ncyc7XG5jb25zdCBDT0xMRUNUSU9OX0dMT0JBTF9TRVRUSU5HUyA9ICdnbG9iYWwtc2V0dGluZ3MnO1xuY29uc3QgQ09MTEVDVElPTl9BQ1RJVklUSUVTID0gJ2FjdGl2aXRpZXMnO1xuY29uc3QgQ09MTEVDVElPTl9GSUVMRFMgPSAnZmllbGRzJztcbmNvbnN0IENPTExFQ1RJT05fUE9TU0lCTEVfVkFMVUVTID0gJ3Bvc3NpYmxlLXZhbHVlcyc7XG5jb25zdCBDT0xMRUNUSU9OX1NZTkNVUF9MT0cgPSAnc3luY3VwLWxvZyc7XG5jb25zdCBDT0xMRUNUSU9OX0xBTkdTID0gJ2xhbmd1YWdlcyc7XG5jb25zdCBDT0xMRUNUSU9OX1dTX1NFVFRJTkdTID0gJ3dvcmtzcGFjZS1zZXR0aW5ncyc7XG5jb25zdCBDT0xMRUNUSU9OX0NVUlJFTkNZX1JBVEVTID0gJ2N1cnJlbmN5LXJhdGVzJztcbmNvbnN0IENPTExFQ1RJT05fRkVBVFVSRV9NQU5BR0VSID0gJ2ZlYXR1cmUtbWFuYWdlcic7XG5jb25zdCBDT0xMRUNUSU9OX0NPTlRBQ1RTID0gJ2NvbnRhY3RzJztcbmNvbnN0IENPTExFQ1RJT05fUkVTT1VSQ0VTID0gJ3Jlc291cmNlcyc7XG5jb25zdCBDT0xMRUNUSU9OX1JFUE9TSVRPUlkgPSAncmVwb3NpdG9yeSc7XG5jb25zdCBDT0xMRUNUSU9OX0dBWkVUVEVFUiA9ICdnYXpldHRlZXInO1xuY29uc3QgQ09MTEVDVElPTl9DQUxFTkRBUlMgPSAnY2FsZW5kYXJzJztcbmNvbnN0IENPTExFQ1RJT05fQ0hBTkdFU0VUUyA9ICdjaGFuZ2VzZXRzJztcblxuY29uc3QgR0FaRVRURUVSX0RJU1RBTkNFX0RJVklERSA9IDM7XG5cbmNvbnN0IERCX0ZJTEVfUFJFRklYID0gJ2RhdGFiYXNlJztcbmNvbnN0IERCX0ZJTEVfRVhURU5TSU9OID0gJy5kYic7XG5jb25zdCBEQl9DT01NT05fREFUQVNUT1JFX09QVElPTlMgPSB7IGF1dG9sb2FkOiBmYWxzZSwgY29ycnVwdEFsZXJ0VGhyZXNob2xkOiAwIH07XG5jb25zdCBEQl9BVVRPQ09NUEFDVF9JTlRFUlZBTF9NSUxJU0VDT05EUyA9IDYwMDAwO1xuY29uc3QgREJfREVGQVVMVF9RVUVSWV9MSU1JVCA9IDk5OTk5OTk5OTtcblxuY29uc3QgTEFOR1VBR0VfRU5HTElTSCA9ICdlbic7XG5jb25zdCBGU19MT0NBTEVTX0RJUkVDVE9SWSA9ICdsYW5nJztcbmNvbnN0IExBTkdVQUdFX01BU1RFUl9UUkFOU0xBVElPTlNfRklMRSA9ICdtYXN0ZXItdHJhbnNsYXRpb25zJztcbmNvbnN0IExBTkdVQUdFX1RSQU5TTEFUSU9OU19GSUxFID0gJ3RyYW5zbGF0aW9ucyc7XG5jb25zdCBMQU5HVUFHRV9ORVdfVFJBTlNMQVRJT05TX01VU1RfU1lOQyA9ICdtdXN0X3N5bmNfdHJhbnNsYXRpb24uanNvbic7XG5cbmNvbnN0IEFTQVJfRElSID0gJ2FwcC5hc2FyJztcbmNvbnN0IEFQUF9ESVJFQ1RPUlkgPSAnYXBwJztcbmNvbnN0IFRFU1RfRElSRUNUT1JZID0gJ3Rlc3QnO1xuY29uc3QgU1RBVElDX0RJUiA9ICdzdGF0aWMnO1xuY29uc3QgSU1BR0VTX0RJUiA9ICdpbWFnZXMnO1xuY29uc3QgRE9DX0lDT05TID0gJ2RvYy1pY29ucyc7XG5jb25zdCBEQl9TVEFUSUNfRElSID0gJ2RiJztcbmNvbnN0IE1JR1JBVElPTlNfRElSID0gJ2NoYW5nZWxvZyc7XG5cbmNvbnN0IEhBU0hfSVRFUkFUSU9OUyA9IDEwMDtcbmNvbnN0IERJR0VTVF9BTEdPUklUSE1fU0hBMSA9ICdTSEEtMSc7XG5jb25zdCBESUdFU1RfQUxHT1JJVEhNX1NIQTI1NiA9ICdTSEEtMjU2JztcblxuY29uc3QgQUNUSVZJVFlfRURJVCA9ICdBQ1RJVklUWV9FRElUJztcbmNvbnN0IEFDVElWSVRZX1ZJRVcgPSAnQUNUSVZJVFlfVklFVyc7XG5cbmNvbnN0IFNZTkNVUF9GT1JDRV9EQVlTID0gMTQ7XG5jb25zdCBTWU5DVVBfQkVTVF9CRUZPUkVfREFZUyA9IDc7XG5jb25zdCBTWU5DVVBfTk9fREFURSA9ICcxOTAwLTAxLTAxVDAwOjAwOjAwLjAwMCswMDAwJztcbmNvbnN0IFNZTkNVUF9UWVBFX1RSQU5TTEFUSU9OUyA9ICd0cmFuc2xhdGlvbnMnO1xuY29uc3QgU1lOQ1VQX1RZUEVfVVNFUlMgPSAndXNlcnMnO1xuY29uc3QgU1lOQ1VQX1RZUEVfQVNTRVRTID0gJ2Fzc2V0cyc7XG5jb25zdCBTWU5DVVBfVFlQRV9XT1JLU1BBQ0VTID0gJ3dvcmtzcGFjZXMnO1xuY29uc3QgU1lOQ1VQX1RZUEVfR1MgPSAnZ2xvYmFsLXNldHRpbmdzJztcbmNvbnN0IFNZTkNVUF9UWVBFX0VYQ0hBTkdFX1JBVEVTID0gJ2V4Y2hhbmdlLXJhdGVzJztcbmNvbnN0IFNZTkNVUF9UWVBFX0ZFQVRVUkVfTUFOQUdFUiA9ICdmZWF0dXJlLW1hbmFnZXInO1xuY29uc3QgU1lOQ1VQX1RZUEVfV09SS1NQQUNFX01FTUJFUlMgPSAnd29ya3NwYWNlLW1lbWJlcnMnO1xuY29uc3QgU1lOQ1VQX1RZUEVfQUxMX0ZJRUxEUyA9ICdmaWVsZHMnO1xuY29uc3QgU1lOQ1VQX1RZUEVfQUNUSVZJVElFU19QVUxMID0gJ2FjdGl2aXRpZXMnO1xuY29uc3QgU1lOQ1VQX1RZUEVfQUNUSVZJVElFU19QVVNIID0gJ2FjdGl2aXRpZXMtcHVzaCc7XG5jb25zdCBTWU5DVVBfVFlQRV9BQ1RJVklUWV9GSUVMRFMgPSAnYWN0aXZpdHktZmllbGRzJztcbmNvbnN0IFNZTkNVUF9UWVBFX0FDVElWSVRZX0ZJRUxEU19TVFJVQ1RVUkFMX0NIQU5HRVMgPSAnYWN0aXZpdHktZmllbGRzLXN0cnVjdHVyYWwtY2hhbmdlcyc7XG5jb25zdCBTWU5DVVBfVFlQRV9DT05UQUNUU19QVUxMID0gJ2NvbnRhY3RzJztcbmNvbnN0IFNZTkNVUF9UWVBFX0NPTlRBQ1RTX1BVU0ggPSAnY29udGFjdHMtcHVzaCc7XG5jb25zdCBTWU5DVVBfVFlQRV9BQ1RJVklUWV9QT1NTSUJMRV9WQUxVRVMgPSAnYWN0aXZpdHktcG9zc2libGUtdmFsdWVzLWZpZWxkcyc7XG5jb25zdCBTWU5DVVBfVFlQRV9DT05UQUNUX0ZJRUxEUyA9ICdjb250YWN0LWZpZWxkcyc7XG5jb25zdCBTWU5DVVBfVFlQRV9DT05UQUNUX0ZJRUxEU19TVFJVQ1RVUkFMX0NIQU5HRVMgPSAnY29udGFjdC1maWVsZHMtc3RydWN0dXJhbC1jaGFuZ2VzJztcbmNvbnN0IFNZTkNVUF9UWVBFX0NPTlRBQ1RfUE9TU0lCTEVfVkFMVUVTID0gJ2NvbnRhY3QtcG9zc2libGUtdmFsdWVzLWZpZWxkcyc7XG5jb25zdCBTWU5DVVBfVFlQRV9SRVNPVVJDRVNfUFVMTCA9ICdyZXNvdXJjZXMnO1xuY29uc3QgU1lOQ1VQX1RZUEVfUkVTT1VSQ0VTX1BVU0ggPSAncmVzb3VyY2VzLXB1c2gnO1xuY29uc3QgU1lOQ1VQX1RZUEVfUkVTT1VSQ0VfRklFTERTID0gJ3Jlc291cmNlLWZpZWxkcyc7XG5jb25zdCBTWU5DVVBfVFlQRV9SRVNPVVJDRV9GSUVMRFNfU1RSVUNUVVJBTF9DSEFOR0VTID0gJ3Jlc291cmNlLWZpZWxkcy1zdHJ1Y3R1cmFsLWNoYW5nZXMnO1xuY29uc3QgU1lOQ1VQX1RZUEVfUkVTT1VSQ0VfUE9TU0lCTEVfVkFMVUVTID0gJ3Jlc291cmNlLXBvc3NpYmxlLXZhbHVlcy1maWVsZHMnO1xuY29uc3QgU1lOQ1VQX1RZUEVfQ09NTU9OX1BPU1NJQkxFX1ZBTFVFUyA9ICdjb21tb24tcG9zc2libGUtdmFsdWVzLWZpZWxkcyc7XG5jb25zdCBTWU5DVVBfVFlQRV9XT1JLU1BBQ0VfU0VUVElOR1MgPSAnd29ya3NwYWNlLXNldHRpbmdzJztcbmNvbnN0IFNZTkNVUF9UWVBFX01BUF9USUxFUyA9ICdtYXAtdGlsZXMnO1xuY29uc3QgU1lOQ1VQX1RZUEVfR0FaRVRURUVSID0gJ2xvY2F0b3JzJztcbmNvbnN0IFNZTkNVUF9UWVBFX0NBTEVOREFSUyA9ICdjYWxlbmRhcnMnO1xuXG5jb25zdCBTWU5DVVBfU1RBVFVTX1NVQ0NFU1MgPSAnU1VDQ0VTUyc7XG5jb25zdCBTWU5DVVBfU1RBVFVTX0ZBSUwgPSAnRkFJTCc7XG5jb25zdCBTWU5DVVBfU1RBVFVTX1BBUlRJQUwgPSAnUEFSVElBTCc7XG5jb25zdCBTWU5DVVBfU1RBVFVTX0NBTkNFTEVEID0gJ0NBTkNFTEVEJztcbmNvbnN0IFNZTkNVUF9TWU5DX1JFUVVFU1RFRF9BVCA9ICdzeW5jLWRhdGUnO1xuY29uc3QgU1lOQ1VQX1NZTkNfUkVRVUVTVEVEX0JZID0gJ3JlcXVlc3RlZC1ieSc7XG5jb25zdCBTWU5DVVBfREFURVRJTUVfRklFTEQgPSAndGltZXN0YW1wJztcbmNvbnN0IFNZTkNVUF9ESUZGX0xFRlRPVkVSID0gJ3N5bmN1cC1kaWZmLWxlZnRvdmVyJztcbmNvbnN0IFNZTkNVUF9ERVBFTkRFTkNZX0NIRUNLX0lOVEVSVkFMID0gMTA7XG5jb25zdCBTWU5DVVBfREVUQUlMU19TWU5DRUQgPSAnc3luY2VkJztcbmNvbnN0IFNZTkNVUF9ERVRBSUxTX1VOU1lOQ0VEID0gJ3Vuc3luY2VkJztcbmNvbnN0IFNZTkNVUF9SRVNPVVJDRV9QVUxMX0JBVENIX1NJWkUgPSAxMDA7XG5jb25zdCBTWU5DVVBfQUNUSVZJVElFU19QVUxMX0JBVENIX1NJWkUgPSAxMDA7XG5jb25zdCBTWU5DVVBfQ09OVEFDVFNfUFVMTF9CQVRDSF9TSVpFID0gMTAwO1xuXG5jb25zdCBBQ1RJVklUWV9TVEFUVVNfRFJBRlQgPSAnQUNUSVZJVFlfU1RBVFVTX0RSQUZUJztcbmNvbnN0IEFDVElWSVRZX1NUQVRVU19VTlZBTElEQVRFRCA9ICdBQ1RJVklUWV9TVEFUVVNfVU5WQUxJREFURUQnO1xuY29uc3QgQUNUSVZJVFlfU1RBVFVTX1ZBTElEQVRFRCA9ICdBQ1RJVklUWV9TVEFUVVNfVkFMSURBVEVEJztcblxuY29uc3QgQ1VSUkVOQ1lfSE9VUiA9ICcwMDowMCc7XG5jb25zdCBERUZBVUxUX0NVUlJFTkNZID0gJ1VTRCc7XG5jb25zdCBSQVRFX1NBTUVfQ1VSUkVOQ1kgPSAxO1xuY29uc3QgUkFURV9DVVJSRU5DWV9OT1RfRk9VTkQgPSAxO1xuY29uc3QgQ1VSUkVOQ1lfUEFJUiA9ICdjdXJyZW5jeS1wYWlyJztcbmNvbnN0IFZFUlNJT05fUEFUVEVSTiA9IC8oXFxkKylcXC4oXFxkKykoXFwuKFxcZCspKT8oLVxcdyspPy87XG5jb25zdCBWRVJTSU9OX1BBVFRFUk5fR1JPVVBTX1RPX0VYVFJBQ1QgPSBbMSwgMiwgNCwgNV07XG5jb25zdCBBTVBfQ09VTlRSWV9MT0dPID0gJ2FtcENvdW50cnlGbGFnLnBuZyc7XG5jb25zdCBBU1NFVFNfRElSRUNUT1JZID0gJ2Fzc2V0cyc7XG5jb25zdCBCQVNFXzY0X1BOR19QUkVGSVggPSAnZGF0YTppbWFnZS9wbmc7YmFzZTY0LCc7XG4vLyBIb2xkcyB0aGUgQkFTRTY0IHJlcHJlc2VudGF0aW9uIG9mIGEgYSB0cmFuc3BhcmVudCBpbWFnZSAxeDEgaW4gY2FzZSB3ZSBkb24ndCB5ZXQgaGF2ZSB0aGUgY291bnRyeSBmbGFnXG5jb25zdFxuICBUUkFOU1BBUkVOVF9GTEFHID0gJ2lWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBRUFBQUFCQ0FRQUFBQzFIQXdDQUFBQUMwbEVRVlI0bkdQNnp3QUFBZ2NCQXBvY01YRUFBQUFBU1VWT1JLNUNZSUk9JztcbmNvbnN0IEhFTFBfUERGX0ZJTEVOQU1FID0gJ2FtcC1oZWxwJztcbmNvbnN0IEhFTFBfRElSID0gJ2hlbHAnO1xuY29uc3QgRU5EU19XSVRIX1BVTkNUVUFUSU9OX1JFR0VYID0gL1suIT8sOzpdJC87XG5cbmNvbnN0IE1BUF9USUxFU19ESVIgPSAnbWFwLXRpbGVzJztcbmNvbnN0IFRJTEVTX1pJUF9GSUxFID0gJ21hcC10aWxlcy56aXAnO1xuXG4vKiBlc2xpbnQtZGlzYWJsZSBtYXgtbGVuICovXG5jb25zdCBNQVBfTUFSS0VSX0lNQUdFID0gJ2RhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQmtBQUFBcENBWUFBQURBazRMT0FBQUZnVWxFUVZSNEFhMVhBNUJqV1JUTjJvVzE3ZDNZYVp0cjI5NjJIVXpiRE5wanN6VzI0bVJ0MjhwNDd2N3pxL2JYWnRycC9sV25YcjMzN2ozblBDZTg1TmN5cGdTRmR1Z0NwVzVZb0RBTVJhSU1xUmk2YUtxNUUzWXFEUU8zcUF3alZXckQ4TmNxL1JCcHlrZDhvWlViL2thSnV0b3c4cjFhUDlJSTBXbUxLTElzSnl2MXcva3F3OUNoMk1ZZEIrKzEyT254ZWUvUU13dmY0L0RrL0xmcC9pNG54VFh0T29RNHBXNUFqN3dwaWNpMUE5ZXJkQU4yT0g2NHg4T1NQOWozRnQzYjdhV2tUZy9GbTkxc2lUcmEwZjlvbjVzUXI5SU5lakg2Q1VVVXBhdmpGTnExQitPYWRoeG1uZmE4UmZFbU44Vk5Bc1FoUHFGNTV4SGtNenozalNtQ2hXVTZmNy9YWktOSCs5K2hCTE9IWW96dUtRUHh5TVBVS2tyWC9LMHVXbmZGYUpHUzFRUFJ0WnNPUHRyM05zVzB1eWg2Tk5DT2tVM1l6K2JYYlQzSThHM3hFNUVYTFh0Q1hiYnF3Q085elBRWVBSVFo1dklEWEQ3VSt3N3JGREVvVVVmN2liSElSNHk2YkxWUFhyejhKVlpFcWwxM3RyeHd1ZS91RGl2ZDNma1dSYlM2L0lBMmJJRDR1azBVcEYxTjhxTGxiQmxYczRFZTdITFRmVjFqNTRBUHZPRG5TZk9XQnF0S1Z2amdMS3pGNVlkRWs1ZXdSa0dsSzBpMzNFb2ZmZmM3SFQ1NmpENy82VStxSDNDeDdTQkxObnRINVlJUHZPRG55ZklYWllSVkRQcWdIdExzNUFCSEQzWXpMdWVzcGI3dDc5RlkzNERqTXdyVnJjVHV3bFQ1NVlNUHZPQm5Scko0VlhUZE5uWXVnNXVjSExCakVwdDMwNzAxQTNUcytIRWE3M3U2ZFQzRk5Xd2ZsWTg2ZU1IUGsrWXUraTZwelVwUnJXN1NORGc1SkhSNEthcG1NNVd2MkU4VGZjYjFIb3FxSE1IVSt1V0REN3pnNTRtejUvMkJTbml6aTlUMURnNFFRWExUb0dOQ2tiNnRiMU5VK1FBbEdyMSsrZUFEcnpobi91OFEyWVpoUVZsWjUrQ0FPdHFmYmhtYVVDUzFlek5GVm0yaW1EYlBtUG5nNXdteitnd2grb0hEY2UwZVV0UTZPR0RJeVIwdVVoVXNvTzN2ZkRtbWdPZXpIMG1aTjU5eDdNQmkrK1dETDFnL2VFaVUzYXZsaWRPNjcxYmtMZndidzVYVjJQOFB6bzB5ZHk0dDIvMGV1MzN4WVNPTU9EOGhUZjRDckJ0R01Tb1hmUExjaFgrSjBydVNlUHczTFplSzBqdVBKYll6cmhrSDBpbzdCM2sxNjRoaUd2YXdoT0tNTGtyUUx5VnBaZzhySEZXN0UydUhPTDg4OElCUGxOWjFGUHpzdFNKTTY5NGZXcjZSd3B2Y0pLNjArMEhDSUxUQnpaTEZOZHRBekphb2h6ZTYwVDhxQnp5aDVadU9nNWU3dXdRcHBvZkVtZjIrK0RZdm15U3FHQnVLYWljRjFibFFqaHVIZHZDSU12cDh3aFRUZlp6STdSbGRwd3RTekwrRjErd2tkWjJUQk9XMmdJRjg4UEJUekQvZ3BlUkVBTUVieG5KY2FKSE5IcnB6amkwZ1FDUzZoZGtFZVl0OURGLzJxUGNFQzhSTTI4SHdtcjNzZE55aHQwMGJ5QXV0MmszZ3VmV050Z3RPRU9GR1V3Y1hXTkRiZE5icGdCR3hFdktrT1FzeGl2SngzM2lvdzBWdzVTNlNWVHJwVnExMXlzQTJScDdnVGZQZmt0YzZ6aHRYQkJDK2FkUkxzaGY2c0cyUmZIUFo1RUFjNHNWWjgzeUNOMDBGay80a2dndTQwWlR2SUVtNWcyNHF0VTRLakJyeC9CVFRIOGlmVkFTQUc3Z0tybld4SkRjVTd4OFg2RWNjemhtM282WWljdnNMWFdmaDNDaDFXMGs4eDBuWEYrMGZGeGd0NHBoejhRdnlwaXdDQ0ZLTXFYQ25xWEV4anExMGJlSCtVVUE3K25HNm1kRy9QdTBmM0xnRmNHcmwyczBrTk5qcG1vSjlvNEIyOUNNTzhkTVQ0UTVveDh1aXRGNmZxc3JKT3I4cW53TmJSenY2aFNuRzV3UCs2NEM3aDlscDMwaEtOdEtkV2p0ZGtidVBBMTluSjdUejN6Ui9pYmdBUmJoYjRBbGhhdmNCZWJtVEhjRmwyZnZZRW5XMG94OXhNeEtCUzhidEorS2lFYnE5ekE0UnRoUVhEaFBhMFQ5VEVlNjlnV3Vwd2M2dUJVcGhxdVhnZisvRnJJandlSFFTNC9wZHVNZTVFUlVNSFVkOXh2OFpSOThDeGtTNEYybjNFVXJVWjEwRVlOdzdCV205eDFHaVBzc2kzR2dpR1JES1dSWVpmWGxPTitkZk5iTStHZ0l3WWR3QUFBQUFTVVZPUks1Q1lJST0nO1xuY29uc3QgTUFQX01BUktFUl9TSEFET1cgPSAnZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFDa0FBQUFwQ0FRQUFBQUNhY2g5QUFBQ01VbEVRVlI0QWUzU2hZN2pRQkFFMEFvei9mOS9IVE16aGcxenJkS1VySmJkeCtLZDJuRDhWTnVkZnNML1RoLy8vZHlRTjJUSDZmM3kvQkdwQzM3OXJWK1MrcXFldEJPeEltTlFYTDhKQ0FyMlY0aU1RWEhHTkp4ZUNmWlhoU1JCY1FNZnZrT1dVZHRmemxMZ0FFTm1aRGNtbzJUVm10OE9TTTJlWHhCcDNEakhTTUZ1dHFTN1NibWVtekJpUit4cEtDTlVJUmtka2tZeGhBa3lHb0J2eVFGRUpFZWZ3U21tdkJmSnVKNmFLcUtXbkFrdkdaT2FaWFRVZ0ZxWVVMV05TSFVja1p1UjFISUlpbVVFeHV0Unh3ek9MUk9JRzR2S21DS1F0MzY0bUlsaFN5ekFmMW05bEhaSEpacmxBT01NenRSUmlLaW1wL3JwZEpEYzlBd3J5NXhUWkN0ZTdGSHR1Uzh3SmdlWUdyZXgyOHhOVGQwODZEaWs3dlVNc2NRT2E4eTREb0d0Q0NTa0FLbE53cGdOdHBoanJDNk1JSFVrUjZZV3h4czZTYzV4cW4yMjJtbUNSRnpJdDhsRWRLeCtpa0N0ZzkxcVMyV3B3VmZCZWxKQ2lRSnd2eml4Zkk5Y3haUVdnaVNKZWxLbndCRWxLWXRET2IyTUZiaG1VaWdiUmVRQlYwQ2c0K3FNWFN4WFN5R1VuNFViRjhsKzdxZFNHblRDMFhMQ21haElnVUhMaExPaHBWQ3R3NEN6WVh2TFFXUWJKTm14b0NzT0tBeFNnQkpubzc1YXZvbGtSdzhpSUFGY3NkYzAyZTlpeUNkOHRId21lU1NvS1Rvd0lndnNjU0daVU9BN1B1Q041YjJCWDltUU03UzB3WWhNTlU3NHpnc1BCajNIVTd3Z3VBZm54eGpGUUdCRTZwd04rR2pNRTl6SFk3ekdwOHdWeE1TaFlYOU5YdkVXRDNIYndKZjRnaU80Q0ZJUXhYU2NIMS9UTSswNGtrQmlBQUFBQUVsRlRrU3VRbUNDJztcbmNvbnN0IE1BUF9NQVJLRVJfQ0lSQ0xFX1JFRCA9ICdkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUJRQUFBQVVDQVlBQUFDTmlSME5BQUFBQkdkQlRVRUFBTEdQQy94aEJRQUFBQ0JqU0ZKTkFBQjZKZ0FBZ0lRQUFQb0FBQUNBNkFBQWRUQUFBT3BnQUFBNm1BQUFGM0NjdWxFOEFBQUFCbUpMUjBRQS93RC9BUCtndmFlVEFBQUFCM1JKVFVVSDRnY2JGd29nZW9oaEVBQUFBMWxKUkVGVU9NdWxsYzFySEdVY3h6Ky9aMloyMHpHRTdsdXlRYnlJZGlFeHJlNmFOdlN5U0VCQktCNzFWQUk1bUdKQTlnOFFwUjQ4YVZHSzZLMTYwcHRZRDdXeGg0Q1VrSnJGR3BLeUtXZ1FtblhmYVp0OXlXYWVlVHpzVEV4ajFZTy8wL0RNekdkK2I5L3ZDRUg4Y3U1MWpzUVFrQUVtZ0ZSd1ZnTTJnUkxRTy96d3lhdGZBeUNQZ1VXQVY0QTVZQVpJQW5ad3p3UHF3QXB3QmZnZTZCK0d5aEZZR25nWE9BKzRBQmp6YU40aTRWVUgrQko0RDZpRWgvWVIyR2ZBYXdjZ1kxQlB1RmpEd3dEbzNWMzhkbWNBRlhHQkJXQWNlRE9FaHNCSWtOa0E1dnM0eVFTeDJUd2pwM1BZOGRpZzNtYUwrNnRydEc0czQ5VWJvQlRCTzJYZ2JhQnZYY2c4Qi9BcThEN2c0UHNNUGZNMFR4WGV3czAreng5Mzd2RDc4bzlVTnpiUmprM3FwVHdqTDV5aysrczJYcU1adG1BQytCbllzb05wemdFdXh1QWtFeng1WVo2K1kxTjg1eUsxOVEyTTV3M2FaOXVrcGliSkZoWVpYNWpudHc4K2hHWXJMSDhPV0ZMQmFzeUVmWXZONXJIR1JpbGV1a3lsZUJ1TVFTd0xzU3d3aGtyeE5zVkxsN0hUbzBUelorbDZIc0dZWm9DTUN0Sk5oZ01ZT1oyanZQb1R0ZlVObEcwZDNVMlViVkZiMzZCeWE0MzRtV2xxQ2pvRGFCS1lVTUhTMmdEVzhEQjJQRVpyNis1Qm1ZOEw0M2swUzF1NHlRUytlNHlkVHB1TzFyWkF5dWIvaGdnOTdWSHV0amtlaWFJWXlNa0w5OHhydG9obG5rWHNmLzZXMkRieHpBbTY5UWI5Qnc4UkVYcGE3MWQ3M2FwaW9NMDZJdmp0RHZkWDF4aWZmcEhVMUNTK3AvOEc4ejFOYW1xUzlIU09lemRYMkcrM1FRU0J1c0NtWWlEMGxURDkxbzFsZEtWS3RyRElXUFlVaUdDMHhtZ05Jb3hsVDVFckxMSzdVMmI3MnRKaEthNDRTcFZDTFo4RHZnTGNjTEhIRitheDA2TlVicTNSTEcwQkVNK2NJRDJkWTNlbnpOcEhuOUFzM1VVR2FtbGJJbS80eG53WEFpUEF4NEUyd2ZjaEVTZWFQMHY4ekRSdU1nRkF0OTdnM3MwVnRxOHQwYW5XUWhnQ24wWXRxK0FiMHovc05tUEE1NGZOb2V0NTFCVDQ3akVRb2YvZzRWODlDMG9WK01ZU3RXQXdGWVU4NGpZVkJxNVJCczRqNHJxT1E4cnoyS2sxNkdrUEVUbklDbWdMZkdHSnV1aGpLcjR4eEllaS8yMndBc211MXZaT3QwMVA2MzBKREZhSlhIR1V1cjd2KzMxdERQRklsSmQvdU1yQmlQN3RGeUNRYXZUM3FQYTZWWUZOUjZuU250WjdqbElZNEhna3d1ejFid0g0RTVtQ1hJQkxRNUhuQUFBQUpYUkZXSFJrWVhSbE9tTnlaV0YwWlFBeU1ERTRMVEEzTFRJM1ZESXhPakV3T2pNeUt6QXlPakF3N3E2R253QUFBQ1YwUlZoMFpHRjBaVHB0YjJScFpua0FNakF4T0Mwd055MHlOMVF5TVRveE1Eb3pNaXN3TWpvd01KL3pQaU1BQUFBQVNVVk9SSzVDWUlJPSc7XG5jb25zdCBNQVBfTUFSS0VSX0NJUkNMRV9HUkVFTiA9ICdkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUJRQUFBQVVDQVlBQUFDTmlSME5BQUFBQm1KTFIwUUEvd0QvQVArZ3ZhZVRBQUFBQ1hCSVdYTUFBQXNUQUFBTEV3RUFtcHdZQUFBQUIzUkpUVVVINGdjYkZCZzYvVmhXNEFBQUE1VkpSRUZVT011bGxVRm9IRlVZeDMvdnpleGt1OFZrZHpQcnBncFdOSm9tNEpvME5hU25Ja0hySlJiMVVGQXNYbXEzS2xpdkpxQ0hoSjRxc1FkdG1rc1ZGS1FnWWtUYTBFcnhVQ01oYWQxQ1FyUTBEYmFKMjkxa2Q5MWtKcnM3TTg5RFpwbzBCQlQ4ejJWNDcvRjczL2ZlOS8rZXdGZW05ekNiMVQ4WURRTXRRQnVROElkendEUXdPOUJYWE51OFBqWDZEUUJpSzZ4L01Hb0FCNEczZ0c3QUJIUi8yZ0h5d0Rod0RyZzQwRmVzYm9hS0xiQW00Q1BnQ0JBQjhQQWVpRndpZzE4TCtCTDRlS0N2bU4yWWZ4QjJCa2dERVkvMUx5SjNrQXlaSkVNbUVibURZTnpmTUEwTTl3OUdrd0ZIWkhvUEIybCs2aS9BdzZNeEZLTW50cCt1K2hSeHZRR0FaYWZFUk9rR2x3dFh5VHVGemRHZUFkNGY2Q3RXZzdNNTZLZUpoMGR6ZURmSEgzMmRwTmJJeEdLR1M0V2ZBV2lKTmRPNzYzbTY2bE44ZnZkcmJxN05COUFqd0kvQXFIZzVjeXdNZkFXOEdrVDI0V05wOUtyRzBOUUltZndNanVjQW9FdWRsTm5LaWIxSHFlb1ZUczZkWlpsU0FQMFdlRVA2cGRFZHhONFQyMDlTYTJSb2FvVEo3SFdVVW1oQ1F4TWFTaWttczljWm1ocWhTWCtZQTNYN2NHMEhKUlErbzBYNmRXWUdGOUJWbitMWHhXdGs4alBvMG1DcmRHbVF5Yzh3a2YyTjduZ0hJdWZpV0RXVVVDYlFKdjJpMVFFZTBuWVMxeHY0b3pCM1A4M3Q1SGdPdnkvZndvekVpWGhocklVeW51WHFTcWlFNUg5S0luQXJEdFpmWldwTEZYVGZUZzVnbE4xVmxwMFNMYkZtZEttamxOb1dva3VkcCtOUGtMT1hLTlhLQ0NGd2JhZG1WMWZ1U2QrYmVZbkU4bXdtU2pkNGJsZUtsTm1LNDFXM1NiZEt5bXlscTZtZFgrNU9zbHF6RUVxQUpBOU1TMkRXOXlZQWx3dFh5YnBMbk5oN2xNNWsrL3J1eXNWVkxrSUlPcFB0Zk5ENU5nc3JXUzdjdnJJT1c5ZTROTFJaN2Z5ZFp1ZW5uckFOSEJLSTBLcG5jOHYrazQ2R1BmVHVmb0VubzQvenlNNGt6NWg3ZU9XcGwzaXo3VFVLYXlWT1RRNHpYNzZERkJKZ1ZValJmM3pvNzVuQUtSZDlvNmNsa3B0cjg1eWNPOHVCdW4xMHh6dDROdEcyM3J2c0pjN1Avc0NGMjFmSTJya042MG0ra0lZMkZwSnlvOXY0Qmg4R0RnVVdkRzBIa1hPSmVHRWtnbEt0ZlAvTWhCQUI3RHVocWZSN3A2MnNSR3k0MjI5QngzeWpXeEtKSGdtaEVobzVkNWtGSzR2bDJFaGtBRnRGOHBuUVZQcmQwMWJXVllwb25mSHZEVllKWmJxMm85dUxLN2kyVS9OdmMxd0ljVTRhMnRnN241U3FybExFalRwZXZEU0srQzlQZ0JJcVVWdXFZT2RXN2dIVDB0Qm0wNmVLbFpDVUtDQnFHUFNNZlEvQVB5MVhnMnY2S0lzRkFBQUFBRWxGVGtTdVFtQ0MnO1xuLyogZXNsaW50LWVuYWJsZSBtYXgtbGVuICovXG5jb25zdCBQT0xZR09OX0JBU0VfQ09MT1IgPSAnIzMzODhmZic7XG5cbmNvbnN0IERHX0NPTVBBTllfTkFNRSA9ICdEZXZlbG9wbWVudCBHYXRld2F5JztcbmNvbnN0IERHX0FERFJFU1NfMSA9ICcxMTEwIFZlcm1vbnQgQXZlLCBOVywgU3VpdGUgNTAwJztcbmNvbnN0IERHX0FERFJFU1NfMiA9ICdXYXNoaW5ndG9uLCBEQyAyMDAwNSBVU0EnO1xuY29uc3QgREdfQ09OVEFDVF9JTkZPID0gJ2luZm9AZGV2ZWxvcG1lbnRnYXRld2F5Lm9yZywgVGVsOiArMS4yMDIuNTcyLjkyMDAsIEZheDogKzEgMjAyLjU3Mi45MjkwJztcblxuY29uc3QgTE9HX0RJUiA9ICdsb2dzJztcbmNvbnN0IExPR19GSUxFX05BTUUgPSAnYW1wb2ZmbGluZSc7XG5jb25zdCBMT0dfRklMRV9FWFRFTlNJT04gPSAnbG9nJztcblxuLy8gTWVzc2FnZSBjb25zdGFudHNcbi8vIHRvdGFsIGFtb3VudCBvZiB0aW1lIHRoZSBtZXNzYWdlIHN0YXlzIHZpc2libGVcbmNvbnN0IE1FU1NBR0VfVElNRU9VVCA9IDEwICogMTAwMDtcbi8vIHdoZW4gaXQncyB0aGlzIGFtb3VudCBvZiB0aW1lIGxlZnQsIHdlIG5vZml0eSB0aGUgdXNlciB0aGF0IHRoZSBtZXNzYWdlIGlzIGFib3V0IHRvIGRpc2FwcGVhclxuY29uc3QgTUVTU0FHRV9ESVNBUFBFQVJfVElNRU9VVCA9IE1FU1NBR0VfVElNRU9VVCAvIDU7XG5jb25zdCBNRVNTQUdFX0NIRUNLX0lOVEVSVkFMID0gMTAwO1xuLy8gaG93IGxvbmcgc2hvdWxkIHRoZSBlbnRlci9sZWF2ZSBhbmltYXRpb24gcnVuKG1zKVxuLy8gKGlmIHlvdSBjaGFuZ2UgdGhpcyB5b3UnbGwgd2FubmEgY2hhbmdlIGl0IGluIHN0eWxlLmNzcywgdG9vKVxuY29uc3QgTUVTU0FHRV9BTklNQVRJT05fRFVSQVRJT04gPSA1MDA7XG5cbi8vIHRoaXMgaXMgdGhlIGludGVybmFsIGRhdGUgZm9ybWF0IHVzZWQgdG8gc3RvcmUgYW5kIHN5bmMgdXAgZGF0ZXNcbmNvbnN0IElOVEVSTkFMX0RBVEVfRk9STUFUID0gJ1lZWVktTU0tRERUSEg6bW06c3MuU1NTWic7XG4vLyBjdXJyZW50bHkgc3VwcG9ydGVkIG1heCAmIG1pbiB5ZWFycyBpbiBBTVAsIGkuZS4gZnJvbSAxOTcwLTAxLTAxIHRpbGwgMjA1MC0xMi0zMVxuY29uc3QgTUlOX1NVUFBPUlRFRF9ZRUFSID0gMTk3MDtcbmNvbnN0IE1BWF9TVVBQT1JURURfWUVBUiA9IDIwNTA7XG5cbmNvbnN0IFVQREFURVNfRElSID0gJ3VwZGF0ZXMnO1xuY29uc3QgQ09OVEVOVF9ESVNQT1NJVElPTl9IRUFERVIgPSAnQ29udGVudC1EaXNwb3NpdGlvbic7XG5jb25zdCBVUERBVEVfVE1QX0ZJTEUgPSAnYW1wLW9mZmxpbmUtaW5zdGFsbGVyLnRtcCc7XG5cbmNvbnN0IE9USEVSX0lEID0gOTk5OTk5OTk5O1xuY29uc3QgTlJfU1lOQ19ISVNUT1JZX0VOVFJJRVMgPSAyMDtcbmNvbnN0IE5SX0xPR19GSUxFUyA9IDEwMDtcbi8vIGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0lTT184NjAxI0R1cmF0aW9ucywgZXhhbXBsZTogXCJQMVkyTTEwRFQySDMwTVwiXG5jb25zdCBPTERfU1lOQ19MT0dTX0RVUkFUSU9OX0lTT184NjAxID0gJ1A2TSc7XG5jb25zdCBOUl9PTERfU1lOQ19MT0dTX1RPX0tFRVBfTUlOSU1VTSA9IE5SX1NZTkNfSElTVE9SWV9FTlRSSUVTO1xuXG5jb25zdCBNQVNURVJfQlJBTkNIID0gJ21hc3Rlcic7XG5jb25zdCBERVZFTE9QX0JSQU5DSCA9ICdkZXZlbG9wJztcbmNvbnN0IFJFTEVBU0VfQlJBTkNIX1JFR0VYID0gL3JlbGVhc2VcXC8vO1xuY29uc3QgUkVMRUFTRV9CUkFOQ0hFUyA9IFtNQVNURVJfQlJBTkNILCBSRUxFQVNFX0JSQU5DSF9SRUdFWF07XG5cbmNvbnN0IERJU0FCTEVfQ0hBTkdFTE9HUyA9ICdESVNBQkxFX0NIQU5HRUxPR1MnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5mcmVlemUoe1xuICBCQVNFX1JFU1RfVVJMLFxuICBDT05ORUNUSU9OX1RJTUVPVVQsXG4gIENPTk5FQ1RJT05fRk9SQ0VEX1RJTUVPVVQsXG4gIFRJTUVPVVRfQ0hFQ0tfSU5URVJWQUwsXG4gIE1BWF9SRVRSWV9BVEVNUFRTLFxuICBFUlJPUlNfVE9fUkVUUlksXG4gIEVSUk9SU19OT19BTVBfU0VSVkVSLFxuICBDT05ORUNUSVZJVFlfQ0hFQ0tfSU5URVJWQUwsXG4gIFdPUktTUEFDRV9VUkwsXG4gIExPR0lOX1VSTCxcbiAgREVTS1RPUF9VUkwsXG4gIERFU0tUT1BfQ1VSUkVOVF9VUkwsXG4gIFNZTkNVUF9SRURJUkVDVF9VUkwsXG4gIFNZTkNVUF9ISVNUT1JZX1RBUkdFVCxcbiAgU1lOQ1VQX1NVTU1BUllfVVJMLFxuICBBQ1RJVklUWV9QUkVWSUVXX1VSTCxcbiAgQUNUSVZJVFlfRURJVF9VUkwsXG4gIFVQREFURV9VUkwsXG4gIFNFVFVQX1VSTCxcbiAgU0VUVElOR1NfVVJMLFxuICBDT0xMRUNUSU9OX1VTRVJTLFxuICBDT0xMRUNUSU9OX1dPUktQQUNFUyxcbiAgQ09MTEVDVElPTl9URUFNTUVNQkVSUyxcbiAgQ09MTEVDVElPTl9DTElFTlRfU0VUVElOR1MsXG4gIENPTExFQ1RJT05fR0xPQkFMX1NFVFRJTkdTLFxuICBDT0xMRUNUSU9OX0FDVElWSVRJRVMsXG4gIENPTExFQ1RJT05fRklFTERTLFxuICBDT0xMRUNUSU9OX1BPU1NJQkxFX1ZBTFVFUyxcbiAgQ09MTEVDVElPTl9TWU5DVVBfTE9HLFxuICBDT0xMRUNUSU9OX0xBTkdTLFxuICBDT0xMRUNUSU9OX1dTX1NFVFRJTkdTLFxuICBDT0xMRUNUSU9OX0NVUlJFTkNZX1JBVEVTLFxuICBDT0xMRUNUSU9OX0ZFQVRVUkVfTUFOQUdFUixcbiAgQ09MTEVDVElPTl9DT05UQUNUUyxcbiAgQ09MTEVDVElPTl9SRVNPVVJDRVMsXG4gIENPTExFQ1RJT05fUkVQT1NJVE9SWSxcbiAgQ09MTEVDVElPTl9HQVpFVFRFRVIsXG4gIENPTExFQ1RJT05fQ0FMRU5EQVJTLFxuICBDT0xMRUNUSU9OX0NIQU5HRVNFVFMsXG4gIEdBWkVUVEVFUl9ESVNUQU5DRV9ESVZJREUsXG4gIERCX0ZJTEVfUFJFRklYLFxuICBEQl9GSUxFX0VYVEVOU0lPTixcbiAgREJfQ09NTU9OX0RBVEFTVE9SRV9PUFRJT05TLFxuICBEQl9BVVRPQ09NUEFDVF9JTlRFUlZBTF9NSUxJU0VDT05EUyxcbiAgREJfREVGQVVMVF9RVUVSWV9MSU1JVCxcbiAgTEFOR1VBR0VfRU5HTElTSCxcbiAgRlNfTE9DQUxFU19ESVJFQ1RPUlksXG4gIExBTkdVQUdFX01BU1RFUl9UUkFOU0xBVElPTlNfRklMRSxcbiAgTEFOR1VBR0VfVFJBTlNMQVRJT05TX0ZJTEUsXG4gIExBTkdVQUdFX05FV19UUkFOU0xBVElPTlNfTVVTVF9TWU5DLFxuICBBU0FSX0RJUixcbiAgQVBQX0RJUkVDVE9SWSxcbiAgVEVTVF9ESVJFQ1RPUlksXG4gIFNUQVRJQ19ESVIsXG4gIElNQUdFU19ESVIsXG4gIERPQ19JQ09OUyxcbiAgREJfU1RBVElDX0RJUixcbiAgTUlHUkFUSU9OU19ESVIsXG4gIEhBU0hfSVRFUkFUSU9OUyxcbiAgRElHRVNUX0FMR09SSVRITV9TSEExLFxuICBESUdFU1RfQUxHT1JJVEhNX1NIQTI1NixcbiAgQUNUSVZJVFlfRURJVCxcbiAgQUNUSVZJVFlfVklFVyxcbiAgU1lOQ1VQX0ZPUkNFX0RBWVMsXG4gIFNZTkNVUF9CRVNUX0JFRk9SRV9EQVlTLFxuICBTWU5DVVBfTk9fREFURSxcbiAgU1lOQ1VQX1RZUEVfVFJBTlNMQVRJT05TLFxuICBTWU5DVVBfVFlQRV9VU0VSUyxcbiAgU1lOQ1VQX1RZUEVfQVNTRVRTLFxuICBTWU5DVVBfVFlQRV9XT1JLU1BBQ0VTLFxuICBTWU5DVVBfVFlQRV9HUyxcbiAgU1lOQ1VQX1RZUEVfRVhDSEFOR0VfUkFURVMsXG4gIFNZTkNVUF9UWVBFX0ZFQVRVUkVfTUFOQUdFUixcbiAgU1lOQ1VQX1RZUEVfV09SS1NQQUNFX01FTUJFUlMsXG4gIFNZTkNVUF9UWVBFX0FMTF9GSUVMRFMsXG4gIFNZTkNVUF9UWVBFX0FDVElWSVRJRVNfUFVMTCxcbiAgU1lOQ1VQX1RZUEVfQUNUSVZJVElFU19QVVNILFxuICBTWU5DVVBfVFlQRV9BQ1RJVklUWV9GSUVMRFMsXG4gIFNZTkNVUF9UWVBFX0FDVElWSVRZX0ZJRUxEU19TVFJVQ1RVUkFMX0NIQU5HRVMsXG4gIFNZTkNVUF9UWVBFX0NPTlRBQ1RTX1BVTEwsXG4gIFNZTkNVUF9UWVBFX0NPTlRBQ1RTX1BVU0gsXG4gIFNZTkNVUF9UWVBFX0FDVElWSVRZX1BPU1NJQkxFX1ZBTFVFUyxcbiAgU1lOQ1VQX1RZUEVfQ09OVEFDVF9GSUVMRFMsXG4gIFNZTkNVUF9UWVBFX0NPTlRBQ1RfRklFTERTX1NUUlVDVFVSQUxfQ0hBTkdFUyxcbiAgU1lOQ1VQX1RZUEVfQ09OVEFDVF9QT1NTSUJMRV9WQUxVRVMsXG4gIFNZTkNVUF9UWVBFX1JFU09VUkNFU19QVUxMLFxuICBTWU5DVVBfVFlQRV9SRVNPVVJDRVNfUFVTSCxcbiAgU1lOQ1VQX1RZUEVfUkVTT1VSQ0VfRklFTERTLFxuICBTWU5DVVBfVFlQRV9SRVNPVVJDRV9GSUVMRFNfU1RSVUNUVVJBTF9DSEFOR0VTLFxuICBTWU5DVVBfVFlQRV9SRVNPVVJDRV9QT1NTSUJMRV9WQUxVRVMsXG4gIFNZTkNVUF9UWVBFX0NPTU1PTl9QT1NTSUJMRV9WQUxVRVMsXG4gIFNZTkNVUF9UWVBFX1dPUktTUEFDRV9TRVRUSU5HUyxcbiAgU1lOQ1VQX1RZUEVfTUFQX1RJTEVTLFxuICBTWU5DVVBfVFlQRV9HQVpFVFRFRVIsXG4gIFNZTkNVUF9UWVBFX0NBTEVOREFSUyxcbiAgU1lOQ1VQX1NUQVRVU19TVUNDRVNTLFxuICBTWU5DVVBfU1RBVFVTX0ZBSUwsXG4gIFNZTkNVUF9TVEFUVVNfUEFSVElBTCxcbiAgU1lOQ1VQX1NUQVRVU19DQU5DRUxFRCxcbiAgU1lOQ1VQX1NZTkNfUkVRVUVTVEVEX0FULFxuICBTWU5DVVBfU1lOQ19SRVFVRVNURURfQlksXG4gIFNZTkNVUF9EQVRFVElNRV9GSUVMRCxcbiAgU1lOQ1VQX0RJRkZfTEVGVE9WRVIsXG4gIFNZTkNVUF9ERVBFTkRFTkNZX0NIRUNLX0lOVEVSVkFMLFxuICBTWU5DVVBfREVUQUlMU19TWU5DRUQsXG4gIFNZTkNVUF9ERVRBSUxTX1VOU1lOQ0VELFxuICBTWU5DVVBfUkVTT1VSQ0VfUFVMTF9CQVRDSF9TSVpFLFxuICBTWU5DVVBfQUNUSVZJVElFU19QVUxMX0JBVENIX1NJWkUsXG4gIFNZTkNVUF9DT05UQUNUU19QVUxMX0JBVENIX1NJWkUsXG4gIEFDVElWSVRZX1NUQVRVU19EUkFGVCxcbiAgQUNUSVZJVFlfU1RBVFVTX1VOVkFMSURBVEVELFxuICBBQ1RJVklUWV9TVEFUVVNfVkFMSURBVEVELFxuICBDVVJSRU5DWV9IT1VSLFxuICBERUZBVUxUX0NVUlJFTkNZLFxuICBSQVRFX1NBTUVfQ1VSUkVOQ1ksXG4gIFJBVEVfQ1VSUkVOQ1lfTk9UX0ZPVU5ELFxuICBDVVJSRU5DWV9QQUlSLFxuICBWRVJTSU9OX1BBVFRFUk4sXG4gIFZFUlNJT05fUEFUVEVSTl9HUk9VUFNfVE9fRVhUUkFDVCxcbiAgQU1QX0NPVU5UUllfTE9HTyxcbiAgQVNTRVRTX0RJUkVDVE9SWSxcbiAgQkFTRV82NF9QTkdfUFJFRklYLFxuICBUUkFOU1BBUkVOVF9GTEFHLFxuICBIRUxQX1BERl9GSUxFTkFNRSxcbiAgSEVMUF9ESVIsXG4gIEVORFNfV0lUSF9QVU5DVFVBVElPTl9SRUdFWCxcbiAgTUFQX1RJTEVTX0RJUixcbiAgVElMRVNfWklQX0ZJTEUsXG4gIE1BUF9NQVJLRVJfSU1BR0UsXG4gIE1BUF9NQVJLRVJfU0hBRE9XLFxuICBNQVBfTUFSS0VSX0NJUkNMRV9SRUQsXG4gIE1BUF9NQVJLRVJfQ0lSQ0xFX0dSRUVOLFxuICBQT0xZR09OX0JBU0VfQ09MT1IsXG4gIERHX0NPTVBBTllfTkFNRSxcbiAgREdfQUREUkVTU18xLFxuICBER19BRERSRVNTXzIsXG4gIERHX0NPTlRBQ1RfSU5GTyxcbiAgTE9HX0RJUixcbiAgTE9HX0ZJTEVfTkFNRSxcbiAgTE9HX0ZJTEVfRVhURU5TSU9OLFxuICBNRVNTQUdFX1RJTUVPVVQsXG4gIE1FU1NBR0VfRElTQVBQRUFSX1RJTUVPVVQsXG4gIE1FU1NBR0VfQ0hFQ0tfSU5URVJWQUwsXG4gIE1FU1NBR0VfQU5JTUFUSU9OX0RVUkFUSU9OLFxuICBJTlRFUk5BTF9EQVRFX0ZPUk1BVCxcbiAgTUlOX1NVUFBPUlRFRF9ZRUFSLFxuICBNQVhfU1VQUE9SVEVEX1lFQVIsXG4gIFVQREFURVNfRElSLFxuICBDT05URU5UX0RJU1BPU0lUSU9OX0hFQURFUixcbiAgVVBEQVRFX1RNUF9GSUxFLFxuICBPVEhFUl9JRCxcbiAgTlJfU1lOQ19ISVNUT1JZX0VOVFJJRVMsXG4gIE5SX0xPR19GSUxFUyxcbiAgT0xEX1NZTkNfTE9HU19EVVJBVElPTl9JU09fODYwMSxcbiAgTlJfT0xEX1NZTkNfTE9HU19UT19LRUVQX01JTklNVU0sXG4gIE1BU1RFUl9CUkFOQ0gsXG4gIERFVkVMT1BfQlJBTkNILFxuICBSRUxFQVNFX0JSQU5DSF9SRUdFWCxcbiAgUkVMRUFTRV9CUkFOQ0hFUyxcbiAgRElTQUJMRV9DSEFOR0VMT0dTXG59KTtcbiIsIi8qIGVzbGludC1kaXNhYmxlIG1heC1sZW4gKi9cblxuLyoqXG4gKiBAYXV0aG9yIE5hZGVqZGEgTWFuZHJlc2N1XG4gKi9cblxuY29uc3QgUFVCTElDX1ZJRVdfQ0hBTkdFX1BBU1NXT1JEID0gJy9QVUJMSUMgVklFVy9Mb2dpbiAtIFVzZXIgTWFuYWdlbWVudC9DaGFuZ2UgUGFzc3dvcmQnO1xuY29uc3QgUFVCTElDX1ZJRVdfVFJPVUJMRV9TSUdOX0lOID0gJy9QVUJMSUMgVklFVy9Mb2dpbiAtIFVzZXIgTWFuYWdlbWVudC9Ucm91YmxlIHNpZ25pbmcgaW4nO1xuY29uc3QgQUNUSVZJVFlfREVMSVZFUllfUkFURSA9ICcvUFJPSkVDVCBNQU5BR0VNRU5UL0Z1bmRpbmcvRnVuZGluZyBJbmZvcm1hdGlvbi9EZWxpdmVyeSByYXRlJztcbmNvbnN0IEFDVElWSVRZX1BST0pFQ1RfSURfQU5EX1BMQU5OSU5HID0gJy9QUk9KRUNUIE1BTkFHRU1FTlQvUHJvamVjdCBJRCBhbmQgUGxhbm5pbmcnO1xuY29uc3QgQUNUSVZJVFlfRFVSQVRJT05fT0ZfUFJPSkVDVCA9ICcvUFJPSkVDVCBNQU5BR0VNRU5UL1Byb2plY3QgSUQgYW5kIFBsYW5uaW5nL1BsYW5uaW5nL0R1cmF0aW9uIG9mIFByb2plY3QnO1xuY29uc3QgQUNUSVZJVFlfVEVBTV9MRUFERVIgPSAnL1BST0pFQ1QgTUFOQUdFTUVOVC9Qcm9qZWN0IElEIGFuZCBQbGFubmluZy9JZGVudGlmaWNhdGlvbi9EYXRhIFRlYW0gTGVhZGVyJztcbmNvbnN0IEFDVElWSVRZX1NBTUVfQVNfUFJPUE9TRURfU1RBUlRfREFURSA9XG4gICcvQWN0aXZpdHkgRm9ybS9QbGFubmluZy9BY3R1YWwgU3RhcnQgRGF0ZS9TYW1lIEFzIFByb3Bvc2VkIFN0YXJ0IERhdGUnO1xuY29uc3QgQUNUSVZJVFlfU0FNRV9BU19QUk9QT1NFRF9BUFBST1ZBTF9EQVRFID1cbiAgJy9BY3Rpdml0eSBGb3JtL1BsYW5uaW5nL0FjdHVhbCBBcHByb3ZhbCBEYXRlL1NhbWUgQXMgUHJvcG9zZWQgQXBwcm92YWwgRGF0ZSc7XG5jb25zdCBBQ1RJVklUWV9JREVOVElGSUNBVElPTiA9ICcvQWN0aXZpdHkgRm9ybS9JZGVudGlmaWNhdGlvbic7XG5jb25zdCBBQ1RJVklUWV9MQVNUX1VQREFURURfQlkgPSAnL0FjdGl2aXR5IEZvcm0vSWRlbnRpZmljYXRpb24vQWN0aXZpdHkgTGFzdCBVcGRhdGVkIGJ5JztcbmNvbnN0IEFDVElWSVRZX0xBU1RfVVBEQVRFRF9PTiA9ICcvQWN0aXZpdHkgRm9ybS9JZGVudGlmaWNhdGlvbi9BY3Rpdml0eSBVcGRhdGVkIE9uJztcbmNvbnN0IEFDVElWSVRZX0ZVTkRJTkcgPSAnL0FjdGl2aXR5IEZvcm0vRnVuZGluZyc7XG5jb25zdCBBRl9GVU5ESU5HX0ZVTkRJTkdHUk9VUF9GVU5ESU5HSVRFTSA9IGAke0FDVElWSVRZX0ZVTkRJTkd9L0Z1bmRpbmcgR3JvdXAvRnVuZGluZyBJdGVtYDtcbmNvbnN0IEFDVElWSVRZX1NFQ1RPUlMgPSAnL0FjdGl2aXR5IEZvcm0vU2VjdG9ycyc7XG5jb25zdCBBQ1RJVklUWV9QUklNQVJZX1NFQ1RPUlMgPSAnL0FjdGl2aXR5IEZvcm0vU2VjdG9ycy9QcmltYXJ5IFNlY3RvcnMnO1xuY29uc3QgQUNUSVZJVFlfU0VDT05EQVJZX1NFQ1RPUlMgPSAnL0FjdGl2aXR5IEZvcm0vU2VjdG9ycy9TZWNvbmRhcnkgU2VjdG9ycyc7XG5cbmNvbnN0IEFDVElWSVRZX1NUUlVDVFVSRVMgPSAnL0FjdGl2aXR5IEZvcm0vU3RydWN0dXJlcyc7XG5jb25zdCBBQ1RJVklUWV9TVFJVQ1RVUkVTX0FERF9TVFJVQ1RVUkUgPSBgJHtBQ1RJVklUWV9TVFJVQ1RVUkVTfS9BZGQgU3RydWN0dXJlYDtcblxuY29uc3QgQUNUSVZJVFlfT1JHQU5JWkFUSU9OUyA9ICcvQWN0aXZpdHkgRm9ybS9Pcmdhbml6YXRpb25zJztcbmNvbnN0IEFDVElWSVRZX09SR0FOSVpBVElPTlNfRE9OT1JfT1JHQU5JWkFUSU9OID0gYCR7QUNUSVZJVFlfT1JHQU5JWkFUSU9OU30vRG9ub3IgT3JnYW5pemF0aW9uYDtcbmNvbnN0IEFDVElWSVRZX09SR0FOSVpBVElPTlNfQkVORUZJQ0lBUllfQUdFTkNZID0gYCR7QUNUSVZJVFlfT1JHQU5JWkFUSU9OU30vQmVuZWZpY2lhcnkgQWdlbmN5YDtcbmNvbnN0IEFDVElWSVRZX09SR0FOSVpBVElPTlNfQ09OVFJBQ1RJTkdfQUdFTkNZID0gYCR7QUNUSVZJVFlfT1JHQU5JWkFUSU9OU30vQ29udHJhY3RpbmcgQWdlbmN5YDtcbmNvbnN0IEFDVElWSVRZX09SR0FOSVpBVElPTlNfRVhFQ1VUSU5HX0FHRU5DWSA9IGAke0FDVElWSVRZX09SR0FOSVpBVElPTlN9L0V4ZWN1dGluZyBBZ2VuY3lgO1xuY29uc3QgQUNUSVZJVFlfT1JHQU5JWkFUSU9OU19JTVBMRU1FTlRJTkdfQUdFTkNZID0gYCR7QUNUSVZJVFlfT1JHQU5JWkFUSU9OU30vSW1wbGVtZW50aW5nIEFnZW5jeWA7XG5jb25zdCBBQ1RJVklUWV9PUkdBTklaQVRJT05TX1JFR0lPTkFMX0dST1VQID0gYCR7QUNUSVZJVFlfT1JHQU5JWkFUSU9OU30vUmVnaW9uYWwgR3JvdXBgO1xuY29uc3QgQUNUSVZJVFlfT1JHQU5JWkFUSU9OU19SRUxBVEVEX0dPVkVSTk1FTlRfT1JHQU5JWkFUSU9OID0gYCR7QUNUSVZJVFlfT1JHQU5JWkFUSU9OU30vUmVsYXRlZCBHb3Zlcm5tZW50IE9yZ2FuaXphdGlvbmA7XG5jb25zdCBBQ1RJVklUWV9PUkdBTklaQVRJT05TX1NFQ1RPUl9HUk9VUCA9IGAke0FDVElWSVRZX09SR0FOSVpBVElPTlN9L1NlY3RvciBHcm91cGA7XG5cbmNvbnN0IEFERF9GVU5ESU5HX0FVVE8gPSAnQWRkIEZ1bmRpbmcgSXRlbSBBdXRvbWF0aWNhbGx5JztcbmNvbnN0IEFDVElWSVRZX09SR0FOSVpBVElPTlNfQkVORUZJQ0lBUllfQUdFTkNZX0FERF9GVU5ESU5HX0FVVE8gPSBgJHtBQ1RJVklUWV9PUkdBTklaQVRJT05TX0JFTkVGSUNJQVJZX0FHRU5DWX0vJHtBRERfRlVORElOR19BVVRPfWA7XG5jb25zdCBBQ1RJVklUWV9PUkdBTklaQVRJT05TX0NPTlRSQUNUSU5HX0FHRU5DWV9BRERfRlVORElOR19BVVRPID0gYCR7QUNUSVZJVFlfT1JHQU5JWkFUSU9OU19DT05UUkFDVElOR19BR0VOQ1l9LyR7QUREX0ZVTkRJTkdfQVVUT31gO1xuY29uc3QgQUNUSVZJVFlfT1JHQU5JWkFUSU9OU19ET05PUl9PUkdBTklaQVRJT05fQUREX0ZVTkRJTkdfQVVUTyA9IGAke0FDVElWSVRZX09SR0FOSVpBVElPTlNfRE9OT1JfT1JHQU5JWkFUSU9OfS8ke0FERF9GVU5ESU5HX0FVVE99YDtcbmNvbnN0IEFDVElWSVRZX09SR0FOSVpBVElPTlNfRVhFQ1VUSU5HX0FHRU5DWV9BRERfRlVORElOR19BVVRPID0gYCR7QUNUSVZJVFlfT1JHQU5JWkFUSU9OU19FWEVDVVRJTkdfQUdFTkNZfS8ke0FERF9GVU5ESU5HX0FVVE99YDtcbmNvbnN0IEFDVElWSVRZX09SR0FOSVpBVElPTlNfSU1QTEVNRU5USU5HX0FHRU5DWV9BRERfRlVORElOR19BVVRPID0gYCR7QUNUSVZJVFlfT1JHQU5JWkFUSU9OU19JTVBMRU1FTlRJTkdfQUdFTkNZfS8ke0FERF9GVU5ESU5HX0FVVE99YDtcbmNvbnN0IEFDVElWSVRZX09SR0FOSVpBVElPTlNfUkVHSU9OQUxfR1JPVVBfQUREX0ZVTkRJTkdfQVVUTyA9IGAke0FDVElWSVRZX09SR0FOSVpBVElPTlNfUkVHSU9OQUxfR1JPVVB9LyR7QUREX0ZVTkRJTkdfQVVUT31gO1xuY29uc3QgQUNUSVZJVFlfT1JHQU5JWkFUSU9OU19SRVNQT05TSUJMRV9PUkdBTklaQVRJT05fQUREX0ZVTkRJTkdfQVVUTyA9IGAke0FDVElWSVRZX09SR0FOSVpBVElPTlNfUkVMQVRFRF9HT1ZFUk5NRU5UX09SR0FOSVpBVElPTn0vJHtBRERfRlVORElOR19BVVRPfWA7XG5jb25zdCBBQ1RJVklUWV9PUkdBTklaQVRJT05TX1NFQ1RPUl9HUk9VUF9BRERfRlVORElOR19BVVRPID0gYCR7QUNUSVZJVFlfT1JHQU5JWkFUSU9OU19TRUNUT1JfR1JPVVB9LyR7QUREX0ZVTkRJTkdfQVVUT31gO1xuXG5jb25zdCBBQ1RJVklUWV9GVU5ESU5HX1NFQVJDSCA9IGAke0FDVElWSVRZX0ZVTkRJTkd9L1NlYXJjaCBGdW5kaW5nIE9yZ2FuaXphdGlvbnNgO1xuY29uc3QgQUNUSVZJVFlfRlVORElOR19TRUFSQ0hfT1JHQU5JWkFUSU9OID0gYCR7QUNUSVZJVFlfRlVORElOR19TRUFSQ0h9L1NlYXJjaCBPcmdhbml6YXRpb25zYDtcbmNvbnN0IEFDVElWSVRZX0ZVTkRJTkdfU0VMRUNUX09SR19UWVBFID0gYCR7QUNUSVZJVFlfRlVORElOR19TRUFSQ0h9L1NlbGVjdCBPcmdhbml6YXRpb24gVHlwZWA7XG5cbmNvbnN0IEFDVElWSVRZX1BST0dSQU0gPSAnL0FjdGl2aXR5IEZvcm0vUHJvZ3JhbSc7XG5jb25zdCBBQ1RJVklUWV9QTEFOTklORyA9ICcvQWN0aXZpdHkgRm9ybS9QbGFubmluZyc7XG5cbmNvbnN0IEFDVElWSVRZX0NPTlRBQ1QgPSAnL0FjdGl2aXR5IEZvcm0vQ29udGFjdHMnO1xuY29uc3QgQUNUSVZJVFlfRE9DVU1FTlRTX0FERF9ET0NVTUVOVCA9ICcvQWN0aXZpdHkgRm9ybS9SZWxhdGVkIERvY3VtZW50cy9BZGQgTmV3IERvY3VtZW50JztcbmNvbnN0IEFDVElWSVRZX0RPQ1VNRU5UU19BRERfV0VCTElOSyA9ICcvQWN0aXZpdHkgRm9ybS9SZWxhdGVkIERvY3VtZW50cy9BZGQgTmV3IFdlYiBMaW5rJztcblxuY29uc3QgQUNUSVZJVFlfSVNTVUVTX0FERF9JU1NVRSA9ICcvQWN0aXZpdHkgRm9ybS9Jc3N1ZXMgU2VjdGlvbi9BZGQgSXNzdWUnO1xuY29uc3QgQUNUSVZJVFlfSVNTVUVTX0RFTEVURV9JU1NVRSA9ICcvQWN0aXZpdHkgRm9ybS9Jc3N1ZXMgU2VjdGlvbi9Jc3N1ZS9EZWxldGUgSXRlbSc7XG5jb25zdCBBQ1RJVklUWV9JU1NVRVNfQUREX01FQVNVUkUgPSAnL0FjdGl2aXR5IEZvcm0vSXNzdWVzIFNlY3Rpb24vSXNzdWUvQWRkIEl0ZW0nO1xuY29uc3QgQUNUSVZJVFlfSVNTVUVTX0RFTEVURV9NRUFTVVJFID0gJy9BY3Rpdml0eSBGb3JtL0lzc3VlcyBTZWN0aW9uL0lzc3VlL01lYXN1cmUvRGVsZXRlIEl0ZW0nO1xuY29uc3QgQUNUSVZJVFlfSVNTVUVTX0FERF9BQ1RPUiA9ICcvQWN0aXZpdHkgRm9ybS9Jc3N1ZXMgU2VjdGlvbi9Jc3N1ZS9NZWFzdXJlL0FkZCBJdGVtJztcbmNvbnN0IEFDVElWSVRZX0lTU1VFU19ERUxFVEVfQUNUT1IgPSAnL0FjdGl2aXR5IEZvcm0vSXNzdWVzIFNlY3Rpb24vSXNzdWUvTWVhc3VyZS9BY3Rvci9EZWxldGUgSXRlbSc7XG5cbmNvbnN0IEFDVElWSVRZX0RJU0JVUlNFTUVOVFNfRlVORElOR19GTE9XU19PUkdST0xFX0FERF9JTVBMRU1FTlRJTkdfQUdFTkNZID1cbiAgYCR7QUZfRlVORElOR19GVU5ESU5HR1JPVVBfRlVORElOR0lURU19L0Rpc2J1cnNlbWVudHMvRGlzYnVyc2VtZW50cyBUYWJsZS9GdW5kaW5nIEZsb3dzIE9yZ1JvbGUgU2VsZWN0b3IvQWRkIEltcGxlbWVudGluZyBBZ2VuY3lgO1xuY29uc3QgQUNUSVZJVFlfRElTQlVSU0VNRU5UU19GVU5ESU5HX0ZMT1dTX09SR1JPTEVfQUREX0NPTlRSQUNUSU5HX0FHRU5DWSA9XG4gIGAke0FGX0ZVTkRJTkdfRlVORElOR0dST1VQX0ZVTkRJTkdJVEVNfS9EaXNidXJzZW1lbnRzL0Rpc2J1cnNlbWVudHMgVGFibGUvRnVuZGluZyBGbG93cyBPcmdSb2xlIFNlbGVjdG9yL0FkZCBDb250cmFjdGluZyBBZ2VuY3lgO1xuY29uc3QgQUNUSVZJVFlfRElTQlVSU0VNRU5UU19GVU5ESU5HX0ZMT1dTX09SR1JPTEVfQUREX0JFTkVGSUNJQVJZX0FHRU5DWSA9XG4gIGAke0FGX0ZVTkRJTkdfRlVORElOR0dST1VQX0ZVTkRJTkdJVEVNfS9EaXNidXJzZW1lbnRzL0Rpc2J1cnNlbWVudHMgVGFibGUvRnVuZGluZyBGbG93cyBPcmdSb2xlIFNlbGVjdG9yL0FkZCBCZW5lZmljaWFyeSBBZ2VuY3lgO1xuY29uc3QgQUNUSVZJVFlfRElTQlVSU0VNRU5UU19GVU5ESU5HX0ZMT1dTX09SR1JPTEVfQUREX0RPTk9SX09SR0FOSVpBVElPTiA9XG4gIGAke0FGX0ZVTkRJTkdfRlVORElOR0dST1VQX0ZVTkRJTkdJVEVNfS9EaXNidXJzZW1lbnRzL0Rpc2J1cnNlbWVudHMgVGFibGUvRnVuZGluZyBGbG93cyBPcmdSb2xlIFNlbGVjdG9yL0FkZCBEb25vciBPcmdhbml6YXRpb25gO1xuY29uc3QgQUNUSVZJVFlfRElTQlVSU0VNRU5UU19GVU5ESU5HX0ZMT1dTX09SR1JPTEVfQUREX0VYRUNVVElOR19BR0VOQ1kgPVxuICBgJHtBRl9GVU5ESU5HX0ZVTkRJTkdHUk9VUF9GVU5ESU5HSVRFTX0vRGlzYnVyc2VtZW50cy9EaXNidXJzZW1lbnRzIFRhYmxlL0Z1bmRpbmcgRmxvd3MgT3JnUm9sZSBTZWxlY3Rvci9BZGQgRXhlY3V0aW5nIEFnZW5jeWA7XG5jb25zdCBBQ1RJVklUWV9ESVNCVVJTRU1FTlRTX0ZVTkRJTkdfRkxPV1NfT1JHUk9MRV9BRERfUkVHSU9OQUxfR1JPVVAgPVxuICBgJHtBRl9GVU5ESU5HX0ZVTkRJTkdHUk9VUF9GVU5ESU5HSVRFTX0vRGlzYnVyc2VtZW50cy9EaXNidXJzZW1lbnRzIFRhYmxlL0Z1bmRpbmcgRmxvd3MgT3JnUm9sZSBTZWxlY3Rvci9BZGQgUmVnaW9uYWwgR3JvdXBgO1xuY29uc3QgQUNUSVZJVFlfRElTQlVSU0VNRU5UU19GVU5ESU5HX0ZMT1dTX09SR1JPTEVfQUREX1JFU1BPTlNJQkxFX09SR0FOSVpBVElPTiA9XG4gIGAke0FGX0ZVTkRJTkdfRlVORElOR0dST1VQX0ZVTkRJTkdJVEVNfS9EaXNidXJzZW1lbnRzL0Rpc2J1cnNlbWVudHMgVGFibGUvRnVuZGluZyBGbG93cyBPcmdSb2xlIFNlbGVjdG9yL0FkZCBSZXNwb25zaWJsZSBPcmdhbml6YXRpb25gO1xuY29uc3QgQUNUSVZJVFlfRElTQlVSU0VNRU5UU19GVU5ESU5HX0ZMT1dTX09SR1JPTEVfQUREX1NFQ1RPUl9HUk9VUCA9XG4gIGAke0FGX0ZVTkRJTkdfRlVORElOR0dST1VQX0ZVTkRJTkdJVEVNfS9EaXNidXJzZW1lbnRzL0Rpc2J1cnNlbWVudHMgVGFibGUvRnVuZGluZyBGbG93cyBPcmdSb2xlIFNlbGVjdG9yL0FkZCBTZWN0b3IgR3JvdXBgO1xuXG5jb25zdCBBQ1RJVklUWV9DT01NSVRNRU5UU19GVU5ESU5HX0ZMT1dTX09SR1JPTEVfQUREX0lNUExFTUVOVElOR19BR0VOQ1kgPVxuICBgJHtBRl9GVU5ESU5HX0ZVTkRJTkdHUk9VUF9GVU5ESU5HSVRFTX0vQ29tbWl0bWVudHMvQ29tbWl0bWVudHMgVGFibGUvRnVuZGluZyBGbG93cyBPcmdSb2xlIFNlbGVjdG9yL0FkZCBJbXBsZW1lbnRpbmcgQWdlbmN5YDtcbmNvbnN0IEFDVElWSVRZX0NPTU1JVE1FTlRTX0ZVTkRJTkdfRkxPV1NfT1JHUk9MRV9BRERfQ09OVFJBQ1RJTkdfQUdFTkNZID1cbiAgYCR7QUZfRlVORElOR19GVU5ESU5HR1JPVVBfRlVORElOR0lURU19L0NvbW1pdG1lbnRzL0NvbW1pdG1lbnRzIFRhYmxlL0Z1bmRpbmcgRmxvd3MgT3JnUm9sZSBTZWxlY3Rvci9BZGQgQ29udHJhY3RpbmcgQWdlbmN5YDtcbmNvbnN0IEFDVElWSVRZX0NPTU1JVE1FTlRTX0ZVTkRJTkdfRkxPV1NfT1JHUk9MRV9BRERfQkVORUZJQ0lBUllfQUdFTkNZID1cbiAgYCR7QUZfRlVORElOR19GVU5ESU5HR1JPVVBfRlVORElOR0lURU19L0NvbW1pdG1lbnRzL0NvbW1pdG1lbnRzIFRhYmxlL0Z1bmRpbmcgRmxvd3MgT3JnUm9sZSBTZWxlY3Rvci9BZGQgQmVuZWZpY2lhcnkgQWdlbmN5YDtcbmNvbnN0IEFDVElWSVRZX0NPTU1JVE1FTlRTX0ZVTkRJTkdfRkxPV1NfT1JHUk9MRV9BRERfRE9OT1JfT1JHQU5JWkFUSU9OID1cbiAgYCR7QUZfRlVORElOR19GVU5ESU5HR1JPVVBfRlVORElOR0lURU19L0NvbW1pdG1lbnRzL0NvbW1pdG1lbnRzIFRhYmxlL0Z1bmRpbmcgRmxvd3MgT3JnUm9sZSBTZWxlY3Rvci9BZGQgRG9ub3IgT3JnYW5pemF0aW9uYDtcbmNvbnN0IEFDVElWSVRZX0NPTU1JVE1FTlRTX0ZVTkRJTkdfRkxPV1NfT1JHUk9MRV9BRERfRVhFQ1VUSU5HX0FHRU5DWSA9XG4gIGAke0FGX0ZVTkRJTkdfRlVORElOR0dST1VQX0ZVTkRJTkdJVEVNfS9Db21taXRtZW50cy9Db21taXRtZW50cyBUYWJsZS9GdW5kaW5nIEZsb3dzIE9yZ1JvbGUgU2VsZWN0b3IvQWRkIEV4ZWN1dGluZyBBZ2VuY3lgO1xuY29uc3QgQUNUSVZJVFlfQ09NTUlUTUVOVFNfRlVORElOR19GTE9XU19PUkdST0xFX0FERF9SRUdJT05BTF9HUk9VUCA9XG4gIGAke0FGX0ZVTkRJTkdfRlVORElOR0dST1VQX0ZVTkRJTkdJVEVNfS9Db21taXRtZW50cy9Db21taXRtZW50cyBUYWJsZS9GdW5kaW5nIEZsb3dzIE9yZ1JvbGUgU2VsZWN0b3IvQWRkIFJlZ2lvbmFsIEdyb3VwYDtcbmNvbnN0IEFDVElWSVRZX0NPTU1JVE1FTlRTX0ZVTkRJTkdfRkxPV1NfT1JHUk9MRV9BRERfUkVTUE9OU0lCTEVfT1JHQU5JWkFUSU9OID1cbiAgYCR7QUZfRlVORElOR19GVU5ESU5HR1JPVVBfRlVORElOR0lURU19L0NvbW1pdG1lbnRzL0NvbW1pdG1lbnRzIFRhYmxlL0Z1bmRpbmcgRmxvd3MgT3JnUm9sZSBTZWxlY3Rvci9BZGQgUmVzcG9uc2libGUgT3JnYW5pemF0aW9uYDtcbmNvbnN0IEFDVElWSVRZX0NPTU1JVE1FTlRTX0ZVTkRJTkdfRkxPV1NfT1JHUk9MRV9BRERfU0VDVE9SX0dST1VQID1cbiAgYCR7QUZfRlVORElOR19GVU5ESU5HR1JPVVBfRlVORElOR0lURU19L0NvbW1pdG1lbnRzL0NvbW1pdG1lbnRzIFRhYmxlL0Z1bmRpbmcgRmxvd3MgT3JnUm9sZSBTZWxlY3Rvci9BZGQgU2VjdG9yIEdyb3VwYDtcblxuY29uc3QgQUNUSVZJVFlfRVhQRU5ESVRVUkVTX0ZVTkRJTkdfRkxPV1NfT1JHUk9MRV9BRERfSU1QTEVNRU5USU5HX0FHRU5DWSA9XG4gIGAke0FGX0ZVTkRJTkdfRlVORElOR0dST1VQX0ZVTkRJTkdJVEVNfS9FeHBlbmRpdHVyZXMvRXhwZW5kaXR1cmVzIFRhYmxlL0Z1bmRpbmcgRmxvd3MgT3JnUm9sZSBTZWxlY3Rvci9BZGQgSW1wbGVtZW50aW5nIEFnZW5jeWA7XG5jb25zdCBBQ1RJVklUWV9FWFBFTkRJVFVSRVNfRlVORElOR19GTE9XU19PUkdST0xFX0FERF9DT05UUkFDVElOR19BR0VOQ1kgPVxuICBgJHtBRl9GVU5ESU5HX0ZVTkRJTkdHUk9VUF9GVU5ESU5HSVRFTX0vRXhwZW5kaXR1cmVzL0V4cGVuZGl0dXJlcyBUYWJsZS9GdW5kaW5nIEZsb3dzIE9yZ1JvbGUgU2VsZWN0b3IvQWRkIENvbnRyYWN0aW5nIEFnZW5jeWA7XG5jb25zdCBBQ1RJVklUWV9FWFBFTkRJVFVSRVNfRlVORElOR19GTE9XU19PUkdST0xFX0FERF9CRU5FRklDSUFSWV9BR0VOQ1kgPVxuICBgJHtBRl9GVU5ESU5HX0ZVTkRJTkdHUk9VUF9GVU5ESU5HSVRFTX0vRXhwZW5kaXR1cmVzL0V4cGVuZGl0dXJlcyBUYWJsZS9GdW5kaW5nIEZsb3dzIE9yZ1JvbGUgU2VsZWN0b3IvQWRkIEJlbmVmaWNpYXJ5IEFnZW5jeWA7XG5jb25zdCBBQ1RJVklUWV9FWFBFTkRJVFVSRVNfRlVORElOR19GTE9XU19PUkdST0xFX0FERF9ET05PUl9PUkdBTklaQVRJT04gPVxuICBgJHtBRl9GVU5ESU5HX0ZVTkRJTkdHUk9VUF9GVU5ESU5HSVRFTX0vRXhwZW5kaXR1cmVzL0V4cGVuZGl0dXJlcyBUYWJsZS9GdW5kaW5nIEZsb3dzIE9yZ1JvbGUgU2VsZWN0b3IvQWRkIERvbm9yIE9yZ2FuaXphdGlvbmA7XG5jb25zdCBBQ1RJVklUWV9FWFBFTkRJVFVSRVNfRlVORElOR19GTE9XU19PUkdST0xFX0FERF9FWEVDVVRJTkdfQUdFTkNZID1cbiAgYCR7QUZfRlVORElOR19GVU5ESU5HR1JPVVBfRlVORElOR0lURU19L0V4cGVuZGl0dXJlcy9FeHBlbmRpdHVyZXMgVGFibGUvRnVuZGluZyBGbG93cyBPcmdSb2xlIFNlbGVjdG9yL0FkZCBFeGVjdXRpbmcgQWdlbmN5YDtcbmNvbnN0IEFDVElWSVRZX0VYUEVORElUVVJFU19GVU5ESU5HX0ZMT1dTX09SR1JPTEVfQUREX1JFR0lPTkFMX0dST1VQID1cbiAgYCR7QUZfRlVORElOR19GVU5ESU5HR1JPVVBfRlVORElOR0lURU19L0V4cGVuZGl0dXJlcy9FeHBlbmRpdHVyZXMgVGFibGUvRnVuZGluZyBGbG93cyBPcmdSb2xlIFNlbGVjdG9yL0FkZCBSZWdpb25hbCBHcm91cGA7XG5jb25zdCBBQ1RJVklUWV9FWFBFTkRJVFVSRVNfRlVORElOR19GTE9XU19PUkdST0xFX0FERF9SRVNQT05TSUJMRV9PUkdBTklaQVRJT04gPVxuICBgJHtBRl9GVU5ESU5HX0ZVTkRJTkdHUk9VUF9GVU5ESU5HSVRFTX0vRXhwZW5kaXR1cmVzL0V4cGVuZGl0dXJlcyBUYWJsZS9GdW5kaW5nIEZsb3dzIE9yZ1JvbGUgU2VsZWN0b3IvQWRkIFJlc3BvbnNpYmxlIE9yZ2FuaXphdGlvbmA7XG5jb25zdCBBQ1RJVklUWV9FWFBFTkRJVFVSRVNfRlVORElOR19GTE9XU19PUkdST0xFX0FERF9TRUNUT1JfR1JPVVAgPVxuICBgJHtBRl9GVU5ESU5HX0ZVTkRJTkdHUk9VUF9GVU5ESU5HSVRFTX0vRXhwZW5kaXR1cmVzL0V4cGVuZGl0dXJlcyBUYWJsZS9GdW5kaW5nIEZsb3dzIE9yZ1JvbGUgU2VsZWN0b3IvQWRkIFNlY3RvciBHcm91cGA7XG5cbmNvbnN0IE1URUZfUFJPSkVDVElPTlMgPSBgJHtBRl9GVU5ESU5HX0ZVTkRJTkdHUk9VUF9GVU5ESU5HSVRFTX0vTVRFRiBQcm9qZWN0aW9uc2A7XG5jb25zdCBNVEVGX1BST0pFQ1RJT05TX0FNT1VOVCA9XG4gIGAke0FGX0ZVTkRJTkdfRlVORElOR0dST1VQX0ZVTkRJTkdJVEVNfS9NVEVGIFByb2plY3Rpb25zL01URUYgUHJvamVjdGlvbnMgVGFibGUvQW1vdW50YDtcbmNvbnN0IE1URUZfUFJPSkVDVElPTlNfQ1VSUkVOQ1kgPVxuICBgJHtBRl9GVU5ESU5HX0ZVTkRJTkdHUk9VUF9GVU5ESU5HSVRFTX0vTVRFRiBQcm9qZWN0aW9ucy9NVEVGIFByb2plY3Rpb25zIFRhYmxlL0N1cnJlbmN5YDtcbmNvbnN0IE1URUZfUFJPSkVDVElPTlNfUFJPSkVDVElPTiA9XG4gIGAke0FGX0ZVTkRJTkdfRlVORElOR0dST1VQX0ZVTkRJTkdJVEVNfS9NVEVGIFByb2plY3Rpb25zL01URUYgUHJvamVjdGlvbnMgVGFibGUvTVRFRiBQcm9qZWN0aW9uYDtcbmNvbnN0IE1URUZfUFJPSkVDVElPTlNfREFURSA9XG4gIGAke0FGX0ZVTkRJTkdfRlVORElOR0dST1VQX0ZVTkRJTkdJVEVNfS9NVEVGIFByb2plY3Rpb25zL01URUYgUHJvamVjdGlvbnMgVGFibGUvUHJvamVjdGlvbiBEYXRlYDtcblxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuZnJlZXplKHtcbiAgUFVCTElDX1ZJRVdfQ0hBTkdFX1BBU1NXT1JELFxuICBQVUJMSUNfVklFV19UUk9VQkxFX1NJR05fSU4sXG4gIEFDVElWSVRZX0RFTElWRVJZX1JBVEUsXG4gIEFDVElWSVRZX1BST0pFQ1RfSURfQU5EX1BMQU5OSU5HLFxuICBBQ1RJVklUWV9EVVJBVElPTl9PRl9QUk9KRUNULFxuICBBQ1RJVklUWV9URUFNX0xFQURFUixcbiAgQUNUSVZJVFlfU0FNRV9BU19QUk9QT1NFRF9TVEFSVF9EQVRFLFxuICBBQ1RJVklUWV9TQU1FX0FTX1BST1BPU0VEX0FQUFJPVkFMX0RBVEUsXG4gIEFDVElWSVRZX0lERU5USUZJQ0FUSU9OLFxuICBBQ1RJVklUWV9MQVNUX1VQREFURURfQlksXG4gIEFDVElWSVRZX0xBU1RfVVBEQVRFRF9PTixcbiAgQUNUSVZJVFlfU0VDVE9SUyxcbiAgQUNUSVZJVFlfUFJJTUFSWV9TRUNUT1JTLFxuICBBQ1RJVklUWV9TRUNPTkRBUllfU0VDVE9SUyxcbiAgQUNUSVZJVFlfU1RSVUNUVVJFUyxcbiAgQUNUSVZJVFlfU1RSVUNUVVJFU19BRERfU1RSVUNUVVJFLFxuICBBQ1RJVklUWV9PUkdBTklaQVRJT05TLFxuICBBQ1RJVklUWV9PUkdBTklaQVRJT05TX0RPTk9SX09SR0FOSVpBVElPTixcbiAgQUNUSVZJVFlfT1JHQU5JWkFUSU9OU19CRU5FRklDSUFSWV9BR0VOQ1ksXG4gIEFDVElWSVRZX09SR0FOSVpBVElPTlNfQ09OVFJBQ1RJTkdfQUdFTkNZLFxuICBBQ1RJVklUWV9PUkdBTklaQVRJT05TX0VYRUNVVElOR19BR0VOQ1ksXG4gIEFDVElWSVRZX09SR0FOSVpBVElPTlNfSU1QTEVNRU5USU5HX0FHRU5DWSxcbiAgQUNUSVZJVFlfT1JHQU5JWkFUSU9OU19SRUdJT05BTF9HUk9VUCxcbiAgQUNUSVZJVFlfT1JHQU5JWkFUSU9OU19SRUxBVEVEX0dPVkVSTk1FTlRfT1JHQU5JWkFUSU9OLFxuICBBQ1RJVklUWV9PUkdBTklaQVRJT05TX1NFQ1RPUl9HUk9VUCxcbiAgQUNUSVZJVFlfT1JHQU5JWkFUSU9OU19CRU5FRklDSUFSWV9BR0VOQ1lfQUREX0ZVTkRJTkdfQVVUTyxcbiAgQUNUSVZJVFlfT1JHQU5JWkFUSU9OU19DT05UUkFDVElOR19BR0VOQ1lfQUREX0ZVTkRJTkdfQVVUTyxcbiAgQUNUSVZJVFlfT1JHQU5JWkFUSU9OU19ET05PUl9PUkdBTklaQVRJT05fQUREX0ZVTkRJTkdfQVVUTyxcbiAgQUNUSVZJVFlfT1JHQU5JWkFUSU9OU19FWEVDVVRJTkdfQUdFTkNZX0FERF9GVU5ESU5HX0FVVE8sXG4gIEFDVElWSVRZX09SR0FOSVpBVElPTlNfSU1QTEVNRU5USU5HX0FHRU5DWV9BRERfRlVORElOR19BVVRPLFxuICBBQ1RJVklUWV9PUkdBTklaQVRJT05TX1JFR0lPTkFMX0dST1VQX0FERF9GVU5ESU5HX0FVVE8sXG4gIEFDVElWSVRZX09SR0FOSVpBVElPTlNfUkVTUE9OU0lCTEVfT1JHQU5JWkFUSU9OX0FERF9GVU5ESU5HX0FVVE8sXG4gIEFDVElWSVRZX09SR0FOSVpBVElPTlNfU0VDVE9SX0dST1VQX0FERF9GVU5ESU5HX0FVVE8sXG4gIEFDVElWSVRZX0ZVTkRJTkdfU0VBUkNILFxuICBBQ1RJVklUWV9GVU5ESU5HX1NFQVJDSF9PUkdBTklaQVRJT04sXG4gIEFDVElWSVRZX0ZVTkRJTkdfU0VMRUNUX09SR19UWVBFLFxuICBBQ1RJVklUWV9QUk9HUkFNLFxuICBBQ1RJVklUWV9QTEFOTklORyxcbiAgQUNUSVZJVFlfQ09OVEFDVCxcbiAgQUNUSVZJVFlfRE9DVU1FTlRTX0FERF9ET0NVTUVOVCxcbiAgQUNUSVZJVFlfRE9DVU1FTlRTX0FERF9XRUJMSU5LLFxuICBBQ1RJVklUWV9JU1NVRVNfQUREX0lTU1VFLFxuICBBQ1RJVklUWV9JU1NVRVNfREVMRVRFX0lTU1VFLFxuICBBQ1RJVklUWV9JU1NVRVNfQUREX01FQVNVUkUsXG4gIEFDVElWSVRZX0lTU1VFU19ERUxFVEVfTUVBU1VSRSxcbiAgQUNUSVZJVFlfSVNTVUVTX0FERF9BQ1RPUixcbiAgQUNUSVZJVFlfSVNTVUVTX0RFTEVURV9BQ1RPUixcbiAgQUNUSVZJVFlfRElTQlVSU0VNRU5UU19GVU5ESU5HX0ZMT1dTX09SR1JPTEVfQUREX0lNUExFTUVOVElOR19BR0VOQ1ksXG4gIEFDVElWSVRZX0RJU0JVUlNFTUVOVFNfRlVORElOR19GTE9XU19PUkdST0xFX0FERF9DT05UUkFDVElOR19BR0VOQ1ksXG4gIEFDVElWSVRZX0RJU0JVUlNFTUVOVFNfRlVORElOR19GTE9XU19PUkdST0xFX0FERF9CRU5FRklDSUFSWV9BR0VOQ1ksXG4gIEFDVElWSVRZX0RJU0JVUlNFTUVOVFNfRlVORElOR19GTE9XU19PUkdST0xFX0FERF9ET05PUl9PUkdBTklaQVRJT04sXG4gIEFDVElWSVRZX0RJU0JVUlNFTUVOVFNfRlVORElOR19GTE9XU19PUkdST0xFX0FERF9FWEVDVVRJTkdfQUdFTkNZLFxuICBBQ1RJVklUWV9ESVNCVVJTRU1FTlRTX0ZVTkRJTkdfRkxPV1NfT1JHUk9MRV9BRERfUkVHSU9OQUxfR1JPVVAsXG4gIEFDVElWSVRZX0RJU0JVUlNFTUVOVFNfRlVORElOR19GTE9XU19PUkdST0xFX0FERF9SRVNQT05TSUJMRV9PUkdBTklaQVRJT04sXG4gIEFDVElWSVRZX0RJU0JVUlNFTUVOVFNfRlVORElOR19GTE9XU19PUkdST0xFX0FERF9TRUNUT1JfR1JPVVAsXG4gIEFDVElWSVRZX0NPTU1JVE1FTlRTX0ZVTkRJTkdfRkxPV1NfT1JHUk9MRV9BRERfSU1QTEVNRU5USU5HX0FHRU5DWSxcbiAgQUNUSVZJVFlfQ09NTUlUTUVOVFNfRlVORElOR19GTE9XU19PUkdST0xFX0FERF9DT05UUkFDVElOR19BR0VOQ1ksXG4gIEFDVElWSVRZX0NPTU1JVE1FTlRTX0ZVTkRJTkdfRkxPV1NfT1JHUk9MRV9BRERfQkVORUZJQ0lBUllfQUdFTkNZLFxuICBBQ1RJVklUWV9DT01NSVRNRU5UU19GVU5ESU5HX0ZMT1dTX09SR1JPTEVfQUREX0RPTk9SX09SR0FOSVpBVElPTixcbiAgQUNUSVZJVFlfQ09NTUlUTUVOVFNfRlVORElOR19GTE9XU19PUkdST0xFX0FERF9FWEVDVVRJTkdfQUdFTkNZLFxuICBBQ1RJVklUWV9DT01NSVRNRU5UU19GVU5ESU5HX0ZMT1dTX09SR1JPTEVfQUREX1JFR0lPTkFMX0dST1VQLFxuICBBQ1RJVklUWV9DT01NSVRNRU5UU19GVU5ESU5HX0ZMT1dTX09SR1JPTEVfQUREX1JFU1BPTlNJQkxFX09SR0FOSVpBVElPTixcbiAgQUNUSVZJVFlfQ09NTUlUTUVOVFNfRlVORElOR19GTE9XU19PUkdST0xFX0FERF9TRUNUT1JfR1JPVVAsXG4gIEFDVElWSVRZX0VYUEVORElUVVJFU19GVU5ESU5HX0ZMT1dTX09SR1JPTEVfQUREX0lNUExFTUVOVElOR19BR0VOQ1ksXG4gIEFDVElWSVRZX0VYUEVORElUVVJFU19GVU5ESU5HX0ZMT1dTX09SR1JPTEVfQUREX0NPTlRSQUNUSU5HX0FHRU5DWSxcbiAgQUNUSVZJVFlfRVhQRU5ESVRVUkVTX0ZVTkRJTkdfRkxPV1NfT1JHUk9MRV9BRERfQkVORUZJQ0lBUllfQUdFTkNZLFxuICBBQ1RJVklUWV9FWFBFTkRJVFVSRVNfRlVORElOR19GTE9XU19PUkdST0xFX0FERF9ET05PUl9PUkdBTklaQVRJT04sXG4gIEFDVElWSVRZX0VYUEVORElUVVJFU19GVU5ESU5HX0ZMT1dTX09SR1JPTEVfQUREX0VYRUNVVElOR19BR0VOQ1ksXG4gIEFDVElWSVRZX0VYUEVORElUVVJFU19GVU5ESU5HX0ZMT1dTX09SR1JPTEVfQUREX1JFR0lPTkFMX0dST1VQLFxuICBBQ1RJVklUWV9FWFBFTkRJVFVSRVNfRlVORElOR19GTE9XU19PUkdST0xFX0FERF9SRVNQT05TSUJMRV9PUkdBTklaQVRJT04sXG4gIEFDVElWSVRZX0VYUEVORElUVVJFU19GVU5ESU5HX0ZMT1dTX09SR1JPTEVfQUREX1NFQ1RPUl9HUk9VUCxcbiAgTVRFRl9QUk9KRUNUSU9OUyxcbiAgTVRFRl9QUk9KRUNUSU9OU19BTU9VTlQsXG4gIE1URUZfUFJPSkVDVElPTlNfQ1VSUkVOQ1ksXG4gIE1URUZfUFJPSkVDVElPTlNfUFJPSkVDVElPTixcbiAgTVRFRl9QUk9KRUNUSU9OU19EQVRFLFxufSk7XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBVSVV0aWxzIHtcblxuICBzdGF0aWMgc3RyaW5nVG9JZChzdHJpbmc6IHN0cmluZykge1xuICAgIHN0cmluZyA9IHN0cmluZyB8fCAnJztcbiAgICBsZXQgaGFzaCA9IDUzODE7XG4gICAgZm9yIChsZXQgaSA9IHN0cmluZy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgLyogZXNsaW50LWRpc2FibGUgbm8tYml0d2lzZSAqL1xuICAgICAgaGFzaCA9IChoYXNoICogMzMpIF4gc3RyaW5nLmNoYXJDb2RlQXQoaSk7XG4gICAgfVxuICAgIHJldHVybiBoYXNoID4+PiAwO1xuICAgIC8qIGVzbGludC1lbmFibGUgbm8tYml0d2lzZSAqL1xuICB9XG5cbiAgLyoqXG4gICAqIEdlbmVyYXRlcyBhIHVuaXF1ZSBpZCBmb3IgZWFjaCBjYWxsLCBvdmVyIHRoZSBzYW1lIHN0cmluZ1xuICAgKiBAcGFyYW0gc3RyaW5nXG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovXG4gIHN0YXRpYyBzdHJpbmdUb1VuaXF1ZUlkKHN0cmluZzogc3RyaW5nKSB7XG4gICAgcmV0dXJuIGAke3RoaXMuc3RyaW5nVG9JZChzdHJpbmcpfS0ke0RhdGUubm93KCl9LSR7TWF0aC5yYW5kb20oKVxuICAgICAgLnRvU3RyaW5nKClcbiAgICAgIC5zdWJzdHJpbmcoMil9YDtcbiAgfVxuXG4gIHN0YXRpYyBudW1iZXJSYW5kb20oKSB7XG4gICAgcmV0dXJuIE1hdGgudHJ1bmMoKE1hdGgucmFuZG9tKCkgKiAxMDAwMDAwKSk7XG4gIH1cblxuICBzdGF0aWMgY2FwaXRhbGl6ZSh0ZXh0OiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGV4dC5yZXBsYWNlKC8oPzpefFxccylcXFMvZywgY2hhciA9PiBjaGFyLnRvVXBwZXJDYXNlKCkpO1xuICB9XG5cbiAgc3RhdGljIGNsb25lRGVlcChvYmopIHtcbiAgICByZXR1cm4gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShvYmopKTtcbiAgfVxufTtcbiIsImltcG9ydCBGTUMgZnJvbSAnLi9GZWF0dXJlTWFuYWdlckNvbnN0YW50cyc7XG5pbXBvcnQgVUlVdGlscyBmcm9tICcuLi8uLi91dGlscy9VSVV0aWxzJztcblxuLyoqXG4gKiBAYXV0aG9yIE5hZGVqZGEgTWFuZHJlc2N1XG4gKi9cblxuLy8gQWN0aXZpdHkgZmllbGRzXG5jb25zdCBBQ1RJVklUWV9CVURHRVQgPSAnYWN0aXZpdHlfYnVkZ2V0JztcbmNvbnN0IEFDVElWSVRZX1NUQVRVUyA9ICdhY3Rpdml0eV9zdGF0dXMnO1xuY29uc3QgU1RBVFVTX1JFQVNPTiA9ICdzdGF0dXNfcmVhc29uJztcbmNvbnN0IEZJTkFOQ0lBTF9JTlNUUlVNRU5UID0gJ2ZpbmFuY2lhbF9pbnN0cnVtZW50JztcbmNvbnN0IFRZUEVfT0ZfSU1QTEVNRU5UQVRJT04gPSAndHlwZV9vZl9pbXBsZW1lbnRhdGlvbic7XG5jb25zdCBPQkpFQ1RJVkUgPSAnb2JqZWN0aXZlJztcbmNvbnN0IFJFU1VMVFMgPSAncmVzdWx0cyc7XG5jb25zdCBCVURHRVRfQ09ERV9QUk9KRUNUX0lEID0gJ2J1ZGdldF9jb2RlX3Byb2plY3RfaWQnO1xuY29uc3QgQUNUVUFMX0FQUFJPVkFMX0RBVEUgPSAnYWN0dWFsX2FwcHJvdmFsX2RhdGUnO1xuY29uc3QgRlVORElOR1MgPSAnZnVuZGluZ3MnO1xuY29uc3QgRlVORElOR19ET05PUl9PUkdfSUQgPSAnZG9ub3Jfb3JnYW5pemF0aW9uX2lkJztcbmNvbnN0IElTX0RSQUZUID0gJ2lzX2RyYWZ0JztcbmNvbnN0IE9SR19ST0xFX09SR19JRCA9ICdvcmdhbml6YXRpb24nO1xuY29uc3QgQURESVRJT05BTF9JTkZPID0gJ2FkZGl0aW9uYWxfaW5mbyc7XG5jb25zdCBQUklNQVJZX1NFQ1RPUlMgPSAncHJpbWFyeV9zZWN0b3JzJztcbmNvbnN0IFNFQ09OREFSWV9TRUNUT1JTID0gJ3NlY29uZGFyeV9zZWN0b3JzJztcbmNvbnN0IFRFUlRJQVJZX1NFQ1RPUlMgPSAndGVydGlhcnlfc2VjdG9ycyc7XG5jb25zdCBUQUdfU0VDVE9SUyA9ICd0YWdfc2VjdG9ycyc7XG5jb25zdCBTRUNUT1IgPSAnc2VjdG9yJztcbmNvbnN0IFNFQ1RPUl9QRVJDRU5UQUdFID0gJ3NlY3Rvcl9wZXJjZW50YWdlJztcbmNvbnN0IEZJTkFOQ0lOR19JTlNUUlVNRU5UID0gJ2ZpbmFuY2luZ19pbnN0cnVtZW50JztcbmNvbnN0IE1PREFMSVRJRVMgPSAnbW9kYWxpdGllcyc7XG5jb25zdCBMSU5FX01JTklTVFJZX1JBTksgPSAnbGluZV9taW5pc3RyeV9yYW5rJztcbmNvbnN0IEdPVkVSTk1FTlRfQUdSRUVNRU5UX05VTUJFUiA9ICdnb3Zlcm5tZW50X2FncmVlbWVudF9udW1iZXInO1xuY29uc3QgRlVORElOR19TVEFUVVMgPSAnZnVuZGluZ19zdGF0dXMnO1xuY29uc3QgTE9DQVRJT05TID0gJ2xvY2F0aW9ucyc7XG5jb25zdCBMT0NBVElPTiA9ICdsb2NhdGlvbic7XG5jb25zdCBMT0NBVElPTl9QRVJDRU5UQUdFID0gJ2xvY2F0aW9uX3BlcmNlbnRhZ2UnO1xuY29uc3QgSU1QTEVNRU5UQVRJT05fTE9DQVRJT04gPSAnaW1wbGVtZW50YXRpb25fbG9jYXRpb24nO1xuY29uc3QgSU1QTEVNRU5UQVRJT05fTEVWRUwgPSAnaW1wbGVtZW50YXRpb25fbGV2ZWwnO1xuY29uc3QgQVBQUk9WQUxfU1RBVFVTID0gJ2FwcHJvdmFsX3N0YXR1cyc7XG5jb25zdCBBUFBST1ZFRF9CWSA9ICdhcHByb3ZlZF9ieSc7XG5jb25zdCBBUFBST1ZBTF9EQVRFID0gJ2FwcHJvdmFsX2RhdGUnO1xuY29uc3QgVFlQRV9PRl9BU1NJU1RBTkNFID0gJ3R5cGVfb2ZfYXNzaXN0YW5jZSc7XG5jb25zdCBFWFBFTkRJVFVSRV9DTEFTUyA9ICdleHBlbmRpdHVyZV9jbGFzcyc7XG5jb25zdCBGVU5ESU5HX0RFVEFJTFMgPSAnZnVuZGluZ19kZXRhaWxzJztcbmNvbnN0IE1PREVfT0ZfUEFZTUVOVCA9ICdtb2RlX29mX3BheW1lbnQnO1xuY29uc3QgRlVORElOR19DTEFTU0lGSUNBVElPTl9EQVRFID0gJ2Z1bmRpbmdfY2xhc3NpZmljYXRpb25fZGF0ZSc7XG5jb25zdCBBR1JFRU1FTlQgPSAnYWdyZWVtZW50JztcbmNvbnN0IERPTk9SX09CSkVDVElWRSA9ICdkb25vcl9vYmplY3RpdmUnO1xuY29uc3QgQ09ORElUSU9OUyA9ICdjb25kaXRpb25zJztcbmNvbnN0IEFHUkVFTUVOVF9DT0RFID0gJ2NvZGUnO1xuY29uc3QgQUdSRUVNRU5UX1RJVExFID0gJ3RpdGxlJztcbmNvbnN0IFBST0pFQ1RfQ0FURUdPUlkgPSAncHJvamVjdF9jYXRlZ29yeSc7XG5jb25zdCBQUk9KRUNUX0lNUExFTUVOVElOR19VTklUID0gJ3Byb2plY3RfaW1wbGVtZW50aW5nX3VuaXQnO1xuY29uc3QgT1JHQU5JWkFUSU9OID0gJ29yZ2FuaXphdGlvbic7XG5jb25zdCBQRVJDRU5UQUdFID0gJ3BlcmNlbnRhZ2UnO1xuY29uc3QgQU1QX09SR0FOSVpBVElPTl9ST0xFX0lEID0gJ2FtcF9vcmdhbml6YXRpb25fcm9sZV9pZCc7XG5jb25zdCBST0xFID0gJ3JvbGUnO1xuY29uc3QgRVhFQ1VUSU5HX0FHRU5DWSA9ICdleGVjdXRpbmdfYWdlbmN5JztcbmNvbnN0IENPTlRSQUNUSU5HX0FHRU5DWSA9ICdjb250cmFjdGluZ19hZ2VuY3knO1xuY29uc3QgQkVORUZJQ0lBUllfQUdFTkNZID0gJ2JlbmVmaWNpYXJ5X2FnZW5jeSc7XG5jb25zdCBJTVBMRU1FTlRJTkdfQUdFTkNZID0gJ2ltcGxlbWVudGluZ19hZ2VuY3knO1xuY29uc3QgUkVTUE9OU0lCTEVfT1JHQU5JWkFUSU9OID0gJ3Jlc3BvbnNpYmxlX29yZ2FuaXphdGlvbic7XG5jb25zdCBET05PUl9PUkdBTklaQVRJT04gPSAnZG9ub3Jfb3JnYW5pemF0aW9uJztcbmNvbnN0IFJFR0lPTkFMX0dST1VQID0gJ3JlZ2lvbmFsX2dyb3VwJztcbmNvbnN0IFNFQ1RPUl9HUk9VUCA9ICdzZWN0b3JfZ3JvdXAnO1xuY29uc3QgQlVER0VUUyA9ICdidWRnZXRzJztcbmNvbnN0IEJVREdFVF9DT0RFID0gJ2J1ZGdldF9jb2RlJztcbmNvbnN0IEJVREdFVF9PUkdBTklaQVRJT05fQ09ERSA9ICdidWRnZXRfb3JnYW5pemF0aW9uX2NvZGUnO1xuY29uc3QgQVJDSElWRUQgPSAnYXJjaGl2ZWQnO1xuY29uc3QgVFJBTlNBQ1RJT05fREFURSA9ICd0cmFuc2FjdGlvbl9kYXRlJztcbmNvbnN0IFRSQU5TQUNUSU9OX1RZUEUgPSAndHJhbnNhY3Rpb25fdHlwZSc7XG5jb25zdCBDT01NSVRNRU5UUyA9ICdjb21taXRtZW50cyc7XG5jb25zdCBESVNCVVJTRU1FTlRTID0gJ2Rpc2J1cnNlbWVudHMnO1xuY29uc3QgRVhQRU5ESVRVUkVTID0gJ2V4cGVuZGl0dXJlcyc7XG5jb25zdCBFU1RJTUFURURfRElTQlVSU0VNRU5UUyA9ICdlc3RpbWF0ZWRfZGlzYnVyc2VtZW50cyc7XG5jb25zdCBUUkFOU0FDVElPTl9BTU9VTlQgPSAndHJhbnNhY3Rpb25fYW1vdW50JztcbmNvbnN0IEFESlVTVE1FTlRfVFlQRSA9ICdhZGp1c3RtZW50X3R5cGUnO1xuY29uc3QgQUNUVUFMX1NUQVJUX0RBVEUgPSAnYWN0dWFsX3N0YXJ0X2RhdGUnO1xuY29uc3QgUFJPUE9TRURfU1RBUlRfREFURSA9ICdwcm9wb3NlZF9zdGFydF9kYXRlJztcbmNvbnN0IEFDVFVBTF9DT01QTEVUSU9OX0RBVEUgPSAnYWN0dWFsX2NvbXBsZXRpb25fZGF0ZSc7XG5jb25zdCBDT05UUkFDVElOR19EQVRFID0gJ2NvbnRyYWN0aW5nX2RhdGUnO1xuY29uc3QgRElTQlVSU0VNRU5UX0RBVEUgPSAnZGlzYnVyc2VtZW50X2RhdGUnO1xuY29uc3QgUFJPUE9TRURfQVBQUk9WQUxfREFURSA9ICdwcm9wb3NlZF9hcHByb3ZhbF9kYXRlJztcbmNvbnN0IE9SSUdJTkFMX0NPTVBMRVRJT05fREFURSA9ICdvcmlnaW5hbF9jb21wbGV0aW9uX2RhdGUnO1xuY29uc3QgUFJPUE9TRURfQ09NUExFVElPTl9EQVRFID0gJ3Byb3Bvc2VkX2NvbXBsZXRpb25fZGF0ZSc7XG5jb25zdCBGSU5BTF9EQVRFX0ZPUl9ESVNCVVJTRU1FTlRTID0gJ2ZpbmFsX2RhdGVfZm9yX2Rpc2J1cnNlbWVudHMnO1xuY29uc3QgRklOQUxfREFURV9GT1JfQ09OVFJBQ1RJTkcgPSAnZmluYWxfZGF0ZV9mb3JfY29udHJhY3RpbmcnO1xuY29uc3QgRUZGRUNUSVZFX0ZVTkRJTkdfREFURSA9ICdlZmZlY3RpdmVfZnVuZGluZ19kYXRlJztcbmNvbnN0IEZVTkRJTkdfQ0xPU0lOR19EQVRFID0gJ2Z1bmRpbmdfY2xvc2luZ19kYXRlJztcbmNvbnN0IFJBVElGSUNBVElPTl9EQVRFID0gJ3JhdGlmaWNhdGlvbl9kYXRlJztcbmNvbnN0IE1BVFVSSVRZID0gJ21hdHVyaXR5JztcbmNvbnN0IExBU1RfQVVESVRfREFURSA9ICdsYXN0X2F1ZGl0X2RhdGUnO1xuY29uc3QgU0lHTkFUVVJFX0RBVEUgPSAnc2lnbmF0dXJlX2RhdGUnO1xuY29uc3QgSFVNQU5JVEFSSUFOX0FJRCA9ICdodW1hbml0YXJpYW5fYWlkJztcbmNvbnN0IERJU0FTVEVSX1JFU1BPTlNFID0gJ2Rpc2FzdGVyX3Jlc3BvbnNlJztcbmNvbnN0IFBST0dSQU0gPSAncHJvZ3JhbSc7XG5jb25zdCBQUk9HUkFNX1BFUkNFTlRBR0UgPSAncHJvZ3JhbV9wZXJjZW50YWdlJztcbmNvbnN0IFBST0dSQU1fU0VUVElOR1MgPSAncHJvZ3JhbV9zZXR0aW5ncyc7XG5jb25zdCBOQVRJT05BTF9QTEFOX09CSkVDVElWRSA9ICduYXRpb25hbF9wbGFuX29iamVjdGl2ZSc7XG5jb25zdCBQUklNQVJZX1BST0dSQU1TID0gJ3ByaW1hcnlfcHJvZ3JhbXMnO1xuY29uc3QgU0VDT05EQVJZX1BST0dSQU1TID0gJ3NlY29uZGFyeV9wcm9ncmFtcyc7XG5jb25zdCBURVJUSUFSX1BST0dSQU1TID0gJ3RlcnRpYXJ5X3Byb2dyYW1zJztcbmNvbnN0IEdPVkVSTk1FTlRfQVBQUk9WQUxfUFJPQ0VEVVJFUyA9ICdnb3Zlcm5tZW50X2FwcHJvdmFsX3Byb2NlZHVyZXMnO1xuY29uc3QgSk9JTlRfQ1JJVEVSSUEgPSAnam9pbnRfY3JpdGVyaWEnO1xuY29uc3QgVEVBTSA9ICd0ZWFtJztcbmNvbnN0IFJFSkVDVEVEX0lEID0gJ3JlamVjdGVkSWQnO1xuY29uc3QgSU5URVJOQUxfSUQgPSAnaW50ZXJuYWxfaWQnO1xuY29uc3QgQU1QX0lEID0gJ2FtcF9pZCc7XG5jb25zdCBQUk9KRUNUX1RJVExFID0gJ3Byb2plY3RfdGl0bGUnO1xuY29uc3QgREVTQ1JJUFRJT04gPSAnZGVzY3JpcHRpb24nO1xuY29uc3QgTU9ESUZJRURfQlkgPSAnbW9kaWZpZWRfYnknO1xuY29uc3QgTU9ESUZJRURfT04gPSAndXBkYXRlX2RhdGUnO1xuY29uc3QgQ1JFQVRFRF9CWSA9ICdjcmVhdGVkX2J5JztcbmNvbnN0IENSRUFURURfT04gPSAnY3JlYXRpb25fZGF0ZSc7XG5jb25zdCBMQVNUX0lNUE9SVEVEX0JZID0gJ2xhc3RfaW1wb3J0ZWRfYnknO1xuY29uc3QgQ0xJRU5UX0NIQU5HRV9JRCA9ICdjbGllbnQtY2hhbmdlLWlkJztcbmNvbnN0IENMSUVOVF9DUkVBVEVEX09OID0gJ2NsaWVudC1jcmVhdGVkLW9uJztcbmNvbnN0IENMSUVOVF9VUERBVEVEX09OID0gJ2NsaWVudC11cGRhdGVkLW9uJztcbmNvbnN0IElTX1BVU0hFRCA9ICdpcy1wdXNoZWQnO1xuY29uc3QgQUNUSVZJVFlfR1JPVVAgPSAnYWN0aXZpdHlfZ3JvdXAnO1xuY29uc3QgVkVSU0lPTiA9ICd2ZXJzaW9uJztcbmNvbnN0IFBST0pFQ1RfQ09NTUVOVFMgPSAncHJvamVjdF9jb21tZW50cyc7XG5jb25zdCBMRVNTT05TX0xFQVJORUQgPSAnbGVzc29uc19sZWFybmVkJztcbmNvbnN0IFBST0pFQ1RfSU1QQUNUID0gJ3Byb2plY3RfaW1wYWN0JztcbmNvbnN0IEFDVElWSVRZX1NVTU1BUlkgPSAnYWN0aXZpdHlfc3VtbWFyeSc7XG5jb25zdCBDT05ESVRJT05BTElUSUVTID0gJ2NvbmRpdGlvbmFsaXRpZXMnO1xuY29uc3QgUFJPSkVDVF9NQU5BR0VNRU5UID0gJ3Byb2plY3RfbWFuYWdlbWVudCc7XG5jb25zdCBBX0NfQ0hBUFRFUiA9ICdhX2NfY2hhcHRlcic7XG5jb25zdCBDUklTX05VTUJFUiA9ICdjcmlzX251bWJlcic7XG5jb25zdCBJQVRJX0lERU5USUZJRVIgPSAnaWF0aV9pZGVudGlmaWVyJztcbmNvbnN0IEFDVElWSVRZX0lOVEVSTkFMX0lEUyA9ICdhY3Rpdml0eV9pbnRlcm5hbF9pZHMnO1xuY29uc3QgSElFUkFSQ0hJQ0FMX1ZBTFVFID0gJ2hpZXJhcmNoaWNhbF92YWx1ZSc7XG5jb25zdCBISUVSQVJDSElDQUxfVkFMVUVfUEFSVFMgPSAnaGllcmFyY2hpY2FsX3ZhbHVlX3BhcnRzJztcbmNvbnN0IEhJRVJBUkNISUNBTF9WQUxVRV9ERVBUSCA9ICdoaWVyYXJjaGljYWxfdmFsdWVfZGVwdGgnO1xuY29uc3QgUFBDX0FNT1VOVCA9ICdwcGNfYW1vdW50JztcbmNvbnN0IFJQQ19BTU9VTlQgPSAncnBjX2Ftb3VudCc7XG5jb25zdCBQUENfQU5OVUFMX0JVREdFVFMgPSAncHBjX2FubnVhbF9idWRnZXRzJztcbmNvbnN0IEFNT1VOVCA9ICdhbW91bnQnO1xuY29uc3QgQ1VSUkVOQ1kgPSAnY3VycmVuY3knO1xuY29uc3QgRlVORElOR19EQVRFID0gJ2Z1bmRpbmdfZGF0ZSc7XG5jb25zdCBDT01QT05FTlRTID0gJ2NvbXBvbmVudHMnO1xuY29uc3QgVE9UQUxfTlVNQkVSX09GX0ZVTkRJTkdfU09VUkNFUyA9ICd0b3RhbF9udW1iZXJfb2ZfZnVuZGluZ19zb3VyY2VzJztcbmNvbnN0IFNPVVJDRV9ST0xFID0gJ3NvdXJjZV9yb2xlJztcbmNvbnN0IEFNUF9GVU5ESU5HX0lEID0gJ2Z1bmRpbmdfaWQnO1xuY29uc3QgSVNTVUVTID0gJ2lzc3Vlcyc7XG5jb25zdCBJU1NVRV9EQVRFID0gJ2lzc3VlX2RhdGUnO1xuY29uc3QgSVNTVUVfTkFNRSA9ICduYW1lJztcbmNvbnN0IE1FQVNVUkVTID0gJ21lYXN1cmVzJztcbmNvbnN0IE1FQVNVUkVfTkFNRSA9ICduYW1lJztcbmNvbnN0IE1FQVNVUkVfREFURSA9ICdtZWFzdXJlX2RhdGUnO1xuY29uc3QgQUNUT1JTID0gJ2FjdG9ycyc7XG5jb25zdCBBQ1RPUl9OQU1FID0gJ25hbWUnO1xuY29uc3QgU1RSVUNUVVJFUyA9ICdzdHJ1Y3R1cmVzJztcbmNvbnN0IFNUUlVDVFVSRVNfVElUTEUgPSAndGl0bGUnO1xuY29uc3QgU1RSVUNUVVJFU19ERVNDUklQVElPTiA9ICdkZXNjcmlwdGlvbic7XG5jb25zdCBTVFJVQ1RVUkVTX0xBVElUVURFID0gJ2xhdGl0dWRlJztcbmNvbnN0IFNUUlVDVFVSRVNfTE9OR0lUVURFID0gJ2xvbmdpdHVkZSc7XG5jb25zdCBTVFJVQ1RVUkVTX0NPTE9SID0gJ3N0cnVjdHVyZV9jb2xvcic7XG5jb25zdCBTVFJVQ1RVUkVTX0xBVCA9ICdsYXQnO1xuY29uc3QgU1RSVUNUVVJFU19MTkcgPSAnbG5nJztcbmNvbnN0IFNUUlVDVFVSRVNfU0hBUEUgPSAnc2hhcGUnO1xuY29uc3QgU1RSVUNUVVJFU19QT0lOVCA9ICdQb2ludCc7XG5jb25zdCBTVFJVQ1RVUkVTX1BPTFlHT04gPSAnUG9seWdvbic7XG5jb25zdCBTVFJVQ1RVUkVTX1BPTFlMSU5FID0gJ1BvbHlsaW5lJztcbmNvbnN0IFNUUlVDVFVSRVNfQ09PUkRJTkFURVMgPSAnY29vcmRpbmF0ZXMnO1xuY29uc3QgQ09NUE9ORU5UX1RZUEUgPSAnY29tcG9uZW50X3R5cGUnO1xuY29uc3QgQ09NUE9ORU5UX1RJVExFID0gJ2NvbXBvbmVudF90aXRsZSc7XG5jb25zdCBDT01QT05FTlRfRlVORElORyA9ICdmdW5kaW5nJztcbmNvbnN0IENPTVBPTkVOVF9ERVNDUklQVElPTiA9ICdkZXNjcmlwdGlvbic7XG5jb25zdCBDT01QT05FTlRfT1JHQU5JWkFUSU9OID0gJ2NvbXBvbmVudF9vcmdhbml6YXRpb24nO1xuY29uc3QgRlVORElOR19BTU9VTlRfSUQgPSAnYW1wX2Z1bmRpbmdfYW1vdW50X2lkJztcbmNvbnN0IEVYVFJBX0lORk8gPSAnZXh0cmFfaW5mbyc7XG5jb25zdCBWQUxVRSA9ICd2YWx1ZSc7XG5jb25zdCBBQ1JPTllNID0gJ2Fjcm9ueW0nO1xuY29uc3QgVFlQRV9PRl9DT09QRVJBVElPTiA9ICd0eXBlX29mX2Nvb3BlcmF0aW9uJztcbmNvbnN0IEFOTlVBTF9QUk9KRUNUX0JVREdFVF9JRCA9ICdhbm51YWxfcHJvamVjdF9idWRnZXRfaWQnO1xuY29uc3QgVFlQRSA9ICd0eXBlJztcbmNvbnN0IFlFQVIgPSAneWVhcic7XG5jb25zdCBHUk9VUF9WRVJTSU9ORURfRlVORElORyA9ICdncm91cF92ZXJzaW9uZWRfZnVuZGluZyc7XG5jb25zdCBBQ1RJVkVfTElTVCA9ICdhY3RpdmVfbGlzdCc7XG5jb25zdCBBQ1RJVkUgPSAnYWN0aXZlJztcbmNvbnN0IERFTEVHQVRFRF9DT09QRVJBVElPTiA9ICdkZWxlZ2F0ZWRfY29vcGVyYXRpb24nO1xuY29uc3QgREVMRUdBVEVEX1BBUlRORVIgPSAnZGVsZWdhdGVkX3BhcnRuZXInO1xuY29uc3QgRklOQU5DSU5HX0lEID0gJ2ZpbmFuY2luZ19pZCc7XG5jb25zdCBESVNCVVJTRU1FTlRfT1JERVJfSUQgPSAnZGlzYnVyc2VtZW50X29yZGVyX2lkJztcbmNvbnN0IFBMRURHRSA9ICdwbGVkZ2UnO1xuY29uc3QgQ0FQSVRBTF9TUEVORElOR19QRVJDRU5UQUdFID0gJ2NhcGl0YWxfc3BlbmRpbmdfcGVyY2VudGFnZSc7XG5jb25zdCBSRVBPUlRJTkdfREFURSA9ICdyZXBvcnRpbmdfZGF0ZSc7XG5jb25zdCBSRUNJUElFTlRfUk9MRSA9ICdyZWNpcGllbnRfcm9sZSc7XG5jb25zdCBSRUNJUElFTlRfT1JHQU5JWkFUSU9OID0gJ3JlY2lwaWVudF9vcmdhbml6YXRpb24nO1xuY29uc3QgVEVNUE9SQUxfSUQgPSAnX3RlbXBvcmFsX2lkJztcbmNvbnN0IE1JTklTVFJZX0NPREUgPSAnbWluaXN0cnlfY29kZSc7XG5jb25zdCBQUk9KRUNUX0NPREUgPSAncHJvamVjdF9jb2RlJztcbmNvbnN0IEZZID0gJ2Z5JztcbmNvbnN0IElORElSRUNUX09OX0JVREdFVCA9ICdpbmRpcmVjdF9vbl9idWRnZXQnO1xuY29uc3QgSU1QTEVNRU5UQVRJT05fTEVWRUxTX0VYVFJBX0lORk8gPSAnaW1wbGVtZW50YXRpb24tbGV2ZWxzJztcbmNvbnN0IElNUExFTUVOVEFUSU9OX0xPQ0FUSU9OX0VYVFJBX0lORk8gPSAnaW1wbGVtZW50YXRpb25fbG9jYXRpb25fbmFtZSc7XG5jb25zdCBET05PUl9DT05UQUNUID0gJ2Rvbm9yX2NvbnRhY3RfaW5mb3JtYXRpb24nO1xuY29uc3QgUFJPSkVDVF9DT09SRElOQVRPUl9DT05UQUNUID0gJ3Byb2plY3RfY29vcmRpbmF0b3JfY29udGFjdF9pbmZvcm1hdGlvbic7XG5jb25zdCBTRUNUT1JfTUlOSVNUUllfQ09OVEFDVCA9ICdzZWN0b3JfbWluaXN0cnlfY29udGFjdF9pbmZvcm1hdGlvbic7XG5jb25zdCBNT0ZFRF9DT05UQUNUID0gJ21vZmVkX2NvbnRhY3RfaW5mb3JtYXRpb24nO1xuY29uc3QgSU1QTEVNRU5USU5HX0VYRUNVVElOR19BR0VOQ1lfQ09OVEFDVCA9ICdpbXBsZW1lbnRpbmcvZXhlY3V0aW5nX2FnZW5jeV9jb250YWN0X2luZm9ybWF0aW9uJztcbmNvbnN0IENPTlRBQ1QgPSAnY29udGFjdCc7XG5jb25zdCBPUkdBTklaQVRJT05fR1JPVVAgPSAnb3JnYW5pemF0aW9uX2dyb3VwJztcbmNvbnN0IEZJWEVEX0VYQ0hBTkdFX1JBVEUgPSAnZml4ZWRfZXhjaGFuZ2VfcmF0ZSc7XG5jb25zdCBQUklNQVJZX0NPTlRBQ1QgPSAnbWFya19hc19wcmltYXJ5JztcbmNvbnN0IEFDVElWSVRZX0RPQ1VNRU5UUyA9ICdhY3Rpdml0eV9kb2N1bWVudHMnO1xuY29uc3QgRE9DVU1FTlRfVFlQRSA9ICdkb2N1bWVudF90eXBlJztcbmNvbnN0IElTTzIgPSAnaXNvMic7XG5jb25zdCBNVEVGX1BST0pFQ1RJT05TID0gJ210ZWZfcHJvamVjdGlvbnMnO1xuY29uc3QgUFJPSkVDVElPTiA9ICdwcm9qZWN0aW9uJztcbmNvbnN0IFBJUEVMSU5FID0gJ3BpcGVsaW5lJztcbmNvbnN0IFBST0pFQ1RJT05fREFURSA9ICdwcm9qZWN0aW9uX2RhdGUnO1xuXG4vLyBBY3Rpdml0eSBsYWJlbHMgKHVzdWFsbHkgdGhvc2UgdGhhdCBkb24ndCBjb21lIGFzIHBhcnQgb2YgRmllbGRzIERlZiBFUClcbmNvbnN0IFNBTUVfQVNfUFJPUE9TRURfU1RBUlRfREFURV9MQUJFTCA9ICdTYW1lIGFzIFByb3Bvc2VkIFN0YXJ0IERhdGUnO1xuY29uc3QgU0FNRV9BU19QUk9QT1NFRF9BUFBST1ZBTF9EQVRFX0xBQkVMID0gJ1NhbWUgYXMgUHJvcG9zZWQgQXBwcm92YWwgRGF0ZSc7XG5cbi8vIEFjdGl2aXR5IHZhbGlkYXRpb24gcnVsZXNcbmNvbnN0IERFUEVOREVOQ1lfSU1QTEVNRU5UQVRJT05fTEVWRUxfUFJFU0VOVCA9ICdpbXBsZW1lbnRhdGlvbl9sZXZlbF9wcmVzZW50JztcbmNvbnN0IERFUEVOREVOQ1lfSU1QTEVNRU5UQVRJT05fTEVWRUxfVkFMSUQgPSAnaW1wbGVtZW50YXRpb25fbGV2ZWxfdmFsaWQnO1xuY29uc3QgREVQRU5ERU5DWV9JTVBMRU1FTlRBVElPTl9MT0NBVElPTl9QUkVTRU5UID0gJ2ltcGxlbWVudGF0aW9uX2xvY2F0aW9uX3ByZXNlbnQnO1xuY29uc3QgREVQRU5ERU5DWV9JTVBMRU1FTlRBVElPTl9MT0NBVElPTl9WQUxJRCA9ICdpbXBsZW1lbnRhdGlvbl9sb2NhdGlvbl92YWxpZCc7XG5jb25zdCBERVBFTkRFTkNZX1BST0pFQ1RfQ09ERV9PTl9CVURHRVQgPSAncHJvamVjdF9jb2RlX29uX2J1ZGdldCc7XG5jb25zdCBERVBFTkRFTkNZX09OX0JVREdFVCA9ICdvbl9idWRnZXQnO1xuY29uc3QgREVQRU5ERU5DWV9UUkFOU0FDVElPTl9QUkVTRU5UID0gJ3RyYW5zYWN0aW9uX3ByZXNlbnQnO1xuY29uc3QgREVQRU5ERU5DWV9DT01QT05FTlRfRlVORElOR19PUkdfVkFMSUQgPSAnb3JnYW5pemF0aW9uX3ByZXNlbnQnO1xuXG4vKiogSURzIGZvciBBUCBzZWN0aW9ucyAqKi9cbmNvbnN0IEFQX1NFQ1RJT05fSURTID1cbiAgW3sga2V5OiAnQVBJZGVudGlmaWNhdGlvbicsIGhhc2g6ICcjQVBJZGVudGlmaWNhdGlvbicsIHZhbHVlOiAnSWRlbnRpZmljYXRpb24nLCBmbVBhdGg6IEZNQy5BQ1RJVklUWV9JREVOVElGSUNBVElPTiB9LFxuICAgIHsga2V5OiAnQVBJbnRlcm5hbElkcycsIGhhc2g6ICcjQVBJbnRlcm5hbElkcycsIHZhbHVlOiAnQWdlbmN5IEludGVybmFsIElEcycsIHNlY3Rpb25QYXRoOiBBQ1RJVklUWV9JTlRFUk5BTF9JRFMgfSxcbiAgICB7IGtleTogJ0FQUGxhbm5pbmcnLCBoYXNoOiAnI0FQUGxhbm5pbmcnLCB2YWx1ZTogJ1BsYW5uaW5nJywgZm1QYXRoOiBGTUMuQUNUSVZJVFlfUExBTk5JTkcgfSxcbiAgICB7IGtleTogJ0FQTG9jYXRpb24nLCBoYXNoOiAnI0FQTG9jYXRpb24nLCB2YWx1ZTogJ0xvY2F0aW9uJywgc2VjdGlvblBhdGg6IExPQ0FUSU9OUyB9LFxuICAgIHsga2V5OiAnQVBQcm9ncmFtJywgaGFzaDogJyNBUFByb2dyYW0nLCB2YWx1ZTogJ1Byb2dyYW0nLCBmbVBhdGg6IEZNQy5BQ1RJVklUWV9QUk9HUkFNIH0sXG4gICAgeyBrZXk6ICdBUFNlY3RvcicsIGhhc2g6ICcjQVBTZWN0b3InLCB2YWx1ZTogJ1NlY3RvcnMnLCBmbVBhdGg6IEZNQy5BQ1RJVklUWV9TRUNUT1JTIH0sXG4gICAge1xuICAgICAga2V5OiAnQVBGdW5kaW5nU291cmNlcycsXG4gICAgICBoYXNoOiAnI0FQRnVuZGluZ1NvdXJjZXMnLFxuICAgICAgdmFsdWU6ICdGdW5kaW5nIFNvdXJjZXMnLFxuICAgICAgc2VjdGlvblBhdGg6IFRPVEFMX05VTUJFUl9PRl9GVU5ESU5HX1NPVVJDRVNcbiAgICB9LFxuICAgIHsga2V5OiAnQVBGdW5kaW5nJywgaGFzaDogJyNBUEZ1bmRpbmcnLCB2YWx1ZTogJ0Z1bmRpbmcnLCBzZWN0aW9uUGF0aDogRlVORElOR1MgfSxcbiAgICB7XG4gICAgICBrZXk6ICdBUFJlbGF0ZWRPcmdhbml6YXRpb25zJyxcbiAgICAgIGhhc2g6ICcjQVBSZWxhdGVkT3JnYW5pemF0aW9ucycsXG4gICAgICB2YWx1ZTogJ1JlbGF0ZWQgT3JnYW5pemF0aW9ucycsXG4gICAgICBmbVBhdGg6IEZNQy5BQ1RJVklUWV9PUkdBTklaQVRJT05TXG4gICAgfSxcbiAgICB7IGtleTogJ0FQSXNzdWVzJywgaGFzaDogJyNBUElzc3VlcycsIHZhbHVlOiAnSXNzdWVzJywgc2VjdGlvblBhdGg6IElTU1VFUyB9LFxuICAgIHsga2V5OiAnQVBDb250YWN0JywgaGFzaDogJyNBUENvbnRhY3QnLCB2YWx1ZTogJ0NvbnRhY3QgSW5mb3JtYXRpb24nLCBmbVBhdGg6IEZNQy5BQ1RJVklUWV9DT05UQUNUIH0sXG4gICAgeyBrZXk6ICdBUFN0cnVjdHVyZXMnLCBoYXNoOiAnI0FQU3RydWN0dXJlcycsIHZhbHVlOiAnU3RydWN0dXJlcycsIHNlY3Rpb25QYXRoOiBTVFJVQ1RVUkVTIH0sXG4gICAgeyBrZXk6ICdBUERvY3VtZW50JywgaGFzaDogJyNBUERvY3VtZW50JywgdmFsdWU6ICdSZWxhdGVkIERvY3VtZW50cycsIHNlY3Rpb25QYXRoOiBBQ1RJVklUWV9ET0NVTUVOVFMgfSxcbiAgXTtcblxuLyoqIENvbHVtbiBjb3VudHMgZm9yIGVhY2ggc2VjdGlvbiAqKi9cbmNvbnN0IEFDVElWSVRZX0lOVEVSTkFMX0lEU19DT0xTID0gMztcbmNvbnN0IEFDVElWSVRZX1BMQU5OSU5HX0NPTFMgPSAyO1xuY29uc3QgQUNUSVZJVFlfTE9DQVRJT05fQ09MUyA9IDM7XG5jb25zdCBBQ1RJVklUWV9GVU5ESU5HX0NPTFMgPSAyO1xuY29uc3QgQUNUSVZJVFlfQ09OVEFDVF9DT0xTID0gMjtcbmNvbnN0IEFQX0ZVTkRJTkdTX1RBQkxFX0NPTFMgPSA0O1xuXG5jb25zdCBNVUxUSV9TRUxFQ1RfTUlOX1NJWkUgPSA4O1xuY29uc3QgTVVMVElfU0VMRUNUX01BWF9TSVpFID0gODtcblxuLy8gVE9ETzogbW92ZSB0aGVzZSBmdW5jdGlvbnMgdG8gYW4gVXRpbHMgY2xhc3MuXG5jb25zdCB0b0ZpZWxkTmFtZXMgPSBmdW5jdGlvbiAobGlzdE9mTmFtZXMpIHtcbiAgcmV0dXJuIGxpc3RPZk5hbWVzLm1hcChuYW1lID0+IHRvRmllbGROYW1lKG5hbWUpKTtcbn07XG5cbi8qKlxuICogQ29udmVydHMgdGhlIG9yaWdpbmFsIG5vbi10cmFuc2xhdGVkIGxhYmVsIHRvIGludGVybmFsIGZpZWxkIG5hbWVcbiAqIEBwYXJhbSBuYW1lXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cbmNvbnN0IHRvRmllbGROYW1lID0gZnVuY3Rpb24gKG5hbWU6IHN0cmluZykge1xuICByZXR1cm4gbmFtZS50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoJyAnLCAnXycpO1xufTtcblxuLyoqXG4gKiBDb252ZXJ0cyB0aGUgaW50ZXJuYWwgZmllbGQgbmFtZSB0byB0aGUgT3JpZ2luYWwgbm9uLXRyYW5zbGF0ZWQgbGFiZWxcbiAqIEBwYXJhbSBmaWVsZE5hbWVcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xuY29uc3QgdG9PcmlnaW5hbExhYmVsID0gZnVuY3Rpb24gKGZpZWxkTmFtZTogc3RyaW5nKSB7XG4gIHJldHVybiBVSVV0aWxzLmNhcGl0YWxpemUoZmllbGROYW1lLnJlcGxhY2UoJ18nLCAnICcpKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE9iamVjdC5mcmVlemUoe1xuICBBQ1RJVklUWV9CVURHRVQsXG4gIEFDVElWSVRZX1NUQVRVUyxcbiAgU1RBVFVTX1JFQVNPTixcbiAgRklOQU5DSUFMX0lOU1RSVU1FTlQsXG4gIFRZUEVfT0ZfSU1QTEVNRU5UQVRJT04sXG4gIE9CSkVDVElWRSxcbiAgUkVTVUxUUyxcbiAgQlVER0VUX0NPREVfUFJPSkVDVF9JRCxcbiAgQUNUVUFMX0FQUFJPVkFMX0RBVEUsXG4gIEZVTkRJTkdTLFxuICBGVU5ESU5HX0RPTk9SX09SR19JRCxcbiAgSVNfRFJBRlQsXG4gIE9SR19ST0xFX09SR19JRCxcbiAgQURESVRJT05BTF9JTkZPLFxuICBQUklNQVJZX1NFQ1RPUlMsXG4gIFNFQ09OREFSWV9TRUNUT1JTLFxuICBURVJUSUFSWV9TRUNUT1JTLFxuICBUQUdfU0VDVE9SUyxcbiAgU0VDVE9SLFxuICBTRUNUT1JfUEVSQ0VOVEFHRSxcbiAgRklOQU5DSU5HX0lOU1RSVU1FTlQsXG4gIE1PREFMSVRJRVMsXG4gIExJTkVfTUlOSVNUUllfUkFOSyxcbiAgR09WRVJOTUVOVF9BR1JFRU1FTlRfTlVNQkVSLFxuICBGVU5ESU5HX1NUQVRVUyxcbiAgTE9DQVRJT05TLFxuICBMT0NBVElPTixcbiAgTE9DQVRJT05fUEVSQ0VOVEFHRSxcbiAgSU1QTEVNRU5UQVRJT05fTE9DQVRJT04sXG4gIElNUExFTUVOVEFUSU9OX0xFVkVMLFxuICBBUFBST1ZBTF9TVEFUVVMsXG4gIEFQUFJPVkVEX0JZLFxuICBBUFBST1ZBTF9EQVRFLFxuICBUWVBFX09GX0FTU0lTVEFOQ0UsXG4gIEVYUEVORElUVVJFX0NMQVNTLFxuICBGVU5ESU5HX0RFVEFJTFMsXG4gIE1PREVfT0ZfUEFZTUVOVCxcbiAgRlVORElOR19DTEFTU0lGSUNBVElPTl9EQVRFLFxuICBBR1JFRU1FTlQsXG4gIERPTk9SX09CSkVDVElWRSxcbiAgQ09ORElUSU9OUyxcbiAgQUdSRUVNRU5UX0NPREUsXG4gIEFHUkVFTUVOVF9USVRMRSxcbiAgUFJPSkVDVF9DQVRFR09SWSxcbiAgUFJPSkVDVF9JTVBMRU1FTlRJTkdfVU5JVCxcbiAgT1JHQU5JWkFUSU9OLFxuICBQRVJDRU5UQUdFLFxuICBBTVBfT1JHQU5JWkFUSU9OX1JPTEVfSUQsXG4gIFJPTEUsXG4gIEVYRUNVVElOR19BR0VOQ1ksXG4gIENPTlRSQUNUSU5HX0FHRU5DWSxcbiAgQkVORUZJQ0lBUllfQUdFTkNZLFxuICBJTVBMRU1FTlRJTkdfQUdFTkNZLFxuICBSRVNQT05TSUJMRV9PUkdBTklaQVRJT04sXG4gIERPTk9SX09SR0FOSVpBVElPTixcbiAgUkVHSU9OQUxfR1JPVVAsXG4gIFNFQ1RPUl9HUk9VUCxcbiAgQlVER0VUUyxcbiAgQlVER0VUX0NPREUsXG4gIEJVREdFVF9PUkdBTklaQVRJT05fQ09ERSxcbiAgQVJDSElWRUQsXG4gIFRSQU5TQUNUSU9OX0RBVEUsXG4gIFRSQU5TQUNUSU9OX1RZUEUsXG4gIENPTU1JVE1FTlRTLFxuICBESVNCVVJTRU1FTlRTLFxuICBFWFBFTkRJVFVSRVMsXG4gIEVTVElNQVRFRF9ESVNCVVJTRU1FTlRTLFxuICBUUkFOU0FDVElPTl9BTU9VTlQsXG4gIEFESlVTVE1FTlRfVFlQRSxcbiAgQUNUVUFMX1NUQVJUX0RBVEUsXG4gIFBST1BPU0VEX1NUQVJUX0RBVEUsXG4gIEFDVFVBTF9DT01QTEVUSU9OX0RBVEUsXG4gIENPTlRSQUNUSU5HX0RBVEUsXG4gIERJU0JVUlNFTUVOVF9EQVRFLFxuICBQUk9QT1NFRF9BUFBST1ZBTF9EQVRFLFxuICBPUklHSU5BTF9DT01QTEVUSU9OX0RBVEUsXG4gIFBST1BPU0VEX0NPTVBMRVRJT05fREFURSxcbiAgRklOQUxfREFURV9GT1JfRElTQlVSU0VNRU5UUyxcbiAgRklOQUxfREFURV9GT1JfQ09OVFJBQ1RJTkcsXG4gIEVGRkVDVElWRV9GVU5ESU5HX0RBVEUsXG4gIEZVTkRJTkdfQ0xPU0lOR19EQVRFLFxuICBSQVRJRklDQVRJT05fREFURSxcbiAgTUFUVVJJVFksXG4gIExBU1RfQVVESVRfREFURSxcbiAgU0lHTkFUVVJFX0RBVEUsXG4gIEhVTUFOSVRBUklBTl9BSUQsXG4gIERJU0FTVEVSX1JFU1BPTlNFLFxuICBQUk9HUkFNLFxuICBQUk9HUkFNX1BFUkNFTlRBR0UsXG4gIFBST0dSQU1fU0VUVElOR1MsXG4gIE5BVElPTkFMX1BMQU5fT0JKRUNUSVZFLFxuICBQUklNQVJZX1BST0dSQU1TLFxuICBTRUNPTkRBUllfUFJPR1JBTVMsXG4gIFRFUlRJQVJfUFJPR1JBTVMsXG4gIEdPVkVSTk1FTlRfQVBQUk9WQUxfUFJPQ0VEVVJFUyxcbiAgSk9JTlRfQ1JJVEVSSUEsXG4gIFRFQU0sXG4gIFJFSkVDVEVEX0lELFxuICBJTlRFUk5BTF9JRCxcbiAgQU1QX0lELFxuICBQUk9KRUNUX1RJVExFLFxuICBERVNDUklQVElPTixcbiAgTU9ESUZJRURfQlksXG4gIE1PRElGSUVEX09OLFxuICBDUkVBVEVEX0JZLFxuICBDUkVBVEVEX09OLFxuICBMQVNUX0lNUE9SVEVEX0JZLFxuICBDTElFTlRfQ0hBTkdFX0lELFxuICBDTElFTlRfQ1JFQVRFRF9PTixcbiAgQ0xJRU5UX1VQREFURURfT04sXG4gIElTX1BVU0hFRCxcbiAgQUNUSVZJVFlfR1JPVVAsXG4gIFZFUlNJT04sXG4gIFBST0pFQ1RfQ09NTUVOVFMsXG4gIExFU1NPTlNfTEVBUk5FRCxcbiAgUFJPSkVDVF9JTVBBQ1QsXG4gIEFDVElWSVRZX1NVTU1BUlksXG4gIENPTkRJVElPTkFMSVRJRVMsXG4gIFBST0pFQ1RfTUFOQUdFTUVOVCxcbiAgQV9DX0NIQVBURVIsXG4gIENSSVNfTlVNQkVSLFxuICBJQVRJX0lERU5USUZJRVIsXG4gIEFDVElWSVRZX0lOVEVSTkFMX0lEUyxcbiAgSElFUkFSQ0hJQ0FMX1ZBTFVFLFxuICBISUVSQVJDSElDQUxfVkFMVUVfUEFSVFMsXG4gIEhJRVJBUkNISUNBTF9WQUxVRV9ERVBUSCxcbiAgUFBDX0FNT1VOVCxcbiAgUlBDX0FNT1VOVCxcbiAgUFBDX0FOTlVBTF9CVURHRVRTLFxuICBBTU9VTlQsXG4gIENVUlJFTkNZLFxuICBGVU5ESU5HX0RBVEUsXG4gIENPTVBPTkVOVFMsXG4gIFRPVEFMX05VTUJFUl9PRl9GVU5ESU5HX1NPVVJDRVMsXG4gIFNPVVJDRV9ST0xFLFxuICBBTVBfRlVORElOR19JRCxcbiAgSVNTVUVTLFxuICBJU1NVRV9EQVRFLFxuICBJU1NVRV9OQU1FLFxuICBNRUFTVVJFUyxcbiAgTUVBU1VSRV9OQU1FLFxuICBNRUFTVVJFX0RBVEUsXG4gIEFDVE9SUyxcbiAgQUNUT1JfTkFNRSxcbiAgU1RSVUNUVVJFUyxcbiAgU1RSVUNUVVJFU19USVRMRSxcbiAgU1RSVUNUVVJFU19ERVNDUklQVElPTixcbiAgU1RSVUNUVVJFU19MQVRJVFVERSxcbiAgU1RSVUNUVVJFU19MT05HSVRVREUsXG4gIFNUUlVDVFVSRVNfQ09MT1IsXG4gIFNUUlVDVFVSRVNfTEFULFxuICBTVFJVQ1RVUkVTX0xORyxcbiAgU1RSVUNUVVJFU19TSEFQRSxcbiAgU1RSVUNUVVJFU19QT0lOVCxcbiAgU1RSVUNUVVJFU19QT0xZR09OLFxuICBTVFJVQ1RVUkVTX1BPTFlMSU5FLFxuICBTVFJVQ1RVUkVTX0NPT1JESU5BVEVTLFxuICBDT01QT05FTlRfVFlQRSxcbiAgQ09NUE9ORU5UX1RJVExFLFxuICBDT01QT05FTlRfRlVORElORyxcbiAgQ09NUE9ORU5UX0RFU0NSSVBUSU9OLFxuICBDT01QT05FTlRfT1JHQU5JWkFUSU9OLFxuICBGVU5ESU5HX0FNT1VOVF9JRCxcbiAgRVhUUkFfSU5GTyxcbiAgVkFMVUUsXG4gIEFDUk9OWU0sXG4gIFRZUEVfT0ZfQ09PUEVSQVRJT04sXG4gIEFOTlVBTF9QUk9KRUNUX0JVREdFVF9JRCxcbiAgVFlQRSxcbiAgWUVBUixcbiAgR1JPVVBfVkVSU0lPTkVEX0ZVTkRJTkcsXG4gIEFDVElWRV9MSVNULFxuICBBQ1RJVkUsXG4gIERFTEVHQVRFRF9DT09QRVJBVElPTixcbiAgREVMRUdBVEVEX1BBUlRORVIsXG4gIEZJTkFOQ0lOR19JRCxcbiAgRElTQlVSU0VNRU5UX09SREVSX0lELFxuICBQTEVER0UsXG4gIENBUElUQUxfU1BFTkRJTkdfUEVSQ0VOVEFHRSxcbiAgUkVQT1JUSU5HX0RBVEUsXG4gIFJFQ0lQSUVOVF9ST0xFLFxuICBSRUNJUElFTlRfT1JHQU5JWkFUSU9OLFxuICBURU1QT1JBTF9JRCxcbiAgTUlOSVNUUllfQ09ERSxcbiAgUFJPSkVDVF9DT0RFLFxuICBGWSxcbiAgSU5ESVJFQ1RfT05fQlVER0VULFxuICBJTVBMRU1FTlRBVElPTl9MRVZFTFNfRVhUUkFfSU5GTyxcbiAgSU1QTEVNRU5UQVRJT05fTE9DQVRJT05fRVhUUkFfSU5GTyxcbiAgRE9OT1JfQ09OVEFDVCxcbiAgUFJPSkVDVF9DT09SRElOQVRPUl9DT05UQUNULFxuICBTRUNUT1JfTUlOSVNUUllfQ09OVEFDVCxcbiAgTU9GRURfQ09OVEFDVCxcbiAgSU1QTEVNRU5USU5HX0VYRUNVVElOR19BR0VOQ1lfQ09OVEFDVCxcbiAgQ09OVEFDVCxcbiAgT1JHQU5JWkFUSU9OX0dST1VQLFxuICBGSVhFRF9FWENIQU5HRV9SQVRFLFxuICBQUklNQVJZX0NPTlRBQ1QsXG4gIEFDVElWSVRZX0RPQ1VNRU5UUyxcbiAgRE9DVU1FTlRfVFlQRSxcbiAgSVNPMixcbiAgTVRFRl9QUk9KRUNUSU9OUyxcbiAgUFJPSkVDVElPTixcbiAgUElQRUxJTkUsXG4gIFBST0pFQ1RJT05fREFURSxcbiAgU0FNRV9BU19QUk9QT1NFRF9TVEFSVF9EQVRFX0xBQkVMLFxuICBTQU1FX0FTX1BST1BPU0VEX0FQUFJPVkFMX0RBVEVfTEFCRUwsXG4gIERFUEVOREVOQ1lfSU1QTEVNRU5UQVRJT05fTEVWRUxfUFJFU0VOVCxcbiAgREVQRU5ERU5DWV9JTVBMRU1FTlRBVElPTl9MRVZFTF9WQUxJRCxcbiAgREVQRU5ERU5DWV9JTVBMRU1FTlRBVElPTl9MT0NBVElPTl9QUkVTRU5ULFxuICBERVBFTkRFTkNZX0lNUExFTUVOVEFUSU9OX0xPQ0FUSU9OX1ZBTElELFxuICBERVBFTkRFTkNZX1BST0pFQ1RfQ09ERV9PTl9CVURHRVQsXG4gIERFUEVOREVOQ1lfT05fQlVER0VULFxuICBERVBFTkRFTkNZX1RSQU5TQUNUSU9OX1BSRVNFTlQsXG4gIERFUEVOREVOQ1lfQ09NUE9ORU5UX0ZVTkRJTkdfT1JHX1ZBTElELFxuICBBUF9TRUNUSU9OX0lEUyxcbiAgQUNUSVZJVFlfSU5URVJOQUxfSURTX0NPTFMsXG4gIEFDVElWSVRZX1BMQU5OSU5HX0NPTFMsXG4gIEFDVElWSVRZX0xPQ0FUSU9OX0NPTFMsXG4gIEFDVElWSVRZX0ZVTkRJTkdfQ09MUyxcbiAgQUNUSVZJVFlfQ09OVEFDVF9DT0xTLFxuICBBUF9GVU5ESU5HU19UQUJMRV9DT0xTLFxuICBNVUxUSV9TRUxFQ1RfTUlOX1NJWkUsXG4gIE1VTFRJX1NFTEVDVF9NQVhfU0laRSxcbiAgdG9GaWVsZE5hbWVzLFxuICB0b0ZpZWxkTmFtZSxcbiAgdG9PcmlnaW5hbExhYmVsLFxufSk7XG4iLCJjb25zdCBOT1RJRklDQVRJT05fT1JJR0lOX0FQSV9TRUNVUklUWSA9ICdOT1RJRklDQVRJT05fT1JJR0lOX0FQSV9TRUNVUklUWSc7XG5jb25zdCBOT1RJRklDQVRJT05fT1JJR0lOX0FQSV9ORVRXT1JLID0gJ05PVElGSUNBVElPTl9PUklHSU5fQVBJX05FVFdPUksnO1xuY29uc3QgTk9USUZJQ0FUSU9OX09SSUdJTl9BUElfU1lOQ1VQID0gJ05PVElGSUNBVElPTl9PUklHSU5fQVBJX1NZTkNVUCc7XG5jb25zdCBOT1RJRklDQVRJT05fT1JJR0lOX0FQSV9HRU5FUkFMID0gJ05PVElGSUNBVElPTl9PUklHSU5fQVBJX0dFTkVSQUwnO1xuY29uc3QgTk9USUZJQ0FUSU9OX09SSUdJTl9EQVRBQkFTRSA9ICdOT1RJRklDQVRJT05fT1JJR0lOX0RBVEFCQVNFJztcbmNvbnN0IE5PVElGSUNBVElPTl9PUklHSU5fQVVUSEVOVElDQVRJT04gPSAnTk9USUZJQ0FUSU9OX09SSUdJTl9BVVRIRU5USUNBVElPTic7XG5jb25zdCBOT1RJRklDQVRJT05fT1JJR0lOX1dPUktTUEFDRV9GSUxURVIgPSAnTk9USUZJQ0FUSU9OX09SSUdJTl9XT1JLU1BBQ0VfRklMVEVSJztcbmNvbnN0IE5PVElGSUNBVElPTl9PUklHSU5fV09SS1NQQUNFID0gJ05PVElGSUNBVElPTl9PUklHSU5fV09SS1NQQUNFJztcbmNvbnN0IE5PVElGSUNBVElPTl9PUklHSU5fU1lOQ1VQX1BST0NFU1MgPSAnTk9USUZJQ0FUSU9OX09SSUdJTl9TWU5DVVBfUFJPQ0VTUyc7XG5jb25zdCBOT1RJRklDQVRJT05fT1JJR0lOX0NVUlJFTkNZX01BTkFHRVIgPSAnTk9USUZJQ0FUSU9OX09SSUdJTl9DVVJSRU5DWV9NQU5BR0VSJztcbmNvbnN0IE5PVElGSUNBVElPTl9PUklHSU5fREFURVMgPSAnTk9USUZJQ0FUSU9OX09SSUdJTl9EQVRFUyc7XG5jb25zdCBOT1RJRklDQVRJT05fT1JJR0lOX0FDVElWSVRZID0gJ05PVElGSUNBVElPTl9PUklHSU5fQUNUSVZJVFknO1xuY29uc3QgTk9USUZJQ0FUSU9OX09SSUdJTl9SRVNPVVJDRSA9ICdOT1RJRklDQVRJT05fT1JJR0lOX1JFU09VUkNFJztcbmNvbnN0IE5PVElGSUNBVElPTl9PUklHSU5fSTE4TkVYVCA9ICdOT1RJRklDQVRJT05fT1JJR0lOX0kxOE5FWFQnO1xuY29uc3QgTk9USUZJQ0FUSU9OX09SSUdJTl9VUERBVEVfQ0hFQ0sgPSAnTk9USUZJQ0FUSU9OX09SSUdJTl9VUERBVEVfQ0hFQ0snO1xuY29uc3QgTk9USUZJQ0FUSU9OX09SSUdJTl9VUERBVEUgPSAnTk9USUZJQ0FUSU9OX09SSUdJTl9VUERBVEUnO1xuY29uc3QgTk9USUZJQ0FUSU9OX09SSUdJTl9TRVRVUCA9ICdOT1RJRklDQVRJT05fT1JJR0lOX1NFVFVQJztcbmNvbnN0IE5PVElGSUNBVElPTl9PUklHSU5fU0VUVElOR1MgPSAnTk9USUZJQ0FUSU9OX09SSUdJTl9TRVRUSU5HUyc7XG5cbmNvbnN0IE5PVElGSUNBVElPTl9TRVZFUklUWV9XQVJOSU5HID0gJ05PVElGSUNBVElPTl9TRVZFUklUWV9XQVJOSU5HJztcbmNvbnN0IE5PVElGSUNBVElPTl9TRVZFUklUWV9JTkZPID0gJ05PVElGSUNBVElPTl9TRVZFUklUWV9JTkZPJztcbmNvbnN0IE5PVElGSUNBVElPTl9TRVZFUklUWV9FUlJPUiA9ICdOT1RJRklDQVRJT05fU0VWRVJJVFlfRVJST1InO1xuXG5jb25zdCBOT1RJRklDQVRJT05fRVJST1JfTEVWRUxfTUlOT1IgPSAnTk9USUZJQ0FUSU9OX0VSUk9SX0xFVkVMX01JTk9SJztcbmNvbnN0IE5PVElGSUNBVElPTl9FUlJPUl9MRVZFTF9CTE9DS0VSID0gJ05PVElGSUNBVElPTl9FUlJPUl9MRVZFTF9CTE9DS0VSJztcblxuY29uc3QgTk9USUZJQ0FUSU9OX09SSUdJTl9XUk9OR19NRVRIT0RfVVNBR0UgPSAnTk9USUZJQ0FUSU9OX09SSUdJTl9XUk9OR19NRVRIT0RfVVNBR0UnO1xuXG5jb25zdCBFUlJPUl9DT0RFX05PX0NPTk5FQ1RJVklUWSA9ICdOT19DT05ORUNUSVZJVFknO1xuY29uc3QgRVJST1JfQ09ERV9BQ0NFU1NfREVOSUVEID0gJ0FDQ0VTU19ERU5JRUQnO1xuXG5cbmNvbnN0IE1TR19JTlZBTElEX1VSTCA9ICdpbnZhbGlkVXJsJztcbmNvbnN0IE1TR19USU1FT1VUID0gJ3RpbWVvdXRFcnJvcic7XG5jb25zdCBNU0dfVU5LTk9XTl9ORVRXT1JLX0VSUk9SID0gJ3Vua25vd25OZXR3b3JrRXJyb3InO1xuY29uc3QgTVNHX0FNUF9VTlJFQUNIQUJMRSA9ICdBTVBVbnJlYWNoYWJsZUVycm9yJztcbmNvbnN0IEdFTkVSQUxfQ09OTkVDVElPTl9FUlJPUlMgPSBbTVNHX0lOVkFMSURfVVJMLCBNU0dfVElNRU9VVCwgTVNHX1VOS05PV05fTkVUV09SS19FUlJPUiwgTVNHX0FNUF9VTlJFQUNIQUJMRV07XG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmZyZWV6ZSh7XG4gIE5PVElGSUNBVElPTl9PUklHSU5fQVBJX1NFQ1VSSVRZLFxuICBOT1RJRklDQVRJT05fT1JJR0lOX0FQSV9ORVRXT1JLLFxuICBOT1RJRklDQVRJT05fT1JJR0lOX0FQSV9TWU5DVVAsXG4gIE5PVElGSUNBVElPTl9PUklHSU5fQVBJX0dFTkVSQUwsXG4gIE5PVElGSUNBVElPTl9PUklHSU5fREFUQUJBU0UsXG4gIE5PVElGSUNBVElPTl9PUklHSU5fQVVUSEVOVElDQVRJT04sXG4gIE5PVElGSUNBVElPTl9PUklHSU5fV09SS1NQQUNFX0ZJTFRFUixcbiAgTk9USUZJQ0FUSU9OX09SSUdJTl9XT1JLU1BBQ0UsXG4gIE5PVElGSUNBVElPTl9PUklHSU5fU1lOQ1VQX1BST0NFU1MsXG4gIE5PVElGSUNBVElPTl9PUklHSU5fQ1VSUkVOQ1lfTUFOQUdFUixcbiAgTk9USUZJQ0FUSU9OX09SSUdJTl9EQVRFUyxcbiAgTk9USUZJQ0FUSU9OX09SSUdJTl9BQ1RJVklUWSxcbiAgTk9USUZJQ0FUSU9OX09SSUdJTl9SRVNPVVJDRSxcbiAgTk9USUZJQ0FUSU9OX09SSUdJTl9JMThORVhULFxuICBOT1RJRklDQVRJT05fT1JJR0lOX1VQREFURV9DSEVDSyxcbiAgTk9USUZJQ0FUSU9OX09SSUdJTl9VUERBVEUsXG4gIE5PVElGSUNBVElPTl9PUklHSU5fU0VUVVAsXG4gIE5PVElGSUNBVElPTl9PUklHSU5fU0VUVElOR1MsXG5cbiAgTk9USUZJQ0FUSU9OX1NFVkVSSVRZX1dBUk5JTkcsXG4gIE5PVElGSUNBVElPTl9TRVZFUklUWV9JTkZPLFxuICBOT1RJRklDQVRJT05fU0VWRVJJVFlfRVJST1IsXG5cbiAgTk9USUZJQ0FUSU9OX0VSUk9SX0xFVkVMX01JTk9SLFxuICBOT1RJRklDQVRJT05fRVJST1JfTEVWRUxfQkxPQ0tFUixcblxuICBOT1RJRklDQVRJT05fT1JJR0lOX1dST05HX01FVEhPRF9VU0FHRSxcblxuICBFUlJPUl9DT0RFX05PX0NPTk5FQ1RJVklUWSxcbiAgRVJST1JfQ09ERV9BQ0NFU1NfREVOSUVELFxuXG5cbiAgTVNHX0lOVkFMSURfVVJMLFxuICBNU0dfVElNRU9VVCxcbiAgTVNHX1VOS05PV05fTkVUV09SS19FUlJPUixcbiAgTVNHX0FNUF9VTlJFQUNIQUJMRSxcbiAgR0VORVJBTF9DT05ORUNUSU9OX0VSUk9SU1xufSlcbjtcbiIsIi8qKlxuICogQGF1dGhvciBOYWRlamRhIE1hbmRyZXNjdVxuICovXG5cbmltcG9ydCBBY3Rpdml0eUNvbnN0YW50cyBmcm9tICcuLi9tb2R1bGVzL3V0aWwvQWN0aXZpdHlDb25zdGFudHMnO1xuXG5jb25zdCBET05PUl9PUkdBTklaQVRJT04gPSAnRG9ub3IgT3JnYW5pemF0aW9uJztcbmNvbnN0IFJFU1BPTlNJQkxFX09SR0FOSVpBVElPTiA9ICdSZXNwb25zaWJsZSBPcmdhbml6YXRpb24nO1xuY29uc3QgRVhFQ1VUSU5HX0FHRU5DWSA9ICdFeGVjdXRpbmcgQWdlbmN5JztcbmNvbnN0IElNUExFTUVOVElOR19BR0VOQ1kgPSAnSW1wbGVtZW50aW5nIEFnZW5jeSc7XG5jb25zdCBCRU5FRklDSUFSWV9BR0VOQ1kgPSAnQmVuZWZpY2lhcnkgQWdlbmN5JztcbmNvbnN0IENPTlRSQUNUSU5HX0FHRU5DWSA9ICdDb250cmFjdGluZyBBZ2VuY3knO1xuY29uc3QgRE9OT1JfQUdFTkNZID0gJ0Rvbm9yJztcbmNvbnN0IFJFR0lPTkFMX0dST1VQID0gJ1JlZ2lvbmFsIEdyb3VwJztcbmNvbnN0IFNFQ1RPUl9HUk9VUCA9ICdTZWN0b3IgR3JvdXAnO1xuXG5jb25zdCBPUkdfUk9MRV9OQU1FUyA9IFtET05PUl9PUkdBTklaQVRJT04sIFJFU1BPTlNJQkxFX09SR0FOSVpBVElPTiwgRVhFQ1VUSU5HX0FHRU5DWSwgSU1QTEVNRU5USU5HX0FHRU5DWSxcbiAgQkVORUZJQ0lBUllfQUdFTkNZLCBDT05UUkFDVElOR19BR0VOQ1ksIFJFR0lPTkFMX0dST1VQLCBTRUNUT1JfR1JPVVBdO1xuXG5jb25zdCBBQ1RVQUwgPSAnQWN0dWFsJztcbmNvbnN0IFBMQU5ORUQgPSAnUGxhbm5lZCc7XG5jb25zdCBDT01NSVRNRU5UUyA9ICdDb21taXRtZW50cyc7XG5jb25zdCBESVNCVVJTRU1FTlRTID0gJ0Rpc2J1cnNlbWVudHMnO1xuY29uc3QgRVhQRU5ESVRVUkVTID0gJ0V4cGVuZGl0dXJlcyc7XG5jb25zdCBBQ1RVQUxfQ09NTUlUTUVOVFMgPSBgJHtBQ1RVQUx9ICR7QWN0aXZpdHlDb25zdGFudHMuQ09NTUlUTUVOVFN9YDtcbmNvbnN0IEFDVFVBTF9ESVNCVVJTRU1FTlRTID0gYCR7QUNUVUFMfSAke0FjdGl2aXR5Q29uc3RhbnRzLkRJU0JVUlNFTUVOVFN9YDtcbmNvbnN0IEFDVFVBTF9FWFBFTkRJVFVSRVMgPSBgJHtBQ1RVQUx9ICR7QWN0aXZpdHlDb25zdGFudHMuRVhQRU5ESVRVUkVTfWA7XG5jb25zdCBQTEFOTkVEX0NPTU1JVE1FTlRTID0gYCR7UExBTk5FRH0gJHtBY3Rpdml0eUNvbnN0YW50cy5DT01NSVRNRU5UU31gO1xuY29uc3QgUExBTk5FRF9ESVNCVVJTRU1FTlRTID0gYCR7UExBTk5FRH0gJHtBY3Rpdml0eUNvbnN0YW50cy5ESVNCVVJTRU1FTlRTfWA7XG5jb25zdCBQTEFOTkVEX0VYUEVORElUVVJFUyA9IGAke1BMQU5ORUR9ICR7QWN0aXZpdHlDb25zdGFudHMuRVhQRU5ESVRVUkVTfWA7XG5jb25zdCBVTkFMTE9DQVRFRF9ESVNCVVJTRU1FTlRTID0gJ1VuYWxsb2NhdGVkIERpc2J1cnNlbWVudHMnO1xuY29uc3QgREVMSVZFUllfUkFURSA9ICdEZWxpdmVyeSByYXRlJztcbmNvbnN0IE1URUZfUFJPSkVDVElPTlMgPSAnTVRFRiBQcm9qZWN0aW9ucyc7XG5cbmNvbnN0IEFESlVTVE1FTlRfVFlQRVMgPSBbQUNUVUFMLCBQTEFOTkVEXTtcbmNvbnN0IEFESlVTVE1FTlRfVFlQRVNfQVBfT1JERVIgPSBbUExBTk5FRCwgQUNUVUFMXTtcblxuY29uc3QgTkVXX0FDVElWSVRZX0lEID0gJzAnO1xuXG5jb25zdCBQUk9QT1NFRF9QUk9KRUNUX0NPU1QgPSAncHBjJztcbmNvbnN0IFJFVklTRURfUFJPSkVDVF9DT1NUID0gJ3JwYyc7XG5cbmNvbnN0IEFDUk9OWU1fRE9OT1JfT1JHQU5JWkFUSU9OID0gJ0ROJztcbmNvbnN0IEFDUk9OWU1fRVhFQ1VUSU5HX0FHRU5DWSA9ICdFQSc7XG5jb25zdCBBQ1JPTllNX0lNUExFTUVOVElOR19BR0VOQ1kgPSAnSUEnO1xuY29uc3QgQUNST05ZTV9CRU5FRklDSUFSWV9BR0VOQ1kgPSAnQkEnO1xuY29uc3QgQUNST05ZTV9SRVNQT05TSUJMRV9PUkdBTklaQVRJT04gPSAnUk8nO1xuXG4vKiogQXBwcm92YWwgc3RhdHVzIHVudHJhbnNsYXRlZCB2YWx1ZXMgKiovXG5jb25zdCBBUFBST1ZBTF9TVEFUVVNfQ1JFQVRFRCA9ICdjcmVhdGVkJztcbmNvbnN0IEFQUFJPVkFMX1NUQVRVU19BUFBST1ZFRCA9ICdhcHByb3ZlZCc7XG5jb25zdCBBUFBST1ZBTF9TVEFUVVNfRURJVEVEID0gJ2VkaXRlZCc7XG5jb25zdCBBUFBST1ZBTF9TVEFUVVNfU1RBUlRFRF9BUFBST1ZFRCA9ICdzdGFydGVkYXBwcm92ZWQnO1xuY29uc3QgQVBQUk9WQUxfU1RBVFVTX1NUQVJURUQgPSAnc3RhcnRlZCc7XG5jb25zdCBBUFBST1ZBTF9TVEFUVVNfTk9UX0FQUFJPVkVEID0gJ25vdF9hcHByb3ZlZCc7XG5jb25zdCBBUFBST1ZBTF9TVEFUVVNfUkVKRUNURUQgPSAncmVqZWN0ZWQnO1xuXG5jb25zdCBPTl9CVURHRVQgPSAnT24gQnVkZ2V0JztcblxuY29uc3QgSU5URVJOQVRJT05BTCA9ICdJbnRlcm5hdGlvbmFsJztcbmNvbnN0IENPVU5UUlkgPSAnQ291bnRyeSc7XG5cbmNvbnN0IFJFTEFURURfRE9DVU1FTlRTID0gJ1JlbGF0ZWQgRG9jdW1lbnRzJztcblxuY29uc3QgVE1QX0VOVElUWV9WQUxJREFUT1IgPSAnZW50aXR5LXZhbGlkYXRvcic7XG5cbi8qKiBSZXF1aXJlZCBzdGF0dXMgKi9cbmNvbnN0IEFMV0FZU19SRVFVSVJFRCA9ICdZJztcblxuZXhwb3J0IGRlZmF1bHQgT2JqZWN0LmZyZWV6ZSh7XG4gIERPTk9SX09SR0FOSVpBVElPTixcbiAgUkVTUE9OU0lCTEVfT1JHQU5JWkFUSU9OLFxuICBFWEVDVVRJTkdfQUdFTkNZLFxuICBJTVBMRU1FTlRJTkdfQUdFTkNZLFxuICBCRU5FRklDSUFSWV9BR0VOQ1ksXG4gIENPTlRSQUNUSU5HX0FHRU5DWSxcbiAgRE9OT1JfQUdFTkNZLFxuICBSRUdJT05BTF9HUk9VUCxcbiAgU0VDVE9SX0dST1VQLFxuICBPUkdfUk9MRV9OQU1FUyxcbiAgQUNUVUFMLFxuICBQTEFOTkVELFxuICBDT01NSVRNRU5UUyxcbiAgRElTQlVSU0VNRU5UUyxcbiAgRVhQRU5ESVRVUkVTLFxuICBBQ1RVQUxfQ09NTUlUTUVOVFMsXG4gIEFDVFVBTF9ESVNCVVJTRU1FTlRTLFxuICBBQ1RVQUxfRVhQRU5ESVRVUkVTLFxuICBQTEFOTkVEX0NPTU1JVE1FTlRTLFxuICBQTEFOTkVEX0RJU0JVUlNFTUVOVFMsXG4gIFBMQU5ORURfRVhQRU5ESVRVUkVTLFxuICBVTkFMTE9DQVRFRF9ESVNCVVJTRU1FTlRTLFxuICBERUxJVkVSWV9SQVRFLFxuICBNVEVGX1BST0pFQ1RJT05TLFxuICBBREpVU1RNRU5UX1RZUEVTLFxuICBBREpVU1RNRU5UX1RZUEVTX0FQX09SREVSLFxuICBORVdfQUNUSVZJVFlfSUQsXG4gIFBST1BPU0VEX1BST0pFQ1RfQ09TVCxcbiAgUkVWSVNFRF9QUk9KRUNUX0NPU1QsXG4gIEFDUk9OWU1fRE9OT1JfT1JHQU5JWkFUSU9OLFxuICBBQ1JPTllNX0VYRUNVVElOR19BR0VOQ1ksXG4gIEFDUk9OWU1fSU1QTEVNRU5USU5HX0FHRU5DWSxcbiAgQUNST05ZTV9CRU5FRklDSUFSWV9BR0VOQ1ksXG4gIEFDUk9OWU1fUkVTUE9OU0lCTEVfT1JHQU5JWkFUSU9OLFxuICBBUFBST1ZBTF9TVEFUVVNfQ1JFQVRFRCxcbiAgQVBQUk9WQUxfU1RBVFVTX0FQUFJPVkVELFxuICBBUFBST1ZBTF9TVEFUVVNfRURJVEVELFxuICBBUFBST1ZBTF9TVEFUVVNfU1RBUlRFRF9BUFBST1ZFRCxcbiAgQVBQUk9WQUxfU1RBVFVTX1NUQVJURUQsXG4gIEFQUFJPVkFMX1NUQVRVU19OT1RfQVBQUk9WRUQsXG4gIEFQUFJPVkFMX1NUQVRVU19SRUpFQ1RFRCxcbiAgT05fQlVER0VULFxuICBJTlRFUk5BVElPTkFMLFxuICBDT1VOVFJZLFxuICBSRUxBVEVEX0RPQ1VNRU5UUyxcbiAgVE1QX0VOVElUWV9WQUxJREFUT1IsXG4gIEFMV0FZU19SRVFVSVJFRFxufSk7XG4iLCJpbXBvcnQgQWN0aXZpdHlDb25zdGFudHMgZnJvbSAnLi4vbW9kdWxlcy91dGlsL0FjdGl2aXR5Q29uc3RhbnRzJztcbmltcG9ydCBGZWF0dXJlTWFuYWdlckNvbnN0YW50cyBmcm9tICcuLi9tb2R1bGVzL3V0aWwvRmVhdHVyZU1hbmFnZXJDb25zdGFudHMnO1xuaW1wb3J0IFZhbHVlQ29uc3RhbnRzIGZyb20gJy4vVmFsdWVDb25zdGFudHMnO1xuXG4vKipcbiAqIFRoaXMgaXMgYSBzZXQgb2YgZmllbGQgcGF0aHMgdGhhdCBhcmUgdXNlZCBmb3IgZnJlcXVlbnQgbmVlZHNcbiAqIEBhdXRob3IgTmFkZWpkYSBNYW5kcmVzY3VcbiAqL1xuXG5leHBvcnQgY29uc3QgRlVORElOR19BQ1RJVkVfTElTVCA9ICdmdW5kaW5nc35hY3RpdmVfbGlzdCc7XG5leHBvcnQgY29uc3QgRlVORElOR19UWVBFX09GX0FTU0lTVEFOQ0UgPSBgJHtBY3Rpdml0eUNvbnN0YW50cy5GVU5ESU5HU31+JHtBY3Rpdml0eUNvbnN0YW50cy5UWVBFX09GX0FTU0lTVEFOQ0V9YDtcbmV4cG9ydCBjb25zdCBGVU5ESU5HX0RFVEFJTFNfUEFUSCA9IGAke0FjdGl2aXR5Q29uc3RhbnRzLkZVTkRJTkdTfX4ke0FjdGl2aXR5Q29uc3RhbnRzLkZVTkRJTkdfREVUQUlMU31gO1xuLyoqXG4gKiBMZWdhY3kgZnVuZGluZyBjdXJyZW5jeSBwYXRoIHVzZWQgZm9yIGRhdGEgbWlncmF0aW9uXG4gKiBAZGVwcmVjYXRlZCBzaW5jZSAxLjRcbiAqL1xuZXhwb3J0IGNvbnN0IEZVTkRJTkdfQ1VSUkVOQ1lfUEFUSCA9IGAke0ZVTkRJTkdfREVUQUlMU19QQVRIfX4ke0FjdGl2aXR5Q29uc3RhbnRzLkNVUlJFTkNZfWA7XG5leHBvcnQgY29uc3QgTVRFRl9DVVJSRU5DWV9QQVRIID1cbiAgYCR7QWN0aXZpdHlDb25zdGFudHMuRlVORElOR1N9fiR7QWN0aXZpdHlDb25zdGFudHMuTVRFRl9QUk9KRUNUSU9OU31+JHtBY3Rpdml0eUNvbnN0YW50cy5DVVJSRU5DWX1gO1xuZXhwb3J0IGNvbnN0IFBQQ19DVVJSRU5DWV9QQVRIID0gYCR7QWN0aXZpdHlDb25zdGFudHMuUFBDX0FNT1VOVH1+JHtBY3Rpdml0eUNvbnN0YW50cy5DVVJSRU5DWX1gO1xuZXhwb3J0IGNvbnN0IFJQQ19DVVJSRU5DWV9QQVRIID0gYCR7QWN0aXZpdHlDb25zdGFudHMuUlBDX0FNT1VOVH1+JHtBY3Rpdml0eUNvbnN0YW50cy5DVVJSRU5DWX1gO1xuZXhwb3J0IGNvbnN0IENPTVBPTkVOVF9DVVJSRU5DWV9QQVRIID1cbiAgYCR7QWN0aXZpdHlDb25zdGFudHMuQ09NUE9ORU5UU31+JHtBY3Rpdml0eUNvbnN0YW50cy5DT01QT05FTlRfRlVORElOR31+JHtBY3Rpdml0eUNvbnN0YW50cy5DVVJSRU5DWX1gO1xuZXhwb3J0IGNvbnN0IERJU0JVUlNFTUVOVFNfUEFUSCA9IGAke0FjdGl2aXR5Q29uc3RhbnRzLkZVTkRJTkdTfX4ke0FjdGl2aXR5Q29uc3RhbnRzLkRJU0JVUlNFTUVOVFN9YDtcbmV4cG9ydCBjb25zdCBBQ1RJVklUWV9JTlRFUk5BTF9JRFNfSU5URVJOQUxfSURfUEFUSCA9ICdhY3Rpdml0eV9pbnRlcm5hbF9pZHN+aW50ZXJuYWxfaWQnO1xuZXhwb3J0IGNvbnN0IEFDVElWSVRZX0lOVEVSTkFMX0lEU19PUkdBTklaQVRJT05fUEFUSCA9ICdhY3Rpdml0eV9pbnRlcm5hbF9pZHN+b3JnYW5pemF0aW9uJztcbmV4cG9ydCBjb25zdCBMT0NBVElPTl9QQVRIID0gJ2xvY2F0aW9uc35sb2NhdGlvbic7XG5leHBvcnQgY29uc3QgTkFUSU9OQUxfUExBTl9PQkpFQ1RJVkVfUEFUSCA9ICduYXRpb25hbF9wbGFuX29iamVjdGl2ZX5wcm9ncmFtJztcbmV4cG9ydCBjb25zdCBQUklNQVJZX1BST0dSQU1fUEFUSCA9ICdwcmltYXJ5X3Byb2dyYW1zfnByb2dyYW0nO1xuZXhwb3J0IGNvbnN0IFNFQ09OREFSWV9QUk9HUkFNX1BBVEggPSAnc2Vjb25kYXJ5X3Byb2dyYW1zfnByb2dyYW0nO1xuZXhwb3J0IGNvbnN0IFBSSU1BUllfU0VDVE9SX1BBVEggPSAncHJpbWFyeV9zZWN0b3JzfnNlY3Rvcic7XG5leHBvcnQgY29uc3QgU0VDT05EQVJZX1NFQ1RPUl9QQVRIID0gJ3NlY29uZGFyeV9zZWN0b3JzfnNlY3Rvcic7XG5leHBvcnQgY29uc3QgVEVSVElBUllfU0VDVE9SX1BBVEggPSAndGVydGlhcnlfc2VjdG9yc35zZWN0b3InO1xuZXhwb3J0IGNvbnN0IERPTk9SX09SR0FOSVpBVElPTlNfUEFUSCA9ICdkb25vcl9vcmdhbml6YXRpb25+b3JnYW5pemF0aW9uJztcbmV4cG9ydCBjb25zdCBSRVNQT05TSUJMRV9PUkdBTklaQVRJT05fQlVER0VUU19QQVRIID1cbiAgYCR7QWN0aXZpdHlDb25zdGFudHMuUkVTUE9OU0lCTEVfT1JHQU5JWkFUSU9OfX4ke0FjdGl2aXR5Q29uc3RhbnRzLkJVREdFVFN9YDtcblxuZXhwb3J0IGNvbnN0IFJFTEFURURfT1JHU19QQVRIUyA9IFZhbHVlQ29uc3RhbnRzLk9SR19ST0xFX05BTUVTLm1hcChvcmdSb2xlID0+IEFjdGl2aXR5Q29uc3RhbnRzLnRvRmllbGROYW1lKG9yZ1JvbGUpKTtcbmV4cG9ydCBjb25zdCBSRUxBVEVEX09SR1NfT1JHQU5JWkFUSU9OX1BBVEhTID0gVmFsdWVDb25zdGFudHMuT1JHX1JPTEVfTkFNRVMubWFwKFxuICBvcmdSb2xlID0+IGAke0FjdGl2aXR5Q29uc3RhbnRzLnRvRmllbGROYW1lKG9yZ1JvbGUpfX4ke0FjdGl2aXR5Q29uc3RhbnRzLk9SR0FOSVpBVElPTn1gKTtcblxuZXhwb3J0IGNvbnN0IFJJQ0hfVEVYVF9GSUVMRFMgPSBuZXcgU2V0KFtBY3Rpdml0eUNvbnN0YW50cy5TVEFUVVNfUkVBU09OLCBBY3Rpdml0eUNvbnN0YW50cy5PQkpFQ1RJVkUsXG4gIEFjdGl2aXR5Q29uc3RhbnRzLkRFU0NSSVBUSU9OLCBBY3Rpdml0eUNvbnN0YW50cy5QUk9KRUNUX0NPTU1FTlRTLCBBY3Rpdml0eUNvbnN0YW50cy5MRVNTT05TX0xFQVJORUQsXG4gIEFjdGl2aXR5Q29uc3RhbnRzLlBST0pFQ1RfSU1QQUNULCBBY3Rpdml0eUNvbnN0YW50cy5BQ1RJVklUWV9TVU1NQVJZLCBBY3Rpdml0eUNvbnN0YW50cy5DT05ESVRJT05BTElUSUVTLFxuICBBY3Rpdml0eUNvbnN0YW50cy5QUk9KRUNUX01BTkFHRU1FTlQsIEFjdGl2aXR5Q29uc3RhbnRzLlJFU1VMVFMsXG5dKTtcblxuZXhwb3J0IGNvbnN0IFBBVEhTX1dJVEhfVFJFRV9TVFJVQ1RVUkUgPSBuZXcgU2V0KFtOQVRJT05BTF9QTEFOX09CSkVDVElWRV9QQVRILCBQUklNQVJZX1BST0dSQU1fUEFUSCxcbiAgU0VDT05EQVJZX1BST0dSQU1fUEFUSCwgUFJJTUFSWV9TRUNUT1JfUEFUSCwgU0VDT05EQVJZX1NFQ1RPUl9QQVRILCBURVJUSUFSWV9TRUNUT1JfUEFUSF0pO1xuXG5leHBvcnQgY29uc3QgUEFUSFNfV0lUSF9ISUVSQVJDSElDQUxfVkFMVUVTID0gbmV3IFNldChbTkFUSU9OQUxfUExBTl9PQkpFQ1RJVkVfUEFUSCwgUFJJTUFSWV9QUk9HUkFNX1BBVEgsXG4gIFNFQ09OREFSWV9QUk9HUkFNX1BBVEgsIFBSSU1BUllfU0VDVE9SX1BBVEgsIFNFQ09OREFSWV9TRUNUT1JfUEFUSCwgVEVSVElBUllfU0VDVE9SX1BBVEgsIExPQ0FUSU9OX1BBVEhdKTtcblxuZXhwb3J0IGNvbnN0IEFDVElWSVRZX0NPTlRBQ1RfUEFUSFMgPSBbQWN0aXZpdHlDb25zdGFudHMuRE9OT1JfQ09OVEFDVCwgQWN0aXZpdHlDb25zdGFudHMuUFJPSkVDVF9DT09SRElOQVRPUl9DT05UQUNULFxuICBBY3Rpdml0eUNvbnN0YW50cy5TRUNUT1JfTUlOSVNUUllfQ09OVEFDVCwgQWN0aXZpdHlDb25zdGFudHMuTU9GRURfQ09OVEFDVCxcbiAgQWN0aXZpdHlDb25zdGFudHMuSU1QTEVNRU5USU5HX0VYRUNVVElOR19BR0VOQ1lfQ09OVEFDVF07XG5cbmV4cG9ydCBjb25zdCBUUkFOU0FDVElPTl9UWVBFUyA9IFtBY3Rpdml0eUNvbnN0YW50cy5DT01NSVRNRU5UUywgQWN0aXZpdHlDb25zdGFudHMuRElTQlVSU0VNRU5UUyxcbiAgQWN0aXZpdHlDb25zdGFudHMuRVhQRU5ESVRVUkVTXTtcbmV4cG9ydCBjb25zdCBUUkFOU0FDVElPTl9UWVBFU19PUkRFUkVEID0gVFJBTlNBQ1RJT05fVFlQRVM7XG5leHBvcnQgY29uc3QgRlVORElOR19UUkFOU0FDVElPTl9UWVBFUyA9IFsuLi5UUkFOU0FDVElPTl9UWVBFUywgQWN0aXZpdHlDb25zdGFudHMuRVNUSU1BVEVEX0RJU0JVUlNFTUVOVFNdO1xuZXhwb3J0IGNvbnN0IEFESlVTVE1FTlRfVFlQRV9QQVRIUyA9IEZVTkRJTkdfVFJBTlNBQ1RJT05fVFlQRVMubWFwKFxuICB0dCA9PiBgJHtBY3Rpdml0eUNvbnN0YW50cy5GVU5ESU5HU31+JHt0dH1+JHtBY3Rpdml0eUNvbnN0YW50cy5BREpVU1RNRU5UX1RZUEV9YCk7XG5leHBvcnQgY29uc3QgRlVORElOR19DVVJSRU5DWV9QQVRIUyA9IFRSQU5TQUNUSU9OX1RZUEVTLm1hcChcbiAgdHQgPT4gYCR7QWN0aXZpdHlDb25zdGFudHMuRlVORElOR1N9fiR7dHR9fiR7QWN0aXZpdHlDb25zdGFudHMuQ1VSUkVOQ1l9YCk7XG5cbmV4cG9ydCBjb25zdCBQQVRIU19GT1JfQUNUSVZJVFlfQ1VSUkVOQ1kgPSBbRlVORElOR19DVVJSRU5DWV9QQVRILCBNVEVGX0NVUlJFTkNZX1BBVEgsIENPTVBPTkVOVF9DVVJSRU5DWV9QQVRILFxuICBQUENfQ1VSUkVOQ1lfUEFUSCwgUlBDX0NVUlJFTkNZX1BBVEgsIC4uLkZVTkRJTkdfQ1VSUkVOQ1lfUEFUSFNdO1xuXG5leHBvcnQgY29uc3QgUEFUSFNfRk9SX0NVUlJFTkNZID0gbmV3IFNldChbQWN0aXZpdHlDb25zdGFudHMuQ1VSUkVOQ1ksIC4uLlBBVEhTX0ZPUl9BQ1RJVklUWV9DVVJSRU5DWV0pO1xuXG5leHBvcnQgY29uc3QgRE9fTk9UX0hZRFJBVEVfRklFTERTX0xJU1QgPSBbQWN0aXZpdHlDb25zdGFudHMuQVBQUk9WQUxfU1RBVFVTXTtcblxuLyogRmllbGRzIHBhdGhzIGFsdGVybmF0aXZlIHZhbHVlcyBsb2NhdGlvbiAqL1xuZXhwb3J0IGNvbnN0IEFMVEVSTkFURV9WQUxVRV9QQVRIID0ge307XG5BTFRFUk5BVEVfVkFMVUVfUEFUSFtBY3Rpdml0eUNvbnN0YW50cy5DUkVBVEVEX09OXSA9IEFjdGl2aXR5Q29uc3RhbnRzLkNMSUVOVF9DUkVBVEVEX09OO1xuQUxURVJOQVRFX1ZBTFVFX1BBVEhbQWN0aXZpdHlDb25zdGFudHMuTU9ESUZJRURfT05dID0gQWN0aXZpdHlDb25zdGFudHMuQ0xJRU5UX1VQREFURURfT047XG5cbi8qIEZNIHBhdGhzIGZvciBzb21lIGFjdGl2aXR5IGZpZWxkcyB0aGF0IGFyZSBhbHdheXMgcHJlc2VudCBpbiBmaWVsZHMgZGVmLCBidXQgbWF5IGJlIGhpZGRlbiBmcm9tIGRpc3BsYXkgdGhyb3VnaCBGTSAqL1xuZXhwb3J0IGNvbnN0IEFDVElWSVRZX0ZJRUxEU19GTV9QQVRIID0ge307XG5BQ1RJVklUWV9GSUVMRFNfRk1fUEFUSFtBY3Rpdml0eUNvbnN0YW50cy5NT0RJRklFRF9CWV0gPSBGZWF0dXJlTWFuYWdlckNvbnN0YW50cy5BQ1RJVklUWV9MQVNUX1VQREFURURfQlk7XG5BQ1RJVklUWV9GSUVMRFNfRk1fUEFUSFtBY3Rpdml0eUNvbnN0YW50cy5NT0RJRklFRF9PTl0gPSBGZWF0dXJlTWFuYWdlckNvbnN0YW50cy5BQ1RJVklUWV9MQVNUX1VQREFURURfT047XG5cbi8qIFBvc3NpYmxlIE9wdGlvbnMgZmllbGRzIHBhdGggcHJlZml4ZXMgKi9cbmV4cG9ydCBjb25zdCBQUkVGSVhfQUNUSVZJVFkgPSBudWxsO1xuZXhwb3J0IGNvbnN0IFBSRUZJWF9DT05UQUNUID0gJ2NvbnRhY3QnO1xuZXhwb3J0IGNvbnN0IFBSRUZJWF9SRVNPVVJDRSA9ICdyZXNvdXJjZSc7XG5leHBvcnQgY29uc3QgUFJFRklYX0NPTU1PTiA9ICdjb21tb24nO1xuZXhwb3J0IGNvbnN0IFBSRUZJWF9MSVNUID0gW1BSRUZJWF9BQ1RJVklUWSwgUFJFRklYX0NPTlRBQ1QsIFBSRUZJWF9SRVNPVVJDRSwgUFJFRklYX0NPTU1PTl07XG5cbmV4cG9ydCBjb25zdCBGSUVMRF9QQVRIID0gJ2ZpZWxkLXBhdGgnO1xuZXhwb3J0IGNvbnN0IEZJRUxEX09QVElPTlMgPSAncG9zc2libGUtb3B0aW9ucyc7XG5leHBvcnQgY29uc3QgRklFTERfT1BUSU9OX1VTQUJMRSA9ICdvcHRpb24tdXNhYmxlJztcbmV4cG9ydCBjb25zdCBMSVNUX01BWF9TSVpFID0gJ3NpemUtbGltaXQnO1xuZXhwb3J0IGNvbnN0IFJFR0VYX1BBVFRFUk4gPSAncmVnZXgtcGF0dGVybic7XG5leHBvcnQgY29uc3QgRklFTERfTkFNRSA9ICdmaWVsZF9uYW1lJztcbmV4cG9ydCBjb25zdCBGSUVMRF9MQUJFTCA9ICdmaWVsZF9sYWJlbCc7XG5leHBvcnQgY29uc3QgRklFTERfUkVRVUlSRUQgPSAncmVxdWlyZWQnO1xuZXhwb3J0IGNvbnN0IEZJRUxEX1VOSVFVRV9DT05TVFJBSU5UID0gJ3VuaXF1ZV9jb25zdHJhaW50JztcbmV4cG9ydCBjb25zdCBGSUVMRF9UWVBFID0gJ2ZpZWxkX3R5cGUnO1xuZXhwb3J0IGNvbnN0IEZJRUxEX0xFTkdUSCA9ICdmaWVsZF9sZW5ndGgnO1xuZXhwb3J0IGNvbnN0IEZJRUxEX1BFUkNFTlRBR0UgPSAncGVyY2VudGFnZSc7XG5leHBvcnQgY29uc3QgRklFTERfUEVSQ0VOVEFHRV9DT05TVFJBSU5UID0gJ3BlcmNlbnRhZ2VfY29uc3RyYWludCc7XG5leHBvcnQgY29uc3QgRklFTERfSVRFTV9UWVBFID0gJ2l0ZW0tdHlwZSc7XG5leHBvcnQgY29uc3QgRklFTERfSU1QT1JUQUJMRSA9ICdpbXBvcnRhYmxlJztcbmV4cG9ydCBjb25zdCBGSUVMRF9JRF9PTkxZID0gJ2lkX29ubHknO1xuZXhwb3J0IGNvbnN0IEZJRUxEX01VTFRJUExFX1ZBTFVFU19BTExPV0VEID0gJ211bHRpcGxlX3ZhbHVlcyc7XG5leHBvcnQgY29uc3QgRklFTERfVFJFRV9DT0xMRUNUSU9OID0gJ3RyZWVfY29sbGVjdGlvbic7XG5leHBvcnQgY29uc3QgRklFTERfQ0hJTERSRU4gPSAnY2hpbGRyZW4nO1xuZXhwb3J0IGNvbnN0IEZJRUxEX0RFUEVOREVOQ0lFUyA9ICdkZXBlbmRlbmNpZXMnO1xuXG5leHBvcnQgY29uc3QgRklFTERfVFlQRV9MSVNUID0gJ2xpc3QnO1xuZXhwb3J0IGNvbnN0IEZJRUxEX1RZUEVfT0JKRUNUID0gJ29iamVjdCc7XG5leHBvcnQgY29uc3QgRklFTERfVFlQRV9TVFJJTkcgPSAnc3RyaW5nJztcbmV4cG9ydCBjb25zdCBGSUVMRF9UWVBFX0xPTkcgPSAnbG9uZyc7XG5leHBvcnQgY29uc3QgRklFTERfVFlQRV9GTE9BVCA9ICdmbG9hdCc7XG5leHBvcnQgY29uc3QgRklFTERfVFlQRV9CT09MRUFOID0gJ2Jvb2xlYW4nO1xuZXhwb3J0IGNvbnN0IEZJRUxEX1RZUEVfREFURSA9ICdkYXRlJztcbmV4cG9ydCBjb25zdCBGSUVMRF9UWVBFX1RJTUVTVEFNUCA9ICd0aW1lc3RhbXAnO1xuXG5leHBvcnQgZGVmYXVsdCBPYmplY3QuZnJlZXplKHtcbiAgRlVORElOR19BQ1RJVkVfTElTVCxcbiAgRlVORElOR19ERVRBSUxTX1BBVEgsXG4gIEZVTkRJTkdfQ1VSUkVOQ1lfUEFUSCxcbiAgTVRFRl9DVVJSRU5DWV9QQVRILFxuICBQUENfQ1VSUkVOQ1lfUEFUSCxcbiAgUlBDX0NVUlJFTkNZX1BBVEgsXG4gIENPTVBPTkVOVF9DVVJSRU5DWV9QQVRILFxuICBESVNCVVJTRU1FTlRTX1BBVEgsXG4gIEFDVElWSVRZX0lOVEVSTkFMX0lEU19JTlRFUk5BTF9JRF9QQVRILFxuICBBQ1RJVklUWV9JTlRFUk5BTF9JRFNfT1JHQU5JWkFUSU9OX1BBVEgsXG4gIExPQ0FUSU9OX1BBVEgsXG4gIE5BVElPTkFMX1BMQU5fT0JKRUNUSVZFX1BBVEgsXG4gIFBSSU1BUllfUFJPR1JBTV9QQVRILFxuICBTRUNPTkRBUllfUFJPR1JBTV9QQVRILFxuICBQUklNQVJZX1NFQ1RPUl9QQVRILFxuICBTRUNPTkRBUllfU0VDVE9SX1BBVEgsXG4gIFRFUlRJQVJZX1NFQ1RPUl9QQVRILFxuICBET05PUl9PUkdBTklaQVRJT05TX1BBVEgsXG4gIFJFU1BPTlNJQkxFX09SR0FOSVpBVElPTl9CVURHRVRTX1BBVEgsXG4gIFJFTEFURURfT1JHU19QQVRIUyxcbiAgUkVMQVRFRF9PUkdTX09SR0FOSVpBVElPTl9QQVRIUyxcbiAgUklDSF9URVhUX0ZJRUxEUyxcbiAgUEFUSFNfV0lUSF9UUkVFX1NUUlVDVFVSRSxcbiAgUEFUSFNfV0lUSF9ISUVSQVJDSElDQUxfVkFMVUVTLFxuICBBQ1RJVklUWV9DT05UQUNUX1BBVEhTLFxuICBUUkFOU0FDVElPTl9UWVBFUyxcbiAgVFJBTlNBQ1RJT05fVFlQRVNfT1JERVJFRCxcbiAgRlVORElOR19UUkFOU0FDVElPTl9UWVBFUyxcbiAgQURKVVNUTUVOVF9UWVBFX1BBVEhTLFxuICBGVU5ESU5HX0NVUlJFTkNZX1BBVEhTLFxuICBQQVRIU19GT1JfQUNUSVZJVFlfQ1VSUkVOQ1ksXG4gIFBBVEhTX0ZPUl9DVVJSRU5DWSxcbiAgRE9fTk9UX0hZRFJBVEVfRklFTERTX0xJU1QsXG4gIEFMVEVSTkFURV9WQUxVRV9QQVRILFxuICBBQ1RJVklUWV9GSUVMRFNfRk1fUEFUSCxcbiAgUFJFRklYX0FDVElWSVRZLFxuICBQUkVGSVhfQ09OVEFDVCxcbiAgUFJFRklYX1JFU09VUkNFLFxuICBQUkVGSVhfQ09NTU9OLFxuICBQUkVGSVhfTElTVCxcbiAgRklFTERfUEFUSCxcbiAgRklFTERfT1BUSU9OUyxcbiAgRklFTERfT1BUSU9OX1VTQUJMRSxcbiAgTElTVF9NQVhfU0laRSxcbiAgUkVHRVhfUEFUVEVSTixcbiAgRklFTERfTkFNRSxcbiAgRklFTERfTEFCRUwsXG4gIEZJRUxEX1JFUVVJUkVELFxuICBGSUVMRF9VTklRVUVfQ09OU1RSQUlOVCxcbiAgRklFTERfVFlQRSxcbiAgRklFTERfTEVOR1RILFxuICBGSUVMRF9QRVJDRU5UQUdFLFxuICBGSUVMRF9QRVJDRU5UQUdFX0NPTlNUUkFJTlQsXG4gIEZJRUxEX0lURU1fVFlQRSxcbiAgRklFTERfSU1QT1JUQUJMRSxcbiAgRklFTERfSURfT05MWSxcbiAgRklFTERfTVVMVElQTEVfVkFMVUVTX0FMTE9XRUQsXG4gIEZJRUxEX1RSRUVfQ09MTEVDVElPTixcbiAgRklFTERfQ0hJTERSRU4sXG4gIEZJRUxEX0RFUEVOREVOQ0lFUyxcbiAgRklFTERfVFlQRV9MSVNULFxuICBGSUVMRF9UWVBFX09CSkVDVCxcbiAgRklFTERfVFlQRV9TVFJJTkcsXG4gIEZJRUxEX1RZUEVfTE9ORyxcbiAgRklFTERfVFlQRV9GTE9BVCxcbiAgRklFTERfVFlQRV9CT09MRUFOLFxuICBGSUVMRF9UWVBFX0RBVEUsXG4gIEZJRUxEX1RZUEVfVElNRVNUQU1QLFxufSk7XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBjbGFzcy1tZXRob2RzLXVzZS10aGlzICovXG5pbXBvcnQgQ29uc3RhbnRzIGZyb20gJy4uLy4uL3V0aWxzL0NvbnN0YW50cyc7XG5pbXBvcnQgKiBhcyBGUEMgZnJvbSAnLi4vLi4vdXRpbHMvRmllbGRQYXRoQ29uc3RhbnRzJztcblxubGV0IGxvZ2dlciA9IG51bGw7XG5cbi8qKlxuICogVGhpcyBpcyBhIGhlbHBlciBjbGFzcyBmb3IgY2hlY2tpbmcgZmllbGRzIHN0YXR1cywgZ2V0dGluZyBmaWVsZCBvcHRpb25zIHRyYW5zbGF0aW9ucyBhbmQgdGhlIGxpa2UuXG4gKlxuICogQGF1dGhvciBOYWRlamRhIE1hbmRyZXNjdVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGaWVsZHNNYW5hZ2VyIHtcbiAgLyoqXG4gICAqIFNoYWxsb3cgY2xvbmUgb2YgYW5vdGhlciBuZXdGaWVsZHNNYW5hZ2VyXG4gICAqIEBwYXJhbSBmaWVsZHNNYW5hZ2VyXG4gICAqIEByZXR1cm4ge0ZpZWxkc01hbmFnZXJ9XG4gICAqL1xuICBzdGF0aWMgY2xvbmUoZmllbGRzTWFuYWdlcjogRmllbGRzTWFuYWdlciwgTG9nZ2VyTWFuYWdlcikge1xuICAgIGNvbnN0IG5ld0ZpZWxkc01hbmFnZXIgPSBuZXcgRmllbGRzTWFuYWdlcihbXSwgW10sIG51bGwsXG4gICAgICBMb2dnZXJNYW5hZ2VyKTtcbiAgICBPYmplY3QuYXNzaWduKG5ld0ZpZWxkc01hbmFnZXIsIGZpZWxkc01hbmFnZXIpO1xuICAgIHJldHVybiBuZXdGaWVsZHNNYW5hZ2VyO1xuICB9XG5cbiAgY29uc3RydWN0b3IoZmllbGRzRGVmLCBwb3NzaWJsZVZhbHVlc0NvbGxlY3Rpb24sIGN1cnJlbnRMYW5ndWFnZSwgTG9nZ2VyTWFuYWdlcikge1xuICAgIC8vIFRPRE8gcmVtb3ZlIGNhY2hlXG4gICAgbG9nZ2VyID0gbmV3IExvZ2dlck1hbmFnZXIoJ0ZpZWxkcyBtYW5hZ2VyJyk7XG4gICAgbG9nZ2VyLmRlYnVnKCdjb25zdHJ1Y3RvcicpO1xuICAgIHRoaXMuX2ZpZWxkc0RlZiA9IGZpZWxkc0RlZjtcbiAgICB0aGlzLl9wb3NzaWJsZVZhbHVlc01hcCA9IHt9O1xuICAgIHBvc3NpYmxlVmFsdWVzQ29sbGVjdGlvbi5mb3JFYWNoKHB2ID0+IHtcbiAgICAgIHRoaXMuX3Bvc3NpYmxlVmFsdWVzTWFwW3B2LmlkXSA9IHB2W0ZQQy5GSUVMRF9PUFRJT05TXTtcbiAgICB9KTtcbiAgICB0aGlzLl9maWVsZFBhdGhzRW5hYmxlZFN0YXR1c01hcCA9IHt9O1xuICAgIHRoaXMuX2xhbmcgPSBjdXJyZW50TGFuZ3VhZ2UgfHwgQ29uc3RhbnRzLkxBTkdVQUdFX0VOR0xJU0g7XG4gICAgdGhpcy5fZGVmYXVsdExhbmcgPSBDb25zdGFudHMuTEFOR1VBR0VfRU5HTElTSDtcbiAgICB0aGlzLmNsZWFudXAoZmllbGRzRGVmKTtcbiAgfVxuXG4gIGNsZWFudXAoZmllbGRzRGVmKSB7XG4gICAgLy8gVE9ETyBkZWNpZGUgZWl0aGVyIHRvIGtlZXAgY2xlYW51cCAoaGVyZSBvciBhbnl3aGVyZSBlbHNlKSBvciBjaGVjayBpZiB3ZSBuZWVkIHRvIHN0YW5kYXJkaXplIEFQSVxuICAgIGZpZWxkc0RlZi5mb3JFYWNoKGZkID0+IHtcbiAgICAgIGlmIChmZC5jaGlsZHJlbikge1xuICAgICAgICB0aGlzLmNsZWFudXAoZmQuY2hpbGRyZW4pO1xuICAgICAgfVxuICAgICAgaWYgKGZkLmZpZWxkX2xhYmVsKSB7XG4gICAgICAgIE9iamVjdC5rZXlzKGZkLmZpZWxkX2xhYmVsKS5mb3JFYWNoKGxhbmcgPT4ge1xuICAgICAgICAgICAgZmQuZmllbGRfbGFiZWxbbGFuZy50b0xvd2VyQ2FzZSgpXSA9IGZkLmZpZWxkX2xhYmVsW2xhbmddO1xuICAgICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgc2V0IGN1cnJlbnRMYW5ndWFnZUNvZGUobGFuZykge1xuICAgIHRoaXMuX2xhbmcgPSBsYW5nO1xuICB9XG5cbiAgc2V0IGRlZmF1bHRMYW5ndWFnZUNvZGUobGFuZykge1xuICAgIHRoaXMuX2RlZmF1bHRMYW5nID0gbGFuZztcbiAgfVxuXG4gIGdldCBmaWVsZHNEZWYoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2ZpZWxkc0RlZjtcbiAgfVxuXG4gIGdldCBwb3NzaWJsZVZhbHVlc01hcCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcG9zc2libGVWYWx1ZXNNYXA7XG4gIH1cblxuICBnZXRQb3NzaWJsZVZhbHVlc09wdGlvbnMoZmllbGRQYXRoKSB7XG4gICAgcmV0dXJuIE9iamVjdC52YWx1ZXModGhpcy5fcG9zc2libGVWYWx1ZXNNYXBbZmllbGRQYXRoXSk7XG4gIH1cblxuICBpc0ZpZWxkUGF0aEJ5UGFydHNFbmFibGVkKC4uLnBhdGhQYXJ0cykge1xuICAgIHJldHVybiB0aGlzLmlzRmllbGRQYXRoRW5hYmxlZChwYXRoUGFydHMuam9pbignficpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVja3MgaWYgdGhlIHNwZWNpZmllZCBmaWVsZCBwYXRoIGlzIGVuYWJsZWQgaW4gQU1QIEZNXG4gICAqIEBwYXJhbSBmaWVsZFBhdGhcbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICovXG4gIGlzRmllbGRQYXRoRW5hYmxlZChmaWVsZFBhdGgpIHtcbiAgICBpZiAodGhpcy5fZmllbGRQYXRoc0VuYWJsZWRTdGF0dXNNYXBbZmllbGRQYXRoXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLl9idWlsZEZpZWxkUGF0aFN0YXR1cyhmaWVsZFBhdGgpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fZmllbGRQYXRoc0VuYWJsZWRTdGF0dXNNYXBbZmllbGRQYXRoXTtcbiAgfVxuXG4gIF9idWlsZEZpZWxkUGF0aFN0YXR1cyhmaWVsZFBhdGgpIHtcbiAgICBjb25zdCBwYXRoUGFydHMgPSBmaWVsZFBhdGguc3BsaXQoJ34nKTtcbiAgICBsZXQgY3VycmVudFRyZWUgPSB0aGlzLl9maWVsZHNEZWY7XG4gICAgY29uc3QgaXNEaXNhYmxlZCA9IHBhdGhQYXJ0cy5zb21lKHBhcnQgPT4ge1xuICAgICAgY3VycmVudFRyZWUgPSBjdXJyZW50VHJlZS5maW5kKGZpZWxkID0+IGZpZWxkLmZpZWxkX25hbWUgPT09IHBhcnQpO1xuICAgICAgaWYgKGN1cnJlbnRUcmVlICYmICgoY3VycmVudFRyZWVbRlBDLkZJRUxEX1RZUEVdID09PSBGUEMuRklFTERfVFlQRV9MSVNUXG4gICAgICAgICYmIGN1cnJlbnRUcmVlW0ZQQy5GSUVMRF9JVEVNX1RZUEVdID09PSBGUEMuRklFTERfVFlQRV9PQkpFQ1QpXG4gICAgICAgIHx8IGN1cnJlbnRUcmVlW0ZQQy5GSUVMRF9UWVBFXSA9PT0gRlBDLkZJRUxEX1RZUEVfT0JKRUNUKSkge1xuICAgICAgICBjdXJyZW50VHJlZSA9IGN1cnJlbnRUcmVlLmNoaWxkcmVuO1xuICAgICAgfVxuICAgICAgcmV0dXJuICFjdXJyZW50VHJlZTtcbiAgICB9KTtcbiAgICB0aGlzLl9maWVsZFBhdGhzRW5hYmxlZFN0YXR1c01hcFtmaWVsZFBhdGhdID0gIWlzRGlzYWJsZWQ7XG4gIH1cblxuICAvKipcbiAgICogRmluZCB0aGUgdHJhbnNsYXRpb24gZm9yIHRoZSBvcmlnaW5hbCB2YWx1ZSBmb3IgdGhlIGdpdmVuIGZpZWxkIHBhdGgsIGlmIGZvdW5kLCBvdGhlcndpc2UgcmV0dXJucyBudWxsXG4gICAqIEBwYXJhbSBmaWVsZFBhdGhcbiAgICogQHBhcmFtIG9yaWdWYWx1ZVxuICAgKiBAcmV0dXJuIHtzdHJpbmd8bnVsbH1cbiAgICovXG4gIGdldFZhbHVlVHJhbnNsYXRpb24oZmllbGRQYXRoLCBvcmlnVmFsdWUpIHtcbiAgICAvLyBmYWxsYmFjayB0byBvcmlnaW5hbCB1bnRyYW5zbGF0ZWQgdmFsdWVcbiAgICBsZXQgdHJuVmFsdWUgPSBvcmlnVmFsdWU7XG4gICAgY29uc3Qgb3B0aW9ucyA9IHRoaXMuX3Bvc3NpYmxlVmFsdWVzTWFwW2ZpZWxkUGF0aF07XG4gICAgaWYgKG9wdGlvbnMpIHtcbiAgICAgIGNvbnN0IG9wdGlvbiA9IE9iamVjdC52YWx1ZXMob3B0aW9ucykuZmluZChvcHQgPT4gb3B0LnZhbHVlID09PSBvcmlnVmFsdWUpO1xuICAgICAgaWYgKG9wdGlvbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGNvbnN0IHRyYW5zbGF0aW9ucyA9IG9wdGlvblsndHJhbnNsYXRlZC12YWx1ZSddO1xuICAgICAgICBpZiAodHJhbnNsYXRpb25zKSB7XG4gICAgICAgICAgdHJuVmFsdWUgPSB0cmFuc2xhdGlvbnNbdGhpcy5fbGFuZ10gfHwgdHJhbnNsYXRpb25zW3RoaXMuX2RlZmF1bHRMYW5nXSB8fCB0cm5WYWx1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJuVmFsdWU7XG4gIH1cblxuICBnZXRGaWVsZExhYmVsVHJhbnNsYXRpb24oZmllbGRQYXRoKSB7XG4gICAgbGV0IHRybkxhYmVsID0gbnVsbDtcbiAgICBjb25zdCBmaWVsZHNEZWYgPSB0aGlzLmdldEZpZWxkRGVmKGZpZWxkUGF0aCk7XG4gICAgaWYgKGZpZWxkc0RlZiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0cm5MYWJlbCA9IGZpZWxkc0RlZi5maWVsZF9sYWJlbFt0aGlzLl9sYW5nXSB8fCBmaWVsZHNEZWYuZmllbGRfbGFiZWxbdGhpcy5fZGVmYXVsdExhbmddIHx8IG51bGw7XG4gICAgfVxuICAgIHJldHVybiB0cm5MYWJlbDtcbiAgfVxuXG4gIGdldEZpZWxkRGVmKGZpZWxkUGF0aCkge1xuICAgIGxldCBmaWVsZHNEZWYgPSB0aGlzLl9maWVsZHNEZWY7XG4gICAgaWYgKGZpZWxkUGF0aCkge1xuICAgICAgZmllbGRQYXRoLnNwbGl0KCd+Jykuc29tZShwYXJ0ID0+IHtcbiAgICAgICAgICBpZiAoIShmaWVsZHNEZWYgaW5zdGFuY2VvZiBBcnJheSkpIHtcbiAgICAgICAgICAgIGZpZWxkc0RlZiA9IGZpZWxkc0RlZi5jaGlsZHJlbjtcbiAgICAgICAgICB9XG4gICAgICAgICAgZmllbGRzRGVmID0gZmllbGRzRGVmLmZpbmQoZmQgPT4gZmQuZmllbGRfbmFtZSA9PT0gcGFydCk7XG4gICAgICAgICAgcmV0dXJuIGZpZWxkc0RlZiA9PT0gdW5kZWZpbmVkO1xuICAgICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgZmllbGRzRGVmID0geyBjaGlsZHJlbjogZmllbGRzRGVmIH07XG4gICAgfVxuICAgIHJldHVybiBmaWVsZHNEZWY7XG4gIH1cblxuICBnZXRGaWVsZFBhdGhzQnlEZXBlbmRlbmNpZXMoZGVwZW5kZW5jaWVzKSB7XG4gICAgY29uc3QgZmllbGRQYXRocyA9IFtdO1xuICAgIHRoaXMuX2dldEZpZWxkUGF0aHNCeURlcGVuZGVuY2llcyhkZXBlbmRlbmNpZXMsIHRoaXMuX2ZpZWxkc0RlZiwgJycsIGZpZWxkUGF0aHMpO1xuICAgIHJldHVybiBmaWVsZFBhdGhzO1xuICB9XG5cbiAgX2dldEZpZWxkUGF0aHNCeURlcGVuZGVuY2llcyhkZXBlbmRlbmNpZXMsIGZpZWxkc0RlZiwgY3VycmVudFBhdGgsIGZpZWxkUGF0aHM6IEFycmF5KSB7XG4gICAgaWYgKCEoZmllbGRzRGVmIGluc3RhbmNlb2YgQXJyYXkpKSB7XG4gICAgICBmaWVsZHNEZWYgPSBmaWVsZHNEZWYuY2hpbGRyZW47XG4gICAgfVxuICAgIGZpZWxkc0RlZi5mb3JFYWNoKGZkID0+IHtcbiAgICAgIGNvbnN0IGhhc0RlcGVuZGVuY3kgPSBmZC5kZXBlbmRlbmNpZXMgJiYgZmQuZGVwZW5kZW5jaWVzLnNvbWUoZGVwID0+IGRlcGVuZGVuY2llcy5pbmNsdWRlcyhkZXApKTtcbiAgICAgIGlmIChmZC5jaGlsZHJlbiB8fCBoYXNEZXBlbmRlbmN5KSB7XG4gICAgICAgIGNvbnN0IGZpZWxkUGF0aCA9IGAke2N1cnJlbnRQYXRofSR7ZmQuZmllbGRfbmFtZX1gO1xuICAgICAgICBpZiAoaGFzRGVwZW5kZW5jeSkge1xuICAgICAgICAgIGZpZWxkUGF0aHMucHVzaChmaWVsZFBhdGgpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChmZC5jaGlsZHJlbikge1xuICAgICAgICAgIHRoaXMuX2dldEZpZWxkUGF0aHNCeURlcGVuZGVuY2llcyhkZXBlbmRlbmNpZXMsIGZkLmNoaWxkcmVuLCBgJHtmaWVsZFBhdGh9fmAsIGZpZWxkUGF0aHMpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBnZXRWYWx1ZShvYmplY3QsIGZpZWxkUGF0aCwgZ2V0T3B0aW9uVHJhbnNsYXRpb24pIHtcbiAgICByZXR1cm4gRmllbGRzTWFuYWdlci5nZXRWYWx1ZShvYmplY3QsIGZpZWxkUGF0aCwgZ2V0T3B0aW9uVHJhbnNsYXRpb24pO1xuICB9XG5cbiAgc3RhdGljIGdldFZhbHVlKG9iamVjdCwgZmllbGRQYXRoLCBnZXRPcHRpb25UcmFuc2xhdGlvbikge1xuICAgIGNvbnN0IHBhcnRzID0gZmllbGRQYXRoID8gZmllbGRQYXRoLnNwbGl0KCd+JykgOiBbXTtcbiAgICBsZXQgdmFsdWUgPSBvYmplY3Q7XG4gICAgcGFydHMuc29tZShwYXJ0ID0+IHtcbiAgICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICAgIGNvbnN0IG5ld0xpc3QgPSBbXTtcbiAgICAgICAgdmFsdWUuZm9yRWFjaChjdXJyZW50ID0+IHtcbiAgICAgICAgICBjb25zdCBuZXdFbGVtZW50ID0gY3VycmVudFtwYXJ0XTtcbiAgICAgICAgICBpZiAobmV3RWxlbWVudCAhPT0gdW5kZWZpbmVkICYmIG5ld0VsZW1lbnQgIT09IG51bGwpIHtcbiAgICAgICAgICAgIG5ld0xpc3QucHVzaChuZXdFbGVtZW50KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICB2YWx1ZSA9IG5ld0xpc3Q7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YWx1ZSA9IHZhbHVlW3BhcnRdO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHZhbHVlID09PSB1bmRlZmluZWQgfHwgdmFsdWUgPT09IG51bGwgfHwgdmFsdWUubGVuZ3RoID09PSAwO1xuICAgIH0pO1xuICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlICE9PSBudWxsICYmIHZhbHVlLmxlbmd0aCAhPT0gMCkge1xuICAgICAgbGV0IHZhbHVlcyA9IFtdLmNvbmNhdCh2YWx1ZSk7XG4gICAgICB2YWx1ZXMgPSB2YWx1ZXMubWFwKHZhbCA9PiB7XG4gICAgICAgIGlmICh2YWwudmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHJldHVybiB2YWw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGdldE9wdGlvblRyYW5zbGF0aW9uKHZhbCwgdGhpcy5fbGFuZywgdGhpcy5fZGVmYXVsdExhbmcpO1xuICAgICAgfSk7XG4gICAgICB2YWx1ZSA9IHZhbHVlIGluc3RhbmNlb2YgQXJyYXkgPyB2YWx1ZXMgOiB2YWx1ZXNbMF07XG4gICAgfVxuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxufVxuIiwiaW1wb3J0IFZhbHVlQ29uc3RhbnRzIGZyb20gJy4uLy4uL3V0aWxzL1ZhbHVlQ29uc3RhbnRzJztcblxuY29uc3QgQ0xJRU5UX0NIQU5HRV9JRCA9ICdhbXAtb2ZmbGluZS1jb250YWN0LWNoYW5nZS1pZCc7XG5jb25zdCBDTElFTlRfQ0hBTkdFX0lEX1BSRUZJWCA9ICdhbXAtb2ZmbGluZS1jb250YWN0LWlkJztcbmNvbnN0IE5BTUUgPSAnbmFtZSc7XG5jb25zdCBMQVNUX05BTUUgPSAnbGFzdF9uYW1lJztcbmNvbnN0IFRJVExFID0gJ3RpdGxlJztcbmNvbnN0IE9SR0FOSVpBVElPTl9OQU1FID0gJ29yZ2FuaXphdGlvbl9uYW1lJztcbmNvbnN0IEZVTkNUSU9OID0gJ2Z1bmN0aW9uJztcbmNvbnN0IE9GRklDRV9BRERSRVNTID0gJ29mZmljZV9hZGRyZXNzJztcbmNvbnN0IENSRUFUT1IgPSAnY3JlYXRvcic7XG5jb25zdCBPUkdBTklTQVRJT05fQ09OVEFDVFMgPSAnb3JnYW5pc2F0aW9uX2NvbnRhY3RzJztcbmNvbnN0IE9SR0FOSVNBVElPTiA9ICdvcmdhbmlzYXRpb24nO1xuY29uc3QgRU1BSUwgPSAnZW1haWwnO1xuY29uc3QgVkFMVUUgPSAndmFsdWUnO1xuY29uc3QgUEhPTkUgPSAncGhvbmUnO1xuY29uc3QgRVhURU5TSU9OX1ZBTFVFID0gJ2V4dGVuc2lvbl92YWx1ZSc7XG5jb25zdCBUWVBFID0gJ3R5cGUnO1xuY29uc3QgRkFYID0gJ2ZheCc7XG5cbmNvbnN0IFRNUF9GT1JNX0lEID0gJ2Zvcm0taWQnO1xuY29uc3QgVE1QX1VOSVFVRV9JRCA9ICd1bmlxdWVJZCc7XG5jb25zdCBUTVBfSFlEUkFURUQgPSAnaHlkcmF0ZWQnO1xuY29uc3QgVE1QX0VSUk9SUyA9ICdlcnJvcnMnO1xuY29uc3QgVE1QX0NPTlRBQ1RfTE9BREVEID0gJ2lzQ29udGFjdExvYWRlZCc7XG5jb25zdCBUTVBfQ09OVEFDVF9MT0FESU5HID0gJ2lzQ29udGFjdExvYWRpbmcnO1xuY29uc3QgVE1QX0VOVElUWV9WQUxJREFUT1IgPSBWYWx1ZUNvbnN0YW50cy5UTVBfRU5USVRZX1ZBTElEQVRPUjtcbmNvbnN0IFRNUF9GSUVMRFMgPSBbVE1QX0ZPUk1fSUQsIFRNUF9VTklRVUVfSUQsIFRNUF9IWURSQVRFRCwgVE1QX0VSUk9SUywgVE1QX0VOVElUWV9WQUxJREFUT1IsXG4gIFRNUF9DT05UQUNUX0xPQURFRCwgVE1QX0NPTlRBQ1RfTE9BRElOR107XG5cblxuZXhwb3J0IGRlZmF1bHQgT2JqZWN0LmZyZWV6ZSh7XG4gIENMSUVOVF9DSEFOR0VfSUQsXG4gIENMSUVOVF9DSEFOR0VfSURfUFJFRklYLFxuICBOQU1FLFxuICBMQVNUX05BTUUsXG4gIFRJVExFLFxuICBPUkdBTklaQVRJT05fTkFNRSxcbiAgRlVOQ1RJT04sXG4gIE9GRklDRV9BRERSRVNTLFxuICBDUkVBVE9SLFxuICBPUkdBTklTQVRJT05fQ09OVEFDVFMsXG4gIE9SR0FOSVNBVElPTixcbiAgRU1BSUwsXG4gIFZBTFVFLFxuICBQSE9ORSxcbiAgRVhURU5TSU9OX1ZBTFVFLFxuICBUWVBFLFxuICBGQVgsXG4gIFRNUF9GT1JNX0lELFxuICBUTVBfVU5JUVVFX0lELFxuICBUTVBfSFlEUkFURUQsXG4gIFRNUF9FUlJPUlMsXG4gIFRNUF9DT05UQUNUX0xPQURFRCxcbiAgVE1QX0NPTlRBQ1RfTE9BRElORyxcbiAgVE1QX0VOVElUWV9WQUxJREFUT1IsXG4gIFRNUF9GSUVMRFNcbn0pO1xuIiwiLyogZXNsaW50LWRpc2FibGUgY2xhc3MtbWV0aG9kcy11c2UtdGhpcyAqL1xuaW1wb3J0IEFjdGl2aXR5Q29uc3RhbnRzIGZyb20gJy4uL3V0aWwvQWN0aXZpdHlDb25zdGFudHMnO1xuaW1wb3J0IEVycm9yQ29uc3RhbnRzIGZyb20gJy4uLy4uL3V0aWxzL2NvbnN0YW50cy9FcnJvckNvbnN0YW50cyc7XG5pbXBvcnQgQ29uc3RhbnRzIGZyb20gJy4uLy4uL3V0aWxzL0NvbnN0YW50cyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEN1cnJlbmN5UmF0ZXNNYW5hZ2VyIHtcbiAgY29uc3RydWN0b3IoY3VycmVuY3lSYXRlcywgYmFzZUN1cnJlbmN5LCB0cmFuc2xhdGUsIGRhdGVVdGlscywgZXJyb3JOb3RpZmljYXRpb25IZWxwZXIpIHtcbiAgICB0aGlzLl9jdXJyZW5jeVJhdGVzID0gY3VycmVuY3lSYXRlcztcbiAgICB0aGlzLl9iYXNlQ3VycmVuY3kgPSBiYXNlQ3VycmVuY3k7XG4gICAgdGhpcy5fY3Vycm5jaWVzV2l0aEV4Y2hhbmdlUmF0ZXMgPSB0aGlzLl9nZXRDdXJyZW5jaWVzV2l0aEV4Y2hhbmdlUmF0ZXMoKTtcbiAgICB0aGlzLl90cmFuc2xhdGUgPSB0cmFuc2xhdGU7XG4gICAgdGhpcy5fZGF0ZVV0aWxzID0gZGF0ZVV0aWxzO1xuICAgIHRoaXMuX2Vycm9yTm90aWZpY2F0aW9uSGVscGVyID0gZXJyb3JOb3RpZmljYXRpb25IZWxwZXI7XG4gIH1cblxuICAvKipcbiAgICogU2V0IG9mIGN1cnJlbmNpZXMgdGhhdCBoYXMgYXQgbGVhc3Qgb25lIGV4Y2hhbmdlIHJhdGVcbiAgICogQHJldHVybiB7U2V0PGFueT4gfCAqfVxuICAgKi9cbiAgZ2V0IGN1cnJlbmNpZXNXaXRoRXhjaGFuZ2VSYXRlcygpIHtcbiAgICByZXR1cm4gdGhpcy5fY3Vycm5jaWVzV2l0aEV4Y2hhbmdlUmF0ZXM7XG4gIH1cblxuICAvKipcbiAgICogQ3VycmVuY3kgY29udmVyc2lvbiB1dGlsaXR5LiBJZiB3ZSBoYXZlIHRoZSBkaXJlY3QgcmF0ZSBpdCB3aWxsIGNvbnZlcnQgZnJvbSBjdXJyZW5jeUZyb20gdG8gY3VycmVuY3lUbyBpbiB0aGVcbiAgICogZ2l2ZW4gZGF0ZS4gSWYgd2UgZG9uJ3QgaGF2ZSB0aGUgc2FpZCBjdXJyZW5jeSBpdCB3aWxsIHRyeSB0byBzZWFyY2ggdGhlIGludmVyc2UgcmF0ZSBhbmQgdXNlIDEveC4gSWYgdGhlIGludmVyc2VcbiAgICogcmF0ZSBpcyBhbHNvIG5vdCBBdmFpbGFibGUgYW4gZXJyb3Igd2lsbCBiZSB0aHJvd25cbiAgICogQHBhcmFtIGN1cnJlbmN5RnJvbSBjdXJyZW5jeSBjb2RlIGZyb20gdGhlIGN1cnJlbmN5IHdlIGFyZSBjb252ZXJ0aW5nIGZyb21cbiAgICogQHBhcmFtIGN1cnJlbmN5VG8gY3VycmVuY3kgY29kZSBmcm9tIHRoZSBjdXJyZW5jeSB3ZSBhcmUgY29udmVydGluZyB0b1xuICAgKiBAcGFyYW0gZGF0ZVRvRmluZCBkYXRlIGZvciB3aGljaCB3ZSBhcmUgZG9pbmcgdGhlIGNvbnZlcnNpb24uIEl0IGlzIGV4cGVjdGVkIGluIHl5eXktbW0tZGRcbiAgICogQHJldHVybnMgeyp8UHJvbWlzZS48VFJlc3VsdD59XG4gICAqL1xuICBjb252ZXJ0Q3VycmVuY3koY3VycmVuY3lGcm9tLCBjdXJyZW5jeVRvLCBkYXRlVG9GaW5kLCBmaXhlZEV4Y2hhbmdlUmF0ZSkge1xuICAgIGlmIChjdXJyZW5jeUZyb20gPT09IGN1cnJlbmN5VG8pIHtcbiAgICAgIHJldHVybiBDb25zdGFudHMuUkFURV9TQU1FX0NVUlJFTkNZO1xuICAgIH1cbiAgICBpZiAoZml4ZWRFeGNoYW5nZVJhdGUgJiYgZml4ZWRFeGNoYW5nZVJhdGUgPiAwKSB7XG4gICAgICByZXR1cm4gKHRoaXMuY29udmVydEN1cnJlbmN5KHRoaXMuX2Jhc2VDdXJyZW5jeSwgY3VycmVuY3lUbywgZGF0ZVRvRmluZCwgbnVsbCkgL1xuICAgICAgICBmaXhlZEV4Y2hhbmdlUmF0ZSk7XG4gICAgfVxuICAgIGNvbnN0IHRpbWVEYXRlVG9GaW5kID0gKG5ldyBEYXRlKGAke2RhdGVUb0ZpbmR9ICR7Q29uc3RhbnRzLkNVUlJFTkNZX0hPVVJ9YCkpLmdldFRpbWUoKTtcbiAgICBpZiAodGhpcy5fY3VycmVuY3lSYXRlcykge1xuICAgICAgY29uc3QgY3VycmVuY2llc1RvU2VhcmNoRGlyZWN0ID0gdGhpcy5fY3VycmVuY3lSYXRlcy5maW5kKChpdGVtKSA9PlxuICAgICAgICBpdGVtW0NvbnN0YW50cy5DVVJSRU5DWV9QQUlSXS5mcm9tID09PSBjdXJyZW5jeUZyb20gJiYgaXRlbVtDb25zdGFudHMuQ1VSUkVOQ1lfUEFJUl0udG8gPT09IGN1cnJlbmN5VG9cbiAgICAgICk7XG4gICAgICBpZiAoY3VycmVuY2llc1RvU2VhcmNoRGlyZWN0KSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldEV4Y2hhbmdlUmF0ZShjdXJyZW5jaWVzVG9TZWFyY2hEaXJlY3QsIHRpbWVEYXRlVG9GaW5kKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIGRpcmVjdCBub3QgZm91bmRcbiAgICAgICAgY29uc3QgY3VycmVuY2llc1RvU2VhcmNoSW52ZXJzZSA9XG4gICAgICAgICAgdGhpcy5fY3VycmVuY3lSYXRlcy5maW5kKChpdGVtKSA9PlxuICAgICAgICAgICAgaXRlbVtDb25zdGFudHMuQ1VSUkVOQ1lfUEFJUl0uZnJvbSA9PT0gY3VycmVuY3lUbyAmJiBpdGVtW0NvbnN0YW50cy5DVVJSRU5DWV9QQUlSXS50byA9PT1cbiAgICAgICAgICAgIGN1cnJlbmN5RnJvbSk7XG4gICAgICAgIGlmIChjdXJyZW5jaWVzVG9TZWFyY2hJbnZlcnNlKSB7XG4gICAgICAgICAgcmV0dXJuIDEgLyB0aGlzLmdldEV4Y2hhbmdlUmF0ZShjdXJyZW5jaWVzVG9TZWFyY2hJbnZlcnNlLCB0aW1lRGF0ZVRvRmluZCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuY29udmVydFZpYUJhc2VDdXJyZW5jeShjdXJyZW5jeUZyb20sIGN1cnJlbmN5VG8sIHRpbWVEYXRlVG9GaW5kKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyB0aGlzLl9nZXRDdXJyZW5jeUVycm9yKCdDdXJyZW5jeVJhdGVzTm90SW5pdGlhbGl6ZWQnKTtcbiAgICB9XG4gIH1cblxuICBjb252ZXJ0RnVuZGluZ0RldGFpbHNUb0N1cnJlbmN5KGZ1bmRpbmdEZXRhaWxzLCBjdXJyZW5jeVRvKSB7XG4gICAgbGV0IHRvdGFsID0gMDtcbiAgICBmdW5kaW5nRGV0YWlscy5mb3JFYWNoKGZkID0+IHtcbiAgICAgIHRvdGFsICs9IHRoaXMuY29udmVydFRyYW5zYWN0aW9uQW1vdW50VG9DdXJyZW5jeShmZCwgY3VycmVuY3lUbyk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gdG90YWw7XG4gIH1cblxuICBjb252ZXJ0VHJhbnNhY3Rpb25BbW91bnRUb0Jhc2VDdXJyZW5jeShmdW5kaW5nRGV0YWlsKSB7XG4gICAgcmV0dXJuIHRoaXMuY29udmVydFRyYW5zYWN0aW9uQW1vdW50VG9DdXJyZW5jeShmdW5kaW5nRGV0YWlsLCB0aGlzLl9iYXNlQ3VycmVuY3kpO1xuICB9XG5cbiAgY29udmVydEFtb3VudFRvQ3VycmVuY3koYW1vdW50LCBjdXJyZW5jeUZyb20sIGRhdGUsIGZpeGVkRXhjaGFuZ2VSYXRlLCBjdXJyZW5jeVRvKSB7XG4gICAgY29uc3QgY3VycmVuY3lSYXRlID0gdGhpcy5jb252ZXJ0Q3VycmVuY3koY3VycmVuY3lGcm9tLCBjdXJyZW5jeVRvLFxuICAgICAgdGhpcy5fZGF0ZVV0aWxzLmZvcm1hdERhdGVGb3JBUEkoZGF0ZSksIGZpeGVkRXhjaGFuZ2VSYXRlKTtcbiAgICByZXR1cm4gYW1vdW50ICogY3VycmVuY3lSYXRlO1xuICB9XG5cbiAgY29udmVydFRyYW5zYWN0aW9uQW1vdW50VG9DdXJyZW5jeShmdW5kaW5nRGV0YWlsLCBjdXJyZW5jeVRvKSB7XG4gICAgY29uc3QgZml4ZWRFeGNoYW5nZVJhdGUgPSBmdW5kaW5nRGV0YWlsW0FjdGl2aXR5Q29uc3RhbnRzLkZJWEVEX0VYQ0hBTkdFX1JBVEVdO1xuICAgIGNvbnN0IGN1cnJlbmN5RnJvbSA9IGZ1bmRpbmdEZXRhaWxbQWN0aXZpdHlDb25zdGFudHMuQ1VSUkVOQ1ldLnZhbHVlO1xuICAgIGNvbnN0IHRyYW5zYWN0aW9uRGF0ZSA9IGZ1bmRpbmdEZXRhaWxbQWN0aXZpdHlDb25zdGFudHMuVFJBTlNBQ1RJT05fREFURV07XG4gICAgY29uc3QgdHJhbnNhY3Rpb25BbW91bnQgPSBmdW5kaW5nRGV0YWlsW0FjdGl2aXR5Q29uc3RhbnRzLlRSQU5TQUNUSU9OX0FNT1VOVF07XG4gICAgcmV0dXJuIHRoaXMuY29udmVydEFtb3VudFRvQ3VycmVuY3kodHJhbnNhY3Rpb25BbW91bnQsIGN1cnJlbmN5RnJvbSwgdHJhbnNhY3Rpb25EYXRlLCBmaXhlZEV4Y2hhbmdlUmF0ZSxcbiAgICAgIGN1cnJlbmN5VG8pO1xuICB9XG5cbiAgZ2V0RXhjaGFuZ2VSYXRlKGN1cnJlbmNpZXNUb1NlYXJjaCwgdGltZURhdGVUb0ZpbmQpIHtcbiAgICBsZXQgbG93ZXJFbmQgPSAwO1xuICAgIGxldCBoaWdoZXJFbmQgPSBjdXJyZW5jaWVzVG9TZWFyY2gucmF0ZXMubGVuZ3RoIC0gMTtcbiAgICB3aGlsZSAobG93ZXJFbmQgPCBoaWdoZXJFbmQpIHtcbiAgICAgIGNvbnN0IG1pZGRsZSA9IE1hdGguZmxvb3IoKGxvd2VyRW5kICsgaGlnaGVyRW5kKSAvIDIpO1xuICAgICAgY29uc3QgZGlmZmVyZW5jZSA9IE1hdGguYWJzKChuZXcgRGF0ZShcbiAgICAgICAgYCR7Y3VycmVuY2llc1RvU2VhcmNoLnJhdGVzW21pZGRsZV0uZGF0ZX0gICR7Q29uc3RhbnRzLkNVUlJFTkNZX0hPVVJ9YCkpXG4gICAgICAgIC0gdGltZURhdGVUb0ZpbmQpO1xuICAgICAgY29uc3QgZGlmZmVyZW5jZTEgPSBNYXRoLmFicygobmV3IERhdGUoXG4gICAgICAgIGAke2N1cnJlbmNpZXNUb1NlYXJjaC5yYXRlc1ttaWRkbGUgKyAxXS5kYXRlfSAgJHtDb25zdGFudHMuQ1VSUkVOQ1lfSE9VUn1gKSlcbiAgICAgICAgLSB0aW1lRGF0ZVRvRmluZCk7XG4gICAgICBpZiAoZGlmZmVyZW5jZTEgPD0gZGlmZmVyZW5jZSkge1xuICAgICAgICBsb3dlckVuZCA9IG1pZGRsZSArIDE7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBoaWdoZXJFbmQgPSBtaWRkbGU7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBjdXJyZW5jaWVzVG9TZWFyY2gucmF0ZXNbaGlnaGVyRW5kXS5yYXRlO1xuICB9XG5cbiAgX2dldEN1cnJlbmN5RXJyb3IoZXJyb3JNZXNhZ2UpIHtcbiAgICBjb25zdCBub3RpZkVycm9yQ3VycmVuY3kgPSB0aGlzLl9lcnJvck5vdGlmaWNhdGlvbkhlbHBlci5jcmVhdGVOb3RpZmljYXRpb24oe1xuICAgICAgbWVzc2FnZTogdGhpcy5fdHJhbnNsYXRlKGVycm9yTWVzYWdlKSxcbiAgICAgIG9yaWdpbjogRXJyb3JDb25zdGFudHMuTk9USUZJQ0FUSU9OX09SSUdJTl9DVVJSRU5DWV9NQU5BR0VSXG4gICAgfSk7XG4gICAgcmV0dXJuIG5vdGlmRXJyb3JDdXJyZW5jeTtcbiAgfVxuXG4gIGNvbnZlcnRWaWFCYXNlQ3VycmVuY3koY3VycmVuY3lGcm9tLCBjdXJyZW5jeVRvLCB0aW1lRGF0ZVRvRmluZCkge1xuICAgIGNvbnN0IHJhdGVGcm9tVG9CYXNlID0gdGhpcy5fY3VycmVuY3lSYXRlcy5maW5kKChpdGVtKSA9PlxuICAgICAgaXRlbVtDb25zdGFudHMuQ1VSUkVOQ1lfUEFJUl0uZnJvbSA9PT0gY3VycmVuY3lGcm9tICYmIGl0ZW1bQ29uc3RhbnRzLkNVUlJFTkNZX1BBSVJdLnRvID09PVxuICAgICAgdGhpcy5fYmFzZUN1cnJlbmN5XG4gICAgKTtcbiAgICBjb25zdCByYXRlQmFzZVRvVG8gPSB0aGlzLl9jdXJyZW5jeVJhdGVzLmZpbmQoKGl0ZW0pID0+XG4gICAgICBpdGVtW0NvbnN0YW50cy5DVVJSRU5DWV9QQUlSXS5mcm9tID09PSB0aGlzLl9iYXNlQ3VycmVuY3kgJiYgaXRlbVtDb25zdGFudHMuQ1VSUkVOQ1lfUEFJUl0udG8gPT09XG4gICAgICBjdXJyZW5jeVRvXG4gICAgKTtcbiAgICBpZiAocmF0ZUZyb21Ub0Jhc2UgJiYgcmF0ZUJhc2VUb1RvKSB7XG4gICAgICAvLyBpZiB3ZSBoYXZlIGJvdGggY3VycmVuY2llcyB3ZSBqdXN0IHJldHVybiB0aGUgcHJvZHVjdCBvZiBlY2ggcmF0ZVxuICAgICAgcmV0dXJuIHRoaXMuZ2V0RXhjaGFuZ2VSYXRlKHJhdGVGcm9tVG9CYXNlLCB0aW1lRGF0ZVRvRmluZCkgKiB0aGlzLmdldEV4Y2hhbmdlUmF0ZShyYXRlQmFzZVRvVG8sIHRpbWVEYXRlVG9GaW5kKTtcbiAgICB9IGVsc2UgaWYgKHJhdGVGcm9tVG9CYXNlKSB7XG4gICAgICAvLyBpZiBlaXRoZXIgb2YgdGhlbSBpcyBub3QgZm91bmQgd2UgdHJ5IHRvIGZpbmQgdGhlIGludmVyc2VcbiAgICAgIC8vIHdlIGdldCB0aGUgaW52ZXJzZSBvZiByYXRlQmFzZVRvVG9cbiAgICAgIGNvbnN0IHJhdGVUb1RvQmFzZSA9IHRoaXMuX2N1cnJlbmN5UmF0ZXMuZmluZCgoaXRlbSkgPT5cbiAgICAgICAgaXRlbVtDb25zdGFudHMuQ1VSUkVOQ1lfUEFJUl0uZnJvbSA9PT0gY3VycmVuY3lUbyAmJiBpdGVtW0NvbnN0YW50cy5DVVJSRU5DWV9QQUlSXS50byA9PT1cbiAgICAgICAgdGhpcy5fYmFzZUN1cnJlbmN5XG4gICAgICApO1xuICAgICAgaWYgKHJhdGVUb1RvQmFzZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRFeGNoYW5nZVJhdGUocmF0ZUZyb21Ub0Jhc2UsIHRpbWVEYXRlVG9GaW5kKVxuICAgICAgICAgICogKDEgLyB0aGlzLmdldEV4Y2hhbmdlUmF0ZShyYXRlVG9Ub0Jhc2UsIHRpbWVEYXRlVG9GaW5kKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gRXJyb3JDb25zdGFudHMuUkFURV9DVVJSRU5DWV9OT1RfRk9VTkQ7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChyYXRlQmFzZVRvVG8pIHtcbiAgICAgIGNvbnN0IHJhdGVCYXNlVG9Gcm9tID0gdGhpcy5fY3VycmVuY3lSYXRlcy5maW5kKChpdGVtKSA9PlxuICAgICAgICBpdGVtW0NvbnN0YW50cy5DVVJSRU5DWV9QQUlSXS5mcm9tID09PSB0aGlzLl9iYXNlQ3VycmVuY3kgJiYgaXRlbVtDb25zdGFudHMuQ1VSUkVOQ1lfUEFJUl0udG8gPT09XG4gICAgICAgIGN1cnJlbmN5RnJvbVxuICAgICAgKTtcbiAgICAgIC8vIHdlIHRyeSB0byBnZXQgdGhlIGludmVyc2Ugb2YgcmF0ZUZyb21Ub0Jhc2VcbiAgICAgIGlmIChyYXRlQmFzZVRvRnJvbSkge1xuICAgICAgICByZXR1cm4gKDEgLyB0aGlzLmdldEV4Y2hhbmdlUmF0ZShyYXRlQmFzZVRvRnJvbSwgdGltZURhdGVUb0ZpbmQpKVxuICAgICAgICAgICogdGhpcy5nZXRFeGNoYW5nZVJhdGUocmF0ZUJhc2VUb1RvLCB0aW1lRGF0ZVRvRmluZCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gRXJyb3JDb25zdGFudHMuUkFURV9DVVJSRU5DWV9OT1RfRk9VTkQ7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBFcnJvckNvbnN0YW50cy5SQVRFX0NVUlJFTkNZX05PVF9GT1VORDtcbiAgICB9XG4gIH1cblxuICBfZ2V0Q3VycmVuY2llc1dpdGhFeGNoYW5nZVJhdGVzKCkge1xuICAgIGNvbnN0IGNzID0gbmV3IFNldCgpO1xuICAgIGlmICh0aGlzLl9jdXJyZW5jeVJhdGVzKSB7XG4gICAgICB0aGlzLl9jdXJyZW5jeVJhdGVzLmZvckVhY2goZXhjaGFuZ2VSYXRlcyA9PiB7XG4gICAgICAgIGNzLmFkZChleGNoYW5nZVJhdGVzW0NvbnN0YW50cy5DVVJSRU5DWV9QQUlSXS5mcm9tKTtcbiAgICAgICAgY3MuYWRkKGV4Y2hhbmdlUmF0ZXNbQ29uc3RhbnRzLkNVUlJFTkNZX1BBSVJdLnRvKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gY3M7XG4gIH1cbn1cbiIsImltcG9ydCAqIGFzIEZQQyBmcm9tICcuLi8uLi91dGlscy9GaWVsZFBhdGhDb25zdGFudHMnO1xuaW1wb3J0IEZpZWxkc01hbmFnZXIgZnJvbSAnLi9GaWVsZHNNYW5hZ2VyJztcbmltcG9ydCBDb25zdGFudHMgZnJvbSAnLi4vLi4vdXRpbHMvQ29uc3RhbnRzJztcbmltcG9ydCBBY3Rpdml0eUNvbnN0YW50cyBmcm9tICcuLi91dGlsL0FjdGl2aXR5Q29uc3RhbnRzJztcbmltcG9ydCBDdXJyZW5jeVJhdGVzTWFuYWdlciBmcm9tICcuLi91dGlsL0N1cnJlbmN5UmF0ZXNNYW5hZ2VyJztcblxuXG4vKipcbiAqIFBvc3NpYmxlIFZhbHVlcyBtYW5hZ2VyIHRoYXQgYWxsb3dzIHRvIGZpbGwgaW4gYWRkaXRpb25hbCBpbmZvcm1hdGlvbiBhbmQgdHJhbnNmb3JtYXRpb25zXG4gKiBAYXV0aG9yIE5hZGVqZGEgTWFuZHJlc2N1XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvc3NpYmxlVmFsdWVzTWFuYWdlciB7XG4gIHN0YXRpYyBfbGFuZ1N0YXRlID0ge1xuICAgIGxhbmc6IENvbnN0YW50cy5MQU5HVUFHRV9FTkdMSVNILFxuICAgIGRlZmF1bHRMYW5nOiBDb25zdGFudHMuTEFOR1VBR0VfRU5HTElTSFxuICB9O1xuXG4gIHN0YXRpYyBfbG9nZ2VyO1xuXG4gIHN0YXRpYyBzZXRMYW5nU3RhdGUobGFuZ1N0YXRlKSB7XG4gICAgUG9zc2libGVWYWx1ZXNNYW5hZ2VyLl9sYW5nU3RhdGUgPSBsYW5nU3RhdGU7XG4gIH1cblxuICBzdGF0aWMgc2V0TG9nZ2VyKExvZ2dlcikge1xuICAgIFBvc3NpYmxlVmFsdWVzTWFuYWdlci5fbG9nZ2VyID0gbmV3IExvZ2dlcignUG9zc2libGUgdmFsdWVzIG1hbmFnZXInKTtcbiAgfVxuICBzdGF0aWMgYnVpbGRGb3JtYXR0ZWRIaWVyYXJjaGljYWxWYWx1ZXMob3B0aW9ucykge1xuICAgIC8vIFRPRE8gb3B0aW1pemVcbiAgICBjb25zdCBoT3B0aW9ucyA9IHt9O1xuICAgIE9iamVjdC52YWx1ZXMob3B0aW9ucykuZm9yRWFjaChvcHRpb24gPT4ge1xuICAgICAgaE9wdGlvbnNbb3B0aW9uLmlkXSA9IFBvc3NpYmxlVmFsdWVzTWFuYWdlci5idWlsZEhpZXJhcmNoaWNhbERhdGEob3B0aW9ucywgb3B0aW9uLmlkKTtcbiAgICB9KTtcbiAgICByZXR1cm4gaE9wdGlvbnM7XG4gIH1cblxuICBzdGF0aWMgYnVpbGRIaWVyYXJjaGljYWxEYXRhKG9wdGlvbnMsIHNlbGVjdGVkSWQpIHtcbiAgICBjb25zdCBvcHRpb24gPSBPYmplY3QuYXNzaWduKHt9LCBvcHRpb25zW3NlbGVjdGVkSWRdKTtcbiAgICBjb25zdCB2YWx1ZVBhcnRzID0gUG9zc2libGVWYWx1ZXNNYW5hZ2VyLmdldEhpZXJhcmNoaWNhbFZhbHVlKG9wdGlvbnMsIHNlbGVjdGVkSWQpO1xuICAgIG9wdGlvbltBY3Rpdml0eUNvbnN0YW50cy5ISUVSQVJDSElDQUxfVkFMVUVdID0gUG9zc2libGVWYWx1ZXNNYW5hZ2VyLmZvcm1hdFZhbHVlUGFydHModmFsdWVQYXJ0cyk7XG4gICAgb3B0aW9uW0FjdGl2aXR5Q29uc3RhbnRzLkhJRVJBUkNISUNBTF9WQUxVRV9ERVBUSF0gPSAodmFsdWVQYXJ0cyAmJiB2YWx1ZVBhcnRzIGluc3RhbmNlb2YgQXJyYXkpID9cbiAgICAgIHZhbHVlUGFydHMubGVuZ3RoIDogMDtcbiAgICByZXR1cm4gb3B0aW9uO1xuICB9XG5cbiAgc3RhdGljIGdldEhpZXJhcmNoaWNhbFZhbHVlKG9wdGlvbnMsIHNlbGVjdGVkSWQpIHtcbiAgICBjb25zdCBuYW1lUGFydHMgPSBbXTtcbiAgICBsZXQgY3VycmVudCA9IG9wdGlvbnNbc2VsZWN0ZWRJZF07XG4gICAgd2hpbGUgKGN1cnJlbnQpIHtcbiAgICAgIG5hbWVQYXJ0cy5wdXNoKFBvc3NpYmxlVmFsdWVzTWFuYWdlci5nZXRPcHRpb25UcmFuc2xhdGlvbihjdXJyZW50KSk7XG4gICAgICBjdXJyZW50ID0gb3B0aW9uc1tjdXJyZW50LnBhcmVudElkXTtcbiAgICB9XG4gICAgcmV0dXJuIG5hbWVQYXJ0cztcbiAgfVxuXG4gIHN0YXRpYyBmb3JtYXRWYWx1ZVBhcnRzKHZhbHVlUGFydHMpIHtcbiAgICByZXR1cm4gKHZhbHVlUGFydHMgJiYgdmFsdWVQYXJ0cyBpbnN0YW5jZW9mIEFycmF5KSA/IGBbJHt2YWx1ZVBhcnRzLnJldmVyc2UoKS5qb2luKCddWycpfV1gIDogdmFsdWVQYXJ0cztcbiAgfVxuXG4gIC8qKlxuICAgKiBGaWxscyBoaWVyYXJjaGljYWwgZGVwdGggb2YgZWFjaCBvcHRpb25cbiAgICogQHBhcmFtIG9wdGlvbnNcbiAgICovXG4gIHN0YXRpYyBmaWxsSGllcmFyY2hpY2FsRGVwdGgob3B0aW9ucykge1xuICAgIE9iamVjdC52YWx1ZXMob3B0aW9ucykuZm9yRWFjaChvcHRpb24gPT4ge1xuICAgICAgUG9zc2libGVWYWx1ZXNNYW5hZ2VyLl9maWxsSGllcmFyY2hpY2FsRGVwdGgob3B0aW9ucywgb3B0aW9uKTtcbiAgICB9KTtcbiAgICByZXR1cm4gb3B0aW9ucztcbiAgfVxuXG4gIHN0YXRpYyBfZmlsbEhpZXJhcmNoaWNhbERlcHRoKG9wdGlvbnMsIG9wdGlvbikge1xuICAgIGlmICghb3B0aW9uKSB7XG4gICAgICBQb3NzaWJsZVZhbHVlc01hbmFnZXIuX2xvZ2dlci5lcnJvcihgb3B0aW9uIGlzIHVuc3BlY2lmaWVkOiAke29wdGlvbn1gKTtcbiAgICAgIHJldHVybiAwO1xuICAgIH1cbiAgICBsZXQgZGVwdGggPSBvcHRpb25bQWN0aXZpdHlDb25zdGFudHMuSElFUkFSQ0hJQ0FMX1ZBTFVFX0RFUFRIXTtcbiAgICBpZiAoZGVwdGggPT09IHVuZGVmaW5lZCkge1xuICAgICAgLy8gU28gZmFyIGl0IGlzIGJhc2VkIG9uIHRoZSBjdXJyZW50IGxvY2F0aW9ucyBleHRyYSBpbmZvIGFwcHJvYWNoXG4gICAgICBpZiAob3B0aW9uLnBhcmVudElkKSB7XG4gICAgICAgIGNvbnN0IHBhcmVudCA9IG9wdGlvbnNbb3B0aW9uLnBhcmVudElkXTtcbiAgICAgICAgZGVwdGggPSAxICsgUG9zc2libGVWYWx1ZXNNYW5hZ2VyLl9maWxsSGllcmFyY2hpY2FsRGVwdGgob3B0aW9ucywgcGFyZW50KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRlcHRoID0gMDtcbiAgICAgIH1cbiAgICAgIG9wdGlvbltBY3Rpdml0eUNvbnN0YW50cy5ISUVSQVJDSElDQUxfVkFMVUVfREVQVEhdID0gZGVwdGg7XG4gICAgfVxuICAgIHJldHVybiBkZXB0aDtcbiAgfVxuXG4gIHN0YXRpYyBmaW5kT3B0aW9uKG9wdGlvbnMsIGlkKSB7XG4gICAgcmV0dXJuIE9iamVjdC52YWx1ZXMob3B0aW9ucykuZmluZChvID0+IG8uaWQgPT09IGlkKTtcbiAgfVxuXG4gIHN0YXRpYyBmaW5kT3B0aW9uQnlWYWx1ZShvcHRpb25zLCB2YWx1ZSkge1xuICAgIHJldHVybiBPYmplY3QudmFsdWVzKG9wdGlvbnMpLmZpbmQobyA9PiBvLnZhbHVlID09PSB2YWx1ZSk7XG4gIH1cblxuICBzdGF0aWMgZ2V0T3B0aW9uVHJhbnNsYXRpb24ob3B0aW9uKSB7XG4gICAgbGV0IHJlc1ZhbCA9IG9wdGlvbi52YWx1ZTtcbiAgICBjb25zdCB0cmFuc2xhdGlvbnMgPSBvcHRpb25bJ3RyYW5zbGF0ZWQtdmFsdWUnXTtcbiAgICBpZiAodHJhbnNsYXRpb25zICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGNvbnN0IGxhbmdTdGF0ZSA9IFBvc3NpYmxlVmFsdWVzTWFuYWdlci5fbGFuZ1N0YXRlO1xuICAgICAgcmVzVmFsID0gdHJhbnNsYXRpb25zW2xhbmdTdGF0ZS5sYW5nXSB8fCB0cmFuc2xhdGlvbnNbbGFuZ1N0YXRlLmRlZmF1bHRMYW5nXSB8fCByZXNWYWw7XG4gICAgfVxuICAgIHJldHVybiByZXNWYWw7XG4gIH1cblxuICBzdGF0aWMgc2V0VmlzaWJpbGl0eShvcHRpb25zLCBmaWVsZFBhdGgsIGN1cnJlbmN5UmF0ZXNNYW5hZ2VyOiBDdXJyZW5jeVJhdGVzTWFuYWdlciwgZmlsdGVycywgaXNPUkZpbHRlciA9IGZhbHNlLFxuICAgIHNlbGVjdGVkSWQpIHtcbiAgICBjb25zdCBpc0xvY2F0aW9ucyA9IEZQQy5MT0NBVElPTl9QQVRIID09PSBmaWVsZFBhdGg7XG4gICAgY29uc3QgaXNDdXJyZW5jeSA9IEZQQy5QQVRIU19GT1JfQ1VSUkVOQ1kuaGFzKGZpZWxkUGF0aCk7XG4gICAgb3B0aW9ucyA9IHsgLi4ub3B0aW9ucyB9O1xuICAgIE9iamVjdC52YWx1ZXMob3B0aW9ucykuZm9yRWFjaChvcHRpb24gPT4ge1xuICAgICAgb3B0aW9uLnZpc2libGUgPSAhaXNPUkZpbHRlcjtcbiAgICAgIGlmIChpc0xvY2F0aW9ucykge1xuICAgICAgICBvcHRpb24uZGlzcGxheUhpZXJhcmNoaWNhbFZhbHVlID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSBpZiAoaXNDdXJyZW5jeSkge1xuICAgICAgICBvcHRpb25bRlBDLkZJRUxEX09QVElPTl9VU0FCTEVdID0gUG9zc2libGVWYWx1ZXNNYW5hZ2VyLmlzQ3VycmVuY3lPcHRpb25Vc2FibGUob3B0aW9uLCBjdXJyZW5jeVJhdGVzTWFuYWdlcik7XG4gICAgICAgIGlmICghb3B0aW9uW0ZQQy5GSUVMRF9PUFRJT05fVVNBQkxFXSkge1xuICAgICAgICAgIG9wdGlvbi52aXNpYmxlID0gb3B0aW9uLmlkID09PSBzZWxlY3RlZElkO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gICAgaWYgKGZpbHRlcnMpIHtcbiAgICAgIGZpbHRlcnMuZm9yRWFjaChmaWx0ZXIgPT4ge1xuICAgICAgICBjb25zdCBmaWx0ZXJCeSA9IGZpbHRlci52YWx1ZTtcbiAgICAgICAgT2JqZWN0LnZhbHVlcyhvcHRpb25zKS5mb3JFYWNoKG9wdGlvbiA9PiB7XG4gICAgICAgICAgY29uc3Qgb3B0aW9uRGF0YVRvQ2hlY2sgPSBGaWVsZHNNYW5hZ2VyLmdldFZhbHVlKG9wdGlvbiwgZmlsdGVyLnBhdGgpO1xuICAgICAgICAgIGlmICgoaXNPUkZpbHRlciB8fCBvcHRpb24udmlzaWJsZSkgJiYgb3B0aW9uRGF0YVRvQ2hlY2sgJiYgKFxuICAgICAgICAgICAgKG9wdGlvbkRhdGFUb0NoZWNrIGluc3RhbmNlb2YgQXJyYXkgJiYgb3B0aW9uRGF0YVRvQ2hlY2suaW5jbHVkZXMoZmlsdGVyQnkpKSB8fFxuICAgICAgICAgICAgKG9wdGlvbkRhdGFUb0NoZWNrID09PSBmaWx0ZXJCeSkpKSB7XG4gICAgICAgICAgICBvcHRpb24udmlzaWJsZSA9IHRydWU7XG4gICAgICAgICAgfSBlbHNlIGlmIChpc09SRmlsdGVyKSB7XG4gICAgICAgICAgICAvLyBEbyBub3RoaW5nLCBrZWVwIGl0IHZpc2libGUvaW52aXNpYmxlLlxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBvcHRpb24udmlzaWJsZSA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIG9wdGlvbnM7XG4gIH1cblxuICBzdGF0aWMgaXNDdXJyZW5jeU9wdGlvblVzYWJsZShvcHRpb24sIGN1cnJlbmN5UmF0ZXNNYW5hZ2VyOiBDdXJyZW5jeVJhdGVzTWFuYWdlcikge1xuICAgIGNvbnN0IGhhc0V4Y2hhbmdlUmF0ZXMgPSBjdXJyZW5jeVJhdGVzTWFuYWdlci5jdXJyZW5jaWVzV2l0aEV4Y2hhbmdlUmF0ZXMuaGFzKG9wdGlvbi52YWx1ZSk7XG4gICAgY29uc3QgaXNBY3RpdmUgPSBvcHRpb24uZXh0cmFfaW5mbyAmJiBvcHRpb24uZXh0cmFfaW5mby5hY3RpdmU7XG4gICAgcmV0dXJuIGlzQWN0aXZlICYmIGhhc0V4Y2hhbmdlUmF0ZXM7XG4gIH1cblxuICBzdGF0aWMgZ2V0VHJlZVNvcnRlZE9wdGlvbnNMaXN0KG9wdGlvbnNPYmosIHJldmVyc2VTb3J0T3B0aW9ucykge1xuICAgIGNvbnN0IGFkZGVkID0gbmV3IFNldCgpO1xuICAgIGNvbnN0IG9wdGlvbnNMaXN0ID0gW107XG4gICAgY29uc3QgaWRzU3RhY2sgPSBPYmplY3QudmFsdWVzKG9wdGlvbnNPYmopLmZpbHRlcihvID0+ICFvLnBhcmVudElkKS5zb3J0KHJldmVyc2VTb3J0T3B0aW9ucylcbiAgICAgIC5tYXAobyA9PiBvLmlkKTtcbiAgICB3aGlsZSAoaWRzU3RhY2subGVuZ3RoKSB7XG4gICAgICBjb25zdCBpZCA9IGlkc1N0YWNrLnBvcCgpO1xuICAgICAgaWYgKCFhZGRlZC5oYXMoaWQpKSB7XG4gICAgICAgIGNvbnN0IG9wdGlvbiA9IG9wdGlvbnNPYmpbaWRdO1xuICAgICAgICBpZiAob3B0aW9uLnJldmVyc2VTb3J0ZWRDaGlsZHJlbikge1xuICAgICAgICAgIGlkc1N0YWNrLnB1c2goLi4ub3B0aW9uLnJldmVyc2VTb3J0ZWRDaGlsZHJlbik7XG4gICAgICAgIH1cbiAgICAgICAgYWRkZWQuYWRkKGlkKTtcbiAgICAgICAgb3B0aW9uc0xpc3QucHVzaChvcHRpb24pO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gb3B0aW9uc0xpc3Q7XG4gIH1cbn1cbiIsIi8qIGVzbGludC1kaXNhYmxlIGNsYXNzLW1ldGhvZHMtdXNlLXRoaXMgKi9cbmNvbnN0IEZFQVRVUkVfTUFOQUdFUiA9ICdGZWF0dXJlIG1hbmFnZXInO1xuXG4vKipcbiAqIEZlYXR1cmUgTWFuYWdlclxuICogQGF1dGhvciBOYWRlamRhIE1hbmRyZXNjdVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGZWF0dXJlTWFuYWdlciB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICBzdGF0aWMgX2N1cnJlbnRGTSA9IG5ldyBGZWF0dXJlTWFuYWdlcigpO1xuXG4gIGNvbnN0cnVjdG9yKGZtVHJlZSwgTG9nZ2VyTWFuYWdlcikge1xuICAgIHRoaXMuX2ZtVHJlZSA9IGZtVHJlZTtcbiAgICBpZiAoTG9nZ2VyTWFuYWdlcikge1xuICAgICAgdGhpcy5sb2dnZXJNYW5hZ2VyID0gTG9nZ2VyTWFuYWdlcjtcbiAgICB9XG4gIH1cbiAgc2V0IGZtVHJlZShmbVRyZWUpIHtcbiAgICB0aGlzLl9mbVRyZWUgPSBmbVRyZWU7XG4gIH1cbiAgc2V0IGxvZ2dlck1hbmFnZXIoTG9nZ2VyTWFuYWdlcikge1xuICAgIHRoaXMuX2xvZ2dlck1hbmFnZXIgPSBuZXcgTG9nZ2VyTWFuYWdlcihGRUFUVVJFX01BTkFHRVIpO1xuICB9XG5cbiAgc3RhdGljIHNldExvZ2dlck1hbmFnZXIoTG9nZ2VyTWFuYWdlcikge1xuICAgIEZlYXR1cmVNYW5hZ2VyLl9jdXJyZW50Rk0ubG9nZ2VyTWFuYWdlciA9IExvZ2dlck1hbmFnZXI7XG4gIH1cbiAgc3RhdGljIHNldEZNVHJlZShmbVRyZWUpIHtcbiAgICBGZWF0dXJlTWFuYWdlci5fY3VycmVudEZNLmZtVHJlZSA9IGZtVHJlZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVja3MgaWYgdGhlIGdpdmVuIEZNIHBhdGggaXMgZnVsbHkgZW5hYmxlZCBvciBvbmx5IGxhc3Qgc2VnbWVudCBpcyBlbmFibGVkXG4gICAqIEBwYXJhbSBmbVBhdGggdGhlIEZNIHBhdGgsIGUuZy4gJy9QUk9KRUNUIE1BTkFHRU1FTlQvRnVuZGluZy9GdW5kaW5nIEluZm9ybWF0aW9uL0RlbGl2ZXJ5IHJhdGUnXG4gICAqIEBwYXJhbSBvbmx5TGFzdFNlZ21lbnQgc3BlY2lmaWVzIGlmIHRvIGNoZWNrIGlmIG9ubHkgdGhlIGxhc3Qgc2VnbWVudCBpcyBlbmFibGVkICh0aGUgQU1QIGJlaGF2aW9yIGZvciBzb21lIGNhc2VzKVxuICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgKi9cbiAgc3RhdGljIGlzRk1TZXR0aW5nRW5hYmxlZChmbVBhdGgsIG9ubHlMYXN0U2VnbWVudCkge1xuICAgIHJldHVybiBGZWF0dXJlTWFuYWdlci5fY3VycmVudEZNLmlzRk1TZXR0aW5nRW5hYmxlZChmbVBhdGgsIG9ubHlMYXN0U2VnbWVudCk7XG4gIH1cblxuICBzdGF0aWMgaGFzRk1TZXR0aW5nKGZtUGF0aCkge1xuICAgIHJldHVybiBGZWF0dXJlTWFuYWdlci5fY3VycmVudEZNLmhhc0ZNU2V0dGluZyhmbVBhdGgpO1xuICB9XG5cbiAgaXNGTVNldHRpbmdFbmFibGVkKGZtUGF0aCwgb25seUxhc3RTZWdtZW50KSB7XG4gICAgdGhpcy5fbG9nZ2VyTWFuYWdlci5kZWJ1ZygnaXNGTVNldHRpbmdFbmFibGVkJyk7XG4gICAgaWYgKHRoaXMuX2ZtVHJlZSkge1xuICAgICAgbGV0IGxhc3RGTVN1YlRyZWUgPSB0aGlzLl9mbVRyZWU7XG4gICAgICBjb25zdCBzZWdtZW50cyA9IHRoaXMuX2dldFBhdGhTZWdtZW50cyhmbVBhdGgpO1xuICAgICAgY29uc3QgZm91bmRMYXN0Rk1TdWJUcmVlID0gc2VnbWVudHMuZXZlcnkoc2VnbWVudCA9PiB7XG4gICAgICAgIGxhc3RGTVN1YlRyZWUgPSBsYXN0Rk1TdWJUcmVlW3NlZ21lbnRdO1xuICAgICAgICByZXR1cm4gbGFzdEZNU3ViVHJlZSAhPT0gdW5kZWZpbmVkICYmIChsYXN0Rk1TdWJUcmVlLl9fZW5hYmxlZCB8fCBvbmx5TGFzdFNlZ21lbnQpO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gZm91bmRMYXN0Rk1TdWJUcmVlICYmIGxhc3RGTVN1YlRyZWUuX19lbmFibGVkO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBoYXNGTVNldHRpbmcoZm1QYXRoKSB7XG4gICAgY29uc3QgZm1TZXR0aW5nID0gdGhpcy5maW5kRk1TZXR0aW5nKGZtUGF0aCk7XG4gICAgcmV0dXJuIGZtU2V0dGluZyAmJiBmbVNldHRpbmcuX19lbmFibGVkICE9PSB1bmRlZmluZWQ7XG4gIH1cblxuICBmaW5kRk1TZXR0aW5nKGZtUGF0aCkge1xuICAgIGNvbnN0IHNlZ21lbnRzID0gdGhpcy5fZ2V0UGF0aFNlZ21lbnRzKGZtUGF0aCk7XG4gICAgcmV0dXJuIHNlZ21lbnRzLnJlZHVjZSgoY3VycmVudEZNU2V0dGluZywgc2VnbWVudCkgPT4gY3VycmVudEZNU2V0dGluZyAmJiBjdXJyZW50Rk1TZXR0aW5nW3NlZ21lbnRdXG4gICAgICAsIHRoaXMuX2ZtVHJlZSB8fCB7fSk7XG4gIH1cblxuICBzZXRGTVNldHRpbmcoZm1QYXRoLCBlbmFibGVkKSB7XG4gICAgaWYgKHRoaXMuX2ZtVHJlZSkge1xuICAgICAgY29uc3Qgc2VnbWVudHMgPSB0aGlzLl9nZXRQYXRoU2VnbWVudHMoZm1QYXRoKTtcbiAgICAgIGNvbnN0IGxhc3RGTVN1YlRyZWUgPSBzZWdtZW50cy5yZWR1Y2UoKGN1cnJlbnRGTVRyZWUsIHNlZ21lbnQpID0+IHtcbiAgICAgICAgbGV0IHNlZ21lbnRGTSA9IGN1cnJlbnRGTVRyZWVbc2VnbWVudF07XG4gICAgICAgIGlmIChzZWdtZW50Rk0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHNlZ21lbnRGTSA9IHt9O1xuICAgICAgICAgIGN1cnJlbnRGTVRyZWVbc2VnbWVudF0gPSBzZWdtZW50Rk07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHNlZ21lbnRGTTtcbiAgICAgIH0sIHRoaXMuX2ZtVHJlZSk7XG4gICAgICBsYXN0Rk1TdWJUcmVlLl9fZW5hYmxlZCA9IGVuYWJsZWQ7XG4gICAgfVxuICB9XG5cbiAgX2dldFBhdGhTZWdtZW50cyhmbVBhdGgpIHtcbiAgICAvLyBpZ25vcmUgZmlyc3QgXCIvXCIgdG8gZXhjbHVkZSBlbXB0eSBzdHJpbmcgZnJvbSB0aGUgc3BsaXRcbiAgICByZXR1cm4gZm1QYXRoLnN1YnN0cmluZygxKS5zcGxpdCgnLycpO1xuICB9XG59XG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCBQcm9wVHlwZXMgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBPdmVybGF5VHJpZ2dlciwgVG9vbHRpcCB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XG5cbmxldCBsb2dnZXIgPSBudWxsO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBUExhYmVsIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGxhYmVsOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgZG9udFRyYW5zbGF0ZTogUHJvcFR5cGVzLmJvb2wsXG4gICAgbGFiZWxDbGFzczogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAvKiBkZWNvcmF0b3I6IFByb3BUeXBlcy5mdW5jLCAvLyBUT0RPOiBUbyBiZSBpbXBsZW1lbnRlZC4gKi9cbiAgICBzZXBhcmF0b3I6IFByb3BUeXBlcy5ib29sLFxuICAgIHRvb2x0aXA6IFByb3BUeXBlcy5zdHJpbmdcbiAgfTtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICBjb25zdCB7IExvZ2dlciB9ID0gdGhpcy5wcm9wcztcbiAgICBsb2dnZXIgPSBuZXcgTG9nZ2VyKCdBUCBMYWJlbCcpO1xuICAgIGxvZ2dlci5kZWJ1ZygnY29uc3RydWN0b3InKTtcbiAgfVxuXG4gIGdldENvbnRlbnQoKSB7XG4gICAgY29uc3QgeyB0cmFuc2xhdGUgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgbGFiZWwgPSAodGhpcy5wcm9wcy5kb250VHJhbnNsYXRlID09PSB0cnVlID8gdGhpcy5wcm9wcy5sYWJlbCA6IHRyYW5zbGF0ZSh0aGlzLnByb3BzLmxhYmVsKSk7XG4gICAgY29uc3QgbGFiZWxDbGFzcyA9ICh0aGlzLnByb3BzLmxhYmVsQ2xhc3MgPyB0aGlzLnByb3BzLmxhYmVsQ2xhc3MgOiAnJyk7XG4gICAgcmV0dXJuICg8ZGl2IGNsYXNzTmFtZT17bGFiZWxDbGFzc30+PHNwYW4+e2xhYmVsfTwvc3Bhbj57dGhpcy5wcm9wcy5zZXBhcmF0b3IgPyA8aHIgLz4gOiAnJ308L2Rpdj4pO1xuICB9XG5cbiAgdG9vbHRpcCgpIHtcbiAgICBjb25zdCB7IHRvb2x0aXAsIGRvbnRUcmFuc2xhdGUsIHRyYW5zbGF0ZSB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gPFRvb2x0aXAgaWQ9XCJ0b29sdGlwXCI+e2RvbnRUcmFuc2xhdGUgPyB0b29sdGlwIDogdHJhbnNsYXRlKHRoaXMucHJvcHMudG9vbHRpcCl9PC9Ub29sdGlwPjtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBpZiAodGhpcy5wcm9wcy50b29sdGlwKSB7XG4gICAgICByZXR1cm4gKDxPdmVybGF5VHJpZ2dlciBwbGFjZW1lbnQ9XCJyaWdodFwiIG92ZXJsYXk9e3RoaXMudG9vbHRpcCgpfT5cbiAgICAgICAge3RoaXMuZ2V0Q29udGVudCgpfVxuICAgICAgPC9PdmVybGF5VHJpZ2dlcj4pO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdGhpcy5nZXRDb250ZW50KCk7XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCBQcm9wVHlwZXMgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL0FjdGl2aXR5UHJldmlldy5jc3MnO1xuXG5sZXQgbG9nZ2VyID0gbnVsbDtcblxuLyoqXG4gKiBTaW1wbGUgRmllbGQgY29tcG9uZW50IHRoYXQgY29uc2lzdHMgb2YgYSBmaWVsZCB0aXRsZSBhbmQgZmllbGQgdmFsdWVcbiAqIEBhdXRob3IgTmFkZWpkYSBNYW5kcmVzY3VcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQVBGaWVsZCBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgdGl0bGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgdmFsdWU6IFByb3BUeXBlcy5hbnksXG4gICAgaW5saW5lOiBQcm9wVHlwZXMuYm9vbCxcbiAgICB1c2VJbm5lckhUTUw6IFByb3BUeXBlcy5ib29sLFxuICAgIGZpZWxkQ2xhc3M6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgZmllbGROYW1lQ2xhc3M6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgZmllbGRWYWx1ZUNsYXNzOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIHNlcGFyYXRvcjogUHJvcFR5cGVzLmJvb2xcbiAgfTtcblxuICAvKipcbiAgICogR2V0cyBhbiBpbnN0YW5jZSBvZiBTaW1wbGUgRmllbGRcbiAgICogQHBhcmFtIHRybkxhYmVsIHRoZSBsYWJlbCB0byB0cmFuc2xhdGUgYW5kIHVzZSBhcyBhIHRpdGxlLiBUaGlzIGxhYmVsIGlzIGFsc28gdXNlZCBhcyB0aGUgY29tcG9uZW50IGtleS5cbiAgICogQHBhcmFtIHZhbHVlIHRoZSBmaWVsZCB2YWx1ZVxuICAgKiBAcGFyYW0gaW5saW5lIHNob3cgdGl0bGUgYW5kIHZhbHVlIGluIHRoZSBzYW1lIHJvdy5cbiAgICogQHBhcmFtIHNlcGFyYXRvciBhZGQgb3Igbm90IGFuIDxocj4gdGFnLlxuICAgKiBAcGFyYW0gbmFtZUNsYXNzIGNzcyBjbGFzcyBmb3IgdGhlIGZpZWxkIGxhYmVsXG4gICAqIEBwYXJhbSB2YWx1ZUNsYXNzIGNzcyBjbGFzcyBmb3IgdGhlIGZpZWxkIHZhbHVlXG4gICAqIEBwYXJhbSB0cmFuc2xhdGUgdGhlIHRyYW5zbGF0aW9uIGZ1bmN0aW9uXG4gICAqIEBwYXJhbSBsb2dnZXIgdGhlIExvZ2dlck1hbmFnZXJcbiAgICogQHJldHVybiB7U2ltcGxlRmllbGR9XG4gICAqL1xuICBzdGF0aWMgaW5zdGFuY2UodHJuTGFiZWwsIHZhbHVlLCBpbmxpbmUgPSBmYWxzZSwgc2VwYXJhdG9yID0gZmFsc2UsIG5hbWVDbGFzcywgdmFsdWVDbGFzcywgdHJhbnNsYXRlLCBsb2dnZXIpIHtcbiAgICByZXR1cm4gKDxBUEZpZWxkXG4gICAgICBrZXk9e3RybkxhYmVsfSB0aXRsZT17dHJhbnNsYXRlKHRybkxhYmVsKX0gdmFsdWU9e3ZhbHVlfSBpbmxpbmU9e2lubGluZX0gc2VwYXJhdG9yPXtzZXBhcmF0b3J9XG4gICAgICBmaWVsZE5hbWVDbGFzcz17bmFtZUNsYXNzfSBmaWVsZFZhbHVlQ2xhc3M9e3ZhbHVlQ2xhc3N9IHRyYW5zbGF0ZT17dHJhbnNsYXRlfSBMb2dnZXI9e2xvZ2dlcn0gLz4pO1xuICB9XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgY29uc3QgeyBMb2dnZXIgfSA9IHRoaXMucHJvcHM7XG4gICAgbG9nZ2VyID0gbmV3IExvZ2dlcignQVAgZmllbGQnKTtcbiAgICBsb2dnZXIubG9nKCdjb25zdHJ1Y3RvcicpO1xuICAgIHRoaXMudXNlU2VwYXJhdG9yID0gdGhpcy5wcm9wcy5zZXBhcmF0b3IgIT09IGZhbHNlO1xuICAgIHRoaXMuZGlzcGxheUNsYXNzID0gdGhpcy5wcm9wcy5maWVsZENsYXNzIHx8ICh0aGlzLnByb3BzLmlubGluZSA9PT0gdHJ1ZSA/IHN0eWxlcy5pbmxpbmUgOiBzdHlsZXMuYmxvY2spO1xuICB9XG5cbiAgX2dldFZhbHVlKCkge1xuICAgIGNvbnN0IHsgdHJhbnNsYXRlIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IGNsYXNzTmFtZXMgPSBgJHt0aGlzLnByb3BzLmZpZWxkVmFsdWVDbGFzc30gJHt0aGlzLmRpc3BsYXlDbGFzc31gO1xuICAgIC8vIFRvIGhhbmRsZSBib29sZWFuIGZpZWxkcyB3ZSBkb250IHdhbnQgdG8gc2hvdyAnZmFsc2UnIGFzICdObyBEYXRhJy5cbiAgICBjb25zdCB2YWx1ZSA9ICh0aGlzLnByb3BzLnZhbHVlIHx8IHRoaXMucHJvcHMudmFsdWUgPT09IGZhbHNlKSA/IHRoaXMucHJvcHMudmFsdWUgOiB0cmFuc2xhdGUoJ05vIERhdGEnKTtcbiAgICBsZXQgZGlzcGxheVZhbHVlO1xuICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgaWYgKHZhbHVlWzBdIGluc3RhbmNlb2YgT2JqZWN0KSB7XG4gICAgICAgIGRpc3BsYXlWYWx1ZSA9IFtdO1xuICAgICAgICB2YWx1ZS5mb3JFYWNoKHYgPT4gZGlzcGxheVZhbHVlLnB1c2godikpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZGlzcGxheVZhbHVlID0gdmFsdWUuc29ydCgpXG4gICAgICAgICAgLmpvaW4oJywgJyk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgdmFsdWUgPT09ICdib29sZWFuJykge1xuICAgICAgZGlzcGxheVZhbHVlID0gdmFsdWUgPT09IHRydWUgPyB0cmFuc2xhdGUoJ1llcycpIDogdHJhbnNsYXRlKCdObycpO1xuICAgIH0gZWxzZSB7XG4gICAgICBkaXNwbGF5VmFsdWUgPSAodGhpcy5wcm9wcy5pbmxpbmUgJiYgdGhpcy5wcm9wcy52YWx1ZSBpbnN0YW5jZW9mIFN0cmluZykgPyBgJHt2YWx1ZX0gYCA6IHZhbHVlO1xuICAgIH1cbiAgICBpZiAodGhpcy5wcm9wcy51c2VJbm5lckhUTUwpIHtcbiAgICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lc30gZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBkaXNwbGF5VmFsdWUgfX0gLz47XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lc30+e2Rpc3BsYXlWYWx1ZX08L2Rpdj47XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IGNsYXNzTmFtZXMgPSBgJHt0aGlzLnByb3BzLmZpZWxkTmFtZUNsYXNzfSAke3RoaXMuZGlzcGxheUNsYXNzfWA7XG4gICAgcmV0dXJuICg8ZGl2IGNsYXNzTmFtZT17dGhpcy5kaXNwbGF5Q2xhc3N9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZXN9Pnt0aGlzLnByb3BzLnRpdGxlfTwvZGl2PlxuICAgICAge3RoaXMuX2dldFZhbHVlKCl9XG4gICAgICB7dGhpcy51c2VTZXBhcmF0b3IgPyA8aHIgLz4gOiAnJ31cbiAgICA8L2Rpdj4pO1xuICB9XG59XG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vQWN0aXZpdHlQcmV2aWV3LmNzcyc7XG5pbXBvcnQgVUlVdGlscyBmcm9tICcuLi8uLi8uLi91dGlscy9VSVV0aWxzJztcblxubGV0IGxvZ2dlciA9IG51bGw7XG5cbi8qKlxuICogQ29tcG9uZW50IGZvciBjb252ZXJ0aW5nIGNvbnRlbnQgdG8gdGFibGUgZm9ybVxuICogQGF1dGhvciBBbnlhIE1hcnNoYWxsXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhYmxpZnkgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgY29udGVudDogUHJvcFR5cGVzLmFueSxcbiAgICBjb2x1bW5zOiBQcm9wVHlwZXMubnVtYmVyXG4gIH07XG5cbiAgLyoqXG4gICAqIFRha2VzIGFuIGFycmF5IGFuZCB0dXJucyBpdCBpbnRvIHRhYmxlIHJvd3MgYW5kIGNvbHVtbnMuXG4gICAqIEBhdXRob3IgQW55YSBNYXJzaGFsbFxuICAgKiBAcGFyYW0gY29udGVudCBjb250ZW50IGZvciB0YWJsZVxuICAgKiBAcGFyYW0gY29scyBudW1iZXIgb2YgY29sdW1uc1xuICAgKi9cbiAgc3RhdGljIGFkZFJvd3MoY29udGVudCwgY29scykge1xuICAgIC8vIFJlbW92ZSB1bmRlZmluZWQgY2VsbHMuXG4gICAgY29udGVudCA9IGNvbnRlbnQuZmlsdGVyKGMgPT4gYyk7XG4gICAgLy8gRGVjcmVhc2UgbnVtYmVyIG9mIGNvbHMgaWYgd2UgZG9udCBoYXZlIGVub3VnaCBlbGVtZW50cy5cbiAgICBpZiAoY29udGVudC5sZW5ndGggPCBjb2xzKSB7XG4gICAgICBjb2xzID0gY29udGVudC5sZW5ndGg7XG4gICAgfVxuICAgIGNvbnN0IHJvd3MgPSBNYXRoLmNlaWwoY29udGVudC5sZW5ndGggLyBjb2xzKTtcbiAgICBjb25zdCB0YWJsZUNvbnRlbnQgPSBbXTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcm93czsgaSsrKSB7XG4gICAgICBjb25zdCByb3dDb250ZW50ID0gW107XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGNvbHM7IGorKykge1xuICAgICAgICByb3dDb250ZW50LnB1c2goPHRkIGtleT17VUlVdGlscy5zdHJpbmdUb1VuaXF1ZUlkKCl9Pntjb250ZW50LnBvcCgpfTwvdGQ+KTtcbiAgICAgIH1cbiAgICAgIHRhYmxlQ29udGVudC5wdXNoKDx0ciBrZXk9e1VJVXRpbHMuc3RyaW5nVG9VbmlxdWVJZCgpfT57cm93Q29udGVudH08L3RyPik7XG4gICAgfVxuICAgIHJldHVybiB0YWJsZUNvbnRlbnQ7XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICBjb25zdCB7IExvZ2dlciB9ID0gdGhpcy5wcm9wcztcbiAgICBsb2dnZXIgPSBuZXcgTG9nZ2VyKCd0YWJsaWZ5Jyk7XG4gICAgbG9nZ2VyLmxvZygnY29uc3RydWN0b3InKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBjb2x1bW5zID0gdGhpcy5wcm9wcy5jb2x1bW5zID49IHRoaXMucHJvcHMuY29udGVudC5sZW5ndGggPyB0aGlzLnByb3BzLmNvbnRlbnQubGVuZ3RoIDogdGhpcy5wcm9wcy5jb2x1bW5zO1xuICAgIGNvbnN0IGNlbGxXaWR0aCA9IGAkeygxMDAgLyBjb2x1bW5zKX0lYDtcbiAgICBjb25zdCBjZWxsd2lkdGhTdHlsZSA9IHtcbiAgICAgIHdpZHRoOiBjZWxsV2lkdGhcbiAgICB9O1xuICAgIGNvbnN0IHJvd3MgPSBNYXRoLmNlaWwodGhpcy5wcm9wcy5jb250ZW50Lmxlbmd0aCAvIGNvbHVtbnMpO1xuICAgIGNvbnN0IHRhYmxlQ29udGVudCA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcm93czsgaSsrKSB7XG4gICAgICBjb25zdCByb3dDb250ZW50ID0gW107XG4gICAgICByb3dDb250ZW50LnB1c2goPGRpdiBrZXk9e1VJVXRpbHMuc3RyaW5nVG9VbmlxdWVJZCgpfSBzdHlsZT17Y2VsbHdpZHRoU3R5bGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy50YWJsaWZ5X291dGVyX2NlbGx9PlxuICAgICAgICB7dGhpcy5wcm9wcy5jb250ZW50LnBvcCgpfTwvZGl2Pik7XG4gICAgICBmb3IgKGxldCBqID0gMTsgaiA8IHRoaXMucHJvcHMuY29sdW1ucyAmJiB0aGlzLnByb3BzLmNvbnRlbnQubGVuZ3RoID4gMDsgaisrKSB7XG4gICAgICAgIGNvbnN0IGtleSA9IFVJVXRpbHMuc3RyaW5nVG9VbmlxdWVJZCgpO1xuICAgICAgICByb3dDb250ZW50LnB1c2goPGRpdiBrZXk9e2tleX0gc3R5bGU9e2NlbGx3aWR0aFN0eWxlfSBjbGFzc05hbWU9e3N0eWxlcy50YWJsaWZ5X2lubmVyX2NlbGx9PlxuICAgICAgICAgIHt0aGlzLnByb3BzLmNvbnRlbnQucG9wKCl9PC9kaXY+KTtcbiAgICAgIH1cbiAgICAgIHRhYmxlQ29udGVudC5wdXNoKDxkaXYga2V5PXtVSVV0aWxzLnN0cmluZ1RvVW5pcXVlSWQoKX0gY2xhc3NOYW1lPXtzdHlsZXMuZmxleH0+e3Jvd0NvbnRlbnR9PC9kaXY+KTtcbiAgICB9XG4gICAgcmV0dXJuICg8ZGl2PlxuICAgICAge3RhYmxlQ29udGVudH1cbiAgICA8L2Rpdj4pO1xuICB9XG59XG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCBQcm9wVHlwZXMgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL0FjdGl2aXR5UHJldmlldy5jc3MnO1xuXG5sZXQgbG9nZ2VyID0gbnVsbDtcblxuLyoqXG4gKiBQZXJjZW50YWdlIEZpZWxkIGNvbXBvbmVudFxuICogQGF1dGhvciBOYWRlamRhIE1hbmRyZXNjdVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBUFBlcmNlbnRhZ2VGaWVsZCBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgdGl0bGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICB2YWx1ZTogUHJvcFR5cGVzLm51bWJlcixcbiAgICB0aXRsZUNsYXNzOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIHZhbHVlQ2xhc3M6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgTG9nZ2VyOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIHJhd051bWJlclRvRm9ybWF0dGVkU3RyaW5nOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkXG4gIH07XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgY29uc3QgeyBMb2dnZXIgfSA9IHRoaXMucHJvcHM7XG4gICAgbG9nZ2VyID0gbmV3IExvZ2dlcignQVAgcGVyY2VudGFnZSBmaWVsZCcpO1xuICAgIGxvZ2dlci5sb2coJ2NvbnN0cnVjdG9yJyk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyByYXdOdW1iZXJUb0Zvcm1hdHRlZFN0cmluZyB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBwZXJjZW50YWdlID0gdGhpcy5wcm9wcy52YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHRoaXMucHJvcHMudmFsdWUgIT09IG51bGxcbiAgICAgID8gYCR7cmF3TnVtYmVyVG9Gb3JtYXR0ZWRTdHJpbmcodGhpcy5wcm9wcy52YWx1ZSwgdHJ1ZSl9JWAgOiBudWxsO1xuICAgIHJldHVybiAoPGRpdj5cbiAgICAgIDxzcGFuIGNsYXNzTmFtZT17dGhpcy5wcm9wcy50aXRsZUNsYXNzfT57dGhpcy5wcm9wcy50aXRsZX0gPC9zcGFuPlxuICAgICAgPHNwYW4gY2xhc3NOYW1lPXtgJHt0aGlzLnByb3BzLnZhbHVlQ2xhc3N9ICR7c3R5bGVzLmFsaWduUmlnaHR9YH0+e3BlcmNlbnRhZ2V9PC9zcGFuPlxuICAgIDwvZGl2Pik7XG4gIH1cbn1cbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IEFQRmllbGQgZnJvbSAnLi9BUEZpZWxkLmpzeCc7XG5pbXBvcnQgQVBQZXJjZW50YWdlRmllbGQgZnJvbSAnLi9BUFBlcmNlbnRhZ2VGaWVsZC5qc3gnO1xuaW1wb3J0IFRhYmxpZnkgZnJvbSAnLi9UYWJsaWZ5LmpzeCc7XG5pbXBvcnQgQWN0aXZpdHlDb25zdGFudHMgZnJvbSAnLi4vLi4vLi4vbW9kdWxlcy91dGlsL0FjdGl2aXR5Q29uc3RhbnRzJztcbmltcG9ydCBGaWVsZHNNYW5hZ2VyIGZyb20gJy4uLy4uLy4uL21vZHVsZXMvZmllbGQvRmllbGRzTWFuYWdlcic7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL0FjdGl2aXR5UHJldmlldy5jc3MnO1xuaW1wb3J0IEZlYXR1cmVNYW5hZ2VyIGZyb20gJy4uLy4uLy4uL21vZHVsZXMvdXRpbC9GZWF0dXJlTWFuYWdlcic7XG5pbXBvcnQgUG9zc2libGVWYWx1ZXNNYW5hZ2VyIGZyb20gJy4uLy4uLy4uL21vZHVsZXMvZmllbGQvUG9zc2libGVWYWx1ZXNNYW5hZ2VyJztcbmltcG9ydCBVSVV0aWxzIGZyb20gJy4uLy4uLy4uL3V0aWxzL1VJVXRpbHMnO1xuXG5sZXQgbG9nZ2VyID0gbnVsbDtcblxuLyoqXG4gKiBBY3Rpdml0eSBQcmV2aWV3IFBlcmNlbnRhZ2UgTGlzdCB0eXBlIHNlY3Rpb25cbiAqIEBhdXRob3IgTmFkZWpkYSBNYW5kcmVzY3VcbiAqL1xuY29uc3QgQVBQZXJjZW50YWdlTGlzdCA9IChsaXN0RmllbGQsIHZhbHVlRmllbGQsIHBlcmNlbnRhZ2VGaWVsZCwgbGlzdFRpdGxlID0gbnVsbCkgPT4gY2xhc3MgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGFjdGl2aXR5OiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gICAgYWN0aXZpdHlGaWVsZHNNYW5hZ2VyOiBQcm9wVHlwZXMuaW5zdGFuY2VPZihGaWVsZHNNYW5hZ2VyKS5pc1JlcXVpcmVkLFxuICAgIGZpZWxkTmFtZUNsYXNzOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGZpZWxkVmFsdWVDbGFzczogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBwZXJjZW50VGl0bGVDbGFzczogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBwZXJjZW50VmFsdWVDbGFzczogUHJvcFR5cGVzLnN0cmluZyxcbiAgICB0YWJsaWZ5OiBQcm9wVHlwZXMuYm9vbCxcbiAgICBjb2x1bW5zOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIGZtUGF0aDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBnZXRJdGVtVGl0bGU6IFByb3BUeXBlcy5mdW5jLFxuICAgIExvZ2dlcjogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICB0cmFuc2xhdGU6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWRcbiAgfTtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICBjb25zdCB7IExvZ2dlciB9ID0gdGhpcy5wcm9wcztcbiAgICBsb2dnZXIgPSBuZXcgTG9nZ2VyKCdBUCBwZXJjZW50YWdlIGxpc3QnKTtcbiAgICBsb2dnZXIuZGVidWcoJ2NvbnN0cnVjdG9yJyk7XG4gIH1cblxuICBnZXRJdGVtVGl0bGUoaXRlbSkge1xuICAgIGlmICh0aGlzLnByb3BzLmdldEl0ZW1UaXRsZSkge1xuICAgICAgcmV0dXJuIHRoaXMucHJvcHMuZ2V0SXRlbVRpdGxlKGl0ZW0pO1xuICAgIH1cbiAgICBjb25zdCBvYmogPSBpdGVtW3ZhbHVlRmllbGRdO1xuICAgIHJldHVybiBvYmpbQWN0aXZpdHlDb25zdGFudHMuSElFUkFSQ0hJQ0FMX1ZBTFVFXSA/XG4gICAgICBvYmpbQWN0aXZpdHlDb25zdGFudHMuSElFUkFSQ0hJQ0FMX1ZBTFVFXSA6XG4gICAgICBQb3NzaWJsZVZhbHVlc01hbmFnZXIuZ2V0T3B0aW9uVHJhbnNsYXRpb24ob2JqKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICB0cmFuc2xhdGUsIGFjdGl2aXR5RmllbGRzTWFuYWdlciwgcGVyY2VudFRpdGxlQ2xhc3MsIGZtUGF0aCwgYWN0aXZpdHksIGNvbHVtbnMsIHRhYmxpZnlcbiAgICAgICwgcGVyY2VudFZhbHVlQ2xhc3MsIGZpZWxkTmFtZUNsYXNzLCBmaWVsZFZhbHVlQ2xhc3MsIExvZ2dlciwgcmF3TnVtYmVyVG9Gb3JtYXR0ZWRTdHJpbmdcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB0aXRsZSA9IGxpc3RUaXRsZSA/IHRyYW5zbGF0ZShsaXN0VGl0bGUpIDogbnVsbDtcbiAgICBsZXQgaXRlbXMgPSBhY3Rpdml0eVtsaXN0RmllbGRdO1xuICAgIGxldCBjb250ZW50ID0gbnVsbDtcbiAgICBsZXQgaXNMaXN0RW5hYmxlZCA9IGFjdGl2aXR5RmllbGRzTWFuYWdlci5pc0ZpZWxkUGF0aEVuYWJsZWQobGlzdEZpZWxkKSA9PT0gdHJ1ZTtcbiAgICBpZiAoZm1QYXRoKSB7XG4gICAgICBpc0xpc3RFbmFibGVkID0gRmVhdHVyZU1hbmFnZXIuaXNGTVNldHRpbmdFbmFibGVkKGZtUGF0aCkgPyBpc0xpc3RFbmFibGVkIDogZmFsc2U7XG4gICAgfVxuICAgIGlmIChpc0xpc3RFbmFibGVkKSB7XG4gICAgICBpZiAoaXRlbXMgJiYgaXRlbXMubGVuZ3RoKSB7XG4gICAgICAgIGl0ZW1zID0gaXRlbXMubWFwKGl0ZW0gPT4gKHtcbiAgICAgICAgICBpdGVtVGl0bGU6IHRoaXMuZ2V0SXRlbVRpdGxlKGl0ZW0pLFxuICAgICAgICAgIHBlcmNlbnRhZ2U6IGl0ZW1bcGVyY2VudGFnZUZpZWxkXVxuICAgICAgICB9KSlcbiAgICAgICAgICAuc29ydCgoYSwgYikgPT4gYS5pdGVtVGl0bGUubG9jYWxlQ29tcGFyZShiLml0ZW1UaXRsZSkpO1xuICAgICAgICBjb250ZW50ID0gaXRlbXMubWFwKCh7IGl0ZW1UaXRsZSwgcGVyY2VudGFnZSB9KSA9PlxuICAgICAgICAgIDxBUFBlcmNlbnRhZ2VGaWVsZFxuICAgICAgICAgICAga2V5PXtVSVV0aWxzLnN0cmluZ1RvVW5pcXVlSWQoaXRlbVRpdGxlKX0gdGl0bGU9e2l0ZW1UaXRsZX0gdmFsdWU9e3BlcmNlbnRhZ2V9XG4gICAgICAgICAgICB0aXRsZUNsYXNzPXtwZXJjZW50VGl0bGVDbGFzc30gdmFsdWVDbGFzcz17cGVyY2VudFZhbHVlQ2xhc3N9IHRyYW5zbGF0ZT17dHJhbnNsYXRlfVxuICAgICAgICAgICAgTG9nZ2VyPXtMb2dnZXJ9IHJhd051bWJlclRvRm9ybWF0dGVkU3RyaW5nPXtyYXdOdW1iZXJUb0Zvcm1hdHRlZFN0cmluZ30gLz5cbiAgICAgICAgKTtcbiAgICAgICAgaWYgKHRhYmxpZnkpIHtcbiAgICAgICAgICBjb250ZW50ID0gPFRhYmxpZnkgY29udGVudD17Y29udGVudH0gY29sdW1ucz17Y29sdW1uc30gTG9nZ2VyPXtMb2dnZXJ9IC8+O1xuICAgICAgICB9XG4gICAgICAgIGNvbnRlbnQgPSAoPEFQRmllbGRcbiAgICAgICAgICBrZXk9e2xpc3RGaWVsZH0gdGl0bGU9e3RpdGxlfSB2YWx1ZT17Y29udGVudH0gc2VwYXJhdG9yPXtmYWxzZX0gaW5saW5lPXt0YWJsaWZ5ID09PSB0cnVlfVxuICAgICAgICAgIGZpZWxkTmFtZUNsYXNzPXtmaWVsZE5hbWVDbGFzc30gZmllbGRWYWx1ZUNsYXNzPXtmaWVsZFZhbHVlQ2xhc3N9XG4gICAgICAgICAgdHJhbnNsYXRlPXt0cmFuc2xhdGV9IExvZ2dlcj17TG9nZ2VyfSAvPik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb250ZW50ID0gKDxBUEZpZWxkXG4gICAgICAgICAga2V5PXtsaXN0RmllbGR9IHRpdGxlPXt0aXRsZX0gdmFsdWU9e3RyYW5zbGF0ZSgnTm8gRGF0YScpfSBzZXBhcmF0b3I9e2ZhbHNlfVxuICAgICAgICAgIGlubGluZT17dGFibGlmeSA9PT0gdHJ1ZX1cbiAgICAgICAgICBmaWVsZE5hbWVDbGFzcz17ZmllbGROYW1lQ2xhc3N9IGZpZWxkVmFsdWVDbGFzcz17c3R5bGVzLm5vZGF0YX1cbiAgICAgICAgICB0cmFuc2xhdGU9e3RyYW5zbGF0ZX0gTG9nZ2VyPXtMb2dnZXJ9IC8+KTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxufTtcblxuZXhwb3J0IGRlZmF1bHQgQVBQZXJjZW50YWdlTGlzdDtcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IEZpZWxkUGF0aENvbnN0YW50cyBmcm9tICcuLi8uLi8uLi91dGlscy9GaWVsZFBhdGhDb25zdGFudHMnO1xuaW1wb3J0IEZpZWxkc01hbmFnZXIgZnJvbSAnLi4vLi4vLi4vbW9kdWxlcy9maWVsZC9GaWVsZHNNYW5hZ2VyJztcbmltcG9ydCBGZWF0dXJlTWFuYWdlciBmcm9tICcuLi8uLi8uLi9tb2R1bGVzL3V0aWwvRmVhdHVyZU1hbmFnZXInO1xuaW1wb3J0IFBvc3NpYmxlVmFsdWVzTWFuYWdlciBmcm9tICcuLi8uLi8uLi9tb2R1bGVzL2ZpZWxkL1Bvc3NpYmxlVmFsdWVzTWFuYWdlcic7XG5pbXBvcnQgQVBGaWVsZCBmcm9tICcuLi9jb21wb25lbnRzL0FQRmllbGQuanN4JztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vQWN0aXZpdHlQcmV2aWV3LmNzcyc7XG5pbXBvcnQgVUlVdGlscyBmcm9tICcuLi8uLi8uLi91dGlscy9VSVV0aWxzJztcblxubGV0IGxvZ2dlciA9IG51bGw7XG5cbi8qKlxuICogR2VuZXJpYyBhY3Rpdml0eSBwcmV2aWV3IHNlY3Rpb24gY2xhc3NcbiAqIEBhdXRob3IgTmFkZWpkYSBNYW5kcmVzY3VcbiAqL1xuLy8gY29uc3QgU2VjdGlvbiA9IChDb21wb3NlZFNlY3Rpb24sIFNlY3Rpb25UaXRsZSA9IG51bGwsIHVzZUVuY2Fwc3VsYXRlSGVhZGVyID0gdHJ1ZSwgc0lEKSA9PiBjbGFzcyBleHRlbmRzIENvbXBvbmVudCB7XG5jb25zdCBTZWN0aW9uID0gKENvbXBvc2VkU2VjdGlvbiwgcGFyYW1zKSA9PiBjbGFzcyBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgdGl0bGVEZXRhaWxzOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMub2JqZWN0XSksXG4gICAgc2VjdGlvblBhdGg6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgdGl0bGVDbGFzczogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBncm91cENsYXNzOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGNvbXBvc2VkQ2xhc3M6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgZmllbGROYW1lQ2xhc3M6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgZmllbGRWYWx1ZUNsYXNzOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGZtUGF0aDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBmaWVsZENsYXNzOiBQcm9wVHlwZXMuc3RyaW5nXG4gIH07XG5cbiAgc3RhdGljIGNvbnRleHRUeXBlcyA9IHtcbiAgICBhY3Rpdml0eTogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICAgIGFjdGl2aXR5RmllbGRzTWFuYWdlcjogUHJvcFR5cGVzLmluc3RhbmNlT2YoRmllbGRzTWFuYWdlcikuaXNSZXF1aXJlZCxcbiAgICBjb250YWN0RmllbGRzTWFuYWdlcjogUHJvcFR5cGVzLmluc3RhbmNlT2YoRmllbGRzTWFuYWdlciksXG4gICAgY29udGFjdHNCeUlkczogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICAgIGFjdGl2aXR5RnVuZGluZ1RvdGFsczogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLCAvLyBXaWxsIGNoYW5nZSB0aGlzIGlmIEFjdGl2aXR5RnVuZGluZ1RvdGFscyBpcyBtaWdyYXRlZFxuICAgIC8vIFByb3BUeXBlcy5pbnN0YW5jZU9mKHBhcmFtcy5BY3Rpdml0eUZ1bmRpbmdUb3RhbHMpLmlzUmVxdWlyZWQsXG4gICAgYWN0aXZpdHlXb3Jrc3BhY2U6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgICBhY3Rpdml0eVdTTWFuYWdlcjogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICAgIHJlc291cmNlUmVkdWNlcjogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICAgIExvZ2dlcjogUHJvcFR5cGVzLmZ1bmMsXG4gICAgdHJhbnNsYXRlOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBEYXRlVXRpbHM6IFByb3BUeXBlcy5mdW5jXG4gIH07XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICB0aXRsZUNsYXNzOiBzdHlsZXMuc2VjdGlvbl90aXRsZV9jbGFzcyxcbiAgICBncm91cENsYXNzOiBzdHlsZXMuc2VjdGlvbl9ncm91cF9jbGFzcyxcbiAgICBmaWVsZE5hbWVDbGFzczogc3R5bGVzLnNlY3Rpb25fZmllbGRfbmFtZSxcbiAgICBmaWVsZFZhbHVlQ2xhc3M6IHN0eWxlcy5zZWN0aW9uX2ZpZWxkX3ZhbHVlXG4gIH07XG5cbiAgY29uc3RydWN0b3IocHJvcHMsIGNvbnRleHQpIHtcbiAgICBzdXBlcihwcm9wcywgY29udGV4dCk7XG4gICAgaWYgKHRoaXMuY29udGV4dCkge1xuICAgICAgcGFyYW1zLkxvZ2dlciA9IHRoaXMuY29udGV4dC5Mb2dnZXI7XG4gICAgICBwYXJhbXMuRGF0ZVV0aWxzID0gdGhpcy5jb250ZXh0LkRhdGVVdGlscztcbiAgICAgIHBhcmFtcy50cmFuc2xhdGUgPSB0aGlzLmNvbnRleHQudHJhbnNsYXRlO1xuICAgIH1cbiAgICBwYXJhbXMudXNlRW5jYXBzdWxhdGVIZWFkZXIgPSAhcGFyYW1zLnVzZUVuY2Fwc3VsYXRlSGVhZGVyID8gdHJ1ZSA6IHBhcmFtcy51c2VFbmNhcHN1bGF0ZUhlYWRlcjtcbiAgICBsb2dnZXIgPSBuZXcgcGFyYW1zLkxvZ2dlcignQVAgc2VjdGlvbicpO1xuICAgIGxvZ2dlci5kZWJ1ZygnY29uc3RydWN0b3InKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW5kZXJzIGZpZWxkIGRhdGEgaWYgaXQgaXMgZW5hYmxlZCBpbiBGTS4gSWYgcmVuYWJsZWQsIGJ1dCB2YWx1ZSBpcyBub3QgYXZhaWxhYmxlLCB0aGVuIGl0IHdpbGwgbm90IGJlIHJlbmRlcmVkLFxuICAgKiB1bmxlc3MgaXQgaXMgcmVxdWVzdGVkIHZpYSBzaG93SWZOb3RBdmFpbGFibGUgZmxhZy5cbiAgICogQHBhcmFtIHBhdGggZmllbGQgcGF0aFxuICAgKiBAcGFyYW0gc2hvd0lmTm90QXZhaWxhYmxlIGZsYWcgdG8gZm9yY2libHkgZGlzcGxheSB0aGUgZmllbGQgd2hlbiBubyB2YWx1ZSBpcyBwcm92aWRlZFxuICAgKiBAcGFyYW0gTkFPcHRpb25zIG9wdGlvbmFsIHNldCBvZiB2YWx1ZXMgdGhhdCBzaG91bGQgYmUgdHJlYXRlZCBhcyB1bmRlZmluZWRcbiAgICogQHBhcmFtIGlubGluZSBvcHRpb25hbCBmbGFnIHRvIHJlbmRlciBuYW1lIGFuZCB2YWx1ZXMgb24gdGhlIHNhbWUgbGluZVxuICAgKiBAcGFyYW0gcGFyZW50IG9wdGlvbmFsIG9iamVjdCB3aGVyZSB3ZSBsb29rIGZvciB0aGUgcGF0aCAoaW5zdGVhZCBvZiB0aGUgYWN0aXZpdHkgcm9vdCkuXG4gICAqIEBwYXJhbSBmaWVsZHNNYW5hZ2VyIChvcHRpb25hbCkgY3VzdG9tIGZpZWxkcyBtYW5hZ2VyLiBBY3Rpdml0eSBGaWVsZHMgTWFuYWdlciB1c2VkIGJ5IGRlZmF1bHQuXG4gICAqIEByZXR1cm4ge251bGx8QVBGaWVsZH1cbiAgICovXG4gIGJ1aWxkU2ltcGxlRmllbGQocGF0aCwgc2hvd0lmTm90QXZhaWxhYmxlLCBOQU9wdGlvbnM6IFNldCwgaW5saW5lID0gZmFsc2UsIHBhcmVudCA9IG51bGwsIGZpZWxkc01hbmFnZXIgPSBudWxsXG4gICAgLCBvcHRpb25zKSB7XG4gICAgY29uc3Qgb3B0aW9uc18gPSBvcHRpb25zIHx8IHt9O1xuICAgIGNvbnN0IGZtUGF0aCA9IEZpZWxkUGF0aENvbnN0YW50cy5BQ1RJVklUWV9GSUVMRFNfRk1fUEFUSFtwYXRoXTtcbiAgICBmaWVsZHNNYW5hZ2VyID0gZmllbGRzTWFuYWdlciB8fCB0aGlzLmNvbnRleHQuYWN0aXZpdHlGaWVsZHNNYW5hZ2VyO1xuICAgIGlmIChmaWVsZHNNYW5hZ2VyLmlzRmllbGRQYXRoRW5hYmxlZChwYXRoKVxuICAgICAgJiYgKCFmbVBhdGggfHwgRmVhdHVyZU1hbmFnZXIuaXNGTVNldHRpbmdFbmFibGVkKGZtUGF0aCwgZmFsc2UpKSkge1xuICAgICAgY29uc3QgdGl0bGUgPSAob3B0aW9uc18ubm9UaXRsZSA/ICcnIDogZmllbGRzTWFuYWdlci5nZXRGaWVsZExhYmVsVHJhbnNsYXRpb24ocGF0aCkpO1xuICAgICAgbGV0IHZhbHVlUGF0aCA9IHBhdGg7XG4gICAgICBpZiAocGFyZW50KSB7XG4gICAgICAgIGNvbnN0IGZpZWxkUGF0aFBhcnRzID0gcGF0aC5zcGxpdCgnficpO1xuICAgICAgICB2YWx1ZVBhdGggPSBmaWVsZFBhdGhQYXJ0c1tmaWVsZFBhdGhQYXJ0cy5sZW5ndGggLSAxXTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGFsdGVybmF0ZVBhdGggPSBGaWVsZFBhdGhDb25zdGFudHMuQUxURVJOQVRFX1ZBTFVFX1BBVEhbdmFsdWVQYXRoXTtcbiAgICAgIGxldCB2YWx1ZSA9IGZpZWxkc01hbmFnZXIuZ2V0VmFsdWUocGFyZW50IHx8IHRoaXMuY29udGV4dC5hY3Rpdml0eSwgdmFsdWVQYXRoLFxuICAgICAgICBQb3NzaWJsZVZhbHVlc01hbmFnZXIuZ2V0T3B0aW9uVHJhbnNsYXRpb24pO1xuICAgICAgaWYgKCh2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gdW5kZWZpbmVkKSAmJiBhbHRlcm5hdGVQYXRoKSB7XG4gICAgICAgIHZhbHVlID0gZmllbGRzTWFuYWdlci5nZXRWYWx1ZSh0aGlzLmNvbnRleHQuYWN0aXZpdHksIGFsdGVybmF0ZVBhdGgsXG4gICAgICAgICAgUG9zc2libGVWYWx1ZXNNYW5hZ2VyLmdldE9wdGlvblRyYW5zbGF0aW9uKTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGZpZWxkRGVmID0gZmllbGRzTWFuYWdlci5nZXRGaWVsZERlZihwYXRoKTtcbiAgICAgIGlmIChmaWVsZERlZi5maWVsZF90eXBlID09PSBGaWVsZFBhdGhDb25zdGFudHMuRklFTERfVFlQRV9EQVRFKSB7XG4gICAgICAgIHZhbHVlID0gcGFyYW1zLkRhdGVVdGlscy5jcmVhdGVGb3JtYXR0ZWREYXRlKHZhbHVlKTtcbiAgICAgIH0gZWxzZSBpZiAoZmllbGREZWYuZmllbGRfdHlwZSA9PT0gRmllbGRQYXRoQ29uc3RhbnRzLkZJRUxEX1RZUEVfVElNRVNUQU1QKSB7XG4gICAgICAgIC8vIG1hdGNoaW5nIEFQIG9ubGluZSB0byBmb3JtYXQgYXMgZGF0ZSBmb3Igbm93XG4gICAgICAgIHZhbHVlID0gcGFyYW1zLkRhdGVVdGlscy5jcmVhdGVGb3JtYXR0ZWREYXRlKHZhbHVlKTtcbiAgICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkgJiYgIXZhbHVlLmxlbmd0aCkge1xuICAgICAgICB2YWx1ZSA9IG51bGw7XG4gICAgICB9XG4gICAgICB2YWx1ZSA9IE5BT3B0aW9ucyAmJiBOQU9wdGlvbnMuaGFzKHZhbHVlKSA/IG51bGwgOiB2YWx1ZTtcblxuICAgICAgY29uc3QgcmUgPSAvXlxccz8kLzsgLy8gY2hlY2sgZm9yIHdoaXRlc3BhY2VcbiAgICAgIGlmIChyZS50ZXN0KHZhbHVlKSkgdmFsdWUgPSB2YWx1ZS50cmltKCk7IC8vIGNoZWNrIGZvciB3aGl0ZXNwYWNlXG4gICAgICBpZiAodmFsdWUgPT09ICcnIHx8IHZhbHVlID09PSBudWxsKSB7XG4gICAgICAgIHZhbHVlID0gcGFyYW1zLnRyYW5zbGF0ZSgnTm8gRGF0YScpO1xuICAgICAgfVxuICAgICAgaWYgKHNob3dJZk5vdEF2YWlsYWJsZSA9PT0gdHJ1ZSB8fCAodmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZSAhPT0gbnVsbCkpIHtcbiAgICAgICAgY29uc3QgdXNlSW5uZXJIVE1MID0gRmllbGRQYXRoQ29uc3RhbnRzLlJJQ0hfVEVYVF9GSUVMRFMuaGFzKHBhdGgpO1xuICAgICAgICByZXR1cm4gKDxBUEZpZWxkXG4gICAgICAgICAga2V5PXtVSVV0aWxzLnN0cmluZ1RvVW5pcXVlSWQocGF0aCl9IHRpdGxlPXt0aXRsZX0gdmFsdWU9e3ZhbHVlfSB1c2VJbm5lckhUTUw9e3VzZUlubmVySFRNTH1cbiAgICAgICAgICBpbmxpbmU9e2lubGluZX1cbiAgICAgICAgICBzZXBhcmF0b3I9e2ZhbHNlfVxuICAgICAgICAgIGZpZWxkQ2xhc3M9e29wdGlvbnNfLmZpZWxkQ2xhc3MgfHwgdGhpcy5wcm9wcy5maWVsZENsYXNzfVxuICAgICAgICAgIGZpZWxkTmFtZUNsYXNzPXt0aGlzLnByb3BzLmZpZWxkTmFtZUNsYXNzfVxuICAgICAgICAgIGZpZWxkVmFsdWVDbGFzcz17b3B0aW9uc18uZmllbGRWYWx1ZUNsYXNzIHx8IHRoaXMucHJvcHMuZmllbGRWYWx1ZUNsYXNzfVxuICAgICAgICAgIHRyYW5zbGF0ZT17cGFyYW1zLnRyYW5zbGF0ZX0gTG9nZ2VyPXtwYXJhbXMuTG9nZ2VyfSAvPik7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGlmICh0aGlzLnByb3BzLnNlY3Rpb25QYXRoICYmICF0aGlzLmNvbnRleHQuYWN0aXZpdHlGaWVsZHNNYW5hZ2VyLmlzRmllbGRQYXRoRW5hYmxlZCh0aGlzLnByb3BzLnNlY3Rpb25QYXRoKSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGlmICh0aGlzLnByb3BzLmZtUGF0aCAmJiAhRmVhdHVyZU1hbmFnZXIuaXNGTVNldHRpbmdFbmFibGVkKHRoaXMucHJvcHMuZm1QYXRoKSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGNvbnN0IGNvbXBvc2VkU2VjdGlvbiA9ICg8Q29tcG9zZWRTZWN0aW9uXG4gICAgICB7Li4udGhpcy5wcm9wc30gey4uLnRoaXMuc3RhdGV9IHsuLi50aGlzLmNvbnRleHR9IGJ1aWxkU2ltcGxlRmllbGQ9e3RoaXMuYnVpbGRTaW1wbGVGaWVsZC5iaW5kKHRoaXMpfSAvPik7XG4gICAgaWYgKHBhcmFtcy51c2VFbmNhcHN1bGF0ZUhlYWRlciA9PT0gZmFsc2UpIHtcbiAgICAgIHJldHVybiBjb21wb3NlZFNlY3Rpb247XG4gICAgfVxuICAgIC8vIFRPRE8gaXRlcmF0aW9uIDIrIHNlY3Rpb24gdG9nZ2xlIChUREMgYmFzZWQgb24gZGVzZ2luICsgVkcpXG4gICAgcmV0dXJuICg8ZGl2IGtleT17cGFyYW1zLlNlY3Rpb25UaXRsZX0gY2xhc3NOYW1lPXt0aGlzLnByb3BzLmdyb3VwQ2xhc3N9IGlkPXtwYXJhbXMuc0lEfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXt0aGlzLnByb3BzLnRpdGxlQ2xhc3N9PlxuICAgICAgICA8c3Bhbj57cGFyYW1zLnRyYW5zbGF0ZShwYXJhbXMuU2VjdGlvblRpdGxlKX0gPC9zcGFuPjxzcGFuPnt0aGlzLnByb3BzLnRpdGxlRGV0YWlsc308L3NwYW4+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXt0aGlzLnByb3BzLmNvbXBvc2VkQ2xhc3N9PlxuICAgICAgICB7Y29tcG9zZWRTZWN0aW9ufVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+KTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgU2VjdGlvbjtcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IEFjdGl2aXR5Q29uc3RhbnRzIGZyb20gJy4uLy4uLy4uL21vZHVsZXMvdXRpbC9BY3Rpdml0eUNvbnN0YW50cyc7XG5pbXBvcnQgRmVhdHVyZU1hbmFnZXIgZnJvbSAnLi4vLi4vLi4vbW9kdWxlcy91dGlsL0ZlYXR1cmVNYW5hZ2VyJztcbmltcG9ydCBWYWx1ZUNvbnN0YW50cyBmcm9tICcuLi8uLi8uLi91dGlscy9WYWx1ZUNvbnN0YW50cyc7XG5pbXBvcnQgRmVhdHVyZU1hbmFnZXJDb25zdGFudHMgZnJvbSAnLi4vLi4vLi4vbW9kdWxlcy91dGlsL0ZlYXR1cmVNYW5hZ2VyQ29uc3RhbnRzJztcbmltcG9ydCBGaWVsZFBhdGhDb25zdGFudHMgZnJvbSAnLi4vLi4vLi4vdXRpbHMvRmllbGRQYXRoQ29uc3RhbnRzJztcblxuaW1wb3J0IEZpZWxkc01hbmFnZXIgZnJvbSAnLi4vLi4vLi4vbW9kdWxlcy9maWVsZC9GaWVsZHNNYW5hZ2VyJztcbmltcG9ydCBQb3NzaWJsZVZhbHVlc01hbmFnZXIgZnJvbSAnLi4vLi4vLi4vbW9kdWxlcy9maWVsZC9Qb3NzaWJsZVZhbHVlc01hbmFnZXInO1xuaW1wb3J0IEFQRmllbGQgZnJvbSAnLi4vY29tcG9uZW50cy9BUEZpZWxkLmpzeCc7XG5pbXBvcnQgU2VjdGlvbiBmcm9tICcuL1NlY3Rpb24uanN4JztcblxuXG5sZXQgbG9nZ2VyID0gbnVsbDtcblxuLyogZXNsaW50LWRpc2FibGUgY2xhc3MtbWV0aG9kcy11c2UtdGhpcyAqL1xuXG4vKipcbiAqIEZ1bmRpbmcgVG90YWxzIFN1bW1hcnkgc2VjdGlvblxuICogQGF1dGhvciBOYWRlamRhIE1hbmRyZXNjdVxuICovXG5jbGFzcyBGdW5kaW5nU3VtbWFyeSBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgYWN0aXZpdHlGaWVsZHNNYW5hZ2VyOiBQcm9wVHlwZXMuaW5zdGFuY2VPZihGaWVsZHNNYW5hZ2VyKS5pc1JlcXVpcmVkLFxuICAgIGFjdGl2aXR5RnVuZGluZ1RvdGFsczogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLCAvLyBQcm9wVHlwZXMuaW5zdGFuY2VPZihBY3Rpdml0eUZ1bmRpbmdUb3RhbHMpLmlzUmVxdWlyZWQsXG4gICAgZmllbGROYW1lQ2xhc3M6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgZmllbGRWYWx1ZUNsYXNzOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIExvZ2dlcjogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICB0cmFuc2xhdGU6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgRGF0ZVV0aWxzOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkXG4gIH07XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgY29uc3QgeyBMb2dnZXIgfSA9IHRoaXMucHJvcHM7XG4gICAgbG9nZ2VyID0gbmV3IExvZ2dlcignRnVuZGluZyBzdW1tYXJ5Jyk7XG4gICAgbG9nZ2VyLmRlYnVnKCdjb25zdHJ1Y3RvcicpO1xuICB9XG5cbiAgLyoqXG4gICAqIEJ1aWxkcyBcIkZ1bmRpbmcgSW5mb3JtYXRpb25cIiBzZWN0aW9uIGJ5IGZvbGxvd2luZyBBTVAgQWN0aXZpdHkgUHJldmlldyBydWxlc1xuICAgKiBAcmV0dXJuIHtTZWN0aW9ufVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX2J1aWxkRnVuZGluZ0luZm9ybWF0aW9uKCkge1xuICAgIGNvbnN0IG1lYXN1cmVzVG90YWxzID0ge307XG4gICAgY29uc3QgeyBhY3Rpdml0eUZpZWxkc01hbmFnZXIgfSA9IHRoaXMucHJvcHM7XG4gICAgbGV0IGFjRW5hYmxlZCA9IGZhbHNlO1xuICAgIGxldCBhZEVuYWJsZWQgPSBmYWxzZTtcbiAgICAvLyBDb21taXRtZW50cywgRGlzYnVyc2VtZW50cywgRXhwZW5kaXR1cmVzXG4gICAgRmllbGRQYXRoQ29uc3RhbnRzLlRSQU5TQUNUSU9OX1RZUEVTLmZvckVhY2godHJuVHlwZSA9PiB7XG4gICAgICBpZiAoYWN0aXZpdHlGaWVsZHNNYW5hZ2VyLmlzRmllbGRQYXRoQnlQYXJ0c0VuYWJsZWQoQWN0aXZpdHlDb25zdGFudHMuRlVORElOR1MsIHRyblR5cGUpKSB7XG4gICAgICAgIGNvbnN0IHRybkFkak9wdFBhdGggPSBgJHtBY3Rpdml0eUNvbnN0YW50cy5GVU5ESU5HU31+JHt0cm5UeXBlfX4ke0FjdGl2aXR5Q29uc3RhbnRzLkFESlVTVE1FTlRfVFlQRX1gO1xuICAgICAgICBjb25zdCBhdE9wdGlvbnMgPSBhY3Rpdml0eUZpZWxkc01hbmFnZXIuZ2V0UG9zc2libGVWYWx1ZXNPcHRpb25zKHRybkFkak9wdFBhdGgpO1xuICAgICAgICBhY0VuYWJsZWQgPSBhY0VuYWJsZWQgfHxcbiAgICAgICAgICAodHJuVHlwZSA9PT0gQWN0aXZpdHlDb25zdGFudHMuQ09NTUlUTUVOVFMgJiYgISFhdE9wdGlvbnMuZmluZChvID0+IG8udmFsdWUgPT09IFZhbHVlQ29uc3RhbnRzLkFDVFVBTCkpO1xuICAgICAgICBhZEVuYWJsZWQgPSBhZEVuYWJsZWQgfHxcbiAgICAgICAgICAodHJuVHlwZSA9PT0gQWN0aXZpdHlDb25zdGFudHMuRElTQlVSU0VNRU5UUyAmJiAhIWF0T3B0aW9ucy5maW5kKG8gPT4gby52YWx1ZSA9PT0gVmFsdWVDb25zdGFudHMuQUNUVUFMKSk7XG4gICAgICAgIC8vIEFjdHVhbCwgUGxhbm5lZFxuICAgICAgICBhdE9wdGlvbnMuZm9yRWFjaChhZGpUeXBlID0+IHtcbiAgICAgICAgICBjb25zdCB2YWx1ZSA9IHRoaXMucHJvcHMuYWN0aXZpdHlGdW5kaW5nVG90YWxzLmdldFRvdGFscyhhZGpUeXBlLmlkLCB0cm5UeXBlLCB7fSk7XG4gICAgICAgICAgbWVhc3VyZXNUb3RhbHNbYCR7YWRqVHlwZS52YWx1ZX0gJHt0cm5UeXBlfWBdID0gdmFsdWU7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICAgIC8vIE90aGVyIG1lYXN1cmVzOiBcIlVuYWxsb2NhdGVkIERpc2J1cnNlbWVudHNcIi5cbiAgICBjb25zdCBhZGpUeXBlQWN0dWFsVHJuID0gdGhpcy5wcm9wcy5hY3Rpdml0eUZpZWxkc01hbmFnZXIuZ2V0VmFsdWUoRmllbGRQYXRoQ29uc3RhbnRzLkRJU0JVUlNFTUVOVFNfUEFUSCxcbiAgICAgIFZhbHVlQ29uc3RhbnRzLkFDVFVBTCxcbiAgICAgIFBvc3NpYmxlVmFsdWVzTWFuYWdlci5nZXRPcHRpb25UcmFuc2xhdGlvbik7XG4gICAgY29uc3QgZXhwZW5kaXR1cmVzQXJlRW5hYmxlZCA9IGFjdGl2aXR5RmllbGRzTWFuYWdlci5pc0ZpZWxkUGF0aEJ5UGFydHNFbmFibGVkKEFjdGl2aXR5Q29uc3RhbnRzLkZVTkRJTkdTLFxuICAgICAgQWN0aXZpdHlDb25zdGFudHMuRVhQRU5ESVRVUkVTKTtcbiAgICBpZiAoYWRqVHlwZUFjdHVhbFRybiAmJiBleHBlbmRpdHVyZXNBcmVFbmFibGVkKSB7XG4gICAgICBjb25zdCB1YiA9IFZhbHVlQ29uc3RhbnRzLlVOQUxMT0NBVEVEX0RJU0JVUlNFTUVOVFM7XG4gICAgICBtZWFzdXJlc1RvdGFsc1t1Yl0gPSB0aGlzLnByb3BzLmFjdGl2aXR5RnVuZGluZ1RvdGFscy5nZXRUb3RhbHModWIsIHt9KTtcbiAgICB9XG4gICAgLy8gT3RoZXIgbWVhc3VyZXM6IFwiVG90YWwgTVRFRiBQcm9qZWN0aW9uc1wiLlxuICAgIGlmIChGZWF0dXJlTWFuYWdlci5pc0ZNU2V0dGluZ0VuYWJsZWQoRmVhdHVyZU1hbmFnZXJDb25zdGFudHMuTVRFRl9QUk9KRUNUSU9OUykpIHtcbiAgICAgIG1lYXN1cmVzVG90YWxzW1ZhbHVlQ29uc3RhbnRzLk1URUZfUFJPSkVDVElPTlNdID0gdGhpcy5wcm9wcy5hY3Rpdml0eUZ1bmRpbmdUb3RhbHMuZ2V0TVRFRlRvdGFsKCk7XG4gICAgfVxuICAgIC8vIE90aGVyIG1lYXN1cmVzOiBcIkRlbGl2ZXJ5IHJhdGVcIi5cbiAgICBpZiAoRmVhdHVyZU1hbmFnZXIuaXNGTVNldHRpbmdFbmFibGVkKEZlYXR1cmVNYW5hZ2VyQ29uc3RhbnRzLkFDVElWSVRZX0RFTElWRVJZX1JBVEUpKSB7XG4gICAgICBjb25zdCBhY3R1YWxDb21taXRtZW50cyA9IG1lYXN1cmVzVG90YWxzW2Ake1ZhbHVlQ29uc3RhbnRzLkFDVFVBTH0gJHtBY3Rpdml0eUNvbnN0YW50cy5DT01NSVRNRU5UU31gXTtcbiAgICAgIGNvbnN0IGFjdHVhbERpc2J1cnNlbWVudHMgPSBtZWFzdXJlc1RvdGFsc1tgJHtWYWx1ZUNvbnN0YW50cy5BQ1RVQUx9ICR7QWN0aXZpdHlDb25zdGFudHMuRElTQlVSU0VNRU5UU31gXTtcbiAgICAgIGxldCB2YWx1ZSA9IDA7XG4gICAgICBpZiAoYWN0dWFsQ29tbWl0bWVudHMgJiYgYWN0dWFsRGlzYnVyc2VtZW50cyAmJiBhY0VuYWJsZWQgJiYgYWRFbmFibGVkKSB7XG4gICAgICAgIHZhbHVlID0gKGFjdHVhbERpc2J1cnNlbWVudHMgLyBhY3R1YWxDb21taXRtZW50cykgKiAxMDA7XG4gICAgICB9XG4gICAgICBtZWFzdXJlc1RvdGFsc1tWYWx1ZUNvbnN0YW50cy5ERUxJVkVSWV9SQVRFXSA9IHZhbHVlO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLl9idWlsZFRvdGFsRmllbGRzKG1lYXN1cmVzVG90YWxzKTtcbiAgfVxuXG4gIF9idWlsZFRvdGFsRmllbGRzKG1lYXN1cmVzVG90YWxzKSB7XG4gICAgY29uc3QgeyB0cmFuc2xhdGUgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgbWVhc3VyZXNPcmRlciA9IFtcbiAgICAgIHsgdHJuOiBWYWx1ZUNvbnN0YW50cy5BQ1RVQUxfQ09NTUlUTUVOVFMsIHRvdGFsOiB0cnVlIH0sXG4gICAgICB7IHRybjogVmFsdWVDb25zdGFudHMuUExBTk5FRF9DT01NSVRNRU5UUywgdG90YWw6IHRydWUgfSxcbiAgICAgIHsgdHJuOiBWYWx1ZUNvbnN0YW50cy5BQ1RVQUxfRElTQlVSU0VNRU5UUywgdG90YWw6IHRydWUgfSxcbiAgICAgIHsgdHJuOiBWYWx1ZUNvbnN0YW50cy5QTEFOTkVEX0RJU0JVUlNFTUVOVFMsIHRvdGFsOiB0cnVlIH0sXG4gICAgICB7IHRybjogVmFsdWVDb25zdGFudHMuQUNUVUFMX0VYUEVORElUVVJFUywgdG90YWw6IHRydWUgfSxcbiAgICAgIHsgdHJuOiBWYWx1ZUNvbnN0YW50cy5VTkFMTE9DQVRFRF9ESVNCVVJTRU1FTlRTLCB0b3RhbDogZmFsc2UgfSxcbiAgICAgIHsgdHJuOiBWYWx1ZUNvbnN0YW50cy5QTEFOTkVEX0VYUEVORElUVVJFUywgdG90YWw6IHRydWUgfSxcbiAgICAgIHsgdHJuOiBWYWx1ZUNvbnN0YW50cy5NVEVGX1BST0pFQ1RJT05TLCB0b3RhbDogdHJ1ZSB9LFxuICAgICAgeyB0cm46IFZhbHVlQ29uc3RhbnRzLkRFTElWRVJZX1JBVEUsIHRvdGFsOiBmYWxzZSwgaXNQZXJjZW50YWdlOiB0cnVlIH1dO1xuICAgIGNvbnN0IGZ1bmRpbmdJbmZvU3VtbWFyeSA9IFtdO1xuICAgIG1lYXN1cmVzT3JkZXIuZm9yRWFjaChtZWFzdXJlID0+IHtcbiAgICAgIGxldCB2YWx1ZSA9IG1lYXN1cmVzVG90YWxzW21lYXN1cmUudHJuXTtcbiAgICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHZhbHVlID0gdGhpcy5wcm9wcy5hY3Rpdml0eUZ1bmRpbmdUb3RhbHMuZm9ybWF0QW1vdW50KHZhbHVlLCBtZWFzdXJlLmlzUGVyY2VudGFnZSk7XG4gICAgICAgIGxldCB0aXRsZSA9IG1lYXN1cmUudHJuO1xuICAgICAgICBpZiAobWVhc3VyZS50b3RhbCkge1xuICAgICAgICAgIHRpdGxlID0gYFRvdGFsICR7dGl0bGV9YDtcbiAgICAgICAgfVxuICAgICAgICB0aXRsZSA9IHRyYW5zbGF0ZSh0aXRsZSk7XG4gICAgICAgIGNvbnN0IGtleSA9IGBTdW1tYXJ5LVRvdGFsLSR7bWVhc3VyZS50cm59YDtcbiAgICAgICAgZnVuZGluZ0luZm9TdW1tYXJ5LnB1c2goPEFQRmllbGRcbiAgICAgICAgICBrZXk9e2tleX0gdGl0bGU9e3RpdGxlfSB2YWx1ZT17dmFsdWV9IHNlcGFyYXRvcj17ZmFsc2V9XG4gICAgICAgICAgZmllbGROYW1lQ2xhc3M9e3RoaXMucHJvcHMuZmllbGROYW1lQ2xhc3N9IGZpZWxkVmFsdWVDbGFzcz17dGhpcy5wcm9wcy5maWVsZFZhbHVlQ2xhc3N9XG4gICAgICAgICAgdHJhbnNsYXRlPXt0cmFuc2xhdGV9IExvZ2dlcj17dGhpcy5wcm9wcy5Mb2dnZXJ9IC8+KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gZnVuZGluZ0luZm9TdW1tYXJ5O1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiA8ZGl2Pnt0aGlzLl9idWlsZEZ1bmRpbmdJbmZvcm1hdGlvbigpfTwvZGl2PjtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTZWN0aW9uKEZ1bmRpbmdTdW1tYXJ5LCB7XG4gIFNlY3Rpb25UaXRsZTogJ2Z1bmRpbmdJbmZvcm1hdGlvbidcbn0pO1xuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgQWN0aXZpdHlDb25zdGFudHMgZnJvbSAnLi4vLi4vLi4vbW9kdWxlcy91dGlsL0FjdGl2aXR5Q29uc3RhbnRzJztcbmltcG9ydCBWYWx1ZUNvbnN0YW50cyBmcm9tICcuLi8uLi8uLi91dGlscy9WYWx1ZUNvbnN0YW50cyc7XG5pbXBvcnQgRmllbGRzTWFuYWdlciBmcm9tICcuLi8uLi8uLi9tb2R1bGVzL2ZpZWxkL0ZpZWxkc01hbmFnZXInO1xuaW1wb3J0IFNlY3Rpb24gZnJvbSAnLi9TZWN0aW9uLmpzeCc7XG5cbmxldCBsb2dnZXIgPSBudWxsO1xuXG4vKipcbiAqIElkZW50aWZpY2F0aW9uIHNlY3Rpb25cbiAqIEBhdXRob3IgTmFkZWpkYSBNYW5kcmVzY3VcbiAqL1xuY2xhc3MgQVBJZGVudGlmaWNhdGlvbiBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgYnVpbGRTaW1wbGVGaWVsZDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICBhY3Rpdml0eUZpZWxkc01hbmFnZXI6IFByb3BUeXBlcy5pbnN0YW5jZU9mKEZpZWxkc01hbmFnZXIpLmlzUmVxdWlyZWQsXG4gICAgYWN0aXZpdHk6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgICBMb2dnZXI6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWRcbiAgfTtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICBjb25zdCB7IExvZ2dlciB9ID0gdGhpcy5wcm9wcztcbiAgICBsb2dnZXIgPSBuZXcgTG9nZ2VyKCdBUCBJZGVudGlmaWNhdGlvbicpO1xuICAgIGxvZ2dlci5kZWJ1ZygnY29uc3RydWN0b3InKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGJ1aWxkU2ltcGxlRmllbGQgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgZmllbGRQYXRocyA9IFtBY3Rpdml0eUNvbnN0YW50cy5TVEFUVVNfUkVBU09OLCBBY3Rpdml0eUNvbnN0YW50cy5UWVBFX09GX0NPT1BFUkFUSU9OLFxuICAgICAgQWN0aXZpdHlDb25zdGFudHMuVFlQRV9PRl9JTVBMRU1FTlRBVElPTiwgQWN0aXZpdHlDb25zdGFudHMuTU9EQUxJVElFUywgQWN0aXZpdHlDb25zdGFudHMuT0JKRUNUSVZFLFxuICAgICAgQWN0aXZpdHlDb25zdGFudHMuREVTQ1JJUFRJT04sIEFjdGl2aXR5Q29uc3RhbnRzLlBST0pFQ1RfQ09NTUVOVFMsIEFjdGl2aXR5Q29uc3RhbnRzLlJFU1VMVFMsXG4gICAgICBBY3Rpdml0eUNvbnN0YW50cy5MRVNTT05TX0xFQVJORUQsIEFjdGl2aXR5Q29uc3RhbnRzLlBST0pFQ1RfSU1QQUNULCBBY3Rpdml0eUNvbnN0YW50cy5BQ1RJVklUWV9TVU1NQVJZLFxuICAgICAgQWN0aXZpdHlDb25zdGFudHMuQ09ORElUSU9OQUxJVElFUywgQWN0aXZpdHlDb25zdGFudHMuUFJPSkVDVF9NQU5BR0VNRU5ULFxuICAgICAgQWN0aXZpdHlDb25zdGFudHMuQlVER0VUX0NPREVfUFJPSkVDVF9JRCwgQWN0aXZpdHlDb25zdGFudHMuQV9DX0NIQVBURVIsIEFjdGl2aXR5Q29uc3RhbnRzLkNSSVNfTlVNQkVSLFxuICAgICAgQWN0aXZpdHlDb25zdGFudHMuQUNUSVZJVFlfQlVER0VULCBBY3Rpdml0eUNvbnN0YW50cy5HT1ZFUk5NRU5UX0FHUkVFTUVOVF9OVU1CRVIsXG4gICAgICBBY3Rpdml0eUNvbnN0YW50cy5HT1ZFUk5NRU5UX0FQUFJPVkFMX1BST0NFRFVSRVMsIEFjdGl2aXR5Q29uc3RhbnRzLkpPSU5UX0NSSVRFUklBLFxuICAgICAgQWN0aXZpdHlDb25zdGFudHMuSFVNQU5JVEFSSUFOX0FJRF07XG4gICAgLy8gU2hvdyBidWRnZXQgZXh0cmFzIGZpZWxkcyBsaWtlIG1pbmlzdHJ5X2NvZGUsIGV0YyBvbmx5IHdoZW4gYWN0aXZpdHlfYnVkZ2V0IGlzIGVuYWJsZWQgYW5kIGhhcyB2YWx1ZSAnT24gQnVkZ2V0Jy5cbiAgICBpZiAodGhpcy5wcm9wcy5hY3Rpdml0eUZpZWxkc01hbmFnZXIuaXNGaWVsZFBhdGhFbmFibGVkKEFjdGl2aXR5Q29uc3RhbnRzLkFDVElWSVRZX0JVREdFVClcbiAgICAgICYmIHRoaXMucHJvcHMuYWN0aXZpdHlbQWN0aXZpdHlDb25zdGFudHMuQUNUSVZJVFlfQlVER0VUXVxuICAgICAgJiYgdGhpcy5wcm9wcy5hY3Rpdml0eVtBY3Rpdml0eUNvbnN0YW50cy5BQ1RJVklUWV9CVURHRVRdLnZhbHVlID09PSBWYWx1ZUNvbnN0YW50cy5PTl9CVURHRVQpIHtcbiAgICAgIGZpZWxkUGF0aHMucHVzaChBY3Rpdml0eUNvbnN0YW50cy5JTkRJUkVDVF9PTl9CVURHRVQpO1xuICAgICAgZmllbGRQYXRocy5wdXNoKEFjdGl2aXR5Q29uc3RhbnRzLkZZKTtcbiAgICAgIGZpZWxkUGF0aHMucHVzaChBY3Rpdml0eUNvbnN0YW50cy5NSU5JU1RSWV9DT0RFKTtcbiAgICAgIGZpZWxkUGF0aHMucHVzaChBY3Rpdml0eUNvbnN0YW50cy5QUk9KRUNUX0NPREUpO1xuICAgIH1cbiAgICBmaWVsZFBhdGhzLnB1c2goLi4uW0FjdGl2aXR5Q29uc3RhbnRzLkZJTkFOQ0lBTF9JTlNUUlVNRU5ULCBBY3Rpdml0eUNvbnN0YW50cy5JQVRJX0lERU5USUZJRVJdKTtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAge2ZpZWxkUGF0aHMubWFwKGZpZWxkUGF0aCA9PiBidWlsZFNpbXBsZUZpZWxkKGZpZWxkUGF0aCwgdHJ1ZSkpfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTZWN0aW9uKEFQSWRlbnRpZmljYXRpb24sIHsgU2VjdGlvblRpdGxlOiAnSWRlbnRpZmljYXRpb24nLFxuICB1c2VFbmNhcHN1bGF0ZUhlYWRlcjogdHJ1ZSxcbiAgc0lEOiAnQVBJZGVudGlmaWNhdGlvbidcbn0pO1xuIiwiLyoqIFdTIHZhbGlkYXRpb24gKiovXG5jb25zdCBXU19WQUxJREFUSU9OX09GRiA9ICd2YWxpZGF0aW9uT2ZmJztcbmNvbnN0IFdTX1ZBTElEQVRJT05fQUxMX0VESVQgPSAnYWxsRWRpdHMnO1xuY29uc3QgV1NfVkFMSURBVElPTl9ORVdfT05MWSA9ICduZXdPbmx5JztcbmNvbnN0IFdTX1ZBTElEQVRJT05fRklFTEQgPSAndmFsaWRhdGlvbic7XG5jb25zdCBDUk9TU19URUFNX1ZBTElEQVRJT04gPSAnaXMtY3Jvc3MtdGVhbS12YWxpZGF0aW9uJztcbmNvbnN0IFdTX0FDQ0VTU19UWVBFX01BTkFHRU1FTlQgPSAnTWFuYWdlbWVudCc7XG5jb25zdCBXU19BQ0NFU1NfVFlQRV9URUFNID0gJ1RlYW0nO1xuXG4vKiogUm9sZXMgKGZyb20gV29ya3NwYWNlTWVtYmVyUm9sZUNvbnN0YW50cy5qYXZhKSAqKi9cbmNvbnN0IFJPTEVfVEVBTV9NRU1CRVJfV1NfTUFOQUdFUiA9IDE7XG5jb25zdCBST0xFX1RFQU1fTUVNQkVSX1dTX01FTUJFUiA9IDI7XG5jb25zdCBST0xFX1RFQU1fTUVNQkVSX1dTX0FQUFJPVkVSID0gMztcblxuLyoqIE90aGVyIGZpZWxkcyAqKi9cbmNvbnN0IFdPUktTUEFDRV9JRCA9ICd3b3Jrc3BhY2UtaWQnO1xuY29uc3QgUk9MRV9JRCA9ICdyb2xlLWlkJztcbmNvbnN0IFdPUktTUEFDRV9MRUFEX0lEID0gJ3dvcmtzcGFjZS1sZWFkLWlkJztcbmNvbnN0IEFDQ0VTU19UWVBFID0gJ2FjY2Vzcy10eXBlJztcbmNvbnN0IElTX0NPTVBVVEVEID0gJ2lzLWNvbXB1dGVkJztcbmNvbnN0IElTX1BSSVZBVEUgPSAnaXMtcHJpdmF0ZSc7XG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmZyZWV6ZSh7XG4gIFdTX1ZBTElEQVRJT05fT0ZGLFxuICBXU19WQUxJREFUSU9OX0FMTF9FRElULFxuICBXU19WQUxJREFUSU9OX05FV19PTkxZLFxuICBXU19WQUxJREFUSU9OX0ZJRUxELFxuICBDUk9TU19URUFNX1ZBTElEQVRJT04sXG4gIFdTX0FDQ0VTU19UWVBFX01BTkFHRU1FTlQsXG4gIFdTX0FDQ0VTU19UWVBFX1RFQU0sXG4gIFJPTEVfVEVBTV9NRU1CRVJfV1NfTUFOQUdFUixcbiAgUk9MRV9URUFNX01FTUJFUl9XU19NRU1CRVIsXG4gIFJPTEVfVEVBTV9NRU1CRVJfV1NfQVBQUk9WRVIsXG4gIFdPUktTUEFDRV9JRCxcbiAgUk9MRV9JRCxcbiAgV09SS1NQQUNFX0xFQURfSUQsXG4gIEFDQ0VTU19UWVBFLFxuICBJU19DT01QVVRFRCxcbiAgSVNfUFJJVkFURSxcbn0pO1xuIiwiLyogVXNlciBjb25zdGFudHMgKi9cbmNvbnN0IEZJUlNUX05BTUUgPSAnZmlyc3QtbmFtZSc7XG5jb25zdCBMQVNUX05BTUUgPSAnbGFzdC1uYW1lJztcbmNvbnN0IEVNQUlMID0gJ2VtYWlsJztcblxuLyogVGVhbSBtZW1iZXIgY29uc3RhbnRzICovXG5jb25zdCBURUFNX01FTUJFUl9VU0VSX0lEID0gJ3VzZXItaWQnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5mcmVlemUoe1xuICBGSVJTVF9OQU1FLFxuICBMQVNUX05BTUUsXG4gIEVNQUlMLFxuICBURUFNX01FTUJFUl9VU0VSX0lELFxufSk7XG5cbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IEFjdGl2aXR5Q29uc3RhbnRzIGZyb20gJy4uLy4uLy4uL21vZHVsZXMvdXRpbC9BY3Rpdml0eUNvbnN0YW50cyc7XG5pbXBvcnQgRmllbGRzTWFuYWdlciBmcm9tICcuLi8uLi8uLi9tb2R1bGVzL2ZpZWxkL0ZpZWxkc01hbmFnZXInO1xuaW1wb3J0IFBvc3NpYmxlVmFsdWVzTWFuYWdlciBmcm9tICcuLi8uLi8uLi9tb2R1bGVzL2ZpZWxkL1Bvc3NpYmxlVmFsdWVzTWFuYWdlcic7XG5pbXBvcnQgQVBGaWVsZCBmcm9tICcuLi9jb21wb25lbnRzL0FQRmllbGQuanN4JztcbmltcG9ydCBTZWN0aW9uIGZyb20gJy4vU2VjdGlvbi5qc3gnO1xuaW1wb3J0IFdvcmtzcGFjZUNvbnN0YW50cyBmcm9tICcuLi8uLi8uLi91dGlscy9jb25zdGFudHMvV29ya3NwYWNlQ29uc3RhbnRzJztcbmltcG9ydCBVc2VyQ29uc3RhbnRzIGZyb20gJy4uLy4uLy4uL3V0aWxzL2NvbnN0YW50cy9Vc2VyQ29uc3RhbnRzJztcblxubGV0IGxvZ2dlciA9IG51bGw7XG5cbi8qKlxuICogQWRkaXRpb25hbCBJbmZvIHN1bW1hcnkgc2VjdGlvblxuICogQGF1dGhvciBOYWRlamRhIE1hbmRyZWNzdVxuICovXG5jbGFzcyBBZGRpdGlvbmFsSW5mbyBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgYWN0aXZpdHk6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgICBhY3Rpdml0eVdvcmtzcGFjZTogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICAgIGFjdGl2aXR5V1NNYW5hZ2VyOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gICAgYnVpbGRTaW1wbGVGaWVsZDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICBmaWVsZE5hbWVDbGFzczogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBmaWVsZFZhbHVlQ2xhc3M6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgYWN0aXZpdHlGaWVsZHNNYW5hZ2VyOiBQcm9wVHlwZXMuaW5zdGFuY2VPZihGaWVsZHNNYW5hZ2VyKS5pc1JlcXVpcmVkLFxuICAgIExvZ2dlcjogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICB0cmFuc2xhdGU6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWRcbiAgfTtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICBjb25zdCB7IExvZ2dlciB9ID0gdGhpcy5wcm9wcztcbiAgICBsb2dnZXIgPSBuZXcgTG9nZ2VyKCdBUCBBZGRpdGlvbmFsIGluZm8nKTtcbiAgICBsb2dnZXIuZGVidWcoJ2NvbnN0cnVjdG9yJyk7XG4gIH1cblxuICBfZ2V0V29ya3NwYWNlTGVhZERhdGEoKSB7XG4gICAgY29uc3QgeyBhY3Rpdml0eVdTTWFuYWdlciB9ID0gdGhpcy5wcm9wcztcbiAgICBpZiAoIWFjdGl2aXR5V1NNYW5hZ2VyKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGAke2FjdGl2aXR5V1NNYW5hZ2VyW1VzZXJDb25zdGFudHMuRklSU1RfTkFNRV19ICR7YWN0aXZpdHlXU01hbmFnZXJbVXNlckNvbnN0YW50cy5MQVNUX05BTUVdfSAke2FjdGl2aXR5V1NNYW5hZ2VyW1VzZXJDb25zdGFudHMuRU1BSUxdfWA7XG4gIH1cblxuICBfYnVpbGRBZGRpdGlvbmFsSW5mbygpIHtcbiAgICBjb25zdCB7XG4gICAgICB0cmFuc2xhdGUsIGFjdGl2aXR5V29ya3NwYWNlLCBhY3Rpdml0eUZpZWxkc01hbmFnZXIsIGJ1aWxkU2ltcGxlRmllbGQsXG4gICAgICBmaWVsZE5hbWVDbGFzcywgZmllbGRWYWx1ZUNsYXNzLCBhY3Rpdml0eSwgTG9nZ2VyXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgYWRkaXRpb25hbEluZm8gPSBbXTtcbiAgICBjb25zdCB0ZWFtTmFtZSA9IGFjdGl2aXR5RmllbGRzTWFuYWdlci5nZXRWYWx1ZShhY3Rpdml0eSwgQWN0aXZpdHlDb25zdGFudHMuVEVBTSxcbiAgICAgIFBvc3NpYmxlVmFsdWVzTWFuYWdlci5nZXRPcHRpb25UcmFuc2xhdGlvbik7XG4gICAgLy8gbm8gbmVlZCB0byBleHBvcnQgcmVwZWF0aW5nIHRyYW5zbGF0aW9uIGZvciB0aGUgYWNjZXNzIHR5cGUgdGhyb3VnaCB3b3Jrc3BhY2VzIEVQXG4gICAgY29uc3QgYWNjZXNzVHlwZSA9IHRyYW5zbGF0ZShhY3Rpdml0eVdvcmtzcGFjZVtXb3Jrc3BhY2VDb25zdGFudHMuQUNDRVNTX1RZUEVdKTtcbiAgICBjb25zdCBpc0NvbXB1dGVkVGVhbSA9IGFjdGl2aXR5V29ya3NwYWNlW1dvcmtzcGFjZUNvbnN0YW50cy5JU19DT01QVVRFRF0gPT09IHRydWUgPyB0cmFuc2xhdGUoJ1llcycpIDogdHJhbnNsYXRlKCdObycpO1xuXG4gICAgLy8gVE9ETzogdGhlIHJpZ2h0IHZhbHVlIGFzIGRlZmluZWQgaW4gQU1QLTI1NDAzIHdpbGwgYmUgc2hvd24gYWZ0ZXIgQU1QLTI2Mjk1LlxuICAgIGFkZGl0aW9uYWxJbmZvLnB1c2goYnVpbGRTaW1wbGVGaWVsZChBY3Rpdml0eUNvbnN0YW50cy5DUkVBVEVEX0JZLCB0cnVlKSk7XG4gICAgYWRkaXRpb25hbEluZm8ucHVzaChidWlsZFNpbXBsZUZpZWxkKEFjdGl2aXR5Q29uc3RhbnRzLkNSRUFURURfT04sIHRydWUpKTtcbiAgICBhZGRpdGlvbmFsSW5mby5wdXNoKGJ1aWxkU2ltcGxlRmllbGQoQWN0aXZpdHlDb25zdGFudHMuTU9ESUZJRURfQlksIHRydWUpKTtcbiAgICBhZGRpdGlvbmFsSW5mby5wdXNoKGJ1aWxkU2ltcGxlRmllbGQoQWN0aXZpdHlDb25zdGFudHMuTU9ESUZJRURfT04sIHRydWUpKTtcbiAgICBhZGRpdGlvbmFsSW5mby5wdXNoKEFQRmllbGQuaW5zdGFuY2UoJ2NyZWF0ZWRJbldvcmtzcGFjZScsIGAke3RlYW1OYW1lfSAtICR7YWNjZXNzVHlwZX1gLFxuICAgICAgZmFsc2UsIGZhbHNlLCBmaWVsZE5hbWVDbGFzcywgZmllbGRWYWx1ZUNsYXNzLCB0cmFuc2xhdGUsIExvZ2dlcikpO1xuXG4gICAgYWRkaXRpb25hbEluZm8ucHVzaChBUEZpZWxkLmluc3RhbmNlKCd3b3Jrc3BhY2VNYW5hZ2VyJywgdGhpcy5fZ2V0V29ya3NwYWNlTGVhZERhdGEoKSxcbiAgICAgIGZhbHNlLCBmYWxzZSwgZmllbGROYW1lQ2xhc3MsIGZpZWxkVmFsdWVDbGFzcywgdHJhbnNsYXRlLCBMb2dnZXIpKTtcblxuICAgIGFkZGl0aW9uYWxJbmZvLnB1c2goQVBGaWVsZC5pbnN0YW5jZSgnY29tcHV0YXRpb24nLCBpc0NvbXB1dGVkVGVhbSxcbiAgICAgIGZhbHNlLCBmYWxzZSwgZmllbGROYW1lQ2xhc3MsIGZpZWxkVmFsdWVDbGFzcywgdHJhbnNsYXRlLCBMb2dnZXIpKTtcblxuICAgIHJldHVybiBhZGRpdGlvbmFsSW5mbztcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gPGRpdj57dGhpcy5fYnVpbGRBZGRpdGlvbmFsSW5mbygpfTwvZGl2PjtcbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IFNlY3Rpb24oQWRkaXRpb25hbEluZm8sIHtcbiAgU2VjdGlvblRpdGxlOiAnYWRkaXRpb25hbEluZm8nXG59KTtcbiIsIi8qIGVzbGludC1kaXNhYmxlIGNsYXNzLW1ldGhvZHMtdXNlLXRoaXMgKi9cbi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9wcmVmZXItZGVmYXVsdC1leHBvcnQgKi9cbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQsIFByb3BUeXBlcyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBUYWJsaWZ5IGZyb20gJy4uL2NvbXBvbmVudHMvVGFibGlmeS5qc3gnO1xuaW1wb3J0IFNlY3Rpb24gZnJvbSAnLi9TZWN0aW9uLmpzeCc7XG5pbXBvcnQgRmllbGRzTWFuYWdlciBmcm9tICcuLi8uLi8uLi9tb2R1bGVzL2ZpZWxkL0ZpZWxkc01hbmFnZXInO1xuaW1wb3J0IEFjdGl2aXR5Q29uc3RhbnRzIGZyb20gJy4uLy4uLy4uL21vZHVsZXMvdXRpbC9BY3Rpdml0eUNvbnN0YW50cyc7XG5pbXBvcnQgUG9zc2libGVWYWx1ZXNNYW5hZ2VyIGZyb20gJy4uLy4uLy4uL21vZHVsZXMvZmllbGQvUG9zc2libGVWYWx1ZXNNYW5hZ2VyJztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vQWN0aXZpdHlQcmV2aWV3LmNzcyc7XG5pbXBvcnQgRmllbGRQYXRoQ29uc3RhbnRzIGZyb20gJy4uLy4uLy4uL3V0aWxzL0ZpZWxkUGF0aENvbnN0YW50cyc7XG5cbmxldCBsb2dnZXIgPSBudWxsO1xuXG4vKipcbiAqIE9yZ2FuaXphdGlvbnMgYW5kIHByb2plY3QgaWRzIHNlY3Rpb25cbiAqIEBhdXRob3IgTmFkZWpkYSBNYW5kcmVzY3VcbiAqL1xuY29uc3QgQVBJbnRlcm5hbElkc1NlY3Rpb24gPSAoaXNTZXBhcmF0ZVNlY3Rpb24pID0+IGNsYXNzIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBhY3Rpdml0eTogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICAgIGFjdGl2aXR5RmllbGRzTWFuYWdlcjogUHJvcFR5cGVzLmluc3RhbmNlT2YoRmllbGRzTWFuYWdlcikuaXNSZXF1aXJlZCxcbiAgICBzaG93SWZFbXB0eTogUHJvcFR5cGVzLmJvb2wsIC8qIG9ubHkgbWFrZXMgc2Vuc2UgaWYgaXNTZXBhcmF0ZVNlY3Rpb24gaXMgdHJ1ZSwgd2lsbCByZW5kZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiB0aGVyZSBhcmUgbm8gb3JnIGlkcyovXG4gICAgTG9nZ2VyOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIHRyYW5zbGF0ZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZFxuICB9O1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIGNvbnN0IHsgTG9nZ2VyIH0gPSB0aGlzLnByb3BzO1xuICAgIGxvZ2dlciA9IG5ldyBMb2dnZXIoJ0FQIEludGVybmFsIGlkcycpO1xuICAgIGxvZ2dlci5sb2coJ2NvbnN0cnVjdG9yJyk7XG4gIH1cblxuICBfZ2V0QWN0SW50ZXJuYWxJZENvbnRlbnQoYWN0SW50SWQsIHNob3dJbnRlcm5hbElkKSB7XG4gICAgbGV0IGludElkO1xuICAgIGlmIChzaG93SW50ZXJuYWxJZCkge1xuICAgICAgaW50SWQgPSA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy50YWJsZVZhbHVlfT57YWN0SW50SWQuaW50ZXJuYWxfaWR9PC9zcGFuPjtcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYga2V5PXthY3RJbnRJZC5vcmdhbml6YXRpb24udmFsdWV9PlxuICAgICAgICA8c3Bhbj5beyBhY3RJbnRJZC5vcmdhbml6YXRpb24udmFsdWUgfV08L3NwYW4+XG4gICAgICAgIHsgaW50SWQgfVxuICAgICAgPC9kaXY+KTtcbiAgfVxuXG4gIGJ1aWxkQ29udGVudCgpIHtcbiAgICBsZXQgb3JnSWRzO1xuICAgIGlmICh0aGlzLnByb3BzLmFjdGl2aXR5RmllbGRzTWFuYWdlci5pc0ZpZWxkUGF0aEVuYWJsZWQoQWN0aXZpdHlDb25zdGFudHMuQUNUSVZJVFlfSU5URVJOQUxfSURTKSkge1xuICAgICAgY29uc3Qgc2hvd0ludGVybmFsSWQgPSB0aGlzLnByb3BzLmFjdGl2aXR5RmllbGRzTWFuYWdlci5pc0ZpZWxkUGF0aEVuYWJsZWQoXG4gICAgICAgIEZpZWxkUGF0aENvbnN0YW50cy5BQ1RJVklUWV9JTlRFUk5BTF9JRFNfSU5URVJOQUxfSURfUEFUSCk7XG4gICAgICBvcmdJZHMgPSBbXTtcbiAgICAgIGNvbnN0IGFjdEludElkcyA9IHRoaXMucHJvcHMuYWN0aXZpdHlGaWVsZHNNYW5hZ2VyLmdldFZhbHVlKHRoaXMucHJvcHMuYWN0aXZpdHksXG4gICAgICAgIEFjdGl2aXR5Q29uc3RhbnRzLkFDVElWSVRZX0lOVEVSTkFMX0lEUywgUG9zc2libGVWYWx1ZXNNYW5hZ2VyLmdldE9wdGlvblRyYW5zbGF0aW9uKTtcbiAgICAgIGlmIChhY3RJbnRJZHMgJiYgYWN0SW50SWRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgYWN0SW50SWRzLmZvckVhY2goYWN0SW50SWQgPT4gb3JnSWRzLnB1c2godGhpcy5fZ2V0QWN0SW50ZXJuYWxJZENvbnRlbnQoYWN0SW50SWQsIHNob3dJbnRlcm5hbElkKSkpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gb3JnSWRzICYmIG9yZ0lkcy5sZW5ndGggPiAwID8gb3JnSWRzIDogbnVsbDtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHRyYW5zbGF0ZSB9ID0gdGhpcy5wcm9wcztcbiAgICBsZXQgY29udGVudCA9IHRoaXMuYnVpbGRDb250ZW50KCk7XG4gICAgaWYgKGlzU2VwYXJhdGVTZWN0aW9uID09PSB0cnVlKSB7XG4gICAgICAvLyBtYWtlIHN1cmUgY29udGVudCBleGlzdHMgYmVmb3JlIGZvcm1hdHRpbmdcbiAgICAgIGNvbnN0IG5vRGF0YSA9IDx0cj48dGQ+e3RyYW5zbGF0ZSgnTm8gRGF0YScpfTwvdGQ+PC90cj47XG4gICAgICBjb25zdCB0YWJsZUNvbnRlbnQgPSBjb250ZW50ID9cbiAgICAgICAgVGFibGlmeS5hZGRSb3dzKGNvbnRlbnQsIEFjdGl2aXR5Q29uc3RhbnRzLkFDVElWSVRZX0lOVEVSTkFMX0lEU19DT0xTKSA6XG4gICAgICAgIG5vRGF0YTtcbiAgICAgIGNvbnRlbnQgPSA8ZGl2Pjx0YWJsZSBjbGFzc05hbWU9e3N0eWxlcy5ib3hfdGFibGV9Pjx0Ym9keT57dGFibGVDb250ZW50fTwvdGJvZHk+PC90YWJsZT48L2Rpdj47XG4gICAgfSBlbHNlIGlmIChjb250ZW50IHx8IHRoaXMucHJvcHMuc2hvd0lmRW1wdHkpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYga2V5PVwiSW50ZXJuYWxJZHNGcm9tSWRlbnRpZmljYXRpb25TZWN0aW9uXCI+XG4gICAgICAgICAgPHVsPlxuICAgICAgICAgICAge2NvbnRlbnQgJiYgY29udGVudC5tYXAob3JnRGF0YSA9PiAoPGxpIGtleT17b3JnRGF0YS5rZXl9PntvcmdEYXRhfTwvbGk+KSl9XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgPC9kaXY+XG4gICAgICApO1xuICAgIH1cbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxufTtcbmNvbnN0IEFQSW50ZXJuYWxJZHMgPSBTZWN0aW9uKEFQSW50ZXJuYWxJZHNTZWN0aW9uKHRydWUpLCB7IFNlY3Rpb25UaXRsZTogJ0FnZW5jeSBJbnRlcm5hbCBJRHMnLFxuICB1c2VFbmNhcHN1bGF0ZUhlYWRlcjogdHJ1ZSxcbiAgc0lEOiAnQVBJbnRlcm5hbElkcydcbn0pO1xuZXhwb3J0IGRlZmF1bHQgQVBJbnRlcm5hbElkcztcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuLy8gaW1wb3J0IHsgQWN0aXZpdHlDb25zdGFudHMsIEZpZWxkUGF0aENvbnN0YW50cywgRmllbGRzTWFuYWdlciwgU2VjdGlvbiB9IGZyb20gJ2FtcC11aSc7XG5pbXBvcnQgQWN0aXZpdHlDb25zdGFudHMgZnJvbSAnLi4vLi4vLi4vbW9kdWxlcy91dGlsL0FjdGl2aXR5Q29uc3RhbnRzJztcbmltcG9ydCBGaWVsZFBhdGhDb25zdGFudHMgZnJvbSAnLi4vLi4vLi4vdXRpbHMvRmllbGRQYXRoQ29uc3RhbnRzJztcbmltcG9ydCBGaWVsZHNNYW5hZ2VyIGZyb20gJy4uLy4uLy4uL21vZHVsZXMvZmllbGQvRmllbGRzTWFuYWdlcic7XG5pbXBvcnQgU2VjdGlvbiBmcm9tICcuL1NlY3Rpb24uanN4JztcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0FQQ29tcG9uZW50cy5jc3MnO1xuXG5sZXQgbG9nZ2VyID0gbnVsbDtcblxuLyoqXG4gKiBAYXV0aG9yIEdhYnJpZWwgSW5jaGF1c3BlXG4gKi9cbmNsYXNzIEFQQ29tcG9uZW50cyBleHRlbmRzIENvbXBvbmVudCB7XG4gIC8qIGVzbGludC1kaXNhYmxlIHJlYWN0L25vLXVudXNlZC1wcm9wLXR5cGVzICovXG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgYWN0aXZpdHk6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgICBhY3Rpdml0eUZpZWxkc01hbmFnZXI6IFByb3BUeXBlcy5pbnN0YW5jZU9mKEZpZWxkc01hbmFnZXIpLmlzUmVxdWlyZWQsXG4gICAgTG9nZ2VyOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIHRyYW5zbGF0ZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICByYXdOdW1iZXJUb0Zvcm1hdHRlZFN0cmluZzogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZFxuICB9O1xuICAvKiBlc2xpbnQtZW5hYmxlIHJlYWN0L25vLXVudXNlZC1wcm9wLXR5cGVzICovXG5cbiAgc3RhdGljIF9leHRyYWN0WWVhcihkYXRlU3RyaW5nKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKERhdGUucGFyc2UoZGF0ZVN0cmluZykpLmdldEZ1bGxZZWFyKCk7XG4gIH1cblxuICBzdGF0aWMgX2V4dHJhY3RHcm91cHMoZnVuZGluZywgdHJuVHlwZSkge1xuICAgIGNvbnN0IGdyb3VwcyA9IFtdO1xuICAgIGNvbnN0IGF1eEZkID0ge1xuICAgICAgYWRqVHlwZTogZnVuZGluZ1tBY3Rpdml0eUNvbnN0YW50cy5BREpVU1RNRU5UX1RZUEVdLFxuICAgICAgdHJuVHlwZSxcbiAgICAgIGtleTogZnVuZGluZy5pZCxcbiAgICAgIGN1cnJlbmN5OiBmdW5kaW5nW0FjdGl2aXR5Q29uc3RhbnRzLkNVUlJFTkNZXSxcbiAgICAgIGFtb3VudDogZnVuZGluZ1tBY3Rpdml0eUNvbnN0YW50cy5BTU9VTlRdLFxuICAgICAgeWVhcjogQVBDb21wb25lbnRzLl9leHRyYWN0WWVhcihmdW5kaW5nW0FjdGl2aXR5Q29uc3RhbnRzLlRSQU5TQUNUSU9OX0RBVEVdKVxuICAgIH07XG4gICAgY29uc3QgZ3JvdXAgPSBncm91cHMuZmluZChvID0+IG8uYWRqVHlwZS5pZCA9PT0gYXV4RmQuYWRqVHlwZS5pZFxuICAgICAgJiYgby50cm5UeXBlID09PSBhdXhGZC50cm5UeXBlXG4gICAgICAmJiBvLnllYXIgPT09IGF1eEZkLnllYXIpO1xuICAgIGlmICghZ3JvdXApIHtcbiAgICAgIGdyb3Vwcy5wdXNoKGF1eEZkKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gVE9ETzogd2UgbmVlZCBjdXJyZW5jeSBjb252ZXJzaW9uIGhlcmUuXG4gICAgICBncm91cC5hbW91bnQgKz0gYXV4RmQuYW1vdW50O1xuICAgIH1cbiAgICByZXR1cm4gZ3JvdXBzO1xuICB9XG5cbiAgc3RhdGljIF9idWlsZERldGFpbChjb21wb25lbnQsIHRyYW5zbGF0ZSwgcmF3TnVtYmVyVG9Gb3JtYXR0ZWRTdHJpbmcpIHtcbiAgICBjb25zdCBjb250ZW50ID0gW107XG4gICAgLy8gVE9ETzogQXBwbHkgY3VycmVuY3kgY29udmVyc2lvbiB0byBzaG93IGFsbCBmdW5kaW5ncyBpbiB0aGUgc2FtZSBjdXJyZW5jeVxuICAgIEZpZWxkUGF0aENvbnN0YW50cy5UUkFOU0FDVElPTl9UWVBFUy5mb3JFYWNoKHRyblR5cGUgPT4ge1xuICAgICAgY29uc3QgZnVuZGluZ3MgPSBjb21wb25lbnRbdHJuVHlwZV07XG4gICAgICBpZiAoZnVuZGluZ3MgJiYgZnVuZGluZ3MubGVuZ3RoKSB7XG4gICAgICAgIGNvbnN0IGdyb3VwcyA9IEFQQ29tcG9uZW50cy5fZXh0cmFjdEdyb3VwcyhmdW5kaW5ncywgdHJuVHlwZSk7XG4gICAgICAgIGdyb3Vwcy5mb3JFYWNoKGdyb3VwID0+IHtcbiAgICAgICAgICAvLyBUT0RPOiBBZGQgdGhlIGN1cnJlbnQgY3VycmVuY3kuXG4gICAgICAgICAgLy8gVE9ETzogVHJhbnNsYXRlIGEgc2luZ2xlIHBocmFzZSBpbnN0ZWFkIG9mIGEgY29tYmluYXRpb24gb2Ygd29yZHMgKEFNUE9GRkxJTkUtNDc3KS5cbiAgICAgICAgICBjb250ZW50LnB1c2goPHRyPlxuICAgICAgICAgICAgPHRkPntncm91cC55ZWFyfTwvdGQ+XG4gICAgICAgICAgICA8dGQ+e3RyYW5zbGF0ZShgJHtncm91cC5hZGpUeXBlLnZhbHVlfSAke2dyb3VwLnRyblR5cGV9YCl9PC90ZD5cbiAgICAgICAgICAgIDx0ZD57cmF3TnVtYmVyVG9Gb3JtYXR0ZWRTdHJpbmcoZ3JvdXAuYW1vdW50KX08L3RkPlxuICAgICAgICAgIDwvdHI+KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgY29uc3QgdGFibGUgPSAoPGRpdj5cbiAgICAgIDx0YWJsZSBjbGFzc05hbWU9e3N0eWxlcy50YWJsZX0+XG4gICAgICAgIDx0Ym9keT57Y29udGVudH08L3Rib2R5PlxuICAgICAgPC90YWJsZT5cbiAgICA8L2Rpdj4pO1xuICAgIHJldHVybiB0YWJsZTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIGNvbnN0IHsgTG9nZ2VyIH0gPSB0aGlzLnByb3BzO1xuICAgIGxvZ2dlciA9IG5ldyBMb2dnZXIoJ0FQIENvbXBvbmVudHMnKTtcbiAgICBsb2dnZXIuZGVidWcoJ2NvbnN0cnVjdG9yJyk7XG4gIH1cblxuICBfYnVpbGRDb21wb25lbnRzKCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBbXTtcbiAgICB0aGlzLnByb3BzLmFjdGl2aXR5W0FjdGl2aXR5Q29uc3RhbnRzLkNPTVBPTkVOVFNdLmZvckVhY2goKGNvbXBvbmVudCkgPT4ge1xuICAgICAgaWYgKHRoaXMucHJvcHMuYWN0aXZpdHlGaWVsZHNNYW5hZ2VyLmlzRmllbGRQYXRoRW5hYmxlZChBY3Rpdml0eUNvbnN0YW50cy5DT01QT05FTlRfVElUTEUpKSB7XG4gICAgICAgIGNvbnRlbnQucHVzaCg8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT57Y29tcG9uZW50W0FjdGl2aXR5Q29uc3RhbnRzLkNPTVBPTkVOVF9USVRMRV19PC9kaXY+KTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLnByb3BzLmFjdGl2aXR5RmllbGRzTWFuYWdlci5pc0ZpZWxkUGF0aEVuYWJsZWQoQWN0aXZpdHlDb25zdGFudHMuQ09NUE9ORU5UX1RZUEUpKSB7XG4gICAgICAgIGNvbnRlbnQucHVzaCg8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT57Y29tcG9uZW50W0FjdGl2aXR5Q29uc3RhbnRzLkNPTVBPTkVOVF9UWVBFXS52YWx1ZX08L2Rpdj4pO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMucHJvcHMuYWN0aXZpdHlGaWVsZHNNYW5hZ2VyLmlzRmllbGRQYXRoRW5hYmxlZChBY3Rpdml0eUNvbnN0YW50cy5DT01QT05FTlRfREVTQ1JJUFRJT04pKSB7XG4gICAgICAgIGNvbnRlbnQucHVzaCg8ZGl2Pntjb21wb25lbnQuZGVzY3JpcHRpb259PC9kaXY+KTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQucHVzaCg8ZGl2Pnt0aGlzLnByb3BzLnRyYW5zbGF0ZSgnRmluYW5jZSBvZiB0aGUgY29tcG9uZW50Jyl9PC9kaXY+KTtcbiAgICAgIGNvbnRlbnQucHVzaChBUENvbXBvbmVudHMuX2J1aWxkRGV0YWlsKGNvbXBvbmVudCwgdGhpcy5wcm9wcy50cmFuc2xhdGUsIHRoaXMucHJvcHMucmF3TnVtYmVyVG9Gb3JtYXR0ZWRTdHJpbmcpKTtcbiAgICAgIGNvbnRlbnQucHVzaCg8aHIgLz4pO1xuICAgIH0pO1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoPGRpdj5cbiAgICAgIHt0aGlzLl9idWlsZENvbXBvbmVudHMoKX1cbiAgICA8L2Rpdj4pO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNlY3Rpb24oQVBDb21wb25lbnRzLCB7IFNlY3Rpb25UaXRsZTogJ0NvbXBvbmVudHMnXG59KTtcbiIsIi8qIGVzbGludC1kaXNhYmxlIGNsYXNzLW1ldGhvZHMtdXNlLXRoaXMgKi9cbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQsIFByb3BUeXBlcyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBBY3Rpdml0eUNvbnN0YW50cyBmcm9tICcuLi8uLi8uLi9tb2R1bGVzL3V0aWwvQWN0aXZpdHlDb25zdGFudHMnO1xuaW1wb3J0IEFQRmllbGQgZnJvbSAnLi4vY29tcG9uZW50cy9BUEZpZWxkLmpzeCc7XG5pbXBvcnQgRmllbGRQYXRoQ29uc3RhbnRzIGZyb20gJy4uLy4uLy4uL3V0aWxzL0ZpZWxkUGF0aENvbnN0YW50cyc7XG5pbXBvcnQgRmllbGRzTWFuYWdlciBmcm9tICcuLi8uLi8uLi9tb2R1bGVzL2ZpZWxkL0ZpZWxkc01hbmFnZXInO1xuaW1wb3J0IFRhYmxpZnkgZnJvbSAnLi4vY29tcG9uZW50cy9UYWJsaWZ5LmpzeCc7XG5pbXBvcnQgU2VjdGlvbiBmcm9tICcuL1NlY3Rpb24uanN4JztcbmltcG9ydCBDb250YWN0Q29uc3RhbnRzIGZyb20gJy4uLy4uLy4uL21vZHVsZXMvdXRpbC9Db250YWN0Q29uc3RhbnRzJztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vQWN0aXZpdHlQcmV2aWV3LmNzcyc7XG5cbi8qKlxuICogQWN0aXZpdHkgUHJldmlldyBDb250YWN0IHNlY3Rpb25cbiAqXG4gKiBAYXV0aG9yIE5hZGVqZGEgTWFuZHJlc2N1XG4gKi9cbmNsYXNzIEFQQ29udGFjdCBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgYWN0aXZpdHk6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgICBhY3Rpdml0eUZpZWxkc01hbmFnZXI6IFByb3BUeXBlcy5pbnN0YW5jZU9mKEZpZWxkc01hbmFnZXIpLmlzUmVxdWlyZWQsXG4gICAgY29udGFjdEZpZWxkc01hbmFnZXI6IFByb3BUeXBlcy5pbnN0YW5jZU9mKEZpZWxkc01hbmFnZXIpLFxuICAgIGNvbnRhY3RzQnlJZHM6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgYnVpbGRTaW1wbGVGaWVsZDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICBnZXRBY3Rpdml0eUNvbnRhY3RJZHM6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgTG9nZ2VyOiBQcm9wVHlwZXMuZnVuYyxcbiAgICB0cmFuc2xhdGU6IFByb3BUeXBlcy5mdW5jXG4gIH07XG5cbiAgZ2V0SHlkcmF0ZWRDb250YWN0cygpIHtcbiAgICAvLyBDb250YWN0cyB3aWxsIGJlIGh5ZHJhdGVkIGFuZCByZWNlaXZlZCBieSBwcm9wc1xuICAgIC8vIEJvdGggaW4gYW1wX29mZmxpbmUgYW5kIGFtcF9vbmxpbmUgc28gd2UganVzdCBuZWVkIHRvIGdldFxuICAgIC8vIEFjdGl2aXR5IENvblxuICAgIGNvbnN0IHsgYWN0aXZpdHksIGNvbnRhY3RzQnlJZHMsIGdldEFjdGl2aXR5Q29udGFjdElkcyB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBjb250YWN0SWRzID0gZ2V0QWN0aXZpdHlDb250YWN0SWRzKGFjdGl2aXR5KTtcbiAgICBjb25zdCBoeWRyYXRlZENvbnRhY3RzQnlJZHMgPSB7fTtcbiAgICBjb250YWN0SWRzLmZvckVhY2goY0lkID0+IHtcbiAgICAgIGNvbnN0IGMgPSBjb250YWN0c0J5SWRzW2NJZF0gfHwge307XG4gICAgICBpZiAoY1tDb250YWN0Q29uc3RhbnRzLlRNUF9IWURSQVRFRF0pIHtcbiAgICAgICAgaHlkcmF0ZWRDb250YWN0c0J5SWRzW2NJZF0gPSBjO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBoeWRyYXRlZENvbnRhY3RzQnlJZHM7XG4gIH1cblxuICByZW5kZXJDb250YWN0KGNvbnRhY3QpIHtcbiAgICBjb25zdCB7IGNvbnRhY3RGaWVsZHNNYW5hZ2VyLCBidWlsZFNpbXBsZUZpZWxkIH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGtleT17Y29udGFjdC5pZH0gY2xhc3NOYW1lPXtzdHlsZXMucGFkZGluZ0JvdHRvbUxhcmdlfT5cbiAgICAgICAgPGRpdj57YCR7Y29udGFjdFtDb250YWN0Q29uc3RhbnRzLk5BTUVdfSAke2NvbnRhY3RbQ29udGFjdENvbnN0YW50cy5MQVNUX05BTUVdfWB9PC9kaXY+XG4gICAgICAgIHtjb250YWN0W0NvbnRhY3RDb25zdGFudHMuRU1BSUxdLm1hcChlbWFpbCA9PlxuICAgICAgICAgIGJ1aWxkU2ltcGxlRmllbGQoYCR7Q29udGFjdENvbnN0YW50cy5FTUFJTH1+XG4gICAgICAgICAgJHtDb250YWN0Q29uc3RhbnRzLlZBTFVFfWAsIHRydWUsIG51bGwsIGZhbHNlLCBlbWFpbCwgY29udGFjdEZpZWxkc01hbmFnZXIpKX1cbiAgICAgICAge2NvbnRhY3RbQ29udGFjdENvbnN0YW50cy5QSE9ORV0ubWFwKHBob25lID0+XG4gICAgICAgICAgYnVpbGRTaW1wbGVGaWVsZChgJHtDb250YWN0Q29uc3RhbnRzLlBIT05FfX5cbiAgICAgICAgICAke0NvbnRhY3RDb25zdGFudHMuVkFMVUV9YCwgdHJ1ZSwgbnVsbCwgZmFsc2UsIHBob25lLCBjb250YWN0RmllbGRzTWFuYWdlcikpfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG4gIHJlbmRlck5vQ29udGFjdHMoKSB7XG4gICAgY29uc3QgeyBMb2dnZXIsIHRyYW5zbGF0ZSB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgPEFQRmllbGRcbiAgICAgICAgZmllbGROYW1lQ2xhc3M9e3N0eWxlcy5oaWRkZW59IGZpZWxkVmFsdWVDbGFzcz17c3R5bGVzLm5vZGF0YX0gZmllbGRDbGFzcz17c3R5bGVzLmZsZXh9IHNlcGFyYXRvcj17ZmFsc2V9XG4gICAgICAgIHZhbHVlPXt0cmFuc2xhdGUoJ05vIERhdGEnKX0gdHJhbnNsYXRlPXt0cmFuc2xhdGV9IExvZ2dlcj17TG9nZ2VyfSAvPlxuICAgICk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBMb2dnZXIgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyBhY3Rpdml0eSwgYWN0aXZpdHlGaWVsZHNNYW5hZ2VyIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IGh5ZHJhdGVkQ29udGFjdHNCeUlkcyA9IHRoaXMuZ2V0SHlkcmF0ZWRDb250YWN0cygpO1xuICAgIGNvbnN0IGNvbnRhY3RHcm91cHMgPSBGaWVsZFBhdGhDb25zdGFudHMuQUNUSVZJVFlfQ09OVEFDVF9QQVRIU1xuICAgICAgLmZpbHRlcihhY3AgPT4gYWN0aXZpdHlGaWVsZHNNYW5hZ2VyLmlzRmllbGRQYXRoRW5hYmxlZChhY3ApKVxuICAgICAgLm1hcChhY3AgPT4ge1xuICAgICAgICBjb25zdCB0aXRsZSA9IGFjdGl2aXR5RmllbGRzTWFuYWdlci5nZXRGaWVsZExhYmVsVHJhbnNsYXRpb24oYWNwKTtcbiAgICAgICAgY29uc3QgY29udGFjdHMgPSAoYWN0aXZpdHlbYWNwXSB8fCBbXSkubWFwKGMgPT4ge1xuICAgICAgICAgIGNvbnN0IGh5ZHJhdGVkQyA9IGh5ZHJhdGVkQ29udGFjdHNCeUlkc1tjW0FjdGl2aXR5Q29uc3RhbnRzLkNPTlRBQ1RdLmlkXTtcbiAgICAgICAgICByZXR1cm4gaHlkcmF0ZWRDID8gdGhpcy5yZW5kZXJDb250YWN0KGh5ZHJhdGVkQykgOiBudWxsO1xuICAgICAgICB9KTtcbiAgICAgICAgY29uc3QgY29udGVudCA9IGNvbnRhY3RzLmxlbmd0aCA/IGNvbnRhY3RzIDogdGhpcy5yZW5kZXJOb0NvbnRhY3RzKCk7XG4gICAgICAgIGNvbnN0IGNvbnRlbnRDbGFzcyA9IGNvbnRhY3RzLmxlbmd0aCA/IHN0eWxlcy50YWJsZUNlbGwgOiBudWxsO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPGRpdiBrZXk9XCJjb250YWN0LWdyb3VwXCI+XG4gICAgICAgICAgICA8ZGl2IGtleT1cInRpdGxlXCIgY2xhc3NOYW1lPXtzdHlsZXMuc2VjdG9yX3RpdGxlfT57dGl0bGV9PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGtleT1cImNvbnRhY3RzXCIgY2xhc3NOYW1lPXtjb250ZW50Q2xhc3N9Pntjb250ZW50fTwvZGl2PlxuICAgICAgICAgIDwvZGl2Pik7XG4gICAgICB9KVxuICAgICAgLy8gVE9ETyB0YWJsaWZ5IG11c3Qgbm90IHJldmVyc2VzIHRoZSBvcmRlclxuICAgICAgLnJldmVyc2UoKTtcbiAgICByZXR1cm4gKDxUYWJsaWZ5XG4gICAgICBrZXk9XCJjb250YWN0LWluZm9cIiBjb250ZW50PXtjb250YWN0R3JvdXBzfSBjb2x1bW5zPXtBY3Rpdml0eUNvbnN0YW50cy5BQ1RJVklUWV9DT05UQUNUX0NPTFN9XG4gICAgICBMb2dnZXI9e0xvZ2dlcn0gLz4pO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNlY3Rpb24oQVBDb250YWN0LCB7IFNlY3Rpb25UaXRsZTogJ0NvbnRhY3QgSW5mb3JtYXRpb24nLFxuICB1c2VFbmNhcHN1bGF0ZUhlYWRlcjogdHJ1ZSxcbiAgc0lEOiAnQVBDb250YWN0J1xufSk7XG4iLCIvLyBEaXNhYmxlIHJ1bGUgYmVjYXVzZSBpdCBmYWlscyB3aXRoIGRlc3RydWN0aW5nIHN5bnRheC5cbi8qIGVzbGludCBcImltcG9ydC9wcmVmZXItZGVmYXVsdC1leHBvcnRcIjogMCovXG5cbmNvbnN0IFdPUktTUEFDRVNfR1JPVVBTID0gW1xuICB7IHR5cGU6ICdEb25vcicgfSxcbiAgeyB0eXBlOiAnR292ZXJubWVudCcgfSxcbiAgeyB0eXBlOiAnTGluZSBNaW5pc3RyaWVzJyB9LFxuICB7IHR5cGU6ICdPdGhlcicgfVxuXTtcblxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuZnJlZXplKHtcbiAgV09SS1NQQUNFU19HUk9VUFNcbn0pO1xuIiwiaW1wb3J0IFRlc3RBUEZpZWxkIGZyb20gJy4vYWN0aXZpdHlQcmV2aWV3L2NvbXBvbmVudHMvVGVzdEFQRmllbGQnO1xuaW1wb3J0IFRlc3RpbmdTZWN0aW9uIGZyb20gJy4vYWN0aXZpdHlQcmV2aWV3L2NvbXBvbmVudHMvVGVzdGluZ1NlY3Rpb24nO1xuaW1wb3J0IENvbnN0YW50cyBmcm9tICcuL3V0aWxzL0NvbnN0YW50cyc7XG5pbXBvcnQgQWN0aXZpdHlDb25zdGFudHMgZnJvbSAnLi9tb2R1bGVzL3V0aWwvQWN0aXZpdHlDb25zdGFudHMnO1xuaW1wb3J0IEZlYXR1cmVNYW5hZ2VyQ29uc3RhbnRzIGZyb20gJy4vbW9kdWxlcy91dGlsL0ZlYXR1cmVNYW5hZ2VyQ29uc3RhbnRzJztcbmltcG9ydCBFcnJvckNvbnN0YW50cyBmcm9tICcuL3V0aWxzL2NvbnN0YW50cy9FcnJvckNvbnN0YW50cyc7XG5pbXBvcnQgRmllbGRzTWFuYWdlciBmcm9tICcuL21vZHVsZXMvZmllbGQvRmllbGRzTWFuYWdlcic7XG5pbXBvcnQgRmllbGRQYXRoQ29uc3RhbnRzIGZyb20gJy4vdXRpbHMvRmllbGRQYXRoQ29uc3RhbnRzJztcbmltcG9ydCBWYWx1ZUNvbnN0YW50cyBmcm9tICcuL3V0aWxzL1ZhbHVlQ29uc3RhbnRzJztcbmltcG9ydCBDb250YWN0Q29uc3RhbnRzIGZyb20gJy4vbW9kdWxlcy91dGlsL0NvbnRhY3RDb25zdGFudHMnO1xuaW1wb3J0IEN1cnJlbmN5UmF0ZXNNYW5hZ2VyIGZyb20gJy4vbW9kdWxlcy91dGlsL0N1cnJlbmN5UmF0ZXNNYW5hZ2VyJztcbmltcG9ydCBQb3NzaWJsZVZhbHVlc01hbmFnZXIgZnJvbSAnLi9tb2R1bGVzL2ZpZWxkL1Bvc3NpYmxlVmFsdWVzTWFuYWdlcic7XG5pbXBvcnQgRmVhdHVyZU1hbmFnZXIgZnJvbSAnLi9tb2R1bGVzL3V0aWwvRmVhdHVyZU1hbmFnZXInO1xuaW1wb3J0IEFQTGFiZWwgZnJvbSAnLi9hY3Rpdml0eS9wcmV2aWV3L2NvbXBvbmVudHMvQVBMYWJlbC5qc3gnO1xuaW1wb3J0IEFQRmllbGQgZnJvbSAnLi9hY3Rpdml0eS9wcmV2aWV3L2NvbXBvbmVudHMvQVBGaWVsZC5qc3gnO1xuaW1wb3J0IFRhYmxpZnkgZnJvbSAnLi9hY3Rpdml0eS9wcmV2aWV3L2NvbXBvbmVudHMvVGFibGlmeS5qc3gnO1xuaW1wb3J0IEFQUGVyY2VudGFnZUZpZWxkIGZyb20gJy4vYWN0aXZpdHkvcHJldmlldy9jb21wb25lbnRzL0FQUGVyY2VudGFnZUZpZWxkLmpzeCc7XG5pbXBvcnQgQVBQZXJjZW50YWdlTGlzdCBmcm9tICcuL2FjdGl2aXR5L3ByZXZpZXcvY29tcG9uZW50cy9BUFBlcmNlbnRhZ2VMaXN0LmpzeCc7XG5pbXBvcnQgU2VjdGlvbiBmcm9tICcuL2FjdGl2aXR5L3ByZXZpZXcvc2VjdGlvbnMvU2VjdGlvbi5qc3gnO1xuaW1wb3J0IEZ1bmRpbmdTdW1tYXJ5IGZyb20gJy4vYWN0aXZpdHkvcHJldmlldy9zZWN0aW9ucy9GdW5kaW5nU3VtbWFyeS5qc3gnO1xuaW1wb3J0IEFQSWRlbnRpZmljYXRpb24gZnJvbSAnLi9hY3Rpdml0eS9wcmV2aWV3L3NlY3Rpb25zL0FQSWRlbnRpZmljYXRpb24uanN4JztcbmltcG9ydCBVSVV0aWxzIGZyb20gJy4vdXRpbHMvVUlVdGlscyc7XG5pbXBvcnQgQWRkaXRpb25hbEluZm8gZnJvbSAnLi9hY3Rpdml0eS9wcmV2aWV3L3NlY3Rpb25zL0FkZGl0aW9uYWxJbmZvLmpzeCc7XG5pbXBvcnQgQVBJbnRlcm5hbElkcyBmcm9tICcuL2FjdGl2aXR5L3ByZXZpZXcvc2VjdGlvbnMvQVBJbnRlcm5hbElkcy5qc3gnO1xuaW1wb3J0IEFQQ29tcG9uZW50cyBmcm9tICcuL2FjdGl2aXR5L3ByZXZpZXcvc2VjdGlvbnMvQVBDb21wb25lbnRzLmpzeCc7XG5pbXBvcnQgQVBDb250YWN0IGZyb20gJy4vYWN0aXZpdHkvcHJldmlldy9zZWN0aW9ucy9BUENvbnRhY3QuanN4JztcbmltcG9ydCBVc2VyQ29uc3RhbnRzIGZyb20gJy4vdXRpbHMvY29uc3RhbnRzL1VzZXJDb25zdGFudHMnO1xuaW1wb3J0IFdvcmtzcGFjZUdyb3Vwc0NvbnN0YW50cyBmcm9tICcuL3V0aWxzL2NvbnN0YW50cy9Xb3Jrc3BhY2VHcm91cHNDb25zdGFudHMnO1xuaW1wb3J0IFdvcmtzcGFjZUNvbnN0YW50cyBmcm9tICcuL3V0aWxzL2NvbnN0YW50cy9Xb3Jrc3BhY2VDb25zdGFudHMnO1xuXG5cbmV4cG9ydCB7XG4gIFRlc3RBUEZpZWxkLCBUZXN0aW5nU2VjdGlvbiwgQ29uc3RhbnRzLCBBY3Rpdml0eUNvbnN0YW50cywgRmVhdHVyZU1hbmFnZXJDb25zdGFudHMsIEVycm9yQ29uc3RhbnRzLFxuICBDdXJyZW5jeVJhdGVzTWFuYWdlciwgRmllbGRzTWFuYWdlciwgRmllbGRQYXRoQ29uc3RhbnRzLCBWYWx1ZUNvbnN0YW50cywgUG9zc2libGVWYWx1ZXNNYW5hZ2VyLCBGZWF0dXJlTWFuYWdlcixcbiAgQVBMYWJlbCwgQVBGaWVsZCwgVGFibGlmeSwgQVBQZXJjZW50YWdlRmllbGQsIEFQUGVyY2VudGFnZUxpc3QsIFVJVXRpbHMsIFNlY3Rpb24sIEZ1bmRpbmdTdW1tYXJ5LCBBZGRpdGlvbmFsSW5mbyxcbiAgVXNlckNvbnN0YW50cywgQ29udGFjdENvbnN0YW50cywgV29ya3NwYWNlQ29uc3RhbnRzLCBXb3Jrc3BhY2VHcm91cHNDb25zdGFudHMsIEFQSWRlbnRpZmljYXRpb24sIEFQSW50ZXJuYWxJZHMsXG4gIEFQQ29tcG9uZW50cywgQVBDb250YWN0XG59O1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIFRlc3RBUEZpZWxkLFxuICBUZXN0aW5nU2VjdGlvbixcbiAgQ29uc3RhbnRzLFxuICBBY3Rpdml0eUNvbnN0YW50cyxcbiAgRmVhdHVyZU1hbmFnZXJDb25zdGFudHMsXG4gIEVycm9yQ29uc3RhbnRzLFxuICBDdXJyZW5jeVJhdGVzTWFuYWdlcixcbiAgRmllbGRzTWFuYWdlcixcbiAgRmllbGRQYXRoQ29uc3RhbnRzLFxuICBWYWx1ZUNvbnN0YW50cyxcbiAgQ29udGFjdENvbnN0YW50cyxcbiAgRmVhdHVyZU1hbmFnZXIsXG4gIEFQTGFiZWwsXG4gIEFQRmllbGQsXG4gIFRhYmxpZnksXG4gIEFQUGVyY2VudGFnZUZpZWxkLFxuICBBUFBlcmNlbnRhZ2VMaXN0LFxuICBTZWN0aW9uLFxuICBGdW5kaW5nU3VtbWFyeSxcbiAgVUlVdGlscyxcbiAgQWRkaXRpb25hbEluZm8sXG4gIFVzZXJDb25zdGFudHMsXG4gIFdvcmtzcGFjZUNvbnN0YW50cyxcbiAgV29ya3NwYWNlR3JvdXBzQ29uc3RhbnRzLFxuICBBUElkZW50aWZpY2F0aW9uLFxuICBBUENvbXBvbmVudHMsXG4gIEFQSW50ZXJuYWxJZHMsXG4gIEFQQ29udGFjdFxufTtcbiJdLCJuYW1lcyI6WyJUZXN0QVBGaWVsZCIsInRybkxhYmVsIiwidmFsdWUiLCJpbmxpbmUiLCJzZXBhcmF0b3IiLCJuYW1lQ2xhc3MiLCJ2YWx1ZUNsYXNzIiwicHJvcHMiLCJ0cmFuc2xhdGUiLCJhbXBMb2dnZXIiLCJsb2ciLCJ1c2VTZXBhcmF0b3IiLCJkaXNwbGF5Q2xhc3MiLCJmaWVsZENsYXNzIiwic3R5bGVzIiwiYmxvY2siLCJjbGFzc05hbWVzIiwiZmllbGRWYWx1ZUNsYXNzIiwiZGlzcGxheVZhbHVlIiwiQXJyYXkiLCJpc0FycmF5IiwiT2JqZWN0IiwiZm9yRWFjaCIsInB1c2giLCJ2Iiwic29ydCIsImpvaW4iLCJTdHJpbmciLCJ1c2VJbm5lckhUTUwiLCJfX2h0bWwiLCJmaWVsZE5hbWVDbGFzcyIsInRpdGxlIiwiX2dldFZhbHVlIiwiQ29tcG9uZW50IiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwiYW55IiwiYm9vbCIsIm9iamVjdCIsImlzUmVxdWlyZWQiLCJmdW5jIiwiVGVzdGluZ1NlY3Rpb24iLCJCQVNFX1JFU1RfVVJMIiwiQ09OTkVDVElPTl9USU1FT1VUIiwiQ09OTkVDVElPTl9GT1JDRURfVElNRU9VVCIsIlRJTUVPVVRfQ0hFQ0tfSU5URVJWQUwiLCJNQVhfUkVUUllfQVRFTVBUUyIsIkVSUk9SU19UT19SRVRSWSIsIkVSUk9SU19OT19BTVBfU0VSVkVSIiwiQ09OTkVDVElWSVRZX0NIRUNLX0lOVEVSVkFMIiwiV09SS1NQQUNFX1VSTCIsIkxPR0lOX1VSTCIsIkRFU0tUT1BfVVJMIiwiREVTS1RPUF9DVVJSRU5UX1VSTCIsIlNZTkNVUF9SRURJUkVDVF9VUkwiLCJTWU5DVVBfSElTVE9SWV9UQVJHRVQiLCJTWU5DVVBfU1VNTUFSWV9VUkwiLCJBQ1RJVklUWV9QUkVWSUVXX1VSTCIsIkFDVElWSVRZX0VESVRfVVJMIiwiVVBEQVRFX1VSTCIsIlNFVFVQX1VSTCIsIlNFVFRJTkdTX1VSTCIsIkNPTExFQ1RJT05fVVNFUlMiLCJDT0xMRUNUSU9OX1dPUktQQUNFUyIsIkNPTExFQ1RJT05fVEVBTU1FTUJFUlMiLCJDT0xMRUNUSU9OX0NMSUVOVF9TRVRUSU5HUyIsIkNPTExFQ1RJT05fR0xPQkFMX1NFVFRJTkdTIiwiQ09MTEVDVElPTl9BQ1RJVklUSUVTIiwiQ09MTEVDVElPTl9GSUVMRFMiLCJDT0xMRUNUSU9OX1BPU1NJQkxFX1ZBTFVFUyIsIkNPTExFQ1RJT05fU1lOQ1VQX0xPRyIsIkNPTExFQ1RJT05fTEFOR1MiLCJDT0xMRUNUSU9OX1dTX1NFVFRJTkdTIiwiQ09MTEVDVElPTl9DVVJSRU5DWV9SQVRFUyIsIkNPTExFQ1RJT05fRkVBVFVSRV9NQU5BR0VSIiwiQ09MTEVDVElPTl9DT05UQUNUUyIsIkNPTExFQ1RJT05fUkVTT1VSQ0VTIiwiQ09MTEVDVElPTl9SRVBPU0lUT1JZIiwiQ09MTEVDVElPTl9HQVpFVFRFRVIiLCJDT0xMRUNUSU9OX0NBTEVOREFSUyIsIkNPTExFQ1RJT05fQ0hBTkdFU0VUUyIsIkdBWkVUVEVFUl9ESVNUQU5DRV9ESVZJREUiLCJEQl9GSUxFX1BSRUZJWCIsIkRCX0ZJTEVfRVhURU5TSU9OIiwiREJfQ09NTU9OX0RBVEFTVE9SRV9PUFRJT05TIiwiYXV0b2xvYWQiLCJjb3JydXB0QWxlcnRUaHJlc2hvbGQiLCJEQl9BVVRPQ09NUEFDVF9JTlRFUlZBTF9NSUxJU0VDT05EUyIsIkRCX0RFRkFVTFRfUVVFUllfTElNSVQiLCJMQU5HVUFHRV9FTkdMSVNIIiwiRlNfTE9DQUxFU19ESVJFQ1RPUlkiLCJMQU5HVUFHRV9NQVNURVJfVFJBTlNMQVRJT05TX0ZJTEUiLCJMQU5HVUFHRV9UUkFOU0xBVElPTlNfRklMRSIsIkxBTkdVQUdFX05FV19UUkFOU0xBVElPTlNfTVVTVF9TWU5DIiwiQVNBUl9ESVIiLCJBUFBfRElSRUNUT1JZIiwiVEVTVF9ESVJFQ1RPUlkiLCJTVEFUSUNfRElSIiwiSU1BR0VTX0RJUiIsIkRPQ19JQ09OUyIsIkRCX1NUQVRJQ19ESVIiLCJNSUdSQVRJT05TX0RJUiIsIkhBU0hfSVRFUkFUSU9OUyIsIkRJR0VTVF9BTEdPUklUSE1fU0hBMSIsIkRJR0VTVF9BTEdPUklUSE1fU0hBMjU2IiwiQUNUSVZJVFlfRURJVCIsIkFDVElWSVRZX1ZJRVciLCJTWU5DVVBfRk9SQ0VfREFZUyIsIlNZTkNVUF9CRVNUX0JFRk9SRV9EQVlTIiwiU1lOQ1VQX05PX0RBVEUiLCJTWU5DVVBfVFlQRV9UUkFOU0xBVElPTlMiLCJTWU5DVVBfVFlQRV9VU0VSUyIsIlNZTkNVUF9UWVBFX0FTU0VUUyIsIlNZTkNVUF9UWVBFX1dPUktTUEFDRVMiLCJTWU5DVVBfVFlQRV9HUyIsIlNZTkNVUF9UWVBFX0VYQ0hBTkdFX1JBVEVTIiwiU1lOQ1VQX1RZUEVfRkVBVFVSRV9NQU5BR0VSIiwiU1lOQ1VQX1RZUEVfV09SS1NQQUNFX01FTUJFUlMiLCJTWU5DVVBfVFlQRV9BTExfRklFTERTIiwiU1lOQ1VQX1RZUEVfQUNUSVZJVElFU19QVUxMIiwiU1lOQ1VQX1RZUEVfQUNUSVZJVElFU19QVVNIIiwiU1lOQ1VQX1RZUEVfQUNUSVZJVFlfRklFTERTIiwiU1lOQ1VQX1RZUEVfQUNUSVZJVFlfRklFTERTX1NUUlVDVFVSQUxfQ0hBTkdFUyIsIlNZTkNVUF9UWVBFX0NPTlRBQ1RTX1BVTEwiLCJTWU5DVVBfVFlQRV9DT05UQUNUU19QVVNIIiwiU1lOQ1VQX1RZUEVfQUNUSVZJVFlfUE9TU0lCTEVfVkFMVUVTIiwiU1lOQ1VQX1RZUEVfQ09OVEFDVF9GSUVMRFMiLCJTWU5DVVBfVFlQRV9DT05UQUNUX0ZJRUxEU19TVFJVQ1RVUkFMX0NIQU5HRVMiLCJTWU5DVVBfVFlQRV9DT05UQUNUX1BPU1NJQkxFX1ZBTFVFUyIsIlNZTkNVUF9UWVBFX1JFU09VUkNFU19QVUxMIiwiU1lOQ1VQX1RZUEVfUkVTT1VSQ0VTX1BVU0giLCJTWU5DVVBfVFlQRV9SRVNPVVJDRV9GSUVMRFMiLCJTWU5DVVBfVFlQRV9SRVNPVVJDRV9GSUVMRFNfU1RSVUNUVVJBTF9DSEFOR0VTIiwiU1lOQ1VQX1RZUEVfUkVTT1VSQ0VfUE9TU0lCTEVfVkFMVUVTIiwiU1lOQ1VQX1RZUEVfQ09NTU9OX1BPU1NJQkxFX1ZBTFVFUyIsIlNZTkNVUF9UWVBFX1dPUktTUEFDRV9TRVRUSU5HUyIsIlNZTkNVUF9UWVBFX01BUF9USUxFUyIsIlNZTkNVUF9UWVBFX0dBWkVUVEVFUiIsIlNZTkNVUF9UWVBFX0NBTEVOREFSUyIsIlNZTkNVUF9TVEFUVVNfU1VDQ0VTUyIsIlNZTkNVUF9TVEFUVVNfRkFJTCIsIlNZTkNVUF9TVEFUVVNfUEFSVElBTCIsIlNZTkNVUF9TVEFUVVNfQ0FOQ0VMRUQiLCJTWU5DVVBfU1lOQ19SRVFVRVNURURfQVQiLCJTWU5DVVBfU1lOQ19SRVFVRVNURURfQlkiLCJTWU5DVVBfREFURVRJTUVfRklFTEQiLCJTWU5DVVBfRElGRl9MRUZUT1ZFUiIsIlNZTkNVUF9ERVBFTkRFTkNZX0NIRUNLX0lOVEVSVkFMIiwiU1lOQ1VQX0RFVEFJTFNfU1lOQ0VEIiwiU1lOQ1VQX0RFVEFJTFNfVU5TWU5DRUQiLCJTWU5DVVBfUkVTT1VSQ0VfUFVMTF9CQVRDSF9TSVpFIiwiU1lOQ1VQX0FDVElWSVRJRVNfUFVMTF9CQVRDSF9TSVpFIiwiU1lOQ1VQX0NPTlRBQ1RTX1BVTExfQkFUQ0hfU0laRSIsIkFDVElWSVRZX1NUQVRVU19EUkFGVCIsIkFDVElWSVRZX1NUQVRVU19VTlZBTElEQVRFRCIsIkFDVElWSVRZX1NUQVRVU19WQUxJREFURUQiLCJDVVJSRU5DWV9IT1VSIiwiREVGQVVMVF9DVVJSRU5DWSIsIlJBVEVfU0FNRV9DVVJSRU5DWSIsIlJBVEVfQ1VSUkVOQ1lfTk9UX0ZPVU5EIiwiQ1VSUkVOQ1lfUEFJUiIsIlZFUlNJT05fUEFUVEVSTiIsIlZFUlNJT05fUEFUVEVSTl9HUk9VUFNfVE9fRVhUUkFDVCIsIkFNUF9DT1VOVFJZX0xPR08iLCJBU1NFVFNfRElSRUNUT1JZIiwiQkFTRV82NF9QTkdfUFJFRklYIiwiVFJBTlNQQVJFTlRfRkxBRyIsIkhFTFBfUERGX0ZJTEVOQU1FIiwiSEVMUF9ESVIiLCJFTkRTX1dJVEhfUFVOQ1RVQVRJT05fUkVHRVgiLCJNQVBfVElMRVNfRElSIiwiVElMRVNfWklQX0ZJTEUiLCJNQVBfTUFSS0VSX0lNQUdFIiwiTUFQX01BUktFUl9TSEFET1ciLCJNQVBfTUFSS0VSX0NJUkNMRV9SRUQiLCJNQVBfTUFSS0VSX0NJUkNMRV9HUkVFTiIsIlBPTFlHT05fQkFTRV9DT0xPUiIsIkRHX0NPTVBBTllfTkFNRSIsIkRHX0FERFJFU1NfMSIsIkRHX0FERFJFU1NfMiIsIkRHX0NPTlRBQ1RfSU5GTyIsIkxPR19ESVIiLCJMT0dfRklMRV9OQU1FIiwiTE9HX0ZJTEVfRVhURU5TSU9OIiwiTUVTU0FHRV9USU1FT1VUIiwiTUVTU0FHRV9ESVNBUFBFQVJfVElNRU9VVCIsIk1FU1NBR0VfQ0hFQ0tfSU5URVJWQUwiLCJNRVNTQUdFX0FOSU1BVElPTl9EVVJBVElPTiIsIklOVEVSTkFMX0RBVEVfRk9STUFUIiwiTUlOX1NVUFBPUlRFRF9ZRUFSIiwiTUFYX1NVUFBPUlRFRF9ZRUFSIiwiVVBEQVRFU19ESVIiLCJDT05URU5UX0RJU1BPU0lUSU9OX0hFQURFUiIsIlVQREFURV9UTVBfRklMRSIsIk9USEVSX0lEIiwiTlJfU1lOQ19ISVNUT1JZX0VOVFJJRVMiLCJOUl9MT0dfRklMRVMiLCJPTERfU1lOQ19MT0dTX0RVUkFUSU9OX0lTT184NjAxIiwiTlJfT0xEX1NZTkNfTE9HU19UT19LRUVQX01JTklNVU0iLCJNQVNURVJfQlJBTkNIIiwiREVWRUxPUF9CUkFOQ0giLCJSRUxFQVNFX0JSQU5DSF9SRUdFWCIsIlJFTEVBU0VfQlJBTkNIRVMiLCJESVNBQkxFX0NIQU5HRUxPR1MiLCJtb2R1bGUiLCJmcmVlemUiLCJQVUJMSUNfVklFV19DSEFOR0VfUEFTU1dPUkQiLCJQVUJMSUNfVklFV19UUk9VQkxFX1NJR05fSU4iLCJBQ1RJVklUWV9ERUxJVkVSWV9SQVRFIiwiQUNUSVZJVFlfUFJPSkVDVF9JRF9BTkRfUExBTk5JTkciLCJBQ1RJVklUWV9EVVJBVElPTl9PRl9QUk9KRUNUIiwiQUNUSVZJVFlfVEVBTV9MRUFERVIiLCJBQ1RJVklUWV9TQU1FX0FTX1BST1BPU0VEX1NUQVJUX0RBVEUiLCJBQ1RJVklUWV9TQU1FX0FTX1BST1BPU0VEX0FQUFJPVkFMX0RBVEUiLCJBQ1RJVklUWV9JREVOVElGSUNBVElPTiIsIkFDVElWSVRZX0xBU1RfVVBEQVRFRF9CWSIsIkFDVElWSVRZX0xBU1RfVVBEQVRFRF9PTiIsIkFDVElWSVRZX0ZVTkRJTkciLCJBRl9GVU5ESU5HX0ZVTkRJTkdHUk9VUF9GVU5ESU5HSVRFTSIsIkFDVElWSVRZX1NFQ1RPUlMiLCJBQ1RJVklUWV9QUklNQVJZX1NFQ1RPUlMiLCJBQ1RJVklUWV9TRUNPTkRBUllfU0VDVE9SUyIsIkFDVElWSVRZX1NUUlVDVFVSRVMiLCJBQ1RJVklUWV9TVFJVQ1RVUkVTX0FERF9TVFJVQ1RVUkUiLCJBQ1RJVklUWV9PUkdBTklaQVRJT05TIiwiQUNUSVZJVFlfT1JHQU5JWkFUSU9OU19ET05PUl9PUkdBTklaQVRJT04iLCJBQ1RJVklUWV9PUkdBTklaQVRJT05TX0JFTkVGSUNJQVJZX0FHRU5DWSIsIkFDVElWSVRZX09SR0FOSVpBVElPTlNfQ09OVFJBQ1RJTkdfQUdFTkNZIiwiQUNUSVZJVFlfT1JHQU5JWkFUSU9OU19FWEVDVVRJTkdfQUdFTkNZIiwiQUNUSVZJVFlfT1JHQU5JWkFUSU9OU19JTVBMRU1FTlRJTkdfQUdFTkNZIiwiQUNUSVZJVFlfT1JHQU5JWkFUSU9OU19SRUdJT05BTF9HUk9VUCIsIkFDVElWSVRZX09SR0FOSVpBVElPTlNfUkVMQVRFRF9HT1ZFUk5NRU5UX09SR0FOSVpBVElPTiIsIkFDVElWSVRZX09SR0FOSVpBVElPTlNfU0VDVE9SX0dST1VQIiwiQUREX0ZVTkRJTkdfQVVUTyIsIkFDVElWSVRZX09SR0FOSVpBVElPTlNfQkVORUZJQ0lBUllfQUdFTkNZX0FERF9GVU5ESU5HX0FVVE8iLCJBQ1RJVklUWV9PUkdBTklaQVRJT05TX0NPTlRSQUNUSU5HX0FHRU5DWV9BRERfRlVORElOR19BVVRPIiwiQUNUSVZJVFlfT1JHQU5JWkFUSU9OU19ET05PUl9PUkdBTklaQVRJT05fQUREX0ZVTkRJTkdfQVVUTyIsIkFDVElWSVRZX09SR0FOSVpBVElPTlNfRVhFQ1VUSU5HX0FHRU5DWV9BRERfRlVORElOR19BVVRPIiwiQUNUSVZJVFlfT1JHQU5JWkFUSU9OU19JTVBMRU1FTlRJTkdfQUdFTkNZX0FERF9GVU5ESU5HX0FVVE8iLCJBQ1RJVklUWV9PUkdBTklaQVRJT05TX1JFR0lPTkFMX0dST1VQX0FERF9GVU5ESU5HX0FVVE8iLCJBQ1RJVklUWV9PUkdBTklaQVRJT05TX1JFU1BPTlNJQkxFX09SR0FOSVpBVElPTl9BRERfRlVORElOR19BVVRPIiwiQUNUSVZJVFlfT1JHQU5JWkFUSU9OU19TRUNUT1JfR1JPVVBfQUREX0ZVTkRJTkdfQVVUTyIsIkFDVElWSVRZX0ZVTkRJTkdfU0VBUkNIIiwiQUNUSVZJVFlfRlVORElOR19TRUFSQ0hfT1JHQU5JWkFUSU9OIiwiQUNUSVZJVFlfRlVORElOR19TRUxFQ1RfT1JHX1RZUEUiLCJBQ1RJVklUWV9QUk9HUkFNIiwiQUNUSVZJVFlfUExBTk5JTkciLCJBQ1RJVklUWV9DT05UQUNUIiwiQUNUSVZJVFlfRE9DVU1FTlRTX0FERF9ET0NVTUVOVCIsIkFDVElWSVRZX0RPQ1VNRU5UU19BRERfV0VCTElOSyIsIkFDVElWSVRZX0lTU1VFU19BRERfSVNTVUUiLCJBQ1RJVklUWV9JU1NVRVNfREVMRVRFX0lTU1VFIiwiQUNUSVZJVFlfSVNTVUVTX0FERF9NRUFTVVJFIiwiQUNUSVZJVFlfSVNTVUVTX0RFTEVURV9NRUFTVVJFIiwiQUNUSVZJVFlfSVNTVUVTX0FERF9BQ1RPUiIsIkFDVElWSVRZX0lTU1VFU19ERUxFVEVfQUNUT1IiLCJBQ1RJVklUWV9ESVNCVVJTRU1FTlRTX0ZVTkRJTkdfRkxPV1NfT1JHUk9MRV9BRERfSU1QTEVNRU5USU5HX0FHRU5DWSIsIkFDVElWSVRZX0RJU0JVUlNFTUVOVFNfRlVORElOR19GTE9XU19PUkdST0xFX0FERF9DT05UUkFDVElOR19BR0VOQ1kiLCJBQ1RJVklUWV9ESVNCVVJTRU1FTlRTX0ZVTkRJTkdfRkxPV1NfT1JHUk9MRV9BRERfQkVORUZJQ0lBUllfQUdFTkNZIiwiQUNUSVZJVFlfRElTQlVSU0VNRU5UU19GVU5ESU5HX0ZMT1dTX09SR1JPTEVfQUREX0RPTk9SX09SR0FOSVpBVElPTiIsIkFDVElWSVRZX0RJU0JVUlNFTUVOVFNfRlVORElOR19GTE9XU19PUkdST0xFX0FERF9FWEVDVVRJTkdfQUdFTkNZIiwiQUNUSVZJVFlfRElTQlVSU0VNRU5UU19GVU5ESU5HX0ZMT1dTX09SR1JPTEVfQUREX1JFR0lPTkFMX0dST1VQIiwiQUNUSVZJVFlfRElTQlVSU0VNRU5UU19GVU5ESU5HX0ZMT1dTX09SR1JPTEVfQUREX1JFU1BPTlNJQkxFX09SR0FOSVpBVElPTiIsIkFDVElWSVRZX0RJU0JVUlNFTUVOVFNfRlVORElOR19GTE9XU19PUkdST0xFX0FERF9TRUNUT1JfR1JPVVAiLCJBQ1RJVklUWV9DT01NSVRNRU5UU19GVU5ESU5HX0ZMT1dTX09SR1JPTEVfQUREX0lNUExFTUVOVElOR19BR0VOQ1kiLCJBQ1RJVklUWV9DT01NSVRNRU5UU19GVU5ESU5HX0ZMT1dTX09SR1JPTEVfQUREX0NPTlRSQUNUSU5HX0FHRU5DWSIsIkFDVElWSVRZX0NPTU1JVE1FTlRTX0ZVTkRJTkdfRkxPV1NfT1JHUk9MRV9BRERfQkVORUZJQ0lBUllfQUdFTkNZIiwiQUNUSVZJVFlfQ09NTUlUTUVOVFNfRlVORElOR19GTE9XU19PUkdST0xFX0FERF9ET05PUl9PUkdBTklaQVRJT04iLCJBQ1RJVklUWV9DT01NSVRNRU5UU19GVU5ESU5HX0ZMT1dTX09SR1JPTEVfQUREX0VYRUNVVElOR19BR0VOQ1kiLCJBQ1RJVklUWV9DT01NSVRNRU5UU19GVU5ESU5HX0ZMT1dTX09SR1JPTEVfQUREX1JFR0lPTkFMX0dST1VQIiwiQUNUSVZJVFlfQ09NTUlUTUVOVFNfRlVORElOR19GTE9XU19PUkdST0xFX0FERF9SRVNQT05TSUJMRV9PUkdBTklaQVRJT04iLCJBQ1RJVklUWV9DT01NSVRNRU5UU19GVU5ESU5HX0ZMT1dTX09SR1JPTEVfQUREX1NFQ1RPUl9HUk9VUCIsIkFDVElWSVRZX0VYUEVORElUVVJFU19GVU5ESU5HX0ZMT1dTX09SR1JPTEVfQUREX0lNUExFTUVOVElOR19BR0VOQ1kiLCJBQ1RJVklUWV9FWFBFTkRJVFVSRVNfRlVORElOR19GTE9XU19PUkdST0xFX0FERF9DT05UUkFDVElOR19BR0VOQ1kiLCJBQ1RJVklUWV9FWFBFTkRJVFVSRVNfRlVORElOR19GTE9XU19PUkdST0xFX0FERF9CRU5FRklDSUFSWV9BR0VOQ1kiLCJBQ1RJVklUWV9FWFBFTkRJVFVSRVNfRlVORElOR19GTE9XU19PUkdST0xFX0FERF9ET05PUl9PUkdBTklaQVRJT04iLCJBQ1RJVklUWV9FWFBFTkRJVFVSRVNfRlVORElOR19GTE9XU19PUkdST0xFX0FERF9FWEVDVVRJTkdfQUdFTkNZIiwiQUNUSVZJVFlfRVhQRU5ESVRVUkVTX0ZVTkRJTkdfRkxPV1NfT1JHUk9MRV9BRERfUkVHSU9OQUxfR1JPVVAiLCJBQ1RJVklUWV9FWFBFTkRJVFVSRVNfRlVORElOR19GTE9XU19PUkdST0xFX0FERF9SRVNQT05TSUJMRV9PUkdBTklaQVRJT04iLCJBQ1RJVklUWV9FWFBFTkRJVFVSRVNfRlVORElOR19GTE9XU19PUkdST0xFX0FERF9TRUNUT1JfR1JPVVAiLCJNVEVGX1BST0pFQ1RJT05TIiwiTVRFRl9QUk9KRUNUSU9OU19BTU9VTlQiLCJNVEVGX1BST0pFQ1RJT05TX0NVUlJFTkNZIiwiTVRFRl9QUk9KRUNUSU9OU19QUk9KRUNUSU9OIiwiTVRFRl9QUk9KRUNUSU9OU19EQVRFIiwiVUlVdGlscyIsImhhc2giLCJpIiwibGVuZ3RoIiwiY2hhckNvZGVBdCIsInN0cmluZ1RvSWQiLCJEYXRlIiwibm93IiwiTWF0aCIsInJhbmRvbSIsInRvU3RyaW5nIiwic3Vic3RyaW5nIiwidHJ1bmMiLCJ0ZXh0IiwicmVwbGFjZSIsImNoYXIiLCJ0b1VwcGVyQ2FzZSIsIm9iaiIsIkpTT04iLCJwYXJzZSIsInN0cmluZ2lmeSIsIkFDVElWSVRZX0JVREdFVCIsIkFDVElWSVRZX1NUQVRVUyIsIlNUQVRVU19SRUFTT04iLCJGSU5BTkNJQUxfSU5TVFJVTUVOVCIsIlRZUEVfT0ZfSU1QTEVNRU5UQVRJT04iLCJPQkpFQ1RJVkUiLCJSRVNVTFRTIiwiQlVER0VUX0NPREVfUFJPSkVDVF9JRCIsIkFDVFVBTF9BUFBST1ZBTF9EQVRFIiwiRlVORElOR1MiLCJGVU5ESU5HX0RPTk9SX09SR19JRCIsIklTX0RSQUZUIiwiT1JHX1JPTEVfT1JHX0lEIiwiQURESVRJT05BTF9JTkZPIiwiUFJJTUFSWV9TRUNUT1JTIiwiU0VDT05EQVJZX1NFQ1RPUlMiLCJURVJUSUFSWV9TRUNUT1JTIiwiVEFHX1NFQ1RPUlMiLCJTRUNUT1IiLCJTRUNUT1JfUEVSQ0VOVEFHRSIsIkZJTkFOQ0lOR19JTlNUUlVNRU5UIiwiTU9EQUxJVElFUyIsIkxJTkVfTUlOSVNUUllfUkFOSyIsIkdPVkVSTk1FTlRfQUdSRUVNRU5UX05VTUJFUiIsIkZVTkRJTkdfU1RBVFVTIiwiTE9DQVRJT05TIiwiTE9DQVRJT04iLCJMT0NBVElPTl9QRVJDRU5UQUdFIiwiSU1QTEVNRU5UQVRJT05fTE9DQVRJT04iLCJJTVBMRU1FTlRBVElPTl9MRVZFTCIsIkFQUFJPVkFMX1NUQVRVUyIsIkFQUFJPVkVEX0JZIiwiQVBQUk9WQUxfREFURSIsIlRZUEVfT0ZfQVNTSVNUQU5DRSIsIkVYUEVORElUVVJFX0NMQVNTIiwiRlVORElOR19ERVRBSUxTIiwiTU9ERV9PRl9QQVlNRU5UIiwiRlVORElOR19DTEFTU0lGSUNBVElPTl9EQVRFIiwiQUdSRUVNRU5UIiwiRE9OT1JfT0JKRUNUSVZFIiwiQ09ORElUSU9OUyIsIkFHUkVFTUVOVF9DT0RFIiwiQUdSRUVNRU5UX1RJVExFIiwiUFJPSkVDVF9DQVRFR09SWSIsIlBST0pFQ1RfSU1QTEVNRU5USU5HX1VOSVQiLCJPUkdBTklaQVRJT04iLCJQRVJDRU5UQUdFIiwiQU1QX09SR0FOSVpBVElPTl9ST0xFX0lEIiwiUk9MRSIsIkVYRUNVVElOR19BR0VOQ1kiLCJDT05UUkFDVElOR19BR0VOQ1kiLCJCRU5FRklDSUFSWV9BR0VOQ1kiLCJJTVBMRU1FTlRJTkdfQUdFTkNZIiwiUkVTUE9OU0lCTEVfT1JHQU5JWkFUSU9OIiwiRE9OT1JfT1JHQU5JWkFUSU9OIiwiUkVHSU9OQUxfR1JPVVAiLCJTRUNUT1JfR1JPVVAiLCJCVURHRVRTIiwiQlVER0VUX0NPREUiLCJCVURHRVRfT1JHQU5JWkFUSU9OX0NPREUiLCJBUkNISVZFRCIsIlRSQU5TQUNUSU9OX0RBVEUiLCJUUkFOU0FDVElPTl9UWVBFIiwiQ09NTUlUTUVOVFMiLCJESVNCVVJTRU1FTlRTIiwiRVhQRU5ESVRVUkVTIiwiRVNUSU1BVEVEX0RJU0JVUlNFTUVOVFMiLCJUUkFOU0FDVElPTl9BTU9VTlQiLCJBREpVU1RNRU5UX1RZUEUiLCJBQ1RVQUxfU1RBUlRfREFURSIsIlBST1BPU0VEX1NUQVJUX0RBVEUiLCJBQ1RVQUxfQ09NUExFVElPTl9EQVRFIiwiQ09OVFJBQ1RJTkdfREFURSIsIkRJU0JVUlNFTUVOVF9EQVRFIiwiUFJPUE9TRURfQVBQUk9WQUxfREFURSIsIk9SSUdJTkFMX0NPTVBMRVRJT05fREFURSIsIlBST1BPU0VEX0NPTVBMRVRJT05fREFURSIsIkZJTkFMX0RBVEVfRk9SX0RJU0JVUlNFTUVOVFMiLCJGSU5BTF9EQVRFX0ZPUl9DT05UUkFDVElORyIsIkVGRkVDVElWRV9GVU5ESU5HX0RBVEUiLCJGVU5ESU5HX0NMT1NJTkdfREFURSIsIlJBVElGSUNBVElPTl9EQVRFIiwiTUFUVVJJVFkiLCJMQVNUX0FVRElUX0RBVEUiLCJTSUdOQVRVUkVfREFURSIsIkhVTUFOSVRBUklBTl9BSUQiLCJESVNBU1RFUl9SRVNQT05TRSIsIlBST0dSQU0iLCJQUk9HUkFNX1BFUkNFTlRBR0UiLCJQUk9HUkFNX1NFVFRJTkdTIiwiTkFUSU9OQUxfUExBTl9PQkpFQ1RJVkUiLCJQUklNQVJZX1BST0dSQU1TIiwiU0VDT05EQVJZX1BST0dSQU1TIiwiVEVSVElBUl9QUk9HUkFNUyIsIkdPVkVSTk1FTlRfQVBQUk9WQUxfUFJPQ0VEVVJFUyIsIkpPSU5UX0NSSVRFUklBIiwiVEVBTSIsIlJFSkVDVEVEX0lEIiwiSU5URVJOQUxfSUQiLCJBTVBfSUQiLCJQUk9KRUNUX1RJVExFIiwiREVTQ1JJUFRJT04iLCJNT0RJRklFRF9CWSIsIk1PRElGSUVEX09OIiwiQ1JFQVRFRF9CWSIsIkNSRUFURURfT04iLCJMQVNUX0lNUE9SVEVEX0JZIiwiQ0xJRU5UX0NIQU5HRV9JRCIsIkNMSUVOVF9DUkVBVEVEX09OIiwiQ0xJRU5UX1VQREFURURfT04iLCJJU19QVVNIRUQiLCJBQ1RJVklUWV9HUk9VUCIsIlZFUlNJT04iLCJQUk9KRUNUX0NPTU1FTlRTIiwiTEVTU09OU19MRUFSTkVEIiwiUFJPSkVDVF9JTVBBQ1QiLCJBQ1RJVklUWV9TVU1NQVJZIiwiQ09ORElUSU9OQUxJVElFUyIsIlBST0pFQ1RfTUFOQUdFTUVOVCIsIkFfQ19DSEFQVEVSIiwiQ1JJU19OVU1CRVIiLCJJQVRJX0lERU5USUZJRVIiLCJBQ1RJVklUWV9JTlRFUk5BTF9JRFMiLCJISUVSQVJDSElDQUxfVkFMVUUiLCJISUVSQVJDSElDQUxfVkFMVUVfUEFSVFMiLCJISUVSQVJDSElDQUxfVkFMVUVfREVQVEgiLCJQUENfQU1PVU5UIiwiUlBDX0FNT1VOVCIsIlBQQ19BTk5VQUxfQlVER0VUUyIsIkFNT1VOVCIsIkNVUlJFTkNZIiwiRlVORElOR19EQVRFIiwiQ09NUE9ORU5UUyIsIlRPVEFMX05VTUJFUl9PRl9GVU5ESU5HX1NPVVJDRVMiLCJTT1VSQ0VfUk9MRSIsIkFNUF9GVU5ESU5HX0lEIiwiSVNTVUVTIiwiSVNTVUVfREFURSIsIklTU1VFX05BTUUiLCJNRUFTVVJFUyIsIk1FQVNVUkVfTkFNRSIsIk1FQVNVUkVfREFURSIsIkFDVE9SUyIsIkFDVE9SX05BTUUiLCJTVFJVQ1RVUkVTIiwiU1RSVUNUVVJFU19USVRMRSIsIlNUUlVDVFVSRVNfREVTQ1JJUFRJT04iLCJTVFJVQ1RVUkVTX0xBVElUVURFIiwiU1RSVUNUVVJFU19MT05HSVRVREUiLCJTVFJVQ1RVUkVTX0NPTE9SIiwiU1RSVUNUVVJFU19MQVQiLCJTVFJVQ1RVUkVTX0xORyIsIlNUUlVDVFVSRVNfU0hBUEUiLCJTVFJVQ1RVUkVTX1BPSU5UIiwiU1RSVUNUVVJFU19QT0xZR09OIiwiU1RSVUNUVVJFU19QT0xZTElORSIsIlNUUlVDVFVSRVNfQ09PUkRJTkFURVMiLCJDT01QT05FTlRfVFlQRSIsIkNPTVBPTkVOVF9USVRMRSIsIkNPTVBPTkVOVF9GVU5ESU5HIiwiQ09NUE9ORU5UX0RFU0NSSVBUSU9OIiwiQ09NUE9ORU5UX09SR0FOSVpBVElPTiIsIkZVTkRJTkdfQU1PVU5UX0lEIiwiRVhUUkFfSU5GTyIsIlZBTFVFIiwiQUNST05ZTSIsIlRZUEVfT0ZfQ09PUEVSQVRJT04iLCJBTk5VQUxfUFJPSkVDVF9CVURHRVRfSUQiLCJUWVBFIiwiWUVBUiIsIkdST1VQX1ZFUlNJT05FRF9GVU5ESU5HIiwiQUNUSVZFX0xJU1QiLCJBQ1RJVkUiLCJERUxFR0FURURfQ09PUEVSQVRJT04iLCJERUxFR0FURURfUEFSVE5FUiIsIkZJTkFOQ0lOR19JRCIsIkRJU0JVUlNFTUVOVF9PUkRFUl9JRCIsIlBMRURHRSIsIkNBUElUQUxfU1BFTkRJTkdfUEVSQ0VOVEFHRSIsIlJFUE9SVElOR19EQVRFIiwiUkVDSVBJRU5UX1JPTEUiLCJSRUNJUElFTlRfT1JHQU5JWkFUSU9OIiwiVEVNUE9SQUxfSUQiLCJNSU5JU1RSWV9DT0RFIiwiUFJPSkVDVF9DT0RFIiwiRlkiLCJJTkRJUkVDVF9PTl9CVURHRVQiLCJJTVBMRU1FTlRBVElPTl9MRVZFTFNfRVhUUkFfSU5GTyIsIklNUExFTUVOVEFUSU9OX0xPQ0FUSU9OX0VYVFJBX0lORk8iLCJET05PUl9DT05UQUNUIiwiUFJPSkVDVF9DT09SRElOQVRPUl9DT05UQUNUIiwiU0VDVE9SX01JTklTVFJZX0NPTlRBQ1QiLCJNT0ZFRF9DT05UQUNUIiwiSU1QTEVNRU5USU5HX0VYRUNVVElOR19BR0VOQ1lfQ09OVEFDVCIsIkNPTlRBQ1QiLCJPUkdBTklaQVRJT05fR1JPVVAiLCJGSVhFRF9FWENIQU5HRV9SQVRFIiwiUFJJTUFSWV9DT05UQUNUIiwiQUNUSVZJVFlfRE9DVU1FTlRTIiwiRE9DVU1FTlRfVFlQRSIsIklTTzIiLCJQUk9KRUNUSU9OIiwiUElQRUxJTkUiLCJQUk9KRUNUSU9OX0RBVEUiLCJTQU1FX0FTX1BST1BPU0VEX1NUQVJUX0RBVEVfTEFCRUwiLCJTQU1FX0FTX1BST1BPU0VEX0FQUFJPVkFMX0RBVEVfTEFCRUwiLCJERVBFTkRFTkNZX0lNUExFTUVOVEFUSU9OX0xFVkVMX1BSRVNFTlQiLCJERVBFTkRFTkNZX0lNUExFTUVOVEFUSU9OX0xFVkVMX1ZBTElEIiwiREVQRU5ERU5DWV9JTVBMRU1FTlRBVElPTl9MT0NBVElPTl9QUkVTRU5UIiwiREVQRU5ERU5DWV9JTVBMRU1FTlRBVElPTl9MT0NBVElPTl9WQUxJRCIsIkRFUEVOREVOQ1lfUFJPSkVDVF9DT0RFX09OX0JVREdFVCIsIkRFUEVOREVOQ1lfT05fQlVER0VUIiwiREVQRU5ERU5DWV9UUkFOU0FDVElPTl9QUkVTRU5UIiwiREVQRU5ERU5DWV9DT01QT05FTlRfRlVORElOR19PUkdfVkFMSUQiLCJBUF9TRUNUSU9OX0lEUyIsImtleSIsImZtUGF0aCIsIkZNQyIsInNlY3Rpb25QYXRoIiwiQUNUSVZJVFlfSU5URVJOQUxfSURTX0NPTFMiLCJBQ1RJVklUWV9QTEFOTklOR19DT0xTIiwiQUNUSVZJVFlfTE9DQVRJT05fQ09MUyIsIkFDVElWSVRZX0ZVTkRJTkdfQ09MUyIsIkFDVElWSVRZX0NPTlRBQ1RfQ09MUyIsIkFQX0ZVTkRJTkdTX1RBQkxFX0NPTFMiLCJNVUxUSV9TRUxFQ1RfTUlOX1NJWkUiLCJNVUxUSV9TRUxFQ1RfTUFYX1NJWkUiLCJ0b0ZpZWxkTmFtZXMiLCJsaXN0T2ZOYW1lcyIsIm1hcCIsInRvRmllbGROYW1lIiwibmFtZSIsInRvTG93ZXJDYXNlIiwidG9PcmlnaW5hbExhYmVsIiwiZmllbGROYW1lIiwiY2FwaXRhbGl6ZSIsIk5PVElGSUNBVElPTl9PUklHSU5fQVBJX1NFQ1VSSVRZIiwiTk9USUZJQ0FUSU9OX09SSUdJTl9BUElfTkVUV09SSyIsIk5PVElGSUNBVElPTl9PUklHSU5fQVBJX1NZTkNVUCIsIk5PVElGSUNBVElPTl9PUklHSU5fQVBJX0dFTkVSQUwiLCJOT1RJRklDQVRJT05fT1JJR0lOX0RBVEFCQVNFIiwiTk9USUZJQ0FUSU9OX09SSUdJTl9BVVRIRU5USUNBVElPTiIsIk5PVElGSUNBVElPTl9PUklHSU5fV09SS1NQQUNFX0ZJTFRFUiIsIk5PVElGSUNBVElPTl9PUklHSU5fV09SS1NQQUNFIiwiTk9USUZJQ0FUSU9OX09SSUdJTl9TWU5DVVBfUFJPQ0VTUyIsIk5PVElGSUNBVElPTl9PUklHSU5fQ1VSUkVOQ1lfTUFOQUdFUiIsIk5PVElGSUNBVElPTl9PUklHSU5fREFURVMiLCJOT1RJRklDQVRJT05fT1JJR0lOX0FDVElWSVRZIiwiTk9USUZJQ0FUSU9OX09SSUdJTl9SRVNPVVJDRSIsIk5PVElGSUNBVElPTl9PUklHSU5fSTE4TkVYVCIsIk5PVElGSUNBVElPTl9PUklHSU5fVVBEQVRFX0NIRUNLIiwiTk9USUZJQ0FUSU9OX09SSUdJTl9VUERBVEUiLCJOT1RJRklDQVRJT05fT1JJR0lOX1NFVFVQIiwiTk9USUZJQ0FUSU9OX09SSUdJTl9TRVRUSU5HUyIsIk5PVElGSUNBVElPTl9TRVZFUklUWV9XQVJOSU5HIiwiTk9USUZJQ0FUSU9OX1NFVkVSSVRZX0lORk8iLCJOT1RJRklDQVRJT05fU0VWRVJJVFlfRVJST1IiLCJOT1RJRklDQVRJT05fRVJST1JfTEVWRUxfTUlOT1IiLCJOT1RJRklDQVRJT05fRVJST1JfTEVWRUxfQkxPQ0tFUiIsIk5PVElGSUNBVElPTl9PUklHSU5fV1JPTkdfTUVUSE9EX1VTQUdFIiwiRVJST1JfQ09ERV9OT19DT05ORUNUSVZJVFkiLCJFUlJPUl9DT0RFX0FDQ0VTU19ERU5JRUQiLCJNU0dfSU5WQUxJRF9VUkwiLCJNU0dfVElNRU9VVCIsIk1TR19VTktOT1dOX05FVFdPUktfRVJST1IiLCJNU0dfQU1QX1VOUkVBQ0hBQkxFIiwiR0VORVJBTF9DT05ORUNUSU9OX0VSUk9SUyIsIkRPTk9SX0FHRU5DWSIsIk9SR19ST0xFX05BTUVTIiwiQUNUVUFMIiwiUExBTk5FRCIsIkFDVFVBTF9DT01NSVRNRU5UUyIsIkFjdGl2aXR5Q29uc3RhbnRzIiwiQUNUVUFMX0RJU0JVUlNFTUVOVFMiLCJBQ1RVQUxfRVhQRU5ESVRVUkVTIiwiUExBTk5FRF9DT01NSVRNRU5UUyIsIlBMQU5ORURfRElTQlVSU0VNRU5UUyIsIlBMQU5ORURfRVhQRU5ESVRVUkVTIiwiVU5BTExPQ0FURURfRElTQlVSU0VNRU5UUyIsIkRFTElWRVJZX1JBVEUiLCJBREpVU1RNRU5UX1RZUEVTIiwiQURKVVNUTUVOVF9UWVBFU19BUF9PUkRFUiIsIk5FV19BQ1RJVklUWV9JRCIsIlBST1BPU0VEX1BST0pFQ1RfQ09TVCIsIlJFVklTRURfUFJPSkVDVF9DT1NUIiwiQUNST05ZTV9ET05PUl9PUkdBTklaQVRJT04iLCJBQ1JPTllNX0VYRUNVVElOR19BR0VOQ1kiLCJBQ1JPTllNX0lNUExFTUVOVElOR19BR0VOQ1kiLCJBQ1JPTllNX0JFTkVGSUNJQVJZX0FHRU5DWSIsIkFDUk9OWU1fUkVTUE9OU0lCTEVfT1JHQU5JWkFUSU9OIiwiQVBQUk9WQUxfU1RBVFVTX0NSRUFURUQiLCJBUFBST1ZBTF9TVEFUVVNfQVBQUk9WRUQiLCJBUFBST1ZBTF9TVEFUVVNfRURJVEVEIiwiQVBQUk9WQUxfU1RBVFVTX1NUQVJURURfQVBQUk9WRUQiLCJBUFBST1ZBTF9TVEFUVVNfU1RBUlRFRCIsIkFQUFJPVkFMX1NUQVRVU19OT1RfQVBQUk9WRUQiLCJBUFBST1ZBTF9TVEFUVVNfUkVKRUNURUQiLCJPTl9CVURHRVQiLCJJTlRFUk5BVElPTkFMIiwiQ09VTlRSWSIsIlJFTEFURURfRE9DVU1FTlRTIiwiVE1QX0VOVElUWV9WQUxJREFUT1IiLCJBTFdBWVNfUkVRVUlSRUQiLCJGVU5ESU5HX0FDVElWRV9MSVNUIiwiRlVORElOR19UWVBFX09GX0FTU0lTVEFOQ0UiLCJGVU5ESU5HX0RFVEFJTFNfUEFUSCIsIkZVTkRJTkdfQ1VSUkVOQ1lfUEFUSCIsIk1URUZfQ1VSUkVOQ1lfUEFUSCIsIlBQQ19DVVJSRU5DWV9QQVRIIiwiUlBDX0NVUlJFTkNZX1BBVEgiLCJDT01QT05FTlRfQ1VSUkVOQ1lfUEFUSCIsIkRJU0JVUlNFTUVOVFNfUEFUSCIsIkFDVElWSVRZX0lOVEVSTkFMX0lEU19JTlRFUk5BTF9JRF9QQVRIIiwiQUNUSVZJVFlfSU5URVJOQUxfSURTX09SR0FOSVpBVElPTl9QQVRIIiwiTE9DQVRJT05fUEFUSCIsIk5BVElPTkFMX1BMQU5fT0JKRUNUSVZFX1BBVEgiLCJQUklNQVJZX1BST0dSQU1fUEFUSCIsIlNFQ09OREFSWV9QUk9HUkFNX1BBVEgiLCJQUklNQVJZX1NFQ1RPUl9QQVRIIiwiU0VDT05EQVJZX1NFQ1RPUl9QQVRIIiwiVEVSVElBUllfU0VDVE9SX1BBVEgiLCJET05PUl9PUkdBTklaQVRJT05TX1BBVEgiLCJSRVNQT05TSUJMRV9PUkdBTklaQVRJT05fQlVER0VUU19QQVRIIiwiUkVMQVRFRF9PUkdTX1BBVEhTIiwiVmFsdWVDb25zdGFudHMiLCJvcmdSb2xlIiwiUkVMQVRFRF9PUkdTX09SR0FOSVpBVElPTl9QQVRIUyIsIlJJQ0hfVEVYVF9GSUVMRFMiLCJTZXQiLCJQQVRIU19XSVRIX1RSRUVfU1RSVUNUVVJFIiwiUEFUSFNfV0lUSF9ISUVSQVJDSElDQUxfVkFMVUVTIiwiQUNUSVZJVFlfQ09OVEFDVF9QQVRIUyIsIlRSQU5TQUNUSU9OX1RZUEVTIiwiVFJBTlNBQ1RJT05fVFlQRVNfT1JERVJFRCIsIkZVTkRJTkdfVFJBTlNBQ1RJT05fVFlQRVMiLCJBREpVU1RNRU5UX1RZUEVfUEFUSFMiLCJ0dCIsIkZVTkRJTkdfQ1VSUkVOQ1lfUEFUSFMiLCJQQVRIU19GT1JfQUNUSVZJVFlfQ1VSUkVOQ1kiLCJQQVRIU19GT1JfQ1VSUkVOQ1kiLCJET19OT1RfSFlEUkFURV9GSUVMRFNfTElTVCIsIkFMVEVSTkFURV9WQUxVRV9QQVRIIiwiQUNUSVZJVFlfRklFTERTX0ZNX1BBVEgiLCJGZWF0dXJlTWFuYWdlckNvbnN0YW50cyIsIlBSRUZJWF9BQ1RJVklUWSIsIlBSRUZJWF9DT05UQUNUIiwiUFJFRklYX1JFU09VUkNFIiwiUFJFRklYX0NPTU1PTiIsIlBSRUZJWF9MSVNUIiwiRklFTERfUEFUSCIsIkZJRUxEX09QVElPTlMiLCJGSUVMRF9PUFRJT05fVVNBQkxFIiwiTElTVF9NQVhfU0laRSIsIlJFR0VYX1BBVFRFUk4iLCJGSUVMRF9OQU1FIiwiRklFTERfTEFCRUwiLCJGSUVMRF9SRVFVSVJFRCIsIkZJRUxEX1VOSVFVRV9DT05TVFJBSU5UIiwiRklFTERfVFlQRSIsIkZJRUxEX0xFTkdUSCIsIkZJRUxEX1BFUkNFTlRBR0UiLCJGSUVMRF9QRVJDRU5UQUdFX0NPTlNUUkFJTlQiLCJGSUVMRF9JVEVNX1RZUEUiLCJGSUVMRF9JTVBPUlRBQkxFIiwiRklFTERfSURfT05MWSIsIkZJRUxEX01VTFRJUExFX1ZBTFVFU19BTExPV0VEIiwiRklFTERfVFJFRV9DT0xMRUNUSU9OIiwiRklFTERfQ0hJTERSRU4iLCJGSUVMRF9ERVBFTkRFTkNJRVMiLCJGSUVMRF9UWVBFX0xJU1QiLCJGSUVMRF9UWVBFX09CSkVDVCIsIkZJRUxEX1RZUEVfU1RSSU5HIiwiRklFTERfVFlQRV9MT05HIiwiRklFTERfVFlQRV9GTE9BVCIsIkZJRUxEX1RZUEVfQk9PTEVBTiIsIkZJRUxEX1RZUEVfREFURSIsIkZJRUxEX1RZUEVfVElNRVNUQU1QIiwibG9nZ2VyIiwiRmllbGRzTWFuYWdlciIsImZpZWxkc01hbmFnZXIiLCJMb2dnZXJNYW5hZ2VyIiwibmV3RmllbGRzTWFuYWdlciIsImFzc2lnbiIsImZpZWxkc0RlZiIsInBvc3NpYmxlVmFsdWVzQ29sbGVjdGlvbiIsImN1cnJlbnRMYW5ndWFnZSIsImRlYnVnIiwiX2ZpZWxkc0RlZiIsIl9wb3NzaWJsZVZhbHVlc01hcCIsInB2IiwiaWQiLCJGUEMiLCJfZmllbGRQYXRoc0VuYWJsZWRTdGF0dXNNYXAiLCJfbGFuZyIsIkNvbnN0YW50cyIsIl9kZWZhdWx0TGFuZyIsImNsZWFudXAiLCJmZCIsImNoaWxkcmVuIiwiZmllbGRfbGFiZWwiLCJrZXlzIiwibGFuZyIsImZpZWxkUGF0aCIsInZhbHVlcyIsInBhdGhQYXJ0cyIsImlzRmllbGRQYXRoRW5hYmxlZCIsInVuZGVmaW5lZCIsIl9idWlsZEZpZWxkUGF0aFN0YXR1cyIsInNwbGl0IiwiY3VycmVudFRyZWUiLCJpc0Rpc2FibGVkIiwic29tZSIsImZpbmQiLCJmaWVsZCIsImZpZWxkX25hbWUiLCJwYXJ0Iiwib3JpZ1ZhbHVlIiwidHJuVmFsdWUiLCJvcHRpb25zIiwib3B0aW9uIiwib3B0IiwidHJhbnNsYXRpb25zIiwiZ2V0RmllbGREZWYiLCJkZXBlbmRlbmNpZXMiLCJmaWVsZFBhdGhzIiwiX2dldEZpZWxkUGF0aHNCeURlcGVuZGVuY2llcyIsImN1cnJlbnRQYXRoIiwiaGFzRGVwZW5kZW5jeSIsImluY2x1ZGVzIiwiZGVwIiwiZ2V0T3B0aW9uVHJhbnNsYXRpb24iLCJnZXRWYWx1ZSIsInBhcnRzIiwibmV3TGlzdCIsIm5ld0VsZW1lbnQiLCJjdXJyZW50IiwiY29uY2F0IiwidmFsIiwiQ0xJRU5UX0NIQU5HRV9JRF9QUkVGSVgiLCJOQU1FIiwiTEFTVF9OQU1FIiwiVElUTEUiLCJPUkdBTklaQVRJT05fTkFNRSIsIkZVTkNUSU9OIiwiT0ZGSUNFX0FERFJFU1MiLCJDUkVBVE9SIiwiT1JHQU5JU0FUSU9OX0NPTlRBQ1RTIiwiT1JHQU5JU0FUSU9OIiwiRU1BSUwiLCJQSE9ORSIsIkVYVEVOU0lPTl9WQUxVRSIsIkZBWCIsIlRNUF9GT1JNX0lEIiwiVE1QX1VOSVFVRV9JRCIsIlRNUF9IWURSQVRFRCIsIlRNUF9FUlJPUlMiLCJUTVBfQ09OVEFDVF9MT0FERUQiLCJUTVBfQ09OVEFDVF9MT0FESU5HIiwiVE1QX0ZJRUxEUyIsIkN1cnJlbmN5UmF0ZXNNYW5hZ2VyIiwiY3VycmVuY3lSYXRlcyIsImJhc2VDdXJyZW5jeSIsImRhdGVVdGlscyIsImVycm9yTm90aWZpY2F0aW9uSGVscGVyIiwiX2N1cnJlbmN5UmF0ZXMiLCJfYmFzZUN1cnJlbmN5IiwiX2N1cnJuY2llc1dpdGhFeGNoYW5nZVJhdGVzIiwiX2dldEN1cnJlbmNpZXNXaXRoRXhjaGFuZ2VSYXRlcyIsIl90cmFuc2xhdGUiLCJfZGF0ZVV0aWxzIiwiX2Vycm9yTm90aWZpY2F0aW9uSGVscGVyIiwiY3VycmVuY3lGcm9tIiwiY3VycmVuY3lUbyIsImRhdGVUb0ZpbmQiLCJmaXhlZEV4Y2hhbmdlUmF0ZSIsImNvbnZlcnRDdXJyZW5jeSIsInRpbWVEYXRlVG9GaW5kIiwiZ2V0VGltZSIsImN1cnJlbmNpZXNUb1NlYXJjaERpcmVjdCIsIml0ZW0iLCJmcm9tIiwidG8iLCJnZXRFeGNoYW5nZVJhdGUiLCJjdXJyZW5jaWVzVG9TZWFyY2hJbnZlcnNlIiwiY29udmVydFZpYUJhc2VDdXJyZW5jeSIsIl9nZXRDdXJyZW5jeUVycm9yIiwiZnVuZGluZ0RldGFpbHMiLCJ0b3RhbCIsImNvbnZlcnRUcmFuc2FjdGlvbkFtb3VudFRvQ3VycmVuY3kiLCJmdW5kaW5nRGV0YWlsIiwiYW1vdW50IiwiZGF0ZSIsImN1cnJlbmN5UmF0ZSIsImZvcm1hdERhdGVGb3JBUEkiLCJ0cmFuc2FjdGlvbkRhdGUiLCJ0cmFuc2FjdGlvbkFtb3VudCIsImNvbnZlcnRBbW91bnRUb0N1cnJlbmN5IiwiY3VycmVuY2llc1RvU2VhcmNoIiwibG93ZXJFbmQiLCJoaWdoZXJFbmQiLCJyYXRlcyIsIm1pZGRsZSIsImZsb29yIiwiZGlmZmVyZW5jZSIsImFicyIsImRpZmZlcmVuY2UxIiwicmF0ZSIsImVycm9yTWVzYWdlIiwibm90aWZFcnJvckN1cnJlbmN5IiwiY3JlYXRlTm90aWZpY2F0aW9uIiwiRXJyb3JDb25zdGFudHMiLCJyYXRlRnJvbVRvQmFzZSIsInJhdGVCYXNlVG9UbyIsInJhdGVUb1RvQmFzZSIsInJhdGVCYXNlVG9Gcm9tIiwiY3MiLCJhZGQiLCJleGNoYW5nZVJhdGVzIiwiUG9zc2libGVWYWx1ZXNNYW5hZ2VyIiwibGFuZ1N0YXRlIiwiX2xhbmdTdGF0ZSIsIkxvZ2dlciIsIl9sb2dnZXIiLCJoT3B0aW9ucyIsImJ1aWxkSGllcmFyY2hpY2FsRGF0YSIsInNlbGVjdGVkSWQiLCJ2YWx1ZVBhcnRzIiwiZ2V0SGllcmFyY2hpY2FsVmFsdWUiLCJmb3JtYXRWYWx1ZVBhcnRzIiwibmFtZVBhcnRzIiwicGFyZW50SWQiLCJyZXZlcnNlIiwiX2ZpbGxIaWVyYXJjaGljYWxEZXB0aCIsImVycm9yIiwiZGVwdGgiLCJwYXJlbnQiLCJvIiwicmVzVmFsIiwiZGVmYXVsdExhbmciLCJjdXJyZW5jeVJhdGVzTWFuYWdlciIsImZpbHRlcnMiLCJpc09SRmlsdGVyIiwiaXNMb2NhdGlvbnMiLCJpc0N1cnJlbmN5IiwiaGFzIiwidmlzaWJsZSIsImRpc3BsYXlIaWVyYXJjaGljYWxWYWx1ZSIsImlzQ3VycmVuY3lPcHRpb25Vc2FibGUiLCJmaWx0ZXJCeSIsImZpbHRlciIsIm9wdGlvbkRhdGFUb0NoZWNrIiwicGF0aCIsImhhc0V4Y2hhbmdlUmF0ZXMiLCJjdXJyZW5jaWVzV2l0aEV4Y2hhbmdlUmF0ZXMiLCJpc0FjdGl2ZSIsImV4dHJhX2luZm8iLCJhY3RpdmUiLCJvcHRpb25zT2JqIiwicmV2ZXJzZVNvcnRPcHRpb25zIiwiYWRkZWQiLCJvcHRpb25zTGlzdCIsImlkc1N0YWNrIiwicG9wIiwicmV2ZXJzZVNvcnRlZENoaWxkcmVuIiwiRkVBVFVSRV9NQU5BR0VSIiwiRmVhdHVyZU1hbmFnZXIiLCJmbVRyZWUiLCJfZm1UcmVlIiwibG9nZ2VyTWFuYWdlciIsIm9ubHlMYXN0U2VnbWVudCIsIl9sb2dnZXJNYW5hZ2VyIiwibGFzdEZNU3ViVHJlZSIsInNlZ21lbnRzIiwiX2dldFBhdGhTZWdtZW50cyIsImZvdW5kTGFzdEZNU3ViVHJlZSIsImV2ZXJ5Iiwic2VnbWVudCIsIl9fZW5hYmxlZCIsImZtU2V0dGluZyIsImZpbmRGTVNldHRpbmciLCJyZWR1Y2UiLCJjdXJyZW50Rk1TZXR0aW5nIiwiZW5hYmxlZCIsImN1cnJlbnRGTVRyZWUiLCJzZWdtZW50Rk0iLCJfY3VycmVudEZNIiwiaXNGTVNldHRpbmdFbmFibGVkIiwiaGFzRk1TZXR0aW5nIiwiQVBMYWJlbCIsImxhYmVsIiwiZG9udFRyYW5zbGF0ZSIsImxhYmVsQ2xhc3MiLCJ0b29sdGlwIiwiZ2V0Q29udGVudCIsIkFQRmllbGQiLCJUYWJsaWZ5IiwiY29udGVudCIsImNvbHMiLCJjIiwicm93cyIsImNlaWwiLCJ0YWJsZUNvbnRlbnQiLCJyb3dDb250ZW50IiwiaiIsInN0cmluZ1RvVW5pcXVlSWQiLCJjb2x1bW5zIiwiY2VsbFdpZHRoIiwiY2VsbHdpZHRoU3R5bGUiLCJ0YWJsaWZ5X291dGVyX2NlbGwiLCJ0YWJsaWZ5X2lubmVyX2NlbGwiLCJmbGV4IiwibnVtYmVyIiwiQVBQZXJjZW50YWdlRmllbGQiLCJyYXdOdW1iZXJUb0Zvcm1hdHRlZFN0cmluZyIsInBlcmNlbnRhZ2UiLCJ0aXRsZUNsYXNzIiwiYWxpZ25SaWdodCIsIkFQUGVyY2VudGFnZUxpc3QiLCJsaXN0RmllbGQiLCJ2YWx1ZUZpZWxkIiwicGVyY2VudGFnZUZpZWxkIiwibGlzdFRpdGxlIiwiZ2V0SXRlbVRpdGxlIiwiYWN0aXZpdHlGaWVsZHNNYW5hZ2VyIiwicGVyY2VudFRpdGxlQ2xhc3MiLCJhY3Rpdml0eSIsInRhYmxpZnkiLCJwZXJjZW50VmFsdWVDbGFzcyIsIml0ZW1zIiwiaXNMaXN0RW5hYmxlZCIsImEiLCJiIiwiaXRlbVRpdGxlIiwibG9jYWxlQ29tcGFyZSIsIm5vZGF0YSIsImluc3RhbmNlT2YiLCJTZWN0aW9uIiwiQ29tcG9zZWRTZWN0aW9uIiwicGFyYW1zIiwiY29udGV4dCIsIkRhdGVVdGlscyIsInVzZUVuY2Fwc3VsYXRlSGVhZGVyIiwic2hvd0lmTm90QXZhaWxhYmxlIiwiTkFPcHRpb25zIiwib3B0aW9uc18iLCJGaWVsZFBhdGhDb25zdGFudHMiLCJub1RpdGxlIiwiZ2V0RmllbGRMYWJlbFRyYW5zbGF0aW9uIiwidmFsdWVQYXRoIiwiZmllbGRQYXRoUGFydHMiLCJhbHRlcm5hdGVQYXRoIiwiZmllbGREZWYiLCJmaWVsZF90eXBlIiwiY3JlYXRlRm9ybWF0dGVkRGF0ZSIsInJlIiwidGVzdCIsInRyaW0iLCJjb21wb3NlZFNlY3Rpb24iLCJzdGF0ZSIsImJ1aWxkU2ltcGxlRmllbGQiLCJiaW5kIiwiU2VjdGlvblRpdGxlIiwiZ3JvdXBDbGFzcyIsInNJRCIsInRpdGxlRGV0YWlscyIsImNvbXBvc2VkQ2xhc3MiLCJvbmVPZlR5cGUiLCJjb250ZXh0VHlwZXMiLCJkZWZhdWx0UHJvcHMiLCJzZWN0aW9uX3RpdGxlX2NsYXNzIiwic2VjdGlvbl9ncm91cF9jbGFzcyIsInNlY3Rpb25fZmllbGRfbmFtZSIsInNlY3Rpb25fZmllbGRfdmFsdWUiLCJGdW5kaW5nU3VtbWFyeSIsIm1lYXN1cmVzVG90YWxzIiwiYWNFbmFibGVkIiwiYWRFbmFibGVkIiwiaXNGaWVsZFBhdGhCeVBhcnRzRW5hYmxlZCIsInRyblR5cGUiLCJ0cm5BZGpPcHRQYXRoIiwiYXRPcHRpb25zIiwiZ2V0UG9zc2libGVWYWx1ZXNPcHRpb25zIiwiYWN0aXZpdHlGdW5kaW5nVG90YWxzIiwiZ2V0VG90YWxzIiwiYWRqVHlwZSIsImFkalR5cGVBY3R1YWxUcm4iLCJleHBlbmRpdHVyZXNBcmVFbmFibGVkIiwidWIiLCJnZXRNVEVGVG90YWwiLCJhY3R1YWxDb21taXRtZW50cyIsImFjdHVhbERpc2J1cnNlbWVudHMiLCJfYnVpbGRUb3RhbEZpZWxkcyIsIm1lYXN1cmVzT3JkZXIiLCJ0cm4iLCJpc1BlcmNlbnRhZ2UiLCJmdW5kaW5nSW5mb1N1bW1hcnkiLCJtZWFzdXJlIiwiZm9ybWF0QW1vdW50IiwiX2J1aWxkRnVuZGluZ0luZm9ybWF0aW9uIiwiQVBJZGVudGlmaWNhdGlvbiIsIldTX1ZBTElEQVRJT05fT0ZGIiwiV1NfVkFMSURBVElPTl9BTExfRURJVCIsIldTX1ZBTElEQVRJT05fTkVXX09OTFkiLCJXU19WQUxJREFUSU9OX0ZJRUxEIiwiQ1JPU1NfVEVBTV9WQUxJREFUSU9OIiwiV1NfQUNDRVNTX1RZUEVfTUFOQUdFTUVOVCIsIldTX0FDQ0VTU19UWVBFX1RFQU0iLCJST0xFX1RFQU1fTUVNQkVSX1dTX01BTkFHRVIiLCJST0xFX1RFQU1fTUVNQkVSX1dTX01FTUJFUiIsIlJPTEVfVEVBTV9NRU1CRVJfV1NfQVBQUk9WRVIiLCJXT1JLU1BBQ0VfSUQiLCJST0xFX0lEIiwiV09SS1NQQUNFX0xFQURfSUQiLCJBQ0NFU1NfVFlQRSIsIklTX0NPTVBVVEVEIiwiSVNfUFJJVkFURSIsIkZJUlNUX05BTUUiLCJURUFNX01FTUJFUl9VU0VSX0lEIiwiQWRkaXRpb25hbEluZm8iLCJhY3Rpdml0eVdTTWFuYWdlciIsIlVzZXJDb25zdGFudHMiLCJhY3Rpdml0eVdvcmtzcGFjZSIsImFkZGl0aW9uYWxJbmZvIiwidGVhbU5hbWUiLCJhY2Nlc3NUeXBlIiwiV29ya3NwYWNlQ29uc3RhbnRzIiwiaXNDb21wdXRlZFRlYW0iLCJpbnN0YW5jZSIsIl9nZXRXb3Jrc3BhY2VMZWFkRGF0YSIsIl9idWlsZEFkZGl0aW9uYWxJbmZvIiwiQVBJbnRlcm5hbElkc1NlY3Rpb24iLCJpc1NlcGFyYXRlU2VjdGlvbiIsImFjdEludElkIiwic2hvd0ludGVybmFsSWQiLCJpbnRJZCIsInRhYmxlVmFsdWUiLCJpbnRlcm5hbF9pZCIsIm9yZ2FuaXphdGlvbiIsIm9yZ0lkcyIsImFjdEludElkcyIsIl9nZXRBY3RJbnRlcm5hbElkQ29udGVudCIsImJ1aWxkQ29udGVudCIsIm5vRGF0YSIsImFkZFJvd3MiLCJib3hfdGFibGUiLCJzaG93SWZFbXB0eSIsIm9yZ0RhdGEiLCJBUEludGVybmFsSWRzIiwiQVBDb21wb25lbnRzIiwiZGF0ZVN0cmluZyIsImdldEZ1bGxZZWFyIiwiZnVuZGluZyIsImdyb3VwcyIsImF1eEZkIiwiX2V4dHJhY3RZZWFyIiwiZ3JvdXAiLCJ5ZWFyIiwiY29tcG9uZW50IiwiZnVuZGluZ3MiLCJfZXh0cmFjdEdyb3VwcyIsInRhYmxlIiwiZGVzY3JpcHRpb24iLCJfYnVpbGREZXRhaWwiLCJfYnVpbGRDb21wb25lbnRzIiwiQVBDb250YWN0IiwiY29udGFjdHNCeUlkcyIsImdldEFjdGl2aXR5Q29udGFjdElkcyIsImNvbnRhY3RJZHMiLCJoeWRyYXRlZENvbnRhY3RzQnlJZHMiLCJjSWQiLCJDb250YWN0Q29uc3RhbnRzIiwiY29udGFjdCIsImNvbnRhY3RGaWVsZHNNYW5hZ2VyIiwicGFkZGluZ0JvdHRvbUxhcmdlIiwiZW1haWwiLCJwaG9uZSIsImhpZGRlbiIsImdldEh5ZHJhdGVkQ29udGFjdHMiLCJjb250YWN0R3JvdXBzIiwiYWNwIiwiY29udGFjdHMiLCJoeWRyYXRlZEMiLCJyZW5kZXJDb250YWN0IiwicmVuZGVyTm9Db250YWN0cyIsImNvbnRlbnRDbGFzcyIsInRhYmxlQ2VsbCIsInNlY3Rvcl90aXRsZSIsIldPUktTUEFD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c0RBQUE7Z0RBQUE7c0NBQUE7a0NBQUE7NENBQUE7MERBQUE7OEJBQUE7c0JBQUE7MEJBQUE7MENBQUE7MENBQUE7OENBQUE7d0NBQUE7NENBQUE7c0NBQUE7d0JBQUE7c0JBQUE7NEJBQUE7b0NBQUE7NENBQUE7Z0RBQUE7d0RBQUE7d0RBQUE7OENBQUE7c0NBQUE7d0RBQUE7OENBQUE7b0NBQUE7Z0RBQUE7c0RBQUE7d0RBQUE7MENBQUE7NENBQUE7OENBQUE7NENBQUE7NENBQUE7OENBQUE7c0RBQUE7Z0NBQUE7c0NBQUE7MERBQUE7MEVBQUE7Z0RBQUE7b0NBQUE7NENBQUE7c0VBQUE7d0RBQUE7MEVBQUE7b0JBQUE7OEJBQUE7Z0NBQUE7d0JBQUE7d0JBQUE7c0JBQUE7OEJBQUE7Z0NBQUE7a0NBQUE7OENBQUE7a0RBQUE7OEJBQUE7OEJBQUE7c0NBQUE7a0RBQUE7Z0NBQUE7b0RBQUE7c0NBQUE7d0NBQUE7Z0RBQUE7Z0NBQUE7d0RBQUE7MERBQUE7OERBQUE7Z0RBQUE7MERBQUE7MERBQUE7MERBQUE7Z0dBQUE7c0RBQUE7c0RBQUE7NEVBQUE7d0RBQUE7OEZBQUE7MEVBQUE7d0RBQUE7d0RBQUE7MERBQUE7Z0dBQUE7NEVBQUE7d0VBQUE7Z0VBQUE7OENBQUE7OENBQUE7OENBQUE7OENBQUE7d0NBQUE7OENBQUE7Z0RBQUE7b0RBQUE7b0RBQUE7OENBQUE7NENBQUE7b0VBQUE7OENBQUE7a0RBQUE7a0VBQUE7c0VBQUE7a0VBQUE7OENBQUE7MERBQUE7c0RBQUE7OEJBQUE7b0NBQUE7d0NBQUE7a0RBQUE7OEJBQUE7a0NBQUE7c0VBQUE7b0NBQUE7b0NBQUE7d0NBQUE7b0NBQUE7c0NBQUE7b0JBQUE7MERBQUE7OEJBQUE7Z0NBQUE7b0NBQUE7c0NBQUE7OENBQUE7a0RBQUE7d0NBQUE7a0NBQUE7NEJBQUE7NEJBQUE7a0NBQUE7a0JBQUE7OEJBQUE7d0NBQUE7a0NBQUE7c0RBQUE7Z0RBQUE7d0RBQUE7NENBQUE7d0NBQUE7d0NBQUE7MEJBQUE7d0RBQUE7a0NBQUE7b0JBQUE7a0RBQUE7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b0NBQUE7b0NBQUE7MEJBQUE7OEJBQUE7NEJBQUE7a0RBQUE7d0NBQUE7a0NBQUE7c0NBQUE7MENBQUE7Z0RBQUE7b0NBQUE7c0NBQUE7Z0RBQUE7b0RBQUE7b0RBQUE7NERBQUE7d0RBQUE7Z0RBQUE7NENBQUE7c0NBQUE7b0JBQUE7a0NBQUE7Z0NBQUE7b0NBQUE7c0NBQUE7a0JBQUE7d0NBQUE7b0NBQUE7a0RBQUE7b0NBQUE7d0NBQUE7b0NBQUE7Z0VBQUE7Z0NBQUE7WUFBQTswQkFBQTswQkFBQTtnQkFBQTs4QkFBQTswQkFBQTswQkFBQTswQkFBQTt3QkFBQTt3QkFBQTtvQ0FBQTtvQ0FBQTtzQ0FBQTtzQ0FBQTtzQkFBQTtnQ0FBQTtrQkFBQTtvQ0FBQTtrQ0FBQTtnQ0FBQTtvQ0FBQTtvQ0FBQTt3Q0FBQTswQkFBQTswQkFBQTtrQ0FBQTs4Q0FBQTt3Q0FBQTtvREFBQTtvREFBQTt3QkFBQTt3QkFBQTt3Q0FBQTtnQkFBQTtvQkFBQTs0QkFBQTt3QkFBQTtrRUFBQTswQkFBQTtnQ0FBQTtnQkFBQTt3QkFBQTt3QkFBQTtvQkFBQTs0QkFBQTs0QkFBQTtnQkFBQTt3QkFBQTt3QkFBQTtvQ0FBQTtnREFBQTswQ0FBQTs0Q0FBQTtvQ0FBQTtnQ0FBQTtnQ0FBQTtvQ0FBQTtvQ0FBQTt3Q0FBQTswQ0FBQTtnREFBQTtnQ0FBQTtrQ0FBQTtzQ0FBQTs4Q0FBQTtnREFBQTtzQ0FBQTt3QkFBQTtjQUFBO2tCQUFBOzBDQUFBO29EQUFBO1lBQUE7WUFBQTtrREFBQTswQkFBQTtnQkFBQTs4Q0FBQTtzQ0FBQTs0QkFBQTs4Q0FBQTtnQkFBQTswREFBQTtnQ0FBQTtnQ0FBQTtnREFBQTswQkFBQTs4QkFBQTs0QkFBQTtRQUFBO3dDQUFBO29FQUFBO3dFQUFBOzhCQUFBOzBEQUFBO2tEQUFBOzhCQUFBOzhFQUFBO2tCQUFBO3dDQUFBOzBDQUFBO2tDQUFBO3dDQUFBOzhCQUFBO1lBQUE7c0NBQUE7d0JBQUE7b0JBQUE7a0NBQUE7c0VBQUE7NEVBQUE7a0ZBQUE7OEVBQUE7d0ZBQUE7b0ZBQUE7c0VBQUE7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
