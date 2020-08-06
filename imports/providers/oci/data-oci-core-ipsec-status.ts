// https://www.terraform.io/docs/providers/oci/r/data_oci_core_ipsec_status.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "compartment_id": {
        "type": "string",
        "computed": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "ipsec_id": {
        "type": "string",
        "required": true
      },
      "time_created": {
        "type": "string",
        "computed": true
      },
      "tunnels": {
        "type": [
          "list",
          [
            "object",
            {
              "ip_address": "string",
              "state": "string",
              "time_created": "string",
              "time_state_modified": "string"
            }
          ]
        ],
        "computed": true
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

export interface DataOciCoreIpsecStatusConfig extends TerraformMetaArguments {
  readonly ipsecId: string;
  /** filter block */
  readonly filter?: DataOciCoreIpsecStatusFilter[];
}
export class DataOciCoreIpsecStatusTunnels extends ComplexComputedList {

  // ip_address - computed: true, optional: false, required: true
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }

  // state - computed: true, optional: false, required: true
  public get state() {
    return this.getStringAttribute('state');
  }

  // time_created - computed: true, optional: false, required: true
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_state_modified - computed: true, optional: false, required: true
  public get timeStateModified() {
    return this.getStringAttribute('time_state_modified');
  }
}
export interface DataOciCoreIpsecStatusFilter {
  readonly name: string;
  readonly regex?: boolean;
  readonly values: string[];
}

// Resource

export class DataOciCoreIpsecStatus extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataOciCoreIpsecStatusConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_core_ipsec_status',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._ipsecId = config.ipsecId;
    this._filter = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compartment_id - computed: true, optional: false, required: true
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // ipsec_id - computed: false, optional: false, required: true
  private _ipsecId: string;
  public get ipsecId() {
    return this._ipsecId;
  }
  public set ipsecId(value: string) {
    this._ipsecId = value;
  }

  // time_created - computed: true, optional: false, required: true
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // tunnels - computed: true, optional: false, required: true
  public tunnels(index: string) {
    return new DataOciCoreIpsecStatusTunnels(this, 'tunnels', index);
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: DataOciCoreIpsecStatusFilter[];
  public get filter() {
    return this._filter;
  }
  public set filter(value: DataOciCoreIpsecStatusFilter[] | undefined) {
    this._filter = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      ipsec_id: this._ipsecId,
      filter: this._filter,
    };
  }
}
