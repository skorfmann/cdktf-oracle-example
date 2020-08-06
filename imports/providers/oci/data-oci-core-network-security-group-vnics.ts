// https://www.terraform.io/docs/providers/oci/r/data_oci_core_network_security_group_vnics.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "network_security_group_id": {
        "type": "string",
        "required": true
      },
      "network_security_group_vnics": {
        "type": [
          "list",
          [
            "object",
            {
              "resource_id": "string",
              "time_associated": "string",
              "vnic_id": "string"
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

export interface DataOciCoreNetworkSecurityGroupVnicsConfig extends TerraformMetaArguments {
  readonly networkSecurityGroupId: string;
  /** filter block */
  readonly filter?: DataOciCoreNetworkSecurityGroupVnicsFilter[];
}
export class DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnics extends ComplexComputedList {

  // resource_id - computed: true, optional: false, required: true
  public get resourceId() {
    return this.getStringAttribute('resource_id');
  }

  // time_associated - computed: true, optional: false, required: true
  public get timeAssociated() {
    return this.getStringAttribute('time_associated');
  }

  // vnic_id - computed: true, optional: false, required: true
  public get vnicId() {
    return this.getStringAttribute('vnic_id');
  }
}
export interface DataOciCoreNetworkSecurityGroupVnicsFilter {
  readonly name: string;
  readonly regex?: boolean;
  readonly values: string[];
}

// Resource

export class DataOciCoreNetworkSecurityGroupVnics extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataOciCoreNetworkSecurityGroupVnicsConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_core_network_security_group_vnics',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._networkSecurityGroupId = config.networkSecurityGroupId;
    this._filter = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // network_security_group_id - computed: false, optional: false, required: true
  private _networkSecurityGroupId: string;
  public get networkSecurityGroupId() {
    return this._networkSecurityGroupId;
  }
  public set networkSecurityGroupId(value: string) {
    this._networkSecurityGroupId = value;
  }

  // network_security_group_vnics - computed: true, optional: false, required: true
  public networkSecurityGroupVnics(index: string) {
    return new DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnics(this, 'network_security_group_vnics', index);
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: DataOciCoreNetworkSecurityGroupVnicsFilter[];
  public get filter() {
    return this._filter;
  }
  public set filter(value: DataOciCoreNetworkSecurityGroupVnicsFilter[] | undefined) {
    this._filter = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      network_security_group_id: this._networkSecurityGroupId,
      filter: this._filter,
    };
  }
}
