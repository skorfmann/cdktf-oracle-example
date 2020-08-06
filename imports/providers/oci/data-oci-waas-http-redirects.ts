// https://www.terraform.io/docs/providers/oci/r/data_oci_waas_http_redirects.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "compartment_id": {
        "type": "string",
        "required": true
      },
      "display_names": {
        "type": [
          "list",
          "string"
        ],
        "optional": true
      },
      "http_redirects": {
        "type": [
          "list",
          [
            "object",
            {
              "compartment_id": "string",
              "defined_tags": [
                "map",
                "string"
              ],
              "display_name": "string",
              "domain": "string",
              "freeform_tags": [
                "map",
                "string"
              ],
              "id": "string",
              "response_code": "number",
              "state": "string",
              "target": [
                "list",
                [
                  "object",
                  {
                    "host": "string",
                    "path": "string",
                    "port": "number",
                    "protocol": "string",
                    "query": "string"
                  }
                ]
              ],
              "time_created": "string"
            }
          ]
        ],
        "computed": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "ids": {
        "type": [
          "list",
          "string"
        ],
        "optional": true
      },
      "states": {
        "type": [
          "list",
          "string"
        ],
        "optional": true
      },
      "time_created_greater_than_or_equal_to": {
        "type": "string",
        "optional": true
      },
      "time_created_less_than": {
        "type": "string",
        "optional": true
      }
    },
    "block_types": {
      "filter": {
        "nesting_mode": "set",
        "block": {
          "attributes": {
            "name": {
              "type": "string",
              "required": true
            },
            "regex": {
              "type": "bool",
              "optional": true
            },
            "values": {
              "type": [
                "list",
                "string"
              ],
              "required": true
            }
          }
        }
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';
import { ComplexComputedList } from "cdktf";

// Configuration

export interface DataOciWaasHttpRedirectsConfig extends TerraformMetaArguments {
  readonly compartmentId: string;
  readonly displayNames?: string[];
  readonly ids?: string[];
  readonly states?: string[];
  readonly timeCreatedGreaterThanOrEqualTo?: string;
  readonly timeCreatedLessThan?: string;
  /** filter block */
  readonly filter?: DataOciWaasHttpRedirectsFilter[];
}
export class DataOciWaasHttpRedirectsHttpRedirectsTarget extends ComplexComputedList {

  // host - computed: true, optional: false, required: true
  public get host() {
    return this.getStringAttribute('host');
  }

  // path - computed: true, optional: false, required: true
  public get path() {
    return this.getStringAttribute('path');
  }

  // port - computed: true, optional: false, required: true
  public get port() {
    return this.getNumberAttribute('port');
  }

  // protocol - computed: true, optional: false, required: true
  public get protocol() {
    return this.getStringAttribute('protocol');
  }

  // query - computed: true, optional: false, required: true
  public get query() {
    return this.getStringAttribute('query');
  }
}
export class DataOciWaasHttpRedirectsHttpRedirects extends ComplexComputedList {

  // compartment_id - computed: true, optional: false, required: true
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // defined_tags - computed: true, optional: false, required: true
  public get definedTags() {
    return 'not implemented' as any;
  }

  // display_name - computed: true, optional: false, required: true
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // domain - computed: true, optional: false, required: true
  public get domain() {
    return this.getStringAttribute('domain');
  }

  // freeform_tags - computed: true, optional: false, required: true
  public get freeformTags() {
    return 'not implemented' as any;
  }

  // id - computed: true, optional: false, required: true
  public get id() {
    return this.getStringAttribute('id');
  }

  // response_code - computed: true, optional: false, required: true
  public get responseCode() {
    return this.getNumberAttribute('response_code');
  }

  // state - computed: true, optional: false, required: true
  public get state() {
    return this.getStringAttribute('state');
  }

  // target - computed: true, optional: false, required: true
  public get target() {
    return 'not implemented' as any;
  }

  // time_created - computed: true, optional: false, required: true
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }
}
export interface DataOciWaasHttpRedirectsFilter {
  readonly name: string;
  readonly regex?: boolean;
  readonly values: string[];
}

// Resource

export class DataOciWaasHttpRedirects extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataOciWaasHttpRedirectsConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_waas_http_redirects',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._compartmentId = config.compartmentId;
    this._displayNames = config.displayNames;
    this._ids = config.ids;
    this._states = config.states;
    this._timeCreatedGreaterThanOrEqualTo = config.timeCreatedGreaterThanOrEqualTo;
    this._timeCreatedLessThan = config.timeCreatedLessThan;
    this._filter = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compartment_id - computed: false, optional: false, required: true
  private _compartmentId: string;
  public get compartmentId() {
    return this._compartmentId;
  }
  public set compartmentId(value: string) {
    this._compartmentId = value;
  }

  // display_names - computed: false, optional: true, required: false
  private _displayNames?: string[];
  public get displayNames() {
    return this._displayNames;
  }
  public set displayNames(value: string[] | undefined) {
    this._displayNames = value;
  }

  // http_redirects - computed: true, optional: false, required: true
  public httpRedirects(index: string) {
    return new DataOciWaasHttpRedirectsHttpRedirects(this, 'http_redirects', index);
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // ids - computed: false, optional: true, required: false
  private _ids?: string[];
  public get ids() {
    return this._ids;
  }
  public set ids(value: string[] | undefined) {
    this._ids = value;
  }

  // states - computed: false, optional: true, required: false
  private _states?: string[];
  public get states() {
    return this._states;
  }
  public set states(value: string[] | undefined) {
    this._states = value;
  }

  // time_created_greater_than_or_equal_to - computed: false, optional: true, required: false
  private _timeCreatedGreaterThanOrEqualTo?: string;
  public get timeCreatedGreaterThanOrEqualTo() {
    return this._timeCreatedGreaterThanOrEqualTo;
  }
  public set timeCreatedGreaterThanOrEqualTo(value: string | undefined) {
    this._timeCreatedGreaterThanOrEqualTo = value;
  }

  // time_created_less_than - computed: false, optional: true, required: false
  private _timeCreatedLessThan?: string;
  public get timeCreatedLessThan() {
    return this._timeCreatedLessThan;
  }
  public set timeCreatedLessThan(value: string | undefined) {
    this._timeCreatedLessThan = value;
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: DataOciWaasHttpRedirectsFilter[];
  public get filter() {
    return this._filter;
  }
  public set filter(value: DataOciWaasHttpRedirectsFilter[] | undefined) {
    this._filter = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      compartment_id: this._compartmentId,
      display_names: this._displayNames,
      ids: this._ids,
      states: this._states,
      time_created_greater_than_or_equal_to: this._timeCreatedGreaterThanOrEqualTo,
      time_created_less_than: this._timeCreatedLessThan,
      filter: this._filter,
    };
  }
}
