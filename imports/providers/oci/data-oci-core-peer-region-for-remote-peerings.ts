// https://www.terraform.io/docs/providers/oci/r/data_oci_core_peer_region_for_remote_peerings.html
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
      "peer_region_for_remote_peerings": {
        "type": [
          "list",
          [
            "object",
            {
              "name": "string"
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

export interface DataOciCorePeerRegionForRemotePeeringsConfig extends TerraformMetaArguments {
  /** filter block */
  readonly filter?: DataOciCorePeerRegionForRemotePeeringsFilter[];
}
export class DataOciCorePeerRegionForRemotePeeringsPeerRegionForRemotePeerings extends ComplexComputedList {

  // name - computed: true, optional: false, required: true
  public get name() {
    return this.getStringAttribute('name');
  }
}
export interface DataOciCorePeerRegionForRemotePeeringsFilter {
  readonly name: string;
  readonly regex?: boolean;
  readonly values: string[];
}

// Resource

export class DataOciCorePeerRegionForRemotePeerings extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataOciCorePeerRegionForRemotePeeringsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'oci_core_peer_region_for_remote_peerings',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
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

  // peer_region_for_remote_peerings - computed: true, optional: false, required: true
  public peerRegionForRemotePeerings(index: string) {
    return new DataOciCorePeerRegionForRemotePeeringsPeerRegionForRemotePeerings(this, 'peer_region_for_remote_peerings', index);
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: DataOciCorePeerRegionForRemotePeeringsFilter[];
  public get filter() {
    return this._filter;
  }
  public set filter(value: DataOciCorePeerRegionForRemotePeeringsFilter[] | undefined) {
    this._filter = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      filter: this._filter,
    };
  }
}
