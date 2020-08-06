// https://www.terraform.io/docs/providers/oci/r/data_oci_waas_address_lists.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "address_lists": {
        "type": [
          "list",
          [
            "object",
            {
              "address_count": "number",
              "addresses": [
                "list",
                "string"
              ],
              "compartment_id": "string",
              "defined_tags": [
                "map",
                "string"
              ],
              "display_name": "string",
              "freeform_tags": [
                "map",
                "string"
              ],
              "id": "string",
              "state": "string",
              "time_created": "string"
            }
          ]
        ],
        "computed": true
      },
      "compartment_id": {
        "type": "string",
        "required": true
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
      "names": {
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

export interface DataOciWaasAddressListsConfig extends TerraformMetaArguments {
  readonly compartmentId: string;
  readonly ids?: string[];
  readonly names?: string[];
  readonly states?: string[];
  readonly timeCreatedGreaterThanOrEqualTo?: string;
  readonly timeCreatedLessThan?: string;
  /** filter block */
  readonly filter?: DataOciWaasAddressListsFilter[];
}
export class DataOciWaasAddressListsAddressLists extends ComplexComputedList {

  // address_count - computed: true, optional: false, required: true
  public get addressCount() {
    return this.getNumberAttribute('address_count');
  }

  // addresses - computed: true, optional: false, required: true
  public get addresses() {
    return this.getListAttribute('addresses');
  }

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

  // freeform_tags - computed: true, optional: false, required: true
  public get freeformTags() {
    return 'not implemented' as any;
  }

  // id - computed: true, optional: false, required: true
  public get id() {
    return this.getStringAttribute('id');
  }

  // state - computed: true, optional: false, required: true
  public get state() {
    return this.getStringAttribute('state');
  }

  // time_created - computed: true, optional: false, required: true
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }
}
export interface DataOciWaasAddressListsFilter {
  readonly name: string;
  readonly regex?: boolean;
  readonly values: string[];
}

// Resource

export class DataOciWaasAddressLists extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataOciWaasAddressListsConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_waas_address_lists',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._compartmentId = config.compartmentId;
    this._ids = config.ids;
    this._names = config.names;
    this._states = config.states;
    this._timeCreatedGreaterThanOrEqualTo = config.timeCreatedGreaterThanOrEqualTo;
    this._timeCreatedLessThan = config.timeCreatedLessThan;
    this._filter = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // address_lists - computed: true, optional: false, required: true
  public addressLists(index: string) {
    return new DataOciWaasAddressListsAddressLists(this, 'address_lists', index);
  }

  // compartment_id - computed: false, optional: false, required: true
  private _compartmentId: string;
  public get compartmentId() {
    return this._compartmentId;
  }
  public set compartmentId(value: string) {
    this._compartmentId = value;
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

  // names - computed: false, optional: true, required: false
  private _names?: string[];
  public get names() {
    return this._names;
  }
  public set names(value: string[] | undefined) {
    this._names = value;
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
  private _filter?: DataOciWaasAddressListsFilter[];
  public get filter() {
    return this._filter;
  }
  public set filter(value: DataOciWaasAddressListsFilter[] | undefined) {
    this._filter = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      compartment_id: this._compartmentId,
      ids: this._ids,
      names: this._names,
      states: this._states,
      time_created_greater_than_or_equal_to: this._timeCreatedGreaterThanOrEqualTo,
      time_created_less_than: this._timeCreatedLessThan,
      filter: this._filter,
    };
  }
}
