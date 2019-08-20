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
  separator: PropTypes$1.bool,
  translate: PropTypes$1.func,
  Logger: PropTypes$1.func
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
      // eslint-disable-next-line max-len
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

var logger$c = null;

/**
 * Total Number of Funding Sources section
 * @author Gabriel Inchauspe
 */

var APFundingSources = function (_Component) {
  inherits(APFundingSources, _Component);

  function APFundingSources(props) {
    classCallCheck(this, APFundingSources);

    var _this = possibleConstructorReturn(this, (APFundingSources.__proto__ || Object.getPrototypeOf(APFundingSources)).call(this, props));

    var Logger = _this.props.Logger;

    logger$c = new Logger('AP funding sources');
    logger$c.log('constructor');
    return _this;
  }

  createClass(APFundingSources, [{
    key: 'render',
    value: function render() {
      var content = this.props.buildSimpleField(ActivityConstants.TOTAL_NUMBER_OF_FUNDING_SOURCES, true, null, true);
      return React.createElement(
        'div',
        null,
        content
      );
    }
  }]);
  return APFundingSources;
}(Component);

APFundingSources.propTypes = {
  buildSimpleField: PropTypes$1.func.isRequired,
  Logger: PropTypes$1.func
};

var APFundingSources$1 = Section(APFundingSources, { SectionTitle: 'Funding Sources',
  useEncapsulateHeader: true,
  sID: 'APFundingSources'
});

var APLocationsList = APPercentageList(ActivityConstants.LOCATIONS, ActivityConstants.LOCATION, ActivityConstants.LOCATION_PERCENTAGE);

var logger$d = null;

/**
 * Activity Preview Locations section
 * @author Nadejda Mandrescu
 */

var APLocation = function (_Component) {
  inherits(APLocation, _Component);

  function APLocation(props) {
    classCallCheck(this, APLocation);

    var _this = possibleConstructorReturn(this, (APLocation.__proto__ || Object.getPrototypeOf(APLocation)).call(this, props));

    var Logger = _this.props.Logger;

    logger$d = new Logger('AP location');
    logger$d.debug('constructor');
    return _this;
  }

  createClass(APLocation, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          Logger = _props.Logger,
          translate = _props.translate,
          rawNumberToFormattedString = _props.rawNumberToFormattedString;

      var content = [React.createElement(APLocationsList, _extends({
        key: 'locations-list' }, this.props, {
        percentTitleClass: styles$1.percent_field_name, percentValueClass: styles$1.percent_field_value, tablify: false,
        translate: translate, Logger: Logger, rawNumberToFormattedString: rawNumberToFormattedString }))];
      var topContent = [ActivityConstants.IMPLEMENTATION_LEVEL, ActivityConstants.IMPLEMENTATION_LOCATION].map(function (fp) {
        return React.createElement(
          'td',
          { key: fp },
          _this2.props.buildSimpleField(fp, true, new Set([0]))
        );
      });
      content = content.filter(function (el) {
        return el !== undefined;
      });
      var table = null;
      if (this.props.activity[ActivityConstants.IMPLEMENTATION_LEVEL] && this.props.activity[ActivityConstants.IMPLEMENTATION_LEVEL].value !== 'National' || this.props.activity[ActivityConstants.IMPLEMENTATION_LOCATION] && this.props.activity[ActivityConstants.IMPLEMENTATION_LOCATION].value !== 'Country') {
        table = React.createElement(
          'table',
          { className: styles$1.box_table2 },
          React.createElement(
            'tbody',
            null,
            content
          )
        );
      }
      return React.createElement(
        'div',
        null,
        React.createElement(
          'table',
          { className: styles$1.two_box_table },
          React.createElement(
            'tbody',
            null,
            React.createElement(
              'tr',
              null,
              topContent
            )
          )
        ),
        table
      );
    }
  }]);
  return APLocation;
}(Component);

APLocation.propTypes = {
  activity: PropTypes.object.isRequired, // eslint-disable-line
  buildSimpleField: PropTypes.func.isRequired,
  Logger: PropTypes.func,
  translate: PropTypes.func,
  DateUtils: PropTypes.func,
  rawNumberToFormattedString: PropTypes.func
};

var APLocation$1 = Section(APLocation, { SectionTitle: 'Location',
  useEncapsulateHeader: true,
  sID: 'APLocation'
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
  APContact: APContact$1,
  APFundingSources: APFundingSources$1,
  APLocation: APLocation$1
};

export default index;
export { TestAPField, TestingSection, Constants, ActivityConstants, FeatureManagerConstants, ErrorConstants, CurrencyRatesManager, FieldsManager, FieldPathConstants, ValueConstants, PossibleValuesManager, FeatureManager, APLabel, APField, Tablify, APPercentageField, APPercentageList, UIUtils, Section, FundingSummary$1 as FundingSummary, AdditionalInfo$1 as AdditionalInfo, UserConstants, ContactConstants, WorkspaceConstants, WorkspaceGroupsConstants, APIdentification$1 as APIdentification, APInternalIds, APComponents$1 as APComponents, APContact$1 as APContact, APFundingSources$1 as APFundingSources, APLocation$1 as APLocation };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguZXMuanMiLCJzb3VyY2VzIjpbIi4uL25vZGVfbW9kdWxlcy9zdHlsZS1pbmplY3QvZGlzdC9zdHlsZS1pbmplY3QuZXMuanMiLCIuLi9zcmMvYWN0aXZpdHlQcmV2aWV3L2NvbXBvbmVudHMvVGVzdEFQRmllbGQuanMiLCIuLi9zcmMvYWN0aXZpdHlQcmV2aWV3L2NvbXBvbmVudHMvVGVzdGluZ1NlY3Rpb24uanMiLCIuLi9zcmMvdXRpbHMvQ29uc3RhbnRzLmpzIiwiLi4vc3JjL21vZHVsZXMvdXRpbC9GZWF0dXJlTWFuYWdlckNvbnN0YW50cy5qcyIsIi4uL3NyYy91dGlscy9VSVV0aWxzLmpzIiwiLi4vc3JjL21vZHVsZXMvdXRpbC9BY3Rpdml0eUNvbnN0YW50cy5qcyIsIi4uL3NyYy91dGlscy9jb25zdGFudHMvRXJyb3JDb25zdGFudHMuanMiLCIuLi9zcmMvdXRpbHMvVmFsdWVDb25zdGFudHMuanMiLCIuLi9zcmMvdXRpbHMvRmllbGRQYXRoQ29uc3RhbnRzLmpzIiwiLi4vc3JjL21vZHVsZXMvZmllbGQvRmllbGRzTWFuYWdlci5qcyIsIi4uL3NyYy9tb2R1bGVzL3V0aWwvQ29udGFjdENvbnN0YW50cy5qcyIsIi4uL3NyYy9tb2R1bGVzL3V0aWwvQ3VycmVuY3lSYXRlc01hbmFnZXIuanMiLCIuLi9zcmMvbW9kdWxlcy9maWVsZC9Qb3NzaWJsZVZhbHVlc01hbmFnZXIuanMiLCIuLi9zcmMvbW9kdWxlcy91dGlsL0ZlYXR1cmVNYW5hZ2VyLmpzIiwiLi4vc3JjL2FjdGl2aXR5L3ByZXZpZXcvY29tcG9uZW50cy9BUExhYmVsLmpzeCIsIi4uL3NyYy9hY3Rpdml0eS9wcmV2aWV3L2NvbXBvbmVudHMvQVBGaWVsZC5qc3giLCIuLi9zcmMvYWN0aXZpdHkvcHJldmlldy9jb21wb25lbnRzL1RhYmxpZnkuanN4IiwiLi4vc3JjL2FjdGl2aXR5L3ByZXZpZXcvY29tcG9uZW50cy9BUFBlcmNlbnRhZ2VGaWVsZC5qc3giLCIuLi9zcmMvYWN0aXZpdHkvcHJldmlldy9jb21wb25lbnRzL0FQUGVyY2VudGFnZUxpc3QuanN4IiwiLi4vc3JjL2FjdGl2aXR5L3ByZXZpZXcvc2VjdGlvbnMvU2VjdGlvbi5qc3giLCIuLi9zcmMvYWN0aXZpdHkvcHJldmlldy9zZWN0aW9ucy9GdW5kaW5nU3VtbWFyeS5qc3giLCIuLi9zcmMvYWN0aXZpdHkvcHJldmlldy9zZWN0aW9ucy9BUElkZW50aWZpY2F0aW9uLmpzeCIsIi4uL3NyYy91dGlscy9jb25zdGFudHMvV29ya3NwYWNlQ29uc3RhbnRzLmpzIiwiLi4vc3JjL3V0aWxzL2NvbnN0YW50cy9Vc2VyQ29uc3RhbnRzLmpzIiwiLi4vc3JjL2FjdGl2aXR5L3ByZXZpZXcvc2VjdGlvbnMvQWRkaXRpb25hbEluZm8uanN4IiwiLi4vc3JjL2FjdGl2aXR5L3ByZXZpZXcvc2VjdGlvbnMvQVBJbnRlcm5hbElkcy5qc3giLCIuLi9zcmMvYWN0aXZpdHkvcHJldmlldy9zZWN0aW9ucy9BUENvbXBvbmVudHMuanN4IiwiLi4vc3JjL2FjdGl2aXR5L3ByZXZpZXcvc2VjdGlvbnMvQVBDb250YWN0LmpzeCIsIi4uL3NyYy91dGlscy9jb25zdGFudHMvV29ya3NwYWNlR3JvdXBzQ29uc3RhbnRzLmpzIiwiLi4vc3JjL2FjdGl2aXR5L3ByZXZpZXcvc2VjdGlvbnMvQVBGdW5kaW5nU291cmNlcy5qc3giLCIuLi9zcmMvYWN0aXZpdHkvcHJldmlldy9zZWN0aW9ucy9BUExvY2F0aW9uLmpzeCIsIi4uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBzdHlsZUluamVjdChjc3MsIHJlZikge1xuICBpZiAoIHJlZiA9PT0gdm9pZCAwICkgcmVmID0ge307XG4gIHZhciBpbnNlcnRBdCA9IHJlZi5pbnNlcnRBdDtcblxuICBpZiAoIWNzcyB8fCB0eXBlb2YgZG9jdW1lbnQgPT09ICd1bmRlZmluZWQnKSB7IHJldHVybjsgfVxuXG4gIHZhciBoZWFkID0gZG9jdW1lbnQuaGVhZCB8fCBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZCcpWzBdO1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICBzdHlsZS50eXBlID0gJ3RleHQvY3NzJztcblxuICBpZiAoaW5zZXJ0QXQgPT09ICd0b3AnKSB7XG4gICAgaWYgKGhlYWQuZmlyc3RDaGlsZCkge1xuICAgICAgaGVhZC5pbnNlcnRCZWZvcmUoc3R5bGUsIGhlYWQuZmlyc3RDaGlsZCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGhlYWQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBoZWFkLmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHN0eWxlSW5qZWN0O1xuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uLy4uL2FjdGl2aXR5QXNzZXRzL3N0eWxlc2hlZXRzL0FjdGl2aXR5UHJldmlldy5jc3MnO1xuXG5cbi8qKlxuICogU2ltcGxlIEZpZWxkIGNvbXBvbmVudCB0aGF0IGNvbnNpc3RzIG9mIGEgZmllbGQgdGl0bGUgYW5kIGZpZWxkIHZhbHVlXG4gKiBAYXV0aG9yIE5hZGVqZGEgTWFuZHJlc2N1XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRlc3RBUEZpZWxkIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgLyoqXG4gICAqIEdldHMgYW4gaW5zdGFuY2Ugb2YgU2ltcGxlIEZpZWxkXG4gICAqIEBwYXJhbSB0cm5MYWJlbCB0aGUgbGFiZWwgdG8gdHJhbnNsYXRlIGFuZCB1c2UgYXMgYSB0aXRsZS4gVGhpcyBsYWJlbCBpcyBhbHNvIHVzZWQgYXMgdGhlIGNvbXBvbmVudCBrZXkuXG4gICAqIEBwYXJhbSB2YWx1ZSB0aGUgZmllbGQgdmFsdWVcbiAgICogQHBhcmFtIGlubGluZSBzaG93IHRpdGxlIGFuZCB2YWx1ZSBpbiB0aGUgc2FtZSByb3cuXG4gICAqIEBwYXJhbSBzZXBhcmF0b3IgYWRkIG9yIG5vdCBhbiA8aHI+IHRhZy5cbiAgICogQHBhcmFtIG5hbWVDbGFzcyBjc3MgY2xhc3MgZm9yIHRoZSBmaWVsZCBsYWJlbFxuICAgKiBAcGFyYW0gdmFsdWVDbGFzcyBjc3MgY2xhc3MgZm9yIHRoZSBmaWVsZCB2YWx1ZVxuICAgKiBAcmV0dXJuIHtTaW1wbGVGaWVsZH1cbiAgICovXG4gIHN0YXRpYyBpbnN0YW5jZSh0cm5MYWJlbCwgdmFsdWUsIGlubGluZSA9IGZhbHNlLCBzZXBhcmF0b3IgPSBmYWxzZSwgbmFtZUNsYXNzLCB2YWx1ZUNsYXNzKSB7XG4gICAgcmV0dXJuICg8VGVzdEFQRmllbGRcbiAgICAgIGtleT17dHJuTGFiZWx9IHRpdGxlPXt0aGlzLnByb3BzLnRyYW5zbGF0ZSh0cm5MYWJlbCl9IHZhbHVlPXt2YWx1ZX0gaW5saW5lPXtpbmxpbmV9IHNlcGFyYXRvcj17c2VwYXJhdG9yfVxuICAgICAgZmllbGROYW1lQ2xhc3M9e25hbWVDbGFzc30gZmllbGRWYWx1ZUNsYXNzPXt2YWx1ZUNsYXNzfSAvPik7XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnByb3BzLmFtcExvZ2dlci5sb2coJ2NvbnN0cnVjdG9yZScpO1xuICAgIHRoaXMudXNlU2VwYXJhdG9yID0gdGhpcy5wcm9wcy5zZXBhcmF0b3IgIT09IGZhbHNlO1xuICAgIHRoaXMuZGlzcGxheUNsYXNzID0gdGhpcy5wcm9wcy5maWVsZENsYXNzIHx8ICh0aGlzLnByb3BzLmlubGluZSA9PT0gdHJ1ZSA/IHN0eWxlcy5pbmxpbmUgOiBzdHlsZXMuYmxvY2spO1xuICB9XG5cbiAgX2dldFZhbHVlKCkge1xuICAgIGNvbnN0IGNsYXNzTmFtZXMgPSBgJHt0aGlzLnByb3BzLmZpZWxkVmFsdWVDbGFzc30gJHt0aGlzLmRpc3BsYXlDbGFzc31gO1xuICAgIC8vIFRvIGhhbmRsZSBib29sZWFuIGZpZWxkcyB3ZSBkb250IHdhbnQgdG8gc2hvdyAnZmFsc2UnIGFzICdObyBEYXRhJy5cbiAgICBjb25zdCB2YWx1ZSA9ICh0aGlzLnByb3BzLnZhbHVlIHx8IHRoaXMucHJvcHMudmFsdWUgPT09IGZhbHNlKSA/IHRoaXMucHJvcHMudmFsdWUgOiB0aGlzLnByb3BzLnRyYW5zbGF0ZSgnTm8gRGF0YScpO1xuICAgIGxldCBkaXNwbGF5VmFsdWU7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICBpZiAodmFsdWVbMF0gaW5zdGFuY2VvZiBPYmplY3QpIHtcbiAgICAgICAgZGlzcGxheVZhbHVlID0gW107XG4gICAgICAgIHZhbHVlLmZvckVhY2godiA9PiBkaXNwbGF5VmFsdWUucHVzaCh2KSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkaXNwbGF5VmFsdWUgPSB2YWx1ZS5zb3J0KCkuam9pbignLCAnKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgICBkaXNwbGF5VmFsdWUgPSB2YWx1ZSA9PT0gdHJ1ZSA/IHRoaXMucHJvcHMudHJhbnNsYXRlKCdZZXMnKSA6IHRoaXMucHJvcHMudHJhbnNsYXRlKCdObycpO1xuICAgIH0gZWxzZSB7XG4gICAgICBkaXNwbGF5VmFsdWUgPSAodGhpcy5wcm9wcy5pbmxpbmUgJiYgdGhpcy5wcm9wcy52YWx1ZSBpbnN0YW5jZW9mIFN0cmluZykgPyBgJHt2YWx1ZX0gYCA6IHZhbHVlO1xuICAgIH1cbiAgICBpZiAodGhpcy5wcm9wcy51c2VJbm5lckhUTUwpIHtcbiAgICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lc30gZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBkaXNwbGF5VmFsdWUgfX0gLz47XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lc30+e2Rpc3BsYXlWYWx1ZX08L2Rpdj47XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IGNsYXNzTmFtZXMgPSBgJHt0aGlzLnByb3BzLmZpZWxkTmFtZUNsYXNzfSAke3RoaXMuZGlzcGxheUNsYXNzfWA7XG4gICAgcmV0dXJuICg8ZGl2IGNsYXNzTmFtZT17dGhpcy5kaXNwbGF5Q2xhc3N9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZXN9Pnt0aGlzLnByb3BzLnRpdGxlfTwvZGl2PlxuICAgICAge3RoaXMuX2dldFZhbHVlKCl9XG4gICAgICB7dGhpcy51c2VTZXBhcmF0b3IgPyA8aHIgLz4gOiAnJ31cbiAgICA8L2Rpdj4pO1xuICB9XG59XG5cblRlc3RBUEZpZWxkLnByb3BUeXBlcyA9IHtcbiAgdGl0bGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHZhbHVlOiBQcm9wVHlwZXMuYW55LFxuICBpbmxpbmU6IFByb3BUeXBlcy5ib29sLFxuICB1c2VJbm5lckhUTUw6IFByb3BUeXBlcy5ib29sLFxuICBmaWVsZENsYXNzOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBmaWVsZE5hbWVDbGFzczogUHJvcFR5cGVzLnN0cmluZyxcbiAgZmllbGRWYWx1ZUNsYXNzOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBzZXBhcmF0b3I6IFByb3BUeXBlcy5ib29sLFxuICBhbXBMb2dnZXI6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgdHJhbnNsYXRlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkXG59O1xuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgVGVzdEFQRmllbGQgZnJvbSAnLi9UZXN0QVBGaWVsZCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRlc3RpbmdTZWN0aW9uIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8aDI+dGVzdGluZyBjb21wb25lbnQ8L2gyPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIHRlc3QgdHJhbnNsYXRpb246IGBERVNLVE9QID0ge3RoaXMucHJvcHMudHJhbnNsYXRlKCdERVNLVE9QJyl9YFxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICB0ZXN0IEFQRmllbGQ6XG4gICAgICAgICAgPFRlc3RBUEZpZWxkIGFtcExvZ2dlcj17dGhpcy5wcm9wcy5hbXBMb2dnZXJ9IHRyYW5zbGF0ZT17dGhpcy5wcm9wcy50cmFuc2xhdGV9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+KTtcbiAgfVxufVxuVGVzdGluZ1NlY3Rpb24ucHJvcFR5cGVzID0ge1xuICBhbXBMb2dnZXI6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgdHJhbnNsYXRlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkXG59O1xuIiwiXG5jb25zdCBCQVNFX1JFU1RfVVJMID0gJy9yZXN0JztcblxuXG5jb25zdCBDT05ORUNUSU9OX1RJTUVPVVQgPSAyNTAwMDtcbmNvbnN0IENPTk5FQ1RJT05fRk9SQ0VEX1RJTUVPVVQgPSBDT05ORUNUSU9OX1RJTUVPVVQgKyA1MDAwO1xuY29uc3QgVElNRU9VVF9DSEVDS19JTlRFUlZBTCA9IDUwMDA7XG5jb25zdCBNQVhfUkVUUllfQVRFTVBUUyA9IDU7XG5jb25zdCBFUlJPUlNfVE9fUkVUUlkgPSBbJ0VTT0NLRVRUSU1FRE9VVCcsICdFVElNRURPVVQnLCAnRUNPTk5SRVNFVCcsICdFQUlfQUdBSU4nXTtcbmNvbnN0IEVSUk9SU19OT19BTVBfU0VSVkVSID0gWydFQ09OTlJFRlVTRUQnLCAnRU5FVFVOUkVBQ0gnLCAnRU5PRU5UJywgJ0VOT1RGT1VORCcsICdFTkVURE9XTicsICdFSE9TVERPV04nLFxuICAnRUhPU1RVTlJFQUNIJywgJ0VOT05FVCddO1xuY29uc3QgQ09OTkVDVElWSVRZX0NIRUNLX0lOVEVSVkFMID0gJzYwMDAwJzsgLy8gMSBtaW51dGVzXG5cbmNvbnN0IFdPUktTUEFDRV9VUkwgPSAnL3dvcmtzcGFjZSc7XG5jb25zdCBMT0dJTl9VUkwgPSAnLyc7XG5jb25zdCBERVNLVE9QX1VSTCA9ICcvZGVza3RvcCc7XG5jb25zdCBERVNLVE9QX0NVUlJFTlRfVVJMID0gJy9kZXNrdG9wL2N1cnJlbnQnO1xuY29uc3QgU1lOQ1VQX1JFRElSRUNUX1VSTCA9ICcvc3luY1VwL3N5bmMnO1xuY29uc3QgU1lOQ1VQX0hJU1RPUllfVEFSR0VUID0gJ2hpc3RvcnknO1xuY29uc3QgU1lOQ1VQX1NVTU1BUllfVVJMID0gJy9zeW5jVXBTdW1tYXJ5JztcbmNvbnN0IEFDVElWSVRZX1BSRVZJRVdfVVJMID0gJy9hY3Rpdml0eS9wcmV2aWV3JztcbmNvbnN0IEFDVElWSVRZX0VESVRfVVJMID0gJy9hY3Rpdml0eS9lZGl0JztcbmNvbnN0IFVQREFURV9VUkwgPSAnL3VwZGF0ZSc7XG5jb25zdCBTRVRVUF9VUkwgPSAnL3NldHVwJztcbmNvbnN0IFNFVFRJTkdTX1VSTCA9ICcvc2V0dGluZ3MnO1xuXG5jb25zdCBDT0xMRUNUSU9OX1VTRVJTID0gJ3VzZXJzJztcbmNvbnN0IENPTExFQ1RJT05fV09SS1BBQ0VTID0gJ3dvcmtzcGFjZXMnO1xuY29uc3QgQ09MTEVDVElPTl9URUFNTUVNQkVSUyA9ICd0ZWFtbWVtYmVycyc7XG5jb25zdCBDT0xMRUNUSU9OX0NMSUVOVF9TRVRUSU5HUyA9ICdjbGllbnQtc2V0dGluZ3MnO1xuY29uc3QgQ09MTEVDVElPTl9HTE9CQUxfU0VUVElOR1MgPSAnZ2xvYmFsLXNldHRpbmdzJztcbmNvbnN0IENPTExFQ1RJT05fQUNUSVZJVElFUyA9ICdhY3Rpdml0aWVzJztcbmNvbnN0IENPTExFQ1RJT05fRklFTERTID0gJ2ZpZWxkcyc7XG5jb25zdCBDT0xMRUNUSU9OX1BPU1NJQkxFX1ZBTFVFUyA9ICdwb3NzaWJsZS12YWx1ZXMnO1xuY29uc3QgQ09MTEVDVElPTl9TWU5DVVBfTE9HID0gJ3N5bmN1cC1sb2cnO1xuY29uc3QgQ09MTEVDVElPTl9MQU5HUyA9ICdsYW5ndWFnZXMnO1xuY29uc3QgQ09MTEVDVElPTl9XU19TRVRUSU5HUyA9ICd3b3Jrc3BhY2Utc2V0dGluZ3MnO1xuY29uc3QgQ09MTEVDVElPTl9DVVJSRU5DWV9SQVRFUyA9ICdjdXJyZW5jeS1yYXRlcyc7XG5jb25zdCBDT0xMRUNUSU9OX0ZFQVRVUkVfTUFOQUdFUiA9ICdmZWF0dXJlLW1hbmFnZXInO1xuY29uc3QgQ09MTEVDVElPTl9DT05UQUNUUyA9ICdjb250YWN0cyc7XG5jb25zdCBDT0xMRUNUSU9OX1JFU09VUkNFUyA9ICdyZXNvdXJjZXMnO1xuY29uc3QgQ09MTEVDVElPTl9SRVBPU0lUT1JZID0gJ3JlcG9zaXRvcnknO1xuY29uc3QgQ09MTEVDVElPTl9HQVpFVFRFRVIgPSAnZ2F6ZXR0ZWVyJztcbmNvbnN0IENPTExFQ1RJT05fQ0FMRU5EQVJTID0gJ2NhbGVuZGFycyc7XG5jb25zdCBDT0xMRUNUSU9OX0NIQU5HRVNFVFMgPSAnY2hhbmdlc2V0cyc7XG5cbmNvbnN0IEdBWkVUVEVFUl9ESVNUQU5DRV9ESVZJREUgPSAzO1xuXG5jb25zdCBEQl9GSUxFX1BSRUZJWCA9ICdkYXRhYmFzZSc7XG5jb25zdCBEQl9GSUxFX0VYVEVOU0lPTiA9ICcuZGInO1xuY29uc3QgREJfQ09NTU9OX0RBVEFTVE9SRV9PUFRJT05TID0geyBhdXRvbG9hZDogZmFsc2UsIGNvcnJ1cHRBbGVydFRocmVzaG9sZDogMCB9O1xuY29uc3QgREJfQVVUT0NPTVBBQ1RfSU5URVJWQUxfTUlMSVNFQ09ORFMgPSA2MDAwMDtcbmNvbnN0IERCX0RFRkFVTFRfUVVFUllfTElNSVQgPSA5OTk5OTk5OTk7XG5cbmNvbnN0IExBTkdVQUdFX0VOR0xJU0ggPSAnZW4nO1xuY29uc3QgRlNfTE9DQUxFU19ESVJFQ1RPUlkgPSAnbGFuZyc7XG5jb25zdCBMQU5HVUFHRV9NQVNURVJfVFJBTlNMQVRJT05TX0ZJTEUgPSAnbWFzdGVyLXRyYW5zbGF0aW9ucyc7XG5jb25zdCBMQU5HVUFHRV9UUkFOU0xBVElPTlNfRklMRSA9ICd0cmFuc2xhdGlvbnMnO1xuY29uc3QgTEFOR1VBR0VfTkVXX1RSQU5TTEFUSU9OU19NVVNUX1NZTkMgPSAnbXVzdF9zeW5jX3RyYW5zbGF0aW9uLmpzb24nO1xuXG5jb25zdCBBU0FSX0RJUiA9ICdhcHAuYXNhcic7XG5jb25zdCBBUFBfRElSRUNUT1JZID0gJ2FwcCc7XG5jb25zdCBURVNUX0RJUkVDVE9SWSA9ICd0ZXN0JztcbmNvbnN0IFNUQVRJQ19ESVIgPSAnc3RhdGljJztcbmNvbnN0IElNQUdFU19ESVIgPSAnaW1hZ2VzJztcbmNvbnN0IERPQ19JQ09OUyA9ICdkb2MtaWNvbnMnO1xuY29uc3QgREJfU1RBVElDX0RJUiA9ICdkYic7XG5jb25zdCBNSUdSQVRJT05TX0RJUiA9ICdjaGFuZ2Vsb2cnO1xuXG5jb25zdCBIQVNIX0lURVJBVElPTlMgPSAxMDA7XG5jb25zdCBESUdFU1RfQUxHT1JJVEhNX1NIQTEgPSAnU0hBLTEnO1xuY29uc3QgRElHRVNUX0FMR09SSVRITV9TSEEyNTYgPSAnU0hBLTI1Nic7XG5cbmNvbnN0IEFDVElWSVRZX0VESVQgPSAnQUNUSVZJVFlfRURJVCc7XG5jb25zdCBBQ1RJVklUWV9WSUVXID0gJ0FDVElWSVRZX1ZJRVcnO1xuXG5jb25zdCBTWU5DVVBfRk9SQ0VfREFZUyA9IDE0O1xuY29uc3QgU1lOQ1VQX0JFU1RfQkVGT1JFX0RBWVMgPSA3O1xuY29uc3QgU1lOQ1VQX05PX0RBVEUgPSAnMTkwMC0wMS0wMVQwMDowMDowMC4wMDArMDAwMCc7XG5jb25zdCBTWU5DVVBfVFlQRV9UUkFOU0xBVElPTlMgPSAndHJhbnNsYXRpb25zJztcbmNvbnN0IFNZTkNVUF9UWVBFX1VTRVJTID0gJ3VzZXJzJztcbmNvbnN0IFNZTkNVUF9UWVBFX0FTU0VUUyA9ICdhc3NldHMnO1xuY29uc3QgU1lOQ1VQX1RZUEVfV09SS1NQQUNFUyA9ICd3b3Jrc3BhY2VzJztcbmNvbnN0IFNZTkNVUF9UWVBFX0dTID0gJ2dsb2JhbC1zZXR0aW5ncyc7XG5jb25zdCBTWU5DVVBfVFlQRV9FWENIQU5HRV9SQVRFUyA9ICdleGNoYW5nZS1yYXRlcyc7XG5jb25zdCBTWU5DVVBfVFlQRV9GRUFUVVJFX01BTkFHRVIgPSAnZmVhdHVyZS1tYW5hZ2VyJztcbmNvbnN0IFNZTkNVUF9UWVBFX1dPUktTUEFDRV9NRU1CRVJTID0gJ3dvcmtzcGFjZS1tZW1iZXJzJztcbmNvbnN0IFNZTkNVUF9UWVBFX0FMTF9GSUVMRFMgPSAnZmllbGRzJztcbmNvbnN0IFNZTkNVUF9UWVBFX0FDVElWSVRJRVNfUFVMTCA9ICdhY3Rpdml0aWVzJztcbmNvbnN0IFNZTkNVUF9UWVBFX0FDVElWSVRJRVNfUFVTSCA9ICdhY3Rpdml0aWVzLXB1c2gnO1xuY29uc3QgU1lOQ1VQX1RZUEVfQUNUSVZJVFlfRklFTERTID0gJ2FjdGl2aXR5LWZpZWxkcyc7XG5jb25zdCBTWU5DVVBfVFlQRV9BQ1RJVklUWV9GSUVMRFNfU1RSVUNUVVJBTF9DSEFOR0VTID0gJ2FjdGl2aXR5LWZpZWxkcy1zdHJ1Y3R1cmFsLWNoYW5nZXMnO1xuY29uc3QgU1lOQ1VQX1RZUEVfQ09OVEFDVFNfUFVMTCA9ICdjb250YWN0cyc7XG5jb25zdCBTWU5DVVBfVFlQRV9DT05UQUNUU19QVVNIID0gJ2NvbnRhY3RzLXB1c2gnO1xuY29uc3QgU1lOQ1VQX1RZUEVfQUNUSVZJVFlfUE9TU0lCTEVfVkFMVUVTID0gJ2FjdGl2aXR5LXBvc3NpYmxlLXZhbHVlcy1maWVsZHMnO1xuY29uc3QgU1lOQ1VQX1RZUEVfQ09OVEFDVF9GSUVMRFMgPSAnY29udGFjdC1maWVsZHMnO1xuY29uc3QgU1lOQ1VQX1RZUEVfQ09OVEFDVF9GSUVMRFNfU1RSVUNUVVJBTF9DSEFOR0VTID0gJ2NvbnRhY3QtZmllbGRzLXN0cnVjdHVyYWwtY2hhbmdlcyc7XG5jb25zdCBTWU5DVVBfVFlQRV9DT05UQUNUX1BPU1NJQkxFX1ZBTFVFUyA9ICdjb250YWN0LXBvc3NpYmxlLXZhbHVlcy1maWVsZHMnO1xuY29uc3QgU1lOQ1VQX1RZUEVfUkVTT1VSQ0VTX1BVTEwgPSAncmVzb3VyY2VzJztcbmNvbnN0IFNZTkNVUF9UWVBFX1JFU09VUkNFU19QVVNIID0gJ3Jlc291cmNlcy1wdXNoJztcbmNvbnN0IFNZTkNVUF9UWVBFX1JFU09VUkNFX0ZJRUxEUyA9ICdyZXNvdXJjZS1maWVsZHMnO1xuY29uc3QgU1lOQ1VQX1RZUEVfUkVTT1VSQ0VfRklFTERTX1NUUlVDVFVSQUxfQ0hBTkdFUyA9ICdyZXNvdXJjZS1maWVsZHMtc3RydWN0dXJhbC1jaGFuZ2VzJztcbmNvbnN0IFNZTkNVUF9UWVBFX1JFU09VUkNFX1BPU1NJQkxFX1ZBTFVFUyA9ICdyZXNvdXJjZS1wb3NzaWJsZS12YWx1ZXMtZmllbGRzJztcbmNvbnN0IFNZTkNVUF9UWVBFX0NPTU1PTl9QT1NTSUJMRV9WQUxVRVMgPSAnY29tbW9uLXBvc3NpYmxlLXZhbHVlcy1maWVsZHMnO1xuY29uc3QgU1lOQ1VQX1RZUEVfV09SS1NQQUNFX1NFVFRJTkdTID0gJ3dvcmtzcGFjZS1zZXR0aW5ncyc7XG5jb25zdCBTWU5DVVBfVFlQRV9NQVBfVElMRVMgPSAnbWFwLXRpbGVzJztcbmNvbnN0IFNZTkNVUF9UWVBFX0dBWkVUVEVFUiA9ICdsb2NhdG9ycyc7XG5jb25zdCBTWU5DVVBfVFlQRV9DQUxFTkRBUlMgPSAnY2FsZW5kYXJzJztcblxuY29uc3QgU1lOQ1VQX1NUQVRVU19TVUNDRVNTID0gJ1NVQ0NFU1MnO1xuY29uc3QgU1lOQ1VQX1NUQVRVU19GQUlMID0gJ0ZBSUwnO1xuY29uc3QgU1lOQ1VQX1NUQVRVU19QQVJUSUFMID0gJ1BBUlRJQUwnO1xuY29uc3QgU1lOQ1VQX1NUQVRVU19DQU5DRUxFRCA9ICdDQU5DRUxFRCc7XG5jb25zdCBTWU5DVVBfU1lOQ19SRVFVRVNURURfQVQgPSAnc3luYy1kYXRlJztcbmNvbnN0IFNZTkNVUF9TWU5DX1JFUVVFU1RFRF9CWSA9ICdyZXF1ZXN0ZWQtYnknO1xuY29uc3QgU1lOQ1VQX0RBVEVUSU1FX0ZJRUxEID0gJ3RpbWVzdGFtcCc7XG5jb25zdCBTWU5DVVBfRElGRl9MRUZUT1ZFUiA9ICdzeW5jdXAtZGlmZi1sZWZ0b3Zlcic7XG5jb25zdCBTWU5DVVBfREVQRU5ERU5DWV9DSEVDS19JTlRFUlZBTCA9IDEwO1xuY29uc3QgU1lOQ1VQX0RFVEFJTFNfU1lOQ0VEID0gJ3N5bmNlZCc7XG5jb25zdCBTWU5DVVBfREVUQUlMU19VTlNZTkNFRCA9ICd1bnN5bmNlZCc7XG5jb25zdCBTWU5DVVBfUkVTT1VSQ0VfUFVMTF9CQVRDSF9TSVpFID0gMTAwO1xuY29uc3QgU1lOQ1VQX0FDVElWSVRJRVNfUFVMTF9CQVRDSF9TSVpFID0gMTAwO1xuY29uc3QgU1lOQ1VQX0NPTlRBQ1RTX1BVTExfQkFUQ0hfU0laRSA9IDEwMDtcblxuY29uc3QgQUNUSVZJVFlfU1RBVFVTX0RSQUZUID0gJ0FDVElWSVRZX1NUQVRVU19EUkFGVCc7XG5jb25zdCBBQ1RJVklUWV9TVEFUVVNfVU5WQUxJREFURUQgPSAnQUNUSVZJVFlfU1RBVFVTX1VOVkFMSURBVEVEJztcbmNvbnN0IEFDVElWSVRZX1NUQVRVU19WQUxJREFURUQgPSAnQUNUSVZJVFlfU1RBVFVTX1ZBTElEQVRFRCc7XG5cbmNvbnN0IENVUlJFTkNZX0hPVVIgPSAnMDA6MDAnO1xuY29uc3QgREVGQVVMVF9DVVJSRU5DWSA9ICdVU0QnO1xuY29uc3QgUkFURV9TQU1FX0NVUlJFTkNZID0gMTtcbmNvbnN0IFJBVEVfQ1VSUkVOQ1lfTk9UX0ZPVU5EID0gMTtcbmNvbnN0IENVUlJFTkNZX1BBSVIgPSAnY3VycmVuY3ktcGFpcic7XG5jb25zdCBWRVJTSU9OX1BBVFRFUk4gPSAvKFxcZCspXFwuKFxcZCspKFxcLihcXGQrKSk/KC1cXHcrKT8vO1xuY29uc3QgVkVSU0lPTl9QQVRURVJOX0dST1VQU19UT19FWFRSQUNUID0gWzEsIDIsIDQsIDVdO1xuY29uc3QgQU1QX0NPVU5UUllfTE9HTyA9ICdhbXBDb3VudHJ5RmxhZy5wbmcnO1xuY29uc3QgQVNTRVRTX0RJUkVDVE9SWSA9ICdhc3NldHMnO1xuY29uc3QgQkFTRV82NF9QTkdfUFJFRklYID0gJ2RhdGE6aW1hZ2UvcG5nO2Jhc2U2NCwnO1xuLy8gSG9sZHMgdGhlIEJBU0U2NCByZXByZXNlbnRhdGlvbiBvZiBhIGEgdHJhbnNwYXJlbnQgaW1hZ2UgMXgxIGluIGNhc2Ugd2UgZG9uJ3QgeWV0IGhhdmUgdGhlIGNvdW50cnkgZmxhZ1xuY29uc3RcbiAgVFJBTlNQQVJFTlRfRkxBRyA9ICdpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQUVBQUFBQkNBUUFBQUMxSEF3Q0FBQUFDMGxFUVZSNG5HUDZ6d0FBQWdjQkFwb2NNWEVBQUFBQVNVVk9SSzVDWUlJPSc7XG5jb25zdCBIRUxQX1BERl9GSUxFTkFNRSA9ICdhbXAtaGVscCc7XG5jb25zdCBIRUxQX0RJUiA9ICdoZWxwJztcbmNvbnN0IEVORFNfV0lUSF9QVU5DVFVBVElPTl9SRUdFWCA9IC9bLiE/LDs6XSQvO1xuXG5jb25zdCBNQVBfVElMRVNfRElSID0gJ21hcC10aWxlcyc7XG5jb25zdCBUSUxFU19aSVBfRklMRSA9ICdtYXAtdGlsZXMuemlwJztcblxuLyogZXNsaW50LWRpc2FibGUgbWF4LWxlbiAqL1xuY29uc3QgTUFQX01BUktFUl9JTUFHRSA9ICdkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUJrQUFBQXBDQVlBQUFEQWs0TE9BQUFGZ1VsRVFWUjRBYTFYQTVCaldSVE4yb1cxN2QzWWFadHIyOTYySFV6YkROcGpzelcyNG1SdDI4cDQ3djd6cS9iWFp0cnAvbFduWHIzMzdqM25QQ2U4NU5jeXBnU0ZkdWdDcFc1WW9EQU1SYUlNcVJpNmFLcTVFM1lxRFFPM3FBd2pWV3JEOE5jcS9SQnB5a2Q4b1pVYi9rYUp1dG93OHIxYVA5SUkwV21MS0xJc0p5djF3L2txdzlDaDJNWWRCKysxMk9ueGVlL1FNd3ZmNC9Eay9MZnAvaTRueFRYdE9vUTRwVzVBajd3cGljaTFBOWVyZEFOMk9INjR4OE9TUDlqM0Z0M2I3YVdrVGcvRm05MXNpVHJhMGY5b241c1FyOUlOZWpINkNVVVVwYXZqRk5xMUIrT2FkaHhtbmZhOFJmRW1OOFZOQXNRaFBxRjU1eEhrTXp6M2pTbUNoV1U2ZjcvWFpLTkgrOStoQkxPSFlvenVLUVB4eU1QVUtrclgvSzB1V25mRmFKR1MxUVBSdFpzT1B0cjNOc1cwdXloNk5OQ09rVTNZeitiWGJUM0k4RzN4RTVFWExYdENYYmJxd0NPOXpQUVlQUlRaNXZJRFhEN1UrdzdyRkRFb1VVZjdpYkhJUjR5NmJMVlBYcno4SlZaRXFsMTN0cnh3dWUvdURpdmQzZmtXUmJTNi9JQTJiSUQ0dWswVXBGMU44cUxsYkJsWHM0RWU3SExUZlYxajU0QVB2T0RuU2ZPV0JxdEtWdmpnTEt6RjVZZEVrNWV3UmtHbEswaTMzRW9mZmZjN0hUNTZqRDcvNlUrcUgzQ3g3U0JMTm50SDVZSVB2T0RueWZJWFpZUlZEUHFnSHRMczVBQkhEM1l6THVlc3BiN3Q3OUZZMzREak13clZyY1R1d2xUNTVZTVB2T0JuUnJKNFZYVGRObll1ZzV1Y0hMQmpFcHQzMDcwMUEzVHMrSEVhNzN1NmRUM0ZOV3dmbFk4NmVNSFBrK1l1K2k2cHpVcFJyVzdTTkRnNUpIUjRLYXBtTTVXdjJFOFRmY2IxSG9xcUhNSFUrdVdERDd6ZzU0bXo1LzJCU25pemk5VDFEZzRRUVhMVG9HTkNrYjZ0YjFOVStRQWxHcjErK2VBRHJ6aG4vdThRMllaaFFWbFo1K0NBT3RxZmJobWFVQ1MxZXpORlZtMmltRGJQbVBuZzV3bXorZ3doK29IRGNlMGVVdFE2T0dESXlSMHVVaFVzb08zdmZEbW1nT2V6SDBtWk41OXg3TUJpKytXREwxZy9lRWlVM2F2bGlkTzY3MWJrTGZ3Ync1WFYyUDhQem8weWR5NHQyLzBldTMzeFlTT01PRDhoVGY0Q3JCdEdNU29YZlBMY2hYK0owcnVTZVB3M0xaZUswanVQSmJZenJoa0gwaW83QjNrMTY0aGlHdmF3aE9LTUxrclFMeVZwWmc4ckhGVzdFMnVIT0w4ODhJQlBsTloxRlB6c3RTSk02OTRmV3I2UndwdmNKSzYwKzBIQ0lMVEJ6WkxGTmR0QXpKYW9oemU2MFQ4cUJ6eWg1WnVPZzVlN3V3UXBwb2ZFbWYyKytEWXZteVNxR0J1S2FpY0YxYmxRamh1SGR2Q0lNdnA4d2hUVGZaekk3UmxkcHd0U3pMK0YxK3drZFoyVEJPVzJnSUY4OFBCVHpEL2dwZVJFQU1FYnhuSmNhSkhOSHJwemppMGdRQ1M2aGRrRWVZdDlERi8ycVBjRUM4Uk0yOEh3bXIzc2ROeWh0MDBieUF1dDJrM2d1ZldOdGd0T0VPRkdVd2NYV05EYmROYnBnQkd4RXZLa09Rc3hpdkp4MzNpb3cwVnc1UzZTVlRycFZxMTF5c0EyUnA3Z1RmUGZrdGM2emh0WEJCQythZFJMc2hmNnNHMlJmSFBaNUVBYzRzVlo4M3lDTjAwRmsvNGtnZ3U0MFpUdklFbTVnMjRxdFU0S2pCcngvQlRUSDhpZlZBU0FHN2dLcm5XeEpEY1U3eDhYNkVjY3pobTNvNllpY3ZzTFhXZmgzQ2gxVzBrOHgwblhGKzBmRnhndDRwaHo4UXZ5cGl3Q0NGS01xWENucVhFeGpxMTBiZUgrVVVBNytuRzZtZEcvUHUwZjNMZ0ZjR3JsMnMwa05OanBtb0o5bzRCMjlDTU84ZE1UNFE1b3g4dWl0RjZmcXNySk9yOHFud05iUnp2NmhTbkc1d1ArNjRDN2g5bHAzMGhLTnRLZFdqdGRrYnVQQTE5bko3VHozelIvaWJnQVJiaGI0QWxoYXZjQmVibVRIY0ZsMmZ2WUVuVzBveDl4TXhLQlM4YnRKK0tpRWJxOXpBNFJ0aFFYRGhQYTBUOVRFZTY5Z1d1cHdjNnVCVXBocXVYZ2YrL0ZySWp3ZUhRUzQvcGR1TWU1RVJVTUhVZDl4djhaUjk4Q3hrUzRGMm4zRVVyVVoxMEVZTnc3QldtOXgxR2lQc3NpM0dnaUdSREtXUllaZlhsT04rZGZOYk0rR2dJd1lkd0FBQUFBU1VWT1JLNUNZSUk9JztcbmNvbnN0IE1BUF9NQVJLRVJfU0hBRE9XID0gJ2RhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQ2tBQUFBcENBUUFBQUFDYWNoOUFBQUNNVWxFUVZSNEFlM1NoWTdqUUJBRTBBb3ovZjkvSFRNemhnMXpyZEtVckpiZHgrS2QybkQ4Vk51ZGZzTC9UaC8vL2R5UU4yVEg2ZjN5L0JHcEMzNzlyVitTK3FxZXRCT3hJbU5RWEw4SkNBcjJWNGlNUVhIR05KeGVDZlpYaFNSQmNRTWZ2a09XVWR0ZnpsTGdBRU5tWkRjbW8yVFZtdDhPU00yZVh4QnAzRGpIU01GdXRxUzdTYm1lbXpCaVIreHBLQ05VSVJrZGtrWXhoQWt5R29CdnlRRkVKRWVmd1NtbXZCZkp1SjZhS3FLV25Ba3ZHWk9hWlhUVWdGcVlVTFdOU0hVY2tadVIxSElJaW1VRXh1dFJ4d3pPTFJPSUc0dkttQ0tRdDM2NG1JbGhTeXpBZjFtOWxIWkhKWnJsQU9NTXp0UlJpS2ltcC9ycGRKRGM5QXdyeTV4VFpDdGU3Rkh0dVM4d0pnZVlHcmV4Mjh4TlRkMDg2RGlrN3ZVTXNjUU9hOHk0RG9HdENDU2tBS2xOd3BnTnRwaGpyQzZNSUhVa1I2WVd4eHM2U2M1eHFuMjIybW1DUkZ6SXQ4bEVkS3graWtDdGc5MXFTMldwd1ZmQmVsSkNpUUp3dnppeGZJOWN4WlFXZ2lTSmVsS253QkVsS1l0RE9iMk1GYmhtVWlnYlJlUUJWMENnNCtxTVhTeFhTeUdVbjRVYkY4bCs3cWRTR25UQzBYTENtYWhJZ1VITGhMT2hwVkN0dzRDellYdkxRV1FiSk5teG9Dc09LQXhTZ0JKbm83NWF2b2xrUnc4aUlBRmNzZGMwMmU5aXlDZDh0SHdtZVNTb0tUb3dJZ3ZzY1NHWlVPQTdQdUNONWIyQlg5bVFNN1Mwd1loTU5VNzR6Z3NQQmozSFU3d2d1QWZueHhqRlFHQkU2cHdOK0dqTUU5ekhZN3pHcDh3VnhNU2hZWDlOWHZFV0QzSGJ3SmY0Z2lPNENGSVF4WFNjSDEvVE0rMDRra0JpQUFBQUFFbEZUa1N1UW1DQyc7XG5jb25zdCBNQVBfTUFSS0VSX0NJUkNMRV9SRUQgPSAnZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFCUUFBQUFVQ0FZQUFBQ05pUjBOQUFBQUJHZEJUVUVBQUxHUEMveGhCUUFBQUNCalNGSk5BQUI2SmdBQWdJUUFBUG9BQUFDQTZBQUFkVEFBQU9wZ0FBQTZtQUFBRjNDY3VsRThBQUFBQm1KTFIwUUEvd0QvQVArZ3ZhZVRBQUFBQjNSSlRVVUg0Z2NiRndvZ2VvaGhFQUFBQTFsSlJFRlVPTXVsbGMxckhHVWN4eisvWjJaMjB6R0U3bHV5UWJ5SWRpRXhyZTZhTnZTeVNFQkJLQjcxVkFJNW1HSkE5ZzhRcFI0OGFWR0s2SzE2MHB0WUQ3V3hoNENVa0pyRkdwS3lLV2dRbW5YZmFadDl5V2FlZVR6c1RFeGoxWU8vMC9ETXpHZCtiOS92Q0VIOGN1NTFqc1FRa0FFbWdGUndWZ00yZ1JMUU8vend5YXRmQXlDUGdVV0FWNEE1WUFaSUFuWnd6d1Bxd0Fwd0JmZ2U2QitHeWhGWUduZ1hPQSs0QUJqemFONGk0VlVIK0JKNEQ2aUVoL1lSMkdmQWF3Y2dZMUJQdUZqRHd3RG8zVjM4ZG1jQUZYR0JCV0FjZURPRWhzQklrTmtBNXZzNHlRU3gyVHdqcDNQWThkaWczbWFMKzZ0cnRHNHM0OVVib0JUQk8yWGdiYUJ2WGNnOEIvQXE4RDdnNFBzTVBmTTBUeFhld3MwK3p4OTM3dkQ3OG85VU56YlJqazNxcFR3akw1eWsrK3MyWHFNWnRtQUMrQm5Zc29OcHpnRXV4dUFrRXp4NVlaNitZMU44NXlLMTlRMk01dzNhWjl1a3BpYkpGaFlaWDVqbnR3OCtoR1lyTEg4T1dGTEJhc3lFZll2TjVySEdSaWxldWt5bGVCdU1RU3dMc1N3d2hrcnhOc1ZMbDdIVG8wVHpaK2w2SHNHWVpvQ01DdEpOaGdNWU9aMmp2UG9UdGZVTmxHMGQzVTJVYlZGYjM2QnlhNDM0bVdscUNqb0RhQktZVU1IUzJnRFc4REIyUEVacjYrNUJtWThMNDNrMFMxdTR5UVMrZTR5ZFRwdU8xclpBeXViL2hnZzk3Vkh1dGprZWlhSVl5TWtMOTh4cnRvaGxua1hzZi82VzJEYnh6QW02OVFiOUJ3OFJFWHBhNzFkNzNhcGlvTTA2SXZqdER2ZFgxeGlmZnBIVTFDUytwLzhHOHoxTmFtcVM5SFNPZXpkWDJHKzNRUVNCdXNDbVlpRDBsVEQ5MW8xbGRLVkt0ckRJV1BZVWlHQzB4bWdOSW94bFQ1RXJMTEs3VTJiNzJ0SmhLYTQ0U3BWQ0xaOER2Z0xjY0xISEYrYXgwNk5VYnEzUkxHMEJFTStjSUQyZFkzZW56TnBIbjlBczNVVUdhbWxiSW0vNHhud1hBaVBBeDRFMndmY2hFU2VhUDB2OHpEUnVNZ0ZBdDk3ZzNzMFZ0cTh0MGFuV1FoZ0NuMFl0cStBYjB6L3NObVBBNTRmTm9ldDUxQlQ0N2pFUW9mL2c0Vjg5QzBvVitNWVN0V0F3RllVODRqWVZCcTVSQnM0ajRycU9ROHJ6MktrMTZHa1BFVG5JQ21nTGZHR0p1dWhqS3I0eHhJZWkvMjJ3QXNtdTF2Wk90MDFQNjMwSkRGYUpYSEdVdXI3diszMXREUEZJbEpkL3VNckJpUDd0RnlDUWF2VDNxUGE2VllGTlI2blNudFo3amxJWTRIZ2t3dXoxYndINEU1bUNYSUJMUTVIbkFBQUFKWFJGV0hSa1lYUmxPbU55WldGMFpRQXlNREU0TFRBM0xUSTNWREl4T2pFd09qTXlLekF5T2pBdzdxNkdud0FBQUNWMFJWaDBaR0YwWlRwdGIyUnBabmtBTWpBeE9DMHdOeTB5TjFReU1Ub3hNRG96TWlzd01qb3dNSi96UGlNQUFBQUFTVVZPUks1Q1lJST0nO1xuY29uc3QgTUFQX01BUktFUl9DSVJDTEVfR1JFRU4gPSAnZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFCUUFBQUFVQ0FZQUFBQ05pUjBOQUFBQUJtSkxSMFFBL3dEL0FQK2d2YWVUQUFBQUNYQklXWE1BQUFzVEFBQUxFd0VBbXB3WUFBQUFCM1JKVFVVSDRnY2JGQmc2L1ZoVzRBQUFBNVZKUkVGVU9NdWxsVUZvSEZVWXgzL3Z6ZXhrdThWa2R6UHJwZ3BXTkpvbTRKbzBOYVNuSWtIckpSYjFVRkFzWG1xM0tsaXZKcUNIaEo0cXNRZHRta3NWRktRZ1lrVGEwRXJ4VUNNaGFkMUNRclEwRGJhSjI5MWtkOTFrSnJzN004OURacG8wQkJUOHoyVjQ3L0Y3My9mZTkvK2V3RmVtOXpDYjFUOFlEUU10UUJ1UThJZHp3RFF3TzlCWFhOdThQalg2RFFCaUs2eC9NR29BQjRHM2dHN0FCSFIvMmdIeXdEaHdEcmc0MEZlc2JvYUtMYkFtNENQZ0NCQUI4UEFlaUZ3aWcxOEwrQkw0ZUtDdm1OMllmeEIyQmtnREVZLzFMeUoza0F5WkpFTW1FYm1EWU56Zk1BME05dzlHa3dGSFpIb1BCMmwrNmkvQXc2TXhGS01udHArdStoUnh2UUdBWmFmRVJPa0dsd3RYeVR1RnpkR2VBZDRmNkN0V2c3TTU2S2VKaDBkemVEZkhIMzJkcE5iSXhHS0dTNFdmQVdpSk5kTzc2M202NmxOOGZ2ZHJicTdOQjlBandJL0FxSGc1Y3l3TWZBVzhHa1QyNFdOcDlLckcwTlFJbWZ3TWp1Y0FvRXVkbE5uS2liMUhxZW9WVHM2ZFpabFNBUDBXZUVQNnBkRWR4TjRUMjA5U2EyUm9hb1RKN0hXVVVtaENReE1hU2lrbXM5Y1ptaHFoU1grWUEzWDdjRzBISlJRK28wWDZkV1lHRjlCVm4rTFh4V3RrOGpQbzBtQ3JkR21ReWM4d2tmMk43bmdISXVmaVdEV1VVQ2JRSnYyaTFRRWUwbllTMXh2NG96QjNQODN0NUhnT3Z5L2Z3b3pFaVhoaHJJVXludVhxU3FpRTVIOUtJbkFyRHRaZlpXcExGWFRmVGc1Z2xOMVZscDBTTGJGbWRLbWpsTm9Xb2t1ZHArTlBrTE9YS05YS0NDRndiYWRtVjFmdVNkK2JlWW5FOG13bVNqZDRibGVLbE5tSzQxVzNTYmRLeW15bHE2bWRYKzVPc2xxekVFcUFKQTlNUzJEVzl5WUFsd3RYeWJwTG5OaDdsTTVrKy9ydXlzVlZMa0lJT3BQdGZORDVOZ3NyV1M3Y3ZySU9XOWU0TkxSWjdmeWRadWVubnJBTkhCS0kwS3BuYzh2K2s0NkdQZlR1Zm9Fbm80L3p5TTRrejVoN2VPV3BsM2l6N1RVS2F5Vk9UUTR6WDc2REZCSmdWVWpSZjN6bzc1bkFLUmQ5bzZjbGtwdHI4NXljTzh1QnVuMTB4enQ0TnRHMjNydnNKYzdQL3NDRjIxZkkycmtONjBtK2tJWTJGcEp5bzl2NEJoOEdEZ1VXZEcwSGtYT0plR0VrZ2xLdGZQL01oQkFCN0R1aHFmUjdwNjJzUkd5NDIyOUJ4M3lqV3hLSkhnbWhFaG81ZDVrRks0dmwyRWhrQUZ0RjhwblFWUHJkMDFiV1ZZcG9uZkh2RFZZSlpicTJvOXVMSzdpMlUvTnZjMXdJY1U0YTJ0ZzduNVNxcmxMRWpUcGV2RFNLK0M5UGdCSXFVVnVxWU9kVzdnSFQwdEJtMDZlS2xaQ1VLQ0JxR1BTTWZRL0FQeTFYZzJ2NktJc0ZBQUFBQUVsRlRrU3VRbUNDJztcbi8qIGVzbGludC1lbmFibGUgbWF4LWxlbiAqL1xuY29uc3QgUE9MWUdPTl9CQVNFX0NPTE9SID0gJyMzMzg4ZmYnO1xuXG5jb25zdCBER19DT01QQU5ZX05BTUUgPSAnRGV2ZWxvcG1lbnQgR2F0ZXdheSc7XG5jb25zdCBER19BRERSRVNTXzEgPSAnMTExMCBWZXJtb250IEF2ZSwgTlcsIFN1aXRlIDUwMCc7XG5jb25zdCBER19BRERSRVNTXzIgPSAnV2FzaGluZ3RvbiwgREMgMjAwMDUgVVNBJztcbmNvbnN0IERHX0NPTlRBQ1RfSU5GTyA9ICdpbmZvQGRldmVsb3BtZW50Z2F0ZXdheS5vcmcsIFRlbDogKzEuMjAyLjU3Mi45MjAwLCBGYXg6ICsxIDIwMi41NzIuOTI5MCc7XG5cbmNvbnN0IExPR19ESVIgPSAnbG9ncyc7XG5jb25zdCBMT0dfRklMRV9OQU1FID0gJ2FtcG9mZmxpbmUnO1xuY29uc3QgTE9HX0ZJTEVfRVhURU5TSU9OID0gJ2xvZyc7XG5cbi8vIE1lc3NhZ2UgY29uc3RhbnRzXG4vLyB0b3RhbCBhbW91bnQgb2YgdGltZSB0aGUgbWVzc2FnZSBzdGF5cyB2aXNpYmxlXG5jb25zdCBNRVNTQUdFX1RJTUVPVVQgPSAxMCAqIDEwMDA7XG4vLyB3aGVuIGl0J3MgdGhpcyBhbW91bnQgb2YgdGltZSBsZWZ0LCB3ZSBub2ZpdHkgdGhlIHVzZXIgdGhhdCB0aGUgbWVzc2FnZSBpcyBhYm91dCB0byBkaXNhcHBlYXJcbmNvbnN0IE1FU1NBR0VfRElTQVBQRUFSX1RJTUVPVVQgPSBNRVNTQUdFX1RJTUVPVVQgLyA1O1xuY29uc3QgTUVTU0FHRV9DSEVDS19JTlRFUlZBTCA9IDEwMDtcbi8vIGhvdyBsb25nIHNob3VsZCB0aGUgZW50ZXIvbGVhdmUgYW5pbWF0aW9uIHJ1bihtcylcbi8vIChpZiB5b3UgY2hhbmdlIHRoaXMgeW91J2xsIHdhbm5hIGNoYW5nZSBpdCBpbiBzdHlsZS5jc3MsIHRvbylcbmNvbnN0IE1FU1NBR0VfQU5JTUFUSU9OX0RVUkFUSU9OID0gNTAwO1xuXG4vLyB0aGlzIGlzIHRoZSBpbnRlcm5hbCBkYXRlIGZvcm1hdCB1c2VkIHRvIHN0b3JlIGFuZCBzeW5jIHVwIGRhdGVzXG5jb25zdCBJTlRFUk5BTF9EQVRFX0ZPUk1BVCA9ICdZWVlZLU1NLUREVEhIOm1tOnNzLlNTU1onO1xuLy8gY3VycmVudGx5IHN1cHBvcnRlZCBtYXggJiBtaW4geWVhcnMgaW4gQU1QLCBpLmUuIGZyb20gMTk3MC0wMS0wMSB0aWxsIDIwNTAtMTItMzFcbmNvbnN0IE1JTl9TVVBQT1JURURfWUVBUiA9IDE5NzA7XG5jb25zdCBNQVhfU1VQUE9SVEVEX1lFQVIgPSAyMDUwO1xuXG5jb25zdCBVUERBVEVTX0RJUiA9ICd1cGRhdGVzJztcbmNvbnN0IENPTlRFTlRfRElTUE9TSVRJT05fSEVBREVSID0gJ0NvbnRlbnQtRGlzcG9zaXRpb24nO1xuY29uc3QgVVBEQVRFX1RNUF9GSUxFID0gJ2FtcC1vZmZsaW5lLWluc3RhbGxlci50bXAnO1xuXG5jb25zdCBPVEhFUl9JRCA9IDk5OTk5OTk5OTtcbmNvbnN0IE5SX1NZTkNfSElTVE9SWV9FTlRSSUVTID0gMjA7XG5jb25zdCBOUl9MT0dfRklMRVMgPSAxMDA7XG4vLyBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9JU09fODYwMSNEdXJhdGlvbnMsIGV4YW1wbGU6IFwiUDFZMk0xMERUMkgzME1cIlxuY29uc3QgT0xEX1NZTkNfTE9HU19EVVJBVElPTl9JU09fODYwMSA9ICdQNk0nO1xuY29uc3QgTlJfT0xEX1NZTkNfTE9HU19UT19LRUVQX01JTklNVU0gPSBOUl9TWU5DX0hJU1RPUllfRU5UUklFUztcblxuY29uc3QgTUFTVEVSX0JSQU5DSCA9ICdtYXN0ZXInO1xuY29uc3QgREVWRUxPUF9CUkFOQ0ggPSAnZGV2ZWxvcCc7XG5jb25zdCBSRUxFQVNFX0JSQU5DSF9SRUdFWCA9IC9yZWxlYXNlXFwvLztcbmNvbnN0IFJFTEVBU0VfQlJBTkNIRVMgPSBbTUFTVEVSX0JSQU5DSCwgUkVMRUFTRV9CUkFOQ0hfUkVHRVhdO1xuXG5jb25zdCBESVNBQkxFX0NIQU5HRUxPR1MgPSAnRElTQUJMRV9DSEFOR0VMT0dTJztcblxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuZnJlZXplKHtcbiAgQkFTRV9SRVNUX1VSTCxcbiAgQ09OTkVDVElPTl9USU1FT1VULFxuICBDT05ORUNUSU9OX0ZPUkNFRF9USU1FT1VULFxuICBUSU1FT1VUX0NIRUNLX0lOVEVSVkFMLFxuICBNQVhfUkVUUllfQVRFTVBUUyxcbiAgRVJST1JTX1RPX1JFVFJZLFxuICBFUlJPUlNfTk9fQU1QX1NFUlZFUixcbiAgQ09OTkVDVElWSVRZX0NIRUNLX0lOVEVSVkFMLFxuICBXT1JLU1BBQ0VfVVJMLFxuICBMT0dJTl9VUkwsXG4gIERFU0tUT1BfVVJMLFxuICBERVNLVE9QX0NVUlJFTlRfVVJMLFxuICBTWU5DVVBfUkVESVJFQ1RfVVJMLFxuICBTWU5DVVBfSElTVE9SWV9UQVJHRVQsXG4gIFNZTkNVUF9TVU1NQVJZX1VSTCxcbiAgQUNUSVZJVFlfUFJFVklFV19VUkwsXG4gIEFDVElWSVRZX0VESVRfVVJMLFxuICBVUERBVEVfVVJMLFxuICBTRVRVUF9VUkwsXG4gIFNFVFRJTkdTX1VSTCxcbiAgQ09MTEVDVElPTl9VU0VSUyxcbiAgQ09MTEVDVElPTl9XT1JLUEFDRVMsXG4gIENPTExFQ1RJT05fVEVBTU1FTUJFUlMsXG4gIENPTExFQ1RJT05fQ0xJRU5UX1NFVFRJTkdTLFxuICBDT0xMRUNUSU9OX0dMT0JBTF9TRVRUSU5HUyxcbiAgQ09MTEVDVElPTl9BQ1RJVklUSUVTLFxuICBDT0xMRUNUSU9OX0ZJRUxEUyxcbiAgQ09MTEVDVElPTl9QT1NTSUJMRV9WQUxVRVMsXG4gIENPTExFQ1RJT05fU1lOQ1VQX0xPRyxcbiAgQ09MTEVDVElPTl9MQU5HUyxcbiAgQ09MTEVDVElPTl9XU19TRVRUSU5HUyxcbiAgQ09MTEVDVElPTl9DVVJSRU5DWV9SQVRFUyxcbiAgQ09MTEVDVElPTl9GRUFUVVJFX01BTkFHRVIsXG4gIENPTExFQ1RJT05fQ09OVEFDVFMsXG4gIENPTExFQ1RJT05fUkVTT1VSQ0VTLFxuICBDT0xMRUNUSU9OX1JFUE9TSVRPUlksXG4gIENPTExFQ1RJT05fR0FaRVRURUVSLFxuICBDT0xMRUNUSU9OX0NBTEVOREFSUyxcbiAgQ09MTEVDVElPTl9DSEFOR0VTRVRTLFxuICBHQVpFVFRFRVJfRElTVEFOQ0VfRElWSURFLFxuICBEQl9GSUxFX1BSRUZJWCxcbiAgREJfRklMRV9FWFRFTlNJT04sXG4gIERCX0NPTU1PTl9EQVRBU1RPUkVfT1BUSU9OUyxcbiAgREJfQVVUT0NPTVBBQ1RfSU5URVJWQUxfTUlMSVNFQ09ORFMsXG4gIERCX0RFRkFVTFRfUVVFUllfTElNSVQsXG4gIExBTkdVQUdFX0VOR0xJU0gsXG4gIEZTX0xPQ0FMRVNfRElSRUNUT1JZLFxuICBMQU5HVUFHRV9NQVNURVJfVFJBTlNMQVRJT05TX0ZJTEUsXG4gIExBTkdVQUdFX1RSQU5TTEFUSU9OU19GSUxFLFxuICBMQU5HVUFHRV9ORVdfVFJBTlNMQVRJT05TX01VU1RfU1lOQyxcbiAgQVNBUl9ESVIsXG4gIEFQUF9ESVJFQ1RPUlksXG4gIFRFU1RfRElSRUNUT1JZLFxuICBTVEFUSUNfRElSLFxuICBJTUFHRVNfRElSLFxuICBET0NfSUNPTlMsXG4gIERCX1NUQVRJQ19ESVIsXG4gIE1JR1JBVElPTlNfRElSLFxuICBIQVNIX0lURVJBVElPTlMsXG4gIERJR0VTVF9BTEdPUklUSE1fU0hBMSxcbiAgRElHRVNUX0FMR09SSVRITV9TSEEyNTYsXG4gIEFDVElWSVRZX0VESVQsXG4gIEFDVElWSVRZX1ZJRVcsXG4gIFNZTkNVUF9GT1JDRV9EQVlTLFxuICBTWU5DVVBfQkVTVF9CRUZPUkVfREFZUyxcbiAgU1lOQ1VQX05PX0RBVEUsXG4gIFNZTkNVUF9UWVBFX1RSQU5TTEFUSU9OUyxcbiAgU1lOQ1VQX1RZUEVfVVNFUlMsXG4gIFNZTkNVUF9UWVBFX0FTU0VUUyxcbiAgU1lOQ1VQX1RZUEVfV09SS1NQQUNFUyxcbiAgU1lOQ1VQX1RZUEVfR1MsXG4gIFNZTkNVUF9UWVBFX0VYQ0hBTkdFX1JBVEVTLFxuICBTWU5DVVBfVFlQRV9GRUFUVVJFX01BTkFHRVIsXG4gIFNZTkNVUF9UWVBFX1dPUktTUEFDRV9NRU1CRVJTLFxuICBTWU5DVVBfVFlQRV9BTExfRklFTERTLFxuICBTWU5DVVBfVFlQRV9BQ1RJVklUSUVTX1BVTEwsXG4gIFNZTkNVUF9UWVBFX0FDVElWSVRJRVNfUFVTSCxcbiAgU1lOQ1VQX1RZUEVfQUNUSVZJVFlfRklFTERTLFxuICBTWU5DVVBfVFlQRV9BQ1RJVklUWV9GSUVMRFNfU1RSVUNUVVJBTF9DSEFOR0VTLFxuICBTWU5DVVBfVFlQRV9DT05UQUNUU19QVUxMLFxuICBTWU5DVVBfVFlQRV9DT05UQUNUU19QVVNILFxuICBTWU5DVVBfVFlQRV9BQ1RJVklUWV9QT1NTSUJMRV9WQUxVRVMsXG4gIFNZTkNVUF9UWVBFX0NPTlRBQ1RfRklFTERTLFxuICBTWU5DVVBfVFlQRV9DT05UQUNUX0ZJRUxEU19TVFJVQ1RVUkFMX0NIQU5HRVMsXG4gIFNZTkNVUF9UWVBFX0NPTlRBQ1RfUE9TU0lCTEVfVkFMVUVTLFxuICBTWU5DVVBfVFlQRV9SRVNPVVJDRVNfUFVMTCxcbiAgU1lOQ1VQX1RZUEVfUkVTT1VSQ0VTX1BVU0gsXG4gIFNZTkNVUF9UWVBFX1JFU09VUkNFX0ZJRUxEUyxcbiAgU1lOQ1VQX1RZUEVfUkVTT1VSQ0VfRklFTERTX1NUUlVDVFVSQUxfQ0hBTkdFUyxcbiAgU1lOQ1VQX1RZUEVfUkVTT1VSQ0VfUE9TU0lCTEVfVkFMVUVTLFxuICBTWU5DVVBfVFlQRV9DT01NT05fUE9TU0lCTEVfVkFMVUVTLFxuICBTWU5DVVBfVFlQRV9XT1JLU1BBQ0VfU0VUVElOR1MsXG4gIFNZTkNVUF9UWVBFX01BUF9USUxFUyxcbiAgU1lOQ1VQX1RZUEVfR0FaRVRURUVSLFxuICBTWU5DVVBfVFlQRV9DQUxFTkRBUlMsXG4gIFNZTkNVUF9TVEFUVVNfU1VDQ0VTUyxcbiAgU1lOQ1VQX1NUQVRVU19GQUlMLFxuICBTWU5DVVBfU1RBVFVTX1BBUlRJQUwsXG4gIFNZTkNVUF9TVEFUVVNfQ0FOQ0VMRUQsXG4gIFNZTkNVUF9TWU5DX1JFUVVFU1RFRF9BVCxcbiAgU1lOQ1VQX1NZTkNfUkVRVUVTVEVEX0JZLFxuICBTWU5DVVBfREFURVRJTUVfRklFTEQsXG4gIFNZTkNVUF9ESUZGX0xFRlRPVkVSLFxuICBTWU5DVVBfREVQRU5ERU5DWV9DSEVDS19JTlRFUlZBTCxcbiAgU1lOQ1VQX0RFVEFJTFNfU1lOQ0VELFxuICBTWU5DVVBfREVUQUlMU19VTlNZTkNFRCxcbiAgU1lOQ1VQX1JFU09VUkNFX1BVTExfQkFUQ0hfU0laRSxcbiAgU1lOQ1VQX0FDVElWSVRJRVNfUFVMTF9CQVRDSF9TSVpFLFxuICBTWU5DVVBfQ09OVEFDVFNfUFVMTF9CQVRDSF9TSVpFLFxuICBBQ1RJVklUWV9TVEFUVVNfRFJBRlQsXG4gIEFDVElWSVRZX1NUQVRVU19VTlZBTElEQVRFRCxcbiAgQUNUSVZJVFlfU1RBVFVTX1ZBTElEQVRFRCxcbiAgQ1VSUkVOQ1lfSE9VUixcbiAgREVGQVVMVF9DVVJSRU5DWSxcbiAgUkFURV9TQU1FX0NVUlJFTkNZLFxuICBSQVRFX0NVUlJFTkNZX05PVF9GT1VORCxcbiAgQ1VSUkVOQ1lfUEFJUixcbiAgVkVSU0lPTl9QQVRURVJOLFxuICBWRVJTSU9OX1BBVFRFUk5fR1JPVVBTX1RPX0VYVFJBQ1QsXG4gIEFNUF9DT1VOVFJZX0xPR08sXG4gIEFTU0VUU19ESVJFQ1RPUlksXG4gIEJBU0VfNjRfUE5HX1BSRUZJWCxcbiAgVFJBTlNQQVJFTlRfRkxBRyxcbiAgSEVMUF9QREZfRklMRU5BTUUsXG4gIEhFTFBfRElSLFxuICBFTkRTX1dJVEhfUFVOQ1RVQVRJT05fUkVHRVgsXG4gIE1BUF9USUxFU19ESVIsXG4gIFRJTEVTX1pJUF9GSUxFLFxuICBNQVBfTUFSS0VSX0lNQUdFLFxuICBNQVBfTUFSS0VSX1NIQURPVyxcbiAgTUFQX01BUktFUl9DSVJDTEVfUkVELFxuICBNQVBfTUFSS0VSX0NJUkNMRV9HUkVFTixcbiAgUE9MWUdPTl9CQVNFX0NPTE9SLFxuICBER19DT01QQU5ZX05BTUUsXG4gIERHX0FERFJFU1NfMSxcbiAgREdfQUREUkVTU18yLFxuICBER19DT05UQUNUX0lORk8sXG4gIExPR19ESVIsXG4gIExPR19GSUxFX05BTUUsXG4gIExPR19GSUxFX0VYVEVOU0lPTixcbiAgTUVTU0FHRV9USU1FT1VULFxuICBNRVNTQUdFX0RJU0FQUEVBUl9USU1FT1VULFxuICBNRVNTQUdFX0NIRUNLX0lOVEVSVkFMLFxuICBNRVNTQUdFX0FOSU1BVElPTl9EVVJBVElPTixcbiAgSU5URVJOQUxfREFURV9GT1JNQVQsXG4gIE1JTl9TVVBQT1JURURfWUVBUixcbiAgTUFYX1NVUFBPUlRFRF9ZRUFSLFxuICBVUERBVEVTX0RJUixcbiAgQ09OVEVOVF9ESVNQT1NJVElPTl9IRUFERVIsXG4gIFVQREFURV9UTVBfRklMRSxcbiAgT1RIRVJfSUQsXG4gIE5SX1NZTkNfSElTVE9SWV9FTlRSSUVTLFxuICBOUl9MT0dfRklMRVMsXG4gIE9MRF9TWU5DX0xPR1NfRFVSQVRJT05fSVNPXzg2MDEsXG4gIE5SX09MRF9TWU5DX0xPR1NfVE9fS0VFUF9NSU5JTVVNLFxuICBNQVNURVJfQlJBTkNILFxuICBERVZFTE9QX0JSQU5DSCxcbiAgUkVMRUFTRV9CUkFOQ0hfUkVHRVgsXG4gIFJFTEVBU0VfQlJBTkNIRVMsXG4gIERJU0FCTEVfQ0hBTkdFTE9HU1xufSk7XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBtYXgtbGVuICovXG5cbi8qKlxuICogQGF1dGhvciBOYWRlamRhIE1hbmRyZXNjdVxuICovXG5cbmNvbnN0IFBVQkxJQ19WSUVXX0NIQU5HRV9QQVNTV09SRCA9ICcvUFVCTElDIFZJRVcvTG9naW4gLSBVc2VyIE1hbmFnZW1lbnQvQ2hhbmdlIFBhc3N3b3JkJztcbmNvbnN0IFBVQkxJQ19WSUVXX1RST1VCTEVfU0lHTl9JTiA9ICcvUFVCTElDIFZJRVcvTG9naW4gLSBVc2VyIE1hbmFnZW1lbnQvVHJvdWJsZSBzaWduaW5nIGluJztcbmNvbnN0IEFDVElWSVRZX0RFTElWRVJZX1JBVEUgPSAnL1BST0pFQ1QgTUFOQUdFTUVOVC9GdW5kaW5nL0Z1bmRpbmcgSW5mb3JtYXRpb24vRGVsaXZlcnkgcmF0ZSc7XG5jb25zdCBBQ1RJVklUWV9QUk9KRUNUX0lEX0FORF9QTEFOTklORyA9ICcvUFJPSkVDVCBNQU5BR0VNRU5UL1Byb2plY3QgSUQgYW5kIFBsYW5uaW5nJztcbmNvbnN0IEFDVElWSVRZX0RVUkFUSU9OX09GX1BST0pFQ1QgPSAnL1BST0pFQ1QgTUFOQUdFTUVOVC9Qcm9qZWN0IElEIGFuZCBQbGFubmluZy9QbGFubmluZy9EdXJhdGlvbiBvZiBQcm9qZWN0JztcbmNvbnN0IEFDVElWSVRZX1RFQU1fTEVBREVSID0gJy9QUk9KRUNUIE1BTkFHRU1FTlQvUHJvamVjdCBJRCBhbmQgUGxhbm5pbmcvSWRlbnRpZmljYXRpb24vRGF0YSBUZWFtIExlYWRlcic7XG5jb25zdCBBQ1RJVklUWV9TQU1FX0FTX1BST1BPU0VEX1NUQVJUX0RBVEUgPVxuICAnL0FjdGl2aXR5IEZvcm0vUGxhbm5pbmcvQWN0dWFsIFN0YXJ0IERhdGUvU2FtZSBBcyBQcm9wb3NlZCBTdGFydCBEYXRlJztcbmNvbnN0IEFDVElWSVRZX1NBTUVfQVNfUFJPUE9TRURfQVBQUk9WQUxfREFURSA9XG4gICcvQWN0aXZpdHkgRm9ybS9QbGFubmluZy9BY3R1YWwgQXBwcm92YWwgRGF0ZS9TYW1lIEFzIFByb3Bvc2VkIEFwcHJvdmFsIERhdGUnO1xuY29uc3QgQUNUSVZJVFlfSURFTlRJRklDQVRJT04gPSAnL0FjdGl2aXR5IEZvcm0vSWRlbnRpZmljYXRpb24nO1xuY29uc3QgQUNUSVZJVFlfTEFTVF9VUERBVEVEX0JZID0gJy9BY3Rpdml0eSBGb3JtL0lkZW50aWZpY2F0aW9uL0FjdGl2aXR5IExhc3QgVXBkYXRlZCBieSc7XG5jb25zdCBBQ1RJVklUWV9MQVNUX1VQREFURURfT04gPSAnL0FjdGl2aXR5IEZvcm0vSWRlbnRpZmljYXRpb24vQWN0aXZpdHkgVXBkYXRlZCBPbic7XG5jb25zdCBBQ1RJVklUWV9GVU5ESU5HID0gJy9BY3Rpdml0eSBGb3JtL0Z1bmRpbmcnO1xuY29uc3QgQUZfRlVORElOR19GVU5ESU5HR1JPVVBfRlVORElOR0lURU0gPSBgJHtBQ1RJVklUWV9GVU5ESU5HfS9GdW5kaW5nIEdyb3VwL0Z1bmRpbmcgSXRlbWA7XG5jb25zdCBBQ1RJVklUWV9TRUNUT1JTID0gJy9BY3Rpdml0eSBGb3JtL1NlY3RvcnMnO1xuY29uc3QgQUNUSVZJVFlfUFJJTUFSWV9TRUNUT1JTID0gJy9BY3Rpdml0eSBGb3JtL1NlY3RvcnMvUHJpbWFyeSBTZWN0b3JzJztcbmNvbnN0IEFDVElWSVRZX1NFQ09OREFSWV9TRUNUT1JTID0gJy9BY3Rpdml0eSBGb3JtL1NlY3RvcnMvU2Vjb25kYXJ5IFNlY3RvcnMnO1xuXG5jb25zdCBBQ1RJVklUWV9TVFJVQ1RVUkVTID0gJy9BY3Rpdml0eSBGb3JtL1N0cnVjdHVyZXMnO1xuY29uc3QgQUNUSVZJVFlfU1RSVUNUVVJFU19BRERfU1RSVUNUVVJFID0gYCR7QUNUSVZJVFlfU1RSVUNUVVJFU30vQWRkIFN0cnVjdHVyZWA7XG5cbmNvbnN0IEFDVElWSVRZX09SR0FOSVpBVElPTlMgPSAnL0FjdGl2aXR5IEZvcm0vT3JnYW5pemF0aW9ucyc7XG5jb25zdCBBQ1RJVklUWV9PUkdBTklaQVRJT05TX0RPTk9SX09SR0FOSVpBVElPTiA9IGAke0FDVElWSVRZX09SR0FOSVpBVElPTlN9L0Rvbm9yIE9yZ2FuaXphdGlvbmA7XG5jb25zdCBBQ1RJVklUWV9PUkdBTklaQVRJT05TX0JFTkVGSUNJQVJZX0FHRU5DWSA9IGAke0FDVElWSVRZX09SR0FOSVpBVElPTlN9L0JlbmVmaWNpYXJ5IEFnZW5jeWA7XG5jb25zdCBBQ1RJVklUWV9PUkdBTklaQVRJT05TX0NPTlRSQUNUSU5HX0FHRU5DWSA9IGAke0FDVElWSVRZX09SR0FOSVpBVElPTlN9L0NvbnRyYWN0aW5nIEFnZW5jeWA7XG5jb25zdCBBQ1RJVklUWV9PUkdBTklaQVRJT05TX0VYRUNVVElOR19BR0VOQ1kgPSBgJHtBQ1RJVklUWV9PUkdBTklaQVRJT05TfS9FeGVjdXRpbmcgQWdlbmN5YDtcbmNvbnN0IEFDVElWSVRZX09SR0FOSVpBVElPTlNfSU1QTEVNRU5USU5HX0FHRU5DWSA9IGAke0FDVElWSVRZX09SR0FOSVpBVElPTlN9L0ltcGxlbWVudGluZyBBZ2VuY3lgO1xuY29uc3QgQUNUSVZJVFlfT1JHQU5JWkFUSU9OU19SRUdJT05BTF9HUk9VUCA9IGAke0FDVElWSVRZX09SR0FOSVpBVElPTlN9L1JlZ2lvbmFsIEdyb3VwYDtcbmNvbnN0IEFDVElWSVRZX09SR0FOSVpBVElPTlNfUkVMQVRFRF9HT1ZFUk5NRU5UX09SR0FOSVpBVElPTiA9IGAke0FDVElWSVRZX09SR0FOSVpBVElPTlN9L1JlbGF0ZWQgR292ZXJubWVudCBPcmdhbml6YXRpb25gO1xuY29uc3QgQUNUSVZJVFlfT1JHQU5JWkFUSU9OU19TRUNUT1JfR1JPVVAgPSBgJHtBQ1RJVklUWV9PUkdBTklaQVRJT05TfS9TZWN0b3IgR3JvdXBgO1xuXG5jb25zdCBBRERfRlVORElOR19BVVRPID0gJ0FkZCBGdW5kaW5nIEl0ZW0gQXV0b21hdGljYWxseSc7XG5jb25zdCBBQ1RJVklUWV9PUkdBTklaQVRJT05TX0JFTkVGSUNJQVJZX0FHRU5DWV9BRERfRlVORElOR19BVVRPID0gYCR7QUNUSVZJVFlfT1JHQU5JWkFUSU9OU19CRU5FRklDSUFSWV9BR0VOQ1l9LyR7QUREX0ZVTkRJTkdfQVVUT31gO1xuY29uc3QgQUNUSVZJVFlfT1JHQU5JWkFUSU9OU19DT05UUkFDVElOR19BR0VOQ1lfQUREX0ZVTkRJTkdfQVVUTyA9IGAke0FDVElWSVRZX09SR0FOSVpBVElPTlNfQ09OVFJBQ1RJTkdfQUdFTkNZfS8ke0FERF9GVU5ESU5HX0FVVE99YDtcbmNvbnN0IEFDVElWSVRZX09SR0FOSVpBVElPTlNfRE9OT1JfT1JHQU5JWkFUSU9OX0FERF9GVU5ESU5HX0FVVE8gPSBgJHtBQ1RJVklUWV9PUkdBTklaQVRJT05TX0RPTk9SX09SR0FOSVpBVElPTn0vJHtBRERfRlVORElOR19BVVRPfWA7XG5jb25zdCBBQ1RJVklUWV9PUkdBTklaQVRJT05TX0VYRUNVVElOR19BR0VOQ1lfQUREX0ZVTkRJTkdfQVVUTyA9IGAke0FDVElWSVRZX09SR0FOSVpBVElPTlNfRVhFQ1VUSU5HX0FHRU5DWX0vJHtBRERfRlVORElOR19BVVRPfWA7XG5jb25zdCBBQ1RJVklUWV9PUkdBTklaQVRJT05TX0lNUExFTUVOVElOR19BR0VOQ1lfQUREX0ZVTkRJTkdfQVVUTyA9IGAke0FDVElWSVRZX09SR0FOSVpBVElPTlNfSU1QTEVNRU5USU5HX0FHRU5DWX0vJHtBRERfRlVORElOR19BVVRPfWA7XG5jb25zdCBBQ1RJVklUWV9PUkdBTklaQVRJT05TX1JFR0lPTkFMX0dST1VQX0FERF9GVU5ESU5HX0FVVE8gPSBgJHtBQ1RJVklUWV9PUkdBTklaQVRJT05TX1JFR0lPTkFMX0dST1VQfS8ke0FERF9GVU5ESU5HX0FVVE99YDtcbmNvbnN0IEFDVElWSVRZX09SR0FOSVpBVElPTlNfUkVTUE9OU0lCTEVfT1JHQU5JWkFUSU9OX0FERF9GVU5ESU5HX0FVVE8gPSBgJHtBQ1RJVklUWV9PUkdBTklaQVRJT05TX1JFTEFURURfR09WRVJOTUVOVF9PUkdBTklaQVRJT059LyR7QUREX0ZVTkRJTkdfQVVUT31gO1xuY29uc3QgQUNUSVZJVFlfT1JHQU5JWkFUSU9OU19TRUNUT1JfR1JPVVBfQUREX0ZVTkRJTkdfQVVUTyA9IGAke0FDVElWSVRZX09SR0FOSVpBVElPTlNfU0VDVE9SX0dST1VQfS8ke0FERF9GVU5ESU5HX0FVVE99YDtcblxuY29uc3QgQUNUSVZJVFlfRlVORElOR19TRUFSQ0ggPSBgJHtBQ1RJVklUWV9GVU5ESU5HfS9TZWFyY2ggRnVuZGluZyBPcmdhbml6YXRpb25zYDtcbmNvbnN0IEFDVElWSVRZX0ZVTkRJTkdfU0VBUkNIX09SR0FOSVpBVElPTiA9IGAke0FDVElWSVRZX0ZVTkRJTkdfU0VBUkNIfS9TZWFyY2ggT3JnYW5pemF0aW9uc2A7XG5jb25zdCBBQ1RJVklUWV9GVU5ESU5HX1NFTEVDVF9PUkdfVFlQRSA9IGAke0FDVElWSVRZX0ZVTkRJTkdfU0VBUkNIfS9TZWxlY3QgT3JnYW5pemF0aW9uIFR5cGVgO1xuXG5jb25zdCBBQ1RJVklUWV9QUk9HUkFNID0gJy9BY3Rpdml0eSBGb3JtL1Byb2dyYW0nO1xuY29uc3QgQUNUSVZJVFlfUExBTk5JTkcgPSAnL0FjdGl2aXR5IEZvcm0vUGxhbm5pbmcnO1xuXG5jb25zdCBBQ1RJVklUWV9DT05UQUNUID0gJy9BY3Rpdml0eSBGb3JtL0NvbnRhY3RzJztcbmNvbnN0IEFDVElWSVRZX0RPQ1VNRU5UU19BRERfRE9DVU1FTlQgPSAnL0FjdGl2aXR5IEZvcm0vUmVsYXRlZCBEb2N1bWVudHMvQWRkIE5ldyBEb2N1bWVudCc7XG5jb25zdCBBQ1RJVklUWV9ET0NVTUVOVFNfQUREX1dFQkxJTksgPSAnL0FjdGl2aXR5IEZvcm0vUmVsYXRlZCBEb2N1bWVudHMvQWRkIE5ldyBXZWIgTGluayc7XG5cbmNvbnN0IEFDVElWSVRZX0lTU1VFU19BRERfSVNTVUUgPSAnL0FjdGl2aXR5IEZvcm0vSXNzdWVzIFNlY3Rpb24vQWRkIElzc3VlJztcbmNvbnN0IEFDVElWSVRZX0lTU1VFU19ERUxFVEVfSVNTVUUgPSAnL0FjdGl2aXR5IEZvcm0vSXNzdWVzIFNlY3Rpb24vSXNzdWUvRGVsZXRlIEl0ZW0nO1xuY29uc3QgQUNUSVZJVFlfSVNTVUVTX0FERF9NRUFTVVJFID0gJy9BY3Rpdml0eSBGb3JtL0lzc3VlcyBTZWN0aW9uL0lzc3VlL0FkZCBJdGVtJztcbmNvbnN0IEFDVElWSVRZX0lTU1VFU19ERUxFVEVfTUVBU1VSRSA9ICcvQWN0aXZpdHkgRm9ybS9Jc3N1ZXMgU2VjdGlvbi9Jc3N1ZS9NZWFzdXJlL0RlbGV0ZSBJdGVtJztcbmNvbnN0IEFDVElWSVRZX0lTU1VFU19BRERfQUNUT1IgPSAnL0FjdGl2aXR5IEZvcm0vSXNzdWVzIFNlY3Rpb24vSXNzdWUvTWVhc3VyZS9BZGQgSXRlbSc7XG5jb25zdCBBQ1RJVklUWV9JU1NVRVNfREVMRVRFX0FDVE9SID0gJy9BY3Rpdml0eSBGb3JtL0lzc3VlcyBTZWN0aW9uL0lzc3VlL01lYXN1cmUvQWN0b3IvRGVsZXRlIEl0ZW0nO1xuXG5jb25zdCBBQ1RJVklUWV9ESVNCVVJTRU1FTlRTX0ZVTkRJTkdfRkxPV1NfT1JHUk9MRV9BRERfSU1QTEVNRU5USU5HX0FHRU5DWSA9XG4gIGAke0FGX0ZVTkRJTkdfRlVORElOR0dST1VQX0ZVTkRJTkdJVEVNfS9EaXNidXJzZW1lbnRzL0Rpc2J1cnNlbWVudHMgVGFibGUvRnVuZGluZyBGbG93cyBPcmdSb2xlIFNlbGVjdG9yL0FkZCBJbXBsZW1lbnRpbmcgQWdlbmN5YDtcbmNvbnN0IEFDVElWSVRZX0RJU0JVUlNFTUVOVFNfRlVORElOR19GTE9XU19PUkdST0xFX0FERF9DT05UUkFDVElOR19BR0VOQ1kgPVxuICBgJHtBRl9GVU5ESU5HX0ZVTkRJTkdHUk9VUF9GVU5ESU5HSVRFTX0vRGlzYnVyc2VtZW50cy9EaXNidXJzZW1lbnRzIFRhYmxlL0Z1bmRpbmcgRmxvd3MgT3JnUm9sZSBTZWxlY3Rvci9BZGQgQ29udHJhY3RpbmcgQWdlbmN5YDtcbmNvbnN0IEFDVElWSVRZX0RJU0JVUlNFTUVOVFNfRlVORElOR19GTE9XU19PUkdST0xFX0FERF9CRU5FRklDSUFSWV9BR0VOQ1kgPVxuICBgJHtBRl9GVU5ESU5HX0ZVTkRJTkdHUk9VUF9GVU5ESU5HSVRFTX0vRGlzYnVyc2VtZW50cy9EaXNidXJzZW1lbnRzIFRhYmxlL0Z1bmRpbmcgRmxvd3MgT3JnUm9sZSBTZWxlY3Rvci9BZGQgQmVuZWZpY2lhcnkgQWdlbmN5YDtcbmNvbnN0IEFDVElWSVRZX0RJU0JVUlNFTUVOVFNfRlVORElOR19GTE9XU19PUkdST0xFX0FERF9ET05PUl9PUkdBTklaQVRJT04gPVxuICBgJHtBRl9GVU5ESU5HX0ZVTkRJTkdHUk9VUF9GVU5ESU5HSVRFTX0vRGlzYnVyc2VtZW50cy9EaXNidXJzZW1lbnRzIFRhYmxlL0Z1bmRpbmcgRmxvd3MgT3JnUm9sZSBTZWxlY3Rvci9BZGQgRG9ub3IgT3JnYW5pemF0aW9uYDtcbmNvbnN0IEFDVElWSVRZX0RJU0JVUlNFTUVOVFNfRlVORElOR19GTE9XU19PUkdST0xFX0FERF9FWEVDVVRJTkdfQUdFTkNZID1cbiAgYCR7QUZfRlVORElOR19GVU5ESU5HR1JPVVBfRlVORElOR0lURU19L0Rpc2J1cnNlbWVudHMvRGlzYnVyc2VtZW50cyBUYWJsZS9GdW5kaW5nIEZsb3dzIE9yZ1JvbGUgU2VsZWN0b3IvQWRkIEV4ZWN1dGluZyBBZ2VuY3lgO1xuY29uc3QgQUNUSVZJVFlfRElTQlVSU0VNRU5UU19GVU5ESU5HX0ZMT1dTX09SR1JPTEVfQUREX1JFR0lPTkFMX0dST1VQID1cbiAgYCR7QUZfRlVORElOR19GVU5ESU5HR1JPVVBfRlVORElOR0lURU19L0Rpc2J1cnNlbWVudHMvRGlzYnVyc2VtZW50cyBUYWJsZS9GdW5kaW5nIEZsb3dzIE9yZ1JvbGUgU2VsZWN0b3IvQWRkIFJlZ2lvbmFsIEdyb3VwYDtcbmNvbnN0IEFDVElWSVRZX0RJU0JVUlNFTUVOVFNfRlVORElOR19GTE9XU19PUkdST0xFX0FERF9SRVNQT05TSUJMRV9PUkdBTklaQVRJT04gPVxuICBgJHtBRl9GVU5ESU5HX0ZVTkRJTkdHUk9VUF9GVU5ESU5HSVRFTX0vRGlzYnVyc2VtZW50cy9EaXNidXJzZW1lbnRzIFRhYmxlL0Z1bmRpbmcgRmxvd3MgT3JnUm9sZSBTZWxlY3Rvci9BZGQgUmVzcG9uc2libGUgT3JnYW5pemF0aW9uYDtcbmNvbnN0IEFDVElWSVRZX0RJU0JVUlNFTUVOVFNfRlVORElOR19GTE9XU19PUkdST0xFX0FERF9TRUNUT1JfR1JPVVAgPVxuICBgJHtBRl9GVU5ESU5HX0ZVTkRJTkdHUk9VUF9GVU5ESU5HSVRFTX0vRGlzYnVyc2VtZW50cy9EaXNidXJzZW1lbnRzIFRhYmxlL0Z1bmRpbmcgRmxvd3MgT3JnUm9sZSBTZWxlY3Rvci9BZGQgU2VjdG9yIEdyb3VwYDtcblxuY29uc3QgQUNUSVZJVFlfQ09NTUlUTUVOVFNfRlVORElOR19GTE9XU19PUkdST0xFX0FERF9JTVBMRU1FTlRJTkdfQUdFTkNZID1cbiAgYCR7QUZfRlVORElOR19GVU5ESU5HR1JPVVBfRlVORElOR0lURU19L0NvbW1pdG1lbnRzL0NvbW1pdG1lbnRzIFRhYmxlL0Z1bmRpbmcgRmxvd3MgT3JnUm9sZSBTZWxlY3Rvci9BZGQgSW1wbGVtZW50aW5nIEFnZW5jeWA7XG5jb25zdCBBQ1RJVklUWV9DT01NSVRNRU5UU19GVU5ESU5HX0ZMT1dTX09SR1JPTEVfQUREX0NPTlRSQUNUSU5HX0FHRU5DWSA9XG4gIGAke0FGX0ZVTkRJTkdfRlVORElOR0dST1VQX0ZVTkRJTkdJVEVNfS9Db21taXRtZW50cy9Db21taXRtZW50cyBUYWJsZS9GdW5kaW5nIEZsb3dzIE9yZ1JvbGUgU2VsZWN0b3IvQWRkIENvbnRyYWN0aW5nIEFnZW5jeWA7XG5jb25zdCBBQ1RJVklUWV9DT01NSVRNRU5UU19GVU5ESU5HX0ZMT1dTX09SR1JPTEVfQUREX0JFTkVGSUNJQVJZX0FHRU5DWSA9XG4gIGAke0FGX0ZVTkRJTkdfRlVORElOR0dST1VQX0ZVTkRJTkdJVEVNfS9Db21taXRtZW50cy9Db21taXRtZW50cyBUYWJsZS9GdW5kaW5nIEZsb3dzIE9yZ1JvbGUgU2VsZWN0b3IvQWRkIEJlbmVmaWNpYXJ5IEFnZW5jeWA7XG5jb25zdCBBQ1RJVklUWV9DT01NSVRNRU5UU19GVU5ESU5HX0ZMT1dTX09SR1JPTEVfQUREX0RPTk9SX09SR0FOSVpBVElPTiA9XG4gIGAke0FGX0ZVTkRJTkdfRlVORElOR0dST1VQX0ZVTkRJTkdJVEVNfS9Db21taXRtZW50cy9Db21taXRtZW50cyBUYWJsZS9GdW5kaW5nIEZsb3dzIE9yZ1JvbGUgU2VsZWN0b3IvQWRkIERvbm9yIE9yZ2FuaXphdGlvbmA7XG5jb25zdCBBQ1RJVklUWV9DT01NSVRNRU5UU19GVU5ESU5HX0ZMT1dTX09SR1JPTEVfQUREX0VYRUNVVElOR19BR0VOQ1kgPVxuICBgJHtBRl9GVU5ESU5HX0ZVTkRJTkdHUk9VUF9GVU5ESU5HSVRFTX0vQ29tbWl0bWVudHMvQ29tbWl0bWVudHMgVGFibGUvRnVuZGluZyBGbG93cyBPcmdSb2xlIFNlbGVjdG9yL0FkZCBFeGVjdXRpbmcgQWdlbmN5YDtcbmNvbnN0IEFDVElWSVRZX0NPTU1JVE1FTlRTX0ZVTkRJTkdfRkxPV1NfT1JHUk9MRV9BRERfUkVHSU9OQUxfR1JPVVAgPVxuICBgJHtBRl9GVU5ESU5HX0ZVTkRJTkdHUk9VUF9GVU5ESU5HSVRFTX0vQ29tbWl0bWVudHMvQ29tbWl0bWVudHMgVGFibGUvRnVuZGluZyBGbG93cyBPcmdSb2xlIFNlbGVjdG9yL0FkZCBSZWdpb25hbCBHcm91cGA7XG5jb25zdCBBQ1RJVklUWV9DT01NSVRNRU5UU19GVU5ESU5HX0ZMT1dTX09SR1JPTEVfQUREX1JFU1BPTlNJQkxFX09SR0FOSVpBVElPTiA9XG4gIGAke0FGX0ZVTkRJTkdfRlVORElOR0dST1VQX0ZVTkRJTkdJVEVNfS9Db21taXRtZW50cy9Db21taXRtZW50cyBUYWJsZS9GdW5kaW5nIEZsb3dzIE9yZ1JvbGUgU2VsZWN0b3IvQWRkIFJlc3BvbnNpYmxlIE9yZ2FuaXphdGlvbmA7XG5jb25zdCBBQ1RJVklUWV9DT01NSVRNRU5UU19GVU5ESU5HX0ZMT1dTX09SR1JPTEVfQUREX1NFQ1RPUl9HUk9VUCA9XG4gIGAke0FGX0ZVTkRJTkdfRlVORElOR0dST1VQX0ZVTkRJTkdJVEVNfS9Db21taXRtZW50cy9Db21taXRtZW50cyBUYWJsZS9GdW5kaW5nIEZsb3dzIE9yZ1JvbGUgU2VsZWN0b3IvQWRkIFNlY3RvciBHcm91cGA7XG5cbmNvbnN0IEFDVElWSVRZX0VYUEVORElUVVJFU19GVU5ESU5HX0ZMT1dTX09SR1JPTEVfQUREX0lNUExFTUVOVElOR19BR0VOQ1kgPVxuICBgJHtBRl9GVU5ESU5HX0ZVTkRJTkdHUk9VUF9GVU5ESU5HSVRFTX0vRXhwZW5kaXR1cmVzL0V4cGVuZGl0dXJlcyBUYWJsZS9GdW5kaW5nIEZsb3dzIE9yZ1JvbGUgU2VsZWN0b3IvQWRkIEltcGxlbWVudGluZyBBZ2VuY3lgO1xuY29uc3QgQUNUSVZJVFlfRVhQRU5ESVRVUkVTX0ZVTkRJTkdfRkxPV1NfT1JHUk9MRV9BRERfQ09OVFJBQ1RJTkdfQUdFTkNZID1cbiAgYCR7QUZfRlVORElOR19GVU5ESU5HR1JPVVBfRlVORElOR0lURU19L0V4cGVuZGl0dXJlcy9FeHBlbmRpdHVyZXMgVGFibGUvRnVuZGluZyBGbG93cyBPcmdSb2xlIFNlbGVjdG9yL0FkZCBDb250cmFjdGluZyBBZ2VuY3lgO1xuY29uc3QgQUNUSVZJVFlfRVhQRU5ESVRVUkVTX0ZVTkRJTkdfRkxPV1NfT1JHUk9MRV9BRERfQkVORUZJQ0lBUllfQUdFTkNZID1cbiAgYCR7QUZfRlVORElOR19GVU5ESU5HR1JPVVBfRlVORElOR0lURU19L0V4cGVuZGl0dXJlcy9FeHBlbmRpdHVyZXMgVGFibGUvRnVuZGluZyBGbG93cyBPcmdSb2xlIFNlbGVjdG9yL0FkZCBCZW5lZmljaWFyeSBBZ2VuY3lgO1xuY29uc3QgQUNUSVZJVFlfRVhQRU5ESVRVUkVTX0ZVTkRJTkdfRkxPV1NfT1JHUk9MRV9BRERfRE9OT1JfT1JHQU5JWkFUSU9OID1cbiAgYCR7QUZfRlVORElOR19GVU5ESU5HR1JPVVBfRlVORElOR0lURU19L0V4cGVuZGl0dXJlcy9FeHBlbmRpdHVyZXMgVGFibGUvRnVuZGluZyBGbG93cyBPcmdSb2xlIFNlbGVjdG9yL0FkZCBEb25vciBPcmdhbml6YXRpb25gO1xuY29uc3QgQUNUSVZJVFlfRVhQRU5ESVRVUkVTX0ZVTkRJTkdfRkxPV1NfT1JHUk9MRV9BRERfRVhFQ1VUSU5HX0FHRU5DWSA9XG4gIGAke0FGX0ZVTkRJTkdfRlVORElOR0dST1VQX0ZVTkRJTkdJVEVNfS9FeHBlbmRpdHVyZXMvRXhwZW5kaXR1cmVzIFRhYmxlL0Z1bmRpbmcgRmxvd3MgT3JnUm9sZSBTZWxlY3Rvci9BZGQgRXhlY3V0aW5nIEFnZW5jeWA7XG5jb25zdCBBQ1RJVklUWV9FWFBFTkRJVFVSRVNfRlVORElOR19GTE9XU19PUkdST0xFX0FERF9SRUdJT05BTF9HUk9VUCA9XG4gIGAke0FGX0ZVTkRJTkdfRlVORElOR0dST1VQX0ZVTkRJTkdJVEVNfS9FeHBlbmRpdHVyZXMvRXhwZW5kaXR1cmVzIFRhYmxlL0Z1bmRpbmcgRmxvd3MgT3JnUm9sZSBTZWxlY3Rvci9BZGQgUmVnaW9uYWwgR3JvdXBgO1xuY29uc3QgQUNUSVZJVFlfRVhQRU5ESVRVUkVTX0ZVTkRJTkdfRkxPV1NfT1JHUk9MRV9BRERfUkVTUE9OU0lCTEVfT1JHQU5JWkFUSU9OID1cbiAgYCR7QUZfRlVORElOR19GVU5ESU5HR1JPVVBfRlVORElOR0lURU19L0V4cGVuZGl0dXJlcy9FeHBlbmRpdHVyZXMgVGFibGUvRnVuZGluZyBGbG93cyBPcmdSb2xlIFNlbGVjdG9yL0FkZCBSZXNwb25zaWJsZSBPcmdhbml6YXRpb25gO1xuY29uc3QgQUNUSVZJVFlfRVhQRU5ESVRVUkVTX0ZVTkRJTkdfRkxPV1NfT1JHUk9MRV9BRERfU0VDVE9SX0dST1VQID1cbiAgYCR7QUZfRlVORElOR19GVU5ESU5HR1JPVVBfRlVORElOR0lURU19L0V4cGVuZGl0dXJlcy9FeHBlbmRpdHVyZXMgVGFibGUvRnVuZGluZyBGbG93cyBPcmdSb2xlIFNlbGVjdG9yL0FkZCBTZWN0b3IgR3JvdXBgO1xuXG5jb25zdCBNVEVGX1BST0pFQ1RJT05TID0gYCR7QUZfRlVORElOR19GVU5ESU5HR1JPVVBfRlVORElOR0lURU19L01URUYgUHJvamVjdGlvbnNgO1xuY29uc3QgTVRFRl9QUk9KRUNUSU9OU19BTU9VTlQgPVxuICBgJHtBRl9GVU5ESU5HX0ZVTkRJTkdHUk9VUF9GVU5ESU5HSVRFTX0vTVRFRiBQcm9qZWN0aW9ucy9NVEVGIFByb2plY3Rpb25zIFRhYmxlL0Ftb3VudGA7XG5jb25zdCBNVEVGX1BST0pFQ1RJT05TX0NVUlJFTkNZID1cbiAgYCR7QUZfRlVORElOR19GVU5ESU5HR1JPVVBfRlVORElOR0lURU19L01URUYgUHJvamVjdGlvbnMvTVRFRiBQcm9qZWN0aW9ucyBUYWJsZS9DdXJyZW5jeWA7XG5jb25zdCBNVEVGX1BST0pFQ1RJT05TX1BST0pFQ1RJT04gPVxuICBgJHtBRl9GVU5ESU5HX0ZVTkRJTkdHUk9VUF9GVU5ESU5HSVRFTX0vTVRFRiBQcm9qZWN0aW9ucy9NVEVGIFByb2plY3Rpb25zIFRhYmxlL01URUYgUHJvamVjdGlvbmA7XG5jb25zdCBNVEVGX1BST0pFQ1RJT05TX0RBVEUgPVxuICBgJHtBRl9GVU5ESU5HX0ZVTkRJTkdHUk9VUF9GVU5ESU5HSVRFTX0vTVRFRiBQcm9qZWN0aW9ucy9NVEVGIFByb2plY3Rpb25zIFRhYmxlL1Byb2plY3Rpb24gRGF0ZWA7XG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmZyZWV6ZSh7XG4gIFBVQkxJQ19WSUVXX0NIQU5HRV9QQVNTV09SRCxcbiAgUFVCTElDX1ZJRVdfVFJPVUJMRV9TSUdOX0lOLFxuICBBQ1RJVklUWV9ERUxJVkVSWV9SQVRFLFxuICBBQ1RJVklUWV9QUk9KRUNUX0lEX0FORF9QTEFOTklORyxcbiAgQUNUSVZJVFlfRFVSQVRJT05fT0ZfUFJPSkVDVCxcbiAgQUNUSVZJVFlfVEVBTV9MRUFERVIsXG4gIEFDVElWSVRZX1NBTUVfQVNfUFJPUE9TRURfU1RBUlRfREFURSxcbiAgQUNUSVZJVFlfU0FNRV9BU19QUk9QT1NFRF9BUFBST1ZBTF9EQVRFLFxuICBBQ1RJVklUWV9JREVOVElGSUNBVElPTixcbiAgQUNUSVZJVFlfTEFTVF9VUERBVEVEX0JZLFxuICBBQ1RJVklUWV9MQVNUX1VQREFURURfT04sXG4gIEFDVElWSVRZX1NFQ1RPUlMsXG4gIEFDVElWSVRZX1BSSU1BUllfU0VDVE9SUyxcbiAgQUNUSVZJVFlfU0VDT05EQVJZX1NFQ1RPUlMsXG4gIEFDVElWSVRZX1NUUlVDVFVSRVMsXG4gIEFDVElWSVRZX1NUUlVDVFVSRVNfQUREX1NUUlVDVFVSRSxcbiAgQUNUSVZJVFlfT1JHQU5JWkFUSU9OUyxcbiAgQUNUSVZJVFlfT1JHQU5JWkFUSU9OU19ET05PUl9PUkdBTklaQVRJT04sXG4gIEFDVElWSVRZX09SR0FOSVpBVElPTlNfQkVORUZJQ0lBUllfQUdFTkNZLFxuICBBQ1RJVklUWV9PUkdBTklaQVRJT05TX0NPTlRSQUNUSU5HX0FHRU5DWSxcbiAgQUNUSVZJVFlfT1JHQU5JWkFUSU9OU19FWEVDVVRJTkdfQUdFTkNZLFxuICBBQ1RJVklUWV9PUkdBTklaQVRJT05TX0lNUExFTUVOVElOR19BR0VOQ1ksXG4gIEFDVElWSVRZX09SR0FOSVpBVElPTlNfUkVHSU9OQUxfR1JPVVAsXG4gIEFDVElWSVRZX09SR0FOSVpBVElPTlNfUkVMQVRFRF9HT1ZFUk5NRU5UX09SR0FOSVpBVElPTixcbiAgQUNUSVZJVFlfT1JHQU5JWkFUSU9OU19TRUNUT1JfR1JPVVAsXG4gIEFDVElWSVRZX09SR0FOSVpBVElPTlNfQkVORUZJQ0lBUllfQUdFTkNZX0FERF9GVU5ESU5HX0FVVE8sXG4gIEFDVElWSVRZX09SR0FOSVpBVElPTlNfQ09OVFJBQ1RJTkdfQUdFTkNZX0FERF9GVU5ESU5HX0FVVE8sXG4gIEFDVElWSVRZX09SR0FOSVpBVElPTlNfRE9OT1JfT1JHQU5JWkFUSU9OX0FERF9GVU5ESU5HX0FVVE8sXG4gIEFDVElWSVRZX09SR0FOSVpBVElPTlNfRVhFQ1VUSU5HX0FHRU5DWV9BRERfRlVORElOR19BVVRPLFxuICBBQ1RJVklUWV9PUkdBTklaQVRJT05TX0lNUExFTUVOVElOR19BR0VOQ1lfQUREX0ZVTkRJTkdfQVVUTyxcbiAgQUNUSVZJVFlfT1JHQU5JWkFUSU9OU19SRUdJT05BTF9HUk9VUF9BRERfRlVORElOR19BVVRPLFxuICBBQ1RJVklUWV9PUkdBTklaQVRJT05TX1JFU1BPTlNJQkxFX09SR0FOSVpBVElPTl9BRERfRlVORElOR19BVVRPLFxuICBBQ1RJVklUWV9PUkdBTklaQVRJT05TX1NFQ1RPUl9HUk9VUF9BRERfRlVORElOR19BVVRPLFxuICBBQ1RJVklUWV9GVU5ESU5HX1NFQVJDSCxcbiAgQUNUSVZJVFlfRlVORElOR19TRUFSQ0hfT1JHQU5JWkFUSU9OLFxuICBBQ1RJVklUWV9GVU5ESU5HX1NFTEVDVF9PUkdfVFlQRSxcbiAgQUNUSVZJVFlfUFJPR1JBTSxcbiAgQUNUSVZJVFlfUExBTk5JTkcsXG4gIEFDVElWSVRZX0NPTlRBQ1QsXG4gIEFDVElWSVRZX0RPQ1VNRU5UU19BRERfRE9DVU1FTlQsXG4gIEFDVElWSVRZX0RPQ1VNRU5UU19BRERfV0VCTElOSyxcbiAgQUNUSVZJVFlfSVNTVUVTX0FERF9JU1NVRSxcbiAgQUNUSVZJVFlfSVNTVUVTX0RFTEVURV9JU1NVRSxcbiAgQUNUSVZJVFlfSVNTVUVTX0FERF9NRUFTVVJFLFxuICBBQ1RJVklUWV9JU1NVRVNfREVMRVRFX01FQVNVUkUsXG4gIEFDVElWSVRZX0lTU1VFU19BRERfQUNUT1IsXG4gIEFDVElWSVRZX0lTU1VFU19ERUxFVEVfQUNUT1IsXG4gIEFDVElWSVRZX0RJU0JVUlNFTUVOVFNfRlVORElOR19GTE9XU19PUkdST0xFX0FERF9JTVBMRU1FTlRJTkdfQUdFTkNZLFxuICBBQ1RJVklUWV9ESVNCVVJTRU1FTlRTX0ZVTkRJTkdfRkxPV1NfT1JHUk9MRV9BRERfQ09OVFJBQ1RJTkdfQUdFTkNZLFxuICBBQ1RJVklUWV9ESVNCVVJTRU1FTlRTX0ZVTkRJTkdfRkxPV1NfT1JHUk9MRV9BRERfQkVORUZJQ0lBUllfQUdFTkNZLFxuICBBQ1RJVklUWV9ESVNCVVJTRU1FTlRTX0ZVTkRJTkdfRkxPV1NfT1JHUk9MRV9BRERfRE9OT1JfT1JHQU5JWkFUSU9OLFxuICBBQ1RJVklUWV9ESVNCVVJTRU1FTlRTX0ZVTkRJTkdfRkxPV1NfT1JHUk9MRV9BRERfRVhFQ1VUSU5HX0FHRU5DWSxcbiAgQUNUSVZJVFlfRElTQlVSU0VNRU5UU19GVU5ESU5HX0ZMT1dTX09SR1JPTEVfQUREX1JFR0lPTkFMX0dST1VQLFxuICBBQ1RJVklUWV9ESVNCVVJTRU1FTlRTX0ZVTkRJTkdfRkxPV1NfT1JHUk9MRV9BRERfUkVTUE9OU0lCTEVfT1JHQU5JWkFUSU9OLFxuICBBQ1RJVklUWV9ESVNCVVJTRU1FTlRTX0ZVTkRJTkdfRkxPV1NfT1JHUk9MRV9BRERfU0VDVE9SX0dST1VQLFxuICBBQ1RJVklUWV9DT01NSVRNRU5UU19GVU5ESU5HX0ZMT1dTX09SR1JPTEVfQUREX0lNUExFTUVOVElOR19BR0VOQ1ksXG4gIEFDVElWSVRZX0NPTU1JVE1FTlRTX0ZVTkRJTkdfRkxPV1NfT1JHUk9MRV9BRERfQ09OVFJBQ1RJTkdfQUdFTkNZLFxuICBBQ1RJVklUWV9DT01NSVRNRU5UU19GVU5ESU5HX0ZMT1dTX09SR1JPTEVfQUREX0JFTkVGSUNJQVJZX0FHRU5DWSxcbiAgQUNUSVZJVFlfQ09NTUlUTUVOVFNfRlVORElOR19GTE9XU19PUkdST0xFX0FERF9ET05PUl9PUkdBTklaQVRJT04sXG4gIEFDVElWSVRZX0NPTU1JVE1FTlRTX0ZVTkRJTkdfRkxPV1NfT1JHUk9MRV9BRERfRVhFQ1VUSU5HX0FHRU5DWSxcbiAgQUNUSVZJVFlfQ09NTUlUTUVOVFNfRlVORElOR19GTE9XU19PUkdST0xFX0FERF9SRUdJT05BTF9HUk9VUCxcbiAgQUNUSVZJVFlfQ09NTUlUTUVOVFNfRlVORElOR19GTE9XU19PUkdST0xFX0FERF9SRVNQT05TSUJMRV9PUkdBTklaQVRJT04sXG4gIEFDVElWSVRZX0NPTU1JVE1FTlRTX0ZVTkRJTkdfRkxPV1NfT1JHUk9MRV9BRERfU0VDVE9SX0dST1VQLFxuICBBQ1RJVklUWV9FWFBFTkRJVFVSRVNfRlVORElOR19GTE9XU19PUkdST0xFX0FERF9JTVBMRU1FTlRJTkdfQUdFTkNZLFxuICBBQ1RJVklUWV9FWFBFTkRJVFVSRVNfRlVORElOR19GTE9XU19PUkdST0xFX0FERF9DT05UUkFDVElOR19BR0VOQ1ksXG4gIEFDVElWSVRZX0VYUEVORElUVVJFU19GVU5ESU5HX0ZMT1dTX09SR1JPTEVfQUREX0JFTkVGSUNJQVJZX0FHRU5DWSxcbiAgQUNUSVZJVFlfRVhQRU5ESVRVUkVTX0ZVTkRJTkdfRkxPV1NfT1JHUk9MRV9BRERfRE9OT1JfT1JHQU5JWkFUSU9OLFxuICBBQ1RJVklUWV9FWFBFTkRJVFVSRVNfRlVORElOR19GTE9XU19PUkdST0xFX0FERF9FWEVDVVRJTkdfQUdFTkNZLFxuICBBQ1RJVklUWV9FWFBFTkRJVFVSRVNfRlVORElOR19GTE9XU19PUkdST0xFX0FERF9SRUdJT05BTF9HUk9VUCxcbiAgQUNUSVZJVFlfRVhQRU5ESVRVUkVTX0ZVTkRJTkdfRkxPV1NfT1JHUk9MRV9BRERfUkVTUE9OU0lCTEVfT1JHQU5JWkFUSU9OLFxuICBBQ1RJVklUWV9FWFBFTkRJVFVSRVNfRlVORElOR19GTE9XU19PUkdST0xFX0FERF9TRUNUT1JfR1JPVVAsXG4gIE1URUZfUFJPSkVDVElPTlMsXG4gIE1URUZfUFJPSkVDVElPTlNfQU1PVU5ULFxuICBNVEVGX1BST0pFQ1RJT05TX0NVUlJFTkNZLFxuICBNVEVGX1BST0pFQ1RJT05TX1BST0pFQ1RJT04sXG4gIE1URUZfUFJPSkVDVElPTlNfREFURSxcbn0pO1xuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVUlVdGlscyB7XG5cbiAgc3RhdGljIHN0cmluZ1RvSWQoc3RyaW5nOiBzdHJpbmcpIHtcbiAgICBzdHJpbmcgPSBzdHJpbmcgfHwgJyc7XG4gICAgbGV0IGhhc2ggPSA1MzgxO1xuICAgIGZvciAobGV0IGkgPSBzdHJpbmcubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgIC8qIGVzbGludC1kaXNhYmxlIG5vLWJpdHdpc2UgKi9cbiAgICAgIGhhc2ggPSAoaGFzaCAqIDMzKSBeIHN0cmluZy5jaGFyQ29kZUF0KGkpO1xuICAgIH1cbiAgICByZXR1cm4gaGFzaCA+Pj4gMDtcbiAgICAvKiBlc2xpbnQtZW5hYmxlIG5vLWJpdHdpc2UgKi9cbiAgfVxuXG4gIC8qKlxuICAgKiBHZW5lcmF0ZXMgYSB1bmlxdWUgaWQgZm9yIGVhY2ggY2FsbCwgb3ZlciB0aGUgc2FtZSBzdHJpbmdcbiAgICogQHBhcmFtIHN0cmluZ1xuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqL1xuICBzdGF0aWMgc3RyaW5nVG9VbmlxdWVJZChzdHJpbmc6IHN0cmluZykge1xuICAgIHJldHVybiBgJHt0aGlzLnN0cmluZ1RvSWQoc3RyaW5nKX0tJHtEYXRlLm5vdygpfS0ke01hdGgucmFuZG9tKClcbiAgICAgIC50b1N0cmluZygpXG4gICAgICAuc3Vic3RyaW5nKDIpfWA7XG4gIH1cblxuICBzdGF0aWMgbnVtYmVyUmFuZG9tKCkge1xuICAgIHJldHVybiBNYXRoLnRydW5jKChNYXRoLnJhbmRvbSgpICogMTAwMDAwMCkpO1xuICB9XG5cbiAgc3RhdGljIGNhcGl0YWxpemUodGV4dDogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRleHQucmVwbGFjZSgvKD86XnxcXHMpXFxTL2csIGNoYXIgPT4gY2hhci50b1VwcGVyQ2FzZSgpKTtcbiAgfVxuXG4gIHN0YXRpYyBjbG9uZURlZXAob2JqKSB7XG4gICAgcmV0dXJuIEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkob2JqKSk7XG4gIH1cbn07XG4iLCJpbXBvcnQgRk1DIGZyb20gJy4vRmVhdHVyZU1hbmFnZXJDb25zdGFudHMnO1xuaW1wb3J0IFVJVXRpbHMgZnJvbSAnLi4vLi4vdXRpbHMvVUlVdGlscyc7XG5cbi8qKlxuICogQGF1dGhvciBOYWRlamRhIE1hbmRyZXNjdVxuICovXG5cbi8vIEFjdGl2aXR5IGZpZWxkc1xuY29uc3QgQUNUSVZJVFlfQlVER0VUID0gJ2FjdGl2aXR5X2J1ZGdldCc7XG5jb25zdCBBQ1RJVklUWV9TVEFUVVMgPSAnYWN0aXZpdHlfc3RhdHVzJztcbmNvbnN0IFNUQVRVU19SRUFTT04gPSAnc3RhdHVzX3JlYXNvbic7XG5jb25zdCBGSU5BTkNJQUxfSU5TVFJVTUVOVCA9ICdmaW5hbmNpYWxfaW5zdHJ1bWVudCc7XG5jb25zdCBUWVBFX09GX0lNUExFTUVOVEFUSU9OID0gJ3R5cGVfb2ZfaW1wbGVtZW50YXRpb24nO1xuY29uc3QgT0JKRUNUSVZFID0gJ29iamVjdGl2ZSc7XG5jb25zdCBSRVNVTFRTID0gJ3Jlc3VsdHMnO1xuY29uc3QgQlVER0VUX0NPREVfUFJPSkVDVF9JRCA9ICdidWRnZXRfY29kZV9wcm9qZWN0X2lkJztcbmNvbnN0IEFDVFVBTF9BUFBST1ZBTF9EQVRFID0gJ2FjdHVhbF9hcHByb3ZhbF9kYXRlJztcbmNvbnN0IEZVTkRJTkdTID0gJ2Z1bmRpbmdzJztcbmNvbnN0IEZVTkRJTkdfRE9OT1JfT1JHX0lEID0gJ2Rvbm9yX29yZ2FuaXphdGlvbl9pZCc7XG5jb25zdCBJU19EUkFGVCA9ICdpc19kcmFmdCc7XG5jb25zdCBPUkdfUk9MRV9PUkdfSUQgPSAnb3JnYW5pemF0aW9uJztcbmNvbnN0IEFERElUSU9OQUxfSU5GTyA9ICdhZGRpdGlvbmFsX2luZm8nO1xuY29uc3QgUFJJTUFSWV9TRUNUT1JTID0gJ3ByaW1hcnlfc2VjdG9ycyc7XG5jb25zdCBTRUNPTkRBUllfU0VDVE9SUyA9ICdzZWNvbmRhcnlfc2VjdG9ycyc7XG5jb25zdCBURVJUSUFSWV9TRUNUT1JTID0gJ3RlcnRpYXJ5X3NlY3RvcnMnO1xuY29uc3QgVEFHX1NFQ1RPUlMgPSAndGFnX3NlY3RvcnMnO1xuY29uc3QgU0VDVE9SID0gJ3NlY3Rvcic7XG5jb25zdCBTRUNUT1JfUEVSQ0VOVEFHRSA9ICdzZWN0b3JfcGVyY2VudGFnZSc7XG5jb25zdCBGSU5BTkNJTkdfSU5TVFJVTUVOVCA9ICdmaW5hbmNpbmdfaW5zdHJ1bWVudCc7XG5jb25zdCBNT0RBTElUSUVTID0gJ21vZGFsaXRpZXMnO1xuY29uc3QgTElORV9NSU5JU1RSWV9SQU5LID0gJ2xpbmVfbWluaXN0cnlfcmFuayc7XG5jb25zdCBHT1ZFUk5NRU5UX0FHUkVFTUVOVF9OVU1CRVIgPSAnZ292ZXJubWVudF9hZ3JlZW1lbnRfbnVtYmVyJztcbmNvbnN0IEZVTkRJTkdfU1RBVFVTID0gJ2Z1bmRpbmdfc3RhdHVzJztcbmNvbnN0IExPQ0FUSU9OUyA9ICdsb2NhdGlvbnMnO1xuY29uc3QgTE9DQVRJT04gPSAnbG9jYXRpb24nO1xuY29uc3QgTE9DQVRJT05fUEVSQ0VOVEFHRSA9ICdsb2NhdGlvbl9wZXJjZW50YWdlJztcbmNvbnN0IElNUExFTUVOVEFUSU9OX0xPQ0FUSU9OID0gJ2ltcGxlbWVudGF0aW9uX2xvY2F0aW9uJztcbmNvbnN0IElNUExFTUVOVEFUSU9OX0xFVkVMID0gJ2ltcGxlbWVudGF0aW9uX2xldmVsJztcbmNvbnN0IEFQUFJPVkFMX1NUQVRVUyA9ICdhcHByb3ZhbF9zdGF0dXMnO1xuY29uc3QgQVBQUk9WRURfQlkgPSAnYXBwcm92ZWRfYnknO1xuY29uc3QgQVBQUk9WQUxfREFURSA9ICdhcHByb3ZhbF9kYXRlJztcbmNvbnN0IFRZUEVfT0ZfQVNTSVNUQU5DRSA9ICd0eXBlX29mX2Fzc2lzdGFuY2UnO1xuY29uc3QgRVhQRU5ESVRVUkVfQ0xBU1MgPSAnZXhwZW5kaXR1cmVfY2xhc3MnO1xuY29uc3QgRlVORElOR19ERVRBSUxTID0gJ2Z1bmRpbmdfZGV0YWlscyc7XG5jb25zdCBNT0RFX09GX1BBWU1FTlQgPSAnbW9kZV9vZl9wYXltZW50JztcbmNvbnN0IEZVTkRJTkdfQ0xBU1NJRklDQVRJT05fREFURSA9ICdmdW5kaW5nX2NsYXNzaWZpY2F0aW9uX2RhdGUnO1xuY29uc3QgQUdSRUVNRU5UID0gJ2FncmVlbWVudCc7XG5jb25zdCBET05PUl9PQkpFQ1RJVkUgPSAnZG9ub3Jfb2JqZWN0aXZlJztcbmNvbnN0IENPTkRJVElPTlMgPSAnY29uZGl0aW9ucyc7XG5jb25zdCBBR1JFRU1FTlRfQ09ERSA9ICdjb2RlJztcbmNvbnN0IEFHUkVFTUVOVF9USVRMRSA9ICd0aXRsZSc7XG5jb25zdCBQUk9KRUNUX0NBVEVHT1JZID0gJ3Byb2plY3RfY2F0ZWdvcnknO1xuY29uc3QgUFJPSkVDVF9JTVBMRU1FTlRJTkdfVU5JVCA9ICdwcm9qZWN0X2ltcGxlbWVudGluZ191bml0JztcbmNvbnN0IE9SR0FOSVpBVElPTiA9ICdvcmdhbml6YXRpb24nO1xuY29uc3QgUEVSQ0VOVEFHRSA9ICdwZXJjZW50YWdlJztcbmNvbnN0IEFNUF9PUkdBTklaQVRJT05fUk9MRV9JRCA9ICdhbXBfb3JnYW5pemF0aW9uX3JvbGVfaWQnO1xuY29uc3QgUk9MRSA9ICdyb2xlJztcbmNvbnN0IEVYRUNVVElOR19BR0VOQ1kgPSAnZXhlY3V0aW5nX2FnZW5jeSc7XG5jb25zdCBDT05UUkFDVElOR19BR0VOQ1kgPSAnY29udHJhY3RpbmdfYWdlbmN5JztcbmNvbnN0IEJFTkVGSUNJQVJZX0FHRU5DWSA9ICdiZW5lZmljaWFyeV9hZ2VuY3knO1xuY29uc3QgSU1QTEVNRU5USU5HX0FHRU5DWSA9ICdpbXBsZW1lbnRpbmdfYWdlbmN5JztcbmNvbnN0IFJFU1BPTlNJQkxFX09SR0FOSVpBVElPTiA9ICdyZXNwb25zaWJsZV9vcmdhbml6YXRpb24nO1xuY29uc3QgRE9OT1JfT1JHQU5JWkFUSU9OID0gJ2Rvbm9yX29yZ2FuaXphdGlvbic7XG5jb25zdCBSRUdJT05BTF9HUk9VUCA9ICdyZWdpb25hbF9ncm91cCc7XG5jb25zdCBTRUNUT1JfR1JPVVAgPSAnc2VjdG9yX2dyb3VwJztcbmNvbnN0IEJVREdFVFMgPSAnYnVkZ2V0cyc7XG5jb25zdCBCVURHRVRfQ09ERSA9ICdidWRnZXRfY29kZSc7XG5jb25zdCBCVURHRVRfT1JHQU5JWkFUSU9OX0NPREUgPSAnYnVkZ2V0X29yZ2FuaXphdGlvbl9jb2RlJztcbmNvbnN0IEFSQ0hJVkVEID0gJ2FyY2hpdmVkJztcbmNvbnN0IFRSQU5TQUNUSU9OX0RBVEUgPSAndHJhbnNhY3Rpb25fZGF0ZSc7XG5jb25zdCBUUkFOU0FDVElPTl9UWVBFID0gJ3RyYW5zYWN0aW9uX3R5cGUnO1xuY29uc3QgQ09NTUlUTUVOVFMgPSAnY29tbWl0bWVudHMnO1xuY29uc3QgRElTQlVSU0VNRU5UUyA9ICdkaXNidXJzZW1lbnRzJztcbmNvbnN0IEVYUEVORElUVVJFUyA9ICdleHBlbmRpdHVyZXMnO1xuY29uc3QgRVNUSU1BVEVEX0RJU0JVUlNFTUVOVFMgPSAnZXN0aW1hdGVkX2Rpc2J1cnNlbWVudHMnO1xuY29uc3QgVFJBTlNBQ1RJT05fQU1PVU5UID0gJ3RyYW5zYWN0aW9uX2Ftb3VudCc7XG5jb25zdCBBREpVU1RNRU5UX1RZUEUgPSAnYWRqdXN0bWVudF90eXBlJztcbmNvbnN0IEFDVFVBTF9TVEFSVF9EQVRFID0gJ2FjdHVhbF9zdGFydF9kYXRlJztcbmNvbnN0IFBST1BPU0VEX1NUQVJUX0RBVEUgPSAncHJvcG9zZWRfc3RhcnRfZGF0ZSc7XG5jb25zdCBBQ1RVQUxfQ09NUExFVElPTl9EQVRFID0gJ2FjdHVhbF9jb21wbGV0aW9uX2RhdGUnO1xuY29uc3QgQ09OVFJBQ1RJTkdfREFURSA9ICdjb250cmFjdGluZ19kYXRlJztcbmNvbnN0IERJU0JVUlNFTUVOVF9EQVRFID0gJ2Rpc2J1cnNlbWVudF9kYXRlJztcbmNvbnN0IFBST1BPU0VEX0FQUFJPVkFMX0RBVEUgPSAncHJvcG9zZWRfYXBwcm92YWxfZGF0ZSc7XG5jb25zdCBPUklHSU5BTF9DT01QTEVUSU9OX0RBVEUgPSAnb3JpZ2luYWxfY29tcGxldGlvbl9kYXRlJztcbmNvbnN0IFBST1BPU0VEX0NPTVBMRVRJT05fREFURSA9ICdwcm9wb3NlZF9jb21wbGV0aW9uX2RhdGUnO1xuY29uc3QgRklOQUxfREFURV9GT1JfRElTQlVSU0VNRU5UUyA9ICdmaW5hbF9kYXRlX2Zvcl9kaXNidXJzZW1lbnRzJztcbmNvbnN0IEZJTkFMX0RBVEVfRk9SX0NPTlRSQUNUSU5HID0gJ2ZpbmFsX2RhdGVfZm9yX2NvbnRyYWN0aW5nJztcbmNvbnN0IEVGRkVDVElWRV9GVU5ESU5HX0RBVEUgPSAnZWZmZWN0aXZlX2Z1bmRpbmdfZGF0ZSc7XG5jb25zdCBGVU5ESU5HX0NMT1NJTkdfREFURSA9ICdmdW5kaW5nX2Nsb3NpbmdfZGF0ZSc7XG5jb25zdCBSQVRJRklDQVRJT05fREFURSA9ICdyYXRpZmljYXRpb25fZGF0ZSc7XG5jb25zdCBNQVRVUklUWSA9ICdtYXR1cml0eSc7XG5jb25zdCBMQVNUX0FVRElUX0RBVEUgPSAnbGFzdF9hdWRpdF9kYXRlJztcbmNvbnN0IFNJR05BVFVSRV9EQVRFID0gJ3NpZ25hdHVyZV9kYXRlJztcbmNvbnN0IEhVTUFOSVRBUklBTl9BSUQgPSAnaHVtYW5pdGFyaWFuX2FpZCc7XG5jb25zdCBESVNBU1RFUl9SRVNQT05TRSA9ICdkaXNhc3Rlcl9yZXNwb25zZSc7XG5jb25zdCBQUk9HUkFNID0gJ3Byb2dyYW0nO1xuY29uc3QgUFJPR1JBTV9QRVJDRU5UQUdFID0gJ3Byb2dyYW1fcGVyY2VudGFnZSc7XG5jb25zdCBQUk9HUkFNX1NFVFRJTkdTID0gJ3Byb2dyYW1fc2V0dGluZ3MnO1xuY29uc3QgTkFUSU9OQUxfUExBTl9PQkpFQ1RJVkUgPSAnbmF0aW9uYWxfcGxhbl9vYmplY3RpdmUnO1xuY29uc3QgUFJJTUFSWV9QUk9HUkFNUyA9ICdwcmltYXJ5X3Byb2dyYW1zJztcbmNvbnN0IFNFQ09OREFSWV9QUk9HUkFNUyA9ICdzZWNvbmRhcnlfcHJvZ3JhbXMnO1xuY29uc3QgVEVSVElBUl9QUk9HUkFNUyA9ICd0ZXJ0aWFyeV9wcm9ncmFtcyc7XG5jb25zdCBHT1ZFUk5NRU5UX0FQUFJPVkFMX1BST0NFRFVSRVMgPSAnZ292ZXJubWVudF9hcHByb3ZhbF9wcm9jZWR1cmVzJztcbmNvbnN0IEpPSU5UX0NSSVRFUklBID0gJ2pvaW50X2NyaXRlcmlhJztcbmNvbnN0IFRFQU0gPSAndGVhbSc7XG5jb25zdCBSRUpFQ1RFRF9JRCA9ICdyZWplY3RlZElkJztcbmNvbnN0IElOVEVSTkFMX0lEID0gJ2ludGVybmFsX2lkJztcbmNvbnN0IEFNUF9JRCA9ICdhbXBfaWQnO1xuY29uc3QgUFJPSkVDVF9USVRMRSA9ICdwcm9qZWN0X3RpdGxlJztcbmNvbnN0IERFU0NSSVBUSU9OID0gJ2Rlc2NyaXB0aW9uJztcbmNvbnN0IE1PRElGSUVEX0JZID0gJ21vZGlmaWVkX2J5JztcbmNvbnN0IE1PRElGSUVEX09OID0gJ3VwZGF0ZV9kYXRlJztcbmNvbnN0IENSRUFURURfQlkgPSAnY3JlYXRlZF9ieSc7XG5jb25zdCBDUkVBVEVEX09OID0gJ2NyZWF0aW9uX2RhdGUnO1xuY29uc3QgTEFTVF9JTVBPUlRFRF9CWSA9ICdsYXN0X2ltcG9ydGVkX2J5JztcbmNvbnN0IENMSUVOVF9DSEFOR0VfSUQgPSAnY2xpZW50LWNoYW5nZS1pZCc7XG5jb25zdCBDTElFTlRfQ1JFQVRFRF9PTiA9ICdjbGllbnQtY3JlYXRlZC1vbic7XG5jb25zdCBDTElFTlRfVVBEQVRFRF9PTiA9ICdjbGllbnQtdXBkYXRlZC1vbic7XG5jb25zdCBJU19QVVNIRUQgPSAnaXMtcHVzaGVkJztcbmNvbnN0IEFDVElWSVRZX0dST1VQID0gJ2FjdGl2aXR5X2dyb3VwJztcbmNvbnN0IFZFUlNJT04gPSAndmVyc2lvbic7XG5jb25zdCBQUk9KRUNUX0NPTU1FTlRTID0gJ3Byb2plY3RfY29tbWVudHMnO1xuY29uc3QgTEVTU09OU19MRUFSTkVEID0gJ2xlc3NvbnNfbGVhcm5lZCc7XG5jb25zdCBQUk9KRUNUX0lNUEFDVCA9ICdwcm9qZWN0X2ltcGFjdCc7XG5jb25zdCBBQ1RJVklUWV9TVU1NQVJZID0gJ2FjdGl2aXR5X3N1bW1hcnknO1xuY29uc3QgQ09ORElUSU9OQUxJVElFUyA9ICdjb25kaXRpb25hbGl0aWVzJztcbmNvbnN0IFBST0pFQ1RfTUFOQUdFTUVOVCA9ICdwcm9qZWN0X21hbmFnZW1lbnQnO1xuY29uc3QgQV9DX0NIQVBURVIgPSAnYV9jX2NoYXB0ZXInO1xuY29uc3QgQ1JJU19OVU1CRVIgPSAnY3Jpc19udW1iZXInO1xuY29uc3QgSUFUSV9JREVOVElGSUVSID0gJ2lhdGlfaWRlbnRpZmllcic7XG5jb25zdCBBQ1RJVklUWV9JTlRFUk5BTF9JRFMgPSAnYWN0aXZpdHlfaW50ZXJuYWxfaWRzJztcbmNvbnN0IEhJRVJBUkNISUNBTF9WQUxVRSA9ICdoaWVyYXJjaGljYWxfdmFsdWUnO1xuY29uc3QgSElFUkFSQ0hJQ0FMX1ZBTFVFX1BBUlRTID0gJ2hpZXJhcmNoaWNhbF92YWx1ZV9wYXJ0cyc7XG5jb25zdCBISUVSQVJDSElDQUxfVkFMVUVfREVQVEggPSAnaGllcmFyY2hpY2FsX3ZhbHVlX2RlcHRoJztcbmNvbnN0IFBQQ19BTU9VTlQgPSAncHBjX2Ftb3VudCc7XG5jb25zdCBSUENfQU1PVU5UID0gJ3JwY19hbW91bnQnO1xuY29uc3QgUFBDX0FOTlVBTF9CVURHRVRTID0gJ3BwY19hbm51YWxfYnVkZ2V0cyc7XG5jb25zdCBBTU9VTlQgPSAnYW1vdW50JztcbmNvbnN0IENVUlJFTkNZID0gJ2N1cnJlbmN5JztcbmNvbnN0IEZVTkRJTkdfREFURSA9ICdmdW5kaW5nX2RhdGUnO1xuY29uc3QgQ09NUE9ORU5UUyA9ICdjb21wb25lbnRzJztcbmNvbnN0IFRPVEFMX05VTUJFUl9PRl9GVU5ESU5HX1NPVVJDRVMgPSAndG90YWxfbnVtYmVyX29mX2Z1bmRpbmdfc291cmNlcyc7XG5jb25zdCBTT1VSQ0VfUk9MRSA9ICdzb3VyY2Vfcm9sZSc7XG5jb25zdCBBTVBfRlVORElOR19JRCA9ICdmdW5kaW5nX2lkJztcbmNvbnN0IElTU1VFUyA9ICdpc3N1ZXMnO1xuY29uc3QgSVNTVUVfREFURSA9ICdpc3N1ZV9kYXRlJztcbmNvbnN0IElTU1VFX05BTUUgPSAnbmFtZSc7XG5jb25zdCBNRUFTVVJFUyA9ICdtZWFzdXJlcyc7XG5jb25zdCBNRUFTVVJFX05BTUUgPSAnbmFtZSc7XG5jb25zdCBNRUFTVVJFX0RBVEUgPSAnbWVhc3VyZV9kYXRlJztcbmNvbnN0IEFDVE9SUyA9ICdhY3RvcnMnO1xuY29uc3QgQUNUT1JfTkFNRSA9ICduYW1lJztcbmNvbnN0IFNUUlVDVFVSRVMgPSAnc3RydWN0dXJlcyc7XG5jb25zdCBTVFJVQ1RVUkVTX1RJVExFID0gJ3RpdGxlJztcbmNvbnN0IFNUUlVDVFVSRVNfREVTQ1JJUFRJT04gPSAnZGVzY3JpcHRpb24nO1xuY29uc3QgU1RSVUNUVVJFU19MQVRJVFVERSA9ICdsYXRpdHVkZSc7XG5jb25zdCBTVFJVQ1RVUkVTX0xPTkdJVFVERSA9ICdsb25naXR1ZGUnO1xuY29uc3QgU1RSVUNUVVJFU19DT0xPUiA9ICdzdHJ1Y3R1cmVfY29sb3InO1xuY29uc3QgU1RSVUNUVVJFU19MQVQgPSAnbGF0JztcbmNvbnN0IFNUUlVDVFVSRVNfTE5HID0gJ2xuZyc7XG5jb25zdCBTVFJVQ1RVUkVTX1NIQVBFID0gJ3NoYXBlJztcbmNvbnN0IFNUUlVDVFVSRVNfUE9JTlQgPSAnUG9pbnQnO1xuY29uc3QgU1RSVUNUVVJFU19QT0xZR09OID0gJ1BvbHlnb24nO1xuY29uc3QgU1RSVUNUVVJFU19QT0xZTElORSA9ICdQb2x5bGluZSc7XG5jb25zdCBTVFJVQ1RVUkVTX0NPT1JESU5BVEVTID0gJ2Nvb3JkaW5hdGVzJztcbmNvbnN0IENPTVBPTkVOVF9UWVBFID0gJ2NvbXBvbmVudF90eXBlJztcbmNvbnN0IENPTVBPTkVOVF9USVRMRSA9ICdjb21wb25lbnRfdGl0bGUnO1xuY29uc3QgQ09NUE9ORU5UX0ZVTkRJTkcgPSAnZnVuZGluZyc7XG5jb25zdCBDT01QT05FTlRfREVTQ1JJUFRJT04gPSAnZGVzY3JpcHRpb24nO1xuY29uc3QgQ09NUE9ORU5UX09SR0FOSVpBVElPTiA9ICdjb21wb25lbnRfb3JnYW5pemF0aW9uJztcbmNvbnN0IEZVTkRJTkdfQU1PVU5UX0lEID0gJ2FtcF9mdW5kaW5nX2Ftb3VudF9pZCc7XG5jb25zdCBFWFRSQV9JTkZPID0gJ2V4dHJhX2luZm8nO1xuY29uc3QgVkFMVUUgPSAndmFsdWUnO1xuY29uc3QgQUNST05ZTSA9ICdhY3JvbnltJztcbmNvbnN0IFRZUEVfT0ZfQ09PUEVSQVRJT04gPSAndHlwZV9vZl9jb29wZXJhdGlvbic7XG5jb25zdCBBTk5VQUxfUFJPSkVDVF9CVURHRVRfSUQgPSAnYW5udWFsX3Byb2plY3RfYnVkZ2V0X2lkJztcbmNvbnN0IFRZUEUgPSAndHlwZSc7XG5jb25zdCBZRUFSID0gJ3llYXInO1xuY29uc3QgR1JPVVBfVkVSU0lPTkVEX0ZVTkRJTkcgPSAnZ3JvdXBfdmVyc2lvbmVkX2Z1bmRpbmcnO1xuY29uc3QgQUNUSVZFX0xJU1QgPSAnYWN0aXZlX2xpc3QnO1xuY29uc3QgQUNUSVZFID0gJ2FjdGl2ZSc7XG5jb25zdCBERUxFR0FURURfQ09PUEVSQVRJT04gPSAnZGVsZWdhdGVkX2Nvb3BlcmF0aW9uJztcbmNvbnN0IERFTEVHQVRFRF9QQVJUTkVSID0gJ2RlbGVnYXRlZF9wYXJ0bmVyJztcbmNvbnN0IEZJTkFOQ0lOR19JRCA9ICdmaW5hbmNpbmdfaWQnO1xuY29uc3QgRElTQlVSU0VNRU5UX09SREVSX0lEID0gJ2Rpc2J1cnNlbWVudF9vcmRlcl9pZCc7XG5jb25zdCBQTEVER0UgPSAncGxlZGdlJztcbmNvbnN0IENBUElUQUxfU1BFTkRJTkdfUEVSQ0VOVEFHRSA9ICdjYXBpdGFsX3NwZW5kaW5nX3BlcmNlbnRhZ2UnO1xuY29uc3QgUkVQT1JUSU5HX0RBVEUgPSAncmVwb3J0aW5nX2RhdGUnO1xuY29uc3QgUkVDSVBJRU5UX1JPTEUgPSAncmVjaXBpZW50X3JvbGUnO1xuY29uc3QgUkVDSVBJRU5UX09SR0FOSVpBVElPTiA9ICdyZWNpcGllbnRfb3JnYW5pemF0aW9uJztcbmNvbnN0IFRFTVBPUkFMX0lEID0gJ190ZW1wb3JhbF9pZCc7XG5jb25zdCBNSU5JU1RSWV9DT0RFID0gJ21pbmlzdHJ5X2NvZGUnO1xuY29uc3QgUFJPSkVDVF9DT0RFID0gJ3Byb2plY3RfY29kZSc7XG5jb25zdCBGWSA9ICdmeSc7XG5jb25zdCBJTkRJUkVDVF9PTl9CVURHRVQgPSAnaW5kaXJlY3Rfb25fYnVkZ2V0JztcbmNvbnN0IElNUExFTUVOVEFUSU9OX0xFVkVMU19FWFRSQV9JTkZPID0gJ2ltcGxlbWVudGF0aW9uLWxldmVscyc7XG5jb25zdCBJTVBMRU1FTlRBVElPTl9MT0NBVElPTl9FWFRSQV9JTkZPID0gJ2ltcGxlbWVudGF0aW9uX2xvY2F0aW9uX25hbWUnO1xuY29uc3QgRE9OT1JfQ09OVEFDVCA9ICdkb25vcl9jb250YWN0X2luZm9ybWF0aW9uJztcbmNvbnN0IFBST0pFQ1RfQ09PUkRJTkFUT1JfQ09OVEFDVCA9ICdwcm9qZWN0X2Nvb3JkaW5hdG9yX2NvbnRhY3RfaW5mb3JtYXRpb24nO1xuY29uc3QgU0VDVE9SX01JTklTVFJZX0NPTlRBQ1QgPSAnc2VjdG9yX21pbmlzdHJ5X2NvbnRhY3RfaW5mb3JtYXRpb24nO1xuY29uc3QgTU9GRURfQ09OVEFDVCA9ICdtb2ZlZF9jb250YWN0X2luZm9ybWF0aW9uJztcbmNvbnN0IElNUExFTUVOVElOR19FWEVDVVRJTkdfQUdFTkNZX0NPTlRBQ1QgPSAnaW1wbGVtZW50aW5nL2V4ZWN1dGluZ19hZ2VuY3lfY29udGFjdF9pbmZvcm1hdGlvbic7XG5jb25zdCBDT05UQUNUID0gJ2NvbnRhY3QnO1xuY29uc3QgT1JHQU5JWkFUSU9OX0dST1VQID0gJ29yZ2FuaXphdGlvbl9ncm91cCc7XG5jb25zdCBGSVhFRF9FWENIQU5HRV9SQVRFID0gJ2ZpeGVkX2V4Y2hhbmdlX3JhdGUnO1xuY29uc3QgUFJJTUFSWV9DT05UQUNUID0gJ21hcmtfYXNfcHJpbWFyeSc7XG5jb25zdCBBQ1RJVklUWV9ET0NVTUVOVFMgPSAnYWN0aXZpdHlfZG9jdW1lbnRzJztcbmNvbnN0IERPQ1VNRU5UX1RZUEUgPSAnZG9jdW1lbnRfdHlwZSc7XG5jb25zdCBJU08yID0gJ2lzbzInO1xuY29uc3QgTVRFRl9QUk9KRUNUSU9OUyA9ICdtdGVmX3Byb2plY3Rpb25zJztcbmNvbnN0IFBST0pFQ1RJT04gPSAncHJvamVjdGlvbic7XG5jb25zdCBQSVBFTElORSA9ICdwaXBlbGluZSc7XG5jb25zdCBQUk9KRUNUSU9OX0RBVEUgPSAncHJvamVjdGlvbl9kYXRlJztcblxuLy8gQWN0aXZpdHkgbGFiZWxzICh1c3VhbGx5IHRob3NlIHRoYXQgZG9uJ3QgY29tZSBhcyBwYXJ0IG9mIEZpZWxkcyBEZWYgRVApXG5jb25zdCBTQU1FX0FTX1BST1BPU0VEX1NUQVJUX0RBVEVfTEFCRUwgPSAnU2FtZSBhcyBQcm9wb3NlZCBTdGFydCBEYXRlJztcbmNvbnN0IFNBTUVfQVNfUFJPUE9TRURfQVBQUk9WQUxfREFURV9MQUJFTCA9ICdTYW1lIGFzIFByb3Bvc2VkIEFwcHJvdmFsIERhdGUnO1xuXG4vLyBBY3Rpdml0eSB2YWxpZGF0aW9uIHJ1bGVzXG5jb25zdCBERVBFTkRFTkNZX0lNUExFTUVOVEFUSU9OX0xFVkVMX1BSRVNFTlQgPSAnaW1wbGVtZW50YXRpb25fbGV2ZWxfcHJlc2VudCc7XG5jb25zdCBERVBFTkRFTkNZX0lNUExFTUVOVEFUSU9OX0xFVkVMX1ZBTElEID0gJ2ltcGxlbWVudGF0aW9uX2xldmVsX3ZhbGlkJztcbmNvbnN0IERFUEVOREVOQ1lfSU1QTEVNRU5UQVRJT05fTE9DQVRJT05fUFJFU0VOVCA9ICdpbXBsZW1lbnRhdGlvbl9sb2NhdGlvbl9wcmVzZW50JztcbmNvbnN0IERFUEVOREVOQ1lfSU1QTEVNRU5UQVRJT05fTE9DQVRJT05fVkFMSUQgPSAnaW1wbGVtZW50YXRpb25fbG9jYXRpb25fdmFsaWQnO1xuY29uc3QgREVQRU5ERU5DWV9QUk9KRUNUX0NPREVfT05fQlVER0VUID0gJ3Byb2plY3RfY29kZV9vbl9idWRnZXQnO1xuY29uc3QgREVQRU5ERU5DWV9PTl9CVURHRVQgPSAnb25fYnVkZ2V0JztcbmNvbnN0IERFUEVOREVOQ1lfVFJBTlNBQ1RJT05fUFJFU0VOVCA9ICd0cmFuc2FjdGlvbl9wcmVzZW50JztcbmNvbnN0IERFUEVOREVOQ1lfQ09NUE9ORU5UX0ZVTkRJTkdfT1JHX1ZBTElEID0gJ29yZ2FuaXphdGlvbl9wcmVzZW50JztcblxuLyoqIElEcyBmb3IgQVAgc2VjdGlvbnMgKiovXG5jb25zdCBBUF9TRUNUSU9OX0lEUyA9XG4gIFt7IGtleTogJ0FQSWRlbnRpZmljYXRpb24nLCBoYXNoOiAnI0FQSWRlbnRpZmljYXRpb24nLCB2YWx1ZTogJ0lkZW50aWZpY2F0aW9uJywgZm1QYXRoOiBGTUMuQUNUSVZJVFlfSURFTlRJRklDQVRJT04gfSxcbiAgICB7IGtleTogJ0FQSW50ZXJuYWxJZHMnLCBoYXNoOiAnI0FQSW50ZXJuYWxJZHMnLCB2YWx1ZTogJ0FnZW5jeSBJbnRlcm5hbCBJRHMnLCBzZWN0aW9uUGF0aDogQUNUSVZJVFlfSU5URVJOQUxfSURTIH0sXG4gICAgeyBrZXk6ICdBUFBsYW5uaW5nJywgaGFzaDogJyNBUFBsYW5uaW5nJywgdmFsdWU6ICdQbGFubmluZycsIGZtUGF0aDogRk1DLkFDVElWSVRZX1BMQU5OSU5HIH0sXG4gICAgeyBrZXk6ICdBUExvY2F0aW9uJywgaGFzaDogJyNBUExvY2F0aW9uJywgdmFsdWU6ICdMb2NhdGlvbicsIHNlY3Rpb25QYXRoOiBMT0NBVElPTlMgfSxcbiAgICB7IGtleTogJ0FQUHJvZ3JhbScsIGhhc2g6ICcjQVBQcm9ncmFtJywgdmFsdWU6ICdQcm9ncmFtJywgZm1QYXRoOiBGTUMuQUNUSVZJVFlfUFJPR1JBTSB9LFxuICAgIHsga2V5OiAnQVBTZWN0b3InLCBoYXNoOiAnI0FQU2VjdG9yJywgdmFsdWU6ICdTZWN0b3JzJywgZm1QYXRoOiBGTUMuQUNUSVZJVFlfU0VDVE9SUyB9LFxuICAgIHtcbiAgICAgIGtleTogJ0FQRnVuZGluZ1NvdXJjZXMnLFxuICAgICAgaGFzaDogJyNBUEZ1bmRpbmdTb3VyY2VzJyxcbiAgICAgIHZhbHVlOiAnRnVuZGluZyBTb3VyY2VzJyxcbiAgICAgIHNlY3Rpb25QYXRoOiBUT1RBTF9OVU1CRVJfT0ZfRlVORElOR19TT1VSQ0VTXG4gICAgfSxcbiAgICB7IGtleTogJ0FQRnVuZGluZycsIGhhc2g6ICcjQVBGdW5kaW5nJywgdmFsdWU6ICdGdW5kaW5nJywgc2VjdGlvblBhdGg6IEZVTkRJTkdTIH0sXG4gICAge1xuICAgICAga2V5OiAnQVBSZWxhdGVkT3JnYW5pemF0aW9ucycsXG4gICAgICBoYXNoOiAnI0FQUmVsYXRlZE9yZ2FuaXphdGlvbnMnLFxuICAgICAgdmFsdWU6ICdSZWxhdGVkIE9yZ2FuaXphdGlvbnMnLFxuICAgICAgZm1QYXRoOiBGTUMuQUNUSVZJVFlfT1JHQU5JWkFUSU9OU1xuICAgIH0sXG4gICAgeyBrZXk6ICdBUElzc3VlcycsIGhhc2g6ICcjQVBJc3N1ZXMnLCB2YWx1ZTogJ0lzc3VlcycsIHNlY3Rpb25QYXRoOiBJU1NVRVMgfSxcbiAgICB7IGtleTogJ0FQQ29udGFjdCcsIGhhc2g6ICcjQVBDb250YWN0JywgdmFsdWU6ICdDb250YWN0IEluZm9ybWF0aW9uJywgZm1QYXRoOiBGTUMuQUNUSVZJVFlfQ09OVEFDVCB9LFxuICAgIHsga2V5OiAnQVBTdHJ1Y3R1cmVzJywgaGFzaDogJyNBUFN0cnVjdHVyZXMnLCB2YWx1ZTogJ1N0cnVjdHVyZXMnLCBzZWN0aW9uUGF0aDogU1RSVUNUVVJFUyB9LFxuICAgIHsga2V5OiAnQVBEb2N1bWVudCcsIGhhc2g6ICcjQVBEb2N1bWVudCcsIHZhbHVlOiAnUmVsYXRlZCBEb2N1bWVudHMnLCBzZWN0aW9uUGF0aDogQUNUSVZJVFlfRE9DVU1FTlRTIH0sXG4gIF07XG5cbi8qKiBDb2x1bW4gY291bnRzIGZvciBlYWNoIHNlY3Rpb24gKiovXG5jb25zdCBBQ1RJVklUWV9JTlRFUk5BTF9JRFNfQ09MUyA9IDM7XG5jb25zdCBBQ1RJVklUWV9QTEFOTklOR19DT0xTID0gMjtcbmNvbnN0IEFDVElWSVRZX0xPQ0FUSU9OX0NPTFMgPSAzO1xuY29uc3QgQUNUSVZJVFlfRlVORElOR19DT0xTID0gMjtcbmNvbnN0IEFDVElWSVRZX0NPTlRBQ1RfQ09MUyA9IDI7XG5jb25zdCBBUF9GVU5ESU5HU19UQUJMRV9DT0xTID0gNDtcblxuY29uc3QgTVVMVElfU0VMRUNUX01JTl9TSVpFID0gODtcbmNvbnN0IE1VTFRJX1NFTEVDVF9NQVhfU0laRSA9IDg7XG5cbi8vIFRPRE86IG1vdmUgdGhlc2UgZnVuY3Rpb25zIHRvIGFuIFV0aWxzIGNsYXNzLlxuY29uc3QgdG9GaWVsZE5hbWVzID0gZnVuY3Rpb24gKGxpc3RPZk5hbWVzKSB7XG4gIHJldHVybiBsaXN0T2ZOYW1lcy5tYXAobmFtZSA9PiB0b0ZpZWxkTmFtZShuYW1lKSk7XG59O1xuXG4vKipcbiAqIENvbnZlcnRzIHRoZSBvcmlnaW5hbCBub24tdHJhbnNsYXRlZCBsYWJlbCB0byBpbnRlcm5hbCBmaWVsZCBuYW1lXG4gKiBAcGFyYW0gbmFtZVxuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5jb25zdCB0b0ZpZWxkTmFtZSA9IGZ1bmN0aW9uIChuYW1lOiBzdHJpbmcpIHtcbiAgcmV0dXJuIG5hbWUudG9Mb3dlckNhc2UoKS5yZXBsYWNlKCcgJywgJ18nKTtcbn07XG5cbi8qKlxuICogQ29udmVydHMgdGhlIGludGVybmFsIGZpZWxkIG5hbWUgdG8gdGhlIE9yaWdpbmFsIG5vbi10cmFuc2xhdGVkIGxhYmVsXG4gKiBAcGFyYW0gZmllbGROYW1lXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cbmNvbnN0IHRvT3JpZ2luYWxMYWJlbCA9IGZ1bmN0aW9uIChmaWVsZE5hbWU6IHN0cmluZykge1xuICByZXR1cm4gVUlVdGlscy5jYXBpdGFsaXplKGZpZWxkTmFtZS5yZXBsYWNlKCdfJywgJyAnKSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBPYmplY3QuZnJlZXplKHtcbiAgQUNUSVZJVFlfQlVER0VULFxuICBBQ1RJVklUWV9TVEFUVVMsXG4gIFNUQVRVU19SRUFTT04sXG4gIEZJTkFOQ0lBTF9JTlNUUlVNRU5ULFxuICBUWVBFX09GX0lNUExFTUVOVEFUSU9OLFxuICBPQkpFQ1RJVkUsXG4gIFJFU1VMVFMsXG4gIEJVREdFVF9DT0RFX1BST0pFQ1RfSUQsXG4gIEFDVFVBTF9BUFBST1ZBTF9EQVRFLFxuICBGVU5ESU5HUyxcbiAgRlVORElOR19ET05PUl9PUkdfSUQsXG4gIElTX0RSQUZULFxuICBPUkdfUk9MRV9PUkdfSUQsXG4gIEFERElUSU9OQUxfSU5GTyxcbiAgUFJJTUFSWV9TRUNUT1JTLFxuICBTRUNPTkRBUllfU0VDVE9SUyxcbiAgVEVSVElBUllfU0VDVE9SUyxcbiAgVEFHX1NFQ1RPUlMsXG4gIFNFQ1RPUixcbiAgU0VDVE9SX1BFUkNFTlRBR0UsXG4gIEZJTkFOQ0lOR19JTlNUUlVNRU5ULFxuICBNT0RBTElUSUVTLFxuICBMSU5FX01JTklTVFJZX1JBTkssXG4gIEdPVkVSTk1FTlRfQUdSRUVNRU5UX05VTUJFUixcbiAgRlVORElOR19TVEFUVVMsXG4gIExPQ0FUSU9OUyxcbiAgTE9DQVRJT04sXG4gIExPQ0FUSU9OX1BFUkNFTlRBR0UsXG4gIElNUExFTUVOVEFUSU9OX0xPQ0FUSU9OLFxuICBJTVBMRU1FTlRBVElPTl9MRVZFTCxcbiAgQVBQUk9WQUxfU1RBVFVTLFxuICBBUFBST1ZFRF9CWSxcbiAgQVBQUk9WQUxfREFURSxcbiAgVFlQRV9PRl9BU1NJU1RBTkNFLFxuICBFWFBFTkRJVFVSRV9DTEFTUyxcbiAgRlVORElOR19ERVRBSUxTLFxuICBNT0RFX09GX1BBWU1FTlQsXG4gIEZVTkRJTkdfQ0xBU1NJRklDQVRJT05fREFURSxcbiAgQUdSRUVNRU5ULFxuICBET05PUl9PQkpFQ1RJVkUsXG4gIENPTkRJVElPTlMsXG4gIEFHUkVFTUVOVF9DT0RFLFxuICBBR1JFRU1FTlRfVElUTEUsXG4gIFBST0pFQ1RfQ0FURUdPUlksXG4gIFBST0pFQ1RfSU1QTEVNRU5USU5HX1VOSVQsXG4gIE9SR0FOSVpBVElPTixcbiAgUEVSQ0VOVEFHRSxcbiAgQU1QX09SR0FOSVpBVElPTl9ST0xFX0lELFxuICBST0xFLFxuICBFWEVDVVRJTkdfQUdFTkNZLFxuICBDT05UUkFDVElOR19BR0VOQ1ksXG4gIEJFTkVGSUNJQVJZX0FHRU5DWSxcbiAgSU1QTEVNRU5USU5HX0FHRU5DWSxcbiAgUkVTUE9OU0lCTEVfT1JHQU5JWkFUSU9OLFxuICBET05PUl9PUkdBTklaQVRJT04sXG4gIFJFR0lPTkFMX0dST1VQLFxuICBTRUNUT1JfR1JPVVAsXG4gIEJVREdFVFMsXG4gIEJVREdFVF9DT0RFLFxuICBCVURHRVRfT1JHQU5JWkFUSU9OX0NPREUsXG4gIEFSQ0hJVkVELFxuICBUUkFOU0FDVElPTl9EQVRFLFxuICBUUkFOU0FDVElPTl9UWVBFLFxuICBDT01NSVRNRU5UUyxcbiAgRElTQlVSU0VNRU5UUyxcbiAgRVhQRU5ESVRVUkVTLFxuICBFU1RJTUFURURfRElTQlVSU0VNRU5UUyxcbiAgVFJBTlNBQ1RJT05fQU1PVU5ULFxuICBBREpVU1RNRU5UX1RZUEUsXG4gIEFDVFVBTF9TVEFSVF9EQVRFLFxuICBQUk9QT1NFRF9TVEFSVF9EQVRFLFxuICBBQ1RVQUxfQ09NUExFVElPTl9EQVRFLFxuICBDT05UUkFDVElOR19EQVRFLFxuICBESVNCVVJTRU1FTlRfREFURSxcbiAgUFJPUE9TRURfQVBQUk9WQUxfREFURSxcbiAgT1JJR0lOQUxfQ09NUExFVElPTl9EQVRFLFxuICBQUk9QT1NFRF9DT01QTEVUSU9OX0RBVEUsXG4gIEZJTkFMX0RBVEVfRk9SX0RJU0JVUlNFTUVOVFMsXG4gIEZJTkFMX0RBVEVfRk9SX0NPTlRSQUNUSU5HLFxuICBFRkZFQ1RJVkVfRlVORElOR19EQVRFLFxuICBGVU5ESU5HX0NMT1NJTkdfREFURSxcbiAgUkFUSUZJQ0FUSU9OX0RBVEUsXG4gIE1BVFVSSVRZLFxuICBMQVNUX0FVRElUX0RBVEUsXG4gIFNJR05BVFVSRV9EQVRFLFxuICBIVU1BTklUQVJJQU5fQUlELFxuICBESVNBU1RFUl9SRVNQT05TRSxcbiAgUFJPR1JBTSxcbiAgUFJPR1JBTV9QRVJDRU5UQUdFLFxuICBQUk9HUkFNX1NFVFRJTkdTLFxuICBOQVRJT05BTF9QTEFOX09CSkVDVElWRSxcbiAgUFJJTUFSWV9QUk9HUkFNUyxcbiAgU0VDT05EQVJZX1BST0dSQU1TLFxuICBURVJUSUFSX1BST0dSQU1TLFxuICBHT1ZFUk5NRU5UX0FQUFJPVkFMX1BST0NFRFVSRVMsXG4gIEpPSU5UX0NSSVRFUklBLFxuICBURUFNLFxuICBSRUpFQ1RFRF9JRCxcbiAgSU5URVJOQUxfSUQsXG4gIEFNUF9JRCxcbiAgUFJPSkVDVF9USVRMRSxcbiAgREVTQ1JJUFRJT04sXG4gIE1PRElGSUVEX0JZLFxuICBNT0RJRklFRF9PTixcbiAgQ1JFQVRFRF9CWSxcbiAgQ1JFQVRFRF9PTixcbiAgTEFTVF9JTVBPUlRFRF9CWSxcbiAgQ0xJRU5UX0NIQU5HRV9JRCxcbiAgQ0xJRU5UX0NSRUFURURfT04sXG4gIENMSUVOVF9VUERBVEVEX09OLFxuICBJU19QVVNIRUQsXG4gIEFDVElWSVRZX0dST1VQLFxuICBWRVJTSU9OLFxuICBQUk9KRUNUX0NPTU1FTlRTLFxuICBMRVNTT05TX0xFQVJORUQsXG4gIFBST0pFQ1RfSU1QQUNULFxuICBBQ1RJVklUWV9TVU1NQVJZLFxuICBDT05ESVRJT05BTElUSUVTLFxuICBQUk9KRUNUX01BTkFHRU1FTlQsXG4gIEFfQ19DSEFQVEVSLFxuICBDUklTX05VTUJFUixcbiAgSUFUSV9JREVOVElGSUVSLFxuICBBQ1RJVklUWV9JTlRFUk5BTF9JRFMsXG4gIEhJRVJBUkNISUNBTF9WQUxVRSxcbiAgSElFUkFSQ0hJQ0FMX1ZBTFVFX1BBUlRTLFxuICBISUVSQVJDSElDQUxfVkFMVUVfREVQVEgsXG4gIFBQQ19BTU9VTlQsXG4gIFJQQ19BTU9VTlQsXG4gIFBQQ19BTk5VQUxfQlVER0VUUyxcbiAgQU1PVU5ULFxuICBDVVJSRU5DWSxcbiAgRlVORElOR19EQVRFLFxuICBDT01QT05FTlRTLFxuICBUT1RBTF9OVU1CRVJfT0ZfRlVORElOR19TT1VSQ0VTLFxuICBTT1VSQ0VfUk9MRSxcbiAgQU1QX0ZVTkRJTkdfSUQsXG4gIElTU1VFUyxcbiAgSVNTVUVfREFURSxcbiAgSVNTVUVfTkFNRSxcbiAgTUVBU1VSRVMsXG4gIE1FQVNVUkVfTkFNRSxcbiAgTUVBU1VSRV9EQVRFLFxuICBBQ1RPUlMsXG4gIEFDVE9SX05BTUUsXG4gIFNUUlVDVFVSRVMsXG4gIFNUUlVDVFVSRVNfVElUTEUsXG4gIFNUUlVDVFVSRVNfREVTQ1JJUFRJT04sXG4gIFNUUlVDVFVSRVNfTEFUSVRVREUsXG4gIFNUUlVDVFVSRVNfTE9OR0lUVURFLFxuICBTVFJVQ1RVUkVTX0NPTE9SLFxuICBTVFJVQ1RVUkVTX0xBVCxcbiAgU1RSVUNUVVJFU19MTkcsXG4gIFNUUlVDVFVSRVNfU0hBUEUsXG4gIFNUUlVDVFVSRVNfUE9JTlQsXG4gIFNUUlVDVFVSRVNfUE9MWUdPTixcbiAgU1RSVUNUVVJFU19QT0xZTElORSxcbiAgU1RSVUNUVVJFU19DT09SRElOQVRFUyxcbiAgQ09NUE9ORU5UX1RZUEUsXG4gIENPTVBPTkVOVF9USVRMRSxcbiAgQ09NUE9ORU5UX0ZVTkRJTkcsXG4gIENPTVBPTkVOVF9ERVNDUklQVElPTixcbiAgQ09NUE9ORU5UX09SR0FOSVpBVElPTixcbiAgRlVORElOR19BTU9VTlRfSUQsXG4gIEVYVFJBX0lORk8sXG4gIFZBTFVFLFxuICBBQ1JPTllNLFxuICBUWVBFX09GX0NPT1BFUkFUSU9OLFxuICBBTk5VQUxfUFJPSkVDVF9CVURHRVRfSUQsXG4gIFRZUEUsXG4gIFlFQVIsXG4gIEdST1VQX1ZFUlNJT05FRF9GVU5ESU5HLFxuICBBQ1RJVkVfTElTVCxcbiAgQUNUSVZFLFxuICBERUxFR0FURURfQ09PUEVSQVRJT04sXG4gIERFTEVHQVRFRF9QQVJUTkVSLFxuICBGSU5BTkNJTkdfSUQsXG4gIERJU0JVUlNFTUVOVF9PUkRFUl9JRCxcbiAgUExFREdFLFxuICBDQVBJVEFMX1NQRU5ESU5HX1BFUkNFTlRBR0UsXG4gIFJFUE9SVElOR19EQVRFLFxuICBSRUNJUElFTlRfUk9MRSxcbiAgUkVDSVBJRU5UX09SR0FOSVpBVElPTixcbiAgVEVNUE9SQUxfSUQsXG4gIE1JTklTVFJZX0NPREUsXG4gIFBST0pFQ1RfQ09ERSxcbiAgRlksXG4gIElORElSRUNUX09OX0JVREdFVCxcbiAgSU1QTEVNRU5UQVRJT05fTEVWRUxTX0VYVFJBX0lORk8sXG4gIElNUExFTUVOVEFUSU9OX0xPQ0FUSU9OX0VYVFJBX0lORk8sXG4gIERPTk9SX0NPTlRBQ1QsXG4gIFBST0pFQ1RfQ09PUkRJTkFUT1JfQ09OVEFDVCxcbiAgU0VDVE9SX01JTklTVFJZX0NPTlRBQ1QsXG4gIE1PRkVEX0NPTlRBQ1QsXG4gIElNUExFTUVOVElOR19FWEVDVVRJTkdfQUdFTkNZX0NPTlRBQ1QsXG4gIENPTlRBQ1QsXG4gIE9SR0FOSVpBVElPTl9HUk9VUCxcbiAgRklYRURfRVhDSEFOR0VfUkFURSxcbiAgUFJJTUFSWV9DT05UQUNULFxuICBBQ1RJVklUWV9ET0NVTUVOVFMsXG4gIERPQ1VNRU5UX1RZUEUsXG4gIElTTzIsXG4gIE1URUZfUFJPSkVDVElPTlMsXG4gIFBST0pFQ1RJT04sXG4gIFBJUEVMSU5FLFxuICBQUk9KRUNUSU9OX0RBVEUsXG4gIFNBTUVfQVNfUFJPUE9TRURfU1RBUlRfREFURV9MQUJFTCxcbiAgU0FNRV9BU19QUk9QT1NFRF9BUFBST1ZBTF9EQVRFX0xBQkVMLFxuICBERVBFTkRFTkNZX0lNUExFTUVOVEFUSU9OX0xFVkVMX1BSRVNFTlQsXG4gIERFUEVOREVOQ1lfSU1QTEVNRU5UQVRJT05fTEVWRUxfVkFMSUQsXG4gIERFUEVOREVOQ1lfSU1QTEVNRU5UQVRJT05fTE9DQVRJT05fUFJFU0VOVCxcbiAgREVQRU5ERU5DWV9JTVBMRU1FTlRBVElPTl9MT0NBVElPTl9WQUxJRCxcbiAgREVQRU5ERU5DWV9QUk9KRUNUX0NPREVfT05fQlVER0VULFxuICBERVBFTkRFTkNZX09OX0JVREdFVCxcbiAgREVQRU5ERU5DWV9UUkFOU0FDVElPTl9QUkVTRU5ULFxuICBERVBFTkRFTkNZX0NPTVBPTkVOVF9GVU5ESU5HX09SR19WQUxJRCxcbiAgQVBfU0VDVElPTl9JRFMsXG4gIEFDVElWSVRZX0lOVEVSTkFMX0lEU19DT0xTLFxuICBBQ1RJVklUWV9QTEFOTklOR19DT0xTLFxuICBBQ1RJVklUWV9MT0NBVElPTl9DT0xTLFxuICBBQ1RJVklUWV9GVU5ESU5HX0NPTFMsXG4gIEFDVElWSVRZX0NPTlRBQ1RfQ09MUyxcbiAgQVBfRlVORElOR1NfVEFCTEVfQ09MUyxcbiAgTVVMVElfU0VMRUNUX01JTl9TSVpFLFxuICBNVUxUSV9TRUxFQ1RfTUFYX1NJWkUsXG4gIHRvRmllbGROYW1lcyxcbiAgdG9GaWVsZE5hbWUsXG4gIHRvT3JpZ2luYWxMYWJlbCxcbn0pO1xuIiwiY29uc3QgTk9USUZJQ0FUSU9OX09SSUdJTl9BUElfU0VDVVJJVFkgPSAnTk9USUZJQ0FUSU9OX09SSUdJTl9BUElfU0VDVVJJVFknO1xuY29uc3QgTk9USUZJQ0FUSU9OX09SSUdJTl9BUElfTkVUV09SSyA9ICdOT1RJRklDQVRJT05fT1JJR0lOX0FQSV9ORVRXT1JLJztcbmNvbnN0IE5PVElGSUNBVElPTl9PUklHSU5fQVBJX1NZTkNVUCA9ICdOT1RJRklDQVRJT05fT1JJR0lOX0FQSV9TWU5DVVAnO1xuY29uc3QgTk9USUZJQ0FUSU9OX09SSUdJTl9BUElfR0VORVJBTCA9ICdOT1RJRklDQVRJT05fT1JJR0lOX0FQSV9HRU5FUkFMJztcbmNvbnN0IE5PVElGSUNBVElPTl9PUklHSU5fREFUQUJBU0UgPSAnTk9USUZJQ0FUSU9OX09SSUdJTl9EQVRBQkFTRSc7XG5jb25zdCBOT1RJRklDQVRJT05fT1JJR0lOX0FVVEhFTlRJQ0FUSU9OID0gJ05PVElGSUNBVElPTl9PUklHSU5fQVVUSEVOVElDQVRJT04nO1xuY29uc3QgTk9USUZJQ0FUSU9OX09SSUdJTl9XT1JLU1BBQ0VfRklMVEVSID0gJ05PVElGSUNBVElPTl9PUklHSU5fV09SS1NQQUNFX0ZJTFRFUic7XG5jb25zdCBOT1RJRklDQVRJT05fT1JJR0lOX1dPUktTUEFDRSA9ICdOT1RJRklDQVRJT05fT1JJR0lOX1dPUktTUEFDRSc7XG5jb25zdCBOT1RJRklDQVRJT05fT1JJR0lOX1NZTkNVUF9QUk9DRVNTID0gJ05PVElGSUNBVElPTl9PUklHSU5fU1lOQ1VQX1BST0NFU1MnO1xuY29uc3QgTk9USUZJQ0FUSU9OX09SSUdJTl9DVVJSRU5DWV9NQU5BR0VSID0gJ05PVElGSUNBVElPTl9PUklHSU5fQ1VSUkVOQ1lfTUFOQUdFUic7XG5jb25zdCBOT1RJRklDQVRJT05fT1JJR0lOX0RBVEVTID0gJ05PVElGSUNBVElPTl9PUklHSU5fREFURVMnO1xuY29uc3QgTk9USUZJQ0FUSU9OX09SSUdJTl9BQ1RJVklUWSA9ICdOT1RJRklDQVRJT05fT1JJR0lOX0FDVElWSVRZJztcbmNvbnN0IE5PVElGSUNBVElPTl9PUklHSU5fUkVTT1VSQ0UgPSAnTk9USUZJQ0FUSU9OX09SSUdJTl9SRVNPVVJDRSc7XG5jb25zdCBOT1RJRklDQVRJT05fT1JJR0lOX0kxOE5FWFQgPSAnTk9USUZJQ0FUSU9OX09SSUdJTl9JMThORVhUJztcbmNvbnN0IE5PVElGSUNBVElPTl9PUklHSU5fVVBEQVRFX0NIRUNLID0gJ05PVElGSUNBVElPTl9PUklHSU5fVVBEQVRFX0NIRUNLJztcbmNvbnN0IE5PVElGSUNBVElPTl9PUklHSU5fVVBEQVRFID0gJ05PVElGSUNBVElPTl9PUklHSU5fVVBEQVRFJztcbmNvbnN0IE5PVElGSUNBVElPTl9PUklHSU5fU0VUVVAgPSAnTk9USUZJQ0FUSU9OX09SSUdJTl9TRVRVUCc7XG5jb25zdCBOT1RJRklDQVRJT05fT1JJR0lOX1NFVFRJTkdTID0gJ05PVElGSUNBVElPTl9PUklHSU5fU0VUVElOR1MnO1xuXG5jb25zdCBOT1RJRklDQVRJT05fU0VWRVJJVFlfV0FSTklORyA9ICdOT1RJRklDQVRJT05fU0VWRVJJVFlfV0FSTklORyc7XG5jb25zdCBOT1RJRklDQVRJT05fU0VWRVJJVFlfSU5GTyA9ICdOT1RJRklDQVRJT05fU0VWRVJJVFlfSU5GTyc7XG5jb25zdCBOT1RJRklDQVRJT05fU0VWRVJJVFlfRVJST1IgPSAnTk9USUZJQ0FUSU9OX1NFVkVSSVRZX0VSUk9SJztcblxuY29uc3QgTk9USUZJQ0FUSU9OX0VSUk9SX0xFVkVMX01JTk9SID0gJ05PVElGSUNBVElPTl9FUlJPUl9MRVZFTF9NSU5PUic7XG5jb25zdCBOT1RJRklDQVRJT05fRVJST1JfTEVWRUxfQkxPQ0tFUiA9ICdOT1RJRklDQVRJT05fRVJST1JfTEVWRUxfQkxPQ0tFUic7XG5cbmNvbnN0IE5PVElGSUNBVElPTl9PUklHSU5fV1JPTkdfTUVUSE9EX1VTQUdFID0gJ05PVElGSUNBVElPTl9PUklHSU5fV1JPTkdfTUVUSE9EX1VTQUdFJztcblxuY29uc3QgRVJST1JfQ09ERV9OT19DT05ORUNUSVZJVFkgPSAnTk9fQ09OTkVDVElWSVRZJztcbmNvbnN0IEVSUk9SX0NPREVfQUNDRVNTX0RFTklFRCA9ICdBQ0NFU1NfREVOSUVEJztcblxuXG5jb25zdCBNU0dfSU5WQUxJRF9VUkwgPSAnaW52YWxpZFVybCc7XG5jb25zdCBNU0dfVElNRU9VVCA9ICd0aW1lb3V0RXJyb3InO1xuY29uc3QgTVNHX1VOS05PV05fTkVUV09SS19FUlJPUiA9ICd1bmtub3duTmV0d29ya0Vycm9yJztcbmNvbnN0IE1TR19BTVBfVU5SRUFDSEFCTEUgPSAnQU1QVW5yZWFjaGFibGVFcnJvcic7XG5jb25zdCBHRU5FUkFMX0NPTk5FQ1RJT05fRVJST1JTID0gW01TR19JTlZBTElEX1VSTCwgTVNHX1RJTUVPVVQsIE1TR19VTktOT1dOX05FVFdPUktfRVJST1IsIE1TR19BTVBfVU5SRUFDSEFCTEVdO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5mcmVlemUoe1xuICBOT1RJRklDQVRJT05fT1JJR0lOX0FQSV9TRUNVUklUWSxcbiAgTk9USUZJQ0FUSU9OX09SSUdJTl9BUElfTkVUV09SSyxcbiAgTk9USUZJQ0FUSU9OX09SSUdJTl9BUElfU1lOQ1VQLFxuICBOT1RJRklDQVRJT05fT1JJR0lOX0FQSV9HRU5FUkFMLFxuICBOT1RJRklDQVRJT05fT1JJR0lOX0RBVEFCQVNFLFxuICBOT1RJRklDQVRJT05fT1JJR0lOX0FVVEhFTlRJQ0FUSU9OLFxuICBOT1RJRklDQVRJT05fT1JJR0lOX1dPUktTUEFDRV9GSUxURVIsXG4gIE5PVElGSUNBVElPTl9PUklHSU5fV09SS1NQQUNFLFxuICBOT1RJRklDQVRJT05fT1JJR0lOX1NZTkNVUF9QUk9DRVNTLFxuICBOT1RJRklDQVRJT05fT1JJR0lOX0NVUlJFTkNZX01BTkFHRVIsXG4gIE5PVElGSUNBVElPTl9PUklHSU5fREFURVMsXG4gIE5PVElGSUNBVElPTl9PUklHSU5fQUNUSVZJVFksXG4gIE5PVElGSUNBVElPTl9PUklHSU5fUkVTT1VSQ0UsXG4gIE5PVElGSUNBVElPTl9PUklHSU5fSTE4TkVYVCxcbiAgTk9USUZJQ0FUSU9OX09SSUdJTl9VUERBVEVfQ0hFQ0ssXG4gIE5PVElGSUNBVElPTl9PUklHSU5fVVBEQVRFLFxuICBOT1RJRklDQVRJT05fT1JJR0lOX1NFVFVQLFxuICBOT1RJRklDQVRJT05fT1JJR0lOX1NFVFRJTkdTLFxuXG4gIE5PVElGSUNBVElPTl9TRVZFUklUWV9XQVJOSU5HLFxuICBOT1RJRklDQVRJT05fU0VWRVJJVFlfSU5GTyxcbiAgTk9USUZJQ0FUSU9OX1NFVkVSSVRZX0VSUk9SLFxuXG4gIE5PVElGSUNBVElPTl9FUlJPUl9MRVZFTF9NSU5PUixcbiAgTk9USUZJQ0FUSU9OX0VSUk9SX0xFVkVMX0JMT0NLRVIsXG5cbiAgTk9USUZJQ0FUSU9OX09SSUdJTl9XUk9OR19NRVRIT0RfVVNBR0UsXG5cbiAgRVJST1JfQ09ERV9OT19DT05ORUNUSVZJVFksXG4gIEVSUk9SX0NPREVfQUNDRVNTX0RFTklFRCxcblxuXG4gIE1TR19JTlZBTElEX1VSTCxcbiAgTVNHX1RJTUVPVVQsXG4gIE1TR19VTktOT1dOX05FVFdPUktfRVJST1IsXG4gIE1TR19BTVBfVU5SRUFDSEFCTEUsXG4gIEdFTkVSQUxfQ09OTkVDVElPTl9FUlJPUlNcbn0pXG47XG4iLCIvKipcbiAqIEBhdXRob3IgTmFkZWpkYSBNYW5kcmVzY3VcbiAqL1xuXG5pbXBvcnQgQWN0aXZpdHlDb25zdGFudHMgZnJvbSAnLi4vbW9kdWxlcy91dGlsL0FjdGl2aXR5Q29uc3RhbnRzJztcblxuY29uc3QgRE9OT1JfT1JHQU5JWkFUSU9OID0gJ0Rvbm9yIE9yZ2FuaXphdGlvbic7XG5jb25zdCBSRVNQT05TSUJMRV9PUkdBTklaQVRJT04gPSAnUmVzcG9uc2libGUgT3JnYW5pemF0aW9uJztcbmNvbnN0IEVYRUNVVElOR19BR0VOQ1kgPSAnRXhlY3V0aW5nIEFnZW5jeSc7XG5jb25zdCBJTVBMRU1FTlRJTkdfQUdFTkNZID0gJ0ltcGxlbWVudGluZyBBZ2VuY3knO1xuY29uc3QgQkVORUZJQ0lBUllfQUdFTkNZID0gJ0JlbmVmaWNpYXJ5IEFnZW5jeSc7XG5jb25zdCBDT05UUkFDVElOR19BR0VOQ1kgPSAnQ29udHJhY3RpbmcgQWdlbmN5JztcbmNvbnN0IERPTk9SX0FHRU5DWSA9ICdEb25vcic7XG5jb25zdCBSRUdJT05BTF9HUk9VUCA9ICdSZWdpb25hbCBHcm91cCc7XG5jb25zdCBTRUNUT1JfR1JPVVAgPSAnU2VjdG9yIEdyb3VwJztcblxuY29uc3QgT1JHX1JPTEVfTkFNRVMgPSBbRE9OT1JfT1JHQU5JWkFUSU9OLCBSRVNQT05TSUJMRV9PUkdBTklaQVRJT04sIEVYRUNVVElOR19BR0VOQ1ksIElNUExFTUVOVElOR19BR0VOQ1ksXG4gIEJFTkVGSUNJQVJZX0FHRU5DWSwgQ09OVFJBQ1RJTkdfQUdFTkNZLCBSRUdJT05BTF9HUk9VUCwgU0VDVE9SX0dST1VQXTtcblxuY29uc3QgQUNUVUFMID0gJ0FjdHVhbCc7XG5jb25zdCBQTEFOTkVEID0gJ1BsYW5uZWQnO1xuY29uc3QgQ09NTUlUTUVOVFMgPSAnQ29tbWl0bWVudHMnO1xuY29uc3QgRElTQlVSU0VNRU5UUyA9ICdEaXNidXJzZW1lbnRzJztcbmNvbnN0IEVYUEVORElUVVJFUyA9ICdFeHBlbmRpdHVyZXMnO1xuY29uc3QgQUNUVUFMX0NPTU1JVE1FTlRTID0gYCR7QUNUVUFMfSAke0FjdGl2aXR5Q29uc3RhbnRzLkNPTU1JVE1FTlRTfWA7XG5jb25zdCBBQ1RVQUxfRElTQlVSU0VNRU5UUyA9IGAke0FDVFVBTH0gJHtBY3Rpdml0eUNvbnN0YW50cy5ESVNCVVJTRU1FTlRTfWA7XG5jb25zdCBBQ1RVQUxfRVhQRU5ESVRVUkVTID0gYCR7QUNUVUFMfSAke0FjdGl2aXR5Q29uc3RhbnRzLkVYUEVORElUVVJFU31gO1xuY29uc3QgUExBTk5FRF9DT01NSVRNRU5UUyA9IGAke1BMQU5ORUR9ICR7QWN0aXZpdHlDb25zdGFudHMuQ09NTUlUTUVOVFN9YDtcbmNvbnN0IFBMQU5ORURfRElTQlVSU0VNRU5UUyA9IGAke1BMQU5ORUR9ICR7QWN0aXZpdHlDb25zdGFudHMuRElTQlVSU0VNRU5UU31gO1xuY29uc3QgUExBTk5FRF9FWFBFTkRJVFVSRVMgPSBgJHtQTEFOTkVEfSAke0FjdGl2aXR5Q29uc3RhbnRzLkVYUEVORElUVVJFU31gO1xuY29uc3QgVU5BTExPQ0FURURfRElTQlVSU0VNRU5UUyA9ICdVbmFsbG9jYXRlZCBEaXNidXJzZW1lbnRzJztcbmNvbnN0IERFTElWRVJZX1JBVEUgPSAnRGVsaXZlcnkgcmF0ZSc7XG5jb25zdCBNVEVGX1BST0pFQ1RJT05TID0gJ01URUYgUHJvamVjdGlvbnMnO1xuXG5jb25zdCBBREpVU1RNRU5UX1RZUEVTID0gW0FDVFVBTCwgUExBTk5FRF07XG5jb25zdCBBREpVU1RNRU5UX1RZUEVTX0FQX09SREVSID0gW1BMQU5ORUQsIEFDVFVBTF07XG5cbmNvbnN0IE5FV19BQ1RJVklUWV9JRCA9ICcwJztcblxuY29uc3QgUFJPUE9TRURfUFJPSkVDVF9DT1NUID0gJ3BwYyc7XG5jb25zdCBSRVZJU0VEX1BST0pFQ1RfQ09TVCA9ICdycGMnO1xuXG5jb25zdCBBQ1JPTllNX0RPTk9SX09SR0FOSVpBVElPTiA9ICdETic7XG5jb25zdCBBQ1JPTllNX0VYRUNVVElOR19BR0VOQ1kgPSAnRUEnO1xuY29uc3QgQUNST05ZTV9JTVBMRU1FTlRJTkdfQUdFTkNZID0gJ0lBJztcbmNvbnN0IEFDUk9OWU1fQkVORUZJQ0lBUllfQUdFTkNZID0gJ0JBJztcbmNvbnN0IEFDUk9OWU1fUkVTUE9OU0lCTEVfT1JHQU5JWkFUSU9OID0gJ1JPJztcblxuLyoqIEFwcHJvdmFsIHN0YXR1cyB1bnRyYW5zbGF0ZWQgdmFsdWVzICoqL1xuY29uc3QgQVBQUk9WQUxfU1RBVFVTX0NSRUFURUQgPSAnY3JlYXRlZCc7XG5jb25zdCBBUFBST1ZBTF9TVEFUVVNfQVBQUk9WRUQgPSAnYXBwcm92ZWQnO1xuY29uc3QgQVBQUk9WQUxfU1RBVFVTX0VESVRFRCA9ICdlZGl0ZWQnO1xuY29uc3QgQVBQUk9WQUxfU1RBVFVTX1NUQVJURURfQVBQUk9WRUQgPSAnc3RhcnRlZGFwcHJvdmVkJztcbmNvbnN0IEFQUFJPVkFMX1NUQVRVU19TVEFSVEVEID0gJ3N0YXJ0ZWQnO1xuY29uc3QgQVBQUk9WQUxfU1RBVFVTX05PVF9BUFBST1ZFRCA9ICdub3RfYXBwcm92ZWQnO1xuY29uc3QgQVBQUk9WQUxfU1RBVFVTX1JFSkVDVEVEID0gJ3JlamVjdGVkJztcblxuY29uc3QgT05fQlVER0VUID0gJ09uIEJ1ZGdldCc7XG5cbmNvbnN0IElOVEVSTkFUSU9OQUwgPSAnSW50ZXJuYXRpb25hbCc7XG5jb25zdCBDT1VOVFJZID0gJ0NvdW50cnknO1xuXG5jb25zdCBSRUxBVEVEX0RPQ1VNRU5UUyA9ICdSZWxhdGVkIERvY3VtZW50cyc7XG5cbmNvbnN0IFRNUF9FTlRJVFlfVkFMSURBVE9SID0gJ2VudGl0eS12YWxpZGF0b3InO1xuXG4vKiogUmVxdWlyZWQgc3RhdHVzICovXG5jb25zdCBBTFdBWVNfUkVRVUlSRUQgPSAnWSc7XG5cbmV4cG9ydCBkZWZhdWx0IE9iamVjdC5mcmVlemUoe1xuICBET05PUl9PUkdBTklaQVRJT04sXG4gIFJFU1BPTlNJQkxFX09SR0FOSVpBVElPTixcbiAgRVhFQ1VUSU5HX0FHRU5DWSxcbiAgSU1QTEVNRU5USU5HX0FHRU5DWSxcbiAgQkVORUZJQ0lBUllfQUdFTkNZLFxuICBDT05UUkFDVElOR19BR0VOQ1ksXG4gIERPTk9SX0FHRU5DWSxcbiAgUkVHSU9OQUxfR1JPVVAsXG4gIFNFQ1RPUl9HUk9VUCxcbiAgT1JHX1JPTEVfTkFNRVMsXG4gIEFDVFVBTCxcbiAgUExBTk5FRCxcbiAgQ09NTUlUTUVOVFMsXG4gIERJU0JVUlNFTUVOVFMsXG4gIEVYUEVORElUVVJFUyxcbiAgQUNUVUFMX0NPTU1JVE1FTlRTLFxuICBBQ1RVQUxfRElTQlVSU0VNRU5UUyxcbiAgQUNUVUFMX0VYUEVORElUVVJFUyxcbiAgUExBTk5FRF9DT01NSVRNRU5UUyxcbiAgUExBTk5FRF9ESVNCVVJTRU1FTlRTLFxuICBQTEFOTkVEX0VYUEVORElUVVJFUyxcbiAgVU5BTExPQ0FURURfRElTQlVSU0VNRU5UUyxcbiAgREVMSVZFUllfUkFURSxcbiAgTVRFRl9QUk9KRUNUSU9OUyxcbiAgQURKVVNUTUVOVF9UWVBFUyxcbiAgQURKVVNUTUVOVF9UWVBFU19BUF9PUkRFUixcbiAgTkVXX0FDVElWSVRZX0lELFxuICBQUk9QT1NFRF9QUk9KRUNUX0NPU1QsXG4gIFJFVklTRURfUFJPSkVDVF9DT1NULFxuICBBQ1JPTllNX0RPTk9SX09SR0FOSVpBVElPTixcbiAgQUNST05ZTV9FWEVDVVRJTkdfQUdFTkNZLFxuICBBQ1JPTllNX0lNUExFTUVOVElOR19BR0VOQ1ksXG4gIEFDUk9OWU1fQkVORUZJQ0lBUllfQUdFTkNZLFxuICBBQ1JPTllNX1JFU1BPTlNJQkxFX09SR0FOSVpBVElPTixcbiAgQVBQUk9WQUxfU1RBVFVTX0NSRUFURUQsXG4gIEFQUFJPVkFMX1NUQVRVU19BUFBST1ZFRCxcbiAgQVBQUk9WQUxfU1RBVFVTX0VESVRFRCxcbiAgQVBQUk9WQUxfU1RBVFVTX1NUQVJURURfQVBQUk9WRUQsXG4gIEFQUFJPVkFMX1NUQVRVU19TVEFSVEVELFxuICBBUFBST1ZBTF9TVEFUVVNfTk9UX0FQUFJPVkVELFxuICBBUFBST1ZBTF9TVEFUVVNfUkVKRUNURUQsXG4gIE9OX0JVREdFVCxcbiAgSU5URVJOQVRJT05BTCxcbiAgQ09VTlRSWSxcbiAgUkVMQVRFRF9ET0NVTUVOVFMsXG4gIFRNUF9FTlRJVFlfVkFMSURBVE9SLFxuICBBTFdBWVNfUkVRVUlSRURcbn0pO1xuIiwiaW1wb3J0IEFjdGl2aXR5Q29uc3RhbnRzIGZyb20gJy4uL21vZHVsZXMvdXRpbC9BY3Rpdml0eUNvbnN0YW50cyc7XG5pbXBvcnQgRmVhdHVyZU1hbmFnZXJDb25zdGFudHMgZnJvbSAnLi4vbW9kdWxlcy91dGlsL0ZlYXR1cmVNYW5hZ2VyQ29uc3RhbnRzJztcbmltcG9ydCBWYWx1ZUNvbnN0YW50cyBmcm9tICcuL1ZhbHVlQ29uc3RhbnRzJztcblxuLyoqXG4gKiBUaGlzIGlzIGEgc2V0IG9mIGZpZWxkIHBhdGhzIHRoYXQgYXJlIHVzZWQgZm9yIGZyZXF1ZW50IG5lZWRzXG4gKiBAYXV0aG9yIE5hZGVqZGEgTWFuZHJlc2N1XG4gKi9cblxuZXhwb3J0IGNvbnN0IEZVTkRJTkdfQUNUSVZFX0xJU1QgPSAnZnVuZGluZ3N+YWN0aXZlX2xpc3QnO1xuZXhwb3J0IGNvbnN0IEZVTkRJTkdfVFlQRV9PRl9BU1NJU1RBTkNFID0gYCR7QWN0aXZpdHlDb25zdGFudHMuRlVORElOR1N9fiR7QWN0aXZpdHlDb25zdGFudHMuVFlQRV9PRl9BU1NJU1RBTkNFfWA7XG5leHBvcnQgY29uc3QgRlVORElOR19ERVRBSUxTX1BBVEggPSBgJHtBY3Rpdml0eUNvbnN0YW50cy5GVU5ESU5HU31+JHtBY3Rpdml0eUNvbnN0YW50cy5GVU5ESU5HX0RFVEFJTFN9YDtcbi8qKlxuICogTGVnYWN5IGZ1bmRpbmcgY3VycmVuY3kgcGF0aCB1c2VkIGZvciBkYXRhIG1pZ3JhdGlvblxuICogQGRlcHJlY2F0ZWQgc2luY2UgMS40XG4gKi9cbmV4cG9ydCBjb25zdCBGVU5ESU5HX0NVUlJFTkNZX1BBVEggPSBgJHtGVU5ESU5HX0RFVEFJTFNfUEFUSH1+JHtBY3Rpdml0eUNvbnN0YW50cy5DVVJSRU5DWX1gO1xuZXhwb3J0IGNvbnN0IE1URUZfQ1VSUkVOQ1lfUEFUSCA9XG4gIGAke0FjdGl2aXR5Q29uc3RhbnRzLkZVTkRJTkdTfX4ke0FjdGl2aXR5Q29uc3RhbnRzLk1URUZfUFJPSkVDVElPTlN9fiR7QWN0aXZpdHlDb25zdGFudHMuQ1VSUkVOQ1l9YDtcbmV4cG9ydCBjb25zdCBQUENfQ1VSUkVOQ1lfUEFUSCA9IGAke0FjdGl2aXR5Q29uc3RhbnRzLlBQQ19BTU9VTlR9fiR7QWN0aXZpdHlDb25zdGFudHMuQ1VSUkVOQ1l9YDtcbmV4cG9ydCBjb25zdCBSUENfQ1VSUkVOQ1lfUEFUSCA9IGAke0FjdGl2aXR5Q29uc3RhbnRzLlJQQ19BTU9VTlR9fiR7QWN0aXZpdHlDb25zdGFudHMuQ1VSUkVOQ1l9YDtcbmV4cG9ydCBjb25zdCBDT01QT05FTlRfQ1VSUkVOQ1lfUEFUSCA9XG4gIGAke0FjdGl2aXR5Q29uc3RhbnRzLkNPTVBPTkVOVFN9fiR7QWN0aXZpdHlDb25zdGFudHMuQ09NUE9ORU5UX0ZVTkRJTkd9fiR7QWN0aXZpdHlDb25zdGFudHMuQ1VSUkVOQ1l9YDtcbmV4cG9ydCBjb25zdCBESVNCVVJTRU1FTlRTX1BBVEggPSBgJHtBY3Rpdml0eUNvbnN0YW50cy5GVU5ESU5HU31+JHtBY3Rpdml0eUNvbnN0YW50cy5ESVNCVVJTRU1FTlRTfWA7XG5leHBvcnQgY29uc3QgQUNUSVZJVFlfSU5URVJOQUxfSURTX0lOVEVSTkFMX0lEX1BBVEggPSAnYWN0aXZpdHlfaW50ZXJuYWxfaWRzfmludGVybmFsX2lkJztcbmV4cG9ydCBjb25zdCBBQ1RJVklUWV9JTlRFUk5BTF9JRFNfT1JHQU5JWkFUSU9OX1BBVEggPSAnYWN0aXZpdHlfaW50ZXJuYWxfaWRzfm9yZ2FuaXphdGlvbic7XG5leHBvcnQgY29uc3QgTE9DQVRJT05fUEFUSCA9ICdsb2NhdGlvbnN+bG9jYXRpb24nO1xuZXhwb3J0IGNvbnN0IE5BVElPTkFMX1BMQU5fT0JKRUNUSVZFX1BBVEggPSAnbmF0aW9uYWxfcGxhbl9vYmplY3RpdmV+cHJvZ3JhbSc7XG5leHBvcnQgY29uc3QgUFJJTUFSWV9QUk9HUkFNX1BBVEggPSAncHJpbWFyeV9wcm9ncmFtc35wcm9ncmFtJztcbmV4cG9ydCBjb25zdCBTRUNPTkRBUllfUFJPR1JBTV9QQVRIID0gJ3NlY29uZGFyeV9wcm9ncmFtc35wcm9ncmFtJztcbmV4cG9ydCBjb25zdCBQUklNQVJZX1NFQ1RPUl9QQVRIID0gJ3ByaW1hcnlfc2VjdG9yc35zZWN0b3InO1xuZXhwb3J0IGNvbnN0IFNFQ09OREFSWV9TRUNUT1JfUEFUSCA9ICdzZWNvbmRhcnlfc2VjdG9yc35zZWN0b3InO1xuZXhwb3J0IGNvbnN0IFRFUlRJQVJZX1NFQ1RPUl9QQVRIID0gJ3RlcnRpYXJ5X3NlY3RvcnN+c2VjdG9yJztcbmV4cG9ydCBjb25zdCBET05PUl9PUkdBTklaQVRJT05TX1BBVEggPSAnZG9ub3Jfb3JnYW5pemF0aW9ufm9yZ2FuaXphdGlvbic7XG5leHBvcnQgY29uc3QgUkVTUE9OU0lCTEVfT1JHQU5JWkFUSU9OX0JVREdFVFNfUEFUSCA9XG4gIGAke0FjdGl2aXR5Q29uc3RhbnRzLlJFU1BPTlNJQkxFX09SR0FOSVpBVElPTn1+JHtBY3Rpdml0eUNvbnN0YW50cy5CVURHRVRTfWA7XG5cbmV4cG9ydCBjb25zdCBSRUxBVEVEX09SR1NfUEFUSFMgPSBWYWx1ZUNvbnN0YW50cy5PUkdfUk9MRV9OQU1FUy5tYXAob3JnUm9sZSA9PiBBY3Rpdml0eUNvbnN0YW50cy50b0ZpZWxkTmFtZShvcmdSb2xlKSk7XG5leHBvcnQgY29uc3QgUkVMQVRFRF9PUkdTX09SR0FOSVpBVElPTl9QQVRIUyA9IFZhbHVlQ29uc3RhbnRzLk9SR19ST0xFX05BTUVTLm1hcChcbiAgb3JnUm9sZSA9PiBgJHtBY3Rpdml0eUNvbnN0YW50cy50b0ZpZWxkTmFtZShvcmdSb2xlKX1+JHtBY3Rpdml0eUNvbnN0YW50cy5PUkdBTklaQVRJT059YCk7XG5cbmV4cG9ydCBjb25zdCBSSUNIX1RFWFRfRklFTERTID0gbmV3IFNldChbQWN0aXZpdHlDb25zdGFudHMuU1RBVFVTX1JFQVNPTiwgQWN0aXZpdHlDb25zdGFudHMuT0JKRUNUSVZFLFxuICBBY3Rpdml0eUNvbnN0YW50cy5ERVNDUklQVElPTiwgQWN0aXZpdHlDb25zdGFudHMuUFJPSkVDVF9DT01NRU5UUywgQWN0aXZpdHlDb25zdGFudHMuTEVTU09OU19MRUFSTkVELFxuICBBY3Rpdml0eUNvbnN0YW50cy5QUk9KRUNUX0lNUEFDVCwgQWN0aXZpdHlDb25zdGFudHMuQUNUSVZJVFlfU1VNTUFSWSwgQWN0aXZpdHlDb25zdGFudHMuQ09ORElUSU9OQUxJVElFUyxcbiAgQWN0aXZpdHlDb25zdGFudHMuUFJPSkVDVF9NQU5BR0VNRU5ULCBBY3Rpdml0eUNvbnN0YW50cy5SRVNVTFRTLFxuXSk7XG5cbmV4cG9ydCBjb25zdCBQQVRIU19XSVRIX1RSRUVfU1RSVUNUVVJFID0gbmV3IFNldChbTkFUSU9OQUxfUExBTl9PQkpFQ1RJVkVfUEFUSCwgUFJJTUFSWV9QUk9HUkFNX1BBVEgsXG4gIFNFQ09OREFSWV9QUk9HUkFNX1BBVEgsIFBSSU1BUllfU0VDVE9SX1BBVEgsIFNFQ09OREFSWV9TRUNUT1JfUEFUSCwgVEVSVElBUllfU0VDVE9SX1BBVEhdKTtcblxuZXhwb3J0IGNvbnN0IFBBVEhTX1dJVEhfSElFUkFSQ0hJQ0FMX1ZBTFVFUyA9IG5ldyBTZXQoW05BVElPTkFMX1BMQU5fT0JKRUNUSVZFX1BBVEgsIFBSSU1BUllfUFJPR1JBTV9QQVRILFxuICBTRUNPTkRBUllfUFJPR1JBTV9QQVRILCBQUklNQVJZX1NFQ1RPUl9QQVRILCBTRUNPTkRBUllfU0VDVE9SX1BBVEgsIFRFUlRJQVJZX1NFQ1RPUl9QQVRILCBMT0NBVElPTl9QQVRIXSk7XG5cbmV4cG9ydCBjb25zdCBBQ1RJVklUWV9DT05UQUNUX1BBVEhTID0gW0FjdGl2aXR5Q29uc3RhbnRzLkRPTk9SX0NPTlRBQ1QsIEFjdGl2aXR5Q29uc3RhbnRzLlBST0pFQ1RfQ09PUkRJTkFUT1JfQ09OVEFDVCxcbiAgQWN0aXZpdHlDb25zdGFudHMuU0VDVE9SX01JTklTVFJZX0NPTlRBQ1QsIEFjdGl2aXR5Q29uc3RhbnRzLk1PRkVEX0NPTlRBQ1QsXG4gIEFjdGl2aXR5Q29uc3RhbnRzLklNUExFTUVOVElOR19FWEVDVVRJTkdfQUdFTkNZX0NPTlRBQ1RdO1xuXG5leHBvcnQgY29uc3QgVFJBTlNBQ1RJT05fVFlQRVMgPSBbQWN0aXZpdHlDb25zdGFudHMuQ09NTUlUTUVOVFMsIEFjdGl2aXR5Q29uc3RhbnRzLkRJU0JVUlNFTUVOVFMsXG4gIEFjdGl2aXR5Q29uc3RhbnRzLkVYUEVORElUVVJFU107XG5leHBvcnQgY29uc3QgVFJBTlNBQ1RJT05fVFlQRVNfT1JERVJFRCA9IFRSQU5TQUNUSU9OX1RZUEVTO1xuZXhwb3J0IGNvbnN0IEZVTkRJTkdfVFJBTlNBQ1RJT05fVFlQRVMgPSBbLi4uVFJBTlNBQ1RJT05fVFlQRVMsIEFjdGl2aXR5Q29uc3RhbnRzLkVTVElNQVRFRF9ESVNCVVJTRU1FTlRTXTtcbmV4cG9ydCBjb25zdCBBREpVU1RNRU5UX1RZUEVfUEFUSFMgPSBGVU5ESU5HX1RSQU5TQUNUSU9OX1RZUEVTLm1hcChcbiAgdHQgPT4gYCR7QWN0aXZpdHlDb25zdGFudHMuRlVORElOR1N9fiR7dHR9fiR7QWN0aXZpdHlDb25zdGFudHMuQURKVVNUTUVOVF9UWVBFfWApO1xuZXhwb3J0IGNvbnN0IEZVTkRJTkdfQ1VSUkVOQ1lfUEFUSFMgPSBUUkFOU0FDVElPTl9UWVBFUy5tYXAoXG4gIHR0ID0+IGAke0FjdGl2aXR5Q29uc3RhbnRzLkZVTkRJTkdTfX4ke3R0fX4ke0FjdGl2aXR5Q29uc3RhbnRzLkNVUlJFTkNZfWApO1xuXG5leHBvcnQgY29uc3QgUEFUSFNfRk9SX0FDVElWSVRZX0NVUlJFTkNZID0gW0ZVTkRJTkdfQ1VSUkVOQ1lfUEFUSCwgTVRFRl9DVVJSRU5DWV9QQVRILCBDT01QT05FTlRfQ1VSUkVOQ1lfUEFUSCxcbiAgUFBDX0NVUlJFTkNZX1BBVEgsIFJQQ19DVVJSRU5DWV9QQVRILCAuLi5GVU5ESU5HX0NVUlJFTkNZX1BBVEhTXTtcblxuZXhwb3J0IGNvbnN0IFBBVEhTX0ZPUl9DVVJSRU5DWSA9IG5ldyBTZXQoW0FjdGl2aXR5Q29uc3RhbnRzLkNVUlJFTkNZLCAuLi5QQVRIU19GT1JfQUNUSVZJVFlfQ1VSUkVOQ1ldKTtcblxuZXhwb3J0IGNvbnN0IERPX05PVF9IWURSQVRFX0ZJRUxEU19MSVNUID0gW0FjdGl2aXR5Q29uc3RhbnRzLkFQUFJPVkFMX1NUQVRVU107XG5cbi8qIEZpZWxkcyBwYXRocyBhbHRlcm5hdGl2ZSB2YWx1ZXMgbG9jYXRpb24gKi9cbmV4cG9ydCBjb25zdCBBTFRFUk5BVEVfVkFMVUVfUEFUSCA9IHt9O1xuQUxURVJOQVRFX1ZBTFVFX1BBVEhbQWN0aXZpdHlDb25zdGFudHMuQ1JFQVRFRF9PTl0gPSBBY3Rpdml0eUNvbnN0YW50cy5DTElFTlRfQ1JFQVRFRF9PTjtcbkFMVEVSTkFURV9WQUxVRV9QQVRIW0FjdGl2aXR5Q29uc3RhbnRzLk1PRElGSUVEX09OXSA9IEFjdGl2aXR5Q29uc3RhbnRzLkNMSUVOVF9VUERBVEVEX09OO1xuXG4vKiBGTSBwYXRocyBmb3Igc29tZSBhY3Rpdml0eSBmaWVsZHMgdGhhdCBhcmUgYWx3YXlzIHByZXNlbnQgaW4gZmllbGRzIGRlZiwgYnV0IG1heSBiZSBoaWRkZW4gZnJvbSBkaXNwbGF5IHRocm91Z2ggRk0gKi9cbmV4cG9ydCBjb25zdCBBQ1RJVklUWV9GSUVMRFNfRk1fUEFUSCA9IHt9O1xuQUNUSVZJVFlfRklFTERTX0ZNX1BBVEhbQWN0aXZpdHlDb25zdGFudHMuTU9ESUZJRURfQlldID0gRmVhdHVyZU1hbmFnZXJDb25zdGFudHMuQUNUSVZJVFlfTEFTVF9VUERBVEVEX0JZO1xuQUNUSVZJVFlfRklFTERTX0ZNX1BBVEhbQWN0aXZpdHlDb25zdGFudHMuTU9ESUZJRURfT05dID0gRmVhdHVyZU1hbmFnZXJDb25zdGFudHMuQUNUSVZJVFlfTEFTVF9VUERBVEVEX09OO1xuXG4vKiBQb3NzaWJsZSBPcHRpb25zIGZpZWxkcyBwYXRoIHByZWZpeGVzICovXG5leHBvcnQgY29uc3QgUFJFRklYX0FDVElWSVRZID0gbnVsbDtcbmV4cG9ydCBjb25zdCBQUkVGSVhfQ09OVEFDVCA9ICdjb250YWN0JztcbmV4cG9ydCBjb25zdCBQUkVGSVhfUkVTT1VSQ0UgPSAncmVzb3VyY2UnO1xuZXhwb3J0IGNvbnN0IFBSRUZJWF9DT01NT04gPSAnY29tbW9uJztcbmV4cG9ydCBjb25zdCBQUkVGSVhfTElTVCA9IFtQUkVGSVhfQUNUSVZJVFksIFBSRUZJWF9DT05UQUNULCBQUkVGSVhfUkVTT1VSQ0UsIFBSRUZJWF9DT01NT05dO1xuXG5leHBvcnQgY29uc3QgRklFTERfUEFUSCA9ICdmaWVsZC1wYXRoJztcbmV4cG9ydCBjb25zdCBGSUVMRF9PUFRJT05TID0gJ3Bvc3NpYmxlLW9wdGlvbnMnO1xuZXhwb3J0IGNvbnN0IEZJRUxEX09QVElPTl9VU0FCTEUgPSAnb3B0aW9uLXVzYWJsZSc7XG5leHBvcnQgY29uc3QgTElTVF9NQVhfU0laRSA9ICdzaXplLWxpbWl0JztcbmV4cG9ydCBjb25zdCBSRUdFWF9QQVRURVJOID0gJ3JlZ2V4LXBhdHRlcm4nO1xuZXhwb3J0IGNvbnN0IEZJRUxEX05BTUUgPSAnZmllbGRfbmFtZSc7XG5leHBvcnQgY29uc3QgRklFTERfTEFCRUwgPSAnZmllbGRfbGFiZWwnO1xuZXhwb3J0IGNvbnN0IEZJRUxEX1JFUVVJUkVEID0gJ3JlcXVpcmVkJztcbmV4cG9ydCBjb25zdCBGSUVMRF9VTklRVUVfQ09OU1RSQUlOVCA9ICd1bmlxdWVfY29uc3RyYWludCc7XG5leHBvcnQgY29uc3QgRklFTERfVFlQRSA9ICdmaWVsZF90eXBlJztcbmV4cG9ydCBjb25zdCBGSUVMRF9MRU5HVEggPSAnZmllbGRfbGVuZ3RoJztcbmV4cG9ydCBjb25zdCBGSUVMRF9QRVJDRU5UQUdFID0gJ3BlcmNlbnRhZ2UnO1xuZXhwb3J0IGNvbnN0IEZJRUxEX1BFUkNFTlRBR0VfQ09OU1RSQUlOVCA9ICdwZXJjZW50YWdlX2NvbnN0cmFpbnQnO1xuZXhwb3J0IGNvbnN0IEZJRUxEX0lURU1fVFlQRSA9ICdpdGVtLXR5cGUnO1xuZXhwb3J0IGNvbnN0IEZJRUxEX0lNUE9SVEFCTEUgPSAnaW1wb3J0YWJsZSc7XG5leHBvcnQgY29uc3QgRklFTERfSURfT05MWSA9ICdpZF9vbmx5JztcbmV4cG9ydCBjb25zdCBGSUVMRF9NVUxUSVBMRV9WQUxVRVNfQUxMT1dFRCA9ICdtdWx0aXBsZV92YWx1ZXMnO1xuZXhwb3J0IGNvbnN0IEZJRUxEX1RSRUVfQ09MTEVDVElPTiA9ICd0cmVlX2NvbGxlY3Rpb24nO1xuZXhwb3J0IGNvbnN0IEZJRUxEX0NISUxEUkVOID0gJ2NoaWxkcmVuJztcbmV4cG9ydCBjb25zdCBGSUVMRF9ERVBFTkRFTkNJRVMgPSAnZGVwZW5kZW5jaWVzJztcblxuZXhwb3J0IGNvbnN0IEZJRUxEX1RZUEVfTElTVCA9ICdsaXN0JztcbmV4cG9ydCBjb25zdCBGSUVMRF9UWVBFX09CSkVDVCA9ICdvYmplY3QnO1xuZXhwb3J0IGNvbnN0IEZJRUxEX1RZUEVfU1RSSU5HID0gJ3N0cmluZyc7XG5leHBvcnQgY29uc3QgRklFTERfVFlQRV9MT05HID0gJ2xvbmcnO1xuZXhwb3J0IGNvbnN0IEZJRUxEX1RZUEVfRkxPQVQgPSAnZmxvYXQnO1xuZXhwb3J0IGNvbnN0IEZJRUxEX1RZUEVfQk9PTEVBTiA9ICdib29sZWFuJztcbmV4cG9ydCBjb25zdCBGSUVMRF9UWVBFX0RBVEUgPSAnZGF0ZSc7XG5leHBvcnQgY29uc3QgRklFTERfVFlQRV9USU1FU1RBTVAgPSAndGltZXN0YW1wJztcblxuZXhwb3J0IGRlZmF1bHQgT2JqZWN0LmZyZWV6ZSh7XG4gIEZVTkRJTkdfQUNUSVZFX0xJU1QsXG4gIEZVTkRJTkdfREVUQUlMU19QQVRILFxuICBGVU5ESU5HX0NVUlJFTkNZX1BBVEgsXG4gIE1URUZfQ1VSUkVOQ1lfUEFUSCxcbiAgUFBDX0NVUlJFTkNZX1BBVEgsXG4gIFJQQ19DVVJSRU5DWV9QQVRILFxuICBDT01QT05FTlRfQ1VSUkVOQ1lfUEFUSCxcbiAgRElTQlVSU0VNRU5UU19QQVRILFxuICBBQ1RJVklUWV9JTlRFUk5BTF9JRFNfSU5URVJOQUxfSURfUEFUSCxcbiAgQUNUSVZJVFlfSU5URVJOQUxfSURTX09SR0FOSVpBVElPTl9QQVRILFxuICBMT0NBVElPTl9QQVRILFxuICBOQVRJT05BTF9QTEFOX09CSkVDVElWRV9QQVRILFxuICBQUklNQVJZX1BST0dSQU1fUEFUSCxcbiAgU0VDT05EQVJZX1BST0dSQU1fUEFUSCxcbiAgUFJJTUFSWV9TRUNUT1JfUEFUSCxcbiAgU0VDT05EQVJZX1NFQ1RPUl9QQVRILFxuICBURVJUSUFSWV9TRUNUT1JfUEFUSCxcbiAgRE9OT1JfT1JHQU5JWkFUSU9OU19QQVRILFxuICBSRVNQT05TSUJMRV9PUkdBTklaQVRJT05fQlVER0VUU19QQVRILFxuICBSRUxBVEVEX09SR1NfUEFUSFMsXG4gIFJFTEFURURfT1JHU19PUkdBTklaQVRJT05fUEFUSFMsXG4gIFJJQ0hfVEVYVF9GSUVMRFMsXG4gIFBBVEhTX1dJVEhfVFJFRV9TVFJVQ1RVUkUsXG4gIFBBVEhTX1dJVEhfSElFUkFSQ0hJQ0FMX1ZBTFVFUyxcbiAgQUNUSVZJVFlfQ09OVEFDVF9QQVRIUyxcbiAgVFJBTlNBQ1RJT05fVFlQRVMsXG4gIFRSQU5TQUNUSU9OX1RZUEVTX09SREVSRUQsXG4gIEZVTkRJTkdfVFJBTlNBQ1RJT05fVFlQRVMsXG4gIEFESlVTVE1FTlRfVFlQRV9QQVRIUyxcbiAgRlVORElOR19DVVJSRU5DWV9QQVRIUyxcbiAgUEFUSFNfRk9SX0FDVElWSVRZX0NVUlJFTkNZLFxuICBQQVRIU19GT1JfQ1VSUkVOQ1ksXG4gIERPX05PVF9IWURSQVRFX0ZJRUxEU19MSVNULFxuICBBTFRFUk5BVEVfVkFMVUVfUEFUSCxcbiAgQUNUSVZJVFlfRklFTERTX0ZNX1BBVEgsXG4gIFBSRUZJWF9BQ1RJVklUWSxcbiAgUFJFRklYX0NPTlRBQ1QsXG4gIFBSRUZJWF9SRVNPVVJDRSxcbiAgUFJFRklYX0NPTU1PTixcbiAgUFJFRklYX0xJU1QsXG4gIEZJRUxEX1BBVEgsXG4gIEZJRUxEX09QVElPTlMsXG4gIEZJRUxEX09QVElPTl9VU0FCTEUsXG4gIExJU1RfTUFYX1NJWkUsXG4gIFJFR0VYX1BBVFRFUk4sXG4gIEZJRUxEX05BTUUsXG4gIEZJRUxEX0xBQkVMLFxuICBGSUVMRF9SRVFVSVJFRCxcbiAgRklFTERfVU5JUVVFX0NPTlNUUkFJTlQsXG4gIEZJRUxEX1RZUEUsXG4gIEZJRUxEX0xFTkdUSCxcbiAgRklFTERfUEVSQ0VOVEFHRSxcbiAgRklFTERfUEVSQ0VOVEFHRV9DT05TVFJBSU5ULFxuICBGSUVMRF9JVEVNX1RZUEUsXG4gIEZJRUxEX0lNUE9SVEFCTEUsXG4gIEZJRUxEX0lEX09OTFksXG4gIEZJRUxEX01VTFRJUExFX1ZBTFVFU19BTExPV0VELFxuICBGSUVMRF9UUkVFX0NPTExFQ1RJT04sXG4gIEZJRUxEX0NISUxEUkVOLFxuICBGSUVMRF9ERVBFTkRFTkNJRVMsXG4gIEZJRUxEX1RZUEVfTElTVCxcbiAgRklFTERfVFlQRV9PQkpFQ1QsXG4gIEZJRUxEX1RZUEVfU1RSSU5HLFxuICBGSUVMRF9UWVBFX0xPTkcsXG4gIEZJRUxEX1RZUEVfRkxPQVQsXG4gIEZJRUxEX1RZUEVfQk9PTEVBTixcbiAgRklFTERfVFlQRV9EQVRFLFxuICBGSUVMRF9UWVBFX1RJTUVTVEFNUCxcbn0pO1xuIiwiLyogZXNsaW50LWRpc2FibGUgY2xhc3MtbWV0aG9kcy11c2UtdGhpcyAqL1xuaW1wb3J0IENvbnN0YW50cyBmcm9tICcuLi8uLi91dGlscy9Db25zdGFudHMnO1xuaW1wb3J0ICogYXMgRlBDIGZyb20gJy4uLy4uL3V0aWxzL0ZpZWxkUGF0aENvbnN0YW50cyc7XG5cbmxldCBsb2dnZXIgPSBudWxsO1xuXG4vKipcbiAqIFRoaXMgaXMgYSBoZWxwZXIgY2xhc3MgZm9yIGNoZWNraW5nIGZpZWxkcyBzdGF0dXMsIGdldHRpbmcgZmllbGQgb3B0aW9ucyB0cmFuc2xhdGlvbnMgYW5kIHRoZSBsaWtlLlxuICpcbiAqIEBhdXRob3IgTmFkZWpkYSBNYW5kcmVzY3VcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmllbGRzTWFuYWdlciB7XG4gIC8qKlxuICAgKiBTaGFsbG93IGNsb25lIG9mIGFub3RoZXIgbmV3RmllbGRzTWFuYWdlclxuICAgKiBAcGFyYW0gZmllbGRzTWFuYWdlclxuICAgKiBAcmV0dXJuIHtGaWVsZHNNYW5hZ2VyfVxuICAgKi9cbiAgc3RhdGljIGNsb25lKGZpZWxkc01hbmFnZXI6IEZpZWxkc01hbmFnZXIsIExvZ2dlck1hbmFnZXIpIHtcbiAgICBjb25zdCBuZXdGaWVsZHNNYW5hZ2VyID0gbmV3IEZpZWxkc01hbmFnZXIoW10sIFtdLCBudWxsLFxuICAgICAgTG9nZ2VyTWFuYWdlcik7XG4gICAgT2JqZWN0LmFzc2lnbihuZXdGaWVsZHNNYW5hZ2VyLCBmaWVsZHNNYW5hZ2VyKTtcbiAgICByZXR1cm4gbmV3RmllbGRzTWFuYWdlcjtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKGZpZWxkc0RlZiwgcG9zc2libGVWYWx1ZXNDb2xsZWN0aW9uLCBjdXJyZW50TGFuZ3VhZ2UsIExvZ2dlck1hbmFnZXIpIHtcbiAgICAvLyBUT0RPIHJlbW92ZSBjYWNoZVxuICAgIGxvZ2dlciA9IG5ldyBMb2dnZXJNYW5hZ2VyKCdGaWVsZHMgbWFuYWdlcicpO1xuICAgIGxvZ2dlci5kZWJ1ZygnY29uc3RydWN0b3InKTtcbiAgICB0aGlzLl9maWVsZHNEZWYgPSBmaWVsZHNEZWY7XG4gICAgdGhpcy5fcG9zc2libGVWYWx1ZXNNYXAgPSB7fTtcbiAgICBwb3NzaWJsZVZhbHVlc0NvbGxlY3Rpb24uZm9yRWFjaChwdiA9PiB7XG4gICAgICB0aGlzLl9wb3NzaWJsZVZhbHVlc01hcFtwdi5pZF0gPSBwdltGUEMuRklFTERfT1BUSU9OU107XG4gICAgfSk7XG4gICAgdGhpcy5fZmllbGRQYXRoc0VuYWJsZWRTdGF0dXNNYXAgPSB7fTtcbiAgICB0aGlzLl9sYW5nID0gY3VycmVudExhbmd1YWdlIHx8IENvbnN0YW50cy5MQU5HVUFHRV9FTkdMSVNIO1xuICAgIHRoaXMuX2RlZmF1bHRMYW5nID0gQ29uc3RhbnRzLkxBTkdVQUdFX0VOR0xJU0g7XG4gICAgdGhpcy5jbGVhbnVwKGZpZWxkc0RlZik7XG4gIH1cblxuICBjbGVhbnVwKGZpZWxkc0RlZikge1xuICAgIC8vIFRPRE8gZGVjaWRlIGVpdGhlciB0byBrZWVwIGNsZWFudXAgKGhlcmUgb3IgYW55d2hlcmUgZWxzZSkgb3IgY2hlY2sgaWYgd2UgbmVlZCB0byBzdGFuZGFyZGl6ZSBBUElcbiAgICBmaWVsZHNEZWYuZm9yRWFjaChmZCA9PiB7XG4gICAgICBpZiAoZmQuY2hpbGRyZW4pIHtcbiAgICAgICAgdGhpcy5jbGVhbnVwKGZkLmNoaWxkcmVuKTtcbiAgICAgIH1cbiAgICAgIGlmIChmZC5maWVsZF9sYWJlbCkge1xuICAgICAgICBPYmplY3Qua2V5cyhmZC5maWVsZF9sYWJlbCkuZm9yRWFjaChsYW5nID0+IHtcbiAgICAgICAgICBmZC5maWVsZF9sYWJlbFtsYW5nLnRvTG93ZXJDYXNlKCldID0gZmQuZmllbGRfbGFiZWxbbGFuZ107XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgc2V0IGN1cnJlbnRMYW5ndWFnZUNvZGUobGFuZykge1xuICAgIHRoaXMuX2xhbmcgPSBsYW5nO1xuICB9XG5cbiAgc2V0IGRlZmF1bHRMYW5ndWFnZUNvZGUobGFuZykge1xuICAgIHRoaXMuX2RlZmF1bHRMYW5nID0gbGFuZztcbiAgfVxuXG4gIGdldCBmaWVsZHNEZWYoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2ZpZWxkc0RlZjtcbiAgfVxuXG4gIGdldCBwb3NzaWJsZVZhbHVlc01hcCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcG9zc2libGVWYWx1ZXNNYXA7XG4gIH1cblxuICBnZXRQb3NzaWJsZVZhbHVlc09wdGlvbnMoZmllbGRQYXRoKSB7XG4gICAgcmV0dXJuIE9iamVjdC52YWx1ZXModGhpcy5fcG9zc2libGVWYWx1ZXNNYXBbZmllbGRQYXRoXSk7XG4gIH1cblxuICBpc0ZpZWxkUGF0aEJ5UGFydHNFbmFibGVkKC4uLnBhdGhQYXJ0cykge1xuICAgIHJldHVybiB0aGlzLmlzRmllbGRQYXRoRW5hYmxlZChwYXRoUGFydHMuam9pbignficpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVja3MgaWYgdGhlIHNwZWNpZmllZCBmaWVsZCBwYXRoIGlzIGVuYWJsZWQgaW4gQU1QIEZNXG4gICAqIEBwYXJhbSBmaWVsZFBhdGhcbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICovXG4gIGlzRmllbGRQYXRoRW5hYmxlZChmaWVsZFBhdGgpIHtcbiAgICBpZiAodGhpcy5fZmllbGRQYXRoc0VuYWJsZWRTdGF0dXNNYXBbZmllbGRQYXRoXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLl9idWlsZEZpZWxkUGF0aFN0YXR1cyhmaWVsZFBhdGgpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fZmllbGRQYXRoc0VuYWJsZWRTdGF0dXNNYXBbZmllbGRQYXRoXTtcbiAgfVxuXG4gIF9idWlsZEZpZWxkUGF0aFN0YXR1cyhmaWVsZFBhdGgpIHtcbiAgICBjb25zdCBwYXRoUGFydHMgPSBmaWVsZFBhdGguc3BsaXQoJ34nKTtcbiAgICBsZXQgY3VycmVudFRyZWUgPSB0aGlzLl9maWVsZHNEZWY7XG4gICAgY29uc3QgaXNEaXNhYmxlZCA9IHBhdGhQYXJ0cy5zb21lKHBhcnQgPT4ge1xuICAgICAgY3VycmVudFRyZWUgPSBjdXJyZW50VHJlZS5maW5kKGZpZWxkID0+IGZpZWxkLmZpZWxkX25hbWUgPT09IHBhcnQpO1xuICAgICAgaWYgKGN1cnJlbnRUcmVlICYmICgoY3VycmVudFRyZWVbRlBDLkZJRUxEX1RZUEVdID09PSBGUEMuRklFTERfVFlQRV9MSVNUXG4gICAgICAgICYmIGN1cnJlbnRUcmVlW0ZQQy5GSUVMRF9JVEVNX1RZUEVdID09PSBGUEMuRklFTERfVFlQRV9PQkpFQ1QpXG4gICAgICAgIHx8IGN1cnJlbnRUcmVlW0ZQQy5GSUVMRF9UWVBFXSA9PT0gRlBDLkZJRUxEX1RZUEVfT0JKRUNUKSkge1xuICAgICAgICBjdXJyZW50VHJlZSA9IGN1cnJlbnRUcmVlLmNoaWxkcmVuO1xuICAgICAgfVxuICAgICAgcmV0dXJuICFjdXJyZW50VHJlZTtcbiAgICB9KTtcbiAgICB0aGlzLl9maWVsZFBhdGhzRW5hYmxlZFN0YXR1c01hcFtmaWVsZFBhdGhdID0gIWlzRGlzYWJsZWQ7XG4gIH1cblxuICAvKipcbiAgICogRmluZCB0aGUgdHJhbnNsYXRpb24gZm9yIHRoZSBvcmlnaW5hbCB2YWx1ZSBmb3IgdGhlIGdpdmVuIGZpZWxkIHBhdGgsIGlmIGZvdW5kLCBvdGhlcndpc2UgcmV0dXJucyBudWxsXG4gICAqIEBwYXJhbSBmaWVsZFBhdGhcbiAgICogQHBhcmFtIG9yaWdWYWx1ZVxuICAgKiBAcmV0dXJuIHtzdHJpbmd8bnVsbH1cbiAgICovXG4gIGdldFZhbHVlVHJhbnNsYXRpb24oZmllbGRQYXRoLCBvcmlnVmFsdWUpIHtcbiAgICAvLyBmYWxsYmFjayB0byBvcmlnaW5hbCB1bnRyYW5zbGF0ZWQgdmFsdWVcbiAgICBsZXQgdHJuVmFsdWUgPSBvcmlnVmFsdWU7XG4gICAgY29uc3Qgb3B0aW9ucyA9IHRoaXMuX3Bvc3NpYmxlVmFsdWVzTWFwW2ZpZWxkUGF0aF07XG4gICAgaWYgKG9wdGlvbnMpIHtcbiAgICAgIGNvbnN0IG9wdGlvbiA9IE9iamVjdC52YWx1ZXMob3B0aW9ucykuZmluZChvcHQgPT4gb3B0LnZhbHVlID09PSBvcmlnVmFsdWUpO1xuICAgICAgaWYgKG9wdGlvbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGNvbnN0IHRyYW5zbGF0aW9ucyA9IG9wdGlvblsndHJhbnNsYXRlZC12YWx1ZSddO1xuICAgICAgICBpZiAodHJhbnNsYXRpb25zKSB7XG4gICAgICAgICAgdHJuVmFsdWUgPSB0cmFuc2xhdGlvbnNbdGhpcy5fbGFuZ10gfHwgdHJhbnNsYXRpb25zW3RoaXMuX2RlZmF1bHRMYW5nXSB8fCB0cm5WYWx1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJuVmFsdWU7XG4gIH1cblxuICBnZXRGaWVsZExhYmVsVHJhbnNsYXRpb24oZmllbGRQYXRoKSB7XG4gICAgbGV0IHRybkxhYmVsID0gbnVsbDtcbiAgICBjb25zdCBmaWVsZHNEZWYgPSB0aGlzLmdldEZpZWxkRGVmKGZpZWxkUGF0aCk7XG4gICAgaWYgKGZpZWxkc0RlZiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0cm5MYWJlbCA9IGZpZWxkc0RlZi5maWVsZF9sYWJlbFt0aGlzLl9sYW5nXSB8fCBmaWVsZHNEZWYuZmllbGRfbGFiZWxbdGhpcy5fZGVmYXVsdExhbmddIHx8IG51bGw7XG4gICAgfVxuICAgIHJldHVybiB0cm5MYWJlbDtcbiAgfVxuXG4gIGdldEZpZWxkRGVmKGZpZWxkUGF0aCkge1xuICAgIGxldCBmaWVsZHNEZWYgPSB0aGlzLl9maWVsZHNEZWY7XG4gICAgaWYgKGZpZWxkUGF0aCkge1xuICAgICAgZmllbGRQYXRoLnNwbGl0KCd+Jykuc29tZShwYXJ0ID0+IHtcbiAgICAgICAgaWYgKCEoZmllbGRzRGVmIGluc3RhbmNlb2YgQXJyYXkpKSB7XG4gICAgICAgICAgZmllbGRzRGVmID0gZmllbGRzRGVmLmNoaWxkcmVuO1xuICAgICAgICB9XG4gICAgICAgIGZpZWxkc0RlZiA9IGZpZWxkc0RlZi5maW5kKGZkID0+IGZkLmZpZWxkX25hbWUgPT09IHBhcnQpO1xuICAgICAgICByZXR1cm4gZmllbGRzRGVmID09PSB1bmRlZmluZWQ7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgZmllbGRzRGVmID0geyBjaGlsZHJlbjogZmllbGRzRGVmIH07XG4gICAgfVxuICAgIHJldHVybiBmaWVsZHNEZWY7XG4gIH1cblxuICBnZXRGaWVsZFBhdGhzQnlEZXBlbmRlbmNpZXMoZGVwZW5kZW5jaWVzKSB7XG4gICAgY29uc3QgZmllbGRQYXRocyA9IFtdO1xuICAgIHRoaXMuX2dldEZpZWxkUGF0aHNCeURlcGVuZGVuY2llcyhkZXBlbmRlbmNpZXMsIHRoaXMuX2ZpZWxkc0RlZiwgJycsIGZpZWxkUGF0aHMpO1xuICAgIHJldHVybiBmaWVsZFBhdGhzO1xuICB9XG5cbiAgX2dldEZpZWxkUGF0aHNCeURlcGVuZGVuY2llcyhkZXBlbmRlbmNpZXMsIGZpZWxkc0RlZiwgY3VycmVudFBhdGgsIGZpZWxkUGF0aHM6IEFycmF5KSB7XG4gICAgaWYgKCEoZmllbGRzRGVmIGluc3RhbmNlb2YgQXJyYXkpKSB7XG4gICAgICBmaWVsZHNEZWYgPSBmaWVsZHNEZWYuY2hpbGRyZW47XG4gICAgfVxuICAgIGZpZWxkc0RlZi5mb3JFYWNoKGZkID0+IHtcbiAgICAgIGNvbnN0IGhhc0RlcGVuZGVuY3kgPSBmZC5kZXBlbmRlbmNpZXMgJiYgZmQuZGVwZW5kZW5jaWVzLnNvbWUoZGVwID0+IGRlcGVuZGVuY2llcy5pbmNsdWRlcyhkZXApKTtcbiAgICAgIGlmIChmZC5jaGlsZHJlbiB8fCBoYXNEZXBlbmRlbmN5KSB7XG4gICAgICAgIGNvbnN0IGZpZWxkUGF0aCA9IGAke2N1cnJlbnRQYXRofSR7ZmQuZmllbGRfbmFtZX1gO1xuICAgICAgICBpZiAoaGFzRGVwZW5kZW5jeSkge1xuICAgICAgICAgIGZpZWxkUGF0aHMucHVzaChmaWVsZFBhdGgpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChmZC5jaGlsZHJlbikge1xuICAgICAgICAgIHRoaXMuX2dldEZpZWxkUGF0aHNCeURlcGVuZGVuY2llcyhkZXBlbmRlbmNpZXMsIGZkLmNoaWxkcmVuLCBgJHtmaWVsZFBhdGh9fmAsIGZpZWxkUGF0aHMpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBnZXRWYWx1ZShvYmplY3QsIGZpZWxkUGF0aCwgZ2V0T3B0aW9uVHJhbnNsYXRpb24pIHtcbiAgICByZXR1cm4gRmllbGRzTWFuYWdlci5nZXRWYWx1ZShvYmplY3QsIGZpZWxkUGF0aCwgZ2V0T3B0aW9uVHJhbnNsYXRpb24pO1xuICB9XG5cbiAgc3RhdGljIGdldFZhbHVlKG9iamVjdCwgZmllbGRQYXRoLCBnZXRPcHRpb25UcmFuc2xhdGlvbikge1xuICAgIGNvbnN0IHBhcnRzID0gZmllbGRQYXRoID8gZmllbGRQYXRoLnNwbGl0KCd+JykgOiBbXTtcbiAgICBsZXQgdmFsdWUgPSBvYmplY3Q7XG4gICAgcGFydHMuc29tZShwYXJ0ID0+IHtcbiAgICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICAgIGNvbnN0IG5ld0xpc3QgPSBbXTtcbiAgICAgICAgdmFsdWUuZm9yRWFjaChjdXJyZW50ID0+IHtcbiAgICAgICAgICBjb25zdCBuZXdFbGVtZW50ID0gY3VycmVudFtwYXJ0XTtcbiAgICAgICAgICBpZiAobmV3RWxlbWVudCAhPT0gdW5kZWZpbmVkICYmIG5ld0VsZW1lbnQgIT09IG51bGwpIHtcbiAgICAgICAgICAgIG5ld0xpc3QucHVzaChuZXdFbGVtZW50KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICB2YWx1ZSA9IG5ld0xpc3Q7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YWx1ZSA9IHZhbHVlW3BhcnRdO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHZhbHVlID09PSB1bmRlZmluZWQgfHwgdmFsdWUgPT09IG51bGwgfHwgdmFsdWUubGVuZ3RoID09PSAwO1xuICAgIH0pO1xuICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlICE9PSBudWxsICYmIHZhbHVlLmxlbmd0aCAhPT0gMCkge1xuICAgICAgbGV0IHZhbHVlcyA9IFtdLmNvbmNhdCh2YWx1ZSk7XG4gICAgICB2YWx1ZXMgPSB2YWx1ZXMubWFwKHZhbCA9PiB7XG4gICAgICAgIGlmICh2YWwudmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHJldHVybiB2YWw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGdldE9wdGlvblRyYW5zbGF0aW9uKHZhbCwgdGhpcy5fbGFuZywgdGhpcy5fZGVmYXVsdExhbmcpO1xuICAgICAgfSk7XG4gICAgICB2YWx1ZSA9IHZhbHVlIGluc3RhbmNlb2YgQXJyYXkgPyB2YWx1ZXMgOiB2YWx1ZXNbMF07XG4gICAgfVxuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxufVxuIiwiaW1wb3J0IFZhbHVlQ29uc3RhbnRzIGZyb20gJy4uLy4uL3V0aWxzL1ZhbHVlQ29uc3RhbnRzJztcblxuY29uc3QgQ0xJRU5UX0NIQU5HRV9JRCA9ICdhbXAtb2ZmbGluZS1jb250YWN0LWNoYW5nZS1pZCc7XG5jb25zdCBDTElFTlRfQ0hBTkdFX0lEX1BSRUZJWCA9ICdhbXAtb2ZmbGluZS1jb250YWN0LWlkJztcbmNvbnN0IE5BTUUgPSAnbmFtZSc7XG5jb25zdCBMQVNUX05BTUUgPSAnbGFzdF9uYW1lJztcbmNvbnN0IFRJVExFID0gJ3RpdGxlJztcbmNvbnN0IE9SR0FOSVpBVElPTl9OQU1FID0gJ29yZ2FuaXphdGlvbl9uYW1lJztcbmNvbnN0IEZVTkNUSU9OID0gJ2Z1bmN0aW9uJztcbmNvbnN0IE9GRklDRV9BRERSRVNTID0gJ29mZmljZV9hZGRyZXNzJztcbmNvbnN0IENSRUFUT1IgPSAnY3JlYXRvcic7XG5jb25zdCBPUkdBTklTQVRJT05fQ09OVEFDVFMgPSAnb3JnYW5pc2F0aW9uX2NvbnRhY3RzJztcbmNvbnN0IE9SR0FOSVNBVElPTiA9ICdvcmdhbmlzYXRpb24nO1xuY29uc3QgRU1BSUwgPSAnZW1haWwnO1xuY29uc3QgVkFMVUUgPSAndmFsdWUnO1xuY29uc3QgUEhPTkUgPSAncGhvbmUnO1xuY29uc3QgRVhURU5TSU9OX1ZBTFVFID0gJ2V4dGVuc2lvbl92YWx1ZSc7XG5jb25zdCBUWVBFID0gJ3R5cGUnO1xuY29uc3QgRkFYID0gJ2ZheCc7XG5cbmNvbnN0IFRNUF9GT1JNX0lEID0gJ2Zvcm0taWQnO1xuY29uc3QgVE1QX1VOSVFVRV9JRCA9ICd1bmlxdWVJZCc7XG5jb25zdCBUTVBfSFlEUkFURUQgPSAnaHlkcmF0ZWQnO1xuY29uc3QgVE1QX0VSUk9SUyA9ICdlcnJvcnMnO1xuY29uc3QgVE1QX0NPTlRBQ1RfTE9BREVEID0gJ2lzQ29udGFjdExvYWRlZCc7XG5jb25zdCBUTVBfQ09OVEFDVF9MT0FESU5HID0gJ2lzQ29udGFjdExvYWRpbmcnO1xuY29uc3QgVE1QX0VOVElUWV9WQUxJREFUT1IgPSBWYWx1ZUNvbnN0YW50cy5UTVBfRU5USVRZX1ZBTElEQVRPUjtcbmNvbnN0IFRNUF9GSUVMRFMgPSBbVE1QX0ZPUk1fSUQsIFRNUF9VTklRVUVfSUQsIFRNUF9IWURSQVRFRCwgVE1QX0VSUk9SUywgVE1QX0VOVElUWV9WQUxJREFUT1IsXG4gIFRNUF9DT05UQUNUX0xPQURFRCwgVE1QX0NPTlRBQ1RfTE9BRElOR107XG5cblxuZXhwb3J0IGRlZmF1bHQgT2JqZWN0LmZyZWV6ZSh7XG4gIENMSUVOVF9DSEFOR0VfSUQsXG4gIENMSUVOVF9DSEFOR0VfSURfUFJFRklYLFxuICBOQU1FLFxuICBMQVNUX05BTUUsXG4gIFRJVExFLFxuICBPUkdBTklaQVRJT05fTkFNRSxcbiAgRlVOQ1RJT04sXG4gIE9GRklDRV9BRERSRVNTLFxuICBDUkVBVE9SLFxuICBPUkdBTklTQVRJT05fQ09OVEFDVFMsXG4gIE9SR0FOSVNBVElPTixcbiAgRU1BSUwsXG4gIFZBTFVFLFxuICBQSE9ORSxcbiAgRVhURU5TSU9OX1ZBTFVFLFxuICBUWVBFLFxuICBGQVgsXG4gIFRNUF9GT1JNX0lELFxuICBUTVBfVU5JUVVFX0lELFxuICBUTVBfSFlEUkFURUQsXG4gIFRNUF9FUlJPUlMsXG4gIFRNUF9DT05UQUNUX0xPQURFRCxcbiAgVE1QX0NPTlRBQ1RfTE9BRElORyxcbiAgVE1QX0VOVElUWV9WQUxJREFUT1IsXG4gIFRNUF9GSUVMRFNcbn0pO1xuIiwiLyogZXNsaW50LWRpc2FibGUgY2xhc3MtbWV0aG9kcy11c2UtdGhpcyAqL1xuaW1wb3J0IEFjdGl2aXR5Q29uc3RhbnRzIGZyb20gJy4uL3V0aWwvQWN0aXZpdHlDb25zdGFudHMnO1xuaW1wb3J0IEVycm9yQ29uc3RhbnRzIGZyb20gJy4uLy4uL3V0aWxzL2NvbnN0YW50cy9FcnJvckNvbnN0YW50cyc7XG5pbXBvcnQgQ29uc3RhbnRzIGZyb20gJy4uLy4uL3V0aWxzL0NvbnN0YW50cyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEN1cnJlbmN5UmF0ZXNNYW5hZ2VyIHtcbiAgY29uc3RydWN0b3IoY3VycmVuY3lSYXRlcywgYmFzZUN1cnJlbmN5LCB0cmFuc2xhdGUsIGRhdGVVdGlscywgZXJyb3JOb3RpZmljYXRpb25IZWxwZXIpIHtcbiAgICB0aGlzLl9jdXJyZW5jeVJhdGVzID0gY3VycmVuY3lSYXRlcztcbiAgICB0aGlzLl9iYXNlQ3VycmVuY3kgPSBiYXNlQ3VycmVuY3k7XG4gICAgdGhpcy5fY3Vycm5jaWVzV2l0aEV4Y2hhbmdlUmF0ZXMgPSB0aGlzLl9nZXRDdXJyZW5jaWVzV2l0aEV4Y2hhbmdlUmF0ZXMoKTtcbiAgICB0aGlzLl90cmFuc2xhdGUgPSB0cmFuc2xhdGU7XG4gICAgdGhpcy5fZGF0ZVV0aWxzID0gZGF0ZVV0aWxzO1xuICAgIHRoaXMuX2Vycm9yTm90aWZpY2F0aW9uSGVscGVyID0gZXJyb3JOb3RpZmljYXRpb25IZWxwZXI7XG4gIH1cblxuICAvKipcbiAgICogU2V0IG9mIGN1cnJlbmNpZXMgdGhhdCBoYXMgYXQgbGVhc3Qgb25lIGV4Y2hhbmdlIHJhdGVcbiAgICogQHJldHVybiB7U2V0PGFueT4gfCAqfVxuICAgKi9cbiAgZ2V0IGN1cnJlbmNpZXNXaXRoRXhjaGFuZ2VSYXRlcygpIHtcbiAgICByZXR1cm4gdGhpcy5fY3Vycm5jaWVzV2l0aEV4Y2hhbmdlUmF0ZXM7XG4gIH1cblxuICAvKipcbiAgICogQ3VycmVuY3kgY29udmVyc2lvbiB1dGlsaXR5LiBJZiB3ZSBoYXZlIHRoZSBkaXJlY3QgcmF0ZSBpdCB3aWxsIGNvbnZlcnQgZnJvbSBjdXJyZW5jeUZyb20gdG8gY3VycmVuY3lUbyBpbiB0aGVcbiAgICogZ2l2ZW4gZGF0ZS4gSWYgd2UgZG9uJ3QgaGF2ZSB0aGUgc2FpZCBjdXJyZW5jeSBpdCB3aWxsIHRyeSB0byBzZWFyY2ggdGhlIGludmVyc2UgcmF0ZSBhbmQgdXNlIDEveC4gSWYgdGhlIGludmVyc2VcbiAgICogcmF0ZSBpcyBhbHNvIG5vdCBBdmFpbGFibGUgYW4gZXJyb3Igd2lsbCBiZSB0aHJvd25cbiAgICogQHBhcmFtIGN1cnJlbmN5RnJvbSBjdXJyZW5jeSBjb2RlIGZyb20gdGhlIGN1cnJlbmN5IHdlIGFyZSBjb252ZXJ0aW5nIGZyb21cbiAgICogQHBhcmFtIGN1cnJlbmN5VG8gY3VycmVuY3kgY29kZSBmcm9tIHRoZSBjdXJyZW5jeSB3ZSBhcmUgY29udmVydGluZyB0b1xuICAgKiBAcGFyYW0gZGF0ZVRvRmluZCBkYXRlIGZvciB3aGljaCB3ZSBhcmUgZG9pbmcgdGhlIGNvbnZlcnNpb24uIEl0IGlzIGV4cGVjdGVkIGluIHl5eXktbW0tZGRcbiAgICogQHJldHVybnMgeyp8UHJvbWlzZS48VFJlc3VsdD59XG4gICAqL1xuICBjb252ZXJ0Q3VycmVuY3koY3VycmVuY3lGcm9tLCBjdXJyZW5jeVRvLCBkYXRlVG9GaW5kLCBmaXhlZEV4Y2hhbmdlUmF0ZSkge1xuICAgIGlmIChjdXJyZW5jeUZyb20gPT09IGN1cnJlbmN5VG8pIHtcbiAgICAgIHJldHVybiBDb25zdGFudHMuUkFURV9TQU1FX0NVUlJFTkNZO1xuICAgIH1cbiAgICBpZiAoZml4ZWRFeGNoYW5nZVJhdGUgJiYgZml4ZWRFeGNoYW5nZVJhdGUgPiAwKSB7XG4gICAgICByZXR1cm4gKHRoaXMuY29udmVydEN1cnJlbmN5KHRoaXMuX2Jhc2VDdXJyZW5jeSwgY3VycmVuY3lUbywgZGF0ZVRvRmluZCwgbnVsbCkgL1xuICAgICAgICBmaXhlZEV4Y2hhbmdlUmF0ZSk7XG4gICAgfVxuICAgIGNvbnN0IHRpbWVEYXRlVG9GaW5kID0gKG5ldyBEYXRlKGAke2RhdGVUb0ZpbmR9ICR7Q29uc3RhbnRzLkNVUlJFTkNZX0hPVVJ9YCkpLmdldFRpbWUoKTtcbiAgICBpZiAodGhpcy5fY3VycmVuY3lSYXRlcykge1xuICAgICAgY29uc3QgY3VycmVuY2llc1RvU2VhcmNoRGlyZWN0ID0gdGhpcy5fY3VycmVuY3lSYXRlcy5maW5kKChpdGVtKSA9PlxuICAgICAgICBpdGVtW0NvbnN0YW50cy5DVVJSRU5DWV9QQUlSXS5mcm9tID09PSBjdXJyZW5jeUZyb20gJiYgaXRlbVtDb25zdGFudHMuQ1VSUkVOQ1lfUEFJUl0udG8gPT09IGN1cnJlbmN5VG9cbiAgICAgICk7XG4gICAgICBpZiAoY3VycmVuY2llc1RvU2VhcmNoRGlyZWN0KSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldEV4Y2hhbmdlUmF0ZShjdXJyZW5jaWVzVG9TZWFyY2hEaXJlY3QsIHRpbWVEYXRlVG9GaW5kKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIGRpcmVjdCBub3QgZm91bmRcbiAgICAgICAgY29uc3QgY3VycmVuY2llc1RvU2VhcmNoSW52ZXJzZSA9XG4gICAgICAgICAgdGhpcy5fY3VycmVuY3lSYXRlcy5maW5kKChpdGVtKSA9PlxuICAgICAgICAgICAgaXRlbVtDb25zdGFudHMuQ1VSUkVOQ1lfUEFJUl0uZnJvbSA9PT0gY3VycmVuY3lUbyAmJiBpdGVtW0NvbnN0YW50cy5DVVJSRU5DWV9QQUlSXS50byA9PT1cbiAgICAgICAgICAgIGN1cnJlbmN5RnJvbSk7XG4gICAgICAgIGlmIChjdXJyZW5jaWVzVG9TZWFyY2hJbnZlcnNlKSB7XG4gICAgICAgICAgcmV0dXJuIDEgLyB0aGlzLmdldEV4Y2hhbmdlUmF0ZShjdXJyZW5jaWVzVG9TZWFyY2hJbnZlcnNlLCB0aW1lRGF0ZVRvRmluZCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuY29udmVydFZpYUJhc2VDdXJyZW5jeShjdXJyZW5jeUZyb20sIGN1cnJlbmN5VG8sIHRpbWVEYXRlVG9GaW5kKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyB0aGlzLl9nZXRDdXJyZW5jeUVycm9yKCdDdXJyZW5jeVJhdGVzTm90SW5pdGlhbGl6ZWQnKTtcbiAgICB9XG4gIH1cblxuICBjb252ZXJ0RnVuZGluZ0RldGFpbHNUb0N1cnJlbmN5KGZ1bmRpbmdEZXRhaWxzLCBjdXJyZW5jeVRvKSB7XG4gICAgbGV0IHRvdGFsID0gMDtcbiAgICBmdW5kaW5nRGV0YWlscy5mb3JFYWNoKGZkID0+IHtcbiAgICAgIHRvdGFsICs9IHRoaXMuY29udmVydFRyYW5zYWN0aW9uQW1vdW50VG9DdXJyZW5jeShmZCwgY3VycmVuY3lUbyk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gdG90YWw7XG4gIH1cblxuICBjb252ZXJ0VHJhbnNhY3Rpb25BbW91bnRUb0Jhc2VDdXJyZW5jeShmdW5kaW5nRGV0YWlsKSB7XG4gICAgcmV0dXJuIHRoaXMuY29udmVydFRyYW5zYWN0aW9uQW1vdW50VG9DdXJyZW5jeShmdW5kaW5nRGV0YWlsLCB0aGlzLl9iYXNlQ3VycmVuY3kpO1xuICB9XG5cbiAgY29udmVydEFtb3VudFRvQ3VycmVuY3koYW1vdW50LCBjdXJyZW5jeUZyb20sIGRhdGUsIGZpeGVkRXhjaGFuZ2VSYXRlLCBjdXJyZW5jeVRvKSB7XG4gICAgY29uc3QgY3VycmVuY3lSYXRlID0gdGhpcy5jb252ZXJ0Q3VycmVuY3koY3VycmVuY3lGcm9tLCBjdXJyZW5jeVRvLFxuICAgICAgdGhpcy5fZGF0ZVV0aWxzLmZvcm1hdERhdGVGb3JBUEkoZGF0ZSksIGZpeGVkRXhjaGFuZ2VSYXRlKTtcbiAgICByZXR1cm4gYW1vdW50ICogY3VycmVuY3lSYXRlO1xuICB9XG5cbiAgY29udmVydFRyYW5zYWN0aW9uQW1vdW50VG9DdXJyZW5jeShmdW5kaW5nRGV0YWlsLCBjdXJyZW5jeVRvKSB7XG4gICAgY29uc3QgZml4ZWRFeGNoYW5nZVJhdGUgPSBmdW5kaW5nRGV0YWlsW0FjdGl2aXR5Q29uc3RhbnRzLkZJWEVEX0VYQ0hBTkdFX1JBVEVdO1xuICAgIGNvbnN0IGN1cnJlbmN5RnJvbSA9IGZ1bmRpbmdEZXRhaWxbQWN0aXZpdHlDb25zdGFudHMuQ1VSUkVOQ1ldLnZhbHVlO1xuICAgIGNvbnN0IHRyYW5zYWN0aW9uRGF0ZSA9IGZ1bmRpbmdEZXRhaWxbQWN0aXZpdHlDb25zdGFudHMuVFJBTlNBQ1RJT05fREFURV07XG4gICAgY29uc3QgdHJhbnNhY3Rpb25BbW91bnQgPSBmdW5kaW5nRGV0YWlsW0FjdGl2aXR5Q29uc3RhbnRzLlRSQU5TQUNUSU9OX0FNT1VOVF07XG4gICAgcmV0dXJuIHRoaXMuY29udmVydEFtb3VudFRvQ3VycmVuY3kodHJhbnNhY3Rpb25BbW91bnQsIGN1cnJlbmN5RnJvbSwgdHJhbnNhY3Rpb25EYXRlLCBmaXhlZEV4Y2hhbmdlUmF0ZSxcbiAgICAgIGN1cnJlbmN5VG8pO1xuICB9XG5cbiAgZ2V0RXhjaGFuZ2VSYXRlKGN1cnJlbmNpZXNUb1NlYXJjaCwgdGltZURhdGVUb0ZpbmQpIHtcbiAgICBsZXQgbG93ZXJFbmQgPSAwO1xuICAgIGxldCBoaWdoZXJFbmQgPSBjdXJyZW5jaWVzVG9TZWFyY2gucmF0ZXMubGVuZ3RoIC0gMTtcbiAgICB3aGlsZSAobG93ZXJFbmQgPCBoaWdoZXJFbmQpIHtcbiAgICAgIGNvbnN0IG1pZGRsZSA9IE1hdGguZmxvb3IoKGxvd2VyRW5kICsgaGlnaGVyRW5kKSAvIDIpO1xuICAgICAgY29uc3QgZGlmZmVyZW5jZSA9IE1hdGguYWJzKChuZXcgRGF0ZShcbiAgICAgICAgYCR7Y3VycmVuY2llc1RvU2VhcmNoLnJhdGVzW21pZGRsZV0uZGF0ZX0gICR7Q29uc3RhbnRzLkNVUlJFTkNZX0hPVVJ9YCkpXG4gICAgICAgIC0gdGltZURhdGVUb0ZpbmQpO1xuICAgICAgY29uc3QgZGlmZmVyZW5jZTEgPSBNYXRoLmFicygobmV3IERhdGUoXG4gICAgICAgIGAke2N1cnJlbmNpZXNUb1NlYXJjaC5yYXRlc1ttaWRkbGUgKyAxXS5kYXRlfSAgJHtDb25zdGFudHMuQ1VSUkVOQ1lfSE9VUn1gKSlcbiAgICAgICAgLSB0aW1lRGF0ZVRvRmluZCk7XG4gICAgICBpZiAoZGlmZmVyZW5jZTEgPD0gZGlmZmVyZW5jZSkge1xuICAgICAgICBsb3dlckVuZCA9IG1pZGRsZSArIDE7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBoaWdoZXJFbmQgPSBtaWRkbGU7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBjdXJyZW5jaWVzVG9TZWFyY2gucmF0ZXNbaGlnaGVyRW5kXS5yYXRlO1xuICB9XG5cbiAgX2dldEN1cnJlbmN5RXJyb3IoZXJyb3JNZXNhZ2UpIHtcbiAgICBjb25zdCBub3RpZkVycm9yQ3VycmVuY3kgPSB0aGlzLl9lcnJvck5vdGlmaWNhdGlvbkhlbHBlci5jcmVhdGVOb3RpZmljYXRpb24oe1xuICAgICAgbWVzc2FnZTogdGhpcy5fdHJhbnNsYXRlKGVycm9yTWVzYWdlKSxcbiAgICAgIG9yaWdpbjogRXJyb3JDb25zdGFudHMuTk9USUZJQ0FUSU9OX09SSUdJTl9DVVJSRU5DWV9NQU5BR0VSXG4gICAgfSk7XG4gICAgcmV0dXJuIG5vdGlmRXJyb3JDdXJyZW5jeTtcbiAgfVxuXG4gIGNvbnZlcnRWaWFCYXNlQ3VycmVuY3koY3VycmVuY3lGcm9tLCBjdXJyZW5jeVRvLCB0aW1lRGF0ZVRvRmluZCkge1xuICAgIGNvbnN0IHJhdGVGcm9tVG9CYXNlID0gdGhpcy5fY3VycmVuY3lSYXRlcy5maW5kKChpdGVtKSA9PlxuICAgICAgaXRlbVtDb25zdGFudHMuQ1VSUkVOQ1lfUEFJUl0uZnJvbSA9PT0gY3VycmVuY3lGcm9tICYmIGl0ZW1bQ29uc3RhbnRzLkNVUlJFTkNZX1BBSVJdLnRvID09PVxuICAgICAgdGhpcy5fYmFzZUN1cnJlbmN5XG4gICAgKTtcbiAgICBjb25zdCByYXRlQmFzZVRvVG8gPSB0aGlzLl9jdXJyZW5jeVJhdGVzLmZpbmQoKGl0ZW0pID0+XG4gICAgICBpdGVtW0NvbnN0YW50cy5DVVJSRU5DWV9QQUlSXS5mcm9tID09PSB0aGlzLl9iYXNlQ3VycmVuY3kgJiYgaXRlbVtDb25zdGFudHMuQ1VSUkVOQ1lfUEFJUl0udG8gPT09XG4gICAgICBjdXJyZW5jeVRvXG4gICAgKTtcbiAgICBpZiAocmF0ZUZyb21Ub0Jhc2UgJiYgcmF0ZUJhc2VUb1RvKSB7XG4gICAgICAvLyBpZiB3ZSBoYXZlIGJvdGggY3VycmVuY2llcyB3ZSBqdXN0IHJldHVybiB0aGUgcHJvZHVjdCBvZiBlY2ggcmF0ZVxuICAgICAgcmV0dXJuIHRoaXMuZ2V0RXhjaGFuZ2VSYXRlKHJhdGVGcm9tVG9CYXNlLCB0aW1lRGF0ZVRvRmluZCkgKiB0aGlzLmdldEV4Y2hhbmdlUmF0ZShyYXRlQmFzZVRvVG8sIHRpbWVEYXRlVG9GaW5kKTtcbiAgICB9IGVsc2UgaWYgKHJhdGVGcm9tVG9CYXNlKSB7XG4gICAgICAvLyBpZiBlaXRoZXIgb2YgdGhlbSBpcyBub3QgZm91bmQgd2UgdHJ5IHRvIGZpbmQgdGhlIGludmVyc2VcbiAgICAgIC8vIHdlIGdldCB0aGUgaW52ZXJzZSBvZiByYXRlQmFzZVRvVG9cbiAgICAgIGNvbnN0IHJhdGVUb1RvQmFzZSA9IHRoaXMuX2N1cnJlbmN5UmF0ZXMuZmluZCgoaXRlbSkgPT5cbiAgICAgICAgaXRlbVtDb25zdGFudHMuQ1VSUkVOQ1lfUEFJUl0uZnJvbSA9PT0gY3VycmVuY3lUbyAmJiBpdGVtW0NvbnN0YW50cy5DVVJSRU5DWV9QQUlSXS50byA9PT1cbiAgICAgICAgdGhpcy5fYmFzZUN1cnJlbmN5XG4gICAgICApO1xuICAgICAgaWYgKHJhdGVUb1RvQmFzZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRFeGNoYW5nZVJhdGUocmF0ZUZyb21Ub0Jhc2UsIHRpbWVEYXRlVG9GaW5kKVxuICAgICAgICAgICogKDEgLyB0aGlzLmdldEV4Y2hhbmdlUmF0ZShyYXRlVG9Ub0Jhc2UsIHRpbWVEYXRlVG9GaW5kKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gRXJyb3JDb25zdGFudHMuUkFURV9DVVJSRU5DWV9OT1RfRk9VTkQ7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChyYXRlQmFzZVRvVG8pIHtcbiAgICAgIGNvbnN0IHJhdGVCYXNlVG9Gcm9tID0gdGhpcy5fY3VycmVuY3lSYXRlcy5maW5kKChpdGVtKSA9PlxuICAgICAgICBpdGVtW0NvbnN0YW50cy5DVVJSRU5DWV9QQUlSXS5mcm9tID09PSB0aGlzLl9iYXNlQ3VycmVuY3kgJiYgaXRlbVtDb25zdGFudHMuQ1VSUkVOQ1lfUEFJUl0udG8gPT09XG4gICAgICAgIGN1cnJlbmN5RnJvbVxuICAgICAgKTtcbiAgICAgIC8vIHdlIHRyeSB0byBnZXQgdGhlIGludmVyc2Ugb2YgcmF0ZUZyb21Ub0Jhc2VcbiAgICAgIGlmIChyYXRlQmFzZVRvRnJvbSkge1xuICAgICAgICByZXR1cm4gKDEgLyB0aGlzLmdldEV4Y2hhbmdlUmF0ZShyYXRlQmFzZVRvRnJvbSwgdGltZURhdGVUb0ZpbmQpKVxuICAgICAgICAgICogdGhpcy5nZXRFeGNoYW5nZVJhdGUocmF0ZUJhc2VUb1RvLCB0aW1lRGF0ZVRvRmluZCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gRXJyb3JDb25zdGFudHMuUkFURV9DVVJSRU5DWV9OT1RfRk9VTkQ7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBFcnJvckNvbnN0YW50cy5SQVRFX0NVUlJFTkNZX05PVF9GT1VORDtcbiAgICB9XG4gIH1cblxuICBfZ2V0Q3VycmVuY2llc1dpdGhFeGNoYW5nZVJhdGVzKCkge1xuICAgIGNvbnN0IGNzID0gbmV3IFNldCgpO1xuICAgIGlmICh0aGlzLl9jdXJyZW5jeVJhdGVzKSB7XG4gICAgICB0aGlzLl9jdXJyZW5jeVJhdGVzLmZvckVhY2goZXhjaGFuZ2VSYXRlcyA9PiB7XG4gICAgICAgIGNzLmFkZChleGNoYW5nZVJhdGVzW0NvbnN0YW50cy5DVVJSRU5DWV9QQUlSXS5mcm9tKTtcbiAgICAgICAgY3MuYWRkKGV4Y2hhbmdlUmF0ZXNbQ29uc3RhbnRzLkNVUlJFTkNZX1BBSVJdLnRvKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gY3M7XG4gIH1cbn1cbiIsImltcG9ydCAqIGFzIEZQQyBmcm9tICcuLi8uLi91dGlscy9GaWVsZFBhdGhDb25zdGFudHMnO1xuaW1wb3J0IEZpZWxkc01hbmFnZXIgZnJvbSAnLi9GaWVsZHNNYW5hZ2VyJztcbmltcG9ydCBDb25zdGFudHMgZnJvbSAnLi4vLi4vdXRpbHMvQ29uc3RhbnRzJztcbmltcG9ydCBBY3Rpdml0eUNvbnN0YW50cyBmcm9tICcuLi91dGlsL0FjdGl2aXR5Q29uc3RhbnRzJztcbmltcG9ydCBDdXJyZW5jeVJhdGVzTWFuYWdlciBmcm9tICcuLi91dGlsL0N1cnJlbmN5UmF0ZXNNYW5hZ2VyJztcblxuXG4vKipcbiAqIFBvc3NpYmxlIFZhbHVlcyBtYW5hZ2VyIHRoYXQgYWxsb3dzIHRvIGZpbGwgaW4gYWRkaXRpb25hbCBpbmZvcm1hdGlvbiBhbmQgdHJhbnNmb3JtYXRpb25zXG4gKiBAYXV0aG9yIE5hZGVqZGEgTWFuZHJlc2N1XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvc3NpYmxlVmFsdWVzTWFuYWdlciB7XG4gIHN0YXRpYyBfbGFuZ1N0YXRlID0ge1xuICAgIGxhbmc6IENvbnN0YW50cy5MQU5HVUFHRV9FTkdMSVNILFxuICAgIGRlZmF1bHRMYW5nOiBDb25zdGFudHMuTEFOR1VBR0VfRU5HTElTSFxuICB9O1xuXG4gIHN0YXRpYyBfbG9nZ2VyO1xuXG4gIHN0YXRpYyBzZXRMYW5nU3RhdGUobGFuZ1N0YXRlKSB7XG4gICAgUG9zc2libGVWYWx1ZXNNYW5hZ2VyLl9sYW5nU3RhdGUgPSBsYW5nU3RhdGU7XG4gIH1cblxuICBzdGF0aWMgc2V0TG9nZ2VyKExvZ2dlcikge1xuICAgIFBvc3NpYmxlVmFsdWVzTWFuYWdlci5fbG9nZ2VyID0gbmV3IExvZ2dlcignUG9zc2libGUgdmFsdWVzIG1hbmFnZXInKTtcbiAgfVxuICBzdGF0aWMgYnVpbGRGb3JtYXR0ZWRIaWVyYXJjaGljYWxWYWx1ZXMob3B0aW9ucykge1xuICAgIC8vIFRPRE8gb3B0aW1pemVcbiAgICBjb25zdCBoT3B0aW9ucyA9IHt9O1xuICAgIE9iamVjdC52YWx1ZXMob3B0aW9ucykuZm9yRWFjaChvcHRpb24gPT4ge1xuICAgICAgaE9wdGlvbnNbb3B0aW9uLmlkXSA9IFBvc3NpYmxlVmFsdWVzTWFuYWdlci5idWlsZEhpZXJhcmNoaWNhbERhdGEob3B0aW9ucywgb3B0aW9uLmlkKTtcbiAgICB9KTtcbiAgICByZXR1cm4gaE9wdGlvbnM7XG4gIH1cblxuICBzdGF0aWMgYnVpbGRIaWVyYXJjaGljYWxEYXRhKG9wdGlvbnMsIHNlbGVjdGVkSWQpIHtcbiAgICBjb25zdCBvcHRpb24gPSBPYmplY3QuYXNzaWduKHt9LCBvcHRpb25zW3NlbGVjdGVkSWRdKTtcbiAgICBjb25zdCB2YWx1ZVBhcnRzID0gUG9zc2libGVWYWx1ZXNNYW5hZ2VyLmdldEhpZXJhcmNoaWNhbFZhbHVlKG9wdGlvbnMsIHNlbGVjdGVkSWQpO1xuICAgIG9wdGlvbltBY3Rpdml0eUNvbnN0YW50cy5ISUVSQVJDSElDQUxfVkFMVUVdID0gUG9zc2libGVWYWx1ZXNNYW5hZ2VyLmZvcm1hdFZhbHVlUGFydHModmFsdWVQYXJ0cyk7XG4gICAgb3B0aW9uW0FjdGl2aXR5Q29uc3RhbnRzLkhJRVJBUkNISUNBTF9WQUxVRV9ERVBUSF0gPSAodmFsdWVQYXJ0cyAmJiB2YWx1ZVBhcnRzIGluc3RhbmNlb2YgQXJyYXkpID9cbiAgICAgIHZhbHVlUGFydHMubGVuZ3RoIDogMDtcbiAgICByZXR1cm4gb3B0aW9uO1xuICB9XG5cbiAgc3RhdGljIGdldEhpZXJhcmNoaWNhbFZhbHVlKG9wdGlvbnMsIHNlbGVjdGVkSWQpIHtcbiAgICBjb25zdCBuYW1lUGFydHMgPSBbXTtcbiAgICBsZXQgY3VycmVudCA9IG9wdGlvbnNbc2VsZWN0ZWRJZF07XG4gICAgd2hpbGUgKGN1cnJlbnQpIHtcbiAgICAgIG5hbWVQYXJ0cy5wdXNoKFBvc3NpYmxlVmFsdWVzTWFuYWdlci5nZXRPcHRpb25UcmFuc2xhdGlvbihjdXJyZW50KSk7XG4gICAgICBjdXJyZW50ID0gb3B0aW9uc1tjdXJyZW50LnBhcmVudElkXTtcbiAgICB9XG4gICAgcmV0dXJuIG5hbWVQYXJ0cztcbiAgfVxuXG4gIHN0YXRpYyBmb3JtYXRWYWx1ZVBhcnRzKHZhbHVlUGFydHMpIHtcbiAgICByZXR1cm4gKHZhbHVlUGFydHMgJiYgdmFsdWVQYXJ0cyBpbnN0YW5jZW9mIEFycmF5KSA/IGBbJHt2YWx1ZVBhcnRzLnJldmVyc2UoKS5qb2luKCddWycpfV1gIDogdmFsdWVQYXJ0cztcbiAgfVxuXG4gIC8qKlxuICAgKiBGaWxscyBoaWVyYXJjaGljYWwgZGVwdGggb2YgZWFjaCBvcHRpb25cbiAgICogQHBhcmFtIG9wdGlvbnNcbiAgICovXG4gIHN0YXRpYyBmaWxsSGllcmFyY2hpY2FsRGVwdGgob3B0aW9ucykge1xuICAgIE9iamVjdC52YWx1ZXMob3B0aW9ucykuZm9yRWFjaChvcHRpb24gPT4ge1xuICAgICAgUG9zc2libGVWYWx1ZXNNYW5hZ2VyLl9maWxsSGllcmFyY2hpY2FsRGVwdGgob3B0aW9ucywgb3B0aW9uKTtcbiAgICB9KTtcbiAgICByZXR1cm4gb3B0aW9ucztcbiAgfVxuXG4gIHN0YXRpYyBfZmlsbEhpZXJhcmNoaWNhbERlcHRoKG9wdGlvbnMsIG9wdGlvbikge1xuICAgIGlmICghb3B0aW9uKSB7XG4gICAgICBQb3NzaWJsZVZhbHVlc01hbmFnZXIuX2xvZ2dlci5lcnJvcihgb3B0aW9uIGlzIHVuc3BlY2lmaWVkOiAke29wdGlvbn1gKTtcbiAgICAgIHJldHVybiAwO1xuICAgIH1cbiAgICBsZXQgZGVwdGggPSBvcHRpb25bQWN0aXZpdHlDb25zdGFudHMuSElFUkFSQ0hJQ0FMX1ZBTFVFX0RFUFRIXTtcbiAgICBpZiAoZGVwdGggPT09IHVuZGVmaW5lZCkge1xuICAgICAgLy8gU28gZmFyIGl0IGlzIGJhc2VkIG9uIHRoZSBjdXJyZW50IGxvY2F0aW9ucyBleHRyYSBpbmZvIGFwcHJvYWNoXG4gICAgICBpZiAob3B0aW9uLnBhcmVudElkKSB7XG4gICAgICAgIGNvbnN0IHBhcmVudCA9IG9wdGlvbnNbb3B0aW9uLnBhcmVudElkXTtcbiAgICAgICAgZGVwdGggPSAxICsgUG9zc2libGVWYWx1ZXNNYW5hZ2VyLl9maWxsSGllcmFyY2hpY2FsRGVwdGgob3B0aW9ucywgcGFyZW50KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRlcHRoID0gMDtcbiAgICAgIH1cbiAgICAgIG9wdGlvbltBY3Rpdml0eUNvbnN0YW50cy5ISUVSQVJDSElDQUxfVkFMVUVfREVQVEhdID0gZGVwdGg7XG4gICAgfVxuICAgIHJldHVybiBkZXB0aDtcbiAgfVxuXG4gIHN0YXRpYyBmaW5kT3B0aW9uKG9wdGlvbnMsIGlkKSB7XG4gICAgcmV0dXJuIE9iamVjdC52YWx1ZXMob3B0aW9ucykuZmluZChvID0+IG8uaWQgPT09IGlkKTtcbiAgfVxuXG4gIHN0YXRpYyBmaW5kT3B0aW9uQnlWYWx1ZShvcHRpb25zLCB2YWx1ZSkge1xuICAgIHJldHVybiBPYmplY3QudmFsdWVzKG9wdGlvbnMpLmZpbmQobyA9PiBvLnZhbHVlID09PSB2YWx1ZSk7XG4gIH1cblxuICBzdGF0aWMgZ2V0T3B0aW9uVHJhbnNsYXRpb24ob3B0aW9uKSB7XG4gICAgbGV0IHJlc1ZhbCA9IG9wdGlvbi52YWx1ZTtcbiAgICBjb25zdCB0cmFuc2xhdGlvbnMgPSBvcHRpb25bJ3RyYW5zbGF0ZWQtdmFsdWUnXTtcbiAgICBpZiAodHJhbnNsYXRpb25zICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGNvbnN0IGxhbmdTdGF0ZSA9IFBvc3NpYmxlVmFsdWVzTWFuYWdlci5fbGFuZ1N0YXRlO1xuICAgICAgcmVzVmFsID0gdHJhbnNsYXRpb25zW2xhbmdTdGF0ZS5sYW5nXSB8fCB0cmFuc2xhdGlvbnNbbGFuZ1N0YXRlLmRlZmF1bHRMYW5nXSB8fCByZXNWYWw7XG4gICAgfVxuICAgIHJldHVybiByZXNWYWw7XG4gIH1cblxuICBzdGF0aWMgc2V0VmlzaWJpbGl0eShvcHRpb25zLCBmaWVsZFBhdGgsIGN1cnJlbmN5UmF0ZXNNYW5hZ2VyOiBDdXJyZW5jeVJhdGVzTWFuYWdlciwgZmlsdGVycywgaXNPUkZpbHRlciA9IGZhbHNlLFxuICAgIHNlbGVjdGVkSWQpIHtcbiAgICBjb25zdCBpc0xvY2F0aW9ucyA9IEZQQy5MT0NBVElPTl9QQVRIID09PSBmaWVsZFBhdGg7XG4gICAgY29uc3QgaXNDdXJyZW5jeSA9IEZQQy5QQVRIU19GT1JfQ1VSUkVOQ1kuaGFzKGZpZWxkUGF0aCk7XG4gICAgb3B0aW9ucyA9IHsgLi4ub3B0aW9ucyB9O1xuICAgIE9iamVjdC52YWx1ZXMob3B0aW9ucykuZm9yRWFjaChvcHRpb24gPT4ge1xuICAgICAgb3B0aW9uLnZpc2libGUgPSAhaXNPUkZpbHRlcjtcbiAgICAgIGlmIChpc0xvY2F0aW9ucykge1xuICAgICAgICBvcHRpb24uZGlzcGxheUhpZXJhcmNoaWNhbFZhbHVlID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSBpZiAoaXNDdXJyZW5jeSkge1xuICAgICAgICBvcHRpb25bRlBDLkZJRUxEX09QVElPTl9VU0FCTEVdID0gUG9zc2libGVWYWx1ZXNNYW5hZ2VyLmlzQ3VycmVuY3lPcHRpb25Vc2FibGUob3B0aW9uLCBjdXJyZW5jeVJhdGVzTWFuYWdlcik7XG4gICAgICAgIGlmICghb3B0aW9uW0ZQQy5GSUVMRF9PUFRJT05fVVNBQkxFXSkge1xuICAgICAgICAgIG9wdGlvbi52aXNpYmxlID0gb3B0aW9uLmlkID09PSBzZWxlY3RlZElkO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gICAgaWYgKGZpbHRlcnMpIHtcbiAgICAgIGZpbHRlcnMuZm9yRWFjaChmaWx0ZXIgPT4ge1xuICAgICAgICBjb25zdCBmaWx0ZXJCeSA9IGZpbHRlci52YWx1ZTtcbiAgICAgICAgT2JqZWN0LnZhbHVlcyhvcHRpb25zKS5mb3JFYWNoKG9wdGlvbiA9PiB7XG4gICAgICAgICAgY29uc3Qgb3B0aW9uRGF0YVRvQ2hlY2sgPSBGaWVsZHNNYW5hZ2VyLmdldFZhbHVlKG9wdGlvbiwgZmlsdGVyLnBhdGgpO1xuICAgICAgICAgIGlmICgoaXNPUkZpbHRlciB8fCBvcHRpb24udmlzaWJsZSkgJiYgb3B0aW9uRGF0YVRvQ2hlY2sgJiYgKFxuICAgICAgICAgICAgKG9wdGlvbkRhdGFUb0NoZWNrIGluc3RhbmNlb2YgQXJyYXkgJiYgb3B0aW9uRGF0YVRvQ2hlY2suaW5jbHVkZXMoZmlsdGVyQnkpKSB8fFxuICAgICAgICAgICAgKG9wdGlvbkRhdGFUb0NoZWNrID09PSBmaWx0ZXJCeSkpKSB7XG4gICAgICAgICAgICBvcHRpb24udmlzaWJsZSA9IHRydWU7XG4gICAgICAgICAgfSBlbHNlIGlmIChpc09SRmlsdGVyKSB7XG4gICAgICAgICAgICAvLyBEbyBub3RoaW5nLCBrZWVwIGl0IHZpc2libGUvaW52aXNpYmxlLlxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBvcHRpb24udmlzaWJsZSA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIG9wdGlvbnM7XG4gIH1cblxuICBzdGF0aWMgaXNDdXJyZW5jeU9wdGlvblVzYWJsZShvcHRpb24sIGN1cnJlbmN5UmF0ZXNNYW5hZ2VyOiBDdXJyZW5jeVJhdGVzTWFuYWdlcikge1xuICAgIGNvbnN0IGhhc0V4Y2hhbmdlUmF0ZXMgPSBjdXJyZW5jeVJhdGVzTWFuYWdlci5jdXJyZW5jaWVzV2l0aEV4Y2hhbmdlUmF0ZXMuaGFzKG9wdGlvbi52YWx1ZSk7XG4gICAgY29uc3QgaXNBY3RpdmUgPSBvcHRpb24uZXh0cmFfaW5mbyAmJiBvcHRpb24uZXh0cmFfaW5mby5hY3RpdmU7XG4gICAgcmV0dXJuIGlzQWN0aXZlICYmIGhhc0V4Y2hhbmdlUmF0ZXM7XG4gIH1cblxuICBzdGF0aWMgZ2V0VHJlZVNvcnRlZE9wdGlvbnNMaXN0KG9wdGlvbnNPYmosIHJldmVyc2VTb3J0T3B0aW9ucykge1xuICAgIGNvbnN0IGFkZGVkID0gbmV3IFNldCgpO1xuICAgIGNvbnN0IG9wdGlvbnNMaXN0ID0gW107XG4gICAgY29uc3QgaWRzU3RhY2sgPSBPYmplY3QudmFsdWVzKG9wdGlvbnNPYmopLmZpbHRlcihvID0+ICFvLnBhcmVudElkKS5zb3J0KHJldmVyc2VTb3J0T3B0aW9ucylcbiAgICAgIC5tYXAobyA9PiBvLmlkKTtcbiAgICB3aGlsZSAoaWRzU3RhY2subGVuZ3RoKSB7XG4gICAgICBjb25zdCBpZCA9IGlkc1N0YWNrLnBvcCgpO1xuICAgICAgaWYgKCFhZGRlZC5oYXMoaWQpKSB7XG4gICAgICAgIGNvbnN0IG9wdGlvbiA9IG9wdGlvbnNPYmpbaWRdO1xuICAgICAgICBpZiAob3B0aW9uLnJldmVyc2VTb3J0ZWRDaGlsZHJlbikge1xuICAgICAgICAgIGlkc1N0YWNrLnB1c2goLi4ub3B0aW9uLnJldmVyc2VTb3J0ZWRDaGlsZHJlbik7XG4gICAgICAgIH1cbiAgICAgICAgYWRkZWQuYWRkKGlkKTtcbiAgICAgICAgb3B0aW9uc0xpc3QucHVzaChvcHRpb24pO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gb3B0aW9uc0xpc3Q7XG4gIH1cbn1cbiIsIi8qIGVzbGludC1kaXNhYmxlIGNsYXNzLW1ldGhvZHMtdXNlLXRoaXMgKi9cbmNvbnN0IEZFQVRVUkVfTUFOQUdFUiA9ICdGZWF0dXJlIG1hbmFnZXInO1xuXG4vKipcbiAqIEZlYXR1cmUgTWFuYWdlclxuICogQGF1dGhvciBOYWRlamRhIE1hbmRyZXNjdVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGZWF0dXJlTWFuYWdlciB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICBzdGF0aWMgX2N1cnJlbnRGTSA9IG5ldyBGZWF0dXJlTWFuYWdlcigpO1xuXG4gIGNvbnN0cnVjdG9yKGZtVHJlZSwgTG9nZ2VyTWFuYWdlcikge1xuICAgIHRoaXMuX2ZtVHJlZSA9IGZtVHJlZTtcbiAgICBpZiAoTG9nZ2VyTWFuYWdlcikge1xuICAgICAgdGhpcy5sb2dnZXJNYW5hZ2VyID0gTG9nZ2VyTWFuYWdlcjtcbiAgICB9XG4gIH1cbiAgc2V0IGZtVHJlZShmbVRyZWUpIHtcbiAgICB0aGlzLl9mbVRyZWUgPSBmbVRyZWU7XG4gIH1cbiAgc2V0IGxvZ2dlck1hbmFnZXIoTG9nZ2VyTWFuYWdlcikge1xuICAgIHRoaXMuX2xvZ2dlck1hbmFnZXIgPSBuZXcgTG9nZ2VyTWFuYWdlcihGRUFUVVJFX01BTkFHRVIpO1xuICB9XG5cbiAgc3RhdGljIHNldExvZ2dlck1hbmFnZXIoTG9nZ2VyTWFuYWdlcikge1xuICAgIEZlYXR1cmVNYW5hZ2VyLl9jdXJyZW50Rk0ubG9nZ2VyTWFuYWdlciA9IExvZ2dlck1hbmFnZXI7XG4gIH1cbiAgc3RhdGljIHNldEZNVHJlZShmbVRyZWUpIHtcbiAgICBGZWF0dXJlTWFuYWdlci5fY3VycmVudEZNLmZtVHJlZSA9IGZtVHJlZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVja3MgaWYgdGhlIGdpdmVuIEZNIHBhdGggaXMgZnVsbHkgZW5hYmxlZCBvciBvbmx5IGxhc3Qgc2VnbWVudCBpcyBlbmFibGVkXG4gICAqIEBwYXJhbSBmbVBhdGggdGhlIEZNIHBhdGgsIGUuZy4gJy9QUk9KRUNUIE1BTkFHRU1FTlQvRnVuZGluZy9GdW5kaW5nIEluZm9ybWF0aW9uL0RlbGl2ZXJ5IHJhdGUnXG4gICAqIEBwYXJhbSBvbmx5TGFzdFNlZ21lbnQgc3BlY2lmaWVzIGlmIHRvIGNoZWNrIGlmIG9ubHkgdGhlIGxhc3Qgc2VnbWVudCBpcyBlbmFibGVkICh0aGUgQU1QIGJlaGF2aW9yIGZvciBzb21lIGNhc2VzKVxuICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgKi9cbiAgc3RhdGljIGlzRk1TZXR0aW5nRW5hYmxlZChmbVBhdGgsIG9ubHlMYXN0U2VnbWVudCkge1xuICAgIHJldHVybiBGZWF0dXJlTWFuYWdlci5fY3VycmVudEZNLmlzRk1TZXR0aW5nRW5hYmxlZChmbVBhdGgsIG9ubHlMYXN0U2VnbWVudCk7XG4gIH1cblxuICBzdGF0aWMgaGFzRk1TZXR0aW5nKGZtUGF0aCkge1xuICAgIHJldHVybiBGZWF0dXJlTWFuYWdlci5fY3VycmVudEZNLmhhc0ZNU2V0dGluZyhmbVBhdGgpO1xuICB9XG5cbiAgaXNGTVNldHRpbmdFbmFibGVkKGZtUGF0aCwgb25seUxhc3RTZWdtZW50KSB7XG4gICAgdGhpcy5fbG9nZ2VyTWFuYWdlci5kZWJ1ZygnaXNGTVNldHRpbmdFbmFibGVkJyk7XG4gICAgaWYgKHRoaXMuX2ZtVHJlZSkge1xuICAgICAgbGV0IGxhc3RGTVN1YlRyZWUgPSB0aGlzLl9mbVRyZWU7XG4gICAgICBjb25zdCBzZWdtZW50cyA9IHRoaXMuX2dldFBhdGhTZWdtZW50cyhmbVBhdGgpO1xuICAgICAgY29uc3QgZm91bmRMYXN0Rk1TdWJUcmVlID0gc2VnbWVudHMuZXZlcnkoc2VnbWVudCA9PiB7XG4gICAgICAgIGxhc3RGTVN1YlRyZWUgPSBsYXN0Rk1TdWJUcmVlW3NlZ21lbnRdO1xuICAgICAgICByZXR1cm4gbGFzdEZNU3ViVHJlZSAhPT0gdW5kZWZpbmVkICYmIChsYXN0Rk1TdWJUcmVlLl9fZW5hYmxlZCB8fCBvbmx5TGFzdFNlZ21lbnQpO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gZm91bmRMYXN0Rk1TdWJUcmVlICYmIGxhc3RGTVN1YlRyZWUuX19lbmFibGVkO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBoYXNGTVNldHRpbmcoZm1QYXRoKSB7XG4gICAgY29uc3QgZm1TZXR0aW5nID0gdGhpcy5maW5kRk1TZXR0aW5nKGZtUGF0aCk7XG4gICAgcmV0dXJuIGZtU2V0dGluZyAmJiBmbVNldHRpbmcuX19lbmFibGVkICE9PSB1bmRlZmluZWQ7XG4gIH1cblxuICBmaW5kRk1TZXR0aW5nKGZtUGF0aCkge1xuICAgIGNvbnN0IHNlZ21lbnRzID0gdGhpcy5fZ2V0UGF0aFNlZ21lbnRzKGZtUGF0aCk7XG4gICAgcmV0dXJuIHNlZ21lbnRzLnJlZHVjZSgoY3VycmVudEZNU2V0dGluZywgc2VnbWVudCkgPT4gY3VycmVudEZNU2V0dGluZyAmJiBjdXJyZW50Rk1TZXR0aW5nW3NlZ21lbnRdXG4gICAgICAsIHRoaXMuX2ZtVHJlZSB8fCB7fSk7XG4gIH1cblxuICBzZXRGTVNldHRpbmcoZm1QYXRoLCBlbmFibGVkKSB7XG4gICAgaWYgKHRoaXMuX2ZtVHJlZSkge1xuICAgICAgY29uc3Qgc2VnbWVudHMgPSB0aGlzLl9nZXRQYXRoU2VnbWVudHMoZm1QYXRoKTtcbiAgICAgIGNvbnN0IGxhc3RGTVN1YlRyZWUgPSBzZWdtZW50cy5yZWR1Y2UoKGN1cnJlbnRGTVRyZWUsIHNlZ21lbnQpID0+IHtcbiAgICAgICAgbGV0IHNlZ21lbnRGTSA9IGN1cnJlbnRGTVRyZWVbc2VnbWVudF07XG4gICAgICAgIGlmIChzZWdtZW50Rk0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHNlZ21lbnRGTSA9IHt9O1xuICAgICAgICAgIGN1cnJlbnRGTVRyZWVbc2VnbWVudF0gPSBzZWdtZW50Rk07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHNlZ21lbnRGTTtcbiAgICAgIH0sIHRoaXMuX2ZtVHJlZSk7XG4gICAgICBsYXN0Rk1TdWJUcmVlLl9fZW5hYmxlZCA9IGVuYWJsZWQ7XG4gICAgfVxuICB9XG5cbiAgX2dldFBhdGhTZWdtZW50cyhmbVBhdGgpIHtcbiAgICAvLyBpZ25vcmUgZmlyc3QgXCIvXCIgdG8gZXhjbHVkZSBlbXB0eSBzdHJpbmcgZnJvbSB0aGUgc3BsaXRcbiAgICByZXR1cm4gZm1QYXRoLnN1YnN0cmluZygxKS5zcGxpdCgnLycpO1xuICB9XG59XG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCBQcm9wVHlwZXMgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBPdmVybGF5VHJpZ2dlciwgVG9vbHRpcCB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XG5cbmxldCBsb2dnZXIgPSBudWxsO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBUExhYmVsIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGxhYmVsOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgZG9udFRyYW5zbGF0ZTogUHJvcFR5cGVzLmJvb2wsXG4gICAgbGFiZWxDbGFzczogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAvKiBkZWNvcmF0b3I6IFByb3BUeXBlcy5mdW5jLCAvLyBUT0RPOiBUbyBiZSBpbXBsZW1lbnRlZC4gKi9cbiAgICBzZXBhcmF0b3I6IFByb3BUeXBlcy5ib29sLFxuICAgIHRvb2x0aXA6IFByb3BUeXBlcy5zdHJpbmdcbiAgfTtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICBjb25zdCB7IExvZ2dlciB9ID0gdGhpcy5wcm9wcztcbiAgICBsb2dnZXIgPSBuZXcgTG9nZ2VyKCdBUCBMYWJlbCcpO1xuICAgIGxvZ2dlci5kZWJ1ZygnY29uc3RydWN0b3InKTtcbiAgfVxuXG4gIGdldENvbnRlbnQoKSB7XG4gICAgY29uc3QgeyB0cmFuc2xhdGUgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgbGFiZWwgPSAodGhpcy5wcm9wcy5kb250VHJhbnNsYXRlID09PSB0cnVlID8gdGhpcy5wcm9wcy5sYWJlbCA6IHRyYW5zbGF0ZSh0aGlzLnByb3BzLmxhYmVsKSk7XG4gICAgY29uc3QgbGFiZWxDbGFzcyA9ICh0aGlzLnByb3BzLmxhYmVsQ2xhc3MgPyB0aGlzLnByb3BzLmxhYmVsQ2xhc3MgOiAnJyk7XG4gICAgcmV0dXJuICg8ZGl2IGNsYXNzTmFtZT17bGFiZWxDbGFzc30+PHNwYW4+e2xhYmVsfTwvc3Bhbj57dGhpcy5wcm9wcy5zZXBhcmF0b3IgPyA8aHIgLz4gOiAnJ308L2Rpdj4pO1xuICB9XG5cbiAgdG9vbHRpcCgpIHtcbiAgICBjb25zdCB7IHRvb2x0aXAsIGRvbnRUcmFuc2xhdGUsIHRyYW5zbGF0ZSB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gPFRvb2x0aXAgaWQ9XCJ0b29sdGlwXCI+e2RvbnRUcmFuc2xhdGUgPyB0b29sdGlwIDogdHJhbnNsYXRlKHRoaXMucHJvcHMudG9vbHRpcCl9PC9Ub29sdGlwPjtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBpZiAodGhpcy5wcm9wcy50b29sdGlwKSB7XG4gICAgICByZXR1cm4gKDxPdmVybGF5VHJpZ2dlciBwbGFjZW1lbnQ9XCJyaWdodFwiIG92ZXJsYXk9e3RoaXMudG9vbHRpcCgpfT5cbiAgICAgICAge3RoaXMuZ2V0Q29udGVudCgpfVxuICAgICAgPC9PdmVybGF5VHJpZ2dlcj4pO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdGhpcy5nZXRDb250ZW50KCk7XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCBQcm9wVHlwZXMgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL0FjdGl2aXR5UHJldmlldy5jc3MnO1xuXG5sZXQgbG9nZ2VyID0gbnVsbDtcblxuLyoqXG4gKiBTaW1wbGUgRmllbGQgY29tcG9uZW50IHRoYXQgY29uc2lzdHMgb2YgYSBmaWVsZCB0aXRsZSBhbmQgZmllbGQgdmFsdWVcbiAqIEBhdXRob3IgTmFkZWpkYSBNYW5kcmVzY3VcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQVBGaWVsZCBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgdGl0bGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgdmFsdWU6IFByb3BUeXBlcy5hbnksXG4gICAgaW5saW5lOiBQcm9wVHlwZXMuYm9vbCxcbiAgICB1c2VJbm5lckhUTUw6IFByb3BUeXBlcy5ib29sLFxuICAgIGZpZWxkQ2xhc3M6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgZmllbGROYW1lQ2xhc3M6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgZmllbGRWYWx1ZUNsYXNzOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIHNlcGFyYXRvcjogUHJvcFR5cGVzLmJvb2wsXG4gICAgdHJhbnNsYXRlOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBMb2dnZXI6IFByb3BUeXBlcy5mdW5jXG4gIH07XG5cbiAgLyoqXG4gICAqIEdldHMgYW4gaW5zdGFuY2Ugb2YgU2ltcGxlIEZpZWxkXG4gICAqIEBwYXJhbSB0cm5MYWJlbCB0aGUgbGFiZWwgdG8gdHJhbnNsYXRlIGFuZCB1c2UgYXMgYSB0aXRsZS4gVGhpcyBsYWJlbCBpcyBhbHNvIHVzZWQgYXMgdGhlIGNvbXBvbmVudCBrZXkuXG4gICAqIEBwYXJhbSB2YWx1ZSB0aGUgZmllbGQgdmFsdWVcbiAgICogQHBhcmFtIGlubGluZSBzaG93IHRpdGxlIGFuZCB2YWx1ZSBpbiB0aGUgc2FtZSByb3cuXG4gICAqIEBwYXJhbSBzZXBhcmF0b3IgYWRkIG9yIG5vdCBhbiA8aHI+IHRhZy5cbiAgICogQHBhcmFtIG5hbWVDbGFzcyBjc3MgY2xhc3MgZm9yIHRoZSBmaWVsZCBsYWJlbFxuICAgKiBAcGFyYW0gdmFsdWVDbGFzcyBjc3MgY2xhc3MgZm9yIHRoZSBmaWVsZCB2YWx1ZVxuICAgKiBAcGFyYW0gdHJhbnNsYXRlIHRoZSB0cmFuc2xhdGlvbiBmdW5jdGlvblxuICAgKiBAcGFyYW0gbG9nZ2VyIHRoZSBMb2dnZXJNYW5hZ2VyXG4gICAqIEByZXR1cm4ge1NpbXBsZUZpZWxkfVxuICAgKi9cbiAgc3RhdGljIGluc3RhbmNlKHRybkxhYmVsLCB2YWx1ZSwgaW5saW5lID0gZmFsc2UsIHNlcGFyYXRvciA9IGZhbHNlLCBuYW1lQ2xhc3MsIHZhbHVlQ2xhc3MsIHRyYW5zbGF0ZSwgbG9nZ2VyKSB7XG4gICAgcmV0dXJuICg8QVBGaWVsZFxuICAgICAga2V5PXt0cm5MYWJlbH0gdGl0bGU9e3RyYW5zbGF0ZSh0cm5MYWJlbCl9IHZhbHVlPXt2YWx1ZX0gaW5saW5lPXtpbmxpbmV9IHNlcGFyYXRvcj17c2VwYXJhdG9yfVxuICAgICAgZmllbGROYW1lQ2xhc3M9e25hbWVDbGFzc30gZmllbGRWYWx1ZUNsYXNzPXt2YWx1ZUNsYXNzfSB0cmFuc2xhdGU9e3RyYW5zbGF0ZX0gTG9nZ2VyPXtsb2dnZXJ9IC8+KTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIGNvbnN0IHsgTG9nZ2VyIH0gPSB0aGlzLnByb3BzO1xuICAgIGxvZ2dlciA9IG5ldyBMb2dnZXIoJ0FQIGZpZWxkJyk7XG4gICAgbG9nZ2VyLmxvZygnY29uc3RydWN0b3InKTtcbiAgICB0aGlzLnVzZVNlcGFyYXRvciA9IHRoaXMucHJvcHMuc2VwYXJhdG9yICE9PSBmYWxzZTtcbiAgICB0aGlzLmRpc3BsYXlDbGFzcyA9IHRoaXMucHJvcHMuZmllbGRDbGFzcyB8fCAodGhpcy5wcm9wcy5pbmxpbmUgPT09IHRydWUgPyBzdHlsZXMuaW5saW5lIDogc3R5bGVzLmJsb2NrKTtcbiAgfVxuXG4gIF9nZXRWYWx1ZSgpIHtcbiAgICBjb25zdCB7IHRyYW5zbGF0ZSB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBjbGFzc05hbWVzID0gYCR7dGhpcy5wcm9wcy5maWVsZFZhbHVlQ2xhc3N9ICR7dGhpcy5kaXNwbGF5Q2xhc3N9YDtcbiAgICAvLyBUbyBoYW5kbGUgYm9vbGVhbiBmaWVsZHMgd2UgZG9udCB3YW50IHRvIHNob3cgJ2ZhbHNlJyBhcyAnTm8gRGF0YScuXG4gICAgY29uc3QgdmFsdWUgPSAodGhpcy5wcm9wcy52YWx1ZSB8fCB0aGlzLnByb3BzLnZhbHVlID09PSBmYWxzZSkgPyB0aGlzLnByb3BzLnZhbHVlIDogdHJhbnNsYXRlKCdObyBEYXRhJyk7XG4gICAgbGV0IGRpc3BsYXlWYWx1ZTtcbiAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgIGlmICh2YWx1ZVswXSBpbnN0YW5jZW9mIE9iamVjdCkge1xuICAgICAgICBkaXNwbGF5VmFsdWUgPSBbXTtcbiAgICAgICAgdmFsdWUuZm9yRWFjaCh2ID0+IGRpc3BsYXlWYWx1ZS5wdXNoKHYpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRpc3BsYXlWYWx1ZSA9IHZhbHVlLnNvcnQoKVxuICAgICAgICAgIC5qb2luKCcsICcpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodHlwZW9mIHZhbHVlID09PSAnYm9vbGVhbicpIHtcbiAgICAgIGRpc3BsYXlWYWx1ZSA9IHZhbHVlID09PSB0cnVlID8gdHJhbnNsYXRlKCdZZXMnKSA6IHRyYW5zbGF0ZSgnTm8nKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZGlzcGxheVZhbHVlID0gKHRoaXMucHJvcHMuaW5saW5lICYmIHRoaXMucHJvcHMudmFsdWUgaW5zdGFuY2VvZiBTdHJpbmcpID8gYCR7dmFsdWV9IGAgOiB2YWx1ZTtcbiAgICB9XG4gICAgaWYgKHRoaXMucHJvcHMudXNlSW5uZXJIVE1MKSB7XG4gICAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZXN9IGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogZGlzcGxheVZhbHVlIH19IC8+O1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZXN9PntkaXNwbGF5VmFsdWV9PC9kaXY+O1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBjbGFzc05hbWVzID0gYCR7dGhpcy5wcm9wcy5maWVsZE5hbWVDbGFzc30gJHt0aGlzLmRpc3BsYXlDbGFzc31gO1xuICAgIHJldHVybiAoPGRpdiBjbGFzc05hbWU9e3RoaXMuZGlzcGxheUNsYXNzfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWVzfT57dGhpcy5wcm9wcy50aXRsZX08L2Rpdj5cbiAgICAgIHt0aGlzLl9nZXRWYWx1ZSgpfVxuICAgICAge3RoaXMudXNlU2VwYXJhdG9yID8gPGhyIC8+IDogJyd9XG4gICAgPC9kaXY+KTtcbiAgfVxufVxuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL0FjdGl2aXR5UHJldmlldy5jc3MnO1xuaW1wb3J0IFVJVXRpbHMgZnJvbSAnLi4vLi4vLi4vdXRpbHMvVUlVdGlscyc7XG5cbmxldCBsb2dnZXIgPSBudWxsO1xuXG4vKipcbiAqIENvbXBvbmVudCBmb3IgY29udmVydGluZyBjb250ZW50IHRvIHRhYmxlIGZvcm1cbiAqIEBhdXRob3IgQW55YSBNYXJzaGFsbFxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUYWJsaWZ5IGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGNvbnRlbnQ6IFByb3BUeXBlcy5hbnksXG4gICAgY29sdW1uczogUHJvcFR5cGVzLm51bWJlclxuICB9O1xuXG4gIC8qKlxuICAgKiBUYWtlcyBhbiBhcnJheSBhbmQgdHVybnMgaXQgaW50byB0YWJsZSByb3dzIGFuZCBjb2x1bW5zLlxuICAgKiBAYXV0aG9yIEFueWEgTWFyc2hhbGxcbiAgICogQHBhcmFtIGNvbnRlbnQgY29udGVudCBmb3IgdGFibGVcbiAgICogQHBhcmFtIGNvbHMgbnVtYmVyIG9mIGNvbHVtbnNcbiAgICovXG4gIHN0YXRpYyBhZGRSb3dzKGNvbnRlbnQsIGNvbHMpIHtcbiAgICAvLyBSZW1vdmUgdW5kZWZpbmVkIGNlbGxzLlxuICAgIGNvbnRlbnQgPSBjb250ZW50LmZpbHRlcihjID0+IGMpO1xuICAgIC8vIERlY3JlYXNlIG51bWJlciBvZiBjb2xzIGlmIHdlIGRvbnQgaGF2ZSBlbm91Z2ggZWxlbWVudHMuXG4gICAgaWYgKGNvbnRlbnQubGVuZ3RoIDwgY29scykge1xuICAgICAgY29scyA9IGNvbnRlbnQubGVuZ3RoO1xuICAgIH1cbiAgICBjb25zdCByb3dzID0gTWF0aC5jZWlsKGNvbnRlbnQubGVuZ3RoIC8gY29scyk7XG4gICAgY29uc3QgdGFibGVDb250ZW50ID0gW107XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJvd3M7IGkrKykge1xuICAgICAgY29uc3Qgcm93Q29udGVudCA9IFtdO1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBjb2xzOyBqKyspIHtcbiAgICAgICAgcm93Q29udGVudC5wdXNoKDx0ZCBrZXk9e1VJVXRpbHMuc3RyaW5nVG9VbmlxdWVJZCgpfT57Y29udGVudC5wb3AoKX08L3RkPik7XG4gICAgICB9XG4gICAgICB0YWJsZUNvbnRlbnQucHVzaCg8dHIga2V5PXtVSVV0aWxzLnN0cmluZ1RvVW5pcXVlSWQoKX0+e3Jvd0NvbnRlbnR9PC90cj4pO1xuICAgIH1cbiAgICByZXR1cm4gdGFibGVDb250ZW50O1xuICB9XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgY29uc3QgeyBMb2dnZXIgfSA9IHRoaXMucHJvcHM7XG4gICAgbG9nZ2VyID0gbmV3IExvZ2dlcigndGFibGlmeScpO1xuICAgIGxvZ2dlci5sb2coJ2NvbnN0cnVjdG9yJyk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgY29sdW1ucyA9IHRoaXMucHJvcHMuY29sdW1ucyA+PSB0aGlzLnByb3BzLmNvbnRlbnQubGVuZ3RoID8gdGhpcy5wcm9wcy5jb250ZW50Lmxlbmd0aCA6IHRoaXMucHJvcHMuY29sdW1ucztcbiAgICBjb25zdCBjZWxsV2lkdGggPSBgJHsoMTAwIC8gY29sdW1ucyl9JWA7XG4gICAgY29uc3QgY2VsbHdpZHRoU3R5bGUgPSB7XG4gICAgICB3aWR0aDogY2VsbFdpZHRoXG4gICAgfTtcbiAgICBjb25zdCByb3dzID0gTWF0aC5jZWlsKHRoaXMucHJvcHMuY29udGVudC5sZW5ndGggLyBjb2x1bW5zKTtcbiAgICBjb25zdCB0YWJsZUNvbnRlbnQgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJvd3M7IGkrKykge1xuICAgICAgY29uc3Qgcm93Q29udGVudCA9IFtdO1xuICAgICAgcm93Q29udGVudC5wdXNoKDxkaXYga2V5PXtVSVV0aWxzLnN0cmluZ1RvVW5pcXVlSWQoKX0gc3R5bGU9e2NlbGx3aWR0aFN0eWxlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMudGFibGlmeV9vdXRlcl9jZWxsfT5cbiAgICAgICAge3RoaXMucHJvcHMuY29udGVudC5wb3AoKX08L2Rpdj4pO1xuICAgICAgZm9yIChsZXQgaiA9IDE7IGogPCB0aGlzLnByb3BzLmNvbHVtbnMgJiYgdGhpcy5wcm9wcy5jb250ZW50Lmxlbmd0aCA+IDA7IGorKykge1xuICAgICAgICBjb25zdCBrZXkgPSBVSVV0aWxzLnN0cmluZ1RvVW5pcXVlSWQoKTtcbiAgICAgICAgcm93Q29udGVudC5wdXNoKDxkaXYga2V5PXtrZXl9IHN0eWxlPXtjZWxsd2lkdGhTdHlsZX0gY2xhc3NOYW1lPXtzdHlsZXMudGFibGlmeV9pbm5lcl9jZWxsfT5cbiAgICAgICAgICB7dGhpcy5wcm9wcy5jb250ZW50LnBvcCgpfTwvZGl2Pik7XG4gICAgICB9XG4gICAgICB0YWJsZUNvbnRlbnQucHVzaCg8ZGl2IGtleT17VUlVdGlscy5zdHJpbmdUb1VuaXF1ZUlkKCl9IGNsYXNzTmFtZT17c3R5bGVzLmZsZXh9Pntyb3dDb250ZW50fTwvZGl2Pik7XG4gICAgfVxuICAgIHJldHVybiAoPGRpdj5cbiAgICAgIHt0YWJsZUNvbnRlbnR9XG4gICAgPC9kaXY+KTtcbiAgfVxufVxuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCwgUHJvcFR5cGVzIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9BY3Rpdml0eVByZXZpZXcuY3NzJztcblxubGV0IGxvZ2dlciA9IG51bGw7XG5cbi8qKlxuICogUGVyY2VudGFnZSBGaWVsZCBjb21wb25lbnRcbiAqIEBhdXRob3IgTmFkZWpkYSBNYW5kcmVzY3VcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQVBQZXJjZW50YWdlRmllbGQgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgdmFsdWU6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgdGl0bGVDbGFzczogUHJvcFR5cGVzLnN0cmluZyxcbiAgICB2YWx1ZUNsYXNzOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIExvZ2dlcjogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICByYXdOdW1iZXJUb0Zvcm1hdHRlZFN0cmluZzogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZFxuICB9O1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIGNvbnN0IHsgTG9nZ2VyIH0gPSB0aGlzLnByb3BzO1xuICAgIGxvZ2dlciA9IG5ldyBMb2dnZXIoJ0FQIHBlcmNlbnRhZ2UgZmllbGQnKTtcbiAgICBsb2dnZXIubG9nKCdjb25zdHJ1Y3RvcicpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgcmF3TnVtYmVyVG9Gb3JtYXR0ZWRTdHJpbmcgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgcGVyY2VudGFnZSA9IHRoaXMucHJvcHMudmFsdWUgIT09IHVuZGVmaW5lZCAmJiB0aGlzLnByb3BzLnZhbHVlICE9PSBudWxsXG4gICAgICA/IGAke3Jhd051bWJlclRvRm9ybWF0dGVkU3RyaW5nKHRoaXMucHJvcHMudmFsdWUsIHRydWUpfSVgIDogbnVsbDtcbiAgICByZXR1cm4gKDxkaXY+XG4gICAgICA8c3BhbiBjbGFzc05hbWU9e3RoaXMucHJvcHMudGl0bGVDbGFzc30+e3RoaXMucHJvcHMudGl0bGV9IDwvc3Bhbj5cbiAgICAgIDxzcGFuIGNsYXNzTmFtZT17YCR7dGhpcy5wcm9wcy52YWx1ZUNsYXNzfSAke3N0eWxlcy5hbGlnblJpZ2h0fWB9PntwZXJjZW50YWdlfTwvc3Bhbj5cbiAgICA8L2Rpdj4pO1xuICB9XG59XG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBBUEZpZWxkIGZyb20gJy4vQVBGaWVsZC5qc3gnO1xuaW1wb3J0IEFQUGVyY2VudGFnZUZpZWxkIGZyb20gJy4vQVBQZXJjZW50YWdlRmllbGQuanN4JztcbmltcG9ydCBUYWJsaWZ5IGZyb20gJy4vVGFibGlmeS5qc3gnO1xuaW1wb3J0IEFjdGl2aXR5Q29uc3RhbnRzIGZyb20gJy4uLy4uLy4uL21vZHVsZXMvdXRpbC9BY3Rpdml0eUNvbnN0YW50cyc7XG5pbXBvcnQgRmllbGRzTWFuYWdlciBmcm9tICcuLi8uLi8uLi9tb2R1bGVzL2ZpZWxkL0ZpZWxkc01hbmFnZXInO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9BY3Rpdml0eVByZXZpZXcuY3NzJztcbmltcG9ydCBGZWF0dXJlTWFuYWdlciBmcm9tICcuLi8uLi8uLi9tb2R1bGVzL3V0aWwvRmVhdHVyZU1hbmFnZXInO1xuaW1wb3J0IFBvc3NpYmxlVmFsdWVzTWFuYWdlciBmcm9tICcuLi8uLi8uLi9tb2R1bGVzL2ZpZWxkL1Bvc3NpYmxlVmFsdWVzTWFuYWdlcic7XG5pbXBvcnQgVUlVdGlscyBmcm9tICcuLi8uLi8uLi91dGlscy9VSVV0aWxzJztcblxubGV0IGxvZ2dlciA9IG51bGw7XG5cbi8qKlxuICogQWN0aXZpdHkgUHJldmlldyBQZXJjZW50YWdlIExpc3QgdHlwZSBzZWN0aW9uXG4gKiBAYXV0aG9yIE5hZGVqZGEgTWFuZHJlc2N1XG4gKi9cbmNvbnN0IEFQUGVyY2VudGFnZUxpc3QgPSAobGlzdEZpZWxkLCB2YWx1ZUZpZWxkLCBwZXJjZW50YWdlRmllbGQsIGxpc3RUaXRsZSA9IG51bGwpID0+IGNsYXNzIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBhY3Rpdml0eTogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICAgIGFjdGl2aXR5RmllbGRzTWFuYWdlcjogUHJvcFR5cGVzLmluc3RhbmNlT2YoRmllbGRzTWFuYWdlcikuaXNSZXF1aXJlZCxcbiAgICBmaWVsZE5hbWVDbGFzczogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBmaWVsZFZhbHVlQ2xhc3M6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgcGVyY2VudFRpdGxlQ2xhc3M6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgcGVyY2VudFZhbHVlQ2xhc3M6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgdGFibGlmeTogUHJvcFR5cGVzLmJvb2wsXG4gICAgY29sdW1uczogUHJvcFR5cGVzLm51bWJlcixcbiAgICBmbVBhdGg6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgZ2V0SXRlbVRpdGxlOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBMb2dnZXI6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgdHJhbnNsYXRlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkXG4gIH07XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgY29uc3QgeyBMb2dnZXIgfSA9IHRoaXMucHJvcHM7XG4gICAgbG9nZ2VyID0gbmV3IExvZ2dlcignQVAgcGVyY2VudGFnZSBsaXN0Jyk7XG4gICAgbG9nZ2VyLmRlYnVnKCdjb25zdHJ1Y3RvcicpO1xuICB9XG5cbiAgZ2V0SXRlbVRpdGxlKGl0ZW0pIHtcbiAgICBpZiAodGhpcy5wcm9wcy5nZXRJdGVtVGl0bGUpIHtcbiAgICAgIHJldHVybiB0aGlzLnByb3BzLmdldEl0ZW1UaXRsZShpdGVtKTtcbiAgICB9XG4gICAgY29uc3Qgb2JqID0gaXRlbVt2YWx1ZUZpZWxkXTtcbiAgICByZXR1cm4gb2JqW0FjdGl2aXR5Q29uc3RhbnRzLkhJRVJBUkNISUNBTF9WQUxVRV0gP1xuICAgICAgb2JqW0FjdGl2aXR5Q29uc3RhbnRzLkhJRVJBUkNISUNBTF9WQUxVRV0gOlxuICAgICAgUG9zc2libGVWYWx1ZXNNYW5hZ2VyLmdldE9wdGlvblRyYW5zbGF0aW9uKG9iaik7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgdHJhbnNsYXRlLCBhY3Rpdml0eUZpZWxkc01hbmFnZXIsIHBlcmNlbnRUaXRsZUNsYXNzLCBmbVBhdGgsIGFjdGl2aXR5LCBjb2x1bW5zLCB0YWJsaWZ5XG4gICAgICAsIHBlcmNlbnRWYWx1ZUNsYXNzLCBmaWVsZE5hbWVDbGFzcywgZmllbGRWYWx1ZUNsYXNzLCBMb2dnZXIsIHJhd051bWJlclRvRm9ybWF0dGVkU3RyaW5nXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgdGl0bGUgPSBsaXN0VGl0bGUgPyB0cmFuc2xhdGUobGlzdFRpdGxlKSA6IG51bGw7XG4gICAgbGV0IGl0ZW1zID0gYWN0aXZpdHlbbGlzdEZpZWxkXTtcbiAgICBsZXQgY29udGVudCA9IG51bGw7XG4gICAgbGV0IGlzTGlzdEVuYWJsZWQgPSBhY3Rpdml0eUZpZWxkc01hbmFnZXIuaXNGaWVsZFBhdGhFbmFibGVkKGxpc3RGaWVsZCkgPT09IHRydWU7XG4gICAgaWYgKGZtUGF0aCkge1xuICAgICAgaXNMaXN0RW5hYmxlZCA9IEZlYXR1cmVNYW5hZ2VyLmlzRk1TZXR0aW5nRW5hYmxlZChmbVBhdGgpID8gaXNMaXN0RW5hYmxlZCA6IGZhbHNlO1xuICAgIH1cbiAgICBpZiAoaXNMaXN0RW5hYmxlZCkge1xuICAgICAgaWYgKGl0ZW1zICYmIGl0ZW1zLmxlbmd0aCkge1xuICAgICAgICBpdGVtcyA9IGl0ZW1zLm1hcChpdGVtID0+ICh7XG4gICAgICAgICAgaXRlbVRpdGxlOiB0aGlzLmdldEl0ZW1UaXRsZShpdGVtKSxcbiAgICAgICAgICBwZXJjZW50YWdlOiBpdGVtW3BlcmNlbnRhZ2VGaWVsZF1cbiAgICAgICAgfSkpXG4gICAgICAgICAgLnNvcnQoKGEsIGIpID0+IGEuaXRlbVRpdGxlLmxvY2FsZUNvbXBhcmUoYi5pdGVtVGl0bGUpKTtcbiAgICAgICAgY29udGVudCA9IGl0ZW1zLm1hcCgoeyBpdGVtVGl0bGUsIHBlcmNlbnRhZ2UgfSkgPT5cbiAgICAgICAgICA8QVBQZXJjZW50YWdlRmllbGRcbiAgICAgICAgICAgIGtleT17VUlVdGlscy5zdHJpbmdUb1VuaXF1ZUlkKGl0ZW1UaXRsZSl9IHRpdGxlPXtpdGVtVGl0bGV9IHZhbHVlPXtwZXJjZW50YWdlfVxuICAgICAgICAgICAgdGl0bGVDbGFzcz17cGVyY2VudFRpdGxlQ2xhc3N9IHZhbHVlQ2xhc3M9e3BlcmNlbnRWYWx1ZUNsYXNzfSB0cmFuc2xhdGU9e3RyYW5zbGF0ZX1cbiAgICAgICAgICAgIExvZ2dlcj17TG9nZ2VyfSByYXdOdW1iZXJUb0Zvcm1hdHRlZFN0cmluZz17cmF3TnVtYmVyVG9Gb3JtYXR0ZWRTdHJpbmd9IC8+XG4gICAgICAgICk7XG4gICAgICAgIGlmICh0YWJsaWZ5KSB7XG4gICAgICAgICAgY29udGVudCA9IDxUYWJsaWZ5IGNvbnRlbnQ9e2NvbnRlbnR9IGNvbHVtbnM9e2NvbHVtbnN9IExvZ2dlcj17TG9nZ2VyfSAvPjtcbiAgICAgICAgfVxuICAgICAgICBjb250ZW50ID0gKDxBUEZpZWxkXG4gICAgICAgICAga2V5PXtsaXN0RmllbGR9IHRpdGxlPXt0aXRsZX0gdmFsdWU9e2NvbnRlbnR9IHNlcGFyYXRvcj17ZmFsc2V9IGlubGluZT17dGFibGlmeSA9PT0gdHJ1ZX1cbiAgICAgICAgICBmaWVsZE5hbWVDbGFzcz17ZmllbGROYW1lQ2xhc3N9IGZpZWxkVmFsdWVDbGFzcz17ZmllbGRWYWx1ZUNsYXNzfVxuICAgICAgICAgIHRyYW5zbGF0ZT17dHJhbnNsYXRlfSBMb2dnZXI9e0xvZ2dlcn0gLz4pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29udGVudCA9ICg8QVBGaWVsZFxuICAgICAgICAgIGtleT17bGlzdEZpZWxkfSB0aXRsZT17dGl0bGV9IHZhbHVlPXt0cmFuc2xhdGUoJ05vIERhdGEnKX0gc2VwYXJhdG9yPXtmYWxzZX1cbiAgICAgICAgICBpbmxpbmU9e3RhYmxpZnkgPT09IHRydWV9XG4gICAgICAgICAgZmllbGROYW1lQ2xhc3M9e2ZpZWxkTmFtZUNsYXNzfSBmaWVsZFZhbHVlQ2xhc3M9e3N0eWxlcy5ub2RhdGF9XG4gICAgICAgICAgdHJhbnNsYXRlPXt0cmFuc2xhdGV9IExvZ2dlcj17TG9nZ2VyfSAvPik7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFQUGVyY2VudGFnZUxpc3Q7XG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBGaWVsZFBhdGhDb25zdGFudHMgZnJvbSAnLi4vLi4vLi4vdXRpbHMvRmllbGRQYXRoQ29uc3RhbnRzJztcbmltcG9ydCBGaWVsZHNNYW5hZ2VyIGZyb20gJy4uLy4uLy4uL21vZHVsZXMvZmllbGQvRmllbGRzTWFuYWdlcic7XG5pbXBvcnQgRmVhdHVyZU1hbmFnZXIgZnJvbSAnLi4vLi4vLi4vbW9kdWxlcy91dGlsL0ZlYXR1cmVNYW5hZ2VyJztcbmltcG9ydCBQb3NzaWJsZVZhbHVlc01hbmFnZXIgZnJvbSAnLi4vLi4vLi4vbW9kdWxlcy9maWVsZC9Qb3NzaWJsZVZhbHVlc01hbmFnZXInO1xuaW1wb3J0IEFQRmllbGQgZnJvbSAnLi4vY29tcG9uZW50cy9BUEZpZWxkLmpzeCc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL0FjdGl2aXR5UHJldmlldy5jc3MnO1xuaW1wb3J0IFVJVXRpbHMgZnJvbSAnLi4vLi4vLi4vdXRpbHMvVUlVdGlscyc7XG5cbmxldCBsb2dnZXIgPSBudWxsO1xuXG4vKipcbiAqIEdlbmVyaWMgYWN0aXZpdHkgcHJldmlldyBzZWN0aW9uIGNsYXNzXG4gKiBAYXV0aG9yIE5hZGVqZGEgTWFuZHJlc2N1XG4gKi9cbi8vIGNvbnN0IFNlY3Rpb24gPSAoQ29tcG9zZWRTZWN0aW9uLCBTZWN0aW9uVGl0bGUgPSBudWxsLCB1c2VFbmNhcHN1bGF0ZUhlYWRlciA9IHRydWUsIHNJRCkgPT4gY2xhc3MgZXh0ZW5kcyBDb21wb25lbnQge1xuY29uc3QgU2VjdGlvbiA9IChDb21wb3NlZFNlY3Rpb24sIHBhcmFtcykgPT4gY2xhc3MgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIHRpdGxlRGV0YWlsczogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm9iamVjdF0pLFxuICAgIHNlY3Rpb25QYXRoOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIHRpdGxlQ2xhc3M6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgZ3JvdXBDbGFzczogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBjb21wb3NlZENsYXNzOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGZpZWxkTmFtZUNsYXNzOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGZpZWxkVmFsdWVDbGFzczogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBmbVBhdGg6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgZmllbGRDbGFzczogUHJvcFR5cGVzLnN0cmluZ1xuICB9O1xuXG4gIHN0YXRpYyBjb250ZXh0VHlwZXMgPSB7XG4gICAgYWN0aXZpdHk6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgICBhY3Rpdml0eUZpZWxkc01hbmFnZXI6IFByb3BUeXBlcy5pbnN0YW5jZU9mKEZpZWxkc01hbmFnZXIpLmlzUmVxdWlyZWQsXG4gICAgY29udGFjdEZpZWxkc01hbmFnZXI6IFByb3BUeXBlcy5pbnN0YW5jZU9mKEZpZWxkc01hbmFnZXIpLFxuICAgIGNvbnRhY3RzQnlJZHM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgICBhY3Rpdml0eUZ1bmRpbmdUb3RhbHM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCwgLy8gV2lsbCBjaGFuZ2UgdGhpcyBpZiBBY3Rpdml0eUZ1bmRpbmdUb3RhbHMgaXMgbWlncmF0ZWRcbiAgICAvLyBQcm9wVHlwZXMuaW5zdGFuY2VPZihwYXJhbXMuQWN0aXZpdHlGdW5kaW5nVG90YWxzKS5pc1JlcXVpcmVkLFxuICAgIGFjdGl2aXR5V29ya3NwYWNlOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gICAgYWN0aXZpdHlXU01hbmFnZXI6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgICByZXNvdXJjZVJlZHVjZXI6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgICBMb2dnZXI6IFByb3BUeXBlcy5mdW5jLFxuICAgIHRyYW5zbGF0ZTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgRGF0ZVV0aWxzOiBQcm9wVHlwZXMuZnVuY1xuICB9O1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgdGl0bGVDbGFzczogc3R5bGVzLnNlY3Rpb25fdGl0bGVfY2xhc3MsXG4gICAgZ3JvdXBDbGFzczogc3R5bGVzLnNlY3Rpb25fZ3JvdXBfY2xhc3MsXG4gICAgZmllbGROYW1lQ2xhc3M6IHN0eWxlcy5zZWN0aW9uX2ZpZWxkX25hbWUsXG4gICAgZmllbGRWYWx1ZUNsYXNzOiBzdHlsZXMuc2VjdGlvbl9maWVsZF92YWx1ZVxuICB9O1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzLCBjb250ZXh0KSB7XG4gICAgc3VwZXIocHJvcHMsIGNvbnRleHQpO1xuICAgIGlmICh0aGlzLmNvbnRleHQpIHtcbiAgICAgIHBhcmFtcy5Mb2dnZXIgPSB0aGlzLmNvbnRleHQuTG9nZ2VyO1xuICAgICAgcGFyYW1zLkRhdGVVdGlscyA9IHRoaXMuY29udGV4dC5EYXRlVXRpbHM7XG4gICAgICBwYXJhbXMudHJhbnNsYXRlID0gdGhpcy5jb250ZXh0LnRyYW5zbGF0ZTtcbiAgICB9XG4gICAgcGFyYW1zLnVzZUVuY2Fwc3VsYXRlSGVhZGVyID0gIXBhcmFtcy51c2VFbmNhcHN1bGF0ZUhlYWRlciA/IHRydWUgOiBwYXJhbXMudXNlRW5jYXBzdWxhdGVIZWFkZXI7XG4gICAgbG9nZ2VyID0gbmV3IHBhcmFtcy5Mb2dnZXIoJ0FQIHNlY3Rpb24nKTtcbiAgICBsb2dnZXIuZGVidWcoJ2NvbnN0cnVjdG9yJyk7XG4gIH1cblxuICAvKipcbiAgICogUmVuZGVycyBmaWVsZCBkYXRhIGlmIGl0IGlzIGVuYWJsZWQgaW4gRk0uIElmIHJlbmFibGVkLCBidXQgdmFsdWUgaXMgbm90IGF2YWlsYWJsZSwgdGhlbiBpdCB3aWxsIG5vdCBiZSByZW5kZXJlZCxcbiAgICogdW5sZXNzIGl0IGlzIHJlcXVlc3RlZCB2aWEgc2hvd0lmTm90QXZhaWxhYmxlIGZsYWcuXG4gICAqIEBwYXJhbSBwYXRoIGZpZWxkIHBhdGhcbiAgICogQHBhcmFtIHNob3dJZk5vdEF2YWlsYWJsZSBmbGFnIHRvIGZvcmNpYmx5IGRpc3BsYXkgdGhlIGZpZWxkIHdoZW4gbm8gdmFsdWUgaXMgcHJvdmlkZWRcbiAgICogQHBhcmFtIE5BT3B0aW9ucyBvcHRpb25hbCBzZXQgb2YgdmFsdWVzIHRoYXQgc2hvdWxkIGJlIHRyZWF0ZWQgYXMgdW5kZWZpbmVkXG4gICAqIEBwYXJhbSBpbmxpbmUgb3B0aW9uYWwgZmxhZyB0byByZW5kZXIgbmFtZSBhbmQgdmFsdWVzIG9uIHRoZSBzYW1lIGxpbmVcbiAgICogQHBhcmFtIHBhcmVudCBvcHRpb25hbCBvYmplY3Qgd2hlcmUgd2UgbG9vayBmb3IgdGhlIHBhdGggKGluc3RlYWQgb2YgdGhlIGFjdGl2aXR5IHJvb3QpLlxuICAgKiBAcGFyYW0gZmllbGRzTWFuYWdlciAob3B0aW9uYWwpIGN1c3RvbSBmaWVsZHMgbWFuYWdlci4gQWN0aXZpdHkgRmllbGRzIE1hbmFnZXIgdXNlZCBieSBkZWZhdWx0LlxuICAgKiBAcmV0dXJuIHtudWxsfEFQRmllbGR9XG4gICAqL1xuICBidWlsZFNpbXBsZUZpZWxkKHBhdGgsIHNob3dJZk5vdEF2YWlsYWJsZSwgTkFPcHRpb25zOiBTZXQsIGlubGluZSA9IGZhbHNlLCBwYXJlbnQgPSBudWxsLCBmaWVsZHNNYW5hZ2VyID0gbnVsbFxuICAgICwgb3B0aW9ucykge1xuICAgIGNvbnN0IG9wdGlvbnNfID0gb3B0aW9ucyB8fCB7fTtcbiAgICBjb25zdCBmbVBhdGggPSBGaWVsZFBhdGhDb25zdGFudHMuQUNUSVZJVFlfRklFTERTX0ZNX1BBVEhbcGF0aF07XG4gICAgZmllbGRzTWFuYWdlciA9IGZpZWxkc01hbmFnZXIgfHwgdGhpcy5jb250ZXh0LmFjdGl2aXR5RmllbGRzTWFuYWdlcjtcbiAgICBpZiAoZmllbGRzTWFuYWdlci5pc0ZpZWxkUGF0aEVuYWJsZWQocGF0aClcbiAgICAgICYmICghZm1QYXRoIHx8IEZlYXR1cmVNYW5hZ2VyLmlzRk1TZXR0aW5nRW5hYmxlZChmbVBhdGgsIGZhbHNlKSkpIHtcbiAgICAgIGNvbnN0IHRpdGxlID0gKG9wdGlvbnNfLm5vVGl0bGUgPyAnJyA6IGZpZWxkc01hbmFnZXIuZ2V0RmllbGRMYWJlbFRyYW5zbGF0aW9uKHBhdGgpKTtcbiAgICAgIGxldCB2YWx1ZVBhdGggPSBwYXRoO1xuICAgICAgaWYgKHBhcmVudCkge1xuICAgICAgICBjb25zdCBmaWVsZFBhdGhQYXJ0cyA9IHBhdGguc3BsaXQoJ34nKTtcbiAgICAgICAgdmFsdWVQYXRoID0gZmllbGRQYXRoUGFydHNbZmllbGRQYXRoUGFydHMubGVuZ3RoIC0gMV07XG4gICAgICB9XG4gICAgICBjb25zdCBhbHRlcm5hdGVQYXRoID0gRmllbGRQYXRoQ29uc3RhbnRzLkFMVEVSTkFURV9WQUxVRV9QQVRIW3ZhbHVlUGF0aF07XG4gICAgICBsZXQgdmFsdWUgPSBmaWVsZHNNYW5hZ2VyLmdldFZhbHVlKHBhcmVudCB8fCB0aGlzLmNvbnRleHQuYWN0aXZpdHksIHZhbHVlUGF0aCxcbiAgICAgICAgUG9zc2libGVWYWx1ZXNNYW5hZ2VyLmdldE9wdGlvblRyYW5zbGF0aW9uKTtcbiAgICAgIGlmICgodmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09IHVuZGVmaW5lZCkgJiYgYWx0ZXJuYXRlUGF0aCkge1xuICAgICAgICB2YWx1ZSA9IGZpZWxkc01hbmFnZXIuZ2V0VmFsdWUodGhpcy5jb250ZXh0LmFjdGl2aXR5LCBhbHRlcm5hdGVQYXRoLFxuICAgICAgICAgIFBvc3NpYmxlVmFsdWVzTWFuYWdlci5nZXRPcHRpb25UcmFuc2xhdGlvbik7XG4gICAgICB9XG4gICAgICBjb25zdCBmaWVsZERlZiA9IGZpZWxkc01hbmFnZXIuZ2V0RmllbGREZWYocGF0aCk7XG4gICAgICBpZiAoZmllbGREZWYuZmllbGRfdHlwZSA9PT0gRmllbGRQYXRoQ29uc3RhbnRzLkZJRUxEX1RZUEVfREFURSkge1xuICAgICAgICB2YWx1ZSA9IHBhcmFtcy5EYXRlVXRpbHMuY3JlYXRlRm9ybWF0dGVkRGF0ZSh2YWx1ZSk7XG4gICAgICB9IGVsc2UgaWYgKGZpZWxkRGVmLmZpZWxkX3R5cGUgPT09IEZpZWxkUGF0aENvbnN0YW50cy5GSUVMRF9UWVBFX1RJTUVTVEFNUCkge1xuICAgICAgICAvLyBtYXRjaGluZyBBUCBvbmxpbmUgdG8gZm9ybWF0IGFzIGRhdGUgZm9yIG5vd1xuICAgICAgICB2YWx1ZSA9IHBhcmFtcy5EYXRlVXRpbHMuY3JlYXRlRm9ybWF0dGVkRGF0ZSh2YWx1ZSk7XG4gICAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpICYmICF2YWx1ZS5sZW5ndGgpIHtcbiAgICAgICAgdmFsdWUgPSBudWxsO1xuICAgICAgfVxuICAgICAgdmFsdWUgPSBOQU9wdGlvbnMgJiYgTkFPcHRpb25zLmhhcyh2YWx1ZSkgPyBudWxsIDogdmFsdWU7XG5cbiAgICAgIGNvbnN0IHJlID0gL15cXHM/JC87IC8vIGNoZWNrIGZvciB3aGl0ZXNwYWNlXG4gICAgICBpZiAocmUudGVzdCh2YWx1ZSkpIHZhbHVlID0gdmFsdWUudHJpbSgpOyAvLyBjaGVjayBmb3Igd2hpdGVzcGFjZVxuICAgICAgaWYgKHZhbHVlID09PSAnJyB8fCB2YWx1ZSA9PT0gbnVsbCkge1xuICAgICAgICB2YWx1ZSA9IHBhcmFtcy50cmFuc2xhdGUoJ05vIERhdGEnKTtcbiAgICAgIH1cbiAgICAgIGlmIChzaG93SWZOb3RBdmFpbGFibGUgPT09IHRydWUgfHwgKHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUgIT09IG51bGwpKSB7XG4gICAgICAgIGNvbnN0IHVzZUlubmVySFRNTCA9IEZpZWxkUGF0aENvbnN0YW50cy5SSUNIX1RFWFRfRklFTERTLmhhcyhwYXRoKTtcbiAgICAgICAgcmV0dXJuICg8QVBGaWVsZFxuICAgICAgICAgIGtleT17VUlVdGlscy5zdHJpbmdUb1VuaXF1ZUlkKHBhdGgpfSB0aXRsZT17dGl0bGV9IHZhbHVlPXt2YWx1ZX0gdXNlSW5uZXJIVE1MPXt1c2VJbm5lckhUTUx9XG4gICAgICAgICAgaW5saW5lPXtpbmxpbmV9XG4gICAgICAgICAgc2VwYXJhdG9yPXtmYWxzZX1cbiAgICAgICAgICBmaWVsZENsYXNzPXtvcHRpb25zXy5maWVsZENsYXNzIHx8IHRoaXMucHJvcHMuZmllbGRDbGFzc31cbiAgICAgICAgICBmaWVsZE5hbWVDbGFzcz17dGhpcy5wcm9wcy5maWVsZE5hbWVDbGFzc31cbiAgICAgICAgICBmaWVsZFZhbHVlQ2xhc3M9e29wdGlvbnNfLmZpZWxkVmFsdWVDbGFzcyB8fCB0aGlzLnByb3BzLmZpZWxkVmFsdWVDbGFzc31cbiAgICAgICAgICB0cmFuc2xhdGU9e3BhcmFtcy50cmFuc2xhdGV9IExvZ2dlcj17cGFyYW1zLkxvZ2dlcn0gLz4pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5zZWN0aW9uUGF0aCAmJiAhdGhpcy5jb250ZXh0LmFjdGl2aXR5RmllbGRzTWFuYWdlci5pc0ZpZWxkUGF0aEVuYWJsZWQodGhpcy5wcm9wcy5zZWN0aW9uUGF0aCkpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBpZiAodGhpcy5wcm9wcy5mbVBhdGggJiYgIUZlYXR1cmVNYW5hZ2VyLmlzRk1TZXR0aW5nRW5hYmxlZCh0aGlzLnByb3BzLmZtUGF0aCkpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBjb25zdCBjb21wb3NlZFNlY3Rpb24gPSAoPENvbXBvc2VkU2VjdGlvblxuICAgICAgey4uLnRoaXMucHJvcHN9IHsuLi50aGlzLnN0YXRlfSB7Li4udGhpcy5jb250ZXh0fSBidWlsZFNpbXBsZUZpZWxkPXt0aGlzLmJ1aWxkU2ltcGxlRmllbGQuYmluZCh0aGlzKX0gLz4pO1xuICAgIGlmIChwYXJhbXMudXNlRW5jYXBzdWxhdGVIZWFkZXIgPT09IGZhbHNlKSB7XG4gICAgICByZXR1cm4gY29tcG9zZWRTZWN0aW9uO1xuICAgIH1cbiAgICAvLyBUT0RPIGl0ZXJhdGlvbiAyKyBzZWN0aW9uIHRvZ2dsZSAoVERDIGJhc2VkIG9uIGRlc2dpbiArIFZHKVxuICAgIHJldHVybiAoPGRpdiBrZXk9e3BhcmFtcy5TZWN0aW9uVGl0bGV9IGNsYXNzTmFtZT17dGhpcy5wcm9wcy5ncm91cENsYXNzfSBpZD17cGFyYW1zLnNJRH0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17dGhpcy5wcm9wcy50aXRsZUNsYXNzfT5cbiAgICAgICAgPHNwYW4+e3BhcmFtcy50cmFuc2xhdGUocGFyYW1zLlNlY3Rpb25UaXRsZSl9IDwvc3Bhbj48c3Bhbj57dGhpcy5wcm9wcy50aXRsZURldGFpbHN9PC9zcGFuPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17dGhpcy5wcm9wcy5jb21wb3NlZENsYXNzfT5cbiAgICAgICAge2NvbXBvc2VkU2VjdGlvbn1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2Pik7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNlY3Rpb247XG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBBY3Rpdml0eUNvbnN0YW50cyBmcm9tICcuLi8uLi8uLi9tb2R1bGVzL3V0aWwvQWN0aXZpdHlDb25zdGFudHMnO1xuaW1wb3J0IEZlYXR1cmVNYW5hZ2VyIGZyb20gJy4uLy4uLy4uL21vZHVsZXMvdXRpbC9GZWF0dXJlTWFuYWdlcic7XG5pbXBvcnQgVmFsdWVDb25zdGFudHMgZnJvbSAnLi4vLi4vLi4vdXRpbHMvVmFsdWVDb25zdGFudHMnO1xuaW1wb3J0IEZlYXR1cmVNYW5hZ2VyQ29uc3RhbnRzIGZyb20gJy4uLy4uLy4uL21vZHVsZXMvdXRpbC9GZWF0dXJlTWFuYWdlckNvbnN0YW50cyc7XG5pbXBvcnQgRmllbGRQYXRoQ29uc3RhbnRzIGZyb20gJy4uLy4uLy4uL3V0aWxzL0ZpZWxkUGF0aENvbnN0YW50cyc7XG5cbmltcG9ydCBGaWVsZHNNYW5hZ2VyIGZyb20gJy4uLy4uLy4uL21vZHVsZXMvZmllbGQvRmllbGRzTWFuYWdlcic7XG5pbXBvcnQgUG9zc2libGVWYWx1ZXNNYW5hZ2VyIGZyb20gJy4uLy4uLy4uL21vZHVsZXMvZmllbGQvUG9zc2libGVWYWx1ZXNNYW5hZ2VyJztcbmltcG9ydCBBUEZpZWxkIGZyb20gJy4uL2NvbXBvbmVudHMvQVBGaWVsZC5qc3gnO1xuaW1wb3J0IFNlY3Rpb24gZnJvbSAnLi9TZWN0aW9uLmpzeCc7XG5cblxubGV0IGxvZ2dlciA9IG51bGw7XG5cbi8qIGVzbGludC1kaXNhYmxlIGNsYXNzLW1ldGhvZHMtdXNlLXRoaXMgKi9cblxuLyoqXG4gKiBGdW5kaW5nIFRvdGFscyBTdW1tYXJ5IHNlY3Rpb25cbiAqIEBhdXRob3IgTmFkZWpkYSBNYW5kcmVzY3VcbiAqL1xuY2xhc3MgRnVuZGluZ1N1bW1hcnkgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGFjdGl2aXR5RmllbGRzTWFuYWdlcjogUHJvcFR5cGVzLmluc3RhbmNlT2YoRmllbGRzTWFuYWdlcikuaXNSZXF1aXJlZCxcbiAgICBhY3Rpdml0eUZ1bmRpbmdUb3RhbHM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCwgLy8gUHJvcFR5cGVzLmluc3RhbmNlT2YoQWN0aXZpdHlGdW5kaW5nVG90YWxzKS5pc1JlcXVpcmVkLFxuICAgIGZpZWxkTmFtZUNsYXNzOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGZpZWxkVmFsdWVDbGFzczogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBMb2dnZXI6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgdHJhbnNsYXRlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIERhdGVVdGlsczogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZFxuICB9O1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIGNvbnN0IHsgTG9nZ2VyIH0gPSB0aGlzLnByb3BzO1xuICAgIGxvZ2dlciA9IG5ldyBMb2dnZXIoJ0Z1bmRpbmcgc3VtbWFyeScpO1xuICAgIGxvZ2dlci5kZWJ1ZygnY29uc3RydWN0b3InKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBCdWlsZHMgXCJGdW5kaW5nIEluZm9ybWF0aW9uXCIgc2VjdGlvbiBieSBmb2xsb3dpbmcgQU1QIEFjdGl2aXR5IFByZXZpZXcgcnVsZXNcbiAgICogQHJldHVybiB7U2VjdGlvbn1cbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9idWlsZEZ1bmRpbmdJbmZvcm1hdGlvbigpIHtcbiAgICBjb25zdCBtZWFzdXJlc1RvdGFscyA9IHt9O1xuICAgIGNvbnN0IHsgYWN0aXZpdHlGaWVsZHNNYW5hZ2VyIH0gPSB0aGlzLnByb3BzO1xuICAgIGxldCBhY0VuYWJsZWQgPSBmYWxzZTtcbiAgICBsZXQgYWRFbmFibGVkID0gZmFsc2U7XG4gICAgLy8gQ29tbWl0bWVudHMsIERpc2J1cnNlbWVudHMsIEV4cGVuZGl0dXJlc1xuICAgIEZpZWxkUGF0aENvbnN0YW50cy5UUkFOU0FDVElPTl9UWVBFUy5mb3JFYWNoKHRyblR5cGUgPT4ge1xuICAgICAgaWYgKGFjdGl2aXR5RmllbGRzTWFuYWdlci5pc0ZpZWxkUGF0aEJ5UGFydHNFbmFibGVkKEFjdGl2aXR5Q29uc3RhbnRzLkZVTkRJTkdTLCB0cm5UeXBlKSkge1xuICAgICAgICBjb25zdCB0cm5BZGpPcHRQYXRoID0gYCR7QWN0aXZpdHlDb25zdGFudHMuRlVORElOR1N9fiR7dHJuVHlwZX1+JHtBY3Rpdml0eUNvbnN0YW50cy5BREpVU1RNRU5UX1RZUEV9YDtcbiAgICAgICAgY29uc3QgYXRPcHRpb25zID0gYWN0aXZpdHlGaWVsZHNNYW5hZ2VyLmdldFBvc3NpYmxlVmFsdWVzT3B0aW9ucyh0cm5BZGpPcHRQYXRoKTtcbiAgICAgICAgYWNFbmFibGVkID0gYWNFbmFibGVkIHx8XG4gICAgICAgICAgKHRyblR5cGUgPT09IEFjdGl2aXR5Q29uc3RhbnRzLkNPTU1JVE1FTlRTICYmICEhYXRPcHRpb25zLmZpbmQobyA9PiBvLnZhbHVlID09PSBWYWx1ZUNvbnN0YW50cy5BQ1RVQUwpKTtcbiAgICAgICAgYWRFbmFibGVkID0gYWRFbmFibGVkIHx8XG4gICAgICAgICAgKHRyblR5cGUgPT09IEFjdGl2aXR5Q29uc3RhbnRzLkRJU0JVUlNFTUVOVFMgJiYgISFhdE9wdGlvbnMuZmluZChvID0+IG8udmFsdWUgPT09IFZhbHVlQ29uc3RhbnRzLkFDVFVBTCkpO1xuICAgICAgICAvLyBBY3R1YWwsIFBsYW5uZWRcbiAgICAgICAgYXRPcHRpb25zLmZvckVhY2goYWRqVHlwZSA9PiB7XG4gICAgICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLnByb3BzLmFjdGl2aXR5RnVuZGluZ1RvdGFscy5nZXRUb3RhbHMoYWRqVHlwZS5pZCwgdHJuVHlwZSwge30pO1xuICAgICAgICAgIG1lYXN1cmVzVG90YWxzW2Ake2FkalR5cGUudmFsdWV9ICR7dHJuVHlwZX1gXSA9IHZhbHVlO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICAvLyBPdGhlciBtZWFzdXJlczogXCJVbmFsbG9jYXRlZCBEaXNidXJzZW1lbnRzXCIuXG4gICAgY29uc3QgYWRqVHlwZUFjdHVhbFRybiA9IHRoaXMucHJvcHMuYWN0aXZpdHlGaWVsZHNNYW5hZ2VyLmdldFZhbHVlKEZpZWxkUGF0aENvbnN0YW50cy5ESVNCVVJTRU1FTlRTX1BBVEgsXG4gICAgICBWYWx1ZUNvbnN0YW50cy5BQ1RVQUwsXG4gICAgICBQb3NzaWJsZVZhbHVlc01hbmFnZXIuZ2V0T3B0aW9uVHJhbnNsYXRpb24pO1xuICAgIGNvbnN0IGV4cGVuZGl0dXJlc0FyZUVuYWJsZWQgPSBhY3Rpdml0eUZpZWxkc01hbmFnZXIuaXNGaWVsZFBhdGhCeVBhcnRzRW5hYmxlZChBY3Rpdml0eUNvbnN0YW50cy5GVU5ESU5HUyxcbiAgICAgIEFjdGl2aXR5Q29uc3RhbnRzLkVYUEVORElUVVJFUyk7XG4gICAgaWYgKGFkalR5cGVBY3R1YWxUcm4gJiYgZXhwZW5kaXR1cmVzQXJlRW5hYmxlZCkge1xuICAgICAgY29uc3QgdWIgPSBWYWx1ZUNvbnN0YW50cy5VTkFMTE9DQVRFRF9ESVNCVVJTRU1FTlRTO1xuICAgICAgbWVhc3VyZXNUb3RhbHNbdWJdID0gdGhpcy5wcm9wcy5hY3Rpdml0eUZ1bmRpbmdUb3RhbHMuZ2V0VG90YWxzKHViLCB7fSk7XG4gICAgfVxuICAgIC8vIE90aGVyIG1lYXN1cmVzOiBcIlRvdGFsIE1URUYgUHJvamVjdGlvbnNcIi5cbiAgICBpZiAoRmVhdHVyZU1hbmFnZXIuaXNGTVNldHRpbmdFbmFibGVkKEZlYXR1cmVNYW5hZ2VyQ29uc3RhbnRzLk1URUZfUFJPSkVDVElPTlMpKSB7XG4gICAgICBtZWFzdXJlc1RvdGFsc1tWYWx1ZUNvbnN0YW50cy5NVEVGX1BST0pFQ1RJT05TXSA9IHRoaXMucHJvcHMuYWN0aXZpdHlGdW5kaW5nVG90YWxzLmdldE1URUZUb3RhbCgpO1xuICAgIH1cbiAgICAvLyBPdGhlciBtZWFzdXJlczogXCJEZWxpdmVyeSByYXRlXCIuXG4gICAgaWYgKEZlYXR1cmVNYW5hZ2VyLmlzRk1TZXR0aW5nRW5hYmxlZChGZWF0dXJlTWFuYWdlckNvbnN0YW50cy5BQ1RJVklUWV9ERUxJVkVSWV9SQVRFKSkge1xuICAgICAgY29uc3QgYWN0dWFsQ29tbWl0bWVudHMgPSBtZWFzdXJlc1RvdGFsc1tgJHtWYWx1ZUNvbnN0YW50cy5BQ1RVQUx9ICR7QWN0aXZpdHlDb25zdGFudHMuQ09NTUlUTUVOVFN9YF07XG4gICAgICBjb25zdCBhY3R1YWxEaXNidXJzZW1lbnRzID0gbWVhc3VyZXNUb3RhbHNbYCR7VmFsdWVDb25zdGFudHMuQUNUVUFMfSAke0FjdGl2aXR5Q29uc3RhbnRzLkRJU0JVUlNFTUVOVFN9YF07XG4gICAgICBsZXQgdmFsdWUgPSAwO1xuICAgICAgaWYgKGFjdHVhbENvbW1pdG1lbnRzICYmIGFjdHVhbERpc2J1cnNlbWVudHMgJiYgYWNFbmFibGVkICYmIGFkRW5hYmxlZCkge1xuICAgICAgICB2YWx1ZSA9IChhY3R1YWxEaXNidXJzZW1lbnRzIC8gYWN0dWFsQ29tbWl0bWVudHMpICogMTAwO1xuICAgICAgfVxuICAgICAgbWVhc3VyZXNUb3RhbHNbVmFsdWVDb25zdGFudHMuREVMSVZFUllfUkFURV0gPSB2YWx1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5fYnVpbGRUb3RhbEZpZWxkcyhtZWFzdXJlc1RvdGFscyk7XG4gIH1cblxuICBfYnVpbGRUb3RhbEZpZWxkcyhtZWFzdXJlc1RvdGFscykge1xuICAgIGNvbnN0IHsgdHJhbnNsYXRlIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IG1lYXN1cmVzT3JkZXIgPSBbXG4gICAgICB7IHRybjogVmFsdWVDb25zdGFudHMuQUNUVUFMX0NPTU1JVE1FTlRTLCB0b3RhbDogdHJ1ZSB9LFxuICAgICAgeyB0cm46IFZhbHVlQ29uc3RhbnRzLlBMQU5ORURfQ09NTUlUTUVOVFMsIHRvdGFsOiB0cnVlIH0sXG4gICAgICB7IHRybjogVmFsdWVDb25zdGFudHMuQUNUVUFMX0RJU0JVUlNFTUVOVFMsIHRvdGFsOiB0cnVlIH0sXG4gICAgICB7IHRybjogVmFsdWVDb25zdGFudHMuUExBTk5FRF9ESVNCVVJTRU1FTlRTLCB0b3RhbDogdHJ1ZSB9LFxuICAgICAgeyB0cm46IFZhbHVlQ29uc3RhbnRzLkFDVFVBTF9FWFBFTkRJVFVSRVMsIHRvdGFsOiB0cnVlIH0sXG4gICAgICB7IHRybjogVmFsdWVDb25zdGFudHMuVU5BTExPQ0FURURfRElTQlVSU0VNRU5UUywgdG90YWw6IGZhbHNlIH0sXG4gICAgICB7IHRybjogVmFsdWVDb25zdGFudHMuUExBTk5FRF9FWFBFTkRJVFVSRVMsIHRvdGFsOiB0cnVlIH0sXG4gICAgICB7IHRybjogVmFsdWVDb25zdGFudHMuTVRFRl9QUk9KRUNUSU9OUywgdG90YWw6IHRydWUgfSxcbiAgICAgIHsgdHJuOiBWYWx1ZUNvbnN0YW50cy5ERUxJVkVSWV9SQVRFLCB0b3RhbDogZmFsc2UsIGlzUGVyY2VudGFnZTogdHJ1ZSB9XTtcbiAgICBjb25zdCBmdW5kaW5nSW5mb1N1bW1hcnkgPSBbXTtcbiAgICBtZWFzdXJlc09yZGVyLmZvckVhY2gobWVhc3VyZSA9PiB7XG4gICAgICBsZXQgdmFsdWUgPSBtZWFzdXJlc1RvdGFsc1ttZWFzdXJlLnRybl07XG4gICAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICB2YWx1ZSA9IHRoaXMucHJvcHMuYWN0aXZpdHlGdW5kaW5nVG90YWxzLmZvcm1hdEFtb3VudCh2YWx1ZSwgbWVhc3VyZS5pc1BlcmNlbnRhZ2UpO1xuICAgICAgICBsZXQgdGl0bGUgPSBtZWFzdXJlLnRybjtcbiAgICAgICAgaWYgKG1lYXN1cmUudG90YWwpIHtcbiAgICAgICAgICB0aXRsZSA9IGBUb3RhbCAke3RpdGxlfWA7XG4gICAgICAgIH1cbiAgICAgICAgdGl0bGUgPSB0cmFuc2xhdGUodGl0bGUpO1xuICAgICAgICBjb25zdCBrZXkgPSBgU3VtbWFyeS1Ub3RhbC0ke21lYXN1cmUudHJufWA7XG4gICAgICAgIGZ1bmRpbmdJbmZvU3VtbWFyeS5wdXNoKDxBUEZpZWxkXG4gICAgICAgICAga2V5PXtrZXl9IHRpdGxlPXt0aXRsZX0gdmFsdWU9e3ZhbHVlfSBzZXBhcmF0b3I9e2ZhbHNlfVxuICAgICAgICAgIGZpZWxkTmFtZUNsYXNzPXt0aGlzLnByb3BzLmZpZWxkTmFtZUNsYXNzfSBmaWVsZFZhbHVlQ2xhc3M9e3RoaXMucHJvcHMuZmllbGRWYWx1ZUNsYXNzfVxuICAgICAgICAgIHRyYW5zbGF0ZT17dHJhbnNsYXRlfSBMb2dnZXI9e3RoaXMucHJvcHMuTG9nZ2VyfSAvPik7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGZ1bmRpbmdJbmZvU3VtbWFyeTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gPGRpdj57dGhpcy5fYnVpbGRGdW5kaW5nSW5mb3JtYXRpb24oKX08L2Rpdj47XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2VjdGlvbihGdW5kaW5nU3VtbWFyeSwge1xuICBTZWN0aW9uVGl0bGU6ICdmdW5kaW5nSW5mb3JtYXRpb24nXG59KTtcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IEFjdGl2aXR5Q29uc3RhbnRzIGZyb20gJy4uLy4uLy4uL21vZHVsZXMvdXRpbC9BY3Rpdml0eUNvbnN0YW50cyc7XG5pbXBvcnQgVmFsdWVDb25zdGFudHMgZnJvbSAnLi4vLi4vLi4vdXRpbHMvVmFsdWVDb25zdGFudHMnO1xuaW1wb3J0IEZpZWxkc01hbmFnZXIgZnJvbSAnLi4vLi4vLi4vbW9kdWxlcy9maWVsZC9GaWVsZHNNYW5hZ2VyJztcbmltcG9ydCBTZWN0aW9uIGZyb20gJy4vU2VjdGlvbi5qc3gnO1xuXG5sZXQgbG9nZ2VyID0gbnVsbDtcblxuLyoqXG4gKiBJZGVudGlmaWNhdGlvbiBzZWN0aW9uXG4gKiBAYXV0aG9yIE5hZGVqZGEgTWFuZHJlc2N1XG4gKi9cbmNsYXNzIEFQSWRlbnRpZmljYXRpb24gZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGJ1aWxkU2ltcGxlRmllbGQ6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgYWN0aXZpdHlGaWVsZHNNYW5hZ2VyOiBQcm9wVHlwZXMuaW5zdGFuY2VPZihGaWVsZHNNYW5hZ2VyKS5pc1JlcXVpcmVkLFxuICAgIGFjdGl2aXR5OiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gICAgTG9nZ2VyOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkXG4gIH07XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgY29uc3QgeyBMb2dnZXIgfSA9IHRoaXMucHJvcHM7XG4gICAgbG9nZ2VyID0gbmV3IExvZ2dlcignQVAgSWRlbnRpZmljYXRpb24nKTtcbiAgICBsb2dnZXIuZGVidWcoJ2NvbnN0cnVjdG9yJyk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBidWlsZFNpbXBsZUZpZWxkIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IGZpZWxkUGF0aHMgPSBbQWN0aXZpdHlDb25zdGFudHMuU1RBVFVTX1JFQVNPTiwgQWN0aXZpdHlDb25zdGFudHMuVFlQRV9PRl9DT09QRVJBVElPTixcbiAgICAgIEFjdGl2aXR5Q29uc3RhbnRzLlRZUEVfT0ZfSU1QTEVNRU5UQVRJT04sIEFjdGl2aXR5Q29uc3RhbnRzLk1PREFMSVRJRVMsIEFjdGl2aXR5Q29uc3RhbnRzLk9CSkVDVElWRSxcbiAgICAgIEFjdGl2aXR5Q29uc3RhbnRzLkRFU0NSSVBUSU9OLCBBY3Rpdml0eUNvbnN0YW50cy5QUk9KRUNUX0NPTU1FTlRTLCBBY3Rpdml0eUNvbnN0YW50cy5SRVNVTFRTLFxuICAgICAgQWN0aXZpdHlDb25zdGFudHMuTEVTU09OU19MRUFSTkVELCBBY3Rpdml0eUNvbnN0YW50cy5QUk9KRUNUX0lNUEFDVCwgQWN0aXZpdHlDb25zdGFudHMuQUNUSVZJVFlfU1VNTUFSWSxcbiAgICAgIEFjdGl2aXR5Q29uc3RhbnRzLkNPTkRJVElPTkFMSVRJRVMsIEFjdGl2aXR5Q29uc3RhbnRzLlBST0pFQ1RfTUFOQUdFTUVOVCxcbiAgICAgIEFjdGl2aXR5Q29uc3RhbnRzLkJVREdFVF9DT0RFX1BST0pFQ1RfSUQsIEFjdGl2aXR5Q29uc3RhbnRzLkFfQ19DSEFQVEVSLCBBY3Rpdml0eUNvbnN0YW50cy5DUklTX05VTUJFUixcbiAgICAgIEFjdGl2aXR5Q29uc3RhbnRzLkFDVElWSVRZX0JVREdFVCwgQWN0aXZpdHlDb25zdGFudHMuR09WRVJOTUVOVF9BR1JFRU1FTlRfTlVNQkVSLFxuICAgICAgQWN0aXZpdHlDb25zdGFudHMuR09WRVJOTUVOVF9BUFBST1ZBTF9QUk9DRURVUkVTLCBBY3Rpdml0eUNvbnN0YW50cy5KT0lOVF9DUklURVJJQSxcbiAgICAgIEFjdGl2aXR5Q29uc3RhbnRzLkhVTUFOSVRBUklBTl9BSURdO1xuICAgIC8vIFNob3cgYnVkZ2V0IGV4dHJhcyBmaWVsZHMgbGlrZSBtaW5pc3RyeV9jb2RlLCBldGMgb25seSB3aGVuIGFjdGl2aXR5X2J1ZGdldCBpcyBlbmFibGVkIGFuZCBoYXMgdmFsdWUgJ09uIEJ1ZGdldCcuXG4gICAgaWYgKHRoaXMucHJvcHMuYWN0aXZpdHlGaWVsZHNNYW5hZ2VyLmlzRmllbGRQYXRoRW5hYmxlZChBY3Rpdml0eUNvbnN0YW50cy5BQ1RJVklUWV9CVURHRVQpXG4gICAgICAmJiB0aGlzLnByb3BzLmFjdGl2aXR5W0FjdGl2aXR5Q29uc3RhbnRzLkFDVElWSVRZX0JVREdFVF1cbiAgICAgICYmIHRoaXMucHJvcHMuYWN0aXZpdHlbQWN0aXZpdHlDb25zdGFudHMuQUNUSVZJVFlfQlVER0VUXS52YWx1ZSA9PT0gVmFsdWVDb25zdGFudHMuT05fQlVER0VUKSB7XG4gICAgICBmaWVsZFBhdGhzLnB1c2goQWN0aXZpdHlDb25zdGFudHMuSU5ESVJFQ1RfT05fQlVER0VUKTtcbiAgICAgIGZpZWxkUGF0aHMucHVzaChBY3Rpdml0eUNvbnN0YW50cy5GWSk7XG4gICAgICBmaWVsZFBhdGhzLnB1c2goQWN0aXZpdHlDb25zdGFudHMuTUlOSVNUUllfQ09ERSk7XG4gICAgICBmaWVsZFBhdGhzLnB1c2goQWN0aXZpdHlDb25zdGFudHMuUFJPSkVDVF9DT0RFKTtcbiAgICB9XG4gICAgZmllbGRQYXRocy5wdXNoKC4uLltBY3Rpdml0eUNvbnN0YW50cy5GSU5BTkNJQUxfSU5TVFJVTUVOVCwgQWN0aXZpdHlDb25zdGFudHMuSUFUSV9JREVOVElGSUVSXSk7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIHtmaWVsZFBhdGhzLm1hcChmaWVsZFBhdGggPT4gYnVpbGRTaW1wbGVGaWVsZChmaWVsZFBhdGgsIHRydWUpKX1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2VjdGlvbihBUElkZW50aWZpY2F0aW9uLCB7IFNlY3Rpb25UaXRsZTogJ0lkZW50aWZpY2F0aW9uJyxcbiAgdXNlRW5jYXBzdWxhdGVIZWFkZXI6IHRydWUsXG4gIHNJRDogJ0FQSWRlbnRpZmljYXRpb24nXG59KTtcbiIsIi8qKiBXUyB2YWxpZGF0aW9uICoqL1xuY29uc3QgV1NfVkFMSURBVElPTl9PRkYgPSAndmFsaWRhdGlvbk9mZic7XG5jb25zdCBXU19WQUxJREFUSU9OX0FMTF9FRElUID0gJ2FsbEVkaXRzJztcbmNvbnN0IFdTX1ZBTElEQVRJT05fTkVXX09OTFkgPSAnbmV3T25seSc7XG5jb25zdCBXU19WQUxJREFUSU9OX0ZJRUxEID0gJ3ZhbGlkYXRpb24nO1xuY29uc3QgQ1JPU1NfVEVBTV9WQUxJREFUSU9OID0gJ2lzLWNyb3NzLXRlYW0tdmFsaWRhdGlvbic7XG5jb25zdCBXU19BQ0NFU1NfVFlQRV9NQU5BR0VNRU5UID0gJ01hbmFnZW1lbnQnO1xuY29uc3QgV1NfQUNDRVNTX1RZUEVfVEVBTSA9ICdUZWFtJztcblxuLyoqIFJvbGVzIChmcm9tIFdvcmtzcGFjZU1lbWJlclJvbGVDb25zdGFudHMuamF2YSkgKiovXG5jb25zdCBST0xFX1RFQU1fTUVNQkVSX1dTX01BTkFHRVIgPSAxO1xuY29uc3QgUk9MRV9URUFNX01FTUJFUl9XU19NRU1CRVIgPSAyO1xuY29uc3QgUk9MRV9URUFNX01FTUJFUl9XU19BUFBST1ZFUiA9IDM7XG5cbi8qKiBPdGhlciBmaWVsZHMgKiovXG5jb25zdCBXT1JLU1BBQ0VfSUQgPSAnd29ya3NwYWNlLWlkJztcbmNvbnN0IFJPTEVfSUQgPSAncm9sZS1pZCc7XG5jb25zdCBXT1JLU1BBQ0VfTEVBRF9JRCA9ICd3b3Jrc3BhY2UtbGVhZC1pZCc7XG5jb25zdCBBQ0NFU1NfVFlQRSA9ICdhY2Nlc3MtdHlwZSc7XG5jb25zdCBJU19DT01QVVRFRCA9ICdpcy1jb21wdXRlZCc7XG5jb25zdCBJU19QUklWQVRFID0gJ2lzLXByaXZhdGUnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5mcmVlemUoe1xuICBXU19WQUxJREFUSU9OX09GRixcbiAgV1NfVkFMSURBVElPTl9BTExfRURJVCxcbiAgV1NfVkFMSURBVElPTl9ORVdfT05MWSxcbiAgV1NfVkFMSURBVElPTl9GSUVMRCxcbiAgQ1JPU1NfVEVBTV9WQUxJREFUSU9OLFxuICBXU19BQ0NFU1NfVFlQRV9NQU5BR0VNRU5ULFxuICBXU19BQ0NFU1NfVFlQRV9URUFNLFxuICBST0xFX1RFQU1fTUVNQkVSX1dTX01BTkFHRVIsXG4gIFJPTEVfVEVBTV9NRU1CRVJfV1NfTUVNQkVSLFxuICBST0xFX1RFQU1fTUVNQkVSX1dTX0FQUFJPVkVSLFxuICBXT1JLU1BBQ0VfSUQsXG4gIFJPTEVfSUQsXG4gIFdPUktTUEFDRV9MRUFEX0lELFxuICBBQ0NFU1NfVFlQRSxcbiAgSVNfQ09NUFVURUQsXG4gIElTX1BSSVZBVEUsXG59KTtcbiIsIi8qIFVzZXIgY29uc3RhbnRzICovXG5jb25zdCBGSVJTVF9OQU1FID0gJ2ZpcnN0LW5hbWUnO1xuY29uc3QgTEFTVF9OQU1FID0gJ2xhc3QtbmFtZSc7XG5jb25zdCBFTUFJTCA9ICdlbWFpbCc7XG5cbi8qIFRlYW0gbWVtYmVyIGNvbnN0YW50cyAqL1xuY29uc3QgVEVBTV9NRU1CRVJfVVNFUl9JRCA9ICd1c2VyLWlkJztcblxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuZnJlZXplKHtcbiAgRklSU1RfTkFNRSxcbiAgTEFTVF9OQU1FLFxuICBFTUFJTCxcbiAgVEVBTV9NRU1CRVJfVVNFUl9JRCxcbn0pO1xuXG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBBY3Rpdml0eUNvbnN0YW50cyBmcm9tICcuLi8uLi8uLi9tb2R1bGVzL3V0aWwvQWN0aXZpdHlDb25zdGFudHMnO1xuaW1wb3J0IEZpZWxkc01hbmFnZXIgZnJvbSAnLi4vLi4vLi4vbW9kdWxlcy9maWVsZC9GaWVsZHNNYW5hZ2VyJztcbmltcG9ydCBQb3NzaWJsZVZhbHVlc01hbmFnZXIgZnJvbSAnLi4vLi4vLi4vbW9kdWxlcy9maWVsZC9Qb3NzaWJsZVZhbHVlc01hbmFnZXInO1xuaW1wb3J0IEFQRmllbGQgZnJvbSAnLi4vY29tcG9uZW50cy9BUEZpZWxkLmpzeCc7XG5pbXBvcnQgU2VjdGlvbiBmcm9tICcuL1NlY3Rpb24uanN4JztcbmltcG9ydCBXb3Jrc3BhY2VDb25zdGFudHMgZnJvbSAnLi4vLi4vLi4vdXRpbHMvY29uc3RhbnRzL1dvcmtzcGFjZUNvbnN0YW50cyc7XG5pbXBvcnQgVXNlckNvbnN0YW50cyBmcm9tICcuLi8uLi8uLi91dGlscy9jb25zdGFudHMvVXNlckNvbnN0YW50cyc7XG5cbmxldCBsb2dnZXIgPSBudWxsO1xuXG4vKipcbiAqIEFkZGl0aW9uYWwgSW5mbyBzdW1tYXJ5IHNlY3Rpb25cbiAqIEBhdXRob3IgTmFkZWpkYSBNYW5kcmVjc3VcbiAqL1xuY2xhc3MgQWRkaXRpb25hbEluZm8gZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGFjdGl2aXR5OiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gICAgYWN0aXZpdHlXb3Jrc3BhY2U6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgICBhY3Rpdml0eVdTTWFuYWdlcjogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICAgIGJ1aWxkU2ltcGxlRmllbGQ6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgZmllbGROYW1lQ2xhc3M6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgZmllbGRWYWx1ZUNsYXNzOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGFjdGl2aXR5RmllbGRzTWFuYWdlcjogUHJvcFR5cGVzLmluc3RhbmNlT2YoRmllbGRzTWFuYWdlcikuaXNSZXF1aXJlZCxcbiAgICBMb2dnZXI6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgdHJhbnNsYXRlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkXG4gIH07XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgY29uc3QgeyBMb2dnZXIgfSA9IHRoaXMucHJvcHM7XG4gICAgbG9nZ2VyID0gbmV3IExvZ2dlcignQVAgQWRkaXRpb25hbCBpbmZvJyk7XG4gICAgbG9nZ2VyLmRlYnVnKCdjb25zdHJ1Y3RvcicpO1xuICB9XG5cbiAgX2dldFdvcmtzcGFjZUxlYWREYXRhKCkge1xuICAgIGNvbnN0IHsgYWN0aXZpdHlXU01hbmFnZXIgfSA9IHRoaXMucHJvcHM7XG4gICAgaWYgKCFhY3Rpdml0eVdTTWFuYWdlcikge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBtYXgtbGVuXG4gICAgcmV0dXJuIGAke2FjdGl2aXR5V1NNYW5hZ2VyW1VzZXJDb25zdGFudHMuRklSU1RfTkFNRV19ICR7YWN0aXZpdHlXU01hbmFnZXJbVXNlckNvbnN0YW50cy5MQVNUX05BTUVdfSAke2FjdGl2aXR5V1NNYW5hZ2VyW1VzZXJDb25zdGFudHMuRU1BSUxdfWA7XG4gIH1cblxuICBfYnVpbGRBZGRpdGlvbmFsSW5mbygpIHtcbiAgICBjb25zdCB7XG4gICAgICB0cmFuc2xhdGUsIGFjdGl2aXR5V29ya3NwYWNlLCBhY3Rpdml0eUZpZWxkc01hbmFnZXIsIGJ1aWxkU2ltcGxlRmllbGQsXG4gICAgICBmaWVsZE5hbWVDbGFzcywgZmllbGRWYWx1ZUNsYXNzLCBhY3Rpdml0eSwgTG9nZ2VyXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgYWRkaXRpb25hbEluZm8gPSBbXTtcbiAgICBjb25zdCB0ZWFtTmFtZSA9IGFjdGl2aXR5RmllbGRzTWFuYWdlci5nZXRWYWx1ZShhY3Rpdml0eSwgQWN0aXZpdHlDb25zdGFudHMuVEVBTSxcbiAgICAgIFBvc3NpYmxlVmFsdWVzTWFuYWdlci5nZXRPcHRpb25UcmFuc2xhdGlvbik7XG4gICAgLy8gbm8gbmVlZCB0byBleHBvcnQgcmVwZWF0aW5nIHRyYW5zbGF0aW9uIGZvciB0aGUgYWNjZXNzIHR5cGUgdGhyb3VnaCB3b3Jrc3BhY2VzIEVQXG4gICAgY29uc3QgYWNjZXNzVHlwZSA9IHRyYW5zbGF0ZShhY3Rpdml0eVdvcmtzcGFjZVtXb3Jrc3BhY2VDb25zdGFudHMuQUNDRVNTX1RZUEVdKTtcbiAgICBjb25zdCBpc0NvbXB1dGVkVGVhbSA9IGFjdGl2aXR5V29ya3NwYWNlW1dvcmtzcGFjZUNvbnN0YW50cy5JU19DT01QVVRFRF0gPT09IHRydWUgP1xuICAgICAgdHJhbnNsYXRlKCdZZXMnKSA6IHRyYW5zbGF0ZSgnTm8nKTtcblxuICAgIC8vIFRPRE86IHRoZSByaWdodCB2YWx1ZSBhcyBkZWZpbmVkIGluIEFNUC0yNTQwMyB3aWxsIGJlIHNob3duIGFmdGVyIEFNUC0yNjI5NS5cbiAgICBhZGRpdGlvbmFsSW5mby5wdXNoKGJ1aWxkU2ltcGxlRmllbGQoQWN0aXZpdHlDb25zdGFudHMuQ1JFQVRFRF9CWSwgdHJ1ZSkpO1xuICAgIGFkZGl0aW9uYWxJbmZvLnB1c2goYnVpbGRTaW1wbGVGaWVsZChBY3Rpdml0eUNvbnN0YW50cy5DUkVBVEVEX09OLCB0cnVlKSk7XG4gICAgYWRkaXRpb25hbEluZm8ucHVzaChidWlsZFNpbXBsZUZpZWxkKEFjdGl2aXR5Q29uc3RhbnRzLk1PRElGSUVEX0JZLCB0cnVlKSk7XG4gICAgYWRkaXRpb25hbEluZm8ucHVzaChidWlsZFNpbXBsZUZpZWxkKEFjdGl2aXR5Q29uc3RhbnRzLk1PRElGSUVEX09OLCB0cnVlKSk7XG4gICAgYWRkaXRpb25hbEluZm8ucHVzaChBUEZpZWxkLmluc3RhbmNlKCdjcmVhdGVkSW5Xb3Jrc3BhY2UnLCBgJHt0ZWFtTmFtZX0gLSAke2FjY2Vzc1R5cGV9YCxcbiAgICAgIGZhbHNlLCBmYWxzZSwgZmllbGROYW1lQ2xhc3MsIGZpZWxkVmFsdWVDbGFzcywgdHJhbnNsYXRlLCBMb2dnZXIpKTtcblxuICAgIGFkZGl0aW9uYWxJbmZvLnB1c2goQVBGaWVsZC5pbnN0YW5jZSgnd29ya3NwYWNlTWFuYWdlcicsIHRoaXMuX2dldFdvcmtzcGFjZUxlYWREYXRhKCksXG4gICAgICBmYWxzZSwgZmFsc2UsIGZpZWxkTmFtZUNsYXNzLCBmaWVsZFZhbHVlQ2xhc3MsIHRyYW5zbGF0ZSwgTG9nZ2VyKSk7XG5cbiAgICBhZGRpdGlvbmFsSW5mby5wdXNoKEFQRmllbGQuaW5zdGFuY2UoJ2NvbXB1dGF0aW9uJywgaXNDb21wdXRlZFRlYW0sXG4gICAgICBmYWxzZSwgZmFsc2UsIGZpZWxkTmFtZUNsYXNzLCBmaWVsZFZhbHVlQ2xhc3MsIHRyYW5zbGF0ZSwgTG9nZ2VyKSk7XG5cbiAgICByZXR1cm4gYWRkaXRpb25hbEluZm87XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIDxkaXY+e3RoaXMuX2J1aWxkQWRkaXRpb25hbEluZm8oKX08L2Rpdj47XG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBTZWN0aW9uKEFkZGl0aW9uYWxJbmZvLCB7XG4gIFNlY3Rpb25UaXRsZTogJ2FkZGl0aW9uYWxJbmZvJ1xufSk7XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBjbGFzcy1tZXRob2RzLXVzZS10aGlzICovXG4vKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvcHJlZmVyLWRlZmF1bHQtZXhwb3J0ICovXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCBQcm9wVHlwZXMgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgVGFibGlmeSBmcm9tICcuLi9jb21wb25lbnRzL1RhYmxpZnkuanN4JztcbmltcG9ydCBTZWN0aW9uIGZyb20gJy4vU2VjdGlvbi5qc3gnO1xuaW1wb3J0IEZpZWxkc01hbmFnZXIgZnJvbSAnLi4vLi4vLi4vbW9kdWxlcy9maWVsZC9GaWVsZHNNYW5hZ2VyJztcbmltcG9ydCBBY3Rpdml0eUNvbnN0YW50cyBmcm9tICcuLi8uLi8uLi9tb2R1bGVzL3V0aWwvQWN0aXZpdHlDb25zdGFudHMnO1xuaW1wb3J0IFBvc3NpYmxlVmFsdWVzTWFuYWdlciBmcm9tICcuLi8uLi8uLi9tb2R1bGVzL2ZpZWxkL1Bvc3NpYmxlVmFsdWVzTWFuYWdlcic7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL0FjdGl2aXR5UHJldmlldy5jc3MnO1xuaW1wb3J0IEZpZWxkUGF0aENvbnN0YW50cyBmcm9tICcuLi8uLi8uLi91dGlscy9GaWVsZFBhdGhDb25zdGFudHMnO1xuXG5sZXQgbG9nZ2VyID0gbnVsbDtcblxuLyoqXG4gKiBPcmdhbml6YXRpb25zIGFuZCBwcm9qZWN0IGlkcyBzZWN0aW9uXG4gKiBAYXV0aG9yIE5hZGVqZGEgTWFuZHJlc2N1XG4gKi9cbmNvbnN0IEFQSW50ZXJuYWxJZHNTZWN0aW9uID0gKGlzU2VwYXJhdGVTZWN0aW9uKSA9PiBjbGFzcyBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgYWN0aXZpdHk6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgICBhY3Rpdml0eUZpZWxkc01hbmFnZXI6IFByb3BUeXBlcy5pbnN0YW5jZU9mKEZpZWxkc01hbmFnZXIpLmlzUmVxdWlyZWQsXG4gICAgc2hvd0lmRW1wdHk6IFByb3BUeXBlcy5ib29sLCAvKiBvbmx5IG1ha2VzIHNlbnNlIGlmIGlzU2VwYXJhdGVTZWN0aW9uIGlzIHRydWUsIHdpbGwgcmVuZGVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgdGhlcmUgYXJlIG5vIG9yZyBpZHMqL1xuICAgIExvZ2dlcjogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICB0cmFuc2xhdGU6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWRcbiAgfTtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICBjb25zdCB7IExvZ2dlciB9ID0gdGhpcy5wcm9wcztcbiAgICBsb2dnZXIgPSBuZXcgTG9nZ2VyKCdBUCBJbnRlcm5hbCBpZHMnKTtcbiAgICBsb2dnZXIubG9nKCdjb25zdHJ1Y3RvcicpO1xuICB9XG5cbiAgX2dldEFjdEludGVybmFsSWRDb250ZW50KGFjdEludElkLCBzaG93SW50ZXJuYWxJZCkge1xuICAgIGxldCBpbnRJZDtcbiAgICBpZiAoc2hvd0ludGVybmFsSWQpIHtcbiAgICAgIGludElkID0gPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMudGFibGVWYWx1ZX0+e2FjdEludElkLmludGVybmFsX2lkfTwvc3Bhbj47XG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGtleT17YWN0SW50SWQub3JnYW5pemF0aW9uLnZhbHVlfT5cbiAgICAgICAgPHNwYW4+W3sgYWN0SW50SWQub3JnYW5pemF0aW9uLnZhbHVlIH1dPC9zcGFuPlxuICAgICAgICB7IGludElkIH1cbiAgICAgIDwvZGl2Pik7XG4gIH1cblxuICBidWlsZENvbnRlbnQoKSB7XG4gICAgbGV0IG9yZ0lkcztcbiAgICBpZiAodGhpcy5wcm9wcy5hY3Rpdml0eUZpZWxkc01hbmFnZXIuaXNGaWVsZFBhdGhFbmFibGVkKEFjdGl2aXR5Q29uc3RhbnRzLkFDVElWSVRZX0lOVEVSTkFMX0lEUykpIHtcbiAgICAgIGNvbnN0IHNob3dJbnRlcm5hbElkID0gdGhpcy5wcm9wcy5hY3Rpdml0eUZpZWxkc01hbmFnZXIuaXNGaWVsZFBhdGhFbmFibGVkKFxuICAgICAgICBGaWVsZFBhdGhDb25zdGFudHMuQUNUSVZJVFlfSU5URVJOQUxfSURTX0lOVEVSTkFMX0lEX1BBVEgpO1xuICAgICAgb3JnSWRzID0gW107XG4gICAgICBjb25zdCBhY3RJbnRJZHMgPSB0aGlzLnByb3BzLmFjdGl2aXR5RmllbGRzTWFuYWdlci5nZXRWYWx1ZSh0aGlzLnByb3BzLmFjdGl2aXR5LFxuICAgICAgICBBY3Rpdml0eUNvbnN0YW50cy5BQ1RJVklUWV9JTlRFUk5BTF9JRFMsIFBvc3NpYmxlVmFsdWVzTWFuYWdlci5nZXRPcHRpb25UcmFuc2xhdGlvbik7XG4gICAgICBpZiAoYWN0SW50SWRzICYmIGFjdEludElkcy5sZW5ndGggPiAwKSB7XG4gICAgICAgIGFjdEludElkcy5mb3JFYWNoKGFjdEludElkID0+IG9yZ0lkcy5wdXNoKHRoaXMuX2dldEFjdEludGVybmFsSWRDb250ZW50KGFjdEludElkLCBzaG93SW50ZXJuYWxJZCkpKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG9yZ0lkcyAmJiBvcmdJZHMubGVuZ3RoID4gMCA/IG9yZ0lkcyA6IG51bGw7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyB0cmFuc2xhdGUgfSA9IHRoaXMucHJvcHM7XG4gICAgbGV0IGNvbnRlbnQgPSB0aGlzLmJ1aWxkQ29udGVudCgpO1xuICAgIGlmIChpc1NlcGFyYXRlU2VjdGlvbiA9PT0gdHJ1ZSkge1xuICAgICAgLy8gbWFrZSBzdXJlIGNvbnRlbnQgZXhpc3RzIGJlZm9yZSBmb3JtYXR0aW5nXG4gICAgICBjb25zdCBub0RhdGEgPSA8dHI+PHRkPnt0cmFuc2xhdGUoJ05vIERhdGEnKX08L3RkPjwvdHI+O1xuICAgICAgY29uc3QgdGFibGVDb250ZW50ID0gY29udGVudCA/XG4gICAgICAgIFRhYmxpZnkuYWRkUm93cyhjb250ZW50LCBBY3Rpdml0eUNvbnN0YW50cy5BQ1RJVklUWV9JTlRFUk5BTF9JRFNfQ09MUykgOlxuICAgICAgICBub0RhdGE7XG4gICAgICBjb250ZW50ID0gPGRpdj48dGFibGUgY2xhc3NOYW1lPXtzdHlsZXMuYm94X3RhYmxlfT48dGJvZHk+e3RhYmxlQ29udGVudH08L3Rib2R5PjwvdGFibGU+PC9kaXY+O1xuICAgIH0gZWxzZSBpZiAoY29udGVudCB8fCB0aGlzLnByb3BzLnNob3dJZkVtcHR5KSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGtleT1cIkludGVybmFsSWRzRnJvbUlkZW50aWZpY2F0aW9uU2VjdGlvblwiPlxuICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgIHtjb250ZW50ICYmIGNvbnRlbnQubWFwKG9yZ0RhdGEgPT4gKDxsaSBrZXk9e29yZ0RhdGEua2V5fT57b3JnRGF0YX08L2xpPikpfVxuICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbn07XG5jb25zdCBBUEludGVybmFsSWRzID0gU2VjdGlvbihBUEludGVybmFsSWRzU2VjdGlvbih0cnVlKSwgeyBTZWN0aW9uVGl0bGU6ICdBZ2VuY3kgSW50ZXJuYWwgSURzJyxcbiAgdXNlRW5jYXBzdWxhdGVIZWFkZXI6IHRydWUsXG4gIHNJRDogJ0FQSW50ZXJuYWxJZHMnXG59KTtcbmV4cG9ydCBkZWZhdWx0IEFQSW50ZXJuYWxJZHM7XG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbi8vIGltcG9ydCB7IEFjdGl2aXR5Q29uc3RhbnRzLCBGaWVsZFBhdGhDb25zdGFudHMsIEZpZWxkc01hbmFnZXIsIFNlY3Rpb24gfSBmcm9tICdhbXAtdWknO1xuaW1wb3J0IEFjdGl2aXR5Q29uc3RhbnRzIGZyb20gJy4uLy4uLy4uL21vZHVsZXMvdXRpbC9BY3Rpdml0eUNvbnN0YW50cyc7XG5pbXBvcnQgRmllbGRQYXRoQ29uc3RhbnRzIGZyb20gJy4uLy4uLy4uL3V0aWxzL0ZpZWxkUGF0aENvbnN0YW50cyc7XG5pbXBvcnQgRmllbGRzTWFuYWdlciBmcm9tICcuLi8uLi8uLi9tb2R1bGVzL2ZpZWxkL0ZpZWxkc01hbmFnZXInO1xuaW1wb3J0IFNlY3Rpb24gZnJvbSAnLi9TZWN0aW9uLmpzeCc7XG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9BUENvbXBvbmVudHMuY3NzJztcblxubGV0IGxvZ2dlciA9IG51bGw7XG5cbi8qKlxuICogQGF1dGhvciBHYWJyaWVsIEluY2hhdXNwZVxuICovXG5jbGFzcyBBUENvbXBvbmVudHMgZXh0ZW5kcyBDb21wb25lbnQge1xuICAvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9uby11bnVzZWQtcHJvcC10eXBlcyAqL1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGFjdGl2aXR5OiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gICAgYWN0aXZpdHlGaWVsZHNNYW5hZ2VyOiBQcm9wVHlwZXMuaW5zdGFuY2VPZihGaWVsZHNNYW5hZ2VyKS5pc1JlcXVpcmVkLFxuICAgIExvZ2dlcjogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICB0cmFuc2xhdGU6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgcmF3TnVtYmVyVG9Gb3JtYXR0ZWRTdHJpbmc6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWRcbiAgfTtcbiAgLyogZXNsaW50LWVuYWJsZSByZWFjdC9uby11bnVzZWQtcHJvcC10eXBlcyAqL1xuXG4gIHN0YXRpYyBfZXh0cmFjdFllYXIoZGF0ZVN0cmluZykge1xuICAgIHJldHVybiBuZXcgRGF0ZShEYXRlLnBhcnNlKGRhdGVTdHJpbmcpKS5nZXRGdWxsWWVhcigpO1xuICB9XG5cbiAgc3RhdGljIF9leHRyYWN0R3JvdXBzKGZ1bmRpbmcsIHRyblR5cGUpIHtcbiAgICBjb25zdCBncm91cHMgPSBbXTtcbiAgICBjb25zdCBhdXhGZCA9IHtcbiAgICAgIGFkalR5cGU6IGZ1bmRpbmdbQWN0aXZpdHlDb25zdGFudHMuQURKVVNUTUVOVF9UWVBFXSxcbiAgICAgIHRyblR5cGUsXG4gICAgICBrZXk6IGZ1bmRpbmcuaWQsXG4gICAgICBjdXJyZW5jeTogZnVuZGluZ1tBY3Rpdml0eUNvbnN0YW50cy5DVVJSRU5DWV0sXG4gICAgICBhbW91bnQ6IGZ1bmRpbmdbQWN0aXZpdHlDb25zdGFudHMuQU1PVU5UXSxcbiAgICAgIHllYXI6IEFQQ29tcG9uZW50cy5fZXh0cmFjdFllYXIoZnVuZGluZ1tBY3Rpdml0eUNvbnN0YW50cy5UUkFOU0FDVElPTl9EQVRFXSlcbiAgICB9O1xuICAgIGNvbnN0IGdyb3VwID0gZ3JvdXBzLmZpbmQobyA9PiBvLmFkalR5cGUuaWQgPT09IGF1eEZkLmFkalR5cGUuaWRcbiAgICAgICYmIG8udHJuVHlwZSA9PT0gYXV4RmQudHJuVHlwZVxuICAgICAgJiYgby55ZWFyID09PSBhdXhGZC55ZWFyKTtcbiAgICBpZiAoIWdyb3VwKSB7XG4gICAgICBncm91cHMucHVzaChhdXhGZCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFRPRE86IHdlIG5lZWQgY3VycmVuY3kgY29udmVyc2lvbiBoZXJlLlxuICAgICAgZ3JvdXAuYW1vdW50ICs9IGF1eEZkLmFtb3VudDtcbiAgICB9XG4gICAgcmV0dXJuIGdyb3VwcztcbiAgfVxuXG4gIHN0YXRpYyBfYnVpbGREZXRhaWwoY29tcG9uZW50LCB0cmFuc2xhdGUsIHJhd051bWJlclRvRm9ybWF0dGVkU3RyaW5nKSB7XG4gICAgY29uc3QgY29udGVudCA9IFtdO1xuICAgIC8vIFRPRE86IEFwcGx5IGN1cnJlbmN5IGNvbnZlcnNpb24gdG8gc2hvdyBhbGwgZnVuZGluZ3MgaW4gdGhlIHNhbWUgY3VycmVuY3lcbiAgICBGaWVsZFBhdGhDb25zdGFudHMuVFJBTlNBQ1RJT05fVFlQRVMuZm9yRWFjaCh0cm5UeXBlID0+IHtcbiAgICAgIGNvbnN0IGZ1bmRpbmdzID0gY29tcG9uZW50W3RyblR5cGVdO1xuICAgICAgaWYgKGZ1bmRpbmdzICYmIGZ1bmRpbmdzLmxlbmd0aCkge1xuICAgICAgICBjb25zdCBncm91cHMgPSBBUENvbXBvbmVudHMuX2V4dHJhY3RHcm91cHMoZnVuZGluZ3MsIHRyblR5cGUpO1xuICAgICAgICBncm91cHMuZm9yRWFjaChncm91cCA9PiB7XG4gICAgICAgICAgLy8gVE9ETzogQWRkIHRoZSBjdXJyZW50IGN1cnJlbmN5LlxuICAgICAgICAgIC8vIFRPRE86IFRyYW5zbGF0ZSBhIHNpbmdsZSBwaHJhc2UgaW5zdGVhZCBvZiBhIGNvbWJpbmF0aW9uIG9mIHdvcmRzIChBTVBPRkZMSU5FLTQ3NykuXG4gICAgICAgICAgY29udGVudC5wdXNoKDx0cj5cbiAgICAgICAgICAgIDx0ZD57Z3JvdXAueWVhcn08L3RkPlxuICAgICAgICAgICAgPHRkPnt0cmFuc2xhdGUoYCR7Z3JvdXAuYWRqVHlwZS52YWx1ZX0gJHtncm91cC50cm5UeXBlfWApfTwvdGQ+XG4gICAgICAgICAgICA8dGQ+e3Jhd051bWJlclRvRm9ybWF0dGVkU3RyaW5nKGdyb3VwLmFtb3VudCl9PC90ZD5cbiAgICAgICAgICA8L3RyPik7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGNvbnN0IHRhYmxlID0gKDxkaXY+XG4gICAgICA8dGFibGUgY2xhc3NOYW1lPXtzdHlsZXMudGFibGV9PlxuICAgICAgICA8dGJvZHk+e2NvbnRlbnR9PC90Ym9keT5cbiAgICAgIDwvdGFibGU+XG4gICAgPC9kaXY+KTtcbiAgICByZXR1cm4gdGFibGU7XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICBjb25zdCB7IExvZ2dlciB9ID0gdGhpcy5wcm9wcztcbiAgICBsb2dnZXIgPSBuZXcgTG9nZ2VyKCdBUCBDb21wb25lbnRzJyk7XG4gICAgbG9nZ2VyLmRlYnVnKCdjb25zdHJ1Y3RvcicpO1xuICB9XG5cbiAgX2J1aWxkQ29tcG9uZW50cygpIHtcbiAgICBjb25zdCBjb250ZW50ID0gW107XG4gICAgdGhpcy5wcm9wcy5hY3Rpdml0eVtBY3Rpdml0eUNvbnN0YW50cy5DT01QT05FTlRTXS5mb3JFYWNoKChjb21wb25lbnQpID0+IHtcbiAgICAgIGlmICh0aGlzLnByb3BzLmFjdGl2aXR5RmllbGRzTWFuYWdlci5pc0ZpZWxkUGF0aEVuYWJsZWQoQWN0aXZpdHlDb25zdGFudHMuQ09NUE9ORU5UX1RJVExFKSkge1xuICAgICAgICBjb250ZW50LnB1c2goPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0+e2NvbXBvbmVudFtBY3Rpdml0eUNvbnN0YW50cy5DT01QT05FTlRfVElUTEVdfTwvZGl2Pik7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5wcm9wcy5hY3Rpdml0eUZpZWxkc01hbmFnZXIuaXNGaWVsZFBhdGhFbmFibGVkKEFjdGl2aXR5Q29uc3RhbnRzLkNPTVBPTkVOVF9UWVBFKSkge1xuICAgICAgICBjb250ZW50LnB1c2goPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0+e2NvbXBvbmVudFtBY3Rpdml0eUNvbnN0YW50cy5DT01QT05FTlRfVFlQRV0udmFsdWV9PC9kaXY+KTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLnByb3BzLmFjdGl2aXR5RmllbGRzTWFuYWdlci5pc0ZpZWxkUGF0aEVuYWJsZWQoQWN0aXZpdHlDb25zdGFudHMuQ09NUE9ORU5UX0RFU0NSSVBUSU9OKSkge1xuICAgICAgICBjb250ZW50LnB1c2goPGRpdj57Y29tcG9uZW50LmRlc2NyaXB0aW9ufTwvZGl2Pik7XG4gICAgICB9XG4gICAgICBjb250ZW50LnB1c2goPGRpdj57dGhpcy5wcm9wcy50cmFuc2xhdGUoJ0ZpbmFuY2Ugb2YgdGhlIGNvbXBvbmVudCcpfTwvZGl2Pik7XG4gICAgICBjb250ZW50LnB1c2goQVBDb21wb25lbnRzLl9idWlsZERldGFpbChjb21wb25lbnQsIHRoaXMucHJvcHMudHJhbnNsYXRlLCB0aGlzLnByb3BzLnJhd051bWJlclRvRm9ybWF0dGVkU3RyaW5nKSk7XG4gICAgICBjb250ZW50LnB1c2goPGhyIC8+KTtcbiAgICB9KTtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKDxkaXY+XG4gICAgICB7dGhpcy5fYnVpbGRDb21wb25lbnRzKCl9XG4gICAgPC9kaXY+KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTZWN0aW9uKEFQQ29tcG9uZW50cywgeyBTZWN0aW9uVGl0bGU6ICdDb21wb25lbnRzJ1xufSk7XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBjbGFzcy1tZXRob2RzLXVzZS10aGlzICovXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCBQcm9wVHlwZXMgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQWN0aXZpdHlDb25zdGFudHMgZnJvbSAnLi4vLi4vLi4vbW9kdWxlcy91dGlsL0FjdGl2aXR5Q29uc3RhbnRzJztcbmltcG9ydCBBUEZpZWxkIGZyb20gJy4uL2NvbXBvbmVudHMvQVBGaWVsZC5qc3gnO1xuaW1wb3J0IEZpZWxkUGF0aENvbnN0YW50cyBmcm9tICcuLi8uLi8uLi91dGlscy9GaWVsZFBhdGhDb25zdGFudHMnO1xuaW1wb3J0IEZpZWxkc01hbmFnZXIgZnJvbSAnLi4vLi4vLi4vbW9kdWxlcy9maWVsZC9GaWVsZHNNYW5hZ2VyJztcbmltcG9ydCBUYWJsaWZ5IGZyb20gJy4uL2NvbXBvbmVudHMvVGFibGlmeS5qc3gnO1xuaW1wb3J0IFNlY3Rpb24gZnJvbSAnLi9TZWN0aW9uLmpzeCc7XG5pbXBvcnQgQ29udGFjdENvbnN0YW50cyBmcm9tICcuLi8uLi8uLi9tb2R1bGVzL3V0aWwvQ29udGFjdENvbnN0YW50cyc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL0FjdGl2aXR5UHJldmlldy5jc3MnO1xuXG4vKipcbiAqIEFjdGl2aXR5IFByZXZpZXcgQ29udGFjdCBzZWN0aW9uXG4gKlxuICogQGF1dGhvciBOYWRlamRhIE1hbmRyZXNjdVxuICovXG5jbGFzcyBBUENvbnRhY3QgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGFjdGl2aXR5OiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gICAgYWN0aXZpdHlGaWVsZHNNYW5hZ2VyOiBQcm9wVHlwZXMuaW5zdGFuY2VPZihGaWVsZHNNYW5hZ2VyKS5pc1JlcXVpcmVkLFxuICAgIGNvbnRhY3RGaWVsZHNNYW5hZ2VyOiBQcm9wVHlwZXMuaW5zdGFuY2VPZihGaWVsZHNNYW5hZ2VyKSxcbiAgICBjb250YWN0c0J5SWRzOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIGJ1aWxkU2ltcGxlRmllbGQ6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgZ2V0QWN0aXZpdHlDb250YWN0SWRzOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIExvZ2dlcjogUHJvcFR5cGVzLmZ1bmMsXG4gICAgdHJhbnNsYXRlOiBQcm9wVHlwZXMuZnVuY1xuICB9O1xuXG4gIGdldEh5ZHJhdGVkQ29udGFjdHMoKSB7XG4gICAgLy8gQ29udGFjdHMgd2lsbCBiZSBoeWRyYXRlZCBhbmQgcmVjZWl2ZWQgYnkgcHJvcHNcbiAgICAvLyBCb3RoIGluIGFtcF9vZmZsaW5lIGFuZCBhbXBfb25saW5lIHNvIHdlIGp1c3QgbmVlZCB0byBnZXRcbiAgICAvLyBBY3Rpdml0eSBDb25cbiAgICBjb25zdCB7IGFjdGl2aXR5LCBjb250YWN0c0J5SWRzLCBnZXRBY3Rpdml0eUNvbnRhY3RJZHMgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgY29udGFjdElkcyA9IGdldEFjdGl2aXR5Q29udGFjdElkcyhhY3Rpdml0eSk7XG4gICAgY29uc3QgaHlkcmF0ZWRDb250YWN0c0J5SWRzID0ge307XG4gICAgY29udGFjdElkcy5mb3JFYWNoKGNJZCA9PiB7XG4gICAgICBjb25zdCBjID0gY29udGFjdHNCeUlkc1tjSWRdIHx8IHt9O1xuICAgICAgaWYgKGNbQ29udGFjdENvbnN0YW50cy5UTVBfSFlEUkFURURdKSB7XG4gICAgICAgIGh5ZHJhdGVkQ29udGFjdHNCeUlkc1tjSWRdID0gYztcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gaHlkcmF0ZWRDb250YWN0c0J5SWRzO1xuICB9XG5cbiAgcmVuZGVyQ29udGFjdChjb250YWN0KSB7XG4gICAgY29uc3QgeyBjb250YWN0RmllbGRzTWFuYWdlciwgYnVpbGRTaW1wbGVGaWVsZCB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBrZXk9e2NvbnRhY3QuaWR9IGNsYXNzTmFtZT17c3R5bGVzLnBhZGRpbmdCb3R0b21MYXJnZX0+XG4gICAgICAgIDxkaXY+e2Ake2NvbnRhY3RbQ29udGFjdENvbnN0YW50cy5OQU1FXX0gJHtjb250YWN0W0NvbnRhY3RDb25zdGFudHMuTEFTVF9OQU1FXX1gfTwvZGl2PlxuICAgICAgICB7Y29udGFjdFtDb250YWN0Q29uc3RhbnRzLkVNQUlMXS5tYXAoZW1haWwgPT5cbiAgICAgICAgICBidWlsZFNpbXBsZUZpZWxkKGAke0NvbnRhY3RDb25zdGFudHMuRU1BSUx9flxuICAgICAgICAgICR7Q29udGFjdENvbnN0YW50cy5WQUxVRX1gLCB0cnVlLCBudWxsLCBmYWxzZSwgZW1haWwsIGNvbnRhY3RGaWVsZHNNYW5hZ2VyKSl9XG4gICAgICAgIHtjb250YWN0W0NvbnRhY3RDb25zdGFudHMuUEhPTkVdLm1hcChwaG9uZSA9PlxuICAgICAgICAgIGJ1aWxkU2ltcGxlRmllbGQoYCR7Q29udGFjdENvbnN0YW50cy5QSE9ORX1+XG4gICAgICAgICAgJHtDb250YWN0Q29uc3RhbnRzLlZBTFVFfWAsIHRydWUsIG51bGwsIGZhbHNlLCBwaG9uZSwgY29udGFjdEZpZWxkc01hbmFnZXIpKX1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxuICByZW5kZXJOb0NvbnRhY3RzKCkge1xuICAgIGNvbnN0IHsgTG9nZ2VyLCB0cmFuc2xhdGUgfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgIDxBUEZpZWxkXG4gICAgICAgIGZpZWxkTmFtZUNsYXNzPXtzdHlsZXMuaGlkZGVufSBmaWVsZFZhbHVlQ2xhc3M9e3N0eWxlcy5ub2RhdGF9IGZpZWxkQ2xhc3M9e3N0eWxlcy5mbGV4fSBzZXBhcmF0b3I9e2ZhbHNlfVxuICAgICAgICB2YWx1ZT17dHJhbnNsYXRlKCdObyBEYXRhJyl9IHRyYW5zbGF0ZT17dHJhbnNsYXRlfSBMb2dnZXI9e0xvZ2dlcn0gLz5cbiAgICApO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgTG9nZ2VyIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHsgYWN0aXZpdHksIGFjdGl2aXR5RmllbGRzTWFuYWdlciB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBoeWRyYXRlZENvbnRhY3RzQnlJZHMgPSB0aGlzLmdldEh5ZHJhdGVkQ29udGFjdHMoKTtcbiAgICBjb25zdCBjb250YWN0R3JvdXBzID0gRmllbGRQYXRoQ29uc3RhbnRzLkFDVElWSVRZX0NPTlRBQ1RfUEFUSFNcbiAgICAgIC5maWx0ZXIoYWNwID0+IGFjdGl2aXR5RmllbGRzTWFuYWdlci5pc0ZpZWxkUGF0aEVuYWJsZWQoYWNwKSlcbiAgICAgIC5tYXAoYWNwID0+IHtcbiAgICAgICAgY29uc3QgdGl0bGUgPSBhY3Rpdml0eUZpZWxkc01hbmFnZXIuZ2V0RmllbGRMYWJlbFRyYW5zbGF0aW9uKGFjcCk7XG4gICAgICAgIGNvbnN0IGNvbnRhY3RzID0gKGFjdGl2aXR5W2FjcF0gfHwgW10pLm1hcChjID0+IHtcbiAgICAgICAgICBjb25zdCBoeWRyYXRlZEMgPSBoeWRyYXRlZENvbnRhY3RzQnlJZHNbY1tBY3Rpdml0eUNvbnN0YW50cy5DT05UQUNUXS5pZF07XG4gICAgICAgICAgcmV0dXJuIGh5ZHJhdGVkQyA/IHRoaXMucmVuZGVyQ29udGFjdChoeWRyYXRlZEMpIDogbnVsbDtcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IGNvbnRlbnQgPSBjb250YWN0cy5sZW5ndGggPyBjb250YWN0cyA6IHRoaXMucmVuZGVyTm9Db250YWN0cygpO1xuICAgICAgICBjb25zdCBjb250ZW50Q2xhc3MgPSBjb250YWN0cy5sZW5ndGggPyBzdHlsZXMudGFibGVDZWxsIDogbnVsbDtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxkaXYga2V5PVwiY29udGFjdC1ncm91cFwiPlxuICAgICAgICAgICAgPGRpdiBrZXk9XCJ0aXRsZVwiIGNsYXNzTmFtZT17c3R5bGVzLnNlY3Rvcl90aXRsZX0+e3RpdGxlfTwvZGl2PlxuICAgICAgICAgICAgPGRpdiBrZXk9XCJjb250YWN0c1wiIGNsYXNzTmFtZT17Y29udGVudENsYXNzfT57Y29udGVudH08L2Rpdj5cbiAgICAgICAgICA8L2Rpdj4pO1xuICAgICAgfSlcbiAgICAgIC8vIFRPRE8gdGFibGlmeSBtdXN0IG5vdCByZXZlcnNlcyB0aGUgb3JkZXJcbiAgICAgIC5yZXZlcnNlKCk7XG4gICAgcmV0dXJuICg8VGFibGlmeVxuICAgICAga2V5PVwiY29udGFjdC1pbmZvXCIgY29udGVudD17Y29udGFjdEdyb3Vwc30gY29sdW1ucz17QWN0aXZpdHlDb25zdGFudHMuQUNUSVZJVFlfQ09OVEFDVF9DT0xTfVxuICAgICAgTG9nZ2VyPXtMb2dnZXJ9IC8+KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTZWN0aW9uKEFQQ29udGFjdCwgeyBTZWN0aW9uVGl0bGU6ICdDb250YWN0IEluZm9ybWF0aW9uJyxcbiAgdXNlRW5jYXBzdWxhdGVIZWFkZXI6IHRydWUsXG4gIHNJRDogJ0FQQ29udGFjdCdcbn0pO1xuIiwiLy8gRGlzYWJsZSBydWxlIGJlY2F1c2UgaXQgZmFpbHMgd2l0aCBkZXN0cnVjdGluZyBzeW50YXguXG4vKiBlc2xpbnQgXCJpbXBvcnQvcHJlZmVyLWRlZmF1bHQtZXhwb3J0XCI6IDAqL1xuXG5jb25zdCBXT1JLU1BBQ0VTX0dST1VQUyA9IFtcbiAgeyB0eXBlOiAnRG9ub3InIH0sXG4gIHsgdHlwZTogJ0dvdmVybm1lbnQnIH0sXG4gIHsgdHlwZTogJ0xpbmUgTWluaXN0cmllcycgfSxcbiAgeyB0eXBlOiAnT3RoZXInIH1cbl07XG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmZyZWV6ZSh7XG4gIFdPUktTUEFDRVNfR1JPVVBTXG59KTtcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQsIFByb3BUeXBlcyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBBY3Rpdml0eUNvbnN0YW50cyBmcm9tICcuLi8uLi8uLi9tb2R1bGVzL3V0aWwvQWN0aXZpdHlDb25zdGFudHMnO1xuaW1wb3J0IFNlY3Rpb24gZnJvbSAnLi9TZWN0aW9uLmpzeCc7XG5cbmxldCBsb2dnZXIgPSBudWxsO1xuXG4vKipcbiAqIFRvdGFsIE51bWJlciBvZiBGdW5kaW5nIFNvdXJjZXMgc2VjdGlvblxuICogQGF1dGhvciBHYWJyaWVsIEluY2hhdXNwZVxuICovXG5jbGFzcyBBUEZ1bmRpbmdTb3VyY2VzIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBidWlsZFNpbXBsZUZpZWxkOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIExvZ2dlcjogUHJvcFR5cGVzLmZ1bmNcbiAgfTtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICBjb25zdCB7IExvZ2dlciB9ID0gdGhpcy5wcm9wcztcbiAgICBsb2dnZXIgPSBuZXcgTG9nZ2VyKCdBUCBmdW5kaW5nIHNvdXJjZXMnKTtcbiAgICBsb2dnZXIubG9nKCdjb25zdHJ1Y3RvcicpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSB0aGlzLnByb3BzLmJ1aWxkU2ltcGxlRmllbGQoQWN0aXZpdHlDb25zdGFudHMuVE9UQUxfTlVNQkVSX09GX0ZVTkRJTkdfU09VUkNFUywgdHJ1ZSwgbnVsbCwgdHJ1ZSk7XG4gICAgcmV0dXJuICg8ZGl2Pntjb250ZW50fTwvZGl2Pik7XG4gIH1cbn1cbmV4cG9ydCBkZWZhdWx0IFNlY3Rpb24oQVBGdW5kaW5nU291cmNlcywgeyBTZWN0aW9uVGl0bGU6ICdGdW5kaW5nIFNvdXJjZXMnLFxuICB1c2VFbmNhcHN1bGF0ZUhlYWRlcjogdHJ1ZSxcbiAgc0lEOiAnQVBGdW5kaW5nU291cmNlcydcbn0pO1xuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgQWN0aXZpdHlDb25zdGFudHMgZnJvbSAnLi4vLi4vLi4vbW9kdWxlcy91dGlsL0FjdGl2aXR5Q29uc3RhbnRzJztcbmltcG9ydCBBUFBlcmNlbnRhZ2VMaXN0IGZyb20gJy4uL2NvbXBvbmVudHMvQVBQZXJjZW50YWdlTGlzdC5qc3gnO1xuaW1wb3J0IFNlY3Rpb24gZnJvbSAnLi9TZWN0aW9uLmpzeCc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL0FjdGl2aXR5UHJldmlldy5jc3MnO1xuXG5cbmNvbnN0IEFQTG9jYXRpb25zTGlzdCA9IEFQUGVyY2VudGFnZUxpc3QoQWN0aXZpdHlDb25zdGFudHMuTE9DQVRJT05TLCBBY3Rpdml0eUNvbnN0YW50cy5MT0NBVElPTixcbiAgQWN0aXZpdHlDb25zdGFudHMuTE9DQVRJT05fUEVSQ0VOVEFHRSk7XG5cbmxldCBsb2dnZXIgPSBudWxsO1xuXG4vKipcbiAqIEFjdGl2aXR5IFByZXZpZXcgTG9jYXRpb25zIHNlY3Rpb25cbiAqIEBhdXRob3IgTmFkZWpkYSBNYW5kcmVzY3VcbiAqL1xuY2xhc3MgQVBMb2NhdGlvbiBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgYWN0aXZpdHk6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCwgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuICAgIGJ1aWxkU2ltcGxlRmllbGQ6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgTG9nZ2VyOiBQcm9wVHlwZXMuZnVuYyxcbiAgICB0cmFuc2xhdGU6IFByb3BUeXBlcy5mdW5jLFxuICAgIERhdGVVdGlsczogUHJvcFR5cGVzLmZ1bmMsXG4gICAgcmF3TnVtYmVyVG9Gb3JtYXR0ZWRTdHJpbmc6IFByb3BUeXBlcy5mdW5jLFxuICB9O1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIGNvbnN0IHsgTG9nZ2VyIH0gPSB0aGlzLnByb3BzO1xuICAgIGxvZ2dlciA9IG5ldyBMb2dnZXIoJ0FQIGxvY2F0aW9uJyk7XG4gICAgbG9nZ2VyLmRlYnVnKCdjb25zdHJ1Y3RvcicpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgTG9nZ2VyLCB0cmFuc2xhdGUsIHJhd051bWJlclRvRm9ybWF0dGVkU3RyaW5nIH0gPSB0aGlzLnByb3BzO1xuICAgIGxldCBjb250ZW50ID0gWzxBUExvY2F0aW9uc0xpc3RcbiAgICAgIGtleT1cImxvY2F0aW9ucy1saXN0XCIgey4uLnRoaXMucHJvcHN9XG4gICAgICBwZXJjZW50VGl0bGVDbGFzcz17c3R5bGVzLnBlcmNlbnRfZmllbGRfbmFtZX0gcGVyY2VudFZhbHVlQ2xhc3M9e3N0eWxlcy5wZXJjZW50X2ZpZWxkX3ZhbHVlfSB0YWJsaWZ5PXtmYWxzZX1cbiAgICAgIHRyYW5zbGF0ZT17dHJhbnNsYXRlfSBMb2dnZXI9e0xvZ2dlcn0gcmF3TnVtYmVyVG9Gb3JtYXR0ZWRTdHJpbmc9e3Jhd051bWJlclRvRm9ybWF0dGVkU3RyaW5nfSAvPl07XG4gICAgY29uc3QgdG9wQ29udGVudCA9IFtBY3Rpdml0eUNvbnN0YW50cy5JTVBMRU1FTlRBVElPTl9MRVZFTCwgQWN0aXZpdHlDb25zdGFudHMuSU1QTEVNRU5UQVRJT05fTE9DQVRJT05dXG4gICAgICAubWFwKGZwID0+IDx0ZCBrZXk9e2ZwfT57dGhpcy5wcm9wcy5idWlsZFNpbXBsZUZpZWxkKGZwLCB0cnVlLCBuZXcgU2V0KFswXSkpfTwvdGQ+KTtcbiAgICBjb250ZW50ID0gY29udGVudC5maWx0ZXIoZWwgPT4gZWwgIT09IHVuZGVmaW5lZCk7XG4gICAgbGV0IHRhYmxlID0gbnVsbDtcbiAgICBpZiAoKHRoaXMucHJvcHMuYWN0aXZpdHlbQWN0aXZpdHlDb25zdGFudHMuSU1QTEVNRU5UQVRJT05fTEVWRUxdXG4gICAgICAmJiB0aGlzLnByb3BzLmFjdGl2aXR5W0FjdGl2aXR5Q29uc3RhbnRzLklNUExFTUVOVEFUSU9OX0xFVkVMXS52YWx1ZSAhPT0gJ05hdGlvbmFsJylcbiAgICAgIHx8ICh0aGlzLnByb3BzLmFjdGl2aXR5W0FjdGl2aXR5Q29uc3RhbnRzLklNUExFTUVOVEFUSU9OX0xPQ0FUSU9OXVxuICAgICAgICAmJiB0aGlzLnByb3BzLmFjdGl2aXR5W0FjdGl2aXR5Q29uc3RhbnRzLklNUExFTUVOVEFUSU9OX0xPQ0FUSU9OXS52YWx1ZSAhPT0gJ0NvdW50cnknKSkge1xuICAgICAgdGFibGUgPSAoPHRhYmxlIGNsYXNzTmFtZT17c3R5bGVzLmJveF90YWJsZTJ9PlxuICAgICAgICA8dGJvZHk+XG4gICAgICAgICAge2NvbnRlbnR9XG4gICAgICAgIDwvdGJvZHk+XG4gICAgICA8L3RhYmxlPik7XG4gICAgfVxuICAgIHJldHVybiAoPGRpdj5cbiAgICAgIDx0YWJsZSBjbGFzc05hbWU9e3N0eWxlcy50d29fYm94X3RhYmxlfT5cbiAgICAgICAgPHRib2R5PlxuICAgICAgICAgIDx0cj57dG9wQ29udGVudH08L3RyPlxuICAgICAgICA8L3Rib2R5PlxuICAgICAgPC90YWJsZT5cbiAgICAgIHt0YWJsZX1cbiAgICA8L2Rpdj4pO1xuICB9XG59XG5leHBvcnQgZGVmYXVsdCBTZWN0aW9uKEFQTG9jYXRpb24sIHsgU2VjdGlvblRpdGxlOiAnTG9jYXRpb24nLFxuICB1c2VFbmNhcHN1bGF0ZUhlYWRlcjogdHJ1ZSxcbiAgc0lEOiAnQVBMb2NhdGlvbidcbn0pO1xuIiwiaW1wb3J0IFRlc3RBUEZpZWxkIGZyb20gJy4vYWN0aXZpdHlQcmV2aWV3L2NvbXBvbmVudHMvVGVzdEFQRmllbGQnO1xuaW1wb3J0IFRlc3RpbmdTZWN0aW9uIGZyb20gJy4vYWN0aXZpdHlQcmV2aWV3L2NvbXBvbmVudHMvVGVzdGluZ1NlY3Rpb24nO1xuaW1wb3J0IENvbnN0YW50cyBmcm9tICcuL3V0aWxzL0NvbnN0YW50cyc7XG5pbXBvcnQgQWN0aXZpdHlDb25zdGFudHMgZnJvbSAnLi9tb2R1bGVzL3V0aWwvQWN0aXZpdHlDb25zdGFudHMnO1xuaW1wb3J0IEZlYXR1cmVNYW5hZ2VyQ29uc3RhbnRzIGZyb20gJy4vbW9kdWxlcy91dGlsL0ZlYXR1cmVNYW5hZ2VyQ29uc3RhbnRzJztcbmltcG9ydCBFcnJvckNvbnN0YW50cyBmcm9tICcuL3V0aWxzL2NvbnN0YW50cy9FcnJvckNvbnN0YW50cyc7XG5pbXBvcnQgRmllbGRzTWFuYWdlciBmcm9tICcuL21vZHVsZXMvZmllbGQvRmllbGRzTWFuYWdlcic7XG5pbXBvcnQgRmllbGRQYXRoQ29uc3RhbnRzIGZyb20gJy4vdXRpbHMvRmllbGRQYXRoQ29uc3RhbnRzJztcbmltcG9ydCBWYWx1ZUNvbnN0YW50cyBmcm9tICcuL3V0aWxzL1ZhbHVlQ29uc3RhbnRzJztcbmltcG9ydCBDb250YWN0Q29uc3RhbnRzIGZyb20gJy4vbW9kdWxlcy91dGlsL0NvbnRhY3RDb25zdGFudHMnO1xuaW1wb3J0IEN1cnJlbmN5UmF0ZXNNYW5hZ2VyIGZyb20gJy4vbW9kdWxlcy91dGlsL0N1cnJlbmN5UmF0ZXNNYW5hZ2VyJztcbmltcG9ydCBQb3NzaWJsZVZhbHVlc01hbmFnZXIgZnJvbSAnLi9tb2R1bGVzL2ZpZWxkL1Bvc3NpYmxlVmFsdWVzTWFuYWdlcic7XG5pbXBvcnQgRmVhdHVyZU1hbmFnZXIgZnJvbSAnLi9tb2R1bGVzL3V0aWwvRmVhdHVyZU1hbmFnZXInO1xuaW1wb3J0IEFQTGFiZWwgZnJvbSAnLi9hY3Rpdml0eS9wcmV2aWV3L2NvbXBvbmVudHMvQVBMYWJlbC5qc3gnO1xuaW1wb3J0IEFQRmllbGQgZnJvbSAnLi9hY3Rpdml0eS9wcmV2aWV3L2NvbXBvbmVudHMvQVBGaWVsZC5qc3gnO1xuaW1wb3J0IFRhYmxpZnkgZnJvbSAnLi9hY3Rpdml0eS9wcmV2aWV3L2NvbXBvbmVudHMvVGFibGlmeS5qc3gnO1xuaW1wb3J0IEFQUGVyY2VudGFnZUZpZWxkIGZyb20gJy4vYWN0aXZpdHkvcHJldmlldy9jb21wb25lbnRzL0FQUGVyY2VudGFnZUZpZWxkLmpzeCc7XG5pbXBvcnQgQVBQZXJjZW50YWdlTGlzdCBmcm9tICcuL2FjdGl2aXR5L3ByZXZpZXcvY29tcG9uZW50cy9BUFBlcmNlbnRhZ2VMaXN0LmpzeCc7XG5pbXBvcnQgU2VjdGlvbiBmcm9tICcuL2FjdGl2aXR5L3ByZXZpZXcvc2VjdGlvbnMvU2VjdGlvbi5qc3gnO1xuaW1wb3J0IEZ1bmRpbmdTdW1tYXJ5IGZyb20gJy4vYWN0aXZpdHkvcHJldmlldy9zZWN0aW9ucy9GdW5kaW5nU3VtbWFyeS5qc3gnO1xuaW1wb3J0IEFQSWRlbnRpZmljYXRpb24gZnJvbSAnLi9hY3Rpdml0eS9wcmV2aWV3L3NlY3Rpb25zL0FQSWRlbnRpZmljYXRpb24uanN4JztcbmltcG9ydCBVSVV0aWxzIGZyb20gJy4vdXRpbHMvVUlVdGlscyc7XG5pbXBvcnQgQWRkaXRpb25hbEluZm8gZnJvbSAnLi9hY3Rpdml0eS9wcmV2aWV3L3NlY3Rpb25zL0FkZGl0aW9uYWxJbmZvLmpzeCc7XG5pbXBvcnQgQVBJbnRlcm5hbElkcyBmcm9tICcuL2FjdGl2aXR5L3ByZXZpZXcvc2VjdGlvbnMvQVBJbnRlcm5hbElkcy5qc3gnO1xuaW1wb3J0IEFQQ29tcG9uZW50cyBmcm9tICcuL2FjdGl2aXR5L3ByZXZpZXcvc2VjdGlvbnMvQVBDb21wb25lbnRzLmpzeCc7XG5pbXBvcnQgQVBDb250YWN0IGZyb20gJy4vYWN0aXZpdHkvcHJldmlldy9zZWN0aW9ucy9BUENvbnRhY3QuanN4JztcbmltcG9ydCBVc2VyQ29uc3RhbnRzIGZyb20gJy4vdXRpbHMvY29uc3RhbnRzL1VzZXJDb25zdGFudHMnO1xuaW1wb3J0IFdvcmtzcGFjZUdyb3Vwc0NvbnN0YW50cyBmcm9tICcuL3V0aWxzL2NvbnN0YW50cy9Xb3Jrc3BhY2VHcm91cHNDb25zdGFudHMnO1xuaW1wb3J0IFdvcmtzcGFjZUNvbnN0YW50cyBmcm9tICcuL3V0aWxzL2NvbnN0YW50cy9Xb3Jrc3BhY2VDb25zdGFudHMnO1xuaW1wb3J0IEFQRnVuZGluZ1NvdXJjZXMgZnJvbSAnLi9hY3Rpdml0eS9wcmV2aWV3L3NlY3Rpb25zL0FQRnVuZGluZ1NvdXJjZXMuanN4JztcbmltcG9ydCBBUExvY2F0aW9uIGZyb20gJy4vYWN0aXZpdHkvcHJldmlldy9zZWN0aW9ucy9BUExvY2F0aW9uLmpzeCc7XG5leHBvcnQge1xuICBUZXN0QVBGaWVsZCwgVGVzdGluZ1NlY3Rpb24sIENvbnN0YW50cywgQWN0aXZpdHlDb25zdGFudHMsIEZlYXR1cmVNYW5hZ2VyQ29uc3RhbnRzLCBFcnJvckNvbnN0YW50cyxcbiAgQ3VycmVuY3lSYXRlc01hbmFnZXIsIEZpZWxkc01hbmFnZXIsIEZpZWxkUGF0aENvbnN0YW50cywgVmFsdWVDb25zdGFudHMsIFBvc3NpYmxlVmFsdWVzTWFuYWdlciwgRmVhdHVyZU1hbmFnZXIsXG4gIEFQTGFiZWwsIEFQRmllbGQsIFRhYmxpZnksIEFQUGVyY2VudGFnZUZpZWxkLCBBUFBlcmNlbnRhZ2VMaXN0LCBVSVV0aWxzLCBTZWN0aW9uLCBGdW5kaW5nU3VtbWFyeSwgQWRkaXRpb25hbEluZm8sXG4gIFVzZXJDb25zdGFudHMsIENvbnRhY3RDb25zdGFudHMsIFdvcmtzcGFjZUNvbnN0YW50cywgV29ya3NwYWNlR3JvdXBzQ29uc3RhbnRzLCBBUElkZW50aWZpY2F0aW9uLCBBUEludGVybmFsSWRzLFxuICBBUENvbXBvbmVudHMsIEFQQ29udGFjdCwgQVBGdW5kaW5nU291cmNlcywgQVBMb2NhdGlvblxufTtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBUZXN0QVBGaWVsZCxcbiAgVGVzdGluZ1NlY3Rpb24sXG4gIENvbnN0YW50cyxcbiAgQWN0aXZpdHlDb25zdGFudHMsXG4gIEZlYXR1cmVNYW5hZ2VyQ29uc3RhbnRzLFxuICBFcnJvckNvbnN0YW50cyxcbiAgQ3VycmVuY3lSYXRlc01hbmFnZXIsXG4gIEZpZWxkc01hbmFnZXIsXG4gIEZpZWxkUGF0aENvbnN0YW50cyxcbiAgVmFsdWVDb25zdGFudHMsXG4gIENvbnRhY3RDb25zdGFudHMsXG4gIEZlYXR1cmVNYW5hZ2VyLFxuICBBUExhYmVsLFxuICBBUEZpZWxkLFxuICBUYWJsaWZ5LFxuICBBUFBlcmNlbnRhZ2VGaWVsZCxcbiAgQVBQZXJjZW50YWdlTGlzdCxcbiAgU2VjdGlvbixcbiAgRnVuZGluZ1N1bW1hcnksXG4gIFVJVXRpbHMsXG4gIEFkZGl0aW9uYWxJbmZvLFxuICBVc2VyQ29uc3RhbnRzLFxuICBXb3Jrc3BhY2VDb25zdGFudHMsXG4gIFdvcmtzcGFjZUdyb3Vwc0NvbnN0YW50cyxcbiAgQVBJZGVudGlmaWNhdGlvbixcbiAgQVBDb21wb25lbnRzLFxuICBBUEludGVybmFsSWRzLFxuICBBUENvbnRhY3QsXG4gIEFQRnVuZGluZ1NvdXJjZXMsXG4gIEFQTG9jYXRpb25cbn07XG4iXSwibmFtZXMiOlsiVGVzdEFQRmllbGQiLCJ0cm5MYWJlbCIsInZhbHVlIiwiaW5saW5lIiwic2VwYXJhdG9yIiwibmFtZUNsYXNzIiwidmFsdWVDbGFzcyIsInByb3BzIiwidHJhbnNsYXRlIiwiYW1wTG9nZ2VyIiwibG9nIiwidXNlU2VwYXJhdG9yIiwiZGlzcGxheUNsYXNzIiwiZmllbGRDbGFzcyIsInN0eWxlcyIsImJsb2NrIiwiY2xhc3NOYW1lcyIsImZpZWxkVmFsdWVDbGFzcyIsImRpc3BsYXlWYWx1ZSIsIkFycmF5IiwiaXNBcnJheSIsIk9iamVjdCIsImZvckVhY2giLCJwdXNoIiwidiIsInNvcnQiLCJqb2luIiwiU3RyaW5nIiwidXNlSW5uZXJIVE1MIiwiX19odG1sIiwiZmllbGROYW1lQ2xhc3MiLCJ0aXRsZSIsIl9nZXRWYWx1ZSIsIkNvbXBvbmVudCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInN0cmluZyIsImFueSIsImJvb2wiLCJvYmplY3QiLCJpc1JlcXVpcmVkIiwiZnVuYyIsIlRlc3RpbmdTZWN0aW9uIiwiQkFTRV9SRVNUX1VSTCIsIkNPTk5FQ1RJT05fVElNRU9VVCIsIkNPTk5FQ1RJT05fRk9SQ0VEX1RJTUVPVVQiLCJUSU1FT1VUX0NIRUNLX0lOVEVSVkFMIiwiTUFYX1JFVFJZX0FURU1QVFMiLCJFUlJPUlNfVE9fUkVUUlkiLCJFUlJPUlNfTk9fQU1QX1NFUlZFUiIsIkNPTk5FQ1RJVklUWV9DSEVDS19JTlRFUlZBTCIsIldPUktTUEFDRV9VUkwiLCJMT0dJTl9VUkwiLCJERVNLVE9QX1VSTCIsIkRFU0tUT1BfQ1VSUkVOVF9VUkwiLCJTWU5DVVBfUkVESVJFQ1RfVVJMIiwiU1lOQ1VQX0hJU1RPUllfVEFSR0VUIiwiU1lOQ1VQX1NVTU1BUllfVVJMIiwiQUNUSVZJVFlfUFJFVklFV19VUkwiLCJBQ1RJVklUWV9FRElUX1VSTCIsIlVQREFURV9VUkwiLCJTRVRVUF9VUkwiLCJTRVRUSU5HU19VUkwiLCJDT0xMRUNUSU9OX1VTRVJTIiwiQ09MTEVDVElPTl9XT1JLUEFDRVMiLCJDT0xMRUNUSU9OX1RFQU1NRU1CRVJTIiwiQ09MTEVDVElPTl9DTElFTlRfU0VUVElOR1MiLCJDT0xMRUNUSU9OX0dMT0JBTF9TRVRUSU5HUyIsIkNPTExFQ1RJT05fQUNUSVZJVElFUyIsIkNPTExFQ1RJT05fRklFTERTIiwiQ09MTEVDVElPTl9QT1NTSUJMRV9WQUxVRVMiLCJDT0xMRUNUSU9OX1NZTkNVUF9MT0ciLCJDT0xMRUNUSU9OX0xBTkdTIiwiQ09MTEVDVElPTl9XU19TRVRUSU5HUyIsIkNPTExFQ1RJT05fQ1VSUkVOQ1lfUkFURVMiLCJDT0xMRUNUSU9OX0ZFQVRVUkVfTUFOQUdFUiIsIkNPTExFQ1RJT05fQ09OVEFDVFMiLCJDT0xMRUNUSU9OX1JFU09VUkNFUyIsIkNPTExFQ1RJT05fUkVQT1NJVE9SWSIsIkNPTExFQ1RJT05fR0FaRVRURUVSIiwiQ09MTEVDVElPTl9DQUxFTkRBUlMiLCJDT0xMRUNUSU9OX0NIQU5HRVNFVFMiLCJHQVpFVFRFRVJfRElTVEFOQ0VfRElWSURFIiwiREJfRklMRV9QUkVGSVgiLCJEQl9GSUxFX0VYVEVOU0lPTiIsIkRCX0NPTU1PTl9EQVRBU1RPUkVfT1BUSU9OUyIsImF1dG9sb2FkIiwiY29ycnVwdEFsZXJ0VGhyZXNob2xkIiwiREJfQVVUT0NPTVBBQ1RfSU5URVJWQUxfTUlMSVNFQ09ORFMiLCJEQl9ERUZBVUxUX1FVRVJZX0xJTUlUIiwiTEFOR1VBR0VfRU5HTElTSCIsIkZTX0xPQ0FMRVNfRElSRUNUT1JZIiwiTEFOR1VBR0VfTUFTVEVSX1RSQU5TTEFUSU9OU19GSUxFIiwiTEFOR1VBR0VfVFJBTlNMQVRJT05TX0ZJTEUiLCJMQU5HVUFHRV9ORVdfVFJBTlNMQVRJT05TX01VU1RfU1lOQyIsIkFTQVJfRElSIiwiQVBQX0RJUkVDVE9SWSIsIlRFU1RfRElSRUNUT1JZIiwiU1RBVElDX0RJUiIsIklNQUdFU19ESVIiLCJET0NfSUNPTlMiLCJEQl9TVEFUSUNfRElSIiwiTUlHUkFUSU9OU19ESVIiLCJIQVNIX0lURVJBVElPTlMiLCJESUdFU1RfQUxHT1JJVEhNX1NIQTEiLCJESUdFU1RfQUxHT1JJVEhNX1NIQTI1NiIsIkFDVElWSVRZX0VESVQiLCJBQ1RJVklUWV9WSUVXIiwiU1lOQ1VQX0ZPUkNFX0RBWVMiLCJTWU5DVVBfQkVTVF9CRUZPUkVfREFZUyIsIlNZTkNVUF9OT19EQVRFIiwiU1lOQ1VQX1RZUEVfVFJBTlNMQVRJT05TIiwiU1lOQ1VQX1RZUEVfVVNFUlMiLCJTWU5DVVBfVFlQRV9BU1NFVFMiLCJTWU5DVVBfVFlQRV9XT1JLU1BBQ0VTIiwiU1lOQ1VQX1RZUEVfR1MiLCJTWU5DVVBfVFlQRV9FWENIQU5HRV9SQVRFUyIsIlNZTkNVUF9UWVBFX0ZFQVRVUkVfTUFOQUdFUiIsIlNZTkNVUF9UWVBFX1dPUktTUEFDRV9NRU1CRVJTIiwiU1lOQ1VQX1RZUEVfQUxMX0ZJRUxEUyIsIlNZTkNVUF9UWVBFX0FDVElWSVRJRVNfUFVMTCIsIlNZTkNVUF9UWVBFX0FDVElWSVRJRVNfUFVTSCIsIlNZTkNVUF9UWVBFX0FDVElWSVRZX0ZJRUxEUyIsIlNZTkNVUF9UWVBFX0FDVElWSVRZX0ZJRUxEU19TVFJVQ1RVUkFMX0NIQU5HRVMiLCJTWU5DVVBfVFlQRV9DT05UQUNUU19QVUxMIiwiU1lOQ1VQX1RZUEVfQ09OVEFDVFNfUFVTSCIsIlNZTkNVUF9UWVBFX0FDVElWSVRZX1BPU1NJQkxFX1ZBTFVFUyIsIlNZTkNVUF9UWVBFX0NPTlRBQ1RfRklFTERTIiwiU1lOQ1VQX1RZUEVfQ09OVEFDVF9GSUVMRFNfU1RSVUNUVVJBTF9DSEFOR0VTIiwiU1lOQ1VQX1RZUEVfQ09OVEFDVF9QT1NTSUJMRV9WQUxVRVMiLCJTWU5DVVBfVFlQRV9SRVNPVVJDRVNfUFVMTCIsIlNZTkNVUF9UWVBFX1JFU09VUkNFU19QVVNIIiwiU1lOQ1VQX1RZUEVfUkVTT1VSQ0VfRklFTERTIiwiU1lOQ1VQX1RZUEVfUkVTT1VSQ0VfRklFTERTX1NUUlVDVFVSQUxfQ0hBTkdFUyIsIlNZTkNVUF9UWVBFX1JFU09VUkNFX1BPU1NJQkxFX1ZBTFVFUyIsIlNZTkNVUF9UWVBFX0NPTU1PTl9QT1NTSUJMRV9WQUxVRVMiLCJTWU5DVVBfVFlQRV9XT1JLU1BBQ0VfU0VUVElOR1MiLCJTWU5DVVBfVFlQRV9NQVBfVElMRVMiLCJTWU5DVVBfVFlQRV9HQVpFVFRFRVIiLCJTWU5DVVBfVFlQRV9DQUxFTkRBUlMiLCJTWU5DVVBfU1RBVFVTX1NVQ0NFU1MiLCJTWU5DVVBfU1RBVFVTX0ZBSUwiLCJTWU5DVVBfU1RBVFVTX1BBUlRJQUwiLCJTWU5DVVBfU1RBVFVTX0NBTkNFTEVEIiwiU1lOQ1VQX1NZTkNfUkVRVUVTVEVEX0FUIiwiU1lOQ1VQX1NZTkNfUkVRVUVTVEVEX0JZIiwiU1lOQ1VQX0RBVEVUSU1FX0ZJRUxEIiwiU1lOQ1VQX0RJRkZfTEVGVE9WRVIiLCJTWU5DVVBfREVQRU5ERU5DWV9DSEVDS19JTlRFUlZBTCIsIlNZTkNVUF9ERVRBSUxTX1NZTkNFRCIsIlNZTkNVUF9ERVRBSUxTX1VOU1lOQ0VEIiwiU1lOQ1VQX1JFU09VUkNFX1BVTExfQkFUQ0hfU0laRSIsIlNZTkNVUF9BQ1RJVklUSUVTX1BVTExfQkFUQ0hfU0laRSIsIlNZTkNVUF9DT05UQUNUU19QVUxMX0JBVENIX1NJWkUiLCJBQ1RJVklUWV9TVEFUVVNfRFJBRlQiLCJBQ1RJVklUWV9TVEFUVVNfVU5WQUxJREFURUQiLCJBQ1RJVklUWV9TVEFUVVNfVkFMSURBVEVEIiwiQ1VSUkVOQ1lfSE9VUiIsIkRFRkFVTFRfQ1VSUkVOQ1kiLCJSQVRFX1NBTUVfQ1VSUkVOQ1kiLCJSQVRFX0NVUlJFTkNZX05PVF9GT1VORCIsIkNVUlJFTkNZX1BBSVIiLCJWRVJTSU9OX1BBVFRFUk4iLCJWRVJTSU9OX1BBVFRFUk5fR1JPVVBTX1RPX0VYVFJBQ1QiLCJBTVBfQ09VTlRSWV9MT0dPIiwiQVNTRVRTX0RJUkVDVE9SWSIsIkJBU0VfNjRfUE5HX1BSRUZJWCIsIlRSQU5TUEFSRU5UX0ZMQUciLCJIRUxQX1BERl9GSUxFTkFNRSIsIkhFTFBfRElSIiwiRU5EU19XSVRIX1BVTkNUVUFUSU9OX1JFR0VYIiwiTUFQX1RJTEVTX0RJUiIsIlRJTEVTX1pJUF9GSUxFIiwiTUFQX01BUktFUl9JTUFHRSIsIk1BUF9NQVJLRVJfU0hBRE9XIiwiTUFQX01BUktFUl9DSVJDTEVfUkVEIiwiTUFQX01BUktFUl9DSVJDTEVfR1JFRU4iLCJQT0xZR09OX0JBU0VfQ09MT1IiLCJER19DT01QQU5ZX05BTUUiLCJER19BRERSRVNTXzEiLCJER19BRERSRVNTXzIiLCJER19DT05UQUNUX0lORk8iLCJMT0dfRElSIiwiTE9HX0ZJTEVfTkFNRSIsIkxPR19GSUxFX0VYVEVOU0lPTiIsIk1FU1NBR0VfVElNRU9VVCIsIk1FU1NBR0VfRElTQVBQRUFSX1RJTUVPVVQiLCJNRVNTQUdFX0NIRUNLX0lOVEVSVkFMIiwiTUVTU0FHRV9BTklNQVRJT05fRFVSQVRJT04iLCJJTlRFUk5BTF9EQVRFX0ZPUk1BVCIsIk1JTl9TVVBQT1JURURfWUVBUiIsIk1BWF9TVVBQT1JURURfWUVBUiIsIlVQREFURVNfRElSIiwiQ09OVEVOVF9ESVNQT1NJVElPTl9IRUFERVIiLCJVUERBVEVfVE1QX0ZJTEUiLCJPVEhFUl9JRCIsIk5SX1NZTkNfSElTVE9SWV9FTlRSSUVTIiwiTlJfTE9HX0ZJTEVTIiwiT0xEX1NZTkNfTE9HU19EVVJBVElPTl9JU09fODYwMSIsIk5SX09MRF9TWU5DX0xPR1NfVE9fS0VFUF9NSU5JTVVNIiwiTUFTVEVSX0JSQU5DSCIsIkRFVkVMT1BfQlJBTkNIIiwiUkVMRUFTRV9CUkFOQ0hfUkVHRVgiLCJSRUxFQVNFX0JSQU5DSEVTIiwiRElTQUJMRV9DSEFOR0VMT0dTIiwibW9kdWxlIiwiZnJlZXplIiwiUFVCTElDX1ZJRVdfQ0hBTkdFX1BBU1NXT1JEIiwiUFVCTElDX1ZJRVdfVFJPVUJMRV9TSUdOX0lOIiwiQUNUSVZJVFlfREVMSVZFUllfUkFURSIsIkFDVElWSVRZX1BST0pFQ1RfSURfQU5EX1BMQU5OSU5HIiwiQUNUSVZJVFlfRFVSQVRJT05fT0ZfUFJPSkVDVCIsIkFDVElWSVRZX1RFQU1fTEVBREVSIiwiQUNUSVZJVFlfU0FNRV9BU19QUk9QT1NFRF9TVEFSVF9EQVRFIiwiQUNUSVZJVFlfU0FNRV9BU19QUk9QT1NFRF9BUFBST1ZBTF9EQVRFIiwiQUNUSVZJVFlfSURFTlRJRklDQVRJT04iLCJBQ1RJVklUWV9MQVNUX1VQREFURURfQlkiLCJBQ1RJVklUWV9MQVNUX1VQREFURURfT04iLCJBQ1RJVklUWV9GVU5ESU5HIiwiQUZfRlVORElOR19GVU5ESU5HR1JPVVBfRlVORElOR0lURU0iLCJBQ1RJVklUWV9TRUNUT1JTIiwiQUNUSVZJVFlfUFJJTUFSWV9TRUNUT1JTIiwiQUNUSVZJVFlfU0VDT05EQVJZX1NFQ1RPUlMiLCJBQ1RJVklUWV9TVFJVQ1RVUkVTIiwiQUNUSVZJVFlfU1RSVUNUVVJFU19BRERfU1RSVUNUVVJFIiwiQUNUSVZJVFlfT1JHQU5JWkFUSU9OUyIsIkFDVElWSVRZX09SR0FOSVpBVElPTlNfRE9OT1JfT1JHQU5JWkFUSU9OIiwiQUNUSVZJVFlfT1JHQU5JWkFUSU9OU19CRU5FRklDSUFSWV9BR0VOQ1kiLCJBQ1RJVklUWV9PUkdBTklaQVRJT05TX0NPTlRSQUNUSU5HX0FHRU5DWSIsIkFDVElWSVRZX09SR0FOSVpBVElPTlNfRVhFQ1VUSU5HX0FHRU5DWSIsIkFDVElWSVRZX09SR0FOSVpBVElPTlNfSU1QTEVNRU5USU5HX0FHRU5DWSIsIkFDVElWSVRZX09SR0FOSVpBVElPTlNfUkVHSU9OQUxfR1JPVVAiLCJBQ1RJVklUWV9PUkdBTklaQVRJT05TX1JFTEFURURfR09WRVJOTUVOVF9PUkdBTklaQVRJT04iLCJBQ1RJVklUWV9PUkdBTklaQVRJT05TX1NFQ1RPUl9HUk9VUCIsIkFERF9GVU5ESU5HX0FVVE8iLCJBQ1RJVklUWV9PUkdBTklaQVRJT05TX0JFTkVGSUNJQVJZX0FHRU5DWV9BRERfRlVORElOR19BVVRPIiwiQUNUSVZJVFlfT1JHQU5JWkFUSU9OU19DT05UUkFDVElOR19BR0VOQ1lfQUREX0ZVTkRJTkdfQVVUTyIsIkFDVElWSVRZX09SR0FOSVpBVElPTlNfRE9OT1JfT1JHQU5JWkFUSU9OX0FERF9GVU5ESU5HX0FVVE8iLCJBQ1RJVklUWV9PUkdBTklaQVRJT05TX0VYRUNVVElOR19BR0VOQ1lfQUREX0ZVTkRJTkdfQVVUTyIsIkFDVElWSVRZX09SR0FOSVpBVElPTlNfSU1QTEVNRU5USU5HX0FHRU5DWV9BRERfRlVORElOR19BVVRPIiwiQUNUSVZJVFlfT1JHQU5JWkFUSU9OU19SRUdJT05BTF9HUk9VUF9BRERfRlVORElOR19BVVRPIiwiQUNUSVZJVFlfT1JHQU5JWkFUSU9OU19SRVNQT05TSUJMRV9PUkdBTklaQVRJT05fQUREX0ZVTkRJTkdfQVVUTyIsIkFDVElWSVRZX09SR0FOSVpBVElPTlNfU0VDVE9SX0dST1VQX0FERF9GVU5ESU5HX0FVVE8iLCJBQ1RJVklUWV9GVU5ESU5HX1NFQVJDSCIsIkFDVElWSVRZX0ZVTkRJTkdfU0VBUkNIX09SR0FOSVpBVElPTiIsIkFDVElWSVRZX0ZVTkRJTkdfU0VMRUNUX09SR19UWVBFIiwiQUNUSVZJVFlfUFJPR1JBTSIsIkFDVElWSVRZX1BMQU5OSU5HIiwiQUNUSVZJVFlfQ09OVEFDVCIsIkFDVElWSVRZX0RPQ1VNRU5UU19BRERfRE9DVU1FTlQiLCJBQ1RJVklUWV9ET0NVTUVOVFNfQUREX1dFQkxJTksiLCJBQ1RJVklUWV9JU1NVRVNfQUREX0lTU1VFIiwiQUNUSVZJVFlfSVNTVUVTX0RFTEVURV9JU1NVRSIsIkFDVElWSVRZX0lTU1VFU19BRERfTUVBU1VSRSIsIkFDVElWSVRZX0lTU1VFU19ERUxFVEVfTUVBU1VSRSIsIkFDVElWSVRZX0lTU1VFU19BRERfQUNUT1IiLCJBQ1RJVklUWV9JU1NVRVNfREVMRVRFX0FDVE9SIiwiQUNUSVZJVFlfRElTQlVSU0VNRU5UU19GVU5ESU5HX0ZMT1dTX09SR1JPTEVfQUREX0lNUExFTUVOVElOR19BR0VOQ1kiLCJBQ1RJVklUWV9ESVNCVVJTRU1FTlRTX0ZVTkRJTkdfRkxPV1NfT1JHUk9MRV9BRERfQ09OVFJBQ1RJTkdfQUdFTkNZIiwiQUNUSVZJVFlfRElTQlVSU0VNRU5UU19GVU5ESU5HX0ZMT1dTX09SR1JPTEVfQUREX0JFTkVGSUNJQVJZX0FHRU5DWSIsIkFDVElWSVRZX0RJU0JVUlNFTUVOVFNfRlVORElOR19GTE9XU19PUkdST0xFX0FERF9ET05PUl9PUkdBTklaQVRJT04iLCJBQ1RJVklUWV9ESVNCVVJTRU1FTlRTX0ZVTkRJTkdfRkxPV1NfT1JHUk9MRV9BRERfRVhFQ1VUSU5HX0FHRU5DWSIsIkFDVElWSVRZX0RJU0JVUlNFTUVOVFNfRlVORElOR19GTE9XU19PUkdST0xFX0FERF9SRUdJT05BTF9HUk9VUCIsIkFDVElWSVRZX0RJU0JVUlNFTUVOVFNfRlVORElOR19GTE9XU19PUkdST0xFX0FERF9SRVNQT05TSUJMRV9PUkdBTklaQVRJT04iLCJBQ1RJVklUWV9ESVNCVVJTRU1FTlRTX0ZVTkRJTkdfRkxPV1NfT1JHUk9MRV9BRERfU0VDVE9SX0dST1VQIiwiQUNUSVZJVFlfQ09NTUlUTUVOVFNfRlVORElOR19GTE9XU19PUkdST0xFX0FERF9JTVBMRU1FTlRJTkdfQUdFTkNZIiwiQUNUSVZJVFlfQ09NTUlUTUVOVFNfRlVORElOR19GTE9XU19PUkdST0xFX0FERF9DT05UUkFDVElOR19BR0VOQ1kiLCJBQ1RJVklUWV9DT01NSVRNRU5UU19GVU5ESU5HX0ZMT1dTX09SR1JPTEVfQUREX0JFTkVGSUNJQVJZX0FHRU5DWSIsIkFDVElWSVRZX0NPTU1JVE1FTlRTX0ZVTkRJTkdfRkxPV1NfT1JHUk9MRV9BRERfRE9OT1JfT1JHQU5JWkFUSU9OIiwiQUNUSVZJVFlfQ09NTUlUTUVOVFNfRlVORElOR19GTE9XU19PUkdST0xFX0FERF9FWEVDVVRJTkdfQUdFTkNZIiwiQUNUSVZJVFlfQ09NTUlUTUVOVFNfRlVORElOR19GTE9XU19PUkdST0xFX0FERF9SRUdJT05BTF9HUk9VUCIsIkFDVElWSVRZX0NPTU1JVE1FTlRTX0ZVTkRJTkdfRkxPV1NfT1JHUk9MRV9BRERfUkVTUE9OU0lCTEVfT1JHQU5JWkFUSU9OIiwiQUNUSVZJVFlfQ09NTUlUTUVOVFNfRlVORElOR19GTE9XU19PUkdST0xFX0FERF9TRUNUT1JfR1JPVVAiLCJBQ1RJVklUWV9FWFBFTkRJVFVSRVNfRlVORElOR19GTE9XU19PUkdST0xFX0FERF9JTVBMRU1FTlRJTkdfQUdFTkNZIiwiQUNUSVZJVFlfRVhQRU5ESVRVUkVTX0ZVTkRJTkdfRkxPV1NfT1JHUk9MRV9BRERfQ09OVFJBQ1RJTkdfQUdFTkNZIiwiQUNUSVZJVFlfRVhQRU5ESVRVUkVTX0ZVTkRJTkdfRkxPV1NfT1JHUk9MRV9BRERfQkVORUZJQ0lBUllfQUdFTkNZIiwiQUNUSVZJVFlfRVhQRU5ESVRVUkVTX0ZVTkRJTkdfRkxPV1NfT1JHUk9MRV9BRERfRE9OT1JfT1JHQU5JWkFUSU9OIiwiQUNUSVZJVFlfRVhQRU5ESVRVUkVTX0ZVTkRJTkdfRkxPV1NfT1JHUk9MRV9BRERfRVhFQ1VUSU5HX0FHRU5DWSIsIkFDVElWSVRZX0VYUEVORElUVVJFU19GVU5ESU5HX0ZMT1dTX09SR1JPTEVfQUREX1JFR0lPTkFMX0dST1VQIiwiQUNUSVZJVFlfRVhQRU5ESVRVUkVTX0ZVTkRJTkdfRkxPV1NfT1JHUk9MRV9BRERfUkVTUE9OU0lCTEVfT1JHQU5JWkFUSU9OIiwiQUNUSVZJVFlfRVhQRU5ESVRVUkVTX0ZVTkRJTkdfRkxPV1NfT1JHUk9MRV9BRERfU0VDVE9SX0dST1VQIiwiTVRFRl9QUk9KRUNUSU9OUyIsIk1URUZfUFJPSkVDVElPTlNfQU1PVU5UIiwiTVRFRl9QUk9KRUNUSU9OU19DVVJSRU5DWSIsIk1URUZfUFJPSkVDVElPTlNfUFJPSkVDVElPTiIsIk1URUZfUFJPSkVDVElPTlNfREFURSIsIlVJVXRpbHMiLCJoYXNoIiwiaSIsImxlbmd0aCIsImNoYXJDb2RlQXQiLCJzdHJpbmdUb0lkIiwiRGF0ZSIsIm5vdyIsIk1hdGgiLCJyYW5kb20iLCJ0b1N0cmluZyIsInN1YnN0cmluZyIsInRydW5jIiwidGV4dCIsInJlcGxhY2UiLCJjaGFyIiwidG9VcHBlckNhc2UiLCJvYmoiLCJKU09OIiwicGFyc2UiLCJzdHJpbmdpZnkiLCJBQ1RJVklUWV9CVURHRVQiLCJBQ1RJVklUWV9TVEFUVVMiLCJTVEFUVVNfUkVBU09OIiwiRklOQU5DSUFMX0lOU1RSVU1FTlQiLCJUWVBFX09GX0lNUExFTUVOVEFUSU9OIiwiT0JKRUNUSVZFIiwiUkVTVUxUUyIsIkJVREdFVF9DT0RFX1BST0pFQ1RfSUQiLCJBQ1RVQUxfQVBQUk9WQUxfREFURSIsIkZVTkRJTkdTIiwiRlVORElOR19ET05PUl9PUkdfSUQiLCJJU19EUkFGVCIsIk9SR19ST0xFX09SR19JRCIsIkFERElUSU9OQUxfSU5GTyIsIlBSSU1BUllfU0VDVE9SUyIsIlNFQ09OREFSWV9TRUNUT1JTIiwiVEVSVElBUllfU0VDVE9SUyIsIlRBR19TRUNUT1JTIiwiU0VDVE9SIiwiU0VDVE9SX1BFUkNFTlRBR0UiLCJGSU5BTkNJTkdfSU5TVFJVTUVOVCIsIk1PREFMSVRJRVMiLCJMSU5FX01JTklTVFJZX1JBTksiLCJHT1ZFUk5NRU5UX0FHUkVFTUVOVF9OVU1CRVIiLCJGVU5ESU5HX1NUQVRVUyIsIkxPQ0FUSU9OUyIsIkxPQ0FUSU9OIiwiTE9DQVRJT05fUEVSQ0VOVEFHRSIsIklNUExFTUVOVEFUSU9OX0xPQ0FUSU9OIiwiSU1QTEVNRU5UQVRJT05fTEVWRUwiLCJBUFBST1ZBTF9TVEFUVVMiLCJBUFBST1ZFRF9CWSIsIkFQUFJPVkFMX0RBVEUiLCJUWVBFX09GX0FTU0lTVEFOQ0UiLCJFWFBFTkRJVFVSRV9DTEFTUyIsIkZVTkRJTkdfREVUQUlMUyIsIk1PREVfT0ZfUEFZTUVOVCIsIkZVTkRJTkdfQ0xBU1NJRklDQVRJT05fREFURSIsIkFHUkVFTUVOVCIsIkRPTk9SX09CSkVDVElWRSIsIkNPTkRJVElPTlMiLCJBR1JFRU1FTlRfQ09ERSIsIkFHUkVFTUVOVF9USVRMRSIsIlBST0pFQ1RfQ0FURUdPUlkiLCJQUk9KRUNUX0lNUExFTUVOVElOR19VTklUIiwiT1JHQU5JWkFUSU9OIiwiUEVSQ0VOVEFHRSIsIkFNUF9PUkdBTklaQVRJT05fUk9MRV9JRCIsIlJPTEUiLCJFWEVDVVRJTkdfQUdFTkNZIiwiQ09OVFJBQ1RJTkdfQUdFTkNZIiwiQkVORUZJQ0lBUllfQUdFTkNZIiwiSU1QTEVNRU5USU5HX0FHRU5DWSIsIlJFU1BPTlNJQkxFX09SR0FOSVpBVElPTiIsIkRPTk9SX09SR0FOSVpBVElPTiIsIlJFR0lPTkFMX0dST1VQIiwiU0VDVE9SX0dST1VQIiwiQlVER0VUUyIsIkJVREdFVF9DT0RFIiwiQlVER0VUX09SR0FOSVpBVElPTl9DT0RFIiwiQVJDSElWRUQiLCJUUkFOU0FDVElPTl9EQVRFIiwiVFJBTlNBQ1RJT05fVFlQRSIsIkNPTU1JVE1FTlRTIiwiRElTQlVSU0VNRU5UUyIsIkVYUEVORElUVVJFUyIsIkVTVElNQVRFRF9ESVNCVVJTRU1FTlRTIiwiVFJBTlNBQ1RJT05fQU1PVU5UIiwiQURKVVNUTUVOVF9UWVBFIiwiQUNUVUFMX1NUQVJUX0RBVEUiLCJQUk9QT1NFRF9TVEFSVF9EQVRFIiwiQUNUVUFMX0NPTVBMRVRJT05fREFURSIsIkNPTlRSQUNUSU5HX0RBVEUiLCJESVNCVVJTRU1FTlRfREFURSIsIlBST1BPU0VEX0FQUFJPVkFMX0RBVEUiLCJPUklHSU5BTF9DT01QTEVUSU9OX0RBVEUiLCJQUk9QT1NFRF9DT01QTEVUSU9OX0RBVEUiLCJGSU5BTF9EQVRFX0ZPUl9ESVNCVVJTRU1FTlRTIiwiRklOQUxfREFURV9GT1JfQ09OVFJBQ1RJTkciLCJFRkZFQ1RJVkVfRlVORElOR19EQVRFIiwiRlVORElOR19DTE9TSU5HX0RBVEUiLCJSQVRJRklDQVRJT05fREFURSIsIk1BVFVSSVRZIiwiTEFTVF9BVURJVF9EQVRFIiwiU0lHTkFUVVJFX0RBVEUiLCJIVU1BTklUQVJJQU5fQUlEIiwiRElTQVNURVJfUkVTUE9OU0UiLCJQUk9HUkFNIiwiUFJPR1JBTV9QRVJDRU5UQUdFIiwiUFJPR1JBTV9TRVRUSU5HUyIsIk5BVElPTkFMX1BMQU5fT0JKRUNUSVZFIiwiUFJJTUFSWV9QUk9HUkFNUyIsIlNFQ09OREFSWV9QUk9HUkFNUyIsIlRFUlRJQVJfUFJPR1JBTVMiLCJHT1ZFUk5NRU5UX0FQUFJPVkFMX1BST0NFRFVSRVMiLCJKT0lOVF9DUklURVJJQSIsIlRFQU0iLCJSRUpFQ1RFRF9JRCIsIklOVEVSTkFMX0lEIiwiQU1QX0lEIiwiUFJPSkVDVF9USVRMRSIsIkRFU0NSSVBUSU9OIiwiTU9ESUZJRURfQlkiLCJNT0RJRklFRF9PTiIsIkNSRUFURURfQlkiLCJDUkVBVEVEX09OIiwiTEFTVF9JTVBPUlRFRF9CWSIsIkNMSUVOVF9DSEFOR0VfSUQiLCJDTElFTlRfQ1JFQVRFRF9PTiIsIkNMSUVOVF9VUERBVEVEX09OIiwiSVNfUFVTSEVEIiwiQUNUSVZJVFlfR1JPVVAiLCJWRVJTSU9OIiwiUFJPSkVDVF9DT01NRU5UUyIsIkxFU1NPTlNfTEVBUk5FRCIsIlBST0pFQ1RfSU1QQUNUIiwiQUNUSVZJVFlfU1VNTUFSWSIsIkNPTkRJVElPTkFMSVRJRVMiLCJQUk9KRUNUX01BTkFHRU1FTlQiLCJBX0NfQ0hBUFRFUiIsIkNSSVNfTlVNQkVSIiwiSUFUSV9JREVOVElGSUVSIiwiQUNUSVZJVFlfSU5URVJOQUxfSURTIiwiSElFUkFSQ0hJQ0FMX1ZBTFVFIiwiSElFUkFSQ0hJQ0FMX1ZBTFVFX1BBUlRTIiwiSElFUkFSQ0hJQ0FMX1ZBTFVFX0RFUFRIIiwiUFBDX0FNT1VOVCIsIlJQQ19BTU9VTlQiLCJQUENfQU5OVUFMX0JVREdFVFMiLCJBTU9VTlQiLCJDVVJSRU5DWSIsIkZVTkRJTkdfREFURSIsIkNPTVBPTkVOVFMiLCJUT1RBTF9OVU1CRVJfT0ZfRlVORElOR19TT1VSQ0VTIiwiU09VUkNFX1JPTEUiLCJBTVBfRlVORElOR19JRCIsIklTU1VFUyIsIklTU1VFX0RBVEUiLCJJU1NVRV9OQU1FIiwiTUVBU1VSRVMiLCJNRUFTVVJFX05BTUUiLCJNRUFTVVJFX0RBVEUiLCJBQ1RPUlMiLCJBQ1RPUl9OQU1FIiwiU1RSVUNUVVJFUyIsIlNUUlVDVFVSRVNfVElUTEUiLCJTVFJVQ1RVUkVTX0RFU0NSSVBUSU9OIiwiU1RSVUNUVVJFU19MQVRJVFVERSIsIlNUUlVDVFVSRVNfTE9OR0lUVURFIiwiU1RSVUNUVVJFU19DT0xPUiIsIlNUUlVDVFVSRVNfTEFUIiwiU1RSVUNUVVJFU19MTkciLCJTVFJVQ1RVUkVTX1NIQVBFIiwiU1RSVUNUVVJFU19QT0lOVCIsIlNUUlVDVFVSRVNfUE9MWUdPTiIsIlNUUlVDVFVSRVNfUE9MWUxJTkUiLCJTVFJVQ1RVUkVTX0NPT1JESU5BVEVTIiwiQ09NUE9ORU5UX1RZUEUiLCJDT01QT05FTlRfVElUTEUiLCJDT01QT05FTlRfRlVORElORyIsIkNPTVBPTkVOVF9ERVNDUklQVElPTiIsIkNPTVBPTkVOVF9PUkdBTklaQVRJT04iLCJGVU5ESU5HX0FNT1VOVF9JRCIsIkVYVFJBX0lORk8iLCJWQUxVRSIsIkFDUk9OWU0iLCJUWVBFX09GX0NPT1BFUkFUSU9OIiwiQU5OVUFMX1BST0pFQ1RfQlVER0VUX0lEIiwiVFlQRSIsIllFQVIiLCJHUk9VUF9WRVJTSU9ORURfRlVORElORyIsIkFDVElWRV9MSVNUIiwiQUNUSVZFIiwiREVMRUdBVEVEX0NPT1BFUkFUSU9OIiwiREVMRUdBVEVEX1BBUlRORVIiLCJGSU5BTkNJTkdfSUQiLCJESVNCVVJTRU1FTlRfT1JERVJfSUQiLCJQTEVER0UiLCJDQVBJVEFMX1NQRU5ESU5HX1BFUkNFTlRBR0UiLCJSRVBPUlRJTkdfREFURSIsIlJFQ0lQSUVOVF9ST0xFIiwiUkVDSVBJRU5UX09SR0FOSVpBVElPTiIsIlRFTVBPUkFMX0lEIiwiTUlOSVNUUllfQ09ERSIsIlBST0pFQ1RfQ09ERSIsIkZZIiwiSU5ESVJFQ1RfT05fQlVER0VUIiwiSU1QTEVNRU5UQVRJT05fTEVWRUxTX0VYVFJBX0lORk8iLCJJTVBMRU1FTlRBVElPTl9MT0NBVElPTl9FWFRSQV9JTkZPIiwiRE9OT1JfQ09OVEFDVCIsIlBST0pFQ1RfQ09PUkRJTkFUT1JfQ09OVEFDVCIsIlNFQ1RPUl9NSU5JU1RSWV9DT05UQUNUIiwiTU9GRURfQ09OVEFDVCIsIklNUExFTUVOVElOR19FWEVDVVRJTkdfQUdFTkNZX0NPTlRBQ1QiLCJDT05UQUNUIiwiT1JHQU5JWkFUSU9OX0dST1VQIiwiRklYRURfRVhDSEFOR0VfUkFURSIsIlBSSU1BUllfQ09OVEFDVCIsIkFDVElWSVRZX0RPQ1VNRU5UUyIsIkRPQ1VNRU5UX1RZUEUiLCJJU08yIiwiUFJPSkVDVElPTiIsIlBJUEVMSU5FIiwiUFJPSkVDVElPTl9EQVRFIiwiU0FNRV9BU19QUk9QT1NFRF9TVEFSVF9EQVRFX0xBQkVMIiwiU0FNRV9BU19QUk9QT1NFRF9BUFBST1ZBTF9EQVRFX0xBQkVMIiwiREVQRU5ERU5DWV9JTVBMRU1FTlRBVElPTl9MRVZFTF9QUkVTRU5UIiwiREVQRU5ERU5DWV9JTVBMRU1FTlRBVElPTl9MRVZFTF9WQUxJRCIsIkRFUEVOREVOQ1lfSU1QTEVNRU5UQVRJT05fTE9DQVRJT05fUFJFU0VOVCIsIkRFUEVOREVOQ1lfSU1QTEVNRU5UQVRJT05fTE9DQVRJT05fVkFMSUQiLCJERVBFTkRFTkNZX1BST0pFQ1RfQ09ERV9PTl9CVURHRVQiLCJERVBFTkRFTkNZX09OX0JVREdFVCIsIkRFUEVOREVOQ1lfVFJBTlNBQ1RJT05fUFJFU0VOVCIsIkRFUEVOREVOQ1lfQ09NUE9ORU5UX0ZVTkRJTkdfT1JHX1ZBTElEIiwiQVBfU0VDVElPTl9JRFMiLCJrZXkiLCJmbVBhdGgiLCJGTUMiLCJzZWN0aW9uUGF0aCIsIkFDVElWSVRZX0lOVEVSTkFMX0lEU19DT0xTIiwiQUNUSVZJVFlfUExBTk5JTkdfQ09MUyIsIkFDVElWSVRZX0xPQ0FUSU9OX0NPTFMiLCJBQ1RJVklUWV9GVU5ESU5HX0NPTFMiLCJBQ1RJVklUWV9DT05UQUNUX0NPTFMiLCJBUF9GVU5ESU5HU19UQUJMRV9DT0xTIiwiTVVMVElfU0VMRUNUX01JTl9TSVpFIiwiTVVMVElfU0VMRUNUX01BWF9TSVpFIiwidG9GaWVsZE5hbWVzIiwibGlzdE9mTmFtZXMiLCJtYXAiLCJ0b0ZpZWxkTmFtZSIsIm5hbWUiLCJ0b0xvd2VyQ2FzZSIsInRvT3JpZ2luYWxMYWJlbCIsImZpZWxkTmFtZSIsImNhcGl0YWxpemUiLCJOT1RJRklDQVRJT05fT1JJR0lOX0FQSV9TRUNVUklUWSIsIk5PVElGSUNBVElPTl9PUklHSU5fQVBJX05FVFdPUksiLCJOT1RJRklDQVRJT05fT1JJR0lOX0FQSV9TWU5DVVAiLCJOT1RJRklDQVRJT05fT1JJR0lOX0FQSV9HRU5FUkFMIiwiTk9USUZJQ0FUSU9OX09SSUdJTl9EQVRBQkFTRSIsIk5PVElGSUNBVElPTl9PUklHSU5fQVVUSEVOVElDQVRJT04iLCJOT1RJRklDQVRJT05fT1JJR0lOX1dPUktTUEFDRV9GSUxURVIiLCJOT1RJRklDQVRJT05fT1JJR0lOX1dPUktTUEFDRSIsIk5PVElGSUNBVElPTl9PUklHSU5fU1lOQ1VQX1BST0NFU1MiLCJOT1RJRklDQVRJT05fT1JJR0lOX0NVUlJFTkNZX01BTkFHRVIiLCJOT1RJRklDQVRJT05fT1JJR0lOX0RBVEVTIiwiTk9USUZJQ0FUSU9OX09SSUdJTl9BQ1RJVklUWSIsIk5PVElGSUNBVElPTl9PUklHSU5fUkVTT1VSQ0UiLCJOT1RJRklDQVRJT05fT1JJR0lOX0kxOE5FWFQiLCJOT1RJRklDQVRJT05fT1JJR0lOX1VQREFURV9DSEVDSyIsIk5PVElGSUNBVElPTl9PUklHSU5fVVBEQVRFIiwiTk9USUZJQ0FUSU9OX09SSUdJTl9TRVRVUCIsIk5PVElGSUNBVElPTl9PUklHSU5fU0VUVElOR1MiLCJOT1RJRklDQVRJT05fU0VWRVJJVFlfV0FSTklORyIsIk5PVElGSUNBVElPTl9TRVZFUklUWV9JTkZPIiwiTk9USUZJQ0FUSU9OX1NFVkVSSVRZX0VSUk9SIiwiTk9USUZJQ0FUSU9OX0VSUk9SX0xFVkVMX01JTk9SIiwiTk9USUZJQ0FUSU9OX0VSUk9SX0xFVkVMX0JMT0NLRVIiLCJOT1RJRklDQVRJT05fT1JJR0lOX1dST05HX01FVEhPRF9VU0FHRSIsIkVSUk9SX0NPREVfTk9fQ09OTkVDVElWSVRZIiwiRVJST1JfQ09ERV9BQ0NFU1NfREVOSUVEIiwiTVNHX0lOVkFMSURfVVJMIiwiTVNHX1RJTUVPVVQiLCJNU0dfVU5LTk9XTl9ORVRXT1JLX0VSUk9SIiwiTVNHX0FNUF9VTlJFQUNIQUJMRSIsIkdFTkVSQUxfQ09OTkVDVElPTl9FUlJPUlMiLCJET05PUl9BR0VOQ1kiLCJPUkdfUk9MRV9OQU1FUyIsIkFDVFVBTCIsIlBMQU5ORUQiLCJBQ1RVQUxfQ09NTUlUTUVOVFMiLCJBY3Rpdml0eUNvbnN0YW50cyIsIkFDVFVBTF9ESVNCVVJTRU1FTlRTIiwiQUNUVUFMX0VYUEVORElUVVJFUyIsIlBMQU5ORURfQ09NTUlUTUVOVFMiLCJQTEFOTkVEX0RJU0JVUlNFTUVOVFMiLCJQTEFOTkVEX0VYUEVORElUVVJFUyIsIlVOQUxMT0NBVEVEX0RJU0JVUlNFTUVOVFMiLCJERUxJVkVSWV9SQVRFIiwiQURKVVNUTUVOVF9UWVBFUyIsIkFESlVTVE1FTlRfVFlQRVNfQVBfT1JERVIiLCJORVdfQUNUSVZJVFlfSUQiLCJQUk9QT1NFRF9QUk9KRUNUX0NPU1QiLCJSRVZJU0VEX1BST0pFQ1RfQ09TVCIsIkFDUk9OWU1fRE9OT1JfT1JHQU5JWkFUSU9OIiwiQUNST05ZTV9FWEVDVVRJTkdfQUdFTkNZIiwiQUNST05ZTV9JTVBMRU1FTlRJTkdfQUdFTkNZIiwiQUNST05ZTV9CRU5FRklDSUFSWV9BR0VOQ1kiLCJBQ1JPTllNX1JFU1BPTlNJQkxFX09SR0FOSVpBVElPTiIsIkFQUFJPVkFMX1NUQVRVU19DUkVBVEVEIiwiQVBQUk9WQUxfU1RBVFVTX0FQUFJPVkVEIiwiQVBQUk9WQUxfU1RBVFVTX0VESVRFRCIsIkFQUFJPVkFMX1NUQVRVU19TVEFSVEVEX0FQUFJPVkVEIiwiQVBQUk9WQUxfU1RBVFVTX1NUQVJURUQiLCJBUFBST1ZBTF9TVEFUVVNfTk9UX0FQUFJPVkVEIiwiQVBQUk9WQUxfU1RBVFVTX1JFSkVDVEVEIiwiT05fQlVER0VUIiwiSU5URVJOQVRJT05BTCIsIkNPVU5UUlkiLCJSRUxBVEVEX0RPQ1VNRU5UUyIsIlRNUF9FTlRJVFlfVkFMSURBVE9SIiwiQUxXQVlTX1JFUVVJUkVEIiwiRlVORElOR19BQ1RJVkVfTElTVCIsIkZVTkRJTkdfVFlQRV9PRl9BU1NJU1RBTkNFIiwiRlVORElOR19ERVRBSUxTX1BBVEgiLCJGVU5ESU5HX0NVUlJFTkNZX1BBVEgiLCJNVEVGX0NVUlJFTkNZX1BBVEgiLCJQUENfQ1VSUkVOQ1lfUEFUSCIsIlJQQ19DVVJSRU5DWV9QQVRIIiwiQ09NUE9ORU5UX0NVUlJFTkNZX1BBVEgiLCJESVNCVVJTRU1FTlRTX1BBVEgiLCJBQ1RJVklUWV9JTlRFUk5BTF9JRFNfSU5URVJOQUxfSURfUEFUSCIsIkFDVElWSVRZX0lOVEVSTkFMX0lEU19PUkdBTklaQVRJT05fUEFUSCIsIkxPQ0FUSU9OX1BBVEgiLCJOQVRJT05BTF9QTEFOX09CSkVDVElWRV9QQVRIIiwiUFJJTUFSWV9QUk9HUkFNX1BBVEgiLCJTRUNPTkRBUllfUFJPR1JBTV9QQVRIIiwiUFJJTUFSWV9TRUNUT1JfUEFUSCIsIlNFQ09OREFSWV9TRUNUT1JfUEFUSCIsIlRFUlRJQVJZX1NFQ1RPUl9QQVRIIiwiRE9OT1JfT1JHQU5JWkFUSU9OU19QQVRIIiwiUkVTUE9OU0lCTEVfT1JHQU5JWkFUSU9OX0JVREdFVFNfUEFUSCIsIlJFTEFURURfT1JHU19QQVRIUyIsIlZhbHVlQ29uc3RhbnRzIiwib3JnUm9sZSIsIlJFTEFURURfT1JHU19PUkdBTklaQVRJT05fUEFUSFMiLCJSSUNIX1RFWFRfRklFTERTIiwiU2V0IiwiUEFUSFNfV0lUSF9UUkVFX1NUUlVDVFVSRSIsIlBBVEhTX1dJVEhfSElFUkFSQ0hJQ0FMX1ZBTFVFUyIsIkFDVElWSVRZX0NPTlRBQ1RfUEFUSFMiLCJUUkFOU0FDVElPTl9UWVBFUyIsIlRSQU5TQUNUSU9OX1RZUEVTX09SREVSRUQiLCJGVU5ESU5HX1RSQU5TQUNUSU9OX1RZUEVTIiwiQURKVVNUTUVOVF9UWVBFX1BBVEhTIiwidHQiLCJGVU5ESU5HX0NVUlJFTkNZX1BBVEhTIiwiUEFUSFNfRk9SX0FDVElWSVRZX0NVUlJFTkNZIiwiUEFUSFNfRk9SX0NVUlJFTkNZIiwiRE9fTk9UX0hZRFJBVEVfRklFTERTX0xJU1QiLCJBTFRFUk5BVEVfVkFMVUVfUEFUSCIsIkFDVElWSVRZX0ZJRUxEU19GTV9QQVRIIiwiRmVhdHVyZU1hbmFnZXJDb25zdGFudHMiLCJQUkVGSVhfQUNUSVZJVFkiLCJQUkVGSVhfQ09OVEFDVCIsIlBSRUZJWF9SRVNPVVJDRSIsIlBSRUZJWF9DT01NT04iLCJQUkVGSVhfTElTVCIsIkZJRUxEX1BBVEgiLCJGSUVMRF9PUFRJT05TIiwiRklFTERfT1BUSU9OX1VTQUJMRSIsIkxJU1RfTUFYX1NJWkUiLCJSRUdFWF9QQVRURVJOIiwiRklFTERfTkFNRSIsIkZJRUxEX0xBQkVMIiwiRklFTERfUkVRVUlSRUQiLCJGSUVMRF9VTklRVUVfQ09OU1RSQUlOVCIsIkZJRUxEX1RZUEUiLCJGSUVMRF9MRU5HVEgiLCJGSUVMRF9QRVJDRU5UQUdFIiwiRklFTERfUEVSQ0VOVEFHRV9DT05TVFJBSU5UIiwiRklFTERfSVRFTV9UWVBFIiwiRklFTERfSU1QT1JUQUJMRSIsIkZJRUxEX0lEX09OTFkiLCJGSUVMRF9NVUxUSVBMRV9WQUxVRVNfQUxMT1dFRCIsIkZJRUxEX1RSRUVfQ09MTEVDVElPTiIsIkZJRUxEX0NISUxEUkVOIiwiRklFTERfREVQRU5ERU5DSUVTIiwiRklFTERfVFlQRV9MSVNUIiwiRklFTERfVFlQRV9PQkpFQ1QiLCJGSUVMRF9UWVBFX1NUUklORyIsIkZJRUxEX1RZUEVfTE9ORyIsIkZJRUxEX1RZUEVfRkxPQVQiLCJGSUVMRF9UWVBFX0JPT0xFQU4iLCJGSUVMRF9UWVBFX0RBVEUiLCJGSUVMRF9UWVBFX1RJTUVTVEFNUCIsImxvZ2dlciIsIkZpZWxkc01hbmFnZXIiLCJmaWVsZHNNYW5hZ2VyIiwiTG9nZ2VyTWFuYWdlciIsIm5ld0ZpZWxkc01hbmFnZXIiLCJhc3NpZ24iLCJmaWVsZHNEZWYiLCJwb3NzaWJsZVZhbHVlc0NvbGxlY3Rpb24iLCJjdXJyZW50TGFuZ3VhZ2UiLCJkZWJ1ZyIsIl9maWVsZHNEZWYiLCJfcG9zc2libGVWYWx1ZXNNYXAiLCJwdiIsImlkIiwiRlBDIiwiX2ZpZWxkUGF0aHNFbmFibGVkU3RhdHVzTWFwIiwiX2xhbmciLCJDb25zdGFudHMiLCJfZGVmYXVsdExhbmciLCJjbGVhbnVwIiwiZmQiLCJjaGlsZHJlbiIsImZpZWxkX2xhYmVsIiwia2V5cyIsImxhbmciLCJmaWVsZFBhdGgiLCJ2YWx1ZXMiLCJwYXRoUGFydHMiLCJpc0ZpZWxkUGF0aEVuYWJsZWQiLCJ1bmRlZmluZWQiLCJfYnVpbGRGaWVsZFBhdGhTdGF0dXMiLCJzcGxpdCIsImN1cnJlbnRUcmVlIiwiaXNEaXNhYmxlZCIsInNvbWUiLCJmaW5kIiwiZmllbGQiLCJmaWVsZF9uYW1lIiwicGFydCIsIm9yaWdWYWx1ZSIsInRyblZhbHVlIiwib3B0aW9ucyIsIm9wdGlvbiIsIm9wdCIsInRyYW5zbGF0aW9ucyIsImdldEZpZWxkRGVmIiwiZGVwZW5kZW5jaWVzIiwiZmllbGRQYXRocyIsIl9nZXRGaWVsZFBhdGhzQnlEZXBlbmRlbmNpZXMiLCJjdXJyZW50UGF0aCIsImhhc0RlcGVuZGVuY3kiLCJpbmNsdWRlcyIsImRlcCIsImdldE9wdGlvblRyYW5zbGF0aW9uIiwiZ2V0VmFsdWUiLCJwYXJ0cyIsIm5ld0xpc3QiLCJuZXdFbGVtZW50IiwiY3VycmVudCIsImNvbmNhdCIsInZhbCIsIkNMSUVOVF9DSEFOR0VfSURfUFJFRklYIiwiTkFNRSIsIkxBU1RfTkFNRSIsIlRJVExFIiwiT1JHQU5JWkFUSU9OX05BTUUiLCJGVU5DVElPTiIsIk9GRklDRV9BRERSRVNTIiwiQ1JFQVRPUiIsIk9SR0FOSVNBVElPTl9DT05UQUNUUyIsIk9SR0FOSVNBVElPTiIsIkVNQUlMIiwiUEhPTkUiLCJFWFRFTlNJT05fVkFMVUUiLCJGQVgiLCJUTVBfRk9STV9JRCIsIlRNUF9VTklRVUVfSUQiLCJUTVBfSFlEUkFURUQiLCJUTVBfRVJST1JTIiwiVE1QX0NPTlRBQ1RfTE9BREVEIiwiVE1QX0NPTlRBQ1RfTE9BRElORyIsIlRNUF9GSUVMRFMiLCJDdXJyZW5jeVJhdGVzTWFuYWdlciIsImN1cnJlbmN5UmF0ZXMiLCJiYXNlQ3VycmVuY3kiLCJkYXRlVXRpbHMiLCJlcnJvck5vdGlmaWNhdGlvbkhlbHBlciIsIl9jdXJyZW5jeVJhdGVzIiwiX2Jhc2VDdXJyZW5jeSIsIl9jdXJybmNpZXNXaXRoRXhjaGFuZ2VSYXRlcyIsIl9nZXRDdXJyZW5jaWVzV2l0aEV4Y2hhbmdlUmF0ZXMiLCJfdHJhbnNsYXRlIiwiX2RhdGVVdGlscyIsIl9lcnJvck5vdGlmaWNhdGlvbkhlbHBlciIsImN1cnJlbmN5RnJvbSIsImN1cnJlbmN5VG8iLCJkYXRlVG9GaW5kIiwiZml4ZWRFeGNoYW5nZVJhdGUiLCJjb252ZXJ0Q3VycmVuY3kiLCJ0aW1lRGF0ZVRvRmluZCIsImdldFRpbWUiLCJjdXJyZW5jaWVzVG9TZWFyY2hEaXJlY3QiLCJpdGVtIiwiZnJvbSIsInRvIiwiZ2V0RXhjaGFuZ2VSYXRlIiwiY3VycmVuY2llc1RvU2VhcmNoSW52ZXJzZSIsImNvbnZlcnRWaWFCYXNlQ3VycmVuY3kiLCJfZ2V0Q3VycmVuY3lFcnJvciIsImZ1bmRpbmdEZXRhaWxzIiwidG90YWwiLCJjb252ZXJ0VHJhbnNhY3Rpb25BbW91bnRUb0N1cnJlbmN5IiwiZnVuZGluZ0RldGFpbCIsImFtb3VudCIsImRhdGUiLCJjdXJyZW5jeVJhdGUiLCJmb3JtYXREYXRlRm9yQVBJIiwidHJhbnNhY3Rpb25EYXRlIiwidHJhbnNhY3Rpb25BbW91bnQiLCJjb252ZXJ0QW1vdW50VG9DdXJyZW5jeSIsImN1cnJlbmNpZXNUb1NlYXJjaCIsImxvd2VyRW5kIiwiaGlnaGVyRW5kIiwicmF0ZXMiLCJtaWRkbGUiLCJmbG9vciIsImRpZmZlcmVuY2UiLCJhYnMiLCJkaWZmZXJlbmNlMSIsInJhdGUiLCJlcnJvck1lc2FnZSIsIm5vdGlmRXJyb3JDdXJyZW5jeSIsImNyZWF0ZU5vdGlmaWNhdGlvbiIsIkVycm9yQ29uc3RhbnRzIiwicmF0ZUZyb21Ub0Jhc2UiLCJyYXRlQmFzZVRvVG8iLCJyYXRlVG9Ub0Jhc2UiLCJyYXRlQmFzZVRvRnJvbSIsImNzIiwiYWRkIiwiZXhjaGFuZ2VSYXRlcyIsIlBvc3NpYmxlVmFsdWVzTWFuYWdlciIsImxhbmdTdGF0ZSIsIl9sYW5nU3RhdGUiLCJMb2dnZXIiLCJfbG9nZ2VyIiwiaE9wdGlvbnMiLCJidWlsZEhpZXJhcmNoaWNhbERhdGEiLCJzZWxlY3RlZElkIiwidmFsdWVQYXJ0cyIsImdldEhpZXJhcmNoaWNhbFZhbHVlIiwiZm9ybWF0VmFsdWVQYXJ0cyIsIm5hbWVQYXJ0cyIsInBhcmVudElkIiwicmV2ZXJzZSIsIl9maWxsSGllcmFyY2hpY2FsRGVwdGgiLCJlcnJvciIsImRlcHRoIiwicGFyZW50IiwibyIsInJlc1ZhbCIsImRlZmF1bHRMYW5nIiwiY3VycmVuY3lSYXRlc01hbmFnZXIiLCJmaWx0ZXJzIiwiaXNPUkZpbHRlciIsImlzTG9jYXRpb25zIiwiaXNDdXJyZW5jeSIsImhhcyIsInZpc2libGUiLCJkaXNwbGF5SGllcmFyY2hpY2FsVmFsdWUiLCJpc0N1cnJlbmN5T3B0aW9uVXNhYmxlIiwiZmlsdGVyQnkiLCJmaWx0ZXIiLCJvcHRpb25EYXRhVG9DaGVjayIsInBhdGgiLCJoYXNFeGNoYW5nZVJhdGVzIiwiY3VycmVuY2llc1dpdGhFeGNoYW5nZVJhdGVzIiwiaXNBY3RpdmUiLCJleHRyYV9pbmZvIiwiYWN0aXZlIiwib3B0aW9uc09iaiIsInJldmVyc2VTb3J0T3B0aW9ucyIsImFkZGVkIiwib3B0aW9uc0xpc3QiLCJpZHNTdGFjayIsInBvcCIsInJldmVyc2VTb3J0ZWRDaGlsZHJlbiIsIkZFQVRVUkVfTUFOQUdFUiIsIkZlYXR1cmVNYW5hZ2VyIiwiZm1UcmVlIiwiX2ZtVHJlZSIsImxvZ2dlck1hbmFnZXIiLCJvbmx5TGFzdFNlZ21lbnQiLCJfbG9nZ2VyTWFuYWdlciIsImxhc3RGTVN1YlRyZWUiLCJzZWdtZW50cyIsIl9nZXRQYXRoU2VnbWVudHMiLCJmb3VuZExhc3RGTVN1YlRyZWUiLCJldmVyeSIsInNlZ21lbnQiLCJfX2VuYWJsZWQiLCJmbVNldHRpbmciLCJmaW5kRk1TZXR0aW5nIiwicmVkdWNlIiwiY3VycmVudEZNU2V0dGluZyIsImVuYWJsZWQiLCJjdXJyZW50Rk1UcmVlIiwic2VnbWVudEZNIiwiX2N1cnJlbnRGTSIsImlzRk1TZXR0aW5nRW5hYmxlZCIsImhhc0ZNU2V0dGluZyIsIkFQTGFiZWwiLCJsYWJlbCIsImRvbnRUcmFuc2xhdGUiLCJsYWJlbENsYXNzIiwidG9vbHRpcCIsImdldENvbnRlbnQiLCJBUEZpZWxkIiwiVGFibGlmeSIsImNvbnRlbnQiLCJjb2xzIiwiYyIsInJvd3MiLCJjZWlsIiwidGFibGVDb250ZW50Iiwicm93Q29udGVudCIsImoiLCJzdHJpbmdUb1VuaXF1ZUlkIiwiY29sdW1ucyIsImNlbGxXaWR0aCIsImNlbGx3aWR0aFN0eWxlIiwidGFibGlmeV9vdXRlcl9jZWxsIiwidGFibGlmeV9pbm5lcl9jZWxsIiwiZmxleCIsIm51bWJlciIsIkFQUGVyY2VudGFnZUZpZWxkIiwicmF3TnVtYmVyVG9Gb3JtYXR0ZWRTdHJpbmciLCJwZXJjZW50YWdlIiwidGl0bGVDbGFzcyIsImFsaWduUmlnaHQiLCJBUFBlcmNlbnRhZ2VMaXN0IiwibGlzdEZpZWxkIiwidmFsdWVGaWVsZCIsInBlcmNlbnRhZ2VGaWVsZCIsImxpc3RUaXRsZSIsImdldEl0ZW1UaXRsZSIsImFjdGl2aXR5RmllbGRzTWFuYWdlciIsInBlcmNlbnRUaXRsZUNsYXNzIiwiYWN0aXZpdHkiLCJ0YWJsaWZ5IiwicGVyY2VudFZhbHVlQ2xhc3MiLCJpdGVtcyIsImlzTGlzdEVuYWJsZWQiLCJhIiwiYiIsIml0ZW1UaXRsZSIsImxvY2FsZUNvbXBhcmUiLCJub2RhdGEiLCJpbnN0YW5jZU9mIiwiU2VjdGlvbiIsIkNvbXBvc2VkU2VjdGlvbiIsInBhcmFtcyIsImNvbnRleHQiLCJEYXRlVXRpbHMiLCJ1c2VFbmNhcHN1bGF0ZUhlYWRlciIsInNob3dJZk5vdEF2YWlsYWJsZSIsIk5BT3B0aW9ucyIsIm9wdGlvbnNfIiwiRmllbGRQYXRoQ29uc3RhbnRzIiwibm9UaXRsZSIsImdldEZpZWxkTGFiZWxUcmFuc2xhdGlvbiIsInZhbHVlUGF0aCIsImZpZWxkUGF0aFBhcnRzIiwiYWx0ZXJuYXRlUGF0aCIsImZpZWxkRGVmIiwiZmllbGRfdHlwZSIsImNyZWF0ZUZvcm1hdHRlZERhdGUiLCJyZSIsInRlc3QiLCJ0cmltIiwiY29tcG9zZWRTZWN0aW9uIiwic3RhdGUiLCJidWlsZFNpbXBsZUZpZWxkIiwiYmluZCIsIlNlY3Rpb25UaXRsZSIsImdyb3VwQ2xhc3MiLCJzSUQiLCJ0aXRsZURldGFpbHMiLCJjb21wb3NlZENsYXNzIiwib25lT2ZUeXBlIiwiY29udGV4dFR5cGVzIiwiZGVmYXVsdFByb3BzIiwic2VjdGlvbl90aXRsZV9jbGFzcyIsInNlY3Rpb25fZ3JvdXBfY2xhc3MiLCJzZWN0aW9uX2ZpZWxkX25hbWUiLCJzZWN0aW9uX2ZpZWxkX3ZhbHVlIiwiRnVuZGluZ1N1bW1hcnkiLCJtZWFzdXJlc1RvdGFscyIsImFjRW5hYmxlZCIsImFkRW5hYmxlZCIsImlzRmllbGRQYXRoQnlQYXJ0c0VuYWJsZWQiLCJ0cm5UeXBlIiwidHJuQWRqT3B0UGF0aCIsImF0T3B0aW9ucyIsImdldFBvc3NpYmxlVmFsdWVzT3B0aW9ucyIsImFjdGl2aXR5RnVuZGluZ1RvdGFscyIsImdldFRvdGFscyIsImFkalR5cGUiLCJhZGpUeXBlQWN0dWFsVHJuIiwiZXhwZW5kaXR1cmVzQXJlRW5hYmxlZCIsInViIiwiZ2V0TVRFRlRvdGFsIiwiYWN0dWFsQ29tbWl0bWVudHMiLCJhY3R1YWxEaXNidXJzZW1lbnRzIiwiX2J1aWxkVG90YWxGaWVsZHMiLCJtZWFzdXJlc09yZGVyIiwidHJuIiwiaXNQZXJjZW50YWdlIiwiZnVuZGluZ0luZm9TdW1tYXJ5IiwibWVhc3VyZSIsImZvcm1hdEFtb3VudCIsIl9idWlsZEZ1bmRpbmdJbmZvcm1hdGlvbiIsIkFQSWRlbnRpZmljYXRpb24iLCJXU19WQUxJREFUSU9OX09GRiIsIldTX1ZBTElEQVRJT05fQUxMX0VESVQiLCJXU19WQUxJREFUSU9OX05FV19PTkxZIiwiV1NfVkFMSURBVElPTl9GSUVMRCIsIkNST1NTX1RFQU1fVkFMSURBVElPTiIsIldTX0FDQ0VTU19UWVBFX01BTkFHRU1FTlQiLCJXU19BQ0NFU1NfVFlQRV9URUFNIiwiUk9MRV9URUFNX01FTUJFUl9XU19NQU5BR0VSIiwiUk9MRV9URUFNX01FTUJFUl9XU19NRU1CRVIiLCJST0xFX1RFQU1fTUVNQkVSX1dTX0FQUFJPVkVSIiwiV09SS1NQQUNFX0lEIiwiUk9MRV9JRCIsIldPUktTUEFDRV9MRUFEX0lEIiwiQUNDRVNTX1RZUEUiLCJJU19DT01QVVRFRCIsIklTX1BSSVZBVEUiLCJGSVJTVF9OQU1FIiwiVEVBTV9NRU1CRVJfVVNFUl9JRCIsIkFkZGl0aW9uYWxJbmZvIiwiYWN0aXZpdHlXU01hbmFnZXIiLCJVc2VyQ29uc3RhbnRzIiwiYWN0aXZpdHlXb3Jrc3BhY2UiLCJhZGRpdGlvbmFsSW5mbyIsInRlYW1OYW1lIiwiYWNjZXNzVHlwZSIsIldvcmtzcGFjZUNvbnN0YW50cyIsImlzQ29tcHV0ZWRUZWFtIiwiaW5zdGFuY2UiLCJfZ2V0V29ya3NwYWNlTGVhZERhdGEiLCJfYnVpbGRBZGRpdGlvbmFsSW5mbyIsIkFQSW50ZXJuYWxJZHNTZWN0aW9uIiwiaXNTZXBhcmF0ZVNlY3Rpb24iLCJhY3RJbnRJZCIsInNob3dJbnRlcm5hbElkIiwiaW50SWQiLCJ0YWJsZVZhbHVlIiwiaW50ZXJuYWxfaWQiLCJvcmdhbml6YXRpb24iLCJvcmdJZHMiLCJhY3RJbnRJZHMiLCJfZ2V0QWN0SW50ZXJuYWxJZENvbnRlbnQiLCJidWlsZENvbnRlbnQiLCJub0RhdGEiLCJhZGRSb3dzIiwiYm94X3RhYmxlIiwic2hvd0lmRW1wdHkiLCJvcmdEYXRhIiwiQVBJbnRlcm5hbElkcyIsIkFQQ29tcG9uZW50cyIsImRhdGVTdHJpbmciLCJnZXRGdWxsWWVhciIsImZ1bmRpbmciLCJncm91cHMiLCJhdXhGZCIsIl9leHRyYWN0WWVhciIsImdyb3VwIiwieWVhciIsImNvbXBvbmVudCIsImZ1bmRpbmdzIiwiX2V4dHJhY3RHcm91cHMiLCJ0YWJsZSIsImRlc2NyaXB0aW9uIiwiX2J1aWxkRGV0YWlsIiwiX2J1aWxkQ29tcG9uZW50cyIsIkFQQ29udGFjdCIsImNvbnRhY3RzQnlJZHMiLCJnZXRBY3Rpdml0eUNvbnRhY3RJZHMiLCJjb250YWN0SWRzIiwiaHlkcmF0ZWRDb250YWN0c0J5SWRzIiwiY0lkIiwiQ29udGFjdENvbnN0YW50cyIsImNvbnRhY3QiLCJjb250YWN0RmllbGRzTWFuYWdlciIsInBhZGRpbmdCb3R0b21MYXJnZSIsImVtYWlsIiwicGhvbmUiLCJoaWRkZW4iLCJnZXRIeWRyYXRlZENvbnRhY3RzIiwiY29udGFjdEdyb3VwcyIsImFjcCIsImNvbnRhY3RzIiwiaHlkcmF0ZWRDIiwicmVuZGVyQ29udGFjdCIsInJlbmRlck5vQ29udGFjdHMiLCJjb250ZW50Q2xhc3MiLCJ0YWJsZUNlbGwiLCJzZWN0b3JfdGl0bGUiLCJXT1JLU1BBQ0VTX0dST1VQUyIsInR5cGUiLCJBUEZ1bmRpbmdTb3VyY2VzIiwiQVBMb2NhdGlvbnNMaXN0IiwiQVBMb2NhdGlvbiIsInBlcmNlbnRfZmllbGRfbmFtZSIsInBlcmNlbnRfZmllbGRfdmFsdWUiLCJ0b3BDb250ZW50IiwiZnAiLCJlbCIsImJveF90YWJsZTIiLCJ0d29fYm94X3RhYmxlIl0sIm1hcHBpbmdzIjoiOzs7O0FBQUEsU0FBUyxXQUFXLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRTtFQUM3QixLQUFLLEdBQUcsS0FBSyxLQUFLLENBQUMsR0FBRyxHQUFHLEdBQUcsRUFBRSxDQUFDO0VBQy9CLElBQUksUUFBUSxHQUFHLEdBQUcsQ0FBQyxRQUFRLENBQUM7O0VBRTVCLElBQUksQ0FBQyxHQUFHLElBQUksT0FBTyxRQUFRLEtBQUssV0FBVyxFQUFFLEVBQUUsT0FBTyxFQUFFOztFQUV4RCxJQUFJLElBQUksR0FBRyxRQUFRLENBQUMsSUFBSSxJQUFJLFFBQVEsQ0FBQyxvQkFBb0IsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztFQUNyRSxJQUFJLEtBQUssR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0VBQzVDLEtBQUssQ0FBQyxJQUFJLEdBQUcsVUFBVSxDQUFDOztFQUV4QixJQUFJLFFBQVEsS0FBSyxLQUFLLEVBQUU7SUFDdEIsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO01BQ25CLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxFQUFFLElBQUks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LENBQWM7a0NBQUE7a0NBQUE7OEJBQUE7NENBQUE7Z0RBQUE7c0JBQUE7a0JBQUE7Z0RBQUE7NENBQUE7b0JBQUE7NENBQUE7b0JBQUE7a0NBQUE7a0NBQUE7a0NBQUE7c0NBQUE7b0NBQUE7MEJBQUE7Z0JBQUE7c0NBQUE7NENBQUE7d0JBQUE7d0NBQUE7MERBQUE7Z0NBQUE7c0JBQUE7b0JBQUE7MENBQUE7a0RBQUE7NENBQUE7a0NBQUE7MEJBQUE7OEJBQUE7d0NBQUE7c0NBQUE7a0NBQUE7a0NBQUE7MERBQUE7c0JBQUE7a0NBQUE7d0JBQUE7Z0NBQUE7a0NBQUE7b0NBQUE7c0RBQUE7NEJBQUE7d0JBQUE7b0RBQUE7WUFBQTtvQ0FBQTt3Q0FBQTt3Q0FBQTswQ0FBQTtvREFBQTt3Q0FBQTtnQ0FBQTs0QkFBQTtrQkFBQTswQkFBQTtvREFBQTtvQkFBQTtvQ0FBQTtvQ0FBQTswQkFBQTs4QkFBQTs0QkFBQTtrREFBQTt3Q0FBQTtrQ0FBQTtzQ0FBQTswQ0FBQTtnREFBQTtvQ0FBQTtzQ0FBQTtnREFBQTtvREFBQTtvREFBQTs0REFBQTt3REFBQTtnREFBQTs0Q0FBQTtzQ0FBQTtvQkFBQTtrQ0FBQTtnQ0FBQTtvQ0FBQTtzQ0FBQTtrQkFBQTt3Q0FBQTtvQ0FBQTtrREFBQTtvQ0FBQTt3Q0FBQTtvQ0FBQTtnRUFBQTtnQ0FBQTtZQUFBOzBCQUFBOzBCQUFBO2dCQUFBOzhCQUFBOzBCQUFBOzBCQUFBOzBCQUFBO3dCQUFBO3dCQUFBO29DQUFBO29DQUFBO3NDQUFBO3NDQUFBO3NCQUFBO2dDQUFBO2tCQUFBO29DQUFBO2tDQUFBO2dDQUFBO29DQUFBO29DQUFBO3dDQUFBOzBCQUFBOzBCQUFBO2tDQUFBOzhDQUFBO3dDQUFBO29EQUFBO29EQUFBO3dCQUFBO3dCQUFBO3dDQUFBO2dCQUFBO29CQUFBOzRCQUFBO3dCQUFBO2tFQUFBOzBCQUFBO2dDQUFBO2dCQUFBO3dCQUFBO3dCQUFBO29CQUFBOzRCQUFBOzRCQUFBO2dCQUFBO3dCQUFBO3dCQUFBO29DQUFBO2dEQUFBOzBDQUFBOzRDQUFBO29D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
