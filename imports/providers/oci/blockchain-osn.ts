// https://www.terraform.io/docs/providers/oci/r/blockchain_osn.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "ad": {
        "type": "string",
        "required": true
      },
      "blockchain_platform_id": {
        "type": "string",
        "required": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "osn_key": {
        "type": "string",
        "computed": true
      },
      "state": {
        "type": "string",
        "computed": true
      }
    },
    "block_types": {
      "ocpu_allocation_param": {
        "nesting_mode": "list",
        "block": {
          "attributes": {
            "ocpu_allocation_number": {
              "type": "number",
              "required": true
            }
          }
        },
        "max_items": 1
      },
      "timeouts": {
        "nesting_mode": "single",
        "block": {
          "attributes": {
            "create": {
              "type": "string",
              "optional": true
            },
            "delete": {
              "type": "string",
              "optional": true
            },
            "update": {
              "type": "string",
              "optional": true
            }
          }
        }
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface BlockchainOsnConfig extends TerraformMetaArguments {
  readonly ad: string;
  readonly blockchainPlatformId: string;
  /** ocpu_allocation_param block */
  readonly ocpuAllocationParam?: BlockchainOsnOcpuAllocationParam[];
  /** timeouts block */
  readonly timeouts?: BlockchainOsnTimeouts;
}
export interface BlockchainOsnOcpuAllocationParam {
  readonly ocpuAllocationNumber: number;
}
export interface BlockchainOsnTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

// Resource

export class BlockchainOsn extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: BlockchainOsnConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_blockchain_osn',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._ad = config.ad;
    this._blockchainPlatformId = config.blockchainPlatformId;
    this._ocpuAllocationParam = config.ocpuAllocationParam;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ad - computed: false, optional: false, required: true
  private _ad: string;
  public get ad() {
    return this._ad;
  }
  public set ad(value: string) {
    this._ad = value;
  }

  // blockchain_platform_id - computed: false, optional: false, required: true
  private _blockchainPlatformId: string;
  public get blockchainPlatformId() {
    return this._blockchainPlatformId;
  }
  public set blockchainPlatformId(value: string) {
    this._blockchainPlatformId = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // osn_key - computed: true, optional: false, required: true
  public get osnKey() {
    return this.getStringAttribute('osn_key');
  }

  // state - computed: true, optional: false, required: true
  public get state() {
    return this.getStringAttribute('state');
  }

  // ocpu_allocation_param - computed: false, optional: true, required: false
  private _ocpuAllocationParam?: BlockchainOsnOcpuAllocationParam[];
  public get ocpuAllocationParam() {
    return this._ocpuAllocationParam;
  }
  public set ocpuAllocationParam(value: BlockchainOsnOcpuAllocationParam[] | undefined) {
    this._ocpuAllocationParam = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: BlockchainOsnTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: BlockchainOsnTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      ad: this._ad,
      blockchain_platform_id: this._blockchainPlatformId,
      ocpu_allocation_param: this._ocpuAllocationParam,
      timeouts: this._timeouts,
    };
  }
}
