// https://www.terraform.io/docs/providers/oci/r/data_oci_blockchain_blockchain_platform.html
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
      "ca_cert_archive_text": {
        "type": "string",
        "computed": true
      },
      "compartment_id": {
        "type": "string",
        "computed": true
      },
      "component_details": {
        "type": [
          "list",
          [
            "object",
            {
              "osns": [
                "list",
                [
                  "object",
                  {
                    "ad": "string",
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
              ],
              "peers": [
                "list",
                [
                  "object",
                  {
                    "ad": "string",
                    "alias": "string",
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
      },
      "compute_shape": {
        "type": "string",
        "computed": true
      },
      "defined_tags": {
        "type": [
          "map",
          "string"
        ],
        "computed": true
      },
      "description": {
        "type": "string",
        "computed": true
      },
      "display_name": {
        "type": "string",
        "computed": true
      },
      "federated_user_id": {
        "type": "string",
        "computed": true
      },
      "freeform_tags": {
        "type": [
          "map",
          "string"
        ],
        "computed": true
      },
      "host_ocpu_utilization_info": {
        "type": [
          "list",
          [
            "object",
            {
              "host": "string",
              "ocpu_capacity_number": "number",
              "ocpu_utilization_number": "number"
            }
          ]
        ],
        "computed": true
      },
      "id": {
        "type": "string",
        "computed": true
      },
      "idcs_access_token": {
        "type": "string",
        "computed": true,
        "sensitive": true
      },
      "is_byol": {
        "type": "bool",
        "computed": true
      },
      "is_multi_ad": {
        "type": "bool",
        "computed": true
      },
      "lifecycle_details": {
        "type": "string",
        "computed": true
      },
      "platform_role": {
        "type": "string",
        "computed": true
      },
      "replicas": {
        "type": [
          "list",
          [
            "object",
            {
              "ca_count": "number",
              "console_count": "number",
              "proxy_count": "number"
            }
          ]
        ],
        "computed": true
      },
      "service_endpoint": {
        "type": "string",
        "computed": true
      },
      "service_version": {
        "type": "string",
        "computed": true
      },
      "state": {
        "type": "string",
        "computed": true
      },
      "storage_size_in_tbs": {
        "type": "number",
        "computed": true
      },
      "storage_used_in_tbs": {
        "type": "number",
        "computed": true
      },
      "time_created": {
        "type": "string",
        "computed": true
      },
      "time_updated": {
        "type": "string",
        "computed": true
      },
      "total_ocpu_capacity": {
        "type": "number",
        "computed": true
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';
import { ComplexComputedList } from "cdktf";
import { StringMap } from "cdktf";

// Configuration

export interface DataOciBlockchainBlockchainPlatformConfig extends TerraformMetaArguments {
  readonly blockchainPlatformId: string;
}
export class DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParam extends ComplexComputedList {

  // ocpu_allocation_number - computed: true, optional: false, required: true
  public get ocpuAllocationNumber() {
    return this.getNumberAttribute('ocpu_allocation_number');
  }
}
export class DataOciBlockchainBlockchainPlatformComponentDetailsOsns extends ComplexComputedList {

  // ad - computed: true, optional: false, required: true
  public get ad() {
    return this.getStringAttribute('ad');
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
export class DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParam extends ComplexComputedList {

  // ocpu_allocation_number - computed: true, optional: false, required: true
  public get ocpuAllocationNumber() {
    return this.getNumberAttribute('ocpu_allocation_number');
  }
}
export class DataOciBlockchainBlockchainPlatformComponentDetailsPeers extends ComplexComputedList {

  // ad - computed: true, optional: false, required: true
  public get ad() {
    return this.getStringAttribute('ad');
  }

  // alias - computed: true, optional: false, required: true
  public get alias() {
    return this.getStringAttribute('alias');
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
export class DataOciBlockchainBlockchainPlatformComponentDetails extends ComplexComputedList {

  // osns - computed: true, optional: false, required: true
  public get osns() {
    return 'not implemented' as any;
  }

  // peers - computed: true, optional: false, required: true
  public get peers() {
    return 'not implemented' as any;
  }
}
export class DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfo extends ComplexComputedList {

  // host - computed: true, optional: false, required: true
  public get host() {
    return this.getStringAttribute('host');
  }

  // ocpu_capacity_number - computed: true, optional: false, required: true
  public get ocpuCapacityNumber() {
    return this.getNumberAttribute('ocpu_capacity_number');
  }

  // ocpu_utilization_number - computed: true, optional: false, required: true
  public get ocpuUtilizationNumber() {
    return this.getNumberAttribute('ocpu_utilization_number');
  }
}
export class DataOciBlockchainBlockchainPlatformReplicas extends ComplexComputedList {

  // ca_count - computed: true, optional: false, required: true
  public get caCount() {
    return this.getNumberAttribute('ca_count');
  }

  // console_count - computed: true, optional: false, required: true
  public get consoleCount() {
    return this.getNumberAttribute('console_count');
  }

  // proxy_count - computed: true, optional: false, required: true
  public get proxyCount() {
    return this.getNumberAttribute('proxy_count');
  }
}

// Resource

export class DataOciBlockchainBlockchainPlatform extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataOciBlockchainBlockchainPlatformConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_blockchain_blockchain_platform',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._blockchainPlatformId = config.blockchainPlatformId;
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

  // ca_cert_archive_text - computed: true, optional: false, required: true
  public get caCertArchiveText() {
    return this.getStringAttribute('ca_cert_archive_text');
  }

  // compartment_id - computed: true, optional: false, required: true
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // component_details - computed: true, optional: false, required: true
  public componentDetails(index: string) {
    return new DataOciBlockchainBlockchainPlatformComponentDetails(this, 'component_details', index);
  }

  // compute_shape - computed: true, optional: false, required: true
  public get computeShape() {
    return this.getStringAttribute('compute_shape');
  }

  // defined_tags - computed: true, optional: false, required: true
  public definedTags(key: string): string {
    return new StringMap(this, 'defined_tags').lookup(key);
  }

  // description - computed: true, optional: false, required: true
  public get description() {
    return this.getStringAttribute('description');
  }

  // display_name - computed: true, optional: false, required: true
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // federated_user_id - computed: true, optional: false, required: true
  public get federatedUserId() {
    return this.getStringAttribute('federated_user_id');
  }

  // freeform_tags - computed: true, optional: false, required: true
  public freeformTags(key: string): string {
    return new StringMap(this, 'freeform_tags').lookup(key);
  }

  // host_ocpu_utilization_info - computed: true, optional: false, required: true
  public hostOcpuUtilizationInfo(index: string) {
    return new DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfo(this, 'host_ocpu_utilization_info', index);
  }

  // id - computed: true, optional: false, required: true
  public get id() {
    return this.getStringAttribute('id');
  }

  // idcs_access_token - computed: true, optional: false, required: true
  public get idcsAccessToken() {
    return this.getStringAttribute('idcs_access_token');
  }

  // is_byol - computed: true, optional: false, required: true
  public get isByol() {
    return this.getBooleanAttribute('is_byol');
  }

  // is_multi_ad - computed: true, optional: false, required: true
  public get isMultiAd() {
    return this.getBooleanAttribute('is_multi_ad');
  }

  // lifecycle_details - computed: true, optional: false, required: true
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // platform_role - computed: true, optional: false, required: true
  public get platformRole() {
    return this.getStringAttribute('platform_role');
  }

  // replicas - computed: true, optional: false, required: true
  public replicas(index: string) {
    return new DataOciBlockchainBlockchainPlatformReplicas(this, 'replicas', index);
  }

  // service_endpoint - computed: true, optional: false, required: true
  public get serviceEndpoint() {
    return this.getStringAttribute('service_endpoint');
  }

  // service_version - computed: true, optional: false, required: true
  public get serviceVersion() {
    return this.getStringAttribute('service_version');
  }

  // state - computed: true, optional: false, required: true
  public get state() {
    return this.getStringAttribute('state');
  }

  // storage_size_in_tbs - computed: true, optional: false, required: true
  public get storageSizeInTbs() {
    return this.getNumberAttribute('storage_size_in_tbs');
  }

  // storage_used_in_tbs - computed: true, optional: false, required: true
  public get storageUsedInTbs() {
    return this.getNumberAttribute('storage_used_in_tbs');
  }

  // time_created - computed: true, optional: false, required: true
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_updated - computed: true, optional: false, required: true
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // total_ocpu_capacity - computed: true, optional: false, required: true
  public get totalOcpuCapacity() {
    return this.getNumberAttribute('total_ocpu_capacity');
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      blockchain_platform_id: this._blockchainPlatformId,
    };
  }
}
