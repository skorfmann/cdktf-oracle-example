// https://www.terraform.io/docs/providers/oci/r/data_oci_ocvp_sddc.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "actual_esxi_hosts_count": {
        "type": "number",
        "computed": true
      },
      "compartment_id": {
        "type": "string",
        "computed": true
      },
      "compute_availability_domain": {
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
      "esxi_hosts_count": {
        "type": "number",
        "computed": true
      },
      "freeform_tags": {
        "type": [
          "map",
          "string"
        ],
        "computed": true
      },
      "id": {
        "type": "string",
        "computed": true
      },
      "instance_display_name_prefix": {
        "type": "string",
        "computed": true
      },
      "nsx_edge_uplink1vlan_id": {
        "type": "string",
        "computed": true
      },
      "nsx_edge_uplink2vlan_id": {
        "type": "string",
        "computed": true
      },
      "nsx_edge_uplink_ip_id": {
        "type": "string",
        "computed": true
      },
      "nsx_edge_vtep_vlan_id": {
        "type": "string",
        "computed": true
      },
      "nsx_manager_fqdn": {
        "type": "string",
        "computed": true
      },
      "nsx_manager_initial_password": {
        "type": "string",
        "computed": true
      },
      "nsx_manager_private_ip_id": {
        "type": "string",
        "computed": true
      },
      "nsx_manager_username": {
        "type": "string",
        "computed": true
      },
      "nsx_overlay_segment_name": {
        "type": "string",
        "computed": true
      },
      "nsx_vtep_vlan_id": {
        "type": "string",
        "computed": true
      },
      "provisioning_subnet_id": {
        "type": "string",
        "computed": true
      },
      "sddc_id": {
        "type": "string",
        "required": true
      },
      "ssh_authorized_keys": {
        "type": "string",
        "computed": true
      },
      "state": {
        "type": "string",
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
      "vcenter_fqdn": {
        "type": "string",
        "computed": true
      },
      "vcenter_initial_password": {
        "type": "string",
        "computed": true
      },
      "vcenter_private_ip_id": {
        "type": "string",
        "computed": true
      },
      "vcenter_username": {
        "type": "string",
        "computed": true
      },
      "vmotion_vlan_id": {
        "type": "string",
        "computed": true
      },
      "vmware_software_version": {
        "type": "string",
        "computed": true
      },
      "vsan_vlan_id": {
        "type": "string",
        "computed": true
      },
      "vsphere_vlan_id": {
        "type": "string",
        "computed": true
      },
      "workload_network_cidr": {
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
import { StringMap } from "cdktf";

// Configuration

export interface DataOciOcvpSddcConfig extends TerraformMetaArguments {
  readonly sddcId: string;
}

// Resource

export class DataOciOcvpSddc extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataOciOcvpSddcConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_ocvp_sddc',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._sddcId = config.sddcId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // actual_esxi_hosts_count - computed: true, optional: false, required: true
  public get actualEsxiHostsCount() {
    return this.getNumberAttribute('actual_esxi_hosts_count');
  }

  // compartment_id - computed: true, optional: false, required: true
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // compute_availability_domain - computed: true, optional: false, required: true
  public get computeAvailabilityDomain() {
    return this.getStringAttribute('compute_availability_domain');
  }

  // defined_tags - computed: true, optional: false, required: true
  public definedTags(key: string): string {
    return new StringMap(this, 'defined_tags').lookup(key);
  }

  // display_name - computed: true, optional: false, required: true
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // esxi_hosts_count - computed: true, optional: false, required: true
  public get esxiHostsCount() {
    return this.getNumberAttribute('esxi_hosts_count');
  }

  // freeform_tags - computed: true, optional: false, required: true
  public freeformTags(key: string): string {
    return new StringMap(this, 'freeform_tags').lookup(key);
  }

  // id - computed: true, optional: false, required: true
  public get id() {
    return this.getStringAttribute('id');
  }

  // instance_display_name_prefix - computed: true, optional: false, required: true
  public get instanceDisplayNamePrefix() {
    return this.getStringAttribute('instance_display_name_prefix');
  }

  // nsx_edge_uplink1vlan_id - computed: true, optional: false, required: true
  public get nsxEdgeUplink1VlanId() {
    return this.getStringAttribute('nsx_edge_uplink1vlan_id');
  }

  // nsx_edge_uplink2vlan_id - computed: true, optional: false, required: true
  public get nsxEdgeUplink2VlanId() {
    return this.getStringAttribute('nsx_edge_uplink2vlan_id');
  }

  // nsx_edge_uplink_ip_id - computed: true, optional: false, required: true
  public get nsxEdgeUplinkIpId() {
    return this.getStringAttribute('nsx_edge_uplink_ip_id');
  }

  // nsx_edge_vtep_vlan_id - computed: true, optional: false, required: true
  public get nsxEdgeVtepVlanId() {
    return this.getStringAttribute('nsx_edge_vtep_vlan_id');
  }

  // nsx_manager_fqdn - computed: true, optional: false, required: true
  public get nsxManagerFqdn() {
    return this.getStringAttribute('nsx_manager_fqdn');
  }

  // nsx_manager_initial_password - computed: true, optional: false, required: true
  public get nsxManagerInitialPassword() {
    return this.getStringAttribute('nsx_manager_initial_password');
  }

  // nsx_manager_private_ip_id - computed: true, optional: false, required: true
  public get nsxManagerPrivateIpId() {
    return this.getStringAttribute('nsx_manager_private_ip_id');
  }

  // nsx_manager_username - computed: true, optional: false, required: true
  public get nsxManagerUsername() {
    return this.getStringAttribute('nsx_manager_username');
  }

  // nsx_overlay_segment_name - computed: true, optional: false, required: true
  public get nsxOverlaySegmentName() {
    return this.getStringAttribute('nsx_overlay_segment_name');
  }

  // nsx_vtep_vlan_id - computed: true, optional: false, required: true
  public get nsxVtepVlanId() {
    return this.getStringAttribute('nsx_vtep_vlan_id');
  }

  // provisioning_subnet_id - computed: true, optional: false, required: true
  public get provisioningSubnetId() {
    return this.getStringAttribute('provisioning_subnet_id');
  }

  // sddc_id - computed: false, optional: false, required: true
  private _sddcId: string;
  public get sddcId() {
    return this._sddcId;
  }
  public set sddcId(value: string) {
    this._sddcId = value;
  }

  // ssh_authorized_keys - computed: true, optional: false, required: true
  public get sshAuthorizedKeys() {
    return this.getStringAttribute('ssh_authorized_keys');
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

  // vcenter_fqdn - computed: true, optional: false, required: true
  public get vcenterFqdn() {
    return this.getStringAttribute('vcenter_fqdn');
  }

  // vcenter_initial_password - computed: true, optional: false, required: true
  public get vcenterInitialPassword() {
    return this.getStringAttribute('vcenter_initial_password');
  }

  // vcenter_private_ip_id - computed: true, optional: false, required: true
  public get vcenterPrivateIpId() {
    return this.getStringAttribute('vcenter_private_ip_id');
  }

  // vcenter_username - computed: true, optional: false, required: true
  public get vcenterUsername() {
    return this.getStringAttribute('vcenter_username');
  }

  // vmotion_vlan_id - computed: true, optional: false, required: true
  public get vmotionVlanId() {
    return this.getStringAttribute('vmotion_vlan_id');
  }

  // vmware_software_version - computed: true, optional: false, required: true
  public get vmwareSoftwareVersion() {
    return this.getStringAttribute('vmware_software_version');
  }

  // vsan_vlan_id - computed: true, optional: false, required: true
  public get vsanVlanId() {
    return this.getStringAttribute('vsan_vlan_id');
  }

  // vsphere_vlan_id - computed: true, optional: false, required: true
  public get vsphereVlanId() {
    return this.getStringAttribute('vsphere_vlan_id');
  }

  // workload_network_cidr - computed: true, optional: false, required: true
  public get workloadNetworkCidr() {
    return this.getStringAttribute('workload_network_cidr');
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      sddc_id: this._sddcId,
    };
  }
}
