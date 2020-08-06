// https://www.terraform.io/docs/providers/oci/r/data_oci_ocvp_esxi_hosts.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "compute_instance_id": {
        "type": "string",
        "optional": true
      },
      "display_name": {
        "type": "string",
        "optional": true
      },
      "esxi_host_collection": {
        "type": [
          "list",
          [
            "object",
            {
              "compartment_id": "string",
              "compute_instance_id": "string",
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
              "sddc_id": "string",
              "state": "string",
              "time_created": "string",
              "time_updated": "string"
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
      "sddc_id": {
        "type": "string",
        "optional": true
      },
      "state": {
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

export interface DataOciOcvpEsxiHostsConfig extends TerraformMetaArguments {
  readonly computeInstanceId?: string;
  readonly displayName?: string;
  readonly sddcId?: string;
  readonly state?: string;
  /** filter block */
  readonly filter?: DataOciOcvpEsxiHostsFilter[];
}
export class DataOciOcvpEsxiHostsEsxiHostCollection extends ComplexComputedList {

  // compartment_id - computed: true, optional: false, required: true
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // compute_instance_id - computed: true, optional: false, required: true
  public get computeInstanceId() {
    return this.getStringAttribute('compute_instance_id');
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

  // sddc_id - computed: true, optional: false, required: true
  public get sddcId() {
    return this.getStringAttribute('sddc_id');
  }

  // state - computed: true, optional: false, required: true
  public get state() {
    return this.getStringAttribute('state');
  }

  // time_created - computed: true, optional: false, required: true
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_updated - computed: true, optional: false, required: true
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }
}
export interface DataOciOcvpEsxiHostsFilter {
  readonly name: string;
  readonly regex?: boolean;
  readonly values: string[];
}

// Resource

export class DataOciOcvpEsxiHosts extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataOciOcvpEsxiHostsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'oci_ocvp_esxi_hosts',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._computeInstanceId = config.computeInstanceId;
    this._displayName = config.displayName;
    this._sddcId = config.sddcId;
    this._state = config.state;
    this._filter = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compute_instance_id - computed: false, optional: true, required: false
  private _computeInstanceId?: string;
  public get computeInstanceId() {
    return this._computeInstanceId;
  }
  public set computeInstanceId(value: string | undefined) {
    this._computeInstanceId = value;
  }

  // display_name - computed: false, optional: true, required: false
  private _displayName?: string;
  public get displayName() {
    return this._displayName;
  }
  public set displayName(value: string | undefined) {
    this._displayName = value;
  }

  // esxi_host_collection - computed: true, optional: false, required: true
  public esxiHostCollection(index: string) {
    return new DataOciOcvpEsxiHostsEsxiHostCollection(this, 'esxi_host_collection', index);
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // sddc_id - computed: false, optional: true, required: false
  private _sddcId?: string;
  public get sddcId() {
    return this._sddcId;
  }
  public set sddcId(value: string | undefined) {
    this._sddcId = value;
  }

  // state - computed: false, optional: true, required: false
  private _state?: string;
  public get state() {
    return this._state;
  }
  public set state(value: string | undefined) {
    this._state = value;
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: DataOciOcvpEsxiHostsFilter[];
  public get filter() {
    return this._filter;
  }
  public set filter(value: DataOciOcvpEsxiHostsFilter[] | undefined) {
    this._filter = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      compute_instance_id: this._computeInstanceId,
      display_name: this._displayName,
      sddc_id: this._sddcId,
      state: this._state,
      filter: this._filter,
    };
  }
}
