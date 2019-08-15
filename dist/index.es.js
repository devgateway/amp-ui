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
 * @author Anya Marshalln
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
    value: function addRows(content, cols, Utils) {
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
            { key: Utils.stringToUniqueId() },
            content.pop()
          ));
        }
        tableContent.push(React.createElement(
          'tr',
          { key: Utils.stringToUniqueId() },
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
      var Utils = this.props.Utils;

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
          { key: Utils.stringToUniqueId(), style: cellwidthStyle, className: styles$1.tablify_outer_cell },
          this.props.content.pop()
        ));
        for (var j = 1; j < this.props.columns && this.props.content.length > 0; j++) {
          var key = Utils.stringToUniqueId();
          rowContent.push(React.createElement(
            'div',
            { key: key, style: cellwidthStyle, className: styles$1.tablify_inner_cell },
            this.props.content.pop()
          ));
        }
        tableContent.push(React.createElement(
          'div',
          { key: Utils.stringToUniqueId(), className: styles$1.flex },
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
            Utils = _props.Utils,
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
                key: Utils.stringToUniqueId(itemTitle), title: itemTitle, value: percentage,
                titleClass: percentTitleClass, valueClass: percentValueClass, translate: translate,
                Logger: Logger, rawNumberToFormattedString: rawNumberToFormattedString });
            });
            if (tablify) {
              content = React.createElement(Tablify, { content: content, columns: columns, Logger: Logger, Utils: Utils });
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
    Utils: PropTypes.object.isRequired,
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

    function _class(props) {
      classCallCheck(this, _class);

      var _this = possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props));

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
              key: params.Utils.stringToUniqueId(path), title: title, value: value, useInnerHTML: useInnerHTML,
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
    resourceReducer: PropTypes.object.isRequired
  }, _class.defaultProps = {
    titleClass: styles$1.section_title_class,
    groupClass: styles$1.section_group_class,
    fieldNameClass: styles$1.section_field_name,
    fieldValueClass: styles$1.section_field_value
  }, _temp;
};

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
  Section: Section
};

export default index;
export { TestAPField, TestingSection, Constants, ActivityConstants, FeatureManagerConstants, ErrorConstants, CurrencyRatesManager, FieldsManager, FieldPathConstants, ValueConstants, PossibleValuesManager, FeatureManager, APLabel, APField, Tablify, APPercentageField, APPercentageList, Section };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguZXMuanMiLCJzb3VyY2VzIjpbIi4uL25vZGVfbW9kdWxlcy9zdHlsZS1pbmplY3QvZGlzdC9zdHlsZS1pbmplY3QuZXMuanMiLCIuLi9zcmMvYWN0aXZpdHlQcmV2aWV3L2NvbXBvbmVudHMvVGVzdEFQRmllbGQuanMiLCIuLi9zcmMvYWN0aXZpdHlQcmV2aWV3L2NvbXBvbmVudHMvVGVzdGluZ1NlY3Rpb24uanMiLCIuLi9zcmMvdXRpbHMvQ29uc3RhbnRzLmpzIiwiLi4vc3JjL21vZHVsZXMvdXRpbC9GZWF0dXJlTWFuYWdlckNvbnN0YW50cy5qcyIsIi4uL3NyYy9tb2R1bGVzL3V0aWwvQWN0aXZpdHlDb25zdGFudHMuanMiLCIuLi9zcmMvdXRpbHMvY29uc3RhbnRzL0Vycm9yQ29uc3RhbnRzLmpzIiwiLi4vc3JjL3V0aWxzL1ZhbHVlQ29uc3RhbnRzLmpzIiwiLi4vc3JjL3V0aWxzL0ZpZWxkUGF0aENvbnN0YW50cy5qcyIsIi4uL3NyYy9tb2R1bGVzL2ZpZWxkL0ZpZWxkc01hbmFnZXIuanMiLCIuLi9zcmMvbW9kdWxlcy91dGlsL0N1cnJlbmN5UmF0ZXNNYW5hZ2VyLmpzIiwiLi4vc3JjL21vZHVsZXMvZmllbGQvUG9zc2libGVWYWx1ZXNNYW5hZ2VyLmpzIiwiLi4vc3JjL21vZHVsZXMvdXRpbC9GZWF0dXJlTWFuYWdlci5qcyIsIi4uL3NyYy9hY3Rpdml0eS9wcmV2aWV3L2NvbXBvbmVudHMvQVBMYWJlbC5qc3giLCIuLi9zcmMvYWN0aXZpdHkvcHJldmlldy9jb21wb25lbnRzL0FQRmllbGQuanN4IiwiLi4vc3JjL2FjdGl2aXR5L3ByZXZpZXcvY29tcG9uZW50cy9UYWJsaWZ5LmpzeCIsIi4uL3NyYy9hY3Rpdml0eS9wcmV2aWV3L2NvbXBvbmVudHMvQVBQZXJjZW50YWdlRmllbGQuanN4IiwiLi4vc3JjL2FjdGl2aXR5L3ByZXZpZXcvY29tcG9uZW50cy9BUFBlcmNlbnRhZ2VMaXN0LmpzeCIsIi4uL3NyYy9hY3Rpdml0eS9wcmV2aWV3L3NlY3Rpb25zL1NlY3Rpb24uanN4IiwiLi4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIHN0eWxlSW5qZWN0KGNzcywgcmVmKSB7XG4gIGlmICggcmVmID09PSB2b2lkIDAgKSByZWYgPSB7fTtcbiAgdmFyIGluc2VydEF0ID0gcmVmLmluc2VydEF0O1xuXG4gIGlmICghY3NzIHx8IHR5cGVvZiBkb2N1bWVudCA9PT0gJ3VuZGVmaW5lZCcpIHsgcmV0dXJuOyB9XG5cbiAgdmFyIGhlYWQgPSBkb2N1bWVudC5oZWFkIHx8IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF07XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gIHN0eWxlLnR5cGUgPSAndGV4dC9jc3MnO1xuXG4gIGlmIChpbnNlcnRBdCA9PT0gJ3RvcCcpIHtcbiAgICBpZiAoaGVhZC5maXJzdENoaWxkKSB7XG4gICAgICBoZWFkLmluc2VydEJlZm9yZShzdHlsZSwgaGVhZC5maXJzdENoaWxkKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaGVhZC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGhlYWQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9XG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgc3R5bGVJbmplY3Q7XG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vLi4vYWN0aXZpdHlBc3NldHMvc3R5bGVzaGVldHMvQWN0aXZpdHlQcmV2aWV3LmNzcyc7XG5cblxuLyoqXG4gKiBTaW1wbGUgRmllbGQgY29tcG9uZW50IHRoYXQgY29uc2lzdHMgb2YgYSBmaWVsZCB0aXRsZSBhbmQgZmllbGQgdmFsdWVcbiAqIEBhdXRob3IgTmFkZWpkYSBNYW5kcmVzY3VcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGVzdEFQRmllbGQgZXh0ZW5kcyBDb21wb25lbnQge1xuICAvKipcbiAgICogR2V0cyBhbiBpbnN0YW5jZSBvZiBTaW1wbGUgRmllbGRcbiAgICogQHBhcmFtIHRybkxhYmVsIHRoZSBsYWJlbCB0byB0cmFuc2xhdGUgYW5kIHVzZSBhcyBhIHRpdGxlLiBUaGlzIGxhYmVsIGlzIGFsc28gdXNlZCBhcyB0aGUgY29tcG9uZW50IGtleS5cbiAgICogQHBhcmFtIHZhbHVlIHRoZSBmaWVsZCB2YWx1ZVxuICAgKiBAcGFyYW0gaW5saW5lIHNob3cgdGl0bGUgYW5kIHZhbHVlIGluIHRoZSBzYW1lIHJvdy5cbiAgICogQHBhcmFtIHNlcGFyYXRvciBhZGQgb3Igbm90IGFuIDxocj4gdGFnLlxuICAgKiBAcGFyYW0gbmFtZUNsYXNzIGNzcyBjbGFzcyBmb3IgdGhlIGZpZWxkIGxhYmVsXG4gICAqIEBwYXJhbSB2YWx1ZUNsYXNzIGNzcyBjbGFzcyBmb3IgdGhlIGZpZWxkIHZhbHVlXG4gICAqIEByZXR1cm4ge1NpbXBsZUZpZWxkfVxuICAgKi9cbiAgc3RhdGljIGluc3RhbmNlKHRybkxhYmVsLCB2YWx1ZSwgaW5saW5lID0gZmFsc2UsIHNlcGFyYXRvciA9IGZhbHNlLCBuYW1lQ2xhc3MsIHZhbHVlQ2xhc3MpIHtcbiAgICByZXR1cm4gKDxUZXN0QVBGaWVsZFxuICAgICAga2V5PXt0cm5MYWJlbH0gdGl0bGU9e3RoaXMucHJvcHMudHJhbnNsYXRlKHRybkxhYmVsKX0gdmFsdWU9e3ZhbHVlfSBpbmxpbmU9e2lubGluZX0gc2VwYXJhdG9yPXtzZXBhcmF0b3J9XG4gICAgICBmaWVsZE5hbWVDbGFzcz17bmFtZUNsYXNzfSBmaWVsZFZhbHVlQ2xhc3M9e3ZhbHVlQ2xhc3N9IC8+KTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMucHJvcHMuYW1wTG9nZ2VyLmxvZygnY29uc3RydWN0b3JlJyk7XG4gICAgdGhpcy51c2VTZXBhcmF0b3IgPSB0aGlzLnByb3BzLnNlcGFyYXRvciAhPT0gZmFsc2U7XG4gICAgdGhpcy5kaXNwbGF5Q2xhc3MgPSB0aGlzLnByb3BzLmZpZWxkQ2xhc3MgfHwgKHRoaXMucHJvcHMuaW5saW5lID09PSB0cnVlID8gc3R5bGVzLmlubGluZSA6IHN0eWxlcy5ibG9jayk7XG4gIH1cblxuICBfZ2V0VmFsdWUoKSB7XG4gICAgY29uc3QgY2xhc3NOYW1lcyA9IGAke3RoaXMucHJvcHMuZmllbGRWYWx1ZUNsYXNzfSAke3RoaXMuZGlzcGxheUNsYXNzfWA7XG4gICAgLy8gVG8gaGFuZGxlIGJvb2xlYW4gZmllbGRzIHdlIGRvbnQgd2FudCB0byBzaG93ICdmYWxzZScgYXMgJ05vIERhdGEnLlxuICAgIGNvbnN0IHZhbHVlID0gKHRoaXMucHJvcHMudmFsdWUgfHwgdGhpcy5wcm9wcy52YWx1ZSA9PT0gZmFsc2UpID8gdGhpcy5wcm9wcy52YWx1ZSA6IHRoaXMucHJvcHMudHJhbnNsYXRlKCdObyBEYXRhJyk7XG4gICAgbGV0IGRpc3BsYXlWYWx1ZTtcbiAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgIGlmICh2YWx1ZVswXSBpbnN0YW5jZW9mIE9iamVjdCkge1xuICAgICAgICBkaXNwbGF5VmFsdWUgPSBbXTtcbiAgICAgICAgdmFsdWUuZm9yRWFjaCh2ID0+IGRpc3BsYXlWYWx1ZS5wdXNoKHYpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRpc3BsYXlWYWx1ZSA9IHZhbHVlLnNvcnQoKS5qb2luKCcsICcpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodHlwZW9mIHZhbHVlID09PSAnYm9vbGVhbicpIHtcbiAgICAgIGRpc3BsYXlWYWx1ZSA9IHZhbHVlID09PSB0cnVlID8gdGhpcy5wcm9wcy50cmFuc2xhdGUoJ1llcycpIDogdGhpcy5wcm9wcy50cmFuc2xhdGUoJ05vJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRpc3BsYXlWYWx1ZSA9ICh0aGlzLnByb3BzLmlubGluZSAmJiB0aGlzLnByb3BzLnZhbHVlIGluc3RhbmNlb2YgU3RyaW5nKSA/IGAke3ZhbHVlfSBgIDogdmFsdWU7XG4gICAgfVxuICAgIGlmICh0aGlzLnByb3BzLnVzZUlubmVySFRNTCkge1xuICAgICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWVzfSBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IGRpc3BsYXlWYWx1ZSB9fSAvPjtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWVzfT57ZGlzcGxheVZhbHVlfTwvZGl2PjtcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgY2xhc3NOYW1lcyA9IGAke3RoaXMucHJvcHMuZmllbGROYW1lQ2xhc3N9ICR7dGhpcy5kaXNwbGF5Q2xhc3N9YDtcbiAgICByZXR1cm4gKDxkaXYgY2xhc3NOYW1lPXt0aGlzLmRpc3BsYXlDbGFzc30+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lc30+e3RoaXMucHJvcHMudGl0bGV9PC9kaXY+XG4gICAgICB7dGhpcy5fZ2V0VmFsdWUoKX1cbiAgICAgIHt0aGlzLnVzZVNlcGFyYXRvciA/IDxociAvPiA6ICcnfVxuICAgIDwvZGl2Pik7XG4gIH1cbn1cblxuVGVzdEFQRmllbGQucHJvcFR5cGVzID0ge1xuICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgdmFsdWU6IFByb3BUeXBlcy5hbnksXG4gIGlubGluZTogUHJvcFR5cGVzLmJvb2wsXG4gIHVzZUlubmVySFRNTDogUHJvcFR5cGVzLmJvb2wsXG4gIGZpZWxkQ2xhc3M6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGZpZWxkTmFtZUNsYXNzOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBmaWVsZFZhbHVlQ2xhc3M6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHNlcGFyYXRvcjogUHJvcFR5cGVzLmJvb2wsXG4gIGFtcExvZ2dlcjogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICB0cmFuc2xhdGU6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWRcbn07XG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBUZXN0QVBGaWVsZCBmcm9tICcuL1Rlc3RBUEZpZWxkJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGVzdGluZ1NlY3Rpb24gZXh0ZW5kcyBDb21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxoMj50ZXN0aW5nIGNvbXBvbmVudDwvaDI+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgdGVzdCB0cmFuc2xhdGlvbjogYERFU0tUT1AgPSB7dGhpcy5wcm9wcy50cmFuc2xhdGUoJ0RFU0tUT1AnKX1gXG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIHRlc3QgQVBGaWVsZDpcbiAgICAgICAgICA8VGVzdEFQRmllbGQgYW1wTG9nZ2VyPXt0aGlzLnByb3BzLmFtcExvZ2dlcn0gdHJhbnNsYXRlPXt0aGlzLnByb3BzLnRyYW5zbGF0ZX0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj4pO1xuICB9XG59XG5UZXN0aW5nU2VjdGlvbi5wcm9wVHlwZXMgPSB7XG4gIGFtcExvZ2dlcjogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICB0cmFuc2xhdGU6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWRcbn07XG4iLCJcbmNvbnN0IEJBU0VfUkVTVF9VUkwgPSAnL3Jlc3QnO1xuXG5cbmNvbnN0IENPTk5FQ1RJT05fVElNRU9VVCA9IDI1MDAwO1xuY29uc3QgQ09OTkVDVElPTl9GT1JDRURfVElNRU9VVCA9IENPTk5FQ1RJT05fVElNRU9VVCArIDUwMDA7XG5jb25zdCBUSU1FT1VUX0NIRUNLX0lOVEVSVkFMID0gNTAwMDtcbmNvbnN0IE1BWF9SRVRSWV9BVEVNUFRTID0gNTtcbmNvbnN0IEVSUk9SU19UT19SRVRSWSA9IFsnRVNPQ0tFVFRJTUVET1VUJywgJ0VUSU1FRE9VVCcsICdFQ09OTlJFU0VUJywgJ0VBSV9BR0FJTiddO1xuY29uc3QgRVJST1JTX05PX0FNUF9TRVJWRVIgPSBbJ0VDT05OUkVGVVNFRCcsICdFTkVUVU5SRUFDSCcsICdFTk9FTlQnLCAnRU5PVEZPVU5EJywgJ0VORVRET1dOJywgJ0VIT1NURE9XTicsXG4gICdFSE9TVFVOUkVBQ0gnLCAnRU5PTkVUJ107XG5jb25zdCBDT05ORUNUSVZJVFlfQ0hFQ0tfSU5URVJWQUwgPSAnNjAwMDAnOyAvLyAxIG1pbnV0ZXNcblxuY29uc3QgV09SS1NQQUNFX1VSTCA9ICcvd29ya3NwYWNlJztcbmNvbnN0IExPR0lOX1VSTCA9ICcvJztcbmNvbnN0IERFU0tUT1BfVVJMID0gJy9kZXNrdG9wJztcbmNvbnN0IERFU0tUT1BfQ1VSUkVOVF9VUkwgPSAnL2Rlc2t0b3AvY3VycmVudCc7XG5jb25zdCBTWU5DVVBfUkVESVJFQ1RfVVJMID0gJy9zeW5jVXAvc3luYyc7XG5jb25zdCBTWU5DVVBfSElTVE9SWV9UQVJHRVQgPSAnaGlzdG9yeSc7XG5jb25zdCBTWU5DVVBfU1VNTUFSWV9VUkwgPSAnL3N5bmNVcFN1bW1hcnknO1xuY29uc3QgQUNUSVZJVFlfUFJFVklFV19VUkwgPSAnL2FjdGl2aXR5L3ByZXZpZXcnO1xuY29uc3QgQUNUSVZJVFlfRURJVF9VUkwgPSAnL2FjdGl2aXR5L2VkaXQnO1xuY29uc3QgVVBEQVRFX1VSTCA9ICcvdXBkYXRlJztcbmNvbnN0IFNFVFVQX1VSTCA9ICcvc2V0dXAnO1xuY29uc3QgU0VUVElOR1NfVVJMID0gJy9zZXR0aW5ncyc7XG5cbmNvbnN0IENPTExFQ1RJT05fVVNFUlMgPSAndXNlcnMnO1xuY29uc3QgQ09MTEVDVElPTl9XT1JLUEFDRVMgPSAnd29ya3NwYWNlcyc7XG5jb25zdCBDT0xMRUNUSU9OX1RFQU1NRU1CRVJTID0gJ3RlYW1tZW1iZXJzJztcbmNvbnN0IENPTExFQ1RJT05fQ0xJRU5UX1NFVFRJTkdTID0gJ2NsaWVudC1zZXR0aW5ncyc7XG5jb25zdCBDT0xMRUNUSU9OX0dMT0JBTF9TRVRUSU5HUyA9ICdnbG9iYWwtc2V0dGluZ3MnO1xuY29uc3QgQ09MTEVDVElPTl9BQ1RJVklUSUVTID0gJ2FjdGl2aXRpZXMnO1xuY29uc3QgQ09MTEVDVElPTl9GSUVMRFMgPSAnZmllbGRzJztcbmNvbnN0IENPTExFQ1RJT05fUE9TU0lCTEVfVkFMVUVTID0gJ3Bvc3NpYmxlLXZhbHVlcyc7XG5jb25zdCBDT0xMRUNUSU9OX1NZTkNVUF9MT0cgPSAnc3luY3VwLWxvZyc7XG5jb25zdCBDT0xMRUNUSU9OX0xBTkdTID0gJ2xhbmd1YWdlcyc7XG5jb25zdCBDT0xMRUNUSU9OX1dTX1NFVFRJTkdTID0gJ3dvcmtzcGFjZS1zZXR0aW5ncyc7XG5jb25zdCBDT0xMRUNUSU9OX0NVUlJFTkNZX1JBVEVTID0gJ2N1cnJlbmN5LXJhdGVzJztcbmNvbnN0IENPTExFQ1RJT05fRkVBVFVSRV9NQU5BR0VSID0gJ2ZlYXR1cmUtbWFuYWdlcic7XG5jb25zdCBDT0xMRUNUSU9OX0NPTlRBQ1RTID0gJ2NvbnRhY3RzJztcbmNvbnN0IENPTExFQ1RJT05fUkVTT1VSQ0VTID0gJ3Jlc291cmNlcyc7XG5jb25zdCBDT0xMRUNUSU9OX1JFUE9TSVRPUlkgPSAncmVwb3NpdG9yeSc7XG5jb25zdCBDT0xMRUNUSU9OX0dBWkVUVEVFUiA9ICdnYXpldHRlZXInO1xuY29uc3QgQ09MTEVDVElPTl9DQUxFTkRBUlMgPSAnY2FsZW5kYXJzJztcbmNvbnN0IENPTExFQ1RJT05fQ0hBTkdFU0VUUyA9ICdjaGFuZ2VzZXRzJztcblxuY29uc3QgR0FaRVRURUVSX0RJU1RBTkNFX0RJVklERSA9IDM7XG5cbmNvbnN0IERCX0ZJTEVfUFJFRklYID0gJ2RhdGFiYXNlJztcbmNvbnN0IERCX0ZJTEVfRVhURU5TSU9OID0gJy5kYic7XG5jb25zdCBEQl9DT01NT05fREFUQVNUT1JFX09QVElPTlMgPSB7IGF1dG9sb2FkOiBmYWxzZSwgY29ycnVwdEFsZXJ0VGhyZXNob2xkOiAwIH07XG5jb25zdCBEQl9BVVRPQ09NUEFDVF9JTlRFUlZBTF9NSUxJU0VDT05EUyA9IDYwMDAwO1xuY29uc3QgREJfREVGQVVMVF9RVUVSWV9MSU1JVCA9IDk5OTk5OTk5OTtcblxuY29uc3QgTEFOR1VBR0VfRU5HTElTSCA9ICdlbic7XG5jb25zdCBGU19MT0NBTEVTX0RJUkVDVE9SWSA9ICdsYW5nJztcbmNvbnN0IExBTkdVQUdFX01BU1RFUl9UUkFOU0xBVElPTlNfRklMRSA9ICdtYXN0ZXItdHJhbnNsYXRpb25zJztcbmNvbnN0IExBTkdVQUdFX1RSQU5TTEFUSU9OU19GSUxFID0gJ3RyYW5zbGF0aW9ucyc7XG5jb25zdCBMQU5HVUFHRV9ORVdfVFJBTlNMQVRJT05TX01VU1RfU1lOQyA9ICdtdXN0X3N5bmNfdHJhbnNsYXRpb24uanNvbic7XG5cbmNvbnN0IEFTQVJfRElSID0gJ2FwcC5hc2FyJztcbmNvbnN0IEFQUF9ESVJFQ1RPUlkgPSAnYXBwJztcbmNvbnN0IFRFU1RfRElSRUNUT1JZID0gJ3Rlc3QnO1xuY29uc3QgU1RBVElDX0RJUiA9ICdzdGF0aWMnO1xuY29uc3QgSU1BR0VTX0RJUiA9ICdpbWFnZXMnO1xuY29uc3QgRE9DX0lDT05TID0gJ2RvYy1pY29ucyc7XG5jb25zdCBEQl9TVEFUSUNfRElSID0gJ2RiJztcbmNvbnN0IE1JR1JBVElPTlNfRElSID0gJ2NoYW5nZWxvZyc7XG5cbmNvbnN0IEhBU0hfSVRFUkFUSU9OUyA9IDEwMDtcbmNvbnN0IERJR0VTVF9BTEdPUklUSE1fU0hBMSA9ICdTSEEtMSc7XG5jb25zdCBESUdFU1RfQUxHT1JJVEhNX1NIQTI1NiA9ICdTSEEtMjU2JztcblxuY29uc3QgQUNUSVZJVFlfRURJVCA9ICdBQ1RJVklUWV9FRElUJztcbmNvbnN0IEFDVElWSVRZX1ZJRVcgPSAnQUNUSVZJVFlfVklFVyc7XG5cbmNvbnN0IFNZTkNVUF9GT1JDRV9EQVlTID0gMTQ7XG5jb25zdCBTWU5DVVBfQkVTVF9CRUZPUkVfREFZUyA9IDc7XG5jb25zdCBTWU5DVVBfTk9fREFURSA9ICcxOTAwLTAxLTAxVDAwOjAwOjAwLjAwMCswMDAwJztcbmNvbnN0IFNZTkNVUF9UWVBFX1RSQU5TTEFUSU9OUyA9ICd0cmFuc2xhdGlvbnMnO1xuY29uc3QgU1lOQ1VQX1RZUEVfVVNFUlMgPSAndXNlcnMnO1xuY29uc3QgU1lOQ1VQX1RZUEVfQVNTRVRTID0gJ2Fzc2V0cyc7XG5jb25zdCBTWU5DVVBfVFlQRV9XT1JLU1BBQ0VTID0gJ3dvcmtzcGFjZXMnO1xuY29uc3QgU1lOQ1VQX1RZUEVfR1MgPSAnZ2xvYmFsLXNldHRpbmdzJztcbmNvbnN0IFNZTkNVUF9UWVBFX0VYQ0hBTkdFX1JBVEVTID0gJ2V4Y2hhbmdlLXJhdGVzJztcbmNvbnN0IFNZTkNVUF9UWVBFX0ZFQVRVUkVfTUFOQUdFUiA9ICdmZWF0dXJlLW1hbmFnZXInO1xuY29uc3QgU1lOQ1VQX1RZUEVfV09SS1NQQUNFX01FTUJFUlMgPSAnd29ya3NwYWNlLW1lbWJlcnMnO1xuY29uc3QgU1lOQ1VQX1RZUEVfQUxMX0ZJRUxEUyA9ICdmaWVsZHMnO1xuY29uc3QgU1lOQ1VQX1RZUEVfQUNUSVZJVElFU19QVUxMID0gJ2FjdGl2aXRpZXMnO1xuY29uc3QgU1lOQ1VQX1RZUEVfQUNUSVZJVElFU19QVVNIID0gJ2FjdGl2aXRpZXMtcHVzaCc7XG5jb25zdCBTWU5DVVBfVFlQRV9BQ1RJVklUWV9GSUVMRFMgPSAnYWN0aXZpdHktZmllbGRzJztcbmNvbnN0IFNZTkNVUF9UWVBFX0FDVElWSVRZX0ZJRUxEU19TVFJVQ1RVUkFMX0NIQU5HRVMgPSAnYWN0aXZpdHktZmllbGRzLXN0cnVjdHVyYWwtY2hhbmdlcyc7XG5jb25zdCBTWU5DVVBfVFlQRV9DT05UQUNUU19QVUxMID0gJ2NvbnRhY3RzJztcbmNvbnN0IFNZTkNVUF9UWVBFX0NPTlRBQ1RTX1BVU0ggPSAnY29udGFjdHMtcHVzaCc7XG5jb25zdCBTWU5DVVBfVFlQRV9BQ1RJVklUWV9QT1NTSUJMRV9WQUxVRVMgPSAnYWN0aXZpdHktcG9zc2libGUtdmFsdWVzLWZpZWxkcyc7XG5jb25zdCBTWU5DVVBfVFlQRV9DT05UQUNUX0ZJRUxEUyA9ICdjb250YWN0LWZpZWxkcyc7XG5jb25zdCBTWU5DVVBfVFlQRV9DT05UQUNUX0ZJRUxEU19TVFJVQ1RVUkFMX0NIQU5HRVMgPSAnY29udGFjdC1maWVsZHMtc3RydWN0dXJhbC1jaGFuZ2VzJztcbmNvbnN0IFNZTkNVUF9UWVBFX0NPTlRBQ1RfUE9TU0lCTEVfVkFMVUVTID0gJ2NvbnRhY3QtcG9zc2libGUtdmFsdWVzLWZpZWxkcyc7XG5jb25zdCBTWU5DVVBfVFlQRV9SRVNPVVJDRVNfUFVMTCA9ICdyZXNvdXJjZXMnO1xuY29uc3QgU1lOQ1VQX1RZUEVfUkVTT1VSQ0VTX1BVU0ggPSAncmVzb3VyY2VzLXB1c2gnO1xuY29uc3QgU1lOQ1VQX1RZUEVfUkVTT1VSQ0VfRklFTERTID0gJ3Jlc291cmNlLWZpZWxkcyc7XG5jb25zdCBTWU5DVVBfVFlQRV9SRVNPVVJDRV9GSUVMRFNfU1RSVUNUVVJBTF9DSEFOR0VTID0gJ3Jlc291cmNlLWZpZWxkcy1zdHJ1Y3R1cmFsLWNoYW5nZXMnO1xuY29uc3QgU1lOQ1VQX1RZUEVfUkVTT1VSQ0VfUE9TU0lCTEVfVkFMVUVTID0gJ3Jlc291cmNlLXBvc3NpYmxlLXZhbHVlcy1maWVsZHMnO1xuY29uc3QgU1lOQ1VQX1RZUEVfQ09NTU9OX1BPU1NJQkxFX1ZBTFVFUyA9ICdjb21tb24tcG9zc2libGUtdmFsdWVzLWZpZWxkcyc7XG5jb25zdCBTWU5DVVBfVFlQRV9XT1JLU1BBQ0VfU0VUVElOR1MgPSAnd29ya3NwYWNlLXNldHRpbmdzJztcbmNvbnN0IFNZTkNVUF9UWVBFX01BUF9USUxFUyA9ICdtYXAtdGlsZXMnO1xuY29uc3QgU1lOQ1VQX1RZUEVfR0FaRVRURUVSID0gJ2xvY2F0b3JzJztcbmNvbnN0IFNZTkNVUF9UWVBFX0NBTEVOREFSUyA9ICdjYWxlbmRhcnMnO1xuXG5jb25zdCBTWU5DVVBfU1RBVFVTX1NVQ0NFU1MgPSAnU1VDQ0VTUyc7XG5jb25zdCBTWU5DVVBfU1RBVFVTX0ZBSUwgPSAnRkFJTCc7XG5jb25zdCBTWU5DVVBfU1RBVFVTX1BBUlRJQUwgPSAnUEFSVElBTCc7XG5jb25zdCBTWU5DVVBfU1RBVFVTX0NBTkNFTEVEID0gJ0NBTkNFTEVEJztcbmNvbnN0IFNZTkNVUF9TWU5DX1JFUVVFU1RFRF9BVCA9ICdzeW5jLWRhdGUnO1xuY29uc3QgU1lOQ1VQX1NZTkNfUkVRVUVTVEVEX0JZID0gJ3JlcXVlc3RlZC1ieSc7XG5jb25zdCBTWU5DVVBfREFURVRJTUVfRklFTEQgPSAndGltZXN0YW1wJztcbmNvbnN0IFNZTkNVUF9ESUZGX0xFRlRPVkVSID0gJ3N5bmN1cC1kaWZmLWxlZnRvdmVyJztcbmNvbnN0IFNZTkNVUF9ERVBFTkRFTkNZX0NIRUNLX0lOVEVSVkFMID0gMTA7XG5jb25zdCBTWU5DVVBfREVUQUlMU19TWU5DRUQgPSAnc3luY2VkJztcbmNvbnN0IFNZTkNVUF9ERVRBSUxTX1VOU1lOQ0VEID0gJ3Vuc3luY2VkJztcbmNvbnN0IFNZTkNVUF9SRVNPVVJDRV9QVUxMX0JBVENIX1NJWkUgPSAxMDA7XG5jb25zdCBTWU5DVVBfQUNUSVZJVElFU19QVUxMX0JBVENIX1NJWkUgPSAxMDA7XG5jb25zdCBTWU5DVVBfQ09OVEFDVFNfUFVMTF9CQVRDSF9TSVpFID0gMTAwO1xuXG5jb25zdCBBQ1RJVklUWV9TVEFUVVNfRFJBRlQgPSAnQUNUSVZJVFlfU1RBVFVTX0RSQUZUJztcbmNvbnN0IEFDVElWSVRZX1NUQVRVU19VTlZBTElEQVRFRCA9ICdBQ1RJVklUWV9TVEFUVVNfVU5WQUxJREFURUQnO1xuY29uc3QgQUNUSVZJVFlfU1RBVFVTX1ZBTElEQVRFRCA9ICdBQ1RJVklUWV9TVEFUVVNfVkFMSURBVEVEJztcblxuY29uc3QgQ1VSUkVOQ1lfSE9VUiA9ICcwMDowMCc7XG5jb25zdCBERUZBVUxUX0NVUlJFTkNZID0gJ1VTRCc7XG5jb25zdCBSQVRFX1NBTUVfQ1VSUkVOQ1kgPSAxO1xuY29uc3QgUkFURV9DVVJSRU5DWV9OT1RfRk9VTkQgPSAxO1xuY29uc3QgQ1VSUkVOQ1lfUEFJUiA9ICdjdXJyZW5jeS1wYWlyJztcbmNvbnN0IFZFUlNJT05fUEFUVEVSTiA9IC8oXFxkKylcXC4oXFxkKykoXFwuKFxcZCspKT8oLVxcdyspPy87XG5jb25zdCBWRVJTSU9OX1BBVFRFUk5fR1JPVVBTX1RPX0VYVFJBQ1QgPSBbMSwgMiwgNCwgNV07XG5jb25zdCBBTVBfQ09VTlRSWV9MT0dPID0gJ2FtcENvdW50cnlGbGFnLnBuZyc7XG5jb25zdCBBU1NFVFNfRElSRUNUT1JZID0gJ2Fzc2V0cyc7XG5jb25zdCBCQVNFXzY0X1BOR19QUkVGSVggPSAnZGF0YTppbWFnZS9wbmc7YmFzZTY0LCc7XG4vLyBIb2xkcyB0aGUgQkFTRTY0IHJlcHJlc2VudGF0aW9uIG9mIGEgYSB0cmFuc3BhcmVudCBpbWFnZSAxeDEgaW4gY2FzZSB3ZSBkb24ndCB5ZXQgaGF2ZSB0aGUgY291bnRyeSBmbGFnXG5jb25zdFxuICBUUkFOU1BBUkVOVF9GTEFHID0gJ2lWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBRUFBQUFCQ0FRQUFBQzFIQXdDQUFBQUMwbEVRVlI0bkdQNnp3QUFBZ2NCQXBvY01YRUFBQUFBU1VWT1JLNUNZSUk9JztcbmNvbnN0IEhFTFBfUERGX0ZJTEVOQU1FID0gJ2FtcC1oZWxwJztcbmNvbnN0IEhFTFBfRElSID0gJ2hlbHAnO1xuY29uc3QgRU5EU19XSVRIX1BVTkNUVUFUSU9OX1JFR0VYID0gL1suIT8sOzpdJC87XG5cbmNvbnN0IE1BUF9USUxFU19ESVIgPSAnbWFwLXRpbGVzJztcbmNvbnN0IFRJTEVTX1pJUF9GSUxFID0gJ21hcC10aWxlcy56aXAnO1xuXG4vKiBlc2xpbnQtZGlzYWJsZSBtYXgtbGVuICovXG5jb25zdCBNQVBfTUFSS0VSX0lNQUdFID0gJ2RhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQmtBQUFBcENBWUFBQURBazRMT0FBQUZnVWxFUVZSNEFhMVhBNUJqV1JUTjJvVzE3ZDNZYVp0cjI5NjJIVXpiRE5wanN6VzI0bVJ0MjhwNDd2N3pxL2JYWnRycC9sV25YcjMzN2ozblBDZTg1TmN5cGdTRmR1Z0NwVzVZb0RBTVJhSU1xUmk2YUtxNUUzWXFEUU8zcUF3alZXckQ4TmNxL1JCcHlrZDhvWlViL2thSnV0b3c4cjFhUDlJSTBXbUxLTElzSnl2MXcva3F3OUNoMk1ZZEIrKzEyT254ZWUvUU13dmY0L0RrL0xmcC9pNG54VFh0T29RNHBXNUFqN3dwaWNpMUE5ZXJkQU4yT0g2NHg4T1NQOWozRnQzYjdhV2tUZy9GbTkxc2lUcmEwZjlvbjVzUXI5SU5lakg2Q1VVVXBhdmpGTnExQitPYWRoeG1uZmE4UmZFbU44Vk5Bc1FoUHFGNTV4SGtNenozalNtQ2hXVTZmNy9YWktOSCs5K2hCTE9IWW96dUtRUHh5TVBVS2tyWC9LMHVXbmZGYUpHUzFRUFJ0WnNPUHRyM05zVzB1eWg2Tk5DT2tVM1l6K2JYYlQzSThHM3hFNUVYTFh0Q1hiYnF3Q085elBRWVBSVFo1dklEWEQ3VSt3N3JGREVvVVVmN2liSElSNHk2YkxWUFhyejhKVlpFcWwxM3RyeHd1ZS91RGl2ZDNma1dSYlM2L0lBMmJJRDR1azBVcEYxTjhxTGxiQmxYczRFZTdITFRmVjFqNTRBUHZPRG5TZk9XQnF0S1Z2amdMS3pGNVlkRWs1ZXdSa0dsSzBpMzNFb2ZmZmM3SFQ1NmpENy82VStxSDNDeDdTQkxObnRINVlJUHZPRG55ZklYWllSVkRQcWdIdExzNUFCSEQzWXpMdWVzcGI3dDc5RlkzNERqTXdyVnJjVHV3bFQ1NVlNUHZPQm5Scko0VlhUZE5uWXVnNXVjSExCakVwdDMwNzAxQTNUcytIRWE3M3U2ZFQzRk5Xd2ZsWTg2ZU1IUGsrWXUraTZwelVwUnJXN1NORGc1SkhSNEthcG1NNVd2MkU4VGZjYjFIb3FxSE1IVSt1V0REN3pnNTRtejUvMkJTbml6aTlUMURnNFFRWExUb0dOQ2tiNnRiMU5VK1FBbEdyMSsrZUFEcnpobi91OFEyWVpoUVZsWjUrQ0FPdHFmYmhtYVVDUzFlek5GVm0yaW1EYlBtUG5nNXdteitnd2grb0hEY2UwZVV0UTZPR0RJeVIwdVVoVXNvTzN2ZkRtbWdPZXpIMG1aTjU5eDdNQmkrK1dETDFnL2VFaVUzYXZsaWRPNjcxYmtMZndidzVYVjJQOFB6bzB5ZHk0dDIvMGV1MzN4WVNPTU9EOGhUZjRDckJ0R01Tb1hmUExjaFgrSjBydVNlUHczTFplSzBqdVBKYll6cmhrSDBpbzdCM2sxNjRoaUd2YXdoT0tNTGtyUUx5VnBaZzhySEZXN0UydUhPTDg4OElCUGxOWjFGUHpzdFNKTTY5NGZXcjZSd3B2Y0pLNjArMEhDSUxUQnpaTEZOZHRBekphb2h6ZTYwVDhxQnp5aDVadU9nNWU3dXdRcHBvZkVtZjIrK0RZdm15U3FHQnVLYWljRjFibFFqaHVIZHZDSU12cDh3aFRUZlp6STdSbGRwd3RTekwrRjErd2tkWjJUQk9XMmdJRjg4UEJUekQvZ3BlUkVBTUVieG5KY2FKSE5IcnB6amkwZ1FDUzZoZGtFZVl0OURGLzJxUGNFQzhSTTI4SHdtcjNzZE55aHQwMGJ5QXV0MmszZ3VmV050Z3RPRU9GR1V3Y1hXTkRiZE5icGdCR3hFdktrT1FzeGl2SngzM2lvdzBWdzVTNlNWVHJwVnExMXlzQTJScDdnVGZQZmt0YzZ6aHRYQkJDK2FkUkxzaGY2c0cyUmZIUFo1RUFjNHNWWjgzeUNOMDBGay80a2dndTQwWlR2SUVtNWcyNHF0VTRLakJyeC9CVFRIOGlmVkFTQUc3Z0tybld4SkRjVTd4OFg2RWNjemhtM282WWljdnNMWFdmaDNDaDFXMGs4eDBuWEYrMGZGeGd0NHBoejhRdnlwaXdDQ0ZLTXFYQ25xWEV4anExMGJlSCtVVUE3K25HNm1kRy9QdTBmM0xnRmNHcmwyczBrTk5qcG1vSjlvNEIyOUNNTzhkTVQ0UTVveDh1aXRGNmZxc3JKT3I4cW53TmJSenY2aFNuRzV3UCs2NEM3aDlscDMwaEtOdEtkV2p0ZGtidVBBMTluSjdUejN6Ui9pYmdBUmJoYjRBbGhhdmNCZWJtVEhjRmwyZnZZRW5XMG94OXhNeEtCUzhidEorS2lFYnE5ekE0UnRoUVhEaFBhMFQ5VEVlNjlnV3Vwd2M2dUJVcGhxdVhnZisvRnJJandlSFFTNC9wZHVNZTVFUlVNSFVkOXh2OFpSOThDeGtTNEYybjNFVXJVWjEwRVlOdzdCV205eDFHaVBzc2kzR2dpR1JES1dSWVpmWGxPTitkZk5iTStHZ0l3WWR3QUFBQUFTVVZPUks1Q1lJST0nO1xuY29uc3QgTUFQX01BUktFUl9TSEFET1cgPSAnZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFDa0FBQUFwQ0FRQUFBQUNhY2g5QUFBQ01VbEVRVlI0QWUzU2hZN2pRQkFFMEFvei9mOS9IVE16aGcxenJkS1VySmJkeCtLZDJuRDhWTnVkZnNML1RoLy8vZHlRTjJUSDZmM3kvQkdwQzM3OXJWK1MrcXFldEJPeEltTlFYTDhKQ0FyMlY0aU1RWEhHTkp4ZUNmWlhoU1JCY1FNZnZrT1dVZHRmemxMZ0FFTm1aRGNtbzJUVm10OE9TTTJlWHhCcDNEakhTTUZ1dHFTN1NibWVtekJpUit4cEtDTlVJUmtka2tZeGhBa3lHb0J2eVFGRUpFZWZ3U21tdkJmSnVKNmFLcUtXbkFrdkdaT2FaWFRVZ0ZxWVVMV05TSFVja1p1UjFISUlpbVVFeHV0Unh3ek9MUk9JRzR2S21DS1F0MzY0bUlsaFN5ekFmMW05bEhaSEpacmxBT01NenRSUmlLaW1wL3JwZEpEYzlBd3J5NXhUWkN0ZTdGSHR1Uzh3SmdlWUdyZXgyOHhOVGQwODZEaWs3dlVNc2NRT2E4eTREb0d0Q0NTa0FLbE53cGdOdHBoanJDNk1JSFVrUjZZV3h4czZTYzV4cW4yMjJtbUNSRnpJdDhsRWRLeCtpa0N0ZzkxcVMyV3B3VmZCZWxKQ2lRSnd2eml4Zkk5Y3haUVdnaVNKZWxLbndCRWxLWXRET2IyTUZiaG1VaWdiUmVRQlYwQ2c0K3FNWFN4WFN5R1VuNFViRjhsKzdxZFNHblRDMFhMQ21haElnVUhMaExPaHBWQ3R3NEN6WVh2TFFXUWJKTm14b0NzT0tBeFNnQkpubzc1YXZvbGtSdzhpSUFGY3NkYzAyZTlpeUNkOHRId21lU1NvS1Rvd0lndnNjU0daVU9BN1B1Q041YjJCWDltUU03UzB3WWhNTlU3NHpnc1BCajNIVTd3Z3VBZm54eGpGUUdCRTZwd04rR2pNRTl6SFk3ekdwOHdWeE1TaFlYOU5YdkVXRDNIYndKZjRnaU80Q0ZJUXhYU2NIMS9UTSswNGtrQmlBQUFBQUVsRlRrU3VRbUNDJztcbmNvbnN0IE1BUF9NQVJLRVJfQ0lSQ0xFX1JFRCA9ICdkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUJRQUFBQVVDQVlBQUFDTmlSME5BQUFBQkdkQlRVRUFBTEdQQy94aEJRQUFBQ0JqU0ZKTkFBQjZKZ0FBZ0lRQUFQb0FBQUNBNkFBQWRUQUFBT3BnQUFBNm1BQUFGM0NjdWxFOEFBQUFCbUpMUjBRQS93RC9BUCtndmFlVEFBQUFCM1JKVFVVSDRnY2JGd29nZW9oaEVBQUFBMWxKUkVGVU9NdWxsYzFySEdVY3h6Ky9aMloyMHpHRTdsdXlRYnlJZGlFeHJlNmFOdlN5U0VCQktCNzFWQUk1bUdKQTlnOFFwUjQ4YVZHSzZLMTYwcHRZRDdXeGg0Q1VrSnJGR3BLeUtXZ1FtblhmYVp0OXlXYWVlVHpzVEV4ajFZTy8wL0RNekdkK2I5L3ZDRUg4Y3U1MWpzUVFrQUVtZ0ZSd1ZnTTJnUkxRTy96d3lhdGZBeUNQZ1VXQVY0QTVZQVpJQW5ad3p3UHF3QXB3QmZnZTZCK0d5aEZZR25nWE9BKzRBQmp6YU40aTRWVUgrQko0RDZpRWgvWVIyR2ZBYXdjZ1kxQlB1RmpEd3dEbzNWMzhkbWNBRlhHQkJXQWNlRE9FaHNCSWtOa0E1dnM0eVFTeDJUd2pwM1BZOGRpZzNtYUwrNnRydEc0czQ5VWJvQlRCTzJYZ2JhQnZYY2c4Qi9BcThEN2c0UHNNUGZNMFR4WGV3czAreng5Mzd2RDc4bzlVTnpiUmprM3FwVHdqTDV5aysrczJYcU1adG1BQytCbllzb05wemdFdXh1QWtFeng1WVo2K1kxTjg1eUsxOVEyTTV3M2FaOXVrcGliSkZoWVpYNWpudHc4K2hHWXJMSDhPV0ZMQmFzeUVmWXZONXJIR1JpbGV1a3lsZUJ1TVFTd0xzU3d3aGtyeE5zVkxsN0hUbzBUelorbDZIc0dZWm9DTUN0Sk5oZ01ZT1oyanZQb1R0ZlVObEcwZDNVMlViVkZiMzZCeWE0MzRtV2xxQ2pvRGFCS1lVTUhTMmdEVzhEQjJQRVpyNis1Qm1ZOEw0M2swUzF1NHlRUytlNHlkVHB1TzFyWkF5dWIvaGdnOTdWSHV0amtlaWFJWXlNa0w5OHhydG9obG5rWHNmLzZXMkRieHpBbTY5UWI5Qnc4UkVYcGE3MWQ3M2FwaW9NMDZJdmp0RHZkWDF4aWZmcEhVMUNTK3AvOEc4ejFOYW1xUzlIU09lemRYMkcrM1FRU0J1c0NtWWlEMGxURDkxbzFsZEtWS3RyRElXUFlVaUdDMHhtZ05Jb3hsVDVFckxMSzdVMmI3MnRKaEthNDRTcFZDTFo4RHZnTGNjTEhIRitheDA2TlVicTNSTEcwQkVNK2NJRDJkWTNlbnpOcEhuOUFzM1VVR2FtbGJJbS80eG53WEFpUEF4NEUyd2ZjaEVTZWFQMHY4ekRSdU1nRkF0OTdnM3MwVnRxOHQwYW5XUWhnQ24wWXRxK0FiMHovc05tUEE1NGZOb2V0NTFCVDQ3akVRb2YvZzRWODlDMG9WK01ZU3RXQXdGWVU4NGpZVkJxNVJCczRqNHJxT1E4cnoyS2sxNkdrUEVUbklDbWdMZkdHSnV1aGpLcjR4eEllaS8yMndBc211MXZaT3QwMVA2MzBKREZhSlhIR1V1cjd2KzMxdERQRklsSmQvdU1yQmlQN3RGeUNRYXZUM3FQYTZWWUZOUjZuU250WjdqbElZNEhna3d1ejFid0g0RTVtQ1hJQkxRNUhuQUFBQUpYUkZXSFJrWVhSbE9tTnlaV0YwWlFBeU1ERTRMVEEzTFRJM1ZESXhPakV3T2pNeUt6QXlPakF3N3E2R253QUFBQ1YwUlZoMFpHRjBaVHB0YjJScFpua0FNakF4T0Mwd055MHlOMVF5TVRveE1Eb3pNaXN3TWpvd01KL3pQaU1BQUFBQVNVVk9SSzVDWUlJPSc7XG5jb25zdCBNQVBfTUFSS0VSX0NJUkNMRV9HUkVFTiA9ICdkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUJRQUFBQVVDQVlBQUFDTmlSME5BQUFBQm1KTFIwUUEvd0QvQVArZ3ZhZVRBQUFBQ1hCSVdYTUFBQXNUQUFBTEV3RUFtcHdZQUFBQUIzUkpUVVVINGdjYkZCZzYvVmhXNEFBQUE1VkpSRUZVT011bGxVRm9IRlVZeDMvdnpleGt1OFZrZHpQcnBncFdOSm9tNEpvME5hU25Ja0hySlJiMVVGQXNYbXEzS2xpdkpxQ0hoSjRxc1FkdG1rc1ZGS1FnWWtUYTBFcnhVQ01oYWQxQ1FyUTBEYmFKMjkxa2Q5MWtKcnM3TTg5RFpwbzBCQlQ4ejJWNDcvRjczL2ZlOS8rZXdGZW05ekNiMVQ4WURRTXRRQnVROElkendEUXdPOUJYWE51OFBqWDZEUUJpSzZ4L01Hb0FCNEczZ0c3QUJIUi8yZ0h5d0Rod0RyZzQwRmVzYm9hS0xiQW00Q1BnQ0JBQjhQQWVpRndpZzE4TCtCTDRlS0N2bU4yWWZ4QjJCa2dERVkvMUx5SjNrQXlaSkVNbUVibURZTnpmTUEwTTl3OUdrd0ZIWkhvUEIybCs2aS9BdzZNeEZLTW50cCt1K2hSeHZRR0FaYWZFUk9rR2x3dFh5VHVGemRHZUFkNGY2Q3RXZzdNNTZLZUpoMGR6ZURmSEgzMmRwTmJJeEdLR1M0V2ZBV2lKTmRPNzYzbTY2bE44ZnZkcmJxN05COUFqd0kvQXFIZzVjeXdNZkFXOEdrVDI0V05wOUtyRzBOUUltZndNanVjQW9FdWRsTm5LaWIxSHFlb1ZUczZkWlpsU0FQMFdlRVA2cGRFZHhONFQyMDlTYTJSb2FvVEo3SFdVVW1oQ1F4TWFTaWttczljWm1ocWhTWCtZQTNYN2NHMEhKUlErbzBYNmRXWUdGOUJWbitMWHhXdGs4alBvMG1DcmRHbVF5Yzh3a2YyTjduZ0hJdWZpV0RXVVVDYlFKdjJpMVFFZTBuWVMxeHY0b3pCM1A4M3Q1SGdPdnkvZndvekVpWGhocklVeW51WHFTcWlFNUg5S0luQXJEdFpmWldwTEZYVGZUZzVnbE4xVmxwMFNMYkZtZEttamxOb1dva3VkcCtOUGtMT1hLTlhLQ0NGd2JhZG1WMWZ1U2QrYmVZbkU4bXdtU2pkNGJsZUtsTm1LNDFXM1NiZEt5bXlscTZtZFgrNU9zbHF6RUVxQUpBOU1TMkRXOXlZQWx3dFh5YnBMbk5oN2xNNWsrL3J1eXNWVkxrSUlPcFB0Zk5ENU5nc3JXUzdjdnJJT1c5ZTROTFJaN2Z5ZFp1ZW5uckFOSEJLSTBLcG5jOHYrazQ2R1BmVHVmb0VubzQvenlNNGt6NWg3ZU9XcGwzaXo3VFVLYXlWT1RRNHpYNzZERkJKZ1ZValJmM3pvNzVuQUtSZDlvNmNsa3B0cjg1eWNPOHVCdW4xMHh6dDROdEcyM3J2c0pjN1Avc0NGMjFmSTJya042MG0ra0lZMkZwSnlvOXY0Qmg4R0RnVVdkRzBIa1hPSmVHRWtnbEt0ZlAvTWhCQUI3RHVocWZSN3A2MnNSR3k0MjI5QngzeWpXeEtKSGdtaEVobzVkNWtGSzR2bDJFaGtBRnRGOHBuUVZQcmQwMWJXVllwb25mSHZEVllKWmJxMm85dUxLN2kyVS9OdmMxd0ljVTRhMnRnN241U3FybExFalRwZXZEU0srQzlQZ0JJcVVWdXFZT2RXN2dIVDB0Qm0wNmVLbFpDVUtDQnFHUFNNZlEvQVB5MVhnMnY2S0lzRkFBQUFBRWxGVGtTdVFtQ0MnO1xuLyogZXNsaW50LWVuYWJsZSBtYXgtbGVuICovXG5jb25zdCBQT0xZR09OX0JBU0VfQ09MT1IgPSAnIzMzODhmZic7XG5cbmNvbnN0IERHX0NPTVBBTllfTkFNRSA9ICdEZXZlbG9wbWVudCBHYXRld2F5JztcbmNvbnN0IERHX0FERFJFU1NfMSA9ICcxMTEwIFZlcm1vbnQgQXZlLCBOVywgU3VpdGUgNTAwJztcbmNvbnN0IERHX0FERFJFU1NfMiA9ICdXYXNoaW5ndG9uLCBEQyAyMDAwNSBVU0EnO1xuY29uc3QgREdfQ09OVEFDVF9JTkZPID0gJ2luZm9AZGV2ZWxvcG1lbnRnYXRld2F5Lm9yZywgVGVsOiArMS4yMDIuNTcyLjkyMDAsIEZheDogKzEgMjAyLjU3Mi45MjkwJztcblxuY29uc3QgTE9HX0RJUiA9ICdsb2dzJztcbmNvbnN0IExPR19GSUxFX05BTUUgPSAnYW1wb2ZmbGluZSc7XG5jb25zdCBMT0dfRklMRV9FWFRFTlNJT04gPSAnbG9nJztcblxuLy8gTWVzc2FnZSBjb25zdGFudHNcbi8vIHRvdGFsIGFtb3VudCBvZiB0aW1lIHRoZSBtZXNzYWdlIHN0YXlzIHZpc2libGVcbmNvbnN0IE1FU1NBR0VfVElNRU9VVCA9IDEwICogMTAwMDtcbi8vIHdoZW4gaXQncyB0aGlzIGFtb3VudCBvZiB0aW1lIGxlZnQsIHdlIG5vZml0eSB0aGUgdXNlciB0aGF0IHRoZSBtZXNzYWdlIGlzIGFib3V0IHRvIGRpc2FwcGVhclxuY29uc3QgTUVTU0FHRV9ESVNBUFBFQVJfVElNRU9VVCA9IE1FU1NBR0VfVElNRU9VVCAvIDU7XG5jb25zdCBNRVNTQUdFX0NIRUNLX0lOVEVSVkFMID0gMTAwO1xuLy8gaG93IGxvbmcgc2hvdWxkIHRoZSBlbnRlci9sZWF2ZSBhbmltYXRpb24gcnVuKG1zKVxuLy8gKGlmIHlvdSBjaGFuZ2UgdGhpcyB5b3UnbGwgd2FubmEgY2hhbmdlIGl0IGluIHN0eWxlLmNzcywgdG9vKVxuY29uc3QgTUVTU0FHRV9BTklNQVRJT05fRFVSQVRJT04gPSA1MDA7XG5cbi8vIHRoaXMgaXMgdGhlIGludGVybmFsIGRhdGUgZm9ybWF0IHVzZWQgdG8gc3RvcmUgYW5kIHN5bmMgdXAgZGF0ZXNcbmNvbnN0IElOVEVSTkFMX0RBVEVfRk9STUFUID0gJ1lZWVktTU0tRERUSEg6bW06c3MuU1NTWic7XG4vLyBjdXJyZW50bHkgc3VwcG9ydGVkIG1heCAmIG1pbiB5ZWFycyBpbiBBTVAsIGkuZS4gZnJvbSAxOTcwLTAxLTAxIHRpbGwgMjA1MC0xMi0zMVxuY29uc3QgTUlOX1NVUFBPUlRFRF9ZRUFSID0gMTk3MDtcbmNvbnN0IE1BWF9TVVBQT1JURURfWUVBUiA9IDIwNTA7XG5cbmNvbnN0IFVQREFURVNfRElSID0gJ3VwZGF0ZXMnO1xuY29uc3QgQ09OVEVOVF9ESVNQT1NJVElPTl9IRUFERVIgPSAnQ29udGVudC1EaXNwb3NpdGlvbic7XG5jb25zdCBVUERBVEVfVE1QX0ZJTEUgPSAnYW1wLW9mZmxpbmUtaW5zdGFsbGVyLnRtcCc7XG5cbmNvbnN0IE9USEVSX0lEID0gOTk5OTk5OTk5O1xuY29uc3QgTlJfU1lOQ19ISVNUT1JZX0VOVFJJRVMgPSAyMDtcbmNvbnN0IE5SX0xPR19GSUxFUyA9IDEwMDtcbi8vIGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0lTT184NjAxI0R1cmF0aW9ucywgZXhhbXBsZTogXCJQMVkyTTEwRFQySDMwTVwiXG5jb25zdCBPTERfU1lOQ19MT0dTX0RVUkFUSU9OX0lTT184NjAxID0gJ1A2TSc7XG5jb25zdCBOUl9PTERfU1lOQ19MT0dTX1RPX0tFRVBfTUlOSU1VTSA9IE5SX1NZTkNfSElTVE9SWV9FTlRSSUVTO1xuXG5jb25zdCBNQVNURVJfQlJBTkNIID0gJ21hc3Rlcic7XG5jb25zdCBERVZFTE9QX0JSQU5DSCA9ICdkZXZlbG9wJztcbmNvbnN0IFJFTEVBU0VfQlJBTkNIX1JFR0VYID0gL3JlbGVhc2VcXC8vO1xuY29uc3QgUkVMRUFTRV9CUkFOQ0hFUyA9IFtNQVNURVJfQlJBTkNILCBSRUxFQVNFX0JSQU5DSF9SRUdFWF07XG5cbmNvbnN0IERJU0FCTEVfQ0hBTkdFTE9HUyA9ICdESVNBQkxFX0NIQU5HRUxPR1MnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5mcmVlemUoe1xuICBCQVNFX1JFU1RfVVJMLFxuICBDT05ORUNUSU9OX1RJTUVPVVQsXG4gIENPTk5FQ1RJT05fRk9SQ0VEX1RJTUVPVVQsXG4gIFRJTUVPVVRfQ0hFQ0tfSU5URVJWQUwsXG4gIE1BWF9SRVRSWV9BVEVNUFRTLFxuICBFUlJPUlNfVE9fUkVUUlksXG4gIEVSUk9SU19OT19BTVBfU0VSVkVSLFxuICBDT05ORUNUSVZJVFlfQ0hFQ0tfSU5URVJWQUwsXG4gIFdPUktTUEFDRV9VUkwsXG4gIExPR0lOX1VSTCxcbiAgREVTS1RPUF9VUkwsXG4gIERFU0tUT1BfQ1VSUkVOVF9VUkwsXG4gIFNZTkNVUF9SRURJUkVDVF9VUkwsXG4gIFNZTkNVUF9ISVNUT1JZX1RBUkdFVCxcbiAgU1lOQ1VQX1NVTU1BUllfVVJMLFxuICBBQ1RJVklUWV9QUkVWSUVXX1VSTCxcbiAgQUNUSVZJVFlfRURJVF9VUkwsXG4gIFVQREFURV9VUkwsXG4gIFNFVFVQX1VSTCxcbiAgU0VUVElOR1NfVVJMLFxuICBDT0xMRUNUSU9OX1VTRVJTLFxuICBDT0xMRUNUSU9OX1dPUktQQUNFUyxcbiAgQ09MTEVDVElPTl9URUFNTUVNQkVSUyxcbiAgQ09MTEVDVElPTl9DTElFTlRfU0VUVElOR1MsXG4gIENPTExFQ1RJT05fR0xPQkFMX1NFVFRJTkdTLFxuICBDT0xMRUNUSU9OX0FDVElWSVRJRVMsXG4gIENPTExFQ1RJT05fRklFTERTLFxuICBDT0xMRUNUSU9OX1BPU1NJQkxFX1ZBTFVFUyxcbiAgQ09MTEVDVElPTl9TWU5DVVBfTE9HLFxuICBDT0xMRUNUSU9OX0xBTkdTLFxuICBDT0xMRUNUSU9OX1dTX1NFVFRJTkdTLFxuICBDT0xMRUNUSU9OX0NVUlJFTkNZX1JBVEVTLFxuICBDT0xMRUNUSU9OX0ZFQVRVUkVfTUFOQUdFUixcbiAgQ09MTEVDVElPTl9DT05UQUNUUyxcbiAgQ09MTEVDVElPTl9SRVNPVVJDRVMsXG4gIENPTExFQ1RJT05fUkVQT1NJVE9SWSxcbiAgQ09MTEVDVElPTl9HQVpFVFRFRVIsXG4gIENPTExFQ1RJT05fQ0FMRU5EQVJTLFxuICBDT0xMRUNUSU9OX0NIQU5HRVNFVFMsXG4gIEdBWkVUVEVFUl9ESVNUQU5DRV9ESVZJREUsXG4gIERCX0ZJTEVfUFJFRklYLFxuICBEQl9GSUxFX0VYVEVOU0lPTixcbiAgREJfQ09NTU9OX0RBVEFTVE9SRV9PUFRJT05TLFxuICBEQl9BVVRPQ09NUEFDVF9JTlRFUlZBTF9NSUxJU0VDT05EUyxcbiAgREJfREVGQVVMVF9RVUVSWV9MSU1JVCxcbiAgTEFOR1VBR0VfRU5HTElTSCxcbiAgRlNfTE9DQUxFU19ESVJFQ1RPUlksXG4gIExBTkdVQUdFX01BU1RFUl9UUkFOU0xBVElPTlNfRklMRSxcbiAgTEFOR1VBR0VfVFJBTlNMQVRJT05TX0ZJTEUsXG4gIExBTkdVQUdFX05FV19UUkFOU0xBVElPTlNfTVVTVF9TWU5DLFxuICBBU0FSX0RJUixcbiAgQVBQX0RJUkVDVE9SWSxcbiAgVEVTVF9ESVJFQ1RPUlksXG4gIFNUQVRJQ19ESVIsXG4gIElNQUdFU19ESVIsXG4gIERPQ19JQ09OUyxcbiAgREJfU1RBVElDX0RJUixcbiAgTUlHUkFUSU9OU19ESVIsXG4gIEhBU0hfSVRFUkFUSU9OUyxcbiAgRElHRVNUX0FMR09SSVRITV9TSEExLFxuICBESUdFU1RfQUxHT1JJVEhNX1NIQTI1NixcbiAgQUNUSVZJVFlfRURJVCxcbiAgQUNUSVZJVFlfVklFVyxcbiAgU1lOQ1VQX0ZPUkNFX0RBWVMsXG4gIFNZTkNVUF9CRVNUX0JFRk9SRV9EQVlTLFxuICBTWU5DVVBfTk9fREFURSxcbiAgU1lOQ1VQX1RZUEVfVFJBTlNMQVRJT05TLFxuICBTWU5DVVBfVFlQRV9VU0VSUyxcbiAgU1lOQ1VQX1RZUEVfQVNTRVRTLFxuICBTWU5DVVBfVFlQRV9XT1JLU1BBQ0VTLFxuICBTWU5DVVBfVFlQRV9HUyxcbiAgU1lOQ1VQX1RZUEVfRVhDSEFOR0VfUkFURVMsXG4gIFNZTkNVUF9UWVBFX0ZFQVRVUkVfTUFOQUdFUixcbiAgU1lOQ1VQX1RZUEVfV09SS1NQQUNFX01FTUJFUlMsXG4gIFNZTkNVUF9UWVBFX0FMTF9GSUVMRFMsXG4gIFNZTkNVUF9UWVBFX0FDVElWSVRJRVNfUFVMTCxcbiAgU1lOQ1VQX1RZUEVfQUNUSVZJVElFU19QVVNILFxuICBTWU5DVVBfVFlQRV9BQ1RJVklUWV9GSUVMRFMsXG4gIFNZTkNVUF9UWVBFX0FDVElWSVRZX0ZJRUxEU19TVFJVQ1RVUkFMX0NIQU5HRVMsXG4gIFNZTkNVUF9UWVBFX0NPTlRBQ1RTX1BVTEwsXG4gIFNZTkNVUF9UWVBFX0NPTlRBQ1RTX1BVU0gsXG4gIFNZTkNVUF9UWVBFX0FDVElWSVRZX1BPU1NJQkxFX1ZBTFVFUyxcbiAgU1lOQ1VQX1RZUEVfQ09OVEFDVF9GSUVMRFMsXG4gIFNZTkNVUF9UWVBFX0NPTlRBQ1RfRklFTERTX1NUUlVDVFVSQUxfQ0hBTkdFUyxcbiAgU1lOQ1VQX1RZUEVfQ09OVEFDVF9QT1NTSUJMRV9WQUxVRVMsXG4gIFNZTkNVUF9UWVBFX1JFU09VUkNFU19QVUxMLFxuICBTWU5DVVBfVFlQRV9SRVNPVVJDRVNfUFVTSCxcbiAgU1lOQ1VQX1RZUEVfUkVTT1VSQ0VfRklFTERTLFxuICBTWU5DVVBfVFlQRV9SRVNPVVJDRV9GSUVMRFNfU1RSVUNUVVJBTF9DSEFOR0VTLFxuICBTWU5DVVBfVFlQRV9SRVNPVVJDRV9QT1NTSUJMRV9WQUxVRVMsXG4gIFNZTkNVUF9UWVBFX0NPTU1PTl9QT1NTSUJMRV9WQUxVRVMsXG4gIFNZTkNVUF9UWVBFX1dPUktTUEFDRV9TRVRUSU5HUyxcbiAgU1lOQ1VQX1RZUEVfTUFQX1RJTEVTLFxuICBTWU5DVVBfVFlQRV9HQVpFVFRFRVIsXG4gIFNZTkNVUF9UWVBFX0NBTEVOREFSUyxcbiAgU1lOQ1VQX1NUQVRVU19TVUNDRVNTLFxuICBTWU5DVVBfU1RBVFVTX0ZBSUwsXG4gIFNZTkNVUF9TVEFUVVNfUEFSVElBTCxcbiAgU1lOQ1VQX1NUQVRVU19DQU5DRUxFRCxcbiAgU1lOQ1VQX1NZTkNfUkVRVUVTVEVEX0FULFxuICBTWU5DVVBfU1lOQ19SRVFVRVNURURfQlksXG4gIFNZTkNVUF9EQVRFVElNRV9GSUVMRCxcbiAgU1lOQ1VQX0RJRkZfTEVGVE9WRVIsXG4gIFNZTkNVUF9ERVBFTkRFTkNZX0NIRUNLX0lOVEVSVkFMLFxuICBTWU5DVVBfREVUQUlMU19TWU5DRUQsXG4gIFNZTkNVUF9ERVRBSUxTX1VOU1lOQ0VELFxuICBTWU5DVVBfUkVTT1VSQ0VfUFVMTF9CQVRDSF9TSVpFLFxuICBTWU5DVVBfQUNUSVZJVElFU19QVUxMX0JBVENIX1NJWkUsXG4gIFNZTkNVUF9DT05UQUNUU19QVUxMX0JBVENIX1NJWkUsXG4gIEFDVElWSVRZX1NUQVRVU19EUkFGVCxcbiAgQUNUSVZJVFlfU1RBVFVTX1VOVkFMSURBVEVELFxuICBBQ1RJVklUWV9TVEFUVVNfVkFMSURBVEVELFxuICBDVVJSRU5DWV9IT1VSLFxuICBERUZBVUxUX0NVUlJFTkNZLFxuICBSQVRFX1NBTUVfQ1VSUkVOQ1ksXG4gIFJBVEVfQ1VSUkVOQ1lfTk9UX0ZPVU5ELFxuICBDVVJSRU5DWV9QQUlSLFxuICBWRVJTSU9OX1BBVFRFUk4sXG4gIFZFUlNJT05fUEFUVEVSTl9HUk9VUFNfVE9fRVhUUkFDVCxcbiAgQU1QX0NPVU5UUllfTE9HTyxcbiAgQVNTRVRTX0RJUkVDVE9SWSxcbiAgQkFTRV82NF9QTkdfUFJFRklYLFxuICBUUkFOU1BBUkVOVF9GTEFHLFxuICBIRUxQX1BERl9GSUxFTkFNRSxcbiAgSEVMUF9ESVIsXG4gIEVORFNfV0lUSF9QVU5DVFVBVElPTl9SRUdFWCxcbiAgTUFQX1RJTEVTX0RJUixcbiAgVElMRVNfWklQX0ZJTEUsXG4gIE1BUF9NQVJLRVJfSU1BR0UsXG4gIE1BUF9NQVJLRVJfU0hBRE9XLFxuICBNQVBfTUFSS0VSX0NJUkNMRV9SRUQsXG4gIE1BUF9NQVJLRVJfQ0lSQ0xFX0dSRUVOLFxuICBQT0xZR09OX0JBU0VfQ09MT1IsXG4gIERHX0NPTVBBTllfTkFNRSxcbiAgREdfQUREUkVTU18xLFxuICBER19BRERSRVNTXzIsXG4gIERHX0NPTlRBQ1RfSU5GTyxcbiAgTE9HX0RJUixcbiAgTE9HX0ZJTEVfTkFNRSxcbiAgTE9HX0ZJTEVfRVhURU5TSU9OLFxuICBNRVNTQUdFX1RJTUVPVVQsXG4gIE1FU1NBR0VfRElTQVBQRUFSX1RJTUVPVVQsXG4gIE1FU1NBR0VfQ0hFQ0tfSU5URVJWQUwsXG4gIE1FU1NBR0VfQU5JTUFUSU9OX0RVUkFUSU9OLFxuICBJTlRFUk5BTF9EQVRFX0ZPUk1BVCxcbiAgTUlOX1NVUFBPUlRFRF9ZRUFSLFxuICBNQVhfU1VQUE9SVEVEX1lFQVIsXG4gIFVQREFURVNfRElSLFxuICBDT05URU5UX0RJU1BPU0lUSU9OX0hFQURFUixcbiAgVVBEQVRFX1RNUF9GSUxFLFxuICBPVEhFUl9JRCxcbiAgTlJfU1lOQ19ISVNUT1JZX0VOVFJJRVMsXG4gIE5SX0xPR19GSUxFUyxcbiAgT0xEX1NZTkNfTE9HU19EVVJBVElPTl9JU09fODYwMSxcbiAgTlJfT0xEX1NZTkNfTE9HU19UT19LRUVQX01JTklNVU0sXG4gIE1BU1RFUl9CUkFOQ0gsXG4gIERFVkVMT1BfQlJBTkNILFxuICBSRUxFQVNFX0JSQU5DSF9SRUdFWCxcbiAgUkVMRUFTRV9CUkFOQ0hFUyxcbiAgRElTQUJMRV9DSEFOR0VMT0dTXG59KTtcbiIsIi8qIGVzbGludC1kaXNhYmxlIG1heC1sZW4gKi9cblxuLyoqXG4gKiBAYXV0aG9yIE5hZGVqZGEgTWFuZHJlc2N1XG4gKi9cblxuY29uc3QgUFVCTElDX1ZJRVdfQ0hBTkdFX1BBU1NXT1JEID0gJy9QVUJMSUMgVklFVy9Mb2dpbiAtIFVzZXIgTWFuYWdlbWVudC9DaGFuZ2UgUGFzc3dvcmQnO1xuY29uc3QgUFVCTElDX1ZJRVdfVFJPVUJMRV9TSUdOX0lOID0gJy9QVUJMSUMgVklFVy9Mb2dpbiAtIFVzZXIgTWFuYWdlbWVudC9Ucm91YmxlIHNpZ25pbmcgaW4nO1xuY29uc3QgQUNUSVZJVFlfREVMSVZFUllfUkFURSA9ICcvUFJPSkVDVCBNQU5BR0VNRU5UL0Z1bmRpbmcvRnVuZGluZyBJbmZvcm1hdGlvbi9EZWxpdmVyeSByYXRlJztcbmNvbnN0IEFDVElWSVRZX1BST0pFQ1RfSURfQU5EX1BMQU5OSU5HID0gJy9QUk9KRUNUIE1BTkFHRU1FTlQvUHJvamVjdCBJRCBhbmQgUGxhbm5pbmcnO1xuY29uc3QgQUNUSVZJVFlfRFVSQVRJT05fT0ZfUFJPSkVDVCA9ICcvUFJPSkVDVCBNQU5BR0VNRU5UL1Byb2plY3QgSUQgYW5kIFBsYW5uaW5nL1BsYW5uaW5nL0R1cmF0aW9uIG9mIFByb2plY3QnO1xuY29uc3QgQUNUSVZJVFlfVEVBTV9MRUFERVIgPSAnL1BST0pFQ1QgTUFOQUdFTUVOVC9Qcm9qZWN0IElEIGFuZCBQbGFubmluZy9JZGVudGlmaWNhdGlvbi9EYXRhIFRlYW0gTGVhZGVyJztcbmNvbnN0IEFDVElWSVRZX1NBTUVfQVNfUFJPUE9TRURfU1RBUlRfREFURSA9XG4gICcvQWN0aXZpdHkgRm9ybS9QbGFubmluZy9BY3R1YWwgU3RhcnQgRGF0ZS9TYW1lIEFzIFByb3Bvc2VkIFN0YXJ0IERhdGUnO1xuY29uc3QgQUNUSVZJVFlfU0FNRV9BU19QUk9QT1NFRF9BUFBST1ZBTF9EQVRFID1cbiAgJy9BY3Rpdml0eSBGb3JtL1BsYW5uaW5nL0FjdHVhbCBBcHByb3ZhbCBEYXRlL1NhbWUgQXMgUHJvcG9zZWQgQXBwcm92YWwgRGF0ZSc7XG5jb25zdCBBQ1RJVklUWV9JREVOVElGSUNBVElPTiA9ICcvQWN0aXZpdHkgRm9ybS9JZGVudGlmaWNhdGlvbic7XG5jb25zdCBBQ1RJVklUWV9MQVNUX1VQREFURURfQlkgPSAnL0FjdGl2aXR5IEZvcm0vSWRlbnRpZmljYXRpb24vQWN0aXZpdHkgTGFzdCBVcGRhdGVkIGJ5JztcbmNvbnN0IEFDVElWSVRZX0xBU1RfVVBEQVRFRF9PTiA9ICcvQWN0aXZpdHkgRm9ybS9JZGVudGlmaWNhdGlvbi9BY3Rpdml0eSBVcGRhdGVkIE9uJztcbmNvbnN0IEFDVElWSVRZX0ZVTkRJTkcgPSAnL0FjdGl2aXR5IEZvcm0vRnVuZGluZyc7XG5jb25zdCBBRl9GVU5ESU5HX0ZVTkRJTkdHUk9VUF9GVU5ESU5HSVRFTSA9IGAke0FDVElWSVRZX0ZVTkRJTkd9L0Z1bmRpbmcgR3JvdXAvRnVuZGluZyBJdGVtYDtcbmNvbnN0IEFDVElWSVRZX1NFQ1RPUlMgPSAnL0FjdGl2aXR5IEZvcm0vU2VjdG9ycyc7XG5jb25zdCBBQ1RJVklUWV9QUklNQVJZX1NFQ1RPUlMgPSAnL0FjdGl2aXR5IEZvcm0vU2VjdG9ycy9QcmltYXJ5IFNlY3RvcnMnO1xuY29uc3QgQUNUSVZJVFlfU0VDT05EQVJZX1NFQ1RPUlMgPSAnL0FjdGl2aXR5IEZvcm0vU2VjdG9ycy9TZWNvbmRhcnkgU2VjdG9ycyc7XG5cbmNvbnN0IEFDVElWSVRZX1NUUlVDVFVSRVMgPSAnL0FjdGl2aXR5IEZvcm0vU3RydWN0dXJlcyc7XG5jb25zdCBBQ1RJVklUWV9TVFJVQ1RVUkVTX0FERF9TVFJVQ1RVUkUgPSBgJHtBQ1RJVklUWV9TVFJVQ1RVUkVTfS9BZGQgU3RydWN0dXJlYDtcblxuY29uc3QgQUNUSVZJVFlfT1JHQU5JWkFUSU9OUyA9ICcvQWN0aXZpdHkgRm9ybS9Pcmdhbml6YXRpb25zJztcbmNvbnN0IEFDVElWSVRZX09SR0FOSVpBVElPTlNfRE9OT1JfT1JHQU5JWkFUSU9OID0gYCR7QUNUSVZJVFlfT1JHQU5JWkFUSU9OU30vRG9ub3IgT3JnYW5pemF0aW9uYDtcbmNvbnN0IEFDVElWSVRZX09SR0FOSVpBVElPTlNfQkVORUZJQ0lBUllfQUdFTkNZID0gYCR7QUNUSVZJVFlfT1JHQU5JWkFUSU9OU30vQmVuZWZpY2lhcnkgQWdlbmN5YDtcbmNvbnN0IEFDVElWSVRZX09SR0FOSVpBVElPTlNfQ09OVFJBQ1RJTkdfQUdFTkNZID0gYCR7QUNUSVZJVFlfT1JHQU5JWkFUSU9OU30vQ29udHJhY3RpbmcgQWdlbmN5YDtcbmNvbnN0IEFDVElWSVRZX09SR0FOSVpBVElPTlNfRVhFQ1VUSU5HX0FHRU5DWSA9IGAke0FDVElWSVRZX09SR0FOSVpBVElPTlN9L0V4ZWN1dGluZyBBZ2VuY3lgO1xuY29uc3QgQUNUSVZJVFlfT1JHQU5JWkFUSU9OU19JTVBMRU1FTlRJTkdfQUdFTkNZID0gYCR7QUNUSVZJVFlfT1JHQU5JWkFUSU9OU30vSW1wbGVtZW50aW5nIEFnZW5jeWA7XG5jb25zdCBBQ1RJVklUWV9PUkdBTklaQVRJT05TX1JFR0lPTkFMX0dST1VQID0gYCR7QUNUSVZJVFlfT1JHQU5JWkFUSU9OU30vUmVnaW9uYWwgR3JvdXBgO1xuY29uc3QgQUNUSVZJVFlfT1JHQU5JWkFUSU9OU19SRUxBVEVEX0dPVkVSTk1FTlRfT1JHQU5JWkFUSU9OID0gYCR7QUNUSVZJVFlfT1JHQU5JWkFUSU9OU30vUmVsYXRlZCBHb3Zlcm5tZW50IE9yZ2FuaXphdGlvbmA7XG5jb25zdCBBQ1RJVklUWV9PUkdBTklaQVRJT05TX1NFQ1RPUl9HUk9VUCA9IGAke0FDVElWSVRZX09SR0FOSVpBVElPTlN9L1NlY3RvciBHcm91cGA7XG5cbmNvbnN0IEFERF9GVU5ESU5HX0FVVE8gPSAnQWRkIEZ1bmRpbmcgSXRlbSBBdXRvbWF0aWNhbGx5JztcbmNvbnN0IEFDVElWSVRZX09SR0FOSVpBVElPTlNfQkVORUZJQ0lBUllfQUdFTkNZX0FERF9GVU5ESU5HX0FVVE8gPSBgJHtBQ1RJVklUWV9PUkdBTklaQVRJT05TX0JFTkVGSUNJQVJZX0FHRU5DWX0vJHtBRERfRlVORElOR19BVVRPfWA7XG5jb25zdCBBQ1RJVklUWV9PUkdBTklaQVRJT05TX0NPTlRSQUNUSU5HX0FHRU5DWV9BRERfRlVORElOR19BVVRPID0gYCR7QUNUSVZJVFlfT1JHQU5JWkFUSU9OU19DT05UUkFDVElOR19BR0VOQ1l9LyR7QUREX0ZVTkRJTkdfQVVUT31gO1xuY29uc3QgQUNUSVZJVFlfT1JHQU5JWkFUSU9OU19ET05PUl9PUkdBTklaQVRJT05fQUREX0ZVTkRJTkdfQVVUTyA9IGAke0FDVElWSVRZX09SR0FOSVpBVElPTlNfRE9OT1JfT1JHQU5JWkFUSU9OfS8ke0FERF9GVU5ESU5HX0FVVE99YDtcbmNvbnN0IEFDVElWSVRZX09SR0FOSVpBVElPTlNfRVhFQ1VUSU5HX0FHRU5DWV9BRERfRlVORElOR19BVVRPID0gYCR7QUNUSVZJVFlfT1JHQU5JWkFUSU9OU19FWEVDVVRJTkdfQUdFTkNZfS8ke0FERF9GVU5ESU5HX0FVVE99YDtcbmNvbnN0IEFDVElWSVRZX09SR0FOSVpBVElPTlNfSU1QTEVNRU5USU5HX0FHRU5DWV9BRERfRlVORElOR19BVVRPID0gYCR7QUNUSVZJVFlfT1JHQU5JWkFUSU9OU19JTVBMRU1FTlRJTkdfQUdFTkNZfS8ke0FERF9GVU5ESU5HX0FVVE99YDtcbmNvbnN0IEFDVElWSVRZX09SR0FOSVpBVElPTlNfUkVHSU9OQUxfR1JPVVBfQUREX0ZVTkRJTkdfQVVUTyA9IGAke0FDVElWSVRZX09SR0FOSVpBVElPTlNfUkVHSU9OQUxfR1JPVVB9LyR7QUREX0ZVTkRJTkdfQVVUT31gO1xuY29uc3QgQUNUSVZJVFlfT1JHQU5JWkFUSU9OU19SRVNQT05TSUJMRV9PUkdBTklaQVRJT05fQUREX0ZVTkRJTkdfQVVUTyA9IGAke0FDVElWSVRZX09SR0FOSVpBVElPTlNfUkVMQVRFRF9HT1ZFUk5NRU5UX09SR0FOSVpBVElPTn0vJHtBRERfRlVORElOR19BVVRPfWA7XG5jb25zdCBBQ1RJVklUWV9PUkdBTklaQVRJT05TX1NFQ1RPUl9HUk9VUF9BRERfRlVORElOR19BVVRPID0gYCR7QUNUSVZJVFlfT1JHQU5JWkFUSU9OU19TRUNUT1JfR1JPVVB9LyR7QUREX0ZVTkRJTkdfQVVUT31gO1xuXG5jb25zdCBBQ1RJVklUWV9GVU5ESU5HX1NFQVJDSCA9IGAke0FDVElWSVRZX0ZVTkRJTkd9L1NlYXJjaCBGdW5kaW5nIE9yZ2FuaXphdGlvbnNgO1xuY29uc3QgQUNUSVZJVFlfRlVORElOR19TRUFSQ0hfT1JHQU5JWkFUSU9OID0gYCR7QUNUSVZJVFlfRlVORElOR19TRUFSQ0h9L1NlYXJjaCBPcmdhbml6YXRpb25zYDtcbmNvbnN0IEFDVElWSVRZX0ZVTkRJTkdfU0VMRUNUX09SR19UWVBFID0gYCR7QUNUSVZJVFlfRlVORElOR19TRUFSQ0h9L1NlbGVjdCBPcmdhbml6YXRpb24gVHlwZWA7XG5cbmNvbnN0IEFDVElWSVRZX1BST0dSQU0gPSAnL0FjdGl2aXR5IEZvcm0vUHJvZ3JhbSc7XG5jb25zdCBBQ1RJVklUWV9QTEFOTklORyA9ICcvQWN0aXZpdHkgRm9ybS9QbGFubmluZyc7XG5cbmNvbnN0IEFDVElWSVRZX0NPTlRBQ1QgPSAnL0FjdGl2aXR5IEZvcm0vQ29udGFjdHMnO1xuY29uc3QgQUNUSVZJVFlfRE9DVU1FTlRTX0FERF9ET0NVTUVOVCA9ICcvQWN0aXZpdHkgRm9ybS9SZWxhdGVkIERvY3VtZW50cy9BZGQgTmV3IERvY3VtZW50JztcbmNvbnN0IEFDVElWSVRZX0RPQ1VNRU5UU19BRERfV0VCTElOSyA9ICcvQWN0aXZpdHkgRm9ybS9SZWxhdGVkIERvY3VtZW50cy9BZGQgTmV3IFdlYiBMaW5rJztcblxuY29uc3QgQUNUSVZJVFlfSVNTVUVTX0FERF9JU1NVRSA9ICcvQWN0aXZpdHkgRm9ybS9Jc3N1ZXMgU2VjdGlvbi9BZGQgSXNzdWUnO1xuY29uc3QgQUNUSVZJVFlfSVNTVUVTX0RFTEVURV9JU1NVRSA9ICcvQWN0aXZpdHkgRm9ybS9Jc3N1ZXMgU2VjdGlvbi9Jc3N1ZS9EZWxldGUgSXRlbSc7XG5jb25zdCBBQ1RJVklUWV9JU1NVRVNfQUREX01FQVNVUkUgPSAnL0FjdGl2aXR5IEZvcm0vSXNzdWVzIFNlY3Rpb24vSXNzdWUvQWRkIEl0ZW0nO1xuY29uc3QgQUNUSVZJVFlfSVNTVUVTX0RFTEVURV9NRUFTVVJFID0gJy9BY3Rpdml0eSBGb3JtL0lzc3VlcyBTZWN0aW9uL0lzc3VlL01lYXN1cmUvRGVsZXRlIEl0ZW0nO1xuY29uc3QgQUNUSVZJVFlfSVNTVUVTX0FERF9BQ1RPUiA9ICcvQWN0aXZpdHkgRm9ybS9Jc3N1ZXMgU2VjdGlvbi9Jc3N1ZS9NZWFzdXJlL0FkZCBJdGVtJztcbmNvbnN0IEFDVElWSVRZX0lTU1VFU19ERUxFVEVfQUNUT1IgPSAnL0FjdGl2aXR5IEZvcm0vSXNzdWVzIFNlY3Rpb24vSXNzdWUvTWVhc3VyZS9BY3Rvci9EZWxldGUgSXRlbSc7XG5cbmNvbnN0IEFDVElWSVRZX0RJU0JVUlNFTUVOVFNfRlVORElOR19GTE9XU19PUkdST0xFX0FERF9JTVBMRU1FTlRJTkdfQUdFTkNZID1cbiAgYCR7QUZfRlVORElOR19GVU5ESU5HR1JPVVBfRlVORElOR0lURU19L0Rpc2J1cnNlbWVudHMvRGlzYnVyc2VtZW50cyBUYWJsZS9GdW5kaW5nIEZsb3dzIE9yZ1JvbGUgU2VsZWN0b3IvQWRkIEltcGxlbWVudGluZyBBZ2VuY3lgO1xuY29uc3QgQUNUSVZJVFlfRElTQlVSU0VNRU5UU19GVU5ESU5HX0ZMT1dTX09SR1JPTEVfQUREX0NPTlRSQUNUSU5HX0FHRU5DWSA9XG4gIGAke0FGX0ZVTkRJTkdfRlVORElOR0dST1VQX0ZVTkRJTkdJVEVNfS9EaXNidXJzZW1lbnRzL0Rpc2J1cnNlbWVudHMgVGFibGUvRnVuZGluZyBGbG93cyBPcmdSb2xlIFNlbGVjdG9yL0FkZCBDb250cmFjdGluZyBBZ2VuY3lgO1xuY29uc3QgQUNUSVZJVFlfRElTQlVSU0VNRU5UU19GVU5ESU5HX0ZMT1dTX09SR1JPTEVfQUREX0JFTkVGSUNJQVJZX0FHRU5DWSA9XG4gIGAke0FGX0ZVTkRJTkdfRlVORElOR0dST1VQX0ZVTkRJTkdJVEVNfS9EaXNidXJzZW1lbnRzL0Rpc2J1cnNlbWVudHMgVGFibGUvRnVuZGluZyBGbG93cyBPcmdSb2xlIFNlbGVjdG9yL0FkZCBCZW5lZmljaWFyeSBBZ2VuY3lgO1xuY29uc3QgQUNUSVZJVFlfRElTQlVSU0VNRU5UU19GVU5ESU5HX0ZMT1dTX09SR1JPTEVfQUREX0RPTk9SX09SR0FOSVpBVElPTiA9XG4gIGAke0FGX0ZVTkRJTkdfRlVORElOR0dST1VQX0ZVTkRJTkdJVEVNfS9EaXNidXJzZW1lbnRzL0Rpc2J1cnNlbWVudHMgVGFibGUvRnVuZGluZyBGbG93cyBPcmdSb2xlIFNlbGVjdG9yL0FkZCBEb25vciBPcmdhbml6YXRpb25gO1xuY29uc3QgQUNUSVZJVFlfRElTQlVSU0VNRU5UU19GVU5ESU5HX0ZMT1dTX09SR1JPTEVfQUREX0VYRUNVVElOR19BR0VOQ1kgPVxuICBgJHtBRl9GVU5ESU5HX0ZVTkRJTkdHUk9VUF9GVU5ESU5HSVRFTX0vRGlzYnVyc2VtZW50cy9EaXNidXJzZW1lbnRzIFRhYmxlL0Z1bmRpbmcgRmxvd3MgT3JnUm9sZSBTZWxlY3Rvci9BZGQgRXhlY3V0aW5nIEFnZW5jeWA7XG5jb25zdCBBQ1RJVklUWV9ESVNCVVJTRU1FTlRTX0ZVTkRJTkdfRkxPV1NfT1JHUk9MRV9BRERfUkVHSU9OQUxfR1JPVVAgPVxuICBgJHtBRl9GVU5ESU5HX0ZVTkRJTkdHUk9VUF9GVU5ESU5HSVRFTX0vRGlzYnVyc2VtZW50cy9EaXNidXJzZW1lbnRzIFRhYmxlL0Z1bmRpbmcgRmxvd3MgT3JnUm9sZSBTZWxlY3Rvci9BZGQgUmVnaW9uYWwgR3JvdXBgO1xuY29uc3QgQUNUSVZJVFlfRElTQlVSU0VNRU5UU19GVU5ESU5HX0ZMT1dTX09SR1JPTEVfQUREX1JFU1BPTlNJQkxFX09SR0FOSVpBVElPTiA9XG4gIGAke0FGX0ZVTkRJTkdfRlVORElOR0dST1VQX0ZVTkRJTkdJVEVNfS9EaXNidXJzZW1lbnRzL0Rpc2J1cnNlbWVudHMgVGFibGUvRnVuZGluZyBGbG93cyBPcmdSb2xlIFNlbGVjdG9yL0FkZCBSZXNwb25zaWJsZSBPcmdhbml6YXRpb25gO1xuY29uc3QgQUNUSVZJVFlfRElTQlVSU0VNRU5UU19GVU5ESU5HX0ZMT1dTX09SR1JPTEVfQUREX1NFQ1RPUl9HUk9VUCA9XG4gIGAke0FGX0ZVTkRJTkdfRlVORElOR0dST1VQX0ZVTkRJTkdJVEVNfS9EaXNidXJzZW1lbnRzL0Rpc2J1cnNlbWVudHMgVGFibGUvRnVuZGluZyBGbG93cyBPcmdSb2xlIFNlbGVjdG9yL0FkZCBTZWN0b3IgR3JvdXBgO1xuXG5jb25zdCBBQ1RJVklUWV9DT01NSVRNRU5UU19GVU5ESU5HX0ZMT1dTX09SR1JPTEVfQUREX0lNUExFTUVOVElOR19BR0VOQ1kgPVxuICBgJHtBRl9GVU5ESU5HX0ZVTkRJTkdHUk9VUF9GVU5ESU5HSVRFTX0vQ29tbWl0bWVudHMvQ29tbWl0bWVudHMgVGFibGUvRnVuZGluZyBGbG93cyBPcmdSb2xlIFNlbGVjdG9yL0FkZCBJbXBsZW1lbnRpbmcgQWdlbmN5YDtcbmNvbnN0IEFDVElWSVRZX0NPTU1JVE1FTlRTX0ZVTkRJTkdfRkxPV1NfT1JHUk9MRV9BRERfQ09OVFJBQ1RJTkdfQUdFTkNZID1cbiAgYCR7QUZfRlVORElOR19GVU5ESU5HR1JPVVBfRlVORElOR0lURU19L0NvbW1pdG1lbnRzL0NvbW1pdG1lbnRzIFRhYmxlL0Z1bmRpbmcgRmxvd3MgT3JnUm9sZSBTZWxlY3Rvci9BZGQgQ29udHJhY3RpbmcgQWdlbmN5YDtcbmNvbnN0IEFDVElWSVRZX0NPTU1JVE1FTlRTX0ZVTkRJTkdfRkxPV1NfT1JHUk9MRV9BRERfQkVORUZJQ0lBUllfQUdFTkNZID1cbiAgYCR7QUZfRlVORElOR19GVU5ESU5HR1JPVVBfRlVORElOR0lURU19L0NvbW1pdG1lbnRzL0NvbW1pdG1lbnRzIFRhYmxlL0Z1bmRpbmcgRmxvd3MgT3JnUm9sZSBTZWxlY3Rvci9BZGQgQmVuZWZpY2lhcnkgQWdlbmN5YDtcbmNvbnN0IEFDVElWSVRZX0NPTU1JVE1FTlRTX0ZVTkRJTkdfRkxPV1NfT1JHUk9MRV9BRERfRE9OT1JfT1JHQU5JWkFUSU9OID1cbiAgYCR7QUZfRlVORElOR19GVU5ESU5HR1JPVVBfRlVORElOR0lURU19L0NvbW1pdG1lbnRzL0NvbW1pdG1lbnRzIFRhYmxlL0Z1bmRpbmcgRmxvd3MgT3JnUm9sZSBTZWxlY3Rvci9BZGQgRG9ub3IgT3JnYW5pemF0aW9uYDtcbmNvbnN0IEFDVElWSVRZX0NPTU1JVE1FTlRTX0ZVTkRJTkdfRkxPV1NfT1JHUk9MRV9BRERfRVhFQ1VUSU5HX0FHRU5DWSA9XG4gIGAke0FGX0ZVTkRJTkdfRlVORElOR0dST1VQX0ZVTkRJTkdJVEVNfS9Db21taXRtZW50cy9Db21taXRtZW50cyBUYWJsZS9GdW5kaW5nIEZsb3dzIE9yZ1JvbGUgU2VsZWN0b3IvQWRkIEV4ZWN1dGluZyBBZ2VuY3lgO1xuY29uc3QgQUNUSVZJVFlfQ09NTUlUTUVOVFNfRlVORElOR19GTE9XU19PUkdST0xFX0FERF9SRUdJT05BTF9HUk9VUCA9XG4gIGAke0FGX0ZVTkRJTkdfRlVORElOR0dST1VQX0ZVTkRJTkdJVEVNfS9Db21taXRtZW50cy9Db21taXRtZW50cyBUYWJsZS9GdW5kaW5nIEZsb3dzIE9yZ1JvbGUgU2VsZWN0b3IvQWRkIFJlZ2lvbmFsIEdyb3VwYDtcbmNvbnN0IEFDVElWSVRZX0NPTU1JVE1FTlRTX0ZVTkRJTkdfRkxPV1NfT1JHUk9MRV9BRERfUkVTUE9OU0lCTEVfT1JHQU5JWkFUSU9OID1cbiAgYCR7QUZfRlVORElOR19GVU5ESU5HR1JPVVBfRlVORElOR0lURU19L0NvbW1pdG1lbnRzL0NvbW1pdG1lbnRzIFRhYmxlL0Z1bmRpbmcgRmxvd3MgT3JnUm9sZSBTZWxlY3Rvci9BZGQgUmVzcG9uc2libGUgT3JnYW5pemF0aW9uYDtcbmNvbnN0IEFDVElWSVRZX0NPTU1JVE1FTlRTX0ZVTkRJTkdfRkxPV1NfT1JHUk9MRV9BRERfU0VDVE9SX0dST1VQID1cbiAgYCR7QUZfRlVORElOR19GVU5ESU5HR1JPVVBfRlVORElOR0lURU19L0NvbW1pdG1lbnRzL0NvbW1pdG1lbnRzIFRhYmxlL0Z1bmRpbmcgRmxvd3MgT3JnUm9sZSBTZWxlY3Rvci9BZGQgU2VjdG9yIEdyb3VwYDtcblxuY29uc3QgQUNUSVZJVFlfRVhQRU5ESVRVUkVTX0ZVTkRJTkdfRkxPV1NfT1JHUk9MRV9BRERfSU1QTEVNRU5USU5HX0FHRU5DWSA9XG4gIGAke0FGX0ZVTkRJTkdfRlVORElOR0dST1VQX0ZVTkRJTkdJVEVNfS9FeHBlbmRpdHVyZXMvRXhwZW5kaXR1cmVzIFRhYmxlL0Z1bmRpbmcgRmxvd3MgT3JnUm9sZSBTZWxlY3Rvci9BZGQgSW1wbGVtZW50aW5nIEFnZW5jeWA7XG5jb25zdCBBQ1RJVklUWV9FWFBFTkRJVFVSRVNfRlVORElOR19GTE9XU19PUkdST0xFX0FERF9DT05UUkFDVElOR19BR0VOQ1kgPVxuICBgJHtBRl9GVU5ESU5HX0ZVTkRJTkdHUk9VUF9GVU5ESU5HSVRFTX0vRXhwZW5kaXR1cmVzL0V4cGVuZGl0dXJlcyBUYWJsZS9GdW5kaW5nIEZsb3dzIE9yZ1JvbGUgU2VsZWN0b3IvQWRkIENvbnRyYWN0aW5nIEFnZW5jeWA7XG5jb25zdCBBQ1RJVklUWV9FWFBFTkRJVFVSRVNfRlVORElOR19GTE9XU19PUkdST0xFX0FERF9CRU5FRklDSUFSWV9BR0VOQ1kgPVxuICBgJHtBRl9GVU5ESU5HX0ZVTkRJTkdHUk9VUF9GVU5ESU5HSVRFTX0vRXhwZW5kaXR1cmVzL0V4cGVuZGl0dXJlcyBUYWJsZS9GdW5kaW5nIEZsb3dzIE9yZ1JvbGUgU2VsZWN0b3IvQWRkIEJlbmVmaWNpYXJ5IEFnZW5jeWA7XG5jb25zdCBBQ1RJVklUWV9FWFBFTkRJVFVSRVNfRlVORElOR19GTE9XU19PUkdST0xFX0FERF9ET05PUl9PUkdBTklaQVRJT04gPVxuICBgJHtBRl9GVU5ESU5HX0ZVTkRJTkdHUk9VUF9GVU5ESU5HSVRFTX0vRXhwZW5kaXR1cmVzL0V4cGVuZGl0dXJlcyBUYWJsZS9GdW5kaW5nIEZsb3dzIE9yZ1JvbGUgU2VsZWN0b3IvQWRkIERvbm9yIE9yZ2FuaXphdGlvbmA7XG5jb25zdCBBQ1RJVklUWV9FWFBFTkRJVFVSRVNfRlVORElOR19GTE9XU19PUkdST0xFX0FERF9FWEVDVVRJTkdfQUdFTkNZID1cbiAgYCR7QUZfRlVORElOR19GVU5ESU5HR1JPVVBfRlVORElOR0lURU19L0V4cGVuZGl0dXJlcy9FeHBlbmRpdHVyZXMgVGFibGUvRnVuZGluZyBGbG93cyBPcmdSb2xlIFNlbGVjdG9yL0FkZCBFeGVjdXRpbmcgQWdlbmN5YDtcbmNvbnN0IEFDVElWSVRZX0VYUEVORElUVVJFU19GVU5ESU5HX0ZMT1dTX09SR1JPTEVfQUREX1JFR0lPTkFMX0dST1VQID1cbiAgYCR7QUZfRlVORElOR19GVU5ESU5HR1JPVVBfRlVORElOR0lURU19L0V4cGVuZGl0dXJlcy9FeHBlbmRpdHVyZXMgVGFibGUvRnVuZGluZyBGbG93cyBPcmdSb2xlIFNlbGVjdG9yL0FkZCBSZWdpb25hbCBHcm91cGA7XG5jb25zdCBBQ1RJVklUWV9FWFBFTkRJVFVSRVNfRlVORElOR19GTE9XU19PUkdST0xFX0FERF9SRVNQT05TSUJMRV9PUkdBTklaQVRJT04gPVxuICBgJHtBRl9GVU5ESU5HX0ZVTkRJTkdHUk9VUF9GVU5ESU5HSVRFTX0vRXhwZW5kaXR1cmVzL0V4cGVuZGl0dXJlcyBUYWJsZS9GdW5kaW5nIEZsb3dzIE9yZ1JvbGUgU2VsZWN0b3IvQWRkIFJlc3BvbnNpYmxlIE9yZ2FuaXphdGlvbmA7XG5jb25zdCBBQ1RJVklUWV9FWFBFTkRJVFVSRVNfRlVORElOR19GTE9XU19PUkdST0xFX0FERF9TRUNUT1JfR1JPVVAgPVxuICBgJHtBRl9GVU5ESU5HX0ZVTkRJTkdHUk9VUF9GVU5ESU5HSVRFTX0vRXhwZW5kaXR1cmVzL0V4cGVuZGl0dXJlcyBUYWJsZS9GdW5kaW5nIEZsb3dzIE9yZ1JvbGUgU2VsZWN0b3IvQWRkIFNlY3RvciBHcm91cGA7XG5cbmNvbnN0IE1URUZfUFJPSkVDVElPTlMgPSBgJHtBRl9GVU5ESU5HX0ZVTkRJTkdHUk9VUF9GVU5ESU5HSVRFTX0vTVRFRiBQcm9qZWN0aW9uc2A7XG5jb25zdCBNVEVGX1BST0pFQ1RJT05TX0FNT1VOVCA9XG4gIGAke0FGX0ZVTkRJTkdfRlVORElOR0dST1VQX0ZVTkRJTkdJVEVNfS9NVEVGIFByb2plY3Rpb25zL01URUYgUHJvamVjdGlvbnMgVGFibGUvQW1vdW50YDtcbmNvbnN0IE1URUZfUFJPSkVDVElPTlNfQ1VSUkVOQ1kgPVxuICBgJHtBRl9GVU5ESU5HX0ZVTkRJTkdHUk9VUF9GVU5ESU5HSVRFTX0vTVRFRiBQcm9qZWN0aW9ucy9NVEVGIFByb2plY3Rpb25zIFRhYmxlL0N1cnJlbmN5YDtcbmNvbnN0IE1URUZfUFJPSkVDVElPTlNfUFJPSkVDVElPTiA9XG4gIGAke0FGX0ZVTkRJTkdfRlVORElOR0dST1VQX0ZVTkRJTkdJVEVNfS9NVEVGIFByb2plY3Rpb25zL01URUYgUHJvamVjdGlvbnMgVGFibGUvTVRFRiBQcm9qZWN0aW9uYDtcbmNvbnN0IE1URUZfUFJPSkVDVElPTlNfREFURSA9XG4gIGAke0FGX0ZVTkRJTkdfRlVORElOR0dST1VQX0ZVTkRJTkdJVEVNfS9NVEVGIFByb2plY3Rpb25zL01URUYgUHJvamVjdGlvbnMgVGFibGUvUHJvamVjdGlvbiBEYXRlYDtcblxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuZnJlZXplKHtcbiAgUFVCTElDX1ZJRVdfQ0hBTkdFX1BBU1NXT1JELFxuICBQVUJMSUNfVklFV19UUk9VQkxFX1NJR05fSU4sXG4gIEFDVElWSVRZX0RFTElWRVJZX1JBVEUsXG4gIEFDVElWSVRZX1BST0pFQ1RfSURfQU5EX1BMQU5OSU5HLFxuICBBQ1RJVklUWV9EVVJBVElPTl9PRl9QUk9KRUNULFxuICBBQ1RJVklUWV9URUFNX0xFQURFUixcbiAgQUNUSVZJVFlfU0FNRV9BU19QUk9QT1NFRF9TVEFSVF9EQVRFLFxuICBBQ1RJVklUWV9TQU1FX0FTX1BST1BPU0VEX0FQUFJPVkFMX0RBVEUsXG4gIEFDVElWSVRZX0lERU5USUZJQ0FUSU9OLFxuICBBQ1RJVklUWV9MQVNUX1VQREFURURfQlksXG4gIEFDVElWSVRZX0xBU1RfVVBEQVRFRF9PTixcbiAgQUNUSVZJVFlfU0VDVE9SUyxcbiAgQUNUSVZJVFlfUFJJTUFSWV9TRUNUT1JTLFxuICBBQ1RJVklUWV9TRUNPTkRBUllfU0VDVE9SUyxcbiAgQUNUSVZJVFlfU1RSVUNUVVJFUyxcbiAgQUNUSVZJVFlfU1RSVUNUVVJFU19BRERfU1RSVUNUVVJFLFxuICBBQ1RJVklUWV9PUkdBTklaQVRJT05TLFxuICBBQ1RJVklUWV9PUkdBTklaQVRJT05TX0RPTk9SX09SR0FOSVpBVElPTixcbiAgQUNUSVZJVFlfT1JHQU5JWkFUSU9OU19CRU5FRklDSUFSWV9BR0VOQ1ksXG4gIEFDVElWSVRZX09SR0FOSVpBVElPTlNfQ09OVFJBQ1RJTkdfQUdFTkNZLFxuICBBQ1RJVklUWV9PUkdBTklaQVRJT05TX0VYRUNVVElOR19BR0VOQ1ksXG4gIEFDVElWSVRZX09SR0FOSVpBVElPTlNfSU1QTEVNRU5USU5HX0FHRU5DWSxcbiAgQUNUSVZJVFlfT1JHQU5JWkFUSU9OU19SRUdJT05BTF9HUk9VUCxcbiAgQUNUSVZJVFlfT1JHQU5JWkFUSU9OU19SRUxBVEVEX0dPVkVSTk1FTlRfT1JHQU5JWkFUSU9OLFxuICBBQ1RJVklUWV9PUkdBTklaQVRJT05TX1NFQ1RPUl9HUk9VUCxcbiAgQUNUSVZJVFlfT1JHQU5JWkFUSU9OU19CRU5FRklDSUFSWV9BR0VOQ1lfQUREX0ZVTkRJTkdfQVVUTyxcbiAgQUNUSVZJVFlfT1JHQU5JWkFUSU9OU19DT05UUkFDVElOR19BR0VOQ1lfQUREX0ZVTkRJTkdfQVVUTyxcbiAgQUNUSVZJVFlfT1JHQU5JWkFUSU9OU19ET05PUl9PUkdBTklaQVRJT05fQUREX0ZVTkRJTkdfQVVUTyxcbiAgQUNUSVZJVFlfT1JHQU5JWkFUSU9OU19FWEVDVVRJTkdfQUdFTkNZX0FERF9GVU5ESU5HX0FVVE8sXG4gIEFDVElWSVRZX09SR0FOSVpBVElPTlNfSU1QTEVNRU5USU5HX0FHRU5DWV9BRERfRlVORElOR19BVVRPLFxuICBBQ1RJVklUWV9PUkdBTklaQVRJT05TX1JFR0lPTkFMX0dST1VQX0FERF9GVU5ESU5HX0FVVE8sXG4gIEFDVElWSVRZX09SR0FOSVpBVElPTlNfUkVTUE9OU0lCTEVfT1JHQU5JWkFUSU9OX0FERF9GVU5ESU5HX0FVVE8sXG4gIEFDVElWSVRZX09SR0FOSVpBVElPTlNfU0VDVE9SX0dST1VQX0FERF9GVU5ESU5HX0FVVE8sXG4gIEFDVElWSVRZX0ZVTkRJTkdfU0VBUkNILFxuICBBQ1RJVklUWV9GVU5ESU5HX1NFQVJDSF9PUkdBTklaQVRJT04sXG4gIEFDVElWSVRZX0ZVTkRJTkdfU0VMRUNUX09SR19UWVBFLFxuICBBQ1RJVklUWV9QUk9HUkFNLFxuICBBQ1RJVklUWV9QTEFOTklORyxcbiAgQUNUSVZJVFlfQ09OVEFDVCxcbiAgQUNUSVZJVFlfRE9DVU1FTlRTX0FERF9ET0NVTUVOVCxcbiAgQUNUSVZJVFlfRE9DVU1FTlRTX0FERF9XRUJMSU5LLFxuICBBQ1RJVklUWV9JU1NVRVNfQUREX0lTU1VFLFxuICBBQ1RJVklUWV9JU1NVRVNfREVMRVRFX0lTU1VFLFxuICBBQ1RJVklUWV9JU1NVRVNfQUREX01FQVNVUkUsXG4gIEFDVElWSVRZX0lTU1VFU19ERUxFVEVfTUVBU1VSRSxcbiAgQUNUSVZJVFlfSVNTVUVTX0FERF9BQ1RPUixcbiAgQUNUSVZJVFlfSVNTVUVTX0RFTEVURV9BQ1RPUixcbiAgQUNUSVZJVFlfRElTQlVSU0VNRU5UU19GVU5ESU5HX0ZMT1dTX09SR1JPTEVfQUREX0lNUExFTUVOVElOR19BR0VOQ1ksXG4gIEFDVElWSVRZX0RJU0JVUlNFTUVOVFNfRlVORElOR19GTE9XU19PUkdST0xFX0FERF9DT05UUkFDVElOR19BR0VOQ1ksXG4gIEFDVElWSVRZX0RJU0JVUlNFTUVOVFNfRlVORElOR19GTE9XU19PUkdST0xFX0FERF9CRU5FRklDSUFSWV9BR0VOQ1ksXG4gIEFDVElWSVRZX0RJU0JVUlNFTUVOVFNfRlVORElOR19GTE9XU19PUkdST0xFX0FERF9ET05PUl9PUkdBTklaQVRJT04sXG4gIEFDVElWSVRZX0RJU0JVUlNFTUVOVFNfRlVORElOR19GTE9XU19PUkdST0xFX0FERF9FWEVDVVRJTkdfQUdFTkNZLFxuICBBQ1RJVklUWV9ESVNCVVJTRU1FTlRTX0ZVTkRJTkdfRkxPV1NfT1JHUk9MRV9BRERfUkVHSU9OQUxfR1JPVVAsXG4gIEFDVElWSVRZX0RJU0JVUlNFTUVOVFNfRlVORElOR19GTE9XU19PUkdST0xFX0FERF9SRVNQT05TSUJMRV9PUkdBTklaQVRJT04sXG4gIEFDVElWSVRZX0RJU0JVUlNFTUVOVFNfRlVORElOR19GTE9XU19PUkdST0xFX0FERF9TRUNUT1JfR1JPVVAsXG4gIEFDVElWSVRZX0NPTU1JVE1FTlRTX0ZVTkRJTkdfRkxPV1NfT1JHUk9MRV9BRERfSU1QTEVNRU5USU5HX0FHRU5DWSxcbiAgQUNUSVZJVFlfQ09NTUlUTUVOVFNfRlVORElOR19GTE9XU19PUkdST0xFX0FERF9DT05UUkFDVElOR19BR0VOQ1ksXG4gIEFDVElWSVRZX0NPTU1JVE1FTlRTX0ZVTkRJTkdfRkxPV1NfT1JHUk9MRV9BRERfQkVORUZJQ0lBUllfQUdFTkNZLFxuICBBQ1RJVklUWV9DT01NSVRNRU5UU19GVU5ESU5HX0ZMT1dTX09SR1JPTEVfQUREX0RPTk9SX09SR0FOSVpBVElPTixcbiAgQUNUSVZJVFlfQ09NTUlUTUVOVFNfRlVORElOR19GTE9XU19PUkdST0xFX0FERF9FWEVDVVRJTkdfQUdFTkNZLFxuICBBQ1RJVklUWV9DT01NSVRNRU5UU19GVU5ESU5HX0ZMT1dTX09SR1JPTEVfQUREX1JFR0lPTkFMX0dST1VQLFxuICBBQ1RJVklUWV9DT01NSVRNRU5UU19GVU5ESU5HX0ZMT1dTX09SR1JPTEVfQUREX1JFU1BPTlNJQkxFX09SR0FOSVpBVElPTixcbiAgQUNUSVZJVFlfQ09NTUlUTUVOVFNfRlVORElOR19GTE9XU19PUkdST0xFX0FERF9TRUNUT1JfR1JPVVAsXG4gIEFDVElWSVRZX0VYUEVORElUVVJFU19GVU5ESU5HX0ZMT1dTX09SR1JPTEVfQUREX0lNUExFTUVOVElOR19BR0VOQ1ksXG4gIEFDVElWSVRZX0VYUEVORElUVVJFU19GVU5ESU5HX0ZMT1dTX09SR1JPTEVfQUREX0NPTlRSQUNUSU5HX0FHRU5DWSxcbiAgQUNUSVZJVFlfRVhQRU5ESVRVUkVTX0ZVTkRJTkdfRkxPV1NfT1JHUk9MRV9BRERfQkVORUZJQ0lBUllfQUdFTkNZLFxuICBBQ1RJVklUWV9FWFBFTkRJVFVSRVNfRlVORElOR19GTE9XU19PUkdST0xFX0FERF9ET05PUl9PUkdBTklaQVRJT04sXG4gIEFDVElWSVRZX0VYUEVORElUVVJFU19GVU5ESU5HX0ZMT1dTX09SR1JPTEVfQUREX0VYRUNVVElOR19BR0VOQ1ksXG4gIEFDVElWSVRZX0VYUEVORElUVVJFU19GVU5ESU5HX0ZMT1dTX09SR1JPTEVfQUREX1JFR0lPTkFMX0dST1VQLFxuICBBQ1RJVklUWV9FWFBFTkRJVFVSRVNfRlVORElOR19GTE9XU19PUkdST0xFX0FERF9SRVNQT05TSUJMRV9PUkdBTklaQVRJT04sXG4gIEFDVElWSVRZX0VYUEVORElUVVJFU19GVU5ESU5HX0ZMT1dTX09SR1JPTEVfQUREX1NFQ1RPUl9HUk9VUCxcbiAgTVRFRl9QUk9KRUNUSU9OUyxcbiAgTVRFRl9QUk9KRUNUSU9OU19BTU9VTlQsXG4gIE1URUZfUFJPSkVDVElPTlNfQ1VSUkVOQ1ksXG4gIE1URUZfUFJPSkVDVElPTlNfUFJPSkVDVElPTixcbiAgTVRFRl9QUk9KRUNUSU9OU19EQVRFLFxufSk7XG4iLCJpbXBvcnQgRk1DIGZyb20gJy4vRmVhdHVyZU1hbmFnZXJDb25zdGFudHMnO1xuXG4vKipcbiAqIEBhdXRob3IgTmFkZWpkYSBNYW5kcmVzY3VcbiAqL1xuXG4vLyBBY3Rpdml0eSBmaWVsZHNcbmNvbnN0IEFDVElWSVRZX0JVREdFVCA9ICdhY3Rpdml0eV9idWRnZXQnO1xuY29uc3QgQUNUSVZJVFlfU1RBVFVTID0gJ2FjdGl2aXR5X3N0YXR1cyc7XG5jb25zdCBTVEFUVVNfUkVBU09OID0gJ3N0YXR1c19yZWFzb24nO1xuY29uc3QgRklOQU5DSUFMX0lOU1RSVU1FTlQgPSAnZmluYW5jaWFsX2luc3RydW1lbnQnO1xuY29uc3QgVFlQRV9PRl9JTVBMRU1FTlRBVElPTiA9ICd0eXBlX29mX2ltcGxlbWVudGF0aW9uJztcbmNvbnN0IE9CSkVDVElWRSA9ICdvYmplY3RpdmUnO1xuY29uc3QgUkVTVUxUUyA9ICdyZXN1bHRzJztcbmNvbnN0IEJVREdFVF9DT0RFX1BST0pFQ1RfSUQgPSAnYnVkZ2V0X2NvZGVfcHJvamVjdF9pZCc7XG5jb25zdCBBQ1RVQUxfQVBQUk9WQUxfREFURSA9ICdhY3R1YWxfYXBwcm92YWxfZGF0ZSc7XG5jb25zdCBGVU5ESU5HUyA9ICdmdW5kaW5ncyc7XG5jb25zdCBGVU5ESU5HX0RPTk9SX09SR19JRCA9ICdkb25vcl9vcmdhbml6YXRpb25faWQnO1xuY29uc3QgSVNfRFJBRlQgPSAnaXNfZHJhZnQnO1xuY29uc3QgT1JHX1JPTEVfT1JHX0lEID0gJ29yZ2FuaXphdGlvbic7XG5jb25zdCBBRERJVElPTkFMX0lORk8gPSAnYWRkaXRpb25hbF9pbmZvJztcbmNvbnN0IFBSSU1BUllfU0VDVE9SUyA9ICdwcmltYXJ5X3NlY3RvcnMnO1xuY29uc3QgU0VDT05EQVJZX1NFQ1RPUlMgPSAnc2Vjb25kYXJ5X3NlY3RvcnMnO1xuY29uc3QgVEVSVElBUllfU0VDVE9SUyA9ICd0ZXJ0aWFyeV9zZWN0b3JzJztcbmNvbnN0IFRBR19TRUNUT1JTID0gJ3RhZ19zZWN0b3JzJztcbmNvbnN0IFNFQ1RPUiA9ICdzZWN0b3InO1xuY29uc3QgU0VDVE9SX1BFUkNFTlRBR0UgPSAnc2VjdG9yX3BlcmNlbnRhZ2UnO1xuY29uc3QgRklOQU5DSU5HX0lOU1RSVU1FTlQgPSAnZmluYW5jaW5nX2luc3RydW1lbnQnO1xuY29uc3QgTU9EQUxJVElFUyA9ICdtb2RhbGl0aWVzJztcbmNvbnN0IExJTkVfTUlOSVNUUllfUkFOSyA9ICdsaW5lX21pbmlzdHJ5X3JhbmsnO1xuY29uc3QgR09WRVJOTUVOVF9BR1JFRU1FTlRfTlVNQkVSID0gJ2dvdmVybm1lbnRfYWdyZWVtZW50X251bWJlcic7XG5jb25zdCBGVU5ESU5HX1NUQVRVUyA9ICdmdW5kaW5nX3N0YXR1cyc7XG5jb25zdCBMT0NBVElPTlMgPSAnbG9jYXRpb25zJztcbmNvbnN0IExPQ0FUSU9OID0gJ2xvY2F0aW9uJztcbmNvbnN0IExPQ0FUSU9OX1BFUkNFTlRBR0UgPSAnbG9jYXRpb25fcGVyY2VudGFnZSc7XG5jb25zdCBJTVBMRU1FTlRBVElPTl9MT0NBVElPTiA9ICdpbXBsZW1lbnRhdGlvbl9sb2NhdGlvbic7XG5jb25zdCBJTVBMRU1FTlRBVElPTl9MRVZFTCA9ICdpbXBsZW1lbnRhdGlvbl9sZXZlbCc7XG5jb25zdCBBUFBST1ZBTF9TVEFUVVMgPSAnYXBwcm92YWxfc3RhdHVzJztcbmNvbnN0IEFQUFJPVkVEX0JZID0gJ2FwcHJvdmVkX2J5JztcbmNvbnN0IEFQUFJPVkFMX0RBVEUgPSAnYXBwcm92YWxfZGF0ZSc7XG5jb25zdCBUWVBFX09GX0FTU0lTVEFOQ0UgPSAndHlwZV9vZl9hc3Npc3RhbmNlJztcbmNvbnN0IEVYUEVORElUVVJFX0NMQVNTID0gJ2V4cGVuZGl0dXJlX2NsYXNzJztcbmNvbnN0IEZVTkRJTkdfREVUQUlMUyA9ICdmdW5kaW5nX2RldGFpbHMnO1xuY29uc3QgTU9ERV9PRl9QQVlNRU5UID0gJ21vZGVfb2ZfcGF5bWVudCc7XG5jb25zdCBGVU5ESU5HX0NMQVNTSUZJQ0FUSU9OX0RBVEUgPSAnZnVuZGluZ19jbGFzc2lmaWNhdGlvbl9kYXRlJztcbmNvbnN0IEFHUkVFTUVOVCA9ICdhZ3JlZW1lbnQnO1xuY29uc3QgRE9OT1JfT0JKRUNUSVZFID0gJ2Rvbm9yX29iamVjdGl2ZSc7XG5jb25zdCBDT05ESVRJT05TID0gJ2NvbmRpdGlvbnMnO1xuY29uc3QgQUdSRUVNRU5UX0NPREUgPSAnY29kZSc7XG5jb25zdCBBR1JFRU1FTlRfVElUTEUgPSAndGl0bGUnO1xuY29uc3QgUFJPSkVDVF9DQVRFR09SWSA9ICdwcm9qZWN0X2NhdGVnb3J5JztcbmNvbnN0IFBST0pFQ1RfSU1QTEVNRU5USU5HX1VOSVQgPSAncHJvamVjdF9pbXBsZW1lbnRpbmdfdW5pdCc7XG5jb25zdCBPUkdBTklaQVRJT04gPSAnb3JnYW5pemF0aW9uJztcbmNvbnN0IFBFUkNFTlRBR0UgPSAncGVyY2VudGFnZSc7XG5jb25zdCBBTVBfT1JHQU5JWkFUSU9OX1JPTEVfSUQgPSAnYW1wX29yZ2FuaXphdGlvbl9yb2xlX2lkJztcbmNvbnN0IFJPTEUgPSAncm9sZSc7XG5jb25zdCBFWEVDVVRJTkdfQUdFTkNZID0gJ2V4ZWN1dGluZ19hZ2VuY3knO1xuY29uc3QgQ09OVFJBQ1RJTkdfQUdFTkNZID0gJ2NvbnRyYWN0aW5nX2FnZW5jeSc7XG5jb25zdCBCRU5FRklDSUFSWV9BR0VOQ1kgPSAnYmVuZWZpY2lhcnlfYWdlbmN5JztcbmNvbnN0IElNUExFTUVOVElOR19BR0VOQ1kgPSAnaW1wbGVtZW50aW5nX2FnZW5jeSc7XG5jb25zdCBSRVNQT05TSUJMRV9PUkdBTklaQVRJT04gPSAncmVzcG9uc2libGVfb3JnYW5pemF0aW9uJztcbmNvbnN0IERPTk9SX09SR0FOSVpBVElPTiA9ICdkb25vcl9vcmdhbml6YXRpb24nO1xuY29uc3QgUkVHSU9OQUxfR1JPVVAgPSAncmVnaW9uYWxfZ3JvdXAnO1xuY29uc3QgU0VDVE9SX0dST1VQID0gJ3NlY3Rvcl9ncm91cCc7XG5jb25zdCBCVURHRVRTID0gJ2J1ZGdldHMnO1xuY29uc3QgQlVER0VUX0NPREUgPSAnYnVkZ2V0X2NvZGUnO1xuY29uc3QgQlVER0VUX09SR0FOSVpBVElPTl9DT0RFID0gJ2J1ZGdldF9vcmdhbml6YXRpb25fY29kZSc7XG5jb25zdCBBUkNISVZFRCA9ICdhcmNoaXZlZCc7XG5jb25zdCBUUkFOU0FDVElPTl9EQVRFID0gJ3RyYW5zYWN0aW9uX2RhdGUnO1xuY29uc3QgVFJBTlNBQ1RJT05fVFlQRSA9ICd0cmFuc2FjdGlvbl90eXBlJztcbmNvbnN0IENPTU1JVE1FTlRTID0gJ2NvbW1pdG1lbnRzJztcbmNvbnN0IERJU0JVUlNFTUVOVFMgPSAnZGlzYnVyc2VtZW50cyc7XG5jb25zdCBFWFBFTkRJVFVSRVMgPSAnZXhwZW5kaXR1cmVzJztcbmNvbnN0IEVTVElNQVRFRF9ESVNCVVJTRU1FTlRTID0gJ2VzdGltYXRlZF9kaXNidXJzZW1lbnRzJztcbmNvbnN0IFRSQU5TQUNUSU9OX0FNT1VOVCA9ICd0cmFuc2FjdGlvbl9hbW91bnQnO1xuY29uc3QgQURKVVNUTUVOVF9UWVBFID0gJ2FkanVzdG1lbnRfdHlwZSc7XG5jb25zdCBBQ1RVQUxfU1RBUlRfREFURSA9ICdhY3R1YWxfc3RhcnRfZGF0ZSc7XG5jb25zdCBQUk9QT1NFRF9TVEFSVF9EQVRFID0gJ3Byb3Bvc2VkX3N0YXJ0X2RhdGUnO1xuY29uc3QgQUNUVUFMX0NPTVBMRVRJT05fREFURSA9ICdhY3R1YWxfY29tcGxldGlvbl9kYXRlJztcbmNvbnN0IENPTlRSQUNUSU5HX0RBVEUgPSAnY29udHJhY3RpbmdfZGF0ZSc7XG5jb25zdCBESVNCVVJTRU1FTlRfREFURSA9ICdkaXNidXJzZW1lbnRfZGF0ZSc7XG5jb25zdCBQUk9QT1NFRF9BUFBST1ZBTF9EQVRFID0gJ3Byb3Bvc2VkX2FwcHJvdmFsX2RhdGUnO1xuY29uc3QgT1JJR0lOQUxfQ09NUExFVElPTl9EQVRFID0gJ29yaWdpbmFsX2NvbXBsZXRpb25fZGF0ZSc7XG5jb25zdCBQUk9QT1NFRF9DT01QTEVUSU9OX0RBVEUgPSAncHJvcG9zZWRfY29tcGxldGlvbl9kYXRlJztcbmNvbnN0IEZJTkFMX0RBVEVfRk9SX0RJU0JVUlNFTUVOVFMgPSAnZmluYWxfZGF0ZV9mb3JfZGlzYnVyc2VtZW50cyc7XG5jb25zdCBGSU5BTF9EQVRFX0ZPUl9DT05UUkFDVElORyA9ICdmaW5hbF9kYXRlX2Zvcl9jb250cmFjdGluZyc7XG5jb25zdCBFRkZFQ1RJVkVfRlVORElOR19EQVRFID0gJ2VmZmVjdGl2ZV9mdW5kaW5nX2RhdGUnO1xuY29uc3QgRlVORElOR19DTE9TSU5HX0RBVEUgPSAnZnVuZGluZ19jbG9zaW5nX2RhdGUnO1xuY29uc3QgUkFUSUZJQ0FUSU9OX0RBVEUgPSAncmF0aWZpY2F0aW9uX2RhdGUnO1xuY29uc3QgTUFUVVJJVFkgPSAnbWF0dXJpdHknO1xuY29uc3QgTEFTVF9BVURJVF9EQVRFID0gJ2xhc3RfYXVkaXRfZGF0ZSc7XG5jb25zdCBTSUdOQVRVUkVfREFURSA9ICdzaWduYXR1cmVfZGF0ZSc7XG5jb25zdCBIVU1BTklUQVJJQU5fQUlEID0gJ2h1bWFuaXRhcmlhbl9haWQnO1xuY29uc3QgRElTQVNURVJfUkVTUE9OU0UgPSAnZGlzYXN0ZXJfcmVzcG9uc2UnO1xuY29uc3QgUFJPR1JBTSA9ICdwcm9ncmFtJztcbmNvbnN0IFBST0dSQU1fUEVSQ0VOVEFHRSA9ICdwcm9ncmFtX3BlcmNlbnRhZ2UnO1xuY29uc3QgUFJPR1JBTV9TRVRUSU5HUyA9ICdwcm9ncmFtX3NldHRpbmdzJztcbmNvbnN0IE5BVElPTkFMX1BMQU5fT0JKRUNUSVZFID0gJ25hdGlvbmFsX3BsYW5fb2JqZWN0aXZlJztcbmNvbnN0IFBSSU1BUllfUFJPR1JBTVMgPSAncHJpbWFyeV9wcm9ncmFtcyc7XG5jb25zdCBTRUNPTkRBUllfUFJPR1JBTVMgPSAnc2Vjb25kYXJ5X3Byb2dyYW1zJztcbmNvbnN0IFRFUlRJQVJfUFJPR1JBTVMgPSAndGVydGlhcnlfcHJvZ3JhbXMnO1xuY29uc3QgR09WRVJOTUVOVF9BUFBST1ZBTF9QUk9DRURVUkVTID0gJ2dvdmVybm1lbnRfYXBwcm92YWxfcHJvY2VkdXJlcyc7XG5jb25zdCBKT0lOVF9DUklURVJJQSA9ICdqb2ludF9jcml0ZXJpYSc7XG5jb25zdCBURUFNID0gJ3RlYW0nO1xuY29uc3QgUkVKRUNURURfSUQgPSAncmVqZWN0ZWRJZCc7XG5jb25zdCBJTlRFUk5BTF9JRCA9ICdpbnRlcm5hbF9pZCc7XG5jb25zdCBBTVBfSUQgPSAnYW1wX2lkJztcbmNvbnN0IFBST0pFQ1RfVElUTEUgPSAncHJvamVjdF90aXRsZSc7XG5jb25zdCBERVNDUklQVElPTiA9ICdkZXNjcmlwdGlvbic7XG5jb25zdCBNT0RJRklFRF9CWSA9ICdtb2RpZmllZF9ieSc7XG5jb25zdCBNT0RJRklFRF9PTiA9ICd1cGRhdGVfZGF0ZSc7XG5jb25zdCBDUkVBVEVEX0JZID0gJ2NyZWF0ZWRfYnknO1xuY29uc3QgQ1JFQVRFRF9PTiA9ICdjcmVhdGlvbl9kYXRlJztcbmNvbnN0IExBU1RfSU1QT1JURURfQlkgPSAnbGFzdF9pbXBvcnRlZF9ieSc7XG5jb25zdCBDTElFTlRfQ0hBTkdFX0lEID0gJ2NsaWVudC1jaGFuZ2UtaWQnO1xuY29uc3QgQ0xJRU5UX0NSRUFURURfT04gPSAnY2xpZW50LWNyZWF0ZWQtb24nO1xuY29uc3QgQ0xJRU5UX1VQREFURURfT04gPSAnY2xpZW50LXVwZGF0ZWQtb24nO1xuY29uc3QgSVNfUFVTSEVEID0gJ2lzLXB1c2hlZCc7XG5jb25zdCBBQ1RJVklUWV9HUk9VUCA9ICdhY3Rpdml0eV9ncm91cCc7XG5jb25zdCBWRVJTSU9OID0gJ3ZlcnNpb24nO1xuY29uc3QgUFJPSkVDVF9DT01NRU5UUyA9ICdwcm9qZWN0X2NvbW1lbnRzJztcbmNvbnN0IExFU1NPTlNfTEVBUk5FRCA9ICdsZXNzb25zX2xlYXJuZWQnO1xuY29uc3QgUFJPSkVDVF9JTVBBQ1QgPSAncHJvamVjdF9pbXBhY3QnO1xuY29uc3QgQUNUSVZJVFlfU1VNTUFSWSA9ICdhY3Rpdml0eV9zdW1tYXJ5JztcbmNvbnN0IENPTkRJVElPTkFMSVRJRVMgPSAnY29uZGl0aW9uYWxpdGllcyc7XG5jb25zdCBQUk9KRUNUX01BTkFHRU1FTlQgPSAncHJvamVjdF9tYW5hZ2VtZW50JztcbmNvbnN0IEFfQ19DSEFQVEVSID0gJ2FfY19jaGFwdGVyJztcbmNvbnN0IENSSVNfTlVNQkVSID0gJ2NyaXNfbnVtYmVyJztcbmNvbnN0IElBVElfSURFTlRJRklFUiA9ICdpYXRpX2lkZW50aWZpZXInO1xuY29uc3QgQUNUSVZJVFlfSU5URVJOQUxfSURTID0gJ2FjdGl2aXR5X2ludGVybmFsX2lkcyc7XG5jb25zdCBISUVSQVJDSElDQUxfVkFMVUUgPSAnaGllcmFyY2hpY2FsX3ZhbHVlJztcbmNvbnN0IEhJRVJBUkNISUNBTF9WQUxVRV9QQVJUUyA9ICdoaWVyYXJjaGljYWxfdmFsdWVfcGFydHMnO1xuY29uc3QgSElFUkFSQ0hJQ0FMX1ZBTFVFX0RFUFRIID0gJ2hpZXJhcmNoaWNhbF92YWx1ZV9kZXB0aCc7XG5jb25zdCBQUENfQU1PVU5UID0gJ3BwY19hbW91bnQnO1xuY29uc3QgUlBDX0FNT1VOVCA9ICdycGNfYW1vdW50JztcbmNvbnN0IFBQQ19BTk5VQUxfQlVER0VUUyA9ICdwcGNfYW5udWFsX2J1ZGdldHMnO1xuY29uc3QgQU1PVU5UID0gJ2Ftb3VudCc7XG5jb25zdCBDVVJSRU5DWSA9ICdjdXJyZW5jeSc7XG5jb25zdCBGVU5ESU5HX0RBVEUgPSAnZnVuZGluZ19kYXRlJztcbmNvbnN0IENPTVBPTkVOVFMgPSAnY29tcG9uZW50cyc7XG5jb25zdCBUT1RBTF9OVU1CRVJfT0ZfRlVORElOR19TT1VSQ0VTID0gJ3RvdGFsX251bWJlcl9vZl9mdW5kaW5nX3NvdXJjZXMnO1xuY29uc3QgU09VUkNFX1JPTEUgPSAnc291cmNlX3JvbGUnO1xuY29uc3QgQU1QX0ZVTkRJTkdfSUQgPSAnZnVuZGluZ19pZCc7XG5jb25zdCBJU1NVRVMgPSAnaXNzdWVzJztcbmNvbnN0IElTU1VFX0RBVEUgPSAnaXNzdWVfZGF0ZSc7XG5jb25zdCBJU1NVRV9OQU1FID0gJ25hbWUnO1xuY29uc3QgTUVBU1VSRVMgPSAnbWVhc3VyZXMnO1xuY29uc3QgTUVBU1VSRV9OQU1FID0gJ25hbWUnO1xuY29uc3QgTUVBU1VSRV9EQVRFID0gJ21lYXN1cmVfZGF0ZSc7XG5jb25zdCBBQ1RPUlMgPSAnYWN0b3JzJztcbmNvbnN0IEFDVE9SX05BTUUgPSAnbmFtZSc7XG5jb25zdCBTVFJVQ1RVUkVTID0gJ3N0cnVjdHVyZXMnO1xuY29uc3QgU1RSVUNUVVJFU19USVRMRSA9ICd0aXRsZSc7XG5jb25zdCBTVFJVQ1RVUkVTX0RFU0NSSVBUSU9OID0gJ2Rlc2NyaXB0aW9uJztcbmNvbnN0IFNUUlVDVFVSRVNfTEFUSVRVREUgPSAnbGF0aXR1ZGUnO1xuY29uc3QgU1RSVUNUVVJFU19MT05HSVRVREUgPSAnbG9uZ2l0dWRlJztcbmNvbnN0IFNUUlVDVFVSRVNfQ09MT1IgPSAnc3RydWN0dXJlX2NvbG9yJztcbmNvbnN0IFNUUlVDVFVSRVNfTEFUID0gJ2xhdCc7XG5jb25zdCBTVFJVQ1RVUkVTX0xORyA9ICdsbmcnO1xuY29uc3QgU1RSVUNUVVJFU19TSEFQRSA9ICdzaGFwZSc7XG5jb25zdCBTVFJVQ1RVUkVTX1BPSU5UID0gJ1BvaW50JztcbmNvbnN0IFNUUlVDVFVSRVNfUE9MWUdPTiA9ICdQb2x5Z29uJztcbmNvbnN0IFNUUlVDVFVSRVNfUE9MWUxJTkUgPSAnUG9seWxpbmUnO1xuY29uc3QgU1RSVUNUVVJFU19DT09SRElOQVRFUyA9ICdjb29yZGluYXRlcyc7XG5jb25zdCBDT01QT05FTlRfVFlQRSA9ICdjb21wb25lbnRfdHlwZSc7XG5jb25zdCBDT01QT05FTlRfVElUTEUgPSAnY29tcG9uZW50X3RpdGxlJztcbmNvbnN0IENPTVBPTkVOVF9GVU5ESU5HID0gJ2Z1bmRpbmcnO1xuY29uc3QgQ09NUE9ORU5UX0RFU0NSSVBUSU9OID0gJ2Rlc2NyaXB0aW9uJztcbmNvbnN0IENPTVBPTkVOVF9PUkdBTklaQVRJT04gPSAnY29tcG9uZW50X29yZ2FuaXphdGlvbic7XG5jb25zdCBGVU5ESU5HX0FNT1VOVF9JRCA9ICdhbXBfZnVuZGluZ19hbW91bnRfaWQnO1xuY29uc3QgRVhUUkFfSU5GTyA9ICdleHRyYV9pbmZvJztcbmNvbnN0IFZBTFVFID0gJ3ZhbHVlJztcbmNvbnN0IEFDUk9OWU0gPSAnYWNyb255bSc7XG5jb25zdCBUWVBFX09GX0NPT1BFUkFUSU9OID0gJ3R5cGVfb2ZfY29vcGVyYXRpb24nO1xuY29uc3QgQU5OVUFMX1BST0pFQ1RfQlVER0VUX0lEID0gJ2FubnVhbF9wcm9qZWN0X2J1ZGdldF9pZCc7XG5jb25zdCBUWVBFID0gJ3R5cGUnO1xuY29uc3QgWUVBUiA9ICd5ZWFyJztcbmNvbnN0IEdST1VQX1ZFUlNJT05FRF9GVU5ESU5HID0gJ2dyb3VwX3ZlcnNpb25lZF9mdW5kaW5nJztcbmNvbnN0IEFDVElWRV9MSVNUID0gJ2FjdGl2ZV9saXN0JztcbmNvbnN0IEFDVElWRSA9ICdhY3RpdmUnO1xuY29uc3QgREVMRUdBVEVEX0NPT1BFUkFUSU9OID0gJ2RlbGVnYXRlZF9jb29wZXJhdGlvbic7XG5jb25zdCBERUxFR0FURURfUEFSVE5FUiA9ICdkZWxlZ2F0ZWRfcGFydG5lcic7XG5jb25zdCBGSU5BTkNJTkdfSUQgPSAnZmluYW5jaW5nX2lkJztcbmNvbnN0IERJU0JVUlNFTUVOVF9PUkRFUl9JRCA9ICdkaXNidXJzZW1lbnRfb3JkZXJfaWQnO1xuY29uc3QgUExFREdFID0gJ3BsZWRnZSc7XG5jb25zdCBDQVBJVEFMX1NQRU5ESU5HX1BFUkNFTlRBR0UgPSAnY2FwaXRhbF9zcGVuZGluZ19wZXJjZW50YWdlJztcbmNvbnN0IFJFUE9SVElOR19EQVRFID0gJ3JlcG9ydGluZ19kYXRlJztcbmNvbnN0IFJFQ0lQSUVOVF9ST0xFID0gJ3JlY2lwaWVudF9yb2xlJztcbmNvbnN0IFJFQ0lQSUVOVF9PUkdBTklaQVRJT04gPSAncmVjaXBpZW50X29yZ2FuaXphdGlvbic7XG5jb25zdCBURU1QT1JBTF9JRCA9ICdfdGVtcG9yYWxfaWQnO1xuY29uc3QgTUlOSVNUUllfQ09ERSA9ICdtaW5pc3RyeV9jb2RlJztcbmNvbnN0IFBST0pFQ1RfQ09ERSA9ICdwcm9qZWN0X2NvZGUnO1xuY29uc3QgRlkgPSAnZnknO1xuY29uc3QgSU5ESVJFQ1RfT05fQlVER0VUID0gJ2luZGlyZWN0X29uX2J1ZGdldCc7XG5jb25zdCBJTVBMRU1FTlRBVElPTl9MRVZFTFNfRVhUUkFfSU5GTyA9ICdpbXBsZW1lbnRhdGlvbi1sZXZlbHMnO1xuY29uc3QgSU1QTEVNRU5UQVRJT05fTE9DQVRJT05fRVhUUkFfSU5GTyA9ICdpbXBsZW1lbnRhdGlvbl9sb2NhdGlvbl9uYW1lJztcbmNvbnN0IERPTk9SX0NPTlRBQ1QgPSAnZG9ub3JfY29udGFjdF9pbmZvcm1hdGlvbic7XG5jb25zdCBQUk9KRUNUX0NPT1JESU5BVE9SX0NPTlRBQ1QgPSAncHJvamVjdF9jb29yZGluYXRvcl9jb250YWN0X2luZm9ybWF0aW9uJztcbmNvbnN0IFNFQ1RPUl9NSU5JU1RSWV9DT05UQUNUID0gJ3NlY3Rvcl9taW5pc3RyeV9jb250YWN0X2luZm9ybWF0aW9uJztcbmNvbnN0IE1PRkVEX0NPTlRBQ1QgPSAnbW9mZWRfY29udGFjdF9pbmZvcm1hdGlvbic7XG5jb25zdCBJTVBMRU1FTlRJTkdfRVhFQ1VUSU5HX0FHRU5DWV9DT05UQUNUID0gJ2ltcGxlbWVudGluZy9leGVjdXRpbmdfYWdlbmN5X2NvbnRhY3RfaW5mb3JtYXRpb24nO1xuY29uc3QgQ09OVEFDVCA9ICdjb250YWN0JztcbmNvbnN0IE9SR0FOSVpBVElPTl9HUk9VUCA9ICdvcmdhbml6YXRpb25fZ3JvdXAnO1xuY29uc3QgRklYRURfRVhDSEFOR0VfUkFURSA9ICdmaXhlZF9leGNoYW5nZV9yYXRlJztcbmNvbnN0IFBSSU1BUllfQ09OVEFDVCA9ICdtYXJrX2FzX3ByaW1hcnknO1xuY29uc3QgQUNUSVZJVFlfRE9DVU1FTlRTID0gJ2FjdGl2aXR5X2RvY3VtZW50cyc7XG5jb25zdCBET0NVTUVOVF9UWVBFID0gJ2RvY3VtZW50X3R5cGUnO1xuY29uc3QgSVNPMiA9ICdpc28yJztcbmNvbnN0IE1URUZfUFJPSkVDVElPTlMgPSAnbXRlZl9wcm9qZWN0aW9ucyc7XG5jb25zdCBQUk9KRUNUSU9OID0gJ3Byb2plY3Rpb24nO1xuY29uc3QgUElQRUxJTkUgPSAncGlwZWxpbmUnO1xuY29uc3QgUFJPSkVDVElPTl9EQVRFID0gJ3Byb2plY3Rpb25fZGF0ZSc7XG5cbi8vIEFjdGl2aXR5IGxhYmVscyAodXN1YWxseSB0aG9zZSB0aGF0IGRvbid0IGNvbWUgYXMgcGFydCBvZiBGaWVsZHMgRGVmIEVQKVxuY29uc3QgU0FNRV9BU19QUk9QT1NFRF9TVEFSVF9EQVRFX0xBQkVMID0gJ1NhbWUgYXMgUHJvcG9zZWQgU3RhcnQgRGF0ZSc7XG5jb25zdCBTQU1FX0FTX1BST1BPU0VEX0FQUFJPVkFMX0RBVEVfTEFCRUwgPSAnU2FtZSBhcyBQcm9wb3NlZCBBcHByb3ZhbCBEYXRlJztcblxuLy8gQWN0aXZpdHkgdmFsaWRhdGlvbiBydWxlc1xuY29uc3QgREVQRU5ERU5DWV9JTVBMRU1FTlRBVElPTl9MRVZFTF9QUkVTRU5UID0gJ2ltcGxlbWVudGF0aW9uX2xldmVsX3ByZXNlbnQnO1xuY29uc3QgREVQRU5ERU5DWV9JTVBMRU1FTlRBVElPTl9MRVZFTF9WQUxJRCA9ICdpbXBsZW1lbnRhdGlvbl9sZXZlbF92YWxpZCc7XG5jb25zdCBERVBFTkRFTkNZX0lNUExFTUVOVEFUSU9OX0xPQ0FUSU9OX1BSRVNFTlQgPSAnaW1wbGVtZW50YXRpb25fbG9jYXRpb25fcHJlc2VudCc7XG5jb25zdCBERVBFTkRFTkNZX0lNUExFTUVOVEFUSU9OX0xPQ0FUSU9OX1ZBTElEID0gJ2ltcGxlbWVudGF0aW9uX2xvY2F0aW9uX3ZhbGlkJztcbmNvbnN0IERFUEVOREVOQ1lfUFJPSkVDVF9DT0RFX09OX0JVREdFVCA9ICdwcm9qZWN0X2NvZGVfb25fYnVkZ2V0JztcbmNvbnN0IERFUEVOREVOQ1lfT05fQlVER0VUID0gJ29uX2J1ZGdldCc7XG5jb25zdCBERVBFTkRFTkNZX1RSQU5TQUNUSU9OX1BSRVNFTlQgPSAndHJhbnNhY3Rpb25fcHJlc2VudCc7XG5jb25zdCBERVBFTkRFTkNZX0NPTVBPTkVOVF9GVU5ESU5HX09SR19WQUxJRCA9ICdvcmdhbml6YXRpb25fcHJlc2VudCc7XG5cbi8qKiBJRHMgZm9yIEFQIHNlY3Rpb25zICoqL1xuY29uc3QgQVBfU0VDVElPTl9JRFMgPVxuICBbeyBrZXk6ICdBUElkZW50aWZpY2F0aW9uJywgaGFzaDogJyNBUElkZW50aWZpY2F0aW9uJywgdmFsdWU6ICdJZGVudGlmaWNhdGlvbicsIGZtUGF0aDogRk1DLkFDVElWSVRZX0lERU5USUZJQ0FUSU9OIH0sXG4gICAgeyBrZXk6ICdBUEludGVybmFsSWRzJywgaGFzaDogJyNBUEludGVybmFsSWRzJywgdmFsdWU6ICdBZ2VuY3kgSW50ZXJuYWwgSURzJywgc2VjdGlvblBhdGg6IEFDVElWSVRZX0lOVEVSTkFMX0lEUyB9LFxuICAgIHsga2V5OiAnQVBQbGFubmluZycsIGhhc2g6ICcjQVBQbGFubmluZycsIHZhbHVlOiAnUGxhbm5pbmcnLCBmbVBhdGg6IEZNQy5BQ1RJVklUWV9QTEFOTklORyB9LFxuICAgIHsga2V5OiAnQVBMb2NhdGlvbicsIGhhc2g6ICcjQVBMb2NhdGlvbicsIHZhbHVlOiAnTG9jYXRpb24nLCBzZWN0aW9uUGF0aDogTE9DQVRJT05TIH0sXG4gICAgeyBrZXk6ICdBUFByb2dyYW0nLCBoYXNoOiAnI0FQUHJvZ3JhbScsIHZhbHVlOiAnUHJvZ3JhbScsIGZtUGF0aDogRk1DLkFDVElWSVRZX1BST0dSQU0gfSxcbiAgICB7IGtleTogJ0FQU2VjdG9yJywgaGFzaDogJyNBUFNlY3RvcicsIHZhbHVlOiAnU2VjdG9ycycsIGZtUGF0aDogRk1DLkFDVElWSVRZX1NFQ1RPUlMgfSxcbiAgICB7XG4gICAgICBrZXk6ICdBUEZ1bmRpbmdTb3VyY2VzJyxcbiAgICAgIGhhc2g6ICcjQVBGdW5kaW5nU291cmNlcycsXG4gICAgICB2YWx1ZTogJ0Z1bmRpbmcgU291cmNlcycsXG4gICAgICBzZWN0aW9uUGF0aDogVE9UQUxfTlVNQkVSX09GX0ZVTkRJTkdfU09VUkNFU1xuICAgIH0sXG4gICAgeyBrZXk6ICdBUEZ1bmRpbmcnLCBoYXNoOiAnI0FQRnVuZGluZycsIHZhbHVlOiAnRnVuZGluZycsIHNlY3Rpb25QYXRoOiBGVU5ESU5HUyB9LFxuICAgIHtcbiAgICAgIGtleTogJ0FQUmVsYXRlZE9yZ2FuaXphdGlvbnMnLFxuICAgICAgaGFzaDogJyNBUFJlbGF0ZWRPcmdhbml6YXRpb25zJyxcbiAgICAgIHZhbHVlOiAnUmVsYXRlZCBPcmdhbml6YXRpb25zJyxcbiAgICAgIGZtUGF0aDogRk1DLkFDVElWSVRZX09SR0FOSVpBVElPTlNcbiAgICB9LFxuICAgIHsga2V5OiAnQVBJc3N1ZXMnLCBoYXNoOiAnI0FQSXNzdWVzJywgdmFsdWU6ICdJc3N1ZXMnLCBzZWN0aW9uUGF0aDogSVNTVUVTIH0sXG4gICAgeyBrZXk6ICdBUENvbnRhY3QnLCBoYXNoOiAnI0FQQ29udGFjdCcsIHZhbHVlOiAnQ29udGFjdCBJbmZvcm1hdGlvbicsIGZtUGF0aDogRk1DLkFDVElWSVRZX0NPTlRBQ1QgfSxcbiAgICB7IGtleTogJ0FQU3RydWN0dXJlcycsIGhhc2g6ICcjQVBTdHJ1Y3R1cmVzJywgdmFsdWU6ICdTdHJ1Y3R1cmVzJywgc2VjdGlvblBhdGg6IFNUUlVDVFVSRVMgfSxcbiAgICB7IGtleTogJ0FQRG9jdW1lbnQnLCBoYXNoOiAnI0FQRG9jdW1lbnQnLCB2YWx1ZTogJ1JlbGF0ZWQgRG9jdW1lbnRzJywgc2VjdGlvblBhdGg6IEFDVElWSVRZX0RPQ1VNRU5UUyB9LFxuICBdO1xuXG4vKiogQ29sdW1uIGNvdW50cyBmb3IgZWFjaCBzZWN0aW9uICoqL1xuY29uc3QgQUNUSVZJVFlfSU5URVJOQUxfSURTX0NPTFMgPSAzO1xuY29uc3QgQUNUSVZJVFlfUExBTk5JTkdfQ09MUyA9IDI7XG5jb25zdCBBQ1RJVklUWV9MT0NBVElPTl9DT0xTID0gMztcbmNvbnN0IEFDVElWSVRZX0ZVTkRJTkdfQ09MUyA9IDI7XG5jb25zdCBBQ1RJVklUWV9DT05UQUNUX0NPTFMgPSAyO1xuY29uc3QgQVBfRlVORElOR1NfVEFCTEVfQ09MUyA9IDQ7XG5cbmNvbnN0IE1VTFRJX1NFTEVDVF9NSU5fU0laRSA9IDg7XG5jb25zdCBNVUxUSV9TRUxFQ1RfTUFYX1NJWkUgPSA4O1xuXG4vLyBUT0RPOiBtb3ZlIHRoZXNlIGZ1bmN0aW9ucyB0byBhbiBVdGlscyBjbGFzcy5cbmNvbnN0IHRvRmllbGROYW1lcyA9IGZ1bmN0aW9uIChsaXN0T2ZOYW1lcykge1xuICByZXR1cm4gbGlzdE9mTmFtZXMubWFwKG5hbWUgPT4gdG9GaWVsZE5hbWUobmFtZSkpO1xufTtcblxuLyoqXG4gKiBDb252ZXJ0cyB0aGUgb3JpZ2luYWwgbm9uLXRyYW5zbGF0ZWQgbGFiZWwgdG8gaW50ZXJuYWwgZmllbGQgbmFtZVxuICogQHBhcmFtIG5hbWVcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xuY29uc3QgdG9GaWVsZE5hbWUgPSBmdW5jdGlvbiAobmFtZTogc3RyaW5nKSB7XG4gIHJldHVybiBuYW1lLnRvTG93ZXJDYXNlKCkucmVwbGFjZSgnICcsICdfJyk7XG59O1xuXG4vKipcbiAqIENvbnZlcnRzIHRoZSBpbnRlcm5hbCBmaWVsZCBuYW1lIHRvIHRoZSBPcmlnaW5hbCBub24tdHJhbnNsYXRlZCBsYWJlbFxuICogQHBhcmFtIGZpZWxkTmFtZVxuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5jb25zdCB0b09yaWdpbmFsTGFiZWwgPSBmdW5jdGlvbiAoZmllbGROYW1lOiBzdHJpbmcpIHtcbiAgcmV0dXJuIGNhcGl0YWxpemUoZmllbGROYW1lLnJlcGxhY2UoJ18nLCAnICcpKTtcbn07XG5cbi8vIFRPRE86IG1vdmUgYWdhaW4gaW5zaWRlIGEgc2hhcmVkIFV0aWxzIGNsYXNzIGJlY2F1c2UgdGhpcyBpcyBhIGNvcHkgZnJvbSBVdGlscy5qc1xuY29uc3QgY2FwaXRhbGl6ZSA9IGZ1bmN0aW9uICh0ZXh0OiBzdHJpbmcpIHtcbiAgcmV0dXJuIHRleHQucmVwbGFjZSgvKD86XnxcXHMpXFxTL2csIGNoYXIgPT4gY2hhci50b1VwcGVyQ2FzZSgpKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE9iamVjdC5mcmVlemUoe1xuICBBQ1RJVklUWV9CVURHRVQsXG4gIEFDVElWSVRZX1NUQVRVUyxcbiAgU1RBVFVTX1JFQVNPTixcbiAgRklOQU5DSUFMX0lOU1RSVU1FTlQsXG4gIFRZUEVfT0ZfSU1QTEVNRU5UQVRJT04sXG4gIE9CSkVDVElWRSxcbiAgUkVTVUxUUyxcbiAgQlVER0VUX0NPREVfUFJPSkVDVF9JRCxcbiAgQUNUVUFMX0FQUFJPVkFMX0RBVEUsXG4gIEZVTkRJTkdTLFxuICBGVU5ESU5HX0RPTk9SX09SR19JRCxcbiAgSVNfRFJBRlQsXG4gIE9SR19ST0xFX09SR19JRCxcbiAgQURESVRJT05BTF9JTkZPLFxuICBQUklNQVJZX1NFQ1RPUlMsXG4gIFNFQ09OREFSWV9TRUNUT1JTLFxuICBURVJUSUFSWV9TRUNUT1JTLFxuICBUQUdfU0VDVE9SUyxcbiAgU0VDVE9SLFxuICBTRUNUT1JfUEVSQ0VOVEFHRSxcbiAgRklOQU5DSU5HX0lOU1RSVU1FTlQsXG4gIE1PREFMSVRJRVMsXG4gIExJTkVfTUlOSVNUUllfUkFOSyxcbiAgR09WRVJOTUVOVF9BR1JFRU1FTlRfTlVNQkVSLFxuICBGVU5ESU5HX1NUQVRVUyxcbiAgTE9DQVRJT05TLFxuICBMT0NBVElPTixcbiAgTE9DQVRJT05fUEVSQ0VOVEFHRSxcbiAgSU1QTEVNRU5UQVRJT05fTE9DQVRJT04sXG4gIElNUExFTUVOVEFUSU9OX0xFVkVMLFxuICBBUFBST1ZBTF9TVEFUVVMsXG4gIEFQUFJPVkVEX0JZLFxuICBBUFBST1ZBTF9EQVRFLFxuICBUWVBFX09GX0FTU0lTVEFOQ0UsXG4gIEVYUEVORElUVVJFX0NMQVNTLFxuICBGVU5ESU5HX0RFVEFJTFMsXG4gIE1PREVfT0ZfUEFZTUVOVCxcbiAgRlVORElOR19DTEFTU0lGSUNBVElPTl9EQVRFLFxuICBBR1JFRU1FTlQsXG4gIERPTk9SX09CSkVDVElWRSxcbiAgQ09ORElUSU9OUyxcbiAgQUdSRUVNRU5UX0NPREUsXG4gIEFHUkVFTUVOVF9USVRMRSxcbiAgUFJPSkVDVF9DQVRFR09SWSxcbiAgUFJPSkVDVF9JTVBMRU1FTlRJTkdfVU5JVCxcbiAgT1JHQU5JWkFUSU9OLFxuICBQRVJDRU5UQUdFLFxuICBBTVBfT1JHQU5JWkFUSU9OX1JPTEVfSUQsXG4gIFJPTEUsXG4gIEVYRUNVVElOR19BR0VOQ1ksXG4gIENPTlRSQUNUSU5HX0FHRU5DWSxcbiAgQkVORUZJQ0lBUllfQUdFTkNZLFxuICBJTVBMRU1FTlRJTkdfQUdFTkNZLFxuICBSRVNQT05TSUJMRV9PUkdBTklaQVRJT04sXG4gIERPTk9SX09SR0FOSVpBVElPTixcbiAgUkVHSU9OQUxfR1JPVVAsXG4gIFNFQ1RPUl9HUk9VUCxcbiAgQlVER0VUUyxcbiAgQlVER0VUX0NPREUsXG4gIEJVREdFVF9PUkdBTklaQVRJT05fQ09ERSxcbiAgQVJDSElWRUQsXG4gIFRSQU5TQUNUSU9OX0RBVEUsXG4gIFRSQU5TQUNUSU9OX1RZUEUsXG4gIENPTU1JVE1FTlRTLFxuICBESVNCVVJTRU1FTlRTLFxuICBFWFBFTkRJVFVSRVMsXG4gIEVTVElNQVRFRF9ESVNCVVJTRU1FTlRTLFxuICBUUkFOU0FDVElPTl9BTU9VTlQsXG4gIEFESlVTVE1FTlRfVFlQRSxcbiAgQUNUVUFMX1NUQVJUX0RBVEUsXG4gIFBST1BPU0VEX1NUQVJUX0RBVEUsXG4gIEFDVFVBTF9DT01QTEVUSU9OX0RBVEUsXG4gIENPTlRSQUNUSU5HX0RBVEUsXG4gIERJU0JVUlNFTUVOVF9EQVRFLFxuICBQUk9QT1NFRF9BUFBST1ZBTF9EQVRFLFxuICBPUklHSU5BTF9DT01QTEVUSU9OX0RBVEUsXG4gIFBST1BPU0VEX0NPTVBMRVRJT05fREFURSxcbiAgRklOQUxfREFURV9GT1JfRElTQlVSU0VNRU5UUyxcbiAgRklOQUxfREFURV9GT1JfQ09OVFJBQ1RJTkcsXG4gIEVGRkVDVElWRV9GVU5ESU5HX0RBVEUsXG4gIEZVTkRJTkdfQ0xPU0lOR19EQVRFLFxuICBSQVRJRklDQVRJT05fREFURSxcbiAgTUFUVVJJVFksXG4gIExBU1RfQVVESVRfREFURSxcbiAgU0lHTkFUVVJFX0RBVEUsXG4gIEhVTUFOSVRBUklBTl9BSUQsXG4gIERJU0FTVEVSX1JFU1BPTlNFLFxuICBQUk9HUkFNLFxuICBQUk9HUkFNX1BFUkNFTlRBR0UsXG4gIFBST0dSQU1fU0VUVElOR1MsXG4gIE5BVElPTkFMX1BMQU5fT0JKRUNUSVZFLFxuICBQUklNQVJZX1BST0dSQU1TLFxuICBTRUNPTkRBUllfUFJPR1JBTVMsXG4gIFRFUlRJQVJfUFJPR1JBTVMsXG4gIEdPVkVSTk1FTlRfQVBQUk9WQUxfUFJPQ0VEVVJFUyxcbiAgSk9JTlRfQ1JJVEVSSUEsXG4gIFRFQU0sXG4gIFJFSkVDVEVEX0lELFxuICBJTlRFUk5BTF9JRCxcbiAgQU1QX0lELFxuICBQUk9KRUNUX1RJVExFLFxuICBERVNDUklQVElPTixcbiAgTU9ESUZJRURfQlksXG4gIE1PRElGSUVEX09OLFxuICBDUkVBVEVEX0JZLFxuICBDUkVBVEVEX09OLFxuICBMQVNUX0lNUE9SVEVEX0JZLFxuICBDTElFTlRfQ0hBTkdFX0lELFxuICBDTElFTlRfQ1JFQVRFRF9PTixcbiAgQ0xJRU5UX1VQREFURURfT04sXG4gIElTX1BVU0hFRCxcbiAgQUNUSVZJVFlfR1JPVVAsXG4gIFZFUlNJT04sXG4gIFBST0pFQ1RfQ09NTUVOVFMsXG4gIExFU1NPTlNfTEVBUk5FRCxcbiAgUFJPSkVDVF9JTVBBQ1QsXG4gIEFDVElWSVRZX1NVTU1BUlksXG4gIENPTkRJVElPTkFMSVRJRVMsXG4gIFBST0pFQ1RfTUFOQUdFTUVOVCxcbiAgQV9DX0NIQVBURVIsXG4gIENSSVNfTlVNQkVSLFxuICBJQVRJX0lERU5USUZJRVIsXG4gIEFDVElWSVRZX0lOVEVSTkFMX0lEUyxcbiAgSElFUkFSQ0hJQ0FMX1ZBTFVFLFxuICBISUVSQVJDSElDQUxfVkFMVUVfUEFSVFMsXG4gIEhJRVJBUkNISUNBTF9WQUxVRV9ERVBUSCxcbiAgUFBDX0FNT1VOVCxcbiAgUlBDX0FNT1VOVCxcbiAgUFBDX0FOTlVBTF9CVURHRVRTLFxuICBBTU9VTlQsXG4gIENVUlJFTkNZLFxuICBGVU5ESU5HX0RBVEUsXG4gIENPTVBPTkVOVFMsXG4gIFRPVEFMX05VTUJFUl9PRl9GVU5ESU5HX1NPVVJDRVMsXG4gIFNPVVJDRV9ST0xFLFxuICBBTVBfRlVORElOR19JRCxcbiAgSVNTVUVTLFxuICBJU1NVRV9EQVRFLFxuICBJU1NVRV9OQU1FLFxuICBNRUFTVVJFUyxcbiAgTUVBU1VSRV9OQU1FLFxuICBNRUFTVVJFX0RBVEUsXG4gIEFDVE9SUyxcbiAgQUNUT1JfTkFNRSxcbiAgU1RSVUNUVVJFUyxcbiAgU1RSVUNUVVJFU19USVRMRSxcbiAgU1RSVUNUVVJFU19ERVNDUklQVElPTixcbiAgU1RSVUNUVVJFU19MQVRJVFVERSxcbiAgU1RSVUNUVVJFU19MT05HSVRVREUsXG4gIFNUUlVDVFVSRVNfQ09MT1IsXG4gIFNUUlVDVFVSRVNfTEFULFxuICBTVFJVQ1RVUkVTX0xORyxcbiAgU1RSVUNUVVJFU19TSEFQRSxcbiAgU1RSVUNUVVJFU19QT0lOVCxcbiAgU1RSVUNUVVJFU19QT0xZR09OLFxuICBTVFJVQ1RVUkVTX1BPTFlMSU5FLFxuICBTVFJVQ1RVUkVTX0NPT1JESU5BVEVTLFxuICBDT01QT05FTlRfVFlQRSxcbiAgQ09NUE9ORU5UX1RJVExFLFxuICBDT01QT05FTlRfRlVORElORyxcbiAgQ09NUE9ORU5UX0RFU0NSSVBUSU9OLFxuICBDT01QT05FTlRfT1JHQU5JWkFUSU9OLFxuICBGVU5ESU5HX0FNT1VOVF9JRCxcbiAgRVhUUkFfSU5GTyxcbiAgVkFMVUUsXG4gIEFDUk9OWU0sXG4gIFRZUEVfT0ZfQ09PUEVSQVRJT04sXG4gIEFOTlVBTF9QUk9KRUNUX0JVREdFVF9JRCxcbiAgVFlQRSxcbiAgWUVBUixcbiAgR1JPVVBfVkVSU0lPTkVEX0ZVTkRJTkcsXG4gIEFDVElWRV9MSVNULFxuICBBQ1RJVkUsXG4gIERFTEVHQVRFRF9DT09QRVJBVElPTixcbiAgREVMRUdBVEVEX1BBUlRORVIsXG4gIEZJTkFOQ0lOR19JRCxcbiAgRElTQlVSU0VNRU5UX09SREVSX0lELFxuICBQTEVER0UsXG4gIENBUElUQUxfU1BFTkRJTkdfUEVSQ0VOVEFHRSxcbiAgUkVQT1JUSU5HX0RBVEUsXG4gIFJFQ0lQSUVOVF9ST0xFLFxuICBSRUNJUElFTlRfT1JHQU5JWkFUSU9OLFxuICBURU1QT1JBTF9JRCxcbiAgTUlOSVNUUllfQ09ERSxcbiAgUFJPSkVDVF9DT0RFLFxuICBGWSxcbiAgSU5ESVJFQ1RfT05fQlVER0VULFxuICBJTVBMRU1FTlRBVElPTl9MRVZFTFNfRVhUUkFfSU5GTyxcbiAgSU1QTEVNRU5UQVRJT05fTE9DQVRJT05fRVhUUkFfSU5GTyxcbiAgRE9OT1JfQ09OVEFDVCxcbiAgUFJPSkVDVF9DT09SRElOQVRPUl9DT05UQUNULFxuICBTRUNUT1JfTUlOSVNUUllfQ09OVEFDVCxcbiAgTU9GRURfQ09OVEFDVCxcbiAgSU1QTEVNRU5USU5HX0VYRUNVVElOR19BR0VOQ1lfQ09OVEFDVCxcbiAgQ09OVEFDVCxcbiAgT1JHQU5JWkFUSU9OX0dST1VQLFxuICBGSVhFRF9FWENIQU5HRV9SQVRFLFxuICBQUklNQVJZX0NPTlRBQ1QsXG4gIEFDVElWSVRZX0RPQ1VNRU5UUyxcbiAgRE9DVU1FTlRfVFlQRSxcbiAgSVNPMixcbiAgTVRFRl9QUk9KRUNUSU9OUyxcbiAgUFJPSkVDVElPTixcbiAgUElQRUxJTkUsXG4gIFBST0pFQ1RJT05fREFURSxcbiAgU0FNRV9BU19QUk9QT1NFRF9TVEFSVF9EQVRFX0xBQkVMLFxuICBTQU1FX0FTX1BST1BPU0VEX0FQUFJPVkFMX0RBVEVfTEFCRUwsXG4gIERFUEVOREVOQ1lfSU1QTEVNRU5UQVRJT05fTEVWRUxfUFJFU0VOVCxcbiAgREVQRU5ERU5DWV9JTVBMRU1FTlRBVElPTl9MRVZFTF9WQUxJRCxcbiAgREVQRU5ERU5DWV9JTVBMRU1FTlRBVElPTl9MT0NBVElPTl9QUkVTRU5ULFxuICBERVBFTkRFTkNZX0lNUExFTUVOVEFUSU9OX0xPQ0FUSU9OX1ZBTElELFxuICBERVBFTkRFTkNZX1BST0pFQ1RfQ09ERV9PTl9CVURHRVQsXG4gIERFUEVOREVOQ1lfT05fQlVER0VULFxuICBERVBFTkRFTkNZX1RSQU5TQUNUSU9OX1BSRVNFTlQsXG4gIERFUEVOREVOQ1lfQ09NUE9ORU5UX0ZVTkRJTkdfT1JHX1ZBTElELFxuICBBUF9TRUNUSU9OX0lEUyxcbiAgQUNUSVZJVFlfSU5URVJOQUxfSURTX0NPTFMsXG4gIEFDVElWSVRZX1BMQU5OSU5HX0NPTFMsXG4gIEFDVElWSVRZX0xPQ0FUSU9OX0NPTFMsXG4gIEFDVElWSVRZX0ZVTkRJTkdfQ09MUyxcbiAgQUNUSVZJVFlfQ09OVEFDVF9DT0xTLFxuICBBUF9GVU5ESU5HU19UQUJMRV9DT0xTLFxuICBNVUxUSV9TRUxFQ1RfTUlOX1NJWkUsXG4gIE1VTFRJX1NFTEVDVF9NQVhfU0laRSxcbiAgdG9GaWVsZE5hbWVzLFxuICB0b0ZpZWxkTmFtZSxcbiAgdG9PcmlnaW5hbExhYmVsLFxuICBjYXBpdGFsaXplXG59KTtcbiIsImNvbnN0IE5PVElGSUNBVElPTl9PUklHSU5fQVBJX1NFQ1VSSVRZID0gJ05PVElGSUNBVElPTl9PUklHSU5fQVBJX1NFQ1VSSVRZJztcbmNvbnN0IE5PVElGSUNBVElPTl9PUklHSU5fQVBJX05FVFdPUksgPSAnTk9USUZJQ0FUSU9OX09SSUdJTl9BUElfTkVUV09SSyc7XG5jb25zdCBOT1RJRklDQVRJT05fT1JJR0lOX0FQSV9TWU5DVVAgPSAnTk9USUZJQ0FUSU9OX09SSUdJTl9BUElfU1lOQ1VQJztcbmNvbnN0IE5PVElGSUNBVElPTl9PUklHSU5fQVBJX0dFTkVSQUwgPSAnTk9USUZJQ0FUSU9OX09SSUdJTl9BUElfR0VORVJBTCc7XG5jb25zdCBOT1RJRklDQVRJT05fT1JJR0lOX0RBVEFCQVNFID0gJ05PVElGSUNBVElPTl9PUklHSU5fREFUQUJBU0UnO1xuY29uc3QgTk9USUZJQ0FUSU9OX09SSUdJTl9BVVRIRU5USUNBVElPTiA9ICdOT1RJRklDQVRJT05fT1JJR0lOX0FVVEhFTlRJQ0FUSU9OJztcbmNvbnN0IE5PVElGSUNBVElPTl9PUklHSU5fV09SS1NQQUNFX0ZJTFRFUiA9ICdOT1RJRklDQVRJT05fT1JJR0lOX1dPUktTUEFDRV9GSUxURVInO1xuY29uc3QgTk9USUZJQ0FUSU9OX09SSUdJTl9XT1JLU1BBQ0UgPSAnTk9USUZJQ0FUSU9OX09SSUdJTl9XT1JLU1BBQ0UnO1xuY29uc3QgTk9USUZJQ0FUSU9OX09SSUdJTl9TWU5DVVBfUFJPQ0VTUyA9ICdOT1RJRklDQVRJT05fT1JJR0lOX1NZTkNVUF9QUk9DRVNTJztcbmNvbnN0IE5PVElGSUNBVElPTl9PUklHSU5fQ1VSUkVOQ1lfTUFOQUdFUiA9ICdOT1RJRklDQVRJT05fT1JJR0lOX0NVUlJFTkNZX01BTkFHRVInO1xuY29uc3QgTk9USUZJQ0FUSU9OX09SSUdJTl9EQVRFUyA9ICdOT1RJRklDQVRJT05fT1JJR0lOX0RBVEVTJztcbmNvbnN0IE5PVElGSUNBVElPTl9PUklHSU5fQUNUSVZJVFkgPSAnTk9USUZJQ0FUSU9OX09SSUdJTl9BQ1RJVklUWSc7XG5jb25zdCBOT1RJRklDQVRJT05fT1JJR0lOX1JFU09VUkNFID0gJ05PVElGSUNBVElPTl9PUklHSU5fUkVTT1VSQ0UnO1xuY29uc3QgTk9USUZJQ0FUSU9OX09SSUdJTl9JMThORVhUID0gJ05PVElGSUNBVElPTl9PUklHSU5fSTE4TkVYVCc7XG5jb25zdCBOT1RJRklDQVRJT05fT1JJR0lOX1VQREFURV9DSEVDSyA9ICdOT1RJRklDQVRJT05fT1JJR0lOX1VQREFURV9DSEVDSyc7XG5jb25zdCBOT1RJRklDQVRJT05fT1JJR0lOX1VQREFURSA9ICdOT1RJRklDQVRJT05fT1JJR0lOX1VQREFURSc7XG5jb25zdCBOT1RJRklDQVRJT05fT1JJR0lOX1NFVFVQID0gJ05PVElGSUNBVElPTl9PUklHSU5fU0VUVVAnO1xuY29uc3QgTk9USUZJQ0FUSU9OX09SSUdJTl9TRVRUSU5HUyA9ICdOT1RJRklDQVRJT05fT1JJR0lOX1NFVFRJTkdTJztcblxuY29uc3QgTk9USUZJQ0FUSU9OX1NFVkVSSVRZX1dBUk5JTkcgPSAnTk9USUZJQ0FUSU9OX1NFVkVSSVRZX1dBUk5JTkcnO1xuY29uc3QgTk9USUZJQ0FUSU9OX1NFVkVSSVRZX0lORk8gPSAnTk9USUZJQ0FUSU9OX1NFVkVSSVRZX0lORk8nO1xuY29uc3QgTk9USUZJQ0FUSU9OX1NFVkVSSVRZX0VSUk9SID0gJ05PVElGSUNBVElPTl9TRVZFUklUWV9FUlJPUic7XG5cbmNvbnN0IE5PVElGSUNBVElPTl9FUlJPUl9MRVZFTF9NSU5PUiA9ICdOT1RJRklDQVRJT05fRVJST1JfTEVWRUxfTUlOT1InO1xuY29uc3QgTk9USUZJQ0FUSU9OX0VSUk9SX0xFVkVMX0JMT0NLRVIgPSAnTk9USUZJQ0FUSU9OX0VSUk9SX0xFVkVMX0JMT0NLRVInO1xuXG5jb25zdCBOT1RJRklDQVRJT05fT1JJR0lOX1dST05HX01FVEhPRF9VU0FHRSA9ICdOT1RJRklDQVRJT05fT1JJR0lOX1dST05HX01FVEhPRF9VU0FHRSc7XG5cbmNvbnN0IEVSUk9SX0NPREVfTk9fQ09OTkVDVElWSVRZID0gJ05PX0NPTk5FQ1RJVklUWSc7XG5jb25zdCBFUlJPUl9DT0RFX0FDQ0VTU19ERU5JRUQgPSAnQUNDRVNTX0RFTklFRCc7XG5cblxuY29uc3QgTVNHX0lOVkFMSURfVVJMID0gJ2ludmFsaWRVcmwnO1xuY29uc3QgTVNHX1RJTUVPVVQgPSAndGltZW91dEVycm9yJztcbmNvbnN0IE1TR19VTktOT1dOX05FVFdPUktfRVJST1IgPSAndW5rbm93bk5ldHdvcmtFcnJvcic7XG5jb25zdCBNU0dfQU1QX1VOUkVBQ0hBQkxFID0gJ0FNUFVucmVhY2hhYmxlRXJyb3InO1xuY29uc3QgR0VORVJBTF9DT05ORUNUSU9OX0VSUk9SUyA9IFtNU0dfSU5WQUxJRF9VUkwsIE1TR19USU1FT1VULCBNU0dfVU5LTk9XTl9ORVRXT1JLX0VSUk9SLCBNU0dfQU1QX1VOUkVBQ0hBQkxFXTtcblxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuZnJlZXplKHtcbiAgTk9USUZJQ0FUSU9OX09SSUdJTl9BUElfU0VDVVJJVFksXG4gIE5PVElGSUNBVElPTl9PUklHSU5fQVBJX05FVFdPUkssXG4gIE5PVElGSUNBVElPTl9PUklHSU5fQVBJX1NZTkNVUCxcbiAgTk9USUZJQ0FUSU9OX09SSUdJTl9BUElfR0VORVJBTCxcbiAgTk9USUZJQ0FUSU9OX09SSUdJTl9EQVRBQkFTRSxcbiAgTk9USUZJQ0FUSU9OX09SSUdJTl9BVVRIRU5USUNBVElPTixcbiAgTk9USUZJQ0FUSU9OX09SSUdJTl9XT1JLU1BBQ0VfRklMVEVSLFxuICBOT1RJRklDQVRJT05fT1JJR0lOX1dPUktTUEFDRSxcbiAgTk9USUZJQ0FUSU9OX09SSUdJTl9TWU5DVVBfUFJPQ0VTUyxcbiAgTk9USUZJQ0FUSU9OX09SSUdJTl9DVVJSRU5DWV9NQU5BR0VSLFxuICBOT1RJRklDQVRJT05fT1JJR0lOX0RBVEVTLFxuICBOT1RJRklDQVRJT05fT1JJR0lOX0FDVElWSVRZLFxuICBOT1RJRklDQVRJT05fT1JJR0lOX1JFU09VUkNFLFxuICBOT1RJRklDQVRJT05fT1JJR0lOX0kxOE5FWFQsXG4gIE5PVElGSUNBVElPTl9PUklHSU5fVVBEQVRFX0NIRUNLLFxuICBOT1RJRklDQVRJT05fT1JJR0lOX1VQREFURSxcbiAgTk9USUZJQ0FUSU9OX09SSUdJTl9TRVRVUCxcbiAgTk9USUZJQ0FUSU9OX09SSUdJTl9TRVRUSU5HUyxcblxuICBOT1RJRklDQVRJT05fU0VWRVJJVFlfV0FSTklORyxcbiAgTk9USUZJQ0FUSU9OX1NFVkVSSVRZX0lORk8sXG4gIE5PVElGSUNBVElPTl9TRVZFUklUWV9FUlJPUixcblxuICBOT1RJRklDQVRJT05fRVJST1JfTEVWRUxfTUlOT1IsXG4gIE5PVElGSUNBVElPTl9FUlJPUl9MRVZFTF9CTE9DS0VSLFxuXG4gIE5PVElGSUNBVElPTl9PUklHSU5fV1JPTkdfTUVUSE9EX1VTQUdFLFxuXG4gIEVSUk9SX0NPREVfTk9fQ09OTkVDVElWSVRZLFxuICBFUlJPUl9DT0RFX0FDQ0VTU19ERU5JRUQsXG5cblxuICBNU0dfSU5WQUxJRF9VUkwsXG4gIE1TR19USU1FT1VULFxuICBNU0dfVU5LTk9XTl9ORVRXT1JLX0VSUk9SLFxuICBNU0dfQU1QX1VOUkVBQ0hBQkxFLFxuICBHRU5FUkFMX0NPTk5FQ1RJT05fRVJST1JTXG59KVxuO1xuIiwiLyoqXG4gKiBAYXV0aG9yIE5hZGVqZGEgTWFuZHJlc2N1XG4gKi9cblxuaW1wb3J0IEFjdGl2aXR5Q29uc3RhbnRzIGZyb20gJy4uL21vZHVsZXMvdXRpbC9BY3Rpdml0eUNvbnN0YW50cyc7XG5cbmNvbnN0IERPTk9SX09SR0FOSVpBVElPTiA9ICdEb25vciBPcmdhbml6YXRpb24nO1xuY29uc3QgUkVTUE9OU0lCTEVfT1JHQU5JWkFUSU9OID0gJ1Jlc3BvbnNpYmxlIE9yZ2FuaXphdGlvbic7XG5jb25zdCBFWEVDVVRJTkdfQUdFTkNZID0gJ0V4ZWN1dGluZyBBZ2VuY3knO1xuY29uc3QgSU1QTEVNRU5USU5HX0FHRU5DWSA9ICdJbXBsZW1lbnRpbmcgQWdlbmN5JztcbmNvbnN0IEJFTkVGSUNJQVJZX0FHRU5DWSA9ICdCZW5lZmljaWFyeSBBZ2VuY3knO1xuY29uc3QgQ09OVFJBQ1RJTkdfQUdFTkNZID0gJ0NvbnRyYWN0aW5nIEFnZW5jeSc7XG5jb25zdCBET05PUl9BR0VOQ1kgPSAnRG9ub3InO1xuY29uc3QgUkVHSU9OQUxfR1JPVVAgPSAnUmVnaW9uYWwgR3JvdXAnO1xuY29uc3QgU0VDVE9SX0dST1VQID0gJ1NlY3RvciBHcm91cCc7XG5cbmNvbnN0IE9SR19ST0xFX05BTUVTID0gW0RPTk9SX09SR0FOSVpBVElPTiwgUkVTUE9OU0lCTEVfT1JHQU5JWkFUSU9OLCBFWEVDVVRJTkdfQUdFTkNZLCBJTVBMRU1FTlRJTkdfQUdFTkNZLFxuICBCRU5FRklDSUFSWV9BR0VOQ1ksIENPTlRSQUNUSU5HX0FHRU5DWSwgUkVHSU9OQUxfR1JPVVAsIFNFQ1RPUl9HUk9VUF07XG5cbmNvbnN0IEFDVFVBTCA9ICdBY3R1YWwnO1xuY29uc3QgUExBTk5FRCA9ICdQbGFubmVkJztcbmNvbnN0IENPTU1JVE1FTlRTID0gJ0NvbW1pdG1lbnRzJztcbmNvbnN0IERJU0JVUlNFTUVOVFMgPSAnRGlzYnVyc2VtZW50cyc7XG5jb25zdCBFWFBFTkRJVFVSRVMgPSAnRXhwZW5kaXR1cmVzJztcbmNvbnN0IEFDVFVBTF9DT01NSVRNRU5UUyA9IGAke0FDVFVBTH0gJHtBY3Rpdml0eUNvbnN0YW50cy5DT01NSVRNRU5UU31gO1xuY29uc3QgQUNUVUFMX0RJU0JVUlNFTUVOVFMgPSBgJHtBQ1RVQUx9ICR7QWN0aXZpdHlDb25zdGFudHMuRElTQlVSU0VNRU5UU31gO1xuY29uc3QgQUNUVUFMX0VYUEVORElUVVJFUyA9IGAke0FDVFVBTH0gJHtBY3Rpdml0eUNvbnN0YW50cy5FWFBFTkRJVFVSRVN9YDtcbmNvbnN0IFBMQU5ORURfQ09NTUlUTUVOVFMgPSBgJHtQTEFOTkVEfSAke0FjdGl2aXR5Q29uc3RhbnRzLkNPTU1JVE1FTlRTfWA7XG5jb25zdCBQTEFOTkVEX0RJU0JVUlNFTUVOVFMgPSBgJHtQTEFOTkVEfSAke0FjdGl2aXR5Q29uc3RhbnRzLkRJU0JVUlNFTUVOVFN9YDtcbmNvbnN0IFBMQU5ORURfRVhQRU5ESVRVUkVTID0gYCR7UExBTk5FRH0gJHtBY3Rpdml0eUNvbnN0YW50cy5FWFBFTkRJVFVSRVN9YDtcbmNvbnN0IFVOQUxMT0NBVEVEX0RJU0JVUlNFTUVOVFMgPSAnVW5hbGxvY2F0ZWQgRGlzYnVyc2VtZW50cyc7XG5jb25zdCBERUxJVkVSWV9SQVRFID0gJ0RlbGl2ZXJ5IHJhdGUnO1xuY29uc3QgTVRFRl9QUk9KRUNUSU9OUyA9ICdNVEVGIFByb2plY3Rpb25zJztcblxuY29uc3QgQURKVVNUTUVOVF9UWVBFUyA9IFtBQ1RVQUwsIFBMQU5ORURdO1xuY29uc3QgQURKVVNUTUVOVF9UWVBFU19BUF9PUkRFUiA9IFtQTEFOTkVELCBBQ1RVQUxdO1xuXG5jb25zdCBORVdfQUNUSVZJVFlfSUQgPSAnMCc7XG5cbmNvbnN0IFBST1BPU0VEX1BST0pFQ1RfQ09TVCA9ICdwcGMnO1xuY29uc3QgUkVWSVNFRF9QUk9KRUNUX0NPU1QgPSAncnBjJztcblxuY29uc3QgQUNST05ZTV9ET05PUl9PUkdBTklaQVRJT04gPSAnRE4nO1xuY29uc3QgQUNST05ZTV9FWEVDVVRJTkdfQUdFTkNZID0gJ0VBJztcbmNvbnN0IEFDUk9OWU1fSU1QTEVNRU5USU5HX0FHRU5DWSA9ICdJQSc7XG5jb25zdCBBQ1JPTllNX0JFTkVGSUNJQVJZX0FHRU5DWSA9ICdCQSc7XG5jb25zdCBBQ1JPTllNX1JFU1BPTlNJQkxFX09SR0FOSVpBVElPTiA9ICdSTyc7XG5cbi8qKiBBcHByb3ZhbCBzdGF0dXMgdW50cmFuc2xhdGVkIHZhbHVlcyAqKi9cbmNvbnN0IEFQUFJPVkFMX1NUQVRVU19DUkVBVEVEID0gJ2NyZWF0ZWQnO1xuY29uc3QgQVBQUk9WQUxfU1RBVFVTX0FQUFJPVkVEID0gJ2FwcHJvdmVkJztcbmNvbnN0IEFQUFJPVkFMX1NUQVRVU19FRElURUQgPSAnZWRpdGVkJztcbmNvbnN0IEFQUFJPVkFMX1NUQVRVU19TVEFSVEVEX0FQUFJPVkVEID0gJ3N0YXJ0ZWRhcHByb3ZlZCc7XG5jb25zdCBBUFBST1ZBTF9TVEFUVVNfU1RBUlRFRCA9ICdzdGFydGVkJztcbmNvbnN0IEFQUFJPVkFMX1NUQVRVU19OT1RfQVBQUk9WRUQgPSAnbm90X2FwcHJvdmVkJztcbmNvbnN0IEFQUFJPVkFMX1NUQVRVU19SRUpFQ1RFRCA9ICdyZWplY3RlZCc7XG5cbmNvbnN0IE9OX0JVREdFVCA9ICdPbiBCdWRnZXQnO1xuXG5jb25zdCBJTlRFUk5BVElPTkFMID0gJ0ludGVybmF0aW9uYWwnO1xuY29uc3QgQ09VTlRSWSA9ICdDb3VudHJ5JztcblxuY29uc3QgUkVMQVRFRF9ET0NVTUVOVFMgPSAnUmVsYXRlZCBEb2N1bWVudHMnO1xuXG5jb25zdCBUTVBfRU5USVRZX1ZBTElEQVRPUiA9ICdlbnRpdHktdmFsaWRhdG9yJztcblxuLyoqIFJlcXVpcmVkIHN0YXR1cyAqL1xuY29uc3QgQUxXQVlTX1JFUVVJUkVEID0gJ1knO1xuXG5leHBvcnQgZGVmYXVsdCBPYmplY3QuZnJlZXplKHtcbiAgRE9OT1JfT1JHQU5JWkFUSU9OLFxuICBSRVNQT05TSUJMRV9PUkdBTklaQVRJT04sXG4gIEVYRUNVVElOR19BR0VOQ1ksXG4gIElNUExFTUVOVElOR19BR0VOQ1ksXG4gIEJFTkVGSUNJQVJZX0FHRU5DWSxcbiAgQ09OVFJBQ1RJTkdfQUdFTkNZLFxuICBET05PUl9BR0VOQ1ksXG4gIFJFR0lPTkFMX0dST1VQLFxuICBTRUNUT1JfR1JPVVAsXG4gIE9SR19ST0xFX05BTUVTLFxuICBBQ1RVQUwsXG4gIFBMQU5ORUQsXG4gIENPTU1JVE1FTlRTLFxuICBESVNCVVJTRU1FTlRTLFxuICBFWFBFTkRJVFVSRVMsXG4gIEFDVFVBTF9DT01NSVRNRU5UUyxcbiAgQUNUVUFMX0RJU0JVUlNFTUVOVFMsXG4gIEFDVFVBTF9FWFBFTkRJVFVSRVMsXG4gIFBMQU5ORURfQ09NTUlUTUVOVFMsXG4gIFBMQU5ORURfRElTQlVSU0VNRU5UUyxcbiAgUExBTk5FRF9FWFBFTkRJVFVSRVMsXG4gIFVOQUxMT0NBVEVEX0RJU0JVUlNFTUVOVFMsXG4gIERFTElWRVJZX1JBVEUsXG4gIE1URUZfUFJPSkVDVElPTlMsXG4gIEFESlVTVE1FTlRfVFlQRVMsXG4gIEFESlVTVE1FTlRfVFlQRVNfQVBfT1JERVIsXG4gIE5FV19BQ1RJVklUWV9JRCxcbiAgUFJPUE9TRURfUFJPSkVDVF9DT1NULFxuICBSRVZJU0VEX1BST0pFQ1RfQ09TVCxcbiAgQUNST05ZTV9ET05PUl9PUkdBTklaQVRJT04sXG4gIEFDUk9OWU1fRVhFQ1VUSU5HX0FHRU5DWSxcbiAgQUNST05ZTV9JTVBMRU1FTlRJTkdfQUdFTkNZLFxuICBBQ1JPTllNX0JFTkVGSUNJQVJZX0FHRU5DWSxcbiAgQUNST05ZTV9SRVNQT05TSUJMRV9PUkdBTklaQVRJT04sXG4gIEFQUFJPVkFMX1NUQVRVU19DUkVBVEVELFxuICBBUFBST1ZBTF9TVEFUVVNfQVBQUk9WRUQsXG4gIEFQUFJPVkFMX1NUQVRVU19FRElURUQsXG4gIEFQUFJPVkFMX1NUQVRVU19TVEFSVEVEX0FQUFJPVkVELFxuICBBUFBST1ZBTF9TVEFUVVNfU1RBUlRFRCxcbiAgQVBQUk9WQUxfU1RBVFVTX05PVF9BUFBST1ZFRCxcbiAgQVBQUk9WQUxfU1RBVFVTX1JFSkVDVEVELFxuICBPTl9CVURHRVQsXG4gIElOVEVSTkFUSU9OQUwsXG4gIENPVU5UUlksXG4gIFJFTEFURURfRE9DVU1FTlRTLFxuICBUTVBfRU5USVRZX1ZBTElEQVRPUixcbiAgQUxXQVlTX1JFUVVJUkVEXG59KTtcbiIsImltcG9ydCBBY3Rpdml0eUNvbnN0YW50cyBmcm9tICcuLi9tb2R1bGVzL3V0aWwvQWN0aXZpdHlDb25zdGFudHMnO1xuaW1wb3J0IEZlYXR1cmVNYW5hZ2VyQ29uc3RhbnRzIGZyb20gJy4uL21vZHVsZXMvdXRpbC9GZWF0dXJlTWFuYWdlckNvbnN0YW50cyc7XG5pbXBvcnQgVmFsdWVDb25zdGFudHMgZnJvbSAnLi9WYWx1ZUNvbnN0YW50cyc7XG5cbi8qKlxuICogVGhpcyBpcyBhIHNldCBvZiBmaWVsZCBwYXRocyB0aGF0IGFyZSB1c2VkIGZvciBmcmVxdWVudCBuZWVkc1xuICogQGF1dGhvciBOYWRlamRhIE1hbmRyZXNjdVxuICovXG5cbmV4cG9ydCBjb25zdCBGVU5ESU5HX0FDVElWRV9MSVNUID0gJ2Z1bmRpbmdzfmFjdGl2ZV9saXN0JztcbmV4cG9ydCBjb25zdCBGVU5ESU5HX1RZUEVfT0ZfQVNTSVNUQU5DRSA9IGAke0FjdGl2aXR5Q29uc3RhbnRzLkZVTkRJTkdTfX4ke0FjdGl2aXR5Q29uc3RhbnRzLlRZUEVfT0ZfQVNTSVNUQU5DRX1gO1xuZXhwb3J0IGNvbnN0IEZVTkRJTkdfREVUQUlMU19QQVRIID0gYCR7QWN0aXZpdHlDb25zdGFudHMuRlVORElOR1N9fiR7QWN0aXZpdHlDb25zdGFudHMuRlVORElOR19ERVRBSUxTfWA7XG4vKipcbiAqIExlZ2FjeSBmdW5kaW5nIGN1cnJlbmN5IHBhdGggdXNlZCBmb3IgZGF0YSBtaWdyYXRpb25cbiAqIEBkZXByZWNhdGVkIHNpbmNlIDEuNFxuICovXG5leHBvcnQgY29uc3QgRlVORElOR19DVVJSRU5DWV9QQVRIID0gYCR7RlVORElOR19ERVRBSUxTX1BBVEh9fiR7QWN0aXZpdHlDb25zdGFudHMuQ1VSUkVOQ1l9YDtcbmV4cG9ydCBjb25zdCBNVEVGX0NVUlJFTkNZX1BBVEggPVxuICBgJHtBY3Rpdml0eUNvbnN0YW50cy5GVU5ESU5HU31+JHtBY3Rpdml0eUNvbnN0YW50cy5NVEVGX1BST0pFQ1RJT05TfX4ke0FjdGl2aXR5Q29uc3RhbnRzLkNVUlJFTkNZfWA7XG5leHBvcnQgY29uc3QgUFBDX0NVUlJFTkNZX1BBVEggPSBgJHtBY3Rpdml0eUNvbnN0YW50cy5QUENfQU1PVU5UfX4ke0FjdGl2aXR5Q29uc3RhbnRzLkNVUlJFTkNZfWA7XG5leHBvcnQgY29uc3QgUlBDX0NVUlJFTkNZX1BBVEggPSBgJHtBY3Rpdml0eUNvbnN0YW50cy5SUENfQU1PVU5UfX4ke0FjdGl2aXR5Q29uc3RhbnRzLkNVUlJFTkNZfWA7XG5leHBvcnQgY29uc3QgQ09NUE9ORU5UX0NVUlJFTkNZX1BBVEggPVxuICBgJHtBY3Rpdml0eUNvbnN0YW50cy5DT01QT05FTlRTfX4ke0FjdGl2aXR5Q29uc3RhbnRzLkNPTVBPTkVOVF9GVU5ESU5HfX4ke0FjdGl2aXR5Q29uc3RhbnRzLkNVUlJFTkNZfWA7XG5leHBvcnQgY29uc3QgRElTQlVSU0VNRU5UU19QQVRIID0gYCR7QWN0aXZpdHlDb25zdGFudHMuRlVORElOR1N9fiR7QWN0aXZpdHlDb25zdGFudHMuRElTQlVSU0VNRU5UU31gO1xuZXhwb3J0IGNvbnN0IEFDVElWSVRZX0lOVEVSTkFMX0lEU19JTlRFUk5BTF9JRF9QQVRIID0gJ2FjdGl2aXR5X2ludGVybmFsX2lkc35pbnRlcm5hbF9pZCc7XG5leHBvcnQgY29uc3QgQUNUSVZJVFlfSU5URVJOQUxfSURTX09SR0FOSVpBVElPTl9QQVRIID0gJ2FjdGl2aXR5X2ludGVybmFsX2lkc35vcmdhbml6YXRpb24nO1xuZXhwb3J0IGNvbnN0IExPQ0FUSU9OX1BBVEggPSAnbG9jYXRpb25zfmxvY2F0aW9uJztcbmV4cG9ydCBjb25zdCBOQVRJT05BTF9QTEFOX09CSkVDVElWRV9QQVRIID0gJ25hdGlvbmFsX3BsYW5fb2JqZWN0aXZlfnByb2dyYW0nO1xuZXhwb3J0IGNvbnN0IFBSSU1BUllfUFJPR1JBTV9QQVRIID0gJ3ByaW1hcnlfcHJvZ3JhbXN+cHJvZ3JhbSc7XG5leHBvcnQgY29uc3QgU0VDT05EQVJZX1BST0dSQU1fUEFUSCA9ICdzZWNvbmRhcnlfcHJvZ3JhbXN+cHJvZ3JhbSc7XG5leHBvcnQgY29uc3QgUFJJTUFSWV9TRUNUT1JfUEFUSCA9ICdwcmltYXJ5X3NlY3RvcnN+c2VjdG9yJztcbmV4cG9ydCBjb25zdCBTRUNPTkRBUllfU0VDVE9SX1BBVEggPSAnc2Vjb25kYXJ5X3NlY3RvcnN+c2VjdG9yJztcbmV4cG9ydCBjb25zdCBURVJUSUFSWV9TRUNUT1JfUEFUSCA9ICd0ZXJ0aWFyeV9zZWN0b3JzfnNlY3Rvcic7XG5leHBvcnQgY29uc3QgRE9OT1JfT1JHQU5JWkFUSU9OU19QQVRIID0gJ2Rvbm9yX29yZ2FuaXphdGlvbn5vcmdhbml6YXRpb24nO1xuZXhwb3J0IGNvbnN0IFJFU1BPTlNJQkxFX09SR0FOSVpBVElPTl9CVURHRVRTX1BBVEggPVxuICBgJHtBY3Rpdml0eUNvbnN0YW50cy5SRVNQT05TSUJMRV9PUkdBTklaQVRJT059fiR7QWN0aXZpdHlDb25zdGFudHMuQlVER0VUU31gO1xuXG5leHBvcnQgY29uc3QgUkVMQVRFRF9PUkdTX1BBVEhTID0gVmFsdWVDb25zdGFudHMuT1JHX1JPTEVfTkFNRVMubWFwKG9yZ1JvbGUgPT4gQWN0aXZpdHlDb25zdGFudHMudG9GaWVsZE5hbWUob3JnUm9sZSkpO1xuZXhwb3J0IGNvbnN0IFJFTEFURURfT1JHU19PUkdBTklaQVRJT05fUEFUSFMgPSBWYWx1ZUNvbnN0YW50cy5PUkdfUk9MRV9OQU1FUy5tYXAoXG4gIG9yZ1JvbGUgPT4gYCR7QWN0aXZpdHlDb25zdGFudHMudG9GaWVsZE5hbWUob3JnUm9sZSl9fiR7QWN0aXZpdHlDb25zdGFudHMuT1JHQU5JWkFUSU9OfWApO1xuXG5leHBvcnQgY29uc3QgUklDSF9URVhUX0ZJRUxEUyA9IG5ldyBTZXQoW0FjdGl2aXR5Q29uc3RhbnRzLlNUQVRVU19SRUFTT04sIEFjdGl2aXR5Q29uc3RhbnRzLk9CSkVDVElWRSxcbiAgQWN0aXZpdHlDb25zdGFudHMuREVTQ1JJUFRJT04sIEFjdGl2aXR5Q29uc3RhbnRzLlBST0pFQ1RfQ09NTUVOVFMsIEFjdGl2aXR5Q29uc3RhbnRzLkxFU1NPTlNfTEVBUk5FRCxcbiAgQWN0aXZpdHlDb25zdGFudHMuUFJPSkVDVF9JTVBBQ1QsIEFjdGl2aXR5Q29uc3RhbnRzLkFDVElWSVRZX1NVTU1BUlksIEFjdGl2aXR5Q29uc3RhbnRzLkNPTkRJVElPTkFMSVRJRVMsXG4gIEFjdGl2aXR5Q29uc3RhbnRzLlBST0pFQ1RfTUFOQUdFTUVOVCwgQWN0aXZpdHlDb25zdGFudHMuUkVTVUxUUyxcbl0pO1xuXG5leHBvcnQgY29uc3QgUEFUSFNfV0lUSF9UUkVFX1NUUlVDVFVSRSA9IG5ldyBTZXQoW05BVElPTkFMX1BMQU5fT0JKRUNUSVZFX1BBVEgsIFBSSU1BUllfUFJPR1JBTV9QQVRILFxuICBTRUNPTkRBUllfUFJPR1JBTV9QQVRILCBQUklNQVJZX1NFQ1RPUl9QQVRILCBTRUNPTkRBUllfU0VDVE9SX1BBVEgsIFRFUlRJQVJZX1NFQ1RPUl9QQVRIXSk7XG5cbmV4cG9ydCBjb25zdCBQQVRIU19XSVRIX0hJRVJBUkNISUNBTF9WQUxVRVMgPSBuZXcgU2V0KFtOQVRJT05BTF9QTEFOX09CSkVDVElWRV9QQVRILCBQUklNQVJZX1BST0dSQU1fUEFUSCxcbiAgU0VDT05EQVJZX1BST0dSQU1fUEFUSCwgUFJJTUFSWV9TRUNUT1JfUEFUSCwgU0VDT05EQVJZX1NFQ1RPUl9QQVRILCBURVJUSUFSWV9TRUNUT1JfUEFUSCwgTE9DQVRJT05fUEFUSF0pO1xuXG5leHBvcnQgY29uc3QgQUNUSVZJVFlfQ09OVEFDVF9QQVRIUyA9IFtBY3Rpdml0eUNvbnN0YW50cy5ET05PUl9DT05UQUNULCBBY3Rpdml0eUNvbnN0YW50cy5QUk9KRUNUX0NPT1JESU5BVE9SX0NPTlRBQ1QsXG4gIEFjdGl2aXR5Q29uc3RhbnRzLlNFQ1RPUl9NSU5JU1RSWV9DT05UQUNULCBBY3Rpdml0eUNvbnN0YW50cy5NT0ZFRF9DT05UQUNULFxuICBBY3Rpdml0eUNvbnN0YW50cy5JTVBMRU1FTlRJTkdfRVhFQ1VUSU5HX0FHRU5DWV9DT05UQUNUXTtcblxuZXhwb3J0IGNvbnN0IFRSQU5TQUNUSU9OX1RZUEVTID0gW0FjdGl2aXR5Q29uc3RhbnRzLkNPTU1JVE1FTlRTLCBBY3Rpdml0eUNvbnN0YW50cy5ESVNCVVJTRU1FTlRTLFxuICBBY3Rpdml0eUNvbnN0YW50cy5FWFBFTkRJVFVSRVNdO1xuZXhwb3J0IGNvbnN0IFRSQU5TQUNUSU9OX1RZUEVTX09SREVSRUQgPSBUUkFOU0FDVElPTl9UWVBFUztcbmV4cG9ydCBjb25zdCBGVU5ESU5HX1RSQU5TQUNUSU9OX1RZUEVTID0gWy4uLlRSQU5TQUNUSU9OX1RZUEVTLCBBY3Rpdml0eUNvbnN0YW50cy5FU1RJTUFURURfRElTQlVSU0VNRU5UU107XG5leHBvcnQgY29uc3QgQURKVVNUTUVOVF9UWVBFX1BBVEhTID0gRlVORElOR19UUkFOU0FDVElPTl9UWVBFUy5tYXAoXG4gIHR0ID0+IGAke0FjdGl2aXR5Q29uc3RhbnRzLkZVTkRJTkdTfX4ke3R0fX4ke0FjdGl2aXR5Q29uc3RhbnRzLkFESlVTVE1FTlRfVFlQRX1gKTtcbmV4cG9ydCBjb25zdCBGVU5ESU5HX0NVUlJFTkNZX1BBVEhTID0gVFJBTlNBQ1RJT05fVFlQRVMubWFwKFxuICB0dCA9PiBgJHtBY3Rpdml0eUNvbnN0YW50cy5GVU5ESU5HU31+JHt0dH1+JHtBY3Rpdml0eUNvbnN0YW50cy5DVVJSRU5DWX1gKTtcblxuZXhwb3J0IGNvbnN0IFBBVEhTX0ZPUl9BQ1RJVklUWV9DVVJSRU5DWSA9IFtGVU5ESU5HX0NVUlJFTkNZX1BBVEgsIE1URUZfQ1VSUkVOQ1lfUEFUSCwgQ09NUE9ORU5UX0NVUlJFTkNZX1BBVEgsXG4gIFBQQ19DVVJSRU5DWV9QQVRILCBSUENfQ1VSUkVOQ1lfUEFUSCwgLi4uRlVORElOR19DVVJSRU5DWV9QQVRIU107XG5cbmV4cG9ydCBjb25zdCBQQVRIU19GT1JfQ1VSUkVOQ1kgPSBuZXcgU2V0KFtBY3Rpdml0eUNvbnN0YW50cy5DVVJSRU5DWSwgLi4uUEFUSFNfRk9SX0FDVElWSVRZX0NVUlJFTkNZXSk7XG5cbmV4cG9ydCBjb25zdCBET19OT1RfSFlEUkFURV9GSUVMRFNfTElTVCA9IFtBY3Rpdml0eUNvbnN0YW50cy5BUFBST1ZBTF9TVEFUVVNdO1xuXG4vKiBGaWVsZHMgcGF0aHMgYWx0ZXJuYXRpdmUgdmFsdWVzIGxvY2F0aW9uICovXG5leHBvcnQgY29uc3QgQUxURVJOQVRFX1ZBTFVFX1BBVEggPSB7fTtcbkFMVEVSTkFURV9WQUxVRV9QQVRIW0FjdGl2aXR5Q29uc3RhbnRzLkNSRUFURURfT05dID0gQWN0aXZpdHlDb25zdGFudHMuQ0xJRU5UX0NSRUFURURfT047XG5BTFRFUk5BVEVfVkFMVUVfUEFUSFtBY3Rpdml0eUNvbnN0YW50cy5NT0RJRklFRF9PTl0gPSBBY3Rpdml0eUNvbnN0YW50cy5DTElFTlRfVVBEQVRFRF9PTjtcblxuLyogRk0gcGF0aHMgZm9yIHNvbWUgYWN0aXZpdHkgZmllbGRzIHRoYXQgYXJlIGFsd2F5cyBwcmVzZW50IGluIGZpZWxkcyBkZWYsIGJ1dCBtYXkgYmUgaGlkZGVuIGZyb20gZGlzcGxheSB0aHJvdWdoIEZNICovXG5leHBvcnQgY29uc3QgQUNUSVZJVFlfRklFTERTX0ZNX1BBVEggPSB7fTtcbkFDVElWSVRZX0ZJRUxEU19GTV9QQVRIW0FjdGl2aXR5Q29uc3RhbnRzLk1PRElGSUVEX0JZXSA9IEZlYXR1cmVNYW5hZ2VyQ29uc3RhbnRzLkFDVElWSVRZX0xBU1RfVVBEQVRFRF9CWTtcbkFDVElWSVRZX0ZJRUxEU19GTV9QQVRIW0FjdGl2aXR5Q29uc3RhbnRzLk1PRElGSUVEX09OXSA9IEZlYXR1cmVNYW5hZ2VyQ29uc3RhbnRzLkFDVElWSVRZX0xBU1RfVVBEQVRFRF9PTjtcblxuLyogUG9zc2libGUgT3B0aW9ucyBmaWVsZHMgcGF0aCBwcmVmaXhlcyAqL1xuZXhwb3J0IGNvbnN0IFBSRUZJWF9BQ1RJVklUWSA9IG51bGw7XG5leHBvcnQgY29uc3QgUFJFRklYX0NPTlRBQ1QgPSAnY29udGFjdCc7XG5leHBvcnQgY29uc3QgUFJFRklYX1JFU09VUkNFID0gJ3Jlc291cmNlJztcbmV4cG9ydCBjb25zdCBQUkVGSVhfQ09NTU9OID0gJ2NvbW1vbic7XG5leHBvcnQgY29uc3QgUFJFRklYX0xJU1QgPSBbUFJFRklYX0FDVElWSVRZLCBQUkVGSVhfQ09OVEFDVCwgUFJFRklYX1JFU09VUkNFLCBQUkVGSVhfQ09NTU9OXTtcblxuZXhwb3J0IGNvbnN0IEZJRUxEX1BBVEggPSAnZmllbGQtcGF0aCc7XG5leHBvcnQgY29uc3QgRklFTERfT1BUSU9OUyA9ICdwb3NzaWJsZS1vcHRpb25zJztcbmV4cG9ydCBjb25zdCBGSUVMRF9PUFRJT05fVVNBQkxFID0gJ29wdGlvbi11c2FibGUnO1xuZXhwb3J0IGNvbnN0IExJU1RfTUFYX1NJWkUgPSAnc2l6ZS1saW1pdCc7XG5leHBvcnQgY29uc3QgUkVHRVhfUEFUVEVSTiA9ICdyZWdleC1wYXR0ZXJuJztcbmV4cG9ydCBjb25zdCBGSUVMRF9OQU1FID0gJ2ZpZWxkX25hbWUnO1xuZXhwb3J0IGNvbnN0IEZJRUxEX0xBQkVMID0gJ2ZpZWxkX2xhYmVsJztcbmV4cG9ydCBjb25zdCBGSUVMRF9SRVFVSVJFRCA9ICdyZXF1aXJlZCc7XG5leHBvcnQgY29uc3QgRklFTERfVU5JUVVFX0NPTlNUUkFJTlQgPSAndW5pcXVlX2NvbnN0cmFpbnQnO1xuZXhwb3J0IGNvbnN0IEZJRUxEX1RZUEUgPSAnZmllbGRfdHlwZSc7XG5leHBvcnQgY29uc3QgRklFTERfTEVOR1RIID0gJ2ZpZWxkX2xlbmd0aCc7XG5leHBvcnQgY29uc3QgRklFTERfUEVSQ0VOVEFHRSA9ICdwZXJjZW50YWdlJztcbmV4cG9ydCBjb25zdCBGSUVMRF9QRVJDRU5UQUdFX0NPTlNUUkFJTlQgPSAncGVyY2VudGFnZV9jb25zdHJhaW50JztcbmV4cG9ydCBjb25zdCBGSUVMRF9JVEVNX1RZUEUgPSAnaXRlbS10eXBlJztcbmV4cG9ydCBjb25zdCBGSUVMRF9JTVBPUlRBQkxFID0gJ2ltcG9ydGFibGUnO1xuZXhwb3J0IGNvbnN0IEZJRUxEX0lEX09OTFkgPSAnaWRfb25seSc7XG5leHBvcnQgY29uc3QgRklFTERfTVVMVElQTEVfVkFMVUVTX0FMTE9XRUQgPSAnbXVsdGlwbGVfdmFsdWVzJztcbmV4cG9ydCBjb25zdCBGSUVMRF9UUkVFX0NPTExFQ1RJT04gPSAndHJlZV9jb2xsZWN0aW9uJztcbmV4cG9ydCBjb25zdCBGSUVMRF9DSElMRFJFTiA9ICdjaGlsZHJlbic7XG5leHBvcnQgY29uc3QgRklFTERfREVQRU5ERU5DSUVTID0gJ2RlcGVuZGVuY2llcyc7XG5cbmV4cG9ydCBjb25zdCBGSUVMRF9UWVBFX0xJU1QgPSAnbGlzdCc7XG5leHBvcnQgY29uc3QgRklFTERfVFlQRV9PQkpFQ1QgPSAnb2JqZWN0JztcbmV4cG9ydCBjb25zdCBGSUVMRF9UWVBFX1NUUklORyA9ICdzdHJpbmcnO1xuZXhwb3J0IGNvbnN0IEZJRUxEX1RZUEVfTE9ORyA9ICdsb25nJztcbmV4cG9ydCBjb25zdCBGSUVMRF9UWVBFX0ZMT0FUID0gJ2Zsb2F0JztcbmV4cG9ydCBjb25zdCBGSUVMRF9UWVBFX0JPT0xFQU4gPSAnYm9vbGVhbic7XG5leHBvcnQgY29uc3QgRklFTERfVFlQRV9EQVRFID0gJ2RhdGUnO1xuZXhwb3J0IGNvbnN0IEZJRUxEX1RZUEVfVElNRVNUQU1QID0gJ3RpbWVzdGFtcCc7XG5cbmV4cG9ydCBkZWZhdWx0IE9iamVjdC5mcmVlemUoe1xuICBGVU5ESU5HX0FDVElWRV9MSVNULFxuICBGVU5ESU5HX0RFVEFJTFNfUEFUSCxcbiAgRlVORElOR19DVVJSRU5DWV9QQVRILFxuICBNVEVGX0NVUlJFTkNZX1BBVEgsXG4gIFBQQ19DVVJSRU5DWV9QQVRILFxuICBSUENfQ1VSUkVOQ1lfUEFUSCxcbiAgQ09NUE9ORU5UX0NVUlJFTkNZX1BBVEgsXG4gIERJU0JVUlNFTUVOVFNfUEFUSCxcbiAgQUNUSVZJVFlfSU5URVJOQUxfSURTX0lOVEVSTkFMX0lEX1BBVEgsXG4gIEFDVElWSVRZX0lOVEVSTkFMX0lEU19PUkdBTklaQVRJT05fUEFUSCxcbiAgTE9DQVRJT05fUEFUSCxcbiAgTkFUSU9OQUxfUExBTl9PQkpFQ1RJVkVfUEFUSCxcbiAgUFJJTUFSWV9QUk9HUkFNX1BBVEgsXG4gIFNFQ09OREFSWV9QUk9HUkFNX1BBVEgsXG4gIFBSSU1BUllfU0VDVE9SX1BBVEgsXG4gIFNFQ09OREFSWV9TRUNUT1JfUEFUSCxcbiAgVEVSVElBUllfU0VDVE9SX1BBVEgsXG4gIERPTk9SX09SR0FOSVpBVElPTlNfUEFUSCxcbiAgUkVTUE9OU0lCTEVfT1JHQU5JWkFUSU9OX0JVREdFVFNfUEFUSCxcbiAgUkVMQVRFRF9PUkdTX1BBVEhTLFxuICBSRUxBVEVEX09SR1NfT1JHQU5JWkFUSU9OX1BBVEhTLFxuICBSSUNIX1RFWFRfRklFTERTLFxuICBQQVRIU19XSVRIX1RSRUVfU1RSVUNUVVJFLFxuICBQQVRIU19XSVRIX0hJRVJBUkNISUNBTF9WQUxVRVMsXG4gIEFDVElWSVRZX0NPTlRBQ1RfUEFUSFMsXG4gIFRSQU5TQUNUSU9OX1RZUEVTLFxuICBUUkFOU0FDVElPTl9UWVBFU19PUkRFUkVELFxuICBGVU5ESU5HX1RSQU5TQUNUSU9OX1RZUEVTLFxuICBBREpVU1RNRU5UX1RZUEVfUEFUSFMsXG4gIEZVTkRJTkdfQ1VSUkVOQ1lfUEFUSFMsXG4gIFBBVEhTX0ZPUl9BQ1RJVklUWV9DVVJSRU5DWSxcbiAgUEFUSFNfRk9SX0NVUlJFTkNZLFxuICBET19OT1RfSFlEUkFURV9GSUVMRFNfTElTVCxcbiAgQUxURVJOQVRFX1ZBTFVFX1BBVEgsXG4gIEFDVElWSVRZX0ZJRUxEU19GTV9QQVRILFxuICBQUkVGSVhfQUNUSVZJVFksXG4gIFBSRUZJWF9DT05UQUNULFxuICBQUkVGSVhfUkVTT1VSQ0UsXG4gIFBSRUZJWF9DT01NT04sXG4gIFBSRUZJWF9MSVNULFxuICBGSUVMRF9QQVRILFxuICBGSUVMRF9PUFRJT05TLFxuICBGSUVMRF9PUFRJT05fVVNBQkxFLFxuICBMSVNUX01BWF9TSVpFLFxuICBSRUdFWF9QQVRURVJOLFxuICBGSUVMRF9OQU1FLFxuICBGSUVMRF9MQUJFTCxcbiAgRklFTERfUkVRVUlSRUQsXG4gIEZJRUxEX1VOSVFVRV9DT05TVFJBSU5ULFxuICBGSUVMRF9UWVBFLFxuICBGSUVMRF9MRU5HVEgsXG4gIEZJRUxEX1BFUkNFTlRBR0UsXG4gIEZJRUxEX1BFUkNFTlRBR0VfQ09OU1RSQUlOVCxcbiAgRklFTERfSVRFTV9UWVBFLFxuICBGSUVMRF9JTVBPUlRBQkxFLFxuICBGSUVMRF9JRF9PTkxZLFxuICBGSUVMRF9NVUxUSVBMRV9WQUxVRVNfQUxMT1dFRCxcbiAgRklFTERfVFJFRV9DT0xMRUNUSU9OLFxuICBGSUVMRF9DSElMRFJFTixcbiAgRklFTERfREVQRU5ERU5DSUVTLFxuICBGSUVMRF9UWVBFX0xJU1QsXG4gIEZJRUxEX1RZUEVfT0JKRUNULFxuICBGSUVMRF9UWVBFX1NUUklORyxcbiAgRklFTERfVFlQRV9MT05HLFxuICBGSUVMRF9UWVBFX0ZMT0FULFxuICBGSUVMRF9UWVBFX0JPT0xFQU4sXG4gIEZJRUxEX1RZUEVfREFURSxcbiAgRklFTERfVFlQRV9USU1FU1RBTVAsXG59KTtcbiIsIi8qIGVzbGludC1kaXNhYmxlIGNsYXNzLW1ldGhvZHMtdXNlLXRoaXMgKi9cbmltcG9ydCBDb25zdGFudHMgZnJvbSAnLi4vLi4vdXRpbHMvQ29uc3RhbnRzJztcbmltcG9ydCAqIGFzIEZQQyBmcm9tICcuLi8uLi91dGlscy9GaWVsZFBhdGhDb25zdGFudHMnO1xuXG5sZXQgbG9nZ2VyID0gbnVsbDtcblxuLyoqXG4gKiBUaGlzIGlzIGEgaGVscGVyIGNsYXNzIGZvciBjaGVja2luZyBmaWVsZHMgc3RhdHVzLCBnZXR0aW5nIGZpZWxkIG9wdGlvbnMgdHJhbnNsYXRpb25zIGFuZCB0aGUgbGlrZS5cbiAqXG4gKiBAYXV0aG9yIE5hZGVqZGEgTWFuZHJlc2N1XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZpZWxkc01hbmFnZXIge1xuICAvKipcbiAgICogU2hhbGxvdyBjbG9uZSBvZiBhbm90aGVyIG5ld0ZpZWxkc01hbmFnZXJcbiAgICogQHBhcmFtIGZpZWxkc01hbmFnZXJcbiAgICogQHJldHVybiB7RmllbGRzTWFuYWdlcn1cbiAgICovXG4gIHN0YXRpYyBjbG9uZShmaWVsZHNNYW5hZ2VyOiBGaWVsZHNNYW5hZ2VyLCBMb2dnZXJNYW5hZ2VyKSB7XG4gICAgY29uc3QgbmV3RmllbGRzTWFuYWdlciA9IG5ldyBGaWVsZHNNYW5hZ2VyKFtdLCBbXSwgbnVsbCxcbiAgICAgIExvZ2dlck1hbmFnZXIpO1xuICAgIE9iamVjdC5hc3NpZ24obmV3RmllbGRzTWFuYWdlciwgZmllbGRzTWFuYWdlcik7XG4gICAgcmV0dXJuIG5ld0ZpZWxkc01hbmFnZXI7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihmaWVsZHNEZWYsIHBvc3NpYmxlVmFsdWVzQ29sbGVjdGlvbiwgY3VycmVudExhbmd1YWdlLCBMb2dnZXJNYW5hZ2VyKSB7XG4gICAgLy8gVE9ETyByZW1vdmUgY2FjaGVcbiAgICBsb2dnZXIgPSBuZXcgTG9nZ2VyTWFuYWdlcignRmllbGRzIG1hbmFnZXInKTtcbiAgICBsb2dnZXIuZGVidWcoJ2NvbnN0cnVjdG9yJyk7XG4gICAgdGhpcy5fZmllbGRzRGVmID0gZmllbGRzRGVmO1xuICAgIHRoaXMuX3Bvc3NpYmxlVmFsdWVzTWFwID0ge307XG4gICAgcG9zc2libGVWYWx1ZXNDb2xsZWN0aW9uLmZvckVhY2gocHYgPT4ge1xuICAgICAgdGhpcy5fcG9zc2libGVWYWx1ZXNNYXBbcHYuaWRdID0gcHZbRlBDLkZJRUxEX09QVElPTlNdO1xuICAgIH0pO1xuICAgIHRoaXMuX2ZpZWxkUGF0aHNFbmFibGVkU3RhdHVzTWFwID0ge307XG4gICAgdGhpcy5fbGFuZyA9IGN1cnJlbnRMYW5ndWFnZSB8fCBDb25zdGFudHMuTEFOR1VBR0VfRU5HTElTSDtcbiAgICB0aGlzLl9kZWZhdWx0TGFuZyA9IENvbnN0YW50cy5MQU5HVUFHRV9FTkdMSVNIO1xuICAgIHRoaXMuY2xlYW51cChmaWVsZHNEZWYpO1xuICB9XG5cbiAgY2xlYW51cChmaWVsZHNEZWYpIHtcbiAgICAvLyBUT0RPIGRlY2lkZSBlaXRoZXIgdG8ga2VlcCBjbGVhbnVwIChoZXJlIG9yIGFueXdoZXJlIGVsc2UpIG9yIGNoZWNrIGlmIHdlIG5lZWQgdG8gc3RhbmRhcmRpemUgQVBJXG4gICAgZmllbGRzRGVmLmZvckVhY2goZmQgPT4ge1xuICAgICAgaWYgKGZkLmNoaWxkcmVuKSB7XG4gICAgICAgIHRoaXMuY2xlYW51cChmZC5jaGlsZHJlbik7XG4gICAgICB9XG4gICAgICBpZiAoZmQuZmllbGRfbGFiZWwpIHtcbiAgICAgICAgT2JqZWN0LmtleXMoZmQuZmllbGRfbGFiZWwpLmZvckVhY2gobGFuZyA9PiB7XG4gICAgICAgICAgICBmZC5maWVsZF9sYWJlbFtsYW5nLnRvTG93ZXJDYXNlKCldID0gZmQuZmllbGRfbGFiZWxbbGFuZ107XG4gICAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBzZXQgY3VycmVudExhbmd1YWdlQ29kZShsYW5nKSB7XG4gICAgdGhpcy5fbGFuZyA9IGxhbmc7XG4gIH1cblxuICBzZXQgZGVmYXVsdExhbmd1YWdlQ29kZShsYW5nKSB7XG4gICAgdGhpcy5fZGVmYXVsdExhbmcgPSBsYW5nO1xuICB9XG5cbiAgZ2V0IGZpZWxkc0RlZigpIHtcbiAgICByZXR1cm4gdGhpcy5fZmllbGRzRGVmO1xuICB9XG5cbiAgZ2V0IHBvc3NpYmxlVmFsdWVzTWFwKCkge1xuICAgIHJldHVybiB0aGlzLl9wb3NzaWJsZVZhbHVlc01hcDtcbiAgfVxuXG4gIGdldFBvc3NpYmxlVmFsdWVzT3B0aW9ucyhmaWVsZFBhdGgpIHtcbiAgICByZXR1cm4gT2JqZWN0LnZhbHVlcyh0aGlzLl9wb3NzaWJsZVZhbHVlc01hcFtmaWVsZFBhdGhdKTtcbiAgfVxuXG4gIGlzRmllbGRQYXRoQnlQYXJ0c0VuYWJsZWQoLi4ucGF0aFBhcnRzKSB7XG4gICAgcmV0dXJuIHRoaXMuaXNGaWVsZFBhdGhFbmFibGVkKHBhdGhQYXJ0cy5qb2luKCd+JykpO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrcyBpZiB0aGUgc3BlY2lmaWVkIGZpZWxkIHBhdGggaXMgZW5hYmxlZCBpbiBBTVAgRk1cbiAgICogQHBhcmFtIGZpZWxkUGF0aFxuICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgKi9cbiAgaXNGaWVsZFBhdGhFbmFibGVkKGZpZWxkUGF0aCkge1xuICAgIGlmICh0aGlzLl9maWVsZFBhdGhzRW5hYmxlZFN0YXR1c01hcFtmaWVsZFBhdGhdID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuX2J1aWxkRmllbGRQYXRoU3RhdHVzKGZpZWxkUGF0aCk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9maWVsZFBhdGhzRW5hYmxlZFN0YXR1c01hcFtmaWVsZFBhdGhdO1xuICB9XG5cbiAgX2J1aWxkRmllbGRQYXRoU3RhdHVzKGZpZWxkUGF0aCkge1xuICAgIGNvbnN0IHBhdGhQYXJ0cyA9IGZpZWxkUGF0aC5zcGxpdCgnficpO1xuICAgIGxldCBjdXJyZW50VHJlZSA9IHRoaXMuX2ZpZWxkc0RlZjtcbiAgICBjb25zdCBpc0Rpc2FibGVkID0gcGF0aFBhcnRzLnNvbWUocGFydCA9PiB7XG4gICAgICBjdXJyZW50VHJlZSA9IGN1cnJlbnRUcmVlLmZpbmQoZmllbGQgPT4gZmllbGQuZmllbGRfbmFtZSA9PT0gcGFydCk7XG4gICAgICBpZiAoY3VycmVudFRyZWUgJiYgKChjdXJyZW50VHJlZVtGUEMuRklFTERfVFlQRV0gPT09IEZQQy5GSUVMRF9UWVBFX0xJU1RcbiAgICAgICAgJiYgY3VycmVudFRyZWVbRlBDLkZJRUxEX0lURU1fVFlQRV0gPT09IEZQQy5GSUVMRF9UWVBFX09CSkVDVClcbiAgICAgICAgfHwgY3VycmVudFRyZWVbRlBDLkZJRUxEX1RZUEVdID09PSBGUEMuRklFTERfVFlQRV9PQkpFQ1QpKSB7XG4gICAgICAgIGN1cnJlbnRUcmVlID0gY3VycmVudFRyZWUuY2hpbGRyZW47XG4gICAgICB9XG4gICAgICByZXR1cm4gIWN1cnJlbnRUcmVlO1xuICAgIH0pO1xuICAgIHRoaXMuX2ZpZWxkUGF0aHNFbmFibGVkU3RhdHVzTWFwW2ZpZWxkUGF0aF0gPSAhaXNEaXNhYmxlZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBGaW5kIHRoZSB0cmFuc2xhdGlvbiBmb3IgdGhlIG9yaWdpbmFsIHZhbHVlIGZvciB0aGUgZ2l2ZW4gZmllbGQgcGF0aCwgaWYgZm91bmQsIG90aGVyd2lzZSByZXR1cm5zIG51bGxcbiAgICogQHBhcmFtIGZpZWxkUGF0aFxuICAgKiBAcGFyYW0gb3JpZ1ZhbHVlXG4gICAqIEByZXR1cm4ge3N0cmluZ3xudWxsfVxuICAgKi9cbiAgZ2V0VmFsdWVUcmFuc2xhdGlvbihmaWVsZFBhdGgsIG9yaWdWYWx1ZSkge1xuICAgIC8vIGZhbGxiYWNrIHRvIG9yaWdpbmFsIHVudHJhbnNsYXRlZCB2YWx1ZVxuICAgIGxldCB0cm5WYWx1ZSA9IG9yaWdWYWx1ZTtcbiAgICBjb25zdCBvcHRpb25zID0gdGhpcy5fcG9zc2libGVWYWx1ZXNNYXBbZmllbGRQYXRoXTtcbiAgICBpZiAob3B0aW9ucykge1xuICAgICAgY29uc3Qgb3B0aW9uID0gT2JqZWN0LnZhbHVlcyhvcHRpb25zKS5maW5kKG9wdCA9PiBvcHQudmFsdWUgPT09IG9yaWdWYWx1ZSk7XG4gICAgICBpZiAob3B0aW9uICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgY29uc3QgdHJhbnNsYXRpb25zID0gb3B0aW9uWyd0cmFuc2xhdGVkLXZhbHVlJ107XG4gICAgICAgIGlmICh0cmFuc2xhdGlvbnMpIHtcbiAgICAgICAgICB0cm5WYWx1ZSA9IHRyYW5zbGF0aW9uc1t0aGlzLl9sYW5nXSB8fCB0cmFuc2xhdGlvbnNbdGhpcy5fZGVmYXVsdExhbmddIHx8IHRyblZhbHVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cm5WYWx1ZTtcbiAgfVxuXG4gIGdldEZpZWxkTGFiZWxUcmFuc2xhdGlvbihmaWVsZFBhdGgpIHtcbiAgICBsZXQgdHJuTGFiZWwgPSBudWxsO1xuICAgIGNvbnN0IGZpZWxkc0RlZiA9IHRoaXMuZ2V0RmllbGREZWYoZmllbGRQYXRoKTtcbiAgICBpZiAoZmllbGRzRGVmICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRybkxhYmVsID0gZmllbGRzRGVmLmZpZWxkX2xhYmVsW3RoaXMuX2xhbmddIHx8IGZpZWxkc0RlZi5maWVsZF9sYWJlbFt0aGlzLl9kZWZhdWx0TGFuZ10gfHwgbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIHRybkxhYmVsO1xuICB9XG5cbiAgZ2V0RmllbGREZWYoZmllbGRQYXRoKSB7XG4gICAgbGV0IGZpZWxkc0RlZiA9IHRoaXMuX2ZpZWxkc0RlZjtcbiAgICBpZiAoZmllbGRQYXRoKSB7XG4gICAgICBmaWVsZFBhdGguc3BsaXQoJ34nKS5zb21lKHBhcnQgPT4ge1xuICAgICAgICAgIGlmICghKGZpZWxkc0RlZiBpbnN0YW5jZW9mIEFycmF5KSkge1xuICAgICAgICAgICAgZmllbGRzRGVmID0gZmllbGRzRGVmLmNoaWxkcmVuO1xuICAgICAgICAgIH1cbiAgICAgICAgICBmaWVsZHNEZWYgPSBmaWVsZHNEZWYuZmluZChmZCA9PiBmZC5maWVsZF9uYW1lID09PSBwYXJ0KTtcbiAgICAgICAgICByZXR1cm4gZmllbGRzRGVmID09PSB1bmRlZmluZWQ7XG4gICAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBmaWVsZHNEZWYgPSB7IGNoaWxkcmVuOiBmaWVsZHNEZWYgfTtcbiAgICB9XG4gICAgcmV0dXJuIGZpZWxkc0RlZjtcbiAgfVxuXG4gIGdldEZpZWxkUGF0aHNCeURlcGVuZGVuY2llcyhkZXBlbmRlbmNpZXMpIHtcbiAgICBjb25zdCBmaWVsZFBhdGhzID0gW107XG4gICAgdGhpcy5fZ2V0RmllbGRQYXRoc0J5RGVwZW5kZW5jaWVzKGRlcGVuZGVuY2llcywgdGhpcy5fZmllbGRzRGVmLCAnJywgZmllbGRQYXRocyk7XG4gICAgcmV0dXJuIGZpZWxkUGF0aHM7XG4gIH1cblxuICBfZ2V0RmllbGRQYXRoc0J5RGVwZW5kZW5jaWVzKGRlcGVuZGVuY2llcywgZmllbGRzRGVmLCBjdXJyZW50UGF0aCwgZmllbGRQYXRoczogQXJyYXkpIHtcbiAgICBpZiAoIShmaWVsZHNEZWYgaW5zdGFuY2VvZiBBcnJheSkpIHtcbiAgICAgIGZpZWxkc0RlZiA9IGZpZWxkc0RlZi5jaGlsZHJlbjtcbiAgICB9XG4gICAgZmllbGRzRGVmLmZvckVhY2goZmQgPT4ge1xuICAgICAgY29uc3QgaGFzRGVwZW5kZW5jeSA9IGZkLmRlcGVuZGVuY2llcyAmJiBmZC5kZXBlbmRlbmNpZXMuc29tZShkZXAgPT4gZGVwZW5kZW5jaWVzLmluY2x1ZGVzKGRlcCkpO1xuICAgICAgaWYgKGZkLmNoaWxkcmVuIHx8IGhhc0RlcGVuZGVuY3kpIHtcbiAgICAgICAgY29uc3QgZmllbGRQYXRoID0gYCR7Y3VycmVudFBhdGh9JHtmZC5maWVsZF9uYW1lfWA7XG4gICAgICAgIGlmIChoYXNEZXBlbmRlbmN5KSB7XG4gICAgICAgICAgZmllbGRQYXRocy5wdXNoKGZpZWxkUGF0aCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGZkLmNoaWxkcmVuKSB7XG4gICAgICAgICAgdGhpcy5fZ2V0RmllbGRQYXRoc0J5RGVwZW5kZW5jaWVzKGRlcGVuZGVuY2llcywgZmQuY2hpbGRyZW4sIGAke2ZpZWxkUGF0aH1+YCwgZmllbGRQYXRocyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGdldFZhbHVlKG9iamVjdCwgZmllbGRQYXRoLCBnZXRPcHRpb25UcmFuc2xhdGlvbikge1xuICAgIHJldHVybiBGaWVsZHNNYW5hZ2VyLmdldFZhbHVlKG9iamVjdCwgZmllbGRQYXRoLCBnZXRPcHRpb25UcmFuc2xhdGlvbik7XG4gIH1cblxuICBzdGF0aWMgZ2V0VmFsdWUob2JqZWN0LCBmaWVsZFBhdGgsIGdldE9wdGlvblRyYW5zbGF0aW9uKSB7XG4gICAgY29uc3QgcGFydHMgPSBmaWVsZFBhdGggPyBmaWVsZFBhdGguc3BsaXQoJ34nKSA6IFtdO1xuICAgIGxldCB2YWx1ZSA9IG9iamVjdDtcbiAgICBwYXJ0cy5zb21lKHBhcnQgPT4ge1xuICAgICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgICAgY29uc3QgbmV3TGlzdCA9IFtdO1xuICAgICAgICB2YWx1ZS5mb3JFYWNoKGN1cnJlbnQgPT4ge1xuICAgICAgICAgIGNvbnN0IG5ld0VsZW1lbnQgPSBjdXJyZW50W3BhcnRdO1xuICAgICAgICAgIGlmIChuZXdFbGVtZW50ICE9PSB1bmRlZmluZWQgJiYgbmV3RWxlbWVudCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgbmV3TGlzdC5wdXNoKG5ld0VsZW1lbnQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHZhbHVlID0gbmV3TGlzdDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhbHVlID0gdmFsdWVbcGFydF07XG4gICAgICB9XG4gICAgICByZXR1cm4gdmFsdWUgPT09IHVuZGVmaW5lZCB8fCB2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZS5sZW5ndGggPT09IDA7XG4gICAgfSk7XG4gICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUgIT09IG51bGwgJiYgdmFsdWUubGVuZ3RoICE9PSAwKSB7XG4gICAgICBsZXQgdmFsdWVzID0gW10uY29uY2F0KHZhbHVlKTtcbiAgICAgIHZhbHVlcyA9IHZhbHVlcy5tYXAodmFsID0+IHtcbiAgICAgICAgaWYgKHZhbC52YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgcmV0dXJuIHZhbDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZ2V0T3B0aW9uVHJhbnNsYXRpb24odmFsLCB0aGlzLl9sYW5nLCB0aGlzLl9kZWZhdWx0TGFuZyk7XG4gICAgICB9KTtcbiAgICAgIHZhbHVlID0gdmFsdWUgaW5zdGFuY2VvZiBBcnJheSA/IHZhbHVlcyA6IHZhbHVlc1swXTtcbiAgICB9XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG59XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBjbGFzcy1tZXRob2RzLXVzZS10aGlzICovXG5pbXBvcnQgQWN0aXZpdHlDb25zdGFudHMgZnJvbSAnLi4vdXRpbC9BY3Rpdml0eUNvbnN0YW50cyc7XG5pbXBvcnQgRXJyb3JDb25zdGFudHMgZnJvbSAnLi4vLi4vdXRpbHMvY29uc3RhbnRzL0Vycm9yQ29uc3RhbnRzJztcbmltcG9ydCBDb25zdGFudHMgZnJvbSAnLi4vLi4vdXRpbHMvQ29uc3RhbnRzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ3VycmVuY3lSYXRlc01hbmFnZXIge1xuICBjb25zdHJ1Y3RvcihjdXJyZW5jeVJhdGVzLCBiYXNlQ3VycmVuY3ksIHRyYW5zbGF0ZSwgZGF0ZVV0aWxzLCBlcnJvck5vdGlmaWNhdGlvbkhlbHBlcikge1xuICAgIHRoaXMuX2N1cnJlbmN5UmF0ZXMgPSBjdXJyZW5jeVJhdGVzO1xuICAgIHRoaXMuX2Jhc2VDdXJyZW5jeSA9IGJhc2VDdXJyZW5jeTtcbiAgICB0aGlzLl9jdXJybmNpZXNXaXRoRXhjaGFuZ2VSYXRlcyA9IHRoaXMuX2dldEN1cnJlbmNpZXNXaXRoRXhjaGFuZ2VSYXRlcygpO1xuICAgIHRoaXMuX3RyYW5zbGF0ZSA9IHRyYW5zbGF0ZTtcbiAgICB0aGlzLl9kYXRlVXRpbHMgPSBkYXRlVXRpbHM7XG4gICAgdGhpcy5fZXJyb3JOb3RpZmljYXRpb25IZWxwZXIgPSBlcnJvck5vdGlmaWNhdGlvbkhlbHBlcjtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgb2YgY3VycmVuY2llcyB0aGF0IGhhcyBhdCBsZWFzdCBvbmUgZXhjaGFuZ2UgcmF0ZVxuICAgKiBAcmV0dXJuIHtTZXQ8YW55PiB8ICp9XG4gICAqL1xuICBnZXQgY3VycmVuY2llc1dpdGhFeGNoYW5nZVJhdGVzKCkge1xuICAgIHJldHVybiB0aGlzLl9jdXJybmNpZXNXaXRoRXhjaGFuZ2VSYXRlcztcbiAgfVxuXG4gIC8qKlxuICAgKiBDdXJyZW5jeSBjb252ZXJzaW9uIHV0aWxpdHkuIElmIHdlIGhhdmUgdGhlIGRpcmVjdCByYXRlIGl0IHdpbGwgY29udmVydCBmcm9tIGN1cnJlbmN5RnJvbSB0byBjdXJyZW5jeVRvIGluIHRoZVxuICAgKiBnaXZlbiBkYXRlLiBJZiB3ZSBkb24ndCBoYXZlIHRoZSBzYWlkIGN1cnJlbmN5IGl0IHdpbGwgdHJ5IHRvIHNlYXJjaCB0aGUgaW52ZXJzZSByYXRlIGFuZCB1c2UgMS94LiBJZiB0aGUgaW52ZXJzZVxuICAgKiByYXRlIGlzIGFsc28gbm90IEF2YWlsYWJsZSBhbiBlcnJvciB3aWxsIGJlIHRocm93blxuICAgKiBAcGFyYW0gY3VycmVuY3lGcm9tIGN1cnJlbmN5IGNvZGUgZnJvbSB0aGUgY3VycmVuY3kgd2UgYXJlIGNvbnZlcnRpbmcgZnJvbVxuICAgKiBAcGFyYW0gY3VycmVuY3lUbyBjdXJyZW5jeSBjb2RlIGZyb20gdGhlIGN1cnJlbmN5IHdlIGFyZSBjb252ZXJ0aW5nIHRvXG4gICAqIEBwYXJhbSBkYXRlVG9GaW5kIGRhdGUgZm9yIHdoaWNoIHdlIGFyZSBkb2luZyB0aGUgY29udmVyc2lvbi4gSXQgaXMgZXhwZWN0ZWQgaW4geXl5eS1tbS1kZFxuICAgKiBAcmV0dXJucyB7KnxQcm9taXNlLjxUUmVzdWx0Pn1cbiAgICovXG4gIGNvbnZlcnRDdXJyZW5jeShjdXJyZW5jeUZyb20sIGN1cnJlbmN5VG8sIGRhdGVUb0ZpbmQsIGZpeGVkRXhjaGFuZ2VSYXRlKSB7XG4gICAgaWYgKGN1cnJlbmN5RnJvbSA9PT0gY3VycmVuY3lUbykge1xuICAgICAgcmV0dXJuIENvbnN0YW50cy5SQVRFX1NBTUVfQ1VSUkVOQ1k7XG4gICAgfVxuICAgIGlmIChmaXhlZEV4Y2hhbmdlUmF0ZSAmJiBmaXhlZEV4Y2hhbmdlUmF0ZSA+IDApIHtcbiAgICAgIHJldHVybiAodGhpcy5jb252ZXJ0Q3VycmVuY3kodGhpcy5fYmFzZUN1cnJlbmN5LCBjdXJyZW5jeVRvLCBkYXRlVG9GaW5kLCBudWxsKSAvXG4gICAgICAgIGZpeGVkRXhjaGFuZ2VSYXRlKTtcbiAgICB9XG4gICAgY29uc3QgdGltZURhdGVUb0ZpbmQgPSAobmV3IERhdGUoYCR7ZGF0ZVRvRmluZH0gJHtDb25zdGFudHMuQ1VSUkVOQ1lfSE9VUn1gKSkuZ2V0VGltZSgpO1xuICAgIGlmICh0aGlzLl9jdXJyZW5jeVJhdGVzKSB7XG4gICAgICBjb25zdCBjdXJyZW5jaWVzVG9TZWFyY2hEaXJlY3QgPSB0aGlzLl9jdXJyZW5jeVJhdGVzLmZpbmQoKGl0ZW0pID0+XG4gICAgICAgIGl0ZW1bQ29uc3RhbnRzLkNVUlJFTkNZX1BBSVJdLmZyb20gPT09IGN1cnJlbmN5RnJvbSAmJiBpdGVtW0NvbnN0YW50cy5DVVJSRU5DWV9QQUlSXS50byA9PT0gY3VycmVuY3lUb1xuICAgICAgKTtcbiAgICAgIGlmIChjdXJyZW5jaWVzVG9TZWFyY2hEaXJlY3QpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0RXhjaGFuZ2VSYXRlKGN1cnJlbmNpZXNUb1NlYXJjaERpcmVjdCwgdGltZURhdGVUb0ZpbmQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gZGlyZWN0IG5vdCBmb3VuZFxuICAgICAgICBjb25zdCBjdXJyZW5jaWVzVG9TZWFyY2hJbnZlcnNlID1cbiAgICAgICAgICB0aGlzLl9jdXJyZW5jeVJhdGVzLmZpbmQoKGl0ZW0pID0+XG4gICAgICAgICAgICBpdGVtW0NvbnN0YW50cy5DVVJSRU5DWV9QQUlSXS5mcm9tID09PSBjdXJyZW5jeVRvICYmIGl0ZW1bQ29uc3RhbnRzLkNVUlJFTkNZX1BBSVJdLnRvID09PVxuICAgICAgICAgICAgY3VycmVuY3lGcm9tKTtcbiAgICAgICAgaWYgKGN1cnJlbmNpZXNUb1NlYXJjaEludmVyc2UpIHtcbiAgICAgICAgICByZXR1cm4gMSAvIHRoaXMuZ2V0RXhjaGFuZ2VSYXRlKGN1cnJlbmNpZXNUb1NlYXJjaEludmVyc2UsIHRpbWVEYXRlVG9GaW5kKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5jb252ZXJ0VmlhQmFzZUN1cnJlbmN5KGN1cnJlbmN5RnJvbSwgY3VycmVuY3lUbywgdGltZURhdGVUb0ZpbmQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IHRoaXMuX2dldEN1cnJlbmN5RXJyb3IoJ0N1cnJlbmN5UmF0ZXNOb3RJbml0aWFsaXplZCcpO1xuICAgIH1cbiAgfVxuXG4gIGNvbnZlcnRGdW5kaW5nRGV0YWlsc1RvQ3VycmVuY3koZnVuZGluZ0RldGFpbHMsIGN1cnJlbmN5VG8pIHtcbiAgICBsZXQgdG90YWwgPSAwO1xuICAgIGZ1bmRpbmdEZXRhaWxzLmZvckVhY2goZmQgPT4ge1xuICAgICAgdG90YWwgKz0gdGhpcy5jb252ZXJ0VHJhbnNhY3Rpb25BbW91bnRUb0N1cnJlbmN5KGZkLCBjdXJyZW5jeVRvKTtcbiAgICB9KTtcblxuICAgIHJldHVybiB0b3RhbDtcbiAgfVxuXG4gIGNvbnZlcnRUcmFuc2FjdGlvbkFtb3VudFRvQmFzZUN1cnJlbmN5KGZ1bmRpbmdEZXRhaWwpIHtcbiAgICByZXR1cm4gdGhpcy5jb252ZXJ0VHJhbnNhY3Rpb25BbW91bnRUb0N1cnJlbmN5KGZ1bmRpbmdEZXRhaWwsIHRoaXMuX2Jhc2VDdXJyZW5jeSk7XG4gIH1cblxuICBjb252ZXJ0QW1vdW50VG9DdXJyZW5jeShhbW91bnQsIGN1cnJlbmN5RnJvbSwgZGF0ZSwgZml4ZWRFeGNoYW5nZVJhdGUsIGN1cnJlbmN5VG8pIHtcbiAgICBjb25zdCBjdXJyZW5jeVJhdGUgPSB0aGlzLmNvbnZlcnRDdXJyZW5jeShjdXJyZW5jeUZyb20sIGN1cnJlbmN5VG8sXG4gICAgICB0aGlzLl9kYXRlVXRpbHMuZm9ybWF0RGF0ZUZvckFQSShkYXRlKSwgZml4ZWRFeGNoYW5nZVJhdGUpO1xuICAgIHJldHVybiBhbW91bnQgKiBjdXJyZW5jeVJhdGU7XG4gIH1cblxuICBjb252ZXJ0VHJhbnNhY3Rpb25BbW91bnRUb0N1cnJlbmN5KGZ1bmRpbmdEZXRhaWwsIGN1cnJlbmN5VG8pIHtcbiAgICBjb25zdCBmaXhlZEV4Y2hhbmdlUmF0ZSA9IGZ1bmRpbmdEZXRhaWxbQWN0aXZpdHlDb25zdGFudHMuRklYRURfRVhDSEFOR0VfUkFURV07XG4gICAgY29uc3QgY3VycmVuY3lGcm9tID0gZnVuZGluZ0RldGFpbFtBY3Rpdml0eUNvbnN0YW50cy5DVVJSRU5DWV0udmFsdWU7XG4gICAgY29uc3QgdHJhbnNhY3Rpb25EYXRlID0gZnVuZGluZ0RldGFpbFtBY3Rpdml0eUNvbnN0YW50cy5UUkFOU0FDVElPTl9EQVRFXTtcbiAgICBjb25zdCB0cmFuc2FjdGlvbkFtb3VudCA9IGZ1bmRpbmdEZXRhaWxbQWN0aXZpdHlDb25zdGFudHMuVFJBTlNBQ1RJT05fQU1PVU5UXTtcbiAgICByZXR1cm4gdGhpcy5jb252ZXJ0QW1vdW50VG9DdXJyZW5jeSh0cmFuc2FjdGlvbkFtb3VudCwgY3VycmVuY3lGcm9tLCB0cmFuc2FjdGlvbkRhdGUsIGZpeGVkRXhjaGFuZ2VSYXRlLFxuICAgICAgY3VycmVuY3lUbyk7XG4gIH1cblxuICBnZXRFeGNoYW5nZVJhdGUoY3VycmVuY2llc1RvU2VhcmNoLCB0aW1lRGF0ZVRvRmluZCkge1xuICAgIGxldCBsb3dlckVuZCA9IDA7XG4gICAgbGV0IGhpZ2hlckVuZCA9IGN1cnJlbmNpZXNUb1NlYXJjaC5yYXRlcy5sZW5ndGggLSAxO1xuICAgIHdoaWxlIChsb3dlckVuZCA8IGhpZ2hlckVuZCkge1xuICAgICAgY29uc3QgbWlkZGxlID0gTWF0aC5mbG9vcigobG93ZXJFbmQgKyBoaWdoZXJFbmQpIC8gMik7XG4gICAgICBjb25zdCBkaWZmZXJlbmNlID0gTWF0aC5hYnMoKG5ldyBEYXRlKFxuICAgICAgICBgJHtjdXJyZW5jaWVzVG9TZWFyY2gucmF0ZXNbbWlkZGxlXS5kYXRlfSAgJHtDb25zdGFudHMuQ1VSUkVOQ1lfSE9VUn1gKSlcbiAgICAgICAgLSB0aW1lRGF0ZVRvRmluZCk7XG4gICAgICBjb25zdCBkaWZmZXJlbmNlMSA9IE1hdGguYWJzKChuZXcgRGF0ZShcbiAgICAgICAgYCR7Y3VycmVuY2llc1RvU2VhcmNoLnJhdGVzW21pZGRsZSArIDFdLmRhdGV9ICAke0NvbnN0YW50cy5DVVJSRU5DWV9IT1VSfWApKVxuICAgICAgICAtIHRpbWVEYXRlVG9GaW5kKTtcbiAgICAgIGlmIChkaWZmZXJlbmNlMSA8PSBkaWZmZXJlbmNlKSB7XG4gICAgICAgIGxvd2VyRW5kID0gbWlkZGxlICsgMTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGhpZ2hlckVuZCA9IG1pZGRsZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGN1cnJlbmNpZXNUb1NlYXJjaC5yYXRlc1toaWdoZXJFbmRdLnJhdGU7XG4gIH1cblxuICBfZ2V0Q3VycmVuY3lFcnJvcihlcnJvck1lc2FnZSkge1xuICAgIGNvbnN0IG5vdGlmRXJyb3JDdXJyZW5jeSA9IHRoaXMuX2Vycm9yTm90aWZpY2F0aW9uSGVscGVyLmNyZWF0ZU5vdGlmaWNhdGlvbih7XG4gICAgICBtZXNzYWdlOiB0aGlzLl90cmFuc2xhdGUoZXJyb3JNZXNhZ2UpLFxuICAgICAgb3JpZ2luOiBFcnJvckNvbnN0YW50cy5OT1RJRklDQVRJT05fT1JJR0lOX0NVUlJFTkNZX01BTkFHRVJcbiAgICB9KTtcbiAgICByZXR1cm4gbm90aWZFcnJvckN1cnJlbmN5O1xuICB9XG5cbiAgY29udmVydFZpYUJhc2VDdXJyZW5jeShjdXJyZW5jeUZyb20sIGN1cnJlbmN5VG8sIHRpbWVEYXRlVG9GaW5kKSB7XG4gICAgY29uc3QgcmF0ZUZyb21Ub0Jhc2UgPSB0aGlzLl9jdXJyZW5jeVJhdGVzLmZpbmQoKGl0ZW0pID0+XG4gICAgICBpdGVtW0NvbnN0YW50cy5DVVJSRU5DWV9QQUlSXS5mcm9tID09PSBjdXJyZW5jeUZyb20gJiYgaXRlbVtDb25zdGFudHMuQ1VSUkVOQ1lfUEFJUl0udG8gPT09XG4gICAgICB0aGlzLl9iYXNlQ3VycmVuY3lcbiAgICApO1xuICAgIGNvbnN0IHJhdGVCYXNlVG9UbyA9IHRoaXMuX2N1cnJlbmN5UmF0ZXMuZmluZCgoaXRlbSkgPT5cbiAgICAgIGl0ZW1bQ29uc3RhbnRzLkNVUlJFTkNZX1BBSVJdLmZyb20gPT09IHRoaXMuX2Jhc2VDdXJyZW5jeSAmJiBpdGVtW0NvbnN0YW50cy5DVVJSRU5DWV9QQUlSXS50byA9PT1cbiAgICAgIGN1cnJlbmN5VG9cbiAgICApO1xuICAgIGlmIChyYXRlRnJvbVRvQmFzZSAmJiByYXRlQmFzZVRvVG8pIHtcbiAgICAgIC8vIGlmIHdlIGhhdmUgYm90aCBjdXJyZW5jaWVzIHdlIGp1c3QgcmV0dXJuIHRoZSBwcm9kdWN0IG9mIGVjaCByYXRlXG4gICAgICByZXR1cm4gdGhpcy5nZXRFeGNoYW5nZVJhdGUocmF0ZUZyb21Ub0Jhc2UsIHRpbWVEYXRlVG9GaW5kKSAqIHRoaXMuZ2V0RXhjaGFuZ2VSYXRlKHJhdGVCYXNlVG9UbywgdGltZURhdGVUb0ZpbmQpO1xuICAgIH0gZWxzZSBpZiAocmF0ZUZyb21Ub0Jhc2UpIHtcbiAgICAgIC8vIGlmIGVpdGhlciBvZiB0aGVtIGlzIG5vdCBmb3VuZCB3ZSB0cnkgdG8gZmluZCB0aGUgaW52ZXJzZVxuICAgICAgLy8gd2UgZ2V0IHRoZSBpbnZlcnNlIG9mIHJhdGVCYXNlVG9Ub1xuICAgICAgY29uc3QgcmF0ZVRvVG9CYXNlID0gdGhpcy5fY3VycmVuY3lSYXRlcy5maW5kKChpdGVtKSA9PlxuICAgICAgICBpdGVtW0NvbnN0YW50cy5DVVJSRU5DWV9QQUlSXS5mcm9tID09PSBjdXJyZW5jeVRvICYmIGl0ZW1bQ29uc3RhbnRzLkNVUlJFTkNZX1BBSVJdLnRvID09PVxuICAgICAgICB0aGlzLl9iYXNlQ3VycmVuY3lcbiAgICAgICk7XG4gICAgICBpZiAocmF0ZVRvVG9CYXNlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldEV4Y2hhbmdlUmF0ZShyYXRlRnJvbVRvQmFzZSwgdGltZURhdGVUb0ZpbmQpXG4gICAgICAgICAgKiAoMSAvIHRoaXMuZ2V0RXhjaGFuZ2VSYXRlKHJhdGVUb1RvQmFzZSwgdGltZURhdGVUb0ZpbmQpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBFcnJvckNvbnN0YW50cy5SQVRFX0NVUlJFTkNZX05PVF9GT1VORDtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHJhdGVCYXNlVG9Ubykge1xuICAgICAgY29uc3QgcmF0ZUJhc2VUb0Zyb20gPSB0aGlzLl9jdXJyZW5jeVJhdGVzLmZpbmQoKGl0ZW0pID0+XG4gICAgICAgIGl0ZW1bQ29uc3RhbnRzLkNVUlJFTkNZX1BBSVJdLmZyb20gPT09IHRoaXMuX2Jhc2VDdXJyZW5jeSAmJiBpdGVtW0NvbnN0YW50cy5DVVJSRU5DWV9QQUlSXS50byA9PT1cbiAgICAgICAgY3VycmVuY3lGcm9tXG4gICAgICApO1xuICAgICAgLy8gd2UgdHJ5IHRvIGdldCB0aGUgaW52ZXJzZSBvZiByYXRlRnJvbVRvQmFzZVxuICAgICAgaWYgKHJhdGVCYXNlVG9Gcm9tKSB7XG4gICAgICAgIHJldHVybiAoMSAvIHRoaXMuZ2V0RXhjaGFuZ2VSYXRlKHJhdGVCYXNlVG9Gcm9tLCB0aW1lRGF0ZVRvRmluZCkpXG4gICAgICAgICAgKiB0aGlzLmdldEV4Y2hhbmdlUmF0ZShyYXRlQmFzZVRvVG8sIHRpbWVEYXRlVG9GaW5kKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBFcnJvckNvbnN0YW50cy5SQVRFX0NVUlJFTkNZX05PVF9GT1VORDtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIEVycm9yQ29uc3RhbnRzLlJBVEVfQ1VSUkVOQ1lfTk9UX0ZPVU5EO1xuICAgIH1cbiAgfVxuXG4gIF9nZXRDdXJyZW5jaWVzV2l0aEV4Y2hhbmdlUmF0ZXMoKSB7XG4gICAgY29uc3QgY3MgPSBuZXcgU2V0KCk7XG4gICAgaWYgKHRoaXMuX2N1cnJlbmN5UmF0ZXMpIHtcbiAgICAgIHRoaXMuX2N1cnJlbmN5UmF0ZXMuZm9yRWFjaChleGNoYW5nZVJhdGVzID0+IHtcbiAgICAgICAgY3MuYWRkKGV4Y2hhbmdlUmF0ZXNbQ29uc3RhbnRzLkNVUlJFTkNZX1BBSVJdLmZyb20pO1xuICAgICAgICBjcy5hZGQoZXhjaGFuZ2VSYXRlc1tDb25zdGFudHMuQ1VSUkVOQ1lfUEFJUl0udG8pO1xuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBjcztcbiAgfVxufVxuIiwiaW1wb3J0ICogYXMgRlBDIGZyb20gJy4uLy4uL3V0aWxzL0ZpZWxkUGF0aENvbnN0YW50cyc7XG5pbXBvcnQgRmllbGRzTWFuYWdlciBmcm9tICcuL0ZpZWxkc01hbmFnZXInO1xuaW1wb3J0IENvbnN0YW50cyBmcm9tICcuLi8uLi91dGlscy9Db25zdGFudHMnO1xuaW1wb3J0IEFjdGl2aXR5Q29uc3RhbnRzIGZyb20gJy4uL3V0aWwvQWN0aXZpdHlDb25zdGFudHMnO1xuaW1wb3J0IEN1cnJlbmN5UmF0ZXNNYW5hZ2VyIGZyb20gJy4uL3V0aWwvQ3VycmVuY3lSYXRlc01hbmFnZXInO1xuXG5cbi8qKlxuICogUG9zc2libGUgVmFsdWVzIG1hbmFnZXIgdGhhdCBhbGxvd3MgdG8gZmlsbCBpbiBhZGRpdGlvbmFsIGluZm9ybWF0aW9uIGFuZCB0cmFuc2Zvcm1hdGlvbnNcbiAqIEBhdXRob3IgTmFkZWpkYSBNYW5kcmVzY3VcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9zc2libGVWYWx1ZXNNYW5hZ2VyIHtcbiAgc3RhdGljIF9sYW5nU3RhdGUgPSB7XG4gICAgbGFuZzogQ29uc3RhbnRzLkxBTkdVQUdFX0VOR0xJU0gsXG4gICAgZGVmYXVsdExhbmc6IENvbnN0YW50cy5MQU5HVUFHRV9FTkdMSVNIXG4gIH07XG5cbiAgc3RhdGljIF9sb2dnZXI7XG5cbiAgc3RhdGljIHNldExhbmdTdGF0ZShsYW5nU3RhdGUpIHtcbiAgICBQb3NzaWJsZVZhbHVlc01hbmFnZXIuX2xhbmdTdGF0ZSA9IGxhbmdTdGF0ZTtcbiAgfVxuXG4gIHN0YXRpYyBzZXRMb2dnZXIoTG9nZ2VyKSB7XG4gICAgUG9zc2libGVWYWx1ZXNNYW5hZ2VyLl9sb2dnZXIgPSBuZXcgTG9nZ2VyKCdQb3NzaWJsZSB2YWx1ZXMgbWFuYWdlcicpO1xuICB9XG4gIHN0YXRpYyBidWlsZEZvcm1hdHRlZEhpZXJhcmNoaWNhbFZhbHVlcyhvcHRpb25zKSB7XG4gICAgLy8gVE9ETyBvcHRpbWl6ZVxuICAgIGNvbnN0IGhPcHRpb25zID0ge307XG4gICAgT2JqZWN0LnZhbHVlcyhvcHRpb25zKS5mb3JFYWNoKG9wdGlvbiA9PiB7XG4gICAgICBoT3B0aW9uc1tvcHRpb24uaWRdID0gUG9zc2libGVWYWx1ZXNNYW5hZ2VyLmJ1aWxkSGllcmFyY2hpY2FsRGF0YShvcHRpb25zLCBvcHRpb24uaWQpO1xuICAgIH0pO1xuICAgIHJldHVybiBoT3B0aW9ucztcbiAgfVxuXG4gIHN0YXRpYyBidWlsZEhpZXJhcmNoaWNhbERhdGEob3B0aW9ucywgc2VsZWN0ZWRJZCkge1xuICAgIGNvbnN0IG9wdGlvbiA9IE9iamVjdC5hc3NpZ24oe30sIG9wdGlvbnNbc2VsZWN0ZWRJZF0pO1xuICAgIGNvbnN0IHZhbHVlUGFydHMgPSBQb3NzaWJsZVZhbHVlc01hbmFnZXIuZ2V0SGllcmFyY2hpY2FsVmFsdWUob3B0aW9ucywgc2VsZWN0ZWRJZCk7XG4gICAgb3B0aW9uW0FjdGl2aXR5Q29uc3RhbnRzLkhJRVJBUkNISUNBTF9WQUxVRV0gPSBQb3NzaWJsZVZhbHVlc01hbmFnZXIuZm9ybWF0VmFsdWVQYXJ0cyh2YWx1ZVBhcnRzKTtcbiAgICBvcHRpb25bQWN0aXZpdHlDb25zdGFudHMuSElFUkFSQ0hJQ0FMX1ZBTFVFX0RFUFRIXSA9ICh2YWx1ZVBhcnRzICYmIHZhbHVlUGFydHMgaW5zdGFuY2VvZiBBcnJheSkgP1xuICAgICAgdmFsdWVQYXJ0cy5sZW5ndGggOiAwO1xuICAgIHJldHVybiBvcHRpb247XG4gIH1cblxuICBzdGF0aWMgZ2V0SGllcmFyY2hpY2FsVmFsdWUob3B0aW9ucywgc2VsZWN0ZWRJZCkge1xuICAgIGNvbnN0IG5hbWVQYXJ0cyA9IFtdO1xuICAgIGxldCBjdXJyZW50ID0gb3B0aW9uc1tzZWxlY3RlZElkXTtcbiAgICB3aGlsZSAoY3VycmVudCkge1xuICAgICAgbmFtZVBhcnRzLnB1c2goUG9zc2libGVWYWx1ZXNNYW5hZ2VyLmdldE9wdGlvblRyYW5zbGF0aW9uKGN1cnJlbnQpKTtcbiAgICAgIGN1cnJlbnQgPSBvcHRpb25zW2N1cnJlbnQucGFyZW50SWRdO1xuICAgIH1cbiAgICByZXR1cm4gbmFtZVBhcnRzO1xuICB9XG5cbiAgc3RhdGljIGZvcm1hdFZhbHVlUGFydHModmFsdWVQYXJ0cykge1xuICAgIHJldHVybiAodmFsdWVQYXJ0cyAmJiB2YWx1ZVBhcnRzIGluc3RhbmNlb2YgQXJyYXkpID8gYFske3ZhbHVlUGFydHMucmV2ZXJzZSgpLmpvaW4oJ11bJyl9XWAgOiB2YWx1ZVBhcnRzO1xuICB9XG5cbiAgLyoqXG4gICAqIEZpbGxzIGhpZXJhcmNoaWNhbCBkZXB0aCBvZiBlYWNoIG9wdGlvblxuICAgKiBAcGFyYW0gb3B0aW9uc1xuICAgKi9cbiAgc3RhdGljIGZpbGxIaWVyYXJjaGljYWxEZXB0aChvcHRpb25zKSB7XG4gICAgT2JqZWN0LnZhbHVlcyhvcHRpb25zKS5mb3JFYWNoKG9wdGlvbiA9PiB7XG4gICAgICBQb3NzaWJsZVZhbHVlc01hbmFnZXIuX2ZpbGxIaWVyYXJjaGljYWxEZXB0aChvcHRpb25zLCBvcHRpb24pO1xuICAgIH0pO1xuICAgIHJldHVybiBvcHRpb25zO1xuICB9XG5cbiAgc3RhdGljIF9maWxsSGllcmFyY2hpY2FsRGVwdGgob3B0aW9ucywgb3B0aW9uKSB7XG4gICAgaWYgKCFvcHRpb24pIHtcbiAgICAgIFBvc3NpYmxlVmFsdWVzTWFuYWdlci5fbG9nZ2VyLmVycm9yKGBvcHRpb24gaXMgdW5zcGVjaWZpZWQ6ICR7b3B0aW9ufWApO1xuICAgICAgcmV0dXJuIDA7XG4gICAgfVxuICAgIGxldCBkZXB0aCA9IG9wdGlvbltBY3Rpdml0eUNvbnN0YW50cy5ISUVSQVJDSElDQUxfVkFMVUVfREVQVEhdO1xuICAgIGlmIChkZXB0aCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAvLyBTbyBmYXIgaXQgaXMgYmFzZWQgb24gdGhlIGN1cnJlbnQgbG9jYXRpb25zIGV4dHJhIGluZm8gYXBwcm9hY2hcbiAgICAgIGlmIChvcHRpb24ucGFyZW50SWQpIHtcbiAgICAgICAgY29uc3QgcGFyZW50ID0gb3B0aW9uc1tvcHRpb24ucGFyZW50SWRdO1xuICAgICAgICBkZXB0aCA9IDEgKyBQb3NzaWJsZVZhbHVlc01hbmFnZXIuX2ZpbGxIaWVyYXJjaGljYWxEZXB0aChvcHRpb25zLCBwYXJlbnQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZGVwdGggPSAwO1xuICAgICAgfVxuICAgICAgb3B0aW9uW0FjdGl2aXR5Q29uc3RhbnRzLkhJRVJBUkNISUNBTF9WQUxVRV9ERVBUSF0gPSBkZXB0aDtcbiAgICB9XG4gICAgcmV0dXJuIGRlcHRoO1xuICB9XG5cbiAgc3RhdGljIGZpbmRPcHRpb24ob3B0aW9ucywgaWQpIHtcbiAgICByZXR1cm4gT2JqZWN0LnZhbHVlcyhvcHRpb25zKS5maW5kKG8gPT4gby5pZCA9PT0gaWQpO1xuICB9XG5cbiAgc3RhdGljIGZpbmRPcHRpb25CeVZhbHVlKG9wdGlvbnMsIHZhbHVlKSB7XG4gICAgcmV0dXJuIE9iamVjdC52YWx1ZXMob3B0aW9ucykuZmluZChvID0+IG8udmFsdWUgPT09IHZhbHVlKTtcbiAgfVxuXG4gIHN0YXRpYyBnZXRPcHRpb25UcmFuc2xhdGlvbihvcHRpb24pIHtcbiAgICBsZXQgcmVzVmFsID0gb3B0aW9uLnZhbHVlO1xuICAgIGNvbnN0IHRyYW5zbGF0aW9ucyA9IG9wdGlvblsndHJhbnNsYXRlZC12YWx1ZSddO1xuICAgIGlmICh0cmFuc2xhdGlvbnMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgY29uc3QgbGFuZ1N0YXRlID0gUG9zc2libGVWYWx1ZXNNYW5hZ2VyLl9sYW5nU3RhdGU7XG4gICAgICByZXNWYWwgPSB0cmFuc2xhdGlvbnNbbGFuZ1N0YXRlLmxhbmddIHx8IHRyYW5zbGF0aW9uc1tsYW5nU3RhdGUuZGVmYXVsdExhbmddIHx8IHJlc1ZhbDtcbiAgICB9XG4gICAgcmV0dXJuIHJlc1ZhbDtcbiAgfVxuXG4gIHN0YXRpYyBzZXRWaXNpYmlsaXR5KG9wdGlvbnMsIGZpZWxkUGF0aCwgY3VycmVuY3lSYXRlc01hbmFnZXI6IEN1cnJlbmN5UmF0ZXNNYW5hZ2VyLCBmaWx0ZXJzLCBpc09SRmlsdGVyID0gZmFsc2UsXG4gICAgc2VsZWN0ZWRJZCkge1xuICAgIGNvbnN0IGlzTG9jYXRpb25zID0gRlBDLkxPQ0FUSU9OX1BBVEggPT09IGZpZWxkUGF0aDtcbiAgICBjb25zdCBpc0N1cnJlbmN5ID0gRlBDLlBBVEhTX0ZPUl9DVVJSRU5DWS5oYXMoZmllbGRQYXRoKTtcbiAgICBvcHRpb25zID0geyAuLi5vcHRpb25zIH07XG4gICAgT2JqZWN0LnZhbHVlcyhvcHRpb25zKS5mb3JFYWNoKG9wdGlvbiA9PiB7XG4gICAgICBvcHRpb24udmlzaWJsZSA9ICFpc09SRmlsdGVyO1xuICAgICAgaWYgKGlzTG9jYXRpb25zKSB7XG4gICAgICAgIG9wdGlvbi5kaXNwbGF5SGllcmFyY2hpY2FsVmFsdWUgPSB0cnVlO1xuICAgICAgfSBlbHNlIGlmIChpc0N1cnJlbmN5KSB7XG4gICAgICAgIG9wdGlvbltGUEMuRklFTERfT1BUSU9OX1VTQUJMRV0gPSBQb3NzaWJsZVZhbHVlc01hbmFnZXIuaXNDdXJyZW5jeU9wdGlvblVzYWJsZShvcHRpb24sIGN1cnJlbmN5UmF0ZXNNYW5hZ2VyKTtcbiAgICAgICAgaWYgKCFvcHRpb25bRlBDLkZJRUxEX09QVElPTl9VU0FCTEVdKSB7XG4gICAgICAgICAgb3B0aW9uLnZpc2libGUgPSBvcHRpb24uaWQgPT09IHNlbGVjdGVkSWQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgICBpZiAoZmlsdGVycykge1xuICAgICAgZmlsdGVycy5mb3JFYWNoKGZpbHRlciA9PiB7XG4gICAgICAgIGNvbnN0IGZpbHRlckJ5ID0gZmlsdGVyLnZhbHVlO1xuICAgICAgICBPYmplY3QudmFsdWVzKG9wdGlvbnMpLmZvckVhY2gob3B0aW9uID0+IHtcbiAgICAgICAgICBjb25zdCBvcHRpb25EYXRhVG9DaGVjayA9IEZpZWxkc01hbmFnZXIuZ2V0VmFsdWUob3B0aW9uLCBmaWx0ZXIucGF0aCk7XG4gICAgICAgICAgaWYgKChpc09SRmlsdGVyIHx8IG9wdGlvbi52aXNpYmxlKSAmJiBvcHRpb25EYXRhVG9DaGVjayAmJiAoXG4gICAgICAgICAgICAob3B0aW9uRGF0YVRvQ2hlY2sgaW5zdGFuY2VvZiBBcnJheSAmJiBvcHRpb25EYXRhVG9DaGVjay5pbmNsdWRlcyhmaWx0ZXJCeSkpIHx8XG4gICAgICAgICAgICAob3B0aW9uRGF0YVRvQ2hlY2sgPT09IGZpbHRlckJ5KSkpIHtcbiAgICAgICAgICAgIG9wdGlvbi52aXNpYmxlID0gdHJ1ZTtcbiAgICAgICAgICB9IGVsc2UgaWYgKGlzT1JGaWx0ZXIpIHtcbiAgICAgICAgICAgIC8vIERvIG5vdGhpbmcsIGtlZXAgaXQgdmlzaWJsZS9pbnZpc2libGUuXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG9wdGlvbi52aXNpYmxlID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gb3B0aW9ucztcbiAgfVxuXG4gIHN0YXRpYyBpc0N1cnJlbmN5T3B0aW9uVXNhYmxlKG9wdGlvbiwgY3VycmVuY3lSYXRlc01hbmFnZXI6IEN1cnJlbmN5UmF0ZXNNYW5hZ2VyKSB7XG4gICAgY29uc3QgaGFzRXhjaGFuZ2VSYXRlcyA9IGN1cnJlbmN5UmF0ZXNNYW5hZ2VyLmN1cnJlbmNpZXNXaXRoRXhjaGFuZ2VSYXRlcy5oYXMob3B0aW9uLnZhbHVlKTtcbiAgICBjb25zdCBpc0FjdGl2ZSA9IG9wdGlvbi5leHRyYV9pbmZvICYmIG9wdGlvbi5leHRyYV9pbmZvLmFjdGl2ZTtcbiAgICByZXR1cm4gaXNBY3RpdmUgJiYgaGFzRXhjaGFuZ2VSYXRlcztcbiAgfVxuXG4gIHN0YXRpYyBnZXRUcmVlU29ydGVkT3B0aW9uc0xpc3Qob3B0aW9uc09iaiwgcmV2ZXJzZVNvcnRPcHRpb25zKSB7XG4gICAgY29uc3QgYWRkZWQgPSBuZXcgU2V0KCk7XG4gICAgY29uc3Qgb3B0aW9uc0xpc3QgPSBbXTtcbiAgICBjb25zdCBpZHNTdGFjayA9IE9iamVjdC52YWx1ZXMob3B0aW9uc09iaikuZmlsdGVyKG8gPT4gIW8ucGFyZW50SWQpLnNvcnQocmV2ZXJzZVNvcnRPcHRpb25zKVxuICAgICAgLm1hcChvID0+IG8uaWQpO1xuICAgIHdoaWxlIChpZHNTdGFjay5sZW5ndGgpIHtcbiAgICAgIGNvbnN0IGlkID0gaWRzU3RhY2sucG9wKCk7XG4gICAgICBpZiAoIWFkZGVkLmhhcyhpZCkpIHtcbiAgICAgICAgY29uc3Qgb3B0aW9uID0gb3B0aW9uc09ialtpZF07XG4gICAgICAgIGlmIChvcHRpb24ucmV2ZXJzZVNvcnRlZENoaWxkcmVuKSB7XG4gICAgICAgICAgaWRzU3RhY2sucHVzaCguLi5vcHRpb24ucmV2ZXJzZVNvcnRlZENoaWxkcmVuKTtcbiAgICAgICAgfVxuICAgICAgICBhZGRlZC5hZGQoaWQpO1xuICAgICAgICBvcHRpb25zTGlzdC5wdXNoKG9wdGlvbik7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBvcHRpb25zTGlzdDtcbiAgfVxufVxuIiwiLyogZXNsaW50LWRpc2FibGUgY2xhc3MtbWV0aG9kcy11c2UtdGhpcyAqL1xuY29uc3QgRkVBVFVSRV9NQU5BR0VSID0gJ0ZlYXR1cmUgbWFuYWdlcic7XG5cbi8qKlxuICogRmVhdHVyZSBNYW5hZ2VyXG4gKiBAYXV0aG9yIE5hZGVqZGEgTWFuZHJlc2N1XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZlYXR1cmVNYW5hZ2VyIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIHN0YXRpYyBfY3VycmVudEZNID0gbmV3IEZlYXR1cmVNYW5hZ2VyKCk7XG5cbiAgY29uc3RydWN0b3IoZm1UcmVlLCBMb2dnZXJNYW5hZ2VyKSB7XG4gICAgdGhpcy5fZm1UcmVlID0gZm1UcmVlO1xuICAgIGlmIChMb2dnZXJNYW5hZ2VyKSB7XG4gICAgICB0aGlzLmxvZ2dlck1hbmFnZXIgPSBMb2dnZXJNYW5hZ2VyO1xuICAgIH1cbiAgfVxuICBzZXQgZm1UcmVlKGZtVHJlZSkge1xuICAgIHRoaXMuX2ZtVHJlZSA9IGZtVHJlZTtcbiAgfVxuICBzZXQgbG9nZ2VyTWFuYWdlcihMb2dnZXJNYW5hZ2VyKSB7XG4gICAgdGhpcy5fbG9nZ2VyTWFuYWdlciA9IG5ldyBMb2dnZXJNYW5hZ2VyKEZFQVRVUkVfTUFOQUdFUik7XG4gIH1cblxuICBzdGF0aWMgc2V0TG9nZ2VyTWFuYWdlcihMb2dnZXJNYW5hZ2VyKSB7XG4gICAgRmVhdHVyZU1hbmFnZXIuX2N1cnJlbnRGTS5sb2dnZXJNYW5hZ2VyID0gTG9nZ2VyTWFuYWdlcjtcbiAgfVxuICBzdGF0aWMgc2V0Rk1UcmVlKGZtVHJlZSkge1xuICAgIEZlYXR1cmVNYW5hZ2VyLl9jdXJyZW50Rk0uZm1UcmVlID0gZm1UcmVlO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrcyBpZiB0aGUgZ2l2ZW4gRk0gcGF0aCBpcyBmdWxseSBlbmFibGVkIG9yIG9ubHkgbGFzdCBzZWdtZW50IGlzIGVuYWJsZWRcbiAgICogQHBhcmFtIGZtUGF0aCB0aGUgRk0gcGF0aCwgZS5nLiAnL1BST0pFQ1QgTUFOQUdFTUVOVC9GdW5kaW5nL0Z1bmRpbmcgSW5mb3JtYXRpb24vRGVsaXZlcnkgcmF0ZSdcbiAgICogQHBhcmFtIG9ubHlMYXN0U2VnbWVudCBzcGVjaWZpZXMgaWYgdG8gY2hlY2sgaWYgb25seSB0aGUgbGFzdCBzZWdtZW50IGlzIGVuYWJsZWQgKHRoZSBBTVAgYmVoYXZpb3IgZm9yIHNvbWUgY2FzZXMpXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqL1xuICBzdGF0aWMgaXNGTVNldHRpbmdFbmFibGVkKGZtUGF0aCwgb25seUxhc3RTZWdtZW50KSB7XG4gICAgcmV0dXJuIEZlYXR1cmVNYW5hZ2VyLl9jdXJyZW50Rk0uaXNGTVNldHRpbmdFbmFibGVkKGZtUGF0aCwgb25seUxhc3RTZWdtZW50KTtcbiAgfVxuXG4gIHN0YXRpYyBoYXNGTVNldHRpbmcoZm1QYXRoKSB7XG4gICAgcmV0dXJuIEZlYXR1cmVNYW5hZ2VyLl9jdXJyZW50Rk0uaGFzRk1TZXR0aW5nKGZtUGF0aCk7XG4gIH1cblxuICBpc0ZNU2V0dGluZ0VuYWJsZWQoZm1QYXRoLCBvbmx5TGFzdFNlZ21lbnQpIHtcbiAgICB0aGlzLl9sb2dnZXJNYW5hZ2VyLmRlYnVnKCdpc0ZNU2V0dGluZ0VuYWJsZWQnKTtcbiAgICBpZiAodGhpcy5fZm1UcmVlKSB7XG4gICAgICBsZXQgbGFzdEZNU3ViVHJlZSA9IHRoaXMuX2ZtVHJlZTtcbiAgICAgIGNvbnN0IHNlZ21lbnRzID0gdGhpcy5fZ2V0UGF0aFNlZ21lbnRzKGZtUGF0aCk7XG4gICAgICBjb25zdCBmb3VuZExhc3RGTVN1YlRyZWUgPSBzZWdtZW50cy5ldmVyeShzZWdtZW50ID0+IHtcbiAgICAgICAgbGFzdEZNU3ViVHJlZSA9IGxhc3RGTVN1YlRyZWVbc2VnbWVudF07XG4gICAgICAgIHJldHVybiBsYXN0Rk1TdWJUcmVlICE9PSB1bmRlZmluZWQgJiYgKGxhc3RGTVN1YlRyZWUuX19lbmFibGVkIHx8IG9ubHlMYXN0U2VnbWVudCk7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBmb3VuZExhc3RGTVN1YlRyZWUgJiYgbGFzdEZNU3ViVHJlZS5fX2VuYWJsZWQ7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGhhc0ZNU2V0dGluZyhmbVBhdGgpIHtcbiAgICBjb25zdCBmbVNldHRpbmcgPSB0aGlzLmZpbmRGTVNldHRpbmcoZm1QYXRoKTtcbiAgICByZXR1cm4gZm1TZXR0aW5nICYmIGZtU2V0dGluZy5fX2VuYWJsZWQgIT09IHVuZGVmaW5lZDtcbiAgfVxuXG4gIGZpbmRGTVNldHRpbmcoZm1QYXRoKSB7XG4gICAgY29uc3Qgc2VnbWVudHMgPSB0aGlzLl9nZXRQYXRoU2VnbWVudHMoZm1QYXRoKTtcbiAgICByZXR1cm4gc2VnbWVudHMucmVkdWNlKChjdXJyZW50Rk1TZXR0aW5nLCBzZWdtZW50KSA9PiBjdXJyZW50Rk1TZXR0aW5nICYmIGN1cnJlbnRGTVNldHRpbmdbc2VnbWVudF1cbiAgICAgICwgdGhpcy5fZm1UcmVlIHx8IHt9KTtcbiAgfVxuXG4gIHNldEZNU2V0dGluZyhmbVBhdGgsIGVuYWJsZWQpIHtcbiAgICBpZiAodGhpcy5fZm1UcmVlKSB7XG4gICAgICBjb25zdCBzZWdtZW50cyA9IHRoaXMuX2dldFBhdGhTZWdtZW50cyhmbVBhdGgpO1xuICAgICAgY29uc3QgbGFzdEZNU3ViVHJlZSA9IHNlZ21lbnRzLnJlZHVjZSgoY3VycmVudEZNVHJlZSwgc2VnbWVudCkgPT4ge1xuICAgICAgICBsZXQgc2VnbWVudEZNID0gY3VycmVudEZNVHJlZVtzZWdtZW50XTtcbiAgICAgICAgaWYgKHNlZ21lbnRGTSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgc2VnbWVudEZNID0ge307XG4gICAgICAgICAgY3VycmVudEZNVHJlZVtzZWdtZW50XSA9IHNlZ21lbnRGTTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc2VnbWVudEZNO1xuICAgICAgfSwgdGhpcy5fZm1UcmVlKTtcbiAgICAgIGxhc3RGTVN1YlRyZWUuX19lbmFibGVkID0gZW5hYmxlZDtcbiAgICB9XG4gIH1cblxuICBfZ2V0UGF0aFNlZ21lbnRzKGZtUGF0aCkge1xuICAgIC8vIGlnbm9yZSBmaXJzdCBcIi9cIiB0byBleGNsdWRlIGVtcHR5IHN0cmluZyBmcm9tIHRoZSBzcGxpdFxuICAgIHJldHVybiBmbVBhdGguc3Vic3RyaW5nKDEpLnNwbGl0KCcvJyk7XG4gIH1cbn1cbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQsIFByb3BUeXBlcyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IE92ZXJsYXlUcmlnZ2VyLCBUb29sdGlwIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcblxubGV0IGxvZ2dlciA9IG51bGw7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFQTGFiZWwgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgbGFiZWw6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICBkb250VHJhbnNsYXRlOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBsYWJlbENsYXNzOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIC8qIGRlY29yYXRvcjogUHJvcFR5cGVzLmZ1bmMsIC8vIFRPRE86IFRvIGJlIGltcGxlbWVudGVkLiAqL1xuICAgIHNlcGFyYXRvcjogUHJvcFR5cGVzLmJvb2wsXG4gICAgdG9vbHRpcDogUHJvcFR5cGVzLnN0cmluZ1xuICB9O1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIGNvbnN0IHsgTG9nZ2VyIH0gPSB0aGlzLnByb3BzO1xuICAgIGxvZ2dlciA9IG5ldyBMb2dnZXIoJ0FQIExhYmVsJyk7XG4gICAgbG9nZ2VyLmRlYnVnKCdjb25zdHJ1Y3RvcicpO1xuICB9XG5cbiAgZ2V0Q29udGVudCgpIHtcbiAgICBjb25zdCB7IHRyYW5zbGF0ZSB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBsYWJlbCA9ICh0aGlzLnByb3BzLmRvbnRUcmFuc2xhdGUgPT09IHRydWUgPyB0aGlzLnByb3BzLmxhYmVsIDogdHJhbnNsYXRlKHRoaXMucHJvcHMubGFiZWwpKTtcbiAgICBjb25zdCBsYWJlbENsYXNzID0gKHRoaXMucHJvcHMubGFiZWxDbGFzcyA/IHRoaXMucHJvcHMubGFiZWxDbGFzcyA6ICcnKTtcbiAgICByZXR1cm4gKDxkaXYgY2xhc3NOYW1lPXtsYWJlbENsYXNzfT48c3Bhbj57bGFiZWx9PC9zcGFuPnt0aGlzLnByb3BzLnNlcGFyYXRvciA/IDxociAvPiA6ICcnfTwvZGl2Pik7XG4gIH1cblxuICB0b29sdGlwKCkge1xuICAgIGNvbnN0IHsgdG9vbHRpcCwgZG9udFRyYW5zbGF0ZSwgdHJhbnNsYXRlIH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiA8VG9vbHRpcCBpZD1cInRvb2x0aXBcIj57ZG9udFRyYW5zbGF0ZSA/IHRvb2x0aXAgOiB0cmFuc2xhdGUodGhpcy5wcm9wcy50b29sdGlwKX08L1Rvb2x0aXA+O1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGlmICh0aGlzLnByb3BzLnRvb2x0aXApIHtcbiAgICAgIHJldHVybiAoPE92ZXJsYXlUcmlnZ2VyIHBsYWNlbWVudD1cInJpZ2h0XCIgb3ZlcmxheT17dGhpcy50b29sdGlwKCl9PlxuICAgICAgICB7dGhpcy5nZXRDb250ZW50KCl9XG4gICAgICA8L092ZXJsYXlUcmlnZ2VyPik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLmdldENvbnRlbnQoKTtcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQsIFByb3BUeXBlcyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vQWN0aXZpdHlQcmV2aWV3LmNzcyc7XG5cbmxldCBsb2dnZXIgPSBudWxsO1xuXG4vKipcbiAqIFNpbXBsZSBGaWVsZCBjb21wb25lbnQgdGhhdCBjb25zaXN0cyBvZiBhIGZpZWxkIHRpdGxlIGFuZCBmaWVsZCB2YWx1ZVxuICogQGF1dGhvciBOYWRlamRhIE1hbmRyZXNjdVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBUEZpZWxkIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICB2YWx1ZTogUHJvcFR5cGVzLmFueSxcbiAgICBpbmxpbmU6IFByb3BUeXBlcy5ib29sLFxuICAgIHVzZUlubmVySFRNTDogUHJvcFR5cGVzLmJvb2wsXG4gICAgZmllbGRDbGFzczogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBmaWVsZE5hbWVDbGFzczogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBmaWVsZFZhbHVlQ2xhc3M6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgc2VwYXJhdG9yOiBQcm9wVHlwZXMuYm9vbFxuICB9O1xuXG4gIC8qKlxuICAgKiBHZXRzIGFuIGluc3RhbmNlIG9mIFNpbXBsZSBGaWVsZFxuICAgKiBAcGFyYW0gdHJuTGFiZWwgdGhlIGxhYmVsIHRvIHRyYW5zbGF0ZSBhbmQgdXNlIGFzIGEgdGl0bGUuIFRoaXMgbGFiZWwgaXMgYWxzbyB1c2VkIGFzIHRoZSBjb21wb25lbnQga2V5LlxuICAgKiBAcGFyYW0gdmFsdWUgdGhlIGZpZWxkIHZhbHVlXG4gICAqIEBwYXJhbSBpbmxpbmUgc2hvdyB0aXRsZSBhbmQgdmFsdWUgaW4gdGhlIHNhbWUgcm93LlxuICAgKiBAcGFyYW0gc2VwYXJhdG9yIGFkZCBvciBub3QgYW4gPGhyPiB0YWcuXG4gICAqIEBwYXJhbSBuYW1lQ2xhc3MgY3NzIGNsYXNzIGZvciB0aGUgZmllbGQgbGFiZWxcbiAgICogQHBhcmFtIHZhbHVlQ2xhc3MgY3NzIGNsYXNzIGZvciB0aGUgZmllbGQgdmFsdWVcbiAgICogQHBhcmFtIHRyYW5zbGF0ZSB0aGUgdHJhbnNsYXRpb24gZnVuY3Rpb25cbiAgICogQHBhcmFtIGxvZ2dlciB0aGUgTG9nZ2VyTWFuYWdlclxuICAgKiBAcmV0dXJuIHtTaW1wbGVGaWVsZH1cbiAgICovXG4gIHN0YXRpYyBpbnN0YW5jZSh0cm5MYWJlbCwgdmFsdWUsIGlubGluZSA9IGZhbHNlLCBzZXBhcmF0b3IgPSBmYWxzZSwgbmFtZUNsYXNzLCB2YWx1ZUNsYXNzLCB0cmFuc2xhdGUsIGxvZ2dlcikge1xuICAgIHJldHVybiAoPEFQRmllbGRcbiAgICAgIGtleT17dHJuTGFiZWx9IHRpdGxlPXt0cmFuc2xhdGUodHJuTGFiZWwpfSB2YWx1ZT17dmFsdWV9IGlubGluZT17aW5saW5lfSBzZXBhcmF0b3I9e3NlcGFyYXRvcn1cbiAgICAgIGZpZWxkTmFtZUNsYXNzPXtuYW1lQ2xhc3N9IGZpZWxkVmFsdWVDbGFzcz17dmFsdWVDbGFzc30gdHJhbnNsYXRlPXt0cmFuc2xhdGV9IExvZ2dlcj17bG9nZ2VyfSAvPik7XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICBjb25zdCB7IExvZ2dlciB9ID0gdGhpcy5wcm9wcztcbiAgICBsb2dnZXIgPSBuZXcgTG9nZ2VyKCdBUCBmaWVsZCcpO1xuICAgIGxvZ2dlci5sb2coJ2NvbnN0cnVjdG9yJyk7XG4gICAgdGhpcy51c2VTZXBhcmF0b3IgPSB0aGlzLnByb3BzLnNlcGFyYXRvciAhPT0gZmFsc2U7XG4gICAgdGhpcy5kaXNwbGF5Q2xhc3MgPSB0aGlzLnByb3BzLmZpZWxkQ2xhc3MgfHwgKHRoaXMucHJvcHMuaW5saW5lID09PSB0cnVlID8gc3R5bGVzLmlubGluZSA6IHN0eWxlcy5ibG9jayk7XG4gIH1cblxuICBfZ2V0VmFsdWUoKSB7XG4gICAgY29uc3QgeyB0cmFuc2xhdGUgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgY2xhc3NOYW1lcyA9IGAke3RoaXMucHJvcHMuZmllbGRWYWx1ZUNsYXNzfSAke3RoaXMuZGlzcGxheUNsYXNzfWA7XG4gICAgLy8gVG8gaGFuZGxlIGJvb2xlYW4gZmllbGRzIHdlIGRvbnQgd2FudCB0byBzaG93ICdmYWxzZScgYXMgJ05vIERhdGEnLlxuICAgIGNvbnN0IHZhbHVlID0gKHRoaXMucHJvcHMudmFsdWUgfHwgdGhpcy5wcm9wcy52YWx1ZSA9PT0gZmFsc2UpID8gdGhpcy5wcm9wcy52YWx1ZSA6IHRyYW5zbGF0ZSgnTm8gRGF0YScpO1xuICAgIGxldCBkaXNwbGF5VmFsdWU7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICBpZiAodmFsdWVbMF0gaW5zdGFuY2VvZiBPYmplY3QpIHtcbiAgICAgICAgZGlzcGxheVZhbHVlID0gW107XG4gICAgICAgIHZhbHVlLmZvckVhY2godiA9PiBkaXNwbGF5VmFsdWUucHVzaCh2KSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkaXNwbGF5VmFsdWUgPSB2YWx1ZS5zb3J0KClcbiAgICAgICAgICAuam9pbignLCAnKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgICBkaXNwbGF5VmFsdWUgPSB2YWx1ZSA9PT0gdHJ1ZSA/IHRyYW5zbGF0ZSgnWWVzJykgOiB0cmFuc2xhdGUoJ05vJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRpc3BsYXlWYWx1ZSA9ICh0aGlzLnByb3BzLmlubGluZSAmJiB0aGlzLnByb3BzLnZhbHVlIGluc3RhbmNlb2YgU3RyaW5nKSA/IGAke3ZhbHVlfSBgIDogdmFsdWU7XG4gICAgfVxuICAgIGlmICh0aGlzLnByb3BzLnVzZUlubmVySFRNTCkge1xuICAgICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWVzfSBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IGRpc3BsYXlWYWx1ZSB9fSAvPjtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWVzfT57ZGlzcGxheVZhbHVlfTwvZGl2PjtcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgY2xhc3NOYW1lcyA9IGAke3RoaXMucHJvcHMuZmllbGROYW1lQ2xhc3N9ICR7dGhpcy5kaXNwbGF5Q2xhc3N9YDtcbiAgICByZXR1cm4gKDxkaXYgY2xhc3NOYW1lPXt0aGlzLmRpc3BsYXlDbGFzc30+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lc30+e3RoaXMucHJvcHMudGl0bGV9PC9kaXY+XG4gICAgICB7dGhpcy5fZ2V0VmFsdWUoKX1cbiAgICAgIHt0aGlzLnVzZVNlcGFyYXRvciA/IDxociAvPiA6ICcnfVxuICAgIDwvZGl2Pik7XG4gIH1cbn1cbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9BY3Rpdml0eVByZXZpZXcuY3NzJztcblxubGV0IGxvZ2dlciA9IG51bGw7XG5cbi8qKlxuICogQ29tcG9uZW50IGZvciBjb252ZXJ0aW5nIGNvbnRlbnQgdG8gdGFibGUgZm9ybVxuICogQGF1dGhvciBBbnlhIE1hcnNoYWxsblxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUYWJsaWZ5IGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGNvbnRlbnQ6IFByb3BUeXBlcy5hbnksXG4gICAgY29sdW1uczogUHJvcFR5cGVzLm51bWJlclxuICB9O1xuXG4gIC8qKlxuICAgKiBUYWtlcyBhbiBhcnJheSBhbmQgdHVybnMgaXQgaW50byB0YWJsZSByb3dzIGFuZCBjb2x1bW5zLlxuICAgKiBAYXV0aG9yIEFueWEgTWFyc2hhbGxcbiAgICogQHBhcmFtIGNvbnRlbnQgY29udGVudCBmb3IgdGFibGVcbiAgICogQHBhcmFtIGNvbHMgbnVtYmVyIG9mIGNvbHVtbnNcbiAgICovXG4gIHN0YXRpYyBhZGRSb3dzKGNvbnRlbnQsIGNvbHMsIFV0aWxzKSB7XG4gICAgLy8gUmVtb3ZlIHVuZGVmaW5lZCBjZWxscy5cbiAgICBjb250ZW50ID0gY29udGVudC5maWx0ZXIoYyA9PiBjKTtcbiAgICAvLyBEZWNyZWFzZSBudW1iZXIgb2YgY29scyBpZiB3ZSBkb250IGhhdmUgZW5vdWdoIGVsZW1lbnRzLlxuICAgIGlmIChjb250ZW50Lmxlbmd0aCA8IGNvbHMpIHtcbiAgICAgIGNvbHMgPSBjb250ZW50Lmxlbmd0aDtcbiAgICB9XG4gICAgY29uc3Qgcm93cyA9IE1hdGguY2VpbChjb250ZW50Lmxlbmd0aCAvIGNvbHMpO1xuICAgIGNvbnN0IHRhYmxlQ29udGVudCA9IFtdO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCByb3dzOyBpKyspIHtcbiAgICAgIGNvbnN0IHJvd0NvbnRlbnQgPSBbXTtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgY29sczsgaisrKSB7XG4gICAgICAgIHJvd0NvbnRlbnQucHVzaCg8dGQga2V5PXtVdGlscy5zdHJpbmdUb1VuaXF1ZUlkKCl9Pntjb250ZW50LnBvcCgpfTwvdGQ+KTtcbiAgICAgIH1cbiAgICAgIHRhYmxlQ29udGVudC5wdXNoKDx0ciBrZXk9e1V0aWxzLnN0cmluZ1RvVW5pcXVlSWQoKX0+e3Jvd0NvbnRlbnR9PC90cj4pO1xuICAgIH1cbiAgICByZXR1cm4gdGFibGVDb250ZW50O1xuICB9XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgY29uc3QgeyBMb2dnZXIgfSA9IHRoaXMucHJvcHM7XG4gICAgbG9nZ2VyID0gbmV3IExvZ2dlcigndGFibGlmeScpO1xuICAgIGxvZ2dlci5sb2coJ2NvbnN0cnVjdG9yJyk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBVdGlscyB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBjb2x1bW5zID0gdGhpcy5wcm9wcy5jb2x1bW5zID49IHRoaXMucHJvcHMuY29udGVudC5sZW5ndGggPyB0aGlzLnByb3BzLmNvbnRlbnQubGVuZ3RoIDogdGhpcy5wcm9wcy5jb2x1bW5zO1xuICAgIGNvbnN0IGNlbGxXaWR0aCA9IGAkeygxMDAgLyBjb2x1bW5zKX0lYDtcbiAgICBjb25zdCBjZWxsd2lkdGhTdHlsZSA9IHtcbiAgICAgIHdpZHRoOiBjZWxsV2lkdGhcbiAgICB9O1xuICAgIGNvbnN0IHJvd3MgPSBNYXRoLmNlaWwodGhpcy5wcm9wcy5jb250ZW50Lmxlbmd0aCAvIGNvbHVtbnMpO1xuICAgIGNvbnN0IHRhYmxlQ29udGVudCA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcm93czsgaSsrKSB7XG4gICAgICBjb25zdCByb3dDb250ZW50ID0gW107XG4gICAgICByb3dDb250ZW50LnB1c2goPGRpdiBrZXk9e1V0aWxzLnN0cmluZ1RvVW5pcXVlSWQoKX0gc3R5bGU9e2NlbGx3aWR0aFN0eWxlfSBjbGFzc05hbWU9e3N0eWxlcy50YWJsaWZ5X291dGVyX2NlbGx9PlxuICAgICAgICB7dGhpcy5wcm9wcy5jb250ZW50LnBvcCgpfTwvZGl2Pik7XG4gICAgICBmb3IgKGxldCBqID0gMTsgaiA8IHRoaXMucHJvcHMuY29sdW1ucyAmJiB0aGlzLnByb3BzLmNvbnRlbnQubGVuZ3RoID4gMDsgaisrKSB7XG4gICAgICAgIGNvbnN0IGtleSA9IFV0aWxzLnN0cmluZ1RvVW5pcXVlSWQoKTtcbiAgICAgICAgcm93Q29udGVudC5wdXNoKDxkaXYga2V5PXtrZXl9IHN0eWxlPXtjZWxsd2lkdGhTdHlsZX0gY2xhc3NOYW1lPXtzdHlsZXMudGFibGlmeV9pbm5lcl9jZWxsfT5cbiAgICAgICAgICB7dGhpcy5wcm9wcy5jb250ZW50LnBvcCgpfTwvZGl2Pik7XG4gICAgICB9XG4gICAgICB0YWJsZUNvbnRlbnQucHVzaCg8ZGl2IGtleT17VXRpbHMuc3RyaW5nVG9VbmlxdWVJZCgpfSBjbGFzc05hbWU9e3N0eWxlcy5mbGV4fT57cm93Q29udGVudH08L2Rpdj4pO1xuICAgIH1cbiAgICByZXR1cm4gKDxkaXY+XG4gICAgICB7dGFibGVDb250ZW50fVxuICAgIDwvZGl2Pik7XG4gIH1cbn1cbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQsIFByb3BUeXBlcyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vQWN0aXZpdHlQcmV2aWV3LmNzcyc7XG5cbmxldCBsb2dnZXIgPSBudWxsO1xuXG4vKipcbiAqIFBlcmNlbnRhZ2UgRmllbGQgY29tcG9uZW50XG4gKiBAYXV0aG9yIE5hZGVqZGEgTWFuZHJlc2N1XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFQUGVyY2VudGFnZUZpZWxkIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIHZhbHVlOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIHRpdGxlQ2xhc3M6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgdmFsdWVDbGFzczogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBMb2dnZXI6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgcmF3TnVtYmVyVG9Gb3JtYXR0ZWRTdHJpbmc6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWRcbiAgfTtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICBjb25zdCB7IExvZ2dlciB9ID0gdGhpcy5wcm9wcztcbiAgICBsb2dnZXIgPSBuZXcgTG9nZ2VyKCdBUCBwZXJjZW50YWdlIGZpZWxkJyk7XG4gICAgbG9nZ2VyLmxvZygnY29uc3RydWN0b3InKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHJhd051bWJlclRvRm9ybWF0dGVkU3RyaW5nIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHBlcmNlbnRhZ2UgPSB0aGlzLnByb3BzLnZhbHVlICE9PSB1bmRlZmluZWQgJiYgdGhpcy5wcm9wcy52YWx1ZSAhPT0gbnVsbFxuICAgICAgPyBgJHtyYXdOdW1iZXJUb0Zvcm1hdHRlZFN0cmluZyh0aGlzLnByb3BzLnZhbHVlLCB0cnVlKX0lYCA6IG51bGw7XG4gICAgcmV0dXJuICg8ZGl2PlxuICAgICAgPHNwYW4gY2xhc3NOYW1lPXt0aGlzLnByb3BzLnRpdGxlQ2xhc3N9Pnt0aGlzLnByb3BzLnRpdGxlfSA8L3NwYW4+XG4gICAgICA8c3BhbiBjbGFzc05hbWU9e2Ake3RoaXMucHJvcHMudmFsdWVDbGFzc30gJHtzdHlsZXMuYWxpZ25SaWdodH1gfT57cGVyY2VudGFnZX08L3NwYW4+XG4gICAgPC9kaXY+KTtcbiAgfVxufVxuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgQVBGaWVsZCBmcm9tICcuL0FQRmllbGQuanN4JztcbmltcG9ydCBBUFBlcmNlbnRhZ2VGaWVsZCBmcm9tICcuL0FQUGVyY2VudGFnZUZpZWxkLmpzeCc7XG5pbXBvcnQgVGFibGlmeSBmcm9tICcuL1RhYmxpZnkuanN4JztcbmltcG9ydCBBY3Rpdml0eUNvbnN0YW50cyBmcm9tICcuLi8uLi8uLi9tb2R1bGVzL3V0aWwvQWN0aXZpdHlDb25zdGFudHMnO1xuaW1wb3J0IEZpZWxkc01hbmFnZXIgZnJvbSAnLi4vLi4vLi4vbW9kdWxlcy9maWVsZC9GaWVsZHNNYW5hZ2VyJztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vQWN0aXZpdHlQcmV2aWV3LmNzcyc7XG5pbXBvcnQgRmVhdHVyZU1hbmFnZXIgZnJvbSAnLi4vLi4vLi4vbW9kdWxlcy91dGlsL0ZlYXR1cmVNYW5hZ2VyJztcbmltcG9ydCBQb3NzaWJsZVZhbHVlc01hbmFnZXIgZnJvbSAnLi4vLi4vLi4vbW9kdWxlcy9maWVsZC9Qb3NzaWJsZVZhbHVlc01hbmFnZXInO1xuXG5sZXQgbG9nZ2VyID0gbnVsbDtcblxuLyoqXG4gKiBBY3Rpdml0eSBQcmV2aWV3IFBlcmNlbnRhZ2UgTGlzdCB0eXBlIHNlY3Rpb25cbiAqIEBhdXRob3IgTmFkZWpkYSBNYW5kcmVzY3VcbiAqL1xuY29uc3QgQVBQZXJjZW50YWdlTGlzdCA9IChsaXN0RmllbGQsIHZhbHVlRmllbGQsIHBlcmNlbnRhZ2VGaWVsZCwgbGlzdFRpdGxlID0gbnVsbCkgPT4gY2xhc3MgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGFjdGl2aXR5OiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gICAgYWN0aXZpdHlGaWVsZHNNYW5hZ2VyOiBQcm9wVHlwZXMuaW5zdGFuY2VPZihGaWVsZHNNYW5hZ2VyKS5pc1JlcXVpcmVkLFxuICAgIGZpZWxkTmFtZUNsYXNzOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGZpZWxkVmFsdWVDbGFzczogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBwZXJjZW50VGl0bGVDbGFzczogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBwZXJjZW50VmFsdWVDbGFzczogUHJvcFR5cGVzLnN0cmluZyxcbiAgICB0YWJsaWZ5OiBQcm9wVHlwZXMuYm9vbCxcbiAgICBjb2x1bW5zOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIGZtUGF0aDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBnZXRJdGVtVGl0bGU6IFByb3BUeXBlcy5mdW5jLFxuICAgIExvZ2dlcjogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICBVdGlsczogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICAgIHRyYW5zbGF0ZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZFxuICB9O1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIGNvbnN0IHsgTG9nZ2VyIH0gPSB0aGlzLnByb3BzO1xuICAgIGxvZ2dlciA9IG5ldyBMb2dnZXIoJ0FQIHBlcmNlbnRhZ2UgbGlzdCcpO1xuICAgIGxvZ2dlci5kZWJ1ZygnY29uc3RydWN0b3InKTtcbiAgfVxuXG4gIGdldEl0ZW1UaXRsZShpdGVtKSB7XG4gICAgaWYgKHRoaXMucHJvcHMuZ2V0SXRlbVRpdGxlKSB7XG4gICAgICByZXR1cm4gdGhpcy5wcm9wcy5nZXRJdGVtVGl0bGUoaXRlbSk7XG4gICAgfVxuICAgIGNvbnN0IG9iaiA9IGl0ZW1bdmFsdWVGaWVsZF07XG4gICAgcmV0dXJuIG9ialtBY3Rpdml0eUNvbnN0YW50cy5ISUVSQVJDSElDQUxfVkFMVUVdID9cbiAgICAgIG9ialtBY3Rpdml0eUNvbnN0YW50cy5ISUVSQVJDSElDQUxfVkFMVUVdIDpcbiAgICAgIFBvc3NpYmxlVmFsdWVzTWFuYWdlci5nZXRPcHRpb25UcmFuc2xhdGlvbihvYmopO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIHRyYW5zbGF0ZSwgVXRpbHMsIGFjdGl2aXR5RmllbGRzTWFuYWdlciwgcGVyY2VudFRpdGxlQ2xhc3MsIGZtUGF0aCwgYWN0aXZpdHksIGNvbHVtbnMsIHRhYmxpZnlcbiAgICAgICwgcGVyY2VudFZhbHVlQ2xhc3MsIGZpZWxkTmFtZUNsYXNzLCBmaWVsZFZhbHVlQ2xhc3MsIExvZ2dlciwgcmF3TnVtYmVyVG9Gb3JtYXR0ZWRTdHJpbmdcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB0aXRsZSA9IGxpc3RUaXRsZSA/IHRyYW5zbGF0ZShsaXN0VGl0bGUpIDogbnVsbDtcbiAgICBsZXQgaXRlbXMgPSBhY3Rpdml0eVtsaXN0RmllbGRdO1xuICAgIGxldCBjb250ZW50ID0gbnVsbDtcbiAgICBsZXQgaXNMaXN0RW5hYmxlZCA9IGFjdGl2aXR5RmllbGRzTWFuYWdlci5pc0ZpZWxkUGF0aEVuYWJsZWQobGlzdEZpZWxkKSA9PT0gdHJ1ZTtcbiAgICBpZiAoZm1QYXRoKSB7XG4gICAgICBpc0xpc3RFbmFibGVkID0gRmVhdHVyZU1hbmFnZXIuaXNGTVNldHRpbmdFbmFibGVkKGZtUGF0aCkgPyBpc0xpc3RFbmFibGVkIDogZmFsc2U7XG4gICAgfVxuICAgIGlmIChpc0xpc3RFbmFibGVkKSB7XG4gICAgICBpZiAoaXRlbXMgJiYgaXRlbXMubGVuZ3RoKSB7XG4gICAgICAgIGl0ZW1zID0gaXRlbXMubWFwKGl0ZW0gPT4gKHtcbiAgICAgICAgICBpdGVtVGl0bGU6IHRoaXMuZ2V0SXRlbVRpdGxlKGl0ZW0pLFxuICAgICAgICAgIHBlcmNlbnRhZ2U6IGl0ZW1bcGVyY2VudGFnZUZpZWxkXVxuICAgICAgICB9KSlcbiAgICAgICAgICAuc29ydCgoYSwgYikgPT4gYS5pdGVtVGl0bGUubG9jYWxlQ29tcGFyZShiLml0ZW1UaXRsZSkpO1xuICAgICAgICBjb250ZW50ID0gaXRlbXMubWFwKCh7IGl0ZW1UaXRsZSwgcGVyY2VudGFnZSB9KSA9PlxuICAgICAgICAgIDxBUFBlcmNlbnRhZ2VGaWVsZFxuICAgICAgICAgICAga2V5PXtVdGlscy5zdHJpbmdUb1VuaXF1ZUlkKGl0ZW1UaXRsZSl9IHRpdGxlPXtpdGVtVGl0bGV9IHZhbHVlPXtwZXJjZW50YWdlfVxuICAgICAgICAgICAgdGl0bGVDbGFzcz17cGVyY2VudFRpdGxlQ2xhc3N9IHZhbHVlQ2xhc3M9e3BlcmNlbnRWYWx1ZUNsYXNzfSB0cmFuc2xhdGU9e3RyYW5zbGF0ZX1cbiAgICAgICAgICAgIExvZ2dlcj17TG9nZ2VyfSByYXdOdW1iZXJUb0Zvcm1hdHRlZFN0cmluZz17cmF3TnVtYmVyVG9Gb3JtYXR0ZWRTdHJpbmd9IC8+XG4gICAgICAgICk7XG4gICAgICAgIGlmICh0YWJsaWZ5KSB7XG4gICAgICAgICAgY29udGVudCA9IDxUYWJsaWZ5IGNvbnRlbnQ9e2NvbnRlbnR9IGNvbHVtbnM9e2NvbHVtbnN9IExvZ2dlcj17TG9nZ2VyfSBVdGlscz17VXRpbHN9IC8+O1xuICAgICAgICB9XG4gICAgICAgIGNvbnRlbnQgPSAoPEFQRmllbGRcbiAgICAgICAgICBrZXk9e2xpc3RGaWVsZH0gdGl0bGU9e3RpdGxlfSB2YWx1ZT17Y29udGVudH0gc2VwYXJhdG9yPXtmYWxzZX0gaW5saW5lPXt0YWJsaWZ5ID09PSB0cnVlfVxuICAgICAgICAgIGZpZWxkTmFtZUNsYXNzPXtmaWVsZE5hbWVDbGFzc30gZmllbGRWYWx1ZUNsYXNzPXtmaWVsZFZhbHVlQ2xhc3N9XG4gICAgICAgICAgdHJhbnNsYXRlPXt0cmFuc2xhdGV9IExvZ2dlcj17TG9nZ2VyfSAvPik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb250ZW50ID0gKDxBUEZpZWxkXG4gICAgICAgICAga2V5PXtsaXN0RmllbGR9IHRpdGxlPXt0aXRsZX0gdmFsdWU9e3RyYW5zbGF0ZSgnTm8gRGF0YScpfSBzZXBhcmF0b3I9e2ZhbHNlfVxuICAgICAgICAgIGlubGluZT17dGFibGlmeSA9PT0gdHJ1ZX1cbiAgICAgICAgICBmaWVsZE5hbWVDbGFzcz17ZmllbGROYW1lQ2xhc3N9IGZpZWxkVmFsdWVDbGFzcz17c3R5bGVzLm5vZGF0YX1cbiAgICAgICAgICB0cmFuc2xhdGU9e3RyYW5zbGF0ZX0gTG9nZ2VyPXtMb2dnZXJ9IC8+KTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxufTtcblxuZXhwb3J0IGRlZmF1bHQgQVBQZXJjZW50YWdlTGlzdDtcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IEZpZWxkUGF0aENvbnN0YW50cyBmcm9tICcuLi8uLi8uLi91dGlscy9GaWVsZFBhdGhDb25zdGFudHMnO1xuaW1wb3J0IEZpZWxkc01hbmFnZXIgZnJvbSAnLi4vLi4vLi4vbW9kdWxlcy9maWVsZC9GaWVsZHNNYW5hZ2VyJztcbmltcG9ydCBGZWF0dXJlTWFuYWdlciBmcm9tICcuLi8uLi8uLi9tb2R1bGVzL3V0aWwvRmVhdHVyZU1hbmFnZXInO1xuaW1wb3J0IFBvc3NpYmxlVmFsdWVzTWFuYWdlciBmcm9tICcuLi8uLi8uLi9tb2R1bGVzL2ZpZWxkL1Bvc3NpYmxlVmFsdWVzTWFuYWdlcic7XG5pbXBvcnQgQVBGaWVsZCBmcm9tICcuLi9jb21wb25lbnRzL0FQRmllbGQuanN4JztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vQWN0aXZpdHlQcmV2aWV3LmNzcyc7XG5cbmxldCBsb2dnZXIgPSBudWxsO1xuXG4vKipcbiAqIEdlbmVyaWMgYWN0aXZpdHkgcHJldmlldyBzZWN0aW9uIGNsYXNzXG4gKiBAYXV0aG9yIE5hZGVqZGEgTWFuZHJlc2N1XG4gKi9cbi8vIGNvbnN0IFNlY3Rpb24gPSAoQ29tcG9zZWRTZWN0aW9uLCBTZWN0aW9uVGl0bGUgPSBudWxsLCB1c2VFbmNhcHN1bGF0ZUhlYWRlciA9IHRydWUsIHNJRCkgPT4gY2xhc3MgZXh0ZW5kcyBDb21wb25lbnQge1xuY29uc3QgU2VjdGlvbiA9IChDb21wb3NlZFNlY3Rpb24sIHBhcmFtcykgPT4gY2xhc3MgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIHRpdGxlRGV0YWlsczogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm9iamVjdF0pLFxuICAgIHNlY3Rpb25QYXRoOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIHRpdGxlQ2xhc3M6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgZ3JvdXBDbGFzczogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBjb21wb3NlZENsYXNzOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGZpZWxkTmFtZUNsYXNzOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGZpZWxkVmFsdWVDbGFzczogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBmbVBhdGg6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgZmllbGRDbGFzczogUHJvcFR5cGVzLnN0cmluZ1xuICB9O1xuXG4gIHN0YXRpYyBjb250ZXh0VHlwZXMgPSB7XG4gICAgYWN0aXZpdHk6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgICBhY3Rpdml0eUZpZWxkc01hbmFnZXI6IFByb3BUeXBlcy5pbnN0YW5jZU9mKEZpZWxkc01hbmFnZXIpLmlzUmVxdWlyZWQsXG4gICAgY29udGFjdEZpZWxkc01hbmFnZXI6IFByb3BUeXBlcy5pbnN0YW5jZU9mKEZpZWxkc01hbmFnZXIpLFxuICAgIGNvbnRhY3RzQnlJZHM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgICBhY3Rpdml0eUZ1bmRpbmdUb3RhbHM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCwgLy8gV2lsbCBjaGFuZ2UgdGhpcyBpZiBBY3Rpdml0eUZ1bmRpbmdUb3RhbHMgaXMgbWlncmF0ZWRcbiAgICAvLyBQcm9wVHlwZXMuaW5zdGFuY2VPZihwYXJhbXMuQWN0aXZpdHlGdW5kaW5nVG90YWxzKS5pc1JlcXVpcmVkLFxuICAgIGFjdGl2aXR5V29ya3NwYWNlOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gICAgYWN0aXZpdHlXU01hbmFnZXI6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgICByZXNvdXJjZVJlZHVjZXI6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgfTtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIHRpdGxlQ2xhc3M6IHN0eWxlcy5zZWN0aW9uX3RpdGxlX2NsYXNzLFxuICAgIGdyb3VwQ2xhc3M6IHN0eWxlcy5zZWN0aW9uX2dyb3VwX2NsYXNzLFxuICAgIGZpZWxkTmFtZUNsYXNzOiBzdHlsZXMuc2VjdGlvbl9maWVsZF9uYW1lLFxuICAgIGZpZWxkVmFsdWVDbGFzczogc3R5bGVzLnNlY3Rpb25fZmllbGRfdmFsdWVcbiAgfTtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICBwYXJhbXMudXNlRW5jYXBzdWxhdGVIZWFkZXIgPSAhcGFyYW1zLnVzZUVuY2Fwc3VsYXRlSGVhZGVyID8gdHJ1ZSA6IHBhcmFtcy51c2VFbmNhcHN1bGF0ZUhlYWRlcjtcbiAgICBsb2dnZXIgPSBuZXcgcGFyYW1zLkxvZ2dlcignQVAgc2VjdGlvbicpO1xuICAgIGxvZ2dlci5kZWJ1ZygnY29uc3RydWN0b3InKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW5kZXJzIGZpZWxkIGRhdGEgaWYgaXQgaXMgZW5hYmxlZCBpbiBGTS4gSWYgcmVuYWJsZWQsIGJ1dCB2YWx1ZSBpcyBub3QgYXZhaWxhYmxlLCB0aGVuIGl0IHdpbGwgbm90IGJlIHJlbmRlcmVkLFxuICAgKiB1bmxlc3MgaXQgaXMgcmVxdWVzdGVkIHZpYSBzaG93SWZOb3RBdmFpbGFibGUgZmxhZy5cbiAgICogQHBhcmFtIHBhdGggZmllbGQgcGF0aFxuICAgKiBAcGFyYW0gc2hvd0lmTm90QXZhaWxhYmxlIGZsYWcgdG8gZm9yY2libHkgZGlzcGxheSB0aGUgZmllbGQgd2hlbiBubyB2YWx1ZSBpcyBwcm92aWRlZFxuICAgKiBAcGFyYW0gTkFPcHRpb25zIG9wdGlvbmFsIHNldCBvZiB2YWx1ZXMgdGhhdCBzaG91bGQgYmUgdHJlYXRlZCBhcyB1bmRlZmluZWRcbiAgICogQHBhcmFtIGlubGluZSBvcHRpb25hbCBmbGFnIHRvIHJlbmRlciBuYW1lIGFuZCB2YWx1ZXMgb24gdGhlIHNhbWUgbGluZVxuICAgKiBAcGFyYW0gcGFyZW50IG9wdGlvbmFsIG9iamVjdCB3aGVyZSB3ZSBsb29rIGZvciB0aGUgcGF0aCAoaW5zdGVhZCBvZiB0aGUgYWN0aXZpdHkgcm9vdCkuXG4gICAqIEBwYXJhbSBmaWVsZHNNYW5hZ2VyIChvcHRpb25hbCkgY3VzdG9tIGZpZWxkcyBtYW5hZ2VyLiBBY3Rpdml0eSBGaWVsZHMgTWFuYWdlciB1c2VkIGJ5IGRlZmF1bHQuXG4gICAqIEByZXR1cm4ge251bGx8QVBGaWVsZH1cbiAgICovXG4gIGJ1aWxkU2ltcGxlRmllbGQocGF0aCwgc2hvd0lmTm90QXZhaWxhYmxlLCBOQU9wdGlvbnM6IFNldCwgaW5saW5lID0gZmFsc2UsIHBhcmVudCA9IG51bGwsIGZpZWxkc01hbmFnZXIgPSBudWxsXG4gICAgLCBvcHRpb25zKSB7XG4gICAgY29uc3Qgb3B0aW9uc18gPSBvcHRpb25zIHx8IHt9O1xuICAgIGNvbnN0IGZtUGF0aCA9IEZpZWxkUGF0aENvbnN0YW50cy5BQ1RJVklUWV9GSUVMRFNfRk1fUEFUSFtwYXRoXTtcbiAgICBmaWVsZHNNYW5hZ2VyID0gZmllbGRzTWFuYWdlciB8fCB0aGlzLmNvbnRleHQuYWN0aXZpdHlGaWVsZHNNYW5hZ2VyO1xuICAgIGlmIChmaWVsZHNNYW5hZ2VyLmlzRmllbGRQYXRoRW5hYmxlZChwYXRoKVxuICAgICAgJiYgKCFmbVBhdGggfHwgRmVhdHVyZU1hbmFnZXIuaXNGTVNldHRpbmdFbmFibGVkKGZtUGF0aCwgZmFsc2UpKSkge1xuICAgICAgY29uc3QgdGl0bGUgPSAob3B0aW9uc18ubm9UaXRsZSA/ICcnIDogZmllbGRzTWFuYWdlci5nZXRGaWVsZExhYmVsVHJhbnNsYXRpb24ocGF0aCkpO1xuICAgICAgbGV0IHZhbHVlUGF0aCA9IHBhdGg7XG4gICAgICBpZiAocGFyZW50KSB7XG4gICAgICAgIGNvbnN0IGZpZWxkUGF0aFBhcnRzID0gcGF0aC5zcGxpdCgnficpO1xuICAgICAgICB2YWx1ZVBhdGggPSBmaWVsZFBhdGhQYXJ0c1tmaWVsZFBhdGhQYXJ0cy5sZW5ndGggLSAxXTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGFsdGVybmF0ZVBhdGggPSBGaWVsZFBhdGhDb25zdGFudHMuQUxURVJOQVRFX1ZBTFVFX1BBVEhbdmFsdWVQYXRoXTtcbiAgICAgIGxldCB2YWx1ZSA9IGZpZWxkc01hbmFnZXIuZ2V0VmFsdWUocGFyZW50IHx8IHRoaXMuY29udGV4dC5hY3Rpdml0eSwgdmFsdWVQYXRoLFxuICAgICAgICBQb3NzaWJsZVZhbHVlc01hbmFnZXIuZ2V0T3B0aW9uVHJhbnNsYXRpb24pO1xuICAgICAgaWYgKCh2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gdW5kZWZpbmVkKSAmJiBhbHRlcm5hdGVQYXRoKSB7XG4gICAgICAgIHZhbHVlID0gZmllbGRzTWFuYWdlci5nZXRWYWx1ZSh0aGlzLmNvbnRleHQuYWN0aXZpdHksIGFsdGVybmF0ZVBhdGgsXG4gICAgICAgICAgUG9zc2libGVWYWx1ZXNNYW5hZ2VyLmdldE9wdGlvblRyYW5zbGF0aW9uKTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGZpZWxkRGVmID0gZmllbGRzTWFuYWdlci5nZXRGaWVsZERlZihwYXRoKTtcbiAgICAgIGlmIChmaWVsZERlZi5maWVsZF90eXBlID09PSBGaWVsZFBhdGhDb25zdGFudHMuRklFTERfVFlQRV9EQVRFKSB7XG4gICAgICAgIHZhbHVlID0gcGFyYW1zLkRhdGVVdGlscy5jcmVhdGVGb3JtYXR0ZWREYXRlKHZhbHVlKTtcbiAgICAgIH0gZWxzZSBpZiAoZmllbGREZWYuZmllbGRfdHlwZSA9PT0gRmllbGRQYXRoQ29uc3RhbnRzLkZJRUxEX1RZUEVfVElNRVNUQU1QKSB7XG4gICAgICAgIC8vIG1hdGNoaW5nIEFQIG9ubGluZSB0byBmb3JtYXQgYXMgZGF0ZSBmb3Igbm93XG4gICAgICAgIHZhbHVlID0gcGFyYW1zLkRhdGVVdGlscy5jcmVhdGVGb3JtYXR0ZWREYXRlKHZhbHVlKTtcbiAgICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkgJiYgIXZhbHVlLmxlbmd0aCkge1xuICAgICAgICB2YWx1ZSA9IG51bGw7XG4gICAgICB9XG4gICAgICB2YWx1ZSA9IE5BT3B0aW9ucyAmJiBOQU9wdGlvbnMuaGFzKHZhbHVlKSA/IG51bGwgOiB2YWx1ZTtcblxuICAgICAgY29uc3QgcmUgPSAvXlxccz8kLzsgLy8gY2hlY2sgZm9yIHdoaXRlc3BhY2VcbiAgICAgIGlmIChyZS50ZXN0KHZhbHVlKSkgdmFsdWUgPSB2YWx1ZS50cmltKCk7IC8vIGNoZWNrIGZvciB3aGl0ZXNwYWNlXG4gICAgICBpZiAodmFsdWUgPT09ICcnIHx8IHZhbHVlID09PSBudWxsKSB7XG4gICAgICAgIHZhbHVlID0gcGFyYW1zLnRyYW5zbGF0ZSgnTm8gRGF0YScpO1xuICAgICAgfVxuICAgICAgaWYgKHNob3dJZk5vdEF2YWlsYWJsZSA9PT0gdHJ1ZSB8fCAodmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZSAhPT0gbnVsbCkpIHtcbiAgICAgICAgY29uc3QgdXNlSW5uZXJIVE1MID0gRmllbGRQYXRoQ29uc3RhbnRzLlJJQ0hfVEVYVF9GSUVMRFMuaGFzKHBhdGgpO1xuICAgICAgICByZXR1cm4gKDxBUEZpZWxkXG4gICAgICAgICAga2V5PXtwYXJhbXMuVXRpbHMuc3RyaW5nVG9VbmlxdWVJZChwYXRoKX0gdGl0bGU9e3RpdGxlfSB2YWx1ZT17dmFsdWV9IHVzZUlubmVySFRNTD17dXNlSW5uZXJIVE1MfVxuICAgICAgICAgIGlubGluZT17aW5saW5lfVxuICAgICAgICAgIHNlcGFyYXRvcj17ZmFsc2V9XG4gICAgICAgICAgZmllbGRDbGFzcz17b3B0aW9uc18uZmllbGRDbGFzcyB8fCB0aGlzLnByb3BzLmZpZWxkQ2xhc3N9XG4gICAgICAgICAgZmllbGROYW1lQ2xhc3M9e3RoaXMucHJvcHMuZmllbGROYW1lQ2xhc3N9XG4gICAgICAgICAgZmllbGRWYWx1ZUNsYXNzPXtvcHRpb25zXy5maWVsZFZhbHVlQ2xhc3MgfHwgdGhpcy5wcm9wcy5maWVsZFZhbHVlQ2xhc3N9XG4gICAgICAgICAgdHJhbnNsYXRlPXtwYXJhbXMudHJhbnNsYXRlfSBMb2dnZXI9e3BhcmFtcy5Mb2dnZXJ9IC8+KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgaWYgKHRoaXMucHJvcHMuc2VjdGlvblBhdGggJiYgIXRoaXMuY29udGV4dC5hY3Rpdml0eUZpZWxkc01hbmFnZXIuaXNGaWVsZFBhdGhFbmFibGVkKHRoaXMucHJvcHMuc2VjdGlvblBhdGgpKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgaWYgKHRoaXMucHJvcHMuZm1QYXRoICYmICFGZWF0dXJlTWFuYWdlci5pc0ZNU2V0dGluZ0VuYWJsZWQodGhpcy5wcm9wcy5mbVBhdGgpKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgY29uc3QgY29tcG9zZWRTZWN0aW9uID0gKDxDb21wb3NlZFNlY3Rpb25cbiAgICAgIHsuLi50aGlzLnByb3BzfSB7Li4udGhpcy5zdGF0ZX0gey4uLnRoaXMuY29udGV4dH0gYnVpbGRTaW1wbGVGaWVsZD17dGhpcy5idWlsZFNpbXBsZUZpZWxkLmJpbmQodGhpcyl9IC8+KTtcbiAgICBpZiAocGFyYW1zLnVzZUVuY2Fwc3VsYXRlSGVhZGVyID09PSBmYWxzZSkge1xuICAgICAgcmV0dXJuIGNvbXBvc2VkU2VjdGlvbjtcbiAgICB9XG4gICAgLy8gVE9ETyBpdGVyYXRpb24gMisgc2VjdGlvbiB0b2dnbGUgKFREQyBiYXNlZCBvbiBkZXNnaW4gKyBWRylcbiAgICByZXR1cm4gKDxkaXYga2V5PXtwYXJhbXMuU2VjdGlvblRpdGxlfSBjbGFzc05hbWU9e3RoaXMucHJvcHMuZ3JvdXBDbGFzc30gaWQ9e3BhcmFtcy5zSUR9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3RoaXMucHJvcHMudGl0bGVDbGFzc30+XG4gICAgICAgIDxzcGFuPntwYXJhbXMudHJhbnNsYXRlKHBhcmFtcy5TZWN0aW9uVGl0bGUpfSA8L3NwYW4+PHNwYW4+e3RoaXMucHJvcHMudGl0bGVEZXRhaWxzfTwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3RoaXMucHJvcHMuY29tcG9zZWRDbGFzc30+XG4gICAgICAgIHtjb21wb3NlZFNlY3Rpb259XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj4pO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTZWN0aW9uO1xuIiwiaW1wb3J0IFRlc3RBUEZpZWxkIGZyb20gJy4vYWN0aXZpdHlQcmV2aWV3L2NvbXBvbmVudHMvVGVzdEFQRmllbGQnO1xuaW1wb3J0IFRlc3RpbmdTZWN0aW9uIGZyb20gJy4vYWN0aXZpdHlQcmV2aWV3L2NvbXBvbmVudHMvVGVzdGluZ1NlY3Rpb24nO1xuaW1wb3J0IENvbnN0YW50cyBmcm9tICcuL3V0aWxzL0NvbnN0YW50cyc7XG5pbXBvcnQgQWN0aXZpdHlDb25zdGFudHMgZnJvbSAnLi9tb2R1bGVzL3V0aWwvQWN0aXZpdHlDb25zdGFudHMnO1xuaW1wb3J0IEZlYXR1cmVNYW5hZ2VyQ29uc3RhbnRzIGZyb20gJy4vbW9kdWxlcy91dGlsL0ZlYXR1cmVNYW5hZ2VyQ29uc3RhbnRzJztcbmltcG9ydCBFcnJvckNvbnN0YW50cyBmcm9tICcuL3V0aWxzL2NvbnN0YW50cy9FcnJvckNvbnN0YW50cyc7XG5pbXBvcnQgRmllbGRzTWFuYWdlciBmcm9tICcuL21vZHVsZXMvZmllbGQvRmllbGRzTWFuYWdlcic7XG5pbXBvcnQgRmllbGRQYXRoQ29uc3RhbnRzIGZyb20gJy4vdXRpbHMvRmllbGRQYXRoQ29uc3RhbnRzJztcbmltcG9ydCBWYWx1ZUNvbnN0YW50cyBmcm9tICcuL3V0aWxzL1ZhbHVlQ29uc3RhbnRzJztcbmltcG9ydCBDdXJyZW5jeVJhdGVzTWFuYWdlciBmcm9tICcuL21vZHVsZXMvdXRpbC9DdXJyZW5jeVJhdGVzTWFuYWdlcic7XG5pbXBvcnQgUG9zc2libGVWYWx1ZXNNYW5hZ2VyIGZyb20gJy4vbW9kdWxlcy9maWVsZC9Qb3NzaWJsZVZhbHVlc01hbmFnZXInO1xuaW1wb3J0IEZlYXR1cmVNYW5hZ2VyIGZyb20gJy4vbW9kdWxlcy91dGlsL0ZlYXR1cmVNYW5hZ2VyJztcbmltcG9ydCBBUExhYmVsIGZyb20gJy4vYWN0aXZpdHkvcHJldmlldy9jb21wb25lbnRzL0FQTGFiZWwuanN4JztcbmltcG9ydCBBUEZpZWxkIGZyb20gJy4vYWN0aXZpdHkvcHJldmlldy9jb21wb25lbnRzL0FQRmllbGQuanN4JztcbmltcG9ydCBUYWJsaWZ5IGZyb20gJy4vYWN0aXZpdHkvcHJldmlldy9jb21wb25lbnRzL1RhYmxpZnkuanN4JztcbmltcG9ydCBBUFBlcmNlbnRhZ2VGaWVsZCBmcm9tICcuL2FjdGl2aXR5L3ByZXZpZXcvY29tcG9uZW50cy9BUFBlcmNlbnRhZ2VGaWVsZC5qc3gnO1xuaW1wb3J0IEFQUGVyY2VudGFnZUxpc3QgZnJvbSAnLi9hY3Rpdml0eS9wcmV2aWV3L2NvbXBvbmVudHMvQVBQZXJjZW50YWdlTGlzdC5qc3gnO1xuaW1wb3J0IFNlY3Rpb24gZnJvbSAnLi9hY3Rpdml0eS9wcmV2aWV3L3NlY3Rpb25zL1NlY3Rpb24uanN4JztcblxuZXhwb3J0IHtcbiAgVGVzdEFQRmllbGQsIFRlc3RpbmdTZWN0aW9uLCBDb25zdGFudHMsIEFjdGl2aXR5Q29uc3RhbnRzLCBGZWF0dXJlTWFuYWdlckNvbnN0YW50cywgRXJyb3JDb25zdGFudHMsXG4gIEN1cnJlbmN5UmF0ZXNNYW5hZ2VyLCBGaWVsZHNNYW5hZ2VyLCBGaWVsZFBhdGhDb25zdGFudHMsIFZhbHVlQ29uc3RhbnRzLCBQb3NzaWJsZVZhbHVlc01hbmFnZXIsIEZlYXR1cmVNYW5hZ2VyLFxuICBBUExhYmVsLCBBUEZpZWxkLCBUYWJsaWZ5LCBBUFBlcmNlbnRhZ2VGaWVsZCwgQVBQZXJjZW50YWdlTGlzdCwgU2VjdGlvblxufTtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBUZXN0QVBGaWVsZCxcbiAgVGVzdGluZ1NlY3Rpb24sXG4gIENvbnN0YW50cyxcbiAgQWN0aXZpdHlDb25zdGFudHMsXG4gIEZlYXR1cmVNYW5hZ2VyQ29uc3RhbnRzLFxuICBFcnJvckNvbnN0YW50cyxcbiAgQ3VycmVuY3lSYXRlc01hbmFnZXIsXG4gIEZpZWxkc01hbmFnZXIsXG4gIEZpZWxkUGF0aENvbnN0YW50cyxcbiAgVmFsdWVDb25zdGFudHMsXG4gIEZlYXR1cmVNYW5hZ2VyLFxuICBBUExhYmVsLFxuICBBUEZpZWxkLFxuICBUYWJsaWZ5LFxuICBBUFBlcmNlbnRhZ2VGaWVsZCxcbiAgQVBQZXJjZW50YWdlTGlzdCxcbiAgU2VjdGlvblxufTtcbiJdLCJuYW1lcyI6WyJUZXN0QVBGaWVsZCIsInRybkxhYmVsIiwidmFsdWUiLCJpbmxpbmUiLCJzZXBhcmF0b3IiLCJuYW1lQ2xhc3MiLCJ2YWx1ZUNsYXNzIiwicHJvcHMiLCJ0cmFuc2xhdGUiLCJhbXBMb2dnZXIiLCJsb2ciLCJ1c2VTZXBhcmF0b3IiLCJkaXNwbGF5Q2xhc3MiLCJmaWVsZENsYXNzIiwic3R5bGVzIiwiYmxvY2siLCJjbGFzc05hbWVzIiwiZmllbGRWYWx1ZUNsYXNzIiwiZGlzcGxheVZhbHVlIiwiQXJyYXkiLCJpc0FycmF5IiwiT2JqZWN0IiwiZm9yRWFjaCIsInB1c2giLCJ2Iiwic29ydCIsImpvaW4iLCJTdHJpbmciLCJ1c2VJbm5lckhUTUwiLCJfX2h0bWwiLCJmaWVsZE5hbWVDbGFzcyIsInRpdGxlIiwiX2dldFZhbHVlIiwiQ29tcG9uZW50IiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwiYW55IiwiYm9vbCIsIm9iamVjdCIsImlzUmVxdWlyZWQiLCJmdW5jIiwiVGVzdGluZ1NlY3Rpb24iLCJCQVNFX1JFU1RfVVJMIiwiQ09OTkVDVElPTl9USU1FT1VUIiwiQ09OTkVDVElPTl9GT1JDRURfVElNRU9VVCIsIlRJTUVPVVRfQ0hFQ0tfSU5URVJWQUwiLCJNQVhfUkVUUllfQVRFTVBUUyIsIkVSUk9SU19UT19SRVRSWSIsIkVSUk9SU19OT19BTVBfU0VSVkVSIiwiQ09OTkVDVElWSVRZX0NIRUNLX0lOVEVSVkFMIiwiV09SS1NQQUNFX1VSTCIsIkxPR0lOX1VSTCIsIkRFU0tUT1BfVVJMIiwiREVTS1RPUF9DVVJSRU5UX1VSTCIsIlNZTkNVUF9SRURJUkVDVF9VUkwiLCJTWU5DVVBfSElTVE9SWV9UQVJHRVQiLCJTWU5DVVBfU1VNTUFSWV9VUkwiLCJBQ1RJVklUWV9QUkVWSUVXX1VSTCIsIkFDVElWSVRZX0VESVRfVVJMIiwiVVBEQVRFX1VSTCIsIlNFVFVQX1VSTCIsIlNFVFRJTkdTX1VSTCIsIkNPTExFQ1RJT05fVVNFUlMiLCJDT0xMRUNUSU9OX1dPUktQQUNFUyIsIkNPTExFQ1RJT05fVEVBTU1FTUJFUlMiLCJDT0xMRUNUSU9OX0NMSUVOVF9TRVRUSU5HUyIsIkNPTExFQ1RJT05fR0xPQkFMX1NFVFRJTkdTIiwiQ09MTEVDVElPTl9BQ1RJVklUSUVTIiwiQ09MTEVDVElPTl9GSUVMRFMiLCJDT0xMRUNUSU9OX1BPU1NJQkxFX1ZBTFVFUyIsIkNPTExFQ1RJT05fU1lOQ1VQX0xPRyIsIkNPTExFQ1RJT05fTEFOR1MiLCJDT0xMRUNUSU9OX1dTX1NFVFRJTkdTIiwiQ09MTEVDVElPTl9DVVJSRU5DWV9SQVRFUyIsIkNPTExFQ1RJT05fRkVBVFVSRV9NQU5BR0VSIiwiQ09MTEVDVElPTl9DT05UQUNUUyIsIkNPTExFQ1RJT05fUkVTT1VSQ0VTIiwiQ09MTEVDVElPTl9SRVBPU0lUT1JZIiwiQ09MTEVDVElPTl9HQVpFVFRFRVIiLCJDT0xMRUNUSU9OX0NBTEVOREFSUyIsIkNPTExFQ1RJT05fQ0hBTkdFU0VUUyIsIkdBWkVUVEVFUl9ESVNUQU5DRV9ESVZJREUiLCJEQl9GSUxFX1BSRUZJWCIsIkRCX0ZJTEVfRVhURU5TSU9OIiwiREJfQ09NTU9OX0RBVEFTVE9SRV9PUFRJT05TIiwiYXV0b2xvYWQiLCJjb3JydXB0QWxlcnRUaHJlc2hvbGQiLCJEQl9BVVRPQ09NUEFDVF9JTlRFUlZBTF9NSUxJU0VDT05EUyIsIkRCX0RFRkFVTFRfUVVFUllfTElNSVQiLCJMQU5HVUFHRV9FTkdMSVNIIiwiRlNfTE9DQUxFU19ESVJFQ1RPUlkiLCJMQU5HVUFHRV9NQVNURVJfVFJBTlNMQVRJT05TX0ZJTEUiLCJMQU5HVUFHRV9UUkFOU0xBVElPTlNfRklMRSIsIkxBTkdVQUdFX05FV19UUkFOU0xBVElPTlNfTVVTVF9TWU5DIiwiQVNBUl9ESVIiLCJBUFBfRElSRUNUT1JZIiwiVEVTVF9ESVJFQ1RPUlkiLCJTVEFUSUNfRElSIiwiSU1BR0VTX0RJUiIsIkRPQ19JQ09OUyIsIkRCX1NUQVRJQ19ESVIiLCJNSUdSQVRJT05TX0RJUiIsIkhBU0hfSVRFUkFUSU9OUyIsIkRJR0VTVF9BTEdPUklUSE1fU0hBMSIsIkRJR0VTVF9BTEdPUklUSE1fU0hBMjU2IiwiQUNUSVZJVFlfRURJVCIsIkFDVElWSVRZX1ZJRVciLCJTWU5DVVBfRk9SQ0VfREFZUyIsIlNZTkNVUF9CRVNUX0JFRk9SRV9EQVlTIiwiU1lOQ1VQX05PX0RBVEUiLCJTWU5DVVBfVFlQRV9UUkFOU0xBVElPTlMiLCJTWU5DVVBfVFlQRV9VU0VSUyIsIlNZTkNVUF9UWVBFX0FTU0VUUyIsIlNZTkNVUF9UWVBFX1dPUktTUEFDRVMiLCJTWU5DVVBfVFlQRV9HUyIsIlNZTkNVUF9UWVBFX0VYQ0hBTkdFX1JBVEVTIiwiU1lOQ1VQX1RZUEVfRkVBVFVSRV9NQU5BR0VSIiwiU1lOQ1VQX1RZUEVfV09SS1NQQUNFX01FTUJFUlMiLCJTWU5DVVBfVFlQRV9BTExfRklFTERTIiwiU1lOQ1VQX1RZUEVfQUNUSVZJVElFU19QVUxMIiwiU1lOQ1VQX1RZUEVfQUNUSVZJVElFU19QVVNIIiwiU1lOQ1VQX1RZUEVfQUNUSVZJVFlfRklFTERTIiwiU1lOQ1VQX1RZUEVfQUNUSVZJVFlfRklFTERTX1NUUlVDVFVSQUxfQ0hBTkdFUyIsIlNZTkNVUF9UWVBFX0NPTlRBQ1RTX1BVTEwiLCJTWU5DVVBfVFlQRV9DT05UQUNUU19QVVNIIiwiU1lOQ1VQX1RZUEVfQUNUSVZJVFlfUE9TU0lCTEVfVkFMVUVTIiwiU1lOQ1VQX1RZUEVfQ09OVEFDVF9GSUVMRFMiLCJTWU5DVVBfVFlQRV9DT05UQUNUX0ZJRUxEU19TVFJVQ1RVUkFMX0NIQU5HRVMiLCJTWU5DVVBfVFlQRV9DT05UQUNUX1BPU1NJQkxFX1ZBTFVFUyIsIlNZTkNVUF9UWVBFX1JFU09VUkNFU19QVUxMIiwiU1lOQ1VQX1RZUEVfUkVTT1VSQ0VTX1BVU0giLCJTWU5DVVBfVFlQRV9SRVNPVVJDRV9GSUVMRFMiLCJTWU5DVVBfVFlQRV9SRVNPVVJDRV9GSUVMRFNfU1RSVUNUVVJBTF9DSEFOR0VTIiwiU1lOQ1VQX1RZUEVfUkVTT1VSQ0VfUE9TU0lCTEVfVkFMVUVTIiwiU1lOQ1VQX1RZUEVfQ09NTU9OX1BPU1NJQkxFX1ZBTFVFUyIsIlNZTkNVUF9UWVBFX1dPUktTUEFDRV9TRVRUSU5HUyIsIlNZTkNVUF9UWVBFX01BUF9USUxFUyIsIlNZTkNVUF9UWVBFX0dBWkVUVEVFUiIsIlNZTkNVUF9UWVBFX0NBTEVOREFSUyIsIlNZTkNVUF9TVEFUVVNfU1VDQ0VTUyIsIlNZTkNVUF9TVEFUVVNfRkFJTCIsIlNZTkNVUF9TVEFUVVNfUEFSVElBTCIsIlNZTkNVUF9TVEFUVVNfQ0FOQ0VMRUQiLCJTWU5DVVBfU1lOQ19SRVFVRVNURURfQVQiLCJTWU5DVVBfU1lOQ19SRVFVRVNURURfQlkiLCJTWU5DVVBfREFURVRJTUVfRklFTEQiLCJTWU5DVVBfRElGRl9MRUZUT1ZFUiIsIlNZTkNVUF9ERVBFTkRFTkNZX0NIRUNLX0lOVEVSVkFMIiwiU1lOQ1VQX0RFVEFJTFNfU1lOQ0VEIiwiU1lOQ1VQX0RFVEFJTFNfVU5TWU5DRUQiLCJTWU5DVVBfUkVTT1VSQ0VfUFVMTF9CQVRDSF9TSVpFIiwiU1lOQ1VQX0FDVElWSVRJRVNfUFVMTF9CQVRDSF9TSVpFIiwiU1lOQ1VQX0NPTlRBQ1RTX1BVTExfQkFUQ0hfU0laRSIsIkFDVElWSVRZX1NUQVRVU19EUkFGVCIsIkFDVElWSVRZX1NUQVRVU19VTlZBTElEQVRFRCIsIkFDVElWSVRZX1NUQVRVU19WQUxJREFURUQiLCJDVVJSRU5DWV9IT1VSIiwiREVGQVVMVF9DVVJSRU5DWSIsIlJBVEVfU0FNRV9DVVJSRU5DWSIsIlJBVEVfQ1VSUkVOQ1lfTk9UX0ZPVU5EIiwiQ1VSUkVOQ1lfUEFJUiIsIlZFUlNJT05fUEFUVEVSTiIsIlZFUlNJT05fUEFUVEVSTl9HUk9VUFNfVE9fRVhUUkFDVCIsIkFNUF9DT1VOVFJZX0xPR08iLCJBU1NFVFNfRElSRUNUT1JZIiwiQkFTRV82NF9QTkdfUFJFRklYIiwiVFJBTlNQQVJFTlRfRkxBRyIsIkhFTFBfUERGX0ZJTEVOQU1FIiwiSEVMUF9ESVIiLCJFTkRTX1dJVEhfUFVOQ1RVQVRJT05fUkVHRVgiLCJNQVBfVElMRVNfRElSIiwiVElMRVNfWklQX0ZJTEUiLCJNQVBfTUFSS0VSX0lNQUdFIiwiTUFQX01BUktFUl9TSEFET1ciLCJNQVBfTUFSS0VSX0NJUkNMRV9SRUQiLCJNQVBfTUFSS0VSX0NJUkNMRV9HUkVFTiIsIlBPTFlHT05fQkFTRV9DT0xPUiIsIkRHX0NPTVBBTllfTkFNRSIsIkRHX0FERFJFU1NfMSIsIkRHX0FERFJFU1NfMiIsIkRHX0NPTlRBQ1RfSU5GTyIsIkxPR19ESVIiLCJMT0dfRklMRV9OQU1FIiwiTE9HX0ZJTEVfRVhURU5TSU9OIiwiTUVTU0FHRV9USU1FT1VUIiwiTUVTU0FHRV9ESVNBUFBFQVJfVElNRU9VVCIsIk1FU1NBR0VfQ0hFQ0tfSU5URVJWQUwiLCJNRVNTQUdFX0FOSU1BVElPTl9EVVJBVElPTiIsIklOVEVSTkFMX0RBVEVfRk9STUFUIiwiTUlOX1NVUFBPUlRFRF9ZRUFSIiwiTUFYX1NVUFBPUlRFRF9ZRUFSIiwiVVBEQVRFU19ESVIiLCJDT05URU5UX0RJU1BPU0lUSU9OX0hFQURFUiIsIlVQREFURV9UTVBfRklMRSIsIk9USEVSX0lEIiwiTlJfU1lOQ19ISVNUT1JZX0VOVFJJRVMiLCJOUl9MT0dfRklMRVMiLCJPTERfU1lOQ19MT0dTX0RVUkFUSU9OX0lTT184NjAxIiwiTlJfT0xEX1NZTkNfTE9HU19UT19LRUVQX01JTklNVU0iLCJNQVNURVJfQlJBTkNIIiwiREVWRUxPUF9CUkFOQ0giLCJSRUxFQVNFX0JSQU5DSF9SRUdFWCIsIlJFTEVBU0VfQlJBTkNIRVMiLCJESVNBQkxFX0NIQU5HRUxPR1MiLCJtb2R1bGUiLCJmcmVlemUiLCJQVUJMSUNfVklFV19DSEFOR0VfUEFTU1dPUkQiLCJQVUJMSUNfVklFV19UUk9VQkxFX1NJR05fSU4iLCJBQ1RJVklUWV9ERUxJVkVSWV9SQVRFIiwiQUNUSVZJVFlfUFJPSkVDVF9JRF9BTkRfUExBTk5JTkciLCJBQ1RJVklUWV9EVVJBVElPTl9PRl9QUk9KRUNUIiwiQUNUSVZJVFlfVEVBTV9MRUFERVIiLCJBQ1RJVklUWV9TQU1FX0FTX1BST1BPU0VEX1NUQVJUX0RBVEUiLCJBQ1RJVklUWV9TQU1FX0FTX1BST1BPU0VEX0FQUFJPVkFMX0RBVEUiLCJBQ1RJVklUWV9JREVOVElGSUNBVElPTiIsIkFDVElWSVRZX0xBU1RfVVBEQVRFRF9CWSIsIkFDVElWSVRZX0xBU1RfVVBEQVRFRF9PTiIsIkFDVElWSVRZX0ZVTkRJTkciLCJBRl9GVU5ESU5HX0ZVTkRJTkdHUk9VUF9GVU5ESU5HSVRFTSIsIkFDVElWSVRZX1NFQ1RPUlMiLCJBQ1RJVklUWV9QUklNQVJZX1NFQ1RPUlMiLCJBQ1RJVklUWV9TRUNPTkRBUllfU0VDVE9SUyIsIkFDVElWSVRZX1NUUlVDVFVSRVMiLCJBQ1RJVklUWV9TVFJVQ1RVUkVTX0FERF9TVFJVQ1RVUkUiLCJBQ1RJVklUWV9PUkdBTklaQVRJT05TIiwiQUNUSVZJVFlfT1JHQU5JWkFUSU9OU19ET05PUl9PUkdBTklaQVRJT04iLCJBQ1RJVklUWV9PUkdBTklaQVRJT05TX0JFTkVGSUNJQVJZX0FHRU5DWSIsIkFDVElWSVRZX09SR0FOSVpBVElPTlNfQ09OVFJBQ1RJTkdfQUdFTkNZIiwiQUNUSVZJVFlfT1JHQU5JWkFUSU9OU19FWEVDVVRJTkdfQUdFTkNZIiwiQUNUSVZJVFlfT1JHQU5JWkFUSU9OU19JTVBMRU1FTlRJTkdfQUdFTkNZIiwiQUNUSVZJVFlfT1JHQU5JWkFUSU9OU19SRUdJT05BTF9HUk9VUCIsIkFDVElWSVRZX09SR0FOSVpBVElPTlNfUkVMQVRFRF9HT1ZFUk5NRU5UX09SR0FOSVpBVElPTiIsIkFDVElWSVRZX09SR0FOSVpBVElPTlNfU0VDVE9SX0dST1VQIiwiQUREX0ZVTkRJTkdfQVVUTyIsIkFDVElWSVRZX09SR0FOSVpBVElPTlNfQkVORUZJQ0lBUllfQUdFTkNZX0FERF9GVU5ESU5HX0FVVE8iLCJBQ1RJVklUWV9PUkdBTklaQVRJT05TX0NPTlRSQUNUSU5HX0FHRU5DWV9BRERfRlVORElOR19BVVRPIiwiQUNUSVZJVFlfT1JHQU5JWkFUSU9OU19ET05PUl9PUkdBTklaQVRJT05fQUREX0ZVTkRJTkdfQVVUTyIsIkFDVElWSVRZX09SR0FOSVpBVElPTlNfRVhFQ1VUSU5HX0FHRU5DWV9BRERfRlVORElOR19BVVRPIiwiQUNUSVZJVFlfT1JHQU5JWkFUSU9OU19JTVBMRU1FTlRJTkdfQUdFTkNZX0FERF9GVU5ESU5HX0FVVE8iLCJBQ1RJVklUWV9PUkdBTklaQVRJT05TX1JFR0lPTkFMX0dST1VQX0FERF9GVU5ESU5HX0FVVE8iLCJBQ1RJVklUWV9PUkdBTklaQVRJT05TX1JFU1BPTlNJQkxFX09SR0FOSVpBVElPTl9BRERfRlVORElOR19BVVRPIiwiQUNUSVZJVFlfT1JHQU5JWkFUSU9OU19TRUNUT1JfR1JPVVBfQUREX0ZVTkRJTkdfQVVUTyIsIkFDVElWSVRZX0ZVTkRJTkdfU0VBUkNIIiwiQUNUSVZJVFlfRlVORElOR19TRUFSQ0hfT1JHQU5JWkFUSU9OIiwiQUNUSVZJVFlfRlVORElOR19TRUxFQ1RfT1JHX1RZUEUiLCJBQ1RJVklUWV9QUk9HUkFNIiwiQUNUSVZJVFlfUExBTk5JTkciLCJBQ1RJVklUWV9DT05UQUNUIiwiQUNUSVZJVFlfRE9DVU1FTlRTX0FERF9ET0NVTUVOVCIsIkFDVElWSVRZX0RPQ1VNRU5UU19BRERfV0VCTElOSyIsIkFDVElWSVRZX0lTU1VFU19BRERfSVNTVUUiLCJBQ1RJVklUWV9JU1NVRVNfREVMRVRFX0lTU1VFIiwiQUNUSVZJVFlfSVNTVUVTX0FERF9NRUFTVVJFIiwiQUNUSVZJVFlfSVNTVUVTX0RFTEVURV9NRUFTVVJFIiwiQUNUSVZJVFlfSVNTVUVTX0FERF9BQ1RPUiIsIkFDVElWSVRZX0lTU1VFU19ERUxFVEVfQUNUT1IiLCJBQ1RJVklUWV9ESVNCVVJTRU1FTlRTX0ZVTkRJTkdfRkxPV1NfT1JHUk9MRV9BRERfSU1QTEVNRU5USU5HX0FHRU5DWSIsIkFDVElWSVRZX0RJU0JVUlNFTUVOVFNfRlVORElOR19GTE9XU19PUkdST0xFX0FERF9DT05UUkFDVElOR19BR0VOQ1kiLCJBQ1RJVklUWV9ESVNCVVJTRU1FTlRTX0ZVTkRJTkdfRkxPV1NfT1JHUk9MRV9BRERfQkVORUZJQ0lBUllfQUdFTkNZIiwiQUNUSVZJVFlfRElTQlVSU0VNRU5UU19GVU5ESU5HX0ZMT1dTX09SR1JPTEVfQUREX0RPTk9SX09SR0FOSVpBVElPTiIsIkFDVElWSVRZX0RJU0JVUlNFTUVOVFNfRlVORElOR19GTE9XU19PUkdST0xFX0FERF9FWEVDVVRJTkdfQUdFTkNZIiwiQUNUSVZJVFlfRElTQlVSU0VNRU5UU19GVU5ESU5HX0ZMT1dTX09SR1JPTEVfQUREX1JFR0lPTkFMX0dST1VQIiwiQUNUSVZJVFlfRElTQlVSU0VNRU5UU19GVU5ESU5HX0ZMT1dTX09SR1JPTEVfQUREX1JFU1BPTlNJQkxFX09SR0FOSVpBVElPTiIsIkFDVElWSVRZX0RJU0JVUlNFTUVOVFNfRlVORElOR19GTE9XU19PUkdST0xFX0FERF9TRUNUT1JfR1JPVVAiLCJBQ1RJVklUWV9DT01NSVRNRU5UU19GVU5ESU5HX0ZMT1dTX09SR1JPTEVfQUREX0lNUExFTUVOVElOR19BR0VOQ1kiLCJBQ1RJVklUWV9DT01NSVRNRU5UU19GVU5ESU5HX0ZMT1dTX09SR1JPTEVfQUREX0NPTlRSQUNUSU5HX0FHRU5DWSIsIkFDVElWSVRZX0NPTU1JVE1FTlRTX0ZVTkRJTkdfRkxPV1NfT1JHUk9MRV9BRERfQkVORUZJQ0lBUllfQUdFTkNZIiwiQUNUSVZJVFlfQ09NTUlUTUVOVFNfRlVORElOR19GTE9XU19PUkdST0xFX0FERF9ET05PUl9PUkdBTklaQVRJT04iLCJBQ1RJVklUWV9DT01NSVRNRU5UU19GVU5ESU5HX0ZMT1dTX09SR1JPTEVfQUREX0VYRUNVVElOR19BR0VOQ1kiLCJBQ1RJVklUWV9DT01NSVRNRU5UU19GVU5ESU5HX0ZMT1dTX09SR1JPTEVfQUREX1JFR0lPTkFMX0dST1VQIiwiQUNUSVZJVFlfQ09NTUlUTUVOVFNfRlVORElOR19GTE9XU19PUkdST0xFX0FERF9SRVNQT05TSUJMRV9PUkdBTklaQVRJT04iLCJBQ1RJVklUWV9DT01NSVRNRU5UU19GVU5ESU5HX0ZMT1dTX09SR1JPTEVfQUREX1NFQ1RPUl9HUk9VUCIsIkFDVElWSVRZX0VYUEVORElUVVJFU19GVU5ESU5HX0ZMT1dTX09SR1JPTEVfQUREX0lNUExFTUVOVElOR19BR0VOQ1kiLCJBQ1RJVklUWV9FWFBFTkRJVFVSRVNfRlVORElOR19GTE9XU19PUkdST0xFX0FERF9DT05UUkFDVElOR19BR0VOQ1kiLCJBQ1RJVklUWV9FWFBFTkRJVFVSRVNfRlVORElOR19GTE9XU19PUkdST0xFX0FERF9CRU5FRklDSUFSWV9BR0VOQ1kiLCJBQ1RJVklUWV9FWFBFTkRJVFVSRVNfRlVORElOR19GTE9XU19PUkdST0xFX0FERF9ET05PUl9PUkdBTklaQVRJT04iLCJBQ1RJVklUWV9FWFBFTkRJVFVSRVNfRlVORElOR19GTE9XU19PUkdST0xFX0FERF9FWEVDVVRJTkdfQUdFTkNZIiwiQUNUSVZJVFlfRVhQRU5ESVRVUkVTX0ZVTkRJTkdfRkxPV1NfT1JHUk9MRV9BRERfUkVHSU9OQUxfR1JPVVAiLCJBQ1RJVklUWV9FWFBFTkRJVFVSRVNfRlVORElOR19GTE9XU19PUkdST0xFX0FERF9SRVNQT05TSUJMRV9PUkdBTklaQVRJT04iLCJBQ1RJVklUWV9FWFBFTkRJVFVSRVNfRlVORElOR19GTE9XU19PUkdST0xFX0FERF9TRUNUT1JfR1JPVVAiLCJNVEVGX1BST0pFQ1RJT05TIiwiTVRFRl9QUk9KRUNUSU9OU19BTU9VTlQiLCJNVEVGX1BST0pFQ1RJT05TX0NVUlJFTkNZIiwiTVRFRl9QUk9KRUNUSU9OU19QUk9KRUNUSU9OIiwiTVRFRl9QUk9KRUNUSU9OU19EQVRFIiwiQUNUSVZJVFlfQlVER0VUIiwiQUNUSVZJVFlfU1RBVFVTIiwiU1RBVFVTX1JFQVNPTiIsIkZJTkFOQ0lBTF9JTlNUUlVNRU5UIiwiVFlQRV9PRl9JTVBMRU1FTlRBVElPTiIsIk9CSkVDVElWRSIsIlJFU1VMVFMiLCJCVURHRVRfQ09ERV9QUk9KRUNUX0lEIiwiQUNUVUFMX0FQUFJPVkFMX0RBVEUiLCJGVU5ESU5HUyIsIkZVTkRJTkdfRE9OT1JfT1JHX0lEIiwiSVNfRFJBRlQiLCJPUkdfUk9MRV9PUkdfSUQiLCJBRERJVElPTkFMX0lORk8iLCJQUklNQVJZX1NFQ1RPUlMiLCJTRUNPTkRBUllfU0VDVE9SUyIsIlRFUlRJQVJZX1NFQ1RPUlMiLCJUQUdfU0VDVE9SUyIsIlNFQ1RPUiIsIlNFQ1RPUl9QRVJDRU5UQUdFIiwiRklOQU5DSU5HX0lOU1RSVU1FTlQiLCJNT0RBTElUSUVTIiwiTElORV9NSU5JU1RSWV9SQU5LIiwiR09WRVJOTUVOVF9BR1JFRU1FTlRfTlVNQkVSIiwiRlVORElOR19TVEFUVVMiLCJMT0NBVElPTlMiLCJMT0NBVElPTiIsIkxPQ0FUSU9OX1BFUkNFTlRBR0UiLCJJTVBMRU1FTlRBVElPTl9MT0NBVElPTiIsIklNUExFTUVOVEFUSU9OX0xFVkVMIiwiQVBQUk9WQUxfU1RBVFVTIiwiQVBQUk9WRURfQlkiLCJBUFBST1ZBTF9EQVRFIiwiVFlQRV9PRl9BU1NJU1RBTkNFIiwiRVhQRU5ESVRVUkVfQ0xBU1MiLCJGVU5ESU5HX0RFVEFJTFMiLCJNT0RFX09GX1BBWU1FTlQiLCJGVU5ESU5HX0NMQVNTSUZJQ0FUSU9OX0RBVEUiLCJBR1JFRU1FTlQiLCJET05PUl9PQkpFQ1RJVkUiLCJDT05ESVRJT05TIiwiQUdSRUVNRU5UX0NPREUiLCJBR1JFRU1FTlRfVElUTEUiLCJQUk9KRUNUX0NBVEVHT1JZIiwiUFJPSkVDVF9JTVBMRU1FTlRJTkdfVU5JVCIsIk9SR0FOSVpBVElPTiIsIlBFUkNFTlRBR0UiLCJBTVBfT1JHQU5JWkFUSU9OX1JPTEVfSUQiLCJST0xFIiwiRVhFQ1VUSU5HX0FHRU5DWSIsIkNPTlRSQUNUSU5HX0FHRU5DWSIsIkJFTkVGSUNJQVJZX0FHRU5DWSIsIklNUExFTUVOVElOR19BR0VOQ1kiLCJSRVNQT05TSUJMRV9PUkdBTklaQVRJT04iLCJET05PUl9PUkdBTklaQVRJT04iLCJSRUdJT05BTF9HUk9VUCIsIlNFQ1RPUl9HUk9VUCIsIkJVREdFVFMiLCJCVURHRVRfQ09ERSIsIkJVREdFVF9PUkdBTklaQVRJT05fQ09ERSIsIkFSQ0hJVkVEIiwiVFJBTlNBQ1RJT05fREFURSIsIlRSQU5TQUNUSU9OX1RZUEUiLCJDT01NSVRNRU5UUyIsIkRJU0JVUlNFTUVOVFMiLCJFWFBFTkRJVFVSRVMiLCJFU1RJTUFURURfRElTQlVSU0VNRU5UUyIsIlRSQU5TQUNUSU9OX0FNT1VOVCIsIkFESlVTVE1FTlRfVFlQRSIsIkFDVFVBTF9TVEFSVF9EQVRFIiwiUFJPUE9TRURfU1RBUlRfREFURSIsIkFDVFVBTF9DT01QTEVUSU9OX0RBVEUiLCJDT05UUkFDVElOR19EQVRFIiwiRElTQlVSU0VNRU5UX0RBVEUiLCJQUk9QT1NFRF9BUFBST1ZBTF9EQVRFIiwiT1JJR0lOQUxfQ09NUExFVElPTl9EQVRFIiwiUFJPUE9TRURfQ09NUExFVElPTl9EQVRFIiwiRklOQUxfREFURV9GT1JfRElTQlVSU0VNRU5UUyIsIkZJTkFMX0RBVEVfRk9SX0NPTlRSQUNUSU5HIiwiRUZGRUNUSVZFX0ZVTkRJTkdfREFURSIsIkZVTkRJTkdfQ0xPU0lOR19EQVRFIiwiUkFUSUZJQ0FUSU9OX0RBVEUiLCJNQVRVUklUWSIsIkxBU1RfQVVESVRfREFURSIsIlNJR05BVFVSRV9EQVRFIiwiSFVNQU5JVEFSSUFOX0FJRCIsIkRJU0FTVEVSX1JFU1BPTlNFIiwiUFJPR1JBTSIsIlBST0dSQU1fUEVSQ0VOVEFHRSIsIlBST0dSQU1fU0VUVElOR1MiLCJOQVRJT05BTF9QTEFOX09CSkVDVElWRSIsIlBSSU1BUllfUFJPR1JBTVMiLCJTRUNPTkRBUllfUFJPR1JBTVMiLCJURVJUSUFSX1BST0dSQU1TIiwiR09WRVJOTUVOVF9BUFBST1ZBTF9QUk9DRURVUkVTIiwiSk9JTlRfQ1JJVEVSSUEiLCJURUFNIiwiUkVKRUNURURfSUQiLCJJTlRFUk5BTF9JRCIsIkFNUF9JRCIsIlBST0pFQ1RfVElUTEUiLCJERVNDUklQVElPTiIsIk1PRElGSUVEX0JZIiwiTU9ESUZJRURfT04iLCJDUkVBVEVEX0JZIiwiQ1JFQVRFRF9PTiIsIkxBU1RfSU1QT1JURURfQlkiLCJDTElFTlRfQ0hBTkdFX0lEIiwiQ0xJRU5UX0NSRUFURURfT04iLCJDTElFTlRfVVBEQVRFRF9PTiIsIklTX1BVU0hFRCIsIkFDVElWSVRZX0dST1VQIiwiVkVSU0lPTiIsIlBST0pFQ1RfQ09NTUVOVFMiLCJMRVNTT05TX0xFQVJORUQiLCJQUk9KRUNUX0lNUEFDVCIsIkFDVElWSVRZX1NVTU1BUlkiLCJDT05ESVRJT05BTElUSUVTIiwiUFJPSkVDVF9NQU5BR0VNRU5UIiwiQV9DX0NIQVBURVIiLCJDUklTX05VTUJFUiIsIklBVElfSURFTlRJRklFUiIsIkFDVElWSVRZX0lOVEVSTkFMX0lEUyIsIkhJRVJBUkNISUNBTF9WQUxVRSIsIkhJRVJBUkNISUNBTF9WQUxVRV9QQVJUUyIsIkhJRVJBUkNISUNBTF9WQUxVRV9ERVBUSCIsIlBQQ19BTU9VTlQiLCJSUENfQU1PVU5UIiwiUFBDX0FOTlVBTF9CVURHRVRTIiwiQU1PVU5UIiwiQ1VSUkVOQ1kiLCJGVU5ESU5HX0RBVEUiLCJDT01QT05FTlRTIiwiVE9UQUxfTlVNQkVSX09GX0ZVTkRJTkdfU09VUkNFUyIsIlNPVVJDRV9ST0xFIiwiQU1QX0ZVTkRJTkdfSUQiLCJJU1NVRVMiLCJJU1NVRV9EQVRFIiwiSVNTVUVfTkFNRSIsIk1FQVNVUkVTIiwiTUVBU1VSRV9OQU1FIiwiTUVBU1VSRV9EQVRFIiwiQUNUT1JTIiwiQUNUT1JfTkFNRSIsIlNUUlVDVFVSRVMiLCJTVFJVQ1RVUkVTX1RJVExFIiwiU1RSVUNUVVJFU19ERVNDUklQVElPTiIsIlNUUlVDVFVSRVNfTEFUSVRVREUiLCJTVFJVQ1RVUkVTX0xPTkdJVFVERSIsIlNUUlVDVFVSRVNfQ09MT1IiLCJTVFJVQ1RVUkVTX0xBVCIsIlNUUlVDVFVSRVNfTE5HIiwiU1RSVUNUVVJFU19TSEFQRSIsIlNUUlVDVFVSRVNfUE9JTlQiLCJTVFJVQ1RVUkVTX1BPTFlHT04iLCJTVFJVQ1RVUkVTX1BPTFlMSU5FIiwiU1RSVUNUVVJFU19DT09SRElOQVRFUyIsIkNPTVBPTkVOVF9UWVBFIiwiQ09NUE9ORU5UX1RJVExFIiwiQ09NUE9ORU5UX0ZVTkRJTkciLCJDT01QT05FTlRfREVTQ1JJUFRJT04iLCJDT01QT05FTlRfT1JHQU5JWkFUSU9OIiwiRlVORElOR19BTU9VTlRfSUQiLCJFWFRSQV9JTkZPIiwiVkFMVUUiLCJBQ1JPTllNIiwiVFlQRV9PRl9DT09QRVJBVElPTiIsIkFOTlVBTF9QUk9KRUNUX0JVREdFVF9JRCIsIlRZUEUiLCJZRUFSIiwiR1JPVVBfVkVSU0lPTkVEX0ZVTkRJTkciLCJBQ1RJVkVfTElTVCIsIkFDVElWRSIsIkRFTEVHQVRFRF9DT09QRVJBVElPTiIsIkRFTEVHQVRFRF9QQVJUTkVSIiwiRklOQU5DSU5HX0lEIiwiRElTQlVSU0VNRU5UX09SREVSX0lEIiwiUExFREdFIiwiQ0FQSVRBTF9TUEVORElOR19QRVJDRU5UQUdFIiwiUkVQT1JUSU5HX0RBVEUiLCJSRUNJUElFTlRfUk9MRSIsIlJFQ0lQSUVOVF9PUkdBTklaQVRJT04iLCJURU1QT1JBTF9JRCIsIk1JTklTVFJZX0NPREUiLCJQUk9KRUNUX0NPREUiLCJGWSIsIklORElSRUNUX09OX0JVREdFVCIsIklNUExFTUVOVEFUSU9OX0xFVkVMU19FWFRSQV9JTkZPIiwiSU1QTEVNRU5UQVRJT05fTE9DQVRJT05fRVhUUkFfSU5GTyIsIkRPTk9SX0NPTlRBQ1QiLCJQUk9KRUNUX0NPT1JESU5BVE9SX0NPTlRBQ1QiLCJTRUNUT1JfTUlOSVNUUllfQ09OVEFDVCIsIk1PRkVEX0NPTlRBQ1QiLCJJTVBMRU1FTlRJTkdfRVhFQ1VUSU5HX0FHRU5DWV9DT05UQUNUIiwiQ09OVEFDVCIsIk9SR0FOSVpBVElPTl9HUk9VUCIsIkZJWEVEX0VYQ0hBTkdFX1JBVEUiLCJQUklNQVJZX0NPTlRBQ1QiLCJBQ1RJVklUWV9ET0NVTUVOVFMiLCJET0NVTUVOVF9UWVBFIiwiSVNPMiIsIlBST0pFQ1RJT04iLCJQSVBFTElORSIsIlBST0pFQ1RJT05fREFURSIsIlNBTUVfQVNfUFJPUE9TRURfU1RBUlRfREFURV9MQUJFTCIsIlNBTUVfQVNfUFJPUE9TRURfQVBQUk9WQUxfREFURV9MQUJFTCIsIkRFUEVOREVOQ1lfSU1QTEVNRU5UQVRJT05fTEVWRUxfUFJFU0VOVCIsIkRFUEVOREVOQ1lfSU1QTEVNRU5UQVRJT05fTEVWRUxfVkFMSUQiLCJERVBFTkRFTkNZX0lNUExFTUVOVEFUSU9OX0xPQ0FUSU9OX1BSRVNFTlQiLCJERVBFTkRFTkNZX0lNUExFTUVOVEFUSU9OX0xPQ0FUSU9OX1ZBTElEIiwiREVQRU5ERU5DWV9QUk9KRUNUX0NPREVfT05fQlVER0VUIiwiREVQRU5ERU5DWV9PTl9CVURHRVQiLCJERVBFTkRFTkNZX1RSQU5TQUNUSU9OX1BSRVNFTlQiLCJERVBFTkRFTkNZX0NPTVBPTkVOVF9GVU5ESU5HX09SR19WQUxJRCIsIkFQX1NFQ1RJT05fSURTIiwia2V5IiwiaGFzaCIsImZtUGF0aCIsIkZNQyIsInNlY3Rpb25QYXRoIiwiQUNUSVZJVFlfSU5URVJOQUxfSURTX0NPTFMiLCJBQ1RJVklUWV9QTEFOTklOR19DT0xTIiwiQUNUSVZJVFlfTE9DQVRJT05fQ09MUyIsIkFDVElWSVRZX0ZVTkRJTkdfQ09MUyIsIkFDVElWSVRZX0NPTlRBQ1RfQ09MUyIsIkFQX0ZVTkRJTkdTX1RBQkxFX0NPTFMiLCJNVUxUSV9TRUxFQ1RfTUlOX1NJWkUiLCJNVUxUSV9TRUxFQ1RfTUFYX1NJWkUiLCJ0b0ZpZWxkTmFtZXMiLCJsaXN0T2ZOYW1lcyIsIm1hcCIsInRvRmllbGROYW1lIiwibmFtZSIsInRvTG93ZXJDYXNlIiwicmVwbGFjZSIsInRvT3JpZ2luYWxMYWJlbCIsImZpZWxkTmFtZSIsImNhcGl0YWxpemUiLCJ0ZXh0IiwiY2hhciIsInRvVXBwZXJDYXNlIiwiTk9USUZJQ0FUSU9OX09SSUdJTl9BUElfU0VDVVJJVFkiLCJOT1RJRklDQVRJT05fT1JJR0lOX0FQSV9ORVRXT1JLIiwiTk9USUZJQ0FUSU9OX09SSUdJTl9BUElfU1lOQ1VQIiwiTk9USUZJQ0FUSU9OX09SSUdJTl9BUElfR0VORVJBTCIsIk5PVElGSUNBVElPTl9PUklHSU5fREFUQUJBU0UiLCJOT1RJRklDQVRJT05fT1JJR0lOX0FVVEhFTlRJQ0FUSU9OIiwiTk9USUZJQ0FUSU9OX09SSUdJTl9XT1JLU1BBQ0VfRklMVEVSIiwiTk9USUZJQ0FUSU9OX09SSUdJTl9XT1JLU1BBQ0UiLCJOT1RJRklDQVRJT05fT1JJR0lOX1NZTkNVUF9QUk9DRVNTIiwiTk9USUZJQ0FUSU9OX09SSUdJTl9DVVJSRU5DWV9NQU5BR0VSIiwiTk9USUZJQ0FUSU9OX09SSUdJTl9EQVRFUyIsIk5PVElGSUNBVElPTl9PUklHSU5fQUNUSVZJVFkiLCJOT1RJRklDQVRJT05fT1JJR0lOX1JFU09VUkNFIiwiTk9USUZJQ0FUSU9OX09SSUdJTl9JMThORVhUIiwiTk9USUZJQ0FUSU9OX09SSUdJTl9VUERBVEVfQ0hFQ0siLCJOT1RJRklDQVRJT05fT1JJR0lOX1VQREFURSIsIk5PVElGSUNBVElPTl9PUklHSU5fU0VUVVAiLCJOT1RJRklDQVRJT05fT1JJR0lOX1NFVFRJTkdTIiwiTk9USUZJQ0FUSU9OX1NFVkVSSVRZX1dBUk5JTkciLCJOT1RJRklDQVRJT05fU0VWRVJJVFlfSU5GTyIsIk5PVElGSUNBVElPTl9TRVZFUklUWV9FUlJPUiIsIk5PVElGSUNBVElPTl9FUlJPUl9MRVZFTF9NSU5PUiIsIk5PVElGSUNBVElPTl9FUlJPUl9MRVZFTF9CTE9DS0VSIiwiTk9USUZJQ0FUSU9OX09SSUdJTl9XUk9OR19NRVRIT0RfVVNBR0UiLCJFUlJPUl9DT0RFX05PX0NPTk5FQ1RJVklUWSIsIkVSUk9SX0NPREVfQUNDRVNTX0RFTklFRCIsIk1TR19JTlZBTElEX1VSTCIsIk1TR19USU1FT1VUIiwiTVNHX1VOS05PV05fTkVUV09SS19FUlJPUiIsIk1TR19BTVBfVU5SRUFDSEFCTEUiLCJHRU5FUkFMX0NPTk5FQ1RJT05fRVJST1JTIiwiRE9OT1JfQUdFTkNZIiwiT1JHX1JPTEVfTkFNRVMiLCJBQ1RVQUwiLCJQTEFOTkVEIiwiQUNUVUFMX0NPTU1JVE1FTlRTIiwiQWN0aXZpdHlDb25zdGFudHMiLCJBQ1RVQUxfRElTQlVSU0VNRU5UUyIsIkFDVFVBTF9FWFBFTkRJVFVSRVMiLCJQTEFOTkVEX0NPTU1JVE1FTlRTIiwiUExBTk5FRF9ESVNCVVJTRU1FTlRTIiwiUExBTk5FRF9FWFBFTkRJVFVSRVMiLCJVTkFMTE9DQVRFRF9ESVNCVVJTRU1FTlRTIiwiREVMSVZFUllfUkFURSIsIkFESlVTVE1FTlRfVFlQRVMiLCJBREpVU1RNRU5UX1RZUEVTX0FQX09SREVSIiwiTkVXX0FDVElWSVRZX0lEIiwiUFJPUE9TRURfUFJPSkVDVF9DT1NUIiwiUkVWSVNFRF9QUk9KRUNUX0NPU1QiLCJBQ1JPTllNX0RPTk9SX09SR0FOSVpBVElPTiIsIkFDUk9OWU1fRVhFQ1VUSU5HX0FHRU5DWSIsIkFDUk9OWU1fSU1QTEVNRU5USU5HX0FHRU5DWSIsIkFDUk9OWU1fQkVORUZJQ0lBUllfQUdFTkNZIiwiQUNST05ZTV9SRVNQT05TSUJMRV9PUkdBTklaQVRJT04iLCJBUFBST1ZBTF9TVEFUVVNfQ1JFQVRFRCIsIkFQUFJPVkFMX1NUQVRVU19BUFBST1ZFRCIsIkFQUFJPVkFMX1NUQVRVU19FRElURUQiLCJBUFBST1ZBTF9TVEFUVVNfU1RBUlRFRF9BUFBST1ZFRCIsIkFQUFJPVkFMX1NUQVRVU19TVEFSVEVEIiwiQVBQUk9WQUxfU1RBVFVTX05PVF9BUFBST1ZFRCIsIkFQUFJPVkFMX1NUQVRVU19SRUpFQ1RFRCIsIk9OX0JVREdFVCIsIklOVEVSTkFUSU9OQUwiLCJDT1VOVFJZIiwiUkVMQVRFRF9ET0NVTUVOVFMiLCJUTVBfRU5USVRZX1ZBTElEQVRPUiIsIkFMV0FZU19SRVFVSVJFRCIsIkZVTkRJTkdfQUNUSVZFX0xJU1QiLCJGVU5ESU5HX1RZUEVfT0ZfQVNTSVNUQU5DRSIsIkZVTkRJTkdfREVUQUlMU19QQVRIIiwiRlVORElOR19DVVJSRU5DWV9QQVRIIiwiTVRFRl9DVVJSRU5DWV9QQVRIIiwiUFBDX0NVUlJFTkNZX1BBVEgiLCJSUENfQ1VSUkVOQ1lfUEFUSCIsIkNPTVBPTkVOVF9DVVJSRU5DWV9QQVRIIiwiRElTQlVSU0VNRU5UU19QQVRIIiwiQUNUSVZJVFlfSU5URVJOQUxfSURTX0lOVEVSTkFMX0lEX1BBVEgiLCJBQ1RJVklUWV9JTlRFUk5BTF9JRFNfT1JHQU5JWkFUSU9OX1BBVEgiLCJMT0NBVElPTl9QQVRIIiwiTkFUSU9OQUxfUExBTl9PQkpFQ1RJVkVfUEFUSCIsIlBSSU1BUllfUFJPR1JBTV9QQVRIIiwiU0VDT05EQVJZX1BST0dSQU1fUEFUSCIsIlBSSU1BUllfU0VDVE9SX1BBVEgiLCJTRUNPTkRBUllfU0VDVE9SX1BBVEgiLCJURVJUSUFSWV9TRUNUT1JfUEFUSCIsIkRPTk9SX09SR0FOSVpBVElPTlNfUEFUSCIsIlJFU1BPTlNJQkxFX09SR0FOSVpBVElPTl9CVURHRVRTX1BBVEgiLCJSRUxBVEVEX09SR1NfUEFUSFMiLCJWYWx1ZUNvbnN0YW50cyIsIm9yZ1JvbGUiLCJSRUxBVEVEX09SR1NfT1JHQU5JWkFUSU9OX1BBVEhTIiwiUklDSF9URVhUX0ZJRUxEUyIsIlNldCIsIlBBVEhTX1dJVEhfVFJFRV9TVFJVQ1RVUkUiLCJQQVRIU19XSVRIX0hJRVJBUkNISUNBTF9WQUxVRVMiLCJBQ1RJVklUWV9DT05UQUNUX1BBVEhTIiwiVFJBTlNBQ1RJT05fVFlQRVMiLCJUUkFOU0FDVElPTl9UWVBFU19PUkRFUkVEIiwiRlVORElOR19UUkFOU0FDVElPTl9UWVBFUyIsIkFESlVTVE1FTlRfVFlQRV9QQVRIUyIsInR0IiwiRlVORElOR19DVVJSRU5DWV9QQVRIUyIsIlBBVEhTX0ZPUl9BQ1RJVklUWV9DVVJSRU5DWSIsIlBBVEhTX0ZPUl9DVVJSRU5DWSIsIkRPX05PVF9IWURSQVRFX0ZJRUxEU19MSVNUIiwiQUxURVJOQVRFX1ZBTFVFX1BBVEgiLCJBQ1RJVklUWV9GSUVMRFNfRk1fUEFUSCIsIkZlYXR1cmVNYW5hZ2VyQ29uc3RhbnRzIiwiUFJFRklYX0FDVElWSVRZIiwiUFJFRklYX0NPTlRBQ1QiLCJQUkVGSVhfUkVTT1VSQ0UiLCJQUkVGSVhfQ09NTU9OIiwiUFJFRklYX0xJU1QiLCJGSUVMRF9QQVRIIiwiRklFTERfT1BUSU9OUyIsIkZJRUxEX09QVElPTl9VU0FCTEUiLCJMSVNUX01BWF9TSVpFIiwiUkVHRVhfUEFUVEVSTiIsIkZJRUxEX05BTUUiLCJGSUVMRF9MQUJFTCIsIkZJRUxEX1JFUVVJUkVEIiwiRklFTERfVU5JUVVFX0NPTlNUUkFJTlQiLCJGSUVMRF9UWVBFIiwiRklFTERfTEVOR1RIIiwiRklFTERfUEVSQ0VOVEFHRSIsIkZJRUxEX1BFUkNFTlRBR0VfQ09OU1RSQUlOVCIsIkZJRUxEX0lURU1fVFlQRSIsIkZJRUxEX0lNUE9SVEFCTEUiLCJGSUVMRF9JRF9PTkxZIiwiRklFTERfTVVMVElQTEVfVkFMVUVTX0FMTE9XRUQiLCJGSUVMRF9UUkVFX0NPTExFQ1RJT04iLCJGSUVMRF9DSElMRFJFTiIsIkZJRUxEX0RFUEVOREVOQ0lFUyIsIkZJRUxEX1RZUEVfTElTVCIsIkZJRUxEX1RZUEVfT0JKRUNUIiwiRklFTERfVFlQRV9TVFJJTkciLCJGSUVMRF9UWVBFX0xPTkciLCJGSUVMRF9UWVBFX0ZMT0FUIiwiRklFTERfVFlQRV9CT09MRUFOIiwiRklFTERfVFlQRV9EQVRFIiwiRklFTERfVFlQRV9USU1FU1RBTVAiLCJsb2dnZXIiLCJGaWVsZHNNYW5hZ2VyIiwiZmllbGRzTWFuYWdlciIsIkxvZ2dlck1hbmFnZXIiLCJuZXdGaWVsZHNNYW5hZ2VyIiwiYXNzaWduIiwiZmllbGRzRGVmIiwicG9zc2libGVWYWx1ZXNDb2xsZWN0aW9uIiwiY3VycmVudExhbmd1YWdlIiwiZGVidWciLCJfZmllbGRzRGVmIiwiX3Bvc3NpYmxlVmFsdWVzTWFwIiwicHYiLCJpZCIsIkZQQyIsIl9maWVsZFBhdGhzRW5hYmxlZFN0YXR1c01hcCIsIl9sYW5nIiwiQ29uc3RhbnRzIiwiX2RlZmF1bHRMYW5nIiwiY2xlYW51cCIsImZkIiwiY2hpbGRyZW4iLCJmaWVsZF9sYWJlbCIsImtleXMiLCJsYW5nIiwiZmllbGRQYXRoIiwidmFsdWVzIiwicGF0aFBhcnRzIiwiaXNGaWVsZFBhdGhFbmFibGVkIiwidW5kZWZpbmVkIiwiX2J1aWxkRmllbGRQYXRoU3RhdHVzIiwic3BsaXQiLCJjdXJyZW50VHJlZSIsImlzRGlzYWJsZWQiLCJzb21lIiwiZmluZCIsImZpZWxkIiwiZmllbGRfbmFtZSIsInBhcnQiLCJvcmlnVmFsdWUiLCJ0cm5WYWx1ZSIsIm9wdGlvbnMiLCJvcHRpb24iLCJvcHQiLCJ0cmFuc2xhdGlvbnMiLCJnZXRGaWVsZERlZiIsImRlcGVuZGVuY2llcyIsImZpZWxkUGF0aHMiLCJfZ2V0RmllbGRQYXRoc0J5RGVwZW5kZW5jaWVzIiwiY3VycmVudFBhdGgiLCJoYXNEZXBlbmRlbmN5IiwiaW5jbHVkZXMiLCJkZXAiLCJnZXRPcHRpb25UcmFuc2xhdGlvbiIsImdldFZhbHVlIiwicGFydHMiLCJuZXdMaXN0IiwibmV3RWxlbWVudCIsImN1cnJlbnQiLCJsZW5ndGgiLCJjb25jYXQiLCJ2YWwiLCJDdXJyZW5jeVJhdGVzTWFuYWdlciIsImN1cnJlbmN5UmF0ZXMiLCJiYXNlQ3VycmVuY3kiLCJkYXRlVXRpbHMiLCJlcnJvck5vdGlmaWNhdGlvbkhlbHBlciIsIl9jdXJyZW5jeVJhdGVzIiwiX2Jhc2VDdXJyZW5jeSIsIl9jdXJybmNpZXNXaXRoRXhjaGFuZ2VSYXRlcyIsIl9nZXRDdXJyZW5jaWVzV2l0aEV4Y2hhbmdlUmF0ZXMiLCJfdHJhbnNsYXRlIiwiX2RhdGVVdGlscyIsIl9lcnJvck5vdGlmaWNhdGlvbkhlbHBlciIsImN1cnJlbmN5RnJvbSIsImN1cnJlbmN5VG8iLCJkYXRlVG9GaW5kIiwiZml4ZWRFeGNoYW5nZVJhdGUiLCJjb252ZXJ0Q3VycmVuY3kiLCJ0aW1lRGF0ZVRvRmluZCIsIkRhdGUiLCJnZXRUaW1lIiwiY3VycmVuY2llc1RvU2VhcmNoRGlyZWN0IiwiaXRlbSIsImZyb20iLCJ0byIsImdldEV4Y2hhbmdlUmF0ZSIsImN1cnJlbmNpZXNUb1NlYXJjaEludmVyc2UiLCJjb252ZXJ0VmlhQmFzZUN1cnJlbmN5IiwiX2dldEN1cnJlbmN5RXJyb3IiLCJmdW5kaW5nRGV0YWlscyIsInRvdGFsIiwiY29udmVydFRyYW5zYWN0aW9uQW1vdW50VG9DdXJyZW5jeSIsImZ1bmRpbmdEZXRhaWwiLCJhbW91bnQiLCJkYXRlIiwiY3VycmVuY3lSYXRlIiwiZm9ybWF0RGF0ZUZvckFQSSIsInRyYW5zYWN0aW9uRGF0ZSIsInRyYW5zYWN0aW9uQW1vdW50IiwiY29udmVydEFtb3VudFRvQ3VycmVuY3kiLCJjdXJyZW5jaWVzVG9TZWFyY2giLCJsb3dlckVuZCIsImhpZ2hlckVuZCIsInJhdGVzIiwibWlkZGxlIiwiTWF0aCIsImZsb29yIiwiZGlmZmVyZW5jZSIsImFicyIsImRpZmZlcmVuY2UxIiwicmF0ZSIsImVycm9yTWVzYWdlIiwibm90aWZFcnJvckN1cnJlbmN5IiwiY3JlYXRlTm90aWZpY2F0aW9uIiwiRXJyb3JDb25zdGFudHMiLCJyYXRlRnJvbVRvQmFzZSIsInJhdGVCYXNlVG9UbyIsInJhdGVUb1RvQmFzZSIsInJhdGVCYXNlVG9Gcm9tIiwiY3MiLCJhZGQiLCJleGNoYW5nZVJhdGVzIiwiUG9zc2libGVWYWx1ZXNNYW5hZ2VyIiwibGFuZ1N0YXRlIiwiX2xhbmdTdGF0ZSIsIkxvZ2dlciIsIl9sb2dnZXIiLCJoT3B0aW9ucyIsImJ1aWxkSGllcmFyY2hpY2FsRGF0YSIsInNlbGVjdGVkSWQiLCJ2YWx1ZVBhcnRzIiwiZ2V0SGllcmFyY2hpY2FsVmFsdWUiLCJmb3JtYXRWYWx1ZVBhcnRzIiwibmFtZVBhcnRzIiwicGFyZW50SWQiLCJyZXZlcnNlIiwiX2ZpbGxIaWVyYXJjaGljYWxEZXB0aCIsImVycm9yIiwiZGVwdGgiLCJwYXJlbnQiLCJvIiwicmVzVmFsIiwiZGVmYXVsdExhbmciLCJjdXJyZW5jeVJhdGVzTWFuYWdlciIsImZpbHRlcnMiLCJpc09SRmlsdGVyIiwiaXNMb2NhdGlvbnMiLCJpc0N1cnJlbmN5IiwiaGFzIiwidmlzaWJsZSIsImRpc3BsYXlIaWVyYXJjaGljYWxWYWx1ZSIsImlzQ3VycmVuY3lPcHRpb25Vc2FibGUiLCJmaWx0ZXJCeSIsImZpbHRlciIsIm9wdGlvbkRhdGFUb0NoZWNrIiwicGF0aCIsImhhc0V4Y2hhbmdlUmF0ZXMiLCJjdXJyZW5jaWVzV2l0aEV4Y2hhbmdlUmF0ZXMiLCJpc0FjdGl2ZSIsImV4dHJhX2luZm8iLCJhY3RpdmUiLCJvcHRpb25zT2JqIiwicmV2ZXJzZVNvcnRPcHRpb25zIiwiYWRkZWQiLCJvcHRpb25zTGlzdCIsImlkc1N0YWNrIiwicG9wIiwicmV2ZXJzZVNvcnRlZENoaWxkcmVuIiwiRkVBVFVSRV9NQU5BR0VSIiwiRmVhdHVyZU1hbmFnZXIiLCJmbVRyZWUiLCJfZm1UcmVlIiwibG9nZ2VyTWFuYWdlciIsIm9ubHlMYXN0U2VnbWVudCIsIl9sb2dnZXJNYW5hZ2VyIiwibGFzdEZNU3ViVHJlZSIsInNlZ21lbnRzIiwiX2dldFBhdGhTZWdtZW50cyIsImZvdW5kTGFzdEZNU3ViVHJlZSIsImV2ZXJ5Iiwic2VnbWVudCIsIl9fZW5hYmxlZCIsImZtU2V0dGluZyIsImZpbmRGTVNldHRpbmciLCJyZWR1Y2UiLCJjdXJyZW50Rk1TZXR0aW5nIiwiZW5hYmxlZCIsImN1cnJlbnRGTVRyZWUiLCJzZWdtZW50Rk0iLCJzdWJzdHJpbmciLCJfY3VycmVudEZNIiwiaXNGTVNldHRpbmdFbmFibGVkIiwiaGFzRk1TZXR0aW5nIiwiQVBMYWJlbCIsImxhYmVsIiwiZG9udFRyYW5zbGF0ZSIsImxhYmVsQ2xhc3MiLCJ0b29sdGlwIiwiZ2V0Q29udGVudCIsIkFQRmllbGQiLCJUYWJsaWZ5IiwiY29udGVudCIsImNvbHMiLCJVdGlscyIsImMiLCJyb3dzIiwiY2VpbCIsInRhYmxlQ29udGVudCIsImkiLCJyb3dDb250ZW50IiwiaiIsInN0cmluZ1RvVW5pcXVlSWQiLCJjb2x1bW5zIiwiY2VsbFdpZHRoIiwiY2VsbHdpZHRoU3R5bGUiLCJ0YWJsaWZ5X291dGVyX2NlbGwiLCJ0YWJsaWZ5X2lubmVyX2NlbGwiLCJmbGV4IiwibnVtYmVyIiwiQVBQZXJjZW50YWdlRmllbGQiLCJyYXdOdW1iZXJUb0Zvcm1hdHRlZFN0cmluZyIsInBlcmNlbnRhZ2UiLCJ0aXRsZUNsYXNzIiwiYWxpZ25SaWdodCIsIkFQUGVyY2VudGFnZUxpc3QiLCJsaXN0RmllbGQiLCJ2YWx1ZUZpZWxkIiwicGVyY2VudGFnZUZpZWxkIiwibGlzdFRpdGxlIiwiZ2V0SXRlbVRpdGxlIiwib2JqIiwiYWN0aXZpdHlGaWVsZHNNYW5hZ2VyIiwicGVyY2VudFRpdGxlQ2xhc3MiLCJhY3Rpdml0eSIsInRhYmxpZnkiLCJwZXJjZW50VmFsdWVDbGFzcyIsIml0ZW1zIiwiaXNMaXN0RW5hYmxlZCIsImEiLCJiIiwiaXRlbVRpdGxlIiwibG9jYWxlQ29tcGFyZSIsIm5vZGF0YSIsImluc3RhbmNlT2YiLCJTZWN0aW9uIiwiQ29tcG9zZWRTZWN0aW9uIiwicGFyYW1zIiwidXNlRW5jYXBzdWxhdGVIZWFkZXIiLCJzaG93SWZOb3RBdmFpbGFibGUiLCJOQU9wdGlvbnMiLCJvcHRpb25zXyIsIkZpZWxkUGF0aENvbnN0YW50cyIsImNvbnRleHQiLCJub1RpdGxlIiwiZ2V0RmllbGRMYWJlbFRyYW5zbGF0aW9uIiwidmFsdWVQYXRoIiwiZmllbGRQYXRoUGFydHMiLCJhbHRlcm5hdGVQYXRoIiwiZmllbGREZWYiLCJmaWVsZF90eXBlIiwiRGF0ZVV0aWxzIiwiY3JlYXRlRm9ybWF0dGVkRGF0ZSIsInJlIiwidGVzdCIsInRyaW0iLCJjb21wb3NlZFNlY3Rpb24iLCJzdGF0ZSIsImJ1aWxkU2ltcGxlRmllbGQiLCJiaW5kIiwiU2VjdGlvblRpdGxlIiwiZ3JvdXBDbGFzcyIsInNJRCIsInRpdGxlRGV0YWlscyIsImNvbXBvc2VkQ2xhc3MiLCJvbmVPZlR5cGUiLCJjb250ZXh0VHlwZXMiLCJkZWZhdWx0UHJvcHMiLCJzZWN0aW9uX3RpdGxlX2NsYXNzIiwic2VjdGlvbl9ncm91cF9jbGFzcyIsInNlY3Rpb25fZmllbGRfbmFtZSIsInNlY3Rpb25fZmllbGRfdmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxTQUFTLFdBQVcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFO0VBQzdCLEtBQUssR0FBRyxLQUFLLEtBQUssQ0FBQyxHQUFHLEdBQUcsR0FBRyxFQUFFLENBQUM7RUFDL0IsSUFBSSxRQUFRLEdBQUcsR0FBRyxDQUFDLFFBQVEsQ0FBQzs7RUFFNUIsSUFBSSxDQUFDLEdBQUcsSUFBSSxPQUFPLFFBQVEsS0FBSyxXQUFXLEVBQUUsRUFBRSxPQUFPLEVBQUU7O0VBRXhELElBQUksSUFBSSxHQUFHLFFBQVEsQ0FBQyxJQUFJLElBQUksUUFBUSxDQUFDLG9CQUFvQixDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0VBQ3JFLElBQUksS0FBSyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7RUFDNUMsS0FBSyxDQUFDLElBQUksR0FBRyxVQUFVLENBQUM7O0VBRXhCLElBQUksUUFBUSxLQUFLLEtBQUssRUFBRTtJQUN0QixJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7TUFDbkIsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFL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
