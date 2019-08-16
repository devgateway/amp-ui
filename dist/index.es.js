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
    Logger: PropTypes.object,
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
  Logger: PropTypes.object.isRequired,
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
  Logger: PropTypes.object.isRequired
};


var APIdentification$1 = Section(APIdentification, { SectionTitle: 'Identification',
  useEncapsulateHeader: true,
  sID: 'APIdentification'
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
  FeatureManager: FeatureManager,
  APLabel: APLabel,
  APField: APField,
  Tablify: Tablify,
  APPercentageField: APPercentageField,
  APPercentageList: APPercentageList,
  Section: Section,
  FundingSummary: FundingSummary$1,
  APIdentification: APIdentification$1,
  UIUtils: UIUtils
};

export default index;
export { TestAPField, TestingSection, Constants, ActivityConstants, FeatureManagerConstants, ErrorConstants, CurrencyRatesManager, FieldsManager, FieldPathConstants, ValueConstants, PossibleValuesManager, FeatureManager, APLabel, APField, Tablify, APPercentageField, APPercentageList, UIUtils, Section, FundingSummary$1 as FundingSummary, APIdentification$1 as APIdentification };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguZXMuanMiLCJzb3VyY2VzIjpbIi4uL25vZGVfbW9kdWxlcy9zdHlsZS1pbmplY3QvZGlzdC9zdHlsZS1pbmplY3QuZXMuanMiLCIuLi9zcmMvYWN0aXZpdHlQcmV2aWV3L2NvbXBvbmVudHMvVGVzdEFQRmllbGQuanMiLCIuLi9zcmMvYWN0aXZpdHlQcmV2aWV3L2NvbXBvbmVudHMvVGVzdGluZ1NlY3Rpb24uanMiLCIuLi9zcmMvdXRpbHMvQ29uc3RhbnRzLmpzIiwiLi4vc3JjL21vZHVsZXMvdXRpbC9GZWF0dXJlTWFuYWdlckNvbnN0YW50cy5qcyIsIi4uL3NyYy91dGlscy9VSVV0aWxzLmpzIiwiLi4vc3JjL21vZHVsZXMvdXRpbC9BY3Rpdml0eUNvbnN0YW50cy5qcyIsIi4uL3NyYy91dGlscy9jb25zdGFudHMvRXJyb3JDb25zdGFudHMuanMiLCIuLi9zcmMvdXRpbHMvVmFsdWVDb25zdGFudHMuanMiLCIuLi9zcmMvdXRpbHMvRmllbGRQYXRoQ29uc3RhbnRzLmpzIiwiLi4vc3JjL21vZHVsZXMvZmllbGQvRmllbGRzTWFuYWdlci5qcyIsIi4uL3NyYy9tb2R1bGVzL3V0aWwvQ3VycmVuY3lSYXRlc01hbmFnZXIuanMiLCIuLi9zcmMvbW9kdWxlcy9maWVsZC9Qb3NzaWJsZVZhbHVlc01hbmFnZXIuanMiLCIuLi9zcmMvbW9kdWxlcy91dGlsL0ZlYXR1cmVNYW5hZ2VyLmpzIiwiLi4vc3JjL2FjdGl2aXR5L3ByZXZpZXcvY29tcG9uZW50cy9BUExhYmVsLmpzeCIsIi4uL3NyYy9hY3Rpdml0eS9wcmV2aWV3L2NvbXBvbmVudHMvQVBGaWVsZC5qc3giLCIuLi9zcmMvYWN0aXZpdHkvcHJldmlldy9jb21wb25lbnRzL1RhYmxpZnkuanN4IiwiLi4vc3JjL2FjdGl2aXR5L3ByZXZpZXcvY29tcG9uZW50cy9BUFBlcmNlbnRhZ2VGaWVsZC5qc3giLCIuLi9zcmMvYWN0aXZpdHkvcHJldmlldy9jb21wb25lbnRzL0FQUGVyY2VudGFnZUxpc3QuanN4IiwiLi4vc3JjL2FjdGl2aXR5L3ByZXZpZXcvc2VjdGlvbnMvU2VjdGlvbi5qc3giLCIuLi9zcmMvYWN0aXZpdHkvcHJldmlldy9zZWN0aW9ucy9GdW5kaW5nU3VtbWFyeS5qc3giLCIuLi9zcmMvYWN0aXZpdHkvcHJldmlldy9zZWN0aW9ucy9BUElkZW50aWZpY2F0aW9uLmpzeCIsIi4uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBzdHlsZUluamVjdChjc3MsIHJlZikge1xuICBpZiAoIHJlZiA9PT0gdm9pZCAwICkgcmVmID0ge307XG4gIHZhciBpbnNlcnRBdCA9IHJlZi5pbnNlcnRBdDtcblxuICBpZiAoIWNzcyB8fCB0eXBlb2YgZG9jdW1lbnQgPT09ICd1bmRlZmluZWQnKSB7IHJldHVybjsgfVxuXG4gIHZhciBoZWFkID0gZG9jdW1lbnQuaGVhZCB8fCBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZCcpWzBdO1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICBzdHlsZS50eXBlID0gJ3RleHQvY3NzJztcblxuICBpZiAoaW5zZXJ0QXQgPT09ICd0b3AnKSB7XG4gICAgaWYgKGhlYWQuZmlyc3RDaGlsZCkge1xuICAgICAgaGVhZC5pbnNlcnRCZWZvcmUoc3R5bGUsIGhlYWQuZmlyc3RDaGlsZCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGhlYWQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBoZWFkLmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHN0eWxlSW5qZWN0O1xuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uLy4uL2FjdGl2aXR5QXNzZXRzL3N0eWxlc2hlZXRzL0FjdGl2aXR5UHJldmlldy5jc3MnO1xuXG5cbi8qKlxuICogU2ltcGxlIEZpZWxkIGNvbXBvbmVudCB0aGF0IGNvbnNpc3RzIG9mIGEgZmllbGQgdGl0bGUgYW5kIGZpZWxkIHZhbHVlXG4gKiBAYXV0aG9yIE5hZGVqZGEgTWFuZHJlc2N1XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRlc3RBUEZpZWxkIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgLyoqXG4gICAqIEdldHMgYW4gaW5zdGFuY2Ugb2YgU2ltcGxlIEZpZWxkXG4gICAqIEBwYXJhbSB0cm5MYWJlbCB0aGUgbGFiZWwgdG8gdHJhbnNsYXRlIGFuZCB1c2UgYXMgYSB0aXRsZS4gVGhpcyBsYWJlbCBpcyBhbHNvIHVzZWQgYXMgdGhlIGNvbXBvbmVudCBrZXkuXG4gICAqIEBwYXJhbSB2YWx1ZSB0aGUgZmllbGQgdmFsdWVcbiAgICogQHBhcmFtIGlubGluZSBzaG93IHRpdGxlIGFuZCB2YWx1ZSBpbiB0aGUgc2FtZSByb3cuXG4gICAqIEBwYXJhbSBzZXBhcmF0b3IgYWRkIG9yIG5vdCBhbiA8aHI+IHRhZy5cbiAgICogQHBhcmFtIG5hbWVDbGFzcyBjc3MgY2xhc3MgZm9yIHRoZSBmaWVsZCBsYWJlbFxuICAgKiBAcGFyYW0gdmFsdWVDbGFzcyBjc3MgY2xhc3MgZm9yIHRoZSBmaWVsZCB2YWx1ZVxuICAgKiBAcmV0dXJuIHtTaW1wbGVGaWVsZH1cbiAgICovXG4gIHN0YXRpYyBpbnN0YW5jZSh0cm5MYWJlbCwgdmFsdWUsIGlubGluZSA9IGZhbHNlLCBzZXBhcmF0b3IgPSBmYWxzZSwgbmFtZUNsYXNzLCB2YWx1ZUNsYXNzKSB7XG4gICAgcmV0dXJuICg8VGVzdEFQRmllbGRcbiAgICAgIGtleT17dHJuTGFiZWx9IHRpdGxlPXt0aGlzLnByb3BzLnRyYW5zbGF0ZSh0cm5MYWJlbCl9IHZhbHVlPXt2YWx1ZX0gaW5saW5lPXtpbmxpbmV9IHNlcGFyYXRvcj17c2VwYXJhdG9yfVxuICAgICAgZmllbGROYW1lQ2xhc3M9e25hbWVDbGFzc30gZmllbGRWYWx1ZUNsYXNzPXt2YWx1ZUNsYXNzfSAvPik7XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnByb3BzLmFtcExvZ2dlci5sb2coJ2NvbnN0cnVjdG9yZScpO1xuICAgIHRoaXMudXNlU2VwYXJhdG9yID0gdGhpcy5wcm9wcy5zZXBhcmF0b3IgIT09IGZhbHNlO1xuICAgIHRoaXMuZGlzcGxheUNsYXNzID0gdGhpcy5wcm9wcy5maWVsZENsYXNzIHx8ICh0aGlzLnByb3BzLmlubGluZSA9PT0gdHJ1ZSA/IHN0eWxlcy5pbmxpbmUgOiBzdHlsZXMuYmxvY2spO1xuICB9XG5cbiAgX2dldFZhbHVlKCkge1xuICAgIGNvbnN0IGNsYXNzTmFtZXMgPSBgJHt0aGlzLnByb3BzLmZpZWxkVmFsdWVDbGFzc30gJHt0aGlzLmRpc3BsYXlDbGFzc31gO1xuICAgIC8vIFRvIGhhbmRsZSBib29sZWFuIGZpZWxkcyB3ZSBkb250IHdhbnQgdG8gc2hvdyAnZmFsc2UnIGFzICdObyBEYXRhJy5cbiAgICBjb25zdCB2YWx1ZSA9ICh0aGlzLnByb3BzLnZhbHVlIHx8IHRoaXMucHJvcHMudmFsdWUgPT09IGZhbHNlKSA/IHRoaXMucHJvcHMudmFsdWUgOiB0aGlzLnByb3BzLnRyYW5zbGF0ZSgnTm8gRGF0YScpO1xuICAgIGxldCBkaXNwbGF5VmFsdWU7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICBpZiAodmFsdWVbMF0gaW5zdGFuY2VvZiBPYmplY3QpIHtcbiAgICAgICAgZGlzcGxheVZhbHVlID0gW107XG4gICAgICAgIHZhbHVlLmZvckVhY2godiA9PiBkaXNwbGF5VmFsdWUucHVzaCh2KSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkaXNwbGF5VmFsdWUgPSB2YWx1ZS5zb3J0KCkuam9pbignLCAnKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgICBkaXNwbGF5VmFsdWUgPSB2YWx1ZSA9PT0gdHJ1ZSA/IHRoaXMucHJvcHMudHJhbnNsYXRlKCdZZXMnKSA6IHRoaXMucHJvcHMudHJhbnNsYXRlKCdObycpO1xuICAgIH0gZWxzZSB7XG4gICAgICBkaXNwbGF5VmFsdWUgPSAodGhpcy5wcm9wcy5pbmxpbmUgJiYgdGhpcy5wcm9wcy52YWx1ZSBpbnN0YW5jZW9mIFN0cmluZykgPyBgJHt2YWx1ZX0gYCA6IHZhbHVlO1xuICAgIH1cbiAgICBpZiAodGhpcy5wcm9wcy51c2VJbm5lckhUTUwpIHtcbiAgICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lc30gZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBkaXNwbGF5VmFsdWUgfX0gLz47XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lc30+e2Rpc3BsYXlWYWx1ZX08L2Rpdj47XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IGNsYXNzTmFtZXMgPSBgJHt0aGlzLnByb3BzLmZpZWxkTmFtZUNsYXNzfSAke3RoaXMuZGlzcGxheUNsYXNzfWA7XG4gICAgcmV0dXJuICg8ZGl2IGNsYXNzTmFtZT17dGhpcy5kaXNwbGF5Q2xhc3N9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZXN9Pnt0aGlzLnByb3BzLnRpdGxlfTwvZGl2PlxuICAgICAge3RoaXMuX2dldFZhbHVlKCl9XG4gICAgICB7dGhpcy51c2VTZXBhcmF0b3IgPyA8aHIgLz4gOiAnJ31cbiAgICA8L2Rpdj4pO1xuICB9XG59XG5cblRlc3RBUEZpZWxkLnByb3BUeXBlcyA9IHtcbiAgdGl0bGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHZhbHVlOiBQcm9wVHlwZXMuYW55LFxuICBpbmxpbmU6IFByb3BUeXBlcy5ib29sLFxuICB1c2VJbm5lckhUTUw6IFByb3BUeXBlcy5ib29sLFxuICBmaWVsZENsYXNzOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBmaWVsZE5hbWVDbGFzczogUHJvcFR5cGVzLnN0cmluZyxcbiAgZmllbGRWYWx1ZUNsYXNzOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBzZXBhcmF0b3I6IFByb3BUeXBlcy5ib29sLFxuICBhbXBMb2dnZXI6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgdHJhbnNsYXRlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkXG59O1xuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgVGVzdEFQRmllbGQgZnJvbSAnLi9UZXN0QVBGaWVsZCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRlc3RpbmdTZWN0aW9uIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8aDI+dGVzdGluZyBjb21wb25lbnQ8L2gyPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIHRlc3QgdHJhbnNsYXRpb246IGBERVNLVE9QID0ge3RoaXMucHJvcHMudHJhbnNsYXRlKCdERVNLVE9QJyl9YFxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICB0ZXN0IEFQRmllbGQ6XG4gICAgICAgICAgPFRlc3RBUEZpZWxkIGFtcExvZ2dlcj17dGhpcy5wcm9wcy5hbXBMb2dnZXJ9IHRyYW5zbGF0ZT17dGhpcy5wcm9wcy50cmFuc2xhdGV9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+KTtcbiAgfVxufVxuVGVzdGluZ1NlY3Rpb24ucHJvcFR5cGVzID0ge1xuICBhbXBMb2dnZXI6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgdHJhbnNsYXRlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkXG59O1xuIiwiXG5jb25zdCBCQVNFX1JFU1RfVVJMID0gJy9yZXN0JztcblxuXG5jb25zdCBDT05ORUNUSU9OX1RJTUVPVVQgPSAyNTAwMDtcbmNvbnN0IENPTk5FQ1RJT05fRk9SQ0VEX1RJTUVPVVQgPSBDT05ORUNUSU9OX1RJTUVPVVQgKyA1MDAwO1xuY29uc3QgVElNRU9VVF9DSEVDS19JTlRFUlZBTCA9IDUwMDA7XG5jb25zdCBNQVhfUkVUUllfQVRFTVBUUyA9IDU7XG5jb25zdCBFUlJPUlNfVE9fUkVUUlkgPSBbJ0VTT0NLRVRUSU1FRE9VVCcsICdFVElNRURPVVQnLCAnRUNPTk5SRVNFVCcsICdFQUlfQUdBSU4nXTtcbmNvbnN0IEVSUk9SU19OT19BTVBfU0VSVkVSID0gWydFQ09OTlJFRlVTRUQnLCAnRU5FVFVOUkVBQ0gnLCAnRU5PRU5UJywgJ0VOT1RGT1VORCcsICdFTkVURE9XTicsICdFSE9TVERPV04nLFxuICAnRUhPU1RVTlJFQUNIJywgJ0VOT05FVCddO1xuY29uc3QgQ09OTkVDVElWSVRZX0NIRUNLX0lOVEVSVkFMID0gJzYwMDAwJzsgLy8gMSBtaW51dGVzXG5cbmNvbnN0IFdPUktTUEFDRV9VUkwgPSAnL3dvcmtzcGFjZSc7XG5jb25zdCBMT0dJTl9VUkwgPSAnLyc7XG5jb25zdCBERVNLVE9QX1VSTCA9ICcvZGVza3RvcCc7XG5jb25zdCBERVNLVE9QX0NVUlJFTlRfVVJMID0gJy9kZXNrdG9wL2N1cnJlbnQnO1xuY29uc3QgU1lOQ1VQX1JFRElSRUNUX1VSTCA9ICcvc3luY1VwL3N5bmMnO1xuY29uc3QgU1lOQ1VQX0hJU1RPUllfVEFSR0VUID0gJ2hpc3RvcnknO1xuY29uc3QgU1lOQ1VQX1NVTU1BUllfVVJMID0gJy9zeW5jVXBTdW1tYXJ5JztcbmNvbnN0IEFDVElWSVRZX1BSRVZJRVdfVVJMID0gJy9hY3Rpdml0eS9wcmV2aWV3JztcbmNvbnN0IEFDVElWSVRZX0VESVRfVVJMID0gJy9hY3Rpdml0eS9lZGl0JztcbmNvbnN0IFVQREFURV9VUkwgPSAnL3VwZGF0ZSc7XG5jb25zdCBTRVRVUF9VUkwgPSAnL3NldHVwJztcbmNvbnN0IFNFVFRJTkdTX1VSTCA9ICcvc2V0dGluZ3MnO1xuXG5jb25zdCBDT0xMRUNUSU9OX1VTRVJTID0gJ3VzZXJzJztcbmNvbnN0IENPTExFQ1RJT05fV09SS1BBQ0VTID0gJ3dvcmtzcGFjZXMnO1xuY29uc3QgQ09MTEVDVElPTl9URUFNTUVNQkVSUyA9ICd0ZWFtbWVtYmVycyc7XG5jb25zdCBDT0xMRUNUSU9OX0NMSUVOVF9TRVRUSU5HUyA9ICdjbGllbnQtc2V0dGluZ3MnO1xuY29uc3QgQ09MTEVDVElPTl9HTE9CQUxfU0VUVElOR1MgPSAnZ2xvYmFsLXNldHRpbmdzJztcbmNvbnN0IENPTExFQ1RJT05fQUNUSVZJVElFUyA9ICdhY3Rpdml0aWVzJztcbmNvbnN0IENPTExFQ1RJT05fRklFTERTID0gJ2ZpZWxkcyc7XG5jb25zdCBDT0xMRUNUSU9OX1BPU1NJQkxFX1ZBTFVFUyA9ICdwb3NzaWJsZS12YWx1ZXMnO1xuY29uc3QgQ09MTEVDVElPTl9TWU5DVVBfTE9HID0gJ3N5bmN1cC1sb2cnO1xuY29uc3QgQ09MTEVDVElPTl9MQU5HUyA9ICdsYW5ndWFnZXMnO1xuY29uc3QgQ09MTEVDVElPTl9XU19TRVRUSU5HUyA9ICd3b3Jrc3BhY2Utc2V0dGluZ3MnO1xuY29uc3QgQ09MTEVDVElPTl9DVVJSRU5DWV9SQVRFUyA9ICdjdXJyZW5jeS1yYXRlcyc7XG5jb25zdCBDT0xMRUNUSU9OX0ZFQVRVUkVfTUFOQUdFUiA9ICdmZWF0dXJlLW1hbmFnZXInO1xuY29uc3QgQ09MTEVDVElPTl9DT05UQUNUUyA9ICdjb250YWN0cyc7XG5jb25zdCBDT0xMRUNUSU9OX1JFU09VUkNFUyA9ICdyZXNvdXJjZXMnO1xuY29uc3QgQ09MTEVDVElPTl9SRVBPU0lUT1JZID0gJ3JlcG9zaXRvcnknO1xuY29uc3QgQ09MTEVDVElPTl9HQVpFVFRFRVIgPSAnZ2F6ZXR0ZWVyJztcbmNvbnN0IENPTExFQ1RJT05fQ0FMRU5EQVJTID0gJ2NhbGVuZGFycyc7XG5jb25zdCBDT0xMRUNUSU9OX0NIQU5HRVNFVFMgPSAnY2hhbmdlc2V0cyc7XG5cbmNvbnN0IEdBWkVUVEVFUl9ESVNUQU5DRV9ESVZJREUgPSAzO1xuXG5jb25zdCBEQl9GSUxFX1BSRUZJWCA9ICdkYXRhYmFzZSc7XG5jb25zdCBEQl9GSUxFX0VYVEVOU0lPTiA9ICcuZGInO1xuY29uc3QgREJfQ09NTU9OX0RBVEFTVE9SRV9PUFRJT05TID0geyBhdXRvbG9hZDogZmFsc2UsIGNvcnJ1cHRBbGVydFRocmVzaG9sZDogMCB9O1xuY29uc3QgREJfQVVUT0NPTVBBQ1RfSU5URVJWQUxfTUlMSVNFQ09ORFMgPSA2MDAwMDtcbmNvbnN0IERCX0RFRkFVTFRfUVVFUllfTElNSVQgPSA5OTk5OTk5OTk7XG5cbmNvbnN0IExBTkdVQUdFX0VOR0xJU0ggPSAnZW4nO1xuY29uc3QgRlNfTE9DQUxFU19ESVJFQ1RPUlkgPSAnbGFuZyc7XG5jb25zdCBMQU5HVUFHRV9NQVNURVJfVFJBTlNMQVRJT05TX0ZJTEUgPSAnbWFzdGVyLXRyYW5zbGF0aW9ucyc7XG5jb25zdCBMQU5HVUFHRV9UUkFOU0xBVElPTlNfRklMRSA9ICd0cmFuc2xhdGlvbnMnO1xuY29uc3QgTEFOR1VBR0VfTkVXX1RSQU5TTEFUSU9OU19NVVNUX1NZTkMgPSAnbXVzdF9zeW5jX3RyYW5zbGF0aW9uLmpzb24nO1xuXG5jb25zdCBBU0FSX0RJUiA9ICdhcHAuYXNhcic7XG5jb25zdCBBUFBfRElSRUNUT1JZID0gJ2FwcCc7XG5jb25zdCBURVNUX0RJUkVDVE9SWSA9ICd0ZXN0JztcbmNvbnN0IFNUQVRJQ19ESVIgPSAnc3RhdGljJztcbmNvbnN0IElNQUdFU19ESVIgPSAnaW1hZ2VzJztcbmNvbnN0IERPQ19JQ09OUyA9ICdkb2MtaWNvbnMnO1xuY29uc3QgREJfU1RBVElDX0RJUiA9ICdkYic7XG5jb25zdCBNSUdSQVRJT05TX0RJUiA9ICdjaGFuZ2Vsb2cnO1xuXG5jb25zdCBIQVNIX0lURVJBVElPTlMgPSAxMDA7XG5jb25zdCBESUdFU1RfQUxHT1JJVEhNX1NIQTEgPSAnU0hBLTEnO1xuY29uc3QgRElHRVNUX0FMR09SSVRITV9TSEEyNTYgPSAnU0hBLTI1Nic7XG5cbmNvbnN0IEFDVElWSVRZX0VESVQgPSAnQUNUSVZJVFlfRURJVCc7XG5jb25zdCBBQ1RJVklUWV9WSUVXID0gJ0FDVElWSVRZX1ZJRVcnO1xuXG5jb25zdCBTWU5DVVBfRk9SQ0VfREFZUyA9IDE0O1xuY29uc3QgU1lOQ1VQX0JFU1RfQkVGT1JFX0RBWVMgPSA3O1xuY29uc3QgU1lOQ1VQX05PX0RBVEUgPSAnMTkwMC0wMS0wMVQwMDowMDowMC4wMDArMDAwMCc7XG5jb25zdCBTWU5DVVBfVFlQRV9UUkFOU0xBVElPTlMgPSAndHJhbnNsYXRpb25zJztcbmNvbnN0IFNZTkNVUF9UWVBFX1VTRVJTID0gJ3VzZXJzJztcbmNvbnN0IFNZTkNVUF9UWVBFX0FTU0VUUyA9ICdhc3NldHMnO1xuY29uc3QgU1lOQ1VQX1RZUEVfV09SS1NQQUNFUyA9ICd3b3Jrc3BhY2VzJztcbmNvbnN0IFNZTkNVUF9UWVBFX0dTID0gJ2dsb2JhbC1zZXR0aW5ncyc7XG5jb25zdCBTWU5DVVBfVFlQRV9FWENIQU5HRV9SQVRFUyA9ICdleGNoYW5nZS1yYXRlcyc7XG5jb25zdCBTWU5DVVBfVFlQRV9GRUFUVVJFX01BTkFHRVIgPSAnZmVhdHVyZS1tYW5hZ2VyJztcbmNvbnN0IFNZTkNVUF9UWVBFX1dPUktTUEFDRV9NRU1CRVJTID0gJ3dvcmtzcGFjZS1tZW1iZXJzJztcbmNvbnN0IFNZTkNVUF9UWVBFX0FMTF9GSUVMRFMgPSAnZmllbGRzJztcbmNvbnN0IFNZTkNVUF9UWVBFX0FDVElWSVRJRVNfUFVMTCA9ICdhY3Rpdml0aWVzJztcbmNvbnN0IFNZTkNVUF9UWVBFX0FDVElWSVRJRVNfUFVTSCA9ICdhY3Rpdml0aWVzLXB1c2gnO1xuY29uc3QgU1lOQ1VQX1RZUEVfQUNUSVZJVFlfRklFTERTID0gJ2FjdGl2aXR5LWZpZWxkcyc7XG5jb25zdCBTWU5DVVBfVFlQRV9BQ1RJVklUWV9GSUVMRFNfU1RSVUNUVVJBTF9DSEFOR0VTID0gJ2FjdGl2aXR5LWZpZWxkcy1zdHJ1Y3R1cmFsLWNoYW5nZXMnO1xuY29uc3QgU1lOQ1VQX1RZUEVfQ09OVEFDVFNfUFVMTCA9ICdjb250YWN0cyc7XG5jb25zdCBTWU5DVVBfVFlQRV9DT05UQUNUU19QVVNIID0gJ2NvbnRhY3RzLXB1c2gnO1xuY29uc3QgU1lOQ1VQX1RZUEVfQUNUSVZJVFlfUE9TU0lCTEVfVkFMVUVTID0gJ2FjdGl2aXR5LXBvc3NpYmxlLXZhbHVlcy1maWVsZHMnO1xuY29uc3QgU1lOQ1VQX1RZUEVfQ09OVEFDVF9GSUVMRFMgPSAnY29udGFjdC1maWVsZHMnO1xuY29uc3QgU1lOQ1VQX1RZUEVfQ09OVEFDVF9GSUVMRFNfU1RSVUNUVVJBTF9DSEFOR0VTID0gJ2NvbnRhY3QtZmllbGRzLXN0cnVjdHVyYWwtY2hhbmdlcyc7XG5jb25zdCBTWU5DVVBfVFlQRV9DT05UQUNUX1BPU1NJQkxFX1ZBTFVFUyA9ICdjb250YWN0LXBvc3NpYmxlLXZhbHVlcy1maWVsZHMnO1xuY29uc3QgU1lOQ1VQX1RZUEVfUkVTT1VSQ0VTX1BVTEwgPSAncmVzb3VyY2VzJztcbmNvbnN0IFNZTkNVUF9UWVBFX1JFU09VUkNFU19QVVNIID0gJ3Jlc291cmNlcy1wdXNoJztcbmNvbnN0IFNZTkNVUF9UWVBFX1JFU09VUkNFX0ZJRUxEUyA9ICdyZXNvdXJjZS1maWVsZHMnO1xuY29uc3QgU1lOQ1VQX1RZUEVfUkVTT1VSQ0VfRklFTERTX1NUUlVDVFVSQUxfQ0hBTkdFUyA9ICdyZXNvdXJjZS1maWVsZHMtc3RydWN0dXJhbC1jaGFuZ2VzJztcbmNvbnN0IFNZTkNVUF9UWVBFX1JFU09VUkNFX1BPU1NJQkxFX1ZBTFVFUyA9ICdyZXNvdXJjZS1wb3NzaWJsZS12YWx1ZXMtZmllbGRzJztcbmNvbnN0IFNZTkNVUF9UWVBFX0NPTU1PTl9QT1NTSUJMRV9WQUxVRVMgPSAnY29tbW9uLXBvc3NpYmxlLXZhbHVlcy1maWVsZHMnO1xuY29uc3QgU1lOQ1VQX1RZUEVfV09SS1NQQUNFX1NFVFRJTkdTID0gJ3dvcmtzcGFjZS1zZXR0aW5ncyc7XG5jb25zdCBTWU5DVVBfVFlQRV9NQVBfVElMRVMgPSAnbWFwLXRpbGVzJztcbmNvbnN0IFNZTkNVUF9UWVBFX0dBWkVUVEVFUiA9ICdsb2NhdG9ycyc7XG5jb25zdCBTWU5DVVBfVFlQRV9DQUxFTkRBUlMgPSAnY2FsZW5kYXJzJztcblxuY29uc3QgU1lOQ1VQX1NUQVRVU19TVUNDRVNTID0gJ1NVQ0NFU1MnO1xuY29uc3QgU1lOQ1VQX1NUQVRVU19GQUlMID0gJ0ZBSUwnO1xuY29uc3QgU1lOQ1VQX1NUQVRVU19QQVJUSUFMID0gJ1BBUlRJQUwnO1xuY29uc3QgU1lOQ1VQX1NUQVRVU19DQU5DRUxFRCA9ICdDQU5DRUxFRCc7XG5jb25zdCBTWU5DVVBfU1lOQ19SRVFVRVNURURfQVQgPSAnc3luYy1kYXRlJztcbmNvbnN0IFNZTkNVUF9TWU5DX1JFUVVFU1RFRF9CWSA9ICdyZXF1ZXN0ZWQtYnknO1xuY29uc3QgU1lOQ1VQX0RBVEVUSU1FX0ZJRUxEID0gJ3RpbWVzdGFtcCc7XG5jb25zdCBTWU5DVVBfRElGRl9MRUZUT1ZFUiA9ICdzeW5jdXAtZGlmZi1sZWZ0b3Zlcic7XG5jb25zdCBTWU5DVVBfREVQRU5ERU5DWV9DSEVDS19JTlRFUlZBTCA9IDEwO1xuY29uc3QgU1lOQ1VQX0RFVEFJTFNfU1lOQ0VEID0gJ3N5bmNlZCc7XG5jb25zdCBTWU5DVVBfREVUQUlMU19VTlNZTkNFRCA9ICd1bnN5bmNlZCc7XG5jb25zdCBTWU5DVVBfUkVTT1VSQ0VfUFVMTF9CQVRDSF9TSVpFID0gMTAwO1xuY29uc3QgU1lOQ1VQX0FDVElWSVRJRVNfUFVMTF9CQVRDSF9TSVpFID0gMTAwO1xuY29uc3QgU1lOQ1VQX0NPTlRBQ1RTX1BVTExfQkFUQ0hfU0laRSA9IDEwMDtcblxuY29uc3QgQUNUSVZJVFlfU1RBVFVTX0RSQUZUID0gJ0FDVElWSVRZX1NUQVRVU19EUkFGVCc7XG5jb25zdCBBQ1RJVklUWV9TVEFUVVNfVU5WQUxJREFURUQgPSAnQUNUSVZJVFlfU1RBVFVTX1VOVkFMSURBVEVEJztcbmNvbnN0IEFDVElWSVRZX1NUQVRVU19WQUxJREFURUQgPSAnQUNUSVZJVFlfU1RBVFVTX1ZBTElEQVRFRCc7XG5cbmNvbnN0IENVUlJFTkNZX0hPVVIgPSAnMDA6MDAnO1xuY29uc3QgREVGQVVMVF9DVVJSRU5DWSA9ICdVU0QnO1xuY29uc3QgUkFURV9TQU1FX0NVUlJFTkNZID0gMTtcbmNvbnN0IFJBVEVfQ1VSUkVOQ1lfTk9UX0ZPVU5EID0gMTtcbmNvbnN0IENVUlJFTkNZX1BBSVIgPSAnY3VycmVuY3ktcGFpcic7XG5jb25zdCBWRVJTSU9OX1BBVFRFUk4gPSAvKFxcZCspXFwuKFxcZCspKFxcLihcXGQrKSk/KC1cXHcrKT8vO1xuY29uc3QgVkVSU0lPTl9QQVRURVJOX0dST1VQU19UT19FWFRSQUNUID0gWzEsIDIsIDQsIDVdO1xuY29uc3QgQU1QX0NPVU5UUllfTE9HTyA9ICdhbXBDb3VudHJ5RmxhZy5wbmcnO1xuY29uc3QgQVNTRVRTX0RJUkVDVE9SWSA9ICdhc3NldHMnO1xuY29uc3QgQkFTRV82NF9QTkdfUFJFRklYID0gJ2RhdGE6aW1hZ2UvcG5nO2Jhc2U2NCwnO1xuLy8gSG9sZHMgdGhlIEJBU0U2NCByZXByZXNlbnRhdGlvbiBvZiBhIGEgdHJhbnNwYXJlbnQgaW1hZ2UgMXgxIGluIGNhc2Ugd2UgZG9uJ3QgeWV0IGhhdmUgdGhlIGNvdW50cnkgZmxhZ1xuY29uc3RcbiAgVFJBTlNQQVJFTlRfRkxBRyA9ICdpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQUVBQUFBQkNBUUFBQUMxSEF3Q0FBQUFDMGxFUVZSNG5HUDZ6d0FBQWdjQkFwb2NNWEVBQUFBQVNVVk9SSzVDWUlJPSc7XG5jb25zdCBIRUxQX1BERl9GSUxFTkFNRSA9ICdhbXAtaGVscCc7XG5jb25zdCBIRUxQX0RJUiA9ICdoZWxwJztcbmNvbnN0IEVORFNfV0lUSF9QVU5DVFVBVElPTl9SRUdFWCA9IC9bLiE/LDs6XSQvO1xuXG5jb25zdCBNQVBfVElMRVNfRElSID0gJ21hcC10aWxlcyc7XG5jb25zdCBUSUxFU19aSVBfRklMRSA9ICdtYXAtdGlsZXMuemlwJztcblxuLyogZXNsaW50LWRpc2FibGUgbWF4LWxlbiAqL1xuY29uc3QgTUFQX01BUktFUl9JTUFHRSA9ICdkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUJrQUFBQXBDQVlBQUFEQWs0TE9BQUFGZ1VsRVFWUjRBYTFYQTVCaldSVE4yb1cxN2QzWWFadHIyOTYySFV6YkROcGpzelcyNG1SdDI4cDQ3djd6cS9iWFp0cnAvbFduWHIzMzdqM25QQ2U4NU5jeXBnU0ZkdWdDcFc1WW9EQU1SYUlNcVJpNmFLcTVFM1lxRFFPM3FBd2pWV3JEOE5jcS9SQnB5a2Q4b1pVYi9rYUp1dG93OHIxYVA5SUkwV21MS0xJc0p5djF3L2txdzlDaDJNWWRCKysxMk9ueGVlL1FNd3ZmNC9Eay9MZnAvaTRueFRYdE9vUTRwVzVBajd3cGljaTFBOWVyZEFOMk9INjR4OE9TUDlqM0Z0M2I3YVdrVGcvRm05MXNpVHJhMGY5b241c1FyOUlOZWpINkNVVVVwYXZqRk5xMUIrT2FkaHhtbmZhOFJmRW1OOFZOQXNRaFBxRjU1eEhrTXp6M2pTbUNoV1U2ZjcvWFpLTkgrOStoQkxPSFlvenVLUVB4eU1QVUtrclgvSzB1V25mRmFKR1MxUVBSdFpzT1B0cjNOc1cwdXloNk5OQ09rVTNZeitiWGJUM0k4RzN4RTVFWExYdENYYmJxd0NPOXpQUVlQUlRaNXZJRFhEN1UrdzdyRkRFb1VVZjdpYkhJUjR5NmJMVlBYcno4SlZaRXFsMTN0cnh3dWUvdURpdmQzZmtXUmJTNi9JQTJiSUQ0dWswVXBGMU44cUxsYkJsWHM0RWU3SExUZlYxajU0QVB2T0RuU2ZPV0JxdEtWdmpnTEt6RjVZZEVrNWV3UmtHbEswaTMzRW9mZmZjN0hUNTZqRDcvNlUrcUgzQ3g3U0JMTm50SDVZSVB2T0RueWZJWFpZUlZEUHFnSHRMczVBQkhEM1l6THVlc3BiN3Q3OUZZMzREak13clZyY1R1d2xUNTVZTVB2T0JuUnJKNFZYVGRObll1ZzV1Y0hMQmpFcHQzMDcwMUEzVHMrSEVhNzN1NmRUM0ZOV3dmbFk4NmVNSFBrK1l1K2k2cHpVcFJyVzdTTkRnNUpIUjRLYXBtTTVXdjJFOFRmY2IxSG9xcUhNSFUrdVdERDd6ZzU0bXo1LzJCU25pemk5VDFEZzRRUVhMVG9HTkNrYjZ0YjFOVStRQWxHcjErK2VBRHJ6aG4vdThRMllaaFFWbFo1K0NBT3RxZmJobWFVQ1MxZXpORlZtMmltRGJQbVBuZzV3bXorZ3doK29IRGNlMGVVdFE2T0dESXlSMHVVaFVzb08zdmZEbW1nT2V6SDBtWk41OXg3TUJpKytXREwxZy9lRWlVM2F2bGlkTzY3MWJrTGZ3Ync1WFYyUDhQem8weWR5NHQyLzBldTMzeFlTT01PRDhoVGY0Q3JCdEdNU29YZlBMY2hYK0owcnVTZVB3M0xaZUswanVQSmJZenJoa0gwaW83QjNrMTY0aGlHdmF3aE9LTUxrclFMeVZwWmc4ckhGVzdFMnVIT0w4ODhJQlBsTloxRlB6c3RTSk02OTRmV3I2UndwdmNKSzYwKzBIQ0lMVEJ6WkxGTmR0QXpKYW9oemU2MFQ4cUJ6eWg1WnVPZzVlN3V3UXBwb2ZFbWYyKytEWXZteVNxR0J1S2FpY0YxYmxRamh1SGR2Q0lNdnA4d2hUVGZaekk3UmxkcHd0U3pMK0YxK3drZFoyVEJPVzJnSUY4OFBCVHpEL2dwZVJFQU1FYnhuSmNhSkhOSHJwemppMGdRQ1M2aGRrRWVZdDlERi8ycVBjRUM4Uk0yOEh3bXIzc2ROeWh0MDBieUF1dDJrM2d1ZldOdGd0T0VPRkdVd2NYV05EYmROYnBnQkd4RXZLa09Rc3hpdkp4MzNpb3cwVnc1UzZTVlRycFZxMTF5c0EyUnA3Z1RmUGZrdGM2emh0WEJCQythZFJMc2hmNnNHMlJmSFBaNUVBYzRzVlo4M3lDTjAwRmsvNGtnZ3U0MFpUdklFbTVnMjRxdFU0S2pCcngvQlRUSDhpZlZBU0FHN2dLcm5XeEpEY1U3eDhYNkVjY3pobTNvNllpY3ZzTFhXZmgzQ2gxVzBrOHgwblhGKzBmRnhndDRwaHo4UXZ5cGl3Q0NGS01xWENucVhFeGpxMTBiZUgrVVVBNytuRzZtZEcvUHUwZjNMZ0ZjR3JsMnMwa05OanBtb0o5bzRCMjlDTU84ZE1UNFE1b3g4dWl0RjZmcXNySk9yOHFud05iUnp2NmhTbkc1d1ArNjRDN2g5bHAzMGhLTnRLZFdqdGRrYnVQQTE5bko3VHozelIvaWJnQVJiaGI0QWxoYXZjQmVibVRIY0ZsMmZ2WUVuVzBveDl4TXhLQlM4YnRKK0tpRWJxOXpBNFJ0aFFYRGhQYTBUOVRFZTY5Z1d1cHdjNnVCVXBocXVYZ2YrL0ZySWp3ZUhRUzQvcGR1TWU1RVJVTUhVZDl4djhaUjk4Q3hrUzRGMm4zRVVyVVoxMEVZTnc3QldtOXgxR2lQc3NpM0dnaUdSREtXUllaZlhsT04rZGZOYk0rR2dJd1lkd0FBQUFBU1VWT1JLNUNZSUk9JztcbmNvbnN0IE1BUF9NQVJLRVJfU0hBRE9XID0gJ2RhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQ2tBQUFBcENBUUFBQUFDYWNoOUFBQUNNVWxFUVZSNEFlM1NoWTdqUUJBRTBBb3ovZjkvSFRNemhnMXpyZEtVckpiZHgrS2QybkQ4Vk51ZGZzTC9UaC8vL2R5UU4yVEg2ZjN5L0JHcEMzNzlyVitTK3FxZXRCT3hJbU5RWEw4SkNBcjJWNGlNUVhIR05KeGVDZlpYaFNSQmNRTWZ2a09XVWR0ZnpsTGdBRU5tWkRjbW8yVFZtdDhPU00yZVh4QnAzRGpIU01GdXRxUzdTYm1lbXpCaVIreHBLQ05VSVJrZGtrWXhoQWt5R29CdnlRRkVKRWVmd1NtbXZCZkp1SjZhS3FLV25Ba3ZHWk9hWlhUVWdGcVlVTFdOU0hVY2tadVIxSElJaW1VRXh1dFJ4d3pPTFJPSUc0dkttQ0tRdDM2NG1JbGhTeXpBZjFtOWxIWkhKWnJsQU9NTXp0UlJpS2ltcC9ycGRKRGM5QXdyeTV4VFpDdGU3Rkh0dVM4d0pnZVlHcmV4Mjh4TlRkMDg2RGlrN3ZVTXNjUU9hOHk0RG9HdENDU2tBS2xOd3BnTnRwaGpyQzZNSUhVa1I2WVd4eHM2U2M1eHFuMjIybW1DUkZ6SXQ4bEVkS3graWtDdGc5MXFTMldwd1ZmQmVsSkNpUUp3dnppeGZJOWN4WlFXZ2lTSmVsS253QkVsS1l0RE9iMk1GYmhtVWlnYlJlUUJWMENnNCtxTVhTeFhTeUdVbjRVYkY4bCs3cWRTR25UQzBYTENtYWhJZ1VITGhMT2hwVkN0dzRDellYdkxRV1FiSk5teG9Dc09LQXhTZ0JKbm83NWF2b2xrUnc4aUlBRmNzZGMwMmU5aXlDZDh0SHdtZVNTb0tUb3dJZ3ZzY1NHWlVPQTdQdUNONWIyQlg5bVFNN1Mwd1loTU5VNzR6Z3NQQmozSFU3d2d1QWZueHhqRlFHQkU2cHdOK0dqTUU5ekhZN3pHcDh3VnhNU2hZWDlOWHZFV0QzSGJ3SmY0Z2lPNENGSVF4WFNjSDEvVE0rMDRra0JpQUFBQUFFbEZUa1N1UW1DQyc7XG5jb25zdCBNQVBfTUFSS0VSX0NJUkNMRV9SRUQgPSAnZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFCUUFBQUFVQ0FZQUFBQ05pUjBOQUFBQUJHZEJUVUVBQUxHUEMveGhCUUFBQUNCalNGSk5BQUI2SmdBQWdJUUFBUG9BQUFDQTZBQUFkVEFBQU9wZ0FBQTZtQUFBRjNDY3VsRThBQUFBQm1KTFIwUUEvd0QvQVArZ3ZhZVRBQUFBQjNSSlRVVUg0Z2NiRndvZ2VvaGhFQUFBQTFsSlJFRlVPTXVsbGMxckhHVWN4eisvWjJaMjB6R0U3bHV5UWJ5SWRpRXhyZTZhTnZTeVNFQkJLQjcxVkFJNW1HSkE5ZzhRcFI0OGFWR0s2SzE2MHB0WUQ3V3hoNENVa0pyRkdwS3lLV2dRbW5YZmFadDl5V2FlZVR6c1RFeGoxWU8vMC9ETXpHZCtiOS92Q0VIOGN1NTFqc1FRa0FFbWdGUndWZ00yZ1JMUU8vend5YXRmQXlDUGdVV0FWNEE1WUFaSUFuWnd6d1Bxd0Fwd0JmZ2U2QitHeWhGWUduZ1hPQSs0QUJqemFONGk0VlVIK0JKNEQ2aUVoL1lSMkdmQWF3Y2dZMUJQdUZqRHd3RG8zVjM4ZG1jQUZYR0JCV0FjZURPRWhzQklrTmtBNXZzNHlRU3gyVHdqcDNQWThkaWczbWFMKzZ0cnRHNHM0OVVib0JUQk8yWGdiYUJ2WGNnOEIvQXE4RDdnNFBzTVBmTTBUeFhld3MwK3p4OTM3dkQ3OG85VU56YlJqazNxcFR3akw1eWsrK3MyWHFNWnRtQUMrQm5Zc29OcHpnRXV4dUFrRXp4NVlaNitZMU44NXlLMTlRMk01dzNhWjl1a3BpYkpGaFlaWDVqbnR3OCtoR1lyTEg4T1dGTEJhc3lFZll2TjVySEdSaWxldWt5bGVCdU1RU3dMc1N3d2hrcnhOc1ZMbDdIVG8wVHpaK2w2SHNHWVpvQ01DdEpOaGdNWU9aMmp2UG9UdGZVTmxHMGQzVTJVYlZGYjM2QnlhNDM0bVdscUNqb0RhQktZVU1IUzJnRFc4REIyUEVacjYrNUJtWThMNDNrMFMxdTR5UVMrZTR5ZFRwdU8xclpBeXViL2hnZzk3Vkh1dGprZWlhSVl5TWtMOTh4cnRvaGxua1hzZi82VzJEYnh6QW02OVFiOUJ3OFJFWHBhNzFkNzNhcGlvTTA2SXZqdER2ZFgxeGlmZnBIVTFDUytwLzhHOHoxTmFtcVM5SFNPZXpkWDJHKzNRUVNCdXNDbVlpRDBsVEQ5MW8xbGRLVkt0ckRJV1BZVWlHQzB4bWdOSW94bFQ1RXJMTEs3VTJiNzJ0SmhLYTQ0U3BWQ0xaOER2Z0xjY0xISEYrYXgwNk5VYnEzUkxHMEJFTStjSUQyZFkzZW56TnBIbjlBczNVVUdhbWxiSW0vNHhud1hBaVBBeDRFMndmY2hFU2VhUDB2OHpEUnVNZ0ZBdDk3ZzNzMFZ0cTh0MGFuV1FoZ0NuMFl0cStBYjB6L3NObVBBNTRmTm9ldDUxQlQ0N2pFUW9mL2c0Vjg5QzBvVitNWVN0V0F3RllVODRqWVZCcTVSQnM0ajRycU9ROHJ6MktrMTZHa1BFVG5JQ21nTGZHR0p1dWhqS3I0eHhJZWkvMjJ3QXNtdTF2Wk90MDFQNjMwSkRGYUpYSEdVdXI3diszMXREUEZJbEpkL3VNckJpUDd0RnlDUWF2VDNxUGE2VllGTlI2blNudFo3amxJWTRIZ2t3dXoxYndINEU1bUNYSUJMUTVIbkFBQUFKWFJGV0hSa1lYUmxPbU55WldGMFpRQXlNREU0TFRBM0xUSTNWREl4T2pFd09qTXlLekF5T2pBdzdxNkdud0FBQUNWMFJWaDBaR0YwWlRwdGIyUnBabmtBTWpBeE9DMHdOeTB5TjFReU1Ub3hNRG96TWlzd01qb3dNSi96UGlNQUFBQUFTVVZPUks1Q1lJST0nO1xuY29uc3QgTUFQX01BUktFUl9DSVJDTEVfR1JFRU4gPSAnZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFCUUFBQUFVQ0FZQUFBQ05pUjBOQUFBQUJtSkxSMFFBL3dEL0FQK2d2YWVUQUFBQUNYQklXWE1BQUFzVEFBQUxFd0VBbXB3WUFBQUFCM1JKVFVVSDRnY2JGQmc2L1ZoVzRBQUFBNVZKUkVGVU9NdWxsVUZvSEZVWXgzL3Z6ZXhrdThWa2R6UHJwZ3BXTkpvbTRKbzBOYVNuSWtIckpSYjFVRkFzWG1xM0tsaXZKcUNIaEo0cXNRZHRta3NWRktRZ1lrVGEwRXJ4VUNNaGFkMUNRclEwRGJhSjI5MWtkOTFrSnJzN004OURacG8wQkJUOHoyVjQ3L0Y3My9mZTkvK2V3RmVtOXpDYjFUOFlEUU10UUJ1UThJZHp3RFF3TzlCWFhOdThQalg2RFFCaUs2eC9NR29BQjRHM2dHN0FCSFIvMmdIeXdEaHdEcmc0MEZlc2JvYUtMYkFtNENQZ0NCQUI4UEFlaUZ3aWcxOEwrQkw0ZUtDdm1OMllmeEIyQmtnREVZLzFMeUoza0F5WkpFTW1FYm1EWU56Zk1BME05dzlHa3dGSFpIb1BCMmwrNmkvQXc2TXhGS01udHArdStoUnh2UUdBWmFmRVJPa0dsd3RYeVR1RnpkR2VBZDRmNkN0V2c3TTU2S2VKaDBkemVEZkhIMzJkcE5iSXhHS0dTNFdmQVdpSk5kTzc2M202NmxOOGZ2ZHJicTdOQjlBandJL0FxSGc1Y3l3TWZBVzhHa1QyNFdOcDlLckcwTlFJbWZ3TWp1Y0FvRXVkbE5uS2liMUhxZW9WVHM2ZFpabFNBUDBXZUVQNnBkRWR4TjRUMjA5U2EyUm9hb1RKN0hXVVVtaENReE1hU2lrbXM5Y1ptaHFoU1grWUEzWDdjRzBISlJRK28wWDZkV1lHRjlCVm4rTFh4V3RrOGpQbzBtQ3JkR21ReWM4d2tmMk43bmdISXVmaVdEV1VVQ2JRSnYyaTFRRWUwbllTMXh2NG96QjNQODN0NUhnT3Z5L2Z3b3pFaVhoaHJJVXludVhxU3FpRTVIOUtJbkFyRHRaZlpXcExGWFRmVGc1Z2xOMVZscDBTTGJGbWRLbWpsTm9Xb2t1ZHArTlBrTE9YS05YS0NDRndiYWRtVjFmdVNkK2JlWW5FOG13bVNqZDRibGVLbE5tSzQxVzNTYmRLeW15bHE2bWRYKzVPc2xxekVFcUFKQTlNUzJEVzl5WUFsd3RYeWJwTG5OaDdsTTVrKy9ydXlzVlZMa0lJT3BQdGZORDVOZ3NyV1M3Y3ZySU9XOWU0TkxSWjdmeWRadWVubnJBTkhCS0kwS3BuYzh2K2s0NkdQZlR1Zm9Fbm80L3p5TTRrejVoN2VPV3BsM2l6N1RVS2F5Vk9UUTR6WDc2REZCSmdWVWpSZjN6bzc1bkFLUmQ5bzZjbGtwdHI4NXljTzh1QnVuMTB4enQ0TnRHMjNydnNKYzdQL3NDRjIxZkkycmtONjBtK2tJWTJGcEp5bzl2NEJoOEdEZ1VXZEcwSGtYT0plR0VrZ2xLdGZQL01oQkFCN0R1aHFmUjdwNjJzUkd5NDIyOUJ4M3lqV3hLSkhnbWhFaG81ZDVrRks0dmwyRWhrQUZ0RjhwblFWUHJkMDFiV1ZZcG9uZkh2RFZZSlpicTJvOXVMSzdpMlUvTnZjMXdJY1U0YTJ0ZzduNVNxcmxMRWpUcGV2RFNLK0M5UGdCSXFVVnVxWU9kVzdnSFQwdEJtMDZlS2xaQ1VLQ0JxR1BTTWZRL0FQeTFYZzJ2NktJc0ZBQUFBQUVsRlRrU3VRbUNDJztcbi8qIGVzbGludC1lbmFibGUgbWF4LWxlbiAqL1xuY29uc3QgUE9MWUdPTl9CQVNFX0NPTE9SID0gJyMzMzg4ZmYnO1xuXG5jb25zdCBER19DT01QQU5ZX05BTUUgPSAnRGV2ZWxvcG1lbnQgR2F0ZXdheSc7XG5jb25zdCBER19BRERSRVNTXzEgPSAnMTExMCBWZXJtb250IEF2ZSwgTlcsIFN1aXRlIDUwMCc7XG5jb25zdCBER19BRERSRVNTXzIgPSAnV2FzaGluZ3RvbiwgREMgMjAwMDUgVVNBJztcbmNvbnN0IERHX0NPTlRBQ1RfSU5GTyA9ICdpbmZvQGRldmVsb3BtZW50Z2F0ZXdheS5vcmcsIFRlbDogKzEuMjAyLjU3Mi45MjAwLCBGYXg6ICsxIDIwMi41NzIuOTI5MCc7XG5cbmNvbnN0IExPR19ESVIgPSAnbG9ncyc7XG5jb25zdCBMT0dfRklMRV9OQU1FID0gJ2FtcG9mZmxpbmUnO1xuY29uc3QgTE9HX0ZJTEVfRVhURU5TSU9OID0gJ2xvZyc7XG5cbi8vIE1lc3NhZ2UgY29uc3RhbnRzXG4vLyB0b3RhbCBhbW91bnQgb2YgdGltZSB0aGUgbWVzc2FnZSBzdGF5cyB2aXNpYmxlXG5jb25zdCBNRVNTQUdFX1RJTUVPVVQgPSAxMCAqIDEwMDA7XG4vLyB3aGVuIGl0J3MgdGhpcyBhbW91bnQgb2YgdGltZSBsZWZ0LCB3ZSBub2ZpdHkgdGhlIHVzZXIgdGhhdCB0aGUgbWVzc2FnZSBpcyBhYm91dCB0byBkaXNhcHBlYXJcbmNvbnN0IE1FU1NBR0VfRElTQVBQRUFSX1RJTUVPVVQgPSBNRVNTQUdFX1RJTUVPVVQgLyA1O1xuY29uc3QgTUVTU0FHRV9DSEVDS19JTlRFUlZBTCA9IDEwMDtcbi8vIGhvdyBsb25nIHNob3VsZCB0aGUgZW50ZXIvbGVhdmUgYW5pbWF0aW9uIHJ1bihtcylcbi8vIChpZiB5b3UgY2hhbmdlIHRoaXMgeW91J2xsIHdhbm5hIGNoYW5nZSBpdCBpbiBzdHlsZS5jc3MsIHRvbylcbmNvbnN0IE1FU1NBR0VfQU5JTUFUSU9OX0RVUkFUSU9OID0gNTAwO1xuXG4vLyB0aGlzIGlzIHRoZSBpbnRlcm5hbCBkYXRlIGZvcm1hdCB1c2VkIHRvIHN0b3JlIGFuZCBzeW5jIHVwIGRhdGVzXG5jb25zdCBJTlRFUk5BTF9EQVRFX0ZPUk1BVCA9ICdZWVlZLU1NLUREVEhIOm1tOnNzLlNTU1onO1xuLy8gY3VycmVudGx5IHN1cHBvcnRlZCBtYXggJiBtaW4geWVhcnMgaW4gQU1QLCBpLmUuIGZyb20gMTk3MC0wMS0wMSB0aWxsIDIwNTAtMTItMzFcbmNvbnN0IE1JTl9TVVBQT1JURURfWUVBUiA9IDE5NzA7XG5jb25zdCBNQVhfU1VQUE9SVEVEX1lFQVIgPSAyMDUwO1xuXG5jb25zdCBVUERBVEVTX0RJUiA9ICd1cGRhdGVzJztcbmNvbnN0IENPTlRFTlRfRElTUE9TSVRJT05fSEVBREVSID0gJ0NvbnRlbnQtRGlzcG9zaXRpb24nO1xuY29uc3QgVVBEQVRFX1RNUF9GSUxFID0gJ2FtcC1vZmZsaW5lLWluc3RhbGxlci50bXAnO1xuXG5jb25zdCBPVEhFUl9JRCA9IDk5OTk5OTk5OTtcbmNvbnN0IE5SX1NZTkNfSElTVE9SWV9FTlRSSUVTID0gMjA7XG5jb25zdCBOUl9MT0dfRklMRVMgPSAxMDA7XG4vLyBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9JU09fODYwMSNEdXJhdGlvbnMsIGV4YW1wbGU6IFwiUDFZMk0xMERUMkgzME1cIlxuY29uc3QgT0xEX1NZTkNfTE9HU19EVVJBVElPTl9JU09fODYwMSA9ICdQNk0nO1xuY29uc3QgTlJfT0xEX1NZTkNfTE9HU19UT19LRUVQX01JTklNVU0gPSBOUl9TWU5DX0hJU1RPUllfRU5UUklFUztcblxuY29uc3QgTUFTVEVSX0JSQU5DSCA9ICdtYXN0ZXInO1xuY29uc3QgREVWRUxPUF9CUkFOQ0ggPSAnZGV2ZWxvcCc7XG5jb25zdCBSRUxFQVNFX0JSQU5DSF9SRUdFWCA9IC9yZWxlYXNlXFwvLztcbmNvbnN0IFJFTEVBU0VfQlJBTkNIRVMgPSBbTUFTVEVSX0JSQU5DSCwgUkVMRUFTRV9CUkFOQ0hfUkVHRVhdO1xuXG5jb25zdCBESVNBQkxFX0NIQU5HRUxPR1MgPSAnRElTQUJMRV9DSEFOR0VMT0dTJztcblxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuZnJlZXplKHtcbiAgQkFTRV9SRVNUX1VSTCxcbiAgQ09OTkVDVElPTl9USU1FT1VULFxuICBDT05ORUNUSU9OX0ZPUkNFRF9USU1FT1VULFxuICBUSU1FT1VUX0NIRUNLX0lOVEVSVkFMLFxuICBNQVhfUkVUUllfQVRFTVBUUyxcbiAgRVJST1JTX1RPX1JFVFJZLFxuICBFUlJPUlNfTk9fQU1QX1NFUlZFUixcbiAgQ09OTkVDVElWSVRZX0NIRUNLX0lOVEVSVkFMLFxuICBXT1JLU1BBQ0VfVVJMLFxuICBMT0dJTl9VUkwsXG4gIERFU0tUT1BfVVJMLFxuICBERVNLVE9QX0NVUlJFTlRfVVJMLFxuICBTWU5DVVBfUkVESVJFQ1RfVVJMLFxuICBTWU5DVVBfSElTVE9SWV9UQVJHRVQsXG4gIFNZTkNVUF9TVU1NQVJZX1VSTCxcbiAgQUNUSVZJVFlfUFJFVklFV19VUkwsXG4gIEFDVElWSVRZX0VESVRfVVJMLFxuICBVUERBVEVfVVJMLFxuICBTRVRVUF9VUkwsXG4gIFNFVFRJTkdTX1VSTCxcbiAgQ09MTEVDVElPTl9VU0VSUyxcbiAgQ09MTEVDVElPTl9XT1JLUEFDRVMsXG4gIENPTExFQ1RJT05fVEVBTU1FTUJFUlMsXG4gIENPTExFQ1RJT05fQ0xJRU5UX1NFVFRJTkdTLFxuICBDT0xMRUNUSU9OX0dMT0JBTF9TRVRUSU5HUyxcbiAgQ09MTEVDVElPTl9BQ1RJVklUSUVTLFxuICBDT0xMRUNUSU9OX0ZJRUxEUyxcbiAgQ09MTEVDVElPTl9QT1NTSUJMRV9WQUxVRVMsXG4gIENPTExFQ1RJT05fU1lOQ1VQX0xPRyxcbiAgQ09MTEVDVElPTl9MQU5HUyxcbiAgQ09MTEVDVElPTl9XU19TRVRUSU5HUyxcbiAgQ09MTEVDVElPTl9DVVJSRU5DWV9SQVRFUyxcbiAgQ09MTEVDVElPTl9GRUFUVVJFX01BTkFHRVIsXG4gIENPTExFQ1RJT05fQ09OVEFDVFMsXG4gIENPTExFQ1RJT05fUkVTT1VSQ0VTLFxuICBDT0xMRUNUSU9OX1JFUE9TSVRPUlksXG4gIENPTExFQ1RJT05fR0FaRVRURUVSLFxuICBDT0xMRUNUSU9OX0NBTEVOREFSUyxcbiAgQ09MTEVDVElPTl9DSEFOR0VTRVRTLFxuICBHQVpFVFRFRVJfRElTVEFOQ0VfRElWSURFLFxuICBEQl9GSUxFX1BSRUZJWCxcbiAgREJfRklMRV9FWFRFTlNJT04sXG4gIERCX0NPTU1PTl9EQVRBU1RPUkVfT1BUSU9OUyxcbiAgREJfQVVUT0NPTVBBQ1RfSU5URVJWQUxfTUlMSVNFQ09ORFMsXG4gIERCX0RFRkFVTFRfUVVFUllfTElNSVQsXG4gIExBTkdVQUdFX0VOR0xJU0gsXG4gIEZTX0xPQ0FMRVNfRElSRUNUT1JZLFxuICBMQU5HVUFHRV9NQVNURVJfVFJBTlNMQVRJT05TX0ZJTEUsXG4gIExBTkdVQUdFX1RSQU5TTEFUSU9OU19GSUxFLFxuICBMQU5HVUFHRV9ORVdfVFJBTlNMQVRJT05TX01VU1RfU1lOQyxcbiAgQVNBUl9ESVIsXG4gIEFQUF9ESVJFQ1RPUlksXG4gIFRFU1RfRElSRUNUT1JZLFxuICBTVEFUSUNfRElSLFxuICBJTUFHRVNfRElSLFxuICBET0NfSUNPTlMsXG4gIERCX1NUQVRJQ19ESVIsXG4gIE1JR1JBVElPTlNfRElSLFxuICBIQVNIX0lURVJBVElPTlMsXG4gIERJR0VTVF9BTEdPUklUSE1fU0hBMSxcbiAgRElHRVNUX0FMR09SSVRITV9TSEEyNTYsXG4gIEFDVElWSVRZX0VESVQsXG4gIEFDVElWSVRZX1ZJRVcsXG4gIFNZTkNVUF9GT1JDRV9EQVlTLFxuICBTWU5DVVBfQkVTVF9CRUZPUkVfREFZUyxcbiAgU1lOQ1VQX05PX0RBVEUsXG4gIFNZTkNVUF9UWVBFX1RSQU5TTEFUSU9OUyxcbiAgU1lOQ1VQX1RZUEVfVVNFUlMsXG4gIFNZTkNVUF9UWVBFX0FTU0VUUyxcbiAgU1lOQ1VQX1RZUEVfV09SS1NQQUNFUyxcbiAgU1lOQ1VQX1RZUEVfR1MsXG4gIFNZTkNVUF9UWVBFX0VYQ0hBTkdFX1JBVEVTLFxuICBTWU5DVVBfVFlQRV9GRUFUVVJFX01BTkFHRVIsXG4gIFNZTkNVUF9UWVBFX1dPUktTUEFDRV9NRU1CRVJTLFxuICBTWU5DVVBfVFlQRV9BTExfRklFTERTLFxuICBTWU5DVVBfVFlQRV9BQ1RJVklUSUVTX1BVTEwsXG4gIFNZTkNVUF9UWVBFX0FDVElWSVRJRVNfUFVTSCxcbiAgU1lOQ1VQX1RZUEVfQUNUSVZJVFlfRklFTERTLFxuICBTWU5DVVBfVFlQRV9BQ1RJVklUWV9GSUVMRFNfU1RSVUNUVVJBTF9DSEFOR0VTLFxuICBTWU5DVVBfVFlQRV9DT05UQUNUU19QVUxMLFxuICBTWU5DVVBfVFlQRV9DT05UQUNUU19QVVNILFxuICBTWU5DVVBfVFlQRV9BQ1RJVklUWV9QT1NTSUJMRV9WQUxVRVMsXG4gIFNZTkNVUF9UWVBFX0NPTlRBQ1RfRklFTERTLFxuICBTWU5DVVBfVFlQRV9DT05UQUNUX0ZJRUxEU19TVFJVQ1RVUkFMX0NIQU5HRVMsXG4gIFNZTkNVUF9UWVBFX0NPTlRBQ1RfUE9TU0lCTEVfVkFMVUVTLFxuICBTWU5DVVBfVFlQRV9SRVNPVVJDRVNfUFVMTCxcbiAgU1lOQ1VQX1RZUEVfUkVTT1VSQ0VTX1BVU0gsXG4gIFNZTkNVUF9UWVBFX1JFU09VUkNFX0ZJRUxEUyxcbiAgU1lOQ1VQX1RZUEVfUkVTT1VSQ0VfRklFTERTX1NUUlVDVFVSQUxfQ0hBTkdFUyxcbiAgU1lOQ1VQX1RZUEVfUkVTT1VSQ0VfUE9TU0lCTEVfVkFMVUVTLFxuICBTWU5DVVBfVFlQRV9DT01NT05fUE9TU0lCTEVfVkFMVUVTLFxuICBTWU5DVVBfVFlQRV9XT1JLU1BBQ0VfU0VUVElOR1MsXG4gIFNZTkNVUF9UWVBFX01BUF9USUxFUyxcbiAgU1lOQ1VQX1RZUEVfR0FaRVRURUVSLFxuICBTWU5DVVBfVFlQRV9DQUxFTkRBUlMsXG4gIFNZTkNVUF9TVEFUVVNfU1VDQ0VTUyxcbiAgU1lOQ1VQX1NUQVRVU19GQUlMLFxuICBTWU5DVVBfU1RBVFVTX1BBUlRJQUwsXG4gIFNZTkNVUF9TVEFUVVNfQ0FOQ0VMRUQsXG4gIFNZTkNVUF9TWU5DX1JFUVVFU1RFRF9BVCxcbiAgU1lOQ1VQX1NZTkNfUkVRVUVTVEVEX0JZLFxuICBTWU5DVVBfREFURVRJTUVfRklFTEQsXG4gIFNZTkNVUF9ESUZGX0xFRlRPVkVSLFxuICBTWU5DVVBfREVQRU5ERU5DWV9DSEVDS19JTlRFUlZBTCxcbiAgU1lOQ1VQX0RFVEFJTFNfU1lOQ0VELFxuICBTWU5DVVBfREVUQUlMU19VTlNZTkNFRCxcbiAgU1lOQ1VQX1JFU09VUkNFX1BVTExfQkFUQ0hfU0laRSxcbiAgU1lOQ1VQX0FDVElWSVRJRVNfUFVMTF9CQVRDSF9TSVpFLFxuICBTWU5DVVBfQ09OVEFDVFNfUFVMTF9CQVRDSF9TSVpFLFxuICBBQ1RJVklUWV9TVEFUVVNfRFJBRlQsXG4gIEFDVElWSVRZX1NUQVRVU19VTlZBTElEQVRFRCxcbiAgQUNUSVZJVFlfU1RBVFVTX1ZBTElEQVRFRCxcbiAgQ1VSUkVOQ1lfSE9VUixcbiAgREVGQVVMVF9DVVJSRU5DWSxcbiAgUkFURV9TQU1FX0NVUlJFTkNZLFxuICBSQVRFX0NVUlJFTkNZX05PVF9GT1VORCxcbiAgQ1VSUkVOQ1lfUEFJUixcbiAgVkVSU0lPTl9QQVRURVJOLFxuICBWRVJTSU9OX1BBVFRFUk5fR1JPVVBTX1RPX0VYVFJBQ1QsXG4gIEFNUF9DT1VOVFJZX0xPR08sXG4gIEFTU0VUU19ESVJFQ1RPUlksXG4gIEJBU0VfNjRfUE5HX1BSRUZJWCxcbiAgVFJBTlNQQVJFTlRfRkxBRyxcbiAgSEVMUF9QREZfRklMRU5BTUUsXG4gIEhFTFBfRElSLFxuICBFTkRTX1dJVEhfUFVOQ1RVQVRJT05fUkVHRVgsXG4gIE1BUF9USUxFU19ESVIsXG4gIFRJTEVTX1pJUF9GSUxFLFxuICBNQVBfTUFSS0VSX0lNQUdFLFxuICBNQVBfTUFSS0VSX1NIQURPVyxcbiAgTUFQX01BUktFUl9DSVJDTEVfUkVELFxuICBNQVBfTUFSS0VSX0NJUkNMRV9HUkVFTixcbiAgUE9MWUdPTl9CQVNFX0NPTE9SLFxuICBER19DT01QQU5ZX05BTUUsXG4gIERHX0FERFJFU1NfMSxcbiAgREdfQUREUkVTU18yLFxuICBER19DT05UQUNUX0lORk8sXG4gIExPR19ESVIsXG4gIExPR19GSUxFX05BTUUsXG4gIExPR19GSUxFX0VYVEVOU0lPTixcbiAgTUVTU0FHRV9USU1FT1VULFxuICBNRVNTQUdFX0RJU0FQUEVBUl9USU1FT1VULFxuICBNRVNTQUdFX0NIRUNLX0lOVEVSVkFMLFxuICBNRVNTQUdFX0FOSU1BVElPTl9EVVJBVElPTixcbiAgSU5URVJOQUxfREFURV9GT1JNQVQsXG4gIE1JTl9TVVBQT1JURURfWUVBUixcbiAgTUFYX1NVUFBPUlRFRF9ZRUFSLFxuICBVUERBVEVTX0RJUixcbiAgQ09OVEVOVF9ESVNQT1NJVElPTl9IRUFERVIsXG4gIFVQREFURV9UTVBfRklMRSxcbiAgT1RIRVJfSUQsXG4gIE5SX1NZTkNfSElTVE9SWV9FTlRSSUVTLFxuICBOUl9MT0dfRklMRVMsXG4gIE9MRF9TWU5DX0xPR1NfRFVSQVRJT05fSVNPXzg2MDEsXG4gIE5SX09MRF9TWU5DX0xPR1NfVE9fS0VFUF9NSU5JTVVNLFxuICBNQVNURVJfQlJBTkNILFxuICBERVZFTE9QX0JSQU5DSCxcbiAgUkVMRUFTRV9CUkFOQ0hfUkVHRVgsXG4gIFJFTEVBU0VfQlJBTkNIRVMsXG4gIERJU0FCTEVfQ0hBTkdFTE9HU1xufSk7XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBtYXgtbGVuICovXG5cbi8qKlxuICogQGF1dGhvciBOYWRlamRhIE1hbmRyZXNjdVxuICovXG5cbmNvbnN0IFBVQkxJQ19WSUVXX0NIQU5HRV9QQVNTV09SRCA9ICcvUFVCTElDIFZJRVcvTG9naW4gLSBVc2VyIE1hbmFnZW1lbnQvQ2hhbmdlIFBhc3N3b3JkJztcbmNvbnN0IFBVQkxJQ19WSUVXX1RST1VCTEVfU0lHTl9JTiA9ICcvUFVCTElDIFZJRVcvTG9naW4gLSBVc2VyIE1hbmFnZW1lbnQvVHJvdWJsZSBzaWduaW5nIGluJztcbmNvbnN0IEFDVElWSVRZX0RFTElWRVJZX1JBVEUgPSAnL1BST0pFQ1QgTUFOQUdFTUVOVC9GdW5kaW5nL0Z1bmRpbmcgSW5mb3JtYXRpb24vRGVsaXZlcnkgcmF0ZSc7XG5jb25zdCBBQ1RJVklUWV9QUk9KRUNUX0lEX0FORF9QTEFOTklORyA9ICcvUFJPSkVDVCBNQU5BR0VNRU5UL1Byb2plY3QgSUQgYW5kIFBsYW5uaW5nJztcbmNvbnN0IEFDVElWSVRZX0RVUkFUSU9OX09GX1BST0pFQ1QgPSAnL1BST0pFQ1QgTUFOQUdFTUVOVC9Qcm9qZWN0IElEIGFuZCBQbGFubmluZy9QbGFubmluZy9EdXJhdGlvbiBvZiBQcm9qZWN0JztcbmNvbnN0IEFDVElWSVRZX1RFQU1fTEVBREVSID0gJy9QUk9KRUNUIE1BTkFHRU1FTlQvUHJvamVjdCBJRCBhbmQgUGxhbm5pbmcvSWRlbnRpZmljYXRpb24vRGF0YSBUZWFtIExlYWRlcic7XG5jb25zdCBBQ1RJVklUWV9TQU1FX0FTX1BST1BPU0VEX1NUQVJUX0RBVEUgPVxuICAnL0FjdGl2aXR5IEZvcm0vUGxhbm5pbmcvQWN0dWFsIFN0YXJ0IERhdGUvU2FtZSBBcyBQcm9wb3NlZCBTdGFydCBEYXRlJztcbmNvbnN0IEFDVElWSVRZX1NBTUVfQVNfUFJPUE9TRURfQVBQUk9WQUxfREFURSA9XG4gICcvQWN0aXZpdHkgRm9ybS9QbGFubmluZy9BY3R1YWwgQXBwcm92YWwgRGF0ZS9TYW1lIEFzIFByb3Bvc2VkIEFwcHJvdmFsIERhdGUnO1xuY29uc3QgQUNUSVZJVFlfSURFTlRJRklDQVRJT04gPSAnL0FjdGl2aXR5IEZvcm0vSWRlbnRpZmljYXRpb24nO1xuY29uc3QgQUNUSVZJVFlfTEFTVF9VUERBVEVEX0JZID0gJy9BY3Rpdml0eSBGb3JtL0lkZW50aWZpY2F0aW9uL0FjdGl2aXR5IExhc3QgVXBkYXRlZCBieSc7XG5jb25zdCBBQ1RJVklUWV9MQVNUX1VQREFURURfT04gPSAnL0FjdGl2aXR5IEZvcm0vSWRlbnRpZmljYXRpb24vQWN0aXZpdHkgVXBkYXRlZCBPbic7XG5jb25zdCBBQ1RJVklUWV9GVU5ESU5HID0gJy9BY3Rpdml0eSBGb3JtL0Z1bmRpbmcnO1xuY29uc3QgQUZfRlVORElOR19GVU5ESU5HR1JPVVBfRlVORElOR0lURU0gPSBgJHtBQ1RJVklUWV9GVU5ESU5HfS9GdW5kaW5nIEdyb3VwL0Z1bmRpbmcgSXRlbWA7XG5jb25zdCBBQ1RJVklUWV9TRUNUT1JTID0gJy9BY3Rpdml0eSBGb3JtL1NlY3RvcnMnO1xuY29uc3QgQUNUSVZJVFlfUFJJTUFSWV9TRUNUT1JTID0gJy9BY3Rpdml0eSBGb3JtL1NlY3RvcnMvUHJpbWFyeSBTZWN0b3JzJztcbmNvbnN0IEFDVElWSVRZX1NFQ09OREFSWV9TRUNUT1JTID0gJy9BY3Rpdml0eSBGb3JtL1NlY3RvcnMvU2Vjb25kYXJ5IFNlY3RvcnMnO1xuXG5jb25zdCBBQ1RJVklUWV9TVFJVQ1RVUkVTID0gJy9BY3Rpdml0eSBGb3JtL1N0cnVjdHVyZXMnO1xuY29uc3QgQUNUSVZJVFlfU1RSVUNUVVJFU19BRERfU1RSVUNUVVJFID0gYCR7QUNUSVZJVFlfU1RSVUNUVVJFU30vQWRkIFN0cnVjdHVyZWA7XG5cbmNvbnN0IEFDVElWSVRZX09SR0FOSVpBVElPTlMgPSAnL0FjdGl2aXR5IEZvcm0vT3JnYW5pemF0aW9ucyc7XG5jb25zdCBBQ1RJVklUWV9PUkdBTklaQVRJT05TX0RPTk9SX09SR0FOSVpBVElPTiA9IGAke0FDVElWSVRZX09SR0FOSVpBVElPTlN9L0Rvbm9yIE9yZ2FuaXphdGlvbmA7XG5jb25zdCBBQ1RJVklUWV9PUkdBTklaQVRJT05TX0JFTkVGSUNJQVJZX0FHRU5DWSA9IGAke0FDVElWSVRZX09SR0FOSVpBVElPTlN9L0JlbmVmaWNpYXJ5IEFnZW5jeWA7XG5jb25zdCBBQ1RJVklUWV9PUkdBTklaQVRJT05TX0NPTlRSQUNUSU5HX0FHRU5DWSA9IGAke0FDVElWSVRZX09SR0FOSVpBVElPTlN9L0NvbnRyYWN0aW5nIEFnZW5jeWA7XG5jb25zdCBBQ1RJVklUWV9PUkdBTklaQVRJT05TX0VYRUNVVElOR19BR0VOQ1kgPSBgJHtBQ1RJVklUWV9PUkdBTklaQVRJT05TfS9FeGVjdXRpbmcgQWdlbmN5YDtcbmNvbnN0IEFDVElWSVRZX09SR0FOSVpBVElPTlNfSU1QTEVNRU5USU5HX0FHRU5DWSA9IGAke0FDVElWSVRZX09SR0FOSVpBVElPTlN9L0ltcGxlbWVudGluZyBBZ2VuY3lgO1xuY29uc3QgQUNUSVZJVFlfT1JHQU5JWkFUSU9OU19SRUdJT05BTF9HUk9VUCA9IGAke0FDVElWSVRZX09SR0FOSVpBVElPTlN9L1JlZ2lvbmFsIEdyb3VwYDtcbmNvbnN0IEFDVElWSVRZX09SR0FOSVpBVElPTlNfUkVMQVRFRF9HT1ZFUk5NRU5UX09SR0FOSVpBVElPTiA9IGAke0FDVElWSVRZX09SR0FOSVpBVElPTlN9L1JlbGF0ZWQgR292ZXJubWVudCBPcmdhbml6YXRpb25gO1xuY29uc3QgQUNUSVZJVFlfT1JHQU5JWkFUSU9OU19TRUNUT1JfR1JPVVAgPSBgJHtBQ1RJVklUWV9PUkdBTklaQVRJT05TfS9TZWN0b3IgR3JvdXBgO1xuXG5jb25zdCBBRERfRlVORElOR19BVVRPID0gJ0FkZCBGdW5kaW5nIEl0ZW0gQXV0b21hdGljYWxseSc7XG5jb25zdCBBQ1RJVklUWV9PUkdBTklaQVRJT05TX0JFTkVGSUNJQVJZX0FHRU5DWV9BRERfRlVORElOR19BVVRPID0gYCR7QUNUSVZJVFlfT1JHQU5JWkFUSU9OU19CRU5FRklDSUFSWV9BR0VOQ1l9LyR7QUREX0ZVTkRJTkdfQVVUT31gO1xuY29uc3QgQUNUSVZJVFlfT1JHQU5JWkFUSU9OU19DT05UUkFDVElOR19BR0VOQ1lfQUREX0ZVTkRJTkdfQVVUTyA9IGAke0FDVElWSVRZX09SR0FOSVpBVElPTlNfQ09OVFJBQ1RJTkdfQUdFTkNZfS8ke0FERF9GVU5ESU5HX0FVVE99YDtcbmNvbnN0IEFDVElWSVRZX09SR0FOSVpBVElPTlNfRE9OT1JfT1JHQU5JWkFUSU9OX0FERF9GVU5ESU5HX0FVVE8gPSBgJHtBQ1RJVklUWV9PUkdBTklaQVRJT05TX0RPTk9SX09SR0FOSVpBVElPTn0vJHtBRERfRlVORElOR19BVVRPfWA7XG5jb25zdCBBQ1RJVklUWV9PUkdBTklaQVRJT05TX0VYRUNVVElOR19BR0VOQ1lfQUREX0ZVTkRJTkdfQVVUTyA9IGAke0FDVElWSVRZX09SR0FOSVpBVElPTlNfRVhFQ1VUSU5HX0FHRU5DWX0vJHtBRERfRlVORElOR19BVVRPfWA7XG5jb25zdCBBQ1RJVklUWV9PUkdBTklaQVRJT05TX0lNUExFTUVOVElOR19BR0VOQ1lfQUREX0ZVTkRJTkdfQVVUTyA9IGAke0FDVElWSVRZX09SR0FOSVpBVElPTlNfSU1QTEVNRU5USU5HX0FHRU5DWX0vJHtBRERfRlVORElOR19BVVRPfWA7XG5jb25zdCBBQ1RJVklUWV9PUkdBTklaQVRJT05TX1JFR0lPTkFMX0dST1VQX0FERF9GVU5ESU5HX0FVVE8gPSBgJHtBQ1RJVklUWV9PUkdBTklaQVRJT05TX1JFR0lPTkFMX0dST1VQfS8ke0FERF9GVU5ESU5HX0FVVE99YDtcbmNvbnN0IEFDVElWSVRZX09SR0FOSVpBVElPTlNfUkVTUE9OU0lCTEVfT1JHQU5JWkFUSU9OX0FERF9GVU5ESU5HX0FVVE8gPSBgJHtBQ1RJVklUWV9PUkdBTklaQVRJT05TX1JFTEFURURfR09WRVJOTUVOVF9PUkdBTklaQVRJT059LyR7QUREX0ZVTkRJTkdfQVVUT31gO1xuY29uc3QgQUNUSVZJVFlfT1JHQU5JWkFUSU9OU19TRUNUT1JfR1JPVVBfQUREX0ZVTkRJTkdfQVVUTyA9IGAke0FDVElWSVRZX09SR0FOSVpBVElPTlNfU0VDVE9SX0dST1VQfS8ke0FERF9GVU5ESU5HX0FVVE99YDtcblxuY29uc3QgQUNUSVZJVFlfRlVORElOR19TRUFSQ0ggPSBgJHtBQ1RJVklUWV9GVU5ESU5HfS9TZWFyY2ggRnVuZGluZyBPcmdhbml6YXRpb25zYDtcbmNvbnN0IEFDVElWSVRZX0ZVTkRJTkdfU0VBUkNIX09SR0FOSVpBVElPTiA9IGAke0FDVElWSVRZX0ZVTkRJTkdfU0VBUkNIfS9TZWFyY2ggT3JnYW5pemF0aW9uc2A7XG5jb25zdCBBQ1RJVklUWV9GVU5ESU5HX1NFTEVDVF9PUkdfVFlQRSA9IGAke0FDVElWSVRZX0ZVTkRJTkdfU0VBUkNIfS9TZWxlY3QgT3JnYW5pemF0aW9uIFR5cGVgO1xuXG5jb25zdCBBQ1RJVklUWV9QUk9HUkFNID0gJy9BY3Rpdml0eSBGb3JtL1Byb2dyYW0nO1xuY29uc3QgQUNUSVZJVFlfUExBTk5JTkcgPSAnL0FjdGl2aXR5IEZvcm0vUGxhbm5pbmcnO1xuXG5jb25zdCBBQ1RJVklUWV9DT05UQUNUID0gJy9BY3Rpdml0eSBGb3JtL0NvbnRhY3RzJztcbmNvbnN0IEFDVElWSVRZX0RPQ1VNRU5UU19BRERfRE9DVU1FTlQgPSAnL0FjdGl2aXR5IEZvcm0vUmVsYXRlZCBEb2N1bWVudHMvQWRkIE5ldyBEb2N1bWVudCc7XG5jb25zdCBBQ1RJVklUWV9ET0NVTUVOVFNfQUREX1dFQkxJTksgPSAnL0FjdGl2aXR5IEZvcm0vUmVsYXRlZCBEb2N1bWVudHMvQWRkIE5ldyBXZWIgTGluayc7XG5cbmNvbnN0IEFDVElWSVRZX0lTU1VFU19BRERfSVNTVUUgPSAnL0FjdGl2aXR5IEZvcm0vSXNzdWVzIFNlY3Rpb24vQWRkIElzc3VlJztcbmNvbnN0IEFDVElWSVRZX0lTU1VFU19ERUxFVEVfSVNTVUUgPSAnL0FjdGl2aXR5IEZvcm0vSXNzdWVzIFNlY3Rpb24vSXNzdWUvRGVsZXRlIEl0ZW0nO1xuY29uc3QgQUNUSVZJVFlfSVNTVUVTX0FERF9NRUFTVVJFID0gJy9BY3Rpdml0eSBGb3JtL0lzc3VlcyBTZWN0aW9uL0lzc3VlL0FkZCBJdGVtJztcbmNvbnN0IEFDVElWSVRZX0lTU1VFU19ERUxFVEVfTUVBU1VSRSA9ICcvQWN0aXZpdHkgRm9ybS9Jc3N1ZXMgU2VjdGlvbi9Jc3N1ZS9NZWFzdXJlL0RlbGV0ZSBJdGVtJztcbmNvbnN0IEFDVElWSVRZX0lTU1VFU19BRERfQUNUT1IgPSAnL0FjdGl2aXR5IEZvcm0vSXNzdWVzIFNlY3Rpb24vSXNzdWUvTWVhc3VyZS9BZGQgSXRlbSc7XG5jb25zdCBBQ1RJVklUWV9JU1NVRVNfREVMRVRFX0FDVE9SID0gJy9BY3Rpdml0eSBGb3JtL0lzc3VlcyBTZWN0aW9uL0lzc3VlL01lYXN1cmUvQWN0b3IvRGVsZXRlIEl0ZW0nO1xuXG5jb25zdCBBQ1RJVklUWV9ESVNCVVJTRU1FTlRTX0ZVTkRJTkdfRkxPV1NfT1JHUk9MRV9BRERfSU1QTEVNRU5USU5HX0FHRU5DWSA9XG4gIGAke0FGX0ZVTkRJTkdfRlVORElOR0dST1VQX0ZVTkRJTkdJVEVNfS9EaXNidXJzZW1lbnRzL0Rpc2J1cnNlbWVudHMgVGFibGUvRnVuZGluZyBGbG93cyBPcmdSb2xlIFNlbGVjdG9yL0FkZCBJbXBsZW1lbnRpbmcgQWdlbmN5YDtcbmNvbnN0IEFDVElWSVRZX0RJU0JVUlNFTUVOVFNfRlVORElOR19GTE9XU19PUkdST0xFX0FERF9DT05UUkFDVElOR19BR0VOQ1kgPVxuICBgJHtBRl9GVU5ESU5HX0ZVTkRJTkdHUk9VUF9GVU5ESU5HSVRFTX0vRGlzYnVyc2VtZW50cy9EaXNidXJzZW1lbnRzIFRhYmxlL0Z1bmRpbmcgRmxvd3MgT3JnUm9sZSBTZWxlY3Rvci9BZGQgQ29udHJhY3RpbmcgQWdlbmN5YDtcbmNvbnN0IEFDVElWSVRZX0RJU0JVUlNFTUVOVFNfRlVORElOR19GTE9XU19PUkdST0xFX0FERF9CRU5FRklDSUFSWV9BR0VOQ1kgPVxuICBgJHtBRl9GVU5ESU5HX0ZVTkRJTkdHUk9VUF9GVU5ESU5HSVRFTX0vRGlzYnVyc2VtZW50cy9EaXNidXJzZW1lbnRzIFRhYmxlL0Z1bmRpbmcgRmxvd3MgT3JnUm9sZSBTZWxlY3Rvci9BZGQgQmVuZWZpY2lhcnkgQWdlbmN5YDtcbmNvbnN0IEFDVElWSVRZX0RJU0JVUlNFTUVOVFNfRlVORElOR19GTE9XU19PUkdST0xFX0FERF9ET05PUl9PUkdBTklaQVRJT04gPVxuICBgJHtBRl9GVU5ESU5HX0ZVTkRJTkdHUk9VUF9GVU5ESU5HSVRFTX0vRGlzYnVyc2VtZW50cy9EaXNidXJzZW1lbnRzIFRhYmxlL0Z1bmRpbmcgRmxvd3MgT3JnUm9sZSBTZWxlY3Rvci9BZGQgRG9ub3IgT3JnYW5pemF0aW9uYDtcbmNvbnN0IEFDVElWSVRZX0RJU0JVUlNFTUVOVFNfRlVORElOR19GTE9XU19PUkdST0xFX0FERF9FWEVDVVRJTkdfQUdFTkNZID1cbiAgYCR7QUZfRlVORElOR19GVU5ESU5HR1JPVVBfRlVORElOR0lURU19L0Rpc2J1cnNlbWVudHMvRGlzYnVyc2VtZW50cyBUYWJsZS9GdW5kaW5nIEZsb3dzIE9yZ1JvbGUgU2VsZWN0b3IvQWRkIEV4ZWN1dGluZyBBZ2VuY3lgO1xuY29uc3QgQUNUSVZJVFlfRElTQlVSU0VNRU5UU19GVU5ESU5HX0ZMT1dTX09SR1JPTEVfQUREX1JFR0lPTkFMX0dST1VQID1cbiAgYCR7QUZfRlVORElOR19GVU5ESU5HR1JPVVBfRlVORElOR0lURU19L0Rpc2J1cnNlbWVudHMvRGlzYnVyc2VtZW50cyBUYWJsZS9GdW5kaW5nIEZsb3dzIE9yZ1JvbGUgU2VsZWN0b3IvQWRkIFJlZ2lvbmFsIEdyb3VwYDtcbmNvbnN0IEFDVElWSVRZX0RJU0JVUlNFTUVOVFNfRlVORElOR19GTE9XU19PUkdST0xFX0FERF9SRVNQT05TSUJMRV9PUkdBTklaQVRJT04gPVxuICBgJHtBRl9GVU5ESU5HX0ZVTkRJTkdHUk9VUF9GVU5ESU5HSVRFTX0vRGlzYnVyc2VtZW50cy9EaXNidXJzZW1lbnRzIFRhYmxlL0Z1bmRpbmcgRmxvd3MgT3JnUm9sZSBTZWxlY3Rvci9BZGQgUmVzcG9uc2libGUgT3JnYW5pemF0aW9uYDtcbmNvbnN0IEFDVElWSVRZX0RJU0JVUlNFTUVOVFNfRlVORElOR19GTE9XU19PUkdST0xFX0FERF9TRUNUT1JfR1JPVVAgPVxuICBgJHtBRl9GVU5ESU5HX0ZVTkRJTkdHUk9VUF9GVU5ESU5HSVRFTX0vRGlzYnVyc2VtZW50cy9EaXNidXJzZW1lbnRzIFRhYmxlL0Z1bmRpbmcgRmxvd3MgT3JnUm9sZSBTZWxlY3Rvci9BZGQgU2VjdG9yIEdyb3VwYDtcblxuY29uc3QgQUNUSVZJVFlfQ09NTUlUTUVOVFNfRlVORElOR19GTE9XU19PUkdST0xFX0FERF9JTVBMRU1FTlRJTkdfQUdFTkNZID1cbiAgYCR7QUZfRlVORElOR19GVU5ESU5HR1JPVVBfRlVORElOR0lURU19L0NvbW1pdG1lbnRzL0NvbW1pdG1lbnRzIFRhYmxlL0Z1bmRpbmcgRmxvd3MgT3JnUm9sZSBTZWxlY3Rvci9BZGQgSW1wbGVtZW50aW5nIEFnZW5jeWA7XG5jb25zdCBBQ1RJVklUWV9DT01NSVRNRU5UU19GVU5ESU5HX0ZMT1dTX09SR1JPTEVfQUREX0NPTlRSQUNUSU5HX0FHRU5DWSA9XG4gIGAke0FGX0ZVTkRJTkdfRlVORElOR0dST1VQX0ZVTkRJTkdJVEVNfS9Db21taXRtZW50cy9Db21taXRtZW50cyBUYWJsZS9GdW5kaW5nIEZsb3dzIE9yZ1JvbGUgU2VsZWN0b3IvQWRkIENvbnRyYWN0aW5nIEFnZW5jeWA7XG5jb25zdCBBQ1RJVklUWV9DT01NSVRNRU5UU19GVU5ESU5HX0ZMT1dTX09SR1JPTEVfQUREX0JFTkVGSUNJQVJZX0FHRU5DWSA9XG4gIGAke0FGX0ZVTkRJTkdfRlVORElOR0dST1VQX0ZVTkRJTkdJVEVNfS9Db21taXRtZW50cy9Db21taXRtZW50cyBUYWJsZS9GdW5kaW5nIEZsb3dzIE9yZ1JvbGUgU2VsZWN0b3IvQWRkIEJlbmVmaWNpYXJ5IEFnZW5jeWA7XG5jb25zdCBBQ1RJVklUWV9DT01NSVRNRU5UU19GVU5ESU5HX0ZMT1dTX09SR1JPTEVfQUREX0RPTk9SX09SR0FOSVpBVElPTiA9XG4gIGAke0FGX0ZVTkRJTkdfRlVORElOR0dST1VQX0ZVTkRJTkdJVEVNfS9Db21taXRtZW50cy9Db21taXRtZW50cyBUYWJsZS9GdW5kaW5nIEZsb3dzIE9yZ1JvbGUgU2VsZWN0b3IvQWRkIERvbm9yIE9yZ2FuaXphdGlvbmA7XG5jb25zdCBBQ1RJVklUWV9DT01NSVRNRU5UU19GVU5ESU5HX0ZMT1dTX09SR1JPTEVfQUREX0VYRUNVVElOR19BR0VOQ1kgPVxuICBgJHtBRl9GVU5ESU5HX0ZVTkRJTkdHUk9VUF9GVU5ESU5HSVRFTX0vQ29tbWl0bWVudHMvQ29tbWl0bWVudHMgVGFibGUvRnVuZGluZyBGbG93cyBPcmdSb2xlIFNlbGVjdG9yL0FkZCBFeGVjdXRpbmcgQWdlbmN5YDtcbmNvbnN0IEFDVElWSVRZX0NPTU1JVE1FTlRTX0ZVTkRJTkdfRkxPV1NfT1JHUk9MRV9BRERfUkVHSU9OQUxfR1JPVVAgPVxuICBgJHtBRl9GVU5ESU5HX0ZVTkRJTkdHUk9VUF9GVU5ESU5HSVRFTX0vQ29tbWl0bWVudHMvQ29tbWl0bWVudHMgVGFibGUvRnVuZGluZyBGbG93cyBPcmdSb2xlIFNlbGVjdG9yL0FkZCBSZWdpb25hbCBHcm91cGA7XG5jb25zdCBBQ1RJVklUWV9DT01NSVRNRU5UU19GVU5ESU5HX0ZMT1dTX09SR1JPTEVfQUREX1JFU1BPTlNJQkxFX09SR0FOSVpBVElPTiA9XG4gIGAke0FGX0ZVTkRJTkdfRlVORElOR0dST1VQX0ZVTkRJTkdJVEVNfS9Db21taXRtZW50cy9Db21taXRtZW50cyBUYWJsZS9GdW5kaW5nIEZsb3dzIE9yZ1JvbGUgU2VsZWN0b3IvQWRkIFJlc3BvbnNpYmxlIE9yZ2FuaXphdGlvbmA7XG5jb25zdCBBQ1RJVklUWV9DT01NSVRNRU5UU19GVU5ESU5HX0ZMT1dTX09SR1JPTEVfQUREX1NFQ1RPUl9HUk9VUCA9XG4gIGAke0FGX0ZVTkRJTkdfRlVORElOR0dST1VQX0ZVTkRJTkdJVEVNfS9Db21taXRtZW50cy9Db21taXRtZW50cyBUYWJsZS9GdW5kaW5nIEZsb3dzIE9yZ1JvbGUgU2VsZWN0b3IvQWRkIFNlY3RvciBHcm91cGA7XG5cbmNvbnN0IEFDVElWSVRZX0VYUEVORElUVVJFU19GVU5ESU5HX0ZMT1dTX09SR1JPTEVfQUREX0lNUExFTUVOVElOR19BR0VOQ1kgPVxuICBgJHtBRl9GVU5ESU5HX0ZVTkRJTkdHUk9VUF9GVU5ESU5HSVRFTX0vRXhwZW5kaXR1cmVzL0V4cGVuZGl0dXJlcyBUYWJsZS9GdW5kaW5nIEZsb3dzIE9yZ1JvbGUgU2VsZWN0b3IvQWRkIEltcGxlbWVudGluZyBBZ2VuY3lgO1xuY29uc3QgQUNUSVZJVFlfRVhQRU5ESVRVUkVTX0ZVTkRJTkdfRkxPV1NfT1JHUk9MRV9BRERfQ09OVFJBQ1RJTkdfQUdFTkNZID1cbiAgYCR7QUZfRlVORElOR19GVU5ESU5HR1JPVVBfRlVORElOR0lURU19L0V4cGVuZGl0dXJlcy9FeHBlbmRpdHVyZXMgVGFibGUvRnVuZGluZyBGbG93cyBPcmdSb2xlIFNlbGVjdG9yL0FkZCBDb250cmFjdGluZyBBZ2VuY3lgO1xuY29uc3QgQUNUSVZJVFlfRVhQRU5ESVRVUkVTX0ZVTkRJTkdfRkxPV1NfT1JHUk9MRV9BRERfQkVORUZJQ0lBUllfQUdFTkNZID1cbiAgYCR7QUZfRlVORElOR19GVU5ESU5HR1JPVVBfRlVORElOR0lURU19L0V4cGVuZGl0dXJlcy9FeHBlbmRpdHVyZXMgVGFibGUvRnVuZGluZyBGbG93cyBPcmdSb2xlIFNlbGVjdG9yL0FkZCBCZW5lZmljaWFyeSBBZ2VuY3lgO1xuY29uc3QgQUNUSVZJVFlfRVhQRU5ESVRVUkVTX0ZVTkRJTkdfRkxPV1NfT1JHUk9MRV9BRERfRE9OT1JfT1JHQU5JWkFUSU9OID1cbiAgYCR7QUZfRlVORElOR19GVU5ESU5HR1JPVVBfRlVORElOR0lURU19L0V4cGVuZGl0dXJlcy9FeHBlbmRpdHVyZXMgVGFibGUvRnVuZGluZyBGbG93cyBPcmdSb2xlIFNlbGVjdG9yL0FkZCBEb25vciBPcmdhbml6YXRpb25gO1xuY29uc3QgQUNUSVZJVFlfRVhQRU5ESVRVUkVTX0ZVTkRJTkdfRkxPV1NfT1JHUk9MRV9BRERfRVhFQ1VUSU5HX0FHRU5DWSA9XG4gIGAke0FGX0ZVTkRJTkdfRlVORElOR0dST1VQX0ZVTkRJTkdJVEVNfS9FeHBlbmRpdHVyZXMvRXhwZW5kaXR1cmVzIFRhYmxlL0Z1bmRpbmcgRmxvd3MgT3JnUm9sZSBTZWxlY3Rvci9BZGQgRXhlY3V0aW5nIEFnZW5jeWA7XG5jb25zdCBBQ1RJVklUWV9FWFBFTkRJVFVSRVNfRlVORElOR19GTE9XU19PUkdST0xFX0FERF9SRUdJT05BTF9HUk9VUCA9XG4gIGAke0FGX0ZVTkRJTkdfRlVORElOR0dST1VQX0ZVTkRJTkdJVEVNfS9FeHBlbmRpdHVyZXMvRXhwZW5kaXR1cmVzIFRhYmxlL0Z1bmRpbmcgRmxvd3MgT3JnUm9sZSBTZWxlY3Rvci9BZGQgUmVnaW9uYWwgR3JvdXBgO1xuY29uc3QgQUNUSVZJVFlfRVhQRU5ESVRVUkVTX0ZVTkRJTkdfRkxPV1NfT1JHUk9MRV9BRERfUkVTUE9OU0lCTEVfT1JHQU5JWkFUSU9OID1cbiAgYCR7QUZfRlVORElOR19GVU5ESU5HR1JPVVBfRlVORElOR0lURU19L0V4cGVuZGl0dXJlcy9FeHBlbmRpdHVyZXMgVGFibGUvRnVuZGluZyBGbG93cyBPcmdSb2xlIFNlbGVjdG9yL0FkZCBSZXNwb25zaWJsZSBPcmdhbml6YXRpb25gO1xuY29uc3QgQUNUSVZJVFlfRVhQRU5ESVRVUkVTX0ZVTkRJTkdfRkxPV1NfT1JHUk9MRV9BRERfU0VDVE9SX0dST1VQID1cbiAgYCR7QUZfRlVORElOR19GVU5ESU5HR1JPVVBfRlVORElOR0lURU19L0V4cGVuZGl0dXJlcy9FeHBlbmRpdHVyZXMgVGFibGUvRnVuZGluZyBGbG93cyBPcmdSb2xlIFNlbGVjdG9yL0FkZCBTZWN0b3IgR3JvdXBgO1xuXG5jb25zdCBNVEVGX1BST0pFQ1RJT05TID0gYCR7QUZfRlVORElOR19GVU5ESU5HR1JPVVBfRlVORElOR0lURU19L01URUYgUHJvamVjdGlvbnNgO1xuY29uc3QgTVRFRl9QUk9KRUNUSU9OU19BTU9VTlQgPVxuICBgJHtBRl9GVU5ESU5HX0ZVTkRJTkdHUk9VUF9GVU5ESU5HSVRFTX0vTVRFRiBQcm9qZWN0aW9ucy9NVEVGIFByb2plY3Rpb25zIFRhYmxlL0Ftb3VudGA7XG5jb25zdCBNVEVGX1BST0pFQ1RJT05TX0NVUlJFTkNZID1cbiAgYCR7QUZfRlVORElOR19GVU5ESU5HR1JPVVBfRlVORElOR0lURU19L01URUYgUHJvamVjdGlvbnMvTVRFRiBQcm9qZWN0aW9ucyBUYWJsZS9DdXJyZW5jeWA7XG5jb25zdCBNVEVGX1BST0pFQ1RJT05TX1BST0pFQ1RJT04gPVxuICBgJHtBRl9GVU5ESU5HX0ZVTkRJTkdHUk9VUF9GVU5ESU5HSVRFTX0vTVRFRiBQcm9qZWN0aW9ucy9NVEVGIFByb2plY3Rpb25zIFRhYmxlL01URUYgUHJvamVjdGlvbmA7XG5jb25zdCBNVEVGX1BST0pFQ1RJT05TX0RBVEUgPVxuICBgJHtBRl9GVU5ESU5HX0ZVTkRJTkdHUk9VUF9GVU5ESU5HSVRFTX0vTVRFRiBQcm9qZWN0aW9ucy9NVEVGIFByb2plY3Rpb25zIFRhYmxlL1Byb2plY3Rpb24gRGF0ZWA7XG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmZyZWV6ZSh7XG4gIFBVQkxJQ19WSUVXX0NIQU5HRV9QQVNTV09SRCxcbiAgUFVCTElDX1ZJRVdfVFJPVUJMRV9TSUdOX0lOLFxuICBBQ1RJVklUWV9ERUxJVkVSWV9SQVRFLFxuICBBQ1RJVklUWV9QUk9KRUNUX0lEX0FORF9QTEFOTklORyxcbiAgQUNUSVZJVFlfRFVSQVRJT05fT0ZfUFJPSkVDVCxcbiAgQUNUSVZJVFlfVEVBTV9MRUFERVIsXG4gIEFDVElWSVRZX1NBTUVfQVNfUFJPUE9TRURfU1RBUlRfREFURSxcbiAgQUNUSVZJVFlfU0FNRV9BU19QUk9QT1NFRF9BUFBST1ZBTF9EQVRFLFxuICBBQ1RJVklUWV9JREVOVElGSUNBVElPTixcbiAgQUNUSVZJVFlfTEFTVF9VUERBVEVEX0JZLFxuICBBQ1RJVklUWV9MQVNUX1VQREFURURfT04sXG4gIEFDVElWSVRZX1NFQ1RPUlMsXG4gIEFDVElWSVRZX1BSSU1BUllfU0VDVE9SUyxcbiAgQUNUSVZJVFlfU0VDT05EQVJZX1NFQ1RPUlMsXG4gIEFDVElWSVRZX1NUUlVDVFVSRVMsXG4gIEFDVElWSVRZX1NUUlVDVFVSRVNfQUREX1NUUlVDVFVSRSxcbiAgQUNUSVZJVFlfT1JHQU5JWkFUSU9OUyxcbiAgQUNUSVZJVFlfT1JHQU5JWkFUSU9OU19ET05PUl9PUkdBTklaQVRJT04sXG4gIEFDVElWSVRZX09SR0FOSVpBVElPTlNfQkVORUZJQ0lBUllfQUdFTkNZLFxuICBBQ1RJVklUWV9PUkdBTklaQVRJT05TX0NPTlRSQUNUSU5HX0FHRU5DWSxcbiAgQUNUSVZJVFlfT1JHQU5JWkFUSU9OU19FWEVDVVRJTkdfQUdFTkNZLFxuICBBQ1RJVklUWV9PUkdBTklaQVRJT05TX0lNUExFTUVOVElOR19BR0VOQ1ksXG4gIEFDVElWSVRZX09SR0FOSVpBVElPTlNfUkVHSU9OQUxfR1JPVVAsXG4gIEFDVElWSVRZX09SR0FOSVpBVElPTlNfUkVMQVRFRF9HT1ZFUk5NRU5UX09SR0FOSVpBVElPTixcbiAgQUNUSVZJVFlfT1JHQU5JWkFUSU9OU19TRUNUT1JfR1JPVVAsXG4gIEFDVElWSVRZX09SR0FOSVpBVElPTlNfQkVORUZJQ0lBUllfQUdFTkNZX0FERF9GVU5ESU5HX0FVVE8sXG4gIEFDVElWSVRZX09SR0FOSVpBVElPTlNfQ09OVFJBQ1RJTkdfQUdFTkNZX0FERF9GVU5ESU5HX0FVVE8sXG4gIEFDVElWSVRZX09SR0FOSVpBVElPTlNfRE9OT1JfT1JHQU5JWkFUSU9OX0FERF9GVU5ESU5HX0FVVE8sXG4gIEFDVElWSVRZX09SR0FOSVpBVElPTlNfRVhFQ1VUSU5HX0FHRU5DWV9BRERfRlVORElOR19BVVRPLFxuICBBQ1RJVklUWV9PUkdBTklaQVRJT05TX0lNUExFTUVOVElOR19BR0VOQ1lfQUREX0ZVTkRJTkdfQVVUTyxcbiAgQUNUSVZJVFlfT1JHQU5JWkFUSU9OU19SRUdJT05BTF9HUk9VUF9BRERfRlVORElOR19BVVRPLFxuICBBQ1RJVklUWV9PUkdBTklaQVRJT05TX1JFU1BPTlNJQkxFX09SR0FOSVpBVElPTl9BRERfRlVORElOR19BVVRPLFxuICBBQ1RJVklUWV9PUkdBTklaQVRJT05TX1NFQ1RPUl9HUk9VUF9BRERfRlVORElOR19BVVRPLFxuICBBQ1RJVklUWV9GVU5ESU5HX1NFQVJDSCxcbiAgQUNUSVZJVFlfRlVORElOR19TRUFSQ0hfT1JHQU5JWkFUSU9OLFxuICBBQ1RJVklUWV9GVU5ESU5HX1NFTEVDVF9PUkdfVFlQRSxcbiAgQUNUSVZJVFlfUFJPR1JBTSxcbiAgQUNUSVZJVFlfUExBTk5JTkcsXG4gIEFDVElWSVRZX0NPTlRBQ1QsXG4gIEFDVElWSVRZX0RPQ1VNRU5UU19BRERfRE9DVU1FTlQsXG4gIEFDVElWSVRZX0RPQ1VNRU5UU19BRERfV0VCTElOSyxcbiAgQUNUSVZJVFlfSVNTVUVTX0FERF9JU1NVRSxcbiAgQUNUSVZJVFlfSVNTVUVTX0RFTEVURV9JU1NVRSxcbiAgQUNUSVZJVFlfSVNTVUVTX0FERF9NRUFTVVJFLFxuICBBQ1RJVklUWV9JU1NVRVNfREVMRVRFX01FQVNVUkUsXG4gIEFDVElWSVRZX0lTU1VFU19BRERfQUNUT1IsXG4gIEFDVElWSVRZX0lTU1VFU19ERUxFVEVfQUNUT1IsXG4gIEFDVElWSVRZX0RJU0JVUlNFTUVOVFNfRlVORElOR19GTE9XU19PUkdST0xFX0FERF9JTVBMRU1FTlRJTkdfQUdFTkNZLFxuICBBQ1RJVklUWV9ESVNCVVJTRU1FTlRTX0ZVTkRJTkdfRkxPV1NfT1JHUk9MRV9BRERfQ09OVFJBQ1RJTkdfQUdFTkNZLFxuICBBQ1RJVklUWV9ESVNCVVJTRU1FTlRTX0ZVTkRJTkdfRkxPV1NfT1JHUk9MRV9BRERfQkVORUZJQ0lBUllfQUdFTkNZLFxuICBBQ1RJVklUWV9ESVNCVVJTRU1FTlRTX0ZVTkRJTkdfRkxPV1NfT1JHUk9MRV9BRERfRE9OT1JfT1JHQU5JWkFUSU9OLFxuICBBQ1RJVklUWV9ESVNCVVJTRU1FTlRTX0ZVTkRJTkdfRkxPV1NfT1JHUk9MRV9BRERfRVhFQ1VUSU5HX0FHRU5DWSxcbiAgQUNUSVZJVFlfRElTQlVSU0VNRU5UU19GVU5ESU5HX0ZMT1dTX09SR1JPTEVfQUREX1JFR0lPTkFMX0dST1VQLFxuICBBQ1RJVklUWV9ESVNCVVJTRU1FTlRTX0ZVTkRJTkdfRkxPV1NfT1JHUk9MRV9BRERfUkVTUE9OU0lCTEVfT1JHQU5JWkFUSU9OLFxuICBBQ1RJVklUWV9ESVNCVVJTRU1FTlRTX0ZVTkRJTkdfRkxPV1NfT1JHUk9MRV9BRERfU0VDVE9SX0dST1VQLFxuICBBQ1RJVklUWV9DT01NSVRNRU5UU19GVU5ESU5HX0ZMT1dTX09SR1JPTEVfQUREX0lNUExFTUVOVElOR19BR0VOQ1ksXG4gIEFDVElWSVRZX0NPTU1JVE1FTlRTX0ZVTkRJTkdfRkxPV1NfT1JHUk9MRV9BRERfQ09OVFJBQ1RJTkdfQUdFTkNZLFxuICBBQ1RJVklUWV9DT01NSVRNRU5UU19GVU5ESU5HX0ZMT1dTX09SR1JPTEVfQUREX0JFTkVGSUNJQVJZX0FHRU5DWSxcbiAgQUNUSVZJVFlfQ09NTUlUTUVOVFNfRlVORElOR19GTE9XU19PUkdST0xFX0FERF9ET05PUl9PUkdBTklaQVRJT04sXG4gIEFDVElWSVRZX0NPTU1JVE1FTlRTX0ZVTkRJTkdfRkxPV1NfT1JHUk9MRV9BRERfRVhFQ1VUSU5HX0FHRU5DWSxcbiAgQUNUSVZJVFlfQ09NTUlUTUVOVFNfRlVORElOR19GTE9XU19PUkdST0xFX0FERF9SRUdJT05BTF9HUk9VUCxcbiAgQUNUSVZJVFlfQ09NTUlUTUVOVFNfRlVORElOR19GTE9XU19PUkdST0xFX0FERF9SRVNQT05TSUJMRV9PUkdBTklaQVRJT04sXG4gIEFDVElWSVRZX0NPTU1JVE1FTlRTX0ZVTkRJTkdfRkxPV1NfT1JHUk9MRV9BRERfU0VDVE9SX0dST1VQLFxuICBBQ1RJVklUWV9FWFBFTkRJVFVSRVNfRlVORElOR19GTE9XU19PUkdST0xFX0FERF9JTVBMRU1FTlRJTkdfQUdFTkNZLFxuICBBQ1RJVklUWV9FWFBFTkRJVFVSRVNfRlVORElOR19GTE9XU19PUkdST0xFX0FERF9DT05UUkFDVElOR19BR0VOQ1ksXG4gIEFDVElWSVRZX0VYUEVORElUVVJFU19GVU5ESU5HX0ZMT1dTX09SR1JPTEVfQUREX0JFTkVGSUNJQVJZX0FHRU5DWSxcbiAgQUNUSVZJVFlfRVhQRU5ESVRVUkVTX0ZVTkRJTkdfRkxPV1NfT1JHUk9MRV9BRERfRE9OT1JfT1JHQU5JWkFUSU9OLFxuICBBQ1RJVklUWV9FWFBFTkRJVFVSRVNfRlVORElOR19GTE9XU19PUkdST0xFX0FERF9FWEVDVVRJTkdfQUdFTkNZLFxuICBBQ1RJVklUWV9FWFBFTkRJVFVSRVNfRlVORElOR19GTE9XU19PUkdST0xFX0FERF9SRUdJT05BTF9HUk9VUCxcbiAgQUNUSVZJVFlfRVhQRU5ESVRVUkVTX0ZVTkRJTkdfRkxPV1NfT1JHUk9MRV9BRERfUkVTUE9OU0lCTEVfT1JHQU5JWkFUSU9OLFxuICBBQ1RJVklUWV9FWFBFTkRJVFVSRVNfRlVORElOR19GTE9XU19PUkdST0xFX0FERF9TRUNUT1JfR1JPVVAsXG4gIE1URUZfUFJPSkVDVElPTlMsXG4gIE1URUZfUFJPSkVDVElPTlNfQU1PVU5ULFxuICBNVEVGX1BST0pFQ1RJT05TX0NVUlJFTkNZLFxuICBNVEVGX1BST0pFQ1RJT05TX1BST0pFQ1RJT04sXG4gIE1URUZfUFJPSkVDVElPTlNfREFURSxcbn0pO1xuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVUlVdGlscyB7XG5cbiAgc3RhdGljIHN0cmluZ1RvSWQoc3RyaW5nOiBzdHJpbmcpIHtcbiAgICBzdHJpbmcgPSBzdHJpbmcgfHwgJyc7XG4gICAgbGV0IGhhc2ggPSA1MzgxO1xuICAgIGZvciAobGV0IGkgPSBzdHJpbmcubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgIC8qIGVzbGludC1kaXNhYmxlIG5vLWJpdHdpc2UgKi9cbiAgICAgIGhhc2ggPSAoaGFzaCAqIDMzKSBeIHN0cmluZy5jaGFyQ29kZUF0KGkpO1xuICAgIH1cbiAgICByZXR1cm4gaGFzaCA+Pj4gMDtcbiAgICAvKiBlc2xpbnQtZW5hYmxlIG5vLWJpdHdpc2UgKi9cbiAgfVxuXG4gIC8qKlxuICAgKiBHZW5lcmF0ZXMgYSB1bmlxdWUgaWQgZm9yIGVhY2ggY2FsbCwgb3ZlciB0aGUgc2FtZSBzdHJpbmdcbiAgICogQHBhcmFtIHN0cmluZ1xuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqL1xuICBzdGF0aWMgc3RyaW5nVG9VbmlxdWVJZChzdHJpbmc6IHN0cmluZykge1xuICAgIHJldHVybiBgJHt0aGlzLnN0cmluZ1RvSWQoc3RyaW5nKX0tJHtEYXRlLm5vdygpfS0ke01hdGgucmFuZG9tKClcbiAgICAgIC50b1N0cmluZygpXG4gICAgICAuc3Vic3RyaW5nKDIpfWA7XG4gIH1cblxuICBzdGF0aWMgbnVtYmVyUmFuZG9tKCkge1xuICAgIHJldHVybiBNYXRoLnRydW5jKChNYXRoLnJhbmRvbSgpICogMTAwMDAwMCkpO1xuICB9XG5cbiAgc3RhdGljIGNhcGl0YWxpemUodGV4dDogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRleHQucmVwbGFjZSgvKD86XnxcXHMpXFxTL2csIGNoYXIgPT4gY2hhci50b1VwcGVyQ2FzZSgpKTtcbiAgfVxuXG4gIHN0YXRpYyBjbG9uZURlZXAob2JqKSB7XG4gICAgcmV0dXJuIEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkob2JqKSk7XG4gIH1cbn07XG4iLCJpbXBvcnQgRk1DIGZyb20gJy4vRmVhdHVyZU1hbmFnZXJDb25zdGFudHMnO1xuaW1wb3J0IFVJVXRpbHMgZnJvbSAnLi4vLi4vdXRpbHMvVUlVdGlscyc7XG5cbi8qKlxuICogQGF1dGhvciBOYWRlamRhIE1hbmRyZXNjdVxuICovXG5cbi8vIEFjdGl2aXR5IGZpZWxkc1xuY29uc3QgQUNUSVZJVFlfQlVER0VUID0gJ2FjdGl2aXR5X2J1ZGdldCc7XG5jb25zdCBBQ1RJVklUWV9TVEFUVVMgPSAnYWN0aXZpdHlfc3RhdHVzJztcbmNvbnN0IFNUQVRVU19SRUFTT04gPSAnc3RhdHVzX3JlYXNvbic7XG5jb25zdCBGSU5BTkNJQUxfSU5TVFJVTUVOVCA9ICdmaW5hbmNpYWxfaW5zdHJ1bWVudCc7XG5jb25zdCBUWVBFX09GX0lNUExFTUVOVEFUSU9OID0gJ3R5cGVfb2ZfaW1wbGVtZW50YXRpb24nO1xuY29uc3QgT0JKRUNUSVZFID0gJ29iamVjdGl2ZSc7XG5jb25zdCBSRVNVTFRTID0gJ3Jlc3VsdHMnO1xuY29uc3QgQlVER0VUX0NPREVfUFJPSkVDVF9JRCA9ICdidWRnZXRfY29kZV9wcm9qZWN0X2lkJztcbmNvbnN0IEFDVFVBTF9BUFBST1ZBTF9EQVRFID0gJ2FjdHVhbF9hcHByb3ZhbF9kYXRlJztcbmNvbnN0IEZVTkRJTkdTID0gJ2Z1bmRpbmdzJztcbmNvbnN0IEZVTkRJTkdfRE9OT1JfT1JHX0lEID0gJ2Rvbm9yX29yZ2FuaXphdGlvbl9pZCc7XG5jb25zdCBJU19EUkFGVCA9ICdpc19kcmFmdCc7XG5jb25zdCBPUkdfUk9MRV9PUkdfSUQgPSAnb3JnYW5pemF0aW9uJztcbmNvbnN0IEFERElUSU9OQUxfSU5GTyA9ICdhZGRpdGlvbmFsX2luZm8nO1xuY29uc3QgUFJJTUFSWV9TRUNUT1JTID0gJ3ByaW1hcnlfc2VjdG9ycyc7XG5jb25zdCBTRUNPTkRBUllfU0VDVE9SUyA9ICdzZWNvbmRhcnlfc2VjdG9ycyc7XG5jb25zdCBURVJUSUFSWV9TRUNUT1JTID0gJ3RlcnRpYXJ5X3NlY3RvcnMnO1xuY29uc3QgVEFHX1NFQ1RPUlMgPSAndGFnX3NlY3RvcnMnO1xuY29uc3QgU0VDVE9SID0gJ3NlY3Rvcic7XG5jb25zdCBTRUNUT1JfUEVSQ0VOVEFHRSA9ICdzZWN0b3JfcGVyY2VudGFnZSc7XG5jb25zdCBGSU5BTkNJTkdfSU5TVFJVTUVOVCA9ICdmaW5hbmNpbmdfaW5zdHJ1bWVudCc7XG5jb25zdCBNT0RBTElUSUVTID0gJ21vZGFsaXRpZXMnO1xuY29uc3QgTElORV9NSU5JU1RSWV9SQU5LID0gJ2xpbmVfbWluaXN0cnlfcmFuayc7XG5jb25zdCBHT1ZFUk5NRU5UX0FHUkVFTUVOVF9OVU1CRVIgPSAnZ292ZXJubWVudF9hZ3JlZW1lbnRfbnVtYmVyJztcbmNvbnN0IEZVTkRJTkdfU1RBVFVTID0gJ2Z1bmRpbmdfc3RhdHVzJztcbmNvbnN0IExPQ0FUSU9OUyA9ICdsb2NhdGlvbnMnO1xuY29uc3QgTE9DQVRJT04gPSAnbG9jYXRpb24nO1xuY29uc3QgTE9DQVRJT05fUEVSQ0VOVEFHRSA9ICdsb2NhdGlvbl9wZXJjZW50YWdlJztcbmNvbnN0IElNUExFTUVOVEFUSU9OX0xPQ0FUSU9OID0gJ2ltcGxlbWVudGF0aW9uX2xvY2F0aW9uJztcbmNvbnN0IElNUExFTUVOVEFUSU9OX0xFVkVMID0gJ2ltcGxlbWVudGF0aW9uX2xldmVsJztcbmNvbnN0IEFQUFJPVkFMX1NUQVRVUyA9ICdhcHByb3ZhbF9zdGF0dXMnO1xuY29uc3QgQVBQUk9WRURfQlkgPSAnYXBwcm92ZWRfYnknO1xuY29uc3QgQVBQUk9WQUxfREFURSA9ICdhcHByb3ZhbF9kYXRlJztcbmNvbnN0IFRZUEVfT0ZfQVNTSVNUQU5DRSA9ICd0eXBlX29mX2Fzc2lzdGFuY2UnO1xuY29uc3QgRVhQRU5ESVRVUkVfQ0xBU1MgPSAnZXhwZW5kaXR1cmVfY2xhc3MnO1xuY29uc3QgRlVORElOR19ERVRBSUxTID0gJ2Z1bmRpbmdfZGV0YWlscyc7XG5jb25zdCBNT0RFX09GX1BBWU1FTlQgPSAnbW9kZV9vZl9wYXltZW50JztcbmNvbnN0IEZVTkRJTkdfQ0xBU1NJRklDQVRJT05fREFURSA9ICdmdW5kaW5nX2NsYXNzaWZpY2F0aW9uX2RhdGUnO1xuY29uc3QgQUdSRUVNRU5UID0gJ2FncmVlbWVudCc7XG5jb25zdCBET05PUl9PQkpFQ1RJVkUgPSAnZG9ub3Jfb2JqZWN0aXZlJztcbmNvbnN0IENPTkRJVElPTlMgPSAnY29uZGl0aW9ucyc7XG5jb25zdCBBR1JFRU1FTlRfQ09ERSA9ICdjb2RlJztcbmNvbnN0IEFHUkVFTUVOVF9USVRMRSA9ICd0aXRsZSc7XG5jb25zdCBQUk9KRUNUX0NBVEVHT1JZID0gJ3Byb2plY3RfY2F0ZWdvcnknO1xuY29uc3QgUFJPSkVDVF9JTVBMRU1FTlRJTkdfVU5JVCA9ICdwcm9qZWN0X2ltcGxlbWVudGluZ191bml0JztcbmNvbnN0IE9SR0FOSVpBVElPTiA9ICdvcmdhbml6YXRpb24nO1xuY29uc3QgUEVSQ0VOVEFHRSA9ICdwZXJjZW50YWdlJztcbmNvbnN0IEFNUF9PUkdBTklaQVRJT05fUk9MRV9JRCA9ICdhbXBfb3JnYW5pemF0aW9uX3JvbGVfaWQnO1xuY29uc3QgUk9MRSA9ICdyb2xlJztcbmNvbnN0IEVYRUNVVElOR19BR0VOQ1kgPSAnZXhlY3V0aW5nX2FnZW5jeSc7XG5jb25zdCBDT05UUkFDVElOR19BR0VOQ1kgPSAnY29udHJhY3RpbmdfYWdlbmN5JztcbmNvbnN0IEJFTkVGSUNJQVJZX0FHRU5DWSA9ICdiZW5lZmljaWFyeV9hZ2VuY3knO1xuY29uc3QgSU1QTEVNRU5USU5HX0FHRU5DWSA9ICdpbXBsZW1lbnRpbmdfYWdlbmN5JztcbmNvbnN0IFJFU1BPTlNJQkxFX09SR0FOSVpBVElPTiA9ICdyZXNwb25zaWJsZV9vcmdhbml6YXRpb24nO1xuY29uc3QgRE9OT1JfT1JHQU5JWkFUSU9OID0gJ2Rvbm9yX29yZ2FuaXphdGlvbic7XG5jb25zdCBSRUdJT05BTF9HUk9VUCA9ICdyZWdpb25hbF9ncm91cCc7XG5jb25zdCBTRUNUT1JfR1JPVVAgPSAnc2VjdG9yX2dyb3VwJztcbmNvbnN0IEJVREdFVFMgPSAnYnVkZ2V0cyc7XG5jb25zdCBCVURHRVRfQ09ERSA9ICdidWRnZXRfY29kZSc7XG5jb25zdCBCVURHRVRfT1JHQU5JWkFUSU9OX0NPREUgPSAnYnVkZ2V0X29yZ2FuaXphdGlvbl9jb2RlJztcbmNvbnN0IEFSQ0hJVkVEID0gJ2FyY2hpdmVkJztcbmNvbnN0IFRSQU5TQUNUSU9OX0RBVEUgPSAndHJhbnNhY3Rpb25fZGF0ZSc7XG5jb25zdCBUUkFOU0FDVElPTl9UWVBFID0gJ3RyYW5zYWN0aW9uX3R5cGUnO1xuY29uc3QgQ09NTUlUTUVOVFMgPSAnY29tbWl0bWVudHMnO1xuY29uc3QgRElTQlVSU0VNRU5UUyA9ICdkaXNidXJzZW1lbnRzJztcbmNvbnN0IEVYUEVORElUVVJFUyA9ICdleHBlbmRpdHVyZXMnO1xuY29uc3QgRVNUSU1BVEVEX0RJU0JVUlNFTUVOVFMgPSAnZXN0aW1hdGVkX2Rpc2J1cnNlbWVudHMnO1xuY29uc3QgVFJBTlNBQ1RJT05fQU1PVU5UID0gJ3RyYW5zYWN0aW9uX2Ftb3VudCc7XG5jb25zdCBBREpVU1RNRU5UX1RZUEUgPSAnYWRqdXN0bWVudF90eXBlJztcbmNvbnN0IEFDVFVBTF9TVEFSVF9EQVRFID0gJ2FjdHVhbF9zdGFydF9kYXRlJztcbmNvbnN0IFBST1BPU0VEX1NUQVJUX0RBVEUgPSAncHJvcG9zZWRfc3RhcnRfZGF0ZSc7XG5jb25zdCBBQ1RVQUxfQ09NUExFVElPTl9EQVRFID0gJ2FjdHVhbF9jb21wbGV0aW9uX2RhdGUnO1xuY29uc3QgQ09OVFJBQ1RJTkdfREFURSA9ICdjb250cmFjdGluZ19kYXRlJztcbmNvbnN0IERJU0JVUlNFTUVOVF9EQVRFID0gJ2Rpc2J1cnNlbWVudF9kYXRlJztcbmNvbnN0IFBST1BPU0VEX0FQUFJPVkFMX0RBVEUgPSAncHJvcG9zZWRfYXBwcm92YWxfZGF0ZSc7XG5jb25zdCBPUklHSU5BTF9DT01QTEVUSU9OX0RBVEUgPSAnb3JpZ2luYWxfY29tcGxldGlvbl9kYXRlJztcbmNvbnN0IFBST1BPU0VEX0NPTVBMRVRJT05fREFURSA9ICdwcm9wb3NlZF9jb21wbGV0aW9uX2RhdGUnO1xuY29uc3QgRklOQUxfREFURV9GT1JfRElTQlVSU0VNRU5UUyA9ICdmaW5hbF9kYXRlX2Zvcl9kaXNidXJzZW1lbnRzJztcbmNvbnN0IEZJTkFMX0RBVEVfRk9SX0NPTlRSQUNUSU5HID0gJ2ZpbmFsX2RhdGVfZm9yX2NvbnRyYWN0aW5nJztcbmNvbnN0IEVGRkVDVElWRV9GVU5ESU5HX0RBVEUgPSAnZWZmZWN0aXZlX2Z1bmRpbmdfZGF0ZSc7XG5jb25zdCBGVU5ESU5HX0NMT1NJTkdfREFURSA9ICdmdW5kaW5nX2Nsb3NpbmdfZGF0ZSc7XG5jb25zdCBSQVRJRklDQVRJT05fREFURSA9ICdyYXRpZmljYXRpb25fZGF0ZSc7XG5jb25zdCBNQVRVUklUWSA9ICdtYXR1cml0eSc7XG5jb25zdCBMQVNUX0FVRElUX0RBVEUgPSAnbGFzdF9hdWRpdF9kYXRlJztcbmNvbnN0IFNJR05BVFVSRV9EQVRFID0gJ3NpZ25hdHVyZV9kYXRlJztcbmNvbnN0IEhVTUFOSVRBUklBTl9BSUQgPSAnaHVtYW5pdGFyaWFuX2FpZCc7XG5jb25zdCBESVNBU1RFUl9SRVNQT05TRSA9ICdkaXNhc3Rlcl9yZXNwb25zZSc7XG5jb25zdCBQUk9HUkFNID0gJ3Byb2dyYW0nO1xuY29uc3QgUFJPR1JBTV9QRVJDRU5UQUdFID0gJ3Byb2dyYW1fcGVyY2VudGFnZSc7XG5jb25zdCBQUk9HUkFNX1NFVFRJTkdTID0gJ3Byb2dyYW1fc2V0dGluZ3MnO1xuY29uc3QgTkFUSU9OQUxfUExBTl9PQkpFQ1RJVkUgPSAnbmF0aW9uYWxfcGxhbl9vYmplY3RpdmUnO1xuY29uc3QgUFJJTUFSWV9QUk9HUkFNUyA9ICdwcmltYXJ5X3Byb2dyYW1zJztcbmNvbnN0IFNFQ09OREFSWV9QUk9HUkFNUyA9ICdzZWNvbmRhcnlfcHJvZ3JhbXMnO1xuY29uc3QgVEVSVElBUl9QUk9HUkFNUyA9ICd0ZXJ0aWFyeV9wcm9ncmFtcyc7XG5jb25zdCBHT1ZFUk5NRU5UX0FQUFJPVkFMX1BST0NFRFVSRVMgPSAnZ292ZXJubWVudF9hcHByb3ZhbF9wcm9jZWR1cmVzJztcbmNvbnN0IEpPSU5UX0NSSVRFUklBID0gJ2pvaW50X2NyaXRlcmlhJztcbmNvbnN0IFRFQU0gPSAndGVhbSc7XG5jb25zdCBSRUpFQ1RFRF9JRCA9ICdyZWplY3RlZElkJztcbmNvbnN0IElOVEVSTkFMX0lEID0gJ2ludGVybmFsX2lkJztcbmNvbnN0IEFNUF9JRCA9ICdhbXBfaWQnO1xuY29uc3QgUFJPSkVDVF9USVRMRSA9ICdwcm9qZWN0X3RpdGxlJztcbmNvbnN0IERFU0NSSVBUSU9OID0gJ2Rlc2NyaXB0aW9uJztcbmNvbnN0IE1PRElGSUVEX0JZID0gJ21vZGlmaWVkX2J5JztcbmNvbnN0IE1PRElGSUVEX09OID0gJ3VwZGF0ZV9kYXRlJztcbmNvbnN0IENSRUFURURfQlkgPSAnY3JlYXRlZF9ieSc7XG5jb25zdCBDUkVBVEVEX09OID0gJ2NyZWF0aW9uX2RhdGUnO1xuY29uc3QgTEFTVF9JTVBPUlRFRF9CWSA9ICdsYXN0X2ltcG9ydGVkX2J5JztcbmNvbnN0IENMSUVOVF9DSEFOR0VfSUQgPSAnY2xpZW50LWNoYW5nZS1pZCc7XG5jb25zdCBDTElFTlRfQ1JFQVRFRF9PTiA9ICdjbGllbnQtY3JlYXRlZC1vbic7XG5jb25zdCBDTElFTlRfVVBEQVRFRF9PTiA9ICdjbGllbnQtdXBkYXRlZC1vbic7XG5jb25zdCBJU19QVVNIRUQgPSAnaXMtcHVzaGVkJztcbmNvbnN0IEFDVElWSVRZX0dST1VQID0gJ2FjdGl2aXR5X2dyb3VwJztcbmNvbnN0IFZFUlNJT04gPSAndmVyc2lvbic7XG5jb25zdCBQUk9KRUNUX0NPTU1FTlRTID0gJ3Byb2plY3RfY29tbWVudHMnO1xuY29uc3QgTEVTU09OU19MRUFSTkVEID0gJ2xlc3NvbnNfbGVhcm5lZCc7XG5jb25zdCBQUk9KRUNUX0lNUEFDVCA9ICdwcm9qZWN0X2ltcGFjdCc7XG5jb25zdCBBQ1RJVklUWV9TVU1NQVJZID0gJ2FjdGl2aXR5X3N1bW1hcnknO1xuY29uc3QgQ09ORElUSU9OQUxJVElFUyA9ICdjb25kaXRpb25hbGl0aWVzJztcbmNvbnN0IFBST0pFQ1RfTUFOQUdFTUVOVCA9ICdwcm9qZWN0X21hbmFnZW1lbnQnO1xuY29uc3QgQV9DX0NIQVBURVIgPSAnYV9jX2NoYXB0ZXInO1xuY29uc3QgQ1JJU19OVU1CRVIgPSAnY3Jpc19udW1iZXInO1xuY29uc3QgSUFUSV9JREVOVElGSUVSID0gJ2lhdGlfaWRlbnRpZmllcic7XG5jb25zdCBBQ1RJVklUWV9JTlRFUk5BTF9JRFMgPSAnYWN0aXZpdHlfaW50ZXJuYWxfaWRzJztcbmNvbnN0IEhJRVJBUkNISUNBTF9WQUxVRSA9ICdoaWVyYXJjaGljYWxfdmFsdWUnO1xuY29uc3QgSElFUkFSQ0hJQ0FMX1ZBTFVFX1BBUlRTID0gJ2hpZXJhcmNoaWNhbF92YWx1ZV9wYXJ0cyc7XG5jb25zdCBISUVSQVJDSElDQUxfVkFMVUVfREVQVEggPSAnaGllcmFyY2hpY2FsX3ZhbHVlX2RlcHRoJztcbmNvbnN0IFBQQ19BTU9VTlQgPSAncHBjX2Ftb3VudCc7XG5jb25zdCBSUENfQU1PVU5UID0gJ3JwY19hbW91bnQnO1xuY29uc3QgUFBDX0FOTlVBTF9CVURHRVRTID0gJ3BwY19hbm51YWxfYnVkZ2V0cyc7XG5jb25zdCBBTU9VTlQgPSAnYW1vdW50JztcbmNvbnN0IENVUlJFTkNZID0gJ2N1cnJlbmN5JztcbmNvbnN0IEZVTkRJTkdfREFURSA9ICdmdW5kaW5nX2RhdGUnO1xuY29uc3QgQ09NUE9ORU5UUyA9ICdjb21wb25lbnRzJztcbmNvbnN0IFRPVEFMX05VTUJFUl9PRl9GVU5ESU5HX1NPVVJDRVMgPSAndG90YWxfbnVtYmVyX29mX2Z1bmRpbmdfc291cmNlcyc7XG5jb25zdCBTT1VSQ0VfUk9MRSA9ICdzb3VyY2Vfcm9sZSc7XG5jb25zdCBBTVBfRlVORElOR19JRCA9ICdmdW5kaW5nX2lkJztcbmNvbnN0IElTU1VFUyA9ICdpc3N1ZXMnO1xuY29uc3QgSVNTVUVfREFURSA9ICdpc3N1ZV9kYXRlJztcbmNvbnN0IElTU1VFX05BTUUgPSAnbmFtZSc7XG5jb25zdCBNRUFTVVJFUyA9ICdtZWFzdXJlcyc7XG5jb25zdCBNRUFTVVJFX05BTUUgPSAnbmFtZSc7XG5jb25zdCBNRUFTVVJFX0RBVEUgPSAnbWVhc3VyZV9kYXRlJztcbmNvbnN0IEFDVE9SUyA9ICdhY3RvcnMnO1xuY29uc3QgQUNUT1JfTkFNRSA9ICduYW1lJztcbmNvbnN0IFNUUlVDVFVSRVMgPSAnc3RydWN0dXJlcyc7XG5jb25zdCBTVFJVQ1RVUkVTX1RJVExFID0gJ3RpdGxlJztcbmNvbnN0IFNUUlVDVFVSRVNfREVTQ1JJUFRJT04gPSAnZGVzY3JpcHRpb24nO1xuY29uc3QgU1RSVUNUVVJFU19MQVRJVFVERSA9ICdsYXRpdHVkZSc7XG5jb25zdCBTVFJVQ1RVUkVTX0xPTkdJVFVERSA9ICdsb25naXR1ZGUnO1xuY29uc3QgU1RSVUNUVVJFU19DT0xPUiA9ICdzdHJ1Y3R1cmVfY29sb3InO1xuY29uc3QgU1RSVUNUVVJFU19MQVQgPSAnbGF0JztcbmNvbnN0IFNUUlVDVFVSRVNfTE5HID0gJ2xuZyc7XG5jb25zdCBTVFJVQ1RVUkVTX1NIQVBFID0gJ3NoYXBlJztcbmNvbnN0IFNUUlVDVFVSRVNfUE9JTlQgPSAnUG9pbnQnO1xuY29uc3QgU1RSVUNUVVJFU19QT0xZR09OID0gJ1BvbHlnb24nO1xuY29uc3QgU1RSVUNUVVJFU19QT0xZTElORSA9ICdQb2x5bGluZSc7XG5jb25zdCBTVFJVQ1RVUkVTX0NPT1JESU5BVEVTID0gJ2Nvb3JkaW5hdGVzJztcbmNvbnN0IENPTVBPTkVOVF9UWVBFID0gJ2NvbXBvbmVudF90eXBlJztcbmNvbnN0IENPTVBPTkVOVF9USVRMRSA9ICdjb21wb25lbnRfdGl0bGUnO1xuY29uc3QgQ09NUE9ORU5UX0ZVTkRJTkcgPSAnZnVuZGluZyc7XG5jb25zdCBDT01QT05FTlRfREVTQ1JJUFRJT04gPSAnZGVzY3JpcHRpb24nO1xuY29uc3QgQ09NUE9ORU5UX09SR0FOSVpBVElPTiA9ICdjb21wb25lbnRfb3JnYW5pemF0aW9uJztcbmNvbnN0IEZVTkRJTkdfQU1PVU5UX0lEID0gJ2FtcF9mdW5kaW5nX2Ftb3VudF9pZCc7XG5jb25zdCBFWFRSQV9JTkZPID0gJ2V4dHJhX2luZm8nO1xuY29uc3QgVkFMVUUgPSAndmFsdWUnO1xuY29uc3QgQUNST05ZTSA9ICdhY3JvbnltJztcbmNvbnN0IFRZUEVfT0ZfQ09PUEVSQVRJT04gPSAndHlwZV9vZl9jb29wZXJhdGlvbic7XG5jb25zdCBBTk5VQUxfUFJPSkVDVF9CVURHRVRfSUQgPSAnYW5udWFsX3Byb2plY3RfYnVkZ2V0X2lkJztcbmNvbnN0IFRZUEUgPSAndHlwZSc7XG5jb25zdCBZRUFSID0gJ3llYXInO1xuY29uc3QgR1JPVVBfVkVSU0lPTkVEX0ZVTkRJTkcgPSAnZ3JvdXBfdmVyc2lvbmVkX2Z1bmRpbmcnO1xuY29uc3QgQUNUSVZFX0xJU1QgPSAnYWN0aXZlX2xpc3QnO1xuY29uc3QgQUNUSVZFID0gJ2FjdGl2ZSc7XG5jb25zdCBERUxFR0FURURfQ09PUEVSQVRJT04gPSAnZGVsZWdhdGVkX2Nvb3BlcmF0aW9uJztcbmNvbnN0IERFTEVHQVRFRF9QQVJUTkVSID0gJ2RlbGVnYXRlZF9wYXJ0bmVyJztcbmNvbnN0IEZJTkFOQ0lOR19JRCA9ICdmaW5hbmNpbmdfaWQnO1xuY29uc3QgRElTQlVSU0VNRU5UX09SREVSX0lEID0gJ2Rpc2J1cnNlbWVudF9vcmRlcl9pZCc7XG5jb25zdCBQTEVER0UgPSAncGxlZGdlJztcbmNvbnN0IENBUElUQUxfU1BFTkRJTkdfUEVSQ0VOVEFHRSA9ICdjYXBpdGFsX3NwZW5kaW5nX3BlcmNlbnRhZ2UnO1xuY29uc3QgUkVQT1JUSU5HX0RBVEUgPSAncmVwb3J0aW5nX2RhdGUnO1xuY29uc3QgUkVDSVBJRU5UX1JPTEUgPSAncmVjaXBpZW50X3JvbGUnO1xuY29uc3QgUkVDSVBJRU5UX09SR0FOSVpBVElPTiA9ICdyZWNpcGllbnRfb3JnYW5pemF0aW9uJztcbmNvbnN0IFRFTVBPUkFMX0lEID0gJ190ZW1wb3JhbF9pZCc7XG5jb25zdCBNSU5JU1RSWV9DT0RFID0gJ21pbmlzdHJ5X2NvZGUnO1xuY29uc3QgUFJPSkVDVF9DT0RFID0gJ3Byb2plY3RfY29kZSc7XG5jb25zdCBGWSA9ICdmeSc7XG5jb25zdCBJTkRJUkVDVF9PTl9CVURHRVQgPSAnaW5kaXJlY3Rfb25fYnVkZ2V0JztcbmNvbnN0IElNUExFTUVOVEFUSU9OX0xFVkVMU19FWFRSQV9JTkZPID0gJ2ltcGxlbWVudGF0aW9uLWxldmVscyc7XG5jb25zdCBJTVBMRU1FTlRBVElPTl9MT0NBVElPTl9FWFRSQV9JTkZPID0gJ2ltcGxlbWVudGF0aW9uX2xvY2F0aW9uX25hbWUnO1xuY29uc3QgRE9OT1JfQ09OVEFDVCA9ICdkb25vcl9jb250YWN0X2luZm9ybWF0aW9uJztcbmNvbnN0IFBST0pFQ1RfQ09PUkRJTkFUT1JfQ09OVEFDVCA9ICdwcm9qZWN0X2Nvb3JkaW5hdG9yX2NvbnRhY3RfaW5mb3JtYXRpb24nO1xuY29uc3QgU0VDVE9SX01JTklTVFJZX0NPTlRBQ1QgPSAnc2VjdG9yX21pbmlzdHJ5X2NvbnRhY3RfaW5mb3JtYXRpb24nO1xuY29uc3QgTU9GRURfQ09OVEFDVCA9ICdtb2ZlZF9jb250YWN0X2luZm9ybWF0aW9uJztcbmNvbnN0IElNUExFTUVOVElOR19FWEVDVVRJTkdfQUdFTkNZX0NPTlRBQ1QgPSAnaW1wbGVtZW50aW5nL2V4ZWN1dGluZ19hZ2VuY3lfY29udGFjdF9pbmZvcm1hdGlvbic7XG5jb25zdCBDT05UQUNUID0gJ2NvbnRhY3QnO1xuY29uc3QgT1JHQU5JWkFUSU9OX0dST1VQID0gJ29yZ2FuaXphdGlvbl9ncm91cCc7XG5jb25zdCBGSVhFRF9FWENIQU5HRV9SQVRFID0gJ2ZpeGVkX2V4Y2hhbmdlX3JhdGUnO1xuY29uc3QgUFJJTUFSWV9DT05UQUNUID0gJ21hcmtfYXNfcHJpbWFyeSc7XG5jb25zdCBBQ1RJVklUWV9ET0NVTUVOVFMgPSAnYWN0aXZpdHlfZG9jdW1lbnRzJztcbmNvbnN0IERPQ1VNRU5UX1RZUEUgPSAnZG9jdW1lbnRfdHlwZSc7XG5jb25zdCBJU08yID0gJ2lzbzInO1xuY29uc3QgTVRFRl9QUk9KRUNUSU9OUyA9ICdtdGVmX3Byb2plY3Rpb25zJztcbmNvbnN0IFBST0pFQ1RJT04gPSAncHJvamVjdGlvbic7XG5jb25zdCBQSVBFTElORSA9ICdwaXBlbGluZSc7XG5jb25zdCBQUk9KRUNUSU9OX0RBVEUgPSAncHJvamVjdGlvbl9kYXRlJztcblxuLy8gQWN0aXZpdHkgbGFiZWxzICh1c3VhbGx5IHRob3NlIHRoYXQgZG9uJ3QgY29tZSBhcyBwYXJ0IG9mIEZpZWxkcyBEZWYgRVApXG5jb25zdCBTQU1FX0FTX1BST1BPU0VEX1NUQVJUX0RBVEVfTEFCRUwgPSAnU2FtZSBhcyBQcm9wb3NlZCBTdGFydCBEYXRlJztcbmNvbnN0IFNBTUVfQVNfUFJPUE9TRURfQVBQUk9WQUxfREFURV9MQUJFTCA9ICdTYW1lIGFzIFByb3Bvc2VkIEFwcHJvdmFsIERhdGUnO1xuXG4vLyBBY3Rpdml0eSB2YWxpZGF0aW9uIHJ1bGVzXG5jb25zdCBERVBFTkRFTkNZX0lNUExFTUVOVEFUSU9OX0xFVkVMX1BSRVNFTlQgPSAnaW1wbGVtZW50YXRpb25fbGV2ZWxfcHJlc2VudCc7XG5jb25zdCBERVBFTkRFTkNZX0lNUExFTUVOVEFUSU9OX0xFVkVMX1ZBTElEID0gJ2ltcGxlbWVudGF0aW9uX2xldmVsX3ZhbGlkJztcbmNvbnN0IERFUEVOREVOQ1lfSU1QTEVNRU5UQVRJT05fTE9DQVRJT05fUFJFU0VOVCA9ICdpbXBsZW1lbnRhdGlvbl9sb2NhdGlvbl9wcmVzZW50JztcbmNvbnN0IERFUEVOREVOQ1lfSU1QTEVNRU5UQVRJT05fTE9DQVRJT05fVkFMSUQgPSAnaW1wbGVtZW50YXRpb25fbG9jYXRpb25fdmFsaWQnO1xuY29uc3QgREVQRU5ERU5DWV9QUk9KRUNUX0NPREVfT05fQlVER0VUID0gJ3Byb2plY3RfY29kZV9vbl9idWRnZXQnO1xuY29uc3QgREVQRU5ERU5DWV9PTl9CVURHRVQgPSAnb25fYnVkZ2V0JztcbmNvbnN0IERFUEVOREVOQ1lfVFJBTlNBQ1RJT05fUFJFU0VOVCA9ICd0cmFuc2FjdGlvbl9wcmVzZW50JztcbmNvbnN0IERFUEVOREVOQ1lfQ09NUE9ORU5UX0ZVTkRJTkdfT1JHX1ZBTElEID0gJ29yZ2FuaXphdGlvbl9wcmVzZW50JztcblxuLyoqIElEcyBmb3IgQVAgc2VjdGlvbnMgKiovXG5jb25zdCBBUF9TRUNUSU9OX0lEUyA9XG4gIFt7IGtleTogJ0FQSWRlbnRpZmljYXRpb24nLCBoYXNoOiAnI0FQSWRlbnRpZmljYXRpb24nLCB2YWx1ZTogJ0lkZW50aWZpY2F0aW9uJywgZm1QYXRoOiBGTUMuQUNUSVZJVFlfSURFTlRJRklDQVRJT04gfSxcbiAgICB7IGtleTogJ0FQSW50ZXJuYWxJZHMnLCBoYXNoOiAnI0FQSW50ZXJuYWxJZHMnLCB2YWx1ZTogJ0FnZW5jeSBJbnRlcm5hbCBJRHMnLCBzZWN0aW9uUGF0aDogQUNUSVZJVFlfSU5URVJOQUxfSURTIH0sXG4gICAgeyBrZXk6ICdBUFBsYW5uaW5nJywgaGFzaDogJyNBUFBsYW5uaW5nJywgdmFsdWU6ICdQbGFubmluZycsIGZtUGF0aDogRk1DLkFDVElWSVRZX1BMQU5OSU5HIH0sXG4gICAgeyBrZXk6ICdBUExvY2F0aW9uJywgaGFzaDogJyNBUExvY2F0aW9uJywgdmFsdWU6ICdMb2NhdGlvbicsIHNlY3Rpb25QYXRoOiBMT0NBVElPTlMgfSxcbiAgICB7IGtleTogJ0FQUHJvZ3JhbScsIGhhc2g6ICcjQVBQcm9ncmFtJywgdmFsdWU6ICdQcm9ncmFtJywgZm1QYXRoOiBGTUMuQUNUSVZJVFlfUFJPR1JBTSB9LFxuICAgIHsga2V5OiAnQVBTZWN0b3InLCBoYXNoOiAnI0FQU2VjdG9yJywgdmFsdWU6ICdTZWN0b3JzJywgZm1QYXRoOiBGTUMuQUNUSVZJVFlfU0VDVE9SUyB9LFxuICAgIHtcbiAgICAgIGtleTogJ0FQRnVuZGluZ1NvdXJjZXMnLFxuICAgICAgaGFzaDogJyNBUEZ1bmRpbmdTb3VyY2VzJyxcbiAgICAgIHZhbHVlOiAnRnVuZGluZyBTb3VyY2VzJyxcbiAgICAgIHNlY3Rpb25QYXRoOiBUT1RBTF9OVU1CRVJfT0ZfRlVORElOR19TT1VSQ0VTXG4gICAgfSxcbiAgICB7IGtleTogJ0FQRnVuZGluZycsIGhhc2g6ICcjQVBGdW5kaW5nJywgdmFsdWU6ICdGdW5kaW5nJywgc2VjdGlvblBhdGg6IEZVTkRJTkdTIH0sXG4gICAge1xuICAgICAga2V5OiAnQVBSZWxhdGVkT3JnYW5pemF0aW9ucycsXG4gICAgICBoYXNoOiAnI0FQUmVsYXRlZE9yZ2FuaXphdGlvbnMnLFxuICAgICAgdmFsdWU6ICdSZWxhdGVkIE9yZ2FuaXphdGlvbnMnLFxuICAgICAgZm1QYXRoOiBGTUMuQUNUSVZJVFlfT1JHQU5JWkFUSU9OU1xuICAgIH0sXG4gICAgeyBrZXk6ICdBUElzc3VlcycsIGhhc2g6ICcjQVBJc3N1ZXMnLCB2YWx1ZTogJ0lzc3VlcycsIHNlY3Rpb25QYXRoOiBJU1NVRVMgfSxcbiAgICB7IGtleTogJ0FQQ29udGFjdCcsIGhhc2g6ICcjQVBDb250YWN0JywgdmFsdWU6ICdDb250YWN0IEluZm9ybWF0aW9uJywgZm1QYXRoOiBGTUMuQUNUSVZJVFlfQ09OVEFDVCB9LFxuICAgIHsga2V5OiAnQVBTdHJ1Y3R1cmVzJywgaGFzaDogJyNBUFN0cnVjdHVyZXMnLCB2YWx1ZTogJ1N0cnVjdHVyZXMnLCBzZWN0aW9uUGF0aDogU1RSVUNUVVJFUyB9LFxuICAgIHsga2V5OiAnQVBEb2N1bWVudCcsIGhhc2g6ICcjQVBEb2N1bWVudCcsIHZhbHVlOiAnUmVsYXRlZCBEb2N1bWVudHMnLCBzZWN0aW9uUGF0aDogQUNUSVZJVFlfRE9DVU1FTlRTIH0sXG4gIF07XG5cbi8qKiBDb2x1bW4gY291bnRzIGZvciBlYWNoIHNlY3Rpb24gKiovXG5jb25zdCBBQ1RJVklUWV9JTlRFUk5BTF9JRFNfQ09MUyA9IDM7XG5jb25zdCBBQ1RJVklUWV9QTEFOTklOR19DT0xTID0gMjtcbmNvbnN0IEFDVElWSVRZX0xPQ0FUSU9OX0NPTFMgPSAzO1xuY29uc3QgQUNUSVZJVFlfRlVORElOR19DT0xTID0gMjtcbmNvbnN0IEFDVElWSVRZX0NPTlRBQ1RfQ09MUyA9IDI7XG5jb25zdCBBUF9GVU5ESU5HU19UQUJMRV9DT0xTID0gNDtcblxuY29uc3QgTVVMVElfU0VMRUNUX01JTl9TSVpFID0gODtcbmNvbnN0IE1VTFRJX1NFTEVDVF9NQVhfU0laRSA9IDg7XG5cbi8vIFRPRE86IG1vdmUgdGhlc2UgZnVuY3Rpb25zIHRvIGFuIFV0aWxzIGNsYXNzLlxuY29uc3QgdG9GaWVsZE5hbWVzID0gZnVuY3Rpb24gKGxpc3RPZk5hbWVzKSB7XG4gIHJldHVybiBsaXN0T2ZOYW1lcy5tYXAobmFtZSA9PiB0b0ZpZWxkTmFtZShuYW1lKSk7XG59O1xuXG4vKipcbiAqIENvbnZlcnRzIHRoZSBvcmlnaW5hbCBub24tdHJhbnNsYXRlZCBsYWJlbCB0byBpbnRlcm5hbCBmaWVsZCBuYW1lXG4gKiBAcGFyYW0gbmFtZVxuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5jb25zdCB0b0ZpZWxkTmFtZSA9IGZ1bmN0aW9uIChuYW1lOiBzdHJpbmcpIHtcbiAgcmV0dXJuIG5hbWUudG9Mb3dlckNhc2UoKS5yZXBsYWNlKCcgJywgJ18nKTtcbn07XG5cbi8qKlxuICogQ29udmVydHMgdGhlIGludGVybmFsIGZpZWxkIG5hbWUgdG8gdGhlIE9yaWdpbmFsIG5vbi10cmFuc2xhdGVkIGxhYmVsXG4gKiBAcGFyYW0gZmllbGROYW1lXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cbmNvbnN0IHRvT3JpZ2luYWxMYWJlbCA9IGZ1bmN0aW9uIChmaWVsZE5hbWU6IHN0cmluZykge1xuICByZXR1cm4gVUlVdGlscy5jYXBpdGFsaXplKGZpZWxkTmFtZS5yZXBsYWNlKCdfJywgJyAnKSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBPYmplY3QuZnJlZXplKHtcbiAgQUNUSVZJVFlfQlVER0VULFxuICBBQ1RJVklUWV9TVEFUVVMsXG4gIFNUQVRVU19SRUFTT04sXG4gIEZJTkFOQ0lBTF9JTlNUUlVNRU5ULFxuICBUWVBFX09GX0lNUExFTUVOVEFUSU9OLFxuICBPQkpFQ1RJVkUsXG4gIFJFU1VMVFMsXG4gIEJVREdFVF9DT0RFX1BST0pFQ1RfSUQsXG4gIEFDVFVBTF9BUFBST1ZBTF9EQVRFLFxuICBGVU5ESU5HUyxcbiAgRlVORElOR19ET05PUl9PUkdfSUQsXG4gIElTX0RSQUZULFxuICBPUkdfUk9MRV9PUkdfSUQsXG4gIEFERElUSU9OQUxfSU5GTyxcbiAgUFJJTUFSWV9TRUNUT1JTLFxuICBTRUNPTkRBUllfU0VDVE9SUyxcbiAgVEVSVElBUllfU0VDVE9SUyxcbiAgVEFHX1NFQ1RPUlMsXG4gIFNFQ1RPUixcbiAgU0VDVE9SX1BFUkNFTlRBR0UsXG4gIEZJTkFOQ0lOR19JTlNUUlVNRU5ULFxuICBNT0RBTElUSUVTLFxuICBMSU5FX01JTklTVFJZX1JBTkssXG4gIEdPVkVSTk1FTlRfQUdSRUVNRU5UX05VTUJFUixcbiAgRlVORElOR19TVEFUVVMsXG4gIExPQ0FUSU9OUyxcbiAgTE9DQVRJT04sXG4gIExPQ0FUSU9OX1BFUkNFTlRBR0UsXG4gIElNUExFTUVOVEFUSU9OX0xPQ0FUSU9OLFxuICBJTVBMRU1FTlRBVElPTl9MRVZFTCxcbiAgQVBQUk9WQUxfU1RBVFVTLFxuICBBUFBST1ZFRF9CWSxcbiAgQVBQUk9WQUxfREFURSxcbiAgVFlQRV9PRl9BU1NJU1RBTkNFLFxuICBFWFBFTkRJVFVSRV9DTEFTUyxcbiAgRlVORElOR19ERVRBSUxTLFxuICBNT0RFX09GX1BBWU1FTlQsXG4gIEZVTkRJTkdfQ0xBU1NJRklDQVRJT05fREFURSxcbiAgQUdSRUVNRU5ULFxuICBET05PUl9PQkpFQ1RJVkUsXG4gIENPTkRJVElPTlMsXG4gIEFHUkVFTUVOVF9DT0RFLFxuICBBR1JFRU1FTlRfVElUTEUsXG4gIFBST0pFQ1RfQ0FURUdPUlksXG4gIFBST0pFQ1RfSU1QTEVNRU5USU5HX1VOSVQsXG4gIE9SR0FOSVpBVElPTixcbiAgUEVSQ0VOVEFHRSxcbiAgQU1QX09SR0FOSVpBVElPTl9ST0xFX0lELFxuICBST0xFLFxuICBFWEVDVVRJTkdfQUdFTkNZLFxuICBDT05UUkFDVElOR19BR0VOQ1ksXG4gIEJFTkVGSUNJQVJZX0FHRU5DWSxcbiAgSU1QTEVNRU5USU5HX0FHRU5DWSxcbiAgUkVTUE9OU0lCTEVfT1JHQU5JWkFUSU9OLFxuICBET05PUl9PUkdBTklaQVRJT04sXG4gIFJFR0lPTkFMX0dST1VQLFxuICBTRUNUT1JfR1JPVVAsXG4gIEJVREdFVFMsXG4gIEJVREdFVF9DT0RFLFxuICBCVURHRVRfT1JHQU5JWkFUSU9OX0NPREUsXG4gIEFSQ0hJVkVELFxuICBUUkFOU0FDVElPTl9EQVRFLFxuICBUUkFOU0FDVElPTl9UWVBFLFxuICBDT01NSVRNRU5UUyxcbiAgRElTQlVSU0VNRU5UUyxcbiAgRVhQRU5ESVRVUkVTLFxuICBFU1RJTUFURURfRElTQlVSU0VNRU5UUyxcbiAgVFJBTlNBQ1RJT05fQU1PVU5ULFxuICBBREpVU1RNRU5UX1RZUEUsXG4gIEFDVFVBTF9TVEFSVF9EQVRFLFxuICBQUk9QT1NFRF9TVEFSVF9EQVRFLFxuICBBQ1RVQUxfQ09NUExFVElPTl9EQVRFLFxuICBDT05UUkFDVElOR19EQVRFLFxuICBESVNCVVJTRU1FTlRfREFURSxcbiAgUFJPUE9TRURfQVBQUk9WQUxfREFURSxcbiAgT1JJR0lOQUxfQ09NUExFVElPTl9EQVRFLFxuICBQUk9QT1NFRF9DT01QTEVUSU9OX0RBVEUsXG4gIEZJTkFMX0RBVEVfRk9SX0RJU0JVUlNFTUVOVFMsXG4gIEZJTkFMX0RBVEVfRk9SX0NPTlRSQUNUSU5HLFxuICBFRkZFQ1RJVkVfRlVORElOR19EQVRFLFxuICBGVU5ESU5HX0NMT1NJTkdfREFURSxcbiAgUkFUSUZJQ0FUSU9OX0RBVEUsXG4gIE1BVFVSSVRZLFxuICBMQVNUX0FVRElUX0RBVEUsXG4gIFNJR05BVFVSRV9EQVRFLFxuICBIVU1BTklUQVJJQU5fQUlELFxuICBESVNBU1RFUl9SRVNQT05TRSxcbiAgUFJPR1JBTSxcbiAgUFJPR1JBTV9QRVJDRU5UQUdFLFxuICBQUk9HUkFNX1NFVFRJTkdTLFxuICBOQVRJT05BTF9QTEFOX09CSkVDVElWRSxcbiAgUFJJTUFSWV9QUk9HUkFNUyxcbiAgU0VDT05EQVJZX1BST0dSQU1TLFxuICBURVJUSUFSX1BST0dSQU1TLFxuICBHT1ZFUk5NRU5UX0FQUFJPVkFMX1BST0NFRFVSRVMsXG4gIEpPSU5UX0NSSVRFUklBLFxuICBURUFNLFxuICBSRUpFQ1RFRF9JRCxcbiAgSU5URVJOQUxfSUQsXG4gIEFNUF9JRCxcbiAgUFJPSkVDVF9USVRMRSxcbiAgREVTQ1JJUFRJT04sXG4gIE1PRElGSUVEX0JZLFxuICBNT0RJRklFRF9PTixcbiAgQ1JFQVRFRF9CWSxcbiAgQ1JFQVRFRF9PTixcbiAgTEFTVF9JTVBPUlRFRF9CWSxcbiAgQ0xJRU5UX0NIQU5HRV9JRCxcbiAgQ0xJRU5UX0NSRUFURURfT04sXG4gIENMSUVOVF9VUERBVEVEX09OLFxuICBJU19QVVNIRUQsXG4gIEFDVElWSVRZX0dST1VQLFxuICBWRVJTSU9OLFxuICBQUk9KRUNUX0NPTU1FTlRTLFxuICBMRVNTT05TX0xFQVJORUQsXG4gIFBST0pFQ1RfSU1QQUNULFxuICBBQ1RJVklUWV9TVU1NQVJZLFxuICBDT05ESVRJT05BTElUSUVTLFxuICBQUk9KRUNUX01BTkFHRU1FTlQsXG4gIEFfQ19DSEFQVEVSLFxuICBDUklTX05VTUJFUixcbiAgSUFUSV9JREVOVElGSUVSLFxuICBBQ1RJVklUWV9JTlRFUk5BTF9JRFMsXG4gIEhJRVJBUkNISUNBTF9WQUxVRSxcbiAgSElFUkFSQ0hJQ0FMX1ZBTFVFX1BBUlRTLFxuICBISUVSQVJDSElDQUxfVkFMVUVfREVQVEgsXG4gIFBQQ19BTU9VTlQsXG4gIFJQQ19BTU9VTlQsXG4gIFBQQ19BTk5VQUxfQlVER0VUUyxcbiAgQU1PVU5ULFxuICBDVVJSRU5DWSxcbiAgRlVORElOR19EQVRFLFxuICBDT01QT05FTlRTLFxuICBUT1RBTF9OVU1CRVJfT0ZfRlVORElOR19TT1VSQ0VTLFxuICBTT1VSQ0VfUk9MRSxcbiAgQU1QX0ZVTkRJTkdfSUQsXG4gIElTU1VFUyxcbiAgSVNTVUVfREFURSxcbiAgSVNTVUVfTkFNRSxcbiAgTUVBU1VSRVMsXG4gIE1FQVNVUkVfTkFNRSxcbiAgTUVBU1VSRV9EQVRFLFxuICBBQ1RPUlMsXG4gIEFDVE9SX05BTUUsXG4gIFNUUlVDVFVSRVMsXG4gIFNUUlVDVFVSRVNfVElUTEUsXG4gIFNUUlVDVFVSRVNfREVTQ1JJUFRJT04sXG4gIFNUUlVDVFVSRVNfTEFUSVRVREUsXG4gIFNUUlVDVFVSRVNfTE9OR0lUVURFLFxuICBTVFJVQ1RVUkVTX0NPTE9SLFxuICBTVFJVQ1RVUkVTX0xBVCxcbiAgU1RSVUNUVVJFU19MTkcsXG4gIFNUUlVDVFVSRVNfU0hBUEUsXG4gIFNUUlVDVFVSRVNfUE9JTlQsXG4gIFNUUlVDVFVSRVNfUE9MWUdPTixcbiAgU1RSVUNUVVJFU19QT0xZTElORSxcbiAgU1RSVUNUVVJFU19DT09SRElOQVRFUyxcbiAgQ09NUE9ORU5UX1RZUEUsXG4gIENPTVBPTkVOVF9USVRMRSxcbiAgQ09NUE9ORU5UX0ZVTkRJTkcsXG4gIENPTVBPTkVOVF9ERVNDUklQVElPTixcbiAgQ09NUE9ORU5UX09SR0FOSVpBVElPTixcbiAgRlVORElOR19BTU9VTlRfSUQsXG4gIEVYVFJBX0lORk8sXG4gIFZBTFVFLFxuICBBQ1JPTllNLFxuICBUWVBFX09GX0NPT1BFUkFUSU9OLFxuICBBTk5VQUxfUFJPSkVDVF9CVURHRVRfSUQsXG4gIFRZUEUsXG4gIFlFQVIsXG4gIEdST1VQX1ZFUlNJT05FRF9GVU5ESU5HLFxuICBBQ1RJVkVfTElTVCxcbiAgQUNUSVZFLFxuICBERUxFR0FURURfQ09PUEVSQVRJT04sXG4gIERFTEVHQVRFRF9QQVJUTkVSLFxuICBGSU5BTkNJTkdfSUQsXG4gIERJU0JVUlNFTUVOVF9PUkRFUl9JRCxcbiAgUExFREdFLFxuICBDQVBJVEFMX1NQRU5ESU5HX1BFUkNFTlRBR0UsXG4gIFJFUE9SVElOR19EQVRFLFxuICBSRUNJUElFTlRfUk9MRSxcbiAgUkVDSVBJRU5UX09SR0FOSVpBVElPTixcbiAgVEVNUE9SQUxfSUQsXG4gIE1JTklTVFJZX0NPREUsXG4gIFBST0pFQ1RfQ09ERSxcbiAgRlksXG4gIElORElSRUNUX09OX0JVREdFVCxcbiAgSU1QTEVNRU5UQVRJT05fTEVWRUxTX0VYVFJBX0lORk8sXG4gIElNUExFTUVOVEFUSU9OX0xPQ0FUSU9OX0VYVFJBX0lORk8sXG4gIERPTk9SX0NPTlRBQ1QsXG4gIFBST0pFQ1RfQ09PUkRJTkFUT1JfQ09OVEFDVCxcbiAgU0VDVE9SX01JTklTVFJZX0NPTlRBQ1QsXG4gIE1PRkVEX0NPTlRBQ1QsXG4gIElNUExFTUVOVElOR19FWEVDVVRJTkdfQUdFTkNZX0NPTlRBQ1QsXG4gIENPTlRBQ1QsXG4gIE9SR0FOSVpBVElPTl9HUk9VUCxcbiAgRklYRURfRVhDSEFOR0VfUkFURSxcbiAgUFJJTUFSWV9DT05UQUNULFxuICBBQ1RJVklUWV9ET0NVTUVOVFMsXG4gIERPQ1VNRU5UX1RZUEUsXG4gIElTTzIsXG4gIE1URUZfUFJPSkVDVElPTlMsXG4gIFBST0pFQ1RJT04sXG4gIFBJUEVMSU5FLFxuICBQUk9KRUNUSU9OX0RBVEUsXG4gIFNBTUVfQVNfUFJPUE9TRURfU1RBUlRfREFURV9MQUJFTCxcbiAgU0FNRV9BU19QUk9QT1NFRF9BUFBST1ZBTF9EQVRFX0xBQkVMLFxuICBERVBFTkRFTkNZX0lNUExFTUVOVEFUSU9OX0xFVkVMX1BSRVNFTlQsXG4gIERFUEVOREVOQ1lfSU1QTEVNRU5UQVRJT05fTEVWRUxfVkFMSUQsXG4gIERFUEVOREVOQ1lfSU1QTEVNRU5UQVRJT05fTE9DQVRJT05fUFJFU0VOVCxcbiAgREVQRU5ERU5DWV9JTVBMRU1FTlRBVElPTl9MT0NBVElPTl9WQUxJRCxcbiAgREVQRU5ERU5DWV9QUk9KRUNUX0NPREVfT05fQlVER0VULFxuICBERVBFTkRFTkNZX09OX0JVREdFVCxcbiAgREVQRU5ERU5DWV9UUkFOU0FDVElPTl9QUkVTRU5ULFxuICBERVBFTkRFTkNZX0NPTVBPTkVOVF9GVU5ESU5HX09SR19WQUxJRCxcbiAgQVBfU0VDVElPTl9JRFMsXG4gIEFDVElWSVRZX0lOVEVSTkFMX0lEU19DT0xTLFxuICBBQ1RJVklUWV9QTEFOTklOR19DT0xTLFxuICBBQ1RJVklUWV9MT0NBVElPTl9DT0xTLFxuICBBQ1RJVklUWV9GVU5ESU5HX0NPTFMsXG4gIEFDVElWSVRZX0NPTlRBQ1RfQ09MUyxcbiAgQVBfRlVORElOR1NfVEFCTEVfQ09MUyxcbiAgTVVMVElfU0VMRUNUX01JTl9TSVpFLFxuICBNVUxUSV9TRUxFQ1RfTUFYX1NJWkUsXG4gIHRvRmllbGROYW1lcyxcbiAgdG9GaWVsZE5hbWUsXG4gIHRvT3JpZ2luYWxMYWJlbCxcbn0pO1xuIiwiY29uc3QgTk9USUZJQ0FUSU9OX09SSUdJTl9BUElfU0VDVVJJVFkgPSAnTk9USUZJQ0FUSU9OX09SSUdJTl9BUElfU0VDVVJJVFknO1xuY29uc3QgTk9USUZJQ0FUSU9OX09SSUdJTl9BUElfTkVUV09SSyA9ICdOT1RJRklDQVRJT05fT1JJR0lOX0FQSV9ORVRXT1JLJztcbmNvbnN0IE5PVElGSUNBVElPTl9PUklHSU5fQVBJX1NZTkNVUCA9ICdOT1RJRklDQVRJT05fT1JJR0lOX0FQSV9TWU5DVVAnO1xuY29uc3QgTk9USUZJQ0FUSU9OX09SSUdJTl9BUElfR0VORVJBTCA9ICdOT1RJRklDQVRJT05fT1JJR0lOX0FQSV9HRU5FUkFMJztcbmNvbnN0IE5PVElGSUNBVElPTl9PUklHSU5fREFUQUJBU0UgPSAnTk9USUZJQ0FUSU9OX09SSUdJTl9EQVRBQkFTRSc7XG5jb25zdCBOT1RJRklDQVRJT05fT1JJR0lOX0FVVEhFTlRJQ0FUSU9OID0gJ05PVElGSUNBVElPTl9PUklHSU5fQVVUSEVOVElDQVRJT04nO1xuY29uc3QgTk9USUZJQ0FUSU9OX09SSUdJTl9XT1JLU1BBQ0VfRklMVEVSID0gJ05PVElGSUNBVElPTl9PUklHSU5fV09SS1NQQUNFX0ZJTFRFUic7XG5jb25zdCBOT1RJRklDQVRJT05fT1JJR0lOX1dPUktTUEFDRSA9ICdOT1RJRklDQVRJT05fT1JJR0lOX1dPUktTUEFDRSc7XG5jb25zdCBOT1RJRklDQVRJT05fT1JJR0lOX1NZTkNVUF9QUk9DRVNTID0gJ05PVElGSUNBVElPTl9PUklHSU5fU1lOQ1VQX1BST0NFU1MnO1xuY29uc3QgTk9USUZJQ0FUSU9OX09SSUdJTl9DVVJSRU5DWV9NQU5BR0VSID0gJ05PVElGSUNBVElPTl9PUklHSU5fQ1VSUkVOQ1lfTUFOQUdFUic7XG5jb25zdCBOT1RJRklDQVRJT05fT1JJR0lOX0RBVEVTID0gJ05PVElGSUNBVElPTl9PUklHSU5fREFURVMnO1xuY29uc3QgTk9USUZJQ0FUSU9OX09SSUdJTl9BQ1RJVklUWSA9ICdOT1RJRklDQVRJT05fT1JJR0lOX0FDVElWSVRZJztcbmNvbnN0IE5PVElGSUNBVElPTl9PUklHSU5fUkVTT1VSQ0UgPSAnTk9USUZJQ0FUSU9OX09SSUdJTl9SRVNPVVJDRSc7XG5jb25zdCBOT1RJRklDQVRJT05fT1JJR0lOX0kxOE5FWFQgPSAnTk9USUZJQ0FUSU9OX09SSUdJTl9JMThORVhUJztcbmNvbnN0IE5PVElGSUNBVElPTl9PUklHSU5fVVBEQVRFX0NIRUNLID0gJ05PVElGSUNBVElPTl9PUklHSU5fVVBEQVRFX0NIRUNLJztcbmNvbnN0IE5PVElGSUNBVElPTl9PUklHSU5fVVBEQVRFID0gJ05PVElGSUNBVElPTl9PUklHSU5fVVBEQVRFJztcbmNvbnN0IE5PVElGSUNBVElPTl9PUklHSU5fU0VUVVAgPSAnTk9USUZJQ0FUSU9OX09SSUdJTl9TRVRVUCc7XG5jb25zdCBOT1RJRklDQVRJT05fT1JJR0lOX1NFVFRJTkdTID0gJ05PVElGSUNBVElPTl9PUklHSU5fU0VUVElOR1MnO1xuXG5jb25zdCBOT1RJRklDQVRJT05fU0VWRVJJVFlfV0FSTklORyA9ICdOT1RJRklDQVRJT05fU0VWRVJJVFlfV0FSTklORyc7XG5jb25zdCBOT1RJRklDQVRJT05fU0VWRVJJVFlfSU5GTyA9ICdOT1RJRklDQVRJT05fU0VWRVJJVFlfSU5GTyc7XG5jb25zdCBOT1RJRklDQVRJT05fU0VWRVJJVFlfRVJST1IgPSAnTk9USUZJQ0FUSU9OX1NFVkVSSVRZX0VSUk9SJztcblxuY29uc3QgTk9USUZJQ0FUSU9OX0VSUk9SX0xFVkVMX01JTk9SID0gJ05PVElGSUNBVElPTl9FUlJPUl9MRVZFTF9NSU5PUic7XG5jb25zdCBOT1RJRklDQVRJT05fRVJST1JfTEVWRUxfQkxPQ0tFUiA9ICdOT1RJRklDQVRJT05fRVJST1JfTEVWRUxfQkxPQ0tFUic7XG5cbmNvbnN0IE5PVElGSUNBVElPTl9PUklHSU5fV1JPTkdfTUVUSE9EX1VTQUdFID0gJ05PVElGSUNBVElPTl9PUklHSU5fV1JPTkdfTUVUSE9EX1VTQUdFJztcblxuY29uc3QgRVJST1JfQ09ERV9OT19DT05ORUNUSVZJVFkgPSAnTk9fQ09OTkVDVElWSVRZJztcbmNvbnN0IEVSUk9SX0NPREVfQUNDRVNTX0RFTklFRCA9ICdBQ0NFU1NfREVOSUVEJztcblxuXG5jb25zdCBNU0dfSU5WQUxJRF9VUkwgPSAnaW52YWxpZFVybCc7XG5jb25zdCBNU0dfVElNRU9VVCA9ICd0aW1lb3V0RXJyb3InO1xuY29uc3QgTVNHX1VOS05PV05fTkVUV09SS19FUlJPUiA9ICd1bmtub3duTmV0d29ya0Vycm9yJztcbmNvbnN0IE1TR19BTVBfVU5SRUFDSEFCTEUgPSAnQU1QVW5yZWFjaGFibGVFcnJvcic7XG5jb25zdCBHRU5FUkFMX0NPTk5FQ1RJT05fRVJST1JTID0gW01TR19JTlZBTElEX1VSTCwgTVNHX1RJTUVPVVQsIE1TR19VTktOT1dOX05FVFdPUktfRVJST1IsIE1TR19BTVBfVU5SRUFDSEFCTEVdO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5mcmVlemUoe1xuICBOT1RJRklDQVRJT05fT1JJR0lOX0FQSV9TRUNVUklUWSxcbiAgTk9USUZJQ0FUSU9OX09SSUdJTl9BUElfTkVUV09SSyxcbiAgTk9USUZJQ0FUSU9OX09SSUdJTl9BUElfU1lOQ1VQLFxuICBOT1RJRklDQVRJT05fT1JJR0lOX0FQSV9HRU5FUkFMLFxuICBOT1RJRklDQVRJT05fT1JJR0lOX0RBVEFCQVNFLFxuICBOT1RJRklDQVRJT05fT1JJR0lOX0FVVEhFTlRJQ0FUSU9OLFxuICBOT1RJRklDQVRJT05fT1JJR0lOX1dPUktTUEFDRV9GSUxURVIsXG4gIE5PVElGSUNBVElPTl9PUklHSU5fV09SS1NQQUNFLFxuICBOT1RJRklDQVRJT05fT1JJR0lOX1NZTkNVUF9QUk9DRVNTLFxuICBOT1RJRklDQVRJT05fT1JJR0lOX0NVUlJFTkNZX01BTkFHRVIsXG4gIE5PVElGSUNBVElPTl9PUklHSU5fREFURVMsXG4gIE5PVElGSUNBVElPTl9PUklHSU5fQUNUSVZJVFksXG4gIE5PVElGSUNBVElPTl9PUklHSU5fUkVTT1VSQ0UsXG4gIE5PVElGSUNBVElPTl9PUklHSU5fSTE4TkVYVCxcbiAgTk9USUZJQ0FUSU9OX09SSUdJTl9VUERBVEVfQ0hFQ0ssXG4gIE5PVElGSUNBVElPTl9PUklHSU5fVVBEQVRFLFxuICBOT1RJRklDQVRJT05fT1JJR0lOX1NFVFVQLFxuICBOT1RJRklDQVRJT05fT1JJR0lOX1NFVFRJTkdTLFxuXG4gIE5PVElGSUNBVElPTl9TRVZFUklUWV9XQVJOSU5HLFxuICBOT1RJRklDQVRJT05fU0VWRVJJVFlfSU5GTyxcbiAgTk9USUZJQ0FUSU9OX1NFVkVSSVRZX0VSUk9SLFxuXG4gIE5PVElGSUNBVElPTl9FUlJPUl9MRVZFTF9NSU5PUixcbiAgTk9USUZJQ0FUSU9OX0VSUk9SX0xFVkVMX0JMT0NLRVIsXG5cbiAgTk9USUZJQ0FUSU9OX09SSUdJTl9XUk9OR19NRVRIT0RfVVNBR0UsXG5cbiAgRVJST1JfQ09ERV9OT19DT05ORUNUSVZJVFksXG4gIEVSUk9SX0NPREVfQUNDRVNTX0RFTklFRCxcblxuXG4gIE1TR19JTlZBTElEX1VSTCxcbiAgTVNHX1RJTUVPVVQsXG4gIE1TR19VTktOT1dOX05FVFdPUktfRVJST1IsXG4gIE1TR19BTVBfVU5SRUFDSEFCTEUsXG4gIEdFTkVSQUxfQ09OTkVDVElPTl9FUlJPUlNcbn0pXG47XG4iLCIvKipcbiAqIEBhdXRob3IgTmFkZWpkYSBNYW5kcmVzY3VcbiAqL1xuXG5pbXBvcnQgQWN0aXZpdHlDb25zdGFudHMgZnJvbSAnLi4vbW9kdWxlcy91dGlsL0FjdGl2aXR5Q29uc3RhbnRzJztcblxuY29uc3QgRE9OT1JfT1JHQU5JWkFUSU9OID0gJ0Rvbm9yIE9yZ2FuaXphdGlvbic7XG5jb25zdCBSRVNQT05TSUJMRV9PUkdBTklaQVRJT04gPSAnUmVzcG9uc2libGUgT3JnYW5pemF0aW9uJztcbmNvbnN0IEVYRUNVVElOR19BR0VOQ1kgPSAnRXhlY3V0aW5nIEFnZW5jeSc7XG5jb25zdCBJTVBMRU1FTlRJTkdfQUdFTkNZID0gJ0ltcGxlbWVudGluZyBBZ2VuY3knO1xuY29uc3QgQkVORUZJQ0lBUllfQUdFTkNZID0gJ0JlbmVmaWNpYXJ5IEFnZW5jeSc7XG5jb25zdCBDT05UUkFDVElOR19BR0VOQ1kgPSAnQ29udHJhY3RpbmcgQWdlbmN5JztcbmNvbnN0IERPTk9SX0FHRU5DWSA9ICdEb25vcic7XG5jb25zdCBSRUdJT05BTF9HUk9VUCA9ICdSZWdpb25hbCBHcm91cCc7XG5jb25zdCBTRUNUT1JfR1JPVVAgPSAnU2VjdG9yIEdyb3VwJztcblxuY29uc3QgT1JHX1JPTEVfTkFNRVMgPSBbRE9OT1JfT1JHQU5JWkFUSU9OLCBSRVNQT05TSUJMRV9PUkdBTklaQVRJT04sIEVYRUNVVElOR19BR0VOQ1ksIElNUExFTUVOVElOR19BR0VOQ1ksXG4gIEJFTkVGSUNJQVJZX0FHRU5DWSwgQ09OVFJBQ1RJTkdfQUdFTkNZLCBSRUdJT05BTF9HUk9VUCwgU0VDVE9SX0dST1VQXTtcblxuY29uc3QgQUNUVUFMID0gJ0FjdHVhbCc7XG5jb25zdCBQTEFOTkVEID0gJ1BsYW5uZWQnO1xuY29uc3QgQ09NTUlUTUVOVFMgPSAnQ29tbWl0bWVudHMnO1xuY29uc3QgRElTQlVSU0VNRU5UUyA9ICdEaXNidXJzZW1lbnRzJztcbmNvbnN0IEVYUEVORElUVVJFUyA9ICdFeHBlbmRpdHVyZXMnO1xuY29uc3QgQUNUVUFMX0NPTU1JVE1FTlRTID0gYCR7QUNUVUFMfSAke0FjdGl2aXR5Q29uc3RhbnRzLkNPTU1JVE1FTlRTfWA7XG5jb25zdCBBQ1RVQUxfRElTQlVSU0VNRU5UUyA9IGAke0FDVFVBTH0gJHtBY3Rpdml0eUNvbnN0YW50cy5ESVNCVVJTRU1FTlRTfWA7XG5jb25zdCBBQ1RVQUxfRVhQRU5ESVRVUkVTID0gYCR7QUNUVUFMfSAke0FjdGl2aXR5Q29uc3RhbnRzLkVYUEVORElUVVJFU31gO1xuY29uc3QgUExBTk5FRF9DT01NSVRNRU5UUyA9IGAke1BMQU5ORUR9ICR7QWN0aXZpdHlDb25zdGFudHMuQ09NTUlUTUVOVFN9YDtcbmNvbnN0IFBMQU5ORURfRElTQlVSU0VNRU5UUyA9IGAke1BMQU5ORUR9ICR7QWN0aXZpdHlDb25zdGFudHMuRElTQlVSU0VNRU5UU31gO1xuY29uc3QgUExBTk5FRF9FWFBFTkRJVFVSRVMgPSBgJHtQTEFOTkVEfSAke0FjdGl2aXR5Q29uc3RhbnRzLkVYUEVORElUVVJFU31gO1xuY29uc3QgVU5BTExPQ0FURURfRElTQlVSU0VNRU5UUyA9ICdVbmFsbG9jYXRlZCBEaXNidXJzZW1lbnRzJztcbmNvbnN0IERFTElWRVJZX1JBVEUgPSAnRGVsaXZlcnkgcmF0ZSc7XG5jb25zdCBNVEVGX1BST0pFQ1RJT05TID0gJ01URUYgUHJvamVjdGlvbnMnO1xuXG5jb25zdCBBREpVU1RNRU5UX1RZUEVTID0gW0FDVFVBTCwgUExBTk5FRF07XG5jb25zdCBBREpVU1RNRU5UX1RZUEVTX0FQX09SREVSID0gW1BMQU5ORUQsIEFDVFVBTF07XG5cbmNvbnN0IE5FV19BQ1RJVklUWV9JRCA9ICcwJztcblxuY29uc3QgUFJPUE9TRURfUFJPSkVDVF9DT1NUID0gJ3BwYyc7XG5jb25zdCBSRVZJU0VEX1BST0pFQ1RfQ09TVCA9ICdycGMnO1xuXG5jb25zdCBBQ1JPTllNX0RPTk9SX09SR0FOSVpBVElPTiA9ICdETic7XG5jb25zdCBBQ1JPTllNX0VYRUNVVElOR19BR0VOQ1kgPSAnRUEnO1xuY29uc3QgQUNST05ZTV9JTVBMRU1FTlRJTkdfQUdFTkNZID0gJ0lBJztcbmNvbnN0IEFDUk9OWU1fQkVORUZJQ0lBUllfQUdFTkNZID0gJ0JBJztcbmNvbnN0IEFDUk9OWU1fUkVTUE9OU0lCTEVfT1JHQU5JWkFUSU9OID0gJ1JPJztcblxuLyoqIEFwcHJvdmFsIHN0YXR1cyB1bnRyYW5zbGF0ZWQgdmFsdWVzICoqL1xuY29uc3QgQVBQUk9WQUxfU1RBVFVTX0NSRUFURUQgPSAnY3JlYXRlZCc7XG5jb25zdCBBUFBST1ZBTF9TVEFUVVNfQVBQUk9WRUQgPSAnYXBwcm92ZWQnO1xuY29uc3QgQVBQUk9WQUxfU1RBVFVTX0VESVRFRCA9ICdlZGl0ZWQnO1xuY29uc3QgQVBQUk9WQUxfU1RBVFVTX1NUQVJURURfQVBQUk9WRUQgPSAnc3RhcnRlZGFwcHJvdmVkJztcbmNvbnN0IEFQUFJPVkFMX1NUQVRVU19TVEFSVEVEID0gJ3N0YXJ0ZWQnO1xuY29uc3QgQVBQUk9WQUxfU1RBVFVTX05PVF9BUFBST1ZFRCA9ICdub3RfYXBwcm92ZWQnO1xuY29uc3QgQVBQUk9WQUxfU1RBVFVTX1JFSkVDVEVEID0gJ3JlamVjdGVkJztcblxuY29uc3QgT05fQlVER0VUID0gJ09uIEJ1ZGdldCc7XG5cbmNvbnN0IElOVEVSTkFUSU9OQUwgPSAnSW50ZXJuYXRpb25hbCc7XG5jb25zdCBDT1VOVFJZID0gJ0NvdW50cnknO1xuXG5jb25zdCBSRUxBVEVEX0RPQ1VNRU5UUyA9ICdSZWxhdGVkIERvY3VtZW50cyc7XG5cbmNvbnN0IFRNUF9FTlRJVFlfVkFMSURBVE9SID0gJ2VudGl0eS12YWxpZGF0b3InO1xuXG4vKiogUmVxdWlyZWQgc3RhdHVzICovXG5jb25zdCBBTFdBWVNfUkVRVUlSRUQgPSAnWSc7XG5cbmV4cG9ydCBkZWZhdWx0IE9iamVjdC5mcmVlemUoe1xuICBET05PUl9PUkdBTklaQVRJT04sXG4gIFJFU1BPTlNJQkxFX09SR0FOSVpBVElPTixcbiAgRVhFQ1VUSU5HX0FHRU5DWSxcbiAgSU1QTEVNRU5USU5HX0FHRU5DWSxcbiAgQkVORUZJQ0lBUllfQUdFTkNZLFxuICBDT05UUkFDVElOR19BR0VOQ1ksXG4gIERPTk9SX0FHRU5DWSxcbiAgUkVHSU9OQUxfR1JPVVAsXG4gIFNFQ1RPUl9HUk9VUCxcbiAgT1JHX1JPTEVfTkFNRVMsXG4gIEFDVFVBTCxcbiAgUExBTk5FRCxcbiAgQ09NTUlUTUVOVFMsXG4gIERJU0JVUlNFTUVOVFMsXG4gIEVYUEVORElUVVJFUyxcbiAgQUNUVUFMX0NPTU1JVE1FTlRTLFxuICBBQ1RVQUxfRElTQlVSU0VNRU5UUyxcbiAgQUNUVUFMX0VYUEVORElUVVJFUyxcbiAgUExBTk5FRF9DT01NSVRNRU5UUyxcbiAgUExBTk5FRF9ESVNCVVJTRU1FTlRTLFxuICBQTEFOTkVEX0VYUEVORElUVVJFUyxcbiAgVU5BTExPQ0FURURfRElTQlVSU0VNRU5UUyxcbiAgREVMSVZFUllfUkFURSxcbiAgTVRFRl9QUk9KRUNUSU9OUyxcbiAgQURKVVNUTUVOVF9UWVBFUyxcbiAgQURKVVNUTUVOVF9UWVBFU19BUF9PUkRFUixcbiAgTkVXX0FDVElWSVRZX0lELFxuICBQUk9QT1NFRF9QUk9KRUNUX0NPU1QsXG4gIFJFVklTRURfUFJPSkVDVF9DT1NULFxuICBBQ1JPTllNX0RPTk9SX09SR0FOSVpBVElPTixcbiAgQUNST05ZTV9FWEVDVVRJTkdfQUdFTkNZLFxuICBBQ1JPTllNX0lNUExFTUVOVElOR19BR0VOQ1ksXG4gIEFDUk9OWU1fQkVORUZJQ0lBUllfQUdFTkNZLFxuICBBQ1JPTllNX1JFU1BPTlNJQkxFX09SR0FOSVpBVElPTixcbiAgQVBQUk9WQUxfU1RBVFVTX0NSRUFURUQsXG4gIEFQUFJPVkFMX1NUQVRVU19BUFBST1ZFRCxcbiAgQVBQUk9WQUxfU1RBVFVTX0VESVRFRCxcbiAgQVBQUk9WQUxfU1RBVFVTX1NUQVJURURfQVBQUk9WRUQsXG4gIEFQUFJPVkFMX1NUQVRVU19TVEFSVEVELFxuICBBUFBST1ZBTF9TVEFUVVNfTk9UX0FQUFJPVkVELFxuICBBUFBST1ZBTF9TVEFUVVNfUkVKRUNURUQsXG4gIE9OX0JVREdFVCxcbiAgSU5URVJOQVRJT05BTCxcbiAgQ09VTlRSWSxcbiAgUkVMQVRFRF9ET0NVTUVOVFMsXG4gIFRNUF9FTlRJVFlfVkFMSURBVE9SLFxuICBBTFdBWVNfUkVRVUlSRURcbn0pO1xuIiwiaW1wb3J0IEFjdGl2aXR5Q29uc3RhbnRzIGZyb20gJy4uL21vZHVsZXMvdXRpbC9BY3Rpdml0eUNvbnN0YW50cyc7XG5pbXBvcnQgRmVhdHVyZU1hbmFnZXJDb25zdGFudHMgZnJvbSAnLi4vbW9kdWxlcy91dGlsL0ZlYXR1cmVNYW5hZ2VyQ29uc3RhbnRzJztcbmltcG9ydCBWYWx1ZUNvbnN0YW50cyBmcm9tICcuL1ZhbHVlQ29uc3RhbnRzJztcblxuLyoqXG4gKiBUaGlzIGlzIGEgc2V0IG9mIGZpZWxkIHBhdGhzIHRoYXQgYXJlIHVzZWQgZm9yIGZyZXF1ZW50IG5lZWRzXG4gKiBAYXV0aG9yIE5hZGVqZGEgTWFuZHJlc2N1XG4gKi9cblxuZXhwb3J0IGNvbnN0IEZVTkRJTkdfQUNUSVZFX0xJU1QgPSAnZnVuZGluZ3N+YWN0aXZlX2xpc3QnO1xuZXhwb3J0IGNvbnN0IEZVTkRJTkdfVFlQRV9PRl9BU1NJU1RBTkNFID0gYCR7QWN0aXZpdHlDb25zdGFudHMuRlVORElOR1N9fiR7QWN0aXZpdHlDb25zdGFudHMuVFlQRV9PRl9BU1NJU1RBTkNFfWA7XG5leHBvcnQgY29uc3QgRlVORElOR19ERVRBSUxTX1BBVEggPSBgJHtBY3Rpdml0eUNvbnN0YW50cy5GVU5ESU5HU31+JHtBY3Rpdml0eUNvbnN0YW50cy5GVU5ESU5HX0RFVEFJTFN9YDtcbi8qKlxuICogTGVnYWN5IGZ1bmRpbmcgY3VycmVuY3kgcGF0aCB1c2VkIGZvciBkYXRhIG1pZ3JhdGlvblxuICogQGRlcHJlY2F0ZWQgc2luY2UgMS40XG4gKi9cbmV4cG9ydCBjb25zdCBGVU5ESU5HX0NVUlJFTkNZX1BBVEggPSBgJHtGVU5ESU5HX0RFVEFJTFNfUEFUSH1+JHtBY3Rpdml0eUNvbnN0YW50cy5DVVJSRU5DWX1gO1xuZXhwb3J0IGNvbnN0IE1URUZfQ1VSUkVOQ1lfUEFUSCA9XG4gIGAke0FjdGl2aXR5Q29uc3RhbnRzLkZVTkRJTkdTfX4ke0FjdGl2aXR5Q29uc3RhbnRzLk1URUZfUFJPSkVDVElPTlN9fiR7QWN0aXZpdHlDb25zdGFudHMuQ1VSUkVOQ1l9YDtcbmV4cG9ydCBjb25zdCBQUENfQ1VSUkVOQ1lfUEFUSCA9IGAke0FjdGl2aXR5Q29uc3RhbnRzLlBQQ19BTU9VTlR9fiR7QWN0aXZpdHlDb25zdGFudHMuQ1VSUkVOQ1l9YDtcbmV4cG9ydCBjb25zdCBSUENfQ1VSUkVOQ1lfUEFUSCA9IGAke0FjdGl2aXR5Q29uc3RhbnRzLlJQQ19BTU9VTlR9fiR7QWN0aXZpdHlDb25zdGFudHMuQ1VSUkVOQ1l9YDtcbmV4cG9ydCBjb25zdCBDT01QT05FTlRfQ1VSUkVOQ1lfUEFUSCA9XG4gIGAke0FjdGl2aXR5Q29uc3RhbnRzLkNPTVBPTkVOVFN9fiR7QWN0aXZpdHlDb25zdGFudHMuQ09NUE9ORU5UX0ZVTkRJTkd9fiR7QWN0aXZpdHlDb25zdGFudHMuQ1VSUkVOQ1l9YDtcbmV4cG9ydCBjb25zdCBESVNCVVJTRU1FTlRTX1BBVEggPSBgJHtBY3Rpdml0eUNvbnN0YW50cy5GVU5ESU5HU31+JHtBY3Rpdml0eUNvbnN0YW50cy5ESVNCVVJTRU1FTlRTfWA7XG5leHBvcnQgY29uc3QgQUNUSVZJVFlfSU5URVJOQUxfSURTX0lOVEVSTkFMX0lEX1BBVEggPSAnYWN0aXZpdHlfaW50ZXJuYWxfaWRzfmludGVybmFsX2lkJztcbmV4cG9ydCBjb25zdCBBQ1RJVklUWV9JTlRFUk5BTF9JRFNfT1JHQU5JWkFUSU9OX1BBVEggPSAnYWN0aXZpdHlfaW50ZXJuYWxfaWRzfm9yZ2FuaXphdGlvbic7XG5leHBvcnQgY29uc3QgTE9DQVRJT05fUEFUSCA9ICdsb2NhdGlvbnN+bG9jYXRpb24nO1xuZXhwb3J0IGNvbnN0IE5BVElPTkFMX1BMQU5fT0JKRUNUSVZFX1BBVEggPSAnbmF0aW9uYWxfcGxhbl9vYmplY3RpdmV+cHJvZ3JhbSc7XG5leHBvcnQgY29uc3QgUFJJTUFSWV9QUk9HUkFNX1BBVEggPSAncHJpbWFyeV9wcm9ncmFtc35wcm9ncmFtJztcbmV4cG9ydCBjb25zdCBTRUNPTkRBUllfUFJPR1JBTV9QQVRIID0gJ3NlY29uZGFyeV9wcm9ncmFtc35wcm9ncmFtJztcbmV4cG9ydCBjb25zdCBQUklNQVJZX1NFQ1RPUl9QQVRIID0gJ3ByaW1hcnlfc2VjdG9yc35zZWN0b3InO1xuZXhwb3J0IGNvbnN0IFNFQ09OREFSWV9TRUNUT1JfUEFUSCA9ICdzZWNvbmRhcnlfc2VjdG9yc35zZWN0b3InO1xuZXhwb3J0IGNvbnN0IFRFUlRJQVJZX1NFQ1RPUl9QQVRIID0gJ3RlcnRpYXJ5X3NlY3RvcnN+c2VjdG9yJztcbmV4cG9ydCBjb25zdCBET05PUl9PUkdBTklaQVRJT05TX1BBVEggPSAnZG9ub3Jfb3JnYW5pemF0aW9ufm9yZ2FuaXphdGlvbic7XG5leHBvcnQgY29uc3QgUkVTUE9OU0lCTEVfT1JHQU5JWkFUSU9OX0JVREdFVFNfUEFUSCA9XG4gIGAke0FjdGl2aXR5Q29uc3RhbnRzLlJFU1BPTlNJQkxFX09SR0FOSVpBVElPTn1+JHtBY3Rpdml0eUNvbnN0YW50cy5CVURHRVRTfWA7XG5cbmV4cG9ydCBjb25zdCBSRUxBVEVEX09SR1NfUEFUSFMgPSBWYWx1ZUNvbnN0YW50cy5PUkdfUk9MRV9OQU1FUy5tYXAob3JnUm9sZSA9PiBBY3Rpdml0eUNvbnN0YW50cy50b0ZpZWxkTmFtZShvcmdSb2xlKSk7XG5leHBvcnQgY29uc3QgUkVMQVRFRF9PUkdTX09SR0FOSVpBVElPTl9QQVRIUyA9IFZhbHVlQ29uc3RhbnRzLk9SR19ST0xFX05BTUVTLm1hcChcbiAgb3JnUm9sZSA9PiBgJHtBY3Rpdml0eUNvbnN0YW50cy50b0ZpZWxkTmFtZShvcmdSb2xlKX1+JHtBY3Rpdml0eUNvbnN0YW50cy5PUkdBTklaQVRJT059YCk7XG5cbmV4cG9ydCBjb25zdCBSSUNIX1RFWFRfRklFTERTID0gbmV3IFNldChbQWN0aXZpdHlDb25zdGFudHMuU1RBVFVTX1JFQVNPTiwgQWN0aXZpdHlDb25zdGFudHMuT0JKRUNUSVZFLFxuICBBY3Rpdml0eUNvbnN0YW50cy5ERVNDUklQVElPTiwgQWN0aXZpdHlDb25zdGFudHMuUFJPSkVDVF9DT01NRU5UUywgQWN0aXZpdHlDb25zdGFudHMuTEVTU09OU19MRUFSTkVELFxuICBBY3Rpdml0eUNvbnN0YW50cy5QUk9KRUNUX0lNUEFDVCwgQWN0aXZpdHlDb25zdGFudHMuQUNUSVZJVFlfU1VNTUFSWSwgQWN0aXZpdHlDb25zdGFudHMuQ09ORElUSU9OQUxJVElFUyxcbiAgQWN0aXZpdHlDb25zdGFudHMuUFJPSkVDVF9NQU5BR0VNRU5ULCBBY3Rpdml0eUNvbnN0YW50cy5SRVNVTFRTLFxuXSk7XG5cbmV4cG9ydCBjb25zdCBQQVRIU19XSVRIX1RSRUVfU1RSVUNUVVJFID0gbmV3IFNldChbTkFUSU9OQUxfUExBTl9PQkpFQ1RJVkVfUEFUSCwgUFJJTUFSWV9QUk9HUkFNX1BBVEgsXG4gIFNFQ09OREFSWV9QUk9HUkFNX1BBVEgsIFBSSU1BUllfU0VDVE9SX1BBVEgsIFNFQ09OREFSWV9TRUNUT1JfUEFUSCwgVEVSVElBUllfU0VDVE9SX1BBVEhdKTtcblxuZXhwb3J0IGNvbnN0IFBBVEhTX1dJVEhfSElFUkFSQ0hJQ0FMX1ZBTFVFUyA9IG5ldyBTZXQoW05BVElPTkFMX1BMQU5fT0JKRUNUSVZFX1BBVEgsIFBSSU1BUllfUFJPR1JBTV9QQVRILFxuICBTRUNPTkRBUllfUFJPR1JBTV9QQVRILCBQUklNQVJZX1NFQ1RPUl9QQVRILCBTRUNPTkRBUllfU0VDVE9SX1BBVEgsIFRFUlRJQVJZX1NFQ1RPUl9QQVRILCBMT0NBVElPTl9QQVRIXSk7XG5cbmV4cG9ydCBjb25zdCBBQ1RJVklUWV9DT05UQUNUX1BBVEhTID0gW0FjdGl2aXR5Q29uc3RhbnRzLkRPTk9SX0NPTlRBQ1QsIEFjdGl2aXR5Q29uc3RhbnRzLlBST0pFQ1RfQ09PUkRJTkFUT1JfQ09OVEFDVCxcbiAgQWN0aXZpdHlDb25zdGFudHMuU0VDVE9SX01JTklTVFJZX0NPTlRBQ1QsIEFjdGl2aXR5Q29uc3RhbnRzLk1PRkVEX0NPTlRBQ1QsXG4gIEFjdGl2aXR5Q29uc3RhbnRzLklNUExFTUVOVElOR19FWEVDVVRJTkdfQUdFTkNZX0NPTlRBQ1RdO1xuXG5leHBvcnQgY29uc3QgVFJBTlNBQ1RJT05fVFlQRVMgPSBbQWN0aXZpdHlDb25zdGFudHMuQ09NTUlUTUVOVFMsIEFjdGl2aXR5Q29uc3RhbnRzLkRJU0JVUlNFTUVOVFMsXG4gIEFjdGl2aXR5Q29uc3RhbnRzLkVYUEVORElUVVJFU107XG5leHBvcnQgY29uc3QgVFJBTlNBQ1RJT05fVFlQRVNfT1JERVJFRCA9IFRSQU5TQUNUSU9OX1RZUEVTO1xuZXhwb3J0IGNvbnN0IEZVTkRJTkdfVFJBTlNBQ1RJT05fVFlQRVMgPSBbLi4uVFJBTlNBQ1RJT05fVFlQRVMsIEFjdGl2aXR5Q29uc3RhbnRzLkVTVElNQVRFRF9ESVNCVVJTRU1FTlRTXTtcbmV4cG9ydCBjb25zdCBBREpVU1RNRU5UX1RZUEVfUEFUSFMgPSBGVU5ESU5HX1RSQU5TQUNUSU9OX1RZUEVTLm1hcChcbiAgdHQgPT4gYCR7QWN0aXZpdHlDb25zdGFudHMuRlVORElOR1N9fiR7dHR9fiR7QWN0aXZpdHlDb25zdGFudHMuQURKVVNUTUVOVF9UWVBFfWApO1xuZXhwb3J0IGNvbnN0IEZVTkRJTkdfQ1VSUkVOQ1lfUEFUSFMgPSBUUkFOU0FDVElPTl9UWVBFUy5tYXAoXG4gIHR0ID0+IGAke0FjdGl2aXR5Q29uc3RhbnRzLkZVTkRJTkdTfX4ke3R0fX4ke0FjdGl2aXR5Q29uc3RhbnRzLkNVUlJFTkNZfWApO1xuXG5leHBvcnQgY29uc3QgUEFUSFNfRk9SX0FDVElWSVRZX0NVUlJFTkNZID0gW0ZVTkRJTkdfQ1VSUkVOQ1lfUEFUSCwgTVRFRl9DVVJSRU5DWV9QQVRILCBDT01QT05FTlRfQ1VSUkVOQ1lfUEFUSCxcbiAgUFBDX0NVUlJFTkNZX1BBVEgsIFJQQ19DVVJSRU5DWV9QQVRILCAuLi5GVU5ESU5HX0NVUlJFTkNZX1BBVEhTXTtcblxuZXhwb3J0IGNvbnN0IFBBVEhTX0ZPUl9DVVJSRU5DWSA9IG5ldyBTZXQoW0FjdGl2aXR5Q29uc3RhbnRzLkNVUlJFTkNZLCAuLi5QQVRIU19GT1JfQUNUSVZJVFlfQ1VSUkVOQ1ldKTtcblxuZXhwb3J0IGNvbnN0IERPX05PVF9IWURSQVRFX0ZJRUxEU19MSVNUID0gW0FjdGl2aXR5Q29uc3RhbnRzLkFQUFJPVkFMX1NUQVRVU107XG5cbi8qIEZpZWxkcyBwYXRocyBhbHRlcm5hdGl2ZSB2YWx1ZXMgbG9jYXRpb24gKi9cbmV4cG9ydCBjb25zdCBBTFRFUk5BVEVfVkFMVUVfUEFUSCA9IHt9O1xuQUxURVJOQVRFX1ZBTFVFX1BBVEhbQWN0aXZpdHlDb25zdGFudHMuQ1JFQVRFRF9PTl0gPSBBY3Rpdml0eUNvbnN0YW50cy5DTElFTlRfQ1JFQVRFRF9PTjtcbkFMVEVSTkFURV9WQUxVRV9QQVRIW0FjdGl2aXR5Q29uc3RhbnRzLk1PRElGSUVEX09OXSA9IEFjdGl2aXR5Q29uc3RhbnRzLkNMSUVOVF9VUERBVEVEX09OO1xuXG4vKiBGTSBwYXRocyBmb3Igc29tZSBhY3Rpdml0eSBmaWVsZHMgdGhhdCBhcmUgYWx3YXlzIHByZXNlbnQgaW4gZmllbGRzIGRlZiwgYnV0IG1heSBiZSBoaWRkZW4gZnJvbSBkaXNwbGF5IHRocm91Z2ggRk0gKi9cbmV4cG9ydCBjb25zdCBBQ1RJVklUWV9GSUVMRFNfRk1fUEFUSCA9IHt9O1xuQUNUSVZJVFlfRklFTERTX0ZNX1BBVEhbQWN0aXZpdHlDb25zdGFudHMuTU9ESUZJRURfQlldID0gRmVhdHVyZU1hbmFnZXJDb25zdGFudHMuQUNUSVZJVFlfTEFTVF9VUERBVEVEX0JZO1xuQUNUSVZJVFlfRklFTERTX0ZNX1BBVEhbQWN0aXZpdHlDb25zdGFudHMuTU9ESUZJRURfT05dID0gRmVhdHVyZU1hbmFnZXJDb25zdGFudHMuQUNUSVZJVFlfTEFTVF9VUERBVEVEX09OO1xuXG4vKiBQb3NzaWJsZSBPcHRpb25zIGZpZWxkcyBwYXRoIHByZWZpeGVzICovXG5leHBvcnQgY29uc3QgUFJFRklYX0FDVElWSVRZID0gbnVsbDtcbmV4cG9ydCBjb25zdCBQUkVGSVhfQ09OVEFDVCA9ICdjb250YWN0JztcbmV4cG9ydCBjb25zdCBQUkVGSVhfUkVTT1VSQ0UgPSAncmVzb3VyY2UnO1xuZXhwb3J0IGNvbnN0IFBSRUZJWF9DT01NT04gPSAnY29tbW9uJztcbmV4cG9ydCBjb25zdCBQUkVGSVhfTElTVCA9IFtQUkVGSVhfQUNUSVZJVFksIFBSRUZJWF9DT05UQUNULCBQUkVGSVhfUkVTT1VSQ0UsIFBSRUZJWF9DT01NT05dO1xuXG5leHBvcnQgY29uc3QgRklFTERfUEFUSCA9ICdmaWVsZC1wYXRoJztcbmV4cG9ydCBjb25zdCBGSUVMRF9PUFRJT05TID0gJ3Bvc3NpYmxlLW9wdGlvbnMnO1xuZXhwb3J0IGNvbnN0IEZJRUxEX09QVElPTl9VU0FCTEUgPSAnb3B0aW9uLXVzYWJsZSc7XG5leHBvcnQgY29uc3QgTElTVF9NQVhfU0laRSA9ICdzaXplLWxpbWl0JztcbmV4cG9ydCBjb25zdCBSRUdFWF9QQVRURVJOID0gJ3JlZ2V4LXBhdHRlcm4nO1xuZXhwb3J0IGNvbnN0IEZJRUxEX05BTUUgPSAnZmllbGRfbmFtZSc7XG5leHBvcnQgY29uc3QgRklFTERfTEFCRUwgPSAnZmllbGRfbGFiZWwnO1xuZXhwb3J0IGNvbnN0IEZJRUxEX1JFUVVJUkVEID0gJ3JlcXVpcmVkJztcbmV4cG9ydCBjb25zdCBGSUVMRF9VTklRVUVfQ09OU1RSQUlOVCA9ICd1bmlxdWVfY29uc3RyYWludCc7XG5leHBvcnQgY29uc3QgRklFTERfVFlQRSA9ICdmaWVsZF90eXBlJztcbmV4cG9ydCBjb25zdCBGSUVMRF9MRU5HVEggPSAnZmllbGRfbGVuZ3RoJztcbmV4cG9ydCBjb25zdCBGSUVMRF9QRVJDRU5UQUdFID0gJ3BlcmNlbnRhZ2UnO1xuZXhwb3J0IGNvbnN0IEZJRUxEX1BFUkNFTlRBR0VfQ09OU1RSQUlOVCA9ICdwZXJjZW50YWdlX2NvbnN0cmFpbnQnO1xuZXhwb3J0IGNvbnN0IEZJRUxEX0lURU1fVFlQRSA9ICdpdGVtLXR5cGUnO1xuZXhwb3J0IGNvbnN0IEZJRUxEX0lNUE9SVEFCTEUgPSAnaW1wb3J0YWJsZSc7XG5leHBvcnQgY29uc3QgRklFTERfSURfT05MWSA9ICdpZF9vbmx5JztcbmV4cG9ydCBjb25zdCBGSUVMRF9NVUxUSVBMRV9WQUxVRVNfQUxMT1dFRCA9ICdtdWx0aXBsZV92YWx1ZXMnO1xuZXhwb3J0IGNvbnN0IEZJRUxEX1RSRUVfQ09MTEVDVElPTiA9ICd0cmVlX2NvbGxlY3Rpb24nO1xuZXhwb3J0IGNvbnN0IEZJRUxEX0NISUxEUkVOID0gJ2NoaWxkcmVuJztcbmV4cG9ydCBjb25zdCBGSUVMRF9ERVBFTkRFTkNJRVMgPSAnZGVwZW5kZW5jaWVzJztcblxuZXhwb3J0IGNvbnN0IEZJRUxEX1RZUEVfTElTVCA9ICdsaXN0JztcbmV4cG9ydCBjb25zdCBGSUVMRF9UWVBFX09CSkVDVCA9ICdvYmplY3QnO1xuZXhwb3J0IGNvbnN0IEZJRUxEX1RZUEVfU1RSSU5HID0gJ3N0cmluZyc7XG5leHBvcnQgY29uc3QgRklFTERfVFlQRV9MT05HID0gJ2xvbmcnO1xuZXhwb3J0IGNvbnN0IEZJRUxEX1RZUEVfRkxPQVQgPSAnZmxvYXQnO1xuZXhwb3J0IGNvbnN0IEZJRUxEX1RZUEVfQk9PTEVBTiA9ICdib29sZWFuJztcbmV4cG9ydCBjb25zdCBGSUVMRF9UWVBFX0RBVEUgPSAnZGF0ZSc7XG5leHBvcnQgY29uc3QgRklFTERfVFlQRV9USU1FU1RBTVAgPSAndGltZXN0YW1wJztcblxuZXhwb3J0IGRlZmF1bHQgT2JqZWN0LmZyZWV6ZSh7XG4gIEZVTkRJTkdfQUNUSVZFX0xJU1QsXG4gIEZVTkRJTkdfREVUQUlMU19QQVRILFxuICBGVU5ESU5HX0NVUlJFTkNZX1BBVEgsXG4gIE1URUZfQ1VSUkVOQ1lfUEFUSCxcbiAgUFBDX0NVUlJFTkNZX1BBVEgsXG4gIFJQQ19DVVJSRU5DWV9QQVRILFxuICBDT01QT05FTlRfQ1VSUkVOQ1lfUEFUSCxcbiAgRElTQlVSU0VNRU5UU19QQVRILFxuICBBQ1RJVklUWV9JTlRFUk5BTF9JRFNfSU5URVJOQUxfSURfUEFUSCxcbiAgQUNUSVZJVFlfSU5URVJOQUxfSURTX09SR0FOSVpBVElPTl9QQVRILFxuICBMT0NBVElPTl9QQVRILFxuICBOQVRJT05BTF9QTEFOX09CSkVDVElWRV9QQVRILFxuICBQUklNQVJZX1BST0dSQU1fUEFUSCxcbiAgU0VDT05EQVJZX1BST0dSQU1fUEFUSCxcbiAgUFJJTUFSWV9TRUNUT1JfUEFUSCxcbiAgU0VDT05EQVJZX1NFQ1RPUl9QQVRILFxuICBURVJUSUFSWV9TRUNUT1JfUEFUSCxcbiAgRE9OT1JfT1JHQU5JWkFUSU9OU19QQVRILFxuICBSRVNQT05TSUJMRV9PUkdBTklaQVRJT05fQlVER0VUU19QQVRILFxuICBSRUxBVEVEX09SR1NfUEFUSFMsXG4gIFJFTEFURURfT1JHU19PUkdBTklaQVRJT05fUEFUSFMsXG4gIFJJQ0hfVEVYVF9GSUVMRFMsXG4gIFBBVEhTX1dJVEhfVFJFRV9TVFJVQ1RVUkUsXG4gIFBBVEhTX1dJVEhfSElFUkFSQ0hJQ0FMX1ZBTFVFUyxcbiAgQUNUSVZJVFlfQ09OVEFDVF9QQVRIUyxcbiAgVFJBTlNBQ1RJT05fVFlQRVMsXG4gIFRSQU5TQUNUSU9OX1RZUEVTX09SREVSRUQsXG4gIEZVTkRJTkdfVFJBTlNBQ1RJT05fVFlQRVMsXG4gIEFESlVTVE1FTlRfVFlQRV9QQVRIUyxcbiAgRlVORElOR19DVVJSRU5DWV9QQVRIUyxcbiAgUEFUSFNfRk9SX0FDVElWSVRZX0NVUlJFTkNZLFxuICBQQVRIU19GT1JfQ1VSUkVOQ1ksXG4gIERPX05PVF9IWURSQVRFX0ZJRUxEU19MSVNULFxuICBBTFRFUk5BVEVfVkFMVUVfUEFUSCxcbiAgQUNUSVZJVFlfRklFTERTX0ZNX1BBVEgsXG4gIFBSRUZJWF9BQ1RJVklUWSxcbiAgUFJFRklYX0NPTlRBQ1QsXG4gIFBSRUZJWF9SRVNPVVJDRSxcbiAgUFJFRklYX0NPTU1PTixcbiAgUFJFRklYX0xJU1QsXG4gIEZJRUxEX1BBVEgsXG4gIEZJRUxEX09QVElPTlMsXG4gIEZJRUxEX09QVElPTl9VU0FCTEUsXG4gIExJU1RfTUFYX1NJWkUsXG4gIFJFR0VYX1BBVFRFUk4sXG4gIEZJRUxEX05BTUUsXG4gIEZJRUxEX0xBQkVMLFxuICBGSUVMRF9SRVFVSVJFRCxcbiAgRklFTERfVU5JUVVFX0NPTlNUUkFJTlQsXG4gIEZJRUxEX1RZUEUsXG4gIEZJRUxEX0xFTkdUSCxcbiAgRklFTERfUEVSQ0VOVEFHRSxcbiAgRklFTERfUEVSQ0VOVEFHRV9DT05TVFJBSU5ULFxuICBGSUVMRF9JVEVNX1RZUEUsXG4gIEZJRUxEX0lNUE9SVEFCTEUsXG4gIEZJRUxEX0lEX09OTFksXG4gIEZJRUxEX01VTFRJUExFX1ZBTFVFU19BTExPV0VELFxuICBGSUVMRF9UUkVFX0NPTExFQ1RJT04sXG4gIEZJRUxEX0NISUxEUkVOLFxuICBGSUVMRF9ERVBFTkRFTkNJRVMsXG4gIEZJRUxEX1RZUEVfTElTVCxcbiAgRklFTERfVFlQRV9PQkpFQ1QsXG4gIEZJRUxEX1RZUEVfU1RSSU5HLFxuICBGSUVMRF9UWVBFX0xPTkcsXG4gIEZJRUxEX1RZUEVfRkxPQVQsXG4gIEZJRUxEX1RZUEVfQk9PTEVBTixcbiAgRklFTERfVFlQRV9EQVRFLFxuICBGSUVMRF9UWVBFX1RJTUVTVEFNUCxcbn0pO1xuIiwiLyogZXNsaW50LWRpc2FibGUgY2xhc3MtbWV0aG9kcy11c2UtdGhpcyAqL1xuaW1wb3J0IENvbnN0YW50cyBmcm9tICcuLi8uLi91dGlscy9Db25zdGFudHMnO1xuaW1wb3J0ICogYXMgRlBDIGZyb20gJy4uLy4uL3V0aWxzL0ZpZWxkUGF0aENvbnN0YW50cyc7XG5cbmxldCBsb2dnZXIgPSBudWxsO1xuXG4vKipcbiAqIFRoaXMgaXMgYSBoZWxwZXIgY2xhc3MgZm9yIGNoZWNraW5nIGZpZWxkcyBzdGF0dXMsIGdldHRpbmcgZmllbGQgb3B0aW9ucyB0cmFuc2xhdGlvbnMgYW5kIHRoZSBsaWtlLlxuICpcbiAqIEBhdXRob3IgTmFkZWpkYSBNYW5kcmVzY3VcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmllbGRzTWFuYWdlciB7XG4gIC8qKlxuICAgKiBTaGFsbG93IGNsb25lIG9mIGFub3RoZXIgbmV3RmllbGRzTWFuYWdlclxuICAgKiBAcGFyYW0gZmllbGRzTWFuYWdlclxuICAgKiBAcmV0dXJuIHtGaWVsZHNNYW5hZ2VyfVxuICAgKi9cbiAgc3RhdGljIGNsb25lKGZpZWxkc01hbmFnZXI6IEZpZWxkc01hbmFnZXIsIExvZ2dlck1hbmFnZXIpIHtcbiAgICBjb25zdCBuZXdGaWVsZHNNYW5hZ2VyID0gbmV3IEZpZWxkc01hbmFnZXIoW10sIFtdLCBudWxsLFxuICAgICAgTG9nZ2VyTWFuYWdlcik7XG4gICAgT2JqZWN0LmFzc2lnbihuZXdGaWVsZHNNYW5hZ2VyLCBmaWVsZHNNYW5hZ2VyKTtcbiAgICByZXR1cm4gbmV3RmllbGRzTWFuYWdlcjtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKGZpZWxkc0RlZiwgcG9zc2libGVWYWx1ZXNDb2xsZWN0aW9uLCBjdXJyZW50TGFuZ3VhZ2UsIExvZ2dlck1hbmFnZXIpIHtcbiAgICAvLyBUT0RPIHJlbW92ZSBjYWNoZVxuICAgIGxvZ2dlciA9IG5ldyBMb2dnZXJNYW5hZ2VyKCdGaWVsZHMgbWFuYWdlcicpO1xuICAgIGxvZ2dlci5kZWJ1ZygnY29uc3RydWN0b3InKTtcbiAgICB0aGlzLl9maWVsZHNEZWYgPSBmaWVsZHNEZWY7XG4gICAgdGhpcy5fcG9zc2libGVWYWx1ZXNNYXAgPSB7fTtcbiAgICBwb3NzaWJsZVZhbHVlc0NvbGxlY3Rpb24uZm9yRWFjaChwdiA9PiB7XG4gICAgICB0aGlzLl9wb3NzaWJsZVZhbHVlc01hcFtwdi5pZF0gPSBwdltGUEMuRklFTERfT1BUSU9OU107XG4gICAgfSk7XG4gICAgdGhpcy5fZmllbGRQYXRoc0VuYWJsZWRTdGF0dXNNYXAgPSB7fTtcbiAgICB0aGlzLl9sYW5nID0gY3VycmVudExhbmd1YWdlIHx8IENvbnN0YW50cy5MQU5HVUFHRV9FTkdMSVNIO1xuICAgIHRoaXMuX2RlZmF1bHRMYW5nID0gQ29uc3RhbnRzLkxBTkdVQUdFX0VOR0xJU0g7XG4gICAgdGhpcy5jbGVhbnVwKGZpZWxkc0RlZik7XG4gIH1cblxuICBjbGVhbnVwKGZpZWxkc0RlZikge1xuICAgIC8vIFRPRE8gZGVjaWRlIGVpdGhlciB0byBrZWVwIGNsZWFudXAgKGhlcmUgb3IgYW55d2hlcmUgZWxzZSkgb3IgY2hlY2sgaWYgd2UgbmVlZCB0byBzdGFuZGFyZGl6ZSBBUElcbiAgICBmaWVsZHNEZWYuZm9yRWFjaChmZCA9PiB7XG4gICAgICBpZiAoZmQuY2hpbGRyZW4pIHtcbiAgICAgICAgdGhpcy5jbGVhbnVwKGZkLmNoaWxkcmVuKTtcbiAgICAgIH1cbiAgICAgIGlmIChmZC5maWVsZF9sYWJlbCkge1xuICAgICAgICBPYmplY3Qua2V5cyhmZC5maWVsZF9sYWJlbCkuZm9yRWFjaChsYW5nID0+IHtcbiAgICAgICAgICAgIGZkLmZpZWxkX2xhYmVsW2xhbmcudG9Mb3dlckNhc2UoKV0gPSBmZC5maWVsZF9sYWJlbFtsYW5nXTtcbiAgICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHNldCBjdXJyZW50TGFuZ3VhZ2VDb2RlKGxhbmcpIHtcbiAgICB0aGlzLl9sYW5nID0gbGFuZztcbiAgfVxuXG4gIHNldCBkZWZhdWx0TGFuZ3VhZ2VDb2RlKGxhbmcpIHtcbiAgICB0aGlzLl9kZWZhdWx0TGFuZyA9IGxhbmc7XG4gIH1cblxuICBnZXQgZmllbGRzRGVmKCkge1xuICAgIHJldHVybiB0aGlzLl9maWVsZHNEZWY7XG4gIH1cblxuICBnZXQgcG9zc2libGVWYWx1ZXNNYXAoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Bvc3NpYmxlVmFsdWVzTWFwO1xuICB9XG5cbiAgZ2V0UG9zc2libGVWYWx1ZXNPcHRpb25zKGZpZWxkUGF0aCkge1xuICAgIHJldHVybiBPYmplY3QudmFsdWVzKHRoaXMuX3Bvc3NpYmxlVmFsdWVzTWFwW2ZpZWxkUGF0aF0pO1xuICB9XG5cbiAgaXNGaWVsZFBhdGhCeVBhcnRzRW5hYmxlZCguLi5wYXRoUGFydHMpIHtcbiAgICByZXR1cm4gdGhpcy5pc0ZpZWxkUGF0aEVuYWJsZWQocGF0aFBhcnRzLmpvaW4oJ34nKSk7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2tzIGlmIHRoZSBzcGVjaWZpZWQgZmllbGQgcGF0aCBpcyBlbmFibGVkIGluIEFNUCBGTVxuICAgKiBAcGFyYW0gZmllbGRQYXRoXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqL1xuICBpc0ZpZWxkUGF0aEVuYWJsZWQoZmllbGRQYXRoKSB7XG4gICAgaWYgKHRoaXMuX2ZpZWxkUGF0aHNFbmFibGVkU3RhdHVzTWFwW2ZpZWxkUGF0aF0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5fYnVpbGRGaWVsZFBhdGhTdGF0dXMoZmllbGRQYXRoKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX2ZpZWxkUGF0aHNFbmFibGVkU3RhdHVzTWFwW2ZpZWxkUGF0aF07XG4gIH1cblxuICBfYnVpbGRGaWVsZFBhdGhTdGF0dXMoZmllbGRQYXRoKSB7XG4gICAgY29uc3QgcGF0aFBhcnRzID0gZmllbGRQYXRoLnNwbGl0KCd+Jyk7XG4gICAgbGV0IGN1cnJlbnRUcmVlID0gdGhpcy5fZmllbGRzRGVmO1xuICAgIGNvbnN0IGlzRGlzYWJsZWQgPSBwYXRoUGFydHMuc29tZShwYXJ0ID0+IHtcbiAgICAgIGN1cnJlbnRUcmVlID0gY3VycmVudFRyZWUuZmluZChmaWVsZCA9PiBmaWVsZC5maWVsZF9uYW1lID09PSBwYXJ0KTtcbiAgICAgIGlmIChjdXJyZW50VHJlZSAmJiAoKGN1cnJlbnRUcmVlW0ZQQy5GSUVMRF9UWVBFXSA9PT0gRlBDLkZJRUxEX1RZUEVfTElTVFxuICAgICAgICAmJiBjdXJyZW50VHJlZVtGUEMuRklFTERfSVRFTV9UWVBFXSA9PT0gRlBDLkZJRUxEX1RZUEVfT0JKRUNUKVxuICAgICAgICB8fCBjdXJyZW50VHJlZVtGUEMuRklFTERfVFlQRV0gPT09IEZQQy5GSUVMRF9UWVBFX09CSkVDVCkpIHtcbiAgICAgICAgY3VycmVudFRyZWUgPSBjdXJyZW50VHJlZS5jaGlsZHJlbjtcbiAgICAgIH1cbiAgICAgIHJldHVybiAhY3VycmVudFRyZWU7XG4gICAgfSk7XG4gICAgdGhpcy5fZmllbGRQYXRoc0VuYWJsZWRTdGF0dXNNYXBbZmllbGRQYXRoXSA9ICFpc0Rpc2FibGVkO1xuICB9XG5cbiAgLyoqXG4gICAqIEZpbmQgdGhlIHRyYW5zbGF0aW9uIGZvciB0aGUgb3JpZ2luYWwgdmFsdWUgZm9yIHRoZSBnaXZlbiBmaWVsZCBwYXRoLCBpZiBmb3VuZCwgb3RoZXJ3aXNlIHJldHVybnMgbnVsbFxuICAgKiBAcGFyYW0gZmllbGRQYXRoXG4gICAqIEBwYXJhbSBvcmlnVmFsdWVcbiAgICogQHJldHVybiB7c3RyaW5nfG51bGx9XG4gICAqL1xuICBnZXRWYWx1ZVRyYW5zbGF0aW9uKGZpZWxkUGF0aCwgb3JpZ1ZhbHVlKSB7XG4gICAgLy8gZmFsbGJhY2sgdG8gb3JpZ2luYWwgdW50cmFuc2xhdGVkIHZhbHVlXG4gICAgbGV0IHRyblZhbHVlID0gb3JpZ1ZhbHVlO1xuICAgIGNvbnN0IG9wdGlvbnMgPSB0aGlzLl9wb3NzaWJsZVZhbHVlc01hcFtmaWVsZFBhdGhdO1xuICAgIGlmIChvcHRpb25zKSB7XG4gICAgICBjb25zdCBvcHRpb24gPSBPYmplY3QudmFsdWVzKG9wdGlvbnMpLmZpbmQob3B0ID0+IG9wdC52YWx1ZSA9PT0gb3JpZ1ZhbHVlKTtcbiAgICAgIGlmIChvcHRpb24gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBjb25zdCB0cmFuc2xhdGlvbnMgPSBvcHRpb25bJ3RyYW5zbGF0ZWQtdmFsdWUnXTtcbiAgICAgICAgaWYgKHRyYW5zbGF0aW9ucykge1xuICAgICAgICAgIHRyblZhbHVlID0gdHJhbnNsYXRpb25zW3RoaXMuX2xhbmddIHx8IHRyYW5zbGF0aW9uc1t0aGlzLl9kZWZhdWx0TGFuZ10gfHwgdHJuVmFsdWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRyblZhbHVlO1xuICB9XG5cbiAgZ2V0RmllbGRMYWJlbFRyYW5zbGF0aW9uKGZpZWxkUGF0aCkge1xuICAgIGxldCB0cm5MYWJlbCA9IG51bGw7XG4gICAgY29uc3QgZmllbGRzRGVmID0gdGhpcy5nZXRGaWVsZERlZihmaWVsZFBhdGgpO1xuICAgIGlmIChmaWVsZHNEZWYgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdHJuTGFiZWwgPSBmaWVsZHNEZWYuZmllbGRfbGFiZWxbdGhpcy5fbGFuZ10gfHwgZmllbGRzRGVmLmZpZWxkX2xhYmVsW3RoaXMuX2RlZmF1bHRMYW5nXSB8fCBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gdHJuTGFiZWw7XG4gIH1cblxuICBnZXRGaWVsZERlZihmaWVsZFBhdGgpIHtcbiAgICBsZXQgZmllbGRzRGVmID0gdGhpcy5fZmllbGRzRGVmO1xuICAgIGlmIChmaWVsZFBhdGgpIHtcbiAgICAgIGZpZWxkUGF0aC5zcGxpdCgnficpLnNvbWUocGFydCA9PiB7XG4gICAgICAgICAgaWYgKCEoZmllbGRzRGVmIGluc3RhbmNlb2YgQXJyYXkpKSB7XG4gICAgICAgICAgICBmaWVsZHNEZWYgPSBmaWVsZHNEZWYuY2hpbGRyZW47XG4gICAgICAgICAgfVxuICAgICAgICAgIGZpZWxkc0RlZiA9IGZpZWxkc0RlZi5maW5kKGZkID0+IGZkLmZpZWxkX25hbWUgPT09IHBhcnQpO1xuICAgICAgICAgIHJldHVybiBmaWVsZHNEZWYgPT09IHVuZGVmaW5lZDtcbiAgICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZpZWxkc0RlZiA9IHsgY2hpbGRyZW46IGZpZWxkc0RlZiB9O1xuICAgIH1cbiAgICByZXR1cm4gZmllbGRzRGVmO1xuICB9XG5cbiAgZ2V0RmllbGRQYXRoc0J5RGVwZW5kZW5jaWVzKGRlcGVuZGVuY2llcykge1xuICAgIGNvbnN0IGZpZWxkUGF0aHMgPSBbXTtcbiAgICB0aGlzLl9nZXRGaWVsZFBhdGhzQnlEZXBlbmRlbmNpZXMoZGVwZW5kZW5jaWVzLCB0aGlzLl9maWVsZHNEZWYsICcnLCBmaWVsZFBhdGhzKTtcbiAgICByZXR1cm4gZmllbGRQYXRocztcbiAgfVxuXG4gIF9nZXRGaWVsZFBhdGhzQnlEZXBlbmRlbmNpZXMoZGVwZW5kZW5jaWVzLCBmaWVsZHNEZWYsIGN1cnJlbnRQYXRoLCBmaWVsZFBhdGhzOiBBcnJheSkge1xuICAgIGlmICghKGZpZWxkc0RlZiBpbnN0YW5jZW9mIEFycmF5KSkge1xuICAgICAgZmllbGRzRGVmID0gZmllbGRzRGVmLmNoaWxkcmVuO1xuICAgIH1cbiAgICBmaWVsZHNEZWYuZm9yRWFjaChmZCA9PiB7XG4gICAgICBjb25zdCBoYXNEZXBlbmRlbmN5ID0gZmQuZGVwZW5kZW5jaWVzICYmIGZkLmRlcGVuZGVuY2llcy5zb21lKGRlcCA9PiBkZXBlbmRlbmNpZXMuaW5jbHVkZXMoZGVwKSk7XG4gICAgICBpZiAoZmQuY2hpbGRyZW4gfHwgaGFzRGVwZW5kZW5jeSkge1xuICAgICAgICBjb25zdCBmaWVsZFBhdGggPSBgJHtjdXJyZW50UGF0aH0ke2ZkLmZpZWxkX25hbWV9YDtcbiAgICAgICAgaWYgKGhhc0RlcGVuZGVuY3kpIHtcbiAgICAgICAgICBmaWVsZFBhdGhzLnB1c2goZmllbGRQYXRoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZmQuY2hpbGRyZW4pIHtcbiAgICAgICAgICB0aGlzLl9nZXRGaWVsZFBhdGhzQnlEZXBlbmRlbmNpZXMoZGVwZW5kZW5jaWVzLCBmZC5jaGlsZHJlbiwgYCR7ZmllbGRQYXRofX5gLCBmaWVsZFBhdGhzKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgZ2V0VmFsdWUob2JqZWN0LCBmaWVsZFBhdGgsIGdldE9wdGlvblRyYW5zbGF0aW9uKSB7XG4gICAgcmV0dXJuIEZpZWxkc01hbmFnZXIuZ2V0VmFsdWUob2JqZWN0LCBmaWVsZFBhdGgsIGdldE9wdGlvblRyYW5zbGF0aW9uKTtcbiAgfVxuXG4gIHN0YXRpYyBnZXRWYWx1ZShvYmplY3QsIGZpZWxkUGF0aCwgZ2V0T3B0aW9uVHJhbnNsYXRpb24pIHtcbiAgICBjb25zdCBwYXJ0cyA9IGZpZWxkUGF0aCA/IGZpZWxkUGF0aC5zcGxpdCgnficpIDogW107XG4gICAgbGV0IHZhbHVlID0gb2JqZWN0O1xuICAgIHBhcnRzLnNvbWUocGFydCA9PiB7XG4gICAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICBjb25zdCBuZXdMaXN0ID0gW107XG4gICAgICAgIHZhbHVlLmZvckVhY2goY3VycmVudCA9PiB7XG4gICAgICAgICAgY29uc3QgbmV3RWxlbWVudCA9IGN1cnJlbnRbcGFydF07XG4gICAgICAgICAgaWYgKG5ld0VsZW1lbnQgIT09IHVuZGVmaW5lZCAmJiBuZXdFbGVtZW50ICE9PSBudWxsKSB7XG4gICAgICAgICAgICBuZXdMaXN0LnB1c2gobmV3RWxlbWVudCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdmFsdWUgPSBuZXdMaXN0O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFsdWUgPSB2YWx1ZVtwYXJ0XTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB2YWx1ZSA9PT0gdW5kZWZpbmVkIHx8IHZhbHVlID09PSBudWxsIHx8IHZhbHVlLmxlbmd0aCA9PT0gMDtcbiAgICB9KTtcbiAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZSAhPT0gbnVsbCAmJiB2YWx1ZS5sZW5ndGggIT09IDApIHtcbiAgICAgIGxldCB2YWx1ZXMgPSBbXS5jb25jYXQodmFsdWUpO1xuICAgICAgdmFsdWVzID0gdmFsdWVzLm1hcCh2YWwgPT4ge1xuICAgICAgICBpZiAodmFsLnZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICByZXR1cm4gdmFsO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBnZXRPcHRpb25UcmFuc2xhdGlvbih2YWwsIHRoaXMuX2xhbmcsIHRoaXMuX2RlZmF1bHRMYW5nKTtcbiAgICAgIH0pO1xuICAgICAgdmFsdWUgPSB2YWx1ZSBpbnN0YW5jZW9mIEFycmF5ID8gdmFsdWVzIDogdmFsdWVzWzBdO1xuICAgIH1cbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cbn1cbiIsIi8qIGVzbGludC1kaXNhYmxlIGNsYXNzLW1ldGhvZHMtdXNlLXRoaXMgKi9cbmltcG9ydCBBY3Rpdml0eUNvbnN0YW50cyBmcm9tICcuLi91dGlsL0FjdGl2aXR5Q29uc3RhbnRzJztcbmltcG9ydCBFcnJvckNvbnN0YW50cyBmcm9tICcuLi8uLi91dGlscy9jb25zdGFudHMvRXJyb3JDb25zdGFudHMnO1xuaW1wb3J0IENvbnN0YW50cyBmcm9tICcuLi8uLi91dGlscy9Db25zdGFudHMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDdXJyZW5jeVJhdGVzTWFuYWdlciB7XG4gIGNvbnN0cnVjdG9yKGN1cnJlbmN5UmF0ZXMsIGJhc2VDdXJyZW5jeSwgdHJhbnNsYXRlLCBkYXRlVXRpbHMsIGVycm9yTm90aWZpY2F0aW9uSGVscGVyKSB7XG4gICAgdGhpcy5fY3VycmVuY3lSYXRlcyA9IGN1cnJlbmN5UmF0ZXM7XG4gICAgdGhpcy5fYmFzZUN1cnJlbmN5ID0gYmFzZUN1cnJlbmN5O1xuICAgIHRoaXMuX2N1cnJuY2llc1dpdGhFeGNoYW5nZVJhdGVzID0gdGhpcy5fZ2V0Q3VycmVuY2llc1dpdGhFeGNoYW5nZVJhdGVzKCk7XG4gICAgdGhpcy5fdHJhbnNsYXRlID0gdHJhbnNsYXRlO1xuICAgIHRoaXMuX2RhdGVVdGlscyA9IGRhdGVVdGlscztcbiAgICB0aGlzLl9lcnJvck5vdGlmaWNhdGlvbkhlbHBlciA9IGVycm9yTm90aWZpY2F0aW9uSGVscGVyO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCBvZiBjdXJyZW5jaWVzIHRoYXQgaGFzIGF0IGxlYXN0IG9uZSBleGNoYW5nZSByYXRlXG4gICAqIEByZXR1cm4ge1NldDxhbnk+IHwgKn1cbiAgICovXG4gIGdldCBjdXJyZW5jaWVzV2l0aEV4Y2hhbmdlUmF0ZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2N1cnJuY2llc1dpdGhFeGNoYW5nZVJhdGVzO1xuICB9XG5cbiAgLyoqXG4gICAqIEN1cnJlbmN5IGNvbnZlcnNpb24gdXRpbGl0eS4gSWYgd2UgaGF2ZSB0aGUgZGlyZWN0IHJhdGUgaXQgd2lsbCBjb252ZXJ0IGZyb20gY3VycmVuY3lGcm9tIHRvIGN1cnJlbmN5VG8gaW4gdGhlXG4gICAqIGdpdmVuIGRhdGUuIElmIHdlIGRvbid0IGhhdmUgdGhlIHNhaWQgY3VycmVuY3kgaXQgd2lsbCB0cnkgdG8gc2VhcmNoIHRoZSBpbnZlcnNlIHJhdGUgYW5kIHVzZSAxL3guIElmIHRoZSBpbnZlcnNlXG4gICAqIHJhdGUgaXMgYWxzbyBub3QgQXZhaWxhYmxlIGFuIGVycm9yIHdpbGwgYmUgdGhyb3duXG4gICAqIEBwYXJhbSBjdXJyZW5jeUZyb20gY3VycmVuY3kgY29kZSBmcm9tIHRoZSBjdXJyZW5jeSB3ZSBhcmUgY29udmVydGluZyBmcm9tXG4gICAqIEBwYXJhbSBjdXJyZW5jeVRvIGN1cnJlbmN5IGNvZGUgZnJvbSB0aGUgY3VycmVuY3kgd2UgYXJlIGNvbnZlcnRpbmcgdG9cbiAgICogQHBhcmFtIGRhdGVUb0ZpbmQgZGF0ZSBmb3Igd2hpY2ggd2UgYXJlIGRvaW5nIHRoZSBjb252ZXJzaW9uLiBJdCBpcyBleHBlY3RlZCBpbiB5eXl5LW1tLWRkXG4gICAqIEByZXR1cm5zIHsqfFByb21pc2UuPFRSZXN1bHQ+fVxuICAgKi9cbiAgY29udmVydEN1cnJlbmN5KGN1cnJlbmN5RnJvbSwgY3VycmVuY3lUbywgZGF0ZVRvRmluZCwgZml4ZWRFeGNoYW5nZVJhdGUpIHtcbiAgICBpZiAoY3VycmVuY3lGcm9tID09PSBjdXJyZW5jeVRvKSB7XG4gICAgICByZXR1cm4gQ29uc3RhbnRzLlJBVEVfU0FNRV9DVVJSRU5DWTtcbiAgICB9XG4gICAgaWYgKGZpeGVkRXhjaGFuZ2VSYXRlICYmIGZpeGVkRXhjaGFuZ2VSYXRlID4gMCkge1xuICAgICAgcmV0dXJuICh0aGlzLmNvbnZlcnRDdXJyZW5jeSh0aGlzLl9iYXNlQ3VycmVuY3ksIGN1cnJlbmN5VG8sIGRhdGVUb0ZpbmQsIG51bGwpIC9cbiAgICAgICAgZml4ZWRFeGNoYW5nZVJhdGUpO1xuICAgIH1cbiAgICBjb25zdCB0aW1lRGF0ZVRvRmluZCA9IChuZXcgRGF0ZShgJHtkYXRlVG9GaW5kfSAke0NvbnN0YW50cy5DVVJSRU5DWV9IT1VSfWApKS5nZXRUaW1lKCk7XG4gICAgaWYgKHRoaXMuX2N1cnJlbmN5UmF0ZXMpIHtcbiAgICAgIGNvbnN0IGN1cnJlbmNpZXNUb1NlYXJjaERpcmVjdCA9IHRoaXMuX2N1cnJlbmN5UmF0ZXMuZmluZCgoaXRlbSkgPT5cbiAgICAgICAgaXRlbVtDb25zdGFudHMuQ1VSUkVOQ1lfUEFJUl0uZnJvbSA9PT0gY3VycmVuY3lGcm9tICYmIGl0ZW1bQ29uc3RhbnRzLkNVUlJFTkNZX1BBSVJdLnRvID09PSBjdXJyZW5jeVRvXG4gICAgICApO1xuICAgICAgaWYgKGN1cnJlbmNpZXNUb1NlYXJjaERpcmVjdCkge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRFeGNoYW5nZVJhdGUoY3VycmVuY2llc1RvU2VhcmNoRGlyZWN0LCB0aW1lRGF0ZVRvRmluZCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBkaXJlY3Qgbm90IGZvdW5kXG4gICAgICAgIGNvbnN0IGN1cnJlbmNpZXNUb1NlYXJjaEludmVyc2UgPVxuICAgICAgICAgIHRoaXMuX2N1cnJlbmN5UmF0ZXMuZmluZCgoaXRlbSkgPT5cbiAgICAgICAgICAgIGl0ZW1bQ29uc3RhbnRzLkNVUlJFTkNZX1BBSVJdLmZyb20gPT09IGN1cnJlbmN5VG8gJiYgaXRlbVtDb25zdGFudHMuQ1VSUkVOQ1lfUEFJUl0udG8gPT09XG4gICAgICAgICAgICBjdXJyZW5jeUZyb20pO1xuICAgICAgICBpZiAoY3VycmVuY2llc1RvU2VhcmNoSW52ZXJzZSkge1xuICAgICAgICAgIHJldHVybiAxIC8gdGhpcy5nZXRFeGNoYW5nZVJhdGUoY3VycmVuY2llc1RvU2VhcmNoSW52ZXJzZSwgdGltZURhdGVUb0ZpbmQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmNvbnZlcnRWaWFCYXNlQ3VycmVuY3koY3VycmVuY3lGcm9tLCBjdXJyZW5jeVRvLCB0aW1lRGF0ZVRvRmluZCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgdGhpcy5fZ2V0Q3VycmVuY3lFcnJvcignQ3VycmVuY3lSYXRlc05vdEluaXRpYWxpemVkJyk7XG4gICAgfVxuICB9XG5cbiAgY29udmVydEZ1bmRpbmdEZXRhaWxzVG9DdXJyZW5jeShmdW5kaW5nRGV0YWlscywgY3VycmVuY3lUbykge1xuICAgIGxldCB0b3RhbCA9IDA7XG4gICAgZnVuZGluZ0RldGFpbHMuZm9yRWFjaChmZCA9PiB7XG4gICAgICB0b3RhbCArPSB0aGlzLmNvbnZlcnRUcmFuc2FjdGlvbkFtb3VudFRvQ3VycmVuY3koZmQsIGN1cnJlbmN5VG8pO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHRvdGFsO1xuICB9XG5cbiAgY29udmVydFRyYW5zYWN0aW9uQW1vdW50VG9CYXNlQ3VycmVuY3koZnVuZGluZ0RldGFpbCkge1xuICAgIHJldHVybiB0aGlzLmNvbnZlcnRUcmFuc2FjdGlvbkFtb3VudFRvQ3VycmVuY3koZnVuZGluZ0RldGFpbCwgdGhpcy5fYmFzZUN1cnJlbmN5KTtcbiAgfVxuXG4gIGNvbnZlcnRBbW91bnRUb0N1cnJlbmN5KGFtb3VudCwgY3VycmVuY3lGcm9tLCBkYXRlLCBmaXhlZEV4Y2hhbmdlUmF0ZSwgY3VycmVuY3lUbykge1xuICAgIGNvbnN0IGN1cnJlbmN5UmF0ZSA9IHRoaXMuY29udmVydEN1cnJlbmN5KGN1cnJlbmN5RnJvbSwgY3VycmVuY3lUbyxcbiAgICAgIHRoaXMuX2RhdGVVdGlscy5mb3JtYXREYXRlRm9yQVBJKGRhdGUpLCBmaXhlZEV4Y2hhbmdlUmF0ZSk7XG4gICAgcmV0dXJuIGFtb3VudCAqIGN1cnJlbmN5UmF0ZTtcbiAgfVxuXG4gIGNvbnZlcnRUcmFuc2FjdGlvbkFtb3VudFRvQ3VycmVuY3koZnVuZGluZ0RldGFpbCwgY3VycmVuY3lUbykge1xuICAgIGNvbnN0IGZpeGVkRXhjaGFuZ2VSYXRlID0gZnVuZGluZ0RldGFpbFtBY3Rpdml0eUNvbnN0YW50cy5GSVhFRF9FWENIQU5HRV9SQVRFXTtcbiAgICBjb25zdCBjdXJyZW5jeUZyb20gPSBmdW5kaW5nRGV0YWlsW0FjdGl2aXR5Q29uc3RhbnRzLkNVUlJFTkNZXS52YWx1ZTtcbiAgICBjb25zdCB0cmFuc2FjdGlvbkRhdGUgPSBmdW5kaW5nRGV0YWlsW0FjdGl2aXR5Q29uc3RhbnRzLlRSQU5TQUNUSU9OX0RBVEVdO1xuICAgIGNvbnN0IHRyYW5zYWN0aW9uQW1vdW50ID0gZnVuZGluZ0RldGFpbFtBY3Rpdml0eUNvbnN0YW50cy5UUkFOU0FDVElPTl9BTU9VTlRdO1xuICAgIHJldHVybiB0aGlzLmNvbnZlcnRBbW91bnRUb0N1cnJlbmN5KHRyYW5zYWN0aW9uQW1vdW50LCBjdXJyZW5jeUZyb20sIHRyYW5zYWN0aW9uRGF0ZSwgZml4ZWRFeGNoYW5nZVJhdGUsXG4gICAgICBjdXJyZW5jeVRvKTtcbiAgfVxuXG4gIGdldEV4Y2hhbmdlUmF0ZShjdXJyZW5jaWVzVG9TZWFyY2gsIHRpbWVEYXRlVG9GaW5kKSB7XG4gICAgbGV0IGxvd2VyRW5kID0gMDtcbiAgICBsZXQgaGlnaGVyRW5kID0gY3VycmVuY2llc1RvU2VhcmNoLnJhdGVzLmxlbmd0aCAtIDE7XG4gICAgd2hpbGUgKGxvd2VyRW5kIDwgaGlnaGVyRW5kKSB7XG4gICAgICBjb25zdCBtaWRkbGUgPSBNYXRoLmZsb29yKChsb3dlckVuZCArIGhpZ2hlckVuZCkgLyAyKTtcbiAgICAgIGNvbnN0IGRpZmZlcmVuY2UgPSBNYXRoLmFicygobmV3IERhdGUoXG4gICAgICAgIGAke2N1cnJlbmNpZXNUb1NlYXJjaC5yYXRlc1ttaWRkbGVdLmRhdGV9ICAke0NvbnN0YW50cy5DVVJSRU5DWV9IT1VSfWApKVxuICAgICAgICAtIHRpbWVEYXRlVG9GaW5kKTtcbiAgICAgIGNvbnN0IGRpZmZlcmVuY2UxID0gTWF0aC5hYnMoKG5ldyBEYXRlKFxuICAgICAgICBgJHtjdXJyZW5jaWVzVG9TZWFyY2gucmF0ZXNbbWlkZGxlICsgMV0uZGF0ZX0gICR7Q29uc3RhbnRzLkNVUlJFTkNZX0hPVVJ9YCkpXG4gICAgICAgIC0gdGltZURhdGVUb0ZpbmQpO1xuICAgICAgaWYgKGRpZmZlcmVuY2UxIDw9IGRpZmZlcmVuY2UpIHtcbiAgICAgICAgbG93ZXJFbmQgPSBtaWRkbGUgKyAxO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaGlnaGVyRW5kID0gbWlkZGxlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gY3VycmVuY2llc1RvU2VhcmNoLnJhdGVzW2hpZ2hlckVuZF0ucmF0ZTtcbiAgfVxuXG4gIF9nZXRDdXJyZW5jeUVycm9yKGVycm9yTWVzYWdlKSB7XG4gICAgY29uc3Qgbm90aWZFcnJvckN1cnJlbmN5ID0gdGhpcy5fZXJyb3JOb3RpZmljYXRpb25IZWxwZXIuY3JlYXRlTm90aWZpY2F0aW9uKHtcbiAgICAgIG1lc3NhZ2U6IHRoaXMuX3RyYW5zbGF0ZShlcnJvck1lc2FnZSksXG4gICAgICBvcmlnaW46IEVycm9yQ29uc3RhbnRzLk5PVElGSUNBVElPTl9PUklHSU5fQ1VSUkVOQ1lfTUFOQUdFUlxuICAgIH0pO1xuICAgIHJldHVybiBub3RpZkVycm9yQ3VycmVuY3k7XG4gIH1cblxuICBjb252ZXJ0VmlhQmFzZUN1cnJlbmN5KGN1cnJlbmN5RnJvbSwgY3VycmVuY3lUbywgdGltZURhdGVUb0ZpbmQpIHtcbiAgICBjb25zdCByYXRlRnJvbVRvQmFzZSA9IHRoaXMuX2N1cnJlbmN5UmF0ZXMuZmluZCgoaXRlbSkgPT5cbiAgICAgIGl0ZW1bQ29uc3RhbnRzLkNVUlJFTkNZX1BBSVJdLmZyb20gPT09IGN1cnJlbmN5RnJvbSAmJiBpdGVtW0NvbnN0YW50cy5DVVJSRU5DWV9QQUlSXS50byA9PT1cbiAgICAgIHRoaXMuX2Jhc2VDdXJyZW5jeVxuICAgICk7XG4gICAgY29uc3QgcmF0ZUJhc2VUb1RvID0gdGhpcy5fY3VycmVuY3lSYXRlcy5maW5kKChpdGVtKSA9PlxuICAgICAgaXRlbVtDb25zdGFudHMuQ1VSUkVOQ1lfUEFJUl0uZnJvbSA9PT0gdGhpcy5fYmFzZUN1cnJlbmN5ICYmIGl0ZW1bQ29uc3RhbnRzLkNVUlJFTkNZX1BBSVJdLnRvID09PVxuICAgICAgY3VycmVuY3lUb1xuICAgICk7XG4gICAgaWYgKHJhdGVGcm9tVG9CYXNlICYmIHJhdGVCYXNlVG9Ubykge1xuICAgICAgLy8gaWYgd2UgaGF2ZSBib3RoIGN1cnJlbmNpZXMgd2UganVzdCByZXR1cm4gdGhlIHByb2R1Y3Qgb2YgZWNoIHJhdGVcbiAgICAgIHJldHVybiB0aGlzLmdldEV4Y2hhbmdlUmF0ZShyYXRlRnJvbVRvQmFzZSwgdGltZURhdGVUb0ZpbmQpICogdGhpcy5nZXRFeGNoYW5nZVJhdGUocmF0ZUJhc2VUb1RvLCB0aW1lRGF0ZVRvRmluZCk7XG4gICAgfSBlbHNlIGlmIChyYXRlRnJvbVRvQmFzZSkge1xuICAgICAgLy8gaWYgZWl0aGVyIG9mIHRoZW0gaXMgbm90IGZvdW5kIHdlIHRyeSB0byBmaW5kIHRoZSBpbnZlcnNlXG4gICAgICAvLyB3ZSBnZXQgdGhlIGludmVyc2Ugb2YgcmF0ZUJhc2VUb1RvXG4gICAgICBjb25zdCByYXRlVG9Ub0Jhc2UgPSB0aGlzLl9jdXJyZW5jeVJhdGVzLmZpbmQoKGl0ZW0pID0+XG4gICAgICAgIGl0ZW1bQ29uc3RhbnRzLkNVUlJFTkNZX1BBSVJdLmZyb20gPT09IGN1cnJlbmN5VG8gJiYgaXRlbVtDb25zdGFudHMuQ1VSUkVOQ1lfUEFJUl0udG8gPT09XG4gICAgICAgIHRoaXMuX2Jhc2VDdXJyZW5jeVxuICAgICAgKTtcbiAgICAgIGlmIChyYXRlVG9Ub0Jhc2UpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0RXhjaGFuZ2VSYXRlKHJhdGVGcm9tVG9CYXNlLCB0aW1lRGF0ZVRvRmluZClcbiAgICAgICAgICAqICgxIC8gdGhpcy5nZXRFeGNoYW5nZVJhdGUocmF0ZVRvVG9CYXNlLCB0aW1lRGF0ZVRvRmluZCkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIEVycm9yQ29uc3RhbnRzLlJBVEVfQ1VSUkVOQ1lfTk9UX0ZPVU5EO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAocmF0ZUJhc2VUb1RvKSB7XG4gICAgICBjb25zdCByYXRlQmFzZVRvRnJvbSA9IHRoaXMuX2N1cnJlbmN5UmF0ZXMuZmluZCgoaXRlbSkgPT5cbiAgICAgICAgaXRlbVtDb25zdGFudHMuQ1VSUkVOQ1lfUEFJUl0uZnJvbSA9PT0gdGhpcy5fYmFzZUN1cnJlbmN5ICYmIGl0ZW1bQ29uc3RhbnRzLkNVUlJFTkNZX1BBSVJdLnRvID09PVxuICAgICAgICBjdXJyZW5jeUZyb21cbiAgICAgICk7XG4gICAgICAvLyB3ZSB0cnkgdG8gZ2V0IHRoZSBpbnZlcnNlIG9mIHJhdGVGcm9tVG9CYXNlXG4gICAgICBpZiAocmF0ZUJhc2VUb0Zyb20pIHtcbiAgICAgICAgcmV0dXJuICgxIC8gdGhpcy5nZXRFeGNoYW5nZVJhdGUocmF0ZUJhc2VUb0Zyb20sIHRpbWVEYXRlVG9GaW5kKSlcbiAgICAgICAgICAqIHRoaXMuZ2V0RXhjaGFuZ2VSYXRlKHJhdGVCYXNlVG9UbywgdGltZURhdGVUb0ZpbmQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIEVycm9yQ29uc3RhbnRzLlJBVEVfQ1VSUkVOQ1lfTk9UX0ZPVU5EO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gRXJyb3JDb25zdGFudHMuUkFURV9DVVJSRU5DWV9OT1RfRk9VTkQ7XG4gICAgfVxuICB9XG5cbiAgX2dldEN1cnJlbmNpZXNXaXRoRXhjaGFuZ2VSYXRlcygpIHtcbiAgICBjb25zdCBjcyA9IG5ldyBTZXQoKTtcbiAgICBpZiAodGhpcy5fY3VycmVuY3lSYXRlcykge1xuICAgICAgdGhpcy5fY3VycmVuY3lSYXRlcy5mb3JFYWNoKGV4Y2hhbmdlUmF0ZXMgPT4ge1xuICAgICAgICBjcy5hZGQoZXhjaGFuZ2VSYXRlc1tDb25zdGFudHMuQ1VSUkVOQ1lfUEFJUl0uZnJvbSk7XG4gICAgICAgIGNzLmFkZChleGNoYW5nZVJhdGVzW0NvbnN0YW50cy5DVVJSRU5DWV9QQUlSXS50byk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIGNzO1xuICB9XG59XG4iLCJpbXBvcnQgKiBhcyBGUEMgZnJvbSAnLi4vLi4vdXRpbHMvRmllbGRQYXRoQ29uc3RhbnRzJztcbmltcG9ydCBGaWVsZHNNYW5hZ2VyIGZyb20gJy4vRmllbGRzTWFuYWdlcic7XG5pbXBvcnQgQ29uc3RhbnRzIGZyb20gJy4uLy4uL3V0aWxzL0NvbnN0YW50cyc7XG5pbXBvcnQgQWN0aXZpdHlDb25zdGFudHMgZnJvbSAnLi4vdXRpbC9BY3Rpdml0eUNvbnN0YW50cyc7XG5pbXBvcnQgQ3VycmVuY3lSYXRlc01hbmFnZXIgZnJvbSAnLi4vdXRpbC9DdXJyZW5jeVJhdGVzTWFuYWdlcic7XG5cblxuLyoqXG4gKiBQb3NzaWJsZSBWYWx1ZXMgbWFuYWdlciB0aGF0IGFsbG93cyB0byBmaWxsIGluIGFkZGl0aW9uYWwgaW5mb3JtYXRpb24gYW5kIHRyYW5zZm9ybWF0aW9uc1xuICogQGF1dGhvciBOYWRlamRhIE1hbmRyZXNjdVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb3NzaWJsZVZhbHVlc01hbmFnZXIge1xuICBzdGF0aWMgX2xhbmdTdGF0ZSA9IHtcbiAgICBsYW5nOiBDb25zdGFudHMuTEFOR1VBR0VfRU5HTElTSCxcbiAgICBkZWZhdWx0TGFuZzogQ29uc3RhbnRzLkxBTkdVQUdFX0VOR0xJU0hcbiAgfTtcblxuICBzdGF0aWMgX2xvZ2dlcjtcblxuICBzdGF0aWMgc2V0TGFuZ1N0YXRlKGxhbmdTdGF0ZSkge1xuICAgIFBvc3NpYmxlVmFsdWVzTWFuYWdlci5fbGFuZ1N0YXRlID0gbGFuZ1N0YXRlO1xuICB9XG5cbiAgc3RhdGljIHNldExvZ2dlcihMb2dnZXIpIHtcbiAgICBQb3NzaWJsZVZhbHVlc01hbmFnZXIuX2xvZ2dlciA9IG5ldyBMb2dnZXIoJ1Bvc3NpYmxlIHZhbHVlcyBtYW5hZ2VyJyk7XG4gIH1cbiAgc3RhdGljIGJ1aWxkRm9ybWF0dGVkSGllcmFyY2hpY2FsVmFsdWVzKG9wdGlvbnMpIHtcbiAgICAvLyBUT0RPIG9wdGltaXplXG4gICAgY29uc3QgaE9wdGlvbnMgPSB7fTtcbiAgICBPYmplY3QudmFsdWVzKG9wdGlvbnMpLmZvckVhY2gob3B0aW9uID0+IHtcbiAgICAgIGhPcHRpb25zW29wdGlvbi5pZF0gPSBQb3NzaWJsZVZhbHVlc01hbmFnZXIuYnVpbGRIaWVyYXJjaGljYWxEYXRhKG9wdGlvbnMsIG9wdGlvbi5pZCk7XG4gICAgfSk7XG4gICAgcmV0dXJuIGhPcHRpb25zO1xuICB9XG5cbiAgc3RhdGljIGJ1aWxkSGllcmFyY2hpY2FsRGF0YShvcHRpb25zLCBzZWxlY3RlZElkKSB7XG4gICAgY29uc3Qgb3B0aW9uID0gT2JqZWN0LmFzc2lnbih7fSwgb3B0aW9uc1tzZWxlY3RlZElkXSk7XG4gICAgY29uc3QgdmFsdWVQYXJ0cyA9IFBvc3NpYmxlVmFsdWVzTWFuYWdlci5nZXRIaWVyYXJjaGljYWxWYWx1ZShvcHRpb25zLCBzZWxlY3RlZElkKTtcbiAgICBvcHRpb25bQWN0aXZpdHlDb25zdGFudHMuSElFUkFSQ0hJQ0FMX1ZBTFVFXSA9IFBvc3NpYmxlVmFsdWVzTWFuYWdlci5mb3JtYXRWYWx1ZVBhcnRzKHZhbHVlUGFydHMpO1xuICAgIG9wdGlvbltBY3Rpdml0eUNvbnN0YW50cy5ISUVSQVJDSElDQUxfVkFMVUVfREVQVEhdID0gKHZhbHVlUGFydHMgJiYgdmFsdWVQYXJ0cyBpbnN0YW5jZW9mIEFycmF5KSA/XG4gICAgICB2YWx1ZVBhcnRzLmxlbmd0aCA6IDA7XG4gICAgcmV0dXJuIG9wdGlvbjtcbiAgfVxuXG4gIHN0YXRpYyBnZXRIaWVyYXJjaGljYWxWYWx1ZShvcHRpb25zLCBzZWxlY3RlZElkKSB7XG4gICAgY29uc3QgbmFtZVBhcnRzID0gW107XG4gICAgbGV0IGN1cnJlbnQgPSBvcHRpb25zW3NlbGVjdGVkSWRdO1xuICAgIHdoaWxlIChjdXJyZW50KSB7XG4gICAgICBuYW1lUGFydHMucHVzaChQb3NzaWJsZVZhbHVlc01hbmFnZXIuZ2V0T3B0aW9uVHJhbnNsYXRpb24oY3VycmVudCkpO1xuICAgICAgY3VycmVudCA9IG9wdGlvbnNbY3VycmVudC5wYXJlbnRJZF07XG4gICAgfVxuICAgIHJldHVybiBuYW1lUGFydHM7XG4gIH1cblxuICBzdGF0aWMgZm9ybWF0VmFsdWVQYXJ0cyh2YWx1ZVBhcnRzKSB7XG4gICAgcmV0dXJuICh2YWx1ZVBhcnRzICYmIHZhbHVlUGFydHMgaW5zdGFuY2VvZiBBcnJheSkgPyBgWyR7dmFsdWVQYXJ0cy5yZXZlcnNlKCkuam9pbignXVsnKX1dYCA6IHZhbHVlUGFydHM7XG4gIH1cblxuICAvKipcbiAgICogRmlsbHMgaGllcmFyY2hpY2FsIGRlcHRoIG9mIGVhY2ggb3B0aW9uXG4gICAqIEBwYXJhbSBvcHRpb25zXG4gICAqL1xuICBzdGF0aWMgZmlsbEhpZXJhcmNoaWNhbERlcHRoKG9wdGlvbnMpIHtcbiAgICBPYmplY3QudmFsdWVzKG9wdGlvbnMpLmZvckVhY2gob3B0aW9uID0+IHtcbiAgICAgIFBvc3NpYmxlVmFsdWVzTWFuYWdlci5fZmlsbEhpZXJhcmNoaWNhbERlcHRoKG9wdGlvbnMsIG9wdGlvbik7XG4gICAgfSk7XG4gICAgcmV0dXJuIG9wdGlvbnM7XG4gIH1cblxuICBzdGF0aWMgX2ZpbGxIaWVyYXJjaGljYWxEZXB0aChvcHRpb25zLCBvcHRpb24pIHtcbiAgICBpZiAoIW9wdGlvbikge1xuICAgICAgUG9zc2libGVWYWx1ZXNNYW5hZ2VyLl9sb2dnZXIuZXJyb3IoYG9wdGlvbiBpcyB1bnNwZWNpZmllZDogJHtvcHRpb259YCk7XG4gICAgICByZXR1cm4gMDtcbiAgICB9XG4gICAgbGV0IGRlcHRoID0gb3B0aW9uW0FjdGl2aXR5Q29uc3RhbnRzLkhJRVJBUkNISUNBTF9WQUxVRV9ERVBUSF07XG4gICAgaWYgKGRlcHRoID09PSB1bmRlZmluZWQpIHtcbiAgICAgIC8vIFNvIGZhciBpdCBpcyBiYXNlZCBvbiB0aGUgY3VycmVudCBsb2NhdGlvbnMgZXh0cmEgaW5mbyBhcHByb2FjaFxuICAgICAgaWYgKG9wdGlvbi5wYXJlbnRJZCkge1xuICAgICAgICBjb25zdCBwYXJlbnQgPSBvcHRpb25zW29wdGlvbi5wYXJlbnRJZF07XG4gICAgICAgIGRlcHRoID0gMSArIFBvc3NpYmxlVmFsdWVzTWFuYWdlci5fZmlsbEhpZXJhcmNoaWNhbERlcHRoKG9wdGlvbnMsIHBhcmVudCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkZXB0aCA9IDA7XG4gICAgICB9XG4gICAgICBvcHRpb25bQWN0aXZpdHlDb25zdGFudHMuSElFUkFSQ0hJQ0FMX1ZBTFVFX0RFUFRIXSA9IGRlcHRoO1xuICAgIH1cbiAgICByZXR1cm4gZGVwdGg7XG4gIH1cblxuICBzdGF0aWMgZmluZE9wdGlvbihvcHRpb25zLCBpZCkge1xuICAgIHJldHVybiBPYmplY3QudmFsdWVzKG9wdGlvbnMpLmZpbmQobyA9PiBvLmlkID09PSBpZCk7XG4gIH1cblxuICBzdGF0aWMgZmluZE9wdGlvbkJ5VmFsdWUob3B0aW9ucywgdmFsdWUpIHtcbiAgICByZXR1cm4gT2JqZWN0LnZhbHVlcyhvcHRpb25zKS5maW5kKG8gPT4gby52YWx1ZSA9PT0gdmFsdWUpO1xuICB9XG5cbiAgc3RhdGljIGdldE9wdGlvblRyYW5zbGF0aW9uKG9wdGlvbikge1xuICAgIGxldCByZXNWYWwgPSBvcHRpb24udmFsdWU7XG4gICAgY29uc3QgdHJhbnNsYXRpb25zID0gb3B0aW9uWyd0cmFuc2xhdGVkLXZhbHVlJ107XG4gICAgaWYgKHRyYW5zbGF0aW9ucyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBjb25zdCBsYW5nU3RhdGUgPSBQb3NzaWJsZVZhbHVlc01hbmFnZXIuX2xhbmdTdGF0ZTtcbiAgICAgIHJlc1ZhbCA9IHRyYW5zbGF0aW9uc1tsYW5nU3RhdGUubGFuZ10gfHwgdHJhbnNsYXRpb25zW2xhbmdTdGF0ZS5kZWZhdWx0TGFuZ10gfHwgcmVzVmFsO1xuICAgIH1cbiAgICByZXR1cm4gcmVzVmFsO1xuICB9XG5cbiAgc3RhdGljIHNldFZpc2liaWxpdHkob3B0aW9ucywgZmllbGRQYXRoLCBjdXJyZW5jeVJhdGVzTWFuYWdlcjogQ3VycmVuY3lSYXRlc01hbmFnZXIsIGZpbHRlcnMsIGlzT1JGaWx0ZXIgPSBmYWxzZSxcbiAgICBzZWxlY3RlZElkKSB7XG4gICAgY29uc3QgaXNMb2NhdGlvbnMgPSBGUEMuTE9DQVRJT05fUEFUSCA9PT0gZmllbGRQYXRoO1xuICAgIGNvbnN0IGlzQ3VycmVuY3kgPSBGUEMuUEFUSFNfRk9SX0NVUlJFTkNZLmhhcyhmaWVsZFBhdGgpO1xuICAgIG9wdGlvbnMgPSB7IC4uLm9wdGlvbnMgfTtcbiAgICBPYmplY3QudmFsdWVzKG9wdGlvbnMpLmZvckVhY2gob3B0aW9uID0+IHtcbiAgICAgIG9wdGlvbi52aXNpYmxlID0gIWlzT1JGaWx0ZXI7XG4gICAgICBpZiAoaXNMb2NhdGlvbnMpIHtcbiAgICAgICAgb3B0aW9uLmRpc3BsYXlIaWVyYXJjaGljYWxWYWx1ZSA9IHRydWU7XG4gICAgICB9IGVsc2UgaWYgKGlzQ3VycmVuY3kpIHtcbiAgICAgICAgb3B0aW9uW0ZQQy5GSUVMRF9PUFRJT05fVVNBQkxFXSA9IFBvc3NpYmxlVmFsdWVzTWFuYWdlci5pc0N1cnJlbmN5T3B0aW9uVXNhYmxlKG9wdGlvbiwgY3VycmVuY3lSYXRlc01hbmFnZXIpO1xuICAgICAgICBpZiAoIW9wdGlvbltGUEMuRklFTERfT1BUSU9OX1VTQUJMRV0pIHtcbiAgICAgICAgICBvcHRpb24udmlzaWJsZSA9IG9wdGlvbi5pZCA9PT0gc2VsZWN0ZWRJZDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICAgIGlmIChmaWx0ZXJzKSB7XG4gICAgICBmaWx0ZXJzLmZvckVhY2goZmlsdGVyID0+IHtcbiAgICAgICAgY29uc3QgZmlsdGVyQnkgPSBmaWx0ZXIudmFsdWU7XG4gICAgICAgIE9iamVjdC52YWx1ZXMob3B0aW9ucykuZm9yRWFjaChvcHRpb24gPT4ge1xuICAgICAgICAgIGNvbnN0IG9wdGlvbkRhdGFUb0NoZWNrID0gRmllbGRzTWFuYWdlci5nZXRWYWx1ZShvcHRpb24sIGZpbHRlci5wYXRoKTtcbiAgICAgICAgICBpZiAoKGlzT1JGaWx0ZXIgfHwgb3B0aW9uLnZpc2libGUpICYmIG9wdGlvbkRhdGFUb0NoZWNrICYmIChcbiAgICAgICAgICAgIChvcHRpb25EYXRhVG9DaGVjayBpbnN0YW5jZW9mIEFycmF5ICYmIG9wdGlvbkRhdGFUb0NoZWNrLmluY2x1ZGVzKGZpbHRlckJ5KSkgfHxcbiAgICAgICAgICAgIChvcHRpb25EYXRhVG9DaGVjayA9PT0gZmlsdGVyQnkpKSkge1xuICAgICAgICAgICAgb3B0aW9uLnZpc2libGUgPSB0cnVlO1xuICAgICAgICAgIH0gZWxzZSBpZiAoaXNPUkZpbHRlcikge1xuICAgICAgICAgICAgLy8gRG8gbm90aGluZywga2VlcCBpdCB2aXNpYmxlL2ludmlzaWJsZS5cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgb3B0aW9uLnZpc2libGUgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBvcHRpb25zO1xuICB9XG5cbiAgc3RhdGljIGlzQ3VycmVuY3lPcHRpb25Vc2FibGUob3B0aW9uLCBjdXJyZW5jeVJhdGVzTWFuYWdlcjogQ3VycmVuY3lSYXRlc01hbmFnZXIpIHtcbiAgICBjb25zdCBoYXNFeGNoYW5nZVJhdGVzID0gY3VycmVuY3lSYXRlc01hbmFnZXIuY3VycmVuY2llc1dpdGhFeGNoYW5nZVJhdGVzLmhhcyhvcHRpb24udmFsdWUpO1xuICAgIGNvbnN0IGlzQWN0aXZlID0gb3B0aW9uLmV4dHJhX2luZm8gJiYgb3B0aW9uLmV4dHJhX2luZm8uYWN0aXZlO1xuICAgIHJldHVybiBpc0FjdGl2ZSAmJiBoYXNFeGNoYW5nZVJhdGVzO1xuICB9XG5cbiAgc3RhdGljIGdldFRyZWVTb3J0ZWRPcHRpb25zTGlzdChvcHRpb25zT2JqLCByZXZlcnNlU29ydE9wdGlvbnMpIHtcbiAgICBjb25zdCBhZGRlZCA9IG5ldyBTZXQoKTtcbiAgICBjb25zdCBvcHRpb25zTGlzdCA9IFtdO1xuICAgIGNvbnN0IGlkc1N0YWNrID0gT2JqZWN0LnZhbHVlcyhvcHRpb25zT2JqKS5maWx0ZXIobyA9PiAhby5wYXJlbnRJZCkuc29ydChyZXZlcnNlU29ydE9wdGlvbnMpXG4gICAgICAubWFwKG8gPT4gby5pZCk7XG4gICAgd2hpbGUgKGlkc1N0YWNrLmxlbmd0aCkge1xuICAgICAgY29uc3QgaWQgPSBpZHNTdGFjay5wb3AoKTtcbiAgICAgIGlmICghYWRkZWQuaGFzKGlkKSkge1xuICAgICAgICBjb25zdCBvcHRpb24gPSBvcHRpb25zT2JqW2lkXTtcbiAgICAgICAgaWYgKG9wdGlvbi5yZXZlcnNlU29ydGVkQ2hpbGRyZW4pIHtcbiAgICAgICAgICBpZHNTdGFjay5wdXNoKC4uLm9wdGlvbi5yZXZlcnNlU29ydGVkQ2hpbGRyZW4pO1xuICAgICAgICB9XG4gICAgICAgIGFkZGVkLmFkZChpZCk7XG4gICAgICAgIG9wdGlvbnNMaXN0LnB1c2gob3B0aW9uKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG9wdGlvbnNMaXN0O1xuICB9XG59XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBjbGFzcy1tZXRob2RzLXVzZS10aGlzICovXG5jb25zdCBGRUFUVVJFX01BTkFHRVIgPSAnRmVhdHVyZSBtYW5hZ2VyJztcblxuLyoqXG4gKiBGZWF0dXJlIE1hbmFnZXJcbiAqIEBhdXRob3IgTmFkZWpkYSBNYW5kcmVzY3VcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmVhdHVyZU1hbmFnZXIge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgc3RhdGljIF9jdXJyZW50Rk0gPSBuZXcgRmVhdHVyZU1hbmFnZXIoKTtcblxuICBjb25zdHJ1Y3RvcihmbVRyZWUsIExvZ2dlck1hbmFnZXIpIHtcbiAgICB0aGlzLl9mbVRyZWUgPSBmbVRyZWU7XG4gICAgaWYgKExvZ2dlck1hbmFnZXIpIHtcbiAgICAgIHRoaXMubG9nZ2VyTWFuYWdlciA9IExvZ2dlck1hbmFnZXI7XG4gICAgfVxuICB9XG4gIHNldCBmbVRyZWUoZm1UcmVlKSB7XG4gICAgdGhpcy5fZm1UcmVlID0gZm1UcmVlO1xuICB9XG4gIHNldCBsb2dnZXJNYW5hZ2VyKExvZ2dlck1hbmFnZXIpIHtcbiAgICB0aGlzLl9sb2dnZXJNYW5hZ2VyID0gbmV3IExvZ2dlck1hbmFnZXIoRkVBVFVSRV9NQU5BR0VSKTtcbiAgfVxuXG4gIHN0YXRpYyBzZXRMb2dnZXJNYW5hZ2VyKExvZ2dlck1hbmFnZXIpIHtcbiAgICBGZWF0dXJlTWFuYWdlci5fY3VycmVudEZNLmxvZ2dlck1hbmFnZXIgPSBMb2dnZXJNYW5hZ2VyO1xuICB9XG4gIHN0YXRpYyBzZXRGTVRyZWUoZm1UcmVlKSB7XG4gICAgRmVhdHVyZU1hbmFnZXIuX2N1cnJlbnRGTS5mbVRyZWUgPSBmbVRyZWU7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2tzIGlmIHRoZSBnaXZlbiBGTSBwYXRoIGlzIGZ1bGx5IGVuYWJsZWQgb3Igb25seSBsYXN0IHNlZ21lbnQgaXMgZW5hYmxlZFxuICAgKiBAcGFyYW0gZm1QYXRoIHRoZSBGTSBwYXRoLCBlLmcuICcvUFJPSkVDVCBNQU5BR0VNRU5UL0Z1bmRpbmcvRnVuZGluZyBJbmZvcm1hdGlvbi9EZWxpdmVyeSByYXRlJ1xuICAgKiBAcGFyYW0gb25seUxhc3RTZWdtZW50IHNwZWNpZmllcyBpZiB0byBjaGVjayBpZiBvbmx5IHRoZSBsYXN0IHNlZ21lbnQgaXMgZW5hYmxlZCAodGhlIEFNUCBiZWhhdmlvciBmb3Igc29tZSBjYXNlcylcbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICovXG4gIHN0YXRpYyBpc0ZNU2V0dGluZ0VuYWJsZWQoZm1QYXRoLCBvbmx5TGFzdFNlZ21lbnQpIHtcbiAgICByZXR1cm4gRmVhdHVyZU1hbmFnZXIuX2N1cnJlbnRGTS5pc0ZNU2V0dGluZ0VuYWJsZWQoZm1QYXRoLCBvbmx5TGFzdFNlZ21lbnQpO1xuICB9XG5cbiAgc3RhdGljIGhhc0ZNU2V0dGluZyhmbVBhdGgpIHtcbiAgICByZXR1cm4gRmVhdHVyZU1hbmFnZXIuX2N1cnJlbnRGTS5oYXNGTVNldHRpbmcoZm1QYXRoKTtcbiAgfVxuXG4gIGlzRk1TZXR0aW5nRW5hYmxlZChmbVBhdGgsIG9ubHlMYXN0U2VnbWVudCkge1xuICAgIHRoaXMuX2xvZ2dlck1hbmFnZXIuZGVidWcoJ2lzRk1TZXR0aW5nRW5hYmxlZCcpO1xuICAgIGlmICh0aGlzLl9mbVRyZWUpIHtcbiAgICAgIGxldCBsYXN0Rk1TdWJUcmVlID0gdGhpcy5fZm1UcmVlO1xuICAgICAgY29uc3Qgc2VnbWVudHMgPSB0aGlzLl9nZXRQYXRoU2VnbWVudHMoZm1QYXRoKTtcbiAgICAgIGNvbnN0IGZvdW5kTGFzdEZNU3ViVHJlZSA9IHNlZ21lbnRzLmV2ZXJ5KHNlZ21lbnQgPT4ge1xuICAgICAgICBsYXN0Rk1TdWJUcmVlID0gbGFzdEZNU3ViVHJlZVtzZWdtZW50XTtcbiAgICAgICAgcmV0dXJuIGxhc3RGTVN1YlRyZWUgIT09IHVuZGVmaW5lZCAmJiAobGFzdEZNU3ViVHJlZS5fX2VuYWJsZWQgfHwgb25seUxhc3RTZWdtZW50KTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIGZvdW5kTGFzdEZNU3ViVHJlZSAmJiBsYXN0Rk1TdWJUcmVlLl9fZW5hYmxlZDtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaGFzRk1TZXR0aW5nKGZtUGF0aCkge1xuICAgIGNvbnN0IGZtU2V0dGluZyA9IHRoaXMuZmluZEZNU2V0dGluZyhmbVBhdGgpO1xuICAgIHJldHVybiBmbVNldHRpbmcgJiYgZm1TZXR0aW5nLl9fZW5hYmxlZCAhPT0gdW5kZWZpbmVkO1xuICB9XG5cbiAgZmluZEZNU2V0dGluZyhmbVBhdGgpIHtcbiAgICBjb25zdCBzZWdtZW50cyA9IHRoaXMuX2dldFBhdGhTZWdtZW50cyhmbVBhdGgpO1xuICAgIHJldHVybiBzZWdtZW50cy5yZWR1Y2UoKGN1cnJlbnRGTVNldHRpbmcsIHNlZ21lbnQpID0+IGN1cnJlbnRGTVNldHRpbmcgJiYgY3VycmVudEZNU2V0dGluZ1tzZWdtZW50XVxuICAgICAgLCB0aGlzLl9mbVRyZWUgfHwge30pO1xuICB9XG5cbiAgc2V0Rk1TZXR0aW5nKGZtUGF0aCwgZW5hYmxlZCkge1xuICAgIGlmICh0aGlzLl9mbVRyZWUpIHtcbiAgICAgIGNvbnN0IHNlZ21lbnRzID0gdGhpcy5fZ2V0UGF0aFNlZ21lbnRzKGZtUGF0aCk7XG4gICAgICBjb25zdCBsYXN0Rk1TdWJUcmVlID0gc2VnbWVudHMucmVkdWNlKChjdXJyZW50Rk1UcmVlLCBzZWdtZW50KSA9PiB7XG4gICAgICAgIGxldCBzZWdtZW50Rk0gPSBjdXJyZW50Rk1UcmVlW3NlZ21lbnRdO1xuICAgICAgICBpZiAoc2VnbWVudEZNID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBzZWdtZW50Rk0gPSB7fTtcbiAgICAgICAgICBjdXJyZW50Rk1UcmVlW3NlZ21lbnRdID0gc2VnbWVudEZNO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzZWdtZW50Rk07XG4gICAgICB9LCB0aGlzLl9mbVRyZWUpO1xuICAgICAgbGFzdEZNU3ViVHJlZS5fX2VuYWJsZWQgPSBlbmFibGVkO1xuICAgIH1cbiAgfVxuXG4gIF9nZXRQYXRoU2VnbWVudHMoZm1QYXRoKSB7XG4gICAgLy8gaWdub3JlIGZpcnN0IFwiL1wiIHRvIGV4Y2x1ZGUgZW1wdHkgc3RyaW5nIGZyb20gdGhlIHNwbGl0XG4gICAgcmV0dXJuIGZtUGF0aC5zdWJzdHJpbmcoMSkuc3BsaXQoJy8nKTtcbiAgfVxufVxuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCwgUHJvcFR5cGVzIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgT3ZlcmxheVRyaWdnZXIsIFRvb2x0aXAgfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xuXG5sZXQgbG9nZ2VyID0gbnVsbDtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQVBMYWJlbCBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBsYWJlbDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIGRvbnRUcmFuc2xhdGU6IFByb3BUeXBlcy5ib29sLFxuICAgIGxhYmVsQ2xhc3M6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgLyogZGVjb3JhdG9yOiBQcm9wVHlwZXMuZnVuYywgLy8gVE9ETzogVG8gYmUgaW1wbGVtZW50ZWQuICovXG4gICAgc2VwYXJhdG9yOiBQcm9wVHlwZXMuYm9vbCxcbiAgICB0b29sdGlwOiBQcm9wVHlwZXMuc3RyaW5nXG4gIH07XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgY29uc3QgeyBMb2dnZXIgfSA9IHRoaXMucHJvcHM7XG4gICAgbG9nZ2VyID0gbmV3IExvZ2dlcignQVAgTGFiZWwnKTtcbiAgICBsb2dnZXIuZGVidWcoJ2NvbnN0cnVjdG9yJyk7XG4gIH1cblxuICBnZXRDb250ZW50KCkge1xuICAgIGNvbnN0IHsgdHJhbnNsYXRlIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IGxhYmVsID0gKHRoaXMucHJvcHMuZG9udFRyYW5zbGF0ZSA9PT0gdHJ1ZSA/IHRoaXMucHJvcHMubGFiZWwgOiB0cmFuc2xhdGUodGhpcy5wcm9wcy5sYWJlbCkpO1xuICAgIGNvbnN0IGxhYmVsQ2xhc3MgPSAodGhpcy5wcm9wcy5sYWJlbENsYXNzID8gdGhpcy5wcm9wcy5sYWJlbENsYXNzIDogJycpO1xuICAgIHJldHVybiAoPGRpdiBjbGFzc05hbWU9e2xhYmVsQ2xhc3N9PjxzcGFuPntsYWJlbH08L3NwYW4+e3RoaXMucHJvcHMuc2VwYXJhdG9yID8gPGhyIC8+IDogJyd9PC9kaXY+KTtcbiAgfVxuXG4gIHRvb2x0aXAoKSB7XG4gICAgY29uc3QgeyB0b29sdGlwLCBkb250VHJhbnNsYXRlLCB0cmFuc2xhdGUgfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIDxUb29sdGlwIGlkPVwidG9vbHRpcFwiPntkb250VHJhbnNsYXRlID8gdG9vbHRpcCA6IHRyYW5zbGF0ZSh0aGlzLnByb3BzLnRvb2x0aXApfTwvVG9vbHRpcD47XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgaWYgKHRoaXMucHJvcHMudG9vbHRpcCkge1xuICAgICAgcmV0dXJuICg8T3ZlcmxheVRyaWdnZXIgcGxhY2VtZW50PVwicmlnaHRcIiBvdmVybGF5PXt0aGlzLnRvb2x0aXAoKX0+XG4gICAgICAgIHt0aGlzLmdldENvbnRlbnQoKX1cbiAgICAgIDwvT3ZlcmxheVRyaWdnZXI+KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRoaXMuZ2V0Q29udGVudCgpO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCwgUHJvcFR5cGVzIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9BY3Rpdml0eVByZXZpZXcuY3NzJztcblxubGV0IGxvZ2dlciA9IG51bGw7XG5cbi8qKlxuICogU2ltcGxlIEZpZWxkIGNvbXBvbmVudCB0aGF0IGNvbnNpc3RzIG9mIGEgZmllbGQgdGl0bGUgYW5kIGZpZWxkIHZhbHVlXG4gKiBAYXV0aG9yIE5hZGVqZGEgTWFuZHJlc2N1XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFQRmllbGQgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIHZhbHVlOiBQcm9wVHlwZXMuYW55LFxuICAgIGlubGluZTogUHJvcFR5cGVzLmJvb2wsXG4gICAgdXNlSW5uZXJIVE1MOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBmaWVsZENsYXNzOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGZpZWxkTmFtZUNsYXNzOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGZpZWxkVmFsdWVDbGFzczogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBzZXBhcmF0b3I6IFByb3BUeXBlcy5ib29sXG4gIH07XG5cbiAgLyoqXG4gICAqIEdldHMgYW4gaW5zdGFuY2Ugb2YgU2ltcGxlIEZpZWxkXG4gICAqIEBwYXJhbSB0cm5MYWJlbCB0aGUgbGFiZWwgdG8gdHJhbnNsYXRlIGFuZCB1c2UgYXMgYSB0aXRsZS4gVGhpcyBsYWJlbCBpcyBhbHNvIHVzZWQgYXMgdGhlIGNvbXBvbmVudCBrZXkuXG4gICAqIEBwYXJhbSB2YWx1ZSB0aGUgZmllbGQgdmFsdWVcbiAgICogQHBhcmFtIGlubGluZSBzaG93IHRpdGxlIGFuZCB2YWx1ZSBpbiB0aGUgc2FtZSByb3cuXG4gICAqIEBwYXJhbSBzZXBhcmF0b3IgYWRkIG9yIG5vdCBhbiA8aHI+IHRhZy5cbiAgICogQHBhcmFtIG5hbWVDbGFzcyBjc3MgY2xhc3MgZm9yIHRoZSBmaWVsZCBsYWJlbFxuICAgKiBAcGFyYW0gdmFsdWVDbGFzcyBjc3MgY2xhc3MgZm9yIHRoZSBmaWVsZCB2YWx1ZVxuICAgKiBAcGFyYW0gdHJhbnNsYXRlIHRoZSB0cmFuc2xhdGlvbiBmdW5jdGlvblxuICAgKiBAcGFyYW0gbG9nZ2VyIHRoZSBMb2dnZXJNYW5hZ2VyXG4gICAqIEByZXR1cm4ge1NpbXBsZUZpZWxkfVxuICAgKi9cbiAgc3RhdGljIGluc3RhbmNlKHRybkxhYmVsLCB2YWx1ZSwgaW5saW5lID0gZmFsc2UsIHNlcGFyYXRvciA9IGZhbHNlLCBuYW1lQ2xhc3MsIHZhbHVlQ2xhc3MsIHRyYW5zbGF0ZSwgbG9nZ2VyKSB7XG4gICAgcmV0dXJuICg8QVBGaWVsZFxuICAgICAga2V5PXt0cm5MYWJlbH0gdGl0bGU9e3RyYW5zbGF0ZSh0cm5MYWJlbCl9IHZhbHVlPXt2YWx1ZX0gaW5saW5lPXtpbmxpbmV9IHNlcGFyYXRvcj17c2VwYXJhdG9yfVxuICAgICAgZmllbGROYW1lQ2xhc3M9e25hbWVDbGFzc30gZmllbGRWYWx1ZUNsYXNzPXt2YWx1ZUNsYXNzfSB0cmFuc2xhdGU9e3RyYW5zbGF0ZX0gTG9nZ2VyPXtsb2dnZXJ9IC8+KTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIGNvbnN0IHsgTG9nZ2VyIH0gPSB0aGlzLnByb3BzO1xuICAgIGxvZ2dlciA9IG5ldyBMb2dnZXIoJ0FQIGZpZWxkJyk7XG4gICAgbG9nZ2VyLmxvZygnY29uc3RydWN0b3InKTtcbiAgICB0aGlzLnVzZVNlcGFyYXRvciA9IHRoaXMucHJvcHMuc2VwYXJhdG9yICE9PSBmYWxzZTtcbiAgICB0aGlzLmRpc3BsYXlDbGFzcyA9IHRoaXMucHJvcHMuZmllbGRDbGFzcyB8fCAodGhpcy5wcm9wcy5pbmxpbmUgPT09IHRydWUgPyBzdHlsZXMuaW5saW5lIDogc3R5bGVzLmJsb2NrKTtcbiAgfVxuXG4gIF9nZXRWYWx1ZSgpIHtcbiAgICBjb25zdCB7IHRyYW5zbGF0ZSB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBjbGFzc05hbWVzID0gYCR7dGhpcy5wcm9wcy5maWVsZFZhbHVlQ2xhc3N9ICR7dGhpcy5kaXNwbGF5Q2xhc3N9YDtcbiAgICAvLyBUbyBoYW5kbGUgYm9vbGVhbiBmaWVsZHMgd2UgZG9udCB3YW50IHRvIHNob3cgJ2ZhbHNlJyBhcyAnTm8gRGF0YScuXG4gICAgY29uc3QgdmFsdWUgPSAodGhpcy5wcm9wcy52YWx1ZSB8fCB0aGlzLnByb3BzLnZhbHVlID09PSBmYWxzZSkgPyB0aGlzLnByb3BzLnZhbHVlIDogdHJhbnNsYXRlKCdObyBEYXRhJyk7XG4gICAgbGV0IGRpc3BsYXlWYWx1ZTtcbiAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgIGlmICh2YWx1ZVswXSBpbnN0YW5jZW9mIE9iamVjdCkge1xuICAgICAgICBkaXNwbGF5VmFsdWUgPSBbXTtcbiAgICAgICAgdmFsdWUuZm9yRWFjaCh2ID0+IGRpc3BsYXlWYWx1ZS5wdXNoKHYpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRpc3BsYXlWYWx1ZSA9IHZhbHVlLnNvcnQoKVxuICAgICAgICAgIC5qb2luKCcsICcpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodHlwZW9mIHZhbHVlID09PSAnYm9vbGVhbicpIHtcbiAgICAgIGRpc3BsYXlWYWx1ZSA9IHZhbHVlID09PSB0cnVlID8gdHJhbnNsYXRlKCdZZXMnKSA6IHRyYW5zbGF0ZSgnTm8nKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZGlzcGxheVZhbHVlID0gKHRoaXMucHJvcHMuaW5saW5lICYmIHRoaXMucHJvcHMudmFsdWUgaW5zdGFuY2VvZiBTdHJpbmcpID8gYCR7dmFsdWV9IGAgOiB2YWx1ZTtcbiAgICB9XG4gICAgaWYgKHRoaXMucHJvcHMudXNlSW5uZXJIVE1MKSB7XG4gICAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZXN9IGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogZGlzcGxheVZhbHVlIH19IC8+O1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZXN9PntkaXNwbGF5VmFsdWV9PC9kaXY+O1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBjbGFzc05hbWVzID0gYCR7dGhpcy5wcm9wcy5maWVsZE5hbWVDbGFzc30gJHt0aGlzLmRpc3BsYXlDbGFzc31gO1xuICAgIHJldHVybiAoPGRpdiBjbGFzc05hbWU9e3RoaXMuZGlzcGxheUNsYXNzfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWVzfT57dGhpcy5wcm9wcy50aXRsZX08L2Rpdj5cbiAgICAgIHt0aGlzLl9nZXRWYWx1ZSgpfVxuICAgICAge3RoaXMudXNlU2VwYXJhdG9yID8gPGhyIC8+IDogJyd9XG4gICAgPC9kaXY+KTtcbiAgfVxufVxuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL0FjdGl2aXR5UHJldmlldy5jc3MnO1xuaW1wb3J0IFVJVXRpbHMgZnJvbSAnLi4vLi4vLi4vdXRpbHMvVUlVdGlscyc7XG5cbmxldCBsb2dnZXIgPSBudWxsO1xuXG4vKipcbiAqIENvbXBvbmVudCBmb3IgY29udmVydGluZyBjb250ZW50IHRvIHRhYmxlIGZvcm1cbiAqIEBhdXRob3IgQW55YSBNYXJzaGFsbFxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUYWJsaWZ5IGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGNvbnRlbnQ6IFByb3BUeXBlcy5hbnksXG4gICAgY29sdW1uczogUHJvcFR5cGVzLm51bWJlclxuICB9O1xuXG4gIC8qKlxuICAgKiBUYWtlcyBhbiBhcnJheSBhbmQgdHVybnMgaXQgaW50byB0YWJsZSByb3dzIGFuZCBjb2x1bW5zLlxuICAgKiBAYXV0aG9yIEFueWEgTWFyc2hhbGxcbiAgICogQHBhcmFtIGNvbnRlbnQgY29udGVudCBmb3IgdGFibGVcbiAgICogQHBhcmFtIGNvbHMgbnVtYmVyIG9mIGNvbHVtbnNcbiAgICovXG4gIHN0YXRpYyBhZGRSb3dzKGNvbnRlbnQsIGNvbHMpIHtcbiAgICAvLyBSZW1vdmUgdW5kZWZpbmVkIGNlbGxzLlxuICAgIGNvbnRlbnQgPSBjb250ZW50LmZpbHRlcihjID0+IGMpO1xuICAgIC8vIERlY3JlYXNlIG51bWJlciBvZiBjb2xzIGlmIHdlIGRvbnQgaGF2ZSBlbm91Z2ggZWxlbWVudHMuXG4gICAgaWYgKGNvbnRlbnQubGVuZ3RoIDwgY29scykge1xuICAgICAgY29scyA9IGNvbnRlbnQubGVuZ3RoO1xuICAgIH1cbiAgICBjb25zdCByb3dzID0gTWF0aC5jZWlsKGNvbnRlbnQubGVuZ3RoIC8gY29scyk7XG4gICAgY29uc3QgdGFibGVDb250ZW50ID0gW107XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJvd3M7IGkrKykge1xuICAgICAgY29uc3Qgcm93Q29udGVudCA9IFtdO1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBjb2xzOyBqKyspIHtcbiAgICAgICAgcm93Q29udGVudC5wdXNoKDx0ZCBrZXk9e1VJVXRpbHMuc3RyaW5nVG9VbmlxdWVJZCgpfT57Y29udGVudC5wb3AoKX08L3RkPik7XG4gICAgICB9XG4gICAgICB0YWJsZUNvbnRlbnQucHVzaCg8dHIga2V5PXtVSVV0aWxzLnN0cmluZ1RvVW5pcXVlSWQoKX0+e3Jvd0NvbnRlbnR9PC90cj4pO1xuICAgIH1cbiAgICByZXR1cm4gdGFibGVDb250ZW50O1xuICB9XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgY29uc3QgeyBMb2dnZXIgfSA9IHRoaXMucHJvcHM7XG4gICAgbG9nZ2VyID0gbmV3IExvZ2dlcigndGFibGlmeScpO1xuICAgIGxvZ2dlci5sb2coJ2NvbnN0cnVjdG9yJyk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgY29sdW1ucyA9IHRoaXMucHJvcHMuY29sdW1ucyA+PSB0aGlzLnByb3BzLmNvbnRlbnQubGVuZ3RoID8gdGhpcy5wcm9wcy5jb250ZW50Lmxlbmd0aCA6IHRoaXMucHJvcHMuY29sdW1ucztcbiAgICBjb25zdCBjZWxsV2lkdGggPSBgJHsoMTAwIC8gY29sdW1ucyl9JWA7XG4gICAgY29uc3QgY2VsbHdpZHRoU3R5bGUgPSB7XG4gICAgICB3aWR0aDogY2VsbFdpZHRoXG4gICAgfTtcbiAgICBjb25zdCByb3dzID0gTWF0aC5jZWlsKHRoaXMucHJvcHMuY29udGVudC5sZW5ndGggLyBjb2x1bW5zKTtcbiAgICBjb25zdCB0YWJsZUNvbnRlbnQgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJvd3M7IGkrKykge1xuICAgICAgY29uc3Qgcm93Q29udGVudCA9IFtdO1xuICAgICAgcm93Q29udGVudC5wdXNoKDxkaXYga2V5PXtVSVV0aWxzLnN0cmluZ1RvVW5pcXVlSWQoKX0gc3R5bGU9e2NlbGx3aWR0aFN0eWxlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMudGFibGlmeV9vdXRlcl9jZWxsfT5cbiAgICAgICAge3RoaXMucHJvcHMuY29udGVudC5wb3AoKX08L2Rpdj4pO1xuICAgICAgZm9yIChsZXQgaiA9IDE7IGogPCB0aGlzLnByb3BzLmNvbHVtbnMgJiYgdGhpcy5wcm9wcy5jb250ZW50Lmxlbmd0aCA+IDA7IGorKykge1xuICAgICAgICBjb25zdCBrZXkgPSBVSVV0aWxzLnN0cmluZ1RvVW5pcXVlSWQoKTtcbiAgICAgICAgcm93Q29udGVudC5wdXNoKDxkaXYga2V5PXtrZXl9IHN0eWxlPXtjZWxsd2lkdGhTdHlsZX0gY2xhc3NOYW1lPXtzdHlsZXMudGFibGlmeV9pbm5lcl9jZWxsfT5cbiAgICAgICAgICB7dGhpcy5wcm9wcy5jb250ZW50LnBvcCgpfTwvZGl2Pik7XG4gICAgICB9XG4gICAgICB0YWJsZUNvbnRlbnQucHVzaCg8ZGl2IGtleT17VUlVdGlscy5zdHJpbmdUb1VuaXF1ZUlkKCl9IGNsYXNzTmFtZT17c3R5bGVzLmZsZXh9Pntyb3dDb250ZW50fTwvZGl2Pik7XG4gICAgfVxuICAgIHJldHVybiAoPGRpdj5cbiAgICAgIHt0YWJsZUNvbnRlbnR9XG4gICAgPC9kaXY+KTtcbiAgfVxufVxuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCwgUHJvcFR5cGVzIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9BY3Rpdml0eVByZXZpZXcuY3NzJztcblxubGV0IGxvZ2dlciA9IG51bGw7XG5cbi8qKlxuICogUGVyY2VudGFnZSBGaWVsZCBjb21wb25lbnRcbiAqIEBhdXRob3IgTmFkZWpkYSBNYW5kcmVzY3VcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQVBQZXJjZW50YWdlRmllbGQgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgdmFsdWU6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgdGl0bGVDbGFzczogUHJvcFR5cGVzLnN0cmluZyxcbiAgICB2YWx1ZUNsYXNzOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIExvZ2dlcjogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICByYXdOdW1iZXJUb0Zvcm1hdHRlZFN0cmluZzogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZFxuICB9O1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIGNvbnN0IHsgTG9nZ2VyIH0gPSB0aGlzLnByb3BzO1xuICAgIGxvZ2dlciA9IG5ldyBMb2dnZXIoJ0FQIHBlcmNlbnRhZ2UgZmllbGQnKTtcbiAgICBsb2dnZXIubG9nKCdjb25zdHJ1Y3RvcicpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgcmF3TnVtYmVyVG9Gb3JtYXR0ZWRTdHJpbmcgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgcGVyY2VudGFnZSA9IHRoaXMucHJvcHMudmFsdWUgIT09IHVuZGVmaW5lZCAmJiB0aGlzLnByb3BzLnZhbHVlICE9PSBudWxsXG4gICAgICA/IGAke3Jhd051bWJlclRvRm9ybWF0dGVkU3RyaW5nKHRoaXMucHJvcHMudmFsdWUsIHRydWUpfSVgIDogbnVsbDtcbiAgICByZXR1cm4gKDxkaXY+XG4gICAgICA8c3BhbiBjbGFzc05hbWU9e3RoaXMucHJvcHMudGl0bGVDbGFzc30+e3RoaXMucHJvcHMudGl0bGV9IDwvc3Bhbj5cbiAgICAgIDxzcGFuIGNsYXNzTmFtZT17YCR7dGhpcy5wcm9wcy52YWx1ZUNsYXNzfSAke3N0eWxlcy5hbGlnblJpZ2h0fWB9PntwZXJjZW50YWdlfTwvc3Bhbj5cbiAgICA8L2Rpdj4pO1xuICB9XG59XG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBBUEZpZWxkIGZyb20gJy4vQVBGaWVsZC5qc3gnO1xuaW1wb3J0IEFQUGVyY2VudGFnZUZpZWxkIGZyb20gJy4vQVBQZXJjZW50YWdlRmllbGQuanN4JztcbmltcG9ydCBUYWJsaWZ5IGZyb20gJy4vVGFibGlmeS5qc3gnO1xuaW1wb3J0IEFjdGl2aXR5Q29uc3RhbnRzIGZyb20gJy4uLy4uLy4uL21vZHVsZXMvdXRpbC9BY3Rpdml0eUNvbnN0YW50cyc7XG5pbXBvcnQgRmllbGRzTWFuYWdlciBmcm9tICcuLi8uLi8uLi9tb2R1bGVzL2ZpZWxkL0ZpZWxkc01hbmFnZXInO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9BY3Rpdml0eVByZXZpZXcuY3NzJztcbmltcG9ydCBGZWF0dXJlTWFuYWdlciBmcm9tICcuLi8uLi8uLi9tb2R1bGVzL3V0aWwvRmVhdHVyZU1hbmFnZXInO1xuaW1wb3J0IFBvc3NpYmxlVmFsdWVzTWFuYWdlciBmcm9tICcuLi8uLi8uLi9tb2R1bGVzL2ZpZWxkL1Bvc3NpYmxlVmFsdWVzTWFuYWdlcic7XG5pbXBvcnQgVUlVdGlscyBmcm9tICcuLi8uLi8uLi91dGlscy9VSVV0aWxzJztcblxubGV0IGxvZ2dlciA9IG51bGw7XG5cbi8qKlxuICogQWN0aXZpdHkgUHJldmlldyBQZXJjZW50YWdlIExpc3QgdHlwZSBzZWN0aW9uXG4gKiBAYXV0aG9yIE5hZGVqZGEgTWFuZHJlc2N1XG4gKi9cbmNvbnN0IEFQUGVyY2VudGFnZUxpc3QgPSAobGlzdEZpZWxkLCB2YWx1ZUZpZWxkLCBwZXJjZW50YWdlRmllbGQsIGxpc3RUaXRsZSA9IG51bGwpID0+IGNsYXNzIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBhY3Rpdml0eTogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICAgIGFjdGl2aXR5RmllbGRzTWFuYWdlcjogUHJvcFR5cGVzLmluc3RhbmNlT2YoRmllbGRzTWFuYWdlcikuaXNSZXF1aXJlZCxcbiAgICBmaWVsZE5hbWVDbGFzczogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBmaWVsZFZhbHVlQ2xhc3M6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgcGVyY2VudFRpdGxlQ2xhc3M6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgcGVyY2VudFZhbHVlQ2xhc3M6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgdGFibGlmeTogUHJvcFR5cGVzLmJvb2wsXG4gICAgY29sdW1uczogUHJvcFR5cGVzLm51bWJlcixcbiAgICBmbVBhdGg6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgZ2V0SXRlbVRpdGxlOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBMb2dnZXI6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgdHJhbnNsYXRlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkXG4gIH07XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgY29uc3QgeyBMb2dnZXIgfSA9IHRoaXMucHJvcHM7XG4gICAgbG9nZ2VyID0gbmV3IExvZ2dlcignQVAgcGVyY2VudGFnZSBsaXN0Jyk7XG4gICAgbG9nZ2VyLmRlYnVnKCdjb25zdHJ1Y3RvcicpO1xuICB9XG5cbiAgZ2V0SXRlbVRpdGxlKGl0ZW0pIHtcbiAgICBpZiAodGhpcy5wcm9wcy5nZXRJdGVtVGl0bGUpIHtcbiAgICAgIHJldHVybiB0aGlzLnByb3BzLmdldEl0ZW1UaXRsZShpdGVtKTtcbiAgICB9XG4gICAgY29uc3Qgb2JqID0gaXRlbVt2YWx1ZUZpZWxkXTtcbiAgICByZXR1cm4gb2JqW0FjdGl2aXR5Q29uc3RhbnRzLkhJRVJBUkNISUNBTF9WQUxVRV0gP1xuICAgICAgb2JqW0FjdGl2aXR5Q29uc3RhbnRzLkhJRVJBUkNISUNBTF9WQUxVRV0gOlxuICAgICAgUG9zc2libGVWYWx1ZXNNYW5hZ2VyLmdldE9wdGlvblRyYW5zbGF0aW9uKG9iaik7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgdHJhbnNsYXRlLCBhY3Rpdml0eUZpZWxkc01hbmFnZXIsIHBlcmNlbnRUaXRsZUNsYXNzLCBmbVBhdGgsIGFjdGl2aXR5LCBjb2x1bW5zLCB0YWJsaWZ5XG4gICAgICAsIHBlcmNlbnRWYWx1ZUNsYXNzLCBmaWVsZE5hbWVDbGFzcywgZmllbGRWYWx1ZUNsYXNzLCBMb2dnZXIsIHJhd051bWJlclRvRm9ybWF0dGVkU3RyaW5nXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgdGl0bGUgPSBsaXN0VGl0bGUgPyB0cmFuc2xhdGUobGlzdFRpdGxlKSA6IG51bGw7XG4gICAgbGV0IGl0ZW1zID0gYWN0aXZpdHlbbGlzdEZpZWxkXTtcbiAgICBsZXQgY29udGVudCA9IG51bGw7XG4gICAgbGV0IGlzTGlzdEVuYWJsZWQgPSBhY3Rpdml0eUZpZWxkc01hbmFnZXIuaXNGaWVsZFBhdGhFbmFibGVkKGxpc3RGaWVsZCkgPT09IHRydWU7XG4gICAgaWYgKGZtUGF0aCkge1xuICAgICAgaXNMaXN0RW5hYmxlZCA9IEZlYXR1cmVNYW5hZ2VyLmlzRk1TZXR0aW5nRW5hYmxlZChmbVBhdGgpID8gaXNMaXN0RW5hYmxlZCA6IGZhbHNlO1xuICAgIH1cbiAgICBpZiAoaXNMaXN0RW5hYmxlZCkge1xuICAgICAgaWYgKGl0ZW1zICYmIGl0ZW1zLmxlbmd0aCkge1xuICAgICAgICBpdGVtcyA9IGl0ZW1zLm1hcChpdGVtID0+ICh7XG4gICAgICAgICAgaXRlbVRpdGxlOiB0aGlzLmdldEl0ZW1UaXRsZShpdGVtKSxcbiAgICAgICAgICBwZXJjZW50YWdlOiBpdGVtW3BlcmNlbnRhZ2VGaWVsZF1cbiAgICAgICAgfSkpXG4gICAgICAgICAgLnNvcnQoKGEsIGIpID0+IGEuaXRlbVRpdGxlLmxvY2FsZUNvbXBhcmUoYi5pdGVtVGl0bGUpKTtcbiAgICAgICAgY29udGVudCA9IGl0ZW1zLm1hcCgoeyBpdGVtVGl0bGUsIHBlcmNlbnRhZ2UgfSkgPT5cbiAgICAgICAgICA8QVBQZXJjZW50YWdlRmllbGRcbiAgICAgICAgICAgIGtleT17VUlVdGlscy5zdHJpbmdUb1VuaXF1ZUlkKGl0ZW1UaXRsZSl9IHRpdGxlPXtpdGVtVGl0bGV9IHZhbHVlPXtwZXJjZW50YWdlfVxuICAgICAgICAgICAgdGl0bGVDbGFzcz17cGVyY2VudFRpdGxlQ2xhc3N9IHZhbHVlQ2xhc3M9e3BlcmNlbnRWYWx1ZUNsYXNzfSB0cmFuc2xhdGU9e3RyYW5zbGF0ZX1cbiAgICAgICAgICAgIExvZ2dlcj17TG9nZ2VyfSByYXdOdW1iZXJUb0Zvcm1hdHRlZFN0cmluZz17cmF3TnVtYmVyVG9Gb3JtYXR0ZWRTdHJpbmd9IC8+XG4gICAgICAgICk7XG4gICAgICAgIGlmICh0YWJsaWZ5KSB7XG4gICAgICAgICAgY29udGVudCA9IDxUYWJsaWZ5IGNvbnRlbnQ9e2NvbnRlbnR9IGNvbHVtbnM9e2NvbHVtbnN9IExvZ2dlcj17TG9nZ2VyfSAvPjtcbiAgICAgICAgfVxuICAgICAgICBjb250ZW50ID0gKDxBUEZpZWxkXG4gICAgICAgICAga2V5PXtsaXN0RmllbGR9IHRpdGxlPXt0aXRsZX0gdmFsdWU9e2NvbnRlbnR9IHNlcGFyYXRvcj17ZmFsc2V9IGlubGluZT17dGFibGlmeSA9PT0gdHJ1ZX1cbiAgICAgICAgICBmaWVsZE5hbWVDbGFzcz17ZmllbGROYW1lQ2xhc3N9IGZpZWxkVmFsdWVDbGFzcz17ZmllbGRWYWx1ZUNsYXNzfVxuICAgICAgICAgIHRyYW5zbGF0ZT17dHJhbnNsYXRlfSBMb2dnZXI9e0xvZ2dlcn0gLz4pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29udGVudCA9ICg8QVBGaWVsZFxuICAgICAgICAgIGtleT17bGlzdEZpZWxkfSB0aXRsZT17dGl0bGV9IHZhbHVlPXt0cmFuc2xhdGUoJ05vIERhdGEnKX0gc2VwYXJhdG9yPXtmYWxzZX1cbiAgICAgICAgICBpbmxpbmU9e3RhYmxpZnkgPT09IHRydWV9XG4gICAgICAgICAgZmllbGROYW1lQ2xhc3M9e2ZpZWxkTmFtZUNsYXNzfSBmaWVsZFZhbHVlQ2xhc3M9e3N0eWxlcy5ub2RhdGF9XG4gICAgICAgICAgdHJhbnNsYXRlPXt0cmFuc2xhdGV9IExvZ2dlcj17TG9nZ2VyfSAvPik7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFQUGVyY2VudGFnZUxpc3Q7XG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBGaWVsZFBhdGhDb25zdGFudHMgZnJvbSAnLi4vLi4vLi4vdXRpbHMvRmllbGRQYXRoQ29uc3RhbnRzJztcbmltcG9ydCBGaWVsZHNNYW5hZ2VyIGZyb20gJy4uLy4uLy4uL21vZHVsZXMvZmllbGQvRmllbGRzTWFuYWdlcic7XG5pbXBvcnQgRmVhdHVyZU1hbmFnZXIgZnJvbSAnLi4vLi4vLi4vbW9kdWxlcy91dGlsL0ZlYXR1cmVNYW5hZ2VyJztcbmltcG9ydCBQb3NzaWJsZVZhbHVlc01hbmFnZXIgZnJvbSAnLi4vLi4vLi4vbW9kdWxlcy9maWVsZC9Qb3NzaWJsZVZhbHVlc01hbmFnZXInO1xuaW1wb3J0IEFQRmllbGQgZnJvbSAnLi4vY29tcG9uZW50cy9BUEZpZWxkLmpzeCc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL0FjdGl2aXR5UHJldmlldy5jc3MnO1xuaW1wb3J0IFVJVXRpbHMgZnJvbSAnLi4vLi4vLi4vdXRpbHMvVUlVdGlscyc7XG5cbmxldCBsb2dnZXIgPSBudWxsO1xuXG4vKipcbiAqIEdlbmVyaWMgYWN0aXZpdHkgcHJldmlldyBzZWN0aW9uIGNsYXNzXG4gKiBAYXV0aG9yIE5hZGVqZGEgTWFuZHJlc2N1XG4gKi9cbi8vIGNvbnN0IFNlY3Rpb24gPSAoQ29tcG9zZWRTZWN0aW9uLCBTZWN0aW9uVGl0bGUgPSBudWxsLCB1c2VFbmNhcHN1bGF0ZUhlYWRlciA9IHRydWUsIHNJRCkgPT4gY2xhc3MgZXh0ZW5kcyBDb21wb25lbnQge1xuY29uc3QgU2VjdGlvbiA9IChDb21wb3NlZFNlY3Rpb24sIHBhcmFtcykgPT4gY2xhc3MgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIHRpdGxlRGV0YWlsczogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm9iamVjdF0pLFxuICAgIHNlY3Rpb25QYXRoOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIHRpdGxlQ2xhc3M6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgZ3JvdXBDbGFzczogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBjb21wb3NlZENsYXNzOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGZpZWxkTmFtZUNsYXNzOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGZpZWxkVmFsdWVDbGFzczogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBmbVBhdGg6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgZmllbGRDbGFzczogUHJvcFR5cGVzLnN0cmluZ1xuICB9O1xuXG4gIHN0YXRpYyBjb250ZXh0VHlwZXMgPSB7XG4gICAgYWN0aXZpdHk6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgICBhY3Rpdml0eUZpZWxkc01hbmFnZXI6IFByb3BUeXBlcy5pbnN0YW5jZU9mKEZpZWxkc01hbmFnZXIpLmlzUmVxdWlyZWQsXG4gICAgY29udGFjdEZpZWxkc01hbmFnZXI6IFByb3BUeXBlcy5pbnN0YW5jZU9mKEZpZWxkc01hbmFnZXIpLFxuICAgIGNvbnRhY3RzQnlJZHM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgICBhY3Rpdml0eUZ1bmRpbmdUb3RhbHM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCwgLy8gV2lsbCBjaGFuZ2UgdGhpcyBpZiBBY3Rpdml0eUZ1bmRpbmdUb3RhbHMgaXMgbWlncmF0ZWRcbiAgICAvLyBQcm9wVHlwZXMuaW5zdGFuY2VPZihwYXJhbXMuQWN0aXZpdHlGdW5kaW5nVG90YWxzKS5pc1JlcXVpcmVkLFxuICAgIGFjdGl2aXR5V29ya3NwYWNlOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gICAgYWN0aXZpdHlXU01hbmFnZXI6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgICByZXNvdXJjZVJlZHVjZXI6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgICBMb2dnZXI6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgdHJhbnNsYXRlOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBEYXRlVXRpbHM6IFByb3BUeXBlcy5mdW5jXG4gIH07XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICB0aXRsZUNsYXNzOiBzdHlsZXMuc2VjdGlvbl90aXRsZV9jbGFzcyxcbiAgICBncm91cENsYXNzOiBzdHlsZXMuc2VjdGlvbl9ncm91cF9jbGFzcyxcbiAgICBmaWVsZE5hbWVDbGFzczogc3R5bGVzLnNlY3Rpb25fZmllbGRfbmFtZSxcbiAgICBmaWVsZFZhbHVlQ2xhc3M6IHN0eWxlcy5zZWN0aW9uX2ZpZWxkX3ZhbHVlXG4gIH07XG5cbiAgY29uc3RydWN0b3IocHJvcHMsIGNvbnRleHQpIHtcbiAgICBzdXBlcihwcm9wcywgY29udGV4dCk7XG4gICAgaWYgKHRoaXMuY29udGV4dCkge1xuICAgICAgcGFyYW1zLkxvZ2dlciA9IHRoaXMuY29udGV4dC5Mb2dnZXI7XG4gICAgICBwYXJhbXMuRGF0ZVV0aWxzID0gdGhpcy5jb250ZXh0LkRhdGVVdGlscztcbiAgICAgIHBhcmFtcy50cmFuc2xhdGUgPSB0aGlzLmNvbnRleHQudHJhbnNsYXRlO1xuICAgIH1cbiAgICBwYXJhbXMudXNlRW5jYXBzdWxhdGVIZWFkZXIgPSAhcGFyYW1zLnVzZUVuY2Fwc3VsYXRlSGVhZGVyID8gdHJ1ZSA6IHBhcmFtcy51c2VFbmNhcHN1bGF0ZUhlYWRlcjtcbiAgICBsb2dnZXIgPSBuZXcgcGFyYW1zLkxvZ2dlcignQVAgc2VjdGlvbicpO1xuICAgIGxvZ2dlci5kZWJ1ZygnY29uc3RydWN0b3InKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW5kZXJzIGZpZWxkIGRhdGEgaWYgaXQgaXMgZW5hYmxlZCBpbiBGTS4gSWYgcmVuYWJsZWQsIGJ1dCB2YWx1ZSBpcyBub3QgYXZhaWxhYmxlLCB0aGVuIGl0IHdpbGwgbm90IGJlIHJlbmRlcmVkLFxuICAgKiB1bmxlc3MgaXQgaXMgcmVxdWVzdGVkIHZpYSBzaG93SWZOb3RBdmFpbGFibGUgZmxhZy5cbiAgICogQHBhcmFtIHBhdGggZmllbGQgcGF0aFxuICAgKiBAcGFyYW0gc2hvd0lmTm90QXZhaWxhYmxlIGZsYWcgdG8gZm9yY2libHkgZGlzcGxheSB0aGUgZmllbGQgd2hlbiBubyB2YWx1ZSBpcyBwcm92aWRlZFxuICAgKiBAcGFyYW0gTkFPcHRpb25zIG9wdGlvbmFsIHNldCBvZiB2YWx1ZXMgdGhhdCBzaG91bGQgYmUgdHJlYXRlZCBhcyB1bmRlZmluZWRcbiAgICogQHBhcmFtIGlubGluZSBvcHRpb25hbCBmbGFnIHRvIHJlbmRlciBuYW1lIGFuZCB2YWx1ZXMgb24gdGhlIHNhbWUgbGluZVxuICAgKiBAcGFyYW0gcGFyZW50IG9wdGlvbmFsIG9iamVjdCB3aGVyZSB3ZSBsb29rIGZvciB0aGUgcGF0aCAoaW5zdGVhZCBvZiB0aGUgYWN0aXZpdHkgcm9vdCkuXG4gICAqIEBwYXJhbSBmaWVsZHNNYW5hZ2VyIChvcHRpb25hbCkgY3VzdG9tIGZpZWxkcyBtYW5hZ2VyLiBBY3Rpdml0eSBGaWVsZHMgTWFuYWdlciB1c2VkIGJ5IGRlZmF1bHQuXG4gICAqIEByZXR1cm4ge251bGx8QVBGaWVsZH1cbiAgICovXG4gIGJ1aWxkU2ltcGxlRmllbGQocGF0aCwgc2hvd0lmTm90QXZhaWxhYmxlLCBOQU9wdGlvbnM6IFNldCwgaW5saW5lID0gZmFsc2UsIHBhcmVudCA9IG51bGwsIGZpZWxkc01hbmFnZXIgPSBudWxsXG4gICAgLCBvcHRpb25zKSB7XG4gICAgY29uc3Qgb3B0aW9uc18gPSBvcHRpb25zIHx8IHt9O1xuICAgIGNvbnN0IGZtUGF0aCA9IEZpZWxkUGF0aENvbnN0YW50cy5BQ1RJVklUWV9GSUVMRFNfRk1fUEFUSFtwYXRoXTtcbiAgICBmaWVsZHNNYW5hZ2VyID0gZmllbGRzTWFuYWdlciB8fCB0aGlzLmNvbnRleHQuYWN0aXZpdHlGaWVsZHNNYW5hZ2VyO1xuICAgIGlmIChmaWVsZHNNYW5hZ2VyLmlzRmllbGRQYXRoRW5hYmxlZChwYXRoKVxuICAgICAgJiYgKCFmbVBhdGggfHwgRmVhdHVyZU1hbmFnZXIuaXNGTVNldHRpbmdFbmFibGVkKGZtUGF0aCwgZmFsc2UpKSkge1xuICAgICAgY29uc3QgdGl0bGUgPSAob3B0aW9uc18ubm9UaXRsZSA/ICcnIDogZmllbGRzTWFuYWdlci5nZXRGaWVsZExhYmVsVHJhbnNsYXRpb24ocGF0aCkpO1xuICAgICAgbGV0IHZhbHVlUGF0aCA9IHBhdGg7XG4gICAgICBpZiAocGFyZW50KSB7XG4gICAgICAgIGNvbnN0IGZpZWxkUGF0aFBhcnRzID0gcGF0aC5zcGxpdCgnficpO1xuICAgICAgICB2YWx1ZVBhdGggPSBmaWVsZFBhdGhQYXJ0c1tmaWVsZFBhdGhQYXJ0cy5sZW5ndGggLSAxXTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGFsdGVybmF0ZVBhdGggPSBGaWVsZFBhdGhDb25zdGFudHMuQUxURVJOQVRFX1ZBTFVFX1BBVEhbdmFsdWVQYXRoXTtcbiAgICAgIGxldCB2YWx1ZSA9IGZpZWxkc01hbmFnZXIuZ2V0VmFsdWUocGFyZW50IHx8IHRoaXMuY29udGV4dC5hY3Rpdml0eSwgdmFsdWVQYXRoLFxuICAgICAgICBQb3NzaWJsZVZhbHVlc01hbmFnZXIuZ2V0T3B0aW9uVHJhbnNsYXRpb24pO1xuICAgICAgaWYgKCh2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gdW5kZWZpbmVkKSAmJiBhbHRlcm5hdGVQYXRoKSB7XG4gICAgICAgIHZhbHVlID0gZmllbGRzTWFuYWdlci5nZXRWYWx1ZSh0aGlzLmNvbnRleHQuYWN0aXZpdHksIGFsdGVybmF0ZVBhdGgsXG4gICAgICAgICAgUG9zc2libGVWYWx1ZXNNYW5hZ2VyLmdldE9wdGlvblRyYW5zbGF0aW9uKTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGZpZWxkRGVmID0gZmllbGRzTWFuYWdlci5nZXRGaWVsZERlZihwYXRoKTtcbiAgICAgIGlmIChmaWVsZERlZi5maWVsZF90eXBlID09PSBGaWVsZFBhdGhDb25zdGFudHMuRklFTERfVFlQRV9EQVRFKSB7XG4gICAgICAgIHZhbHVlID0gcGFyYW1zLkRhdGVVdGlscy5jcmVhdGVGb3JtYXR0ZWREYXRlKHZhbHVlKTtcbiAgICAgIH0gZWxzZSBpZiAoZmllbGREZWYuZmllbGRfdHlwZSA9PT0gRmllbGRQYXRoQ29uc3RhbnRzLkZJRUxEX1RZUEVfVElNRVNUQU1QKSB7XG4gICAgICAgIC8vIG1hdGNoaW5nIEFQIG9ubGluZSB0byBmb3JtYXQgYXMgZGF0ZSBmb3Igbm93XG4gICAgICAgIHZhbHVlID0gcGFyYW1zLkRhdGVVdGlscy5jcmVhdGVGb3JtYXR0ZWREYXRlKHZhbHVlKTtcbiAgICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkgJiYgIXZhbHVlLmxlbmd0aCkge1xuICAgICAgICB2YWx1ZSA9IG51bGw7XG4gICAgICB9XG4gICAgICB2YWx1ZSA9IE5BT3B0aW9ucyAmJiBOQU9wdGlvbnMuaGFzKHZhbHVlKSA/IG51bGwgOiB2YWx1ZTtcblxuICAgICAgY29uc3QgcmUgPSAvXlxccz8kLzsgLy8gY2hlY2sgZm9yIHdoaXRlc3BhY2VcbiAgICAgIGlmIChyZS50ZXN0KHZhbHVlKSkgdmFsdWUgPSB2YWx1ZS50cmltKCk7IC8vIGNoZWNrIGZvciB3aGl0ZXNwYWNlXG4gICAgICBpZiAodmFsdWUgPT09ICcnIHx8IHZhbHVlID09PSBudWxsKSB7XG4gICAgICAgIHZhbHVlID0gcGFyYW1zLnRyYW5zbGF0ZSgnTm8gRGF0YScpO1xuICAgICAgfVxuICAgICAgaWYgKHNob3dJZk5vdEF2YWlsYWJsZSA9PT0gdHJ1ZSB8fCAodmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZSAhPT0gbnVsbCkpIHtcbiAgICAgICAgY29uc3QgdXNlSW5uZXJIVE1MID0gRmllbGRQYXRoQ29uc3RhbnRzLlJJQ0hfVEVYVF9GSUVMRFMuaGFzKHBhdGgpO1xuICAgICAgICByZXR1cm4gKDxBUEZpZWxkXG4gICAgICAgICAga2V5PXtVSVV0aWxzLnN0cmluZ1RvVW5pcXVlSWQocGF0aCl9IHRpdGxlPXt0aXRsZX0gdmFsdWU9e3ZhbHVlfSB1c2VJbm5lckhUTUw9e3VzZUlubmVySFRNTH1cbiAgICAgICAgICBpbmxpbmU9e2lubGluZX1cbiAgICAgICAgICBzZXBhcmF0b3I9e2ZhbHNlfVxuICAgICAgICAgIGZpZWxkQ2xhc3M9e29wdGlvbnNfLmZpZWxkQ2xhc3MgfHwgdGhpcy5wcm9wcy5maWVsZENsYXNzfVxuICAgICAgICAgIGZpZWxkTmFtZUNsYXNzPXt0aGlzLnByb3BzLmZpZWxkTmFtZUNsYXNzfVxuICAgICAgICAgIGZpZWxkVmFsdWVDbGFzcz17b3B0aW9uc18uZmllbGRWYWx1ZUNsYXNzIHx8IHRoaXMucHJvcHMuZmllbGRWYWx1ZUNsYXNzfVxuICAgICAgICAgIHRyYW5zbGF0ZT17cGFyYW1zLnRyYW5zbGF0ZX0gTG9nZ2VyPXtwYXJhbXMuTG9nZ2VyfSAvPik7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGlmICh0aGlzLnByb3BzLnNlY3Rpb25QYXRoICYmICF0aGlzLmNvbnRleHQuYWN0aXZpdHlGaWVsZHNNYW5hZ2VyLmlzRmllbGRQYXRoRW5hYmxlZCh0aGlzLnByb3BzLnNlY3Rpb25QYXRoKSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGlmICh0aGlzLnByb3BzLmZtUGF0aCAmJiAhRmVhdHVyZU1hbmFnZXIuaXNGTVNldHRpbmdFbmFibGVkKHRoaXMucHJvcHMuZm1QYXRoKSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGNvbnN0IGNvbXBvc2VkU2VjdGlvbiA9ICg8Q29tcG9zZWRTZWN0aW9uXG4gICAgICB7Li4udGhpcy5wcm9wc30gey4uLnRoaXMuc3RhdGV9IHsuLi50aGlzLmNvbnRleHR9IGJ1aWxkU2ltcGxlRmllbGQ9e3RoaXMuYnVpbGRTaW1wbGVGaWVsZC5iaW5kKHRoaXMpfSAvPik7XG4gICAgaWYgKHBhcmFtcy51c2VFbmNhcHN1bGF0ZUhlYWRlciA9PT0gZmFsc2UpIHtcbiAgICAgIHJldHVybiBjb21wb3NlZFNlY3Rpb247XG4gICAgfVxuICAgIC8vIFRPRE8gaXRlcmF0aW9uIDIrIHNlY3Rpb24gdG9nZ2xlIChUREMgYmFzZWQgb24gZGVzZ2luICsgVkcpXG4gICAgcmV0dXJuICg8ZGl2IGtleT17cGFyYW1zLlNlY3Rpb25UaXRsZX0gY2xhc3NOYW1lPXt0aGlzLnByb3BzLmdyb3VwQ2xhc3N9IGlkPXtwYXJhbXMuc0lEfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXt0aGlzLnByb3BzLnRpdGxlQ2xhc3N9PlxuICAgICAgICA8c3Bhbj57cGFyYW1zLnRyYW5zbGF0ZShwYXJhbXMuU2VjdGlvblRpdGxlKX0gPC9zcGFuPjxzcGFuPnt0aGlzLnByb3BzLnRpdGxlRGV0YWlsc308L3NwYW4+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXt0aGlzLnByb3BzLmNvbXBvc2VkQ2xhc3N9PlxuICAgICAgICB7Y29tcG9zZWRTZWN0aW9ufVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+KTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgU2VjdGlvbjtcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IEFjdGl2aXR5Q29uc3RhbnRzIGZyb20gJy4uLy4uLy4uL21vZHVsZXMvdXRpbC9BY3Rpdml0eUNvbnN0YW50cyc7XG5pbXBvcnQgRmVhdHVyZU1hbmFnZXIgZnJvbSAnLi4vLi4vLi4vbW9kdWxlcy91dGlsL0ZlYXR1cmVNYW5hZ2VyJztcbmltcG9ydCBWYWx1ZUNvbnN0YW50cyBmcm9tICcuLi8uLi8uLi91dGlscy9WYWx1ZUNvbnN0YW50cyc7XG5pbXBvcnQgRmVhdHVyZU1hbmFnZXJDb25zdGFudHMgZnJvbSAnLi4vLi4vLi4vbW9kdWxlcy91dGlsL0ZlYXR1cmVNYW5hZ2VyQ29uc3RhbnRzJztcbmltcG9ydCBGaWVsZFBhdGhDb25zdGFudHMgZnJvbSAnLi4vLi4vLi4vdXRpbHMvRmllbGRQYXRoQ29uc3RhbnRzJztcblxuaW1wb3J0IEZpZWxkc01hbmFnZXIgZnJvbSAnLi4vLi4vLi4vbW9kdWxlcy9maWVsZC9GaWVsZHNNYW5hZ2VyJztcbmltcG9ydCBQb3NzaWJsZVZhbHVlc01hbmFnZXIgZnJvbSAnLi4vLi4vLi4vbW9kdWxlcy9maWVsZC9Qb3NzaWJsZVZhbHVlc01hbmFnZXInO1xuaW1wb3J0IEFQRmllbGQgZnJvbSAnLi4vY29tcG9uZW50cy9BUEZpZWxkLmpzeCc7XG5pbXBvcnQgU2VjdGlvbiBmcm9tICcuL1NlY3Rpb24uanN4JztcblxuXG5sZXQgbG9nZ2VyID0gbnVsbDtcblxuLyogZXNsaW50LWRpc2FibGUgY2xhc3MtbWV0aG9kcy11c2UtdGhpcyAqL1xuXG4vKipcbiAqIEZ1bmRpbmcgVG90YWxzIFN1bW1hcnkgc2VjdGlvblxuICogQGF1dGhvciBOYWRlamRhIE1hbmRyZXNjdVxuICovXG5jbGFzcyBGdW5kaW5nU3VtbWFyeSBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgYWN0aXZpdHlGaWVsZHNNYW5hZ2VyOiBQcm9wVHlwZXMuaW5zdGFuY2VPZihGaWVsZHNNYW5hZ2VyKS5pc1JlcXVpcmVkLFxuICAgIGFjdGl2aXR5RnVuZGluZ1RvdGFsczogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLCAvLyBQcm9wVHlwZXMuaW5zdGFuY2VPZihBY3Rpdml0eUZ1bmRpbmdUb3RhbHMpLmlzUmVxdWlyZWQsXG4gICAgZmllbGROYW1lQ2xhc3M6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgZmllbGRWYWx1ZUNsYXNzOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIExvZ2dlcjogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICAgIHRyYW5zbGF0ZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICBEYXRlVXRpbHM6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWRcbiAgfTtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICBjb25zdCB7IExvZ2dlciB9ID0gdGhpcy5wcm9wcztcbiAgICBsb2dnZXIgPSBuZXcgTG9nZ2VyKCdGdW5kaW5nIHN1bW1hcnknKTtcbiAgICBsb2dnZXIuZGVidWcoJ2NvbnN0cnVjdG9yJyk7XG4gIH1cblxuICAvKipcbiAgICogQnVpbGRzIFwiRnVuZGluZyBJbmZvcm1hdGlvblwiIHNlY3Rpb24gYnkgZm9sbG93aW5nIEFNUCBBY3Rpdml0eSBQcmV2aWV3IHJ1bGVzXG4gICAqIEByZXR1cm4ge1NlY3Rpb259XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfYnVpbGRGdW5kaW5nSW5mb3JtYXRpb24oKSB7XG4gICAgY29uc3QgbWVhc3VyZXNUb3RhbHMgPSB7fTtcbiAgICBjb25zdCB7IGFjdGl2aXR5RmllbGRzTWFuYWdlciB9ID0gdGhpcy5wcm9wcztcbiAgICBsZXQgYWNFbmFibGVkID0gZmFsc2U7XG4gICAgbGV0IGFkRW5hYmxlZCA9IGZhbHNlO1xuICAgIC8vIENvbW1pdG1lbnRzLCBEaXNidXJzZW1lbnRzLCBFeHBlbmRpdHVyZXNcbiAgICBGaWVsZFBhdGhDb25zdGFudHMuVFJBTlNBQ1RJT05fVFlQRVMuZm9yRWFjaCh0cm5UeXBlID0+IHtcbiAgICAgIGlmIChhY3Rpdml0eUZpZWxkc01hbmFnZXIuaXNGaWVsZFBhdGhCeVBhcnRzRW5hYmxlZChBY3Rpdml0eUNvbnN0YW50cy5GVU5ESU5HUywgdHJuVHlwZSkpIHtcbiAgICAgICAgY29uc3QgdHJuQWRqT3B0UGF0aCA9IGAke0FjdGl2aXR5Q29uc3RhbnRzLkZVTkRJTkdTfX4ke3RyblR5cGV9fiR7QWN0aXZpdHlDb25zdGFudHMuQURKVVNUTUVOVF9UWVBFfWA7XG4gICAgICAgIGNvbnN0IGF0T3B0aW9ucyA9IGFjdGl2aXR5RmllbGRzTWFuYWdlci5nZXRQb3NzaWJsZVZhbHVlc09wdGlvbnModHJuQWRqT3B0UGF0aCk7XG4gICAgICAgIGFjRW5hYmxlZCA9IGFjRW5hYmxlZCB8fFxuICAgICAgICAgICh0cm5UeXBlID09PSBBY3Rpdml0eUNvbnN0YW50cy5DT01NSVRNRU5UUyAmJiAhIWF0T3B0aW9ucy5maW5kKG8gPT4gby52YWx1ZSA9PT0gVmFsdWVDb25zdGFudHMuQUNUVUFMKSk7XG4gICAgICAgIGFkRW5hYmxlZCA9IGFkRW5hYmxlZCB8fFxuICAgICAgICAgICh0cm5UeXBlID09PSBBY3Rpdml0eUNvbnN0YW50cy5ESVNCVVJTRU1FTlRTICYmICEhYXRPcHRpb25zLmZpbmQobyA9PiBvLnZhbHVlID09PSBWYWx1ZUNvbnN0YW50cy5BQ1RVQUwpKTtcbiAgICAgICAgLy8gQWN0dWFsLCBQbGFubmVkXG4gICAgICAgIGF0T3B0aW9ucy5mb3JFYWNoKGFkalR5cGUgPT4ge1xuICAgICAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5wcm9wcy5hY3Rpdml0eUZ1bmRpbmdUb3RhbHMuZ2V0VG90YWxzKGFkalR5cGUuaWQsIHRyblR5cGUsIHt9KTtcbiAgICAgICAgICBtZWFzdXJlc1RvdGFsc1tgJHthZGpUeXBlLnZhbHVlfSAke3RyblR5cGV9YF0gPSB2YWx1ZTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgLy8gT3RoZXIgbWVhc3VyZXM6IFwiVW5hbGxvY2F0ZWQgRGlzYnVyc2VtZW50c1wiLlxuICAgIGNvbnN0IGFkalR5cGVBY3R1YWxUcm4gPSB0aGlzLnByb3BzLmFjdGl2aXR5RmllbGRzTWFuYWdlci5nZXRWYWx1ZShGaWVsZFBhdGhDb25zdGFudHMuRElTQlVSU0VNRU5UU19QQVRILFxuICAgICAgVmFsdWVDb25zdGFudHMuQUNUVUFMLFxuICAgICAgUG9zc2libGVWYWx1ZXNNYW5hZ2VyLmdldE9wdGlvblRyYW5zbGF0aW9uKTtcbiAgICBjb25zdCBleHBlbmRpdHVyZXNBcmVFbmFibGVkID0gYWN0aXZpdHlGaWVsZHNNYW5hZ2VyLmlzRmllbGRQYXRoQnlQYXJ0c0VuYWJsZWQoQWN0aXZpdHlDb25zdGFudHMuRlVORElOR1MsXG4gICAgICBBY3Rpdml0eUNvbnN0YW50cy5FWFBFTkRJVFVSRVMpO1xuICAgIGlmIChhZGpUeXBlQWN0dWFsVHJuICYmIGV4cGVuZGl0dXJlc0FyZUVuYWJsZWQpIHtcbiAgICAgIGNvbnN0IHViID0gVmFsdWVDb25zdGFudHMuVU5BTExPQ0FURURfRElTQlVSU0VNRU5UUztcbiAgICAgIG1lYXN1cmVzVG90YWxzW3ViXSA9IHRoaXMucHJvcHMuYWN0aXZpdHlGdW5kaW5nVG90YWxzLmdldFRvdGFscyh1Yiwge30pO1xuICAgIH1cbiAgICAvLyBPdGhlciBtZWFzdXJlczogXCJUb3RhbCBNVEVGIFByb2plY3Rpb25zXCIuXG4gICAgaWYgKEZlYXR1cmVNYW5hZ2VyLmlzRk1TZXR0aW5nRW5hYmxlZChGZWF0dXJlTWFuYWdlckNvbnN0YW50cy5NVEVGX1BST0pFQ1RJT05TKSkge1xuICAgICAgbWVhc3VyZXNUb3RhbHNbVmFsdWVDb25zdGFudHMuTVRFRl9QUk9KRUNUSU9OU10gPSB0aGlzLnByb3BzLmFjdGl2aXR5RnVuZGluZ1RvdGFscy5nZXRNVEVGVG90YWwoKTtcbiAgICB9XG4gICAgLy8gT3RoZXIgbWVhc3VyZXM6IFwiRGVsaXZlcnkgcmF0ZVwiLlxuICAgIGlmIChGZWF0dXJlTWFuYWdlci5pc0ZNU2V0dGluZ0VuYWJsZWQoRmVhdHVyZU1hbmFnZXJDb25zdGFudHMuQUNUSVZJVFlfREVMSVZFUllfUkFURSkpIHtcbiAgICAgIGNvbnN0IGFjdHVhbENvbW1pdG1lbnRzID0gbWVhc3VyZXNUb3RhbHNbYCR7VmFsdWVDb25zdGFudHMuQUNUVUFMfSAke0FjdGl2aXR5Q29uc3RhbnRzLkNPTU1JVE1FTlRTfWBdO1xuICAgICAgY29uc3QgYWN0dWFsRGlzYnVyc2VtZW50cyA9IG1lYXN1cmVzVG90YWxzW2Ake1ZhbHVlQ29uc3RhbnRzLkFDVFVBTH0gJHtBY3Rpdml0eUNvbnN0YW50cy5ESVNCVVJTRU1FTlRTfWBdO1xuICAgICAgbGV0IHZhbHVlID0gMDtcbiAgICAgIGlmIChhY3R1YWxDb21taXRtZW50cyAmJiBhY3R1YWxEaXNidXJzZW1lbnRzICYmIGFjRW5hYmxlZCAmJiBhZEVuYWJsZWQpIHtcbiAgICAgICAgdmFsdWUgPSAoYWN0dWFsRGlzYnVyc2VtZW50cyAvIGFjdHVhbENvbW1pdG1lbnRzKSAqIDEwMDtcbiAgICAgIH1cbiAgICAgIG1lYXN1cmVzVG90YWxzW1ZhbHVlQ29uc3RhbnRzLkRFTElWRVJZX1JBVEVdID0gdmFsdWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuX2J1aWxkVG90YWxGaWVsZHMobWVhc3VyZXNUb3RhbHMpO1xuICB9XG5cbiAgX2J1aWxkVG90YWxGaWVsZHMobWVhc3VyZXNUb3RhbHMpIHtcbiAgICBjb25zdCB7IHRyYW5zbGF0ZSB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBtZWFzdXJlc09yZGVyID0gW1xuICAgICAgeyB0cm46IFZhbHVlQ29uc3RhbnRzLkFDVFVBTF9DT01NSVRNRU5UUywgdG90YWw6IHRydWUgfSxcbiAgICAgIHsgdHJuOiBWYWx1ZUNvbnN0YW50cy5QTEFOTkVEX0NPTU1JVE1FTlRTLCB0b3RhbDogdHJ1ZSB9LFxuICAgICAgeyB0cm46IFZhbHVlQ29uc3RhbnRzLkFDVFVBTF9ESVNCVVJTRU1FTlRTLCB0b3RhbDogdHJ1ZSB9LFxuICAgICAgeyB0cm46IFZhbHVlQ29uc3RhbnRzLlBMQU5ORURfRElTQlVSU0VNRU5UUywgdG90YWw6IHRydWUgfSxcbiAgICAgIHsgdHJuOiBWYWx1ZUNvbnN0YW50cy5BQ1RVQUxfRVhQRU5ESVRVUkVTLCB0b3RhbDogdHJ1ZSB9LFxuICAgICAgeyB0cm46IFZhbHVlQ29uc3RhbnRzLlVOQUxMT0NBVEVEX0RJU0JVUlNFTUVOVFMsIHRvdGFsOiBmYWxzZSB9LFxuICAgICAgeyB0cm46IFZhbHVlQ29uc3RhbnRzLlBMQU5ORURfRVhQRU5ESVRVUkVTLCB0b3RhbDogdHJ1ZSB9LFxuICAgICAgeyB0cm46IFZhbHVlQ29uc3RhbnRzLk1URUZfUFJPSkVDVElPTlMsIHRvdGFsOiB0cnVlIH0sXG4gICAgICB7IHRybjogVmFsdWVDb25zdGFudHMuREVMSVZFUllfUkFURSwgdG90YWw6IGZhbHNlLCBpc1BlcmNlbnRhZ2U6IHRydWUgfV07XG4gICAgY29uc3QgZnVuZGluZ0luZm9TdW1tYXJ5ID0gW107XG4gICAgbWVhc3VyZXNPcmRlci5mb3JFYWNoKG1lYXN1cmUgPT4ge1xuICAgICAgbGV0IHZhbHVlID0gbWVhc3VyZXNUb3RhbHNbbWVhc3VyZS50cm5dO1xuICAgICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdmFsdWUgPSB0aGlzLnByb3BzLmFjdGl2aXR5RnVuZGluZ1RvdGFscy5mb3JtYXRBbW91bnQodmFsdWUsIG1lYXN1cmUuaXNQZXJjZW50YWdlKTtcbiAgICAgICAgbGV0IHRpdGxlID0gbWVhc3VyZS50cm47XG4gICAgICAgIGlmIChtZWFzdXJlLnRvdGFsKSB7XG4gICAgICAgICAgdGl0bGUgPSBgVG90YWwgJHt0aXRsZX1gO1xuICAgICAgICB9XG4gICAgICAgIHRpdGxlID0gdHJhbnNsYXRlKHRpdGxlKTtcbiAgICAgICAgY29uc3Qga2V5ID0gYFN1bW1hcnktVG90YWwtJHttZWFzdXJlLnRybn1gO1xuICAgICAgICBmdW5kaW5nSW5mb1N1bW1hcnkucHVzaCg8QVBGaWVsZFxuICAgICAgICAgIGtleT17a2V5fSB0aXRsZT17dGl0bGV9IHZhbHVlPXt2YWx1ZX0gc2VwYXJhdG9yPXtmYWxzZX1cbiAgICAgICAgICBmaWVsZE5hbWVDbGFzcz17dGhpcy5wcm9wcy5maWVsZE5hbWVDbGFzc30gZmllbGRWYWx1ZUNsYXNzPXt0aGlzLnByb3BzLmZpZWxkVmFsdWVDbGFzc31cbiAgICAgICAgICB0cmFuc2xhdGU9e3RyYW5zbGF0ZX0gTG9nZ2VyPXt0aGlzLnByb3BzLkxvZ2dlcn0gLz4pO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBmdW5kaW5nSW5mb1N1bW1hcnk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIDxkaXY+e3RoaXMuX2J1aWxkRnVuZGluZ0luZm9ybWF0aW9uKCl9PC9kaXY+O1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNlY3Rpb24oRnVuZGluZ1N1bW1hcnksIHtcbiAgU2VjdGlvblRpdGxlOiAnZnVuZGluZ0luZm9ybWF0aW9uJ1xufSk7XG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBBY3Rpdml0eUNvbnN0YW50cyBmcm9tICcuLi8uLi8uLi9tb2R1bGVzL3V0aWwvQWN0aXZpdHlDb25zdGFudHMnO1xuaW1wb3J0IFZhbHVlQ29uc3RhbnRzIGZyb20gJy4uLy4uLy4uL3V0aWxzL1ZhbHVlQ29uc3RhbnRzJztcbmltcG9ydCBGaWVsZHNNYW5hZ2VyIGZyb20gJy4uLy4uLy4uL21vZHVsZXMvZmllbGQvRmllbGRzTWFuYWdlcic7XG5pbXBvcnQgU2VjdGlvbiBmcm9tICcuL1NlY3Rpb24uanN4JztcblxubGV0IGxvZ2dlciA9IG51bGw7XG5cbi8qKlxuICogSWRlbnRpZmljYXRpb24gc2VjdGlvblxuICogQGF1dGhvciBOYWRlamRhIE1hbmRyZXNjdVxuICovXG5jbGFzcyBBUElkZW50aWZpY2F0aW9uIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBidWlsZFNpbXBsZUZpZWxkOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIGFjdGl2aXR5RmllbGRzTWFuYWdlcjogUHJvcFR5cGVzLmluc3RhbmNlT2YoRmllbGRzTWFuYWdlcikuaXNSZXF1aXJlZCxcbiAgICBhY3Rpdml0eTogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICAgIExvZ2dlcjogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkXG4gIH07XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgY29uc3QgeyBMb2dnZXIgfSA9IHRoaXMucHJvcHM7XG4gICAgbG9nZ2VyID0gbmV3IExvZ2dlcignQVAgSWRlbnRpZmljYXRpb24nKTtcbiAgICBsb2dnZXIuZGVidWcoJ2NvbnN0cnVjdG9yJyk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBidWlsZFNpbXBsZUZpZWxkIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IGZpZWxkUGF0aHMgPSBbQWN0aXZpdHlDb25zdGFudHMuU1RBVFVTX1JFQVNPTiwgQWN0aXZpdHlDb25zdGFudHMuVFlQRV9PRl9DT09QRVJBVElPTixcbiAgICAgIEFjdGl2aXR5Q29uc3RhbnRzLlRZUEVfT0ZfSU1QTEVNRU5UQVRJT04sIEFjdGl2aXR5Q29uc3RhbnRzLk1PREFMSVRJRVMsIEFjdGl2aXR5Q29uc3RhbnRzLk9CSkVDVElWRSxcbiAgICAgIEFjdGl2aXR5Q29uc3RhbnRzLkRFU0NSSVBUSU9OLCBBY3Rpdml0eUNvbnN0YW50cy5QUk9KRUNUX0NPTU1FTlRTLCBBY3Rpdml0eUNvbnN0YW50cy5SRVNVTFRTLFxuICAgICAgQWN0aXZpdHlDb25zdGFudHMuTEVTU09OU19MRUFSTkVELCBBY3Rpdml0eUNvbnN0YW50cy5QUk9KRUNUX0lNUEFDVCwgQWN0aXZpdHlDb25zdGFudHMuQUNUSVZJVFlfU1VNTUFSWSxcbiAgICAgIEFjdGl2aXR5Q29uc3RhbnRzLkNPTkRJVElPTkFMSVRJRVMsIEFjdGl2aXR5Q29uc3RhbnRzLlBST0pFQ1RfTUFOQUdFTUVOVCxcbiAgICAgIEFjdGl2aXR5Q29uc3RhbnRzLkJVREdFVF9DT0RFX1BST0pFQ1RfSUQsIEFjdGl2aXR5Q29uc3RhbnRzLkFfQ19DSEFQVEVSLCBBY3Rpdml0eUNvbnN0YW50cy5DUklTX05VTUJFUixcbiAgICAgIEFjdGl2aXR5Q29uc3RhbnRzLkFDVElWSVRZX0JVREdFVCwgQWN0aXZpdHlDb25zdGFudHMuR09WRVJOTUVOVF9BR1JFRU1FTlRfTlVNQkVSLFxuICAgICAgQWN0aXZpdHlDb25zdGFudHMuR09WRVJOTUVOVF9BUFBST1ZBTF9QUk9DRURVUkVTLCBBY3Rpdml0eUNvbnN0YW50cy5KT0lOVF9DUklURVJJQSxcbiAgICAgIEFjdGl2aXR5Q29uc3RhbnRzLkhVTUFOSVRBUklBTl9BSURdO1xuICAgIC8vIFNob3cgYnVkZ2V0IGV4dHJhcyBmaWVsZHMgbGlrZSBtaW5pc3RyeV9jb2RlLCBldGMgb25seSB3aGVuIGFjdGl2aXR5X2J1ZGdldCBpcyBlbmFibGVkIGFuZCBoYXMgdmFsdWUgJ09uIEJ1ZGdldCcuXG4gICAgaWYgKHRoaXMucHJvcHMuYWN0aXZpdHlGaWVsZHNNYW5hZ2VyLmlzRmllbGRQYXRoRW5hYmxlZChBY3Rpdml0eUNvbnN0YW50cy5BQ1RJVklUWV9CVURHRVQpXG4gICAgICAmJiB0aGlzLnByb3BzLmFjdGl2aXR5W0FjdGl2aXR5Q29uc3RhbnRzLkFDVElWSVRZX0JVREdFVF1cbiAgICAgICYmIHRoaXMucHJvcHMuYWN0aXZpdHlbQWN0aXZpdHlDb25zdGFudHMuQUNUSVZJVFlfQlVER0VUXS52YWx1ZSA9PT0gVmFsdWVDb25zdGFudHMuT05fQlVER0VUKSB7XG4gICAgICBmaWVsZFBhdGhzLnB1c2goQWN0aXZpdHlDb25zdGFudHMuSU5ESVJFQ1RfT05fQlVER0VUKTtcbiAgICAgIGZpZWxkUGF0aHMucHVzaChBY3Rpdml0eUNvbnN0YW50cy5GWSk7XG4gICAgICBmaWVsZFBhdGhzLnB1c2goQWN0aXZpdHlDb25zdGFudHMuTUlOSVNUUllfQ09ERSk7XG4gICAgICBmaWVsZFBhdGhzLnB1c2goQWN0aXZpdHlDb25zdGFudHMuUFJPSkVDVF9DT0RFKTtcbiAgICB9XG4gICAgZmllbGRQYXRocy5wdXNoKC4uLltBY3Rpdml0eUNvbnN0YW50cy5GSU5BTkNJQUxfSU5TVFJVTUVOVCwgQWN0aXZpdHlDb25zdGFudHMuSUFUSV9JREVOVElGSUVSXSk7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIHtmaWVsZFBhdGhzLm1hcChmaWVsZFBhdGggPT4gYnVpbGRTaW1wbGVGaWVsZChmaWVsZFBhdGgsIHRydWUpKX1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2VjdGlvbihBUElkZW50aWZpY2F0aW9uLCB7IFNlY3Rpb25UaXRsZTogJ0lkZW50aWZpY2F0aW9uJyxcbiAgdXNlRW5jYXBzdWxhdGVIZWFkZXI6IHRydWUsXG4gIHNJRDogJ0FQSWRlbnRpZmljYXRpb24nXG59KTtcbiIsImltcG9ydCBUZXN0QVBGaWVsZCBmcm9tICcuL2FjdGl2aXR5UHJldmlldy9jb21wb25lbnRzL1Rlc3RBUEZpZWxkJztcbmltcG9ydCBUZXN0aW5nU2VjdGlvbiBmcm9tICcuL2FjdGl2aXR5UHJldmlldy9jb21wb25lbnRzL1Rlc3RpbmdTZWN0aW9uJztcbmltcG9ydCBDb25zdGFudHMgZnJvbSAnLi91dGlscy9Db25zdGFudHMnO1xuaW1wb3J0IEFjdGl2aXR5Q29uc3RhbnRzIGZyb20gJy4vbW9kdWxlcy91dGlsL0FjdGl2aXR5Q29uc3RhbnRzJztcbmltcG9ydCBGZWF0dXJlTWFuYWdlckNvbnN0YW50cyBmcm9tICcuL21vZHVsZXMvdXRpbC9GZWF0dXJlTWFuYWdlckNvbnN0YW50cyc7XG5pbXBvcnQgRXJyb3JDb25zdGFudHMgZnJvbSAnLi91dGlscy9jb25zdGFudHMvRXJyb3JDb25zdGFudHMnO1xuaW1wb3J0IEZpZWxkc01hbmFnZXIgZnJvbSAnLi9tb2R1bGVzL2ZpZWxkL0ZpZWxkc01hbmFnZXInO1xuaW1wb3J0IEZpZWxkUGF0aENvbnN0YW50cyBmcm9tICcuL3V0aWxzL0ZpZWxkUGF0aENvbnN0YW50cyc7XG5pbXBvcnQgVmFsdWVDb25zdGFudHMgZnJvbSAnLi91dGlscy9WYWx1ZUNvbnN0YW50cyc7XG5pbXBvcnQgQ3VycmVuY3lSYXRlc01hbmFnZXIgZnJvbSAnLi9tb2R1bGVzL3V0aWwvQ3VycmVuY3lSYXRlc01hbmFnZXInO1xuaW1wb3J0IFBvc3NpYmxlVmFsdWVzTWFuYWdlciBmcm9tICcuL21vZHVsZXMvZmllbGQvUG9zc2libGVWYWx1ZXNNYW5hZ2VyJztcbmltcG9ydCBGZWF0dXJlTWFuYWdlciBmcm9tICcuL21vZHVsZXMvdXRpbC9GZWF0dXJlTWFuYWdlcic7XG5pbXBvcnQgQVBMYWJlbCBmcm9tICcuL2FjdGl2aXR5L3ByZXZpZXcvY29tcG9uZW50cy9BUExhYmVsLmpzeCc7XG5pbXBvcnQgQVBGaWVsZCBmcm9tICcuL2FjdGl2aXR5L3ByZXZpZXcvY29tcG9uZW50cy9BUEZpZWxkLmpzeCc7XG5pbXBvcnQgVGFibGlmeSBmcm9tICcuL2FjdGl2aXR5L3ByZXZpZXcvY29tcG9uZW50cy9UYWJsaWZ5LmpzeCc7XG5pbXBvcnQgQVBQZXJjZW50YWdlRmllbGQgZnJvbSAnLi9hY3Rpdml0eS9wcmV2aWV3L2NvbXBvbmVudHMvQVBQZXJjZW50YWdlRmllbGQuanN4JztcbmltcG9ydCBBUFBlcmNlbnRhZ2VMaXN0IGZyb20gJy4vYWN0aXZpdHkvcHJldmlldy9jb21wb25lbnRzL0FQUGVyY2VudGFnZUxpc3QuanN4JztcbmltcG9ydCBTZWN0aW9uIGZyb20gJy4vYWN0aXZpdHkvcHJldmlldy9zZWN0aW9ucy9TZWN0aW9uLmpzeCc7XG5pbXBvcnQgRnVuZGluZ1N1bW1hcnkgZnJvbSAnLi9hY3Rpdml0eS9wcmV2aWV3L3NlY3Rpb25zL0Z1bmRpbmdTdW1tYXJ5LmpzeCc7XG5pbXBvcnQgQVBJZGVudGlmaWNhdGlvbiBmcm9tICcuL2FjdGl2aXR5L3ByZXZpZXcvc2VjdGlvbnMvQVBJZGVudGlmaWNhdGlvbi5qc3gnO1xuaW1wb3J0IFVJVXRpbHMgZnJvbSAnLi91dGlscy9VSVV0aWxzJztcblxuZXhwb3J0IHtcbiAgVGVzdEFQRmllbGQsIFRlc3RpbmdTZWN0aW9uLCBDb25zdGFudHMsIEFjdGl2aXR5Q29uc3RhbnRzLCBGZWF0dXJlTWFuYWdlckNvbnN0YW50cywgRXJyb3JDb25zdGFudHMsXG4gIEN1cnJlbmN5UmF0ZXNNYW5hZ2VyLCBGaWVsZHNNYW5hZ2VyLCBGaWVsZFBhdGhDb25zdGFudHMsIFZhbHVlQ29uc3RhbnRzLCBQb3NzaWJsZVZhbHVlc01hbmFnZXIsIEZlYXR1cmVNYW5hZ2VyLFxuICBBUExhYmVsLCBBUEZpZWxkLCBUYWJsaWZ5LCBBUFBlcmNlbnRhZ2VGaWVsZCwgQVBQZXJjZW50YWdlTGlzdCwgVUlVdGlscywgU2VjdGlvbiwgRnVuZGluZ1N1bW1hcnksIEFQSWRlbnRpZmljYXRpb25cbn07XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgVGVzdEFQRmllbGQsXG4gIFRlc3RpbmdTZWN0aW9uLFxuICBDb25zdGFudHMsXG4gIEFjdGl2aXR5Q29uc3RhbnRzLFxuICBGZWF0dXJlTWFuYWdlckNvbnN0YW50cyxcbiAgRXJyb3JDb25zdGFudHMsXG4gIEN1cnJlbmN5UmF0ZXNNYW5hZ2VyLFxuICBGaWVsZHNNYW5hZ2VyLFxuICBGaWVsZFBhdGhDb25zdGFudHMsXG4gIFZhbHVlQ29uc3RhbnRzLFxuICBGZWF0dXJlTWFuYWdlcixcbiAgQVBMYWJlbCxcbiAgQVBGaWVsZCxcbiAgVGFibGlmeSxcbiAgQVBQZXJjZW50YWdlRmllbGQsXG4gIEFQUGVyY2VudGFnZUxpc3QsXG4gIFNlY3Rpb24sXG4gIEZ1bmRpbmdTdW1tYXJ5LFxuICBBUElkZW50aWZpY2F0aW9uLFxuICBVSVV0aWxzXG59O1xuIl0sIm5hbWVzIjpbIlRlc3RBUEZpZWxkIiwidHJuTGFiZWwiLCJ2YWx1ZSIsImlubGluZSIsInNlcGFyYXRvciIsIm5hbWVDbGFzcyIsInZhbHVlQ2xhc3MiLCJwcm9wcyIsInRyYW5zbGF0ZSIsImFtcExvZ2dlciIsImxvZyIsInVzZVNlcGFyYXRvciIsImRpc3BsYXlDbGFzcyIsImZpZWxkQ2xhc3MiLCJzdHlsZXMiLCJibG9jayIsImNsYXNzTmFtZXMiLCJmaWVsZFZhbHVlQ2xhc3MiLCJkaXNwbGF5VmFsdWUiLCJBcnJheSIsImlzQXJyYXkiLCJPYmplY3QiLCJmb3JFYWNoIiwicHVzaCIsInYiLCJzb3J0Iiwiam9pbiIsIlN0cmluZyIsInVzZUlubmVySFRNTCIsIl9faHRtbCIsImZpZWxkTmFtZUNsYXNzIiwidGl0bGUiLCJfZ2V0VmFsdWUiLCJDb21wb25lbnQiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJhbnkiLCJib29sIiwib2JqZWN0IiwiaXNSZXF1aXJlZCIsImZ1bmMiLCJUZXN0aW5nU2VjdGlvbiIsIkJBU0VfUkVTVF9VUkwiLCJDT05ORUNUSU9OX1RJTUVPVVQiLCJDT05ORUNUSU9OX0ZPUkNFRF9USU1FT1VUIiwiVElNRU9VVF9DSEVDS19JTlRFUlZBTCIsIk1BWF9SRVRSWV9BVEVNUFRTIiwiRVJST1JTX1RPX1JFVFJZIiwiRVJST1JTX05PX0FNUF9TRVJWRVIiLCJDT05ORUNUSVZJVFlfQ0hFQ0tfSU5URVJWQUwiLCJXT1JLU1BBQ0VfVVJMIiwiTE9HSU5fVVJMIiwiREVTS1RPUF9VUkwiLCJERVNLVE9QX0NVUlJFTlRfVVJMIiwiU1lOQ1VQX1JFRElSRUNUX1VSTCIsIlNZTkNVUF9ISVNUT1JZX1RBUkdFVCIsIlNZTkNVUF9TVU1NQVJZX1VSTCIsIkFDVElWSVRZX1BSRVZJRVdfVVJMIiwiQUNUSVZJVFlfRURJVF9VUkwiLCJVUERBVEVfVVJMIiwiU0VUVVBfVVJMIiwiU0VUVElOR1NfVVJMIiwiQ09MTEVDVElPTl9VU0VSUyIsIkNPTExFQ1RJT05fV09SS1BBQ0VTIiwiQ09MTEVDVElPTl9URUFNTUVNQkVSUyIsIkNPTExFQ1RJT05fQ0xJRU5UX1NFVFRJTkdTIiwiQ09MTEVDVElPTl9HTE9CQUxfU0VUVElOR1MiLCJDT0xMRUNUSU9OX0FDVElWSVRJRVMiLCJDT0xMRUNUSU9OX0ZJRUxEUyIsIkNPTExFQ1RJT05fUE9TU0lCTEVfVkFMVUVTIiwiQ09MTEVDVElPTl9TWU5DVVBfTE9HIiwiQ09MTEVDVElPTl9MQU5HUyIsIkNPTExFQ1RJT05fV1NfU0VUVElOR1MiLCJDT0xMRUNUSU9OX0NVUlJFTkNZX1JBVEVTIiwiQ09MTEVDVElPTl9GRUFUVVJFX01BTkFHRVIiLCJDT0xMRUNUSU9OX0NPTlRBQ1RTIiwiQ09MTEVDVElPTl9SRVNPVVJDRVMiLCJDT0xMRUNUSU9OX1JFUE9TSVRPUlkiLCJDT0xMRUNUSU9OX0dBWkVUVEVFUiIsIkNPTExFQ1RJT05fQ0FMRU5EQVJTIiwiQ09MTEVDVElPTl9DSEFOR0VTRVRTIiwiR0FaRVRURUVSX0RJU1RBTkNFX0RJVklERSIsIkRCX0ZJTEVfUFJFRklYIiwiREJfRklMRV9FWFRFTlNJT04iLCJEQl9DT01NT05fREFUQVNUT1JFX09QVElPTlMiLCJhdXRvbG9hZCIsImNvcnJ1cHRBbGVydFRocmVzaG9sZCIsIkRCX0FVVE9DT01QQUNUX0lOVEVSVkFMX01JTElTRUNPTkRTIiwiREJfREVGQVVMVF9RVUVSWV9MSU1JVCIsIkxBTkdVQUdFX0VOR0xJU0giLCJGU19MT0NBTEVTX0RJUkVDVE9SWSIsIkxBTkdVQUdFX01BU1RFUl9UUkFOU0xBVElPTlNfRklMRSIsIkxBTkdVQUdFX1RSQU5TTEFUSU9OU19GSUxFIiwiTEFOR1VBR0VfTkVXX1RSQU5TTEFUSU9OU19NVVNUX1NZTkMiLCJBU0FSX0RJUiIsIkFQUF9ESVJFQ1RPUlkiLCJURVNUX0RJUkVDVE9SWSIsIlNUQVRJQ19ESVIiLCJJTUFHRVNfRElSIiwiRE9DX0lDT05TIiwiREJfU1RBVElDX0RJUiIsIk1JR1JBVElPTlNfRElSIiwiSEFTSF9JVEVSQVRJT05TIiwiRElHRVNUX0FMR09SSVRITV9TSEExIiwiRElHRVNUX0FMR09SSVRITV9TSEEyNTYiLCJBQ1RJVklUWV9FRElUIiwiQUNUSVZJVFlfVklFVyIsIlNZTkNVUF9GT1JDRV9EQVlTIiwiU1lOQ1VQX0JFU1RfQkVGT1JFX0RBWVMiLCJTWU5DVVBfTk9fREFURSIsIlNZTkNVUF9UWVBFX1RSQU5TTEFUSU9OUyIsIlNZTkNVUF9UWVBFX1VTRVJTIiwiU1lOQ1VQX1RZUEVfQVNTRVRTIiwiU1lOQ1VQX1RZUEVfV09SS1NQQUNFUyIsIlNZTkNVUF9UWVBFX0dTIiwiU1lOQ1VQX1RZUEVfRVhDSEFOR0VfUkFURVMiLCJTWU5DVVBfVFlQRV9GRUFUVVJFX01BTkFHRVIiLCJTWU5DVVBfVFlQRV9XT1JLU1BBQ0VfTUVNQkVSUyIsIlNZTkNVUF9UWVBFX0FMTF9GSUVMRFMiLCJTWU5DVVBfVFlQRV9BQ1RJVklUSUVTX1BVTEwiLCJTWU5DVVBfVFlQRV9BQ1RJVklUSUVTX1BVU0giLCJTWU5DVVBfVFlQRV9BQ1RJVklUWV9GSUVMRFMiLCJTWU5DVVBfVFlQRV9BQ1RJVklUWV9GSUVMRFNfU1RSVUNUVVJBTF9DSEFOR0VTIiwiU1lOQ1VQX1RZUEVfQ09OVEFDVFNfUFVMTCIsIlNZTkNVUF9UWVBFX0NPTlRBQ1RTX1BVU0giLCJTWU5DVVBfVFlQRV9BQ1RJVklUWV9QT1NTSUJMRV9WQUxVRVMiLCJTWU5DVVBfVFlQRV9DT05UQUNUX0ZJRUxEUyIsIlNZTkNVUF9UWVBFX0NPTlRBQ1RfRklFTERTX1NUUlVDVFVSQUxfQ0hBTkdFUyIsIlNZTkNVUF9UWVBFX0NPTlRBQ1RfUE9TU0lCTEVfVkFMVUVTIiwiU1lOQ1VQX1RZUEVfUkVTT1VSQ0VTX1BVTEwiLCJTWU5DVVBfVFlQRV9SRVNPVVJDRVNfUFVTSCIsIlNZTkNVUF9UWVBFX1JFU09VUkNFX0ZJRUxEUyIsIlNZTkNVUF9UWVBFX1JFU09VUkNFX0ZJRUxEU19TVFJVQ1RVUkFMX0NIQU5HRVMiLCJTWU5DVVBfVFlQRV9SRVNPVVJDRV9QT1NTSUJMRV9WQUxVRVMiLCJTWU5DVVBfVFlQRV9DT01NT05fUE9TU0lCTEVfVkFMVUVTIiwiU1lOQ1VQX1RZUEVfV09SS1NQQUNFX1NFVFRJTkdTIiwiU1lOQ1VQX1RZUEVfTUFQX1RJTEVTIiwiU1lOQ1VQX1RZUEVfR0FaRVRURUVSIiwiU1lOQ1VQX1RZUEVfQ0FMRU5EQVJTIiwiU1lOQ1VQX1NUQVRVU19TVUNDRVNTIiwiU1lOQ1VQX1NUQVRVU19GQUlMIiwiU1lOQ1VQX1NUQVRVU19QQVJUSUFMIiwiU1lOQ1VQX1NUQVRVU19DQU5DRUxFRCIsIlNZTkNVUF9TWU5DX1JFUVVFU1RFRF9BVCIsIlNZTkNVUF9TWU5DX1JFUVVFU1RFRF9CWSIsIlNZTkNVUF9EQVRFVElNRV9GSUVMRCIsIlNZTkNVUF9ESUZGX0xFRlRPVkVSIiwiU1lOQ1VQX0RFUEVOREVOQ1lfQ0hFQ0tfSU5URVJWQUwiLCJTWU5DVVBfREVUQUlMU19TWU5DRUQiLCJTWU5DVVBfREVUQUlMU19VTlNZTkNFRCIsIlNZTkNVUF9SRVNPVVJDRV9QVUxMX0JBVENIX1NJWkUiLCJTWU5DVVBfQUNUSVZJVElFU19QVUxMX0JBVENIX1NJWkUiLCJTWU5DVVBfQ09OVEFDVFNfUFVMTF9CQVRDSF9TSVpFIiwiQUNUSVZJVFlfU1RBVFVTX0RSQUZUIiwiQUNUSVZJVFlfU1RBVFVTX1VOVkFMSURBVEVEIiwiQUNUSVZJVFlfU1RBVFVTX1ZBTElEQVRFRCIsIkNVUlJFTkNZX0hPVVIiLCJERUZBVUxUX0NVUlJFTkNZIiwiUkFURV9TQU1FX0NVUlJFTkNZIiwiUkFURV9DVVJSRU5DWV9OT1RfRk9VTkQiLCJDVVJSRU5DWV9QQUlSIiwiVkVSU0lPTl9QQVRURVJOIiwiVkVSU0lPTl9QQVRURVJOX0dST1VQU19UT19FWFRSQUNUIiwiQU1QX0NPVU5UUllfTE9HTyIsIkFTU0VUU19ESVJFQ1RPUlkiLCJCQVNFXzY0X1BOR19QUkVGSVgiLCJUUkFOU1BBUkVOVF9GTEFHIiwiSEVMUF9QREZfRklMRU5BTUUiLCJIRUxQX0RJUiIsIkVORFNfV0lUSF9QVU5DVFVBVElPTl9SRUdFWCIsIk1BUF9USUxFU19ESVIiLCJUSUxFU19aSVBfRklMRSIsIk1BUF9NQVJLRVJfSU1BR0UiLCJNQVBfTUFSS0VSX1NIQURPVyIsIk1BUF9NQVJLRVJfQ0lSQ0xFX1JFRCIsIk1BUF9NQVJLRVJfQ0lSQ0xFX0dSRUVOIiwiUE9MWUdPTl9CQVNFX0NPTE9SIiwiREdfQ09NUEFOWV9OQU1FIiwiREdfQUREUkVTU18xIiwiREdfQUREUkVTU18yIiwiREdfQ09OVEFDVF9JTkZPIiwiTE9HX0RJUiIsIkxPR19GSUxFX05BTUUiLCJMT0dfRklMRV9FWFRFTlNJT04iLCJNRVNTQUdFX1RJTUVPVVQiLCJNRVNTQUdFX0RJU0FQUEVBUl9USU1FT1VUIiwiTUVTU0FHRV9DSEVDS19JTlRFUlZBTCIsIk1FU1NBR0VfQU5JTUFUSU9OX0RVUkFUSU9OIiwiSU5URVJOQUxfREFURV9GT1JNQVQiLCJNSU5fU1VQUE9SVEVEX1lFQVIiLCJNQVhfU1VQUE9SVEVEX1lFQVIiLCJVUERBVEVTX0RJUiIsIkNPTlRFTlRfRElTUE9TSVRJT05fSEVBREVSIiwiVVBEQVRFX1RNUF9GSUxFIiwiT1RIRVJfSUQiLCJOUl9TWU5DX0hJU1RPUllfRU5UUklFUyIsIk5SX0xPR19GSUxFUyIsIk9MRF9TWU5DX0xPR1NfRFVSQVRJT05fSVNPXzg2MDEiLCJOUl9PTERfU1lOQ19MT0dTX1RPX0tFRVBfTUlOSU1VTSIsIk1BU1RFUl9CUkFOQ0giLCJERVZFTE9QX0JSQU5DSCIsIlJFTEVBU0VfQlJBTkNIX1JFR0VYIiwiUkVMRUFTRV9CUkFOQ0hFUyIsIkRJU0FCTEVfQ0hBTkdFTE9HUyIsIm1vZHVsZSIsImZyZWV6ZSIsIlBVQkxJQ19WSUVXX0NIQU5HRV9QQVNTV09SRCIsIlBVQkxJQ19WSUVXX1RST1VCTEVfU0lHTl9JTiIsIkFDVElWSVRZX0RFTElWRVJZX1JBVEUiLCJBQ1RJVklUWV9QUk9KRUNUX0lEX0FORF9QTEFOTklORyIsIkFDVElWSVRZX0RVUkFUSU9OX09GX1BST0pFQ1QiLCJBQ1RJVklUWV9URUFNX0xFQURFUiIsIkFDVElWSVRZX1NBTUVfQVNfUFJPUE9TRURfU1RBUlRfREFURSIsIkFDVElWSVRZX1NBTUVfQVNfUFJPUE9TRURfQVBQUk9WQUxfREFURSIsIkFDVElWSVRZX0lERU5USUZJQ0FUSU9OIiwiQUNUSVZJVFlfTEFTVF9VUERBVEVEX0JZIiwiQUNUSVZJVFlfTEFTVF9VUERBVEVEX09OIiwiQUNUSVZJVFlfRlVORElORyIsIkFGX0ZVTkRJTkdfRlVORElOR0dST1VQX0ZVTkRJTkdJVEVNIiwiQUNUSVZJVFlfU0VDVE9SUyIsIkFDVElWSVRZX1BSSU1BUllfU0VDVE9SUyIsIkFDVElWSVRZX1NFQ09OREFSWV9TRUNUT1JTIiwiQUNUSVZJVFlfU1RSVUNUVVJFUyIsIkFDVElWSVRZX1NUUlVDVFVSRVNfQUREX1NUUlVDVFVSRSIsIkFDVElWSVRZX09SR0FOSVpBVElPTlMiLCJBQ1RJVklUWV9PUkdBTklaQVRJT05TX0RPTk9SX09SR0FOSVpBVElPTiIsIkFDVElWSVRZX09SR0FOSVpBVElPTlNfQkVORUZJQ0lBUllfQUdFTkNZIiwiQUNUSVZJVFlfT1JHQU5JWkFUSU9OU19DT05UUkFDVElOR19BR0VOQ1kiLCJBQ1RJVklUWV9PUkdBTklaQVRJT05TX0VYRUNVVElOR19BR0VOQ1kiLCJBQ1RJVklUWV9PUkdBTklaQVRJT05TX0lNUExFTUVOVElOR19BR0VOQ1kiLCJBQ1RJVklUWV9PUkdBTklaQVRJT05TX1JFR0lPTkFMX0dST1VQIiwiQUNUSVZJVFlfT1JHQU5JWkFUSU9OU19SRUxBVEVEX0dPVkVSTk1FTlRfT1JHQU5JWkFUSU9OIiwiQUNUSVZJVFlfT1JHQU5JWkFUSU9OU19TRUNUT1JfR1JPVVAiLCJBRERfRlVORElOR19BVVRPIiwiQUNUSVZJVFlfT1JHQU5JWkFUSU9OU19CRU5FRklDSUFSWV9BR0VOQ1lfQUREX0ZVTkRJTkdfQVVUTyIsIkFDVElWSVRZX09SR0FOSVpBVElPTlNfQ09OVFJBQ1RJTkdfQUdFTkNZX0FERF9GVU5ESU5HX0FVVE8iLCJBQ1RJVklUWV9PUkdBTklaQVRJT05TX0RPTk9SX09SR0FOSVpBVElPTl9BRERfRlVORElOR19BVVRPIiwiQUNUSVZJVFlfT1JHQU5JWkFUSU9OU19FWEVDVVRJTkdfQUdFTkNZX0FERF9GVU5ESU5HX0FVVE8iLCJBQ1RJVklUWV9PUkdBTklaQVRJT05TX0lNUExFTUVOVElOR19BR0VOQ1lfQUREX0ZVTkRJTkdfQVVUTyIsIkFDVElWSVRZX09SR0FOSVpBVElPTlNfUkVHSU9OQUxfR1JPVVBfQUREX0ZVTkRJTkdfQVVUTyIsIkFDVElWSVRZX09SR0FOSVpBVElPTlNfUkVTUE9OU0lCTEVfT1JHQU5JWkFUSU9OX0FERF9GVU5ESU5HX0FVVE8iLCJBQ1RJVklUWV9PUkdBTklaQVRJT05TX1NFQ1RPUl9HUk9VUF9BRERfRlVORElOR19BVVRPIiwiQUNUSVZJVFlfRlVORElOR19TRUFSQ0giLCJBQ1RJVklUWV9GVU5ESU5HX1NFQVJDSF9PUkdBTklaQVRJT04iLCJBQ1RJVklUWV9GVU5ESU5HX1NFTEVDVF9PUkdfVFlQRSIsIkFDVElWSVRZX1BST0dSQU0iLCJBQ1RJVklUWV9QTEFOTklORyIsIkFDVElWSVRZX0NPTlRBQ1QiLCJBQ1RJVklUWV9ET0NVTUVOVFNfQUREX0RPQ1VNRU5UIiwiQUNUSVZJVFlfRE9DVU1FTlRTX0FERF9XRUJMSU5LIiwiQUNUSVZJVFlfSVNTVUVTX0FERF9JU1NVRSIsIkFDVElWSVRZX0lTU1VFU19ERUxFVEVfSVNTVUUiLCJBQ1RJVklUWV9JU1NVRVNfQUREX01FQVNVUkUiLCJBQ1RJVklUWV9JU1NVRVNfREVMRVRFX01FQVNVUkUiLCJBQ1RJVklUWV9JU1NVRVNfQUREX0FDVE9SIiwiQUNUSVZJVFlfSVNTVUVTX0RFTEVURV9BQ1RPUiIsIkFDVElWSVRZX0RJU0JVUlNFTUVOVFNfRlVORElOR19GTE9XU19PUkdST0xFX0FERF9JTVBMRU1FTlRJTkdfQUdFTkNZIiwiQUNUSVZJVFlfRElTQlVSU0VNRU5UU19GVU5ESU5HX0ZMT1dTX09SR1JPTEVfQUREX0NPTlRSQUNUSU5HX0FHRU5DWSIsIkFDVElWSVRZX0RJU0JVUlNFTUVOVFNfRlVORElOR19GTE9XU19PUkdST0xFX0FERF9CRU5FRklDSUFSWV9BR0VOQ1kiLCJBQ1RJVklUWV9ESVNCVVJTRU1FTlRTX0ZVTkRJTkdfRkxPV1NfT1JHUk9MRV9BRERfRE9OT1JfT1JHQU5JWkFUSU9OIiwiQUNUSVZJVFlfRElTQlVSU0VNRU5UU19GVU5ESU5HX0ZMT1dTX09SR1JPTEVfQUREX0VYRUNVVElOR19BR0VOQ1kiLCJBQ1RJVklUWV9ESVNCVVJTRU1FTlRTX0ZVTkRJTkdfRkxPV1NfT1JHUk9MRV9BRERfUkVHSU9OQUxfR1JPVVAiLCJBQ1RJVklUWV9ESVNCVVJTRU1FTlRTX0ZVTkRJTkdfRkxPV1NfT1JHUk9MRV9BRERfUkVTUE9OU0lCTEVfT1JHQU5JWkFUSU9OIiwiQUNUSVZJVFlfRElTQlVSU0VNRU5UU19GVU5ESU5HX0ZMT1dTX09SR1JPTEVfQUREX1NFQ1RPUl9HUk9VUCIsIkFDVElWSVRZX0NPTU1JVE1FTlRTX0ZVTkRJTkdfRkxPV1NfT1JHUk9MRV9BRERfSU1QTEVNRU5USU5HX0FHRU5DWSIsIkFDVElWSVRZX0NPTU1JVE1FTlRTX0ZVTkRJTkdfRkxPV1NfT1JHUk9MRV9BRERfQ09OVFJBQ1RJTkdfQUdFTkNZIiwiQUNUSVZJVFlfQ09NTUlUTUVOVFNfRlVORElOR19GTE9XU19PUkdST0xFX0FERF9CRU5FRklDSUFSWV9BR0VOQ1kiLCJBQ1RJVklUWV9DT01NSVRNRU5UU19GVU5ESU5HX0ZMT1dTX09SR1JPTEVfQUREX0RPTk9SX09SR0FOSVpBVElPTiIsIkFDVElWSVRZX0NPTU1JVE1FTlRTX0ZVTkRJTkdfRkxPV1NfT1JHUk9MRV9BRERfRVhFQ1VUSU5HX0FHRU5DWSIsIkFDVElWSVRZX0NPTU1JVE1FTlRTX0ZVTkRJTkdfRkxPV1NfT1JHUk9MRV9BRERfUkVHSU9OQUxfR1JPVVAiLCJBQ1RJVklUWV9DT01NSVRNRU5UU19GVU5ESU5HX0ZMT1dTX09SR1JPTEVfQUREX1JFU1BPTlNJQkxFX09SR0FOSVpBVElPTiIsIkFDVElWSVRZX0NPTU1JVE1FTlRTX0ZVTkRJTkdfRkxPV1NfT1JHUk9MRV9BRERfU0VDVE9SX0dST1VQIiwiQUNUSVZJVFlfRVhQRU5ESVRVUkVTX0ZVTkRJTkdfRkxPV1NfT1JHUk9MRV9BRERfSU1QTEVNRU5USU5HX0FHRU5DWSIsIkFDVElWSVRZX0VYUEVORElUVVJFU19GVU5ESU5HX0ZMT1dTX09SR1JPTEVfQUREX0NPTlRSQUNUSU5HX0FHRU5DWSIsIkFDVElWSVRZX0VYUEVORElUVVJFU19GVU5ESU5HX0ZMT1dTX09SR1JPTEVfQUREX0JFTkVGSUNJQVJZX0FHRU5DWSIsIkFDVElWSVRZX0VYUEVORElUVVJFU19GVU5ESU5HX0ZMT1dTX09SR1JPTEVfQUREX0RPTk9SX09SR0FOSVpBVElPTiIsIkFDVElWSVRZX0VYUEVORElUVVJFU19GVU5ESU5HX0ZMT1dTX09SR1JPTEVfQUREX0VYRUNVVElOR19BR0VOQ1kiLCJBQ1RJVklUWV9FWFBFTkRJVFVSRVNfRlVORElOR19GTE9XU19PUkdST0xFX0FERF9SRUdJT05BTF9HUk9VUCIsIkFDVElWSVRZX0VYUEVORElUVVJFU19GVU5ESU5HX0ZMT1dTX09SR1JPTEVfQUREX1JFU1BPTlNJQkxFX09SR0FOSVpBVElPTiIsIkFDVElWSVRZX0VYUEVORElUVVJFU19GVU5ESU5HX0ZMT1dTX09SR1JPTEVfQUREX1NFQ1RPUl9HUk9VUCIsIk1URUZfUFJPSkVDVElPTlMiLCJNVEVGX1BST0pFQ1RJT05TX0FNT1VOVCIsIk1URUZfUFJPSkVDVElPTlNfQ1VSUkVOQ1kiLCJNVEVGX1BST0pFQ1RJT05TX1BST0pFQ1RJT04iLCJNVEVGX1BST0pFQ1RJT05TX0RBVEUiLCJVSVV0aWxzIiwiaGFzaCIsImkiLCJsZW5ndGgiLCJjaGFyQ29kZUF0Iiwic3RyaW5nVG9JZCIsIkRhdGUiLCJub3ciLCJNYXRoIiwicmFuZG9tIiwidG9TdHJpbmciLCJzdWJzdHJpbmciLCJ0cnVuYyIsInRleHQiLCJyZXBsYWNlIiwiY2hhciIsInRvVXBwZXJDYXNlIiwib2JqIiwiSlNPTiIsInBhcnNlIiwic3RyaW5naWZ5IiwiQUNUSVZJVFlfQlVER0VUIiwiQUNUSVZJVFlfU1RBVFVTIiwiU1RBVFVTX1JFQVNPTiIsIkZJTkFOQ0lBTF9JTlNUUlVNRU5UIiwiVFlQRV9PRl9JTVBMRU1FTlRBVElPTiIsIk9CSkVDVElWRSIsIlJFU1VMVFMiLCJCVURHRVRfQ09ERV9QUk9KRUNUX0lEIiwiQUNUVUFMX0FQUFJPVkFMX0RBVEUiLCJGVU5ESU5HUyIsIkZVTkRJTkdfRE9OT1JfT1JHX0lEIiwiSVNfRFJBRlQiLCJPUkdfUk9MRV9PUkdfSUQiLCJBRERJVElPTkFMX0lORk8iLCJQUklNQVJZX1NFQ1RPUlMiLCJTRUNPTkRBUllfU0VDVE9SUyIsIlRFUlRJQVJZX1NFQ1RPUlMiLCJUQUdfU0VDVE9SUyIsIlNFQ1RPUiIsIlNFQ1RPUl9QRVJDRU5UQUdFIiwiRklOQU5DSU5HX0lOU1RSVU1FTlQiLCJNT0RBTElUSUVTIiwiTElORV9NSU5JU1RSWV9SQU5LIiwiR09WRVJOTUVOVF9BR1JFRU1FTlRfTlVNQkVSIiwiRlVORElOR19TVEFUVVMiLCJMT0NBVElPTlMiLCJMT0NBVElPTiIsIkxPQ0FUSU9OX1BFUkNFTlRBR0UiLCJJTVBMRU1FTlRBVElPTl9MT0NBVElPTiIsIklNUExFTUVOVEFUSU9OX0xFVkVMIiwiQVBQUk9WQUxfU1RBVFVTIiwiQVBQUk9WRURfQlkiLCJBUFBST1ZBTF9EQVRFIiwiVFlQRV9PRl9BU1NJU1RBTkNFIiwiRVhQRU5ESVRVUkVfQ0xBU1MiLCJGVU5ESU5HX0RFVEFJTFMiLCJNT0RFX09GX1BBWU1FTlQiLCJGVU5ESU5HX0NMQVNTSUZJQ0FUSU9OX0RBVEUiLCJBR1JFRU1FTlQiLCJET05PUl9PQkpFQ1RJVkUiLCJDT05ESVRJT05TIiwiQUdSRUVNRU5UX0NPREUiLCJBR1JFRU1FTlRfVElUTEUiLCJQUk9KRUNUX0NBVEVHT1JZIiwiUFJPSkVDVF9JTVBMRU1FTlRJTkdfVU5JVCIsIk9SR0FOSVpBVElPTiIsIlBFUkNFTlRBR0UiLCJBTVBfT1JHQU5JWkFUSU9OX1JPTEVfSUQiLCJST0xFIiwiRVhFQ1VUSU5HX0FHRU5DWSIsIkNPTlRSQUNUSU5HX0FHRU5DWSIsIkJFTkVGSUNJQVJZX0FHRU5DWSIsIklNUExFTUVOVElOR19BR0VOQ1kiLCJSRVNQT05TSUJMRV9PUkdBTklaQVRJT04iLCJET05PUl9PUkdBTklaQVRJT04iLCJSRUdJT05BTF9HUk9VUCIsIlNFQ1RPUl9HUk9VUCIsIkJVREdFVFMiLCJCVURHRVRfQ09ERSIsIkJVREdFVF9PUkdBTklaQVRJT05fQ09ERSIsIkFSQ0hJVkVEIiwiVFJBTlNBQ1RJT05fREFURSIsIlRSQU5TQUNUSU9OX1RZUEUiLCJDT01NSVRNRU5UUyIsIkRJU0JVUlNFTUVOVFMiLCJFWFBFTkRJVFVSRVMiLCJFU1RJTUFURURfRElTQlVSU0VNRU5UUyIsIlRSQU5TQUNUSU9OX0FNT1VOVCIsIkFESlVTVE1FTlRfVFlQRSIsIkFDVFVBTF9TVEFSVF9EQVRFIiwiUFJPUE9TRURfU1RBUlRfREFURSIsIkFDVFVBTF9DT01QTEVUSU9OX0RBVEUiLCJDT05UUkFDVElOR19EQVRFIiwiRElTQlVSU0VNRU5UX0RBVEUiLCJQUk9QT1NFRF9BUFBST1ZBTF9EQVRFIiwiT1JJR0lOQUxfQ09NUExFVElPTl9EQVRFIiwiUFJPUE9TRURfQ09NUExFVElPTl9EQVRFIiwiRklOQUxfREFURV9GT1JfRElTQlVSU0VNRU5UUyIsIkZJTkFMX0RBVEVfRk9SX0NPTlRSQUNUSU5HIiwiRUZGRUNUSVZFX0ZVTkRJTkdfREFURSIsIkZVTkRJTkdfQ0xPU0lOR19EQVRFIiwiUkFUSUZJQ0FUSU9OX0RBVEUiLCJNQVRVUklUWSIsIkxBU1RfQVVESVRfREFURSIsIlNJR05BVFVSRV9EQVRFIiwiSFVNQU5JVEFSSUFOX0FJRCIsIkRJU0FTVEVSX1JFU1BPTlNFIiwiUFJPR1JBTSIsIlBST0dSQU1fUEVSQ0VOVEFHRSIsIlBST0dSQU1fU0VUVElOR1MiLCJOQVRJT05BTF9QTEFOX09CSkVDVElWRSIsIlBSSU1BUllfUFJPR1JBTVMiLCJTRUNPTkRBUllfUFJPR1JBTVMiLCJURVJUSUFSX1BST0dSQU1TIiwiR09WRVJOTUVOVF9BUFBST1ZBTF9QUk9DRURVUkVTIiwiSk9JTlRfQ1JJVEVSSUEiLCJURUFNIiwiUkVKRUNURURfSUQiLCJJTlRFUk5BTF9JRCIsIkFNUF9JRCIsIlBST0pFQ1RfVElUTEUiLCJERVNDUklQVElPTiIsIk1PRElGSUVEX0JZIiwiTU9ESUZJRURfT04iLCJDUkVBVEVEX0JZIiwiQ1JFQVRFRF9PTiIsIkxBU1RfSU1QT1JURURfQlkiLCJDTElFTlRfQ0hBTkdFX0lEIiwiQ0xJRU5UX0NSRUFURURfT04iLCJDTElFTlRfVVBEQVRFRF9PTiIsIklTX1BVU0hFRCIsIkFDVElWSVRZX0dST1VQIiwiVkVSU0lPTiIsIlBST0pFQ1RfQ09NTUVOVFMiLCJMRVNTT05TX0xFQVJORUQiLCJQUk9KRUNUX0lNUEFDVCIsIkFDVElWSVRZX1NVTU1BUlkiLCJDT05ESVRJT05BTElUSUVTIiwiUFJPSkVDVF9NQU5BR0VNRU5UIiwiQV9DX0NIQVBURVIiLCJDUklTX05VTUJFUiIsIklBVElfSURFTlRJRklFUiIsIkFDVElWSVRZX0lOVEVSTkFMX0lEUyIsIkhJRVJBUkNISUNBTF9WQUxVRSIsIkhJRVJBUkNISUNBTF9WQUxVRV9QQVJUUyIsIkhJRVJBUkNISUNBTF9WQUxVRV9ERVBUSCIsIlBQQ19BTU9VTlQiLCJSUENfQU1PVU5UIiwiUFBDX0FOTlVBTF9CVURHRVRTIiwiQU1PVU5UIiwiQ1VSUkVOQ1kiLCJGVU5ESU5HX0RBVEUiLCJDT01QT05FTlRTIiwiVE9UQUxfTlVNQkVSX09GX0ZVTkRJTkdfU09VUkNFUyIsIlNPVVJDRV9ST0xFIiwiQU1QX0ZVTkRJTkdfSUQiLCJJU1NVRVMiLCJJU1NVRV9EQVRFIiwiSVNTVUVfTkFNRSIsIk1FQVNVUkVTIiwiTUVBU1VSRV9OQU1FIiwiTUVBU1VSRV9EQVRFIiwiQUNUT1JTIiwiQUNUT1JfTkFNRSIsIlNUUlVDVFVSRVMiLCJTVFJVQ1RVUkVTX1RJVExFIiwiU1RSVUNUVVJFU19ERVNDUklQVElPTiIsIlNUUlVDVFVSRVNfTEFUSVRVREUiLCJTVFJVQ1RVUkVTX0xPTkdJVFVERSIsIlNUUlVDVFVSRVNfQ09MT1IiLCJTVFJVQ1RVUkVTX0xBVCIsIlNUUlVDVFVSRVNfTE5HIiwiU1RSVUNUVVJFU19TSEFQRSIsIlNUUlVDVFVSRVNfUE9JTlQiLCJTVFJVQ1RVUkVTX1BPTFlHT04iLCJTVFJVQ1RVUkVTX1BPTFlMSU5FIiwiU1RSVUNUVVJFU19DT09SRElOQVRFUyIsIkNPTVBPTkVOVF9UWVBFIiwiQ09NUE9ORU5UX1RJVExFIiwiQ09NUE9ORU5UX0ZVTkRJTkciLCJDT01QT05FTlRfREVTQ1JJUFRJT04iLCJDT01QT05FTlRfT1JHQU5JWkFUSU9OIiwiRlVORElOR19BTU9VTlRfSUQiLCJFWFRSQV9JTkZPIiwiVkFMVUUiLCJBQ1JPTllNIiwiVFlQRV9PRl9DT09QRVJBVElPTiIsIkFOTlVBTF9QUk9KRUNUX0JVREdFVF9JRCIsIlRZUEUiLCJZRUFSIiwiR1JPVVBfVkVSU0lPTkVEX0ZVTkRJTkciLCJBQ1RJVkVfTElTVCIsIkFDVElWRSIsIkRFTEVHQVRFRF9DT09QRVJBVElPTiIsIkRFTEVHQVRFRF9QQVJUTkVSIiwiRklOQU5DSU5HX0lEIiwiRElTQlVSU0VNRU5UX09SREVSX0lEIiwiUExFREdFIiwiQ0FQSVRBTF9TUEVORElOR19QRVJDRU5UQUdFIiwiUkVQT1JUSU5HX0RBVEUiLCJSRUNJUElFTlRfUk9MRSIsIlJFQ0lQSUVOVF9PUkdBTklaQVRJT04iLCJURU1QT1JBTF9JRCIsIk1JTklTVFJZX0NPREUiLCJQUk9KRUNUX0NPREUiLCJGWSIsIklORElSRUNUX09OX0JVREdFVCIsIklNUExFTUVOVEFUSU9OX0xFVkVMU19FWFRSQV9JTkZPIiwiSU1QTEVNRU5UQVRJT05fTE9DQVRJT05fRVhUUkFfSU5GTyIsIkRPTk9SX0NPTlRBQ1QiLCJQUk9KRUNUX0NPT1JESU5BVE9SX0NPTlRBQ1QiLCJTRUNUT1JfTUlOSVNUUllfQ09OVEFDVCIsIk1PRkVEX0NPTlRBQ1QiLCJJTVBMRU1FTlRJTkdfRVhFQ1VUSU5HX0FHRU5DWV9DT05UQUNUIiwiQ09OVEFDVCIsIk9SR0FOSVpBVElPTl9HUk9VUCIsIkZJWEVEX0VYQ0hBTkdFX1JBVEUiLCJQUklNQVJZX0NPTlRBQ1QiLCJBQ1RJVklUWV9ET0NVTUVOVFMiLCJET0NVTUVOVF9UWVBFIiwiSVNPMiIsIlBST0pFQ1RJT04iLCJQSVBFTElORSIsIlBST0pFQ1RJT05fREFURSIsIlNBTUVfQVNfUFJPUE9TRURfU1RBUlRfREFURV9MQUJFTCIsIlNBTUVfQVNfUFJPUE9TRURfQVBQUk9WQUxfREFURV9MQUJFTCIsIkRFUEVOREVOQ1lfSU1QTEVNRU5UQVRJT05fTEVWRUxfUFJFU0VOVCIsIkRFUEVOREVOQ1lfSU1QTEVNRU5UQVRJT05fTEVWRUxfVkFMSUQiLCJERVBFTkRFTkNZX0lNUExFTUVOVEFUSU9OX0xPQ0FUSU9OX1BSRVNFTlQiLCJERVBFTkRFTkNZX0lNUExFTUVOVEFUSU9OX0xPQ0FUSU9OX1ZBTElEIiwiREVQRU5ERU5DWV9QUk9KRUNUX0NPREVfT05fQlVER0VUIiwiREVQRU5ERU5DWV9PTl9CVURHRVQiLCJERVBFTkRFTkNZX1RSQU5TQUNUSU9OX1BSRVNFTlQiLCJERVBFTkRFTkNZX0NPTVBPTkVOVF9GVU5ESU5HX09SR19WQUxJRCIsIkFQX1NFQ1RJT05fSURTIiwia2V5IiwiZm1QYXRoIiwiRk1DIiwic2VjdGlvblBhdGgiLCJBQ1RJVklUWV9JTlRFUk5BTF9JRFNfQ09MUyIsIkFDVElWSVRZX1BMQU5OSU5HX0NPTFMiLCJBQ1RJVklUWV9MT0NBVElPTl9DT0xTIiwiQUNUSVZJVFlfRlVORElOR19DT0xTIiwiQUNUSVZJVFlfQ09OVEFDVF9DT0xTIiwiQVBfRlVORElOR1NfVEFCTEVfQ09MUyIsIk1VTFRJX1NFTEVDVF9NSU5fU0laRSIsIk1VTFRJX1NFTEVDVF9NQVhfU0laRSIsInRvRmllbGROYW1lcyIsImxpc3RPZk5hbWVzIiwibWFwIiwidG9GaWVsZE5hbWUiLCJuYW1lIiwidG9Mb3dlckNhc2UiLCJ0b09yaWdpbmFsTGFiZWwiLCJmaWVsZE5hbWUiLCJjYXBpdGFsaXplIiwiTk9USUZJQ0FUSU9OX09SSUdJTl9BUElfU0VDVVJJVFkiLCJOT1RJRklDQVRJT05fT1JJR0lOX0FQSV9ORVRXT1JLIiwiTk9USUZJQ0FUSU9OX09SSUdJTl9BUElfU1lOQ1VQIiwiTk9USUZJQ0FUSU9OX09SSUdJTl9BUElfR0VORVJBTCIsIk5PVElGSUNBVElPTl9PUklHSU5fREFUQUJBU0UiLCJOT1RJRklDQVRJT05fT1JJR0lOX0FVVEhFTlRJQ0FUSU9OIiwiTk9USUZJQ0FUSU9OX09SSUdJTl9XT1JLU1BBQ0VfRklMVEVSIiwiTk9USUZJQ0FUSU9OX09SSUdJTl9XT1JLU1BBQ0UiLCJOT1RJRklDQVRJT05fT1JJR0lOX1NZTkNVUF9QUk9DRVNTIiwiTk9USUZJQ0FUSU9OX09SSUdJTl9DVVJSRU5DWV9NQU5BR0VSIiwiTk9USUZJQ0FUSU9OX09SSUdJTl9EQVRFUyIsIk5PVElGSUNBVElPTl9PUklHSU5fQUNUSVZJVFkiLCJOT1RJRklDQVRJT05fT1JJR0lOX1JFU09VUkNFIiwiTk9USUZJQ0FUSU9OX09SSUdJTl9JMThORVhUIiwiTk9USUZJQ0FUSU9OX09SSUdJTl9VUERBVEVfQ0hFQ0siLCJOT1RJRklDQVRJT05fT1JJR0lOX1VQREFURSIsIk5PVElGSUNBVElPTl9PUklHSU5fU0VUVVAiLCJOT1RJRklDQVRJT05fT1JJR0lOX1NFVFRJTkdTIiwiTk9USUZJQ0FUSU9OX1NFVkVSSVRZX1dBUk5JTkciLCJOT1RJRklDQVRJT05fU0VWRVJJVFlfSU5GTyIsIk5PVElGSUNBVElPTl9TRVZFUklUWV9FUlJPUiIsIk5PVElGSUNBVElPTl9FUlJPUl9MRVZFTF9NSU5PUiIsIk5PVElGSUNBVElPTl9FUlJPUl9MRVZFTF9CTE9DS0VSIiwiTk9USUZJQ0FUSU9OX09SSUdJTl9XUk9OR19NRVRIT0RfVVNBR0UiLCJFUlJPUl9DT0RFX05PX0NPTk5FQ1RJVklUWSIsIkVSUk9SX0NPREVfQUNDRVNTX0RFTklFRCIsIk1TR19JTlZBTElEX1VSTCIsIk1TR19USU1FT1VUIiwiTVNHX1VOS05PV05fTkVUV09SS19FUlJPUiIsIk1TR19BTVBfVU5SRUFDSEFCTEUiLCJHRU5FUkFMX0NPTk5FQ1RJT05fRVJST1JTIiwiRE9OT1JfQUdFTkNZIiwiT1JHX1JPTEVfTkFNRVMiLCJBQ1RVQUwiLCJQTEFOTkVEIiwiQUNUVUFMX0NPTU1JVE1FTlRTIiwiQWN0aXZpdHlDb25zdGFudHMiLCJBQ1RVQUxfRElTQlVSU0VNRU5UUyIsIkFDVFVBTF9FWFBFTkRJVFVSRVMiLCJQTEFOTkVEX0NPTU1JVE1FTlRTIiwiUExBTk5FRF9ESVNCVVJTRU1FTlRTIiwiUExBTk5FRF9FWFBFTkRJVFVSRVMiLCJVTkFMTE9DQVRFRF9ESVNCVVJTRU1FTlRTIiwiREVMSVZFUllfUkFURSIsIkFESlVTVE1FTlRfVFlQRVMiLCJBREpVU1RNRU5UX1RZUEVTX0FQX09SREVSIiwiTkVXX0FDVElWSVRZX0lEIiwiUFJPUE9TRURfUFJPSkVDVF9DT1NUIiwiUkVWSVNFRF9QUk9KRUNUX0NPU1QiLCJBQ1JPTllNX0RPTk9SX09SR0FOSVpBVElPTiIsIkFDUk9OWU1fRVhFQ1VUSU5HX0FHRU5DWSIsIkFDUk9OWU1fSU1QTEVNRU5USU5HX0FHRU5DWSIsIkFDUk9OWU1fQkVORUZJQ0lBUllfQUdFTkNZIiwiQUNST05ZTV9SRVNQT05TSUJMRV9PUkdBTklaQVRJT04iLCJBUFBST1ZBTF9TVEFUVVNfQ1JFQVRFRCIsIkFQUFJPVkFMX1NUQVRVU19BUFBST1ZFRCIsIkFQUFJPVkFMX1NUQVRVU19FRElURUQiLCJBUFBST1ZBTF9TVEFUVVNfU1RBUlRFRF9BUFBST1ZFRCIsIkFQUFJPVkFMX1NUQVRVU19TVEFSVEVEIiwiQVBQUk9WQUxfU1RBVFVTX05PVF9BUFBST1ZFRCIsIkFQUFJPVkFMX1NUQVRVU19SRUpFQ1RFRCIsIk9OX0JVREdFVCIsIklOVEVSTkFUSU9OQUwiLCJDT1VOVFJZIiwiUkVMQVRFRF9ET0NVTUVOVFMiLCJUTVBfRU5USVRZX1ZBTElEQVRPUiIsIkFMV0FZU19SRVFVSVJFRCIsIkZVTkRJTkdfQUNUSVZFX0xJU1QiLCJGVU5ESU5HX1RZUEVfT0ZfQVNTSVNUQU5DRSIsIkZVTkRJTkdfREVUQUlMU19QQVRIIiwiRlVORElOR19DVVJSRU5DWV9QQVRIIiwiTVRFRl9DVVJSRU5DWV9QQVRIIiwiUFBDX0NVUlJFTkNZX1BBVEgiLCJSUENfQ1VSUkVOQ1lfUEFUSCIsIkNPTVBPTkVOVF9DVVJSRU5DWV9QQVRIIiwiRElTQlVSU0VNRU5UU19QQVRIIiwiQUNUSVZJVFlfSU5URVJOQUxfSURTX0lOVEVSTkFMX0lEX1BBVEgiLCJBQ1RJVklUWV9JTlRFUk5BTF9JRFNfT1JHQU5JWkFUSU9OX1BBVEgiLCJMT0NBVElPTl9QQVRIIiwiTkFUSU9OQUxfUExBTl9PQkpFQ1RJVkVfUEFUSCIsIlBSSU1BUllfUFJPR1JBTV9QQVRIIiwiU0VDT05EQVJZX1BST0dSQU1fUEFUSCIsIlBSSU1BUllfU0VDVE9SX1BBVEgiLCJTRUNPTkRBUllfU0VDVE9SX1BBVEgiLCJURVJUSUFSWV9TRUNUT1JfUEFUSCIsIkRPTk9SX09SR0FOSVpBVElPTlNfUEFUSCIsIlJFU1BPTlNJQkxFX09SR0FOSVpBVElPTl9CVURHRVRTX1BBVEgiLCJSRUxBVEVEX09SR1NfUEFUSFMiLCJWYWx1ZUNvbnN0YW50cyIsIm9yZ1JvbGUiLCJSRUxBVEVEX09SR1NfT1JHQU5JWkFUSU9OX1BBVEhTIiwiUklDSF9URVhUX0ZJRUxEUyIsIlNldCIsIlBBVEhTX1dJVEhfVFJFRV9TVFJVQ1RVUkUiLCJQQVRIU19XSVRIX0hJRVJBUkNISUNBTF9WQUxVRVMiLCJBQ1RJVklUWV9DT05UQUNUX1BBVEhTIiwiVFJBTlNBQ1RJT05fVFlQRVMiLCJUUkFOU0FDVElPTl9UWVBFU19PUkRFUkVEIiwiRlVORElOR19UUkFOU0FDVElPTl9UWVBFUyIsIkFESlVTVE1FTlRfVFlQRV9QQVRIUyIsInR0IiwiRlVORElOR19DVVJSRU5DWV9QQVRIUyIsIlBBVEhTX0ZPUl9BQ1RJVklUWV9DVVJSRU5DWSIsIlBBVEhTX0ZPUl9DVVJSRU5DWSIsIkRPX05PVF9IWURSQVRFX0ZJRUxEU19MSVNUIiwiQUxURVJOQVRFX1ZBTFVFX1BBVEgiLCJBQ1RJVklUWV9GSUVMRFNfRk1fUEFUSCIsIkZlYXR1cmVNYW5hZ2VyQ29uc3RhbnRzIiwiUFJFRklYX0FDVElWSVRZIiwiUFJFRklYX0NPTlRBQ1QiLCJQUkVGSVhfUkVTT1VSQ0UiLCJQUkVGSVhfQ09NTU9OIiwiUFJFRklYX0xJU1QiLCJGSUVMRF9QQVRIIiwiRklFTERfT1BUSU9OUyIsIkZJRUxEX09QVElPTl9VU0FCTEUiLCJMSVNUX01BWF9TSVpFIiwiUkVHRVhfUEFUVEVSTiIsIkZJRUxEX05BTUUiLCJGSUVMRF9MQUJFTCIsIkZJRUxEX1JFUVVJUkVEIiwiRklFTERfVU5JUVVFX0NPTlNUUkFJTlQiLCJGSUVMRF9UWVBFIiwiRklFTERfTEVOR1RIIiwiRklFTERfUEVSQ0VOVEFHRSIsIkZJRUxEX1BFUkNFTlRBR0VfQ09OU1RSQUlOVCIsIkZJRUxEX0lURU1fVFlQRSIsIkZJRUxEX0lNUE9SVEFCTEUiLCJGSUVMRF9JRF9PTkxZIiwiRklFTERfTVVMVElQTEVfVkFMVUVTX0FMTE9XRUQiLCJGSUVMRF9UUkVFX0NPTExFQ1RJT04iLCJGSUVMRF9DSElMRFJFTiIsIkZJRUxEX0RFUEVOREVOQ0lFUyIsIkZJRUxEX1RZUEVfTElTVCIsIkZJRUxEX1RZUEVfT0JKRUNUIiwiRklFTERfVFlQRV9TVFJJTkciLCJGSUVMRF9UWVBFX0xPTkciLCJGSUVMRF9UWVBFX0ZMT0FUIiwiRklFTERfVFlQRV9CT09MRUFOIiwiRklFTERfVFlQRV9EQVRFIiwiRklFTERfVFlQRV9USU1FU1RBTVAiLCJsb2dnZXIiLCJGaWVsZHNNYW5hZ2VyIiwiZmllbGRzTWFuYWdlciIsIkxvZ2dlck1hbmFnZXIiLCJuZXdGaWVsZHNNYW5hZ2VyIiwiYXNzaWduIiwiZmllbGRzRGVmIiwicG9zc2libGVWYWx1ZXNDb2xsZWN0aW9uIiwiY3VycmVudExhbmd1YWdlIiwiZGVidWciLCJfZmllbGRzRGVmIiwiX3Bvc3NpYmxlVmFsdWVzTWFwIiwicHYiLCJpZCIsIkZQQyIsIl9maWVsZFBhdGhzRW5hYmxlZFN0YXR1c01hcCIsIl9sYW5nIiwiQ29uc3RhbnRzIiwiX2RlZmF1bHRMYW5nIiwiY2xlYW51cCIsImZkIiwiY2hpbGRyZW4iLCJmaWVsZF9sYWJlbCIsImtleXMiLCJsYW5nIiwiZmllbGRQYXRoIiwidmFsdWVzIiwicGF0aFBhcnRzIiwiaXNGaWVsZFBhdGhFbmFibGVkIiwidW5kZWZpbmVkIiwiX2J1aWxkRmllbGRQYXRoU3RhdHVzIiwic3BsaXQiLCJjdXJyZW50VHJlZSIsImlzRGlzYWJsZWQiLCJzb21lIiwiZmluZCIsImZpZWxkIiwiZmllbGRfbmFtZSIsInBhcnQiLCJvcmlnVmFsdWUiLCJ0cm5WYWx1ZSIsIm9wdGlvbnMiLCJvcHRpb24iLCJvcHQiLCJ0cmFuc2xhdGlvbnMiLCJnZXRGaWVsZERlZiIsImRlcGVuZGVuY2llcyIsImZpZWxkUGF0aHMiLCJfZ2V0RmllbGRQYXRoc0J5RGVwZW5kZW5jaWVzIiwiY3VycmVudFBhdGgiLCJoYXNEZXBlbmRlbmN5IiwiaW5jbHVkZXMiLCJkZXAiLCJnZXRPcHRpb25UcmFuc2xhdGlvbiIsImdldFZhbHVlIiwicGFydHMiLCJuZXdMaXN0IiwibmV3RWxlbWVudCIsImN1cnJlbnQiLCJjb25jYXQiLCJ2YWwiLCJDdXJyZW5jeVJhdGVzTWFuYWdlciIsImN1cnJlbmN5UmF0ZXMiLCJiYXNlQ3VycmVuY3kiLCJkYXRlVXRpbHMiLCJlcnJvck5vdGlmaWNhdGlvbkhlbHBlciIsIl9jdXJyZW5jeVJhdGVzIiwiX2Jhc2VDdXJyZW5jeSIsIl9jdXJybmNpZXNXaXRoRXhjaGFuZ2VSYXRlcyIsIl9nZXRDdXJyZW5jaWVzV2l0aEV4Y2hhbmdlUmF0ZXMiLCJfdHJhbnNsYXRlIiwiX2RhdGVVdGlscyIsIl9lcnJvck5vdGlmaWNhdGlvbkhlbHBlciIsImN1cnJlbmN5RnJvbSIsImN1cnJlbmN5VG8iLCJkYXRlVG9GaW5kIiwiZml4ZWRFeGNoYW5nZVJhdGUiLCJjb252ZXJ0Q3VycmVuY3kiLCJ0aW1lRGF0ZVRvRmluZCIsImdldFRpbWUiLCJjdXJyZW5jaWVzVG9TZWFyY2hEaXJlY3QiLCJpdGVtIiwiZnJvbSIsInRvIiwiZ2V0RXhjaGFuZ2VSYXRlIiwiY3VycmVuY2llc1RvU2VhcmNoSW52ZXJzZSIsImNvbnZlcnRWaWFCYXNlQ3VycmVuY3kiLCJfZ2V0Q3VycmVuY3lFcnJvciIsImZ1bmRpbmdEZXRhaWxzIiwidG90YWwiLCJjb252ZXJ0VHJhbnNhY3Rpb25BbW91bnRUb0N1cnJlbmN5IiwiZnVuZGluZ0RldGFpbCIsImFtb3VudCIsImRhdGUiLCJjdXJyZW5jeVJhdGUiLCJmb3JtYXREYXRlRm9yQVBJIiwidHJhbnNhY3Rpb25EYXRlIiwidHJhbnNhY3Rpb25BbW91bnQiLCJjb252ZXJ0QW1vdW50VG9DdXJyZW5jeSIsImN1cnJlbmNpZXNUb1NlYXJjaCIsImxvd2VyRW5kIiwiaGlnaGVyRW5kIiwicmF0ZXMiLCJtaWRkbGUiLCJmbG9vciIsImRpZmZlcmVuY2UiLCJhYnMiLCJkaWZmZXJlbmNlMSIsInJhdGUiLCJlcnJvck1lc2FnZSIsIm5vdGlmRXJyb3JDdXJyZW5jeSIsImNyZWF0ZU5vdGlmaWNhdGlvbiIsIkVycm9yQ29uc3RhbnRzIiwicmF0ZUZyb21Ub0Jhc2UiLCJyYXRlQmFzZVRvVG8iLCJyYXRlVG9Ub0Jhc2UiLCJyYXRlQmFzZVRvRnJvbSIsImNzIiwiYWRkIiwiZXhjaGFuZ2VSYXRlcyIsIlBvc3NpYmxlVmFsdWVzTWFuYWdlciIsImxhbmdTdGF0ZSIsIl9sYW5nU3RhdGUiLCJMb2dnZXIiLCJfbG9nZ2VyIiwiaE9wdGlvbnMiLCJidWlsZEhpZXJhcmNoaWNhbERhdGEiLCJzZWxlY3RlZElkIiwidmFsdWVQYXJ0cyIsImdldEhpZXJhcmNoaWNhbFZhbHVlIiwiZm9ybWF0VmFsdWVQYXJ0cyIsIm5hbWVQYXJ0cyIsInBhcmVudElkIiwicmV2ZXJzZSIsIl9maWxsSGllcmFyY2hpY2FsRGVwdGgiLCJlcnJvciIsImRlcHRoIiwicGFyZW50IiwibyIsInJlc1ZhbCIsImRlZmF1bHRMYW5nIiwiY3VycmVuY3lSYXRlc01hbmFnZXIiLCJmaWx0ZXJzIiwiaXNPUkZpbHRlciIsImlzTG9jYXRpb25zIiwiaXNDdXJyZW5jeSIsImhhcyIsInZpc2libGUiLCJkaXNwbGF5SGllcmFyY2hpY2FsVmFsdWUiLCJpc0N1cnJlbmN5T3B0aW9uVXNhYmxlIiwiZmlsdGVyQnkiLCJmaWx0ZXIiLCJvcHRpb25EYXRhVG9DaGVjayIsInBhdGgiLCJoYXNFeGNoYW5nZVJhdGVzIiwiY3VycmVuY2llc1dpdGhFeGNoYW5nZVJhdGVzIiwiaXNBY3RpdmUiLCJleHRyYV9pbmZvIiwiYWN0aXZlIiwib3B0aW9uc09iaiIsInJldmVyc2VTb3J0T3B0aW9ucyIsImFkZGVkIiwib3B0aW9uc0xpc3QiLCJpZHNTdGFjayIsInBvcCIsInJldmVyc2VTb3J0ZWRDaGlsZHJlbiIsIkZFQVRVUkVfTUFOQUdFUiIsIkZlYXR1cmVNYW5hZ2VyIiwiZm1UcmVlIiwiX2ZtVHJlZSIsImxvZ2dlck1hbmFnZXIiLCJvbmx5TGFzdFNlZ21lbnQiLCJfbG9nZ2VyTWFuYWdlciIsImxhc3RGTVN1YlRyZWUiLCJzZWdtZW50cyIsIl9nZXRQYXRoU2VnbWVudHMiLCJmb3VuZExhc3RGTVN1YlRyZWUiLCJldmVyeSIsInNlZ21lbnQiLCJfX2VuYWJsZWQiLCJmbVNldHRpbmciLCJmaW5kRk1TZXR0aW5nIiwicmVkdWNlIiwiY3VycmVudEZNU2V0dGluZyIsImVuYWJsZWQiLCJjdXJyZW50Rk1UcmVlIiwic2VnbWVudEZNIiwiX2N1cnJlbnRGTSIsImlzRk1TZXR0aW5nRW5hYmxlZCIsImhhc0ZNU2V0dGluZyIsIkFQTGFiZWwiLCJsYWJlbCIsImRvbnRUcmFuc2xhdGUiLCJsYWJlbENsYXNzIiwidG9vbHRpcCIsImdldENvbnRlbnQiLCJBUEZpZWxkIiwiVGFibGlmeSIsImNvbnRlbnQiLCJjb2xzIiwiYyIsInJvd3MiLCJjZWlsIiwidGFibGVDb250ZW50Iiwicm93Q29udGVudCIsImoiLCJzdHJpbmdUb1VuaXF1ZUlkIiwiY29sdW1ucyIsImNlbGxXaWR0aCIsImNlbGx3aWR0aFN0eWxlIiwidGFibGlmeV9vdXRlcl9jZWxsIiwidGFibGlmeV9pbm5lcl9jZWxsIiwiZmxleCIsIm51bWJlciIsIkFQUGVyY2VudGFnZUZpZWxkIiwicmF3TnVtYmVyVG9Gb3JtYXR0ZWRTdHJpbmciLCJwZXJjZW50YWdlIiwidGl0bGVDbGFzcyIsImFsaWduUmlnaHQiLCJBUFBlcmNlbnRhZ2VMaXN0IiwibGlzdEZpZWxkIiwidmFsdWVGaWVsZCIsInBlcmNlbnRhZ2VGaWVsZCIsImxpc3RUaXRsZSIsImdldEl0ZW1UaXRsZSIsImFjdGl2aXR5RmllbGRzTWFuYWdlciIsInBlcmNlbnRUaXRsZUNsYXNzIiwiYWN0aXZpdHkiLCJ0YWJsaWZ5IiwicGVyY2VudFZhbHVlQ2xhc3MiLCJpdGVtcyIsImlzTGlzdEVuYWJsZWQiLCJhIiwiYiIsIml0ZW1UaXRsZSIsImxvY2FsZUNvbXBhcmUiLCJub2RhdGEiLCJpbnN0YW5jZU9mIiwiU2VjdGlvbiIsIkNvbXBvc2VkU2VjdGlvbiIsInBhcmFtcyIsImNvbnRleHQiLCJEYXRlVXRpbHMiLCJ1c2VFbmNhcHN1bGF0ZUhlYWRlciIsInNob3dJZk5vdEF2YWlsYWJsZSIsIk5BT3B0aW9ucyIsIm9wdGlvbnNfIiwiRmllbGRQYXRoQ29uc3RhbnRzIiwibm9UaXRsZSIsImdldEZpZWxkTGFiZWxUcmFuc2xhdGlvbiIsInZhbHVlUGF0aCIsImZpZWxkUGF0aFBhcnRzIiwiYWx0ZXJuYXRlUGF0aCIsImZpZWxkRGVmIiwiZmllbGRfdHlwZSIsImNyZWF0ZUZvcm1hdHRlZERhdGUiLCJyZSIsInRlc3QiLCJ0cmltIiwiY29tcG9zZWRTZWN0aW9uIiwic3RhdGUiLCJidWlsZFNpbXBsZUZpZWxkIiwiYmluZCIsIlNlY3Rpb25UaXRsZSIsImdyb3VwQ2xhc3MiLCJzSUQiLCJ0aXRsZURldGFpbHMiLCJjb21wb3NlZENsYXNzIiwib25lT2ZUeXBlIiwiY29udGV4dFR5cGVzIiwiZGVmYXVsdFByb3BzIiwic2VjdGlvbl90aXRsZV9jbGFzcyIsInNlY3Rpb25fZ3JvdXBfY2xhc3MiLCJzZWN0aW9uX2ZpZWxkX25hbWUiLCJzZWN0aW9uX2ZpZWxkX3ZhbHVlIiwiRnVuZGluZ1N1bW1hcnkiLCJtZWFzdXJlc1RvdGFscyIsImFjRW5hYmxlZCIsImFkRW5hYmxlZCIsImlzRmllbGRQYXRoQnlQYXJ0c0VuYWJsZWQiLCJ0cm5UeXBlIiwidHJuQWRqT3B0UGF0aCIsImF0T3B0aW9ucyIsImdldFBvc3NpYmxlVmFsdWVzT3B0aW9ucyIsImFjdGl2aXR5RnVuZGluZ1RvdGFscyIsImdldFRvdGFscyIsImFkalR5cGUiLCJhZGpUeXBlQWN0dWFsVHJuIiwiZXhwZW5kaXR1cmVzQXJlRW5hYmxlZCIsInViIiwiZ2V0TVRFRlRvdGFsIiwiYWN0dWFsQ29tbWl0bWVudHMiLCJhY3R1YWxEaXNidXJzZW1lbnRzIiwiX2J1aWxkVG90YWxGaWVsZHMiLCJtZWFzdXJlc09yZGVyIiwidHJuIiwiaXNQZXJjZW50YWdlIiwiZnVuZGluZ0luZm9TdW1tYXJ5IiwibWVhc3VyZSIsImZvcm1hdEFtb3VudCIsIl9idWlsZEZ1bmRpbmdJbmZvcm1hdGlvbiIsIkFQSWRlbnRpZmljYXRpb24iXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxTQUFTLFdBQVcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFO0VBQzdCLEtBQUssR0FBRyxLQUFLLEtBQUssQ0FBQyxHQUFHLEdBQUcsR0FBRyxFQUFFLENBQUM7RUFDL0IsSUFBSSxRQUFRLEdBQUcsR0FBRyxDQUFDLFFBQVEsQ0FBQzs7RUFFNUIsSUFBSSxDQUFDLEdBQUcsSUFBSSxPQUFPLFFBQVEsS0FBSyxXQUFXLEVBQUUsRUFBRSxPQUFPLEVBQUU7O0VBRXhELElBQUksSUFBSSxHQUFHLFFBQVEsQ0FBQyxJQUFJLElBQUksUUFBUSxDQUFDLG9CQUFvQixDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0VBQ3JFLElBQUksS0FBSyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7RUFDNUMsS0FBSyxDQUFDLElBQUksR0FBRyxVQUFVLENBQUM7O0VBRXhCLElBQUksUUFBUSxLQUFLLEtBQUssRUFBRTtJQUN0QixJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7TUFDbkIsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0tBQzNDLE1BQU07TUFD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QTtzQkFBQTtrQkFBQTtnREFBQTs0Q0FBQTtvQkFBQTs0Q0FBQTtvQkFBQTtrQ0FBQTtrQ0FBQTtrQ0FBQTtzQ0FBQTtvQ0FBQTswQkFBQTtnQkFBQTtzQ0FBQTs0Q0FBQTt3QkFBQTt3Q0FBQTswREFBQTtnQ0FBQTtzQkFBQTtvQkFBQTswQ0FBQTtrREFBQTs0Q0FBQTtrQ0FBQTswQkFBQTs4QkFBQTt3Q0FBQTtzQ0FBQTtrQ0FBQTtrQ0FBQTswREFBQTtzQkFBQTtrQ0FBQTt3QkFBQTtnQ0FBQTtrQ0FBQTtvQ0FBQTtzREFBQTs0QkFBQTt3QkFBQTtvREFBQTtZQUFBO29DQUFBO3dDQUFBO3dDQUFBOzBDQUFBO29EQUFBO3dDQUFBO2dDQUFBOzRCQUFBO2tCQUFBOzBCQUFBO29EQUFBO29CQUFBO29DQUFBO29DQUFBOzBCQUFBOzhCQUFBOzRCQUFBO2tEQUFBO3dDQUFBO2tDQUFBO3NDQUFBOzBDQUFBO2dEQUFBO29DQUFBO3NDQUFBO2dEQUFBO29EQUFBO29EQUFBOzREQUFBO3dEQUFBO2dEQUFBOzRDQUFBO3NDQUFBO29CQUFBO2tDQUFBO2dDQUFBO29DQUFBO3NDQUFBO2tCQUFBO3dDQUFBO29DQUFBO2tEQUFBO29DQUFBO3dDQUFBO29DQUFBO2dFQUFBO2dDQUFBO1lBQUE7MEJBQUE7MEJBQUE7Z0JBQUE7OEJBQUE7MEJBQUE7MEJBQUE7MEJBQUE7d0JBQUE7d0JBQUE7b0NBQUE7b0NBQUE7c0NBQUE7c0NBQUE7c0JBQUE7Z0NBQUE7a0JBQUE7b0NBQUE7a0NBQUE7Z0NBQUE7b0NBQUE7b0NBQUE7d0NBQUE7MEJBQUE7MEJBQUE7a0NBQUE7OENBQUE7d0NBQUE7b0RBQUE7b0RBQUE7d0JBQUE7d0JBQUE7d0NBQUE7Z0JBQUE7b0JBQUE7NEJBQUE7d0JBQUE7a0VBQUE7MEJBQUE7Z0NBQUE7Z0JBQUE7d0JBQUE7d0JBQUE7b0JBQUE7NEJBQUE7NEJBQUE7Z0JBQUE7d0JBQUE7d0JBQUE7b0NBQUE7Z0RBQUE7MENBQUE7NENBQUE7b0NBQUE7Z0NBQUE7Z0NBQUE7b0NBQUE7b0NBQUE7d0NBQUE7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
