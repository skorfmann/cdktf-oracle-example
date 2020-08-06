// https://www.terraform.io/docs/providers/oci/r/blockchain_peer.html
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
      "alias": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "blockchain_platform_id": {
        "type": "string",
        "required": true
      },
      "host": {
        "type": "string",
        "computed": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "peer_key": {
        "type": "string",
        "computed": true
      },
      "role": {
        "type": "string",
        "required": true
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
        "min_items": 1,
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

export interface BlockchainPeerConfig extends TerraformMetaArguments {
  readonly ad: string;
  readonly alias?: string;
  readonly blockchainPlatformId: string;
  readonly role: string;
  /** ocpu_allocation_param block */
  readonly ocpuAllocationParam: BlockchainPeerOcpuAllocationParam[];
  /** timeouts block */
  readonly timeouts?: BlockchainPeerTimeouts;
}
export interface BlockchainPeerOcpuAllocationParam {
  readonly ocpuAllocationNumber: number;
}
export interface BlockchainPeerTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

// Resource

export class BlockchainPeer extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: BlockchainPeerConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_blockchain_peer',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._ad = config.ad;
    this._alias = config.alias;
    this._blockchainPlatformId = config.blockchainPlatformId;
    this._role = config.role;
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

  // alias - computed: true, optional: true, required: false
  private _alias?: string;
  public get alias() {
    return this._alias ?? this.getStringAttribute('alias');
  }
  public set alias(value: string | undefined) {
    this._alias = value;
  }

  // blockchain_platform_id - computed: false, optional: false, required: true
  private _blockchainPlatformId: string;
  public get blockchainPlatformId() {
    return this._blockchainPlatformId;
  }
  public set blockchainPlatformId(value: string) {
    this._blockchainPlatformId = value;
  }

  // host - computed: true, optional: false, required: true
  public get host() {
    return this.getStringAttribute('host');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // peer_key - computed: true, optional: false, required: true
  public get peerKey() {
    return this.getStringAttribute('peer_key');
  }

  // role - computed: false, optional: false, required: true
  private _role: string;
  public get role() {
    return this._role;
  }
  public set role(value: string) {
    this._role = value;
  }

  // state - computed: true, optional: false, required: true
  public get state() {
    return this.getStringAttribute('state');
  }

  // ocpu_allocation_param - computed: false, optional: false, required: true
  private _ocpuAllocationParam: BlockchainPeerOcpuAllocationParam[];
  public get ocpuAllocationParam() {
    return this._ocpuAllocationParam;
  }
  public set ocpuAllocationParam(value: BlockchainPeerOcpuAllocationParam[]) {
    this._ocpuAllocationParam = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: BlockchainPeerTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: BlockchainPeerTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      ad: this._ad,
      alias: this._alias,
      blockchain_platform_id: this._blockchainPlatformId,
      role: this._role,
      ocpu_allocation_param: this._ocpuAllocationParam,
      timeouts: this._timeouts,
    };
  }
}
