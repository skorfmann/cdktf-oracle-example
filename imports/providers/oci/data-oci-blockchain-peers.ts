// https://www.terraform.io/docs/providers/oci/r/data_oci_blockchain_peers.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "blockchain_platform_id": {
        "type": "string",
        "required": true
      },
      "display_name": {
        "type": "string",
        "optional": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "peer_collection": {
        "type": [
          "list",
          [
            "object",
            {
              "items": [
                "list",
                [
                  "object",
                  {
                    "ad": "string",
                    "alias": "string",
                    "blockchain_platform_id": "string",
                    "host": "string",
                    "ocpu_allocation_param": [
                      "list",
                      [
                        "object",
                        {
                          "ocpu_allocation_number": "number"
                        }
                      ]
                    ],
                    "peer_key": "string",
                    "role": "string",
                    "state": "string"
                  }
                ]
              ]
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

export interface DataOciBlockchainPeersConfig extends TerraformMetaArguments {
  readonly blockchainPlatformId: string;
  readonly displayName?: string;
  /** filter block */
  readonly filter?: DataOciBlockchainPeersFilter[];
}
export class DataOciBlockchainPeersPeerCollectionItemsOcpuAllocationParam extends ComplexComputedList {

  // ocpu_allocation_number - computed: true, optional: false, required: true
  public get ocpuAllocationNumber() {
    return this.getNumberAttribute('ocpu_allocation_number');
  }
}
export class DataOciBlockchainPeersPeerCollectionItems extends ComplexComputedList {

  // ad - computed: true, optional: false, required: true
  public get ad() {
    return this.getStringAttribute('ad');
  }

  // alias - computed: true, optional: false, required: true
  public get alias() {
    return this.getStringAttribute('alias');
  }

  // blockchain_platform_id - computed: true, optional: false, required: true
  public get blockchainPlatformId() {
    return this.getStringAttribute('blockchain_platform_id');
  }

  // host - computed: true, optional: false, required: true
  public get host() {
    return this.getStringAttribute('host');
  }

  // ocpu_allocation_param - computed: true, optional: false, required: true
  public get ocpuAllocationParam() {
    return 'not implemented' as any;
  }

  // peer_key - computed: true, optional: false, required: true
  public get peerKey() {
    return this.getStringAttribute('peer_key');
  }

  // role - computed: true, optional: false, required: true
  public get role() {
    return this.getStringAttribute('role');
  }

  // state - computed: true, optional: false, required: true
  public get state() {
    return this.getStringAttribute('state');
  }
}
export class DataOciBlockchainPeersPeerCollection extends ComplexComputedList {

  // items - computed: true, optional: false, required: true
  public get items() {
    return 'not implemented' as any;
  }
}
export interface DataOciBlockchainPeersFilter {
  readonly name: string;
  readonly regex?: boolean;
  readonly values: string[];
}

// Resource

export class DataOciBlockchainPeers extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataOciBlockchainPeersConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_blockchain_peers',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._blockchainPlatformId = config.blockchainPlatformId;
    this._displayName = config.displayName;
    this._filter = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // blockchain_platform_id - computed: false, optional: false, required: true
  private _blockchainPlatformId: string;
  public get blockchainPlatformId() {
    return this._blockchainPlatformId;
  }
  public set blockchainPlatformId(value: string) {
    this._blockchainPlatformId = value;
  }

  // display_name - computed: false, optional: true, required: false
  private _displayName?: string;
  public get displayName() {
    return this._displayName;
  }
  public set displayName(value: string | undefined) {
    this._displayName = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // peer_collection - computed: true, optional: false, required: true
  public peerCollection(index: string) {
    return new DataOciBlockchainPeersPeerCollection(this, 'peer_collection', index);
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: DataOciBlockchainPeersFilter[];
  public get filter() {
    return this._filter;
  }
  public set filter(value: DataOciBlockchainPeersFilter[] | undefined) {
    this._filter = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      blockchain_platform_id: this._blockchainPlatformId,
      display_name: this._displayName,
      filter: this._filter,
    };
  }
}
