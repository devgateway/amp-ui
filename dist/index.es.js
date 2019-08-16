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
var LAST_NAME = 'last-name';
var EMAIL = 'email';

/* Team member constants */
var TEAM_MEMBER_USER_ID = 'user-id';

var UserConstants = Object.freeze({
  FIRST_NAME: FIRST_NAME,
  LAST_NAME: LAST_NAME,
  EMAIL: EMAIL,
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
  APIdentification: APIdentification$1
};

export default index;
export { TestAPField, TestingSection, Constants, ActivityConstants, FeatureManagerConstants, ErrorConstants, CurrencyRatesManager, FieldsManager, FieldPathConstants, ValueConstants, PossibleValuesManager, FeatureManager, APLabel, APField, Tablify, APPercentageField, APPercentageList, UIUtils, Section, FundingSummary$1 as FundingSummary, AdditionalInfo$1 as AdditionalInfo, UserConstants, WorkspaceConstants, WorkspaceGroupsConstants, APIdentification$1 as APIdentification };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguZXMuanMiLCJzb3VyY2VzIjpbIi4uL25vZGVfbW9kdWxlcy9zdHlsZS1pbmplY3QvZGlzdC9zdHlsZS1pbmplY3QuZXMuanMiLCIuLi9zcmMvYWN0aXZpdHlQcmV2aWV3L2NvbXBvbmVudHMvVGVzdEFQRmllbGQuanMiLCIuLi9zcmMvYWN0aXZpdHlQcmV2aWV3L2NvbXBvbmVudHMvVGVzdGluZ1NlY3Rpb24uanMiLCIuLi9zcmMvdXRpbHMvQ29uc3RhbnRzLmpzIiwiLi4vc3JjL21vZHVsZXMvdXRpbC9GZWF0dXJlTWFuYWdlckNvbnN0YW50cy5qcyIsIi4uL3NyYy91dGlscy9VSVV0aWxzLmpzIiwiLi4vc3JjL21vZHVsZXMvdXRpbC9BY3Rpdml0eUNvbnN0YW50cy5qcyIsIi4uL3NyYy91dGlscy9jb25zdGFudHMvRXJyb3JDb25zdGFudHMuanMiLCIuLi9zcmMvdXRpbHMvVmFsdWVDb25zdGFudHMuanMiLCIuLi9zcmMvdXRpbHMvRmllbGRQYXRoQ29uc3RhbnRzLmpzIiwiLi4vc3JjL21vZHVsZXMvZmllbGQvRmllbGRzTWFuYWdlci5qcyIsIi4uL3NyYy9tb2R1bGVzL3V0aWwvQ3VycmVuY3lSYXRlc01hbmFnZXIuanMiLCIuLi9zcmMvbW9kdWxlcy9maWVsZC9Qb3NzaWJsZVZhbHVlc01hbmFnZXIuanMiLCIuLi9zcmMvbW9kdWxlcy91dGlsL0ZlYXR1cmVNYW5hZ2VyLmpzIiwiLi4vc3JjL2FjdGl2aXR5L3ByZXZpZXcvY29tcG9uZW50cy9BUExhYmVsLmpzeCIsIi4uL3NyYy9hY3Rpdml0eS9wcmV2aWV3L2NvbXBvbmVudHMvQVBGaWVsZC5qc3giLCIuLi9zcmMvYWN0aXZpdHkvcHJldmlldy9jb21wb25lbnRzL1RhYmxpZnkuanN4IiwiLi4vc3JjL2FjdGl2aXR5L3ByZXZpZXcvY29tcG9uZW50cy9BUFBlcmNlbnRhZ2VGaWVsZC5qc3giLCIuLi9zcmMvYWN0aXZpdHkvcHJldmlldy9jb21wb25lbnRzL0FQUGVyY2VudGFnZUxpc3QuanN4IiwiLi4vc3JjL2FjdGl2aXR5L3ByZXZpZXcvc2VjdGlvbnMvU2VjdGlvbi5qc3giLCIuLi9zcmMvYWN0aXZpdHkvcHJldmlldy9zZWN0aW9ucy9GdW5kaW5nU3VtbWFyeS5qc3giLCIuLi9zcmMvYWN0aXZpdHkvcHJldmlldy9zZWN0aW9ucy9BUElkZW50aWZpY2F0aW9uLmpzeCIsIi4uL3NyYy91dGlscy9jb25zdGFudHMvV29ya3NwYWNlQ29uc3RhbnRzLmpzIiwiLi4vc3JjL3V0aWxzL2NvbnN0YW50cy9Vc2VyQ29uc3RhbnRzLmpzIiwiLi4vc3JjL2FjdGl2aXR5L3ByZXZpZXcvc2VjdGlvbnMvQWRkaXRpb25hbEluZm8uanN4IiwiLi4vc3JjL3V0aWxzL2NvbnN0YW50cy9Xb3Jrc3BhY2VHcm91cHNDb25zdGFudHMuanMiLCIuLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gc3R5bGVJbmplY3QoY3NzLCByZWYpIHtcbiAgaWYgKCByZWYgPT09IHZvaWQgMCApIHJlZiA9IHt9O1xuICB2YXIgaW5zZXJ0QXQgPSByZWYuaW5zZXJ0QXQ7XG5cbiAgaWYgKCFjc3MgfHwgdHlwZW9mIGRvY3VtZW50ID09PSAndW5kZWZpbmVkJykgeyByZXR1cm47IH1cblxuICB2YXIgaGVhZCA9IGRvY3VtZW50LmhlYWQgfHwgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2hlYWQnKVswXTtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgc3R5bGUudHlwZSA9ICd0ZXh0L2Nzcyc7XG5cbiAgaWYgKGluc2VydEF0ID09PSAndG9wJykge1xuICAgIGlmIChoZWFkLmZpcnN0Q2hpbGQpIHtcbiAgICAgIGhlYWQuaW5zZXJ0QmVmb3JlKHN0eWxlLCBoZWFkLmZpcnN0Q2hpbGQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBoZWFkLmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgaGVhZC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBzdHlsZUluamVjdDtcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi8uLi9hY3Rpdml0eUFzc2V0cy9zdHlsZXNoZWV0cy9BY3Rpdml0eVByZXZpZXcuY3NzJztcblxuXG4vKipcbiAqIFNpbXBsZSBGaWVsZCBjb21wb25lbnQgdGhhdCBjb25zaXN0cyBvZiBhIGZpZWxkIHRpdGxlIGFuZCBmaWVsZCB2YWx1ZVxuICogQGF1dGhvciBOYWRlamRhIE1hbmRyZXNjdVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZXN0QVBGaWVsZCBleHRlbmRzIENvbXBvbmVudCB7XG4gIC8qKlxuICAgKiBHZXRzIGFuIGluc3RhbmNlIG9mIFNpbXBsZSBGaWVsZFxuICAgKiBAcGFyYW0gdHJuTGFiZWwgdGhlIGxhYmVsIHRvIHRyYW5zbGF0ZSBhbmQgdXNlIGFzIGEgdGl0bGUuIFRoaXMgbGFiZWwgaXMgYWxzbyB1c2VkIGFzIHRoZSBjb21wb25lbnQga2V5LlxuICAgKiBAcGFyYW0gdmFsdWUgdGhlIGZpZWxkIHZhbHVlXG4gICAqIEBwYXJhbSBpbmxpbmUgc2hvdyB0aXRsZSBhbmQgdmFsdWUgaW4gdGhlIHNhbWUgcm93LlxuICAgKiBAcGFyYW0gc2VwYXJhdG9yIGFkZCBvciBub3QgYW4gPGhyPiB0YWcuXG4gICAqIEBwYXJhbSBuYW1lQ2xhc3MgY3NzIGNsYXNzIGZvciB0aGUgZmllbGQgbGFiZWxcbiAgICogQHBhcmFtIHZhbHVlQ2xhc3MgY3NzIGNsYXNzIGZvciB0aGUgZmllbGQgdmFsdWVcbiAgICogQHJldHVybiB7U2ltcGxlRmllbGR9XG4gICAqL1xuICBzdGF0aWMgaW5zdGFuY2UodHJuTGFiZWwsIHZhbHVlLCBpbmxpbmUgPSBmYWxzZSwgc2VwYXJhdG9yID0gZmFsc2UsIG5hbWVDbGFzcywgdmFsdWVDbGFzcykge1xuICAgIHJldHVybiAoPFRlc3RBUEZpZWxkXG4gICAgICBrZXk9e3RybkxhYmVsfSB0aXRsZT17dGhpcy5wcm9wcy50cmFuc2xhdGUodHJuTGFiZWwpfSB2YWx1ZT17dmFsdWV9IGlubGluZT17aW5saW5lfSBzZXBhcmF0b3I9e3NlcGFyYXRvcn1cbiAgICAgIGZpZWxkTmFtZUNsYXNzPXtuYW1lQ2xhc3N9IGZpZWxkVmFsdWVDbGFzcz17dmFsdWVDbGFzc30gLz4pO1xuICB9XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5wcm9wcy5hbXBMb2dnZXIubG9nKCdjb25zdHJ1Y3RvcmUnKTtcbiAgICB0aGlzLnVzZVNlcGFyYXRvciA9IHRoaXMucHJvcHMuc2VwYXJhdG9yICE9PSBmYWxzZTtcbiAgICB0aGlzLmRpc3BsYXlDbGFzcyA9IHRoaXMucHJvcHMuZmllbGRDbGFzcyB8fCAodGhpcy5wcm9wcy5pbmxpbmUgPT09IHRydWUgPyBzdHlsZXMuaW5saW5lIDogc3R5bGVzLmJsb2NrKTtcbiAgfVxuXG4gIF9nZXRWYWx1ZSgpIHtcbiAgICBjb25zdCBjbGFzc05hbWVzID0gYCR7dGhpcy5wcm9wcy5maWVsZFZhbHVlQ2xhc3N9ICR7dGhpcy5kaXNwbGF5Q2xhc3N9YDtcbiAgICAvLyBUbyBoYW5kbGUgYm9vbGVhbiBmaWVsZHMgd2UgZG9udCB3YW50IHRvIHNob3cgJ2ZhbHNlJyBhcyAnTm8gRGF0YScuXG4gICAgY29uc3QgdmFsdWUgPSAodGhpcy5wcm9wcy52YWx1ZSB8fCB0aGlzLnByb3BzLnZhbHVlID09PSBmYWxzZSkgPyB0aGlzLnByb3BzLnZhbHVlIDogdGhpcy5wcm9wcy50cmFuc2xhdGUoJ05vIERhdGEnKTtcbiAgICBsZXQgZGlzcGxheVZhbHVlO1xuICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgaWYgKHZhbHVlWzBdIGluc3RhbmNlb2YgT2JqZWN0KSB7XG4gICAgICAgIGRpc3BsYXlWYWx1ZSA9IFtdO1xuICAgICAgICB2YWx1ZS5mb3JFYWNoKHYgPT4gZGlzcGxheVZhbHVlLnB1c2godikpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZGlzcGxheVZhbHVlID0gdmFsdWUuc29ydCgpLmpvaW4oJywgJyk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgdmFsdWUgPT09ICdib29sZWFuJykge1xuICAgICAgZGlzcGxheVZhbHVlID0gdmFsdWUgPT09IHRydWUgPyB0aGlzLnByb3BzLnRyYW5zbGF0ZSgnWWVzJykgOiB0aGlzLnByb3BzLnRyYW5zbGF0ZSgnTm8nKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZGlzcGxheVZhbHVlID0gKHRoaXMucHJvcHMuaW5saW5lICYmIHRoaXMucHJvcHMudmFsdWUgaW5zdGFuY2VvZiBTdHJpbmcpID8gYCR7dmFsdWV9IGAgOiB2YWx1ZTtcbiAgICB9XG4gICAgaWYgKHRoaXMucHJvcHMudXNlSW5uZXJIVE1MKSB7XG4gICAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZXN9IGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogZGlzcGxheVZhbHVlIH19IC8+O1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZXN9PntkaXNwbGF5VmFsdWV9PC9kaXY+O1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBjbGFzc05hbWVzID0gYCR7dGhpcy5wcm9wcy5maWVsZE5hbWVDbGFzc30gJHt0aGlzLmRpc3BsYXlDbGFzc31gO1xuICAgIHJldHVybiAoPGRpdiBjbGFzc05hbWU9e3RoaXMuZGlzcGxheUNsYXNzfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWVzfT57dGhpcy5wcm9wcy50aXRsZX08L2Rpdj5cbiAgICAgIHt0aGlzLl9nZXRWYWx1ZSgpfVxuICAgICAge3RoaXMudXNlU2VwYXJhdG9yID8gPGhyIC8+IDogJyd9XG4gICAgPC9kaXY+KTtcbiAgfVxufVxuXG5UZXN0QVBGaWVsZC5wcm9wVHlwZXMgPSB7XG4gIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICB2YWx1ZTogUHJvcFR5cGVzLmFueSxcbiAgaW5saW5lOiBQcm9wVHlwZXMuYm9vbCxcbiAgdXNlSW5uZXJIVE1MOiBQcm9wVHlwZXMuYm9vbCxcbiAgZmllbGRDbGFzczogUHJvcFR5cGVzLnN0cmluZyxcbiAgZmllbGROYW1lQ2xhc3M6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGZpZWxkVmFsdWVDbGFzczogUHJvcFR5cGVzLnN0cmluZyxcbiAgc2VwYXJhdG9yOiBQcm9wVHlwZXMuYm9vbCxcbiAgYW1wTG9nZ2VyOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gIHRyYW5zbGF0ZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZFxufTtcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IFRlc3RBUEZpZWxkIGZyb20gJy4vVGVzdEFQRmllbGQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZXN0aW5nU2VjdGlvbiBleHRlbmRzIENvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGgyPnRlc3RpbmcgY29tcG9uZW50PC9oMj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICB0ZXN0IHRyYW5zbGF0aW9uOiBgREVTS1RPUCA9IHt0aGlzLnByb3BzLnRyYW5zbGF0ZSgnREVTS1RPUCcpfWBcbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgdGVzdCBBUEZpZWxkOlxuICAgICAgICAgIDxUZXN0QVBGaWVsZCBhbXBMb2dnZXI9e3RoaXMucHJvcHMuYW1wTG9nZ2VyfSB0cmFuc2xhdGU9e3RoaXMucHJvcHMudHJhbnNsYXRlfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2Pik7XG4gIH1cbn1cblRlc3RpbmdTZWN0aW9uLnByb3BUeXBlcyA9IHtcbiAgYW1wTG9nZ2VyOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gIHRyYW5zbGF0ZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZFxufTtcbiIsIlxuY29uc3QgQkFTRV9SRVNUX1VSTCA9ICcvcmVzdCc7XG5cblxuY29uc3QgQ09OTkVDVElPTl9USU1FT1VUID0gMjUwMDA7XG5jb25zdCBDT05ORUNUSU9OX0ZPUkNFRF9USU1FT1VUID0gQ09OTkVDVElPTl9USU1FT1VUICsgNTAwMDtcbmNvbnN0IFRJTUVPVVRfQ0hFQ0tfSU5URVJWQUwgPSA1MDAwO1xuY29uc3QgTUFYX1JFVFJZX0FURU1QVFMgPSA1O1xuY29uc3QgRVJST1JTX1RPX1JFVFJZID0gWydFU09DS0VUVElNRURPVVQnLCAnRVRJTUVET1VUJywgJ0VDT05OUkVTRVQnLCAnRUFJX0FHQUlOJ107XG5jb25zdCBFUlJPUlNfTk9fQU1QX1NFUlZFUiA9IFsnRUNPTk5SRUZVU0VEJywgJ0VORVRVTlJFQUNIJywgJ0VOT0VOVCcsICdFTk9URk9VTkQnLCAnRU5FVERPV04nLCAnRUhPU1RET1dOJyxcbiAgJ0VIT1NUVU5SRUFDSCcsICdFTk9ORVQnXTtcbmNvbnN0IENPTk5FQ1RJVklUWV9DSEVDS19JTlRFUlZBTCA9ICc2MDAwMCc7IC8vIDEgbWludXRlc1xuXG5jb25zdCBXT1JLU1BBQ0VfVVJMID0gJy93b3Jrc3BhY2UnO1xuY29uc3QgTE9HSU5fVVJMID0gJy8nO1xuY29uc3QgREVTS1RPUF9VUkwgPSAnL2Rlc2t0b3AnO1xuY29uc3QgREVTS1RPUF9DVVJSRU5UX1VSTCA9ICcvZGVza3RvcC9jdXJyZW50JztcbmNvbnN0IFNZTkNVUF9SRURJUkVDVF9VUkwgPSAnL3N5bmNVcC9zeW5jJztcbmNvbnN0IFNZTkNVUF9ISVNUT1JZX1RBUkdFVCA9ICdoaXN0b3J5JztcbmNvbnN0IFNZTkNVUF9TVU1NQVJZX1VSTCA9ICcvc3luY1VwU3VtbWFyeSc7XG5jb25zdCBBQ1RJVklUWV9QUkVWSUVXX1VSTCA9ICcvYWN0aXZpdHkvcHJldmlldyc7XG5jb25zdCBBQ1RJVklUWV9FRElUX1VSTCA9ICcvYWN0aXZpdHkvZWRpdCc7XG5jb25zdCBVUERBVEVfVVJMID0gJy91cGRhdGUnO1xuY29uc3QgU0VUVVBfVVJMID0gJy9zZXR1cCc7XG5jb25zdCBTRVRUSU5HU19VUkwgPSAnL3NldHRpbmdzJztcblxuY29uc3QgQ09MTEVDVElPTl9VU0VSUyA9ICd1c2Vycyc7XG5jb25zdCBDT0xMRUNUSU9OX1dPUktQQUNFUyA9ICd3b3Jrc3BhY2VzJztcbmNvbnN0IENPTExFQ1RJT05fVEVBTU1FTUJFUlMgPSAndGVhbW1lbWJlcnMnO1xuY29uc3QgQ09MTEVDVElPTl9DTElFTlRfU0VUVElOR1MgPSAnY2xpZW50LXNldHRpbmdzJztcbmNvbnN0IENPTExFQ1RJT05fR0xPQkFMX1NFVFRJTkdTID0gJ2dsb2JhbC1zZXR0aW5ncyc7XG5jb25zdCBDT0xMRUNUSU9OX0FDVElWSVRJRVMgPSAnYWN0aXZpdGllcyc7XG5jb25zdCBDT0xMRUNUSU9OX0ZJRUxEUyA9ICdmaWVsZHMnO1xuY29uc3QgQ09MTEVDVElPTl9QT1NTSUJMRV9WQUxVRVMgPSAncG9zc2libGUtdmFsdWVzJztcbmNvbnN0IENPTExFQ1RJT05fU1lOQ1VQX0xPRyA9ICdzeW5jdXAtbG9nJztcbmNvbnN0IENPTExFQ1RJT05fTEFOR1MgPSAnbGFuZ3VhZ2VzJztcbmNvbnN0IENPTExFQ1RJT05fV1NfU0VUVElOR1MgPSAnd29ya3NwYWNlLXNldHRpbmdzJztcbmNvbnN0IENPTExFQ1RJT05fQ1VSUkVOQ1lfUkFURVMgPSAnY3VycmVuY3ktcmF0ZXMnO1xuY29uc3QgQ09MTEVDVElPTl9GRUFUVVJFX01BTkFHRVIgPSAnZmVhdHVyZS1tYW5hZ2VyJztcbmNvbnN0IENPTExFQ1RJT05fQ09OVEFDVFMgPSAnY29udGFjdHMnO1xuY29uc3QgQ09MTEVDVElPTl9SRVNPVVJDRVMgPSAncmVzb3VyY2VzJztcbmNvbnN0IENPTExFQ1RJT05fUkVQT1NJVE9SWSA9ICdyZXBvc2l0b3J5JztcbmNvbnN0IENPTExFQ1RJT05fR0FaRVRURUVSID0gJ2dhemV0dGVlcic7XG5jb25zdCBDT0xMRUNUSU9OX0NBTEVOREFSUyA9ICdjYWxlbmRhcnMnO1xuY29uc3QgQ09MTEVDVElPTl9DSEFOR0VTRVRTID0gJ2NoYW5nZXNldHMnO1xuXG5jb25zdCBHQVpFVFRFRVJfRElTVEFOQ0VfRElWSURFID0gMztcblxuY29uc3QgREJfRklMRV9QUkVGSVggPSAnZGF0YWJhc2UnO1xuY29uc3QgREJfRklMRV9FWFRFTlNJT04gPSAnLmRiJztcbmNvbnN0IERCX0NPTU1PTl9EQVRBU1RPUkVfT1BUSU9OUyA9IHsgYXV0b2xvYWQ6IGZhbHNlLCBjb3JydXB0QWxlcnRUaHJlc2hvbGQ6IDAgfTtcbmNvbnN0IERCX0FVVE9DT01QQUNUX0lOVEVSVkFMX01JTElTRUNPTkRTID0gNjAwMDA7XG5jb25zdCBEQl9ERUZBVUxUX1FVRVJZX0xJTUlUID0gOTk5OTk5OTk5O1xuXG5jb25zdCBMQU5HVUFHRV9FTkdMSVNIID0gJ2VuJztcbmNvbnN0IEZTX0xPQ0FMRVNfRElSRUNUT1JZID0gJ2xhbmcnO1xuY29uc3QgTEFOR1VBR0VfTUFTVEVSX1RSQU5TTEFUSU9OU19GSUxFID0gJ21hc3Rlci10cmFuc2xhdGlvbnMnO1xuY29uc3QgTEFOR1VBR0VfVFJBTlNMQVRJT05TX0ZJTEUgPSAndHJhbnNsYXRpb25zJztcbmNvbnN0IExBTkdVQUdFX05FV19UUkFOU0xBVElPTlNfTVVTVF9TWU5DID0gJ211c3Rfc3luY190cmFuc2xhdGlvbi5qc29uJztcblxuY29uc3QgQVNBUl9ESVIgPSAnYXBwLmFzYXInO1xuY29uc3QgQVBQX0RJUkVDVE9SWSA9ICdhcHAnO1xuY29uc3QgVEVTVF9ESVJFQ1RPUlkgPSAndGVzdCc7XG5jb25zdCBTVEFUSUNfRElSID0gJ3N0YXRpYyc7XG5jb25zdCBJTUFHRVNfRElSID0gJ2ltYWdlcyc7XG5jb25zdCBET0NfSUNPTlMgPSAnZG9jLWljb25zJztcbmNvbnN0IERCX1NUQVRJQ19ESVIgPSAnZGInO1xuY29uc3QgTUlHUkFUSU9OU19ESVIgPSAnY2hhbmdlbG9nJztcblxuY29uc3QgSEFTSF9JVEVSQVRJT05TID0gMTAwO1xuY29uc3QgRElHRVNUX0FMR09SSVRITV9TSEExID0gJ1NIQS0xJztcbmNvbnN0IERJR0VTVF9BTEdPUklUSE1fU0hBMjU2ID0gJ1NIQS0yNTYnO1xuXG5jb25zdCBBQ1RJVklUWV9FRElUID0gJ0FDVElWSVRZX0VESVQnO1xuY29uc3QgQUNUSVZJVFlfVklFVyA9ICdBQ1RJVklUWV9WSUVXJztcblxuY29uc3QgU1lOQ1VQX0ZPUkNFX0RBWVMgPSAxNDtcbmNvbnN0IFNZTkNVUF9CRVNUX0JFRk9SRV9EQVlTID0gNztcbmNvbnN0IFNZTkNVUF9OT19EQVRFID0gJzE5MDAtMDEtMDFUMDA6MDA6MDAuMDAwKzAwMDAnO1xuY29uc3QgU1lOQ1VQX1RZUEVfVFJBTlNMQVRJT05TID0gJ3RyYW5zbGF0aW9ucyc7XG5jb25zdCBTWU5DVVBfVFlQRV9VU0VSUyA9ICd1c2Vycyc7XG5jb25zdCBTWU5DVVBfVFlQRV9BU1NFVFMgPSAnYXNzZXRzJztcbmNvbnN0IFNZTkNVUF9UWVBFX1dPUktTUEFDRVMgPSAnd29ya3NwYWNlcyc7XG5jb25zdCBTWU5DVVBfVFlQRV9HUyA9ICdnbG9iYWwtc2V0dGluZ3MnO1xuY29uc3QgU1lOQ1VQX1RZUEVfRVhDSEFOR0VfUkFURVMgPSAnZXhjaGFuZ2UtcmF0ZXMnO1xuY29uc3QgU1lOQ1VQX1RZUEVfRkVBVFVSRV9NQU5BR0VSID0gJ2ZlYXR1cmUtbWFuYWdlcic7XG5jb25zdCBTWU5DVVBfVFlQRV9XT1JLU1BBQ0VfTUVNQkVSUyA9ICd3b3Jrc3BhY2UtbWVtYmVycyc7XG5jb25zdCBTWU5DVVBfVFlQRV9BTExfRklFTERTID0gJ2ZpZWxkcyc7XG5jb25zdCBTWU5DVVBfVFlQRV9BQ1RJVklUSUVTX1BVTEwgPSAnYWN0aXZpdGllcyc7XG5jb25zdCBTWU5DVVBfVFlQRV9BQ1RJVklUSUVTX1BVU0ggPSAnYWN0aXZpdGllcy1wdXNoJztcbmNvbnN0IFNZTkNVUF9UWVBFX0FDVElWSVRZX0ZJRUxEUyA9ICdhY3Rpdml0eS1maWVsZHMnO1xuY29uc3QgU1lOQ1VQX1RZUEVfQUNUSVZJVFlfRklFTERTX1NUUlVDVFVSQUxfQ0hBTkdFUyA9ICdhY3Rpdml0eS1maWVsZHMtc3RydWN0dXJhbC1jaGFuZ2VzJztcbmNvbnN0IFNZTkNVUF9UWVBFX0NPTlRBQ1RTX1BVTEwgPSAnY29udGFjdHMnO1xuY29uc3QgU1lOQ1VQX1RZUEVfQ09OVEFDVFNfUFVTSCA9ICdjb250YWN0cy1wdXNoJztcbmNvbnN0IFNZTkNVUF9UWVBFX0FDVElWSVRZX1BPU1NJQkxFX1ZBTFVFUyA9ICdhY3Rpdml0eS1wb3NzaWJsZS12YWx1ZXMtZmllbGRzJztcbmNvbnN0IFNZTkNVUF9UWVBFX0NPTlRBQ1RfRklFTERTID0gJ2NvbnRhY3QtZmllbGRzJztcbmNvbnN0IFNZTkNVUF9UWVBFX0NPTlRBQ1RfRklFTERTX1NUUlVDVFVSQUxfQ0hBTkdFUyA9ICdjb250YWN0LWZpZWxkcy1zdHJ1Y3R1cmFsLWNoYW5nZXMnO1xuY29uc3QgU1lOQ1VQX1RZUEVfQ09OVEFDVF9QT1NTSUJMRV9WQUxVRVMgPSAnY29udGFjdC1wb3NzaWJsZS12YWx1ZXMtZmllbGRzJztcbmNvbnN0IFNZTkNVUF9UWVBFX1JFU09VUkNFU19QVUxMID0gJ3Jlc291cmNlcyc7XG5jb25zdCBTWU5DVVBfVFlQRV9SRVNPVVJDRVNfUFVTSCA9ICdyZXNvdXJjZXMtcHVzaCc7XG5jb25zdCBTWU5DVVBfVFlQRV9SRVNPVVJDRV9GSUVMRFMgPSAncmVzb3VyY2UtZmllbGRzJztcbmNvbnN0IFNZTkNVUF9UWVBFX1JFU09VUkNFX0ZJRUxEU19TVFJVQ1RVUkFMX0NIQU5HRVMgPSAncmVzb3VyY2UtZmllbGRzLXN0cnVjdHVyYWwtY2hhbmdlcyc7XG5jb25zdCBTWU5DVVBfVFlQRV9SRVNPVVJDRV9QT1NTSUJMRV9WQUxVRVMgPSAncmVzb3VyY2UtcG9zc2libGUtdmFsdWVzLWZpZWxkcyc7XG5jb25zdCBTWU5DVVBfVFlQRV9DT01NT05fUE9TU0lCTEVfVkFMVUVTID0gJ2NvbW1vbi1wb3NzaWJsZS12YWx1ZXMtZmllbGRzJztcbmNvbnN0IFNZTkNVUF9UWVBFX1dPUktTUEFDRV9TRVRUSU5HUyA9ICd3b3Jrc3BhY2Utc2V0dGluZ3MnO1xuY29uc3QgU1lOQ1VQX1RZUEVfTUFQX1RJTEVTID0gJ21hcC10aWxlcyc7XG5jb25zdCBTWU5DVVBfVFlQRV9HQVpFVFRFRVIgPSAnbG9jYXRvcnMnO1xuY29uc3QgU1lOQ1VQX1RZUEVfQ0FMRU5EQVJTID0gJ2NhbGVuZGFycyc7XG5cbmNvbnN0IFNZTkNVUF9TVEFUVVNfU1VDQ0VTUyA9ICdTVUNDRVNTJztcbmNvbnN0IFNZTkNVUF9TVEFUVVNfRkFJTCA9ICdGQUlMJztcbmNvbnN0IFNZTkNVUF9TVEFUVVNfUEFSVElBTCA9ICdQQVJUSUFMJztcbmNvbnN0IFNZTkNVUF9TVEFUVVNfQ0FOQ0VMRUQgPSAnQ0FOQ0VMRUQnO1xuY29uc3QgU1lOQ1VQX1NZTkNfUkVRVUVTVEVEX0FUID0gJ3N5bmMtZGF0ZSc7XG5jb25zdCBTWU5DVVBfU1lOQ19SRVFVRVNURURfQlkgPSAncmVxdWVzdGVkLWJ5JztcbmNvbnN0IFNZTkNVUF9EQVRFVElNRV9GSUVMRCA9ICd0aW1lc3RhbXAnO1xuY29uc3QgU1lOQ1VQX0RJRkZfTEVGVE9WRVIgPSAnc3luY3VwLWRpZmYtbGVmdG92ZXInO1xuY29uc3QgU1lOQ1VQX0RFUEVOREVOQ1lfQ0hFQ0tfSU5URVJWQUwgPSAxMDtcbmNvbnN0IFNZTkNVUF9ERVRBSUxTX1NZTkNFRCA9ICdzeW5jZWQnO1xuY29uc3QgU1lOQ1VQX0RFVEFJTFNfVU5TWU5DRUQgPSAndW5zeW5jZWQnO1xuY29uc3QgU1lOQ1VQX1JFU09VUkNFX1BVTExfQkFUQ0hfU0laRSA9IDEwMDtcbmNvbnN0IFNZTkNVUF9BQ1RJVklUSUVTX1BVTExfQkFUQ0hfU0laRSA9IDEwMDtcbmNvbnN0IFNZTkNVUF9DT05UQUNUU19QVUxMX0JBVENIX1NJWkUgPSAxMDA7XG5cbmNvbnN0IEFDVElWSVRZX1NUQVRVU19EUkFGVCA9ICdBQ1RJVklUWV9TVEFUVVNfRFJBRlQnO1xuY29uc3QgQUNUSVZJVFlfU1RBVFVTX1VOVkFMSURBVEVEID0gJ0FDVElWSVRZX1NUQVRVU19VTlZBTElEQVRFRCc7XG5jb25zdCBBQ1RJVklUWV9TVEFUVVNfVkFMSURBVEVEID0gJ0FDVElWSVRZX1NUQVRVU19WQUxJREFURUQnO1xuXG5jb25zdCBDVVJSRU5DWV9IT1VSID0gJzAwOjAwJztcbmNvbnN0IERFRkFVTFRfQ1VSUkVOQ1kgPSAnVVNEJztcbmNvbnN0IFJBVEVfU0FNRV9DVVJSRU5DWSA9IDE7XG5jb25zdCBSQVRFX0NVUlJFTkNZX05PVF9GT1VORCA9IDE7XG5jb25zdCBDVVJSRU5DWV9QQUlSID0gJ2N1cnJlbmN5LXBhaXInO1xuY29uc3QgVkVSU0lPTl9QQVRURVJOID0gLyhcXGQrKVxcLihcXGQrKShcXC4oXFxkKykpPygtXFx3Kyk/LztcbmNvbnN0IFZFUlNJT05fUEFUVEVSTl9HUk9VUFNfVE9fRVhUUkFDVCA9IFsxLCAyLCA0LCA1XTtcbmNvbnN0IEFNUF9DT1VOVFJZX0xPR08gPSAnYW1wQ291bnRyeUZsYWcucG5nJztcbmNvbnN0IEFTU0VUU19ESVJFQ1RPUlkgPSAnYXNzZXRzJztcbmNvbnN0IEJBU0VfNjRfUE5HX1BSRUZJWCA9ICdkYXRhOmltYWdlL3BuZztiYXNlNjQsJztcbi8vIEhvbGRzIHRoZSBCQVNFNjQgcmVwcmVzZW50YXRpb24gb2YgYSBhIHRyYW5zcGFyZW50IGltYWdlIDF4MSBpbiBjYXNlIHdlIGRvbid0IHlldCBoYXZlIHRoZSBjb3VudHJ5IGZsYWdcbmNvbnN0XG4gIFRSQU5TUEFSRU5UX0ZMQUcgPSAnaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFFQUFBQUJDQVFBQUFDMUhBd0NBQUFBQzBsRVFWUjRuR1A2endBQUFnY0JBcG9jTVhFQUFBQUFTVVZPUks1Q1lJST0nO1xuY29uc3QgSEVMUF9QREZfRklMRU5BTUUgPSAnYW1wLWhlbHAnO1xuY29uc3QgSEVMUF9ESVIgPSAnaGVscCc7XG5jb25zdCBFTkRTX1dJVEhfUFVOQ1RVQVRJT05fUkVHRVggPSAvWy4hPyw7Ol0kLztcblxuY29uc3QgTUFQX1RJTEVTX0RJUiA9ICdtYXAtdGlsZXMnO1xuY29uc3QgVElMRVNfWklQX0ZJTEUgPSAnbWFwLXRpbGVzLnppcCc7XG5cbi8qIGVzbGludC1kaXNhYmxlIG1heC1sZW4gKi9cbmNvbnN0IE1BUF9NQVJLRVJfSU1BR0UgPSAnZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFCa0FBQUFwQ0FZQUFBREFrNExPQUFBRmdVbEVRVlI0QWExWEE1QmpXUlROMm9XMTdkM1lhWnRyMjk2MkhVemJETnBqc3pXMjRtUnQyOHA0N3Y3enEvYlhadHJwL2xXblhyMzM3ajNuUENlODVOY3lwZ1NGZHVnQ3BXNVlvREFNUmFJTXFSaTZhS3E1RTNZcURRTzNxQXdqVldyRDhOY3EvUkJweWtkOG9aVWIva2FKdXRvdzhyMWFQOUlJMFdtTEtMSXNKeXYxdy9rcXc5Q2gyTVlkQisrMTJPbnhlZS9RTXd2ZjQvRGsvTGZwL2k0bnhUWHRPb1E0cFc1QWo3d3BpY2kxQTllcmRBTjJPSDY0eDhPU1A5ajNGdDNiN2FXa1RnL0ZtOTFzaVRyYTBmOW9uNXNRcjlJTmVqSDZDVVVVcGF2akZOcTFCK09hZGh4bW5mYThSZkVtTjhWTkFzUWhQcUY1NXhIa016ejNqU21DaFdVNmY3L1haS05IKzkraEJMT0hZb3p1S1FQeHlNUFVLa3JYL0swdVduZkZhSkdTMVFQUnRac09QdHIzTnNXMHV5aDZOTkNPa1UzWXorYlhiVDNJOEczeEU1RVhMWHRDWGJicXdDTzl6UFFZUFJUWjV2SURYRDdVK3c3ckZERW9VVWY3aWJISVI0eTZiTFZQWHJ6OEpWWkVxbDEzdHJ4d3VlL3VEaXZkM2ZrV1JiUzYvSUEyYklENHVrMFVwRjFOOHFMbGJCbFhzNEVlN0hMVGZWMWo1NEFQdk9EblNmT1dCcXRLVnZqZ0xLekY1WWRFazVld1JrR2xLMGkzM0VvZmZmYzdIVDU2akQ3LzZVK3FIM0N4N1NCTE5udEg1WUlQdk9EbnlmSVhaWVJWRFBxZ0h0THM1QUJIRDNZekx1ZXNwYjd0NzlGWTM0RGpNd3JWcmNUdXdsVDU1WU1Qdk9CblJySjRWWFRkTm5ZdWc1dWNITEJqRXB0MzA3MDFBM1RzK0hFYTczdTZkVDNGTld3ZmxZODZlTUhQaytZdStpNnB6VXBSclc3U05EZzVKSFI0S2FwbU01V3YyRThUZmNiMUhvcXFITUhVK3VXREQ3emc1NG16NS8yQlNuaXppOVQxRGc0UVFYTFRvR05Da2I2dGIxTlUrUUFsR3IxKytlQURyemhuL3U4UTJZWmhRVmxaNStDQU90cWZiaG1hVUNTMWV6TkZWbTJpbURiUG1Qbmc1d216K2d3aCtvSERjZTBlVXRRNk9HREl5UjB1VWhVc29PM3ZmRG1tZ09lekgwbVpONTl4N01CaSsrV0RMMWcvZUVpVTNhdmxpZE82NzFia0xmd2J3NVhWMlA4UHpvMHlkeTR0Mi8wZXUzM3hZU09NT0Q4aFRmNENyQnRHTVNvWGZQTGNoWCtKMHJ1U2VQdzNMWmVLMGp1UEpiWXpyaGtIMGlvN0IzazE2NGhpR3Zhd2hPS01Ma3JRTHlWcFpnOHJIRlc3RTJ1SE9MODg4SUJQbE5aMUZQenN0U0pNNjk0ZldyNlJ3cHZjSks2MCswSENJTFRCelpMRk5kdEF6SmFvaHplNjBUOHFCenloNVp1T2c1ZTd1d1FwcG9mRW1mMisrRFl2bXlTcUdCdUthaWNGMWJsUWpodUhkdkNJTXZwOHdoVFRmWnpJN1JsZHB3dFN6TCtGMSt3a2RaMlRCT1cyZ0lGODhQQlR6RC9ncGVSRUFNRWJ4bkpjYUpITkhycHpqaTBnUUNTNmhka0VlWXQ5REYvMnFQY0VDOFJNMjhId21yM3NkTnlodDAwYnlBdXQyazNndWZXTnRndE9FT0ZHVXdjWFdORGJkTmJwZ0JHeEV2S2tPUXN4aXZKeDMzaW93MFZ3NVM2U1ZUcnBWcTExeXNBMlJwN2dUZlBma3RjNnpodFhCQkMrYWRSTHNoZjZzRzJSZkhQWjVFQWM0c1ZaODN5Q04wMEZrLzRrZ2d1NDBaVHZJRW01ZzI0cXRVNEtqQnJ4L0JUVEg4aWZWQVNBRzdnS3JuV3hKRGNVN3g4WDZFY2N6aG0zbzZZaWN2c0xYV2ZoM0NoMVcwazh4MG5YRiswZkZ4Z3Q0cGh6OFF2eXBpd0NDRktNcVhDbnFYRXhqcTEwYmVIK1VVQTcrbkc2bWRHL1B1MGYzTGdGY0dybDJzMGtOTmpwbW9KOW80QjI5Q01POGRNVDRRNW94OHVpdEY2ZnFzckpPcjhxbndOYlJ6djZoU25HNXdQKzY0QzdoOWxwMzBoS050S2RXanRka2J1UEExOW5KN1R6M3pSL2liZ0FSYmhiNEFsaGF2Y0JlYm1USGNGbDJmdllFblcwb3g5eE14S0JTOGJ0SitLaUVicTl6QTRSdGhRWERoUGEwVDlURWU2OWdXdXB3YzZ1QlVwaHF1WGdmKy9Gcklqd2VIUVM0L3BkdU1lNUVSVU1IVWQ5eHY4WlI5OEN4a1M0RjJuM0VVclVaMTBFWU53N0JXbTl4MUdpUHNzaTNHZ2lHUkRLV1JZWmZYbE9OK2RmTmJNK0dnSXdZZHdBQUFBQVNVVk9SSzVDWUlJPSc7XG5jb25zdCBNQVBfTUFSS0VSX1NIQURPVyA9ICdkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUNrQUFBQXBDQVFBQUFBQ2FjaDlBQUFDTVVsRVFWUjRBZTNTaFk3alFCQUUwQW96L2Y5L0hUTXpoZzF6cmRLVXJKYmR4K0tkMm5EOFZOdWRmc0wvVGgvLy9keVFOMlRINmYzeS9CR3BDMzc5clYrUytxcWV0Qk94SW1OUVhMOEpDQXIyVjRpTVFYSEdOSnhlQ2ZaWGhTUkJjUU1mdmtPV1VkdGZ6bExnQUVObVpEY21vMlRWbXQ4T1NNMmVYeEJwM0RqSFNNRnV0cVM3U2JtZW16QmlSK3hwS0NOVUlSa2Rra1l4aEFreUdvQnZ5UUZFSkVlZndTbW12QmZKdUo2YUtxS1duQWt2R1pPYVpYVFVnRnFZVUxXTlNIVWNrWnVSMUhJSWltVUV4dXRSeHd6T0xST0lHNHZLbUNLUXQzNjRtSWxoU3l6QWYxbTlsSFpISlpybEFPTU16dFJSaUtpbXAvcnBkSkRjOUF3cnk1eFRaQ3RlN0ZIdHVTOHdKZ2VZR3JleDI4eE5UZDA4NkRpazd2VU1zY1FPYTh5NERvR3RDQ1NrQUtsTndwZ050cGhqckM2TUlIVWtSNllXeHhzNlNjNXhxbjIyMm1tQ1JGekl0OGxFZEt4K2lrQ3RnOTFxUzJXcHdWZkJlbEpDaVFKd3Z6aXhmSTljeFpRV2dpU0plbEtud0JFbEtZdERPYjJNRmJobVVpZ2JSZVFCVjBDZzQrcU1YU3hYU3lHVW40VWJGOGwrN3FkU0duVEMwWExDbWFoSWdVSExoTE9ocFZDdHc0Q3pZWHZMUVdRYkpObXhvQ3NPS0F4U2dCSm5vNzVhdm9sa1J3OGlJQUZjc2RjMDJlOWl5Q2Q4dEh3bWVTU29LVG93SWd2c2NTR1pVT0E3UHVDTjViMkJYOW1RTTdTMHdZaE1OVTc0emdzUEJqM0hVN3dndUFmbnh4akZRR0JFNnB3TitHak1FOXpIWTd6R3A4d1Z4TVNoWVg5Tlh2RVdEM0hid0pmNGdpTzRDRklReFhTY0gxL1RNKzA0a2tCaUFBQUFBRWxGVGtTdVFtQ0MnO1xuY29uc3QgTUFQX01BUktFUl9DSVJDTEVfUkVEID0gJ2RhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQlFBQUFBVUNBWUFBQUNOaVIwTkFBQUFCR2RCVFVFQUFMR1BDL3hoQlFBQUFDQmpTRkpOQUFCNkpnQUFnSVFBQVBvQUFBQ0E2QUFBZFRBQUFPcGdBQUE2bUFBQUYzQ2N1bEU4QUFBQUJtSkxSMFFBL3dEL0FQK2d2YWVUQUFBQUIzUkpUVVVINGdjYkZ3b2dlb2hoRUFBQUExbEpSRUZVT011bGxjMXJIR1VjeHorL1oyWjIwekdFN2x1eVFieUlkaUV4cmU2YU52U3lTRUJCS0I3MVZBSTVtR0pBOWc4UXBSNDhhVkdLNksxNjBwdFlEN1d4aDRDVWtKckZHcEt5S1dnUW1uWGZhWnQ5eVdhZWVUenNURXhqMVlPLzAvRE16R2QrYjkvdkNFSDhjdTUxanNRUWtBRW1nRlJ3VmdNMmdSTFFPL3p3eWF0ZkF5Q1BnVVdBVjRBNVlBWklBblp3endQcXdBcHdCZmdlNkIrR3loRllHbmdYT0ErNEFCanphTjRpNFZVSCtCSjRENmlFaC9ZUjJHZkFhd2NnWTFCUHVGakR3d0RvM1YzOGRtY0FGWEdCQldBY2VET0Voc0JJa05rQTV2czR5UVN4MlR3anAzUFk4ZGlnM21hTCs2dHJ0RzRzNDlVYm9CVEJPMlhnYmFCdlhjZzhCL0FxOEQ3ZzRQc01QZk0wVHhYZXdzMCt6eDkzN3ZENzhvOVVOemJSamszcXBUd2pMNXlrKytzMlhxTVp0bUFDK0JuWXNvTnB6Z0V1eHVBa0V6eDVZWjYrWTFOODV5SzE5UTJNNXczYVo5dWtwaWJKRmhZWlg1am50dzgraEdZckxIOE9XRkxCYXN5RWZZdk41ckhHUmlsZXVreWxlQnVNUVN3THNTd3doa3J4TnNWTGw3SFRvMFR6WitsNkhzR1lab0NNQ3RKTmhnTVlPWjJqdlBvVHRmVU5sRzBkM1UyVWJWRmIzNkJ5YTQzNG1XbHFDam9EYUJLWVVNSFMyZ0RXOERCMlBFWnI2KzVCbVk4TDQzazBTMXU0eVFTK2U0eWRUcHVPMXJaQXl1Yi9oZ2c5N1ZIdXRqa2VpYUlZeU1rTDk4eHJ0b2hsbmtYc2YvNlcyRGJ4ekFtNjlRYjlCdzhSRVhwYTcxZDczYXBpb00wNkl2anREdmRYMXhpZmZwSFUxQ1MrcC84Rzh6MU5hbXFTOUhTT2V6ZFgyRyszUVFTQnVzQ21ZaUQwbFREOTFvMWxkS1ZLdHJESVdQWVVpR0MweG1nTklveGxUNUVyTExLN1UyYjcydEpoS2E0NFNwVkNMWjhEdmdMY2NMSEhGK2F4MDZOVWJxM1JMRzBCRU0rY0lEMmRZM2Vuek5wSG45QXMzVVVHYW1sYkltLzR4bndYQWlQQXg0RTJ3ZmNoRVNlYVAwdjh6RFJ1TWdGQXQ5N2czczBWdHE4dDBhbldRaGdDbjBZdHErQWIwei9zTm1QQTU0Zk5vZXQ1MUJUNDdqRVFvZi9nNFY4OUMwb1YrTVlTdFdBd0ZZVTg0allWQnE1UkJzNGo0cnFPUThyejJLazE2R2tQRVRuSUNtZ0xmR0dKdXVoaktyNHh4SWVpLzIyd0FzbXUxdlpPdDAxUDYzMEpERmFKWEhHVXVyN3YrMzF0RFBGSWxKZC91TXJCaVA3dEZ5Q1FhdlQzcVBhNlZZRk5SNm5TbnRaN2psSVk0SGdrd3V6MWJ3SDRFNW1DWElCTFE1SG5BQUFBSlhSRldIUmtZWFJsT21OeVpXRjBaUUF5TURFNExUQTNMVEkzVkRJeE9qRXdPak15S3pBeU9qQXc3cTZHbndBQUFDVjBSVmgwWkdGMFpUcHRiMlJwWm5rQU1qQXhPQzB3TnkweU4xUXlNVG94TURvek1pc3dNam93TUovelBpTUFBQUFBU1VWT1JLNUNZSUk9JztcbmNvbnN0IE1BUF9NQVJLRVJfQ0lSQ0xFX0dSRUVOID0gJ2RhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQlFBQUFBVUNBWUFBQUNOaVIwTkFBQUFCbUpMUjBRQS93RC9BUCtndmFlVEFBQUFDWEJJV1hNQUFBc1RBQUFMRXdFQW1wd1lBQUFBQjNSSlRVVUg0Z2NiRkJnNi9WaFc0QUFBQTVWSlJFRlVPTXVsbFVGb0hGVVl4My92emV4a3U4VmtkelBycGdwV05Kb200Sm8wTmFTbklrSHJKUmIxVUZBc1htcTNLbGl2SnFDSGhKNHFzUWR0bWtzVkZLUWdZa1RhMEVyeFVDTWhhZDFDUXJRMERiYUoyOTFrZDkxa0pyczdNODlEWnBvMEJCVDh6MlY0Ny9GNzMvZmU5Lytld0ZlbTl6Q2IxVDhZRFFNdFFCdVE4SWR6d0RRd085QlhYTnU4UGpYNkRRQmlLNngvTUdvQUI0RzNnRzdBQkhSLzJnSHl3RGh3RHJnNDBGZXNib2FLTGJBbTRDUGdDQkFCOFBBZWlGd2lnMThMK0JMNGVLQ3ZtTjJZZnhCMkJrZ0RFWS8xTHlKM2tBeVpKRU1tRWJtRFlOemZNQTBNOXc5R2t3RkhaSG9QQjJsKzZpL0F3Nk14RktNbnRwK3UraFJ4dlFHQVphZkVST2tHbHd0WHlUdUZ6ZEdlQWQ0ZjZDdFdnN001NktlSmgwZHplRGZISDMyZHBOYkl4R0tHUzRXZkFXaUpOZE83NjNtNjZsTjhmdmRyYnE3TkI5QWp3SS9BcUhnNWN5d01mQVc4R2tUMjRXTnA5S3JHME5RSW1md01qdWNBb0V1ZGxObktpYjFIcWVvVlRzNmRaWmxTQVAwV2VFUDZwZEVkeE40VDIwOVNhMlJvYW9USjdIV1VVbWhDUXhNYVNpa21zOWNabWhxaFNYK1lBM1g3Y0cwSEpSUStvMFg2ZFdZR0Y5QlZuK0xYeFd0azhqUG8wbUNyZEdtUXljOHdrZjJON25nSEl1ZmlXRFdVVUNiUUp2MmkxUUVlMG5ZUzF4djRvekIzUDgzdDVIZ092eS9md296RWlYaGhySVV5bnVYcVNxaUU1SDlLSW5BckR0WmZaV3BMRlhUZlRnNWdsTjFWbHAwU0xiRm1kS21qbE5vV29rdWRwK05Qa0xPWEtOWEtDQ0Z3YmFkbVYxZnVTZCtiZVluRThtd21TamQ0YmxlS2xObUs0MVczU2JkS3lteWxxNm1kWCs1T3NscXpFRXFBSkE5TVMyRFc5eVlBbHd0WHlicExuTmg3bE01aysvcnV5c1ZWTGtJSU9wUHRmTkQ1TmdzcldTN2N2cklPVzllNE5MUlo3ZnlkWnVlbm5yQU5IQktJMEtwbmM4ditrNDZHUGZUdWZvRW5vNC96eU00a3o1aDdlT1dwbDNpejdUVUtheVZPVFE0elg3NkRGQkpnVlVqUmYzem83NW5BS1JkOW82Y2xrcHRyODV5Y084dUJ1bjEweHp0NE50RzIzcnZzSmM3UC9zQ0YyMWZJMnJrTjYwbStrSVkyRnBKeW85djRCaDhHRGdVV2RHMEhrWE9KZUdFa2dsS3RmUC9NaEJBQjdEdWhxZlI3cDYyc1JHeTQyMjlCeDN5ald4S0pIZ21oRWhvNWQ1a0ZLNHZsMkVoa0FGdEY4cG5RVlByZDAxYldWWXBvbmZIdkRWWUpaYnEybzl1TEs3aTJVL052YzF3SWNVNGEydGc3bjVTcXJsTEVqVHBldkRTSytDOVBnQklxVVZ1cVlPZFc3Z0hUMHRCbTA2ZUtsWkNVS0NCcUdQU01mUS9BUHkxWGcydjZLSXNGQUFBQUFFbEZUa1N1UW1DQyc7XG4vKiBlc2xpbnQtZW5hYmxlIG1heC1sZW4gKi9cbmNvbnN0IFBPTFlHT05fQkFTRV9DT0xPUiA9ICcjMzM4OGZmJztcblxuY29uc3QgREdfQ09NUEFOWV9OQU1FID0gJ0RldmVsb3BtZW50IEdhdGV3YXknO1xuY29uc3QgREdfQUREUkVTU18xID0gJzExMTAgVmVybW9udCBBdmUsIE5XLCBTdWl0ZSA1MDAnO1xuY29uc3QgREdfQUREUkVTU18yID0gJ1dhc2hpbmd0b24sIERDIDIwMDA1IFVTQSc7XG5jb25zdCBER19DT05UQUNUX0lORk8gPSAnaW5mb0BkZXZlbG9wbWVudGdhdGV3YXkub3JnLCBUZWw6ICsxLjIwMi41NzIuOTIwMCwgRmF4OiArMSAyMDIuNTcyLjkyOTAnO1xuXG5jb25zdCBMT0dfRElSID0gJ2xvZ3MnO1xuY29uc3QgTE9HX0ZJTEVfTkFNRSA9ICdhbXBvZmZsaW5lJztcbmNvbnN0IExPR19GSUxFX0VYVEVOU0lPTiA9ICdsb2cnO1xuXG4vLyBNZXNzYWdlIGNvbnN0YW50c1xuLy8gdG90YWwgYW1vdW50IG9mIHRpbWUgdGhlIG1lc3NhZ2Ugc3RheXMgdmlzaWJsZVxuY29uc3QgTUVTU0FHRV9USU1FT1VUID0gMTAgKiAxMDAwO1xuLy8gd2hlbiBpdCdzIHRoaXMgYW1vdW50IG9mIHRpbWUgbGVmdCwgd2Ugbm9maXR5IHRoZSB1c2VyIHRoYXQgdGhlIG1lc3NhZ2UgaXMgYWJvdXQgdG8gZGlzYXBwZWFyXG5jb25zdCBNRVNTQUdFX0RJU0FQUEVBUl9USU1FT1VUID0gTUVTU0FHRV9USU1FT1VUIC8gNTtcbmNvbnN0IE1FU1NBR0VfQ0hFQ0tfSU5URVJWQUwgPSAxMDA7XG4vLyBob3cgbG9uZyBzaG91bGQgdGhlIGVudGVyL2xlYXZlIGFuaW1hdGlvbiBydW4obXMpXG4vLyAoaWYgeW91IGNoYW5nZSB0aGlzIHlvdSdsbCB3YW5uYSBjaGFuZ2UgaXQgaW4gc3R5bGUuY3NzLCB0b28pXG5jb25zdCBNRVNTQUdFX0FOSU1BVElPTl9EVVJBVElPTiA9IDUwMDtcblxuLy8gdGhpcyBpcyB0aGUgaW50ZXJuYWwgZGF0ZSBmb3JtYXQgdXNlZCB0byBzdG9yZSBhbmQgc3luYyB1cCBkYXRlc1xuY29uc3QgSU5URVJOQUxfREFURV9GT1JNQVQgPSAnWVlZWS1NTS1ERFRISDptbTpzcy5TU1NaJztcbi8vIGN1cnJlbnRseSBzdXBwb3J0ZWQgbWF4ICYgbWluIHllYXJzIGluIEFNUCwgaS5lLiBmcm9tIDE5NzAtMDEtMDEgdGlsbCAyMDUwLTEyLTMxXG5jb25zdCBNSU5fU1VQUE9SVEVEX1lFQVIgPSAxOTcwO1xuY29uc3QgTUFYX1NVUFBPUlRFRF9ZRUFSID0gMjA1MDtcblxuY29uc3QgVVBEQVRFU19ESVIgPSAndXBkYXRlcyc7XG5jb25zdCBDT05URU5UX0RJU1BPU0lUSU9OX0hFQURFUiA9ICdDb250ZW50LURpc3Bvc2l0aW9uJztcbmNvbnN0IFVQREFURV9UTVBfRklMRSA9ICdhbXAtb2ZmbGluZS1pbnN0YWxsZXIudG1wJztcblxuY29uc3QgT1RIRVJfSUQgPSA5OTk5OTk5OTk7XG5jb25zdCBOUl9TWU5DX0hJU1RPUllfRU5UUklFUyA9IDIwO1xuY29uc3QgTlJfTE9HX0ZJTEVTID0gMTAwO1xuLy8gaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvSVNPXzg2MDEjRHVyYXRpb25zLCBleGFtcGxlOiBcIlAxWTJNMTBEVDJIMzBNXCJcbmNvbnN0IE9MRF9TWU5DX0xPR1NfRFVSQVRJT05fSVNPXzg2MDEgPSAnUDZNJztcbmNvbnN0IE5SX09MRF9TWU5DX0xPR1NfVE9fS0VFUF9NSU5JTVVNID0gTlJfU1lOQ19ISVNUT1JZX0VOVFJJRVM7XG5cbmNvbnN0IE1BU1RFUl9CUkFOQ0ggPSAnbWFzdGVyJztcbmNvbnN0IERFVkVMT1BfQlJBTkNIID0gJ2RldmVsb3AnO1xuY29uc3QgUkVMRUFTRV9CUkFOQ0hfUkVHRVggPSAvcmVsZWFzZVxcLy87XG5jb25zdCBSRUxFQVNFX0JSQU5DSEVTID0gW01BU1RFUl9CUkFOQ0gsIFJFTEVBU0VfQlJBTkNIX1JFR0VYXTtcblxuY29uc3QgRElTQUJMRV9DSEFOR0VMT0dTID0gJ0RJU0FCTEVfQ0hBTkdFTE9HUyc7XG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmZyZWV6ZSh7XG4gIEJBU0VfUkVTVF9VUkwsXG4gIENPTk5FQ1RJT05fVElNRU9VVCxcbiAgQ09OTkVDVElPTl9GT1JDRURfVElNRU9VVCxcbiAgVElNRU9VVF9DSEVDS19JTlRFUlZBTCxcbiAgTUFYX1JFVFJZX0FURU1QVFMsXG4gIEVSUk9SU19UT19SRVRSWSxcbiAgRVJST1JTX05PX0FNUF9TRVJWRVIsXG4gIENPTk5FQ1RJVklUWV9DSEVDS19JTlRFUlZBTCxcbiAgV09SS1NQQUNFX1VSTCxcbiAgTE9HSU5fVVJMLFxuICBERVNLVE9QX1VSTCxcbiAgREVTS1RPUF9DVVJSRU5UX1VSTCxcbiAgU1lOQ1VQX1JFRElSRUNUX1VSTCxcbiAgU1lOQ1VQX0hJU1RPUllfVEFSR0VULFxuICBTWU5DVVBfU1VNTUFSWV9VUkwsXG4gIEFDVElWSVRZX1BSRVZJRVdfVVJMLFxuICBBQ1RJVklUWV9FRElUX1VSTCxcbiAgVVBEQVRFX1VSTCxcbiAgU0VUVVBfVVJMLFxuICBTRVRUSU5HU19VUkwsXG4gIENPTExFQ1RJT05fVVNFUlMsXG4gIENPTExFQ1RJT05fV09SS1BBQ0VTLFxuICBDT0xMRUNUSU9OX1RFQU1NRU1CRVJTLFxuICBDT0xMRUNUSU9OX0NMSUVOVF9TRVRUSU5HUyxcbiAgQ09MTEVDVElPTl9HTE9CQUxfU0VUVElOR1MsXG4gIENPTExFQ1RJT05fQUNUSVZJVElFUyxcbiAgQ09MTEVDVElPTl9GSUVMRFMsXG4gIENPTExFQ1RJT05fUE9TU0lCTEVfVkFMVUVTLFxuICBDT0xMRUNUSU9OX1NZTkNVUF9MT0csXG4gIENPTExFQ1RJT05fTEFOR1MsXG4gIENPTExFQ1RJT05fV1NfU0VUVElOR1MsXG4gIENPTExFQ1RJT05fQ1VSUkVOQ1lfUkFURVMsXG4gIENPTExFQ1RJT05fRkVBVFVSRV9NQU5BR0VSLFxuICBDT0xMRUNUSU9OX0NPTlRBQ1RTLFxuICBDT0xMRUNUSU9OX1JFU09VUkNFUyxcbiAgQ09MTEVDVElPTl9SRVBPU0lUT1JZLFxuICBDT0xMRUNUSU9OX0dBWkVUVEVFUixcbiAgQ09MTEVDVElPTl9DQUxFTkRBUlMsXG4gIENPTExFQ1RJT05fQ0hBTkdFU0VUUyxcbiAgR0FaRVRURUVSX0RJU1RBTkNFX0RJVklERSxcbiAgREJfRklMRV9QUkVGSVgsXG4gIERCX0ZJTEVfRVhURU5TSU9OLFxuICBEQl9DT01NT05fREFUQVNUT1JFX09QVElPTlMsXG4gIERCX0FVVE9DT01QQUNUX0lOVEVSVkFMX01JTElTRUNPTkRTLFxuICBEQl9ERUZBVUxUX1FVRVJZX0xJTUlULFxuICBMQU5HVUFHRV9FTkdMSVNILFxuICBGU19MT0NBTEVTX0RJUkVDVE9SWSxcbiAgTEFOR1VBR0VfTUFTVEVSX1RSQU5TTEFUSU9OU19GSUxFLFxuICBMQU5HVUFHRV9UUkFOU0xBVElPTlNfRklMRSxcbiAgTEFOR1VBR0VfTkVXX1RSQU5TTEFUSU9OU19NVVNUX1NZTkMsXG4gIEFTQVJfRElSLFxuICBBUFBfRElSRUNUT1JZLFxuICBURVNUX0RJUkVDVE9SWSxcbiAgU1RBVElDX0RJUixcbiAgSU1BR0VTX0RJUixcbiAgRE9DX0lDT05TLFxuICBEQl9TVEFUSUNfRElSLFxuICBNSUdSQVRJT05TX0RJUixcbiAgSEFTSF9JVEVSQVRJT05TLFxuICBESUdFU1RfQUxHT1JJVEhNX1NIQTEsXG4gIERJR0VTVF9BTEdPUklUSE1fU0hBMjU2LFxuICBBQ1RJVklUWV9FRElULFxuICBBQ1RJVklUWV9WSUVXLFxuICBTWU5DVVBfRk9SQ0VfREFZUyxcbiAgU1lOQ1VQX0JFU1RfQkVGT1JFX0RBWVMsXG4gIFNZTkNVUF9OT19EQVRFLFxuICBTWU5DVVBfVFlQRV9UUkFOU0xBVElPTlMsXG4gIFNZTkNVUF9UWVBFX1VTRVJTLFxuICBTWU5DVVBfVFlQRV9BU1NFVFMsXG4gIFNZTkNVUF9UWVBFX1dPUktTUEFDRVMsXG4gIFNZTkNVUF9UWVBFX0dTLFxuICBTWU5DVVBfVFlQRV9FWENIQU5HRV9SQVRFUyxcbiAgU1lOQ1VQX1RZUEVfRkVBVFVSRV9NQU5BR0VSLFxuICBTWU5DVVBfVFlQRV9XT1JLU1BBQ0VfTUVNQkVSUyxcbiAgU1lOQ1VQX1RZUEVfQUxMX0ZJRUxEUyxcbiAgU1lOQ1VQX1RZUEVfQUNUSVZJVElFU19QVUxMLFxuICBTWU5DVVBfVFlQRV9BQ1RJVklUSUVTX1BVU0gsXG4gIFNZTkNVUF9UWVBFX0FDVElWSVRZX0ZJRUxEUyxcbiAgU1lOQ1VQX1RZUEVfQUNUSVZJVFlfRklFTERTX1NUUlVDVFVSQUxfQ0hBTkdFUyxcbiAgU1lOQ1VQX1RZUEVfQ09OVEFDVFNfUFVMTCxcbiAgU1lOQ1VQX1RZUEVfQ09OVEFDVFNfUFVTSCxcbiAgU1lOQ1VQX1RZUEVfQUNUSVZJVFlfUE9TU0lCTEVfVkFMVUVTLFxuICBTWU5DVVBfVFlQRV9DT05UQUNUX0ZJRUxEUyxcbiAgU1lOQ1VQX1RZUEVfQ09OVEFDVF9GSUVMRFNfU1RSVUNUVVJBTF9DSEFOR0VTLFxuICBTWU5DVVBfVFlQRV9DT05UQUNUX1BPU1NJQkxFX1ZBTFVFUyxcbiAgU1lOQ1VQX1RZUEVfUkVTT1VSQ0VTX1BVTEwsXG4gIFNZTkNVUF9UWVBFX1JFU09VUkNFU19QVVNILFxuICBTWU5DVVBfVFlQRV9SRVNPVVJDRV9GSUVMRFMsXG4gIFNZTkNVUF9UWVBFX1JFU09VUkNFX0ZJRUxEU19TVFJVQ1RVUkFMX0NIQU5HRVMsXG4gIFNZTkNVUF9UWVBFX1JFU09VUkNFX1BPU1NJQkxFX1ZBTFVFUyxcbiAgU1lOQ1VQX1RZUEVfQ09NTU9OX1BPU1NJQkxFX1ZBTFVFUyxcbiAgU1lOQ1VQX1RZUEVfV09SS1NQQUNFX1NFVFRJTkdTLFxuICBTWU5DVVBfVFlQRV9NQVBfVElMRVMsXG4gIFNZTkNVUF9UWVBFX0dBWkVUVEVFUixcbiAgU1lOQ1VQX1RZUEVfQ0FMRU5EQVJTLFxuICBTWU5DVVBfU1RBVFVTX1NVQ0NFU1MsXG4gIFNZTkNVUF9TVEFUVVNfRkFJTCxcbiAgU1lOQ1VQX1NUQVRVU19QQVJUSUFMLFxuICBTWU5DVVBfU1RBVFVTX0NBTkNFTEVELFxuICBTWU5DVVBfU1lOQ19SRVFVRVNURURfQVQsXG4gIFNZTkNVUF9TWU5DX1JFUVVFU1RFRF9CWSxcbiAgU1lOQ1VQX0RBVEVUSU1FX0ZJRUxELFxuICBTWU5DVVBfRElGRl9MRUZUT1ZFUixcbiAgU1lOQ1VQX0RFUEVOREVOQ1lfQ0hFQ0tfSU5URVJWQUwsXG4gIFNZTkNVUF9ERVRBSUxTX1NZTkNFRCxcbiAgU1lOQ1VQX0RFVEFJTFNfVU5TWU5DRUQsXG4gIFNZTkNVUF9SRVNPVVJDRV9QVUxMX0JBVENIX1NJWkUsXG4gIFNZTkNVUF9BQ1RJVklUSUVTX1BVTExfQkFUQ0hfU0laRSxcbiAgU1lOQ1VQX0NPTlRBQ1RTX1BVTExfQkFUQ0hfU0laRSxcbiAgQUNUSVZJVFlfU1RBVFVTX0RSQUZULFxuICBBQ1RJVklUWV9TVEFUVVNfVU5WQUxJREFURUQsXG4gIEFDVElWSVRZX1NUQVRVU19WQUxJREFURUQsXG4gIENVUlJFTkNZX0hPVVIsXG4gIERFRkFVTFRfQ1VSUkVOQ1ksXG4gIFJBVEVfU0FNRV9DVVJSRU5DWSxcbiAgUkFURV9DVVJSRU5DWV9OT1RfRk9VTkQsXG4gIENVUlJFTkNZX1BBSVIsXG4gIFZFUlNJT05fUEFUVEVSTixcbiAgVkVSU0lPTl9QQVRURVJOX0dST1VQU19UT19FWFRSQUNULFxuICBBTVBfQ09VTlRSWV9MT0dPLFxuICBBU1NFVFNfRElSRUNUT1JZLFxuICBCQVNFXzY0X1BOR19QUkVGSVgsXG4gIFRSQU5TUEFSRU5UX0ZMQUcsXG4gIEhFTFBfUERGX0ZJTEVOQU1FLFxuICBIRUxQX0RJUixcbiAgRU5EU19XSVRIX1BVTkNUVUFUSU9OX1JFR0VYLFxuICBNQVBfVElMRVNfRElSLFxuICBUSUxFU19aSVBfRklMRSxcbiAgTUFQX01BUktFUl9JTUFHRSxcbiAgTUFQX01BUktFUl9TSEFET1csXG4gIE1BUF9NQVJLRVJfQ0lSQ0xFX1JFRCxcbiAgTUFQX01BUktFUl9DSVJDTEVfR1JFRU4sXG4gIFBPTFlHT05fQkFTRV9DT0xPUixcbiAgREdfQ09NUEFOWV9OQU1FLFxuICBER19BRERSRVNTXzEsXG4gIERHX0FERFJFU1NfMixcbiAgREdfQ09OVEFDVF9JTkZPLFxuICBMT0dfRElSLFxuICBMT0dfRklMRV9OQU1FLFxuICBMT0dfRklMRV9FWFRFTlNJT04sXG4gIE1FU1NBR0VfVElNRU9VVCxcbiAgTUVTU0FHRV9ESVNBUFBFQVJfVElNRU9VVCxcbiAgTUVTU0FHRV9DSEVDS19JTlRFUlZBTCxcbiAgTUVTU0FHRV9BTklNQVRJT05fRFVSQVRJT04sXG4gIElOVEVSTkFMX0RBVEVfRk9STUFULFxuICBNSU5fU1VQUE9SVEVEX1lFQVIsXG4gIE1BWF9TVVBQT1JURURfWUVBUixcbiAgVVBEQVRFU19ESVIsXG4gIENPTlRFTlRfRElTUE9TSVRJT05fSEVBREVSLFxuICBVUERBVEVfVE1QX0ZJTEUsXG4gIE9USEVSX0lELFxuICBOUl9TWU5DX0hJU1RPUllfRU5UUklFUyxcbiAgTlJfTE9HX0ZJTEVTLFxuICBPTERfU1lOQ19MT0dTX0RVUkFUSU9OX0lTT184NjAxLFxuICBOUl9PTERfU1lOQ19MT0dTX1RPX0tFRVBfTUlOSU1VTSxcbiAgTUFTVEVSX0JSQU5DSCxcbiAgREVWRUxPUF9CUkFOQ0gsXG4gIFJFTEVBU0VfQlJBTkNIX1JFR0VYLFxuICBSRUxFQVNFX0JSQU5DSEVTLFxuICBESVNBQkxFX0NIQU5HRUxPR1Ncbn0pO1xuIiwiLyogZXNsaW50LWRpc2FibGUgbWF4LWxlbiAqL1xuXG4vKipcbiAqIEBhdXRob3IgTmFkZWpkYSBNYW5kcmVzY3VcbiAqL1xuXG5jb25zdCBQVUJMSUNfVklFV19DSEFOR0VfUEFTU1dPUkQgPSAnL1BVQkxJQyBWSUVXL0xvZ2luIC0gVXNlciBNYW5hZ2VtZW50L0NoYW5nZSBQYXNzd29yZCc7XG5jb25zdCBQVUJMSUNfVklFV19UUk9VQkxFX1NJR05fSU4gPSAnL1BVQkxJQyBWSUVXL0xvZ2luIC0gVXNlciBNYW5hZ2VtZW50L1Ryb3VibGUgc2lnbmluZyBpbic7XG5jb25zdCBBQ1RJVklUWV9ERUxJVkVSWV9SQVRFID0gJy9QUk9KRUNUIE1BTkFHRU1FTlQvRnVuZGluZy9GdW5kaW5nIEluZm9ybWF0aW9uL0RlbGl2ZXJ5IHJhdGUnO1xuY29uc3QgQUNUSVZJVFlfUFJPSkVDVF9JRF9BTkRfUExBTk5JTkcgPSAnL1BST0pFQ1QgTUFOQUdFTUVOVC9Qcm9qZWN0IElEIGFuZCBQbGFubmluZyc7XG5jb25zdCBBQ1RJVklUWV9EVVJBVElPTl9PRl9QUk9KRUNUID0gJy9QUk9KRUNUIE1BTkFHRU1FTlQvUHJvamVjdCBJRCBhbmQgUGxhbm5pbmcvUGxhbm5pbmcvRHVyYXRpb24gb2YgUHJvamVjdCc7XG5jb25zdCBBQ1RJVklUWV9URUFNX0xFQURFUiA9ICcvUFJPSkVDVCBNQU5BR0VNRU5UL1Byb2plY3QgSUQgYW5kIFBsYW5uaW5nL0lkZW50aWZpY2F0aW9uL0RhdGEgVGVhbSBMZWFkZXInO1xuY29uc3QgQUNUSVZJVFlfU0FNRV9BU19QUk9QT1NFRF9TVEFSVF9EQVRFID1cbiAgJy9BY3Rpdml0eSBGb3JtL1BsYW5uaW5nL0FjdHVhbCBTdGFydCBEYXRlL1NhbWUgQXMgUHJvcG9zZWQgU3RhcnQgRGF0ZSc7XG5jb25zdCBBQ1RJVklUWV9TQU1FX0FTX1BST1BPU0VEX0FQUFJPVkFMX0RBVEUgPVxuICAnL0FjdGl2aXR5IEZvcm0vUGxhbm5pbmcvQWN0dWFsIEFwcHJvdmFsIERhdGUvU2FtZSBBcyBQcm9wb3NlZCBBcHByb3ZhbCBEYXRlJztcbmNvbnN0IEFDVElWSVRZX0lERU5USUZJQ0FUSU9OID0gJy9BY3Rpdml0eSBGb3JtL0lkZW50aWZpY2F0aW9uJztcbmNvbnN0IEFDVElWSVRZX0xBU1RfVVBEQVRFRF9CWSA9ICcvQWN0aXZpdHkgRm9ybS9JZGVudGlmaWNhdGlvbi9BY3Rpdml0eSBMYXN0IFVwZGF0ZWQgYnknO1xuY29uc3QgQUNUSVZJVFlfTEFTVF9VUERBVEVEX09OID0gJy9BY3Rpdml0eSBGb3JtL0lkZW50aWZpY2F0aW9uL0FjdGl2aXR5IFVwZGF0ZWQgT24nO1xuY29uc3QgQUNUSVZJVFlfRlVORElORyA9ICcvQWN0aXZpdHkgRm9ybS9GdW5kaW5nJztcbmNvbnN0IEFGX0ZVTkRJTkdfRlVORElOR0dST1VQX0ZVTkRJTkdJVEVNID0gYCR7QUNUSVZJVFlfRlVORElOR30vRnVuZGluZyBHcm91cC9GdW5kaW5nIEl0ZW1gO1xuY29uc3QgQUNUSVZJVFlfU0VDVE9SUyA9ICcvQWN0aXZpdHkgRm9ybS9TZWN0b3JzJztcbmNvbnN0IEFDVElWSVRZX1BSSU1BUllfU0VDVE9SUyA9ICcvQWN0aXZpdHkgRm9ybS9TZWN0b3JzL1ByaW1hcnkgU2VjdG9ycyc7XG5jb25zdCBBQ1RJVklUWV9TRUNPTkRBUllfU0VDVE9SUyA9ICcvQWN0aXZpdHkgRm9ybS9TZWN0b3JzL1NlY29uZGFyeSBTZWN0b3JzJztcblxuY29uc3QgQUNUSVZJVFlfU1RSVUNUVVJFUyA9ICcvQWN0aXZpdHkgRm9ybS9TdHJ1Y3R1cmVzJztcbmNvbnN0IEFDVElWSVRZX1NUUlVDVFVSRVNfQUREX1NUUlVDVFVSRSA9IGAke0FDVElWSVRZX1NUUlVDVFVSRVN9L0FkZCBTdHJ1Y3R1cmVgO1xuXG5jb25zdCBBQ1RJVklUWV9PUkdBTklaQVRJT05TID0gJy9BY3Rpdml0eSBGb3JtL09yZ2FuaXphdGlvbnMnO1xuY29uc3QgQUNUSVZJVFlfT1JHQU5JWkFUSU9OU19ET05PUl9PUkdBTklaQVRJT04gPSBgJHtBQ1RJVklUWV9PUkdBTklaQVRJT05TfS9Eb25vciBPcmdhbml6YXRpb25gO1xuY29uc3QgQUNUSVZJVFlfT1JHQU5JWkFUSU9OU19CRU5FRklDSUFSWV9BR0VOQ1kgPSBgJHtBQ1RJVklUWV9PUkdBTklaQVRJT05TfS9CZW5lZmljaWFyeSBBZ2VuY3lgO1xuY29uc3QgQUNUSVZJVFlfT1JHQU5JWkFUSU9OU19DT05UUkFDVElOR19BR0VOQ1kgPSBgJHtBQ1RJVklUWV9PUkdBTklaQVRJT05TfS9Db250cmFjdGluZyBBZ2VuY3lgO1xuY29uc3QgQUNUSVZJVFlfT1JHQU5JWkFUSU9OU19FWEVDVVRJTkdfQUdFTkNZID0gYCR7QUNUSVZJVFlfT1JHQU5JWkFUSU9OU30vRXhlY3V0aW5nIEFnZW5jeWA7XG5jb25zdCBBQ1RJVklUWV9PUkdBTklaQVRJT05TX0lNUExFTUVOVElOR19BR0VOQ1kgPSBgJHtBQ1RJVklUWV9PUkdBTklaQVRJT05TfS9JbXBsZW1lbnRpbmcgQWdlbmN5YDtcbmNvbnN0IEFDVElWSVRZX09SR0FOSVpBVElPTlNfUkVHSU9OQUxfR1JPVVAgPSBgJHtBQ1RJVklUWV9PUkdBTklaQVRJT05TfS9SZWdpb25hbCBHcm91cGA7XG5jb25zdCBBQ1RJVklUWV9PUkdBTklaQVRJT05TX1JFTEFURURfR09WRVJOTUVOVF9PUkdBTklaQVRJT04gPSBgJHtBQ1RJVklUWV9PUkdBTklaQVRJT05TfS9SZWxhdGVkIEdvdmVybm1lbnQgT3JnYW5pemF0aW9uYDtcbmNvbnN0IEFDVElWSVRZX09SR0FOSVpBVElPTlNfU0VDVE9SX0dST1VQID0gYCR7QUNUSVZJVFlfT1JHQU5JWkFUSU9OU30vU2VjdG9yIEdyb3VwYDtcblxuY29uc3QgQUREX0ZVTkRJTkdfQVVUTyA9ICdBZGQgRnVuZGluZyBJdGVtIEF1dG9tYXRpY2FsbHknO1xuY29uc3QgQUNUSVZJVFlfT1JHQU5JWkFUSU9OU19CRU5FRklDSUFSWV9BR0VOQ1lfQUREX0ZVTkRJTkdfQVVUTyA9IGAke0FDVElWSVRZX09SR0FOSVpBVElPTlNfQkVORUZJQ0lBUllfQUdFTkNZfS8ke0FERF9GVU5ESU5HX0FVVE99YDtcbmNvbnN0IEFDVElWSVRZX09SR0FOSVpBVElPTlNfQ09OVFJBQ1RJTkdfQUdFTkNZX0FERF9GVU5ESU5HX0FVVE8gPSBgJHtBQ1RJVklUWV9PUkdBTklaQVRJT05TX0NPTlRSQUNUSU5HX0FHRU5DWX0vJHtBRERfRlVORElOR19BVVRPfWA7XG5jb25zdCBBQ1RJVklUWV9PUkdBTklaQVRJT05TX0RPTk9SX09SR0FOSVpBVElPTl9BRERfRlVORElOR19BVVRPID0gYCR7QUNUSVZJVFlfT1JHQU5JWkFUSU9OU19ET05PUl9PUkdBTklaQVRJT059LyR7QUREX0ZVTkRJTkdfQVVUT31gO1xuY29uc3QgQUNUSVZJVFlfT1JHQU5JWkFUSU9OU19FWEVDVVRJTkdfQUdFTkNZX0FERF9GVU5ESU5HX0FVVE8gPSBgJHtBQ1RJVklUWV9PUkdBTklaQVRJT05TX0VYRUNVVElOR19BR0VOQ1l9LyR7QUREX0ZVTkRJTkdfQVVUT31gO1xuY29uc3QgQUNUSVZJVFlfT1JHQU5JWkFUSU9OU19JTVBMRU1FTlRJTkdfQUdFTkNZX0FERF9GVU5ESU5HX0FVVE8gPSBgJHtBQ1RJVklUWV9PUkdBTklaQVRJT05TX0lNUExFTUVOVElOR19BR0VOQ1l9LyR7QUREX0ZVTkRJTkdfQVVUT31gO1xuY29uc3QgQUNUSVZJVFlfT1JHQU5JWkFUSU9OU19SRUdJT05BTF9HUk9VUF9BRERfRlVORElOR19BVVRPID0gYCR7QUNUSVZJVFlfT1JHQU5JWkFUSU9OU19SRUdJT05BTF9HUk9VUH0vJHtBRERfRlVORElOR19BVVRPfWA7XG5jb25zdCBBQ1RJVklUWV9PUkdBTklaQVRJT05TX1JFU1BPTlNJQkxFX09SR0FOSVpBVElPTl9BRERfRlVORElOR19BVVRPID0gYCR7QUNUSVZJVFlfT1JHQU5JWkFUSU9OU19SRUxBVEVEX0dPVkVSTk1FTlRfT1JHQU5JWkFUSU9OfS8ke0FERF9GVU5ESU5HX0FVVE99YDtcbmNvbnN0IEFDVElWSVRZX09SR0FOSVpBVElPTlNfU0VDVE9SX0dST1VQX0FERF9GVU5ESU5HX0FVVE8gPSBgJHtBQ1RJVklUWV9PUkdBTklaQVRJT05TX1NFQ1RPUl9HUk9VUH0vJHtBRERfRlVORElOR19BVVRPfWA7XG5cbmNvbnN0IEFDVElWSVRZX0ZVTkRJTkdfU0VBUkNIID0gYCR7QUNUSVZJVFlfRlVORElOR30vU2VhcmNoIEZ1bmRpbmcgT3JnYW5pemF0aW9uc2A7XG5jb25zdCBBQ1RJVklUWV9GVU5ESU5HX1NFQVJDSF9PUkdBTklaQVRJT04gPSBgJHtBQ1RJVklUWV9GVU5ESU5HX1NFQVJDSH0vU2VhcmNoIE9yZ2FuaXphdGlvbnNgO1xuY29uc3QgQUNUSVZJVFlfRlVORElOR19TRUxFQ1RfT1JHX1RZUEUgPSBgJHtBQ1RJVklUWV9GVU5ESU5HX1NFQVJDSH0vU2VsZWN0IE9yZ2FuaXphdGlvbiBUeXBlYDtcblxuY29uc3QgQUNUSVZJVFlfUFJPR1JBTSA9ICcvQWN0aXZpdHkgRm9ybS9Qcm9ncmFtJztcbmNvbnN0IEFDVElWSVRZX1BMQU5OSU5HID0gJy9BY3Rpdml0eSBGb3JtL1BsYW5uaW5nJztcblxuY29uc3QgQUNUSVZJVFlfQ09OVEFDVCA9ICcvQWN0aXZpdHkgRm9ybS9Db250YWN0cyc7XG5jb25zdCBBQ1RJVklUWV9ET0NVTUVOVFNfQUREX0RPQ1VNRU5UID0gJy9BY3Rpdml0eSBGb3JtL1JlbGF0ZWQgRG9jdW1lbnRzL0FkZCBOZXcgRG9jdW1lbnQnO1xuY29uc3QgQUNUSVZJVFlfRE9DVU1FTlRTX0FERF9XRUJMSU5LID0gJy9BY3Rpdml0eSBGb3JtL1JlbGF0ZWQgRG9jdW1lbnRzL0FkZCBOZXcgV2ViIExpbmsnO1xuXG5jb25zdCBBQ1RJVklUWV9JU1NVRVNfQUREX0lTU1VFID0gJy9BY3Rpdml0eSBGb3JtL0lzc3VlcyBTZWN0aW9uL0FkZCBJc3N1ZSc7XG5jb25zdCBBQ1RJVklUWV9JU1NVRVNfREVMRVRFX0lTU1VFID0gJy9BY3Rpdml0eSBGb3JtL0lzc3VlcyBTZWN0aW9uL0lzc3VlL0RlbGV0ZSBJdGVtJztcbmNvbnN0IEFDVElWSVRZX0lTU1VFU19BRERfTUVBU1VSRSA9ICcvQWN0aXZpdHkgRm9ybS9Jc3N1ZXMgU2VjdGlvbi9Jc3N1ZS9BZGQgSXRlbSc7XG5jb25zdCBBQ1RJVklUWV9JU1NVRVNfREVMRVRFX01FQVNVUkUgPSAnL0FjdGl2aXR5IEZvcm0vSXNzdWVzIFNlY3Rpb24vSXNzdWUvTWVhc3VyZS9EZWxldGUgSXRlbSc7XG5jb25zdCBBQ1RJVklUWV9JU1NVRVNfQUREX0FDVE9SID0gJy9BY3Rpdml0eSBGb3JtL0lzc3VlcyBTZWN0aW9uL0lzc3VlL01lYXN1cmUvQWRkIEl0ZW0nO1xuY29uc3QgQUNUSVZJVFlfSVNTVUVTX0RFTEVURV9BQ1RPUiA9ICcvQWN0aXZpdHkgRm9ybS9Jc3N1ZXMgU2VjdGlvbi9Jc3N1ZS9NZWFzdXJlL0FjdG9yL0RlbGV0ZSBJdGVtJztcblxuY29uc3QgQUNUSVZJVFlfRElTQlVSU0VNRU5UU19GVU5ESU5HX0ZMT1dTX09SR1JPTEVfQUREX0lNUExFTUVOVElOR19BR0VOQ1kgPVxuICBgJHtBRl9GVU5ESU5HX0ZVTkRJTkdHUk9VUF9GVU5ESU5HSVRFTX0vRGlzYnVyc2VtZW50cy9EaXNidXJzZW1lbnRzIFRhYmxlL0Z1bmRpbmcgRmxvd3MgT3JnUm9sZSBTZWxlY3Rvci9BZGQgSW1wbGVtZW50aW5nIEFnZW5jeWA7XG5jb25zdCBBQ1RJVklUWV9ESVNCVVJTRU1FTlRTX0ZVTkRJTkdfRkxPV1NfT1JHUk9MRV9BRERfQ09OVFJBQ1RJTkdfQUdFTkNZID1cbiAgYCR7QUZfRlVORElOR19GVU5ESU5HR1JPVVBfRlVORElOR0lURU19L0Rpc2J1cnNlbWVudHMvRGlzYnVyc2VtZW50cyBUYWJsZS9GdW5kaW5nIEZsb3dzIE9yZ1JvbGUgU2VsZWN0b3IvQWRkIENvbnRyYWN0aW5nIEFnZW5jeWA7XG5jb25zdCBBQ1RJVklUWV9ESVNCVVJTRU1FTlRTX0ZVTkRJTkdfRkxPV1NfT1JHUk9MRV9BRERfQkVORUZJQ0lBUllfQUdFTkNZID1cbiAgYCR7QUZfRlVORElOR19GVU5ESU5HR1JPVVBfRlVORElOR0lURU19L0Rpc2J1cnNlbWVudHMvRGlzYnVyc2VtZW50cyBUYWJsZS9GdW5kaW5nIEZsb3dzIE9yZ1JvbGUgU2VsZWN0b3IvQWRkIEJlbmVmaWNpYXJ5IEFnZW5jeWA7XG5jb25zdCBBQ1RJVklUWV9ESVNCVVJTRU1FTlRTX0ZVTkRJTkdfRkxPV1NfT1JHUk9MRV9BRERfRE9OT1JfT1JHQU5JWkFUSU9OID1cbiAgYCR7QUZfRlVORElOR19GVU5ESU5HR1JPVVBfRlVORElOR0lURU19L0Rpc2J1cnNlbWVudHMvRGlzYnVyc2VtZW50cyBUYWJsZS9GdW5kaW5nIEZsb3dzIE9yZ1JvbGUgU2VsZWN0b3IvQWRkIERvbm9yIE9yZ2FuaXphdGlvbmA7XG5jb25zdCBBQ1RJVklUWV9ESVNCVVJTRU1FTlRTX0ZVTkRJTkdfRkxPV1NfT1JHUk9MRV9BRERfRVhFQ1VUSU5HX0FHRU5DWSA9XG4gIGAke0FGX0ZVTkRJTkdfRlVORElOR0dST1VQX0ZVTkRJTkdJVEVNfS9EaXNidXJzZW1lbnRzL0Rpc2J1cnNlbWVudHMgVGFibGUvRnVuZGluZyBGbG93cyBPcmdSb2xlIFNlbGVjdG9yL0FkZCBFeGVjdXRpbmcgQWdlbmN5YDtcbmNvbnN0IEFDVElWSVRZX0RJU0JVUlNFTUVOVFNfRlVORElOR19GTE9XU19PUkdST0xFX0FERF9SRUdJT05BTF9HUk9VUCA9XG4gIGAke0FGX0ZVTkRJTkdfRlVORElOR0dST1VQX0ZVTkRJTkdJVEVNfS9EaXNidXJzZW1lbnRzL0Rpc2J1cnNlbWVudHMgVGFibGUvRnVuZGluZyBGbG93cyBPcmdSb2xlIFNlbGVjdG9yL0FkZCBSZWdpb25hbCBHcm91cGA7XG5jb25zdCBBQ1RJVklUWV9ESVNCVVJTRU1FTlRTX0ZVTkRJTkdfRkxPV1NfT1JHUk9MRV9BRERfUkVTUE9OU0lCTEVfT1JHQU5JWkFUSU9OID1cbiAgYCR7QUZfRlVORElOR19GVU5ESU5HR1JPVVBfRlVORElOR0lURU19L0Rpc2J1cnNlbWVudHMvRGlzYnVyc2VtZW50cyBUYWJsZS9GdW5kaW5nIEZsb3dzIE9yZ1JvbGUgU2VsZWN0b3IvQWRkIFJlc3BvbnNpYmxlIE9yZ2FuaXphdGlvbmA7XG5jb25zdCBBQ1RJVklUWV9ESVNCVVJTRU1FTlRTX0ZVTkRJTkdfRkxPV1NfT1JHUk9MRV9BRERfU0VDVE9SX0dST1VQID1cbiAgYCR7QUZfRlVORElOR19GVU5ESU5HR1JPVVBfRlVORElOR0lURU19L0Rpc2J1cnNlbWVudHMvRGlzYnVyc2VtZW50cyBUYWJsZS9GdW5kaW5nIEZsb3dzIE9yZ1JvbGUgU2VsZWN0b3IvQWRkIFNlY3RvciBHcm91cGA7XG5cbmNvbnN0IEFDVElWSVRZX0NPTU1JVE1FTlRTX0ZVTkRJTkdfRkxPV1NfT1JHUk9MRV9BRERfSU1QTEVNRU5USU5HX0FHRU5DWSA9XG4gIGAke0FGX0ZVTkRJTkdfRlVORElOR0dST1VQX0ZVTkRJTkdJVEVNfS9Db21taXRtZW50cy9Db21taXRtZW50cyBUYWJsZS9GdW5kaW5nIEZsb3dzIE9yZ1JvbGUgU2VsZWN0b3IvQWRkIEltcGxlbWVudGluZyBBZ2VuY3lgO1xuY29uc3QgQUNUSVZJVFlfQ09NTUlUTUVOVFNfRlVORElOR19GTE9XU19PUkdST0xFX0FERF9DT05UUkFDVElOR19BR0VOQ1kgPVxuICBgJHtBRl9GVU5ESU5HX0ZVTkRJTkdHUk9VUF9GVU5ESU5HSVRFTX0vQ29tbWl0bWVudHMvQ29tbWl0bWVudHMgVGFibGUvRnVuZGluZyBGbG93cyBPcmdSb2xlIFNlbGVjdG9yL0FkZCBDb250cmFjdGluZyBBZ2VuY3lgO1xuY29uc3QgQUNUSVZJVFlfQ09NTUlUTUVOVFNfRlVORElOR19GTE9XU19PUkdST0xFX0FERF9CRU5FRklDSUFSWV9BR0VOQ1kgPVxuICBgJHtBRl9GVU5ESU5HX0ZVTkRJTkdHUk9VUF9GVU5ESU5HSVRFTX0vQ29tbWl0bWVudHMvQ29tbWl0bWVudHMgVGFibGUvRnVuZGluZyBGbG93cyBPcmdSb2xlIFNlbGVjdG9yL0FkZCBCZW5lZmljaWFyeSBBZ2VuY3lgO1xuY29uc3QgQUNUSVZJVFlfQ09NTUlUTUVOVFNfRlVORElOR19GTE9XU19PUkdST0xFX0FERF9ET05PUl9PUkdBTklaQVRJT04gPVxuICBgJHtBRl9GVU5ESU5HX0ZVTkRJTkdHUk9VUF9GVU5ESU5HSVRFTX0vQ29tbWl0bWVudHMvQ29tbWl0bWVudHMgVGFibGUvRnVuZGluZyBGbG93cyBPcmdSb2xlIFNlbGVjdG9yL0FkZCBEb25vciBPcmdhbml6YXRpb25gO1xuY29uc3QgQUNUSVZJVFlfQ09NTUlUTUVOVFNfRlVORElOR19GTE9XU19PUkdST0xFX0FERF9FWEVDVVRJTkdfQUdFTkNZID1cbiAgYCR7QUZfRlVORElOR19GVU5ESU5HR1JPVVBfRlVORElOR0lURU19L0NvbW1pdG1lbnRzL0NvbW1pdG1lbnRzIFRhYmxlL0Z1bmRpbmcgRmxvd3MgT3JnUm9sZSBTZWxlY3Rvci9BZGQgRXhlY3V0aW5nIEFnZW5jeWA7XG5jb25zdCBBQ1RJVklUWV9DT01NSVRNRU5UU19GVU5ESU5HX0ZMT1dTX09SR1JPTEVfQUREX1JFR0lPTkFMX0dST1VQID1cbiAgYCR7QUZfRlVORElOR19GVU5ESU5HR1JPVVBfRlVORElOR0lURU19L0NvbW1pdG1lbnRzL0NvbW1pdG1lbnRzIFRhYmxlL0Z1bmRpbmcgRmxvd3MgT3JnUm9sZSBTZWxlY3Rvci9BZGQgUmVnaW9uYWwgR3JvdXBgO1xuY29uc3QgQUNUSVZJVFlfQ09NTUlUTUVOVFNfRlVORElOR19GTE9XU19PUkdST0xFX0FERF9SRVNQT05TSUJMRV9PUkdBTklaQVRJT04gPVxuICBgJHtBRl9GVU5ESU5HX0ZVTkRJTkdHUk9VUF9GVU5ESU5HSVRFTX0vQ29tbWl0bWVudHMvQ29tbWl0bWVudHMgVGFibGUvRnVuZGluZyBGbG93cyBPcmdSb2xlIFNlbGVjdG9yL0FkZCBSZXNwb25zaWJsZSBPcmdhbml6YXRpb25gO1xuY29uc3QgQUNUSVZJVFlfQ09NTUlUTUVOVFNfRlVORElOR19GTE9XU19PUkdST0xFX0FERF9TRUNUT1JfR1JPVVAgPVxuICBgJHtBRl9GVU5ESU5HX0ZVTkRJTkdHUk9VUF9GVU5ESU5HSVRFTX0vQ29tbWl0bWVudHMvQ29tbWl0bWVudHMgVGFibGUvRnVuZGluZyBGbG93cyBPcmdSb2xlIFNlbGVjdG9yL0FkZCBTZWN0b3IgR3JvdXBgO1xuXG5jb25zdCBBQ1RJVklUWV9FWFBFTkRJVFVSRVNfRlVORElOR19GTE9XU19PUkdST0xFX0FERF9JTVBMRU1FTlRJTkdfQUdFTkNZID1cbiAgYCR7QUZfRlVORElOR19GVU5ESU5HR1JPVVBfRlVORElOR0lURU19L0V4cGVuZGl0dXJlcy9FeHBlbmRpdHVyZXMgVGFibGUvRnVuZGluZyBGbG93cyBPcmdSb2xlIFNlbGVjdG9yL0FkZCBJbXBsZW1lbnRpbmcgQWdlbmN5YDtcbmNvbnN0IEFDVElWSVRZX0VYUEVORElUVVJFU19GVU5ESU5HX0ZMT1dTX09SR1JPTEVfQUREX0NPTlRSQUNUSU5HX0FHRU5DWSA9XG4gIGAke0FGX0ZVTkRJTkdfRlVORElOR0dST1VQX0ZVTkRJTkdJVEVNfS9FeHBlbmRpdHVyZXMvRXhwZW5kaXR1cmVzIFRhYmxlL0Z1bmRpbmcgRmxvd3MgT3JnUm9sZSBTZWxlY3Rvci9BZGQgQ29udHJhY3RpbmcgQWdlbmN5YDtcbmNvbnN0IEFDVElWSVRZX0VYUEVORElUVVJFU19GVU5ESU5HX0ZMT1dTX09SR1JPTEVfQUREX0JFTkVGSUNJQVJZX0FHRU5DWSA9XG4gIGAke0FGX0ZVTkRJTkdfRlVORElOR0dST1VQX0ZVTkRJTkdJVEVNfS9FeHBlbmRpdHVyZXMvRXhwZW5kaXR1cmVzIFRhYmxlL0Z1bmRpbmcgRmxvd3MgT3JnUm9sZSBTZWxlY3Rvci9BZGQgQmVuZWZpY2lhcnkgQWdlbmN5YDtcbmNvbnN0IEFDVElWSVRZX0VYUEVORElUVVJFU19GVU5ESU5HX0ZMT1dTX09SR1JPTEVfQUREX0RPTk9SX09SR0FOSVpBVElPTiA9XG4gIGAke0FGX0ZVTkRJTkdfRlVORElOR0dST1VQX0ZVTkRJTkdJVEVNfS9FeHBlbmRpdHVyZXMvRXhwZW5kaXR1cmVzIFRhYmxlL0Z1bmRpbmcgRmxvd3MgT3JnUm9sZSBTZWxlY3Rvci9BZGQgRG9ub3IgT3JnYW5pemF0aW9uYDtcbmNvbnN0IEFDVElWSVRZX0VYUEVORElUVVJFU19GVU5ESU5HX0ZMT1dTX09SR1JPTEVfQUREX0VYRUNVVElOR19BR0VOQ1kgPVxuICBgJHtBRl9GVU5ESU5HX0ZVTkRJTkdHUk9VUF9GVU5ESU5HSVRFTX0vRXhwZW5kaXR1cmVzL0V4cGVuZGl0dXJlcyBUYWJsZS9GdW5kaW5nIEZsb3dzIE9yZ1JvbGUgU2VsZWN0b3IvQWRkIEV4ZWN1dGluZyBBZ2VuY3lgO1xuY29uc3QgQUNUSVZJVFlfRVhQRU5ESVRVUkVTX0ZVTkRJTkdfRkxPV1NfT1JHUk9MRV9BRERfUkVHSU9OQUxfR1JPVVAgPVxuICBgJHtBRl9GVU5ESU5HX0ZVTkRJTkdHUk9VUF9GVU5ESU5HSVRFTX0vRXhwZW5kaXR1cmVzL0V4cGVuZGl0dXJlcyBUYWJsZS9GdW5kaW5nIEZsb3dzIE9yZ1JvbGUgU2VsZWN0b3IvQWRkIFJlZ2lvbmFsIEdyb3VwYDtcbmNvbnN0IEFDVElWSVRZX0VYUEVORElUVVJFU19GVU5ESU5HX0ZMT1dTX09SR1JPTEVfQUREX1JFU1BPTlNJQkxFX09SR0FOSVpBVElPTiA9XG4gIGAke0FGX0ZVTkRJTkdfRlVORElOR0dST1VQX0ZVTkRJTkdJVEVNfS9FeHBlbmRpdHVyZXMvRXhwZW5kaXR1cmVzIFRhYmxlL0Z1bmRpbmcgRmxvd3MgT3JnUm9sZSBTZWxlY3Rvci9BZGQgUmVzcG9uc2libGUgT3JnYW5pemF0aW9uYDtcbmNvbnN0IEFDVElWSVRZX0VYUEVORElUVVJFU19GVU5ESU5HX0ZMT1dTX09SR1JPTEVfQUREX1NFQ1RPUl9HUk9VUCA9XG4gIGAke0FGX0ZVTkRJTkdfRlVORElOR0dST1VQX0ZVTkRJTkdJVEVNfS9FeHBlbmRpdHVyZXMvRXhwZW5kaXR1cmVzIFRhYmxlL0Z1bmRpbmcgRmxvd3MgT3JnUm9sZSBTZWxlY3Rvci9BZGQgU2VjdG9yIEdyb3VwYDtcblxuY29uc3QgTVRFRl9QUk9KRUNUSU9OUyA9IGAke0FGX0ZVTkRJTkdfRlVORElOR0dST1VQX0ZVTkRJTkdJVEVNfS9NVEVGIFByb2plY3Rpb25zYDtcbmNvbnN0IE1URUZfUFJPSkVDVElPTlNfQU1PVU5UID1cbiAgYCR7QUZfRlVORElOR19GVU5ESU5HR1JPVVBfRlVORElOR0lURU19L01URUYgUHJvamVjdGlvbnMvTVRFRiBQcm9qZWN0aW9ucyBUYWJsZS9BbW91bnRgO1xuY29uc3QgTVRFRl9QUk9KRUNUSU9OU19DVVJSRU5DWSA9XG4gIGAke0FGX0ZVTkRJTkdfRlVORElOR0dST1VQX0ZVTkRJTkdJVEVNfS9NVEVGIFByb2plY3Rpb25zL01URUYgUHJvamVjdGlvbnMgVGFibGUvQ3VycmVuY3lgO1xuY29uc3QgTVRFRl9QUk9KRUNUSU9OU19QUk9KRUNUSU9OID1cbiAgYCR7QUZfRlVORElOR19GVU5ESU5HR1JPVVBfRlVORElOR0lURU19L01URUYgUHJvamVjdGlvbnMvTVRFRiBQcm9qZWN0aW9ucyBUYWJsZS9NVEVGIFByb2plY3Rpb25gO1xuY29uc3QgTVRFRl9QUk9KRUNUSU9OU19EQVRFID1cbiAgYCR7QUZfRlVORElOR19GVU5ESU5HR1JPVVBfRlVORElOR0lURU19L01URUYgUHJvamVjdGlvbnMvTVRFRiBQcm9qZWN0aW9ucyBUYWJsZS9Qcm9qZWN0aW9uIERhdGVgO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5mcmVlemUoe1xuICBQVUJMSUNfVklFV19DSEFOR0VfUEFTU1dPUkQsXG4gIFBVQkxJQ19WSUVXX1RST1VCTEVfU0lHTl9JTixcbiAgQUNUSVZJVFlfREVMSVZFUllfUkFURSxcbiAgQUNUSVZJVFlfUFJPSkVDVF9JRF9BTkRfUExBTk5JTkcsXG4gIEFDVElWSVRZX0RVUkFUSU9OX09GX1BST0pFQ1QsXG4gIEFDVElWSVRZX1RFQU1fTEVBREVSLFxuICBBQ1RJVklUWV9TQU1FX0FTX1BST1BPU0VEX1NUQVJUX0RBVEUsXG4gIEFDVElWSVRZX1NBTUVfQVNfUFJPUE9TRURfQVBQUk9WQUxfREFURSxcbiAgQUNUSVZJVFlfSURFTlRJRklDQVRJT04sXG4gIEFDVElWSVRZX0xBU1RfVVBEQVRFRF9CWSxcbiAgQUNUSVZJVFlfTEFTVF9VUERBVEVEX09OLFxuICBBQ1RJVklUWV9TRUNUT1JTLFxuICBBQ1RJVklUWV9QUklNQVJZX1NFQ1RPUlMsXG4gIEFDVElWSVRZX1NFQ09OREFSWV9TRUNUT1JTLFxuICBBQ1RJVklUWV9TVFJVQ1RVUkVTLFxuICBBQ1RJVklUWV9TVFJVQ1RVUkVTX0FERF9TVFJVQ1RVUkUsXG4gIEFDVElWSVRZX09SR0FOSVpBVElPTlMsXG4gIEFDVElWSVRZX09SR0FOSVpBVElPTlNfRE9OT1JfT1JHQU5JWkFUSU9OLFxuICBBQ1RJVklUWV9PUkdBTklaQVRJT05TX0JFTkVGSUNJQVJZX0FHRU5DWSxcbiAgQUNUSVZJVFlfT1JHQU5JWkFUSU9OU19DT05UUkFDVElOR19BR0VOQ1ksXG4gIEFDVElWSVRZX09SR0FOSVpBVElPTlNfRVhFQ1VUSU5HX0FHRU5DWSxcbiAgQUNUSVZJVFlfT1JHQU5JWkFUSU9OU19JTVBMRU1FTlRJTkdfQUdFTkNZLFxuICBBQ1RJVklUWV9PUkdBTklaQVRJT05TX1JFR0lPTkFMX0dST1VQLFxuICBBQ1RJVklUWV9PUkdBTklaQVRJT05TX1JFTEFURURfR09WRVJOTUVOVF9PUkdBTklaQVRJT04sXG4gIEFDVElWSVRZX09SR0FOSVpBVElPTlNfU0VDVE9SX0dST1VQLFxuICBBQ1RJVklUWV9PUkdBTklaQVRJT05TX0JFTkVGSUNJQVJZX0FHRU5DWV9BRERfRlVORElOR19BVVRPLFxuICBBQ1RJVklUWV9PUkdBTklaQVRJT05TX0NPTlRSQUNUSU5HX0FHRU5DWV9BRERfRlVORElOR19BVVRPLFxuICBBQ1RJVklUWV9PUkdBTklaQVRJT05TX0RPTk9SX09SR0FOSVpBVElPTl9BRERfRlVORElOR19BVVRPLFxuICBBQ1RJVklUWV9PUkdBTklaQVRJT05TX0VYRUNVVElOR19BR0VOQ1lfQUREX0ZVTkRJTkdfQVVUTyxcbiAgQUNUSVZJVFlfT1JHQU5JWkFUSU9OU19JTVBMRU1FTlRJTkdfQUdFTkNZX0FERF9GVU5ESU5HX0FVVE8sXG4gIEFDVElWSVRZX09SR0FOSVpBVElPTlNfUkVHSU9OQUxfR1JPVVBfQUREX0ZVTkRJTkdfQVVUTyxcbiAgQUNUSVZJVFlfT1JHQU5JWkFUSU9OU19SRVNQT05TSUJMRV9PUkdBTklaQVRJT05fQUREX0ZVTkRJTkdfQVVUTyxcbiAgQUNUSVZJVFlfT1JHQU5JWkFUSU9OU19TRUNUT1JfR1JPVVBfQUREX0ZVTkRJTkdfQVVUTyxcbiAgQUNUSVZJVFlfRlVORElOR19TRUFSQ0gsXG4gIEFDVElWSVRZX0ZVTkRJTkdfU0VBUkNIX09SR0FOSVpBVElPTixcbiAgQUNUSVZJVFlfRlVORElOR19TRUxFQ1RfT1JHX1RZUEUsXG4gIEFDVElWSVRZX1BST0dSQU0sXG4gIEFDVElWSVRZX1BMQU5OSU5HLFxuICBBQ1RJVklUWV9DT05UQUNULFxuICBBQ1RJVklUWV9ET0NVTUVOVFNfQUREX0RPQ1VNRU5ULFxuICBBQ1RJVklUWV9ET0NVTUVOVFNfQUREX1dFQkxJTkssXG4gIEFDVElWSVRZX0lTU1VFU19BRERfSVNTVUUsXG4gIEFDVElWSVRZX0lTU1VFU19ERUxFVEVfSVNTVUUsXG4gIEFDVElWSVRZX0lTU1VFU19BRERfTUVBU1VSRSxcbiAgQUNUSVZJVFlfSVNTVUVTX0RFTEVURV9NRUFTVVJFLFxuICBBQ1RJVklUWV9JU1NVRVNfQUREX0FDVE9SLFxuICBBQ1RJVklUWV9JU1NVRVNfREVMRVRFX0FDVE9SLFxuICBBQ1RJVklUWV9ESVNCVVJTRU1FTlRTX0ZVTkRJTkdfRkxPV1NfT1JHUk9MRV9BRERfSU1QTEVNRU5USU5HX0FHRU5DWSxcbiAgQUNUSVZJVFlfRElTQlVSU0VNRU5UU19GVU5ESU5HX0ZMT1dTX09SR1JPTEVfQUREX0NPTlRSQUNUSU5HX0FHRU5DWSxcbiAgQUNUSVZJVFlfRElTQlVSU0VNRU5UU19GVU5ESU5HX0ZMT1dTX09SR1JPTEVfQUREX0JFTkVGSUNJQVJZX0FHRU5DWSxcbiAgQUNUSVZJVFlfRElTQlVSU0VNRU5UU19GVU5ESU5HX0ZMT1dTX09SR1JPTEVfQUREX0RPTk9SX09SR0FOSVpBVElPTixcbiAgQUNUSVZJVFlfRElTQlVSU0VNRU5UU19GVU5ESU5HX0ZMT1dTX09SR1JPTEVfQUREX0VYRUNVVElOR19BR0VOQ1ksXG4gIEFDVElWSVRZX0RJU0JVUlNFTUVOVFNfRlVORElOR19GTE9XU19PUkdST0xFX0FERF9SRUdJT05BTF9HUk9VUCxcbiAgQUNUSVZJVFlfRElTQlVSU0VNRU5UU19GVU5ESU5HX0ZMT1dTX09SR1JPTEVfQUREX1JFU1BPTlNJQkxFX09SR0FOSVpBVElPTixcbiAgQUNUSVZJVFlfRElTQlVSU0VNRU5UU19GVU5ESU5HX0ZMT1dTX09SR1JPTEVfQUREX1NFQ1RPUl9HUk9VUCxcbiAgQUNUSVZJVFlfQ09NTUlUTUVOVFNfRlVORElOR19GTE9XU19PUkdST0xFX0FERF9JTVBMRU1FTlRJTkdfQUdFTkNZLFxuICBBQ1RJVklUWV9DT01NSVRNRU5UU19GVU5ESU5HX0ZMT1dTX09SR1JPTEVfQUREX0NPTlRSQUNUSU5HX0FHRU5DWSxcbiAgQUNUSVZJVFlfQ09NTUlUTUVOVFNfRlVORElOR19GTE9XU19PUkdST0xFX0FERF9CRU5FRklDSUFSWV9BR0VOQ1ksXG4gIEFDVElWSVRZX0NPTU1JVE1FTlRTX0ZVTkRJTkdfRkxPV1NfT1JHUk9MRV9BRERfRE9OT1JfT1JHQU5JWkFUSU9OLFxuICBBQ1RJVklUWV9DT01NSVRNRU5UU19GVU5ESU5HX0ZMT1dTX09SR1JPTEVfQUREX0VYRUNVVElOR19BR0VOQ1ksXG4gIEFDVElWSVRZX0NPTU1JVE1FTlRTX0ZVTkRJTkdfRkxPV1NfT1JHUk9MRV9BRERfUkVHSU9OQUxfR1JPVVAsXG4gIEFDVElWSVRZX0NPTU1JVE1FTlRTX0ZVTkRJTkdfRkxPV1NfT1JHUk9MRV9BRERfUkVTUE9OU0lCTEVfT1JHQU5JWkFUSU9OLFxuICBBQ1RJVklUWV9DT01NSVRNRU5UU19GVU5ESU5HX0ZMT1dTX09SR1JPTEVfQUREX1NFQ1RPUl9HUk9VUCxcbiAgQUNUSVZJVFlfRVhQRU5ESVRVUkVTX0ZVTkRJTkdfRkxPV1NfT1JHUk9MRV9BRERfSU1QTEVNRU5USU5HX0FHRU5DWSxcbiAgQUNUSVZJVFlfRVhQRU5ESVRVUkVTX0ZVTkRJTkdfRkxPV1NfT1JHUk9MRV9BRERfQ09OVFJBQ1RJTkdfQUdFTkNZLFxuICBBQ1RJVklUWV9FWFBFTkRJVFVSRVNfRlVORElOR19GTE9XU19PUkdST0xFX0FERF9CRU5FRklDSUFSWV9BR0VOQ1ksXG4gIEFDVElWSVRZX0VYUEVORElUVVJFU19GVU5ESU5HX0ZMT1dTX09SR1JPTEVfQUREX0RPTk9SX09SR0FOSVpBVElPTixcbiAgQUNUSVZJVFlfRVhQRU5ESVRVUkVTX0ZVTkRJTkdfRkxPV1NfT1JHUk9MRV9BRERfRVhFQ1VUSU5HX0FHRU5DWSxcbiAgQUNUSVZJVFlfRVhQRU5ESVRVUkVTX0ZVTkRJTkdfRkxPV1NfT1JHUk9MRV9BRERfUkVHSU9OQUxfR1JPVVAsXG4gIEFDVElWSVRZX0VYUEVORElUVVJFU19GVU5ESU5HX0ZMT1dTX09SR1JPTEVfQUREX1JFU1BPTlNJQkxFX09SR0FOSVpBVElPTixcbiAgQUNUSVZJVFlfRVhQRU5ESVRVUkVTX0ZVTkRJTkdfRkxPV1NfT1JHUk9MRV9BRERfU0VDVE9SX0dST1VQLFxuICBNVEVGX1BST0pFQ1RJT05TLFxuICBNVEVGX1BST0pFQ1RJT05TX0FNT1VOVCxcbiAgTVRFRl9QUk9KRUNUSU9OU19DVVJSRU5DWSxcbiAgTVRFRl9QUk9KRUNUSU9OU19QUk9KRUNUSU9OLFxuICBNVEVGX1BST0pFQ1RJT05TX0RBVEUsXG59KTtcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFVJVXRpbHMge1xuXG4gIHN0YXRpYyBzdHJpbmdUb0lkKHN0cmluZzogc3RyaW5nKSB7XG4gICAgc3RyaW5nID0gc3RyaW5nIHx8ICcnO1xuICAgIGxldCBoYXNoID0gNTM4MTtcbiAgICBmb3IgKGxldCBpID0gc3RyaW5nLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAvKiBlc2xpbnQtZGlzYWJsZSBuby1iaXR3aXNlICovXG4gICAgICBoYXNoID0gKGhhc2ggKiAzMykgXiBzdHJpbmcuY2hhckNvZGVBdChpKTtcbiAgICB9XG4gICAgcmV0dXJuIGhhc2ggPj4+IDA7XG4gICAgLyogZXNsaW50LWVuYWJsZSBuby1iaXR3aXNlICovXG4gIH1cblxuICAvKipcbiAgICogR2VuZXJhdGVzIGEgdW5pcXVlIGlkIGZvciBlYWNoIGNhbGwsIG92ZXIgdGhlIHNhbWUgc3RyaW5nXG4gICAqIEBwYXJhbSBzdHJpbmdcbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgc3RhdGljIHN0cmluZ1RvVW5pcXVlSWQoc3RyaW5nOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gYCR7dGhpcy5zdHJpbmdUb0lkKHN0cmluZyl9LSR7RGF0ZS5ub3coKX0tJHtNYXRoLnJhbmRvbSgpXG4gICAgICAudG9TdHJpbmcoKVxuICAgICAgLnN1YnN0cmluZygyKX1gO1xuICB9XG5cbiAgc3RhdGljIG51bWJlclJhbmRvbSgpIHtcbiAgICByZXR1cm4gTWF0aC50cnVuYygoTWF0aC5yYW5kb20oKSAqIDEwMDAwMDApKTtcbiAgfVxuXG4gIHN0YXRpYyBjYXBpdGFsaXplKHRleHQ6IHN0cmluZykge1xuICAgIHJldHVybiB0ZXh0LnJlcGxhY2UoLyg/Ol58XFxzKVxcUy9nLCBjaGFyID0+IGNoYXIudG9VcHBlckNhc2UoKSk7XG4gIH1cblxuICBzdGF0aWMgY2xvbmVEZWVwKG9iaikge1xuICAgIHJldHVybiBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KG9iaikpO1xuICB9XG59O1xuIiwiaW1wb3J0IEZNQyBmcm9tICcuL0ZlYXR1cmVNYW5hZ2VyQ29uc3RhbnRzJztcbmltcG9ydCBVSVV0aWxzIGZyb20gJy4uLy4uL3V0aWxzL1VJVXRpbHMnO1xuXG4vKipcbiAqIEBhdXRob3IgTmFkZWpkYSBNYW5kcmVzY3VcbiAqL1xuXG4vLyBBY3Rpdml0eSBmaWVsZHNcbmNvbnN0IEFDVElWSVRZX0JVREdFVCA9ICdhY3Rpdml0eV9idWRnZXQnO1xuY29uc3QgQUNUSVZJVFlfU1RBVFVTID0gJ2FjdGl2aXR5X3N0YXR1cyc7XG5jb25zdCBTVEFUVVNfUkVBU09OID0gJ3N0YXR1c19yZWFzb24nO1xuY29uc3QgRklOQU5DSUFMX0lOU1RSVU1FTlQgPSAnZmluYW5jaWFsX2luc3RydW1lbnQnO1xuY29uc3QgVFlQRV9PRl9JTVBMRU1FTlRBVElPTiA9ICd0eXBlX29mX2ltcGxlbWVudGF0aW9uJztcbmNvbnN0IE9CSkVDVElWRSA9ICdvYmplY3RpdmUnO1xuY29uc3QgUkVTVUxUUyA9ICdyZXN1bHRzJztcbmNvbnN0IEJVREdFVF9DT0RFX1BST0pFQ1RfSUQgPSAnYnVkZ2V0X2NvZGVfcHJvamVjdF9pZCc7XG5jb25zdCBBQ1RVQUxfQVBQUk9WQUxfREFURSA9ICdhY3R1YWxfYXBwcm92YWxfZGF0ZSc7XG5jb25zdCBGVU5ESU5HUyA9ICdmdW5kaW5ncyc7XG5jb25zdCBGVU5ESU5HX0RPTk9SX09SR19JRCA9ICdkb25vcl9vcmdhbml6YXRpb25faWQnO1xuY29uc3QgSVNfRFJBRlQgPSAnaXNfZHJhZnQnO1xuY29uc3QgT1JHX1JPTEVfT1JHX0lEID0gJ29yZ2FuaXphdGlvbic7XG5jb25zdCBBRERJVElPTkFMX0lORk8gPSAnYWRkaXRpb25hbF9pbmZvJztcbmNvbnN0IFBSSU1BUllfU0VDVE9SUyA9ICdwcmltYXJ5X3NlY3RvcnMnO1xuY29uc3QgU0VDT05EQVJZX1NFQ1RPUlMgPSAnc2Vjb25kYXJ5X3NlY3RvcnMnO1xuY29uc3QgVEVSVElBUllfU0VDVE9SUyA9ICd0ZXJ0aWFyeV9zZWN0b3JzJztcbmNvbnN0IFRBR19TRUNUT1JTID0gJ3RhZ19zZWN0b3JzJztcbmNvbnN0IFNFQ1RPUiA9ICdzZWN0b3InO1xuY29uc3QgU0VDVE9SX1BFUkNFTlRBR0UgPSAnc2VjdG9yX3BlcmNlbnRhZ2UnO1xuY29uc3QgRklOQU5DSU5HX0lOU1RSVU1FTlQgPSAnZmluYW5jaW5nX2luc3RydW1lbnQnO1xuY29uc3QgTU9EQUxJVElFUyA9ICdtb2RhbGl0aWVzJztcbmNvbnN0IExJTkVfTUlOSVNUUllfUkFOSyA9ICdsaW5lX21pbmlzdHJ5X3JhbmsnO1xuY29uc3QgR09WRVJOTUVOVF9BR1JFRU1FTlRfTlVNQkVSID0gJ2dvdmVybm1lbnRfYWdyZWVtZW50X251bWJlcic7XG5jb25zdCBGVU5ESU5HX1NUQVRVUyA9ICdmdW5kaW5nX3N0YXR1cyc7XG5jb25zdCBMT0NBVElPTlMgPSAnbG9jYXRpb25zJztcbmNvbnN0IExPQ0FUSU9OID0gJ2xvY2F0aW9uJztcbmNvbnN0IExPQ0FUSU9OX1BFUkNFTlRBR0UgPSAnbG9jYXRpb25fcGVyY2VudGFnZSc7XG5jb25zdCBJTVBMRU1FTlRBVElPTl9MT0NBVElPTiA9ICdpbXBsZW1lbnRhdGlvbl9sb2NhdGlvbic7XG5jb25zdCBJTVBMRU1FTlRBVElPTl9MRVZFTCA9ICdpbXBsZW1lbnRhdGlvbl9sZXZlbCc7XG5jb25zdCBBUFBST1ZBTF9TVEFUVVMgPSAnYXBwcm92YWxfc3RhdHVzJztcbmNvbnN0IEFQUFJPVkVEX0JZID0gJ2FwcHJvdmVkX2J5JztcbmNvbnN0IEFQUFJPVkFMX0RBVEUgPSAnYXBwcm92YWxfZGF0ZSc7XG5jb25zdCBUWVBFX09GX0FTU0lTVEFOQ0UgPSAndHlwZV9vZl9hc3Npc3RhbmNlJztcbmNvbnN0IEVYUEVORElUVVJFX0NMQVNTID0gJ2V4cGVuZGl0dXJlX2NsYXNzJztcbmNvbnN0IEZVTkRJTkdfREVUQUlMUyA9ICdmdW5kaW5nX2RldGFpbHMnO1xuY29uc3QgTU9ERV9PRl9QQVlNRU5UID0gJ21vZGVfb2ZfcGF5bWVudCc7XG5jb25zdCBGVU5ESU5HX0NMQVNTSUZJQ0FUSU9OX0RBVEUgPSAnZnVuZGluZ19jbGFzc2lmaWNhdGlvbl9kYXRlJztcbmNvbnN0IEFHUkVFTUVOVCA9ICdhZ3JlZW1lbnQnO1xuY29uc3QgRE9OT1JfT0JKRUNUSVZFID0gJ2Rvbm9yX29iamVjdGl2ZSc7XG5jb25zdCBDT05ESVRJT05TID0gJ2NvbmRpdGlvbnMnO1xuY29uc3QgQUdSRUVNRU5UX0NPREUgPSAnY29kZSc7XG5jb25zdCBBR1JFRU1FTlRfVElUTEUgPSAndGl0bGUnO1xuY29uc3QgUFJPSkVDVF9DQVRFR09SWSA9ICdwcm9qZWN0X2NhdGVnb3J5JztcbmNvbnN0IFBST0pFQ1RfSU1QTEVNRU5USU5HX1VOSVQgPSAncHJvamVjdF9pbXBsZW1lbnRpbmdfdW5pdCc7XG5jb25zdCBPUkdBTklaQVRJT04gPSAnb3JnYW5pemF0aW9uJztcbmNvbnN0IFBFUkNFTlRBR0UgPSAncGVyY2VudGFnZSc7XG5jb25zdCBBTVBfT1JHQU5JWkFUSU9OX1JPTEVfSUQgPSAnYW1wX29yZ2FuaXphdGlvbl9yb2xlX2lkJztcbmNvbnN0IFJPTEUgPSAncm9sZSc7XG5jb25zdCBFWEVDVVRJTkdfQUdFTkNZID0gJ2V4ZWN1dGluZ19hZ2VuY3knO1xuY29uc3QgQ09OVFJBQ1RJTkdfQUdFTkNZID0gJ2NvbnRyYWN0aW5nX2FnZW5jeSc7XG5jb25zdCBCRU5FRklDSUFSWV9BR0VOQ1kgPSAnYmVuZWZpY2lhcnlfYWdlbmN5JztcbmNvbnN0IElNUExFTUVOVElOR19BR0VOQ1kgPSAnaW1wbGVtZW50aW5nX2FnZW5jeSc7XG5jb25zdCBSRVNQT05TSUJMRV9PUkdBTklaQVRJT04gPSAncmVzcG9uc2libGVfb3JnYW5pemF0aW9uJztcbmNvbnN0IERPTk9SX09SR0FOSVpBVElPTiA9ICdkb25vcl9vcmdhbml6YXRpb24nO1xuY29uc3QgUkVHSU9OQUxfR1JPVVAgPSAncmVnaW9uYWxfZ3JvdXAnO1xuY29uc3QgU0VDVE9SX0dST1VQID0gJ3NlY3Rvcl9ncm91cCc7XG5jb25zdCBCVURHRVRTID0gJ2J1ZGdldHMnO1xuY29uc3QgQlVER0VUX0NPREUgPSAnYnVkZ2V0X2NvZGUnO1xuY29uc3QgQlVER0VUX09SR0FOSVpBVElPTl9DT0RFID0gJ2J1ZGdldF9vcmdhbml6YXRpb25fY29kZSc7XG5jb25zdCBBUkNISVZFRCA9ICdhcmNoaXZlZCc7XG5jb25zdCBUUkFOU0FDVElPTl9EQVRFID0gJ3RyYW5zYWN0aW9uX2RhdGUnO1xuY29uc3QgVFJBTlNBQ1RJT05fVFlQRSA9ICd0cmFuc2FjdGlvbl90eXBlJztcbmNvbnN0IENPTU1JVE1FTlRTID0gJ2NvbW1pdG1lbnRzJztcbmNvbnN0IERJU0JVUlNFTUVOVFMgPSAnZGlzYnVyc2VtZW50cyc7XG5jb25zdCBFWFBFTkRJVFVSRVMgPSAnZXhwZW5kaXR1cmVzJztcbmNvbnN0IEVTVElNQVRFRF9ESVNCVVJTRU1FTlRTID0gJ2VzdGltYXRlZF9kaXNidXJzZW1lbnRzJztcbmNvbnN0IFRSQU5TQUNUSU9OX0FNT1VOVCA9ICd0cmFuc2FjdGlvbl9hbW91bnQnO1xuY29uc3QgQURKVVNUTUVOVF9UWVBFID0gJ2FkanVzdG1lbnRfdHlwZSc7XG5jb25zdCBBQ1RVQUxfU1RBUlRfREFURSA9ICdhY3R1YWxfc3RhcnRfZGF0ZSc7XG5jb25zdCBQUk9QT1NFRF9TVEFSVF9EQVRFID0gJ3Byb3Bvc2VkX3N0YXJ0X2RhdGUnO1xuY29uc3QgQUNUVUFMX0NPTVBMRVRJT05fREFURSA9ICdhY3R1YWxfY29tcGxldGlvbl9kYXRlJztcbmNvbnN0IENPTlRSQUNUSU5HX0RBVEUgPSAnY29udHJhY3RpbmdfZGF0ZSc7XG5jb25zdCBESVNCVVJTRU1FTlRfREFURSA9ICdkaXNidXJzZW1lbnRfZGF0ZSc7XG5jb25zdCBQUk9QT1NFRF9BUFBST1ZBTF9EQVRFID0gJ3Byb3Bvc2VkX2FwcHJvdmFsX2RhdGUnO1xuY29uc3QgT1JJR0lOQUxfQ09NUExFVElPTl9EQVRFID0gJ29yaWdpbmFsX2NvbXBsZXRpb25fZGF0ZSc7XG5jb25zdCBQUk9QT1NFRF9DT01QTEVUSU9OX0RBVEUgPSAncHJvcG9zZWRfY29tcGxldGlvbl9kYXRlJztcbmNvbnN0IEZJTkFMX0RBVEVfRk9SX0RJU0JVUlNFTUVOVFMgPSAnZmluYWxfZGF0ZV9mb3JfZGlzYnVyc2VtZW50cyc7XG5jb25zdCBGSU5BTF9EQVRFX0ZPUl9DT05UUkFDVElORyA9ICdmaW5hbF9kYXRlX2Zvcl9jb250cmFjdGluZyc7XG5jb25zdCBFRkZFQ1RJVkVfRlVORElOR19EQVRFID0gJ2VmZmVjdGl2ZV9mdW5kaW5nX2RhdGUnO1xuY29uc3QgRlVORElOR19DTE9TSU5HX0RBVEUgPSAnZnVuZGluZ19jbG9zaW5nX2RhdGUnO1xuY29uc3QgUkFUSUZJQ0FUSU9OX0RBVEUgPSAncmF0aWZpY2F0aW9uX2RhdGUnO1xuY29uc3QgTUFUVVJJVFkgPSAnbWF0dXJpdHknO1xuY29uc3QgTEFTVF9BVURJVF9EQVRFID0gJ2xhc3RfYXVkaXRfZGF0ZSc7XG5jb25zdCBTSUdOQVRVUkVfREFURSA9ICdzaWduYXR1cmVfZGF0ZSc7XG5jb25zdCBIVU1BTklUQVJJQU5fQUlEID0gJ2h1bWFuaXRhcmlhbl9haWQnO1xuY29uc3QgRElTQVNURVJfUkVTUE9OU0UgPSAnZGlzYXN0ZXJfcmVzcG9uc2UnO1xuY29uc3QgUFJPR1JBTSA9ICdwcm9ncmFtJztcbmNvbnN0IFBST0dSQU1fUEVSQ0VOVEFHRSA9ICdwcm9ncmFtX3BlcmNlbnRhZ2UnO1xuY29uc3QgUFJPR1JBTV9TRVRUSU5HUyA9ICdwcm9ncmFtX3NldHRpbmdzJztcbmNvbnN0IE5BVElPTkFMX1BMQU5fT0JKRUNUSVZFID0gJ25hdGlvbmFsX3BsYW5fb2JqZWN0aXZlJztcbmNvbnN0IFBSSU1BUllfUFJPR1JBTVMgPSAncHJpbWFyeV9wcm9ncmFtcyc7XG5jb25zdCBTRUNPTkRBUllfUFJPR1JBTVMgPSAnc2Vjb25kYXJ5X3Byb2dyYW1zJztcbmNvbnN0IFRFUlRJQVJfUFJPR1JBTVMgPSAndGVydGlhcnlfcHJvZ3JhbXMnO1xuY29uc3QgR09WRVJOTUVOVF9BUFBST1ZBTF9QUk9DRURVUkVTID0gJ2dvdmVybm1lbnRfYXBwcm92YWxfcHJvY2VkdXJlcyc7XG5jb25zdCBKT0lOVF9DUklURVJJQSA9ICdqb2ludF9jcml0ZXJpYSc7XG5jb25zdCBURUFNID0gJ3RlYW0nO1xuY29uc3QgUkVKRUNURURfSUQgPSAncmVqZWN0ZWRJZCc7XG5jb25zdCBJTlRFUk5BTF9JRCA9ICdpbnRlcm5hbF9pZCc7XG5jb25zdCBBTVBfSUQgPSAnYW1wX2lkJztcbmNvbnN0IFBST0pFQ1RfVElUTEUgPSAncHJvamVjdF90aXRsZSc7XG5jb25zdCBERVNDUklQVElPTiA9ICdkZXNjcmlwdGlvbic7XG5jb25zdCBNT0RJRklFRF9CWSA9ICdtb2RpZmllZF9ieSc7XG5jb25zdCBNT0RJRklFRF9PTiA9ICd1cGRhdGVfZGF0ZSc7XG5jb25zdCBDUkVBVEVEX0JZID0gJ2NyZWF0ZWRfYnknO1xuY29uc3QgQ1JFQVRFRF9PTiA9ICdjcmVhdGlvbl9kYXRlJztcbmNvbnN0IExBU1RfSU1QT1JURURfQlkgPSAnbGFzdF9pbXBvcnRlZF9ieSc7XG5jb25zdCBDTElFTlRfQ0hBTkdFX0lEID0gJ2NsaWVudC1jaGFuZ2UtaWQnO1xuY29uc3QgQ0xJRU5UX0NSRUFURURfT04gPSAnY2xpZW50LWNyZWF0ZWQtb24nO1xuY29uc3QgQ0xJRU5UX1VQREFURURfT04gPSAnY2xpZW50LXVwZGF0ZWQtb24nO1xuY29uc3QgSVNfUFVTSEVEID0gJ2lzLXB1c2hlZCc7XG5jb25zdCBBQ1RJVklUWV9HUk9VUCA9ICdhY3Rpdml0eV9ncm91cCc7XG5jb25zdCBWRVJTSU9OID0gJ3ZlcnNpb24nO1xuY29uc3QgUFJPSkVDVF9DT01NRU5UUyA9ICdwcm9qZWN0X2NvbW1lbnRzJztcbmNvbnN0IExFU1NPTlNfTEVBUk5FRCA9ICdsZXNzb25zX2xlYXJuZWQnO1xuY29uc3QgUFJPSkVDVF9JTVBBQ1QgPSAncHJvamVjdF9pbXBhY3QnO1xuY29uc3QgQUNUSVZJVFlfU1VNTUFSWSA9ICdhY3Rpdml0eV9zdW1tYXJ5JztcbmNvbnN0IENPTkRJVElPTkFMSVRJRVMgPSAnY29uZGl0aW9uYWxpdGllcyc7XG5jb25zdCBQUk9KRUNUX01BTkFHRU1FTlQgPSAncHJvamVjdF9tYW5hZ2VtZW50JztcbmNvbnN0IEFfQ19DSEFQVEVSID0gJ2FfY19jaGFwdGVyJztcbmNvbnN0IENSSVNfTlVNQkVSID0gJ2NyaXNfbnVtYmVyJztcbmNvbnN0IElBVElfSURFTlRJRklFUiA9ICdpYXRpX2lkZW50aWZpZXInO1xuY29uc3QgQUNUSVZJVFlfSU5URVJOQUxfSURTID0gJ2FjdGl2aXR5X2ludGVybmFsX2lkcyc7XG5jb25zdCBISUVSQVJDSElDQUxfVkFMVUUgPSAnaGllcmFyY2hpY2FsX3ZhbHVlJztcbmNvbnN0IEhJRVJBUkNISUNBTF9WQUxVRV9QQVJUUyA9ICdoaWVyYXJjaGljYWxfdmFsdWVfcGFydHMnO1xuY29uc3QgSElFUkFSQ0hJQ0FMX1ZBTFVFX0RFUFRIID0gJ2hpZXJhcmNoaWNhbF92YWx1ZV9kZXB0aCc7XG5jb25zdCBQUENfQU1PVU5UID0gJ3BwY19hbW91bnQnO1xuY29uc3QgUlBDX0FNT1VOVCA9ICdycGNfYW1vdW50JztcbmNvbnN0IFBQQ19BTk5VQUxfQlVER0VUUyA9ICdwcGNfYW5udWFsX2J1ZGdldHMnO1xuY29uc3QgQU1PVU5UID0gJ2Ftb3VudCc7XG5jb25zdCBDVVJSRU5DWSA9ICdjdXJyZW5jeSc7XG5jb25zdCBGVU5ESU5HX0RBVEUgPSAnZnVuZGluZ19kYXRlJztcbmNvbnN0IENPTVBPTkVOVFMgPSAnY29tcG9uZW50cyc7XG5jb25zdCBUT1RBTF9OVU1CRVJfT0ZfRlVORElOR19TT1VSQ0VTID0gJ3RvdGFsX251bWJlcl9vZl9mdW5kaW5nX3NvdXJjZXMnO1xuY29uc3QgU09VUkNFX1JPTEUgPSAnc291cmNlX3JvbGUnO1xuY29uc3QgQU1QX0ZVTkRJTkdfSUQgPSAnZnVuZGluZ19pZCc7XG5jb25zdCBJU1NVRVMgPSAnaXNzdWVzJztcbmNvbnN0IElTU1VFX0RBVEUgPSAnaXNzdWVfZGF0ZSc7XG5jb25zdCBJU1NVRV9OQU1FID0gJ25hbWUnO1xuY29uc3QgTUVBU1VSRVMgPSAnbWVhc3VyZXMnO1xuY29uc3QgTUVBU1VSRV9OQU1FID0gJ25hbWUnO1xuY29uc3QgTUVBU1VSRV9EQVRFID0gJ21lYXN1cmVfZGF0ZSc7XG5jb25zdCBBQ1RPUlMgPSAnYWN0b3JzJztcbmNvbnN0IEFDVE9SX05BTUUgPSAnbmFtZSc7XG5jb25zdCBTVFJVQ1RVUkVTID0gJ3N0cnVjdHVyZXMnO1xuY29uc3QgU1RSVUNUVVJFU19USVRMRSA9ICd0aXRsZSc7XG5jb25zdCBTVFJVQ1RVUkVTX0RFU0NSSVBUSU9OID0gJ2Rlc2NyaXB0aW9uJztcbmNvbnN0IFNUUlVDVFVSRVNfTEFUSVRVREUgPSAnbGF0aXR1ZGUnO1xuY29uc3QgU1RSVUNUVVJFU19MT05HSVRVREUgPSAnbG9uZ2l0dWRlJztcbmNvbnN0IFNUUlVDVFVSRVNfQ09MT1IgPSAnc3RydWN0dXJlX2NvbG9yJztcbmNvbnN0IFNUUlVDVFVSRVNfTEFUID0gJ2xhdCc7XG5jb25zdCBTVFJVQ1RVUkVTX0xORyA9ICdsbmcnO1xuY29uc3QgU1RSVUNUVVJFU19TSEFQRSA9ICdzaGFwZSc7XG5jb25zdCBTVFJVQ1RVUkVTX1BPSU5UID0gJ1BvaW50JztcbmNvbnN0IFNUUlVDVFVSRVNfUE9MWUdPTiA9ICdQb2x5Z29uJztcbmNvbnN0IFNUUlVDVFVSRVNfUE9MWUxJTkUgPSAnUG9seWxpbmUnO1xuY29uc3QgU1RSVUNUVVJFU19DT09SRElOQVRFUyA9ICdjb29yZGluYXRlcyc7XG5jb25zdCBDT01QT05FTlRfVFlQRSA9ICdjb21wb25lbnRfdHlwZSc7XG5jb25zdCBDT01QT05FTlRfVElUTEUgPSAnY29tcG9uZW50X3RpdGxlJztcbmNvbnN0IENPTVBPTkVOVF9GVU5ESU5HID0gJ2Z1bmRpbmcnO1xuY29uc3QgQ09NUE9ORU5UX0RFU0NSSVBUSU9OID0gJ2Rlc2NyaXB0aW9uJztcbmNvbnN0IENPTVBPTkVOVF9PUkdBTklaQVRJT04gPSAnY29tcG9uZW50X29yZ2FuaXphdGlvbic7XG5jb25zdCBGVU5ESU5HX0FNT1VOVF9JRCA9ICdhbXBfZnVuZGluZ19hbW91bnRfaWQnO1xuY29uc3QgRVhUUkFfSU5GTyA9ICdleHRyYV9pbmZvJztcbmNvbnN0IFZBTFVFID0gJ3ZhbHVlJztcbmNvbnN0IEFDUk9OWU0gPSAnYWNyb255bSc7XG5jb25zdCBUWVBFX09GX0NPT1BFUkFUSU9OID0gJ3R5cGVfb2ZfY29vcGVyYXRpb24nO1xuY29uc3QgQU5OVUFMX1BST0pFQ1RfQlVER0VUX0lEID0gJ2FubnVhbF9wcm9qZWN0X2J1ZGdldF9pZCc7XG5jb25zdCBUWVBFID0gJ3R5cGUnO1xuY29uc3QgWUVBUiA9ICd5ZWFyJztcbmNvbnN0IEdST1VQX1ZFUlNJT05FRF9GVU5ESU5HID0gJ2dyb3VwX3ZlcnNpb25lZF9mdW5kaW5nJztcbmNvbnN0IEFDVElWRV9MSVNUID0gJ2FjdGl2ZV9saXN0JztcbmNvbnN0IEFDVElWRSA9ICdhY3RpdmUnO1xuY29uc3QgREVMRUdBVEVEX0NPT1BFUkFUSU9OID0gJ2RlbGVnYXRlZF9jb29wZXJhdGlvbic7XG5jb25zdCBERUxFR0FURURfUEFSVE5FUiA9ICdkZWxlZ2F0ZWRfcGFydG5lcic7XG5jb25zdCBGSU5BTkNJTkdfSUQgPSAnZmluYW5jaW5nX2lkJztcbmNvbnN0IERJU0JVUlNFTUVOVF9PUkRFUl9JRCA9ICdkaXNidXJzZW1lbnRfb3JkZXJfaWQnO1xuY29uc3QgUExFREdFID0gJ3BsZWRnZSc7XG5jb25zdCBDQVBJVEFMX1NQRU5ESU5HX1BFUkNFTlRBR0UgPSAnY2FwaXRhbF9zcGVuZGluZ19wZXJjZW50YWdlJztcbmNvbnN0IFJFUE9SVElOR19EQVRFID0gJ3JlcG9ydGluZ19kYXRlJztcbmNvbnN0IFJFQ0lQSUVOVF9ST0xFID0gJ3JlY2lwaWVudF9yb2xlJztcbmNvbnN0IFJFQ0lQSUVOVF9PUkdBTklaQVRJT04gPSAncmVjaXBpZW50X29yZ2FuaXphdGlvbic7XG5jb25zdCBURU1QT1JBTF9JRCA9ICdfdGVtcG9yYWxfaWQnO1xuY29uc3QgTUlOSVNUUllfQ09ERSA9ICdtaW5pc3RyeV9jb2RlJztcbmNvbnN0IFBST0pFQ1RfQ09ERSA9ICdwcm9qZWN0X2NvZGUnO1xuY29uc3QgRlkgPSAnZnknO1xuY29uc3QgSU5ESVJFQ1RfT05fQlVER0VUID0gJ2luZGlyZWN0X29uX2J1ZGdldCc7XG5jb25zdCBJTVBMRU1FTlRBVElPTl9MRVZFTFNfRVhUUkFfSU5GTyA9ICdpbXBsZW1lbnRhdGlvbi1sZXZlbHMnO1xuY29uc3QgSU1QTEVNRU5UQVRJT05fTE9DQVRJT05fRVhUUkFfSU5GTyA9ICdpbXBsZW1lbnRhdGlvbl9sb2NhdGlvbl9uYW1lJztcbmNvbnN0IERPTk9SX0NPTlRBQ1QgPSAnZG9ub3JfY29udGFjdF9pbmZvcm1hdGlvbic7XG5jb25zdCBQUk9KRUNUX0NPT1JESU5BVE9SX0NPTlRBQ1QgPSAncHJvamVjdF9jb29yZGluYXRvcl9jb250YWN0X2luZm9ybWF0aW9uJztcbmNvbnN0IFNFQ1RPUl9NSU5JU1RSWV9DT05UQUNUID0gJ3NlY3Rvcl9taW5pc3RyeV9jb250YWN0X2luZm9ybWF0aW9uJztcbmNvbnN0IE1PRkVEX0NPTlRBQ1QgPSAnbW9mZWRfY29udGFjdF9pbmZvcm1hdGlvbic7XG5jb25zdCBJTVBMRU1FTlRJTkdfRVhFQ1VUSU5HX0FHRU5DWV9DT05UQUNUID0gJ2ltcGxlbWVudGluZy9leGVjdXRpbmdfYWdlbmN5X2NvbnRhY3RfaW5mb3JtYXRpb24nO1xuY29uc3QgQ09OVEFDVCA9ICdjb250YWN0JztcbmNvbnN0IE9SR0FOSVpBVElPTl9HUk9VUCA9ICdvcmdhbml6YXRpb25fZ3JvdXAnO1xuY29uc3QgRklYRURfRVhDSEFOR0VfUkFURSA9ICdmaXhlZF9leGNoYW5nZV9yYXRlJztcbmNvbnN0IFBSSU1BUllfQ09OVEFDVCA9ICdtYXJrX2FzX3ByaW1hcnknO1xuY29uc3QgQUNUSVZJVFlfRE9DVU1FTlRTID0gJ2FjdGl2aXR5X2RvY3VtZW50cyc7XG5jb25zdCBET0NVTUVOVF9UWVBFID0gJ2RvY3VtZW50X3R5cGUnO1xuY29uc3QgSVNPMiA9ICdpc28yJztcbmNvbnN0IE1URUZfUFJPSkVDVElPTlMgPSAnbXRlZl9wcm9qZWN0aW9ucyc7XG5jb25zdCBQUk9KRUNUSU9OID0gJ3Byb2plY3Rpb24nO1xuY29uc3QgUElQRUxJTkUgPSAncGlwZWxpbmUnO1xuY29uc3QgUFJPSkVDVElPTl9EQVRFID0gJ3Byb2plY3Rpb25fZGF0ZSc7XG5cbi8vIEFjdGl2aXR5IGxhYmVscyAodXN1YWxseSB0aG9zZSB0aGF0IGRvbid0IGNvbWUgYXMgcGFydCBvZiBGaWVsZHMgRGVmIEVQKVxuY29uc3QgU0FNRV9BU19QUk9QT1NFRF9TVEFSVF9EQVRFX0xBQkVMID0gJ1NhbWUgYXMgUHJvcG9zZWQgU3RhcnQgRGF0ZSc7XG5jb25zdCBTQU1FX0FTX1BST1BPU0VEX0FQUFJPVkFMX0RBVEVfTEFCRUwgPSAnU2FtZSBhcyBQcm9wb3NlZCBBcHByb3ZhbCBEYXRlJztcblxuLy8gQWN0aXZpdHkgdmFsaWRhdGlvbiBydWxlc1xuY29uc3QgREVQRU5ERU5DWV9JTVBMRU1FTlRBVElPTl9MRVZFTF9QUkVTRU5UID0gJ2ltcGxlbWVudGF0aW9uX2xldmVsX3ByZXNlbnQnO1xuY29uc3QgREVQRU5ERU5DWV9JTVBMRU1FTlRBVElPTl9MRVZFTF9WQUxJRCA9ICdpbXBsZW1lbnRhdGlvbl9sZXZlbF92YWxpZCc7XG5jb25zdCBERVBFTkRFTkNZX0lNUExFTUVOVEFUSU9OX0xPQ0FUSU9OX1BSRVNFTlQgPSAnaW1wbGVtZW50YXRpb25fbG9jYXRpb25fcHJlc2VudCc7XG5jb25zdCBERVBFTkRFTkNZX0lNUExFTUVOVEFUSU9OX0xPQ0FUSU9OX1ZBTElEID0gJ2ltcGxlbWVudGF0aW9uX2xvY2F0aW9uX3ZhbGlkJztcbmNvbnN0IERFUEVOREVOQ1lfUFJPSkVDVF9DT0RFX09OX0JVREdFVCA9ICdwcm9qZWN0X2NvZGVfb25fYnVkZ2V0JztcbmNvbnN0IERFUEVOREVOQ1lfT05fQlVER0VUID0gJ29uX2J1ZGdldCc7XG5jb25zdCBERVBFTkRFTkNZX1RSQU5TQUNUSU9OX1BSRVNFTlQgPSAndHJhbnNhY3Rpb25fcHJlc2VudCc7XG5jb25zdCBERVBFTkRFTkNZX0NPTVBPTkVOVF9GVU5ESU5HX09SR19WQUxJRCA9ICdvcmdhbml6YXRpb25fcHJlc2VudCc7XG5cbi8qKiBJRHMgZm9yIEFQIHNlY3Rpb25zICoqL1xuY29uc3QgQVBfU0VDVElPTl9JRFMgPVxuICBbeyBrZXk6ICdBUElkZW50aWZpY2F0aW9uJywgaGFzaDogJyNBUElkZW50aWZpY2F0aW9uJywgdmFsdWU6ICdJZGVudGlmaWNhdGlvbicsIGZtUGF0aDogRk1DLkFDVElWSVRZX0lERU5USUZJQ0FUSU9OIH0sXG4gICAgeyBrZXk6ICdBUEludGVybmFsSWRzJywgaGFzaDogJyNBUEludGVybmFsSWRzJywgdmFsdWU6ICdBZ2VuY3kgSW50ZXJuYWwgSURzJywgc2VjdGlvblBhdGg6IEFDVElWSVRZX0lOVEVSTkFMX0lEUyB9LFxuICAgIHsga2V5OiAnQVBQbGFubmluZycsIGhhc2g6ICcjQVBQbGFubmluZycsIHZhbHVlOiAnUGxhbm5pbmcnLCBmbVBhdGg6IEZNQy5BQ1RJVklUWV9QTEFOTklORyB9LFxuICAgIHsga2V5OiAnQVBMb2NhdGlvbicsIGhhc2g6ICcjQVBMb2NhdGlvbicsIHZhbHVlOiAnTG9jYXRpb24nLCBzZWN0aW9uUGF0aDogTE9DQVRJT05TIH0sXG4gICAgeyBrZXk6ICdBUFByb2dyYW0nLCBoYXNoOiAnI0FQUHJvZ3JhbScsIHZhbHVlOiAnUHJvZ3JhbScsIGZtUGF0aDogRk1DLkFDVElWSVRZX1BST0dSQU0gfSxcbiAgICB7IGtleTogJ0FQU2VjdG9yJywgaGFzaDogJyNBUFNlY3RvcicsIHZhbHVlOiAnU2VjdG9ycycsIGZtUGF0aDogRk1DLkFDVElWSVRZX1NFQ1RPUlMgfSxcbiAgICB7XG4gICAgICBrZXk6ICdBUEZ1bmRpbmdTb3VyY2VzJyxcbiAgICAgIGhhc2g6ICcjQVBGdW5kaW5nU291cmNlcycsXG4gICAgICB2YWx1ZTogJ0Z1bmRpbmcgU291cmNlcycsXG4gICAgICBzZWN0aW9uUGF0aDogVE9UQUxfTlVNQkVSX09GX0ZVTkRJTkdfU09VUkNFU1xuICAgIH0sXG4gICAgeyBrZXk6ICdBUEZ1bmRpbmcnLCBoYXNoOiAnI0FQRnVuZGluZycsIHZhbHVlOiAnRnVuZGluZycsIHNlY3Rpb25QYXRoOiBGVU5ESU5HUyB9LFxuICAgIHtcbiAgICAgIGtleTogJ0FQUmVsYXRlZE9yZ2FuaXphdGlvbnMnLFxuICAgICAgaGFzaDogJyNBUFJlbGF0ZWRPcmdhbml6YXRpb25zJyxcbiAgICAgIHZhbHVlOiAnUmVsYXRlZCBPcmdhbml6YXRpb25zJyxcbiAgICAgIGZtUGF0aDogRk1DLkFDVElWSVRZX09SR0FOSVpBVElPTlNcbiAgICB9LFxuICAgIHsga2V5OiAnQVBJc3N1ZXMnLCBoYXNoOiAnI0FQSXNzdWVzJywgdmFsdWU6ICdJc3N1ZXMnLCBzZWN0aW9uUGF0aDogSVNTVUVTIH0sXG4gICAgeyBrZXk6ICdBUENvbnRhY3QnLCBoYXNoOiAnI0FQQ29udGFjdCcsIHZhbHVlOiAnQ29udGFjdCBJbmZvcm1hdGlvbicsIGZtUGF0aDogRk1DLkFDVElWSVRZX0NPTlRBQ1QgfSxcbiAgICB7IGtleTogJ0FQU3RydWN0dXJlcycsIGhhc2g6ICcjQVBTdHJ1Y3R1cmVzJywgdmFsdWU6ICdTdHJ1Y3R1cmVzJywgc2VjdGlvblBhdGg6IFNUUlVDVFVSRVMgfSxcbiAgICB7IGtleTogJ0FQRG9jdW1lbnQnLCBoYXNoOiAnI0FQRG9jdW1lbnQnLCB2YWx1ZTogJ1JlbGF0ZWQgRG9jdW1lbnRzJywgc2VjdGlvblBhdGg6IEFDVElWSVRZX0RPQ1VNRU5UUyB9LFxuICBdO1xuXG4vKiogQ29sdW1uIGNvdW50cyBmb3IgZWFjaCBzZWN0aW9uICoqL1xuY29uc3QgQUNUSVZJVFlfSU5URVJOQUxfSURTX0NPTFMgPSAzO1xuY29uc3QgQUNUSVZJVFlfUExBTk5JTkdfQ09MUyA9IDI7XG5jb25zdCBBQ1RJVklUWV9MT0NBVElPTl9DT0xTID0gMztcbmNvbnN0IEFDVElWSVRZX0ZVTkRJTkdfQ09MUyA9IDI7XG5jb25zdCBBQ1RJVklUWV9DT05UQUNUX0NPTFMgPSAyO1xuY29uc3QgQVBfRlVORElOR1NfVEFCTEVfQ09MUyA9IDQ7XG5cbmNvbnN0IE1VTFRJX1NFTEVDVF9NSU5fU0laRSA9IDg7XG5jb25zdCBNVUxUSV9TRUxFQ1RfTUFYX1NJWkUgPSA4O1xuXG4vLyBUT0RPOiBtb3ZlIHRoZXNlIGZ1bmN0aW9ucyB0byBhbiBVdGlscyBjbGFzcy5cbmNvbnN0IHRvRmllbGROYW1lcyA9IGZ1bmN0aW9uIChsaXN0T2ZOYW1lcykge1xuICByZXR1cm4gbGlzdE9mTmFtZXMubWFwKG5hbWUgPT4gdG9GaWVsZE5hbWUobmFtZSkpO1xufTtcblxuLyoqXG4gKiBDb252ZXJ0cyB0aGUgb3JpZ2luYWwgbm9uLXRyYW5zbGF0ZWQgbGFiZWwgdG8gaW50ZXJuYWwgZmllbGQgbmFtZVxuICogQHBhcmFtIG5hbWVcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xuY29uc3QgdG9GaWVsZE5hbWUgPSBmdW5jdGlvbiAobmFtZTogc3RyaW5nKSB7XG4gIHJldHVybiBuYW1lLnRvTG93ZXJDYXNlKCkucmVwbGFjZSgnICcsICdfJyk7XG59O1xuXG4vKipcbiAqIENvbnZlcnRzIHRoZSBpbnRlcm5hbCBmaWVsZCBuYW1lIHRvIHRoZSBPcmlnaW5hbCBub24tdHJhbnNsYXRlZCBsYWJlbFxuICogQHBhcmFtIGZpZWxkTmFtZVxuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5jb25zdCB0b09yaWdpbmFsTGFiZWwgPSBmdW5jdGlvbiAoZmllbGROYW1lOiBzdHJpbmcpIHtcbiAgcmV0dXJuIFVJVXRpbHMuY2FwaXRhbGl6ZShmaWVsZE5hbWUucmVwbGFjZSgnXycsICcgJykpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgT2JqZWN0LmZyZWV6ZSh7XG4gIEFDVElWSVRZX0JVREdFVCxcbiAgQUNUSVZJVFlfU1RBVFVTLFxuICBTVEFUVVNfUkVBU09OLFxuICBGSU5BTkNJQUxfSU5TVFJVTUVOVCxcbiAgVFlQRV9PRl9JTVBMRU1FTlRBVElPTixcbiAgT0JKRUNUSVZFLFxuICBSRVNVTFRTLFxuICBCVURHRVRfQ09ERV9QUk9KRUNUX0lELFxuICBBQ1RVQUxfQVBQUk9WQUxfREFURSxcbiAgRlVORElOR1MsXG4gIEZVTkRJTkdfRE9OT1JfT1JHX0lELFxuICBJU19EUkFGVCxcbiAgT1JHX1JPTEVfT1JHX0lELFxuICBBRERJVElPTkFMX0lORk8sXG4gIFBSSU1BUllfU0VDVE9SUyxcbiAgU0VDT05EQVJZX1NFQ1RPUlMsXG4gIFRFUlRJQVJZX1NFQ1RPUlMsXG4gIFRBR19TRUNUT1JTLFxuICBTRUNUT1IsXG4gIFNFQ1RPUl9QRVJDRU5UQUdFLFxuICBGSU5BTkNJTkdfSU5TVFJVTUVOVCxcbiAgTU9EQUxJVElFUyxcbiAgTElORV9NSU5JU1RSWV9SQU5LLFxuICBHT1ZFUk5NRU5UX0FHUkVFTUVOVF9OVU1CRVIsXG4gIEZVTkRJTkdfU1RBVFVTLFxuICBMT0NBVElPTlMsXG4gIExPQ0FUSU9OLFxuICBMT0NBVElPTl9QRVJDRU5UQUdFLFxuICBJTVBMRU1FTlRBVElPTl9MT0NBVElPTixcbiAgSU1QTEVNRU5UQVRJT05fTEVWRUwsXG4gIEFQUFJPVkFMX1NUQVRVUyxcbiAgQVBQUk9WRURfQlksXG4gIEFQUFJPVkFMX0RBVEUsXG4gIFRZUEVfT0ZfQVNTSVNUQU5DRSxcbiAgRVhQRU5ESVRVUkVfQ0xBU1MsXG4gIEZVTkRJTkdfREVUQUlMUyxcbiAgTU9ERV9PRl9QQVlNRU5ULFxuICBGVU5ESU5HX0NMQVNTSUZJQ0FUSU9OX0RBVEUsXG4gIEFHUkVFTUVOVCxcbiAgRE9OT1JfT0JKRUNUSVZFLFxuICBDT05ESVRJT05TLFxuICBBR1JFRU1FTlRfQ09ERSxcbiAgQUdSRUVNRU5UX1RJVExFLFxuICBQUk9KRUNUX0NBVEVHT1JZLFxuICBQUk9KRUNUX0lNUExFTUVOVElOR19VTklULFxuICBPUkdBTklaQVRJT04sXG4gIFBFUkNFTlRBR0UsXG4gIEFNUF9PUkdBTklaQVRJT05fUk9MRV9JRCxcbiAgUk9MRSxcbiAgRVhFQ1VUSU5HX0FHRU5DWSxcbiAgQ09OVFJBQ1RJTkdfQUdFTkNZLFxuICBCRU5FRklDSUFSWV9BR0VOQ1ksXG4gIElNUExFTUVOVElOR19BR0VOQ1ksXG4gIFJFU1BPTlNJQkxFX09SR0FOSVpBVElPTixcbiAgRE9OT1JfT1JHQU5JWkFUSU9OLFxuICBSRUdJT05BTF9HUk9VUCxcbiAgU0VDVE9SX0dST1VQLFxuICBCVURHRVRTLFxuICBCVURHRVRfQ09ERSxcbiAgQlVER0VUX09SR0FOSVpBVElPTl9DT0RFLFxuICBBUkNISVZFRCxcbiAgVFJBTlNBQ1RJT05fREFURSxcbiAgVFJBTlNBQ1RJT05fVFlQRSxcbiAgQ09NTUlUTUVOVFMsXG4gIERJU0JVUlNFTUVOVFMsXG4gIEVYUEVORElUVVJFUyxcbiAgRVNUSU1BVEVEX0RJU0JVUlNFTUVOVFMsXG4gIFRSQU5TQUNUSU9OX0FNT1VOVCxcbiAgQURKVVNUTUVOVF9UWVBFLFxuICBBQ1RVQUxfU1RBUlRfREFURSxcbiAgUFJPUE9TRURfU1RBUlRfREFURSxcbiAgQUNUVUFMX0NPTVBMRVRJT05fREFURSxcbiAgQ09OVFJBQ1RJTkdfREFURSxcbiAgRElTQlVSU0VNRU5UX0RBVEUsXG4gIFBST1BPU0VEX0FQUFJPVkFMX0RBVEUsXG4gIE9SSUdJTkFMX0NPTVBMRVRJT05fREFURSxcbiAgUFJPUE9TRURfQ09NUExFVElPTl9EQVRFLFxuICBGSU5BTF9EQVRFX0ZPUl9ESVNCVVJTRU1FTlRTLFxuICBGSU5BTF9EQVRFX0ZPUl9DT05UUkFDVElORyxcbiAgRUZGRUNUSVZFX0ZVTkRJTkdfREFURSxcbiAgRlVORElOR19DTE9TSU5HX0RBVEUsXG4gIFJBVElGSUNBVElPTl9EQVRFLFxuICBNQVRVUklUWSxcbiAgTEFTVF9BVURJVF9EQVRFLFxuICBTSUdOQVRVUkVfREFURSxcbiAgSFVNQU5JVEFSSUFOX0FJRCxcbiAgRElTQVNURVJfUkVTUE9OU0UsXG4gIFBST0dSQU0sXG4gIFBST0dSQU1fUEVSQ0VOVEFHRSxcbiAgUFJPR1JBTV9TRVRUSU5HUyxcbiAgTkFUSU9OQUxfUExBTl9PQkpFQ1RJVkUsXG4gIFBSSU1BUllfUFJPR1JBTVMsXG4gIFNFQ09OREFSWV9QUk9HUkFNUyxcbiAgVEVSVElBUl9QUk9HUkFNUyxcbiAgR09WRVJOTUVOVF9BUFBST1ZBTF9QUk9DRURVUkVTLFxuICBKT0lOVF9DUklURVJJQSxcbiAgVEVBTSxcbiAgUkVKRUNURURfSUQsXG4gIElOVEVSTkFMX0lELFxuICBBTVBfSUQsXG4gIFBST0pFQ1RfVElUTEUsXG4gIERFU0NSSVBUSU9OLFxuICBNT0RJRklFRF9CWSxcbiAgTU9ESUZJRURfT04sXG4gIENSRUFURURfQlksXG4gIENSRUFURURfT04sXG4gIExBU1RfSU1QT1JURURfQlksXG4gIENMSUVOVF9DSEFOR0VfSUQsXG4gIENMSUVOVF9DUkVBVEVEX09OLFxuICBDTElFTlRfVVBEQVRFRF9PTixcbiAgSVNfUFVTSEVELFxuICBBQ1RJVklUWV9HUk9VUCxcbiAgVkVSU0lPTixcbiAgUFJPSkVDVF9DT01NRU5UUyxcbiAgTEVTU09OU19MRUFSTkVELFxuICBQUk9KRUNUX0lNUEFDVCxcbiAgQUNUSVZJVFlfU1VNTUFSWSxcbiAgQ09ORElUSU9OQUxJVElFUyxcbiAgUFJPSkVDVF9NQU5BR0VNRU5ULFxuICBBX0NfQ0hBUFRFUixcbiAgQ1JJU19OVU1CRVIsXG4gIElBVElfSURFTlRJRklFUixcbiAgQUNUSVZJVFlfSU5URVJOQUxfSURTLFxuICBISUVSQVJDSElDQUxfVkFMVUUsXG4gIEhJRVJBUkNISUNBTF9WQUxVRV9QQVJUUyxcbiAgSElFUkFSQ0hJQ0FMX1ZBTFVFX0RFUFRILFxuICBQUENfQU1PVU5ULFxuICBSUENfQU1PVU5ULFxuICBQUENfQU5OVUFMX0JVREdFVFMsXG4gIEFNT1VOVCxcbiAgQ1VSUkVOQ1ksXG4gIEZVTkRJTkdfREFURSxcbiAgQ09NUE9ORU5UUyxcbiAgVE9UQUxfTlVNQkVSX09GX0ZVTkRJTkdfU09VUkNFUyxcbiAgU09VUkNFX1JPTEUsXG4gIEFNUF9GVU5ESU5HX0lELFxuICBJU1NVRVMsXG4gIElTU1VFX0RBVEUsXG4gIElTU1VFX05BTUUsXG4gIE1FQVNVUkVTLFxuICBNRUFTVVJFX05BTUUsXG4gIE1FQVNVUkVfREFURSxcbiAgQUNUT1JTLFxuICBBQ1RPUl9OQU1FLFxuICBTVFJVQ1RVUkVTLFxuICBTVFJVQ1RVUkVTX1RJVExFLFxuICBTVFJVQ1RVUkVTX0RFU0NSSVBUSU9OLFxuICBTVFJVQ1RVUkVTX0xBVElUVURFLFxuICBTVFJVQ1RVUkVTX0xPTkdJVFVERSxcbiAgU1RSVUNUVVJFU19DT0xPUixcbiAgU1RSVUNUVVJFU19MQVQsXG4gIFNUUlVDVFVSRVNfTE5HLFxuICBTVFJVQ1RVUkVTX1NIQVBFLFxuICBTVFJVQ1RVUkVTX1BPSU5ULFxuICBTVFJVQ1RVUkVTX1BPTFlHT04sXG4gIFNUUlVDVFVSRVNfUE9MWUxJTkUsXG4gIFNUUlVDVFVSRVNfQ09PUkRJTkFURVMsXG4gIENPTVBPTkVOVF9UWVBFLFxuICBDT01QT05FTlRfVElUTEUsXG4gIENPTVBPTkVOVF9GVU5ESU5HLFxuICBDT01QT05FTlRfREVTQ1JJUFRJT04sXG4gIENPTVBPTkVOVF9PUkdBTklaQVRJT04sXG4gIEZVTkRJTkdfQU1PVU5UX0lELFxuICBFWFRSQV9JTkZPLFxuICBWQUxVRSxcbiAgQUNST05ZTSxcbiAgVFlQRV9PRl9DT09QRVJBVElPTixcbiAgQU5OVUFMX1BST0pFQ1RfQlVER0VUX0lELFxuICBUWVBFLFxuICBZRUFSLFxuICBHUk9VUF9WRVJTSU9ORURfRlVORElORyxcbiAgQUNUSVZFX0xJU1QsXG4gIEFDVElWRSxcbiAgREVMRUdBVEVEX0NPT1BFUkFUSU9OLFxuICBERUxFR0FURURfUEFSVE5FUixcbiAgRklOQU5DSU5HX0lELFxuICBESVNCVVJTRU1FTlRfT1JERVJfSUQsXG4gIFBMRURHRSxcbiAgQ0FQSVRBTF9TUEVORElOR19QRVJDRU5UQUdFLFxuICBSRVBPUlRJTkdfREFURSxcbiAgUkVDSVBJRU5UX1JPTEUsXG4gIFJFQ0lQSUVOVF9PUkdBTklaQVRJT04sXG4gIFRFTVBPUkFMX0lELFxuICBNSU5JU1RSWV9DT0RFLFxuICBQUk9KRUNUX0NPREUsXG4gIEZZLFxuICBJTkRJUkVDVF9PTl9CVURHRVQsXG4gIElNUExFTUVOVEFUSU9OX0xFVkVMU19FWFRSQV9JTkZPLFxuICBJTVBMRU1FTlRBVElPTl9MT0NBVElPTl9FWFRSQV9JTkZPLFxuICBET05PUl9DT05UQUNULFxuICBQUk9KRUNUX0NPT1JESU5BVE9SX0NPTlRBQ1QsXG4gIFNFQ1RPUl9NSU5JU1RSWV9DT05UQUNULFxuICBNT0ZFRF9DT05UQUNULFxuICBJTVBMRU1FTlRJTkdfRVhFQ1VUSU5HX0FHRU5DWV9DT05UQUNULFxuICBDT05UQUNULFxuICBPUkdBTklaQVRJT05fR1JPVVAsXG4gIEZJWEVEX0VYQ0hBTkdFX1JBVEUsXG4gIFBSSU1BUllfQ09OVEFDVCxcbiAgQUNUSVZJVFlfRE9DVU1FTlRTLFxuICBET0NVTUVOVF9UWVBFLFxuICBJU08yLFxuICBNVEVGX1BST0pFQ1RJT05TLFxuICBQUk9KRUNUSU9OLFxuICBQSVBFTElORSxcbiAgUFJPSkVDVElPTl9EQVRFLFxuICBTQU1FX0FTX1BST1BPU0VEX1NUQVJUX0RBVEVfTEFCRUwsXG4gIFNBTUVfQVNfUFJPUE9TRURfQVBQUk9WQUxfREFURV9MQUJFTCxcbiAgREVQRU5ERU5DWV9JTVBMRU1FTlRBVElPTl9MRVZFTF9QUkVTRU5ULFxuICBERVBFTkRFTkNZX0lNUExFTUVOVEFUSU9OX0xFVkVMX1ZBTElELFxuICBERVBFTkRFTkNZX0lNUExFTUVOVEFUSU9OX0xPQ0FUSU9OX1BSRVNFTlQsXG4gIERFUEVOREVOQ1lfSU1QTEVNRU5UQVRJT05fTE9DQVRJT05fVkFMSUQsXG4gIERFUEVOREVOQ1lfUFJPSkVDVF9DT0RFX09OX0JVREdFVCxcbiAgREVQRU5ERU5DWV9PTl9CVURHRVQsXG4gIERFUEVOREVOQ1lfVFJBTlNBQ1RJT05fUFJFU0VOVCxcbiAgREVQRU5ERU5DWV9DT01QT05FTlRfRlVORElOR19PUkdfVkFMSUQsXG4gIEFQX1NFQ1RJT05fSURTLFxuICBBQ1RJVklUWV9JTlRFUk5BTF9JRFNfQ09MUyxcbiAgQUNUSVZJVFlfUExBTk5JTkdfQ09MUyxcbiAgQUNUSVZJVFlfTE9DQVRJT05fQ09MUyxcbiAgQUNUSVZJVFlfRlVORElOR19DT0xTLFxuICBBQ1RJVklUWV9DT05UQUNUX0NPTFMsXG4gIEFQX0ZVTkRJTkdTX1RBQkxFX0NPTFMsXG4gIE1VTFRJX1NFTEVDVF9NSU5fU0laRSxcbiAgTVVMVElfU0VMRUNUX01BWF9TSVpFLFxuICB0b0ZpZWxkTmFtZXMsXG4gIHRvRmllbGROYW1lLFxuICB0b09yaWdpbmFsTGFiZWwsXG59KTtcbiIsImNvbnN0IE5PVElGSUNBVElPTl9PUklHSU5fQVBJX1NFQ1VSSVRZID0gJ05PVElGSUNBVElPTl9PUklHSU5fQVBJX1NFQ1VSSVRZJztcbmNvbnN0IE5PVElGSUNBVElPTl9PUklHSU5fQVBJX05FVFdPUksgPSAnTk9USUZJQ0FUSU9OX09SSUdJTl9BUElfTkVUV09SSyc7XG5jb25zdCBOT1RJRklDQVRJT05fT1JJR0lOX0FQSV9TWU5DVVAgPSAnTk9USUZJQ0FUSU9OX09SSUdJTl9BUElfU1lOQ1VQJztcbmNvbnN0IE5PVElGSUNBVElPTl9PUklHSU5fQVBJX0dFTkVSQUwgPSAnTk9USUZJQ0FUSU9OX09SSUdJTl9BUElfR0VORVJBTCc7XG5jb25zdCBOT1RJRklDQVRJT05fT1JJR0lOX0RBVEFCQVNFID0gJ05PVElGSUNBVElPTl9PUklHSU5fREFUQUJBU0UnO1xuY29uc3QgTk9USUZJQ0FUSU9OX09SSUdJTl9BVVRIRU5USUNBVElPTiA9ICdOT1RJRklDQVRJT05fT1JJR0lOX0FVVEhFTlRJQ0FUSU9OJztcbmNvbnN0IE5PVElGSUNBVElPTl9PUklHSU5fV09SS1NQQUNFX0ZJTFRFUiA9ICdOT1RJRklDQVRJT05fT1JJR0lOX1dPUktTUEFDRV9GSUxURVInO1xuY29uc3QgTk9USUZJQ0FUSU9OX09SSUdJTl9XT1JLU1BBQ0UgPSAnTk9USUZJQ0FUSU9OX09SSUdJTl9XT1JLU1BBQ0UnO1xuY29uc3QgTk9USUZJQ0FUSU9OX09SSUdJTl9TWU5DVVBfUFJPQ0VTUyA9ICdOT1RJRklDQVRJT05fT1JJR0lOX1NZTkNVUF9QUk9DRVNTJztcbmNvbnN0IE5PVElGSUNBVElPTl9PUklHSU5fQ1VSUkVOQ1lfTUFOQUdFUiA9ICdOT1RJRklDQVRJT05fT1JJR0lOX0NVUlJFTkNZX01BTkFHRVInO1xuY29uc3QgTk9USUZJQ0FUSU9OX09SSUdJTl9EQVRFUyA9ICdOT1RJRklDQVRJT05fT1JJR0lOX0RBVEVTJztcbmNvbnN0IE5PVElGSUNBVElPTl9PUklHSU5fQUNUSVZJVFkgPSAnTk9USUZJQ0FUSU9OX09SSUdJTl9BQ1RJVklUWSc7XG5jb25zdCBOT1RJRklDQVRJT05fT1JJR0lOX1JFU09VUkNFID0gJ05PVElGSUNBVElPTl9PUklHSU5fUkVTT1VSQ0UnO1xuY29uc3QgTk9USUZJQ0FUSU9OX09SSUdJTl9JMThORVhUID0gJ05PVElGSUNBVElPTl9PUklHSU5fSTE4TkVYVCc7XG5jb25zdCBOT1RJRklDQVRJT05fT1JJR0lOX1VQREFURV9DSEVDSyA9ICdOT1RJRklDQVRJT05fT1JJR0lOX1VQREFURV9DSEVDSyc7XG5jb25zdCBOT1RJRklDQVRJT05fT1JJR0lOX1VQREFURSA9ICdOT1RJRklDQVRJT05fT1JJR0lOX1VQREFURSc7XG5jb25zdCBOT1RJRklDQVRJT05fT1JJR0lOX1NFVFVQID0gJ05PVElGSUNBVElPTl9PUklHSU5fU0VUVVAnO1xuY29uc3QgTk9USUZJQ0FUSU9OX09SSUdJTl9TRVRUSU5HUyA9ICdOT1RJRklDQVRJT05fT1JJR0lOX1NFVFRJTkdTJztcblxuY29uc3QgTk9USUZJQ0FUSU9OX1NFVkVSSVRZX1dBUk5JTkcgPSAnTk9USUZJQ0FUSU9OX1NFVkVSSVRZX1dBUk5JTkcnO1xuY29uc3QgTk9USUZJQ0FUSU9OX1NFVkVSSVRZX0lORk8gPSAnTk9USUZJQ0FUSU9OX1NFVkVSSVRZX0lORk8nO1xuY29uc3QgTk9USUZJQ0FUSU9OX1NFVkVSSVRZX0VSUk9SID0gJ05PVElGSUNBVElPTl9TRVZFUklUWV9FUlJPUic7XG5cbmNvbnN0IE5PVElGSUNBVElPTl9FUlJPUl9MRVZFTF9NSU5PUiA9ICdOT1RJRklDQVRJT05fRVJST1JfTEVWRUxfTUlOT1InO1xuY29uc3QgTk9USUZJQ0FUSU9OX0VSUk9SX0xFVkVMX0JMT0NLRVIgPSAnTk9USUZJQ0FUSU9OX0VSUk9SX0xFVkVMX0JMT0NLRVInO1xuXG5jb25zdCBOT1RJRklDQVRJT05fT1JJR0lOX1dST05HX01FVEhPRF9VU0FHRSA9ICdOT1RJRklDQVRJT05fT1JJR0lOX1dST05HX01FVEhPRF9VU0FHRSc7XG5cbmNvbnN0IEVSUk9SX0NPREVfTk9fQ09OTkVDVElWSVRZID0gJ05PX0NPTk5FQ1RJVklUWSc7XG5jb25zdCBFUlJPUl9DT0RFX0FDQ0VTU19ERU5JRUQgPSAnQUNDRVNTX0RFTklFRCc7XG5cblxuY29uc3QgTVNHX0lOVkFMSURfVVJMID0gJ2ludmFsaWRVcmwnO1xuY29uc3QgTVNHX1RJTUVPVVQgPSAndGltZW91dEVycm9yJztcbmNvbnN0IE1TR19VTktOT1dOX05FVFdPUktfRVJST1IgPSAndW5rbm93bk5ldHdvcmtFcnJvcic7XG5jb25zdCBNU0dfQU1QX1VOUkVBQ0hBQkxFID0gJ0FNUFVucmVhY2hhYmxlRXJyb3InO1xuY29uc3QgR0VORVJBTF9DT05ORUNUSU9OX0VSUk9SUyA9IFtNU0dfSU5WQUxJRF9VUkwsIE1TR19USU1FT1VULCBNU0dfVU5LTk9XTl9ORVRXT1JLX0VSUk9SLCBNU0dfQU1QX1VOUkVBQ0hBQkxFXTtcblxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuZnJlZXplKHtcbiAgTk9USUZJQ0FUSU9OX09SSUdJTl9BUElfU0VDVVJJVFksXG4gIE5PVElGSUNBVElPTl9PUklHSU5fQVBJX05FVFdPUkssXG4gIE5PVElGSUNBVElPTl9PUklHSU5fQVBJX1NZTkNVUCxcbiAgTk9USUZJQ0FUSU9OX09SSUdJTl9BUElfR0VORVJBTCxcbiAgTk9USUZJQ0FUSU9OX09SSUdJTl9EQVRBQkFTRSxcbiAgTk9USUZJQ0FUSU9OX09SSUdJTl9BVVRIRU5USUNBVElPTixcbiAgTk9USUZJQ0FUSU9OX09SSUdJTl9XT1JLU1BBQ0VfRklMVEVSLFxuICBOT1RJRklDQVRJT05fT1JJR0lOX1dPUktTUEFDRSxcbiAgTk9USUZJQ0FUSU9OX09SSUdJTl9TWU5DVVBfUFJPQ0VTUyxcbiAgTk9USUZJQ0FUSU9OX09SSUdJTl9DVVJSRU5DWV9NQU5BR0VSLFxuICBOT1RJRklDQVRJT05fT1JJR0lOX0RBVEVTLFxuICBOT1RJRklDQVRJT05fT1JJR0lOX0FDVElWSVRZLFxuICBOT1RJRklDQVRJT05fT1JJR0lOX1JFU09VUkNFLFxuICBOT1RJRklDQVRJT05fT1JJR0lOX0kxOE5FWFQsXG4gIE5PVElGSUNBVElPTl9PUklHSU5fVVBEQVRFX0NIRUNLLFxuICBOT1RJRklDQVRJT05fT1JJR0lOX1VQREFURSxcbiAgTk9USUZJQ0FUSU9OX09SSUdJTl9TRVRVUCxcbiAgTk9USUZJQ0FUSU9OX09SSUdJTl9TRVRUSU5HUyxcblxuICBOT1RJRklDQVRJT05fU0VWRVJJVFlfV0FSTklORyxcbiAgTk9USUZJQ0FUSU9OX1NFVkVSSVRZX0lORk8sXG4gIE5PVElGSUNBVElPTl9TRVZFUklUWV9FUlJPUixcblxuICBOT1RJRklDQVRJT05fRVJST1JfTEVWRUxfTUlOT1IsXG4gIE5PVElGSUNBVElPTl9FUlJPUl9MRVZFTF9CTE9DS0VSLFxuXG4gIE5PVElGSUNBVElPTl9PUklHSU5fV1JPTkdfTUVUSE9EX1VTQUdFLFxuXG4gIEVSUk9SX0NPREVfTk9fQ09OTkVDVElWSVRZLFxuICBFUlJPUl9DT0RFX0FDQ0VTU19ERU5JRUQsXG5cblxuICBNU0dfSU5WQUxJRF9VUkwsXG4gIE1TR19USU1FT1VULFxuICBNU0dfVU5LTk9XTl9ORVRXT1JLX0VSUk9SLFxuICBNU0dfQU1QX1VOUkVBQ0hBQkxFLFxuICBHRU5FUkFMX0NPTk5FQ1RJT05fRVJST1JTXG59KVxuO1xuIiwiLyoqXG4gKiBAYXV0aG9yIE5hZGVqZGEgTWFuZHJlc2N1XG4gKi9cblxuaW1wb3J0IEFjdGl2aXR5Q29uc3RhbnRzIGZyb20gJy4uL21vZHVsZXMvdXRpbC9BY3Rpdml0eUNvbnN0YW50cyc7XG5cbmNvbnN0IERPTk9SX09SR0FOSVpBVElPTiA9ICdEb25vciBPcmdhbml6YXRpb24nO1xuY29uc3QgUkVTUE9OU0lCTEVfT1JHQU5JWkFUSU9OID0gJ1Jlc3BvbnNpYmxlIE9yZ2FuaXphdGlvbic7XG5jb25zdCBFWEVDVVRJTkdfQUdFTkNZID0gJ0V4ZWN1dGluZyBBZ2VuY3knO1xuY29uc3QgSU1QTEVNRU5USU5HX0FHRU5DWSA9ICdJbXBsZW1lbnRpbmcgQWdlbmN5JztcbmNvbnN0IEJFTkVGSUNJQVJZX0FHRU5DWSA9ICdCZW5lZmljaWFyeSBBZ2VuY3knO1xuY29uc3QgQ09OVFJBQ1RJTkdfQUdFTkNZID0gJ0NvbnRyYWN0aW5nIEFnZW5jeSc7XG5jb25zdCBET05PUl9BR0VOQ1kgPSAnRG9ub3InO1xuY29uc3QgUkVHSU9OQUxfR1JPVVAgPSAnUmVnaW9uYWwgR3JvdXAnO1xuY29uc3QgU0VDVE9SX0dST1VQID0gJ1NlY3RvciBHcm91cCc7XG5cbmNvbnN0IE9SR19ST0xFX05BTUVTID0gW0RPTk9SX09SR0FOSVpBVElPTiwgUkVTUE9OU0lCTEVfT1JHQU5JWkFUSU9OLCBFWEVDVVRJTkdfQUdFTkNZLCBJTVBMRU1FTlRJTkdfQUdFTkNZLFxuICBCRU5FRklDSUFSWV9BR0VOQ1ksIENPTlRSQUNUSU5HX0FHRU5DWSwgUkVHSU9OQUxfR1JPVVAsIFNFQ1RPUl9HUk9VUF07XG5cbmNvbnN0IEFDVFVBTCA9ICdBY3R1YWwnO1xuY29uc3QgUExBTk5FRCA9ICdQbGFubmVkJztcbmNvbnN0IENPTU1JVE1FTlRTID0gJ0NvbW1pdG1lbnRzJztcbmNvbnN0IERJU0JVUlNFTUVOVFMgPSAnRGlzYnVyc2VtZW50cyc7XG5jb25zdCBFWFBFTkRJVFVSRVMgPSAnRXhwZW5kaXR1cmVzJztcbmNvbnN0IEFDVFVBTF9DT01NSVRNRU5UUyA9IGAke0FDVFVBTH0gJHtBY3Rpdml0eUNvbnN0YW50cy5DT01NSVRNRU5UU31gO1xuY29uc3QgQUNUVUFMX0RJU0JVUlNFTUVOVFMgPSBgJHtBQ1RVQUx9ICR7QWN0aXZpdHlDb25zdGFudHMuRElTQlVSU0VNRU5UU31gO1xuY29uc3QgQUNUVUFMX0VYUEVORElUVVJFUyA9IGAke0FDVFVBTH0gJHtBY3Rpdml0eUNvbnN0YW50cy5FWFBFTkRJVFVSRVN9YDtcbmNvbnN0IFBMQU5ORURfQ09NTUlUTUVOVFMgPSBgJHtQTEFOTkVEfSAke0FjdGl2aXR5Q29uc3RhbnRzLkNPTU1JVE1FTlRTfWA7XG5jb25zdCBQTEFOTkVEX0RJU0JVUlNFTUVOVFMgPSBgJHtQTEFOTkVEfSAke0FjdGl2aXR5Q29uc3RhbnRzLkRJU0JVUlNFTUVOVFN9YDtcbmNvbnN0IFBMQU5ORURfRVhQRU5ESVRVUkVTID0gYCR7UExBTk5FRH0gJHtBY3Rpdml0eUNvbnN0YW50cy5FWFBFTkRJVFVSRVN9YDtcbmNvbnN0IFVOQUxMT0NBVEVEX0RJU0JVUlNFTUVOVFMgPSAnVW5hbGxvY2F0ZWQgRGlzYnVyc2VtZW50cyc7XG5jb25zdCBERUxJVkVSWV9SQVRFID0gJ0RlbGl2ZXJ5IHJhdGUnO1xuY29uc3QgTVRFRl9QUk9KRUNUSU9OUyA9ICdNVEVGIFByb2plY3Rpb25zJztcblxuY29uc3QgQURKVVNUTUVOVF9UWVBFUyA9IFtBQ1RVQUwsIFBMQU5ORURdO1xuY29uc3QgQURKVVNUTUVOVF9UWVBFU19BUF9PUkRFUiA9IFtQTEFOTkVELCBBQ1RVQUxdO1xuXG5jb25zdCBORVdfQUNUSVZJVFlfSUQgPSAnMCc7XG5cbmNvbnN0IFBST1BPU0VEX1BST0pFQ1RfQ09TVCA9ICdwcGMnO1xuY29uc3QgUkVWSVNFRF9QUk9KRUNUX0NPU1QgPSAncnBjJztcblxuY29uc3QgQUNST05ZTV9ET05PUl9PUkdBTklaQVRJT04gPSAnRE4nO1xuY29uc3QgQUNST05ZTV9FWEVDVVRJTkdfQUdFTkNZID0gJ0VBJztcbmNvbnN0IEFDUk9OWU1fSU1QTEVNRU5USU5HX0FHRU5DWSA9ICdJQSc7XG5jb25zdCBBQ1JPTllNX0JFTkVGSUNJQVJZX0FHRU5DWSA9ICdCQSc7XG5jb25zdCBBQ1JPTllNX1JFU1BPTlNJQkxFX09SR0FOSVpBVElPTiA9ICdSTyc7XG5cbi8qKiBBcHByb3ZhbCBzdGF0dXMgdW50cmFuc2xhdGVkIHZhbHVlcyAqKi9cbmNvbnN0IEFQUFJPVkFMX1NUQVRVU19DUkVBVEVEID0gJ2NyZWF0ZWQnO1xuY29uc3QgQVBQUk9WQUxfU1RBVFVTX0FQUFJPVkVEID0gJ2FwcHJvdmVkJztcbmNvbnN0IEFQUFJPVkFMX1NUQVRVU19FRElURUQgPSAnZWRpdGVkJztcbmNvbnN0IEFQUFJPVkFMX1NUQVRVU19TVEFSVEVEX0FQUFJPVkVEID0gJ3N0YXJ0ZWRhcHByb3ZlZCc7XG5jb25zdCBBUFBST1ZBTF9TVEFUVVNfU1RBUlRFRCA9ICdzdGFydGVkJztcbmNvbnN0IEFQUFJPVkFMX1NUQVRVU19OT1RfQVBQUk9WRUQgPSAnbm90X2FwcHJvdmVkJztcbmNvbnN0IEFQUFJPVkFMX1NUQVRVU19SRUpFQ1RFRCA9ICdyZWplY3RlZCc7XG5cbmNvbnN0IE9OX0JVREdFVCA9ICdPbiBCdWRnZXQnO1xuXG5jb25zdCBJTlRFUk5BVElPTkFMID0gJ0ludGVybmF0aW9uYWwnO1xuY29uc3QgQ09VTlRSWSA9ICdDb3VudHJ5JztcblxuY29uc3QgUkVMQVRFRF9ET0NVTUVOVFMgPSAnUmVsYXRlZCBEb2N1bWVudHMnO1xuXG5jb25zdCBUTVBfRU5USVRZX1ZBTElEQVRPUiA9ICdlbnRpdHktdmFsaWRhdG9yJztcblxuLyoqIFJlcXVpcmVkIHN0YXR1cyAqL1xuY29uc3QgQUxXQVlTX1JFUVVJUkVEID0gJ1knO1xuXG5leHBvcnQgZGVmYXVsdCBPYmplY3QuZnJlZXplKHtcbiAgRE9OT1JfT1JHQU5JWkFUSU9OLFxuICBSRVNQT05TSUJMRV9PUkdBTklaQVRJT04sXG4gIEVYRUNVVElOR19BR0VOQ1ksXG4gIElNUExFTUVOVElOR19BR0VOQ1ksXG4gIEJFTkVGSUNJQVJZX0FHRU5DWSxcbiAgQ09OVFJBQ1RJTkdfQUdFTkNZLFxuICBET05PUl9BR0VOQ1ksXG4gIFJFR0lPTkFMX0dST1VQLFxuICBTRUNUT1JfR1JPVVAsXG4gIE9SR19ST0xFX05BTUVTLFxuICBBQ1RVQUwsXG4gIFBMQU5ORUQsXG4gIENPTU1JVE1FTlRTLFxuICBESVNCVVJTRU1FTlRTLFxuICBFWFBFTkRJVFVSRVMsXG4gIEFDVFVBTF9DT01NSVRNRU5UUyxcbiAgQUNUVUFMX0RJU0JVUlNFTUVOVFMsXG4gIEFDVFVBTF9FWFBFTkRJVFVSRVMsXG4gIFBMQU5ORURfQ09NTUlUTUVOVFMsXG4gIFBMQU5ORURfRElTQlVSU0VNRU5UUyxcbiAgUExBTk5FRF9FWFBFTkRJVFVSRVMsXG4gIFVOQUxMT0NBVEVEX0RJU0JVUlNFTUVOVFMsXG4gIERFTElWRVJZX1JBVEUsXG4gIE1URUZfUFJPSkVDVElPTlMsXG4gIEFESlVTVE1FTlRfVFlQRVMsXG4gIEFESlVTVE1FTlRfVFlQRVNfQVBfT1JERVIsXG4gIE5FV19BQ1RJVklUWV9JRCxcbiAgUFJPUE9TRURfUFJPSkVDVF9DT1NULFxuICBSRVZJU0VEX1BST0pFQ1RfQ09TVCxcbiAgQUNST05ZTV9ET05PUl9PUkdBTklaQVRJT04sXG4gIEFDUk9OWU1fRVhFQ1VUSU5HX0FHRU5DWSxcbiAgQUNST05ZTV9JTVBMRU1FTlRJTkdfQUdFTkNZLFxuICBBQ1JPTllNX0JFTkVGSUNJQVJZX0FHRU5DWSxcbiAgQUNST05ZTV9SRVNQT05TSUJMRV9PUkdBTklaQVRJT04sXG4gIEFQUFJPVkFMX1NUQVRVU19DUkVBVEVELFxuICBBUFBST1ZBTF9TVEFUVVNfQVBQUk9WRUQsXG4gIEFQUFJPVkFMX1NUQVRVU19FRElURUQsXG4gIEFQUFJPVkFMX1NUQVRVU19TVEFSVEVEX0FQUFJPVkVELFxuICBBUFBST1ZBTF9TVEFUVVNfU1RBUlRFRCxcbiAgQVBQUk9WQUxfU1RBVFVTX05PVF9BUFBST1ZFRCxcbiAgQVBQUk9WQUxfU1RBVFVTX1JFSkVDVEVELFxuICBPTl9CVURHRVQsXG4gIElOVEVSTkFUSU9OQUwsXG4gIENPVU5UUlksXG4gIFJFTEFURURfRE9DVU1FTlRTLFxuICBUTVBfRU5USVRZX1ZBTElEQVRPUixcbiAgQUxXQVlTX1JFUVVJUkVEXG59KTtcbiIsImltcG9ydCBBY3Rpdml0eUNvbnN0YW50cyBmcm9tICcuLi9tb2R1bGVzL3V0aWwvQWN0aXZpdHlDb25zdGFudHMnO1xuaW1wb3J0IEZlYXR1cmVNYW5hZ2VyQ29uc3RhbnRzIGZyb20gJy4uL21vZHVsZXMvdXRpbC9GZWF0dXJlTWFuYWdlckNvbnN0YW50cyc7XG5pbXBvcnQgVmFsdWVDb25zdGFudHMgZnJvbSAnLi9WYWx1ZUNvbnN0YW50cyc7XG5cbi8qKlxuICogVGhpcyBpcyBhIHNldCBvZiBmaWVsZCBwYXRocyB0aGF0IGFyZSB1c2VkIGZvciBmcmVxdWVudCBuZWVkc1xuICogQGF1dGhvciBOYWRlamRhIE1hbmRyZXNjdVxuICovXG5cbmV4cG9ydCBjb25zdCBGVU5ESU5HX0FDVElWRV9MSVNUID0gJ2Z1bmRpbmdzfmFjdGl2ZV9saXN0JztcbmV4cG9ydCBjb25zdCBGVU5ESU5HX1RZUEVfT0ZfQVNTSVNUQU5DRSA9IGAke0FjdGl2aXR5Q29uc3RhbnRzLkZVTkRJTkdTfX4ke0FjdGl2aXR5Q29uc3RhbnRzLlRZUEVfT0ZfQVNTSVNUQU5DRX1gO1xuZXhwb3J0IGNvbnN0IEZVTkRJTkdfREVUQUlMU19QQVRIID0gYCR7QWN0aXZpdHlDb25zdGFudHMuRlVORElOR1N9fiR7QWN0aXZpdHlDb25zdGFudHMuRlVORElOR19ERVRBSUxTfWA7XG4vKipcbiAqIExlZ2FjeSBmdW5kaW5nIGN1cnJlbmN5IHBhdGggdXNlZCBmb3IgZGF0YSBtaWdyYXRpb25cbiAqIEBkZXByZWNhdGVkIHNpbmNlIDEuNFxuICovXG5leHBvcnQgY29uc3QgRlVORElOR19DVVJSRU5DWV9QQVRIID0gYCR7RlVORElOR19ERVRBSUxTX1BBVEh9fiR7QWN0aXZpdHlDb25zdGFudHMuQ1VSUkVOQ1l9YDtcbmV4cG9ydCBjb25zdCBNVEVGX0NVUlJFTkNZX1BBVEggPVxuICBgJHtBY3Rpdml0eUNvbnN0YW50cy5GVU5ESU5HU31+JHtBY3Rpdml0eUNvbnN0YW50cy5NVEVGX1BST0pFQ1RJT05TfX4ke0FjdGl2aXR5Q29uc3RhbnRzLkNVUlJFTkNZfWA7XG5leHBvcnQgY29uc3QgUFBDX0NVUlJFTkNZX1BBVEggPSBgJHtBY3Rpdml0eUNvbnN0YW50cy5QUENfQU1PVU5UfX4ke0FjdGl2aXR5Q29uc3RhbnRzLkNVUlJFTkNZfWA7XG5leHBvcnQgY29uc3QgUlBDX0NVUlJFTkNZX1BBVEggPSBgJHtBY3Rpdml0eUNvbnN0YW50cy5SUENfQU1PVU5UfX4ke0FjdGl2aXR5Q29uc3RhbnRzLkNVUlJFTkNZfWA7XG5leHBvcnQgY29uc3QgQ09NUE9ORU5UX0NVUlJFTkNZX1BBVEggPVxuICBgJHtBY3Rpdml0eUNvbnN0YW50cy5DT01QT05FTlRTfX4ke0FjdGl2aXR5Q29uc3RhbnRzLkNPTVBPTkVOVF9GVU5ESU5HfX4ke0FjdGl2aXR5Q29uc3RhbnRzLkNVUlJFTkNZfWA7XG5leHBvcnQgY29uc3QgRElTQlVSU0VNRU5UU19QQVRIID0gYCR7QWN0aXZpdHlDb25zdGFudHMuRlVORElOR1N9fiR7QWN0aXZpdHlDb25zdGFudHMuRElTQlVSU0VNRU5UU31gO1xuZXhwb3J0IGNvbnN0IEFDVElWSVRZX0lOVEVSTkFMX0lEU19JTlRFUk5BTF9JRF9QQVRIID0gJ2FjdGl2aXR5X2ludGVybmFsX2lkc35pbnRlcm5hbF9pZCc7XG5leHBvcnQgY29uc3QgQUNUSVZJVFlfSU5URVJOQUxfSURTX09SR0FOSVpBVElPTl9QQVRIID0gJ2FjdGl2aXR5X2ludGVybmFsX2lkc35vcmdhbml6YXRpb24nO1xuZXhwb3J0IGNvbnN0IExPQ0FUSU9OX1BBVEggPSAnbG9jYXRpb25zfmxvY2F0aW9uJztcbmV4cG9ydCBjb25zdCBOQVRJT05BTF9QTEFOX09CSkVDVElWRV9QQVRIID0gJ25hdGlvbmFsX3BsYW5fb2JqZWN0aXZlfnByb2dyYW0nO1xuZXhwb3J0IGNvbnN0IFBSSU1BUllfUFJPR1JBTV9QQVRIID0gJ3ByaW1hcnlfcHJvZ3JhbXN+cHJvZ3JhbSc7XG5leHBvcnQgY29uc3QgU0VDT05EQVJZX1BST0dSQU1fUEFUSCA9ICdzZWNvbmRhcnlfcHJvZ3JhbXN+cHJvZ3JhbSc7XG5leHBvcnQgY29uc3QgUFJJTUFSWV9TRUNUT1JfUEFUSCA9ICdwcmltYXJ5X3NlY3RvcnN+c2VjdG9yJztcbmV4cG9ydCBjb25zdCBTRUNPTkRBUllfU0VDVE9SX1BBVEggPSAnc2Vjb25kYXJ5X3NlY3RvcnN+c2VjdG9yJztcbmV4cG9ydCBjb25zdCBURVJUSUFSWV9TRUNUT1JfUEFUSCA9ICd0ZXJ0aWFyeV9zZWN0b3JzfnNlY3Rvcic7XG5leHBvcnQgY29uc3QgRE9OT1JfT1JHQU5JWkFUSU9OU19QQVRIID0gJ2Rvbm9yX29yZ2FuaXphdGlvbn5vcmdhbml6YXRpb24nO1xuZXhwb3J0IGNvbnN0IFJFU1BPTlNJQkxFX09SR0FOSVpBVElPTl9CVURHRVRTX1BBVEggPVxuICBgJHtBY3Rpdml0eUNvbnN0YW50cy5SRVNQT05TSUJMRV9PUkdBTklaQVRJT059fiR7QWN0aXZpdHlDb25zdGFudHMuQlVER0VUU31gO1xuXG5leHBvcnQgY29uc3QgUkVMQVRFRF9PUkdTX1BBVEhTID0gVmFsdWVDb25zdGFudHMuT1JHX1JPTEVfTkFNRVMubWFwKG9yZ1JvbGUgPT4gQWN0aXZpdHlDb25zdGFudHMudG9GaWVsZE5hbWUob3JnUm9sZSkpO1xuZXhwb3J0IGNvbnN0IFJFTEFURURfT1JHU19PUkdBTklaQVRJT05fUEFUSFMgPSBWYWx1ZUNvbnN0YW50cy5PUkdfUk9MRV9OQU1FUy5tYXAoXG4gIG9yZ1JvbGUgPT4gYCR7QWN0aXZpdHlDb25zdGFudHMudG9GaWVsZE5hbWUob3JnUm9sZSl9fiR7QWN0aXZpdHlDb25zdGFudHMuT1JHQU5JWkFUSU9OfWApO1xuXG5leHBvcnQgY29uc3QgUklDSF9URVhUX0ZJRUxEUyA9IG5ldyBTZXQoW0FjdGl2aXR5Q29uc3RhbnRzLlNUQVRVU19SRUFTT04sIEFjdGl2aXR5Q29uc3RhbnRzLk9CSkVDVElWRSxcbiAgQWN0aXZpdHlDb25zdGFudHMuREVTQ1JJUFRJT04sIEFjdGl2aXR5Q29uc3RhbnRzLlBST0pFQ1RfQ09NTUVOVFMsIEFjdGl2aXR5Q29uc3RhbnRzLkxFU1NPTlNfTEVBUk5FRCxcbiAgQWN0aXZpdHlDb25zdGFudHMuUFJPSkVDVF9JTVBBQ1QsIEFjdGl2aXR5Q29uc3RhbnRzLkFDVElWSVRZX1NVTU1BUlksIEFjdGl2aXR5Q29uc3RhbnRzLkNPTkRJVElPTkFMSVRJRVMsXG4gIEFjdGl2aXR5Q29uc3RhbnRzLlBST0pFQ1RfTUFOQUdFTUVOVCwgQWN0aXZpdHlDb25zdGFudHMuUkVTVUxUUyxcbl0pO1xuXG5leHBvcnQgY29uc3QgUEFUSFNfV0lUSF9UUkVFX1NUUlVDVFVSRSA9IG5ldyBTZXQoW05BVElPTkFMX1BMQU5fT0JKRUNUSVZFX1BBVEgsIFBSSU1BUllfUFJPR1JBTV9QQVRILFxuICBTRUNPTkRBUllfUFJPR1JBTV9QQVRILCBQUklNQVJZX1NFQ1RPUl9QQVRILCBTRUNPTkRBUllfU0VDVE9SX1BBVEgsIFRFUlRJQVJZX1NFQ1RPUl9QQVRIXSk7XG5cbmV4cG9ydCBjb25zdCBQQVRIU19XSVRIX0hJRVJBUkNISUNBTF9WQUxVRVMgPSBuZXcgU2V0KFtOQVRJT05BTF9QTEFOX09CSkVDVElWRV9QQVRILCBQUklNQVJZX1BST0dSQU1fUEFUSCxcbiAgU0VDT05EQVJZX1BST0dSQU1fUEFUSCwgUFJJTUFSWV9TRUNUT1JfUEFUSCwgU0VDT05EQVJZX1NFQ1RPUl9QQVRILCBURVJUSUFSWV9TRUNUT1JfUEFUSCwgTE9DQVRJT05fUEFUSF0pO1xuXG5leHBvcnQgY29uc3QgQUNUSVZJVFlfQ09OVEFDVF9QQVRIUyA9IFtBY3Rpdml0eUNvbnN0YW50cy5ET05PUl9DT05UQUNULCBBY3Rpdml0eUNvbnN0YW50cy5QUk9KRUNUX0NPT1JESU5BVE9SX0NPTlRBQ1QsXG4gIEFjdGl2aXR5Q29uc3RhbnRzLlNFQ1RPUl9NSU5JU1RSWV9DT05UQUNULCBBY3Rpdml0eUNvbnN0YW50cy5NT0ZFRF9DT05UQUNULFxuICBBY3Rpdml0eUNvbnN0YW50cy5JTVBMRU1FTlRJTkdfRVhFQ1VUSU5HX0FHRU5DWV9DT05UQUNUXTtcblxuZXhwb3J0IGNvbnN0IFRSQU5TQUNUSU9OX1RZUEVTID0gW0FjdGl2aXR5Q29uc3RhbnRzLkNPTU1JVE1FTlRTLCBBY3Rpdml0eUNvbnN0YW50cy5ESVNCVVJTRU1FTlRTLFxuICBBY3Rpdml0eUNvbnN0YW50cy5FWFBFTkRJVFVSRVNdO1xuZXhwb3J0IGNvbnN0IFRSQU5TQUNUSU9OX1RZUEVTX09SREVSRUQgPSBUUkFOU0FDVElPTl9UWVBFUztcbmV4cG9ydCBjb25zdCBGVU5ESU5HX1RSQU5TQUNUSU9OX1RZUEVTID0gWy4uLlRSQU5TQUNUSU9OX1RZUEVTLCBBY3Rpdml0eUNvbnN0YW50cy5FU1RJTUFURURfRElTQlVSU0VNRU5UU107XG5leHBvcnQgY29uc3QgQURKVVNUTUVOVF9UWVBFX1BBVEhTID0gRlVORElOR19UUkFOU0FDVElPTl9UWVBFUy5tYXAoXG4gIHR0ID0+IGAke0FjdGl2aXR5Q29uc3RhbnRzLkZVTkRJTkdTfX4ke3R0fX4ke0FjdGl2aXR5Q29uc3RhbnRzLkFESlVTVE1FTlRfVFlQRX1gKTtcbmV4cG9ydCBjb25zdCBGVU5ESU5HX0NVUlJFTkNZX1BBVEhTID0gVFJBTlNBQ1RJT05fVFlQRVMubWFwKFxuICB0dCA9PiBgJHtBY3Rpdml0eUNvbnN0YW50cy5GVU5ESU5HU31+JHt0dH1+JHtBY3Rpdml0eUNvbnN0YW50cy5DVVJSRU5DWX1gKTtcblxuZXhwb3J0IGNvbnN0IFBBVEhTX0ZPUl9BQ1RJVklUWV9DVVJSRU5DWSA9IFtGVU5ESU5HX0NVUlJFTkNZX1BBVEgsIE1URUZfQ1VSUkVOQ1lfUEFUSCwgQ09NUE9ORU5UX0NVUlJFTkNZX1BBVEgsXG4gIFBQQ19DVVJSRU5DWV9QQVRILCBSUENfQ1VSUkVOQ1lfUEFUSCwgLi4uRlVORElOR19DVVJSRU5DWV9QQVRIU107XG5cbmV4cG9ydCBjb25zdCBQQVRIU19GT1JfQ1VSUkVOQ1kgPSBuZXcgU2V0KFtBY3Rpdml0eUNvbnN0YW50cy5DVVJSRU5DWSwgLi4uUEFUSFNfRk9SX0FDVElWSVRZX0NVUlJFTkNZXSk7XG5cbmV4cG9ydCBjb25zdCBET19OT1RfSFlEUkFURV9GSUVMRFNfTElTVCA9IFtBY3Rpdml0eUNvbnN0YW50cy5BUFBST1ZBTF9TVEFUVVNdO1xuXG4vKiBGaWVsZHMgcGF0aHMgYWx0ZXJuYXRpdmUgdmFsdWVzIGxvY2F0aW9uICovXG5leHBvcnQgY29uc3QgQUxURVJOQVRFX1ZBTFVFX1BBVEggPSB7fTtcbkFMVEVSTkFURV9WQUxVRV9QQVRIW0FjdGl2aXR5Q29uc3RhbnRzLkNSRUFURURfT05dID0gQWN0aXZpdHlDb25zdGFudHMuQ0xJRU5UX0NSRUFURURfT047XG5BTFRFUk5BVEVfVkFMVUVfUEFUSFtBY3Rpdml0eUNvbnN0YW50cy5NT0RJRklFRF9PTl0gPSBBY3Rpdml0eUNvbnN0YW50cy5DTElFTlRfVVBEQVRFRF9PTjtcblxuLyogRk0gcGF0aHMgZm9yIHNvbWUgYWN0aXZpdHkgZmllbGRzIHRoYXQgYXJlIGFsd2F5cyBwcmVzZW50IGluIGZpZWxkcyBkZWYsIGJ1dCBtYXkgYmUgaGlkZGVuIGZyb20gZGlzcGxheSB0aHJvdWdoIEZNICovXG5leHBvcnQgY29uc3QgQUNUSVZJVFlfRklFTERTX0ZNX1BBVEggPSB7fTtcbkFDVElWSVRZX0ZJRUxEU19GTV9QQVRIW0FjdGl2aXR5Q29uc3RhbnRzLk1PRElGSUVEX0JZXSA9IEZlYXR1cmVNYW5hZ2VyQ29uc3RhbnRzLkFDVElWSVRZX0xBU1RfVVBEQVRFRF9CWTtcbkFDVElWSVRZX0ZJRUxEU19GTV9QQVRIW0FjdGl2aXR5Q29uc3RhbnRzLk1PRElGSUVEX09OXSA9IEZlYXR1cmVNYW5hZ2VyQ29uc3RhbnRzLkFDVElWSVRZX0xBU1RfVVBEQVRFRF9PTjtcblxuLyogUG9zc2libGUgT3B0aW9ucyBmaWVsZHMgcGF0aCBwcmVmaXhlcyAqL1xuZXhwb3J0IGNvbnN0IFBSRUZJWF9BQ1RJVklUWSA9IG51bGw7XG5leHBvcnQgY29uc3QgUFJFRklYX0NPTlRBQ1QgPSAnY29udGFjdCc7XG5leHBvcnQgY29uc3QgUFJFRklYX1JFU09VUkNFID0gJ3Jlc291cmNlJztcbmV4cG9ydCBjb25zdCBQUkVGSVhfQ09NTU9OID0gJ2NvbW1vbic7XG5leHBvcnQgY29uc3QgUFJFRklYX0xJU1QgPSBbUFJFRklYX0FDVElWSVRZLCBQUkVGSVhfQ09OVEFDVCwgUFJFRklYX1JFU09VUkNFLCBQUkVGSVhfQ09NTU9OXTtcblxuZXhwb3J0IGNvbnN0IEZJRUxEX1BBVEggPSAnZmllbGQtcGF0aCc7XG5leHBvcnQgY29uc3QgRklFTERfT1BUSU9OUyA9ICdwb3NzaWJsZS1vcHRpb25zJztcbmV4cG9ydCBjb25zdCBGSUVMRF9PUFRJT05fVVNBQkxFID0gJ29wdGlvbi11c2FibGUnO1xuZXhwb3J0IGNvbnN0IExJU1RfTUFYX1NJWkUgPSAnc2l6ZS1saW1pdCc7XG5leHBvcnQgY29uc3QgUkVHRVhfUEFUVEVSTiA9ICdyZWdleC1wYXR0ZXJuJztcbmV4cG9ydCBjb25zdCBGSUVMRF9OQU1FID0gJ2ZpZWxkX25hbWUnO1xuZXhwb3J0IGNvbnN0IEZJRUxEX0xBQkVMID0gJ2ZpZWxkX2xhYmVsJztcbmV4cG9ydCBjb25zdCBGSUVMRF9SRVFVSVJFRCA9ICdyZXF1aXJlZCc7XG5leHBvcnQgY29uc3QgRklFTERfVU5JUVVFX0NPTlNUUkFJTlQgPSAndW5pcXVlX2NvbnN0cmFpbnQnO1xuZXhwb3J0IGNvbnN0IEZJRUxEX1RZUEUgPSAnZmllbGRfdHlwZSc7XG5leHBvcnQgY29uc3QgRklFTERfTEVOR1RIID0gJ2ZpZWxkX2xlbmd0aCc7XG5leHBvcnQgY29uc3QgRklFTERfUEVSQ0VOVEFHRSA9ICdwZXJjZW50YWdlJztcbmV4cG9ydCBjb25zdCBGSUVMRF9QRVJDRU5UQUdFX0NPTlNUUkFJTlQgPSAncGVyY2VudGFnZV9jb25zdHJhaW50JztcbmV4cG9ydCBjb25zdCBGSUVMRF9JVEVNX1RZUEUgPSAnaXRlbS10eXBlJztcbmV4cG9ydCBjb25zdCBGSUVMRF9JTVBPUlRBQkxFID0gJ2ltcG9ydGFibGUnO1xuZXhwb3J0IGNvbnN0IEZJRUxEX0lEX09OTFkgPSAnaWRfb25seSc7XG5leHBvcnQgY29uc3QgRklFTERfTVVMVElQTEVfVkFMVUVTX0FMTE9XRUQgPSAnbXVsdGlwbGVfdmFsdWVzJztcbmV4cG9ydCBjb25zdCBGSUVMRF9UUkVFX0NPTExFQ1RJT04gPSAndHJlZV9jb2xsZWN0aW9uJztcbmV4cG9ydCBjb25zdCBGSUVMRF9DSElMRFJFTiA9ICdjaGlsZHJlbic7XG5leHBvcnQgY29uc3QgRklFTERfREVQRU5ERU5DSUVTID0gJ2RlcGVuZGVuY2llcyc7XG5cbmV4cG9ydCBjb25zdCBGSUVMRF9UWVBFX0xJU1QgPSAnbGlzdCc7XG5leHBvcnQgY29uc3QgRklFTERfVFlQRV9PQkpFQ1QgPSAnb2JqZWN0JztcbmV4cG9ydCBjb25zdCBGSUVMRF9UWVBFX1NUUklORyA9ICdzdHJpbmcnO1xuZXhwb3J0IGNvbnN0IEZJRUxEX1RZUEVfTE9ORyA9ICdsb25nJztcbmV4cG9ydCBjb25zdCBGSUVMRF9UWVBFX0ZMT0FUID0gJ2Zsb2F0JztcbmV4cG9ydCBjb25zdCBGSUVMRF9UWVBFX0JPT0xFQU4gPSAnYm9vbGVhbic7XG5leHBvcnQgY29uc3QgRklFTERfVFlQRV9EQVRFID0gJ2RhdGUnO1xuZXhwb3J0IGNvbnN0IEZJRUxEX1RZUEVfVElNRVNUQU1QID0gJ3RpbWVzdGFtcCc7XG5cbmV4cG9ydCBkZWZhdWx0IE9iamVjdC5mcmVlemUoe1xuICBGVU5ESU5HX0FDVElWRV9MSVNULFxuICBGVU5ESU5HX0RFVEFJTFNfUEFUSCxcbiAgRlVORElOR19DVVJSRU5DWV9QQVRILFxuICBNVEVGX0NVUlJFTkNZX1BBVEgsXG4gIFBQQ19DVVJSRU5DWV9QQVRILFxuICBSUENfQ1VSUkVOQ1lfUEFUSCxcbiAgQ09NUE9ORU5UX0NVUlJFTkNZX1BBVEgsXG4gIERJU0JVUlNFTUVOVFNfUEFUSCxcbiAgQUNUSVZJVFlfSU5URVJOQUxfSURTX0lOVEVSTkFMX0lEX1BBVEgsXG4gIEFDVElWSVRZX0lOVEVSTkFMX0lEU19PUkdBTklaQVRJT05fUEFUSCxcbiAgTE9DQVRJT05fUEFUSCxcbiAgTkFUSU9OQUxfUExBTl9PQkpFQ1RJVkVfUEFUSCxcbiAgUFJJTUFSWV9QUk9HUkFNX1BBVEgsXG4gIFNFQ09OREFSWV9QUk9HUkFNX1BBVEgsXG4gIFBSSU1BUllfU0VDVE9SX1BBVEgsXG4gIFNFQ09OREFSWV9TRUNUT1JfUEFUSCxcbiAgVEVSVElBUllfU0VDVE9SX1BBVEgsXG4gIERPTk9SX09SR0FOSVpBVElPTlNfUEFUSCxcbiAgUkVTUE9OU0lCTEVfT1JHQU5JWkFUSU9OX0JVREdFVFNfUEFUSCxcbiAgUkVMQVRFRF9PUkdTX1BBVEhTLFxuICBSRUxBVEVEX09SR1NfT1JHQU5JWkFUSU9OX1BBVEhTLFxuICBSSUNIX1RFWFRfRklFTERTLFxuICBQQVRIU19XSVRIX1RSRUVfU1RSVUNUVVJFLFxuICBQQVRIU19XSVRIX0hJRVJBUkNISUNBTF9WQUxVRVMsXG4gIEFDVElWSVRZX0NPTlRBQ1RfUEFUSFMsXG4gIFRSQU5TQUNUSU9OX1RZUEVTLFxuICBUUkFOU0FDVElPTl9UWVBFU19PUkRFUkVELFxuICBGVU5ESU5HX1RSQU5TQUNUSU9OX1RZUEVTLFxuICBBREpVU1RNRU5UX1RZUEVfUEFUSFMsXG4gIEZVTkRJTkdfQ1VSUkVOQ1lfUEFUSFMsXG4gIFBBVEhTX0ZPUl9BQ1RJVklUWV9DVVJSRU5DWSxcbiAgUEFUSFNfRk9SX0NVUlJFTkNZLFxuICBET19OT1RfSFlEUkFURV9GSUVMRFNfTElTVCxcbiAgQUxURVJOQVRFX1ZBTFVFX1BBVEgsXG4gIEFDVElWSVRZX0ZJRUxEU19GTV9QQVRILFxuICBQUkVGSVhfQUNUSVZJVFksXG4gIFBSRUZJWF9DT05UQUNULFxuICBQUkVGSVhfUkVTT1VSQ0UsXG4gIFBSRUZJWF9DT01NT04sXG4gIFBSRUZJWF9MSVNULFxuICBGSUVMRF9QQVRILFxuICBGSUVMRF9PUFRJT05TLFxuICBGSUVMRF9PUFRJT05fVVNBQkxFLFxuICBMSVNUX01BWF9TSVpFLFxuICBSRUdFWF9QQVRURVJOLFxuICBGSUVMRF9OQU1FLFxuICBGSUVMRF9MQUJFTCxcbiAgRklFTERfUkVRVUlSRUQsXG4gIEZJRUxEX1VOSVFVRV9DT05TVFJBSU5ULFxuICBGSUVMRF9UWVBFLFxuICBGSUVMRF9MRU5HVEgsXG4gIEZJRUxEX1BFUkNFTlRBR0UsXG4gIEZJRUxEX1BFUkNFTlRBR0VfQ09OU1RSQUlOVCxcbiAgRklFTERfSVRFTV9UWVBFLFxuICBGSUVMRF9JTVBPUlRBQkxFLFxuICBGSUVMRF9JRF9PTkxZLFxuICBGSUVMRF9NVUxUSVBMRV9WQUxVRVNfQUxMT1dFRCxcbiAgRklFTERfVFJFRV9DT0xMRUNUSU9OLFxuICBGSUVMRF9DSElMRFJFTixcbiAgRklFTERfREVQRU5ERU5DSUVTLFxuICBGSUVMRF9UWVBFX0xJU1QsXG4gIEZJRUxEX1RZUEVfT0JKRUNULFxuICBGSUVMRF9UWVBFX1NUUklORyxcbiAgRklFTERfVFlQRV9MT05HLFxuICBGSUVMRF9UWVBFX0ZMT0FULFxuICBGSUVMRF9UWVBFX0JPT0xFQU4sXG4gIEZJRUxEX1RZUEVfREFURSxcbiAgRklFTERfVFlQRV9USU1FU1RBTVAsXG59KTtcbiIsIi8qIGVzbGludC1kaXNhYmxlIGNsYXNzLW1ldGhvZHMtdXNlLXRoaXMgKi9cbmltcG9ydCBDb25zdGFudHMgZnJvbSAnLi4vLi4vdXRpbHMvQ29uc3RhbnRzJztcbmltcG9ydCAqIGFzIEZQQyBmcm9tICcuLi8uLi91dGlscy9GaWVsZFBhdGhDb25zdGFudHMnO1xuXG5sZXQgbG9nZ2VyID0gbnVsbDtcblxuLyoqXG4gKiBUaGlzIGlzIGEgaGVscGVyIGNsYXNzIGZvciBjaGVja2luZyBmaWVsZHMgc3RhdHVzLCBnZXR0aW5nIGZpZWxkIG9wdGlvbnMgdHJhbnNsYXRpb25zIGFuZCB0aGUgbGlrZS5cbiAqXG4gKiBAYXV0aG9yIE5hZGVqZGEgTWFuZHJlc2N1XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZpZWxkc01hbmFnZXIge1xuICAvKipcbiAgICogU2hhbGxvdyBjbG9uZSBvZiBhbm90aGVyIG5ld0ZpZWxkc01hbmFnZXJcbiAgICogQHBhcmFtIGZpZWxkc01hbmFnZXJcbiAgICogQHJldHVybiB7RmllbGRzTWFuYWdlcn1cbiAgICovXG4gIHN0YXRpYyBjbG9uZShmaWVsZHNNYW5hZ2VyOiBGaWVsZHNNYW5hZ2VyLCBMb2dnZXJNYW5hZ2VyKSB7XG4gICAgY29uc3QgbmV3RmllbGRzTWFuYWdlciA9IG5ldyBGaWVsZHNNYW5hZ2VyKFtdLCBbXSwgbnVsbCxcbiAgICAgIExvZ2dlck1hbmFnZXIpO1xuICAgIE9iamVjdC5hc3NpZ24obmV3RmllbGRzTWFuYWdlciwgZmllbGRzTWFuYWdlcik7XG4gICAgcmV0dXJuIG5ld0ZpZWxkc01hbmFnZXI7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihmaWVsZHNEZWYsIHBvc3NpYmxlVmFsdWVzQ29sbGVjdGlvbiwgY3VycmVudExhbmd1YWdlLCBMb2dnZXJNYW5hZ2VyKSB7XG4gICAgLy8gVE9ETyByZW1vdmUgY2FjaGVcbiAgICBsb2dnZXIgPSBuZXcgTG9nZ2VyTWFuYWdlcignRmllbGRzIG1hbmFnZXInKTtcbiAgICBsb2dnZXIuZGVidWcoJ2NvbnN0cnVjdG9yJyk7XG4gICAgdGhpcy5fZmllbGRzRGVmID0gZmllbGRzRGVmO1xuICAgIHRoaXMuX3Bvc3NpYmxlVmFsdWVzTWFwID0ge307XG4gICAgcG9zc2libGVWYWx1ZXNDb2xsZWN0aW9uLmZvckVhY2gocHYgPT4ge1xuICAgICAgdGhpcy5fcG9zc2libGVWYWx1ZXNNYXBbcHYuaWRdID0gcHZbRlBDLkZJRUxEX09QVElPTlNdO1xuICAgIH0pO1xuICAgIHRoaXMuX2ZpZWxkUGF0aHNFbmFibGVkU3RhdHVzTWFwID0ge307XG4gICAgdGhpcy5fbGFuZyA9IGN1cnJlbnRMYW5ndWFnZSB8fCBDb25zdGFudHMuTEFOR1VBR0VfRU5HTElTSDtcbiAgICB0aGlzLl9kZWZhdWx0TGFuZyA9IENvbnN0YW50cy5MQU5HVUFHRV9FTkdMSVNIO1xuICAgIHRoaXMuY2xlYW51cChmaWVsZHNEZWYpO1xuICB9XG5cbiAgY2xlYW51cChmaWVsZHNEZWYpIHtcbiAgICAvLyBUT0RPIGRlY2lkZSBlaXRoZXIgdG8ga2VlcCBjbGVhbnVwIChoZXJlIG9yIGFueXdoZXJlIGVsc2UpIG9yIGNoZWNrIGlmIHdlIG5lZWQgdG8gc3RhbmRhcmRpemUgQVBJXG4gICAgZmllbGRzRGVmLmZvckVhY2goZmQgPT4ge1xuICAgICAgaWYgKGZkLmNoaWxkcmVuKSB7XG4gICAgICAgIHRoaXMuY2xlYW51cChmZC5jaGlsZHJlbik7XG4gICAgICB9XG4gICAgICBpZiAoZmQuZmllbGRfbGFiZWwpIHtcbiAgICAgICAgT2JqZWN0LmtleXMoZmQuZmllbGRfbGFiZWwpLmZvckVhY2gobGFuZyA9PiB7XG4gICAgICAgICAgICBmZC5maWVsZF9sYWJlbFtsYW5nLnRvTG93ZXJDYXNlKCldID0gZmQuZmllbGRfbGFiZWxbbGFuZ107XG4gICAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBzZXQgY3VycmVudExhbmd1YWdlQ29kZShsYW5nKSB7XG4gICAgdGhpcy5fbGFuZyA9IGxhbmc7XG4gIH1cblxuICBzZXQgZGVmYXVsdExhbmd1YWdlQ29kZShsYW5nKSB7XG4gICAgdGhpcy5fZGVmYXVsdExhbmcgPSBsYW5nO1xuICB9XG5cbiAgZ2V0IGZpZWxkc0RlZigpIHtcbiAgICByZXR1cm4gdGhpcy5fZmllbGRzRGVmO1xuICB9XG5cbiAgZ2V0IHBvc3NpYmxlVmFsdWVzTWFwKCkge1xuICAgIHJldHVybiB0aGlzLl9wb3NzaWJsZVZhbHVlc01hcDtcbiAgfVxuXG4gIGdldFBvc3NpYmxlVmFsdWVzT3B0aW9ucyhmaWVsZFBhdGgpIHtcbiAgICByZXR1cm4gT2JqZWN0LnZhbHVlcyh0aGlzLl9wb3NzaWJsZVZhbHVlc01hcFtmaWVsZFBhdGhdKTtcbiAgfVxuXG4gIGlzRmllbGRQYXRoQnlQYXJ0c0VuYWJsZWQoLi4ucGF0aFBhcnRzKSB7XG4gICAgcmV0dXJuIHRoaXMuaXNGaWVsZFBhdGhFbmFibGVkKHBhdGhQYXJ0cy5qb2luKCd+JykpO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrcyBpZiB0aGUgc3BlY2lmaWVkIGZpZWxkIHBhdGggaXMgZW5hYmxlZCBpbiBBTVAgRk1cbiAgICogQHBhcmFtIGZpZWxkUGF0aFxuICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgKi9cbiAgaXNGaWVsZFBhdGhFbmFibGVkKGZpZWxkUGF0aCkge1xuICAgIGlmICh0aGlzLl9maWVsZFBhdGhzRW5hYmxlZFN0YXR1c01hcFtmaWVsZFBhdGhdID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuX2J1aWxkRmllbGRQYXRoU3RhdHVzKGZpZWxkUGF0aCk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9maWVsZFBhdGhzRW5hYmxlZFN0YXR1c01hcFtmaWVsZFBhdGhdO1xuICB9XG5cbiAgX2J1aWxkRmllbGRQYXRoU3RhdHVzKGZpZWxkUGF0aCkge1xuICAgIGNvbnN0IHBhdGhQYXJ0cyA9IGZpZWxkUGF0aC5zcGxpdCgnficpO1xuICAgIGxldCBjdXJyZW50VHJlZSA9IHRoaXMuX2ZpZWxkc0RlZjtcbiAgICBjb25zdCBpc0Rpc2FibGVkID0gcGF0aFBhcnRzLnNvbWUocGFydCA9PiB7XG4gICAgICBjdXJyZW50VHJlZSA9IGN1cnJlbnRUcmVlLmZpbmQoZmllbGQgPT4gZmllbGQuZmllbGRfbmFtZSA9PT0gcGFydCk7XG4gICAgICBpZiAoY3VycmVudFRyZWUgJiYgKChjdXJyZW50VHJlZVtGUEMuRklFTERfVFlQRV0gPT09IEZQQy5GSUVMRF9UWVBFX0xJU1RcbiAgICAgICAgJiYgY3VycmVudFRyZWVbRlBDLkZJRUxEX0lURU1fVFlQRV0gPT09IEZQQy5GSUVMRF9UWVBFX09CSkVDVClcbiAgICAgICAgfHwgY3VycmVudFRyZWVbRlBDLkZJRUxEX1RZUEVdID09PSBGUEMuRklFTERfVFlQRV9PQkpFQ1QpKSB7XG4gICAgICAgIGN1cnJlbnRUcmVlID0gY3VycmVudFRyZWUuY2hpbGRyZW47XG4gICAgICB9XG4gICAgICByZXR1cm4gIWN1cnJlbnRUcmVlO1xuICAgIH0pO1xuICAgIHRoaXMuX2ZpZWxkUGF0aHNFbmFibGVkU3RhdHVzTWFwW2ZpZWxkUGF0aF0gPSAhaXNEaXNhYmxlZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBGaW5kIHRoZSB0cmFuc2xhdGlvbiBmb3IgdGhlIG9yaWdpbmFsIHZhbHVlIGZvciB0aGUgZ2l2ZW4gZmllbGQgcGF0aCwgaWYgZm91bmQsIG90aGVyd2lzZSByZXR1cm5zIG51bGxcbiAgICogQHBhcmFtIGZpZWxkUGF0aFxuICAgKiBAcGFyYW0gb3JpZ1ZhbHVlXG4gICAqIEByZXR1cm4ge3N0cmluZ3xudWxsfVxuICAgKi9cbiAgZ2V0VmFsdWVUcmFuc2xhdGlvbihmaWVsZFBhdGgsIG9yaWdWYWx1ZSkge1xuICAgIC8vIGZhbGxiYWNrIHRvIG9yaWdpbmFsIHVudHJhbnNsYXRlZCB2YWx1ZVxuICAgIGxldCB0cm5WYWx1ZSA9IG9yaWdWYWx1ZTtcbiAgICBjb25zdCBvcHRpb25zID0gdGhpcy5fcG9zc2libGVWYWx1ZXNNYXBbZmllbGRQYXRoXTtcbiAgICBpZiAob3B0aW9ucykge1xuICAgICAgY29uc3Qgb3B0aW9uID0gT2JqZWN0LnZhbHVlcyhvcHRpb25zKS5maW5kKG9wdCA9PiBvcHQudmFsdWUgPT09IG9yaWdWYWx1ZSk7XG4gICAgICBpZiAob3B0aW9uICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgY29uc3QgdHJhbnNsYXRpb25zID0gb3B0aW9uWyd0cmFuc2xhdGVkLXZhbHVlJ107XG4gICAgICAgIGlmICh0cmFuc2xhdGlvbnMpIHtcbiAgICAgICAgICB0cm5WYWx1ZSA9IHRyYW5zbGF0aW9uc1t0aGlzLl9sYW5nXSB8fCB0cmFuc2xhdGlvbnNbdGhpcy5fZGVmYXVsdExhbmddIHx8IHRyblZhbHVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cm5WYWx1ZTtcbiAgfVxuXG4gIGdldEZpZWxkTGFiZWxUcmFuc2xhdGlvbihmaWVsZFBhdGgpIHtcbiAgICBsZXQgdHJuTGFiZWwgPSBudWxsO1xuICAgIGNvbnN0IGZpZWxkc0RlZiA9IHRoaXMuZ2V0RmllbGREZWYoZmllbGRQYXRoKTtcbiAgICBpZiAoZmllbGRzRGVmICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRybkxhYmVsID0gZmllbGRzRGVmLmZpZWxkX2xhYmVsW3RoaXMuX2xhbmddIHx8IGZpZWxkc0RlZi5maWVsZF9sYWJlbFt0aGlzLl9kZWZhdWx0TGFuZ10gfHwgbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIHRybkxhYmVsO1xuICB9XG5cbiAgZ2V0RmllbGREZWYoZmllbGRQYXRoKSB7XG4gICAgbGV0IGZpZWxkc0RlZiA9IHRoaXMuX2ZpZWxkc0RlZjtcbiAgICBpZiAoZmllbGRQYXRoKSB7XG4gICAgICBmaWVsZFBhdGguc3BsaXQoJ34nKS5zb21lKHBhcnQgPT4ge1xuICAgICAgICAgIGlmICghKGZpZWxkc0RlZiBpbnN0YW5jZW9mIEFycmF5KSkge1xuICAgICAgICAgICAgZmllbGRzRGVmID0gZmllbGRzRGVmLmNoaWxkcmVuO1xuICAgICAgICAgIH1cbiAgICAgICAgICBmaWVsZHNEZWYgPSBmaWVsZHNEZWYuZmluZChmZCA9PiBmZC5maWVsZF9uYW1lID09PSBwYXJ0KTtcbiAgICAgICAgICByZXR1cm4gZmllbGRzRGVmID09PSB1bmRlZmluZWQ7XG4gICAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBmaWVsZHNEZWYgPSB7IGNoaWxkcmVuOiBmaWVsZHNEZWYgfTtcbiAgICB9XG4gICAgcmV0dXJuIGZpZWxkc0RlZjtcbiAgfVxuXG4gIGdldEZpZWxkUGF0aHNCeURlcGVuZGVuY2llcyhkZXBlbmRlbmNpZXMpIHtcbiAgICBjb25zdCBmaWVsZFBhdGhzID0gW107XG4gICAgdGhpcy5fZ2V0RmllbGRQYXRoc0J5RGVwZW5kZW5jaWVzKGRlcGVuZGVuY2llcywgdGhpcy5fZmllbGRzRGVmLCAnJywgZmllbGRQYXRocyk7XG4gICAgcmV0dXJuIGZpZWxkUGF0aHM7XG4gIH1cblxuICBfZ2V0RmllbGRQYXRoc0J5RGVwZW5kZW5jaWVzKGRlcGVuZGVuY2llcywgZmllbGRzRGVmLCBjdXJyZW50UGF0aCwgZmllbGRQYXRoczogQXJyYXkpIHtcbiAgICBpZiAoIShmaWVsZHNEZWYgaW5zdGFuY2VvZiBBcnJheSkpIHtcbiAgICAgIGZpZWxkc0RlZiA9IGZpZWxkc0RlZi5jaGlsZHJlbjtcbiAgICB9XG4gICAgZmllbGRzRGVmLmZvckVhY2goZmQgPT4ge1xuICAgICAgY29uc3QgaGFzRGVwZW5kZW5jeSA9IGZkLmRlcGVuZGVuY2llcyAmJiBmZC5kZXBlbmRlbmNpZXMuc29tZShkZXAgPT4gZGVwZW5kZW5jaWVzLmluY2x1ZGVzKGRlcCkpO1xuICAgICAgaWYgKGZkLmNoaWxkcmVuIHx8IGhhc0RlcGVuZGVuY3kpIHtcbiAgICAgICAgY29uc3QgZmllbGRQYXRoID0gYCR7Y3VycmVudFBhdGh9JHtmZC5maWVsZF9uYW1lfWA7XG4gICAgICAgIGlmIChoYXNEZXBlbmRlbmN5KSB7XG4gICAgICAgICAgZmllbGRQYXRocy5wdXNoKGZpZWxkUGF0aCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGZkLmNoaWxkcmVuKSB7XG4gICAgICAgICAgdGhpcy5fZ2V0RmllbGRQYXRoc0J5RGVwZW5kZW5jaWVzKGRlcGVuZGVuY2llcywgZmQuY2hpbGRyZW4sIGAke2ZpZWxkUGF0aH1+YCwgZmllbGRQYXRocyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGdldFZhbHVlKG9iamVjdCwgZmllbGRQYXRoLCBnZXRPcHRpb25UcmFuc2xhdGlvbikge1xuICAgIHJldHVybiBGaWVsZHNNYW5hZ2VyLmdldFZhbHVlKG9iamVjdCwgZmllbGRQYXRoLCBnZXRPcHRpb25UcmFuc2xhdGlvbik7XG4gIH1cblxuICBzdGF0aWMgZ2V0VmFsdWUob2JqZWN0LCBmaWVsZFBhdGgsIGdldE9wdGlvblRyYW5zbGF0aW9uKSB7XG4gICAgY29uc3QgcGFydHMgPSBmaWVsZFBhdGggPyBmaWVsZFBhdGguc3BsaXQoJ34nKSA6IFtdO1xuICAgIGxldCB2YWx1ZSA9IG9iamVjdDtcbiAgICBwYXJ0cy5zb21lKHBhcnQgPT4ge1xuICAgICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgICAgY29uc3QgbmV3TGlzdCA9IFtdO1xuICAgICAgICB2YWx1ZS5mb3JFYWNoKGN1cnJlbnQgPT4ge1xuICAgICAgICAgIGNvbnN0IG5ld0VsZW1lbnQgPSBjdXJyZW50W3BhcnRdO1xuICAgICAgICAgIGlmIChuZXdFbGVtZW50ICE9PSB1bmRlZmluZWQgJiYgbmV3RWxlbWVudCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgbmV3TGlzdC5wdXNoKG5ld0VsZW1lbnQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHZhbHVlID0gbmV3TGlzdDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhbHVlID0gdmFsdWVbcGFydF07XG4gICAgICB9XG4gICAgICByZXR1cm4gdmFsdWUgPT09IHVuZGVmaW5lZCB8fCB2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZS5sZW5ndGggPT09IDA7XG4gICAgfSk7XG4gICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUgIT09IG51bGwgJiYgdmFsdWUubGVuZ3RoICE9PSAwKSB7XG4gICAgICBsZXQgdmFsdWVzID0gW10uY29uY2F0KHZhbHVlKTtcbiAgICAgIHZhbHVlcyA9IHZhbHVlcy5tYXAodmFsID0+IHtcbiAgICAgICAgaWYgKHZhbC52YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgcmV0dXJuIHZhbDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZ2V0T3B0aW9uVHJhbnNsYXRpb24odmFsLCB0aGlzLl9sYW5nLCB0aGlzLl9kZWZhdWx0TGFuZyk7XG4gICAgICB9KTtcbiAgICAgIHZhbHVlID0gdmFsdWUgaW5zdGFuY2VvZiBBcnJheSA/IHZhbHVlcyA6IHZhbHVlc1swXTtcbiAgICB9XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG59XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBjbGFzcy1tZXRob2RzLXVzZS10aGlzICovXG5pbXBvcnQgQWN0aXZpdHlDb25zdGFudHMgZnJvbSAnLi4vdXRpbC9BY3Rpdml0eUNvbnN0YW50cyc7XG5pbXBvcnQgRXJyb3JDb25zdGFudHMgZnJvbSAnLi4vLi4vdXRpbHMvY29uc3RhbnRzL0Vycm9yQ29uc3RhbnRzJztcbmltcG9ydCBDb25zdGFudHMgZnJvbSAnLi4vLi4vdXRpbHMvQ29uc3RhbnRzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ3VycmVuY3lSYXRlc01hbmFnZXIge1xuICBjb25zdHJ1Y3RvcihjdXJyZW5jeVJhdGVzLCBiYXNlQ3VycmVuY3ksIHRyYW5zbGF0ZSwgZGF0ZVV0aWxzLCBlcnJvck5vdGlmaWNhdGlvbkhlbHBlcikge1xuICAgIHRoaXMuX2N1cnJlbmN5UmF0ZXMgPSBjdXJyZW5jeVJhdGVzO1xuICAgIHRoaXMuX2Jhc2VDdXJyZW5jeSA9IGJhc2VDdXJyZW5jeTtcbiAgICB0aGlzLl9jdXJybmNpZXNXaXRoRXhjaGFuZ2VSYXRlcyA9IHRoaXMuX2dldEN1cnJlbmNpZXNXaXRoRXhjaGFuZ2VSYXRlcygpO1xuICAgIHRoaXMuX3RyYW5zbGF0ZSA9IHRyYW5zbGF0ZTtcbiAgICB0aGlzLl9kYXRlVXRpbHMgPSBkYXRlVXRpbHM7XG4gICAgdGhpcy5fZXJyb3JOb3RpZmljYXRpb25IZWxwZXIgPSBlcnJvck5vdGlmaWNhdGlvbkhlbHBlcjtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgb2YgY3VycmVuY2llcyB0aGF0IGhhcyBhdCBsZWFzdCBvbmUgZXhjaGFuZ2UgcmF0ZVxuICAgKiBAcmV0dXJuIHtTZXQ8YW55PiB8ICp9XG4gICAqL1xuICBnZXQgY3VycmVuY2llc1dpdGhFeGNoYW5nZVJhdGVzKCkge1xuICAgIHJldHVybiB0aGlzLl9jdXJybmNpZXNXaXRoRXhjaGFuZ2VSYXRlcztcbiAgfVxuXG4gIC8qKlxuICAgKiBDdXJyZW5jeSBjb252ZXJzaW9uIHV0aWxpdHkuIElmIHdlIGhhdmUgdGhlIGRpcmVjdCByYXRlIGl0IHdpbGwgY29udmVydCBmcm9tIGN1cnJlbmN5RnJvbSB0byBjdXJyZW5jeVRvIGluIHRoZVxuICAgKiBnaXZlbiBkYXRlLiBJZiB3ZSBkb24ndCBoYXZlIHRoZSBzYWlkIGN1cnJlbmN5IGl0IHdpbGwgdHJ5IHRvIHNlYXJjaCB0aGUgaW52ZXJzZSByYXRlIGFuZCB1c2UgMS94LiBJZiB0aGUgaW52ZXJzZVxuICAgKiByYXRlIGlzIGFsc28gbm90IEF2YWlsYWJsZSBhbiBlcnJvciB3aWxsIGJlIHRocm93blxuICAgKiBAcGFyYW0gY3VycmVuY3lGcm9tIGN1cnJlbmN5IGNvZGUgZnJvbSB0aGUgY3VycmVuY3kgd2UgYXJlIGNvbnZlcnRpbmcgZnJvbVxuICAgKiBAcGFyYW0gY3VycmVuY3lUbyBjdXJyZW5jeSBjb2RlIGZyb20gdGhlIGN1cnJlbmN5IHdlIGFyZSBjb252ZXJ0aW5nIHRvXG4gICAqIEBwYXJhbSBkYXRlVG9GaW5kIGRhdGUgZm9yIHdoaWNoIHdlIGFyZSBkb2luZyB0aGUgY29udmVyc2lvbi4gSXQgaXMgZXhwZWN0ZWQgaW4geXl5eS1tbS1kZFxuICAgKiBAcmV0dXJucyB7KnxQcm9taXNlLjxUUmVzdWx0Pn1cbiAgICovXG4gIGNvbnZlcnRDdXJyZW5jeShjdXJyZW5jeUZyb20sIGN1cnJlbmN5VG8sIGRhdGVUb0ZpbmQsIGZpeGVkRXhjaGFuZ2VSYXRlKSB7XG4gICAgaWYgKGN1cnJlbmN5RnJvbSA9PT0gY3VycmVuY3lUbykge1xuICAgICAgcmV0dXJuIENvbnN0YW50cy5SQVRFX1NBTUVfQ1VSUkVOQ1k7XG4gICAgfVxuICAgIGlmIChmaXhlZEV4Y2hhbmdlUmF0ZSAmJiBmaXhlZEV4Y2hhbmdlUmF0ZSA+IDApIHtcbiAgICAgIHJldHVybiAodGhpcy5jb252ZXJ0Q3VycmVuY3kodGhpcy5fYmFzZUN1cnJlbmN5LCBjdXJyZW5jeVRvLCBkYXRlVG9GaW5kLCBudWxsKSAvXG4gICAgICAgIGZpeGVkRXhjaGFuZ2VSYXRlKTtcbiAgICB9XG4gICAgY29uc3QgdGltZURhdGVUb0ZpbmQgPSAobmV3IERhdGUoYCR7ZGF0ZVRvRmluZH0gJHtDb25zdGFudHMuQ1VSUkVOQ1lfSE9VUn1gKSkuZ2V0VGltZSgpO1xuICAgIGlmICh0aGlzLl9jdXJyZW5jeVJhdGVzKSB7XG4gICAgICBjb25zdCBjdXJyZW5jaWVzVG9TZWFyY2hEaXJlY3QgPSB0aGlzLl9jdXJyZW5jeVJhdGVzLmZpbmQoKGl0ZW0pID0+XG4gICAgICAgIGl0ZW1bQ29uc3RhbnRzLkNVUlJFTkNZX1BBSVJdLmZyb20gPT09IGN1cnJlbmN5RnJvbSAmJiBpdGVtW0NvbnN0YW50cy5DVVJSRU5DWV9QQUlSXS50byA9PT0gY3VycmVuY3lUb1xuICAgICAgKTtcbiAgICAgIGlmIChjdXJyZW5jaWVzVG9TZWFyY2hEaXJlY3QpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0RXhjaGFuZ2VSYXRlKGN1cnJlbmNpZXNUb1NlYXJjaERpcmVjdCwgdGltZURhdGVUb0ZpbmQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gZGlyZWN0IG5vdCBmb3VuZFxuICAgICAgICBjb25zdCBjdXJyZW5jaWVzVG9TZWFyY2hJbnZlcnNlID1cbiAgICAgICAgICB0aGlzLl9jdXJyZW5jeVJhdGVzLmZpbmQoKGl0ZW0pID0+XG4gICAgICAgICAgICBpdGVtW0NvbnN0YW50cy5DVVJSRU5DWV9QQUlSXS5mcm9tID09PSBjdXJyZW5jeVRvICYmIGl0ZW1bQ29uc3RhbnRzLkNVUlJFTkNZX1BBSVJdLnRvID09PVxuICAgICAgICAgICAgY3VycmVuY3lGcm9tKTtcbiAgICAgICAgaWYgKGN1cnJlbmNpZXNUb1NlYXJjaEludmVyc2UpIHtcbiAgICAgICAgICByZXR1cm4gMSAvIHRoaXMuZ2V0RXhjaGFuZ2VSYXRlKGN1cnJlbmNpZXNUb1NlYXJjaEludmVyc2UsIHRpbWVEYXRlVG9GaW5kKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5jb252ZXJ0VmlhQmFzZUN1cnJlbmN5KGN1cnJlbmN5RnJvbSwgY3VycmVuY3lUbywgdGltZURhdGVUb0ZpbmQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IHRoaXMuX2dldEN1cnJlbmN5RXJyb3IoJ0N1cnJlbmN5UmF0ZXNOb3RJbml0aWFsaXplZCcpO1xuICAgIH1cbiAgfVxuXG4gIGNvbnZlcnRGdW5kaW5nRGV0YWlsc1RvQ3VycmVuY3koZnVuZGluZ0RldGFpbHMsIGN1cnJlbmN5VG8pIHtcbiAgICBsZXQgdG90YWwgPSAwO1xuICAgIGZ1bmRpbmdEZXRhaWxzLmZvckVhY2goZmQgPT4ge1xuICAgICAgdG90YWwgKz0gdGhpcy5jb252ZXJ0VHJhbnNhY3Rpb25BbW91bnRUb0N1cnJlbmN5KGZkLCBjdXJyZW5jeVRvKTtcbiAgICB9KTtcblxuICAgIHJldHVybiB0b3RhbDtcbiAgfVxuXG4gIGNvbnZlcnRUcmFuc2FjdGlvbkFtb3VudFRvQmFzZUN1cnJlbmN5KGZ1bmRpbmdEZXRhaWwpIHtcbiAgICByZXR1cm4gdGhpcy5jb252ZXJ0VHJhbnNhY3Rpb25BbW91bnRUb0N1cnJlbmN5KGZ1bmRpbmdEZXRhaWwsIHRoaXMuX2Jhc2VDdXJyZW5jeSk7XG4gIH1cblxuICBjb252ZXJ0QW1vdW50VG9DdXJyZW5jeShhbW91bnQsIGN1cnJlbmN5RnJvbSwgZGF0ZSwgZml4ZWRFeGNoYW5nZVJhdGUsIGN1cnJlbmN5VG8pIHtcbiAgICBjb25zdCBjdXJyZW5jeVJhdGUgPSB0aGlzLmNvbnZlcnRDdXJyZW5jeShjdXJyZW5jeUZyb20sIGN1cnJlbmN5VG8sXG4gICAgICB0aGlzLl9kYXRlVXRpbHMuZm9ybWF0RGF0ZUZvckFQSShkYXRlKSwgZml4ZWRFeGNoYW5nZVJhdGUpO1xuICAgIHJldHVybiBhbW91bnQgKiBjdXJyZW5jeVJhdGU7XG4gIH1cblxuICBjb252ZXJ0VHJhbnNhY3Rpb25BbW91bnRUb0N1cnJlbmN5KGZ1bmRpbmdEZXRhaWwsIGN1cnJlbmN5VG8pIHtcbiAgICBjb25zdCBmaXhlZEV4Y2hhbmdlUmF0ZSA9IGZ1bmRpbmdEZXRhaWxbQWN0aXZpdHlDb25zdGFudHMuRklYRURfRVhDSEFOR0VfUkFURV07XG4gICAgY29uc3QgY3VycmVuY3lGcm9tID0gZnVuZGluZ0RldGFpbFtBY3Rpdml0eUNvbnN0YW50cy5DVVJSRU5DWV0udmFsdWU7XG4gICAgY29uc3QgdHJhbnNhY3Rpb25EYXRlID0gZnVuZGluZ0RldGFpbFtBY3Rpdml0eUNvbnN0YW50cy5UUkFOU0FDVElPTl9EQVRFXTtcbiAgICBjb25zdCB0cmFuc2FjdGlvbkFtb3VudCA9IGZ1bmRpbmdEZXRhaWxbQWN0aXZpdHlDb25zdGFudHMuVFJBTlNBQ1RJT05fQU1PVU5UXTtcbiAgICByZXR1cm4gdGhpcy5jb252ZXJ0QW1vdW50VG9DdXJyZW5jeSh0cmFuc2FjdGlvbkFtb3VudCwgY3VycmVuY3lGcm9tLCB0cmFuc2FjdGlvbkRhdGUsIGZpeGVkRXhjaGFuZ2VSYXRlLFxuICAgICAgY3VycmVuY3lUbyk7XG4gIH1cblxuICBnZXRFeGNoYW5nZVJhdGUoY3VycmVuY2llc1RvU2VhcmNoLCB0aW1lRGF0ZVRvRmluZCkge1xuICAgIGxldCBsb3dlckVuZCA9IDA7XG4gICAgbGV0IGhpZ2hlckVuZCA9IGN1cnJlbmNpZXNUb1NlYXJjaC5yYXRlcy5sZW5ndGggLSAxO1xuICAgIHdoaWxlIChsb3dlckVuZCA8IGhpZ2hlckVuZCkge1xuICAgICAgY29uc3QgbWlkZGxlID0gTWF0aC5mbG9vcigobG93ZXJFbmQgKyBoaWdoZXJFbmQpIC8gMik7XG4gICAgICBjb25zdCBkaWZmZXJlbmNlID0gTWF0aC5hYnMoKG5ldyBEYXRlKFxuICAgICAgICBgJHtjdXJyZW5jaWVzVG9TZWFyY2gucmF0ZXNbbWlkZGxlXS5kYXRlfSAgJHtDb25zdGFudHMuQ1VSUkVOQ1lfSE9VUn1gKSlcbiAgICAgICAgLSB0aW1lRGF0ZVRvRmluZCk7XG4gICAgICBjb25zdCBkaWZmZXJlbmNlMSA9IE1hdGguYWJzKChuZXcgRGF0ZShcbiAgICAgICAgYCR7Y3VycmVuY2llc1RvU2VhcmNoLnJhdGVzW21pZGRsZSArIDFdLmRhdGV9ICAke0NvbnN0YW50cy5DVVJSRU5DWV9IT1VSfWApKVxuICAgICAgICAtIHRpbWVEYXRlVG9GaW5kKTtcbiAgICAgIGlmIChkaWZmZXJlbmNlMSA8PSBkaWZmZXJlbmNlKSB7XG4gICAgICAgIGxvd2VyRW5kID0gbWlkZGxlICsgMTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGhpZ2hlckVuZCA9IG1pZGRsZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGN1cnJlbmNpZXNUb1NlYXJjaC5yYXRlc1toaWdoZXJFbmRdLnJhdGU7XG4gIH1cblxuICBfZ2V0Q3VycmVuY3lFcnJvcihlcnJvck1lc2FnZSkge1xuICAgIGNvbnN0IG5vdGlmRXJyb3JDdXJyZW5jeSA9IHRoaXMuX2Vycm9yTm90aWZpY2F0aW9uSGVscGVyLmNyZWF0ZU5vdGlmaWNhdGlvbih7XG4gICAgICBtZXNzYWdlOiB0aGlzLl90cmFuc2xhdGUoZXJyb3JNZXNhZ2UpLFxuICAgICAgb3JpZ2luOiBFcnJvckNvbnN0YW50cy5OT1RJRklDQVRJT05fT1JJR0lOX0NVUlJFTkNZX01BTkFHRVJcbiAgICB9KTtcbiAgICByZXR1cm4gbm90aWZFcnJvckN1cnJlbmN5O1xuICB9XG5cbiAgY29udmVydFZpYUJhc2VDdXJyZW5jeShjdXJyZW5jeUZyb20sIGN1cnJlbmN5VG8sIHRpbWVEYXRlVG9GaW5kKSB7XG4gICAgY29uc3QgcmF0ZUZyb21Ub0Jhc2UgPSB0aGlzLl9jdXJyZW5jeVJhdGVzLmZpbmQoKGl0ZW0pID0+XG4gICAgICBpdGVtW0NvbnN0YW50cy5DVVJSRU5DWV9QQUlSXS5mcm9tID09PSBjdXJyZW5jeUZyb20gJiYgaXRlbVtDb25zdGFudHMuQ1VSUkVOQ1lfUEFJUl0udG8gPT09XG4gICAgICB0aGlzLl9iYXNlQ3VycmVuY3lcbiAgICApO1xuICAgIGNvbnN0IHJhdGVCYXNlVG9UbyA9IHRoaXMuX2N1cnJlbmN5UmF0ZXMuZmluZCgoaXRlbSkgPT5cbiAgICAgIGl0ZW1bQ29uc3RhbnRzLkNVUlJFTkNZX1BBSVJdLmZyb20gPT09IHRoaXMuX2Jhc2VDdXJyZW5jeSAmJiBpdGVtW0NvbnN0YW50cy5DVVJSRU5DWV9QQUlSXS50byA9PT1cbiAgICAgIGN1cnJlbmN5VG9cbiAgICApO1xuICAgIGlmIChyYXRlRnJvbVRvQmFzZSAmJiByYXRlQmFzZVRvVG8pIHtcbiAgICAgIC8vIGlmIHdlIGhhdmUgYm90aCBjdXJyZW5jaWVzIHdlIGp1c3QgcmV0dXJuIHRoZSBwcm9kdWN0IG9mIGVjaCByYXRlXG4gICAgICByZXR1cm4gdGhpcy5nZXRFeGNoYW5nZVJhdGUocmF0ZUZyb21Ub0Jhc2UsIHRpbWVEYXRlVG9GaW5kKSAqIHRoaXMuZ2V0RXhjaGFuZ2VSYXRlKHJhdGVCYXNlVG9UbywgdGltZURhdGVUb0ZpbmQpO1xuICAgIH0gZWxzZSBpZiAocmF0ZUZyb21Ub0Jhc2UpIHtcbiAgICAgIC8vIGlmIGVpdGhlciBvZiB0aGVtIGlzIG5vdCBmb3VuZCB3ZSB0cnkgdG8gZmluZCB0aGUgaW52ZXJzZVxuICAgICAgLy8gd2UgZ2V0IHRoZSBpbnZlcnNlIG9mIHJhdGVCYXNlVG9Ub1xuICAgICAgY29uc3QgcmF0ZVRvVG9CYXNlID0gdGhpcy5fY3VycmVuY3lSYXRlcy5maW5kKChpdGVtKSA9PlxuICAgICAgICBpdGVtW0NvbnN0YW50cy5DVVJSRU5DWV9QQUlSXS5mcm9tID09PSBjdXJyZW5jeVRvICYmIGl0ZW1bQ29uc3RhbnRzLkNVUlJFTkNZX1BBSVJdLnRvID09PVxuICAgICAgICB0aGlzLl9iYXNlQ3VycmVuY3lcbiAgICAgICk7XG4gICAgICBpZiAocmF0ZVRvVG9CYXNlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldEV4Y2hhbmdlUmF0ZShyYXRlRnJvbVRvQmFzZSwgdGltZURhdGVUb0ZpbmQpXG4gICAgICAgICAgKiAoMSAvIHRoaXMuZ2V0RXhjaGFuZ2VSYXRlKHJhdGVUb1RvQmFzZSwgdGltZURhdGVUb0ZpbmQpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBFcnJvckNvbnN0YW50cy5SQVRFX0NVUlJFTkNZX05PVF9GT1VORDtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHJhdGVCYXNlVG9Ubykge1xuICAgICAgY29uc3QgcmF0ZUJhc2VUb0Zyb20gPSB0aGlzLl9jdXJyZW5jeVJhdGVzLmZpbmQoKGl0ZW0pID0+XG4gICAgICAgIGl0ZW1bQ29uc3RhbnRzLkNVUlJFTkNZX1BBSVJdLmZyb20gPT09IHRoaXMuX2Jhc2VDdXJyZW5jeSAmJiBpdGVtW0NvbnN0YW50cy5DVVJSRU5DWV9QQUlSXS50byA9PT1cbiAgICAgICAgY3VycmVuY3lGcm9tXG4gICAgICApO1xuICAgICAgLy8gd2UgdHJ5IHRvIGdldCB0aGUgaW52ZXJzZSBvZiByYXRlRnJvbVRvQmFzZVxuICAgICAgaWYgKHJhdGVCYXNlVG9Gcm9tKSB7XG4gICAgICAgIHJldHVybiAoMSAvIHRoaXMuZ2V0RXhjaGFuZ2VSYXRlKHJhdGVCYXNlVG9Gcm9tLCB0aW1lRGF0ZVRvRmluZCkpXG4gICAgICAgICAgKiB0aGlzLmdldEV4Y2hhbmdlUmF0ZShyYXRlQmFzZVRvVG8sIHRpbWVEYXRlVG9GaW5kKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBFcnJvckNvbnN0YW50cy5SQVRFX0NVUlJFTkNZX05PVF9GT1VORDtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIEVycm9yQ29uc3RhbnRzLlJBVEVfQ1VSUkVOQ1lfTk9UX0ZPVU5EO1xuICAgIH1cbiAgfVxuXG4gIF9nZXRDdXJyZW5jaWVzV2l0aEV4Y2hhbmdlUmF0ZXMoKSB7XG4gICAgY29uc3QgY3MgPSBuZXcgU2V0KCk7XG4gICAgaWYgKHRoaXMuX2N1cnJlbmN5UmF0ZXMpIHtcbiAgICAgIHRoaXMuX2N1cnJlbmN5UmF0ZXMuZm9yRWFjaChleGNoYW5nZVJhdGVzID0+IHtcbiAgICAgICAgY3MuYWRkKGV4Y2hhbmdlUmF0ZXNbQ29uc3RhbnRzLkNVUlJFTkNZX1BBSVJdLmZyb20pO1xuICAgICAgICBjcy5hZGQoZXhjaGFuZ2VSYXRlc1tDb25zdGFudHMuQ1VSUkVOQ1lfUEFJUl0udG8pO1xuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBjcztcbiAgfVxufVxuIiwiaW1wb3J0ICogYXMgRlBDIGZyb20gJy4uLy4uL3V0aWxzL0ZpZWxkUGF0aENvbnN0YW50cyc7XG5pbXBvcnQgRmllbGRzTWFuYWdlciBmcm9tICcuL0ZpZWxkc01hbmFnZXInO1xuaW1wb3J0IENvbnN0YW50cyBmcm9tICcuLi8uLi91dGlscy9Db25zdGFudHMnO1xuaW1wb3J0IEFjdGl2aXR5Q29uc3RhbnRzIGZyb20gJy4uL3V0aWwvQWN0aXZpdHlDb25zdGFudHMnO1xuaW1wb3J0IEN1cnJlbmN5UmF0ZXNNYW5hZ2VyIGZyb20gJy4uL3V0aWwvQ3VycmVuY3lSYXRlc01hbmFnZXInO1xuXG5cbi8qKlxuICogUG9zc2libGUgVmFsdWVzIG1hbmFnZXIgdGhhdCBhbGxvd3MgdG8gZmlsbCBpbiBhZGRpdGlvbmFsIGluZm9ybWF0aW9uIGFuZCB0cmFuc2Zvcm1hdGlvbnNcbiAqIEBhdXRob3IgTmFkZWpkYSBNYW5kcmVzY3VcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9zc2libGVWYWx1ZXNNYW5hZ2VyIHtcbiAgc3RhdGljIF9sYW5nU3RhdGUgPSB7XG4gICAgbGFuZzogQ29uc3RhbnRzLkxBTkdVQUdFX0VOR0xJU0gsXG4gICAgZGVmYXVsdExhbmc6IENvbnN0YW50cy5MQU5HVUFHRV9FTkdMSVNIXG4gIH07XG5cbiAgc3RhdGljIF9sb2dnZXI7XG5cbiAgc3RhdGljIHNldExhbmdTdGF0ZShsYW5nU3RhdGUpIHtcbiAgICBQb3NzaWJsZVZhbHVlc01hbmFnZXIuX2xhbmdTdGF0ZSA9IGxhbmdTdGF0ZTtcbiAgfVxuXG4gIHN0YXRpYyBzZXRMb2dnZXIoTG9nZ2VyKSB7XG4gICAgUG9zc2libGVWYWx1ZXNNYW5hZ2VyLl9sb2dnZXIgPSBuZXcgTG9nZ2VyKCdQb3NzaWJsZSB2YWx1ZXMgbWFuYWdlcicpO1xuICB9XG4gIHN0YXRpYyBidWlsZEZvcm1hdHRlZEhpZXJhcmNoaWNhbFZhbHVlcyhvcHRpb25zKSB7XG4gICAgLy8gVE9ETyBvcHRpbWl6ZVxuICAgIGNvbnN0IGhPcHRpb25zID0ge307XG4gICAgT2JqZWN0LnZhbHVlcyhvcHRpb25zKS5mb3JFYWNoKG9wdGlvbiA9PiB7XG4gICAgICBoT3B0aW9uc1tvcHRpb24uaWRdID0gUG9zc2libGVWYWx1ZXNNYW5hZ2VyLmJ1aWxkSGllcmFyY2hpY2FsRGF0YShvcHRpb25zLCBvcHRpb24uaWQpO1xuICAgIH0pO1xuICAgIHJldHVybiBoT3B0aW9ucztcbiAgfVxuXG4gIHN0YXRpYyBidWlsZEhpZXJhcmNoaWNhbERhdGEob3B0aW9ucywgc2VsZWN0ZWRJZCkge1xuICAgIGNvbnN0IG9wdGlvbiA9IE9iamVjdC5hc3NpZ24oe30sIG9wdGlvbnNbc2VsZWN0ZWRJZF0pO1xuICAgIGNvbnN0IHZhbHVlUGFydHMgPSBQb3NzaWJsZVZhbHVlc01hbmFnZXIuZ2V0SGllcmFyY2hpY2FsVmFsdWUob3B0aW9ucywgc2VsZWN0ZWRJZCk7XG4gICAgb3B0aW9uW0FjdGl2aXR5Q29uc3RhbnRzLkhJRVJBUkNISUNBTF9WQUxVRV0gPSBQb3NzaWJsZVZhbHVlc01hbmFnZXIuZm9ybWF0VmFsdWVQYXJ0cyh2YWx1ZVBhcnRzKTtcbiAgICBvcHRpb25bQWN0aXZpdHlDb25zdGFudHMuSElFUkFSQ0hJQ0FMX1ZBTFVFX0RFUFRIXSA9ICh2YWx1ZVBhcnRzICYmIHZhbHVlUGFydHMgaW5zdGFuY2VvZiBBcnJheSkgP1xuICAgICAgdmFsdWVQYXJ0cy5sZW5ndGggOiAwO1xuICAgIHJldHVybiBvcHRpb247XG4gIH1cblxuICBzdGF0aWMgZ2V0SGllcmFyY2hpY2FsVmFsdWUob3B0aW9ucywgc2VsZWN0ZWRJZCkge1xuICAgIGNvbnN0IG5hbWVQYXJ0cyA9IFtdO1xuICAgIGxldCBjdXJyZW50ID0gb3B0aW9uc1tzZWxlY3RlZElkXTtcbiAgICB3aGlsZSAoY3VycmVudCkge1xuICAgICAgbmFtZVBhcnRzLnB1c2goUG9zc2libGVWYWx1ZXNNYW5hZ2VyLmdldE9wdGlvblRyYW5zbGF0aW9uKGN1cnJlbnQpKTtcbiAgICAgIGN1cnJlbnQgPSBvcHRpb25zW2N1cnJlbnQucGFyZW50SWRdO1xuICAgIH1cbiAgICByZXR1cm4gbmFtZVBhcnRzO1xuICB9XG5cbiAgc3RhdGljIGZvcm1hdFZhbHVlUGFydHModmFsdWVQYXJ0cykge1xuICAgIHJldHVybiAodmFsdWVQYXJ0cyAmJiB2YWx1ZVBhcnRzIGluc3RhbmNlb2YgQXJyYXkpID8gYFske3ZhbHVlUGFydHMucmV2ZXJzZSgpLmpvaW4oJ11bJyl9XWAgOiB2YWx1ZVBhcnRzO1xuICB9XG5cbiAgLyoqXG4gICAqIEZpbGxzIGhpZXJhcmNoaWNhbCBkZXB0aCBvZiBlYWNoIG9wdGlvblxuICAgKiBAcGFyYW0gb3B0aW9uc1xuICAgKi9cbiAgc3RhdGljIGZpbGxIaWVyYXJjaGljYWxEZXB0aChvcHRpb25zKSB7XG4gICAgT2JqZWN0LnZhbHVlcyhvcHRpb25zKS5mb3JFYWNoKG9wdGlvbiA9PiB7XG4gICAgICBQb3NzaWJsZVZhbHVlc01hbmFnZXIuX2ZpbGxIaWVyYXJjaGljYWxEZXB0aChvcHRpb25zLCBvcHRpb24pO1xuICAgIH0pO1xuICAgIHJldHVybiBvcHRpb25zO1xuICB9XG5cbiAgc3RhdGljIF9maWxsSGllcmFyY2hpY2FsRGVwdGgob3B0aW9ucywgb3B0aW9uKSB7XG4gICAgaWYgKCFvcHRpb24pIHtcbiAgICAgIFBvc3NpYmxlVmFsdWVzTWFuYWdlci5fbG9nZ2VyLmVycm9yKGBvcHRpb24gaXMgdW5zcGVjaWZpZWQ6ICR7b3B0aW9ufWApO1xuICAgICAgcmV0dXJuIDA7XG4gICAgfVxuICAgIGxldCBkZXB0aCA9IG9wdGlvbltBY3Rpdml0eUNvbnN0YW50cy5ISUVSQVJDSElDQUxfVkFMVUVfREVQVEhdO1xuICAgIGlmIChkZXB0aCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAvLyBTbyBmYXIgaXQgaXMgYmFzZWQgb24gdGhlIGN1cnJlbnQgbG9jYXRpb25zIGV4dHJhIGluZm8gYXBwcm9hY2hcbiAgICAgIGlmIChvcHRpb24ucGFyZW50SWQpIHtcbiAgICAgICAgY29uc3QgcGFyZW50ID0gb3B0aW9uc1tvcHRpb24ucGFyZW50SWRdO1xuICAgICAgICBkZXB0aCA9IDEgKyBQb3NzaWJsZVZhbHVlc01hbmFnZXIuX2ZpbGxIaWVyYXJjaGljYWxEZXB0aChvcHRpb25zLCBwYXJlbnQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZGVwdGggPSAwO1xuICAgICAgfVxuICAgICAgb3B0aW9uW0FjdGl2aXR5Q29uc3RhbnRzLkhJRVJBUkNISUNBTF9WQUxVRV9ERVBUSF0gPSBkZXB0aDtcbiAgICB9XG4gICAgcmV0dXJuIGRlcHRoO1xuICB9XG5cbiAgc3RhdGljIGZpbmRPcHRpb24ob3B0aW9ucywgaWQpIHtcbiAgICByZXR1cm4gT2JqZWN0LnZhbHVlcyhvcHRpb25zKS5maW5kKG8gPT4gby5pZCA9PT0gaWQpO1xuICB9XG5cbiAgc3RhdGljIGZpbmRPcHRpb25CeVZhbHVlKG9wdGlvbnMsIHZhbHVlKSB7XG4gICAgcmV0dXJuIE9iamVjdC52YWx1ZXMob3B0aW9ucykuZmluZChvID0+IG8udmFsdWUgPT09IHZhbHVlKTtcbiAgfVxuXG4gIHN0YXRpYyBnZXRPcHRpb25UcmFuc2xhdGlvbihvcHRpb24pIHtcbiAgICBsZXQgcmVzVmFsID0gb3B0aW9uLnZhbHVlO1xuICAgIGNvbnN0IHRyYW5zbGF0aW9ucyA9IG9wdGlvblsndHJhbnNsYXRlZC12YWx1ZSddO1xuICAgIGlmICh0cmFuc2xhdGlvbnMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgY29uc3QgbGFuZ1N0YXRlID0gUG9zc2libGVWYWx1ZXNNYW5hZ2VyLl9sYW5nU3RhdGU7XG4gICAgICByZXNWYWwgPSB0cmFuc2xhdGlvbnNbbGFuZ1N0YXRlLmxhbmddIHx8IHRyYW5zbGF0aW9uc1tsYW5nU3RhdGUuZGVmYXVsdExhbmddIHx8IHJlc1ZhbDtcbiAgICB9XG4gICAgcmV0dXJuIHJlc1ZhbDtcbiAgfVxuXG4gIHN0YXRpYyBzZXRWaXNpYmlsaXR5KG9wdGlvbnMsIGZpZWxkUGF0aCwgY3VycmVuY3lSYXRlc01hbmFnZXI6IEN1cnJlbmN5UmF0ZXNNYW5hZ2VyLCBmaWx0ZXJzLCBpc09SRmlsdGVyID0gZmFsc2UsXG4gICAgc2VsZWN0ZWRJZCkge1xuICAgIGNvbnN0IGlzTG9jYXRpb25zID0gRlBDLkxPQ0FUSU9OX1BBVEggPT09IGZpZWxkUGF0aDtcbiAgICBjb25zdCBpc0N1cnJlbmN5ID0gRlBDLlBBVEhTX0ZPUl9DVVJSRU5DWS5oYXMoZmllbGRQYXRoKTtcbiAgICBvcHRpb25zID0geyAuLi5vcHRpb25zIH07XG4gICAgT2JqZWN0LnZhbHVlcyhvcHRpb25zKS5mb3JFYWNoKG9wdGlvbiA9PiB7XG4gICAgICBvcHRpb24udmlzaWJsZSA9ICFpc09SRmlsdGVyO1xuICAgICAgaWYgKGlzTG9jYXRpb25zKSB7XG4gICAgICAgIG9wdGlvbi5kaXNwbGF5SGllcmFyY2hpY2FsVmFsdWUgPSB0cnVlO1xuICAgICAgfSBlbHNlIGlmIChpc0N1cnJlbmN5KSB7XG4gICAgICAgIG9wdGlvbltGUEMuRklFTERfT1BUSU9OX1VTQUJMRV0gPSBQb3NzaWJsZVZhbHVlc01hbmFnZXIuaXNDdXJyZW5jeU9wdGlvblVzYWJsZShvcHRpb24sIGN1cnJlbmN5UmF0ZXNNYW5hZ2VyKTtcbiAgICAgICAgaWYgKCFvcHRpb25bRlBDLkZJRUxEX09QVElPTl9VU0FCTEVdKSB7XG4gICAgICAgICAgb3B0aW9uLnZpc2libGUgPSBvcHRpb24uaWQgPT09IHNlbGVjdGVkSWQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgICBpZiAoZmlsdGVycykge1xuICAgICAgZmlsdGVycy5mb3JFYWNoKGZpbHRlciA9PiB7XG4gICAgICAgIGNvbnN0IGZpbHRlckJ5ID0gZmlsdGVyLnZhbHVlO1xuICAgICAgICBPYmplY3QudmFsdWVzKG9wdGlvbnMpLmZvckVhY2gob3B0aW9uID0+IHtcbiAgICAgICAgICBjb25zdCBvcHRpb25EYXRhVG9DaGVjayA9IEZpZWxkc01hbmFnZXIuZ2V0VmFsdWUob3B0aW9uLCBmaWx0ZXIucGF0aCk7XG4gICAgICAgICAgaWYgKChpc09SRmlsdGVyIHx8IG9wdGlvbi52aXNpYmxlKSAmJiBvcHRpb25EYXRhVG9DaGVjayAmJiAoXG4gICAgICAgICAgICAob3B0aW9uRGF0YVRvQ2hlY2sgaW5zdGFuY2VvZiBBcnJheSAmJiBvcHRpb25EYXRhVG9DaGVjay5pbmNsdWRlcyhmaWx0ZXJCeSkpIHx8XG4gICAgICAgICAgICAob3B0aW9uRGF0YVRvQ2hlY2sgPT09IGZpbHRlckJ5KSkpIHtcbiAgICAgICAgICAgIG9wdGlvbi52aXNpYmxlID0gdHJ1ZTtcbiAgICAgICAgICB9IGVsc2UgaWYgKGlzT1JGaWx0ZXIpIHtcbiAgICAgICAgICAgIC8vIERvIG5vdGhpbmcsIGtlZXAgaXQgdmlzaWJsZS9pbnZpc2libGUuXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG9wdGlvbi52aXNpYmxlID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gb3B0aW9ucztcbiAgfVxuXG4gIHN0YXRpYyBpc0N1cnJlbmN5T3B0aW9uVXNhYmxlKG9wdGlvbiwgY3VycmVuY3lSYXRlc01hbmFnZXI6IEN1cnJlbmN5UmF0ZXNNYW5hZ2VyKSB7XG4gICAgY29uc3QgaGFzRXhjaGFuZ2VSYXRlcyA9IGN1cnJlbmN5UmF0ZXNNYW5hZ2VyLmN1cnJlbmNpZXNXaXRoRXhjaGFuZ2VSYXRlcy5oYXMob3B0aW9uLnZhbHVlKTtcbiAgICBjb25zdCBpc0FjdGl2ZSA9IG9wdGlvbi5leHRyYV9pbmZvICYmIG9wdGlvbi5leHRyYV9pbmZvLmFjdGl2ZTtcbiAgICByZXR1cm4gaXNBY3RpdmUgJiYgaGFzRXhjaGFuZ2VSYXRlcztcbiAgfVxuXG4gIHN0YXRpYyBnZXRUcmVlU29ydGVkT3B0aW9uc0xpc3Qob3B0aW9uc09iaiwgcmV2ZXJzZVNvcnRPcHRpb25zKSB7XG4gICAgY29uc3QgYWRkZWQgPSBuZXcgU2V0KCk7XG4gICAgY29uc3Qgb3B0aW9uc0xpc3QgPSBbXTtcbiAgICBjb25zdCBpZHNTdGFjayA9IE9iamVjdC52YWx1ZXMob3B0aW9uc09iaikuZmlsdGVyKG8gPT4gIW8ucGFyZW50SWQpLnNvcnQocmV2ZXJzZVNvcnRPcHRpb25zKVxuICAgICAgLm1hcChvID0+IG8uaWQpO1xuICAgIHdoaWxlIChpZHNTdGFjay5sZW5ndGgpIHtcbiAgICAgIGNvbnN0IGlkID0gaWRzU3RhY2sucG9wKCk7XG4gICAgICBpZiAoIWFkZGVkLmhhcyhpZCkpIHtcbiAgICAgICAgY29uc3Qgb3B0aW9uID0gb3B0aW9uc09ialtpZF07XG4gICAgICAgIGlmIChvcHRpb24ucmV2ZXJzZVNvcnRlZENoaWxkcmVuKSB7XG4gICAgICAgICAgaWRzU3RhY2sucHVzaCguLi5vcHRpb24ucmV2ZXJzZVNvcnRlZENoaWxkcmVuKTtcbiAgICAgICAgfVxuICAgICAgICBhZGRlZC5hZGQoaWQpO1xuICAgICAgICBvcHRpb25zTGlzdC5wdXNoKG9wdGlvbik7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBvcHRpb25zTGlzdDtcbiAgfVxufVxuIiwiLyogZXNsaW50LWRpc2FibGUgY2xhc3MtbWV0aG9kcy11c2UtdGhpcyAqL1xuY29uc3QgRkVBVFVSRV9NQU5BR0VSID0gJ0ZlYXR1cmUgbWFuYWdlcic7XG5cbi8qKlxuICogRmVhdHVyZSBNYW5hZ2VyXG4gKiBAYXV0aG9yIE5hZGVqZGEgTWFuZHJlc2N1XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZlYXR1cmVNYW5hZ2VyIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIHN0YXRpYyBfY3VycmVudEZNID0gbmV3IEZlYXR1cmVNYW5hZ2VyKCk7XG5cbiAgY29uc3RydWN0b3IoZm1UcmVlLCBMb2dnZXJNYW5hZ2VyKSB7XG4gICAgdGhpcy5fZm1UcmVlID0gZm1UcmVlO1xuICAgIGlmIChMb2dnZXJNYW5hZ2VyKSB7XG4gICAgICB0aGlzLmxvZ2dlck1hbmFnZXIgPSBMb2dnZXJNYW5hZ2VyO1xuICAgIH1cbiAgfVxuICBzZXQgZm1UcmVlKGZtVHJlZSkge1xuICAgIHRoaXMuX2ZtVHJlZSA9IGZtVHJlZTtcbiAgfVxuICBzZXQgbG9nZ2VyTWFuYWdlcihMb2dnZXJNYW5hZ2VyKSB7XG4gICAgdGhpcy5fbG9nZ2VyTWFuYWdlciA9IG5ldyBMb2dnZXJNYW5hZ2VyKEZFQVRVUkVfTUFOQUdFUik7XG4gIH1cblxuICBzdGF0aWMgc2V0TG9nZ2VyTWFuYWdlcihMb2dnZXJNYW5hZ2VyKSB7XG4gICAgRmVhdHVyZU1hbmFnZXIuX2N1cnJlbnRGTS5sb2dnZXJNYW5hZ2VyID0gTG9nZ2VyTWFuYWdlcjtcbiAgfVxuICBzdGF0aWMgc2V0Rk1UcmVlKGZtVHJlZSkge1xuICAgIEZlYXR1cmVNYW5hZ2VyLl9jdXJyZW50Rk0uZm1UcmVlID0gZm1UcmVlO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrcyBpZiB0aGUgZ2l2ZW4gRk0gcGF0aCBpcyBmdWxseSBlbmFibGVkIG9yIG9ubHkgbGFzdCBzZWdtZW50IGlzIGVuYWJsZWRcbiAgICogQHBhcmFtIGZtUGF0aCB0aGUgRk0gcGF0aCwgZS5nLiAnL1BST0pFQ1QgTUFOQUdFTUVOVC9GdW5kaW5nL0Z1bmRpbmcgSW5mb3JtYXRpb24vRGVsaXZlcnkgcmF0ZSdcbiAgICogQHBhcmFtIG9ubHlMYXN0U2VnbWVudCBzcGVjaWZpZXMgaWYgdG8gY2hlY2sgaWYgb25seSB0aGUgbGFzdCBzZWdtZW50IGlzIGVuYWJsZWQgKHRoZSBBTVAgYmVoYXZpb3IgZm9yIHNvbWUgY2FzZXMpXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqL1xuICBzdGF0aWMgaXNGTVNldHRpbmdFbmFibGVkKGZtUGF0aCwgb25seUxhc3RTZWdtZW50KSB7XG4gICAgcmV0dXJuIEZlYXR1cmVNYW5hZ2VyLl9jdXJyZW50Rk0uaXNGTVNldHRpbmdFbmFibGVkKGZtUGF0aCwgb25seUxhc3RTZWdtZW50KTtcbiAgfVxuXG4gIHN0YXRpYyBoYXNGTVNldHRpbmcoZm1QYXRoKSB7XG4gICAgcmV0dXJuIEZlYXR1cmVNYW5hZ2VyLl9jdXJyZW50Rk0uaGFzRk1TZXR0aW5nKGZtUGF0aCk7XG4gIH1cblxuICBpc0ZNU2V0dGluZ0VuYWJsZWQoZm1QYXRoLCBvbmx5TGFzdFNlZ21lbnQpIHtcbiAgICB0aGlzLl9sb2dnZXJNYW5hZ2VyLmRlYnVnKCdpc0ZNU2V0dGluZ0VuYWJsZWQnKTtcbiAgICBpZiAodGhpcy5fZm1UcmVlKSB7XG4gICAgICBsZXQgbGFzdEZNU3ViVHJlZSA9IHRoaXMuX2ZtVHJlZTtcbiAgICAgIGNvbnN0IHNlZ21lbnRzID0gdGhpcy5fZ2V0UGF0aFNlZ21lbnRzKGZtUGF0aCk7XG4gICAgICBjb25zdCBmb3VuZExhc3RGTVN1YlRyZWUgPSBzZWdtZW50cy5ldmVyeShzZWdtZW50ID0+IHtcbiAgICAgICAgbGFzdEZNU3ViVHJlZSA9IGxhc3RGTVN1YlRyZWVbc2VnbWVudF07XG4gICAgICAgIHJldHVybiBsYXN0Rk1TdWJUcmVlICE9PSB1bmRlZmluZWQgJiYgKGxhc3RGTVN1YlRyZWUuX19lbmFibGVkIHx8IG9ubHlMYXN0U2VnbWVudCk7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBmb3VuZExhc3RGTVN1YlRyZWUgJiYgbGFzdEZNU3ViVHJlZS5fX2VuYWJsZWQ7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGhhc0ZNU2V0dGluZyhmbVBhdGgpIHtcbiAgICBjb25zdCBmbVNldHRpbmcgPSB0aGlzLmZpbmRGTVNldHRpbmcoZm1QYXRoKTtcbiAgICByZXR1cm4gZm1TZXR0aW5nICYmIGZtU2V0dGluZy5fX2VuYWJsZWQgIT09IHVuZGVmaW5lZDtcbiAgfVxuXG4gIGZpbmRGTVNldHRpbmcoZm1QYXRoKSB7XG4gICAgY29uc3Qgc2VnbWVudHMgPSB0aGlzLl9nZXRQYXRoU2VnbWVudHMoZm1QYXRoKTtcbiAgICByZXR1cm4gc2VnbWVudHMucmVkdWNlKChjdXJyZW50Rk1TZXR0aW5nLCBzZWdtZW50KSA9PiBjdXJyZW50Rk1TZXR0aW5nICYmIGN1cnJlbnRGTVNldHRpbmdbc2VnbWVudF1cbiAgICAgICwgdGhpcy5fZm1UcmVlIHx8IHt9KTtcbiAgfVxuXG4gIHNldEZNU2V0dGluZyhmbVBhdGgsIGVuYWJsZWQpIHtcbiAgICBpZiAodGhpcy5fZm1UcmVlKSB7XG4gICAgICBjb25zdCBzZWdtZW50cyA9IHRoaXMuX2dldFBhdGhTZWdtZW50cyhmbVBhdGgpO1xuICAgICAgY29uc3QgbGFzdEZNU3ViVHJlZSA9IHNlZ21lbnRzLnJlZHVjZSgoY3VycmVudEZNVHJlZSwgc2VnbWVudCkgPT4ge1xuICAgICAgICBsZXQgc2VnbWVudEZNID0gY3VycmVudEZNVHJlZVtzZWdtZW50XTtcbiAgICAgICAgaWYgKHNlZ21lbnRGTSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgc2VnbWVudEZNID0ge307XG4gICAgICAgICAgY3VycmVudEZNVHJlZVtzZWdtZW50XSA9IHNlZ21lbnRGTTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc2VnbWVudEZNO1xuICAgICAgfSwgdGhpcy5fZm1UcmVlKTtcbiAgICAgIGxhc3RGTVN1YlRyZWUuX19lbmFibGVkID0gZW5hYmxlZDtcbiAgICB9XG4gIH1cblxuICBfZ2V0UGF0aFNlZ21lbnRzKGZtUGF0aCkge1xuICAgIC8vIGlnbm9yZSBmaXJzdCBcIi9cIiB0byBleGNsdWRlIGVtcHR5IHN0cmluZyBmcm9tIHRoZSBzcGxpdFxuICAgIHJldHVybiBmbVBhdGguc3Vic3RyaW5nKDEpLnNwbGl0KCcvJyk7XG4gIH1cbn1cbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQsIFByb3BUeXBlcyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IE92ZXJsYXlUcmlnZ2VyLCBUb29sdGlwIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcblxubGV0IGxvZ2dlciA9IG51bGw7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFQTGFiZWwgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgbGFiZWw6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICBkb250VHJhbnNsYXRlOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBsYWJlbENsYXNzOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIC8qIGRlY29yYXRvcjogUHJvcFR5cGVzLmZ1bmMsIC8vIFRPRE86IFRvIGJlIGltcGxlbWVudGVkLiAqL1xuICAgIHNlcGFyYXRvcjogUHJvcFR5cGVzLmJvb2wsXG4gICAgdG9vbHRpcDogUHJvcFR5cGVzLnN0cmluZ1xuICB9O1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIGNvbnN0IHsgTG9nZ2VyIH0gPSB0aGlzLnByb3BzO1xuICAgIGxvZ2dlciA9IG5ldyBMb2dnZXIoJ0FQIExhYmVsJyk7XG4gICAgbG9nZ2VyLmRlYnVnKCdjb25zdHJ1Y3RvcicpO1xuICB9XG5cbiAgZ2V0Q29udGVudCgpIHtcbiAgICBjb25zdCB7IHRyYW5zbGF0ZSB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBsYWJlbCA9ICh0aGlzLnByb3BzLmRvbnRUcmFuc2xhdGUgPT09IHRydWUgPyB0aGlzLnByb3BzLmxhYmVsIDogdHJhbnNsYXRlKHRoaXMucHJvcHMubGFiZWwpKTtcbiAgICBjb25zdCBsYWJlbENsYXNzID0gKHRoaXMucHJvcHMubGFiZWxDbGFzcyA/IHRoaXMucHJvcHMubGFiZWxDbGFzcyA6ICcnKTtcbiAgICByZXR1cm4gKDxkaXYgY2xhc3NOYW1lPXtsYWJlbENsYXNzfT48c3Bhbj57bGFiZWx9PC9zcGFuPnt0aGlzLnByb3BzLnNlcGFyYXRvciA/IDxociAvPiA6ICcnfTwvZGl2Pik7XG4gIH1cblxuICB0b29sdGlwKCkge1xuICAgIGNvbnN0IHsgdG9vbHRpcCwgZG9udFRyYW5zbGF0ZSwgdHJhbnNsYXRlIH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiA8VG9vbHRpcCBpZD1cInRvb2x0aXBcIj57ZG9udFRyYW5zbGF0ZSA/IHRvb2x0aXAgOiB0cmFuc2xhdGUodGhpcy5wcm9wcy50b29sdGlwKX08L1Rvb2x0aXA+O1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGlmICh0aGlzLnByb3BzLnRvb2x0aXApIHtcbiAgICAgIHJldHVybiAoPE92ZXJsYXlUcmlnZ2VyIHBsYWNlbWVudD1cInJpZ2h0XCIgb3ZlcmxheT17dGhpcy50b29sdGlwKCl9PlxuICAgICAgICB7dGhpcy5nZXRDb250ZW50KCl9XG4gICAgICA8L092ZXJsYXlUcmlnZ2VyPik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLmdldENvbnRlbnQoKTtcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQsIFByb3BUeXBlcyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vQWN0aXZpdHlQcmV2aWV3LmNzcyc7XG5cbmxldCBsb2dnZXIgPSBudWxsO1xuXG4vKipcbiAqIFNpbXBsZSBGaWVsZCBjb21wb25lbnQgdGhhdCBjb25zaXN0cyBvZiBhIGZpZWxkIHRpdGxlIGFuZCBmaWVsZCB2YWx1ZVxuICogQGF1dGhvciBOYWRlamRhIE1hbmRyZXNjdVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBUEZpZWxkIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICB2YWx1ZTogUHJvcFR5cGVzLmFueSxcbiAgICBpbmxpbmU6IFByb3BUeXBlcy5ib29sLFxuICAgIHVzZUlubmVySFRNTDogUHJvcFR5cGVzLmJvb2wsXG4gICAgZmllbGRDbGFzczogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBmaWVsZE5hbWVDbGFzczogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBmaWVsZFZhbHVlQ2xhc3M6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgc2VwYXJhdG9yOiBQcm9wVHlwZXMuYm9vbFxuICB9O1xuXG4gIC8qKlxuICAgKiBHZXRzIGFuIGluc3RhbmNlIG9mIFNpbXBsZSBGaWVsZFxuICAgKiBAcGFyYW0gdHJuTGFiZWwgdGhlIGxhYmVsIHRvIHRyYW5zbGF0ZSBhbmQgdXNlIGFzIGEgdGl0bGUuIFRoaXMgbGFiZWwgaXMgYWxzbyB1c2VkIGFzIHRoZSBjb21wb25lbnQga2V5LlxuICAgKiBAcGFyYW0gdmFsdWUgdGhlIGZpZWxkIHZhbHVlXG4gICAqIEBwYXJhbSBpbmxpbmUgc2hvdyB0aXRsZSBhbmQgdmFsdWUgaW4gdGhlIHNhbWUgcm93LlxuICAgKiBAcGFyYW0gc2VwYXJhdG9yIGFkZCBvciBub3QgYW4gPGhyPiB0YWcuXG4gICAqIEBwYXJhbSBuYW1lQ2xhc3MgY3NzIGNsYXNzIGZvciB0aGUgZmllbGQgbGFiZWxcbiAgICogQHBhcmFtIHZhbHVlQ2xhc3MgY3NzIGNsYXNzIGZvciB0aGUgZmllbGQgdmFsdWVcbiAgICogQHBhcmFtIHRyYW5zbGF0ZSB0aGUgdHJhbnNsYXRpb24gZnVuY3Rpb25cbiAgICogQHBhcmFtIGxvZ2dlciB0aGUgTG9nZ2VyTWFuYWdlclxuICAgKiBAcmV0dXJuIHtTaW1wbGVGaWVsZH1cbiAgICovXG4gIHN0YXRpYyBpbnN0YW5jZSh0cm5MYWJlbCwgdmFsdWUsIGlubGluZSA9IGZhbHNlLCBzZXBhcmF0b3IgPSBmYWxzZSwgbmFtZUNsYXNzLCB2YWx1ZUNsYXNzLCB0cmFuc2xhdGUsIGxvZ2dlcikge1xuICAgIHJldHVybiAoPEFQRmllbGRcbiAgICAgIGtleT17dHJuTGFiZWx9IHRpdGxlPXt0cmFuc2xhdGUodHJuTGFiZWwpfSB2YWx1ZT17dmFsdWV9IGlubGluZT17aW5saW5lfSBzZXBhcmF0b3I9e3NlcGFyYXRvcn1cbiAgICAgIGZpZWxkTmFtZUNsYXNzPXtuYW1lQ2xhc3N9IGZpZWxkVmFsdWVDbGFzcz17dmFsdWVDbGFzc30gdHJhbnNsYXRlPXt0cmFuc2xhdGV9IExvZ2dlcj17bG9nZ2VyfSAvPik7XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICBjb25zdCB7IExvZ2dlciB9ID0gdGhpcy5wcm9wcztcbiAgICBsb2dnZXIgPSBuZXcgTG9nZ2VyKCdBUCBmaWVsZCcpO1xuICAgIGxvZ2dlci5sb2coJ2NvbnN0cnVjdG9yJyk7XG4gICAgdGhpcy51c2VTZXBhcmF0b3IgPSB0aGlzLnByb3BzLnNlcGFyYXRvciAhPT0gZmFsc2U7XG4gICAgdGhpcy5kaXNwbGF5Q2xhc3MgPSB0aGlzLnByb3BzLmZpZWxkQ2xhc3MgfHwgKHRoaXMucHJvcHMuaW5saW5lID09PSB0cnVlID8gc3R5bGVzLmlubGluZSA6IHN0eWxlcy5ibG9jayk7XG4gIH1cblxuICBfZ2V0VmFsdWUoKSB7XG4gICAgY29uc3QgeyB0cmFuc2xhdGUgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgY2xhc3NOYW1lcyA9IGAke3RoaXMucHJvcHMuZmllbGRWYWx1ZUNsYXNzfSAke3RoaXMuZGlzcGxheUNsYXNzfWA7XG4gICAgLy8gVG8gaGFuZGxlIGJvb2xlYW4gZmllbGRzIHdlIGRvbnQgd2FudCB0byBzaG93ICdmYWxzZScgYXMgJ05vIERhdGEnLlxuICAgIGNvbnN0IHZhbHVlID0gKHRoaXMucHJvcHMudmFsdWUgfHwgdGhpcy5wcm9wcy52YWx1ZSA9PT0gZmFsc2UpID8gdGhpcy5wcm9wcy52YWx1ZSA6IHRyYW5zbGF0ZSgnTm8gRGF0YScpO1xuICAgIGxldCBkaXNwbGF5VmFsdWU7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICBpZiAodmFsdWVbMF0gaW5zdGFuY2VvZiBPYmplY3QpIHtcbiAgICAgICAgZGlzcGxheVZhbHVlID0gW107XG4gICAgICAgIHZhbHVlLmZvckVhY2godiA9PiBkaXNwbGF5VmFsdWUucHVzaCh2KSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkaXNwbGF5VmFsdWUgPSB2YWx1ZS5zb3J0KClcbiAgICAgICAgICAuam9pbignLCAnKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgICBkaXNwbGF5VmFsdWUgPSB2YWx1ZSA9PT0gdHJ1ZSA/IHRyYW5zbGF0ZSgnWWVzJykgOiB0cmFuc2xhdGUoJ05vJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRpc3BsYXlWYWx1ZSA9ICh0aGlzLnByb3BzLmlubGluZSAmJiB0aGlzLnByb3BzLnZhbHVlIGluc3RhbmNlb2YgU3RyaW5nKSA/IGAke3ZhbHVlfSBgIDogdmFsdWU7XG4gICAgfVxuICAgIGlmICh0aGlzLnByb3BzLnVzZUlubmVySFRNTCkge1xuICAgICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWVzfSBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IGRpc3BsYXlWYWx1ZSB9fSAvPjtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWVzfT57ZGlzcGxheVZhbHVlfTwvZGl2PjtcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgY2xhc3NOYW1lcyA9IGAke3RoaXMucHJvcHMuZmllbGROYW1lQ2xhc3N9ICR7dGhpcy5kaXNwbGF5Q2xhc3N9YDtcbiAgICByZXR1cm4gKDxkaXYgY2xhc3NOYW1lPXt0aGlzLmRpc3BsYXlDbGFzc30+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lc30+e3RoaXMucHJvcHMudGl0bGV9PC9kaXY+XG4gICAgICB7dGhpcy5fZ2V0VmFsdWUoKX1cbiAgICAgIHt0aGlzLnVzZVNlcGFyYXRvciA/IDxociAvPiA6ICcnfVxuICAgIDwvZGl2Pik7XG4gIH1cbn1cbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9BY3Rpdml0eVByZXZpZXcuY3NzJztcbmltcG9ydCBVSVV0aWxzIGZyb20gJy4uLy4uLy4uL3V0aWxzL1VJVXRpbHMnO1xuXG5sZXQgbG9nZ2VyID0gbnVsbDtcblxuLyoqXG4gKiBDb21wb25lbnQgZm9yIGNvbnZlcnRpbmcgY29udGVudCB0byB0YWJsZSBmb3JtXG4gKiBAYXV0aG9yIEFueWEgTWFyc2hhbGxcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFibGlmeSBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBjb250ZW50OiBQcm9wVHlwZXMuYW55LFxuICAgIGNvbHVtbnM6IFByb3BUeXBlcy5udW1iZXJcbiAgfTtcblxuICAvKipcbiAgICogVGFrZXMgYW4gYXJyYXkgYW5kIHR1cm5zIGl0IGludG8gdGFibGUgcm93cyBhbmQgY29sdW1ucy5cbiAgICogQGF1dGhvciBBbnlhIE1hcnNoYWxsXG4gICAqIEBwYXJhbSBjb250ZW50IGNvbnRlbnQgZm9yIHRhYmxlXG4gICAqIEBwYXJhbSBjb2xzIG51bWJlciBvZiBjb2x1bW5zXG4gICAqL1xuICBzdGF0aWMgYWRkUm93cyhjb250ZW50LCBjb2xzKSB7XG4gICAgLy8gUmVtb3ZlIHVuZGVmaW5lZCBjZWxscy5cbiAgICBjb250ZW50ID0gY29udGVudC5maWx0ZXIoYyA9PiBjKTtcbiAgICAvLyBEZWNyZWFzZSBudW1iZXIgb2YgY29scyBpZiB3ZSBkb250IGhhdmUgZW5vdWdoIGVsZW1lbnRzLlxuICAgIGlmIChjb250ZW50Lmxlbmd0aCA8IGNvbHMpIHtcbiAgICAgIGNvbHMgPSBjb250ZW50Lmxlbmd0aDtcbiAgICB9XG4gICAgY29uc3Qgcm93cyA9IE1hdGguY2VpbChjb250ZW50Lmxlbmd0aCAvIGNvbHMpO1xuICAgIGNvbnN0IHRhYmxlQ29udGVudCA9IFtdO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCByb3dzOyBpKyspIHtcbiAgICAgIGNvbnN0IHJvd0NvbnRlbnQgPSBbXTtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgY29sczsgaisrKSB7XG4gICAgICAgIHJvd0NvbnRlbnQucHVzaCg8dGQga2V5PXtVSVV0aWxzLnN0cmluZ1RvVW5pcXVlSWQoKX0+e2NvbnRlbnQucG9wKCl9PC90ZD4pO1xuICAgICAgfVxuICAgICAgdGFibGVDb250ZW50LnB1c2goPHRyIGtleT17VUlVdGlscy5zdHJpbmdUb1VuaXF1ZUlkKCl9Pntyb3dDb250ZW50fTwvdHI+KTtcbiAgICB9XG4gICAgcmV0dXJuIHRhYmxlQ29udGVudDtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIGNvbnN0IHsgTG9nZ2VyIH0gPSB0aGlzLnByb3BzO1xuICAgIGxvZ2dlciA9IG5ldyBMb2dnZXIoJ3RhYmxpZnknKTtcbiAgICBsb2dnZXIubG9nKCdjb25zdHJ1Y3RvcicpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IGNvbHVtbnMgPSB0aGlzLnByb3BzLmNvbHVtbnMgPj0gdGhpcy5wcm9wcy5jb250ZW50Lmxlbmd0aCA/IHRoaXMucHJvcHMuY29udGVudC5sZW5ndGggOiB0aGlzLnByb3BzLmNvbHVtbnM7XG4gICAgY29uc3QgY2VsbFdpZHRoID0gYCR7KDEwMCAvIGNvbHVtbnMpfSVgO1xuICAgIGNvbnN0IGNlbGx3aWR0aFN0eWxlID0ge1xuICAgICAgd2lkdGg6IGNlbGxXaWR0aFxuICAgIH07XG4gICAgY29uc3Qgcm93cyA9IE1hdGguY2VpbCh0aGlzLnByb3BzLmNvbnRlbnQubGVuZ3RoIC8gY29sdW1ucyk7XG4gICAgY29uc3QgdGFibGVDb250ZW50ID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCByb3dzOyBpKyspIHtcbiAgICAgIGNvbnN0IHJvd0NvbnRlbnQgPSBbXTtcbiAgICAgIHJvd0NvbnRlbnQucHVzaCg8ZGl2IGtleT17VUlVdGlscy5zdHJpbmdUb1VuaXF1ZUlkKCl9IHN0eWxlPXtjZWxsd2lkdGhTdHlsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnRhYmxpZnlfb3V0ZXJfY2VsbH0+XG4gICAgICAgIHt0aGlzLnByb3BzLmNvbnRlbnQucG9wKCl9PC9kaXY+KTtcbiAgICAgIGZvciAobGV0IGogPSAxOyBqIDwgdGhpcy5wcm9wcy5jb2x1bW5zICYmIHRoaXMucHJvcHMuY29udGVudC5sZW5ndGggPiAwOyBqKyspIHtcbiAgICAgICAgY29uc3Qga2V5ID0gVUlVdGlscy5zdHJpbmdUb1VuaXF1ZUlkKCk7XG4gICAgICAgIHJvd0NvbnRlbnQucHVzaCg8ZGl2IGtleT17a2V5fSBzdHlsZT17Y2VsbHdpZHRoU3R5bGV9IGNsYXNzTmFtZT17c3R5bGVzLnRhYmxpZnlfaW5uZXJfY2VsbH0+XG4gICAgICAgICAge3RoaXMucHJvcHMuY29udGVudC5wb3AoKX08L2Rpdj4pO1xuICAgICAgfVxuICAgICAgdGFibGVDb250ZW50LnB1c2goPGRpdiBrZXk9e1VJVXRpbHMuc3RyaW5nVG9VbmlxdWVJZCgpfSBjbGFzc05hbWU9e3N0eWxlcy5mbGV4fT57cm93Q29udGVudH08L2Rpdj4pO1xuICAgIH1cbiAgICByZXR1cm4gKDxkaXY+XG4gICAgICB7dGFibGVDb250ZW50fVxuICAgIDwvZGl2Pik7XG4gIH1cbn1cbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQsIFByb3BUeXBlcyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vQWN0aXZpdHlQcmV2aWV3LmNzcyc7XG5cbmxldCBsb2dnZXIgPSBudWxsO1xuXG4vKipcbiAqIFBlcmNlbnRhZ2UgRmllbGQgY29tcG9uZW50XG4gKiBAYXV0aG9yIE5hZGVqZGEgTWFuZHJlc2N1XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFQUGVyY2VudGFnZUZpZWxkIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIHZhbHVlOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIHRpdGxlQ2xhc3M6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgdmFsdWVDbGFzczogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBMb2dnZXI6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgcmF3TnVtYmVyVG9Gb3JtYXR0ZWRTdHJpbmc6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWRcbiAgfTtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICBjb25zdCB7IExvZ2dlciB9ID0gdGhpcy5wcm9wcztcbiAgICBsb2dnZXIgPSBuZXcgTG9nZ2VyKCdBUCBwZXJjZW50YWdlIGZpZWxkJyk7XG4gICAgbG9nZ2VyLmxvZygnY29uc3RydWN0b3InKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHJhd051bWJlclRvRm9ybWF0dGVkU3RyaW5nIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHBlcmNlbnRhZ2UgPSB0aGlzLnByb3BzLnZhbHVlICE9PSB1bmRlZmluZWQgJiYgdGhpcy5wcm9wcy52YWx1ZSAhPT0gbnVsbFxuICAgICAgPyBgJHtyYXdOdW1iZXJUb0Zvcm1hdHRlZFN0cmluZyh0aGlzLnByb3BzLnZhbHVlLCB0cnVlKX0lYCA6IG51bGw7XG4gICAgcmV0dXJuICg8ZGl2PlxuICAgICAgPHNwYW4gY2xhc3NOYW1lPXt0aGlzLnByb3BzLnRpdGxlQ2xhc3N9Pnt0aGlzLnByb3BzLnRpdGxlfSA8L3NwYW4+XG4gICAgICA8c3BhbiBjbGFzc05hbWU9e2Ake3RoaXMucHJvcHMudmFsdWVDbGFzc30gJHtzdHlsZXMuYWxpZ25SaWdodH1gfT57cGVyY2VudGFnZX08L3NwYW4+XG4gICAgPC9kaXY+KTtcbiAgfVxufVxuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgQVBGaWVsZCBmcm9tICcuL0FQRmllbGQuanN4JztcbmltcG9ydCBBUFBlcmNlbnRhZ2VGaWVsZCBmcm9tICcuL0FQUGVyY2VudGFnZUZpZWxkLmpzeCc7XG5pbXBvcnQgVGFibGlmeSBmcm9tICcuL1RhYmxpZnkuanN4JztcbmltcG9ydCBBY3Rpdml0eUNvbnN0YW50cyBmcm9tICcuLi8uLi8uLi9tb2R1bGVzL3V0aWwvQWN0aXZpdHlDb25zdGFudHMnO1xuaW1wb3J0IEZpZWxkc01hbmFnZXIgZnJvbSAnLi4vLi4vLi4vbW9kdWxlcy9maWVsZC9GaWVsZHNNYW5hZ2VyJztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vQWN0aXZpdHlQcmV2aWV3LmNzcyc7XG5pbXBvcnQgRmVhdHVyZU1hbmFnZXIgZnJvbSAnLi4vLi4vLi4vbW9kdWxlcy91dGlsL0ZlYXR1cmVNYW5hZ2VyJztcbmltcG9ydCBQb3NzaWJsZVZhbHVlc01hbmFnZXIgZnJvbSAnLi4vLi4vLi4vbW9kdWxlcy9maWVsZC9Qb3NzaWJsZVZhbHVlc01hbmFnZXInO1xuaW1wb3J0IFVJVXRpbHMgZnJvbSAnLi4vLi4vLi4vdXRpbHMvVUlVdGlscyc7XG5cbmxldCBsb2dnZXIgPSBudWxsO1xuXG4vKipcbiAqIEFjdGl2aXR5IFByZXZpZXcgUGVyY2VudGFnZSBMaXN0IHR5cGUgc2VjdGlvblxuICogQGF1dGhvciBOYWRlamRhIE1hbmRyZXNjdVxuICovXG5jb25zdCBBUFBlcmNlbnRhZ2VMaXN0ID0gKGxpc3RGaWVsZCwgdmFsdWVGaWVsZCwgcGVyY2VudGFnZUZpZWxkLCBsaXN0VGl0bGUgPSBudWxsKSA9PiBjbGFzcyBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgYWN0aXZpdHk6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgICBhY3Rpdml0eUZpZWxkc01hbmFnZXI6IFByb3BUeXBlcy5pbnN0YW5jZU9mKEZpZWxkc01hbmFnZXIpLmlzUmVxdWlyZWQsXG4gICAgZmllbGROYW1lQ2xhc3M6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgZmllbGRWYWx1ZUNsYXNzOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIHBlcmNlbnRUaXRsZUNsYXNzOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIHBlcmNlbnRWYWx1ZUNsYXNzOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIHRhYmxpZnk6IFByb3BUeXBlcy5ib29sLFxuICAgIGNvbHVtbnM6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgZm1QYXRoOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGdldEl0ZW1UaXRsZTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgTG9nZ2VyOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIHRyYW5zbGF0ZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZFxuICB9O1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIGNvbnN0IHsgTG9nZ2VyIH0gPSB0aGlzLnByb3BzO1xuICAgIGxvZ2dlciA9IG5ldyBMb2dnZXIoJ0FQIHBlcmNlbnRhZ2UgbGlzdCcpO1xuICAgIGxvZ2dlci5kZWJ1ZygnY29uc3RydWN0b3InKTtcbiAgfVxuXG4gIGdldEl0ZW1UaXRsZShpdGVtKSB7XG4gICAgaWYgKHRoaXMucHJvcHMuZ2V0SXRlbVRpdGxlKSB7XG4gICAgICByZXR1cm4gdGhpcy5wcm9wcy5nZXRJdGVtVGl0bGUoaXRlbSk7XG4gICAgfVxuICAgIGNvbnN0IG9iaiA9IGl0ZW1bdmFsdWVGaWVsZF07XG4gICAgcmV0dXJuIG9ialtBY3Rpdml0eUNvbnN0YW50cy5ISUVSQVJDSElDQUxfVkFMVUVdID9cbiAgICAgIG9ialtBY3Rpdml0eUNvbnN0YW50cy5ISUVSQVJDSElDQUxfVkFMVUVdIDpcbiAgICAgIFBvc3NpYmxlVmFsdWVzTWFuYWdlci5nZXRPcHRpb25UcmFuc2xhdGlvbihvYmopO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIHRyYW5zbGF0ZSwgYWN0aXZpdHlGaWVsZHNNYW5hZ2VyLCBwZXJjZW50VGl0bGVDbGFzcywgZm1QYXRoLCBhY3Rpdml0eSwgY29sdW1ucywgdGFibGlmeVxuICAgICAgLCBwZXJjZW50VmFsdWVDbGFzcywgZmllbGROYW1lQ2xhc3MsIGZpZWxkVmFsdWVDbGFzcywgTG9nZ2VyLCByYXdOdW1iZXJUb0Zvcm1hdHRlZFN0cmluZ1xuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHRpdGxlID0gbGlzdFRpdGxlID8gdHJhbnNsYXRlKGxpc3RUaXRsZSkgOiBudWxsO1xuICAgIGxldCBpdGVtcyA9IGFjdGl2aXR5W2xpc3RGaWVsZF07XG4gICAgbGV0IGNvbnRlbnQgPSBudWxsO1xuICAgIGxldCBpc0xpc3RFbmFibGVkID0gYWN0aXZpdHlGaWVsZHNNYW5hZ2VyLmlzRmllbGRQYXRoRW5hYmxlZChsaXN0RmllbGQpID09PSB0cnVlO1xuICAgIGlmIChmbVBhdGgpIHtcbiAgICAgIGlzTGlzdEVuYWJsZWQgPSBGZWF0dXJlTWFuYWdlci5pc0ZNU2V0dGluZ0VuYWJsZWQoZm1QYXRoKSA/IGlzTGlzdEVuYWJsZWQgOiBmYWxzZTtcbiAgICB9XG4gICAgaWYgKGlzTGlzdEVuYWJsZWQpIHtcbiAgICAgIGlmIChpdGVtcyAmJiBpdGVtcy5sZW5ndGgpIHtcbiAgICAgICAgaXRlbXMgPSBpdGVtcy5tYXAoaXRlbSA9PiAoe1xuICAgICAgICAgIGl0ZW1UaXRsZTogdGhpcy5nZXRJdGVtVGl0bGUoaXRlbSksXG4gICAgICAgICAgcGVyY2VudGFnZTogaXRlbVtwZXJjZW50YWdlRmllbGRdXG4gICAgICAgIH0pKVxuICAgICAgICAgIC5zb3J0KChhLCBiKSA9PiBhLml0ZW1UaXRsZS5sb2NhbGVDb21wYXJlKGIuaXRlbVRpdGxlKSk7XG4gICAgICAgIGNvbnRlbnQgPSBpdGVtcy5tYXAoKHsgaXRlbVRpdGxlLCBwZXJjZW50YWdlIH0pID0+XG4gICAgICAgICAgPEFQUGVyY2VudGFnZUZpZWxkXG4gICAgICAgICAgICBrZXk9e1VJVXRpbHMuc3RyaW5nVG9VbmlxdWVJZChpdGVtVGl0bGUpfSB0aXRsZT17aXRlbVRpdGxlfSB2YWx1ZT17cGVyY2VudGFnZX1cbiAgICAgICAgICAgIHRpdGxlQ2xhc3M9e3BlcmNlbnRUaXRsZUNsYXNzfSB2YWx1ZUNsYXNzPXtwZXJjZW50VmFsdWVDbGFzc30gdHJhbnNsYXRlPXt0cmFuc2xhdGV9XG4gICAgICAgICAgICBMb2dnZXI9e0xvZ2dlcn0gcmF3TnVtYmVyVG9Gb3JtYXR0ZWRTdHJpbmc9e3Jhd051bWJlclRvRm9ybWF0dGVkU3RyaW5nfSAvPlxuICAgICAgICApO1xuICAgICAgICBpZiAodGFibGlmeSkge1xuICAgICAgICAgIGNvbnRlbnQgPSA8VGFibGlmeSBjb250ZW50PXtjb250ZW50fSBjb2x1bW5zPXtjb2x1bW5zfSBMb2dnZXI9e0xvZ2dlcn0gLz47XG4gICAgICAgIH1cbiAgICAgICAgY29udGVudCA9ICg8QVBGaWVsZFxuICAgICAgICAgIGtleT17bGlzdEZpZWxkfSB0aXRsZT17dGl0bGV9IHZhbHVlPXtjb250ZW50fSBzZXBhcmF0b3I9e2ZhbHNlfSBpbmxpbmU9e3RhYmxpZnkgPT09IHRydWV9XG4gICAgICAgICAgZmllbGROYW1lQ2xhc3M9e2ZpZWxkTmFtZUNsYXNzfSBmaWVsZFZhbHVlQ2xhc3M9e2ZpZWxkVmFsdWVDbGFzc31cbiAgICAgICAgICB0cmFuc2xhdGU9e3RyYW5zbGF0ZX0gTG9nZ2VyPXtMb2dnZXJ9IC8+KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnRlbnQgPSAoPEFQRmllbGRcbiAgICAgICAgICBrZXk9e2xpc3RGaWVsZH0gdGl0bGU9e3RpdGxlfSB2YWx1ZT17dHJhbnNsYXRlKCdObyBEYXRhJyl9IHNlcGFyYXRvcj17ZmFsc2V9XG4gICAgICAgICAgaW5saW5lPXt0YWJsaWZ5ID09PSB0cnVlfVxuICAgICAgICAgIGZpZWxkTmFtZUNsYXNzPXtmaWVsZE5hbWVDbGFzc30gZmllbGRWYWx1ZUNsYXNzPXtzdHlsZXMubm9kYXRhfVxuICAgICAgICAgIHRyYW5zbGF0ZT17dHJhbnNsYXRlfSBMb2dnZXI9e0xvZ2dlcn0gLz4pO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG59O1xuXG5leHBvcnQgZGVmYXVsdCBBUFBlcmNlbnRhZ2VMaXN0O1xuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgRmllbGRQYXRoQ29uc3RhbnRzIGZyb20gJy4uLy4uLy4uL3V0aWxzL0ZpZWxkUGF0aENvbnN0YW50cyc7XG5pbXBvcnQgRmllbGRzTWFuYWdlciBmcm9tICcuLi8uLi8uLi9tb2R1bGVzL2ZpZWxkL0ZpZWxkc01hbmFnZXInO1xuaW1wb3J0IEZlYXR1cmVNYW5hZ2VyIGZyb20gJy4uLy4uLy4uL21vZHVsZXMvdXRpbC9GZWF0dXJlTWFuYWdlcic7XG5pbXBvcnQgUG9zc2libGVWYWx1ZXNNYW5hZ2VyIGZyb20gJy4uLy4uLy4uL21vZHVsZXMvZmllbGQvUG9zc2libGVWYWx1ZXNNYW5hZ2VyJztcbmltcG9ydCBBUEZpZWxkIGZyb20gJy4uL2NvbXBvbmVudHMvQVBGaWVsZC5qc3gnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9BY3Rpdml0eVByZXZpZXcuY3NzJztcbmltcG9ydCBVSVV0aWxzIGZyb20gJy4uLy4uLy4uL3V0aWxzL1VJVXRpbHMnO1xuXG5sZXQgbG9nZ2VyID0gbnVsbDtcblxuLyoqXG4gKiBHZW5lcmljIGFjdGl2aXR5IHByZXZpZXcgc2VjdGlvbiBjbGFzc1xuICogQGF1dGhvciBOYWRlamRhIE1hbmRyZXNjdVxuICovXG4vLyBjb25zdCBTZWN0aW9uID0gKENvbXBvc2VkU2VjdGlvbiwgU2VjdGlvblRpdGxlID0gbnVsbCwgdXNlRW5jYXBzdWxhdGVIZWFkZXIgPSB0cnVlLCBzSUQpID0+IGNsYXNzIGV4dGVuZHMgQ29tcG9uZW50IHtcbmNvbnN0IFNlY3Rpb24gPSAoQ29tcG9zZWRTZWN0aW9uLCBwYXJhbXMpID0+IGNsYXNzIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICB0aXRsZURldGFpbHM6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5vYmplY3RdKSxcbiAgICBzZWN0aW9uUGF0aDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICB0aXRsZUNsYXNzOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGdyb3VwQ2xhc3M6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgY29tcG9zZWRDbGFzczogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBmaWVsZE5hbWVDbGFzczogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBmaWVsZFZhbHVlQ2xhc3M6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgZm1QYXRoOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGZpZWxkQ2xhc3M6IFByb3BUeXBlcy5zdHJpbmdcbiAgfTtcblxuICBzdGF0aWMgY29udGV4dFR5cGVzID0ge1xuICAgIGFjdGl2aXR5OiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gICAgYWN0aXZpdHlGaWVsZHNNYW5hZ2VyOiBQcm9wVHlwZXMuaW5zdGFuY2VPZihGaWVsZHNNYW5hZ2VyKS5pc1JlcXVpcmVkLFxuICAgIGNvbnRhY3RGaWVsZHNNYW5hZ2VyOiBQcm9wVHlwZXMuaW5zdGFuY2VPZihGaWVsZHNNYW5hZ2VyKSxcbiAgICBjb250YWN0c0J5SWRzOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gICAgYWN0aXZpdHlGdW5kaW5nVG90YWxzOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsIC8vIFdpbGwgY2hhbmdlIHRoaXMgaWYgQWN0aXZpdHlGdW5kaW5nVG90YWxzIGlzIG1pZ3JhdGVkXG4gICAgLy8gUHJvcFR5cGVzLmluc3RhbmNlT2YocGFyYW1zLkFjdGl2aXR5RnVuZGluZ1RvdGFscykuaXNSZXF1aXJlZCxcbiAgICBhY3Rpdml0eVdvcmtzcGFjZTogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICAgIGFjdGl2aXR5V1NNYW5hZ2VyOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gICAgcmVzb3VyY2VSZWR1Y2VyOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gICAgTG9nZ2VyOiBQcm9wVHlwZXMuZnVuYyxcbiAgICB0cmFuc2xhdGU6IFByb3BUeXBlcy5mdW5jLFxuICAgIERhdGVVdGlsczogUHJvcFR5cGVzLmZ1bmNcbiAgfTtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIHRpdGxlQ2xhc3M6IHN0eWxlcy5zZWN0aW9uX3RpdGxlX2NsYXNzLFxuICAgIGdyb3VwQ2xhc3M6IHN0eWxlcy5zZWN0aW9uX2dyb3VwX2NsYXNzLFxuICAgIGZpZWxkTmFtZUNsYXNzOiBzdHlsZXMuc2VjdGlvbl9maWVsZF9uYW1lLFxuICAgIGZpZWxkVmFsdWVDbGFzczogc3R5bGVzLnNlY3Rpb25fZmllbGRfdmFsdWVcbiAgfTtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcywgY29udGV4dCkge1xuICAgIHN1cGVyKHByb3BzLCBjb250ZXh0KTtcbiAgICBpZiAodGhpcy5jb250ZXh0KSB7XG4gICAgICBwYXJhbXMuTG9nZ2VyID0gdGhpcy5jb250ZXh0LkxvZ2dlcjtcbiAgICAgIHBhcmFtcy5EYXRlVXRpbHMgPSB0aGlzLmNvbnRleHQuRGF0ZVV0aWxzO1xuICAgICAgcGFyYW1zLnRyYW5zbGF0ZSA9IHRoaXMuY29udGV4dC50cmFuc2xhdGU7XG4gICAgfVxuICAgIHBhcmFtcy51c2VFbmNhcHN1bGF0ZUhlYWRlciA9ICFwYXJhbXMudXNlRW5jYXBzdWxhdGVIZWFkZXIgPyB0cnVlIDogcGFyYW1zLnVzZUVuY2Fwc3VsYXRlSGVhZGVyO1xuICAgIGxvZ2dlciA9IG5ldyBwYXJhbXMuTG9nZ2VyKCdBUCBzZWN0aW9uJyk7XG4gICAgbG9nZ2VyLmRlYnVnKCdjb25zdHJ1Y3RvcicpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbmRlcnMgZmllbGQgZGF0YSBpZiBpdCBpcyBlbmFibGVkIGluIEZNLiBJZiByZW5hYmxlZCwgYnV0IHZhbHVlIGlzIG5vdCBhdmFpbGFibGUsIHRoZW4gaXQgd2lsbCBub3QgYmUgcmVuZGVyZWQsXG4gICAqIHVubGVzcyBpdCBpcyByZXF1ZXN0ZWQgdmlhIHNob3dJZk5vdEF2YWlsYWJsZSBmbGFnLlxuICAgKiBAcGFyYW0gcGF0aCBmaWVsZCBwYXRoXG4gICAqIEBwYXJhbSBzaG93SWZOb3RBdmFpbGFibGUgZmxhZyB0byBmb3JjaWJseSBkaXNwbGF5IHRoZSBmaWVsZCB3aGVuIG5vIHZhbHVlIGlzIHByb3ZpZGVkXG4gICAqIEBwYXJhbSBOQU9wdGlvbnMgb3B0aW9uYWwgc2V0IG9mIHZhbHVlcyB0aGF0IHNob3VsZCBiZSB0cmVhdGVkIGFzIHVuZGVmaW5lZFxuICAgKiBAcGFyYW0gaW5saW5lIG9wdGlvbmFsIGZsYWcgdG8gcmVuZGVyIG5hbWUgYW5kIHZhbHVlcyBvbiB0aGUgc2FtZSBsaW5lXG4gICAqIEBwYXJhbSBwYXJlbnQgb3B0aW9uYWwgb2JqZWN0IHdoZXJlIHdlIGxvb2sgZm9yIHRoZSBwYXRoIChpbnN0ZWFkIG9mIHRoZSBhY3Rpdml0eSByb290KS5cbiAgICogQHBhcmFtIGZpZWxkc01hbmFnZXIgKG9wdGlvbmFsKSBjdXN0b20gZmllbGRzIG1hbmFnZXIuIEFjdGl2aXR5IEZpZWxkcyBNYW5hZ2VyIHVzZWQgYnkgZGVmYXVsdC5cbiAgICogQHJldHVybiB7bnVsbHxBUEZpZWxkfVxuICAgKi9cbiAgYnVpbGRTaW1wbGVGaWVsZChwYXRoLCBzaG93SWZOb3RBdmFpbGFibGUsIE5BT3B0aW9uczogU2V0LCBpbmxpbmUgPSBmYWxzZSwgcGFyZW50ID0gbnVsbCwgZmllbGRzTWFuYWdlciA9IG51bGxcbiAgICAsIG9wdGlvbnMpIHtcbiAgICBjb25zdCBvcHRpb25zXyA9IG9wdGlvbnMgfHwge307XG4gICAgY29uc3QgZm1QYXRoID0gRmllbGRQYXRoQ29uc3RhbnRzLkFDVElWSVRZX0ZJRUxEU19GTV9QQVRIW3BhdGhdO1xuICAgIGZpZWxkc01hbmFnZXIgPSBmaWVsZHNNYW5hZ2VyIHx8IHRoaXMuY29udGV4dC5hY3Rpdml0eUZpZWxkc01hbmFnZXI7XG4gICAgaWYgKGZpZWxkc01hbmFnZXIuaXNGaWVsZFBhdGhFbmFibGVkKHBhdGgpXG4gICAgICAmJiAoIWZtUGF0aCB8fCBGZWF0dXJlTWFuYWdlci5pc0ZNU2V0dGluZ0VuYWJsZWQoZm1QYXRoLCBmYWxzZSkpKSB7XG4gICAgICBjb25zdCB0aXRsZSA9IChvcHRpb25zXy5ub1RpdGxlID8gJycgOiBmaWVsZHNNYW5hZ2VyLmdldEZpZWxkTGFiZWxUcmFuc2xhdGlvbihwYXRoKSk7XG4gICAgICBsZXQgdmFsdWVQYXRoID0gcGF0aDtcbiAgICAgIGlmIChwYXJlbnQpIHtcbiAgICAgICAgY29uc3QgZmllbGRQYXRoUGFydHMgPSBwYXRoLnNwbGl0KCd+Jyk7XG4gICAgICAgIHZhbHVlUGF0aCA9IGZpZWxkUGF0aFBhcnRzW2ZpZWxkUGF0aFBhcnRzLmxlbmd0aCAtIDFdO1xuICAgICAgfVxuICAgICAgY29uc3QgYWx0ZXJuYXRlUGF0aCA9IEZpZWxkUGF0aENvbnN0YW50cy5BTFRFUk5BVEVfVkFMVUVfUEFUSFt2YWx1ZVBhdGhdO1xuICAgICAgbGV0IHZhbHVlID0gZmllbGRzTWFuYWdlci5nZXRWYWx1ZShwYXJlbnQgfHwgdGhpcy5jb250ZXh0LmFjdGl2aXR5LCB2YWx1ZVBhdGgsXG4gICAgICAgIFBvc3NpYmxlVmFsdWVzTWFuYWdlci5nZXRPcHRpb25UcmFuc2xhdGlvbik7XG4gICAgICBpZiAoKHZhbHVlID09PSBudWxsIHx8IHZhbHVlID09PSB1bmRlZmluZWQpICYmIGFsdGVybmF0ZVBhdGgpIHtcbiAgICAgICAgdmFsdWUgPSBmaWVsZHNNYW5hZ2VyLmdldFZhbHVlKHRoaXMuY29udGV4dC5hY3Rpdml0eSwgYWx0ZXJuYXRlUGF0aCxcbiAgICAgICAgICBQb3NzaWJsZVZhbHVlc01hbmFnZXIuZ2V0T3B0aW9uVHJhbnNsYXRpb24pO1xuICAgICAgfVxuICAgICAgY29uc3QgZmllbGREZWYgPSBmaWVsZHNNYW5hZ2VyLmdldEZpZWxkRGVmKHBhdGgpO1xuICAgICAgaWYgKGZpZWxkRGVmLmZpZWxkX3R5cGUgPT09IEZpZWxkUGF0aENvbnN0YW50cy5GSUVMRF9UWVBFX0RBVEUpIHtcbiAgICAgICAgdmFsdWUgPSBwYXJhbXMuRGF0ZVV0aWxzLmNyZWF0ZUZvcm1hdHRlZERhdGUodmFsdWUpO1xuICAgICAgfSBlbHNlIGlmIChmaWVsZERlZi5maWVsZF90eXBlID09PSBGaWVsZFBhdGhDb25zdGFudHMuRklFTERfVFlQRV9USU1FU1RBTVApIHtcbiAgICAgICAgLy8gbWF0Y2hpbmcgQVAgb25saW5lIHRvIGZvcm1hdCBhcyBkYXRlIGZvciBub3dcbiAgICAgICAgdmFsdWUgPSBwYXJhbXMuRGF0ZVV0aWxzLmNyZWF0ZUZvcm1hdHRlZERhdGUodmFsdWUpO1xuICAgICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSAmJiAhdmFsdWUubGVuZ3RoKSB7XG4gICAgICAgIHZhbHVlID0gbnVsbDtcbiAgICAgIH1cbiAgICAgIHZhbHVlID0gTkFPcHRpb25zICYmIE5BT3B0aW9ucy5oYXModmFsdWUpID8gbnVsbCA6IHZhbHVlO1xuXG4gICAgICBjb25zdCByZSA9IC9eXFxzPyQvOyAvLyBjaGVjayBmb3Igd2hpdGVzcGFjZVxuICAgICAgaWYgKHJlLnRlc3QodmFsdWUpKSB2YWx1ZSA9IHZhbHVlLnRyaW0oKTsgLy8gY2hlY2sgZm9yIHdoaXRlc3BhY2VcbiAgICAgIGlmICh2YWx1ZSA9PT0gJycgfHwgdmFsdWUgPT09IG51bGwpIHtcbiAgICAgICAgdmFsdWUgPSBwYXJhbXMudHJhbnNsYXRlKCdObyBEYXRhJyk7XG4gICAgICB9XG4gICAgICBpZiAoc2hvd0lmTm90QXZhaWxhYmxlID09PSB0cnVlIHx8ICh2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlICE9PSBudWxsKSkge1xuICAgICAgICBjb25zdCB1c2VJbm5lckhUTUwgPSBGaWVsZFBhdGhDb25zdGFudHMuUklDSF9URVhUX0ZJRUxEUy5oYXMocGF0aCk7XG4gICAgICAgIHJldHVybiAoPEFQRmllbGRcbiAgICAgICAgICBrZXk9e1VJVXRpbHMuc3RyaW5nVG9VbmlxdWVJZChwYXRoKX0gdGl0bGU9e3RpdGxlfSB2YWx1ZT17dmFsdWV9IHVzZUlubmVySFRNTD17dXNlSW5uZXJIVE1MfVxuICAgICAgICAgIGlubGluZT17aW5saW5lfVxuICAgICAgICAgIHNlcGFyYXRvcj17ZmFsc2V9XG4gICAgICAgICAgZmllbGRDbGFzcz17b3B0aW9uc18uZmllbGRDbGFzcyB8fCB0aGlzLnByb3BzLmZpZWxkQ2xhc3N9XG4gICAgICAgICAgZmllbGROYW1lQ2xhc3M9e3RoaXMucHJvcHMuZmllbGROYW1lQ2xhc3N9XG4gICAgICAgICAgZmllbGRWYWx1ZUNsYXNzPXtvcHRpb25zXy5maWVsZFZhbHVlQ2xhc3MgfHwgdGhpcy5wcm9wcy5maWVsZFZhbHVlQ2xhc3N9XG4gICAgICAgICAgdHJhbnNsYXRlPXtwYXJhbXMudHJhbnNsYXRlfSBMb2dnZXI9e3BhcmFtcy5Mb2dnZXJ9IC8+KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgaWYgKHRoaXMucHJvcHMuc2VjdGlvblBhdGggJiYgIXRoaXMuY29udGV4dC5hY3Rpdml0eUZpZWxkc01hbmFnZXIuaXNGaWVsZFBhdGhFbmFibGVkKHRoaXMucHJvcHMuc2VjdGlvblBhdGgpKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgaWYgKHRoaXMucHJvcHMuZm1QYXRoICYmICFGZWF0dXJlTWFuYWdlci5pc0ZNU2V0dGluZ0VuYWJsZWQodGhpcy5wcm9wcy5mbVBhdGgpKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgY29uc3QgY29tcG9zZWRTZWN0aW9uID0gKDxDb21wb3NlZFNlY3Rpb25cbiAgICAgIHsuLi50aGlzLnByb3BzfSB7Li4udGhpcy5zdGF0ZX0gey4uLnRoaXMuY29udGV4dH0gYnVpbGRTaW1wbGVGaWVsZD17dGhpcy5idWlsZFNpbXBsZUZpZWxkLmJpbmQodGhpcyl9IC8+KTtcbiAgICBpZiAocGFyYW1zLnVzZUVuY2Fwc3VsYXRlSGVhZGVyID09PSBmYWxzZSkge1xuICAgICAgcmV0dXJuIGNvbXBvc2VkU2VjdGlvbjtcbiAgICB9XG4gICAgLy8gVE9ETyBpdGVyYXRpb24gMisgc2VjdGlvbiB0b2dnbGUgKFREQyBiYXNlZCBvbiBkZXNnaW4gKyBWRylcbiAgICByZXR1cm4gKDxkaXYga2V5PXtwYXJhbXMuU2VjdGlvblRpdGxlfSBjbGFzc05hbWU9e3RoaXMucHJvcHMuZ3JvdXBDbGFzc30gaWQ9e3BhcmFtcy5zSUR9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3RoaXMucHJvcHMudGl0bGVDbGFzc30+XG4gICAgICAgIDxzcGFuPntwYXJhbXMudHJhbnNsYXRlKHBhcmFtcy5TZWN0aW9uVGl0bGUpfSA8L3NwYW4+PHNwYW4+e3RoaXMucHJvcHMudGl0bGVEZXRhaWxzfTwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3RoaXMucHJvcHMuY29tcG9zZWRDbGFzc30+XG4gICAgICAgIHtjb21wb3NlZFNlY3Rpb259XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj4pO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTZWN0aW9uO1xuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgQWN0aXZpdHlDb25zdGFudHMgZnJvbSAnLi4vLi4vLi4vbW9kdWxlcy91dGlsL0FjdGl2aXR5Q29uc3RhbnRzJztcbmltcG9ydCBGZWF0dXJlTWFuYWdlciBmcm9tICcuLi8uLi8uLi9tb2R1bGVzL3V0aWwvRmVhdHVyZU1hbmFnZXInO1xuaW1wb3J0IFZhbHVlQ29uc3RhbnRzIGZyb20gJy4uLy4uLy4uL3V0aWxzL1ZhbHVlQ29uc3RhbnRzJztcbmltcG9ydCBGZWF0dXJlTWFuYWdlckNvbnN0YW50cyBmcm9tICcuLi8uLi8uLi9tb2R1bGVzL3V0aWwvRmVhdHVyZU1hbmFnZXJDb25zdGFudHMnO1xuaW1wb3J0IEZpZWxkUGF0aENvbnN0YW50cyBmcm9tICcuLi8uLi8uLi91dGlscy9GaWVsZFBhdGhDb25zdGFudHMnO1xuXG5pbXBvcnQgRmllbGRzTWFuYWdlciBmcm9tICcuLi8uLi8uLi9tb2R1bGVzL2ZpZWxkL0ZpZWxkc01hbmFnZXInO1xuaW1wb3J0IFBvc3NpYmxlVmFsdWVzTWFuYWdlciBmcm9tICcuLi8uLi8uLi9tb2R1bGVzL2ZpZWxkL1Bvc3NpYmxlVmFsdWVzTWFuYWdlcic7XG5pbXBvcnQgQVBGaWVsZCBmcm9tICcuLi9jb21wb25lbnRzL0FQRmllbGQuanN4JztcbmltcG9ydCBTZWN0aW9uIGZyb20gJy4vU2VjdGlvbi5qc3gnO1xuXG5cbmxldCBsb2dnZXIgPSBudWxsO1xuXG4vKiBlc2xpbnQtZGlzYWJsZSBjbGFzcy1tZXRob2RzLXVzZS10aGlzICovXG5cbi8qKlxuICogRnVuZGluZyBUb3RhbHMgU3VtbWFyeSBzZWN0aW9uXG4gKiBAYXV0aG9yIE5hZGVqZGEgTWFuZHJlc2N1XG4gKi9cbmNsYXNzIEZ1bmRpbmdTdW1tYXJ5IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBhY3Rpdml0eUZpZWxkc01hbmFnZXI6IFByb3BUeXBlcy5pbnN0YW5jZU9mKEZpZWxkc01hbmFnZXIpLmlzUmVxdWlyZWQsXG4gICAgYWN0aXZpdHlGdW5kaW5nVG90YWxzOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsIC8vIFByb3BUeXBlcy5pbnN0YW5jZU9mKEFjdGl2aXR5RnVuZGluZ1RvdGFscykuaXNSZXF1aXJlZCxcbiAgICBmaWVsZE5hbWVDbGFzczogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBmaWVsZFZhbHVlQ2xhc3M6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgTG9nZ2VyOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIHRyYW5zbGF0ZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICBEYXRlVXRpbHM6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWRcbiAgfTtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICBjb25zdCB7IExvZ2dlciB9ID0gdGhpcy5wcm9wcztcbiAgICBsb2dnZXIgPSBuZXcgTG9nZ2VyKCdGdW5kaW5nIHN1bW1hcnknKTtcbiAgICBsb2dnZXIuZGVidWcoJ2NvbnN0cnVjdG9yJyk7XG4gIH1cblxuICAvKipcbiAgICogQnVpbGRzIFwiRnVuZGluZyBJbmZvcm1hdGlvblwiIHNlY3Rpb24gYnkgZm9sbG93aW5nIEFNUCBBY3Rpdml0eSBQcmV2aWV3IHJ1bGVzXG4gICAqIEByZXR1cm4ge1NlY3Rpb259XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfYnVpbGRGdW5kaW5nSW5mb3JtYXRpb24oKSB7XG4gICAgY29uc3QgbWVhc3VyZXNUb3RhbHMgPSB7fTtcbiAgICBjb25zdCB7IGFjdGl2aXR5RmllbGRzTWFuYWdlciB9ID0gdGhpcy5wcm9wcztcbiAgICBsZXQgYWNFbmFibGVkID0gZmFsc2U7XG4gICAgbGV0IGFkRW5hYmxlZCA9IGZhbHNlO1xuICAgIC8vIENvbW1pdG1lbnRzLCBEaXNidXJzZW1lbnRzLCBFeHBlbmRpdHVyZXNcbiAgICBGaWVsZFBhdGhDb25zdGFudHMuVFJBTlNBQ1RJT05fVFlQRVMuZm9yRWFjaCh0cm5UeXBlID0+IHtcbiAgICAgIGlmIChhY3Rpdml0eUZpZWxkc01hbmFnZXIuaXNGaWVsZFBhdGhCeVBhcnRzRW5hYmxlZChBY3Rpdml0eUNvbnN0YW50cy5GVU5ESU5HUywgdHJuVHlwZSkpIHtcbiAgICAgICAgY29uc3QgdHJuQWRqT3B0UGF0aCA9IGAke0FjdGl2aXR5Q29uc3RhbnRzLkZVTkRJTkdTfX4ke3RyblR5cGV9fiR7QWN0aXZpdHlDb25zdGFudHMuQURKVVNUTUVOVF9UWVBFfWA7XG4gICAgICAgIGNvbnN0IGF0T3B0aW9ucyA9IGFjdGl2aXR5RmllbGRzTWFuYWdlci5nZXRQb3NzaWJsZVZhbHVlc09wdGlvbnModHJuQWRqT3B0UGF0aCk7XG4gICAgICAgIGFjRW5hYmxlZCA9IGFjRW5hYmxlZCB8fFxuICAgICAgICAgICh0cm5UeXBlID09PSBBY3Rpdml0eUNvbnN0YW50cy5DT01NSVRNRU5UUyAmJiAhIWF0T3B0aW9ucy5maW5kKG8gPT4gby52YWx1ZSA9PT0gVmFsdWVDb25zdGFudHMuQUNUVUFMKSk7XG4gICAgICAgIGFkRW5hYmxlZCA9IGFkRW5hYmxlZCB8fFxuICAgICAgICAgICh0cm5UeXBlID09PSBBY3Rpdml0eUNvbnN0YW50cy5ESVNCVVJTRU1FTlRTICYmICEhYXRPcHRpb25zLmZpbmQobyA9PiBvLnZhbHVlID09PSBWYWx1ZUNvbnN0YW50cy5BQ1RVQUwpKTtcbiAgICAgICAgLy8gQWN0dWFsLCBQbGFubmVkXG4gICAgICAgIGF0T3B0aW9ucy5mb3JFYWNoKGFkalR5cGUgPT4ge1xuICAgICAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5wcm9wcy5hY3Rpdml0eUZ1bmRpbmdUb3RhbHMuZ2V0VG90YWxzKGFkalR5cGUuaWQsIHRyblR5cGUsIHt9KTtcbiAgICAgICAgICBtZWFzdXJlc1RvdGFsc1tgJHthZGpUeXBlLnZhbHVlfSAke3RyblR5cGV9YF0gPSB2YWx1ZTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgLy8gT3RoZXIgbWVhc3VyZXM6IFwiVW5hbGxvY2F0ZWQgRGlzYnVyc2VtZW50c1wiLlxuICAgIGNvbnN0IGFkalR5cGVBY3R1YWxUcm4gPSB0aGlzLnByb3BzLmFjdGl2aXR5RmllbGRzTWFuYWdlci5nZXRWYWx1ZShGaWVsZFBhdGhDb25zdGFudHMuRElTQlVSU0VNRU5UU19QQVRILFxuICAgICAgVmFsdWVDb25zdGFudHMuQUNUVUFMLFxuICAgICAgUG9zc2libGVWYWx1ZXNNYW5hZ2VyLmdldE9wdGlvblRyYW5zbGF0aW9uKTtcbiAgICBjb25zdCBleHBlbmRpdHVyZXNBcmVFbmFibGVkID0gYWN0aXZpdHlGaWVsZHNNYW5hZ2VyLmlzRmllbGRQYXRoQnlQYXJ0c0VuYWJsZWQoQWN0aXZpdHlDb25zdGFudHMuRlVORElOR1MsXG4gICAgICBBY3Rpdml0eUNvbnN0YW50cy5FWFBFTkRJVFVSRVMpO1xuICAgIGlmIChhZGpUeXBlQWN0dWFsVHJuICYmIGV4cGVuZGl0dXJlc0FyZUVuYWJsZWQpIHtcbiAgICAgIGNvbnN0IHViID0gVmFsdWVDb25zdGFudHMuVU5BTExPQ0FURURfRElTQlVSU0VNRU5UUztcbiAgICAgIG1lYXN1cmVzVG90YWxzW3ViXSA9IHRoaXMucHJvcHMuYWN0aXZpdHlGdW5kaW5nVG90YWxzLmdldFRvdGFscyh1Yiwge30pO1xuICAgIH1cbiAgICAvLyBPdGhlciBtZWFzdXJlczogXCJUb3RhbCBNVEVGIFByb2plY3Rpb25zXCIuXG4gICAgaWYgKEZlYXR1cmVNYW5hZ2VyLmlzRk1TZXR0aW5nRW5hYmxlZChGZWF0dXJlTWFuYWdlckNvbnN0YW50cy5NVEVGX1BST0pFQ1RJT05TKSkge1xuICAgICAgbWVhc3VyZXNUb3RhbHNbVmFsdWVDb25zdGFudHMuTVRFRl9QUk9KRUNUSU9OU10gPSB0aGlzLnByb3BzLmFjdGl2aXR5RnVuZGluZ1RvdGFscy5nZXRNVEVGVG90YWwoKTtcbiAgICB9XG4gICAgLy8gT3RoZXIgbWVhc3VyZXM6IFwiRGVsaXZlcnkgcmF0ZVwiLlxuICAgIGlmIChGZWF0dXJlTWFuYWdlci5pc0ZNU2V0dGluZ0VuYWJsZWQoRmVhdHVyZU1hbmFnZXJDb25zdGFudHMuQUNUSVZJVFlfREVMSVZFUllfUkFURSkpIHtcbiAgICAgIGNvbnN0IGFjdHVhbENvbW1pdG1lbnRzID0gbWVhc3VyZXNUb3RhbHNbYCR7VmFsdWVDb25zdGFudHMuQUNUVUFMfSAke0FjdGl2aXR5Q29uc3RhbnRzLkNPTU1JVE1FTlRTfWBdO1xuICAgICAgY29uc3QgYWN0dWFsRGlzYnVyc2VtZW50cyA9IG1lYXN1cmVzVG90YWxzW2Ake1ZhbHVlQ29uc3RhbnRzLkFDVFVBTH0gJHtBY3Rpdml0eUNvbnN0YW50cy5ESVNCVVJTRU1FTlRTfWBdO1xuICAgICAgbGV0IHZhbHVlID0gMDtcbiAgICAgIGlmIChhY3R1YWxDb21taXRtZW50cyAmJiBhY3R1YWxEaXNidXJzZW1lbnRzICYmIGFjRW5hYmxlZCAmJiBhZEVuYWJsZWQpIHtcbiAgICAgICAgdmFsdWUgPSAoYWN0dWFsRGlzYnVyc2VtZW50cyAvIGFjdHVhbENvbW1pdG1lbnRzKSAqIDEwMDtcbiAgICAgIH1cbiAgICAgIG1lYXN1cmVzVG90YWxzW1ZhbHVlQ29uc3RhbnRzLkRFTElWRVJZX1JBVEVdID0gdmFsdWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuX2J1aWxkVG90YWxGaWVsZHMobWVhc3VyZXNUb3RhbHMpO1xuICB9XG5cbiAgX2J1aWxkVG90YWxGaWVsZHMobWVhc3VyZXNUb3RhbHMpIHtcbiAgICBjb25zdCB7IHRyYW5zbGF0ZSB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBtZWFzdXJlc09yZGVyID0gW1xuICAgICAgeyB0cm46IFZhbHVlQ29uc3RhbnRzLkFDVFVBTF9DT01NSVRNRU5UUywgdG90YWw6IHRydWUgfSxcbiAgICAgIHsgdHJuOiBWYWx1ZUNvbnN0YW50cy5QTEFOTkVEX0NPTU1JVE1FTlRTLCB0b3RhbDogdHJ1ZSB9LFxuICAgICAgeyB0cm46IFZhbHVlQ29uc3RhbnRzLkFDVFVBTF9ESVNCVVJTRU1FTlRTLCB0b3RhbDogdHJ1ZSB9LFxuICAgICAgeyB0cm46IFZhbHVlQ29uc3RhbnRzLlBMQU5ORURfRElTQlVSU0VNRU5UUywgdG90YWw6IHRydWUgfSxcbiAgICAgIHsgdHJuOiBWYWx1ZUNvbnN0YW50cy5BQ1RVQUxfRVhQRU5ESVRVUkVTLCB0b3RhbDogdHJ1ZSB9LFxuICAgICAgeyB0cm46IFZhbHVlQ29uc3RhbnRzLlVOQUxMT0NBVEVEX0RJU0JVUlNFTUVOVFMsIHRvdGFsOiBmYWxzZSB9LFxuICAgICAgeyB0cm46IFZhbHVlQ29uc3RhbnRzLlBMQU5ORURfRVhQRU5ESVRVUkVTLCB0b3RhbDogdHJ1ZSB9LFxuICAgICAgeyB0cm46IFZhbHVlQ29uc3RhbnRzLk1URUZfUFJPSkVDVElPTlMsIHRvdGFsOiB0cnVlIH0sXG4gICAgICB7IHRybjogVmFsdWVDb25zdGFudHMuREVMSVZFUllfUkFURSwgdG90YWw6IGZhbHNlLCBpc1BlcmNlbnRhZ2U6IHRydWUgfV07XG4gICAgY29uc3QgZnVuZGluZ0luZm9TdW1tYXJ5ID0gW107XG4gICAgbWVhc3VyZXNPcmRlci5mb3JFYWNoKG1lYXN1cmUgPT4ge1xuICAgICAgbGV0IHZhbHVlID0gbWVhc3VyZXNUb3RhbHNbbWVhc3VyZS50cm5dO1xuICAgICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdmFsdWUgPSB0aGlzLnByb3BzLmFjdGl2aXR5RnVuZGluZ1RvdGFscy5mb3JtYXRBbW91bnQodmFsdWUsIG1lYXN1cmUuaXNQZXJjZW50YWdlKTtcbiAgICAgICAgbGV0IHRpdGxlID0gbWVhc3VyZS50cm47XG4gICAgICAgIGlmIChtZWFzdXJlLnRvdGFsKSB7XG4gICAgICAgICAgdGl0bGUgPSBgVG90YWwgJHt0aXRsZX1gO1xuICAgICAgICB9XG4gICAgICAgIHRpdGxlID0gdHJhbnNsYXRlKHRpdGxlKTtcbiAgICAgICAgY29uc3Qga2V5ID0gYFN1bW1hcnktVG90YWwtJHttZWFzdXJlLnRybn1gO1xuICAgICAgICBmdW5kaW5nSW5mb1N1bW1hcnkucHVzaCg8QVBGaWVsZFxuICAgICAgICAgIGtleT17a2V5fSB0aXRsZT17dGl0bGV9IHZhbHVlPXt2YWx1ZX0gc2VwYXJhdG9yPXtmYWxzZX1cbiAgICAgICAgICBmaWVsZE5hbWVDbGFzcz17dGhpcy5wcm9wcy5maWVsZE5hbWVDbGFzc30gZmllbGRWYWx1ZUNsYXNzPXt0aGlzLnByb3BzLmZpZWxkVmFsdWVDbGFzc31cbiAgICAgICAgICB0cmFuc2xhdGU9e3RyYW5zbGF0ZX0gTG9nZ2VyPXt0aGlzLnByb3BzLkxvZ2dlcn0gLz4pO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBmdW5kaW5nSW5mb1N1bW1hcnk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIDxkaXY+e3RoaXMuX2J1aWxkRnVuZGluZ0luZm9ybWF0aW9uKCl9PC9kaXY+O1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNlY3Rpb24oRnVuZGluZ1N1bW1hcnksIHtcbiAgU2VjdGlvblRpdGxlOiAnZnVuZGluZ0luZm9ybWF0aW9uJ1xufSk7XG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBBY3Rpdml0eUNvbnN0YW50cyBmcm9tICcuLi8uLi8uLi9tb2R1bGVzL3V0aWwvQWN0aXZpdHlDb25zdGFudHMnO1xuaW1wb3J0IFZhbHVlQ29uc3RhbnRzIGZyb20gJy4uLy4uLy4uL3V0aWxzL1ZhbHVlQ29uc3RhbnRzJztcbmltcG9ydCBGaWVsZHNNYW5hZ2VyIGZyb20gJy4uLy4uLy4uL21vZHVsZXMvZmllbGQvRmllbGRzTWFuYWdlcic7XG5pbXBvcnQgU2VjdGlvbiBmcm9tICcuL1NlY3Rpb24uanN4JztcblxubGV0IGxvZ2dlciA9IG51bGw7XG5cbi8qKlxuICogSWRlbnRpZmljYXRpb24gc2VjdGlvblxuICogQGF1dGhvciBOYWRlamRhIE1hbmRyZXNjdVxuICovXG5jbGFzcyBBUElkZW50aWZpY2F0aW9uIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBidWlsZFNpbXBsZUZpZWxkOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIGFjdGl2aXR5RmllbGRzTWFuYWdlcjogUHJvcFR5cGVzLmluc3RhbmNlT2YoRmllbGRzTWFuYWdlcikuaXNSZXF1aXJlZCxcbiAgICBhY3Rpdml0eTogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICAgIExvZ2dlcjogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZFxuICB9O1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIGNvbnN0IHsgTG9nZ2VyIH0gPSB0aGlzLnByb3BzO1xuICAgIGxvZ2dlciA9IG5ldyBMb2dnZXIoJ0FQIElkZW50aWZpY2F0aW9uJyk7XG4gICAgbG9nZ2VyLmRlYnVnKCdjb25zdHJ1Y3RvcicpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgYnVpbGRTaW1wbGVGaWVsZCB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBmaWVsZFBhdGhzID0gW0FjdGl2aXR5Q29uc3RhbnRzLlNUQVRVU19SRUFTT04sIEFjdGl2aXR5Q29uc3RhbnRzLlRZUEVfT0ZfQ09PUEVSQVRJT04sXG4gICAgICBBY3Rpdml0eUNvbnN0YW50cy5UWVBFX09GX0lNUExFTUVOVEFUSU9OLCBBY3Rpdml0eUNvbnN0YW50cy5NT0RBTElUSUVTLCBBY3Rpdml0eUNvbnN0YW50cy5PQkpFQ1RJVkUsXG4gICAgICBBY3Rpdml0eUNvbnN0YW50cy5ERVNDUklQVElPTiwgQWN0aXZpdHlDb25zdGFudHMuUFJPSkVDVF9DT01NRU5UUywgQWN0aXZpdHlDb25zdGFudHMuUkVTVUxUUyxcbiAgICAgIEFjdGl2aXR5Q29uc3RhbnRzLkxFU1NPTlNfTEVBUk5FRCwgQWN0aXZpdHlDb25zdGFudHMuUFJPSkVDVF9JTVBBQ1QsIEFjdGl2aXR5Q29uc3RhbnRzLkFDVElWSVRZX1NVTU1BUlksXG4gICAgICBBY3Rpdml0eUNvbnN0YW50cy5DT05ESVRJT05BTElUSUVTLCBBY3Rpdml0eUNvbnN0YW50cy5QUk9KRUNUX01BTkFHRU1FTlQsXG4gICAgICBBY3Rpdml0eUNvbnN0YW50cy5CVURHRVRfQ09ERV9QUk9KRUNUX0lELCBBY3Rpdml0eUNvbnN0YW50cy5BX0NfQ0hBUFRFUiwgQWN0aXZpdHlDb25zdGFudHMuQ1JJU19OVU1CRVIsXG4gICAgICBBY3Rpdml0eUNvbnN0YW50cy5BQ1RJVklUWV9CVURHRVQsIEFjdGl2aXR5Q29uc3RhbnRzLkdPVkVSTk1FTlRfQUdSRUVNRU5UX05VTUJFUixcbiAgICAgIEFjdGl2aXR5Q29uc3RhbnRzLkdPVkVSTk1FTlRfQVBQUk9WQUxfUFJPQ0VEVVJFUywgQWN0aXZpdHlDb25zdGFudHMuSk9JTlRfQ1JJVEVSSUEsXG4gICAgICBBY3Rpdml0eUNvbnN0YW50cy5IVU1BTklUQVJJQU5fQUlEXTtcbiAgICAvLyBTaG93IGJ1ZGdldCBleHRyYXMgZmllbGRzIGxpa2UgbWluaXN0cnlfY29kZSwgZXRjIG9ubHkgd2hlbiBhY3Rpdml0eV9idWRnZXQgaXMgZW5hYmxlZCBhbmQgaGFzIHZhbHVlICdPbiBCdWRnZXQnLlxuICAgIGlmICh0aGlzLnByb3BzLmFjdGl2aXR5RmllbGRzTWFuYWdlci5pc0ZpZWxkUGF0aEVuYWJsZWQoQWN0aXZpdHlDb25zdGFudHMuQUNUSVZJVFlfQlVER0VUKVxuICAgICAgJiYgdGhpcy5wcm9wcy5hY3Rpdml0eVtBY3Rpdml0eUNvbnN0YW50cy5BQ1RJVklUWV9CVURHRVRdXG4gICAgICAmJiB0aGlzLnByb3BzLmFjdGl2aXR5W0FjdGl2aXR5Q29uc3RhbnRzLkFDVElWSVRZX0JVREdFVF0udmFsdWUgPT09IFZhbHVlQ29uc3RhbnRzLk9OX0JVREdFVCkge1xuICAgICAgZmllbGRQYXRocy5wdXNoKEFjdGl2aXR5Q29uc3RhbnRzLklORElSRUNUX09OX0JVREdFVCk7XG4gICAgICBmaWVsZFBhdGhzLnB1c2goQWN0aXZpdHlDb25zdGFudHMuRlkpO1xuICAgICAgZmllbGRQYXRocy5wdXNoKEFjdGl2aXR5Q29uc3RhbnRzLk1JTklTVFJZX0NPREUpO1xuICAgICAgZmllbGRQYXRocy5wdXNoKEFjdGl2aXR5Q29uc3RhbnRzLlBST0pFQ1RfQ09ERSk7XG4gICAgfVxuICAgIGZpZWxkUGF0aHMucHVzaCguLi5bQWN0aXZpdHlDb25zdGFudHMuRklOQU5DSUFMX0lOU1RSVU1FTlQsIEFjdGl2aXR5Q29uc3RhbnRzLklBVElfSURFTlRJRklFUl0pO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICB7ZmllbGRQYXRocy5tYXAoZmllbGRQYXRoID0+IGJ1aWxkU2ltcGxlRmllbGQoZmllbGRQYXRoLCB0cnVlKSl9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNlY3Rpb24oQVBJZGVudGlmaWNhdGlvbiwgeyBTZWN0aW9uVGl0bGU6ICdJZGVudGlmaWNhdGlvbicsXG4gIHVzZUVuY2Fwc3VsYXRlSGVhZGVyOiB0cnVlLFxuICBzSUQ6ICdBUElkZW50aWZpY2F0aW9uJ1xufSk7XG4iLCIvKiogV1MgdmFsaWRhdGlvbiAqKi9cbmNvbnN0IFdTX1ZBTElEQVRJT05fT0ZGID0gJ3ZhbGlkYXRpb25PZmYnO1xuY29uc3QgV1NfVkFMSURBVElPTl9BTExfRURJVCA9ICdhbGxFZGl0cyc7XG5jb25zdCBXU19WQUxJREFUSU9OX05FV19PTkxZID0gJ25ld09ubHknO1xuY29uc3QgV1NfVkFMSURBVElPTl9GSUVMRCA9ICd2YWxpZGF0aW9uJztcbmNvbnN0IENST1NTX1RFQU1fVkFMSURBVElPTiA9ICdpcy1jcm9zcy10ZWFtLXZhbGlkYXRpb24nO1xuY29uc3QgV1NfQUNDRVNTX1RZUEVfTUFOQUdFTUVOVCA9ICdNYW5hZ2VtZW50JztcbmNvbnN0IFdTX0FDQ0VTU19UWVBFX1RFQU0gPSAnVGVhbSc7XG5cbi8qKiBSb2xlcyAoZnJvbSBXb3Jrc3BhY2VNZW1iZXJSb2xlQ29uc3RhbnRzLmphdmEpICoqL1xuY29uc3QgUk9MRV9URUFNX01FTUJFUl9XU19NQU5BR0VSID0gMTtcbmNvbnN0IFJPTEVfVEVBTV9NRU1CRVJfV1NfTUVNQkVSID0gMjtcbmNvbnN0IFJPTEVfVEVBTV9NRU1CRVJfV1NfQVBQUk9WRVIgPSAzO1xuXG4vKiogT3RoZXIgZmllbGRzICoqL1xuY29uc3QgV09SS1NQQUNFX0lEID0gJ3dvcmtzcGFjZS1pZCc7XG5jb25zdCBST0xFX0lEID0gJ3JvbGUtaWQnO1xuY29uc3QgV09SS1NQQUNFX0xFQURfSUQgPSAnd29ya3NwYWNlLWxlYWQtaWQnO1xuY29uc3QgQUNDRVNTX1RZUEUgPSAnYWNjZXNzLXR5cGUnO1xuY29uc3QgSVNfQ09NUFVURUQgPSAnaXMtY29tcHV0ZWQnO1xuY29uc3QgSVNfUFJJVkFURSA9ICdpcy1wcml2YXRlJztcblxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuZnJlZXplKHtcbiAgV1NfVkFMSURBVElPTl9PRkYsXG4gIFdTX1ZBTElEQVRJT05fQUxMX0VESVQsXG4gIFdTX1ZBTElEQVRJT05fTkVXX09OTFksXG4gIFdTX1ZBTElEQVRJT05fRklFTEQsXG4gIENST1NTX1RFQU1fVkFMSURBVElPTixcbiAgV1NfQUNDRVNTX1RZUEVfTUFOQUdFTUVOVCxcbiAgV1NfQUNDRVNTX1RZUEVfVEVBTSxcbiAgUk9MRV9URUFNX01FTUJFUl9XU19NQU5BR0VSLFxuICBST0xFX1RFQU1fTUVNQkVSX1dTX01FTUJFUixcbiAgUk9MRV9URUFNX01FTUJFUl9XU19BUFBST1ZFUixcbiAgV09SS1NQQUNFX0lELFxuICBST0xFX0lELFxuICBXT1JLU1BBQ0VfTEVBRF9JRCxcbiAgQUNDRVNTX1RZUEUsXG4gIElTX0NPTVBVVEVELFxuICBJU19QUklWQVRFLFxufSk7XG4iLCIvKiBVc2VyIGNvbnN0YW50cyAqL1xuY29uc3QgRklSU1RfTkFNRSA9ICdmaXJzdC1uYW1lJztcbmNvbnN0IExBU1RfTkFNRSA9ICdsYXN0LW5hbWUnO1xuY29uc3QgRU1BSUwgPSAnZW1haWwnO1xuXG4vKiBUZWFtIG1lbWJlciBjb25zdGFudHMgKi9cbmNvbnN0IFRFQU1fTUVNQkVSX1VTRVJfSUQgPSAndXNlci1pZCc7XG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmZyZWV6ZSh7XG4gIEZJUlNUX05BTUUsXG4gIExBU1RfTkFNRSxcbiAgRU1BSUwsXG4gIFRFQU1fTUVNQkVSX1VTRVJfSUQsXG59KTtcblxuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgQWN0aXZpdHlDb25zdGFudHMgZnJvbSAnLi4vLi4vLi4vbW9kdWxlcy91dGlsL0FjdGl2aXR5Q29uc3RhbnRzJztcbmltcG9ydCBGaWVsZHNNYW5hZ2VyIGZyb20gJy4uLy4uLy4uL21vZHVsZXMvZmllbGQvRmllbGRzTWFuYWdlcic7XG5pbXBvcnQgUG9zc2libGVWYWx1ZXNNYW5hZ2VyIGZyb20gJy4uLy4uLy4uL21vZHVsZXMvZmllbGQvUG9zc2libGVWYWx1ZXNNYW5hZ2VyJztcbmltcG9ydCBBUEZpZWxkIGZyb20gJy4uL2NvbXBvbmVudHMvQVBGaWVsZC5qc3gnO1xuaW1wb3J0IFNlY3Rpb24gZnJvbSAnLi9TZWN0aW9uLmpzeCc7XG5pbXBvcnQgV29ya3NwYWNlQ29uc3RhbnRzIGZyb20gJy4uLy4uLy4uL3V0aWxzL2NvbnN0YW50cy9Xb3Jrc3BhY2VDb25zdGFudHMnO1xuaW1wb3J0IFVzZXJDb25zdGFudHMgZnJvbSAnLi4vLi4vLi4vdXRpbHMvY29uc3RhbnRzL1VzZXJDb25zdGFudHMnO1xuXG5sZXQgbG9nZ2VyID0gbnVsbDtcblxuLyoqXG4gKiBBZGRpdGlvbmFsIEluZm8gc3VtbWFyeSBzZWN0aW9uXG4gKiBAYXV0aG9yIE5hZGVqZGEgTWFuZHJlY3N1XG4gKi9cbmNsYXNzIEFkZGl0aW9uYWxJbmZvIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBhY3Rpdml0eTogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICAgIGFjdGl2aXR5V29ya3NwYWNlOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gICAgYWN0aXZpdHlXU01hbmFnZXI6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgICBidWlsZFNpbXBsZUZpZWxkOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIGZpZWxkTmFtZUNsYXNzOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGZpZWxkVmFsdWVDbGFzczogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBhY3Rpdml0eUZpZWxkc01hbmFnZXI6IFByb3BUeXBlcy5pbnN0YW5jZU9mKEZpZWxkc01hbmFnZXIpLmlzUmVxdWlyZWQsXG4gICAgTG9nZ2VyOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIHRyYW5zbGF0ZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZFxuICB9O1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIGNvbnN0IHsgTG9nZ2VyIH0gPSB0aGlzLnByb3BzO1xuICAgIGxvZ2dlciA9IG5ldyBMb2dnZXIoJ0FQIEFkZGl0aW9uYWwgaW5mbycpO1xuICAgIGxvZ2dlci5kZWJ1ZygnY29uc3RydWN0b3InKTtcbiAgfVxuXG4gIF9nZXRXb3Jrc3BhY2VMZWFkRGF0YSgpIHtcbiAgICBjb25zdCB7IGFjdGl2aXR5V1NNYW5hZ2VyIH0gPSB0aGlzLnByb3BzO1xuICAgIGlmICghYWN0aXZpdHlXU01hbmFnZXIpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gYCR7YWN0aXZpdHlXU01hbmFnZXJbVXNlckNvbnN0YW50cy5GSVJTVF9OQU1FXX0gJHthY3Rpdml0eVdTTWFuYWdlcltVc2VyQ29uc3RhbnRzLkxBU1RfTkFNRV19ICR7YWN0aXZpdHlXU01hbmFnZXJbVXNlckNvbnN0YW50cy5FTUFJTF19YDtcbiAgfVxuXG4gIF9idWlsZEFkZGl0aW9uYWxJbmZvKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIHRyYW5zbGF0ZSwgYWN0aXZpdHlXb3Jrc3BhY2UsIGFjdGl2aXR5RmllbGRzTWFuYWdlciwgYnVpbGRTaW1wbGVGaWVsZCxcbiAgICAgIGZpZWxkTmFtZUNsYXNzLCBmaWVsZFZhbHVlQ2xhc3MsIGFjdGl2aXR5LCBMb2dnZXJcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBhZGRpdGlvbmFsSW5mbyA9IFtdO1xuICAgIGNvbnN0IHRlYW1OYW1lID0gYWN0aXZpdHlGaWVsZHNNYW5hZ2VyLmdldFZhbHVlKGFjdGl2aXR5LCBBY3Rpdml0eUNvbnN0YW50cy5URUFNLFxuICAgICAgUG9zc2libGVWYWx1ZXNNYW5hZ2VyLmdldE9wdGlvblRyYW5zbGF0aW9uKTtcbiAgICAvLyBubyBuZWVkIHRvIGV4cG9ydCByZXBlYXRpbmcgdHJhbnNsYXRpb24gZm9yIHRoZSBhY2Nlc3MgdHlwZSB0aHJvdWdoIHdvcmtzcGFjZXMgRVBcbiAgICBjb25zdCBhY2Nlc3NUeXBlID0gdHJhbnNsYXRlKGFjdGl2aXR5V29ya3NwYWNlW1dvcmtzcGFjZUNvbnN0YW50cy5BQ0NFU1NfVFlQRV0pO1xuICAgIGNvbnN0IGlzQ29tcHV0ZWRUZWFtID0gYWN0aXZpdHlXb3Jrc3BhY2VbV29ya3NwYWNlQ29uc3RhbnRzLklTX0NPTVBVVEVEXSA9PT0gdHJ1ZSA/IHRyYW5zbGF0ZSgnWWVzJykgOiB0cmFuc2xhdGUoJ05vJyk7XG5cbiAgICAvLyBUT0RPOiB0aGUgcmlnaHQgdmFsdWUgYXMgZGVmaW5lZCBpbiBBTVAtMjU0MDMgd2lsbCBiZSBzaG93biBhZnRlciBBTVAtMjYyOTUuXG4gICAgYWRkaXRpb25hbEluZm8ucHVzaChidWlsZFNpbXBsZUZpZWxkKEFjdGl2aXR5Q29uc3RhbnRzLkNSRUFURURfQlksIHRydWUpKTtcbiAgICBhZGRpdGlvbmFsSW5mby5wdXNoKGJ1aWxkU2ltcGxlRmllbGQoQWN0aXZpdHlDb25zdGFudHMuQ1JFQVRFRF9PTiwgdHJ1ZSkpO1xuICAgIGFkZGl0aW9uYWxJbmZvLnB1c2goYnVpbGRTaW1wbGVGaWVsZChBY3Rpdml0eUNvbnN0YW50cy5NT0RJRklFRF9CWSwgdHJ1ZSkpO1xuICAgIGFkZGl0aW9uYWxJbmZvLnB1c2goYnVpbGRTaW1wbGVGaWVsZChBY3Rpdml0eUNvbnN0YW50cy5NT0RJRklFRF9PTiwgdHJ1ZSkpO1xuICAgIGFkZGl0aW9uYWxJbmZvLnB1c2goQVBGaWVsZC5pbnN0YW5jZSgnY3JlYXRlZEluV29ya3NwYWNlJywgYCR7dGVhbU5hbWV9IC0gJHthY2Nlc3NUeXBlfWAsXG4gICAgICBmYWxzZSwgZmFsc2UsIGZpZWxkTmFtZUNsYXNzLCBmaWVsZFZhbHVlQ2xhc3MsIHRyYW5zbGF0ZSwgTG9nZ2VyKSk7XG5cbiAgICBhZGRpdGlvbmFsSW5mby5wdXNoKEFQRmllbGQuaW5zdGFuY2UoJ3dvcmtzcGFjZU1hbmFnZXInLCB0aGlzLl9nZXRXb3Jrc3BhY2VMZWFkRGF0YSgpLFxuICAgICAgZmFsc2UsIGZhbHNlLCBmaWVsZE5hbWVDbGFzcywgZmllbGRWYWx1ZUNsYXNzLCB0cmFuc2xhdGUsIExvZ2dlcikpO1xuXG4gICAgYWRkaXRpb25hbEluZm8ucHVzaChBUEZpZWxkLmluc3RhbmNlKCdjb21wdXRhdGlvbicsIGlzQ29tcHV0ZWRUZWFtLFxuICAgICAgZmFsc2UsIGZhbHNlLCBmaWVsZE5hbWVDbGFzcywgZmllbGRWYWx1ZUNsYXNzLCB0cmFuc2xhdGUsIExvZ2dlcikpO1xuXG4gICAgcmV0dXJuIGFkZGl0aW9uYWxJbmZvO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiA8ZGl2Pnt0aGlzLl9idWlsZEFkZGl0aW9uYWxJbmZvKCl9PC9kaXY+O1xuICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2VjdGlvbihBZGRpdGlvbmFsSW5mbywge1xuICBTZWN0aW9uVGl0bGU6ICdhZGRpdGlvbmFsSW5mbydcbn0pO1xuIiwiLy8gRGlzYWJsZSBydWxlIGJlY2F1c2UgaXQgZmFpbHMgd2l0aCBkZXN0cnVjdGluZyBzeW50YXguXG4vKiBlc2xpbnQgXCJpbXBvcnQvcHJlZmVyLWRlZmF1bHQtZXhwb3J0XCI6IDAqL1xuXG5jb25zdCBXT1JLU1BBQ0VTX0dST1VQUyA9IFtcbiAgeyB0eXBlOiAnRG9ub3InIH0sXG4gIHsgdHlwZTogJ0dvdmVybm1lbnQnIH0sXG4gIHsgdHlwZTogJ0xpbmUgTWluaXN0cmllcycgfSxcbiAgeyB0eXBlOiAnT3RoZXInIH1cbl07XG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmZyZWV6ZSh7XG4gIFdPUktTUEFDRVNfR1JPVVBTXG59KTtcbiIsImltcG9ydCBUZXN0QVBGaWVsZCBmcm9tICcuL2FjdGl2aXR5UHJldmlldy9jb21wb25lbnRzL1Rlc3RBUEZpZWxkJztcbmltcG9ydCBUZXN0aW5nU2VjdGlvbiBmcm9tICcuL2FjdGl2aXR5UHJldmlldy9jb21wb25lbnRzL1Rlc3RpbmdTZWN0aW9uJztcbmltcG9ydCBDb25zdGFudHMgZnJvbSAnLi91dGlscy9Db25zdGFudHMnO1xuaW1wb3J0IEFjdGl2aXR5Q29uc3RhbnRzIGZyb20gJy4vbW9kdWxlcy91dGlsL0FjdGl2aXR5Q29uc3RhbnRzJztcbmltcG9ydCBGZWF0dXJlTWFuYWdlckNvbnN0YW50cyBmcm9tICcuL21vZHVsZXMvdXRpbC9GZWF0dXJlTWFuYWdlckNvbnN0YW50cyc7XG5pbXBvcnQgRXJyb3JDb25zdGFudHMgZnJvbSAnLi91dGlscy9jb25zdGFudHMvRXJyb3JDb25zdGFudHMnO1xuaW1wb3J0IEZpZWxkc01hbmFnZXIgZnJvbSAnLi9tb2R1bGVzL2ZpZWxkL0ZpZWxkc01hbmFnZXInO1xuaW1wb3J0IEZpZWxkUGF0aENvbnN0YW50cyBmcm9tICcuL3V0aWxzL0ZpZWxkUGF0aENvbnN0YW50cyc7XG5pbXBvcnQgVmFsdWVDb25zdGFudHMgZnJvbSAnLi91dGlscy9WYWx1ZUNvbnN0YW50cyc7XG5pbXBvcnQgQ3VycmVuY3lSYXRlc01hbmFnZXIgZnJvbSAnLi9tb2R1bGVzL3V0aWwvQ3VycmVuY3lSYXRlc01hbmFnZXInO1xuaW1wb3J0IFBvc3NpYmxlVmFsdWVzTWFuYWdlciBmcm9tICcuL21vZHVsZXMvZmllbGQvUG9zc2libGVWYWx1ZXNNYW5hZ2VyJztcbmltcG9ydCBGZWF0dXJlTWFuYWdlciBmcm9tICcuL21vZHVsZXMvdXRpbC9GZWF0dXJlTWFuYWdlcic7XG5pbXBvcnQgQVBMYWJlbCBmcm9tICcuL2FjdGl2aXR5L3ByZXZpZXcvY29tcG9uZW50cy9BUExhYmVsLmpzeCc7XG5pbXBvcnQgQVBGaWVsZCBmcm9tICcuL2FjdGl2aXR5L3ByZXZpZXcvY29tcG9uZW50cy9BUEZpZWxkLmpzeCc7XG5pbXBvcnQgVGFibGlmeSBmcm9tICcuL2FjdGl2aXR5L3ByZXZpZXcvY29tcG9uZW50cy9UYWJsaWZ5LmpzeCc7XG5pbXBvcnQgQVBQZXJjZW50YWdlRmllbGQgZnJvbSAnLi9hY3Rpdml0eS9wcmV2aWV3L2NvbXBvbmVudHMvQVBQZXJjZW50YWdlRmllbGQuanN4JztcbmltcG9ydCBBUFBlcmNlbnRhZ2VMaXN0IGZyb20gJy4vYWN0aXZpdHkvcHJldmlldy9jb21wb25lbnRzL0FQUGVyY2VudGFnZUxpc3QuanN4JztcbmltcG9ydCBTZWN0aW9uIGZyb20gJy4vYWN0aXZpdHkvcHJldmlldy9zZWN0aW9ucy9TZWN0aW9uLmpzeCc7XG5pbXBvcnQgRnVuZGluZ1N1bW1hcnkgZnJvbSAnLi9hY3Rpdml0eS9wcmV2aWV3L3NlY3Rpb25zL0Z1bmRpbmdTdW1tYXJ5LmpzeCc7XG5pbXBvcnQgQVBJZGVudGlmaWNhdGlvbiBmcm9tICcuL2FjdGl2aXR5L3ByZXZpZXcvc2VjdGlvbnMvQVBJZGVudGlmaWNhdGlvbi5qc3gnO1xuaW1wb3J0IFVJVXRpbHMgZnJvbSAnLi91dGlscy9VSVV0aWxzJztcbmltcG9ydCBBZGRpdGlvbmFsSW5mbyBmcm9tICcuL2FjdGl2aXR5L3ByZXZpZXcvc2VjdGlvbnMvQWRkaXRpb25hbEluZm8uanN4JztcbmltcG9ydCBVc2VyQ29uc3RhbnRzIGZyb20gJy4vdXRpbHMvY29uc3RhbnRzL1VzZXJDb25zdGFudHMnO1xuaW1wb3J0IFdvcmtzcGFjZUdyb3Vwc0NvbnN0YW50cyBmcm9tICcuL3V0aWxzL2NvbnN0YW50cy9Xb3Jrc3BhY2VHcm91cHNDb25zdGFudHMnO1xuaW1wb3J0IFdvcmtzcGFjZUNvbnN0YW50cyBmcm9tICcuL3V0aWxzL2NvbnN0YW50cy9Xb3Jrc3BhY2VDb25zdGFudHMnO1xuXG5leHBvcnQge1xuICBUZXN0QVBGaWVsZCwgVGVzdGluZ1NlY3Rpb24sIENvbnN0YW50cywgQWN0aXZpdHlDb25zdGFudHMsIEZlYXR1cmVNYW5hZ2VyQ29uc3RhbnRzLCBFcnJvckNvbnN0YW50cyxcbiAgQ3VycmVuY3lSYXRlc01hbmFnZXIsIEZpZWxkc01hbmFnZXIsIEZpZWxkUGF0aENvbnN0YW50cywgVmFsdWVDb25zdGFudHMsIFBvc3NpYmxlVmFsdWVzTWFuYWdlciwgRmVhdHVyZU1hbmFnZXIsXG4gIEFQTGFiZWwsIEFQRmllbGQsIFRhYmxpZnksIEFQUGVyY2VudGFnZUZpZWxkLCBBUFBlcmNlbnRhZ2VMaXN0LCBVSVV0aWxzLCBTZWN0aW9uLCBGdW5kaW5nU3VtbWFyeSwgQWRkaXRpb25hbEluZm8sXG4gIFVzZXJDb25zdGFudHMsIFdvcmtzcGFjZUNvbnN0YW50cywgV29ya3NwYWNlR3JvdXBzQ29uc3RhbnRzLCBBUElkZW50aWZpY2F0aW9uXG59O1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIFRlc3RBUEZpZWxkLFxuICBUZXN0aW5nU2VjdGlvbixcbiAgQ29uc3RhbnRzLFxuICBBY3Rpdml0eUNvbnN0YW50cyxcbiAgRmVhdHVyZU1hbmFnZXJDb25zdGFudHMsXG4gIEVycm9yQ29uc3RhbnRzLFxuICBDdXJyZW5jeVJhdGVzTWFuYWdlcixcbiAgRmllbGRzTWFuYWdlcixcbiAgRmllbGRQYXRoQ29uc3RhbnRzLFxuICBWYWx1ZUNvbnN0YW50cyxcbiAgRmVhdHVyZU1hbmFnZXIsXG4gIEFQTGFiZWwsXG4gIEFQRmllbGQsXG4gIFRhYmxpZnksXG4gIEFQUGVyY2VudGFnZUZpZWxkLFxuICBBUFBlcmNlbnRhZ2VMaXN0LFxuICBTZWN0aW9uLFxuICBGdW5kaW5nU3VtbWFyeSxcbiAgVUlVdGlscyxcbiAgQWRkaXRpb25hbEluZm8sXG4gIFVzZXJDb25zdGFudHMsXG4gIFdvcmtzcGFjZUNvbnN0YW50cyxcbiAgV29ya3NwYWNlR3JvdXBzQ29uc3RhbnRzLFxuICBBUElkZW50aWZpY2F0aW9uLFxufTtcbiJdLCJuYW1lcyI6WyJUZXN0QVBGaWVsZCIsInRybkxhYmVsIiwidmFsdWUiLCJpbmxpbmUiLCJzZXBhcmF0b3IiLCJuYW1lQ2xhc3MiLCJ2YWx1ZUNsYXNzIiwicHJvcHMiLCJ0cmFuc2xhdGUiLCJhbXBMb2dnZXIiLCJsb2ciLCJ1c2VTZXBhcmF0b3IiLCJkaXNwbGF5Q2xhc3MiLCJmaWVsZENsYXNzIiwic3R5bGVzIiwiYmxvY2siLCJjbGFzc05hbWVzIiwiZmllbGRWYWx1ZUNsYXNzIiwiZGlzcGxheVZhbHVlIiwiQXJyYXkiLCJpc0FycmF5IiwiT2JqZWN0IiwiZm9yRWFjaCIsInB1c2giLCJ2Iiwic29ydCIsImpvaW4iLCJTdHJpbmciLCJ1c2VJbm5lckhUTUwiLCJfX2h0bWwiLCJmaWVsZE5hbWVDbGFzcyIsInRpdGxlIiwiX2dldFZhbHVlIiwiQ29tcG9uZW50IiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwiYW55IiwiYm9vbCIsIm9iamVjdCIsImlzUmVxdWlyZWQiLCJmdW5jIiwiVGVzdGluZ1NlY3Rpb24iLCJCQVNFX1JFU1RfVVJMIiwiQ09OTkVDVElPTl9USU1FT1VUIiwiQ09OTkVDVElPTl9GT1JDRURfVElNRU9VVCIsIlRJTUVPVVRfQ0hFQ0tfSU5URVJWQUwiLCJNQVhfUkVUUllfQVRFTVBUUyIsIkVSUk9SU19UT19SRVRSWSIsIkVSUk9SU19OT19BTVBfU0VSVkVSIiwiQ09OTkVDVElWSVRZX0NIRUNLX0lOVEVSVkFMIiwiV09SS1NQQUNFX1VSTCIsIkxPR0lOX1VSTCIsIkRFU0tUT1BfVVJMIiwiREVTS1RPUF9DVVJSRU5UX1VSTCIsIlNZTkNVUF9SRURJUkVDVF9VUkwiLCJTWU5DVVBfSElTVE9SWV9UQVJHRVQiLCJTWU5DVVBfU1VNTUFSWV9VUkwiLCJBQ1RJVklUWV9QUkVWSUVXX1VSTCIsIkFDVElWSVRZX0VESVRfVVJMIiwiVVBEQVRFX1VSTCIsIlNFVFVQX1VSTCIsIlNFVFRJTkdTX1VSTCIsIkNPTExFQ1RJT05fVVNFUlMiLCJDT0xMRUNUSU9OX1dPUktQQUNFUyIsIkNPTExFQ1RJT05fVEVBTU1FTUJFUlMiLCJDT0xMRUNUSU9OX0NMSUVOVF9TRVRUSU5HUyIsIkNPTExFQ1RJT05fR0xPQkFMX1NFVFRJTkdTIiwiQ09MTEVDVElPTl9BQ1RJVklUSUVTIiwiQ09MTEVDVElPTl9GSUVMRFMiLCJDT0xMRUNUSU9OX1BPU1NJQkxFX1ZBTFVFUyIsIkNPTExFQ1RJT05fU1lOQ1VQX0xPRyIsIkNPTExFQ1RJT05fTEFOR1MiLCJDT0xMRUNUSU9OX1dTX1NFVFRJTkdTIiwiQ09MTEVDVElPTl9DVVJSRU5DWV9SQVRFUyIsIkNPTExFQ1RJT05fRkVBVFVSRV9NQU5BR0VSIiwiQ09MTEVDVElPTl9DT05UQUNUUyIsIkNPTExFQ1RJT05fUkVTT1VSQ0VTIiwiQ09MTEVDVElPTl9SRVBPU0lUT1JZIiwiQ09MTEVDVElPTl9HQVpFVFRFRVIiLCJDT0xMRUNUSU9OX0NBTEVOREFSUyIsIkNPTExFQ1RJT05fQ0hBTkdFU0VUUyIsIkdBWkVUVEVFUl9ESVNUQU5DRV9ESVZJREUiLCJEQl9GSUxFX1BSRUZJWCIsIkRCX0ZJTEVfRVhURU5TSU9OIiwiREJfQ09NTU9OX0RBVEFTVE9SRV9PUFRJT05TIiwiYXV0b2xvYWQiLCJjb3JydXB0QWxlcnRUaHJlc2hvbGQiLCJEQl9BVVRPQ09NUEFDVF9JTlRFUlZBTF9NSUxJU0VDT05EUyIsIkRCX0RFRkFVTFRfUVVFUllfTElNSVQiLCJMQU5HVUFHRV9FTkdMSVNIIiwiRlNfTE9DQUxFU19ESVJFQ1RPUlkiLCJMQU5HVUFHRV9NQVNURVJfVFJBTlNMQVRJT05TX0ZJTEUiLCJMQU5HVUFHRV9UUkFOU0xBVElPTlNfRklMRSIsIkxBTkdVQUdFX05FV19UUkFOU0xBVElPTlNfTVVTVF9TWU5DIiwiQVNBUl9ESVIiLCJBUFBfRElSRUNUT1JZIiwiVEVTVF9ESVJFQ1RPUlkiLCJTVEFUSUNfRElSIiwiSU1BR0VTX0RJUiIsIkRPQ19JQ09OUyIsIkRCX1NUQVRJQ19ESVIiLCJNSUdSQVRJT05TX0RJUiIsIkhBU0hfSVRFUkFUSU9OUyIsIkRJR0VTVF9BTEdPUklUSE1fU0hBMSIsIkRJR0VTVF9BTEdPUklUSE1fU0hBMjU2IiwiQUNUSVZJVFlfRURJVCIsIkFDVElWSVRZX1ZJRVciLCJTWU5DVVBfRk9SQ0VfREFZUyIsIlNZTkNVUF9CRVNUX0JFRk9SRV9EQVlTIiwiU1lOQ1VQX05PX0RBVEUiLCJTWU5DVVBfVFlQRV9UUkFOU0xBVElPTlMiLCJTWU5DVVBfVFlQRV9VU0VSUyIsIlNZTkNVUF9UWVBFX0FTU0VUUyIsIlNZTkNVUF9UWVBFX1dPUktTUEFDRVMiLCJTWU5DVVBfVFlQRV9HUyIsIlNZTkNVUF9UWVBFX0VYQ0hBTkdFX1JBVEVTIiwiU1lOQ1VQX1RZUEVfRkVBVFVSRV9NQU5BR0VSIiwiU1lOQ1VQX1RZUEVfV09SS1NQQUNFX01FTUJFUlMiLCJTWU5DVVBfVFlQRV9BTExfRklFTERTIiwiU1lOQ1VQX1RZUEVfQUNUSVZJVElFU19QVUxMIiwiU1lOQ1VQX1RZUEVfQUNUSVZJVElFU19QVVNIIiwiU1lOQ1VQX1RZUEVfQUNUSVZJVFlfRklFTERTIiwiU1lOQ1VQX1RZUEVfQUNUSVZJVFlfRklFTERTX1NUUlVDVFVSQUxfQ0hBTkdFUyIsIlNZTkNVUF9UWVBFX0NPTlRBQ1RTX1BVTEwiLCJTWU5DVVBfVFlQRV9DT05UQUNUU19QVVNIIiwiU1lOQ1VQX1RZUEVfQUNUSVZJVFlfUE9TU0lCTEVfVkFMVUVTIiwiU1lOQ1VQX1RZUEVfQ09OVEFDVF9GSUVMRFMiLCJTWU5DVVBfVFlQRV9DT05UQUNUX0ZJRUxEU19TVFJVQ1RVUkFMX0NIQU5HRVMiLCJTWU5DVVBfVFlQRV9DT05UQUNUX1BPU1NJQkxFX1ZBTFVFUyIsIlNZTkNVUF9UWVBFX1JFU09VUkNFU19QVUxMIiwiU1lOQ1VQX1RZUEVfUkVTT1VSQ0VTX1BVU0giLCJTWU5DVVBfVFlQRV9SRVNPVVJDRV9GSUVMRFMiLCJTWU5DVVBfVFlQRV9SRVNPVVJDRV9GSUVMRFNfU1RSVUNUVVJBTF9DSEFOR0VTIiwiU1lOQ1VQX1RZUEVfUkVTT1VSQ0VfUE9TU0lCTEVfVkFMVUVTIiwiU1lOQ1VQX1RZUEVfQ09NTU9OX1BPU1NJQkxFX1ZBTFVFUyIsIlNZTkNVUF9UWVBFX1dPUktTUEFDRV9TRVRUSU5HUyIsIlNZTkNVUF9UWVBFX01BUF9USUxFUyIsIlNZTkNVUF9UWVBFX0dBWkVUVEVFUiIsIlNZTkNVUF9UWVBFX0NBTEVOREFSUyIsIlNZTkNVUF9TVEFUVVNfU1VDQ0VTUyIsIlNZTkNVUF9TVEFUVVNfRkFJTCIsIlNZTkNVUF9TVEFUVVNfUEFSVElBTCIsIlNZTkNVUF9TVEFUVVNfQ0FOQ0VMRUQiLCJTWU5DVVBfU1lOQ19SRVFVRVNURURfQVQiLCJTWU5DVVBfU1lOQ19SRVFVRVNURURfQlkiLCJTWU5DVVBfREFURVRJTUVfRklFTEQiLCJTWU5DVVBfRElGRl9MRUZUT1ZFUiIsIlNZTkNVUF9ERVBFTkRFTkNZX0NIRUNLX0lOVEVSVkFMIiwiU1lOQ1VQX0RFVEFJTFNfU1lOQ0VEIiwiU1lOQ1VQX0RFVEFJTFNfVU5TWU5DRUQiLCJTWU5DVVBfUkVTT1VSQ0VfUFVMTF9CQVRDSF9TSVpFIiwiU1lOQ1VQX0FDVElWSVRJRVNfUFVMTF9CQVRDSF9TSVpFIiwiU1lOQ1VQX0NPTlRBQ1RTX1BVTExfQkFUQ0hfU0laRSIsIkFDVElWSVRZX1NUQVRVU19EUkFGVCIsIkFDVElWSVRZX1NUQVRVU19VTlZBTElEQVRFRCIsIkFDVElWSVRZX1NUQVRVU19WQUxJREFURUQiLCJDVVJSRU5DWV9IT1VSIiwiREVGQVVMVF9DVVJSRU5DWSIsIlJBVEVfU0FNRV9DVVJSRU5DWSIsIlJBVEVfQ1VSUkVOQ1lfTk9UX0ZPVU5EIiwiQ1VSUkVOQ1lfUEFJUiIsIlZFUlNJT05fUEFUVEVSTiIsIlZFUlNJT05fUEFUVEVSTl9HUk9VUFNfVE9fRVhUUkFDVCIsIkFNUF9DT1VOVFJZX0xPR08iLCJBU1NFVFNfRElSRUNUT1JZIiwiQkFTRV82NF9QTkdfUFJFRklYIiwiVFJBTlNQQVJFTlRfRkxBRyIsIkhFTFBfUERGX0ZJTEVOQU1FIiwiSEVMUF9ESVIiLCJFTkRTX1dJVEhfUFVOQ1RVQVRJT05fUkVHRVgiLCJNQVBfVElMRVNfRElSIiwiVElMRVNfWklQX0ZJTEUiLCJNQVBfTUFSS0VSX0lNQUdFIiwiTUFQX01BUktFUl9TSEFET1ciLCJNQVBfTUFSS0VSX0NJUkNMRV9SRUQiLCJNQVBfTUFSS0VSX0NJUkNMRV9HUkVFTiIsIlBPTFlHT05fQkFTRV9DT0xPUiIsIkRHX0NPTVBBTllfTkFNRSIsIkRHX0FERFJFU1NfMSIsIkRHX0FERFJFU1NfMiIsIkRHX0NPTlRBQ1RfSU5GTyIsIkxPR19ESVIiLCJMT0dfRklMRV9OQU1FIiwiTE9HX0ZJTEVfRVhURU5TSU9OIiwiTUVTU0FHRV9USU1FT1VUIiwiTUVTU0FHRV9ESVNBUFBFQVJfVElNRU9VVCIsIk1FU1NBR0VfQ0hFQ0tfSU5URVJWQUwiLCJNRVNTQUdFX0FOSU1BVElPTl9EVVJBVElPTiIsIklOVEVSTkFMX0RBVEVfRk9STUFUIiwiTUlOX1NVUFBPUlRFRF9ZRUFSIiwiTUFYX1NVUFBPUlRFRF9ZRUFSIiwiVVBEQVRFU19ESVIiLCJDT05URU5UX0RJU1BPU0lUSU9OX0hFQURFUiIsIlVQREFURV9UTVBfRklMRSIsIk9USEVSX0lEIiwiTlJfU1lOQ19ISVNUT1JZX0VOVFJJRVMiLCJOUl9MT0dfRklMRVMiLCJPTERfU1lOQ19MT0dTX0RVUkFUSU9OX0lTT184NjAxIiwiTlJfT0xEX1NZTkNfTE9HU19UT19LRUVQX01JTklNVU0iLCJNQVNURVJfQlJBTkNIIiwiREVWRUxPUF9CUkFOQ0giLCJSRUxFQVNFX0JSQU5DSF9SRUdFWCIsIlJFTEVBU0VfQlJBTkNIRVMiLCJESVNBQkxFX0NIQU5HRUxPR1MiLCJtb2R1bGUiLCJmcmVlemUiLCJQVUJMSUNfVklFV19DSEFOR0VfUEFTU1dPUkQiLCJQVUJMSUNfVklFV19UUk9VQkxFX1NJR05fSU4iLCJBQ1RJVklUWV9ERUxJVkVSWV9SQVRFIiwiQUNUSVZJVFlfUFJPSkVDVF9JRF9BTkRfUExBTk5JTkciLCJBQ1RJVklUWV9EVVJBVElPTl9PRl9QUk9KRUNUIiwiQUNUSVZJVFlfVEVBTV9MRUFERVIiLCJBQ1RJVklUWV9TQU1FX0FTX1BST1BPU0VEX1NUQVJUX0RBVEUiLCJBQ1RJVklUWV9TQU1FX0FTX1BST1BPU0VEX0FQUFJPVkFMX0RBVEUiLCJBQ1RJVklUWV9JREVOVElGSUNBVElPTiIsIkFDVElWSVRZX0xBU1RfVVBEQVRFRF9CWSIsIkFDVElWSVRZX0xBU1RfVVBEQVRFRF9PTiIsIkFDVElWSVRZX0ZVTkRJTkciLCJBRl9GVU5ESU5HX0ZVTkRJTkdHUk9VUF9GVU5ESU5HSVRFTSIsIkFDVElWSVRZX1NFQ1RPUlMiLCJBQ1RJVklUWV9QUklNQVJZX1NFQ1RPUlMiLCJBQ1RJVklUWV9TRUNPTkRBUllfU0VDVE9SUyIsIkFDVElWSVRZX1NUUlVDVFVSRVMiLCJBQ1RJVklUWV9TVFJVQ1RVUkVTX0FERF9TVFJVQ1RVUkUiLCJBQ1RJVklUWV9PUkdBTklaQVRJT05TIiwiQUNUSVZJVFlfT1JHQU5JWkFUSU9OU19ET05PUl9PUkdBTklaQVRJT04iLCJBQ1RJVklUWV9PUkdBTklaQVRJT05TX0JFTkVGSUNJQVJZX0FHRU5DWSIsIkFDVElWSVRZX09SR0FOSVpBVElPTlNfQ09OVFJBQ1RJTkdfQUdFTkNZIiwiQUNUSVZJVFlfT1JHQU5JWkFUSU9OU19FWEVDVVRJTkdfQUdFTkNZIiwiQUNUSVZJVFlfT1JHQU5JWkFUSU9OU19JTVBMRU1FTlRJTkdfQUdFTkNZIiwiQUNUSVZJVFlfT1JHQU5JWkFUSU9OU19SRUdJT05BTF9HUk9VUCIsIkFDVElWSVRZX09SR0FOSVpBVElPTlNfUkVMQVRFRF9HT1ZFUk5NRU5UX09SR0FOSVpBVElPTiIsIkFDVElWSVRZX09SR0FOSVpBVElPTlNfU0VDVE9SX0dST1VQIiwiQUREX0ZVTkRJTkdfQVVUTyIsIkFDVElWSVRZX09SR0FOSVpBVElPTlNfQkVORUZJQ0lBUllfQUdFTkNZX0FERF9GVU5ESU5HX0FVVE8iLCJBQ1RJVklUWV9PUkdBTklaQVRJT05TX0NPTlRSQUNUSU5HX0FHRU5DWV9BRERfRlVORElOR19BVVRPIiwiQUNUSVZJVFlfT1JHQU5JWkFUSU9OU19ET05PUl9PUkdBTklaQVRJT05fQUREX0ZVTkRJTkdfQVVUTyIsIkFDVElWSVRZX09SR0FOSVpBVElPTlNfRVhFQ1VUSU5HX0FHRU5DWV9BRERfRlVORElOR19BVVRPIiwiQUNUSVZJVFlfT1JHQU5JWkFUSU9OU19JTVBMRU1FTlRJTkdfQUdFTkNZX0FERF9GVU5ESU5HX0FVVE8iLCJBQ1RJVklUWV9PUkdBTklaQVRJT05TX1JFR0lPTkFMX0dST1VQX0FERF9GVU5ESU5HX0FVVE8iLCJBQ1RJVklUWV9PUkdBTklaQVRJT05TX1JFU1BPTlNJQkxFX09SR0FOSVpBVElPTl9BRERfRlVORElOR19BVVRPIiwiQUNUSVZJVFlfT1JHQU5JWkFUSU9OU19TRUNUT1JfR1JPVVBfQUREX0ZVTkRJTkdfQVVUTyIsIkFDVElWSVRZX0ZVTkRJTkdfU0VBUkNIIiwiQUNUSVZJVFlfRlVORElOR19TRUFSQ0hfT1JHQU5JWkFUSU9OIiwiQUNUSVZJVFlfRlVORElOR19TRUxFQ1RfT1JHX1RZUEUiLCJBQ1RJVklUWV9QUk9HUkFNIiwiQUNUSVZJVFlfUExBTk5JTkciLCJBQ1RJVklUWV9DT05UQUNUIiwiQUNUSVZJVFlfRE9DVU1FTlRTX0FERF9ET0NVTUVOVCIsIkFDVElWSVRZX0RPQ1VNRU5UU19BRERfV0VCTElOSyIsIkFDVElWSVRZX0lTU1VFU19BRERfSVNTVUUiLCJBQ1RJVklUWV9JU1NVRVNfREVMRVRFX0lTU1VFIiwiQUNUSVZJVFlfSVNTVUVTX0FERF9NRUFTVVJFIiwiQUNUSVZJVFlfSVNTVUVTX0RFTEVURV9NRUFTVVJFIiwiQUNUSVZJVFlfSVNTVUVTX0FERF9BQ1RPUiIsIkFDVElWSVRZX0lTU1VFU19ERUxFVEVfQUNUT1IiLCJBQ1RJVklUWV9ESVNCVVJTRU1FTlRTX0ZVTkRJTkdfRkxPV1NfT1JHUk9MRV9BRERfSU1QTEVNRU5USU5HX0FHRU5DWSIsIkFDVElWSVRZX0RJU0JVUlNFTUVOVFNfRlVORElOR19GTE9XU19PUkdST0xFX0FERF9DT05UUkFDVElOR19BR0VOQ1kiLCJBQ1RJVklUWV9ESVNCVVJTRU1FTlRTX0ZVTkRJTkdfRkxPV1NfT1JHUk9MRV9BRERfQkVORUZJQ0lBUllfQUdFTkNZIiwiQUNUSVZJVFlfRElTQlVSU0VNRU5UU19GVU5ESU5HX0ZMT1dTX09SR1JPTEVfQUREX0RPTk9SX09SR0FOSVpBVElPTiIsIkFDVElWSVRZX0RJU0JVUlNFTUVOVFNfRlVORElOR19GTE9XU19PUkdST0xFX0FERF9FWEVDVVRJTkdfQUdFTkNZIiwiQUNUSVZJVFlfRElTQlVSU0VNRU5UU19GVU5ESU5HX0ZMT1dTX09SR1JPTEVfQUREX1JFR0lPTkFMX0dST1VQIiwiQUNUSVZJVFlfRElTQlVSU0VNRU5UU19GVU5ESU5HX0ZMT1dTX09SR1JPTEVfQUREX1JFU1BPTlNJQkxFX09SR0FOSVpBVElPTiIsIkFDVElWSVRZX0RJU0JVUlNFTUVOVFNfRlVORElOR19GTE9XU19PUkdST0xFX0FERF9TRUNUT1JfR1JPVVAiLCJBQ1RJVklUWV9DT01NSVRNRU5UU19GVU5ESU5HX0ZMT1dTX09SR1JPTEVfQUREX0lNUExFTUVOVElOR19BR0VOQ1kiLCJBQ1RJVklUWV9DT01NSVRNRU5UU19GVU5ESU5HX0ZMT1dTX09SR1JPTEVfQUREX0NPTlRSQUNUSU5HX0FHRU5DWSIsIkFDVElWSVRZX0NPTU1JVE1FTlRTX0ZVTkRJTkdfRkxPV1NfT1JHUk9MRV9BRERfQkVORUZJQ0lBUllfQUdFTkNZIiwiQUNUSVZJVFlfQ09NTUlUTUVOVFNfRlVORElOR19GTE9XU19PUkdST0xFX0FERF9ET05PUl9PUkdBTklaQVRJT04iLCJBQ1RJVklUWV9DT01NSVRNRU5UU19GVU5ESU5HX0ZMT1dTX09SR1JPTEVfQUREX0VYRUNVVElOR19BR0VOQ1kiLCJBQ1RJVklUWV9DT01NSVRNRU5UU19GVU5ESU5HX0ZMT1dTX09SR1JPTEVfQUREX1JFR0lPTkFMX0dST1VQIiwiQUNUSVZJVFlfQ09NTUlUTUVOVFNfRlVORElOR19GTE9XU19PUkdST0xFX0FERF9SRVNQT05TSUJMRV9PUkdBTklaQVRJT04iLCJBQ1RJVklUWV9DT01NSVRNRU5UU19GVU5ESU5HX0ZMT1dTX09SR1JPTEVfQUREX1NFQ1RPUl9HUk9VUCIsIkFDVElWSVRZX0VYUEVORElUVVJFU19GVU5ESU5HX0ZMT1dTX09SR1JPTEVfQUREX0lNUExFTUVOVElOR19BR0VOQ1kiLCJBQ1RJVklUWV9FWFBFTkRJVFVSRVNfRlVORElOR19GTE9XU19PUkdST0xFX0FERF9DT05UUkFDVElOR19BR0VOQ1kiLCJBQ1RJVklUWV9FWFBFTkRJVFVSRVNfRlVORElOR19GTE9XU19PUkdST0xFX0FERF9CRU5FRklDSUFSWV9BR0VOQ1kiLCJBQ1RJVklUWV9FWFBFTkRJVFVSRVNfRlVORElOR19GTE9XU19PUkdST0xFX0FERF9ET05PUl9PUkdBTklaQVRJT04iLCJBQ1RJVklUWV9FWFBFTkRJVFVSRVNfRlVORElOR19GTE9XU19PUkdST0xFX0FERF9FWEVDVVRJTkdfQUdFTkNZIiwiQUNUSVZJVFlfRVhQRU5ESVRVUkVTX0ZVTkRJTkdfRkxPV1NfT1JHUk9MRV9BRERfUkVHSU9OQUxfR1JPVVAiLCJBQ1RJVklUWV9FWFBFTkRJVFVSRVNfRlVORElOR19GTE9XU19PUkdST0xFX0FERF9SRVNQT05TSUJMRV9PUkdBTklaQVRJT04iLCJBQ1RJVklUWV9FWFBFTkRJVFVSRVNfRlVORElOR19GTE9XU19PUkdST0xFX0FERF9TRUNUT1JfR1JPVVAiLCJNVEVGX1BST0pFQ1RJT05TIiwiTVRFRl9QUk9KRUNUSU9OU19BTU9VTlQiLCJNVEVGX1BST0pFQ1RJT05TX0NVUlJFTkNZIiwiTVRFRl9QUk9KRUNUSU9OU19QUk9KRUNUSU9OIiwiTVRFRl9QUk9KRUNUSU9OU19EQVRFIiwiVUlVdGlscyIsImhhc2giLCJpIiwibGVuZ3RoIiwiY2hhckNvZGVBdCIsInN0cmluZ1RvSWQiLCJEYXRlIiwibm93IiwiTWF0aCIsInJhbmRvbSIsInRvU3RyaW5nIiwic3Vic3RyaW5nIiwidHJ1bmMiLCJ0ZXh0IiwicmVwbGFjZSIsImNoYXIiLCJ0b1VwcGVyQ2FzZSIsIm9iaiIsIkpTT04iLCJwYXJzZSIsInN0cmluZ2lmeSIsIkFDVElWSVRZX0JVREdFVCIsIkFDVElWSVRZX1NUQVRVUyIsIlNUQVRVU19SRUFTT04iLCJGSU5BTkNJQUxfSU5TVFJVTUVOVCIsIlRZUEVfT0ZfSU1QTEVNRU5UQVRJT04iLCJPQkpFQ1RJVkUiLCJSRVNVTFRTIiwiQlVER0VUX0NPREVfUFJPSkVDVF9JRCIsIkFDVFVBTF9BUFBST1ZBTF9EQVRFIiwiRlVORElOR1MiLCJGVU5ESU5HX0RPTk9SX09SR19JRCIsIklTX0RSQUZUIiwiT1JHX1JPTEVfT1JHX0lEIiwiQURESVRJT05BTF9JTkZPIiwiUFJJTUFSWV9TRUNUT1JTIiwiU0VDT05EQVJZX1NFQ1RPUlMiLCJURVJUSUFSWV9TRUNUT1JTIiwiVEFHX1NFQ1RPUlMiLCJTRUNUT1IiLCJTRUNUT1JfUEVSQ0VOVEFHRSIsIkZJTkFOQ0lOR19JTlNUUlVNRU5UIiwiTU9EQUxJVElFUyIsIkxJTkVfTUlOSVNUUllfUkFOSyIsIkdPVkVSTk1FTlRfQUdSRUVNRU5UX05VTUJFUiIsIkZVTkRJTkdfU1RBVFVTIiwiTE9DQVRJT05TIiwiTE9DQVRJT04iLCJMT0NBVElPTl9QRVJDRU5UQUdFIiwiSU1QTEVNRU5UQVRJT05fTE9DQVRJT04iLCJJTVBMRU1FTlRBVElPTl9MRVZFTCIsIkFQUFJPVkFMX1NUQVRVUyIsIkFQUFJPVkVEX0JZIiwiQVBQUk9WQUxfREFURSIsIlRZUEVfT0ZfQVNTSVNUQU5DRSIsIkVYUEVORElUVVJFX0NMQVNTIiwiRlVORElOR19ERVRBSUxTIiwiTU9ERV9PRl9QQVlNRU5UIiwiRlVORElOR19DTEFTU0lGSUNBVElPTl9EQVRFIiwiQUdSRUVNRU5UIiwiRE9OT1JfT0JKRUNUSVZFIiwiQ09ORElUSU9OUyIsIkFHUkVFTUVOVF9DT0RFIiwiQUdSRUVNRU5UX1RJVExFIiwiUFJPSkVDVF9DQVRFR09SWSIsIlBST0pFQ1RfSU1QTEVNRU5USU5HX1VOSVQiLCJPUkdBTklaQVRJT04iLCJQRVJDRU5UQUdFIiwiQU1QX09SR0FOSVpBVElPTl9ST0xFX0lEIiwiUk9MRSIsIkVYRUNVVElOR19BR0VOQ1kiLCJDT05UUkFDVElOR19BR0VOQ1kiLCJCRU5FRklDSUFSWV9BR0VOQ1kiLCJJTVBMRU1FTlRJTkdfQUdFTkNZIiwiUkVTUE9OU0lCTEVfT1JHQU5JWkFUSU9OIiwiRE9OT1JfT1JHQU5JWkFUSU9OIiwiUkVHSU9OQUxfR1JPVVAiLCJTRUNUT1JfR1JPVVAiLCJCVURHRVRTIiwiQlVER0VUX0NPREUiLCJCVURHRVRfT1JHQU5JWkFUSU9OX0NPREUiLCJBUkNISVZFRCIsIlRSQU5TQUNUSU9OX0RBVEUiLCJUUkFOU0FDVElPTl9UWVBFIiwiQ09NTUlUTUVOVFMiLCJESVNCVVJTRU1FTlRTIiwiRVhQRU5ESVRVUkVTIiwiRVNUSU1BVEVEX0RJU0JVUlNFTUVOVFMiLCJUUkFOU0FDVElPTl9BTU9VTlQiLCJBREpVU1RNRU5UX1RZUEUiLCJBQ1RVQUxfU1RBUlRfREFURSIsIlBST1BPU0VEX1NUQVJUX0RBVEUiLCJBQ1RVQUxfQ09NUExFVElPTl9EQVRFIiwiQ09OVFJBQ1RJTkdfREFURSIsIkRJU0JVUlNFTUVOVF9EQVRFIiwiUFJPUE9TRURfQVBQUk9WQUxfREFURSIsIk9SSUdJTkFMX0NPTVBMRVRJT05fREFURSIsIlBST1BPU0VEX0NPTVBMRVRJT05fREFURSIsIkZJTkFMX0RBVEVfRk9SX0RJU0JVUlNFTUVOVFMiLCJGSU5BTF9EQVRFX0ZPUl9DT05UUkFDVElORyIsIkVGRkVDVElWRV9GVU5ESU5HX0RBVEUiLCJGVU5ESU5HX0NMT1NJTkdfREFURSIsIlJBVElGSUNBVElPTl9EQVRFIiwiTUFUVVJJVFkiLCJMQVNUX0FVRElUX0RBVEUiLCJTSUdOQVRVUkVfREFURSIsIkhVTUFOSVRBUklBTl9BSUQiLCJESVNBU1RFUl9SRVNQT05TRSIsIlBST0dSQU0iLCJQUk9HUkFNX1BFUkNFTlRBR0UiLCJQUk9HUkFNX1NFVFRJTkdTIiwiTkFUSU9OQUxfUExBTl9PQkpFQ1RJVkUiLCJQUklNQVJZX1BST0dSQU1TIiwiU0VDT05EQVJZX1BST0dSQU1TIiwiVEVSVElBUl9QUk9HUkFNUyIsIkdPVkVSTk1FTlRfQVBQUk9WQUxfUFJPQ0VEVVJFUyIsIkpPSU5UX0NSSVRFUklBIiwiVEVBTSIsIlJFSkVDVEVEX0lEIiwiSU5URVJOQUxfSUQiLCJBTVBfSUQiLCJQUk9KRUNUX1RJVExFIiwiREVTQ1JJUFRJT04iLCJNT0RJRklFRF9CWSIsIk1PRElGSUVEX09OIiwiQ1JFQVRFRF9CWSIsIkNSRUFURURfT04iLCJMQVNUX0lNUE9SVEVEX0JZIiwiQ0xJRU5UX0NIQU5HRV9JRCIsIkNMSUVOVF9DUkVBVEVEX09OIiwiQ0xJRU5UX1VQREFURURfT04iLCJJU19QVVNIRUQiLCJBQ1RJVklUWV9HUk9VUCIsIlZFUlNJT04iLCJQUk9KRUNUX0NPTU1FTlRTIiwiTEVTU09OU19MRUFSTkVEIiwiUFJPSkVDVF9JTVBBQ1QiLCJBQ1RJVklUWV9TVU1NQVJZIiwiQ09ORElUSU9OQUxJVElFUyIsIlBST0pFQ1RfTUFOQUdFTUVOVCIsIkFfQ19DSEFQVEVSIiwiQ1JJU19OVU1CRVIiLCJJQVRJX0lERU5USUZJRVIiLCJBQ1RJVklUWV9JTlRFUk5BTF9JRFMiLCJISUVSQVJDSElDQUxfVkFMVUUiLCJISUVSQVJDSElDQUxfVkFMVUVfUEFSVFMiLCJISUVSQVJDSElDQUxfVkFMVUVfREVQVEgiLCJQUENfQU1PVU5UIiwiUlBDX0FNT1VOVCIsIlBQQ19BTk5VQUxfQlVER0VUUyIsIkFNT1VOVCIsIkNVUlJFTkNZIiwiRlVORElOR19EQVRFIiwiQ09NUE9ORU5UUyIsIlRPVEFMX05VTUJFUl9PRl9GVU5ESU5HX1NPVVJDRVMiLCJTT1VSQ0VfUk9MRSIsIkFNUF9GVU5ESU5HX0lEIiwiSVNTVUVTIiwiSVNTVUVfREFURSIsIklTU1VFX05BTUUiLCJNRUFTVVJFUyIsIk1FQVNVUkVfTkFNRSIsIk1FQVNVUkVfREFURSIsIkFDVE9SUyIsIkFDVE9SX05BTUUiLCJTVFJVQ1RVUkVTIiwiU1RSVUNUVVJFU19USVRMRSIsIlNUUlVDVFVSRVNfREVTQ1JJUFRJT04iLCJTVFJVQ1RVUkVTX0xBVElUVURFIiwiU1RSVUNUVVJFU19MT05HSVRVREUiLCJTVFJVQ1RVUkVTX0NPTE9SIiwiU1RSVUNUVVJFU19MQVQiLCJTVFJVQ1RVUkVTX0xORyIsIlNUUlVDVFVSRVNfU0hBUEUiLCJTVFJVQ1RVUkVTX1BPSU5UIiwiU1RSVUNUVVJFU19QT0xZR09OIiwiU1RSVUNUVVJFU19QT0xZTElORSIsIlNUUlVDVFVSRVNfQ09PUkRJTkFURVMiLCJDT01QT05FTlRfVFlQRSIsIkNPTVBPTkVOVF9USVRMRSIsIkNPTVBPTkVOVF9GVU5ESU5HIiwiQ09NUE9ORU5UX0RFU0NSSVBUSU9OIiwiQ09NUE9ORU5UX09SR0FOSVpBVElPTiIsIkZVTkRJTkdfQU1PVU5UX0lEIiwiRVhUUkFfSU5GTyIsIlZBTFVFIiwiQUNST05ZTSIsIlRZUEVfT0ZfQ09PUEVSQVRJT04iLCJBTk5VQUxfUFJPSkVDVF9CVURHRVRfSUQiLCJUWVBFIiwiWUVBUiIsIkdST1VQX1ZFUlNJT05FRF9GVU5ESU5HIiwiQUNUSVZFX0xJU1QiLCJBQ1RJVkUiLCJERUxFR0FURURfQ09PUEVSQVRJT04iLCJERUxFR0FURURfUEFSVE5FUiIsIkZJTkFOQ0lOR19JRCIsIkRJU0JVUlNFTUVOVF9PUkRFUl9JRCIsIlBMRURHRSIsIkNBUElUQUxfU1BFTkRJTkdfUEVSQ0VOVEFHRSIsIlJFUE9SVElOR19EQVRFIiwiUkVDSVBJRU5UX1JPTEUiLCJSRUNJUElFTlRfT1JHQU5JWkFUSU9OIiwiVEVNUE9SQUxfSUQiLCJNSU5JU1RSWV9DT0RFIiwiUFJPSkVDVF9DT0RFIiwiRlkiLCJJTkRJUkVDVF9PTl9CVURHRVQiLCJJTVBMRU1FTlRBVElPTl9MRVZFTFNfRVhUUkFfSU5GTyIsIklNUExFTUVOVEFUSU9OX0xPQ0FUSU9OX0VYVFJBX0lORk8iLCJET05PUl9DT05UQUNUIiwiUFJPSkVDVF9DT09SRElOQVRPUl9DT05UQUNUIiwiU0VDVE9SX01JTklTVFJZX0NPTlRBQ1QiLCJNT0ZFRF9DT05UQUNUIiwiSU1QTEVNRU5USU5HX0VYRUNVVElOR19BR0VOQ1lfQ09OVEFDVCIsIkNPTlRBQ1QiLCJPUkdBTklaQVRJT05fR1JPVVAiLCJGSVhFRF9FWENIQU5HRV9SQVRFIiwiUFJJTUFSWV9DT05UQUNUIiwiQUNUSVZJVFlfRE9DVU1FTlRTIiwiRE9DVU1FTlRfVFlQRSIsIklTTzIiLCJQUk9KRUNUSU9OIiwiUElQRUxJTkUiLCJQUk9KRUNUSU9OX0RBVEUiLCJTQU1FX0FTX1BST1BPU0VEX1NUQVJUX0RBVEVfTEFCRUwiLCJTQU1FX0FTX1BST1BPU0VEX0FQUFJPVkFMX0RBVEVfTEFCRUwiLCJERVBFTkRFTkNZX0lNUExFTUVOVEFUSU9OX0xFVkVMX1BSRVNFTlQiLCJERVBFTkRFTkNZX0lNUExFTUVOVEFUSU9OX0xFVkVMX1ZBTElEIiwiREVQRU5ERU5DWV9JTVBMRU1FTlRBVElPTl9MT0NBVElPTl9QUkVTRU5UIiwiREVQRU5ERU5DWV9JTVBMRU1FTlRBVElPTl9MT0NBVElPTl9WQUxJRCIsIkRFUEVOREVOQ1lfUFJPSkVDVF9DT0RFX09OX0JVREdFVCIsIkRFUEVOREVOQ1lfT05fQlVER0VUIiwiREVQRU5ERU5DWV9UUkFOU0FDVElPTl9QUkVTRU5UIiwiREVQRU5ERU5DWV9DT01QT05FTlRfRlVORElOR19PUkdfVkFMSUQiLCJBUF9TRUNUSU9OX0lEUyIsImtleSIsImZtUGF0aCIsIkZNQyIsInNlY3Rpb25QYXRoIiwiQUNUSVZJVFlfSU5URVJOQUxfSURTX0NPTFMiLCJBQ1RJVklUWV9QTEFOTklOR19DT0xTIiwiQUNUSVZJVFlfTE9DQVRJT05fQ09MUyIsIkFDVElWSVRZX0ZVTkRJTkdfQ09MUyIsIkFDVElWSVRZX0NPTlRBQ1RfQ09MUyIsIkFQX0ZVTkRJTkdTX1RBQkxFX0NPTFMiLCJNVUxUSV9TRUxFQ1RfTUlOX1NJWkUiLCJNVUxUSV9TRUxFQ1RfTUFYX1NJWkUiLCJ0b0ZpZWxkTmFtZXMiLCJsaXN0T2ZOYW1lcyIsIm1hcCIsInRvRmllbGROYW1lIiwibmFtZSIsInRvTG93ZXJDYXNlIiwidG9PcmlnaW5hbExhYmVsIiwiZmllbGROYW1lIiwiY2FwaXRhbGl6ZSIsIk5PVElGSUNBVElPTl9PUklHSU5fQVBJX1NFQ1VSSVRZIiwiTk9USUZJQ0FUSU9OX09SSUdJTl9BUElfTkVUV09SSyIsIk5PVElGSUNBVElPTl9PUklHSU5fQVBJX1NZTkNVUCIsIk5PVElGSUNBVElPTl9PUklHSU5fQVBJX0dFTkVSQUwiLCJOT1RJRklDQVRJT05fT1JJR0lOX0RBVEFCQVNFIiwiTk9USUZJQ0FUSU9OX09SSUdJTl9BVVRIRU5USUNBVElPTiIsIk5PVElGSUNBVElPTl9PUklHSU5fV09SS1NQQUNFX0ZJTFRFUiIsIk5PVElGSUNBVElPTl9PUklHSU5fV09SS1NQQUNFIiwiTk9USUZJQ0FUSU9OX09SSUdJTl9TWU5DVVBfUFJPQ0VTUyIsIk5PVElGSUNBVElPTl9PUklHSU5fQ1VSUkVOQ1lfTUFOQUdFUiIsIk5PVElGSUNBVElPTl9PUklHSU5fREFURVMiLCJOT1RJRklDQVRJT05fT1JJR0lOX0FDVElWSVRZIiwiTk9USUZJQ0FUSU9OX09SSUdJTl9SRVNPVVJDRSIsIk5PVElGSUNBVElPTl9PUklHSU5fSTE4TkVYVCIsIk5PVElGSUNBVElPTl9PUklHSU5fVVBEQVRFX0NIRUNLIiwiTk9USUZJQ0FUSU9OX09SSUdJTl9VUERBVEUiLCJOT1RJRklDQVRJT05fT1JJR0lOX1NFVFVQIiwiTk9USUZJQ0FUSU9OX09SSUdJTl9TRVRUSU5HUyIsIk5PVElGSUNBVElPTl9TRVZFUklUWV9XQVJOSU5HIiwiTk9USUZJQ0FUSU9OX1NFVkVSSVRZX0lORk8iLCJOT1RJRklDQVRJT05fU0VWRVJJVFlfRVJST1IiLCJOT1RJRklDQVRJT05fRVJST1JfTEVWRUxfTUlOT1IiLCJOT1RJRklDQVRJT05fRVJST1JfTEVWRUxfQkxPQ0tFUiIsIk5PVElGSUNBVElPTl9PUklHSU5fV1JPTkdfTUVUSE9EX1VTQUdFIiwiRVJST1JfQ09ERV9OT19DT05ORUNUSVZJVFkiLCJFUlJPUl9DT0RFX0FDQ0VTU19ERU5JRUQiLCJNU0dfSU5WQUxJRF9VUkwiLCJNU0dfVElNRU9VVCIsIk1TR19VTktOT1dOX05FVFdPUktfRVJST1IiLCJNU0dfQU1QX1VOUkVBQ0hBQkxFIiwiR0VORVJBTF9DT05ORUNUSU9OX0VSUk9SUyIsIkRPTk9SX0FHRU5DWSIsIk9SR19ST0xFX05BTUVTIiwiQUNUVUFMIiwiUExBTk5FRCIsIkFDVFVBTF9DT01NSVRNRU5UUyIsIkFjdGl2aXR5Q29uc3RhbnRzIiwiQUNUVUFMX0RJU0JVUlNFTUVOVFMiLCJBQ1RVQUxfRVhQRU5ESVRVUkVTIiwiUExBTk5FRF9DT01NSVRNRU5UUyIsIlBMQU5ORURfRElTQlVSU0VNRU5UUyIsIlBMQU5ORURfRVhQRU5ESVRVUkVTIiwiVU5BTExPQ0FURURfRElTQlVSU0VNRU5UUyIsIkRFTElWRVJZX1JBVEUiLCJBREpVU1RNRU5UX1RZUEVTIiwiQURKVVNUTUVOVF9UWVBFU19BUF9PUkRFUiIsIk5FV19BQ1RJVklUWV9JRCIsIlBST1BPU0VEX1BST0pFQ1RfQ09TVCIsIlJFVklTRURfUFJPSkVDVF9DT1NUIiwiQUNST05ZTV9ET05PUl9PUkdBTklaQVRJT04iLCJBQ1JPTllNX0VYRUNVVElOR19BR0VOQ1kiLCJBQ1JPTllNX0lNUExFTUVOVElOR19BR0VOQ1kiLCJBQ1JPTllNX0JFTkVGSUNJQVJZX0FHRU5DWSIsIkFDUk9OWU1fUkVTUE9OU0lCTEVfT1JHQU5JWkFUSU9OIiwiQVBQUk9WQUxfU1RBVFVTX0NSRUFURUQiLCJBUFBST1ZBTF9TVEFUVVNfQVBQUk9WRUQiLCJBUFBST1ZBTF9TVEFUVVNfRURJVEVEIiwiQVBQUk9WQUxfU1RBVFVTX1NUQVJURURfQVBQUk9WRUQiLCJBUFBST1ZBTF9TVEFUVVNfU1RBUlRFRCIsIkFQUFJPVkFMX1NUQVRVU19OT1RfQVBQUk9WRUQiLCJBUFBST1ZBTF9TVEFUVVNfUkVKRUNURUQiLCJPTl9CVURHRVQiLCJJTlRFUk5BVElPTkFMIiwiQ09VTlRSWSIsIlJFTEFURURfRE9DVU1FTlRTIiwiVE1QX0VOVElUWV9WQUxJREFUT1IiLCJBTFdBWVNfUkVRVUlSRUQiLCJGVU5ESU5HX0FDVElWRV9MSVNUIiwiRlVORElOR19UWVBFX09GX0FTU0lTVEFOQ0UiLCJGVU5ESU5HX0RFVEFJTFNfUEFUSCIsIkZVTkRJTkdfQ1VSUkVOQ1lfUEFUSCIsIk1URUZfQ1VSUkVOQ1lfUEFUSCIsIlBQQ19DVVJSRU5DWV9QQVRIIiwiUlBDX0NVUlJFTkNZX1BBVEgiLCJDT01QT05FTlRfQ1VSUkVOQ1lfUEFUSCIsIkRJU0JVUlNFTUVOVFNfUEFUSCIsIkFDVElWSVRZX0lOVEVSTkFMX0lEU19JTlRFUk5BTF9JRF9QQVRIIiwiQUNUSVZJVFlfSU5URVJOQUxfSURTX09SR0FOSVpBVElPTl9QQVRIIiwiTE9DQVRJT05fUEFUSCIsIk5BVElPTkFMX1BMQU5fT0JKRUNUSVZFX1BBVEgiLCJQUklNQVJZX1BST0dSQU1fUEFUSCIsIlNFQ09OREFSWV9QUk9HUkFNX1BBVEgiLCJQUklNQVJZX1NFQ1RPUl9QQVRIIiwiU0VDT05EQVJZX1NFQ1RPUl9QQVRIIiwiVEVSVElBUllfU0VDVE9SX1BBVEgiLCJET05PUl9PUkdBTklaQVRJT05TX1BBVEgiLCJSRVNQT05TSUJMRV9PUkdBTklaQVRJT05fQlVER0VUU19QQVRIIiwiUkVMQVRFRF9PUkdTX1BBVEhTIiwiVmFsdWVDb25zdGFudHMiLCJvcmdSb2xlIiwiUkVMQVRFRF9PUkdTX09SR0FOSVpBVElPTl9QQVRIUyIsIlJJQ0hfVEVYVF9GSUVMRFMiLCJTZXQiLCJQQVRIU19XSVRIX1RSRUVfU1RSVUNUVVJFIiwiUEFUSFNfV0lUSF9ISUVSQVJDSElDQUxfVkFMVUVTIiwiQUNUSVZJVFlfQ09OVEFDVF9QQVRIUyIsIlRSQU5TQUNUSU9OX1RZUEVTIiwiVFJBTlNBQ1RJT05fVFlQRVNfT1JERVJFRCIsIkZVTkRJTkdfVFJBTlNBQ1RJT05fVFlQRVMiLCJBREpVU1RNRU5UX1RZUEVfUEFUSFMiLCJ0dCIsIkZVTkRJTkdfQ1VSUkVOQ1lfUEFUSFMiLCJQQVRIU19GT1JfQUNUSVZJVFlfQ1VSUkVOQ1kiLCJQQVRIU19GT1JfQ1VSUkVOQ1kiLCJET19OT1RfSFlEUkFURV9GSUVMRFNfTElTVCIsIkFMVEVSTkFURV9WQUxVRV9QQVRIIiwiQUNUSVZJVFlfRklFTERTX0ZNX1BBVEgiLCJGZWF0dXJlTWFuYWdlckNvbnN0YW50cyIsIlBSRUZJWF9BQ1RJVklUWSIsIlBSRUZJWF9DT05UQUNUIiwiUFJFRklYX1JFU09VUkNFIiwiUFJFRklYX0NPTU1PTiIsIlBSRUZJWF9MSVNUIiwiRklFTERfUEFUSCIsIkZJRUxEX09QVElPTlMiLCJGSUVMRF9PUFRJT05fVVNBQkxFIiwiTElTVF9NQVhfU0laRSIsIlJFR0VYX1BBVFRFUk4iLCJGSUVMRF9OQU1FIiwiRklFTERfTEFCRUwiLCJGSUVMRF9SRVFVSVJFRCIsIkZJRUxEX1VOSVFVRV9DT05TVFJBSU5UIiwiRklFTERfVFlQRSIsIkZJRUxEX0xFTkdUSCIsIkZJRUxEX1BFUkNFTlRBR0UiLCJGSUVMRF9QRVJDRU5UQUdFX0NPTlNUUkFJTlQiLCJGSUVMRF9JVEVNX1RZUEUiLCJGSUVMRF9JTVBPUlRBQkxFIiwiRklFTERfSURfT05MWSIsIkZJRUxEX01VTFRJUExFX1ZBTFVFU19BTExPV0VEIiwiRklFTERfVFJFRV9DT0xMRUNUSU9OIiwiRklFTERfQ0hJTERSRU4iLCJGSUVMRF9ERVBFTkRFTkNJRVMiLCJGSUVMRF9UWVBFX0xJU1QiLCJGSUVMRF9UWVBFX09CSkVDVCIsIkZJRUxEX1RZUEVfU1RSSU5HIiwiRklFTERfVFlQRV9MT05HIiwiRklFTERfVFlQRV9GTE9BVCIsIkZJRUxEX1RZUEVfQk9PTEVBTiIsIkZJRUxEX1RZUEVfREFURSIsIkZJRUxEX1RZUEVfVElNRVNUQU1QIiwibG9nZ2VyIiwiRmllbGRzTWFuYWdlciIsImZpZWxkc01hbmFnZXIiLCJMb2dnZXJNYW5hZ2VyIiwibmV3RmllbGRzTWFuYWdlciIsImFzc2lnbiIsImZpZWxkc0RlZiIsInBvc3NpYmxlVmFsdWVzQ29sbGVjdGlvbiIsImN1cnJlbnRMYW5ndWFnZSIsImRlYnVnIiwiX2ZpZWxkc0RlZiIsIl9wb3NzaWJsZVZhbHVlc01hcCIsInB2IiwiaWQiLCJGUEMiLCJfZmllbGRQYXRoc0VuYWJsZWRTdGF0dXNNYXAiLCJfbGFuZyIsIkNvbnN0YW50cyIsIl9kZWZhdWx0TGFuZyIsImNsZWFudXAiLCJmZCIsImNoaWxkcmVuIiwiZmllbGRfbGFiZWwiLCJrZXlzIiwibGFuZyIsImZpZWxkUGF0aCIsInZhbHVlcyIsInBhdGhQYXJ0cyIsImlzRmllbGRQYXRoRW5hYmxlZCIsInVuZGVmaW5lZCIsIl9idWlsZEZpZWxkUGF0aFN0YXR1cyIsInNwbGl0IiwiY3VycmVudFRyZWUiLCJpc0Rpc2FibGVkIiwic29tZSIsImZpbmQiLCJmaWVsZCIsImZpZWxkX25hbWUiLCJwYXJ0Iiwib3JpZ1ZhbHVlIiwidHJuVmFsdWUiLCJvcHRpb25zIiwib3B0aW9uIiwib3B0IiwidHJhbnNsYXRpb25zIiwiZ2V0RmllbGREZWYiLCJkZXBlbmRlbmNpZXMiLCJmaWVsZFBhdGhzIiwiX2dldEZpZWxkUGF0aHNCeURlcGVuZGVuY2llcyIsImN1cnJlbnRQYXRoIiwiaGFzRGVwZW5kZW5jeSIsImluY2x1ZGVzIiwiZGVwIiwiZ2V0T3B0aW9uVHJhbnNsYXRpb24iLCJnZXRWYWx1ZSIsInBhcnRzIiwibmV3TGlzdCIsIm5ld0VsZW1lbnQiLCJjdXJyZW50IiwiY29uY2F0IiwidmFsIiwiQ3VycmVuY3lSYXRlc01hbmFnZXIiLCJjdXJyZW5jeVJhdGVzIiwiYmFzZUN1cnJlbmN5IiwiZGF0ZVV0aWxzIiwiZXJyb3JOb3RpZmljYXRpb25IZWxwZXIiLCJfY3VycmVuY3lSYXRlcyIsIl9iYXNlQ3VycmVuY3kiLCJfY3Vycm5jaWVzV2l0aEV4Y2hhbmdlUmF0ZXMiLCJfZ2V0Q3VycmVuY2llc1dpdGhFeGNoYW5nZVJhdGVzIiwiX3RyYW5zbGF0ZSIsIl9kYXRlVXRpbHMiLCJfZXJyb3JOb3RpZmljYXRpb25IZWxwZXIiLCJjdXJyZW5jeUZyb20iLCJjdXJyZW5jeVRvIiwiZGF0ZVRvRmluZCIsImZpeGVkRXhjaGFuZ2VSYXRlIiwiY29udmVydEN1cnJlbmN5IiwidGltZURhdGVUb0ZpbmQiLCJnZXRUaW1lIiwiY3VycmVuY2llc1RvU2VhcmNoRGlyZWN0IiwiaXRlbSIsImZyb20iLCJ0byIsImdldEV4Y2hhbmdlUmF0ZSIsImN1cnJlbmNpZXNUb1NlYXJjaEludmVyc2UiLCJjb252ZXJ0VmlhQmFzZUN1cnJlbmN5IiwiX2dldEN1cnJlbmN5RXJyb3IiLCJmdW5kaW5nRGV0YWlscyIsInRvdGFsIiwiY29udmVydFRyYW5zYWN0aW9uQW1vdW50VG9DdXJyZW5jeSIsImZ1bmRpbmdEZXRhaWwiLCJhbW91bnQiLCJkYXRlIiwiY3VycmVuY3lSYXRlIiwiZm9ybWF0RGF0ZUZvckFQSSIsInRyYW5zYWN0aW9uRGF0ZSIsInRyYW5zYWN0aW9uQW1vdW50IiwiY29udmVydEFtb3VudFRvQ3VycmVuY3kiLCJjdXJyZW5jaWVzVG9TZWFyY2giLCJsb3dlckVuZCIsImhpZ2hlckVuZCIsInJhdGVzIiwibWlkZGxlIiwiZmxvb3IiLCJkaWZmZXJlbmNlIiwiYWJzIiwiZGlmZmVyZW5jZTEiLCJyYXRlIiwiZXJyb3JNZXNhZ2UiLCJub3RpZkVycm9yQ3VycmVuY3kiLCJjcmVhdGVOb3RpZmljYXRpb24iLCJFcnJvckNvbnN0YW50cyIsInJhdGVGcm9tVG9CYXNlIiwicmF0ZUJhc2VUb1RvIiwicmF0ZVRvVG9CYXNlIiwicmF0ZUJhc2VUb0Zyb20iLCJjcyIsImFkZCIsImV4Y2hhbmdlUmF0ZXMiLCJQb3NzaWJsZVZhbHVlc01hbmFnZXIiLCJsYW5nU3RhdGUiLCJfbGFuZ1N0YXRlIiwiTG9nZ2VyIiwiX2xvZ2dlciIsImhPcHRpb25zIiwiYnVpbGRIaWVyYXJjaGljYWxEYXRhIiwic2VsZWN0ZWRJZCIsInZhbHVlUGFydHMiLCJnZXRIaWVyYXJjaGljYWxWYWx1ZSIsImZvcm1hdFZhbHVlUGFydHMiLCJuYW1lUGFydHMiLCJwYXJlbnRJZCIsInJldmVyc2UiLCJfZmlsbEhpZXJhcmNoaWNhbERlcHRoIiwiZXJyb3IiLCJkZXB0aCIsInBhcmVudCIsIm8iLCJyZXNWYWwiLCJkZWZhdWx0TGFuZyIsImN1cnJlbmN5UmF0ZXNNYW5hZ2VyIiwiZmlsdGVycyIsImlzT1JGaWx0ZXIiLCJpc0xvY2F0aW9ucyIsImlzQ3VycmVuY3kiLCJoYXMiLCJ2aXNpYmxlIiwiZGlzcGxheUhpZXJhcmNoaWNhbFZhbHVlIiwiaXNDdXJyZW5jeU9wdGlvblVzYWJsZSIsImZpbHRlckJ5IiwiZmlsdGVyIiwib3B0aW9uRGF0YVRvQ2hlY2siLCJwYXRoIiwiaGFzRXhjaGFuZ2VSYXRlcyIsImN1cnJlbmNpZXNXaXRoRXhjaGFuZ2VSYXRlcyIsImlzQWN0aXZlIiwiZXh0cmFfaW5mbyIsImFjdGl2ZSIsIm9wdGlvbnNPYmoiLCJyZXZlcnNlU29ydE9wdGlvbnMiLCJhZGRlZCIsIm9wdGlvbnNMaXN0IiwiaWRzU3RhY2siLCJwb3AiLCJyZXZlcnNlU29ydGVkQ2hpbGRyZW4iLCJGRUFUVVJFX01BTkFHRVIiLCJGZWF0dXJlTWFuYWdlciIsImZtVHJlZSIsIl9mbVRyZWUiLCJsb2dnZXJNYW5hZ2VyIiwib25seUxhc3RTZWdtZW50IiwiX2xvZ2dlck1hbmFnZXIiLCJsYXN0Rk1TdWJUcmVlIiwic2VnbWVudHMiLCJfZ2V0UGF0aFNlZ21lbnRzIiwiZm91bmRMYXN0Rk1TdWJUcmVlIiwiZXZlcnkiLCJzZWdtZW50IiwiX19lbmFibGVkIiwiZm1TZXR0aW5nIiwiZmluZEZNU2V0dGluZyIsInJlZHVjZSIsImN1cnJlbnRGTVNldHRpbmciLCJlbmFibGVkIiwiY3VycmVudEZNVHJlZSIsInNlZ21lbnRGTSIsIl9jdXJyZW50Rk0iLCJpc0ZNU2V0dGluZ0VuYWJsZWQiLCJoYXNGTVNldHRpbmciLCJBUExhYmVsIiwibGFiZWwiLCJkb250VHJhbnNsYXRlIiwibGFiZWxDbGFzcyIsInRvb2x0aXAiLCJnZXRDb250ZW50IiwiQVBGaWVsZCIsIlRhYmxpZnkiLCJjb250ZW50IiwiY29scyIsImMiLCJyb3dzIiwiY2VpbCIsInRhYmxlQ29udGVudCIsInJvd0NvbnRlbnQiLCJqIiwic3RyaW5nVG9VbmlxdWVJZCIsImNvbHVtbnMiLCJjZWxsV2lkdGgiLCJjZWxsd2lkdGhTdHlsZSIsInRhYmxpZnlfb3V0ZXJfY2VsbCIsInRhYmxpZnlfaW5uZXJfY2VsbCIsImZsZXgiLCJudW1iZXIiLCJBUFBlcmNlbnRhZ2VGaWVsZCIsInJhd051bWJlclRvRm9ybWF0dGVkU3RyaW5nIiwicGVyY2VudGFnZSIsInRpdGxlQ2xhc3MiLCJhbGlnblJpZ2h0IiwiQVBQZXJjZW50YWdlTGlzdCIsImxpc3RGaWVsZCIsInZhbHVlRmllbGQiLCJwZXJjZW50YWdlRmllbGQiLCJsaXN0VGl0bGUiLCJnZXRJdGVtVGl0bGUiLCJhY3Rpdml0eUZpZWxkc01hbmFnZXIiLCJwZXJjZW50VGl0bGVDbGFzcyIsImFjdGl2aXR5IiwidGFibGlmeSIsInBlcmNlbnRWYWx1ZUNsYXNzIiwiaXRlbXMiLCJpc0xpc3RFbmFibGVkIiwiYSIsImIiLCJpdGVtVGl0bGUiLCJsb2NhbGVDb21wYXJlIiwibm9kYXRhIiwiaW5zdGFuY2VPZiIsIlNlY3Rpb24iLCJDb21wb3NlZFNlY3Rpb24iLCJwYXJhbXMiLCJjb250ZXh0IiwiRGF0ZVV0aWxzIiwidXNlRW5jYXBzdWxhdGVIZWFkZXIiLCJzaG93SWZOb3RBdmFpbGFibGUiLCJOQU9wdGlvbnMiLCJvcHRpb25zXyIsIkZpZWxkUGF0aENvbnN0YW50cyIsIm5vVGl0bGUiLCJnZXRGaWVsZExhYmVsVHJhbnNsYXRpb24iLCJ2YWx1ZVBhdGgiLCJmaWVsZFBhdGhQYXJ0cyIsImFsdGVybmF0ZVBhdGgiLCJmaWVsZERlZiIsImZpZWxkX3R5cGUiLCJjcmVhdGVGb3JtYXR0ZWREYXRlIiwicmUiLCJ0ZXN0IiwidHJpbSIsImNvbXBvc2VkU2VjdGlvbiIsInN0YXRlIiwiYnVpbGRTaW1wbGVGaWVsZCIsImJpbmQiLCJTZWN0aW9uVGl0bGUiLCJncm91cENsYXNzIiwic0lEIiwidGl0bGVEZXRhaWxzIiwiY29tcG9zZWRDbGFzcyIsIm9uZU9mVHlwZSIsImNvbnRleHRUeXBlcyIsImRlZmF1bHRQcm9wcyIsInNlY3Rpb25fdGl0bGVfY2xhc3MiLCJzZWN0aW9uX2dyb3VwX2NsYXNzIiwic2VjdGlvbl9maWVsZF9uYW1lIiwic2VjdGlvbl9maWVsZF92YWx1ZSIsIkZ1bmRpbmdTdW1tYXJ5IiwibWVhc3VyZXNUb3RhbHMiLCJhY0VuYWJsZWQiLCJhZEVuYWJsZWQiLCJpc0ZpZWxkUGF0aEJ5UGFydHNFbmFibGVkIiwidHJuVHlwZSIsInRybkFkak9wdFBhdGgiLCJhdE9wdGlvbnMiLCJnZXRQb3NzaWJsZVZhbHVlc09wdGlvbnMiLCJhY3Rpdml0eUZ1bmRpbmdUb3RhbHMiLCJnZXRUb3RhbHMiLCJhZGpUeXBlIiwiYWRqVHlwZUFjdHVhbFRybiIsImV4cGVuZGl0dXJlc0FyZUVuYWJsZWQiLCJ1YiIsImdldE1URUZUb3RhbCIsImFjdHVhbENvbW1pdG1lbnRzIiwiYWN0dWFsRGlzYnVyc2VtZW50cyIsIl9idWlsZFRvdGFsRmllbGRzIiwibWVhc3VyZXNPcmRlciIsInRybiIsImlzUGVyY2VudGFnZSIsImZ1bmRpbmdJbmZvU3VtbWFyeSIsIm1lYXN1cmUiLCJmb3JtYXRBbW91bnQiLCJfYnVpbGRGdW5kaW5nSW5mb3JtYXRpb24iLCJBUElkZW50aWZpY2F0aW9uIiwiV1NfVkFMSURBVElPTl9PRkYiLCJXU19WQUxJREFUSU9OX0FMTF9FRElUIiwiV1NfVkFMSURBVElPTl9ORVdfT05MWSIsIldTX1ZBTElEQVRJT05fRklFTEQiLCJDUk9TU19URUFNX1ZBTElEQVRJT04iLCJXU19BQ0NFU1NfVFlQRV9NQU5BR0VNRU5UIiwiV1NfQUNDRVNTX1RZUEVfVEVBTSIsIlJPTEVfVEVBTV9NRU1CRVJfV1NfTUFOQUdFUiIsIlJPTEVfVEVBTV9NRU1CRVJfV1NfTUVNQkVSIiwiUk9MRV9URUFNX01FTUJFUl9XU19BUFBST1ZFUiIsIldPUktTUEFDRV9JRCIsIlJPTEVfSUQiLCJXT1JLU1BBQ0VfTEVBRF9JRCIsIkFDQ0VTU19UWVBFIiwiSVNfQ09NUFVURUQiLCJJU19QUklWQVRFIiwiRklSU1RfTkFNRSIsIkxBU1RfTkFNRSIsIkVNQUlMIiwiVEVBTV9NRU1CRVJfVVNFUl9JRCIsIkFkZGl0aW9uYWxJbmZvIiwiYWN0aXZpdHlXU01hbmFnZXIiLCJVc2VyQ29uc3RhbnRzIiwiYWN0aXZpdHlXb3Jrc3BhY2UiLCJhZGRpdGlvbmFsSW5mbyIsInRlYW1OYW1lIiwiYWNjZXNzVHlwZSIsIldvcmtzcGFjZUNvbnN0YW50cyIsImlzQ29tcHV0ZWRUZWFtIiwiaW5zdGFuY2UiLCJfZ2V0V29ya3NwYWNlTGVhZERhdGEiLCJfYnVpbGRBZGRpdGlvbmFsSW5mbyIsIldPUktTUEFDRVNfR1JPVVBTIiwidHlwZSJdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLFNBQVMsV0FBVyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUU7RUFDN0IsS0FBSyxHQUFHLEtBQUssS0FBSyxDQUFDLEdBQUcsR0FBRyxHQUFHLEVBQUUsQ0FBQztFQUMvQixJQUFJLFFBQVEsR0FBRyxHQUFHLENBQUMsUUFBUSxDQUFDOztFQUU1QixJQUFJLENBQUMsR0FBRyxJQUFJLE9BQU8sUUFBUSxLQUFLLFdBQVcsRUFBRSxFQUFFLE9BQU8sRUFBRTs7RUFFeEQsSUFBSSxJQUFJLEdBQUcsUUFBUSxDQUFDLElBQUksSUFBSSxRQUFRLENBQUMsb0JBQW9CLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7RUFDckUsSUFBSSxLQUFLLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQztFQUM1QyxLQUFLLENBQUMsSUFBSSxH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
