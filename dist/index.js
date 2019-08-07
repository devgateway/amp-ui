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

var index = { TestAPField: TestAPField, TestingSection: TestingSection, Constants: Constants, ActivityConstants: ActivityConstants, FeatureManagerConstants: FeatureManagerConstants };

exports.TestAPField = TestAPField;
exports.TestingSection = TestingSection;
exports.Constants = Constants;
exports.ActivityConstants = ActivityConstants;
exports.FeatureManagerConstants = FeatureManagerConstants;
exports.default = index;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIi4uL25vZGVfbW9kdWxlcy9zdHlsZS1pbmplY3QvZGlzdC9zdHlsZS1pbmplY3QuZXMuanMiLCIuLi9zcmMvYWN0aXZpdHlQcmV2aWV3L2NvbXBvbmVudHMvVGVzdEFQRmllbGQuanMiLCIuLi9zcmMvYWN0aXZpdHlQcmV2aWV3L2NvbXBvbmVudHMvVGVzdGluZ1NlY3Rpb24uanMiLCIuLi9zcmMvdXRpbHMvQ29uc3RhbnRzLmpzIiwiLi4vc3JjL21vZHVsZXMvdXRpbC9GZWF0dXJlTWFuYWdlckNvbnN0YW50cy5qcyIsIi4uL3NyYy9tb2R1bGVzL3V0aWwvQWN0aXZpdHlDb25zdGFudHMuanMiLCIuLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gc3R5bGVJbmplY3QoY3NzLCByZWYpIHtcbiAgaWYgKCByZWYgPT09IHZvaWQgMCApIHJlZiA9IHt9O1xuICB2YXIgaW5zZXJ0QXQgPSByZWYuaW5zZXJ0QXQ7XG5cbiAgaWYgKCFjc3MgfHwgdHlwZW9mIGRvY3VtZW50ID09PSAndW5kZWZpbmVkJykgeyByZXR1cm47IH1cblxuICB2YXIgaGVhZCA9IGRvY3VtZW50LmhlYWQgfHwgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2hlYWQnKVswXTtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgc3R5bGUudHlwZSA9ICd0ZXh0L2Nzcyc7XG5cbiAgaWYgKGluc2VydEF0ID09PSAndG9wJykge1xuICAgIGlmIChoZWFkLmZpcnN0Q2hpbGQpIHtcbiAgICAgIGhlYWQuaW5zZXJ0QmVmb3JlKHN0eWxlLCBoZWFkLmZpcnN0Q2hpbGQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBoZWFkLmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgaGVhZC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBzdHlsZUluamVjdDtcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi8uLi9hY3Rpdml0eUFzc2V0cy9zdHlsZXNoZWV0cy9BY3Rpdml0eVByZXZpZXcuY3NzJztcblxuXG4vKipcbiAqIFNpbXBsZSBGaWVsZCBjb21wb25lbnQgdGhhdCBjb25zaXN0cyBvZiBhIGZpZWxkIHRpdGxlIGFuZCBmaWVsZCB2YWx1ZVxuICogQGF1dGhvciBOYWRlamRhIE1hbmRyZXNjdVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZXN0QVBGaWVsZCBleHRlbmRzIENvbXBvbmVudCB7XG4gIC8qKlxuICAgKiBHZXRzIGFuIGluc3RhbmNlIG9mIFNpbXBsZSBGaWVsZFxuICAgKiBAcGFyYW0gdHJuTGFiZWwgdGhlIGxhYmVsIHRvIHRyYW5zbGF0ZSBhbmQgdXNlIGFzIGEgdGl0bGUuIFRoaXMgbGFiZWwgaXMgYWxzbyB1c2VkIGFzIHRoZSBjb21wb25lbnQga2V5LlxuICAgKiBAcGFyYW0gdmFsdWUgdGhlIGZpZWxkIHZhbHVlXG4gICAqIEBwYXJhbSBpbmxpbmUgc2hvdyB0aXRsZSBhbmQgdmFsdWUgaW4gdGhlIHNhbWUgcm93LlxuICAgKiBAcGFyYW0gc2VwYXJhdG9yIGFkZCBvciBub3QgYW4gPGhyPiB0YWcuXG4gICAqIEBwYXJhbSBuYW1lQ2xhc3MgY3NzIGNsYXNzIGZvciB0aGUgZmllbGQgbGFiZWxcbiAgICogQHBhcmFtIHZhbHVlQ2xhc3MgY3NzIGNsYXNzIGZvciB0aGUgZmllbGQgdmFsdWVcbiAgICogQHJldHVybiB7U2ltcGxlRmllbGR9XG4gICAqL1xuICBzdGF0aWMgaW5zdGFuY2UodHJuTGFiZWwsIHZhbHVlLCBpbmxpbmUgPSBmYWxzZSwgc2VwYXJhdG9yID0gZmFsc2UsIG5hbWVDbGFzcywgdmFsdWVDbGFzcykge1xuICAgIHJldHVybiAoPFRlc3RBUEZpZWxkXG4gICAgICBrZXk9e3RybkxhYmVsfSB0aXRsZT17dGhpcy5wcm9wcy50cmFuc2xhdGUodHJuTGFiZWwpfSB2YWx1ZT17dmFsdWV9IGlubGluZT17aW5saW5lfSBzZXBhcmF0b3I9e3NlcGFyYXRvcn1cbiAgICAgIGZpZWxkTmFtZUNsYXNzPXtuYW1lQ2xhc3N9IGZpZWxkVmFsdWVDbGFzcz17dmFsdWVDbGFzc30gLz4pO1xuICB9XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5wcm9wcy5hbXBMb2dnZXIubG9nKCdjb25zdHJ1Y3RvcmUnKTtcbiAgICB0aGlzLnVzZVNlcGFyYXRvciA9IHRoaXMucHJvcHMuc2VwYXJhdG9yICE9PSBmYWxzZTtcbiAgICB0aGlzLmRpc3BsYXlDbGFzcyA9IHRoaXMucHJvcHMuZmllbGRDbGFzcyB8fCAodGhpcy5wcm9wcy5pbmxpbmUgPT09IHRydWUgPyBzdHlsZXMuaW5saW5lIDogc3R5bGVzLmJsb2NrKTtcbiAgfVxuXG4gIF9nZXRWYWx1ZSgpIHtcbiAgICBjb25zdCBjbGFzc05hbWVzID0gYCR7dGhpcy5wcm9wcy5maWVsZFZhbHVlQ2xhc3N9ICR7dGhpcy5kaXNwbGF5Q2xhc3N9YDtcbiAgICAvLyBUbyBoYW5kbGUgYm9vbGVhbiBmaWVsZHMgd2UgZG9udCB3YW50IHRvIHNob3cgJ2ZhbHNlJyBhcyAnTm8gRGF0YScuXG4gICAgY29uc3QgdmFsdWUgPSAodGhpcy5wcm9wcy52YWx1ZSB8fCB0aGlzLnByb3BzLnZhbHVlID09PSBmYWxzZSkgPyB0aGlzLnByb3BzLnZhbHVlIDogdGhpcy5wcm9wcy50cmFuc2xhdGUoJ05vIERhdGEnKTtcbiAgICBsZXQgZGlzcGxheVZhbHVlO1xuICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgaWYgKHZhbHVlWzBdIGluc3RhbmNlb2YgT2JqZWN0KSB7XG4gICAgICAgIGRpc3BsYXlWYWx1ZSA9IFtdO1xuICAgICAgICB2YWx1ZS5mb3JFYWNoKHYgPT4gZGlzcGxheVZhbHVlLnB1c2godikpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZGlzcGxheVZhbHVlID0gdmFsdWUuc29ydCgpLmpvaW4oJywgJyk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgdmFsdWUgPT09ICdib29sZWFuJykge1xuICAgICAgZGlzcGxheVZhbHVlID0gdmFsdWUgPT09IHRydWUgPyB0aGlzLnByb3BzLnRyYW5zbGF0ZSgnWWVzJykgOiB0aGlzLnByb3BzLnRyYW5zbGF0ZSgnTm8nKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZGlzcGxheVZhbHVlID0gKHRoaXMucHJvcHMuaW5saW5lICYmIHRoaXMucHJvcHMudmFsdWUgaW5zdGFuY2VvZiBTdHJpbmcpID8gYCR7dmFsdWV9IGAgOiB2YWx1ZTtcbiAgICB9XG4gICAgaWYgKHRoaXMucHJvcHMudXNlSW5uZXJIVE1MKSB7XG4gICAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZXN9IGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogZGlzcGxheVZhbHVlIH19IC8+O1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZXN9PntkaXNwbGF5VmFsdWV9PC9kaXY+O1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBjbGFzc05hbWVzID0gYCR7dGhpcy5wcm9wcy5maWVsZE5hbWVDbGFzc30gJHt0aGlzLmRpc3BsYXlDbGFzc31gO1xuICAgIHJldHVybiAoPGRpdiBjbGFzc05hbWU9e3RoaXMuZGlzcGxheUNsYXNzfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWVzfT57dGhpcy5wcm9wcy50aXRsZX08L2Rpdj5cbiAgICAgIHt0aGlzLl9nZXRWYWx1ZSgpfVxuICAgICAge3RoaXMudXNlU2VwYXJhdG9yID8gPGhyIC8+IDogJyd9XG4gICAgPC9kaXY+KTtcbiAgfVxufVxuXG5UZXN0QVBGaWVsZC5wcm9wVHlwZXMgPSB7XG4gIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICB2YWx1ZTogUHJvcFR5cGVzLmFueSxcbiAgaW5saW5lOiBQcm9wVHlwZXMuYm9vbCxcbiAgdXNlSW5uZXJIVE1MOiBQcm9wVHlwZXMuYm9vbCxcbiAgZmllbGRDbGFzczogUHJvcFR5cGVzLnN0cmluZyxcbiAgZmllbGROYW1lQ2xhc3M6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGZpZWxkVmFsdWVDbGFzczogUHJvcFR5cGVzLnN0cmluZyxcbiAgc2VwYXJhdG9yOiBQcm9wVHlwZXMuYm9vbCxcbiAgYW1wTG9nZ2VyOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gIHRyYW5zbGF0ZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZFxufTtcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IFRlc3RBUEZpZWxkIGZyb20gJy4vVGVzdEFQRmllbGQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZXN0aW5nU2VjdGlvbiBleHRlbmRzIENvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGgyPnRlc3RpbmcgY29tcG9uZW50PC9oMj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICB0ZXN0IHRyYW5zbGF0aW9uOiBgREVTS1RPUCA9IHt0aGlzLnByb3BzLnRyYW5zbGF0ZSgnREVTS1RPUCcpfWBcbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgdGVzdCBBUEZpZWxkOlxuICAgICAgICAgIDxUZXN0QVBGaWVsZCBhbXBMb2dnZXI9e3RoaXMucHJvcHMuYW1wTG9nZ2VyfSB0cmFuc2xhdGU9e3RoaXMucHJvcHMudHJhbnNsYXRlfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2Pik7XG4gIH1cbn1cblRlc3RpbmdTZWN0aW9uLnByb3BUeXBlcyA9IHtcbiAgYW1wTG9nZ2VyOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gIHRyYW5zbGF0ZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZFxufTtcbiIsImNvbnN0IFNFUlZFUl9VUkwgPSAnX19TRVJWRVJfVVJMX18nO1xuY29uc3QgQkFTRV9SRVNUX1VSTCA9ICcvcmVzdCc7XG5jb25zdCBQUk9UT0NPTCA9ICdfX1NFUlZFUl9QUk9UT0NPTF9fJztcbmNvbnN0IEJBU0VfUE9SVCA9ICdfX1NFUlZFUl9QT1JUX18nO1xuXG5jb25zdCBDT05ORUNUSU9OX1RJTUVPVVQgPSAyNTAwMDtcbmNvbnN0IENPTk5FQ1RJT05fRk9SQ0VEX1RJTUVPVVQgPSBDT05ORUNUSU9OX1RJTUVPVVQgKyA1MDAwO1xuY29uc3QgVElNRU9VVF9DSEVDS19JTlRFUlZBTCA9IDUwMDA7XG5jb25zdCBNQVhfUkVUUllfQVRFTVBUUyA9IDU7XG5jb25zdCBFUlJPUlNfVE9fUkVUUlkgPSBbJ0VTT0NLRVRUSU1FRE9VVCcsICdFVElNRURPVVQnLCAnRUNPTk5SRVNFVCcsICdFQUlfQUdBSU4nXTtcbmNvbnN0IEVSUk9SU19OT19BTVBfU0VSVkVSID0gWydFQ09OTlJFRlVTRUQnLCAnRU5FVFVOUkVBQ0gnLCAnRU5PRU5UJywgJ0VOT1RGT1VORCcsICdFTkVURE9XTicsICdFSE9TVERPV04nLFxuICAnRUhPU1RVTlJFQUNIJywgJ0VOT05FVCddO1xuY29uc3QgQ09OTkVDVElWSVRZX0NIRUNLX0lOVEVSVkFMID0gJzYwMDAwJzsgLy8gMSBtaW51dGVzXG5cbmNvbnN0IFdPUktTUEFDRV9VUkwgPSAnL3dvcmtzcGFjZSc7XG5jb25zdCBMT0dJTl9VUkwgPSAnLyc7XG5jb25zdCBERVNLVE9QX1VSTCA9ICcvZGVza3RvcCc7XG5jb25zdCBERVNLVE9QX0NVUlJFTlRfVVJMID0gJy9kZXNrdG9wL2N1cnJlbnQnO1xuY29uc3QgU1lOQ1VQX1JFRElSRUNUX1VSTCA9ICcvc3luY1VwL3N5bmMnO1xuY29uc3QgU1lOQ1VQX0hJU1RPUllfVEFSR0VUID0gJ2hpc3RvcnknO1xuY29uc3QgU1lOQ1VQX1NVTU1BUllfVVJMID0gJy9zeW5jVXBTdW1tYXJ5JztcbmNvbnN0IEFDVElWSVRZX1BSRVZJRVdfVVJMID0gJy9hY3Rpdml0eS9wcmV2aWV3JztcbmNvbnN0IEFDVElWSVRZX0VESVRfVVJMID0gJy9hY3Rpdml0eS9lZGl0JztcbmNvbnN0IFVQREFURV9VUkwgPSAnL3VwZGF0ZSc7XG5jb25zdCBTRVRVUF9VUkwgPSAnL3NldHVwJztcbmNvbnN0IFNFVFRJTkdTX1VSTCA9ICcvc2V0dGluZ3MnO1xuXG5jb25zdCBDT0xMRUNUSU9OX1VTRVJTID0gJ3VzZXJzJztcbmNvbnN0IENPTExFQ1RJT05fV09SS1BBQ0VTID0gJ3dvcmtzcGFjZXMnO1xuY29uc3QgQ09MTEVDVElPTl9URUFNTUVNQkVSUyA9ICd0ZWFtbWVtYmVycyc7XG5jb25zdCBDT0xMRUNUSU9OX0NMSUVOVF9TRVRUSU5HUyA9ICdjbGllbnQtc2V0dGluZ3MnO1xuY29uc3QgQ09MTEVDVElPTl9HTE9CQUxfU0VUVElOR1MgPSAnZ2xvYmFsLXNldHRpbmdzJztcbmNvbnN0IENPTExFQ1RJT05fQUNUSVZJVElFUyA9ICdhY3Rpdml0aWVzJztcbmNvbnN0IENPTExFQ1RJT05fRklFTERTID0gJ2ZpZWxkcyc7XG5jb25zdCBDT0xMRUNUSU9OX1BPU1NJQkxFX1ZBTFVFUyA9ICdwb3NzaWJsZS12YWx1ZXMnO1xuY29uc3QgQ09MTEVDVElPTl9TWU5DVVBfTE9HID0gJ3N5bmN1cC1sb2cnO1xuY29uc3QgQ09MTEVDVElPTl9MQU5HUyA9ICdsYW5ndWFnZXMnO1xuY29uc3QgQ09MTEVDVElPTl9XU19TRVRUSU5HUyA9ICd3b3Jrc3BhY2Utc2V0dGluZ3MnO1xuY29uc3QgQ09MTEVDVElPTl9DVVJSRU5DWV9SQVRFUyA9ICdjdXJyZW5jeS1yYXRlcyc7XG5jb25zdCBDT0xMRUNUSU9OX0ZFQVRVUkVfTUFOQUdFUiA9ICdmZWF0dXJlLW1hbmFnZXInO1xuY29uc3QgQ09MTEVDVElPTl9DT05UQUNUUyA9ICdjb250YWN0cyc7XG5jb25zdCBDT0xMRUNUSU9OX1JFU09VUkNFUyA9ICdyZXNvdXJjZXMnO1xuY29uc3QgQ09MTEVDVElPTl9SRVBPU0lUT1JZID0gJ3JlcG9zaXRvcnknO1xuY29uc3QgQ09MTEVDVElPTl9HQVpFVFRFRVIgPSAnZ2F6ZXR0ZWVyJztcbmNvbnN0IENPTExFQ1RJT05fQ0FMRU5EQVJTID0gJ2NhbGVuZGFycyc7XG5jb25zdCBDT0xMRUNUSU9OX0NIQU5HRVNFVFMgPSAnY2hhbmdlc2V0cyc7XG5cbmNvbnN0IEdBWkVUVEVFUl9ESVNUQU5DRV9ESVZJREUgPSAzO1xuXG5jb25zdCBEQl9GSUxFX1BSRUZJWCA9ICdkYXRhYmFzZSc7XG5jb25zdCBEQl9GSUxFX0VYVEVOU0lPTiA9ICcuZGInO1xuY29uc3QgREJfQ09NTU9OX0RBVEFTVE9SRV9PUFRJT05TID0geyBhdXRvbG9hZDogZmFsc2UsIGNvcnJ1cHRBbGVydFRocmVzaG9sZDogMCB9O1xuY29uc3QgREJfQVVUT0NPTVBBQ1RfSU5URVJWQUxfTUlMSVNFQ09ORFMgPSA2MDAwMDtcbmNvbnN0IERCX0RFRkFVTFRfUVVFUllfTElNSVQgPSA5OTk5OTk5OTk7XG5cbmNvbnN0IExBTkdVQUdFX0VOR0xJU0ggPSAnZW4nO1xuY29uc3QgRlNfTE9DQUxFU19ESVJFQ1RPUlkgPSAnbGFuZyc7XG5jb25zdCBMQU5HVUFHRV9NQVNURVJfVFJBTlNMQVRJT05TX0ZJTEUgPSAnbWFzdGVyLXRyYW5zbGF0aW9ucyc7XG5jb25zdCBMQU5HVUFHRV9UUkFOU0xBVElPTlNfRklMRSA9ICd0cmFuc2xhdGlvbnMnO1xuY29uc3QgTEFOR1VBR0VfTkVXX1RSQU5TTEFUSU9OU19NVVNUX1NZTkMgPSAnbXVzdF9zeW5jX3RyYW5zbGF0aW9uLmpzb24nO1xuXG5jb25zdCBBU0FSX0RJUiA9ICdhcHAuYXNhcic7XG5jb25zdCBBUFBfRElSRUNUT1JZID0gJ2FwcCc7XG5jb25zdCBURVNUX0RJUkVDVE9SWSA9ICd0ZXN0JztcbmNvbnN0IFNUQVRJQ19ESVIgPSAnc3RhdGljJztcbmNvbnN0IElNQUdFU19ESVIgPSAnaW1hZ2VzJztcbmNvbnN0IERPQ19JQ09OUyA9ICdkb2MtaWNvbnMnO1xuY29uc3QgREJfU1RBVElDX0RJUiA9ICdkYic7XG5jb25zdCBNSUdSQVRJT05TX0RJUiA9ICdjaGFuZ2Vsb2cnO1xuXG5jb25zdCBIQVNIX0lURVJBVElPTlMgPSAxMDA7XG5jb25zdCBESUdFU1RfQUxHT1JJVEhNX1NIQTEgPSAnU0hBLTEnO1xuY29uc3QgRElHRVNUX0FMR09SSVRITV9TSEEyNTYgPSAnU0hBLTI1Nic7XG5cbmNvbnN0IEFDVElWSVRZX0VESVQgPSAnQUNUSVZJVFlfRURJVCc7XG5jb25zdCBBQ1RJVklUWV9WSUVXID0gJ0FDVElWSVRZX1ZJRVcnO1xuXG5jb25zdCBTWU5DVVBfRk9SQ0VfREFZUyA9IDE0O1xuY29uc3QgU1lOQ1VQX0JFU1RfQkVGT1JFX0RBWVMgPSA3O1xuY29uc3QgU1lOQ1VQX05PX0RBVEUgPSAnMTkwMC0wMS0wMVQwMDowMDowMC4wMDArMDAwMCc7XG5jb25zdCBTWU5DVVBfVFlQRV9UUkFOU0xBVElPTlMgPSAndHJhbnNsYXRpb25zJztcbmNvbnN0IFNZTkNVUF9UWVBFX1VTRVJTID0gJ3VzZXJzJztcbmNvbnN0IFNZTkNVUF9UWVBFX0FTU0VUUyA9ICdhc3NldHMnO1xuY29uc3QgU1lOQ1VQX1RZUEVfV09SS1NQQUNFUyA9ICd3b3Jrc3BhY2VzJztcbmNvbnN0IFNZTkNVUF9UWVBFX0dTID0gJ2dsb2JhbC1zZXR0aW5ncyc7XG5jb25zdCBTWU5DVVBfVFlQRV9FWENIQU5HRV9SQVRFUyA9ICdleGNoYW5nZS1yYXRlcyc7XG5jb25zdCBTWU5DVVBfVFlQRV9GRUFUVVJFX01BTkFHRVIgPSAnZmVhdHVyZS1tYW5hZ2VyJztcbmNvbnN0IFNZTkNVUF9UWVBFX1dPUktTUEFDRV9NRU1CRVJTID0gJ3dvcmtzcGFjZS1tZW1iZXJzJztcbmNvbnN0IFNZTkNVUF9UWVBFX0FMTF9GSUVMRFMgPSAnZmllbGRzJztcbmNvbnN0IFNZTkNVUF9UWVBFX0FDVElWSVRJRVNfUFVMTCA9ICdhY3Rpdml0aWVzJztcbmNvbnN0IFNZTkNVUF9UWVBFX0FDVElWSVRJRVNfUFVTSCA9ICdhY3Rpdml0aWVzLXB1c2gnO1xuY29uc3QgU1lOQ1VQX1RZUEVfQUNUSVZJVFlfRklFTERTID0gJ2FjdGl2aXR5LWZpZWxkcyc7XG5jb25zdCBTWU5DVVBfVFlQRV9BQ1RJVklUWV9GSUVMRFNfU1RSVUNUVVJBTF9DSEFOR0VTID0gJ2FjdGl2aXR5LWZpZWxkcy1zdHJ1Y3R1cmFsLWNoYW5nZXMnO1xuY29uc3QgU1lOQ1VQX1RZUEVfQ09OVEFDVFNfUFVMTCA9ICdjb250YWN0cyc7XG5jb25zdCBTWU5DVVBfVFlQRV9DT05UQUNUU19QVVNIID0gJ2NvbnRhY3RzLXB1c2gnO1xuY29uc3QgU1lOQ1VQX1RZUEVfQUNUSVZJVFlfUE9TU0lCTEVfVkFMVUVTID0gJ2FjdGl2aXR5LXBvc3NpYmxlLXZhbHVlcy1maWVsZHMnO1xuY29uc3QgU1lOQ1VQX1RZUEVfQ09OVEFDVF9GSUVMRFMgPSAnY29udGFjdC1maWVsZHMnO1xuY29uc3QgU1lOQ1VQX1RZUEVfQ09OVEFDVF9GSUVMRFNfU1RSVUNUVVJBTF9DSEFOR0VTID0gJ2NvbnRhY3QtZmllbGRzLXN0cnVjdHVyYWwtY2hhbmdlcyc7XG5jb25zdCBTWU5DVVBfVFlQRV9DT05UQUNUX1BPU1NJQkxFX1ZBTFVFUyA9ICdjb250YWN0LXBvc3NpYmxlLXZhbHVlcy1maWVsZHMnO1xuY29uc3QgU1lOQ1VQX1RZUEVfUkVTT1VSQ0VTX1BVTEwgPSAncmVzb3VyY2VzJztcbmNvbnN0IFNZTkNVUF9UWVBFX1JFU09VUkNFU19QVVNIID0gJ3Jlc291cmNlcy1wdXNoJztcbmNvbnN0IFNZTkNVUF9UWVBFX1JFU09VUkNFX0ZJRUxEUyA9ICdyZXNvdXJjZS1maWVsZHMnO1xuY29uc3QgU1lOQ1VQX1RZUEVfUkVTT1VSQ0VfRklFTERTX1NUUlVDVFVSQUxfQ0hBTkdFUyA9ICdyZXNvdXJjZS1maWVsZHMtc3RydWN0dXJhbC1jaGFuZ2VzJztcbmNvbnN0IFNZTkNVUF9UWVBFX1JFU09VUkNFX1BPU1NJQkxFX1ZBTFVFUyA9ICdyZXNvdXJjZS1wb3NzaWJsZS12YWx1ZXMtZmllbGRzJztcbmNvbnN0IFNZTkNVUF9UWVBFX0NPTU1PTl9QT1NTSUJMRV9WQUxVRVMgPSAnY29tbW9uLXBvc3NpYmxlLXZhbHVlcy1maWVsZHMnO1xuY29uc3QgU1lOQ1VQX1RZUEVfV09SS1NQQUNFX1NFVFRJTkdTID0gJ3dvcmtzcGFjZS1zZXR0aW5ncyc7XG5jb25zdCBTWU5DVVBfVFlQRV9NQVBfVElMRVMgPSAnbWFwLXRpbGVzJztcbmNvbnN0IFNZTkNVUF9UWVBFX0dBWkVUVEVFUiA9ICdsb2NhdG9ycyc7XG5jb25zdCBTWU5DVVBfVFlQRV9DQUxFTkRBUlMgPSAnY2FsZW5kYXJzJztcblxuY29uc3QgU1lOQ1VQX1NUQVRVU19TVUNDRVNTID0gJ1NVQ0NFU1MnO1xuY29uc3QgU1lOQ1VQX1NUQVRVU19GQUlMID0gJ0ZBSUwnO1xuY29uc3QgU1lOQ1VQX1NUQVRVU19QQVJUSUFMID0gJ1BBUlRJQUwnO1xuY29uc3QgU1lOQ1VQX1NUQVRVU19DQU5DRUxFRCA9ICdDQU5DRUxFRCc7XG5jb25zdCBTWU5DVVBfU1lOQ19SRVFVRVNURURfQVQgPSAnc3luYy1kYXRlJztcbmNvbnN0IFNZTkNVUF9TWU5DX1JFUVVFU1RFRF9CWSA9ICdyZXF1ZXN0ZWQtYnknO1xuY29uc3QgU1lOQ1VQX0RBVEVUSU1FX0ZJRUxEID0gJ3RpbWVzdGFtcCc7XG5jb25zdCBTWU5DVVBfRElGRl9MRUZUT1ZFUiA9ICdzeW5jdXAtZGlmZi1sZWZ0b3Zlcic7XG5jb25zdCBTWU5DVVBfREVQRU5ERU5DWV9DSEVDS19JTlRFUlZBTCA9IDEwO1xuY29uc3QgU1lOQ1VQX0RFVEFJTFNfU1lOQ0VEID0gJ3N5bmNlZCc7XG5jb25zdCBTWU5DVVBfREVUQUlMU19VTlNZTkNFRCA9ICd1bnN5bmNlZCc7XG5jb25zdCBTWU5DVVBfUkVTT1VSQ0VfUFVMTF9CQVRDSF9TSVpFID0gMTAwO1xuY29uc3QgU1lOQ1VQX0FDVElWSVRJRVNfUFVMTF9CQVRDSF9TSVpFID0gMTAwO1xuY29uc3QgU1lOQ1VQX0NPTlRBQ1RTX1BVTExfQkFUQ0hfU0laRSA9IDEwMDtcblxuY29uc3QgQUNUSVZJVFlfU1RBVFVTX0RSQUZUID0gJ0FDVElWSVRZX1NUQVRVU19EUkFGVCc7XG5jb25zdCBBQ1RJVklUWV9TVEFUVVNfVU5WQUxJREFURUQgPSAnQUNUSVZJVFlfU1RBVFVTX1VOVkFMSURBVEVEJztcbmNvbnN0IEFDVElWSVRZX1NUQVRVU19WQUxJREFURUQgPSAnQUNUSVZJVFlfU1RBVFVTX1ZBTElEQVRFRCc7XG5cbmNvbnN0IENVUlJFTkNZX0hPVVIgPSAnMDA6MDAnO1xuY29uc3QgREVGQVVMVF9DVVJSRU5DWSA9ICdVU0QnO1xuY29uc3QgUkFURV9TQU1FX0NVUlJFTkNZID0gMTtcbmNvbnN0IFJBVEVfQ1VSUkVOQ1lfTk9UX0ZPVU5EID0gMTtcbmNvbnN0IENVUlJFTkNZX1BBSVIgPSAnY3VycmVuY3ktcGFpcic7XG5jb25zdCBWRVJTSU9OX1BBVFRFUk4gPSAvKFxcZCspXFwuKFxcZCspKFxcLihcXGQrKSk/KC1cXHcrKT8vO1xuY29uc3QgVkVSU0lPTl9QQVRURVJOX0dST1VQU19UT19FWFRSQUNUID0gWzEsIDIsIDQsIDVdO1xuY29uc3QgQU1QX0NPVU5UUllfTE9HTyA9ICdhbXBDb3VudHJ5RmxhZy5wbmcnO1xuY29uc3QgQVNTRVRTX0RJUkVDVE9SWSA9ICdhc3NldHMnO1xuY29uc3QgQkFTRV82NF9QTkdfUFJFRklYID0gJ2RhdGE6aW1hZ2UvcG5nO2Jhc2U2NCwnO1xuLy8gSG9sZHMgdGhlIEJBU0U2NCByZXByZXNlbnRhdGlvbiBvZiBhIGEgdHJhbnNwYXJlbnQgaW1hZ2UgMXgxIGluIGNhc2Ugd2UgZG9uJ3QgeWV0IGhhdmUgdGhlIGNvdW50cnkgZmxhZ1xuY29uc3RcbiAgVFJBTlNQQVJFTlRfRkxBRyA9ICdpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQUVBQUFBQkNBUUFBQUMxSEF3Q0FBQUFDMGxFUVZSNG5HUDZ6d0FBQWdjQkFwb2NNWEVBQUFBQVNVVk9SSzVDWUlJPSc7XG5jb25zdCBIRUxQX1BERl9GSUxFTkFNRSA9ICdhbXAtaGVscCc7XG5jb25zdCBIRUxQX0RJUiA9ICdoZWxwJztcbmNvbnN0IEVORFNfV0lUSF9QVU5DVFVBVElPTl9SRUdFWCA9IC9bLiE/LDs6XSQvO1xuXG5jb25zdCBNQVBfVElMRVNfRElSID0gJ21hcC10aWxlcyc7XG5jb25zdCBUSUxFU19aSVBfRklMRSA9ICdtYXAtdGlsZXMuemlwJztcblxuLyogZXNsaW50LWRpc2FibGUgbWF4LWxlbiAqL1xuY29uc3QgTUFQX01BUktFUl9JTUFHRSA9ICdkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUJrQUFBQXBDQVlBQUFEQWs0TE9BQUFGZ1VsRVFWUjRBYTFYQTVCaldSVE4yb1cxN2QzWWFadHIyOTYySFV6YkROcGpzelcyNG1SdDI4cDQ3djd6cS9iWFp0cnAvbFduWHIzMzdqM25QQ2U4NU5jeXBnU0ZkdWdDcFc1WW9EQU1SYUlNcVJpNmFLcTVFM1lxRFFPM3FBd2pWV3JEOE5jcS9SQnB5a2Q4b1pVYi9rYUp1dG93OHIxYVA5SUkwV21MS0xJc0p5djF3L2txdzlDaDJNWWRCKysxMk9ueGVlL1FNd3ZmNC9Eay9MZnAvaTRueFRYdE9vUTRwVzVBajd3cGljaTFBOWVyZEFOMk9INjR4OE9TUDlqM0Z0M2I3YVdrVGcvRm05MXNpVHJhMGY5b241c1FyOUlOZWpINkNVVVVwYXZqRk5xMUIrT2FkaHhtbmZhOFJmRW1OOFZOQXNRaFBxRjU1eEhrTXp6M2pTbUNoV1U2ZjcvWFpLTkgrOStoQkxPSFlvenVLUVB4eU1QVUtrclgvSzB1V25mRmFKR1MxUVBSdFpzT1B0cjNOc1cwdXloNk5OQ09rVTNZeitiWGJUM0k4RzN4RTVFWExYdENYYmJxd0NPOXpQUVlQUlRaNXZJRFhEN1UrdzdyRkRFb1VVZjdpYkhJUjR5NmJMVlBYcno4SlZaRXFsMTN0cnh3dWUvdURpdmQzZmtXUmJTNi9JQTJiSUQ0dWswVXBGMU44cUxsYkJsWHM0RWU3SExUZlYxajU0QVB2T0RuU2ZPV0JxdEtWdmpnTEt6RjVZZEVrNWV3UmtHbEswaTMzRW9mZmZjN0hUNTZqRDcvNlUrcUgzQ3g3U0JMTm50SDVZSVB2T0RueWZJWFpZUlZEUHFnSHRMczVBQkhEM1l6THVlc3BiN3Q3OUZZMzREak13clZyY1R1d2xUNTVZTVB2T0JuUnJKNFZYVGRObll1ZzV1Y0hMQmpFcHQzMDcwMUEzVHMrSEVhNzN1NmRUM0ZOV3dmbFk4NmVNSFBrK1l1K2k2cHpVcFJyVzdTTkRnNUpIUjRLYXBtTTVXdjJFOFRmY2IxSG9xcUhNSFUrdVdERDd6ZzU0bXo1LzJCU25pemk5VDFEZzRRUVhMVG9HTkNrYjZ0YjFOVStRQWxHcjErK2VBRHJ6aG4vdThRMllaaFFWbFo1K0NBT3RxZmJobWFVQ1MxZXpORlZtMmltRGJQbVBuZzV3bXorZ3doK29IRGNlMGVVdFE2T0dESXlSMHVVaFVzb08zdmZEbW1nT2V6SDBtWk41OXg3TUJpKytXREwxZy9lRWlVM2F2bGlkTzY3MWJrTGZ3Ync1WFYyUDhQem8weWR5NHQyLzBldTMzeFlTT01PRDhoVGY0Q3JCdEdNU29YZlBMY2hYK0owcnVTZVB3M0xaZUswanVQSmJZenJoa0gwaW83QjNrMTY0aGlHdmF3aE9LTUxrclFMeVZwWmc4ckhGVzdFMnVIT0w4ODhJQlBsTloxRlB6c3RTSk02OTRmV3I2UndwdmNKSzYwKzBIQ0lMVEJ6WkxGTmR0QXpKYW9oemU2MFQ4cUJ6eWg1WnVPZzVlN3V3UXBwb2ZFbWYyKytEWXZteVNxR0J1S2FpY0YxYmxRamh1SGR2Q0lNdnA4d2hUVGZaekk3UmxkcHd0U3pMK0YxK3drZFoyVEJPVzJnSUY4OFBCVHpEL2dwZVJFQU1FYnhuSmNhSkhOSHJwemppMGdRQ1M2aGRrRWVZdDlERi8ycVBjRUM4Uk0yOEh3bXIzc2ROeWh0MDBieUF1dDJrM2d1ZldOdGd0T0VPRkdVd2NYV05EYmROYnBnQkd4RXZLa09Rc3hpdkp4MzNpb3cwVnc1UzZTVlRycFZxMTF5c0EyUnA3Z1RmUGZrdGM2emh0WEJCQythZFJMc2hmNnNHMlJmSFBaNUVBYzRzVlo4M3lDTjAwRmsvNGtnZ3U0MFpUdklFbTVnMjRxdFU0S2pCcngvQlRUSDhpZlZBU0FHN2dLcm5XeEpEY1U3eDhYNkVjY3pobTNvNllpY3ZzTFhXZmgzQ2gxVzBrOHgwblhGKzBmRnhndDRwaHo4UXZ5cGl3Q0NGS01xWENucVhFeGpxMTBiZUgrVVVBNytuRzZtZEcvUHUwZjNMZ0ZjR3JsMnMwa05OanBtb0o5bzRCMjlDTU84ZE1UNFE1b3g4dWl0RjZmcXNySk9yOHFud05iUnp2NmhTbkc1d1ArNjRDN2g5bHAzMGhLTnRLZFdqdGRrYnVQQTE5bko3VHozelIvaWJnQVJiaGI0QWxoYXZjQmVibVRIY0ZsMmZ2WUVuVzBveDl4TXhLQlM4YnRKK0tpRWJxOXpBNFJ0aFFYRGhQYTBUOVRFZTY5Z1d1cHdjNnVCVXBocXVYZ2YrL0ZySWp3ZUhRUzQvcGR1TWU1RVJVTUhVZDl4djhaUjk4Q3hrUzRGMm4zRVVyVVoxMEVZTnc3QldtOXgxR2lQc3NpM0dnaUdSREtXUllaZlhsT04rZGZOYk0rR2dJd1lkd0FBQUFBU1VWT1JLNUNZSUk9JztcbmNvbnN0IE1BUF9NQVJLRVJfU0hBRE9XID0gJ2RhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQ2tBQUFBcENBUUFBQUFDYWNoOUFBQUNNVWxFUVZSNEFlM1NoWTdqUUJBRTBBb3ovZjkvSFRNemhnMXpyZEtVckpiZHgrS2QybkQ4Vk51ZGZzTC9UaC8vL2R5UU4yVEg2ZjN5L0JHcEMzNzlyVitTK3FxZXRCT3hJbU5RWEw4SkNBcjJWNGlNUVhIR05KeGVDZlpYaFNSQmNRTWZ2a09XVWR0ZnpsTGdBRU5tWkRjbW8yVFZtdDhPU00yZVh4QnAzRGpIU01GdXRxUzdTYm1lbXpCaVIreHBLQ05VSVJrZGtrWXhoQWt5R29CdnlRRkVKRWVmd1NtbXZCZkp1SjZhS3FLV25Ba3ZHWk9hWlhUVWdGcVlVTFdOU0hVY2tadVIxSElJaW1VRXh1dFJ4d3pPTFJPSUc0dkttQ0tRdDM2NG1JbGhTeXpBZjFtOWxIWkhKWnJsQU9NTXp0UlJpS2ltcC9ycGRKRGM5QXdyeTV4VFpDdGU3Rkh0dVM4d0pnZVlHcmV4Mjh4TlRkMDg2RGlrN3ZVTXNjUU9hOHk0RG9HdENDU2tBS2xOd3BnTnRwaGpyQzZNSUhVa1I2WVd4eHM2U2M1eHFuMjIybW1DUkZ6SXQ4bEVkS3graWtDdGc5MXFTMldwd1ZmQmVsSkNpUUp3dnppeGZJOWN4WlFXZ2lTSmVsS253QkVsS1l0RE9iMk1GYmhtVWlnYlJlUUJWMENnNCtxTVhTeFhTeUdVbjRVYkY4bCs3cWRTR25UQzBYTENtYWhJZ1VITGhMT2hwVkN0dzRDellYdkxRV1FiSk5teG9Dc09LQXhTZ0JKbm83NWF2b2xrUnc4aUlBRmNzZGMwMmU5aXlDZDh0SHdtZVNTb0tUb3dJZ3ZzY1NHWlVPQTdQdUNONWIyQlg5bVFNN1Mwd1loTU5VNzR6Z3NQQmozSFU3d2d1QWZueHhqRlFHQkU2cHdOK0dqTUU5ekhZN3pHcDh3VnhNU2hZWDlOWHZFV0QzSGJ3SmY0Z2lPNENGSVF4WFNjSDEvVE0rMDRra0JpQUFBQUFFbEZUa1N1UW1DQyc7XG5jb25zdCBNQVBfTUFSS0VSX0NJUkNMRV9SRUQgPSAnZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFCUUFBQUFVQ0FZQUFBQ05pUjBOQUFBQUJHZEJUVUVBQUxHUEMveGhCUUFBQUNCalNGSk5BQUI2SmdBQWdJUUFBUG9BQUFDQTZBQUFkVEFBQU9wZ0FBQTZtQUFBRjNDY3VsRThBQUFBQm1KTFIwUUEvd0QvQVArZ3ZhZVRBQUFBQjNSSlRVVUg0Z2NiRndvZ2VvaGhFQUFBQTFsSlJFRlVPTXVsbGMxckhHVWN4eisvWjJaMjB6R0U3bHV5UWJ5SWRpRXhyZTZhTnZTeVNFQkJLQjcxVkFJNW1HSkE5ZzhRcFI0OGFWR0s2SzE2MHB0WUQ3V3hoNENVa0pyRkdwS3lLV2dRbW5YZmFadDl5V2FlZVR6c1RFeGoxWU8vMC9ETXpHZCtiOS92Q0VIOGN1NTFqc1FRa0FFbWdGUndWZ00yZ1JMUU8vend5YXRmQXlDUGdVV0FWNEE1WUFaSUFuWnd6d1Bxd0Fwd0JmZ2U2QitHeWhGWUduZ1hPQSs0QUJqemFONGk0VlVIK0JKNEQ2aUVoL1lSMkdmQWF3Y2dZMUJQdUZqRHd3RG8zVjM4ZG1jQUZYR0JCV0FjZURPRWhzQklrTmtBNXZzNHlRU3gyVHdqcDNQWThkaWczbWFMKzZ0cnRHNHM0OVVib0JUQk8yWGdiYUJ2WGNnOEIvQXE4RDdnNFBzTVBmTTBUeFhld3MwK3p4OTM3dkQ3OG85VU56YlJqazNxcFR3akw1eWsrK3MyWHFNWnRtQUMrQm5Zc29OcHpnRXV4dUFrRXp4NVlaNitZMU44NXlLMTlRMk01dzNhWjl1a3BpYkpGaFlaWDVqbnR3OCtoR1lyTEg4T1dGTEJhc3lFZll2TjVySEdSaWxldWt5bGVCdU1RU3dMc1N3d2hrcnhOc1ZMbDdIVG8wVHpaK2w2SHNHWVpvQ01DdEpOaGdNWU9aMmp2UG9UdGZVTmxHMGQzVTJVYlZGYjM2QnlhNDM0bVdscUNqb0RhQktZVU1IUzJnRFc4REIyUEVacjYrNUJtWThMNDNrMFMxdTR5UVMrZTR5ZFRwdU8xclpBeXViL2hnZzk3Vkh1dGprZWlhSVl5TWtMOTh4cnRvaGxua1hzZi82VzJEYnh6QW02OVFiOUJ3OFJFWHBhNzFkNzNhcGlvTTA2SXZqdER2ZFgxeGlmZnBIVTFDUytwLzhHOHoxTmFtcVM5SFNPZXpkWDJHKzNRUVNCdXNDbVlpRDBsVEQ5MW8xbGRLVkt0ckRJV1BZVWlHQzB4bWdOSW94bFQ1RXJMTEs3VTJiNzJ0SmhLYTQ0U3BWQ0xaOER2Z0xjY0xISEYrYXgwNk5VYnEzUkxHMEJFTStjSUQyZFkzZW56TnBIbjlBczNVVUdhbWxiSW0vNHhud1hBaVBBeDRFMndmY2hFU2VhUDB2OHpEUnVNZ0ZBdDk3ZzNzMFZ0cTh0MGFuV1FoZ0NuMFl0cStBYjB6L3NObVBBNTRmTm9ldDUxQlQ0N2pFUW9mL2c0Vjg5QzBvVitNWVN0V0F3RllVODRqWVZCcTVSQnM0ajRycU9ROHJ6MktrMTZHa1BFVG5JQ21nTGZHR0p1dWhqS3I0eHhJZWkvMjJ3QXNtdTF2Wk90MDFQNjMwSkRGYUpYSEdVdXI3diszMXREUEZJbEpkL3VNckJpUDd0RnlDUWF2VDNxUGE2VllGTlI2blNudFo3amxJWTRIZ2t3dXoxYndINEU1bUNYSUJMUTVIbkFBQUFKWFJGV0hSa1lYUmxPbU55WldGMFpRQXlNREU0TFRBM0xUSTNWREl4T2pFd09qTXlLekF5T2pBdzdxNkdud0FBQUNWMFJWaDBaR0YwWlRwdGIyUnBabmtBTWpBeE9DMHdOeTB5TjFReU1Ub3hNRG96TWlzd01qb3dNSi96UGlNQUFBQUFTVVZPUks1Q1lJST0nO1xuY29uc3QgTUFQX01BUktFUl9DSVJDTEVfR1JFRU4gPSAnZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFCUUFBQUFVQ0FZQUFBQ05pUjBOQUFBQUJtSkxSMFFBL3dEL0FQK2d2YWVUQUFBQUNYQklXWE1BQUFzVEFBQUxFd0VBbXB3WUFBQUFCM1JKVFVVSDRnY2JGQmc2L1ZoVzRBQUFBNVZKUkVGVU9NdWxsVUZvSEZVWXgzL3Z6ZXhrdThWa2R6UHJwZ3BXTkpvbTRKbzBOYVNuSWtIckpSYjFVRkFzWG1xM0tsaXZKcUNIaEo0cXNRZHRta3NWRktRZ1lrVGEwRXJ4VUNNaGFkMUNRclEwRGJhSjI5MWtkOTFrSnJzN004OURacG8wQkJUOHoyVjQ3L0Y3My9mZTkvK2V3RmVtOXpDYjFUOFlEUU10UUJ1UThJZHp3RFF3TzlCWFhOdThQalg2RFFCaUs2eC9NR29BQjRHM2dHN0FCSFIvMmdIeXdEaHdEcmc0MEZlc2JvYUtMYkFtNENQZ0NCQUI4UEFlaUZ3aWcxOEwrQkw0ZUtDdm1OMllmeEIyQmtnREVZLzFMeUoza0F5WkpFTW1FYm1EWU56Zk1BME05dzlHa3dGSFpIb1BCMmwrNmkvQXc2TXhGS01udHArdStoUnh2UUdBWmFmRVJPa0dsd3RYeVR1RnpkR2VBZDRmNkN0V2c3TTU2S2VKaDBkemVEZkhIMzJkcE5iSXhHS0dTNFdmQVdpSk5kTzc2M202NmxOOGZ2ZHJicTdOQjlBandJL0FxSGc1Y3l3TWZBVzhHa1QyNFdOcDlLckcwTlFJbWZ3TWp1Y0FvRXVkbE5uS2liMUhxZW9WVHM2ZFpabFNBUDBXZUVQNnBkRWR4TjRUMjA5U2EyUm9hb1RKN0hXVVVtaENReE1hU2lrbXM5Y1ptaHFoU1grWUEzWDdjRzBISlJRK28wWDZkV1lHRjlCVm4rTFh4V3RrOGpQbzBtQ3JkR21ReWM4d2tmMk43bmdISXVmaVdEV1VVQ2JRSnYyaTFRRWUwbllTMXh2NG96QjNQODN0NUhnT3Z5L2Z3b3pFaVhoaHJJVXludVhxU3FpRTVIOUtJbkFyRHRaZlpXcExGWFRmVGc1Z2xOMVZscDBTTGJGbWRLbWpsTm9Xb2t1ZHArTlBrTE9YS05YS0NDRndiYWRtVjFmdVNkK2JlWW5FOG13bVNqZDRibGVLbE5tSzQxVzNTYmRLeW15bHE2bWRYKzVPc2xxekVFcUFKQTlNUzJEVzl5WUFsd3RYeWJwTG5OaDdsTTVrKy9ydXlzVlZMa0lJT3BQdGZORDVOZ3NyV1M3Y3ZySU9XOWU0TkxSWjdmeWRadWVubnJBTkhCS0kwS3BuYzh2K2s0NkdQZlR1Zm9Fbm80L3p5TTRrejVoN2VPV3BsM2l6N1RVS2F5Vk9UUTR6WDc2REZCSmdWVWpSZjN6bzc1bkFLUmQ5bzZjbGtwdHI4NXljTzh1QnVuMTB4enQ0TnRHMjNydnNKYzdQL3NDRjIxZkkycmtONjBtK2tJWTJGcEp5bzl2NEJoOEdEZ1VXZEcwSGtYT0plR0VrZ2xLdGZQL01oQkFCN0R1aHFmUjdwNjJzUkd5NDIyOUJ4M3lqV3hLSkhnbWhFaG81ZDVrRks0dmwyRWhrQUZ0RjhwblFWUHJkMDFiV1ZZcG9uZkh2RFZZSlpicTJvOXVMSzdpMlUvTnZjMXdJY1U0YTJ0ZzduNVNxcmxMRWpUcGV2RFNLK0M5UGdCSXFVVnVxWU9kVzdnSFQwdEJtMDZlS2xaQ1VLQ0JxR1BTTWZRL0FQeTFYZzJ2NktJc0ZBQUFBQUVsRlRrU3VRbUNDJztcbi8qIGVzbGludC1lbmFibGUgbWF4LWxlbiAqL1xuY29uc3QgUE9MWUdPTl9CQVNFX0NPTE9SID0gJyMzMzg4ZmYnO1xuXG5jb25zdCBER19DT01QQU5ZX05BTUUgPSAnRGV2ZWxvcG1lbnQgR2F0ZXdheSc7XG5jb25zdCBER19BRERSRVNTXzEgPSAnMTExMCBWZXJtb250IEF2ZSwgTlcsIFN1aXRlIDUwMCc7XG5jb25zdCBER19BRERSRVNTXzIgPSAnV2FzaGluZ3RvbiwgREMgMjAwMDUgVVNBJztcbmNvbnN0IERHX0NPTlRBQ1RfSU5GTyA9ICdpbmZvQGRldmVsb3BtZW50Z2F0ZXdheS5vcmcsIFRlbDogKzEuMjAyLjU3Mi45MjAwLCBGYXg6ICsxIDIwMi41NzIuOTI5MCc7XG5cbmNvbnN0IExPR19ESVIgPSAnbG9ncyc7XG5jb25zdCBMT0dfRklMRV9OQU1FID0gJ2FtcG9mZmxpbmUnO1xuY29uc3QgTE9HX0ZJTEVfRVhURU5TSU9OID0gJ2xvZyc7XG5cbi8vIE1lc3NhZ2UgY29uc3RhbnRzXG4vLyB0b3RhbCBhbW91bnQgb2YgdGltZSB0aGUgbWVzc2FnZSBzdGF5cyB2aXNpYmxlXG5jb25zdCBNRVNTQUdFX1RJTUVPVVQgPSAxMCAqIDEwMDA7XG4vLyB3aGVuIGl0J3MgdGhpcyBhbW91bnQgb2YgdGltZSBsZWZ0LCB3ZSBub2ZpdHkgdGhlIHVzZXIgdGhhdCB0aGUgbWVzc2FnZSBpcyBhYm91dCB0byBkaXNhcHBlYXJcbmNvbnN0IE1FU1NBR0VfRElTQVBQRUFSX1RJTUVPVVQgPSBNRVNTQUdFX1RJTUVPVVQgLyA1O1xuY29uc3QgTUVTU0FHRV9DSEVDS19JTlRFUlZBTCA9IDEwMDtcbi8vIGhvdyBsb25nIHNob3VsZCB0aGUgZW50ZXIvbGVhdmUgYW5pbWF0aW9uIHJ1bihtcylcbi8vIChpZiB5b3UgY2hhbmdlIHRoaXMgeW91J2xsIHdhbm5hIGNoYW5nZSBpdCBpbiBzdHlsZS5jc3MsIHRvbylcbmNvbnN0IE1FU1NBR0VfQU5JTUFUSU9OX0RVUkFUSU9OID0gNTAwO1xuXG4vLyB0aGlzIGlzIHRoZSBpbnRlcm5hbCBkYXRlIGZvcm1hdCB1c2VkIHRvIHN0b3JlIGFuZCBzeW5jIHVwIGRhdGVzXG5jb25zdCBJTlRFUk5BTF9EQVRFX0ZPUk1BVCA9ICdZWVlZLU1NLUREVEhIOm1tOnNzLlNTU1onO1xuLy8gY3VycmVudGx5IHN1cHBvcnRlZCBtYXggJiBtaW4geWVhcnMgaW4gQU1QLCBpLmUuIGZyb20gMTk3MC0wMS0wMSB0aWxsIDIwNTAtMTItMzFcbmNvbnN0IE1JTl9TVVBQT1JURURfWUVBUiA9IDE5NzA7XG5jb25zdCBNQVhfU1VQUE9SVEVEX1lFQVIgPSAyMDUwO1xuXG5jb25zdCBVUERBVEVTX0RJUiA9ICd1cGRhdGVzJztcbmNvbnN0IENPTlRFTlRfRElTUE9TSVRJT05fSEVBREVSID0gJ0NvbnRlbnQtRGlzcG9zaXRpb24nO1xuY29uc3QgVVBEQVRFX1RNUF9GSUxFID0gJ2FtcC1vZmZsaW5lLWluc3RhbGxlci50bXAnO1xuXG5jb25zdCBPVEhFUl9JRCA9IDk5OTk5OTk5OTtcbmNvbnN0IE5SX1NZTkNfSElTVE9SWV9FTlRSSUVTID0gMjA7XG5jb25zdCBOUl9MT0dfRklMRVMgPSAxMDA7XG4vLyBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9JU09fODYwMSNEdXJhdGlvbnMsIGV4YW1wbGU6IFwiUDFZMk0xMERUMkgzME1cIlxuY29uc3QgT0xEX1NZTkNfTE9HU19EVVJBVElPTl9JU09fODYwMSA9ICdQNk0nO1xuY29uc3QgTlJfT0xEX1NZTkNfTE9HU19UT19LRUVQX01JTklNVU0gPSBOUl9TWU5DX0hJU1RPUllfRU5UUklFUztcblxuY29uc3QgTUFTVEVSX0JSQU5DSCA9ICdtYXN0ZXInO1xuY29uc3QgREVWRUxPUF9CUkFOQ0ggPSAnZGV2ZWxvcCc7XG5jb25zdCBSRUxFQVNFX0JSQU5DSF9SRUdFWCA9IC9yZWxlYXNlXFwvLztcbmNvbnN0IFJFTEVBU0VfQlJBTkNIRVMgPSBbTUFTVEVSX0JSQU5DSCwgUkVMRUFTRV9CUkFOQ0hfUkVHRVhdO1xuXG5jb25zdCBESVNBQkxFX0NIQU5HRUxPR1MgPSAnRElTQUJMRV9DSEFOR0VMT0dTJztcblxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuZnJlZXplKHtcbiAgU0VSVkVSX1VSTCxcbiAgQkFTRV9SRVNUX1VSTCxcbiAgUFJPVE9DT0wsXG4gIEJBU0VfUE9SVCxcbiAgQ09OTkVDVElPTl9USU1FT1VULFxuICBDT05ORUNUSU9OX0ZPUkNFRF9USU1FT1VULFxuICBUSU1FT1VUX0NIRUNLX0lOVEVSVkFMLFxuICBNQVhfUkVUUllfQVRFTVBUUyxcbiAgRVJST1JTX1RPX1JFVFJZLFxuICBFUlJPUlNfTk9fQU1QX1NFUlZFUixcbiAgQ09OTkVDVElWSVRZX0NIRUNLX0lOVEVSVkFMLFxuICBXT1JLU1BBQ0VfVVJMLFxuICBMT0dJTl9VUkwsXG4gIERFU0tUT1BfVVJMLFxuICBERVNLVE9QX0NVUlJFTlRfVVJMLFxuICBTWU5DVVBfUkVESVJFQ1RfVVJMLFxuICBTWU5DVVBfSElTVE9SWV9UQVJHRVQsXG4gIFNZTkNVUF9TVU1NQVJZX1VSTCxcbiAgQUNUSVZJVFlfUFJFVklFV19VUkwsXG4gIEFDVElWSVRZX0VESVRfVVJMLFxuICBVUERBVEVfVVJMLFxuICBTRVRVUF9VUkwsXG4gIFNFVFRJTkdTX1VSTCxcbiAgQ09MTEVDVElPTl9VU0VSUyxcbiAgQ09MTEVDVElPTl9XT1JLUEFDRVMsXG4gIENPTExFQ1RJT05fVEVBTU1FTUJFUlMsXG4gIENPTExFQ1RJT05fQ0xJRU5UX1NFVFRJTkdTLFxuICBDT0xMRUNUSU9OX0dMT0JBTF9TRVRUSU5HUyxcbiAgQ09MTEVDVElPTl9BQ1RJVklUSUVTLFxuICBDT0xMRUNUSU9OX0ZJRUxEUyxcbiAgQ09MTEVDVElPTl9QT1NTSUJMRV9WQUxVRVMsXG4gIENPTExFQ1RJT05fU1lOQ1VQX0xPRyxcbiAgQ09MTEVDVElPTl9MQU5HUyxcbiAgQ09MTEVDVElPTl9XU19TRVRUSU5HUyxcbiAgQ09MTEVDVElPTl9DVVJSRU5DWV9SQVRFUyxcbiAgQ09MTEVDVElPTl9GRUFUVVJFX01BTkFHRVIsXG4gIENPTExFQ1RJT05fQ09OVEFDVFMsXG4gIENPTExFQ1RJT05fUkVTT1VSQ0VTLFxuICBDT0xMRUNUSU9OX1JFUE9TSVRPUlksXG4gIENPTExFQ1RJT05fR0FaRVRURUVSLFxuICBDT0xMRUNUSU9OX0NBTEVOREFSUyxcbiAgQ09MTEVDVElPTl9DSEFOR0VTRVRTLFxuICBHQVpFVFRFRVJfRElTVEFOQ0VfRElWSURFLFxuICBEQl9GSUxFX1BSRUZJWCxcbiAgREJfRklMRV9FWFRFTlNJT04sXG4gIERCX0NPTU1PTl9EQVRBU1RPUkVfT1BUSU9OUyxcbiAgREJfQVVUT0NPTVBBQ1RfSU5URVJWQUxfTUlMSVNFQ09ORFMsXG4gIERCX0RFRkFVTFRfUVVFUllfTElNSVQsXG4gIExBTkdVQUdFX0VOR0xJU0gsXG4gIEZTX0xPQ0FMRVNfRElSRUNUT1JZLFxuICBMQU5HVUFHRV9NQVNURVJfVFJBTlNMQVRJT05TX0ZJTEUsXG4gIExBTkdVQUdFX1RSQU5TTEFUSU9OU19GSUxFLFxuICBMQU5HVUFHRV9ORVdfVFJBTlNMQVRJT05TX01VU1RfU1lOQyxcbiAgQVNBUl9ESVIsXG4gIEFQUF9ESVJFQ1RPUlksXG4gIFRFU1RfRElSRUNUT1JZLFxuICBTVEFUSUNfRElSLFxuICBJTUFHRVNfRElSLFxuICBET0NfSUNPTlMsXG4gIERCX1NUQVRJQ19ESVIsXG4gIE1JR1JBVElPTlNfRElSLFxuICBIQVNIX0lURVJBVElPTlMsXG4gIERJR0VTVF9BTEdPUklUSE1fU0hBMSxcbiAgRElHRVNUX0FMR09SSVRITV9TSEEyNTYsXG4gIEFDVElWSVRZX0VESVQsXG4gIEFDVElWSVRZX1ZJRVcsXG4gIFNZTkNVUF9GT1JDRV9EQVlTLFxuICBTWU5DVVBfQkVTVF9CRUZPUkVfREFZUyxcbiAgU1lOQ1VQX05PX0RBVEUsXG4gIFNZTkNVUF9UWVBFX1RSQU5TTEFUSU9OUyxcbiAgU1lOQ1VQX1RZUEVfVVNFUlMsXG4gIFNZTkNVUF9UWVBFX0FTU0VUUyxcbiAgU1lOQ1VQX1RZUEVfV09SS1NQQUNFUyxcbiAgU1lOQ1VQX1RZUEVfR1MsXG4gIFNZTkNVUF9UWVBFX0VYQ0hBTkdFX1JBVEVTLFxuICBTWU5DVVBfVFlQRV9GRUFUVVJFX01BTkFHRVIsXG4gIFNZTkNVUF9UWVBFX1dPUktTUEFDRV9NRU1CRVJTLFxuICBTWU5DVVBfVFlQRV9BTExfRklFTERTLFxuICBTWU5DVVBfVFlQRV9BQ1RJVklUSUVTX1BVTEwsXG4gIFNZTkNVUF9UWVBFX0FDVElWSVRJRVNfUFVTSCxcbiAgU1lOQ1VQX1RZUEVfQUNUSVZJVFlfRklFTERTLFxuICBTWU5DVVBfVFlQRV9BQ1RJVklUWV9GSUVMRFNfU1RSVUNUVVJBTF9DSEFOR0VTLFxuICBTWU5DVVBfVFlQRV9DT05UQUNUU19QVUxMLFxuICBTWU5DVVBfVFlQRV9DT05UQUNUU19QVVNILFxuICBTWU5DVVBfVFlQRV9BQ1RJVklUWV9QT1NTSUJMRV9WQUxVRVMsXG4gIFNZTkNVUF9UWVBFX0NPTlRBQ1RfRklFTERTLFxuICBTWU5DVVBfVFlQRV9DT05UQUNUX0ZJRUxEU19TVFJVQ1RVUkFMX0NIQU5HRVMsXG4gIFNZTkNVUF9UWVBFX0NPTlRBQ1RfUE9TU0lCTEVfVkFMVUVTLFxuICBTWU5DVVBfVFlQRV9SRVNPVVJDRVNfUFVMTCxcbiAgU1lOQ1VQX1RZUEVfUkVTT1VSQ0VTX1BVU0gsXG4gIFNZTkNVUF9UWVBFX1JFU09VUkNFX0ZJRUxEUyxcbiAgU1lOQ1VQX1RZUEVfUkVTT1VSQ0VfRklFTERTX1NUUlVDVFVSQUxfQ0hBTkdFUyxcbiAgU1lOQ1VQX1RZUEVfUkVTT1VSQ0VfUE9TU0lCTEVfVkFMVUVTLFxuICBTWU5DVVBfVFlQRV9DT01NT05fUE9TU0lCTEVfVkFMVUVTLFxuICBTWU5DVVBfVFlQRV9XT1JLU1BBQ0VfU0VUVElOR1MsXG4gIFNZTkNVUF9UWVBFX01BUF9USUxFUyxcbiAgU1lOQ1VQX1RZUEVfR0FaRVRURUVSLFxuICBTWU5DVVBfVFlQRV9DQUxFTkRBUlMsXG4gIFNZTkNVUF9TVEFUVVNfU1VDQ0VTUyxcbiAgU1lOQ1VQX1NUQVRVU19GQUlMLFxuICBTWU5DVVBfU1RBVFVTX1BBUlRJQUwsXG4gIFNZTkNVUF9TVEFUVVNfQ0FOQ0VMRUQsXG4gIFNZTkNVUF9TWU5DX1JFUVVFU1RFRF9BVCxcbiAgU1lOQ1VQX1NZTkNfUkVRVUVTVEVEX0JZLFxuICBTWU5DVVBfREFURVRJTUVfRklFTEQsXG4gIFNZTkNVUF9ESUZGX0xFRlRPVkVSLFxuICBTWU5DVVBfREVQRU5ERU5DWV9DSEVDS19JTlRFUlZBTCxcbiAgU1lOQ1VQX0RFVEFJTFNfU1lOQ0VELFxuICBTWU5DVVBfREVUQUlMU19VTlNZTkNFRCxcbiAgU1lOQ1VQX1JFU09VUkNFX1BVTExfQkFUQ0hfU0laRSxcbiAgU1lOQ1VQX0FDVElWSVRJRVNfUFVMTF9CQVRDSF9TSVpFLFxuICBTWU5DVVBfQ09OVEFDVFNfUFVMTF9CQVRDSF9TSVpFLFxuICBBQ1RJVklUWV9TVEFUVVNfRFJBRlQsXG4gIEFDVElWSVRZX1NUQVRVU19VTlZBTElEQVRFRCxcbiAgQUNUSVZJVFlfU1RBVFVTX1ZBTElEQVRFRCxcbiAgQ1VSUkVOQ1lfSE9VUixcbiAgREVGQVVMVF9DVVJSRU5DWSxcbiAgUkFURV9TQU1FX0NVUlJFTkNZLFxuICBSQVRFX0NVUlJFTkNZX05PVF9GT1VORCxcbiAgQ1VSUkVOQ1lfUEFJUixcbiAgVkVSU0lPTl9QQVRURVJOLFxuICBWRVJTSU9OX1BBVFRFUk5fR1JPVVBTX1RPX0VYVFJBQ1QsXG4gIEFNUF9DT1VOVFJZX0xPR08sXG4gIEFTU0VUU19ESVJFQ1RPUlksXG4gIEJBU0VfNjRfUE5HX1BSRUZJWCxcbiAgVFJBTlNQQVJFTlRfRkxBRyxcbiAgSEVMUF9QREZfRklMRU5BTUUsXG4gIEhFTFBfRElSLFxuICBFTkRTX1dJVEhfUFVOQ1RVQVRJT05fUkVHRVgsXG4gIE1BUF9USUxFU19ESVIsXG4gIFRJTEVTX1pJUF9GSUxFLFxuICBNQVBfTUFSS0VSX0lNQUdFLFxuICBNQVBfTUFSS0VSX1NIQURPVyxcbiAgTUFQX01BUktFUl9DSVJDTEVfUkVELFxuICBNQVBfTUFSS0VSX0NJUkNMRV9HUkVFTixcbiAgUE9MWUdPTl9CQVNFX0NPTE9SLFxuICBER19DT01QQU5ZX05BTUUsXG4gIERHX0FERFJFU1NfMSxcbiAgREdfQUREUkVTU18yLFxuICBER19DT05UQUNUX0lORk8sXG4gIExPR19ESVIsXG4gIExPR19GSUxFX05BTUUsXG4gIExPR19GSUxFX0VYVEVOU0lPTixcbiAgTUVTU0FHRV9USU1FT1VULFxuICBNRVNTQUdFX0RJU0FQUEVBUl9USU1FT1VULFxuICBNRVNTQUdFX0NIRUNLX0lOVEVSVkFMLFxuICBNRVNTQUdFX0FOSU1BVElPTl9EVVJBVElPTixcbiAgSU5URVJOQUxfREFURV9GT1JNQVQsXG4gIE1JTl9TVVBQT1JURURfWUVBUixcbiAgTUFYX1NVUFBPUlRFRF9ZRUFSLFxuICBVUERBVEVTX0RJUixcbiAgQ09OVEVOVF9ESVNQT1NJVElPTl9IRUFERVIsXG4gIFVQREFURV9UTVBfRklMRSxcbiAgT1RIRVJfSUQsXG4gIE5SX1NZTkNfSElTVE9SWV9FTlRSSUVTLFxuICBOUl9MT0dfRklMRVMsXG4gIE9MRF9TWU5DX0xPR1NfRFVSQVRJT05fSVNPXzg2MDEsXG4gIE5SX09MRF9TWU5DX0xPR1NfVE9fS0VFUF9NSU5JTVVNLFxuICBNQVNURVJfQlJBTkNILFxuICBERVZFTE9QX0JSQU5DSCxcbiAgUkVMRUFTRV9CUkFOQ0hfUkVHRVgsXG4gIFJFTEVBU0VfQlJBTkNIRVMsXG4gIERJU0FCTEVfQ0hBTkdFTE9HU1xufSk7XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBtYXgtbGVuICovXG5cbi8qKlxuICogQGF1dGhvciBOYWRlamRhIE1hbmRyZXNjdVxuICovXG5cbmNvbnN0IFBVQkxJQ19WSUVXX0NIQU5HRV9QQVNTV09SRCA9ICcvUFVCTElDIFZJRVcvTG9naW4gLSBVc2VyIE1hbmFnZW1lbnQvQ2hhbmdlIFBhc3N3b3JkJztcbmNvbnN0IFBVQkxJQ19WSUVXX1RST1VCTEVfU0lHTl9JTiA9ICcvUFVCTElDIFZJRVcvTG9naW4gLSBVc2VyIE1hbmFnZW1lbnQvVHJvdWJsZSBzaWduaW5nIGluJztcbmNvbnN0IEFDVElWSVRZX0RFTElWRVJZX1JBVEUgPSAnL1BST0pFQ1QgTUFOQUdFTUVOVC9GdW5kaW5nL0Z1bmRpbmcgSW5mb3JtYXRpb24vRGVsaXZlcnkgcmF0ZSc7XG5jb25zdCBBQ1RJVklUWV9QUk9KRUNUX0lEX0FORF9QTEFOTklORyA9ICcvUFJPSkVDVCBNQU5BR0VNRU5UL1Byb2plY3QgSUQgYW5kIFBsYW5uaW5nJztcbmNvbnN0IEFDVElWSVRZX0RVUkFUSU9OX09GX1BST0pFQ1QgPSAnL1BST0pFQ1QgTUFOQUdFTUVOVC9Qcm9qZWN0IElEIGFuZCBQbGFubmluZy9QbGFubmluZy9EdXJhdGlvbiBvZiBQcm9qZWN0JztcbmNvbnN0IEFDVElWSVRZX1RFQU1fTEVBREVSID0gJy9QUk9KRUNUIE1BTkFHRU1FTlQvUHJvamVjdCBJRCBhbmQgUGxhbm5pbmcvSWRlbnRpZmljYXRpb24vRGF0YSBUZWFtIExlYWRlcic7XG5jb25zdCBBQ1RJVklUWV9TQU1FX0FTX1BST1BPU0VEX1NUQVJUX0RBVEUgPVxuICAnL0FjdGl2aXR5IEZvcm0vUGxhbm5pbmcvQWN0dWFsIFN0YXJ0IERhdGUvU2FtZSBBcyBQcm9wb3NlZCBTdGFydCBEYXRlJztcbmNvbnN0IEFDVElWSVRZX1NBTUVfQVNfUFJPUE9TRURfQVBQUk9WQUxfREFURSA9XG4gICcvQWN0aXZpdHkgRm9ybS9QbGFubmluZy9BY3R1YWwgQXBwcm92YWwgRGF0ZS9TYW1lIEFzIFByb3Bvc2VkIEFwcHJvdmFsIERhdGUnO1xuY29uc3QgQUNUSVZJVFlfSURFTlRJRklDQVRJT04gPSAnL0FjdGl2aXR5IEZvcm0vSWRlbnRpZmljYXRpb24nO1xuY29uc3QgQUNUSVZJVFlfTEFTVF9VUERBVEVEX0JZID0gJy9BY3Rpdml0eSBGb3JtL0lkZW50aWZpY2F0aW9uL0FjdGl2aXR5IExhc3QgVXBkYXRlZCBieSc7XG5jb25zdCBBQ1RJVklUWV9MQVNUX1VQREFURURfT04gPSAnL0FjdGl2aXR5IEZvcm0vSWRlbnRpZmljYXRpb24vQWN0aXZpdHkgVXBkYXRlZCBPbic7XG5jb25zdCBBQ1RJVklUWV9GVU5ESU5HID0gJy9BY3Rpdml0eSBGb3JtL0Z1bmRpbmcnO1xuY29uc3QgQUZfRlVORElOR19GVU5ESU5HR1JPVVBfRlVORElOR0lURU0gPSBgJHtBQ1RJVklUWV9GVU5ESU5HfS9GdW5kaW5nIEdyb3VwL0Z1bmRpbmcgSXRlbWA7XG5jb25zdCBBQ1RJVklUWV9TRUNUT1JTID0gJy9BY3Rpdml0eSBGb3JtL1NlY3RvcnMnO1xuY29uc3QgQUNUSVZJVFlfUFJJTUFSWV9TRUNUT1JTID0gJy9BY3Rpdml0eSBGb3JtL1NlY3RvcnMvUHJpbWFyeSBTZWN0b3JzJztcbmNvbnN0IEFDVElWSVRZX1NFQ09OREFSWV9TRUNUT1JTID0gJy9BY3Rpdml0eSBGb3JtL1NlY3RvcnMvU2Vjb25kYXJ5IFNlY3RvcnMnO1xuXG5jb25zdCBBQ1RJVklUWV9TVFJVQ1RVUkVTID0gJy9BY3Rpdml0eSBGb3JtL1N0cnVjdHVyZXMnO1xuY29uc3QgQUNUSVZJVFlfU1RSVUNUVVJFU19BRERfU1RSVUNUVVJFID0gYCR7QUNUSVZJVFlfU1RSVUNUVVJFU30vQWRkIFN0cnVjdHVyZWA7XG5cbmNvbnN0IEFDVElWSVRZX09SR0FOSVpBVElPTlMgPSAnL0FjdGl2aXR5IEZvcm0vT3JnYW5pemF0aW9ucyc7XG5jb25zdCBBQ1RJVklUWV9PUkdBTklaQVRJT05TX0RPTk9SX09SR0FOSVpBVElPTiA9IGAke0FDVElWSVRZX09SR0FOSVpBVElPTlN9L0Rvbm9yIE9yZ2FuaXphdGlvbmA7XG5jb25zdCBBQ1RJVklUWV9PUkdBTklaQVRJT05TX0JFTkVGSUNJQVJZX0FHRU5DWSA9IGAke0FDVElWSVRZX09SR0FOSVpBVElPTlN9L0JlbmVmaWNpYXJ5IEFnZW5jeWA7XG5jb25zdCBBQ1RJVklUWV9PUkdBTklaQVRJT05TX0NPTlRSQUNUSU5HX0FHRU5DWSA9IGAke0FDVElWSVRZX09SR0FOSVpBVElPTlN9L0NvbnRyYWN0aW5nIEFnZW5jeWA7XG5jb25zdCBBQ1RJVklUWV9PUkdBTklaQVRJT05TX0VYRUNVVElOR19BR0VOQ1kgPSBgJHtBQ1RJVklUWV9PUkdBTklaQVRJT05TfS9FeGVjdXRpbmcgQWdlbmN5YDtcbmNvbnN0IEFDVElWSVRZX09SR0FOSVpBVElPTlNfSU1QTEVNRU5USU5HX0FHRU5DWSA9IGAke0FDVElWSVRZX09SR0FOSVpBVElPTlN9L0ltcGxlbWVudGluZyBBZ2VuY3lgO1xuY29uc3QgQUNUSVZJVFlfT1JHQU5JWkFUSU9OU19SRUdJT05BTF9HUk9VUCA9IGAke0FDVElWSVRZX09SR0FOSVpBVElPTlN9L1JlZ2lvbmFsIEdyb3VwYDtcbmNvbnN0IEFDVElWSVRZX09SR0FOSVpBVElPTlNfUkVMQVRFRF9HT1ZFUk5NRU5UX09SR0FOSVpBVElPTiA9IGAke0FDVElWSVRZX09SR0FOSVpBVElPTlN9L1JlbGF0ZWQgR292ZXJubWVudCBPcmdhbml6YXRpb25gO1xuY29uc3QgQUNUSVZJVFlfT1JHQU5JWkFUSU9OU19TRUNUT1JfR1JPVVAgPSBgJHtBQ1RJVklUWV9PUkdBTklaQVRJT05TfS9TZWN0b3IgR3JvdXBgO1xuXG5jb25zdCBBRERfRlVORElOR19BVVRPID0gJ0FkZCBGdW5kaW5nIEl0ZW0gQXV0b21hdGljYWxseSc7XG5jb25zdCBBQ1RJVklUWV9PUkdBTklaQVRJT05TX0JFTkVGSUNJQVJZX0FHRU5DWV9BRERfRlVORElOR19BVVRPID0gYCR7QUNUSVZJVFlfT1JHQU5JWkFUSU9OU19CRU5FRklDSUFSWV9BR0VOQ1l9LyR7QUREX0ZVTkRJTkdfQVVUT31gO1xuY29uc3QgQUNUSVZJVFlfT1JHQU5JWkFUSU9OU19DT05UUkFDVElOR19BR0VOQ1lfQUREX0ZVTkRJTkdfQVVUTyA9IGAke0FDVElWSVRZX09SR0FOSVpBVElPTlNfQ09OVFJBQ1RJTkdfQUdFTkNZfS8ke0FERF9GVU5ESU5HX0FVVE99YDtcbmNvbnN0IEFDVElWSVRZX09SR0FOSVpBVElPTlNfRE9OT1JfT1JHQU5JWkFUSU9OX0FERF9GVU5ESU5HX0FVVE8gPSBgJHtBQ1RJVklUWV9PUkdBTklaQVRJT05TX0RPTk9SX09SR0FOSVpBVElPTn0vJHtBRERfRlVORElOR19BVVRPfWA7XG5jb25zdCBBQ1RJVklUWV9PUkdBTklaQVRJT05TX0VYRUNVVElOR19BR0VOQ1lfQUREX0ZVTkRJTkdfQVVUTyA9IGAke0FDVElWSVRZX09SR0FOSVpBVElPTlNfRVhFQ1VUSU5HX0FHRU5DWX0vJHtBRERfRlVORElOR19BVVRPfWA7XG5jb25zdCBBQ1RJVklUWV9PUkdBTklaQVRJT05TX0lNUExFTUVOVElOR19BR0VOQ1lfQUREX0ZVTkRJTkdfQVVUTyA9IGAke0FDVElWSVRZX09SR0FOSVpBVElPTlNfSU1QTEVNRU5USU5HX0FHRU5DWX0vJHtBRERfRlVORElOR19BVVRPfWA7XG5jb25zdCBBQ1RJVklUWV9PUkdBTklaQVRJT05TX1JFR0lPTkFMX0dST1VQX0FERF9GVU5ESU5HX0FVVE8gPSBgJHtBQ1RJVklUWV9PUkdBTklaQVRJT05TX1JFR0lPTkFMX0dST1VQfS8ke0FERF9GVU5ESU5HX0FVVE99YDtcbmNvbnN0IEFDVElWSVRZX09SR0FOSVpBVElPTlNfUkVTUE9OU0lCTEVfT1JHQU5JWkFUSU9OX0FERF9GVU5ESU5HX0FVVE8gPSBgJHtBQ1RJVklUWV9PUkdBTklaQVRJT05TX1JFTEFURURfR09WRVJOTUVOVF9PUkdBTklaQVRJT059LyR7QUREX0ZVTkRJTkdfQVVUT31gO1xuY29uc3QgQUNUSVZJVFlfT1JHQU5JWkFUSU9OU19TRUNUT1JfR1JPVVBfQUREX0ZVTkRJTkdfQVVUTyA9IGAke0FDVElWSVRZX09SR0FOSVpBVElPTlNfU0VDVE9SX0dST1VQfS8ke0FERF9GVU5ESU5HX0FVVE99YDtcblxuY29uc3QgQUNUSVZJVFlfRlVORElOR19TRUFSQ0ggPSBgJHtBQ1RJVklUWV9GVU5ESU5HfS9TZWFyY2ggRnVuZGluZyBPcmdhbml6YXRpb25zYDtcbmNvbnN0IEFDVElWSVRZX0ZVTkRJTkdfU0VBUkNIX09SR0FOSVpBVElPTiA9IGAke0FDVElWSVRZX0ZVTkRJTkdfU0VBUkNIfS9TZWFyY2ggT3JnYW5pemF0aW9uc2A7XG5jb25zdCBBQ1RJVklUWV9GVU5ESU5HX1NFTEVDVF9PUkdfVFlQRSA9IGAke0FDVElWSVRZX0ZVTkRJTkdfU0VBUkNIfS9TZWxlY3QgT3JnYW5pemF0aW9uIFR5cGVgO1xuXG5jb25zdCBBQ1RJVklUWV9QUk9HUkFNID0gJy9BY3Rpdml0eSBGb3JtL1Byb2dyYW0nO1xuY29uc3QgQUNUSVZJVFlfUExBTk5JTkcgPSAnL0FjdGl2aXR5IEZvcm0vUGxhbm5pbmcnO1xuXG5jb25zdCBBQ1RJVklUWV9DT05UQUNUID0gJy9BY3Rpdml0eSBGb3JtL0NvbnRhY3RzJztcbmNvbnN0IEFDVElWSVRZX0RPQ1VNRU5UU19BRERfRE9DVU1FTlQgPSAnL0FjdGl2aXR5IEZvcm0vUmVsYXRlZCBEb2N1bWVudHMvQWRkIE5ldyBEb2N1bWVudCc7XG5jb25zdCBBQ1RJVklUWV9ET0NVTUVOVFNfQUREX1dFQkxJTksgPSAnL0FjdGl2aXR5IEZvcm0vUmVsYXRlZCBEb2N1bWVudHMvQWRkIE5ldyBXZWIgTGluayc7XG5cbmNvbnN0IEFDVElWSVRZX0lTU1VFU19BRERfSVNTVUUgPSAnL0FjdGl2aXR5IEZvcm0vSXNzdWVzIFNlY3Rpb24vQWRkIElzc3VlJztcbmNvbnN0IEFDVElWSVRZX0lTU1VFU19ERUxFVEVfSVNTVUUgPSAnL0FjdGl2aXR5IEZvcm0vSXNzdWVzIFNlY3Rpb24vSXNzdWUvRGVsZXRlIEl0ZW0nO1xuY29uc3QgQUNUSVZJVFlfSVNTVUVTX0FERF9NRUFTVVJFID0gJy9BY3Rpdml0eSBGb3JtL0lzc3VlcyBTZWN0aW9uL0lzc3VlL0FkZCBJdGVtJztcbmNvbnN0IEFDVElWSVRZX0lTU1VFU19ERUxFVEVfTUVBU1VSRSA9ICcvQWN0aXZpdHkgRm9ybS9Jc3N1ZXMgU2VjdGlvbi9Jc3N1ZS9NZWFzdXJlL0RlbGV0ZSBJdGVtJztcbmNvbnN0IEFDVElWSVRZX0lTU1VFU19BRERfQUNUT1IgPSAnL0FjdGl2aXR5IEZvcm0vSXNzdWVzIFNlY3Rpb24vSXNzdWUvTWVhc3VyZS9BZGQgSXRlbSc7XG5jb25zdCBBQ1RJVklUWV9JU1NVRVNfREVMRVRFX0FDVE9SID0gJy9BY3Rpdml0eSBGb3JtL0lzc3VlcyBTZWN0aW9uL0lzc3VlL01lYXN1cmUvQWN0b3IvRGVsZXRlIEl0ZW0nO1xuXG5jb25zdCBBQ1RJVklUWV9ESVNCVVJTRU1FTlRTX0ZVTkRJTkdfRkxPV1NfT1JHUk9MRV9BRERfSU1QTEVNRU5USU5HX0FHRU5DWSA9XG4gIGAke0FGX0ZVTkRJTkdfRlVORElOR0dST1VQX0ZVTkRJTkdJVEVNfS9EaXNidXJzZW1lbnRzL0Rpc2J1cnNlbWVudHMgVGFibGUvRnVuZGluZyBGbG93cyBPcmdSb2xlIFNlbGVjdG9yL0FkZCBJbXBsZW1lbnRpbmcgQWdlbmN5YDtcbmNvbnN0IEFDVElWSVRZX0RJU0JVUlNFTUVOVFNfRlVORElOR19GTE9XU19PUkdST0xFX0FERF9DT05UUkFDVElOR19BR0VOQ1kgPVxuICBgJHtBRl9GVU5ESU5HX0ZVTkRJTkdHUk9VUF9GVU5ESU5HSVRFTX0vRGlzYnVyc2VtZW50cy9EaXNidXJzZW1lbnRzIFRhYmxlL0Z1bmRpbmcgRmxvd3MgT3JnUm9sZSBTZWxlY3Rvci9BZGQgQ29udHJhY3RpbmcgQWdlbmN5YDtcbmNvbnN0IEFDVElWSVRZX0RJU0JVUlNFTUVOVFNfRlVORElOR19GTE9XU19PUkdST0xFX0FERF9CRU5FRklDSUFSWV9BR0VOQ1kgPVxuICBgJHtBRl9GVU5ESU5HX0ZVTkRJTkdHUk9VUF9GVU5ESU5HSVRFTX0vRGlzYnVyc2VtZW50cy9EaXNidXJzZW1lbnRzIFRhYmxlL0Z1bmRpbmcgRmxvd3MgT3JnUm9sZSBTZWxlY3Rvci9BZGQgQmVuZWZpY2lhcnkgQWdlbmN5YDtcbmNvbnN0IEFDVElWSVRZX0RJU0JVUlNFTUVOVFNfRlVORElOR19GTE9XU19PUkdST0xFX0FERF9ET05PUl9PUkdBTklaQVRJT04gPVxuICBgJHtBRl9GVU5ESU5HX0ZVTkRJTkdHUk9VUF9GVU5ESU5HSVRFTX0vRGlzYnVyc2VtZW50cy9EaXNidXJzZW1lbnRzIFRhYmxlL0Z1bmRpbmcgRmxvd3MgT3JnUm9sZSBTZWxlY3Rvci9BZGQgRG9ub3IgT3JnYW5pemF0aW9uYDtcbmNvbnN0IEFDVElWSVRZX0RJU0JVUlNFTUVOVFNfRlVORElOR19GTE9XU19PUkdST0xFX0FERF9FWEVDVVRJTkdfQUdFTkNZID1cbiAgYCR7QUZfRlVORElOR19GVU5ESU5HR1JPVVBfRlVORElOR0lURU19L0Rpc2J1cnNlbWVudHMvRGlzYnVyc2VtZW50cyBUYWJsZS9GdW5kaW5nIEZsb3dzIE9yZ1JvbGUgU2VsZWN0b3IvQWRkIEV4ZWN1dGluZyBBZ2VuY3lgO1xuY29uc3QgQUNUSVZJVFlfRElTQlVSU0VNRU5UU19GVU5ESU5HX0ZMT1dTX09SR1JPTEVfQUREX1JFR0lPTkFMX0dST1VQID1cbiAgYCR7QUZfRlVORElOR19GVU5ESU5HR1JPVVBfRlVORElOR0lURU19L0Rpc2J1cnNlbWVudHMvRGlzYnVyc2VtZW50cyBUYWJsZS9GdW5kaW5nIEZsb3dzIE9yZ1JvbGUgU2VsZWN0b3IvQWRkIFJlZ2lvbmFsIEdyb3VwYDtcbmNvbnN0IEFDVElWSVRZX0RJU0JVUlNFTUVOVFNfRlVORElOR19GTE9XU19PUkdST0xFX0FERF9SRVNQT05TSUJMRV9PUkdBTklaQVRJT04gPVxuICBgJHtBRl9GVU5ESU5HX0ZVTkRJTkdHUk9VUF9GVU5ESU5HSVRFTX0vRGlzYnVyc2VtZW50cy9EaXNidXJzZW1lbnRzIFRhYmxlL0Z1bmRpbmcgRmxvd3MgT3JnUm9sZSBTZWxlY3Rvci9BZGQgUmVzcG9uc2libGUgT3JnYW5pemF0aW9uYDtcbmNvbnN0IEFDVElWSVRZX0RJU0JVUlNFTUVOVFNfRlVORElOR19GTE9XU19PUkdST0xFX0FERF9TRUNUT1JfR1JPVVAgPVxuICBgJHtBRl9GVU5ESU5HX0ZVTkRJTkdHUk9VUF9GVU5ESU5HSVRFTX0vRGlzYnVyc2VtZW50cy9EaXNidXJzZW1lbnRzIFRhYmxlL0Z1bmRpbmcgRmxvd3MgT3JnUm9sZSBTZWxlY3Rvci9BZGQgU2VjdG9yIEdyb3VwYDtcblxuY29uc3QgQUNUSVZJVFlfQ09NTUlUTUVOVFNfRlVORElOR19GTE9XU19PUkdST0xFX0FERF9JTVBMRU1FTlRJTkdfQUdFTkNZID1cbiAgYCR7QUZfRlVORElOR19GVU5ESU5HR1JPVVBfRlVORElOR0lURU19L0NvbW1pdG1lbnRzL0NvbW1pdG1lbnRzIFRhYmxlL0Z1bmRpbmcgRmxvd3MgT3JnUm9sZSBTZWxlY3Rvci9BZGQgSW1wbGVtZW50aW5nIEFnZW5jeWA7XG5jb25zdCBBQ1RJVklUWV9DT01NSVRNRU5UU19GVU5ESU5HX0ZMT1dTX09SR1JPTEVfQUREX0NPTlRSQUNUSU5HX0FHRU5DWSA9XG4gIGAke0FGX0ZVTkRJTkdfRlVORElOR0dST1VQX0ZVTkRJTkdJVEVNfS9Db21taXRtZW50cy9Db21taXRtZW50cyBUYWJsZS9GdW5kaW5nIEZsb3dzIE9yZ1JvbGUgU2VsZWN0b3IvQWRkIENvbnRyYWN0aW5nIEFnZW5jeWA7XG5jb25zdCBBQ1RJVklUWV9DT01NSVRNRU5UU19GVU5ESU5HX0ZMT1dTX09SR1JPTEVfQUREX0JFTkVGSUNJQVJZX0FHRU5DWSA9XG4gIGAke0FGX0ZVTkRJTkdfRlVORElOR0dST1VQX0ZVTkRJTkdJVEVNfS9Db21taXRtZW50cy9Db21taXRtZW50cyBUYWJsZS9GdW5kaW5nIEZsb3dzIE9yZ1JvbGUgU2VsZWN0b3IvQWRkIEJlbmVmaWNpYXJ5IEFnZW5jeWA7XG5jb25zdCBBQ1RJVklUWV9DT01NSVRNRU5UU19GVU5ESU5HX0ZMT1dTX09SR1JPTEVfQUREX0RPTk9SX09SR0FOSVpBVElPTiA9XG4gIGAke0FGX0ZVTkRJTkdfRlVORElOR0dST1VQX0ZVTkRJTkdJVEVNfS9Db21taXRtZW50cy9Db21taXRtZW50cyBUYWJsZS9GdW5kaW5nIEZsb3dzIE9yZ1JvbGUgU2VsZWN0b3IvQWRkIERvbm9yIE9yZ2FuaXphdGlvbmA7XG5jb25zdCBBQ1RJVklUWV9DT01NSVRNRU5UU19GVU5ESU5HX0ZMT1dTX09SR1JPTEVfQUREX0VYRUNVVElOR19BR0VOQ1kgPVxuICBgJHtBRl9GVU5ESU5HX0ZVTkRJTkdHUk9VUF9GVU5ESU5HSVRFTX0vQ29tbWl0bWVudHMvQ29tbWl0bWVudHMgVGFibGUvRnVuZGluZyBGbG93cyBPcmdSb2xlIFNlbGVjdG9yL0FkZCBFeGVjdXRpbmcgQWdlbmN5YDtcbmNvbnN0IEFDVElWSVRZX0NPTU1JVE1FTlRTX0ZVTkRJTkdfRkxPV1NfT1JHUk9MRV9BRERfUkVHSU9OQUxfR1JPVVAgPVxuICBgJHtBRl9GVU5ESU5HX0ZVTkRJTkdHUk9VUF9GVU5ESU5HSVRFTX0vQ29tbWl0bWVudHMvQ29tbWl0bWVudHMgVGFibGUvRnVuZGluZyBGbG93cyBPcmdSb2xlIFNlbGVjdG9yL0FkZCBSZWdpb25hbCBHcm91cGA7XG5jb25zdCBBQ1RJVklUWV9DT01NSVRNRU5UU19GVU5ESU5HX0ZMT1dTX09SR1JPTEVfQUREX1JFU1BPTlNJQkxFX09SR0FOSVpBVElPTiA9XG4gIGAke0FGX0ZVTkRJTkdfRlVORElOR0dST1VQX0ZVTkRJTkdJVEVNfS9Db21taXRtZW50cy9Db21taXRtZW50cyBUYWJsZS9GdW5kaW5nIEZsb3dzIE9yZ1JvbGUgU2VsZWN0b3IvQWRkIFJlc3BvbnNpYmxlIE9yZ2FuaXphdGlvbmA7XG5jb25zdCBBQ1RJVklUWV9DT01NSVRNRU5UU19GVU5ESU5HX0ZMT1dTX09SR1JPTEVfQUREX1NFQ1RPUl9HUk9VUCA9XG4gIGAke0FGX0ZVTkRJTkdfRlVORElOR0dST1VQX0ZVTkRJTkdJVEVNfS9Db21taXRtZW50cy9Db21taXRtZW50cyBUYWJsZS9GdW5kaW5nIEZsb3dzIE9yZ1JvbGUgU2VsZWN0b3IvQWRkIFNlY3RvciBHcm91cGA7XG5cbmNvbnN0IEFDVElWSVRZX0VYUEVORElUVVJFU19GVU5ESU5HX0ZMT1dTX09SR1JPTEVfQUREX0lNUExFTUVOVElOR19BR0VOQ1kgPVxuICBgJHtBRl9GVU5ESU5HX0ZVTkRJTkdHUk9VUF9GVU5ESU5HSVRFTX0vRXhwZW5kaXR1cmVzL0V4cGVuZGl0dXJlcyBUYWJsZS9GdW5kaW5nIEZsb3dzIE9yZ1JvbGUgU2VsZWN0b3IvQWRkIEltcGxlbWVudGluZyBBZ2VuY3lgO1xuY29uc3QgQUNUSVZJVFlfRVhQRU5ESVRVUkVTX0ZVTkRJTkdfRkxPV1NfT1JHUk9MRV9BRERfQ09OVFJBQ1RJTkdfQUdFTkNZID1cbiAgYCR7QUZfRlVORElOR19GVU5ESU5HR1JPVVBfRlVORElOR0lURU19L0V4cGVuZGl0dXJlcy9FeHBlbmRpdHVyZXMgVGFibGUvRnVuZGluZyBGbG93cyBPcmdSb2xlIFNlbGVjdG9yL0FkZCBDb250cmFjdGluZyBBZ2VuY3lgO1xuY29uc3QgQUNUSVZJVFlfRVhQRU5ESVRVUkVTX0ZVTkRJTkdfRkxPV1NfT1JHUk9MRV9BRERfQkVORUZJQ0lBUllfQUdFTkNZID1cbiAgYCR7QUZfRlVORElOR19GVU5ESU5HR1JPVVBfRlVORElOR0lURU19L0V4cGVuZGl0dXJlcy9FeHBlbmRpdHVyZXMgVGFibGUvRnVuZGluZyBGbG93cyBPcmdSb2xlIFNlbGVjdG9yL0FkZCBCZW5lZmljaWFyeSBBZ2VuY3lgO1xuY29uc3QgQUNUSVZJVFlfRVhQRU5ESVRVUkVTX0ZVTkRJTkdfRkxPV1NfT1JHUk9MRV9BRERfRE9OT1JfT1JHQU5JWkFUSU9OID1cbiAgYCR7QUZfRlVORElOR19GVU5ESU5HR1JPVVBfRlVORElOR0lURU19L0V4cGVuZGl0dXJlcy9FeHBlbmRpdHVyZXMgVGFibGUvRnVuZGluZyBGbG93cyBPcmdSb2xlIFNlbGVjdG9yL0FkZCBEb25vciBPcmdhbml6YXRpb25gO1xuY29uc3QgQUNUSVZJVFlfRVhQRU5ESVRVUkVTX0ZVTkRJTkdfRkxPV1NfT1JHUk9MRV9BRERfRVhFQ1VUSU5HX0FHRU5DWSA9XG4gIGAke0FGX0ZVTkRJTkdfRlVORElOR0dST1VQX0ZVTkRJTkdJVEVNfS9FeHBlbmRpdHVyZXMvRXhwZW5kaXR1cmVzIFRhYmxlL0Z1bmRpbmcgRmxvd3MgT3JnUm9sZSBTZWxlY3Rvci9BZGQgRXhlY3V0aW5nIEFnZW5jeWA7XG5jb25zdCBBQ1RJVklUWV9FWFBFTkRJVFVSRVNfRlVORElOR19GTE9XU19PUkdST0xFX0FERF9SRUdJT05BTF9HUk9VUCA9XG4gIGAke0FGX0ZVTkRJTkdfRlVORElOR0dST1VQX0ZVTkRJTkdJVEVNfS9FeHBlbmRpdHVyZXMvRXhwZW5kaXR1cmVzIFRhYmxlL0Z1bmRpbmcgRmxvd3MgT3JnUm9sZSBTZWxlY3Rvci9BZGQgUmVnaW9uYWwgR3JvdXBgO1xuY29uc3QgQUNUSVZJVFlfRVhQRU5ESVRVUkVTX0ZVTkRJTkdfRkxPV1NfT1JHUk9MRV9BRERfUkVTUE9OU0lCTEVfT1JHQU5JWkFUSU9OID1cbiAgYCR7QUZfRlVORElOR19GVU5ESU5HR1JPVVBfRlVORElOR0lURU19L0V4cGVuZGl0dXJlcy9FeHBlbmRpdHVyZXMgVGFibGUvRnVuZGluZyBGbG93cyBPcmdSb2xlIFNlbGVjdG9yL0FkZCBSZXNwb25zaWJsZSBPcmdhbml6YXRpb25gO1xuY29uc3QgQUNUSVZJVFlfRVhQRU5ESVRVUkVTX0ZVTkRJTkdfRkxPV1NfT1JHUk9MRV9BRERfU0VDVE9SX0dST1VQID1cbiAgYCR7QUZfRlVORElOR19GVU5ESU5HR1JPVVBfRlVORElOR0lURU19L0V4cGVuZGl0dXJlcy9FeHBlbmRpdHVyZXMgVGFibGUvRnVuZGluZyBGbG93cyBPcmdSb2xlIFNlbGVjdG9yL0FkZCBTZWN0b3IgR3JvdXBgO1xuXG5jb25zdCBNVEVGX1BST0pFQ1RJT05TID0gYCR7QUZfRlVORElOR19GVU5ESU5HR1JPVVBfRlVORElOR0lURU19L01URUYgUHJvamVjdGlvbnNgO1xuY29uc3QgTVRFRl9QUk9KRUNUSU9OU19BTU9VTlQgPVxuICBgJHtBRl9GVU5ESU5HX0ZVTkRJTkdHUk9VUF9GVU5ESU5HSVRFTX0vTVRFRiBQcm9qZWN0aW9ucy9NVEVGIFByb2plY3Rpb25zIFRhYmxlL0Ftb3VudGA7XG5jb25zdCBNVEVGX1BST0pFQ1RJT05TX0NVUlJFTkNZID1cbiAgYCR7QUZfRlVORElOR19GVU5ESU5HR1JPVVBfRlVORElOR0lURU19L01URUYgUHJvamVjdGlvbnMvTVRFRiBQcm9qZWN0aW9ucyBUYWJsZS9DdXJyZW5jeWA7XG5jb25zdCBNVEVGX1BST0pFQ1RJT05TX1BST0pFQ1RJT04gPVxuICBgJHtBRl9GVU5ESU5HX0ZVTkRJTkdHUk9VUF9GVU5ESU5HSVRFTX0vTVRFRiBQcm9qZWN0aW9ucy9NVEVGIFByb2plY3Rpb25zIFRhYmxlL01URUYgUHJvamVjdGlvbmA7XG5jb25zdCBNVEVGX1BST0pFQ1RJT05TX0RBVEUgPVxuICBgJHtBRl9GVU5ESU5HX0ZVTkRJTkdHUk9VUF9GVU5ESU5HSVRFTX0vTVRFRiBQcm9qZWN0aW9ucy9NVEVGIFByb2plY3Rpb25zIFRhYmxlL1Byb2plY3Rpb24gRGF0ZWA7XG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmZyZWV6ZSh7XG4gIFBVQkxJQ19WSUVXX0NIQU5HRV9QQVNTV09SRCxcbiAgUFVCTElDX1ZJRVdfVFJPVUJMRV9TSUdOX0lOLFxuICBBQ1RJVklUWV9ERUxJVkVSWV9SQVRFLFxuICBBQ1RJVklUWV9QUk9KRUNUX0lEX0FORF9QTEFOTklORyxcbiAgQUNUSVZJVFlfRFVSQVRJT05fT0ZfUFJPSkVDVCxcbiAgQUNUSVZJVFlfVEVBTV9MRUFERVIsXG4gIEFDVElWSVRZX1NBTUVfQVNfUFJPUE9TRURfU1RBUlRfREFURSxcbiAgQUNUSVZJVFlfU0FNRV9BU19QUk9QT1NFRF9BUFBST1ZBTF9EQVRFLFxuICBBQ1RJVklUWV9JREVOVElGSUNBVElPTixcbiAgQUNUSVZJVFlfTEFTVF9VUERBVEVEX0JZLFxuICBBQ1RJVklUWV9MQVNUX1VQREFURURfT04sXG4gIEFDVElWSVRZX0ZVTkRJTkcsXG4gIEFGX0ZVTkRJTkdfRlVORElOR0dST1VQX0ZVTkRJTkdJVEVNLFxuICBBQ1RJVklUWV9TRUNUT1JTLFxuICBBQ1RJVklUWV9QUklNQVJZX1NFQ1RPUlMsXG4gIEFDVElWSVRZX1NFQ09OREFSWV9TRUNUT1JTLFxuICBBQ1RJVklUWV9TVFJVQ1RVUkVTLFxuICBBQ1RJVklUWV9TVFJVQ1RVUkVTX0FERF9TVFJVQ1RVUkUsXG4gIEFDVElWSVRZX09SR0FOSVpBVElPTlMsXG4gIEFDVElWSVRZX09SR0FOSVpBVElPTlNfRE9OT1JfT1JHQU5JWkFUSU9OLFxuICBBQ1RJVklUWV9PUkdBTklaQVRJT05TX0JFTkVGSUNJQVJZX0FHRU5DWSxcbiAgQUNUSVZJVFlfT1JHQU5JWkFUSU9OU19DT05UUkFDVElOR19BR0VOQ1ksXG4gIEFDVElWSVRZX09SR0FOSVpBVElPTlNfRVhFQ1VUSU5HX0FHRU5DWSxcbiAgQUNUSVZJVFlfT1JHQU5JWkFUSU9OU19JTVBMRU1FTlRJTkdfQUdFTkNZLFxuICBBQ1RJVklUWV9PUkdBTklaQVRJT05TX1JFR0lPTkFMX0dST1VQLFxuICBBQ1RJVklUWV9PUkdBTklaQVRJT05TX1JFTEFURURfR09WRVJOTUVOVF9PUkdBTklaQVRJT04sXG4gIEFDVElWSVRZX09SR0FOSVpBVElPTlNfU0VDVE9SX0dST1VQLFxuICBBRERfRlVORElOR19BVVRPLFxuICBBQ1RJVklUWV9PUkdBTklaQVRJT05TX0JFTkVGSUNJQVJZX0FHRU5DWV9BRERfRlVORElOR19BVVRPLFxuICBBQ1RJVklUWV9PUkdBTklaQVRJT05TX0NPTlRSQUNUSU5HX0FHRU5DWV9BRERfRlVORElOR19BVVRPLFxuICBBQ1RJVklUWV9PUkdBTklaQVRJT05TX0RPTk9SX09SR0FOSVpBVElPTl9BRERfRlVORElOR19BVVRPLFxuICBBQ1RJVklUWV9PUkdBTklaQVRJT05TX0VYRUNVVElOR19BR0VOQ1lfQUREX0ZVTkRJTkdfQVVUTyxcbiAgQUNUSVZJVFlfT1JHQU5JWkFUSU9OU19JTVBMRU1FTlRJTkdfQUdFTkNZX0FERF9GVU5ESU5HX0FVVE8sXG4gIEFDVElWSVRZX09SR0FOSVpBVElPTlNfUkVHSU9OQUxfR1JPVVBfQUREX0ZVTkRJTkdfQVVUTyxcbiAgQUNUSVZJVFlfT1JHQU5JWkFUSU9OU19SRVNQT05TSUJMRV9PUkdBTklaQVRJT05fQUREX0ZVTkRJTkdfQVVUTyxcbiAgQUNUSVZJVFlfT1JHQU5JWkFUSU9OU19TRUNUT1JfR1JPVVBfQUREX0ZVTkRJTkdfQVVUTyxcbiAgQUNUSVZJVFlfRlVORElOR19TRUFSQ0gsXG4gIEFDVElWSVRZX0ZVTkRJTkdfU0VBUkNIX09SR0FOSVpBVElPTixcbiAgQUNUSVZJVFlfRlVORElOR19TRUxFQ1RfT1JHX1RZUEUsXG4gIEFDVElWSVRZX1BST0dSQU0sXG4gIEFDVElWSVRZX1BMQU5OSU5HLFxuICBBQ1RJVklUWV9DT05UQUNULFxuICBBQ1RJVklUWV9ET0NVTUVOVFNfQUREX0RPQ1VNRU5ULFxuICBBQ1RJVklUWV9ET0NVTUVOVFNfQUREX1dFQkxJTkssXG4gIEFDVElWSVRZX0lTU1VFU19BRERfSVNTVUUsXG4gIEFDVElWSVRZX0lTU1VFU19ERUxFVEVfSVNTVUUsXG4gIEFDVElWSVRZX0lTU1VFU19BRERfTUVBU1VSRSxcbiAgQUNUSVZJVFlfSVNTVUVTX0RFTEVURV9NRUFTVVJFLFxuICBBQ1RJVklUWV9JU1NVRVNfQUREX0FDVE9SLFxuICBBQ1RJVklUWV9JU1NVRVNfREVMRVRFX0FDVE9SLFxuICBBQ1RJVklUWV9ESVNCVVJTRU1FTlRTX0ZVTkRJTkdfRkxPV1NfT1JHUk9MRV9BRERfSU1QTEVNRU5USU5HX0FHRU5DWSxcbiAgQUNUSVZJVFlfRElTQlVSU0VNRU5UU19GVU5ESU5HX0ZMT1dTX09SR1JPTEVfQUREX0NPTlRSQUNUSU5HX0FHRU5DWSxcbiAgQUNUSVZJVFlfRElTQlVSU0VNRU5UU19GVU5ESU5HX0ZMT1dTX09SR1JPTEVfQUREX0JFTkVGSUNJQVJZX0FHRU5DWSxcbiAgQUNUSVZJVFlfRElTQlVSU0VNRU5UU19GVU5ESU5HX0ZMT1dTX09SR1JPTEVfQUREX0RPTk9SX09SR0FOSVpBVElPTixcbiAgQUNUSVZJVFlfRElTQlVSU0VNRU5UU19GVU5ESU5HX0ZMT1dTX09SR1JPTEVfQUREX0VYRUNVVElOR19BR0VOQ1ksXG4gIEFDVElWSVRZX0RJU0JVUlNFTUVOVFNfRlVORElOR19GTE9XU19PUkdST0xFX0FERF9SRUdJT05BTF9HUk9VUCxcbiAgQUNUSVZJVFlfRElTQlVSU0VNRU5UU19GVU5ESU5HX0ZMT1dTX09SR1JPTEVfQUREX1JFU1BPTlNJQkxFX09SR0FOSVpBVElPTixcbiAgQUNUSVZJVFlfRElTQlVSU0VNRU5UU19GVU5ESU5HX0ZMT1dTX09SR1JPTEVfQUREX1NFQ1RPUl9HUk9VUCxcbiAgQUNUSVZJVFlfQ09NTUlUTUVOVFNfRlVORElOR19GTE9XU19PUkdST0xFX0FERF9JTVBMRU1FTlRJTkdfQUdFTkNZLFxuICBBQ1RJVklUWV9DT01NSVRNRU5UU19GVU5ESU5HX0ZMT1dTX09SR1JPTEVfQUREX0NPTlRSQUNUSU5HX0FHRU5DWSxcbiAgQUNUSVZJVFlfQ09NTUlUTUVOVFNfRlVORElOR19GTE9XU19PUkdST0xFX0FERF9CRU5FRklDSUFSWV9BR0VOQ1ksXG4gIEFDVElWSVRZX0NPTU1JVE1FTlRTX0ZVTkRJTkdfRkxPV1NfT1JHUk9MRV9BRERfRE9OT1JfT1JHQU5JWkFUSU9OLFxuICBBQ1RJVklUWV9DT01NSVRNRU5UU19GVU5ESU5HX0ZMT1dTX09SR1JPTEVfQUREX0VYRUNVVElOR19BR0VOQ1ksXG4gIEFDVElWSVRZX0NPTU1JVE1FTlRTX0ZVTkRJTkdfRkxPV1NfT1JHUk9MRV9BRERfUkVHSU9OQUxfR1JPVVAsXG4gIEFDVElWSVRZX0NPTU1JVE1FTlRTX0ZVTkRJTkdfRkxPV1NfT1JHUk9MRV9BRERfUkVTUE9OU0lCTEVfT1JHQU5JWkFUSU9OLFxuICBBQ1RJVklUWV9DT01NSVRNRU5UU19GVU5ESU5HX0ZMT1dTX09SR1JPTEVfQUREX1NFQ1RPUl9HUk9VUCxcbiAgQUNUSVZJVFlfRVhQRU5ESVRVUkVTX0ZVTkRJTkdfRkxPV1NfT1JHUk9MRV9BRERfSU1QTEVNRU5USU5HX0FHRU5DWSxcbiAgQUNUSVZJVFlfRVhQRU5ESVRVUkVTX0ZVTkRJTkdfRkxPV1NfT1JHUk9MRV9BRERfQ09OVFJBQ1RJTkdfQUdFTkNZLFxuICBBQ1RJVklUWV9FWFBFTkRJVFVSRVNfRlVORElOR19GTE9XU19PUkdST0xFX0FERF9CRU5FRklDSUFSWV9BR0VOQ1ksXG4gIEFDVElWSVRZX0VYUEVORElUVVJFU19GVU5ESU5HX0ZMT1dTX09SR1JPTEVfQUREX0RPTk9SX09SR0FOSVpBVElPTixcbiAgQUNUSVZJVFlfRVhQRU5ESVRVUkVTX0ZVTkRJTkdfRkxPV1NfT1JHUk9MRV9BRERfRVhFQ1VUSU5HX0FHRU5DWSxcbiAgQUNUSVZJVFlfRVhQRU5ESVRVUkVTX0ZVTkRJTkdfRkxPV1NfT1JHUk9MRV9BRERfUkVHSU9OQUxfR1JPVVAsXG4gIEFDVElWSVRZX0VYUEVORElUVVJFU19GVU5ESU5HX0ZMT1dTX09SR1JPTEVfQUREX1JFU1BPTlNJQkxFX09SR0FOSVpBVElPTixcbiAgQUNUSVZJVFlfRVhQRU5ESVRVUkVTX0ZVTkRJTkdfRkxPV1NfT1JHUk9MRV9BRERfU0VDVE9SX0dST1VQLFxuICBNVEVGX1BST0pFQ1RJT05TLFxuICBNVEVGX1BST0pFQ1RJT05TX0FNT1VOVCxcbiAgTVRFRl9QUk9KRUNUSU9OU19DVVJSRU5DWSxcbiAgTVRFRl9QUk9KRUNUSU9OU19QUk9KRUNUSU9OLFxuICBNVEVGX1BST0pFQ1RJT05TX0RBVEUsXG59KTtcbiIsImltcG9ydCBGTUMgZnJvbSAnLi9GZWF0dXJlTWFuYWdlckNvbnN0YW50cyc7XG5cbi8qKlxuICogQGF1dGhvciBOYWRlamRhIE1hbmRyZXNjdVxuICovXG5cbi8vIEFjdGl2aXR5IGZpZWxkc1xuY29uc3QgQUNUSVZJVFlfQlVER0VUID0gJ2FjdGl2aXR5X2J1ZGdldCc7XG5jb25zdCBBQ1RJVklUWV9TVEFUVVMgPSAnYWN0aXZpdHlfc3RhdHVzJztcbmNvbnN0IFNUQVRVU19SRUFTT04gPSAnc3RhdHVzX3JlYXNvbic7XG5jb25zdCBGSU5BTkNJQUxfSU5TVFJVTUVOVCA9ICdmaW5hbmNpYWxfaW5zdHJ1bWVudCc7XG5jb25zdCBUWVBFX09GX0lNUExFTUVOVEFUSU9OID0gJ3R5cGVfb2ZfaW1wbGVtZW50YXRpb24nO1xuY29uc3QgT0JKRUNUSVZFID0gJ29iamVjdGl2ZSc7XG5jb25zdCBSRVNVTFRTID0gJ3Jlc3VsdHMnO1xuY29uc3QgQlVER0VUX0NPREVfUFJPSkVDVF9JRCA9ICdidWRnZXRfY29kZV9wcm9qZWN0X2lkJztcbmNvbnN0IEFDVFVBTF9BUFBST1ZBTF9EQVRFID0gJ2FjdHVhbF9hcHByb3ZhbF9kYXRlJztcbmNvbnN0IEZVTkRJTkdTID0gJ2Z1bmRpbmdzJztcbmNvbnN0IEZVTkRJTkdfRE9OT1JfT1JHX0lEID0gJ2Rvbm9yX29yZ2FuaXphdGlvbl9pZCc7XG5jb25zdCBJU19EUkFGVCA9ICdpc19kcmFmdCc7XG5jb25zdCBPUkdfUk9MRV9PUkdfSUQgPSAnb3JnYW5pemF0aW9uJztcbmNvbnN0IEFERElUSU9OQUxfSU5GTyA9ICdhZGRpdGlvbmFsX2luZm8nO1xuY29uc3QgUFJJTUFSWV9TRUNUT1JTID0gJ3ByaW1hcnlfc2VjdG9ycyc7XG5jb25zdCBTRUNPTkRBUllfU0VDVE9SUyA9ICdzZWNvbmRhcnlfc2VjdG9ycyc7XG5jb25zdCBURVJUSUFSWV9TRUNUT1JTID0gJ3RlcnRpYXJ5X3NlY3RvcnMnO1xuY29uc3QgVEFHX1NFQ1RPUlMgPSAndGFnX3NlY3RvcnMnO1xuY29uc3QgU0VDVE9SID0gJ3NlY3Rvcic7XG5jb25zdCBTRUNUT1JfUEVSQ0VOVEFHRSA9ICdzZWN0b3JfcGVyY2VudGFnZSc7XG5jb25zdCBGSU5BTkNJTkdfSU5TVFJVTUVOVCA9ICdmaW5hbmNpbmdfaW5zdHJ1bWVudCc7XG5jb25zdCBNT0RBTElUSUVTID0gJ21vZGFsaXRpZXMnO1xuY29uc3QgTElORV9NSU5JU1RSWV9SQU5LID0gJ2xpbmVfbWluaXN0cnlfcmFuayc7XG5jb25zdCBHT1ZFUk5NRU5UX0FHUkVFTUVOVF9OVU1CRVIgPSAnZ292ZXJubWVudF9hZ3JlZW1lbnRfbnVtYmVyJztcbmNvbnN0IEZVTkRJTkdfU1RBVFVTID0gJ2Z1bmRpbmdfc3RhdHVzJztcbmNvbnN0IExPQ0FUSU9OUyA9ICdsb2NhdGlvbnMnO1xuY29uc3QgTE9DQVRJT04gPSAnbG9jYXRpb24nO1xuY29uc3QgTE9DQVRJT05fUEVSQ0VOVEFHRSA9ICdsb2NhdGlvbl9wZXJjZW50YWdlJztcbmNvbnN0IElNUExFTUVOVEFUSU9OX0xPQ0FUSU9OID0gJ2ltcGxlbWVudGF0aW9uX2xvY2F0aW9uJztcbmNvbnN0IElNUExFTUVOVEFUSU9OX0xFVkVMID0gJ2ltcGxlbWVudGF0aW9uX2xldmVsJztcbmNvbnN0IEFQUFJPVkFMX1NUQVRVUyA9ICdhcHByb3ZhbF9zdGF0dXMnO1xuY29uc3QgQVBQUk9WRURfQlkgPSAnYXBwcm92ZWRfYnknO1xuY29uc3QgQVBQUk9WQUxfREFURSA9ICdhcHByb3ZhbF9kYXRlJztcbmNvbnN0IFRZUEVfT0ZfQVNTSVNUQU5DRSA9ICd0eXBlX29mX2Fzc2lzdGFuY2UnO1xuY29uc3QgRVhQRU5ESVRVUkVfQ0xBU1MgPSAnZXhwZW5kaXR1cmVfY2xhc3MnO1xuY29uc3QgRlVORElOR19ERVRBSUxTID0gJ2Z1bmRpbmdfZGV0YWlscyc7XG5jb25zdCBNT0RFX09GX1BBWU1FTlQgPSAnbW9kZV9vZl9wYXltZW50JztcbmNvbnN0IEZVTkRJTkdfQ0xBU1NJRklDQVRJT05fREFURSA9ICdmdW5kaW5nX2NsYXNzaWZpY2F0aW9uX2RhdGUnO1xuY29uc3QgQUdSRUVNRU5UID0gJ2FncmVlbWVudCc7XG5jb25zdCBET05PUl9PQkpFQ1RJVkUgPSAnZG9ub3Jfb2JqZWN0aXZlJztcbmNvbnN0IENPTkRJVElPTlMgPSAnY29uZGl0aW9ucyc7XG5jb25zdCBBR1JFRU1FTlRfQ09ERSA9ICdjb2RlJztcbmNvbnN0IEFHUkVFTUVOVF9USVRMRSA9ICd0aXRsZSc7XG5jb25zdCBQUk9KRUNUX0NBVEVHT1JZID0gJ3Byb2plY3RfY2F0ZWdvcnknO1xuY29uc3QgUFJPSkVDVF9JTVBMRU1FTlRJTkdfVU5JVCA9ICdwcm9qZWN0X2ltcGxlbWVudGluZ191bml0JztcbmNvbnN0IE9SR0FOSVpBVElPTiA9ICdvcmdhbml6YXRpb24nO1xuY29uc3QgUEVSQ0VOVEFHRSA9ICdwZXJjZW50YWdlJztcbmNvbnN0IEFNUF9PUkdBTklaQVRJT05fUk9MRV9JRCA9ICdhbXBfb3JnYW5pemF0aW9uX3JvbGVfaWQnO1xuY29uc3QgUk9MRSA9ICdyb2xlJztcbmNvbnN0IEVYRUNVVElOR19BR0VOQ1kgPSAnZXhlY3V0aW5nX2FnZW5jeSc7XG5jb25zdCBDT05UUkFDVElOR19BR0VOQ1kgPSAnY29udHJhY3RpbmdfYWdlbmN5JztcbmNvbnN0IEJFTkVGSUNJQVJZX0FHRU5DWSA9ICdiZW5lZmljaWFyeV9hZ2VuY3knO1xuY29uc3QgSU1QTEVNRU5USU5HX0FHRU5DWSA9ICdpbXBsZW1lbnRpbmdfYWdlbmN5JztcbmNvbnN0IFJFU1BPTlNJQkxFX09SR0FOSVpBVElPTiA9ICdyZXNwb25zaWJsZV9vcmdhbml6YXRpb24nO1xuY29uc3QgRE9OT1JfT1JHQU5JWkFUSU9OID0gJ2Rvbm9yX29yZ2FuaXphdGlvbic7XG5jb25zdCBSRUdJT05BTF9HUk9VUCA9ICdyZWdpb25hbF9ncm91cCc7XG5jb25zdCBTRUNUT1JfR1JPVVAgPSAnc2VjdG9yX2dyb3VwJztcbmNvbnN0IEJVREdFVFMgPSAnYnVkZ2V0cyc7XG5jb25zdCBCVURHRVRfQ09ERSA9ICdidWRnZXRfY29kZSc7XG5jb25zdCBCVURHRVRfT1JHQU5JWkFUSU9OX0NPREUgPSAnYnVkZ2V0X29yZ2FuaXphdGlvbl9jb2RlJztcbmNvbnN0IEFSQ0hJVkVEID0gJ2FyY2hpdmVkJztcbmNvbnN0IFRSQU5TQUNUSU9OX0RBVEUgPSAndHJhbnNhY3Rpb25fZGF0ZSc7XG5jb25zdCBUUkFOU0FDVElPTl9UWVBFID0gJ3RyYW5zYWN0aW9uX3R5cGUnO1xuY29uc3QgQ09NTUlUTUVOVFMgPSAnY29tbWl0bWVudHMnO1xuY29uc3QgRElTQlVSU0VNRU5UUyA9ICdkaXNidXJzZW1lbnRzJztcbmNvbnN0IEVYUEVORElUVVJFUyA9ICdleHBlbmRpdHVyZXMnO1xuY29uc3QgRVNUSU1BVEVEX0RJU0JVUlNFTUVOVFMgPSAnZXN0aW1hdGVkX2Rpc2J1cnNlbWVudHMnO1xuY29uc3QgVFJBTlNBQ1RJT05fQU1PVU5UID0gJ3RyYW5zYWN0aW9uX2Ftb3VudCc7XG5jb25zdCBBREpVU1RNRU5UX1RZUEUgPSAnYWRqdXN0bWVudF90eXBlJztcbmNvbnN0IEFDVFVBTF9TVEFSVF9EQVRFID0gJ2FjdHVhbF9zdGFydF9kYXRlJztcbmNvbnN0IFBST1BPU0VEX1NUQVJUX0RBVEUgPSAncHJvcG9zZWRfc3RhcnRfZGF0ZSc7XG5jb25zdCBBQ1RVQUxfQ09NUExFVElPTl9EQVRFID0gJ2FjdHVhbF9jb21wbGV0aW9uX2RhdGUnO1xuY29uc3QgQ09OVFJBQ1RJTkdfREFURSA9ICdjb250cmFjdGluZ19kYXRlJztcbmNvbnN0IERJU0JVUlNFTUVOVF9EQVRFID0gJ2Rpc2J1cnNlbWVudF9kYXRlJztcbmNvbnN0IFBST1BPU0VEX0FQUFJPVkFMX0RBVEUgPSAncHJvcG9zZWRfYXBwcm92YWxfZGF0ZSc7XG5jb25zdCBPUklHSU5BTF9DT01QTEVUSU9OX0RBVEUgPSAnb3JpZ2luYWxfY29tcGxldGlvbl9kYXRlJztcbmNvbnN0IFBST1BPU0VEX0NPTVBMRVRJT05fREFURSA9ICdwcm9wb3NlZF9jb21wbGV0aW9uX2RhdGUnO1xuY29uc3QgRklOQUxfREFURV9GT1JfRElTQlVSU0VNRU5UUyA9ICdmaW5hbF9kYXRlX2Zvcl9kaXNidXJzZW1lbnRzJztcbmNvbnN0IEZJTkFMX0RBVEVfRk9SX0NPTlRSQUNUSU5HID0gJ2ZpbmFsX2RhdGVfZm9yX2NvbnRyYWN0aW5nJztcbmNvbnN0IEVGRkVDVElWRV9GVU5ESU5HX0RBVEUgPSAnZWZmZWN0aXZlX2Z1bmRpbmdfZGF0ZSc7XG5jb25zdCBGVU5ESU5HX0NMT1NJTkdfREFURSA9ICdmdW5kaW5nX2Nsb3NpbmdfZGF0ZSc7XG5jb25zdCBSQVRJRklDQVRJT05fREFURSA9ICdyYXRpZmljYXRpb25fZGF0ZSc7XG5jb25zdCBNQVRVUklUWSA9ICdtYXR1cml0eSc7XG5jb25zdCBMQVNUX0FVRElUX0RBVEUgPSAnbGFzdF9hdWRpdF9kYXRlJztcbmNvbnN0IFNJR05BVFVSRV9EQVRFID0gJ3NpZ25hdHVyZV9kYXRlJztcbmNvbnN0IEhVTUFOSVRBUklBTl9BSUQgPSAnaHVtYW5pdGFyaWFuX2FpZCc7XG5jb25zdCBESVNBU1RFUl9SRVNQT05TRSA9ICdkaXNhc3Rlcl9yZXNwb25zZSc7XG5jb25zdCBQUk9HUkFNID0gJ3Byb2dyYW0nO1xuY29uc3QgUFJPR1JBTV9QRVJDRU5UQUdFID0gJ3Byb2dyYW1fcGVyY2VudGFnZSc7XG5jb25zdCBQUk9HUkFNX1NFVFRJTkdTID0gJ3Byb2dyYW1fc2V0dGluZ3MnO1xuY29uc3QgTkFUSU9OQUxfUExBTl9PQkpFQ1RJVkUgPSAnbmF0aW9uYWxfcGxhbl9vYmplY3RpdmUnO1xuY29uc3QgUFJJTUFSWV9QUk9HUkFNUyA9ICdwcmltYXJ5X3Byb2dyYW1zJztcbmNvbnN0IFNFQ09OREFSWV9QUk9HUkFNUyA9ICdzZWNvbmRhcnlfcHJvZ3JhbXMnO1xuY29uc3QgVEVSVElBUl9QUk9HUkFNUyA9ICd0ZXJ0aWFyeV9wcm9ncmFtcyc7XG5jb25zdCBHT1ZFUk5NRU5UX0FQUFJPVkFMX1BST0NFRFVSRVMgPSAnZ292ZXJubWVudF9hcHByb3ZhbF9wcm9jZWR1cmVzJztcbmNvbnN0IEpPSU5UX0NSSVRFUklBID0gJ2pvaW50X2NyaXRlcmlhJztcbmNvbnN0IFRFQU0gPSAndGVhbSc7XG5jb25zdCBSRUpFQ1RFRF9JRCA9ICdyZWplY3RlZElkJztcbmNvbnN0IElOVEVSTkFMX0lEID0gJ2ludGVybmFsX2lkJztcbmNvbnN0IEFNUF9JRCA9ICdhbXBfaWQnO1xuY29uc3QgUFJPSkVDVF9USVRMRSA9ICdwcm9qZWN0X3RpdGxlJztcbmNvbnN0IERFU0NSSVBUSU9OID0gJ2Rlc2NyaXB0aW9uJztcbmNvbnN0IE1PRElGSUVEX0JZID0gJ21vZGlmaWVkX2J5JztcbmNvbnN0IE1PRElGSUVEX09OID0gJ3VwZGF0ZV9kYXRlJztcbmNvbnN0IENSRUFURURfQlkgPSAnY3JlYXRlZF9ieSc7XG5jb25zdCBDUkVBVEVEX09OID0gJ2NyZWF0aW9uX2RhdGUnO1xuY29uc3QgTEFTVF9JTVBPUlRFRF9CWSA9ICdsYXN0X2ltcG9ydGVkX2J5JztcbmNvbnN0IENMSUVOVF9DSEFOR0VfSUQgPSAnY2xpZW50LWNoYW5nZS1pZCc7XG5jb25zdCBDTElFTlRfQ1JFQVRFRF9PTiA9ICdjbGllbnQtY3JlYXRlZC1vbic7XG5jb25zdCBDTElFTlRfVVBEQVRFRF9PTiA9ICdjbGllbnQtdXBkYXRlZC1vbic7XG5jb25zdCBJU19QVVNIRUQgPSAnaXMtcHVzaGVkJztcbmNvbnN0IEFDVElWSVRZX0dST1VQID0gJ2FjdGl2aXR5X2dyb3VwJztcbmNvbnN0IFZFUlNJT04gPSAndmVyc2lvbic7XG5jb25zdCBQUk9KRUNUX0NPTU1FTlRTID0gJ3Byb2plY3RfY29tbWVudHMnO1xuY29uc3QgTEVTU09OU19MRUFSTkVEID0gJ2xlc3NvbnNfbGVhcm5lZCc7XG5jb25zdCBQUk9KRUNUX0lNUEFDVCA9ICdwcm9qZWN0X2ltcGFjdCc7XG5jb25zdCBBQ1RJVklUWV9TVU1NQVJZID0gJ2FjdGl2aXR5X3N1bW1hcnknO1xuY29uc3QgQ09ORElUSU9OQUxJVElFUyA9ICdjb25kaXRpb25hbGl0aWVzJztcbmNvbnN0IFBST0pFQ1RfTUFOQUdFTUVOVCA9ICdwcm9qZWN0X21hbmFnZW1lbnQnO1xuY29uc3QgQV9DX0NIQVBURVIgPSAnYV9jX2NoYXB0ZXInO1xuY29uc3QgQ1JJU19OVU1CRVIgPSAnY3Jpc19udW1iZXInO1xuY29uc3QgSUFUSV9JREVOVElGSUVSID0gJ2lhdGlfaWRlbnRpZmllcic7XG5jb25zdCBBQ1RJVklUWV9JTlRFUk5BTF9JRFMgPSAnYWN0aXZpdHlfaW50ZXJuYWxfaWRzJztcbmNvbnN0IEhJRVJBUkNISUNBTF9WQUxVRSA9ICdoaWVyYXJjaGljYWxfdmFsdWUnO1xuY29uc3QgSElFUkFSQ0hJQ0FMX1ZBTFVFX1BBUlRTID0gJ2hpZXJhcmNoaWNhbF92YWx1ZV9wYXJ0cyc7XG5jb25zdCBISUVSQVJDSElDQUxfVkFMVUVfREVQVEggPSAnaGllcmFyY2hpY2FsX3ZhbHVlX2RlcHRoJztcbmNvbnN0IFBQQ19BTU9VTlQgPSAncHBjX2Ftb3VudCc7XG5jb25zdCBSUENfQU1PVU5UID0gJ3JwY19hbW91bnQnO1xuY29uc3QgUFBDX0FOTlVBTF9CVURHRVRTID0gJ3BwY19hbm51YWxfYnVkZ2V0cyc7XG5jb25zdCBBTU9VTlQgPSAnYW1vdW50JztcbmNvbnN0IENVUlJFTkNZID0gJ2N1cnJlbmN5JztcbmNvbnN0IEZVTkRJTkdfREFURSA9ICdmdW5kaW5nX2RhdGUnO1xuY29uc3QgQ09NUE9ORU5UUyA9ICdjb21wb25lbnRzJztcbmNvbnN0IFRPVEFMX05VTUJFUl9PRl9GVU5ESU5HX1NPVVJDRVMgPSAndG90YWxfbnVtYmVyX29mX2Z1bmRpbmdfc291cmNlcyc7XG5jb25zdCBTT1VSQ0VfUk9MRSA9ICdzb3VyY2Vfcm9sZSc7XG5jb25zdCBBTVBfRlVORElOR19JRCA9ICdmdW5kaW5nX2lkJztcbmNvbnN0IElTU1VFUyA9ICdpc3N1ZXMnO1xuY29uc3QgSVNTVUVfREFURSA9ICdpc3N1ZV9kYXRlJztcbmNvbnN0IElTU1VFX05BTUUgPSAnbmFtZSc7XG5jb25zdCBNRUFTVVJFUyA9ICdtZWFzdXJlcyc7XG5jb25zdCBNRUFTVVJFX05BTUUgPSAnbmFtZSc7XG5jb25zdCBNRUFTVVJFX0RBVEUgPSAnbWVhc3VyZV9kYXRlJztcbmNvbnN0IEFDVE9SUyA9ICdhY3RvcnMnO1xuY29uc3QgQUNUT1JfTkFNRSA9ICduYW1lJztcbmNvbnN0IFNUUlVDVFVSRVMgPSAnc3RydWN0dXJlcyc7XG5jb25zdCBTVFJVQ1RVUkVTX1RJVExFID0gJ3RpdGxlJztcbmNvbnN0IFNUUlVDVFVSRVNfREVTQ1JJUFRJT04gPSAnZGVzY3JpcHRpb24nO1xuY29uc3QgU1RSVUNUVVJFU19MQVRJVFVERSA9ICdsYXRpdHVkZSc7XG5jb25zdCBTVFJVQ1RVUkVTX0xPTkdJVFVERSA9ICdsb25naXR1ZGUnO1xuY29uc3QgU1RSVUNUVVJFU19DT0xPUiA9ICdzdHJ1Y3R1cmVfY29sb3InO1xuY29uc3QgU1RSVUNUVVJFU19MQVQgPSAnbGF0JztcbmNvbnN0IFNUUlVDVFVSRVNfTE5HID0gJ2xuZyc7XG5jb25zdCBTVFJVQ1RVUkVTX1NIQVBFID0gJ3NoYXBlJztcbmNvbnN0IFNUUlVDVFVSRVNfUE9JTlQgPSAnUG9pbnQnO1xuY29uc3QgU1RSVUNUVVJFU19QT0xZR09OID0gJ1BvbHlnb24nO1xuY29uc3QgU1RSVUNUVVJFU19QT0xZTElORSA9ICdQb2x5bGluZSc7XG5jb25zdCBTVFJVQ1RVUkVTX0NPT1JESU5BVEVTID0gJ2Nvb3JkaW5hdGVzJztcbmNvbnN0IENPTVBPTkVOVF9UWVBFID0gJ2NvbXBvbmVudF90eXBlJztcbmNvbnN0IENPTVBPTkVOVF9USVRMRSA9ICdjb21wb25lbnRfdGl0bGUnO1xuY29uc3QgQ09NUE9ORU5UX0ZVTkRJTkcgPSAnZnVuZGluZyc7XG5jb25zdCBDT01QT05FTlRfREVTQ1JJUFRJT04gPSAnZGVzY3JpcHRpb24nO1xuY29uc3QgQ09NUE9ORU5UX09SR0FOSVpBVElPTiA9ICdjb21wb25lbnRfb3JnYW5pemF0aW9uJztcbmNvbnN0IEZVTkRJTkdfQU1PVU5UX0lEID0gJ2FtcF9mdW5kaW5nX2Ftb3VudF9pZCc7XG5jb25zdCBFWFRSQV9JTkZPID0gJ2V4dHJhX2luZm8nO1xuY29uc3QgVkFMVUUgPSAndmFsdWUnO1xuY29uc3QgQUNST05ZTSA9ICdhY3JvbnltJztcbmNvbnN0IFRZUEVfT0ZfQ09PUEVSQVRJT04gPSAndHlwZV9vZl9jb29wZXJhdGlvbic7XG5jb25zdCBBTk5VQUxfUFJPSkVDVF9CVURHRVRfSUQgPSAnYW5udWFsX3Byb2plY3RfYnVkZ2V0X2lkJztcbmNvbnN0IFRZUEUgPSAndHlwZSc7XG5jb25zdCBZRUFSID0gJ3llYXInO1xuY29uc3QgR1JPVVBfVkVSU0lPTkVEX0ZVTkRJTkcgPSAnZ3JvdXBfdmVyc2lvbmVkX2Z1bmRpbmcnO1xuY29uc3QgQUNUSVZFX0xJU1QgPSAnYWN0aXZlX2xpc3QnO1xuY29uc3QgQUNUSVZFID0gJ2FjdGl2ZSc7XG5jb25zdCBERUxFR0FURURfQ09PUEVSQVRJT04gPSAnZGVsZWdhdGVkX2Nvb3BlcmF0aW9uJztcbmNvbnN0IERFTEVHQVRFRF9QQVJUTkVSID0gJ2RlbGVnYXRlZF9wYXJ0bmVyJztcbmNvbnN0IEZJTkFOQ0lOR19JRCA9ICdmaW5hbmNpbmdfaWQnO1xuY29uc3QgRElTQlVSU0VNRU5UX09SREVSX0lEID0gJ2Rpc2J1cnNlbWVudF9vcmRlcl9pZCc7XG5jb25zdCBQTEVER0UgPSAncGxlZGdlJztcbmNvbnN0IENBUElUQUxfU1BFTkRJTkdfUEVSQ0VOVEFHRSA9ICdjYXBpdGFsX3NwZW5kaW5nX3BlcmNlbnRhZ2UnO1xuY29uc3QgUkVQT1JUSU5HX0RBVEUgPSAncmVwb3J0aW5nX2RhdGUnO1xuY29uc3QgUkVDSVBJRU5UX1JPTEUgPSAncmVjaXBpZW50X3JvbGUnO1xuY29uc3QgUkVDSVBJRU5UX09SR0FOSVpBVElPTiA9ICdyZWNpcGllbnRfb3JnYW5pemF0aW9uJztcbmNvbnN0IFRFTVBPUkFMX0lEID0gJ190ZW1wb3JhbF9pZCc7XG5jb25zdCBNSU5JU1RSWV9DT0RFID0gJ21pbmlzdHJ5X2NvZGUnO1xuY29uc3QgUFJPSkVDVF9DT0RFID0gJ3Byb2plY3RfY29kZSc7XG5jb25zdCBGWSA9ICdmeSc7XG5jb25zdCBJTkRJUkVDVF9PTl9CVURHRVQgPSAnaW5kaXJlY3Rfb25fYnVkZ2V0JztcbmNvbnN0IElNUExFTUVOVEFUSU9OX0xFVkVMU19FWFRSQV9JTkZPID0gJ2ltcGxlbWVudGF0aW9uLWxldmVscyc7XG5jb25zdCBJTVBMRU1FTlRBVElPTl9MT0NBVElPTl9FWFRSQV9JTkZPID0gJ2ltcGxlbWVudGF0aW9uX2xvY2F0aW9uX25hbWUnO1xuY29uc3QgRE9OT1JfQ09OVEFDVCA9ICdkb25vcl9jb250YWN0X2luZm9ybWF0aW9uJztcbmNvbnN0IFBST0pFQ1RfQ09PUkRJTkFUT1JfQ09OVEFDVCA9ICdwcm9qZWN0X2Nvb3JkaW5hdG9yX2NvbnRhY3RfaW5mb3JtYXRpb24nO1xuY29uc3QgU0VDVE9SX01JTklTVFJZX0NPTlRBQ1QgPSAnc2VjdG9yX21pbmlzdHJ5X2NvbnRhY3RfaW5mb3JtYXRpb24nO1xuY29uc3QgTU9GRURfQ09OVEFDVCA9ICdtb2ZlZF9jb250YWN0X2luZm9ybWF0aW9uJztcbmNvbnN0IElNUExFTUVOVElOR19FWEVDVVRJTkdfQUdFTkNZX0NPTlRBQ1QgPSAnaW1wbGVtZW50aW5nL2V4ZWN1dGluZ19hZ2VuY3lfY29udGFjdF9pbmZvcm1hdGlvbic7XG5jb25zdCBDT05UQUNUID0gJ2NvbnRhY3QnO1xuY29uc3QgT1JHQU5JWkFUSU9OX0dST1VQID0gJ29yZ2FuaXphdGlvbl9ncm91cCc7XG5jb25zdCBGSVhFRF9FWENIQU5HRV9SQVRFID0gJ2ZpeGVkX2V4Y2hhbmdlX3JhdGUnO1xuY29uc3QgUFJJTUFSWV9DT05UQUNUID0gJ21hcmtfYXNfcHJpbWFyeSc7XG5jb25zdCBBQ1RJVklUWV9ET0NVTUVOVFMgPSAnYWN0aXZpdHlfZG9jdW1lbnRzJztcbmNvbnN0IERPQ1VNRU5UX1RZUEUgPSAnZG9jdW1lbnRfdHlwZSc7XG5jb25zdCBJU08yID0gJ2lzbzInO1xuY29uc3QgTVRFRl9QUk9KRUNUSU9OUyA9ICdtdGVmX3Byb2plY3Rpb25zJztcbmNvbnN0IFBST0pFQ1RJT04gPSAncHJvamVjdGlvbic7XG5jb25zdCBQSVBFTElORSA9ICdwaXBlbGluZSc7XG5jb25zdCBQUk9KRUNUSU9OX0RBVEUgPSAncHJvamVjdGlvbl9kYXRlJztcblxuLy8gQWN0aXZpdHkgbGFiZWxzICh1c3VhbGx5IHRob3NlIHRoYXQgZG9uJ3QgY29tZSBhcyBwYXJ0IG9mIEZpZWxkcyBEZWYgRVApXG5jb25zdCBTQU1FX0FTX1BST1BPU0VEX1NUQVJUX0RBVEVfTEFCRUwgPSAnU2FtZSBhcyBQcm9wb3NlZCBTdGFydCBEYXRlJztcbmNvbnN0IFNBTUVfQVNfUFJPUE9TRURfQVBQUk9WQUxfREFURV9MQUJFTCA9ICdTYW1lIGFzIFByb3Bvc2VkIEFwcHJvdmFsIERhdGUnO1xuXG4vLyBBY3Rpdml0eSB2YWxpZGF0aW9uIHJ1bGVzXG5jb25zdCBERVBFTkRFTkNZX0lNUExFTUVOVEFUSU9OX0xFVkVMX1BSRVNFTlQgPSAnaW1wbGVtZW50YXRpb25fbGV2ZWxfcHJlc2VudCc7XG5jb25zdCBERVBFTkRFTkNZX0lNUExFTUVOVEFUSU9OX0xFVkVMX1ZBTElEID0gJ2ltcGxlbWVudGF0aW9uX2xldmVsX3ZhbGlkJztcbmNvbnN0IERFUEVOREVOQ1lfSU1QTEVNRU5UQVRJT05fTE9DQVRJT05fUFJFU0VOVCA9ICdpbXBsZW1lbnRhdGlvbl9sb2NhdGlvbl9wcmVzZW50JztcbmNvbnN0IERFUEVOREVOQ1lfSU1QTEVNRU5UQVRJT05fTE9DQVRJT05fVkFMSUQgPSAnaW1wbGVtZW50YXRpb25fbG9jYXRpb25fdmFsaWQnO1xuY29uc3QgREVQRU5ERU5DWV9QUk9KRUNUX0NPREVfT05fQlVER0VUID0gJ3Byb2plY3RfY29kZV9vbl9idWRnZXQnO1xuY29uc3QgREVQRU5ERU5DWV9PTl9CVURHRVQgPSAnb25fYnVkZ2V0JztcbmNvbnN0IERFUEVOREVOQ1lfVFJBTlNBQ1RJT05fUFJFU0VOVCA9ICd0cmFuc2FjdGlvbl9wcmVzZW50JztcbmNvbnN0IERFUEVOREVOQ1lfQ09NUE9ORU5UX0ZVTkRJTkdfT1JHX1ZBTElEID0gJ29yZ2FuaXphdGlvbl9wcmVzZW50JztcblxuLyoqIElEcyBmb3IgQVAgc2VjdGlvbnMgKiovXG5jb25zdCBBUF9TRUNUSU9OX0lEUyA9XG4gIFt7IGtleTogJ0FQSWRlbnRpZmljYXRpb24nLCBoYXNoOiAnI0FQSWRlbnRpZmljYXRpb24nLCB2YWx1ZTogJ0lkZW50aWZpY2F0aW9uJywgZm1QYXRoOiBGTUMuQUNUSVZJVFlfSURFTlRJRklDQVRJT04gfSxcbiAgICB7IGtleTogJ0FQSW50ZXJuYWxJZHMnLCBoYXNoOiAnI0FQSW50ZXJuYWxJZHMnLCB2YWx1ZTogJ0FnZW5jeSBJbnRlcm5hbCBJRHMnLCBzZWN0aW9uUGF0aDogQUNUSVZJVFlfSU5URVJOQUxfSURTIH0sXG4gICAgeyBrZXk6ICdBUFBsYW5uaW5nJywgaGFzaDogJyNBUFBsYW5uaW5nJywgdmFsdWU6ICdQbGFubmluZycsIGZtUGF0aDogRk1DLkFDVElWSVRZX1BMQU5OSU5HIH0sXG4gICAgeyBrZXk6ICdBUExvY2F0aW9uJywgaGFzaDogJyNBUExvY2F0aW9uJywgdmFsdWU6ICdMb2NhdGlvbicsIHNlY3Rpb25QYXRoOiBMT0NBVElPTlMgfSxcbiAgICB7IGtleTogJ0FQUHJvZ3JhbScsIGhhc2g6ICcjQVBQcm9ncmFtJywgdmFsdWU6ICdQcm9ncmFtJywgZm1QYXRoOiBGTUMuQUNUSVZJVFlfUFJPR1JBTSB9LFxuICAgIHsga2V5OiAnQVBTZWN0b3InLCBoYXNoOiAnI0FQU2VjdG9yJywgdmFsdWU6ICdTZWN0b3JzJywgZm1QYXRoOiBGTUMuQUNUSVZJVFlfU0VDVE9SUyB9LFxuICAgIHtcbiAgICAgIGtleTogJ0FQRnVuZGluZ1NvdXJjZXMnLFxuICAgICAgaGFzaDogJyNBUEZ1bmRpbmdTb3VyY2VzJyxcbiAgICAgIHZhbHVlOiAnRnVuZGluZyBTb3VyY2VzJyxcbiAgICAgIHNlY3Rpb25QYXRoOiBUT1RBTF9OVU1CRVJfT0ZfRlVORElOR19TT1VSQ0VTXG4gICAgfSxcbiAgICB7IGtleTogJ0FQRnVuZGluZycsIGhhc2g6ICcjQVBGdW5kaW5nJywgdmFsdWU6ICdGdW5kaW5nJywgc2VjdGlvblBhdGg6IEZVTkRJTkdTIH0sXG4gICAge1xuICAgICAga2V5OiAnQVBSZWxhdGVkT3JnYW5pemF0aW9ucycsXG4gICAgICBoYXNoOiAnI0FQUmVsYXRlZE9yZ2FuaXphdGlvbnMnLFxuICAgICAgdmFsdWU6ICdSZWxhdGVkIE9yZ2FuaXphdGlvbnMnLFxuICAgICAgZm1QYXRoOiBGTUMuQUNUSVZJVFlfT1JHQU5JWkFUSU9OU1xuICAgIH0sXG4gICAgeyBrZXk6ICdBUElzc3VlcycsIGhhc2g6ICcjQVBJc3N1ZXMnLCB2YWx1ZTogJ0lzc3VlcycsIHNlY3Rpb25QYXRoOiBJU1NVRVMgfSxcbiAgICB7IGtleTogJ0FQQ29udGFjdCcsIGhhc2g6ICcjQVBDb250YWN0JywgdmFsdWU6ICdDb250YWN0IEluZm9ybWF0aW9uJywgZm1QYXRoOiBGTUMuQUNUSVZJVFlfQ09OVEFDVCB9LFxuICAgIHsga2V5OiAnQVBTdHJ1Y3R1cmVzJywgaGFzaDogJyNBUFN0cnVjdHVyZXMnLCB2YWx1ZTogJ1N0cnVjdHVyZXMnLCBzZWN0aW9uUGF0aDogU1RSVUNUVVJFUyB9LFxuICAgIHsga2V5OiAnQVBEb2N1bWVudCcsIGhhc2g6ICcjQVBEb2N1bWVudCcsIHZhbHVlOiAnUmVsYXRlZCBEb2N1bWVudHMnLCBzZWN0aW9uUGF0aDogQUNUSVZJVFlfRE9DVU1FTlRTIH0sXG4gIF07XG5cbi8qKiBDb2x1bW4gY291bnRzIGZvciBlYWNoIHNlY3Rpb24gKiovXG5jb25zdCBBQ1RJVklUWV9JTlRFUk5BTF9JRFNfQ09MUyA9IDM7XG5jb25zdCBBQ1RJVklUWV9QTEFOTklOR19DT0xTID0gMjtcbmNvbnN0IEFDVElWSVRZX0xPQ0FUSU9OX0NPTFMgPSAzO1xuY29uc3QgQUNUSVZJVFlfRlVORElOR19DT0xTID0gMjtcbmNvbnN0IEFDVElWSVRZX0NPTlRBQ1RfQ09MUyA9IDI7XG5jb25zdCBBUF9GVU5ESU5HU19UQUJMRV9DT0xTID0gNDtcblxuY29uc3QgTVVMVElfU0VMRUNUX01JTl9TSVpFID0gODtcbmNvbnN0IE1VTFRJX1NFTEVDVF9NQVhfU0laRSA9IDg7XG5cbi8vIFRPRE86IG1vdmUgdGhlc2UgZnVuY3Rpb25zIHRvIGFuIFV0aWxzIGNsYXNzLlxuY29uc3QgdG9GaWVsZE5hbWVzID0gZnVuY3Rpb24gKGxpc3RPZk5hbWVzKSB7XG4gIHJldHVybiBsaXN0T2ZOYW1lcy5tYXAobmFtZSA9PiB0b0ZpZWxkTmFtZShuYW1lKSk7XG59O1xuXG4vKipcbiAqIENvbnZlcnRzIHRoZSBvcmlnaW5hbCBub24tdHJhbnNsYXRlZCBsYWJlbCB0byBpbnRlcm5hbCBmaWVsZCBuYW1lXG4gKiBAcGFyYW0gbmFtZVxuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5jb25zdCB0b0ZpZWxkTmFtZSA9IGZ1bmN0aW9uIChuYW1lOiBzdHJpbmcpIHtcbiAgcmV0dXJuIG5hbWUudG9Mb3dlckNhc2UoKS5yZXBsYWNlKCcgJywgJ18nKTtcbn07XG5cbi8qKlxuICogQ29udmVydHMgdGhlIGludGVybmFsIGZpZWxkIG5hbWUgdG8gdGhlIE9yaWdpbmFsIG5vbi10cmFuc2xhdGVkIGxhYmVsXG4gKiBAcGFyYW0gZmllbGROYW1lXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cbmNvbnN0IHRvT3JpZ2luYWxMYWJlbCA9IGZ1bmN0aW9uIChmaWVsZE5hbWU6IHN0cmluZykge1xuICByZXR1cm4gY2FwaXRhbGl6ZShmaWVsZE5hbWUucmVwbGFjZSgnXycsICcgJykpO1xufTtcblxuLy8gVE9ETzogbW92ZSBhZ2FpbiBpbnNpZGUgYSBzaGFyZWQgVXRpbHMgY2xhc3MgYmVjYXVzZSB0aGlzIGlzIGEgY29weSBmcm9tIFV0aWxzLmpzXG5jb25zdCBjYXBpdGFsaXplID0gZnVuY3Rpb24gKHRleHQ6IHN0cmluZykge1xuICByZXR1cm4gdGV4dC5yZXBsYWNlKC8oPzpefFxccylcXFMvZywgY2hhciA9PiBjaGFyLnRvVXBwZXJDYXNlKCkpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgT2JqZWN0LmZyZWV6ZSh7XG4gIEFDVElWSVRZX0JVREdFVCxcbiAgQUNUSVZJVFlfU1RBVFVTLFxuICBTVEFUVVNfUkVBU09OLFxuICBGSU5BTkNJQUxfSU5TVFJVTUVOVCxcbiAgVFlQRV9PRl9JTVBMRU1FTlRBVElPTixcbiAgT0JKRUNUSVZFLFxuICBSRVNVTFRTLFxuICBCVURHRVRfQ09ERV9QUk9KRUNUX0lELFxuICBBQ1RVQUxfQVBQUk9WQUxfREFURSxcbiAgRlVORElOR1MsXG4gIEZVTkRJTkdfRE9OT1JfT1JHX0lELFxuICBJU19EUkFGVCxcbiAgT1JHX1JPTEVfT1JHX0lELFxuICBBRERJVElPTkFMX0lORk8sXG4gIFBSSU1BUllfU0VDVE9SUyxcbiAgU0VDT05EQVJZX1NFQ1RPUlMsXG4gIFRFUlRJQVJZX1NFQ1RPUlMsXG4gIFRBR19TRUNUT1JTLFxuICBTRUNUT1IsXG4gIFNFQ1RPUl9QRVJDRU5UQUdFLFxuICBGSU5BTkNJTkdfSU5TVFJVTUVOVCxcbiAgTU9EQUxJVElFUyxcbiAgTElORV9NSU5JU1RSWV9SQU5LLFxuICBHT1ZFUk5NRU5UX0FHUkVFTUVOVF9OVU1CRVIsXG4gIEZVTkRJTkdfU1RBVFVTLFxuICBMT0NBVElPTlMsXG4gIExPQ0FUSU9OLFxuICBMT0NBVElPTl9QRVJDRU5UQUdFLFxuICBJTVBMRU1FTlRBVElPTl9MT0NBVElPTixcbiAgSU1QTEVNRU5UQVRJT05fTEVWRUwsXG4gIEFQUFJPVkFMX1NUQVRVUyxcbiAgQVBQUk9WRURfQlksXG4gIEFQUFJPVkFMX0RBVEUsXG4gIFRZUEVfT0ZfQVNTSVNUQU5DRSxcbiAgRVhQRU5ESVRVUkVfQ0xBU1MsXG4gIEZVTkRJTkdfREVUQUlMUyxcbiAgTU9ERV9PRl9QQVlNRU5ULFxuICBGVU5ESU5HX0NMQVNTSUZJQ0FUSU9OX0RBVEUsXG4gIEFHUkVFTUVOVCxcbiAgRE9OT1JfT0JKRUNUSVZFLFxuICBDT05ESVRJT05TLFxuICBBR1JFRU1FTlRfQ09ERSxcbiAgQUdSRUVNRU5UX1RJVExFLFxuICBQUk9KRUNUX0NBVEVHT1JZLFxuICBQUk9KRUNUX0lNUExFTUVOVElOR19VTklULFxuICBPUkdBTklaQVRJT04sXG4gIFBFUkNFTlRBR0UsXG4gIEFNUF9PUkdBTklaQVRJT05fUk9MRV9JRCxcbiAgUk9MRSxcbiAgRVhFQ1VUSU5HX0FHRU5DWSxcbiAgQ09OVFJBQ1RJTkdfQUdFTkNZLFxuICBCRU5FRklDSUFSWV9BR0VOQ1ksXG4gIElNUExFTUVOVElOR19BR0VOQ1ksXG4gIFJFU1BPTlNJQkxFX09SR0FOSVpBVElPTixcbiAgRE9OT1JfT1JHQU5JWkFUSU9OLFxuICBSRUdJT05BTF9HUk9VUCxcbiAgU0VDVE9SX0dST1VQLFxuICBCVURHRVRTLFxuICBCVURHRVRfQ09ERSxcbiAgQlVER0VUX09SR0FOSVpBVElPTl9DT0RFLFxuICBBUkNISVZFRCxcbiAgVFJBTlNBQ1RJT05fREFURSxcbiAgVFJBTlNBQ1RJT05fVFlQRSxcbiAgQ09NTUlUTUVOVFMsXG4gIERJU0JVUlNFTUVOVFMsXG4gIEVYUEVORElUVVJFUyxcbiAgRVNUSU1BVEVEX0RJU0JVUlNFTUVOVFMsXG4gIFRSQU5TQUNUSU9OX0FNT1VOVCxcbiAgQURKVVNUTUVOVF9UWVBFLFxuICBBQ1RVQUxfU1RBUlRfREFURSxcbiAgUFJPUE9TRURfU1RBUlRfREFURSxcbiAgQUNUVUFMX0NPTVBMRVRJT05fREFURSxcbiAgQ09OVFJBQ1RJTkdfREFURSxcbiAgRElTQlVSU0VNRU5UX0RBVEUsXG4gIFBST1BPU0VEX0FQUFJPVkFMX0RBVEUsXG4gIE9SSUdJTkFMX0NPTVBMRVRJT05fREFURSxcbiAgUFJPUE9TRURfQ09NUExFVElPTl9EQVRFLFxuICBGSU5BTF9EQVRFX0ZPUl9ESVNCVVJTRU1FTlRTLFxuICBGSU5BTF9EQVRFX0ZPUl9DT05UUkFDVElORyxcbiAgRUZGRUNUSVZFX0ZVTkRJTkdfREFURSxcbiAgRlVORElOR19DTE9TSU5HX0RBVEUsXG4gIFJBVElGSUNBVElPTl9EQVRFLFxuICBNQVRVUklUWSxcbiAgTEFTVF9BVURJVF9EQVRFLFxuICBTSUdOQVRVUkVfREFURSxcbiAgSFVNQU5JVEFSSUFOX0FJRCxcbiAgRElTQVNURVJfUkVTUE9OU0UsXG4gIFBST0dSQU0sXG4gIFBST0dSQU1fUEVSQ0VOVEFHRSxcbiAgUFJPR1JBTV9TRVRUSU5HUyxcbiAgTkFUSU9OQUxfUExBTl9PQkpFQ1RJVkUsXG4gIFBSSU1BUllfUFJPR1JBTVMsXG4gIFNFQ09OREFSWV9QUk9HUkFNUyxcbiAgVEVSVElBUl9QUk9HUkFNUyxcbiAgR09WRVJOTUVOVF9BUFBST1ZBTF9QUk9DRURVUkVTLFxuICBKT0lOVF9DUklURVJJQSxcbiAgVEVBTSxcbiAgUkVKRUNURURfSUQsXG4gIElOVEVSTkFMX0lELFxuICBBTVBfSUQsXG4gIFBST0pFQ1RfVElUTEUsXG4gIERFU0NSSVBUSU9OLFxuICBNT0RJRklFRF9CWSxcbiAgTU9ESUZJRURfT04sXG4gIENSRUFURURfQlksXG4gIENSRUFURURfT04sXG4gIExBU1RfSU1QT1JURURfQlksXG4gIENMSUVOVF9DSEFOR0VfSUQsXG4gIENMSUVOVF9DUkVBVEVEX09OLFxuICBDTElFTlRfVVBEQVRFRF9PTixcbiAgSVNfUFVTSEVELFxuICBBQ1RJVklUWV9HUk9VUCxcbiAgVkVSU0lPTixcbiAgUFJPSkVDVF9DT01NRU5UUyxcbiAgTEVTU09OU19MRUFSTkVELFxuICBQUk9KRUNUX0lNUEFDVCxcbiAgQUNUSVZJVFlfU1VNTUFSWSxcbiAgQ09ORElUSU9OQUxJVElFUyxcbiAgUFJPSkVDVF9NQU5BR0VNRU5ULFxuICBBX0NfQ0hBUFRFUixcbiAgQ1JJU19OVU1CRVIsXG4gIElBVElfSURFTlRJRklFUixcbiAgQUNUSVZJVFlfSU5URVJOQUxfSURTLFxuICBISUVSQVJDSElDQUxfVkFMVUUsXG4gIEhJRVJBUkNISUNBTF9WQUxVRV9QQVJUUyxcbiAgSElFUkFSQ0hJQ0FMX1ZBTFVFX0RFUFRILFxuICBQUENfQU1PVU5ULFxuICBSUENfQU1PVU5ULFxuICBQUENfQU5OVUFMX0JVREdFVFMsXG4gIEFNT1VOVCxcbiAgQ1VSUkVOQ1ksXG4gIEZVTkRJTkdfREFURSxcbiAgQ09NUE9ORU5UUyxcbiAgVE9UQUxfTlVNQkVSX09GX0ZVTkRJTkdfU09VUkNFUyxcbiAgU09VUkNFX1JPTEUsXG4gIEFNUF9GVU5ESU5HX0lELFxuICBJU1NVRVMsXG4gIElTU1VFX0RBVEUsXG4gIElTU1VFX05BTUUsXG4gIE1FQVNVUkVTLFxuICBNRUFTVVJFX05BTUUsXG4gIE1FQVNVUkVfREFURSxcbiAgQUNUT1JTLFxuICBBQ1RPUl9OQU1FLFxuICBTVFJVQ1RVUkVTLFxuICBTVFJVQ1RVUkVTX1RJVExFLFxuICBTVFJVQ1RVUkVTX0RFU0NSSVBUSU9OLFxuICBTVFJVQ1RVUkVTX0xBVElUVURFLFxuICBTVFJVQ1RVUkVTX0xPTkdJVFVERSxcbiAgU1RSVUNUVVJFU19DT0xPUixcbiAgU1RSVUNUVVJFU19MQVQsXG4gIFNUUlVDVFVSRVNfTE5HLFxuICBTVFJVQ1RVUkVTX1NIQVBFLFxuICBTVFJVQ1RVUkVTX1BPSU5ULFxuICBTVFJVQ1RVUkVTX1BPTFlHT04sXG4gIFNUUlVDVFVSRVNfUE9MWUxJTkUsXG4gIFNUUlVDVFVSRVNfQ09PUkRJTkFURVMsXG4gIENPTVBPTkVOVF9UWVBFLFxuICBDT01QT05FTlRfVElUTEUsXG4gIENPTVBPTkVOVF9GVU5ESU5HLFxuICBDT01QT05FTlRfREVTQ1JJUFRJT04sXG4gIENPTVBPTkVOVF9PUkdBTklaQVRJT04sXG4gIEZVTkRJTkdfQU1PVU5UX0lELFxuICBFWFRSQV9JTkZPLFxuICBWQUxVRSxcbiAgQUNST05ZTSxcbiAgVFlQRV9PRl9DT09QRVJBVElPTixcbiAgQU5OVUFMX1BST0pFQ1RfQlVER0VUX0lELFxuICBUWVBFLFxuICBZRUFSLFxuICBHUk9VUF9WRVJTSU9ORURfRlVORElORyxcbiAgQUNUSVZFX0xJU1QsXG4gIEFDVElWRSxcbiAgREVMRUdBVEVEX0NPT1BFUkFUSU9OLFxuICBERUxFR0FURURfUEFSVE5FUixcbiAgRklOQU5DSU5HX0lELFxuICBESVNCVVJTRU1FTlRfT1JERVJfSUQsXG4gIFBMRURHRSxcbiAgQ0FQSVRBTF9TUEVORElOR19QRVJDRU5UQUdFLFxuICBSRVBPUlRJTkdfREFURSxcbiAgUkVDSVBJRU5UX1JPTEUsXG4gIFJFQ0lQSUVOVF9PUkdBTklaQVRJT04sXG4gIFRFTVBPUkFMX0lELFxuICBNSU5JU1RSWV9DT0RFLFxuICBQUk9KRUNUX0NPREUsXG4gIEZZLFxuICBJTkRJUkVDVF9PTl9CVURHRVQsXG4gIElNUExFTUVOVEFUSU9OX0xFVkVMU19FWFRSQV9JTkZPLFxuICBJTVBMRU1FTlRBVElPTl9MT0NBVElPTl9FWFRSQV9JTkZPLFxuICBET05PUl9DT05UQUNULFxuICBQUk9KRUNUX0NPT1JESU5BVE9SX0NPTlRBQ1QsXG4gIFNFQ1RPUl9NSU5JU1RSWV9DT05UQUNULFxuICBNT0ZFRF9DT05UQUNULFxuICBJTVBMRU1FTlRJTkdfRVhFQ1VUSU5HX0FHRU5DWV9DT05UQUNULFxuICBDT05UQUNULFxuICBPUkdBTklaQVRJT05fR1JPVVAsXG4gIEZJWEVEX0VYQ0hBTkdFX1JBVEUsXG4gIFBSSU1BUllfQ09OVEFDVCxcbiAgQUNUSVZJVFlfRE9DVU1FTlRTLFxuICBET0NVTUVOVF9UWVBFLFxuICBJU08yLFxuICBNVEVGX1BST0pFQ1RJT05TLFxuICBQUk9KRUNUSU9OLFxuICBQSVBFTElORSxcbiAgUFJPSkVDVElPTl9EQVRFLFxuICBTQU1FX0FTX1BST1BPU0VEX1NUQVJUX0RBVEVfTEFCRUwsXG4gIFNBTUVfQVNfUFJPUE9TRURfQVBQUk9WQUxfREFURV9MQUJFTCxcbiAgREVQRU5ERU5DWV9JTVBMRU1FTlRBVElPTl9MRVZFTF9QUkVTRU5ULFxuICBERVBFTkRFTkNZX0lNUExFTUVOVEFUSU9OX0xFVkVMX1ZBTElELFxuICBERVBFTkRFTkNZX0lNUExFTUVOVEFUSU9OX0xPQ0FUSU9OX1BSRVNFTlQsXG4gIERFUEVOREVOQ1lfSU1QTEVNRU5UQVRJT05fTE9DQVRJT05fVkFMSUQsXG4gIERFUEVOREVOQ1lfUFJPSkVDVF9DT0RFX09OX0JVREdFVCxcbiAgREVQRU5ERU5DWV9PTl9CVURHRVQsXG4gIERFUEVOREVOQ1lfVFJBTlNBQ1RJT05fUFJFU0VOVCxcbiAgREVQRU5ERU5DWV9DT01QT05FTlRfRlVORElOR19PUkdfVkFMSUQsXG4gIEFQX1NFQ1RJT05fSURTLFxuICBBQ1RJVklUWV9JTlRFUk5BTF9JRFNfQ09MUyxcbiAgQUNUSVZJVFlfUExBTk5JTkdfQ09MUyxcbiAgQUNUSVZJVFlfTE9DQVRJT05fQ09MUyxcbiAgQUNUSVZJVFlfRlVORElOR19DT0xTLFxuICBBQ1RJVklUWV9DT05UQUNUX0NPTFMsXG4gIEFQX0ZVTkRJTkdTX1RBQkxFX0NPTFMsXG4gIE1VTFRJX1NFTEVDVF9NSU5fU0laRSxcbiAgTVVMVElfU0VMRUNUX01BWF9TSVpFLFxuICB0b0ZpZWxkTmFtZXMsXG4gIHRvRmllbGROYW1lLFxuICB0b09yaWdpbmFsTGFiZWwsXG4gIGNhcGl0YWxpemVcbn0pO1xuIiwiaW1wb3J0IFRlc3RBUEZpZWxkIGZyb20gJy4vYWN0aXZpdHlQcmV2aWV3L2NvbXBvbmVudHMvVGVzdEFQRmllbGQnO1xuaW1wb3J0IFRlc3RpbmdTZWN0aW9uIGZyb20gJy4vYWN0aXZpdHlQcmV2aWV3L2NvbXBvbmVudHMvVGVzdGluZ1NlY3Rpb24nO1xuaW1wb3J0IENvbnN0YW50cyBmcm9tICcuL3V0aWxzL0NvbnN0YW50cyc7XG5pbXBvcnQgQWN0aXZpdHlDb25zdGFudHMgZnJvbSAnLi9tb2R1bGVzL3V0aWwvQWN0aXZpdHlDb25zdGFudHMnO1xuaW1wb3J0IEZlYXR1cmVNYW5hZ2VyQ29uc3RhbnRzIGZyb20gJy4vbW9kdWxlcy91dGlsL0ZlYXR1cmVNYW5hZ2VyQ29uc3RhbnRzJztcblxuZXhwb3J0IHsgVGVzdEFQRmllbGQsIFRlc3RpbmdTZWN0aW9uLCBDb25zdGFudHMsIEFjdGl2aXR5Q29uc3RhbnRzLCBGZWF0dXJlTWFuYWdlckNvbnN0YW50cyB9O1xuXG5leHBvcnQgZGVmYXVsdCB7IFRlc3RBUEZpZWxkLCBUZXN0aW5nU2VjdGlvbiwgQ29uc3RhbnRzLCBBY3Rpdml0eUNvbnN0YW50cywgRmVhdHVyZU1hbmFnZXJDb25zdGFudHMgfTtcbiJdLCJuYW1lcyI6WyJUZXN0QVBGaWVsZCIsInRybkxhYmVsIiwidmFsdWUiLCJpbmxpbmUiLCJzZXBhcmF0b3IiLCJuYW1lQ2xhc3MiLCJ2YWx1ZUNsYXNzIiwiUmVhY3QiLCJwcm9wcyIsInRyYW5zbGF0ZSIsImFtcExvZ2dlciIsImxvZyIsInVzZVNlcGFyYXRvciIsImRpc3BsYXlDbGFzcyIsImZpZWxkQ2xhc3MiLCJzdHlsZXMiLCJibG9jayIsImNsYXNzTmFtZXMiLCJmaWVsZFZhbHVlQ2xhc3MiLCJkaXNwbGF5VmFsdWUiLCJBcnJheSIsImlzQXJyYXkiLCJPYmplY3QiLCJmb3JFYWNoIiwicHVzaCIsInYiLCJzb3J0Iiwiam9pbiIsIlN0cmluZyIsInVzZUlubmVySFRNTCIsIl9faHRtbCIsImZpZWxkTmFtZUNsYXNzIiwidGl0bGUiLCJfZ2V0VmFsdWUiLCJDb21wb25lbnQiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJhbnkiLCJib29sIiwib2JqZWN0IiwiaXNSZXF1aXJlZCIsImZ1bmMiLCJUZXN0aW5nU2VjdGlvbiIsIlNFUlZFUl9VUkwiLCJCQVNFX1JFU1RfVVJMIiwiUFJPVE9DT0wiLCJCQVNFX1BPUlQiLCJDT05ORUNUSU9OX1RJTUVPVVQiLCJDT05ORUNUSU9OX0ZPUkNFRF9USU1FT1VUIiwiVElNRU9VVF9DSEVDS19JTlRFUlZBTCIsIk1BWF9SRVRSWV9BVEVNUFRTIiwiRVJST1JTX1RPX1JFVFJZIiwiRVJST1JTX05PX0FNUF9TRVJWRVIiLCJDT05ORUNUSVZJVFlfQ0hFQ0tfSU5URVJWQUwiLCJXT1JLU1BBQ0VfVVJMIiwiTE9HSU5fVVJMIiwiREVTS1RPUF9VUkwiLCJERVNLVE9QX0NVUlJFTlRfVVJMIiwiU1lOQ1VQX1JFRElSRUNUX1VSTCIsIlNZTkNVUF9ISVNUT1JZX1RBUkdFVCIsIlNZTkNVUF9TVU1NQVJZX1VSTCIsIkFDVElWSVRZX1BSRVZJRVdfVVJMIiwiQUNUSVZJVFlfRURJVF9VUkwiLCJVUERBVEVfVVJMIiwiU0VUVVBfVVJMIiwiU0VUVElOR1NfVVJMIiwiQ09MTEVDVElPTl9VU0VSUyIsIkNPTExFQ1RJT05fV09SS1BBQ0VTIiwiQ09MTEVDVElPTl9URUFNTUVNQkVSUyIsIkNPTExFQ1RJT05fQ0xJRU5UX1NFVFRJTkdTIiwiQ09MTEVDVElPTl9HTE9CQUxfU0VUVElOR1MiLCJDT0xMRUNUSU9OX0FDVElWSVRJRVMiLCJDT0xMRUNUSU9OX0ZJRUxEUyIsIkNPTExFQ1RJT05fUE9TU0lCTEVfVkFMVUVTIiwiQ09MTEVDVElPTl9TWU5DVVBfTE9HIiwiQ09MTEVDVElPTl9MQU5HUyIsIkNPTExFQ1RJT05fV1NfU0VUVElOR1MiLCJDT0xMRUNUSU9OX0NVUlJFTkNZX1JBVEVTIiwiQ09MTEVDVElPTl9GRUFUVVJFX01BTkFHRVIiLCJDT0xMRUNUSU9OX0NPTlRBQ1RTIiwiQ09MTEVDVElPTl9SRVNPVVJDRVMiLCJDT0xMRUNUSU9OX1JFUE9TSVRPUlkiLCJDT0xMRUNUSU9OX0dBWkVUVEVFUiIsIkNPTExFQ1RJT05fQ0FMRU5EQVJTIiwiQ09MTEVDVElPTl9DSEFOR0VTRVRTIiwiR0FaRVRURUVSX0RJU1RBTkNFX0RJVklERSIsIkRCX0ZJTEVfUFJFRklYIiwiREJfRklMRV9FWFRFTlNJT04iLCJEQl9DT01NT05fREFUQVNUT1JFX09QVElPTlMiLCJhdXRvbG9hZCIsImNvcnJ1cHRBbGVydFRocmVzaG9sZCIsIkRCX0FVVE9DT01QQUNUX0lOVEVSVkFMX01JTElTRUNPTkRTIiwiREJfREVGQVVMVF9RVUVSWV9MSU1JVCIsIkxBTkdVQUdFX0VOR0xJU0giLCJGU19MT0NBTEVTX0RJUkVDVE9SWSIsIkxBTkdVQUdFX01BU1RFUl9UUkFOU0xBVElPTlNfRklMRSIsIkxBTkdVQUdFX1RSQU5TTEFUSU9OU19GSUxFIiwiTEFOR1VBR0VfTkVXX1RSQU5TTEFUSU9OU19NVVNUX1NZTkMiLCJBU0FSX0RJUiIsIkFQUF9ESVJFQ1RPUlkiLCJURVNUX0RJUkVDVE9SWSIsIlNUQVRJQ19ESVIiLCJJTUFHRVNfRElSIiwiRE9DX0lDT05TIiwiREJfU1RBVElDX0RJUiIsIk1JR1JBVElPTlNfRElSIiwiSEFTSF9JVEVSQVRJT05TIiwiRElHRVNUX0FMR09SSVRITV9TSEExIiwiRElHRVNUX0FMR09SSVRITV9TSEEyNTYiLCJBQ1RJVklUWV9FRElUIiwiQUNUSVZJVFlfVklFVyIsIlNZTkNVUF9GT1JDRV9EQVlTIiwiU1lOQ1VQX0JFU1RfQkVGT1JFX0RBWVMiLCJTWU5DVVBfTk9fREFURSIsIlNZTkNVUF9UWVBFX1RSQU5TTEFUSU9OUyIsIlNZTkNVUF9UWVBFX1VTRVJTIiwiU1lOQ1VQX1RZUEVfQVNTRVRTIiwiU1lOQ1VQX1RZUEVfV09SS1NQQUNFUyIsIlNZTkNVUF9UWVBFX0dTIiwiU1lOQ1VQX1RZUEVfRVhDSEFOR0VfUkFURVMiLCJTWU5DVVBfVFlQRV9GRUFUVVJFX01BTkFHRVIiLCJTWU5DVVBfVFlQRV9XT1JLU1BBQ0VfTUVNQkVSUyIsIlNZTkNVUF9UWVBFX0FMTF9GSUVMRFMiLCJTWU5DVVBfVFlQRV9BQ1RJVklUSUVTX1BVTEwiLCJTWU5DVVBfVFlQRV9BQ1RJVklUSUVTX1BVU0giLCJTWU5DVVBfVFlQRV9BQ1RJVklUWV9GSUVMRFMiLCJTWU5DVVBfVFlQRV9BQ1RJVklUWV9GSUVMRFNfU1RSVUNUVVJBTF9DSEFOR0VTIiwiU1lOQ1VQX1RZUEVfQ09OVEFDVFNfUFVMTCIsIlNZTkNVUF9UWVBFX0NPTlRBQ1RTX1BVU0giLCJTWU5DVVBfVFlQRV9BQ1RJVklUWV9QT1NTSUJMRV9WQUxVRVMiLCJTWU5DVVBfVFlQRV9DT05UQUNUX0ZJRUxEUyIsIlNZTkNVUF9UWVBFX0NPTlRBQ1RfRklFTERTX1NUUlVDVFVSQUxfQ0hBTkdFUyIsIlNZTkNVUF9UWVBFX0NPTlRBQ1RfUE9TU0lCTEVfVkFMVUVTIiwiU1lOQ1VQX1RZUEVfUkVTT1VSQ0VTX1BVTEwiLCJTWU5DVVBfVFlQRV9SRVNPVVJDRVNfUFVTSCIsIlNZTkNVUF9UWVBFX1JFU09VUkNFX0ZJRUxEUyIsIlNZTkNVUF9UWVBFX1JFU09VUkNFX0ZJRUxEU19TVFJVQ1RVUkFMX0NIQU5HRVMiLCJTWU5DVVBfVFlQRV9SRVNPVVJDRV9QT1NTSUJMRV9WQUxVRVMiLCJTWU5DVVBfVFlQRV9DT01NT05fUE9TU0lCTEVfVkFMVUVTIiwiU1lOQ1VQX1RZUEVfV09SS1NQQUNFX1NFVFRJTkdTIiwiU1lOQ1VQX1RZUEVfTUFQX1RJTEVTIiwiU1lOQ1VQX1RZUEVfR0FaRVRURUVSIiwiU1lOQ1VQX1RZUEVfQ0FMRU5EQVJTIiwiU1lOQ1VQX1NUQVRVU19TVUNDRVNTIiwiU1lOQ1VQX1NUQVRVU19GQUlMIiwiU1lOQ1VQX1NUQVRVU19QQVJUSUFMIiwiU1lOQ1VQX1NUQVRVU19DQU5DRUxFRCIsIlNZTkNVUF9TWU5DX1JFUVVFU1RFRF9BVCIsIlNZTkNVUF9TWU5DX1JFUVVFU1RFRF9CWSIsIlNZTkNVUF9EQVRFVElNRV9GSUVMRCIsIlNZTkNVUF9ESUZGX0xFRlRPVkVSIiwiU1lOQ1VQX0RFUEVOREVOQ1lfQ0hFQ0tfSU5URVJWQUwiLCJTWU5DVVBfREVUQUlMU19TWU5DRUQiLCJTWU5DVVBfREVUQUlMU19VTlNZTkNFRCIsIlNZTkNVUF9SRVNPVVJDRV9QVUxMX0JBVENIX1NJWkUiLCJTWU5DVVBfQUNUSVZJVElFU19QVUxMX0JBVENIX1NJWkUiLCJTWU5DVVBfQ09OVEFDVFNfUFVMTF9CQVRDSF9TSVpFIiwiQUNUSVZJVFlfU1RBVFVTX0RSQUZUIiwiQUNUSVZJVFlfU1RBVFVTX1VOVkFMSURBVEVEIiwiQUNUSVZJVFlfU1RBVFVTX1ZBTElEQVRFRCIsIkNVUlJFTkNZX0hPVVIiLCJERUZBVUxUX0NVUlJFTkNZIiwiUkFURV9TQU1FX0NVUlJFTkNZIiwiUkFURV9DVVJSRU5DWV9OT1RfRk9VTkQiLCJDVVJSRU5DWV9QQUlSIiwiVkVSU0lPTl9QQVRURVJOIiwiVkVSU0lPTl9QQVRURVJOX0dST1VQU19UT19FWFRSQUNUIiwiQU1QX0NPVU5UUllfTE9HTyIsIkFTU0VUU19ESVJFQ1RPUlkiLCJCQVNFXzY0X1BOR19QUkVGSVgiLCJUUkFOU1BBUkVOVF9GTEFHIiwiSEVMUF9QREZfRklMRU5BTUUiLCJIRUxQX0RJUiIsIkVORFNfV0lUSF9QVU5DVFVBVElPTl9SRUdFWCIsIk1BUF9USUxFU19ESVIiLCJUSUxFU19aSVBfRklMRSIsIk1BUF9NQVJLRVJfSU1BR0UiLCJNQVBfTUFSS0VSX1NIQURPVyIsIk1BUF9NQVJLRVJfQ0lSQ0xFX1JFRCIsIk1BUF9NQVJLRVJfQ0lSQ0xFX0dSRUVOIiwiUE9MWUdPTl9CQVNFX0NPTE9SIiwiREdfQ09NUEFOWV9OQU1FIiwiREdfQUREUkVTU18xIiwiREdfQUREUkVTU18yIiwiREdfQ09OVEFDVF9JTkZPIiwiTE9HX0RJUiIsIkxPR19GSUxFX05BTUUiLCJMT0dfRklMRV9FWFRFTlNJT04iLCJNRVNTQUdFX1RJTUVPVVQiLCJNRVNTQUdFX0RJU0FQUEVBUl9USU1FT1VUIiwiTUVTU0FHRV9DSEVDS19JTlRFUlZBTCIsIk1FU1NBR0VfQU5JTUFUSU9OX0RVUkFUSU9OIiwiSU5URVJOQUxfREFURV9GT1JNQVQiLCJNSU5fU1VQUE9SVEVEX1lFQVIiLCJNQVhfU1VQUE9SVEVEX1lFQVIiLCJVUERBVEVTX0RJUiIsIkNPTlRFTlRfRElTUE9TSVRJT05fSEVBREVSIiwiVVBEQVRFX1RNUF9GSUxFIiwiT1RIRVJfSUQiLCJOUl9TWU5DX0hJU1RPUllfRU5UUklFUyIsIk5SX0xPR19GSUxFUyIsIk9MRF9TWU5DX0xPR1NfRFVSQVRJT05fSVNPXzg2MDEiLCJOUl9PTERfU1lOQ19MT0dTX1RPX0tFRVBfTUlOSU1VTSIsIk1BU1RFUl9CUkFOQ0giLCJERVZFTE9QX0JSQU5DSCIsIlJFTEVBU0VfQlJBTkNIX1JFR0VYIiwiUkVMRUFTRV9CUkFOQ0hFUyIsIkRJU0FCTEVfQ0hBTkdFTE9HUyIsIm1vZHVsZSIsImZyZWV6ZSIsIlBVQkxJQ19WSUVXX0NIQU5HRV9QQVNTV09SRCIsIlBVQkxJQ19WSUVXX1RST1VCTEVfU0lHTl9JTiIsIkFDVElWSVRZX0RFTElWRVJZX1JBVEUiLCJBQ1RJVklUWV9QUk9KRUNUX0lEX0FORF9QTEFOTklORyIsIkFDVElWSVRZX0RVUkFUSU9OX09GX1BST0pFQ1QiLCJBQ1RJVklUWV9URUFNX0xFQURFUiIsIkFDVElWSVRZX1NBTUVfQVNfUFJPUE9TRURfU1RBUlRfREFURSIsIkFDVElWSVRZX1NBTUVfQVNfUFJPUE9TRURfQVBQUk9WQUxfREFURSIsIkFDVElWSVRZX0lERU5USUZJQ0FUSU9OIiwiQUNUSVZJVFlfTEFTVF9VUERBVEVEX0JZIiwiQUNUSVZJVFlfTEFTVF9VUERBVEVEX09OIiwiQUNUSVZJVFlfRlVORElORyIsIkFGX0ZVTkRJTkdfRlVORElOR0dST1VQX0ZVTkRJTkdJVEVNIiwiQUNUSVZJVFlfU0VDVE9SUyIsIkFDVElWSVRZX1BSSU1BUllfU0VDVE9SUyIsIkFDVElWSVRZX1NFQ09OREFSWV9TRUNUT1JTIiwiQUNUSVZJVFlfU1RSVUNUVVJFUyIsIkFDVElWSVRZX1NUUlVDVFVSRVNfQUREX1NUUlVDVFVSRSIsIkFDVElWSVRZX09SR0FOSVpBVElPTlMiLCJBQ1RJVklUWV9PUkdBTklaQVRJT05TX0RPTk9SX09SR0FOSVpBVElPTiIsIkFDVElWSVRZX09SR0FOSVpBVElPTlNfQkVORUZJQ0lBUllfQUdFTkNZIiwiQUNUSVZJVFlfT1JHQU5JWkFUSU9OU19DT05UUkFDVElOR19BR0VOQ1kiLCJBQ1RJVklUWV9PUkdBTklaQVRJT05TX0VYRUNVVElOR19BR0VOQ1kiLCJBQ1RJVklUWV9PUkdBTklaQVRJT05TX0lNUExFTUVOVElOR19BR0VOQ1kiLCJBQ1RJVklUWV9PUkdBTklaQVRJT05TX1JFR0lPTkFMX0dST1VQIiwiQUNUSVZJVFlfT1JHQU5JWkFUSU9OU19SRUxBVEVEX0dPVkVSTk1FTlRfT1JHQU5JWkFUSU9OIiwiQUNUSVZJVFlfT1JHQU5JWkFUSU9OU19TRUNUT1JfR1JPVVAiLCJBRERfRlVORElOR19BVVRPIiwiQUNUSVZJVFlfT1JHQU5JWkFUSU9OU19CRU5FRklDSUFSWV9BR0VOQ1lfQUREX0ZVTkRJTkdfQVVUTyIsIkFDVElWSVRZX09SR0FOSVpBVElPTlNfQ09OVFJBQ1RJTkdfQUdFTkNZX0FERF9GVU5ESU5HX0FVVE8iLCJBQ1RJVklUWV9PUkdBTklaQVRJT05TX0RPTk9SX09SR0FOSVpBVElPTl9BRERfRlVORElOR19BVVRPIiwiQUNUSVZJVFlfT1JHQU5JWkFUSU9OU19FWEVDVVRJTkdfQUdFTkNZX0FERF9GVU5ESU5HX0FVVE8iLCJBQ1RJVklUWV9PUkdBTklaQVRJT05TX0lNUExFTUVOVElOR19BR0VOQ1lfQUREX0ZVTkRJTkdfQVVUTyIsIkFDVElWSVRZX09SR0FOSVpBVElPTlNfUkVHSU9OQUxfR1JPVVBfQUREX0ZVTkRJTkdfQVVUTyIsIkFDVElWSVRZX09SR0FOSVpBVElPTlNfUkVTUE9OU0lCTEVfT1JHQU5JWkFUSU9OX0FERF9GVU5ESU5HX0FVVE8iLCJBQ1RJVklUWV9PUkdBTklaQVRJT05TX1NFQ1RPUl9HUk9VUF9BRERfRlVORElOR19BVVRPIiwiQUNUSVZJVFlfRlVORElOR19TRUFSQ0giLCJBQ1RJVklUWV9GVU5ESU5HX1NFQVJDSF9PUkdBTklaQVRJT04iLCJBQ1RJVklUWV9GVU5ESU5HX1NFTEVDVF9PUkdfVFlQRSIsIkFDVElWSVRZX1BST0dSQU0iLCJBQ1RJVklUWV9QTEFOTklORyIsIkFDVElWSVRZX0NPTlRBQ1QiLCJBQ1RJVklUWV9ET0NVTUVOVFNfQUREX0RPQ1VNRU5UIiwiQUNUSVZJVFlfRE9DVU1FTlRTX0FERF9XRUJMSU5LIiwiQUNUSVZJVFlfSVNTVUVTX0FERF9JU1NVRSIsIkFDVElWSVRZX0lTU1VFU19ERUxFVEVfSVNTVUUiLCJBQ1RJVklUWV9JU1NVRVNfQUREX01FQVNVUkUiLCJBQ1RJVklUWV9JU1NVRVNfREVMRVRFX01FQVNVUkUiLCJBQ1RJVklUWV9JU1NVRVNfQUREX0FDVE9SIiwiQUNUSVZJVFlfSVNTVUVTX0RFTEVURV9BQ1RPUiIsIkFDVElWSVRZX0RJU0JVUlNFTUVOVFNfRlVORElOR19GTE9XU19PUkdST0xFX0FERF9JTVBMRU1FTlRJTkdfQUdFTkNZIiwiQUNUSVZJVFlfRElTQlVSU0VNRU5UU19GVU5ESU5HX0ZMT1dTX09SR1JPTEVfQUREX0NPTlRSQUNUSU5HX0FHRU5DWSIsIkFDVElWSVRZX0RJU0JVUlNFTUVOVFNfRlVORElOR19GTE9XU19PUkdST0xFX0FERF9CRU5FRklDSUFSWV9BR0VOQ1kiLCJBQ1RJVklUWV9ESVNCVVJTRU1FTlRTX0ZVTkRJTkdfRkxPV1NfT1JHUk9MRV9BRERfRE9OT1JfT1JHQU5JWkFUSU9OIiwiQUNUSVZJVFlfRElTQlVSU0VNRU5UU19GVU5ESU5HX0ZMT1dTX09SR1JPTEVfQUREX0VYRUNVVElOR19BR0VOQ1kiLCJBQ1RJVklUWV9ESVNCVVJTRU1FTlRTX0ZVTkRJTkdfRkxPV1NfT1JHUk9MRV9BRERfUkVHSU9OQUxfR1JPVVAiLCJBQ1RJVklUWV9ESVNCVVJTRU1FTlRTX0ZVTkRJTkdfRkxPV1NfT1JHUk9MRV9BRERfUkVTUE9OU0lCTEVfT1JHQU5JWkFUSU9OIiwiQUNUSVZJVFlfRElTQlVSU0VNRU5UU19GVU5ESU5HX0ZMT1dTX09SR1JPTEVfQUREX1NFQ1RPUl9HUk9VUCIsIkFDVElWSVRZX0NPTU1JVE1FTlRTX0ZVTkRJTkdfRkxPV1NfT1JHUk9MRV9BRERfSU1QTEVNRU5USU5HX0FHRU5DWSIsIkFDVElWSVRZX0NPTU1JVE1FTlRTX0ZVTkRJTkdfRkxPV1NfT1JHUk9MRV9BRERfQ09OVFJBQ1RJTkdfQUdFTkNZIiwiQUNUSVZJVFlfQ09NTUlUTUVOVFNfRlVORElOR19GTE9XU19PUkdST0xFX0FERF9CRU5FRklDSUFSWV9BR0VOQ1kiLCJBQ1RJVklUWV9DT01NSVRNRU5UU19GVU5ESU5HX0ZMT1dTX09SR1JPTEVfQUREX0RPTk9SX09SR0FOSVpBVElPTiIsIkFDVElWSVRZX0NPTU1JVE1FTlRTX0ZVTkRJTkdfRkxPV1NfT1JHUk9MRV9BRERfRVhFQ1VUSU5HX0FHRU5DWSIsIkFDVElWSVRZX0NPTU1JVE1FTlRTX0ZVTkRJTkdfRkxPV1NfT1JHUk9MRV9BRERfUkVHSU9OQUxfR1JPVVAiLCJBQ1RJVklUWV9DT01NSVRNRU5UU19GVU5ESU5HX0ZMT1dTX09SR1JPTEVfQUREX1JFU1BPTlNJQkxFX09SR0FOSVpBVElPTiIsIkFDVElWSVRZX0NPTU1JVE1FTlRTX0ZVTkRJTkdfRkxPV1NfT1JHUk9MRV9BRERfU0VDVE9SX0dST1VQIiwiQUNUSVZJVFlfRVhQRU5ESVRVUkVTX0ZVTkRJTkdfRkxPV1NfT1JHUk9MRV9BRERfSU1QTEVNRU5USU5HX0FHRU5DWSIsIkFDVElWSVRZX0VYUEVORElUVVJFU19GVU5ESU5HX0ZMT1dTX09SR1JPTEVfQUREX0NPTlRSQUNUSU5HX0FHRU5DWSIsIkFDVElWSVRZX0VYUEVORElUVVJFU19GVU5ESU5HX0ZMT1dTX09SR1JPTEVfQUREX0JFTkVGSUNJQVJZX0FHRU5DWSIsIkFDVElWSVRZX0VYUEVORElUVVJFU19GVU5ESU5HX0ZMT1dTX09SR1JPTEVfQUREX0RPTk9SX09SR0FOSVpBVElPTiIsIkFDVElWSVRZX0VYUEVORElUVVJFU19GVU5ESU5HX0ZMT1dTX09SR1JPTEVfQUREX0VYRUNVVElOR19BR0VOQ1kiLCJBQ1RJVklUWV9FWFBFTkRJVFVSRVNfRlVORElOR19GTE9XU19PUkdST0xFX0FERF9SRUdJT05BTF9HUk9VUCIsIkFDVElWSVRZX0VYUEVORElUVVJFU19GVU5ESU5HX0ZMT1dTX09SR1JPTEVfQUREX1JFU1BPTlNJQkxFX09SR0FOSVpBVElPTiIsIkFDVElWSVRZX0VYUEVORElUVVJFU19GVU5ESU5HX0ZMT1dTX09SR1JPTEVfQUREX1NFQ1RPUl9HUk9VUCIsIk1URUZfUFJPSkVDVElPTlMiLCJNVEVGX1BST0pFQ1RJT05TX0FNT1VOVCIsIk1URUZfUFJPSkVDVElPTlNfQ1VSUkVOQ1kiLCJNVEVGX1BST0pFQ1RJT05TX1BST0pFQ1RJT04iLCJNVEVGX1BST0pFQ1RJT05TX0RBVEUiLCJBQ1RJVklUWV9CVURHRVQiLCJBQ1RJVklUWV9TVEFUVVMiLCJTVEFUVVNfUkVBU09OIiwiRklOQU5DSUFMX0lOU1RSVU1FTlQiLCJUWVBFX09GX0lNUExFTUVOVEFUSU9OIiwiT0JKRUNUSVZFIiwiUkVTVUxUUyIsIkJVREdFVF9DT0RFX1BST0pFQ1RfSUQiLCJBQ1RVQUxfQVBQUk9WQUxfREFURSIsIkZVTkRJTkdTIiwiRlVORElOR19ET05PUl9PUkdfSUQiLCJJU19EUkFGVCIsIk9SR19ST0xFX09SR19JRCIsIkFERElUSU9OQUxfSU5GTyIsIlBSSU1BUllfU0VDVE9SUyIsIlNFQ09OREFSWV9TRUNUT1JTIiwiVEVSVElBUllfU0VDVE9SUyIsIlRBR19TRUNUT1JTIiwiU0VDVE9SIiwiU0VDVE9SX1BFUkNFTlRBR0UiLCJGSU5BTkNJTkdfSU5TVFJVTUVOVCIsIk1PREFMSVRJRVMiLCJMSU5FX01JTklTVFJZX1JBTksiLCJHT1ZFUk5NRU5UX0FHUkVFTUVOVF9OVU1CRVIiLCJGVU5ESU5HX1NUQVRVUyIsIkxPQ0FUSU9OUyIsIkxPQ0FUSU9OIiwiTE9DQVRJT05fUEVSQ0VOVEFHRSIsIklNUExFTUVOVEFUSU9OX0xPQ0FUSU9OIiwiSU1QTEVNRU5UQVRJT05fTEVWRUwiLCJBUFBST1ZBTF9TVEFUVVMiLCJBUFBST1ZFRF9CWSIsIkFQUFJPVkFMX0RBVEUiLCJUWVBFX09GX0FTU0lTVEFOQ0UiLCJFWFBFTkRJVFVSRV9DTEFTUyIsIkZVTkRJTkdfREVUQUlMUyIsIk1PREVfT0ZfUEFZTUVOVCIsIkZVTkRJTkdfQ0xBU1NJRklDQVRJT05fREFURSIsIkFHUkVFTUVOVCIsIkRPTk9SX09CSkVDVElWRSIsIkNPTkRJVElPTlMiLCJBR1JFRU1FTlRfQ09ERSIsIkFHUkVFTUVOVF9USVRMRSIsIlBST0pFQ1RfQ0FURUdPUlkiLCJQUk9KRUNUX0lNUExFTUVOVElOR19VTklUIiwiT1JHQU5JWkFUSU9OIiwiUEVSQ0VOVEFHRSIsIkFNUF9PUkdBTklaQVRJT05fUk9MRV9JRCIsIlJPTEUiLCJFWEVDVVRJTkdfQUdFTkNZIiwiQ09OVFJBQ1RJTkdfQUdFTkNZIiwiQkVORUZJQ0lBUllfQUdFTkNZIiwiSU1QTEVNRU5USU5HX0FHRU5DWSIsIlJFU1BPTlNJQkxFX09SR0FOSVpBVElPTiIsIkRPTk9SX09SR0FOSVpBVElPTiIsIlJFR0lPTkFMX0dST1VQIiwiU0VDVE9SX0dST1VQIiwiQlVER0VUUyIsIkJVREdFVF9DT0RFIiwiQlVER0VUX09SR0FOSVpBVElPTl9DT0RFIiwiQVJDSElWRUQiLCJUUkFOU0FDVElPTl9EQVRFIiwiVFJBTlNBQ1RJT05fVFlQRSIsIkNPTU1JVE1FTlRTIiwiRElTQlVSU0VNRU5UUyIsIkVYUEVORElUVVJFUyIsIkVTVElNQVRFRF9ESVNCVVJTRU1FTlRTIiwiVFJBTlNBQ1RJT05fQU1PVU5UIiwiQURKVVNUTUVOVF9UWVBFIiwiQUNUVUFMX1NUQVJUX0RBVEUiLCJQUk9QT1NFRF9TVEFSVF9EQVRFIiwiQUNUVUFMX0NPTVBMRVRJT05fREFURSIsIkNPTlRSQUNUSU5HX0RBVEUiLCJESVNCVVJTRU1FTlRfREFURSIsIlBST1BPU0VEX0FQUFJPVkFMX0RBVEUiLCJPUklHSU5BTF9DT01QTEVUSU9OX0RBVEUiLCJQUk9QT1NFRF9DT01QTEVUSU9OX0RBVEUiLCJGSU5BTF9EQVRFX0ZPUl9ESVNCVVJTRU1FTlRTIiwiRklOQUxfREFURV9GT1JfQ09OVFJBQ1RJTkciLCJFRkZFQ1RJVkVfRlVORElOR19EQVRFIiwiRlVORElOR19DTE9TSU5HX0RBVEUiLCJSQVRJRklDQVRJT05fREFURSIsIk1BVFVSSVRZIiwiTEFTVF9BVURJVF9EQVRFIiwiU0lHTkFUVVJFX0RBVEUiLCJIVU1BTklUQVJJQU5fQUlEIiwiRElTQVNURVJfUkVTUE9OU0UiLCJQUk9HUkFNIiwiUFJPR1JBTV9QRVJDRU5UQUdFIiwiUFJPR1JBTV9TRVRUSU5HUyIsIk5BVElPTkFMX1BMQU5fT0JKRUNUSVZFIiwiUFJJTUFSWV9QUk9HUkFNUyIsIlNFQ09OREFSWV9QUk9HUkFNUyIsIlRFUlRJQVJfUFJPR1JBTVMiLCJHT1ZFUk5NRU5UX0FQUFJPVkFMX1BST0NFRFVSRVMiLCJKT0lOVF9DUklURVJJQSIsIlRFQU0iLCJSRUpFQ1RFRF9JRCIsIklOVEVSTkFMX0lEIiwiQU1QX0lEIiwiUFJPSkVDVF9USVRMRSIsIkRFU0NSSVBUSU9OIiwiTU9ESUZJRURfQlkiLCJNT0RJRklFRF9PTiIsIkNSRUFURURfQlkiLCJDUkVBVEVEX09OIiwiTEFTVF9JTVBPUlRFRF9CWSIsIkNMSUVOVF9DSEFOR0VfSUQiLCJDTElFTlRfQ1JFQVRFRF9PTiIsIkNMSUVOVF9VUERBVEVEX09OIiwiSVNfUFVTSEVEIiwiQUNUSVZJVFlfR1JPVVAiLCJWRVJTSU9OIiwiUFJPSkVDVF9DT01NRU5UUyIsIkxFU1NPTlNfTEVBUk5FRCIsIlBST0pFQ1RfSU1QQUNUIiwiQUNUSVZJVFlfU1VNTUFSWSIsIkNPTkRJVElPTkFMSVRJRVMiLCJQUk9KRUNUX01BTkFHRU1FTlQiLCJBX0NfQ0hBUFRFUiIsIkNSSVNfTlVNQkVSIiwiSUFUSV9JREVOVElGSUVSIiwiQUNUSVZJVFlfSU5URVJOQUxfSURTIiwiSElFUkFSQ0hJQ0FMX1ZBTFVFIiwiSElFUkFSQ0hJQ0FMX1ZBTFVFX1BBUlRTIiwiSElFUkFSQ0hJQ0FMX1ZBTFVFX0RFUFRIIiwiUFBDX0FNT1VOVCIsIlJQQ19BTU9VTlQiLCJQUENfQU5OVUFMX0JVREdFVFMiLCJBTU9VTlQiLCJDVVJSRU5DWSIsIkZVTkRJTkdfREFURSIsIkNPTVBPTkVOVFMiLCJUT1RBTF9OVU1CRVJfT0ZfRlVORElOR19TT1VSQ0VTIiwiU09VUkNFX1JPTEUiLCJBTVBfRlVORElOR19JRCIsIklTU1VFUyIsIklTU1VFX0RBVEUiLCJJU1NVRV9OQU1FIiwiTUVBU1VSRVMiLCJNRUFTVVJFX05BTUUiLCJNRUFTVVJFX0RBVEUiLCJBQ1RPUlMiLCJBQ1RPUl9OQU1FIiwiU1RSVUNUVVJFUyIsIlNUUlVDVFVSRVNfVElUTEUiLCJTVFJVQ1RVUkVTX0RFU0NSSVBUSU9OIiwiU1RSVUNUVVJFU19MQVRJVFVERSIsIlNUUlVDVFVSRVNfTE9OR0lUVURFIiwiU1RSVUNUVVJFU19DT0xPUiIsIlNUUlVDVFVSRVNfTEFUIiwiU1RSVUNUVVJFU19MTkciLCJTVFJVQ1RVUkVTX1NIQVBFIiwiU1RSVUNUVVJFU19QT0lOVCIsIlNUUlVDVFVSRVNfUE9MWUdPTiIsIlNUUlVDVFVSRVNfUE9MWUxJTkUiLCJTVFJVQ1RVUkVTX0NPT1JESU5BVEVTIiwiQ09NUE9ORU5UX1RZUEUiLCJDT01QT05FTlRfVElUTEUiLCJDT01QT05FTlRfRlVORElORyIsIkNPTVBPTkVOVF9ERVNDUklQVElPTiIsIkNPTVBPTkVOVF9PUkdBTklaQVRJT04iLCJGVU5ESU5HX0FNT1VOVF9JRCIsIkVYVFJBX0lORk8iLCJWQUxVRSIsIkFDUk9OWU0iLCJUWVBFX09GX0NPT1BFUkFUSU9OIiwiQU5OVUFMX1BST0pFQ1RfQlVER0VUX0lEIiwiVFlQRSIsIllFQVIiLCJHUk9VUF9WRVJTSU9ORURfRlVORElORyIsIkFDVElWRV9MSVNUIiwiQUNUSVZFIiwiREVMRUdBVEVEX0NPT1BFUkFUSU9OIiwiREVMRUdBVEVEX1BBUlRORVIiLCJGSU5BTkNJTkdfSUQiLCJESVNCVVJTRU1FTlRfT1JERVJfSUQiLCJQTEVER0UiLCJDQVBJVEFMX1NQRU5ESU5HX1BFUkNFTlRBR0UiLCJSRVBPUlRJTkdfREFURSIsIlJFQ0lQSUVOVF9ST0xFIiwiUkVDSVBJRU5UX09SR0FOSVpBVElPTiIsIlRFTVBPUkFMX0lEIiwiTUlOSVNUUllfQ09ERSIsIlBST0pFQ1RfQ09ERSIsIkZZIiwiSU5ESVJFQ1RfT05fQlVER0VUIiwiSU1QTEVNRU5UQVRJT05fTEVWRUxTX0VYVFJBX0lORk8iLCJJTVBMRU1FTlRBVElPTl9MT0NBVElPTl9FWFRSQV9JTkZPIiwiRE9OT1JfQ09OVEFDVCIsIlBST0pFQ1RfQ09PUkRJTkFUT1JfQ09OVEFDVCIsIlNFQ1RPUl9NSU5JU1RSWV9DT05UQUNUIiwiTU9GRURfQ09OVEFDVCIsIklNUExFTUVOVElOR19FWEVDVVRJTkdfQUdFTkNZX0NPTlRBQ1QiLCJDT05UQUNUIiwiT1JHQU5JWkFUSU9OX0dST1VQIiwiRklYRURfRVhDSEFOR0VfUkFURSIsIlBSSU1BUllfQ09OVEFDVCIsIkFDVElWSVRZX0RPQ1VNRU5UUyIsIkRPQ1VNRU5UX1RZUEUiLCJJU08yIiwiUFJPSkVDVElPTiIsIlBJUEVMSU5FIiwiUFJPSkVDVElPTl9EQVRFIiwiU0FNRV9BU19QUk9QT1NFRF9TVEFSVF9EQVRFX0xBQkVMIiwiU0FNRV9BU19QUk9QT1NFRF9BUFBST1ZBTF9EQVRFX0xBQkVMIiwiREVQRU5ERU5DWV9JTVBMRU1FTlRBVElPTl9MRVZFTF9QUkVTRU5UIiwiREVQRU5ERU5DWV9JTVBMRU1FTlRBVElPTl9MRVZFTF9WQUxJRCIsIkRFUEVOREVOQ1lfSU1QTEVNRU5UQVRJT05fTE9DQVRJT05fUFJFU0VOVCIsIkRFUEVOREVOQ1lfSU1QTEVNRU5UQVRJT05fTE9DQVRJT05fVkFMSUQiLCJERVBFTkRFTkNZX1BST0pFQ1RfQ09ERV9PTl9CVURHRVQiLCJERVBFTkRFTkNZX09OX0JVREdFVCIsIkRFUEVOREVOQ1lfVFJBTlNBQ1RJT05fUFJFU0VOVCIsIkRFUEVOREVOQ1lfQ09NUE9ORU5UX0ZVTkRJTkdfT1JHX1ZBTElEIiwiQVBfU0VDVElPTl9JRFMiLCJrZXkiLCJoYXNoIiwiZm1QYXRoIiwiRk1DIiwic2VjdGlvblBhdGgiLCJBQ1RJVklUWV9JTlRFUk5BTF9JRFNfQ09MUyIsIkFDVElWSVRZX1BMQU5OSU5HX0NPTFMiLCJBQ1RJVklUWV9MT0NBVElPTl9DT0xTIiwiQUNUSVZJVFlfRlVORElOR19DT0xTIiwiQUNUSVZJVFlfQ09OVEFDVF9DT0xTIiwiQVBfRlVORElOR1NfVEFCTEVfQ09MUyIsIk1VTFRJX1NFTEVDVF9NSU5fU0laRSIsIk1VTFRJX1NFTEVDVF9NQVhfU0laRSIsInRvRmllbGROYW1lcyIsImxpc3RPZk5hbWVzIiwibWFwIiwidG9GaWVsZE5hbWUiLCJuYW1lIiwidG9Mb3dlckNhc2UiLCJyZXBsYWNlIiwidG9PcmlnaW5hbExhYmVsIiwiZmllbGROYW1lIiwiY2FwaXRhbGl6ZSIsInRleHQiLCJjaGFyIiwidG9VcHBlckNhc2UiLCJDb25zdGFudHMiLCJBY3Rpdml0eUNvbnN0YW50cyIsIkZlYXR1cmVNYW5hZ2VyQ29uc3RhbnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsU0FBUyxXQUFXLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRTtFQUM3QixLQUFLLEdBQUcsS0FBSyxLQUFLLENBQUMsR0FBRyxHQUFHLEdBQUcsRUFBRSxDQUFDO0VBQy9CLElBQUksUUFBUSxHQUFHLEdBQUcsQ0FBQyxRQUFRLENBQUM7O0VBRTVCLElBQUksQ0FBQyxHQUFHLElBQUksT0FBTyxRQUFRLEtBQUssV0FBVyxFQUFFLEVBQUUsT0FBTyxFQUFFOztFQUV4RCxJQUFJLElBQUksR0FBRyxRQUFRLENBQUMsSUFBSSxJQUFJLFFBQVEsQ0FBQyxvQkFBb0IsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztFQUNyRSxJQUFJLEtBQUssR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0VBQzVDLEtBQUssQ0FBQyxJQUFJLEdBQUcsVUFBVSxDQUFDOztFQUV4QixJQUFJLFFBQVEsS0FBSyxLQUFLLEVBQUU7SUFDdEIsSUFBSSxJQUFJLENBQUMs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
