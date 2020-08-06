// https://www.terraform.io/docs/providers/oci/r/data_oci_core_instance.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "agent_config": {
        "type": [
          "list",
          [
            "object",
            {
              "is_management_disabled": "bool",
              "is_monitoring_disabled": "bool"
            }
          ]
        ],
        "computed": true
      },
      "availability_domain": {
        "type": "string",
        "computed": true
      },
      "boot_volume_id": {
        "type": "string",
        "computed": true
      },
      "compartment_id": {
        "type": "string",
        "computed": true
      },
      "create_vnic_details": {
        "type": [
          "list",
          [
            "object",
            {
              "assign_public_ip": "string",
              "defined_tags": [
                "map",
                "string"
              ],
              "display_name": "string",
              "freeform_tags": [
                "map",
                "string"
              ],
              "hostname_label": "string",
              "nsg_ids": [
                "list",
                "string"
              ],
              "private_ip": "string",
              "skip_source_dest_check": "bool",
              "subnet_id": "string",
              "vlan_id": "string"
            }
          ]
        ],
        "computed": true
      },
      "dedicated_vm_host_id": {
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
      "display_name": {
        "type": "string",
        "computed": true
      },
      "extended_metadata": {
        "type": [
          "map",
          "string"
        ],
        "computed": true
      },
      "fault_domain": {
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
      "hostname_label": {
        "type": "string",
        "computed": true
      },
      "id": {
        "type": "string",
        "computed": true
      },
      "image": {
        "type": "string",
        "computed": true
      },
      "instance_id": {
        "type": "string",
        "required": true
      },
      "ipxe_script": {
        "type": "string",
        "computed": true
      },
      "is_pv_encryption_in_transit_enabled": {
        "type": "bool",
        "computed": true
      },
      "launch_mode": {
        "type": "string",
        "computed": true
      },
      "launch_options": {
        "type": [
          "list",
          [
            "object",
            {
              "boot_volume_type": "string",
              "firmware": "string",
              "is_consistent_volume_naming_enabled": "bool",
              "is_pv_encryption_in_transit_enabled": "bool",
              "network_type": "string",
              "remote_data_volume_type": "string"
            }
          ]
        ],
        "computed": true
      },
      "metadata": {
        "type": [
          "map",
          "string"
        ],
        "computed": true
      },
      "preserve_boot_volume": {
        "type": "bool",
        "computed": true
      },
      "private_ip": {
        "type": "string",
        "computed": true
      },
      "public_ip": {
        "type": "string",
        "computed": true
      },
      "region": {
        "type": "string",
        "computed": true
      },
      "shape": {
        "type": "string",
        "computed": true
      },
      "shape_config": {
        "type": [
          "list",
          [
            "object",
            {
              "gpu_description": "string",
              "gpus": "number",
              "local_disk_description": "string",
              "local_disks": "number",
              "local_disks_total_size_in_gbs": "number",
              "max_vnic_attachments": "number",
              "memory_in_gbs": "number",
              "networking_bandwidth_in_gbps": "number",
              "ocpus": "number",
              "processor_description": "string"
            }
          ]
        ],
        "computed": true
      },
      "source_details": {
        "type": [
          "list",
          [
            "object",
            {
              "boot_volume_size_in_gbs": "string",
              "kms_key_id": "string",
              "source_id": "string",
              "source_type": "string"
            }
          ]
        ],
        "computed": true
      },
      "state": {
        "type": "string",
        "computed": true
      },
      "subnet_id": {
        "type": "string",
        "computed": true
      },
      "system_tags": {
        "type": [
          "map",
          "string"
        ],
        "computed": true
      },
      "time_created": {
        "type": "string",
        "computed": true
      },
      "time_maintenance_reboot_due": {
        "type": "string",
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

export interface DataOciCoreInstanceConfig extends TerraformMetaArguments {
  readonly instanceId: string;
}
export class DataOciCoreInstanceAgentConfig extends ComplexComputedList {

  // is_management_disabled - computed: true, optional: false, required: true
  public get isManagementDisabled() {
    return this.getBooleanAttribute('is_management_disabled');
  }

  // is_monitoring_disabled - computed: true, optional: false, required: true
  public get isMonitoringDisabled() {
    return this.getBooleanAttribute('is_monitoring_disabled');
  }
}
export class DataOciCoreInstanceCreateVnicDetails extends ComplexComputedList {

  // assign_public_ip - computed: true, optional: false, required: true
  public get assignPublicIp() {
    return this.getStringAttribute('assign_public_ip');
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

  // hostname_label - computed: true, optional: false, required: true
  public get hostnameLabel() {
    return this.getStringAttribute('hostname_label');
  }

  // nsg_ids - computed: true, optional: false, required: true
  public get nsgIds() {
    return this.getListAttribute('nsg_ids');
  }

  // private_ip - computed: true, optional: false, required: true
  public get privateIp() {
    return this.getStringAttribute('private_ip');
  }

  // skip_source_dest_check - computed: true, optional: false, required: true
  public get skipSourceDestCheck() {
    return this.getBooleanAttribute('skip_source_dest_check');
  }

  // subnet_id - computed: true, optional: false, required: true
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }

  // vlan_id - computed: true, optional: false, required: true
  public get vlanId() {
    return this.getStringAttribute('vlan_id');
  }
}
export class DataOciCoreInstanceLaunchOptions extends ComplexComputedList {

  // boot_volume_type - computed: true, optional: false, required: true
  public get bootVolumeType() {
    return this.getStringAttribute('boot_volume_type');
  }

  // firmware - computed: true, optional: false, required: true
  public get firmware() {
    return this.getStringAttribute('firmware');
  }

  // is_consistent_volume_naming_enabled - computed: true, optional: false, required: true
  public get isConsistentVolumeNamingEnabled() {
    return this.getBooleanAttribute('is_consistent_volume_naming_enabled');
  }

  // is_pv_encryption_in_transit_enabled - computed: true, optional: false, required: true
  public get isPvEncryptionInTransitEnabled() {
    return this.getBooleanAttribute('is_pv_encryption_in_transit_enabled');
  }

  // network_type - computed: true, optional: false, required: true
  public get networkType() {
    return this.getStringAttribute('network_type');
  }

  // remote_data_volume_type - computed: true, optional: false, required: true
  public get remoteDataVolumeType() {
    return this.getStringAttribute('remote_data_volume_type');
  }
}
export class DataOciCoreInstanceShapeConfig extends ComplexComputedList {

  // gpu_description - computed: true, optional: false, required: true
  public get gpuDescription() {
    return this.getStringAttribute('gpu_description');
  }

  // gpus - computed: true, optional: false, required: true
  public get gpus() {
    return this.getNumberAttribute('gpus');
  }

  // local_disk_description - computed: true, optional: false, required: true
  public get localDiskDescription() {
    return this.getStringAttribute('local_disk_description');
  }

  // local_disks - computed: true, optional: false, required: true
  public get localDisks() {
    return this.getNumberAttribute('local_disks');
  }

  // local_disks_total_size_in_gbs - computed: true, optional: false, required: true
  public get localDisksTotalSizeInGbs() {
    return this.getNumberAttribute('local_disks_total_size_in_gbs');
  }

  // max_vnic_attachments - computed: true, optional: false, required: true
  public get maxVnicAttachments() {
    return this.getNumberAttribute('max_vnic_attachments');
  }

  // memory_in_gbs - computed: true, optional: false, required: true
  public get memoryInGbs() {
    return this.getNumberAttribute('memory_in_gbs');
  }

  // networking_bandwidth_in_gbps - computed: true, optional: false, required: true
  public get networkingBandwidthInGbps() {
    return this.getNumberAttribute('networking_bandwidth_in_gbps');
  }

  // ocpus - computed: true, optional: false, required: true
  public get ocpus() {
    return this.getNumberAttribute('ocpus');
  }

  // processor_description - computed: true, optional: false, required: true
  public get processorDescription() {
    return this.getStringAttribute('processor_description');
  }
}
export class DataOciCoreInstanceSourceDetails extends ComplexComputedList {

  // boot_volume_size_in_gbs - computed: true, optional: false, required: true
  public get bootVolumeSizeInGbs() {
    return this.getStringAttribute('boot_volume_size_in_gbs');
  }

  // kms_key_id - computed: true, optional: false, required: true
  public get kmsKeyId() {
    return this.getStringAttribute('kms_key_id');
  }

  // source_id - computed: true, optional: false, required: true
  public get sourceId() {
    return this.getStringAttribute('source_id');
  }

  // source_type - computed: true, optional: false, required: true
  public get sourceType() {
    return this.getStringAttribute('source_type');
  }
}

// Resource

export class DataOciCoreInstance extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataOciCoreInstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_core_instance',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._instanceId = config.instanceId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // agent_config - computed: true, optional: false, required: true
  public agentConfig(index: string) {
    return new DataOciCoreInstanceAgentConfig(this, 'agent_config', index);
  }

  // availability_domain - computed: true, optional: false, required: true
  public get availabilityDomain() {
    return this.getStringAttribute('availability_domain');
  }

  // boot_volume_id - computed: true, optional: false, required: true
  public get bootVolumeId() {
    return this.getStringAttribute('boot_volume_id');
  }

  // compartment_id - computed: true, optional: false, required: true
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // create_vnic_details - computed: true, optional: false, required: true
  public createVnicDetails(index: string) {
    return new DataOciCoreInstanceCreateVnicDetails(this, 'create_vnic_details', index);
  }

  // dedicated_vm_host_id - computed: true, optional: false, required: true
  public get dedicatedVmHostId() {
    return this.getStringAttribute('dedicated_vm_host_id');
  }

  // defined_tags - computed: true, optional: false, required: true
  public definedTags(key: string): string {
    return new StringMap(this, 'defined_tags').lookup(key);
  }

  // display_name - computed: true, optional: false, required: true
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // extended_metadata - computed: true, optional: false, required: true
  public extendedMetadata(key: string): string {
    return new StringMap(this, 'extended_metadata').lookup(key);
  }

  // fault_domain - computed: true, optional: false, required: true
  public get faultDomain() {
    return this.getStringAttribute('fault_domain');
  }

  // freeform_tags - computed: true, optional: false, required: true
  public freeformTags(key: string): string {
    return new StringMap(this, 'freeform_tags').lookup(key);
  }

  // hostname_label - computed: true, optional: false, required: true
  public get hostnameLabel() {
    return this.getStringAttribute('hostname_label');
  }

  // id - computed: true, optional: false, required: true
  public get id() {
    return this.getStringAttribute('id');
  }

  // image - computed: true, optional: false, required: true
  public get image() {
    return this.getStringAttribute('image');
  }

  // instance_id - computed: false, optional: false, required: true
  private _instanceId: string;
  public get instanceId() {
    return this._instanceId;
  }
  public set instanceId(value: string) {
    this._instanceId = value;
  }

  // ipxe_script - computed: true, optional: false, required: true
  public get ipxeScript() {
    return this.getStringAttribute('ipxe_script');
  }

  // is_pv_encryption_in_transit_enabled - computed: true, optional: false, required: true
  public get isPvEncryptionInTransitEnabled() {
    return this.getBooleanAttribute('is_pv_encryption_in_transit_enabled');
  }

  // launch_mode - computed: true, optional: false, required: true
  public get launchMode() {
    return this.getStringAttribute('launch_mode');
  }

  // launch_options - computed: true, optional: false, required: true
  public launchOptions(index: string) {
    return new DataOciCoreInstanceLaunchOptions(this, 'launch_options', index);
  }

  // metadata - computed: true, optional: false, required: true
  public metadata(key: string): string {
    return new StringMap(this, 'metadata').lookup(key);
  }

  // preserve_boot_volume - computed: true, optional: false, required: true
  public get preserveBootVolume() {
    return this.getBooleanAttribute('preserve_boot_volume');
  }

  // private_ip - computed: true, optional: false, required: true
  public get privateIp() {
    return this.getStringAttribute('private_ip');
  }

  // public_ip - computed: true, optional: false, required: true
  public get publicIp() {
    return this.getStringAttribute('public_ip');
  }

  // region - computed: true, optional: false, required: true
  public get region() {
    return this.getStringAttribute('region');
  }

  // shape - computed: true, optional: false, required: true
  public get shape() {
    return this.getStringAttribute('shape');
  }

  // shape_config - computed: true, optional: false, required: true
  public shapeConfig(index: string) {
    return new DataOciCoreInstanceShapeConfig(this, 'shape_config', index);
  }

  // source_details - computed: true, optional: false, required: true
  public sourceDetails(index: string) {
    return new DataOciCoreInstanceSourceDetails(this, 'source_details', index);
  }

  // state - computed: true, optional: false, required: true
  public get state() {
    return this.getStringAttribute('state');
  }

  // subnet_id - computed: true, optional: false, required: true
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }

  // system_tags - computed: true, optional: false, required: true
  public systemTags(key: string): string {
    return new StringMap(this, 'system_tags').lookup(key);
  }

  // time_created - computed: true, optional: false, required: true
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_maintenance_reboot_due - computed: true, optional: false, required: true
  public get timeMaintenanceRebootDue() {
    return this.getStringAttribute('time_maintenance_reboot_due');
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      instance_id: this._instanceId,
    };
  }
}
