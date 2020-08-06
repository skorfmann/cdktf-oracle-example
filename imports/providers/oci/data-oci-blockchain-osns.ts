// https://www.terraform.io/docs/providers/oci/r/data_oci_blockchain_osns.html
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
      "osn_collection": {
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
                    "blockchain_platform_id": "string",
                    "ocpu_allocation_param": [
                      "list",
                      [
                        "object",
                        {
                          "ocpu_allocation_number": "number"
                        }
                      ]
                    ],
                    "osn_key": "string",
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

export interface DataOciBlockchainOsnsConfig extends TerraformMetaArguments {
  readonly blockchainPlatformId: string;
  readonly displayName?: string;
  /** filter block */
  readonly filter?: DataOciBlockchainOsnsFilter[];
}
export class DataOciBlockchainOsnsOsnCollectionItemsOcpuAllocationParam extends ComplexComputedList {

  // ocpu_allocation_number - computed: true, optional: false, required: true
  public get ocpuAllocationNumber() {
    return this.getNumberAttribute('ocpu_allocation_number');
  }
}
export class DataOciBlockchainOsnsOsnCollectionItems extends ComplexComputedList {

  // ad - computed: true, optional: false, required: true
  public get ad() {
    return this.getStringAttribute('ad');
  }

  // blockchain_platform_id - computed: true, optional: false, required: true
  public get blockchainPlatformId() {
    return this.getStringAttribute('blockchain_platform_id');
  }

  // ocpu_allocation_param - computed: true, optional: false, required: true
  public get ocpuAllocationParam() {
    return 'not implemented' as any;
  }

  // osn_key - computed: true, optional: false, required: true
  public get osnKey() {
    return this.getStringAttribute('osn_key');
  }

  // state - computed: true, optional: false, required: true
  public get state() {
    return this.getStringAttribute('state');
  }
}
export class DataOciBlockchainOsnsOsnCollection extends ComplexComputedList {

  // items - computed: true, optional: false, required: true
  public get items() {
    return 'not implemented' as any;
  }
}
export interface DataOciBlockchainOsnsFilter {
  readonly name: string;
  readonly regex?: boolean;
  readonly values: string[];
}

// Resource

export class DataOciBlockchainOsns extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataOciBlockchainOsnsConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_blockchain_osns',
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

  // osn_collection - computed: true, optional: false, required: true
  public osnCollection(index: string) {
    return new DataOciBlockchainOsnsOsnCollection(this, 'osn_collection', index);
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: DataOciBlockchainOsnsFilter[];
  public get filter() {
    return this._filter;
  }
  public set filter(value: DataOciBlockchainOsnsFilter[] | undefined) {
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
