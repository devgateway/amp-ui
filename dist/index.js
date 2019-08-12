'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var PropTypes = _interopDefault(require('prop-types'));

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

      return React__default.createElement(TestAPField, {
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
        return React__default.createElement('div', { className: classNames, dangerouslySetInnerHTML: { __html: displayValue } });
      } else {
        return React__default.createElement(
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
      return React__default.createElement(
        'div',
        { className: this.displayClass },
        React__default.createElement(
          'div',
          { className: classNames },
          this.props.title
        ),
        this._getValue(),
        this.useSeparator ? React__default.createElement('hr', null) : ''
      );
    }
  }]);
  return TestAPField;
}(React.Component);


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
      return React__default.createElement(
        'div',
        null,
        React__default.createElement(
          'h2',
          null,
          'testing component'
        ),
        React__default.createElement(
          'div',
          null,
          'test translation: `DESKTOP = ',
          this.props.translate('DESKTOP'),
          '`'
        ),
        React__default.createElement(
          'div',
          null,
          'test APField:',
          React__default.createElement(TestAPField, { ampLogger: this.props.ampLogger, translate: this.props.translate })
        )
      );
    }
  }]);
  return TestingSection;
}(React.Component);

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
    value: function clone(fieldsManager) {
      var newFieldsManager = new FieldsManager([], []);
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
  FeatureManager: FeatureManager
};

exports.TestAPField = TestAPField;
exports.TestingSection = TestingSection;
exports.Constants = Constants;
exports.ActivityConstants = ActivityConstants;
exports.FeatureManagerConstants = FeatureManagerConstants;
exports.ErrorConstants = ErrorConstants;
exports.CurrencyRatesManager = CurrencyRatesManager;
exports.FieldsManager = FieldsManager;
exports.FieldPathConstants = FieldPathConstants;
exports.ValueConstants = ValueConstants;
exports.PossibleValuesManager = PossibleValuesManager;
exports.FeatureManager = FeatureManager;
exports.default = index;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIi4uL25vZGVfbW9kdWxlcy9zdHlsZS1pbmplY3QvZGlzdC9zdHlsZS1pbmplY3QuZXMuanMiLCIuLi9zcmMvYWN0aXZpdHlQcmV2aWV3L2NvbXBvbmVudHMvVGVzdEFQRmllbGQuanMiLCIuLi9zcmMvYWN0aXZpdHlQcmV2aWV3L2NvbXBvbmVudHMvVGVzdGluZ1NlY3Rpb24uanMiLCIuLi9zcmMvdXRpbHMvQ29uc3RhbnRzLmpzIiwiLi4vc3JjL21vZHVsZXMvdXRpbC9GZWF0dXJlTWFuYWdlckNvbnN0YW50cy5qcyIsIi4uL3NyYy9tb2R1bGVzL3V0aWwvQWN0aXZpdHlDb25zdGFudHMuanMiLCIuLi9zcmMvdXRpbHMvY29uc3RhbnRzL0Vycm9yQ29uc3RhbnRzLmpzIiwiLi4vc3JjL3V0aWxzL1ZhbHVlQ29uc3RhbnRzLmpzIiwiLi4vc3JjL3V0aWxzL0ZpZWxkUGF0aENvbnN0YW50cy5qcyIsIi4uL3NyYy9tb2R1bGVzL2ZpZWxkL0ZpZWxkc01hbmFnZXIuanMiLCIuLi9zcmMvbW9kdWxlcy91dGlsL0N1cnJlbmN5UmF0ZXNNYW5hZ2VyLmpzIiwiLi4vc3JjL21vZHVsZXMvZmllbGQvUG9zc2libGVWYWx1ZXNNYW5hZ2VyLmpzIiwiLi4vc3JjL21vZHVsZXMvdXRpbC9GZWF0dXJlTWFuYWdlci5qcyIsIi4uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBzdHlsZUluamVjdChjc3MsIHJlZikge1xuICBpZiAoIHJlZiA9PT0gdm9pZCAwICkgcmVmID0ge307XG4gIHZhciBpbnNlcnRBdCA9IHJlZi5pbnNlcnRBdDtcblxuICBpZiAoIWNzcyB8fCB0eXBlb2YgZG9jdW1lbnQgPT09ICd1bmRlZmluZWQnKSB7IHJldHVybjsgfVxuXG4gIHZhciBoZWFkID0gZG9jdW1lbnQuaGVhZCB8fCBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZCcpWzBdO1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICBzdHlsZS50eXBlID0gJ3RleHQvY3NzJztcblxuICBpZiAoaW5zZXJ0QXQgPT09ICd0b3AnKSB7XG4gICAgaWYgKGhlYWQuZmlyc3RDaGlsZCkge1xuICAgICAgaGVhZC5pbnNlcnRCZWZvcmUoc3R5bGUsIGhlYWQuZmlyc3RDaGlsZCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGhlYWQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBoZWFkLmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHN0eWxlSW5qZWN0O1xuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uLy4uL2FjdGl2aXR5QXNzZXRzL3N0eWxlc2hlZXRzL0FjdGl2aXR5UHJldmlldy5jc3MnO1xuXG5cbi8qKlxuICogU2ltcGxlIEZpZWxkIGNvbXBvbmVudCB0aGF0IGNvbnNpc3RzIG9mIGEgZmllbGQgdGl0bGUgYW5kIGZpZWxkIHZhbHVlXG4gKiBAYXV0aG9yIE5hZGVqZGEgTWFuZHJlc2N1XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRlc3RBUEZpZWxkIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgLyoqXG4gICAqIEdldHMgYW4gaW5zdGFuY2Ugb2YgU2ltcGxlIEZpZWxkXG4gICAqIEBwYXJhbSB0cm5MYWJlbCB0aGUgbGFiZWwgdG8gdHJhbnNsYXRlIGFuZCB1c2UgYXMgYSB0aXRsZS4gVGhpcyBsYWJlbCBpcyBhbHNvIHVzZWQgYXMgdGhlIGNvbXBvbmVudCBrZXkuXG4gICAqIEBwYXJhbSB2YWx1ZSB0aGUgZmllbGQgdmFsdWVcbiAgICogQHBhcmFtIGlubGluZSBzaG93IHRpdGxlIGFuZCB2YWx1ZSBpbiB0aGUgc2FtZSByb3cuXG4gICAqIEBwYXJhbSBzZXBhcmF0b3IgYWRkIG9yIG5vdCBhbiA8aHI+IHRhZy5cbiAgICogQHBhcmFtIG5hbWVDbGFzcyBjc3MgY2xhc3MgZm9yIHRoZSBmaWVsZCBsYWJlbFxuICAgKiBAcGFyYW0gdmFsdWVDbGFzcyBjc3MgY2xhc3MgZm9yIHRoZSBmaWVsZCB2YWx1ZVxuICAgKiBAcmV0dXJuIHtTaW1wbGVGaWVsZH1cbiAgICovXG4gIHN0YXRpYyBpbnN0YW5jZSh0cm5MYWJlbCwgdmFsdWUsIGlubGluZSA9IGZhbHNlLCBzZXBhcmF0b3IgPSBmYWxzZSwgbmFtZUNsYXNzLCB2YWx1ZUNsYXNzKSB7XG4gICAgcmV0dXJuICg8VGVzdEFQRmllbGRcbiAgICAgIGtleT17dHJuTGFiZWx9IHRpdGxlPXt0aGlzLnByb3BzLnRyYW5zbGF0ZSh0cm5MYWJlbCl9IHZhbHVlPXt2YWx1ZX0gaW5saW5lPXtpbmxpbmV9IHNlcGFyYXRvcj17c2VwYXJhdG9yfVxuICAgICAgZmllbGROYW1lQ2xhc3M9e25hbWVDbGFzc30gZmllbGRWYWx1ZUNsYXNzPXt2YWx1ZUNsYXNzfSAvPik7XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnByb3BzLmFtcExvZ2dlci5sb2coJ2NvbnN0cnVjdG9yZScpO1xuICAgIHRoaXMudXNlU2VwYXJhdG9yID0gdGhpcy5wcm9wcy5zZXBhcmF0b3IgIT09IGZhbHNlO1xuICAgIHRoaXMuZGlzcGxheUNsYXNzID0gdGhpcy5wcm9wcy5maWVsZENsYXNzIHx8ICh0aGlzLnByb3BzLmlubGluZSA9PT0gdHJ1ZSA/IHN0eWxlcy5pbmxpbmUgOiBzdHlsZXMuYmxvY2spO1xuICB9XG5cbiAgX2dldFZhbHVlKCkge1xuICAgIGNvbnN0IGNsYXNzTmFtZXMgPSBgJHt0aGlzLnByb3BzLmZpZWxkVmFsdWVDbGFzc30gJHt0aGlzLmRpc3BsYXlDbGFzc31gO1xuICAgIC8vIFRvIGhhbmRsZSBib29sZWFuIGZpZWxkcyB3ZSBkb250IHdhbnQgdG8gc2hvdyAnZmFsc2UnIGFzICdObyBEYXRhJy5cbiAgICBjb25zdCB2YWx1ZSA9ICh0aGlzLnByb3BzLnZhbHVlIHx8IHRoaXMucHJvcHMudmFsdWUgPT09IGZhbHNlKSA/IHRoaXMucHJvcHMudmFsdWUgOiB0aGlzLnByb3BzLnRyYW5zbGF0ZSgnTm8gRGF0YScpO1xuICAgIGxldCBkaXNwbGF5VmFsdWU7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICBpZiAodmFsdWVbMF0gaW5zdGFuY2VvZiBPYmplY3QpIHtcbiAgICAgICAgZGlzcGxheVZhbHVlID0gW107XG4gICAgICAgIHZhbHVlLmZvckVhY2godiA9PiBkaXNwbGF5VmFsdWUucHVzaCh2KSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkaXNwbGF5VmFsdWUgPSB2YWx1ZS5zb3J0KCkuam9pbignLCAnKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgICBkaXNwbGF5VmFsdWUgPSB2YWx1ZSA9PT0gdHJ1ZSA/IHRoaXMucHJvcHMudHJhbnNsYXRlKCdZZXMnKSA6IHRoaXMucHJvcHMudHJhbnNsYXRlKCdObycpO1xuICAgIH0gZWxzZSB7XG4gICAgICBkaXNwbGF5VmFsdWUgPSAodGhpcy5wcm9wcy5pbmxpbmUgJiYgdGhpcy5wcm9wcy52YWx1ZSBpbnN0YW5jZW9mIFN0cmluZykgPyBgJHt2YWx1ZX0gYCA6IHZhbHVlO1xuICAgIH1cbiAgICBpZiAodGhpcy5wcm9wcy51c2VJbm5lckhUTUwpIHtcbiAgICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lc30gZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBkaXNwbGF5VmFsdWUgfX0gLz47XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lc30+e2Rpc3BsYXlWYWx1ZX08L2Rpdj47XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IGNsYXNzTmFtZXMgPSBgJHt0aGlzLnByb3BzLmZpZWxkTmFtZUNsYXNzfSAke3RoaXMuZGlzcGxheUNsYXNzfWA7XG4gICAgcmV0dXJuICg8ZGl2IGNsYXNzTmFtZT17dGhpcy5kaXNwbGF5Q2xhc3N9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZXN9Pnt0aGlzLnByb3BzLnRpdGxlfTwvZGl2PlxuICAgICAge3RoaXMuX2dldFZhbHVlKCl9XG4gICAgICB7dGhpcy51c2VTZXBhcmF0b3IgPyA8aHIgLz4gOiAnJ31cbiAgICA8L2Rpdj4pO1xuICB9XG59XG5cblRlc3RBUEZpZWxkLnByb3BUeXBlcyA9IHtcbiAgdGl0bGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHZhbHVlOiBQcm9wVHlwZXMuYW55LFxuICBpbmxpbmU6IFByb3BUeXBlcy5ib29sLFxuICB1c2VJbm5lckhUTUw6IFByb3BUeXBlcy5ib29sLFxuICBmaWVsZENsYXNzOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBmaWVsZE5hbWVDbGFzczogUHJvcFR5cGVzLnN0cmluZyxcbiAgZmllbGRWYWx1ZUNsYXNzOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBzZXBhcmF0b3I6IFByb3BUeXBlcy5ib29sLFxuICBhbXBMb2dnZXI6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgdHJhbnNsYXRlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkXG59O1xuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgVGVzdEFQRmllbGQgZnJvbSAnLi9UZXN0QVBGaWVsZCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRlc3RpbmdTZWN0aW9uIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8aDI+dGVzdGluZyBjb21wb25lbnQ8L2gyPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIHRlc3QgdHJhbnNsYXRpb246IGBERVNLVE9QID0ge3RoaXMucHJvcHMudHJhbnNsYXRlKCdERVNLVE9QJyl9YFxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICB0ZXN0IEFQRmllbGQ6XG4gICAgICAgICAgPFRlc3RBUEZpZWxkIGFtcExvZ2dlcj17dGhpcy5wcm9wcy5hbXBMb2dnZXJ9IHRyYW5zbGF0ZT17dGhpcy5wcm9wcy50cmFuc2xhdGV9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+KTtcbiAgfVxufVxuVGVzdGluZ1NlY3Rpb24ucHJvcFR5cGVzID0ge1xuICBhbXBMb2dnZXI6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgdHJhbnNsYXRlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkXG59O1xuIiwiXG5jb25zdCBCQVNFX1JFU1RfVVJMID0gJy9yZXN0JztcblxuXG5jb25zdCBDT05ORUNUSU9OX1RJTUVPVVQgPSAyNTAwMDtcbmNvbnN0IENPTk5FQ1RJT05fRk9SQ0VEX1RJTUVPVVQgPSBDT05ORUNUSU9OX1RJTUVPVVQgKyA1MDAwO1xuY29uc3QgVElNRU9VVF9DSEVDS19JTlRFUlZBTCA9IDUwMDA7XG5jb25zdCBNQVhfUkVUUllfQVRFTVBUUyA9IDU7XG5jb25zdCBFUlJPUlNfVE9fUkVUUlkgPSBbJ0VTT0NLRVRUSU1FRE9VVCcsICdFVElNRURPVVQnLCAnRUNPTk5SRVNFVCcsICdFQUlfQUdBSU4nXTtcbmNvbnN0IEVSUk9SU19OT19BTVBfU0VSVkVSID0gWydFQ09OTlJFRlVTRUQnLCAnRU5FVFVOUkVBQ0gnLCAnRU5PRU5UJywgJ0VOT1RGT1VORCcsICdFTkVURE9XTicsICdFSE9TVERPV04nLFxuICAnRUhPU1RVTlJFQUNIJywgJ0VOT05FVCddO1xuY29uc3QgQ09OTkVDVElWSVRZX0NIRUNLX0lOVEVSVkFMID0gJzYwMDAwJzsgLy8gMSBtaW51dGVzXG5cbmNvbnN0IFdPUktTUEFDRV9VUkwgPSAnL3dvcmtzcGFjZSc7XG5jb25zdCBMT0dJTl9VUkwgPSAnLyc7XG5jb25zdCBERVNLVE9QX1VSTCA9ICcvZGVza3RvcCc7XG5jb25zdCBERVNLVE9QX0NVUlJFTlRfVVJMID0gJy9kZXNrdG9wL2N1cnJlbnQnO1xuY29uc3QgU1lOQ1VQX1JFRElSRUNUX1VSTCA9ICcvc3luY1VwL3N5bmMnO1xuY29uc3QgU1lOQ1VQX0hJU1RPUllfVEFSR0VUID0gJ2hpc3RvcnknO1xuY29uc3QgU1lOQ1VQX1NVTU1BUllfVVJMID0gJy9zeW5jVXBTdW1tYXJ5JztcbmNvbnN0IEFDVElWSVRZX1BSRVZJRVdfVVJMID0gJy9hY3Rpdml0eS9wcmV2aWV3JztcbmNvbnN0IEFDVElWSVRZX0VESVRfVVJMID0gJy9hY3Rpdml0eS9lZGl0JztcbmNvbnN0IFVQREFURV9VUkwgPSAnL3VwZGF0ZSc7XG5jb25zdCBTRVRVUF9VUkwgPSAnL3NldHVwJztcbmNvbnN0IFNFVFRJTkdTX1VSTCA9ICcvc2V0dGluZ3MnO1xuXG5jb25zdCBDT0xMRUNUSU9OX1VTRVJTID0gJ3VzZXJzJztcbmNvbnN0IENPTExFQ1RJT05fV09SS1BBQ0VTID0gJ3dvcmtzcGFjZXMnO1xuY29uc3QgQ09MTEVDVElPTl9URUFNTUVNQkVSUyA9ICd0ZWFtbWVtYmVycyc7XG5jb25zdCBDT0xMRUNUSU9OX0NMSUVOVF9TRVRUSU5HUyA9ICdjbGllbnQtc2V0dGluZ3MnO1xuY29uc3QgQ09MTEVDVElPTl9HTE9CQUxfU0VUVElOR1MgPSAnZ2xvYmFsLXNldHRpbmdzJztcbmNvbnN0IENPTExFQ1RJT05fQUNUSVZJVElFUyA9ICdhY3Rpdml0aWVzJztcbmNvbnN0IENPTExFQ1RJT05fRklFTERTID0gJ2ZpZWxkcyc7XG5jb25zdCBDT0xMRUNUSU9OX1BPU1NJQkxFX1ZBTFVFUyA9ICdwb3NzaWJsZS12YWx1ZXMnO1xuY29uc3QgQ09MTEVDVElPTl9TWU5DVVBfTE9HID0gJ3N5bmN1cC1sb2cnO1xuY29uc3QgQ09MTEVDVElPTl9MQU5HUyA9ICdsYW5ndWFnZXMnO1xuY29uc3QgQ09MTEVDVElPTl9XU19TRVRUSU5HUyA9ICd3b3Jrc3BhY2Utc2V0dGluZ3MnO1xuY29uc3QgQ09MTEVDVElPTl9DVVJSRU5DWV9SQVRFUyA9ICdjdXJyZW5jeS1yYXRlcyc7XG5jb25zdCBDT0xMRUNUSU9OX0ZFQVRVUkVfTUFOQUdFUiA9ICdmZWF0dXJlLW1hbmFnZXInO1xuY29uc3QgQ09MTEVDVElPTl9DT05UQUNUUyA9ICdjb250YWN0cyc7XG5jb25zdCBDT0xMRUNUSU9OX1JFU09VUkNFUyA9ICdyZXNvdXJjZXMnO1xuY29uc3QgQ09MTEVDVElPTl9SRVBPU0lUT1JZID0gJ3JlcG9zaXRvcnknO1xuY29uc3QgQ09MTEVDVElPTl9HQVpFVFRFRVIgPSAnZ2F6ZXR0ZWVyJztcbmNvbnN0IENPTExFQ1RJT05fQ0FMRU5EQVJTID0gJ2NhbGVuZGFycyc7XG5jb25zdCBDT0xMRUNUSU9OX0NIQU5HRVNFVFMgPSAnY2hhbmdlc2V0cyc7XG5cbmNvbnN0IEdBWkVUVEVFUl9ESVNUQU5DRV9ESVZJREUgPSAzO1xuXG5jb25zdCBEQl9GSUxFX1BSRUZJWCA9ICdkYXRhYmFzZSc7XG5jb25zdCBEQl9GSUxFX0VYVEVOU0lPTiA9ICcuZGInO1xuY29uc3QgREJfQ09NTU9OX0RBVEFTVE9SRV9PUFRJT05TID0geyBhdXRvbG9hZDogZmFsc2UsIGNvcnJ1cHRBbGVydFRocmVzaG9sZDogMCB9O1xuY29uc3QgREJfQVVUT0NPTVBBQ1RfSU5URVJWQUxfTUlMSVNFQ09ORFMgPSA2MDAwMDtcbmNvbnN0IERCX0RFRkFVTFRfUVVFUllfTElNSVQgPSA5OTk5OTk5OTk7XG5cbmNvbnN0IExBTkdVQUdFX0VOR0xJU0ggPSAnZW4nO1xuY29uc3QgRlNfTE9DQUxFU19ESVJFQ1RPUlkgPSAnbGFuZyc7XG5jb25zdCBMQU5HVUFHRV9NQVNURVJfVFJBTlNMQVRJT05TX0ZJTEUgPSAnbWFzdGVyLXRyYW5zbGF0aW9ucyc7XG5jb25zdCBMQU5HVUFHRV9UUkFOU0xBVElPTlNfRklMRSA9ICd0cmFuc2xhdGlvbnMnO1xuY29uc3QgTEFOR1VBR0VfTkVXX1RSQU5TTEFUSU9OU19NVVNUX1NZTkMgPSAnbXVzdF9zeW5jX3RyYW5zbGF0aW9uLmpzb24nO1xuXG5jb25zdCBBU0FSX0RJUiA9ICdhcHAuYXNhcic7XG5jb25zdCBBUFBfRElSRUNUT1JZID0gJ2FwcCc7XG5jb25zdCBURVNUX0RJUkVDVE9SWSA9ICd0ZXN0JztcbmNvbnN0IFNUQVRJQ19ESVIgPSAnc3RhdGljJztcbmNvbnN0IElNQUdFU19ESVIgPSAnaW1hZ2VzJztcbmNvbnN0IERPQ19JQ09OUyA9ICdkb2MtaWNvbnMnO1xuY29uc3QgREJfU1RBVElDX0RJUiA9ICdkYic7XG5jb25zdCBNSUdSQVRJT05TX0RJUiA9ICdjaGFuZ2Vsb2cnO1xuXG5jb25zdCBIQVNIX0lURVJBVElPTlMgPSAxMDA7XG5jb25zdCBESUdFU1RfQUxHT1JJVEhNX1NIQTEgPSAnU0hBLTEnO1xuY29uc3QgRElHRVNUX0FMR09SSVRITV9TSEEyNTYgPSAnU0hBLTI1Nic7XG5cbmNvbnN0IEFDVElWSVRZX0VESVQgPSAnQUNUSVZJVFlfRURJVCc7XG5jb25zdCBBQ1RJVklUWV9WSUVXID0gJ0FDVElWSVRZX1ZJRVcnO1xuXG5jb25zdCBTWU5DVVBfRk9SQ0VfREFZUyA9IDE0O1xuY29uc3QgU1lOQ1VQX0JFU1RfQkVGT1JFX0RBWVMgPSA3O1xuY29uc3QgU1lOQ1VQX05PX0RBVEUgPSAnMTkwMC0wMS0wMVQwMDowMDowMC4wMDArMDAwMCc7XG5jb25zdCBTWU5DVVBfVFlQRV9UUkFOU0xBVElPTlMgPSAndHJhbnNsYXRpb25zJztcbmNvbnN0IFNZTkNVUF9UWVBFX1VTRVJTID0gJ3VzZXJzJztcbmNvbnN0IFNZTkNVUF9UWVBFX0FTU0VUUyA9ICdhc3NldHMnO1xuY29uc3QgU1lOQ1VQX1RZUEVfV09SS1NQQUNFUyA9ICd3b3Jrc3BhY2VzJztcbmNvbnN0IFNZTkNVUF9UWVBFX0dTID0gJ2dsb2JhbC1zZXR0aW5ncyc7XG5jb25zdCBTWU5DVVBfVFlQRV9FWENIQU5HRV9SQVRFUyA9ICdleGNoYW5nZS1yYXRlcyc7XG5jb25zdCBTWU5DVVBfVFlQRV9GRUFUVVJFX01BTkFHRVIgPSAnZmVhdHVyZS1tYW5hZ2VyJztcbmNvbnN0IFNZTkNVUF9UWVBFX1dPUktTUEFDRV9NRU1CRVJTID0gJ3dvcmtzcGFjZS1tZW1iZXJzJztcbmNvbnN0IFNZTkNVUF9UWVBFX0FMTF9GSUVMRFMgPSAnZmllbGRzJztcbmNvbnN0IFNZTkNVUF9UWVBFX0FDVElWSVRJRVNfUFVMTCA9ICdhY3Rpdml0aWVzJztcbmNvbnN0IFNZTkNVUF9UWVBFX0FDVElWSVRJRVNfUFVTSCA9ICdhY3Rpdml0aWVzLXB1c2gnO1xuY29uc3QgU1lOQ1VQX1RZUEVfQUNUSVZJVFlfRklFTERTID0gJ2FjdGl2aXR5LWZpZWxkcyc7XG5jb25zdCBTWU5DVVBfVFlQRV9BQ1RJVklUWV9GSUVMRFNfU1RSVUNUVVJBTF9DSEFOR0VTID0gJ2FjdGl2aXR5LWZpZWxkcy1zdHJ1Y3R1cmFsLWNoYW5nZXMnO1xuY29uc3QgU1lOQ1VQX1RZUEVfQ09OVEFDVFNfUFVMTCA9ICdjb250YWN0cyc7XG5jb25zdCBTWU5DVVBfVFlQRV9DT05UQUNUU19QVVNIID0gJ2NvbnRhY3RzLXB1c2gnO1xuY29uc3QgU1lOQ1VQX1RZUEVfQUNUSVZJVFlfUE9TU0lCTEVfVkFMVUVTID0gJ2FjdGl2aXR5LXBvc3NpYmxlLXZhbHVlcy1maWVsZHMnO1xuY29uc3QgU1lOQ1VQX1RZUEVfQ09OVEFDVF9GSUVMRFMgPSAnY29udGFjdC1maWVsZHMnO1xuY29uc3QgU1lOQ1VQX1RZUEVfQ09OVEFDVF9GSUVMRFNfU1RSVUNUVVJBTF9DSEFOR0VTID0gJ2NvbnRhY3QtZmllbGRzLXN0cnVjdHVyYWwtY2hhbmdlcyc7XG5jb25zdCBTWU5DVVBfVFlQRV9DT05UQUNUX1BPU1NJQkxFX1ZBTFVFUyA9ICdjb250YWN0LXBvc3NpYmxlLXZhbHVlcy1maWVsZHMnO1xuY29uc3QgU1lOQ1VQX1RZUEVfUkVTT1VSQ0VTX1BVTEwgPSAncmVzb3VyY2VzJztcbmNvbnN0IFNZTkNVUF9UWVBFX1JFU09VUkNFU19QVVNIID0gJ3Jlc291cmNlcy1wdXNoJztcbmNvbnN0IFNZTkNVUF9UWVBFX1JFU09VUkNFX0ZJRUxEUyA9ICdyZXNvdXJjZS1maWVsZHMnO1xuY29uc3QgU1lOQ1VQX1RZUEVfUkVTT1VSQ0VfRklFTERTX1NUUlVDVFVSQUxfQ0hBTkdFUyA9ICdyZXNvdXJjZS1maWVsZHMtc3RydWN0dXJhbC1jaGFuZ2VzJztcbmNvbnN0IFNZTkNVUF9UWVBFX1JFU09VUkNFX1BPU1NJQkxFX1ZBTFVFUyA9ICdyZXNvdXJjZS1wb3NzaWJsZS12YWx1ZXMtZmllbGRzJztcbmNvbnN0IFNZTkNVUF9UWVBFX0NPTU1PTl9QT1NTSUJMRV9WQUxVRVMgPSAnY29tbW9uLXBvc3NpYmxlLXZhbHVlcy1maWVsZHMnO1xuY29uc3QgU1lOQ1VQX1RZUEVfV09SS1NQQUNFX1NFVFRJTkdTID0gJ3dvcmtzcGFjZS1zZXR0aW5ncyc7XG5jb25zdCBTWU5DVVBfVFlQRV9NQVBfVElMRVMgPSAnbWFwLXRpbGVzJztcbmNvbnN0IFNZTkNVUF9UWVBFX0dBWkVUVEVFUiA9ICdsb2NhdG9ycyc7XG5jb25zdCBTWU5DVVBfVFlQRV9DQUxFTkRBUlMgPSAnY2FsZW5kYXJzJztcblxuY29uc3QgU1lOQ1VQX1NUQVRVU19TVUNDRVNTID0gJ1NVQ0NFU1MnO1xuY29uc3QgU1lOQ1VQX1NUQVRVU19GQUlMID0gJ0ZBSUwnO1xuY29uc3QgU1lOQ1VQX1NUQVRVU19QQVJUSUFMID0gJ1BBUlRJQUwnO1xuY29uc3QgU1lOQ1VQX1NUQVRVU19DQU5DRUxFRCA9ICdDQU5DRUxFRCc7XG5jb25zdCBTWU5DVVBfU1lOQ19SRVFVRVNURURfQVQgPSAnc3luYy1kYXRlJztcbmNvbnN0IFNZTkNVUF9TWU5DX1JFUVVFU1RFRF9CWSA9ICdyZXF1ZXN0ZWQtYnknO1xuY29uc3QgU1lOQ1VQX0RBVEVUSU1FX0ZJRUxEID0gJ3RpbWVzdGFtcCc7XG5jb25zdCBTWU5DVVBfRElGRl9MRUZUT1ZFUiA9ICdzeW5jdXAtZGlmZi1sZWZ0b3Zlcic7XG5jb25zdCBTWU5DVVBfREVQRU5ERU5DWV9DSEVDS19JTlRFUlZBTCA9IDEwO1xuY29uc3QgU1lOQ1VQX0RFVEFJTFNfU1lOQ0VEID0gJ3N5bmNlZCc7XG5jb25zdCBTWU5DVVBfREVUQUlMU19VTlNZTkNFRCA9ICd1bnN5bmNlZCc7XG5jb25zdCBTWU5DVVBfUkVTT1VSQ0VfUFVMTF9CQVRDSF9TSVpFID0gMTAwO1xuY29uc3QgU1lOQ1VQX0FDVElWSVRJRVNfUFVMTF9CQVRDSF9TSVpFID0gMTAwO1xuY29uc3QgU1lOQ1VQX0NPTlRBQ1RTX1BVTExfQkFUQ0hfU0laRSA9IDEwMDtcblxuY29uc3QgQUNUSVZJVFlfU1RBVFVTX0RSQUZUID0gJ0FDVElWSVRZX1NUQVRVU19EUkFGVCc7XG5jb25zdCBBQ1RJVklUWV9TVEFUVVNfVU5WQUxJREFURUQgPSAnQUNUSVZJVFlfU1RBVFVTX1VOVkFMSURBVEVEJztcbmNvbnN0IEFDVElWSVRZX1NUQVRVU19WQUxJREFURUQgPSAnQUNUSVZJVFlfU1RBVFVTX1ZBTElEQVRFRCc7XG5cbmNvbnN0IENVUlJFTkNZX0hPVVIgPSAnMDA6MDAnO1xuY29uc3QgREVGQVVMVF9DVVJSRU5DWSA9ICdVU0QnO1xuY29uc3QgUkFURV9TQU1FX0NVUlJFTkNZID0gMTtcbmNvbnN0IFJBVEVfQ1VSUkVOQ1lfTk9UX0ZPVU5EID0gMTtcbmNvbnN0IENVUlJFTkNZX1BBSVIgPSAnY3VycmVuY3ktcGFpcic7XG5jb25zdCBWRVJTSU9OX1BBVFRFUk4gPSAvKFxcZCspXFwuKFxcZCspKFxcLihcXGQrKSk/KC1cXHcrKT8vO1xuY29uc3QgVkVSU0lPTl9QQVRURVJOX0dST1VQU19UT19FWFRSQUNUID0gWzEsIDIsIDQsIDVdO1xuY29uc3QgQU1QX0NPVU5UUllfTE9HTyA9ICdhbXBDb3VudHJ5RmxhZy5wbmcnO1xuY29uc3QgQVNTRVRTX0RJUkVDVE9SWSA9ICdhc3NldHMnO1xuY29uc3QgQkFTRV82NF9QTkdfUFJFRklYID0gJ2RhdGE6aW1hZ2UvcG5nO2Jhc2U2NCwnO1xuLy8gSG9sZHMgdGhlIEJBU0U2NCByZXByZXNlbnRhdGlvbiBvZiBhIGEgdHJhbnNwYXJlbnQgaW1hZ2UgMXgxIGluIGNhc2Ugd2UgZG9uJ3QgeWV0IGhhdmUgdGhlIGNvdW50cnkgZmxhZ1xuY29uc3RcbiAgVFJBTlNQQVJFTlRfRkxBRyA9ICdpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQUVBQUFBQkNBUUFBQUMxSEF3Q0FBQUFDMGxFUVZSNG5HUDZ6d0FBQWdjQkFwb2NNWEVBQUFBQVNVVk9SSzVDWUlJPSc7XG5jb25zdCBIRUxQX1BERl9GSUxFTkFNRSA9ICdhbXAtaGVscCc7XG5jb25zdCBIRUxQX0RJUiA9ICdoZWxwJztcbmNvbnN0IEVORFNfV0lUSF9QVU5DVFVBVElPTl9SRUdFWCA9IC9bLiE/LDs6XSQvO1xuXG5jb25zdCBNQVBfVElMRVNfRElSID0gJ21hcC10aWxlcyc7XG5jb25zdCBUSUxFU19aSVBfRklMRSA9ICdtYXAtdGlsZXMuemlwJztcblxuLyogZXNsaW50LWRpc2FibGUgbWF4LWxlbiAqL1xuY29uc3QgTUFQX01BUktFUl9JTUFHRSA9ICdkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUJrQUFBQXBDQVlBQUFEQWs0TE9BQUFGZ1VsRVFWUjRBYTFYQTVCaldSVE4yb1cxN2QzWWFadHIyOTYySFV6YkROcGpzelcyNG1SdDI4cDQ3djd6cS9iWFp0cnAvbFduWHIzMzdqM25QQ2U4NU5jeXBnU0ZkdWdDcFc1WW9EQU1SYUlNcVJpNmFLcTVFM1lxRFFPM3FBd2pWV3JEOE5jcS9SQnB5a2Q4b1pVYi9rYUp1dG93OHIxYVA5SUkwV21MS0xJc0p5djF3L2txdzlDaDJNWWRCKysxMk9ueGVlL1FNd3ZmNC9Eay9MZnAvaTRueFRYdE9vUTRwVzVBajd3cGljaTFBOWVyZEFOMk9INjR4OE9TUDlqM0Z0M2I3YVdrVGcvRm05MXNpVHJhMGY5b241c1FyOUlOZWpINkNVVVVwYXZqRk5xMUIrT2FkaHhtbmZhOFJmRW1OOFZOQXNRaFBxRjU1eEhrTXp6M2pTbUNoV1U2ZjcvWFpLTkgrOStoQkxPSFlvenVLUVB4eU1QVUtrclgvSzB1V25mRmFKR1MxUVBSdFpzT1B0cjNOc1cwdXloNk5OQ09rVTNZeitiWGJUM0k4RzN4RTVFWExYdENYYmJxd0NPOXpQUVlQUlRaNXZJRFhEN1UrdzdyRkRFb1VVZjdpYkhJUjR5NmJMVlBYcno4SlZaRXFsMTN0cnh3dWUvdURpdmQzZmtXUmJTNi9JQTJiSUQ0dWswVXBGMU44cUxsYkJsWHM0RWU3SExUZlYxajU0QVB2T0RuU2ZPV0JxdEtWdmpnTEt6RjVZZEVrNWV3UmtHbEswaTMzRW9mZmZjN0hUNTZqRDcvNlUrcUgzQ3g3U0JMTm50SDVZSVB2T0RueWZJWFpZUlZEUHFnSHRMczVBQkhEM1l6THVlc3BiN3Q3OUZZMzREak13clZyY1R1d2xUNTVZTVB2T0JuUnJKNFZYVGRObll1ZzV1Y0hMQmpFcHQzMDcwMUEzVHMrSEVhNzN1NmRUM0ZOV3dmbFk4NmVNSFBrK1l1K2k2cHpVcFJyVzdTTkRnNUpIUjRLYXBtTTVXdjJFOFRmY2IxSG9xcUhNSFUrdVdERDd6ZzU0bXo1LzJCU25pemk5VDFEZzRRUVhMVG9HTkNrYjZ0YjFOVStRQWxHcjErK2VBRHJ6aG4vdThRMllaaFFWbFo1K0NBT3RxZmJobWFVQ1MxZXpORlZtMmltRGJQbVBuZzV3bXorZ3doK29IRGNlMGVVdFE2T0dESXlSMHVVaFVzb08zdmZEbW1nT2V6SDBtWk41OXg3TUJpKytXREwxZy9lRWlVM2F2bGlkTzY3MWJrTGZ3Ync1WFYyUDhQem8weWR5NHQyLzBldTMzeFlTT01PRDhoVGY0Q3JCdEdNU29YZlBMY2hYK0owcnVTZVB3M0xaZUswanVQSmJZenJoa0gwaW83QjNrMTY0aGlHdmF3aE9LTUxrclFMeVZwWmc4ckhGVzdFMnVIT0w4ODhJQlBsTloxRlB6c3RTSk02OTRmV3I2UndwdmNKSzYwKzBIQ0lMVEJ6WkxGTmR0QXpKYW9oemU2MFQ4cUJ6eWg1WnVPZzVlN3V3UXBwb2ZFbWYyKytEWXZteVNxR0J1S2FpY0YxYmxRamh1SGR2Q0lNdnA4d2hUVGZaekk3UmxkcHd0U3pMK0YxK3drZFoyVEJPVzJnSUY4OFBCVHpEL2dwZVJFQU1FYnhuSmNhSkhOSHJwemppMGdRQ1M2aGRrRWVZdDlERi8ycVBjRUM4Uk0yOEh3bXIzc2ROeWh0MDBieUF1dDJrM2d1ZldOdGd0T0VPRkdVd2NYV05EYmROYnBnQkd4RXZLa09Rc3hpdkp4MzNpb3cwVnc1UzZTVlRycFZxMTF5c0EyUnA3Z1RmUGZrdGM2emh0WEJCQythZFJMc2hmNnNHMlJmSFBaNUVBYzRzVlo4M3lDTjAwRmsvNGtnZ3U0MFpUdklFbTVnMjRxdFU0S2pCcngvQlRUSDhpZlZBU0FHN2dLcm5XeEpEY1U3eDhYNkVjY3pobTNvNllpY3ZzTFhXZmgzQ2gxVzBrOHgwblhGKzBmRnhndDRwaHo4UXZ5cGl3Q0NGS01xWENucVhFeGpxMTBiZUgrVVVBNytuRzZtZEcvUHUwZjNMZ0ZjR3JsMnMwa05OanBtb0o5bzRCMjlDTU84ZE1UNFE1b3g4dWl0RjZmcXNySk9yOHFud05iUnp2NmhTbkc1d1ArNjRDN2g5bHAzMGhLTnRLZFdqdGRrYnVQQTE5bko3VHozelIvaWJnQVJiaGI0QWxoYXZjQmVibVRIY0ZsMmZ2WUVuVzBveDl4TXhLQlM4YnRKK0tpRWJxOXpBNFJ0aFFYRGhQYTBUOVRFZTY5Z1d1cHdjNnVCVXBocXVYZ2YrL0ZySWp3ZUhRUzQvcGR1TWU1RVJVTUhVZDl4djhaUjk4Q3hrUzRGMm4zRVVyVVoxMEVZTnc3QldtOXgxR2lQc3NpM0dnaUdSREtXUllaZlhsT04rZGZOYk0rR2dJd1lkd0FBQUFBU1VWT1JLNUNZSUk9JztcbmNvbnN0IE1BUF9NQVJLRVJfU0hBRE9XID0gJ2RhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQ2tBQUFBcENBUUFBQUFDYWNoOUFBQUNNVWxFUVZSNEFlM1NoWTdqUUJBRTBBb3ovZjkvSFRNemhnMXpyZEtVckpiZHgrS2QybkQ4Vk51ZGZzTC9UaC8vL2R5UU4yVEg2ZjN5L0JHcEMzNzlyVitTK3FxZXRCT3hJbU5RWEw4SkNBcjJWNGlNUVhIR05KeGVDZlpYaFNSQmNRTWZ2a09XVWR0ZnpsTGdBRU5tWkRjbW8yVFZtdDhPU00yZVh4QnAzRGpIU01GdXRxUzdTYm1lbXpCaVIreHBLQ05VSVJrZGtrWXhoQWt5R29CdnlRRkVKRWVmd1NtbXZCZkp1SjZhS3FLV25Ba3ZHWk9hWlhUVWdGcVlVTFdOU0hVY2tadVIxSElJaW1VRXh1dFJ4d3pPTFJPSUc0dkttQ0tRdDM2NG1JbGhTeXpBZjFtOWxIWkhKWnJsQU9NTXp0UlJpS2ltcC9ycGRKRGM5QXdyeTV4VFpDdGU3Rkh0dVM4d0pnZVlHcmV4Mjh4TlRkMDg2RGlrN3ZVTXNjUU9hOHk0RG9HdENDU2tBS2xOd3BnTnRwaGpyQzZNSUhVa1I2WVd4eHM2U2M1eHFuMjIybW1DUkZ6SXQ4bEVkS3graWtDdGc5MXFTMldwd1ZmQmVsSkNpUUp3dnppeGZJOWN4WlFXZ2lTSmVsS253QkVsS1l0RE9iMk1GYmhtVWlnYlJlUUJWMENnNCtxTVhTeFhTeUdVbjRVYkY4bCs3cWRTR25UQzBYTENtYWhJZ1VITGhMT2hwVkN0dzRDellYdkxRV1FiSk5teG9Dc09LQXhTZ0JKbm83NWF2b2xrUnc4aUlBRmNzZGMwMmU5aXlDZDh0SHdtZVNTb0tUb3dJZ3ZzY1NHWlVPQTdQdUNONWIyQlg5bVFNN1Mwd1loTU5VNzR6Z3NQQmozSFU3d2d1QWZueHhqRlFHQkU2cHdOK0dqTUU5ekhZN3pHcDh3VnhNU2hZWDlOWHZFV0QzSGJ3SmY0Z2lPNENGSVF4WFNjSDEvVE0rMDRra0JpQUFBQUFFbEZUa1N1UW1DQyc7XG5jb25zdCBNQVBfTUFSS0VSX0NJUkNMRV9SRUQgPSAnZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFCUUFBQUFVQ0FZQUFBQ05pUjBOQUFBQUJHZEJUVUVBQUxHUEMveGhCUUFBQUNCalNGSk5BQUI2SmdBQWdJUUFBUG9BQUFDQTZBQUFkVEFBQU9wZ0FBQTZtQUFBRjNDY3VsRThBQUFBQm1KTFIwUUEvd0QvQVArZ3ZhZVRBQUFBQjNSSlRVVUg0Z2NiRndvZ2VvaGhFQUFBQTFsSlJFRlVPTXVsbGMxckhHVWN4eisvWjJaMjB6R0U3bHV5UWJ5SWRpRXhyZTZhTnZTeVNFQkJLQjcxVkFJNW1HSkE5ZzhRcFI0OGFWR0s2SzE2MHB0WUQ3V3hoNENVa0pyRkdwS3lLV2dRbW5YZmFadDl5V2FlZVR6c1RFeGoxWU8vMC9ETXpHZCtiOS92Q0VIOGN1NTFqc1FRa0FFbWdGUndWZ00yZ1JMUU8vend5YXRmQXlDUGdVV0FWNEE1WUFaSUFuWnd6d1Bxd0Fwd0JmZ2U2QitHeWhGWUduZ1hPQSs0QUJqemFONGk0VlVIK0JKNEQ2aUVoL1lSMkdmQWF3Y2dZMUJQdUZqRHd3RG8zVjM4ZG1jQUZYR0JCV0FjZURPRWhzQklrTmtBNXZzNHlRU3gyVHdqcDNQWThkaWczbWFMKzZ0cnRHNHM0OVVib0JUQk8yWGdiYUJ2WGNnOEIvQXE4RDdnNFBzTVBmTTBUeFhld3MwK3p4OTM3dkQ3OG85VU56YlJqazNxcFR3akw1eWsrK3MyWHFNWnRtQUMrQm5Zc29OcHpnRXV4dUFrRXp4NVlaNitZMU44NXlLMTlRMk01dzNhWjl1a3BpYkpGaFlaWDVqbnR3OCtoR1lyTEg4T1dGTEJhc3lFZll2TjVySEdSaWxldWt5bGVCdU1RU3dMc1N3d2hrcnhOc1ZMbDdIVG8wVHpaK2w2SHNHWVpvQ01DdEpOaGdNWU9aMmp2UG9UdGZVTmxHMGQzVTJVYlZGYjM2QnlhNDM0bVdscUNqb0RhQktZVU1IUzJnRFc4REIyUEVacjYrNUJtWThMNDNrMFMxdTR5UVMrZTR5ZFRwdU8xclpBeXViL2hnZzk3Vkh1dGprZWlhSVl5TWtMOTh4cnRvaGxua1hzZi82VzJEYnh6QW02OVFiOUJ3OFJFWHBhNzFkNzNhcGlvTTA2SXZqdER2ZFgxeGlmZnBIVTFDUytwLzhHOHoxTmFtcVM5SFNPZXpkWDJHKzNRUVNCdXNDbVlpRDBsVEQ5MW8xbGRLVkt0ckRJV1BZVWlHQzB4bWdOSW94bFQ1RXJMTEs3VTJiNzJ0SmhLYTQ0U3BWQ0xaOER2Z0xjY0xISEYrYXgwNk5VYnEzUkxHMEJFTStjSUQyZFkzZW56TnBIbjlBczNVVUdhbWxiSW0vNHhud1hBaVBBeDRFMndmY2hFU2VhUDB2OHpEUnVNZ0ZBdDk3ZzNzMFZ0cTh0MGFuV1FoZ0NuMFl0cStBYjB6L3NObVBBNTRmTm9ldDUxQlQ0N2pFUW9mL2c0Vjg5QzBvVitNWVN0V0F3RllVODRqWVZCcTVSQnM0ajRycU9ROHJ6MktrMTZHa1BFVG5JQ21nTGZHR0p1dWhqS3I0eHhJZWkvMjJ3QXNtdTF2Wk90MDFQNjMwSkRGYUpYSEdVdXI3diszMXREUEZJbEpkL3VNckJpUDd0RnlDUWF2VDNxUGE2VllGTlI2blNudFo3amxJWTRIZ2t3dXoxYndINEU1bUNYSUJMUTVIbkFBQUFKWFJGV0hSa1lYUmxPbU55WldGMFpRQXlNREU0TFRBM0xUSTNWREl4T2pFd09qTXlLekF5T2pBdzdxNkdud0FBQUNWMFJWaDBaR0YwWlRwdGIyUnBabmtBTWpBeE9DMHdOeTB5TjFReU1Ub3hNRG96TWlzd01qb3dNSi96UGlNQUFBQUFTVVZPUks1Q1lJST0nO1xuY29uc3QgTUFQX01BUktFUl9DSVJDTEVfR1JFRU4gPSAnZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFCUUFBQUFVQ0FZQUFBQ05pUjBOQUFBQUJtSkxSMFFBL3dEL0FQK2d2YWVUQUFBQUNYQklXWE1BQUFzVEFBQUxFd0VBbXB3WUFBQUFCM1JKVFVVSDRnY2JGQmc2L1ZoVzRBQUFBNVZKUkVGVU9NdWxsVUZvSEZVWXgzL3Z6ZXhrdThWa2R6UHJwZ3BXTkpvbTRKbzBOYVNuSWtIckpSYjFVRkFzWG1xM0tsaXZKcUNIaEo0cXNRZHRta3NWRktRZ1lrVGEwRXJ4VUNNaGFkMUNRclEwRGJhSjI5MWtkOTFrSnJzN004OURacG8wQkJUOHoyVjQ3L0Y3My9mZTkvK2V3RmVtOXpDYjFUOFlEUU10UUJ1UThJZHp3RFF3TzlCWFhOdThQalg2RFFCaUs2eC9NR29BQjRHM2dHN0FCSFIvMmdIeXdEaHdEcmc0MEZlc2JvYUtMYkFtNENQZ0NCQUI4UEFlaUZ3aWcxOEwrQkw0ZUtDdm1OMllmeEIyQmtnREVZLzFMeUoza0F5WkpFTW1FYm1EWU56Zk1BME05dzlHa3dGSFpIb1BCMmwrNmkvQXc2TXhGS01udHArdStoUnh2UUdBWmFmRVJPa0dsd3RYeVR1RnpkR2VBZDRmNkN0V2c3TTU2S2VKaDBkemVEZkhIMzJkcE5iSXhHS0dTNFdmQVdpSk5kTzc2M202NmxOOGZ2ZHJicTdOQjlBandJL0FxSGc1Y3l3TWZBVzhHa1QyNFdOcDlLckcwTlFJbWZ3TWp1Y0FvRXVkbE5uS2liMUhxZW9WVHM2ZFpabFNBUDBXZUVQNnBkRWR4TjRUMjA5U2EyUm9hb1RKN0hXVVVtaENReE1hU2lrbXM5Y1ptaHFoU1grWUEzWDdjRzBISlJRK28wWDZkV1lHRjlCVm4rTFh4V3RrOGpQbzBtQ3JkR21ReWM4d2tmMk43bmdISXVmaVdEV1VVQ2JRSnYyaTFRRWUwbllTMXh2NG96QjNQODN0NUhnT3Z5L2Z3b3pFaVhoaHJJVXludVhxU3FpRTVIOUtJbkFyRHRaZlpXcExGWFRmVGc1Z2xOMVZscDBTTGJGbWRLbWpsTm9Xb2t1ZHArTlBrTE9YS05YS0NDRndiYWRtVjFmdVNkK2JlWW5FOG13bVNqZDRibGVLbE5tSzQxVzNTYmRLeW15bHE2bWRYKzVPc2xxekVFcUFKQTlNUzJEVzl5WUFsd3RYeWJwTG5OaDdsTTVrKy9ydXlzVlZMa0lJT3BQdGZORDVOZ3NyV1M3Y3ZySU9XOWU0TkxSWjdmeWRadWVubnJBTkhCS0kwS3BuYzh2K2s0NkdQZlR1Zm9Fbm80L3p5TTRrejVoN2VPV3BsM2l6N1RVS2F5Vk9UUTR6WDc2REZCSmdWVWpSZjN6bzc1bkFLUmQ5bzZjbGtwdHI4NXljTzh1QnVuMTB4enQ0TnRHMjNydnNKYzdQL3NDRjIxZkkycmtONjBtK2tJWTJGcEp5bzl2NEJoOEdEZ1VXZEcwSGtYT0plR0VrZ2xLdGZQL01oQkFCN0R1aHFmUjdwNjJzUkd5NDIyOUJ4M3lqV3hLSkhnbWhFaG81ZDVrRks0dmwyRWhrQUZ0RjhwblFWUHJkMDFiV1ZZcG9uZkh2RFZZSlpicTJvOXVMSzdpMlUvTnZjMXdJY1U0YTJ0ZzduNVNxcmxMRWpUcGV2RFNLK0M5UGdCSXFVVnVxWU9kVzdnSFQwdEJtMDZlS2xaQ1VLQ0JxR1BTTWZRL0FQeTFYZzJ2NktJc0ZBQUFBQUVsRlRrU3VRbUNDJztcbi8qIGVzbGludC1lbmFibGUgbWF4LWxlbiAqL1xuY29uc3QgUE9MWUdPTl9CQVNFX0NPTE9SID0gJyMzMzg4ZmYnO1xuXG5jb25zdCBER19DT01QQU5ZX05BTUUgPSAnRGV2ZWxvcG1lbnQgR2F0ZXdheSc7XG5jb25zdCBER19BRERSRVNTXzEgPSAnMTExMCBWZXJtb250IEF2ZSwgTlcsIFN1aXRlIDUwMCc7XG5jb25zdCBER19BRERSRVNTXzIgPSAnV2FzaGluZ3RvbiwgREMgMjAwMDUgVVNBJztcbmNvbnN0IERHX0NPTlRBQ1RfSU5GTyA9ICdpbmZvQGRldmVsb3BtZW50Z2F0ZXdheS5vcmcsIFRlbDogKzEuMjAyLjU3Mi45MjAwLCBGYXg6ICsxIDIwMi41NzIuOTI5MCc7XG5cbmNvbnN0IExPR19ESVIgPSAnbG9ncyc7XG5jb25zdCBMT0dfRklMRV9OQU1FID0gJ2FtcG9mZmxpbmUnO1xuY29uc3QgTE9HX0ZJTEVfRVhURU5TSU9OID0gJ2xvZyc7XG5cbi8vIE1lc3NhZ2UgY29uc3RhbnRzXG4vLyB0b3RhbCBhbW91bnQgb2YgdGltZSB0aGUgbWVzc2FnZSBzdGF5cyB2aXNpYmxlXG5jb25zdCBNRVNTQUdFX1RJTUVPVVQgPSAxMCAqIDEwMDA7XG4vLyB3aGVuIGl0J3MgdGhpcyBhbW91bnQgb2YgdGltZSBsZWZ0LCB3ZSBub2ZpdHkgdGhlIHVzZXIgdGhhdCB0aGUgbWVzc2FnZSBpcyBhYm91dCB0byBkaXNhcHBlYXJcbmNvbnN0IE1FU1NBR0VfRElTQVBQRUFSX1RJTUVPVVQgPSBNRVNTQUdFX1RJTUVPVVQgLyA1O1xuY29uc3QgTUVTU0FHRV9DSEVDS19JTlRFUlZBTCA9IDEwMDtcbi8vIGhvdyBsb25nIHNob3VsZCB0aGUgZW50ZXIvbGVhdmUgYW5pbWF0aW9uIHJ1bihtcylcbi8vIChpZiB5b3UgY2hhbmdlIHRoaXMgeW91J2xsIHdhbm5hIGNoYW5nZSBpdCBpbiBzdHlsZS5jc3MsIHRvbylcbmNvbnN0IE1FU1NBR0VfQU5JTUFUSU9OX0RVUkFUSU9OID0gNTAwO1xuXG4vLyB0aGlzIGlzIHRoZSBpbnRlcm5hbCBkYXRlIGZvcm1hdCB1c2VkIHRvIHN0b3JlIGFuZCBzeW5jIHVwIGRhdGVzXG5jb25zdCBJTlRFUk5BTF9EQVRFX0ZPUk1BVCA9ICdZWVlZLU1NLUREVEhIOm1tOnNzLlNTU1onO1xuLy8gY3VycmVudGx5IHN1cHBvcnRlZCBtYXggJiBtaW4geWVhcnMgaW4gQU1QLCBpLmUuIGZyb20gMTk3MC0wMS0wMSB0aWxsIDIwNTAtMTItMzFcbmNvbnN0IE1JTl9TVVBQT1JURURfWUVBUiA9IDE5NzA7XG5jb25zdCBNQVhfU1VQUE9SVEVEX1lFQVIgPSAyMDUwO1xuXG5jb25zdCBVUERBVEVTX0RJUiA9ICd1cGRhdGVzJztcbmNvbnN0IENPTlRFTlRfRElTUE9TSVRJT05fSEVBREVSID0gJ0NvbnRlbnQtRGlzcG9zaXRpb24nO1xuY29uc3QgVVBEQVRFX1RNUF9GSUxFID0gJ2FtcC1vZmZsaW5lLWluc3RhbGxlci50bXAnO1xuXG5jb25zdCBPVEhFUl9JRCA9IDk5OTk5OTk5OTtcbmNvbnN0IE5SX1NZTkNfSElTVE9SWV9FTlRSSUVTID0gMjA7XG5jb25zdCBOUl9MT0dfRklMRVMgPSAxMDA7XG4vLyBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9JU09fODYwMSNEdXJhdGlvbnMsIGV4YW1wbGU6IFwiUDFZMk0xMERUMkgzME1cIlxuY29uc3QgT0xEX1NZTkNfTE9HU19EVVJBVElPTl9JU09fODYwMSA9ICdQNk0nO1xuY29uc3QgTlJfT0xEX1NZTkNfTE9HU19UT19LRUVQX01JTklNVU0gPSBOUl9TWU5DX0hJU1RPUllfRU5UUklFUztcblxuY29uc3QgTUFTVEVSX0JSQU5DSCA9ICdtYXN0ZXInO1xuY29uc3QgREVWRUxPUF9CUkFOQ0ggPSAnZGV2ZWxvcCc7XG5jb25zdCBSRUxFQVNFX0JSQU5DSF9SRUdFWCA9IC9yZWxlYXNlXFwvLztcbmNvbnN0IFJFTEVBU0VfQlJBTkNIRVMgPSBbTUFTVEVSX0JSQU5DSCwgUkVMRUFTRV9CUkFOQ0hfUkVHRVhdO1xuXG5jb25zdCBESVNBQkxFX0NIQU5HRUxPR1MgPSAnRElTQUJMRV9DSEFOR0VMT0dTJztcblxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuZnJlZXplKHtcbiAgQkFTRV9SRVNUX1VSTCxcbiAgQ09OTkVDVElPTl9USU1FT1VULFxuICBDT05ORUNUSU9OX0ZPUkNFRF9USU1FT1VULFxuICBUSU1FT1VUX0NIRUNLX0lOVEVSVkFMLFxuICBNQVhfUkVUUllfQVRFTVBUUyxcbiAgRVJST1JTX1RPX1JFVFJZLFxuICBFUlJPUlNfTk9fQU1QX1NFUlZFUixcbiAgQ09OTkVDVElWSVRZX0NIRUNLX0lOVEVSVkFMLFxuICBXT1JLU1BBQ0VfVVJMLFxuICBMT0dJTl9VUkwsXG4gIERFU0tUT1BfVVJMLFxuICBERVNLVE9QX0NVUlJFTlRfVVJMLFxuICBTWU5DVVBfUkVESVJFQ1RfVVJMLFxuICBTWU5DVVBfSElTVE9SWV9UQVJHRVQsXG4gIFNZTkNVUF9TVU1NQVJZX1VSTCxcbiAgQUNUSVZJVFlfUFJFVklFV19VUkwsXG4gIEFDVElWSVRZX0VESVRfVVJMLFxuICBVUERBVEVfVVJMLFxuICBTRVRVUF9VUkwsXG4gIFNFVFRJTkdTX1VSTCxcbiAgQ09MTEVDVElPTl9VU0VSUyxcbiAgQ09MTEVDVElPTl9XT1JLUEFDRVMsXG4gIENPTExFQ1RJT05fVEVBTU1FTUJFUlMsXG4gIENPTExFQ1RJT05fQ0xJRU5UX1NFVFRJTkdTLFxuICBDT0xMRUNUSU9OX0dMT0JBTF9TRVRUSU5HUyxcbiAgQ09MTEVDVElPTl9BQ1RJVklUSUVTLFxuICBDT0xMRUNUSU9OX0ZJRUxEUyxcbiAgQ09MTEVDVElPTl9QT1NTSUJMRV9WQUxVRVMsXG4gIENPTExFQ1RJT05fU1lOQ1VQX0xPRyxcbiAgQ09MTEVDVElPTl9MQU5HUyxcbiAgQ09MTEVDVElPTl9XU19TRVRUSU5HUyxcbiAgQ09MTEVDVElPTl9DVVJSRU5DWV9SQVRFUyxcbiAgQ09MTEVDVElPTl9GRUFUVVJFX01BTkFHRVIsXG4gIENPTExFQ1RJT05fQ09OVEFDVFMsXG4gIENPTExFQ1RJT05fUkVTT1VSQ0VTLFxuICBDT0xMRUNUSU9OX1JFUE9TSVRPUlksXG4gIENPTExFQ1RJT05fR0FaRVRURUVSLFxuICBDT0xMRUNUSU9OX0NBTEVOREFSUyxcbiAgQ09MTEVDVElPTl9DSEFOR0VTRVRTLFxuICBHQVpFVFRFRVJfRElTVEFOQ0VfRElWSURFLFxuICBEQl9GSUxFX1BSRUZJWCxcbiAgREJfRklMRV9FWFRFTlNJT04sXG4gIERCX0NPTU1PTl9EQVRBU1RPUkVfT1BUSU9OUyxcbiAgREJfQVVUT0NPTVBBQ1RfSU5URVJWQUxfTUlMSVNFQ09ORFMsXG4gIERCX0RFRkFVTFRfUVVFUllfTElNSVQsXG4gIExBTkdVQUdFX0VOR0xJU0gsXG4gIEZTX0xPQ0FMRVNfRElSRUNUT1JZLFxuICBMQU5HVUFHRV9NQVNURVJfVFJBTlNMQVRJT05TX0ZJTEUsXG4gIExBTkdVQUdFX1RSQU5TTEFUSU9OU19GSUxFLFxuICBMQU5HVUFHRV9ORVdfVFJBTlNMQVRJT05TX01VU1RfU1lOQyxcbiAgQVNBUl9ESVIsXG4gIEFQUF9ESVJFQ1RPUlksXG4gIFRFU1RfRElSRUNUT1JZLFxuICBTVEFUSUNfRElSLFxuICBJTUFHRVNfRElSLFxuICBET0NfSUNPTlMsXG4gIERCX1NUQVRJQ19ESVIsXG4gIE1JR1JBVElPTlNfRElSLFxuICBIQVNIX0lURVJBVElPTlMsXG4gIERJR0VTVF9BTEdPUklUSE1fU0hBMSxcbiAgRElHRVNUX0FMR09SSVRITV9TSEEyNTYsXG4gIEFDVElWSVRZX0VESVQsXG4gIEFDVElWSVRZX1ZJRVcsXG4gIFNZTkNVUF9GT1JDRV9EQVlTLFxuICBTWU5DVVBfQkVTVF9CRUZPUkVfREFZUyxcbiAgU1lOQ1VQX05PX0RBVEUsXG4gIFNZTkNVUF9UWVBFX1RSQU5TTEFUSU9OUyxcbiAgU1lOQ1VQX1RZUEVfVVNFUlMsXG4gIFNZTkNVUF9UWVBFX0FTU0VUUyxcbiAgU1lOQ1VQX1RZUEVfV09SS1NQQUNFUyxcbiAgU1lOQ1VQX1RZUEVfR1MsXG4gIFNZTkNVUF9UWVBFX0VYQ0hBTkdFX1JBVEVTLFxuICBTWU5DVVBfVFlQRV9GRUFUVVJFX01BTkFHRVIsXG4gIFNZTkNVUF9UWVBFX1dPUktTUEFDRV9NRU1CRVJTLFxuICBTWU5DVVBfVFlQRV9BTExfRklFTERTLFxuICBTWU5DVVBfVFlQRV9BQ1RJVklUSUVTX1BVTEwsXG4gIFNZTkNVUF9UWVBFX0FDVElWSVRJRVNfUFVTSCxcbiAgU1lOQ1VQX1RZUEVfQUNUSVZJVFlfRklFTERTLFxuICBTWU5DVVBfVFlQRV9BQ1RJVklUWV9GSUVMRFNfU1RSVUNUVVJBTF9DSEFOR0VTLFxuICBTWU5DVVBfVFlQRV9DT05UQUNUU19QVUxMLFxuICBTWU5DVVBfVFlQRV9DT05UQUNUU19QVVNILFxuICBTWU5DVVBfVFlQRV9BQ1RJVklUWV9QT1NTSUJMRV9WQUxVRVMsXG4gIFNZTkNVUF9UWVBFX0NPTlRBQ1RfRklFTERTLFxuICBTWU5DVVBfVFlQRV9DT05UQUNUX0ZJRUxEU19TVFJVQ1RVUkFMX0NIQU5HRVMsXG4gIFNZTkNVUF9UWVBFX0NPTlRBQ1RfUE9TU0lCTEVfVkFMVUVTLFxuICBTWU5DVVBfVFlQRV9SRVNPVVJDRVNfUFVMTCxcbiAgU1lOQ1VQX1RZUEVfUkVTT1VSQ0VTX1BVU0gsXG4gIFNZTkNVUF9UWVBFX1JFU09VUkNFX0ZJRUxEUyxcbiAgU1lOQ1VQX1RZUEVfUkVTT1VSQ0VfRklFTERTX1NUUlVDVFVSQUxfQ0hBTkdFUyxcbiAgU1lOQ1VQX1RZUEVfUkVTT1VSQ0VfUE9TU0lCTEVfVkFMVUVTLFxuICBTWU5DVVBfVFlQRV9DT01NT05fUE9TU0lCTEVfVkFMVUVTLFxuICBTWU5DVVBfVFlQRV9XT1JLU1BBQ0VfU0VUVElOR1MsXG4gIFNZTkNVUF9UWVBFX01BUF9USUxFUyxcbiAgU1lOQ1VQX1RZUEVfR0FaRVRURUVSLFxuICBTWU5DVVBfVFlQRV9DQUxFTkRBUlMsXG4gIFNZTkNVUF9TVEFUVVNfU1VDQ0VTUyxcbiAgU1lOQ1VQX1NUQVRVU19GQUlMLFxuICBTWU5DVVBfU1RBVFVTX1BBUlRJQUwsXG4gIFNZTkNVUF9TVEFUVVNfQ0FOQ0VMRUQsXG4gIFNZTkNVUF9TWU5DX1JFUVVFU1RFRF9BVCxcbiAgU1lOQ1VQX1NZTkNfUkVRVUVTVEVEX0JZLFxuICBTWU5DVVBfREFURVRJTUVfRklFTEQsXG4gIFNZTkNVUF9ESUZGX0xFRlRPVkVSLFxuICBTWU5DVVBfREVQRU5ERU5DWV9DSEVDS19JTlRFUlZBTCxcbiAgU1lOQ1VQX0RFVEFJTFNfU1lOQ0VELFxuICBTWU5DVVBfREVUQUlMU19VTlNZTkNFRCxcbiAgU1lOQ1VQX1JFU09VUkNFX1BVTExfQkFUQ0hfU0laRSxcbiAgU1lOQ1VQX0FDVElWSVRJRVNfUFVMTF9CQVRDSF9TSVpFLFxuICBTWU5DVVBfQ09OVEFDVFNfUFVMTF9CQVRDSF9TSVpFLFxuICBBQ1RJVklUWV9TVEFUVVNfRFJBRlQsXG4gIEFDVElWSVRZX1NUQVRVU19VTlZBTElEQVRFRCxcbiAgQUNUSVZJVFlfU1RBVFVTX1ZBTElEQVRFRCxcbiAgQ1VSUkVOQ1lfSE9VUixcbiAgREVGQVVMVF9DVVJSRU5DWSxcbiAgUkFURV9TQU1FX0NVUlJFTkNZLFxuICBSQVRFX0NVUlJFTkNZX05PVF9GT1VORCxcbiAgQ1VSUkVOQ1lfUEFJUixcbiAgVkVSU0lPTl9QQVRURVJOLFxuICBWRVJTSU9OX1BBVFRFUk5fR1JPVVBTX1RPX0VYVFJBQ1QsXG4gIEFNUF9DT1VOVFJZX0xPR08sXG4gIEFTU0VUU19ESVJFQ1RPUlksXG4gIEJBU0VfNjRfUE5HX1BSRUZJWCxcbiAgVFJBTlNQQVJFTlRfRkxBRyxcbiAgSEVMUF9QREZfRklMRU5BTUUsXG4gIEhFTFBfRElSLFxuICBFTkRTX1dJVEhfUFVOQ1RVQVRJT05fUkVHRVgsXG4gIE1BUF9USUxFU19ESVIsXG4gIFRJTEVTX1pJUF9GSUxFLFxuICBNQVBfTUFSS0VSX0lNQUdFLFxuICBNQVBfTUFSS0VSX1NIQURPVyxcbiAgTUFQX01BUktFUl9DSVJDTEVfUkVELFxuICBNQVBfTUFSS0VSX0NJUkNMRV9HUkVFTixcbiAgUE9MWUdPTl9CQVNFX0NPTE9SLFxuICBER19DT01QQU5ZX05BTUUsXG4gIERHX0FERFJFU1NfMSxcbiAgREdfQUREUkVTU18yLFxuICBER19DT05UQUNUX0lORk8sXG4gIExPR19ESVIsXG4gIExPR19GSUxFX05BTUUsXG4gIExPR19GSUxFX0VYVEVOU0lPTixcbiAgTUVTU0FHRV9USU1FT1VULFxuICBNRVNTQUdFX0RJU0FQUEVBUl9USU1FT1VULFxuICBNRVNTQUdFX0NIRUNLX0lOVEVSVkFMLFxuICBNRVNTQUdFX0FOSU1BVElPTl9EVVJBVElPTixcbiAgSU5URVJOQUxfREFURV9GT1JNQVQsXG4gIE1JTl9TVVBQT1JURURfWUVBUixcbiAgTUFYX1NVUFBPUlRFRF9ZRUFSLFxuICBVUERBVEVTX0RJUixcbiAgQ09OVEVOVF9ESVNQT1NJVElPTl9IRUFERVIsXG4gIFVQREFURV9UTVBfRklMRSxcbiAgT1RIRVJfSUQsXG4gIE5SX1NZTkNfSElTVE9SWV9FTlRSSUVTLFxuICBOUl9MT0dfRklMRVMsXG4gIE9MRF9TWU5DX0xPR1NfRFVSQVRJT05fSVNPXzg2MDEsXG4gIE5SX09MRF9TWU5DX0xPR1NfVE9fS0VFUF9NSU5JTVVNLFxuICBNQVNURVJfQlJBTkNILFxuICBERVZFTE9QX0JSQU5DSCxcbiAgUkVMRUFTRV9CUkFOQ0hfUkVHRVgsXG4gIFJFTEVBU0VfQlJBTkNIRVMsXG4gIERJU0FCTEVfQ0hBTkdFTE9HU1xufSk7XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBtYXgtbGVuICovXG5cbi8qKlxuICogQGF1dGhvciBOYWRlamRhIE1hbmRyZXNjdVxuICovXG5cbmNvbnN0IFBVQkxJQ19WSUVXX0NIQU5HRV9QQVNTV09SRCA9ICcvUFVCTElDIFZJRVcvTG9naW4gLSBVc2VyIE1hbmFnZW1lbnQvQ2hhbmdlIFBhc3N3b3JkJztcbmNvbnN0IFBVQkxJQ19WSUVXX1RST1VCTEVfU0lHTl9JTiA9ICcvUFVCTElDIFZJRVcvTG9naW4gLSBVc2VyIE1hbmFnZW1lbnQvVHJvdWJsZSBzaWduaW5nIGluJztcbmNvbnN0IEFDVElWSVRZX0RFTElWRVJZX1JBVEUgPSAnL1BST0pFQ1QgTUFOQUdFTUVOVC9GdW5kaW5nL0Z1bmRpbmcgSW5mb3JtYXRpb24vRGVsaXZlcnkgcmF0ZSc7XG5jb25zdCBBQ1RJVklUWV9QUk9KRUNUX0lEX0FORF9QTEFOTklORyA9ICcvUFJPSkVDVCBNQU5BR0VNRU5UL1Byb2plY3QgSUQgYW5kIFBsYW5uaW5nJztcbmNvbnN0IEFDVElWSVRZX0RVUkFUSU9OX09GX1BST0pFQ1QgPSAnL1BST0pFQ1QgTUFOQUdFTUVOVC9Qcm9qZWN0IElEIGFuZCBQbGFubmluZy9QbGFubmluZy9EdXJhdGlvbiBvZiBQcm9qZWN0JztcbmNvbnN0IEFDVElWSVRZX1RFQU1fTEVBREVSID0gJy9QUk9KRUNUIE1BTkFHRU1FTlQvUHJvamVjdCBJRCBhbmQgUGxhbm5pbmcvSWRlbnRpZmljYXRpb24vRGF0YSBUZWFtIExlYWRlcic7XG5jb25zdCBBQ1RJVklUWV9TQU1FX0FTX1BST1BPU0VEX1NUQVJUX0RBVEUgPVxuICAnL0FjdGl2aXR5IEZvcm0vUGxhbm5pbmcvQWN0dWFsIFN0YXJ0IERhdGUvU2FtZSBBcyBQcm9wb3NlZCBTdGFydCBEYXRlJztcbmNvbnN0IEFDVElWSVRZX1NBTUVfQVNfUFJPUE9TRURfQVBQUk9WQUxfREFURSA9XG4gICcvQWN0aXZpdHkgRm9ybS9QbGFubmluZy9BY3R1YWwgQXBwcm92YWwgRGF0ZS9TYW1lIEFzIFByb3Bvc2VkIEFwcHJvdmFsIERhdGUnO1xuY29uc3QgQUNUSVZJVFlfSURFTlRJRklDQVRJT04gPSAnL0FjdGl2aXR5IEZvcm0vSWRlbnRpZmljYXRpb24nO1xuY29uc3QgQUNUSVZJVFlfTEFTVF9VUERBVEVEX0JZID0gJy9BY3Rpdml0eSBGb3JtL0lkZW50aWZpY2F0aW9uL0FjdGl2aXR5IExhc3QgVXBkYXRlZCBieSc7XG5jb25zdCBBQ1RJVklUWV9MQVNUX1VQREFURURfT04gPSAnL0FjdGl2aXR5IEZvcm0vSWRlbnRpZmljYXRpb24vQWN0aXZpdHkgVXBkYXRlZCBPbic7XG5jb25zdCBBQ1RJVklUWV9GVU5ESU5HID0gJy9BY3Rpdml0eSBGb3JtL0Z1bmRpbmcnO1xuY29uc3QgQUZfRlVORElOR19GVU5ESU5HR1JPVVBfRlVORElOR0lURU0gPSBgJHtBQ1RJVklUWV9GVU5ESU5HfS9GdW5kaW5nIEdyb3VwL0Z1bmRpbmcgSXRlbWA7XG5jb25zdCBBQ1RJVklUWV9TRUNUT1JTID0gJy9BY3Rpdml0eSBGb3JtL1NlY3RvcnMnO1xuY29uc3QgQUNUSVZJVFlfUFJJTUFSWV9TRUNUT1JTID0gJy9BY3Rpdml0eSBGb3JtL1NlY3RvcnMvUHJpbWFyeSBTZWN0b3JzJztcbmNvbnN0IEFDVElWSVRZX1NFQ09OREFSWV9TRUNUT1JTID0gJy9BY3Rpdml0eSBGb3JtL1NlY3RvcnMvU2Vjb25kYXJ5IFNlY3RvcnMnO1xuXG5jb25zdCBBQ1RJVklUWV9TVFJVQ1RVUkVTID0gJy9BY3Rpdml0eSBGb3JtL1N0cnVjdHVyZXMnO1xuY29uc3QgQUNUSVZJVFlfU1RSVUNUVVJFU19BRERfU1RSVUNUVVJFID0gYCR7QUNUSVZJVFlfU1RSVUNUVVJFU30vQWRkIFN0cnVjdHVyZWA7XG5cbmNvbnN0IEFDVElWSVRZX09SR0FOSVpBVElPTlMgPSAnL0FjdGl2aXR5IEZvcm0vT3JnYW5pemF0aW9ucyc7XG5jb25zdCBBQ1RJVklUWV9PUkdBTklaQVRJT05TX0RPTk9SX09SR0FOSVpBVElPTiA9IGAke0FDVElWSVRZX09SR0FOSVpBVElPTlN9L0Rvbm9yIE9yZ2FuaXphdGlvbmA7XG5jb25zdCBBQ1RJVklUWV9PUkdBTklaQVRJT05TX0JFTkVGSUNJQVJZX0FHRU5DWSA9IGAke0FDVElWSVRZX09SR0FOSVpBVElPTlN9L0JlbmVmaWNpYXJ5IEFnZW5jeWA7XG5jb25zdCBBQ1RJVklUWV9PUkdBTklaQVRJT05TX0NPTlRSQUNUSU5HX0FHRU5DWSA9IGAke0FDVElWSVRZX09SR0FOSVpBVElPTlN9L0NvbnRyYWN0aW5nIEFnZW5jeWA7XG5jb25zdCBBQ1RJVklUWV9PUkdBTklaQVRJT05TX0VYRUNVVElOR19BR0VOQ1kgPSBgJHtBQ1RJVklUWV9PUkdBTklaQVRJT05TfS9FeGVjdXRpbmcgQWdlbmN5YDtcbmNvbnN0IEFDVElWSVRZX09SR0FOSVpBVElPTlNfSU1QTEVNRU5USU5HX0FHRU5DWSA9IGAke0FDVElWSVRZX09SR0FOSVpBVElPTlN9L0ltcGxlbWVudGluZyBBZ2VuY3lgO1xuY29uc3QgQUNUSVZJVFlfT1JHQU5JWkFUSU9OU19SRUdJT05BTF9HUk9VUCA9IGAke0FDVElWSVRZX09SR0FOSVpBVElPTlN9L1JlZ2lvbmFsIEdyb3VwYDtcbmNvbnN0IEFDVElWSVRZX09SR0FOSVpBVElPTlNfUkVMQVRFRF9HT1ZFUk5NRU5UX09SR0FOSVpBVElPTiA9IGAke0FDVElWSVRZX09SR0FOSVpBVElPTlN9L1JlbGF0ZWQgR292ZXJubWVudCBPcmdhbml6YXRpb25gO1xuY29uc3QgQUNUSVZJVFlfT1JHQU5JWkFUSU9OU19TRUNUT1JfR1JPVVAgPSBgJHtBQ1RJVklUWV9PUkdBTklaQVRJT05TfS9TZWN0b3IgR3JvdXBgO1xuXG5jb25zdCBBRERfRlVORElOR19BVVRPID0gJ0FkZCBGdW5kaW5nIEl0ZW0gQXV0b21hdGljYWxseSc7XG5jb25zdCBBQ1RJVklUWV9PUkdBTklaQVRJT05TX0JFTkVGSUNJQVJZX0FHRU5DWV9BRERfRlVORElOR19BVVRPID0gYCR7QUNUSVZJVFlfT1JHQU5JWkFUSU9OU19CRU5FRklDSUFSWV9BR0VOQ1l9LyR7QUREX0ZVTkRJTkdfQVVUT31gO1xuY29uc3QgQUNUSVZJVFlfT1JHQU5JWkFUSU9OU19DT05UUkFDVElOR19BR0VOQ1lfQUREX0ZVTkRJTkdfQVVUTyA9IGAke0FDVElWSVRZX09SR0FOSVpBVElPTlNfQ09OVFJBQ1RJTkdfQUdFTkNZfS8ke0FERF9GVU5ESU5HX0FVVE99YDtcbmNvbnN0IEFDVElWSVRZX09SR0FOSVpBVElPTlNfRE9OT1JfT1JHQU5JWkFUSU9OX0FERF9GVU5ESU5HX0FVVE8gPSBgJHtBQ1RJVklUWV9PUkdBTklaQVRJT05TX0RPTk9SX09SR0FOSVpBVElPTn0vJHtBRERfRlVORElOR19BVVRPfWA7XG5jb25zdCBBQ1RJVklUWV9PUkdBTklaQVRJT05TX0VYRUNVVElOR19BR0VOQ1lfQUREX0ZVTkRJTkdfQVVUTyA9IGAke0FDVElWSVRZX09SR0FOSVpBVElPTlNfRVhFQ1VUSU5HX0FHRU5DWX0vJHtBRERfRlVORElOR19BVVRPfWA7XG5jb25zdCBBQ1RJVklUWV9PUkdBTklaQVRJT05TX0lNUExFTUVOVElOR19BR0VOQ1lfQUREX0ZVTkRJTkdfQVVUTyA9IGAke0FDVElWSVRZX09SR0FOSVpBVElPTlNfSU1QTEVNRU5USU5HX0FHRU5DWX0vJHtBRERfRlVORElOR19BVVRPfWA7XG5jb25zdCBBQ1RJVklUWV9PUkdBTklaQVRJT05TX1JFR0lPTkFMX0dST1VQX0FERF9GVU5ESU5HX0FVVE8gPSBgJHtBQ1RJVklUWV9PUkdBTklaQVRJT05TX1JFR0lPTkFMX0dST1VQfS8ke0FERF9GVU5ESU5HX0FVVE99YDtcbmNvbnN0IEFDVElWSVRZX09SR0FOSVpBVElPTlNfUkVTUE9OU0lCTEVfT1JHQU5JWkFUSU9OX0FERF9GVU5ESU5HX0FVVE8gPSBgJHtBQ1RJVklUWV9PUkdBTklaQVRJT05TX1JFTEFURURfR09WRVJOTUVOVF9PUkdBTklaQVRJT059LyR7QUREX0ZVTkRJTkdfQVVUT31gO1xuY29uc3QgQUNUSVZJVFlfT1JHQU5JWkFUSU9OU19TRUNUT1JfR1JPVVBfQUREX0ZVTkRJTkdfQVVUTyA9IGAke0FDVElWSVRZX09SR0FOSVpBVElPTlNfU0VDVE9SX0dST1VQfS8ke0FERF9GVU5ESU5HX0FVVE99YDtcblxuY29uc3QgQUNUSVZJVFlfRlVORElOR19TRUFSQ0ggPSBgJHtBQ1RJVklUWV9GVU5ESU5HfS9TZWFyY2ggRnVuZGluZyBPcmdhbml6YXRpb25zYDtcbmNvbnN0IEFDVElWSVRZX0ZVTkRJTkdfU0VBUkNIX09SR0FOSVpBVElPTiA9IGAke0FDVElWSVRZX0ZVTkRJTkdfU0VBUkNIfS9TZWFyY2ggT3JnYW5pemF0aW9uc2A7XG5jb25zdCBBQ1RJVklUWV9GVU5ESU5HX1NFTEVDVF9PUkdfVFlQRSA9IGAke0FDVElWSVRZX0ZVTkRJTkdfU0VBUkNIfS9TZWxlY3QgT3JnYW5pemF0aW9uIFR5cGVgO1xuXG5jb25zdCBBQ1RJVklUWV9QUk9HUkFNID0gJy9BY3Rpdml0eSBGb3JtL1Byb2dyYW0nO1xuY29uc3QgQUNUSVZJVFlfUExBTk5JTkcgPSAnL0FjdGl2aXR5IEZvcm0vUGxhbm5pbmcnO1xuXG5jb25zdCBBQ1RJVklUWV9DT05UQUNUID0gJy9BY3Rpdml0eSBGb3JtL0NvbnRhY3RzJztcbmNvbnN0IEFDVElWSVRZX0RPQ1VNRU5UU19BRERfRE9DVU1FTlQgPSAnL0FjdGl2aXR5IEZvcm0vUmVsYXRlZCBEb2N1bWVudHMvQWRkIE5ldyBEb2N1bWVudCc7XG5jb25zdCBBQ1RJVklUWV9ET0NVTUVOVFNfQUREX1dFQkxJTksgPSAnL0FjdGl2aXR5IEZvcm0vUmVsYXRlZCBEb2N1bWVudHMvQWRkIE5ldyBXZWIgTGluayc7XG5cbmNvbnN0IEFDVElWSVRZX0lTU1VFU19BRERfSVNTVUUgPSAnL0FjdGl2aXR5IEZvcm0vSXNzdWVzIFNlY3Rpb24vQWRkIElzc3VlJztcbmNvbnN0IEFDVElWSVRZX0lTU1VFU19ERUxFVEVfSVNTVUUgPSAnL0FjdGl2aXR5IEZvcm0vSXNzdWVzIFNlY3Rpb24vSXNzdWUvRGVsZXRlIEl0ZW0nO1xuY29uc3QgQUNUSVZJVFlfSVNTVUVTX0FERF9NRUFTVVJFID0gJy9BY3Rpdml0eSBGb3JtL0lzc3VlcyBTZWN0aW9uL0lzc3VlL0FkZCBJdGVtJztcbmNvbnN0IEFDVElWSVRZX0lTU1VFU19ERUxFVEVfTUVBU1VSRSA9ICcvQWN0aXZpdHkgRm9ybS9Jc3N1ZXMgU2VjdGlvbi9Jc3N1ZS9NZWFzdXJlL0RlbGV0ZSBJdGVtJztcbmNvbnN0IEFDVElWSVRZX0lTU1VFU19BRERfQUNUT1IgPSAnL0FjdGl2aXR5IEZvcm0vSXNzdWVzIFNlY3Rpb24vSXNzdWUvTWVhc3VyZS9BZGQgSXRlbSc7XG5jb25zdCBBQ1RJVklUWV9JU1NVRVNfREVMRVRFX0FDVE9SID0gJy9BY3Rpdml0eSBGb3JtL0lzc3VlcyBTZWN0aW9uL0lzc3VlL01lYXN1cmUvQWN0b3IvRGVsZXRlIEl0ZW0nO1xuXG5jb25zdCBBQ1RJVklUWV9ESVNCVVJTRU1FTlRTX0ZVTkRJTkdfRkxPV1NfT1JHUk9MRV9BRERfSU1QTEVNRU5USU5HX0FHRU5DWSA9XG4gIGAke0FGX0ZVTkRJTkdfRlVORElOR0dST1VQX0ZVTkRJTkdJVEVNfS9EaXNidXJzZW1lbnRzL0Rpc2J1cnNlbWVudHMgVGFibGUvRnVuZGluZyBGbG93cyBPcmdSb2xlIFNlbGVjdG9yL0FkZCBJbXBsZW1lbnRpbmcgQWdlbmN5YDtcbmNvbnN0IEFDVElWSVRZX0RJU0JVUlNFTUVOVFNfRlVORElOR19GTE9XU19PUkdST0xFX0FERF9DT05UUkFDVElOR19BR0VOQ1kgPVxuICBgJHtBRl9GVU5ESU5HX0ZVTkRJTkdHUk9VUF9GVU5ESU5HSVRFTX0vRGlzYnVyc2VtZW50cy9EaXNidXJzZW1lbnRzIFRhYmxlL0Z1bmRpbmcgRmxvd3MgT3JnUm9sZSBTZWxlY3Rvci9BZGQgQ29udHJhY3RpbmcgQWdlbmN5YDtcbmNvbnN0IEFDVElWSVRZX0RJU0JVUlNFTUVOVFNfRlVORElOR19GTE9XU19PUkdST0xFX0FERF9CRU5FRklDSUFSWV9BR0VOQ1kgPVxuICBgJHtBRl9GVU5ESU5HX0ZVTkRJTkdHUk9VUF9GVU5ESU5HSVRFTX0vRGlzYnVyc2VtZW50cy9EaXNidXJzZW1lbnRzIFRhYmxlL0Z1bmRpbmcgRmxvd3MgT3JnUm9sZSBTZWxlY3Rvci9BZGQgQmVuZWZpY2lhcnkgQWdlbmN5YDtcbmNvbnN0IEFDVElWSVRZX0RJU0JVUlNFTUVOVFNfRlVORElOR19GTE9XU19PUkdST0xFX0FERF9ET05PUl9PUkdBTklaQVRJT04gPVxuICBgJHtBRl9GVU5ESU5HX0ZVTkRJTkdHUk9VUF9GVU5ESU5HSVRFTX0vRGlzYnVyc2VtZW50cy9EaXNidXJzZW1lbnRzIFRhYmxlL0Z1bmRpbmcgRmxvd3MgT3JnUm9sZSBTZWxlY3Rvci9BZGQgRG9ub3IgT3JnYW5pemF0aW9uYDtcbmNvbnN0IEFDVElWSVRZX0RJU0JVUlNFTUVOVFNfRlVORElOR19GTE9XU19PUkdST0xFX0FERF9FWEVDVVRJTkdfQUdFTkNZID1cbiAgYCR7QUZfRlVORElOR19GVU5ESU5HR1JPVVBfRlVORElOR0lURU19L0Rpc2J1cnNlbWVudHMvRGlzYnVyc2VtZW50cyBUYWJsZS9GdW5kaW5nIEZsb3dzIE9yZ1JvbGUgU2VsZWN0b3IvQWRkIEV4ZWN1dGluZyBBZ2VuY3lgO1xuY29uc3QgQUNUSVZJVFlfRElTQlVSU0VNRU5UU19GVU5ESU5HX0ZMT1dTX09SR1JPTEVfQUREX1JFR0lPTkFMX0dST1VQID1cbiAgYCR7QUZfRlVORElOR19GVU5ESU5HR1JPVVBfRlVORElOR0lURU19L0Rpc2J1cnNlbWVudHMvRGlzYnVyc2VtZW50cyBUYWJsZS9GdW5kaW5nIEZsb3dzIE9yZ1JvbGUgU2VsZWN0b3IvQWRkIFJlZ2lvbmFsIEdyb3VwYDtcbmNvbnN0IEFDVElWSVRZX0RJU0JVUlNFTUVOVFNfRlVORElOR19GTE9XU19PUkdST0xFX0FERF9SRVNQT05TSUJMRV9PUkdBTklaQVRJT04gPVxuICBgJHtBRl9GVU5ESU5HX0ZVTkRJTkdHUk9VUF9GVU5ESU5HSVRFTX0vRGlzYnVyc2VtZW50cy9EaXNidXJzZW1lbnRzIFRhYmxlL0Z1bmRpbmcgRmxvd3MgT3JnUm9sZSBTZWxlY3Rvci9BZGQgUmVzcG9uc2libGUgT3JnYW5pemF0aW9uYDtcbmNvbnN0IEFDVElWSVRZX0RJU0JVUlNFTUVOVFNfRlVORElOR19GTE9XU19PUkdST0xFX0FERF9TRUNUT1JfR1JPVVAgPVxuICBgJHtBRl9GVU5ESU5HX0ZVTkRJTkdHUk9VUF9GVU5ESU5HSVRFTX0vRGlzYnVyc2VtZW50cy9EaXNidXJzZW1lbnRzIFRhYmxlL0Z1bmRpbmcgRmxvd3MgT3JnUm9sZSBTZWxlY3Rvci9BZGQgU2VjdG9yIEdyb3VwYDtcblxuY29uc3QgQUNUSVZJVFlfQ09NTUlUTUVOVFNfRlVORElOR19GTE9XU19PUkdST0xFX0FERF9JTVBMRU1FTlRJTkdfQUdFTkNZID1cbiAgYCR7QUZfRlVORElOR19GVU5ESU5HR1JPVVBfRlVORElOR0lURU19L0NvbW1pdG1lbnRzL0NvbW1pdG1lbnRzIFRhYmxlL0Z1bmRpbmcgRmxvd3MgT3JnUm9sZSBTZWxlY3Rvci9BZGQgSW1wbGVtZW50aW5nIEFnZW5jeWA7XG5jb25zdCBBQ1RJVklUWV9DT01NSVRNRU5UU19GVU5ESU5HX0ZMT1dTX09SR1JPTEVfQUREX0NPTlRSQUNUSU5HX0FHRU5DWSA9XG4gIGAke0FGX0ZVTkRJTkdfRlVORElOR0dST1VQX0ZVTkRJTkdJVEVNfS9Db21taXRtZW50cy9Db21taXRtZW50cyBUYWJsZS9GdW5kaW5nIEZsb3dzIE9yZ1JvbGUgU2VsZWN0b3IvQWRkIENvbnRyYWN0aW5nIEFnZW5jeWA7XG5jb25zdCBBQ1RJVklUWV9DT01NSVRNRU5UU19GVU5ESU5HX0ZMT1dTX09SR1JPTEVfQUREX0JFTkVGSUNJQVJZX0FHRU5DWSA9XG4gIGAke0FGX0ZVTkRJTkdfRlVORElOR0dST1VQX0ZVTkRJTkdJVEVNfS9Db21taXRtZW50cy9Db21taXRtZW50cyBUYWJsZS9GdW5kaW5nIEZsb3dzIE9yZ1JvbGUgU2VsZWN0b3IvQWRkIEJlbmVmaWNpYXJ5IEFnZW5jeWA7XG5jb25zdCBBQ1RJVklUWV9DT01NSVRNRU5UU19GVU5ESU5HX0ZMT1dTX09SR1JPTEVfQUREX0RPTk9SX09SR0FOSVpBVElPTiA9XG4gIGAke0FGX0ZVTkRJTkdfRlVORElOR0dST1VQX0ZVTkRJTkdJVEVNfS9Db21taXRtZW50cy9Db21taXRtZW50cyBUYWJsZS9GdW5kaW5nIEZsb3dzIE9yZ1JvbGUgU2VsZWN0b3IvQWRkIERvbm9yIE9yZ2FuaXphdGlvbmA7XG5jb25zdCBBQ1RJVklUWV9DT01NSVRNRU5UU19GVU5ESU5HX0ZMT1dTX09SR1JPTEVfQUREX0VYRUNVVElOR19BR0VOQ1kgPVxuICBgJHtBRl9GVU5ESU5HX0ZVTkRJTkdHUk9VUF9GVU5ESU5HSVRFTX0vQ29tbWl0bWVudHMvQ29tbWl0bWVudHMgVGFibGUvRnVuZGluZyBGbG93cyBPcmdSb2xlIFNlbGVjdG9yL0FkZCBFeGVjdXRpbmcgQWdlbmN5YDtcbmNvbnN0IEFDVElWSVRZX0NPTU1JVE1FTlRTX0ZVTkRJTkdfRkxPV1NfT1JHUk9MRV9BRERfUkVHSU9OQUxfR1JPVVAgPVxuICBgJHtBRl9GVU5ESU5HX0ZVTkRJTkdHUk9VUF9GVU5ESU5HSVRFTX0vQ29tbWl0bWVudHMvQ29tbWl0bWVudHMgVGFibGUvRnVuZGluZyBGbG93cyBPcmdSb2xlIFNlbGVjdG9yL0FkZCBSZWdpb25hbCBHcm91cGA7XG5jb25zdCBBQ1RJVklUWV9DT01NSVRNRU5UU19GVU5ESU5HX0ZMT1dTX09SR1JPTEVfQUREX1JFU1BPTlNJQkxFX09SR0FOSVpBVElPTiA9XG4gIGAke0FGX0ZVTkRJTkdfRlVORElOR0dST1VQX0ZVTkRJTkdJVEVNfS9Db21taXRtZW50cy9Db21taXRtZW50cyBUYWJsZS9GdW5kaW5nIEZsb3dzIE9yZ1JvbGUgU2VsZWN0b3IvQWRkIFJlc3BvbnNpYmxlIE9yZ2FuaXphdGlvbmA7XG5jb25zdCBBQ1RJVklUWV9DT01NSVRNRU5UU19GVU5ESU5HX0ZMT1dTX09SR1JPTEVfQUREX1NFQ1RPUl9HUk9VUCA9XG4gIGAke0FGX0ZVTkRJTkdfRlVORElOR0dST1VQX0ZVTkRJTkdJVEVNfS9Db21taXRtZW50cy9Db21taXRtZW50cyBUYWJsZS9GdW5kaW5nIEZsb3dzIE9yZ1JvbGUgU2VsZWN0b3IvQWRkIFNlY3RvciBHcm91cGA7XG5cbmNvbnN0IEFDVElWSVRZX0VYUEVORElUVVJFU19GVU5ESU5HX0ZMT1dTX09SR1JPTEVfQUREX0lNUExFTUVOVElOR19BR0VOQ1kgPVxuICBgJHtBRl9GVU5ESU5HX0ZVTkRJTkdHUk9VUF9GVU5ESU5HSVRFTX0vRXhwZW5kaXR1cmVzL0V4cGVuZGl0dXJlcyBUYWJsZS9GdW5kaW5nIEZsb3dzIE9yZ1JvbGUgU2VsZWN0b3IvQWRkIEltcGxlbWVudGluZyBBZ2VuY3lgO1xuY29uc3QgQUNUSVZJVFlfRVhQRU5ESVRVUkVTX0ZVTkRJTkdfRkxPV1NfT1JHUk9MRV9BRERfQ09OVFJBQ1RJTkdfQUdFTkNZID1cbiAgYCR7QUZfRlVORElOR19GVU5ESU5HR1JPVVBfRlVORElOR0lURU19L0V4cGVuZGl0dXJlcy9FeHBlbmRpdHVyZXMgVGFibGUvRnVuZGluZyBGbG93cyBPcmdSb2xlIFNlbGVjdG9yL0FkZCBDb250cmFjdGluZyBBZ2VuY3lgO1xuY29uc3QgQUNUSVZJVFlfRVhQRU5ESVRVUkVTX0ZVTkRJTkdfRkxPV1NfT1JHUk9MRV9BRERfQkVORUZJQ0lBUllfQUdFTkNZID1cbiAgYCR7QUZfRlVORElOR19GVU5ESU5HR1JPVVBfRlVORElOR0lURU19L0V4cGVuZGl0dXJlcy9FeHBlbmRpdHVyZXMgVGFibGUvRnVuZGluZyBGbG93cyBPcmdSb2xlIFNlbGVjdG9yL0FkZCBCZW5lZmljaWFyeSBBZ2VuY3lgO1xuY29uc3QgQUNUSVZJVFlfRVhQRU5ESVRVUkVTX0ZVTkRJTkdfRkxPV1NfT1JHUk9MRV9BRERfRE9OT1JfT1JHQU5JWkFUSU9OID1cbiAgYCR7QUZfRlVORElOR19GVU5ESU5HR1JPVVBfRlVORElOR0lURU19L0V4cGVuZGl0dXJlcy9FeHBlbmRpdHVyZXMgVGFibGUvRnVuZGluZyBGbG93cyBPcmdSb2xlIFNlbGVjdG9yL0FkZCBEb25vciBPcmdhbml6YXRpb25gO1xuY29uc3QgQUNUSVZJVFlfRVhQRU5ESVRVUkVTX0ZVTkRJTkdfRkxPV1NfT1JHUk9MRV9BRERfRVhFQ1VUSU5HX0FHRU5DWSA9XG4gIGAke0FGX0ZVTkRJTkdfRlVORElOR0dST1VQX0ZVTkRJTkdJVEVNfS9FeHBlbmRpdHVyZXMvRXhwZW5kaXR1cmVzIFRhYmxlL0Z1bmRpbmcgRmxvd3MgT3JnUm9sZSBTZWxlY3Rvci9BZGQgRXhlY3V0aW5nIEFnZW5jeWA7XG5jb25zdCBBQ1RJVklUWV9FWFBFTkRJVFVSRVNfRlVORElOR19GTE9XU19PUkdST0xFX0FERF9SRUdJT05BTF9HUk9VUCA9XG4gIGAke0FGX0ZVTkRJTkdfRlVORElOR0dST1VQX0ZVTkRJTkdJVEVNfS9FeHBlbmRpdHVyZXMvRXhwZW5kaXR1cmVzIFRhYmxlL0Z1bmRpbmcgRmxvd3MgT3JnUm9sZSBTZWxlY3Rvci9BZGQgUmVnaW9uYWwgR3JvdXBgO1xuY29uc3QgQUNUSVZJVFlfRVhQRU5ESVRVUkVTX0ZVTkRJTkdfRkxPV1NfT1JHUk9MRV9BRERfUkVTUE9OU0lCTEVfT1JHQU5JWkFUSU9OID1cbiAgYCR7QUZfRlVORElOR19GVU5ESU5HR1JPVVBfRlVORElOR0lURU19L0V4cGVuZGl0dXJlcy9FeHBlbmRpdHVyZXMgVGFibGUvRnVuZGluZyBGbG93cyBPcmdSb2xlIFNlbGVjdG9yL0FkZCBSZXNwb25zaWJsZSBPcmdhbml6YXRpb25gO1xuY29uc3QgQUNUSVZJVFlfRVhQRU5ESVRVUkVTX0ZVTkRJTkdfRkxPV1NfT1JHUk9MRV9BRERfU0VDVE9SX0dST1VQID1cbiAgYCR7QUZfRlVORElOR19GVU5ESU5HR1JPVVBfRlVORElOR0lURU19L0V4cGVuZGl0dXJlcy9FeHBlbmRpdHVyZXMgVGFibGUvRnVuZGluZyBGbG93cyBPcmdSb2xlIFNlbGVjdG9yL0FkZCBTZWN0b3IgR3JvdXBgO1xuXG5jb25zdCBNVEVGX1BST0pFQ1RJT05TID0gYCR7QUZfRlVORElOR19GVU5ESU5HR1JPVVBfRlVORElOR0lURU19L01URUYgUHJvamVjdGlvbnNgO1xuY29uc3QgTVRFRl9QUk9KRUNUSU9OU19BTU9VTlQgPVxuICBgJHtBRl9GVU5ESU5HX0ZVTkRJTkdHUk9VUF9GVU5ESU5HSVRFTX0vTVRFRiBQcm9qZWN0aW9ucy9NVEVGIFByb2plY3Rpb25zIFRhYmxlL0Ftb3VudGA7XG5jb25zdCBNVEVGX1BST0pFQ1RJT05TX0NVUlJFTkNZID1cbiAgYCR7QUZfRlVORElOR19GVU5ESU5HR1JPVVBfRlVORElOR0lURU19L01URUYgUHJvamVjdGlvbnMvTVRFRiBQcm9qZWN0aW9ucyBUYWJsZS9DdXJyZW5jeWA7XG5jb25zdCBNVEVGX1BST0pFQ1RJT05TX1BST0pFQ1RJT04gPVxuICBgJHtBRl9GVU5ESU5HX0ZVTkRJTkdHUk9VUF9GVU5ESU5HSVRFTX0vTVRFRiBQcm9qZWN0aW9ucy9NVEVGIFByb2plY3Rpb25zIFRhYmxlL01URUYgUHJvamVjdGlvbmA7XG5jb25zdCBNVEVGX1BST0pFQ1RJT05TX0RBVEUgPVxuICBgJHtBRl9GVU5ESU5HX0ZVTkRJTkdHUk9VUF9GVU5ESU5HSVRFTX0vTVRFRiBQcm9qZWN0aW9ucy9NVEVGIFByb2plY3Rpb25zIFRhYmxlL1Byb2plY3Rpb24gRGF0ZWA7XG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmZyZWV6ZSh7XG4gIFBVQkxJQ19WSUVXX0NIQU5HRV9QQVNTV09SRCxcbiAgUFVCTElDX1ZJRVdfVFJPVUJMRV9TSUdOX0lOLFxuICBBQ1RJVklUWV9ERUxJVkVSWV9SQVRFLFxuICBBQ1RJVklUWV9QUk9KRUNUX0lEX0FORF9QTEFOTklORyxcbiAgQUNUSVZJVFlfRFVSQVRJT05fT0ZfUFJPSkVDVCxcbiAgQUNUSVZJVFlfVEVBTV9MRUFERVIsXG4gIEFDVElWSVRZX1NBTUVfQVNfUFJPUE9TRURfU1RBUlRfREFURSxcbiAgQUNUSVZJVFlfU0FNRV9BU19QUk9QT1NFRF9BUFBST1ZBTF9EQVRFLFxuICBBQ1RJVklUWV9JREVOVElGSUNBVElPTixcbiAgQUNUSVZJVFlfTEFTVF9VUERBVEVEX0JZLFxuICBBQ1RJVklUWV9MQVNUX1VQREFURURfT04sXG4gIEFDVElWSVRZX1NFQ1RPUlMsXG4gIEFDVElWSVRZX1BSSU1BUllfU0VDVE9SUyxcbiAgQUNUSVZJVFlfU0VDT05EQVJZX1NFQ1RPUlMsXG4gIEFDVElWSVRZX1NUUlVDVFVSRVMsXG4gIEFDVElWSVRZX1NUUlVDVFVSRVNfQUREX1NUUlVDVFVSRSxcbiAgQUNUSVZJVFlfT1JHQU5JWkFUSU9OUyxcbiAgQUNUSVZJVFlfT1JHQU5JWkFUSU9OU19ET05PUl9PUkdBTklaQVRJT04sXG4gIEFDVElWSVRZX09SR0FOSVpBVElPTlNfQkVORUZJQ0lBUllfQUdFTkNZLFxuICBBQ1RJVklUWV9PUkdBTklaQVRJT05TX0NPTlRSQUNUSU5HX0FHRU5DWSxcbiAgQUNUSVZJVFlfT1JHQU5JWkFUSU9OU19FWEVDVVRJTkdfQUdFTkNZLFxuICBBQ1RJVklUWV9PUkdBTklaQVRJT05TX0lNUExFTUVOVElOR19BR0VOQ1ksXG4gIEFDVElWSVRZX09SR0FOSVpBVElPTlNfUkVHSU9OQUxfR1JPVVAsXG4gIEFDVElWSVRZX09SR0FOSVpBVElPTlNfUkVMQVRFRF9HT1ZFUk5NRU5UX09SR0FOSVpBVElPTixcbiAgQUNUSVZJVFlfT1JHQU5JWkFUSU9OU19TRUNUT1JfR1JPVVAsXG4gIEFDVElWSVRZX09SR0FOSVpBVElPTlNfQkVORUZJQ0lBUllfQUdFTkNZX0FERF9GVU5ESU5HX0FVVE8sXG4gIEFDVElWSVRZX09SR0FOSVpBVElPTlNfQ09OVFJBQ1RJTkdfQUdFTkNZX0FERF9GVU5ESU5HX0FVVE8sXG4gIEFDVElWSVRZX09SR0FOSVpBVElPTlNfRE9OT1JfT1JHQU5JWkFUSU9OX0FERF9GVU5ESU5HX0FVVE8sXG4gIEFDVElWSVRZX09SR0FOSVpBVElPTlNfRVhFQ1VUSU5HX0FHRU5DWV9BRERfRlVORElOR19BVVRPLFxuICBBQ1RJVklUWV9PUkdBTklaQVRJT05TX0lNUExFTUVOVElOR19BR0VOQ1lfQUREX0ZVTkRJTkdfQVVUTyxcbiAgQUNUSVZJVFlfT1JHQU5JWkFUSU9OU19SRUdJT05BTF9HUk9VUF9BRERfRlVORElOR19BVVRPLFxuICBBQ1RJVklUWV9PUkdBTklaQVRJT05TX1JFU1BPTlNJQkxFX09SR0FOSVpBVElPTl9BRERfRlVORElOR19BVVRPLFxuICBBQ1RJVklUWV9PUkdBTklaQVRJT05TX1NFQ1RPUl9HUk9VUF9BRERfRlVORElOR19BVVRPLFxuICBBQ1RJVklUWV9GVU5ESU5HX1NFQVJDSCxcbiAgQUNUSVZJVFlfRlVORElOR19TRUFSQ0hfT1JHQU5JWkFUSU9OLFxuICBBQ1RJVklUWV9GVU5ESU5HX1NFTEVDVF9PUkdfVFlQRSxcbiAgQUNUSVZJVFlfUFJPR1JBTSxcbiAgQUNUSVZJVFlfUExBTk5JTkcsXG4gIEFDVElWSVRZX0NPTlRBQ1QsXG4gIEFDVElWSVRZX0RPQ1VNRU5UU19BRERfRE9DVU1FTlQsXG4gIEFDVElWSVRZX0RPQ1VNRU5UU19BRERfV0VCTElOSyxcbiAgQUNUSVZJVFlfSVNTVUVTX0FERF9JU1NVRSxcbiAgQUNUSVZJVFlfSVNTVUVTX0RFTEVURV9JU1NVRSxcbiAgQUNUSVZJVFlfSVNTVUVTX0FERF9NRUFTVVJFLFxuICBBQ1RJVklUWV9JU1NVRVNfREVMRVRFX01FQVNVUkUsXG4gIEFDVElWSVRZX0lTU1VFU19BRERfQUNUT1IsXG4gIEFDVElWSVRZX0lTU1VFU19ERUxFVEVfQUNUT1IsXG4gIEFDVElWSVRZX0RJU0JVUlNFTUVOVFNfRlVORElOR19GTE9XU19PUkdST0xFX0FERF9JTVBMRU1FTlRJTkdfQUdFTkNZLFxuICBBQ1RJVklUWV9ESVNCVVJTRU1FTlRTX0ZVTkRJTkdfRkxPV1NfT1JHUk9MRV9BRERfQ09OVFJBQ1RJTkdfQUdFTkNZLFxuICBBQ1RJVklUWV9ESVNCVVJTRU1FTlRTX0ZVTkRJTkdfRkxPV1NfT1JHUk9MRV9BRERfQkVORUZJQ0lBUllfQUdFTkNZLFxuICBBQ1RJVklUWV9ESVNCVVJTRU1FTlRTX0ZVTkRJTkdfRkxPV1NfT1JHUk9MRV9BRERfRE9OT1JfT1JHQU5JWkFUSU9OLFxuICBBQ1RJVklUWV9ESVNCVVJTRU1FTlRTX0ZVTkRJTkdfRkxPV1NfT1JHUk9MRV9BRERfRVhFQ1VUSU5HX0FHRU5DWSxcbiAgQUNUSVZJVFlfRElTQlVSU0VNRU5UU19GVU5ESU5HX0ZMT1dTX09SR1JPTEVfQUREX1JFR0lPTkFMX0dST1VQLFxuICBBQ1RJVklUWV9ESVNCVVJTRU1FTlRTX0ZVTkRJTkdfRkxPV1NfT1JHUk9MRV9BRERfUkVTUE9OU0lCTEVfT1JHQU5JWkFUSU9OLFxuICBBQ1RJVklUWV9ESVNCVVJTRU1FTlRTX0ZVTkRJTkdfRkxPV1NfT1JHUk9MRV9BRERfU0VDVE9SX0dST1VQLFxuICBBQ1RJVklUWV9DT01NSVRNRU5UU19GVU5ESU5HX0ZMT1dTX09SR1JPTEVfQUREX0lNUExFTUVOVElOR19BR0VOQ1ksXG4gIEFDVElWSVRZX0NPTU1JVE1FTlRTX0ZVTkRJTkdfRkxPV1NfT1JHUk9MRV9BRERfQ09OVFJBQ1RJTkdfQUdFTkNZLFxuICBBQ1RJVklUWV9DT01NSVRNRU5UU19GVU5ESU5HX0ZMT1dTX09SR1JPTEVfQUREX0JFTkVGSUNJQVJZX0FHRU5DWSxcbiAgQUNUSVZJVFlfQ09NTUlUTUVOVFNfRlVORElOR19GTE9XU19PUkdST0xFX0FERF9ET05PUl9PUkdBTklaQVRJT04sXG4gIEFDVElWSVRZX0NPTU1JVE1FTlRTX0ZVTkRJTkdfRkxPV1NfT1JHUk9MRV9BRERfRVhFQ1VUSU5HX0FHRU5DWSxcbiAgQUNUSVZJVFlfQ09NTUlUTUVOVFNfRlVORElOR19GTE9XU19PUkdST0xFX0FERF9SRUdJT05BTF9HUk9VUCxcbiAgQUNUSVZJVFlfQ09NTUlUTUVOVFNfRlVORElOR19GTE9XU19PUkdST0xFX0FERF9SRVNQT05TSUJMRV9PUkdBTklaQVRJT04sXG4gIEFDVElWSVRZX0NPTU1JVE1FTlRTX0ZVTkRJTkdfRkxPV1NfT1JHUk9MRV9BRERfU0VDVE9SX0dST1VQLFxuICBBQ1RJVklUWV9FWFBFTkRJVFVSRVNfRlVORElOR19GTE9XU19PUkdST0xFX0FERF9JTVBMRU1FTlRJTkdfQUdFTkNZLFxuICBBQ1RJVklUWV9FWFBFTkRJVFVSRVNfRlVORElOR19GTE9XU19PUkdST0xFX0FERF9DT05UUkFDVElOR19BR0VOQ1ksXG4gIEFDVElWSVRZX0VYUEVORElUVVJFU19GVU5ESU5HX0ZMT1dTX09SR1JPTEVfQUREX0JFTkVGSUNJQVJZX0FHRU5DWSxcbiAgQUNUSVZJVFlfRVhQRU5ESVRVUkVTX0ZVTkRJTkdfRkxPV1NfT1JHUk9MRV9BRERfRE9OT1JfT1JHQU5JWkFUSU9OLFxuICBBQ1RJVklUWV9FWFBFTkRJVFVSRVNfRlVORElOR19GTE9XU19PUkdST0xFX0FERF9FWEVDVVRJTkdfQUdFTkNZLFxuICBBQ1RJVklUWV9FWFBFTkRJVFVSRVNfRlVORElOR19GTE9XU19PUkdST0xFX0FERF9SRUdJT05BTF9HUk9VUCxcbiAgQUNUSVZJVFlfRVhQRU5ESVRVUkVTX0ZVTkRJTkdfRkxPV1NfT1JHUk9MRV9BRERfUkVTUE9OU0lCTEVfT1JHQU5JWkFUSU9OLFxuICBBQ1RJVklUWV9FWFBFTkRJVFVSRVNfRlVORElOR19GTE9XU19PUkdST0xFX0FERF9TRUNUT1JfR1JPVVAsXG4gIE1URUZfUFJPSkVDVElPTlMsXG4gIE1URUZfUFJPSkVDVElPTlNfQU1PVU5ULFxuICBNVEVGX1BST0pFQ1RJT05TX0NVUlJFTkNZLFxuICBNVEVGX1BST0pFQ1RJT05TX1BST0pFQ1RJT04sXG4gIE1URUZfUFJPSkVDVElPTlNfREFURSxcbn0pO1xuIiwiaW1wb3J0IEZNQyBmcm9tICcuL0ZlYXR1cmVNYW5hZ2VyQ29uc3RhbnRzJztcblxuLyoqXG4gKiBAYXV0aG9yIE5hZGVqZGEgTWFuZHJlc2N1XG4gKi9cblxuLy8gQWN0aXZpdHkgZmllbGRzXG5jb25zdCBBQ1RJVklUWV9CVURHRVQgPSAnYWN0aXZpdHlfYnVkZ2V0JztcbmNvbnN0IEFDVElWSVRZX1NUQVRVUyA9ICdhY3Rpdml0eV9zdGF0dXMnO1xuY29uc3QgU1RBVFVTX1JFQVNPTiA9ICdzdGF0dXNfcmVhc29uJztcbmNvbnN0IEZJTkFOQ0lBTF9JTlNUUlVNRU5UID0gJ2ZpbmFuY2lhbF9pbnN0cnVtZW50JztcbmNvbnN0IFRZUEVfT0ZfSU1QTEVNRU5UQVRJT04gPSAndHlwZV9vZl9pbXBsZW1lbnRhdGlvbic7XG5jb25zdCBPQkpFQ1RJVkUgPSAnb2JqZWN0aXZlJztcbmNvbnN0IFJFU1VMVFMgPSAncmVzdWx0cyc7XG5jb25zdCBCVURHRVRfQ09ERV9QUk9KRUNUX0lEID0gJ2J1ZGdldF9jb2RlX3Byb2plY3RfaWQnO1xuY29uc3QgQUNUVUFMX0FQUFJPVkFMX0RBVEUgPSAnYWN0dWFsX2FwcHJvdmFsX2RhdGUnO1xuY29uc3QgRlVORElOR1MgPSAnZnVuZGluZ3MnO1xuY29uc3QgRlVORElOR19ET05PUl9PUkdfSUQgPSAnZG9ub3Jfb3JnYW5pemF0aW9uX2lkJztcbmNvbnN0IElTX0RSQUZUID0gJ2lzX2RyYWZ0JztcbmNvbnN0IE9SR19ST0xFX09SR19JRCA9ICdvcmdhbml6YXRpb24nO1xuY29uc3QgQURESVRJT05BTF9JTkZPID0gJ2FkZGl0aW9uYWxfaW5mbyc7XG5jb25zdCBQUklNQVJZX1NFQ1RPUlMgPSAncHJpbWFyeV9zZWN0b3JzJztcbmNvbnN0IFNFQ09OREFSWV9TRUNUT1JTID0gJ3NlY29uZGFyeV9zZWN0b3JzJztcbmNvbnN0IFRFUlRJQVJZX1NFQ1RPUlMgPSAndGVydGlhcnlfc2VjdG9ycyc7XG5jb25zdCBUQUdfU0VDVE9SUyA9ICd0YWdfc2VjdG9ycyc7XG5jb25zdCBTRUNUT1IgPSAnc2VjdG9yJztcbmNvbnN0IFNFQ1RPUl9QRVJDRU5UQUdFID0gJ3NlY3Rvcl9wZXJjZW50YWdlJztcbmNvbnN0IEZJTkFOQ0lOR19JTlNUUlVNRU5UID0gJ2ZpbmFuY2luZ19pbnN0cnVtZW50JztcbmNvbnN0IE1PREFMSVRJRVMgPSAnbW9kYWxpdGllcyc7XG5jb25zdCBMSU5FX01JTklTVFJZX1JBTksgPSAnbGluZV9taW5pc3RyeV9yYW5rJztcbmNvbnN0IEdPVkVSTk1FTlRfQUdSRUVNRU5UX05VTUJFUiA9ICdnb3Zlcm5tZW50X2FncmVlbWVudF9udW1iZXInO1xuY29uc3QgRlVORElOR19TVEFUVVMgPSAnZnVuZGluZ19zdGF0dXMnO1xuY29uc3QgTE9DQVRJT05TID0gJ2xvY2F0aW9ucyc7XG5jb25zdCBMT0NBVElPTiA9ICdsb2NhdGlvbic7XG5jb25zdCBMT0NBVElPTl9QRVJDRU5UQUdFID0gJ2xvY2F0aW9uX3BlcmNlbnRhZ2UnO1xuY29uc3QgSU1QTEVNRU5UQVRJT05fTE9DQVRJT04gPSAnaW1wbGVtZW50YXRpb25fbG9jYXRpb24nO1xuY29uc3QgSU1QTEVNRU5UQVRJT05fTEVWRUwgPSAnaW1wbGVtZW50YXRpb25fbGV2ZWwnO1xuY29uc3QgQVBQUk9WQUxfU1RBVFVTID0gJ2FwcHJvdmFsX3N0YXR1cyc7XG5jb25zdCBBUFBST1ZFRF9CWSA9ICdhcHByb3ZlZF9ieSc7XG5jb25zdCBBUFBST1ZBTF9EQVRFID0gJ2FwcHJvdmFsX2RhdGUnO1xuY29uc3QgVFlQRV9PRl9BU1NJU1RBTkNFID0gJ3R5cGVfb2ZfYXNzaXN0YW5jZSc7XG5jb25zdCBFWFBFTkRJVFVSRV9DTEFTUyA9ICdleHBlbmRpdHVyZV9jbGFzcyc7XG5jb25zdCBGVU5ESU5HX0RFVEFJTFMgPSAnZnVuZGluZ19kZXRhaWxzJztcbmNvbnN0IE1PREVfT0ZfUEFZTUVOVCA9ICdtb2RlX29mX3BheW1lbnQnO1xuY29uc3QgRlVORElOR19DTEFTU0lGSUNBVElPTl9EQVRFID0gJ2Z1bmRpbmdfY2xhc3NpZmljYXRpb25fZGF0ZSc7XG5jb25zdCBBR1JFRU1FTlQgPSAnYWdyZWVtZW50JztcbmNvbnN0IERPTk9SX09CSkVDVElWRSA9ICdkb25vcl9vYmplY3RpdmUnO1xuY29uc3QgQ09ORElUSU9OUyA9ICdjb25kaXRpb25zJztcbmNvbnN0IEFHUkVFTUVOVF9DT0RFID0gJ2NvZGUnO1xuY29uc3QgQUdSRUVNRU5UX1RJVExFID0gJ3RpdGxlJztcbmNvbnN0IFBST0pFQ1RfQ0FURUdPUlkgPSAncHJvamVjdF9jYXRlZ29yeSc7XG5jb25zdCBQUk9KRUNUX0lNUExFTUVOVElOR19VTklUID0gJ3Byb2plY3RfaW1wbGVtZW50aW5nX3VuaXQnO1xuY29uc3QgT1JHQU5JWkFUSU9OID0gJ29yZ2FuaXphdGlvbic7XG5jb25zdCBQRVJDRU5UQUdFID0gJ3BlcmNlbnRhZ2UnO1xuY29uc3QgQU1QX09SR0FOSVpBVElPTl9ST0xFX0lEID0gJ2FtcF9vcmdhbml6YXRpb25fcm9sZV9pZCc7XG5jb25zdCBST0xFID0gJ3JvbGUnO1xuY29uc3QgRVhFQ1VUSU5HX0FHRU5DWSA9ICdleGVjdXRpbmdfYWdlbmN5JztcbmNvbnN0IENPTlRSQUNUSU5HX0FHRU5DWSA9ICdjb250cmFjdGluZ19hZ2VuY3knO1xuY29uc3QgQkVORUZJQ0lBUllfQUdFTkNZID0gJ2JlbmVmaWNpYXJ5X2FnZW5jeSc7XG5jb25zdCBJTVBMRU1FTlRJTkdfQUdFTkNZID0gJ2ltcGxlbWVudGluZ19hZ2VuY3knO1xuY29uc3QgUkVTUE9OU0lCTEVfT1JHQU5JWkFUSU9OID0gJ3Jlc3BvbnNpYmxlX29yZ2FuaXphdGlvbic7XG5jb25zdCBET05PUl9PUkdBTklaQVRJT04gPSAnZG9ub3Jfb3JnYW5pemF0aW9uJztcbmNvbnN0IFJFR0lPTkFMX0dST1VQID0gJ3JlZ2lvbmFsX2dyb3VwJztcbmNvbnN0IFNFQ1RPUl9HUk9VUCA9ICdzZWN0b3JfZ3JvdXAnO1xuY29uc3QgQlVER0VUUyA9ICdidWRnZXRzJztcbmNvbnN0IEJVREdFVF9DT0RFID0gJ2J1ZGdldF9jb2RlJztcbmNvbnN0IEJVREdFVF9PUkdBTklaQVRJT05fQ09ERSA9ICdidWRnZXRfb3JnYW5pemF0aW9uX2NvZGUnO1xuY29uc3QgQVJDSElWRUQgPSAnYXJjaGl2ZWQnO1xuY29uc3QgVFJBTlNBQ1RJT05fREFURSA9ICd0cmFuc2FjdGlvbl9kYXRlJztcbmNvbnN0IFRSQU5TQUNUSU9OX1RZUEUgPSAndHJhbnNhY3Rpb25fdHlwZSc7XG5jb25zdCBDT01NSVRNRU5UUyA9ICdjb21taXRtZW50cyc7XG5jb25zdCBESVNCVVJTRU1FTlRTID0gJ2Rpc2J1cnNlbWVudHMnO1xuY29uc3QgRVhQRU5ESVRVUkVTID0gJ2V4cGVuZGl0dXJlcyc7XG5jb25zdCBFU1RJTUFURURfRElTQlVSU0VNRU5UUyA9ICdlc3RpbWF0ZWRfZGlzYnVyc2VtZW50cyc7XG5jb25zdCBUUkFOU0FDVElPTl9BTU9VTlQgPSAndHJhbnNhY3Rpb25fYW1vdW50JztcbmNvbnN0IEFESlVTVE1FTlRfVFlQRSA9ICdhZGp1c3RtZW50X3R5cGUnO1xuY29uc3QgQUNUVUFMX1NUQVJUX0RBVEUgPSAnYWN0dWFsX3N0YXJ0X2RhdGUnO1xuY29uc3QgUFJPUE9TRURfU1RBUlRfREFURSA9ICdwcm9wb3NlZF9zdGFydF9kYXRlJztcbmNvbnN0IEFDVFVBTF9DT01QTEVUSU9OX0RBVEUgPSAnYWN0dWFsX2NvbXBsZXRpb25fZGF0ZSc7XG5jb25zdCBDT05UUkFDVElOR19EQVRFID0gJ2NvbnRyYWN0aW5nX2RhdGUnO1xuY29uc3QgRElTQlVSU0VNRU5UX0RBVEUgPSAnZGlzYnVyc2VtZW50X2RhdGUnO1xuY29uc3QgUFJPUE9TRURfQVBQUk9WQUxfREFURSA9ICdwcm9wb3NlZF9hcHByb3ZhbF9kYXRlJztcbmNvbnN0IE9SSUdJTkFMX0NPTVBMRVRJT05fREFURSA9ICdvcmlnaW5hbF9jb21wbGV0aW9uX2RhdGUnO1xuY29uc3QgUFJPUE9TRURfQ09NUExFVElPTl9EQVRFID0gJ3Byb3Bvc2VkX2NvbXBsZXRpb25fZGF0ZSc7XG5jb25zdCBGSU5BTF9EQVRFX0ZPUl9ESVNCVVJTRU1FTlRTID0gJ2ZpbmFsX2RhdGVfZm9yX2Rpc2J1cnNlbWVudHMnO1xuY29uc3QgRklOQUxfREFURV9GT1JfQ09OVFJBQ1RJTkcgPSAnZmluYWxfZGF0ZV9mb3JfY29udHJhY3RpbmcnO1xuY29uc3QgRUZGRUNUSVZFX0ZVTkRJTkdfREFURSA9ICdlZmZlY3RpdmVfZnVuZGluZ19kYXRlJztcbmNvbnN0IEZVTkRJTkdfQ0xPU0lOR19EQVRFID0gJ2Z1bmRpbmdfY2xvc2luZ19kYXRlJztcbmNvbnN0IFJBVElGSUNBVElPTl9EQVRFID0gJ3JhdGlmaWNhdGlvbl9kYXRlJztcbmNvbnN0IE1BVFVSSVRZID0gJ21hdHVyaXR5JztcbmNvbnN0IExBU1RfQVVESVRfREFURSA9ICdsYXN0X2F1ZGl0X2RhdGUnO1xuY29uc3QgU0lHTkFUVVJFX0RBVEUgPSAnc2lnbmF0dXJlX2RhdGUnO1xuY29uc3QgSFVNQU5JVEFSSUFOX0FJRCA9ICdodW1hbml0YXJpYW5fYWlkJztcbmNvbnN0IERJU0FTVEVSX1JFU1BPTlNFID0gJ2Rpc2FzdGVyX3Jlc3BvbnNlJztcbmNvbnN0IFBST0dSQU0gPSAncHJvZ3JhbSc7XG5jb25zdCBQUk9HUkFNX1BFUkNFTlRBR0UgPSAncHJvZ3JhbV9wZXJjZW50YWdlJztcbmNvbnN0IFBST0dSQU1fU0VUVElOR1MgPSAncHJvZ3JhbV9zZXR0aW5ncyc7XG5jb25zdCBOQVRJT05BTF9QTEFOX09CSkVDVElWRSA9ICduYXRpb25hbF9wbGFuX29iamVjdGl2ZSc7XG5jb25zdCBQUklNQVJZX1BST0dSQU1TID0gJ3ByaW1hcnlfcHJvZ3JhbXMnO1xuY29uc3QgU0VDT05EQVJZX1BST0dSQU1TID0gJ3NlY29uZGFyeV9wcm9ncmFtcyc7XG5jb25zdCBURVJUSUFSX1BST0dSQU1TID0gJ3RlcnRpYXJ5X3Byb2dyYW1zJztcbmNvbnN0IEdPVkVSTk1FTlRfQVBQUk9WQUxfUFJPQ0VEVVJFUyA9ICdnb3Zlcm5tZW50X2FwcHJvdmFsX3Byb2NlZHVyZXMnO1xuY29uc3QgSk9JTlRfQ1JJVEVSSUEgPSAnam9pbnRfY3JpdGVyaWEnO1xuY29uc3QgVEVBTSA9ICd0ZWFtJztcbmNvbnN0IFJFSkVDVEVEX0lEID0gJ3JlamVjdGVkSWQnO1xuY29uc3QgSU5URVJOQUxfSUQgPSAnaW50ZXJuYWxfaWQnO1xuY29uc3QgQU1QX0lEID0gJ2FtcF9pZCc7XG5jb25zdCBQUk9KRUNUX1RJVExFID0gJ3Byb2plY3RfdGl0bGUnO1xuY29uc3QgREVTQ1JJUFRJT04gPSAnZGVzY3JpcHRpb24nO1xuY29uc3QgTU9ESUZJRURfQlkgPSAnbW9kaWZpZWRfYnknO1xuY29uc3QgTU9ESUZJRURfT04gPSAndXBkYXRlX2RhdGUnO1xuY29uc3QgQ1JFQVRFRF9CWSA9ICdjcmVhdGVkX2J5JztcbmNvbnN0IENSRUFURURfT04gPSAnY3JlYXRpb25fZGF0ZSc7XG5jb25zdCBMQVNUX0lNUE9SVEVEX0JZID0gJ2xhc3RfaW1wb3J0ZWRfYnknO1xuY29uc3QgQ0xJRU5UX0NIQU5HRV9JRCA9ICdjbGllbnQtY2hhbmdlLWlkJztcbmNvbnN0IENMSUVOVF9DUkVBVEVEX09OID0gJ2NsaWVudC1jcmVhdGVkLW9uJztcbmNvbnN0IENMSUVOVF9VUERBVEVEX09OID0gJ2NsaWVudC11cGRhdGVkLW9uJztcbmNvbnN0IElTX1BVU0hFRCA9ICdpcy1wdXNoZWQnO1xuY29uc3QgQUNUSVZJVFlfR1JPVVAgPSAnYWN0aXZpdHlfZ3JvdXAnO1xuY29uc3QgVkVSU0lPTiA9ICd2ZXJzaW9uJztcbmNvbnN0IFBST0pFQ1RfQ09NTUVOVFMgPSAncHJvamVjdF9jb21tZW50cyc7XG5jb25zdCBMRVNTT05TX0xFQVJORUQgPSAnbGVzc29uc19sZWFybmVkJztcbmNvbnN0IFBST0pFQ1RfSU1QQUNUID0gJ3Byb2plY3RfaW1wYWN0JztcbmNvbnN0IEFDVElWSVRZX1NVTU1BUlkgPSAnYWN0aXZpdHlfc3VtbWFyeSc7XG5jb25zdCBDT05ESVRJT05BTElUSUVTID0gJ2NvbmRpdGlvbmFsaXRpZXMnO1xuY29uc3QgUFJPSkVDVF9NQU5BR0VNRU5UID0gJ3Byb2plY3RfbWFuYWdlbWVudCc7XG5jb25zdCBBX0NfQ0hBUFRFUiA9ICdhX2NfY2hhcHRlcic7XG5jb25zdCBDUklTX05VTUJFUiA9ICdjcmlzX251bWJlcic7XG5jb25zdCBJQVRJX0lERU5USUZJRVIgPSAnaWF0aV9pZGVudGlmaWVyJztcbmNvbnN0IEFDVElWSVRZX0lOVEVSTkFMX0lEUyA9ICdhY3Rpdml0eV9pbnRlcm5hbF9pZHMnO1xuY29uc3QgSElFUkFSQ0hJQ0FMX1ZBTFVFID0gJ2hpZXJhcmNoaWNhbF92YWx1ZSc7XG5jb25zdCBISUVSQVJDSElDQUxfVkFMVUVfUEFSVFMgPSAnaGllcmFyY2hpY2FsX3ZhbHVlX3BhcnRzJztcbmNvbnN0IEhJRVJBUkNISUNBTF9WQUxVRV9ERVBUSCA9ICdoaWVyYXJjaGljYWxfdmFsdWVfZGVwdGgnO1xuY29uc3QgUFBDX0FNT1VOVCA9ICdwcGNfYW1vdW50JztcbmNvbnN0IFJQQ19BTU9VTlQgPSAncnBjX2Ftb3VudCc7XG5jb25zdCBQUENfQU5OVUFMX0JVREdFVFMgPSAncHBjX2FubnVhbF9idWRnZXRzJztcbmNvbnN0IEFNT1VOVCA9ICdhbW91bnQnO1xuY29uc3QgQ1VSUkVOQ1kgPSAnY3VycmVuY3knO1xuY29uc3QgRlVORElOR19EQVRFID0gJ2Z1bmRpbmdfZGF0ZSc7XG5jb25zdCBDT01QT05FTlRTID0gJ2NvbXBvbmVudHMnO1xuY29uc3QgVE9UQUxfTlVNQkVSX09GX0ZVTkRJTkdfU09VUkNFUyA9ICd0b3RhbF9udW1iZXJfb2ZfZnVuZGluZ19zb3VyY2VzJztcbmNvbnN0IFNPVVJDRV9ST0xFID0gJ3NvdXJjZV9yb2xlJztcbmNvbnN0IEFNUF9GVU5ESU5HX0lEID0gJ2Z1bmRpbmdfaWQnO1xuY29uc3QgSVNTVUVTID0gJ2lzc3Vlcyc7XG5jb25zdCBJU1NVRV9EQVRFID0gJ2lzc3VlX2RhdGUnO1xuY29uc3QgSVNTVUVfTkFNRSA9ICduYW1lJztcbmNvbnN0IE1FQVNVUkVTID0gJ21lYXN1cmVzJztcbmNvbnN0IE1FQVNVUkVfTkFNRSA9ICduYW1lJztcbmNvbnN0IE1FQVNVUkVfREFURSA9ICdtZWFzdXJlX2RhdGUnO1xuY29uc3QgQUNUT1JTID0gJ2FjdG9ycyc7XG5jb25zdCBBQ1RPUl9OQU1FID0gJ25hbWUnO1xuY29uc3QgU1RSVUNUVVJFUyA9ICdzdHJ1Y3R1cmVzJztcbmNvbnN0IFNUUlVDVFVSRVNfVElUTEUgPSAndGl0bGUnO1xuY29uc3QgU1RSVUNUVVJFU19ERVNDUklQVElPTiA9ICdkZXNjcmlwdGlvbic7XG5jb25zdCBTVFJVQ1RVUkVTX0xBVElUVURFID0gJ2xhdGl0dWRlJztcbmNvbnN0IFNUUlVDVFVSRVNfTE9OR0lUVURFID0gJ2xvbmdpdHVkZSc7XG5jb25zdCBTVFJVQ1RVUkVTX0NPTE9SID0gJ3N0cnVjdHVyZV9jb2xvcic7XG5jb25zdCBTVFJVQ1RVUkVTX0xBVCA9ICdsYXQnO1xuY29uc3QgU1RSVUNUVVJFU19MTkcgPSAnbG5nJztcbmNvbnN0IFNUUlVDVFVSRVNfU0hBUEUgPSAnc2hhcGUnO1xuY29uc3QgU1RSVUNUVVJFU19QT0lOVCA9ICdQb2ludCc7XG5jb25zdCBTVFJVQ1RVUkVTX1BPTFlHT04gPSAnUG9seWdvbic7XG5jb25zdCBTVFJVQ1RVUkVTX1BPTFlMSU5FID0gJ1BvbHlsaW5lJztcbmNvbnN0IFNUUlVDVFVSRVNfQ09PUkRJTkFURVMgPSAnY29vcmRpbmF0ZXMnO1xuY29uc3QgQ09NUE9ORU5UX1RZUEUgPSAnY29tcG9uZW50X3R5cGUnO1xuY29uc3QgQ09NUE9ORU5UX1RJVExFID0gJ2NvbXBvbmVudF90aXRsZSc7XG5jb25zdCBDT01QT05FTlRfRlVORElORyA9ICdmdW5kaW5nJztcbmNvbnN0IENPTVBPTkVOVF9ERVNDUklQVElPTiA9ICdkZXNjcmlwdGlvbic7XG5jb25zdCBDT01QT05FTlRfT1JHQU5JWkFUSU9OID0gJ2NvbXBvbmVudF9vcmdhbml6YXRpb24nO1xuY29uc3QgRlVORElOR19BTU9VTlRfSUQgPSAnYW1wX2Z1bmRpbmdfYW1vdW50X2lkJztcbmNvbnN0IEVYVFJBX0lORk8gPSAnZXh0cmFfaW5mbyc7XG5jb25zdCBWQUxVRSA9ICd2YWx1ZSc7XG5jb25zdCBBQ1JPTllNID0gJ2Fjcm9ueW0nO1xuY29uc3QgVFlQRV9PRl9DT09QRVJBVElPTiA9ICd0eXBlX29mX2Nvb3BlcmF0aW9uJztcbmNvbnN0IEFOTlVBTF9QUk9KRUNUX0JVREdFVF9JRCA9ICdhbm51YWxfcHJvamVjdF9idWRnZXRfaWQnO1xuY29uc3QgVFlQRSA9ICd0eXBlJztcbmNvbnN0IFlFQVIgPSAneWVhcic7XG5jb25zdCBHUk9VUF9WRVJTSU9ORURfRlVORElORyA9ICdncm91cF92ZXJzaW9uZWRfZnVuZGluZyc7XG5jb25zdCBBQ1RJVkVfTElTVCA9ICdhY3RpdmVfbGlzdCc7XG5jb25zdCBBQ1RJVkUgPSAnYWN0aXZlJztcbmNvbnN0IERFTEVHQVRFRF9DT09QRVJBVElPTiA9ICdkZWxlZ2F0ZWRfY29vcGVyYXRpb24nO1xuY29uc3QgREVMRUdBVEVEX1BBUlRORVIgPSAnZGVsZWdhdGVkX3BhcnRuZXInO1xuY29uc3QgRklOQU5DSU5HX0lEID0gJ2ZpbmFuY2luZ19pZCc7XG5jb25zdCBESVNCVVJTRU1FTlRfT1JERVJfSUQgPSAnZGlzYnVyc2VtZW50X29yZGVyX2lkJztcbmNvbnN0IFBMRURHRSA9ICdwbGVkZ2UnO1xuY29uc3QgQ0FQSVRBTF9TUEVORElOR19QRVJDRU5UQUdFID0gJ2NhcGl0YWxfc3BlbmRpbmdfcGVyY2VudGFnZSc7XG5jb25zdCBSRVBPUlRJTkdfREFURSA9ICdyZXBvcnRpbmdfZGF0ZSc7XG5jb25zdCBSRUNJUElFTlRfUk9MRSA9ICdyZWNpcGllbnRfcm9sZSc7XG5jb25zdCBSRUNJUElFTlRfT1JHQU5JWkFUSU9OID0gJ3JlY2lwaWVudF9vcmdhbml6YXRpb24nO1xuY29uc3QgVEVNUE9SQUxfSUQgPSAnX3RlbXBvcmFsX2lkJztcbmNvbnN0IE1JTklTVFJZX0NPREUgPSAnbWluaXN0cnlfY29kZSc7XG5jb25zdCBQUk9KRUNUX0NPREUgPSAncHJvamVjdF9jb2RlJztcbmNvbnN0IEZZID0gJ2Z5JztcbmNvbnN0IElORElSRUNUX09OX0JVREdFVCA9ICdpbmRpcmVjdF9vbl9idWRnZXQnO1xuY29uc3QgSU1QTEVNRU5UQVRJT05fTEVWRUxTX0VYVFJBX0lORk8gPSAnaW1wbGVtZW50YXRpb24tbGV2ZWxzJztcbmNvbnN0IElNUExFTUVOVEFUSU9OX0xPQ0FUSU9OX0VYVFJBX0lORk8gPSAnaW1wbGVtZW50YXRpb25fbG9jYXRpb25fbmFtZSc7XG5jb25zdCBET05PUl9DT05UQUNUID0gJ2Rvbm9yX2NvbnRhY3RfaW5mb3JtYXRpb24nO1xuY29uc3QgUFJPSkVDVF9DT09SRElOQVRPUl9DT05UQUNUID0gJ3Byb2plY3RfY29vcmRpbmF0b3JfY29udGFjdF9pbmZvcm1hdGlvbic7XG5jb25zdCBTRUNUT1JfTUlOSVNUUllfQ09OVEFDVCA9ICdzZWN0b3JfbWluaXN0cnlfY29udGFjdF9pbmZvcm1hdGlvbic7XG5jb25zdCBNT0ZFRF9DT05UQUNUID0gJ21vZmVkX2NvbnRhY3RfaW5mb3JtYXRpb24nO1xuY29uc3QgSU1QTEVNRU5USU5HX0VYRUNVVElOR19BR0VOQ1lfQ09OVEFDVCA9ICdpbXBsZW1lbnRpbmcvZXhlY3V0aW5nX2FnZW5jeV9jb250YWN0X2luZm9ybWF0aW9uJztcbmNvbnN0IENPTlRBQ1QgPSAnY29udGFjdCc7XG5jb25zdCBPUkdBTklaQVRJT05fR1JPVVAgPSAnb3JnYW5pemF0aW9uX2dyb3VwJztcbmNvbnN0IEZJWEVEX0VYQ0hBTkdFX1JBVEUgPSAnZml4ZWRfZXhjaGFuZ2VfcmF0ZSc7XG5jb25zdCBQUklNQVJZX0NPTlRBQ1QgPSAnbWFya19hc19wcmltYXJ5JztcbmNvbnN0IEFDVElWSVRZX0RPQ1VNRU5UUyA9ICdhY3Rpdml0eV9kb2N1bWVudHMnO1xuY29uc3QgRE9DVU1FTlRfVFlQRSA9ICdkb2N1bWVudF90eXBlJztcbmNvbnN0IElTTzIgPSAnaXNvMic7XG5jb25zdCBNVEVGX1BST0pFQ1RJT05TID0gJ210ZWZfcHJvamVjdGlvbnMnO1xuY29uc3QgUFJPSkVDVElPTiA9ICdwcm9qZWN0aW9uJztcbmNvbnN0IFBJUEVMSU5FID0gJ3BpcGVsaW5lJztcbmNvbnN0IFBST0pFQ1RJT05fREFURSA9ICdwcm9qZWN0aW9uX2RhdGUnO1xuXG4vLyBBY3Rpdml0eSBsYWJlbHMgKHVzdWFsbHkgdGhvc2UgdGhhdCBkb24ndCBjb21lIGFzIHBhcnQgb2YgRmllbGRzIERlZiBFUClcbmNvbnN0IFNBTUVfQVNfUFJPUE9TRURfU1RBUlRfREFURV9MQUJFTCA9ICdTYW1lIGFzIFByb3Bvc2VkIFN0YXJ0IERhdGUnO1xuY29uc3QgU0FNRV9BU19QUk9QT1NFRF9BUFBST1ZBTF9EQVRFX0xBQkVMID0gJ1NhbWUgYXMgUHJvcG9zZWQgQXBwcm92YWwgRGF0ZSc7XG5cbi8vIEFjdGl2aXR5IHZhbGlkYXRpb24gcnVsZXNcbmNvbnN0IERFUEVOREVOQ1lfSU1QTEVNRU5UQVRJT05fTEVWRUxfUFJFU0VOVCA9ICdpbXBsZW1lbnRhdGlvbl9sZXZlbF9wcmVzZW50JztcbmNvbnN0IERFUEVOREVOQ1lfSU1QTEVNRU5UQVRJT05fTEVWRUxfVkFMSUQgPSAnaW1wbGVtZW50YXRpb25fbGV2ZWxfdmFsaWQnO1xuY29uc3QgREVQRU5ERU5DWV9JTVBMRU1FTlRBVElPTl9MT0NBVElPTl9QUkVTRU5UID0gJ2ltcGxlbWVudGF0aW9uX2xvY2F0aW9uX3ByZXNlbnQnO1xuY29uc3QgREVQRU5ERU5DWV9JTVBMRU1FTlRBVElPTl9MT0NBVElPTl9WQUxJRCA9ICdpbXBsZW1lbnRhdGlvbl9sb2NhdGlvbl92YWxpZCc7XG5jb25zdCBERVBFTkRFTkNZX1BST0pFQ1RfQ09ERV9PTl9CVURHRVQgPSAncHJvamVjdF9jb2RlX29uX2J1ZGdldCc7XG5jb25zdCBERVBFTkRFTkNZX09OX0JVREdFVCA9ICdvbl9idWRnZXQnO1xuY29uc3QgREVQRU5ERU5DWV9UUkFOU0FDVElPTl9QUkVTRU5UID0gJ3RyYW5zYWN0aW9uX3ByZXNlbnQnO1xuY29uc3QgREVQRU5ERU5DWV9DT01QT05FTlRfRlVORElOR19PUkdfVkFMSUQgPSAnb3JnYW5pemF0aW9uX3ByZXNlbnQnO1xuXG4vKiogSURzIGZvciBBUCBzZWN0aW9ucyAqKi9cbmNvbnN0IEFQX1NFQ1RJT05fSURTID1cbiAgW3sga2V5OiAnQVBJZGVudGlmaWNhdGlvbicsIGhhc2g6ICcjQVBJZGVudGlmaWNhdGlvbicsIHZhbHVlOiAnSWRlbnRpZmljYXRpb24nLCBmbVBhdGg6IEZNQy5BQ1RJVklUWV9JREVOVElGSUNBVElPTiB9LFxuICAgIHsga2V5OiAnQVBJbnRlcm5hbElkcycsIGhhc2g6ICcjQVBJbnRlcm5hbElkcycsIHZhbHVlOiAnQWdlbmN5IEludGVybmFsIElEcycsIHNlY3Rpb25QYXRoOiBBQ1RJVklUWV9JTlRFUk5BTF9JRFMgfSxcbiAgICB7IGtleTogJ0FQUGxhbm5pbmcnLCBoYXNoOiAnI0FQUGxhbm5pbmcnLCB2YWx1ZTogJ1BsYW5uaW5nJywgZm1QYXRoOiBGTUMuQUNUSVZJVFlfUExBTk5JTkcgfSxcbiAgICB7IGtleTogJ0FQTG9jYXRpb24nLCBoYXNoOiAnI0FQTG9jYXRpb24nLCB2YWx1ZTogJ0xvY2F0aW9uJywgc2VjdGlvblBhdGg6IExPQ0FUSU9OUyB9LFxuICAgIHsga2V5OiAnQVBQcm9ncmFtJywgaGFzaDogJyNBUFByb2dyYW0nLCB2YWx1ZTogJ1Byb2dyYW0nLCBmbVBhdGg6IEZNQy5BQ1RJVklUWV9QUk9HUkFNIH0sXG4gICAgeyBrZXk6ICdBUFNlY3RvcicsIGhhc2g6ICcjQVBTZWN0b3InLCB2YWx1ZTogJ1NlY3RvcnMnLCBmbVBhdGg6IEZNQy5BQ1RJVklUWV9TRUNUT1JTIH0sXG4gICAge1xuICAgICAga2V5OiAnQVBGdW5kaW5nU291cmNlcycsXG4gICAgICBoYXNoOiAnI0FQRnVuZGluZ1NvdXJjZXMnLFxuICAgICAgdmFsdWU6ICdGdW5kaW5nIFNvdXJjZXMnLFxuICAgICAgc2VjdGlvblBhdGg6IFRPVEFMX05VTUJFUl9PRl9GVU5ESU5HX1NPVVJDRVNcbiAgICB9LFxuICAgIHsga2V5OiAnQVBGdW5kaW5nJywgaGFzaDogJyNBUEZ1bmRpbmcnLCB2YWx1ZTogJ0Z1bmRpbmcnLCBzZWN0aW9uUGF0aDogRlVORElOR1MgfSxcbiAgICB7XG4gICAgICBrZXk6ICdBUFJlbGF0ZWRPcmdhbml6YXRpb25zJyxcbiAgICAgIGhhc2g6ICcjQVBSZWxhdGVkT3JnYW5pemF0aW9ucycsXG4gICAgICB2YWx1ZTogJ1JlbGF0ZWQgT3JnYW5pemF0aW9ucycsXG4gICAgICBmbVBhdGg6IEZNQy5BQ1RJVklUWV9PUkdBTklaQVRJT05TXG4gICAgfSxcbiAgICB7IGtleTogJ0FQSXNzdWVzJywgaGFzaDogJyNBUElzc3VlcycsIHZhbHVlOiAnSXNzdWVzJywgc2VjdGlvblBhdGg6IElTU1VFUyB9LFxuICAgIHsga2V5OiAnQVBDb250YWN0JywgaGFzaDogJyNBUENvbnRhY3QnLCB2YWx1ZTogJ0NvbnRhY3QgSW5mb3JtYXRpb24nLCBmbVBhdGg6IEZNQy5BQ1RJVklUWV9DT05UQUNUIH0sXG4gICAgeyBrZXk6ICdBUFN0cnVjdHVyZXMnLCBoYXNoOiAnI0FQU3RydWN0dXJlcycsIHZhbHVlOiAnU3RydWN0dXJlcycsIHNlY3Rpb25QYXRoOiBTVFJVQ1RVUkVTIH0sXG4gICAgeyBrZXk6ICdBUERvY3VtZW50JywgaGFzaDogJyNBUERvY3VtZW50JywgdmFsdWU6ICdSZWxhdGVkIERvY3VtZW50cycsIHNlY3Rpb25QYXRoOiBBQ1RJVklUWV9ET0NVTUVOVFMgfSxcbiAgXTtcblxuLyoqIENvbHVtbiBjb3VudHMgZm9yIGVhY2ggc2VjdGlvbiAqKi9cbmNvbnN0IEFDVElWSVRZX0lOVEVSTkFMX0lEU19DT0xTID0gMztcbmNvbnN0IEFDVElWSVRZX1BMQU5OSU5HX0NPTFMgPSAyO1xuY29uc3QgQUNUSVZJVFlfTE9DQVRJT05fQ09MUyA9IDM7XG5jb25zdCBBQ1RJVklUWV9GVU5ESU5HX0NPTFMgPSAyO1xuY29uc3QgQUNUSVZJVFlfQ09OVEFDVF9DT0xTID0gMjtcbmNvbnN0IEFQX0ZVTkRJTkdTX1RBQkxFX0NPTFMgPSA0O1xuXG5jb25zdCBNVUxUSV9TRUxFQ1RfTUlOX1NJWkUgPSA4O1xuY29uc3QgTVVMVElfU0VMRUNUX01BWF9TSVpFID0gODtcblxuLy8gVE9ETzogbW92ZSB0aGVzZSBmdW5jdGlvbnMgdG8gYW4gVXRpbHMgY2xhc3MuXG5jb25zdCB0b0ZpZWxkTmFtZXMgPSBmdW5jdGlvbiAobGlzdE9mTmFtZXMpIHtcbiAgcmV0dXJuIGxpc3RPZk5hbWVzLm1hcChuYW1lID0+IHRvRmllbGROYW1lKG5hbWUpKTtcbn07XG5cbi8qKlxuICogQ29udmVydHMgdGhlIG9yaWdpbmFsIG5vbi10cmFuc2xhdGVkIGxhYmVsIHRvIGludGVybmFsIGZpZWxkIG5hbWVcbiAqIEBwYXJhbSBuYW1lXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cbmNvbnN0IHRvRmllbGROYW1lID0gZnVuY3Rpb24gKG5hbWU6IHN0cmluZykge1xuICByZXR1cm4gbmFtZS50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoJyAnLCAnXycpO1xufTtcblxuLyoqXG4gKiBDb252ZXJ0cyB0aGUgaW50ZXJuYWwgZmllbGQgbmFtZSB0byB0aGUgT3JpZ2luYWwgbm9uLXRyYW5zbGF0ZWQgbGFiZWxcbiAqIEBwYXJhbSBmaWVsZE5hbWVcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xuY29uc3QgdG9PcmlnaW5hbExhYmVsID0gZnVuY3Rpb24gKGZpZWxkTmFtZTogc3RyaW5nKSB7XG4gIHJldHVybiBjYXBpdGFsaXplKGZpZWxkTmFtZS5yZXBsYWNlKCdfJywgJyAnKSk7XG59O1xuXG4vLyBUT0RPOiBtb3ZlIGFnYWluIGluc2lkZSBhIHNoYXJlZCBVdGlscyBjbGFzcyBiZWNhdXNlIHRoaXMgaXMgYSBjb3B5IGZyb20gVXRpbHMuanNcbmNvbnN0IGNhcGl0YWxpemUgPSBmdW5jdGlvbiAodGV4dDogc3RyaW5nKSB7XG4gIHJldHVybiB0ZXh0LnJlcGxhY2UoLyg/Ol58XFxzKVxcUy9nLCBjaGFyID0+IGNoYXIudG9VcHBlckNhc2UoKSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBPYmplY3QuZnJlZXplKHtcbiAgQUNUSVZJVFlfQlVER0VULFxuICBBQ1RJVklUWV9TVEFUVVMsXG4gIFNUQVRVU19SRUFTT04sXG4gIEZJTkFOQ0lBTF9JTlNUUlVNRU5ULFxuICBUWVBFX09GX0lNUExFTUVOVEFUSU9OLFxuICBPQkpFQ1RJVkUsXG4gIFJFU1VMVFMsXG4gIEJVREdFVF9DT0RFX1BST0pFQ1RfSUQsXG4gIEFDVFVBTF9BUFBST1ZBTF9EQVRFLFxuICBGVU5ESU5HUyxcbiAgRlVORElOR19ET05PUl9PUkdfSUQsXG4gIElTX0RSQUZULFxuICBPUkdfUk9MRV9PUkdfSUQsXG4gIEFERElUSU9OQUxfSU5GTyxcbiAgUFJJTUFSWV9TRUNUT1JTLFxuICBTRUNPTkRBUllfU0VDVE9SUyxcbiAgVEVSVElBUllfU0VDVE9SUyxcbiAgVEFHX1NFQ1RPUlMsXG4gIFNFQ1RPUixcbiAgU0VDVE9SX1BFUkNFTlRBR0UsXG4gIEZJTkFOQ0lOR19JTlNUUlVNRU5ULFxuICBNT0RBTElUSUVTLFxuICBMSU5FX01JTklTVFJZX1JBTkssXG4gIEdPVkVSTk1FTlRfQUdSRUVNRU5UX05VTUJFUixcbiAgRlVORElOR19TVEFUVVMsXG4gIExPQ0FUSU9OUyxcbiAgTE9DQVRJT04sXG4gIExPQ0FUSU9OX1BFUkNFTlRBR0UsXG4gIElNUExFTUVOVEFUSU9OX0xPQ0FUSU9OLFxuICBJTVBMRU1FTlRBVElPTl9MRVZFTCxcbiAgQVBQUk9WQUxfU1RBVFVTLFxuICBBUFBST1ZFRF9CWSxcbiAgQVBQUk9WQUxfREFURSxcbiAgVFlQRV9PRl9BU1NJU1RBTkNFLFxuICBFWFBFTkRJVFVSRV9DTEFTUyxcbiAgRlVORElOR19ERVRBSUxTLFxuICBNT0RFX09GX1BBWU1FTlQsXG4gIEZVTkRJTkdfQ0xBU1NJRklDQVRJT05fREFURSxcbiAgQUdSRUVNRU5ULFxuICBET05PUl9PQkpFQ1RJVkUsXG4gIENPTkRJVElPTlMsXG4gIEFHUkVFTUVOVF9DT0RFLFxuICBBR1JFRU1FTlRfVElUTEUsXG4gIFBST0pFQ1RfQ0FURUdPUlksXG4gIFBST0pFQ1RfSU1QTEVNRU5USU5HX1VOSVQsXG4gIE9SR0FOSVpBVElPTixcbiAgUEVSQ0VOVEFHRSxcbiAgQU1QX09SR0FOSVpBVElPTl9ST0xFX0lELFxuICBST0xFLFxuICBFWEVDVVRJTkdfQUdFTkNZLFxuICBDT05UUkFDVElOR19BR0VOQ1ksXG4gIEJFTkVGSUNJQVJZX0FHRU5DWSxcbiAgSU1QTEVNRU5USU5HX0FHRU5DWSxcbiAgUkVTUE9OU0lCTEVfT1JHQU5JWkFUSU9OLFxuICBET05PUl9PUkdBTklaQVRJT04sXG4gIFJFR0lPTkFMX0dST1VQLFxuICBTRUNUT1JfR1JPVVAsXG4gIEJVREdFVFMsXG4gIEJVREdFVF9DT0RFLFxuICBCVURHRVRfT1JHQU5JWkFUSU9OX0NPREUsXG4gIEFSQ0hJVkVELFxuICBUUkFOU0FDVElPTl9EQVRFLFxuICBUUkFOU0FDVElPTl9UWVBFLFxuICBDT01NSVRNRU5UUyxcbiAgRElTQlVSU0VNRU5UUyxcbiAgRVhQRU5ESVRVUkVTLFxuICBFU1RJTUFURURfRElTQlVSU0VNRU5UUyxcbiAgVFJBTlNBQ1RJT05fQU1PVU5ULFxuICBBREpVU1RNRU5UX1RZUEUsXG4gIEFDVFVBTF9TVEFSVF9EQVRFLFxuICBQUk9QT1NFRF9TVEFSVF9EQVRFLFxuICBBQ1RVQUxfQ09NUExFVElPTl9EQVRFLFxuICBDT05UUkFDVElOR19EQVRFLFxuICBESVNCVVJTRU1FTlRfREFURSxcbiAgUFJPUE9TRURfQVBQUk9WQUxfREFURSxcbiAgT1JJR0lOQUxfQ09NUExFVElPTl9EQVRFLFxuICBQUk9QT1NFRF9DT01QTEVUSU9OX0RBVEUsXG4gIEZJTkFMX0RBVEVfRk9SX0RJU0JVUlNFTUVOVFMsXG4gIEZJTkFMX0RBVEVfRk9SX0NPTlRSQUNUSU5HLFxuICBFRkZFQ1RJVkVfRlVORElOR19EQVRFLFxuICBGVU5ESU5HX0NMT1NJTkdfREFURSxcbiAgUkFUSUZJQ0FUSU9OX0RBVEUsXG4gIE1BVFVSSVRZLFxuICBMQVNUX0FVRElUX0RBVEUsXG4gIFNJR05BVFVSRV9EQVRFLFxuICBIVU1BTklUQVJJQU5fQUlELFxuICBESVNBU1RFUl9SRVNQT05TRSxcbiAgUFJPR1JBTSxcbiAgUFJPR1JBTV9QRVJDRU5UQUdFLFxuICBQUk9HUkFNX1NFVFRJTkdTLFxuICBOQVRJT05BTF9QTEFOX09CSkVDVElWRSxcbiAgUFJJTUFSWV9QUk9HUkFNUyxcbiAgU0VDT05EQVJZX1BST0dSQU1TLFxuICBURVJUSUFSX1BST0dSQU1TLFxuICBHT1ZFUk5NRU5UX0FQUFJPVkFMX1BST0NFRFVSRVMsXG4gIEpPSU5UX0NSSVRFUklBLFxuICBURUFNLFxuICBSRUpFQ1RFRF9JRCxcbiAgSU5URVJOQUxfSUQsXG4gIEFNUF9JRCxcbiAgUFJPSkVDVF9USVRMRSxcbiAgREVTQ1JJUFRJT04sXG4gIE1PRElGSUVEX0JZLFxuICBNT0RJRklFRF9PTixcbiAgQ1JFQVRFRF9CWSxcbiAgQ1JFQVRFRF9PTixcbiAgTEFTVF9JTVBPUlRFRF9CWSxcbiAgQ0xJRU5UX0NIQU5HRV9JRCxcbiAgQ0xJRU5UX0NSRUFURURfT04sXG4gIENMSUVOVF9VUERBVEVEX09OLFxuICBJU19QVVNIRUQsXG4gIEFDVElWSVRZX0dST1VQLFxuICBWRVJTSU9OLFxuICBQUk9KRUNUX0NPTU1FTlRTLFxuICBMRVNTT05TX0xFQVJORUQsXG4gIFBST0pFQ1RfSU1QQUNULFxuICBBQ1RJVklUWV9TVU1NQVJZLFxuICBDT05ESVRJT05BTElUSUVTLFxuICBQUk9KRUNUX01BTkFHRU1FTlQsXG4gIEFfQ19DSEFQVEVSLFxuICBDUklTX05VTUJFUixcbiAgSUFUSV9JREVOVElGSUVSLFxuICBBQ1RJVklUWV9JTlRFUk5BTF9JRFMsXG4gIEhJRVJBUkNISUNBTF9WQUxVRSxcbiAgSElFUkFSQ0hJQ0FMX1ZBTFVFX1BBUlRTLFxuICBISUVSQVJDSElDQUxfVkFMVUVfREVQVEgsXG4gIFBQQ19BTU9VTlQsXG4gIFJQQ19BTU9VTlQsXG4gIFBQQ19BTk5VQUxfQlVER0VUUyxcbiAgQU1PVU5ULFxuICBDVVJSRU5DWSxcbiAgRlVORElOR19EQVRFLFxuICBDT01QT05FTlRTLFxuICBUT1RBTF9OVU1CRVJfT0ZfRlVORElOR19TT1VSQ0VTLFxuICBTT1VSQ0VfUk9MRSxcbiAgQU1QX0ZVTkRJTkdfSUQsXG4gIElTU1VFUyxcbiAgSVNTVUVfREFURSxcbiAgSVNTVUVfTkFNRSxcbiAgTUVBU1VSRVMsXG4gIE1FQVNVUkVfTkFNRSxcbiAgTUVBU1VSRV9EQVRFLFxuICBBQ1RPUlMsXG4gIEFDVE9SX05BTUUsXG4gIFNUUlVDVFVSRVMsXG4gIFNUUlVDVFVSRVNfVElUTEUsXG4gIFNUUlVDVFVSRVNfREVTQ1JJUFRJT04sXG4gIFNUUlVDVFVSRVNfTEFUSVRVREUsXG4gIFNUUlVDVFVSRVNfTE9OR0lUVURFLFxuICBTVFJVQ1RVUkVTX0NPTE9SLFxuICBTVFJVQ1RVUkVTX0xBVCxcbiAgU1RSVUNUVVJFU19MTkcsXG4gIFNUUlVDVFVSRVNfU0hBUEUsXG4gIFNUUlVDVFVSRVNfUE9JTlQsXG4gIFNUUlVDVFVSRVNfUE9MWUdPTixcbiAgU1RSVUNUVVJFU19QT0xZTElORSxcbiAgU1RSVUNUVVJFU19DT09SRElOQVRFUyxcbiAgQ09NUE9ORU5UX1RZUEUsXG4gIENPTVBPTkVOVF9USVRMRSxcbiAgQ09NUE9ORU5UX0ZVTkRJTkcsXG4gIENPTVBPTkVOVF9ERVNDUklQVElPTixcbiAgQ09NUE9ORU5UX09SR0FOSVpBVElPTixcbiAgRlVORElOR19BTU9VTlRfSUQsXG4gIEVYVFJBX0lORk8sXG4gIFZBTFVFLFxuICBBQ1JPTllNLFxuICBUWVBFX09GX0NPT1BFUkFUSU9OLFxuICBBTk5VQUxfUFJPSkVDVF9CVURHRVRfSUQsXG4gIFRZUEUsXG4gIFlFQVIsXG4gIEdST1VQX1ZFUlNJT05FRF9GVU5ESU5HLFxuICBBQ1RJVkVfTElTVCxcbiAgQUNUSVZFLFxuICBERUxFR0FURURfQ09PUEVSQVRJT04sXG4gIERFTEVHQVRFRF9QQVJUTkVSLFxuICBGSU5BTkNJTkdfSUQsXG4gIERJU0JVUlNFTUVOVF9PUkRFUl9JRCxcbiAgUExFREdFLFxuICBDQVBJVEFMX1NQRU5ESU5HX1BFUkNFTlRBR0UsXG4gIFJFUE9SVElOR19EQVRFLFxuICBSRUNJUElFTlRfUk9MRSxcbiAgUkVDSVBJRU5UX09SR0FOSVpBVElPTixcbiAgVEVNUE9SQUxfSUQsXG4gIE1JTklTVFJZX0NPREUsXG4gIFBST0pFQ1RfQ09ERSxcbiAgRlksXG4gIElORElSRUNUX09OX0JVREdFVCxcbiAgSU1QTEVNRU5UQVRJT05fTEVWRUxTX0VYVFJBX0lORk8sXG4gIElNUExFTUVOVEFUSU9OX0xPQ0FUSU9OX0VYVFJBX0lORk8sXG4gIERPTk9SX0NPTlRBQ1QsXG4gIFBST0pFQ1RfQ09PUkRJTkFUT1JfQ09OVEFDVCxcbiAgU0VDVE9SX01JTklTVFJZX0NPTlRBQ1QsXG4gIE1PRkVEX0NPTlRBQ1QsXG4gIElNUExFTUVOVElOR19FWEVDVVRJTkdfQUdFTkNZX0NPTlRBQ1QsXG4gIENPTlRBQ1QsXG4gIE9SR0FOSVpBVElPTl9HUk9VUCxcbiAgRklYRURfRVhDSEFOR0VfUkFURSxcbiAgUFJJTUFSWV9DT05UQUNULFxuICBBQ1RJVklUWV9ET0NVTUVOVFMsXG4gIERPQ1VNRU5UX1RZUEUsXG4gIElTTzIsXG4gIE1URUZfUFJPSkVDVElPTlMsXG4gIFBST0pFQ1RJT04sXG4gIFBJUEVMSU5FLFxuICBQUk9KRUNUSU9OX0RBVEUsXG4gIFNBTUVfQVNfUFJPUE9TRURfU1RBUlRfREFURV9MQUJFTCxcbiAgU0FNRV9BU19QUk9QT1NFRF9BUFBST1ZBTF9EQVRFX0xBQkVMLFxuICBERVBFTkRFTkNZX0lNUExFTUVOVEFUSU9OX0xFVkVMX1BSRVNFTlQsXG4gIERFUEVOREVOQ1lfSU1QTEVNRU5UQVRJT05fTEVWRUxfVkFMSUQsXG4gIERFUEVOREVOQ1lfSU1QTEVNRU5UQVRJT05fTE9DQVRJT05fUFJFU0VOVCxcbiAgREVQRU5ERU5DWV9JTVBMRU1FTlRBVElPTl9MT0NBVElPTl9WQUxJRCxcbiAgREVQRU5ERU5DWV9QUk9KRUNUX0NPREVfT05fQlVER0VULFxuICBERVBFTkRFTkNZX09OX0JVREdFVCxcbiAgREVQRU5ERU5DWV9UUkFOU0FDVElPTl9QUkVTRU5ULFxuICBERVBFTkRFTkNZX0NPTVBPTkVOVF9GVU5ESU5HX09SR19WQUxJRCxcbiAgQVBfU0VDVElPTl9JRFMsXG4gIEFDVElWSVRZX0lOVEVSTkFMX0lEU19DT0xTLFxuICBBQ1RJVklUWV9QTEFOTklOR19DT0xTLFxuICBBQ1RJVklUWV9MT0NBVElPTl9DT0xTLFxuICBBQ1RJVklUWV9GVU5ESU5HX0NPTFMsXG4gIEFDVElWSVRZX0NPTlRBQ1RfQ09MUyxcbiAgQVBfRlVORElOR1NfVEFCTEVfQ09MUyxcbiAgTVVMVElfU0VMRUNUX01JTl9TSVpFLFxuICBNVUxUSV9TRUxFQ1RfTUFYX1NJWkUsXG4gIHRvRmllbGROYW1lcyxcbiAgdG9GaWVsZE5hbWUsXG4gIHRvT3JpZ2luYWxMYWJlbCxcbiAgY2FwaXRhbGl6ZVxufSk7XG4iLCJjb25zdCBOT1RJRklDQVRJT05fT1JJR0lOX0FQSV9TRUNVUklUWSA9ICdOT1RJRklDQVRJT05fT1JJR0lOX0FQSV9TRUNVUklUWSc7XG5jb25zdCBOT1RJRklDQVRJT05fT1JJR0lOX0FQSV9ORVRXT1JLID0gJ05PVElGSUNBVElPTl9PUklHSU5fQVBJX05FVFdPUksnO1xuY29uc3QgTk9USUZJQ0FUSU9OX09SSUdJTl9BUElfU1lOQ1VQID0gJ05PVElGSUNBVElPTl9PUklHSU5fQVBJX1NZTkNVUCc7XG5jb25zdCBOT1RJRklDQVRJT05fT1JJR0lOX0FQSV9HRU5FUkFMID0gJ05PVElGSUNBVElPTl9PUklHSU5fQVBJX0dFTkVSQUwnO1xuY29uc3QgTk9USUZJQ0FUSU9OX09SSUdJTl9EQVRBQkFTRSA9ICdOT1RJRklDQVRJT05fT1JJR0lOX0RBVEFCQVNFJztcbmNvbnN0IE5PVElGSUNBVElPTl9PUklHSU5fQVVUSEVOVElDQVRJT04gPSAnTk9USUZJQ0FUSU9OX09SSUdJTl9BVVRIRU5USUNBVElPTic7XG5jb25zdCBOT1RJRklDQVRJT05fT1JJR0lOX1dPUktTUEFDRV9GSUxURVIgPSAnTk9USUZJQ0FUSU9OX09SSUdJTl9XT1JLU1BBQ0VfRklMVEVSJztcbmNvbnN0IE5PVElGSUNBVElPTl9PUklHSU5fV09SS1NQQUNFID0gJ05PVElGSUNBVElPTl9PUklHSU5fV09SS1NQQUNFJztcbmNvbnN0IE5PVElGSUNBVElPTl9PUklHSU5fU1lOQ1VQX1BST0NFU1MgPSAnTk9USUZJQ0FUSU9OX09SSUdJTl9TWU5DVVBfUFJPQ0VTUyc7XG5jb25zdCBOT1RJRklDQVRJT05fT1JJR0lOX0NVUlJFTkNZX01BTkFHRVIgPSAnTk9USUZJQ0FUSU9OX09SSUdJTl9DVVJSRU5DWV9NQU5BR0VSJztcbmNvbnN0IE5PVElGSUNBVElPTl9PUklHSU5fREFURVMgPSAnTk9USUZJQ0FUSU9OX09SSUdJTl9EQVRFUyc7XG5jb25zdCBOT1RJRklDQVRJT05fT1JJR0lOX0FDVElWSVRZID0gJ05PVElGSUNBVElPTl9PUklHSU5fQUNUSVZJVFknO1xuY29uc3QgTk9USUZJQ0FUSU9OX09SSUdJTl9SRVNPVVJDRSA9ICdOT1RJRklDQVRJT05fT1JJR0lOX1JFU09VUkNFJztcbmNvbnN0IE5PVElGSUNBVElPTl9PUklHSU5fSTE4TkVYVCA9ICdOT1RJRklDQVRJT05fT1JJR0lOX0kxOE5FWFQnO1xuY29uc3QgTk9USUZJQ0FUSU9OX09SSUdJTl9VUERBVEVfQ0hFQ0sgPSAnTk9USUZJQ0FUSU9OX09SSUdJTl9VUERBVEVfQ0hFQ0snO1xuY29uc3QgTk9USUZJQ0FUSU9OX09SSUdJTl9VUERBVEUgPSAnTk9USUZJQ0FUSU9OX09SSUdJTl9VUERBVEUnO1xuY29uc3QgTk9USUZJQ0FUSU9OX09SSUdJTl9TRVRVUCA9ICdOT1RJRklDQVRJT05fT1JJR0lOX1NFVFVQJztcbmNvbnN0IE5PVElGSUNBVElPTl9PUklHSU5fU0VUVElOR1MgPSAnTk9USUZJQ0FUSU9OX09SSUdJTl9TRVRUSU5HUyc7XG5cbmNvbnN0IE5PVElGSUNBVElPTl9TRVZFUklUWV9XQVJOSU5HID0gJ05PVElGSUNBVElPTl9TRVZFUklUWV9XQVJOSU5HJztcbmNvbnN0IE5PVElGSUNBVElPTl9TRVZFUklUWV9JTkZPID0gJ05PVElGSUNBVElPTl9TRVZFUklUWV9JTkZPJztcbmNvbnN0IE5PVElGSUNBVElPTl9TRVZFUklUWV9FUlJPUiA9ICdOT1RJRklDQVRJT05fU0VWRVJJVFlfRVJST1InO1xuXG5jb25zdCBOT1RJRklDQVRJT05fRVJST1JfTEVWRUxfTUlOT1IgPSAnTk9USUZJQ0FUSU9OX0VSUk9SX0xFVkVMX01JTk9SJztcbmNvbnN0IE5PVElGSUNBVElPTl9FUlJPUl9MRVZFTF9CTE9DS0VSID0gJ05PVElGSUNBVElPTl9FUlJPUl9MRVZFTF9CTE9DS0VSJztcblxuY29uc3QgTk9USUZJQ0FUSU9OX09SSUdJTl9XUk9OR19NRVRIT0RfVVNBR0UgPSAnTk9USUZJQ0FUSU9OX09SSUdJTl9XUk9OR19NRVRIT0RfVVNBR0UnO1xuXG5jb25zdCBFUlJPUl9DT0RFX05PX0NPTk5FQ1RJVklUWSA9ICdOT19DT05ORUNUSVZJVFknO1xuY29uc3QgRVJST1JfQ09ERV9BQ0NFU1NfREVOSUVEID0gJ0FDQ0VTU19ERU5JRUQnO1xuXG5cbmNvbnN0IE1TR19JTlZBTElEX1VSTCA9ICdpbnZhbGlkVXJsJztcbmNvbnN0IE1TR19USU1FT1VUID0gJ3RpbWVvdXRFcnJvcic7XG5jb25zdCBNU0dfVU5LTk9XTl9ORVRXT1JLX0VSUk9SID0gJ3Vua25vd25OZXR3b3JrRXJyb3InO1xuY29uc3QgTVNHX0FNUF9VTlJFQUNIQUJMRSA9ICdBTVBVbnJlYWNoYWJsZUVycm9yJztcbmNvbnN0IEdFTkVSQUxfQ09OTkVDVElPTl9FUlJPUlMgPSBbTVNHX0lOVkFMSURfVVJMLCBNU0dfVElNRU9VVCwgTVNHX1VOS05PV05fTkVUV09SS19FUlJPUiwgTVNHX0FNUF9VTlJFQUNIQUJMRV07XG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmZyZWV6ZSh7XG4gIE5PVElGSUNBVElPTl9PUklHSU5fQVBJX1NFQ1VSSVRZLFxuICBOT1RJRklDQVRJT05fT1JJR0lOX0FQSV9ORVRXT1JLLFxuICBOT1RJRklDQVRJT05fT1JJR0lOX0FQSV9TWU5DVVAsXG4gIE5PVElGSUNBVElPTl9PUklHSU5fQVBJX0dFTkVSQUwsXG4gIE5PVElGSUNBVElPTl9PUklHSU5fREFUQUJBU0UsXG4gIE5PVElGSUNBVElPTl9PUklHSU5fQVVUSEVOVElDQVRJT04sXG4gIE5PVElGSUNBVElPTl9PUklHSU5fV09SS1NQQUNFX0ZJTFRFUixcbiAgTk9USUZJQ0FUSU9OX09SSUdJTl9XT1JLU1BBQ0UsXG4gIE5PVElGSUNBVElPTl9PUklHSU5fU1lOQ1VQX1BST0NFU1MsXG4gIE5PVElGSUNBVElPTl9PUklHSU5fQ1VSUkVOQ1lfTUFOQUdFUixcbiAgTk9USUZJQ0FUSU9OX09SSUdJTl9EQVRFUyxcbiAgTk9USUZJQ0FUSU9OX09SSUdJTl9BQ1RJVklUWSxcbiAgTk9USUZJQ0FUSU9OX09SSUdJTl9SRVNPVVJDRSxcbiAgTk9USUZJQ0FUSU9OX09SSUdJTl9JMThORVhULFxuICBOT1RJRklDQVRJT05fT1JJR0lOX1VQREFURV9DSEVDSyxcbiAgTk9USUZJQ0FUSU9OX09SSUdJTl9VUERBVEUsXG4gIE5PVElGSUNBVElPTl9PUklHSU5fU0VUVVAsXG4gIE5PVElGSUNBVElPTl9PUklHSU5fU0VUVElOR1MsXG5cbiAgTk9USUZJQ0FUSU9OX1NFVkVSSVRZX1dBUk5JTkcsXG4gIE5PVElGSUNBVElPTl9TRVZFUklUWV9JTkZPLFxuICBOT1RJRklDQVRJT05fU0VWRVJJVFlfRVJST1IsXG5cbiAgTk9USUZJQ0FUSU9OX0VSUk9SX0xFVkVMX01JTk9SLFxuICBOT1RJRklDQVRJT05fRVJST1JfTEVWRUxfQkxPQ0tFUixcblxuICBOT1RJRklDQVRJT05fT1JJR0lOX1dST05HX01FVEhPRF9VU0FHRSxcblxuICBFUlJPUl9DT0RFX05PX0NPTk5FQ1RJVklUWSxcbiAgRVJST1JfQ09ERV9BQ0NFU1NfREVOSUVELFxuXG5cbiAgTVNHX0lOVkFMSURfVVJMLFxuICBNU0dfVElNRU9VVCxcbiAgTVNHX1VOS05PV05fTkVUV09SS19FUlJPUixcbiAgTVNHX0FNUF9VTlJFQUNIQUJMRSxcbiAgR0VORVJBTF9DT05ORUNUSU9OX0VSUk9SU1xufSlcbjtcbiIsIi8qKlxuICogQGF1dGhvciBOYWRlamRhIE1hbmRyZXNjdVxuICovXG5cbmltcG9ydCBBY3Rpdml0eUNvbnN0YW50cyBmcm9tICcuLi9tb2R1bGVzL3V0aWwvQWN0aXZpdHlDb25zdGFudHMnO1xuXG5jb25zdCBET05PUl9PUkdBTklaQVRJT04gPSAnRG9ub3IgT3JnYW5pemF0aW9uJztcbmNvbnN0IFJFU1BPTlNJQkxFX09SR0FOSVpBVElPTiA9ICdSZXNwb25zaWJsZSBPcmdhbml6YXRpb24nO1xuY29uc3QgRVhFQ1VUSU5HX0FHRU5DWSA9ICdFeGVjdXRpbmcgQWdlbmN5JztcbmNvbnN0IElNUExFTUVOVElOR19BR0VOQ1kgPSAnSW1wbGVtZW50aW5nIEFnZW5jeSc7XG5jb25zdCBCRU5FRklDSUFSWV9BR0VOQ1kgPSAnQmVuZWZpY2lhcnkgQWdlbmN5JztcbmNvbnN0IENPTlRSQUNUSU5HX0FHRU5DWSA9ICdDb250cmFjdGluZyBBZ2VuY3knO1xuY29uc3QgRE9OT1JfQUdFTkNZID0gJ0Rvbm9yJztcbmNvbnN0IFJFR0lPTkFMX0dST1VQID0gJ1JlZ2lvbmFsIEdyb3VwJztcbmNvbnN0IFNFQ1RPUl9HUk9VUCA9ICdTZWN0b3IgR3JvdXAnO1xuXG5jb25zdCBPUkdfUk9MRV9OQU1FUyA9IFtET05PUl9PUkdBTklaQVRJT04sIFJFU1BPTlNJQkxFX09SR0FOSVpBVElPTiwgRVhFQ1VUSU5HX0FHRU5DWSwgSU1QTEVNRU5USU5HX0FHRU5DWSxcbiAgQkVORUZJQ0lBUllfQUdFTkNZLCBDT05UUkFDVElOR19BR0VOQ1ksIFJFR0lPTkFMX0dST1VQLCBTRUNUT1JfR1JPVVBdO1xuXG5jb25zdCBBQ1RVQUwgPSAnQWN0dWFsJztcbmNvbnN0IFBMQU5ORUQgPSAnUGxhbm5lZCc7XG5jb25zdCBDT01NSVRNRU5UUyA9ICdDb21taXRtZW50cyc7XG5jb25zdCBESVNCVVJTRU1FTlRTID0gJ0Rpc2J1cnNlbWVudHMnO1xuY29uc3QgRVhQRU5ESVRVUkVTID0gJ0V4cGVuZGl0dXJlcyc7XG5jb25zdCBBQ1RVQUxfQ09NTUlUTUVOVFMgPSBgJHtBQ1RVQUx9ICR7QWN0aXZpdHlDb25zdGFudHMuQ09NTUlUTUVOVFN9YDtcbmNvbnN0IEFDVFVBTF9ESVNCVVJTRU1FTlRTID0gYCR7QUNUVUFMfSAke0FjdGl2aXR5Q29uc3RhbnRzLkRJU0JVUlNFTUVOVFN9YDtcbmNvbnN0IEFDVFVBTF9FWFBFTkRJVFVSRVMgPSBgJHtBQ1RVQUx9ICR7QWN0aXZpdHlDb25zdGFudHMuRVhQRU5ESVRVUkVTfWA7XG5jb25zdCBQTEFOTkVEX0NPTU1JVE1FTlRTID0gYCR7UExBTk5FRH0gJHtBY3Rpdml0eUNvbnN0YW50cy5DT01NSVRNRU5UU31gO1xuY29uc3QgUExBTk5FRF9ESVNCVVJTRU1FTlRTID0gYCR7UExBTk5FRH0gJHtBY3Rpdml0eUNvbnN0YW50cy5ESVNCVVJTRU1FTlRTfWA7XG5jb25zdCBQTEFOTkVEX0VYUEVORElUVVJFUyA9IGAke1BMQU5ORUR9ICR7QWN0aXZpdHlDb25zdGFudHMuRVhQRU5ESVRVUkVTfWA7XG5jb25zdCBVTkFMTE9DQVRFRF9ESVNCVVJTRU1FTlRTID0gJ1VuYWxsb2NhdGVkIERpc2J1cnNlbWVudHMnO1xuY29uc3QgREVMSVZFUllfUkFURSA9ICdEZWxpdmVyeSByYXRlJztcbmNvbnN0IE1URUZfUFJPSkVDVElPTlMgPSAnTVRFRiBQcm9qZWN0aW9ucyc7XG5cbmNvbnN0IEFESlVTVE1FTlRfVFlQRVMgPSBbQUNUVUFMLCBQTEFOTkVEXTtcbmNvbnN0IEFESlVTVE1FTlRfVFlQRVNfQVBfT1JERVIgPSBbUExBTk5FRCwgQUNUVUFMXTtcblxuY29uc3QgTkVXX0FDVElWSVRZX0lEID0gJzAnO1xuXG5jb25zdCBQUk9QT1NFRF9QUk9KRUNUX0NPU1QgPSAncHBjJztcbmNvbnN0IFJFVklTRURfUFJPSkVDVF9DT1NUID0gJ3JwYyc7XG5cbmNvbnN0IEFDUk9OWU1fRE9OT1JfT1JHQU5JWkFUSU9OID0gJ0ROJztcbmNvbnN0IEFDUk9OWU1fRVhFQ1VUSU5HX0FHRU5DWSA9ICdFQSc7XG5jb25zdCBBQ1JPTllNX0lNUExFTUVOVElOR19BR0VOQ1kgPSAnSUEnO1xuY29uc3QgQUNST05ZTV9CRU5FRklDSUFSWV9BR0VOQ1kgPSAnQkEnO1xuY29uc3QgQUNST05ZTV9SRVNQT05TSUJMRV9PUkdBTklaQVRJT04gPSAnUk8nO1xuXG4vKiogQXBwcm92YWwgc3RhdHVzIHVudHJhbnNsYXRlZCB2YWx1ZXMgKiovXG5jb25zdCBBUFBST1ZBTF9TVEFUVVNfQ1JFQVRFRCA9ICdjcmVhdGVkJztcbmNvbnN0IEFQUFJPVkFMX1NUQVRVU19BUFBST1ZFRCA9ICdhcHByb3ZlZCc7XG5jb25zdCBBUFBST1ZBTF9TVEFUVVNfRURJVEVEID0gJ2VkaXRlZCc7XG5jb25zdCBBUFBST1ZBTF9TVEFUVVNfU1RBUlRFRF9BUFBST1ZFRCA9ICdzdGFydGVkYXBwcm92ZWQnO1xuY29uc3QgQVBQUk9WQUxfU1RBVFVTX1NUQVJURUQgPSAnc3RhcnRlZCc7XG5jb25zdCBBUFBST1ZBTF9TVEFUVVNfTk9UX0FQUFJPVkVEID0gJ25vdF9hcHByb3ZlZCc7XG5jb25zdCBBUFBST1ZBTF9TVEFUVVNfUkVKRUNURUQgPSAncmVqZWN0ZWQnO1xuXG5jb25zdCBPTl9CVURHRVQgPSAnT24gQnVkZ2V0JztcblxuY29uc3QgSU5URVJOQVRJT05BTCA9ICdJbnRlcm5hdGlvbmFsJztcbmNvbnN0IENPVU5UUlkgPSAnQ291bnRyeSc7XG5cbmNvbnN0IFJFTEFURURfRE9DVU1FTlRTID0gJ1JlbGF0ZWQgRG9jdW1lbnRzJztcblxuY29uc3QgVE1QX0VOVElUWV9WQUxJREFUT1IgPSAnZW50aXR5LXZhbGlkYXRvcic7XG5cbi8qKiBSZXF1aXJlZCBzdGF0dXMgKi9cbmNvbnN0IEFMV0FZU19SRVFVSVJFRCA9ICdZJztcblxuZXhwb3J0IGRlZmF1bHQgT2JqZWN0LmZyZWV6ZSh7XG4gIERPTk9SX09SR0FOSVpBVElPTixcbiAgUkVTUE9OU0lCTEVfT1JHQU5JWkFUSU9OLFxuICBFWEVDVVRJTkdfQUdFTkNZLFxuICBJTVBMRU1FTlRJTkdfQUdFTkNZLFxuICBCRU5FRklDSUFSWV9BR0VOQ1ksXG4gIENPTlRSQUNUSU5HX0FHRU5DWSxcbiAgRE9OT1JfQUdFTkNZLFxuICBSRUdJT05BTF9HUk9VUCxcbiAgU0VDVE9SX0dST1VQLFxuICBPUkdfUk9MRV9OQU1FUyxcbiAgQUNUVUFMLFxuICBQTEFOTkVELFxuICBDT01NSVRNRU5UUyxcbiAgRElTQlVSU0VNRU5UUyxcbiAgRVhQRU5ESVRVUkVTLFxuICBBQ1RVQUxfQ09NTUlUTUVOVFMsXG4gIEFDVFVBTF9ESVNCVVJTRU1FTlRTLFxuICBBQ1RVQUxfRVhQRU5ESVRVUkVTLFxuICBQTEFOTkVEX0NPTU1JVE1FTlRTLFxuICBQTEFOTkVEX0RJU0JVUlNFTUVOVFMsXG4gIFBMQU5ORURfRVhQRU5ESVRVUkVTLFxuICBVTkFMTE9DQVRFRF9ESVNCVVJTRU1FTlRTLFxuICBERUxJVkVSWV9SQVRFLFxuICBNVEVGX1BST0pFQ1RJT05TLFxuICBBREpVU1RNRU5UX1RZUEVTLFxuICBBREpVU1RNRU5UX1RZUEVTX0FQX09SREVSLFxuICBORVdfQUNUSVZJVFlfSUQsXG4gIFBST1BPU0VEX1BST0pFQ1RfQ09TVCxcbiAgUkVWSVNFRF9QUk9KRUNUX0NPU1QsXG4gIEFDUk9OWU1fRE9OT1JfT1JHQU5JWkFUSU9OLFxuICBBQ1JPTllNX0VYRUNVVElOR19BR0VOQ1ksXG4gIEFDUk9OWU1fSU1QTEVNRU5USU5HX0FHRU5DWSxcbiAgQUNST05ZTV9CRU5FRklDSUFSWV9BR0VOQ1ksXG4gIEFDUk9OWU1fUkVTUE9OU0lCTEVfT1JHQU5JWkFUSU9OLFxuICBBUFBST1ZBTF9TVEFUVVNfQ1JFQVRFRCxcbiAgQVBQUk9WQUxfU1RBVFVTX0FQUFJPVkVELFxuICBBUFBST1ZBTF9TVEFUVVNfRURJVEVELFxuICBBUFBST1ZBTF9TVEFUVVNfU1RBUlRFRF9BUFBST1ZFRCxcbiAgQVBQUk9WQUxfU1RBVFVTX1NUQVJURUQsXG4gIEFQUFJPVkFMX1NUQVRVU19OT1RfQVBQUk9WRUQsXG4gIEFQUFJPVkFMX1NUQVRVU19SRUpFQ1RFRCxcbiAgT05fQlVER0VULFxuICBJTlRFUk5BVElPTkFMLFxuICBDT1VOVFJZLFxuICBSRUxBVEVEX0RPQ1VNRU5UUyxcbiAgVE1QX0VOVElUWV9WQUxJREFUT1IsXG4gIEFMV0FZU19SRVFVSVJFRFxufSk7XG4iLCJpbXBvcnQgQWN0aXZpdHlDb25zdGFudHMgZnJvbSAnLi4vbW9kdWxlcy91dGlsL0FjdGl2aXR5Q29uc3RhbnRzJztcbmltcG9ydCBGZWF0dXJlTWFuYWdlckNvbnN0YW50cyBmcm9tICcuLi9tb2R1bGVzL3V0aWwvRmVhdHVyZU1hbmFnZXJDb25zdGFudHMnO1xuaW1wb3J0IFZhbHVlQ29uc3RhbnRzIGZyb20gJy4vVmFsdWVDb25zdGFudHMnO1xuXG4vKipcbiAqIFRoaXMgaXMgYSBzZXQgb2YgZmllbGQgcGF0aHMgdGhhdCBhcmUgdXNlZCBmb3IgZnJlcXVlbnQgbmVlZHNcbiAqIEBhdXRob3IgTmFkZWpkYSBNYW5kcmVzY3VcbiAqL1xuXG5leHBvcnQgY29uc3QgRlVORElOR19BQ1RJVkVfTElTVCA9ICdmdW5kaW5nc35hY3RpdmVfbGlzdCc7XG5leHBvcnQgY29uc3QgRlVORElOR19UWVBFX09GX0FTU0lTVEFOQ0UgPSBgJHtBY3Rpdml0eUNvbnN0YW50cy5GVU5ESU5HU31+JHtBY3Rpdml0eUNvbnN0YW50cy5UWVBFX09GX0FTU0lTVEFOQ0V9YDtcbmV4cG9ydCBjb25zdCBGVU5ESU5HX0RFVEFJTFNfUEFUSCA9IGAke0FjdGl2aXR5Q29uc3RhbnRzLkZVTkRJTkdTfX4ke0FjdGl2aXR5Q29uc3RhbnRzLkZVTkRJTkdfREVUQUlMU31gO1xuLyoqXG4gKiBMZWdhY3kgZnVuZGluZyBjdXJyZW5jeSBwYXRoIHVzZWQgZm9yIGRhdGEgbWlncmF0aW9uXG4gKiBAZGVwcmVjYXRlZCBzaW5jZSAxLjRcbiAqL1xuZXhwb3J0IGNvbnN0IEZVTkRJTkdfQ1VSUkVOQ1lfUEFUSCA9IGAke0ZVTkRJTkdfREVUQUlMU19QQVRIfX4ke0FjdGl2aXR5Q29uc3RhbnRzLkNVUlJFTkNZfWA7XG5leHBvcnQgY29uc3QgTVRFRl9DVVJSRU5DWV9QQVRIID1cbiAgYCR7QWN0aXZpdHlDb25zdGFudHMuRlVORElOR1N9fiR7QWN0aXZpdHlDb25zdGFudHMuTVRFRl9QUk9KRUNUSU9OU31+JHtBY3Rpdml0eUNvbnN0YW50cy5DVVJSRU5DWX1gO1xuZXhwb3J0IGNvbnN0IFBQQ19DVVJSRU5DWV9QQVRIID0gYCR7QWN0aXZpdHlDb25zdGFudHMuUFBDX0FNT1VOVH1+JHtBY3Rpdml0eUNvbnN0YW50cy5DVVJSRU5DWX1gO1xuZXhwb3J0IGNvbnN0IFJQQ19DVVJSRU5DWV9QQVRIID0gYCR7QWN0aXZpdHlDb25zdGFudHMuUlBDX0FNT1VOVH1+JHtBY3Rpdml0eUNvbnN0YW50cy5DVVJSRU5DWX1gO1xuZXhwb3J0IGNvbnN0IENPTVBPTkVOVF9DVVJSRU5DWV9QQVRIID1cbiAgYCR7QWN0aXZpdHlDb25zdGFudHMuQ09NUE9ORU5UU31+JHtBY3Rpdml0eUNvbnN0YW50cy5DT01QT05FTlRfRlVORElOR31+JHtBY3Rpdml0eUNvbnN0YW50cy5DVVJSRU5DWX1gO1xuZXhwb3J0IGNvbnN0IERJU0JVUlNFTUVOVFNfUEFUSCA9IGAke0FjdGl2aXR5Q29uc3RhbnRzLkZVTkRJTkdTfX4ke0FjdGl2aXR5Q29uc3RhbnRzLkRJU0JVUlNFTUVOVFN9YDtcbmV4cG9ydCBjb25zdCBBQ1RJVklUWV9JTlRFUk5BTF9JRFNfSU5URVJOQUxfSURfUEFUSCA9ICdhY3Rpdml0eV9pbnRlcm5hbF9pZHN+aW50ZXJuYWxfaWQnO1xuZXhwb3J0IGNvbnN0IEFDVElWSVRZX0lOVEVSTkFMX0lEU19PUkdBTklaQVRJT05fUEFUSCA9ICdhY3Rpdml0eV9pbnRlcm5hbF9pZHN+b3JnYW5pemF0aW9uJztcbmV4cG9ydCBjb25zdCBMT0NBVElPTl9QQVRIID0gJ2xvY2F0aW9uc35sb2NhdGlvbic7XG5leHBvcnQgY29uc3QgTkFUSU9OQUxfUExBTl9PQkpFQ1RJVkVfUEFUSCA9ICduYXRpb25hbF9wbGFuX29iamVjdGl2ZX5wcm9ncmFtJztcbmV4cG9ydCBjb25zdCBQUklNQVJZX1BST0dSQU1fUEFUSCA9ICdwcmltYXJ5X3Byb2dyYW1zfnByb2dyYW0nO1xuZXhwb3J0IGNvbnN0IFNFQ09OREFSWV9QUk9HUkFNX1BBVEggPSAnc2Vjb25kYXJ5X3Byb2dyYW1zfnByb2dyYW0nO1xuZXhwb3J0IGNvbnN0IFBSSU1BUllfU0VDVE9SX1BBVEggPSAncHJpbWFyeV9zZWN0b3JzfnNlY3Rvcic7XG5leHBvcnQgY29uc3QgU0VDT05EQVJZX1NFQ1RPUl9QQVRIID0gJ3NlY29uZGFyeV9zZWN0b3JzfnNlY3Rvcic7XG5leHBvcnQgY29uc3QgVEVSVElBUllfU0VDVE9SX1BBVEggPSAndGVydGlhcnlfc2VjdG9yc35zZWN0b3InO1xuZXhwb3J0IGNvbnN0IERPTk9SX09SR0FOSVpBVElPTlNfUEFUSCA9ICdkb25vcl9vcmdhbml6YXRpb25+b3JnYW5pemF0aW9uJztcbmV4cG9ydCBjb25zdCBSRVNQT05TSUJMRV9PUkdBTklaQVRJT05fQlVER0VUU19QQVRIID1cbiAgYCR7QWN0aXZpdHlDb25zdGFudHMuUkVTUE9OU0lCTEVfT1JHQU5JWkFUSU9OfX4ke0FjdGl2aXR5Q29uc3RhbnRzLkJVREdFVFN9YDtcblxuZXhwb3J0IGNvbnN0IFJFTEFURURfT1JHU19QQVRIUyA9IFZhbHVlQ29uc3RhbnRzLk9SR19ST0xFX05BTUVTLm1hcChvcmdSb2xlID0+IEFjdGl2aXR5Q29uc3RhbnRzLnRvRmllbGROYW1lKG9yZ1JvbGUpKTtcbmV4cG9ydCBjb25zdCBSRUxBVEVEX09SR1NfT1JHQU5JWkFUSU9OX1BBVEhTID0gVmFsdWVDb25zdGFudHMuT1JHX1JPTEVfTkFNRVMubWFwKFxuICBvcmdSb2xlID0+IGAke0FjdGl2aXR5Q29uc3RhbnRzLnRvRmllbGROYW1lKG9yZ1JvbGUpfX4ke0FjdGl2aXR5Q29uc3RhbnRzLk9SR0FOSVpBVElPTn1gKTtcblxuZXhwb3J0IGNvbnN0IFJJQ0hfVEVYVF9GSUVMRFMgPSBuZXcgU2V0KFtBY3Rpdml0eUNvbnN0YW50cy5TVEFUVVNfUkVBU09OLCBBY3Rpdml0eUNvbnN0YW50cy5PQkpFQ1RJVkUsXG4gIEFjdGl2aXR5Q29uc3RhbnRzLkRFU0NSSVBUSU9OLCBBY3Rpdml0eUNvbnN0YW50cy5QUk9KRUNUX0NPTU1FTlRTLCBBY3Rpdml0eUNvbnN0YW50cy5MRVNTT05TX0xFQVJORUQsXG4gIEFjdGl2aXR5Q29uc3RhbnRzLlBST0pFQ1RfSU1QQUNULCBBY3Rpdml0eUNvbnN0YW50cy5BQ1RJVklUWV9TVU1NQVJZLCBBY3Rpdml0eUNvbnN0YW50cy5DT05ESVRJT05BTElUSUVTLFxuICBBY3Rpdml0eUNvbnN0YW50cy5QUk9KRUNUX01BTkFHRU1FTlQsIEFjdGl2aXR5Q29uc3RhbnRzLlJFU1VMVFMsXG5dKTtcblxuZXhwb3J0IGNvbnN0IFBBVEhTX1dJVEhfVFJFRV9TVFJVQ1RVUkUgPSBuZXcgU2V0KFtOQVRJT05BTF9QTEFOX09CSkVDVElWRV9QQVRILCBQUklNQVJZX1BST0dSQU1fUEFUSCxcbiAgU0VDT05EQVJZX1BST0dSQU1fUEFUSCwgUFJJTUFSWV9TRUNUT1JfUEFUSCwgU0VDT05EQVJZX1NFQ1RPUl9QQVRILCBURVJUSUFSWV9TRUNUT1JfUEFUSF0pO1xuXG5leHBvcnQgY29uc3QgUEFUSFNfV0lUSF9ISUVSQVJDSElDQUxfVkFMVUVTID0gbmV3IFNldChbTkFUSU9OQUxfUExBTl9PQkpFQ1RJVkVfUEFUSCwgUFJJTUFSWV9QUk9HUkFNX1BBVEgsXG4gIFNFQ09OREFSWV9QUk9HUkFNX1BBVEgsIFBSSU1BUllfU0VDVE9SX1BBVEgsIFNFQ09OREFSWV9TRUNUT1JfUEFUSCwgVEVSVElBUllfU0VDVE9SX1BBVEgsIExPQ0FUSU9OX1BBVEhdKTtcblxuZXhwb3J0IGNvbnN0IEFDVElWSVRZX0NPTlRBQ1RfUEFUSFMgPSBbQWN0aXZpdHlDb25zdGFudHMuRE9OT1JfQ09OVEFDVCwgQWN0aXZpdHlDb25zdGFudHMuUFJPSkVDVF9DT09SRElOQVRPUl9DT05UQUNULFxuICBBY3Rpdml0eUNvbnN0YW50cy5TRUNUT1JfTUlOSVNUUllfQ09OVEFDVCwgQWN0aXZpdHlDb25zdGFudHMuTU9GRURfQ09OVEFDVCxcbiAgQWN0aXZpdHlDb25zdGFudHMuSU1QTEVNRU5USU5HX0VYRUNVVElOR19BR0VOQ1lfQ09OVEFDVF07XG5cbmV4cG9ydCBjb25zdCBUUkFOU0FDVElPTl9UWVBFUyA9IFtBY3Rpdml0eUNvbnN0YW50cy5DT01NSVRNRU5UUywgQWN0aXZpdHlDb25zdGFudHMuRElTQlVSU0VNRU5UUyxcbiAgQWN0aXZpdHlDb25zdGFudHMuRVhQRU5ESVRVUkVTXTtcbmV4cG9ydCBjb25zdCBUUkFOU0FDVElPTl9UWVBFU19PUkRFUkVEID0gVFJBTlNBQ1RJT05fVFlQRVM7XG5leHBvcnQgY29uc3QgRlVORElOR19UUkFOU0FDVElPTl9UWVBFUyA9IFsuLi5UUkFOU0FDVElPTl9UWVBFUywgQWN0aXZpdHlDb25zdGFudHMuRVNUSU1BVEVEX0RJU0JVUlNFTUVOVFNdO1xuZXhwb3J0IGNvbnN0IEFESlVTVE1FTlRfVFlQRV9QQVRIUyA9IEZVTkRJTkdfVFJBTlNBQ1RJT05fVFlQRVMubWFwKFxuICB0dCA9PiBgJHtBY3Rpdml0eUNvbnN0YW50cy5GVU5ESU5HU31+JHt0dH1+JHtBY3Rpdml0eUNvbnN0YW50cy5BREpVU1RNRU5UX1RZUEV9YCk7XG5leHBvcnQgY29uc3QgRlVORElOR19DVVJSRU5DWV9QQVRIUyA9IFRSQU5TQUNUSU9OX1RZUEVTLm1hcChcbiAgdHQgPT4gYCR7QWN0aXZpdHlDb25zdGFudHMuRlVORElOR1N9fiR7dHR9fiR7QWN0aXZpdHlDb25zdGFudHMuQ1VSUkVOQ1l9YCk7XG5cbmV4cG9ydCBjb25zdCBQQVRIU19GT1JfQUNUSVZJVFlfQ1VSUkVOQ1kgPSBbRlVORElOR19DVVJSRU5DWV9QQVRILCBNVEVGX0NVUlJFTkNZX1BBVEgsIENPTVBPTkVOVF9DVVJSRU5DWV9QQVRILFxuICBQUENfQ1VSUkVOQ1lfUEFUSCwgUlBDX0NVUlJFTkNZX1BBVEgsIC4uLkZVTkRJTkdfQ1VSUkVOQ1lfUEFUSFNdO1xuXG5leHBvcnQgY29uc3QgUEFUSFNfRk9SX0NVUlJFTkNZID0gbmV3IFNldChbQWN0aXZpdHlDb25zdGFudHMuQ1VSUkVOQ1ksIC4uLlBBVEhTX0ZPUl9BQ1RJVklUWV9DVVJSRU5DWV0pO1xuXG5leHBvcnQgY29uc3QgRE9fTk9UX0hZRFJBVEVfRklFTERTX0xJU1QgPSBbQWN0aXZpdHlDb25zdGFudHMuQVBQUk9WQUxfU1RBVFVTXTtcblxuLyogRmllbGRzIHBhdGhzIGFsdGVybmF0aXZlIHZhbHVlcyBsb2NhdGlvbiAqL1xuZXhwb3J0IGNvbnN0IEFMVEVSTkFURV9WQUxVRV9QQVRIID0ge307XG5BTFRFUk5BVEVfVkFMVUVfUEFUSFtBY3Rpdml0eUNvbnN0YW50cy5DUkVBVEVEX09OXSA9IEFjdGl2aXR5Q29uc3RhbnRzLkNMSUVOVF9DUkVBVEVEX09OO1xuQUxURVJOQVRFX1ZBTFVFX1BBVEhbQWN0aXZpdHlDb25zdGFudHMuTU9ESUZJRURfT05dID0gQWN0aXZpdHlDb25zdGFudHMuQ0xJRU5UX1VQREFURURfT047XG5cbi8qIEZNIHBhdGhzIGZvciBzb21lIGFjdGl2aXR5IGZpZWxkcyB0aGF0IGFyZSBhbHdheXMgcHJlc2VudCBpbiBmaWVsZHMgZGVmLCBidXQgbWF5IGJlIGhpZGRlbiBmcm9tIGRpc3BsYXkgdGhyb3VnaCBGTSAqL1xuZXhwb3J0IGNvbnN0IEFDVElWSVRZX0ZJRUxEU19GTV9QQVRIID0ge307XG5BQ1RJVklUWV9GSUVMRFNfRk1fUEFUSFtBY3Rpdml0eUNvbnN0YW50cy5NT0RJRklFRF9CWV0gPSBGZWF0dXJlTWFuYWdlckNvbnN0YW50cy5BQ1RJVklUWV9MQVNUX1VQREFURURfQlk7XG5BQ1RJVklUWV9GSUVMRFNfRk1fUEFUSFtBY3Rpdml0eUNvbnN0YW50cy5NT0RJRklFRF9PTl0gPSBGZWF0dXJlTWFuYWdlckNvbnN0YW50cy5BQ1RJVklUWV9MQVNUX1VQREFURURfT047XG5cbi8qIFBvc3NpYmxlIE9wdGlvbnMgZmllbGRzIHBhdGggcHJlZml4ZXMgKi9cbmV4cG9ydCBjb25zdCBQUkVGSVhfQUNUSVZJVFkgPSBudWxsO1xuZXhwb3J0IGNvbnN0IFBSRUZJWF9DT05UQUNUID0gJ2NvbnRhY3QnO1xuZXhwb3J0IGNvbnN0IFBSRUZJWF9SRVNPVVJDRSA9ICdyZXNvdXJjZSc7XG5leHBvcnQgY29uc3QgUFJFRklYX0NPTU1PTiA9ICdjb21tb24nO1xuZXhwb3J0IGNvbnN0IFBSRUZJWF9MSVNUID0gW1BSRUZJWF9BQ1RJVklUWSwgUFJFRklYX0NPTlRBQ1QsIFBSRUZJWF9SRVNPVVJDRSwgUFJFRklYX0NPTU1PTl07XG5cbmV4cG9ydCBjb25zdCBGSUVMRF9QQVRIID0gJ2ZpZWxkLXBhdGgnO1xuZXhwb3J0IGNvbnN0IEZJRUxEX09QVElPTlMgPSAncG9zc2libGUtb3B0aW9ucyc7XG5leHBvcnQgY29uc3QgRklFTERfT1BUSU9OX1VTQUJMRSA9ICdvcHRpb24tdXNhYmxlJztcbmV4cG9ydCBjb25zdCBMSVNUX01BWF9TSVpFID0gJ3NpemUtbGltaXQnO1xuZXhwb3J0IGNvbnN0IFJFR0VYX1BBVFRFUk4gPSAncmVnZXgtcGF0dGVybic7XG5leHBvcnQgY29uc3QgRklFTERfTkFNRSA9ICdmaWVsZF9uYW1lJztcbmV4cG9ydCBjb25zdCBGSUVMRF9MQUJFTCA9ICdmaWVsZF9sYWJlbCc7XG5leHBvcnQgY29uc3QgRklFTERfUkVRVUlSRUQgPSAncmVxdWlyZWQnO1xuZXhwb3J0IGNvbnN0IEZJRUxEX1VOSVFVRV9DT05TVFJBSU5UID0gJ3VuaXF1ZV9jb25zdHJhaW50JztcbmV4cG9ydCBjb25zdCBGSUVMRF9UWVBFID0gJ2ZpZWxkX3R5cGUnO1xuZXhwb3J0IGNvbnN0IEZJRUxEX0xFTkdUSCA9ICdmaWVsZF9sZW5ndGgnO1xuZXhwb3J0IGNvbnN0IEZJRUxEX1BFUkNFTlRBR0UgPSAncGVyY2VudGFnZSc7XG5leHBvcnQgY29uc3QgRklFTERfUEVSQ0VOVEFHRV9DT05TVFJBSU5UID0gJ3BlcmNlbnRhZ2VfY29uc3RyYWludCc7XG5leHBvcnQgY29uc3QgRklFTERfSVRFTV9UWVBFID0gJ2l0ZW0tdHlwZSc7XG5leHBvcnQgY29uc3QgRklFTERfSU1QT1JUQUJMRSA9ICdpbXBvcnRhYmxlJztcbmV4cG9ydCBjb25zdCBGSUVMRF9JRF9PTkxZID0gJ2lkX29ubHknO1xuZXhwb3J0IGNvbnN0IEZJRUxEX01VTFRJUExFX1ZBTFVFU19BTExPV0VEID0gJ211bHRpcGxlX3ZhbHVlcyc7XG5leHBvcnQgY29uc3QgRklFTERfVFJFRV9DT0xMRUNUSU9OID0gJ3RyZWVfY29sbGVjdGlvbic7XG5leHBvcnQgY29uc3QgRklFTERfQ0hJTERSRU4gPSAnY2hpbGRyZW4nO1xuZXhwb3J0IGNvbnN0IEZJRUxEX0RFUEVOREVOQ0lFUyA9ICdkZXBlbmRlbmNpZXMnO1xuXG5leHBvcnQgY29uc3QgRklFTERfVFlQRV9MSVNUID0gJ2xpc3QnO1xuZXhwb3J0IGNvbnN0IEZJRUxEX1RZUEVfT0JKRUNUID0gJ29iamVjdCc7XG5leHBvcnQgY29uc3QgRklFTERfVFlQRV9TVFJJTkcgPSAnc3RyaW5nJztcbmV4cG9ydCBjb25zdCBGSUVMRF9UWVBFX0xPTkcgPSAnbG9uZyc7XG5leHBvcnQgY29uc3QgRklFTERfVFlQRV9GTE9BVCA9ICdmbG9hdCc7XG5leHBvcnQgY29uc3QgRklFTERfVFlQRV9CT09MRUFOID0gJ2Jvb2xlYW4nO1xuZXhwb3J0IGNvbnN0IEZJRUxEX1RZUEVfREFURSA9ICdkYXRlJztcbmV4cG9ydCBjb25zdCBGSUVMRF9UWVBFX1RJTUVTVEFNUCA9ICd0aW1lc3RhbXAnO1xuXG5leHBvcnQgZGVmYXVsdCBPYmplY3QuZnJlZXplKHtcbiAgRlVORElOR19BQ1RJVkVfTElTVCxcbiAgRlVORElOR19ERVRBSUxTX1BBVEgsXG4gIEZVTkRJTkdfQ1VSUkVOQ1lfUEFUSCxcbiAgTVRFRl9DVVJSRU5DWV9QQVRILFxuICBQUENfQ1VSUkVOQ1lfUEFUSCxcbiAgUlBDX0NVUlJFTkNZX1BBVEgsXG4gIENPTVBPTkVOVF9DVVJSRU5DWV9QQVRILFxuICBESVNCVVJTRU1FTlRTX1BBVEgsXG4gIEFDVElWSVRZX0lOVEVSTkFMX0lEU19JTlRFUk5BTF9JRF9QQVRILFxuICBBQ1RJVklUWV9JTlRFUk5BTF9JRFNfT1JHQU5JWkFUSU9OX1BBVEgsXG4gIExPQ0FUSU9OX1BBVEgsXG4gIE5BVElPTkFMX1BMQU5fT0JKRUNUSVZFX1BBVEgsXG4gIFBSSU1BUllfUFJPR1JBTV9QQVRILFxuICBTRUNPTkRBUllfUFJPR1JBTV9QQVRILFxuICBQUklNQVJZX1NFQ1RPUl9QQVRILFxuICBTRUNPTkRBUllfU0VDVE9SX1BBVEgsXG4gIFRFUlRJQVJZX1NFQ1RPUl9QQVRILFxuICBET05PUl9PUkdBTklaQVRJT05TX1BBVEgsXG4gIFJFU1BPTlNJQkxFX09SR0FOSVpBVElPTl9CVURHRVRTX1BBVEgsXG4gIFJFTEFURURfT1JHU19QQVRIUyxcbiAgUkVMQVRFRF9PUkdTX09SR0FOSVpBVElPTl9QQVRIUyxcbiAgUklDSF9URVhUX0ZJRUxEUyxcbiAgUEFUSFNfV0lUSF9UUkVFX1NUUlVDVFVSRSxcbiAgUEFUSFNfV0lUSF9ISUVSQVJDSElDQUxfVkFMVUVTLFxuICBBQ1RJVklUWV9DT05UQUNUX1BBVEhTLFxuICBUUkFOU0FDVElPTl9UWVBFUyxcbiAgVFJBTlNBQ1RJT05fVFlQRVNfT1JERVJFRCxcbiAgRlVORElOR19UUkFOU0FDVElPTl9UWVBFUyxcbiAgQURKVVNUTUVOVF9UWVBFX1BBVEhTLFxuICBGVU5ESU5HX0NVUlJFTkNZX1BBVEhTLFxuICBQQVRIU19GT1JfQUNUSVZJVFlfQ1VSUkVOQ1ksXG4gIFBBVEhTX0ZPUl9DVVJSRU5DWSxcbiAgRE9fTk9UX0hZRFJBVEVfRklFTERTX0xJU1QsXG4gIEFMVEVSTkFURV9WQUxVRV9QQVRILFxuICBBQ1RJVklUWV9GSUVMRFNfRk1fUEFUSCxcbiAgUFJFRklYX0FDVElWSVRZLFxuICBQUkVGSVhfQ09OVEFDVCxcbiAgUFJFRklYX1JFU09VUkNFLFxuICBQUkVGSVhfQ09NTU9OLFxuICBQUkVGSVhfTElTVCxcbiAgRklFTERfUEFUSCxcbiAgRklFTERfT1BUSU9OUyxcbiAgRklFTERfT1BUSU9OX1VTQUJMRSxcbiAgTElTVF9NQVhfU0laRSxcbiAgUkVHRVhfUEFUVEVSTixcbiAgRklFTERfTkFNRSxcbiAgRklFTERfTEFCRUwsXG4gIEZJRUxEX1JFUVVJUkVELFxuICBGSUVMRF9VTklRVUVfQ09OU1RSQUlOVCxcbiAgRklFTERfVFlQRSxcbiAgRklFTERfTEVOR1RILFxuICBGSUVMRF9QRVJDRU5UQUdFLFxuICBGSUVMRF9QRVJDRU5UQUdFX0NPTlNUUkFJTlQsXG4gIEZJRUxEX0lURU1fVFlQRSxcbiAgRklFTERfSU1QT1JUQUJMRSxcbiAgRklFTERfSURfT05MWSxcbiAgRklFTERfTVVMVElQTEVfVkFMVUVTX0FMTE9XRUQsXG4gIEZJRUxEX1RSRUVfQ09MTEVDVElPTixcbiAgRklFTERfQ0hJTERSRU4sXG4gIEZJRUxEX0RFUEVOREVOQ0lFUyxcbiAgRklFTERfVFlQRV9MSVNULFxuICBGSUVMRF9UWVBFX09CSkVDVCxcbiAgRklFTERfVFlQRV9TVFJJTkcsXG4gIEZJRUxEX1RZUEVfTE9ORyxcbiAgRklFTERfVFlQRV9GTE9BVCxcbiAgRklFTERfVFlQRV9CT09MRUFOLFxuICBGSUVMRF9UWVBFX0RBVEUsXG4gIEZJRUxEX1RZUEVfVElNRVNUQU1QLFxufSk7XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBjbGFzcy1tZXRob2RzLXVzZS10aGlzICovXG5pbXBvcnQgQ29uc3RhbnRzIGZyb20gJy4uLy4uL3V0aWxzL0NvbnN0YW50cyc7XG5pbXBvcnQgKiBhcyBGUEMgZnJvbSAnLi4vLi4vdXRpbHMvRmllbGRQYXRoQ29uc3RhbnRzJztcblxubGV0IGxvZ2dlciA9IG51bGw7XG5cbi8qKlxuICogVGhpcyBpcyBhIGhlbHBlciBjbGFzcyBmb3IgY2hlY2tpbmcgZmllbGRzIHN0YXR1cywgZ2V0dGluZyBmaWVsZCBvcHRpb25zIHRyYW5zbGF0aW9ucyBhbmQgdGhlIGxpa2UuXG4gKlxuICogQGF1dGhvciBOYWRlamRhIE1hbmRyZXNjdVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGaWVsZHNNYW5hZ2VyIHtcbiAgLyoqXG4gICAqIFNoYWxsb3cgY2xvbmUgb2YgYW5vdGhlciBuZXdGaWVsZHNNYW5hZ2VyXG4gICAqIEBwYXJhbSBmaWVsZHNNYW5hZ2VyXG4gICAqIEByZXR1cm4ge0ZpZWxkc01hbmFnZXJ9XG4gICAqL1xuICBzdGF0aWMgY2xvbmUoZmllbGRzTWFuYWdlcjogRmllbGRzTWFuYWdlcikge1xuICAgIGNvbnN0IG5ld0ZpZWxkc01hbmFnZXIgPSBuZXcgRmllbGRzTWFuYWdlcihbXSwgW10pO1xuICAgIE9iamVjdC5hc3NpZ24obmV3RmllbGRzTWFuYWdlciwgZmllbGRzTWFuYWdlcik7XG4gICAgcmV0dXJuIG5ld0ZpZWxkc01hbmFnZXI7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihmaWVsZHNEZWYsIHBvc3NpYmxlVmFsdWVzQ29sbGVjdGlvbiwgY3VycmVudExhbmd1YWdlLCBMb2dnZXJNYW5hZ2VyKSB7XG4gICAgLy8gVE9ETyByZW1vdmUgY2FjaGVcbiAgICBsb2dnZXIgPSBuZXcgTG9nZ2VyTWFuYWdlcignRmllbGRzIG1hbmFnZXInKTtcbiAgICBsb2dnZXIuZGVidWcoJ2NvbnN0cnVjdG9yJyk7XG4gICAgdGhpcy5fZmllbGRzRGVmID0gZmllbGRzRGVmO1xuICAgIHRoaXMuX3Bvc3NpYmxlVmFsdWVzTWFwID0ge307XG4gICAgcG9zc2libGVWYWx1ZXNDb2xsZWN0aW9uLmZvckVhY2gocHYgPT4ge1xuICAgICAgdGhpcy5fcG9zc2libGVWYWx1ZXNNYXBbcHYuaWRdID0gcHZbRlBDLkZJRUxEX09QVElPTlNdO1xuICAgIH0pO1xuICAgIHRoaXMuX2ZpZWxkUGF0aHNFbmFibGVkU3RhdHVzTWFwID0ge307XG4gICAgdGhpcy5fbGFuZyA9IGN1cnJlbnRMYW5ndWFnZSB8fCBDb25zdGFudHMuTEFOR1VBR0VfRU5HTElTSDtcbiAgICB0aGlzLl9kZWZhdWx0TGFuZyA9IENvbnN0YW50cy5MQU5HVUFHRV9FTkdMSVNIO1xuICAgIHRoaXMuY2xlYW51cChmaWVsZHNEZWYpO1xuICB9XG5cbiAgY2xlYW51cChmaWVsZHNEZWYpIHtcbiAgICAvLyBUT0RPIGRlY2lkZSBlaXRoZXIgdG8ga2VlcCBjbGVhbnVwIChoZXJlIG9yIGFueXdoZXJlIGVsc2UpIG9yIGNoZWNrIGlmIHdlIG5lZWQgdG8gc3RhbmRhcmRpemUgQVBJXG4gICAgZmllbGRzRGVmLmZvckVhY2goZmQgPT4ge1xuICAgICAgaWYgKGZkLmNoaWxkcmVuKSB7XG4gICAgICAgIHRoaXMuY2xlYW51cChmZC5jaGlsZHJlbik7XG4gICAgICB9XG4gICAgICBpZiAoZmQuZmllbGRfbGFiZWwpIHtcbiAgICAgICAgT2JqZWN0LmtleXMoZmQuZmllbGRfbGFiZWwpLmZvckVhY2gobGFuZyA9PiB7XG4gICAgICAgICAgZmQuZmllbGRfbGFiZWxbbGFuZy50b0xvd2VyQ2FzZSgpXSA9IGZkLmZpZWxkX2xhYmVsW2xhbmddO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHNldCBjdXJyZW50TGFuZ3VhZ2VDb2RlKGxhbmcpIHtcbiAgICB0aGlzLl9sYW5nID0gbGFuZztcbiAgfVxuXG4gIHNldCBkZWZhdWx0TGFuZ3VhZ2VDb2RlKGxhbmcpIHtcbiAgICB0aGlzLl9kZWZhdWx0TGFuZyA9IGxhbmc7XG4gIH1cblxuICBnZXQgZmllbGRzRGVmKCkge1xuICAgIHJldHVybiB0aGlzLl9maWVsZHNEZWY7XG4gIH1cblxuICBnZXQgcG9zc2libGVWYWx1ZXNNYXAoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Bvc3NpYmxlVmFsdWVzTWFwO1xuICB9XG5cbiAgZ2V0UG9zc2libGVWYWx1ZXNPcHRpb25zKGZpZWxkUGF0aCkge1xuICAgIHJldHVybiBPYmplY3QudmFsdWVzKHRoaXMuX3Bvc3NpYmxlVmFsdWVzTWFwW2ZpZWxkUGF0aF0pO1xuICB9XG5cbiAgaXNGaWVsZFBhdGhCeVBhcnRzRW5hYmxlZCguLi5wYXRoUGFydHMpIHtcbiAgICByZXR1cm4gdGhpcy5pc0ZpZWxkUGF0aEVuYWJsZWQocGF0aFBhcnRzLmpvaW4oJ34nKSk7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2tzIGlmIHRoZSBzcGVjaWZpZWQgZmllbGQgcGF0aCBpcyBlbmFibGVkIGluIEFNUCBGTVxuICAgKiBAcGFyYW0gZmllbGRQYXRoXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqL1xuICBpc0ZpZWxkUGF0aEVuYWJsZWQoZmllbGRQYXRoKSB7XG4gICAgaWYgKHRoaXMuX2ZpZWxkUGF0aHNFbmFibGVkU3RhdHVzTWFwW2ZpZWxkUGF0aF0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5fYnVpbGRGaWVsZFBhdGhTdGF0dXMoZmllbGRQYXRoKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX2ZpZWxkUGF0aHNFbmFibGVkU3RhdHVzTWFwW2ZpZWxkUGF0aF07XG4gIH1cblxuICBfYnVpbGRGaWVsZFBhdGhTdGF0dXMoZmllbGRQYXRoKSB7XG4gICAgY29uc3QgcGF0aFBhcnRzID0gZmllbGRQYXRoLnNwbGl0KCd+Jyk7XG4gICAgbGV0IGN1cnJlbnRUcmVlID0gdGhpcy5fZmllbGRzRGVmO1xuICAgIGNvbnN0IGlzRGlzYWJsZWQgPSBwYXRoUGFydHMuc29tZShwYXJ0ID0+IHtcbiAgICAgIGN1cnJlbnRUcmVlID0gY3VycmVudFRyZWUuZmluZChmaWVsZCA9PiBmaWVsZC5maWVsZF9uYW1lID09PSBwYXJ0KTtcbiAgICAgIGlmIChjdXJyZW50VHJlZSAmJiAoKGN1cnJlbnRUcmVlW0ZQQy5GSUVMRF9UWVBFXSA9PT0gRlBDLkZJRUxEX1RZUEVfTElTVFxuICAgICAgICAmJiBjdXJyZW50VHJlZVtGUEMuRklFTERfSVRFTV9UWVBFXSA9PT0gRlBDLkZJRUxEX1RZUEVfT0JKRUNUKVxuICAgICAgICB8fCBjdXJyZW50VHJlZVtGUEMuRklFTERfVFlQRV0gPT09IEZQQy5GSUVMRF9UWVBFX09CSkVDVCkpIHtcbiAgICAgICAgY3VycmVudFRyZWUgPSBjdXJyZW50VHJlZS5jaGlsZHJlbjtcbiAgICAgIH1cbiAgICAgIHJldHVybiAhY3VycmVudFRyZWU7XG4gICAgfSk7XG4gICAgdGhpcy5fZmllbGRQYXRoc0VuYWJsZWRTdGF0dXNNYXBbZmllbGRQYXRoXSA9ICFpc0Rpc2FibGVkO1xuICB9XG5cbiAgLyoqXG4gICAqIEZpbmQgdGhlIHRyYW5zbGF0aW9uIGZvciB0aGUgb3JpZ2luYWwgdmFsdWUgZm9yIHRoZSBnaXZlbiBmaWVsZCBwYXRoLCBpZiBmb3VuZCwgb3RoZXJ3aXNlIHJldHVybnMgbnVsbFxuICAgKiBAcGFyYW0gZmllbGRQYXRoXG4gICAqIEBwYXJhbSBvcmlnVmFsdWVcbiAgICogQHJldHVybiB7c3RyaW5nfG51bGx9XG4gICAqL1xuICBnZXRWYWx1ZVRyYW5zbGF0aW9uKGZpZWxkUGF0aCwgb3JpZ1ZhbHVlKSB7XG4gICAgLy8gZmFsbGJhY2sgdG8gb3JpZ2luYWwgdW50cmFuc2xhdGVkIHZhbHVlXG4gICAgbGV0IHRyblZhbHVlID0gb3JpZ1ZhbHVlO1xuICAgIGNvbnN0IG9wdGlvbnMgPSB0aGlzLl9wb3NzaWJsZVZhbHVlc01hcFtmaWVsZFBhdGhdO1xuICAgIGlmIChvcHRpb25zKSB7XG4gICAgICBjb25zdCBvcHRpb24gPSBPYmplY3QudmFsdWVzKG9wdGlvbnMpLmZpbmQob3B0ID0+IG9wdC52YWx1ZSA9PT0gb3JpZ1ZhbHVlKTtcbiAgICAgIGlmIChvcHRpb24gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBjb25zdCB0cmFuc2xhdGlvbnMgPSBvcHRpb25bJ3RyYW5zbGF0ZWQtdmFsdWUnXTtcbiAgICAgICAgaWYgKHRyYW5zbGF0aW9ucykge1xuICAgICAgICAgIHRyblZhbHVlID0gdHJhbnNsYXRpb25zW3RoaXMuX2xhbmddIHx8IHRyYW5zbGF0aW9uc1t0aGlzLl9kZWZhdWx0TGFuZ10gfHwgdHJuVmFsdWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRyblZhbHVlO1xuICB9XG5cbiAgZ2V0RmllbGRMYWJlbFRyYW5zbGF0aW9uKGZpZWxkUGF0aCkge1xuICAgIGxldCB0cm5MYWJlbCA9IG51bGw7XG4gICAgY29uc3QgZmllbGRzRGVmID0gdGhpcy5nZXRGaWVsZERlZihmaWVsZFBhdGgpO1xuICAgIGlmIChmaWVsZHNEZWYgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdHJuTGFiZWwgPSBmaWVsZHNEZWYuZmllbGRfbGFiZWxbdGhpcy5fbGFuZ10gfHwgZmllbGRzRGVmLmZpZWxkX2xhYmVsW3RoaXMuX2RlZmF1bHRMYW5nXSB8fCBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gdHJuTGFiZWw7XG4gIH1cblxuICBnZXRGaWVsZERlZihmaWVsZFBhdGgpIHtcbiAgICBsZXQgZmllbGRzRGVmID0gdGhpcy5fZmllbGRzRGVmO1xuICAgIGlmIChmaWVsZFBhdGgpIHtcbiAgICAgIGZpZWxkUGF0aC5zcGxpdCgnficpLnNvbWUocGFydCA9PiB7XG4gICAgICAgIGlmICghKGZpZWxkc0RlZiBpbnN0YW5jZW9mIEFycmF5KSkge1xuICAgICAgICAgIGZpZWxkc0RlZiA9IGZpZWxkc0RlZi5jaGlsZHJlbjtcbiAgICAgICAgfVxuICAgICAgICBmaWVsZHNEZWYgPSBmaWVsZHNEZWYuZmluZChmZCA9PiBmZC5maWVsZF9uYW1lID09PSBwYXJ0KTtcbiAgICAgICAgcmV0dXJuIGZpZWxkc0RlZiA9PT0gdW5kZWZpbmVkO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZpZWxkc0RlZiA9IHsgY2hpbGRyZW46IGZpZWxkc0RlZiB9O1xuICAgIH1cbiAgICByZXR1cm4gZmllbGRzRGVmO1xuICB9XG5cbiAgZ2V0RmllbGRQYXRoc0J5RGVwZW5kZW5jaWVzKGRlcGVuZGVuY2llcykge1xuICAgIGNvbnN0IGZpZWxkUGF0aHMgPSBbXTtcbiAgICB0aGlzLl9nZXRGaWVsZFBhdGhzQnlEZXBlbmRlbmNpZXMoZGVwZW5kZW5jaWVzLCB0aGlzLl9maWVsZHNEZWYsICcnLCBmaWVsZFBhdGhzKTtcbiAgICByZXR1cm4gZmllbGRQYXRocztcbiAgfVxuXG4gIF9nZXRGaWVsZFBhdGhzQnlEZXBlbmRlbmNpZXMoZGVwZW5kZW5jaWVzLCBmaWVsZHNEZWYsIGN1cnJlbnRQYXRoLCBmaWVsZFBhdGhzOiBBcnJheSkge1xuICAgIGlmICghKGZpZWxkc0RlZiBpbnN0YW5jZW9mIEFycmF5KSkge1xuICAgICAgZmllbGRzRGVmID0gZmllbGRzRGVmLmNoaWxkcmVuO1xuICAgIH1cbiAgICBmaWVsZHNEZWYuZm9yRWFjaChmZCA9PiB7XG4gICAgICBjb25zdCBoYXNEZXBlbmRlbmN5ID0gZmQuZGVwZW5kZW5jaWVzICYmIGZkLmRlcGVuZGVuY2llcy5zb21lKGRlcCA9PiBkZXBlbmRlbmNpZXMuaW5jbHVkZXMoZGVwKSk7XG4gICAgICBpZiAoZmQuY2hpbGRyZW4gfHwgaGFzRGVwZW5kZW5jeSkge1xuICAgICAgICBjb25zdCBmaWVsZFBhdGggPSBgJHtjdXJyZW50UGF0aH0ke2ZkLmZpZWxkX25hbWV9YDtcbiAgICAgICAgaWYgKGhhc0RlcGVuZGVuY3kpIHtcbiAgICAgICAgICBmaWVsZFBhdGhzLnB1c2goZmllbGRQYXRoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZmQuY2hpbGRyZW4pIHtcbiAgICAgICAgICB0aGlzLl9nZXRGaWVsZFBhdGhzQnlEZXBlbmRlbmNpZXMoZGVwZW5kZW5jaWVzLCBmZC5jaGlsZHJlbiwgYCR7ZmllbGRQYXRofX5gLCBmaWVsZFBhdGhzKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgZ2V0VmFsdWUob2JqZWN0LCBmaWVsZFBhdGgsIGdldE9wdGlvblRyYW5zbGF0aW9uKSB7XG4gICAgcmV0dXJuIEZpZWxkc01hbmFnZXIuZ2V0VmFsdWUob2JqZWN0LCBmaWVsZFBhdGgsIGdldE9wdGlvblRyYW5zbGF0aW9uKTtcbiAgfVxuXG4gIHN0YXRpYyBnZXRWYWx1ZShvYmplY3QsIGZpZWxkUGF0aCwgZ2V0T3B0aW9uVHJhbnNsYXRpb24pIHtcbiAgICBjb25zdCBwYXJ0cyA9IGZpZWxkUGF0aCA/IGZpZWxkUGF0aC5zcGxpdCgnficpIDogW107XG4gICAgbGV0IHZhbHVlID0gb2JqZWN0O1xuICAgIHBhcnRzLnNvbWUocGFydCA9PiB7XG4gICAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICBjb25zdCBuZXdMaXN0ID0gW107XG4gICAgICAgIHZhbHVlLmZvckVhY2goY3VycmVudCA9PiB7XG4gICAgICAgICAgY29uc3QgbmV3RWxlbWVudCA9IGN1cnJlbnRbcGFydF07XG4gICAgICAgICAgaWYgKG5ld0VsZW1lbnQgIT09IHVuZGVmaW5lZCAmJiBuZXdFbGVtZW50ICE9PSBudWxsKSB7XG4gICAgICAgICAgICBuZXdMaXN0LnB1c2gobmV3RWxlbWVudCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdmFsdWUgPSBuZXdMaXN0O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFsdWUgPSB2YWx1ZVtwYXJ0XTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB2YWx1ZSA9PT0gdW5kZWZpbmVkIHx8IHZhbHVlID09PSBudWxsIHx8IHZhbHVlLmxlbmd0aCA9PT0gMDtcbiAgICB9KTtcbiAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZSAhPT0gbnVsbCAmJiB2YWx1ZS5sZW5ndGggIT09IDApIHtcbiAgICAgIGxldCB2YWx1ZXMgPSBbXS5jb25jYXQodmFsdWUpO1xuICAgICAgdmFsdWVzID0gdmFsdWVzLm1hcCh2YWwgPT4ge1xuICAgICAgICBpZiAodmFsLnZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICByZXR1cm4gdmFsO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBnZXRPcHRpb25UcmFuc2xhdGlvbih2YWwsIHRoaXMuX2xhbmcsIHRoaXMuX2RlZmF1bHRMYW5nKTtcbiAgICAgIH0pO1xuICAgICAgdmFsdWUgPSB2YWx1ZSBpbnN0YW5jZW9mIEFycmF5ID8gdmFsdWVzIDogdmFsdWVzWzBdO1xuICAgIH1cbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cbn1cbiIsIi8qIGVzbGludC1kaXNhYmxlIGNsYXNzLW1ldGhvZHMtdXNlLXRoaXMgKi9cbmltcG9ydCBBY3Rpdml0eUNvbnN0YW50cyBmcm9tICcuLi91dGlsL0FjdGl2aXR5Q29uc3RhbnRzJztcbmltcG9ydCBFcnJvckNvbnN0YW50cyBmcm9tICcuLi8uLi91dGlscy9jb25zdGFudHMvRXJyb3JDb25zdGFudHMnO1xuaW1wb3J0IENvbnN0YW50cyBmcm9tICcuLi8uLi91dGlscy9Db25zdGFudHMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDdXJyZW5jeVJhdGVzTWFuYWdlciB7XG4gIGNvbnN0cnVjdG9yKGN1cnJlbmN5UmF0ZXMsIGJhc2VDdXJyZW5jeSwgdHJhbnNsYXRlLCBkYXRlVXRpbHMsIGVycm9yTm90aWZpY2F0aW9uSGVscGVyKSB7XG4gICAgdGhpcy5fY3VycmVuY3lSYXRlcyA9IGN1cnJlbmN5UmF0ZXM7XG4gICAgdGhpcy5fYmFzZUN1cnJlbmN5ID0gYmFzZUN1cnJlbmN5O1xuICAgIHRoaXMuX2N1cnJuY2llc1dpdGhFeGNoYW5nZVJhdGVzID0gdGhpcy5fZ2V0Q3VycmVuY2llc1dpdGhFeGNoYW5nZVJhdGVzKCk7XG4gICAgdGhpcy5fdHJhbnNsYXRlID0gdHJhbnNsYXRlO1xuICAgIHRoaXMuX2RhdGVVdGlscyA9IGRhdGVVdGlscztcbiAgICB0aGlzLl9lcnJvck5vdGlmaWNhdGlvbkhlbHBlciA9IGVycm9yTm90aWZpY2F0aW9uSGVscGVyO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCBvZiBjdXJyZW5jaWVzIHRoYXQgaGFzIGF0IGxlYXN0IG9uZSBleGNoYW5nZSByYXRlXG4gICAqIEByZXR1cm4ge1NldDxhbnk+IHwgKn1cbiAgICovXG4gIGdldCBjdXJyZW5jaWVzV2l0aEV4Y2hhbmdlUmF0ZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2N1cnJuY2llc1dpdGhFeGNoYW5nZVJhdGVzO1xuICB9XG5cbiAgLyoqXG4gICAqIEN1cnJlbmN5IGNvbnZlcnNpb24gdXRpbGl0eS4gSWYgd2UgaGF2ZSB0aGUgZGlyZWN0IHJhdGUgaXQgd2lsbCBjb252ZXJ0IGZyb20gY3VycmVuY3lGcm9tIHRvIGN1cnJlbmN5VG8gaW4gdGhlXG4gICAqIGdpdmVuIGRhdGUuIElmIHdlIGRvbid0IGhhdmUgdGhlIHNhaWQgY3VycmVuY3kgaXQgd2lsbCB0cnkgdG8gc2VhcmNoIHRoZSBpbnZlcnNlIHJhdGUgYW5kIHVzZSAxL3guIElmIHRoZSBpbnZlcnNlXG4gICAqIHJhdGUgaXMgYWxzbyBub3QgQXZhaWxhYmxlIGFuIGVycm9yIHdpbGwgYmUgdGhyb3duXG4gICAqIEBwYXJhbSBjdXJyZW5jeUZyb20gY3VycmVuY3kgY29kZSBmcm9tIHRoZSBjdXJyZW5jeSB3ZSBhcmUgY29udmVydGluZyBmcm9tXG4gICAqIEBwYXJhbSBjdXJyZW5jeVRvIGN1cnJlbmN5IGNvZGUgZnJvbSB0aGUgY3VycmVuY3kgd2UgYXJlIGNvbnZlcnRpbmcgdG9cbiAgICogQHBhcmFtIGRhdGVUb0ZpbmQgZGF0ZSBmb3Igd2hpY2ggd2UgYXJlIGRvaW5nIHRoZSBjb252ZXJzaW9uLiBJdCBpcyBleHBlY3RlZCBpbiB5eXl5LW1tLWRkXG4gICAqIEByZXR1cm5zIHsqfFByb21pc2UuPFRSZXN1bHQ+fVxuICAgKi9cbiAgY29udmVydEN1cnJlbmN5KGN1cnJlbmN5RnJvbSwgY3VycmVuY3lUbywgZGF0ZVRvRmluZCwgZml4ZWRFeGNoYW5nZVJhdGUpIHtcbiAgICBpZiAoY3VycmVuY3lGcm9tID09PSBjdXJyZW5jeVRvKSB7XG4gICAgICByZXR1cm4gQ29uc3RhbnRzLlJBVEVfU0FNRV9DVVJSRU5DWTtcbiAgICB9XG4gICAgaWYgKGZpeGVkRXhjaGFuZ2VSYXRlICYmIGZpeGVkRXhjaGFuZ2VSYXRlID4gMCkge1xuICAgICAgcmV0dXJuICh0aGlzLmNvbnZlcnRDdXJyZW5jeSh0aGlzLl9iYXNlQ3VycmVuY3ksIGN1cnJlbmN5VG8sIGRhdGVUb0ZpbmQsIG51bGwpIC9cbiAgICAgICAgZml4ZWRFeGNoYW5nZVJhdGUpO1xuICAgIH1cbiAgICBjb25zdCB0aW1lRGF0ZVRvRmluZCA9IChuZXcgRGF0ZShgJHtkYXRlVG9GaW5kfSAke0NvbnN0YW50cy5DVVJSRU5DWV9IT1VSfWApKS5nZXRUaW1lKCk7XG4gICAgaWYgKHRoaXMuX2N1cnJlbmN5UmF0ZXMpIHtcbiAgICAgIGNvbnN0IGN1cnJlbmNpZXNUb1NlYXJjaERpcmVjdCA9IHRoaXMuX2N1cnJlbmN5UmF0ZXMuZmluZCgoaXRlbSkgPT5cbiAgICAgICAgaXRlbVtDb25zdGFudHMuQ1VSUkVOQ1lfUEFJUl0uZnJvbSA9PT0gY3VycmVuY3lGcm9tICYmIGl0ZW1bQ29uc3RhbnRzLkNVUlJFTkNZX1BBSVJdLnRvID09PSBjdXJyZW5jeVRvXG4gICAgICApO1xuICAgICAgaWYgKGN1cnJlbmNpZXNUb1NlYXJjaERpcmVjdCkge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRFeGNoYW5nZVJhdGUoY3VycmVuY2llc1RvU2VhcmNoRGlyZWN0LCB0aW1lRGF0ZVRvRmluZCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBkaXJlY3Qgbm90IGZvdW5kXG4gICAgICAgIGNvbnN0IGN1cnJlbmNpZXNUb1NlYXJjaEludmVyc2UgPVxuICAgICAgICAgIHRoaXMuX2N1cnJlbmN5UmF0ZXMuZmluZCgoaXRlbSkgPT5cbiAgICAgICAgICAgIGl0ZW1bQ29uc3RhbnRzLkNVUlJFTkNZX1BBSVJdLmZyb20gPT09IGN1cnJlbmN5VG8gJiYgaXRlbVtDb25zdGFudHMuQ1VSUkVOQ1lfUEFJUl0udG8gPT09XG4gICAgICAgICAgICBjdXJyZW5jeUZyb20pO1xuICAgICAgICBpZiAoY3VycmVuY2llc1RvU2VhcmNoSW52ZXJzZSkge1xuICAgICAgICAgIHJldHVybiAxIC8gdGhpcy5nZXRFeGNoYW5nZVJhdGUoY3VycmVuY2llc1RvU2VhcmNoSW52ZXJzZSwgdGltZURhdGVUb0ZpbmQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmNvbnZlcnRWaWFCYXNlQ3VycmVuY3koY3VycmVuY3lGcm9tLCBjdXJyZW5jeVRvLCB0aW1lRGF0ZVRvRmluZCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgdGhpcy5fZ2V0Q3VycmVuY3lFcnJvcignQ3VycmVuY3lSYXRlc05vdEluaXRpYWxpemVkJyk7XG4gICAgfVxuICB9XG5cbiAgY29udmVydEZ1bmRpbmdEZXRhaWxzVG9DdXJyZW5jeShmdW5kaW5nRGV0YWlscywgY3VycmVuY3lUbykge1xuICAgIGxldCB0b3RhbCA9IDA7XG4gICAgZnVuZGluZ0RldGFpbHMuZm9yRWFjaChmZCA9PiB7XG4gICAgICB0b3RhbCArPSB0aGlzLmNvbnZlcnRUcmFuc2FjdGlvbkFtb3VudFRvQ3VycmVuY3koZmQsIGN1cnJlbmN5VG8pO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHRvdGFsO1xuICB9XG5cbiAgY29udmVydFRyYW5zYWN0aW9uQW1vdW50VG9CYXNlQ3VycmVuY3koZnVuZGluZ0RldGFpbCkge1xuICAgIHJldHVybiB0aGlzLmNvbnZlcnRUcmFuc2FjdGlvbkFtb3VudFRvQ3VycmVuY3koZnVuZGluZ0RldGFpbCwgdGhpcy5fYmFzZUN1cnJlbmN5KTtcbiAgfVxuXG4gIGNvbnZlcnRBbW91bnRUb0N1cnJlbmN5KGFtb3VudCwgY3VycmVuY3lGcm9tLCBkYXRlLCBmaXhlZEV4Y2hhbmdlUmF0ZSwgY3VycmVuY3lUbykge1xuICAgIGNvbnN0IGN1cnJlbmN5UmF0ZSA9IHRoaXMuY29udmVydEN1cnJlbmN5KGN1cnJlbmN5RnJvbSwgY3VycmVuY3lUbyxcbiAgICAgIHRoaXMuX2RhdGVVdGlscy5mb3JtYXREYXRlRm9yQVBJKGRhdGUpLCBmaXhlZEV4Y2hhbmdlUmF0ZSk7XG4gICAgcmV0dXJuIGFtb3VudCAqIGN1cnJlbmN5UmF0ZTtcbiAgfVxuXG4gIGNvbnZlcnRUcmFuc2FjdGlvbkFtb3VudFRvQ3VycmVuY3koZnVuZGluZ0RldGFpbCwgY3VycmVuY3lUbykge1xuICAgIGNvbnN0IGZpeGVkRXhjaGFuZ2VSYXRlID0gZnVuZGluZ0RldGFpbFtBY3Rpdml0eUNvbnN0YW50cy5GSVhFRF9FWENIQU5HRV9SQVRFXTtcbiAgICBjb25zdCBjdXJyZW5jeUZyb20gPSBmdW5kaW5nRGV0YWlsW0FjdGl2aXR5Q29uc3RhbnRzLkNVUlJFTkNZXS52YWx1ZTtcbiAgICBjb25zdCB0cmFuc2FjdGlvbkRhdGUgPSBmdW5kaW5nRGV0YWlsW0FjdGl2aXR5Q29uc3RhbnRzLlRSQU5TQUNUSU9OX0RBVEVdO1xuICAgIGNvbnN0IHRyYW5zYWN0aW9uQW1vdW50ID0gZnVuZGluZ0RldGFpbFtBY3Rpdml0eUNvbnN0YW50cy5UUkFOU0FDVElPTl9BTU9VTlRdO1xuICAgIHJldHVybiB0aGlzLmNvbnZlcnRBbW91bnRUb0N1cnJlbmN5KHRyYW5zYWN0aW9uQW1vdW50LCBjdXJyZW5jeUZyb20sIHRyYW5zYWN0aW9uRGF0ZSwgZml4ZWRFeGNoYW5nZVJhdGUsXG4gICAgICBjdXJyZW5jeVRvKTtcbiAgfVxuXG4gIGdldEV4Y2hhbmdlUmF0ZShjdXJyZW5jaWVzVG9TZWFyY2gsIHRpbWVEYXRlVG9GaW5kKSB7XG4gICAgbGV0IGxvd2VyRW5kID0gMDtcbiAgICBsZXQgaGlnaGVyRW5kID0gY3VycmVuY2llc1RvU2VhcmNoLnJhdGVzLmxlbmd0aCAtIDE7XG4gICAgd2hpbGUgKGxvd2VyRW5kIDwgaGlnaGVyRW5kKSB7XG4gICAgICBjb25zdCBtaWRkbGUgPSBNYXRoLmZsb29yKChsb3dlckVuZCArIGhpZ2hlckVuZCkgLyAyKTtcbiAgICAgIGNvbnN0IGRpZmZlcmVuY2UgPSBNYXRoLmFicygobmV3IERhdGUoXG4gICAgICAgIGAke2N1cnJlbmNpZXNUb1NlYXJjaC5yYXRlc1ttaWRkbGVdLmRhdGV9ICAke0NvbnN0YW50cy5DVVJSRU5DWV9IT1VSfWApKVxuICAgICAgICAtIHRpbWVEYXRlVG9GaW5kKTtcbiAgICAgIGNvbnN0IGRpZmZlcmVuY2UxID0gTWF0aC5hYnMoKG5ldyBEYXRlKFxuICAgICAgICBgJHtjdXJyZW5jaWVzVG9TZWFyY2gucmF0ZXNbbWlkZGxlICsgMV0uZGF0ZX0gICR7Q29uc3RhbnRzLkNVUlJFTkNZX0hPVVJ9YCkpXG4gICAgICAgIC0gdGltZURhdGVUb0ZpbmQpO1xuICAgICAgaWYgKGRpZmZlcmVuY2UxIDw9IGRpZmZlcmVuY2UpIHtcbiAgICAgICAgbG93ZXJFbmQgPSBtaWRkbGUgKyAxO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaGlnaGVyRW5kID0gbWlkZGxlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gY3VycmVuY2llc1RvU2VhcmNoLnJhdGVzW2hpZ2hlckVuZF0ucmF0ZTtcbiAgfVxuXG4gIF9nZXRDdXJyZW5jeUVycm9yKGVycm9yTWVzYWdlKSB7XG4gICAgY29uc3Qgbm90aWZFcnJvckN1cnJlbmN5ID0gdGhpcy5fZXJyb3JOb3RpZmljYXRpb25IZWxwZXIuY3JlYXRlTm90aWZpY2F0aW9uKHtcbiAgICAgIG1lc3NhZ2U6IHRoaXMuX3RyYW5zbGF0ZShlcnJvck1lc2FnZSksXG4gICAgICBvcmlnaW46IEVycm9yQ29uc3RhbnRzLk5PVElGSUNBVElPTl9PUklHSU5fQ1VSUkVOQ1lfTUFOQUdFUlxuICAgIH0pO1xuICAgIHJldHVybiBub3RpZkVycm9yQ3VycmVuY3k7XG4gIH1cblxuICBjb252ZXJ0VmlhQmFzZUN1cnJlbmN5KGN1cnJlbmN5RnJvbSwgY3VycmVuY3lUbywgdGltZURhdGVUb0ZpbmQpIHtcbiAgICBjb25zdCByYXRlRnJvbVRvQmFzZSA9IHRoaXMuX2N1cnJlbmN5UmF0ZXMuZmluZCgoaXRlbSkgPT5cbiAgICAgIGl0ZW1bQ29uc3RhbnRzLkNVUlJFTkNZX1BBSVJdLmZyb20gPT09IGN1cnJlbmN5RnJvbSAmJiBpdGVtW0NvbnN0YW50cy5DVVJSRU5DWV9QQUlSXS50byA9PT1cbiAgICAgIHRoaXMuX2Jhc2VDdXJyZW5jeVxuICAgICk7XG4gICAgY29uc3QgcmF0ZUJhc2VUb1RvID0gdGhpcy5fY3VycmVuY3lSYXRlcy5maW5kKChpdGVtKSA9PlxuICAgICAgaXRlbVtDb25zdGFudHMuQ1VSUkVOQ1lfUEFJUl0uZnJvbSA9PT0gdGhpcy5fYmFzZUN1cnJlbmN5ICYmIGl0ZW1bQ29uc3RhbnRzLkNVUlJFTkNZX1BBSVJdLnRvID09PVxuICAgICAgY3VycmVuY3lUb1xuICAgICk7XG4gICAgaWYgKHJhdGVGcm9tVG9CYXNlICYmIHJhdGVCYXNlVG9Ubykge1xuICAgICAgLy8gaWYgd2UgaGF2ZSBib3RoIGN1cnJlbmNpZXMgd2UganVzdCByZXR1cm4gdGhlIHByb2R1Y3Qgb2YgZWNoIHJhdGVcbiAgICAgIHJldHVybiB0aGlzLmdldEV4Y2hhbmdlUmF0ZShyYXRlRnJvbVRvQmFzZSwgdGltZURhdGVUb0ZpbmQpICogdGhpcy5nZXRFeGNoYW5nZVJhdGUocmF0ZUJhc2VUb1RvLCB0aW1lRGF0ZVRvRmluZCk7XG4gICAgfSBlbHNlIGlmIChyYXRlRnJvbVRvQmFzZSkge1xuICAgICAgLy8gaWYgZWl0aGVyIG9mIHRoZW0gaXMgbm90IGZvdW5kIHdlIHRyeSB0byBmaW5kIHRoZSBpbnZlcnNlXG4gICAgICAvLyB3ZSBnZXQgdGhlIGludmVyc2Ugb2YgcmF0ZUJhc2VUb1RvXG4gICAgICBjb25zdCByYXRlVG9Ub0Jhc2UgPSB0aGlzLl9jdXJyZW5jeVJhdGVzLmZpbmQoKGl0ZW0pID0+XG4gICAgICAgIGl0ZW1bQ29uc3RhbnRzLkNVUlJFTkNZX1BBSVJdLmZyb20gPT09IGN1cnJlbmN5VG8gJiYgaXRlbVtDb25zdGFudHMuQ1VSUkVOQ1lfUEFJUl0udG8gPT09XG4gICAgICAgIHRoaXMuX2Jhc2VDdXJyZW5jeVxuICAgICAgKTtcbiAgICAgIGlmIChyYXRlVG9Ub0Jhc2UpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0RXhjaGFuZ2VSYXRlKHJhdGVGcm9tVG9CYXNlLCB0aW1lRGF0ZVRvRmluZClcbiAgICAgICAgICAqICgxIC8gdGhpcy5nZXRFeGNoYW5nZVJhdGUocmF0ZVRvVG9CYXNlLCB0aW1lRGF0ZVRvRmluZCkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIEVycm9yQ29uc3RhbnRzLlJBVEVfQ1VSUkVOQ1lfTk9UX0ZPVU5EO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAocmF0ZUJhc2VUb1RvKSB7XG4gICAgICBjb25zdCByYXRlQmFzZVRvRnJvbSA9IHRoaXMuX2N1cnJlbmN5UmF0ZXMuZmluZCgoaXRlbSkgPT5cbiAgICAgICAgaXRlbVtDb25zdGFudHMuQ1VSUkVOQ1lfUEFJUl0uZnJvbSA9PT0gdGhpcy5fYmFzZUN1cnJlbmN5ICYmIGl0ZW1bQ29uc3RhbnRzLkNVUlJFTkNZX1BBSVJdLnRvID09PVxuICAgICAgICBjdXJyZW5jeUZyb21cbiAgICAgICk7XG4gICAgICAvLyB3ZSB0cnkgdG8gZ2V0IHRoZSBpbnZlcnNlIG9mIHJhdGVGcm9tVG9CYXNlXG4gICAgICBpZiAocmF0ZUJhc2VUb0Zyb20pIHtcbiAgICAgICAgcmV0dXJuICgxIC8gdGhpcy5nZXRFeGNoYW5nZVJhdGUocmF0ZUJhc2VUb0Zyb20sIHRpbWVEYXRlVG9GaW5kKSlcbiAgICAgICAgICAqIHRoaXMuZ2V0RXhjaGFuZ2VSYXRlKHJhdGVCYXNlVG9UbywgdGltZURhdGVUb0ZpbmQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIEVycm9yQ29uc3RhbnRzLlJBVEVfQ1VSUkVOQ1lfTk9UX0ZPVU5EO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gRXJyb3JDb25zdGFudHMuUkFURV9DVVJSRU5DWV9OT1RfRk9VTkQ7XG4gICAgfVxuICB9XG5cbiAgX2dldEN1cnJlbmNpZXNXaXRoRXhjaGFuZ2VSYXRlcygpIHtcbiAgICBjb25zdCBjcyA9IG5ldyBTZXQoKTtcbiAgICBpZiAodGhpcy5fY3VycmVuY3lSYXRlcykge1xuICAgICAgdGhpcy5fY3VycmVuY3lSYXRlcy5mb3JFYWNoKGV4Y2hhbmdlUmF0ZXMgPT4ge1xuICAgICAgICBjcy5hZGQoZXhjaGFuZ2VSYXRlc1tDb25zdGFudHMuQ1VSUkVOQ1lfUEFJUl0uZnJvbSk7XG4gICAgICAgIGNzLmFkZChleGNoYW5nZVJhdGVzW0NvbnN0YW50cy5DVVJSRU5DWV9QQUlSXS50byk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIGNzO1xuICB9XG59XG4iLCJpbXBvcnQgKiBhcyBGUEMgZnJvbSAnLi4vLi4vdXRpbHMvRmllbGRQYXRoQ29uc3RhbnRzJztcbmltcG9ydCBGaWVsZHNNYW5hZ2VyIGZyb20gJy4vRmllbGRzTWFuYWdlcic7XG5pbXBvcnQgQ29uc3RhbnRzIGZyb20gJy4uLy4uL3V0aWxzL0NvbnN0YW50cyc7XG5pbXBvcnQgQWN0aXZpdHlDb25zdGFudHMgZnJvbSAnLi4vdXRpbC9BY3Rpdml0eUNvbnN0YW50cyc7XG5pbXBvcnQgQ3VycmVuY3lSYXRlc01hbmFnZXIgZnJvbSAnLi4vdXRpbC9DdXJyZW5jeVJhdGVzTWFuYWdlcic7XG5cblxuLyoqXG4gKiBQb3NzaWJsZSBWYWx1ZXMgbWFuYWdlciB0aGF0IGFsbG93cyB0byBmaWxsIGluIGFkZGl0aW9uYWwgaW5mb3JtYXRpb24gYW5kIHRyYW5zZm9ybWF0aW9uc1xuICogQGF1dGhvciBOYWRlamRhIE1hbmRyZXNjdVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb3NzaWJsZVZhbHVlc01hbmFnZXIge1xuICBzdGF0aWMgX2xhbmdTdGF0ZSA9IHtcbiAgICBsYW5nOiBDb25zdGFudHMuTEFOR1VBR0VfRU5HTElTSCxcbiAgICBkZWZhdWx0TGFuZzogQ29uc3RhbnRzLkxBTkdVQUdFX0VOR0xJU0hcbiAgfTtcblxuICBzdGF0aWMgX2xvZ2dlcjtcblxuICBzdGF0aWMgc2V0TGFuZ1N0YXRlKGxhbmdTdGF0ZSkge1xuICAgIFBvc3NpYmxlVmFsdWVzTWFuYWdlci5fbGFuZ1N0YXRlID0gbGFuZ1N0YXRlO1xuICB9XG5cbiAgc3RhdGljIHNldExvZ2dlcihMb2dnZXIpIHtcbiAgICBQb3NzaWJsZVZhbHVlc01hbmFnZXIuX2xvZ2dlciA9IG5ldyBMb2dnZXIoJ1Bvc3NpYmxlIHZhbHVlcyBtYW5hZ2VyJyk7XG4gIH1cbiAgc3RhdGljIGJ1aWxkRm9ybWF0dGVkSGllcmFyY2hpY2FsVmFsdWVzKG9wdGlvbnMpIHtcbiAgICAvLyBUT0RPIG9wdGltaXplXG4gICAgY29uc3QgaE9wdGlvbnMgPSB7fTtcbiAgICBPYmplY3QudmFsdWVzKG9wdGlvbnMpLmZvckVhY2gob3B0aW9uID0+IHtcbiAgICAgIGhPcHRpb25zW29wdGlvbi5pZF0gPSBQb3NzaWJsZVZhbHVlc01hbmFnZXIuYnVpbGRIaWVyYXJjaGljYWxEYXRhKG9wdGlvbnMsIG9wdGlvbi5pZCk7XG4gICAgfSk7XG4gICAgcmV0dXJuIGhPcHRpb25zO1xuICB9XG5cbiAgc3RhdGljIGJ1aWxkSGllcmFyY2hpY2FsRGF0YShvcHRpb25zLCBzZWxlY3RlZElkKSB7XG4gICAgY29uc3Qgb3B0aW9uID0gT2JqZWN0LmFzc2lnbih7fSwgb3B0aW9uc1tzZWxlY3RlZElkXSk7XG4gICAgY29uc3QgdmFsdWVQYXJ0cyA9IFBvc3NpYmxlVmFsdWVzTWFuYWdlci5nZXRIaWVyYXJjaGljYWxWYWx1ZShvcHRpb25zLCBzZWxlY3RlZElkKTtcbiAgICBvcHRpb25bQWN0aXZpdHlDb25zdGFudHMuSElFUkFSQ0hJQ0FMX1ZBTFVFXSA9IFBvc3NpYmxlVmFsdWVzTWFuYWdlci5mb3JtYXRWYWx1ZVBhcnRzKHZhbHVlUGFydHMpO1xuICAgIG9wdGlvbltBY3Rpdml0eUNvbnN0YW50cy5ISUVSQVJDSElDQUxfVkFMVUVfREVQVEhdID0gKHZhbHVlUGFydHMgJiYgdmFsdWVQYXJ0cyBpbnN0YW5jZW9mIEFycmF5KSA/XG4gICAgICB2YWx1ZVBhcnRzLmxlbmd0aCA6IDA7XG4gICAgcmV0dXJuIG9wdGlvbjtcbiAgfVxuXG4gIHN0YXRpYyBnZXRIaWVyYXJjaGljYWxWYWx1ZShvcHRpb25zLCBzZWxlY3RlZElkKSB7XG4gICAgY29uc3QgbmFtZVBhcnRzID0gW107XG4gICAgbGV0IGN1cnJlbnQgPSBvcHRpb25zW3NlbGVjdGVkSWRdO1xuICAgIHdoaWxlIChjdXJyZW50KSB7XG4gICAgICBuYW1lUGFydHMucHVzaChQb3NzaWJsZVZhbHVlc01hbmFnZXIuZ2V0T3B0aW9uVHJhbnNsYXRpb24oY3VycmVudCkpO1xuICAgICAgY3VycmVudCA9IG9wdGlvbnNbY3VycmVudC5wYXJlbnRJZF07XG4gICAgfVxuICAgIHJldHVybiBuYW1lUGFydHM7XG4gIH1cblxuICBzdGF0aWMgZm9ybWF0VmFsdWVQYXJ0cyh2YWx1ZVBhcnRzKSB7XG4gICAgcmV0dXJuICh2YWx1ZVBhcnRzICYmIHZhbHVlUGFydHMgaW5zdGFuY2VvZiBBcnJheSkgPyBgWyR7dmFsdWVQYXJ0cy5yZXZlcnNlKCkuam9pbignXVsnKX1dYCA6IHZhbHVlUGFydHM7XG4gIH1cblxuICAvKipcbiAgICogRmlsbHMgaGllcmFyY2hpY2FsIGRlcHRoIG9mIGVhY2ggb3B0aW9uXG4gICAqIEBwYXJhbSBvcHRpb25zXG4gICAqL1xuICBzdGF0aWMgZmlsbEhpZXJhcmNoaWNhbERlcHRoKG9wdGlvbnMpIHtcbiAgICBPYmplY3QudmFsdWVzKG9wdGlvbnMpLmZvckVhY2gob3B0aW9uID0+IHtcbiAgICAgIFBvc3NpYmxlVmFsdWVzTWFuYWdlci5fZmlsbEhpZXJhcmNoaWNhbERlcHRoKG9wdGlvbnMsIG9wdGlvbik7XG4gICAgfSk7XG4gICAgcmV0dXJuIG9wdGlvbnM7XG4gIH1cblxuICBzdGF0aWMgX2ZpbGxIaWVyYXJjaGljYWxEZXB0aChvcHRpb25zLCBvcHRpb24pIHtcbiAgICBpZiAoIW9wdGlvbikge1xuICAgICAgUG9zc2libGVWYWx1ZXNNYW5hZ2VyLl9sb2dnZXIuZXJyb3IoYG9wdGlvbiBpcyB1bnNwZWNpZmllZDogJHtvcHRpb259YCk7XG4gICAgICByZXR1cm4gMDtcbiAgICB9XG4gICAgbGV0IGRlcHRoID0gb3B0aW9uW0FjdGl2aXR5Q29uc3RhbnRzLkhJRVJBUkNISUNBTF9WQUxVRV9ERVBUSF07XG4gICAgaWYgKGRlcHRoID09PSB1bmRlZmluZWQpIHtcbiAgICAgIC8vIFNvIGZhciBpdCBpcyBiYXNlZCBvbiB0aGUgY3VycmVudCBsb2NhdGlvbnMgZXh0cmEgaW5mbyBhcHByb2FjaFxuICAgICAgaWYgKG9wdGlvbi5wYXJlbnRJZCkge1xuICAgICAgICBjb25zdCBwYXJlbnQgPSBvcHRpb25zW29wdGlvbi5wYXJlbnRJZF07XG4gICAgICAgIGRlcHRoID0gMSArIFBvc3NpYmxlVmFsdWVzTWFuYWdlci5fZmlsbEhpZXJhcmNoaWNhbERlcHRoKG9wdGlvbnMsIHBhcmVudCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkZXB0aCA9IDA7XG4gICAgICB9XG4gICAgICBvcHRpb25bQWN0aXZpdHlDb25zdGFudHMuSElFUkFSQ0hJQ0FMX1ZBTFVFX0RFUFRIXSA9IGRlcHRoO1xuICAgIH1cbiAgICByZXR1cm4gZGVwdGg7XG4gIH1cblxuICBzdGF0aWMgZmluZE9wdGlvbihvcHRpb25zLCBpZCkge1xuICAgIHJldHVybiBPYmplY3QudmFsdWVzKG9wdGlvbnMpLmZpbmQobyA9PiBvLmlkID09PSBpZCk7XG4gIH1cblxuICBzdGF0aWMgZmluZE9wdGlvbkJ5VmFsdWUob3B0aW9ucywgdmFsdWUpIHtcbiAgICByZXR1cm4gT2JqZWN0LnZhbHVlcyhvcHRpb25zKS5maW5kKG8gPT4gby52YWx1ZSA9PT0gdmFsdWUpO1xuICB9XG5cbiAgc3RhdGljIGdldE9wdGlvblRyYW5zbGF0aW9uKG9wdGlvbikge1xuICAgIGxldCByZXNWYWwgPSBvcHRpb24udmFsdWU7XG4gICAgY29uc3QgdHJhbnNsYXRpb25zID0gb3B0aW9uWyd0cmFuc2xhdGVkLXZhbHVlJ107XG4gICAgaWYgKHRyYW5zbGF0aW9ucyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBjb25zdCBsYW5nU3RhdGUgPSBQb3NzaWJsZVZhbHVlc01hbmFnZXIuX2xhbmdTdGF0ZTtcbiAgICAgIHJlc1ZhbCA9IHRyYW5zbGF0aW9uc1tsYW5nU3RhdGUubGFuZ10gfHwgdHJhbnNsYXRpb25zW2xhbmdTdGF0ZS5kZWZhdWx0TGFuZ10gfHwgcmVzVmFsO1xuICAgIH1cbiAgICByZXR1cm4gcmVzVmFsO1xuICB9XG5cbiAgc3RhdGljIHNldFZpc2liaWxpdHkob3B0aW9ucywgZmllbGRQYXRoLCBjdXJyZW5jeVJhdGVzTWFuYWdlcjogQ3VycmVuY3lSYXRlc01hbmFnZXIsIGZpbHRlcnMsIGlzT1JGaWx0ZXIgPSBmYWxzZSxcbiAgICBzZWxlY3RlZElkKSB7XG4gICAgY29uc3QgaXNMb2NhdGlvbnMgPSBGUEMuTE9DQVRJT05fUEFUSCA9PT0gZmllbGRQYXRoO1xuICAgIGNvbnN0IGlzQ3VycmVuY3kgPSBGUEMuUEFUSFNfRk9SX0NVUlJFTkNZLmhhcyhmaWVsZFBhdGgpO1xuICAgIG9wdGlvbnMgPSB7IC4uLm9wdGlvbnMgfTtcbiAgICBPYmplY3QudmFsdWVzKG9wdGlvbnMpLmZvckVhY2gob3B0aW9uID0+IHtcbiAgICAgIG9wdGlvbi52aXNpYmxlID0gIWlzT1JGaWx0ZXI7XG4gICAgICBpZiAoaXNMb2NhdGlvbnMpIHtcbiAgICAgICAgb3B0aW9uLmRpc3BsYXlIaWVyYXJjaGljYWxWYWx1ZSA9IHRydWU7XG4gICAgICB9IGVsc2UgaWYgKGlzQ3VycmVuY3kpIHtcbiAgICAgICAgb3B0aW9uW0ZQQy5GSUVMRF9PUFRJT05fVVNBQkxFXSA9IFBvc3NpYmxlVmFsdWVzTWFuYWdlci5pc0N1cnJlbmN5T3B0aW9uVXNhYmxlKG9wdGlvbiwgY3VycmVuY3lSYXRlc01hbmFnZXIpO1xuICAgICAgICBpZiAoIW9wdGlvbltGUEMuRklFTERfT1BUSU9OX1VTQUJMRV0pIHtcbiAgICAgICAgICBvcHRpb24udmlzaWJsZSA9IG9wdGlvbi5pZCA9PT0gc2VsZWN0ZWRJZDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICAgIGlmIChmaWx0ZXJzKSB7XG4gICAgICBmaWx0ZXJzLmZvckVhY2goZmlsdGVyID0+IHtcbiAgICAgICAgY29uc3QgZmlsdGVyQnkgPSBmaWx0ZXIudmFsdWU7XG4gICAgICAgIE9iamVjdC52YWx1ZXMob3B0aW9ucykuZm9yRWFjaChvcHRpb24gPT4ge1xuICAgICAgICAgIGNvbnN0IG9wdGlvbkRhdGFUb0NoZWNrID0gRmllbGRzTWFuYWdlci5nZXRWYWx1ZShvcHRpb24sIGZpbHRlci5wYXRoKTtcbiAgICAgICAgICBpZiAoKGlzT1JGaWx0ZXIgfHwgb3B0aW9uLnZpc2libGUpICYmIG9wdGlvbkRhdGFUb0NoZWNrICYmIChcbiAgICAgICAgICAgIChvcHRpb25EYXRhVG9DaGVjayBpbnN0YW5jZW9mIEFycmF5ICYmIG9wdGlvbkRhdGFUb0NoZWNrLmluY2x1ZGVzKGZpbHRlckJ5KSkgfHxcbiAgICAgICAgICAgIChvcHRpb25EYXRhVG9DaGVjayA9PT0gZmlsdGVyQnkpKSkge1xuICAgICAgICAgICAgb3B0aW9uLnZpc2libGUgPSB0cnVlO1xuICAgICAgICAgIH0gZWxzZSBpZiAoaXNPUkZpbHRlcikge1xuICAgICAgICAgICAgLy8gRG8gbm90aGluZywga2VlcCBpdCB2aXNpYmxlL2ludmlzaWJsZS5cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgb3B0aW9uLnZpc2libGUgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBvcHRpb25zO1xuICB9XG5cbiAgc3RhdGljIGlzQ3VycmVuY3lPcHRpb25Vc2FibGUob3B0aW9uLCBjdXJyZW5jeVJhdGVzTWFuYWdlcjogQ3VycmVuY3lSYXRlc01hbmFnZXIpIHtcbiAgICBjb25zdCBoYXNFeGNoYW5nZVJhdGVzID0gY3VycmVuY3lSYXRlc01hbmFnZXIuY3VycmVuY2llc1dpdGhFeGNoYW5nZVJhdGVzLmhhcyhvcHRpb24udmFsdWUpO1xuICAgIGNvbnN0IGlzQWN0aXZlID0gb3B0aW9uLmV4dHJhX2luZm8gJiYgb3B0aW9uLmV4dHJhX2luZm8uYWN0aXZlO1xuICAgIHJldHVybiBpc0FjdGl2ZSAmJiBoYXNFeGNoYW5nZVJhdGVzO1xuICB9XG5cbiAgc3RhdGljIGdldFRyZWVTb3J0ZWRPcHRpb25zTGlzdChvcHRpb25zT2JqLCByZXZlcnNlU29ydE9wdGlvbnMpIHtcbiAgICBjb25zdCBhZGRlZCA9IG5ldyBTZXQoKTtcbiAgICBjb25zdCBvcHRpb25zTGlzdCA9IFtdO1xuICAgIGNvbnN0IGlkc1N0YWNrID0gT2JqZWN0LnZhbHVlcyhvcHRpb25zT2JqKS5maWx0ZXIobyA9PiAhby5wYXJlbnRJZCkuc29ydChyZXZlcnNlU29ydE9wdGlvbnMpXG4gICAgICAubWFwKG8gPT4gby5pZCk7XG4gICAgd2hpbGUgKGlkc1N0YWNrLmxlbmd0aCkge1xuICAgICAgY29uc3QgaWQgPSBpZHNTdGFjay5wb3AoKTtcbiAgICAgIGlmICghYWRkZWQuaGFzKGlkKSkge1xuICAgICAgICBjb25zdCBvcHRpb24gPSBvcHRpb25zT2JqW2lkXTtcbiAgICAgICAgaWYgKG9wdGlvbi5yZXZlcnNlU29ydGVkQ2hpbGRyZW4pIHtcbiAgICAgICAgICBpZHNTdGFjay5wdXNoKC4uLm9wdGlvbi5yZXZlcnNlU29ydGVkQ2hpbGRyZW4pO1xuICAgICAgICB9XG4gICAgICAgIGFkZGVkLmFkZChpZCk7XG4gICAgICAgIG9wdGlvbnNMaXN0LnB1c2gob3B0aW9uKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG9wdGlvbnNMaXN0O1xuICB9XG59XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBjbGFzcy1tZXRob2RzLXVzZS10aGlzICovXG5jb25zdCBGRUFUVVJFX01BTkFHRVIgPSAnRmVhdHVyZSBtYW5hZ2VyJztcblxuLyoqXG4gKiBGZWF0dXJlIE1hbmFnZXJcbiAqIEBhdXRob3IgTmFkZWpkYSBNYW5kcmVzY3VcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmVhdHVyZU1hbmFnZXIge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgc3RhdGljIF9jdXJyZW50Rk0gPSBuZXcgRmVhdHVyZU1hbmFnZXIoKTtcblxuICBjb25zdHJ1Y3RvcihmbVRyZWUsIExvZ2dlck1hbmFnZXIpIHtcbiAgICB0aGlzLl9mbVRyZWUgPSBmbVRyZWU7XG4gICAgaWYgKExvZ2dlck1hbmFnZXIpIHtcbiAgICAgIHRoaXMubG9nZ2VyTWFuYWdlciA9IExvZ2dlck1hbmFnZXI7XG4gICAgfVxuICB9XG4gIHNldCBmbVRyZWUoZm1UcmVlKSB7XG4gICAgdGhpcy5fZm1UcmVlID0gZm1UcmVlO1xuICB9XG4gIHNldCBsb2dnZXJNYW5hZ2VyKExvZ2dlck1hbmFnZXIpIHtcbiAgICB0aGlzLl9sb2dnZXJNYW5hZ2VyID0gbmV3IExvZ2dlck1hbmFnZXIoRkVBVFVSRV9NQU5BR0VSKTtcbiAgfVxuXG4gIHN0YXRpYyBzZXRMb2dnZXJNYW5hZ2VyKExvZ2dlck1hbmFnZXIpIHtcbiAgICBGZWF0dXJlTWFuYWdlci5fY3VycmVudEZNLmxvZ2dlck1hbmFnZXIgPSBMb2dnZXJNYW5hZ2VyO1xuICB9XG4gIHN0YXRpYyBzZXRGTVRyZWUoZm1UcmVlKSB7XG4gICAgRmVhdHVyZU1hbmFnZXIuX2N1cnJlbnRGTS5mbVRyZWUgPSBmbVRyZWU7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2tzIGlmIHRoZSBnaXZlbiBGTSBwYXRoIGlzIGZ1bGx5IGVuYWJsZWQgb3Igb25seSBsYXN0IHNlZ21lbnQgaXMgZW5hYmxlZFxuICAgKiBAcGFyYW0gZm1QYXRoIHRoZSBGTSBwYXRoLCBlLmcuICcvUFJPSkVDVCBNQU5BR0VNRU5UL0Z1bmRpbmcvRnVuZGluZyBJbmZvcm1hdGlvbi9EZWxpdmVyeSByYXRlJ1xuICAgKiBAcGFyYW0gb25seUxhc3RTZWdtZW50IHNwZWNpZmllcyBpZiB0byBjaGVjayBpZiBvbmx5IHRoZSBsYXN0IHNlZ21lbnQgaXMgZW5hYmxlZCAodGhlIEFNUCBiZWhhdmlvciBmb3Igc29tZSBjYXNlcylcbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICovXG4gIHN0YXRpYyBpc0ZNU2V0dGluZ0VuYWJsZWQoZm1QYXRoLCBvbmx5TGFzdFNlZ21lbnQpIHtcbiAgICByZXR1cm4gRmVhdHVyZU1hbmFnZXIuX2N1cnJlbnRGTS5pc0ZNU2V0dGluZ0VuYWJsZWQoZm1QYXRoLCBvbmx5TGFzdFNlZ21lbnQpO1xuICB9XG5cbiAgc3RhdGljIGhhc0ZNU2V0dGluZyhmbVBhdGgpIHtcbiAgICByZXR1cm4gRmVhdHVyZU1hbmFnZXIuX2N1cnJlbnRGTS5oYXNGTVNldHRpbmcoZm1QYXRoKTtcbiAgfVxuXG4gIGlzRk1TZXR0aW5nRW5hYmxlZChmbVBhdGgsIG9ubHlMYXN0U2VnbWVudCkge1xuICAgIHRoaXMuX2xvZ2dlck1hbmFnZXIuZGVidWcoJ2lzRk1TZXR0aW5nRW5hYmxlZCcpO1xuICAgIGlmICh0aGlzLl9mbVRyZWUpIHtcbiAgICAgIGxldCBsYXN0Rk1TdWJUcmVlID0gdGhpcy5fZm1UcmVlO1xuICAgICAgY29uc3Qgc2VnbWVudHMgPSB0aGlzLl9nZXRQYXRoU2VnbWVudHMoZm1QYXRoKTtcbiAgICAgIGNvbnN0IGZvdW5kTGFzdEZNU3ViVHJlZSA9IHNlZ21lbnRzLmV2ZXJ5KHNlZ21lbnQgPT4ge1xuICAgICAgICBsYXN0Rk1TdWJUcmVlID0gbGFzdEZNU3ViVHJlZVtzZWdtZW50XTtcbiAgICAgICAgcmV0dXJuIGxhc3RGTVN1YlRyZWUgIT09IHVuZGVmaW5lZCAmJiAobGFzdEZNU3ViVHJlZS5fX2VuYWJsZWQgfHwgb25seUxhc3RTZWdtZW50KTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIGZvdW5kTGFzdEZNU3ViVHJlZSAmJiBsYXN0Rk1TdWJUcmVlLl9fZW5hYmxlZDtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaGFzRk1TZXR0aW5nKGZtUGF0aCkge1xuICAgIGNvbnN0IGZtU2V0dGluZyA9IHRoaXMuZmluZEZNU2V0dGluZyhmbVBhdGgpO1xuICAgIHJldHVybiBmbVNldHRpbmcgJiYgZm1TZXR0aW5nLl9fZW5hYmxlZCAhPT0gdW5kZWZpbmVkO1xuICB9XG5cbiAgZmluZEZNU2V0dGluZyhmbVBhdGgpIHtcbiAgICBjb25zdCBzZWdtZW50cyA9IHRoaXMuX2dldFBhdGhTZWdtZW50cyhmbVBhdGgpO1xuICAgIHJldHVybiBzZWdtZW50cy5yZWR1Y2UoKGN1cnJlbnRGTVNldHRpbmcsIHNlZ21lbnQpID0+IGN1cnJlbnRGTVNldHRpbmcgJiYgY3VycmVudEZNU2V0dGluZ1tzZWdtZW50XVxuICAgICAgLCB0aGlzLl9mbVRyZWUgfHwge30pO1xuICB9XG5cbiAgc2V0Rk1TZXR0aW5nKGZtUGF0aCwgZW5hYmxlZCkge1xuICAgIGlmICh0aGlzLl9mbVRyZWUpIHtcbiAgICAgIGNvbnN0IHNlZ21lbnRzID0gdGhpcy5fZ2V0UGF0aFNlZ21lbnRzKGZtUGF0aCk7XG4gICAgICBjb25zdCBsYXN0Rk1TdWJUcmVlID0gc2VnbWVudHMucmVkdWNlKChjdXJyZW50Rk1UcmVlLCBzZWdtZW50KSA9PiB7XG4gICAgICAgIGxldCBzZWdtZW50Rk0gPSBjdXJyZW50Rk1UcmVlW3NlZ21lbnRdO1xuICAgICAgICBpZiAoc2VnbWVudEZNID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBzZWdtZW50Rk0gPSB7fTtcbiAgICAgICAgICBjdXJyZW50Rk1UcmVlW3NlZ21lbnRdID0gc2VnbWVudEZNO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzZWdtZW50Rk07XG4gICAgICB9LCB0aGlzLl9mbVRyZWUpO1xuICAgICAgbGFzdEZNU3ViVHJlZS5fX2VuYWJsZWQgPSBlbmFibGVkO1xuICAgIH1cbiAgfVxuXG4gIF9nZXRQYXRoU2VnbWVudHMoZm1QYXRoKSB7XG4gICAgLy8gaWdub3JlIGZpcnN0IFwiL1wiIHRvIGV4Y2x1ZGUgZW1wdHkgc3RyaW5nIGZyb20gdGhlIHNwbGl0XG4gICAgcmV0dXJuIGZtUGF0aC5zdWJzdHJpbmcoMSkuc3BsaXQoJy8nKTtcbiAgfVxufVxuIiwiaW1wb3J0IFRlc3RBUEZpZWxkIGZyb20gJy4vYWN0aXZpdHlQcmV2aWV3L2NvbXBvbmVudHMvVGVzdEFQRmllbGQnO1xuaW1wb3J0IFRlc3RpbmdTZWN0aW9uIGZyb20gJy4vYWN0aXZpdHlQcmV2aWV3L2NvbXBvbmVudHMvVGVzdGluZ1NlY3Rpb24nO1xuaW1wb3J0IENvbnN0YW50cyBmcm9tICcuL3V0aWxzL0NvbnN0YW50cyc7XG5pbXBvcnQgQWN0aXZpdHlDb25zdGFudHMgZnJvbSAnLi9tb2R1bGVzL3V0aWwvQWN0aXZpdHlDb25zdGFudHMnO1xuaW1wb3J0IEZlYXR1cmVNYW5hZ2VyQ29uc3RhbnRzIGZyb20gJy4vbW9kdWxlcy91dGlsL0ZlYXR1cmVNYW5hZ2VyQ29uc3RhbnRzJztcbmltcG9ydCBFcnJvckNvbnN0YW50cyBmcm9tICcuL3V0aWxzL2NvbnN0YW50cy9FcnJvckNvbnN0YW50cyc7XG5pbXBvcnQgRmllbGRzTWFuYWdlciBmcm9tICcuL21vZHVsZXMvZmllbGQvRmllbGRzTWFuYWdlcic7XG5pbXBvcnQgRmllbGRQYXRoQ29uc3RhbnRzIGZyb20gJy4vdXRpbHMvRmllbGRQYXRoQ29uc3RhbnRzJztcbmltcG9ydCBWYWx1ZUNvbnN0YW50cyBmcm9tICcuL3V0aWxzL1ZhbHVlQ29uc3RhbnRzJztcbmltcG9ydCBDdXJyZW5jeVJhdGVzTWFuYWdlciBmcm9tICcuL21vZHVsZXMvdXRpbC9DdXJyZW5jeVJhdGVzTWFuYWdlcic7XG5pbXBvcnQgUG9zc2libGVWYWx1ZXNNYW5hZ2VyIGZyb20gJy4vbW9kdWxlcy9maWVsZC9Qb3NzaWJsZVZhbHVlc01hbmFnZXInO1xuaW1wb3J0IEZlYXR1cmVNYW5hZ2VyIGZyb20gJy4vbW9kdWxlcy91dGlsL0ZlYXR1cmVNYW5hZ2VyJztcblxuZXhwb3J0IHtcbiAgVGVzdEFQRmllbGQsIFRlc3RpbmdTZWN0aW9uLCBDb25zdGFudHMsIEFjdGl2aXR5Q29uc3RhbnRzLCBGZWF0dXJlTWFuYWdlckNvbnN0YW50cywgRXJyb3JDb25zdGFudHMsXG4gIEN1cnJlbmN5UmF0ZXNNYW5hZ2VyLCBGaWVsZHNNYW5hZ2VyLCBGaWVsZFBhdGhDb25zdGFudHMsIFZhbHVlQ29uc3RhbnRzLCBQb3NzaWJsZVZhbHVlc01hbmFnZXIsIEZlYXR1cmVNYW5hZ2VyXG59O1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIFRlc3RBUEZpZWxkLFxuICBUZXN0aW5nU2VjdGlvbixcbiAgQ29uc3RhbnRzLFxuICBBY3Rpdml0eUNvbnN0YW50cyxcbiAgRmVhdHVyZU1hbmFnZXJDb25zdGFudHMsXG4gIEVycm9yQ29uc3RhbnRzLFxuICBDdXJyZW5jeVJhdGVzTWFuYWdlcixcbiAgRmllbGRzTWFuYWdlcixcbiAgRmllbGRQYXRoQ29uc3RhbnRzLFxuICBWYWx1ZUNvbnN0YW50cyxcbiAgRmVhdHVyZU1hbmFnZXJcbn07XG4iXSwibmFtZXMiOlsiVGVzdEFQRmllbGQiLCJ0cm5MYWJlbCIsInZhbHVlIiwiaW5saW5lIiwic2VwYXJhdG9yIiwibmFtZUNsYXNzIiwidmFsdWVDbGFzcyIsIlJlYWN0IiwicHJvcHMiLCJ0cmFuc2xhdGUiLCJhbXBMb2dnZXIiLCJsb2ciLCJ1c2VTZXBhcmF0b3IiLCJkaXNwbGF5Q2xhc3MiLCJmaWVsZENsYXNzIiwic3R5bGVzIiwiYmxvY2siLCJjbGFzc05hbWVzIiwiZmllbGRWYWx1ZUNsYXNzIiwiZGlzcGxheVZhbHVlIiwiQXJyYXkiLCJpc0FycmF5IiwiT2JqZWN0IiwiZm9yRWFjaCIsInB1c2giLCJ2Iiwic29ydCIsImpvaW4iLCJTdHJpbmciLCJ1c2VJbm5lckhUTUwiLCJfX2h0bWwiLCJmaWVsZE5hbWVDbGFzcyIsInRpdGxlIiwiX2dldFZhbHVlIiwiQ29tcG9uZW50IiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwiYW55IiwiYm9vbCIsIm9iamVjdCIsImlzUmVxdWlyZWQiLCJmdW5jIiwiVGVzdGluZ1NlY3Rpb24iLCJCQVNFX1JFU1RfVVJMIiwiQ09OTkVDVElPTl9USU1FT1VUIiwiQ09OTkVDVElPTl9GT1JDRURfVElNRU9VVCIsIlRJTUVPVVRfQ0hFQ0tfSU5URVJWQUwiLCJNQVhfUkVUUllfQVRFTVBUUyIsIkVSUk9SU19UT19SRVRSWSIsIkVSUk9SU19OT19BTVBfU0VSVkVSIiwiQ09OTkVDVElWSVRZX0NIRUNLX0lOVEVSVkFMIiwiV09SS1NQQUNFX1VSTCIsIkxPR0lOX1VSTCIsIkRFU0tUT1BfVVJMIiwiREVTS1RPUF9DVVJSRU5UX1VSTCIsIlNZTkNVUF9SRURJUkVDVF9VUkwiLCJTWU5DVVBfSElTVE9SWV9UQVJHRVQiLCJTWU5DVVBfU1VNTUFSWV9VUkwiLCJBQ1RJVklUWV9QUkVWSUVXX1VSTCIsIkFDVElWSVRZX0VESVRfVVJMIiwiVVBEQVRFX1VSTCIsIlNFVFVQX1VSTCIsIlNFVFRJTkdTX1VSTCIsIkNPTExFQ1RJT05fVVNFUlMiLCJDT0xMRUNUSU9OX1dPUktQQUNFUyIsIkNPTExFQ1RJT05fVEVBTU1FTUJFUlMiLCJDT0xMRUNUSU9OX0NMSUVOVF9TRVRUSU5HUyIsIkNPTExFQ1RJT05fR0xPQkFMX1NFVFRJTkdTIiwiQ09MTEVDVElPTl9BQ1RJVklUSUVTIiwiQ09MTEVDVElPTl9GSUVMRFMiLCJDT0xMRUNUSU9OX1BPU1NJQkxFX1ZBTFVFUyIsIkNPTExFQ1RJT05fU1lOQ1VQX0xPRyIsIkNPTExFQ1RJT05fTEFOR1MiLCJDT0xMRUNUSU9OX1dTX1NFVFRJTkdTIiwiQ09MTEVDVElPTl9DVVJSRU5DWV9SQVRFUyIsIkNPTExFQ1RJT05fRkVBVFVSRV9NQU5BR0VSIiwiQ09MTEVDVElPTl9DT05UQUNUUyIsIkNPTExFQ1RJT05fUkVTT1VSQ0VTIiwiQ09MTEVDVElPTl9SRVBPU0lUT1JZIiwiQ09MTEVDVElPTl9HQVpFVFRFRVIiLCJDT0xMRUNUSU9OX0NBTEVOREFSUyIsIkNPTExFQ1RJT05fQ0hBTkdFU0VUUyIsIkdBWkVUVEVFUl9ESVNUQU5DRV9ESVZJREUiLCJEQl9GSUxFX1BSRUZJWCIsIkRCX0ZJTEVfRVhURU5TSU9OIiwiREJfQ09NTU9OX0RBVEFTVE9SRV9PUFRJT05TIiwiYXV0b2xvYWQiLCJjb3JydXB0QWxlcnRUaHJlc2hvbGQiLCJEQl9BVVRPQ09NUEFDVF9JTlRFUlZBTF9NSUxJU0VDT05EUyIsIkRCX0RFRkFVTFRfUVVFUllfTElNSVQiLCJMQU5HVUFHRV9FTkdMSVNIIiwiRlNfTE9DQUxFU19ESVJFQ1RPUlkiLCJMQU5HVUFHRV9NQVNURVJfVFJBTlNMQVRJT05TX0ZJTEUiLCJMQU5HVUFHRV9UUkFOU0xBVElPTlNfRklMRSIsIkxBTkdVQUdFX05FV19UUkFOU0xBVElPTlNfTVVTVF9TWU5DIiwiQVNBUl9ESVIiLCJBUFBfRElSRUNUT1JZIiwiVEVTVF9ESVJFQ1RPUlkiLCJTVEFUSUNfRElSIiwiSU1BR0VTX0RJUiIsIkRPQ19JQ09OUyIsIkRCX1NUQVRJQ19ESVIiLCJNSUdSQVRJT05TX0RJUiIsIkhBU0hfSVRFUkFUSU9OUyIsIkRJR0VTVF9BTEdPUklUSE1fU0hBMSIsIkRJR0VTVF9BTEdPUklUSE1fU0hBMjU2IiwiQUNUSVZJVFlfRURJVCIsIkFDVElWSVRZX1ZJRVciLCJTWU5DVVBfRk9SQ0VfREFZUyIsIlNZTkNVUF9CRVNUX0JFRk9SRV9EQVlTIiwiU1lOQ1VQX05PX0RBVEUiLCJTWU5DVVBfVFlQRV9UUkFOU0xBVElPTlMiLCJTWU5DVVBfVFlQRV9VU0VSUyIsIlNZTkNVUF9UWVBFX0FTU0VUUyIsIlNZTkNVUF9UWVBFX1dPUktTUEFDRVMiLCJTWU5DVVBfVFlQRV9HUyIsIlNZTkNVUF9UWVBFX0VYQ0hBTkdFX1JBVEVTIiwiU1lOQ1VQX1RZUEVfRkVBVFVSRV9NQU5BR0VSIiwiU1lOQ1VQX1RZUEVfV09SS1NQQUNFX01FTUJFUlMiLCJTWU5DVVBfVFlQRV9BTExfRklFTERTIiwiU1lOQ1VQX1RZUEVfQUNUSVZJVElFU19QVUxMIiwiU1lOQ1VQX1RZUEVfQUNUSVZJVElFU19QVVNIIiwiU1lOQ1VQX1RZUEVfQUNUSVZJVFlfRklFTERTIiwiU1lOQ1VQX1RZUEVfQUNUSVZJVFlfRklFTERTX1NUUlVDVFVSQUxfQ0hBTkdFUyIsIlNZTkNVUF9UWVBFX0NPTlRBQ1RTX1BVTEwiLCJTWU5DVVBfVFlQRV9DT05UQUNUU19QVVNIIiwiU1lOQ1VQX1RZUEVfQUNUSVZJVFlfUE9TU0lCTEVfVkFMVUVTIiwiU1lOQ1VQX1RZUEVfQ09OVEFDVF9GSUVMRFMiLCJTWU5DVVBfVFlQRV9DT05UQUNUX0ZJRUxEU19TVFJVQ1RVUkFMX0NIQU5HRVMiLCJTWU5DVVBfVFlQRV9DT05UQUNUX1BPU1NJQkxFX1ZBTFVFUyIsIlNZTkNVUF9UWVBFX1JFU09VUkNFU19QVUxMIiwiU1lOQ1VQX1RZUEVfUkVTT1VSQ0VTX1BVU0giLCJTWU5DVVBfVFlQRV9SRVNPVVJDRV9GSUVMRFMiLCJTWU5DVVBfVFlQRV9SRVNPVVJDRV9GSUVMRFNfU1RSVUNUVVJBTF9DSEFOR0VTIiwiU1lOQ1VQX1RZUEVfUkVTT1VSQ0VfUE9TU0lCTEVfVkFMVUVTIiwiU1lOQ1VQX1RZUEVfQ09NTU9OX1BPU1NJQkxFX1ZBTFVFUyIsIlNZTkNVUF9UWVBFX1dPUktTUEFDRV9TRVRUSU5HUyIsIlNZTkNVUF9UWVBFX01BUF9USUxFUyIsIlNZTkNVUF9UWVBFX0dBWkVUVEVFUiIsIlNZTkNVUF9UWVBFX0NBTEVOREFSUyIsIlNZTkNVUF9TVEFUVVNfU1VDQ0VTUyIsIlNZTkNVUF9TVEFUVVNfRkFJTCIsIlNZTkNVUF9TVEFUVVNfUEFSVElBTCIsIlNZTkNVUF9TVEFUVVNfQ0FOQ0VMRUQiLCJTWU5DVVBfU1lOQ19SRVFVRVNURURfQVQiLCJTWU5DVVBfU1lOQ19SRVFVRVNURURfQlkiLCJTWU5DVVBfREFURVRJTUVfRklFTEQiLCJTWU5DVVBfRElGRl9MRUZUT1ZFUiIsIlNZTkNVUF9ERVBFTkRFTkNZX0NIRUNLX0lOVEVSVkFMIiwiU1lOQ1VQX0RFVEFJTFNfU1lOQ0VEIiwiU1lOQ1VQX0RFVEFJTFNfVU5TWU5DRUQiLCJTWU5DVVBfUkVTT1VSQ0VfUFVMTF9CQVRDSF9TSVpFIiwiU1lOQ1VQX0FDVElWSVRJRVNfUFVMTF9CQVRDSF9TSVpFIiwiU1lOQ1VQX0NPTlRBQ1RTX1BVTExfQkFUQ0hfU0laRSIsIkFDVElWSVRZX1NUQVRVU19EUkFGVCIsIkFDVElWSVRZX1NUQVRVU19VTlZBTElEQVRFRCIsIkFDVElWSVRZX1NUQVRVU19WQUxJREFURUQiLCJDVVJSRU5DWV9IT1VSIiwiREVGQVVMVF9DVVJSRU5DWSIsIlJBVEVfU0FNRV9DVVJSRU5DWSIsIlJBVEVfQ1VSUkVOQ1lfTk9UX0ZPVU5EIiwiQ1VSUkVOQ1lfUEFJUiIsIlZFUlNJT05fUEFUVEVSTiIsIlZFUlNJT05fUEFUVEVSTl9HUk9VUFNfVE9fRVhUUkFDVCIsIkFNUF9DT1VOVFJZX0xPR08iLCJBU1NFVFNfRElSRUNUT1JZIiwiQkFTRV82NF9QTkdfUFJFRklYIiwiVFJBTlNQQVJFTlRfRkxBRyIsIkhFTFBfUERGX0ZJTEVOQU1FIiwiSEVMUF9ESVIiLCJFTkRTX1dJVEhfUFVOQ1RVQVRJT05fUkVHRVgiLCJNQVBfVElMRVNfRElSIiwiVElMRVNfWklQX0ZJTEUiLCJNQVBfTUFSS0VSX0lNQUdFIiwiTUFQX01BUktFUl9TSEFET1ciLCJNQVBfTUFSS0VSX0NJUkNMRV9SRUQiLCJNQVBfTUFSS0VSX0NJUkNMRV9HUkVFTiIsIlBPTFlHT05fQkFTRV9DT0xPUiIsIkRHX0NPTVBBTllfTkFNRSIsIkRHX0FERFJFU1NfMSIsIkRHX0FERFJFU1NfMiIsIkRHX0NPTlRBQ1RfSU5GTyIsIkxPR19ESVIiLCJMT0dfRklMRV9OQU1FIiwiTE9HX0ZJTEVfRVhURU5TSU9OIiwiTUVTU0FHRV9USU1FT1VUIiwiTUVTU0FHRV9ESVNBUFBFQVJfVElNRU9VVCIsIk1FU1NBR0VfQ0hFQ0tfSU5URVJWQUwiLCJNRVNTQUdFX0FOSU1BVElPTl9EVVJBVElPTiIsIklOVEVSTkFMX0RBVEVfRk9STUFUIiwiTUlOX1NVUFBPUlRFRF9ZRUFSIiwiTUFYX1NVUFBPUlRFRF9ZRUFSIiwiVVBEQVRFU19ESVIiLCJDT05URU5UX0RJU1BPU0lUSU9OX0hFQURFUiIsIlVQREFURV9UTVBfRklMRSIsIk9USEVSX0lEIiwiTlJfU1lOQ19ISVNUT1JZX0VOVFJJRVMiLCJOUl9MT0dfRklMRVMiLCJPTERfU1lOQ19MT0dTX0RVUkFUSU9OX0lTT184NjAxIiwiTlJfT0xEX1NZTkNfTE9HU19UT19LRUVQX01JTklNVU0iLCJNQVNURVJfQlJBTkNIIiwiREVWRUxPUF9CUkFOQ0giLCJSRUxFQVNFX0JSQU5DSF9SRUdFWCIsIlJFTEVBU0VfQlJBTkNIRVMiLCJESVNBQkxFX0NIQU5HRUxPR1MiLCJtb2R1bGUiLCJmcmVlemUiLCJQVUJMSUNfVklFV19DSEFOR0VfUEFTU1dPUkQiLCJQVUJMSUNfVklFV19UUk9VQkxFX1NJR05fSU4iLCJBQ1RJVklUWV9ERUxJVkVSWV9SQVRFIiwiQUNUSVZJVFlfUFJPSkVDVF9JRF9BTkRfUExBTk5JTkciLCJBQ1RJVklUWV9EVVJBVElPTl9PRl9QUk9KRUNUIiwiQUNUSVZJVFlfVEVBTV9MRUFERVIiLCJBQ1RJVklUWV9TQU1FX0FTX1BST1BPU0VEX1NUQVJUX0RBVEUiLCJBQ1RJVklUWV9TQU1FX0FTX1BST1BPU0VEX0FQUFJPVkFMX0RBVEUiLCJBQ1RJVklUWV9JREVOVElGSUNBVElPTiIsIkFDVElWSVRZX0xBU1RfVVBEQVRFRF9CWSIsIkFDVElWSVRZX0xBU1RfVVBEQVRFRF9PTiIsIkFDVElWSVRZX0ZVTkRJTkciLCJBRl9GVU5ESU5HX0ZVTkRJTkdHUk9VUF9GVU5ESU5HSVRFTSIsIkFDVElWSVRZX1NFQ1RPUlMiLCJBQ1RJVklUWV9QUklNQVJZX1NFQ1RPUlMiLCJBQ1RJVklUWV9TRUNPTkRBUllfU0VDVE9SUyIsIkFDVElWSVRZX1NUUlVDVFVSRVMiLCJBQ1RJVklUWV9TVFJVQ1RVUkVTX0FERF9TVFJVQ1RVUkUiLCJBQ1RJVklUWV9PUkdBTklaQVRJT05TIiwiQUNUSVZJVFlfT1JHQU5JWkFUSU9OU19ET05PUl9PUkdBTklaQVRJT04iLCJBQ1RJVklUWV9PUkdBTklaQVRJT05TX0JFTkVGSUNJQVJZX0FHRU5DWSIsIkFDVElWSVRZX09SR0FOSVpBVElPTlNfQ09OVFJBQ1RJTkdfQUdFTkNZIiwiQUNUSVZJVFlfT1JHQU5JWkFUSU9OU19FWEVDVVRJTkdfQUdFTkNZIiwiQUNUSVZJVFlfT1JHQU5JWkFUSU9OU19JTVBMRU1FTlRJTkdfQUdFTkNZIiwiQUNUSVZJVFlfT1JHQU5JWkFUSU9OU19SRUdJT05BTF9HUk9VUCIsIkFDVElWSVRZX09SR0FOSVpBVElPTlNfUkVMQVRFRF9HT1ZFUk5NRU5UX09SR0FOSVpBVElPTiIsIkFDVElWSVRZX09SR0FOSVpBVElPTlNfU0VDVE9SX0dST1VQIiwiQUREX0ZVTkRJTkdfQVVUTyIsIkFDVElWSVRZX09SR0FOSVpBVElPTlNfQkVORUZJQ0lBUllfQUdFTkNZX0FERF9GVU5ESU5HX0FVVE8iLCJBQ1RJVklUWV9PUkdBTklaQVRJT05TX0NPTlRSQUNUSU5HX0FHRU5DWV9BRERfRlVORElOR19BVVRPIiwiQUNUSVZJVFlfT1JHQU5JWkFUSU9OU19ET05PUl9PUkdBTklaQVRJT05fQUREX0ZVTkRJTkdfQVVUTyIsIkFDVElWSVRZX09SR0FOSVpBVElPTlNfRVhFQ1VUSU5HX0FHRU5DWV9BRERfRlVORElOR19BVVRPIiwiQUNUSVZJVFlfT1JHQU5JWkFUSU9OU19JTVBMRU1FTlRJTkdfQUdFTkNZX0FERF9GVU5ESU5HX0FVVE8iLCJBQ1RJVklUWV9PUkdBTklaQVRJT05TX1JFR0lPTkFMX0dST1VQX0FERF9GVU5ESU5HX0FVVE8iLCJBQ1RJVklUWV9PUkdBTklaQVRJT05TX1JFU1BPTlNJQkxFX09SR0FOSVpBVElPTl9BRERfRlVORElOR19BVVRPIiwiQUNUSVZJVFlfT1JHQU5JWkFUSU9OU19TRUNUT1JfR1JPVVBfQUREX0ZVTkRJTkdfQVVUTyIsIkFDVElWSVRZX0ZVTkRJTkdfU0VBUkNIIiwiQUNUSVZJVFlfRlVORElOR19TRUFSQ0hfT1JHQU5JWkFUSU9OIiwiQUNUSVZJVFlfRlVORElOR19TRUxFQ1RfT1JHX1RZUEUiLCJBQ1RJVklUWV9QUk9HUkFNIiwiQUNUSVZJVFlfUExBTk5JTkciLCJBQ1RJVklUWV9DT05UQUNUIiwiQUNUSVZJVFlfRE9DVU1FTlRTX0FERF9ET0NVTUVOVCIsIkFDVElWSVRZX0RPQ1VNRU5UU19BRERfV0VCTElOSyIsIkFDVElWSVRZX0lTU1VFU19BRERfSVNTVUUiLCJBQ1RJVklUWV9JU1NVRVNfREVMRVRFX0lTU1VFIiwiQUNUSVZJVFlfSVNTVUVTX0FERF9NRUFTVVJFIiwiQUNUSVZJVFlfSVNTVUVTX0RFTEVURV9NRUFTVVJFIiwiQUNUSVZJVFlfSVNTVUVTX0FERF9BQ1RPUiIsIkFDVElWSVRZX0lTU1VFU19ERUxFVEVfQUNUT1IiLCJBQ1RJVklUWV9ESVNCVVJTRU1FTlRTX0ZVTkRJTkdfRkxPV1NfT1JHUk9MRV9BRERfSU1QTEVNRU5USU5HX0FHRU5DWSIsIkFDVElWSVRZX0RJU0JVUlNFTUVOVFNfRlVORElOR19GTE9XU19PUkdST0xFX0FERF9DT05UUkFDVElOR19BR0VOQ1kiLCJBQ1RJVklUWV9ESVNCVVJTRU1FTlRTX0ZVTkRJTkdfRkxPV1NfT1JHUk9MRV9BRERfQkVORUZJQ0lBUllfQUdFTkNZIiwiQUNUSVZJVFlfRElTQlVSU0VNRU5UU19GVU5ESU5HX0ZMT1dTX09SR1JPTEVfQUREX0RPTk9SX09SR0FOSVpBVElPTiIsIkFDVElWSVRZX0RJU0JVUlNFTUVOVFNfRlVORElOR19GTE9XU19PUkdST0xFX0FERF9FWEVDVVRJTkdfQUdFTkNZIiwiQUNUSVZJVFlfRElTQlVSU0VNRU5UU19GVU5ESU5HX0ZMT1dTX09SR1JPTEVfQUREX1JFR0lPTkFMX0dST1VQIiwiQUNUSVZJVFlfRElTQlVSU0VNRU5UU19GVU5ESU5HX0ZMT1dTX09SR1JPTEVfQUREX1JFU1BPTlNJQkxFX09SR0FOSVpBVElPTiIsIkFDVElWSVRZX0RJU0JVUlNFTUVOVFNfRlVORElOR19GTE9XU19PUkdST0xFX0FERF9TRUNUT1JfR1JPVVAiLCJBQ1RJVklUWV9DT01NSVRNRU5UU19GVU5ESU5HX0ZMT1dTX09SR1JPTEVfQUREX0lNUExFTUVOVElOR19BR0VOQ1kiLCJBQ1RJVklUWV9DT01NSVRNRU5UU19GVU5ESU5HX0ZMT1dTX09SR1JPTEVfQUREX0NPTlRSQUNUSU5HX0FHRU5DWSIsIkFDVElWSVRZX0NPTU1JVE1FTlRTX0ZVTkRJTkdfRkxPV1NfT1JHUk9MRV9BRERfQkVORUZJQ0lBUllfQUdFTkNZIiwiQUNUSVZJVFlfQ09NTUlUTUVOVFNfRlVORElOR19GTE9XU19PUkdST0xFX0FERF9ET05PUl9PUkdBTklaQVRJT04iLCJBQ1RJVklUWV9DT01NSVRNRU5UU19GVU5ESU5HX0ZMT1dTX09SR1JPTEVfQUREX0VYRUNVVElOR19BR0VOQ1kiLCJBQ1RJVklUWV9DT01NSVRNRU5UU19GVU5ESU5HX0ZMT1dTX09SR1JPTEVfQUREX1JFR0lPTkFMX0dST1VQIiwiQUNUSVZJVFlfQ09NTUlUTUVOVFNfRlVORElOR19GTE9XU19PUkdST0xFX0FERF9SRVNQT05TSUJMRV9PUkdBTklaQVRJT04iLCJBQ1RJVklUWV9DT01NSVRNRU5UU19GVU5ESU5HX0ZMT1dTX09SR1JPTEVfQUREX1NFQ1RPUl9HUk9VUCIsIkFDVElWSVRZX0VYUEVORElUVVJFU19GVU5ESU5HX0ZMT1dTX09SR1JPTEVfQUREX0lNUExFTUVOVElOR19BR0VOQ1kiLCJBQ1RJVklUWV9FWFBFTkRJVFVSRVNfRlVORElOR19GTE9XU19PUkdST0xFX0FERF9DT05UUkFDVElOR19BR0VOQ1kiLCJBQ1RJVklUWV9FWFBFTkRJVFVSRVNfRlVORElOR19GTE9XU19PUkdST0xFX0FERF9CRU5FRklDSUFSWV9BR0VOQ1kiLCJBQ1RJVklUWV9FWFBFTkRJVFVSRVNfRlVORElOR19GTE9XU19PUkdST0xFX0FERF9ET05PUl9PUkdBTklaQVRJT04iLCJBQ1RJVklUWV9FWFBFTkRJVFVSRVNfRlVORElOR19GTE9XU19PUkdST0xFX0FERF9FWEVDVVRJTkdfQUdFTkNZIiwiQUNUSVZJVFlfRVhQRU5ESVRVUkVTX0ZVTkRJTkdfRkxPV1NfT1JHUk9MRV9BRERfUkVHSU9OQUxfR1JPVVAiLCJBQ1RJVklUWV9FWFBFTkRJVFVSRVNfRlVORElOR19GTE9XU19PUkdST0xFX0FERF9SRVNQT05TSUJMRV9PUkdBTklaQVRJT04iLCJBQ1RJVklUWV9FWFBFTkRJVFVSRVNfRlVORElOR19GTE9XU19PUkdST0xFX0FERF9TRUNUT1JfR1JPVVAiLCJNVEVGX1BST0pFQ1RJT05TIiwiTVRFRl9QUk9KRUNUSU9OU19BTU9VTlQiLCJNVEVGX1BST0pFQ1RJT05TX0NVUlJFTkNZIiwiTVRFRl9QUk9KRUNUSU9OU19QUk9KRUNUSU9OIiwiTVRFRl9QUk9KRUNUSU9OU19EQVRFIiwiQUNUSVZJVFlfQlVER0VUIiwiQUNUSVZJVFlfU1RBVFVTIiwiU1RBVFVTX1JFQVNPTiIsIkZJTkFOQ0lBTF9JTlNUUlVNRU5UIiwiVFlQRV9PRl9JTVBMRU1FTlRBVElPTiIsIk9CSkVDVElWRSIsIlJFU1VMVFMiLCJCVURHRVRfQ09ERV9QUk9KRUNUX0lEIiwiQUNUVUFMX0FQUFJPVkFMX0RBVEUiLCJGVU5ESU5HUyIsIkZVTkRJTkdfRE9OT1JfT1JHX0lEIiwiSVNfRFJBRlQiLCJPUkdfUk9MRV9PUkdfSUQiLCJBRERJVElPTkFMX0lORk8iLCJQUklNQVJZX1NFQ1RPUlMiLCJTRUNPTkRBUllfU0VDVE9SUyIsIlRFUlRJQVJZX1NFQ1RPUlMiLCJUQUdfU0VDVE9SUyIsIlNFQ1RPUiIsIlNFQ1RPUl9QRVJDRU5UQUdFIiwiRklOQU5DSU5HX0lOU1RSVU1FTlQiLCJNT0RBTElUSUVTIiwiTElORV9NSU5JU1RSWV9SQU5LIiwiR09WRVJOTUVOVF9BR1JFRU1FTlRfTlVNQkVSIiwiRlVORElOR19TVEFUVVMiLCJMT0NBVElPTlMiLCJMT0NBVElPTiIsIkxPQ0FUSU9OX1BFUkNFTlRBR0UiLCJJTVBMRU1FTlRBVElPTl9MT0NBVElPTiIsIklNUExFTUVOVEFUSU9OX0xFVkVMIiwiQVBQUk9WQUxfU1RBVFVTIiwiQVBQUk9WRURfQlkiLCJBUFBST1ZBTF9EQVRFIiwiVFlQRV9PRl9BU1NJU1RBTkNFIiwiRVhQRU5ESVRVUkVfQ0xBU1MiLCJGVU5ESU5HX0RFVEFJTFMiLCJNT0RFX09GX1BBWU1FTlQiLCJGVU5ESU5HX0NMQVNTSUZJQ0FUSU9OX0RBVEUiLCJBR1JFRU1FTlQiLCJET05PUl9PQkpFQ1RJVkUiLCJDT05ESVRJT05TIiwiQUdSRUVNRU5UX0NPREUiLCJBR1JFRU1FTlRfVElUTEUiLCJQUk9KRUNUX0NBVEVHT1JZIiwiUFJPSkVDVF9JTVBMRU1FTlRJTkdfVU5JVCIsIk9SR0FOSVpBVElPTiIsIlBFUkNFTlRBR0UiLCJBTVBfT1JHQU5JWkFUSU9OX1JPTEVfSUQiLCJST0xFIiwiRVhFQ1VUSU5HX0FHRU5DWSIsIkNPTlRSQUNUSU5HX0FHRU5DWSIsIkJFTkVGSUNJQVJZX0FHRU5DWSIsIklNUExFTUVOVElOR19BR0VOQ1kiLCJSRVNQT05TSUJMRV9PUkdBTklaQVRJT04iLCJET05PUl9PUkdBTklaQVRJT04iLCJSRUdJT05BTF9HUk9VUCIsIlNFQ1RPUl9HUk9VUCIsIkJVREdFVFMiLCJCVURHRVRfQ09ERSIsIkJVREdFVF9PUkdBTklaQVRJT05fQ09ERSIsIkFSQ0hJVkVEIiwiVFJBTlNBQ1RJT05fREFURSIsIlRSQU5TQUNUSU9OX1RZUEUiLCJDT01NSVRNRU5UUyIsIkRJU0JVUlNFTUVOVFMiLCJFWFBFTkRJVFVSRVMiLCJFU1RJTUFURURfRElTQlVSU0VNRU5UUyIsIlRSQU5TQUNUSU9OX0FNT1VOVCIsIkFESlVTVE1FTlRfVFlQRSIsIkFDVFVBTF9TVEFSVF9EQVRFIiwiUFJPUE9TRURfU1RBUlRfREFURSIsIkFDVFVBTF9DT01QTEVUSU9OX0RBVEUiLCJDT05UUkFDVElOR19EQVRFIiwiRElTQlVSU0VNRU5UX0RBVEUiLCJQUk9QT1NFRF9BUFBST1ZBTF9EQVRFIiwiT1JJR0lOQUxfQ09NUExFVElPTl9EQVRFIiwiUFJPUE9TRURfQ09NUExFVElPTl9EQVRFIiwiRklOQUxfREFURV9GT1JfRElTQlVSU0VNRU5UUyIsIkZJTkFMX0RBVEVfRk9SX0NPTlRSQUNUSU5HIiwiRUZGRUNUSVZFX0ZVTkRJTkdfREFURSIsIkZVTkRJTkdfQ0xPU0lOR19EQVRFIiwiUkFUSUZJQ0FUSU9OX0RBVEUiLCJNQVRVUklUWSIsIkxBU1RfQVVESVRfREFURSIsIlNJR05BVFVSRV9EQVRFIiwiSFVNQU5JVEFSSUFOX0FJRCIsIkRJU0FTVEVSX1JFU1BPTlNFIiwiUFJPR1JBTSIsIlBST0dSQU1fUEVSQ0VOVEFHRSIsIlBST0dSQU1fU0VUVElOR1MiLCJOQVRJT05BTF9QTEFOX09CSkVDVElWRSIsIlBSSU1BUllfUFJPR1JBTVMiLCJTRUNPTkRBUllfUFJPR1JBTVMiLCJURVJUSUFSX1BST0dSQU1TIiwiR09WRVJOTUVOVF9BUFBST1ZBTF9QUk9DRURVUkVTIiwiSk9JTlRfQ1JJVEVSSUEiLCJURUFNIiwiUkVKRUNURURfSUQiLCJJTlRFUk5BTF9JRCIsIkFNUF9JRCIsIlBST0pFQ1RfVElUTEUiLCJERVNDUklQVElPTiIsIk1PRElGSUVEX0JZIiwiTU9ESUZJRURfT04iLCJDUkVBVEVEX0JZIiwiQ1JFQVRFRF9PTiIsIkxBU1RfSU1QT1JURURfQlkiLCJDTElFTlRfQ0hBTkdFX0lEIiwiQ0xJRU5UX0NSRUFURURfT04iLCJDTElFTlRfVVBEQVRFRF9PTiIsIklTX1BVU0hFRCIsIkFDVElWSVRZX0dST1VQIiwiVkVSU0lPTiIsIlBST0pFQ1RfQ09NTUVOVFMiLCJMRVNTT05TX0xFQVJORUQiLCJQUk9KRUNUX0lNUEFDVCIsIkFDVElWSVRZX1NVTU1BUlkiLCJDT05ESVRJT05BTElUSUVTIiwiUFJPSkVDVF9NQU5BR0VNRU5UIiwiQV9DX0NIQVBURVIiLCJDUklTX05VTUJFUiIsIklBVElfSURFTlRJRklFUiIsIkFDVElWSVRZX0lOVEVSTkFMX0lEUyIsIkhJRVJBUkNISUNBTF9WQUxVRSIsIkhJRVJBUkNISUNBTF9WQUxVRV9QQVJUUyIsIkhJRVJBUkNISUNBTF9WQUxVRV9ERVBUSCIsIlBQQ19BTU9VTlQiLCJSUENfQU1PVU5UIiwiUFBDX0FOTlVBTF9CVURHRVRTIiwiQU1PVU5UIiwiQ1VSUkVOQ1kiLCJGVU5ESU5HX0RBVEUiLCJDT01QT05FTlRTIiwiVE9UQUxfTlVNQkVSX09GX0ZVTkRJTkdfU09VUkNFUyIsIlNPVVJDRV9ST0xFIiwiQU1QX0ZVTkRJTkdfSUQiLCJJU1NVRVMiLCJJU1NVRV9EQVRFIiwiSVNTVUVfTkFNRSIsIk1FQVNVUkVTIiwiTUVBU1VSRV9OQU1FIiwiTUVBU1VSRV9EQVRFIiwiQUNUT1JTIiwiQUNUT1JfTkFNRSIsIlNUUlVDVFVSRVMiLCJTVFJVQ1RVUkVTX1RJVExFIiwiU1RSVUNUVVJFU19ERVNDUklQVElPTiIsIlNUUlVDVFVSRVNfTEFUSVRVREUiLCJTVFJVQ1RVUkVTX0xPTkdJVFVERSIsIlNUUlVDVFVSRVNfQ09MT1IiLCJTVFJVQ1RVUkVTX0xBVCIsIlNUUlVDVFVSRVNfTE5HIiwiU1RSVUNUVVJFU19TSEFQRSIsIlNUUlVDVFVSRVNfUE9JTlQiLCJTVFJVQ1RVUkVTX1BPTFlHT04iLCJTVFJVQ1RVUkVTX1BPTFlMSU5FIiwiU1RSVUNUVVJFU19DT09SRElOQVRFUyIsIkNPTVBPTkVOVF9UWVBFIiwiQ09NUE9ORU5UX1RJVExFIiwiQ09NUE9ORU5UX0ZVTkRJTkciLCJDT01QT05FTlRfREVTQ1JJUFRJT04iLCJDT01QT05FTlRfT1JHQU5JWkFUSU9OIiwiRlVORElOR19BTU9VTlRfSUQiLCJFWFRSQV9JTkZPIiwiVkFMVUUiLCJBQ1JPTllNIiwiVFlQRV9PRl9DT09QRVJBVElPTiIsIkFOTlVBTF9QUk9KRUNUX0JVREdFVF9JRCIsIlRZUEUiLCJZRUFSIiwiR1JPVVBfVkVSU0lPTkVEX0ZVTkRJTkciLCJBQ1RJVkVfTElTVCIsIkFDVElWRSIsIkRFTEVHQVRFRF9DT09QRVJBVElPTiIsIkRFTEVHQVRFRF9QQVJUTkVSIiwiRklOQU5DSU5HX0lEIiwiRElTQlVSU0VNRU5UX09SREVSX0lEIiwiUExFREdFIiwiQ0FQSVRBTF9TUEVORElOR19QRVJDRU5UQUdFIiwiUkVQT1JUSU5HX0RBVEUiLCJSRUNJUElFTlRfUk9MRSIsIlJFQ0lQSUVOVF9PUkdBTklaQVRJT04iLCJURU1QT1JBTF9JRCIsIk1JTklTVFJZX0NPREUiLCJQUk9KRUNUX0NPREUiLCJGWSIsIklORElSRUNUX09OX0JVREdFVCIsIklNUExFTUVOVEFUSU9OX0xFVkVMU19FWFRSQV9JTkZPIiwiSU1QTEVNRU5UQVRJT05fTE9DQVRJT05fRVhUUkFfSU5GTyIsIkRPTk9SX0NPTlRBQ1QiLCJQUk9KRUNUX0NPT1JESU5BVE9SX0NPTlRBQ1QiLCJTRUNUT1JfTUlOSVNUUllfQ09OVEFDVCIsIk1PRkVEX0NPTlRBQ1QiLCJJTVBMRU1FTlRJTkdfRVhFQ1VUSU5HX0FHRU5DWV9DT05UQUNUIiwiQ09OVEFDVCIsIk9SR0FOSVpBVElPTl9HUk9VUCIsIkZJWEVEX0VYQ0hBTkdFX1JBVEUiLCJQUklNQVJZX0NPTlRBQ1QiLCJBQ1RJVklUWV9ET0NVTUVOVFMiLCJET0NVTUVOVF9UWVBFIiwiSVNPMiIsIlBST0pFQ1RJT04iLCJQSVBFTElORSIsIlBST0pFQ1RJT05fREFURSIsIlNBTUVfQVNfUFJPUE9TRURfU1RBUlRfREFURV9MQUJFTCIsIlNBTUVfQVNfUFJPUE9TRURfQVBQUk9WQUxfREFURV9MQUJFTCIsIkRFUEVOREVOQ1lfSU1QTEVNRU5UQVRJT05fTEVWRUxfUFJFU0VOVCIsIkRFUEVOREVOQ1lfSU1QTEVNRU5UQVRJT05fTEVWRUxfVkFMSUQiLCJERVBFTkRFTkNZX0lNUExFTUVOVEFUSU9OX0xPQ0FUSU9OX1BSRVNFTlQiLCJERVBFTkRFTkNZX0lNUExFTUVOVEFUSU9OX0xPQ0FUSU9OX1ZBTElEIiwiREVQRU5ERU5DWV9QUk9KRUNUX0NPREVfT05fQlVER0VUIiwiREVQRU5ERU5DWV9PTl9CVURHRVQiLCJERVBFTkRFTkNZX1RSQU5TQUNUSU9OX1BSRVNFTlQiLCJERVBFTkRFTkNZX0NPTVBPTkVOVF9GVU5ESU5HX09SR19WQUxJRCIsIkFQX1NFQ1RJT05fSURTIiwia2V5IiwiaGFzaCIsImZtUGF0aCIsIkZNQyIsInNlY3Rpb25QYXRoIiwiQUNUSVZJVFlfSU5URVJOQUxfSURTX0NPTFMiLCJBQ1RJVklUWV9QTEFOTklOR19DT0xTIiwiQUNUSVZJVFlfTE9DQVRJT05fQ09MUyIsIkFDVElWSVRZX0ZVTkRJTkdfQ09MUyIsIkFDVElWSVRZX0NPTlRBQ1RfQ09MUyIsIkFQX0ZVTkRJTkdTX1RBQkxFX0NPTFMiLCJNVUxUSV9TRUxFQ1RfTUlOX1NJWkUiLCJNVUxUSV9TRUxFQ1RfTUFYX1NJWkUiLCJ0b0ZpZWxkTmFtZXMiLCJsaXN0T2ZOYW1lcyIsIm1hcCIsInRvRmllbGROYW1lIiwibmFtZSIsInRvTG93ZXJDYXNlIiwicmVwbGFjZSIsInRvT3JpZ2luYWxMYWJlbCIsImZpZWxkTmFtZSIsImNhcGl0YWxpemUiLCJ0ZXh0IiwiY2hhciIsInRvVXBwZXJDYXNlIiwiTk9USUZJQ0FUSU9OX09SSUdJTl9BUElfU0VDVVJJVFkiLCJOT1RJRklDQVRJT05fT1JJR0lOX0FQSV9ORVRXT1JLIiwiTk9USUZJQ0FUSU9OX09SSUdJTl9BUElfU1lOQ1VQIiwiTk9USUZJQ0FUSU9OX09SSUdJTl9BUElfR0VORVJBTCIsIk5PVElGSUNBVElPTl9PUklHSU5fREFUQUJBU0UiLCJOT1RJRklDQVRJT05fT1JJR0lOX0FVVEhFTlRJQ0FUSU9OIiwiTk9USUZJQ0FUSU9OX09SSUdJTl9XT1JLU1BBQ0VfRklMVEVSIiwiTk9USUZJQ0FUSU9OX09SSUdJTl9XT1JLU1BBQ0UiLCJOT1RJRklDQVRJT05fT1JJR0lOX1NZTkNVUF9QUk9DRVNTIiwiTk9USUZJQ0FUSU9OX09SSUdJTl9DVVJSRU5DWV9NQU5BR0VSIiwiTk9USUZJQ0FUSU9OX09SSUdJTl9EQVRFUyIsIk5PVElGSUNBVElPTl9PUklHSU5fQUNUSVZJVFkiLCJOT1RJRklDQVRJT05fT1JJR0lOX1JFU09VUkNFIiwiTk9USUZJQ0FUSU9OX09SSUdJTl9JMThORVhUIiwiTk9USUZJQ0FUSU9OX09SSUdJTl9VUERBVEVfQ0hFQ0siLCJOT1RJRklDQVRJT05fT1JJR0lOX1VQREFURSIsIk5PVElGSUNBVElPTl9PUklHSU5fU0VUVVAiLCJOT1RJRklDQVRJT05fT1JJR0lOX1NFVFRJTkdTIiwiTk9USUZJQ0FUSU9OX1NFVkVSSVRZX1dBUk5JTkciLCJOT1RJRklDQVRJT05fU0VWRVJJVFlfSU5GTyIsIk5PVElGSUNBVElPTl9TRVZFUklUWV9FUlJPUiIsIk5PVElGSUNBVElPTl9FUlJPUl9MRVZFTF9NSU5PUiIsIk5PVElGSUNBVElPTl9FUlJPUl9MRVZFTF9CTE9DS0VSIiwiTk9USUZJQ0FUSU9OX09SSUdJTl9XUk9OR19NRVRIT0RfVVNBR0UiLCJFUlJPUl9DT0RFX05PX0NPTk5FQ1RJVklUWSIsIkVSUk9SX0NPREVfQUNDRVNTX0RFTklFRCIsIk1TR19JTlZBTElEX1VSTCIsIk1TR19USU1FT1VUIiwiTVNHX1VOS05PV05fTkVUV09SS19FUlJPUiIsIk1TR19BTVBfVU5SRUFDSEFCTEUiLCJHRU5FUkFMX0NPTk5FQ1RJT05fRVJST1JTIiwiRE9OT1JfQUdFTkNZIiwiT1JHX1JPTEVfTkFNRVMiLCJBQ1RVQUwiLCJQTEFOTkVEIiwiQUNUVUFMX0NPTU1JVE1FTlRTIiwiQWN0aXZpdHlDb25zdGFudHMiLCJBQ1RVQUxfRElTQlVSU0VNRU5UUyIsIkFDVFVBTF9FWFBFTkRJVFVSRVMiLCJQTEFOTkVEX0NPTU1JVE1FTlRTIiwiUExBTk5FRF9ESVNCVVJTRU1FTlRTIiwiUExBTk5FRF9FWFBFTkRJVFVSRVMiLCJVTkFMTE9DQVRFRF9ESVNCVVJTRU1FTlRTIiwiREVMSVZFUllfUkFURSIsIkFESlVTVE1FTlRfVFlQRVMiLCJBREpVU1RNRU5UX1RZUEVTX0FQX09SREVSIiwiTkVXX0FDVElWSVRZX0lEIiwiUFJPUE9TRURfUFJPSkVDVF9DT1NUIiwiUkVWSVNFRF9QUk9KRUNUX0NPU1QiLCJBQ1JPTllNX0RPTk9SX09SR0FOSVpBVElPTiIsIkFDUk9OWU1fRVhFQ1VUSU5HX0FHRU5DWSIsIkFDUk9OWU1fSU1QTEVNRU5USU5HX0FHRU5DWSIsIkFDUk9OWU1fQkVORUZJQ0lBUllfQUdFTkNZIiwiQUNST05ZTV9SRVNQT05TSUJMRV9PUkdBTklaQVRJT04iLCJBUFBST1ZBTF9TVEFUVVNfQ1JFQVRFRCIsIkFQUFJPVkFMX1NUQVRVU19BUFBST1ZFRCIsIkFQUFJPVkFMX1NUQVRVU19FRElURUQiLCJBUFBST1ZBTF9TVEFUVVNfU1RBUlRFRF9BUFBST1ZFRCIsIkFQUFJPVkFMX1NUQVRVU19TVEFSVEVEIiwiQVBQUk9WQUxfU1RBVFVTX05PVF9BUFBST1ZFRCIsIkFQUFJPVkFMX1NUQVRVU19SRUpFQ1RFRCIsIk9OX0JVREdFVCIsIklOVEVSTkFUSU9OQUwiLCJDT1VOVFJZIiwiUkVMQVRFRF9ET0NVTUVOVFMiLCJUTVBfRU5USVRZX1ZBTElEQVRPUiIsIkFMV0FZU19SRVFVSVJFRCIsIkZVTkRJTkdfQUNUSVZFX0xJU1QiLCJGVU5ESU5HX1RZUEVfT0ZfQVNTSVNUQU5DRSIsIkZVTkRJTkdfREVUQUlMU19QQVRIIiwiRlVORElOR19DVVJSRU5DWV9QQVRIIiwiTVRFRl9DVVJSRU5DWV9QQVRIIiwiUFBDX0NVUlJFTkNZX1BBVEgiLCJSUENfQ1VSUkVOQ1lfUEFUSCIsIkNPTVBPTkVOVF9DVVJSRU5DWV9QQVRIIiwiRElTQlVSU0VNRU5UU19QQVRIIiwiQUNUSVZJVFlfSU5URVJOQUxfSURTX0lOVEVSTkFMX0lEX1BBVEgiLCJBQ1RJVklUWV9JTlRFUk5BTF9JRFNfT1JHQU5JWkFUSU9OX1BBVEgiLCJMT0NBVElPTl9QQVRIIiwiTkFUSU9OQUxfUExBTl9PQkpFQ1RJVkVfUEFUSCIsIlBSSU1BUllfUFJPR1JBTV9QQVRIIiwiU0VDT05EQVJZX1BST0dSQU1fUEFUSCIsIlBSSU1BUllfU0VDVE9SX1BBVEgiLCJTRUNPTkRBUllfU0VDVE9SX1BBVEgiLCJURVJUSUFSWV9TRUNUT1JfUEFUSCIsIkRPTk9SX09SR0FOSVpBVElPTlNfUEFUSCIsIlJFU1BPTlNJQkxFX09SR0FOSVpBVElPTl9CVURHRVRTX1BBVEgiLCJSRUxBVEVEX09SR1NfUEFUSFMiLCJWYWx1ZUNvbnN0YW50cyIsIm9yZ1JvbGUiLCJSRUxBVEVEX09SR1NfT1JHQU5JWkFUSU9OX1BBVEhTIiwiUklDSF9URVhUX0ZJRUxEUyIsIlNldCIsIlBBVEhTX1dJVEhfVFJFRV9TVFJVQ1RVUkUiLCJQQVRIU19XSVRIX0hJRVJBUkNISUNBTF9WQUxVRVMiLCJBQ1RJVklUWV9DT05UQUNUX1BBVEhTIiwiVFJBTlNBQ1RJT05fVFlQRVMiLCJUUkFOU0FDVElPTl9UWVBFU19PUkRFUkVEIiwiRlVORElOR19UUkFOU0FDVElPTl9UWVBFUyIsIkFESlVTVE1FTlRfVFlQRV9QQVRIUyIsInR0IiwiRlVORElOR19DVVJSRU5DWV9QQVRIUyIsIlBBVEhTX0ZPUl9BQ1RJVklUWV9DVVJSRU5DWSIsIlBBVEhTX0ZPUl9DVVJSRU5DWSIsIkRPX05PVF9IWURSQVRFX0ZJRUxEU19MSVNUIiwiQUxURVJOQVRFX1ZBTFVFX1BBVEgiLCJBQ1RJVklUWV9GSUVMRFNfRk1fUEFUSCIsIkZlYXR1cmVNYW5hZ2VyQ29uc3RhbnRzIiwiUFJFRklYX0FDVElWSVRZIiwiUFJFRklYX0NPTlRBQ1QiLCJQUkVGSVhfUkVTT1VSQ0UiLCJQUkVGSVhfQ09NTU9OIiwiUFJFRklYX0xJU1QiLCJGSUVMRF9QQVRIIiwiRklFTERfT1BUSU9OUyIsIkZJRUxEX09QVElPTl9VU0FCTEUiLCJMSVNUX01BWF9TSVpFIiwiUkVHRVhfUEFUVEVSTiIsIkZJRUxEX05BTUUiLCJGSUVMRF9MQUJFTCIsIkZJRUxEX1JFUVVJUkVEIiwiRklFTERfVU5JUVVFX0NPTlNUUkFJTlQiLCJGSUVMRF9UWVBFIiwiRklFTERfTEVOR1RIIiwiRklFTERfUEVSQ0VOVEFHRSIsIkZJRUxEX1BFUkNFTlRBR0VfQ09OU1RSQUlOVCIsIkZJRUxEX0lURU1fVFlQRSIsIkZJRUxEX0lNUE9SVEFCTEUiLCJGSUVMRF9JRF9PTkxZIiwiRklFTERfTVVMVElQTEVfVkFMVUVTX0FMTE9XRUQiLCJGSUVMRF9UUkVFX0NPTExFQ1RJT04iLCJGSUVMRF9DSElMRFJFTiIsIkZJRUxEX0RFUEVOREVOQ0lFUyIsIkZJRUxEX1RZUEVfTElTVCIsIkZJRUxEX1RZUEVfT0JKRUNUIiwiRklFTERfVFlQRV9TVFJJTkciLCJGSUVMRF9UWVBFX0xPTkciLCJGSUVMRF9UWVBFX0ZMT0FUIiwiRklFTERfVFlQRV9CT09MRUFOIiwiRklFTERfVFlQRV9EQVRFIiwiRklFTERfVFlQRV9USU1FU1RBTVAiLCJsb2dnZXIiLCJGaWVsZHNNYW5hZ2VyIiwiZmllbGRzTWFuYWdlciIsIm5ld0ZpZWxkc01hbmFnZXIiLCJhc3NpZ24iLCJmaWVsZHNEZWYiLCJwb3NzaWJsZVZhbHVlc0NvbGxlY3Rpb24iLCJjdXJyZW50TGFuZ3VhZ2UiLCJMb2dnZXJNYW5hZ2VyIiwiZGVidWciLCJfZmllbGRzRGVmIiwiX3Bvc3NpYmxlVmFsdWVzTWFwIiwicHYiLCJpZCIsIkZQQyIsIl9maWVsZFBhdGhzRW5hYmxlZFN0YXR1c01hcCIsIl9sYW5nIiwiQ29uc3RhbnRzIiwiX2RlZmF1bHRMYW5nIiwiY2xlYW51cCIsImZkIiwiY2hpbGRyZW4iLCJmaWVsZF9sYWJlbCIsImtleXMiLCJsYW5nIiwiZmllbGRQYXRoIiwidmFsdWVzIiwicGF0aFBhcnRzIiwiaXNGaWVsZFBhdGhFbmFibGVkIiwidW5kZWZpbmVkIiwiX2J1aWxkRmllbGRQYXRoU3RhdHVzIiwic3BsaXQiLCJjdXJyZW50VHJlZSIsImlzRGlzYWJsZWQiLCJzb21lIiwiZmluZCIsImZpZWxkIiwiZmllbGRfbmFtZSIsInBhcnQiLCJvcmlnVmFsdWUiLCJ0cm5WYWx1ZSIsIm9wdGlvbnMiLCJvcHRpb24iLCJvcHQiLCJ0cmFuc2xhdGlvbnMiLCJnZXRGaWVsZERlZiIsImRlcGVuZGVuY2llcyIsImZpZWxkUGF0aHMiLCJfZ2V0RmllbGRQYXRoc0J5RGVwZW5kZW5jaWVzIiwiY3VycmVudFBhdGgiLCJoYXNEZXBlbmRlbmN5IiwiaW5jbHVkZXMiLCJkZXAiLCJnZXRPcHRpb25UcmFuc2xhdGlvbiIsImdldFZhbHVlIiwicGFydHMiLCJuZXdMaXN0IiwibmV3RWxlbWVudCIsImN1cnJlbnQiLCJsZW5ndGgiLCJjb25jYXQiLCJ2YWwiLCJDdXJyZW5jeVJhdGVzTWFuYWdlciIsImN1cnJlbmN5UmF0ZXMiLCJiYXNlQ3VycmVuY3kiLCJkYXRlVXRpbHMiLCJlcnJvck5vdGlmaWNhdGlvbkhlbHBlciIsIl9jdXJyZW5jeVJhdGVzIiwiX2Jhc2VDdXJyZW5jeSIsIl9jdXJybmNpZXNXaXRoRXhjaGFuZ2VSYXRlcyIsIl9nZXRDdXJyZW5jaWVzV2l0aEV4Y2hhbmdlUmF0ZXMiLCJfdHJhbnNsYXRlIiwiX2RhdGVVdGlscyIsIl9lcnJvck5vdGlmaWNhdGlvbkhlbHBlciIsImN1cnJlbmN5RnJvbSIsImN1cnJlbmN5VG8iLCJkYXRlVG9GaW5kIiwiZml4ZWRFeGNoYW5nZVJhdGUiLCJjb252ZXJ0Q3VycmVuY3kiLCJ0aW1lRGF0ZVRvRmluZCIsIkRhdGUiLCJnZXRUaW1lIiwiY3VycmVuY2llc1RvU2VhcmNoRGlyZWN0IiwiaXRlbSIsImZyb20iLCJ0byIsImdldEV4Y2hhbmdlUmF0ZSIsImN1cnJlbmNpZXNUb1NlYXJjaEludmVyc2UiLCJjb252ZXJ0VmlhQmFzZUN1cnJlbmN5IiwiX2dldEN1cnJlbmN5RXJyb3IiLCJmdW5kaW5nRGV0YWlscyIsInRvdGFsIiwiY29udmVydFRyYW5zYWN0aW9uQW1vdW50VG9DdXJyZW5jeSIsImZ1bmRpbmdEZXRhaWwiLCJhbW91bnQiLCJkYXRlIiwiY3VycmVuY3lSYXRlIiwiZm9ybWF0RGF0ZUZvckFQSSIsInRyYW5zYWN0aW9uRGF0ZSIsInRyYW5zYWN0aW9uQW1vdW50IiwiY29udmVydEFtb3VudFRvQ3VycmVuY3kiLCJjdXJyZW5jaWVzVG9TZWFyY2giLCJsb3dlckVuZCIsImhpZ2hlckVuZCIsInJhdGVzIiwibWlkZGxlIiwiTWF0aCIsImZsb29yIiwiZGlmZmVyZW5jZSIsImFicyIsImRpZmZlcmVuY2UxIiwicmF0ZSIsImVycm9yTWVzYWdlIiwibm90aWZFcnJvckN1cnJlbmN5IiwiY3JlYXRlTm90aWZpY2F0aW9uIiwiRXJyb3JDb25zdGFudHMiLCJyYXRlRnJvbVRvQmFzZSIsInJhdGVCYXNlVG9UbyIsInJhdGVUb1RvQmFzZSIsInJhdGVCYXNlVG9Gcm9tIiwiY3MiLCJhZGQiLCJleGNoYW5nZVJhdGVzIiwiUG9zc2libGVWYWx1ZXNNYW5hZ2VyIiwibGFuZ1N0YXRlIiwiX2xhbmdTdGF0ZSIsIkxvZ2dlciIsIl9sb2dnZXIiLCJoT3B0aW9ucyIsImJ1aWxkSGllcmFyY2hpY2FsRGF0YSIsInNlbGVjdGVkSWQiLCJ2YWx1ZVBhcnRzIiwiZ2V0SGllcmFyY2hpY2FsVmFsdWUiLCJmb3JtYXRWYWx1ZVBhcnRzIiwibmFtZVBhcnRzIiwicGFyZW50SWQiLCJyZXZlcnNlIiwiX2ZpbGxIaWVyYXJjaGljYWxEZXB0aCIsImVycm9yIiwiZGVwdGgiLCJwYXJlbnQiLCJvIiwicmVzVmFsIiwiZGVmYXVsdExhbmciLCJjdXJyZW5jeVJhdGVzTWFuYWdlciIsImZpbHRlcnMiLCJpc09SRmlsdGVyIiwiaXNMb2NhdGlvbnMiLCJpc0N1cnJlbmN5IiwiaGFzIiwidmlzaWJsZSIsImRpc3BsYXlIaWVyYXJjaGljYWxWYWx1ZSIsImlzQ3VycmVuY3lPcHRpb25Vc2FibGUiLCJmaWx0ZXJCeSIsImZpbHRlciIsIm9wdGlvbkRhdGFUb0NoZWNrIiwicGF0aCIsImhhc0V4Y2hhbmdlUmF0ZXMiLCJjdXJyZW5jaWVzV2l0aEV4Y2hhbmdlUmF0ZXMiLCJpc0FjdGl2ZSIsImV4dHJhX2luZm8iLCJhY3RpdmUiLCJvcHRpb25zT2JqIiwicmV2ZXJzZVNvcnRPcHRpb25zIiwiYWRkZWQiLCJvcHRpb25zTGlzdCIsImlkc1N0YWNrIiwicG9wIiwicmV2ZXJzZVNvcnRlZENoaWxkcmVuIiwiRkVBVFVSRV9NQU5BR0VSIiwiRmVhdHVyZU1hbmFnZXIiLCJmbVRyZWUiLCJfZm1UcmVlIiwibG9nZ2VyTWFuYWdlciIsIm9ubHlMYXN0U2VnbWVudCIsIl9sb2dnZXJNYW5hZ2VyIiwibGFzdEZNU3ViVHJlZSIsInNlZ21lbnRzIiwiX2dldFBhdGhTZWdtZW50cyIsImZvdW5kTGFzdEZNU3ViVHJlZSIsImV2ZXJ5Iiwic2VnbWVudCIsIl9fZW5hYmxlZCIsImZtU2V0dGluZyIsImZpbmRGTVNldHRpbmciLCJyZWR1Y2UiLCJjdXJyZW50Rk1TZXR0aW5nIiwiZW5hYmxlZCIsImN1cnJlbnRGTVRyZWUiLCJzZWdtZW50Rk0iLCJzdWJzdHJpbmciLCJfY3VycmVudEZNIiwiaXNGTVNldHRpbmdFbmFibGVkIiwiaGFzRk1TZXR0aW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsU0FBUyxXQUFXLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRTtFQUM3QixLQUFLLEdBQUcsS0FBSyxLQUFLLENBQUMsR0FBRyxHQUFHLEdBQUcsRUFBRSxDQUFDO0VBQy9CLElBQUksUUFBUSxHQUFHLEdBQUcsQ0FBQyxRQUFRLENBQUM7O0VBRTVCLElBQUksQ0FBQyxHQUFHLElBQUksT0FBTyxRQUFRLEtBQUssV0FBVyxFQUFFLEVBQUUsT0FBTyxFQUFFOztFQUV4RCxJQUFJLElBQUksR0FBRyxRQUFRLENBQUMsSUFBSSxJQUFJLFFBQVEsQ0FBQyxvQkFBb0IsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztFQUNyRSxJQUFJLEtBQUssR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxD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QUE7b0RBQUE7b0JBQUE7b0NBQUE7b0NBQUE7MEJBQUE7OEJBQUE7NEJBQUE7a0RBQUE7d0NBQUE7a0NBQUE7c0NBQUE7MENBQUE7Z0RBQUE7b0NBQUE7c0NBQUE7Z0RBQUE7b0RBQUE7b0RBQUE7NERBQUE7d0RBQUE7Z0RBQUE7NENBQUE7c0NBQUE7b0JBQUE7a0NBQUE7Z0NBQUE7b0NBQUE7c0NBQUE7a0JBQUE7d0NBQUE7b0NBQUE7a0RBQUE7b0NBQUE7d0NBQUE7b0NBQUE7Z0VBQUE7Z0NBQUE7WUFBQTswQkFBQTswQkFBQTtnQkFBQTs4QkFBQTswQkFBQTswQkFBQTswQkFBQTt3QkFBQTt3QkFBQTtvQ0FBQTtvQ0FBQTtzQ0FBQTtzQ0FBQTtzQkFBQTtnQ0FBQTtrQkFBQTtvQ0FBQTtrQ0FBQTtnQ0FBQTtvQ0FBQTtvQ0FBQTt3Q0FBQTswQkFBQTswQkFBQTtrQ0FBQTs4Q0FBQTt3Q0FBQTtvREFBQTtvREFBQTt3QkFBQTt3QkFBQTt3Q0FBQTtnQkFBQTtvQkFBQTs0QkFBQTt3QkFBQTtrRUFBQTswQkFBQTtnQ0FBQTtnQkFBQTt3QkFBQTt3QkFBQTtvQkFBQTs0QkFBQTs0QkFBQTtnQkFBQTt3QkFBQTt3QkFBQTtvQ0FBQTtnREFBQTswQ0FBQTs0Q0FBQTtvQ0FBQTtnQ0FBQTtnQ0FBQTtvQ0FBQTtvQ0FBQTt3Q0FBQTswQ0FBQTtnREFBQTtnQ0FBQTtrQ0FBQTtzQ0FBQTs4Q0FBQTtnREFBQTtzQ0FBQTt3QkFBQTtjQUFBO2tCQUFBOzBDQUFBO29EQUFBO1lBQUE7WUFBQTtrREFBQTswQkFBQTtnQkFBQTs4Q0FBQTtzQ0FBQTs0QkFBQTs4Q0FBQTtnQkFBQTswREFBQTtnQ0FBQTtnQ0FBQTtnREFBQTswQkFBQTs4QkFBQTs0QkFBQTtRQUFBO3dDQUFBO29FQUFBO3dFQUFBOzhCQUFBOzBEQUFBO2tEQUFBOzhCQUFBOzhFQUFBO2tCQUFBO3dDQUFBOzBDQUFBO2tDQUFBO3dDQUFBOzhCQUFBO1lBQUE7c0NBQUE7d0JBQUE7b0JBQUE7a0NBQUE7c0VBQUE7NEVBQUE7a0ZBQUE7OEVBQUE7d0ZB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
